(this.webpackJsonpsuru=this.webpackJsonpsuru||[]).push([[0],{51:function(e,t,n){e.exports=n(68)},56:function(e,t,n){},59:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),i=(n(56),n(8)),l=n(30),u=n.n(l),s=n(40),d=n(9),m=(n(58),n(59),n(38)),f=n(35),p=n(13),v=n(34),E=n(33),b=function(e){var t=e.onExportClicked,n=e.onImportClicked;return o.a.createElement("div",{className:"toolbar flex-container-right"},o.a.createElement(v.a,{overlay:o.a.createElement(E.a,{id:"tooltip-export"},"Export"),key:"tooltip-export",placement:"bottom"},(function(e){var n=e.ref,a=Object(m.a)(e,["ref"]);return o.a.createElement(p.a,Object.assign({"aria-label":"export",variant:"link",onClick:function(){t()}},a),o.a.createElement("div",{ref:n},o.a.createElement(f.a,null)))})),o.a.createElement(v.a,{overlay:o.a.createElement(E.a,{id:"tooltip-import"},"Import"),key:"tooltip-import",placement:"bottom"},(function(e){var t=e.ref,a=Object(m.a)(e,["ref"]);return o.a.createElement(p.a,Object.assign({"aria-label":"import",variant:"link",onClick:function(){n()}},a),o.a.createElement("div",{ref:t},o.a.createElement(f.b,null)))})))},h=n(12),O=n.n(h),j=function(){var e=O()().format("MMM Do, YYYY");return o.a.createElement("div",{className:"header flex-container-center"},o.a.createElement("h1",{className:"title"},"\u3059\u308b (Suru) - To do"),o.a.createElement("h2",{className:"fira thin"},"It is: ",o.a.createElement("span",{className:"today-font"},e)))},k=n(19),N=n(43),y=n(47),D=n(36),g=n(37),w=n(27),C=function(e){var t=e.item,n=e.handleActionClicked,r=e.handleNewDescription,c=t.id,i=t.description,l=t.dueDate,u=t.isDone,s=t.completedDate,m=Object(a.useState)(!1),f=Object(d.a)(m,2),v=f[0],E=f[1],b=Object(a.useState)(i),h=Object(d.a)(b,2),j=h[0],k=h[1];return Object(a.useEffect)((function(){v||j===i||r(c,j,u)}),[c,v,r,j,u,i]),o.a.createElement(w.a,{key:c,className:u?"redo-item":"todo-item"},o.a.createElement("div",{className:"flex todo-item-primary"},v?o.a.createElement(y.a,{className:"todo-input margin-right-1",onChange:function(e){return function(e){k(e)}(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&E(!1)},value:j}):o.a.createElement("p",{onClick:function(){return E(!0)},className:"".concat(u?"done":"todo","-desc")},j),o.a.createElement(p.a,{variant:u?"outline-secondary":"outline-primary",className:"todo-done-button",onClick:v?function(){return E(!1)}:function(){return n(c)}},!u||v?"Done":"Redo")),u?o.a.createElement("div",{className:"due-date"},"Completed: ",O()(s).format("MMM Do, YYYY - LTS")):l?o.a.createElement("div",{className:"due-date"},"Due: ",O()(l).format("MMM Do YYYY")):null)},x=function(e){var t=e.todoItems,n=e.setTodoItems,r=e.doneItems,c=e.setDoneItems,l=Object(a.useState)(""),u=Object(d.a)(l,2),s=u[0],m=u[1],f=function(){if(s){var e=(a=s,{id:Object(N.a)(),description:a,dueDate:o,tags:r,isDone:!1});n([e].concat(Object(i.a)(t))),m("")}var a,o,r},v=function(e){var a=O()().valueOf(),o=t.filter((function(t){return t.id===e}))[0],l=Object(k.a)(Object(k.a)({},o),{},{isDone:!0,completedDate:a});c([l].concat(Object(i.a)(r))),n(t.filter((function(t){return t.id!==e})))},E=function(e){var a=r.filter((function(t){return t.id===e}))[0],o=Object(k.a)(Object(k.a)({},a),{},{isDone:!1,completedDate:void 0});n([o].concat(Object(i.a)(t))),c(r.filter((function(t){return t.id!==e})))},b=function(e,a,o){o?(r.filter((function(t){return t.id===e}))[0].description=a,c(Object(i.a)(r))):(t.filter((function(t){return t.id===e}))[0].description=a,n(Object(i.a)(t)))},h=r.length<10?r.length:10;return o.a.createElement("div",{className:"main flex-container-center"},o.a.createElement("div",{className:"todo-bar width-90"},o.a.createElement(D.a,null,o.a.createElement(y.a,{placeholder:"What you want to do?",className:"todo-input",onKeyPress:function(e){"Enter"===e.key&&f()},onChange:function(e){return m(e.target.value)},value:s}),o.a.createElement(D.a.Append,null,o.a.createElement(p.a,{disabled:!s,className:"todo-done-button",onClick:f},"Add")))),o.a.createElement(g.a,{className:"todo-list width-90"},t.map((function(e){return o.a.createElement(C,{key:"key-todo-".concat(e.id),item:e,handleActionClicked:v,handleNewDescription:b})}))),(null===r||void 0===r?void 0:r.length)>0?o.a.createElement("h1",{className:"done-label"},"Done"):null,o.a.createElement(g.a,{className:"done-list width-90"},r.slice(0,h).map((function(e){return o.a.createElement(C,{key:"key-done-".concat(e.id),item:e,handleActionClicked:E,handleNewDescription:b})}))))},I=n(66);var Y=function(){Object(a.useEffect)((function(){window.onbeforeunload=function(){return""}}),[]);var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),l=Object(d.a)(c,2),m=l[0],f=l[1],p=Object(a.useRef)(null),v=function(){var e=Object(s.a)(u.a.mark((function e(){var t,n,a,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null===p||void 0===p||null===(t=p.current)||void 0===t?void 0:t.files,e.next=3,n[0].text();case 3:a=e.sent,o=JSON.parse(a),r(o.filter((function(e){return!e.isDone}))),f(o.filter((function(e){return e.isDone})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=Object(a.useCallback)((function(){var e=JSON.stringify([].concat(Object(i.a)(m),Object(i.a)(n))),t=new Blob([e],{type:"text/plain;charset=utf-8"});I.saveAs(t,"todo.json")}),[m,n]);return o.a.createElement("div",{className:"app"},o.a.createElement(b,{onImportClicked:function(){return function(){var e;null===p||void 0===p||null===(e=p.current)||void 0===e||e.click()}()},onExportClicked:function(){return E()}}),o.a.createElement(j,null),o.a.createElement(x,{todoItems:n,setTodoItems:r,doneItems:m,setDoneItems:f}),o.a.createElement("input",{type:"file",className:"input-file-import",accept:".json",onChange:v,ref:p}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.020ef899.chunk.js.map