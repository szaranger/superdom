var Dom=function(){"use strict";return function(a){this.elements=a[0]?Array.prototype.slice.call(a):[],this.callee=a.callee}}();DOM=function(){"use strict";var a={query:function(a){var b,c;return b=document.querySelectorAll(a),c=new Dom(b),c.callee="query",c},get:function(a){var b,c;return b=document.getElementById(a),c=new Dom([b]),c.callee="get",c},create:function(a){var b,c,d=new DOMParser;return a&&"string"==typeof a&&(b=d.parseFromString(a,"text/xml").firstChild,c=new Dom([b]),c.callee="create"),c}};return a}(),function(){"use strict";Dom.prototype.attr=function(a,b){var c=[];return a&&this.elements.length>0&&(this.elements.forEach(function(d){b?d.setAttribute(a,b):c.push(d.getAttribute(a))}),!b)?"get"===this.callee?c[0]:c:void 0}}(),function(){"use strict";Dom.prototype.hasClass=function(a){return this.elements.some(function(b){return b.classList.contains(a)})},Dom.prototype.addClass=function(a){return a&&this.elements[0]&&this.elements.forEach(function(b){b.classList.add(a)}),new Dom(this.elements)},Dom.prototype.removeClass=function(a){return this.elements[0]&&this.elements.forEach(function(b){a?b.classList.remove(a):b.classList.remove()}),new Dom(this.elements)}}(),function(){"use strict";Dom.prototype.clone=function(){var a=[];return this.elements.forEach(function(b){a.push(b.cloneNode(!0))}),new Dom(a)}}(),function(){"use strict";Dom.prototype.hide=function(){this.elements.forEach(function(a){a.style.display="none"})},Dom.prototype.show=function(){this.elements.forEach(function(a){a.style.display="block"})},Dom.prototype.toggle=function(){var a;this.elements.forEach(function(b){a=b.style.display,b.style.display="block"===a?"none":"block"})}}(),function(){"use strict";Dom.prototype.animate=function(a,b,c){this.elements.forEach(function(b){if(a)for(var c in a)a.hasOwnProperty(c)&&console.log(a[c])})}}(),function(){"use strict";function a(a,c,d){b(a,c,"0"!==a.style.opacity?"out":"in",d)}function b(a,b,c,d){var e,f,g,h,i=a.style,j=10,k=1e3,b=b||100,l=k/j;a.opacity;if(10>b&&(b=10),"string"==typeof b&&(b="slow"===b?150:"fast"===b?50:100),f=b/j,"in"===c){if("1"===i.opacity)return;e=0,g=1,i.opacity="0",h=g/f}else{if("0"===i.opacity)return;e=1,g=0,h=e/f}var m=function(){"in"===c?(e+=h,i.opacity=e,g>e?setTimeout(m,l):(i.opacity="1",d&&d())):(e-=h,i.opacity=e,e>g?setTimeout(m,l):(i.opacity="0",d&&d()))};m()}Dom.prototype.fadeIn=function(a,c){var d=[];return this.elements.forEach(function(d){b(d,a,"in",c)}),new Dom(d)},Dom.prototype.fadeOut=function(a,c){var d=[];return this.elements.forEach(function(d){b(d,a,"out",c)}),new Dom(d)},Dom.prototype.fadeToggle=function(b,c){var d=[];return this.elements.forEach(function(d){a(d,b,c)}),new Dom(d)}}(),function(){"use strict";function a(a,c,d){b(a,c,0!==a.offsetHeight?"up":"down",d)}function b(a,b,c,d){var e,f,g,h,i=a.style,j=10,k=1e3,b=b||400,l=k/j,m=a.offsetHeight;if(10>b&&(b=10),"string"==typeof b&&(b="slow"===b?600:"fast"===b?200:400),f=b/j,"down"===c){if(0!==m)return;e=0,g=i.height.split("px")[0],i.display="block",i.height="0px",h=g/f}else{if(0===m)return;e=m,g=0,h=e/f}var n=function(){"down"===c?(e+=h,i.height=e+"px",g>e?setTimeout(n,l):d&&d()):(e-=h,i.height=e+"px",e>g?setTimeout(n,l):(i.display="none",i.height=m+"px",d&&d()))};n()}Dom.prototype.slideDown=function(a,c){var d=[];return this.elements.forEach(function(d){b(d,a,"down",c)}),new Dom(d)},Dom.prototype.slideUp=function(a,c){var d=[];return this.elements.forEach(function(d){b(d,a,"up",c)}),new Dom(d)},Dom.prototype.slideToggle=function(b,c){var d=[];return this.elements.forEach(function(d){a(d,b,c)}),new Dom(d)}}(),function(){"use strict";Dom.prototype.click=function(a){this.elements.forEach(function(b){b.onclick=a})},Dom.prototype.dblclick=function(a){this.elements.forEach(function(b){b.ondblclick=a})},Dom.prototype.hover=function(a){this.elements.forEach(function(b){b.onmouseover=a,b.onmouseout=a})},Dom.prototype.mouseenter=function(a){this.elements.forEach(function(b){b.onmouseover=a})},Dom.prototype.mouseleave=function(a){this.elements.forEach(function(b){b.onmouseout=a})},Dom.prototype.mousedown=function(a){this.elements.forEach(function(b){b.onmousedown=a})},Dom.prototype.mousemove=function(a){this.elements.forEach(function(b){b.onmousemove=a})},Dom.prototype.mouseout=function(a){this.elements.forEach(function(b){b.onmouseout=a})},Dom.prototype.mouseover=function(a){this.elements.forEach(function(b){b.onmouseover=a})},Dom.prototype.mouseup=function(a){this.elements.forEach(function(b){b.onmouseup=a})}}(),function(){"use strict";Dom.prototype.first=function(){var a=this.elements;return a?a[0][0]:this[0][0]},Dom.prototype.last=function(){var a=this.elements;return a?a[this.elements.length-1]:this[this.length-1]}}(),function(){"use strict";Dom.prototype.append=function(a){var b,c,d,e,f;a&&(b=this.elements,b.forEach(function(b,g){if("string"==typeof a){for(d=document.createDocumentFragment(),e=document.createElement("body"),e.innerHTML=a;f=e.firstElementChild;)d.appendChild(f);b.appendChild(d)}else c=a.elements,c.forEach(function(a){b.appendChild(a)})}))}}(),function(){"use strict";Dom.prototype.html=function(){var a=[];return this.elements.forEach(function(b){a.push(b.outerHTML)}),"get"===this.callee?a[0]:a},Dom.prototype.text=function(a){var b=[];return a?void this.elements.forEach(function(b){b.innerText=a}):(this.elements.forEach(function(a){b.push(a.innerText)}),"get"===this.callee?b[0]:b)},Dom.prototype.prepend=function(a){var b,c;a&&(b=this.elements,b.forEach(function(b,d){"string"==typeof a?b.insertAdjacentHTML("afterbegin",a):(c=a.elements,c.forEach(function(a){b.insertAdjacentHTML("afterbegin",a)}))}))}}(),function(){"use strict";function a(){return b().split(" ")[0]}function b(){var a,b=navigator.userAgent,c=b.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(c[1])?(a=/\brv[ :]+(\d+)/g.exec(b)||[],"IE "+(a[1]||"")):"Chrome"===c[1]&&(a=b.match(/\b(OPR|Edge)\/(\d+)/),null!=a)?a.slice(1).join(" ").replace("OPR","Opera"):(c=c[2]?[c[1],c[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(a=b.match(/version\/(\d+)/i))&&c.splice(1,1,a[1]),c.join(" "))}var c="Chrome",d="Firefox",e="IE",f="Opera",g="Safari";DOM.isChrome=function(){return a()===c},DOM.isFirefox=function(){return a()===d},DOM.isIE=function(){return a()===e},DOM.isOpera=function(){return a()===f},DOM.isSafari=function(){return a()===g},DOM.detectBrowser=function(){return b()}}(),function(){"use strict";var a=window.navigator.platform,b="MacIntel",c="Linux",d="Win32";DOM.isMac=function(){return a===b},DOM.isLinux=function(){return a===c},DOM.isWindows=function(){return a===d}}(),function(){"use strict";Dom.prototype.empty=function(){this.elements.forEach(function(a){a.outerHTML=null})},Dom.prototype.remove=function(){this.elements.forEach(function(a){a.parentNode.removeChild(a)})},Dom.prototype.detach=function(){var a=[];return this.elements.forEach(function(b){a.push(b),b.parentNode.removeChild(b)}),a},Dom.prototype.unwrap=function(){var a;this.elements.forEach(function(b){a=b.parentNode,a.outerHTML=b.outerHTML})}}(),function(){"use strict";Dom.prototype.replaceWith=function(a){a&&this.elements.forEach(function(b){b.outerHTML=a[0].outerHTML})},Dom.prototype.replaceAll=function(a){var b=this.elements[0];"create"===this.callee&&a&&a.elements.forEach(function(a){a.outerHTML=b.outerHTML})}}(),function(){"use strict";Dom.prototype.css=function(a,b){var c=[];return a?(this.elements.forEach(function(d){var e=document.defaultView.getComputedStyle(d);b?d.style[a]=b:c.push(e.getPropertyValue(a))}),b?new Dom(this.elements):"get"===this.callee?c[0]:c):void 0}}(),function(){"use strict";Dom.prototype.children=function(){var a=[];return this.elements.forEach(function(b){a.push(b.children)}),new Dom(a)}}();
//# sourceMappingURL=superdom.min.js.map