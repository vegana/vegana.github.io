!function(){return function e(n,t,i){function r(o,u){if(!t[o]){if(!n[o]){var l="function"==typeof require&&require;if(!u&&l)return l(o,!0);if(a)return a(o,!0);var p=new Error("Cannot find module '"+o+"'");throw p.code="MODULE_NOT_FOUND",p}var c=t[o]={exports:{}};n[o][0].call(c.exports,function(e){return r(n[o][1][e]||e)},c,c.exports,e,n,t,i)}return t[o].exports}for(var a="function"==typeof require&&require,o=0;o<i.length;o++)r(i[o]);return r}}()({1:[function(e,n,t){n.exports=[{type:"section",title:"Value Binder Api",items:[{type:"para",string:"this api is very straight forward it takes id as a arguments and returns the unfiltered value of a any dom element."},{type:"code",text:"const value = engine.binder.value(input_element_id)"}]}]},{}],2:[function(e,n,t){let i,r;const a={init:n=>{if(engine.common.tell("panel initiated",!1),null==n||null==n)return engine.common.error("parent_cont_id_not_found");r=(i=n)+"-panel-value",engine.make.init.panel(r,i,"panel"),function(){const n=e(1);engine.global.comp.articleComp.init(r,n)}()},ref:"-panel-value",type:"panel",panelName:"valuePanel",trackers:{title:"Value Binding - Binder Apis - Vegana Js",meta:[{name:"description",content:"introduction to vegana value binder api."},{name:"keywords",content:"binder,vegana,value,api"}]}};engine.router.set.panelModule("docsPage","binderCont","valuePanel",a),n.exports=a},{1:1}]},{},[2]);