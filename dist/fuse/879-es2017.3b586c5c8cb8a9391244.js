"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[879],{82879:function(t,e,o){o.r(e),o.d(e,{FotpModule:function(){return x}});var n=o(38583),r=o(3679),l=o(86986),i=o(20945),s=o(37716),a=o(63423),f=o(41256),u=o(21978),m=o(51095),p=o(76627),d=o(35618);function c(t,e){1&t&&s._UZ(0,"label",35)}let g=(()=>{class t{constructor(t,e,o,n){this.formBuilder=t,this.router=e,this.regisService=o,this.alertMessage=n,this.time1=0,this.isDisabled=!0,this.otp="",this.fotpForm=this.formBuilder.group({otp1:["",[r.kI.required]],otp2:["",[r.kI.required]],otp3:["",[r.kI.required]],otp4:["",[r.kI.required]],otp5:["",[r.kI.required]],otp6:["",[r.kI.required]]})}ngOnInit(){if(localStorage.getItem("otp")){let t=JSON.parse(localStorage.getItem("otp")||"");this.otp=t.refCode,this.sendotp()}else this.warrning()}otpformSubmit(){if(localStorage.getItem("otp")){const t=JSON.parse(localStorage.getItem("otp")||"");if(t.mobileNo&&t.refCode&&t.type){let e=this.fotpForm.value,o=e.otp1+e.otp2+e.otp3+e.otp4+e.otp5+e.otp6;if(6==o.length){let e=new l.lE;e.mobileNo=t.mobileNo,e.refCode=t.refCode,e.otp=o,e.type=t.type,this.regisService.confirmOtp(e).then(t=>{console.log(t),t&&(console.log(t),localStorage.removeItem("otp"),localStorage.setItem("otp",JSON.stringify(t)),this.router.navigate(["/fpass"]))})}else this.alertMessage.open({title:"Warning",message:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01OTP\u0e43\u0e2b\u0e49\u0e04\u0e23\u0e1a"}).then(t=>{})}else this.warrning()}else this.warrning()}sendotp(){if(0==this.time1){this.isDisabled=!0,this.time1=15,this.label="( "+this.time1+" \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35 )";let t=(0,i.F)(1e3).subscribe(e=>{this.time1-=1,this.label="( "+this.time1+" \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35 )",this.time1<=0&&(this.isDisabled=!1,this.label="",t.unsubscribe())})}else this.alertMessage.open({title:"Warning",message:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e23\u0e2d\u0e2d\u0e35\u0e01 "+this.time1+" \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35"}).then(t=>{})}otpController(t,e,o){t.target.value.length<1&&o?o.focus():e&&t.target.value.length>0&&e.focus()}back(){this.router.navigate(["/login"])}warrning(){this.alertMessage.open({title:"Warning",message:"\u0e42\u0e1b\u0e23\u0e14\u0e17\u0e33\u0e15\u0e32\u0e21\u0e02\u0e31\u0e49\u0e19\u0e15\u0e2d\u0e19"}).then(t=>{t&&this.router.navigate(["/login"])})}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(r.qu),s.Y36(a.F0),s.Y36(f.I),s.Y36(u.O))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-fotp"]],decls:42,vars:6,consts:[[1,"flex","flex-col","flex-auto","bg-white"],[1,"sm:w-3/12","sm:ml-16","md:w-1/12","md:ml-16","lg:w-2/12","lg:ml-16","xl:w-1/12","xl:ml-16"],["mat-flat-button","",1,"fuse-mat-button-rounded","text-black","mt-16","bg-purple-300","w-full",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],[1,"flex","flex-col","sm:flex-row","h-screen","items-center","md:items-center","sm:justify-center","md:justify-center","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-100","max-w-full","md:w-100","mx-auto","sm:w-100","sm:mx-0"],[1,"flex","justify-center","mb-8"],["src","assets/image/11Logo.png",1,"h-32","w-32"],[1,"flex","justify-center","pt-8"],[1,"font-medium","text-6xl","kanit","text-purple-600"],[1,"flex","justify-center"],[1,"font-normal","kanit","text-xl","mt-5"],["name","loginForm","novalidate","","fxLayout","column",1,"pt-5","w-full",3,"formGroup"],[1,"flex","flex-row","justify-center"],["formControlName","otp1","autocomplete","off","maxlength","1",1,"text-xl","font-normal","kanit","w-12","h-12","border-2","border-solid","border-purple-600","text-center","rounded",3,"keyup"],["otp1",""],["formControlName","otp2","autocomplete","off","maxlength","1",1,"text-xl","font-normal","kanit","w-12","h-12","border-2","border-solid","border-purple-600","text-center","rounded","ml-5",3,"keyup"],["otp2",""],["formControlName","otp3","autocomplete","off","maxlength","1",1,"text-xl","font-normal","kanit","w-12","h-12","border-2","border-solid","border-purple-600","text-center","rounded","ml-5",3,"keyup"],["otp3",""],["formControlName","otp4","autocomplete","off","maxlength","1",1,"text-xl","font-normal","kanit","w-12","h-12","border-2","border-solid","border-purple-600","text-center","rounded","ml-5",3,"keyup"],["otp4",""],["formControlName","otp5","autocomplete","off","maxlength","1",1,"text-xl","font-normal","kanit","w-12","h-12","border-2","border-solid","border-purple-600","text-center","rounded","ml-5",3,"keyup"],["otp5",""],["formControlName","otp6","autocomplete","off","maxlength","1",1,"text-xl","font-normal","kanit","w-12","h-12","border-2","border-solid","border-purple-600","text-center","rounded","ml-5",3,"keyup"],["otp6",""],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6","btn-main","text-white","kanit",3,"click"],[1,"flex","justify-center","mt-5"],["type","button",1,"font-medium","text-base","kanit",3,"disabled","click"],["class","pl-5",4,"ngIf"],[1,"font-medium","kanit","text-base","text-red-500"],[1,"relative","hidden","md:flex","md:w-1/2","md:h-full","overflow-hidden","dark:border-l","bg-white","aff"],["src","../../../../assets/images/auth/New OTP@2x.png",2,"height","80%","width","80%","margin-top","10%"],[1,"pl-5"]],template:function(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"button",2),s.NdJ("click",function(){return e.back()}),s._UZ(3,"mat-icon",3),s.TgZ(4,"span",4),s._uU(5,"\u0e01\u0e25\u0e31\u0e1a"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(6,"div",5),s.TgZ(7,"div",6),s.TgZ(8,"div",7),s.TgZ(9,"div",8),s._UZ(10,"img",9),s.qZA(),s.TgZ(11,"div",10),s.TgZ(12,"h1",11),s._uU(13,"\u0e23\u0e2b\u0e31\u0e2a OTP"),s.qZA(),s.qZA(),s.TgZ(14,"div",12),s.TgZ(15,"p",13),s._uU(16),s.qZA(),s.qZA(),s.TgZ(17,"form",14),s.TgZ(18,"div",15),s.TgZ(19,"input",16,17),s.NdJ("keyup",function(o){s.CHM(t);const n=s.MAs(22);return e.otpController(o,n,"")}),s.qZA(),s.TgZ(21,"input",18,19),s.NdJ("keyup",function(o){s.CHM(t);const n=s.MAs(24),r=s.MAs(20);return e.otpController(o,n,r)}),s.qZA(),s.TgZ(23,"input",20,21),s.NdJ("keyup",function(o){s.CHM(t);const n=s.MAs(26),r=s.MAs(22);return e.otpController(o,n,r)}),s.qZA(),s.TgZ(25,"input",22,23),s.NdJ("keyup",function(o){s.CHM(t);const n=s.MAs(28),r=s.MAs(24);return e.otpController(o,n,r)}),s.qZA(),s.TgZ(27,"input",24,25),s.NdJ("keyup",function(o){s.CHM(t);const n=s.MAs(30),r=s.MAs(26);return e.otpController(o,n,r)}),s.qZA(),s.TgZ(29,"input",26,27),s.NdJ("keyup",function(o){s.CHM(t);const n=s.MAs(28);return e.otpController(o,"",n)}),s.qZA(),s.qZA(),s.TgZ(31,"button",28),s.NdJ("click",function(){return e.otpformSubmit()}),s.TgZ(32,"span"),s._uU(33," \u0e16\u0e31\u0e14\u0e44\u0e1b "),s.qZA(),s.qZA(),s.TgZ(34,"div",29),s.TgZ(35,"button",30),s.NdJ("click",function(){return e.sendotp()}),s._uU(36,"\u0e02\u0e2d OTP \u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07"),s.qZA(),s.YNc(37,c,1,0,"label",31),s.TgZ(38,"label",32),s._uU(39),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(40,"div",33),s._UZ(41,"img",34),s.qZA(),s.qZA(),s.qZA()}2&t&&(s.xp6(3),s.Q6J("svgIcon","heroicons_outline:arrow-sm-left"),s.xp6(13),s.hij("\u0e23\u0e2b\u0e31\u0e2a\u0e2d\u0e49\u0e32\u0e07\u0e2d\u0e34\u0e07 : ",e.otp,""),s.xp6(1),s.Q6J("formGroup",e.fotpForm),s.xp6(18),s.Q6J("disabled",e.isDisabled),s.xp6(2),s.Q6J("ngIf",0!=e.time1),s.xp6(2),s.Oqu(e.label))},directives:[m.lW,p.Hw,r._Y,r.JL,d.xw,r.sg,r.Fj,r.JJ,r.u,r.nD,n.O5],styles:['@font-face{font-family:"Kanit";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/kanit/v7/nKKZ-Go6G5tXcraBGwCYdA.woff2) format("woff2");unicode-range:U+0E01-0E5B,U+200C-200D,U+25CC}@font-face{font-family:"Kanit";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/kanit/v7/nKKZ-Go6G5tXcraaGwCYdA.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:"Kanit";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/kanit/v7/nKKZ-Go6G5tXcrabGwCYdA.woff2) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:"Kanit";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/kanit/v7/nKKZ-Go6G5tXcraVGwA.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}a[_ngcontent-%COMP%]{text-decoration:none;outline:none}.kanit[_ngcontent-%COMP%]{font-family:kanit}button[_ngcontent-%COMP%]:enabled{color:#000}button[_ngcontent-%COMP%]:disabled, button[disabled][_ngcontent-%COMP%]{color:#666}']}),t})();var h=o(79439);const b=[{path:"",component:g}];let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[n.ez,a.Bz.forChild(b),h.m]]}),t})()}}]);