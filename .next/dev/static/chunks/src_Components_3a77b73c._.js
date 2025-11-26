(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  typeof document === "object" ? document.currentScript : undefined,
  "[project]/src/Components/Title/Title.jsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => __TURBOPACK__default__export__]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)"
      );
    const Title = (t0) => {
      const $ = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "c"
      ])(3);
      if (
        $[0] !==
        "f8aa2577c5089e5b7a1f42bd1e99dcd1af2da8af8aa2e937683197ce760223c2"
      ) {
        for (let $i = 0; $i < 3; $i += 1) {
          $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] =
          "f8aa2577c5089e5b7a1f42bd1e99dcd1af2da8af8aa2e937683197ce760223c2";
      }
      const { title1 } = t0;
      let t1;
      if ($[1] !== title1) {
        t1 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            className: "mb-6",
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "h3",
              {
                className:
                  "text-2xl font-semibold border-l-4 border-primary pl-4 text-center md:text-start",
                children: title1,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/Components/Title/Title.jsx",
                lineNumber: 15,
                columnNumber: 32,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          },
          void 0,
          false,
          {
            fileName: "[project]/src/Components/Title/Title.jsx",
            lineNumber: 15,
            columnNumber: 10,
          },
          ("TURBOPACK compile-time value", void 0)
        );
        $[1] = title1;
        $[2] = t1;
      } else {
        t1 = $[2];
      }
      return t1;
    };
    _c = Title;
    const __TURBOPACK__default__export__ = Title;
    var _c;
    __turbopack_context__.k.register(_c, "Title");
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$
      );
    }
  },
  "[project]/src/Components/Axios/useAxios.jsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => __TURBOPACK__default__export__]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      /*#__PURE__*/ __turbopack_context__.i(
        "[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
      );
    const axiosSecure =
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$
      );
    }
  },
  "[project]/src/Components/Latest-Blogs/LatestBlogs.jsx [app-client] (ecmascript)",
  (__turbopack_context__, module, exports) => {
    const e = new Error(
      "Could not parse module '[project]/src/Components/Latest-Blogs/LatestBlogs.jsx'\n\nExpected '</', got '}'"
    );
    e.code = "MODULE_UNPARSABLE";
    throw e;
  },
  "[project]/src/Components/Design/TestimonialCardDesign.jsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => __TURBOPACK__default__export__]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/image.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ti$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/react-icons/ti/index.mjs [app-client] (ecmascript)"
      );
    const TestimonialCardDesign = (t0) => {
      const $ = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "c"
      ])(20);
      if (
        $[0] !==
        "d4aba4570106115c16de43d31a23d0ab734ae1baebe2d6158a87ce838909f1f7"
      ) {
        for (let $i = 0; $i < 20; $i += 1) {
          $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] =
          "d4aba4570106115c16de43d31a23d0ab734ae1baebe2d6158a87ce838909f1f7";
      }
      const { userName, ratings, review, user_email } = t0;
      let t1;
      if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "FaQuoteLeft"
          ],
          {
            className: "text-3xl text-primary mb-4",
          },
          void 0,
          false,
          {
            fileName:
              "[project]/src/Components/Design/TestimonialCardDesign.jsx",
            lineNumber: 22,
            columnNumber: 10,
          },
          ("TURBOPACK compile-time value", void 0)
        );
        $[1] = t1;
      } else {
        t1 = $[1];
      }
      let t2;
      if ($[2] !== review) {
        t2 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "p",
          {
            className: "leading-relaxed mb-6",
            children: review,
          },
          void 0,
          false,
          {
            fileName:
              "[project]/src/Components/Design/TestimonialCardDesign.jsx",
            lineNumber: 29,
            columnNumber: 10,
          },
          ("TURBOPACK compile-time value", void 0)
        );
        $[2] = review;
        $[3] = t2;
      } else {
        t2 = $[3];
      }
      let t3;
      if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            className: "border-t border-dashed border-gray-300 mb-4",
          },
          void 0,
          false,
          {
            fileName:
              "[project]/src/Components/Design/TestimonialCardDesign.jsx",
            lineNumber: 37,
            columnNumber: 10,
          },
          ("TURBOPACK compile-time value", void 0)
        );
        $[4] = t3;
      } else {
        t3 = $[4];
      }
      let t4;
      if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            className: "w-12 h-12 relative rounded-full overflow-hidden",
          },
          void 0,
          false,
          {
            fileName:
              "[project]/src/Components/Design/TestimonialCardDesign.jsx",
            lineNumber: 44,
            columnNumber: 10,
          },
          ("TURBOPACK compile-time value", void 0)
        );
        $[5] = t4;
      } else {
        t4 = $[5];
      }
      let t5;
      if ($[6] !== userName) {
        t5 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "h3",
          {
            className: "font-semibold text-lg text-teal-600",
            children: userName,
          },
          void 0,
          false,
          {
            fileName:
              "[project]/src/Components/Design/TestimonialCardDesign.jsx",
            lineNumber: 51,
            columnNumber: 10,
          },
          ("TURBOPACK compile-time value", void 0)
        );
        $[6] = userName;
        $[7] = t5;
      } else {
        t5 = $[7];
      }
      let t6;
      if ($[8] !== user_email) {
        t6 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "p",
          {
            className: "text-[0.7rem]",
            children: user_email,
          },
          void 0,
          false,
          {
            fileName:
              "[project]/src/Components/Design/TestimonialCardDesign.jsx",
            lineNumber: 59,
            columnNumber: 10,
          },
          ("TURBOPACK compile-time value", void 0)
        );
        $[8] = user_email;
        $[9] = t6;
      } else {
        t6 = $[9];
      }
      let t7;
      if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ti$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "TiStarFullOutline"
          ],
          {
            className: "text-yellow-400",
          },
          void 0,
          false,
          {
            fileName:
              "[project]/src/Components/Design/TestimonialCardDesign.jsx",
            lineNumber: 67,
            columnNumber: 10,
          },
          ("TURBOPACK compile-time value", void 0)
        );
        $[10] = t7;
      } else {
        t7 = $[10];
      }
      let t8;
      if ($[11] !== ratings) {
        t8 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            className: "flex gap-2 pt-2",
            children: [
              t7,
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "p",
                {
                  className: "text-gray-200 text-sm",
                  children: ratings,
                },
                void 0,
                false,
                {
                  fileName:
                    "[project]/src/Components/Design/TestimonialCardDesign.jsx",
                  lineNumber: 74,
                  columnNumber: 47,
                },
                ("TURBOPACK compile-time value", void 0)
              ),
            ],
          },
          void 0,
          true,
          {
            fileName:
              "[project]/src/Components/Design/TestimonialCardDesign.jsx",
            lineNumber: 74,
            columnNumber: 10,
          },
          ("TURBOPACK compile-time value", void 0)
        );
        $[11] = ratings;
        $[12] = t8;
      } else {
        t8 = $[12];
      }
      let t9;
      if ($[13] !== t5 || $[14] !== t6 || $[15] !== t8) {
        t9 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            className: "flex items-center gap-3",
            children: [
              t4,
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  children: [t5, t6, t8],
                },
                void 0,
                true,
                {
                  fileName:
                    "[project]/src/Components/Design/TestimonialCardDesign.jsx",
                  lineNumber: 82,
                  columnNumber: 55,
                },
                ("TURBOPACK compile-time value", void 0)
              ),
            ],
          },
          void 0,
          true,
          {
            fileName:
              "[project]/src/Components/Design/TestimonialCardDesign.jsx",
            lineNumber: 82,
            columnNumber: 10,
          },
          ("TURBOPACK compile-time value", void 0)
        );
        $[13] = t5;
        $[14] = t6;
        $[15] = t8;
        $[16] = t9;
      } else {
        t9 = $[16];
      }
      let t10;
      if ($[17] !== t2 || $[18] !== t9) {
        t10 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            className: "p-4",
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className:
                  "card bg-black/20 shadow-md p-6 rounded-xl border border-white text-white max-w-md mx-auto",
                children: [t1, t2, t3, t9],
              },
              void 0,
              true,
              {
                fileName:
                  "[project]/src/Components/Design/TestimonialCardDesign.jsx",
                lineNumber: 92,
                columnNumber: 32,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          },
          void 0,
          false,
          {
            fileName:
              "[project]/src/Components/Design/TestimonialCardDesign.jsx",
            lineNumber: 92,
            columnNumber: 11,
          },
          ("TURBOPACK compile-time value", void 0)
        );
        $[17] = t2;
        $[18] = t9;
        $[19] = t10;
      } else {
        t10 = $[19];
      }
      return t10;
    };
    _c = TestimonialCardDesign;
    const __TURBOPACK__default__export__ = TestimonialCardDesign;
    var _c;
    __turbopack_context__.k.register(_c, "TestimonialCardDesign");
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$
      );
    }
  },
  "[project]/src/Components/Testimonial/Testimonial.jsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => __TURBOPACK__default__export__]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        "[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ =
      __turbopack_context__.i(
        "[project]/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$coverflow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EffectCoverflow$3e$__ =
      __turbopack_context__.i(
        "[project]/node_modules/swiper/modules/effect-coverflow.mjs [app-client] (ecmascript) <export default as EffectCoverflow>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Design$2f$TestimonialCardDesign$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/src/Components/Design/TestimonialCardDesign.jsx [app-client] (ecmascript)"
      );
    var _s = __turbopack_context__.k.signature();
    ("use client");
    const Testimonial = () => {
      _s();
      const $ = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "c"
      ])(14);
      if (
        $[0] !==
        "cf0187e1aa9690dbbb3a0408bc04712db151893893ceddd4c40760d2fc6d0126"
      ) {
        for (let $i = 0; $i < 14; $i += 1) {
          $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] =
          "cf0187e1aa9690dbbb3a0408bc04712db151893893ceddd4c40760d2fc6d0126";
      }
      let t0;
      if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
      } else {
        t0 = $[1];
      }
      const [review, setReview] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])(t0);
      let t1;
      let t2;
      if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = () => {
          fetch("/review.json")
            .then(_temp)
            .then((data) => setReview(data))
            .catch(_temp2);
        };
        t2 = [];
        $[2] = t1;
        $[3] = t2;
      } else {
        t1 = $[2];
        t2 = $[3];
      }
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useEffect"
      ])(t1, t2);
      let t3;
      if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            className: "text-center",
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "h3",
              {
                className: "text-3xl opacity-40 font-bold text-white",
                children: "Testimonial",
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/src/Components/Testimonial/Testimonial.jsx",
                lineNumber: 45,
                columnNumber: 39,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          },
          void 0,
          false,
          {
            fileName: "[project]/src/Components/Testimonial/Testimonial.jsx",
            lineNumber: 45,
            columnNumber: 10,
          },
          ("TURBOPACK compile-time value", void 0)
        );
        $[4] = t3;
      } else {
        t3 = $[4];
      }
      let t4;
      let t5;
      let t6;
      let t7;
      let t8;
      if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        };
        t5 = {
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          scale: 0.85,
          slideShadows: false,
        };
        t6 = {
          delay: 2500,
          disableOnInteraction: false,
        };
        t7 = {
          clickable: true,
        };
        t8 = [
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$coverflow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EffectCoverflow$3e$__[
            "EffectCoverflow"
          ],
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__[
            "Autoplay"
          ],
        ];
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
        $[8] = t7;
        $[9] = t8;
      } else {
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
        t7 = $[8];
        t8 = $[9];
      }
      let t9;
      if ($[10] !== review) {
        t9 = review.map(_temp3);
        $[10] = review;
        $[11] = t9;
      } else {
        t9 = $[11];
      }
      let t10;
      if ($[12] !== t9) {
        t10 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            className: "px-4 sm:px-10 lg:px-20 py-10 bg-secondary my-5",
            children: [
              t3,
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  className: "mt-9",
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "Swiper"
                    ],
                    {
                      effect: "coverflow",
                      grabCursor: true,
                      centeredSlides: true,
                      loop: true,
                      slidesPerView: 1,
                      breakpoints: t4,
                      coverflowEffect: t5,
                      autoplay: t6,
                      pagination: t7,
                      modules: t8,
                      className: "mySwiper",
                      children: t9,
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/src/Components/Testimonial/Testimonial.jsx",
                      lineNumber: 105,
                      columnNumber: 101,
                    },
                    ("TURBOPACK compile-time value", void 0)
                  ),
                },
                void 0,
                false,
                {
                  fileName:
                    "[project]/src/Components/Testimonial/Testimonial.jsx",
                  lineNumber: 105,
                  columnNumber: 79,
                },
                ("TURBOPACK compile-time value", void 0)
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/Components/Testimonial/Testimonial.jsx",
            lineNumber: 105,
            columnNumber: 11,
          },
          ("TURBOPACK compile-time value", void 0)
        );
        $[12] = t9;
        $[13] = t10;
      } else {
        t10 = $[13];
      }
      return t10;
    };
    _s(Testimonial, "3LNd9LBErsdk5adrBtR66+hPKy4=");
    _c = Testimonial;
    const __TURBOPACK__default__export__ = Testimonial;
    function _temp(res) {
      return res.json();
    }
    function _temp2(err) {
      return console.log(err.message);
    }
    function _temp3(item, index) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "SwiperSlide"
        ],
        {
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Design$2f$TestimonialCardDesign$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "default"
            ],
            {
              user_photoURL: item.user_photoURL,
              userName: item.userName,
              user_email: item.user_email,
              ratings: item.ratings,
              review: item.review,
            },
            void 0,
            false,
            {
              fileName: "[project]/src/Components/Testimonial/Testimonial.jsx",
              lineNumber: 121,
              columnNumber: 38,
            },
            this
          ),
        },
        item._id,
        false,
        {
          fileName: "[project]/src/Components/Testimonial/Testimonial.jsx",
          lineNumber: 121,
          columnNumber: 10,
        },
        this
      );
    }
    var _c;
    __turbopack_context__.k.register(_c, "Testimonial");
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$
      );
    }
  },
]);

//# sourceMappingURL=src_Components_3a77b73c._.js.map
