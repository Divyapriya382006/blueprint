(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[177], {
    51: e => {
        e.exports = {
            style: {
                fontFamily: "'Caveat', 'Caveat Fallback'",
                fontWeight: 700,
                fontStyle: "normal"
            },
            className: "__className_d54590",
            variable: "__variable_d54590"
        }
    }
    ,
    347: () => {}
    ,
    1423: e => {
        e.exports = {
            style: {
                fontFamily: "'futuraPT', 'futuraPT Fallback'"
            },
            className: "__className_49a370",
            variable: "__variable_49a370"
        }
    }
    ,
    3723: (e, t, a) => {
        "use strict";
        a.d(t, {
            default: () => s
        });
        var l = a(5155)
          , r = a(2115)
          , i = a(6766)
          , o = a(6668)
          , n = a(4404);
        function s() {
            let e = (0,
            r.useRef)(null);
            return (0,
            r.useEffect)( () => {
                (0,
                n.UY)(e.current)
            }
            , []),
            (0,
            l.jsx)("div", {
                ref: e,
                id: "modal",
                role: "dialog",
                "aria-modal": "true",
                "aria-hidden": "true",
                "aria-labelledby": "modal-title",
                "aria-describedby": "modal-description",
                className: "opacity-0 invisible fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-16px)] max-w-68 bg-pale-gold-lite pt-4 px-4 pb-10 border-2 border-pale-gold rounded-2xl z-200 pio-md:max-w-100",
                children: (0,
                l.jsxs)("div", {
                    className: "modal-content flex flex-col gap-6 items-center text-center",
                    children: [(0,
                    l.jsx)("button", {
                        className: "modal-close self-end h-9 w-9 cursor-pointer focus:outline-1 focus:outline-deep-purple",
                        "aria-label": "Close Modal",
                        children: (0,
                        l.jsx)(i.default, {
                            src: "/images/times.svg",
                            className: "mx-auto",
                            alt: "Close Flyout Menu",
                            width: 24,
                            height: 24,
                            priority: !0
                        })
                    }), (0,
                    l.jsxs)("p", {
                        className: "script-small pio-md:!text-[40px]",
                        id: "modal-title",
                        children: ["Fresh Birds Daily. ", (0,
                        l.jsx)("br", {}), "Flavorful Catering Anytime."]
                    }), (0,
                    l.jsx)("p", {
                        id: "modal-description",
                        children: "To guarantee the freshest flavor, we only prepare a limited number of birds at a time. Please call ahead to reserve yours! We also offer catering — reach out to learn more."
                    }), (0,
                    l.jsx)(o.A, {
                        href: "tel:16024415060",
                        children: "Call 602.441.5060"
                    })]
                })
            })
        }
    }
    ,
    4404: (e, t, a) => {
        "use strict";
        a.d(t, {
            UY: () => i,
            n4: () => r,
            oM: () => o
        });
        var l = a(802);
        let r = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "misterPioFlyoutText"
              , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            a && a.kill();
            let r = null == e ? void 0 : e.querySelector("#".concat(t));
            return r ? l.Ay.to(r, {
                rotation: 360,
                transformOrigin: "center center",
                duration: 20,
                repeat: -1,
                ease: "none"
            }) : null
        }
          , i = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ".modal-trigger";
            if ("undefined" == typeof document || !e)
                return;
            let a = null
              , r = e => {
                let t = e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                t.length > 0 && t[0].focus()
            }
              , i = t => {
                if ("Tab" !== t.key || !e)
                    return;
                let a = e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                if (0 === a.length)
                    return;
                let l = a[0]
                  , r = a[a.length - 1];
                t.shiftKey && document.activeElement === l ? (t.preventDefault(),
                r.focus()) : t.shiftKey || document.activeElement !== r || (t.preventDefault(),
                l.focus())
            }
              , o = () => {
                e && (document.querySelectorAll(".modal-trigger.active").forEach(e => {
                    e.classList.remove("active");
                    let t = e.querySelector("a");
                    t && t.setAttribute("aria-expanded", "false")
                }
                ),
                document.body.classList.remove("modal-active"),
                e.setAttribute("aria-hidden", "true"),
                document.removeEventListener("keydown", i),
                a && "focus"in a && a.focus(),
                l.Ay.to(e, {
                    opacity: 0,
                    duration: .3,
                    onComplete: () => {
                        l.Ay.set(e, {
                            visibility: "hidden",
                            opacity: 0
                        })
                    }
                }))
            }
            ;
            document.querySelectorAll(t).forEach(t => {
                t.addEventListener("click", o => {
                    o.preventDefault(),
                    a = document.activeElement,
                    t.classList.add("active");
                    let n = t.querySelector("a");
                    n && n.setAttribute("aria-expanded", "true"),
                    document.body.classList.add("modal-active"),
                    e.setAttribute("aria-hidden", "false"),
                    l.Ay.to(e, {
                        opacity: 1,
                        visibility: "visible",
                        duration: .3,
                        onComplete: () => {
                            r(e),
                            document.addEventListener("keydown", i)
                        }
                    })
                }
                )
            }
            ),
            document.body.addEventListener("click", t => {
                ("visible" === e.style.visibility || "0" !== e.style.opacity) && t.target === document.body && (t.preventDefault(),
                o())
            }
            ),
            document.addEventListener("keydown", t => {
                "Escape" === t.key && e && "hidden" !== e.style.visibility && o()
            }
            ),
            e.querySelectorAll(".modal-close").forEach(e => {
                e.addEventListener("click", o)
            }
            )
        }
          , o = (e, t) => {
            if (e.preventDefault(),
            "top" === t) {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
                return
            }
            let a = document.getElementById(t);
            a && a.scrollIntoView({
                behavior: "smooth"
            })
        }
    }
    ,
    5482: e => {
        e.exports = {
            style: {
                fontFamily: "'futuraPTCond', 'futuraPTCond Fallback'"
            },
            className: "__className_5af051",
            variable: "__variable_5af051"
        }
    }
    ,
    6668: (e, t, a) => {
        "use strict";
        a.d(t, {
            A: () => s
        });
        var l = a(5155)
          , r = a(6675)
          , i = a(6874)
          , o = a.n(i)
          , n = a(4404);
        let s = e => {
            let {ref: t, href: a, ariaLabel: i, ariaControls: s, ariaExpanded: d, ariaHasPopup: c, role: u, children: m, onHoverStart: f, onHoverEnd: v, className: h="", onClick: p, preventHash: b=!1, scrollToId: y} = e
              , x = e => {
                b && y && (0,
                n.oM)(e, y),
                p && p(e)
            }
            ;
            return (0,
            l.jsx)(r.hJ, {
                ref: t,
                className: "button ".concat(h),
                onHoverStart: f,
                onHoverEnd: v,
                onClick: b ? x : p,
                children: (0,
                l.jsx)(o(), {
                    href: a,
                    "aria-label": i,
                    "aria-controls": s,
                    "aria-expanded": d,
                    "aria-haspopup": c,
                    role: u,
                    className: "flex items-center h-full text-center",
                    onClick: b ? x : void 0,
                    children: m
                })
            })
        }
    }
    ,
    7639: (e, t, a) => {
        Promise.resolve().then(a.t.bind(a, 51, 23)),
        Promise.resolve().then(a.t.bind(a, 1423, 23)),
        Promise.resolve().then(a.t.bind(a, 5482, 23)),
        Promise.resolve().then(a.bind(a, 3723)),
        Promise.resolve().then(a.bind(a, 8155)),
        Promise.resolve().then(a.t.bind(a, 347, 23))
    }
    ,
    8155: (e, t, a) => {
        "use strict";
        a.d(t, {
            LoadingProvider: () => m,
            M: () => u
        });
        var l = a(5155)
          , r = a(2115)
          , i = a(802)
          , o = a(9676);
        let n = e => {
            let {className: t="", animateLoadingScreen: a=!0} = e
              , {finishLoading: n} = u()
              , s = (0,
            r.useRef)(a)
              , d = (0,
            r.useRef)(null)
              , c = (0,
            r.useRef)(null)
              , m = (0,
            r.useRef)(null)
              , f = function() {
                let[e,t] = (0,
                r.useState)(0);
                return (0,
                r.useEffect)( () => {
                    {
                        let e = performance.now() / 1e3;
                        if ("complete" === document.readyState)
                            t(e);
                        else {
                            let e = () => {
                                t(performance.now() / 1e3)
                            }
                            ;
                            return window.addEventListener("load", e),
                            () => window.removeEventListener("load", e)
                        }
                    }
                }
                , []),
                e
            }();
            return (0,
            o.L)( () => {
                if (!s.current || 0 === f)
                    return;
                let e = e => {
                    let t = i.os.timeline()
                      , a = Math.max(f || 2, 2);
                    return t.to(m.current, {
                        height: "0%",
                        duration: a,
                        ease: "none"
                    }),
                    t.to(c.current, {
                        scale: e,
                        duration: 1,
                        ease: "back.inOut(4)"
                    }, ">"),
                    t.to(d.current, {
                        opacity: 0,
                        duration: .2,
                        ease: "power2.inOut",
                        onComplete: () => {
                            d.current && (d.current.style.display = "none"),
                            n()
                        }
                    }, ">"),
                    t
                }
                  , t = i.os.matchMedia()
                  , a = t => {
                    let a = e(t);
                    return () => {
                        a && a.kill()
                    }
                }
                ;
                t.add("(max-width: 530px)", () => a(1.2)),
                t.add("(min-width: 531px) and (max-width: 917px)", () => a(1.7)),
                t.add("(min-width: 918px)", () => a(2.2))
            }
            , [f, n]),
            (0,
            l.jsx)("div", {
                ref: d,
                className: "fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-[url('/images/texture_pink.webp')] z-[999] ".concat(t),
                children: (0,
                l.jsxs)("div", {
                    ref: c,
                    className: "relative w-62.5 h-62.5",
                    children: [(0,
                    l.jsx)("div", {
                        className: "loading-mask absolute h-full w-full bg-true-purple left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                    }), (0,
                    l.jsx)("div", {
                        ref: m,
                        className: "loading-mask absolute h-full w-full bg-pale-gold-lite left-1/2 -translate-x-1/2 top-0"
                    })]
                })
            })
        }
        ;
        var s = a(9300)
          , d = a.n(s);
        let c = (0,
        r.createContext)(void 0)
          , u = () => {
            let e = (0,
            r.useContext)(c);
            if (void 0 === e)
                throw Error("useLoading must be used within a LoadingProvider");
            return e
        }
          , m = e => {
            let {children: t} = e
              , [a,i] = (0,
            r.useState)(!0)
              , [o,s] = (0,
            r.useState)(!1);
            return (0,
            l.jsxs)(c.Provider, {
                value: {
                    isLoading: a,
                    setIsLoading: i,
                    finishLoading: () => {
                        i(!1),
                        s(!0),
                        document.body.classList.remove("overflow-hidden")
                    }
                },
                children: [a && (0,
                l.jsx)(n, {
                    animateLoadingScreen: !0
                }), (0,
                l.jsx)("div", {
                    className: d()("duration-300 ease-in-out", {
                        "opacity-0": !o
                    }),
                    children: t
                })]
            })
        }
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [776, 592, 887, 441, 684, 358], () => t(7639)),
    _N_E = e.O()
}
]);
