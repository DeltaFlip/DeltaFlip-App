(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[22],{1700:function(t,e,n){"use strict";n.r(e);n(0);var r=n(78),c=n(738),i=n(896),a=n(1178),o=n(1);e.default=function(){var t=Object(r.i)().collectionAddress,e=Object(c.e)(t);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i.a,{collection:e}),Object(o.jsx)(a.a,{collection:e})]})}},768:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var r,c,i=n(4),a=n(74),o=n(13),s=(n(0),n(8)),u=n(1),l=["size","stroke"],b=Object(s.f)(r||(r=Object(o.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),d=s.e.svg(c||(c=Object(o.a)(["\n  animation: 2s "," linear infinite;\n  height: ",";\n  width: ",";\n  path {\n    stroke: ",";\n  }\n"])),b,(function(t){return t.size}),(function(t){return t.size}),(function(t){var e=t.stroke,n=t.theme;return null!==e&&void 0!==e?e:n.colors.primary}));function j(t){var e=t.size,n=void 0===e?"16px":e,r=t.stroke,c=Object(a.a)(t,l);return Object(u.jsx)(d,Object(i.a)(Object(i.a)({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",size:n,stroke:r},c),{},{children:Object(u.jsx)("path",{d:"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})}))}},786:function(t,e,n){"use strict";var r,c,i,a=n(3),o=n.n(a),s=n(9),u=n(4),l=n(11),b=n(74),d=n(13),j=n(0),O=n(2),f=n(8),p=n(44),h=n(16),x=n(768),m=n(1),g=["onValidAddress","onAddressClick"];!function(t){t[t.NOT_VALID=0]="NOT_VALID",t[t.FOUND=1]="FOUND",t[t.NOT_FOUND=2]="NOT_FOUND"}(i||(i={}));var v=f.e.div(r||(r=Object(d.a)(["\n  align-items: center;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 0 0 "," ",";\n  left: 0;\n  padding-bottom: 8px;\n  padding-top: 16px;\n  position: absolute;\n  top: calc(100% - 12px);\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  width: 100%;\n  z-index: 15;\n\n  ","\n"])),(function(t){return t.theme.colors.input}),(function(t){return t.theme.colors.inputSecondary}),(function(t){return t.theme.radii.default}),(function(t){return t.theme.radii.default}),(function(t){return t.isOpen&&"\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  "})),k=Object(f.e)(O.Ac)(c||(c=Object(d.a)(["\n  cursor: pointer;\n  overflow-wrap: break-word;\n  font-weight: bold;\n  padding-left: 16px;\n  padding-right: 16px;\n"]))),A={isFetching:!1,resultFound:i.NOT_VALID,value:""},w=function(){return Promise.resolve(!0)};e.a=function(t){var e=t.onValidAddress,n=void 0===e?w:e,r=t.onAddressClick,c=Object(b.a)(t,g),a=Object(j.useState)(A),d=Object(l.a)(a,2),f=d[0],F=d[1],y=Object(h.b)().t,N=f.isFetching,D=f.resultFound,I=f.value;return Object(j.useEffect)((function(){!1!==Object(p.j)(I)?function(){var t=Object(s.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,F((function(t){return Object(u.a)(Object(u.a)({},t),{},{isFetching:!0})})),t.next=4,n(I);case 4:e=t.sent,F((function(t){return Object(u.a)(Object(u.a)({},t),{},{isFetching:!1,resultFound:e?i.FOUND:i.NOT_FOUND})})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),F((function(t){return Object(u.a)(Object(u.a)({},t),{},{isFetching:!1})}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}()():F((function(t){return Object(u.a)(Object(u.a)({},t),{},{resultFound:i.NOT_VALID})}))}),[I,n,F]),Object(m.jsxs)(O.o,Object(u.a)(Object(u.a)({position:"relative"},c),{},{children:[Object(m.jsx)(O.ib,{placeholder:y("Search %subject%",{subject:y("Address").toLowerCase()}),value:f.value,onChange:function(t){var e=t.target.value;F((function(t){return Object(u.a)(Object(u.a)({},t),{},{value:e})}))},style:{position:"relative",zIndex:16,paddingRight:"40px"}}),N&&Object(m.jsx)(O.o,{position:"absolute",top:"12px",right:"16px",style:{zIndex:17},children:Object(m.jsx)(x.a,{})}),Object(m.jsx)(v,{isOpen:D!==i.NOT_VALID,children:D===i.FOUND?Object(m.jsx)(k,{onClick:function(){F(A),r(f.value)},children:f.value}):Object(m.jsx)(O.Ac,{px:"16px",fontWeight:"bold",children:y("No results found.")})})]}))}},794:function(t,e,n){"use strict";var r=n(4),c=(n(0),n(395)),i=n(128),a=n(1);e.a=function(t){var e=Object(i.a)().theme.isDark?"linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)":"linear-gradient(111.68deg, #f2ecf2 0%, #e8f2f6 100%)";return Object(a.jsx)(c.a,Object(r.a)({background:e},t))}},795:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r,c=n(13),i=n(4),a=n(74),o=(n(0),n(8)),s=n(2),u=n(1),l=["title","stat"],b=function(t){var e=t.title,n=t.stat,r=Object(a.a)(t,l);return Object(u.jsxs)(s.o,Object(i.a)(Object(i.a)({},r),{},{children:[Object(u.jsx)(s.Ac,{fontSize:"12px",color:"textSubtle",textAlign:"center",children:e}),null===n?Object(u.jsx)(s.gc,{height:"24px",width:"50%",mx:"auto"}):Object(u.jsx)(s.Ac,{fontWeight:"600",textAlign:"center",children:n})]}))},d=Object(o.e)(s.Z)(r||(r=Object(c.a)(["\n  align-items: center;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  justify-content: space-around;\n  padding: 8px;\n  width: 100%;\n"])),(function(t){return t.theme.colors.invertedContrast}),(function(t){return t.theme.colors.cardBorder}),(function(t){return t.theme.radii.card}));e.b=d},819:function(t,e,n){"use strict";var r,c=n(13),i=n(8).e.div.attrs((function(t){return{alt:t.alt}}))(r||(r=Object(c.a)(["\n  background: url('","');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 96px;\n  height: 96px;\n  border: 4px "," solid;\n\n  & > img {\n    border-radius: 50%;\n  }\n"])),(function(t){return t.src}),(function(t){return t.borderColor||"#f2ecf2"}));e.a=i},842:function(t,e,n){"use strict";var r=n(4),c=(n(0),n(78)),i=n(786),a=n(107),o=n(1);e.a=function(t){var e=Object(c.g)();return Object(o.jsx)(i.a,Object(r.a)({onAddressClick:function(t){e.push("".concat(a.a,"/profile/").concat(t))}},t))}},843:function(t,e,n){"use strict";var r=n(4),c=n(74),i=(n(0),n(2)),a=n(1),o=["title","description","children"];e.a=function(t){var e=t.title,n=t.description,s=t.children,u=Object(c.a)(t,o);return Object(a.jsxs)(i.ab,Object(r.a)(Object(r.a)({gridGap:"16px",alignItems:"center",gridTemplateColumns:["1fr",null,null,null,"repeat(2, 1fr)"]},u),{},{children:[Object(a.jsxs)(i.o,{children:[Object(a.jsx)(i.bb,{as:"h1",scale:"xl",color:"secondary",mb:"16px",children:e}),n]}),Object(a.jsx)(i.o,{children:s})]}))}},846:function(t,e,n){"use strict";var r,c=n(13),i=n(2),a=n(8),o=Object(a.e)(i.qc)(r||(r=Object(c.a)(["\n  background-color: transparent;\n  border-bottom: 1px "," solid;\n"])),(function(t){return t.theme.colors.cardBorder}));e.a=o},852:function(t,e,n){"use strict";var r,c=n(4),i=n(74),a=(n(0),n(2)),o=n(13),s=n(8).e.div.attrs((function(t){return{alt:t.alt}}))(r||(r=Object(o.a)(["\n  ",";\n  background-image: url('","');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  flex: none;\n  width: 100%;\n  border-radius: 32px;\n  height: 123px;\n\n  "," {\n    height: 192px;\n  }\n\n  "," {\n    height: 256px;\n  }\n"])),(function(t){var e=t.src,n=t.theme;return e?"background-image: url('".concat(e,"')"):"background-color: ".concat(n.colors.cardBorder)}),(function(t){return t.src}),(function(t){return t.theme.mediaQueries.sm}),(function(t){return t.theme.mediaQueries.md})),u=n(1),l=["bannerImage","bannerAlt","avatar","children"];e.a=function(t){var e=t.bannerImage,n=t.bannerAlt,r=t.avatar,o=t.children,b=Object(i.a)(t,l);return Object(u.jsx)(a.Z,Object(c.a)(Object(c.a)({flexDirection:"column",mb:"24px"},b),{},{children:Object(u.jsxs)(a.o,{position:"relative",pb:"56px",children:[Object(u.jsx)(s,{src:e,alt:n}),Object(u.jsx)(a.o,{position:"absolute",bottom:0,left:-4,children:Object(u.jsxs)(a.Z,{alignItems:"flex-end",children:[r,o]})})]})}))}},896:function(t,e,n){"use strict";var r,c=n(0),i=n(78),a=n(2),o=n(24),s=n(16),u=n(281),l=n(794),b=n(843),d=n(795),j=n(852),O=n(819),f=n(846),p=n(107),h=n(13),x=n(172),m=n(8),g=n(842),v=n(1),k=Object(m.e)(x.a)(r||(r=Object(h.a)(["\n  align-items: center;\n  color: ",";\n  display: inline-flex;\n  font-weight: 600;\n"])),(function(t){return t.theme.colors.primary})),A=function(){var t=Object(s.b)().t;return Object(v.jsxs)(a.Z,{alignItems:"center",justifyContent:"space-between",mb:"24px",children:[Object(v.jsxs)(k,{to:"".concat(p.a,"/collections"),children:[Object(v.jsx)(a.L,{color:"primary",width:"24px"}),t("All Collections")]}),Object(v.jsx)(a.o,{children:Object(v.jsx)(g.a,{})})]})},w=n(4),F=n(3),y=n.n(F),N=n(9),D=n(11),I=n(74),C=n(70),L=["collectionAddress"],z=function(t){var e=t.collectionAddress,n=Object(I.a)(t,L),r=Object(c.useState)(null),i=Object(D.a)(r,2),a=i[0],o=i[1],u=Object(s.b)().t;Object(c.useEffect)((function(){(function(){var t=Object(N.a)(y.a.mark((function t(){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(C.n)(e);case 2:n=t.sent,o(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e,o]);var l=null===a?null:a.toLocaleString(void 0,{minimumFractionDigits:3,maximumFractionDigits:3});return Object(v.jsx)(d.a,Object(w.a)({title:u("Lowest (%symbol%)",{symbol:"BNB"}),stat:l},n))};e.a=function(t){var e=t.collection,n=Object(i.i)().collectionAddress,r=e.totalSupply,c=e.numberTokensListed,h=e.totalVolumeBNB,x=e.banner,m=e.avatar,g=Object(s.b)().t,k=Object(i.h)(),w=k.pathname,F=k.hash,y=h?parseFloat(h).toLocaleString(void 0,{minimumFractionDigits:3,maximumFractionDigits:3}):"0",N=[{label:g("Items"),href:"".concat(p.a,"/collections/").concat(n,"#items")},{label:g("Traits"),href:"".concat(p.a,"/collections/").concat(n,"#traits")},{label:g("Activity"),href:"".concat(p.a,"/collections/").concat(n,"#activity")}];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(l.a,{children:[Object(v.jsx)(A,{}),Object(v.jsx)(j.a,{bannerImage:x.large,avatar:Object(v.jsx)(O.a,{src:m})}),Object(v.jsx)(b.a,{title:e.name,description:e.description?Object(v.jsx)(a.Ac,{color:"textSubtle",children:g(e.description)}):null,children:Object(v.jsxs)(d.b,{children:[Object(v.jsx)(d.a,{title:g("Items"),stat:Object(o.e)(Number(r),0,0)}),Object(v.jsx)(d.a,{title:g("Items listed"),stat:c?Object(o.e)(Number(c),0,0):"0"}),Object(v.jsx)(z,{collectionAddress:e.address}),Object(v.jsx)(d.a,{title:g("Vol. (%symbol%)",{symbol:"BNB"}),stat:y})]})})]}),Object(v.jsx)(u.a,{children:Object(v.jsx)(f.a,{items:N,activeItem:"".concat(w).concat(F||"#items"),mt:"24px",mb:"8px"})})]})}}}]);
//# sourceMappingURL=22.0741a87f.chunk.js.map