import{R as w,S as g,W as f,a as h,i as s}from"./three.module-e-akeimH.js";/* empty css               */import{D as P}from"./DRACOLoader-CI7k7Ryy.js";import{O as R}from"./OrbitControls-Cr_lXuAd.js";import{W as D}from"./I3DMLoader-BvoAYWAX.js";import{T as L}from"./TilesRenderer-C3SKmAML.js";import{C as T}from"./CesiumIonAuthPlugin-B_Ue9A_U.js";import{T as x}from"./TileCompressionPlugin-NK0eA6bF.js";import{T as C}from"./TilesFadePlugin-Bg3AWZ7_.js";import{G as E}from"./GLTFExtensionsPlugin-BCbfruSg.js";import{t as A}from"./Ellipsoid-Ctcbk2JV.js";import"./readMagicBytes-CUUeQGnc.js";import"./GLTFLoader-uVyzW9cX.js";import"./B3DMLoader-BmDNS6RO.js";import"./PNTSLoader-DzQ3_PKf.js";import"./CMPTLoader-Bq-8QR4v.js";import"./EllipsoidRegion-DVvlgLqj.js";let t,n,l,i,e;const W=new w;W.firstHitOnly=!0;v();c();function b(){e&&(l.remove(e.group),e.dispose(),e=null),e=new L,e.registerPlugin(new T({apiToken:"",assetId:"2275207",autoRefreshToken:!0})),e.registerPlugin(new x),e.registerPlugin(new C),e.registerPlugin(new E({dracoLoader:new P().setDecoderPath("https://unpkg.com/three@0.153.0/examples/jsm/libs/draco/gltf/")})),e.setLatLonToYUp(35.6586*s.DEG2RAD,139.7454*s.DEG2RAD),l.add(e.group),e.setResolutionFromRenderer(t,i),e.setCamera(t)}function v(){l=new g,i=new f({antialias:!0}),i.setClearColor(1383455),document.body.appendChild(i.domElement),t=new h(60,window.innerWidth/window.innerHeight,100,16e5),t.position.set(1e3,1e3,1e3).multiplyScalar(.5),n=new R(t,i.domElement),n.minDistance=500,n.maxDistance=1e4*2,n.minPolarAngle=0,n.maxPolarAngle=3*Math.PI/8,n.enableDamping=!0,n.autoRotate=!0,n.autoRotateSpeed=.5,n.enablePan=!1,b(),p(),window.addEventListener("resize",p,!1),window.addEventListener("hashchange",u),u()}function p(){t.aspect=window.innerWidth/window.innerHeight,i.setSize(window.innerWidth,window.innerHeight),t.updateProjectionMatrix(),i.setPixelRatio(window.devicePixelRatio)}function u(){const o=window.location.hash.replace(/^#/,"").split(/,/g).map(a=>parseFloat(a));if(o.length!==2||o.findIndex(a=>Number.isNaN(a))!==-1)return;const[d,r]=o;e.setLatLonToYUp(d*s.DEG2RAD,r*s.DEG2RAD)}function c(){requestAnimationFrame(c),e&&(n.update(),e.setResolutionFromRenderer(t,i),e.setCamera(t),t.updateMatrixWorld(),e.update(),G())}function G(){var m;if(i.render(l,t),e){const o=e.group.matrixWorld.clone().invert(),d=t.position.clone().applyMatrix4(o),r={};D.getPositionToCartographic(d,r);const a=((m=e.getAttributions()[0])==null?void 0:m.value)||"";document.getElementById("credits").innerText=A(r.lat,r.lon)+`
`+a}}
