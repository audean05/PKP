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

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n// ProductList.js\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProductList() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"https://dummyjson.com/products/search?q=\".concat(searchQuery));\n                setProducts(response.data.products);\n            } catch (error) {\n                console.error(\"Error fetching products:\", error);\n            }\n        };\n        fetchData();\n    }, [\n        searchQuery\n    ]);\n    const handleSearchInputChange = (event)=>{\n        setSearchQuery(event.target.value);\n    };\n    const handleProductClick = (productId)=>{\n        router.push(\"/product/ProductDetail?id=\".concat(productId));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-b5fea13c16131a04\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-b5fea13c16131a04\" + \" \" + \"search-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    value: searchQuery,\n                    onChange: handleSearchInputChange,\n                    placeholder: \"Search products...\",\n                    className: \"jsx-b5fea13c16131a04\" + \" \" + \"search-input\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-b5fea13c16131a04\" + \" \" + \"product-grid\",\n                children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                        href: \"/product/ProductDetail?id=\".concat(product.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-b5fea13c16131a04\" + \" \" + \"product-card\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"jsx-b5fea13c16131a04\",\n                                    children: product.title\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-b5fea13c16131a04\",\n                                    children: [\n                                        \"Brand: \",\n                                        product.brand,\n                                        \", ( \",\n                                        product.sku,\n                                        \" )\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-b5fea13c16131a04\",\n                                    children: product.description\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-b5fea13c16131a04\",\n                                    children: [\n                                        \"Category : \",\n                                        product.category\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-b5fea13c16131a04\",\n                                    children: [\n                                        \"Price: $\",\n                                        product.price\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-b5fea13c16131a04\",\n                                    children: [\n                                        \"Discount: \",\n                                        product.discountPercentage,\n                                        \"%\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: product.thumbnail,\n                                    alt: product.title,\n                                    className: \"jsx-b5fea13c16131a04\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"jsx-b5fea13c16131a04\",\n                                    children: \"Reviews:\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"jsx-b5fea13c16131a04\" + \" \" + \"reviews\",\n                                    children: product.reviews.map((review, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"jsx-b5fea13c16131a04\" + \" \" + \"review-item\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"jsx-b5fea13c16131a04\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                            className: \"jsx-b5fea13c16131a04\",\n                                                            children: review.reviewerName\n                                                        }, void 0, false, {\n                                                            fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                                            lineNumber: 61,\n                                                            columnNumber: 26\n                                                        }, this),\n                                                        \" - \",\n                                                        review.date\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"jsx-b5fea13c16131a04\" + \" \" + \"rating\",\n                                                    children: [\n                                                        \"Rating: \",\n                                                        review.rating\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"jsx-b5fea13c16131a04\",\n                                                    children: review.comment\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 23\n                                                }, this)\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 21\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-b5fea13c16131a04\",\n                                    children: product.tags.map((tag, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"jsx-b5fea13c16131a04\",\n                                            children: [\n                                                \"#\",\n                                                tag,\n                                                \" \"\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 21\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                            lineNumber: 48,\n                            columnNumber: 15\n                        }, this)\n                    }, product.id, false, {\n                        fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                        lineNumber: 47,\n                        columnNumber: 14\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"b5fea13c16131a04\",\n                children: \".search-container.jsx-b5fea13c16131a04{margin-bottom:20px}.search-input.jsx-b5fea13c16131a04{width:100%;padding:10px;border:1px solid#ddd;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;font-size:16px}.product-grid.jsx-b5fea13c16131a04{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:20px}.product-card.jsx-b5fea13c16131a04{border:1px solid#ddd;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:16px;-webkit-box-shadow:0 4px 8px rgba(0,0,0,.1);-moz-box-shadow:0 4px 8px rgba(0,0,0,.1);box-shadow:0 4px 8px rgba(0,0,0,.1)}.product-card.jsx-b5fea13c16131a04 h2.jsx-b5fea13c16131a04{font-size:1.2rem;margin-bottom:8px}.product-card.jsx-b5fea13c16131a04 p.jsx-b5fea13c16131a04{margin-bottom:12px}.product-card.jsx-b5fea13c16131a04 img.jsx-b5fea13c16131a04{max-width:100%;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;margin-bottom:12px}.product-card.jsx-b5fea13c16131a04 .reviews.jsx-b5fea13c16131a04{margin-top:20px}.product-card.jsx-b5fea13c16131a04 .review-item.jsx-b5fea13c16131a04{margin-bottom:12px}.product-card.jsx-b5fea13c16131a04 .review-item.jsx-b5fea13c16131a04 strong.jsx-b5fea13c16131a04{font-weight:bold}.product-card.jsx-b5fea13c16131a04 .review-item.jsx-b5fea13c16131a04 p.jsx-b5fea13c16131a04{margin:4px 0}.product-card.jsx-b5fea13c16131a04 .review-item.jsx-b5fea13c16131a04 p.rating.jsx-b5fea13c16131a04{color:#007bff}.product-card.jsx-b5fea13c16131a04 .tags.jsx-b5fea13c16131a04{margin-top:10px}.product-card.jsx-b5fea13c16131a04 .tags.jsx-b5fea13c16131a04 span.jsx-b5fea13c16131a04{display:inline-block;margin-right:6px;background-color:#007bff;color:#fff;padding:4px 8px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\test\\\\pages\\\\product\\\\ProductList.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductList, \"kX8i9nin2Sfr1kmp6/XAN5I+5bw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = ProductList;\nvar _c;\n$RefreshReg$(_c, \"ProductList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1Byb2R1Y3RMaXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkFBaUI7Ozs7QUFFMkI7QUFDbEI7QUFDYztBQUV6QixTQUFTSTs7SUFDdEIsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0csVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ1EsYUFBYUMsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUUvQ0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNUyxZQUFZO1lBQ2hCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNVCxpREFBUyxDQUFDLDJDQUF1RCxPQUFaTTtnQkFDNUVELFlBQVlJLFNBQVNFLElBQUksQ0FBQ1AsUUFBUTtZQUNwQyxFQUFFLE9BQU9RLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1lBQzVDO1FBQ0Y7UUFFQUo7SUFDRixHQUFHO1FBQUNGO0tBQVk7SUFFaEIsTUFBTVEsMEJBQTBCLENBQUNDO1FBQy9CUixlQUFlUSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDbkM7SUFFQSxNQUFNQyxxQkFBcUIsQ0FBQ0M7UUFDMUJoQixPQUFPaUIsSUFBSSxDQUFDLDZCQUF1QyxPQUFWRDtJQUMzQztJQUVBLHFCQUNFLDhEQUFDRTs7OzBCQUNDLDhEQUFDQTswREFBYzswQkFDYiw0RUFBQ0M7b0JBQ0NDLE1BQUs7b0JBQ0xOLE9BQU9YO29CQUNQa0IsVUFBVVY7b0JBQ1ZXLGFBQVk7OERBQ0Y7Ozs7Ozs7Ozs7OzBCQUlkLDhEQUFDSjswREFBYzswQkFDWmpCLFNBQVNzQixHQUFHLENBQUMsQ0FBQ0Msd0JBQ1YsOERBQUNDO3dCQUFLQyxNQUFNLDZCQUF3QyxPQUFYRixRQUFRRyxFQUFFO2tDQUNsRCw0RUFBQ1Q7c0VBQWM7OzhDQUNiLDhEQUFDVTs7OENBQUlKLFFBQVFLLEtBQUs7Ozs7Ozs4Q0FDbEIsOERBQUNDOzs7d0NBQUU7d0NBQVFOLFFBQVFPLEtBQUs7d0NBQUM7d0NBQUtQLFFBQVFRLEdBQUc7d0NBQUM7Ozs7Ozs7OENBQzFDLDhEQUFDRjs7OENBQUdOLFFBQVFTLFdBQVc7Ozs7Ozs4Q0FDdkIsOERBQUNIOzs7d0NBQUU7d0NBQVlOLFFBQVFVLFFBQVE7Ozs7Ozs7OENBQy9CLDhEQUFDSjs7O3dDQUFFO3dDQUFTTixRQUFRVyxLQUFLOzs7Ozs7OzhDQUN6Qiw4REFBQ0w7Ozt3Q0FBRTt3Q0FBV04sUUFBUVksa0JBQWtCO3dDQUFDOzs7Ozs7OzhDQUV6Qyw4REFBQ0M7b0NBQUlDLEtBQUtkLFFBQVFlLFNBQVM7b0NBQUVDLEtBQUtoQixRQUFRSyxLQUFLOzs7Ozs7OzhDQUMvQyw4REFBQ1k7OzhDQUFHOzs7Ozs7OENBQ0osOERBQUNDOzhFQUFhOzhDQUNYbEIsUUFBUW1CLE9BQU8sQ0FBQ3BCLEdBQUcsQ0FBQyxDQUFDcUIsUUFBUUMsc0JBQzVCLDhEQUFDQztzRkFBeUI7OzhEQUN4Qiw4REFBQ2hCOzs7c0VBQUUsOERBQUNpQjs7c0VBQVFILE9BQU9JLFlBQVk7Ozs7Ozt3REFBVTt3REFBSUosT0FBT0ssSUFBSTs7Ozs7Ozs4REFDeEQsOERBQUNuQjs4RkFBWTs7d0RBQVM7d0RBQVNjLE9BQU9NLE1BQU07Ozs7Ozs7OERBQzVDLDhEQUFDcEI7OzhEQUFHYyxPQUFPTyxPQUFPOzs7Ozs7OzJDQUhYTjs7Ozs7Ozs7Ozs4Q0FPYiw4REFBQ2Y7OzhDQUNFTixRQUFRNEIsSUFBSSxDQUFDN0IsR0FBRyxDQUFDLENBQUM4QixLQUFLUixzQkFDdEIsOERBQUNTOzs7Z0RBQWlCO2dEQUFFRDtnREFBSTs7MkNBQWJSOzs7Ozs7Ozs7Ozs7Ozs7O3VCQXRCMENyQixRQUFRRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRHbkY7R0FwSndCNUI7O1FBQ1BELGtEQUFTQTs7O0tBREZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3QvUHJvZHVjdExpc3QuanM/ZTAxMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQcm9kdWN0TGlzdC5qc1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJzsgXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RMaXN0KCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2R1bW15anNvbi5jb20vcHJvZHVjdHMvc2VhcmNoP3E9JHtzZWFyY2hRdWVyeX1gKTsgXHJcbiAgICAgICAgc2V0UHJvZHVjdHMocmVzcG9uc2UuZGF0YS5wcm9kdWN0cyk7IFxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbc2VhcmNoUXVlcnldKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFNlYXJjaFF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZHVjdENsaWNrID0gKHByb2R1Y3RJZCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goYC9wcm9kdWN0L1Byb2R1Y3REZXRhaWw/aWQ9JHtwcm9kdWN0SWR9YCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaElucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggcHJvZHVjdHMuLi5cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1ncmlkXCI+XHJcbiAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0L1Byb2R1Y3REZXRhaWw/aWQ9JHtwcm9kdWN0LmlkfWB9IGtleT17cHJvZHVjdC5pZH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxoMj57cHJvZHVjdC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+QnJhbmQ6IHtwcm9kdWN0LmJyYW5kfSwgKCB7cHJvZHVjdC5za3V9ICk8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5DYXRlZ29yeSA6IHtwcm9kdWN0LmNhdGVnb3J5fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlByaWNlOiAke3Byb2R1Y3QucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+RGlzY291bnQ6IHtwcm9kdWN0LmRpc2NvdW50UGVyY2VudGFnZX0lPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LnRodW1ibmFpbH0gYWx0PXtwcm9kdWN0LnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGgzPlJldmlld3M6PC9oMz5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJyZXZpZXdzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnJldmlld3MubWFwKChyZXZpZXcsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInJldmlldy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPntyZXZpZXcucmV2aWV3ZXJOYW1lfTwvc3Ryb25nPiAtIHtyZXZpZXcuZGF0ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyYXRpbmdcIj5SYXRpbmc6IHtyZXZpZXcucmF0aW5nfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPntyZXZpZXcuY29tbWVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnRhZ3MubWFwKCh0YWcsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+I3t0YWd9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gIFxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnNlYXJjaC1jb250YWluZXIge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnNlYXJjaC1pbnB1dCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2R1Y3QtZ3JpZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xyXG4gICAgICAgICAgZ3JpZC1nYXA6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5wcm9kdWN0LWNhcmQge1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucHJvZHVjdC1jYXJkIGgyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucHJvZHVjdC1jYXJkIHAge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnByb2R1Y3QtY2FyZCBpbWcge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnByb2R1Y3QtY2FyZCAucmV2aWV3cyB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucHJvZHVjdC1jYXJkIC5yZXZpZXctaXRlbSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucHJvZHVjdC1jYXJkIC5yZXZpZXctaXRlbSBzdHJvbmcge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5wcm9kdWN0LWNhcmQgLnJldmlldy1pdGVtIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiA0cHggMDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnByb2R1Y3QtY2FyZCAucmV2aWV3LWl0ZW0gcC5yYXRpbmcge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC8qIE9wdGlvbmFsOiBTdHlsZSBmb3IgdGFncyAqL1xyXG4gICAgICAgIC5wcm9kdWN0LWNhcmQgLnRhZ3Mge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnByb2R1Y3QtY2FyZCAudGFncyBzcGFuIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbiAgXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJQcm9kdWN0TGlzdCIsInJvdXRlciIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlU2VhcmNoSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlUHJvZHVjdENsaWNrIiwicHJvZHVjdElkIiwicHVzaCIsImRpdiIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJtYXAiLCJwcm9kdWN0IiwiTGluayIsImhyZWYiLCJpZCIsImgyIiwidGl0bGUiLCJwIiwiYnJhbmQiLCJza3UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwicHJpY2UiLCJkaXNjb3VudFBlcmNlbnRhZ2UiLCJpbWciLCJzcmMiLCJ0aHVtYm5haWwiLCJhbHQiLCJoMyIsInVsIiwicmV2aWV3cyIsInJldmlldyIsImluZGV4IiwibGkiLCJzdHJvbmciLCJyZXZpZXdlck5hbWUiLCJkYXRlIiwicmF0aW5nIiwiY29tbWVudCIsInRhZ3MiLCJ0YWciLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/ProductList.js\n"));

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/router */ \"./node_modules/next/dist/client/router.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMiLCJtYXBwaW5ncyI6IkFBQUEsNkdBQWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L3JvdXRlci5qcz8xYmI2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9yb3V0ZXInKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/router.js\n"));

/***/ })

});