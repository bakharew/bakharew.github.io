webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./features/clients/molecules/ClientsList/clientsList.css":
/*!****************************************************************!*\
  !*** ./features/clients/molecules/ClientsList/clientsList.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"clientsList":"clientsList__clientsList--3DjXg","client":"clientsList__client--3m7Ef"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1552296992384");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=index.js.f593381fdcb802d355a0.hot-update.js.map