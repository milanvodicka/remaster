(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{907:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(926),o=a(928),c=a.n(o),l=a(929),s=a.n(l),m=a(1045),u=a(930),d=a(914);t.default=function(){return r.a.createElement(i.a,{breadcrumbs:[["Služby","/#sluzby"],["Servis"],["Servis audio a video zariadení"]],title:"Servis audio a video zariadení",subtitle:"Široké portfólio servisných aktivít",mainImage:c.a,intro:r.a.createElement(m.a,{variant:"body1",paragraph:!0},"Poskytujeme široké portfólio servisných aktivít."),introImage:s.a,introTitle:"Servis audio a video zariadení",offer:r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{variant:"h4",gutterBottom:!0},"Naša ponuka"),r.a.createElement(u.a,{items:["Servis audio značiek NAD, Bluesound, Dynaudio, Electrocompaniet, Meridian,","Servis gramofónov Rega, Pro-Ject,","Servis projektorov Epson, Optoma","ON-SITE servis audio-video systémov","ON-SITE servis projektorov","ON-SITE servis zasadačiek a meeting-room"]})),offerImage:s.a,offerTitle:"Naša ponuka",end:r.a.createElement(m.a,{variant:"body1"},r.a.createElement(d.a,{href:"/#kontakt"},"Kontaktujte nás")," a dohodnite si stretnutie v našom showroome.")})}},912:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(40),a(31);var n="#c52033"},913:function(e,t,a){var n;e.exports=(n=a(923))&&n.default||n},914:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(915),o=a(1037),c=a(912);t.a=function(e){var t=e.href,a=e.children,n=Object(o.a)({a:{cursor:"pointer",color:c.a,textDecoration:"none","&:hover":{textDecoration:"underline"}}})();return r.a.createElement("a",{className:n.a,onClick:function(){return Object(i.a)(t)}},a)}},915:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(24),o=a.n(i),c=a(110);a.d(t,"a",function(){return c.navigate});a(913),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},916:function(e,t,a){"use strict";a.d(t,"a",function(){return f}),a.d(t,"b",function(){return g});var n=a(0),r=a.n(n),i=a(961),o=a(1037),c=a(1045),l=a(1038),s=a(1044),m=a(941),u=a.n(m),d=a(912),p=function(e){return{typo:{color:"white",marginBottom:e.spacing(1),textAlign:"left",textShadow:"0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)",lineHeight:1.7},hero:{"& > div:nth-child(2) > div":{flex:1}},button:{color:"white",backgroundColor:d.a,"&:hover":{backgroundColor:d.a,boxShadow:"0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)"}}}},f=function(e){var t=e.title,a=e.subtitle,n=void 0===a?null:a,s=e.cta,m=void 0===s?null:s,u=e.onClick,d=void 0===u?null:u,f=e.style,g=void 0===f?{}:f,v=Object(i.a)(),b=Object(o.a)(p)();return r.a.createElement("div",{style:g},r.a.createElement(c.a,{variant:"h2",className:b.typo,style:{fontWeight:400,marginBottom:v.spacing(4)}},t),n&&r.a.createElement(c.a,{variant:"h5",className:b.typo},n),m&&d&&r.a.createElement(l.a,{variant:"contained",onClick:d,size:"large",className:b.button},m))},g=function(e){var t=e.children,a=e.imageSrc,n=e.id,i=void 0===n?null:n,c=e.fullScreen,l=void 0!==c&&c,m=Object(o.a)(p)();return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement("a",{id:i,style:{position:"relative",top:"17px"}}),r.a.createElement(u.a,{imageSrc:a,color:"black",opacity:.3,minHeight:l?"calc(100vh - 128px)":"60vh",parallaxOffset:150,className:m.hero},r.a.createElement(s.a,{style:{textAlign:"left"}},t)))};t.c=function(e){var t=e.title,a=e.subtitle,n=void 0===a?null:a,i=e.imageSrc,o=e.id,c=void 0===o?null:o,l=e.fullScreen,s=void 0!==l&&l;return r.a.createElement(g,{imageSrc:i,id:c,fullScreen:s},r.a.createElement(f,{title:t,subtitle:n}))}},917:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(942),o=a.n(i),c=a(1047);t.a=o()(function(e){var t=e.children,a=e.inViewport,i=e.innerRef,o=Object(n.useState)(!1),l=o[0],s=o[1];return a&&!l&&s(!0),r.a.createElement(c.a,{timeout:1500,in:l,ref:i},t)})},918:function(e,t,a){"use strict";a(933),a(4),a(31);var n=a(0),r=a.n(n),i=a(919),o=a(934),c=(a(935),function(e){var t=e.title,a=void 0===t?"":t,n=e.description,c=void 0===n?"":n,l=e.meta,s=void 0===l?[]:l,m=i.data.site,u=c||m.siteMetadata.description;return r.a.createElement(o.Helmet,{htmlAttributes:{lang:"sk"},title:a?a+" | "+m.siteMetadata.title:m.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:a},{property:"og:description",content:u},{property:"og:type",content:"website"}].concat(s)},r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",rel:"stylesheet"}))}),l=a(1037),s=a(1038),m=a(961),u=a(1039),d=a(1040),p=a(1041),f=a(1043),g=a(1044),v=a(1045),b=a(1046),E=a(1048),h=a(1051),x=(a(936),a(939)),y=a.n(x),k=a(940),w=a.n(k),j=a(63),O=(a(937),a(920)),S=a.n(O),N=a(912),F=Object(l.a)(function(e){var t=function(e){return{fontWeight:"normal",textTransform:"none",color:"#FFFFFF",backgroundColor:"#151515","&:hover":{backgroundColor:N.a},marginRight:e.spacing(.5),boxShadow:"none"}};return{button:t(e),buttonActive:Object.assign({},t(e),{backgroundColor:N.a}),a:{color:"#FFFFFF",textDecoration:"none"},container:{paddingTop:"128px"},socialIcon:{height:"25px !important",width:"25px !important",marginLeft:e.spacing(.5),"& .social-svg-mask:hover":{fill:"rgb(197, 32, 51) !important"}}}}),I=function(e,t){if(void 0===e&&(e=null),void 0===t&&(t=!1),window){if(!window.sscroll){var n=a(938);window.sscroll=new n}var r=window.sscroll,i=e&&document.querySelector("#"+e);r.cancelScroll();var o={speed:t?1:500,speedAsDuration:!0,easing:"easeInOutCubic"};i?r.animateScroll(i.offsetTop-130,void 0,o):r.animateScroll(0,void 0,o)}},C=function(e,t){return void 0===t&&(t=null),function(){var a=t?"/#"+t:"/";Object(j.navigate)(a),I(t),e()}};t.a=function(e){var t=e.title,a=void 0===t?"":t,i=e.children;Object(n.useEffect)(function(){window&&window.location.hash?setTimeout(function(){return I(window.location.hash.substring(1),!0)},0):I(null,!0)},[]);var o=F(),l=Object(m.a)(),x=!Object(u.a)(l.breakpoints.up("sm")),k=Object(n.useState)(null),O=k[0],T=k[1],R=function(){return T(null)},A=function(e){return function(t){var a=t.name,n=t.anchor,i=void 0===n?null:n,o=t.active,c=void 0!==o&&o;return r.a.createElement("a",{className:e.a},r.a.createElement(s.a,{variant:"contained",className:c?e.buttonActive:e.button,onClick:function(){var e=i?"/#"+i:"/";Object(j.navigate)(e),I(i)}},a))}}(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,{title:a}),r.a.createElement(d.a,null),r.a.createElement(p.a,{style:{backgroundColor:"#151515"}},r.a.createElement(f.a,{container:!0,direction:"column"},r.a.createElement(f.a,{item:!0,style:{background:"#191919",borderBottom:"1px solid #222"}},r.a.createElement(g.a,{style:{minHeight:"64px",display:"flex",alignItems:"center"}},r.a.createElement(f.a,{container:!0,justify:"space-between",direction:"row",alignItems:"center"},r.a.createElement(f.a,{item:!0},r.a.createElement(f.a,{container:!0,direction:"row",alignItems:"center"},r.a.createElement(y.a,{fontSize:"small"}),r.a.createElement(v.a,{variant:"body2"},r.a.createElement("a",{href:"tel:+421907574291",style:{color:"#FFF",textDecoration:"none"}},"+421 907 574 291")))),r.a.createElement(f.a,{item:!0},!1,!1)))),r.a.createElement(f.a,{item:!0},r.a.createElement(g.a,{style:{minHeight:"64px",display:"flex",alignItems:"center"}},r.a.createElement(f.a,{container:!0,justify:"space-between",alignItems:"center"},r.a.createElement(f.a,{item:!0},r.a.createElement("a",{className:o.a,href:"#",onClick:function(e){Object(j.navigate)("/"),I(),e.preventDefault()}},r.a.createElement("img",{src:S.a,alt:"AV Integra",height:"36px"}))),r.a.createElement(f.a,{item:!0},!x&&r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{name:"Domov"}),r.a.createElement(A,{name:"Služby",anchor:"sluzby"}),r.a.createElement(A,{name:"O nás",anchor:"onas"}),r.a.createElement(A,{name:"Kontakt",anchor:"kontakt"})),x&&r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{size:"small",onClick:function(e){return T(e.currentTarget)}},r.a.createElement(w.a,{style:{color:N.a}})),r.a.createElement(E.a,{id:"simple-menu",anchorEl:O,keepMounted:!0,open:!!O,onClose:R},r.a.createElement(h.a,{onClick:C(R)},"Domov"),r.a.createElement(h.a,{onClick:C(R,"sluzby")},"Služby"),r.a.createElement(h.a,{onClick:C(R,"onas")},"O nás"),r.a.createElement(h.a,{onClick:C(R,"kontakt")},"Kontakt"))))))))),r.a.createElement("div",{className:o.container},i))}},919:function(e){e.exports={data:{site:{siteMetadata:{title:"Remaster",description:"Your integration partner in smart, secure and multimedia appliances."}}}}},920:function(e,t,a){e.exports=a.p+"static/av-integra-servis-4b9e51ead3740074bb12aa43ab920a3a.svg"},921:function(e,t,a){"use strict";a(31);var n=a(961),r=a(0);t.a=function(e){var t=e.children,a=e.margin,i=void 0!==a&&a,o=e.spacing,c=void 0===o?6:o,l=Object(n.a)().spacing(c);return Object(r.cloneElement)(t,{style:Object.assign({},i?{marginTop:l}:{paddingTop:l},t.props.style||{})})}},922:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1037),o=a(1044),c=a(1050),l=a(1045),s=a(914);t.a=function(e){var t=e.breadcrumbs,a=Object(i.a)(function(e){return{wrapper:{background:"#191919"},container:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},separator:{color:"#fff"},typo:{color:"#fff"}}})();return r.a.createElement("div",{className:a.wrapper},r.a.createElement(o.a,{className:a.container},r.a.createElement(c.a,{classes:{separator:a.separator}},t.map(function(e){var t=e[0],n=e[1];return n?r.a.createElement(s.a,{href:n},r.a.createElement(l.a,{variant:"body2"},t)):r.a.createElement(l.a,{variant:"body2",className:a.typo},t)}))))}},923:function(e,t,a){"use strict";a.r(t);a(31);var n=a(0),r=a.n(n),i=a(24),o=a.n(i),c=a(157),l=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},924:function(e,t,a){"use strict";a(31);var n=a(1037),r=a(1043),i=a(917),o=a(0),c=a.n(o),l=function(e){var t=e.image,a=e.alt,r=Object(n.a)(function(e){return{image:{display:"block",width:"100%",height:"auto",borderRadius:"5px"}}})();return c.a.createElement(i.a,null,c.a.createElement("img",{className:r.image,src:t,alt:a}))};t.a=function(e){var t=e.reverse,a=void 0!==t&&t,i=e.children,o=e.image,s=e.alt,m=e.grid,u=void 0===m?[6,6]:m,d=e.style,p=void 0===d?{}:d,f=Object(n.a)(function(e){var t,n;return{imageGrid:(t={},t[e.breakpoints.only("xs")]=Object.assign({},a?{marginBottom:e.spacing(6)}:{marginTop:e.spacing(6)}),t[e.breakpoints.up("sm")]=Object.assign({},a?{paddingRight:e.spacing(2)}:{paddingLeft:e.spacing(2)}),t),textGrid:(n={},n[e.breakpoints.up("sm")]=Object.assign({},a?{paddingLeft:e.spacing(2)}:{paddingRight:e.spacing(2)}),n)}})(),g=u[0],v=u[1],b=function(){return c.a.createElement(r.a,{item:!0,sm:g,className:f.textGrid},i)},E=function(){return c.a.createElement(r.a,{item:!0,sm:v,className:f.imageGrid},c.a.createElement(l,{image:o,alt:s}))};return a?c.a.createElement(r.a,{container:!0,alignItems:"center",style:p},c.a.createElement(E,null),c.a.createElement(b,null)):c.a.createElement(r.a,{container:!0,alignItems:"center",style:p},c.a.createElement(b,null),c.a.createElement(E,null))}},925:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#d5d5d5",A200:"#aaaaaa",A400:"#303030",A700:"#616161"};t.default=n},926:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(918),o=a(916),c=a(921),l=a(924),s=a(1044),m=a(1043),u=a(922);t.a=function(e){var t=e.title,a=e.subtitle,n=e.mainImage,d=e.intro,p=e.offer,f=e.offerImage,g=e.offerTitle,v=e.properties,b=e.end,E=e.breadcrumbs,h=void 0===E?[]:E;return r.a.createElement(i.a,null,r.a.createElement(o.c,{title:t,subtitle:a,imageSrc:n}),h&&r.a.createElement(u.a,{breadcrumbs:h}),r.a.createElement(s.a,null,r.a.createElement(c.a,null,r.a.createElement(m.a,{container:!0},r.a.createElement(m.a,{item:!0,sm:12},d))),p&&r.a.createElement(c.a,null,r.a.createElement(l.a,{image:f,alt:g,grid:[8,4]},p)),v&&r.a.createElement(c.a,null,r.a.createElement(m.a,{container:!0},r.a.createElement(m.a,{item:!0,sm:12},v))),b&&r.a.createElement(c.a,null,b)),r.a.createElement("div",{style:{height:"33vh"}}))}},928:function(e,t,a){e.exports=a.p+"static/main-default-a64fc799c3d2b05ce4650d2714faaf1d.jpg"},929:function(e,t,a){e.exports=a.p+"static/default-c903714388615bc2c3ae3b7289f5fa15.jpg"},930:function(e,t,a){"use strict";var n=a(1037),r=a(0),i=a.n(r),o=a(925),c=a.n(o);t.a=function(e){var t=e.items,a=void 0===t?[]:t,r=Object(n.a)(function(e){return{list:{margin:0,padding:0,paddingLeft:e.spacing(4)},listItem:{marginBottom:e.spacing(2),color:c.a[800]}}})();return i.a.createElement("ul",{className:r.list},a.map(function(e,t){return i.a.createElement("li",{key:t,className:r.listItem},e)}))}}}]);
//# sourceMappingURL=component---src-pages-servis-servis-audio-video-zariadeni-js-cf79a6307a0499dbd006.js.map