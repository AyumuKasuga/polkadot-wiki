"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5548],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=r,h=p["".concat(s,".").concat(d)]||p[d]||g[d]||o;return t?i.createElement(h,a(a({ref:n},u),{},{components:t})):i.createElement(h,a({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7926:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var i=t(87462),r=t(63366),o=(t(67294),t(3905)),a=["components"],l={id:"learn-xcm-docs-journey-origin",title:"Origin Manipulation",sidebar_label:"Origin Manipulation",description:"Manipulating the Origin of XCM.",keywords:["xcm","cross-consensus messaging","origin"],slug:"../journey-origin"},s="Origin manipulation",c={unversionedId:"learn/xcm/journey/learn-xcm-docs-journey-origin",id:"learn/xcm/journey/learn-xcm-docs-journey-origin",title:"Origin Manipulation",description:"Manipulating the Origin of XCM.",source:"@site/../docs/learn/xcm/journey/origins.md",sourceDirName:"learn/xcm/journey",slug:"/learn/xcm/journey-origin",permalink:"/docs/learn/xcm/journey-origin",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/xcm/journey/origins.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1694074887,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{id:"learn-xcm-docs-journey-origin",title:"Origin Manipulation",sidebar_label:"Origin Manipulation",description:"Manipulating the Origin of XCM.",keywords:["xcm","cross-consensus messaging","origin"],slug:"../journey-origin"},sidebar:"docs",previous:{title:"Transact: A General Solution",permalink:"/docs/learn/xcm/journey-transact"},next:{title:"More Register Modifiers",permalink:"/docs/learn/xcm/journey-register"}},u={},p=[{value:"ClearOrigin",id:"clearorigin",level:2},{value:"DescendOrigin",id:"descendorigin",level:2},{value:"UniversalOrigin",id:"universalorigin",level:2},{value:"AliasOrigin",id:"aliasorigin",level:2}],g={toc:p},d="wrapper";function h(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.kt)(d,(0,i.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"origin-manipulation"},"Origin manipulation"),(0,o.kt)("p",null,"An XCVM contains contextual information while executing XCM instructions. It uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"XcmContext"),"\nstruct to provide them. ",(0,o.kt)("inlineCode",{parentName:"p"},"XcmContext")," contains information such as the origin of the corresponding\nXCM, the hash of the message, and the topic of the XCM."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct XcmContext {\n    /// The `MultiLocation` origin of the corresponding XCM.\n    pub origin: Option<MultiLocation>,\n    /// The hash of the XCM.\n    pub message_hash: XcmHash,\n    /// The topic of the XCM.\n    pub topic: Option<[u8; 32]>,\n}\n")),(0,o.kt)("p",null,"In the XCVM, the origin field of the XcmContext indicates which ",(0,o.kt)("inlineCode",{parentName:"p"},"MultiLocation"),"'s privilege level\nthat the current programme is using to execute. The origin is important for enforcing restrictions\nand ensuring appropriate execution of the instructions."),(0,o.kt)("p",null,"There are multiple instructions in XCM that can alter the XcmContext origin field:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ClearOrigin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DescendOrigin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"UniversalOrigin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AliasOrigin"))),(0,o.kt)("h2",{id:"clearorigin"},"ClearOrigin"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust,noplayground"},"ClearOrigin\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ClearOrigin")," instruction clears the origin register in the XCVM. Specifically, it sets the\norigin field of the XCM context to None. This ensures that subsequent instructions in the XCM cannot\nuse the privilege level of the cleared origin to execute operations."),(0,o.kt)("h2",{id:"descendorigin"},"DescendOrigin"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust,noplayground"},"DescendOrigin(InteriorMultiLocation),\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DescendOrigin")," instruction is used to change the XcmContext origin to an interior location of\nthe current origin."),(0,o.kt)("p",null,"This can be useful when executing instructions that require a specific location within the current\norigin."),(0,o.kt)("p",null,"Note that the XcmContext origin is a ",(0,o.kt)("inlineCode",{parentName:"p"},"MultiLocation")," containing an ",(0,o.kt)("inlineCode",{parentName:"p"},"InteriorMultiLocation")," enum; it\ncan only hold up to a maximum of 8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Junction"),"s, so when we try to execute multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"DescendOrigin"),"\ninstructions which would result in an ",(0,o.kt)("inlineCode",{parentName:"p"},"InteriorMultiLocation")," containing more than 8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Junction"),"s, a\n",(0,o.kt)("inlineCode",{parentName:"p"},"LocationFull")," error is thrown."),(0,o.kt)("h2",{id:"universalorigin"},"UniversalOrigin"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust,noplayground"},"UniversalOrigin(Junction)\n")),(0,o.kt)("p",null,"The UniversalOrigin XCM instruction sets the Origin Register to be a child of the Universal\nLocation. The Junction parameter should generally be a ",(0,o.kt)("inlineCode",{parentName:"p"},"GlobalConsensus")," variant since only these\nare children of the Universal Location."),(0,o.kt)("p",null,"Safety Note: Should only be usable if the Origin is trusted to represent a child of the Universal\nlocation. In general, no Origin should be able to represent the Universal Location's child which is\nthe root of the local consensus system since it would by extension allow it to act as any location\nwithin the local consensus, but it is necessary when bridging XCMs between ",(0,o.kt)("inlineCode",{parentName:"p"},"GlobalConsensus"),"\nsystems."),(0,o.kt)("h2",{id:"aliasorigin"},"AliasOrigin"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust,noplayground"},"AliasOrigin(MultiLocation)\n")),(0,o.kt)("p",null,"The AliasOrigin instruction is similar to the UniversalOrigin instruction, but it is primarily used\nfor account IDs. When executed, it switches out the current origin for the given MultiLocation. THe\nAliasOrigin instruction would allow to remove certain prefix patterns such as Parent/Parachain(X)/\nfor certain values of X (thereby allowing sibling chains to use the same account IDs) or\nParachain(X)/ (allowing a Relay-chain to use the account IDs native to its child parachains) or just\nParent/ (allowing parachains to use AccountIds of the Relay-chain)."))}h.isMDXComponent=!0}}]);