webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./features/descriptor/organisms/descriptor/descriptor.css":
/*!*****************************************************************!*\
  !*** ./features/descriptor/organisms/descriptor/descriptor.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"descriptor":"descriptor__descriptor--HBQmc","type":"descriptor__type--3diX_","name":"descriptor__name--2X0jb","clients_descriptor":"descriptor__clients_descriptor--YnKvn","articleIconBlock":"descriptor__articleIconBlock--xN8Fs","articleIconLink":"descriptor__articleIconLink--3zDph"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1552302079858");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=index.js.a0da39ebf26c60d6d5d0.hot-update.js.map