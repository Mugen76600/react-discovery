(this.webpackJsonpclock=this.webpackJsonpclock||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(8),o=n.n(i),s=(n(13),n.p+"static/media/logo.6ce24c58.svg"),l=(n(14),n(2)),r=n(3),u=n(4),h=n(6),d=n(5),j=n(0),v=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(l.a)(this,n),(c=e.call(this,t)).state={date:new Date},c}return Object(r.a)(n,[{key:"startInterval",value:function(){var t=this;this.intervalID=setInterval((function(){t.setState({date:new Date})}),1e3)}},{key:"componentDidMount",value:function(){this.startInterval()}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"render",value:function(){return Object(j.jsx)("div",{children:this.state.date.toLocaleTimeString()})}}]),n}(a.a.Component),b=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(l.a)(this,n),(c=e.call(this,t)).state={text:"Hide clock"},c.handleClick=c.handleClick.bind(Object(u.a)(c)),c}return Object(r.a)(n,[{key:"handleClick",value:function(){var t="Hide clock"===this.state.text?"Show clock":"Hide clock";this.setState({text:t})}},{key:"render",value:function(){var t="Hide clock"===this.state.text&&Object(j.jsx)(v,{});return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"button success hollow",onClick:this.handleClick,children:this.state.text}),t]})}}]),n}(a.a.Component);var k=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("img",{src:s,className:"App-logo",alt:"logo"}),Object(j.jsx)(b,{})]})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),i(t),o(t)}))};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.2e73780a.chunk.js.map