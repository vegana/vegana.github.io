!function(){return function e(t,a,n){function i(o,p){if(!a[o]){if(!t[o]){var s="function"==typeof require&&require;if(!p&&s)return s(o,!0);if(r)return r(o,!0);var d=new Error("Cannot find module '"+o+"'");throw d.code="MODULE_NOT_FOUND",d}var l=a[o]={exports:{}};t[o][0].call(l.exports,function(e){return i(t[o][1][e]||e)},l,l.exports,e,t,a,n)}return a[o].exports}for(var r="function"==typeof require&&require,o=0;o<n.length;o++)i(n[o]);return i}}()({1:[function(e,t,a){t.exports=[{type:"section",title:"Add Params Api (Single)",items:[{type:"para",string:"this api adds a single parsm to the url caution :- this api overwrites the param value if it already exists."},{type:"code",string:"https://example.com/articles //before<br>https://example.com/articles?id='213124uyh' //after"},{type:"code",string:"engine.params.add('id','213124uyh')"}]},{type:"section",title:"Add Params Api (Multiple)",items:[{type:"para",string:"this api takes a object with key as id of the params and the value as value of the param and adds multiple params to the url at once. caution :- this api overwrites the param value if it already exists."},{type:"code",string:"https://example.com/articles //before"},{type:"code",json:{id:"213124uyh",genre:"sifi"}},{type:"code",string:"engine.params.add(properties)"},{type:"code",string:"https://example.com/articles?id='213124uyh'&&genre='sifi' //after"}]}]},{}],2:[function(e,t,a){let n,i;const r={init:t=>{if(engine.common.tell("panel initiated",!1),null==t||null==t)return engine.common.error("parent_cont_id_not_found");i=(n=t)+"-panel-add",engine.make.init.panel(i,n,"panel"),function(){const t=e(1);engine.global.comp.articleComp.init(i,t)}()},ref:"-panel-add",type:"panel",panelName:"addPanel",trackers:{title:"Add - Params Apis - Vegana Js",meta:[{name:"description",content:"introduction to vegana add param apis."},{name:"keywords",content:"params,vegana,add,api"}]}};engine.router.set.panelModule("docsPage","paramsCont","addPanel",r),t.exports=r},{1:1}]},{},[2]);