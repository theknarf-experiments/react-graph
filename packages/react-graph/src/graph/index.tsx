import React, { createContext, useContext, useReducer, useRef } from 'react';
import { useUID } from 'react-uid';
import useDraggable from './useDraggable';
import BackgroundGraph from './backgroundgraph';

interface Graph {
	nodes: any[];
	edges: any[];
}

const initialState : Graph = {
	nodes: [],
	edges: [],
}

const GraphContext = createContext<{
	state?: Graph;
	dispatch?: Function;
	getPosition?: Function;
	ref: { current: any };
}>({
	ref: { current: null }
});

enum ActionType {
	UpdateRelativePosition,
	UpdateAttribute,
	AddEdge,
	RemoveEdge,
};

type Uid = string;

type Actions =
 | { type: ActionType.UpdateRelativePosition, uid: Uid, x: Number, y: Number }
 | { type: ActionType.UpdateAttribute, uid: Uid, key: String, value: any }
 | { type: ActionType.AddEdge, fromNode: Uid, toNode: Uid };

const graphReducer = (state : Graph, action: Actions) => {
	switch(action.type) {
		case ActionType.UpdateRelativePosition:
			const newState = { ...state };
			const index = state.nodes.findIndex((node) => node.uid === action.uid);
			if(index === -1) {
				newState.nodes.push({uid: action.uid, x: action.x, y: action.y});
			} else {
				newState.nodes[index].x += action.x;
				newState.nodes[index].y += action.y;
			}
			return newState;
		case ActionType.UpdateAttribute:
		case ActionType.AddEdge:
		default:
			break;
	}

	return state;
};

const updatePosition = (uid: Uid, x: Number, y: Number) => ({ type: ActionType.UpdateRelativePosition, uid, x, y });

type Color = string;

interface GraphComponentProps {
	width: number,
	height: number,
	background?: Color,
}

const GraphComponent : React.FC<GraphComponentProps> = ({
	children,
	width,
	height,
	background = '#1c2e60'
}) => {
	const ref = useRef(null);
	const [state, dispatch] = useReducer(graphReducer, initialState);
	const getPosition = (uid: Uid) => {
		const node = state.nodes.find((node) => node.uid === uid);
		const defaultValues = { x: 0, y: 0 };
		return { ...defaultValues, ...node };
	}

	return <GraphContext.Provider value={{
		state,
		dispatch,
		getPosition,
		ref,
	}}>
		<div style={{
			width: `${width}px`,
			height: `${height}px`,
			backgroundColor: background,
			color: '#eaeaea',
			position: 'relative',
			overflow: 'hidden',
		}}
		ref={ref}
		>
			<BackgroundGraph
				height={height}
				width={width}
				vertical={[50, 10, 10, 10]}
				horizontal={[50, 10, 10, 10]}
				/>
			{children}
		</div>
	</GraphContext.Provider>
};

interface NodeProps {
	uid: Uid;
	dragged: { x: number, y: number };
}

const Node : React.FC<NodeProps> = ({ children, uid, dragged }) => {
	const { getPosition } = useContext(GraphContext);
	const { x, y } = getPosition!(uid);
	const left = x + dragged.x;
	const top =  y + dragged.y;

	return <div style={{
		position: 'absolute',
		userSelect: 'none',
		left: `${left}px`,
		top: `${top}px`,
	}}
	>
	{children}
	</div>
};

export const useNode = () => {
	const uid = useUID();

	// Draggable
	const { dispatch, ref } = useContext(GraphContext);
	const { dragged, onMouseDown } = useDraggable(ref, (dragged : { x: number, y: number}) => {
		dispatch!(updatePosition(
			uid,
			dragged.x,
			dragged.y,
		));
	});

	const Draggable : React.FC = ({ children }) => (
		<div onMouseDown={onMouseDown}>{children}</div>
	);

	return {
		uid,
		Node: ({ ...args }) => <Node uid={uid} dragged={dragged} {...args} />,
		Draggable,
	};
}

export default GraphComponent;
