(this["webpackJsonpreact-graph"]=this["webpackJsonpreact-graph"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var i,c=n(0),r=n(1),o=n.n(r),d=n(5),u=n.n(d),a=n(3),s=n(2),j=n(13),x={nodes:[],edges:[]},b=Object(r.createContext)({});!function(e){e[e.UpdatePosition=0]="UpdatePosition",e[e.UpdateAttribute=1]="UpdateAttribute",e[e.AddEdge=2]="AddEdge",e[e.RemoveEdge=3]="RemoveEdge"}(i||(i={}));var l=function(e,t){switch(t.type){case i.UpdatePosition:var n=Object(s.a)({},e),c=e.nodes.findIndex((function(e){return e.uid===t.uid}));return-1===c?n.nodes.push({uid:t.uid,x:t.x,y:t.y}):(n.nodes[c].x=t.x,n.nodes[c].y=t.y),n;case i.UpdateAttribute:case i.AddEdge:}return e},g=function(e){var t=e.children,n=e.uid,o=Object(r.useContext)(b),d=o.getPosition,u=o.dispatch,j=d(n),x=j.x,l=j.y,g=function(e){var t=Object(r.useState)({dragging:!1,initial:{x:0,y:0},current:{x:0,y:0}}),n=Object(a.a)(t,2),i=n[0],c=n[1];return{dragged:{x:i.current.x-i.initial.x,y:i.current.y-i.initial.y},onMouseDown:function(e){c({dragging:!0,initial:{x:e.clientX,y:e.clientY},current:{x:e.clientX,y:e.clientY}})},onMouseMove:function(e){i.dragging&&c(Object(s.a)(Object(s.a)({},i),{},{current:{x:e.clientX,y:e.clientY}}))},onMouseUp:function(t){i.dragging&&(e(),c({dragging:!1,initial:{x:0,y:0},current:{x:0,y:0}}))}}}((function(){u(function(e,t,n){return{type:i.UpdatePosition,uid:e,x:t,y:n}}(n,x+p.x,l+p.y))})),p=g.dragged,h=g.onMouseDown,O=g.onMouseMove,y=g.onMouseUp,v=x+p.x,f=l+p.y;return Object(c.jsxs)("div",{style:{position:"absolute",background:"black",userSelect:"none",left:"".concat(v,"px"),top:"".concat(f,"px")},onMouseDown:h,onMouseMove:O,onMouseUp:y,children:[Object(c.jsxs)("span",{children:["Uuid: ",n]}),Object(c.jsx)("div",{children:t})]})},p=function(){var e=Object(j.a)();return{Node:function(t){var n=Object.assign({},t);return Object(c.jsx)(g,Object(s.a)({uid:e},n))}}},h=function(e){var t=e.children,n=e.width,i=e.height,o=Object(r.useReducer)(l,x),d=Object(a.a)(o,2),u=d[0],j=d[1];return Object(c.jsx)(b.Provider,{value:{state:u,dispatch:j,getPosition:function(e){var t=u.nodes.find((function(t){return t.uid===e}));return Object(s.a)(Object(s.a)({},{x:0,y:0}),t)}},children:Object(c.jsx)("div",{style:{width:"".concat(n,"px"),height:"".concat(i,"px"),backgroundColor:"darkblue",color:"#eaeaea",position:"relative",overflow:"hidden"},children:t})})},O=function(){var e=p().Node;return Object(c.jsx)(e,{children:Object(c.jsx)("div",{style:{padding:"20px"},children:"generic node type 1"})})},y=function(){var e=p().Node;return Object(c.jsx)(e,{children:Object(c.jsx)("div",{style:{padding:"20px"},children:"generic node type 2"})})},v=function(){var e=Object(r.useState)(0),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsxs)(h,{width:1200,height:500,children:[Object(c.jsx)(O,{}),Object(c.jsx)(y,{}),".".repeat(n).split("").map((function(e,t){return Object(c.jsx)(y,{},t)}))]}),Object(c.jsx)("button",{onClick:function(){i(n+1)},children:"Add new"})]})};u.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.0c60a180.chunk.js.map