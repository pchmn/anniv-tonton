import{j as e,a as p,J as k,r,p as C,h,u as M,e as m,A as I,C as L,G as g,T as v,S as x,B as y,I as O,Y as B,i as N,R,b as j,M as E,c as P,N as F}from"./vendor.e56473da.js";const D=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))u(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&u(a)}).observe(document,{childList:!0,subtree:!0});function c(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerpolicy&&(t.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?t.credentials="include":i.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(i){if(i.ep)return;i.ep=!0;const t=c(i);fetch(i.href,t)}};D();function T(){return e("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24",style:{height:"25px"},children:p("g",{fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{d:"M5 12h14"}),e("path",{d:"M5 12l6 6"}),e("path",{d:"M5 12l6-6"})]})})}function z({children:n,isSelected:s,onClick:c}){return e("div",{className:`ChecboxButton ${s&&"isSelected"}`,onClick:c,children:n})}const J=new k;function V(){const n=r.exports.useMemo(()=>C(),[]),s=r.exports.useMemo(()=>h(n,"activities","possibleActivities"),[n]),c=r.exports.useMemo(()=>h(n,"activities","activitiesSelected"),[n]),[u,i]=r.exports.useState([]),[t,a]=r.exports.useState([]),[b,f]=r.exports.useState(!1),S=M();r.exports.useEffect(()=>{const o=m(s,l=>{var d;i((d=l.data())==null?void 0:d.value)});return()=>o()},[s]),r.exports.useEffect(()=>{const o=m(c,l=>{var d;a((d=l.data())==null?void 0:d.value)});return()=>o()},[c]);const w=o=>{t.includes(o)?a(t.filter(l=>l!==o)):t.length<2&&a([...t,o])},A=async()=>{if(t.length<2)return S.showNotification({title:"OOOOOPS",message:"Il faut choisir deux activit\xE9s !",color:"red"});await B(c,{value:t}),J.addConfetti(),f(!0)};return e(I,{fixed:!0,styles:o=>({main:{backgroundColor:o.colorScheme==="dark"?o.colors.dark[8]:o.colors.gray[0],display:"flex",flexDirection:"column",paddingLeft:0}}),children:e(L,{style:{padding:20},children:b?p(g,{direction:"column",align:"center",children:[e(v,{order:2,children:"Leeeets go ! \u{1F680}"}),e(O,{radius:"md",src:"https://c.tenor.com/tvFWFDXRrmMAAAAd/blow-mind-mind-blown.gif"}),p(y,{variant:"outline",style:{marginTop:10},onClick:()=>f(!1),children:[e(T,{})," ",e(x,{w:"xs"})," Retour aux choix"]})]}):p(g,{direction:"column",grow:!0,children:[e(v,{order:2,children:"Wesh cousin, choisis 2 activit\xE9s qu'on ira faire avec toi"}),u.map(o=>e(z,{isSelected:t.includes(o),onClick:()=>w(o),children:o},o)),e(x,{}),e(y,{size:"lg",onClick:A,children:"Valider"})]})})})}const W={apiKey:"AIzaSyCMIk653Cbvxy8sprAFFSEnR0VyBBJ3lps",authDomain:"anniv-tonton.firebaseapp.com",projectId:"anniv-tonton",storageBucket:"anniv-tonton.appspot.com",messagingSenderId:"118446865248",appId:"1:118446865248:web:68c8fc0fd594be536bbc05"};N(W);R.render(e(j.StrictMode,{children:e(E,{theme:{colorScheme:"dark",primaryColor:"cyan"},children:e(P,{children:e(F,{children:e(V,{})})})})}),document.getElementById("root"));
//# sourceMappingURL=index.7d5910c5.js.map