(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{663:function(e,t,a){"use strict";a.r(t);var n=a(23),s=a(31),i=a(139),c=a(138),r=a(140),l=a(0),m=a.n(l),o=a(519),d=a(510),E=a(6),u=a(506),h=a(515),p=a(520),g=a.n(p),b=a(509),f=a(511),S=a(508),A=a(14),I=a(95),N=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).callApiFBQAList=function(){a.setState({ISLOAD:!0}),Object(u.R)({}).then(function(e){if(a.setState({ISLOAD:!1}),e.response_code===A.od){var t=e.data.questions||[];a.setState({FDBLIST:t})}})},a.btnAction=function(e,t){if(e.answer&&e.answer.length>1&&!a.state.isApiCalling){var n={feedback_question_id:e.feedback_question_id.$oid,answer:e.answer};a.setState({isApiCalling:!0,sentIndex:t}),Object(u.lc)(n).then(function(e){if(e.response_code===A.od){var n=a.state.FDBLIST;n[t].submitted=!0,a.setState({FDBLIST:n})}a.setState({isApiCalling:!1})})}},a.onChangeText=function(e){var t=e.target.value,n=e.target.id,s=a.state.FDBLIST;s[n].answer=t,a.setState({FDBLIST:s})},a.renderListItem=function(e,t){var n=e.submitted;return m.a.createElement("li",{key:t},!n&&m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"top-price"},m.a.createElement("span",null,I.Ad,m.a.createElement("img",{src:S.a.IC_COIN,alt:""}),e.coins),m.a.createElement("img",{className:"img-shape",src:S.a.COINS_BACK_STRIPE,alt:""})),m.a.createElement("p",{className:"feedback-text mb30"},I.gd),m.a.createElement("div",{className:"q-view"},m.a.createElement("p",{className:"question"},e.question),m.a.createElement("textarea",{onChange:a.onChangeText,placeholder:"Enter your suggestion",rows:"4",name:"answer",id:t,className:"ans-input"}),m.a.createElement("a",{href:!0,className:"send-btn",id:"send-btn"+t,onClick:function(){return a.btnAction(e,t)}},m.a.createElement("i",{className:"icon-send"+(a.state.sentIndex===t?" animate":"")})))),n&&m.a.createElement("div",{className:"submited-v"},m.a.createElement("p",{className:"feedback-text m-0 text-left"},I.gd),m.a.createElement("img",{src:S.a.FB_THUMB,alt:"",className:"thumb-img"}),m.a.createElement("p",{className:"coin-text"},m.a.createElement("img",{src:S.a.IC_COIN,alt:""})," +",e.coins," ",I.cb)),m.a.createElement("p",{className:"hint-text"+(n?" m-0":"")},I.fd))},a.Shimmer=function(e){return m.a.createElement("div",{key:e,className:"contest-list border"},m.a.createElement("div",{className:"shimmer-container"},m.a.createElement(g.a,{height:9,width:"30%"}),m.a.createElement("div",{className:"shimmer-line m-t-20 m-b-sm"},m.a.createElement(g.a,{height:6,width:"95%"}),m.a.createElement(g.a,{height:6,width:"70%"})),m.a.createElement("div",{className:"shimmer-image m-b"},m.a.createElement(g.a,{width:"100%",height:80})),m.a.createElement(g.a,{height:6,width:"80%"})))},a.state={FDBLIST:[],ISLOAD:!1,isApiCalling:!1,sentIndex:-1},a}return Object(r.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.callApiFBQAList()}},{key:"render",value:function(){var e=this,t=this.state,a=t.FDBLIST,n=t.ISLOAD,s={back:!0,title:I.gd};return m.a.createElement(o.a.Consumer,null,function(t){return m.a.createElement("div",{className:"web-container feedback-c"},m.a.createElement(d.Helmet,{titleTemplate:"".concat(f.a.template," | %s")},m.a.createElement("title",null,f.a.ECFEEDBAK.title),m.a.createElement("meta",{name:"description",content:f.a.ECFEEDBAK.description}),m.a.createElement("meta",{name:"keywords",content:f.a.ECFEEDBAK.keywords})),m.a.createElement(b.a,Object.assign({},e.props,{HeaderOption:s})),m.a.createElement("ul",{className:"list-type"},Object(E.c)(a,function(t,a){return e.renderListItem(t,a)}),0===a.length&&!n&&m.a.createElement(h.g,{BG_IMAGE:S.a.no_data_bg_image,CENTER_IMAGE:S.a.BRAND_LOGO_FULL,MESSAGE_1:I.eg,CLASS:"pt40-per"}),0===a.length&&n&&[1,1,1,1,1,1].map(function(t,a){return e.Shimmer(a)})))})}}]),t}(l.Component);t.default=N}}]);
//# sourceMappingURL=25.86067029.chunk.js.map