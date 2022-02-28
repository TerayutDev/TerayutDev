!function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[471],{18471:function(n,o,a){a.r(o),a.d(o,{CpassModule:function(){return v}});var i,s=a(38583),r=a(3679),l=a(86986),f=a(37716),m=a(63423),u=a(41256),c=a(21978),g=a(51095),d=a(76627),p=a(98295),w=a(49983),h=((i=function(){function n(e,o,a,i){t(this,n),this.formBuilder=e,this.router=o,this.regisService=a,this.alertMessage=i,this.hide1=!0,this.hide2=!0,this.passForm=this.formBuilder.group({password1:["",[r.kI.required]],password2:["",[r.kI.required]]})}var o,a,i;return o=n,(a=[{key:"ngOnInit",value:function(){localStorage.getItem("otp")||this.warrning()}},{key:"passformSubmit",value:function(){var t=this;if(localStorage.getItem("otp")){var e=JSON.parse(localStorage.getItem("otp")||"");if(e.MmbCode&&e.mobileNo){var n=this.passForm.value,o=n.password1,a=n.password2,i=o.length,s=a.length;if(6!=i)this.alertMessage.open({title:"Warning",message:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e43\u0e2b\u0e49\u0e04\u0e23\u0e1a6\u0e2b\u0e25\u0e31\u0e01"}).then(function(t){});else if(6!=s)this.alertMessage.open({title:"Warning",message:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e43\u0e2b\u0e49\u0e04\u0e23\u0e1a6\u0e2b\u0e25\u0e31\u0e01"}).then(function(t){});else if(6==i&&6==s){var r=new l.eH;r.memberCode=e.MmbCode,r.password=o,r.confirmPassword=a,r.mobileNo=e.mobileNo,console.log(r),this.regisService.confirmPass(r).then(function(e){console.log(e),e&&(localStorage.removeItem("otp"),localStorage.setItem("otp",JSON.stringify(e)),t.router.navigate(["/cdone"]))})}}else this.warrning()}else this.warrning()}},{key:"warrning",value:function(){var t=this;this.alertMessage.open({title:"Warning",message:"\u0e42\u0e1b\u0e23\u0e14\u0e17\u0e33\u0e15\u0e32\u0e21\u0e02\u0e31\u0e49\u0e19\u0e15\u0e2d\u0e19"}).then(function(e){e&&t.router.navigate(["/login"])})}},{key:"back",value:function(){this.router.navigate(["/login"])}}])&&e(o.prototype,a),i&&e(o,i),n}()).\u0275fac=function(t){return new(t||i)(f.Y36(r.qu),f.Y36(m.F0),f.Y36(u.I),f.Y36(c.O))},i.\u0275cmp=f.Xpm({type:i,selectors:[["app-cpass"]],decls:28,vars:4,consts:[[1,"flex","flex-col","flex-auto","bg-white"],[1,"sm:w-3/12","sm:ml-16","md:w-1/12","md:ml-16","lg:w-2/12","lg:ml-16","xl:w-1/12","xl:ml-16"],["mat-flat-button","",1,"fuse-mat-button-rounded","text-black","mt-16","bg-purple-300","w-full",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],[1,"flex","flex-col","sm:flex-row","h-screen","items-center","md:items-center","sm:justify-center","md:justify-center","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-100","max-w-full","md:w-100","sm:w-100","mx-auto","my-auto","sm:mx-0"],[1,"flex","justify-center","mb-8"],["src","assets/image/11Logo.png",1,"h-32","w-32"],[1,"flex","justify-center","pt-8"],[1,"font-medium","text-7xl","kanit","text-purple-600"],["name","loginForm","novalidate","",1,"mt-5",3,"formGroup"],[1,"w-full"],[1,"kanit","font-medium"],["matInput","","formControlName","password1","maxlength","6",1,"kanit","font-medium","text-base","text-black","pl-2.5",3,"type"],["matInput","","formControlName","password2","maxlength","6",1,"kanit","font-medium","text-base","text-black","pl-2.5",3,"type"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6","btn-main","text-white","kanit",3,"click"],[1,"relative","hidden","md:flex","md:w-1/2","md:h-full","overflow-hidden","dark:border-l","bg-white","aff"],["src","../../../../assets/images/auth/Password_1@2x@2x.png",2,"height","100%","width","100%","margin-top","10%"]],template:function(t,e){1&t&&(f.TgZ(0,"div",0),f.TgZ(1,"div",1),f.TgZ(2,"button",2),f.NdJ("click",function(){return e.back()}),f._UZ(3,"mat-icon",3),f.TgZ(4,"span",4),f._uU(5,"\u0e01\u0e25\u0e31\u0e1a"),f.qZA(),f.qZA(),f.qZA(),f.TgZ(6,"div",5),f.TgZ(7,"div",6),f.TgZ(8,"div",7),f.TgZ(9,"div",8),f._UZ(10,"img",9),f.qZA(),f.TgZ(11,"div",10),f.TgZ(12,"h1",11),f._uU(13,"\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19"),f.qZA(),f.qZA(),f.TgZ(14,"form",12),f.TgZ(15,"mat-form-field",13),f.TgZ(16,"mat-label",14),f._uU(17,"\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19"),f.qZA(),f._UZ(18,"input",15),f.qZA(),f.TgZ(19,"mat-form-field",13),f.TgZ(20,"mat-label",14),f._uU(21,"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19"),f.qZA(),f._UZ(22,"input",16),f.qZA(),f.TgZ(23,"button",17),f.NdJ("click",function(){return e.passformSubmit()}),f.TgZ(24,"span"),f._uU(25," \u0e15\u0e01\u0e25\u0e07 "),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.TgZ(26,"div",18),f._UZ(27,"img",19),f.qZA(),f.qZA(),f.qZA()),2&t&&(f.xp6(3),f.Q6J("svgIcon","heroicons_outline:arrow-sm-left"),f.xp6(11),f.Q6J("formGroup",e.passForm),f.xp6(4),f.Q6J("type",e.hide1?"password":"text"),f.xp6(4),f.Q6J("type",e.hide2?"password":"text"))},directives:[g.lW,d.Hw,r._Y,r.JL,r.sg,p.KE,p.hX,w.Nt,r.Fj,r.JJ,r.u,r.nD],styles:['@font-face{font-family:"Kanit";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/kanit/v7/nKKZ-Go6G5tXcraBGwCYdA.woff2) format("woff2");unicode-range:U+0E01-0E5B,U+200C-200D,U+25CC}@font-face{font-family:"Kanit";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/kanit/v7/nKKZ-Go6G5tXcraaGwCYdA.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:"Kanit";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/kanit/v7/nKKZ-Go6G5tXcrabGwCYdA.woff2) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:"Kanit";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/kanit/v7/nKKZ-Go6G5tXcraVGwA.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.kanit[_ngcontent-%COMP%]{font-family:kanit}']}),i),U=a(79439),Z=[{path:"",component:h}],v=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f.oAB({type:e}),e.\u0275inj=f.cJS({imports:[[s.ez,m.Bz.forChild(Z),U.m]]}),e}()}}])}();