(this["webpackJsonpreact-attendance"]=this["webpackJsonpreact-attendance"]||[]).push([[0],{18:function(e,t,n){},21:function(e){e.exports=JSON.parse('[{"id":1,"name":"Student 1","present":false},{"id":2,"name":"Student 2","present":false},{"id":3,"name":"Student 3","present":false},{"id":4,"name":"Student 4","present":false},{"id":5,"name":"Student 5","present":false},{"id":6,"name":"Student 6","present":false},{"id":7,"name":"Student 7","present":false}]')},24:function(e,t,n){e.exports=n(35)},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(20),l=n.n(s),c=(n(29),n(7)),u=n(8),o=n(10),m=n(9),d=n(11),i=n(13),p=n(5);n(18);function f(){return r.a.createElement("div",null,r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"contain"},"Student Attendance System ")))}var h=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).getStyle=function(){return{backgroundColor:n.props.student.present?"#49B66E":"#fff",color:n.props.student.present?"#fff":"#3b3b3b"}},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.student,t=e.id,n=e.name;return r.a.createElement("div",{style:this.getStyle(),className:"contain"},r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",{className:"nameCol"},n),r.a.createElement("td",{className:"switchCol"},this.props.student.present?"Present ":"Absent ",r.a.createElement("label",{class:"switch"},r.a.createElement("input",{type:"checkbox",onChange:this.props.studentPresent.bind(this,t),defaultChecked:this.props.student.present}),r.a.createElement("span",{class:"slider round"}))))))}}]),t}(a.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return this.props.students.map((function(t){return r.a.createElement(h,{key:t.id,student:t,studentPresent:e.props.studentPresent})}))}}]),t}(a.Component),b=n(21),y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={students:b},n.studentPresent=function(e){n.setState({students:n.state.students.map((function(t){return t.id===e&&(t.present=!t.present),t}))})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t={color:"#82A7DC",textDecoration:"none"};return r.a.createElement(i.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(p.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Roll Number"),r.a.createElement("th",{className:"nameCol"},"Student Name"),r.a.createElement("th",{className:"switchCol"},"Attendance"))),r.a.createElement(E,{students:e.state.students,studentPresent:e.studentPresent}),r.a.createElement(i.b,{to:"/summary"},r.a.createElement("button",{className:"btn",onClick:e.gotoSummary},"Submit")))}}),r.a.createElement(p.a,{path:"/summary",render:function(n){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:""},r.a.createElement("h1",null,"Attendance Summary"),e.state.students.filter((function(e){return e.present})).length,"students out of ",e.state.students.length," attended today's class"),r.a.createElement(i.b,{style:t,to:"/"},"Back"))}})))}}]),t}(r.a.Component);l.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.710ae2d1.chunk.js.map