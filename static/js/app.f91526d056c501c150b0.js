webpackJsonp([20],{"1vCP":function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1)},staticRenderFns:[]}},HzVJ:function(n,t,e){"use strict";e.d(t,"a",function(){return o});var o="GLOBAL_SET_USERINFO"},IcnI:function(n,t,e){"use strict";var o=e("7+uW"),r=e("NYxO"),a=e("lwq5"),c=e("mUbh"),i=e("UjVw"),u=e("ukYY");o.default.use(r.a);t.a=new r.a.Store({state:a.a,actions:c.a,getters:i.a,mutations:u.a,modules:{},strict:!1})},M93x:function(n,t,e){function o(n){e("oFwV")}var r=e("VU/8")(e("xJD8"),e("1vCP"),o,null,null);n.exports=r.exports},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("j1ja"),r=(e.n(o),e("7+uW")),a=e("M93x"),c=e.n(a),i=e("cHtD"),u=e("zL8q"),p=e.n(u),s=e("tvR6"),l=(e.n(s),e("IcnI")),f=e("NYxO"),h=e("Y81h"),d=(e.n(h),e("UVIz")),v=(e.n(d),e("lC78")),m=e("iClD"),b=e("mtWM"),y=e.n(b),g=e("XLwt"),w=e.n(g),x=e("yh13");e.n(x);y.a.defaults.xsrfCookieName="csrftoken",y.a.defaults.xsrfHeaderName="X_CSRFTOKEN",r.default.prototype.$ajax=y.a,r.default.prototype.$echarts=w.a,r.default.filter("stringTimeFormat",m.a),r.default.use(p.a),r.default.use(f.a),i.a.beforeEach(function(n,t,e){if("/login"==n.path)v.a.remove("userinfo"),e();else{JSON.parse(v.a.get("userinfo"))?e():e({path:"/login"})}}),new r.default({router:i.a,store:l.a,render:function(n){return n(c.a)}}).$mount("#app")},UVIz:function(n,t){},UjVw:function(n,t,e){"use strict";t.a={}},cHtD:function(n,t,e){"use strict";(function(n){var o=e("7+uW"),r=e("/ocq");o.default.use(r.a);var a=function(n){return e.e(11).then(function(){var t=[e("D7OK")];n.apply(null,t)}.bind(this)).catch(e.oe)},c=function(n){return e.e(10).then(function(){var t=[e("qnb2")];n.apply(null,t)}.bind(this)).catch(e.oe)},i=function(n){return e.e(12).then(function(){var t=[e("ImMB")];n.apply(null,t)}.bind(this)).catch(e.oe)},u=function(n){return e.e(3).then(function(){var t=[e("DCK/")];n.apply(null,t)}.bind(this)).catch(e.oe)},p=function(n){return e.e(8).then(function(){var t=[e("6evO")];n.apply(null,t)}.bind(this)).catch(e.oe)},s=function(n){return e.e(9).then(function(){var t=[e("25VH")];n.apply(null,t)}.bind(this)).catch(e.oe)},l=function(n){return e.e(7).then(function(){var t=[e("dVaH")];n.apply(null,t)}.bind(this)).catch(e.oe)},f=function(n){return e.e(5).then(function(){var t=[e("cFmv")];n.apply(null,t)}.bind(this)).catch(e.oe)},h=function(n){return e.e(6).then(function(){var t=[e("S+vf")];n.apply(null,t)}.bind(this)).catch(e.oe)},d=function(n){return e.e(2).then(function(){var t=[e("8RHg")];n.apply(null,t)}.bind(this)).catch(e.oe)},v=function(n){return e.e(0).then(function(){var t=[e("sNnP")];n.apply(null,t)}.bind(this)).catch(e.oe)},m=function(n){return e.e(18).then(function(){var t=[e("hFY9")];n.apply(null,t)}.bind(this)).catch(e.oe)},b=function(n){return e.e(4).then(function(){var t=[e("vROE")];n.apply(null,t)}.bind(this)).catch(e.oe)},y=function(n){return e.e(17).then(function(){var t=[e("wRKD")];n.apply(null,t)}.bind(this)).catch(e.oe)},g=function(n){return e.e(14).then(function(){var t=[e("obhH")];n.apply(null,t)}.bind(this)).catch(e.oe)},w=function(n){return e.e(1).then(function(){var t=[e("DWck")];n.apply(null,t)}.bind(this)).catch(e.oe)},x=function(n){return e.e(16).then(function(){var t=[e("A7zi")];n.apply(null,t)}.bind(this)).catch(e.oe)},k=[{path:"/",name:"home",component:c,children:[{path:"/group/:id",component:p},{path:"/group/",component:u},{path:"/user/:id",component:f},{path:"/user/",component:l},{path:"/permission/",component:s},{path:"/project/:id",component:d},{path:"/project/",component:h},{path:"/project_task/:id",component:m},{path:"/project_task/",component:v},{path:"/project_ci/:id",component:g},{path:"/project_bug/:id",component:y},{path:"/project_bug/",component:b},{path:"/project_test/:id",component:x},{path:"/project_test/",component:w}]},{path:"/login",name:"login",component:a},{path:"/*",name:"error",component:i}];t.a=new r.a({base:n,routes:k})}).call(t,"/")},iClD:function(n,t,e){"use strict";function o(n){var t=new Date(n),e=t.toLocaleString();return e=e.replace(/\//g,"-"),e=e.replace("上午",""),e=e.replace("下午","")}t.a=o},lC78:function(n,t,e){"use strict";var o=e("pFYg"),r=e.n(o),a=e("mvHQ"),c=e.n(a),i=e("Zrlr"),u=e.n(i),p=e("wxAW"),s=e.n(p),l=e("noTV"),f=(e.n(l),function(){function n(){u()(this,n),this.localStore=window.localStorage,this.prefix=l.db_prefix}return s()(n,[{key:"set",value:function(n,t,e){try{t=c()(t)}catch(n){t=t}this.localStore.setItem(this.prefix+n,t),e&&e()}},{key:"get",value:function(n,t){if(!n)throw new Error("没有找到key。");if("object"===(void 0===n?"undefined":r()(n)))throw new Error("key不能是一个对象。");var e=this.localStore.getItem(this.prefix+n);if(null!==e)try{e=JSON.parse(e)}catch(n){e=e}return e}},{key:"remove",value:function(n){this.localStore.removeItem(this.prefix+n)}}]),n}()),h=new f;t.a=h},lwq5:function(n,t,e){"use strict";var o=e("lC78"),r={userinfo:JSON.parse(o.a.get("userinfo"))||{},backgroundMenus:JSON.parse(o.a.get("backgroundMenus"))||{},loadRoutersDone:!1,isBackgroundUser:!1};t.a=r},mUbh:function(n,t,e){"use strict";e("HzVJ");t.a={}},noTV:function(n,t){var e={baseUrl:"/",db_prefix:"tcis"};n.exports=e},oFwV:function(n,t){},tvR6:function(n,t){},ukYY:function(n,t,e){"use strict";var o=e("bOdI"),r=e.n(o),a=e("HzVJ");t.a=r()({},a.a,function(n,t){n.userinfo=t,n.isBackgroundUser=t.isBackground})},xJD8:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},yh13:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.f91526d056c501c150b0.js.map