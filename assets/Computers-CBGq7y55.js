import{r as n,j as e,C as i,L as l,O as m,P as c}from"./index-BKaHjhl9.js";import{u as d}from"./useGLTF-CNa9nTwO.js";const h=({isMobile:s})=>{const t=d("./desktop.gltf");return e.jsxs("mesh",{children:[e.jsx("ambientLight",{intensity:1}),e.jsx("directionalLight",{angle:.12,penumbra:1,castShadow:!0,"shadow-mapSize":1024,intensity:1,position:[-20,50,10]}),e.jsx("hemisphereLight",{intensity:1,groundColor:"black"}),e.jsx("pointLight",{intensity:1}),e.jsx("primitive",{object:t.scene,scale:s?.6:.75,position:s?[-2,-2.5,-1.6]:[0,-3.25,-1.5],rotation:[0,-.23,-.1]})]})},x=()=>{const[s,t]=n.useState(!1);return n.useEffect(()=>{const a=window.matchMedia("(max-width: 500px)");t(a.matches);const r=o=>{t(o.matches)};return a.addEventListener("change",r),()=>{a.removeEventListener("change",r)}},[]),e.jsxs(i,{frameloop:"demand",shadows:!0,dpr:[1,2],camera:{position:[20,3,5],fov:25},gl:{preserveDrawingBuffer:!0},children:[e.jsxs(n.Suspense,{fallback:e.jsx(l,{}),children:[e.jsx(m,{enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),e.jsx(h,{isMobile:s})]}),e.jsx(c,{all:!0})]})};export{x as default};
