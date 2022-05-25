import{o as t,c as P,j as m,d as F,b as k,T as G,U as D,k as l,f as o,h as e,F as u,g as b,n as _,i as r,l as B,w as x,m as N,t as y,u as I,a as U,e as A,r as L,Q as T}from"./index.0418265e.js";import{u as V,R as q,g as M,b as Q,v as J}from"./programa.5b587cb5.js";function K($,p){return t(),P("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[m("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})])}const O={key:0,class:"flex flex-col"},W={class:"flex-1"},X={class:"py-6"},Y={class:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8"},Z={class:"flex items-center justify-center","aria-label":"Progress"},ee={role:"list",class:"flex items-center"},se=e("div",{class:"absolute inset-0 flex items-center","aria-hidden":"true"},[e("div",{class:"h-0.5 w-full bg-indigo-600"})],-1),te={class:"relative w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full hover:bg-indigo-900"},oe={class:"sr-only"},re=e("div",{class:"absolute inset-0 flex items-center","aria-hidden":"true"},[e("div",{class:"h-0.5 w-full bg-gray-200"})],-1),ae={href:"#",class:"relative w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full","aria-current":"step"},ne=e("span",{class:"h-2.5 w-2.5 bg-indigo-600 rounded-full","aria-hidden":"true"},null,-1),ie={class:"sr-only"},le=e("div",{class:"absolute inset-0 flex items-center","aria-hidden":"true"},[e("div",{class:"h-0.5 w-full bg-gray-200"})],-1),ce={href:"#",class:"group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400"},de=e("span",{class:"h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300","aria-hidden":"true"},null,-1),ue={class:"sr-only"},me={key:0},_e={class:"divide-y divide-gray-200"},he={class:"min-w-0 flex-1 text-sm"},fe=["for"],ge={id:"comments-description",class:"text-gray-500 flex gap-2"},xe={class:"ml-3 flex items-center h-5"},pe=["id"],ve={key:1,class:"flex flex-col space-y-4 mt-10"},be={class:"text-lg leading-6 font-medium text-gray-900 uppercase"},ye={class:"space-y-4"},ke={class:"relative block bg-white border rounded-lg shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none"},we={class:"flex items-center"},Ce={class:"text-sm flex flex-col"},Ee=N(" Grupo: "),Se=N(" Docente: "),Be={class:"block sm:inline"},$e={class:"text-xs"},je={key:0},Me=e("span",{class:"text-red-500"},[e("b",null," No hay cupo disponible ")],-1),Pe=[Me],Fe={key:1},De={class:"font-medium text-gray-900"},Ne={class:"ml-1 text-gray-500 sm:ml-0"},Ve=F({emits:["finishMatricula"],setup($,{emit:p}){const i=k([{id:"01",name:"Iniciar",description:"",href:"",status:"complete"},{id:"02",name:"Cursos",description:"",href:"cursos",status:"current"},{id:"03",name:"Horarios",description:"",href:"horarios",status:"upcoming"}]),c=V(),f=G(),w=D(),h=async()=>{i.value[1].status="complete",i.value[2].status="current";const{status:n}=await c.get_cursos_grupos_by_cursos();n!==200&&y("Error al obtener los cursos",{type:"danger",hideProgressBar:!0})},E=(n,d)=>{if(d.numero_registros>=d.limite_registros){y("El grupo seleccionado ya est\xE1 lleno",{type:"danger",hideProgressBar:!0});return}n.grupos.forEach(s=>{s.checked=!1}),d.checked=!d.checked},v=k(!1),C=async()=>{if(v.value=!0,v.value)return;const{status:n}=await c.save_cursos_grupos();if(n!==201){y("Error al guardar los cursos",{type:"danger",hideProgressBar:!0});return}y("Matricula Completada Correctamente!",{type:"success",hideProgressBar:!0}),w.get_reporte_matricula_pdf(),p("finishMatricula",!0),f.push("/horarios"),v.value=!1};return(n,d)=>l(c).get_cursos_list.length>0?(t(),o("div",O,[e("main",W,[e("div",X,[e("div",Y,[e("nav",Z,[e("ol",ee,[(t(!0),o(u,null,b(i.value,(s,g)=>(t(),o("li",{key:s.name,class:_(["relative",[g!==i.value.length-1?"pr-8 sm:pr-20":""]])},[s.status==="complete"?(t(),o(u,{key:0},[se,e("a",te,[m(l(K),{class:"w-5 h-5 text-white","aria-hidden":"true"}),e("span",oe,r(s.name),1)])],64)):s.status==="current"?(t(),o(u,{key:1},[re,e("a",ae,[ne,e("span",ie,r(s.name),1)])],64)):(t(),o(u,{key:2},[le,e("a",ce,[de,e("span",ue,r(s.name),1)])],64))],2))),128))])]),i.value[1].status==="current"?(t(),o("div",me,[e("div",_e,[(t(!0),o(u,null,b(l(c).get_cursos_list,(s,g)=>(t(),o("div",{key:g,class:"relative flex items-start py-4"},[e("div",he,[e("label",{for:`check-${s.id}`,class:"font-medium text-gray-700 w-full"},[e("b",null,r(s.nombre)+" ("+r(s.codigo)+")",1)],8,fe),e("p",ge,[e("span",null,"Ciclo: "+r(s.ciclo),1),e("span",null,"Creditos: "+r(s.creditos),1)])]),e("div",xe,[e("input",{id:`check-${s.id}`,type:"checkbox",name:"check","aria-describedby":"comments-description",class:"focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"},null,8,pe)])]))),128))]),e("div",{class:"mt-6 flex"},[e("button",{class:"mx-auto flex-shrink-0 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:h}," Continuar matricula ")])])):B("",!0),i.value[2].status==="current"?(t(),o("div",ve,[e("div",{class:"mt-6 flex"},[e("button",{class:"mx-auto flex-shrink-0 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:C}," Guardar matricula ")]),(t(!0),o(u,null,b(l(c).curso_grupo_list,(s,g)=>(t(),o("div",{key:g},[e("h2",be,[e("b",null,r(s.curso_nombre),1)]),m(l(J),{class:"mt-2"},{default:x(()=>[e("div",ye,[(t(!0),o(u,null,b(s.grupos,(a,z)=>(t(),P(l(Q),{key:z,as:"template",value:a,class:_([a.checked?"bg-green-50 border-l-8 border-green-400":"",a.numero_registros>=a.limite_registros?"bg-red-50":""]),disabled:a.numero_registros>=a.limite_registros,onClick:j=>E(s,a)},{default:x(({checked:j,active:H})=>[e("div",ke,[e("div",we,[e("span",Ce,[m(l(q),{as:"span",class:"font-medium text-gray-900"},{default:x(()=>[Ee,e("b",null,r(a.grupo),1)]),_:2},1024),m(l(M),{as:"span",class:"text-gray-500"},{default:x(()=>[Se,e("span",Be,[e("b",null,r(a.docente),1)])]),_:2},1024)])]),e("div",$e,[(t(!0),o(u,null,b(a.horarios,(S,R)=>(t(),o("ul",{key:R},[e("li",null,r(S.dia)+" de "+r(S.hora_inicio)+" a "+r(S.hora_fin),1)]))),128))]),m(l(M),{as:"span",class:"mt-2 flex text-sm sm:mt-0 sm:flex-col sm:ml-4 sm:text-right"},{default:x(()=>[a.numero_registros>=a.limite_registros?(t(),o("div",je,Pe)):(t(),o("div",Fe,[e("span",De,r(a.numero_registros),1),e("span",Ne,"/"+r(a.limite_registros),1)]))]),_:2},1024),e("span",{class:_(["absolute -inset-px rounded-lg pointer-events-none",[H?"border":"border-2",j?"border-indigo-500":"border-transparent"]]),"aria-hidden":"true"},null,2)])]),_:2},1032,["value","class","disabled","onClick"]))),128))])]),_:2},1024)]))),128)),e("div",{class:"mt-6 flex"},[e("button",{class:"mx-auto flex-shrink-0 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:C}," Guardar matricula ")])])):B("",!0)])])])])):B("",!0)}}),ze=T('<div class="text-center"><svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"></path></svg><h2 class="mt-2 text-lg font-medium text-gray-900"> No ha iniciado matr\xEDcula </h2><p class="mt-1 text-sm text-gray-500"> Por favor haga clic en el bot\xF3n de abajo para iniciar la matr\xEDcula. </p></div>',1),He={class:"mt-6 flex w-full justify-center"},Re={class:"text-center"},Ge=e("h2",{class:"mt-2 text-lg font-medium text-gray-900"}," Estudiante ya realiz\xF3 matr\xEDcula ",-1),Ie=e("p",{class:"mt-1 text-sm text-gray-500"}," Para ver los horarios de clases, por favor haga clic en el bot\xF3n de abajo. ",-1),Ue=e("button",{class:"mx-auto mt-3 flex-shrink-0 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}," Ver Horario ",-1),Te=F({setup($){const p=V(),i=I(),c=U(),f=k(!1),w=k(!1),h=k(!1);A(async()=>{h.value=!1,await i.get_user_data_by_token(),await c.get_alumno(i.persona_id);const{data:n}=await p.get_matricula_by_expediente_active();h.value=n.length<=0,w.value=!0});const E=async()=>{if((await p.get_cursos_by_programa_id(c.alumno.programa_id)).status!==200){y("Error al obtener los cursos",{type:"danger",hideProgressBar:!0});return}f.value=!0},v=D(),C=()=>{v.get_reporte_matricula_pdf()};return(n,d)=>{const s=L("router-link");return t(),o("div",{class:_(w.value?"block":"hidden")},[e("div",{class:_(h.value?"block":"hidden")},[e("div",{class:_(["py-6",f.value?"hidden":"block"])},[e("div",{class:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8"},[e("div",null,[ze,e("div",{class:"mt-6 flex"},[e("button",{class:"mx-auto flex-shrink-0 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:E}," Iniciar matr\xEDcula ")])])])],2),m(Ve,{class:_(f.value?"block":"hidden"),onFinishMatricula:d[0]||(d[0]=g=>(h.value=!1,f.value=!1))},null,8,["class"])],2),e("div",{class:_(h.value?"hidden":"block")},[e("div",He,[e("div",Re,[Ge,Ie,e("button",{class:"mx-auto mt-3 flex-shrink-0 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",onClick:C}," Descargar Ficha de Matricula "),m(s,{to:"/horarios",class:"mx-2"},{default:x(()=>[Ue]),_:1})])])],2)],2)}}});export{Te as default};
