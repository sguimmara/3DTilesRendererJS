import{S as f,p as h,aa as A,W as x,a as T,d as y,l as m,Q as P}from"./three.module-e-akeimH.js";/* empty css               */import{D as C}from"./DRACOLoader-CI7k7Ryy.js";import{g as E}from"./lil-gui.module.min-Vka56b52.js";import{E as I}from"./EnvironmentControls-BRJ_vGuv.js";import{T as z}from"./TilesRenderer-C3SKmAML.js";import{C as R}from"./CesiumIonAuthPlugin-B_Ue9A_U.js";import{G as k}from"./GLTFExtensionsPlugin-BCbfruSg.js";import"./I3DMLoader-BvoAYWAX.js";import"./readMagicBytes-CUUeQGnc.js";import"./GLTFLoader-uVyzW9cX.js";import"./Ellipsoid-Ctcbk2JV.js";import"./B3DMLoader-BmDNS6RO.js";import"./PNTSLoader-DzQ3_PKf.js";import"./CMPTLoader-Bq-8QR4v.js";import"./EllipsoidRegion-DVvlgLqj.js";let o,p,s,i,e;const v=localStorage.getItem("ionApiKey")??"put-your-api-key-here",a={ionAssetId:"40866",ionAccessToken:v,reload:u};W();w();function D(t,r){const n=new P,d=new m().crossVectors(t,r);return n.x=d.x,n.y=d.y,n.z=d.z,n.w=1+t.clone().dot(r),n.normalize(),n}function S(){e.fetchOptions.mode="cors",e.registerPlugin(new k({dracoLoader:new C().setDecoderPath("https://unpkg.com/three@0.153.0/examples/jsm/libs/draco/gltf/")})),s.add(e.group)}function u(){e&&(s.remove(e.group),e.dispose(),e=null),localStorage.setItem("ionApiKey",a.ionAccessToken),e=new z,e.registerPlugin(new R({apiToken:a.ionAccessToken,assetId:a.ionAssetId})),e.addEventListener("load-tile-set",()=>{const t=new y;e.getBoundingSphere(t);const r=t.center.clone(),n=r.length(),d=r.normalize(),g=new m(0,1,0),c=D(d,g);e.group.quaternion.x=c.x,e.group.quaternion.y=c.y,e.group.quaternion.z=c.z,e.group.quaternion.w=c.w,e.group.position.y=-n}),S()}function W(){s=new f;const t=new h(new Uint8Array(64*64*4).fill(255),64,64);t.mapping=A,t.needsUpdate=!0,s.environment=t,i=new x({antialias:!0}),i.setClearColor(1383455),document.body.appendChild(i.domElement),i.domElement.tabIndex=1,o=new T(60,window.innerWidth/window.innerHeight,1,1e5),o.position.set(100,100,-100),o.lookAt(0,0,0),p=new I(s,o,i.domElement),p.adjustHeight=!1,p.minDistance=1,p.maxAltitude=Math.PI,u(),l(),window.addEventListener("resize",l,!1);const r=new E;r.width=300;const n=r.addFolder("Ion");n.add(a,"ionAssetId"),n.add(a,"ionAccessToken"),n.add(a,"reload"),n.open()}function l(){o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(window.devicePixelRatio)}function w(){requestAnimationFrame(w),e&&(p.update(),e.setCamera(o),e.setResolutionFromRenderer(o,i),o.updateMatrixWorld(),e.update(),i.render(s,o))}
