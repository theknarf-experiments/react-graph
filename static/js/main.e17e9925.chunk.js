(this["webpackJsonpreact-graph"]=this["webpackJsonpreact-graph"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var i,c=n(0),r=n(1),d=n.n(r),o=n(5),u=n.n(o),a=n(3),s=n(2),j=n(13),l={dragging:!1,initial:{x:0,y:0},current:{x:0,y:0}},b=function(e,t){var n=Object(r.useState)(l),i=Object(a.a)(n,2),c=i[0],d=i[1],o=function(e){c.dragging&&d(Object(s.a)(Object(s.a)({},c),{},{current:{x:e.clientX,y:e.clientY}}))},u=function(e){c.dragging&&(t(),d(l))};return Object(r.useEffect)((function(){var t=null;return e.current&&((t=e.current).addEventListener("mousemove",o),t.addEventListener("mouseup",u)),function(){t&&(t.removeEventListener("mousemove",o),t.removeEventListener("mouseup",u))}})),{dragged:{x:c.current.x-c.initial.x,y:c.current.y-c.initial.y},onMouseDown:function(e){d({dragging:!0,initial:{x:e.clientX,y:e.clientY},current:{x:e.clientX,y:e.clientY}})}}},x={nodes:[],edges:[]},p=Object(r.createContext)({ref:{current:null}});!function(e){e[e.UpdatePosition=0]="UpdatePosition",e[e.UpdateAttribute=1]="UpdateAttribute",e[e.AddEdge=2]="AddEdge",e[e.RemoveEdge=3]="RemoveEdge"}(i||(i={}));var g=function(e,t){switch(t.type){case i.UpdatePosition:var n=Object(s.a)({},e),c=e.nodes.findIndex((function(e){return e.uid===t.uid}));return-1===c?n.nodes.push({uid:t.uid,x:t.x,y:t.y}):(n.nodes[c].x=t.x,n.nodes[c].y=t.y),n;case i.UpdateAttribute:case i.AddEdge:}return e},O=function(e){var t=e.children,n=e.uid,d=Object(r.useContext)(p),o=d.getPosition,u=d.dispatch,a=d.ref,s=o(n),j=s.x,l=s.y,x=b(a,(function(){u(function(e,t,n){return{type:i.UpdatePosition,uid:e,x:t,y:n}}(n,j+g.x,l+g.y))})),g=x.dragged,O=x.onMouseDown,f=j+g.x,h=l+g.y;return Object(c.jsxs)("div",{style:{position:"absolute",background:"black",userSelect:"none",left:"".concat(f,"px"),top:"".concat(h,"px")},onMouseDown:O,children:[Object(c.jsxs)("span",{children:["Uuid: ",n]}),Object(c.jsx)("div",{children:t})]})},f=function(){var e=Object(j.a)();return{Node:function(t){var n=Object.assign({},t);return Object(c.jsx)(O,Object(s.a)({uid:e},n))}}},h=function(e){var t=e.children,n=e.width,i=e.height,d=Object(r.useRef)(null),o=Object(r.useReducer)(g,x),u=Object(a.a)(o,2),j=u[0],l=u[1];return Object(c.jsx)(p.Provider,{value:{state:j,dispatch:l,getPosition:function(e){var t=j.nodes.find((function(t){return t.uid===e}));return Object(s.a)(Object(s.a)({},{x:0,y:0}),t)},ref:d},children:Object(c.jsx)("div",{style:{width:"".concat(n,"px"),height:"".concat(i,"px"),backgroundColor:"darkblue",color:"#eaeaea",position:"relative",overflow:"hidden"},ref:d,children:t})})},v=function(){var e=f().Node;return Object(c.jsx)(e,{children:Object(c.jsx)("div",{style:{padding:"20px"},children:"generic node type 1"})})},y=function(){var e=f().Node;return Object(c.jsx)(e,{children:Object(c.jsx)("div",{style:{padding:"20px"},children:"generic node type 2"})})},m=function(){var e=Object(r.useState)(0),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsxs)(h,{width:1200,height:500,children:[Object(c.jsx)(v,{}),Object(c.jsx)(y,{}),".".repeat(n).split("").map((function(e,t){return Object(c.jsx)(y,{},t)}))]}),Object(c.jsx)("button",{onClick:function(){i(n+1)},children:"Add new"})]})};u.a.render(Object(c.jsx)(d.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.e17e9925.chunk.js.map