webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./features/contacts/Contacts.css":
/*!****************************************!*\
  !*** ./features/contacts/Contacts.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"content":"Contacts__content--1HKhM","textBlocks":"Contacts__textBlocks--3DnaJ","phoneLink":"Contacts__phoneLink--g9oc7","descriptorName":"Contacts__descriptorName--3Rp-j","contactsStyle":"Contacts__contactsStyle--aNTrg"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1552296336682");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=index.js.6ddaec91f08c9b2554a1.hot-update.js.map