webpackJsonp([8],{"3p0o":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("lMz8"),r=o("lC78"),s=o("TO1l"),i=o.n(s),a=o("nvQA"),u=o.n(a),c=o("NZQJ"),l=o.n(c);e.default={name:"group_detail",data:function(){var t=r.a.get("group_detail_view");return""!=t&&null!=t||(t="info"),{formTopBtns:{create:!0},activeView:t,loadding:!1,groupForm:{},newGroupForm:{name:"",permissions:[]}}},components:{GroupFrom:u.a,GroupInfo:l.a,FormTop:i.a},methods:{getGroupInfo:function(){var t=this;this.loadding=!0;var e=this.$route.params.id;"new"!=e?(this.groupForm.id=e,this.$ajax.get(n.q+this.groupForm.id).then(function(e){t.loadging=!1;var o=e.status,n=e.data;200==o&&(t.groupForm=n)})):this.groupForm=this.newGroupFrom}},created:function(){this.getGroupInfo()},watch:{$route:"getGroupInfo"}}},"6evO":function(t,e,o){var n=o("VU/8")(o("3p0o"),o("q14v"),null,null,null);t.exports=n.exports},B3Cl:function(t,e,o){var n=o("Y3ZK");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o("rjj0")("5ed7d397",n,!0)},H1ug:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"group-form"}},[o("form-top",{attrs:{formTopBtns:t.formTopBtns},on:{formTopAction:t.formTopAction}}),t._v(" "),o("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"main-content"},[o("el-form",{ref:"groupForm",attrs:{inline:!0,rules:t.groupFormRules,model:t.groupForm,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"组名",prop:"name"}},[o("el-input",{model:{value:t.groupForm.name,callback:function(e){t.$set(t.groupForm,"name",e)},expression:"groupForm.name"}})],1)],1),t._v(" "),o("el-transfer",{attrs:{filterable:"",titles:["可选项","已选项"],"button-texts":["到左边","到右边"],"filter-placeholder":"请输入条件",props:{key:"id",label:"name"},data:t.allPermissions},model:{value:t.groupForm.permissions,callback:function(e){t.$set(t.groupForm,"permissions",e)},expression:"groupForm.permissions"}})],1)],1)},staticRenderFns:[]}},IeKc:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.permissions}},[o("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),o("el-table-column",{attrs:{prop:"name",label:"权限名称"}}),t._v(" "),o("el-table-column",{attrs:{prop:"codename",label:"权限编码"}}),t._v(" "),t.userinfo.is_superuser?o("el-table-column",{attrs:{label:"所属App"},scopedSlots:t._u([{key:"default",fn:function(e){return e.row.content_type?[t._v("\n            "+t._s(e.row.content_type.app_label)+"\n            ")]:void 0}}])}):t._e()],1)],1)},staticRenderFns:[]}},L654:function(t,e,o){var n=o("jdEQ");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o("rjj0")("0812c331",n,!0)},NZQJ:function(t,e,o){function n(t){o("L654")}var r=o("VU/8")(o("cCNR"),o("P9z1"),n,"data-v-239306e2",null);t.exports=r.exports},P9z1:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"group-info"}},[o("el-row",{attrs:{gutter:20}},[o("el-form",{ref:"group_info",staticClass:"form-read-only",attrs:{inline:!0,model:t.group}},[o("el-form-item",{attrs:{label:"用户组"}},[o("span",[t._v(t._s(t.group.name))])])],1)],1),t._v(" "),o("el-tabs",{staticClass:"tcis-tabs",attrs:{type:"border-card"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[o("el-tab-pane",{attrs:{label:"权限明细",name:"permission"}},[o("permission-list",{attrs:{permissions:t.group.permissions}})],1)],1)],1)},staticRenderFns:[]}},TO1l:function(t,e,o){function n(t){o("B3Cl")}var r=o("VU/8")(o("nWf1"),o("dPJm"),n,null,null);t.exports=r.exports},Y3ZK:function(t,e,o){e=t.exports=o("FZ+f")(!0),e.push([t.i,".form-top{display:inline-block;margin:5px}","",{version:3,sources:["F:/selenium_work/tcis/web/src/pages/common/form_top.vue"],names:[],mappings:"AACA,UACE,qBAAsB,AACtB,UAAY,CACb",file:"form_top.vue",sourcesContent:["\n.form-top {\n  display: inline-block;\n  margin: 5px;\n}\n"],sourceRoot:""}])},aqWz:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("Dd8w"),r=o.n(n),s=o("NYxO");e.default={name:"",props:["permissions"],data:function(){return{}},computed:r()({},o.i(s.b)({userinfo:function(t){return t.userinfo}}))}},cCNR:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("gZWS"),r=o.n(n);e.default={name:"group_info",props:["group","checkChild","groupTasks","groupBugs","childGroups","groupMembers"],data:function(){return{activeName:"permission"}},components:{PermissionList:r.a}}},dPJm:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-top"},[t.formTopBtns.create?o("el-button",{attrs:{plain:"",type:"primary",icon:"el-icon-document",size:"small"},on:{click:function(e){t.formTopAction("create")}}},[t._v("创建")]):t._e(),t._v(" "),t.formTopBtns.edit?o("el-button",{attrs:{plain:"",type:"warning",icon:"el-icon-edit",size:"small"},on:{click:function(e){t.formTopAction("edit")}}},[t._v("编辑")]):t._e(),t._v(" "),t.formTopBtns.save?o("el-button",{attrs:{plain:"",type:"success",icon:"el-icon-message",size:"small"},on:{click:function(e){t.formTopAction("save")}}},[t._v("保存")]):t._e(),t._v(" "),t.formTopBtns.cancel?o("el-button",{attrs:{plain:"",type:"danger",icon:"el-icon-close",size:"small"},on:{click:function(e){t.formTopAction("cancel")}}},[t._v("取消")]):t._e()],1)},staticRenderFns:[]}},gZWS:function(t,e,o){var n=o("VU/8")(o("aqWz"),o("IeKc"),null,null,null);t.exports=n.exports},jdEQ:function(t,e,o){e=t.exports=o("FZ+f")(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"group_info.vue",sourceRoot:""}])},lMz8:function(t,e,o){"use strict";o.d(e,"l",function(){return n}),o.d(e,"t",function(){return r}),o.d(e,"s",function(){return s}),o.d(e,"n",function(){return i}),o.d(e,"m",function(){return a}),o.d(e,"q",function(){return u}),o.d(e,"o",function(){return c}),o.d(e,"r",function(){return l}),o.d(e,"p",function(){return p}),o.d(e,"f",function(){return m}),o.d(e,"b",function(){return f}),o.d(e,"h",function(){return d}),o.d(e,"j",function(){return g}),o.d(e,"i",function(){return _}),o.d(e,"k",function(){return v}),o.d(e,"e",function(){return b}),o.d(e,"g",function(){return h}),o.d(e,"a",function(){return j}),o.d(e,"d",function(){return F}),o.d(e,"c",function(){return T});var n="/user/",r="/user/login/",s="/user/logout/",i="/user/reset_password/",a="/user/user_active/",u="/group/",c="/permission/",l="/permission/get_all_permission/",p="/permission/translate_all_permission/",m="/project/project/",f="/project/project/get_all_project/",d="/project/project_task/",g="/project/project_task/project_task_kanban/",_="/project/project_task/project_task_gantt/",v="/project/project_member/",b="/project_bug/project_bug/",h="/project_bug/project_bug/project_bug_kanban/",j="/project_test/project_test/",F="/project_test/project_test/project_test_kanban/",T="/project_test/project_test_type/"},nWf1:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"form-rop",props:["formTopBtns"],data:function(){return{}},methods:{formTopAction:function(t){this.$emit("formTopAction",t)}}}},nvQA:function(t,e,o){var n=o("VU/8")(o("p4Eo"),o("H1ug"),null,null,null);t.exports=n.exports},p4Eo:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("lMz8"),r=o("TO1l"),s=o.n(r);e.default={name:"group-form",data:function(){return{formTopBtns:{},loading:!1,allPermissions:[],selectedPermissions:[],groupForm:{name:"",permissions:[]}}},components:{FormTop:s.a},methods:{getAllPermissions:function(){var t=this;this.loading=!0,this.$ajax.get(n.r).then(function(e){t.loading=!1;var o=e.status,n=e.data;200==o&&(t.allPermissions=n)})},getGroup:function(){var t=this,e=this.$route.params.id;"new"!=e?(this.formTopBtns.create=!0,this.formTopBtns.edit=!0,this.groupForm.id=e,this.$ajax.get(n.o+this.groupForm.id).then(function(e){t.loadging=!1;var o=e.status,n=e.data;200==o&&(t.groupForm=n)})):(this.formTopBtns.create=!1,this.formTopBtns.save=!0)}},created:function(){this.$nextTick(function(){this.getAllPermissions(),this.getGroup()})}}},q14v:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"group-detail"},[o("form-top",{attrs:{formTopBtns:t.formTopBtns},on:{formTopAction:t.formTopAction}}),t._v(" "),o("div",{staticClass:"main-content"},["form"==t.activeView?o("group-from",{attrs:{group:t.newGroupForm}}):t._e(),t._v(" "),"info"==t.activeView?o("group-info",{attrs:{group:t.groupForm}}):t._e()],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=8.4bb8d95ab4ad16ef1f6e.js.map