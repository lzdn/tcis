webpackJsonp([6],{"+kDu":function(t,e,n){function r(t){n("ULjQ")}var o=n("VU/8")(n("hMro"),n("U8ZL"),r,"data-v-f0ab166e",null);t.exports=o.exports},"3ExK":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("lMz8"),o=n("lC78"),i=n("5b4E"),a=n.n(i),s=n("Na9/"),c=n.n(s),l=n("BMys"),p=n.n(l),u=n("+kDu"),d=n.n(u);e.default={name:"project_home",data:function(){var t=o.a.get("project_home_view");return""!=t&&null!=t||(t="kanban"),{view_list:["kanban","list"],activeView:t,loading:!1,pageSize:20,total:0,page:1,projects:[]}},components:{ProjectKanban:a.a,ProjectList:c.a,ViewSwitch:d.a,Pagination:p.a},methods:{getAllProject:function(){var t=this;this.loading=!0,this.$ajax.get(r.f,{params:{page:this.page,page_size:this.pageSize}}).then(function(e){t.loading=!1;var n=e.status,r=e.data;200==n&&(t.projects=r.results,t.total=r.count)})},switchView:function(t){this.activeView=t,o.a.set("project_home_view",t)},pageInfoChange:function(t,e){this.page=e,this.pageSize=t,this.getAllProject()}},created:function(){this.$nextTick(function(){this.getAllProject()})}}},"5b4E":function(t,e,n){var r=n("VU/8")(n("meG2"),n("UN2j"),null,null,null);t.exports=r.exports},"9m3A":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{pageInfoChange:function(t,e){this.$emit("pageInfoChange",t,e)},handleSizeChange:function(t){this.pageInfoChange(t,1)},handleCurrentChange:function(t){this.pageInfoChange(this.pageSize,t)}},props:["pageSize","currentPage","total","pageSizes"],data:function(){return{}}}},"A/xq":function(t,e,n){function r(t){n("mF9F")}var o=n("VU/8")(n("Oo0Q"),n("N0TP"),r,"data-v-72755c6a",null);t.exports=o.exports},BMys:function(t,e,n){function r(t){n("uFkv")}var o=n("VU/8")(n("9m3A"),n("LPte"),r,null,null);t.exports=o.exports},LPte:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination"},[n("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":t.pageSizes,"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},staticRenderFns:[]}},N0TP:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("el-col",{staticClass:"project-card",attrs:{span:12,project:t.project}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",{staticStyle:{color:"rgb(102, 177, 255)","font-size":"150%"},on:{click:t.getProjectDetail}},[t._v(t._s(t.project.name))]),t._v(" "),n("i",{staticClass:"el-icon-info",staticStyle:{color:"rgb(102, 177, 255)","font-size":"150%"},on:{click:t.getProjectDetail}}),t._v(" "),n("i",{staticClass:"el-icon-circle-close",staticStyle:{float:"right","margin-left":"10px",color:"red","font-size":"150%"},on:{click:t.deleteDom}})]),t._v(" "),n("div",{staticClass:"project-info"},[n("div",[n("el-row",[n("el-col",{attrs:{span:24}},[n("h3",[t._v("项目进度")]),t._v(" "),n("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:t.project.percentage,status:t.status}})],1)],1),t._v(" "),n("el-row",[n("el-col",{attrs:{span:12}},[n("h3",[t._v("基本信息")]),t._v(" "),n("table",{staticStyle:{width:"100%"}},[n("tr",[n("td",[t._v("上级项目")]),t._v(" "),n("td",[t.project.parent?[t._v(" "+t._s(t.project.parent.name))]:t._e()],2)]),t._v(" "),n("tr",[n("td",[t._v("项目经理")]),t._v(" "),n("td",[t.project.manager?[t._v(t._s(t.project.manager.username_zh))]:t._e()],2)]),t._v(" "),n("tr",[n("td",[t._v("开始时间")]),t._v(" "),n("td",[t._v(t._s(t.project.start_date))])]),t._v(" "),n("tr",[n("td",[t._v("结束时间")]),t._v(" "),n("td",[t._v(t._s(t.project.end_date))])])])]),t._v(" "),n("el-col",{attrs:{span:12}},[n("h3",[t._v("项目描述")]),t._v(" "),n("p",{staticClass:"project-description"},[t._v(t._s(t.project.description))])])],1)],1)])])],1):t._e()},staticRenderFns:[]}},"Na9/":function(t,e,n){var r=n("VU/8")(n("xtLD"),n("Qa4u"),null,null,null);t.exports=r.exports},Oo0Q:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["project"],data:function(){return{show:!0}},methods:{getProjectDetail:function(){this.$router.push("/project/"+this.project.id)},deleteDom:function(){this.show=!1}},computed:{status:function(){return this.project.percentage<50?"success":this.project.percentage<90?"":"exception"}}}},Qa4u:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.loading,expression:"loading",modifiers:{body:!0}}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.projects},on:{"row-dblclick":t.goProjectDetail}},[n("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[n("el-form-item",{attrs:{label:"项目描述"}},[n("span",[t._v(t._s(e.row.description))])])],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),n("el-table-column",{attrs:{prop:"name",label:"项目名称"}}),t._v(" "),n("el-table-column",{attrs:{label:"上级项目"},scopedSlots:t._u([{key:"default",fn:function(e){return e.row.parent?[t._v("\n            "+t._s(e.row.parent.name)+"\n            ")]:void 0}}])}),t._v(" "),n("el-table-column",{attrs:{label:"项目经理"},scopedSlots:t._u([{key:"default",fn:function(e){return e.row.manager?[t._v("\n            "+t._s(e.row.manager.username_zh)+"\n            ")]:void 0}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"start_date",label:"开始时间"}}),t._v(" "),n("el-table-column",{attrs:{prop:"end_date",label:"结束时间"}})],1)],1)},staticRenderFns:[]}},RZZ3:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"project-home",loading:t.loading}},[n("view-switch",{attrs:{views:t.view_list,activeView:t.activeView},on:{switchView:t.switchView}}),t._v(" "),n("pagination",{attrs:{pageSizes:[20,40,80],pageSize:t.pageSize,currentPage:t.page,total:t.total},on:{pageInfoChange:t.pageInfoChange}}),t._v(" "),n("el-row",{staticClass:"main-content",attrs:{gutter:20}},["kanban"==t.activeView?n("project-kanban",{attrs:{projects:t.projects}}):t._e(),t._v(" "),"list"==t.activeView?n("project-list",{attrs:{projects:t.projects}}):t._e()],1)],1)},staticRenderFns:[]}},"S+vf":function(t,e,n){var r=n("VU/8")(n("3ExK"),n("RZZ3"),null,null,null);t.exports=r.exports},U8ZL:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-button-group",{staticClass:"view-switch"},[t._l(t.views,function(e,r){return[n("el-button",{key:r,attrs:{size:"mini",type:t.viewDict[e]},on:{click:function(n){t.switchView(e)}}},[t._v(t._s(t.viewLabel[e]))])]})],2)},staticRenderFns:[]}},ULjQ:function(t,e,n){var r=n("rOCs");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("1acd35a8",r,!0)},UN2j:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"project-kanban"}},[n("el-row",{attrs:{gutter:20}},t._l(t.projects,function(t){return n("project-card",{key:t.id,attrs:{project:t}})}))],1)},staticRenderFns:[]}},Vryk:function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,".pagination{margin:5px;display:inline-block}","",{version:3,sources:["F:/selenium_work/tcis/web/src/pages/common/Pagination.vue"],names:[],mappings:"AACA,YACE,WAAY,AACZ,oBAAsB,CACvB",file:"Pagination.vue",sourcesContent:["\n.pagination {\n  margin: 5px;\n  display: inline-block;\n}\n"],sourceRoot:""}])},bBXD:function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,".project-description[data-v-72755c6a]{border:1px solid #e6ebf5;border-radius:5px;min-height:100px;padding:5px}.project-card[data-v-72755c6a]{padding-bottom:5px;padding-top:5px}","",{version:3,sources:["F:/selenium_work/tcis/web/src/pages/project/project_card.vue"],names:[],mappings:"AACA,sCACE,yBAA0B,AAC1B,kBAAmB,AACnB,iBAAkB,AAClB,WAAa,CACd,AACD,+BACE,mBAAoB,AACpB,eAAiB,CAClB",file:"project_card.vue",sourcesContent:["\n.project-description[data-v-72755c6a] {\n  border: 1px solid #e6ebf5;\n  border-radius: 5px;\n  min-height: 100px;\n  padding: 5px;\n}\n.project-card[data-v-72755c6a] {\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n"],sourceRoot:""}])},hMro:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"view_switch",props:["views","activeView"],data:function(){var t={};for(var e in this.views){var n=this.views[e];n==this.activeView?t[n]="primary":t[n]=""}return{viewDict:t,viewLabel:{kanban:"看板",list:"列表",gantt:"甘特图"}}},methods:{switchView:function(t){for(var e in this.views){var n=this.views[e];this.viewDict[n]=n==t?"primary":""}this.$emit("switchView",t)}},watch:{activeView:function(t,e){for(var n in this.views){var r=this.views[n];this.viewDict[r]=r==t?"primary":""}}}}},lMz8:function(t,e,n){"use strict";n.d(e,"l",function(){return r}),n.d(e,"t",function(){return o}),n.d(e,"s",function(){return i}),n.d(e,"n",function(){return a}),n.d(e,"m",function(){return s}),n.d(e,"q",function(){return c}),n.d(e,"o",function(){return l}),n.d(e,"r",function(){return p}),n.d(e,"p",function(){return u}),n.d(e,"f",function(){return d}),n.d(e,"b",function(){return f}),n.d(e,"h",function(){return v}),n.d(e,"j",function(){return _}),n.d(e,"i",function(){return g}),n.d(e,"k",function(){return h}),n.d(e,"e",function(){return j}),n.d(e,"g",function(){return m}),n.d(e,"a",function(){return w}),n.d(e,"d",function(){return b}),n.d(e,"c",function(){return A});var r="/user/",o="/user/login/",i="/user/logout/",a="/user/reset_password/",s="/user/user_active/",c="/group/",l="/permission/",p="/permission/get_all_permission/",u="/permission/translate_all_permission/",d="/project/project/",f="/project/project/get_all_project/",v="/project/project_task/",_="/project/project_task/project_task_kanban/",g="/project/project_task/project_task_gantt/",h="/project/project_member/",j="/project_bug/project_bug/",m="/project_bug/project_bug/project_bug_kanban/",w="/project_test/project_test/",b="/project_test/project_test/project_test_kanban/",A="/project_test/project_test_type/"},mF9F:function(t,e,n){var r=n("bBXD");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("6e7ea7d1",r,!0)},meG2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=(n("lMz8"),n("A/xq")),o=n.n(r);e.default={name:"project_kanban",props:["projects"],data:function(){return{}},components:{ProjectCard:o.a}}},rOCs:function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,".view-switch[data-v-f0ab166e]{position:absolute;top:30px;z-index:999;display:inline-block}","",{version:3,sources:["F:/selenium_work/tcis/web/src/pages/common/view_switch.vue"],names:[],mappings:"AACA,8BACE,kBAAmB,AACnB,SAAU,AACV,YAAa,AACb,oBAAsB,CACvB",file:"view_switch.vue",sourcesContent:["\n.view-switch[data-v-f0ab166e] {\n  position: absolute;\n  top: 30px;\n  z-index: 999;\n  display: inline-block;\n}\n"],sourceRoot:""}])},uFkv:function(t,e,n){var r=n("Vryk");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("fbc3b3bc",r,!0)},xtLD:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"",props:["projects"],data:function(){return{}},methods:{goProjectDetail:function(t,e){this.$router.push("/project/"+t.id)}}}}});
//# sourceMappingURL=6.16aab86229f2ef081ff2.js.map