(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(7),u=n.n(o),i=n(1),l=n(2),s=n(4),p=n(3),b=n(5),m=n(8),h=[],f={score:123},O=function(e){f=d(f,e),function(){for(var e=0;e<h.length;e++)h[e](f)}()},d=function(e,t){switch(t.type){case"UPDATE_SCORE":return Object(m.a)({},e,{score:t.payload});default:return e}},j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(l.a)(t,[{key:"changeScore",value:function(){var e;O((e=Math.random(),console.log("creating action..."),{type:"UPDATE_SCORE",payload:e}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{className:"ui primary button",onClick:this.changeScore},"Click"))}}]),t}(r.a.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui content"},r.a.createElement("p",null,this.props.score))}}]),t}(r.a.Component),v=(a=y,console.log("connect global and TextBar"),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).updateState=function(e){n.setState(e)},n}return Object(b.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e;e=this.updateState,h.push(e)}},{key:"render",value:function(){return r.a.createElement(a,this.state)}}]),t}(r.a.Component)),E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container",style:{marginTop:"20px"}},r.a.createElement("div",{className:"ui visible message"},r.a.createElement(v,null)),r.a.createElement(j,null))}}]),t}(r.a.Component);u.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,2,1]]]);
//# sourceMappingURL=main.0d5b5df5.chunk.js.map