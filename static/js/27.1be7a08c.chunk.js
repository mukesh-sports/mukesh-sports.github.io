(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{619:function(e,t,a){"use strict";a.r(t);var n=a(525),c=a(23),r=a(31),i=a(139),l=a(138),s=a(140),o=a(0),u=a.n(o),m=a(1098),p=a(519),d=["#2ecc71","#3498db","#e67e22","#e67e22","#e74c3c"],h=window.innerHeight,f=function(e,t){return e+Math.floor(Math.random()*(t-e))},O=function(){return d[f(0,d.length)]},b=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){for(var e=this.props.count,t=[],a=[E,v,v];e--;){var n=a[f(0,3)];t.push(u.a.createElement(n,{key:e}))}return u.a.createElement("div",{className:"particles"},t)}}]),t}(u.a.PureComponent),v=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).circleRef=Object(o.createRef)();var r=t.SIZE_RANGE,s=t.ROTATION_RANGE,u=f.apply(void 0,Object(n.a)(r));return a.style={backgroundColor:O(),width:u,height:u,borderRadius:u,transform:"rotateZ(".concat(f.apply(void 0,Object(n.a)(s)),"deg)"),left:f(0,window.innerWidth),top:f(-h,0)},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.style.left;t.ROTATION_RANGE;setTimeout(function(){var t=e.circleRef.current;t.style.top=window.innerHeight+f(0,h)+"px",t.style.left=a+f(-300,300)+"px"},0)}},{key:"render",value:function(){return u.a.createElement("div",{ref:this.circleRef,className:"particle",style:this.style})}}]),t}(u.a.PureComponent);v.SIZE_RANGE=[5,10],v.ROTATION_RANGE=[0,45];var E=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).svgREF=Object(o.createRef)();var r=f.apply(void 0,Object(n.a)(t.SIZE_RANGE));return a.style={fill:O(),width:r,height:r,transform:"rotateZ(".concat(f.apply(void 0,Object(n.a)(t.ROTATION_RANGE)),"deg)"),left:f(0,window.innerWidth),top:f(-h,0)},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.style.left,c=t.ROTATION_RANGE;setTimeout(function(){var t=e.svgREF.current;t.style.top=window.innerHeight+f(0,h)+"px",t.style.left=a+f(-300,300)+"px",t.style.transform="rotateZ(".concat(f.apply(void 0,Object(n.a)(c)),"deg)")},0)}},{key:"render",value:function(){return u.a.createElement("svg",{ref:this.svgREF,className:"particle",style:this.style,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},u.a.createElement("path",{fill:this.style.fill,d:"M428.127,0l-12.716,10.062l12.718-10.06c8.785,11.101,19.716,24.917,19.716,51.051 s-10.932,39.951-19.716,51.053c-7.382,9.331-12.716,16.072-12.716,30.927c0,14.854,5.334,21.594,12.716,30.925   c8.784,11.101,19.716,24.917,19.716,51.05c0,26.135-10.931,39.949-19.715,51.051c-7.383,9.331-12.717,16.072-12.717,30.927   c0,14.855,5.332,21.593,12.711,30.919l-25.435,20.124c-8.781-11.097-19.708-24.909-19.708-51.042 c0-26.135,10.931-39.949,19.715-51.051c7.383-9.331,12.717-16.072,12.717-30.927c0-14.855-5.335-21.595-12.717-30.926 c-8.784-11.101-19.715-24.916-19.715-51.049s10.931-39.95,19.715-51.051c7.383-9.331,12.717-16.072,12.717-30.928 c0-14.855-5.335-21.596-12.718-30.927L428.127,0z"}))}}]),t}(u.a.PureComponent);E.SIZE_RANGE=[15,45],E.ROTATION_RANGE=[-15,15];var y=a(508),N=a(95),j=a(6),w=function(e){function t(e,a){var r;return Object(c.a)(this,t),(r=Object(i.a)(this,Object(l.a)(t).call(this,e,a))).handleOnClick=function(){var e=t.id;t.id++,r.setState({particles:[].concat(Object(n.a)(r.state.particles),[e])}),setTimeout(function(){r.clean(e)},7e3)},r.state={particles:[]},r}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.handleOnClick()}},{key:"clean",value:function(e){this.setState({particles:this.state.particles.filter(function(t){return t!==e})})}},{key:"render",value:function(){var e=this,t=this.props.rmData,a=t.mShow,n=t.mHide,c=t.redeemData;return u.a.createElement(p.a.Consumer,null,function(t){return u.a.createElement(m.a,{show:a,onHide:n,dialogClassName:"redeem-success particles",className:"center-modal redeem"},u.a.createElement(m.a.Body,null,u.a.createElement("img",{src:y.a.COIN_BAG,alt:"",className:"img-bag"}),u.a.createElement("img",{src:y.a.BG_SHAP,alt:"",className:"shap-img"}),u.a.createElement("div",null,u.a.createElement("h4",{className:"title"},N.Ll),"2"===c.type&&u.a.createElement("p",{className:"desc"},j.b.getMasterData().currency_code,u.a.createElement("span",null,c.value)," ",N.Kb),"1"===c.type&&u.a.createElement("p",{className:"desc"},u.a.createElement("i",{className:"icon-bonus"}),u.a.createElement("span",null,c.value)," ",N.Ib),"3"===c.type&&u.a.createElement("p",{className:"desc"},N.Jb),c.prediction_master_id&&u.a.createElement("p",{className:"desc"},N.eb,u.a.createElement("img",{className:"coin-img",src:y.a.IC_COIN,alt:""}),u.a.createElement("span",null,c.amount),N.fb))),e.state.particles.map(function(e){return u.a.createElement(b,{key:e,count:Math.floor(window.innerWidth/5)})}))})}}]),t}(u.a.Component);w.id=1;t.default=w}}]);
//# sourceMappingURL=27.1be7a08c.chunk.js.map