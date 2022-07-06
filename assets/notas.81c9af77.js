import{d as N,l as V,a as h,b as M,t as l,u as g,o as r,e as a,f as e,h as c,F as x,g as P,s as U,n as q,w as C,X as z,q as u,Y as G,m as b}from"./index.be19ff7d.js";import{u as I}from"./docente.79323787.js";import{u as X}from"./programa.0c11e38a.js";import{r as F}from"./CheckIcon.53fd97c7.js";const R={key:0,class:"flex flex-col"},T={class:"flex-1"},L={class:"py-6"},J={class:"uppercase font-bold text-xl border-b-2 mb-6"},O={class:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8"},Q={class:"flex items-center justify-center","aria-label":"Progress"},Y={role:"list",class:"flex items-center"},Z=e("div",{class:"absolute inset-0 flex items-center","aria-hidden":"true"},[e("div",{class:"h-0.5 w-full bg-indigo-600"})],-1),H={class:"relative w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full hover:bg-indigo-900"},K={class:"sr-only"},W=e("div",{class:"absolute inset-0 flex items-center","aria-hidden":"true"},[e("div",{class:"h-0.5 w-full bg-gray-200"})],-1),ee={href:"#",class:"relative w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full","aria-current":"step"},te=e("span",{class:"h-2.5 w-2.5 bg-indigo-600 rounded-full","aria-hidden":"true"},null,-1),se={class:"sr-only"},oe=e("div",{class:"absolute inset-0 flex items-center","aria-hidden":"true"},[e("div",{class:"h-0.5 w-full bg-gray-200"})],-1),re={href:"#",class:"group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400"},ae=e("span",{class:"h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300","aria-hidden":"true"},null,-1),ne={class:"sr-only"},ie={key:0},le={class:"min-w-0 flex-1 text-md"},de=["for"],ce={class:"ml-3 flex items-center h-5"},ue=["id","value"],me={class:"mt-6 flex"},_e={key:1},fe={class:"px-4 sm:px-6 lg:px-8"},pe={class:"sm:flex sm:items-center"},ge={class:"sm:flex-auto"},he=e("h1",{class:"text-2xl font-semibold text-gray-800"}," ALUMNOS ",-1),xe={class:"flex flex-row items-center w-full text-xl my-4"},be={as:"span",class:"font-medium text-gray-900 w-9/12"},ve=b(" Curso: "),ye={as:"span",class:"font-medium text-gray-900 w-3/12"},we=b(" Grupo: "),ke={class:"flex flex-row items-center w-full text-lg my-4"},Pe={key:0,as:"span",class:"font-medium text-gray-900 w-4/12"},Be=b(" Estado: "),Ce=e("span",{class:"text-blue-500"},"Sin Publicar",-1),Ee=[Be,Ce],je={key:1,as:"span",class:"font-medium text-gray-900 w-4/12"},Ae=b(" Estado: "),$e=e("span",{class:"text-green-500"},"Publicado",-1),Se=[Ae,$e],De={key:2,as:"span",class:"font-medium text-gray-900 w-4/12"},Ne=b(" Estado: "),Ve=e("span",{class:"text-red-500"},"Acta Cerrada",-1),Me=[Ne,Ve],Ue={class:"sm:flex sm:items-center justify-end"},qe={class:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none"},ze={class:"mt-4 flex flex-col"},Ge={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},Ie={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},Xe={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},Fe={class:"min-w-full divide-y divide-gray-300"},Re=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6 text-center"}," N\xB0 "),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"}," Alumno "),e("th",{scope:"col",class:"px-3 py-3.5 text-sm font-semibold text-gray-900 text-center"}," N\xB0 Documento "),e("th",{scope:"col",class:"px-3 py-3.5 text-sm font-semibold text-gray-900 text-center"}," Promedio Final ")])],-1),Te={class:"divide-y divide-gray-200 bg-white"},Le={class:"whitespace-nowrap px-3 py-2 text-sm text-gray-500 text-center"},Je={class:"text-gray-900"},Oe={class:"whitespace-nowrap py-2 pl-4 pr-3 text-sm sm:pl-6"},Qe={class:"flex items-center"},Ye={class:"h-10 w-10 flex-shrink-0"},Ze=["src"],He={class:"ml-4"},Ke={class:"font-medium text-gray-900"},We={class:"whitespace-nowrap px-3 py-2 text-sm text-gray-500 text-center"},et={class:"text-gray-900"},tt={class:"whitespace-nowrap px-3 py-2 text-sm text-gray-700 text-center"},st=["onUpdate:modelValue","step","disabled"],ot={class:"mt-6 flex"},dt=N({setup(rt){const v=V(),n=I(),m=X(),E=h(!1),_=h(0),y=h(""),w=h(""),f=h(!1),d=h(!1),p=h([{id:"01",name:"Cursos",description:"",href:"",status:"current"},{id:"02",name:"Notas",description:"",href:"notas",status:"upcoming"}]);M(async()=>{await m.get_periodo_active();const{status:o}=await n.get_cursos_by_docente(m.periodo.id);o!==200?l("Error al obtener los cursos",{type:"danger",position:"top-right",hideProgressBar:!0}):E.value=!0});const j=async o=>{if(o===0){l("Error, Debe seleccionar un  curso para continuar",{type:"danger",hideProgressBar:!0});return}p.value[0].status="complete",p.value[1].status="current",w.value=n.cursos_docente.filter(i=>i.id==o)[0].grupo,y.value=n.cursos_docente.filter(i=>i.id==o)[0].curso_nombre;const{data:s}=await n.get_estado_notas_curso_by_id(o,m.periodo.id);f.value=s.is_publicado,d.value=s.is_cerrado;const{status:t}=await n.get_alumnos_by_curso(o);t!==200&&l("Error al obtener Datos",{type:"danger",hideProgressBar:!0})},A=()=>{p.value[1].status="upcoming",p.value[0].status="current",n.alumnos_curso=[],_.value=0,w.value="",y.value=""},B=async(o,s)=>{if(o===0){l("Error, Debe seleccionar un  curso para continuar",{type:"danger",hideProgressBar:!0});return}const{status:t}=await n.save_notas(o,m.periodo.id,s);t!==200?l("Error al guardar notas,verifique que todos los campos sean correctos",{type:"danger",hideProgressBar:!0}):l("Notas guardadas correctamente",{type:"success",hideProgressBar:!0})},$=async o=>{for(let t=0;t<n.alumnos_curso.length;t++)if(n.alumnos_curso[t].promedio_final===null){l("Error, Debe ingresar notas para todos los alumnos",{type:"danger",hideProgressBar:!0});return}if(o===0){l("Error, Debe seleccionar un  curso para continuar",{type:"danger",hideProgressBar:!0});return}const{status:s}=await n.publicar_notas(o,m.periodo.id);if(s!==200)l("Error al publicar notas",{type:"danger",hideProgressBar:!0});else{l("Notas publicadas correctamente",{type:"success",hideProgressBar:!0});const{data:t}=await n.get_estado_notas_curso_by_id(o,m.periodo.id);f.value=t.is_publicado,d.value=t.is_cerrado}},S=async o=>{if(o===0){l("Error, Debe seleccionar un  curso para continuar",{type:"danger",hideProgressBar:!0});return}const{status:s}=await n.cerrar_acta(o,m.periodo.id);if(s!==200)l("Error al cerrar acta",{type:"danger",hideProgressBar:!0});else{l("Acta cerrada correctamente",{type:"success",hideProgressBar:!0});const{data:t}=await n.get_estado_notas_curso_by_id(o,m.periodo.id);f.value=t.is_publicado,d.value=t.is_cerrado}},D=async o=>{const{status:s,data:t}=await v.get_reporte_actanotas_pdf(o,m.periodo.id);s!==200&&l("Error al imprimir acta",{type:"danger",hideProgressBar:!0});const i=document.createElement("a");i.target="_blank",i.href=v.get_media_url(t.path),i.click()};return(o,s)=>g(n).cursos_docente.length>0?(r(),a("div",R,[e("main",T,[e("div",L,[e("div",J,[e("h1",null,"Acta de Notas Periodo Academico "+c(g(m).periodo.nombre),1)]),e("div",O,[e("nav",Q,[e("ol",Y,[(r(!0),a(x,null,P(p.value,(t,i)=>(r(),a("li",{key:t.name,class:U(["relative",[i!==p.value.length-1?"pr-8 sm:pr-20":""]])},[t.status==="complete"?(r(),a(x,{key:0},[Z,e("a",H,[q(g(F),{class:"w-5 h-5 text-white","aria-hidden":"true"}),e("span",K,c(t.name),1)])],64)):t.status==="current"?(r(),a(x,{key:1},[W,e("a",ee,[te,e("span",se,c(t.name),1)])],64)):(r(),a(x,{key:2},[oe,e("a",re,[ae,e("span",ne,c(t.name),1)])],64))],2))),128))])]),p.value[0].status==="current"?(r(),a("div",ie,[(r(!0),a(x,null,P(g(n).cursos_docente,(t,i)=>(r(),a("div",{key:i,class:"relative flex items-start py-4 border rounded-lg px-4 my-2"},[e("div",le,[e("label",{for:`check-${t.id}`,class:"font-medium text-gray-700 w-full"},[e("b",null,c(t.curso_nombre)+" ("+c(t.grupo)+")",1)],8,de)]),e("div",ce,[C(e("input",{id:`-${t.id}`,"onUpdate:modelValue":s[0]||(s[0]=k=>_.value=k),type:"radio",name:"radio",value:`${t.id}`,"aria-describedby":"comments-description",class:"focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"},null,8,ue),[[z,_.value]])])]))),128)),e("div",me,[e("button",{class:"mx-auto flex-shrink-0 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:s[1]||(s[1]=t=>j(_.value))}," Continuar ")])])):u("",!0),p.value[1].status==="current"?(r(),a("div",_e,[e("div",fe,[e("div",pe,[e("div",ge,[he,e("div",xe,[e("p",be,[ve,e("b",null,c(y.value),1)]),e("p",ye,[we,e("b",null,c(w.value),1)])]),e("div",ke,[f.value===!1&&d.value===!1?(r(),a("p",Pe,Ee)):u("",!0),f.value===!0&&d.value===!1?(r(),a("p",je,Se)):u("",!0),f.value===!0&&d.value===!0?(r(),a("p",De,Me)):u("",!0)])])]),e("div",Ue,[e("div",qe,[d.value===!1?(r(),a("button",{key:0,class:"mx-2 inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto",onClick:s[2]||(s[2]=t=>B(_.value,g(n).alumnos_curso))}," Guardar ")):u("",!0),f.value===!1?(r(),a("button",{key:1,class:"mx-2 inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto",onClick:s[3]||(s[3]=t=>$(_.value))}," Publicar ")):u("",!0),f.value===!0&&d.value===!1?(r(),a("button",{key:2,class:"mx-2 inline-flex items-center justify-center rounded-md border border-transparent bg-yellow-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:w-auto",onClick:s[4]||(s[4]=t=>S(_.value))}," Cerrar Acta ")):u("",!0),d.value===!0?(r(),a("button",{key:3,type:"button",class:"mx-2 inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto",onClick:s[5]||(s[5]=t=>D(_.value))}," Imprimir Acta ")):u("",!0),e("button",{type:"button",class:"mx-2 inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto",onClick:s[6]||(s[6]=t=>A())}," Atras ")])]),e("div",ze,[e("div",Ge,[e("div",Ie,[e("div",Xe,[e("table",Fe,[Re,e("tbody",Te,[(r(!0),a(x,null,P(g(n).alumnos_curso,(t,i)=>(r(),a("tr",{key:i},[e("td",Le,[e("div",Je,c(i+1),1)]),e("td",Oe,[e("div",Qe,[e("div",Ye,[e("img",{class:"h-8 w-8 rounded-full",src:t.foto?g(v).get_media_url(t.foto):"https://th.bing.com/th/id/R.e62421c9ba5aeb764163aaccd64a9583?rik=DzXjlnhTgV5CvA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_210318.png&ehk=952QCsChZS0znBch2iju8Vc%2fS2aIXvqX%2f0zrwkjJ3GA%3d&risl=&pid=ImgRaw&r=0",alt:""},null,8,Ze)]),e("div",He,[e("div",Ke,c(`${t.apellido_paterno} ${t.apellido_materno}, ${t.nombres}`),1)])])]),e("td",We,[e("div",et,c(t.numero_documento),1)]),e("td",tt,[C(e("input",{"onUpdate:modelValue":k=>t.promedio_final=k,type:"text",max:20,min:0,step:.01,disabled:d.value,class:"focus:ring-blue-500 h-6 w-4/12 border-gray-700 rounded"},null,8,st),[[G,t.promedio_final]])])]))),128))])])])])])])]),e("div",ot,[d.value===!1?(r(),a("button",{key:0,class:"mx-auto flex-shrink-0 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",onClick:s[7]||(s[7]=t=>B(_.value,g(n).alumnos_curso))}," Guardar ")):u("",!0)])])):u("",!0)])])])])):u("",!0)}});export{dt as default};
