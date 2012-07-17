// usage: log('inside coolFunc', this, arguments);
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
      arguments.callee = arguments.callee.caller;
      console.log( Array.prototype.slice.call(arguments) );
  }
};
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});

// place any jQuery/helper plugins in here, instead of separate, slower script files.

//=================================================================================

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 * TERMS OF USE - jQuery Easing
 * Open source under the BSD License. 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d)},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b}});
/*
 * TERMS OF USE - EASING EQUATIONS
 * Open source under the BSD License. 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
*/

//=================================================================================

/**
 * Isotope v1.5.04
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time license fee
 * http://metafizzy.co/#licenses
 *
 * Copyright 2011 David DeSandro / Metafizzy
 */
/*jshint curly: true, eqeqeq: true, forin: false, immed: false, newcap: true, noempty: true, undef: true */
/*global Modernizr: true, jQuery: true */
(function(a,b,c){"use strict";var d=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},e="Moz Webkit Khtml O Ms".split(" "),f=function(a){var b=document.documentElement.style,c;if(typeof b[a]=="string")return a;a=d(a);for(var f=0,g=e.length;f<g;f++){c=e[f]+a;if(typeof b[c]=="string")return c}},g=f("transform"),h=f("transitionProperty"),i={csstransforms:function(){return!!g},csstransforms3d:function(){var a=!!f("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),g=b('<div id="modernizr" />').appendTo("html");a=g.height()===3,g.remove(),e.remove()}return a},csstransitions:function(){return!!h}};if(a.Modernizr)for(var j in i)Modernizr.hasOwnProperty(j)||Modernizr.addTest(j,i[j]);else a.Modernizr=function(){var a={_version:"1.6ish: miniModernizr for Isotope"},c=" ",d,e;for(e in i)d=i[e](),a[e]=d,c+=" "+(d?"":"no-")+e;b("html").addClass(c);return a}();if(Modernizr.csstransforms){var k=Modernizr.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},l=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},h,i={},j;f[c]=d,b.extend(e,f);for(h in e)j=e[h],i[h]=k[h](j);var l=i.translate||"",m=i.scale||"",n=l+m;b.data(a,"isoTransform",e),a.style[g]=n};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){l(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){l(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var m,n;Modernizr.csstransitions&&(m={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd",transitionProperty:"transitionEnd"}[h],n=f("transitionDuration"));var o=b.event,p;o.special.smartresize={setup:function(){b(this).bind("resize",o.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",o.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",p&&clearTimeout(p),p=setTimeout(function(){jQuery.event.handle.apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var q=["overflow","position","width","height"];b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!b.browser.opera,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(c){this.options=b.extend({},b.Isotope.settings,c),this.styleQueue=[],this.elemCount=0;var d=this.element[0].style;this.originalStyle={};for(var e=0,f=q.length;e<f;e++){var g=q[e];this.originalStyle[g]=d[g]||""}this.element.css({overflow:"hidden",position:"relative"}),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){b.elemCount++;return b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems();var i=b(document.createElement("div")).prependTo(this.element);this.offset=i.position(),i.remove();var j=this;setTimeout(function(){j.element.addClass(j.options.containerClass)},0),this.options.resizable&&b(a).bind("smartresize.isotope",function(){j.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0);return c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var e in a)c="_update"+d(e),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,"");switch(a){case"css":case"none":this.isUsingJQueryAnimation=!1;break;case"jquery":this.isUsingJQueryAnimation=!0;break;default:this.isUsingJQueryAnimation=!Modernizr.csstransitions}this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&Modernizr.csstransforms&&Modernizr.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c);return a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order"));return(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b+=this.offset.left,c+=this.offset.top;var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",e=this.options.animationOptions,f,g,h,i;g=function(a,b){b.$el[d](b.style,e)};if(this._isInserting&&this.isUsingJQueryAnimation)g=function(a,b){f=b.$el.hasClass("no-transition")?"css":d,b.$el[f](b.style,e)};else if(c){var j=!1,k=this;h=!0,i=function(){j||(c.call(k.element,a),j=!0)};if(this.isUsingJQueryAnimation&&d==="animate")e.complete=i,h=!1;else if(Modernizr.csstransitions){var l=0,o=this.styleQueue[0].$el,p;while(!o.length){p=this.styleQueue[l++];if(!p)return;o=p.$el}var q=parseFloat(getComputedStyle(o[0])[n]);q>0&&(g=function(a,b){b.$el[d](b.style,e).one(m,i)},h=!1)}}b.each(this.styleQueue,g),h&&i(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a,!0);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a),a.remove()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var c=this.usingTransforms;this.$allAtoms.removeClass(this.options.hiddenClass+" "+this.options.itemClass).each(function(){this.style.position="",this.style.top="",this.style.left="",this.style.opacity="",c&&(this.style[g]="")});var d=this.element[0].style;for(var e=0,f=q.length;e<f;e++){var h=q[e];d[h]=this.originalStyle[h]}this.element.unbind(".isotope").undelegate("."+this.options.hiddenClass,"click").removeClass(this.options.containerClass).removeData("isotope"),b(a).unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",e=a?"height":"width",f=a?"rows":"cols",g=this.element[e](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+d(e)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][f]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];this._getSegments(a);return this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=Math.round((e+.5)*d.columnWidth-a.outerWidth(!0)/2),h=Math.round((f+.5)*d.rowHeight-a.outerHeight(!0)/2);c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=Math.round((e+.5)*d.columnWidth-a.outerWidth(!0)/2),h=Math.round((f+.5)*d.rowHeight-a.outerHeight(!0)/2);c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(a){--e<=0&&a.target.src!==f&&(setTimeout(g),d.unbind("load error",h))}function g(){a.call(b,d)}var b=this,d=b.find("img").add(b.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";e||g(),d.bind("load error",h).each(function(){if(this.complete||this.complete===c){var a=this.src;this.src=f,this.src=a}});return b};var r=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c)r("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");else{if(!b.isFunction(c[a])||a.charAt(0)==="_"){r("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)}})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);

//=================================================================================
/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

//=================================================================================
/**
 * jQuery.LocalScroll - Animated scrolling navigation, using anchors.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 3/11/2009
 * @author Ariel Flesler
 * @version 1.2.7
 **/
;(function($){var l=location.href.replace(/#.*/,'');var g=$.localScroll=function(a){$('body').localScroll(a)};g.defaults={duration:1e3,axis:'y',event:'click',stop:true,target:window,reset:true};g.hash=function(a){if(location.hash){a=$.extend({},g.defaults,a);a.hash=false;if(a.reset){var e=a.duration;delete a.duration;$(a.target).scrollTo(0,a);a.duration=e}i(0,location,a)}};$.fn.localScroll=function(b){b=$.extend({},g.defaults,b);return b.lazy?this.bind(b.event,function(a){var e=$([a.target,a.target.parentNode]).filter(d)[0];if(e)i(a,e,b)}):this.find('a,area').filter(d).bind(b.event,function(a){i(a,this,b)}).end().end();function d(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==l&&(!b.filter||$(this).is(b.filter))}};function i(a,e,b){var d=e.hash.slice(1),f=document.getElementById(d)||document.getElementsByName(d)[0];if(!f)return;if(a)a.preventDefault();var h=$(b.target);if(b.lock&&h.is(':animated')||b.onBefore&&b.onBefore.call(b,a,f,h)===false)return;if(b.stop)h.stop(true);if(b.hash){var j=f.id==d?'id':'name',k=$('<a> </a>').attr(j,d).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});f[j]='';$('body').prepend(k);location=e.hash;k.remove();f[j]=d}h.scrollTo(f,b).trigger('notify.serialScroll',[f])}})(jQuery);


//=================================================================================
/*
 * jQuery UI Accordion 1.6
 * 
 * Copyright (c) 2007 Jörn Zaefferer
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.accordion.js 4876 2008-03-08 11:49:04Z joern.zaefferer $
 *
 */
(function(a){function f(b,c){return c!=undefined?typeof c=="number"?b.filter(":eq("+c+")"):b.not(b.not(c)):c===false?a([]):b.filter(":eq(0)")}function e(b){var c=a.data(this,"ui-accordion").options;if(c.disabled)return false;if(!b.target&&!c.alwaysOpen){c.active.parent().andSelf().toggleClass(c.selectedClass);var e=c.active.next(),f={instance:this,options:c,newHeader:jQuery([]),oldHeader:c.active,newContent:jQuery([]),oldContent:e},g=c.active=a([]);d.call(this,g,e,f);return false}var h=a(b.target);if(h.parents(c.header).length)while(!h.is(c.header))h=h.parent();var i=h[0]==c.active[0];if(c.running||c.alwaysOpen&&i)return false;if(!h.is(c.header))return;c.active.parent().andSelf().toggleClass(c.selectedClass);if(!i){h.parent().andSelf().addClass(c.selectedClass)}var g=h.next(),e=c.active.next(),f={instance:this,options:c,newHeader:h,oldHeader:c.active,newContent:g,oldContent:e},j=c.headers.index(c.active[0])>c.headers.index(h[0]);c.active=i?a([]):h;d.call(this,g,e,f,i,j);return false}function d(d,e,f,g,h){var i=a.data(this,"ui-accordion").options;i.toShow=d;i.toHide=e;i.data=f;var j=b(c,this);i.running=e.size()==0?d.size():e.size();if(i.animated){if(!i.alwaysOpen&&g){a.ui.accordion.animations[i.animated]({toShow:jQuery([]),toHide:e,complete:j,down:h,autoheight:i.autoheight})}else{a.ui.accordion.animations[i.animated]({toShow:d,toHide:e,complete:j,down:h,autoheight:i.autoheight})}}else{if(!i.alwaysOpen&&g){d.toggle()}else{e.hide();d.show()}j(true)}}function c(b){if(!a.data(this,"ui-accordion"))return;var c=a.data(this,"ui-accordion");var d=c.options;d.running=b?0:--d.running;if(d.running)return;if(d.clearStyle){d.toShow.add(d.toHide).css({height:"",overflow:""})}a(this).triggerHandler("change.ui-accordion",[d.data],d.change)}function b(a,b){return function(){return a.apply(b,arguments)}}a.ui=a.ui||{};a.fn.extend({accordion:function(b,c){var d=Array.prototype.slice.call(arguments,1);return this.each(function(){if(typeof b=="string"){var c=a.data(this,"ui-accordion");c[b].apply(c,d)}else if(!a(this).is(".ui-accordion"))a.data(this,"ui-accordion",new a.ui.accordion(this,b))})},activate:function(a){return this.accordion("activate",a)}});a.ui.accordion=function(b,c){this.options=c=a.extend({},a.ui.accordion.defaults,c);this.element=b;a(b).addClass("ui-accordion");if(c.navigation){var d=a(b).find("a").filter(c.navigationFilter);if(d.length){if(d.filter(c.header).length){c.active=d}else{c.active=d.parent().parent().prev();d.addClass("current")}}}c.headers=a(b).find(c.header);c.active=f(c.headers,c.active);if(c.fillSpace){var g=a(b).parent().height();c.headers.each(function(){g-=a(this).outerHeight()});var h=0;c.headers.next().each(function(){h=Math.max(h,a(this).innerHeight()-a(this).height())}).height(g-h)}else if(c.autoheight){var g=0;c.headers.next().each(function(){g=Math.max(g,a(this).outerHeight())}).height(g)}c.headers.not(c.active||"").next().hide();c.active.parent().andSelf().addClass(c.selectedClass);if(c.event)a(b).bind(c.event+".ui-accordion",e)};a.ui.accordion.prototype={activate:function(a){e.call(this.element,{target:f(this.options.headers,a)[0]})},enable:function(){this.options.disabled=false},disable:function(){this.options.disabled=true},destroy:function(){this.options.headers.next().css("display","");if(this.options.fillSpace||this.options.autoheight){this.options.headers.next().css("height","")}a.removeData(this.element,"ui-accordion");a(this.element).removeClass("ui-accordion").unbind(".ui-accordion")}};a.extend(a.ui.accordion,{defaults:{selectedClass:"selected",alwaysOpen:true,animated:"slide",event:"click",header:"a",autoheight:true,running:0,navigationFilter:function(){return this.href.toLowerCase()==location.href.toLowerCase()}},animations:{slide:function(b,c){b=a.extend({easing:"swing",duration:300},b,c);if(!b.toHide.size()){b.toShow.animate({height:"show"},b);return}var d=b.toHide.height(),e=b.toShow.height(),f=e/d;b.toShow.css({height:0,overflow:"hidden"}).show();b.toHide.filter(":hidden").each(b.complete).end().filter(":visible").animate({height:"hide"},{step:function(c){var e=(d-c)*f;if(a.browser.msie||a.browser.opera){e=Math.ceil(e)}b.toShow.height(e)},duration:b.duration,easing:b.easing,complete:function(){if(!b.autoheight){b.toShow.css("height","auto")}b.complete()}})},bounceslide:function(a){this.slide(a,{easing:a.down?"bounceout":"swing",duration:a.down?1e3:200})},easeslide:function(a){this.slide(a,{easing:"easeinout",duration:700})}}})})(jQuery)



//=================================================================================

/**
 * reflection.js v2.0
 * http://cow.neondragon.net/stuff/reflection/
 * Freely distributable under MIT-style license.
 */
 
/* From prototype.js */
if (!document.myGetElementsByClassName) {
	document.myGetElementsByClassName = function(className) {
		var children = document.getElementsByTagName('*') || document.all;
		var elements = new Array();
	  
		for (var i = 0; i < children.length; i++) {
			var child = children[i];
			var classNames = child.className.split(' ');
			for (var j = 0; j < classNames.length; j++) {
				if (classNames[j] == className) {
					elements.push(child);
					break;
				}
			}
		}
		return elements;
	}
}

var Reflection = {
	defaultHeight : 0.5,
	defaultOpacity: 0.5,
	
	add: function(image, options) {
		Reflection.remove(image);
		
		doptions = { "height" : Reflection.defaultHeight, "opacity" : Reflection.defaultOpacity }
		if (options) {
			for (var i in doptions) {
				if (!options[i]) {
					options[i] = doptions[i];
				}
			}
		} else {
			options = doptions;
		}
	
		try {
			var d = document.createElement('div');
			var p = image;
			
			var classes = p.className.split(' ');
			var newClasses = '';
			for (j=0;j<classes.length;j++) {
				if (classes[j] != "reflect") {
					if (newClasses) {
						newClasses += ' '
					}
					
					newClasses += classes[j];
				}
			}

			var reflectionHeight = Math.floor(p.height*options['height']);
			var divHeight = Math.floor(p.height*(1+options['height']));
			
			var reflectionWidth = p.width;
			
			if (document.all && !window.opera) {
				/* Fix hyperlinks */
                if(p.parentElement.tagName == 'A') {
	                var d = document.createElement('a');
	                d.href = p.parentElement.href;
                }  
                    
				/* Copy original image's classes & styles to div */
				d.className = newClasses;
				p.className = 'reflected';
				
				d.style.cssText = p.style.cssText;
				p.style.cssText = 'vertical-align: bottom';
			
				var reflection = document.createElement('img');
				reflection.src = p.src;
				reflection.style.width = reflectionWidth+'px';
				reflection.style.display = 'block';
				reflection.style.height = p.height+"px";
				
				reflection.style.marginBottom = "-"+(p.height-reflectionHeight)+'px';
				reflection.style.filter = 'flipv progid:DXImageTransform.Microsoft.Alpha(opacity='+(options['opacity']*100)+', style=1, finishOpacity=0, startx=0, starty=0, finishx=0, finishy='+(options['height']*100)+')';
				
				d.style.width = reflectionWidth+'px';
				d.style.height = divHeight+'px';
				p.parentNode.replaceChild(d, p);
				
				d.appendChild(p);
				d.appendChild(reflection);
			} else {
				var canvas = document.createElement('canvas');
				if (canvas.getContext) {
					/* Copy original image's classes & styles to div */
					d.className = newClasses;
					p.className = 'reflected';
					
					d.style.cssText = p.style.cssText;
					p.style.cssText = 'vertical-align: bottom';
			
					var context = canvas.getContext("2d");
				
					canvas.style.height = reflectionHeight+'px';
					canvas.style.width = reflectionWidth+'px';
					canvas.height = reflectionHeight;
					canvas.width = reflectionWidth;
					
					d.style.width = reflectionWidth+'px';
					d.style.height = divHeight+'px';
					p.parentNode.replaceChild(d, p);
					
					d.appendChild(p);
					d.appendChild(canvas);
					
					context.save();
					
					context.translate(0,image.height-1);
					context.scale(1,-1);
					
					context.drawImage(image, 0, 0, reflectionWidth, image.height);
	
					context.restore();
					
					context.globalCompositeOperation = "destination-out";
					var gradient = context.createLinearGradient(0, 0, 0, reflectionHeight);
					
					gradient.addColorStop(1, "rgba(255, 255, 255, 1.0)");
					gradient.addColorStop(0, "rgba(255, 255, 255, "+(1-options['opacity'])+")");
		
					context.fillStyle = gradient;
					context.rect(0, 0, reflectionWidth, reflectionHeight*2);
					context.fill();
				}
			}
		} catch (e) {
	    }
	},
	
	remove : function(image) {
		if (image.className == "reflected") {
			image.className = image.parentNode.className;
			image.parentNode.parentNode.replaceChild(image, image.parentNode);
		}
	}
}

function addReflections() {
	var rimages = document.myGetElementsByClassName('reflect');
	for (i=0;i<rimages.length;i++) {
		var rheight = null;
		var ropacity = null;
		
		var classes = rimages[i].className.split(' ');
		for (j=0;j<classes.length;j++) {
			if (classes[j].indexOf("rheight") == 0) {
				var rheight = classes[j].substring(7)/100;
			} else if (classes[j].indexOf("ropacity") == 0) {
				var ropacity = classes[j].substring(8)/100;
			}
		}
		
		Reflection.add(rimages[i], { height: rheight, opacity : ropacity});
	}
}

var previousOnload = window.onload;

// I customized to NOT run in IE because it has problems with the semi-transparent PNGs
if (navigator.appName != 'Microsoft Internet Explorer'){
  window.onload = function () { if(previousOnload) previousOnload(); addReflections(); }
}


//=================================================================================


/** 
 *  @fileoverview TextResizeDetector
 * 
 *  Detects changes to font sizes when user changes browser settings
 *  <br>Fires a custom event with the following data:<br><br>
 * 	iBase  : base font size  	
 *	iDelta : difference in pixels from previous setting<br>
 *  	iSize  : size in pixel of text<br>
 *  
 *  * @author Lawrence Carvalho carvalho@uk.yahoo-inc.com
 * @version 1.0
 */

/**
 * @constructor
 */
TextResizeDetector = function() { 
    var el  = null;
	var iIntervalDelay  = 200;
	var iInterval = null;
	var iCurrSize = -1;
	var iBase = -1;
 	var aListeners = [];
 	var createControlElement = function() {
	 	el = document.createElement('span');
		el.id='textResizeControl';
		el.innerHTML='&nbsp;';
		el.style.position="absolute";
		el.style.left="-9999px";
		var elC = document.getElementById(TextResizeDetector.TARGET_ELEMENT_ID);
		// insert before firstChild
		if (elC)
			elC.insertBefore(el,elC.firstChild);
		iBase = iCurrSize = TextResizeDetector.getSize();
 	};

 	function _stopDetector() {
		window.clearInterval(iInterval);
		iInterval=null;
	};
	function _startDetector() {
		if (!iInterval) {
			iInterval = window.setInterval('TextResizeDetector.detect()',iIntervalDelay);
		}
	};
 	
 	 function _detect() {
 		var iNewSize = TextResizeDetector.getSize();
		
 		if(iNewSize!== iCurrSize) {
			for (var 	i=0;i <aListeners.length;i++) {
				aListnr = aListeners[i];
				var oArgs = {  iBase: iBase,iDelta:((iCurrSize!=-1) ? iNewSize - iCurrSize + 'px' : "0px"),iSize:iCurrSize = iNewSize};
				if (!aListnr.obj) {
					aListnr.fn('textSizeChanged',[oArgs]);
				}
				else  {
					aListnr.fn.apply(aListnr.obj,['textSizeChanged',[oArgs]]);
				}
			}

 		}
 		return iCurrSize;
 	};
	var onAvailable = function() {
		
		if (!TextResizeDetector.onAvailableCount_i ) {
			TextResizeDetector.onAvailableCount_i =0;
		}

		if (document.getElementById(TextResizeDetector.TARGET_ELEMENT_ID)) {
			TextResizeDetector.init();
			if (TextResizeDetector.USER_INIT_FUNC){
				TextResizeDetector.USER_INIT_FUNC();
			}
			TextResizeDetector.onAvailableCount_i = null;
		}
		else {
			if (TextResizeDetector.onAvailableCount_i<600) {
	  	 	    TextResizeDetector.onAvailableCount_i++;
				setTimeout(onAvailable,200)
			}
		}
	};
	setTimeout(onAvailable,500);

 	return {
		 	/*
		 	 * Initializes the detector
		 	 * 
		 	 * @param {String} sId The id of the element in which to create the control element
		 	 */
		 	init: function() {
		 		
		 		createControlElement();		
				_startDetector();
 			},
			/**
			 * Adds listeners to the ontextsizechange event. 
			 * Returns the base font size
			 * 
			 */
 			addEventListener:function(fn,obj,bScope) {
				aListeners[aListeners.length] = {
					fn: fn,
					obj: obj
				}
				return iBase;
			},
			/**
			 * performs the detection and fires textSizeChanged event
			 * @return the current font size
			 * @type {integer}
			 */
 			detect:function() {
 				return _detect();
 			},
 			/**
 			 * Returns the height of the control element
 			 * 
			 * @return the current height of control element
			 * @type {integer}
 			 */
 			getSize:function() {
	 				var iSize;
			 		return el.offsetHeight;
		 		
		 		
 			},
 			/**
 			 * Stops the detector
 			 */
 			stopDetector:function() {
				return _stopDetector();
			},
			/*
			 * Starts the detector
			 */
 			startDetector:function() {
				return _startDetector();
			}
 	}
 }();

TextResizeDetector.TARGET_ELEMENT_ID = 'doc';
TextResizeDetector.USER_INIT_FUNC = null;


//=================================================================================

/*! fancyBox v2.0.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(t,m,e){var l=e(t),q=e(m),a=e.fancybox=function(){a.open.apply(this,arguments)},r=!1,s="undefined"!==typeof m.createTouch;e.extend(a,{version:"2.0.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,autoSize:!0,autoResize:!s,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,fixed:!(e.browser.msie&&6>=e.browser.version)&&!s,scrolling:"auto",wrapCSS:"fancybox-default",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,
autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},keys:{next:[13,32,34,39,40],prev:[8,33,37,38],close:[27]},tpl:{wrap:'<div class="fancybox-wrap"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0"'+(e.browser.msie?' allowtransparency="true"':"")+"></iframe>",swf:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>',
error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<div title="Close" class="fancybox-item fancybox-close"></div>',next:'<a title="Next" class="fancybox-nav fancybox-next"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",
nextEffect:"elastic",nextSpeed:300,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:300,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:{speedIn:0,speedOut:300,opacity:0.8,css:{cursor:"pointer"},closeClick:!0},title:{type:"float"}}},group:{},opts:{},coming:null,current:null,isOpen:!1,isOpened:!1,wrap:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(b,c){a.close(!0);b&&!e.isArray(b)&&(b=
b instanceof e?e(b).get():[b]);a.isActive=!0;a.opts=e.extend(!0,{},a.defaults,c);e.isPlainObject(c)&&"undefined"!==typeof c.keys&&(a.opts.keys=c.keys?e.extend({},a.defaults.keys,c.keys):!1);a.group=b;a._start(a.opts.index||0)},cancel:function(){a.coming&&!1===a.trigger("onCancel")||(a.coming=null,a.hideLoading(),a.ajaxLoad&&a.ajaxLoad.abort(),a.ajaxLoad=null,a.imgPreload&&(a.imgPreload.onload=a.imgPreload.onabort=a.imgPreload.onerror=null))},close:function(b){a.cancel();a.current&&!1!==a.trigger("beforeClose")&&
(a.unbindEvents(),!a.isOpen||b&&!0===b[0]?(e(".fancybox-wrap").stop().trigger("onReset").remove(),a._afterZoomOut()):(a.isOpen=a.isOpened=!1,e(".fancybox-item, .fancybox-nav").remove(),a.wrap.stop(!0).removeClass("fancybox-opened"),a.inner.css("overflow","hidden"),a.transitions[a.current.closeMethod]()))},play:function(b){var c=function(){clearTimeout(a.player.timer)},d=function(){c();a.current&&a.player.isActive&&(a.player.timer=setTimeout(a.next,a.current.playSpeed))},g=function(){c();e("body").unbind(".player");
a.player.isActive=!1;a.trigger("onPlayEnd")};if(a.player.isActive||b&&!1===b[0])g();else if(a.current&&(a.current.loop||a.current.index<a.group.length-1))a.player.isActive=!0,e("body").bind({"afterShow.player onUpdate.player":d,"onCancel.player beforeClose.player":g,"beforeLoad.player":c}),d(),a.trigger("onPlayStart")},next:function(){a.current&&a.jumpto(a.current.index+1)},prev:function(){a.current&&a.jumpto(a.current.index-1)},jumpto:function(b){a.current&&(b=parseInt(b,10),1<a.group.length&&a.current.loop&&
(b>=a.group.length?b=0:0>b&&(b=a.group.length-1)),"undefined"!==typeof a.group[b]&&(a.cancel(),a._start(b)))},reposition:function(b){a.isOpen&&a.wrap.css(a._getPosition(b))},update:function(b){a.isOpen&&(r||setTimeout(function(){var c=a.current;if(r&&(r=!1,c)){if(c.autoResize||b&&"orientationchange"===b.type)c.autoSize&&(a.inner.height("auto"),c.height=a.inner.height()),a._setDimension(),c.canGrow&&a.inner.height("auto");c.autoCenter&&a.reposition();a.trigger("onUpdate")}},100),r=!0)},toggle:function(){a.isOpen&&
(a.current.fitToView=!a.current.fitToView,a.update())},hideLoading:function(){e("#fancybox-loading").remove()},showLoading:function(){a.hideLoading();e('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body")},getViewport:function(){return{x:l.scrollLeft(),y:l.scrollTop(),w:l.width(),h:l.height()}},unbindEvents:function(){a.wrap&&a.wrap.unbind(".fb");q.unbind(".fb");l.unbind(".fb")},bindEvents:function(){var b=a.current,c=b.keys;b&&(l.bind("resize.fb, orientationchange.fb",
a.update),c&&q.bind("keydown.fb",function(b){var g;!b.ctrlKey&&!b.altKey&&!b.shiftKey&&!b.metaKey&&0>e.inArray(b.target.tagName.toLowerCase(),["input","textarea","select","button"])&&(g=b.keyCode,-1<e.inArray(g,c.close)?(a.close(),b.preventDefault()):-1<e.inArray(g,c.next)?(a.next(),b.preventDefault()):-1<e.inArray(g,c.prev)&&(a.prev(),b.preventDefault()))}),e.fn.mousewheel&&b.mouseWheel&&1<a.group.length&&a.wrap.bind("mousewheel.fb",function(b,c){var f=e(b.target).get(0);if(0===f.clientHeight||f.scrollHeight===
f.clientHeight&&f.scrollWidth===f.clientWidth)b.preventDefault(),a[0<c?"prev":"next"]()}))},trigger:function(b){var c,d=a[-1<e.inArray(b,["onCancel","beforeLoad","afterLoad"])?"coming":"current"];if(d){e.isFunction(d[b])&&(c=d[b].apply(d,Array.prototype.slice.call(arguments,1)));if(!1===c)return!1;d.helpers&&e.each(d.helpers,function(c,f){if(f&&"undefined"!==typeof a.helpers[c]&&e.isFunction(a.helpers[c][b]))a.helpers[c][b](f,d)});e.event.trigger(b+".fb")}},isImage:function(a){return a&&a.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i)},
isSWF:function(a){return a&&a.match(/\.(swf)(.*)?$/i)},_start:function(b){var c={},d=a.group[b]||null,g,f,k;if(d&&(d.nodeType||d instanceof e))g=!0,e.metadata&&(c=e(d).metadata());c=e.extend(!0,{},a.opts,{index:b,element:d},e.isPlainObject(d)?d:c);e.each(["href","title","content","type"],function(b,f){c[f]=a.opts[f]||g&&e(d).attr(f)||c[f]||null});"number"===typeof c.margin&&(c.margin=[c.margin,c.margin,c.margin,c.margin]);c.modal&&e.extend(!0,c,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,
keys:null,helpers:{overlay:{css:{cursor:"auto"},closeClick:!1}}});a.coming=c;if(!1===a.trigger("beforeLoad"))a.coming=null;else{f=c.type;b=c.href||d;f||(g&&(k=e(d).data("fancybox-type"),!k&&d.className&&(f=(k=d.className.match(/fancybox\.(\w+)/))?k[1]:null)),!f&&"string"===e.type(b)&&(a.isImage(b)?f="image":a.isSWF(b)?f="swf":b.match(/^#/)&&(f="inline")),f||(f=g?"inline":"html"),c.type=f);if("inline"===f||"html"===f){if(c.content||(c.content="inline"===f?e("string"===e.type(b)?b.replace(/.*(?=#[^\s]+$)/,
""):b):d),!c.content||!c.content.length)f=null}else b||(f=null);c.group=a.group;c.isDom=g;c.href=b;"image"===f?a._loadImage():"ajax"===f?a._loadAjax():f?a._afterLoad():a._error("type")}},_error:function(b){a.hideLoading();e.extend(a.coming,{type:"html",autoSize:!0,minHeight:0,hasError:b,content:a.coming.tpl.error});a._afterLoad()},_loadImage:function(){a.imgPreload=new Image;a.imgPreload.onload=function(){this.onload=this.onerror=null;a.coming.width=this.width;a.coming.height=this.height;a._afterLoad()};
a.imgPreload.onerror=function(){this.onload=this.onerror=null;a._error("image")};a.imgPreload.src=a.coming.href;a.imgPreload.width||a.showLoading()},_loadAjax:function(){a.showLoading();a.ajaxLoad=e.ajax(e.extend({},a.coming.ajax,{url:a.coming.href,error:function(b,c){"abort"!==c?a._error("ajax",b):a.hideLoading()},success:function(b,c){"success"===c&&(a.coming.content=b,a._afterLoad())}}))},_preloadImages:function(){var b=a.group,c=a.current,d=b.length,g;if(c.preload&&!(2>b.length))for(var f=1;f<=
Math.min(c.preload,d-1);f++)if(g=b[(c.index+f)%d],g=e(g).attr("href")||g)(new Image).src=g},_afterLoad:function(){a.hideLoading();!a.coming||!1===a.trigger("afterLoad",a.current)?a.coming=!1:(a.isOpened?(e(".fancybox-item").remove(),a.wrap.stop(!0).removeClass("fancybox-opened"),a.inner.css("overflow","hidden"),a.transitions[a.current.prevMethod]()):(e(".fancybox-wrap").stop().trigger("onReset").remove(),a.trigger("afterClose")),a.unbindEvents(),a.isOpen=!1,a.current=a.coming,a.wrap=e(a.current.tpl.wrap).addClass("fancybox-"+
(s?"mobile":"desktop")+" fancybox-tmp "+a.current.wrapCSS).appendTo("body"),a.outer=e(".fancybox-outer",a.wrap).css("padding",a.current.padding+"px"),a.inner=e(".fancybox-inner",a.wrap),a._setContent())},_setContent:function(){var b,c,d=a.current,g=d.type;switch(g){case "inline":case "ajax":case "html":b=d.content;b instanceof e&&(b=b.show().detach(),b.parent().hasClass("fancybox-inner")&&b.parents(".fancybox-wrap").trigger("onReset").remove(),e(a.wrap).bind("onReset",function(){b.appendTo("body").hide()}));
d.autoSize&&(c=e('<div class="fancybox-tmp '+a.current.wrapCSS+'"></div>').appendTo("body").append(b),d.width=c.width(),d.height=c.height(),c.width(a.current.width),c.height()>d.height&&(c.width(d.width+1),d.width=c.width(),d.height=c.height()),b=c.contents().detach(),c.remove());break;case "image":b=d.tpl.image.replace("{href}",d.href);d.aspectRatio=!0;break;case "swf":b=d.tpl.swf.replace(/\{width\}/g,d.width).replace(/\{height\}/g,d.height).replace(/\{href\}/g,d.href)}if("iframe"===g){b=e(d.tpl.iframe.replace("{rnd}",
(new Date).getTime())).attr("scrolling",d.scrolling);d.scrolling="auto";if(d.autoSize){b.width(d.width);a.showLoading();b.data("ready",!1).appendTo(a.inner).bind({onCancel:function(){e(this).unbind();a._afterZoomOut()},load:function(){var b=e(this),c;try{this.contentWindow.document.location&&(c=b.contents().find("body").height()+12,b.height(c))}catch(g){d.autoSize=!1}!1===b.data("ready")?(a.hideLoading(),c&&(a.current.height=c),a._beforeShow(),b.data("ready",!0)):c&&a.update()}}).attr("src",d.href);
return}b.attr("src",d.href)}else if("image"===g||"swf"===g)d.autoSize=!1,d.scrolling="visible";a.inner.append(b);a._beforeShow()},_beforeShow:function(){a.coming=null;a.trigger("beforeShow");a._setDimension();a.wrap.hide().removeClass("fancybox-tmp");a.bindEvents();a._preloadImages();a.transitions[a.isOpened?a.current.nextMethod:a.current.openMethod]()},_setDimension:function(){var b=a.wrap,c=a.outer,d=a.inner,g=a.current,f=a.getViewport(),k=g.margin,h=2*g.padding,i=g.width,j=g.height,o=g.maxWidth,
l=g.maxHeight,p=g.minWidth,m=g.minHeight,n;f.w-=k[1]+k[3];f.h-=k[0]+k[2];-1<i.toString().indexOf("%")&&(i=(f.w-h)*parseFloat(i)/100);-1<j.toString().indexOf("%")&&(j=(f.h-h)*parseFloat(j)/100);k=i/j;i+=h;j+=h;g.fitToView&&(o=Math.min(f.w,o),l=Math.min(f.h,l));g.aspectRatio?(i>o&&(i=o,j=(i-h)/k+h),j>l&&(j=l,i=(j-h)*k+h),i<p&&(i=p,j=(i-h)/k+h),j<m&&(j=m,i=(j-h)*k+h)):(i=Math.max(p,Math.min(i,o)),j=Math.max(m,Math.min(j,l)));i=Math.round(i);j=Math.round(j);e(b.add(c).add(d)).width("auto").height("auto");
d.width(i-h).height(j-h);b.width(i);n=b.height();if(i>o||n>l)for(;(i>o||n>l)&&i>p&&n>m;)j-=10,g.aspectRatio?(i=Math.round((j-h)*k+h),i<p&&(i=p,j=(i-h)/k+h)):i-=10,d.width(i-h).height(j-h),b.width(i),n=b.height();g.dim={width:i,height:n};g.canGrow=g.autoSize&&j>m&&j<l;g.canShrink=!1;g.canExpand=!1;if(i-h<g.width||j-h<g.height)g.canExpand=!0;else if((i>f.w||n>f.h)&&i>p&&j>m)g.canShrink=!0;b=n-h;a.innerSpace=b-d.height();a.outerSpace=b-c.height()},_getPosition:function(b){var c=a.current,d=a.getViewport(),
e=c.margin,f=a.wrap.width()+e[1]+e[3],k=a.wrap.height()+e[0]+e[2],h={position:"absolute",top:e[0]+d.y,left:e[3]+d.x};if(c.fixed&&(!b||!1===b[0])&&k<=d.h&&f<=d.w)h={position:"fixed",top:e[0],left:e[3]};h.top=Math.ceil(Math.max(h.top,h.top+(d.h-k)*c.topRatio))+"px";h.left=Math.ceil(Math.max(h.left,h.left+0.5*(d.w-f)))+"px";return h},_afterZoomIn:function(){var b=a.current,c=b.scrolling;a.isOpen=a.isOpened=!0;a.wrap.addClass("fancybox-opened").css("overflow","visible");a.update();a.inner.css("overflow",
"yes"===c?"scroll":"no"===c?"hidden":c);if(b.closeClick||b.nextClick)a.inner.css("cursor","pointer").bind("click.fb",b.nextClick?a.next:a.close);b.closeBtn&&e(b.tpl.closeBtn).appendTo(a.outer).bind("click.fb",a.close);b.arrows&&1<a.group.length&&((b.loop||0<b.index)&&e(b.tpl.prev).appendTo(a.inner).bind("click.fb",a.prev),(b.loop||b.index<a.group.length-1)&&e(b.tpl.next).appendTo(a.inner).bind("click.fb",a.next));a.trigger("afterShow");a.opts.autoPlay&&!a.player.isActive&&(a.opts.autoPlay=!1,a.play())},
_afterZoomOut:function(){a.trigger("afterClose");a.wrap.trigger("onReset").remove();e.extend(a,{group:{},opts:{},current:null,isActive:!1,isOpened:!1,isOpen:!1,wrap:null,outer:null,inner:null})}});a.transitions={getOrigPosition:function(){var b=a.current,c=b.element,d=b.padding,g=e(b.orig),f={},k=50,h=50;!g.length&&b.isDom&&e(c).is(":visible")&&(g=e(c).find("img:first"),g.length||(g=e(c)));g.length?(f=g.offset(),g.is("img")&&(k=g.outerWidth(),h=g.outerHeight())):(b=a.getViewport(),f.top=b.y+0.5*(b.h-
h),f.left=b.x+0.5*(b.w-k));return f={top:Math.ceil(f.top-d)+"px",left:Math.ceil(f.left-d)+"px",width:Math.ceil(k+2*d)+"px",height:Math.ceil(h+2*d)+"px"}},step:function(b,c){var d,e,f;if("width"===c.prop||"height"===c.prop)e=f=Math.ceil(b-2*a.current.padding),"height"===c.prop&&(d=(b-c.start)/(c.end-c.start),c.start>c.end&&(d=1-d),e-=a.innerSpace*d,f-=a.outerSpace*d),a.inner[c.prop](e),a.outer[c.prop](f)},zoomIn:function(){var b=a.wrap,c=a.current,d,g;d=c.dim;"elastic"===c.openEffect?(g=e.extend({},
d,a._getPosition(!0)),delete g.position,d=this.getOrigPosition(),c.openOpacity&&(d.opacity=0,g.opacity=1),a.outer.add(a.inner).width("auto").height("auto"),b.css(d).show(),b.animate(g,{duration:c.openSpeed,easing:c.openEasing,step:this.step,complete:a._afterZoomIn})):(b.css(e.extend({},d,a._getPosition())),"fade"===c.openEffect?b.fadeIn(c.openSpeed,a._afterZoomIn):(b.show(),a._afterZoomIn()))},zoomOut:function(){var b=a.wrap,c=a.current,d;"elastic"===c.closeEffect?("fixed"===b.css("position")&&b.css(a._getPosition(!0)),
d=this.getOrigPosition(),c.closeOpacity&&(d.opacity=0),b.animate(d,{duration:c.closeSpeed,easing:c.closeEasing,step:this.step,complete:a._afterZoomOut})):b.fadeOut("fade"===c.closeEffect?c.closeSpeed:0,a._afterZoomOut)},changeIn:function(){var b=a.wrap,c=a.current,d;"elastic"===c.nextEffect?(d=a._getPosition(!0),d.opacity=0,d.top=parseInt(d.top,10)-200+"px",b.css(d).show().animate({opacity:1,top:"+=200px"},{duration:c.nextSpeed,easing:c.nextEasing,complete:a._afterZoomIn})):(b.css(a._getPosition()),
"fade"===c.nextEffect?b.hide().fadeIn(c.nextSpeed,a._afterZoomIn):(b.show(),a._afterZoomIn()))},changeOut:function(){var b=a.wrap,c=a.current,d=function(){e(this).trigger("onReset").remove()};b.removeClass("fancybox-opened");"elastic"===c.prevEffect?b.animate({opacity:0,top:"+=200px"},{duration:c.prevSpeed,easing:c.prevEasing,complete:d}):b.fadeOut("fade"===c.prevEffect?c.prevSpeed:0,d)}};a.helpers.overlay={overlay:null,update:function(){var a,c;this.overlay.width(0).height(0);e.browser.msie?(a=Math.max(m.documentElement.scrollWidth,
m.body.scrollWidth),c=Math.max(m.documentElement.offsetWidth,m.body.offsetWidth),a=a<c?l.width():a):a=q.width();this.overlay.width(a).height(q.height())},beforeShow:function(b){this.overlay||(b=e.extend(!0,{speedIn:"fast",closeClick:!0,opacity:1,css:{background:"black"}},b),this.overlay=e('<div id="fancybox-overlay"></div>').css(b.css).appendTo("body"),this.update(),b.closeClick&&this.overlay.bind("click.fb",a.close),l.bind("resize.fb",e.proxy(this.update,this)),this.overlay.fadeTo(b.speedIn,b.opacity))},
onUpdate:function(){this.update()},afterClose:function(a){this.overlay&&this.overlay.fadeOut(a.speedOut||0,function(){e(this).remove()});this.overlay=null}};a.helpers.title={beforeShow:function(b){var c;if(c=a.current.title)c=e('<div class="fancybox-title fancybox-title-'+b.type+'-wrap">'+c+"</div>").appendTo("body"),"float"===b.type&&(c.width(c.width()),c.wrapInner('<span class="child"></span>'),a.current.margin[2]+=Math.abs(parseInt(c.css("margin-bottom"),10))),c.appendTo("over"===b.type?a.inner:
"outside"===b.type?a.wrap:a.outer)}};e.fn.fancybox=function(b){var c=e(this),d=this.selector||"",g,f=function(f){var h=this,i="rel",j=h[i],l=g;!f.ctrlKey&&!f.altKey&&!f.shiftKey&&!f.metaKey&&(f.preventDefault(),j||(i="data-fancybox-group",j=e(h).attr("data-fancybox-group")),j&&""!==j&&"nofollow"!==j&&(h=d.length?e(d):c,h=h.filter("["+i+'="'+j+'"]'),l=h.index(this)),b.index=l,a.open(h,b))},b=b||{};g=b.index||0;d?q.undelegate(d,"click.fb-start").delegate(d,"click.fb-start",f):c.unbind("click.fb-start").bind("click.fb-start",
f);return this}})(window,document,jQuery);


//=================================================================================
//COOKIES
//  This routine sets a cookie on the visitor's machine.
// 
//  * name is the name of the cookie
//  * value is the information contained by name
//  * expires sets the number of days of when you want the cookie to expire. 
//    Leave blank to have cookie expire when browser is closed
//  * path specifies which folder on your Web site can access this cookie
//  * domain specifies which servers on your domain can access this cookie
//  * secure specifies whether a secure connection is needed to access this cookie
function setCookie(name,value,expires,path,domain,secure)
{	if (expires)
	{	var exp = new Date()
		exp.setTime(exp.getTime() + (expires * 60 * 60 * 24 * 1000))
		expires = exp.toGMTString()
	}
	
	document.cookie = name + "=" + escape(value) + 
	((expires) ? "; expires=" + expires : "") +
	((path) ? "; path=" + path : "") +
	((domain) ? "; domain=" + domain : "") +
	((secure) ? "; secure" : "")
}


//  This routine retrieves a cookie's value
//
//  * if the returned value is "null", then the cookie has not been set or has been cleared
function getCookie(name)
{	var cookie = " " + document.cookie
	var search = " " + name + "="
	var setStr = null
	var offset = 0
	var end = 0
	
	if (cookie.length > 0)
	{	offset = cookie.indexOf(search)
		if (offset != -1)
		{	offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1)
			{	end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	
	//if the first try is null, try again, but this time with UPPERCASE for coldfusion
	if (setStr == null) {
		var cookie = " " + document.cookie
		var search = " " + name.toUpperCase() + "="
		var setStr = null
		var offset = 0
		var end = 0
		
		if (cookie.length > 0)
		{	offset = cookie.indexOf(search)
			if (offset != -1)
			{	offset += search.length;
				end = cookie.indexOf(";", offset)
				if (end == -1)
				{	end = cookie.length;
				}
				setStr = unescape(cookie.substring(offset, end));
			}
		}
	}
	
	return(setStr);
}


// This routine clears the value of a cookie
function clearCookie(variable)
{	setCookie(variable,"","Thu, 01-Jan-1970 00:00:00 GMT")
}

//=================================================================================
/**
 * jQuery Validation Plugin 1.9.0
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2011 Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(c){c.extend(c.fn,{validate:function(a){if(this.length){var b=c.data(this[0],"validator");if(b)return b;this.attr("novalidate","novalidate");b=new c.validator(a,this[0]);c.data(this[0],"validator",b);if(b.settings.onsubmit){a=this.find("input, button");a.filter(".cancel").click(function(){b.cancelSubmit=true});b.settings.submitHandler&&a.filter(":submit").click(function(){b.submitButton=this});this.submit(function(d){function e(){if(b.settings.submitHandler){if(b.submitButton)var f=c("<input type='hidden'/>").attr("name",
b.submitButton.name).val(b.submitButton.value).appendTo(b.currentForm);b.settings.submitHandler.call(b,b.currentForm);b.submitButton&&f.remove();return false}return true}b.settings.debug&&d.preventDefault();if(b.cancelSubmit){b.cancelSubmit=false;return e()}if(b.form()){if(b.pendingRequest){b.formSubmitted=true;return false}return e()}else{b.focusInvalid();return false}})}return b}else a&&a.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing")},valid:function(){if(c(this[0]).is("form"))return this.validate().form();
else{var a=true,b=c(this[0].form).validate();this.each(function(){a&=b.element(this)});return a}},removeAttrs:function(a){var b={},d=this;c.each(a.split(/\s/),function(e,f){b[f]=d.attr(f);d.removeAttr(f)});return b},rules:function(a,b){var d=this[0];if(a){var e=c.data(d.form,"validator").settings,f=e.rules,g=c.validator.staticRules(d);switch(a){case "add":c.extend(g,c.validator.normalizeRule(b));f[d.name]=g;if(b.messages)e.messages[d.name]=c.extend(e.messages[d.name],b.messages);break;case "remove":if(!b){delete f[d.name];
return g}var h={};c.each(b.split(/\s/),function(j,i){h[i]=g[i];delete g[i]});return h}}d=c.validator.normalizeRules(c.extend({},c.validator.metadataRules(d),c.validator.classRules(d),c.validator.attributeRules(d),c.validator.staticRules(d)),d);if(d.required){e=d.required;delete d.required;d=c.extend({required:e},d)}return d}});c.extend(c.expr[":"],{blank:function(a){return!c.trim(""+a.value)},filled:function(a){return!!c.trim(""+a.value)},unchecked:function(a){return!a.checked}});c.validator=function(a,
b){this.settings=c.extend(true,{},c.validator.defaults,a);this.currentForm=b;this.init()};c.validator.format=function(a,b){if(arguments.length==1)return function(){var d=c.makeArray(arguments);d.unshift(a);return c.validator.format.apply(this,d)};if(arguments.length>2&&b.constructor!=Array)b=c.makeArray(arguments).slice(1);if(b.constructor!=Array)b=[b];c.each(b,function(d,e){a=a.replace(RegExp("\\{"+d+"\\}","g"),e)});return a};c.extend(c.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",
validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:c([]),errorLabelContainer:c([]),onsubmit:true,ignore:":hidden",ignoreTitle:false,onfocusin:function(a){this.lastActive=a;if(this.settings.focusCleanup&&!this.blockFocusCleanup){this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass);this.addWrapper(this.errorsFor(a)).hide()}},onfocusout:function(a){if(!this.checkable(a)&&(a.name in this.submitted||!this.optional(a)))this.element(a)},
onkeyup:function(a){if(a.name in this.submitted||a==this.lastElement)this.element(a)},onclick:function(a){if(a.name in this.submitted)this.element(a);else a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(a,b,d){a.type==="radio"?this.findByName(a.name).addClass(b).removeClass(d):c(a).addClass(b).removeClass(d)},unhighlight:function(a,b,d){a.type==="radio"?this.findByName(a.name).removeClass(b).addClass(d):c(a).removeClass(b).addClass(d)}},setDefaults:function(a){c.extend(c.validator.defaults,
a)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",maxlength:c.validator.format("Please enter no more than {0} characters."),
minlength:c.validator.format("Please enter at least {0} characters."),rangelength:c.validator.format("Please enter a value between {0} and {1} characters long."),range:c.validator.format("Please enter a value between {0} and {1}."),max:c.validator.format("Please enter a value less than or equal to {0}."),min:c.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){function a(e){var f=c.data(this[0].form,"validator"),g="on"+e.type.replace(/^validate/,
"");f.settings[g]&&f.settings[g].call(f,this[0],e)}this.labelContainer=c(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&this.labelContainer||c(this.currentForm);this.containers=c(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var b=this.groups={};c.each(this.settings.groups,function(e,f){c.each(f.split(/\s/),function(g,h){b[h]=e})});var d=
this.settings.rules;c.each(d,function(e,f){d[e]=c.validator.normalizeRule(f)});c(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",a).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",
a);this.settings.invalidHandler&&c(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},form:function(){this.checkForm();c.extend(this.submitted,this.errorMap);this.invalid=c.extend({},this.errorMap);this.valid()||c(this.currentForm).triggerHandler("invalid-form",[this]);this.showErrors();return this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(a){this.lastElement=
a=this.validationTargetFor(this.clean(a));this.prepareElement(a);this.currentElements=c(a);var b=this.check(a);if(b)delete this.invalid[a.name];else this.invalid[a.name]=true;if(!this.numberOfInvalids())this.toHide=this.toHide.add(this.containers);this.showErrors();return b},showErrors:function(a){if(a){c.extend(this.errorMap,a);this.errorList=[];for(var b in a)this.errorList.push({message:a[b],element:this.findByName(b)[0]});this.successList=c.grep(this.successList,function(d){return!(d.name in a)})}this.settings.showErrors?
this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){c.fn.resetForm&&c(this.currentForm).resetForm();this.submitted={};this.lastElement=null;this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b=0,d;for(d in a)b++;return b},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return this.size()==
0},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{c(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(a){}},findLastActive:function(){var a=this.lastActive;return a&&c.grep(this.errorList,function(b){return b.element.name==a.name}).length==1&&a},elements:function(){var a=this,b={};return c(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&
a.settings.debug&&window.console&&console.error("%o has no name assigned",this);if(this.name in b||!a.objectLength(c(this).rules()))return false;return b[this.name]=true})},clean:function(a){return c(a)[0]},errors:function(){return c(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext)},reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=c([]);this.toHide=c([]);this.currentElements=c([])},prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers)},
prepareElement:function(a){this.reset();this.toHide=this.errorsFor(a)},check:function(a){a=this.validationTargetFor(this.clean(a));var b=c(a).rules(),d=false,e;for(e in b){var f={method:e,parameters:b[e]};try{var g=c.validator.methods[e].call(this,a.value.replace(/\r/g,""),a,f.parameters);if(g=="dependency-mismatch")d=true;else{d=false;if(g=="pending"){this.toHide=this.toHide.not(this.errorsFor(a));return}if(!g){this.formatAndAdd(a,f);return false}}}catch(h){this.settings.debug&&window.console&&console.log("exception occured when checking element "+
a.id+", check the '"+f.method+"' method",h);throw h;}}if(!d){this.objectLength(b)&&this.successList.push(a);return true}},customMetaMessage:function(a,b){if(c.metadata){var d=this.settings.meta?c(a).metadata()[this.settings.meta]:c(a).metadata();return d&&d.messages&&d.messages[b]}},customMessage:function(a,b){var d=this.settings.messages[a];return d&&(d.constructor==String?d:d[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(arguments[a]!==undefined)return arguments[a]},defaultMessage:function(a,
b){return this.findDefined(this.customMessage(a.name,b),this.customMetaMessage(a,b),!this.settings.ignoreTitle&&a.title||undefined,c.validator.messages[b],"<strong>Warning: No message defined for "+a.name+"</strong>")},formatAndAdd:function(a,b){var d=this.defaultMessage(a,b.method),e=/\$?\{(\d+)\}/g;if(typeof d=="function")d=d.call(this,b.parameters,a);else if(e.test(d))d=jQuery.format(d.replace(e,"{$1}"),b.parameters);this.errorList.push({message:d,element:a});this.errorMap[a.name]=d;this.submitted[a.name]=
d},addWrapper:function(a){if(this.settings.wrapper)a=a.add(a.parent(this.settings.wrapper));return a},defaultShowErrors:function(){for(var a=0;this.errorList[a];a++){var b=this.errorList[a];this.settings.highlight&&this.settings.highlight.call(this,b.element,this.settings.errorClass,this.settings.validClass);this.showLabel(b.element,b.message)}if(this.errorList.length)this.toShow=this.toShow.add(this.containers);if(this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);
if(this.settings.unhighlight){a=0;for(b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass)}this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return c(this.errorList).map(function(){return this.element})},showLabel:function(a,b){var d=this.errorsFor(a);if(d.length){d.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
d.attr("generated")&&d.html(b)}else{d=c("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(a),generated:true}).addClass(this.settings.errorClass).html(b||"");if(this.settings.wrapper)d=d.hide().show().wrap("<"+this.settings.wrapper+"/>").parent();this.labelContainer.append(d).length||(this.settings.errorPlacement?this.settings.errorPlacement(d,c(a)):d.insertAfter(a))}if(!b&&this.settings.success){d.text("");typeof this.settings.success=="string"?d.addClass(this.settings.success):this.settings.success(d)}this.toShow=
this.toShow.add(d)},errorsFor:function(a){var b=this.idOrName(a);return this.errors().filter(function(){return c(this).attr("for")==b})},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(a){if(this.checkable(a))a=this.findByName(a.name).not(this.settings.ignore)[0];return a},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(a){var b=this.currentForm;return c(document.getElementsByName(a)).map(function(d,
e){return e.form==b&&e.name==a&&e||null})},getLength:function(a,b){switch(b.nodeName.toLowerCase()){case "select":return c("option:selected",b).length;case "input":if(this.checkable(b))return this.findByName(b.name).filter(":checked").length}return a.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):true},dependTypes:{"boolean":function(a){return a},string:function(a,b){return!!c(a,b.form).length},"function":function(a,b){return a(b)}},optional:function(a){return!c.validator.methods.required.call(this,
c.trim(a.value),a)&&"dependency-mismatch"},startRequest:function(a){if(!this.pending[a.name]){this.pendingRequest++;this.pending[a.name]=true}},stopRequest:function(a,b){this.pendingRequest--;if(this.pendingRequest<0)this.pendingRequest=0;delete this.pending[a.name];if(b&&this.pendingRequest==0&&this.formSubmitted&&this.form()){c(this.currentForm).submit();this.formSubmitted=false}else if(!b&&this.pendingRequest==0&&this.formSubmitted){c(this.currentForm).triggerHandler("invalid-form",[this]);this.formSubmitted=
false}},previousValue:function(a){return c.data(a,"previousValue")||c.data(a,"previousValue",{old:null,valid:true,message:this.defaultMessage(a,"remote")})}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},dateDE:{dateDE:true},number:{number:true},numberDE:{numberDE:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(a,b){a.constructor==String?this.classRuleSettings[a]=b:c.extend(this.classRuleSettings,
a)},classRules:function(a){var b={};(a=c(a).attr("class"))&&c.each(a.split(" "),function(){this in c.validator.classRuleSettings&&c.extend(b,c.validator.classRuleSettings[this])});return b},attributeRules:function(a){var b={};a=c(a);for(var d in c.validator.methods){var e;if(e=d==="required"&&typeof c.fn.prop==="function"?a.prop(d):a.attr(d))b[d]=e;else if(a[0].getAttribute("type")===d)b[d]=true}b.maxlength&&/-1|2147483647|524288/.test(b.maxlength)&&delete b.maxlength;return b},metadataRules:function(a){if(!c.metadata)return{};
var b=c.data(a.form,"validator").settings.meta;return b?c(a).metadata()[b]:c(a).metadata()},staticRules:function(a){var b={},d=c.data(a.form,"validator");if(d.settings.rules)b=c.validator.normalizeRule(d.settings.rules[a.name])||{};return b},normalizeRules:function(a,b){c.each(a,function(d,e){if(e===false)delete a[d];else if(e.param||e.depends){var f=true;switch(typeof e.depends){case "string":f=!!c(e.depends,b.form).length;break;case "function":f=e.depends.call(b,b)}if(f)a[d]=e.param!==undefined?
e.param:true;else delete a[d]}});c.each(a,function(d,e){a[d]=c.isFunction(e)?e(b):e});c.each(["minlength","maxlength","min","max"],function(){if(a[this])a[this]=Number(a[this])});c.each(["rangelength","range"],function(){if(a[this])a[this]=[Number(a[this][0]),Number(a[this][1])]});if(c.validator.autoCreateRanges){if(a.min&&a.max){a.range=[a.min,a.max];delete a.min;delete a.max}if(a.minlength&&a.maxlength){a.rangelength=[a.minlength,a.maxlength];delete a.minlength;delete a.maxlength}}a.messages&&delete a.messages;
return a},normalizeRule:function(a){if(typeof a=="string"){var b={};c.each(a.split(/\s/),function(){b[this]=true});a=b}return a},addMethod:function(a,b,d){c.validator.methods[a]=b;c.validator.messages[a]=d!=undefined?d:c.validator.messages[a];b.length<3&&c.validator.addClassRules(a,c.validator.normalizeRule(a))},methods:{required:function(a,b,d){if(!this.depend(d,b))return"dependency-mismatch";switch(b.nodeName.toLowerCase()){case "select":return(a=c(b).val())&&a.length>0;case "input":if(this.checkable(b))return this.getLength(a,
b)>0;default:return c.trim(a).length>0}},remote:function(a,b,d){if(this.optional(b))return"dependency-mismatch";var e=this.previousValue(b);this.settings.messages[b.name]||(this.settings.messages[b.name]={});e.originalMessage=this.settings.messages[b.name].remote;this.settings.messages[b.name].remote=e.message;d=typeof d=="string"&&{url:d}||d;if(this.pending[b.name])return"pending";if(e.old===a)return e.valid;e.old=a;var f=this;this.startRequest(b);var g={};g[b.name]=a;c.ajax(c.extend(true,{url:d,
mode:"abort",port:"validate"+b.name,dataType:"json",data:g,success:function(h){f.settings.messages[b.name].remote=e.originalMessage;var j=h===true;if(j){var i=f.formSubmitted;f.prepareElement(b);f.formSubmitted=i;f.successList.push(b);f.showErrors()}else{i={};h=h||f.defaultMessage(b,"remote");i[b.name]=e.message=c.isFunction(h)?h(a):h;f.showErrors(i)}e.valid=j;f.stopRequest(b,j)}},d));return"pending"},minlength:function(a,b,d){return this.optional(b)||this.getLength(c.trim(a),b)>=d},maxlength:function(a,
b,d){return this.optional(b)||this.getLength(c.trim(a),b)<=d},rangelength:function(a,b,d){a=this.getLength(c.trim(a),b);return this.optional(b)||a>=d[0]&&a<=d[1]},min:function(a,b,d){return this.optional(b)||a>=d},max:function(a,b,d){return this.optional(b)||a<=d},range:function(a,b,d){return this.optional(b)||a>=d[0]&&a<=d[1]},email:function(a,b){return this.optional(b)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)},
url:function(a,b){return this.optional(b)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},
date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a))},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 -]+/.test(a))return false;var d=0,e=0,f=false;a=a.replace(/\D/g,"");for(var g=a.length-1;g>=
0;g--){e=a.charAt(g);e=parseInt(e,10);if(f)if((e*=2)>9)e-=9;d+=e;f=!f}return d%10==0},accept:function(a,b,d){d=typeof d=="string"?d.replace(/,/g,"|"):"png|jpe?g|gif";return this.optional(b)||a.match(RegExp(".("+d+")$","i"))},equalTo:function(a,b,d){d=c(d).unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){c(b).valid()});return a==d.val()}}});c.format=c.validator.format})(jQuery);
(function(c){var a={};if(c.ajaxPrefilter)c.ajaxPrefilter(function(d,e,f){e=d.port;if(d.mode=="abort"){a[e]&&a[e].abort();a[e]=f}});else{var b=c.ajax;c.ajax=function(d){var e=("port"in d?d:c.ajaxSettings).port;if(("mode"in d?d:c.ajaxSettings).mode=="abort"){a[e]&&a[e].abort();return a[e]=b.apply(this,arguments)}return b.apply(this,arguments)}}})(jQuery);
(function(c){!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(e){e=c.event.fix(e);e.type=b;return c.event.handle.call(this,e)}c.event.special[b]={setup:function(){this.addEventListener(a,d,true)},teardown:function(){this.removeEventListener(a,d,true)},handler:function(e){arguments[0]=c.event.fix(e);arguments[0].type=b;return c.event.handle.apply(this,arguments)}}});c.extend(c.fn,{validateDelegate:function(a,
b,d){return this.bind(b,function(e){var f=c(e.target);if(f.is(a))return d.apply(f,arguments)})}})})(jQuery);

//=================================================================================
/*
 * RoyalSlider  v8.1
 *
 * Copyright 2011-2012, Dmitry Semenov
 * 
 */
(function($){function RoyalSlider(f,g){this.slider=$(f);this._az="";this._by="";this._cx="";var h=this;this.settings=$.extend({},$.fn.royalSlider.defaults,g);this.isSlideshowRunning=false;this._dw=false;this._ev=this.slider.find(".royalSlidesContainer");this._fu=this._ev.wrap('<div class="royalWrapper"/>').parent();this.slides=this._ev.find(".royalSlide");this._gt="<p class='royalPreloader'></p>";this._hs=false;this._ir=false;if("ontouchstart"in window){if(!this.settings.disableTranslate3d){if(('WebKitCSSMatrix'in window&&'m11'in new WebKitCSSMatrix())){this._ev.css({"-webkit-transform-origin":"0 0","-webkit-transform":"translateZ(0)"});this._ir=true}}this.hasTouch=true;this._az="touchstart.rs";this._by="touchmove.rs";this._cx="touchend.rs"}else{this.hasTouch=false;if(this.settings.dragUsingMouse){this._az="mousedown.rs";this._by="mousemove.rs";this._cx="mouseup.rs"}else{this._ev.addClass('auto-cursor')}}if(this.hasTouch){this.settings.directionNavAutoHide=false;this.settings.hideArrowOnLastSlide=true}if($.browser.msie&&parseInt($.browser.version,10)<=8){this._jq=true}else{this._jq=false}this.slidesArr=[];var i,jqSlide,dataSRC,slideImg;this.slides.each(function(){jqSlide=$(this);i={};i.slide=jqSlide;if(h.settings.blockLinksOnDrag){if(!this.hasTouch){jqSlide.find('a').bind('click.rs',function(e){if(h._hs){e.preventDefault();return false}})}else{var c=jqSlide.find('a');var d;c.each(function(){d=$(this);d.data('royalhref',d.attr('href'));d.data('royaltarget',d.attr('target'));d.attr('href','#');d.bind('click',function(e){e.preventDefault();if(h._hs){return false}else{var a=$(this).data('royalhref');var b=$(this).data('royaltarget');if(!b||b.toLowerCase()==='_kp'){window.location.href=a}else{window.open(a)}}})})}}if(h.settings.nonDraggableClassEnabled){jqSlide.find('.non-draggable').bind(h._az,function(e){h._hs=false;e.stopImmediatePropagation()})}dataSRC=jqSlide.attr("data-src");if(dataSRC==undefined||dataSRC==""||dataSRC=="none"){i.preload=false}else{i.preload=true;i.preloadURL=dataSRC}if(h.settings.captionAnimationEnabled){i.caption=jqSlide.find(".royalCaption").css("display","none")}h.slidesArr.push(i)});this._lo=false;if(this.settings.removeCaptionsOpacityInIE8){if($.browser.msie&&parseInt($.browser.version,10)<=8){this._lo=true}}if(this.settings.autoScaleSlider){this.sliderScaleRatio=this.settings.autoScaleSliderHeight/this.settings.autoScaleSliderWidth}this.slider.css("overflow","visible");this.slideWidth=0;this.slideshowTimer='';this.mn=false;this.numSlides=this.slides.length;this.currentSlideId=this.settings.startSlideIndex;this.lastSlideId=-1;this.isAnimating=true;this.wasSlideshowPlaying=false;this._az1=0;this._by1=0;this._cx1=false;this._dw1=[];this._ev1=[];this._fu1=false;this._gt1=false;this._hs1=0;this._ir1=0;this._jq1=0;this._kp1=0;this._lo1=0;this._mn1=0;this._az2=false;this._by2=false;if(this.settings.slideTransitionType==="fade"){if(this._ir||('WebKitCSSMatrix'in window&&'m11'in new WebKitCSSMatrix())){this._cx2=true}else{this._cx2=false}this._dw2=$("<div class='fade-container'></div>").appendTo(this._fu)}if(this.settings.slideshowEnabled&&this.settings.slideshowDelay>0){if(!this.hasTouch&&this.settings.slideshowPauseOnHover){this.slider.hover(function(){h._by2=true;h._ev2(true)},function(){h._by2=false;h._fu2(true)})}this.slideshowEnabled=true}else{this.slideshowEnabled=false}this._gt2();if(this.settings.controlNavEnabled){var j;this._hs2Container='';var k;if(!h.settings.controlNavThumbs){this._hs2Container=$('<div class="royalControlNavOverflow"><div class="royalControlNavContainer"><div class="royalControlNavCenterer"></div></div></div>');j=this._hs2Container.find('.royalControlNavCenterer')}else{this.slider.addClass('with-thumbs');if(h.settings.controlNavThumbsNavigation){k=$('<div class="thumbsAndArrowsContainer"></div>');this.thumbsArrowLeft=$("<a href='#' class='thumbsArrow left'></a>");this.thumbsArrowRight=$("<a href='#' class='thumbsArrow right'></a>");k.append(this.thumbsArrowLeft);k.append(this.thumbsArrowRight);var l=parseInt(this.thumbsArrowLeft.outerWidth(),10);this._hs2Container=$('<div class="royalControlNavOverflow royalThumbs"><div class="royalControlNavThumbsContainer"></div></div>');j=this._hs2Container.find('.royalControlNavThumbsContainer')}else{this._hs2Container=$('<div class="royalControlNavOverflow royalThumbs"><div class="royalControlNavContainer"><div class="royalControlNavCenterer"></div></div></div>');j=this._hs2Container.find(".royalControlNavCenterer")}}var m=0;this.slides.each(function(a){if(h.settings.controlNavThumbs){j.append('<a href="#" class="royalThumb" style="background-image:url('+$(this).attr("data-thumb")+')">'+(a+1)+'</a>')}else{j.append('<a href="#">'+(a+1)+'</a>')}m++});this.navItems=j.children();if(k){k.append(this._hs2Container);this._fu.after(k)}else{this._fu.after(this._hs2Container)}if(h.settings.controlNavThumbs&&h.settings.controlNavThumbsNavigation){this._kp2=true;this._lo2=false;this._mn2=j;if(this._ir){this._mn2.css({'-webkit-transition-duration':this.settings.controlNavThumbsSpeed+"ms",'-webkit-transition-property':'-webkit-transform','-webkit-transition-timing-function':"ease-in-out"})}this._az3=m;var n=this.navItems.eq(0);this._by3=n.outerWidth(true);this._cx3=this._by3*this._az3;this._mn2.css("width",this._cx3);this._dw3=parseInt(n.css("marginRight"),10);this._cx3-=this._dw3;this._ev3=0;this._fu3();this.thumbsArrowLeft.click(function(e){e.preventDefault();if(!h._kp2){h._gt3(h._ev3+h._hs3+h._dw3)}});this.thumbsArrowRight.click(function(e){e.preventDefault();if(!h._lo2){h._gt3(h._ev3-h._hs3-h._dw3)}})}this._ir3()}if(this.settings.directionNavEnabled){this._fu.after("<a href='#' class='arrow left'/>");this._fu.after("<a href='#' class='arrow right'/>");this.arrowLeft=this.slider.find("a.arrow.left");this.arrowRight=this.slider.find("a.arrow.right");if(this.arrowLeft.length<1||this.arrowRight.length<1){this.settings.directionNavEnabled=false}else if(this.settings.directionNavAutoHide){this.arrowLeft.hide();this.arrowRight.hide();this.slider.one("mousemove.arrowshover",function(){h.arrowLeft.fadeIn("fast");h.arrowRight.fadeIn("fast")});this.slider.hover(function(){h.arrowLeft.fadeIn("fast");h.arrowRight.fadeIn("fast")},function(){h.arrowLeft.fadeOut("fast");h.arrowRight.fadeOut("fast")})}this._jq3()}this.sliderWidth=0;this.sliderHeight=0;var o;this._kp3='onorientationchange'in window?'orientationchange.royalslider':'resize.royalslider';$(window).bind(this._kp3,function(){if(o){clearTimeout(o)}o=setTimeout(function(){h.updateSliderSize()},100)});this.updateSliderSize();this.settings.beforeLoadStart.call(this);var p=this.slidesArr[this.currentSlideId];if(this.currentSlideId!=0){if(!this._ir){this._ev.css({'left':-this.currentSlideId*this.slideWidth})}else{this._ev.css({'-webkit-transition-duration':'0','-webkit-transition-property':'none'});this._ev.css({'-webkit-transform':'translate3d('+ -this.currentSlideId*this.slideWidth+'px, 0, 0)'})}}if(this.settings.welcomeScreenEnabled){function hideWelcomeScreen(a){h.settings.loadingComplete.call(h);if(a&&h.settings.preloadNearbyImages){h._lo3(h.currentSlideId)}h.slider.find('.royalLoadingScreen').fadeOut(h.settings.welcomeScreenShowSpeed);setTimeout(function(){h._mn3()},h.settings.welcomeScreenShowSpeed+100)}if(p.preload){this._lo3(this.currentSlideId,function(){hideWelcomeScreen(false)})}else{slideImg=p.slide.find('img.royalImage')[0];if(slideImg){if(this._az4(slideImg)){hideWelcomeScreen(true);$(slideImg).css('opacity',0);$(slideImg).animate({"opacity":1},"fast")}else{$(slideImg).css('opacity',0);$('<img />').load(function(){hideWelcomeScreen(true);$(slideImg).animate({"opacity":1},"fast")}).attr('src',slideImg.src)}}else{hideWelcomeScreen(true)}}}else{if(p.preload){this._by4(p,function(){h.settings.loadingComplete.call(h);if(h.settings.preloadNearbyImages){h._lo3(h.currentSlideId)}})}else{slideImg=p.slide.find('img.royalImage')[0];if(slideImg){if(this._az4(slideImg)){$(slideImg).css('opacity',0).animate({"opacity":1},"fast")}else{$(slideImg).css('opacity',0);$('<img />').load(function(){$(slideImg).animate({"opacity":1},"fast")}).attr('src',slideImg.src)}}this.settings.loadingComplete.call(this)}setTimeout(function(){h._mn3()},100)}}RoyalSlider.prototype={goTo:function(a,b,c,d,f){if(!this.isAnimating){this.isAnimating=true;var g=this;this.lastSlideId=this.currentSlideId;this.currentSlideId=a;this._gt1=true;this._fu1=true;if(this.lastSlideId!=a){this._ir3(c);this._lo3(a)}this._jq3();this.settings.beforeSlideChange.call(this);if(this.slideshowEnabled&&this.slideshowTimer){this.wasSlideshowPlaying=true;this._ev2()}var h=!b?this.settings.slideTransitionSpeed:0;if(d||b||this.settings.slideTransitionType==="move"){var i;if(f>0){h=f}else{i=this.settings.slideTransitionEasing}if(!this._ir){if(parseInt(this._ev.css("left"),10)!==-this.currentSlideId*this.slideWidth){this._ev.animate({left:-this.currentSlideId*this.slideWidth},h,(f>0?"easeOutSine":this.settings.slideTransitionEasing),function(){g._cx4()})}else{this._cx4()}}else{if(this._dw4()!==-this.currentSlideId*this.slideWidth){this._ev.bind("webkitTransitionEnd.rs",function(e){if(e.target==g._ev.get(0)){g._ev.unbind("webkitTransitionEnd.rs");g._cx4()}});this._ev.css({'-webkit-transition-duration':h+"ms",'-webkit-transition-property':'-webkit-transform','-webkit-transition-timing-function':(f>0?"ease-out":"ease-in-out"),'-webkit-transform':'translate3d('+ -this.currentSlideId*this.slideWidth+'px, 0, 0)'})}else{this._cx4()}}}else{var j=this.slidesArr[this.lastSlideId].slide;var k=j.clone().appendTo(this._dw2);if(!this._cx2){this._ev.css({left:-this.currentSlideId*this.slideWidth});k.animate({opacity:0},h,this.settings.slideTransitionEasing,function(){k.remove();g._cx4()})}else{if(!this._ir){this._ev.css({left:-this.currentSlideId*this.slideWidth})}else{this._ev.css({'-webkit-transition-duration':'0','-webkit-transform':'translate3d('+ -this.currentSlideId*this.slideWidth+'px, 0, 0)','opacity':'1'})}setTimeout(function(){k.bind("webkitTransitionEnd.rs",function(e){if(e.target==k.get(0)){k.unbind("webkitTransitionEnd.rs");k.remove();g._cx4()}});k.css({'-webkit-transition-duration':h+"ms",'-webkit-transition-property':'opacity','-webkit-transition-timing-function':"ease-in-out"});k.css('opacity',0)},100)}}}},goToSilent:function(a){this.goTo(a,true)},prev:function(){if(this.currentSlideId<=0){this.goTo(this.numSlides-1)}else{this._ev4()}},next:function(){if(this.currentSlideId>=this.numSlides-1){this.goTo(0)}else{this._fu4()}},updateSliderSize:function(){var a=this;var b;var c;if(this.settings.autoScaleSlider){b=this.slider.width();if(b!=this.sliderWidth){this.slider.css("height",b*this.sliderScaleRatio)}}b=this.slider.width();c=this.slider.height();if(b!=this.sliderWidth||c!=this.sliderHeight){this.sliderWidth=b;this.sliderHeight=c;this.slideWidth=this.sliderWidth+this.settings.slideSpacing;var d=this.slidesArr.length;var e,_hs4;for(var i=0,len=d;i<len;++i){e=this.slidesArr[i];_hs4=e.slide.find("img.royalImage").eq(0);if(_hs4&&e.preload==false){this._ir4(_hs4,this.sliderWidth,this.sliderHeight)}if(this.settings.slideSpacing>0&&i<d-1){e.slide.css("cssText","margin-right:"+this.settings.slideSpacing+"px !important;")}e.slide.css({height:a.sliderHeight,width:a.sliderWidth})}if(!this._ir){this._ev.css({"left":-this.currentSlideId*this.slideWidth,width:this.slideWidth*this.numSlides})}else{if(!this._gt1){this._ev.css({'-webkit-transition-duration':'0','-webkit-transition-property':'none'});this._ev.css({'-webkit-transform':'translate3d('+ -this.currentSlideId*this.slideWidth+'px, 0, 0)',width:this.slideWidth*this.numSlides})}}if(this.settings.controlNavThumbs&&this.settings.controlNavThumbsNavigation){this._fu3()}}},stopSlideshow:function(){this._ev2();this.slideshowEnabled=false;this.wasSlideshowPlaying=false},resumeSlideshow:function(){this.slideshowEnabled=true;if(!this.wasSlideshowPlaying){this._fu2()}},destroy:function(){this._ev2();this._ev.unbind(this._az);$(document).unbind(this._by).unbind(this._cx);$(window).unbind(this._kp3);if(this.settings.keyboardNavEnabled){$(document).unbind("keydown.rs")}this.slider.remove();delete this.slider},_lo3:function(a,b){if(this.settings.preloadNearbyImages){var c=this;this._by4(this.slidesArr[a],function(){if(b){b.call()}c._by4(c.slidesArr[a+1],function(){c._by4(c.slidesArr[a-1])})})}else{this._by4(this.slidesArr[a],b)}},_ir3:function(a){if(this.settings.controlNavEnabled){this.navItems.eq(this.lastSlideId).removeClass('current');this.navItems.eq(this.currentSlideId).addClass("current");if(this.settings.controlNavThumbs&&this.settings.controlNavThumbsNavigation){var b=this.navItems.eq(this.currentSlideId).position().left;var c=b-Math.abs(this._ev3);if(c>this._hs3-this._by3*2-1-this._dw3){if(!a){this._gt3(-b+this._by3)}else{this._gt3(-b-this._by3*2+this._hs3+this._dw3)}}else if(c<this._by3*2-1){if(!a){this._gt3(-b-this._by3*2+this._hs3+this._dw3)}else{this._gt3(-b+this._by3)}}}}},_jq3:function(){if(this.settings.directionNavEnabled){if(this.settings.hideArrowOnLastSlide){if(this.currentSlideId==0){this._lo4=true;this.arrowLeft.addClass("disabled");if(this._mn4){this._mn4=false;this.arrowRight.removeClass("disabled")}}else if(this.currentSlideId==this.numSlides-1){this._mn4=true;this.arrowRight.addClass("disabled");if(this._lo4){this._lo4=false;this.arrowLeft.removeClass("disabled")}}else{if(this._lo4){this._lo4=false;this.arrowLeft.removeClass("disabled")}else if(this._mn4){this._mn4=false;this.arrowRight.removeClass("disabled")}}}}},_fu2:function(a){if(this.slideshowEnabled){var b=this;if(!this.slideshowTimer){this.slideshowTimer=setInterval(function(){b.next()},this.settings.slideshowDelay)}}},_ev2:function(a){if(this.slideshowTimer){clearInterval(this.slideshowTimer);this.slideshowTimer=''}},_by4:function(a,b){if(a){if(a.preload){var c=this;var d=new Image();var e=$(d);e.css("opacity",0);e.addClass("royalImage");a.slide.prepend(e);a.slide.prepend(this._gt);a.preload=false;e.load(function(){c._ir4(e,c.sliderWidth,c.sliderHeight);e.animate({"opacity":1},300,function(){a.slide.find(".royalPreloader").remove()});if(b){b.call()}}).attr('src',a.preloadURL)}else{if(b){b.call()}}}else{if(b){b.call()}}},_fu3:function(){this._hs3=parseInt(this._hs2Container.width(),10);this._az5=-(this._cx3-this._hs3);if(this._hs3>=this._cx3){this._lo2=true;this._kp2=true;this.thumbsArrowRight.addClass("disabled");this.thumbsArrowLeft.addClass("disabled");this._cx1=true;this._by5(0)}else{this._cx1=false;var a=this.navItems.eq(this.currentSlideId).position().left;this._gt3(-a+this._by3)}},_gt3:function(a){if(!this._cx1&&a!=this._ev3){if(a<=this._az5){a=this._az5;this._kp2=false;this._lo2=true;this.thumbsArrowRight.addClass("disabled");this.thumbsArrowLeft.removeClass("disabled")}else if(a>=0){a=0;this._kp2=true;this._lo2=false;this.thumbsArrowLeft.addClass("disabled");this.thumbsArrowRight.removeClass("disabled")}else{if(this._kp2){this._kp2=false;this.thumbsArrowLeft.removeClass("disabled")}if(this._lo2){this._lo2=false;this.thumbsArrowRight.removeClass("disabled")}}this._by5(a);this._ev3=a}},_by5:function(a){if(!this._ir){this._mn2.animate({left:a},this.settings.controlNavThumbsSpeed,this.settings.controlNavThumbsEasing)}else{this._mn2.css({'-webkit-transform':'translate3d('+a+'px, 0, 0)'})}},_mn3:function(){var a=this;this.slider.find(".royalLoadingScreen").remove();if(this.settings.controlNavEnabled){this.navItems.bind("click",function(e){e.preventDefault();if(!a._fu1){a._cx5(e)}})}if(this.settings.directionNavEnabled){this.arrowRight.click(function(e){e.preventDefault();if(!a._mn4&&!a._fu1){a.next()}});this.arrowLeft.click(function(e){e.preventDefault();if(!a._lo4&&!a._fu1){a.prev()}})}if(this.settings.keyboardNavEnabled){$(document).bind("keydown.rs",function(e){if(!a._fu1){if(e.keyCode===37){a.prev()}else if(e.keyCode===39){a.next()}}})}this.wasSlideshowPlaying=true;this._cx4();this._ev.bind(this._az,function(e){if(!a._gt1){a._dw5(e)}else if(!a.hasTouch){e.preventDefault()}});if(this.slideshowEnabled&&!this.settings.slideshowAutoStart){this._ev2()}this.settings.allComplete.call(this)},_gt2:function(){this._ev.removeClass('grabbing-cursor');this._ev.addClass('grab-cursor')},_ev5:function(){this._ev.removeClass('grab-cursor');this._ev.addClass('grabbing-cursor')},_fu4:function(a,b){if(this.currentSlideId<this.numSlides-1){this.goTo(this.currentSlideId+1,false,false,a,b)}else{this.goTo(this.currentSlideId,false,false,a,b)}},_ev4:function(a,b){if(this.currentSlideId>0){this.goTo(this.currentSlideId-1,false,false,a,b)}else{this.goTo(this.currentSlideId,false,false,a,b)}},_cx5:function(e){this.goTo($(e.currentTarget).index(),false,true)},_dw4:function(){var a=window.getComputedStyle(this._ev.get(0),null).getPropertyValue("-webkit-transform");var b=a.replace(/^matrix\(/i,'').split(/, |\)$/g);return parseInt(b[4],10)},_dw5:function(e){if(!this._az2){var a;if(this.hasTouch){this._fu5=false;var b=e.originalEvent.touches;if(b&&b.length>0){a=b[0]}else{return false}}else{a=e;e.preventDefault()}if(this.slideshowEnabled){if(this.slideshowTimer){this.wasSlideshowPlaying=true;this._ev2()}else{this.wasSlideshowPlaying=false}}this._ev5();this._az2=true;var c=this;if(this._ir){c._ev.css({'-webkit-transition-duration':'0','-webkit-transition-property':'none'})}$(document).bind(this._by,function(e){c._gt5(e)});$(document).bind(this._cx,function(e){c._hs5(e)});if(!this._ir){this._mn1=this._jq1=parseInt(this._ev.css("left"),10)}else{this._mn1=this._jq1=this._dw4()}this._hs=false;this._ir1=this._jq1;this._hs1=(e.timeStamp||new Date().getTime());this._kp1=a.clientX;this._lo1=a.clientY}return false},_gt5:function(e){var a;if(this.hasTouch){if(this._fu5){return false}var b=e.originalEvent.touches;if(b.length>1){return false}a=b[0];if(Math.abs(a.clientY-this._lo1)>Math.abs(a.clientX-this._kp1)+3){if(this.settings.lockAxis){this._fu5=true}return false}e.preventDefault()}else{a=e;e.preventDefault()}this._by1=this._az1;var c=a.clientX-this._kp1;if(this._by1!=c){this._az1=c}if(c!=0){if(this.currentSlideId==0){if(c>0){c=Math.sqrt(c)*5}}else if(this.currentSlideId==(this.numSlides-1)){if(c<0){c=-Math.sqrt(-c)*5}}if(!this._ir){this._ev.css("left",this._jq1+c)}else{this._ev.css({'-webkit-transform':'translate3d('+(this._jq1+c)+'px, 0, 0)'})}}var d=(e.timeStamp||new Date().getTime());if(d-this._hs1>350){this._hs1=d;this._ir1=this._jq1+c}return false},_hs5:function(e){if(this._az2){var a=this;this._az2=false;this._gt2();if(!this._ir){this.endPos=parseInt(this._ev.css("left"),10)}else{this.endPos=this._dw4()}this.isdrag=false;$(document).unbind(this._by).unbind(this._cx);if(this.slideshowEnabled){if(this.wasSlideshowPlaying){if(!this._by2){this._fu2()}this.wasSlideshowPlaying=false}}if(this.endPos==this._mn1){this._hs=false;return}else{this._hs=true}var b=(this._ir1-this.endPos);var c=Math.max(40,(e.timeStamp||new Date().getTime())-this._hs1);var d=Math.abs(b)/c;var f=this.slideWidth-Math.abs(this._mn1-this.endPos);var g=Math.max((f*1.08)/d,200);g=Math.min(g,600);function returnToCurrent(){f=Math.abs(a._mn1-a.endPos);g=Math.max((f*1.08)/d,200);g=Math.min(g,500);a.goTo(a.currentSlideId,false,false,true,g)}if(this._mn1-this.settings.minSlideOffset>this.endPos){if(this._by1<this._az1){returnToCurrent();return false}this._fu4(true,g)}else if(this._mn1+this.settings.minSlideOffset<this.endPos){if(this._by1>this._az1){returnToCurrent();return false}this._ev4(true,g)}else{returnToCurrent()}}return false},_cx4:function(){var a=this;if(this.slideshowEnabled){if(this.wasSlideshowPlaying){if(!this._by2){this._fu2()}this.wasSlideshowPlaying=false}}this._fu1=false;this._gt1=false;if(this.settings.captionAnimationEnabled&&this.lastSlideId!=this.currentSlideId){if(this.lastSlideId!=-1){this.slidesArr[this.lastSlideId].caption.css("display","none")}a._ir5(a.currentSlideId)}this.isAnimating=false;this.settings.afterSlideChange.call(this)},_ir5:function(h){var j=this.slidesArr[h].caption;if(j&&j.length>0){j.css("display","block");var l=this;var m,fadeEnabled,moveEnabled,effectName,effectsObject,moveEffectProperty,currEffects,newEffectObj,moveOffset,delay,speed,easing,moveProp;var n=j.children();if(this._dw1.length>0){for(var a=this._dw1.length-1;a>-1;a--){clearTimeout(this._dw1.splice(a,1))}}if(this._ev1.length>0){var o;for(var k=this._ev1.length-1;k>-1;k--){o=this._ev1[k];if(o){if(!this._ir){if(o.running){o.captionItem.stop(true,true)}else{o.captionItem.css(o.css)}}}this._ev1.splice(k,1)}}for(var i=0;i<n.length;i++){m=$(n[i]);effectsObject={};fadeEnabled=false;moveEnabled=false;moveEffectProperty="";if(m.attr("data-show-effect")==undefined){currEffects=this.settings.captionShowEffects}else{currEffects=m.attr("data-show-effect").split(" ")}for(var q=0;q<currEffects.length;q++){if(fadeEnabled&&moveEnabled){break}effectName=currEffects[q].toLowerCase();if(!fadeEnabled&&effectName=="fade"){fadeEnabled=true;effectsObject['opacity']=1}else if(moveEnabled){break}else if(effectName=="movetop"){moveEffectProperty="margin-top"}else if(effectName=="moveleft"){moveEffectProperty="margin-left"}else if(effectName=="movebottom"){moveEffectProperty="margin-bottom"}else if(effectName=="moveright"){moveEffectProperty="margin-right"}if(moveEffectProperty!=""){effectsObject['moveProp']=moveEffectProperty;if(!l._ir){effectsObject['moveStartPos']=parseInt(m.css(moveEffectProperty),10)}else{effectsObject['moveStartPos']=0}moveEnabled=true}}moveOffset=parseInt(m.attr("data-move-offset"),10);if(isNaN(moveOffset)){moveOffset=this.settings.captionMoveOffset}delay=parseInt(m.attr("data-delay"),10);if(isNaN(delay)){delay=l.settings.captionShowDelay*i}speed=parseInt(m.attr("data-speed"),10);if(isNaN(speed)){speed=l.settings.captionShowSpeed}easing=m.attr("data-easing");if(!easing){easing=l.settings.captionShowEasing}newEffectObj={};if(moveEnabled){moveProp=effectsObject.moveProp;if(moveProp=="margin-right"){moveProp="margin-left";newEffectObj[moveProp]=effectsObject.moveStartPos+moveOffset}else if(moveProp=="margin-bottom"){moveProp="margin-top";newEffectObj[moveProp]=effectsObject.moveStartPos+moveOffset}else{newEffectObj[moveProp]=effectsObject.moveStartPos-moveOffset}}if(!l._lo&&fadeEnabled){m.css("opacity",0)}if(!l._ir){m.css("visibility","hidden");m.css(newEffectObj);if(moveEnabled){newEffectObj[moveProp]=effectsObject.moveStartPos}if(!l._lo&&fadeEnabled){newEffectObj.opacity=1}}else{var p={};if(moveEnabled){p['-webkit-transition-duration']="0";p['-webkit-transition-property']="none";p["-webkit-transform"]="translate3d("+(isNaN(newEffectObj["margin-left"])?0:(newEffectObj["margin-left"]+"px"))+", "+(isNaN(newEffectObj["margin-top"])?0:(newEffectObj["margin-top"]+"px"))+",0)";delete newEffectObj["margin-left"];delete newEffectObj["margin-top"];newEffectObj["-webkit-transform"]="translate3d(0,0,0)"}newEffectObj.visibility="visible";newEffectObj.opacity=1;if(!l._lo&&fadeEnabled){p["opacity"]=0}p["visibility"]="hidden";m.css(p)}this._ev1.push({captionItem:m,css:newEffectObj,running:false});this._dw1.push(setTimeout((function(a,b,c,d,e,f,g){return function(){l._ev1[e].running=true;if(!l._ir){a.css("visibility","visible").animate(b,c,d,function(){if(l._jq&&f){a.get(0).style.removeAttribute('filter')}delete l._ev1[e]})}else{a.css({'-webkit-transition-duration':(c+"ms"),'-webkit-transition-property':'opacity'+(g?', -webkit-transform':''),'-webkit-transition-timing-function':'ease-out'});a.css(b)}}})(m,newEffectObj,speed,easing,i,fadeEnabled,moveEnabled),delay))}}},_ir4:function(f,g,h){var i=this.settings.imageScaleMode;var j=this.settings.imageAlignCenter;if(j||i=="fill"||i=="fit"){var k=false;function scaleImg(){var d,vRatio,ratio,nWidth,nHeight;var e=new Image();e.onload=function(){var a=this.width;var b=this.height;var c=parseInt(f.css("borderWidth"),10);c=isNaN(c)?0:c;if(i=="fill"||i=="fit"){d=g/a;vRatio=h/b;if(i=="fill"){ratio=d>vRatio?d:vRatio}else if(i=="fit"){ratio=d<vRatio?d:vRatio}else{ratio=1}nWidth=parseInt(a*ratio,10)-c;nHeight=parseInt(b*ratio,10)-c;f.attr({"width":nWidth,"height":nHeight}).css({"width":nWidth,"height":nHeight})}else{nWidth=a-c;nHeight=b-c;f.attr("width",nWidth).attr("height",nHeight)}if(j){f.css({"margin-left":Math.floor((g-nWidth)/2),"margin-top":Math.floor((h-nHeight)/2)})}};e.src=f.attr("src")};f.removeAttr('height').removeAttr('width');if(!this._az4(f.get(0))){$('<img />').load(function(){scaleImg()}).attr('src',f.attr("src"))}else{scaleImg()}}},_az4:function(a){if(a){if(!a.complete){return false}if(typeof a.naturalWidth!="undefined"&&a.naturalWidth==0){return false}}else{return false}return true}};$.fn.royalSlider=function(b){return this.each(function(){var a=new RoyalSlider($(this),b);$(this).data("royalSlider",a)})};$.fn.royalSlider.defaults={lockAxis:true,preloadNearbyImages:true,imageScaleMode:"none",imageAlignCenter:false,keyboardNavEnabled:false,directionNavEnabled:true,directionNavAutoHide:false,hideArrowOnLastSlide:true,slideTransitionType:"move",slideTransitionSpeed:400,slideTransitionEasing:"easeInOutSine",captionAnimationEnabled:true,captionShowEffects:["fade","moveleft"],captionMoveOffset:20,captionShowSpeed:400,captionShowEasing:"easeOutCubic",captionShowDelay:200,controlNavEnabled:true,controlNavThumbs:false,controlNavThumbsNavigation:true,controlNavThumbsSpeed:400,controlNavThumbsEasing:"easeInOutSine",slideshowEnabled:false,slideshowDelay:5000,slideshowPauseOnHover:true,slideshowAutoStart:true,welcomeScreenEnabled:false,welcomeScreenShowSpeed:500,minSlideOffset:20,disableTranslate3d:false,removeCaptionsOpacityInIE8:false,startSlideIndex:0,slideSpacing:0,blockLinksOnDrag:true,nonDraggableClassEnabled:true,dragUsingMouse:true,autoScaleSlider:false,autoScaleSliderWidth:960,autoScaleSliderHeight:400,beforeSlideChange:function(){},afterSlideChange:function(){},beforeLoadStart:function(){},loadingComplete:function(){},allComplete:function(){}};$.fn.royalSlider.settings={}})(jQuery);

/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
jQuery.effects||function(a,b){function c(b){var c;return b&&b.constructor==Array&&b.length==3?b:(c=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b))?[parseInt(c[1],10),parseInt(c[2],10),parseInt(c[3],10)]:(c=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b))?[parseFloat(c[1])*2.55,parseFloat(c[2])*2.55,parseFloat(c[3])*2.55]:(c=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b))?[parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16)]:(c=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b))?[parseInt(c[1]+c[1],16),parseInt(c[2]+c[2],16),parseInt(c[3]+c[3],16)]:(c=/rgba\(0, 0, 0, 0\)/.exec(b))?e.transparent:e[a.trim(b).toLowerCase()]}function d(b,d){var e;do{e=a.curCSS(b,d);if(e!=""&&e!="transparent"||a.nodeName(b,"body"))break;d="backgroundColor"}while(b=b.parentNode);return c(e)}function h(){var a=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,b={},c,d;if(a&&a.length&&a[0]&&a[a[0]]){var e=a.length;while(e--)c=a[e],typeof a[c]=="string"&&(d=c.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),b[d]=a[c])}else for(c in a)typeof a[c]=="string"&&(b[c]=a[c]);return b}function i(b){var c,d;for(c in b)d=b[c],(d==null||a.isFunction(d)||c in g||/scrollbar/.test(c)||!/color/i.test(c)&&isNaN(parseFloat(d)))&&delete b[c];return b}function j(a,b){var c={_:0},d;for(d in b)a[d]!=b[d]&&(c[d]=b[d]);return c}function k(b,c,d,e){typeof b=="object"&&(e=c,d=null,c=b,b=c.effect),a.isFunction(c)&&(e=c,d=null,c={});if(typeof c=="number"||a.fx.speeds[c])e=d,d=c,c={};return a.isFunction(d)&&(e=d,d=null),c=c||{},d=d||c.duration,d=a.fx.off?0:typeof d=="number"?d:d in a.fx.speeds?a.fx.speeds[d]:a.fx.speeds._default,e=e||c.complete,[b,c,d,e]}function l(b){return!b||typeof b=="number"||a.fx.speeds[b]?!0:typeof b=="string"&&!a.effects[b]?!0:!1}a.effects={},a.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(b,e){a.fx.step[e]=function(a){a.colorInit||(a.start=d(a.elem,e),a.end=c(a.end),a.colorInit=!0),a.elem.style[e]="rgb("+Math.max(Math.min(parseInt(a.pos*(a.end[0]-a.start[0])+a.start[0],10),255),0)+","+Math.max(Math.min(parseInt(a.pos*(a.end[1]-a.start[1])+a.start[1],10),255),0)+","+Math.max(Math.min(parseInt(a.pos*(a.end[2]-a.start[2])+a.start[2],10),255),0)+")"}});var e={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},f=["add","remove","toggle"],g={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.effects.animateClass=function(b,c,d,e){return a.isFunction(d)&&(e=d,d=null),this.queue(function(){var g=a(this),k=g.attr("style")||" ",l=i(h.call(this)),m,n=g.attr("class")||"";a.each(f,function(a,c){b[c]&&g[c+"Class"](b[c])}),m=i(h.call(this)),g.attr("class",n),g.animate(j(l,m),{queue:!1,duration:c,easing:d,complete:function(){a.each(f,function(a,c){b[c]&&g[c+"Class"](b[c])}),typeof g.attr("style")=="object"?(g.attr("style").cssText="",g.attr("style").cssText=k):g.attr("style",k),e&&e.apply(this,arguments),a.dequeue(this)}})})},a.fn.extend({_addClass:a.fn.addClass,addClass:function(b,c,d,e){return c?a.effects.animateClass.apply(this,[{add:b},c,d,e]):this._addClass(b)},_removeClass:a.fn.removeClass,removeClass:function(b,c,d,e){return c?a.effects.animateClass.apply(this,[{remove:b},c,d,e]):this._removeClass(b)},_toggleClass:a.fn.toggleClass,toggleClass:function(c,d,e,f,g){return typeof d=="boolean"||d===b?e?a.effects.animateClass.apply(this,[d?{add:c}:{remove:c},e,f,g]):this._toggleClass(c,d):a.effects.animateClass.apply(this,[{toggle:c},d,e,f])},switchClass:function(b,c,d,e,f){return a.effects.animateClass.apply(this,[{add:c,remove:b},d,e,f])}}),a.extend(a.effects,{version:"1.8.21",save:function(a,b){for(var c=0;c<b.length;c++)b[c]!==null&&a.data("ec.storage."+b[c],a[0].style[b[c]])},restore:function(a,b){for(var c=0;c<b.length;c++)b[c]!==null&&a.css(b[c],a.data("ec.storage."+b[c]))},setMode:function(a,b){return b=="toggle"&&(b=a.is(":hidden")?"show":"hide"),b},getBaseline:function(a,b){var c,d;switch(a[0]){case"top":c=0;break;case"middle":c=.5;break;case"bottom":c=1;break;default:c=a[0]/b.height}switch(a[1]){case"left":d=0;break;case"center":d=.5;break;case"right":d=1;break;default:d=a[1]/b.width}return{x:d,y:c}},createWrapper:function(b){if(b.parent().is(".ui-effects-wrapper"))return b.parent();var c={width:b.outerWidth(!0),height:b.outerHeight(!0),"float":b.css("float")},d=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e=document.activeElement;try{e.id}catch(f){e=document.body}return b.wrap(d),(b[0]===e||a.contains(b[0],e))&&a(e).focus(),d=b.parent(),b.css("position")=="static"?(d.css({position:"relative"}),b.css({position:"relative"})):(a.extend(c,{position:b.css("position"),zIndex:b.css("z-index")}),a.each(["top","left","bottom","right"],function(a,d){c[d]=b.css(d),isNaN(parseInt(c[d],10))&&(c[d]="auto")}),b.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),d.css(c).show()},removeWrapper:function(b){var c,d=document.activeElement;return b.parent().is(".ui-effects-wrapper")?(c=b.parent().replaceWith(b),(b[0]===d||a.contains(b[0],d))&&a(d).focus(),c):b},setTransition:function(b,c,d,e){return e=e||{},a.each(c,function(a,c){var f=b.cssUnit(c);f[0]>0&&(e[c]=f[0]*d+f[1])}),e}}),a.fn.extend({effect:function(b,c,d,e){var f=k.apply(this,arguments),g={options:f[1],duration:f[2],callback:f[3]},h=g.options.mode,i=a.effects[b];return a.fx.off||!i?h?this[h](g.duration,g.callback):this.each(function(){g.callback&&g.callback.call(this)}):i.call(this,g)},_show:a.fn.show,show:function(a){if(l(a))return this._show.apply(this,arguments);var b=k.apply(this,arguments);return b[1].mode="show",this.effect.apply(this,b)},_hide:a.fn.hide,hide:function(a){if(l(a))return this._hide.apply(this,arguments);var b=k.apply(this,arguments);return b[1].mode="hide",this.effect.apply(this,b)},__toggle:a.fn.toggle,toggle:function(b){if(l(b)||typeof b=="boolean"||a.isFunction(b))return this.__toggle.apply(this,arguments);var c=k.apply(this,arguments);return c[1].mode="toggle",this.effect.apply(this,c)},cssUnit:function(b){var c=this.css(b),d=[];return a.each(["em","px","%","pt"],function(a,b){c.indexOf(b)>0&&(d=[parseFloat(c),b])}),d}}),a.easing.jswing=a.easing.swing,a.extend(a.easing,{def:"easeOutQuad",swing:function(b,c,d,e,f){return a.easing[a.easing.def](b,c,d,e,f)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return b==0?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;g||(g=e*.3*1.5);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return b<1?-0.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,c,d,e,f,g){return g==b&&(g=1.70158),e*(c/=f)*c*((g+1)*c-g)+d},easeOutBack:function(a,c,d,e,f,g){return g==b&&(g=1.70158),e*((c=c/f-1)*c*((g+1)*c+g)+1)+d},easeInOutBack:function(a,c,d,e,f,g){return g==b&&(g=1.70158),(c/=f/2)<1?e/2*c*c*(((g*=1.525)+1)*c-g)+d:e/2*((c-=2)*c*(((g*=1.525)+1)*c+g)+2)+d},easeInBounce:function(b,c,d,e,f){return e-a.easing.easeOutBounce(b,f-c,0,e,f)+d},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:b<2/2.75?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(b,c,d,e,f){return c<f/2?a.easing.easeInBounce(b,c*2,0,e,f)*.5+d:a.easing.easeOutBounce(b,c*2-f,0,e,f)*.5+e*.5+d}})}(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.shake.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.shake=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"effect"),f=b.options.direction||"left",g=b.options.distance||20,h=b.options.times||3,i=b.duration||b.options.duration||140;a.effects.save(c,d),c.show(),a.effects.createWrapper(c);var j=f=="up"||f=="down"?"top":"left",k=f=="up"||f=="left"?"pos":"neg",l={},m={},n={};l[j]=(k=="pos"?"-=":"+=")+g,m[j]=(k=="pos"?"+=":"-=")+g*2,n[j]=(k=="pos"?"-=":"+=")+g*2,c.animate(l,i,b.options.easing);for(var p=1;p<h;p++)c.animate(m,i,b.options.easing).animate(n,i,b.options.easing);c.animate(m,i,b.options.easing).animate(l,i/2,b.options.easing,function(){a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments)}),c.queue("fx",function(){c.dequeue()}),c.dequeue()})}})(jQuery);;