(this["webpackJsonpdice-roller"]=this["webpackJsonpdice-roller"]||[]).push([[0],{11:function(e,a,t){},12:function(e,a,t){},13:function(e,a,t){},26:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(4),c=t.n(r),i=(t(11),t(1)),o=(t(12),t(13),t(5)),u=t.n(o),m=(t(26),function(e){return l.a.createElement("svg",{height:"100%",width:"100%",viewBox:"0 0 100 100"},l.a.createElement("polygon",{fill:"#65D0D9",points:"0,100 50,0 100,100"}))}),s=function(e){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 -4 196 233.75",x:"0px",y:"0px",height:"100%",width:"100%"},l.a.createElement("g",null,l.a.createElement("polygon",{fill:"#5a3128",points:"196,57 98,0 0,57 0,170 98,227 196,170 "})))},d=function(e){return l.a.createElement("svg",{height:"100%",width:"100%",xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 100 100",x:"0px",y:"0px"},l.a.createElement("g",null,l.a.createElement("path",{d:"M 50,100 85,50 50,0 15,50 Z",fill:"#648452"})))},x=function(e){return l.a.createElement("svg",{height:"100%",width:"100%",xmlns:"http://www.w3.org/2000/svg",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 32 31"},l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("polygon",{fill:"#dcbf5e",points:"16,1.8 0.8,12.6 6.6,30.3 25.4,30.3 31.3,12.6   "}))))},v=function(e){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 32 32",height:"100%",width:"100%"},l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("polygon",{fill:"#db7277",points:"16,0.8 6,4.4 0.8,13.7 2.6,24.3 10.7,31.3 21.3,31.3 29.4,24.3 31.3,13.7 26,4.4   "}))))},w=function(e){return l.a.createElement("svg",{height:"100%",width:"100%",xmlns:"http://www.w3.org/2000/svg",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 100"},l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("rect",{fill:"#21469f",x:"5",y:"5",width:"90",height:"90"}))))},E=t(27);var h=function(e){return l.a.createElement("button",{"aria-label":e.ariaLabel?e.ariaLabel:e.diceValue+" rolled on a d"+e.maxValue+". Click to remove.",className:E({dice:!0,d4:4===e.maxValue,d6:6===e.maxValue,d8:8===e.maxValue,d10:10===e.maxValue,d12:12===e.maxValue,d20:20===e.maxValue}),onClick:function(){e.onClick()}},4===e.maxValue&&l.a.createElement(m,null),6===e.maxValue&&l.a.createElement(w,null),8===e.maxValue&&l.a.createElement(d,null),10===e.maxValue&&l.a.createElement(x,null),12===e.maxValue&&l.a.createElement(v,null),20===e.maxValue&&l.a.createElement(s,null),e.children,l.a.createElement("span",{class:"dice-label"},e.diceValue))};var f=function(e){return l.a.createElement("div",{className:"dice-picker"},[4,6,8,10,12,20].map((function(a){return l.a.createElement(h,{maxValue:a,diceValue:a,onClick:function(){e.addDiceCallback({maxValue:a,id:u()()})},ariaLabel:"Roll a d"+a})})))};var p=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(0),o=Object(i.a)(c,2),u=o[0],m=o[1],s=Object(n.useState)(""),d=Object(i.a)(s,2),x=d[0],v=d[1];function w(e){return Math.floor(Math.random()*e)+1}return l.a.createElement("div",{className:"App"},l.a.createElement("h1",{"aria-label":"Dice"},"di.ce"),l.a.createElement(f,{addDiceCallback:function(e){e.value=w(e.maxValue),r(t.concat(e));var a=u+e.value;m(a),v("Rolled a "+e.value+". New total is "+a),v("")}}),l.a.createElement("div",{className:"roll-collection"},t.map((function(e){return l.a.createElement(h,{maxValue:e.maxValue,diceValue:e.value,onClick:function(){!function(e){var a=t.map((function(e){return e.id})).indexOf(e),n=u-t[a].value;m(n),v("Removed a d "+t[a].maxValue+". New total is "+n),v(""),r(t.filter((function(a){return a.id!==e})))}(e.id)},key:e.id})}))),l.a.createElement("div",{className:"roll-total"},l.a.createElement("span",{id:"live-total","aria-live":"polite",class:"screen-reader-text"},x),l.a.createElement("span",{"aria-hidden":"true"},"Total: ",u)),l.a.createElement("button",{class:"action-button",onClick:function(){var e=0,a=t.map((function(a){var t={id:a.id,maxValue:a.maxValue,value:w(a.maxValue)};return e+=t.value,t}));r(a),m(e),v("Total is "+e),v("")}},"Roll"),l.a.createElement("button",{class:"action-button action-button--secondary",onClick:function(){r([]),m(0),v("Total is 0"),v("")}},"Clear"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,a,t){e.exports=t(28)}},[[6,1,2]]]);
//# sourceMappingURL=main.9c2a6a5c.chunk.js.map