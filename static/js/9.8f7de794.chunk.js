(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[9],{1001:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(31),r=n(54),i=n(72),s=function(e){var t=e.askOrders,n=void 0===t?[]:t,s=e.transactions,a=void 0===s?[]:s,o=[].concat(Object(c.a)(n.map((function(e){return{marketEvent:function(e){switch(e){case i.a.CANCEL:return i.b.CANCEL;case i.a.MODIFY:return i.b.MODIFY;case i.a.NEW:return i.b.NEW;default:return i.b.MODIFY}}(e.orderType),price:e.askPrice,timestamp:e.timestamp,nft:e.nft,tx:e.id,seller:null===e||void 0===e?void 0:e.seller.id}}))),Object(c.a)(a.map((function(e){var t=i.b.SELL,n=e.timestamp,c=e.nft;return{marketEvent:t,price:e.askPrice,timestamp:n,nft:c,tx:e.id,buyer:e.buyer.id,seller:e.seller.id}}))));return o.length>0?o.sort((function(e,t){var n=r.a.BigNumber.from(e.timestamp);return r.a.BigNumber.from(t.timestamp).sub(n).toNumber()})):[]}},1178:function(e,t,n){"use strict";var c,r,i,s,a=n(4),o=n(3),l=n.n(o),j=n(9),b=n(11),d=n(0),u=n(79),x=n(44),O=n(60),h=n(2),m=n(70),f=n(281),p=n(892),g=n(16),v=n(209),y=n(128),w=n(410),A=n(738),k=n(844),C=n(796),S=n(13),P=n(8),F=n(397),D=n.n(F),I=n(72),E=n(74),Z=n(284),L=n(1),N=["collectionAddress"],B=function(e){var t=e.collectionAddress,n=Object(E.a)(e,N),c=Object(O.b)(),r=Object(g.b)().t;return Object(L.jsx)(h.t,Object(a.a)(Object(a.a)({variant:"text",scale:"sm",onClick:function(){c(Object(Z.l)(t))}},n),{},{children:r("Clear")}),"clear-all")},T=Object(P.e)(h.t)(c||(c=Object(S.a)(["\n  ","\n"])),(function(e){return e.hasItem&&"  \n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    padding-right: 8px;\n  "})),z=Object(P.e)(h.eb)(r||(r=Object(S.a)(["\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n"]))),M=function(e,t){switch(t){case I.b.CANCEL:return e("Delisted");case I.b.MODIFY:return e("Modified");case I.b.NEW:return e("Listed");case I.b.SELL:return e("Sold");default:return""}},W=function(e){var t=e.eventType,n=e.collectionAddress,c=Object(A.h)(n),r=Object(O.b)(),i=Object(g.b)().t,s=c.typeFilters.some((function(e){return e===t}));return Object(L.jsxs)(h.Z,{alignItems:"center",mr:"4px",mb:"4px",children:[Object(L.jsx)(h.o,{children:Object(L.jsx)(T,{onClick:function(){s||r(Object(Z.a)({collection:n,field:t}))},variant:s?"subtle":"light",scale:"sm",hasItem:s,children:M(i,t)})}),s&&Object(L.jsx)(z,{variant:s?"subtle":"light",scale:"sm",onClick:function(){r(Object(Z.k)({collection:n,field:t}))},children:Object(L.jsx)(h.P,{color:"currentColor",width:"18px"})})]})},Y=Object(P.e)(h.Z)(i||(i=Object(S.a)(["\n  gap: 16px;\n\n  "," {\n    align-items: center;\n    flex-grow: 2;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),U=Object(P.e)(h.Z)(s||(s=Object(S.a)(["\n  align-items: center;\n  flex: 1;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n\n  "," {\n    flex-wrap: wrap;\n    overflow-x: revert;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),J=function(e){var t=(e.collection||{address:""}).address,n=Object(g.b)().t,c=Object(A.h)(t);return Object(L.jsxs)(Y,{justifyContent:"space-between",flexDirection:["column","column","row"],children:[Object(L.jsx)(h.Ac,{textTransform:"uppercase",color:"textSubtle",fontSize:"12px",bold:!0,children:n("Filter by")}),Object(L.jsx)(U,{children:[I.b.NEW,I.b.CANCEL,I.b.MODIFY,I.b.SELL].map((function(e){return Object(L.jsx)(W,{eventType:e,collectionAddress:t},e)}))}),D()(c.typeFilters)?null:Object(L.jsx)(B,{collectionAddress:t})]})},H=n(895),Q=n(1001);t.a=function(e){var t=e.collection,n=Object(O.b)(),c=(t||{address:""}).address,r=Object(A.h)(c),i=Object(y.a)().theme,s=Object(g.b)().t,o=Object(d.useState)({activity:[],currentPage:1,maxPage:1}),S=Object(b.a)(o,2),P=S[0],F=S[1],D=Object(d.useState)([]),I=Object(b.a)(D,2),E=I[0],Z=I[1],N=Object(d.useState)([]),B=Object(b.a)(N,2),T=B[0],z=B[1],M=Object(d.useState)(!0),W=Object(b.a)(M,2),Y=W[0],U=W[1],X=Object(d.useState)(!1),R=Object(b.a)(X,2),$=R[0],q=R[1],V=Object(d.useState)(1),G=Object(b.a)(V,2),K=G[0],_=G[1],ee=Object(w.a)(),te=ee.lastUpdated,ne=ee.setLastUpdated,ce=Object(v.b)(),re=Object(h.dd)(),ie=re.isXs,se=re.isSm,ae=JSON.stringify(r);return Object(d.useEffect)((function(){var e=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,U(!0),t=JSON.parse(ae),e.next=5,Object(m.f)(c.toLowerCase(),t,100);case 5:n=e.sent,r=Object(Q.a)(n),F({activity:r,currentPage:1,maxPage:Math.ceil(r.length/8)||1}),U(!1),q(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error("Failed to fetch collection activity",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();(c&&Object(x.j)(c)||""===c)&&e()}),[n,c,ae,te]),Object(d.useEffect)((function(){var e=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(u.uniqBy)(E.map((function(e){return{tokenId:e.nft.tokenId,collectionAddress:e.nft.collection.id}})),"tokenId"),e.next=3,Object(m.t)(t);case 3:n=e.sent,z(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();E.length>0&&e()}),[E]),Object(d.useEffect)((function(){var e=P.activity.slice(8*(P.currentPage-1),8*P.currentPage);Z(e)}),[P]),Object(L.jsxs)(h.o,{py:"32px",children:[Object(L.jsx)(f.a,{px:[0,null,"24px"],children:Object(L.jsxs)(h.Z,{style:{gap:"16px",padding:"0 16px"},alignItems:[null,null,"center"],flexDirection:["column","column","row"],children:[Object(L.jsx)(J,{collection:t}),Object(L.jsx)(h.t,{scale:"sm",disabled:Y,onClick:function(){ne()},children:s("Refresh")})]})}),Object(L.jsx)(f.a,{children:0!==P.activity.length||0!==T.length||0!==E.length||Y?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(h.wc,{children:[Object(L.jsx)("thead",{children:Object(L.jsxs)("tr",{children:[Object(L.jsxs)(h.Cc,{textAlign:["center",null,"left"],children:[" ",s("Item")]}),Object(L.jsxs)(h.Cc,{textAlign:"right",children:[" ",s("Event")]}),ie||se?null:Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(h.Cc,{textAlign:"right",children:[" ",s("Price")]}),Object(L.jsxs)(h.Cc,{textAlign:"center",children:[" ",s("From")]}),Object(L.jsxs)(h.Cc,{textAlign:"center",children:[" ",s("To")]})]}),Object(L.jsxs)(h.Cc,{textAlign:"center",children:[" ",s("Date")]}),ie||se?null:Object(L.jsx)(h.Cc,{})]})}),Object(L.jsx)("tbody",{children:$?E.map((function(e){var t=T.find((function(t){return t.tokenId===e.nft.tokenId}));return Object(L.jsx)(H.a,{activity:e,nft:t,bnbBusdPrice:ce},"".concat(e.marketEvent,"#").concat(e.nft.tokenId,"#").concat(e.timestamp,"#").concat(e.tx))})):Object(L.jsx)(p.a,{})})]}),Object(L.jsx)(h.Z,{borderTop:"1px ".concat(i.colors.cardBorder," solid"),pt:"24px",flexDirection:"column",justifyContent:"space-between",height:"100%",children:Object(L.jsxs)(k.b,{children:[Object(L.jsx)(k.a,{onClick:function(){1!==P.currentPage&&F((function(e){return Object(a.a)(Object(a.a)({},e),{},{currentPage:e.currentPage-1})}))},children:Object(L.jsx)(h.c,{color:1===P.currentPage?"textDisabled":"primary"})}),Object(L.jsx)(h.Ac,{children:s("Page %page% of %maxPage%",{page:P.currentPage,maxPage:P.maxPage})}),Object(L.jsx)(k.a,{onClick:Object(j.a)(l.a.mark((function e(){var t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(P.currentPage===P.maxPage){e.next=18;break}if(F((function(e){return Object(a.a)(Object(a.a)({},e),{},{currentPage:e.currentPage+1})})),P.maxPage-P.currentPage!==1||P.activity.length!==100*K){e.next=18;break}return e.prev=3,U(!0),t=JSON.parse(ae),e.next=8,Object(m.f)(c.toLowerCase(),t,100*(K+1));case 8:n=e.sent,r=Object(Q.a)(n),F((function(e){return Object(a.a)(Object(a.a)({},e),{},{activity:r,maxPage:Math.ceil(r.length/8)||1})})),U(!1),_((function(e){return e+1})),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.error("Failed to fetch collection activity",e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])}))),children:Object(L.jsx)(h.f,{color:P.currentPage===P.maxPage?"textDisabled":"primary"})})]})})]}):Object(L.jsxs)(h.Z,{p:"24px",flexDirection:"column",alignItems:"center",children:[Object(L.jsx)(C.a,{}),Object(L.jsx)(h.Ac,{pt:"8px",bold:!0,children:s("No NFT market history found")})]})})]})}},765:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var c,r,i,s,a=n(13),o=n(8),l=n(2),j=Object(o.e)(l.o)(c||(c=Object(a.a)(["\n  width: ",";\n  border-radius: 16px;\n  padding: 1.25rem;\n  padding: ",";\n  border: ",";\n  border-radius: ",";\n  background-color: ",";\n"])),(function(e){var t=e.width;return null!==t&&void 0!==t?t:"100%"}),(function(e){return e.padding}),(function(e){return e.border}),(function(e){return e.borderRadius}),(function(e){return e.theme.colors.background}));t.c=j;var b=Object(o.e)(j)(r||(r=Object(a.a)(["\n  border: 1px solid ",";\n  background-color: ",";\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.backgroundAlt})),d=Object(o.e)(j)(i||(i=Object(a.a)(["\n  border: 1px solid ",";\n  background-color: ",";\n"])),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.colors.background}));Object(o.e)(j)(s||(s=Object(a.a)(["\n  background-color: ",";\n"])),(function(e){return e.theme.colors.dropdown}))},796:function(e,t,n){"use strict";var c,r=n(13),i=n(8).e.div(c||(c=Object(r.a)(["\n  background: url('/images/nfts/no-profile-md.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 96px;\n  height: 96px;\n\n  & > img {\n    border-radius: 50%;\n  }\n"])));t.a=i},844:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var c,r,i=n(13),s=n(8),a=s.e.div(c||(c=Object(i.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 16px;\n  margin-bottom: 16px;\n"]))),o=s.e.div(r||(r=Object(i.a)(["\n  color: ",";\n  padding: 0 20px;\n  :hover {\n    cursor: pointer;\n  }\n"])),(function(e){return e.theme.colors.primary}))},845:function(e,t,n){"use strict";var c,r,i=n(13),s=(n(0),n(8)),a=n(2),o=n(390),l=n(23),j=n(283),b=n(172),d=n(107),u=n(1),x=s.e.img(c||(c=Object(i.a)(["\n  margin-right: 4px;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n\n  "," {\n    margin-right: 12px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),O=Object(s.e)(a.Z)(r||(r=Object(i.a)(["\n  align-items: center;\n  transition: opacity 200ms ease-in;\n\n  &:hover {\n    opacity: 0.5;\n  }\n"])));t.a=function(e){var t,n,c=e.accountAddress,r=Object(j.c)(c),i=r.username,s=r.nft,h=r.usernameFetchStatus,m=r.avatarFetchStatus,f=i||"-",p=Object(u.jsx)(a.gc,{width:"32px",height:"32px",mr:["4px",null,"12px"]});m===l.b.Fetched&&(p=(null===s||void 0===s||null===(t=s.image)||void 0===t?void 0:t.thumbnail)?Object(u.jsx)(x,{src:null===s||void 0===s||null===(n=s.image)||void 0===n?void 0:n.thumbnail}):Object(u.jsx)(a.s,{width:"32px",height:"32px",mr:["4px",null,"12px"]}));return Object(u.jsx)(b.a,{to:"".concat(d.a,"/profile/").concat(c),children:Object(u.jsxs)(O,{children:[p,Object(u.jsxs)(a.o,{display:"inline",children:[Object(u.jsx)(a.Ac,{lineHeight:"1.25",children:Object(o.a)(c)}),h!==l.b.Fetched?Object(u.jsx)(a.gc,{}):Object(u.jsx)(a.Ac,{lineHeight:"1.25",children:f})]})]})})}},892:function(e,t,n){"use strict";var c,r=n(13),i=(n(0),n(8)),s=n(2),a=n(1),o=Object(i.e)(s.Z)(c||(c=Object(r.a)(["\n  align-items: center;\n"]))),l=function(){var e=Object(s.dd)(),t=e.isXs,n=e.isSm;return Object(a.jsxs)("tr",{children:[Object(a.jsx)(s.yc,{children:Object(a.jsx)(o,{children:Object(a.jsx)(s.gc,{height:[162,null,64],width:[80,null,200]})})}),Object(a.jsx)(s.yc,{children:Object(a.jsx)(o,{justifyContent:"flex-end",children:Object(a.jsx)(s.gc,{height:[66,null,24],width:64})})}),t||n?null:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(s.yc,{children:Object(a.jsx)(o,{justifyContent:"flex-end",children:Object(a.jsx)(s.gc,{height:42,width:64})})}),Object(a.jsx)(s.yc,{children:Object(a.jsx)(o,{justifyContent:"flex-end",children:Object(a.jsx)(s.gc,{height:48,width:124})})})]}),Object(a.jsx)(s.yc,{children:Object(a.jsx)(o,{justifyContent:"center",children:Object(a.jsx)(s.gc,{height:[36,null,24],width:[80,null,120]})})})]})};t.a=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(l,{}),Object(a.jsx)(l,{}),Object(a.jsx)(l,{}),Object(a.jsx)(l,{}),Object(a.jsx)(l,{}),Object(a.jsx)(l,{}),Object(a.jsx)(l,{}),Object(a.jsx)(l,{})]})}},895:function(e,t,n){"use strict";var c,r,i=n(4),s=n(11),a=n(13),o=(n(0),n(2)),l=n(172),j=n(8),b=n(44),d=n(27),u=n(845),x=n(128),O=n(765),h=n(16),m=n(390),f=n(247),p=n(17),g=n(74),v=n(72),y=n(1),w=["marketEvent"],A=function(e){var t,n=e.marketEvent,c=Object(g.a)(e,w),r=Object(h.b)().t,s=(t={},Object(p.a)(t,v.b.NEW,{text:r("Listed"),color:"textSubtle"}),Object(p.a)(t,v.b.CANCEL,{text:r("Delisted"),color:"textSubtle"}),Object(p.a)(t,v.b.MODIFY,{text:r("Modified"),color:"textSubtle"}),Object(p.a)(t,v.b.BUY,{text:r("Bought"),color:"success"}),Object(p.a)(t,v.b.SELL,{text:r("Sold"),color:"failure"}),t);return Object(y.jsx)(o.Ac,Object(i.a)(Object(i.a)({},c),{},{color:s[n].color,children:s[n].text}))},k=Object(j.e)(o.fb)(c||(c=Object(a.a)(["\n  & > img {\n    border-radius: ",";\n  }\n"])),(function(e){return e.theme.radii.default})),C=function(e){var t=e.nft,n=e.activity,c=e.bnbBusdPrice,r=e.localeTimestamp,i=e.onDismiss,s=e.isUserActivity,a=void 0!==s&&s,l=Object(d.a)().chainId,j=Object(h.b)().t,u=Object(x.a)().theme,p=parseFloat(n.price),g=Object(f.b)(c,p);return Object(y.jsx)(o.Db,{title:j("Transaction Details"),onDismiss:i,headerBackground:u.colors.gradients.cardHeader,children:Object(y.jsxs)(o.Z,{flexDirection:"column",maxWidth:"350px",children:[Object(y.jsxs)(o.Z,{alignItems:"center",mb:"16px",justifyContent:"space-between",children:[Object(y.jsx)(k,{src:t.image.thumbnail,height:68,width:68,mr:"16px"}),Object(y.jsxs)(o.Z,{flexDirection:"column",children:[Object(y.jsx)(o.Ac,{fontSize:"12px",color:"textSubtle",textAlign:"right",children:t.collectionName}),Object(y.jsx)(o.Ac,{bold:!0,children:t.name})]})]}),Object(y.jsxs)(O.b,{p:"16px",children:[Object(y.jsxs)(o.Z,{mb:"24px",justifyContent:"space-between",children:[Object(y.jsx)(A,{fontSize:"14px",marketEvent:n.marketEvent}),p?Object(y.jsxs)(o.Z,{justifyContent:"flex-end",alignItems:"center",children:[Object(y.jsx)(o.l,{width:"12px",height:"12px",mr:"4px"}),Object(y.jsx)(o.Ac,{mr:"4px",bold:!0,children:p}),Object(y.jsx)(o.Ac,{color:"textSubtle",children:"(~$".concat(g.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),")")})]}):"-"]}),a?Object(y.jsxs)(o.Z,{mb:"24px",justifyContent:"space-between",children:[Object(y.jsx)(o.Ac,{fontSize:"14px",color:"textSubtle",children:j("From/To")}),Object(y.jsx)(o.Ac,{children:n.otherParty?Object(m.a)(n.otherParty):"-"})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(o.Z,{mb:"24px",justifyContent:"space-between",children:[Object(y.jsx)(o.Ac,{fontSize:"14px",color:"textSubtle",children:j("From")}),Object(y.jsx)(o.Ac,{children:n.seller?Object(m.a)(n.seller):"-"})]}),Object(y.jsxs)(o.Z,{mb:"24px",justifyContent:"space-between",children:[Object(y.jsx)(o.Ac,{fontSize:"14px",color:"textSubtle",children:j("To")}),Object(y.jsx)(o.Ac,{children:n.buyer?Object(m.a)(n.buyer):"-"})]})]}),Object(y.jsxs)(o.Z,{justifyContent:"space-between",children:[Object(y.jsx)(o.Ac,{fontSize:"14px",color:"textSubtle",children:j("Date")}),Object(y.jsx)(o.Ac,{children:r})]})]}),Object(y.jsx)(o.Z,{flexDirection:"column",pt:"16px",alignItems:"center",children:Object(y.jsx)(o.t,{as:o.ob,external:!0,href:Object(b.e)(n.tx,"transaction",l),children:j("View on BscScan")})})]})})},S=function(e){var t=e.bnbBusdPrice,n=e.price,c=Object(f.b)(t,n);return Object(y.jsx)(o.Z,{flexDirection:"column",alignItems:"flex-end",children:n?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(o.Z,{justifySelf:"flex-start",alignItems:"center",children:[Object(y.jsx)(o.l,{width:"12px",height:"12px",mr:"4px"}),Object(y.jsx)(o.Ac,{maxWidth:"80px",bold:!0,children:n.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:5})})]}),c?Object(y.jsx)(o.Ac,{fontSize:"12px",color:"textSubtle",children:"(~$".concat(c.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),")")}):Object(y.jsx)(o.gc,{height:"18px",width:"42px"})]}):"-"})},P=n(107),F=Object(j.e)(o.fb)(r||(r=Object(a.a)(["\n  & > img {\n    border-radius: ",";\n  }\n"])),(function(e){return e.theme.radii.default}));t.a=function(e){var t,n=e.activity,c=e.bnbBusdPrice,r=e.nft,a=e.isUserActivity,j=void 0!==a&&a,x=e.isNftActivity,O=void 0!==x&&x,h=Object(d.a)().chainId,m=Object(o.dd)(),f=m.isXs,p=m.isSm,g=parseFloat(n.price),v=1e3*parseFloat(n.timestamp),w=new Date(v).toLocaleString(void 0,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"}),k=Object(o.ed)(Object(y.jsx)(C,{nft:r,activity:n,localeTimestamp:w,bnbBusdPrice:c,isUserActivity:j})),D=Object(s.a)(k,1)[0],I=!!r&&r.collectionAddress.toLowerCase()===P.b.toLowerCase(),E=r&&I?null===(t=r.attributes.find((function(e){return"bunnyId"===e.traitType})))||void 0===t?void 0:t.value:r?r.tokenId:null;return Object(y.jsxs)("tr",Object(i.a)(Object(i.a)({},(f||p)&&{onClick:D}),{},{children:[O?null:Object(y.jsx)(o.yc,Object(i.a)(Object(i.a)({},(f||p)&&{onClick:function(e){e.stopPropagation()}}),{},{children:Object(y.jsx)(l.a,{to:r?"".concat(P.a,"/collections/").concat(r.collectionAddress,"/").concat(E):"",children:Object(y.jsxs)(o.Z,{justifyContent:"flex-start",alignItems:"center",flexDirection:["column",null,"row"],children:[Object(y.jsx)(F,{src:null===r||void 0===r?void 0:r.image.thumbnail,alt:null===r||void 0===r?void 0:r.name,width:64,height:64,mr:[0,null,"16px"],mb:["8px",null,0]}),Object(y.jsxs)(o.Z,{flexDirection:"column",children:[Object(y.jsx)(o.Ac,{textAlign:["center",null,"left"],color:"textSubtle",fontSize:"14px",children:null===r||void 0===r?void 0:r.collectionName}),Object(y.jsx)(o.Ac,{textAlign:["center",null,"left"],bold:!0,children:null===r||void 0===r?void 0:r.name})]})]})})})),Object(y.jsxs)(o.yc,{children:[Object(y.jsx)(o.Z,{alignItems:"center",justifyContent:"flex-end",children:Object(y.jsx)(A,{marketEvent:n.marketEvent})}),f||p?Object(y.jsx)(S,{price:g,bnbBusdPrice:c}):null]}),f||p?null:Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(o.yc,{children:Object(y.jsx)(S,{price:g,bnbBusdPrice:c})}),j?Object(y.jsx)(o.yc,{children:Object(y.jsx)(o.Z,{justifyContent:"center",alignItems:"center",children:n.otherParty?Object(y.jsx)(u.a,{accountAddress:n.otherParty}):"-"})}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(o.yc,{children:Object(y.jsx)(o.Z,{justifyContent:"center",alignItems:"center",children:n.seller?Object(y.jsx)(u.a,{accountAddress:n.seller}):"-"})}),Object(y.jsx)(o.yc,{children:Object(y.jsx)(o.Z,{justifyContent:"center",alignItems:"center",children:n.buyer?Object(y.jsx)(u.a,{accountAddress:n.buyer}):"-"})})]})]}),Object(y.jsx)(o.yc,{children:Object(y.jsx)(o.Z,{justifyContent:"center",children:Object(y.jsx)(o.Ac,{textAlign:"center",fontSize:f||p?"12px":"16px",children:w})})}),f||p?null:Object(y.jsx)(o.yc,{children:Object(y.jsx)(o.eb,{as:o.ob,external:!0,href:Object(b.e)(n.tx,"transaction",h),children:Object(y.jsx)(o.Ob,{color:"textSubtle",width:"18px"})})})]}))}}}]);
//# sourceMappingURL=9.8f7de794.chunk.js.map