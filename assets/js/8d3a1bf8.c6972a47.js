(self.webpackChunk=self.webpackChunk||[]).push([[2399],{47940:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var a=n(74165),o=n(15861),i=n(67294),r=n(87152),s=n(34200),l=n(67425);function d(e,t,n){return p.apply(this,arguments)}function p(){return(p=(0,o.Z)((0,a.Z)().mark((function e(t,n,o){var i,l,d,p,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return i="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return i="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return i="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return i="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==i){e.next=18;break}return e.abrupt("return");case 18:return d=new r.U(i),e.next=21,s.G.create({provider:d});case 21:p=e.sent,(c=n.split(".")).forEach((function(e){e in p&&(p=p[e])})),e.t1=c[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=p.toString(),e.abrupt("break",35);case 29:return e.next=31,p();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+c[0]+") in "+n);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e,t,n,a){switch(t){case"humanReadable":(0,l.HumanReadable)(e,n,a);break;case"precise":(0,l.Precise)(e,n,a);break;case"blocksToDays":(0,l.BlocksToDays)(e,a);break;case"percentage":(0,l.Percentage)(e,a);break;case"arrayLength":(0,l.ArrayLength)(e,a);break;default:return void console.log("Ignoring unknown filter type")}}const k=function(e){var t=e.network,n=e.path,r=e.defaultValue,s=e.filter,l=void 0===s?void 0:s,p=(0,i.useState)(""),k=p[0],u=p[1];return t=t.toLowerCase(),(0,i.useEffect)((function(){void 0!==l?c(r.toString(),l,t,u):u(r.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){var o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t,n,u);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?c(o,l,t,u):u(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{i()}catch(s){console.log(s)}}}),[]),k}},67425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,n,a){var o=void 0;if("polkadot"===n||"statemint"===n)o=3;else{if("kusama"!==n&&"statemine"!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");o=6}e=parseFloat(e),a((e=Number.isInteger(e/t[n].precision)?e/t[n].precision+" "+t[n].symbol:(e/t[n].precision).toFixed(o)+" "+t[n].symbol).toString())},Precise:function(e,n,a){a(e=(e=parseFloat(e))/t[n].precision+" "+t[n].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},Percentage:function(e,t){t((e/=1e7).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},10209:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=n(47940),s=["components"],l={id:"learn-inflation",title:"Token Inflation",sidebar_label:"Token Inflation",description:"Explanation of Token's Inflation in the Polkadot Ecosystem.",keywords:["token","DOT","KSM","inflation"],slug:"../learn-inflation"},d=void 0,p={unversionedId:"learn/learn-inflation",id:"learn/learn-inflation",title:"Token Inflation",description:"Explanation of Token's Inflation in the Polkadot Ecosystem.",source:"@site/../docs/learn/learn-inflation.md",sourceDirName:"learn",slug:"/learn-inflation",permalink:"/docs/learn-inflation",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-inflation.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1694069864,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{id:"learn-inflation",title:"Token Inflation",sidebar_label:"Token Inflation",description:"Explanation of Token's Inflation in the Polkadot Ecosystem.",keywords:["token","DOT","KSM","inflation"],slug:"../learn-inflation"},sidebar:"docs",previous:{title:"DOT",permalink:"/docs/learn-DOT"},next:{title:"Teleporting Assets",permalink:"/docs/learn-teleport"}},c={},k=[{value:"Inflation Model",id:"inflation-model",level:2},{value:"Ideal Staking Rate",id:"ideal-staking-rate",level:2}],u={toc:k},h="wrapper";function f(e){var t=e.components,l=(0,o.Z)(e,s);return(0,i.kt)(h,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"DOT is an inflationary token. On the\nPolkadot network, inflation is\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/blob/756ccc35e93d1a78e3c71a0e67ae4da5f1d09f69/runtime/polkadot/src/lib.rs#L576"},"set to be 10% annually"),",\n","\nwhich is distributed as staking rewards based on the amount staked vs. ideal staking rate, and the\nremainder goes to the treasury."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"DOT went through ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-redenomination"},"redenomination")," in 2020 that saw the DOT token supply\nincrease by 100 times."),(0,i.kt)("p",{parentName:"admonition"},"The current token supply on Polkadot is\n",(0,i.kt)(r.Z,{network:"polkadot",path:"query.balances.totalIssuance",defaultValue:0xa9bc0e330b775000,filter:"humanReadable",mdxType:"RPC"})," (Over 1.2 Billion DOT).\n","")),(0,i.kt)("p",null,"It is essential to understand that the primary objective of\nDOT inflation is to incentivize network\nparticipants through\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-consensus#nominated-proof-of-stake"},"Nominated Proof of Stake (NPoS)")," and to grow the\nnetwork through funding the on-chain treasury. There is an opportunity cost of keeping the\nDOT tokens idle with the current inflation model\nas the tokens get diluted over time. Economics and game theory suggest that setting an ideal\ninflation rate is essential for incentivizing the network participants as well as the growth of the\nnetwork, and any deviation from it can have negative effects. Reducing the inflation rate could\nlimit growth while increasing the inflation rate could break the incentive model of the token.\nHence, ",(0,i.kt)("strong",{parentName:"p"},"token inflation rate is not a forever fixed value, and inflation can be updated in the\nfuture through ",(0,i.kt)("a",{parentName:"strong",href:"/docs/learn-polkadot-opengov"},"on-chain governance"))," based on thorough tokenomics\nresearch."),(0,i.kt)("h2",{id:"inflation-model"},"Inflation Model"),(0,i.kt)("p",null,"The chart below shows the inflation model of the network. Depending on the number of staked tokens,\nthe distribution of the inflation to validators and nominators versus the treasury will change\ndynamically to provide incentives to participate (or not participate) in staking."),(0,i.kt)("p",null,"There is a ",(0,i.kt)("a",{parentName:"p",href:"#ideal-staking-rate"},"dynamic ",(0,i.kt)("em",{parentName:"a"},"ideal staking rate"))," (in the figure set to 0.5 or 50%)\nthat the network tries to maintain. The goal is to have the ",(0,i.kt)("em",{parentName:"p"},"system staking rate")," meet the ",(0,i.kt)("em",{parentName:"p"},"ideal\nstaking rate"),". The system staking rate would be the total amount staked over the total token supply,\nwhere the total amount staked is the stake of all validators and nominators on the network. The\nideal staking rate accounts for having sufficient backing of DOT\nto prevent the possible compromise of security while keeping the native\ntoken liquid."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"staking",src:n(69605).Z,width:"800",height:"800"})),(0,i.kt)("p",{style:{textAlign:"center"}},"Source: ",(0,i.kt)("a",{href:"https://w3f-research.readthedocs.io/en/latest/polkadot/overview/2-token-economics.html"},"Research - Web3 Foundation")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"x-axis"),": Proportion of DOT staked"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"y-axis"),": Inflation, annualized percentage"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Blue line"),": Annual inflation rate of NPoS, i.e. total amount of tokens minted to pay validators\nand nominators."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Green line"),": Annual rewards rate for stakers. For instance, 0.2 corresponds to 20% of annual\nreturns on the staked tokens. You can determine the current annual staking rewards rate by looking\nat the top bar of the staking overview on\n",(0,i.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/staking"},"Polkadot-JS UI"),".")),(0,i.kt)("p",null,"Assuming that the ideal staking rate is 50%, all of the inflation would go to the validators and\nnominators if 50% of all DOT are staked. Any\ndeviation from the 50% - positive or negative - sends the proportional remainder to the treasury.\nDeviation from the ideal staking rate are referred to as ",(0,i.kt)("em",{parentName:"p"},"staking inefficiencies"),". Thus, the\ntreasury does not currently receive a substantial inflow of funds at the ideal staking rate. See\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov-treasury"},"this page")," for more information about treasury inflow\nsources."),(0,i.kt)("p",null,"For those who are interested in knowing more about the design of the inflation model for the\nnetwork, please see ",(0,i.kt)("a",{parentName:"p",href:"https://research.web3.foundation/Polkadot/overview/token-economics"},"here"),"."),(0,i.kt)("h2",{id:"ideal-staking-rate"},"Ideal Staking Rate"),(0,i.kt)("p",null,"The ideal staking rate can vary between 45% to 75% based on the number of parachains that acquired a\nlease through an auction (this excludes the System parachains), based on the implementation\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/blob/cd901764a52edc04a6d22bea3a526def593ab2a7/polkadot/runtime/common/src/impls.rs#L80"},"here"),"."),(0,i.kt)("p",null,"Briefly, the ideal staking rate can be calculated as follows:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"0.75 - auction_proportion")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"auction_proportion")," is obtained by computing ",(0,i.kt)("inlineCode",{parentName:"p"},"min(auctioned_slots, 60) / 200"),". The\n",(0,i.kt)("inlineCode",{parentName:"p"},"auctioned_slots")," are all the auctioned slots without the slots for system parachains."),(0,i.kt)("p",null,"Assuming there are 48 filled slots, of which three are dedicated to system parachains (Asset Hub,\nBridge Hub and Collectives), there are 45 auctioned slots. The ",(0,i.kt)("inlineCode",{parentName:"p"},"auction_proportion")," is thus\n",(0,i.kt)("inlineCode",{parentName:"p"},"45 / 200 = 0.225"),". The ideal staking rate is ",(0,i.kt)("inlineCode",{parentName:"p"},"0.75 - 0.225 = 0.525"),"."),(0,i.kt)("p",null,"If the amount of tokens staked goes below 52.5%, then staking rewards for nominators increase,\nincentivizing them to stake more tokens on the network. On the contrary, staking rewards drop if\nstaked tokens exceed the ideal staking rate. This results from the change in the percentage of\nstaking rewards that go to the Treasury."))}f.isMDXComponent=!0},69605:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/staking-rate-with-parachains-0e10db7192160d6b8e16848b2ed12bc6.png"},46601:()=>{}}]);