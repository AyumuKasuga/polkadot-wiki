"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,d=p["".concat(c,".").concat(h)]||p[h]||m[h]||r;return n?i.createElement(d,o(o({ref:t},u),{},{components:n})):i.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],s={id:"learn-xcm-docs-quickstart-first-look",title:"First Look at an XCM",sidebar_label:"First Look at an XCM",description:"First Look at an XCM.",keywords:["xcm","cross-consensus messaging"],slug:"../quickstart-first-look"},c="First Look",l={unversionedId:"learn/xcm/quickstart/learn-xcm-docs-quickstart-first-look",id:"learn/xcm/quickstart/learn-xcm-docs-quickstart-first-look",title:"First Look at an XCM",description:"First Look at an XCM.",source:"@site/../docs/learn/xcm/quickstart/first-look.md",sourceDirName:"learn/xcm/quickstart",slug:"/learn/xcm/quickstart-first-look",permalink:"/docs/learn/xcm/quickstart-first-look",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/xcm/quickstart/first-look.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1694074887,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{id:"learn-xcm-docs-quickstart-first-look",title:"First Look at an XCM",sidebar_label:"First Look at an XCM",description:"First Look at an XCM.",keywords:["xcm","cross-consensus messaging"],slug:"../quickstart-first-look"},sidebar:"docs",previous:{title:"XCM Simulator",permalink:"/docs/learn/xcm/quickstart-simulator"},next:{title:"Fundamentals",permalink:"/docs/learn/xcm/fundamentals"}},u={},p=[{value:"Message",id:"message",level:2},{value:"WithdrawAsset",id:"withdrawasset",level:3},{value:"BuyExecution",id:"buyexecution",level:3},{value:"DepositAsset",id:"depositasset",level:3},{value:"What next?",id:"what-next",level:2}],m={toc:p},h="wrapper";function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)(h,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"first-look"},"First Look"),(0,r.kt)("p",null,"In this section, we take you through a simple example of an XCM. In this example, we withdraw the\nnative token from the account of Alice and deposit this token in the account of Bob. This message\nsimulates a transfer between two accounts in the same consensus system (",(0,r.kt)("inlineCode",{parentName:"p"},"ParaA"),"). You can find the\ncomplete code example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-docs/tree/main/examples"},"in the repo"),"."),(0,r.kt)("h2",{id:"message"},"Message"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust,noplayground"}," let message = Xcm(vec![\n    WithdrawAsset((Here, amount).into()),\n    BuyExecution{ fees: (Here, amount).into(), weight_limit: WeightLimit::Unlimited },\n    DepositAsset {\n        assets: All.into(),\n        beneficiary:  MultiLocation {\n            parents: 0,\n            interior: Junction::AccountId32 {\n                network: None,\n                id: BOB.clone().into()\n            }.into(),\n        }.into()\n    }\n]);\n")),(0,r.kt)("p",null,"The message consists of three instructions: ",(0,r.kt)("inlineCode",{parentName:"p"},"WithdrawAsset"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"BuyExecution"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"DepositAsset"),". In\nthe following sections we will go over each instruction."),(0,r.kt)("h3",{id:"withdrawasset"},"WithdrawAsset"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"WithdrawAsset((Here, amount).into())\n")),(0,r.kt)("p",null,"The first instruction takes as an input the MultiAsset that should be withdrawn. The MultiAsset\ndescribes the native parachain token with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Here")," keyword. The ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," parameter is the number\nof tokens that are transferred. The withdrawal account depends on the origin of the message. In this\nexample the origin of the message is Alice. The WithdrawAsset instruction moves ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," number of\nnative tokens from Alice's account into the ",(0,r.kt)("em",{parentName:"p"},"holding register"),"."),(0,r.kt)("h3",{id:"buyexecution"},"BuyExecution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"BuyExecution{fees: (Here, amount).into(), weight_limit: WeightLimit::Unlimited}\n")),(0,r.kt)("p",null,"To execute XCM instructions, weight (some amount of resources) has to be bought. The amount of\nweight needed to execute an XCM depends on the number and type of instructions in the XCM. The\n",(0,r.kt)("inlineCode",{parentName:"p"},"BuyExecution")," instruction pays for the weight using the ",(0,r.kt)("inlineCode",{parentName:"p"},"fees"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"fees")," parameter describes the\nasset in the ",(0,r.kt)("em",{parentName:"p"},"holding register")," that should be used for paying for the weight. The ",(0,r.kt)("inlineCode",{parentName:"p"},"weight_limit"),"\nparameter defines the maximum amount of fees that can be used for buying weight. There are special\noccasions where it is not necessary to buy weight. See the chapter on\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/xcm/fundamentals-fees"},"weight and fees")," for more information about the fees in XCM."),(0,r.kt)("h3",{id:"depositasset"},"DepositAsset"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"DepositAsset {\n    assets: All.into(),\n    beneficiary:  MultiLocation {\n        parents: 0,\n        interior: Junction::AccountId32 {\n            network: None,\n            id: BOB.clone().into()\n        }.into(),\n    }.into()\n}\n")),(0,r.kt)("p",null,"The DepositAsset instruction is used to deposit funds from the holding register into the account of\nthe ",(0,r.kt)("em",{parentName:"p"},"beneficiary"),". We don\u2019t actually know how much is remaining in the holding register after the\n",(0,r.kt)("inlineCode",{parentName:"p"},"BuyExecution")," instruction, but that doesn\u2019t matter since we specify a wildcard for the asset(s)\nwhich should be deposited. In this case, the wildcard is ",(0,r.kt)("inlineCode",{parentName:"p"},"All"),", meaning that all assets in the\nholding register at that point in the execution should be deposited. The ",(0,r.kt)("em",{parentName:"p"},"beneficiary")," in this case\nis the account of Bob in the current consensus system."),(0,r.kt)("p",null,"When the three instructions are combined, we withdraw ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," native tokens from the account of\nAlice, pay for the execution of these instructions, and deposit the remaining tokens in the account\nof Bob."),(0,r.kt)("h2",{id:"what-next"},"What next?"),(0,r.kt)("p",null,"Now that we have taken a first look at an XCM, we can dive deeper into all the XCM instructions, to\nbe able to build more complex XCVM programs. For an overview of the instructions check out the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format#5-the-xcvm-instruction-set"},"xcm-format repo"),". We'll show\nexamples for every instruction in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/xcm/journey-summary"},"journey through XCM")," chapter. First,\nit's important to learn the fundamentals, ",(0,r.kt)("inlineCode",{parentName:"p"},"MultiLocation"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MultiAsset"),", and other concepts in XCM.\nWe'll talk about those next."))}d.isMDXComponent=!0}}]);