webpackJsonp([9],{"25VH":function(e,t,n){var i=n("VU/8")(n("UhQJ"),n("AViu"),null,null,null);e.exports=i.exports},"9m3A":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{pageInfoChange:function(e,t){this.$emit("pageInfoChange",e,t)},handleSizeChange:function(e){this.pageInfoChange(e,1)},handleCurrentChange:function(e){this.pageInfoChange(this.pageSize,e)}},props:["pageSize","currentPage","total","pageSizes"],data:function(){return{}}}},AViu:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"permission-home",loading:e.loading}},[n("pagination",{attrs:{pageSizes:[15,40,80,200],pageSize:e.pageSize,currentPage:e.page,total:e.total},on:{pageInfoChange:e.pageInfoChange}}),e._v(" "),n("el-button",{staticStyle:{display:"inline-block"},attrs:{size:"small"},on:{click:e.translatePermissionName}},[e._v("翻译")]),e._v(" "),n("el-row",{staticClass:"main-content",attrs:{gutter:20}},[n("permission-list",{attrs:{permissions:e.permissions}})],1)],1)},staticRenderFns:[]}},BMys:function(e,t,n){function i(e){n("uFkv")}var r=n("VU/8")(n("9m3A"),n("LPte"),i,null,null);e.exports=r.exports},IeKc:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.permissions}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),n("el-table-column",{attrs:{prop:"name",label:"权限名称"}}),e._v(" "),n("el-table-column",{attrs:{prop:"codename",label:"权限编码"}}),e._v(" "),e.userinfo.is_superuser?n("el-table-column",{attrs:{label:"所属App"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.content_type?[e._v("\n            "+e._s(t.row.content_type.app_label)+"\n            ")]:void 0}}])}):e._e()],1)],1)},staticRenderFns:[]}},LPte:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination"},[n("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]}},UhQJ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("lMz8"),r=n("lC78"),s=n("gZWS"),o=n.n(s),a=n("BMys"),u=n.n(a);n("NYxO");t.default={name:"permission_home",data:function(){return{pageSize:15,total:0,page:1,permissions:[]}},components:{PermissionList:o.a,Pagination:u.a},methods:{getAllPermission:function(){var e=this;this.loading=!0,this.$ajax.get(i.o,{params:{page:this.page,page_size:this.pageSize}}).then(function(t){e.loading=!1;var n=t.status,i=t.data;200==n&&(e.permissions=i.results,e.total=i.count)})},switchView:function(e){this.activeView=e,r.a.set("permission_home_view",e)},pageInfoChange:function(e,t){this.page=t,this.pageSize=e,this.getAllPermission()},translatePermissionName:function(){var e=this;this.loading=!0,this.$ajax.get(i.p).then(function(t){e.loading=!1,200==status&&e.$notify({title:"成功",message:"翻译完成，请刷新页面",type:"success"})})}},created:function(){this.$nextTick(function(){this.getAllPermission()})}}},Vryk:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,".pagination{margin:5px;display:inline-block}","",{version:3,sources:["F:/selenium_work/tcis/web/src/pages/common/Pagination.vue"],names:[],mappings:"AACA,YACE,WAAY,AACZ,oBAAsB,CACvB",file:"Pagination.vue",sourcesContent:["\n.pagination {\n  margin: 5px;\n  display: inline-block;\n}\n"],sourceRoot:""}])},aqWz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("Dd8w"),r=n.n(i),s=n("NYxO");t.default={name:"",props:["permissions"],data:function(){return{}},computed:r()({},n.i(s.b)({userinfo:function(e){return e.userinfo}}))}},gZWS:function(e,t,n){var i=n("VU/8")(n("aqWz"),n("IeKc"),null,null,null);e.exports=i.exports},lMz8:function(e,t,n){"use strict";n.d(t,"l",function(){return i}),n.d(t,"t",function(){return r}),n.d(t,"s",function(){return s}),n.d(t,"n",function(){return o}),n.d(t,"m",function(){return a}),n.d(t,"q",function(){return u}),n.d(t,"o",function(){return c}),n.d(t,"r",function(){return p}),n.d(t,"p",function(){return l}),n.d(t,"f",function(){return g}),n.d(t,"b",function(){return f}),n.d(t,"h",function(){return d}),n.d(t,"j",function(){return _}),n.d(t,"i",function(){return m}),n.d(t,"k",function(){return h}),n.d(t,"e",function(){return v}),n.d(t,"g",function(){return j}),n.d(t,"a",function(){return b}),n.d(t,"d",function(){return z}),n.d(t,"c",function(){return C});var i="/user/",r="/user/login/",s="/user/logout/",o="/user/reset_password/",a="/user/user_active/",u="/group/",c="/permission/",p="/permission/get_all_permission/",l="/permission/translate_all_permission/",g="/project/project/",f="/project/project/get_all_project/",d="/project/project_task/",_="/project/project_task/project_task_kanban/",m="/project/project_task/project_task_gantt/",h="/project/project_member/",v="/project_bug/project_bug/",j="/project_bug/project_bug/project_bug_kanban/",b="/project_test/project_test/",z="/project_test/project_test/project_test_kanban/",C="/project_test/project_test_type/"},uFkv:function(e,t,n){var i=n("Vryk");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("fbc3b3bc",i,!0)}});
//# sourceMappingURL=9.a212ae5b4e33f02179a0.js.map