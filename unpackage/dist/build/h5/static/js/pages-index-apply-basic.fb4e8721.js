(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-apply-basic"],{"2c5f":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{sex:[{value:"1",name:"男"},{value:"0",name:"女"}],marriage:[{value:"1",name:"已婚"},{value:"0",name:"未婚"},{value:"2",name:"离异"},{value:"3",name:"丧偶"}],edu:[{value:"0",name:"专科/大专"},{value:"1",name:"本科"},{value:"2",name:"研究生"},{value:"3",name:"其他"}],sexId:0,marId:0,eduId:0}},onNavigationBarButtonTap:function(e){uni.navigateBack({delta:1})},methods:{sexChange:function(e){for(var a=0;a<this.sex.length;a++)if(this.sex[a].value===e.target.value){this.sexId=a;break}},marChange:function(e){for(var a=0;a<this.marriage.length;a++)if(this.marriage[a].value===e.target.value){this.marId=a;break}},eduChange:function(e){for(var a=0;a<this.edu.length;a++)if(this.edu[a].value===e.target.value){this.eduId=a;break}},cheshi:function(){console.log(this.current)}}};a.default=n},"5cb7":function(e,a,t){"use strict";t.r(a);var n=t("2c5f"),i=t.n(n);for(var u in n)"default"!==u&&function(e){t.d(a,e,(function(){return n[e]}))}(u);a["default"]=i.a},ad49:function(e,a,t){"use strict";var n,i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",{staticClass:"form wrp"},[t("v-uni-view",{staticClass:"item ct mt30"},[t("v-uni-text",[e._v("性别")]),t("v-uni-radio-group",{staticClass:"cs",on:{change:function(a){arguments[0]=a=e.$handleEvent(a),e.sexChange.apply(void 0,arguments)}}},e._l(e.sex,(function(a,n){return t("v-uni-label",{key:a.value,staticClass:"uni-list-cell uni-list-cell-pd ct"},[t("v-uni-view",[t("v-uni-radio",{attrs:{value:a.value,checked:n===e.sexId}})],1),t("v-uni-view",[e._v(e._s(a.name))])],1)})),1)],1),t("v-uni-view",{staticClass:"item ct mt30"},[t("v-uni-text",[e._v("婚姻")]),t("v-uni-radio-group",{staticClass:"cs",on:{change:function(a){arguments[0]=a=e.$handleEvent(a),e.marChange.apply(void 0,arguments)}}},e._l(e.marriage,(function(a,n){return t("v-uni-label",{key:a.value,staticClass:"uni-list-cell uni-list-cell-pd ct"},[t("v-uni-view",[t("v-uni-radio",{attrs:{value:a.value,checked:n===e.marId}})],1),t("v-uni-view",[e._v(e._s(a.name))])],1)})),1)],1),t("v-uni-view",{staticClass:"item ct mt30"},[t("v-uni-text",[e._v("年龄")]),t("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请填写年龄"}})],1),t("v-uni-view",{staticClass:"item ct mt30"},[t("v-uni-text",[e._v("学历")]),t("v-uni-radio-group",{staticClass:"cs",on:{change:function(a){arguments[0]=a=e.$handleEvent(a),e.eduChange.apply(void 0,arguments)}}},e._l(e.edu,(function(a,n){return t("v-uni-label",{key:a.value,staticClass:"uni-list-cell uni-list-cell-pd ct edu"},[t("v-uni-view",[t("v-uni-radio",{attrs:{value:a.value,checked:n===e.eduId}})],1),t("v-uni-view",[e._v(e._s(a.name))])],1)})),1)],1)],1)},u=[];t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return u})),t.d(a,"a",(function(){return n}))},fe82:function(e,a,t){"use strict";t.r(a);var n=t("ad49"),i=t("5cb7");for(var u in i)"default"!==u&&function(e){t.d(a,e,(function(){return i[e]}))}(u);var l,s=t("f0c5"),v=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"0aa7652b",null,!1,n["a"],l);a["default"]=v.exports}}]);