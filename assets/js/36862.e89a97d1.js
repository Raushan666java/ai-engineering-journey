"use strict";
(self["webpackChunksite"] = self["webpackChunksite"] || []).push([["36862"], {
82607(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  K: () => (__name)
});
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });




},
88045(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (layouts_default)
});
/* import */ var _chunks_mermaid_layout_elk_core_chunk_ZW26E7AF_mjs__rspack_import_0 = __webpack_require__(82607);


// src/layouts.ts
var loader = /* @__PURE__ */ (0,_chunks_mermaid_layout_elk_core_chunk_ZW26E7AF_mjs__rspack_import_0/* .__name */.K)(async () => await __webpack_require__.e(/* import() */ "13477").then(__webpack_require__.bind(__webpack_require__, 50596)), "loader");
var algos = ["elk.stress", "elk.force", "elk.mrtree", "elk.sporeOverlap"];
var layouts = [
  {
    name: "elk",
    loader,
    algorithm: "elk.layered"
  },
  ...algos.map((algo) => ({
    name: algo,
    loader,
    algorithm: algo
  }))
];
var layouts_default = layouts;



},

}]);