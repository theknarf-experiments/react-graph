import React, { useState } from 'react';
import Graph, { useNode } from './components/graph';

const GenericNode1 : React.FC = () => {
	const { Node } = useNode();	

	return <Node>
		generic node type 1	
	</Node>
}

const GenericNode2 : React.FC = () => {
	const { Node } = useNode();	

	return <Node>
		generic node type 2	
	</Node>
}

const App : React.FC = () => {
	const [num, setNum] = useState(0);
	const onClick = () => {
		setNum(num + 1);
	};

	return <div>
		<Graph>
			<GenericNode1 />
			<GenericNode2 />
			{
				'.'.repeat(num).split('').map((_, i) => (
					<GenericNode2 key={i} />
				))
			}
		</Graph>
		<button onClick={onClick}>Add new</button>
	</div>
};

export default App;
