(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+22N":function(e,t,a){"use strict";var o=a("dI71"),l=a("dwco"),n=a.n(l),r=a("q1tI"),i=a.n(r),c=function(e){return e.children},s=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}Object(o.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){n.a.polyfill()},a.handleClick=function(e){e.preventDefault();var t=0,a=!0,o=this.props,l=o.type,n=o.element,r=o.offset,i=o.timeout;if(l&&n)switch(l){case"class":a=!!(t=document.getElementsByClassName(n)[0]);break;case"id":a=!!(t=document.getElementById(n))}a?this.scrollTo(t,r,i):console.log("Element not found: "+n)},a.scrollTo=function(e,t,a){void 0===t&&(t=-150),void 0===a&&(a=null);var o=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout((function(){window.scroll({top:o+t,left:0,behavior:"smooth"})}),a):window.scroll({top:o+t,left:0,behavior:"smooth"})},a.render=function(){return i.a.createElement(c,null,"object"==typeof this.props.children?i.a.cloneElement(this.props.children,{onClick:this.handleClick}):i.a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(i.a.Component);t.a=s},dwco:function(e,t,a){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var a,o=e.HTMLElement||e.Element,l={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:o.prototype.scroll||i,scrollIntoView:o.prototype.scrollIntoView},n=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,r=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?f.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):l.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?l.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):f.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var e=arguments[0].left,t=arguments[0].top;f.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var a=m(this),o=a.getBoundingClientRect(),n=this.getBoundingClientRect();a!==t.body?(f.call(this,a,a.scrollLeft+n.left-o.left,a.scrollTop+n.top-o.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})}else l.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function i(e,t){this.scrollLeft=e,this.scrollTop=t}function c(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(e,t){return"Y"===t?e.clientHeight+r<e.scrollHeight:"X"===t?e.clientWidth+r<e.scrollWidth:void 0}function p(t,a){var o=e.getComputedStyle(t,null)["overflow"+a];return"auto"===o||"scroll"===o}function u(e){var t=s(e,"Y")&&p(e,"Y"),a=s(e,"X")&&p(e,"X");return t||a}function m(e){for(;e!==t.body&&!1===u(e);)e=e.parentNode||e.host;return e}function d(t){var a,o,l,r,i=(n()-t.startTime)/468;r=i=i>1?1:i,a=.5*(1-Math.cos(Math.PI*r)),o=t.startX+(t.x-t.startX)*a,l=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,o,l),o===t.x&&l===t.y||e.requestAnimationFrame(d.bind(e,t))}function f(a,o,r){var c,s,p,u,m=n();a===t.body?(c=e,s=e.scrollX||e.pageXOffset,p=e.scrollY||e.pageYOffset,u=l.scroll):(c=a,s=a.scrollLeft,p=a.scrollTop,u=i),d({scrollable:c,method:u,startTime:m,startX:s,startY:p,x:o,y:r})}}}}()},nWR2:function(e,t,a){e.exports=a.p+"static/logo-dbb66ae34be79897aab24525ff76459c.png"},qTMf:function(e,t,a){"use strict";a.r(t);var o=a("q1tI"),l=a.n(o),n=a("7oih"),r=a("rY4l"),i=a("JwsL"),c=a("Ce9n"),s=a.n(c),p=a("+22N");t.default=function(){return l.a.createElement(n.a,null,l.a.createElement(r.a,null),l.a.createElement("section",{id:"banner"},l.a.createElement("div",{className:"policy",id:"first"},l.a.createElement("header",null,l.a.createElement("h2",null,"Polityka Prywatności")),l.a.createElement("p",null,l.a.createElement("i",null,"Działając zgodnie z art. 13 ust. 1 Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (Dz.U.UE.L.2016.119.1)"),", dalej jako: „RODO” informujemy, iż:"),l.a.createElement("br",null),l.a.createElement("p",null,"Administratorem Państwa danych osobowych jest EVENTARYZACJA Marek Sirecki z siedzibą w Łodzi (94-102), przy ul. Maratońskiej 29/7 reprezentujący się numerem NIP: 726-237-80-97."),l.a.createElement("br",null),l.a.createElement("p",null,"W sprawach dotyczących przetwarzania danych osobowych prosimy o kontakt pod adresem e-mail: ",l.a.createElement("a",{href:"mailto:profesjonalnefrezowaniepni@gmail.com"},"profesjonalnefrezowaniepni@gmail.com"),"."),l.a.createElement("br",null),l.a.createElement("p",null,"Pani/Pana dane osobowe zawarte w wiadomościach poczty elektronicznej będą przetwarzane w celu realizacji zapytania/zgłoszenia na podstawie art. 6 ust. 1 lit. a) RODO, oraz będą udostępniane:"),l.a.createElement("ol",null,l.a.createElement("li",null,"podmiotom dostarczającym i wspierającym systemy teleinformatyczne EVENTARYZACJA Marek Sirecki w celu obsługi domeny frezowaniepni.com"),l.a.createElement("li",null,"podmiotom, którym EVENTARYZACJA Marek Sirecki ma obowiązek przekazywać dane na gruncie obowiązujących przepisów prawa")),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("i",null,"Dane osobowe będą przechowywane do czasu realizacji celu, dla którego zostały zebrane, a następnie przez okres niezbędny do zabezpieczenia ewentualnych roszczeń związanych z przetwarzaniem danych.")),l.a.createElement("br",null),l.a.createElement("p",null,"Ma Pan/Pani prawo do:"),l.a.createElement("ol",null,l.a.createElement("li",null,"dostępu do treści swoich danych oraz ich sprostowania, usunięcia lub ograniczenia przetwarzania"),l.a.createElement("li",null,"wniesienia sprzeciwu wobec przetwarzania"),l.a.createElement("li",null,"przenoszenia danych"),l.a.createElement("li",null,"cofnięcia zgody na przetwarzanie danych w dowolnym momencie"),l.a.createElement("li",null,"wniesienia skargi do organu nadzorczego – Prezesa Urzędu Ochrony Danych Osobowych, gdy uzna Pani/Pan, iż przetwarzanie Pani/Pana danych osobowych narusza przepisy RODO")),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("i",null,"Podanie danych jest dobrowolne, ale niezbędne do realizacji powyższego celu. Przesyłanie wiadomości drogą elektroniczną na elektroniczny adres pocztowy profesjonalnefrezowaniepni@gmail.com wiąże się z automatycznym wyrażeniem zgody na przetwarzanie Pani/Pana danych osobowych przez EVENTARYZACJA Marek Sirecki w celu realizacji zapytania/zgłoszenia.")),l.a.createElement("br",null),l.a.createElement(p.a,{type:"id",element:"contact"},l.a.createElement("a",{href:"#contact",className:"icon-scroll"})))),l.a.createElement("article",{className:"container box style1 right dark",id:"contact"},l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:s.a,alt:""})),l.a.createElement("div",{className:"inner"},l.a.createElement("header",null,l.a.createElement("h2",null,"Kontakt Zamówienia i Obsługa Klienta")),l.a.createElement("p",null,"Jesteś już naszym zadowolonym klientem lub chcesz się nim stać?",l.a.createElement("br",null),"A może Masz pytania, uwagi, sugestie? Skontaktuj się z nami już teraz!"),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("a",{href:"tel:+510277799",target:"_blank"},"+48 510 277 799")),l.a.createElement("p",null,l.a.createElement("a",{href:"profesjonalnefrezowaniepni@gmail.com",target:"_blank"},"Napisz do nas!")))),l.a.createElement(i.a,null))}},rY4l:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var o=a("q1tI"),l=a.n(o),n=a("+22N"),r=a("nWR2"),i=a.n(r);function c(e){e.title,e.heading,e.avatar;return l.a.createElement("section",{id:"header"},l.a.createElement("header",null,l.a.createElement("a",{href:"/"},l.a.createElement("img",{src:i.a,alt:"",className:"logo"})),l.a.createElement("p",null,"Kompletna usługa na Twoich warunkach")),l.a.createElement(n.a,{type:"id",element:"first"},l.a.createElement("a",{href:"#first",className:"icon-scroll"})))}}}]);
//# sourceMappingURL=component---src-pages-privacy-js-1d9ae3ba9b6f4a53f48d.js.map