var te=Object.defineProperty,ae=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var G=(e,t,a)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))I.call(t,a)&&G(e,a,t[a]);if(E)for(var a of E(t))L.call(t,a)&&G(e,a,t[a]);return e},C=(e,t)=>ae(e,se(t));var T=(e,t)=>{var a={};for(var s in e)I.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(e!=null&&E)for(var s of E(e))t.indexOf(s)<0&&L.call(e,s)&&(a[s]=e[s]);return a};import{q as U,s as v,b as O,d as $,v as P,f as K,x as q,h as re,y as j,z as H,P as J,A as S,B as oe,C as ue,D as le,E as D,G as ie,O as ne,H as ce,F as de,R as pe,S as me,I as y,J as N,K as F,L as x,N as V,o as ve,g as ge,l as B,m as _e,M as fe,a as be,Q as R}from"./index.367560b1.js";function M(e={},t=null,a=[]){for(let[s,u]of Object.entries(e))z(a,W(t,s),u);return a}function W(e,t){return e?e+"["+t+"]":t}function z(e,t,a){if(Array.isArray(a))for(let[s,u]of a.entries())z(e,W(t,s.toString()),u);else a instanceof Date?e.push([t,a.toISOString()]):typeof a=="boolean"?e.push([t,a?"1":"0"]):typeof a=="string"?e.push([t,a]):typeof a=="number"?e.push([t,`${a}`]):a==null?e.push([t,""]):M(a,t,e)}function he(e){var t;let a=(t=e==null?void 0:e.form)!=null?t:e.closest("form");if(a){for(let s of a.elements)if(s.tagName==="INPUT"&&s.type==="submit"||s.tagName==="BUTTON"&&s.type==="submit"||s.nodeName==="INPUT"&&s.type==="image"){s.click();return}}}let Q=Symbol("LabelContext");function Y(){let e=H(Q,null);if(e===null){let t=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Y),t}return e}function Z({slot:e={},name:t="Label",props:a={}}={}){let s=O([]);function u(i){return s.value.push(i),()=>{let l=s.value.indexOf(i);l!==-1&&s.value.splice(l,1)}}return U(Q,{register:u,slot:e,name:t,props:a}),v(()=>s.value.length>0?s.value.join(" "):void 0)}let ye=$({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1}},setup(e,{slots:t,attrs:a}){let s=Y(),u=`headlessui-label-${P()}`;return K(()=>q(s.register(u))),()=>{let{name:i="Label",slot:l={},props:k={}}=s,m=e,{passive:_}=m,b=T(m,["passive"]),p=C(f({},Object.entries(k).reduce((r,[n,o])=>Object.assign(r,{[n]:re(o)}),{})),{id:u}),h=f(f({},b),p);return _&&delete h.onClick,j({props:h,slot:l,attrs:a,slots:t,name:i})}}}),X=Symbol("RadioGroupContext");function ee(e){let t=H(X,null);if(t===null){let a=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,ee),a}return t}let $e=$({name:"RadioGroup",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"div"},disabled:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean]},name:{type:String,optional:!0}},inheritAttrs:!1,setup(e,{emit:t,attrs:a,slots:s,expose:u}){let i=O(null),l=O([]),k=Z({name:"RadioGroupLabel"}),_=J({name:"RadioGroupDescription"});u({el:i,$el:i});let b=v(()=>e.modelValue),p={options:l,value:b,disabled:v(()=>e.disabled),firstOption:v(()=>l.value.find(r=>!r.propsRef.disabled)),containsCheckedOption:v(()=>l.value.some(r=>S(r.propsRef.value)===S(e.modelValue))),change(r){var n;if(e.disabled||b.value===r)return!1;let o=(n=l.value.find(c=>S(c.propsRef.value)===S(r)))==null?void 0:n.propsRef;return o!=null&&o.disabled?!1:(t("update:modelValue",r),!0)},registerOption(r){l.value.push(r),l.value=oe(l.value,n=>n.element)},unregisterOption(r){let n=l.value.findIndex(o=>o.id===r);n!==-1&&l.value.splice(n,1)}};U(X,p),ue({container:v(()=>le(i)),accept(r){return r.getAttribute("role")==="radio"?NodeFilter.FILTER_REJECT:r.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(r){r.setAttribute("role","none")}});function h(r){if(!i.value||!i.value.contains(r.target))return;let n=l.value.filter(o=>o.propsRef.disabled===!1).map(o=>o.element);switch(r.key){case y.Enter:he(r.currentTarget);break;case y.ArrowLeft:case y.ArrowUp:if(r.preventDefault(),r.stopPropagation(),F(n,x.Previous|x.WrapAround)===V.Success){let o=l.value.find(c=>{var d;return c.element===((d=N(i))==null?void 0:d.activeElement)});o&&p.change(o.propsRef.value)}break;case y.ArrowRight:case y.ArrowDown:if(r.preventDefault(),r.stopPropagation(),F(n,x.Next|x.WrapAround)===V.Success){let o=l.value.find(c=>{var d;return c.element===((d=N(c.element))==null?void 0:d.activeElement)});o&&p.change(o.propsRef.value)}break;case y.Space:{r.preventDefault(),r.stopPropagation();let o=l.value.find(c=>{var d;return c.element===((d=N(c.element))==null?void 0:d.activeElement)});o&&p.change(o.propsRef.value)}break}}let m=`headlessui-radiogroup-${P()}`;return()=>{let g=e,{modelValue:r,disabled:n,name:o}=g,c=T(g,["modelValue","disabled","name"]),d={ref:i,id:m,role:"radiogroup","aria-labelledby":k.value,"aria-describedby":_.value,onKeydown:h};return D(de,[...o!=null&&r!=null?M({[o]:r}).map(([w,A])=>D(ie,ne({features:ce.Hidden,key:w,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:w,value:A}))):[],j({props:f(f(f({},a),c),d),slot:{},attrs:a,slots:s,name:"RadioGroup"})])}}});var Re=(e=>(e[e.Empty=1]="Empty",e[e.Active=2]="Active",e))(Re||{});let Ae=$({name:"RadioGroupOption",props:{as:{type:[Object,String],default:"div"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(e,{attrs:t,slots:a,expose:s}){let u=ee("RadioGroupOption"),i=`headlessui-radiogroup-option-${P()}`,l=Z({name:"RadioGroupLabel"}),k=J({name:"RadioGroupDescription"}),_=O(null),b=v(()=>({value:e.value,disabled:e.disabled})),p=O(1);s({el:_,$el:_}),K(()=>u.registerOption({id:i,element:_,propsRef:b})),q(()=>u.unregisterOption(i));let h=v(()=>{var g;return((g=u.firstOption.value)==null?void 0:g.id)===i}),m=v(()=>u.disabled.value||e.disabled),r=v(()=>S(u.value.value)===S(e.value)),n=v(()=>m.value?-1:r.value||!u.containsCheckedOption.value&&h.value?0:-1);function o(){var g;!u.change(e.value)||(p.value|=2,(g=_.value)==null||g.focus())}function c(){p.value|=2}function d(){p.value&=-3}return()=>{let g=pe(e,["value","disabled"]),w={checked:r.value,disabled:m.value,active:Boolean(p.value&2)},A={id:i,ref:_,role:"radio","aria-checked":r.value?"true":"false","aria-labelledby":l.value,"aria-describedby":k.value,"aria-disabled":m.value?!0:void 0,tabIndex:n.value,onClick:m.value?void 0:o,onFocus:m.value?void 0:c,onBlur:m.value?void 0:d};return j({props:f(f({},g),A),slot:w,attrs:t,slots:a,name:"RadioGroupOption"})}}}),Te=ye,Ne=me;const Se={class:"bg-teal-50 border-l-4 border-teal-400 p-4"},ke={class:"flex"},Oe={class:"ml-3"},we={class:"text-sm text-teal-700"},Be=$({props:{message:{type:String,required:!1,default:"Ingrese su mensaje"}},setup(e){const t=e;return(a,s)=>(ve(),ge("div",Se,[B("div",ke,[B("div",Oe,[B("p",we,_e(t.message),1)])])]))}}),Pe=fe("programa",{state:()=>({cursos_list:[],curso_grupo_list:[],alumnoStore:be(),periodo:{}}),getters:{get_cursos_list:e=>e.cursos_list,get_cursos_ids:e=>e.cursos_list.map(t=>t.id).join(","),get_curso_grupo_list:e=>e.curso_grupo_list,get_cursos_with_grupos_checked_true:e=>e.curso_grupo_list.map(t=>{const a=t.grupos.find(u=>u.checked),s=a?a.id:0;return{expediente:e.alumnoStore.alumno.id,curso_grupo:s,periodo:1}})},actions:{async get_periodo_active(){try{const{status:e,data:t}=await R.get("core/get_periodo_active");return this.periodo=t,{status:e,data:t}}catch(e){return{error:e.message,status:e.status}}},async get_cursos_by_programa_id(e){try{const{status:t,data:a}=await R.get("academicos/get_cursos_by_programa_id",{params:{programa_id:e}});return this.cursos_list=a,{status:t,data:a}}catch(t){return{error:t.message,status:t.status}}},async get_cursos_grupos_by_cursos(){try{const{status:e,data:t}=await R.get("academicos/get_cursos_grupos_by_cursos",{params:{cursos:this.get_cursos_ids}});return this.curso_grupo_list=t,{status:e,data:t}}catch(e){return{error:e.message,status:e.status}}},async save_cursos_grupos(){try{const{status:e,data:t}=await R.post("academicos/bulks/matricula_bulk/",this.get_cursos_with_grupos_checked_true);return{status:e,data:t}}catch(e){return{error:e.message,status:e.status}}},async get_matricula_by_expediente_active(){try{const{status:e,data:t}=await R.get("academicos/get_matricula_by_expediente_active",{params:{expediente:this.alumnoStore.alumno.id}});return{status:e,data:t}}catch(e){return{error:e.message,status:e.status}}},async get_horarios_matriculados_by_expediente(){try{const{status:e,data:t}=await R.get("academicos/get_horarios_matriculados_by_expediente",{params:{expediente:this.alumnoStore.alumno.id}});return this.curso_grupo_list=t,{status:e,data:t}}catch(e){return{error:e.message,status:e.status}}}}});export{Te as R,Be as _,Ae as b,Ne as g,Pe as u,$e as v};
