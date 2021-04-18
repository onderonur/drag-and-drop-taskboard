(this.webpackJsonptaskboard=this.webpackJsonptaskboard||[]).push([[0],{373:function(e,t,n){"use strict";n.r(t);var i,r=n(0),a=n.n(r),c=n(21),o=n.n(c),s=n(45),l=n(378),u=n(130),d=n.n(u),j=n(46),b=n(64),O={primary:b.geekblue},f=n(2),h=n(6),g=n(7),p=n(90),m=n(129),v=n(183);!function(e){e.TO_DO="To Do",e.IN_PROGRESS="In Progress",e.DONE="Done"}(i||(i={}));var x=n(377),D=n(381),y=n(380),w=n(8);var k=function(e){var t=e.visible,n=e.initialValues,i=e.onCancel,a=e.onOk,c=x.a.useForm(),o=Object(h.a)(c,1)[0],s=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e;t&&(null===(e=s.current)||void 0===e||e.focus(),o.resetFields())}),[o,t]),Object(w.jsx)(D.a,{title:"Add Item",visible:t,destroyOnClose:!0,forceRender:!0,onCancel:i,onOk:function(){return o.submit()},children:Object(w.jsxs)(x.a,{autoComplete:"off",form:o,layout:"vertical",initialValues:n,onFinish:function(e){a(e),o.resetFields(),i()},children:[Object(w.jsx)(x.a.Item,{name:"title",label:"Title",rules:[{required:!0,message:"'Title' is required"},{max:100,message:"'Title' can not be longer than 100 characters"}],children:Object(w.jsx)(y.a,{ref:s,autoFocus:!0})}),Object(w.jsx)(x.a.Item,{name:"description",label:"Description",rules:[{required:!0,message:"'Description' is required"},{max:400,message:"'Description' can not be longer than 400 characters"}],children:Object(w.jsx)(y.a.TextArea,{rows:4})})]})})},T=n(376),I=n(51),S=n(379),C=n(382),E=n(201),F=n(383),P=n(384),R=n(63);var A,N,_,q=function(e){return Object(w.jsx)(R.a,Object(f.a)({mouseEnterDelay:1.5},e))},J=Object(j.a)(T.a)(A||(A=Object(s.a)(["\n  margin: 0.5rem;\n  padding: 0.5rem;\n  background-color: ",";\n"])),(function(e){return e.$isDragging?"#fafafa":"#fff"})),z=Object(j.a)(l.a.Title)(N||(N=Object(s.a)(['\n  white-space: pre-wrap;\n  // To make ellipsis of the title visible.\n  // Without this margin, it can be go behind the "extra" component.\n  // So, we give it a little space.\n  margin-right: 0.25rem;\n']))),B=Object(j.a)(S.a.Item)(_||(_=Object(s.a)(["\n  color: ",";\n"])),b.red.primary);var M,V,G=function(e){var t=e.item,n=e.status,i=e.isDragging,r=e.onEdit,a=e.onDelete;return Object(w.jsx)(J,{$isDragging:i,size:"small",title:Object(w.jsx)(q,{overlay:t.title,children:Object(w.jsx)("span",{children:Object(w.jsx)(z,{level:5,ellipsis:{rows:2},children:t.title})})}),extra:Object(w.jsx)(C.a,{overlay:Object(w.jsxs)(S.a,{children:[Object(w.jsx)(S.a.Item,{icon:Object(w.jsx)(E.a,{}),onClick:function(){return r(t)},children:"Edit"}),Object(w.jsx)(B,{icon:Object(w.jsx)(F.a,{}),onClick:function(){return D.a.confirm({title:"Delete?",content:'Are you sure to delete "'.concat(t.title,'"?'),onOk:function(){return a({status:n,itemToDelete:t})}})},children:"Delete"})]}),trigger:["click"],children:Object(w.jsx)(I.a,{size:"small",icon:Object(w.jsx)(P.a,{})})}),children:Object(w.jsx)(q,{overlay:t.description,children:Object(w.jsx)(l.a.Paragraph,{type:"secondary",ellipsis:{rows:2},children:t.description})})})},H=Object(j.a)(T.a)(M||(M=Object(s.a)(["\n  user-select: none;\n  flex: 1;\n  margin: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  // To force each flex item to have equal width\n  // even if they have long texts with no spaces etc.\n  min-width: 0;\n  > .ant-card-body {\n    overflow: hidden;\n    height: 100%;\n    padding: 0;\n  }\n"]))),L=j.a.div(V||(V=Object(s.a)(["\n  height: 100%;\n  overflow-y: auto;\n  background-color: ",";\n"])),(function(e){return e.isDraggingOver?O.primary[2]:O.primary[1]}));var W,$,K,Q=function(e){var t=e.items,n=e.status,i=e.onClickAdd,r=e.onEdit,a=e.onDelete;return Object(w.jsx)(H,{title:"".concat(n," (").concat(t.length,")"),extra:i&&Object(w.jsx)(I.a,{type:"primary",onClick:i,children:"Add"}),children:Object(w.jsx)(p.c,{droppableId:n,children:function(e,i){return Object(w.jsxs)(L,Object(f.a)(Object(f.a)({ref:e.innerRef},e.droppableProps),{},{isDraggingOver:i.isDraggingOver,children:[t.map((function(e,t){return Object(w.jsx)(p.b,{draggableId:e.id,index:t,children:function(t,i){return Object(w.jsx)("div",Object(f.a)(Object(f.a)(Object(f.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{children:Object(w.jsx)(G,{item:e,status:n,isDragging:i.isDragging,onEdit:r,onDelete:a})}),e.id)}},e.id)})),e.placeholder]}))}})})},U=j.a.div(W||(W=Object(s.a)(["\n  min-height: 0;\n  height: 100%;\n  min-width: 800px;\n  max-width: 1400px;\n  margin: auto;\n"]))),X=j.a.div($||($=Object(s.a)(["\n  height: 100%;\n  padding: 0.5rem;\n  display: flex;\n  justify-content: space-around;\n"]))),Y=(K={},Object(g.a)(K,i.TO_DO,[]),Object(g.a)(K,i.IN_PROGRESS,[]),Object(g.a)(K,i.DONE,[]),K),Z="itemsByStatus";var ee,te,ne,ie=function(){var e=Object(r.useState)((function(){var e;return null!==(e=Object(v.a)((function(){var e;return JSON.parse(null!==(e=localStorage.getItem(Z))&&void 0!==e?e:"")})).data)&&void 0!==e?e:Y})),t=Object(h.a)(e,2),n=t[0],a=t[1];Object(r.useEffect)((function(){localStorage.setItem(Z,JSON.stringify(n))}),[n]);var c=Object(r.useState)(!1),o=Object(h.a)(c,2),s=o[0],l=o[1],u=Object(r.useState)(null),d=Object(h.a)(u,2),j=d[0],b=d[1],O=function(e){b(e),l(!0)},g=function(e){var t=e.status,n=e.itemToDelete;return a((function(e){return Object(m.a)(e,(function(e){e[t]=e[t].filter((function(e){return e.id!==n.id}))}))}))},x=Object(r.useMemo)((function(){var e,t;return{title:null!==(e=null===j||void 0===j?void 0:j.title)&&void 0!==e?e:"",description:null!==(t=null===j||void 0===j?void 0:j.description)&&void 0!==t?t:""}}),[j]);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(p.a,{onDragEnd:function(e){var t=e.source,n=e.destination;a((function(e){return Object(m.a)(e,(function(e){if(n){var i=e[t.droppableId].splice(t.index,1),r=Object(h.a)(i,1)[0];e[n.droppableId].splice(n.index,0,r)}}))}))},children:Object(w.jsx)(U,{children:Object(w.jsx)(X,{children:Object.values(i).map((function(e){return Object(w.jsx)(Q,{status:e,items:n[e],onClickAdd:e===i.TO_DO?function(){return O(null)}:void 0,onEdit:O,onDelete:g},e)}))})})}),Object(w.jsx)(k,{visible:s,onCancel:function(){b(null),l(!1)},onOk:function(e){a((function(t){return Object(m.a)(t,(function(t){if(j){var n=Object.values(t).flatMap((function(e){return e})).find((function(e){return e.id===j.id}));n&&(n.title=e.title,n.description=e.description)}else t[i.TO_DO].push(Object(f.a)(Object(f.a)({},e),{},{id:Date.now().toString()}))}))}))},initialValues:x})]})},re=Object(j.a)(d.a)(ee||(ee=Object(s.a)(['\n  /* We can\'t use "height: 100vh; width: 100vw;" here.\n  Otherwise, when there is a horizontal scrollbar etc, \n  because that we set a constant height, there will be a vertical one too.  */\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n']))),ae=Object(j.a)(u.Header)(te||(te=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  background-color: #fff;\n"]))),ce=Object(j.a)(u.Content)(ne||(ne=Object(s.a)(["\n  background-color: ",";\n"])),O.primary[6]);var oe=function(){return Object(w.jsxs)(re,{children:[Object(w.jsx)(ae,{children:Object(w.jsx)(l.a.Title,{level:3,type:"secondary",children:"Drag & Drop Taskboard"})}),Object(w.jsx)(ce,{children:Object(w.jsx)(ie,{})})]})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,385)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),r(e),a(e),c(e)}))};n(372);o.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(oe,{})}),document.getElementById("root")),se()}},[[373,1,2]]]);
//# sourceMappingURL=main.ef5d64d8.chunk.js.map