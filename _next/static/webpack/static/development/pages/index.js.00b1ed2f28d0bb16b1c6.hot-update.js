webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./features/about/atoms/AboutText/aboutText.css":
/*!******************************************************!*\
  !*** ./features/about/atoms/AboutText/aboutText.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"aboutText":"aboutText__aboutText--2mPgc"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1552296959010");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=index.js.00b1ed2f28d0bb16b1c6.hot-update.js.map