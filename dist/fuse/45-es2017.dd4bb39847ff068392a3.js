"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[45],{11045:function(t,e,o){o.r(e),o.d(e,{CPAModule:function(){return x}});var n=o(38583),i=o(37716),l=o(98295),a=o(49983),f=o(51095),r=o(81560),s=o(10805),u=o(3679);function p(t,e){if(1&t&&(i.TgZ(0,"option",27),i._uU(1),i.qZA()),2&t){const t=e.$implicit;i.s9C("value",t.id),i.xp6(1),i.Oqu(t.month)}}function d(t,e){if(1&t&&(i.TgZ(0,"option",27),i._uU(1),i.qZA()),2&t){const t=e.$implicit;i.s9C("value",t.id),i.xp6(1),i.Oqu(t.year)}}function c(t,e){1&t&&(i.TgZ(0,"tr",9),i.TgZ(1,"th",28),i._uU(2,"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 "),i._UZ(3,"p-sortIcon",29),i.qZA(),i.TgZ(4,"th",30),i._uU(5,"\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19 "),i._UZ(6,"p-sortIcon",31),i.qZA(),i.TgZ(7,"th",32),i._uU(8,"\u0e1d\u0e32\u0e01\u0e40\u0e07\u0e34\u0e19 "),i._UZ(9,"p-sortIcon",33),i.qZA(),i.TgZ(10,"th",34),i._uU(11,"\u0e1d\u0e32\u0e01\u0e40\u0e07\u0e34\u0e19\u0e04\u0e23\u0e31\u0e49\u0e07\u0e41\u0e23\u0e01 "),i._UZ(12,"p-sortIcon",35),i.qZA(),i.TgZ(13,"th",36),i._uU(14,"\u0e22\u0e2d\u0e14\u0e0b\u0e37\u0e49\u0e2d "),i._UZ(15,"p-sortIcon",37),i.qZA(),i.TgZ(16,"th",38),i._uU(17,"\u0e01\u0e33\u0e44\u0e23 "),i._UZ(18,"p-sortIcon",39),i.qZA(),i.TgZ(19,"th",40),i._uU(20,"\u0e23\u0e32\u0e22\u0e44\u0e14\u0e49 "),i._UZ(21,"p-sortIcon",41),i.qZA(),i.qZA())}function g(t,e){if(1&t&&(i.TgZ(0,"tr"),i.TgZ(1,"td"),i._uU(2),i.qZA(),i.TgZ(3,"td"),i._uU(4),i.qZA(),i.TgZ(5,"td"),i._uU(6),i.qZA(),i.TgZ(7,"td"),i._uU(8),i.qZA(),i.TgZ(9,"td"),i._uU(10),i.ALo(11,"currency"),i.qZA(),i.TgZ(12,"td"),i._uU(13),i.ALo(14,"currency"),i.qZA(),i.TgZ(15,"td"),i._uU(16),i.ALo(17,"currency"),i.qZA(),i.qZA()),2&t){const t=e.$implicit;i.xp6(2),i.Oqu(t.date),i.xp6(2),i.Oqu(t.register),i.xp6(2),i.Oqu(t.deposit),i.xp6(2),i.Oqu(t.fistdeposit),i.xp6(2),i.Oqu(i.xi3(11,7,t.buy,"\u0e3f")),i.xp6(3),i.Oqu(i.xi3(14,10,t.profit,"\u0e3f")),i.xp6(3),i.Oqu(i.xi3(17,13,t.income,"\u0e3f"))}}let m=(()=>{class t{constructor(){this.monthList=[],this.yearList=[],this.inComeList=[]}ngOnInit(){this.monthList=[{id:1,month:"\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21"},{id:2,month:"\u0e01\u0e38\u0e21\u0e1e\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c"},{id:3,month:"\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21"},{id:4,month:"\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19"},{id:5,month:"\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21"},{id:6,month:"\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19"},{id:7,month:"\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21"},{id:8,month:"\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21"},{id:9,month:"\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19"},{id:10,month:"\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21"},{id:11,month:"\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19"},{id:12,month:"\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21"}],this.setYear(),this.getInComeData()}setYear(){for(var t=(new Date).getFullYear(),e=t-5;e<t;e++)this.yearList.unshift({id:e,year:e})}getInComeData(){this.inComeList=[{date:"10-02-2022",register:"1",deposit:500,fistdeposit:500,buy:5e3,profit:500,income:500},{date:"10-01-2022",register:"1",deposit:5e4,fistdeposit:5e4,buy:5e5,profit:5e4,income:5e4},{date:"10-03-2022",register:"1",deposit:5e3,fistdeposit:5e3,buy:5e4,profit:5e3,income:5e3}]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-CPA"]],decls:37,vars:3,consts:[[1,"flex","flex-col","flex-auto"],[1,"bg-card"],[1,"flex","flex-col","w-full"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex","flex-col","min-w-0"],[1,"text-7xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate","ml-8"],[1,"flex","flex-col","flex-auto","min-w-0","bg-main"],[1,"flex-auto","p-6","sm:p-10"],[1,""],[1,"flex","flex-auto","justify-center"],[1,"flex","flex-auto","pr-32","pl-32"],[1,"flex","w-72"],["appearance","fill",1,"w-full"],[1,"kanit","font-black","text-base"],["matNativeControl",""],[3,"value",4,"ngFor","ngForOf"],[1,"flex","w-72","ml-5"],[1,"flex","flex-auto","ml-5"],[1,"flex","flex-auto"],["type","button","mat-flat-button","",1,"rounded-3xl","py-2","btn-main","text-white","kanit","w-3/4","text-lg","font-medium","mt-7"],["type","button","mat-flat-button","",1,"bg-red-500","btnreset","rounded-3xl","text-white","kanit","w-3/4","text-lg","font-medium","mt-7"],[1,"flex","flex-auto","justify-center","mt-5"],[1,"rounded-2xl","w-full"],[1,"w-full",3,"value"],["pTemplate","header"],["pTemplate","body"],[3,"value"],["pSortableColumn","date",1,"bg-purple-300"],["field","date"],["pSortableColumn","register",1,"bg-purple-300"],["field","register"],["pSortableColumn","deposit",1,"bg-purple-300"],["field","deposit"],["pSortableColumn","fistdeposit",1,"bg-purple-300"],["field","fistdeposit"],["pSortableColumn","buy",1,"bg-purple-300"],["field","buy"],["pSortableColumn","profit",1,"bg-purple-300"],["field","profit"],["pSortableColumn","income",1,"bg-purple-300"],["field","income"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.TgZ(3,"div",3),i.TgZ(4,"div",4),i.TgZ(5,"div",5),i.TgZ(6,"div",6),i._uU(7," \u0e2a\u0e16\u0e34\u0e15\u0e34 CPA"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(8,"div",7),i.TgZ(9,"div",8),i.TgZ(10,"div",9),i.TgZ(11,"div",10),i.TgZ(12,"div",11),i.TgZ(13,"div",12),i.TgZ(14,"mat-form-field",13),i.TgZ(15,"mat-label",14),i._uU(16,"\u0e40\u0e14\u0e37\u0e2d\u0e19"),i.qZA(),i.TgZ(17,"select",15),i.YNc(18,p,2,2,"option",16),i.qZA(),i.qZA(),i.qZA(),i.TgZ(19,"div",17),i.TgZ(20,"mat-form-field",13),i.TgZ(21,"mat-label",14),i._uU(22,"\u0e1b\u0e35"),i.qZA(),i.TgZ(23,"select",15),i.YNc(24,d,2,2,"option",16),i.qZA(),i.qZA(),i.qZA(),i.TgZ(25,"div",18),i.TgZ(26,"div",19),i.TgZ(27,"button",20),i._uU(28,"\u0e04\u0e49\u0e19\u0e2b\u0e32"),i.qZA(),i.qZA(),i.TgZ(29,"div",19),i.TgZ(30,"button",21),i._uU(31,"\u0e23\u0e35\u0e40\u0e0b\u0e15"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(32,"div",22),i.TgZ(33,"div",23),i.TgZ(34,"p-table",24),i.YNc(35,c,22,0,"ng-template",25),i.YNc(36,g,18,16,"ng-template",26),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(18),i.Q6J("ngForOf",e.monthList),i.xp6(6),i.Q6J("ngForOf",e.yearList),i.xp6(10),i.Q6J("value",e.inComeList))},directives:[l.KE,l.hX,a.Nt,n.sg,f.lW,r.iA,s.jx,u.YN,u.Kr,r.lQ,r.fz],pipes:[n.H9],styles:['@font-face{font-family:"Kanit";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/kanit/v7/nKKZ-Go6G5tXcraBGwCYdA.woff2) format("woff2");unicode-range:U+0E01-0E5B,U+200C-200D,U+25CC}@font-face{font-family:"Kanit";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/kanit/v7/nKKZ-Go6G5tXcraaGwCYdA.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:"Kanit";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/kanit/v7/nKKZ-Go6G5tXcrabGwCYdA.woff2) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:"Kanit";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/kanit/v7/nKKZ-Go6G5tXcraVGwA.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}a[_ngcontent-%COMP%]{text-decoration:none;outline:none}.aff[_ngcontent-%COMP%]{background-image:url(/assets/image/affbg.png);background-repeat:no-repeat,repeat;background-position:right}.kanit[_ngcontent-%COMP%]{font-family:kanit}button[_ngcontent-%COMP%]:enabled{color:#000}button[_ngcontent-%COMP%]:disabled, button[disabled][_ngcontent-%COMP%]{color:#666}']}),t})();var Z=o(63423),A=o(79439);const U=[{path:"",component:m}];let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[n.ez,Z.Bz.forChild(U),A.m]]}),t})()}}]);