webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./features/contacts/Contacts.css":
/*!****************************************!*\
  !*** ./features/contacts/Contacts.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"content":"Contacts__content--1HKhM","textBlocks":"Contacts__textBlocks--3DnaJ","phoneLink":"Contacts__phoneLink--g9oc7","descriptorName":"Contacts__descriptorName--3Rp-j","contactsStyle":"Contacts__contactsStyle--aNTrg","mailto":"Contacts__mailto--1p1Pp"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1552309532969");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=index.js.ce1d2156564150bb8572.hot-update.js.map