import{i as p,l as f,k as R}from"./three.module-e-akeimH.js";import{E as C}from"./Ellipsoid-Ctcbk2JV.js";const l=Math.PI,u=l/2,m=new f,c=new f,h=new f,y=new R;let d=0;const w=[];function T(M=!1){return M?(w[d]||(w[d]=new f),d++,w[d-1]):new f}function I(){d=0}class H extends C{constructor(i,t,o,n=-u,e=u,g=0,E=2*l,a=0,s=0){super(i,t,o),this.latStart=n,this.latEnd=e,this.lonStart=g,this.lonEnd=E,this.heightStart=a,this.heightEnd=s}_getPoints(i=!1){const{latStart:t,latEnd:o,lonStart:n,lonEnd:e,heightStart:g,heightEnd:E}=this,a=p.mapLinear(.5,0,1,t,o),s=p.mapLinear(.5,0,1,n,e),r=Math.floor(n/u)*u,k=[[-l/2,0],[l/2,0],[0,r],[0,r+l/2],[0,r+l],[0,r+3*l/2],[t,e],[o,e],[t,n],[o,n],[0,n],[0,e],[a,s],[t,s],[o,s],[a,n],[a,e]],B=[],V=k.length;for(let P=0;P<=1;P++){const v=p.mapLinear(P,0,1,g,E);for(let L=0,F=V;L<F;L++){const[_,S]=k[L];if(_>=t&&_<=o&&S>=n&&S<=e){const x=T(i);B.push(x),this.getCartographicToPosition(_,S,v,x)}}}return B}getBoundingBox(i,t){I();const{latStart:o,latEnd:n,lonStart:e,lonEnd:g}=this;if(n-o<l/2){const s=p.mapLinear(.5,0,1,o,n),r=p.mapLinear(.5,0,1,e,g);this.getCartographicToNormal(s,r,h),c.set(0,0,1),m.crossVectors(c,h),c.crossVectors(m,h),t.makeBasis(m,c,h)}else m.set(1,0,0),c.set(0,1,0),h.set(0,0,1),t.makeBasis(m,c,h);y.copy(t).invert();const a=this._getPoints(!0);for(let s=0,r=a.length;s<r;s++)a[s].applyMatrix4(y);i.makeEmpty(),i.setFromPoints(a)}getBoundingSphere(i,t){I();const o=this._getPoints(!0);i.makeEmpty(),i.setFromPoints(o,t)}}export{H as E};
