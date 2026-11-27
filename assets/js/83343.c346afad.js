"use strict";
(self["webpackChunksite"] = self["webpackChunksite"] || []).push([["83343"], {
4754(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  diagram: () => (diagram)
});
/* import */ var _chunk_VAUOI2AC_mjs__rspack_import_0 = __webpack_require__(37851);
/* import */ var _chunk_WYO6CB5R_mjs__rspack_import_1 = __webpack_require__(56149);
/* import */ var _chunk_X3CZISLH_mjs__rspack_import_2 = __webpack_require__(31293);
/* import */ var _chunk_Y2CYZVJY_mjs__rspack_import_3 = __webpack_require__(86827);
/* import */ var _mermaid_js_parser__rspack_import_4 = __webpack_require__(78731);





// src/diagrams/info/infoParser.ts

var parser = {
  parse: /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_3/* .__name */.K)(async (input) => {
    const ast = await (0,_mermaid_js_parser__rspack_import_4/* .parse */.qg)("info", input);
    _chunk_X3CZISLH_mjs__rspack_import_2/* .log.debug */.R.debug(ast);
  }, "parse")
};

// src/diagrams/info/infoDb.ts
var DEFAULT_INFO_DB = {
  version: "11.16.0" + ( true ? "" : 0)
};
var getVersion = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_3/* .__name */.K)(() => DEFAULT_INFO_DB.version, "getVersion");
var db = {
  getVersion
};

// src/diagrams/info/infoRenderer.ts
var draw = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_3/* .__name */.K)((text, id, version) => {
  _chunk_X3CZISLH_mjs__rspack_import_2/* .log.debug */.R.debug("rendering info diagram\n" + text);
  const svg = (0,_chunk_VAUOI2AC_mjs__rspack_import_0/* .selectSvgElement */.D)(id);
  (0,_chunk_WYO6CB5R_mjs__rspack_import_1/* .configureSvgSize */.a$)(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
}, "draw");
var renderer = { draw };

// src/diagrams/info/infoDiagram.ts
var diagram = {
  parser,
  db,
  renderer
};



},

}]);