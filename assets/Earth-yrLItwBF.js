import{j as a,C as e,r as s,L as t,O as o,P as n}from"./index-BKaHjhl9.js";import{u as l}from"./useGLTF-CNa9nTwO.js";const i=()=>{const r=l("./earth.gltf");return a.jsx("primitive",{object:r.scene,scale:2.5,"position-y":0,"rotation-y":0})},p=()=>a.jsx(e,{shadows:!0,frameloop:"demand",dpr:[1,2],gl:{preserveDrawingBuffer:!0},camera:{fov:45,near:.1,far:200,position:[-4,3,6]},children:a.jsxs(s.Suspense,{fallback:a.jsx(t,{}),children:[a.jsx(o,{autoRotate:!0,enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),a.jsx(i,{}),a.jsx(n,{all:!0})]})});export{p as default};
