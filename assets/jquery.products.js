/**
 *
 * Updated by @James Cruz
 * 09/15/2017
 *
 */

/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};

/**
 * Module to show Recently Viewed Products
 *
 * Copyright (c) 2014 Caroline Schnapp (11heavens.com)
 * Dual licensed under the MIT and GPL licenses:	
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

 
 /*
* jquery-match-height 0.7.2 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,n=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),i=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-n(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(i-a))<=o?r[r.length-1]=s.add(e):r.push(e),i=a}),r},i=function(e){var o={
byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=i(e);if(o.remove){var n=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(n)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.2",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
r._afterUpdate=null,r._rows=a,r._parse=n,r._parseOptions=i,r._apply=function(e,o){var s=i(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),u=h.parents().filter(":hidden");return u.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),u.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),i=0;if(s.target)i=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),n=e.css("display");"inline-block"!==n&&"flex"!==n&&"inline-flex"!==n&&(n="block");var a={
display:n};a[s.property]="",e.css(a),e.outerHeight(!1)>i&&(i=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=n(e.css("border-top-width"))+n(e.css("border-bottom-width")),o+=n(e.css("padding-top"))+n(e.css("padding-bottom"))),e.css(s.property,i-o+"px"))})}),u.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),n=o.attr("data-mh")||o.attr("data-match-height");n in e?e[n]=e[n].add(o):e[n]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(n,a){if(a&&"resize"===a.type){var i=t(window).width();if(i===e)return;e=i;
}n?o===-1&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi);var h=t.fn.on?"on":"bind";t(window)[h]("load",function(t){r._update(!1,t)}),t(window)[h]("resize orientationchange",function(t){r._update(!0,t)})});




Shopify.Products = (function() {

  var config = { 
    howManyToShow: 4,
    howManyToStoreInMemory: 10, 
    mainWrapperId: 'recently-viewed-products-wrapper', // Main Section Wrapper
    wrapperId: 'recently-viewed-products',  // Product Wrapper
    templateId: 'recently-viewed-product-template',
    onComplete: null
  };

  var productHandleQueue = [];
  var wrapper = null;
  var template = null;
  var shown = 0;

  var cookie = {
    configuration: {
      expires: 90,
      path: '/',
      domain: window.location.hostname
    },
    name: 'shopify_recently_viewed',
    write: function(recentlyViewed) {
      jQuery.cookie(this.name, recentlyViewed.join(' '), this.configuration);
    },
    read: function() {
      var recentlyViewed = [];
      var cookieValue = jQuery.cookie(this.name);
      if (typeof cookieValue !='undefined' && cookieValue !== null) {
        recentlyViewed = cookieValue.split(' ');
      }
      return recentlyViewed;        
    },
    destroy: function() {
      jQuery.cookie(this.name, null, this.configuration);
    },
    remove: function(productHandle) {
      var recentlyViewed = this.read();
      var position = jQuery.inArray(productHandle, recentlyViewed);
      if (position !== -1) {
        recentlyViewed.splice(position, 1);
        this.write(recentlyViewed);
      }       
    }
  };

  var finalize = function() {
    mainWrapper.show();

    // Assume you have Jquery MatchHeight Plugin.
    $('.grid-product-title').matchHeight();
    
    // If we have a callback.
    if (config.onComplete) {
      try { config.onComplete() } catch (error) { }
    }

  };

  var moveAlong = function() {
    if (productHandleQueue.length && shown < config.howManyToShow) {
      jQuery.ajax({
        dataType: 'json',
        url: '/products/' + productHandleQueue[0] + '.js',
        cache: false,
        success: function(product) {
          template.tmpl(product).appendTo(wrapper); 
          productHandleQueue.shift();
          shown++;
          $('.grid-product-title').matchHeight();
          moveAlong();
        },
        error: function() {
          cookie.remove(productHandleQueue[0]);
          productHandleQueue.shift();
          moveAlong();
        }
      });
    }
    else {
      finalize();
    }

  };

  return {

    resizeImage: function(src, size) {
      if (size == null) {
        return src;
      }
      
      if (src == null) {
        return 'https://cdn.shopify.com/s/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_large.gif';
      }

      if (size == 'master') {
        return src.replace(/http(s)?:/, "");
      }

      var match  = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?/i);

      if (match != null) {
        var prefix = src.split(match[0]);
        var suffix = match[0];

        return (prefix[0] + "_" + size + suffix).replace(/http(s)?:/, "")
      } else {
        return null;
      }
    },

    showRecentlyViewed: function(params) {

      var params = params || {};

      // Update defaults.
      jQuery.extend(config, params);

      // Read cookie.
      productHandleQueue = cookie.read();

      // Template and element where to insert.
      mainWrapper = jQuery('#' + config.mainWrapperId);
      template = jQuery('#' + config.templateId);
      wrapper = jQuery('#' + config.wrapperId);
      
      
      // How many products to show.
      config.howManyToShow = Math.min(productHandleQueue.length, config.howManyToShow);

      // If we have any to show.
      if (config.howManyToShow && template.length && wrapper.length) {
        // Getting each product with an Ajax call and rendering it on the page.
        moveAlong();    
      }

    },

    getConfig: function() {
      return config;
    },

    clearList: function() {
      cookie.destroy();      
    },

    recordRecentlyViewed: function(params) {

      var params = params || {};

      // Update defaults.
      jQuery.extend(config, params);

      // Read cookie.
      var recentlyViewed = cookie.read();

      // If we are on a product page.
      if (window.location.pathname.indexOf('/products/') !== -1) {

        // What is the product handle on this page.
        var productHandle = window.location.pathname.match(/\/products\/([a-z0-9\-]+)/)[1];
        // In what position is that product in memory.
        var position = jQuery.inArray(productHandle, recentlyViewed);
        // If not in memory.
        if (position === -1) {
          // Add product at the start of the list.
          recentlyViewed.unshift(productHandle);
          // Only keep what we need.
          recentlyViewed = recentlyViewed.splice(0, config.howManyToStoreInMemory);
        }
        else {
          // Remove the product and place it at start of list.
          recentlyViewed.splice(position, 1);
          recentlyViewed.unshift(productHandle);              
        }

        // Update cookie.
        cookie.write(recentlyViewed);

      }

    }

  };

})();