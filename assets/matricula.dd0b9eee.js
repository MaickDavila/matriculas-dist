import{_ as I}from"./alert.fbe6caa0.js";import{d as D,a as h,u as N,X as A,j as V,g as d,o as t,e as a,f as e,F as g,h as w,p,l as f,i,n as B,m as y,c as U,k as z,t as x,s as q,y as L,b as T,r as W,W as X}from"./index.b2d0c2dc.js";import{r as J}from"./CheckIcon.c7e204db.js";import{R as K,g as M,b as O,v as Q}from"./radio-group.fb5fa2ff.js";const Y={key:0,class:"flex flex-col"},Z={class:"flex-1"},ee={class:"py-6"},se={class:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8"},te={class:"flex items-center justify-center","aria-label":"Progress"},ae={role:"list",class:"flex items-center"},oe=e("div",{class:"absolute inset-0 flex items-center","aria-hidden":"true"},[e("div",{class:"h-0.5 w-full bg-indigo-600"})],-1),re={class:"relative w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full hover:bg-indigo-900"},ie={class:"sr-only"},ne=e("div",{class:"absolute inset-0 flex items-center","aria-hidden":"true"},[e("div",{class:"h-0.5 w-full bg-gray-200"})],-1),le={href:"#",class:"relative w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full","aria-current":"step"},ce=e("span",{class:"h-2.5 w-2.5 bg-indigo-600 rounded-full","aria-hidden":"true"},null,-1),de={class:"sr-only"},ue=e("div",{class:"absolute inset-0 flex items-center","aria-hidden":"true"},[e("div",{class:"h-0.5 w-full bg-gray-200"})],-1),_e={href:"#",class:"group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400"},me=e("span",{class:"h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300","aria-hidden":"true"},null,-1),he={class:"sr-only"},fe={key:0},ge={class:"divide-y divide-gray-200"},pe={class:"min-w-0 flex-1 text-sm"},xe=["for"],ve={id:"comments-description",class:"text-gray-500 flex gap-2"},be={class:"ml-3 flex items-center h-5"},ye=["id","onChange"],ke={key:1,class:"flex flex-col space-y-4 mt-10"},we={class:"text-lg leading-6 font-medium text-gray-900 uppercase"},Ce={class:"space-y-4"},$e={class:"relative block bg-white border rounded-lg shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none"},Ee={class:"flex items-center"},Be={class:"text-sm flex flex-col"},je=z(" Grupo: "),Pe=z(" Docente: "),Se={class:"block sm:inline"},Fe={class:"text-xs"},Me={key:0},De=e("span",{class:"text-red-500"},[e("b",null," No hay cupo disponible ")],-1),Ne=[De],Ve={key:1},ze={class:"font-medium text-gray-900"},He={class:"ml-1 text-gray-500 sm:ml-0"},Re=D({emits:["finishMatricula"],setup(H,{emit:u}){const _=h([{id:"01",name:"Iniciar",description:"",href:"",status:"complete"},{id:"02",name:"Cursos",description:"",href:"cursos",status:"current"},{id:"03",name:"Horarios",description:"",href:"horarios",status:"upcoming"}]),m=N(),b=A(),C=V(),n=h([]),v=h(!1),$=l=>{n.value.includes(l.id)?n.value=n.value.filter(r=>r!==l.id):n.value.push(l.id)},E=async()=>{if(n.value.length===0)x("Debe selecionar al menos un curso para continuar",{type:"danger",hideProgressBar:!0});else{_.value[1].status="complete",_.value[2].status="current";const{status:l}=await m.get_cursos_grupos_by_cursos(n.value);l!==200&&x("Error al obtener los cursos",{type:"danger",hideProgressBar:!0})}},j=(l,r)=>{if(r.numero_registros>=r.limite_registros){x("El grupo seleccionado ya est\xE1 lleno",{type:"danger",hideProgressBar:!0});return}l.grupos.forEach(s=>{s.checked=!1}),r.checked=!r.checked},k=async()=>{if(v.value)return;v.value=!0;const{status:l}=await m.save_cursos_grupos();if(l!==201){x("Error al guardar los cursos",{type:"danger",hideProgressBar:!0}),v.value=!1;return}x("Matricula Completada Correctamente!",{type:"success",hideProgressBar:!0}),C.get_reporte_matricula_pdf(),u("finishMatricula",!0),b.push("/horarios"),v.value=!0};return(l,r)=>d(m).get_cursos_list.length>0?(t(),a("div",Y,[e("main",Z,[e("div",ee,[e("div",se,[e("nav",te,[e("ol",ae,[(t(!0),a(g,null,w(_.value,(s,c)=>(t(),a("li",{key:s.name,class:p(["relative",[c!==_.value.length-1?"pr-8 sm:pr-20":""]])},[s.status==="complete"?(t(),a(g,{key:0},[oe,e("a",re,[f(d(J),{class:"w-5 h-5 text-white","aria-hidden":"true"}),e("span",ie,i(s.name),1)])],64)):s.status==="current"?(t(),a(g,{key:1},[ne,e("a",le,[ce,e("span",de,i(s.name),1)])],64)):(t(),a(g,{key:2},[ue,e("a",_e,[me,e("span",he,i(s.name),1)])],64))],2))),128))])]),_.value[1].status==="current"?(t(),a("div",fe,[e("div",ge,[(t(!0),a(g,null,w(d(m).get_cursos_list,(s,c)=>(t(),a("div",{key:c,class:"relative flex items-start py-4"},[e("div",pe,[e("label",{for:`check-${s.id}`,class:"font-medium text-gray-700 w-full"},[e("b",null,i(s.nombre)+" ("+i(s.codigo)+")",1)],8,xe),e("p",ve,[e("span",null,"Ciclo: "+i(s.ciclo),1),e("span",null,"Creditos: "+i(s.creditos),1)])]),e("div",be,[e("input",{id:`check-${s.id}`,type:"checkbox",name:"check","aria-describedby":"comments-description",class:"focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded",onChange:o=>$(s)},null,40,ye)])]))),128))]),e("div",{class:"mt-6 flex"},[e("button",{class:"mx-auto flex-shrink-0 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:E}," Continuar matricula ")])])):B("",!0),_.value[2].status==="current"?(t(),a("div",ke,[e("div",{class:"mt-6 flex"},[e("button",{class:"mx-auto flex-shrink-0 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:k}," Guardar matricula ")]),(t(!0),a(g,null,w(d(m).curso_grupo_list,(s,c)=>(t(),a("div",{key:c},[e("h2",we,[e("b",null,i(s.curso_nombre),1)]),f(d(Q),{class:"mt-2"},{default:y(()=>[e("div",Ce,[(t(!0),a(g,null,w(s.grupos,(o,S)=>(t(),U(d(O),{key:S,as:"template",value:o,class:p([o.checked?"bg-green-50 border-l-8 border-green-400":"",o.numero_registros>=o.limite_registros?"bg-red-50":""]),disabled:o.numero_registros>=o.limite_registros,onClick:F=>j(s,o)},{default:y(({checked:F,active:R})=>[e("div",$e,[e("div",Ee,[e("span",Be,[f(d(K),{as:"span",class:"font-medium text-gray-900"},{default:y(()=>[je,e("b",null,i(o.grupo),1)]),_:2},1024),f(d(M),{as:"span",class:"text-gray-500"},{default:y(()=>[Pe,e("span",Se,[e("b",null,i(o.docente),1)])]),_:2},1024)])]),e("div",Fe,[(t(!0),a(g,null,w(o.horarios,(P,G)=>(t(),a("ul",{key:G},[e("li",null,i(P.dia)+" de "+i(P.hora_inicio)+" a "+i(P.hora_fin),1)]))),128))]),f(d(M),{as:"span",class:"mt-2 flex text-sm sm:mt-0 sm:flex-col sm:ml-4 sm:text-right"},{default:y(()=>[o.numero_registros>=o.limite_registros?(t(),a("div",Me,Ne)):(t(),a("div",Ve,[e("span",ze,i(o.numero_registros),1),e("span",He,"/"+i(o.limite_registros),1)]))]),_:2},1024),e("span",{class:p(["absolute -inset-px rounded-lg pointer-events-none",[R?"border":"border-2",F?"border-indigo-500":"border-transparent"]]),"aria-hidden":"true"},null,2)])]),_:2},1032,["value","class","disabled","onClick"]))),128))])]),_:2},1024)]))),128)),e("div",{class:"mt-6 flex"},[e("button",{class:"mx-auto flex-shrink-0 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:k}," Guardar matricula ")])])):B("",!0)])])])])):B("",!0)}}),Ge={class:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8"},Ie={key:0},Ae=X('<div class="text-center"><svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"></path></svg><h2 class="mt-2 text-lg font-medium text-gray-900"> No ha iniciado matr\xEDcula </h2><p class="mt-1 text-sm text-gray-500"> Por favor haga clic en el bot\xF3n de abajo para iniciar la matr\xEDcula. </p></div>',1),Ue={key:1},qe={class:"mt-6 flex w-full justify-center"},Le={class:"text-center"},Te=e("h2",{class:"mt-2 text-lg font-medium text-gray-900"}," Estudiante ya realiz\xF3 matr\xEDcula ",-1),We=e("p",{class:"mt-1 text-sm text-gray-500"}," Para ver los horarios de clases, por favor haga clic en el bot\xF3n de abajo. ",-1),Xe=e("button",{class:"mx-auto mt-3 flex-shrink-0 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}," Ver Horario ",-1),Je={key:1},Ze=D({setup(H){const u=N(),_=q(),m=L(),b=h(!1),C=h(!1),n=h(!1),v=h(!0),$=h(!1),E=h("");T(async()=>{if(n.value=!1,await u.get_periodo_active(),!u.periodo.is_active_matricula){x("No se puede matricular, no hay periodo activo",{type:"info",position:"top-right",hideProgressBar:!0}),n.value=!1,v.value=!1;return}await _.get_user_data_by_token(),await m.get_alumno(_.persona_id);const{data:r}=await u.get_matricula_by_expediente_active();n.value=r.length<=0,C.value=!0,u.get_horarios_matriculados_by_expediente()});const j=async()=>{const r=await u.get_cursos_by_programa_id(m.alumno.programa_id,m.alumno.id);if(r.status!==200){x("Error al obtener los cursos",{type:"danger",hideProgressBar:!0});return}u.cursos_list.length>0?b.value=!0:($.value=!0,E.value=r.data.mensaje)},k=V(),l=async()=>{const{status:r,data:s}=await k.get_reporte_matricula_pdf();if(r!==200){x("Error al obtener el reporte",{type:"danger",hideProgressBar:!0});return}const c=document.createElement("a");c.target="_blank",c.href=k.get_media_url(s.path),c.click()};return(r,s)=>{const c=I,o=W("router-link");return v.value?(t(),a("div",{key:0,class:p(C.value?"block":"hidden")},[e("div",{class:p(n.value?"block":"hidden")},[e("div",{class:p(["py-6",b.value?"hidden":"block"])},[e("div",Ge,[$.value===!1?(t(),a("div",Ie,[Ae,e("div",{class:"mt-6 flex"},[e("button",{class:"mx-auto flex-shrink-0 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:j}," Iniciar matr\xEDcula ")])])):(t(),a("div",Ue,[f(c,{message:E.value},null,8,["message"])]))])],2),f(Re,{class:p(b.value?"block":"hidden"),onFinishMatricula:s[0]||(s[0]=S=>(n.value=!1,b.value=!1))},null,8,["class"])],2),e("div",{class:p(n.value?"hidden":"block")},[e("div",qe,[e("div",Le,[Te,We,d(u).curso_grupo_list.length>0?(t(),a("button",{key:0,class:"mx-auto mt-3 flex-shrink-0 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",onClick:l}," Descargar Ficha de Matricula ")):B("",!0),f(o,{to:"/horarios",class:"mx-2"},{default:y(()=>[Xe]),_:1})])])],2)],2)):(t(),a("div",Je,[f(c,{message:"El periodo de matriculas ya finaliz\xF3!"})]))}}});export{Ze as default};
