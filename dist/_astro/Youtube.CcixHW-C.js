import{j as U}from"./jsx-runtime.D_zvdyIk.js";import{a as t}from"./index.DSb8Szbl.js";/* empty css                                  *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var s=function(){return s=Object.assign||function(n){for(var a,r=1,i=arguments.length;r<i;r++){a=arguments[r];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(n[c]=a[c])}return n},s.apply(this,arguments)};function W(e,n){var a=t.useState(!1),r=a[0],i=a[1],c=t.useState(!1),l=c[0],g=c[1],m=encodeURIComponent(e.id),p=typeof e.playlistCoverId=="string"?encodeURIComponent(e.playlistCoverId):null,u=e.title,d=e.poster||"hqdefault",v="&".concat(e.params)||"",f=e.muted?"&mute=1":"",b=e.announce||"Watch",w=e.webp?"webp":"jpg",y=e.webp?"vi_webp":"vi",h=e.thumbnail||(e.playlist?"https://i.ytimg.com/".concat(y,"/").concat(p,"/").concat(d,".").concat(w):"https://i.ytimg.com/".concat(y,"/").concat(m,"/").concat(d,".").concat(w)),o=e.noCookie?"https://www.youtube-nocookie.com":"https://www.youtube.com";o=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var C=e.playlist?"".concat(o,"/embed/videoseries?autoplay=1").concat(f,"&list=").concat(m).concat(v):"".concat(o,"/embed/").concat(m,"?autoplay=1&state=1").concat(f).concat(v),I=e.activatedClass||"lyt-activated",E=e.adNetwork||!1,k=e.aspectHeight||9,_=e.aspectWidth||16,j=e.iframeClass||"",x=e.playerClass||"lty-playbtn",F=e.wrapperClass||"yt-lite",N=e.onIframeAdded||function(){},O=e.rel?"prefetch":"preload",P=e.containerElement||"article",R=function(){r||i(!0)},S=function(){l||g(!0)};return t.useEffect(function(){l&&N()},[l]),t.createElement(t.Fragment,null,t.createElement("link",{rel:O,href:h,as:"image"}),t.createElement(t.Fragment,null,r&&t.createElement(t.Fragment,null,t.createElement("link",{rel:"preconnect",href:o}),t.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),E&&t.createElement(t.Fragment,null,t.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),t.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),t.createElement(P,{onPointerOver:R,onClick:S,className:"".concat(F," ").concat(l?I:""),"data-title":u,style:s({backgroundImage:"url(".concat(h,")")},{"--aspect-ratio":"".concat(k/_*100,"%")})},t.createElement("button",{type:"button",className:x,"aria-label":"".concat(b," ").concat(u)}),l&&t.createElement("iframe",{ref:n,className:j,title:u,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:C})))}var A=t.forwardRef(W);const q=({id:e,title:n,...a})=>U.jsx(A,{wrapperClass:"yt-lite rounded-lg",id:e,title:n,...a});export{q as default};
