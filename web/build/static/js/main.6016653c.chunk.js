(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(44)},23:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(16),c=n.n(r),o=(n(23),n(3)),u=n(4),i=n(6),d=n(5),m=n(7),s=n(8),h=n(2),p=n.n(h),f=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={editMode:!1,file:null},n.toggleState=function(){return n.setState({editMode:!n.state.editMode})},n.edit=function(e,t,a,l){n.props.editHandler(e,t,a,l),n.setState({editMode:!1})},n.resetFile=function(){return n.setState({file:null})},n.onFormSubmit=function(e){e.preventDefault(),n.fileUpload(n.state.file).then(function(e){n.props.loadHandler(),n.resetFile()})},n.onChangeFile=function(e){n.setState({file:e.target.files[0]})},n.fileUpload=function(e){var t=new FormData;t.append("image-".concat(n.props.row.id),e);return p.a.post("http://localhost:3000/upload-image",t,{headers:{"content-type":"multipart/form-data"}})},n.onChangeImageClick=function(e){e.preventDefault(),n.inputFile.click()},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.row,a=t.deleteHandler;return this.state.editMode?l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",null,l.a.createElement("input",{type:"text",defaultValue:n.name,placeholder:"test",ref:function(t){return e.name=t}})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",defaultValue:n.surname,placeholder:"test",ref:function(t){return e.surname=t}})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",defaultValue:n.company,placeholder:"test",ref:function(t){return e.company=t}})),l.a.createElement("td",null,n.image?l.a.createElement("img",{src:"http://localhost:3000/images/".concat(n.image),alt:"avatar",height:"80"}):""),l.a.createElement("td",null,l.a.createElement("button",{onClick:this.toggleState},"Cancel")),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return e.edit(n.id,e.name.value,e.surname.value,e.company.value)}},"Save"))):l.a.createElement("tr",null,l.a.createElement("td",null,n.id),l.a.createElement("td",null,n.name),l.a.createElement("td",null,n.surname),l.a.createElement("td",null,n.company),l.a.createElement("td",null,n.image?l.a.createElement("img",{src:"http://localhost:3000/images/".concat(n.image),alt:"avatar",height:"80"}):""),l.a.createElement("td",null,l.a.createElement("button",{onClick:this.toggleState},"Edit")),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return a(n.id)}},"Delete")),l.a.createElement("td",null,l.a.createElement("form",{onSubmit:this.onFormSubmit},l.a.createElement("input",{type:"file",onChange:this.onChangeFile,ref:function(t){return e.inputFile=t},style:{display:"none"}}),!this.state.file&&l.a.createElement("button",{name:"add",onClick:this.onChangeImageClick},"Change Image"),this.state.file&&l.a.createElement("button",{type:"submit"},"Upload"),this.state.file&&l.a.createElement("button",{onClick:this.resetFile},"Cancel"))))}}]),t}(a.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.data,a=t.deleteHandler,r=t.addHandler,c=t.editHandler,o=t.loadHandler;return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Surname"),l.a.createElement("th",null,"Company"),l.a.createElement("th",null,"Avatar"),l.a.createElement("th",null),l.a.createElement("th",null),l.a.createElement("th",null))),l.a.createElement("tbody",null,n.map(function(e,t){return l.a.createElement(f,{key:t,row:e,deleteHandler:a,editHandler:c,loadHandler:o})}),l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",null,l.a.createElement("input",{type:"text",defaultValue:"",ref:function(t){return e.name=t}})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",defaultValue:"",ref:function(t){return e.surname=t}})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",defaultValue:"",ref:function(t){return e.company=t}})),l.a.createElement("td",null,"\xa0"),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return r(e.name.value,e.surname.value,e.company.value)}},"Add")))))}}]),t}(a.Component),g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(d.a)(t).call(this,e))).loadData=function(){return p.a.get("http://localhost:3000/persons").then(function(e){n.setState({data:e.data}),console.log(0x650e124ef1c7)})},n.deleteBtn=function(e){p.a.delete("http://localhost:3000/persons/".concat(e)).then(function(e){n.setState({data:e.data})})},n.addBtn=function(e,t,a){p.a.post("/persons",{name:e,surname:t,company:a}).then(function(e){n.setState({data:e.data})}).catch(function(e){console.log(e)})},n.editBtn=function(e,t,a,l){p.a.put("http://localhost:3000//persons/".concat(e),{name:t,surname:a,company:l}).then(function(e){n.setState({data:e.data})}).catch(function(e){console.log(e)})},n.state={data:[]},n.connecToServer=n.connecToServer.bind(Object(s.a)(Object(s.a)(n))),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"connecToServer",value:function(){fetch("/")}},{key:"componentDidMount",value:function(){this.connecToServer(),this.loadData()}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(E,{data:this.state.data,deleteHandler:this.deleteBtn,addHandler:this.addBtn,editHandler:this.editBtn,loadHandler:this.loadData}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.6016653c.chunk.js.map