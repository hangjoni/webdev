(function(){"use strict";var t={8460:function(t,e,n){var r=n(9242),i=n(3396);const o=(0,i._)("h1",null,"Ninja Reaction Timer",-1),s=["disabled"];function a(t,e,n,r,a,l){const c=(0,i.up)("Block"),u=(0,i.up)("Results");return(0,i.wg)(),(0,i.iD)(i.HY,null,[o,(0,i._)("button",{onClick:e[0]||(e[0]=(...t)=>l.start&&l.start(...t)),disabled:a.isPlaying},"play",8,s),a.isPlaying?((0,i.wg)(),(0,i.j4)(c,{key:0,delay:a.delay,onEnd:l.endGame},null,8,["delay","onEnd"])):(0,i.kq)("",!0),a.showResults?((0,i.wg)(),(0,i.j4)(u,{key:1,score:a.score},null,8,["score"])):(0,i.kq)("",!0)],64)}var l=n(7139);const c={key:1};function u(t,e,n,r,o,s){return(0,i.wg)(),(0,i.iD)(i.HY,null,[o.showBlock?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"block",onClick:e[0]||(e[0]=(...t)=>s.stopTimer&&s.stopTimer(...t))},"click me")):(0,i.kq)("",!0),o.completed?((0,i.wg)(),(0,i.iD)("h3",c,"Your reaction time is "+(0,l.zw)(o.reactionTime)+" ms",1)):(0,i.kq)("",!0)],64)}var h={props:["delay"],data(){return{showBlock:!1,timer:null,reactionTime:0,completed:!1}},emits:["end"],mounted(){setTimeout((()=>{this.showBlock=!0,console.log(this.delay),this.startTimer()}),this.delay)},methods:{startTimer(){this.timer=setInterval((()=>{this.reactionTime+=10}),10)},stopTimer(){clearInterval(this.timer),console.log(this.reactionTime),this.showBlock=!1,this.completed=!0,this.$emit("end",this.reactionTime)}}},d=n(89);const f=(0,d.Z)(h,[["render",u]]);var m=f;const p={class:"rank"};function k(t,e,n,r,o,s){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("p",null,"Reaction time is "+(0,l.zw)(n.score)+" ms",1),(0,i._)("p",p,(0,l.zw)(o.rank),1)],64)}var v={name:"Results",props:["score"],data(){return{rank:null}},mounted(){this.score<250?this.rank="Ninja Finger":this.score<400?this.rank="Rapid Reflexes":this.rank="Snail pace ..."}};const w=(0,d.Z)(v,[["render",k]]);var y=w,g={name:"App",components:{Block:m,Results:y},data(){return{isPlaying:!1,delay:null,score:null,showResults:!1}},methods:{start(){this.delay=2e3+5e3*Math.random(),this.isPlaying=!0,this.showResults=!1},endGame(t){this.score=t,this.isPlaying=!1,this.showResults=!0}}};const b=(0,d.Z)(g,[["render",a]]);var T=b;(0,r.ri)(T).mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var s=1/0;for(u=0;u<t.length;u++){r=t[u][0],i=t[u][1],o=t[u][2];for(var a=!0,l=0;l<r.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(a=!1,o<s&&(s=o));if(a){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[r,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,s=r[0],a=r[1],l=r[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(l)var u=l(n)}for(e&&e(r);c<s.length;c++)o=s[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},r=self["webpackChunkreaction_timer"]=self["webpackChunkreaction_timer"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8460)}));r=n.O(r)})();
//# sourceMappingURL=app.02d9dcd5.js.map