(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[974],{

/***/ 1:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CallToAction: () => (/* binding */ CallToAction)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5155);
// EXTERNAL MODULE: ./src/assets/arrow-right.svg
var arrow_right = __webpack_require__(1545);
;// ./src/assets/star.png
/* harmony default export */ const star = ({"src":"/_next/static/media/star.31dddc46.png","height":724,"width":724,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVcXGFiYmS1tbpAQEFucXG/v8OCgoa8xs9xcXb///9jY2bNztK2tr2QkJMbGxs2NjmWl5uCgoYtLy++vsRFRUdiYmQ7OzsZbPfVAAAAFnRSTlMB1v3+LfttCBQZfvh4URxd9LqtV3z740Pg0QAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAADpJREFUeJwti0kOgCAQwMo+rAoo/3+qIdJbkxZAPD/+DoBNj9ITuNYyOScBGUY7V4D29hh3harnsls/M+oBZX/ZbAQAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// ./src/assets/spring.png
/* harmony default export */ const spring = ({"src":"/_next/static/media/spring.898c35fa.png","height":524,"width":524,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEVMaXH9/f+SkpIqKi0XCxewsLlTU1V1dXomJibS1dt9f4J0dXgbGxvHydFQUlKbnaHX1+vMzNVTU1Xn6fBTVFVRUVPS09k+Pj+Bgoabm6AbGxthYmSm4XriAAAAFnRSTlMAlEJUDPj9HfYnlvnD16GnDW56a+luwo5EuAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD9JREFUeJwli90aQCAUwIbqnMhPodD7v6dPdrObDZBkaEQX5PM2l0cHYM+q5RBY78nVETDLZa1v9Zm7f6P38AJHSAHek7lQjgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/use-scroll.mjs + 16 modules
var use_scroll = __webpack_require__(4001);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/use-transform.mjs + 4 modules
var use_transform = __webpack_require__(2681);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 203 modules
var proxy = __webpack_require__(3616);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2115);
;// ./src/sections/CallToAction.tsx
/* __next_internal_client_entry_do_not_use__ CallToAction auto */ 





const CallToAction = ()=>{
    const sectionRef = (0,react.useRef)(null);
    const { scrollYProgress } = (0,use_scroll/* useScroll */.L)({
        target: sectionRef,
        offset: [
            'start end',
            'end start'
        ]
    });
    const translateY = (0,use_transform/* useTransform */.G)(scrollYProgress, [
        0,
        1
    ], [
        150,
        -150
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        ref: sectionRef,
        className: "bg-white py-24 overflow-x-clip",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "section-heading relative",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                            className: "section-title text-5xl pb-6",
                            children: "Sign up for free"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "section-description mt-5",
                            children: "Celebrate the joy of accomplisment with our agency designed to fulfil your needs and elivate your efforts"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.P.img, {
                            src: star.src,
                            alt: "Star Image",
                            width: 360,
                            className: "absolute -left-[350px] -top-[137px] ",
                            style: {
                                translateY
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.P.img, {
                            src: spring.src,
                            alt: "Spring Image",
                            width: 360,
                            className: "absolute -right-[331px] -top-[19px]",
                            style: {
                                translateY
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex gap-2 mt-10 justify-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            className: "btn btn-primary",
                            children: "Get for free"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            className: "btn btn-text gap-1",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: "Learn more"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_right/* default */.A, {
                                    className: "h-5 w-5"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2115);
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgSocialX = function SvgSocialX(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M17.141 5h2.454l-5.36 5.93L20.541 19h-4.938l-3.867-4.894L7.311 19H4.856l5.734-6.343L4.541 5h5.062l3.496 4.474z"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgSocialX);

/***/ }),

/***/ 428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hero: () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5155);
/* harmony import */ var _assets_arrow_right_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1545);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4001);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2681);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5056);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2115);
/* __next_internal_client_entry_do_not_use__ Hero auto */ 



const Hero = (param)=>{
    let { onHeroOutOfView } = param;
    const heroRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .useScroll */ .L)({
        target: heroRef,
        offset: [
            "start start",
            "end start"
        ]
    });
    const translateY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .useTransform */ .G)(scrollYProgress, [
        0,
        1
    ], [
        150,
        -150
    ]);
    (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .useMotionValueEvent */ .L)(scrollYProgress, "change", (latest)=>{
        if (latest >= 1 && onHeroOutOfView) {
            onHeroOutOfView();
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
        ref: heroRef,
        className: "w-full pt-[140px] pb-[300px] md:pt-[140px] md:pb-[350px] shadow-xl overflow-hidden overflow-x-clip",
        style: {
            background: "linear-gradient(to bottom, #000000 0%, #0B001E 10%, #4C23C3 30%, white 50%, white 100%)"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "max-w-screen-xl mx-auto w-full px-4 md:px-8",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "md:flex items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "md:w-full",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 w-full",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                                        className: "text-4xl md:text-3xl lg:text-3xl font-medium tracking-tighter lg:w-[500px] sm:w-[300px]  text-white mt-6",
                                        children: "Fortilink is an agency that powers creativity"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                        className: "text-white/50 text-base md:text-lg mt-2 lg:mt-6 lg:ml-auto lg:text-right  w-[350px]",
                                        children: "We know how to make any product effective and beautiful"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-4xl text-black tracking-tight mt-6 sm:mt-[400px] lg:mt-[400px] lg:w-[750px]",
                                children: [
                                    "Fortilink delivers professional social media marketing through ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: "text-black/50",
                                        children: "flexible monthly subscriptions. Trusted by clients for measurable growth and consistent results—“Effective and dependable,” says one."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "flex gap-1 items-center mt-[30px]",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    className: "btn btn-text gap-1",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                            children: "Learn More"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_assets_arrow_right_svg__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
                                            className: "h-5 w-5"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "mt-20 md:mt-0 md:h-[648px] md:flex-1 relative"
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 1212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Testimonials: () => (/* binding */ Testimonials)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5155);
// EXTERNAL MODULE: ./node_modules/next/dist/api/image.js
var api_image = __webpack_require__(6766);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 203 modules
var proxy = __webpack_require__(3616);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2115);
;// ./src/assets/avatar-1.png
/* harmony default export */ const avatar_1 = ({"src":"/_next/static/media/avatar-1.b3f4dd51.png","height":84,"width":84,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEUnFi80HTMvFy8wFCxzQzVJKDA7GigxGTBMaXEwHDascW1lYmVlOCaGWVyYW1maamNdMiiWXlhRND16Rz+BUE5NJym5hX6rf3Q8HTGwioVlOUPBlIswEG8QAAAAFHRSTlMu7Pqs/f398gCy+C75rvL+/q3r/BWXkp0AAAAJcEhZcwAACxMAAAsTAQCanBgAAABDSURBVHicBcEJFoAgCAXAjxugldUDtbr/PZuBQENQCEDFz0yAevrmtiLY7ZnJGVxsjJQZGnK1siJwW7eXAGlXPfYmP1s/AsBwjeyFAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// ./src/assets/avatar-2.png
/* harmony default export */ const avatar_2 = ({"src":"/_next/static/media/avatar-2.d41a0f10.png","height":84,"width":84,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEUtLS4yLSxeS0Y0KTVvbVlINS0wLCxMaXFURj4bGx0yOD1SPzg+ODU4LSeXdmx0aViVZ3RBSE1APjklKCi4pqFxRC9POC82KydDPDx2V1ivjoWjgXhUUUl5VE7nvbX8Ghy0AAAAF3RSTlP+7i/+Lfj3ALAu9/Cts/7r/vnrrPmz9mW5ZcQAAAAJcEhZcwAACxMAAAsTAQCanBgAAABESURBVHicBcGHEYAwDASwT3GcRoezU2D/MZHAaSF6PMMayOjFIiK83y0VQSB9FUJRtKFiECfafuiFtKlz80xgX3OOnn92VgNX1hV1fQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// ./src/assets/avatar-3.png
/* harmony default export */ const avatar_3 = ({"src":"/_next/static/media/avatar-3.21df1c82.png","height":84,"width":84,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEWenp719fX////X19fw8PDDw8M0NDSXl5dMaXH5+fn////p6elNTU2JiYl9fX2urq7p6enJyclISEhPT0/e3t7x8fGrq6vKysqBgYG1tbWOjo729vZzc3OkpKT////ExMTs9MKHAAAAFnRSTlP+sez5+i7+/QAtsy+u7/n066zy8qzrPzqR7wAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAEVJREFUeJwFwQcCgCAMBLBjtixxIkPl/780ATuvtXeMIG9rp3QQY6kEvSHXpzT0BOqgt1GC+BSKGifMOlHmFcAm7kc0/ANvaANM4e9giwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// ./src/assets/avatar-4.png
/* harmony default export */ const avatar_4 = ({"src":"/_next/static/media/avatar-4.3ec21594.png","height":84,"width":84,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAmVBMVEVMaXH/88ZQVFCbo63KWpu+mcLp3OU1oKPocMGMWT5c079VhZKRgXVso68X+dY8srXiTa5LvbauSZCCiMU2Ub3Is7bn1bOtd73KzNkzatoAZ+mVgq3mdKv/WIpenedRMFD/SYVdkt3gbaOSZVi0q8I0HxmXXrKL3cwY2stial7JerLIS57jYqm3k9eoU2+wcFRLKy9Plu+OX0vV5Tw9AAAAI3RSTlMALfj3+fyzL/r87LP++Syw9OyxrC+s7y/v6y/+8i7r+a7+rZAKkpcAAAAJcEhZcwAACxMAAAsTAQCanBgAAABKSURBVHicBcGFAYAwEASwQ1vc3XmK6/7LkQCSrsiWCzBzsWkLGLzVIcOYIvBdpYemHP5x3uLVUoRcq0R3Jcjab5jnogTisVb7Bj+3jQXD8eXlYwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// ./src/assets/avatar-5.png
/* harmony default export */ const avatar_5 = ({"src":"/_next/static/media/avatar-5.2781cf6e.png","height":84,"width":84,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAdVBMVEVMaXGxsrXx+fzu7u/Ez9DM2Nvw9/q2wcHV4eXBy87T3eDO1trb5ef3//++yMvW5unesqnqzci5j4hjKC53bXKsqq8VAAAYAACDfoI3HR7Ey87X4uSmbGzL1dfgpKJhQELWw8H9//+6tbuYioiETlNrYGE8DRDpB953AAAAG3RSTlMA/K74/PL5Ly7wrO7sLbGw/v7++fez/v74+bMxVX4eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVR4nAXBBQKAIAAEsKPbbhDs/z/RDQjjsGwa0K7M0+sV6qt/vjVaCJJyKruA4UdOd3Sodt50JFooI1t2egVoyiQN+AGlrAQYJjwu6gAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// ./src/assets/avatar-6.png
/* harmony default export */ const avatar_6 = ({"src":"/_next/static/media/avatar-6.23fe4fe8.png","height":84,"width":84,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEV/f3/U1NRnZ2eCgoJISEgbGxtVVVWnp6dMaXFxcXE5OTltbW20tLQtLS0wMDBQUFBgYGA+Pj7CwsJ3d3dmZmZPT0+xsbGGhoabm5uRkZEJXaO3AAAAE3RSTlP9+SywLi/t/QDvsa6z9PSs8uv+p+MhSAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEBJREFUeJwFwYcBwCAMAzAzE6DbYf3/aCWoD+IOr0h529gloRpkuBVwWScEBSfZ52JGJWDEjZgp33wTNLantKg/ZRsC3y4cOUUAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// ./src/assets/avatar-7.png
/* harmony default export */ const avatar_7 = ({"src":"/_next/static/media/avatar-7.99057217.png","height":84,"width":84,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEU6IxYcHh87KiFFMSRMaXE2JRwjGhUwIRtAKyFCLydDPDpGMiVLZ4KRqb7PqJSFYFWbeHe7jn1IRkmVx+gxIhi3lIiStNEyIxo2JByTZ1ldNyxxTUZkRD+rf3V1aWsQDRGod2uLjpgWGOyoAAAAGHRSTlMu+KywAO6z/v7367EvrfL+/v7rLuzyrvbNEEcGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVR4nBXJVxKAIAwFwIcmJNiwD9Vy/0s67u+CYI2xIIBvLbIDrUh8nDRwIeXqA8NpKjUGRq+a57/QXXF5V4CGcTrOjT5rKANZ7ycy8QAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// ./src/assets/avatar-8.png
/* harmony default export */ const avatar_8 = ({"src":"/_next/static/media/avatar-8.bdf13b0f.png","height":84,"width":84,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEUWDw9ALSMXExFWOzC3h3AaFBKtfmeQZVNMaXEuIRkvIhp4W0uOZlIdFhRZOyx8RT+IUEk4KSCEZVJMNimkd2VuTTyecmA2JR1qSTbJlX70bjUFAAAAFHRSTlMu/PT8/K/9/gDurfmz67P+/uvyrhrFIcEAAAAJcEhZcwAACxMAAAsTAQCanBgAAABASURBVHicBcEHAoAgDACxA8oouG1R//9RExqLlI0GWsVcIT+heno7Mfg0K0pMxeQzJYe6HzIyrF7nPKHRx3XTflZ0AocoxPkwAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// ./src/assets/avatar-9.png
/* harmony default export */ const avatar_9 = ({"src":"/_next/static/media/avatar-9.236a2dea.png","height":720,"width":720,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAe1BMVEUTBg9wX6h5VKIWHjcadKs5VHgrO1FMaXEAAAAAAAAKAAAfd5eUetgnmbtlSpSNcsEEQoFifr5TRm8zP2EzH0UlEisqFzNypuVhd6VYo8kxb48NXIGnkeljbblNcaxzktcei8BuYZ2Qk+tkZa6Qabl0cMBygcdrdsQ4JUqb1//aAAAAFnRSTlMwLfz5/LX4APWzsOr5Lez5/v7stLjtACvGDQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEdJREFUeJwFwYUBgDAQBLCrfotrBXfYf0ISUK60aBkB6SartwGSUcZYfhZm8Eu4nIEJ03zezsDu2fpwZ4Hi8DXvAWJKiw70A5GPA/1PZuAdAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// ./src/sections/Testimonials.tsx
/* __next_internal_client_entry_do_not_use__ Testimonials auto */ 












// ------------------ Testimonial Data -------------------
const testimonials = [
    {
        text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
        imageSrc: avatar_1.src,
        name: "Jamie Rivera",
        username: "@jamietechguru00"
    },
    {
        text: "Our social handles reach has skyrocketed since we started working with them.",
        imageSrc: avatar_2.src,
        name: "Josh Smith",
        username: "@jjsmith"
    },
    {
        text: "This agency has completely transformed how we manage our projects and deadlines.",
        imageSrc: avatar_3.src,
        name: "Morgan Lee",
        username: "@morganleewhiz"
    },
    {
        text: "I was amazed at how quickly we were able to integrate branding into our workflow.",
        imageSrc: avatar_4.src,
        name: "Casey Jordan",
        username: "@caseyj"
    },
    {
        text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
        imageSrc: avatar_5.src,
        name: "Taylor Kim",
        username: "@taylorkimm"
    },
    {
        text: "The customizability and integration capabilities of this app are top-notch.",
        imageSrc: avatar_6.src,
        name: "Riley Smith",
        username: "@rileysmith1"
    },
    {
        text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
        imageSrc: avatar_7.src,
        name: "Jordan Patels",
        username: "@jpatelsdesign"
    },
    {
        text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
        imageSrc: avatar_8.src,
        name: "Swaraj Langote",
        username: "@gayrajpandu"
    },
    {
        text: "The staff is friendly and supports our diverse needs.",
        imageSrc: avatar_9.src,
        name: "Shravani Mule",
        username: "@shunybb"
    }
];
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);
// ------------------ Testimonials Column -------------------
const TestimonialsColumn = (param)=>{
    let { className, testimonials, duration = 10 } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: className,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.P.div, {
            animate: {
                translateY: "-50%"
            },
            transition: {
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
                duration
            },
            className: "flex flex-col gap-6 pb-6",
            children: Array.from({
                length: 2
            }).map((_, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Fragment, {
                    children: testimonials.map((param, i)=>{
                        let { text, imageSrc, name, username } = param;
                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "card",
                            role: "listitem",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    children: text
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center gap-2 mt-5",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                                            src: imageSrc,
                                            alt: "Avatar of ".concat(name),
                                            width: 40,
                                            height: 40,
                                            className: "rounded-full"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "font-medium tracking-tight leading-5",
                                                    children: name
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "leading-5 tracking-tight",
                                                    children: username
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, "".concat(name, "-").concat(i));
                    })
                }, index))
        })
    });
};
// ------------------ Main Testimonials Component -------------------
const Testimonials = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: "bg-white",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "section-heading",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "tag",
                                children: "Testimonials"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                            className: "section-title mt-5",
                            children: "What our clients say"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "section-description mt-5",
                            children: "We craft smart marketing strategies that drive results and elevate your brand."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TestimonialsColumn, {
                            testimonials: firstColumn,
                            duration: 15
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TestimonialsColumn, {
                            testimonials: secondColumn,
                            className: "hidden md:block",
                            duration: 19
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TestimonialsColumn, {
                            testimonials: thirdColumn,
                            className: "hidden lg:block",
                            duration: 17
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 1545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2115);
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgArrowRight = function SvgArrowRight(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "m16.03 10.53-4.5 4.5a.751.751 0 1 1-1.062-1.062l3.22-3.218H4.5a.75.75 0 1 1 0-1.5h9.188l-3.219-3.22a.751.751 0 1 1 1.063-1.063l4.5 4.5a.75.75 0 0 1-.001 1.064"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgArrowRight);

/***/ }),

/***/ 2604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Pricing: () => (/* binding */ Pricing)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2115);
;// ./src/assets/check.svg
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgCheck = function SvgCheck(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path || (_path = /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    d: "m20.337 8.437-9.6 9.6a.9.9 0 0 1-1.275 0l-4.2-4.2a.901.901 0 1 1 1.275-1.275l3.563 3.563 8.963-8.962a.902.902 0 0 1 1.275 1.275z"
  })));
};
/* harmony default export */ const check = (SvgCheck);
// EXTERNAL MODULE: ./node_modules/tailwind-merge/dist/bundle-mjs.mjs
var bundle_mjs = __webpack_require__(9688);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 203 modules
var proxy = __webpack_require__(3616);
;// ./src/sections/Pricing.tsx
/* __next_internal_client_entry_do_not_use__ Pricing auto */ 



const pricingTiers = [
    {
        title: "Beginner",
        monthlyPrice: 100,
        buttonText: "Sign up now",
        popular: false,
        inverse: false,
        features: [
            "Up to 5 project members",
            "Unlimited tasks and projects",
            "2GB storage",
            "Integrations",
            "Basic support"
        ]
    },
    {
        title: "Pro",
        monthlyPrice: 499,
        buttonText: "Sign up now",
        popular: true,
        inverse: true,
        features: [
            "Up to 50 project members",
            "Unlimited tasks and projects",
            "50GB storage",
            "Integrations",
            "Priority support",
            "Advanced support",
            "Export support"
        ]
    },
    {
        title: "Business",
        monthlyPrice: 799,
        buttonText: "Sign up now",
        popular: false,
        inverse: false,
        features: [
            "Up to 5 project members",
            "Unlimited tasks and projects",
            "200GB storage",
            "Integrations",
            "Dedicated account manager",
            "Custom fields",
            "Advanced analytics",
            "Export capabilities",
            "API access",
            "Advanced security features"
        ]
    }
];
const Pricing = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: "py-24 bg-white",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "section-heading",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                            className: "section-title ",
                            children: "Pricing"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "section-description mt-5",
                            children: "Premium marketing, startup-friendly prices – results that speak louder than our rates"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center",
                    children: pricingTiers.map((param)=>{
                        let { title, monthlyPrice, buttonText, popular, inverse, features } = param;
                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.P.div, {
                            whileHover: {
                                scale: 1.015,
                                y: -6
                            },
                            transition: {
                                type: "spring",
                                stiffness: 60,
                                damping: 14,
                                mass: 0.3
                            },
                            className: (0,bundle_mjs/* twMerge */.QP)("p-10 border border-[#F1F1F1] rounded-3xl shadow-md max-w-xs w-full bg-white", inverse && "border-black bg-black text-white/60"),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                            className: (0,bundle_mjs/* twMerge */.QP)("text-lg font-bold text-black/50", inverse && "text-white"),
                                            children: title
                                        }),
                                        popular && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C3EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium",
                                                children: "Popular"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-baseline gap-1 mt-[30px]",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: "text-4xl font-bold tracking-tighter leading-none",
                                            children: [
                                                "$",
                                                monthlyPrice
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "tracking-tight font-bold text-black/50",
                                            children: "/month"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                    className: (0,bundle_mjs/* twMerge */.QP)("btn btn-primary w-full mt-[30px]", inverse && "bg-white text-black"),
                                    children: buttonText
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                                    className: "flex flex-col gap-5 mt-8",
                                    children: features.map((feature, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            className: "text-sm flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(check, {
                                                    className: "h-6 w-6"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: feature
                                                })
                                            ]
                                        }, index))
                                })
                            ]
                        }, title);
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 3492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2115);
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgSocialPin = function SvgSocialPin(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M12.501 4a8 8 0 0 0-3.212 15.327c-.024-.559-.005-1.229.138-1.836.155-.65 1.03-4.36 1.03-4.36s-.255-.511-.255-1.266c0-1.186.687-2.071 1.542-2.071.729 0 1.079.547 1.079 1.201 0 .731-.466 1.826-.705 2.839-.201.849.425 1.541 1.261 1.541 1.517 0 2.538-1.947 2.538-4.253 0-1.753-1.181-3.066-3.329-3.066-2.427 0-3.938 1.81-3.938 3.831 0 .697.204 1.189.527 1.569.147.175.168.246.114.446-.038.147-.126.502-.163.642-.053.203-.217.275-.4.201-1.118-.457-1.638-1.68-1.638-3.057 0-2.272 1.917-4.997 5.717-4.997 3.055 0 5.066 2.21 5.066 4.582 0 3.139-1.746 5.484-4.318 5.484-.864 0-1.676-.468-1.954-.998 0 0-.465 1.844-.563 2.199-.17.616-.502 1.234-.805 1.714A8 8 0 0 0 20.5 11.999 8 8 0 0 0 12.501 4"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgSocialPin);

/***/ }),

/***/ 4095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2115);
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgSocialLinkedin = function SvgSocialLinkedin(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M4.5 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3zm4.85 10.393v-7.224H6.934v7.224zM8.142 9.182c.842 0 1.367-.554 1.367-1.248-.016-.709-.525-1.248-1.351-1.248-.827 0-1.367.539-1.367 1.248 0 .694.524 1.248 1.335 1.248zm4.962 8.211v-4.034c0-.216.016-.431.079-.586.175-.431.573-.878 1.24-.878.875 0 1.225.662 1.225 1.634v3.864h2.416v-4.142c0-2.219-1.192-3.252-2.782-3.252-1.282 0-1.857.7-2.178 1.193v-1.023h-2.417c.032.675.001 7.183 0 7.225z"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgSocialLinkedin);

/***/ }),

/***/ 4864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2115);
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgSocialInsta = function SvgSocialInsta(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M17 2.25H8A5.256 5.256 0 0 0 2.75 7.5v9A5.256 5.256 0 0 0 8 21.75h9a5.256 5.256 0 0 0 5.25-5.25v-9A5.256 5.256 0 0 0 17 2.25M12.5 16.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m5.625-9a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25M15.5 12a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgSocialInsta);

/***/ }),

/***/ 5355:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3063, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8167));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4864));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4095));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3492));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 201));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9042));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6063));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 428));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8286));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2604));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6810));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1212));


