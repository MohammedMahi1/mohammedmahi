import{i as g,p as T,a as f,b as y,Q as p,l as v,e as w,D as d,T as E,c as L,L as c,I as S,d as m,f as k,g as H,h as _,j as D}from"./index-CtYW8DRL.js";import{VideoProvider as q}from"./vidstack-DDPSXxg2-B6sh_BPg.js";import{R as I}from"./vidstack-DWxqfdlP-BceroBD5.js";import"./vidstack-B6hS6y_K-CT1z1Tgw.js";const R=o=>D(o);class O{constructor(t,i){this.m=t,this.b=i,this.g=null,this.od=null,this.pd={},this.qd=new Set,this.Lk=-1}get instance(){return this.g}setup(t){const{streamType:i}=this.b.$state,e=f(i).includes("live"),n=f(i).includes("ll-");this.g=new t({lowLatencyMode:n,backBufferLength:n?4:e?8:void 0,renderTextTracksNatively:!1,...this.pd});const s=this.Tg.bind(this);for(const h of Object.values(t.Events))this.g.on(h,s);this.g.on(t.Events.ERROR,this.V.bind(this));for(const h of this.qd)h(this.g);this.b.player.dispatch("hls-instance",{detail:this.g}),this.g.attachMedia(this.m),this.g.on(t.Events.FRAG_LOADING,this.Pk.bind(this)),this.g.on(t.Events.AUDIO_TRACK_SWITCHED,this.Ug.bind(this)),this.g.on(t.Events.LEVEL_SWITCHED,this.Vg.bind(this)),this.g.on(t.Events.LEVEL_LOADED,this.Wg.bind(this)),this.g.on(t.Events.NON_NATIVE_TEXT_TRACKS_FOUND,this.Xg.bind(this)),this.g.on(t.Events.CUES_PARSED,this.Yg.bind(this)),this.b.qualities[p._a]=this.Zg.bind(this),v(this.b.qualities,"change",this.gb.bind(this)),v(this.b.audioTracks,"change",this._g.bind(this)),this.od=w(this.$g.bind(this))}$g(){if(!this.b.$state.live())return;const t=new I(this.ah.bind(this));return t.Cb(),t.sa.bind(t)}ah(){var t;this.b.$state.liveSyncPosition.set(((t=this.g)==null?void 0:t.liveSyncPosition)??1/0)}Tg(t,i){var e;(e=this.b.player)==null||e.dispatch(new d(R(t),{detail:i}))}Xg(t,i){const e=new d(t,{detail:i});let n=-1;for(let s=0;s<i.tracks.length;s++){const h=i.tracks[s],r=h.subtitleTrack??h.closedCaptions,u=new E({id:`hls-${h.kind}${s}`,src:r==null?void 0:r.url,label:h.label,language:r==null?void 0:r.lang,kind:h.kind,default:h.default});u[L.N]=2,u[L.Va]=()=>{u.mode==="showing"?(this.g.subtitleTrack=s,n=s):n===s&&(this.g.subtitleTrack=-1,n=-1)},this.b.textTracks.add(u,e)}}Yg(t,i){const e=this.b.textTracks.getById(`hls-${i.track}`);if(!e)return;const n=new d(t,{detail:i});for(const s of i.cues)s.positionAlign="auto",e.addCue(s,n)}Ug(t,i){const e=this.b.audioTracks[i.id];if(e){const n=new d(t,{detail:i});this.b.audioTracks[c.qa](e,!0,n)}}Vg(t,i){const e=this.b.qualities[i.level];if(e){const n=new d(t,{detail:i});this.b.qualities[c.qa](e,!0,n)}}Wg(t,i){var b;if(this.b.$state.canPlay())return;const{type:e,live:n,totalduration:s,targetduration:h}=i.details,r=new d(t,{detail:i});this.b.delegate.c("stream-type-change",n?e==="EVENT"&&Number.isFinite(s)&&h>=10?"live:dvr":"live":"on-demand",r),this.b.delegate.c("duration-change",s,r);const u=this.g.media;this.g.currentLevel===-1&&this.b.qualities[p.Za](!0,r);for(const a of this.g.audioTracks){const l={id:a.id.toString(),label:a.name,language:a.lang||"",kind:"main"};this.b.audioTracks[c.pa](l,r)}for(const a of this.g.levels){const l={id:((b=a.id)==null?void 0:b.toString())??a.height+"p",width:a.width,height:a.height,codec:a.codecSet,bitrate:a.bitrate};this.b.qualities[c.pa](l,r)}u.dispatchEvent(new d("canplay",{trigger:r}))}V(t,i){var e;if(i.fatal)switch(i.type){case"networkError":this.Qk(i.error);break;case"mediaError":(e=this.g)==null||e.recoverMediaError();break;default:this.Ok(i.error);break}}Pk(){this.Lk>=0&&this.Mk()}Qk(t){var i;this.Mk(),(i=this.g)==null||i.startLoad(),this.Lk=window.setTimeout(()=>{this.Lk=-1,this.Ok(t)},5e3)}Mk(){clearTimeout(this.Lk),this.Lk=-1}Ok(t){var i;(i=this.g)==null||i.destroy(),this.g=null,this.b.delegate.c("error",{message:t.message,code:1,error:t})}Zg(){this.g&&(this.g.currentLevel=-1)}gb(){const{qualities:t}=this.b;!this.g||t.auto||(this.g[t.switch+"Level"]=t.selectedIndex,S&&(this.m.currentTime=this.m.currentTime))}_g(){const{audioTracks:t}=this.b;this.g&&this.g.audioTrack!==t.selectedIndex&&(this.g.audioTrack=t.selectedIndex)}Rk(t){var i;g(t.src)&&(this.Mk(),(i=this.g)==null||i.loadSource(t.src))}bh(){var t,i;this.Mk(),this.b&&(this.b.qualities[p._a]=void 0),(t=this.g)==null||t.destroy(),this.g=null,(i=this.od)==null||i.call(this),this.od=null}}class ${constructor(t,i,e){this.X=t,this.b=i,this.Da=e,this.ch()}async ch(){const t={onLoadStart:this.Fa.bind(this),onLoaded:this.rd.bind(this),onLoadError:this.dh.bind(this)};let i=await V(this.X,t);if(m(i)&&!g(this.X)&&(i=await C(this.X,t)),!i)return null;if(!i.isSupported()){const e="[vidstack] `hls.js` is not supported in this environment";return this.b.player.dispatch(new d("hls-unsupported")),this.b.delegate.c("error",{message:e,code:4}),null}return i}Fa(){this.b.player.dispatch(new d("hls-lib-load-start"))}rd(t){this.b.player.dispatch(new d("hls-lib-loaded",{detail:t})),this.Da(t)}dh(t){const i=k(t);this.b.player.dispatch(new d("hls-lib-load-error",{detail:i})),this.b.delegate.c("error",{message:i.message,code:4,error:i})}}async function C(o,t={}){var i,e,n,s,h;if(!m(o)){if((i=t.onLoadStart)==null||i.call(t),o.prototype&&o.prototype!==Function)return(e=t.onLoaded)==null||e.call(t,o),o;try{const r=(n=await o())==null?void 0:n.default;if(r&&r.isSupported)(s=t.onLoaded)==null||s.call(t,r);else throw Error("");return r}catch(r){(h=t.onLoadError)==null||h.call(t,r)}}}async function V(o,t={}){var i,e,n;if(g(o)){(i=t.onLoadStart)==null||i.call(t);try{if(await H(o),!_(window.Hls))throw Error("");const s=window.Hls;return(e=t.onLoaded)==null||e.call(t,s),s}catch(s){(n=t.onLoadError)==null||n.call(t,s)}}}const x="https://cdn.jsdelivr.net";class M extends q{constructor(){super(...arguments),this.$$PROVIDER_TYPE="HLS",this.Ye=null,this.d=new O(this.video,this.b),this.Hb=`${x}/npm/hls.js@^1.5.0/dist/hls.min.js`}get ctor(){return this.Ye}get instance(){return this.d.instance}get type(){return"hls"}get canLiveSync(){return!0}get config(){return this.d.pd}set config(t){this.d.pd=t}get library(){return this.Hb}set library(t){this.Hb=t}preconnect(){g(this.Hb)&&T(this.Hb)}setup(){super.setup(),new $(this.Hb,this.b,t=>{this.Ye=t,this.d.setup(t),this.b.delegate.c("provider-setup",this);const i=f(this.b.$state.source);i&&this.loadSource(i)})}async loadSource(t,i){if(!g(t.src)){this.an();return}this.a.preload=i||"",this.Ym(t,"application/x-mpegurl"),this.d.Rk(t),this.W=t}onInstance(t){const i=this.d.instance;return i&&t(i),this.d.qd.add(t),()=>this.d.qd.delete(t)}destroy(){this.d.bh()}}M.supported=y();export{M as HLSProvider};