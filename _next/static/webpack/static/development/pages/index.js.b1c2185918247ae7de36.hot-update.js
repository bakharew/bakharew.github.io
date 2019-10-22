webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./features/footer/organisms/Footer/footer.css":
/*!*****************************************************!*\
  !*** ./features/footer/organisms/Footer/footer.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"wrapper":"footer__wrapper--2Cgqb","footerImage":"footer__footerImage--3I-KL","copyright":"footer__copyright--3DiRZ","visible":"footer__visible--3CmCQ","inVisible":"footer__inVisible--1PEA0"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1552309772829");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=index.js.b1c2185918247ae7de36.hot-update.js.map