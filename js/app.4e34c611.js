(function(e){function t(t){for(var a,r,o=t[0],c=t[1],l=t[2],u=0,p=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},n={app:0},i=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0fd5":function(e,t,s){var a={"./af":"8206","./af.js":"8206","./ar":"cdac","./ar-dz":"7f26","./ar-dz.js":"7f26","./ar-kw":"8e88","./ar-kw.js":"8e88","./ar-ly":"cd65","./ar-ly.js":"cd65","./ar-ma":"e8d6","./ar-ma.js":"e8d6","./ar-sa":"a284","./ar-sa.js":"a284","./ar-tn":"64f7","./ar-tn.js":"64f7","./ar.js":"cdac","./az":"b139","./az.js":"b139","./be":"98e2","./be.js":"98e2","./bg":"a1a5","./bg.js":"a1a5","./bm":"4d0d","./bm.js":"4d0d","./bn":"e8ae","./bn-bd":"5dd8","./bn-bd.js":"5dd8","./bn.js":"e8ae","./bo":"bcf2","./bo.js":"bcf2","./br":"69f1","./br.js":"69f1","./bs":"24d1","./bs.js":"24d1","./ca":"3507","./ca.js":"3507","./cs":"d15f","./cs.js":"d15f","./cv":"7bfe","./cv.js":"7bfe","./cy":"1d35","./cy.js":"1d35","./da":"a019","./da.js":"a019","./de":"0cfa","./de-at":"edea","./de-at.js":"edea","./de-ch":"9aae","./de-ch.js":"9aae","./de.js":"0cfa","./dv":"1722","./dv.js":"1722","./el":"5390","./el.js":"5390","./en-au":"dad9","./en-au.js":"dad9","./en-ca":"6f13","./en-ca.js":"6f13","./en-gb":"6267","./en-gb.js":"6267","./en-ie":"80b1","./en-ie.js":"80b1","./en-il":"ad38","./en-il.js":"ad38","./en-in":"eb60","./en-in.js":"eb60","./en-nz":"39db","./en-nz.js":"39db","./en-sg":"c30d","./en-sg.js":"c30d","./eo":"1a30","./eo.js":"1a30","./es":"48a3","./es-do":"f306","./es-do.js":"f306","./es-mx":"56d9","./es-mx.js":"56d9","./es-us":"60bf","./es-us.js":"60bf","./es.js":"48a3","./et":"f891","./et.js":"f891","./eu":"a403","./eu.js":"a403","./fa":"ce14","./fa.js":"ce14","./fi":"fc14","./fi.js":"fc14","./fil":"f46e","./fil.js":"f46e","./fo":"2bf2","./fo.js":"2bf2","./fr":"c1e8","./fr-ca":"50a2","./fr-ca.js":"50a2","./fr-ch":"b087","./fr-ch.js":"b087","./fr.js":"c1e8","./fy":"4665","./fy.js":"4665","./ga":"b396","./ga.js":"b396","./gd":"056c","./gd.js":"056c","./gl":"efde","./gl.js":"efde","./gom-deva":"12ea","./gom-deva.js":"12ea","./gom-latn":"8e2c","./gom-latn.js":"8e2c","./gu":"533d","./gu.js":"533d","./he":"7520","./he.js":"7520","./hi":"d2f3","./hi.js":"d2f3","./hr":"7e79","./hr.js":"7e79","./hu":"148f","./hu.js":"148f","./hy-am":"6711","./hy-am.js":"6711","./id":"2b10","./id.js":"2b10","./is":"1feb","./is.js":"1feb","./it":"1b21","./it-ch":"8d2c","./it-ch.js":"8d2c","./it.js":"1b21","./ja":"926e","./ja.js":"926e","./jv":"5a78","./jv.js":"5a78","./ka":"5975","./ka.js":"5975","./kk":"cc93","./kk.js":"cc93","./km":"66e1","./km.js":"66e1","./kn":"5421","./kn.js":"5421","./ko":"1297","./ko.js":"1297","./ku":"16f8","./ku.js":"16f8","./ky":"3df9","./ky.js":"3df9","./lb":"c124","./lb.js":"c124","./lo":"20a5","./lo.js":"20a5","./lt":"c14a","./lt.js":"c14a","./lv":"c553","./lv.js":"c553","./me":"ae25","./me.js":"ae25","./mi":"6f56","./mi.js":"6f56","./mk":"c8fc","./mk.js":"c8fc","./ml":"752d","./ml.js":"752d","./mn":"f09e","./mn.js":"f09e","./mr":"0a56","./mr.js":"0a56","./ms":"55b6","./ms-my":"a9e9","./ms-my.js":"a9e9","./ms.js":"55b6","./mt":"624b","./mt.js":"624b","./my":"e256","./my.js":"e256","./nb":"e1d5","./nb.js":"e1d5","./ne":"761a","./ne.js":"761a","./nl":"a0f2","./nl-be":"5cb2","./nl-be.js":"5cb2","./nl.js":"a0f2","./nn":"4fda","./nn.js":"4fda","./oc-lnc":"ec3d","./oc-lnc.js":"ec3d","./pa-in":"2f2f","./pa-in.js":"2f2f","./pl":"317f","./pl.js":"317f","./pt":"5553","./pt-br":"a9ab","./pt-br.js":"a9ab","./pt.js":"5553","./ro":"db12","./ro.js":"db12","./ru":"7aa4","./ru.js":"7aa4","./sd":"e87b","./sd.js":"e87b","./se":"a296","./se.js":"a296","./si":"51ec","./si.js":"51ec","./sk":"608b","./sk.js":"608b","./sl":"b367","./sl.js":"b367","./sq":"f68f","./sq.js":"f68f","./sr":"0991","./sr-cyrl":"c577","./sr-cyrl.js":"c577","./sr.js":"0991","./ss":"cf76","./ss.js":"cf76","./sv":"0153","./sv.js":"0153","./sw":"cb6f","./sw.js":"cb6f","./ta":"8bfa","./ta.js":"8bfa","./te":"668b","./te.js":"668b","./tet":"eae7","./tet.js":"eae7","./tg":"70b1","./tg.js":"70b1","./th":"7180","./th.js":"7180","./tk":"4912","./tk.js":"4912","./tl-ph":"f8bb","./tl-ph.js":"f8bb","./tlh":"b026","./tlh.js":"b026","./tr":"371d","./tr.js":"371d","./tzl":"c744","./tzl.js":"c744","./tzm":"787a","./tzm-latn":"71e0","./tzm-latn.js":"71e0","./tzm.js":"787a","./ug-cn":"6b5c","./ug-cn.js":"6b5c","./uk":"8c0c","./uk.js":"8c0c","./ur":"519e","./ur.js":"519e","./uz":"7982","./uz-latn":"3137","./uz-latn.js":"3137","./uz.js":"7982","./vi":"ae22","./vi.js":"ae22","./x-pseudo":"1129","./x-pseudo.js":"1129","./yo":"b4bf","./yo.js":"b4bf","./zh-cn":"fdc4","./zh-cn.js":"fdc4","./zh-hk":"747d","./zh-hk.js":"747d","./zh-mo":"fe39","./zh-mo.js":"fe39","./zh-tw":"d3e0","./zh-tw.js":"d3e0"};function n(e){var t=i(e);return s(t)}function i(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=i,e.exports=n,n.id="0fd5"},2104:function(e,t,s){},"4fff":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);var a=s("e832"),n=s("b189"),i=s.n(n);s("ccd0");const r={primary:"#a04bda",secondary:"#f59e2c"};a["default"].use(i.a);var o=new i.a({theme:{themes:{dark:r,light:r}}}),c=s("43d1"),l=s.n(c);a["default"].use(l.a);var d=s("dd53");a["default"].use(d["a"],{defaultPosition:"toast-bottom-right"});var u=s("66a5"),p=s.n(u);a["default"].use(p.a);var m=s("44a8"),v=s("3332");a["default"].use(v["a"],{defaultBoundariesElement:document.body,defaultTrigger:m["isMobile"]?"click":"hover",defaultOffset:14,tooltip:{offset:15},defaultDelay:{show:300}});var f=s("8454"),h=s.n(f),g=s("0e7f"),b={risk_profile:"Risk Profile",change_profile:"Change Profile",best_match:"Best Match",allocation_target:"Allocation Target",bonds:"Bonds",equities:"Equities",portfolio_rebalancing:"Portfolio Rebalancing",you_are_on_target:"You're on target!",you_need_rebalancing:"You need rebalancing",class:"CLASS",current:"CURRENT",target:"TARGET",rebalancing:"REBALANCING",what_kind_of_investor_are_you:"What kind of investor are you?",nearest_profile:"Nearest Profile",portfolio_allocation:"Portfolio Allocation",holding:"Holding",holdings:"Holdings",conservative_investor:"Conservative",cautious_investor:"Cautious",balanced_investor:"Balanced",assertive_investor:"Assertive",aggressive_investor:"Aggressive",investopedia:"Investopedia",akademia_cpd:"AkademiaCPD",wealthica:"Wealthica",conservative_investor_text:"The Conservative Investor prioritizes the preservation of capital over market returns. She seeks to protect an investment portfolio’s value by investing in lower-risk securities such as fixed-income and money market securities, and often blue-chip or large-cap equities.",cautious_investor_text:"The Cautious Investor prioritizes the preservation of capital over market returns. She prefers more stable, lower risk investments, especially those which offer more liquidity. The cautious investor has a lower equity exposure than investors with a more adventurous style.",balanced_investor_text:"The Balanced Investor seeks a balance between capital preservation and growth. It is used by investors with a moderate risk tolerance and generally consists of a 50/50 mixture of stocks and bonds. It is at the middle of the risk-reward spectrum.",assertive_investor_text:"The Assertive Investor seeks high long term capital growth by investing mostly in growth assets. She remains cautious towards taking high levels of long term risks. You accept the possibility of a negative annual return that may occur once in a while.",aggressive_investor_text:"The Aggressive Investor seeks to maximise long term capital growth by investing predominantly in stocks (or ETFs). She is aware of the high risk of a negative return and potential for capital loss in the short term. She sometimes gets higher returns for taking bigger risks.",no_positions_found:"No positions found",loading:"Loading",build:"Risk Profile v.{buildNumber}"},y={risk_profile:"Profil de risque",change_profile:"Change de profil",best_match:"Meilleure correspondance",allocation_target:"Objectif d'allocation",bonds:"Obligations",equities:"Actions",portfolio_rebalancing:"Rééquilibrage du portefeuille",you_are_on_target:"Vous êtes sur la cible!",you_need_rebalancing:"Vous avez besoin d'un rééquilibrage",class:"CLASSE",current:"ACTUELLE",target:"CIBLE",rebalancing:"RÉÉQUILIBRER",what_kind_of_investor_are_you:"Quel genre d'investisseur êtes-vous?",nearest_profile:"Profil le plus proche",portfolio_allocation:"Allocation de portefeuille",holding:"Holding",holdings:"Holdings",conservative_investor:"Conservateur",cautious_investor:"Prudent",balanced_investor:"Équilibrée",assertive_investor:"Assuré",aggressive_investor:"Agressif",investopedia:"Investopedia",akademia_cpd:"AkademiaCPD",wealthica:"Wealthica",conservative_investor_text:"L'investisseur conservateur donne la priorité à la préservation du capital plutôt qu'aux rendements du marché. Elle cherche à protéger la valeur d’un portefeuille d’investissement en investissant dans des titres à faible risque, tels que des titres à revenu fixe et du marché monétaire, et souvent des actions de premier ordre ou de grande capitalisation.",cautious_investor_text:"L'investisseur prudent privilégie la préservation du capital par rapport aux rendements du marché. Elle préfère les investissements plus stables et moins risqués, en particulier ceux qui offrent plus de liquidité. L'investisseur prudent est moins exposé aux actions que les investisseurs au style plus aventureux.",balanced_investor_text:"L'investisseur équilibré recherche un équilibre entre la préservation du capital et la croissance. Il est utilisé par les investisseurs ayant une tolérance au risque modérée et consiste généralement en un mélange 50/50 d'actions et d'obligations. Il se situe au milieu du spectre risque-récompense.",assertive_investor_text:"L'investisseur assertif recherche une forte croissance du capital à long terme en investissant principalement dans des actifs de croissance. Elle reste prudente face à la prise de risques à long terme élevés. Vous acceptez la possibilité d'un rendement annuel négatif qui peut survenir de temps en temps.",aggressive_investor_text:"L'investisseur agressif cherche à maximiser la croissance du capital à long terme en investissant principalement dans des actions (ou ETF). Elle est consciente du risque élevé de rendement négatif et du potentiel de perte en capital à court terme. Elle obtient parfois des rendements plus élevés pour prendre des risques plus importants.",no_positions_found:"Aucun poste trouvé",loading:"Chargement",build:"Profil de risque v.{buildNumber}"},_={en:b,fr:y},j=s("94ea"),w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",{staticClass:"app",style:e.appStyle},[e.loading?s("v-card",{staticClass:"text-center mx-4 mt-4 py-4"},[s("Loading"),s("p",{staticClass:"mb-0 grey--text"},[e._v(e._s(e.$t("loading")))])],1):s("div",{staticClass:"mx-2 grey--text text--darken-3 mb-5"},[s("upload-form")],1)],1)},I=[],T=s("982c"),A=s.n(T),k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("form",{attrs:{enctype:"multipart/form-data"}},[s("v-row",[s("v-col",{attrs:{cols:"24",sm:"12"}},[s("div",{staticClass:"row-heading"},[e._v(" 1. Import to... ")])]),s("v-col",{attrs:{cols:"24",sm:"12"}},[s("v-radio-group",{attrs:{row:""},model:{value:e.importTo,callback:function(t){e.importTo=t},expression:"importTo"}},[s("v-radio",{attrs:{label:"Institution",value:"institution"}}),s("v-radio",{attrs:{label:"Asset",value:"asset"}})],1)],1)],1),s("v-row",[s("v-col",{attrs:{cols:"24",sm:"12"}},[s("div",{staticClass:"row-heading"},[e._v(" 2. Select institution and account to import to ... ")])]),s("v-col",{staticClass:"select-institution-sec",attrs:{cols:"24",sm:"12"}},["institution"==e.importTo?[e.institutions.length?s("span",{staticClass:"institution-inner"},[s("img",{attrs:{src:"https://app.wealthica.com/images/institutions/"+e.institutions[0].type+".png",alt:"Wealthica"}})]):e._e(),e.institutions.length-1>0?[s("span",{staticClass:"institution-inner"},[e._v("${institutions.length-1}+")])]:e._e(),s("select",{directives:[{name:"model",rawName:"v-model",value:e.institutionId,expression:"institutionId"}],ref:"institutionId",staticClass:"account-drop-down",class:{"account-drop-down-error":e.$v.institutionId&&e.$v.institutionId.$error},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.institutionId=t.target.multiple?s:s[0]}}},[s("option",{attrs:{selected:"",value:""}},[e._v(" Select an institution to import to.")]),e._l(e.institutions,(function(t){return s("option",{key:t.id,domProps:{value:t.id}},[e._v(" "+e._s(t.name))])}))],2),e.institutionId?[s("select",{directives:[{name:"model",rawName:"v-model",value:e.investmentId,expression:"investmentId"}],ref:"investmentId",staticClass:"account-drop-down",class:{"account-drop-down-error":e.$v.investmentId&&e.$v.investmentId.$error},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.investmentId=t.target.multiple?s:s[0]}}},[s("option",{attrs:{selected:"",value:""}},[e._v("Select an investment to import to.")]),e._l(e.investments,(function(t){return s("option",{key:t._id,domProps:{value:t._id}},[e._v(" "+e._s(t.name))])}))],2)]:e._e()]:[e.assets.length?s("span",{staticClass:"institution-inner"},[e.getAssetIcon(e.assets[0])?[s("img",{attrs:{src:e.getAssetIcon(e.assets[0]),alt:"Wealthica"}})]:[s("i",{staticClass:"wicon",class:e.iconClassName(e.assets[0].type)})]],2):e._e(),e.assets.length-1>0?[s("span",{staticClass:"institution-number"},[e._v(e._s(e.assets.length-1)+"+")])]:e._e(),s("select",{directives:[{name:"model",rawName:"v-model",value:e.assetId,expression:"assetId"}],ref:"assetId",staticClass:"account-drop-down",class:{"account-drop-down-error":e.$v.assetId&&e.$v.assetId.$error},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.assetId=t.target.multiple?s:s[0]}}},[s("option",{attrs:{selected:"",value:""}},[e._v(" Select an asset to import to.")]),e._l(e.assets,(function(t){return s("option",{key:t._id,domProps:{value:t._id}},[e._v(" "+e._s(t.name))])}))],2)]],2)],1),s("v-row",[s("v-col",{attrs:{cols:"24",sm:"12"}},[s("div",{staticClass:"row-heading"},[e._v(" 3. Upload the CSV transactions file you would like to import... ")])]),s("v-col",{attrs:{cols:"24",sm:"12"}},[s("div",{staticClass:"upload-file-wrapper"},[s("input",{ref:"file",attrs:{type:"file",id:"file"},on:{change:e.handleFileUpload}})])])],1),s("v-row",[s("v-col",{attrs:{cols:"24",sm:"12"}},[s("div",{staticClass:"row-heading"},[e._v(" 4. Identify columns to import ... ")])]),s("v-col",{attrs:{cols:"24",sm:"12"}},[s("div",{staticClass:"account-currency"},[e._v("Account currency ...")]),e._v(" Selected account currenty is "),s("span",{staticClass:"selected-currency"},[e._v(e._s(e.selectedCurrency._id))]),e._v(" all transactions amount will be importes as "),s("span",{staticClass:"selected-currency"},[e._v(e._s(e.selectedCurrency._id))])]),s("v-col",{attrs:{cols:"12",sm:"6"}},[s("v-row",[s("v-col",{attrs:{cols:"12",sm:"6"}},[s("div",{ref:"topelement"}),s("label",{staticClass:"as"},[e._v("Detected as...")])]),s("v-col",{attrs:{cols:"12",sm:"6"}},[s("label",{staticClass:"as"},[e._v("Import as...")])])],1),e._l(e.headersWithDataType,(function(t){return s("div",{key:t.header,staticClass:"loop-row"},[s("v-col",{attrs:{cols:"12",sm:"6"}},[s("input",{staticClass:"detected-as-input",attrs:{type:"text"},domProps:{value:t.header}})]),s("v-col",{attrs:{cols:"12",sm:"6"}},[s("select",{staticClass:"imported-as-drop-down",class:{ignored:"ignored"==t.dataType},domProps:{value:t.dataType},on:{change:function(s){return e.changeDataType(s,t.header)}}},[s("option",{attrs:{value:"date"}},[e._v("Date")]),s("option",{attrs:{value:"currency_amount"}},[e._v("Amount")]),s("option",{attrs:{value:"type"}},[e._v("Type")]),s("option",{attrs:{value:"asset"}},[e._v("Asset")]),s("option",{attrs:{value:"category"}},[e._v("Category")]),s("option",{attrs:{value:"description"}},[e._v("Description")]),s("option",{attrs:{value:"fee"}},[e._v("Fee")]),s("option",{attrs:{value:"institution"}},[e._v("Institution")]),s("option",{attrs:{value:"investment"}},[e._v("Investment")]),s("option",{attrs:{value:"note"}},[e._v("Note")]),s("option",{attrs:{value:"quantity"}},[e._v("Quantity")]),s("option",{attrs:{value:"realized_gain"}},[e._v("Gain")]),s("option",{attrs:{value:"security"}},[e._v("Security")]),s("option",{attrs:{value:"settlement_date"}},[e._v("Settlement Date")]),s("option",{attrs:{value:"symbol"}},[e._v("Symbol")]),s("option",{attrs:{value:"ignored"}},[e._v("Ignored")])])])],1)}))],2),s("v-col",{attrs:{cols:"12",sm:"6"}},[s("div",{staticClass:"guidelines"},[s("label",{staticClass:"as"},[e._v("Guidelines")]),s("div",[e._v(" Make sure you map at least the mandatory columns to initiate the process. Date, Type and Amount are required. You can pick multiple fields as Description and the data will be joined into the description fields. ")]),s("div",{staticClass:"mandatory-sec"},[s("div",{staticClass:"mandatory"},[e._v("Mandatory")]),s("div",[e._v(" Date: Is the transaction date."),s("br"),e._v(" Type: Is the transaction type which can be one of deposit, withdrawal, transfer, switch, interest, dividend, distribution, roc, reinvest, tax, fee, sell, buy, income, mtm or unknown."),s("br"),e._v(" Amount: Is the total value of the transaction net of fees."),s("br"),e._v(" Symbol: The stock symbol, required for roc, reinvest, sell and buy. ")])]),s("div",{staticClass:"mandatory-sec"},[s("div",{staticClass:"mandatory"},[e._v("Optional")]),s("div",[e._v(" Description: The description of the transaction."),s("br"),e._v(" Fee: The commission or transaction fee."),s("br"),e._v(" Quantity: Usually the number of stocks bought or sold."),s("br"),e._v(" Settlement Date: The date the transaction was settled."),s("br"),e._v(" Category: Usually used to categorize an expense."),s("br")])]),s("div",{staticClass:"mandatory-sec"},[s("div",{staticClass:"mandatory"},[e._v("Ignored")]),s("div",[e._v(" The data from columns marked as Ignored won’t be imported unless you map the data with one of the mandatory or optional fields. If you would like those specific columns to be imported you can add the data to the Description field. ")])]),s("div",{staticClass:"mandatory-sec"},[s("div",{staticClass:"mandatory"},[e._v("Type >  Unknown")]),s("div",[e._v(" Transactions of type unknown will be imported into Wealtica. Unknown type must be used when the transaction can’t be mapped to the available Wealthica transaction types. ")])])])])],1),e.headersWithDataType.length?s("v-row",[s("v-col",{attrs:{cols:"24",sm:"12"}},[s("div",{staticClass:"row-heading"},[e._v(" 5. Review data that will be imported ... ")])]),s("v-col",{attrs:{cols:"24",sm:"12",align:"center",justify:"center"}},[s("v-btn",{attrs:{depressed:"",color:"primary"},on:{click:e.uploadCSV}},[e._v("Import")])],1),s("v-col",{attrs:{cols:"24",sm:"12"}},[s("v-layout",{staticClass:"review-section",attrs:{column:""}},[s("v-flex",[s("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[s("thead",[s("tr",e._l(e.acceptedHeaders,(function(t){return s("th",{key:t.header,staticClass:"text-left"},[e._v(" "+e._s(t.header)+" as "+e._s(t.dataType)+" ")])})),0)]),s("tbody",e._l(e.dataBeingImported,(function(t,a){return s("tr",{key:a},e._l(t,(function(t,a){return s("td",{key:a},[e._v(" "+e._s(t)+" ")])})),0)})),0)]},proxy:!0}],null,!1,1833191807)})],1)],1)],1)],1):e._e()],1),s("div",{staticClass:"text-center"},[s("v-dialog",{attrs:{persistent:"",width:"300"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-card",{attrs:{color:"primary",dark:""}},[s("v-card-text",[e._v(" Saving your transactions! Please wait! "),s("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1)])},C=[],S=s("4e22"),D=s.n(S);const E=e=>{const t=e.split("\n"),s=t.shift().split(/,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/g);return t.shift(),t.map(e=>{const t=e.split(/,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/g);let a={};return s.forEach((e,s)=>a[e]=t[s]),a})},x=(e,t)=>{const s=[{name:"date",type:"date-time",matching_words:["date","transaction date"]},{name:"currency_amount",type:"number",matching_words:["Amount","Currency Amount","Total"]},{name:"type",type:"string",matching_words:["Type","Activity"]},{name:"asset",type:"String",matching_words:["asset"]},{name:"category",type:"string",matching_words:["category"]},{name:"description",type:"string",matching_words:["description"]},{name:"fee",type:"number",matching_words:["fee"]},{name:"institution",type:"string",matching_words:["institution"]},{name:"investment",type:"string",matching_words:["investment"]},{name:"note",type:"string",matching_words:["note"]},{name:"quantity",type:"number",matching_words:["quantity"]},{name:"realized_gain",type:"number",matching_words:["realized_gain","gain"]},{name:"security",type:"string",matching_words:["security"]},{name:"settlement_date",type:"date-time",matching_words:["Settlement Date"]},{name:"symbol",type:"string",matching_words:["symbol"]}];for(const a of s)if(a["matching_words"].some(t=>e.toLowerCase()===t.toLowerCase())&&N(t,a["type"]))return{header:e,dataType:a["name"]};return{header:e,dataType:"ignored"}},N=(e,t)=>{switch(t){case"date-time":return O(e);case"number":return R(e);case"string":return z(e);default:return!1}},O=e=>"Invalid Date"!==new Date(e)&&!isNaN(new Date(e)),R=e=>"string"==typeof e&&(!isNaN(e)&&!isNaN(parseFloat(e))),z=e=>"string"==typeof e,M=(e,t)=>{let s=e.map(e=>{if("ignored"!=e.dataType)return e.header});return!s.includes(t)},L=(e,t,s)=>{const a=e.filter(e=>e.header==t);return s=U(a[0].dataType,s),{dataType:a[0].dataType,newValue:s}},U=(e,t)=>{switch(e){case"currency_amount":return t=t.match(/((\d){1,3})+([,][\d]{3})*([.](\d)*)?/g)[0],t=t.replace(/,/g,""),t;case"date":return t=D()(t).format("YYYY-MM-DDTHH:mm:ss"),t;case"type":return t=t.toLowerCase(),t;default:return t}};var Y=s("9341"),P={real_estate:{icon:"wicon-property",sub_types:{primary_residence:{default_name:"primary"},secondary_residence:{default_name:"vacation_home"},income_property:{title:"income_or_rental_property",default_name:"income",icon:"wicon-investment"},investment_property:{default_name:"investment",icon:"wicon-investment"},land:{icon:"wicon-location"},other_real_estate:{alt_title:"real_estate",default_name:""}}},private_investment:{icon:"wicon-rocket",sub_types:{private_equity:{default_name:"company_name"},private_fund:{default_name:"fund_name",icon:"wicon-rocket-cash"},vc_fund:{default_name:"fund_name",icon:"wicon-graph"},private_loan:{default_name:"name_of_borrower",icon:"wicon-bag"},insurance:{default_name:"",icon:"wicon-shield"},other_investment:{alt_title:"investment",default_name:"fund_name"}}},other_asset:{title:"other",alt_title:"asset",icon:"wicon-gem"},debt:{sub_types:{mortgage:{icon:"wicon-ccard"},other_debt:{title:"other",alt_title:"liability",icon:"wicon-ccard"}}}},$={data(){return{importTo:"institution",account:null,institutionId:"",investmentId:"",assetId:"",file:null,headers:[],headersWithDataType:[],dataArr:[],dialog:!1,backgroundImage:s("c81c")}},validations:{institutionId:{required:Y["required"]},investmentId:{required:Y["required"]},assetId:{required:Y["required"]}},computed:{...Object(j["c"])(["institutions","assets","selectedCurrency","savedTransactions"]),dataBeingImported(){let e=this.dataArr.map(e=>{let t={};return Object.entries(e).forEach(e=>{const[s,a]=e;M(this.headersWithDataType,s)||(t[s]=a)}),t});return e},importData(){let e=this.dataBeingImported.map(e=>{let t={};return Object.entries(e).forEach(e=>{const[s,a]=e,{dataType:n,newValue:i}=L(this.acceptedHeaders,s,a);t[n]=i}),"withdrawal"==t.type&&(t.currency_amount=-t.currency_amount),t});return e},investments(){return this.institutionId?this.institutions.filter(e=>e.id==this.institutionId)[0].investments:[]},acceptedHeaders(){return this.headersWithDataType.filter(e=>"ignored"!=e.dataType)}},methods:{...Object(j["b"])(["saveTransactions"]),async handleFileUpload(e){e.preventDefault();const t=e.target.files||e.dataTransfer.files,s=await this.getFileData(t[0]);this.dataArr=E(s);const a=this.dataArr[0],n=[];Object.entries(a).map(([e,t])=>{const s=x(e,t);n.push(s)}),this.headersWithDataType=n},async getFileData(e){return new Promise((t,s)=>{const a=new FileReader;a.readAsDataURL(e),a.onload=()=>t(atob(a.result.split(",")[1])),a.onerror=e=>s(e)})},async changeDataType(e,t){e.preventDefault();const s=e.target.value;this.headersWithDataType=this.headersWithDataType.map(e=>e.header==t?{header:t,dataType:s}:{...e})},async uploadCSV(){if(this.$v.$touch(),this.$v.$invalid)if(console.log(JSON.stringify(this.$v)),"institution"==this.importTo){if(this.$v.institutionId.$error){const e=this.$refs["institutionId"];return void e.scrollIntoView({behavior:"smooth"})}if(this.$v.investmentId.$error){const e=this.$refs["investmentId"];return void e.scrollIntoView({behavior:"smooth"})}}else if(this.$v.assetId.$error){const e=this.$refs["assetId"];return void e.scrollIntoView({behavior:"smooth"})}const e=this.$refs["topelement"];e.scrollIntoView({behavior:"smooth"});const t=this.acceptedHeaders.filter(e=>"currency_amount"==e.dataType||"date"==e.dataType||"type"==e.dataType||"description"==e.dataType);if(t.length<4)return void alert("Please make sure you fill all mandatory fields currency_amount, date,  type,  description are required.");this.dialog=!0;const s={importTo:this.importTo,institutionId:this.institutionId,investmentId:this.investmentId,assetId:this.assetId,importData:this.importData};await this.saveTransactions(s),this.savedTransactions&&this.savedTransactions.length&&(console.log("+++++++++++++++++++++++++++++"),setTimeout(()=>{this.dialog=!1;let e="";e="institution"==this.importTo?`institutions=${this.institutionId}&accounts=${this.investmentId}`:"assets="+this.assetId,e=`https://app.wealthica.com/transactions?peek=true&${e}%3Amargin%3Ausd`,console.log("redirectURL :  "+e),window.location.href=e},500))},getAssetIcon(e){return e.image?e.image:null},iconClassName(e){let t;return console.log("ASSET_TYPES "+P),Object.entries(P).forEach(s=>{const[a]=s;a===e?t=P[a].icon:P[a].sub_types&&P[a].sub_types[e]&&(t=P[a].sub_types[e].icon||P[a].icon)}),t}}},q=$,G=(s("bf99"),s("2877")),F=Object(G["a"])(q,k,C,!1,null,null,null),Z=F.exports,V={name:"App",components:{Loading:A.a,UploadForm:Z},data:()=>({profileId:null}),computed:{...Object(j["c"])(["loading"]),appStyle(){return""}}},W=V,B=(s("5c0b"),Object(G["a"])(W,w,I,!1,null,null,null)),H=B.exports,Q=s("034b"),J={state:{addon:null,options:{},institutions:null,assets:null,loading:!0,selectedCurrency:null,savedTransactions:[]},getters:{addon:e=>e.addon,institutions:e=>e.institutions,assets:e=>e.assets,language:()=>"en",loading:e=>e.loading,selectedCurrency:e=>e.selectedCurrency,savedTransactions:e=>e.savedTransactions},mutations:{SET_ADDON(e,t){e.addon=t},SET_LOADING(e,t){e.loading=t},STORE_INSTITUTIONS(e,t){e.institutions=t},STORE_ASSETS(e,t){e.assets=t},SET_SELECTED_CURRENCY(e,t){e.selectedCurrency=t},SET_SAVED_TRANSACTIONS(e,t){e.savedTransactions=t}},actions:{initAddon({commit:e,dispatch:t}){const s={},a=new Q["Addon"](s);e("SET_ADDON",a),a.on("init",e=>t("updateData",e)).on("update",e=>t("updateData",e))},async updateData({commit:e,dispatch:t}){e("SET_LOADING",!0),await t("fetchInstitutionsAndAssets"),await t("fetchCurrencies"),e("SET_LOADING",!1)},async fetchInstitutionsAndAssets({commit:e,getters:t}){const{addon:s}=t,a=await s.api.getInstitutions(),n=await s.api.getAssets();e("STORE_INSTITUTIONS",a),e("STORE_ASSETS",n)},async fetchCurrencies({commit:e,getters:t}){const{addon:s}=t,a=await s.api.getCurrencies(),n=a.find(e=>e.preferred);e("SET_SELECTED_CURRENCY",n)},async saveTransactions({commit:e,dispatch:t},s){const a=s.importTo;let n={};n="institution"==a?{institution:s.institutionId,investment:s.investmentId}:{asset:s.assetId};const i=s.importData,r=await Promise.all(i.map(async e=>(e={...e,...n},await t("postTransaction",e))));e("SET_SAVED_TRANSACTIONS",r)},async postTransaction({getters:e},t){const{addon:s}=e;return new Promise(e=>{const a={method:"POST",endpoint:"transactions",body:t};s.request(a).then((function(t){e({error:null,response:t})})).catch((function(t){e({error:t,response:null})}))})}}};a["default"].use(j["a"]);var X=new j["a"].Store({modules:{addon:J}}),K=s("f583"),ee=s.n(K),te=s("5b2d"),se=s.n(te),ae=s("2ef0");function ne(e,t){return ee()(e)?se()(e).format(t):""}function ie(e,t={}){if(t.privateMode)return"";if(!ee()(e))return t.allowNil?"":"N/A";const{currency:s,showCurrency:a,parentheses:n}=t,i=s&&s.sign||t.symbol||"$",r=t.round?"0,0":"0,0.00";let o=t.format?`${i}${t.format}`:`${i}${r}`;"fr"===t.language&&(o=t.format?`${t.format} ${i}`:`${r} ${i}`);let c=ne(e,o.replace(i,"$")).replace("$",i);return a&&(c=`${c} ${s._id.toUpperCase()}`),n&&(c=`(${c})`),c}function re(e,t={}){return ae["isFinite"](e)?ne(e,t.round?"0%":"0.00%"):t.allowNil?"":"N/A"}a["default"].filter("formatMoney",ie),a["default"].filter("formatPercentage",re);s("b27c"),s("8782");a["default"].config.productionTip=!1,a["default"].use(h.a),a["default"].use(g["a"],{defaultLanguage:"en",languagesAvailable:["en","fr"]}),a["default"].locales(_),new a["default"]({store:X,computed:{...Object(j["c"])(["language"])},watch:{language(e){this.$polyglot.setLang({lang:e}),se.a.locale("fr"===e?"fr-ca":e)}},methods:{...Object(j["b"])(["initAddon"])},created(){this.initAddon()},vuetify:o,render:e=>e(H)}).$mount("#app")},"5c0b":function(e,t,s){"use strict";s("4fff")},"982c":function(e,t,s){var a=s("c8ef").default,n=s("4624").default,i=["class","staticClass","style","staticStyle","attrs"];s("862d"),e.exports={functional:!0,render:function(e,t){var s=t._c,r=(t._v,t.data),o=t.children,c=void 0===o?[]:o,l=r.class,d=r.staticClass,u=r.style,p=r.staticStyle,m=r.attrs,v=void 0===m?{}:m,f=n(r,i);return s("svg",a({class:[l,d],style:[u,p],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"54",height:"54",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},v)},f),c.concat([s("circle",{attrs:{cx:"50",cy:"50",fill:"none",stroke:"#7f3eab","stroke-width":"10",r:"29","stroke-dasharray":"136.659280431156 47.553093477052"}},[s("animateTransform",{attrs:{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"}})])]))}}},b27c:function(e,t,s){},bf99:function(e,t,s){"use strict";s("2104")},c81c:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTIxODBBNjBFNkZFMTFFQjhCNzhFMTI3NjJEM0UxRDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTIxODBBNjFFNkZFMTFFQjhCNzhFMTI3NjJEM0UxRDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMjE4MEE1RUU2RkUxMUVCOEI3OEUxMjc2MkQzRTFEOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMjE4MEE1RkU2RkUxMUVCOEI3OEUxMjc2MkQzRTFEOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmanGO0AAADqSURBVHjaYvz//z8DJYAFRHzvmxj0a8OmwP9//rIQpYuZ6Q97gN9GzuKCNYwgF3y0c17MKCYWw2phRpT+3ydPMfx78XKJwOF9sWAbQTazATVzlhQS5+7+SQw/V68D62Ui1q+/jx5j+P/+A4Y4UQZ8a2ln+BwZx/Dn+nXSDQBp/jFrLgNHegoDq5UlaQYga+aqrsCqhokSzTgNIFYzVgNAoU2sZnhKRBHQ1GTgXbKAgdXOhqjoxXABo5Ag0ZrhLmBkYf4DSp6gFEYM+HPiJFgP3AC2AL/1wMwET56EAEgzW6D/ejCb0uwMEGAAYY9lGFxlxacAAAAASUVORK5CYII="}});
//# sourceMappingURL=app.4e34c611.js.map