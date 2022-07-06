import{d as i,j as l,x as r,l as _,b as g,o as m,e as c,u as t,f as s,h as d,q as p}from"./index.be19ff7d.js";import{u as x}from"./docente.79323787.js";const h={class:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8"},f={key:0},u={class:"divide-y divide-gray-200"},y=s("div",{class:"space-y-1"},[s("h3",{class:"text-lg leading-6 font-medium text-gray-900"}," Perfil del Estudiante "),s("p",{class:"max-w-2xl text-sm text-gray-500"}," Informaci\xF3n personal del estudiante ")],-1),v={class:"mt-6"},w={class:"divide-y divide-gray-200"},b={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},S=s("dt",{class:"text-sm font-medium text-gray-500"}," Name ",-1),k={class:"mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"},C={class:"flex-grow"},j={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5"},z=s("dt",{class:"text-sm font-medium text-gray-500"}," Photo ",-1),D={class:"mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"},I={class:"flex-grow"},V=["src"],X={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5"},A=s("dt",{class:"text-sm font-medium text-gray-500"}," Email ",-1),B={class:"mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"},E={class:"flex-grow"},P={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200"},N=s("dt",{class:"text-sm font-medium text-gray-500"}," Programa de Estudios ",-1),R={class:"mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"},q={class:"flex-grow"},$={key:1},F={class:"divide-y divide-gray-200"},G=s("div",{class:"space-y-1"},[s("h3",{class:"text-lg leading-6 font-medium text-gray-900"}," Perfil del Docente "),s("p",{class:"max-w-2xl text-sm text-gray-500"}," Informaci\xF3n personal del Docente ")],-1),J={class:"mt-6"},Q={class:"divide-y divide-gray-200"},T={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},U=s("dt",{class:"text-sm font-medium text-gray-500"}," Nombres ",-1),Z={class:"mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"},M={class:"flex-grow"},H={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5"},K=s("dt",{class:"text-sm font-medium text-gray-500"}," Photo ",-1),L={class:"mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"},O={class:"flex-grow"},W=["src"],Y={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5"},ss=s("dt",{class:"text-sm font-medium text-gray-500"}," Email ",-1),ts={class:"mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"},es={class:"flex-grow"},os={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200"},as=s("dt",{class:"text-sm font-medium text-gray-500"}," Celular ",-1),ds={class:"mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"},ms={class:"flex-grow"},_s=i({setup(cs){const o=l(),a=r(),n=_(),e=x();return g(async()=>{await a.get_user_data_by_token(),a.groups[0].name==="alumno"?await o.get_alumno(a.persona_id):a.groups[0].name==="docente"&&await e.get_docente_by_persona_id()}),(ns,is)=>(m(),c("div",h,[t(a).groups[0].name==="alumno"?(m(),c("div",f,[s("div",u,[y,s("div",v,[s("dl",w,[s("div",b,[S,s("dd",k,[s("span",C,d(t(o).get_alumno_full_name),1)])]),s("div",j,[z,s("dd",D,[s("span",I,[s("img",{class:"h-8 w-8 rounded-full",src:t(o).alumno.foto?t(n).get_media_url(t(o).alumno.foto):"https://th.bing.com/th/id/R.e62421c9ba5aeb764163aaccd64a9583?rik=DzXjlnhTgV5CvA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_210318.png&ehk=952QCsChZS0znBch2iju8Vc%2fS2aIXvqX%2f0zrwkjJ3GA%3d&risl=&pid=ImgRaw&r=0",alt:""},null,8,V)])])]),s("div",X,[A,s("dd",B,[s("span",E,d(t(o).alumno.correo),1)])]),s("div",P,[N,s("dd",R,[s("span",q,d(t(o).alumno.programa_nombre),1)])])])])])])):t(a).groups[0].name==="docente"?(m(),c("div",$,[s("div",F,[G,s("div",J,[s("dl",Q,[s("div",T,[U,s("dd",Z,[s("span",M,d(`${t(e).docente.nombres} ${t(e).docente.apellido_paterno} ${t(e).docente.apellido_materno}`),1)])]),s("div",H,[K,s("dd",L,[s("span",O,[s("img",{class:"h-8 w-8 rounded-full",src:t(e).docente.foto?t(n).get_media_url(t(e).docente.foto):"https://th.bing.com/th/id/R.e62421c9ba5aeb764163aaccd64a9583?rik=DzXjlnhTgV5CvA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_210318.png&ehk=952QCsChZS0znBch2iju8Vc%2fS2aIXvqX%2f0zrwkjJ3GA%3d&risl=&pid=ImgRaw&r=0",alt:""},null,8,W)])])]),s("div",Y,[ss,s("dd",ts,[s("span",es,d(t(e).docente.correo),1)])]),s("div",os,[as,s("dd",ds,[s("span",ms,d(t(e).docente.celular),1)])])])])])])):p("",!0)]))}});export{_s as default};
