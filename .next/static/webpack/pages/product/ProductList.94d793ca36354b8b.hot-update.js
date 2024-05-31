"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/ProductList",{

/***/ "./pages/product/ProductList.js":
/*!**************************************!*\
  !*** ./pages/product/ProductList.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n// ProductList.js\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProductList() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"https://dummyjson.com/products/search?q=\".concat(searchQuery));\n                setProducts(response.data.products);\n            } catch (error) {\n                console.error(\"Error fetching products:\", error);\n            }\n        };\n        fetchData();\n    }, [\n        searchQuery\n    ]);\n    const handleSearchInputChange = (event)=>{\n        setSearchQuery(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-b5fea13c16131a04\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-b5fea13c16131a04\" + \" \" + \"search-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    value: searchQuery,\n                    onChange: handleSearchInputChange,\n                    placeholder: \"Search products...\",\n                    className: \"jsx-b5fea13c16131a04\" + \" \" + \"search-input\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-b5fea13c16131a04\" + \" \" + \"product-grid\",\n                children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/product/ProductDetail?id=\".concat(product.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-b5fea13c16131a04\" + \" \" + \"product-card\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"jsx-b5fea13c16131a04\",\n                                    children: product.title\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-b5fea13c16131a04\",\n                                    children: [\n                                        \"Brand: \",\n                                        product.brand,\n                                        \", ( \",\n                                        product.sku,\n                                        \" )\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-b5fea13c16131a04\",\n                                    children: product.description\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-b5fea13c16131a04\",\n                                    children: [\n                                        \"Category : \",\n                                        product.category\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-b5fea13c16131a04\",\n                                    children: [\n                                        \"Price: $\",\n                                        product.price\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-b5fea13c16131a04\",\n                                    children: [\n                                        \"Discount: \",\n                                        product.discountPercentage,\n                                        \"%\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: product.thumbnail,\n                                    alt: product.title,\n                                    className: \"jsx-b5fea13c16131a04\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"jsx-b5fea13c16131a04\",\n                                    children: \"Reviews:\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"jsx-b5fea13c16131a04\" + \" \" + \"reviews\",\n                                    children: product.reviews.map((review, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"jsx-b5fea13c16131a04\" + \" \" + \"review-item\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"jsx-b5fea13c16131a04\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                            className: \"jsx-b5fea13c16131a04\",\n                                                            children: review.reviewerName\n                                                        }, void 0, false, {\n                                                            fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                                            lineNumber: 56,\n                                                            columnNumber: 26\n                                                        }, this),\n                                                        \" - \",\n                                                        review.date\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"jsx-b5fea13c16131a04\" + \" \" + \"rating\",\n                                                    children: [\n                                                        \"Rating: \",\n                                                        review.rating\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"jsx-b5fea13c16131a04\",\n                                                    children: review.comment\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 23\n                                                }, this)\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 21\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-b5fea13c16131a04\",\n                                    children: product.tags.map((tag, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"jsx-b5fea13c16131a04\",\n                                            children: [\n                                                \"#\",\n                                                tag,\n                                                \" \"\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 21\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                            lineNumber: 43,\n                            columnNumber: 15\n                        }, this)\n                    }, product.id, false, {\n                        fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                        lineNumber: 42,\n                        columnNumber: 14\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"b5fea13c16131a04\",\n                children: \".search-container.jsx-b5fea13c16131a04{margin-bottom:20px}.search-input.jsx-b5fea13c16131a04{width:100%;padding:10px;border:1px solid#ddd;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;font-size:16px}.product-grid.jsx-b5fea13c16131a04{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:20px}.product-card.jsx-b5fea13c16131a04{border:1px solid#ddd;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:16px;-webkit-box-shadow:0 4px 8px rgba(0,0,0,.1);-moz-box-shadow:0 4px 8px rgba(0,0,0,.1);box-shadow:0 4px 8px rgba(0,0,0,.1)}.product-card.jsx-b5fea13c16131a04 h2.jsx-b5fea13c16131a04{font-size:1.2rem;margin-bottom:8px}.product-card.jsx-b5fea13c16131a04 p.jsx-b5fea13c16131a04{margin-bottom:12px}.product-card.jsx-b5fea13c16131a04 img.jsx-b5fea13c16131a04{max-width:100%;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;margin-bottom:12px}.product-card.jsx-b5fea13c16131a04 .reviews.jsx-b5fea13c16131a04{margin-top:20px}.product-card.jsx-b5fea13c16131a04 .review-item.jsx-b5fea13c16131a04{margin-bottom:12px}.product-card.jsx-b5fea13c16131a04 .review-item.jsx-b5fea13c16131a04 strong.jsx-b5fea13c16131a04{font-weight:bold}.product-card.jsx-b5fea13c16131a04 .review-item.jsx-b5fea13c16131a04 p.jsx-b5fea13c16131a04{margin:4px 0}.product-card.jsx-b5fea13c16131a04 .review-item.jsx-b5fea13c16131a04 p.rating.jsx-b5fea13c16131a04{color:#007bff}.product-card.jsx-b5fea13c16131a04 .tags.jsx-b5fea13c16131a04{margin-top:10px}.product-card.jsx-b5fea13c16131a04 .tags.jsx-b5fea13c16131a04 span.jsx-b5fea13c16131a04{display:inline-block;margin-right:6px;background-color:#007bff;color:#fff;padding:4px 8px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductList, \"npCM2AUseVHztFeCARNwhUaEBXw=\");\n_c = ProductList;\nvar _c;\n$RefreshReg$(_c, \"ProductList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1Byb2R1Y3RMaXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkFBaUI7Ozs7QUFFMkI7QUFDbEI7QUFDRztBQUVkLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNPLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQUM7SUFFL0NDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsWUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTVIsaURBQVMsQ0FBQywyQ0FBdUQsT0FBWks7Z0JBQzVFRCxZQUFZSSxTQUFTRSxJQUFJLENBQUNQLFFBQVE7WUFDcEMsRUFBRSxPQUFPUSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsNEJBQTRCQTtZQUM1QztRQUNGO1FBRUFKO0lBQ0YsR0FBRztRQUFDRjtLQUFZO0lBRWhCLE1BQU1RLDBCQUEwQixDQUFDQztRQUMvQlIsZUFBZVEsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ25DO0lBRUEscUJBQ0UsOERBQUNDOzs7MEJBQ0MsOERBQUNBOzBEQUFjOzBCQUNiLDRFQUFDQztvQkFDQ0MsTUFBSztvQkFDTEgsT0FBT1g7b0JBQ1BlLFVBQVVQO29CQUNWUSxhQUFZOzhEQUNGOzs7Ozs7Ozs7OzswQkFJZCw4REFBQ0o7MERBQWM7MEJBQ1pkLFNBQVNtQixHQUFHLENBQUMsQ0FBQ0Msd0JBQ1YsOERBQUN0QixrREFBSUE7d0JBQUN1QixNQUFNLDZCQUF3QyxPQUFYRCxRQUFRRSxFQUFFO2tDQUNsRCw0RUFBQ1I7c0VBQWM7OzhDQUNiLDhEQUFDUzs7OENBQUlILFFBQVFJLEtBQUs7Ozs7Ozs4Q0FDbEIsOERBQUNDOzs7d0NBQUU7d0NBQVFMLFFBQVFNLEtBQUs7d0NBQUM7d0NBQUtOLFFBQVFPLEdBQUc7d0NBQUM7Ozs7Ozs7OENBQzFDLDhEQUFDRjs7OENBQUdMLFFBQVFRLFdBQVc7Ozs7Ozs4Q0FDdkIsOERBQUNIOzs7d0NBQUU7d0NBQVlMLFFBQVFTLFFBQVE7Ozs7Ozs7OENBQy9CLDhEQUFDSjs7O3dDQUFFO3dDQUFTTCxRQUFRVSxLQUFLOzs7Ozs7OzhDQUN6Qiw4REFBQ0w7Ozt3Q0FBRTt3Q0FBV0wsUUFBUVcsa0JBQWtCO3dDQUFDOzs7Ozs7OzhDQUV6Qyw4REFBQ0M7b0NBQUlDLEtBQUtiLFFBQVFjLFNBQVM7b0NBQUVDLEtBQUtmLFFBQVFJLEtBQUs7Ozs7Ozs7OENBQy9DLDhEQUFDWTs7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0M7OEVBQWE7OENBQ1hqQixRQUFRa0IsT0FBTyxDQUFDbkIsR0FBRyxDQUFDLENBQUNvQixRQUFRQyxzQkFDNUIsOERBQUNDO3NGQUF5Qjs7OERBQ3hCLDhEQUFDaEI7OztzRUFBRSw4REFBQ2lCOztzRUFBUUgsT0FBT0ksWUFBWTs7Ozs7O3dEQUFVO3dEQUFJSixPQUFPSyxJQUFJOzs7Ozs7OzhEQUN4RCw4REFBQ25COzhGQUFZOzt3REFBUzt3REFBU2MsT0FBT00sTUFBTTs7Ozs7Ozs4REFDNUMsOERBQUNwQjs7OERBQUdjLE9BQU9PLE9BQU87Ozs7Ozs7MkNBSFhOOzs7Ozs7Ozs7OzhDQU9iLDhEQUFDZjs7OENBQ0VMLFFBQVEyQixJQUFJLENBQUM1QixHQUFHLENBQUMsQ0FBQzZCLEtBQUtSLHNCQUN0Qiw4REFBQ1M7OztnREFBaUI7Z0RBQUVEO2dEQUFJOzsyQ0FBYlI7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBdEIwQ3BCLFFBQVFFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEduRjtHQS9Jd0J2QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0L1Byb2R1Y3RMaXN0LmpzP2UwMTMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUHJvZHVjdExpc3QuanNcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7IFxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdExpc3QoKSB7XHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vZHVtbXlqc29uLmNvbS9wcm9kdWN0cy9zZWFyY2g/cT0ke3NlYXJjaFF1ZXJ5fWApOyBcclxuICAgICAgICBzZXRQcm9kdWN0cyhyZXNwb25zZS5kYXRhLnByb2R1Y3RzKTsgXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdHM6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtzZWFyY2hRdWVyeV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2hJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0U2VhcmNoUXVlcnkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoUXVlcnl9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBwcm9kdWN0cy4uLlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtaW5wdXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWdyaWRcIj5cclxuICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvUHJvZHVjdERldGFpbD9pZD0ke3Byb2R1Y3QuaWR9YH0ga2V5PXtwcm9kdWN0LmlkfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPntwcm9kdWN0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5CcmFuZDoge3Byb2R1Y3QuYnJhbmR9LCAoIHtwcm9kdWN0LnNrdX0gKTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPkNhdGVnb3J5IDoge3Byb2R1Y3QuY2F0ZWdvcnl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+UHJpY2U6ICR7cHJvZHVjdC5wcmljZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5EaXNjb3VudDoge3Byb2R1Y3QuZGlzY291bnRQZXJjZW50YWdlfSU8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2R1Y3QudGh1bWJuYWlsfSBhbHQ9e3Byb2R1Y3QudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8aDM+UmV2aWV3czo8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJldmlld3NcIj5cclxuICAgICAgICAgICAgICAgICAge3Byb2R1Y3QucmV2aWV3cy5tYXAoKHJldmlldywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicmV2aWV3LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+e3Jldmlldy5yZXZpZXdlck5hbWV9PC9zdHJvbmc+IC0ge3Jldmlldy5kYXRlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJhdGluZ1wiPlJhdGluZzoge3Jldmlldy5yYXRpbmd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+e3Jldmlldy5jb21tZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAge3Byb2R1Y3QudGFncy5tYXAoKHRhZywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fT4je3RhZ30gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuc2VhcmNoLWlucHV0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvZHVjdC1ncmlkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbiAgICAgICAgICBncmlkLWdhcDogMjBweDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnByb2R1Y3QtY2FyZCB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5wcm9kdWN0LWNhcmQgaDIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5wcm9kdWN0LWNhcmQgcCB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucHJvZHVjdC1jYXJkIGltZyB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucHJvZHVjdC1jYXJkIC5yZXZpZXdzIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5wcm9kdWN0LWNhcmQgLnJldmlldy1pdGVtIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5wcm9kdWN0LWNhcmQgLnJldmlldy1pdGVtIHN0cm9uZyB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnByb2R1Y3QtY2FyZCAucmV2aWV3LWl0ZW0gcCB7XHJcbiAgICAgICAgICBtYXJnaW46IDRweCAwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucHJvZHVjdC1jYXJkIC5yZXZpZXctaXRlbSBwLnJhdGluZyB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLyogT3B0aW9uYWw6IFN0eWxlIGZvciB0YWdzICovXHJcbiAgICAgICAgLnByb2R1Y3QtY2FyZCAudGFncyB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucHJvZHVjdC1jYXJkIC50YWdzIHNwYW4ge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuICBcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkxpbmsiLCJQcm9kdWN0TGlzdCIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlU2VhcmNoSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsIm1hcCIsInByb2R1Y3QiLCJocmVmIiwiaWQiLCJoMiIsInRpdGxlIiwicCIsImJyYW5kIiwic2t1IiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsInByaWNlIiwiZGlzY291bnRQZXJjZW50YWdlIiwiaW1nIiwic3JjIiwidGh1bWJuYWlsIiwiYWx0IiwiaDMiLCJ1bCIsInJldmlld3MiLCJyZXZpZXciLCJpbmRleCIsImxpIiwic3Ryb25nIiwicmV2aWV3ZXJOYW1lIiwiZGF0ZSIsInJhdGluZyIsImNvbW1lbnQiLCJ0YWdzIiwidGFnIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product/ProductList.js\n"));

/***/ })

});