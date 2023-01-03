import{_ as U}from"./alert.26109fd5.js";import{d as z,j as G,u as I,a as h,b as q,t as l,o,e as r,f as e,w as E,v as F,g as f,F as v,h as w,i as c,p as R,l as j,k as b,Y as T,n as m,Z as X}from"./index.74e150f2.js";import{u as L}from"./docente.b132e983.js";import{r as Z}from"./CheckIcon.4ea11011.js";const J={class:"flex flex-col"},O={class:"flex-1"},Q={class:"py-6"},Y=e("div",{class:"uppercase font-bold text-xl border-b-2 mb-6"},[e("h1",null,"Acta de Notas Periodo Academico")],-1),H=["value"],K={key:0,class:"py-6"},W={class:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8"},ee={class:"flex items-center justify-center","aria-label":"Progress"},te={role:"list",class:"flex items-center"},se=e("div",{class:"absolute inset-0 flex items-center","aria-hidden":"true"},[e("div",{class:"h-0.5 w-full bg-indigo-600"})],-1),oe={class:"relative w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full hover:bg-indigo-900"},re={class:"sr-only"},ae=e("div",{class:"absolute inset-0 flex items-center","aria-hidden":"true"},[e("div",{class:"h-0.5 w-full bg-gray-200"})],-1),ne={href:"#",class:"relative w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full","aria-current":"step"},ie=e("span",{class:"h-2.5 w-2.5 bg-indigo-600 rounded-full","aria-hidden":"true"},null,-1),le={class:"sr-only"},de=e("div",{class:"absolute inset-0 flex items-center","aria-hidden":"true"},[e("div",{class:"h-0.5 w-full bg-gray-200"})],-1),ce={href:"#",class:"group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400"},ue=e("span",{class:"h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300","aria-hidden":"true"},null,-1),me={class:"sr-only"},_e={key:0},fe={class:"min-w-0 flex-1 text-md"},pe=["for"],ge=e("br",null,null,-1),he={class:"ml-3 flex items-center h-5"},ve=["id","value"],be={class:"mt-6 flex"},xe={key:1},ye={class:"px-4 sm:px-6 lg:px-8"},we={class:"sm:flex sm:items-center"},ke={class:"sm:flex-auto"},Pe=e("h1",{class:"text-2xl font-semibold text-gray-800"}," ALUMNOS ",-1),Ce={class:"flex flex-row items-center w-full text-xl my-4"},Be={as:"span",class:"font-medium text-gray-900 w-9/12"},Ee=b(" Curso: "),$e={as:"span",class:"font-medium text-gray-900 w-3/12"},je=b(" Grupo: "),Ae={class:"flex flex-row items-center w-full text-lg my-4"},Se={key:0,as:"span",class:"font-medium text-gray-900 w-4/12"},De=b(" Estado: "),Ne=e("span",{class:"text-blue-500"},"Sin Publicar",-1),Ve=[De,Ne],Me={key:1,as:"span",class:"font-medium text-gray-900 w-4/12"},Ue=b(" Estado: "),ze=e("span",{class:"text-green-500"},"Publicado",-1),Ge=[Ue,ze],Ie={key:2,as:"span",class:"font-medium text-gray-900 w-4/12"},qe=b(" Estado: "),Fe=e("span",{class:"text-red-500"},"Acta Cerrada",-1),Re=[qe,Fe],Te={class:"sm:flex sm:items-center justify-end"},Xe={class:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none"},Le={class:"mt-4 flex flex-col"},Ze={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},Je={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},Oe={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},Qe={class:"min-w-full divide-y divide-gray-300"},Ye=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6 text-center"}," N\xB0 "),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"}," Alumno "),e("th",{scope:"col",class:"px-3 py-3.5 text-sm font-semibold text-gray-900 text-center"}," N\xB0 Documento "),e("th",{scope:"col",class:"px-3 py-3.5 text-sm font-semibold text-gray-900 text-center"}," Promedio Final ")])],-1),He={class:"divide-y divide-gray-200 bg-white"},Ke={class:"whitespace-nowrap px-3 py-2 text-sm text-gray-500 text-center"},We={class:"text-gray-900"},et={class:"whitespace-nowrap py-2 pl-4 pr-3 text-sm sm:pl-6"},tt={class:"flex items-center"},st={class:"h-10 w-10 flex-shrink-0"},ot=["src"],rt={class:"ml-4"},at={class:"font-medium text-gray-900"},nt={class:"whitespace-nowrap px-3 py-2 text-sm text-gray-500 text-center"},it={class:"text-gray-900"},lt={class:"whitespace-nowrap px-3 py-2 text-sm text-gray-700 text-center"},dt=["onUpdate:modelValue","step","disabled"],ct={class:"mt-6 flex"},ut={key:1,class:"py-6"},ht=z({setup(mt){const k=G(),n=L(),y=I(),A=h(!1),_=h(0),d=h(0),P=h(""),C=h(""),p=h(!1),u=h(!1),g=h([{id:"01",name:"Cursos",description:"",href:"",status:"current"},{id:"02",name:"Notas",description:"",href:"notas",status:"upcoming"}]);q(async()=>{await y.get_periodo_active(),await y.get_periodos(),d.value=y.periodo.id;const{status:a}=await n.get_cursos_by_docente(d.value);a!==200?l("Error al obtener los cursos",{type:"danger",position:"top-right",hideProgressBar:!0}):A.value=!0});const S=async a=>{if(a===0){l("Error, Debe seleccionar un  curso para continuar",{type:"danger",hideProgressBar:!0});return}g.value[0].status="complete",g.value[1].status="current",C.value=n.cursos_docente.filter(t=>t.id==a)[0].grupo,P.value=n.cursos_docente.filter(t=>t.id==a)[0].curso_nombre;const{data:s}=await n.get_estado_notas_curso_by_id(a,d.value);p.value=s.is_publicado,u.value=s.is_cerrado;const{status:i}=await n.get_alumnos_by_curso(a);i!==200&&l("Error al obtener Datos",{type:"danger",hideProgressBar:!0})},D=()=>{g.value[1].status="upcoming",g.value[0].status="current",n.alumnos_curso=[],_.value=0,C.value="",P.value=""},$=async(a,s)=>{if(a===0){l("Error, Debe seleccionar un  curso para continuar",{type:"danger",hideProgressBar:!0});return}const{status:i}=await n.save_notas(a,d.value,s);i!==200?l("Error al guardar notas,verifique que todos los campos sean correctos",{type:"danger",hideProgressBar:!0}):l("Notas guardadas correctamente",{type:"success",hideProgressBar:!0})},N=async a=>{for(let i=0;i<n.alumnos_curso.length;i++)if(n.alumnos_curso[i].promedio_final===null){l("Error, Debe ingresar notas para todos los alumnos",{type:"danger",hideProgressBar:!0});return}if(a===0){l("Error, Debe seleccionar un  curso para continuar",{type:"danger",hideProgressBar:!0});return}const{status:s}=await n.publicar_notas(a,d.value);if(s!==200)l("Error al publicar notas",{type:"danger",hideProgressBar:!0});else{l("Notas publicadas correctamente",{type:"success",hideProgressBar:!0});const{data:i}=await n.get_estado_notas_curso_by_id(a,d.value);p.value=i.is_publicado,u.value=i.is_cerrado}},V=async a=>{if(a===0){l("Error, Debe seleccionar un  curso para continuar",{type:"danger",hideProgressBar:!0});return}const{status:s}=await n.cerrar_acta(a,d.value);if(s!==200)l("Error al cerrar acta",{type:"danger",hideProgressBar:!0});else{l("Acta cerrada correctamente",{type:"success",hideProgressBar:!0});const{data:i}=await n.get_estado_notas_curso_by_id(a,d.value);p.value=i.is_publicado,u.value=i.is_cerrado}},M=async a=>{const{status:s,data:i}=await k.get_reporte_actanotas_pdf(a,d.value);s!==200&&l("Error al imprimir acta",{type:"danger",hideProgressBar:!0});const t=document.createElement("a");t.target="_blank",t.href=k.get_media_url(i.path),t.click()};return(a,s)=>{const i=U;return o(),r("div",J,[e("main",O,[e("div",Q,[Y,E(e("select",{"onUpdate:modelValue":s[0]||(s[0]=t=>d.value=t),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",onChange:s[1]||(s[1]=t=>f(n).get_cursos_by_docente(d.value))},[(o(!0),r(v,null,w(f(y).periodos,t=>(o(),r("option",{key:t.id,value:t.id},c(t.nombre),9,H))),128))],544),[[F,d.value]])]),f(n).cursos_docente.length>0?(o(),r("div",K,[e("div",W,[e("nav",ee,[e("ol",te,[(o(!0),r(v,null,w(g.value,(t,x)=>(o(),r("li",{key:t.name,class:R(["relative",[x!==g.value.length-1?"pr-8 sm:pr-20":""]])},[t.status==="complete"?(o(),r(v,{key:0},[se,e("a",oe,[j(f(Z),{class:"w-5 h-5 text-white","aria-hidden":"true"}),e("span",re,c(t.name),1)])],64)):t.status==="current"?(o(),r(v,{key:1},[ae,e("a",ne,[ie,e("span",le,c(t.name),1)])],64)):(o(),r(v,{key:2},[de,e("a",ce,[ue,e("span",me,c(t.name),1)])],64))],2))),128))])]),g.value[0].status==="current"?(o(),r("div",_e,[(o(!0),r(v,null,w(f(n).cursos_docente,(t,x)=>(o(),r("div",{key:x,class:"relative flex items-start py-4 border rounded-lg px-4 my-2"},[e("div",fe,[e("label",{for:`check-${t.id}`,class:"font-medium text-gray-700 w-full"},[e("b",null,[b(c(t.curso_nombre)+" ("+c(t.grupo)+") ",1),ge,b(c(t.programa_nombre),1)])],8,pe)]),e("div",he,[E(e("input",{id:`-${t.id}`,"onUpdate:modelValue":s[2]||(s[2]=B=>_.value=B),type:"radio",name:"radio",value:`${t.id}`,"aria-describedby":"comments-description",class:"focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"},null,8,ve),[[T,_.value]])])]))),128)),e("div",be,[e("button",{class:"mx-auto flex-shrink-0 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:s[3]||(s[3]=t=>S(_.value))}," Continuar ")])])):m("",!0),g.value[1].status==="current"?(o(),r("div",xe,[e("div",ye,[e("div",we,[e("div",ke,[Pe,e("div",Ce,[e("p",Be,[Ee,e("b",null,c(P.value),1)]),e("p",$e,[je,e("b",null,c(C.value),1)])]),e("div",Ae,[p.value===!1&&u.value===!1?(o(),r("p",Se,Ve)):m("",!0),p.value===!0&&u.value===!1?(o(),r("p",Me,Ge)):m("",!0),p.value===!0&&u.value===!0?(o(),r("p",Ie,Re)):m("",!0)])])]),e("div",Te,[e("div",Xe,[u.value===!1?(o(),r("button",{key:0,class:"mx-2 inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto",onClick:s[4]||(s[4]=t=>$(_.value,f(n).alumnos_curso))}," Guardar ")):m("",!0),p.value===!1?(o(),r("button",{key:1,class:"mx-2 inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto",onClick:s[5]||(s[5]=t=>N(_.value))}," Publicar ")):m("",!0),p.value===!0&&u.value===!1?(o(),r("button",{key:2,class:"mx-2 inline-flex items-center justify-center rounded-md border border-transparent bg-yellow-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:w-auto",onClick:s[6]||(s[6]=t=>V(_.value))}," Cerrar Acta ")):m("",!0),u.value===!0?(o(),r("button",{key:3,type:"button",class:"mx-2 inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto",onClick:s[7]||(s[7]=t=>M(_.value))}," Imprimir Acta ")):m("",!0),e("button",{type:"button",class:"mx-2 inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto",onClick:s[8]||(s[8]=t=>D())}," Atras ")])]),e("div",Le,[e("div",Ze,[e("div",Je,[e("div",Oe,[e("table",Qe,[Ye,e("tbody",He,[(o(!0),r(v,null,w(f(n).alumnos_curso,(t,x)=>(o(),r("tr",{key:x},[e("td",Ke,[e("div",We,c(x+1),1)]),e("td",et,[e("div",tt,[e("div",st,[e("img",{class:"h-8 w-8 rounded-full",src:t.foto?f(k).get_media_url(t.foto):"https://th.bing.com/th/id/R.e62421c9ba5aeb764163aaccd64a9583?rik=DzXjlnhTgV5CvA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_210318.png&ehk=952QCsChZS0znBch2iju8Vc%2fS2aIXvqX%2f0zrwkjJ3GA%3d&risl=&pid=ImgRaw&r=0",alt:""},null,8,ot)]),e("div",rt,[e("div",at,c(`${t.apellido_paterno} ${t.apellido_materno}, ${t.nombres}`),1)])])]),e("td",nt,[e("div",it,c(t.numero_documento),1)]),e("td",lt,[E(e("input",{"onUpdate:modelValue":B=>t.promedio_final=B,type:"text",max:20,min:0,step:.01,disabled:u.value,class:"focus:ring-blue-500 h-6 w-4/12 border-gray-700 rounded"},null,8,dt),[[X,t.promedio_final]])])]))),128))])])])])])])]),e("div",ct,[u.value===!1?(o(),r("button",{key:0,class:"mx-auto flex-shrink-0 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",onClick:s[9]||(s[9]=t=>$(_.value,f(n).alumnos_curso))}," Guardar ")):m("",!0)])])):m("",!0)])])):(o(),r("div",ut,[j(i,{message:"El Docente no tiene Cursos activos en este  periodo"})]))])])}}});export{ht as default};
