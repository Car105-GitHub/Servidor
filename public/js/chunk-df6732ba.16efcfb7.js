(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-df6732ba"],{af8c:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"container-int"},[a("v-form",{on:{submit:function(t){return t.preventDefault(),e.agregarUsuario()}}},[a("v-text-field",{staticClass:"textField",attrs:{label:"Nombre",required:""},model:{value:e.atributos.nombre,callback:function(t){e.$set(e.atributos,"nombre",t)},expression:"atributos.nombre"}}),a("v-text-field",{staticClass:"textField",attrs:{label:"Apellido",required:""},model:{value:e.atributos.apellido,callback:function(t){e.$set(e.atributos,"apellido",t)},expression:"atributos.apellido"}}),a("v-text-field",{staticClass:"textField",attrs:{counter:10,label:"Teléfono",required:""},model:{value:e.atributos.telefono,callback:function(t){e.$set(e.atributos,"telefono",t)},expression:"atributos.telefono"}}),a("v-text-field",{attrs:{label:"E-mail",required:""},model:{value:e.atributos.email1,callback:function(t){e.$set(e.atributos,"email1",t)},expression:"atributos.email1"}}),a("v-text-field",{attrs:{label:"Confirma E-mail",required:""},model:{value:e.atributos.email2,callback:function(t){e.$set(e.atributos,"email2",t)},expression:"atributos.email2"}}),a("v-text-field",{attrs:{"append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password",name:"input-10-1",label:"Password",hint:"Mínimo 8 caracteres",counter:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.atributos.password,callback:function(t){e.$set(e.atributos,"password",t)},expression:"atributos.password"}}),a("v-select",{attrs:{items:e.perfiles,label:"Seleccione el perfil",outlined:""},model:{value:e.atributos.perfil,callback:function(t){e.$set(e.atributos,"perfil",t)},expression:"atributos.perfil"}}),a("v-btn",{attrs:{block:"",depressed:"",color:"primary",type:"submit"}},[e._v(" Guardar ")])],1)],1)},i=[],s={data:function(){return{Atributos:[],atributos:{nombre:"",apellido:"",telefono:"",email1:"",email2:"",password:"",perfil:"",activo:1},perfiles:["Oferente de Inmueble","Oferente de Servicios","Comprador de Inmuebles","Comprador de Servicios","Administración de Noticias"],show1:!1}},methods:{agregarUsuario:function(){var e=this;console.log(this.atributos),this.axios.post("/usuario/add",this.atributos).then((function(t){e.Atributos.push(t.data),e.atributos.nombre="",e.atributos.apellido="",e.atributos.telefono="",e.atributos.email1="",e.atributos.email2="",e.atributos.password="",e.atributos.perfil=""})).catch((function(e){console.log(e.response)}))}}},r=s,l=(a("eedc"),a("2877")),n=a("6544"),u=a.n(n),c=a("8336"),b=a("a523"),d=a("4bd4"),f=a("b974"),p=a("8654"),m=Object(l["a"])(r,o,i,!1,null,"65375147",null);t["default"]=m.exports;u()(m,{VBtn:c["a"],VContainer:b["a"],VForm:d["a"],VSelect:f["a"],VTextField:p["a"]})},c316:function(e,t,a){},eedc:function(e,t,a){"use strict";a("c316")}}]);
//# sourceMappingURL=chunk-df6732ba.16efcfb7.js.map