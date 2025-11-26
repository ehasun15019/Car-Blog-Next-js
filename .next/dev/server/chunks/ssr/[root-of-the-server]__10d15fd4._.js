module.exports = [
  "[externals]/util [external] (util, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("util", () => require("util"));

    module.exports = mod;
  },
  "[externals]/stream [external] (stream, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("stream", () => require("stream"));

    module.exports = mod;
  },
  "[externals]/path [external] (path, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("path", () => require("path"));

    module.exports = mod;
  },
  "[externals]/http [external] (http, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("http", () => require("http"));

    module.exports = mod;
  },
  "[externals]/https [external] (https, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("https", () => require("https"));

    module.exports = mod;
  },
  "[externals]/url [external] (url, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("url", () => require("url"));

    module.exports = mod;
  },
  "[externals]/fs [external] (fs, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("fs", () => require("fs"));

    module.exports = mod;
  },
  "[externals]/crypto [external] (crypto, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("crypto", () => require("crypto"));

    module.exports = mod;
  },
  "[externals]/http2 [external] (http2, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("http2", () => require("http2"));

    module.exports = mod;
  },
  "[externals]/assert [external] (assert, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("assert", () => require("assert"));

    module.exports = mod;
  },
  "[externals]/tty [external] (tty, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("tty", () => require("tty"));

    module.exports = mod;
  },
  "[externals]/os [external] (os, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("os", () => require("os"));

    module.exports = mod;
  },
  "[externals]/zlib [external] (zlib, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("zlib", () => require("zlib"));

    module.exports = mod;
  },
  "[externals]/events [external] (events, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("events", () => require("events"));

    module.exports = mod;
  },
  "[project]/src/Components/Axios/useAxios.jsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => __TURBOPACK__default__export__]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"
      );
    const axiosSecure =
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "default"
      ].create({
        baseURL:
          ("TURBOPACK compile-time value",
          "https://auto-car-api-server.vercel.app"),
      });
    const useAxios = () => {
      return axiosSecure;
    };
    const __TURBOPACK__default__export__ = useAxios;
  },
  "[project]/src/app/all-cars/page.jsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => allCars]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Axios$2f$useAxios$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/src/Components/Axios/useAxios.jsx [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/image.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"
      );
    ("use client");
    function allCars() {
      const [showData, setShowData] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useState"
      ])([]);
      const [loading, setLoading] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useState"
      ])(true);
      const axios = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Axios$2f$useAxios$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "default"
      ])();
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useEffect"
      ])(() => {
        axios.get("/car-selling").then((res) => {
          setShowData(res.data);
          setLoading(false);
        });
      }, [axios]);
      if (loading) {
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            className: "flex flex-col justify-center items-center py-6",
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "span",
              {
                className: "loading loading-dots loading-xl text-primary",
              },
              void 0,
              false,
              {
                fileName: "[project]/src/app/all-cars/page.jsx",
                lineNumber: 22,
                columnNumber: 9,
              },
              this
            ),
          },
          void 0,
          false,
          {
            fileName: "[project]/src/app/all-cars/page.jsx",
            lineNumber: 21,
            columnNumber: 7,
          },
          this
        );
      }
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: "hero",
          children: showData.map((item) => {
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "hero-content flex-col lg:flex-row",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "default"
                    ],
                    {
                      src: "",
                      className: "max-w-sm rounded-lg shadow-2xl",
                      alt: "",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/app/all-cars/page.jsx",
                      lineNumber: 31,
                      columnNumber: 11,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "h1",
                          {
                            className: "text-5xl font-bold",
                            children: "Box Office News!",
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/app/all-cars/page.jsx",
                            lineNumber: 33,
                            columnNumber: 13,
                          },
                          this
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "p",
                          {
                            className: "py-6",
                            children:
                              "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/app/all-cars/page.jsx",
                            lineNumber: 34,
                            columnNumber: 13,
                          },
                          this
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "button",
                          {
                            className: "btn btn-primary",
                            children: "Get Started",
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/app/all-cars/page.jsx",
                            lineNumber: 39,
                            columnNumber: 13,
                          },
                          this
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: "[project]/src/app/all-cars/page.jsx",
                      lineNumber: 32,
                      columnNumber: 11,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/app/all-cars/page.jsx",
                lineNumber: 30,
                columnNumber: 9,
              },
              this
            );
          }),
        },
        void 0,
        false,
        {
          fileName: "[project]/src/app/all-cars/page.jsx",
          lineNumber: 28,
          columnNumber: 5,
        },
        this
      );
    }
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__10d15fd4._.js.map
