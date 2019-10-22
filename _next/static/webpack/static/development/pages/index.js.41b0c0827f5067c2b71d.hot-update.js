webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./features/slider/index.css":
/*!***********************************!*\
  !*** ./features/slider/index.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"wrapper":"index__wrapper--2J9vw","navButton":"index__navButton--Y6g1H","outerWrapper":"index__outerWrapper--2Sjmx"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1552299005265");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=index.js.41b0c0827f5067c2b71d.hot-update.js.map