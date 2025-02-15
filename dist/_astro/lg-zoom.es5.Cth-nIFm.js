/*!
 * lightgallery | 2.8.2 | November 28th 2024
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var y=function(){return y=Object.assign||function(e){for(var t,o=1,s=arguments.length;o<s;o++){t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},y.apply(this,arguments)},I={scale:1,zoom:!0,infiniteZoom:!0,actualSize:!0,showZoomInOutIcons:!1,actualSizeIcons:{zoomIn:"lg-zoom-in",zoomOut:"lg-zoom-out"},enableZoomAfter:300,zoomPluginStrings:{zoomIn:"Zoom in",zoomOut:"Zoom out",viewActualSize:"View actual size"}},d={containerResize:"lgContainerResize",beforeOpen:"lgBeforeOpen",afterOpen:"lgAfterOpen",slideItemLoad:"lgSlideItemLoad",afterSlide:"lgAfterSlide",rotateLeft:"lgRotateLeft",rotateRight:"lgRotateRight",flipHorizontal:"lgFlipHorizontal",flipVertical:"lgFlipVertical"},S=500,x=function(){function n(e,t){return this.core=e,this.$LG=t,this.settings=y(y({},I),this.core.settings),this}return n.prototype.buildTemplates=function(){var e=this.settings.showZoomInOutIcons?'<button id="'+this.core.getIdName("lg-zoom-in")+'" type="button" aria-label="'+this.settings.zoomPluginStrings.zoomIn+'" class="lg-zoom-in lg-icon"></button><button id="'+this.core.getIdName("lg-zoom-out")+'" type="button" aria-label="'+this.settings.zoomPluginStrings.zoomOut+'" class="lg-zoom-out lg-icon"></button>':"";this.settings.actualSize&&(e+='<button id="'+this.core.getIdName("lg-actual-size")+'" type="button" aria-label="'+this.settings.zoomPluginStrings.viewActualSize+'" class="'+this.settings.actualSizeIcons.zoomIn+' lg-icon"></button>'),this.core.outer.addClass("lg-use-transition-for-zoom"),this.core.$toolbar.first().append(e)},n.prototype.enableZoom=function(e){var t=this,o=this.settings.enableZoomAfter+e.detail.delay;this.$LG("body").first().hasClass("lg-from-hash")&&e.detail.delay?o=0:this.$LG("body").first().removeClass("lg-from-hash"),this.zoomableTimeout=setTimeout(function(){t.isImageSlide(t.core.index)&&(t.core.getSlideItem(e.detail.index).addClass("lg-zoomable"),e.detail.index===t.core.index&&t.setZoomEssentials())},o+30)},n.prototype.enableZoomOnSlideItemLoad=function(){this.core.LGel.on(d.slideItemLoad+".zoom",this.enableZoom.bind(this))},n.prototype.getDragCords=function(e){return{x:e.pageX,y:e.pageY}},n.prototype.getSwipeCords=function(e){var t=e.touches[0].pageX,o=e.touches[0].pageY;return{x:t,y:o}},n.prototype.getDragAllowedAxises=function(e,t){if(!this.containerRect)return{allowX:!1,allowY:!1};var o=this.core.getSlideItem(this.core.index).find(".lg-image").first().get(),s=0,r=0,i=o.getBoundingClientRect();e?(s=o.offsetHeight*e,r=o.offsetWidth*e):t?(s=i.height+t*i.height,r=i.width+t*i.width):(s=i.height,r=i.width);var l=s>this.containerRect.height,m=r>this.containerRect.width;return{allowX:m,allowY:l}},n.prototype.setZoomEssentials=function(){this.containerRect=this.core.$content.get().getBoundingClientRect()},n.prototype.zoomImage=function(e,t,o,s){if(!(Math.abs(t)<=0)){var r=this.containerRect.width/2+this.containerRect.left,i=this.containerRect.height/2+this.containerRect.top+this.scrollTop,l,m;e===1&&(this.positionChanged=!1);var h=this.getDragAllowedAxises(0,t),u=h.allowY,g=h.allowX;this.positionChanged&&(l=this.left/(this.scale-t),m=this.top/(this.scale-t),this.pageX=r-l,this.pageY=i-m,this.positionChanged=!1);var a=this.getPossibleSwipeDragCords(t),c,f,v=r-this.pageX,z=i-this.pageY;if(e-t>1){var p=(e-t)/Math.abs(t);v=(t<0?-v:v)+this.left*(p+(t<0?-1:1)),z=(t<0?-z:z)+this.top*(p+(t<0?-1:1)),c=v/p,f=z/p}else{var p=(e-t)*t;c=v*p,f=z*p}o&&(g?this.isBeyondPossibleLeft(c,a.minX)?c=a.minX:this.isBeyondPossibleRight(c,a.maxX)&&(c=a.maxX):e>1&&(c<a.minX?c=a.minX:c>a.maxX&&(c=a.maxX)),u?this.isBeyondPossibleTop(f,a.minY)?f=a.minY:this.isBeyondPossibleBottom(f,a.maxY)&&(f=a.maxY):e>1&&(f<a.minY?f=a.minY:f>a.maxY&&(f=a.maxY))),this.setZoomStyles({x:c,y:f,scale:e}),this.left=c,this.top=f,s&&this.setZoomImageSize()}},n.prototype.resetImageTranslate=function(e){if(this.isImageSlide(e)){var t=this.core.getSlideItem(e).find(".lg-image").first();this.imageReset=!1,t.removeClass("reset-transition reset-transition-y reset-transition-x"),this.core.outer.removeClass("lg-actual-size"),t.css("width","auto").css("height","auto"),setTimeout(function(){t.removeClass("no-transition")},10)}},n.prototype.setZoomImageSize=function(){var e=this,t=this.core.getSlideItem(this.core.index).find(".lg-image").first();setTimeout(function(){var o=e.getCurrentImageActualSizeScale();e.scale>=o&&(t.addClass("no-transition"),e.imageReset=!0)},S),setTimeout(function(){var o=e.getCurrentImageActualSizeScale();if(e.scale>=o){var s=e.getDragAllowedAxises(e.scale);t.css("width",t.get().naturalWidth+"px").css("height",t.get().naturalHeight+"px"),e.core.outer.addClass("lg-actual-size"),s.allowX&&s.allowY?t.addClass("reset-transition"):s.allowX&&!s.allowY?t.addClass("reset-transition-x"):!s.allowX&&s.allowY&&t.addClass("reset-transition-y")}},S+50)},n.prototype.setZoomStyles=function(e){var t=this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first(),o=this.core.getSlideItem(this.core.index).find(".lg-image").first(),s=this.core.outer.find(".lg-current .lg-dummy-img").first();this.scale=e.scale,o.css("transform","scale3d("+e.scale+", "+e.scale+", 1)"),s.css("transform","scale3d("+e.scale+", "+e.scale+", 1)");var r="translate3d("+e.x+"px, "+e.y+"px, 0)";t.css("transform",r)},n.prototype.setActualSize=function(e,t){var o=this;if(!this.zoomInProgress){this.zoomInProgress=!0;var s=this.core.galleryItems[this.core.index];this.resetImageTranslate(e),setTimeout(function(){if(!(!s.src||o.core.outer.hasClass("lg-first-slide-loading"))){var r=o.getCurrentImageActualSizeScale(),i=o.scale;o.core.outer.hasClass("lg-zoomed")?o.scale=1:o.scale=o.getScale(r),o.setPageCords(t),o.beginZoom(o.scale),o.zoomImage(o.scale,o.scale-i,!0,!0)}},50),setTimeout(function(){o.core.outer.removeClass("lg-grabbing").addClass("lg-grab")},60),setTimeout(function(){o.zoomInProgress=!1},S+110)}},n.prototype.getNaturalWidth=function(e){var t=this.core.getSlideItem(e).find(".lg-image").first(),o=this.core.galleryItems[e].width;return o?parseFloat(o):t.get().naturalWidth},n.prototype.getActualSizeScale=function(e,t){var o,s;return e>=t?(o=e/t,s=o||2):s=1,s},n.prototype.getCurrentImageActualSizeScale=function(){var e=this.core.getSlideItem(this.core.index).find(".lg-image").first(),t=e.get().offsetWidth,o=this.getNaturalWidth(this.core.index)||t;return this.getActualSizeScale(o,t)},n.prototype.getPageCords=function(e){var t={};if(e)t.x=e.pageX||e.touches[0].pageX,t.y=e.pageY||e.touches[0].pageY;else{var o=this.core.$content.get().getBoundingClientRect();t.x=o.width/2+o.left,t.y=o.height/2+this.scrollTop+o.top}return t},n.prototype.setPageCords=function(e){var t=this.getPageCords(e);this.pageX=t.x,this.pageY=t.y},n.prototype.manageActualPixelClassNames=function(){var e=this.core.getElementById("lg-actual-size");e.removeClass(this.settings.actualSizeIcons.zoomIn).addClass(this.settings.actualSizeIcons.zoomOut)},n.prototype.beginZoom=function(e){return this.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging"),e>1?(this.core.outer.addClass("lg-zoomed"),this.manageActualPixelClassNames()):this.resetZoom(),e>1},n.prototype.getScale=function(e){var t=this.getCurrentImageActualSizeScale();return e<1?e=1:e>t&&(e=t),e},n.prototype.init=function(){var e=this;if(this.settings.zoom){this.buildTemplates(),this.enableZoomOnSlideItemLoad();var t=null;this.core.outer.on("dblclick.lg",function(o){e.$LG(o.target).hasClass("lg-image")&&e.setActualSize(e.core.index,o)}),this.core.outer.on("touchstart.lg",function(o){var s=e.$LG(o.target);o.touches.length===1&&s.hasClass("lg-image")&&(t?(clearTimeout(t),t=null,o.preventDefault(),e.setActualSize(e.core.index,o)):t=setTimeout(function(){t=null},300))}),this.core.LGel.on(d.containerResize+".zoom "+d.rotateRight+".zoom "+d.rotateLeft+".zoom "+d.flipHorizontal+".zoom "+d.flipVertical+".zoom",function(){if(!(!e.core.lgOpened||!e.isImageSlide(e.core.index)||e.core.touchAction)){var o=e.core.getSlideItem(e.core.index).find(".lg-img-wrap").first();e.top=0,e.left=0,e.setZoomEssentials(),e.setZoomSwipeStyles(o,{x:0,y:0}),e.positionChanged=!0}}),this.$LG(window).on("scroll.lg.zoom.global"+this.core.lgId,function(){e.core.lgOpened&&(e.scrollTop=e.$LG(window).scrollTop())}),this.core.getElementById("lg-zoom-out").on("click.lg",function(){if(e.isImageSlide(e.core.index)){var o=0;e.imageReset&&(e.resetImageTranslate(e.core.index),o=50),setTimeout(function(){var s=e.scale-e.settings.scale;s<1&&(s=1),e.beginZoom(s),e.zoomImage(s,-e.settings.scale,!0,!e.settings.infiniteZoom)},o)}}),this.core.getElementById("lg-zoom-in").on("click.lg",function(){e.zoomIn()}),this.core.getElementById("lg-actual-size").on("click.lg",function(){e.setActualSize(e.core.index)}),this.core.LGel.on(d.beforeOpen+".zoom",function(){e.core.outer.find(".lg-item").removeClass("lg-zoomable")}),this.core.LGel.on(d.afterOpen+".zoom",function(){e.scrollTop=e.$LG(window).scrollTop(),e.pageX=e.core.outer.width()/2,e.pageY=e.core.outer.height()/2+e.scrollTop,e.scale=1}),this.core.LGel.on(d.afterSlide+".zoom",function(o){var s=o.detail.prevIndex;e.scale=1,e.positionChanged=!1,e.zoomInProgress=!1,e.resetZoom(s),e.resetImageTranslate(s),e.isImageSlide(e.core.index)&&e.setZoomEssentials()}),this.zoomDrag(),this.pinchZoom(),this.zoomSwipe(),this.zoomableTimeout=!1,this.positionChanged=!1,this.zoomInProgress=!1}},n.prototype.zoomIn=function(){if(this.isImageSlide(this.core.index)){var e=this.scale+this.settings.scale;this.settings.infiniteZoom||(e=this.getScale(e)),this.beginZoom(e),this.zoomImage(e,Math.min(this.settings.scale,e-this.scale),!0,!this.settings.infiniteZoom)}},n.prototype.resetZoom=function(e){this.core.outer.removeClass("lg-zoomed lg-zoom-drag-transition");var t=this.core.getElementById("lg-actual-size"),o=this.core.getSlideItem(e!==void 0?e:this.core.index);t.removeClass(this.settings.actualSizeIcons.zoomOut).addClass(this.settings.actualSizeIcons.zoomIn),o.find(".lg-img-wrap").first().removeAttr("style"),o.find(".lg-image").first().removeAttr("style"),this.scale=1,this.left=0,this.top=0,this.setPageCords()},n.prototype.getTouchDistance=function(e){return Math.sqrt((e.touches[0].pageX-e.touches[1].pageX)*(e.touches[0].pageX-e.touches[1].pageX)+(e.touches[0].pageY-e.touches[1].pageY)*(e.touches[0].pageY-e.touches[1].pageY))},n.prototype.pinchZoom=function(){var e=this,t=0,o=!1,s=1,r=0,i=this.core.getSlideItem(this.core.index);this.core.outer.on("touchstart.lg",function(l){if(i=e.core.getSlideItem(e.core.index),!!e.isImageSlide(e.core.index)&&l.touches.length===2){if(l.preventDefault(),e.core.outer.hasClass("lg-first-slide-loading"))return;s=e.scale||1,e.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging"),e.setPageCords(l),e.resetImageTranslate(e.core.index),e.core.touchAction="pinch",t=e.getTouchDistance(l)}}),this.core.$inner.on("touchmove.lg",function(l){if(l.touches.length===2&&e.core.touchAction==="pinch"&&(e.$LG(l.target).hasClass("lg-item")||i.get().contains(l.target))){l.preventDefault();var m=e.getTouchDistance(l),h=t-m;if(!o&&Math.abs(h)>5&&(o=!0),o){r=e.scale;var u=Math.max(1,s+-h*.02);e.scale=Math.round((u+Number.EPSILON)*100)/100;var g=e.scale-r;e.zoomImage(e.scale,Math.round((g+Number.EPSILON)*100)/100,!1,!1)}}}),this.core.$inner.on("touchend.lg",function(l){if(e.core.touchAction==="pinch"&&(e.$LG(l.target).hasClass("lg-item")||i.get().contains(l.target))){if(o=!1,t=0,e.scale<=1)e.resetZoom();else{var m=e.getCurrentImageActualSizeScale();if(e.scale>=m){var h=m-e.scale;h===0&&(h=.01),e.zoomImage(m,h,!1,!0)}e.manageActualPixelClassNames(),e.core.outer.addClass("lg-zoomed")}e.core.touchAction=void 0}})},n.prototype.touchendZoom=function(e,t,o,s,r){var i=t.x-e.x,l=t.y-e.y,m=Math.abs(i)/r+1,h=Math.abs(l)/r+1;m>2&&(m+=1),h>2&&(h+=1),i=i*m,l=l*h;var u=this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first(),g={};g.x=this.left+i,g.y=this.top+l;var a=this.getPossibleSwipeDragCords();(Math.abs(i)>15||Math.abs(l)>15)&&(s&&(this.isBeyondPossibleTop(g.y,a.minY)?g.y=a.minY:this.isBeyondPossibleBottom(g.y,a.maxY)&&(g.y=a.maxY)),o&&(this.isBeyondPossibleLeft(g.x,a.minX)?g.x=a.minX:this.isBeyondPossibleRight(g.x,a.maxX)&&(g.x=a.maxX)),s?this.top=g.y:g.y=this.top,o?this.left=g.x:g.x=this.left,this.setZoomSwipeStyles(u,g),this.positionChanged=!0)},n.prototype.getZoomSwipeCords=function(e,t,o,s,r){var i={};if(s){if(i.y=this.top+(t.y-e.y),this.isBeyondPossibleTop(i.y,r.minY)){var l=r.minY-i.y;i.y=r.minY-l/6}else if(this.isBeyondPossibleBottom(i.y,r.maxY)){var m=i.y-r.maxY;i.y=r.maxY+m/6}}else i.y=this.top;if(o){if(i.x=this.left+(t.x-e.x),this.isBeyondPossibleLeft(i.x,r.minX)){var h=r.minX-i.x;i.x=r.minX-h/6}else if(this.isBeyondPossibleRight(i.x,r.maxX)){var u=i.x-r.maxX;i.x=r.maxX+u/6}}else i.x=this.left;return i},n.prototype.isBeyondPossibleLeft=function(e,t){return e>=t},n.prototype.isBeyondPossibleRight=function(e,t){return e<=t},n.prototype.isBeyondPossibleTop=function(e,t){return e>=t},n.prototype.isBeyondPossibleBottom=function(e,t){return e<=t},n.prototype.isImageSlide=function(e){var t=this.core.galleryItems[e];return this.core.getSlideType(t)==="image"},n.prototype.getPossibleSwipeDragCords=function(e){var t=this.core.getSlideItem(this.core.index).find(".lg-image").first(),o=this.core.mediaContainerPosition.bottom,s=t.get().getBoundingClientRect(),r=s.height,i=s.width;e&&(r=r+e*r,i=i+e*i);var l=(r-this.containerRect.height)/2,m=(this.containerRect.height-r)/2+o,h=(i-this.containerRect.width)/2,u=(this.containerRect.width-i)/2,g={minY:l,maxY:m,minX:h,maxX:u};return g},n.prototype.setZoomSwipeStyles=function(e,t){e.css("transform","translate3d("+t.x+"px, "+t.y+"px, 0)")},n.prototype.zoomSwipe=function(){var e=this,t={},o={},s=!1,r=!1,i=!1,l=new Date,m=new Date,h,u,g=this.core.getSlideItem(this.core.index);this.core.$inner.on("touchstart.lg",function(a){if(e.isImageSlide(e.core.index)&&(g=e.core.getSlideItem(e.core.index),(e.$LG(a.target).hasClass("lg-item")||g.get().contains(a.target))&&a.touches.length===1&&e.core.outer.hasClass("lg-zoomed"))){a.preventDefault(),l=new Date,e.core.touchAction="zoomSwipe",u=e.core.getSlideItem(e.core.index).find(".lg-img-wrap").first();var c=e.getDragAllowedAxises(0);i=c.allowY,r=c.allowX,(r||i)&&(t=e.getSwipeCords(a)),h=e.getPossibleSwipeDragCords(),e.core.outer.addClass("lg-zoom-dragging lg-zoom-drag-transition")}}),this.core.$inner.on("touchmove.lg",function(a){if(a.touches.length===1&&e.core.touchAction==="zoomSwipe"&&(e.$LG(a.target).hasClass("lg-item")||g.get().contains(a.target))){a.preventDefault(),e.core.touchAction="zoomSwipe",o=e.getSwipeCords(a);var c=e.getZoomSwipeCords(t,o,r,i,h);(Math.abs(o.x-t.x)>15||Math.abs(o.y-t.y)>15)&&(s=!0,e.setZoomSwipeStyles(u,c))}}),this.core.$inner.on("touchend.lg",function(a){if(e.core.touchAction==="zoomSwipe"&&(e.$LG(a.target).hasClass("lg-item")||g.get().contains(a.target))){if(a.preventDefault(),e.core.touchAction=void 0,e.core.outer.removeClass("lg-zoom-dragging"),!s)return;s=!1,m=new Date;var c=m.valueOf()-l.valueOf();e.touchendZoom(t,o,r,i,c)}})},n.prototype.zoomDrag=function(){var e=this,t={},o={},s=!1,r=!1,i=!1,l=!1,m,h,u,g;this.core.outer.on("mousedown.lg.zoom",function(a){if(e.isImageSlide(e.core.index)){var c=e.core.getSlideItem(e.core.index);if(e.$LG(a.target).hasClass("lg-item")||c.get().contains(a.target)){m=new Date,g=e.core.getSlideItem(e.core.index).find(".lg-img-wrap").first();var f=e.getDragAllowedAxises(0);l=f.allowY,i=f.allowX,e.core.outer.hasClass("lg-zoomed")&&e.$LG(a.target).hasClass("lg-object")&&(i||l)&&(a.preventDefault(),t=e.getDragCords(a),u=e.getPossibleSwipeDragCords(),s=!0,e.core.outer.removeClass("lg-grab").addClass("lg-grabbing lg-zoom-drag-transition lg-zoom-dragging"))}}}),this.$LG(window).on("mousemove.lg.zoom.global"+this.core.lgId,function(a){if(s){r=!0,o=e.getDragCords(a);var c=e.getZoomSwipeCords(t,o,i,l,u);e.setZoomSwipeStyles(g,c)}}),this.$LG(window).on("mouseup.lg.zoom.global"+this.core.lgId,function(a){if(s){if(h=new Date,s=!1,e.core.outer.removeClass("lg-zoom-dragging"),r&&(t.x!==o.x||t.y!==o.y)){o=e.getDragCords(a);var c=h.valueOf()-m.valueOf();e.touchendZoom(t,o,i,l,c)}r=!1}e.core.outer.removeClass("lg-grabbing").addClass("lg-grab")})},n.prototype.closeGallery=function(){this.resetZoom(),this.zoomInProgress=!1},n.prototype.destroy=function(){this.$LG(window).off(".lg.zoom.global"+this.core.lgId),this.core.LGel.off(".lg.zoom"),this.core.LGel.off(".zoom"),clearTimeout(this.zoomableTimeout),this.zoomableTimeout=!1},n}();export{x as default};
