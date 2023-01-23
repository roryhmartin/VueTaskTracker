(function(){"use strict";var e={2483:function(e,t,n){var r=n(9242),a=n(3396);const o={class:"container"};function s(e,t,n,s,i,d){const l=(0,a.up)("Header"),u=(0,a.up)("AddTask"),c=(0,a.up)("Tasks");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(l,{onToggleAddTask:d.toggleAddTask,title:"Task Tracker",showAddTask:i.showAddTask},null,8,["onToggleAddTask","showAddTask"]),(0,a.wy)((0,a._)("div",null,[(0,a.Wm)(u,{onAddTask:d.addTask},null,8,["onAddTask"])],512),[[r.F8,i.showAddTask]]),(0,a.Wm)(c,{onToggleReminder:d.toggleReminder,onDeleteTask:d.deleteTask,tasks:i.tasks},null,8,["onToggleReminder","onDeleteTask","tasks"])])}var i=n(7139);function d(e,t,n,r,o,s){const d=(0,a.up)("Button");return(0,a.wg)(),(0,a.iD)("header",null,[(0,a._)("h1",null,(0,i.zw)(n.title),1),(0,a.Wm)(d,{onBtnClick:t[0]||(t[0]=t=>e.$emit("toggle-add-task")),text:n.showAddTask?"Close":"Add Task",color:n.showAddTask?"red":"green"},null,8,["text","color"])])}function l(e,t,n,r,o,s){return(0,a.wg)(),(0,a.iD)("button",{onClick:t[0]||(t[0]=e=>s.onClick()),style:(0,i.j5)({background:n.color}),class:"btn"},(0,i.zw)(n.text),5)}var u={name:"Button",props:{text:String,color:String},methods:{onClick(){this.$emit("btn-click")}}},c=n(89);const k=(0,c.Z)(u,[["render",l]]);var m=k,f={name:"Header",props:{title:String,showAddTask:Boolean},components:{Button:m}};const h=(0,c.Z)(f,[["render",d],["__scopeId","data-v-fef8f9d8"]]);var p=h;function g(e,t,n,r,o,s){const i=(0,a.up)("Task");return(0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.tasks,(t=>((0,a.wg)(),(0,a.iD)("div",{key:t.id},[(0,a.Wm)(i,{onToggleReminder:n=>e.$emit("toggle-reminder",t.id),onDeleteTask:n=>e.$emit("delete-task",t.id),task:t},null,8,["onToggleReminder","onDeleteTask","task"])])))),128)}function T(e,t,n,r,o,s){return(0,a.wg)(),(0,a.iD)("div",{onDblclick:t[1]||(t[1]=t=>e.$emit("toggle-reminder",n.task.id)),class:(0,i.C_)([n.task.reminder?"reminder":"","task"])},[(0,a._)("h3",null,[(0,a.Uk)((0,i.zw)(n.task.text)+" ",1),(0,a._)("i",{onClick:t[0]||(t[0]=t=>e.$emit("delete-task",n.task.id)),class:"fas fa-solid fa-xmark"})]),(0,a._)("p",null,(0,i.zw)(n.task.day),1)],34)}var v={name:"Task",props:{task:Object}};const w=(0,c.Z)(v,[["render",T]]);var b=w,y={name:"Tasks",props:{tasks:Array},components:{Task:b},emits:["delete-task","toggle-reminder"]};const A=(0,c.Z)(y,[["render",g]]);var _=A;const x=e=>((0,a.dD)("data-v-544ef55b"),e=e(),(0,a.Cn)(),e),D={class:"form-control"},O=x((()=>(0,a._)("label",null,"Task",-1))),C={class:"form-control"},S=x((()=>(0,a._)("label",null,"Day & Time",-1))),j={class:"form-control form-control-check"},R=x((()=>(0,a._)("label",null,"Set Reminder",-1))),$=x((()=>(0,a._)("input",{type:"submit",value:"Save Task",class:"btn btn-block"},null,-1)));function M(e,t,n,o,s,i){return(0,a.wg)(),(0,a.iD)("form",{onSubmit:t[3]||(t[3]=(...e)=>i.onSubmit&&i.onSubmit(...e)),class:"add-form"},[(0,a._)("div",D,[O,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>s.text=e),name:"text",placeholder:"Add Task"},null,512),[[r.nr,s.text]])]),(0,a._)("div",C,[S,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>s.day=e),name:"day",placeholder:"Add Day & Time"},null,512),[[r.nr,s.day]])]),(0,a._)("div",j,[R,(0,a.wy)((0,a._)("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=e=>s.reminder=e),name:"reminder"},null,512),[[r.e8,s.reminder]])]),$],32)}var W={name:"AddTask",data(){return{text:"",day:"",reminder:!1}},methods:{onSubmit(e){if(e.preventDefault(),!this.text)return void alert("Please add a task");const t={id:Math.floor(1e5*Math.random()),text:this.text,day:this.day,reminder:this.reminder};this.$emit("add-task",t),this.text="",this.day="",this.reminder=!1}}};const Z=(0,c.Z)(W,[["render",M],["__scopeId","data-v-544ef55b"]]);var B=Z,z={name:"App",components:{Header:p,Tasks:_,AddTask:B},data(){return{tasks:[],showAddTask:!1}},methods:{toggleAddTask(){this.showAddTask=!this.showAddTask},addTask(e){this.tasks=[...this.tasks,e]},deleteTask(e){confirm("Are you sure?")&&(this.tasks=this.tasks.filter((t=>t.id!==e)))},toggleReminder(e){this.tasks=this.tasks.map((t=>t.id===e?{...t,reminder:!t.reminder}:t))}},created(){this.tasks=[{id:1,text:"Doctors Appointment",day:"March 1st at 2.30pm",reminder:!0},{id:2,text:"Workout",day:"March 4stat 09.00am",reminder:!0},{id:3,text:"Swimming Appointment",day:"March 1st at 2.30pm",reminder:!1}]}};const H=(0,c.Z)(z,[["render",s]]);var U=H;(0,r.ri)(U).mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var s=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],o=e[u][2];for(var i=!0,d=0;d<r.length;d++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[d])}))?r.splice(d--,1):(i=!1,o<s&&(s=o));if(i){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,s=r[0],i=r[1],d=r[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(d)var u=d(n)}for(t&&t(r);l<s.length;l++)o=s[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},r=self["webpackChunkvue_crash_2021"]=self["webpackChunkvue_crash_2021"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2483)}));r=n.O(r)})();
//# sourceMappingURL=app.d4db79f0.js.map