(this["webpackJsonpreact-graph"]=this["webpackJsonpreact-graph"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var i,c=n(0),r=n(1),o=n.n(r),d=n(5),u=n.n(d),a=n(3),s=n(2),j=n(13),l={nodes:[],edges:[]},b=Object(r.createContext)({ref:{current:null}});!function(e){e[e.UpdatePosition=0]="UpdatePosition",e[e.UpdateAttribute=1]="UpdateAttribute",e[e.AddEdge=2]="AddEdge",e[e.RemoveEdge=3]="RemoveEdge"}(i||(i={}));var x=function(e,t){switch(t.type){case i.UpdatePosition:var n=Object(s.a)({},e),c=e.nodes.findIndex((function(e){return e.uid===t.uid}));return-1===c?n.nodes.push({uid:t.uid,x:t.x,y:t.y}):(n.nodes[c].x=t.x,n.nodes[c].y=t.y),n;case i.UpdateAttribute:case i.AddEdge:}return e},g=function(e){var t=e.children,n=e.uid,o=Object(r.useContext)(b),d=o.getPosition,u=o.dispatch,j=o.ref,l=d(n),x=l.x,g=l.y,p=function(e,t){var n=Object(r.useState)({dragging:!1,initial:{x:0,y:0},current:{x:0,y:0}}),i=Object(a.a)(n,2),c=i[0],o=i[1],d=function(e){c.dragging&&o(Object(s.a)(Object(s.a)({},c),{},{current:{x:e.clientX,y:e.clientY}}))};return Object(r.useEffect)((function(){var t=null;return e.current&&(t=e.current).addEventListener("mousemove",d),function(){t&&t.removeEventListener("mousemove",d)}})),{dragged:{x:c.current.x-c.initial.x,y:c.current.y-c.initial.y},onMouseDown:function(e){o({dragging:!0,initial:{x:e.clientX,y:e.clientY},current:{x:e.clientX,y:e.clientY}})},onMouseUp:function(e){c.dragging&&(t(),o({dragging:!1,initial:{x:0,y:0},current:{x:0,y:0}}))}}}(j,(function(){u(function(e,t,n){return{type:i.UpdatePosition,uid:e,x:t,y:n}}(n,x+O.x,g+O.y))})),O=p.dragged,f=p.onMouseDown,h=p.onMouseUp,v=x+O.x,y=g+O.y;return Object(c.jsxs)("div",{style:{position:"absolute",background:"black",userSelect:"none",left:"".concat(v,"px"),top:"".concat(y,"px")},onMouseDown:f,onMouseUp:h,children:[Object(c.jsxs)("span",{children:["Uuid: ",n]}),Object(c.jsx)("div",{children:t})]})},p=function(){var e=Object(j.a)();return{Node:function(t){var n=Object.assign({},t);return Object(c.jsx)(g,Object(s.a)({uid:e},n))}}},O=function(e){var t=e.children,n=e.width,i=e.height,o=Object(r.useRef)(null),d=Object(r.useReducer)(x,l),u=Object(a.a)(d,2),j=u[0],g=u[1];return Object(c.jsx)(b.Provider,{value:{state:j,dispatch:g,getPosition:function(e){var t=j.nodes.find((function(t){return t.uid===e}));return Object(s.a)(Object(s.a)({},{x:0,y:0}),t)},ref:o},children:Object(c.jsx)("div",{style:{width:"".concat(n,"px"),height:"".concat(i,"px"),backgroundColor:"darkblue",color:"#eaeaea",position:"relative",overflow:"hidden"},ref:o,children:t})})},f=function(){var e=p().Node;return Object(c.jsx)(e,{children:Object(c.jsx)("div",{style:{padding:"20px"},children:"generic node type 1"})})},h=function(){var e=p().Node;return Object(c.jsx)(e,{children:Object(c.jsx)("div",{style:{padding:"20px"},children:"generic node type 2"})})},v=function(){var e=Object(r.useState)(0),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsxs)(O,{width:1200,height:500,children:[Object(c.jsx)(f,{}),Object(c.jsx)(h,{}),".".repeat(n).split("").map((function(e,t){return Object(c.jsx)(h,{},t)}))]}),Object(c.jsx)("button",{onClick:function(){i(n+1)},children:"Add new"})]})};u.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.1c970b8e.chunk.js.map