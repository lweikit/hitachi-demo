_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{"21us":function(e,t,n){e.exports={"part-five":"SectionOnePartFive_part-five__1yBj0",underline:"SectionOnePartFive_underline__md49Z",bg:"SectionOnePartFive_bg__O8Tjl",hidden:"SectionOnePartFive_hidden__Sa65f","seq1-bg":"SectionOnePartFive_seq1-bg__2UVNR","fade-in":"SectionOnePartFive_fade-in__2ajRs","blend-in":"SectionOnePartFive_blend-in__3ujnK","seq2-p":"SectionOnePartFive_seq2-p__2v0UE","seq3-line":"SectionOnePartFive_seq3-line__2vcA6","seq4-p":"SectionOnePartFive_seq4-p__FxQjx"}},"5LNq":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var o=n("q1tI"),i=n.n(o),s=n("yOxE"),r=n.n(s),a=i.a.createElement;function l(e){var t=e.type,n="".concat("delay"===t?r.a["line-delay"]:"teal"===t?r.a["line-teal"]:r.a["line-blue"]);return a("svg",{className:r.a["line-svg"],xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 1.8 81.9"},a("defs",null,a("linearGradient",{id:"line-down-gradient",x1:"0",y1:"81.9",x2:"0",y2:"0",gradientUnits:"userSpaceOnUse"},a("stop",{offset:"0","stop-color":"#fff"}),a("stop",{offset:"0.09","stop-color":"#f6f6ff","stop-opacity":"0.97"}),a("stop",{offset:"0.23","stop-color":"#dcdcff","stop-opacity":"0.89"}),a("stop",{offset:"0.41","stop-color":"#b2b2ff","stop-opacity":"0.76"}),a("stop",{offset:"0.62","stop-color":"#7979ff","stop-opacity":"0.58"}),a("stop",{offset:"0.85","stop-color":"#3030ff","stop-opacity":"0.35"}),a("stop",{offset:"1","stop-color":"blue","stop-opacity":"0.2"}))),a("g",null,a("line",{className:n,y1:"0",y2:"81.9"})))}},C50d:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sections/SectionOnePartFive",function(){return n("uiiz")}])},Gytx:function(e,t){e.exports=function(e,t,n,o){var i=n?n.call(o,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var s=Object.keys(e),r=Object.keys(t);if(s.length!==r.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),l=0;l<s.length;l++){var c=s[l];if(!a(c))return!1;var u=e[c],d=t[c];if(!1===(i=n?n.call(o,u,d,c):void 0)||void 0===i&&u!==d)return!1}return!0}},YVcj:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n("q1tI")),i=a(n("17x9")),s=a(n("hKI/")),r=a(n("Gytx"));function a(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var c=function(e){var t,n;function i(t){var n;return(n=e.call(this,t)||this).isVisible=function(e,t,o){var i=e.top,s=e.left,r=e.bottom,a=e.right,l=e.width,c=e.height,u=n.props,d=u.offset,f=u.partialVisibility;if(i+a+r+s===0)return!1;var p=0-d,v=0-d,h=t+d,g=o+d;return f?i+c>=p&&s+l>=v&&r-c<=g&&a-l<=h:i>=p&&s>=v&&r<=g&&a<=h},n.isComponentVisible=function(){setTimeout((function(){if(n.nodeRef&&n.nodeRef.getBoundingClientRect){var e=document.documentElement,t=n.props.once,o=n.nodeRef.getBoundingClientRect(),i=window.innerWidth||e.clientWidth,s=window.innerHeight||e.clientHeight,r=n.isVisible(o,i,s);r&&t&&n.removeListener(),n.setState({isVisible:r})}}),0)},n.setNodeRef=function(e){return n.nodeRef=e},n.ownProps=Object.keys(i.propTypes),n.state={isVisible:!1},n.throttleCb=(0,s.default)(n.isComponentVisible,n.props.throttleInterval),t.nodeRef&&n.setNodeRef(t.nodeRef),n}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=i.prototype;return a.componentDidMount=function(){this.attachListener(),this.isComponentVisible()},a.componentDidUpdate=function(e){(0,r.default)(this.getChildProps(this.props),this.getChildProps(e))||this.isComponentVisible()},a.componentWillUnmount=function(){this.removeListener()},a.attachListener=function(){window.addEventListener("scroll",this.throttleCb),window.addEventListener("resize",this.throttleCb)},a.removeListener=function(){window.removeEventListener("scroll",this.throttleCb),window.removeEventListener("resize",this.throttleCb)},a.getChildProps=function(e){var t=this;void 0===e&&(e=this.props);var n={};return Object.keys(e).forEach((function(o){-1===t.ownProps.indexOf(o)&&(n[o]=e[o])})),n},a.getChildren=function(){var e=this;return"function"===typeof this.props.children?this.props.children(l({},this.getChildProps(),{isVisible:this.state.isVisible})):o.default.Children.map(this.props.children,(function(t){return o.default.cloneElement(t,l({},e.getChildProps(),{isVisible:e.state.isVisible}))}))},a.render=function(){var e=this.props,t=e.className,n=e.style,i=e.nodeRef,s=e.tag,r=l({},t&&{className:t},n&&{style:n});return o.default.createElement(s,l({ref:!i&&this.setNodeRef},r),this.getChildren())},i}(o.PureComponent);t.default=c,c.propTypes={once:i.default.bool,throttleInterval:function(e,t,n){var o=e[t];return!Number.isInteger(o)||o<0?new Error("The "+t+" prop you provided to "+n+" is not a valid integer >= 0."):null},children:i.default.oneOfType([i.default.func,i.default.element,i.default.arrayOf(i.default.element)]),style:i.default.object,className:i.default.string,offset:i.default.number,partialVisibility:i.default.bool,nodeRef:i.default.object,tag:i.default.string},c.defaultProps={once:!1,throttleInterval:150,offset:0,partialVisibility:!1,tag:"div"}},ok1R:function(e,t,n){"use strict";var o=n("wx14"),i=n("zLVn"),s=n("q1tI"),r=n.n(s),a=n("17x9"),l=n.n(a),c=n("TSYQ"),u=n.n(c),d=n("33Jr"),f=l.a.oneOfType([l.a.number,l.a.string]),p={tag:d.h,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},v={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e){var t=e.className,n=e.cssModule,s=e.noGutters,a=e.tag,l=e.form,c=e.widths,f=Object(i.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];c.forEach((function(t,n){var o=e[t];if(delete f[t],o){var i=!n;p.push(i?"row-cols-"+o:"row-cols-"+t+"-"+o)}}));var v=Object(d.e)(u()(t,s?"no-gutters":null,l?"form-row":"row",p),n);return r.a.createElement(a,Object(o.a)({},f,{className:v}))};h.propTypes=p,h.defaultProps=v,t.a=h},rhny:function(e,t,n){"use strict";var o=n("wx14"),i=n("zLVn"),s=n("q1tI"),r=n.n(s),a=n("17x9"),l=n.n(a),c=n("TSYQ"),u=n.n(c),d=n("33Jr"),f=l.a.oneOfType([l.a.number,l.a.string]),p=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:f,offset:f})]),v={tag:d.h,xs:p,sm:p,md:p,lg:p,xl:p,className:l.a.string,cssModule:l.a.object,widths:l.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},b=function(e){var t=e.className,n=e.cssModule,s=e.widths,a=e.tag,l=Object(i.a)(e,["className","cssModule","widths","tag"]),c=[];s.forEach((function(t,o){var i=e[t];if(delete l[t],i||""===i){var s=!o;if(Object(d.d)(i)){var r,a=s?"-":"-"+t+"-",f=g(s,t,i.size);c.push(Object(d.e)(u()(((r={})[f]=i.size||""===i.size,r["order"+a+i.order]=i.order||0===i.order,r["offset"+a+i.offset]=i.offset||0===i.offset,r)),n))}else{var p=g(s,t,i);c.push(p)}}})),c.length||c.push("col");var f=Object(d.e)(u()(t,c),n);return r.a.createElement(a,Object(o.a)({},l,{className:f}))};b.propTypes=v,b.defaultProps=h,t.a=b},uiiz:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var o=n("q1tI"),i=n.n(o),s=n("ok1R"),r=n("rhny"),a=n("xyb1"),l=n.n(a),c=n("5LNq"),u=n("21us"),d=n.n(u),f=i.a.createElement;function p(){return f("div",{className:"section ".concat(d.a["part-five"])},f("h4",null,"Gains in manufacturing productivity"),f("div",{className:d.a.underline}),f(s.a,null,f(r.a,{xs:{size:2},lg:{size:1}},f("object",{type:"image/svg+xml",data:"svg/mouseover.svg"})),f(r.a,null,f("h5",null,"From 2008 to 2017")),f(r.a,{xs:{size:2},lg:{size:1}},f("object",{type:"image/svg+xml",data:"svg/mouseover.svg"}))),f(s.a,null,f(r.a,null,f("object",{type:"image/svg+xml",data:"svg/productivity-2.svg"}))),f("div",{className:"space-div"}),f("div",{className:"space-div"}),f("div",{className:"space-div"}),f(l.a,{once:!0},(function(e){var t=e.isVisible,n="".concat(d.a.hidden," ").concat(t&&d.a["seq1-bg"]," ").concat(d.a.bg," bg"),o="".concat(d.a.hidden," ").concat(t&&d.a["seq2-p"]),i="".concat(d.a.hidden," ").concat(t&&d.a["seq3-line"]),s="".concat(d.a.hidden," ").concat(t&&d.a["seq4-p"]);return f("div",null,f("img",{src:"img/s1-p5-bg.jpg",className:n}),f("p",{className:o},"Industry 4.0 promises to change that by escalating the region's manufacturing value. However, the current pace of adoption lag behind China, which has invested heavily in automation and robots in the past 10 years. This move has enabled Chinese productivity to grow by 84%, compared with 38% on average for ASEAN."),f("div",{className:i},t&&f(c.default,{type:"delay"})),f("h3",{className:s},"THEN, COVID-19 CAME AND CHANGED EVERYTHING"))})))}},xyb1:function(e,t,n){"use strict";var o;t.__esModule=!0,t.default=void 0;var i=((o=n("YVcj"))&&o.__esModule?o:{default:o}).default;t.default=i},yOxE:function(e,t,n){e.exports={"line-svg":"LineDown_line-svg__1xCKc","line-teal":"LineDown_line-teal__2kqog","draw-line":"LineDown_draw-line__2OyMr","line-blue":"LineDown_line-blue__1SV4q","line-delay":"LineDown_line-delay__qZ4Ra"}}},[["C50d",0,1,2]]]);