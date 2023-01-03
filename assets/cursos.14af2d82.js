import{_ as P}from"./alert.26109fd5.js";import{d as A,j as E,o,e as r,f as e,i as s,F as y,h as v,g as _,k as w,u as z,a as g,b as L,t as S,r as B,w as M,v as q,l as p,m as b,n as F,p as R}from"./index.74e150f2.js";import{u as D}from"./docente.b132e983.js";const U={class:"px-4 sm:px-6 lg:px-8"},X={class:"sm:flex sm:items-center"},I={class:"sm:flex-auto"},T=e("h1",{class:"text-2xl font-semibold text-gray-800"}," ALUMNOS ",-1),J={class:"flex flex-row items-center w-full text-xl my-4"},O={as:"span",class:"font-medium text-gray-900 w-10/12"},Q=w(" Curso: "),Z={as:"span",class:"font-medium text-gray-900 w-2/12"},H=w(" Grupo: "),K={class:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none"},W=e("button",{type:"button",class:"mx-2 inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"}," Exportar ",-1),Y={class:"mt-4 flex flex-col"},ee={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},te={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},se={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},oe={class:"min-w-full divide-y divide-gray-300"},re=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"}," N\xB0 "),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"}," Alumno "),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}," N\xB0 Documento "),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}," Correo "),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}," Celular ")])],-1),ne={class:"divide-y divide-gray-200 bg-white"},ae={class:"whitespace-nowrap px-3 py-2 text-sm text-gray-500"},le={class:"text-gray-900"},ie={class:"whitespace-nowrap py-2 pl-4 pr-3 text-sm sm:pl-6"},ce={class:"flex items-center"},de={class:"h-10 w-10 flex-shrink-0"},ue=["src"],pe={class:"ml-4"},_e={class:"font-medium text-gray-900"},me={class:"whitespace-nowrap px-3 py-2 text-sm text-gray-500"},ge={class:"text-gray-900"},xe={class:"whitespace-nowrap px-3 py-2 text-sm text-gray-500"},fe={class:"text-gray-900"},he={class:"whitespace-nowrap px-3 py-2 text-sm text-gray-500"},be={class:"text-gray-900"},ye=A({props:{nombrecurso:{type:String,required:!1,default:()=>""},grupocurso:{type:String,required:!1,default:()=>""}},emits:["atras"],setup(G,{emit:i}){const a=G,x=E(),c=D(),d=()=>{c.alumnos_curso=[],i("atras",!0)};return(k,m)=>(o(),r("div",U,[e("div",X,[e("div",I,[T,e("div",J,[e("p",O,[Q,e("b",null,s(a.nombrecurso),1)]),e("p",Z,[H,e("b",null,s(a.grupocurso),1)])])]),e("div",K,[W,e("button",{type:"button",class:"mx-2 inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto",onClick:m[0]||(m[0]=n=>d())}," Atras ")])]),e("div",Y,[e("div",ee,[e("div",te,[e("div",se,[e("table",oe,[re,e("tbody",ne,[(o(!0),r(y,null,v(_(c).alumnos_curso,(n,u)=>(o(),r("tr",{key:u},[e("td",ae,[e("div",le,s(u+1),1)]),e("td",ie,[e("div",ce,[e("div",de,[e("img",{class:"h-8 w-8 rounded-full",src:n.foto?_(x).get_media_url(n.foto):"https://th.bing.com/th/id/R.e62421c9ba5aeb764163aaccd64a9583?rik=DzXjlnhTgV5CvA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_210318.png&ehk=952QCsChZS0znBch2iju8Vc%2fS2aIXvqX%2f0zrwkjJ3GA%3d&risl=&pid=ImgRaw&r=0",alt:""},null,8,ue)]),e("div",pe,[e("div",_e,s(`${n.apellido_paterno} ${n.apellido_materno}, ${n.nombres}`),1)])])]),e("td",me,[e("div",ge,s(n.numero_documento),1)]),e("td",xe,[e("div",fe,s(n.correo),1)]),e("td",he,[e("div",be,s(n.celular),1)])]))),128))])])])])])])]))}}),ve={class:"flex flex-col space-y-4"},we=e("div",{class:"uppercase font-bold text-2xl border-b-2"},[e("h1",null,"Periodo Academico")],-1),ke=["value"],$e=e("div",{class:"uppercase font-bold text-2xl border-b-2"},[e("h1",null,"Cursos")],-1),Ce={key:0},Se={key:0},Be={class:"text-lg leading-6 font-medium text-gray-900 uppercase"},Ge={class:"space-y-4"},Re={class:"relative block bg-white border border-l-8 border-green-400 rounded-lg shadow-sm px-6 py-4 sm:flex sm:justify-between focus:outline-none"},Ae={class:"flex items-center"},De={class:"text-sm flex flex-col"},je=w(" Programa: "),Ne=w(" Grupo: "),Ve=e("span",{class:"block sm:inline underline hover:text-blue-800"},"Relaci\xF3n de estudiantes",-1),Pe={class:"text-xs"},Ee={key:1},qe=A({setup(G){const i=D(),a=z(),x=g(!1),c=g(0),d=g(!1),k=g(""),m=g("");L(async()=>{d.value=!1,await a.get_periodo_active(),await a.get_periodos();const{status:u}=await i.get_cursos_by_docente(a.periodo.id);u!==200?S("Error al obtener los cursos",{type:"danger",position:"top-right",hideProgressBar:!0}):(x.value=!0,c.value=a.periodo.id)});const n=async(u,l,f)=>{const{status:$,data:C}=await i.get_alumnos_by_curso(u);if(k.value=l,m.value=f,$!==200){S("Error al obtener los alumnos",{type:"danger",hideProgressBar:!0});return}S(`${C.length} alumnos obtenidos`,{type:"success",position:"top-right",hideProgressBar:!0}),d.value=!0};return(u,l)=>{const f=B("RadioGroupLabel"),$=B("RadioGroupDescription"),C=B("RadioGroup"),j=P;return o(),r("div",ve,[e("div",{class:R(d.value?"hidden":"block")},[we,M(e("select",{"onUpdate:modelValue":l[0]||(l[0]=t=>c.value=t),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",onChange:l[1]||(l[1]=t=>_(i).get_cursos_by_docente(c.value))},[(o(!0),r(y,null,v(_(a).periodos,t=>(o(),r("option",{key:t.id,value:t.id},s(t.nombre),9,ke))),128))],544),[[q,c.value]]),$e,x.value?(o(),r("div",Ce,[_(i).cursos_docente.length>0?(o(),r("div",Se,[(o(!0),r(y,null,v(_(i).cursos_docente,(t,N)=>(o(),r("div",{key:N,class:"my-2"},[e("h2",Be,[e("b",null,s(t.curso_nombre),1)]),p(C,{class:"mt-2"},{default:b(()=>[e("div",Ge,[e("div",Re,[e("span",Ae,[e("span",De,[p(f,{as:"span",class:"font-medium text-gray-900"},{default:b(()=>[je,e("b",null,s(t.programa_nombre),1)]),_:2},1024),p(f,{as:"span",class:"font-medium text-gray-900"},{default:b(()=>[Ne,e("b",null,s(t.grupo),1)]),_:2},1024),p($,{as:"span",class:"text-gray-500 cursor-pointer",onClick:h=>n(t.id,t.curso_nombre,t.grupo)},{default:b(()=>[Ve]),_:2},1032,["onClick"])])]),e("div",Pe,[(o(!0),r(y,null,v(t.horarios,(h,V)=>(o(),r("ul",{key:V},[e("li",null,s(h.dia)+" de "+s(h.hora_inicio)+" a "+s(h.hora_fin),1)]))),128))])])])]),_:2},1024)]))),128))])):(o(),r("div",Ee,[p(j,{message:"El Docente no tiene Cursos activos en este  periodo"})]))])):F("",!0)],2),p(ye,{class:R(d.value?"block":"hidden"),nombrecurso:k.value,grupocurso:m.value,onAtras:l[2]||(l[2]=t=>d.value=!1)},null,8,["class","nombrecurso","grupocurso"])])}}});export{qe as default};