/***/ }),

/***/ 6063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Header: () => (/* binding */ Header)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2115);
;// ./src/assets/menu.svg
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgMenu = function SvgMenu(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20"
  }, props), _path || (_path = /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    d: "M17.813 10.5a.94.94 0 0 1-.938.938H3.125a.938.938 0 0 1 0-1.876h13.75a.937.937 0 0 1 .938.938M3.124 6.438h13.75a.937.937 0 0 0 0-1.875H3.125a.937.937 0 1 0 0 1.875m13.75 8.125H3.125a.938.938 0 0 0 0 1.874h13.75a.938.938 0 0 0 0-1.875"
  })));
};
/* harmony default export */ const menu = (SvgMenu);
;// ./src/sections/Header.tsx
/* __next_internal_client_entry_do_not_use__ Header auto */ 


const Header = ()=>{
    const [isMenuOpen, setIsMenuOpen] = (0,react.useState)(false);
    const [showHeader, setShowHeader] = (0,react.useState)(true);
    const lastScrollY = (0,react.useRef)(0);
    (0,react.useEffect)(()=>{
        const handleScroll = ()=>{
            const currentScrollY = window.scrollY;
            if (currentScrollY < 0) return; // Ignore negative scroll (over-scroll)
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                // Scrolling down and past 100px — hide header
                setShowHeader(false);
            } else {
                // Scrolling up — show header
                setShowHeader(true);
            }
            lastScrollY.current = currentScrollY;
        };
        window.addEventListener('scroll', handleScroll, {
            passive: true
        });
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        className: "fixed top-0 left-0 w-full z-30 bg-transparent backdrop-blur-sm transition-transform duration-300 ease-in-out ".concat(showHeader ? 'translate-y-0' : '-translate-y-full'),
        style: {
            borderRadius: 0
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between px-4 md:px-6 py-5 max-w-full mx-auto",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "pl-1 md:pl-4 flex-shrink-0",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "text-white font-bold text-l select-none cursor-default",
                            children: "Fortilink"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                                className: "hidden md:flex gap-8 text-white/80 text-l font-medium tracking-wide",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        href: "#",
                                        className: "hover:text-white transition",
                                        children: "About"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        href: "#",
                                        className: "hover:text-white transition",
                                        children: "Features"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        href: "#",
                                        className: "hover:text-white transition",
                                        children: "Updates"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        href: "#",
                                        className: "hover:text-white transition",
                                        children: "Customer"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        href: "#",
                                        className: "hover:text-white transition",
                                        children: "Help"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(menu, {
                                onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                className: "h-5 w-5 md:hidden cursor-pointer text-white"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "transition-all duration-300 ease-out overflow-hidden md:hidden ".concat(isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'),
                style: {
                    transitionTimingFunction: 'steps(12, end)'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-col gap-4 pt-6 text-white/90 bg-transparent rounded-none px-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                            href: "#",
                            className: "hover:underline",
                            children: "About"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                            href: "#",
                            className: "hover:underline",
                            children: "Features"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                            href: "#",
                            className: "hover:underline",
                            children: "Updates"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                            href: "#",
                            className: "hover:underline",
                            children: "Customer"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                            href: "#",
                            className: "hover:underline",
                            children: "Help"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            className: "bg-white text-black px-4 py-2 rounded font-semibold tracking-tight mt-4",
                            children: "Get for free"
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 6810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ProductShowcase: () => (/* binding */ ProductShowcase)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5155);
;// ./src/assets/product-image.png
/* harmony default export */ const product_image = ({"src":"/_next/static/media/product-image.19eb2094.png","height":1542,"width":2408,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAQlBMVEXy8vC1tbVCQkLs7Oz19fX6+vq7u7v9/f3////6+fnr6eHu7+5cWVnBwcHn5Natrq7///+ioqI6Ojrh4eFcXFz///9Pj0nkAAAAFXRSTlPJysP9+K/N/OfPneWX2MGf8sag4sZJqSYkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nAXBiQGAIAwEweVNIiiKXv+tOsN+Uur9XHz1lkyQXy/V7CIPlySYrUHE8QMl6QGXedB6aAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// ./src/assets/pyramid.png
/* harmony default export */ const pyramid = ({"src":"/_next/static/media/pyramid.ed6b3924.png","height":1500,"width":1500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAbFBMVEVMaXFbXF1dXV9DRETBwcFKSktsbXJWVluhoqZ7e4GHiIw8PD1bW1xGR0dXV1qOjpKHh457fIDs7PC6uryLi5BSUlRsbXJzc3Oztb+3t7pSUlaMjI0rKyt2eH2Xnap/f4MqKipxcXS/wMWwsbU3O21zAAAAH3RSTlMAdPpuBDu0DfcdgvuovVL8yrBF28aI7z5sq6P979EqWcgbJgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEZJREFUeJwFwQcCgCAMBLBjtgUV91ZQ//9HE4AkbEYA0MhH2QWkuhzL6UBNq0u8VjjPX57DDesffodpgVU6J+4BWFPVTvADfzEDcFUyOg8AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// ./src/assets/tube.png
/* harmony default export */ const tube = ({"src":"/_next/static/media/tube.cd2ce126.png","height":496,"width":496,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEVMaXFYWFlvcXXY2NtxcXj////d3eRLTE1dXWCcnKuJiY1BQUMtLS3i4ulUVFdeXmK0tLzNztKQkZWLi5YtLS3FxcuTlJhAQEGKi491dnupqavs0KHOAAAAFnRSTlMA+IhPPwk5++Ical6BdMe9e83gddV8VNli9QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD9JREFUeJw9ykkSgCAMAMEBAwnua0D//1DLi31u+PXzEgvQteZqApPbdaoVRGuU/T5grFWDr8Bg4dm+Tso58QJINQInNxNQcwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/dist/api/image.js
var api_image = __webpack_require__(6766);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/use-scroll.mjs + 16 modules
var use_scroll = __webpack_require__(4001);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/use-transform.mjs + 4 modules
var use_transform = __webpack_require__(2681);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 203 modules
var proxy = __webpack_require__(3616);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2115);
;// ./src/sections/ProductShowcase.tsx
/* __next_internal_client_entry_do_not_use__ ProductShowcase auto */ 






const ProductShowcase = ()=>{
    const sectionRef = (0,react.useRef)(null);
    const { scrollYProgress } = (0,use_scroll/* useScroll */.L)({
        target: sectionRef,
        offset: [
            'start end',
            'end start'
        ]
    });
    const translateY = (0,use_transform/* useTransform */.G)(scrollYProgress, [
        0,
        1
    ], [
        150,
        -150
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        ref: sectionRef,
        className: "bg-white p-24 overflow-x-clip",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "max-w-[540px] mx-auto",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight",
                                children: "Boost your buisness"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                            className: "text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#333333] text-transparent bg-clip-text mt-6",
                            children: "A more effective way to track clients"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "text-center text-[22px] leading-[30px] text-black tracking-tight mt-5",
                            children: "We help brands grow and stand out online with data-driven strategy and impactful social content."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                            src: product_image,
                            alt: "Product Image",
                            className: "mt-10"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.P.img, {
                            src: pyramid.src,
                            alt: "Pyramid Image",
                            height: 262,
                            width: 262,
                            className: " hidden md:block absolute -right-36 -top-32",
                            style: {
                                translateY
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.P.img, {
                            src: tube.src,
                            alt: "Tube image",
                            height: 248,
                            width: 248,
                            className: "hidden md:block absolute bottom-24 -left-36",
                            style: {
                                translateY
                            }
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 8167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logosaas.69446e07.png","height":1024,"width":1024,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEUTFBIODgwVFhRiYmEbGxlPT05/f38uLy1nZ2aSkpI5OTitra2LxsaaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nCWKyRHAMAyE2JXks/9+M5H5wAMAi4emf5kaIWOdHS9q3NkRa2UvWam+EYYPE40AkiYkRpwAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 8286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  LogoTicker: () => (/* binding */ LogoTicker)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5155);
;// ./src/assets/logo-acme.png
/* harmony default export */ const logo_acme = ({"src":"/_next/static/media/logo-acme.2e52cbf2.png","height":52,"width":238,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAACVBMVEUAAAAAAAAAAACDY+nAAAAAA3RSTlMSHDgroVYDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFElEQVR4nGNgYoACJgZGRkYGRkYAAFYACrs8mdAAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
;// ./src/assets/logo-quantum.png
/* harmony default export */ const logo_quantum = ({"src":"/_next/static/media/logo-quantum.065d1f23.png","height":52,"width":204,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAACVBMVEUAAAAAAAAAAACDY+nAAAAAA3RSTlMgFT9D6EkXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFUlEQVR4nGNgYmJkAEEGEIOBgYEBAACfAA0x0n6iAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":2});
;// ./src/assets/logo-echo.png
/* harmony default export */ const logo_echo = ({"src":"/_next/static/media/logo-echo.d4850af5.png","height":44,"width":238,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAACVBMVEUAAAAAAAAAAACDY+nAAAAAA3RSTlMgTRXqMVedAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEUlEQVR4nGNgZGBiYGJgYAAAACUABvAcbCQAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":1});
;// ./src/assets/logo-celestial.png
/* harmony default export */ const logo_celestial = ({"src":"/_next/static/media/logo-celestial.d1269bde.png","height":48,"width":188,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAACVBMVEUAAAAAAAAAAACDY+nAAAAAA3RSTlMdMg7kQI2LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFklEQVR4nGNgZGRiYGBiYGAAMxgYGAAAhAALNYos9wAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":2});
;// ./src/assets/logo-pulse.png
/* harmony default export */ const logo_pulse = ({"src":"/_next/static/media/logo-pulse.40ad0865.png","height":38,"width":164,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAACVBMVEUAAAAAAAAAAACDY+nAAAAAA3RSTlMoOBom1ZYHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFUlEQVR4nGNgZGJgYmJkZIAARkYGAACVAAxxWtZMAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":2});
;// ./src/assets/logo-apex.png
/* harmony default export */ const logo_apex = ({"src":"/_next/static/media/logo-apex.77ce199c.png","height":49,"width":151,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAFVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAASAQCkAAAAB3RSTlMSVAtGaAKWlgvVxQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACBJREFUeJwVyMERADAIwzDHKew/Mlc9xcsAyIY0LX8UDwKFAC9bPN3LAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":3});
// EXTERNAL MODULE: ./node_modules/next/dist/api/image.js
var api_image = __webpack_require__(6766);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 203 modules
var proxy = __webpack_require__(3616);
;// ./src/sections/LogoTicker.tsx
/* __next_internal_client_entry_do_not_use__ LogoTicker auto */ 








const LogoTicker = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "py-8 md:py-12 bg-white",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.P.div, {
                    className: " flex gap-14 flex-none pr-14",
                    animate: {
                        translateX: "-50%"
                    },
                    transition: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                            src: logo_acme,
                            alt: "Acme logo",
                            className: "logo-ticker-image"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                            src: logo_quantum,
                            alt: "quantum logo",
                            className: "logo-ticker-image"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                            src: logo_echo,
                            alt: "echo logo",
                            className: "logo-ticker-image"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                            src: logo_celestial,
                            alt: "celestial logo",
                            className: "logo-ticker-image"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                            src: logo_pulse,
                            alt: "pulse logo",
                            className: "logo-ticker-image"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                            src: logo_apex,
                            alt: "Apex logo",
                            className: "logo-ticker-image"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                            src: logo_acme,
                            alt: "Acme logo",
                            className: "logo-ticker-image"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                            src: logo_quantum,
                            alt: "quantum logo",
                            className: "logo-ticker-image"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                            src: logo_echo,
                            alt: "echo logo",
                            className: "logo-ticker-image"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                            src: logo_celestial,
                            alt: "celestial logo",
                            className: "logo-ticker-image"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                            src: logo_pulse,
                            alt: "pulse logo",
                            className: "logo-ticker-image"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                            src: logo_apex,
                            alt: "Apex logo",
                            className: "logo-ticker-image"
                        })
                    ]
                })
            })
        })
    });
};


/***/ }),

/***/ 9042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2115);
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgSocialYoutube = function SvgSocialYoutube(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M22.468 6.518A2.25 2.25 0 0 0 21.11 4.98c-3.214-1.241-8.329-1.23-8.61-1.23s-5.396-.011-8.61 1.23a2.25 2.25 0 0 0-1.358 1.537C2.289 7.454 2 9.164 2 12s.289 4.547.532 5.483A2.25 2.25 0 0 0 3.89 19.02c3.079 1.188 7.897 1.229 8.548 1.229h.124c.65 0 5.472-.041 8.548-1.23a2.25 2.25 0 0 0 1.358-1.537c.243-.938.532-2.646.532-5.483s-.289-4.547-.532-5.482m-6.76 5.794-4.5 3a.375.375 0 0 1-.583-.312V9a.376.376 0 0 1 .583-.312l4.5 3a.375.375 0 0 1 0 .624"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgSocialYoutube);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [755,441,684,358], () => (__webpack_exec__(5355)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);