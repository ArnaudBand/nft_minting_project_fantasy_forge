(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2347)}])},638:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t(6856).Z;Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,s){var t=r.default,i=(null==s?void 0:s.suspense)?{}:{loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};if(a(e,Promise)?i.loader=function(){return e}:"function"==typeof e?i.loader=e:"object"==typeof e&&(i=n({},i,e)),(i=n({},i,s)).suspense&&(delete i.ssr,delete i.loading),i.loadableGenerated&&delete(i=n({},i,i.loadableGenerated)).loadableGenerated,"boolean"==typeof i.ssr&&!i.suspense){if(!i.ssr)return delete i.ssr,l(t,i);delete i.ssr}return t(i)},s.noSSR=l;var n=t(6495).Z,i=t(2648).Z,r=(i(t(7294)),i(t(4302)));function l(e,s){return delete s.webpack,delete s.modules,e(s)}("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},6319:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.LoadableContext=void 0;var a=(0,t(2648).Z)(t(7294)).default.createContext(null);s.LoadableContext=a},4302:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t(9658).Z,n=t(7222).Z;Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i=t(6495).Z,r=(0,t(2648).Z)(t(7294)),l=t(6319),d=t(7294).useSyncExternalStore,c=[],u=[],o=!1;function m(e){var s=e(),t={loading:!0,loaded:null,error:null};return t.promise=s.then(function(e){return t.loading=!1,t.loaded=e,e}).catch(function(e){throw t.loading=!1,t.error=e,e}),t}var f=function(){function e(s,t){a(this,e),this._loadFn=s,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return n(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var s=this._res,t=this._opts;s.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},t.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(s){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var s=this;return this._callbacks.add(e),function(){s._callbacks.delete(e)}}}]),e}();function x(e){return function(e,s){var t=function(){if(!x){var s=new f(e,m);x={getCurrentValue:s.getCurrentValue.bind(s),subscribe:s.subscribe.bind(s),retry:s.retry.bind(s),promise:s.promise.bind(s)}}return x.promise()},a=function(){t();var e=r.default.useContext(l.LoadableContext);e&&Array.isArray(m.modules)&&m.modules.forEach(function(s){e(s)})},n=function(e,s){a();var t=d(x.subscribe,x.getCurrentValue,x.getCurrentValue);return r.default.useImperativeHandle(s,function(){return{retry:x.retry}},[]),r.default.useMemo(function(){var s;return t.loading||t.error?r.default.createElement(m.loading,{isLoading:t.loading,pastDelay:t.pastDelay,timedOut:t.timedOut,error:t.error,retry:x.retry}):t.loaded?r.default.createElement((s=t.loaded)&&s.__esModule?s.default:s,e):null},[e,t])},c=function(e,s){return a(),r.default.createElement(m.lazy,i({},e,{ref:s}))},m=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},s);m.suspense&&(m.lazy=r.default.lazy(m.loader));var x=null;if(!o){var h=m.webpack?m.webpack():m.modules;h&&u.push(function(e){var s=!0,a=!1,n=void 0;try{for(var i,r=h[Symbol.iterator]();!(s=(i=r.next()).done);s=!0){var l=i.value;if(-1!==e.indexOf(l))return t()}}catch(d){a=!0,n=d}finally{try{s||null==r.return||r.return()}finally{if(a)throw n}}})}var v=m.suspense?c:n;return v.preload=function(){return t()},v.displayName="LoadableComponent",r.default.forwardRef(v)}(m,e)}function h(e,s){for(var t=[];e.length;){var a=e.pop();t.push(a(s))}return Promise.all(t).then(function(){if(e.length)return h(e,s)})}x.preloadAll=function(){return new Promise(function(e,s){h(c).then(e,s)})},x.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(function(s){var t=function(){return o=!0,s()};h(u,e).then(t,t)})},window.__NEXT_PRELOADREADY=x.preloadReady,s.default=x},2347:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return v}});var a=t(5893),n=t(4644),i=t(8527),r=t(8504),l=t(5152),d=t.n(l)()(function(){return t.e(54).then(t.bind(t,6774))},{loadableGenerated:{webpack:function(){return[6774]}},ssr:!1}),c=function(){return(0,a.jsx)("section",{id:"fun_facts",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"fn_cs_counter_list",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsxs)("div",{className:"item",children:[(0,a.jsxs)("h3",{className:"fn__gradient_title",children:[(0,a.jsx)("span",{className:"prefix"}),(0,a.jsx)(d,{end:9999}),(0,a.jsx)("span",{className:"suffix"})]}),(0,a.jsx)("p",{children:"Total Items"}),(0,a.jsx)("div",{className:"divider"})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("div",{className:"item",children:[(0,a.jsxs)("h3",{className:"fn__gradient_title",children:[(0,a.jsx)("span",{className:"prefix"}),(0,a.jsx)(d,{end:3.9,decimals:2}),(0,a.jsx)("span",{className:"suffix",children:"k+"})]}),(0,a.jsx)("p",{children:"Total Owners"}),(0,a.jsx)("div",{className:"divider"})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("div",{className:"item",children:[(0,a.jsxs)("h3",{className:"fn__gradient_title",children:[(0,a.jsx)("span",{className:"prefix"}),(0,a.jsx)(d,{end:2.4,decimals:2}),(0,a.jsx)("span",{className:"suffix"})]}),(0,a.jsx)("p",{children:"Floor Price (ETH)"}),(0,a.jsx)("div",{className:"divider"})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("div",{className:"item",children:[(0,a.jsxs)("h3",{className:"fn__gradient_title",children:[(0,a.jsx)("span",{className:"prefix"}),(0,a.jsx)(d,{end:144}),(0,a.jsx)("span",{className:"suffix",children:"k+"})]}),(0,a.jsx)("p",{children:"Volume Traded (ETH)"}),(0,a.jsx)("div",{className:"divider"})]})})]})})})})},u=t(7294),o=function(){(0,u.useEffect)(function(){document.querySelectorAll(".fn_cs_slider").forEach(function(s){var t=s.getElementsByClassName("slider_top")[0],a=s.getElementsByClassName("slider_content"),n=2,i=setInterval(function(){n=e(t,a,++n)},6e3),r=document.querySelector(".slider_nav .prev"),l=document.querySelector(".slider_nav .next"),d=s.getElementsByTagName("li");r.addEventListener("click",function(s){return s.preventDefault(),clearInterval(i),n=e(t,a,--n),i=setInterval(function(){n=e(t,a,++n)},6e3),!1}),l.addEventListener("click",function(s){return s.preventDefault(),clearInterval(i),n=e(t,a,++n),i=setInterval(function(){n=e(t,a,--n)},6e3),!1});for(var c=0;c<d.length;c++){var u=d[c].getAttribute("class");if("next"===u)n++;else{if("prev"!==u)return!1;n--}return clearInterval(i),n=e(t,a,n),i=setInterval(function(){n=e(t,a,++n)},6e3),!1}})},[]);var e=function(e,s,t){var a=e.getElementsByTagName("li").length;t>a&&(t-=a);var n=t-1,i=t-2,r=t+1,l=t+2;n>a&&(n-=a),i>a&&(i-=a),r>a&&(r-=a),l>a&&(l-=a),n<1&&(n+=a),i<1&&(i+=a),t<1&&(t+=a),r<1&&(r+=a),l<1&&(l+=a);for(var d=e.getElementsByTagName("li"),c=0;c<d.length;c++)d[c].classList.remove("prev","prev2","active","next","next2");return e.querySelector('li[data-index="'+i+'"]').classList.add("prev2"),e.querySelector('li[data-index="'+n+'"]').classList.add("prev"),e.querySelector('li[data-index="'+t+'"]').classList.add("active"),e.querySelector('li[data-index="'+r+'"]').classList.add("next"),e.querySelector('li[data-index="'+l+'"]').classList.add("next2"),t};return(0,a.jsx)("section",{id:"home",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("h3",{className:"fn__maintitle big","data-text":"Meta Legends","data-align":"center",children:"Meta Legends"}),(0,a.jsxs)("div",{className:"fn_cs_slider","data-responsive":"on",children:[(0,a.jsxs)("div",{className:"slider_top",children:[(0,a.jsx)("img",{src:"/img/1x1.jpg",alt:""}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"prev","data-index":1,children:(0,a.jsxs)("div",{className:"item",children:[(0,a.jsx)("img",{src:"/img/1x1.jpg",alt:""}),(0,a.jsx)("div",{className:"item_in",children:(0,a.jsx)("div",{className:"img","data-bg-img":"/img/slider/1.jpg"})})]})}),(0,a.jsx)("li",{className:"active","data-index":2,children:(0,a.jsxs)("div",{className:"item",children:[(0,a.jsx)("img",{src:"/img/1x1.jpg",alt:""}),(0,a.jsx)("div",{className:"item_in",children:(0,a.jsx)("div",{className:"img","data-bg-img":"/img/slider/2.jpg"})})]})}),(0,a.jsx)("li",{className:"next","data-index":3,children:(0,a.jsxs)("div",{className:"item has_video",children:[(0,a.jsx)("img",{src:"/img/1x1.jpg",alt:""}),(0,a.jsx)("a",{className:"popup-youtube metaportal_fn_videobutton",href:"https://www.youtube.com/embed/7e90gBu4pas",children:(0,a.jsx)("img",{src:"/svg/play.svg",alt:"",className:"fn__svg"})}),(0,a.jsx)("div",{className:"item_in",children:(0,a.jsx)("div",{className:"img","data-bg-img":"/img/slider/3.jpg"})})]})}),(0,a.jsx)("li",{className:"next2","data-index":4,children:(0,a.jsxs)("div",{className:"item",children:[(0,a.jsx)("img",{src:"/img/1x1.jpg",alt:""}),(0,a.jsx)("div",{className:"item_in",children:(0,a.jsx)("div",{className:"img","data-bg-img":"/img/slider/4.jpg"})})]})}),(0,a.jsx)("li",{"data-index":5,children:(0,a.jsxs)("div",{className:"item",children:[(0,a.jsx)("img",{src:"/img/1x1.jpg",alt:""}),(0,a.jsx)("div",{className:"item_in",children:(0,a.jsx)("div",{className:"img","data-bg-img":"/img/slider/5.jpg"})})]})}),(0,a.jsx)("li",{"data-index":6,children:(0,a.jsxs)("div",{className:"item",children:[(0,a.jsx)("img",{src:"/img/1x1.jpg",alt:""}),(0,a.jsx)("div",{className:"item_in",children:(0,a.jsx)("div",{className:"img","data-bg-img":"/img/slider/6.jpg"})})]})}),(0,a.jsx)("li",{className:"prev2","data-index":7,children:(0,a.jsxs)("div",{className:"item",children:[(0,a.jsx)("img",{src:"/img/1x1.jpg",alt:""}),(0,a.jsx)("div",{className:"item_in",children:(0,a.jsx)("div",{className:"img","data-bg-img":"/img/slider/7.jpg"})})]})})]})]}),(0,a.jsxs)("div",{className:"slider_nav",children:[(0,a.jsxs)("a",{href:"#",className:"prev",children:[(0,a.jsx)("span",{className:"circle"}),(0,a.jsx)("span",{className:"icon",children:(0,a.jsx)("img",{src:"/svg/down.svg",alt:"",className:"fn__svg"})}),(0,a.jsx)("span",{className:"circle"})]}),(0,a.jsxs)("a",{href:"#",className:"next",children:[(0,a.jsx)("span",{className:"circle"}),(0,a.jsx)("span",{className:"icon",children:(0,a.jsx)("img",{src:"/svg/down.svg",alt:"",className:"fn__svg"})}),(0,a.jsx)("span",{className:"circle"})]})]})]}),(0,a.jsxs)("div",{className:"fn_cs_desc",children:[(0,a.jsx)("p",{children:"Meta Legends represent a collection of 17,000 legends categorized by level of rarity and generated with hundreds of elements. The Legends are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS."}),(0,a.jsx)("a",{href:"https://opensea.io/",className:"metaportal_fn_button",target:"_blank",rel:"noreferrer",children:(0,a.jsx)("span",{children:"Buy On Opensea"})})]})]})})},m=t(9266),f=t(2073),x=t(4310),h=t(2113),v=function(){return(0,a.jsxs)(h.Z,{pageTitle:"Home",children:[(0,a.jsx)(o,{}),(0,a.jsx)(c,{}),(0,a.jsx)(n.Z,{}),(0,a.jsx)(x.Z,{}),(0,a.jsx)(i.Z,{}),(0,a.jsx)(x.Z,{}),(0,a.jsx)(f.Z,{}),(0,a.jsx)(x.Z,{}),(0,a.jsx)(m.Z,{}),(0,a.jsx)(x.Z,{}),(0,a.jsx)(r.Z,{})]})}},5152:function(e,s,t){e.exports=t(638)}},function(e){e.O(0,[664,141,113,24,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);