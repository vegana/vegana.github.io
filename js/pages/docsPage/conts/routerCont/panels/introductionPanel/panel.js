!function(){return function e(t,n,o){function i(a,u){if(!n[a]){if(!t[a]){var s="function"==typeof require&&require;if(!u&&s)return s(a,!0);if(r)return r(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){return i(t[a][1][e]||e)},l,l.exports,e,t,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}}()({1:[function(e,t,n){t.exports=[{type:"section",title:"Vegana Router Apis",items:[{type:"para",string:"vegana document structure is defined for the specific purpose of routing and lazyness. The document structure is tree like on top sits the page module which can be routed within the page router object to other pages this incapsulates the cont module which is the same and can be routed within the cont router this module encapsulated the panels module which is the very base of our document structure all of these modules are specificly designed to be lazy which mean they can le loaded onto the application whenever is required like contact page can be loaded when user wants to navigate to that page."},{type:"para",string:"Comp Module can also be routed but within its defined router object."},{type:"para",string:"Router is again distributed into 5 apis but only 1 is intended to be used by the users which is the navigation api rest of them are used by the vegana engine internally for routing."}]}]},{}],2:[function(e,t,n){let o,i;const r={init:t=>{if(engine.common.tell("panel initiated",!1),null==t||null==t)return engine.common.error("parent_cont_id_not_found");i=(o=t)+"-panel-introduction",engine.make.init.panel(i,o,"panel"),function(){const t=e(1);engine.global.comp.articleComp.init(i,t)}()},ref:"-panel-introduction",type:"panel",panelName:"introductionPanel",trackers:{title:"Introduction - Router Apis - Vegana Js",meta:[{name:"description",content:"introduction to vegana router apis."},{name:"keywords",content:"router,vegana,introduction,api"}]}};engine.router.set.panelModule("docsPage","routerCont","introductionPanel",r),t.exports=r},{1:1}]},{},[2]);