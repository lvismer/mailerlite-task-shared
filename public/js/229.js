"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[229],{278:(e,t,n)=>{n.d(t,{Z:()=>u});var s=n(821),a=n(119);const u={__name:"Back",setup:function(e){var t=(0,a.tv)();return function(e,n){return(0,s.wg)(),(0,s.iD)("a",{class:"flex text-blue-600",onClick:n[0]||(n[0]=function(e){return(0,s.SU)(t).back()})},"Back")}}}},229:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var s=n(821),a=n(575),u=n(583),r=n(119),i=n(278),o={class:"container mx-auto max-w-2xl"},l=(0,s._)("span",{class:"font-bold"},"Add a new subscriber",-1),c={class:"mt-4"},m=(0,s._)("label",{for:"name",class:"block text-sm font-medium leading-5"}," Name ",-1),d={class:"mt-1 rounded-md shadow-sm"},p={key:0,class:"text-xs text-red-500"},f={class:"mt-4"},b=(0,s._)("label",{for:"email",class:"block text-sm font-medium leading-5"}," Email ",-1),v={class:"mt-1 rounded-md shadow-sm"},w={key:0,class:"text-xs text-red-500"},U={class:"mt-4"},k=(0,s._)("label",{for:"status",class:"block text-sm font-medium leading-5"}," Status ",-1),_={class:"mt-1 rounded-md shadow-sm"},x=[(0,s.uE)('<option value="active">Active</option><option value="unsubscribed">Unsubscribed</option><option value="junk">Junk</option><option value="bounced">Bounced</option><option value="unconfirmed">Unconfirmed</option>',5)],S={key:0,class:"text-xs text-red-500"};const y={__name:"SubscriberCreateView",setup:function(e){var t=(0,u.Y6)(),n=(0,a.Jk)(t),y=n.subscriber,h=n.errors,C=((0,r.yj)(),(0,r.tv)());t.reset(),t.resetErrors();var g=function(){t.create(y.value).then((function(){C.push({name:"subscribers.index"})})).catch((function(){}))};return function(e,t){return(0,s.wg)(),(0,s.iD)("div",o,[(0,s.Wm)((0,s.SU)(i.Z),{class:"mb-4"}),l,(0,s._)("div",c,[m,(0,s._)("div",d,[(0,s.wy)((0,s._)("input",{id:"name",type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return(0,s.SU)(y).name=e}),required:"",class:(0,s.C_)(["form-input w-full",{error:(0,s.SU)(h).name}])},null,2),[[s.nr,(0,s.SU)(y).name]])]),(0,s.SU)(h).name?((0,s.wg)(),(0,s.iD)("span",p,(0,s.zw)((0,s.SU)(h).name[0]),1)):(0,s.kq)("",!0)]),(0,s._)("div",f,[b,(0,s._)("div",v,[(0,s.wy)((0,s._)("input",{id:"email",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return(0,s.SU)(y).email=e}),required:"",class:(0,s.C_)(["form-input w-full",{error:(0,s.SU)(h).email}])},null,2),[[s.nr,(0,s.SU)(y).email]])]),(0,s.SU)(h).email?((0,s.wg)(),(0,s.iD)("span",w,(0,s.zw)((0,s.SU)(h).email[0]),1)):(0,s.kq)("",!0)]),(0,s._)("div",U,[k,(0,s._)("div",_,[(0,s.wy)((0,s._)("select",{id:"status","onUpdate:modelValue":t[2]||(t[2]=function(e){return(0,s.SU)(y).status=e}),required:"",class:(0,s.C_)(["form-input w-full",{error:(0,s.SU)(h).status}])},x,2),[[s.bM,(0,s.SU)(y).status]])]),(0,s.SU)(h).status?((0,s.wg)(),(0,s.iD)("span",S,(0,s.zw)((0,s.SU)(h).status[0]),1)):(0,s.kq)("",!0)]),(0,s._)("button",{type:"submit",onClick:g,class:"mt-4 btn-primary"},"Create")])}}}}}]);