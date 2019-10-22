webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./ui/molecules/TextBlock/textBlock.css":
/*!**********************************************!*\
  !*** ./ui/molecules/TextBlock/textBlock.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"textBlock":"textBlock__textBlock--2UMqR","textBlockHeader":"textBlock__textBlockHeader--sisqq","textBlockContent":"textBlock__textBlockContent--nX4bL","icons":"textBlock__icons--3ujGq"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1552298652738");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=index.js.4c7aeffe77a7cae2594e.hot-update.js.map