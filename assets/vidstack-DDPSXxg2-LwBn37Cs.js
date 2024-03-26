import{s as p,k as o,m as u,n as g,o as l,T as m,c as a,l as n,D as f,q as b,r as P,e as k}from"./index-C8pOqz1R.js";import{H as y}from"./vidstack-B6hS6y_K-CPhXTnNa.js";import"./vidstack-DWxqfdlP-Dd04pTDo.js";class T{constructor(t,e){this.m=t,this.b=e,t.textTracks.onaddtrack=this.Xc.bind(this),l(this.dd.bind(this))}Xc(t){const e=t.track;if(!e||w(this.m,e))return;const i=new m({id:e.id,kind:e.kind,label:e.label,language:e.language,type:"vtt"});i[a.U]={track:e},i[a.N]=2,i[a.ue]=!0;let r=0;const h=d=>{if(e.cues)for(let c=r;c<e.cues.length;c++)i.addCue(e.cues[c],d),r++};h(t),e.oncuechange=h,this.b.textTracks.add(i,t),i.setMode(e.mode,t)}dd(){var t;this.m.textTracks.onaddtrack=null;for(const e of this.b.textTracks){const i=(t=e[a.U])==null?void 0:t.track;i!=null&&i.oncuechange&&(i.oncuechange=null)}}}function w(s,t){return Array.from(s.children).find(e=>e.track===t)}class x{constructor(t,e){this.m=t,this.a=e,this.C=(i,r)=>{this.a.delegate.c("picture-in-picture-change",i,r)},n(this.m,"enterpictureinpicture",this.Kg.bind(this)),n(this.m,"leavepictureinpicture",this.Lg.bind(this))}get active(){return document.pictureInPictureElement===this.m}get supported(){return u(this.m)}async enter(){return this.m.requestPictureInPicture()}exit(){return document.exitPictureInPicture()}Kg(t){this.C(!0,t)}Lg(t){this.C(!1,t)}}class v{constructor(t,e){this.m=t,this.a=e,this.J="inline",n(this.m,"webkitpresentationmodechanged",this.Va.bind(this))}get Te(){return o(this.m)}async lc(t){this.J!==t&&this.m.webkitSetPresentationMode(t)}Va(t){var i;const e=this.J;this.J=this.m.webkitPresentationMode,(i=this.a.player)==null||i.dispatch(new f("video-presentation-change",{detail:this.J,trigger:t})),["fullscreen","picture-in-picture"].forEach(r=>{(this.J===r||e===r)&&this.a.delegate.c(`${r}-change`,this.J===r,t)})}}class S{constructor(t){this.ga=t}get active(){return this.ga.J==="fullscreen"}get supported(){return this.ga.Te}async enter(){this.ga.lc("fullscreen")}async exit(){this.ga.lc("inline")}}class E{constructor(t){this.ga=t}get active(){return this.ga.J==="picture-in-picture"}get supported(){return this.ga.Te}async enter(){this.ga.lc("picture-in-picture")}async exit(){this.ga.lc("inline")}}class I{constructor(t,e){this.m=t,this.b=e,this.Te=b(!1),this.mk()}get supported(){return this.Te()}mk(){P||!this.m.remote||!this.Pl||(this.m.remote.watchAvailability(t=>{this.Te.set(t)}).catch(()=>{this.Te.set(!1)}),k(this.Sm.bind(this)))}Sm(){if(!this.Te())return;const t=["connecting","connect","disconnect"],e=this.Sg.bind(this);e(),n(this.m,"playing",e);for(const i of t)n(this.m.remote,i,e)}async prompt(){if(!this.supported)throw Error("Not supported on this platform.");return this.wb==="airplay"&&this.m.webkitShowPlaybackTargetPicker?this.m.webkitShowPlaybackTargetPicker():this.m.remote.prompt()}Sg(t){const e=this.m.remote.state;if(e===this.nc)return;const i={type:this.wb,state:e};this.b.delegate.c("remote-playback-change",i,t),this.nc=e}}class V extends I{constructor(){super(...arguments),this.wb="airplay"}get Pl(){return"WebKitPlaybackTargetAvailabilityEvent"in window}}class M extends y{constructor(t,e){super(t,e),this.$$PROVIDER_TYPE="VIDEO",p(()=>{if(this.airPlay=new V(t,e),o(t)){const i=new v(t,e);this.fullscreen=new S(i),this.pictureInPicture=new E(i)}else u(t)&&(this.pictureInPicture=new x(t,e))},this.scope)}get type(){return"video"}setup(){super.setup(),g(this.video)&&new T(this.video,this.b),this.b.textRenderers.Ge(this.video),l(()=>{this.b.textRenderers.Ge(null)}),this.type==="video"&&this.b.delegate.c("provider-setup",this)}get video(){return this.a}}export{M as VideoProvider};
