function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/vidstack-O7SrbBNT-CkaHS4MZ.js","assets/index-DRROSflN.js","assets/index-Ba62Kaor.css","assets/vidstack-DWxqfdlP-exCPOWBC.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{M as l,I as d,x as g,N as u,a as m,f as p,D as C,r as w,_ as h,g as f}from"./index-DRROSflN.js";function E(){return"https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"}function v(){var a;return!!((a=window.cast)!=null&&a.framework)}function y(){var a,e;return!!((e=(a=window.chrome)==null?void 0:a.cast)!=null&&e.isAvailable)}function i(){return s().getCastState()===cast.framework.CastState.CONNECTED}function s(){return window.cast.framework.CastContext.getInstance()}function c(){return s().getCurrentSession()}function _(){var a;return(a=c())==null?void 0:a.getSessionObj().media[0]}function P(a){var t;return((t=_())==null?void 0:t.media.contentId)===(a==null?void 0:a.src)}function S(){return{language:"en-US",autoJoinPolicy:chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,receiverApplicationId:chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,resumeSavedSession:!0,androidReceiverCompatible:!0}}function I(a){return`Google Cast Error Code: ${a}`}function D(a,e){return l(s(),a,e)}class b{constructor(){this.name="google-cast"}get cast(){return s()}mediaType(){return"video"}canPlay(e){return d&&!g&&u(e)}async prompt(e){var o;let t;try{const r=await this.wm(e);this.ba||(this.ba=new cast.framework.RemotePlayer,new cast.framework.RemotePlayerController(this.ba)),t=e.player.createEvent("google-cast-prompt-open",{trigger:r}),e.player.dispatchEvent(t),this.Nl(e,"connecting",t),await this.xm(m(e.$props.googleCast)),e.$state.remotePlaybackInfo.set({deviceName:(o=c())==null?void 0:o.getCastDevice().friendlyName}),i()&&this.Nl(e,"connected",t)}catch(r){const n=p(r);throw this.Nl(e,i()?"connected":"disconnected",new C("google-cast-prompt-error",{detail:n})),n}finally{e.player.dispatch("google-cast-prompt-close",{trigger:t})}}async load(e){if(w)throw Error("[vidstack] can not load google cast provider server-side");if(!this.ba)throw Error("[vidstack] google cast player was not initialized");return new(await h(()=>import("./vidstack-O7SrbBNT-CkaHS4MZ.js"),__vite__mapDeps([0,1,2,3]))).GoogleCastProvider(this.ba,e)}async wm(e){if(v())return;const t=e.player.createEvent("google-cast-load-start");e.player.dispatch(t),await f(E()),await customElements.whenDefined("google-cast-launcher");const o=e.player.createEvent("google-cast-loaded",{trigger:t});if(e.player.dispatch(o),!y())throw Error("Cast not available.");return o}async xm(e){this.ym(e);const t=await this.cast.requestSession();if(t)throw Error(I(t))}ym(e){var t;(t=this.cast)==null||t.setOptions({...S(),...e})}Nl(e,t,o){const r={type:"google-cast",state:t};e.delegate.c("remote-playback-change",r,o)}}var O=Object.freeze({__proto__:null,GoogleCastLoader:b});export{s as a,c as b,I as c,O as d,_ as g,P as h,D as l};
