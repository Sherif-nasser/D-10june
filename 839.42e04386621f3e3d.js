"use strict";(self.webpackChunkITSP=self.webpackChunkITSP||[]).push([[839],{6839:(Ne,R,s)=>{s.r(R),s.d(R,{default:()=>Pe});var p=s(6814),b=s(846),r=s(5879);let U=(()=>{class i{static#e=this.\u0275fac=function(t){return new(t||i)};static#t=this.\u0275cmp=r.Xpm({type:i,selectors:[["app-main-meetings"]],standalone:!0,features:[r.jDz],decls:1,vars:0,template:function(t,a){1&t&&r._UZ(0,"router-outlet")},dependencies:[p.ez,b.lC]})}return i})();var T=s(8034),y=s(8733),G=s(1818),Q=s(2135),V=s(7728),u=s(6223),m=s(3680);s(2831);let Z=(()=>{class i{static#e=this.\u0275fac=function(t){return new(t||i)};static#t=this.\u0275mod=r.oAB({type:i});static#i=this.\u0275inj=r.cJS({})}return i})();s(6825);var q=s(7131);let C=(()=>{class i{static#e=this.\u0275fac=function(t){return new(t||i)};static#t=this.\u0275mod=r.oAB({type:i});static#i=this.\u0275inj=r.cJS({imports:[m.BQ,p.ez,q.Q8,m.BQ]})}return i})(),O=(()=>{class i{static#e=this.\u0275fac=function(t){return new(t||i)};static#t=this.\u0275mod=r.oAB({type:i});static#i=this.\u0275inj=r.cJS({imports:[m.BQ,C,C,Z,m.BQ]})}return i})();var ne=s(4300),P=s(9594),re=s(8484),le=s(2296),de=s(7888),A=s(8645);s(7394),s(6028),s(2495);let me=(()=>{class i{constructor(){this.changes=new A.x,this.calendarLabel="Calendar",this.openCalendarLabel="Open calendar",this.closeCalendarLabel="Close calendar",this.prevMonthLabel="Previous month",this.nextMonthLabel="Next month",this.prevYearLabel="Previous year",this.nextYearLabel="Next year",this.prevMultiYearLabel="Previous 24 years",this.nextMultiYearLabel="Next 24 years",this.switchToMonthViewLabel="Choose date",this.switchToMultiYearViewLabel="Choose month and year",this.startDateLabel="Start date",this.endDateLabel="End date"}formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static#e=this.\u0275fac=function(t){return new(t||i)};static#t=this.\u0275prov=r.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();const ye={provide:new r.OlP("mat-datepicker-scroll-strategy"),deps:[P.aV],useFactory:function be(i){return()=>i.scrollStrategies.reposition()}};let z=(()=>{class i{static#e=this.\u0275fac=function(t){return new(t||i)};static#t=this.\u0275mod=r.oAB({type:i});static#i=this.\u0275inj=r.cJS({providers:[me,ye],imports:[p.ez,le.ot,P.U8,ne.rt,re.eL,m.BQ,de.ZD]})}return i})();var S=s(9862),Ee=s(553),Fe=s(6996);let H=(()=>{class i{constructor(e,t){this.http=e,this.navService=t,this.meetingsListUrl=`${Ee.N.url}meetings`}initializeNavItems(){this.navService.setNavItems([{name:"\u0639\u0631\u0636 \u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0642\u0627\u0628\u0644\u0627\u062a",routerLink:"/dashboard/meetings"}])}GetMeetingsList(e){let t=new S.LE;return e&&Object.keys(e).forEach(a=>{t=t.append(a,e[a])}),this.http.get(this.meetingsListUrl,{params:t})}GetMeetingById(e){return this.http.get(`${this.meetingsListUrl}/${e}`)}UpdateMeeting(e,t,a){const n=`${this.meetingsListUrl}/${e}`;let l=new S.LE;a&&Object.keys(a).forEach(h=>{l=l.append(h,a[h])});const o=new FormData;return Object.keys(t).forEach(h=>{o.append(h,t[h])}),this.http.post(n,o,{params:l})}DeleteMeeting(e){return this.http.delete(`${this.meetingsListUrl}/${e}`)}static#e=this.\u0275fac=function(t){return new(t||i)(r.LFG(S.eN),r.LFG(Fe.f))};static#t=this.\u0275prov=r.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var j=s(7700);const Ie=function(i){return{color:i}};function Se(i,d){if(1&i){const e=r.EpF();r.TgZ(0,"div",12)(1,"div",13)(2,"div",14)(3,"a",15)(4,"h5",16),r._uU(5),r.qZA(),r.TgZ(6,"h5",16),r._uU(7,"\u0627\u0644\u0633\u0627\u0639\u0629: 5 AM"),r.qZA()(),r.TgZ(8,"div",1),r._UZ(9,"app-truncate-text",17),r.TgZ(10,"p",18)(11,"span",19),r._uU(12," \u0627\u0644\u062d\u0627\u0644\u0629: "),r.TgZ(13,"span",20),r._uU(14),r.qZA()()(),r.TgZ(15,"div",21)(16,"button",22),r._UZ(17,"i",23),r._uU(18," \u0642\u0628\u0648\u0644 "),r.qZA(),r.TgZ(19,"button",24),r.NdJ("click",function(){const n=r.CHM(e).$implicit,l=r.oxw();return r.KtG(l.deleteMeeting(n.id,n.description))}),r._UZ(20,"i",25),r._uU(21," \u062d\u0630\u0641 "),r.qZA()()()()()()}if(2&i){const e=d.$implicit,t=r.oxw();r.xp6(5),r.hij("\u0627\u0644\u062a\u0627\u0631\u064a\u062e: ",e.date,""),r.xp6(4),r.Q6J("text",e.description)("limit",150),r.xp6(4),r.Q6J("ngStyle",r.VKq(5,Ie,"pending"===e.status?"red":"initial")),r.xp6(1),r.Oqu(t.getStatusName(e.status))}}function Re(i,d){1&i&&(r.TgZ(0,"div",26)(1,"p"),r._uU(2,"\u0644\u0627 \u064a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),r.qZA()())}function Ve(i,d){if(1&i){const e=r.EpF();r.TgZ(0,"div",7)(1,"div",8)(2,"div",9)(3,"div",10)(4,"div",11)(5,"a",12)(6,"h5",13),r._uU(7),r.qZA(),r.TgZ(8,"h5",13),r._uU(9,"\u0627\u0644\u0633\u0627\u0639\u0629: 5 AM"),r.qZA()()(),r.TgZ(10,"div",14)(11,"button",15),r._uU(12,"\u0642\u0628\u0648\u0644"),r.qZA(),r.TgZ(13,"button",16),r.NdJ("click",function(){r.CHM(e);const a=r.oxw();return r.KtG(a.deleteMeeting(a.meeting.id,a.meeting.description))}),r._uU(14," \u062d\u0630\u0641 "),r.qZA()()(),r.TgZ(15,"div",1),r._UZ(16,"app-truncate-text",17),r.TgZ(17,"p",18)(18,"span",19),r._uU(19," \u0627\u0644\u062d\u0627\u0644\u0629: \u0645\u0639\u0644\u0642 "),r.qZA()()()()()()}if(2&i){const e=r.oxw();r.xp6(7),r.hij("\u0627\u0644\u062a\u0627\u0631\u064a\u062e: ",e.meeting.date,""),r.xp6(9),r.Q6J("text",e.meeting.description)("limit",150)}}function Oe(i,d){1&i&&(r.TgZ(0,"div",20)(1,"p"),r._uU(2,"\u0644\u0627 \u064a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),r.qZA()())}const Pe=[{path:"",component:U,children:[{path:"",component:(()=>{class i{constructor(e,t,a,n){this.meetingService=e,this.dialog=t,this.router=a,this.localize=n,this.meetings=[],this.searchQuery="",this.loading=!1,this.status=[{name:"\u0645\u0639\u0644\u0642",status:"pending"}]}ngOnInit(){this.meetingService.initializeNavItems(),this.getMeetingsList()}getMeetingsList(e=1){this.loading=!0,this.meetingService.GetMeetingsList({page:e}).subscribe({next:t=>{this.currentPage=t.data.current_page,this.totalPages=t.data.last_page,this.loading=!1,this.meetings=t.data.data,console.log(this.meetings)},error:t=>{this.loading=!1}})}search(){if(this.fromDate&&this.toDate){const e=new Date(this.fromDate).getTime(),t=new Date(this.toDate).getTime(),a=this.meetings.filter(n=>{const l=new Date(n.date).getTime();return l>=e&&l<=t});console.log(a)}}deleteMeeting(e,t){this.dialog.open(T.$,{width:"500px",data:{title:"\u062a\u0627\u0643\u064a\u062f \u0627\u0644\u062d\u0630\u0641",message:`\u061f ${t} \u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641  `}}).afterClosed().subscribe(n=>{n&&this.meetingService.DeleteMeeting(e.toString()).subscribe({next:l=>{this.getMeetingsList()},error:l=>{console.error("There was an error deleting the meeting!",l)}})})}viewMeeting(e){if(e){const t=this.localize.translateRoute("/dashboard/meetings/view-meeting");this.router.navigate([t,e])}else console.error("No meeting to view")}getStatusName(e){const t=this.status.find(a=>a.status===e);return t?t.name:e}onPageChange(e){this.getMeetingsList(e)}static#e=this.\u0275fac=function(t){return new(t||i)(r.Y36(H),r.Y36(j.uw),r.Y36(b.F0),r.Y36(y.An))};static#t=this.\u0275cmp=r.Xpm({type:i,selectors:[["app-meetings-list"]],standalone:!0,features:[r.jDz],decls:16,vars:11,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","tabs"],[1,"mb-2","filterForm"],[1,"col-lg-4","col-md-6","mb-lg-2","mb-2"],[1,"input-group"],[1,"btn"],[1,"fa-solid","fa-magnifying-glass"],["type","search","name","search","id","search",1,"form-control",3,"ngModel","ngModelChange"],["class","col-md-6 mb-2",4,"ngFor","ngForOf"],["class","text-center col-12",4,"ngIf"],[3,"currentPage","totalPages","pageChange"],[1,"col-md-6","mb-2"],[1,"card","mb-3","border-0"],[1,"card-body"],[1,"text-reset","text-decoration-none"],[1,"card-title"],[2,"margin-bottom","21px",3,"text","limit"],[1,"card-text","mb-2"],[1,"d-inline-block","px-5","py-2","border"],[3,"ngStyle"],[1,"col-12","text-end"],[1,"btn","mx-1","px-4","edit"],[1,"fa-solid","fa-check","me-2"],[1,"btn","delete","px-4",3,"click"],[1,"fa-regular","fa-trash-can","me-2"],[1,"text-center","col-12"]],template:function(t,a){1&t&&(r.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3)(4,"div",1)(5,"div",4)(6,"div",5)(7,"button",6),r._UZ(8,"i",7),r.qZA(),r.TgZ(9,"input",8),r.NdJ("ngModelChange",function(l){return a.searchQuery=l}),r.qZA()()()()(),r.TgZ(10,"div",1),r.YNc(11,Se,22,7,"div",9),r.ALo(12,"filter"),r.YNc(13,Re,3,0,"div",10),r.ALo(14,"filter"),r.qZA(),r.TgZ(15,"pagination",11),r.NdJ("pageChange",function(l){return a.onPageChange(l)}),r.qZA()()()()),2&t&&(r.xp6(9),r.Q6J("ngModel",a.searchQuery),r.xp6(2),r.Q6J("ngForOf",r.xi3(12,5,a.meetings,a.searchQuery)),r.xp6(2),r.Q6J("ngIf",0===r.xi3(14,8,a.meetings,a.searchQuery).length&&!a.loading),r.xp6(2),r.Q6J("currentPage",a.currentPage)("totalPages",a.totalPages))},dependencies:[p.ez,p.sg,p.O5,p.PC,y.fQ,G.Q,Q.u,V.H,u.u5,u._Y,u.Fj,u.JJ,u.JL,u.On,u.F,z,m.XK,C,O],styles:["button.edit[_ngcontent-%COMP%]{background-color:var(--stroke-color2);color:var(--main)}button.delete[_ngcontent-%COMP%]{background-color:var(--danger);color:#fff}.filterForm[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{border:1px solid var(--dashboard2);border-radius:8px}.filterForm[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--main)}.filterForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .filterForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus-visible, .filterForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .filterForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus-visible{box-shadow:none;outline:none}.filterForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{color:var(--main)}.filterForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder{color:#115a8b86}.filterForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border-color:var(--dashboard2);color:var(--dashboard1);background-image:url(chevron-Down.243768823842f8ab.svg);background-size:30px 100%;background-position:left 0px}.card[_ngcontent-%COMP%]{box-shadow:0 3px 6px #0000001a;color:var(--dashboard1)}.card[_ngcontent-%COMP%]   p.card-text[_ngcontent-%COMP%]   span.border[_ngcontent-%COMP%]{border-color:var(--dashboard2)!important;border-radius:10px}"]})}return i})()},{path:"view-meeting/:id",component:(()=>{class i{constructor(e,t,a,n,l){this.meetingService=e,this.dialog=t,this.activatedRoute=a,this.router=n,this.localize=l,this.loading=!1,this.meetingId=""}ngOnInit(){this.activatedRoute.paramMap.subscribe(e=>{const t=e.get("id");t&&(this.meetingId=t,this.getMeetingInfo(this.meetingId))})}getMeetingInfo(e){this.loading=!0,this.meetingService.GetMeetingById(e).subscribe({next:t=>{console.log(t),this.meeting=t.data,this.loading=!1},error:t=>{this.loading=!1}})}deleteMeeting(e,t){this.dialog.open(T.$,{width:"500px",data:{title:"\u062a\u0627\u0643\u064a\u062f \u0627\u0644\u062d\u0630\u0641",message:`\u061f ${t} \u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641  `}}).afterClosed().subscribe(n=>{n&&this.meetingService.DeleteMeeting(e.toString()).subscribe({next:l=>{this.navigateToMeetingList()},error:l=>{console.error("There was an error deleting the meeting!",l)}})})}navigateToMeetingList(){const e=this.localize.translateRoute("/dashboard/meetings");this.router.navigate([e])}static#e=this.\u0275fac=function(t){return new(t||i)(r.Y36(H),r.Y36(j.uw),r.Y36(b.gz),r.Y36(b.F0),r.Y36(y.An))};static#t=this.\u0275cmp=r.Xpm({type:i,selectors:[["app-view-meeting"]],standalone:!0,features:[r.jDz],decls:8,vars:2,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","tabs"],["id","pills-tabContent",1,"tab-content","p-3"],["id","listMeets","role","tabpanel","aria-labelledby","listMeets-tab","tabindex","0",1,"tab-pane","fade","show","active"],["class","col-12 mb-2",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"col-12","mb-2"],[1,"card","mb-3","border-0"],[1,"card-body"],[1,"row","mb-2"],[1,"col-xl-7","col-md-8","order-md-1","order-2"],["href","view_meet.html",1,"text-reset","text-decoration-none"],[1,"card-title"],[1,"col-xl-5","col-md-4","order-md-2","order-1","mb-md-0","mb-2","text-end"],[1,"btn","mx-1","px-4","edit"],[1,"btn","delete","px-4",3,"click"],[2,"margin-bottom","30px",3,"text","limit"],[1,"card-text"],[1,"d-inline-block","px-5","py-2","border"],[1,"text-center"]],template:function(t,a){1&t&&(r.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",1),r.YNc(6,Ve,20,3,"div",5),r.YNc(7,Oe,3,0,"div",6),r.qZA()()()()()()),2&t&&(r.xp6(6),r.Q6J("ngIf",a.meeting),r.xp6(1),r.Q6J("ngIf",!a.meeting))},dependencies:[p.ez,p.O5,y.fQ,V.H,u.u5,z,m.XK,C,O]})}return i})()}]}]}}]);