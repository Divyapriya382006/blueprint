(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[887], {
    802: (t, e, i) => {
        "use strict";
        i.d(e, {
            Ay: () => tb,
            os: () => tb
        });
        var r, n, s, o, a, l, u, h = i(934), c = {}, d = 180 / Math.PI, p = Math.PI / 180, f = Math.atan2, m = /([A-Z])/g, g = /(left|right|width|margin|padding|x)/i, v = /[\s,\(]\S/, y = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        }, x = function(t, e) {
            return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
        }, b = function(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
        }, P = function(t, e) {
            return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
        }, w = function(t, e) {
            var i = e.s + e.c * t;
            e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
        }, S = function(t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e)
        }, T = function(t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        }, A = function(t, e, i) {
            return t.style[e] = i
        }, E = function(t, e, i) {
            return t.style.setProperty(e, i)
        }, M = function(t, e, i) {
            return t._gsap[e] = i
        }, C = function(t, e, i) {
            return t._gsap.scaleX = t._gsap.scaleY = i
        }, O = function(t, e, i, r, n) {
            var s = t._gsap;
            s.scaleX = s.scaleY = i,
            s.renderTransform(n, s)
        }, j = function(t, e, i, r, n) {
            var s = t._gsap;
            s[e] = i,
            s.renderTransform(n, s)
        }, V = "transform", R = V + "Origin", D = function t(e, i) {
            var r = this
              , n = this.target
              , s = n.style
              , o = n._gsap;
            if (e in c && s) {
                if (this.tfm = this.tfm || {},
                "transform" === e)
                    return y.transform.split(",").forEach(function(e) {
                        return t.call(r, e, i)
                    });
                if (~(e = y[e] || e).indexOf(",") ? e.split(",").forEach(function(t) {
                    return r.tfm[t] = Z(n, t)
                }) : this.tfm[e] = o.x ? o[e] : Z(n, e),
                e === R && (this.tfm.zOrigin = o.zOrigin),
                this.props.indexOf(V) >= 0)
                    return;
                o.svg && (this.svgo = n.getAttribute("data-svg-origin"),
                this.props.push(R, i, "")),
                e = V
            }
            (s || i) && this.props.push(e, i, s[e])
        }, k = function(t) {
            t.translate && (t.removeProperty("translate"),
            t.removeProperty("scale"),
            t.removeProperty("rotate"))
        }, _ = function() {
            var t, e, i = this.props, r = this.target, n = r.style, s = r._gsap;
            for (t = 0; t < i.length; t += 3)
                i[t + 1] ? 2 === i[t + 1] ? r[i[t]](i[t + 2]) : r[i[t]] = i[t + 2] : i[t + 2] ? n[i[t]] = i[t + 2] : n.removeProperty("--" === i[t].substr(0, 2) ? i[t] : i[t].replace(m, "-$1").toLowerCase());
            if (this.tfm) {
                for (e in this.tfm)
                    s[e] = this.tfm[e];
                s.svg && (s.renderTransform(),
                r.setAttribute("data-svg-origin", this.svgo || "")),
                (t = l()) && t.isStart || n[V] || (k(n),
                s.zOrigin && n[R] && (n[R] += " " + s.zOrigin + "px",
                s.zOrigin = 0,
                s.renderTransform()),
                s.uncache = 1)
            }
        }, F = function(t, e) {
            var i = {
                target: t,
                props: [],
                revert: _,
                save: D
            };
            return t._gsap || h.os.core.getCache(t),
            e && t.style && t.nodeType && e.split(",").forEach(function(t) {
                return i.save(t)
            }),
            i
        }, L = function(t, e) {
            var i = r.createElementNS ? r.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : r.createElement(t);
            return i && i.style ? i : r.createElement(t)
        }, B = function t(e, i, r) {
            var n = getComputedStyle(e);
            return n[i] || n.getPropertyValue(i.replace(m, "-$1").toLowerCase()) || n.getPropertyValue(i) || !r && t(e, U(i) || i, 1) || ""
        }, I = "O,Moz,ms,Ms,Webkit".split(","), U = function(t, e, i) {
            var r = (e || o).style
              , n = 5;
            if (t in r && !i)
                return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(I[n] + t in r); )
                ;
            return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? I[n] : "") + t
        }, N = function() {
            "undefined" != typeof window && window.document && (n = (r = window.document).documentElement,
            o = L("div") || {
                style: {}
            },
            L("div"),
            R = (V = U(V)) + "Origin",
            o.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
            u = !!U("perspective"),
            l = h.os.core.reverting,
            s = 1)
        }, z = function(t) {
            var e, i = t.ownerSVGElement, r = L("svg", i && i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), s = t.cloneNode(!0);
            s.style.display = "block",
            r.appendChild(s),
            n.appendChild(r);
            try {
                e = s.getBBox()
            } catch (t) {}
            return r.removeChild(s),
            n.removeChild(r),
            e
        }, $ = function(t, e) {
            for (var i = e.length; i--; )
                if (t.hasAttribute(e[i]))
                    return t.getAttribute(e[i])
        }, Y = function(t) {
            var e, i;
            try {
                e = t.getBBox()
            } catch (r) {
                e = z(t),
                i = 1
            }
            return e && (e.width || e.height) || i || (e = z(t)),
            !e || e.width || e.x || e.y ? e : {
                x: +$(t, ["x", "cx", "x1"]) || 0,
                y: +$(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
        }, W = function(t) {
            return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Y(t))
        }, X = function(t, e) {
            if (e) {
                var i, r = t.style;
                e in c && e !== R && (e = V),
                r.removeProperty ? (("ms" === (i = e.substr(0, 2)) || "webkit" === e.substr(0, 6)) && (e = "-" + e),
                r.removeProperty("--" === i ? e : e.replace(m, "-$1").toLowerCase())) : r.removeAttribute(e)
            }
        }, H = function(t, e, i, r, n, s) {
            var o = new h.J7(t._pt,e,i,0,1,s ? T : S);
            return t._pt = o,
            o.b = r,
            o.e = n,
            t._props.push(i),
            o
        }, q = {
            deg: 1,
            rad: 1,
            turn: 1
        }, K = {
            grid: 1,
            flex: 1
        }, G = function t(e, i, n, s) {
            var a, l, u, d, p = parseFloat(n) || 0, f = (n + "").trim().substr((p + "").length) || "px", m = o.style, v = g.test(i), y = "svg" === e.tagName.toLowerCase(), x = (y ? "client" : "offset") + (v ? "Width" : "Height"), b = "px" === s, P = "%" === s;
            if (s === f || !p || q[s] || q[f])
                return p;
            if ("px" === f || b || (p = t(e, i, n, "px")),
            d = e.getCTM && W(e),
            (P || "%" === f) && (c[i] || ~i.indexOf("adius")))
                return a = d ? e.getBBox()[v ? "width" : "height"] : e[x],
                (0,
                h.E_)(P ? p / a * 100 : p / 100 * a);
            if (m[v ? "width" : "height"] = 100 + (b ? f : s),
            l = "rem" !== s && ~i.indexOf("adius") || "em" === s && e.appendChild && !y ? e : e.parentNode,
            d && (l = (e.ownerSVGElement || {}).parentNode),
            l && l !== r && l.appendChild || (l = r.body),
            (u = l._gsap) && P && u.width && v && u.time === h.au.time && !u.uncache)
                return (0,
                h.E_)(p / u.width * 100);
            if (P && ("height" === i || "width" === i)) {
                var w = e.style[i];
                e.style[i] = 100 + s,
                a = e[x],
                w ? e.style[i] = w : X(e, i)
            } else
                (P || "%" === f) && !K[B(l, "display")] && (m.position = B(e, "position")),
                l === e && (m.position = "static"),
                l.appendChild(o),
                a = o[x],
                l.removeChild(o),
                m.position = "absolute";
            return v && P && ((u = (0,
            h.a0)(l)).time = h.au.time,
            u.width = l[x]),
            (0,
            h.E_)(b ? a * p / 100 : a && p ? 100 / a * p : 0)
        }, Z = function(t, e, i, r) {
            var n;
            return s || N(),
            e in y && "transform" !== e && ~(e = y[e]).indexOf(",") && (e = e.split(",")[0]),
            c[e] && "transform" !== e ? (n = tu(t, r),
            n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : th(B(t, R)) + " " + n.zOrigin + "px") : (!(n = t.style[e]) || "auto" === n || r || ~(n + "").indexOf("calc(")) && (n = ti[e] && ti[e](t, e, i) || B(t, e) || (0,
            h.n)(t, e) || +("opacity" === e)),
            i && !~(n + "").trim().indexOf(" ") ? G(t, e, n, i) + i : n
        }, J = function(t, e, i, r) {
            if (!i || "none" === i) {
                var n = U(e, t, 1)
                  , s = n && B(t, n, 1);
                s && s !== i ? (e = n,
                i = s) : "borderColor" === e && (i = B(t, "borderTopColor"))
            }
            var o, a, l, u, c, d, p, f, m, g, v, y = new h.J7(this._pt,t.style,e,0,1,h.l1), x = 0, b = 0;
            if (y.b = i,
            y.e = r,
            i += "",
            "auto" == (r += "") && (d = t.style[e],
            t.style[e] = r,
            r = B(t, e) || r,
            d ? t.style[e] = d : X(t, e)),
            o = [i, r],
            (0,
            h.Uc)(o),
            i = o[0],
            r = o[1],
            l = i.match(h.vM) || [],
            (r.match(h.vM) || []).length) {
                for (; a = h.vM.exec(r); )
                    p = a[0],
                    m = r.substring(x, a.index),
                    c ? c = (c + 1) % 5 : ("rgba(" === m.substr(-5) || "hsla(" === m.substr(-5)) && (c = 1),
                    p !== (d = l[b++] || "") && (u = parseFloat(d) || 0,
                    v = d.substr((u + "").length),
                    "=" === p.charAt(1) && (p = (0,
                    h.B0)(u, p) + v),
                    f = parseFloat(p),
                    g = p.substr((f + "").length),
                    x = h.vM.lastIndex - g.length,
                    g || (g = g || h.Yz.units[e] || v,
                    x !== r.length || (r += g,
                    y.e += g)),
                    v !== g && (u = G(t, e, d, g) || 0),
                    y._pt = {
                        _next: y._pt,
                        p: m || 1 === b ? m : ",",
                        s: u,
                        c: f - u,
                        m: c && c < 4 || "zIndex" === e ? Math.round : 0
                    });
                y.c = x < r.length ? r.substring(x, r.length) : ""
            } else
                y.r = "display" === e && "none" === r ? T : S;
            return h.Ks.test(r) && (y.e = 0),
            this._pt = y,
            y
        }, Q = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        }, tt = function(t) {
            var e = t.split(" ")
              , i = e[0]
              , r = e[1] || "50%";
            return ("top" === i || "bottom" === i || "left" === r || "right" === r) && (t = i,
            i = r,
            r = t),
            e[0] = Q[i] || i,
            e[1] = Q[r] || r,
            e.join(" ")
        }, te = function(t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var i, r, n, s = e.t, o = s.style, a = e.u, l = s._gsap;
                if ("all" === a || !0 === a)
                    o.cssText = "",
                    r = 1;
                else
                    for (n = (a = a.split(",")).length; --n > -1; )
                        c[i = a[n]] && (r = 1,
                        i = "transformOrigin" === i ? R : V),
                        X(s, i);
                r && (X(s, V),
                l && (l.svg && s.removeAttribute("transform"),
                o.scale = o.rotate = o.translate = "none",
                tu(s, 1),
                l.uncache = 1,
                k(o)))
            }
        }, ti = {
            clearProps: function(t, e, i, r, n) {
                if ("isFromStart" !== n.data) {
                    var s = t._pt = new h.J7(t._pt,e,i,0,0,te);
                    return s.u = r,
                    s.pr = -10,
                    s.tween = n,
                    t._props.push(i),
                    1
                }
            }
        }, tr = [1, 0, 0, 1, 0, 0], tn = {}, ts = function(t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        }, to = function(t) {
            var e = B(t, V);
            return ts(e) ? tr : e.substr(7).match(h.vX).map(h.E_)
        }, ta = function(t, e) {
            var i, r, s, o, a = t._gsap || (0,
            h.a0)(t), l = t.style, u = to(t);
            return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(s = t.transform.baseVal.consolidate().matrix).a, s.b, s.c, s.d, s.e, s.f]).join(",") ? tr : u : (u !== tr || t.offsetParent || t === n || a.svg || (s = l.display,
            l.display = "block",
            (i = t.parentNode) && (t.offsetParent || t.getBoundingClientRect().width) || (o = 1,
            r = t.nextElementSibling,
            n.appendChild(t)),
            u = to(t),
            s ? l.display = s : X(t, "display"),
            o && (r ? i.insertBefore(t, r) : i ? i.appendChild(t) : n.removeChild(t))),
            e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
        }, tl = function(t, e, i, r, n, s) {
            var o, a, l, u, h = t._gsap, c = n || ta(t, !0), d = h.xOrigin || 0, p = h.yOrigin || 0, f = h.xOffset || 0, m = h.yOffset || 0, g = c[0], v = c[1], y = c[2], x = c[3], b = c[4], P = c[5], w = e.split(" "), S = parseFloat(w[0]) || 0, T = parseFloat(w[1]) || 0;
            i ? c !== tr && (a = g * x - v * y) && (l = x / a * S + -y / a * T + (y * P - x * b) / a,
            u = -v / a * S + g / a * T - (g * P - v * b) / a,
            S = l,
            T = u) : (S = (o = Y(t)).x + (~w[0].indexOf("%") ? S / 100 * o.width : S),
            T = o.y + (~(w[1] || w[0]).indexOf("%") ? T / 100 * o.height : T)),
            r || !1 !== r && h.smooth ? (h.xOffset = f + ((b = S - d) * g + (P = T - p) * y) - b,
            h.yOffset = m + (b * v + P * x) - P) : h.xOffset = h.yOffset = 0,
            h.xOrigin = S,
            h.yOrigin = T,
            h.smooth = !!r,
            h.origin = e,
            h.originIsAbsolute = !!i,
            t.style[R] = "0px 0px",
            s && (H(s, h, "xOrigin", d, S),
            H(s, h, "yOrigin", p, T),
            H(s, h, "xOffset", f, h.xOffset),
            H(s, h, "yOffset", m, h.yOffset)),
            t.setAttribute("data-svg-origin", S + " " + T)
        }, tu = function(t, e) {
            var i = t._gsap || new h.n6(t);
            if ("x"in i && !e && !i.uncache)
                return i;
            var r, n, s, o, a, l, c, m, g, v, y, x, b, P, w, S, T, A, E, M, C, O, j, D, k, _, F, L, I, U, N, z, $ = t.style, Y = i.scaleX < 0, X = getComputedStyle(t), H = B(t, R) || "0";
            return r = n = s = l = c = m = g = v = y = 0,
            o = a = 1,
            i.svg = !!(t.getCTM && W(t)),
            X.translate && (("none" !== X.translate || "none" !== X.scale || "none" !== X.rotate) && ($[V] = ("none" !== X.translate ? "translate3d(" + (X.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== X.rotate ? "rotate(" + X.rotate + ") " : "") + ("none" !== X.scale ? "scale(" + X.scale.split(" ").join(",") + ") " : "") + ("none" !== X[V] ? X[V] : "")),
            $.scale = $.rotate = $.translate = "none"),
            P = ta(t, i.svg),
            i.svg && (i.uncache ? (k = t.getBBox(),
            H = i.xOrigin - k.x + "px " + (i.yOrigin - k.y) + "px",
            D = "") : D = !e && t.getAttribute("data-svg-origin"),
            tl(t, D || H, !!D || i.originIsAbsolute, !1 !== i.smooth, P)),
            x = i.xOrigin || 0,
            b = i.yOrigin || 0,
            P !== tr && (A = P[0],
            E = P[1],
            M = P[2],
            C = P[3],
            r = O = P[4],
            n = j = P[5],
            6 === P.length ? (o = Math.sqrt(A * A + E * E),
            a = Math.sqrt(C * C + M * M),
            l = A || E ? f(E, A) * d : 0,
            (g = M || C ? f(M, C) * d + l : 0) && (a *= Math.abs(Math.cos(g * p))),
            i.svg && (r -= x - (x * A + b * M),
            n -= b - (x * E + b * C))) : (z = P[6],
            U = P[7],
            F = P[8],
            L = P[9],
            I = P[10],
            N = P[11],
            r = P[12],
            n = P[13],
            s = P[14],
            c = (w = f(z, I)) * d,
            w && (D = O * (S = Math.cos(-w)) + F * (T = Math.sin(-w)),
            k = j * S + L * T,
            _ = z * S + I * T,
            F = -(O * T) + F * S,
            L = -(j * T) + L * S,
            I = -(z * T) + I * S,
            N = -(U * T) + N * S,
            O = D,
            j = k,
            z = _),
            m = (w = f(-M, I)) * d,
            w && (D = A * (S = Math.cos(-w)) - F * (T = Math.sin(-w)),
            k = E * S - L * T,
            _ = M * S - I * T,
            N = C * T + N * S,
            A = D,
            E = k,
            M = _),
            l = (w = f(E, A)) * d,
            w && (D = A * (S = Math.cos(w)) + E * (T = Math.sin(w)),
            k = O * S + j * T,
            E = E * S - A * T,
            j = j * S - O * T,
            A = D,
            O = k),
            c && Math.abs(c) + Math.abs(l) > 359.9 && (c = l = 0,
            m = 180 - m),
            o = (0,
            h.E_)(Math.sqrt(A * A + E * E + M * M)),
            a = (0,
            h.E_)(Math.sqrt(j * j + z * z)),
            g = Math.abs(w = f(O, j)) > 2e-4 ? w * d : 0,
            y = N ? 1 / (N < 0 ? -N : N) : 0),
            i.svg && (D = t.getAttribute("transform"),
            i.forceCSS = t.setAttribute("transform", "") || !ts(B(t, V)),
            D && t.setAttribute("transform", D))),
            Math.abs(g) > 90 && 270 > Math.abs(g) && (Y ? (o *= -1,
            g += l <= 0 ? 180 : -180,
            l += l <= 0 ? 180 : -180) : (a *= -1,
            g += g <= 0 ? 180 : -180)),
            e = e || i.uncache,
            i.x = r - ((i.xPercent = r && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + "px",
            i.y = n - ((i.yPercent = n && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + "px",
            i.z = s + "px",
            i.scaleX = (0,
            h.E_)(o),
            i.scaleY = (0,
            h.E_)(a),
            i.rotation = (0,
            h.E_)(l) + "deg",
            i.rotationX = (0,
            h.E_)(c) + "deg",
            i.rotationY = (0,
            h.E_)(m) + "deg",
            i.skewX = g + "deg",
            i.skewY = v + "deg",
            i.transformPerspective = y + "px",
            (i.zOrigin = parseFloat(H.split(" ")[2]) || !e && i.zOrigin || 0) && ($[R] = th(H)),
            i.xOffset = i.yOffset = 0,
            i.force3D = h.Yz.force3D,
            i.renderTransform = i.svg ? tm : u ? tf : td,
            i.uncache = 0,
            i
        }, th = function(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        }, tc = function(t, e, i) {
            var r = (0,
            h.l_)(e);
            return (0,
            h.E_)(parseFloat(e) + parseFloat(G(t, "x", i + "px", r))) + r
        }, td = function(t, e) {
            e.z = "0px",
            e.rotationY = e.rotationX = "0deg",
            e.force3D = 0,
            tf(t, e)
        }, tp = "0deg", tf = function(t, e) {
            var i = e || this
              , r = i.xPercent
              , n = i.yPercent
              , s = i.x
              , o = i.y
              , a = i.z
              , l = i.rotation
              , u = i.rotationY
              , h = i.rotationX
              , c = i.skewX
              , d = i.skewY
              , f = i.scaleX
              , m = i.scaleY
              , g = i.transformPerspective
              , v = i.force3D
              , y = i.target
              , x = i.zOrigin
              , b = ""
              , P = "auto" === v && t && 1 !== t || !0 === v;
            if (x && (h !== tp || u !== tp)) {
                var w, S = parseFloat(u) * p, T = Math.sin(S), A = Math.cos(S);
                s = tc(y, s, -(T * (w = Math.cos(S = parseFloat(h) * p)) * x)),
                o = tc(y, o, -(-Math.sin(S) * x)),
                a = tc(y, a, -(A * w * x) + x)
            }
            "0px" !== g && (b += "perspective(" + g + ") "),
            (r || n) && (b += "translate(" + r + "%, " + n + "%) "),
            (P || "0px" !== s || "0px" !== o || "0px" !== a) && (b += "0px" !== a || P ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + ") "),
            l !== tp && (b += "rotate(" + l + ") "),
            u !== tp && (b += "rotateY(" + u + ") "),
            h !== tp && (b += "rotateX(" + h + ") "),
            (c !== tp || d !== tp) && (b += "skew(" + c + ", " + d + ") "),
            (1 !== f || 1 !== m) && (b += "scale(" + f + ", " + m + ") "),
            y.style[V] = b || "translate(0, 0)"
        }, tm = function(t, e) {
            var i, r, n, s, o, a = e || this, l = a.xPercent, u = a.yPercent, c = a.x, d = a.y, f = a.rotation, m = a.skewX, g = a.skewY, v = a.scaleX, y = a.scaleY, x = a.target, b = a.xOrigin, P = a.yOrigin, w = a.xOffset, S = a.yOffset, T = a.forceCSS, A = parseFloat(c), E = parseFloat(d);
            f = parseFloat(f),
            m = parseFloat(m),
            (g = parseFloat(g)) && (m += g = parseFloat(g),
            f += g),
            f || m ? (f *= p,
            m *= p,
            i = Math.cos(f) * v,
            r = Math.sin(f) * v,
            n = -(Math.sin(f - m) * y),
            s = Math.cos(f - m) * y,
            m && (g *= p,
            n *= o = Math.sqrt(1 + (o = Math.tan(m - g)) * o),
            s *= o,
            g && (i *= o = Math.sqrt(1 + (o = Math.tan(g)) * o),
            r *= o)),
            i = (0,
            h.E_)(i),
            r = (0,
            h.E_)(r),
            n = (0,
            h.E_)(n),
            s = (0,
            h.E_)(s)) : (i = v,
            s = y,
            r = n = 0),
            (A && !~(c + "").indexOf("px") || E && !~(d + "").indexOf("px")) && (A = G(x, "x", c, "px"),
            E = G(x, "y", d, "px")),
            (b || P || w || S) && (A = (0,
            h.E_)(A + b - (b * i + P * n) + w),
            E = (0,
            h.E_)(E + P - (b * r + P * s) + S)),
            (l || u) && (o = x.getBBox(),
            A = (0,
            h.E_)(A + l / 100 * o.width),
            E = (0,
            h.E_)(E + u / 100 * o.height)),
            o = "matrix(" + i + "," + r + "," + n + "," + s + "," + A + "," + E + ")",
            x.setAttribute("transform", o),
            T && (x.style[V] = o)
        }, tg = function(t, e, i, r, n) {
            var s, o, a = (0,
            h.vQ)(n), l = parseFloat(n) * (a && ~n.indexOf("rad") ? d : 1) - r, u = r + l + "deg";
            return a && ("short" === (s = n.split("_")[1]) && (l %= 360) != l % 180 && (l += l < 0 ? 360 : -360),
            "cw" === s && l < 0 ? l = (l + 36e9) % 360 - 360 * ~~(l / 360) : "ccw" === s && l > 0 && (l = (l - 36e9) % 360 - 360 * ~~(l / 360))),
            t._pt = o = new h.J7(t._pt,e,i,r,l,b),
            o.e = u,
            o.u = "deg",
            t._props.push(i),
            o
        }, tv = function(t, e) {
            for (var i in e)
                t[i] = e[i];
            return t
        }, ty = function(t, e, i) {
            var r, n, s, o, a, l, u, d = tv({}, i._gsap), p = i.style;
            for (n in d.svg ? (s = i.getAttribute("transform"),
            i.setAttribute("transform", ""),
            p[V] = e,
            r = tu(i, 1),
            X(i, V),
            i.setAttribute("transform", s)) : (s = getComputedStyle(i)[V],
            p[V] = e,
            r = tu(i, 1),
            p[V] = s),
            c)
                (s = d[n]) !== (o = r[n]) && 0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) && (a = (0,
                h.l_)(s) !== (u = (0,
                h.l_)(o)) ? G(i, n, s, u) : parseFloat(s),
                l = parseFloat(o),
                t._pt = new h.J7(t._pt,r,n,a,l - a,x),
                t._pt.u = u || 0,
                t._props.push(n));
            tv(r, d)
        };
        (0,
        h.fA)("padding,margin,Width,Radius", function(t, e) {
            var i = "Right"
              , r = "Bottom"
              , n = "Left"
              , s = (e < 3 ? ["Top", i, r, n] : ["Top" + n, "Top" + i, r + i, r + n]).map(function(i) {
                return e < 2 ? t + i : "border" + i + t
            });
            ti[e > 1 ? "border" + t : t] = function(t, e, i, r, n) {
                var o, a;
                if (arguments.length < 4)
                    return 5 === (a = (o = s.map(function(e) {
                        return Z(t, e, i)
                    })).join(" ")).split(o[0]).length ? o[0] : a;
                o = (r + "").split(" "),
                a = {},
                s.forEach(function(t, e) {
                    return a[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
                }),
                t.init(e, a, n)
            }
        });
        var tx = {
            name: "css",
            register: N,
            targetTest: function(t) {
                return t.style && t.nodeType
            },
            init: function(t, e, i, r, n) {
                var o, a, l, u, d, p, f, m, g, b, S, T, A, E, M, C, O = this._props, j = t.style, D = i.vars.startAt;
                for (f in s || N(),
                this.styles = this.styles || F(t),
                C = this.styles.props,
                this.tween = i,
                e) {
                    if ("autoRound" !== f) {
                        if (a = e[f],
                        !(h.wU[f] && (0,
                        h.Zm)(f, e, i, r, t, n))) {
                            if (d = typeof a,
                            p = ti[f],
                            "function" === d && (d = typeof (a = a.call(i, r, t, n))),
                            "string" === d && ~a.indexOf("random(") && (a = (0,
                            h.Vy)(a)),
                            p)
                                p(this, t, f, a, i) && (M = 1);
                            else if ("--" === f.substr(0, 2))
                                o = (getComputedStyle(t).getPropertyValue(f) + "").trim(),
                                a += "",
                                h.qA.lastIndex = 0,
                                h.qA.test(o) || (m = (0,
                                h.l_)(o),
                                g = (0,
                                h.l_)(a)),
                                g ? m !== g && (o = G(t, f, o, g) + g) : m && (a += m),
                                this.add(j, "setProperty", o, a, r, n, 0, 0, f),
                                O.push(f),
                                C.push(f, 0, j[f]);
                            else if ("undefined" !== d) {
                                if (D && f in D ? (o = "function" == typeof D[f] ? D[f].call(i, r, t, n) : D[f],
                                (0,
                                h.vQ)(o) && ~o.indexOf("random(") && (o = (0,
                                h.Vy)(o)),
                                (0,
                                h.l_)(o + "") || "auto" === o || (o += h.Yz.units[f] || (0,
                                h.l_)(Z(t, f)) || ""),
                                "=" === (o + "").charAt(1) && (o = Z(t, f))) : o = Z(t, f),
                                u = parseFloat(o),
                                (b = "string" === d && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)),
                                l = parseFloat(a),
                                f in y && ("autoAlpha" === f && (1 === u && "hidden" === Z(t, "visibility") && l && (u = 0),
                                C.push("visibility", 0, j.visibility),
                                H(this, j, "visibility", u ? "inherit" : "hidden", l ? "inherit" : "hidden", !l)),
                                "scale" !== f && "transform" !== f && ~(f = y[f]).indexOf(",") && (f = f.split(",")[0])),
                                S = f in c) {
                                    if (this.styles.save(f),
                                    T || ((A = t._gsap).renderTransform && !e.parseTransform || tu(t, e.parseTransform),
                                    E = !1 !== e.smoothOrigin && A.smooth,
                                    (T = this._pt = new h.J7(this._pt,j,V,0,1,A.renderTransform,A,0,-1)).dep = 1),
                                    "scale" === f)
                                        this._pt = new h.J7(this._pt,A,"scaleY",A.scaleY,(b ? (0,
                                        h.B0)(A.scaleY, b + l) : l) - A.scaleY || 0,x),
                                        this._pt.u = 0,
                                        O.push("scaleY", f),
                                        f += "X";
                                    else if ("transformOrigin" === f) {
                                        C.push(R, 0, j[R]),
                                        a = tt(a),
                                        A.svg ? tl(t, a, 0, E, 0, this) : ((g = parseFloat(a.split(" ")[2]) || 0) !== A.zOrigin && H(this, A, "zOrigin", A.zOrigin, g),
                                        H(this, j, f, th(o), th(a)));
                                        continue
                                    } else if ("svgOrigin" === f) {
                                        tl(t, a, 1, E, 0, this);
                                        continue
                                    } else if (f in tn) {
                                        tg(this, A, f, u, b ? (0,
                                        h.B0)(u, b + a) : a);
                                        continue
                                    } else if ("smoothOrigin" === f) {
                                        H(this, A, "smooth", A.smooth, a);
                                        continue
                                    } else if ("force3D" === f) {
                                        A[f] = a;
                                        continue
                                    } else if ("transform" === f) {
                                        ty(this, a, t);
                                        continue
                                    }
                                } else
                                    f in j || (f = U(f) || f);
                                if (S || (l || 0 === l) && (u || 0 === u) && !v.test(a) && f in j)
                                    m = (o + "").substr((u + "").length),
                                    l || (l = 0),
                                    g = (0,
                                    h.l_)(a) || (f in h.Yz.units ? h.Yz.units[f] : m),
                                    m !== g && (u = G(t, f, o, g)),
                                    this._pt = new h.J7(this._pt,S ? A : j,f,u,(b ? (0,
                                    h.B0)(u, b + l) : l) - u,S || "px" !== g && "zIndex" !== f || !1 === e.autoRound ? x : w),
                                    this._pt.u = g || 0,
                                    m !== g && "%" !== g && (this._pt.b = o,
                                    this._pt.r = P);
                                else if (f in j)
                                    J.call(this, t, f, o, b ? b + a : a);
                                else if (f in t)
                                    this.add(t, f, o || t[f], b ? b + a : a, r, n);
                                else if ("parseTransform" !== f) {
                                    (0,
                                    h.dg)(f, a);
                                    continue
                                }
                                S || (f in j ? C.push(f, 0, j[f]) : "function" == typeof t[f] ? C.push(f, 2, t[f]()) : C.push(f, 1, o || t[f])),
                                O.push(f)
                            }
                        }
                    }
                }
                M && (0,
                h.St)(this)
            },
            render: function(t, e) {
                if (e.tween._time || !l())
                    for (var i = e._pt; i; )
                        i.r(t, i.d),
                        i = i._next;
                else
                    e.styles.revert()
            },
            get: Z,
            aliases: y,
            getSetter: function(t, e, i) {
                var r = y[e];
                return r && 0 > r.indexOf(",") && (e = r),
                e in c && e !== R && (t._gsap.x || Z(t, "x")) ? i && a === i ? "scale" === e ? C : M : (a = i || {},
                "scale" === e ? O : j) : t.style && !(0,
                h.OF)(t.style[e]) ? A : ~e.indexOf("-") ? E : (0,
                h.Dx)(t, e)
            },
            core: {
                _removeProperty: X,
                _getMatrix: ta
            }
        };
        h.os.utils.checkPrefix = U,
        h.os.core.getStyleSaver = F,
        function(t, e, i, r) {
            var n = (0,
            h.fA)(t + "," + e + "," + i, function(t) {
                c[t] = 1
            });
            (0,
            h.fA)(e, function(t) {
                h.Yz.units[t] = "deg",
                tn[t] = 1
            }),
            y[n[13]] = t + "," + e,
            (0,
            h.fA)(r, function(t) {
                var e = t.split(":");
                y[e[1]] = n[e[0]]
            })
        }("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),
        (0,
        h.fA)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
            h.Yz.units[t] = "px"
        }),
        h.os.registerPlugin(tx);
        var tb = h.os.registerPlugin(tx) || h.os;
        tb.core.Tween
    }
    ,
    901: (t, e, i) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "RouterContext", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        let r = i(8229)._(i(2115)).default.createContext(null)
    }
    ,
    1193: (t, e) => {
        "use strict";
        function i(t) {
            var e;
            let {config: i, src: r, width: n, quality: s} = t
              , o = s || (null == (e = i.qualities) ? void 0 : e.reduce( (t, e) => Math.abs(e - 75) < Math.abs(t - 75) ? e : t)) || 75;
            return i.path + "?url=" + encodeURIComponent(r) + "&w=" + n + "&q=" + o + (r.startsWith("/_next/static/media/"),
            "")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        i.__next_img_default = !0;
        let r = i
    }
    ,
    1469: (t, e, i) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        !function(t, e) {
            for (var i in e)
                Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: e[i]
                })
        }(e, {
            default: function() {
                return l
            },
            getImageProps: function() {
                return a
            }
        });
        let r = i(8229)
          , n = i(8883)
          , s = i(3063)
          , o = r._(i(1193));
        function a(t) {
            let {props: e} = (0,
            n.getImgProps)(t, {
                defaultLoader: o.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                }
            });
            for (let[t,i] of Object.entries(e))
                void 0 === i && delete e[t];
            return {
                props: e
            }
        }
        let l = s.Image
    }
    ,
    2464: (t, e, i) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "AmpStateContext", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        let r = i(8229)._(i(2115)).default.createContext({})
    }
    ,
    2757: (t, e, i) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        !function(t, e) {
            for (var i in e)
                Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: e[i]
                })
        }(e, {
            formatUrl: function() {
                return s
            },
            formatWithValidation: function() {
                return a
            },
            urlObjectKeys: function() {
                return o
            }
        });
        let r = i(6966)._(i(8859))
          , n = /https?|ftp|gopher|file/;
        function s(t) {
            let {auth: e, hostname: i} = t
              , s = t.protocol || ""
              , o = t.pathname || ""
              , a = t.hash || ""
              , l = t.query || ""
              , u = !1;
            e = e ? encodeURIComponent(e).replace(/%3A/i, ":") + "@" : "",
            t.host ? u = e + t.host : i && (u = e + (~i.indexOf(":") ? "[" + i + "]" : i),
            t.port && (u += ":" + t.port)),
            l && "object" == typeof l && (l = String(r.urlQueryToSearchParams(l)));
            let h = t.search || l && "?" + l || "";
            return s && !s.endsWith(":") && (s += ":"),
            t.slashes || (!s || n.test(s)) && !1 !== u ? (u = "//" + (u || ""),
            o && "/" !== o[0] && (o = "/" + o)) : u || (u = ""),
            a && "#" !== a[0] && (a = "#" + a),
            h && "?" !== h[0] && (h = "?" + h),
            "" + s + u + (o = o.replace(/[?#]/g, encodeURIComponent)) + (h = h.replace("#", "%23")) + a
        }
        let o = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
        function a(t) {
            return s(t)
        }
    }
    ,
    3063: (t, e, i) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "Image", {
            enumerable: !0,
            get: function() {
                return b
            }
        });
        let r = i(8229)
          , n = i(6966)
          , s = i(5155)
          , o = n._(i(2115))
          , a = r._(i(7650))
          , l = r._(i(5564))
          , u = i(8883)
          , h = i(5840)
          , c = i(6752);
        i(3230);
        let d = i(901)
          , p = r._(i(1193))
          , f = i(6654)
          , m = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };
        function g(t, e, i, r, n, s, o) {
            let a = null == t ? void 0 : t.src;
            t && t["data-loaded-src"] !== a && (t["data-loaded-src"] = a,
            ("decode"in t ? t.decode() : Promise.resolve()).catch( () => {}
            ).then( () => {
                if (t.parentElement && t.isConnected) {
                    if ("empty" !== e && n(!0),
                    null == i ? void 0 : i.current) {
                        let e = new Event("load");
                        Object.defineProperty(e, "target", {
                            writable: !1,
                            value: t
                        });
                        let r = !1
                          , n = !1;
                        i.current({
                            ...e,
                            nativeEvent: e,
                            currentTarget: t,
                            target: t,
                            isDefaultPrevented: () => r,
                            isPropagationStopped: () => n,
                            persist: () => {}
                            ,
                            preventDefault: () => {
                                r = !0,
                                e.preventDefault()
                            }
                            ,
                            stopPropagation: () => {
                                n = !0,
                                e.stopPropagation()
                            }
                        })
                    }
                    (null == r ? void 0 : r.current) && r.current(t)
                }
            }
            ))
        }
        function v(t) {
            return o.use ? {
                fetchPriority: t
            } : {
                fetchpriority: t
            }
        }
        let y = (0,
        o.forwardRef)( (t, e) => {
            let {src: i, srcSet: r, sizes: n, height: a, width: l, decoding: u, className: h, style: c, fetchPriority: d, placeholder: p, loading: m, unoptimized: y, fill: x, onLoadRef: b, onLoadingCompleteRef: P, setBlurComplete: w, setShowAltText: S, sizesInput: T, onLoad: A, onError: E, ...M} = t
              , C = (0,
            o.useCallback)(t => {
                t && (E && (t.src = t.src),
                t.complete && g(t, p, b, P, w, y, T))
            }
            , [i, p, b, P, w, E, y, T])
              , O = (0,
            f.useMergedRef)(e, C);
            return (0,
            s.jsx)("img", {
                ...M,
                ...v(d),
                loading: m,
                width: l,
                height: a,
                decoding: u,
                "data-nimg": x ? "fill" : "1",
                className: h,
                style: c,
                sizes: n,
                srcSet: r,
                src: i,
                ref: O,
                onLoad: t => {
                    g(t.currentTarget, p, b, P, w, y, T)
                }
                ,
                onError: t => {
                    S(!0),
                    "empty" !== p && w(!0),
                    E && E(t)
                }
            })
        }
        );
        function x(t) {
            let {isAppRouter: e, imgAttributes: i} = t
              , r = {
                as: "image",
                imageSrcSet: i.srcSet,
                imageSizes: i.sizes,
                crossOrigin: i.crossOrigin,
                referrerPolicy: i.referrerPolicy,
                ...v(i.fetchPriority)
            };
            return e && a.default.preload ? (a.default.preload(i.src, r),
            null) : (0,
            s.jsx)(l.default, {
                children: (0,
                s.jsx)("link", {
                    rel: "preload",
                    href: i.srcSet ? void 0 : i.src,
                    ...r
                }, "__nimg-" + i.src + i.srcSet + i.sizes)
            })
        }
        let b = (0,
        o.forwardRef)( (t, e) => {
            let i = (0,
            o.useContext)(d.RouterContext)
              , r = (0,
            o.useContext)(c.ImageConfigContext)
              , n = (0,
            o.useMemo)( () => {
                var t;
                let e = m || r || h.imageConfigDefault
                  , i = [...e.deviceSizes, ...e.imageSizes].sort( (t, e) => t - e)
                  , n = e.deviceSizes.sort( (t, e) => t - e)
                  , s = null == (t = e.qualities) ? void 0 : t.sort( (t, e) => t - e);
                return {
                    ...e,
                    allSizes: i,
                    deviceSizes: n,
                    qualities: s
                }
            }
            , [r])
              , {onLoad: a, onLoadingComplete: l} = t
              , f = (0,
            o.useRef)(a);
            (0,
            o.useEffect)( () => {
                f.current = a
            }
            , [a]);
            let g = (0,
            o.useRef)(l);
            (0,
            o.useEffect)( () => {
                g.current = l
            }
            , [l]);
            let[v,b] = (0,
            o.useState)(!1)
              , [P,w] = (0,
            o.useState)(!1)
              , {props: S, meta: T} = (0,
            u.getImgProps)(t, {
                defaultLoader: p.default,
                imgConf: n,
                blurComplete: v,
                showAltText: P
            });
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)(y, {
                    ...S,
                    unoptimized: T.unoptimized,
                    placeholder: T.placeholder,
                    fill: T.fill,
                    onLoadRef: f,
                    onLoadingCompleteRef: g,
                    setBlurComplete: b,
                    setShowAltText: w,
                    sizesInput: t.sizes,
                    ref: e
                }), T.priority ? (0,
                s.jsx)(x, {
                    isAppRouter: !i,
                    imgAttributes: S
                }) : null]
            })
        }
        );
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    }
    ,
    5029: (t, e, i) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let r = i(2115)
          , n = r.useLayoutEffect
          , s = r.useEffect;
        function o(t) {
            let {headManager: e, reduceComponentsToState: i} = t;
            function o() {
                if (e && e.mountedInstances) {
                    let n = r.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));
                    e.updateHead(i(n, t))
                }
            }
            return n( () => {
                var i;
                return null == e || null == (i = e.mountedInstances) || i.add(t.children),
                () => {
                    var i;
                    null == e || null == (i = e.mountedInstances) || i.delete(t.children)
                }
            }
            ),
            n( () => (e && (e._pendingUpdate = o),
            () => {
                e && (e._pendingUpdate = o)
            }
            )),
            s( () => (e && e._pendingUpdate && (e._pendingUpdate(),
            e._pendingUpdate = null),
            () => {
                e && e._pendingUpdate && (e._pendingUpdate(),
                e._pendingUpdate = null)
            }
            )),
            null
        }
    }
    ,
    5100: (t, e) => {
        "use strict";
        function i(t) {
            let {widthInt: e, heightInt: i, blurWidth: r, blurHeight: n, blurDataURL: s, objectFit: o} = t
              , a = r ? 40 * r : e
              , l = n ? 40 * n : i
              , u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
            return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + s + "'/%3E%3C/svg%3E"
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "getImageBlurSvg", {
            enumerable: !0,
            get: function() {
                return i
            }
        })
    }
    ,
    5564: (t, e, i) => {
        "use strict";
        var r = i(9509);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        !function(t, e) {
            for (var i in e)
                Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: e[i]
                })
        }(e, {
            default: function() {
                return g
            },
            defaultHead: function() {
                return d
            }
        });
        let n = i(8229)
          , s = i(6966)
          , o = i(5155)
          , a = s._(i(2115))
          , l = n._(i(5029))
          , u = i(2464)
          , h = i(2830)
          , c = i(7544);
        function d(t) {
            void 0 === t && (t = !1);
            let e = [(0,
            o.jsx)("meta", {
                charSet: "utf-8"
            }, "charset")];
            return t || e.push((0,
            o.jsx)("meta", {
                name: "viewport",
                content: "width=device-width"
            }, "viewport")),
            e
        }
        function p(t, e) {
            return "string" == typeof e || "number" == typeof e ? t : e.type === a.default.Fragment ? t.concat(a.default.Children.toArray(e.props.children).reduce( (t, e) => "string" == typeof e || "number" == typeof e ? t : t.concat(e), [])) : t.concat(e)
        }
        i(3230);
        let f = ["name", "httpEquiv", "charSet", "itemProp"];
        function m(t, e) {
            let {inAmpMode: i} = e;
            return t.reduce(p, []).reverse().concat(d(i).reverse()).filter(function() {
                let t = new Set
                  , e = new Set
                  , i = new Set
                  , r = {};
                return n => {
                    let s = !0
                      , o = !1;
                    if (n.key && "number" != typeof n.key && n.key.indexOf("$") > 0) {
                        o = !0;
                        let e = n.key.slice(n.key.indexOf("$") + 1);
                        t.has(e) ? s = !1 : t.add(e)
                    }
                    switch (n.type) {
                    case "title":
                    case "base":
                        e.has(n.type) ? s = !1 : e.add(n.type);
                        break;
                    case "meta":
                        for (let t = 0, e = f.length; t < e; t++) {
                            let e = f[t];
                            if (n.props.hasOwnProperty(e)) {
                                if ("charSet" === e)
                                    i.has(e) ? s = !1 : i.add(e);
                                else {
                                    let t = n.props[e]
                                      , i = r[e] || new Set;
                                    ("name" !== e || !o) && i.has(t) ? s = !1 : (i.add(t),
                                    r[e] = i)
                                }
                            }
                        }
                    }
                    return s
                }
            }()).reverse().map( (t, e) => {
                let n = t.key || e;
                if (r.env.__NEXT_OPTIMIZE_FONTS && !i && "link" === t.type && t.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(e => t.props.href.startsWith(e))) {
                    let e = {
                        ...t.props || {}
                    };
                    return e["data-href"] = e.href,
                    e.href = void 0,
                    e["data-optimized-fonts"] = !0,
                    a.default.cloneElement(t, e)
                }
                return a.default.cloneElement(t, {
                    key: n
                })
            }
            )
        }
        let g = function(t) {
            let {children: e} = t
              , i = (0,
            a.useContext)(u.AmpStateContext)
              , r = (0,
            a.useContext)(h.HeadManagerContext);
            return (0,
            o.jsx)(l.default, {
                reduceComponentsToState: m,
                headManager: r,
                inAmpMode: (0,
                c.isInAmpMode)(i),
                children: e
            })
        };
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    }
    ,
    5840: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        !function(t, e) {
            for (var i in e)
                Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: e[i]
                })
        }(e, {
            VALID_LOADERS: function() {
                return i
            },
            imageConfigDefault: function() {
                return r
            }
        });
        let i = ["default", "imgix", "cloudinary", "akamai", "custom"]
          , r = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 60,
            formats: ["image/webp"],
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "attachment",
            localPatterns: void 0,
            remotePatterns: [],
            qualities: void 0,
            unoptimized: !1
        }
    }
    ,
    6654: (t, e, i) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "useMergedRef", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let r = i(2115);
        function n(t, e) {
            let i = (0,
            r.useRef)(null)
              , n = (0,
            r.useRef)(null);
            return (0,
            r.useCallback)(r => {
                if (null === r) {
                    let t = i.current;
                    t && (i.current = null,
                    t());
                    let e = n.current;
                    e && (n.current = null,
                    e())
                } else
                    t && (i.current = s(t, r)),
                    e && (n.current = s(e, r))
            }
            , [t, e])
        }
        function s(t, e) {
            if ("function" != typeof t)
                return t.current = e,
                () => {
                    t.current = null
                }
                ;
            {
                let i = t(e);
                return "function" == typeof i ? i : () => t(null)
            }
        }
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    }
    ,
    6675: (t, e, i) => {
        "use strict";
        let r;
        function n(t) {
            return null !== t && "object" == typeof t && "function" == typeof t.start
        }
        function s(t) {
            let e = [{}, {}];
            return null == t || t.values.forEach( (t, i) => {
                e[0][i] = t.get(),
                e[1][i] = t.getVelocity()
            }
            ),
            e
        }
        function o(t, e, i, r) {
            if ("function" == typeof e) {
                let[n,o] = s(r);
                e = e(void 0 !== i ? i : t.custom, n, o)
            }
            if ("string" == typeof e && (e = t.variants && t.variants[e]),
            "function" == typeof e) {
                let[n,o] = s(r);
                e = e(void 0 !== i ? i : t.custom, n, o)
            }
            return e
        }
        function a(t, e, i) {
            let r = t.getProps();
            return o(r, e, void 0 !== i ? i : r.custom, t)
        }
        function l(t, e) {
            return t ? t[e] || t.default || t : void 0
        }
        i.d(e, {
            hJ: () => sg
        });
        let u = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
          , h = new Set(u)
          , c = new Set(["width", "height", "top", "left", "right", "bottom", ...u])
          , d = t => Array.isArray(t)
          , p = t => !!(t && "object" == typeof t && t.mix && t.toValue)
          , f = t => d(t) ? t[t.length - 1] || 0 : t
          , m = {
            skipAnimations: !1,
            useManualTiming: !1
        }
          , g = t => t
          , v = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
          , y = {
            value: null,
            addProjectionMetrics: null
        };
        function x(t, e) {
            let i = !1
              , r = !0
              , n = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            }
              , s = () => i = !0
              , o = v.reduce( (t, i) => (t[i] = function(t, e) {
                let i = new Set
                  , r = new Set
                  , n = !1
                  , s = !1
                  , o = new WeakSet
                  , a = {
                    delta: 0,
                    timestamp: 0,
                    isProcessing: !1
                }
                  , l = 0;
                function u(e) {
                    o.has(e) && (h.schedule(e),
                    t()),
                    l++,
                    e(a)
                }
                let h = {
                    schedule: (t, e=!1, s=!1) => {
                        let a = s && n ? i : r;
                        return e && o.add(t),
                        a.has(t) || a.add(t),
                        t
                    }
                    ,
                    cancel: t => {
                        r.delete(t),
                        o.delete(t)
                    }
                    ,
                    process: t => {
                        if (a = t,
                        n) {
                            s = !0;
                            return
                        }
                        n = !0,
                        [i,r] = [r, i],
                        i.forEach(u),
                        e && y.value && y.value.frameloop[e].push(l),
                        l = 0,
                        i.clear(),
                        n = !1,
                        s && (s = !1,
                        h.process(t))
                    }
                };
                return h
            }(s, e ? i : void 0),
            t), {})
              , {read: a, resolveKeyframes: l, update: u, preRender: h, render: c, postRender: d} = o
              , p = () => {
                let s = m.useManualTiming ? n.timestamp : performance.now();
                i = !1,
                m.useManualTiming || (n.delta = r ? 1e3 / 60 : Math.max(Math.min(s - n.timestamp, 40), 1)),
                n.timestamp = s,
                n.isProcessing = !0,
                a.process(n),
                l.process(n),
                u.process(n),
                h.process(n),
                c.process(n),
                d.process(n),
                n.isProcessing = !1,
                i && e && (r = !1,
                t(p))
            }
              , f = () => {
                i = !0,
                r = !0,
                n.isProcessing || t(p)
            }
            ;
            return {
                schedule: v.reduce( (t, e) => {
                    let r = o[e];
                    return t[e] = (t, e=!1, n=!1) => (i || f(),
                    r.schedule(t, e, n)),
                    t
                }
                , {}),
                cancel: t => {
                    for (let e = 0; e < v.length; e++)
                        o[v[e]].cancel(t)
                }
                ,
                state: n,
                steps: o
            }
        }
        let {schedule: b, cancel: P, state: w, steps: S} = x("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : g, !0);
        function T() {
            r = void 0
        }
        let A = {
            now: () => (void 0 === r && A.set(w.isProcessing || m.useManualTiming ? w.timestamp : performance.now()),
            r),
            set: t => {
                r = t,
                queueMicrotask(T)
            }
        };
        function E(t, e) {
            -1 === t.indexOf(e) && t.push(e)
        }
        function M(t, e) {
            let i = t.indexOf(e);
            i > -1 && t.splice(i, 1)
        }
        class C {
            constructor() {
                this.subscriptions = []
            }
            add(t) {
                return E(this.subscriptions, t),
                () => M(this.subscriptions, t)
            }
            notify(t, e, i) {
                let r = this.subscriptions.length;
                if (r) {
                    if (1 === r)
                        this.subscriptions[0](t, e, i);
                    else
                        for (let n = 0; n < r; n++) {
                            let r = this.subscriptions[n];
                            r && r(t, e, i)
                        }
                }
            }
            getSize() {
                return this.subscriptions.length
            }
            clear() {
                this.subscriptions.length = 0
            }
        }
        let O = t => !isNaN(parseFloat(t))
          , j = {
            current: void 0
        };
        class V {
            constructor(t, e={}) {
                this.version = "12.4.10",
                this.canTrackVelocity = null,
                this.events = {},
                this.updateAndNotify = (t, e=!0) => {
                    let i = A.now();
                    this.updatedAt !== i && this.setPrevFrameValue(),
                    this.prev = this.current,
                    this.setCurrent(t),
                    this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
                    e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                }
                ,
                this.hasAnimated = !1,
                this.setCurrent(t),
                this.owner = e.owner
            }
            setCurrent(t) {
                this.current = t,
                this.updatedAt = A.now(),
                null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = O(this.current))
            }
            setPrevFrameValue(t=this.current) {
                this.prevFrameValue = t,
                this.prevUpdatedAt = this.updatedAt
            }
            onChange(t) {
                return this.on("change", t)
            }
            on(t, e) {
                this.events[t] || (this.events[t] = new C);
                let i = this.events[t].add(e);
                return "change" === t ? () => {
                    i(),
                    b.read( () => {
                        this.events.change.getSize() || this.stop()
                    }
                    )
                }
                : i
            }
            clearListeners() {
                for (let t in this.events)
                    this.events[t].clear()
            }
            attach(t, e) {
                this.passiveEffect = t,
                this.stopPassiveEffect = e
            }
            set(t, e=!0) {
                e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
            }
            setWithVelocity(t, e, i) {
                this.set(e),
                this.prev = void 0,
                this.prevFrameValue = t,
                this.prevUpdatedAt = this.updatedAt - i
            }
            jump(t, e=!0) {
                this.updateAndNotify(t),
                this.prev = t,
                this.prevUpdatedAt = this.prevFrameValue = void 0,
                e && this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
            get() {
                return j.current && j.current.push(this),
                this.current
            }
            getPrevious() {
                return this.prev
            }
            getVelocity() {
                var t;
                let e = A.now();
                if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30)
                    return 0;
                let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                return t = parseFloat(this.current) - parseFloat(this.prevFrameValue),
                i ? 1e3 / i * t : 0
            }
            start(t) {
                return this.stop(),
                new Promise(e => {
                    this.hasAnimated = !0,
                    this.animation = t(e),
                    this.events.animationStart && this.events.animationStart.notify()
                }
                ).then( () => {
                    this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
                }
                )
            }
            stop() {
                this.animation && (this.animation.stop(),
                this.events.animationCancel && this.events.animationCancel.notify()),
                this.clearAnimation()
            }
            isAnimating() {
                return !!this.animation
            }
            clearAnimation() {
                delete this.animation
            }
            destroy() {
                this.clearListeners(),
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
        }
        function R(t, e) {
            return new V(t,e)
        }
        let D = t => !!(t && t.getVelocity);
        function k(t, e) {
            let i = t.getValue("willChange");
            if (D(i) && i.add)
                return i.add(e)
        }
        let _ = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
          , F = "data-" + _("framerAppearId");
        function L(t) {
            let e;
            return () => (void 0 === e && (e = t()),
            e)
        }
        let B = L( () => void 0 !== window.ScrollTimeline);
        class I {
            constructor(t) {
                this.stop = () => this.runAll("stop"),
                this.animations = t.filter(Boolean)
            }
            get finished() {
                return Promise.all(this.animations.map(t => "finished"in t ? t.finished : t))
            }
            getAll(t) {
                return this.animations[0][t]
            }
            setAll(t, e) {
                for (let i = 0; i < this.animations.length; i++)
                    this.animations[i][t] = e
            }
            attachTimeline(t, e) {
                let i = this.animations.map(i => B() && i.attachTimeline ? i.attachTimeline(t) : "function" == typeof e ? e(i) : void 0);
                return () => {
                    i.forEach( (t, e) => {
                        t && t(),
                        this.animations[e].stop()
                    }
                    )
                }
            }
            get time() {
                return this.getAll("time")
            }
            set time(t) {
                this.setAll("time", t)
            }
            get speed() {
                return this.getAll("speed")
            }
            set speed(t) {
                this.setAll("speed", t)
            }
            get startTime() {
                return this.getAll("startTime")
            }
            get duration() {
                let t = 0;
                for (let e = 0; e < this.animations.length; e++)
                    t = Math.max(t, this.animations[e].duration);
                return t
            }
            runAll(t) {
                this.animations.forEach(e => e[t]())
            }
            flatten() {
                this.runAll("flatten")
            }
            play() {
                this.runAll("play")
            }
            pause() {
                this.runAll("pause")
            }
            cancel() {
                this.runAll("cancel")
            }
            complete() {
                this.runAll("complete")
            }
        }
        class U extends I {
            then(t, e) {
                return Promise.all(this.animations).then(t).catch(e)
            }
        }
        let N = t => 1e3 * t
          , z = t => t / 1e3
          , $ = {
            current: !1
        };
        function Y(t) {
            return "function" == typeof t
        }
        function W(t, e) {
            t.timeline = e,
            t.onfinish = null
        }
        let X = t => Array.isArray(t) && "number" == typeof t[0]
          , H = {
            linearEasing: void 0
        }
          , q = function(t, e) {
            let i = L(t);
            return () => {
                var t;
                return null !== (t = H[e]) && void 0 !== t ? t : i()
            }
        }( () => {
            try {
                document.createElement("div").animate({
                    opacity: 0
                }, {
                    easing: "linear(0, 1)"
                })
            } catch (t) {
                return !1
            }
            return !0
        }
        , "linearEasing")
          , K = (t, e, i) => {
            let r = e - t;
            return 0 === r ? 1 : (i - t) / r
        }
          , G = (t, e, i=10) => {
            let r = ""
              , n = Math.max(Math.round(e / i), 2);
            for (let e = 0; e < n; e++)
                r += t(K(0, n - 1, e)) + ", ";
            return `linear(${r.substring(0, r.length - 2)})`
        }
          , Z = ([t,e,i,r]) => `cubic-bezier(${t}, ${e}, ${i}, ${r})`
          , J = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: Z([0, .65, .55, 1]),
            circOut: Z([.55, 0, 1, .45]),
            backIn: Z([.31, .01, .66, -.59]),
            backOut: Z([.33, 1.53, .69, .99])
        }
          , Q = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
        function tt(t, e, i, r) {
            if (t === e && i === r)
                return g;
            let n = e => (function(t, e, i, r, n) {
                let s, o;
                let a = 0;
                do
                    (s = Q(o = e + (i - e) / 2, r, n) - t) > 0 ? i = o : e = o;
                while (Math.abs(s) > 1e-7 && ++a < 12);
                return o
            }
            )(e, 0, 1, t, i);
            return t => 0 === t || 1 === t ? t : Q(n(t), e, r)
        }
        let te = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
          , ti = t => e => 1 - t(1 - e)
          , tr = tt(.33, 1.53, .69, .99)
          , tn = ti(tr)
          , ts = te(tn)
          , to = t => (t *= 2) < 1 ? .5 * tn(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
          , ta = t => 1 - Math.sin(Math.acos(t))
          , tl = ti(ta)
          , tu = te(ta)
          , th = t => /^0[^.\s]+$/u.test(t)
          , tc = (t, e, i) => i > e ? e : i < t ? t : i
          , td = {
            test: t => "number" == typeof t,
            parse: parseFloat,
            transform: t => t
        }
          , tp = {
            ...td,
            transform: t => tc(0, 1, t)
        }
          , tf = {
            ...td,
            default: 1
        }
          , tm = t => Math.round(1e5 * t) / 1e5
          , tg = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
          , tv = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
          , ty = (t, e) => i => !!("string" == typeof i && tv.test(i) && i.startsWith(t) || e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          , tx = (t, e, i) => r => {
            if ("string" != typeof r)
                return r;
            let[n,s,o,a] = r.match(tg);
            return {
                [t]: parseFloat(n),
                [e]: parseFloat(s),
                [i]: parseFloat(o),
                alpha: void 0 !== a ? parseFloat(a) : 1
            }
        }
          , tb = t => tc(0, 255, t)
          , tP = {
            ...td,
            transform: t => Math.round(tb(t))
        }
          , tw = {
            test: ty("rgb", "red"),
            parse: tx("red", "green", "blue"),
            transform: ({red: t, green: e, blue: i, alpha: r=1}) => "rgba(" + tP.transform(t) + ", " + tP.transform(e) + ", " + tP.transform(i) + ", " + tm(tp.transform(r)) + ")"
        }
          , tS = {
            test: ty("#"),
            parse: function(t) {
                let e = ""
                  , i = ""
                  , r = ""
                  , n = "";
                return t.length > 5 ? (e = t.substring(1, 3),
                i = t.substring(3, 5),
                r = t.substring(5, 7),
                n = t.substring(7, 9)) : (e = t.substring(1, 2),
                i = t.substring(2, 3),
                r = t.substring(3, 4),
                n = t.substring(4, 5),
                e += e,
                i += i,
                r += r,
                n += n),
                {
                    red: parseInt(e, 16),
                    green: parseInt(i, 16),
                    blue: parseInt(r, 16),
                    alpha: n ? parseInt(n, 16) / 255 : 1
                }
            },
            transform: tw.transform
        }
          , tT = t => ({
            test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
            parse: parseFloat,
            transform: e => `${e}${t}`
        })
          , tA = tT("deg")
          , tE = tT("%")
          , tM = tT("px")
          , tC = tT("vh")
          , tO = tT("vw")
          , tj = {
            ...tE,
            parse: t => tE.parse(t) / 100,
            transform: t => tE.transform(100 * t)
        }
          , tV = {
            test: ty("hsl", "hue"),
            parse: tx("hue", "saturation", "lightness"),
            transform: ({hue: t, saturation: e, lightness: i, alpha: r=1}) => "hsla(" + Math.round(t) + ", " + tE.transform(tm(e)) + ", " + tE.transform(tm(i)) + ", " + tm(tp.transform(r)) + ")"
        }
          , tR = {
            test: t => tw.test(t) || tS.test(t) || tV.test(t),
            parse: t => tw.test(t) ? tw.parse(t) : tV.test(t) ? tV.parse(t) : tS.parse(t),
            transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? tw.transform(t) : tV.transform(t)
        }
          , tD = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
          , tk = "number"
          , t_ = "color"
          , tF = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
        function tL(t) {
            let e = t.toString()
              , i = []
              , r = {
                color: [],
                number: [],
                var: []
            }
              , n = []
              , s = 0
              , o = e.replace(tF, t => (tR.test(t) ? (r.color.push(s),
            n.push(t_),
            i.push(tR.parse(t))) : t.startsWith("var(") ? (r.var.push(s),
            n.push("var"),
            i.push(t)) : (r.number.push(s),
            n.push(tk),
            i.push(parseFloat(t))),
            ++s,
            "${}")).split("${}");
            return {
                values: i,
                split: o,
                indexes: r,
                types: n
            }
        }
        function tB(t) {
            return tL(t).values
        }
        function tI(t) {
            let {split: e, types: i} = tL(t)
              , r = e.length;
            return t => {
                let n = "";
                for (let s = 0; s < r; s++)
                    if (n += e[s],
                    void 0 !== t[s]) {
                        let e = i[s];
                        e === tk ? n += tm(t[s]) : e === t_ ? n += tR.transform(t[s]) : n += t[s]
                    }
                return n
            }
        }
        let tU = t => "number" == typeof t ? 0 : t
          , tN = {
            test: function(t) {
                var e, i;
                return isNaN(t) && "string" == typeof t && ((null === (e = t.match(tg)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(tD)) || void 0 === i ? void 0 : i.length) || 0) > 0
            },
            parse: tB,
            createTransformer: tI,
            getAnimatableNone: function(t) {
                let e = tB(t);
                return tI(t)(e.map(tU))
            }
        }
          , tz = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function t$(t) {
            let[e,i] = t.slice(0, -1).split("(");
            if ("drop-shadow" === e)
                return t;
            let[r] = i.match(tg) || [];
            if (!r)
                return t;
            let n = i.replace(r, "")
              , s = +!!tz.has(e);
            return r !== i && (s *= 100),
            e + "(" + s + n + ")"
        }
        let tY = /\b([a-z-]*)\(.*?\)/gu
          , tW = {
            ...tN,
            getAnimatableNone: t => {
                let e = t.match(tY);
                return e ? e.map(t$).join(" ") : t
            }
        }
          , tX = {
            ...td,
            transform: Math.round
        }
          , tH = {
            borderWidth: tM,
            borderTopWidth: tM,
            borderRightWidth: tM,
            borderBottomWidth: tM,
            borderLeftWidth: tM,
            borderRadius: tM,
            radius: tM,
            borderTopLeftRadius: tM,
            borderTopRightRadius: tM,
            borderBottomRightRadius: tM,
            borderBottomLeftRadius: tM,
            width: tM,
            maxWidth: tM,
            height: tM,
            maxHeight: tM,
            top: tM,
            right: tM,
            bottom: tM,
            left: tM,
            padding: tM,
            paddingTop: tM,
            paddingRight: tM,
            paddingBottom: tM,
            paddingLeft: tM,
            margin: tM,
            marginTop: tM,
            marginRight: tM,
            marginBottom: tM,
            marginLeft: tM,
            backgroundPositionX: tM,
            backgroundPositionY: tM,
            rotate: tA,
            rotateX: tA,
            rotateY: tA,
            rotateZ: tA,
            scale: tf,
            scaleX: tf,
            scaleY: tf,
            scaleZ: tf,
            skew: tA,
            skewX: tA,
            skewY: tA,
            distance: tM,
            translateX: tM,
            translateY: tM,
            translateZ: tM,
            x: tM,
            y: tM,
            z: tM,
            perspective: tM,
            transformPerspective: tM,
            opacity: tp,
            originX: tj,
            originY: tj,
            originZ: tM,
            zIndex: tX,
            size: tM,
            fillOpacity: tp,
            strokeOpacity: tp,
            numOctaves: tX
        }
          , tq = {
            ...tH,
            color: tR,
            backgroundColor: tR,
            outlineColor: tR,
            fill: tR,
            stroke: tR,
            borderColor: tR,
            borderTopColor: tR,
            borderRightColor: tR,
            borderBottomColor: tR,
            borderLeftColor: tR,
            filter: tW,
            WebkitFilter: tW
        }
          , tK = t => tq[t];
        function tG(t, e) {
            let i = tK(t);
            return i !== tW && (i = tN),
            i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        }
        let tZ = new Set(["auto", "none", "0"])
          , tJ = t => t === td || t === tM
          , tQ = (t, e) => parseFloat(t.split(", ")[e])
          , t0 = (t, e) => (i, {transform: r}) => {
            if ("none" === r || !r)
                return 0;
            let n = r.match(/^matrix3d\((.+)\)$/u);
            if (n)
                return tQ(n[1], e);
            {
                let e = r.match(/^matrix\((.+)\)$/u);
                return e ? tQ(e[1], t) : 0
            }
        }
          , t1 = new Set(["x", "y", "z"])
          , t2 = u.filter(t => !t1.has(t))
          , t5 = {
            width: ({x: t}, {paddingLeft: e="0", paddingRight: i="0"}) => t.max - t.min - parseFloat(e) - parseFloat(i),
            height: ({y: t}, {paddingTop: e="0", paddingBottom: i="0"}) => t.max - t.min - parseFloat(e) - parseFloat(i),
            top: (t, {top: e}) => parseFloat(e),
            left: (t, {left: e}) => parseFloat(e),
            bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
            right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
            x: t0(4, 13),
            y: t0(5, 14)
        };
        t5.translateX = t5.x,
        t5.translateY = t5.y;
        let t3 = new Set
          , t9 = !1
          , t6 = !1;
        function t8() {
            if (t6) {
                let t = Array.from(t3).filter(t => t.needsMeasurement)
                  , e = new Set(t.map(t => t.element))
                  , i = new Map;
                e.forEach(t => {
                    let e = function(t) {
                        let e = [];
                        return t2.forEach(i => {
                            let r = t.getValue(i);
                            void 0 !== r && (e.push([i, r.get()]),
                            r.set(+!!i.startsWith("scale")))
                        }
                        ),
                        e
                    }(t);
                    e.length && (i.set(t, e),
                    t.render())
                }
                ),
                t.forEach(t => t.measureInitialState()),
                e.forEach(t => {
                    t.render();
                    let e = i.get(t);
                    e && e.forEach( ([e,i]) => {
                        var r;
                        null === (r = t.getValue(e)) || void 0 === r || r.set(i)
                    }
                    )
                }
                ),
                t.forEach(t => t.measureEndState()),
                t.forEach(t => {
                    void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                }
                )
            }
            t6 = !1,
            t9 = !1,
            t3.forEach(t => t.complete()),
            t3.clear()
        }
        function t4() {
            t3.forEach(t => {
                t.readKeyframes(),
                t.needsMeasurement && (t6 = !0)
            }
            )
        }
        class t7 {
            constructor(t, e, i, r, n, s=!1) {
                this.isComplete = !1,
                this.isAsync = !1,
                this.needsMeasurement = !1,
                this.isScheduled = !1,
                this.unresolvedKeyframes = [...t],
                this.onComplete = e,
                this.name = i,
                this.motionValue = r,
                this.element = n,
                this.isAsync = s
            }
            scheduleResolve() {
                this.isScheduled = !0,
                this.isAsync ? (t3.add(this),
                t9 || (t9 = !0,
                b.read(t4),
                b.resolveKeyframes(t8))) : (this.readKeyframes(),
                this.complete())
            }
            readKeyframes() {
                let {unresolvedKeyframes: t, name: e, element: i, motionValue: r} = this;
                for (let n = 0; n < t.length; n++)
                    if (null === t[n]) {
                        if (0 === n) {
                            let n = null == r ? void 0 : r.get()
                              , s = t[t.length - 1];
                            if (void 0 !== n)
                                t[0] = n;
                            else if (i && e) {
                                let r = i.readValue(e, s);
                                null != r && (t[0] = r)
                            }
                            void 0 === t[0] && (t[0] = s),
                            r && void 0 === n && r.set(t[0])
                        } else
                            t[n] = t[n - 1]
                    }
            }
            setFinalKeyframe() {}
            measureInitialState() {}
            renderEndStyles() {}
            measureEndState() {}
            complete() {
                this.isComplete = !0,
                this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
                t3.delete(this)
            }
            cancel() {
                this.isComplete || (this.isScheduled = !1,
                t3.delete(this))
            }
            resume() {
                this.isComplete || this.scheduleResolve()
            }
        }
        let et = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
          , ee = t => e => "string" == typeof e && e.startsWith(t)
          , ei = ee("--")
          , er = ee("var(--")
          , en = t => !!er(t) && es.test(t.split("/*")[0].trim())
          , es = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
          , eo = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
          , ea = t => e => e.test(t)
          , el = [td, tM, tE, tA, tO, tC, {
            test: t => "auto" === t,
            parse: t => t
        }]
          , eu = t => el.find(ea(t));
        class eh extends t7 {
            constructor(t, e, i, r, n) {
                super(t, e, i, r, n, !0)
            }
            readKeyframes() {
                let {unresolvedKeyframes: t, element: e, name: i} = this;
                if (!e || !e.current)
                    return;
                super.readKeyframes();
                for (let i = 0; i < t.length; i++) {
                    let r = t[i];
                    if ("string" == typeof r && en(r = r.trim())) {
                        let n = function t(e, i, r=1) {
                            g(r <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                            let[n,s] = function(t) {
                                let e = eo.exec(t);
                                if (!e)
                                    return [, ];
                                let[,i,r,n] = e;
                                return [`--${null != i ? i : r}`, n]
                            }(e);
                            if (!n)
                                return;
                            let o = window.getComputedStyle(i).getPropertyValue(n);
                            if (o) {
                                let t = o.trim();
                                return et(t) ? parseFloat(t) : t
                            }
                            return en(s) ? t(s, i, r + 1) : s
                        }(r, e.current);
                        void 0 !== n && (t[i] = n),
                        i === t.length - 1 && (this.finalKeyframe = r)
                    }
                }
                if (this.resolveNoneKeyframes(),
                !c.has(i) || 2 !== t.length)
                    return;
                let[r,n] = t
                  , s = eu(r)
                  , o = eu(n);
                if (s !== o) {
                    if (tJ(s) && tJ(o))
                        for (let e = 0; e < t.length; e++) {
                            let i = t[e];
                            "string" == typeof i && (t[e] = parseFloat(i))
                        }
                    else
                        this.needsMeasurement = !0
                }
            }
            resolveNoneKeyframes() {
                let {unresolvedKeyframes: t, name: e} = this
                  , i = [];
                for (let e = 0; e < t.length; e++) {
                    var r;
                    ("number" == typeof (r = t[e]) ? 0 === r : null === r || "none" === r || "0" === r || th(r)) && i.push(e)
                }
                i.length && function(t, e, i) {
                    let r, n = 0;
                    for (; n < t.length && !r; ) {
                        let e = t[n];
                        "string" == typeof e && !tZ.has(e) && tL(e).values.length && (r = t[n]),
                        n++
                    }
                    if (r && i)
                        for (let n of e)
                            t[n] = tG(i, r)
                }(t, i, e)
            }
            measureInitialState() {
                let {element: t, unresolvedKeyframes: e, name: i} = this;
                if (!t || !t.current)
                    return;
                "height" === i && (this.suspendedScrollY = window.pageYOffset),
                this.measuredOrigin = t5[i](t.measureViewportBox(), window.getComputedStyle(t.current)),
                e[0] = this.measuredOrigin;
                let r = e[e.length - 1];
                void 0 !== r && t.getValue(i, r).jump(r, !1)
            }
            measureEndState() {
                var t;
                let {element: e, name: i, unresolvedKeyframes: r} = this;
                if (!e || !e.current)
                    return;
                let n = e.getValue(i);
                n && n.jump(this.measuredOrigin, !1);
                let s = r.length - 1
                  , o = r[s];
                r[s] = t5[i](e.measureViewportBox(), window.getComputedStyle(e.current)),
                null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o),
                (null === (t = this.removedTransforms) || void 0 === t ? void 0 : t.length) && this.removedTransforms.forEach( ([t,i]) => {
                    e.getValue(t).set(i)
                }
                ),
                this.resolveNoneKeyframes()
            }
        }
        let ec = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (tN.test(t) || "0" === t) && !t.startsWith("url("))
          , ed = t => null !== t;
        function ep(t, {repeat: e, repeatType: i="loop"}, r) {
            let n = t.filter(ed)
              , s = e && "loop" !== i && e % 2 == 1 ? 0 : n.length - 1;
            return s && void 0 !== r ? r : n[s]
        }
        class ef {
            constructor({autoplay: t=!0, delay: e=0, type: i="keyframes", repeat: r=0, repeatDelay: n=0, repeatType: s="loop", ...o}) {
                this.isStopped = !1,
                this.hasAttemptedResolve = !1,
                this.createdAt = A.now(),
                this.options = {
                    autoplay: t,
                    delay: e,
                    type: i,
                    repeat: r,
                    repeatDelay: n,
                    repeatType: s,
                    ...o
                },
                this.updateFinishedPromise()
            }
            calcStartTime() {
                return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
            }
            get resolved() {
                return this._resolved || this.hasAttemptedResolve || (t4(),
                t8()),
                this._resolved
            }
            onKeyframesResolved(t, e) {
                this.resolvedAt = A.now(),
                this.hasAttemptedResolve = !0;
                let {name: i, type: r, velocity: n, delay: s, onComplete: o, onUpdate: a, isGenerator: l} = this.options;
                if (!l && !function(t, e, i, r) {
                    let n = t[0];
                    if (null === n)
                        return !1;
                    if ("display" === e || "visibility" === e)
                        return !0;
                    let s = t[t.length - 1]
                      , o = ec(n, e)
                      , a = ec(s, e);
                    return g(o === a, `You are trying to animate ${e} from "${n}" to "${s}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${s} via the \`style\` property.`),
                    !!o && !!a && (function(t) {
                        let e = t[0];
                        if (1 === t.length)
                            return !0;
                        for (let i = 0; i < t.length; i++)
                            if (t[i] !== e)
                                return !0
                    }(t) || ("spring" === i || Y(i)) && r)
                }(t, i, r, n)) {
                    if ($.current || !s) {
                        a && a(ep(t, this.options, e)),
                        o && o(),
                        this.resolveFinishedPromise();
                        return
                    }
                    this.options.duration = 0
                }
                let u = this.initPlayback(t, e);
                !1 !== u && (this._resolved = {
                    keyframes: t,
                    finalKeyframe: e,
                    ...u
                },
                this.onPostResolved())
            }
            onPostResolved() {}
            then(t, e) {
                return this.currentFinishedPromise.then(t, e)
            }
            flatten() {
                this.options.type = "keyframes",
                this.options.ease = "linear"
            }
            updateFinishedPromise() {
                this.currentFinishedPromise = new Promise(t => {
                    this.resolveFinishedPromise = t
                }
                )
            }
        }
        function em(t) {
            let e = 0
              , i = t.next(e);
            for (; !i.done && e < 2e4; )
                e += 50,
                i = t.next(e);
            return e >= 2e4 ? 1 / 0 : e
        }
        let eg = {
            layout: 0,
            mainThread: 0,
            waapi: 0
        }
          , ev = (t, e, i) => t + (e - t) * i;
        function ey(t, e, i) {
            return (i < 0 && (i += 1),
            i > 1 && (i -= 1),
            i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
        }
        function ex(t, e) {
            return i => i > 0 ? e : t
        }
        let eb = (t, e, i) => {
            let r = t * t
              , n = i * (e * e - r) + r;
            return n < 0 ? 0 : Math.sqrt(n)
        }
          , eP = [tS, tw, tV]
          , ew = t => eP.find(e => e.test(t));
        function eS(t) {
            let e = ew(t);
            if (g(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`),
            !e)
                return !1;
            let i = e.parse(t);
            return e === tV && (i = function({hue: t, saturation: e, lightness: i, alpha: r}) {
                t /= 360,
                i /= 100;
                let n = 0
                  , s = 0
                  , o = 0;
                if (e /= 100) {
                    let r = i < .5 ? i * (1 + e) : i + e - i * e
                      , a = 2 * i - r;
                    n = ey(a, r, t + 1 / 3),
                    s = ey(a, r, t),
                    o = ey(a, r, t - 1 / 3)
                } else
                    n = s = o = i;
                return {
                    red: Math.round(255 * n),
                    green: Math.round(255 * s),
                    blue: Math.round(255 * o),
                    alpha: r
                }
            }(i)),
            i
        }
        let eT = (t, e) => {
            let i = eS(t)
              , r = eS(e);
            if (!i || !r)
                return ex(t, e);
            let n = {
                ...i
            };
            return t => (n.red = eb(i.red, r.red, t),
            n.green = eb(i.green, r.green, t),
            n.blue = eb(i.blue, r.blue, t),
            n.alpha = ev(i.alpha, r.alpha, t),
            tw.transform(n))
        }
          , eA = (t, e) => i => e(t(i))
          , eE = (...t) => t.reduce(eA)
          , eM = new Set(["none", "hidden"]);
        function eC(t, e) {
            return i => ev(t, e, i)
        }
        function eO(t) {
            return "number" == typeof t ? eC : "string" == typeof t ? en(t) ? ex : tR.test(t) ? eT : eR : Array.isArray(t) ? ej : "object" == typeof t ? tR.test(t) ? eT : eV : ex
        }
        function ej(t, e) {
            let i = [...t]
              , r = i.length
              , n = t.map( (t, i) => eO(t)(t, e[i]));
            return t => {
                for (let e = 0; e < r; e++)
                    i[e] = n[e](t);
                return i
            }
        }
        function eV(t, e) {
            let i = {
                ...t,
                ...e
            }
              , r = {};
            for (let n in i)
                void 0 !== t[n] && void 0 !== e[n] && (r[n] = eO(t[n])(t[n], e[n]));
            return t => {
                for (let e in r)
                    i[e] = r[e](t);
                return i
            }
        }
        let eR = (t, e) => {
            let i = tN.createTransformer(e)
              , r = tL(t)
              , n = tL(e);
            return r.indexes.var.length === n.indexes.var.length && r.indexes.color.length === n.indexes.color.length && r.indexes.number.length >= n.indexes.number.length ? eM.has(t) && !n.values.length || eM.has(e) && !r.values.length ? function(t, e) {
                return eM.has(t) ? i => i <= 0 ? t : e : i => i >= 1 ? e : t
            }(t, e) : eE(ej(function(t, e) {
                var i;
                let r = []
                  , n = {
                    color: 0,
                    var: 0,
                    number: 0
                };
                for (let s = 0; s < e.values.length; s++) {
                    let o = e.types[s]
                      , a = t.indexes[o][n[o]]
                      , l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                    r[s] = l,
                    n[o]++
                }
                return r
            }(r, n), n.values), i) : (g(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
            ex(t, e))
        }
        ;
        function eD(t, e, i) {
            return "number" == typeof t && "number" == typeof e && "number" == typeof i ? ev(t, e, i) : eO(t)(t, e)
        }
        function ek(t, e, i) {
            var r, n;
            let s = Math.max(e - 5, 0);
            return r = i - t(s),
            (n = e - s) ? 1e3 / n * r : 0
        }
        let e_ = {
            stiffness: 100,
            damping: 10,
            mass: 1,
            velocity: 0,
            duration: 800,
            bounce: .3,
            visualDuration: .3,
            restSpeed: {
                granular: .01,
                default: 2
            },
            restDelta: {
                granular: .005,
                default: .5
            },
            minDuration: .01,
            maxDuration: 10,
            minDamping: .05,
            maxDamping: 1
        };
        function eF(t, e) {
            return t * Math.sqrt(1 - e * e)
        }
        let eL = ["duration", "bounce"]
          , eB = ["stiffness", "damping", "mass"];
        function eI(t, e) {
            return e.some(e => void 0 !== t[e])
        }
        function eU(t=e_.visualDuration, e=e_.bounce) {
            let i;
            let r = "object" != typeof t ? {
                visualDuration: t,
                keyframes: [0, 1],
                bounce: e
            } : t
              , {restSpeed: n, restDelta: s} = r
              , o = r.keyframes[0]
              , a = r.keyframes[r.keyframes.length - 1]
              , l = {
                done: !1,
                value: o
            }
              , {stiffness: u, damping: h, mass: c, duration: d, velocity: p, isResolvedFromDuration: f} = function(t) {
                let e = {
                    velocity: e_.velocity,
                    stiffness: e_.stiffness,
                    damping: e_.damping,
                    mass: e_.mass,
                    isResolvedFromDuration: !1,
                    ...t
                };
                if (!eI(t, eB) && eI(t, eL)) {
                    if (t.visualDuration) {
                        let i = 2 * Math.PI / (1.2 * t.visualDuration)
                          , r = i * i
                          , n = 2 * tc(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(r);
                        e = {
                            ...e,
                            mass: e_.mass,
                            stiffness: r,
                            damping: n
                        }
                    } else {
                        let i = function({duration: t=e_.duration, bounce: e=e_.bounce, velocity: i=e_.velocity, mass: r=e_.mass}) {
                            let n, s;
                            g(t <= N(e_.maxDuration), "Spring duration must be 10 seconds or less");
                            let o = 1 - e;
                            o = tc(e_.minDamping, e_.maxDamping, o),
                            t = tc(e_.minDuration, e_.maxDuration, z(t)),
                            o < 1 ? (n = e => {
                                let r = e * o
                                  , n = r * t;
                                return .001 - (r - i) / eF(e, o) * Math.exp(-n)
                            }
                            ,
                            s = e => {
                                let r = e * o * t
                                  , s = Math.pow(o, 2) * Math.pow(e, 2) * t
                                  , a = Math.exp(-r)
                                  , l = eF(Math.pow(e, 2), o);
                                return (r * i + i - s) * a * (-n(e) + .001 > 0 ? -1 : 1) / l
                            }
                            ) : (n = e => -.001 + Math.exp(-e * t) * ((e - i) * t + 1),
                            s = e => t * t * (i - e) * Math.exp(-e * t));
                            let a = function(t, e, i) {
                                let r = i;
                                for (let i = 1; i < 12; i++)
                                    r -= t(r) / e(r);
                                return r
                            }(n, s, 5 / t);
                            if (t = N(t),
                            isNaN(a))
                                return {
                                    stiffness: e_.stiffness,
                                    damping: e_.damping,
                                    duration: t
                                };
                            {
                                let e = Math.pow(a, 2) * r;
                                return {
                                    stiffness: e,
                                    damping: 2 * o * Math.sqrt(r * e),
                                    duration: t
                                }
                            }
                        }(t);
                        (e = {
                            ...e,
                            ...i,
                            mass: e_.mass
                        }).isResolvedFromDuration = !0
                    }
                }
                return e
            }({
                ...r,
                velocity: -z(r.velocity || 0)
            })
              , m = p || 0
              , v = h / (2 * Math.sqrt(u * c))
              , y = a - o
              , x = z(Math.sqrt(u / c))
              , b = 5 > Math.abs(y);
            if (n || (n = b ? e_.restSpeed.granular : e_.restSpeed.default),
            s || (s = b ? e_.restDelta.granular : e_.restDelta.default),
            v < 1) {
                let t = eF(x, v);
                i = e => a - Math.exp(-v * x * e) * ((m + v * x * y) / t * Math.sin(t * e) + y * Math.cos(t * e))
            } else if (1 === v)
                i = t => a - Math.exp(-x * t) * (y + (m + x * y) * t);
            else {
                let t = x * Math.sqrt(v * v - 1);
                i = e => {
                    let i = Math.exp(-v * x * e)
                      , r = Math.min(t * e, 300);
                    return a - i * ((m + v * x * y) * Math.sinh(r) + t * y * Math.cosh(r)) / t
                }
            }
            let P = {
                calculatedDuration: f && d || null,
                next: t => {
                    let e = i(t);
                    if (f)
                        l.done = t >= d;
                    else {
                        let r = 0;
                        v < 1 && (r = 0 === t ? N(m) : ek(i, t, e));
                        let o = Math.abs(a - e) <= s;
                        l.done = Math.abs(r) <= n && o
                    }
                    return l.value = l.done ? a : e,
                    l
                }
                ,
                toString: () => {
                    let t = Math.min(em(P), 2e4)
                      , e = G(e => P.next(t * e).value, t, 30);
                    return t + "ms " + e
                }
            };
            return P
        }
        function eN({keyframes: t, velocity: e=0, power: i=.8, timeConstant: r=325, bounceDamping: n=10, bounceStiffness: s=500, modifyTarget: o, min: a, max: l, restDelta: u=.5, restSpeed: h}) {
            let c, d;
            let p = t[0]
              , f = {
                done: !1,
                value: p
            }
              , m = t => void 0 !== a && t < a || void 0 !== l && t > l
              , g = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l
              , v = i * e
              , y = p + v
              , x = void 0 === o ? y : o(y);
            x !== y && (v = x - p);
            let b = t => -v * Math.exp(-t / r)
              , P = t => x + b(t)
              , w = t => {
                let e = b(t)
                  , i = P(t);
                f.done = Math.abs(e) <= u,
                f.value = f.done ? x : i
            }
              , S = t => {
                m(f.value) && (c = t,
                d = eU({
                    keyframes: [f.value, g(f.value)],
                    velocity: ek(P, t, f.value),
                    damping: n,
                    stiffness: s,
                    restDelta: u,
                    restSpeed: h
                }))
            }
            ;
            return S(0),
            {
                calculatedDuration: null,
                next: t => {
                    let e = !1;
                    return (d || void 0 !== c || (e = !0,
                    w(t),
                    S(t)),
                    void 0 !== c && t >= c) ? d.next(t - c) : (e || w(t),
                    f)
                }
            }
        }
        let ez = tt(.42, 0, 1, 1)
          , e$ = tt(0, 0, .58, 1)
          , eY = tt(.42, 0, .58, 1)
          , eW = t => Array.isArray(t) && "number" != typeof t[0]
          , eX = {
            linear: g,
            easeIn: ez,
            easeInOut: eY,
            easeOut: e$,
            circIn: ta,
            circInOut: tu,
            circOut: tl,
            backIn: tn,
            backInOut: ts,
            backOut: tr,
            anticipate: to
        }
          , eH = t => {
            if (X(t)) {
                g(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                let[e,i,r,n] = t;
                return tt(e, i, r, n)
            }
            return "string" == typeof t ? (g(void 0 !== eX[t], `Invalid easing type '${t}'`),
            eX[t]) : t
        }
        ;
        function eq({duration: t=300, keyframes: e, times: i, ease: r="easeInOut"}) {
            let n = eW(r) ? r.map(eH) : eH(r)
              , s = {
                done: !1,
                value: e[0]
            }
              , o = function(t, e, {clamp: i=!0, ease: r, mixer: n}={}) {
                let s = t.length;
                if (g(s === e.length, "Both input and output ranges must be the same length"),
                1 === s)
                    return () => e[0];
                if (2 === s && e[0] === e[1])
                    return () => e[1];
                let o = t[0] === t[1];
                t[0] > t[s - 1] && (t = [...t].reverse(),
                e = [...e].reverse());
                let a = function(t, e, i) {
                    let r = []
                      , n = i || eD
                      , s = t.length - 1;
                    for (let i = 0; i < s; i++) {
                        let s = n(t[i], t[i + 1]);
                        e && (s = eE(Array.isArray(e) ? e[i] || g : e, s)),
                        r.push(s)
                    }
                    return r
                }(e, r, n)
                  , l = a.length
                  , u = i => {
                    if (o && i < t[0])
                        return e[0];
                    let r = 0;
                    if (l > 1)
                        for (; r < t.length - 2 && !(i < t[r + 1]); r++)
                            ;
                    let n = K(t[r], t[r + 1], i);
                    return a[r](n)
                }
                ;
                return i ? e => u(tc(t[0], t[s - 1], e)) : u
            }((i && i.length === e.length ? i : function(t) {
                let e = [0];
                return function(t, e) {
                    let i = t[t.length - 1];
                    for (let r = 1; r <= e; r++) {
                        let n = K(0, e, r);
                        t.push(ev(i, 1, n))
                    }
                }(e, t.length - 1),
                e
            }(e)).map(e => e * t), e, {
                ease: Array.isArray(n) ? n : e.map( () => n || eY).splice(0, e.length - 1)
            });
            return {
                calculatedDuration: t,
                next: e => (s.value = o(e),
                s.done = e >= t,
                s)
            }
        }
        let eK = t => {
            let e = ({timestamp: e}) => t(e);
            return {
                start: () => b.update(e, !0),
                stop: () => P(e),
                now: () => w.isProcessing ? w.timestamp : A.now()
            }
        }
          , eG = {
            decay: eN,
            inertia: eN,
            tween: eq,
            keyframes: eq,
            spring: eU
        }
          , eZ = t => t / 100;
        class eJ extends ef {
            constructor(t) {
                super(t),
                this.holdTime = null,
                this.cancelTime = null,
                this.currentTime = 0,
                this.playbackSpeed = 1,
                this.pendingPlayState = "running",
                this.startTime = null,
                this.state = "idle",
                this.stop = () => {
                    if (this.resolver.cancel(),
                    this.isStopped = !0,
                    "idle" === this.state)
                        return;
                    this.teardown();
                    let {onStop: t} = this.options;
                    t && t()
                }
                ;
                let {name: e, motionValue: i, element: r, keyframes: n} = this.options
                  , s = (null == r ? void 0 : r.KeyframeResolver) || t7;
                this.resolver = new s(n, (t, e) => this.onKeyframesResolved(t, e),e,i,r),
                this.resolver.scheduleResolve()
            }
            flatten() {
                super.flatten(),
                this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
            }
            initPlayback(t) {
                let e, i;
                let {type: r="keyframes", repeat: n=0, repeatDelay: s=0, repeatType: o, velocity: a=0} = this.options
                  , l = Y(r) ? r : eG[r] || eq;
                l !== eq && "number" != typeof t[0] && (e = eE(eZ, eD(t[0], t[1])),
                t = [0, 100]);
                let u = l({
                    ...this.options,
                    keyframes: t
                });
                "mirror" === o && (i = l({
                    ...this.options,
                    keyframes: [...t].reverse(),
                    velocity: -a
                })),
                null === u.calculatedDuration && (u.calculatedDuration = em(u));
                let {calculatedDuration: h} = u
                  , c = h + s;
                return {
                    generator: u,
                    mirroredGenerator: i,
                    mapPercentToKeyframes: e,
                    calculatedDuration: h,
                    resolvedDuration: c,
                    totalDuration: c * (n + 1) - s
                }
            }
            onPostResolved() {
                let {autoplay: t=!0} = this.options;
                eg.mainThread++,
                this.play(),
                "paused" !== this.pendingPlayState && t ? this.state = this.pendingPlayState : this.pause()
            }
            tick(t, e=!1) {
                let {resolved: i} = this;
                if (!i) {
                    let {keyframes: t} = this.options;
                    return {
                        done: !0,
                        value: t[t.length - 1]
                    }
                }
                let {finalKeyframe: r, generator: n, mirroredGenerator: s, mapPercentToKeyframes: o, keyframes: a, calculatedDuration: l, totalDuration: u, resolvedDuration: h} = i;
                if (null === this.startTime)
                    return n.next(0);
                let {delay: c, repeat: d, repeatType: p, repeatDelay: f, onUpdate: m} = this.options;
                this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)),
                e ? this.currentTime = t : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
                let g = this.currentTime - c * (this.speed >= 0 ? 1 : -1)
                  , v = this.speed >= 0 ? g < 0 : g > u;
                this.currentTime = Math.max(g, 0),
                "finished" === this.state && null === this.holdTime && (this.currentTime = u);
                let y = this.currentTime
                  , x = n;
                if (d) {
                    let t = Math.min(this.currentTime, u) / h
                      , e = Math.floor(t)
                      , i = t % 1;
                    !i && t >= 1 && (i = 1),
                    1 === i && e--,
                    (e = Math.min(e, d + 1)) % 2 && ("reverse" === p ? (i = 1 - i,
                    f && (i -= f / h)) : "mirror" === p && (x = s)),
                    y = tc(0, 1, i) * h
                }
                let b = v ? {
                    done: !1,
                    value: a[0]
                } : x.next(y);
                o && (b.value = o(b.value));
                let {done: P} = b;
                v || null === l || (P = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
                let w = null === this.holdTime && ("finished" === this.state || "running" === this.state && P);
                return w && void 0 !== r && (b.value = ep(a, this.options, r)),
                m && m(b.value),
                w && this.finish(),
                b
            }
            get duration() {
                let {resolved: t} = this;
                return t ? z(t.calculatedDuration) : 0
            }
            get time() {
                return z(this.currentTime)
            }
            set time(t) {
                t = N(t),
                this.currentTime = t,
                null !== this.holdTime || 0 === this.speed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
            }
            get speed() {
                return this.playbackSpeed
            }
            set speed(t) {
                let e = this.playbackSpeed !== t;
                this.playbackSpeed = t,
                e && (this.time = z(this.currentTime))
            }
            play() {
                if (this.resolver.isScheduled || this.resolver.resume(),
                !this._resolved) {
                    this.pendingPlayState = "running";
                    return
                }
                if (this.isStopped)
                    return;
                let {driver: t=eK, onPlay: e, startTime: i} = this.options;
                this.driver || (this.driver = t(t => this.tick(t))),
                e && e();
                let r = this.driver.now();
                null !== this.holdTime ? this.startTime = r - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = r) : this.startTime = null != i ? i : this.calcStartTime(),
                "finished" === this.state && this.updateFinishedPromise(),
                this.cancelTime = this.startTime,
                this.holdTime = null,
                this.state = "running",
                this.driver.start()
            }
            pause() {
                var t;
                if (!this._resolved) {
                    this.pendingPlayState = "paused";
                    return
                }
                this.state = "paused",
                this.holdTime = null !== (t = this.currentTime) && void 0 !== t ? t : 0
            }
            complete() {
                "running" !== this.state && this.play(),
                this.pendingPlayState = this.state = "finished",
                this.holdTime = null
            }
            finish() {
                this.teardown(),
                this.state = "finished";
                let {onComplete: t} = this.options;
                t && t()
            }
            cancel() {
                null !== this.cancelTime && this.tick(this.cancelTime),
                this.teardown(),
                this.updateFinishedPromise()
            }
            teardown() {
                this.state = "idle",
                this.stopDriver(),
                this.resolveFinishedPromise(),
                this.updateFinishedPromise(),
                this.startTime = this.cancelTime = null,
                this.resolver.cancel(),
                eg.mainThread--
            }
            stopDriver() {
                this.driver && (this.driver.stop(),
                this.driver = void 0)
            }
            sample(t) {
                return this.startTime = 0,
                this.tick(t, !0)
            }
        }
        let eQ = new Set(["opacity", "clipPath", "filter", "transform"])
          , e0 = L( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
          , e1 = {
            anticipate: to,
            backInOut: ts,
            circInOut: tu
        };
        class e2 extends ef {
            constructor(t) {
                super(t);
                let {name: e, motionValue: i, element: r, keyframes: n} = this.options;
                this.resolver = new eh(n, (t, e) => this.onKeyframesResolved(t, e),e,i,r),
                this.resolver.scheduleResolve()
            }
            initPlayback(t, e) {
                var i;
                let {duration: r=300, times: n, ease: s, type: o, motionValue: a, name: l, startTime: u} = this.options;
                if (!a.owner || !a.owner.current)
                    return !1;
                if ("string" == typeof s && q() && s in e1 && (s = e1[s]),
                Y((i = this.options).type) || "spring" === i.type || !function t(e) {
                    return !!("function" == typeof e && q() || !e || "string" == typeof e && (e in J || q()) || X(e) || Array.isArray(e) && e.every(t))
                }(i.ease)) {
                    let {onComplete: e, onUpdate: i, motionValue: a, element: l, ...u} = this.options
                      , h = function(t, e) {
                        let i = new eJ({
                            ...e,
                            keyframes: t,
                            repeat: 0,
                            delay: 0,
                            isGenerator: !0
                        })
                          , r = {
                            done: !1,
                            value: t[0]
                        }
                          , n = []
                          , s = 0;
                        for (; !r.done && s < 2e4; )
                            n.push((r = i.sample(s)).value),
                            s += 10;
                        return {
                            times: void 0,
                            keyframes: n,
                            duration: s - 10,
                            ease: "linear"
                        }
                    }(t, u);
                    1 === (t = h.keyframes).length && (t[1] = t[0]),
                    r = h.duration,
                    n = h.times,
                    s = h.ease,
                    o = "keyframes"
                }
                let h = function(t, e, i, {delay: r=0, duration: n=300, repeat: s=0, repeatType: o="loop", ease: a="easeInOut", times: l}={}) {
                    let u = {
                        [e]: i
                    };
                    l && (u.offset = l);
                    let h = function t(e, i) {
                        if (e)
                            return "function" == typeof e && q() ? G(e, i) : X(e) ? Z(e) : Array.isArray(e) ? e.map(e => t(e, i) || J.easeOut) : J[e]
                    }(a, n);
                    Array.isArray(h) && (u.easing = h),
                    y.value && eg.waapi++;
                    let c = t.animate(u, {
                        delay: r,
                        duration: n,
                        easing: Array.isArray(h) ? "linear" : h,
                        fill: "both",
                        iterations: s + 1,
                        direction: "reverse" === o ? "alternate" : "normal"
                    });
                    return y.value && c.finished.finally( () => {
                        eg.waapi--
                    }
                    ),
                    c
                }(a.owner.current, l, t, {
                    ...this.options,
                    duration: r,
                    times: n,
                    ease: s
                });
                return h.startTime = null != u ? u : this.calcStartTime(),
                this.pendingTimeline ? (W(h, this.pendingTimeline),
                this.pendingTimeline = void 0) : h.onfinish = () => {
                    let {onComplete: i} = this.options;
                    a.set(ep(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise()
                }
                ,
                {
                    animation: h,
                    duration: r,
                    times: n,
                    type: o,
                    ease: s,
                    keyframes: t
                }
            }
            get duration() {
                let {resolved: t} = this;
                if (!t)
                    return 0;
                let {duration: e} = t;
                return z(e)
            }
            get time() {
                let {resolved: t} = this;
                if (!t)
                    return 0;
                let {animation: e} = t;
                return z(e.currentTime || 0)
            }
            set time(t) {
                let {resolved: e} = this;
                if (!e)
                    return;
                let {animation: i} = e;
                i.currentTime = N(t)
            }
            get speed() {
                let {resolved: t} = this;
                if (!t)
                    return 1;
                let {animation: e} = t;
                return e.playbackRate
            }
            set speed(t) {
                let {resolved: e} = this;
                if (!e)
                    return;
                let {animation: i} = e;
                i.playbackRate = t
            }
            get state() {
                let {resolved: t} = this;
                if (!t)
                    return "idle";
                let {animation: e} = t;
                return e.playState
            }
            get startTime() {
                let {resolved: t} = this;
                if (!t)
                    return null;
                let {animation: e} = t;
                return e.startTime
            }
            attachTimeline(t) {
                if (this._resolved) {
                    let {resolved: e} = this;
                    if (!e)
                        return g;
                    let {animation: i} = e;
                    W(i, t)
                } else
                    this.pendingTimeline = t;
                return g
            }
            play() {
                if (this.isStopped)
                    return;
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e} = t;
                "finished" === e.playState && this.updateFinishedPromise(),
                e.play()
            }
            pause() {
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e} = t;
                e.pause()
            }
            stop() {
                if (this.resolver.cancel(),
                this.isStopped = !0,
                "idle" === this.state)
                    return;
                this.resolveFinishedPromise(),
                this.updateFinishedPromise();
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e, keyframes: i, duration: r, type: n, ease: s, times: o} = t;
                if ("idle" === e.playState || "finished" === e.playState)
                    return;
                if (this.time) {
                    let {motionValue: t, onUpdate: e, onComplete: a, element: l, ...u} = this.options
                      , h = new eJ({
                        ...u,
                        keyframes: i,
                        duration: r,
                        type: n,
                        ease: s,
                        times: o,
                        isGenerator: !0
                    })
                      , c = N(this.time);
                    t.setWithVelocity(h.sample(c - 10).value, h.sample(c).value, 10)
                }
                let {onStop: a} = this.options;
                a && a(),
                this.cancel()
            }
            complete() {
                let {resolved: t} = this;
                t && t.animation.finish()
            }
            cancel() {
                let {resolved: t} = this;
                t && t.animation.cancel()
            }
            static supports(t) {
                let {motionValue: e, name: i, repeatDelay: r, repeatType: n, damping: s, type: o} = t;
                if (!e || !e.owner || !(e.owner.current instanceof HTMLElement))
                    return !1;
                let {onUpdate: a, transformTemplate: l} = e.owner.getProps();
                return e0() && i && eQ.has(i) && !a && !l && !r && "mirror" !== n && 0 !== s && "inertia" !== o
            }
        }
        let e5 = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        }
          , e3 = t => ({
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        })
          , e9 = {
            type: "keyframes",
            duration: .8
        }
          , e6 = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        }
          , e8 = (t, {keyframes: e}) => e.length > 2 ? e9 : h.has(t) ? t.startsWith("scale") ? e3(e[1]) : e5 : e6
          , e4 = (t, e, i, r={}, n, s) => o => {
            let a = l(r, t) || {}
              , u = a.delay || r.delay || 0
              , {elapsed: h=0} = r;
            h -= N(u);
            let c = {
                keyframes: Array.isArray(i) ? i : [null, i],
                ease: "easeOut",
                velocity: e.getVelocity(),
                ...a,
                delay: -h,
                onUpdate: t => {
                    e.set(t),
                    a.onUpdate && a.onUpdate(t)
                }
                ,
                onComplete: () => {
                    o(),
                    a.onComplete && a.onComplete()
                }
                ,
                name: t,
                motionValue: e,
                element: s ? void 0 : n
            };
            !function({when: t, delay: e, delayChildren: i, staggerChildren: r, staggerDirection: n, repeat: s, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...h}) {
                return !!Object.keys(h).length
            }(a) && (c = {
                ...c,
                ...e8(t, c)
            }),
            c.duration && (c.duration = N(c.duration)),
            c.repeatDelay && (c.repeatDelay = N(c.repeatDelay)),
            void 0 !== c.from && (c.keyframes[0] = c.from);
            let d = !1;
            if (!1 !== c.type && (0 !== c.duration || c.repeatDelay) || (c.duration = 0,
            0 !== c.delay || (d = !0)),
            ($.current || m.skipAnimations) && (d = !0,
            c.duration = 0,
            c.delay = 0),
            d && !s && void 0 !== e.get()) {
                let t = ep(c.keyframes, a);
                if (void 0 !== t)
                    return b.update( () => {
                        c.onUpdate(t),
                        c.onComplete()
                    }
                    ),
                    new U([])
            }
            return !s && e2.supports(c) ? new e2(c) : new eJ(c)
        }
        ;
        function e7(t, e, {delay: i=0, transitionOverride: r, type: n}={}) {
            var s;
            let {transition: o=t.getDefaultTransition(), transitionEnd: u, ...h} = e;
            r && (o = r);
            let d = []
              , p = n && t.animationState && t.animationState.getState()[n];
            for (let e in h) {
                let r = t.getValue(e, null !== (s = t.latestValues[e]) && void 0 !== s ? s : null)
                  , n = h[e];
                if (void 0 === n || p && function({protectedKeys: t, needsAnimating: e}, i) {
                    let r = t.hasOwnProperty(i) && !0 !== e[i];
                    return e[i] = !1,
                    r
                }(p, e))
                    continue;
                let a = {
                    delay: i,
                    ...l(o || {}, e)
                }
                  , u = !1;
                if (window.MotionHandoffAnimation) {
                    let i = t.props[F];
                    if (i) {
                        let t = window.MotionHandoffAnimation(i, e, b);
                        null !== t && (a.startTime = t,
                        u = !0)
                    }
                }
                k(t, e),
                r.start(e4(e, r, n, t.shouldReduceMotion && c.has(e) ? {
                    type: !1
                } : a, t, u));
                let f = r.animation;
                f && d.push(f)
            }
            return u && Promise.all(d).then( () => {
                b.update( () => {
                    u && function(t, e) {
                        let {transitionEnd: i={}, transition: r={}, ...n} = a(t, e) || {};
                        for (let e in n = {
                            ...n,
                            ...i
                        }) {
                            let i = f(n[e]);
                            t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, R(i))
                        }
                    }(t, u)
                }
                )
            }
            ),
            d
        }
        function it(t, e, i={}) {
            var r;
            let n = a(t, e, "exit" === i.type ? null === (r = t.presenceContext) || void 0 === r ? void 0 : r.custom : void 0)
              , {transition: s=t.getDefaultTransition() || {}} = n || {};
            i.transitionOverride && (s = i.transitionOverride);
            let o = n ? () => Promise.all(e7(t, n, i)) : () => Promise.resolve()
              , l = t.variantChildren && t.variantChildren.size ? (r=0) => {
                let {delayChildren: n=0, staggerChildren: o, staggerDirection: a} = s;
                return function(t, e, i=0, r=0, n=1, s) {
                    let o = []
                      , a = (t.variantChildren.size - 1) * r
                      , l = 1 === n ? (t=0) => t * r : (t=0) => a - t * r;
                    return Array.from(t.variantChildren).sort(ie).forEach( (t, r) => {
                        t.notify("AnimationStart", e),
                        o.push(it(t, e, {
                            ...s,
                            delay: i + l(r)
                        }).then( () => t.notify("AnimationComplete", e)))
                    }
                    ),
                    Promise.all(o)
                }(t, e, n + r, o, a, i)
            }
            : () => Promise.resolve()
              , {when: u} = s;
            if (!u)
                return Promise.all([o(), l(i.delay)]);
            {
                let[t,e] = "beforeChildren" === u ? [o, l] : [l, o];
                return t().then( () => e())
            }
        }
        function ie(t, e) {
            return t.sortNodePosition(e)
        }
        function ii(t, e) {
            if (!Array.isArray(e))
                return !1;
            let i = e.length;
            if (i !== t.length)
                return !1;
            for (let r = 0; r < i; r++)
                if (e[r] !== t[r])
                    return !1;
            return !0
        }
        function ir(t) {
            return "string" == typeof t || Array.isArray(t)
        }
        let is = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
          , io = ["initial", ...is]
          , ia = io.length
          , il = [...is].reverse()
          , iu = is.length;
        function ih(t=!1) {
            return {
                isActive: t,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        function ic() {
            return {
                animate: ih(!0),
                whileInView: ih(),
                whileHover: ih(),
                whileTap: ih(),
                whileDrag: ih(),
                whileFocus: ih(),
                exit: ih()
            }
        }
        class id {
            constructor(t) {
                this.isMounted = !1,
                this.node = t
            }
            update() {}
        }
        class ip extends id {
            constructor(t) {
                super(t),
                t.animationState || (t.animationState = function(t) {
                    let e = e => Promise.all(e.map( ({animation: e, options: i}) => (function(t, e, i={}) {
                        let r;
                        if (t.notify("AnimationStart", e),
                        Array.isArray(e))
                            r = Promise.all(e.map(e => it(t, e, i)));
                        else if ("string" == typeof e)
                            r = it(t, e, i);
                        else {
                            let n = "function" == typeof e ? a(t, e, i.custom) : e;
                            r = Promise.all(e7(t, n, i))
                        }
                        return r.then( () => {
                            t.notify("AnimationComplete", e)
                        }
                        )
                    }
                    )(t, e, i)))
                      , i = ic()
                      , r = !0
                      , s = e => (i, r) => {
                        var n;
                        let s = a(t, r, "exit" === e ? null === (n = t.presenceContext) || void 0 === n ? void 0 : n.custom : void 0);
                        if (s) {
                            let {transition: t, transitionEnd: e, ...r} = s;
                            i = {
                                ...i,
                                ...r,
                                ...e
                            }
                        }
                        return i
                    }
                    ;
                    function o(o) {
                        let {props: l} = t
                          , u = function t(e) {
                            if (!e)
                                return;
                            if (!e.isControllingVariants) {
                                let i = e.parent && t(e.parent) || {};
                                return void 0 !== e.props.initial && (i.initial = e.props.initial),
                                i
                            }
                            let i = {};
                            for (let t = 0; t < ia; t++) {
                                let r = io[t]
                                  , n = e.props[r];
                                (ir(n) || !1 === n) && (i[r] = n)
                            }
                            return i
                        }(t.parent) || {}
                          , h = []
                          , c = new Set
                          , p = {}
                          , f = 1 / 0;
                        for (let e = 0; e < iu; e++) {
                            var m, g;
                            let a = il[e]
                              , v = i[a]
                              , y = void 0 !== l[a] ? l[a] : u[a]
                              , x = ir(y)
                              , b = a === o ? v.isActive : null;
                            !1 === b && (f = e);
                            let P = y === u[a] && y !== l[a] && x;
                            if (P && r && t.manuallyAnimateOnMount && (P = !1),
                            v.protectedKeys = {
                                ...p
                            },
                            !v.isActive && null === b || !y && !v.prevProp || n(y) || "boolean" == typeof y)
                                continue;
                            let w = (m = v.prevProp,
                            "string" == typeof (g = y) ? g !== m : !!Array.isArray(g) && !ii(g, m))
                              , S = w || a === o && v.isActive && !P && x || e > f && x
                              , T = !1
                              , A = Array.isArray(y) ? y : [y]
                              , E = A.reduce(s(a), {});
                            !1 === b && (E = {});
                            let {prevResolvedValues: M={}} = v
                              , C = {
                                ...M,
                                ...E
                            }
                              , O = e => {
                                S = !0,
                                c.has(e) && (T = !0,
                                c.delete(e)),
                                v.needsAnimating[e] = !0;
                                let i = t.getValue(e);
                                i && (i.liveStyle = !1)
                            }
                            ;
                            for (let t in C) {
                                let e = E[t]
                                  , i = M[t];
                                if (p.hasOwnProperty(t))
                                    continue;
                                let r = !1;
                                (d(e) && d(i) ? ii(e, i) : e === i) ? void 0 !== e && c.has(t) ? O(t) : v.protectedKeys[t] = !0 : null != e ? O(t) : c.add(t)
                            }
                            v.prevProp = y,
                            v.prevResolvedValues = E,
                            v.isActive && (p = {
                                ...p,
                                ...E
                            }),
                            r && t.blockInitialAnimation && (S = !1);
                            let j = !(P && w) || T;
                            S && j && h.push(...A.map(t => ({
                                animation: t,
                                options: {
                                    type: a
                                }
                            })))
                        }
                        if (c.size) {
                            let e = {};
                            if ("boolean" != typeof l.initial) {
                                let i = a(t, Array.isArray(l.initial) ? l.initial[0] : l.initial);
                                i && i.transition && (e.transition = i.transition)
                            }
                            c.forEach(i => {
                                let r = t.getBaseTarget(i)
                                  , n = t.getValue(i);
                                n && (n.liveStyle = !0),
                                e[i] = null != r ? r : null
                            }
                            ),
                            h.push({
                                animation: e
                            })
                        }
                        let v = !!h.length;
                        return r && (!1 === l.initial || l.initial === l.animate) && !t.manuallyAnimateOnMount && (v = !1),
                        r = !1,
                        v ? e(h) : Promise.resolve()
                    }
                    return {
                        animateChanges: o,
                        setActive: function(e, r) {
                            var n;
                            if (i[e].isActive === r)
                                return Promise.resolve();
                            null === (n = t.variantChildren) || void 0 === n || n.forEach(t => {
                                var i;
                                return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, r)
                            }
                            ),
                            i[e].isActive = r;
                            let s = o(e);
                            for (let t in i)
                                i[t].protectedKeys = {};
                            return s
                        },
                        setAnimateFunction: function(i) {
                            e = i(t)
                        },
                        getState: () => i,
                        reset: () => {
                            i = ic(),
                            r = !0
                        }
                    }
                }(t))
            }
            updateAnimationControlsSubscription() {
                let {animate: t} = this.node.getProps();
                n(t) && (this.unmountControls = t.subscribe(this.node))
            }
            mount() {
                this.updateAnimationControlsSubscription()
            }
            update() {
                let {animate: t} = this.node.getProps()
                  , {animate: e} = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription()
            }
            unmount() {
                var t;
                this.node.animationState.reset(),
                null === (t = this.unmountControls) || void 0 === t || t.call(this)
            }
        }
        let im = 0;
        class ig extends id {
            constructor() {
                super(...arguments),
                this.id = im++
            }
            update() {
                if (!this.node.presenceContext)
                    return;
                let {isPresent: t, onExitComplete: e} = this.node.presenceContext
                  , {isPresent: i} = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === i)
                    return;
                let r = this.node.animationState.setActive("exit", !t);
                e && !t && r.then( () => {
                    e(this.id)
                }
                )
            }
            mount() {
                let {register: t, onExitComplete: e} = this.node.presenceContext || {};
                e && e(this.id),
                t && (this.unmount = t(this.id))
            }
            unmount() {}
        }
        let iv = {
            x: !1,
            y: !1
        };
        function iy(t, e, i, r={
            passive: !0
        }) {
            return t.addEventListener(e, i, r),
            () => t.removeEventListener(e, i)
        }
        let ix = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;
        function ib(t) {
            return {
                point: {
                    x: t.pageX,
                    y: t.pageY
                }
            }
        }
        let iP = t => e => ix(e) && t(e, ib(e));
        function iw(t, e, i, r) {
            return iy(t, e, iP(i), r)
        }
        function iS({top: t, left: e, right: i, bottom: r}) {
            return {
                x: {
                    min: e,
                    max: i
                },
                y: {
                    min: t,
                    max: r
                }
            }
        }
        function iT(t) {
            return t.max - t.min
        }
        function iA(t, e, i, r=.5) {
            t.origin = r,
            t.originPoint = ev(e.min, e.max, t.origin),
            t.scale = iT(i) / iT(e),
            t.translate = ev(i.min, i.max, t.origin) - t.originPoint,
            (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1),
            (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
        }
        function iE(t, e, i, r) {
            iA(t.x, e.x, i.x, r ? r.originX : void 0),
            iA(t.y, e.y, i.y, r ? r.originY : void 0)
        }
        function iM(t, e, i) {
            t.min = i.min + e.min,
            t.max = t.min + iT(e)
        }
        function iC(t, e, i) {
            t.min = e.min - i.min,
            t.max = t.min + iT(e)
        }
        function iO(t, e, i) {
            iC(t.x, e.x, i.x),
            iC(t.y, e.y, i.y)
        }
        let ij = () => ({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        })
          , iV = () => ({
            x: ij(),
            y: ij()
        })
          , iR = () => ({
            min: 0,
            max: 0
        })
          , iD = () => ({
            x: iR(),
            y: iR()
        });
        function ik(t) {
            return [t("x"), t("y")]
        }
        function i_(t) {
            return void 0 === t || 1 === t
        }
        function iF({scale: t, scaleX: e, scaleY: i}) {
            return !i_(t) || !i_(e) || !i_(i)
        }
        function iL(t) {
            return iF(t) || iB(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
        }
        function iB(t) {
            var e, i;
            return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
        }
        function iI(t, e, i, r, n) {
            return void 0 !== n && (t = r + n * (t - r)),
            r + i * (t - r) + e
        }
        function iU(t, e=0, i=1, r, n) {
            t.min = iI(t.min, e, i, r, n),
            t.max = iI(t.max, e, i, r, n)
        }
        function iN(t, {x: e, y: i}) {
            iU(t.x, e.translate, e.scale, e.originPoint),
            iU(t.y, i.translate, i.scale, i.originPoint)
        }
        function iz(t, e) {
            t.min = t.min + e,
            t.max = t.max + e
        }
        function i$(t, e, i, r, n=.5) {
            let s = ev(t.min, t.max, n);
            iU(t, e, i, s, r)
        }
        function iY(t, e) {
            i$(t.x, e.x, e.scaleX, e.scale, e.originX),
            i$(t.y, e.y, e.scaleY, e.scale, e.originY)
        }
        function iW(t, e) {
            return iS(function(t, e) {
                if (!e)
                    return t;
                let i = e({
                    x: t.left,
                    y: t.top
                })
                  , r = e({
                    x: t.right,
                    y: t.bottom
                });
                return {
                    top: i.y,
                    left: i.x,
                    bottom: r.y,
                    right: r.x
                }
            }(t.getBoundingClientRect(), e))
        }
        function iX(t) {
            return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
        }
        function iH(t, e) {
            let i = `${e}PointerCapture`;
            if (t.target instanceof Element && i in t.target && void 0 !== t.pointerId)
                try {
                    t.target[i](t.pointerId)
                } catch (t) {}
        }
        let iq = (t, e) => Math.abs(t - e);
        class iK {
            constructor(t, e, {transformPagePoint: i, dragSnapToOrigin: r=!1}={}) {
                if (this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.updatePoint = () => {
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let t = iJ(this.lastMoveEventInfo, this.history)
                      , e = null !== this.startEvent
                      , i = function(t, e) {
                        return Math.sqrt(iq(t.x, e.x) ** 2 + iq(t.y, e.y) ** 2)
                    }(t.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                    if (!e && !i)
                        return;
                    let {point: r} = t
                      , {timestamp: n} = w;
                    this.history.push({
                        ...r,
                        timestamp: n
                    });
                    let {onStart: s, onMove: o} = this.handlers;
                    e || (s && s(this.lastMoveEvent, t),
                    this.startEvent = this.lastMoveEvent),
                    o && o(this.lastMoveEvent, t)
                }
                ,
                this.handlePointerMove = (t, e) => {
                    if (this.index = i0(t.currentTarget),
                    t.target instanceof Element && t.target.hasPointerCapture && void 0 !== t.pointerId)
                        try {
                            if (!t.target.hasPointerCapture(t.pointerId))
                                return
                        } catch (t) {}
                    this.lastMoveEvent = t,
                    this.lastMoveEventInfo = iG(e, this.transformPagePoint),
                    b.update(this.updatePoint, !0)
                }
                ,
                this.handlePointerUp = (t, e) => {
                    iH(t, "release"),
                    this.end();
                    let {onEnd: i, onSessionEnd: r, resumeAnimation: n} = this.handlers;
                    if (this.dragSnapToOrigin && n && n(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let s = iJ("pointercancel" === t.type || "lostpointercapture" === t.type ? this.lastMoveEventInfo : iG(e, this.transformPagePoint), this.history);
                    this.startEvent && i && i(t, s),
                    r && r(t, s)
                }
                ,
                !ix(t))
                    return;
                this.dragSnapToOrigin = r,
                this.handlers = e,
                this.transformPagePoint = i;
                let n = iG(ib(t), this.transformPagePoint)
                  , {point: s} = n
                  , {timestamp: o} = w;
                this.history = [{
                    ...s,
                    timestamp: o
                }];
                let {onSessionStart: a} = e;
                a && a(t, iJ(n, this.history)),
                iH(t, "set"),
                this.removeListeners = eE(iw(t.currentTarget, "pointermove", this.handlePointerMove), iw(t.currentTarget, "pointerup", this.handlePointerUp), iw(t.currentTarget, "pointercancel", this.handlePointerUp), iw(t.currentTarget, "lostpointercapture", (t, e) => {
                    i0(t.currentTarget) !== this.index ? iH(t, "set") : this.handlePointerUp(t, e)
                }
                ))
            }
            updateHandlers(t) {
                this.handlers = t
            }
            end() {
                this.removeListeners && this.removeListeners(),
                P(this.updatePoint)
            }
        }
        function iG(t, e) {
            return e ? {
                point: e(t.point)
            } : t
        }
        function iZ(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }
        function iJ({point: t}, e) {
            return {
                point: t,
                delta: iZ(t, iQ(e)),
                offset: iZ(t, e[0]),
                velocity: function(t, e) {
                    if (t.length < 2)
                        return {
                            x: 0,
                            y: 0
                        };
                    let i = t.length - 1
                      , r = null
                      , n = iQ(t);
                    for (; i >= 0 && (r = t[i],
                    !(n.timestamp - r.timestamp > N(.1))); )
                        i--;
                    if (!r)
                        return {
                            x: 0,
                            y: 0
                        };
                    let s = z(n.timestamp - r.timestamp);
                    if (0 === s)
                        return {
                            x: 0,
                            y: 0
                        };
                    let o = {
                        x: (n.x - r.x) / s,
                        y: (n.y - r.y) / s
                    };
                    return o.x === 1 / 0 && (o.x = 0),
                    o.y === 1 / 0 && (o.y = 0),
                    o
                }(e, .1)
            }
        }
        function iQ(t) {
            return t[t.length - 1]
        }
        function i0(t) {
            return t.parentNode ? Array.from(t.parentNode.children).indexOf(t) : -1
        }
        function i1(t, e, i) {
            return {
                min: void 0 !== e ? t.min + e : void 0,
                max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
            }
        }
        function i2(t, e) {
            let i = e.min - t.min
              , r = e.max - t.max;
            return e.max - e.min < t.max - t.min && ([i,r] = [r, i]),
            {
                min: i,
                max: r
            }
        }
        function i5(t, e, i) {
            return {
                min: i3(t, e),
                max: i3(t, i)
            }
        }
        function i3(t, e) {
            return "number" == typeof t ? t : t[e] || 0
        }
        let i9 = new WeakMap;
        class i6 {
            constructor(t) {
                this.openDragLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = iD(),
                this.visualElement = t
            }
            start(t, {snapToCursor: e=!1}={}) {
                let {presenceContext: i} = this.visualElement;
                if (i && !1 === i.isPresent)
                    return;
                let {dragSnapToOrigin: r} = this.getProps();
                this.panSession = new iK(t,{
                    onSessionStart: t => {
                        let {dragSnapToOrigin: i} = this.getProps();
                        i ? this.pauseAnimation() : this.stopAnimation(),
                        e && this.snapToCursor(ib(t).point)
                    }
                    ,
                    onStart: (t, e) => {
                        var i;
                        let {drag: r, dragPropagation: n, onDragStart: s} = this.getProps();
                        if (r && !n && (this.openDragLock && this.openDragLock(),
                        this.openDragLock = "x" === (i = r) || "y" === i ? iv[i] ? null : (iv[i] = !0,
                        () => {
                            iv[i] = !1
                        }
                        ) : iv.x || iv.y ? null : (iv.x = iv.y = !0,
                        () => {
                            iv.x = iv.y = !1
                        }
                        ),
                        !this.openDragLock))
                            return;
                        this.isDragging = !0,
                        this.currentDirection = null,
                        this.resolveConstraints(),
                        this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                        ik(t => {
                            let e = this.getAxisMotionValue(t).get() || 0;
                            if (tE.test(e)) {
                                let {projection: i} = this.visualElement;
                                if (i && i.layout) {
                                    let r = i.layout.layoutBox[t];
                                    r && (e = iT(r) * (parseFloat(e) / 100))
                                }
                            }
                            this.originPoint[t] = e
                        }
                        ),
                        s && b.postRender( () => s(t, e)),
                        k(this.visualElement, "transform");
                        let {animationState: o} = this.visualElement;
                        o && o.setActive("whileDrag", !0)
                    }
                    ,
                    onMove: (t, e) => {
                        let {dragPropagation: i, dragDirectionLock: r, onDirectionLock: n, onDrag: s} = this.getProps();
                        if (!i && !this.openDragLock)
                            return;
                        let {offset: o} = e;
                        if (r && null === this.currentDirection) {
                            this.currentDirection = function(t, e=10) {
                                let i = null;
                                return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"),
                                i
                            }(o),
                            null !== this.currentDirection && n && n(this.currentDirection);
                            return
                        }
                        this.updateAxis("x", e.point, o),
                        this.updateAxis("y", e.point, o),
                        this.visualElement.render(),
                        s && s(t, e)
                    }
                    ,
                    onSessionEnd: (t, e) => this.stop(t, e),
                    resumeAnimation: () => ik(t => {
                        var e;
                        return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                    }
                    )
                },{
                    transformPagePoint: this.visualElement.getTransformPagePoint(),
                    dragSnapToOrigin: r
                })
            }
            stop(t, e) {
                let i = this.isDragging;
                if (this.cancel(),
                !i)
                    return;
                let {velocity: r} = e;
                this.startAnimation(r);
                let {onDragEnd: n} = this.getProps();
                n && b.postRender( () => n(t, e))
            }
            cancel() {
                this.isDragging = !1;
                let {projection: t, animationState: e} = this.visualElement;
                t && (t.isAnimationBlocked = !1),
                this.panSession && this.panSession.end(),
                this.panSession = void 0;
                let {dragPropagation: i} = this.getProps();
                !i && this.openDragLock && (this.openDragLock(),
                this.openDragLock = null),
                e && e.setActive("whileDrag", !1)
            }
            updateAxis(t, e, i) {
                let {drag: r} = this.getProps();
                if (!i || !i8(t, r, this.currentDirection))
                    return;
                let n = this.getAxisMotionValue(t)
                  , s = this.originPoint[t] + i[t];
                this.constraints && this.constraints[t] && (s = function(t, {min: e, max: i}, r) {
                    return void 0 !== e && t < e ? t = r ? ev(e, t, r.min) : Math.max(t, e) : void 0 !== i && t > i && (t = r ? ev(i, t, r.max) : Math.min(t, i)),
                    t
                }(s, this.constraints[t], this.elastic[t])),
                n.set(s)
            }
            resolveConstraints() {
                var t;
                let {dragConstraints: e, dragElastic: i} = this.getProps()
                  , r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout
                  , n = this.constraints;
                e && iX(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && r ? this.constraints = function(t, {top: e, left: i, bottom: r, right: n}) {
                    return {
                        x: i1(t.x, i, n),
                        y: i1(t.y, e, r)
                    }
                }(r.layoutBox, e) : this.constraints = !1,
                this.elastic = function(t=.35) {
                    return !1 === t ? t = 0 : !0 === t && (t = .35),
                    {
                        x: i5(t, "left", "right"),
                        y: i5(t, "top", "bottom")
                    }
                }(i),
                n !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && ik(t => {
                    !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                        let i = {};
                        return void 0 !== e.min && (i.min = e.min - t.min),
                        void 0 !== e.max && (i.max = e.max - t.min),
                        i
                    }(r.layoutBox[t], this.constraints[t]))
                }
                )
            }
            resolveRefConstraints() {
                var t;
                let {dragConstraints: e, onMeasureDragConstraints: i} = this.getProps();
                if (!e || !iX(e))
                    return !1;
                let r = e.current;
                g(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                let {projection: n} = this.visualElement;
                if (!n || !n.layout)
                    return !1;
                let s = function(t, e, i) {
                    let r = iW(t, i)
                      , {scroll: n} = e;
                    return n && (iz(r.x, n.offset.x),
                    iz(r.y, n.offset.y)),
                    r
                }(r, n.root, this.visualElement.getTransformPagePoint())
                  , o = {
                    x: i2((t = n.layout.layoutBox).x, s.x),
                    y: i2(t.y, s.y)
                };
                if (i) {
                    let t = i(function({x: t, y: e}) {
                        return {
                            top: e.min,
                            right: t.max,
                            bottom: e.max,
                            left: t.min
                        }
                    }(o));
                    this.hasMutatedConstraints = !!t,
                    t && (o = iS(t))
                }
                return o
            }
            startAnimation(t) {
                let {drag: e, dragMomentum: i, dragElastic: r, dragTransition: n, dragSnapToOrigin: s, onDragTransitionEnd: o} = this.getProps()
                  , a = this.constraints || {};
                return Promise.all(ik(o => {
                    if (!i8(o, e, this.currentDirection))
                        return;
                    let l = a && a[o] || {};
                    s && (l = {
                        min: 0,
                        max: 0
                    });
                    let u = {
                        type: "inertia",
                        velocity: i ? t[o] : 0,
                        bounceStiffness: r ? 200 : 1e6,
                        bounceDamping: r ? 40 : 1e7,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...n,
                        ...l
                    };
                    return this.startAxisValueAnimation(o, u)
                }
                )).then(o)
            }
            startAxisValueAnimation(t, e) {
                let i = this.getAxisMotionValue(t);
                return k(this.visualElement, t),
                i.start(e4(t, i, 0, e, this.visualElement, !1))
            }
            stopAnimation() {
                ik(t => this.getAxisMotionValue(t).stop())
            }
            pauseAnimation() {
                ik(t => {
                    var e;
                    return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                }
                )
            }
            getAnimationState(t) {
                var e;
                return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
            }
            getAxisMotionValue(t) {
                let e = `_drag${t.toUpperCase()}`
                  , i = this.visualElement.getProps();
                return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
            }
            snapToCursor(t) {
                ik(e => {
                    let {drag: i} = this.getProps();
                    if (!i8(e, i, this.currentDirection))
                        return;
                    let {projection: r} = this.visualElement
                      , n = this.getAxisMotionValue(e);
                    if (r && r.layout) {
                        let {min: i, max: s} = r.layout.layoutBox[e];
                        n.set(t[e] - ev(i, s, .5))
                    }
                }
                )
            }
            scalePositionWithinConstraints() {
                if (!this.visualElement.current)
                    return;
                let {drag: t, dragConstraints: e} = this.getProps()
                  , {projection: i} = this.visualElement;
                if (!iX(e) || !i || !this.constraints)
                    return;
                this.stopAnimation();
                let r = {
                    x: 0,
                    y: 0
                };
                ik(t => {
                    let e = this.getAxisMotionValue(t);
                    if (e && !1 !== this.constraints) {
                        let i = e.get();
                        r[t] = function(t, e) {
                            let i = .5
                              , r = iT(t)
                              , n = iT(e);
                            return n > r ? i = K(e.min, e.max - r, t.min) : r > n && (i = K(t.min, t.max - n, e.min)),
                            tc(0, 1, i)
                        }({
                            min: i,
                            max: i
                        }, this.constraints[t])
                    }
                }
                );
                let {transformTemplate: n} = this.visualElement.getProps();
                this.visualElement.current.style.transform = n ? n({}, "") : "none",
                i.root && i.root.updateScroll(),
                i.updateLayout(),
                this.resolveConstraints(),
                ik(e => {
                    if (!i8(e, t, null))
                        return;
                    let i = this.getAxisMotionValue(e)
                      , {min: n, max: s} = this.constraints[e];
                    i.set(ev(n, s, r[e]))
                }
                )
            }
            addListeners() {
                if (!this.visualElement.current)
                    return;
                i9.set(this.visualElement, this);
                let t = iw(this.visualElement.current, "pointerdown", t => {
                    let {drag: e, dragListener: i=!0} = this.getProps();
                    e && i && this.start(t)
                }
                )
                  , e = () => {
                    let {dragConstraints: t} = this.getProps();
                    iX(t) && t.current && (this.constraints = this.resolveRefConstraints())
                }
                  , {projection: i} = this.visualElement
                  , r = i.addEventListener("measure", e);
                i && !i.layout && (i.root && i.root.updateScroll(),
                i.updateLayout()),
                b.read(e);
                let n = iy(window, "resize", () => this.scalePositionWithinConstraints())
                  , s = i.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e}) => {
                    this.isDragging && e && (ik(e => {
                        let i = this.getAxisMotionValue(e);
                        i && (this.originPoint[e] += t[e].translate,
                        i.set(i.get() + t[e].translate))
                    }
                    ),
                    this.visualElement.render())
                }
                );
                return () => {
                    n(),
                    t(),
                    r(),
                    s && s()
                }
            }
            getProps() {
                let t = this.visualElement.getProps()
                  , {drag: e=!1, dragDirectionLock: i=!1, dragPropagation: r=!1, dragConstraints: n=!1, dragElastic: s=.35, dragMomentum: o=!0} = t;
                return {
                    ...t,
                    drag: e,
                    dragDirectionLock: i,
                    dragPropagation: r,
                    dragConstraints: n,
                    dragElastic: s,
                    dragMomentum: o
                }
            }
        }
        function i8(t, e, i) {
            return (!0 === e || e === t) && (null === i || i === t)
        }
        class i4 extends id {
            constructor(t) {
                super(t),
                this.removeGroupControls = g,
                this.removeListeners = g,
                this.controls = new i6(t)
            }
            mount() {
                let {dragControls: t} = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)),
                this.removeListeners = this.controls.addListeners() || g
            }
            unmount() {
                this.removeGroupControls(),
                this.removeListeners()
            }
        }
        let i7 = t => (e, i) => {
            t && b.postRender( () => t(e, i))
        }
        ;
        class rt extends id {
            constructor() {
                super(...arguments),
                this.removePointerDownListener = g
            }
            onPointerDown(t) {
                this.session = new iK(t,this.createPanHandlers(),{
                    transformPagePoint: this.node.getTransformPagePoint()
                })
            }
            createPanHandlers() {
                let {onPanSessionStart: t, onPanStart: e, onPan: i, onPanEnd: r} = this.node.getProps();
                return {
                    onSessionStart: i7(t),
                    onStart: i7(e),
                    onMove: i,
                    onEnd: (t, e) => {
                        delete this.session,
                        r && b.postRender( () => r(t, e))
                    }
                }
            }
            mount() {
                this.removePointerDownListener = iw(this.node.current, "pointerdown", t => this.onPointerDown(t))
            }
            update() {
                this.session && this.session.updateHandlers(this.createPanHandlers())
            }
            unmount() {
                this.removePointerDownListener(),
                this.session && this.session.end()
            }
        }
        var re, ri, rr = i(5155), rn = i(2115);
        let rs = (0,
        rn.createContext)(null)
          , ro = (0,
        rn.createContext)({})
          , ra = (0,
        rn.createContext)({})
          , {schedule: rl, cancel: ru} = x(queueMicrotask, !1)
          , rh = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        };
        function rc(t, e) {
            return e.max === e.min ? 0 : t / (e.max - e.min) * 100
        }
        let rd = {
            correct: (t, e) => {
                if (!e.target)
                    return t;
                if ("string" == typeof t) {
                    if (!tM.test(t))
                        return t;
                    t = parseFloat(t)
                }
                let i = rc(t, e.target.x)
                  , r = rc(t, e.target.y);
                return `${i}% ${r}%`
            }
        }
          , rp = {};
        class rf extends rn.Component {
            componentDidMount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: i, layoutId: r} = this.props
                  , {projection: n} = t;
                !function(t) {
                    for (let e in t)
                        rp[e] = t[e],
                        ei(e) && (rp[e].isCSSVariable = !0)
                }(rg),
                n && (e.group && e.group.add(n),
                i && i.register && r && i.register(n),
                n.root.didUpdate(),
                n.addEventListener("animationComplete", () => {
                    this.safeToRemove()
                }
                ),
                n.setOptions({
                    ...n.options,
                    onExitComplete: () => this.safeToRemove()
                })),
                rh.hasEverUpdated = !0
            }
            getSnapshotBeforeUpdate(t) {
                let {layoutDependency: e, visualElement: i, drag: r, isPresent: n} = this.props
                  , s = i.projection;
                return s && (s.isPresent = n,
                r || t.layoutDependency !== e || void 0 === e || t.isPresent !== n ? s.willUpdate() : this.safeToRemove(),
                t.isPresent === n || (n ? s.promote() : s.relegate() || b.postRender( () => {
                    let t = s.getStack();
                    t && t.members.length || this.safeToRemove()
                }
                ))),
                null
            }
            componentDidUpdate() {
                let {projection: t} = this.props.visualElement;
                t && (t.root.didUpdate(),
                rl.postRender( () => {
                    !t.currentAnimation && t.isLead() && this.safeToRemove()
                }
                ))
            }
            componentWillUnmount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: i} = this.props
                  , {projection: r} = t;
                r && (r.scheduleCheckAfterUnmount(),
                e && e.group && e.group.remove(r),
                i && i.deregister && i.deregister(r))
            }
            safeToRemove() {
                let {safeToRemove: t} = this.props;
                t && t()
            }
            render() {
                return null
            }
        }
        function rm(t) {
            let[e,i] = function(t=!0) {
                let e = (0,
                rn.useContext)(rs);
                if (null === e)
                    return [!0, null];
                let {isPresent: i, onExitComplete: r, register: n} = e
                  , s = (0,
                rn.useId)();
                (0,
                rn.useEffect)( () => {
                    if (t)
                        return n(s)
                }
                , [t]);
                let o = (0,
                rn.useCallback)( () => t && r && r(s), [s, r, t]);
                return !i && r ? [!1, o] : [!0]
            }()
              , r = (0,
            rn.useContext)(ro);
            return (0,
            rr.jsx)(rf, {
                ...t,
                layoutGroup: r,
                switchLayoutGroup: (0,
                rn.useContext)(ra),
                isPresent: e,
                safeToRemove: i
            })
        }
        let rg = {
            borderRadius: {
                ...rd,
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            },
            borderTopLeftRadius: rd,
            borderTopRightRadius: rd,
            borderBottomLeftRadius: rd,
            borderBottomRightRadius: rd,
            boxShadow: {
                correct: (t, {treeScale: e, projectionDelta: i}) => {
                    let r = tN.parse(t);
                    if (r.length > 5)
                        return t;
                    let n = tN.createTransformer(t)
                      , s = +("number" != typeof r[0])
                      , o = i.x.scale * e.x
                      , a = i.y.scale * e.y;
                    r[0 + s] /= o,
                    r[1 + s] /= a;
                    let l = ev(o, a, .5);
                    return "number" == typeof r[2 + s] && (r[2 + s] /= l),
                    "number" == typeof r[3 + s] && (r[3 + s] /= l),
                    n(r)
                }
            }
        }
          , rv = (t, e) => t.depth - e.depth;
        class ry {
            constructor() {
                this.children = [],
                this.isDirty = !1
            }
            add(t) {
                E(this.children, t),
                this.isDirty = !0
            }
            remove(t) {
                M(this.children, t),
                this.isDirty = !0
            }
            forEach(t) {
                this.isDirty && this.children.sort(rv),
                this.isDirty = !1,
                this.children.forEach(t)
            }
        }
        function rx(t) {
            let e = D(t) ? t.get() : t;
            return p(e) ? e.toValue() : e
        }
        let rb = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
          , rP = rb.length
          , rw = t => "string" == typeof t ? parseFloat(t) : t
          , rS = t => "number" == typeof t || tM.test(t);
        function rT(t, e) {
            return void 0 !== t[e] ? t[e] : t.borderRadius
        }
        let rA = rM(0, .5, tl)
          , rE = rM(.5, .95, g);
        function rM(t, e, i) {
            return r => r < t ? 0 : r > e ? 1 : i(K(t, e, r))
        }
        function rC(t, e) {
            t.min = e.min,
            t.max = e.max
        }
        function rO(t, e) {
            rC(t.x, e.x),
            rC(t.y, e.y)
        }
        function rj(t, e) {
            t.translate = e.translate,
            t.scale = e.scale,
            t.originPoint = e.originPoint,
            t.origin = e.origin
        }
        function rV(t, e, i, r, n) {
            return t -= e,
            t = r + 1 / i * (t - r),
            void 0 !== n && (t = r + 1 / n * (t - r)),
            t
        }
        function rR(t, e, [i,r,n], s, o) {
            !function(t, e=0, i=1, r=.5, n, s=t, o=t) {
                if (tE.test(e) && (e = parseFloat(e),
                e = ev(o.min, o.max, e / 100) - o.min),
                "number" != typeof e)
                    return;
                let a = ev(s.min, s.max, r);
                t === s && (a -= e),
                t.min = rV(t.min, e, i, a, n),
                t.max = rV(t.max, e, i, a, n)
            }(t, e[i], e[r], e[n], e.scale, s, o)
        }
        let rD = ["x", "scaleX", "originX"]
          , rk = ["y", "scaleY", "originY"];
        function r_(t, e, i, r) {
            rR(t.x, e, rD, i ? i.x : void 0, r ? r.x : void 0),
            rR(t.y, e, rk, i ? i.y : void 0, r ? r.y : void 0)
        }
        function rF(t) {
            return 0 === t.translate && 1 === t.scale
        }
        function rL(t) {
            return rF(t.x) && rF(t.y)
        }
        function rB(t, e) {
            return t.min === e.min && t.max === e.max
        }
        function rI(t, e) {
            return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
        }
        function rU(t, e) {
            return rI(t.x, e.x) && rI(t.y, e.y)
        }
        function rN(t) {
            return iT(t.x) / iT(t.y)
        }
        function rz(t, e) {
            return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
        }
        class r$ {
            constructor() {
                this.members = []
            }
            add(t) {
                E(this.members, t),
                t.scheduleRender()
            }
            remove(t) {
                if (M(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead) {
                    let t = this.members[this.members.length - 1];
                    t && this.promote(t)
                }
            }
            relegate(t) {
                let e;
                let i = this.members.findIndex(e => t === e);
                if (0 === i)
                    return !1;
                for (let t = i; t >= 0; t--) {
                    let i = this.members[t];
                    if (!1 !== i.isPresent) {
                        e = i;
                        break
                    }
                }
                return !!e && (this.promote(e),
                !0)
            }
            promote(t, e) {
                let i = this.lead;
                if (t !== i && (this.prevLead = i,
                this.lead = t,
                t.show(),
                i)) {
                    i.instance && i.scheduleRender(),
                    t.scheduleRender(),
                    t.resumeFrom = i,
                    e && (t.resumeFrom.preserveOpacity = !0),
                    i.snapshot && (t.snapshot = i.snapshot,
                    t.snapshot.latestValues = i.animationValues || i.latestValues),
                    t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                    let {crossfade: r} = t.options;
                    !1 === r && i.hide()
                }
            }
            exitAnimationComplete() {
                this.members.forEach(t => {
                    let {options: e, resumingFrom: i} = t;
                    e.onExitComplete && e.onExitComplete(),
                    i && i.options.onExitComplete && i.options.onExitComplete()
                }
                )
            }
            scheduleRender() {
                this.members.forEach(t => {
                    t.instance && t.scheduleRender(!1)
                }
                )
            }
            removeLeadSnapshot() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
        }
        let rY = {
            nodes: 0,
            calculatedTargetDeltas: 0,
            calculatedProjections: 0
        }
          , rW = ["", "X", "Y", "Z"]
          , rX = {
            visibility: "hidden"
        }
          , rH = 0;
        function rq(t, e, i, r) {
            let {latestValues: n} = e;
            n[t] && (i[t] = n[t],
            e.setStaticValue(t, 0),
            r && (r[t] = 0))
        }
        function rK({attachResizeListener: t, defaultParent: e, measureScroll: i, checkIsScrollRoot: r, resetTransform: n}) {
            return class {
                constructor(t={}, i=null == e ? void 0 : e()) {
                    this.id = rH++,
                    this.animationId = 0,
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.isProjectionDirty = !1,
                    this.isSharedProjectionDirty = !1,
                    this.isTransformDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.hasCheckedOptimisedAppear = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.hasTreeAnimated = !1,
                    this.updateScheduled = !1,
                    this.scheduleUpdate = () => this.update(),
                    this.projectionUpdateScheduled = !1,
                    this.checkUpdateFailed = () => {
                        this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                    }
                    ,
                    this.updateProjection = () => {
                        this.projectionUpdateScheduled = !1,
                        y.value && (rY.nodes = rY.calculatedTargetDeltas = rY.calculatedProjections = 0),
                        this.nodes.forEach(rJ),
                        this.nodes.forEach(r9),
                        this.nodes.forEach(r6),
                        this.nodes.forEach(rQ),
                        y.addProjectionMetrics && y.addProjectionMetrics(rY)
                    }
                    ,
                    this.resolvedRelativeTargetAt = 0,
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.latestValues = t,
                    this.root = i ? i.root || i : this,
                    this.path = i ? [...i.path, i] : [],
                    this.parent = i,
                    this.depth = i ? i.depth + 1 : 0;
                    for (let t = 0; t < this.path.length; t++)
                        this.path[t].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new ry)
                }
                addEventListener(t, e) {
                    return this.eventHandlers.has(t) || this.eventHandlers.set(t, new C),
                    this.eventHandlers.get(t).add(e)
                }
                notifyListeners(t, ...e) {
                    let i = this.eventHandlers.get(t);
                    i && i.notify(...e)
                }
                hasListeners(t) {
                    return this.eventHandlers.has(t)
                }
                mount(e, i=this.root.hasTreeAnimated) {
                    if (this.instance)
                        return;
                    this.isSVG = e instanceof SVGElement && "svg" !== e.tagName,
                    this.instance = e;
                    let {layoutId: r, layout: n, visualElement: s} = this.options;
                    if (s && !s.current && s.mount(e),
                    this.root.nodes.add(this),
                    this.parent && this.parent.children.add(this),
                    i && (n || r) && (this.isLayoutDirty = !0),
                    t) {
                        let i;
                        let r = () => this.root.updateBlockedByResize = !1;
                        t(e, () => {
                            this.root.updateBlockedByResize = !0,
                            i && i(),
                            i = function(t, e) {
                                let i = A.now()
                                  , r = ({timestamp: n}) => {
                                    let s = n - i;
                                    s >= 250 && (P(r),
                                    t(s - e))
                                }
                                ;
                                return b.read(r, !0),
                                () => P(r)
                            }(r, 250),
                            rh.hasAnimatedSinceResize && (rh.hasAnimatedSinceResize = !1,
                            this.nodes.forEach(r3))
                        }
                        )
                    }
                    r && this.root.registerSharedNode(r, this),
                    !1 !== this.options.animate && s && (r || n) && this.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e, hasRelativeLayoutChanged: i, layout: r}) => {
                        if (this.isTreeAnimationBlocked()) {
                            this.target = void 0,
                            this.relativeTarget = void 0;
                            return
                        }
                        let n = this.options.transition || s.getDefaultTransition() || ni
                          , {onLayoutAnimationStart: o, onLayoutAnimationComplete: a} = s.getProps()
                          , u = !this.targetLayout || !rU(this.targetLayout, r)
                          , h = !e && i;
                        if (this.options.layoutRoot || this.resumeFrom || h || e && (u || !this.currentAnimation)) {
                            this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0),
                            this.setAnimationOrigin(t, h);
                            let e = {
                                ...l(n, "layout"),
                                onPlay: o,
                                onComplete: a
                            };
                            (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0,
                            e.type = !1),
                            this.startAnimation(e)
                        } else
                            e || r3(this),
                            this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                        this.targetLayout = r
                    }
                    )
                }
                unmount() {
                    this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this);
                    let t = this.getStack();
                    t && t.remove(this),
                    this.parent && this.parent.children.delete(this),
                    this.instance = void 0,
                    P(this.updateProjection)
                }
                blockUpdate() {
                    this.updateManuallyBlocked = !0
                }
                unblockUpdate() {
                    this.updateManuallyBlocked = !1
                }
                isUpdateBlocked() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                isTreeAnimationBlocked() {
                    return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                }
                startUpdate() {
                    !this.isUpdateBlocked() && (this.isUpdating = !0,
                    this.nodes && this.nodes.forEach(r8),
                    this.animationId++)
                }
                getTransformTemplate() {
                    let {visualElement: t} = this.options;
                    return t && t.getProps().transformTemplate
                }
                willUpdate(t=!0) {
                    if (this.root.hasTreeAnimated = !0,
                    this.root.isUpdateBlocked()) {
                        this.options.onExitComplete && this.options.onExitComplete();
                        return
                    }
                    if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                        if (e.hasCheckedOptimisedAppear = !0,
                        e.root === e)
                            return;
                        let {visualElement: i} = e.options;
                        if (!i)
                            return;
                        let r = i.props[F];
                        if (window.MotionHasOptimisedAnimation(r, "transform")) {
                            let {layout: t, layoutId: i} = e.options;
                            window.MotionCancelOptimisedAnimation(r, "transform", b, !(t || i))
                        }
                        let {parent: n} = e;
                        n && !n.hasCheckedOptimisedAppear && t(n)
                    }(this),
                    this.root.isUpdating || this.root.startUpdate(),
                    this.isLayoutDirty)
                        return;
                    this.isLayoutDirty = !0;
                    for (let t = 0; t < this.path.length; t++) {
                        let e = this.path[t];
                        e.shouldResetTransform = !0,
                        e.updateScroll("snapshot"),
                        e.options.layoutRoot && e.willUpdate(!1)
                    }
                    let {layoutId: e, layout: i} = this.options;
                    if (void 0 === e && !i)
                        return;
                    let r = this.getTransformTemplate();
                    this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0,
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate")
                }
                update() {
                    if (this.updateScheduled = !1,
                    this.isUpdateBlocked()) {
                        this.unblockUpdate(),
                        this.clearAllSnapshots(),
                        this.nodes.forEach(r1);
                        return
                    }
                    this.isUpdating || this.nodes.forEach(r2),
                    this.isUpdating = !1,
                    this.nodes.forEach(r5),
                    this.nodes.forEach(rG),
                    this.nodes.forEach(rZ),
                    this.clearAllSnapshots();
                    let t = A.now();
                    w.delta = tc(0, 1e3 / 60, t - w.timestamp),
                    w.timestamp = t,
                    w.isProcessing = !0,
                    S.update.process(w),
                    S.preRender.process(w),
                    S.render.process(w),
                    w.isProcessing = !1
                }
                didUpdate() {
                    this.updateScheduled || (this.updateScheduled = !0,
                    rl.read(this.scheduleUpdate))
                }
                clearAllSnapshots() {
                    this.nodes.forEach(r0),
                    this.sharedNodes.forEach(r4)
                }
                scheduleUpdateProjection() {
                    this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
                    b.preRender(this.updateProjection, !1, !0))
                }
                scheduleCheckAfterUnmount() {
                    b.postRender( () => {
                        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                    }
                    )
                }
                updateSnapshot() {
                    this.snapshot || !this.instance || (this.snapshot = this.measure(),
                    !this.snapshot || iT(this.snapshot.measuredBox.x) || iT(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
                }
                updateLayout() {
                    if (!this.instance || (this.updateScroll(),
                    !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                        return;
                    if (this.resumeFrom && !this.resumeFrom.instance)
                        for (let t = 0; t < this.path.length; t++)
                            this.path[t].updateScroll();
                    let t = this.layout;
                    this.layout = this.measure(!1),
                    this.layoutCorrected = iD(),
                    this.isLayoutDirty = !1,
                    this.projectionDelta = void 0,
                    this.notifyListeners("measure", this.layout.layoutBox);
                    let {visualElement: e} = this.options;
                    e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                }
                updateScroll(t="measure") {
                    let e = !!(this.options.layoutScroll && this.instance);
                    if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1),
                    e) {
                        let e = r(this.instance);
                        this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: e,
                            offset: i(this.instance),
                            wasRoot: this.scroll ? this.scroll.isRoot : e
                        }
                    }
                }
                resetTransform() {
                    if (!n)
                        return;
                    let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
                      , e = this.projectionDelta && !rL(this.projectionDelta)
                      , i = this.getTransformTemplate()
                      , r = i ? i(this.latestValues, "") : void 0
                      , s = r !== this.prevTransformTemplateValue;
                    t && (e || iL(this.latestValues) || s) && (n(this.instance, r),
                    this.shouldResetTransform = !1,
                    this.scheduleRender())
                }
                measure(t=!0) {
                    var e;
                    let i = this.measurePageBox()
                      , r = this.removeElementScroll(i);
                    return t && (r = this.removeTransform(r)),
                    ns((e = r).x),
                    ns(e.y),
                    {
                        animationId: this.root.animationId,
                        measuredBox: i,
                        layoutBox: r,
                        latestValues: {},
                        source: this.id
                    }
                }
                measurePageBox() {
                    var t;
                    let {visualElement: e} = this.options;
                    if (!e)
                        return iD();
                    let i = e.measureViewportBox();
                    if (!((null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) || this.path.some(na))) {
                        let {scroll: t} = this.root;
                        t && (iz(i.x, t.offset.x),
                        iz(i.y, t.offset.y))
                    }
                    return i
                }
                removeElementScroll(t) {
                    var e;
                    let i = iD();
                    if (rO(i, t),
                    null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
                        return i;
                    for (let e = 0; e < this.path.length; e++) {
                        let r = this.path[e]
                          , {scroll: n, options: s} = r;
                        r !== this.root && n && s.layoutScroll && (n.wasRoot && rO(i, t),
                        iz(i.x, n.offset.x),
                        iz(i.y, n.offset.y))
                    }
                    return i
                }
                applyTransform(t, e=!1) {
                    let i = iD();
                    rO(i, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let r = this.path[t];
                        !e && r.options.layoutScroll && r.scroll && r !== r.root && iY(i, {
                            x: -r.scroll.offset.x,
                            y: -r.scroll.offset.y
                        }),
                        iL(r.latestValues) && iY(i, r.latestValues)
                    }
                    return iL(this.latestValues) && iY(i, this.latestValues),
                    i
                }
                removeTransform(t) {
                    let e = iD();
                    rO(e, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let i = this.path[t];
                        if (!i.instance || !iL(i.latestValues))
                            continue;
                        iF(i.latestValues) && i.updateSnapshot();
                        let r = iD();
                        rO(r, i.measurePageBox()),
                        r_(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, r)
                    }
                    return iL(this.latestValues) && r_(e, this.latestValues),
                    e
                }
                setTargetDelta(t) {
                    this.targetDelta = t,
                    this.root.scheduleUpdateProjection(),
                    this.isProjectionDirty = !0
                }
                setOptions(t) {
                    this.options = {
                        ...this.options,
                        ...t,
                        crossfade: void 0 === t.crossfade || t.crossfade
                    }
                }
                clearMeasurements() {
                    this.scroll = void 0,
                    this.layout = void 0,
                    this.snapshot = void 0,
                    this.prevTransformTemplateValue = void 0,
                    this.targetDelta = void 0,
                    this.target = void 0,
                    this.isLayoutDirty = !1
                }
                forceRelativeParentToResolveTarget() {
                    this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== w.timestamp && this.relativeParent.resolveTargetDelta(!0)
                }
                resolveTargetDelta(t=!1) {
                    var e, i, r, n;
                    let s = this.getLead();
                    this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty),
                    this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty),
                    this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                    let o = !!this.resumingFrom || this !== s;
                    if (!(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                        return;
                    let {layout: a, layoutId: l} = this.options;
                    if (this.layout && (a || l)) {
                        if (this.resolvedRelativeTargetAt = w.timestamp,
                        !this.targetDelta && !this.relativeTarget) {
                            let t = this.getClosestProjectingParent();
                            t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t,
                            this.forceRelativeParentToResolveTarget(),
                            this.relativeTarget = iD(),
                            this.relativeTargetOrigin = iD(),
                            iO(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox),
                            rO(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        if (this.relativeTarget || this.targetDelta) {
                            if ((this.target || (this.target = iD(),
                            this.targetWithTransforms = iD()),
                            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(),
                            i = this.target,
                            r = this.relativeTarget,
                            n = this.relativeParent.target,
                            iM(i.x, r.x, n.x),
                            iM(i.y, r.y, n.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : rO(this.target, this.layout.layoutBox),
                            iN(this.target, this.targetDelta)) : rO(this.target, this.layout.layoutBox),
                            this.attemptToResolveRelativeTarget) {
                                this.attemptToResolveRelativeTarget = !1;
                                let t = this.getClosestProjectingParent();
                                t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t,
                                this.forceRelativeParentToResolveTarget(),
                                this.relativeTarget = iD(),
                                this.relativeTargetOrigin = iD(),
                                iO(this.relativeTargetOrigin, this.target, t.target),
                                rO(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            y.value && rY.calculatedTargetDeltas++
                        }
                    }
                }
                getClosestProjectingParent() {
                    return !this.parent || iF(this.parent.latestValues) || iB(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                }
                isProjecting() {
                    return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                }
                calcProjection() {
                    var t;
                    let e = this.getLead()
                      , i = !!this.resumingFrom || this !== e
                      , r = !0;
                    if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (r = !1),
                    i && (this.isSharedProjectionDirty || this.isTransformDirty) && (r = !1),
                    this.resolvedRelativeTargetAt === w.timestamp && (r = !1),
                    r)
                        return;
                    let {layout: n, layoutId: s} = this.options;
                    if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                    this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                    !this.layout || !(n || s))
                        return;
                    rO(this.layoutCorrected, this.layout.layoutBox);
                    let o = this.treeScale.x
                      , a = this.treeScale.y;
                    !function(t, e, i, r=!1) {
                        let n, s;
                        let o = i.length;
                        if (o) {
                            e.x = e.y = 1;
                            for (let a = 0; a < o; a++) {
                                s = (n = i[a]).projectionDelta;
                                let {visualElement: o} = n.options;
                                (!o || !o.props.style || "contents" !== o.props.style.display) && (r && n.options.layoutScroll && n.scroll && n !== n.root && iY(t, {
                                    x: -n.scroll.offset.x,
                                    y: -n.scroll.offset.y
                                }),
                                s && (e.x *= s.x.scale,
                                e.y *= s.y.scale,
                                iN(t, s)),
                                r && iL(n.latestValues) && iY(t, n.latestValues))
                            }
                            e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1),
                            e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
                        }
                    }(this.layoutCorrected, this.treeScale, this.path, i),
                    e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox,
                    e.targetWithTransforms = iD());
                    let {target: l} = e;
                    if (!l) {
                        this.prevProjectionDelta && (this.createProjectionDeltas(),
                        this.scheduleRender());
                        return
                    }
                    this.projectionDelta && this.prevProjectionDelta ? (rj(this.prevProjectionDelta.x, this.projectionDelta.x),
                    rj(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(),
                    iE(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
                    this.treeScale.x === o && this.treeScale.y === a && rz(this.projectionDelta.x, this.prevProjectionDelta.x) && rz(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", l)),
                    y.value && rY.calculatedProjections++
                }
                hide() {
                    this.isVisible = !1
                }
                show() {
                    this.isVisible = !0
                }
                scheduleRender(t=!0) {
                    var e;
                    if (null === (e = this.options.visualElement) || void 0 === e || e.scheduleRender(),
                    t) {
                        let t = this.getStack();
                        t && t.scheduleRender()
                    }
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                createProjectionDeltas() {
                    this.prevProjectionDelta = iV(),
                    this.projectionDelta = iV(),
                    this.projectionDeltaWithTransform = iV()
                }
                setAnimationOrigin(t, e=!1) {
                    let i;
                    let r = this.snapshot
                      , n = r ? r.latestValues : {}
                      , s = {
                        ...this.latestValues
                    }
                      , o = iV();
                    this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    this.attemptToResolveRelativeTarget = !e;
                    let a = iD()
                      , l = (r ? r.source : void 0) !== (this.layout ? this.layout.source : void 0)
                      , u = this.getStack()
                      , h = !u || u.members.length <= 1
                      , c = !!(l && !h && !0 === this.options.crossfade && !this.path.some(ne));
                    this.animationProgress = 0,
                    this.mixTargetDelta = e => {
                        let r = e / 1e3;
                        if (r7(o.x, t.x, r),
                        r7(o.y, t.y, r),
                        this.setTargetDelta(o),
                        this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                            var u, d, p, f, m, g;
                            if (iO(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                            p = this.relativeTarget,
                            f = this.relativeTargetOrigin,
                            m = a,
                            g = r,
                            nt(p.x, f.x, m.x, g),
                            nt(p.y, f.y, m.y, g),
                            i && (u = this.relativeTarget,
                            d = i,
                            rB(u.x, d.x) && rB(u.y, d.y)))
                                this.isProjectionDirty = !1;
                            i || (i = iD()),
                            rO(i, this.relativeTarget)
                        }
                        l && (this.animationValues = s,
                        function(t, e, i, r, n, s) {
                            n ? (t.opacity = ev(0, void 0 !== i.opacity ? i.opacity : 1, rA(r)),
                            t.opacityExit = ev(void 0 !== e.opacity ? e.opacity : 1, 0, rE(r))) : s && (t.opacity = ev(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, r));
                            for (let n = 0; n < rP; n++) {
                                let s = `border${rb[n]}Radius`
                                  , o = rT(e, s)
                                  , a = rT(i, s);
                                (void 0 !== o || void 0 !== a) && (o || (o = 0),
                                a || (a = 0),
                                0 === o || 0 === a || rS(o) === rS(a) ? (t[s] = Math.max(ev(rw(o), rw(a), r), 0),
                                (tE.test(a) || tE.test(o)) && (t[s] += "%")) : t[s] = a)
                            }
                            (e.rotate || i.rotate) && (t.rotate = ev(e.rotate || 0, i.rotate || 0, r))
                        }(s, n, this.latestValues, r, c, h)),
                        this.root.scheduleUpdateProjection(),
                        this.scheduleRender(),
                        this.animationProgress = r
                    }
                    ,
                    this.mixTargetDelta(1e3 * !!this.options.layoutRoot)
                }
                startAnimation(t) {
                    this.notifyListeners("animationStart"),
                    this.currentAnimation && this.currentAnimation.stop(),
                    this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                    this.pendingAnimation && (P(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                    this.pendingAnimation = b.update( () => {
                        rh.hasAnimatedSinceResize = !0,
                        eg.layout++,
                        this.currentAnimation = function(t, e, i) {
                            let r = D(0) ? 0 : R(t);
                            return r.start(e4("", r, 1e3, i)),
                            r.animation
                        }(0, 0, {
                            ...t,
                            onUpdate: e => {
                                this.mixTargetDelta(e),
                                t.onUpdate && t.onUpdate(e)
                            }
                            ,
                            onStop: () => {
                                eg.layout--
                            }
                            ,
                            onComplete: () => {
                                eg.layout--,
                                t.onComplete && t.onComplete(),
                                this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                    }
                    )
                }
                completeAnimation() {
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                    this.resumingFrom.preserveOpacity = void 0);
                    let t = this.getStack();
                    t && t.exitAnimationComplete(),
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                    this.notifyListeners("animationComplete")
                }
                finishAnimation() {
                    this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation()
                }
                applyTransformsToTarget() {
                    let t = this.getLead()
                      , {targetWithTransforms: e, target: i, layout: r, latestValues: n} = t;
                    if (e && i && r) {
                        if (this !== t && this.layout && r && no(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                            i = this.target || iD();
                            let e = iT(this.layout.layoutBox.x);
                            i.x.min = t.target.x.min,
                            i.x.max = i.x.min + e;
                            let r = iT(this.layout.layoutBox.y);
                            i.y.min = t.target.y.min,
                            i.y.max = i.y.min + r
                        }
                        rO(e, i),
                        iY(e, n),
                        iE(this.projectionDeltaWithTransform, this.layoutCorrected, e, n)
                    }
                }
                registerSharedNode(t, e) {
                    this.sharedNodes.has(t) || this.sharedNodes.set(t, new r$),
                    this.sharedNodes.get(t).add(e);
                    let i = e.options.initialPromotionConfig;
                    e.promote({
                        transition: i ? i.transition : void 0,
                        preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                    })
                }
                isLead() {
                    let t = this.getStack();
                    return !t || t.lead === this
                }
                getLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                }
                getPrevLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                }
                getStack() {
                    let {layoutId: t} = this.options;
                    if (t)
                        return this.root.sharedNodes.get(t)
                }
                promote({needsReset: t, transition: e, preserveFollowOpacity: i}={}) {
                    let r = this.getStack();
                    r && r.promote(this, i),
                    t && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                    e && this.setOptions({
                        transition: e
                    })
                }
                relegate() {
                    let t = this.getStack();
                    return !!t && t.relegate(this)
                }
                resetSkewAndRotation() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return;
                    let e = !1
                      , {latestValues: i} = t;
                    if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0),
                    !e)
                        return;
                    let r = {};
                    i.z && rq("z", t, r, this.animationValues);
                    for (let e = 0; e < rW.length; e++)
                        rq(`rotate${rW[e]}`, t, r, this.animationValues),
                        rq(`skew${rW[e]}`, t, r, this.animationValues);
                    for (let e in t.render(),
                    r)
                        t.setStaticValue(e, r[e]),
                        this.animationValues && (this.animationValues[e] = r[e]);
                    t.scheduleRender()
                }
                getProjectionStyles(t) {
                    var e, i;
                    if (!this.instance || this.isSVG)
                        return;
                    if (!this.isVisible)
                        return rX;
                    let r = {
                        visibility: ""
                    }
                      , n = this.getTransformTemplate();
                    if (this.needsReset)
                        return this.needsReset = !1,
                        r.opacity = "",
                        r.pointerEvents = rx(null == t ? void 0 : t.pointerEvents) || "",
                        r.transform = n ? n(this.latestValues, "") : "none",
                        r;
                    let s = this.getLead();
                    if (!this.projectionDelta || !this.layout || !s.target) {
                        let e = {};
                        return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                        e.pointerEvents = rx(null == t ? void 0 : t.pointerEvents) || ""),
                        this.hasProjected && !iL(this.latestValues) && (e.transform = n ? n({}, "") : "none",
                        this.hasProjected = !1),
                        e
                    }
                    let o = s.animationValues || s.latestValues;
                    this.applyTransformsToTarget(),
                    r.transform = function(t, e, i) {
                        let r = ""
                          , n = t.x.translate / e.x
                          , s = t.y.translate / e.y
                          , o = (null == i ? void 0 : i.z) || 0;
                        if ((n || s || o) && (r = `translate3d(${n}px, ${s}px, ${o}px) `),
                        (1 !== e.x || 1 !== e.y) && (r += `scale(${1 / e.x}, ${1 / e.y}) `),
                        i) {
                            let {transformPerspective: t, rotate: e, rotateX: n, rotateY: s, skewX: o, skewY: a} = i;
                            t && (r = `perspective(${t}px) ${r}`),
                            e && (r += `rotate(${e}deg) `),
                            n && (r += `rotateX(${n}deg) `),
                            s && (r += `rotateY(${s}deg) `),
                            o && (r += `skewX(${o}deg) `),
                            a && (r += `skewY(${a}deg) `)
                        }
                        let a = t.x.scale * e.x
                          , l = t.y.scale * e.y;
                        return (1 !== a || 1 !== l) && (r += `scale(${a}, ${l})`),
                        r || "none"
                    }(this.projectionDeltaWithTransform, this.treeScale, o),
                    n && (r.transform = n(o, r.transform));
                    let {x: a, y: l} = this.projectionDelta;
                    for (let t in r.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`,
                    s.animationValues ? r.opacity = s === this ? null !== (i = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : r.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0,
                    rp) {
                        if (void 0 === o[t])
                            continue;
                        let {correct: e, applyTo: i, isCSSVariable: n} = rp[t]
                          , a = "none" === r.transform ? o[t] : e(o[t], s);
                        if (i) {
                            let t = i.length;
                            for (let e = 0; e < t; e++)
                                r[i[e]] = a
                        } else
                            n ? this.options.visualElement.renderState.vars[t] = a : r[t] = a
                    }
                    return this.options.layoutId && (r.pointerEvents = s === this ? rx(null == t ? void 0 : t.pointerEvents) || "" : "none"),
                    r
                }
                clearSnapshot() {
                    this.resumeFrom = this.snapshot = void 0
                }
                resetTree() {
                    this.root.nodes.forEach(t => {
                        var e;
                        return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                    }
                    ),
                    this.root.nodes.forEach(r1),
                    this.root.sharedNodes.clear()
                }
            }
        }
        function rG(t) {
            t.updateLayout()
        }
        function rZ(t) {
            var e;
            let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
            if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                let {layoutBox: e, measuredBox: r} = t.layout
                  , {animationType: n} = t.options
                  , s = i.source !== t.layout.source;
                "size" === n ? ik(t => {
                    let r = s ? i.measuredBox[t] : i.layoutBox[t]
                      , n = iT(r);
                    r.min = e[t].min,
                    r.max = r.min + n
                }
                ) : no(n, i.layoutBox, e) && ik(r => {
                    let n = s ? i.measuredBox[r] : i.layoutBox[r]
                      , o = iT(e[r]);
                    n.max = n.min + o,
                    t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
                    t.relativeTarget[r].max = t.relativeTarget[r].min + o)
                }
                );
                let o = iV();
                iE(o, e, i.layoutBox);
                let a = iV();
                s ? iE(a, t.applyTransform(r, !0), i.measuredBox) : iE(a, e, i.layoutBox);
                let l = !rL(o)
                  , u = !1;
                if (!t.resumeFrom) {
                    let r = t.getClosestProjectingParent();
                    if (r && !r.resumeFrom) {
                        let {snapshot: n, layout: s} = r;
                        if (n && s) {
                            let o = iD();
                            iO(o, i.layoutBox, n.layoutBox);
                            let a = iD();
                            iO(a, e, s.layoutBox),
                            rU(o, a) || (u = !0),
                            r.options.layoutRoot && (t.relativeTarget = a,
                            t.relativeTargetOrigin = o,
                            t.relativeParent = r)
                        }
                    }
                }
                t.notifyListeners("didUpdate", {
                    layout: e,
                    snapshot: i,
                    delta: a,
                    layoutDelta: o,
                    hasLayoutChanged: l,
                    hasRelativeLayoutChanged: u
                })
            } else if (t.isLead()) {
                let {onExitComplete: e} = t.options;
                e && e()
            }
            t.options.transition = void 0
        }
        function rJ(t) {
            y.value && rY.nodes++,
            t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
            t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
        }
        function rQ(t) {
            t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
        }
        function r0(t) {
            t.clearSnapshot()
        }
        function r1(t) {
            t.clearMeasurements()
        }
        function r2(t) {
            t.isLayoutDirty = !1
        }
        function r5(t) {
            let {visualElement: e} = t.options;
            e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
            t.resetTransform()
        }
        function r3(t) {
            t.finishAnimation(),
            t.targetDelta = t.relativeTarget = t.target = void 0,
            t.isProjectionDirty = !0
        }
        function r9(t) {
            t.resolveTargetDelta()
        }
        function r6(t) {
            t.calcProjection()
        }
        function r8(t) {
            t.resetSkewAndRotation()
        }
        function r4(t) {
            t.removeLeadSnapshot()
        }
        function r7(t, e, i) {
            t.translate = ev(e.translate, 0, i),
            t.scale = ev(e.scale, 1, i),
            t.origin = e.origin,
            t.originPoint = e.originPoint
        }
        function nt(t, e, i, r) {
            t.min = ev(e.min, i.min, r),
            t.max = ev(e.max, i.max, r)
        }
        function ne(t) {
            return t.animationValues && void 0 !== t.animationValues.opacityExit
        }
        let ni = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        }
          , nr = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
          , nn = nr("applewebkit/") && !nr("chrome/") ? Math.round : g;
        function ns(t) {
            t.min = nn(t.min),
            t.max = nn(t.max)
        }
        function no(t, e, i) {
            return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(rN(e) - rN(i)))
        }
        function na(t) {
            var e;
            return t !== t.root && (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        }
        let nl = rK({
            attachResizeListener: (t, e) => iy(t, "resize", e),
            measureScroll: () => ({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: () => !0
        })
          , nu = {
            current: void 0
        }
          , nh = rK({
            measureScroll: t => ({
                x: t.scrollLeft,
                y: t.scrollTop
            }),
            defaultParent: () => {
                if (!nu.current) {
                    let t = new nl({});
                    t.mount(window),
                    t.setOptions({
                        layoutScroll: !0
                    }),
                    nu.current = t
                }
                return nu.current
            }
            ,
            resetTransform: (t, e) => {
                t.style.transform = void 0 !== e ? e : "none"
            }
            ,
            checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
        });
        function nc(t, e) {
            let i = function(t, e, i) {
                var r;
                if (t instanceof EventTarget)
                    return [t];
                if ("string" == typeof t) {
                    let e = document
                      , i = (r = void 0,
                    e.querySelectorAll(t));
                    return i ? Array.from(i) : []
                }
                return Array.from(t)
            }(t)
              , r = new AbortController;
            return [i, {
                passive: !0,
                ...e,
                signal: r.signal
            }, () => r.abort()]
        }
        function nd(t) {
            return !("touch" === t.pointerType || iv.x || iv.y)
        }
        function np(t, e, i) {
            let {props: r} = t;
            t.animationState && r.whileHover && t.animationState.setActive("whileHover", "Start" === i);
            let n = r["onHover" + i];
            n && b.postRender( () => n(e, ib(e)))
        }
        class nf extends id {
            mount() {
                let {current: t} = this.node;
                t && (this.unmount = function(t, e, i={}) {
                    let[r,n,s] = nc(t, i)
                      , o = t => {
                        if (!nd(t))
                            return;
                        let {target: i} = t
                          , r = e(i, t);
                        if ("function" != typeof r || !i)
                            return;
                        let s = t => {
                            nd(t) && (r(t),
                            i.removeEventListener("pointerleave", s))
                        }
                        ;
                        i.addEventListener("pointerleave", s, n)
                    }
                    ;
                    return r.forEach(t => {
                        t.addEventListener("pointerenter", o, n)
                    }
                    ),
                    s
                }(t, (t, e) => (np(this.node, e, "Start"),
                t => np(this.node, t, "End"))))
            }
            unmount() {}
        }
        class nm extends id {
            constructor() {
                super(...arguments),
                this.isActive = !1
            }
            onFocus() {
                let t = !1;
                try {
                    t = this.node.current.matches(":focus-visible")
                } catch (e) {
                    t = !0
                }
                t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0),
                this.isActive = !0)
            }
            onBlur() {
                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1),
                this.isActive = !1)
            }
            mount() {
                this.unmount = eE(iy(this.node.current, "focus", () => this.onFocus()), iy(this.node.current, "blur", () => this.onBlur()))
            }
            unmount() {}
        }
        let ng = (t, e) => !!e && (t === e || ng(t, e.parentElement))
          , nv = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"])
          , ny = new WeakSet;
        function nx(t) {
            return e => {
                "Enter" === e.key && t(e)
            }
        }
        function nb(t, e) {
            t.dispatchEvent(new PointerEvent("pointer" + e,{
                isPrimary: !0,
                bubbles: !0
            }))
        }
        let nP = (t, e) => {
            let i = t.currentTarget;
            if (!i)
                return;
            let r = nx( () => {
                if (ny.has(i))
                    return;
                nb(i, "down");
                let t = nx( () => {
                    nb(i, "up")
                }
                );
                i.addEventListener("keyup", t, e),
                i.addEventListener("blur", () => nb(i, "cancel"), e)
            }
            );
            i.addEventListener("keydown", r, e),
            i.addEventListener("blur", () => i.removeEventListener("keydown", r), e)
        }
        ;
        function nw(t) {
            return ix(t) && !(iv.x || iv.y)
        }
        function nS(t, e, i) {
            let {props: r} = t;
            if (t.current instanceof HTMLButtonElement && t.current.disabled)
                return;
            t.animationState && r.whileTap && t.animationState.setActive("whileTap", "Start" === i);
            let n = r["onTap" + ("End" === i ? "" : i)];
            n && b.postRender( () => n(e, ib(e)))
        }
        class nT extends id {
            mount() {
                let {current: t} = this.node;
                t && (this.unmount = function(t, e, i={}) {
                    let[r,n,s] = nc(t, i)
                      , o = t => {
                        let i = t.currentTarget;
                        if (!i || !nw(t) || ny.has(i))
                            return;
                        ny.add(i),
                        iH(t, "set");
                        let r = e(i, t)
                          , s = (t, e) => {
                            i.removeEventListener("pointerup", o),
                            i.removeEventListener("pointercancel", a),
                            iH(t, "release"),
                            nw(t) && ny.has(i) && (ny.delete(i),
                            "function" == typeof r && r(t, {
                                success: e
                            }))
                        }
                          , o = t => {
                            var e, r;
                            t.isTrusted && (e = t,
                            r = i instanceof Element ? i.getBoundingClientRect() : {
                                left: 0,
                                top: 0,
                                right: window.innerWidth,
                                bottom: window.innerHeight
                            },
                            e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) ? s(t, !1) : s(t, !(i instanceof Element) || ng(i, t.target))
                        }
                          , a = t => {
                            s(t, !1)
                        }
                        ;
                        i.addEventListener("pointerup", o, n),
                        i.addEventListener("pointercancel", a, n),
                        i.addEventListener("lostpointercapture", a, n)
                    }
                    ;
                    return r.forEach(t => {
                        t = i.useGlobalTarget ? window : t;
                        let e = !1;
                        if (t instanceof HTMLElement) {
                            var r;
                            e = !0,
                            r = t,
                            !nv.has(r.tagName) && -1 === r.tabIndex && null === t.getAttribute("tabindex") && (t.tabIndex = 0)
                        }
                        t.addEventListener("pointerdown", o, n),
                        e && t.addEventListener("focus", t => nP(t, n), n)
                    }
                    ),
                    s
                }(t, (t, e) => (nS(this.node, e, "Start"),
                (t, {success: e}) => nS(this.node, t, e ? "End" : "Cancel")), {
                    useGlobalTarget: this.node.props.globalTapTarget
                }))
            }
            unmount() {}
        }
        let nA = new WeakMap
          , nE = new WeakMap
          , nM = t => {
            let e = nA.get(t.target);
            e && e(t)
        }
          , nC = t => {
            t.forEach(nM)
        }
          , nO = {
            some: 0,
            all: 1
        };
        class nj extends id {
            constructor() {
                super(...arguments),
                this.hasEnteredView = !1,
                this.isInView = !1
            }
            startObserver() {
                this.unmount();
                let {viewport: t={}} = this.node.getProps()
                  , {root: e, margin: i, amount: r="some", once: n} = t
                  , s = {
                    root: e ? e.current : void 0,
                    rootMargin: i,
                    threshold: "number" == typeof r ? r : nO[r]
                };
                return function(t, e, i) {
                    let r = function({root: t, ...e}) {
                        let i = t || document;
                        nE.has(i) || nE.set(i, {});
                        let r = nE.get(i)
                          , n = JSON.stringify(e);
                        return r[n] || (r[n] = new IntersectionObserver(nC,{
                            root: t,
                            ...e
                        })),
                        r[n]
                    }(e);
                    return nA.set(t, i),
                    r.observe(t),
                    () => {
                        nA.delete(t),
                        r.unobserve(t)
                    }
                }(this.node.current, s, t => {
                    let {isIntersecting: e} = t;
                    if (this.isInView === e || (this.isInView = e,
                    n && !e && this.hasEnteredView))
                        return;
                    e && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive("whileInView", e);
                    let {onViewportEnter: i, onViewportLeave: r} = this.node.getProps()
                      , s = e ? i : r;
                    s && s(t)
                }
                )
            }
            mount() {
                this.startObserver()
            }
            update() {
                if ("undefined" == typeof IntersectionObserver)
                    return;
                let {props: t, prevProps: e} = this.node;
                ["amount", "margin", "root"].some(function({viewport: t={}}, {viewport: e={}}={}) {
                    return i => t[i] !== e[i]
                }(t, e)) && this.startObserver()
            }
            unmount() {}
        }
        let nV = (0,
        rn.createContext)({
            strict: !1
        })
          , nR = (0,
        rn.createContext)({
            transformPagePoint: t => t,
            isStatic: !1,
            reducedMotion: "never"
        })
          , nD = (0,
        rn.createContext)({});
        function nk(t) {
            return n(t.animate) || io.some(e => ir(t[e]))
        }
        function n_(t) {
            return !!(nk(t) || t.variants)
        }
        function nF(t) {
            return Array.isArray(t) ? t.join(" ") : t
        }
        let nL = "undefined" != typeof window
          , nB = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        }
          , nI = {};
        for (let t in nB)
            nI[t] = {
                isEnabled: e => nB[t].some(t => !!e[t])
            };
        let nU = Symbol.for("motionComponentSymbol")
          , nN = nL ? rn.useLayoutEffect : rn.useEffect;
        function nz(t, {layout: e, layoutId: i}) {
            return h.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!rp[t] || "opacity" === t)
        }
        let n$ = (t, e) => e && "number" == typeof t ? e.transform(t) : t
          , nY = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        }
          , nW = u.length;
        function nX(t, e, i) {
            let {style: r, vars: n, transformOrigin: s} = t
              , o = !1
              , a = !1;
            for (let t in e) {
                let i = e[t];
                if (h.has(t)) {
                    o = !0;
                    continue
                }
                if (ei(t)) {
                    n[t] = i;
                    continue
                }
                {
                    let e = n$(i, tH[t]);
                    t.startsWith("origin") ? (a = !0,
                    s[t] = e) : r[t] = e
                }
            }
            if (!e.transform && (o || i ? r.transform = function(t, e, i) {
                let r = ""
                  , n = !0;
                for (let s = 0; s < nW; s++) {
                    let o = u[s]
                      , a = t[o];
                    if (void 0 === a)
                        continue;
                    let l = !0;
                    if (!(l = "number" == typeof a ? a === +!!o.startsWith("scale") : 0 === parseFloat(a)) || i) {
                        let t = n$(a, tH[o]);
                        if (!l) {
                            n = !1;
                            let e = nY[o] || o;
                            r += `${e}(${t}) `
                        }
                        i && (e[o] = t)
                    }
                }
                return r = r.trim(),
                i ? r = i(e, n ? "" : r) : n && (r = "none"),
                r
            }(e, t.transform, i) : r.transform && (r.transform = "none")),
            a) {
                let {originX: t="50%", originY: e="50%", originZ: i=0} = s;
                r.transformOrigin = `${t} ${e} ${i}`
            }
        }
        let nH = () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {}
        });
        function nq(t, e, i) {
            for (let r in e)
                D(e[r]) || nz(r, i) || (t[r] = e[r])
        }
        let nK = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
        function nG(t) {
            return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || nK.has(t)
        }
        let nZ = t => !nG(t);
        try {
            !function(t) {
                t && (nZ = e => e.startsWith("on") ? !nG(e) : t(e))
            }(require("@emotion/is-prop-valid").default)
        } catch (t) {}
        let nJ = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
        function nQ(t) {
            if ("string" != typeof t || t.includes("-"))
                ;
            else if (nJ.indexOf(t) > -1 || /[A-Z]/u.test(t))
                return !0;
            return !1
        }
        let n0 = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        }
          , n1 = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
        function n2(t, e, i) {
            return "string" == typeof t ? t : tM.transform(e + i * t)
        }
        function n5(t, {attrX: e, attrY: i, attrScale: r, originX: n, originY: s, pathLength: o, pathSpacing: a=1, pathOffset: l=0, ...u}, h, c) {
            if (nX(t, u, c),
            h) {
                t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                return
            }
            t.attrs = t.style,
            t.style = {};
            let {attrs: d, style: p, dimensions: f} = t;
            d.transform && (f && (p.transform = d.transform),
            delete d.transform),
            f && (void 0 !== n || void 0 !== s || p.transform) && (p.transformOrigin = function(t, e, i) {
                let r = n2(e, t.x, t.width)
                  , n = n2(i, t.y, t.height);
                return `${r} ${n}`
            }(f, void 0 !== n ? n : .5, void 0 !== s ? s : .5)),
            void 0 !== e && (d.x = e),
            void 0 !== i && (d.y = i),
            void 0 !== r && (d.scale = r),
            void 0 !== o && function(t, e, i=1, r=0, n=!0) {
                t.pathLength = 1;
                let s = n ? n0 : n1;
                t[s.offset] = tM.transform(-r);
                let o = tM.transform(e)
                  , a = tM.transform(i);
                t[s.array] = `${o} ${a}`
            }(d, o, a, l, !1)
        }
        let n3 = () => ({
            ...nH(),
            attrs: {}
        })
          , n9 = t => "string" == typeof t && "svg" === t.toLowerCase()
          , n6 = t => (e, i) => {
            let r = (0,
            rn.useContext)(nD)
              , s = (0,
            rn.useContext)(rs)
              , a = () => (function({scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: i}, r, s, a) {
                let l = {
                    latestValues: function(t, e, i, r) {
                        let s = {}
                          , a = r(t, {});
                        for (let t in a)
                            s[t] = rx(a[t]);
                        let {initial: l, animate: u} = t
                          , h = nk(t)
                          , c = n_(t);
                        e && c && !h && !1 !== t.inherit && (void 0 === l && (l = e.initial),
                        void 0 === u && (u = e.animate));
                        let d = !!i && !1 === i.initial
                          , p = (d = d || !1 === l) ? u : l;
                        if (p && "boolean" != typeof p && !n(p)) {
                            let e = Array.isArray(p) ? p : [p];
                            for (let i = 0; i < e.length; i++) {
                                let r = o(t, e[i]);
                                if (r) {
                                    let {transitionEnd: t, transition: e, ...i} = r;
                                    for (let t in i) {
                                        let e = i[t];
                                        if (Array.isArray(e)) {
                                            let t = d ? e.length - 1 : 0;
                                            e = e[t]
                                        }
                                        null !== e && (s[t] = e)
                                    }
                                    for (let e in t)
                                        s[e] = t[e]
                                }
                            }
                        }
                        return s
                    }(r, s, a, t),
                    renderState: e()
                };
                return i && (l.onMount = t => i({
                    props: r,
                    current: t,
                    ...l
                }),
                l.onUpdate = t => i(t)),
                l
            }
            )(t, e, r, s);
            return i ? a() : function(t) {
                let e = (0,
                rn.useRef)(null);
                return null === e.current && (e.current = t()),
                e.current
            }(a)
        }
        ;
        function n8(t, e, i) {
            var r;
            let {style: n} = t
              , s = {};
            for (let o in n)
                (D(n[o]) || e.style && D(e.style[o]) || nz(o, t) || (null === (r = null == i ? void 0 : i.getValue(o)) || void 0 === r ? void 0 : r.liveStyle) !== void 0) && (s[o] = n[o]);
            return s
        }
        let n4 = {
            useVisualState: n6({
                scrapeMotionValuesFromProps: n8,
                createRenderState: nH
            })
        };
        function n7(t, e) {
            try {
                e.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
            } catch (t) {
                e.dimensions = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                }
            }
        }
        function st(t, {style: e, vars: i}, r, n) {
            for (let s in Object.assign(t.style, e, n && n.getProjectionStyles(r)),
            i)
                t.style.setProperty(s, i[s])
        }
        let se = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
        function si(t, e, i, r) {
            for (let i in st(t, e, void 0, r),
            e.attrs)
                t.setAttribute(se.has(i) ? i : _(i), e.attrs[i])
        }
        function sr(t, e, i) {
            let r = n8(t, e, i);
            for (let i in t)
                (D(t[i]) || D(e[i])) && (r[-1 !== u.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i]);
            return r
        }
        let sn = ["x", "y", "width", "height", "cx", "cy", "r"]
          , ss = {
            useVisualState: n6({
                scrapeMotionValuesFromProps: sr,
                createRenderState: n3,
                onUpdate: ({props: t, prevProps: e, current: i, renderState: r, latestValues: n}) => {
                    if (!i)
                        return;
                    let s = !!t.drag;
                    if (!s) {
                        for (let t in n)
                            if (h.has(t)) {
                                s = !0;
                                break
                            }
                    }
                    if (!s)
                        return;
                    let o = !e;
                    if (e)
                        for (let i = 0; i < sn.length; i++) {
                            let r = sn[i];
                            t[r] !== e[r] && (o = !0)
                        }
                    o && b.read( () => {
                        n7(i, r),
                        b.render( () => {
                            n5(r, n, n9(i.tagName), t.transformTemplate),
                            si(i, r)
                        }
                        )
                    }
                    )
                }
            })
        }
          , so = {
            current: null
        }
          , sa = {
            current: !1
        }
          , sl = [...el, tR, tN]
          , su = t => sl.find(ea(t))
          , sh = new WeakMap
          , sc = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
        class sd {
            scrapeMotionValuesFromProps(t, e, i) {
                return {}
            }
            constructor({parent: t, props: e, presenceContext: i, reducedMotionConfig: r, blockInitialAnimation: n, visualState: s}, o={}) {
                this.current = null,
                this.children = new Set,
                this.isVariantNode = !1,
                this.isControllingVariants = !1,
                this.shouldReduceMotion = null,
                this.values = new Map,
                this.KeyframeResolver = t7,
                this.features = {},
                this.valueSubscriptions = new Map,
                this.prevMotionValues = {},
                this.events = {},
                this.propEventSubscriptions = {},
                this.notifyUpdate = () => this.notify("Update", this.latestValues),
                this.render = () => {
                    this.current && (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                }
                ,
                this.renderScheduledAt = 0,
                this.scheduleRender = () => {
                    let t = A.now();
                    this.renderScheduledAt < t && (this.renderScheduledAt = t,
                    b.render(this.render, !1, !0))
                }
                ;
                let {latestValues: a, renderState: l, onUpdate: u} = s;
                this.onUpdate = u,
                this.latestValues = a,
                this.baseTarget = {
                    ...a
                },
                this.initialValues = e.initial ? {
                    ...a
                } : {},
                this.renderState = l,
                this.parent = t,
                this.props = e,
                this.presenceContext = i,
                this.depth = t ? t.depth + 1 : 0,
                this.reducedMotionConfig = r,
                this.options = o,
                this.blockInitialAnimation = !!n,
                this.isControllingVariants = nk(e),
                this.isVariantNode = n_(e),
                this.isVariantNode && (this.variantChildren = new Set),
                this.manuallyAnimateOnMount = !!(t && t.current);
                let {willChange: h, ...c} = this.scrapeMotionValuesFromProps(e, {}, this);
                for (let t in c) {
                    let e = c[t];
                    void 0 !== a[t] && D(e) && e.set(a[t], !1)
                }
            }
            mount(t) {
                this.current = t,
                sh.set(t, this),
                this.projection && !this.projection.instance && this.projection.mount(t),
                this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
                this.values.forEach( (t, e) => this.bindToMotionValue(e, t)),
                sa.current || function() {
                    if (sa.current = !0,
                    nL) {
                        if (window.matchMedia) {
                            let t = window.matchMedia("(prefers-reduced-motion)")
                              , e = () => so.current = t.matches;
                            t.addListener(e),
                            e()
                        } else
                            so.current = !1
                    }
                }(),
                this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || so.current),
                this.parent && this.parent.children.add(this),
                this.update(this.props, this.presenceContext)
            }
            unmount() {
                for (let t in this.projection && this.projection.unmount(),
                P(this.notifyUpdate),
                P(this.render),
                this.valueSubscriptions.forEach(t => t()),
                this.valueSubscriptions.clear(),
                this.removeFromVariantTree && this.removeFromVariantTree(),
                this.parent && this.parent.children.delete(this),
                this.events)
                    this.events[t].clear();
                for (let t in this.features) {
                    let e = this.features[t];
                    e && (e.unmount(),
                    e.isMounted = !1)
                }
                this.current = null
            }
            bindToMotionValue(t, e) {
                let i;
                this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
                let r = h.has(t);
                r && this.onBindTransform && this.onBindTransform();
                let n = e.on("change", e => {
                    this.latestValues[t] = e,
                    this.props.onUpdate && b.preRender(this.notifyUpdate),
                    r && this.projection && (this.projection.isTransformDirty = !0)
                }
                )
                  , s = e.on("renderRequest", this.scheduleRender);
                window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)),
                this.valueSubscriptions.set(t, () => {
                    n(),
                    s(),
                    i && i(),
                    e.owner && e.stop()
                }
                )
            }
            sortNodePosition(t) {
                return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
            }
            updateFeatures() {
                let t = "animation";
                for (t in nI) {
                    let e = nI[t];
                    if (!e)
                        continue;
                    let {isEnabled: i, Feature: r} = e;
                    if (!this.features[t] && r && i(this.props) && (this.features[t] = new r(this)),
                    this.features[t]) {
                        let e = this.features[t];
                        e.isMounted ? e.update() : (e.mount(),
                        e.isMounted = !0)
                    }
                }
            }
            triggerBuild() {
                this.build(this.renderState, this.latestValues, this.props)
            }
            measureViewportBox() {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : iD()
            }
            getStaticValue(t) {
                return this.latestValues[t]
            }
            setStaticValue(t, e) {
                this.latestValues[t] = e
            }
            update(t, e) {
                (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
                this.prevProps = this.props,
                this.props = t,
                this.prevPresenceContext = this.presenceContext,
                this.presenceContext = e;
                for (let e = 0; e < sc.length; e++) {
                    let i = sc[e];
                    this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
                    delete this.propEventSubscriptions[i]);
                    let r = t["on" + i];
                    r && (this.propEventSubscriptions[i] = this.on(i, r))
                }
                this.prevMotionValues = function(t, e, i) {
                    for (let r in e) {
                        let n = e[r]
                          , s = i[r];
                        if (D(n))
                            t.addValue(r, n);
                        else if (D(s))
                            t.addValue(r, R(n, {
                                owner: t
                            }));
                        else if (s !== n) {
                            if (t.hasValue(r)) {
                                let e = t.getValue(r);
                                !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n)
                            } else {
                                let e = t.getStaticValue(r);
                                t.addValue(r, R(void 0 !== e ? e : n, {
                                    owner: t
                                }))
                            }
                        }
                    }
                    for (let r in i)
                        void 0 === e[r] && t.removeValue(r);
                    return e
                }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
                this.handleChildMotionValue && this.handleChildMotionValue(),
                this.onUpdate && this.onUpdate(this)
            }
            getProps() {
                return this.props
            }
            getVariant(t) {
                return this.props.variants ? this.props.variants[t] : void 0
            }
            getDefaultTransition() {
                return this.props.transition
            }
            getTransformPagePoint() {
                return this.props.transformPagePoint
            }
            getClosestVariantNode() {
                return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
            }
            addVariantChild(t) {
                let e = this.getClosestVariantNode();
                if (e)
                    return e.variantChildren && e.variantChildren.add(t),
                    () => e.variantChildren.delete(t)
            }
            addValue(t, e) {
                let i = this.values.get(t);
                e !== i && (i && this.removeValue(t),
                this.bindToMotionValue(t, e),
                this.values.set(t, e),
                this.latestValues[t] = e.get())
            }
            removeValue(t) {
                this.values.delete(t);
                let e = this.valueSubscriptions.get(t);
                e && (e(),
                this.valueSubscriptions.delete(t)),
                delete this.latestValues[t],
                this.removeValueFromRenderState(t, this.renderState)
            }
            hasValue(t) {
                return this.values.has(t)
            }
            getValue(t, e) {
                if (this.props.values && this.props.values[t])
                    return this.props.values[t];
                let i = this.values.get(t);
                return void 0 === i && void 0 !== e && (i = R(null === e ? void 0 : e, {
                    owner: this
                }),
                this.addValue(t, i)),
                i
            }
            readValue(t, e) {
                var i;
                let r = void 0 === this.latestValues[t] && this.current ? null !== (i = this.getBaseTargetFromProps(this.props, t)) && void 0 !== i ? i : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                return null != r && ("string" == typeof r && (et(r) || th(r)) ? r = parseFloat(r) : !su(r) && tN.test(e) && (r = tG(t, e)),
                this.setBaseTarget(t, D(r) ? r.get() : r)),
                D(r) ? r.get() : r
            }
            setBaseTarget(t, e) {
                this.baseTarget[t] = e
            }
            getBaseTarget(t) {
                var e;
                let i;
                let {initial: r} = this.props;
                if ("string" == typeof r || "object" == typeof r) {
                    let n = o(this.props, r, null === (e = this.presenceContext) || void 0 === e ? void 0 : e.custom);
                    n && (i = n[t])
                }
                if (r && void 0 !== i)
                    return i;
                let n = this.getBaseTargetFromProps(this.props, t);
                return void 0 === n || D(n) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : n
            }
            on(t, e) {
                return this.events[t] || (this.events[t] = new C),
                this.events[t].add(e)
            }
            notify(t, ...e) {
                this.events[t] && this.events[t].notify(...e)
            }
        }
        class sp extends sd {
            constructor() {
                super(...arguments),
                this.KeyframeResolver = eh
            }
            sortInstanceNodePosition(t, e) {
                return 2 & t.compareDocumentPosition(e) ? 1 : -1
            }
            getBaseTargetFromProps(t, e) {
                return t.style ? t.style[e] : void 0
            }
            removeValueFromRenderState(t, {vars: e, style: i}) {
                delete e[t],
                delete i[t]
            }
            handleChildMotionValue() {
                this.childSubscription && (this.childSubscription(),
                delete this.childSubscription);
                let {children: t} = this.props;
                D(t) && (this.childSubscription = t.on("change", t => {
                    this.current && (this.current.textContent = `${t}`)
                }
                ))
            }
        }
        class sf extends sp {
            constructor() {
                super(...arguments),
                this.type = "html",
                this.renderInstance = st
            }
            readValueFromInstance(t, e) {
                if (h.has(e)) {
                    let t = tK(e);
                    return t && t.default || 0
                }
                {
                    let i = window.getComputedStyle(t)
                      , r = (ei(e) ? i.getPropertyValue(e) : i[e]) || 0;
                    return "string" == typeof r ? r.trim() : r
                }
            }
            measureInstanceViewportBox(t, {transformPagePoint: e}) {
                return iW(t, e)
            }
            build(t, e, i) {
                nX(t, e, i.transformTemplate)
            }
            scrapeMotionValuesFromProps(t, e, i) {
                return n8(t, e, i)
            }
        }
        class sm extends sp {
            constructor() {
                super(...arguments),
                this.type = "svg",
                this.isSVGTag = !1,
                this.measureInstanceViewportBox = iD,
                this.updateDimensions = () => {
                    this.current && !this.renderState.dimensions && n7(this.current, this.renderState)
                }
            }
            getBaseTargetFromProps(t, e) {
                return t[e]
            }
            readValueFromInstance(t, e) {
                if (h.has(e)) {
                    let t = tK(e);
                    return t && t.default || 0
                }
                return e = se.has(e) ? e : _(e),
                t.getAttribute(e)
            }
            scrapeMotionValuesFromProps(t, e, i) {
                return sr(t, e, i)
            }
            onBindTransform() {
                this.current && !this.renderState.dimensions && b.postRender(this.updateDimensions)
            }
            build(t, e, i) {
                n5(t, e, this.isSVGTag, i.transformTemplate)
            }
            renderInstance(t, e, i, r) {
                si(t, e, i, r)
            }
            mount(t) {
                this.isSVGTag = n9(t.tagName),
                super.mount(t)
            }
        }
        let sg = (re = {
            ...{
                animation: {
                    Feature: ip
                },
                exit: {
                    Feature: ig
                }
            },
            ...{
                inView: {
                    Feature: nj
                },
                tap: {
                    Feature: nT
                },
                focus: {
                    Feature: nm
                },
                hover: {
                    Feature: nf
                }
            },
            ...{
                pan: {
                    Feature: rt
                },
                drag: {
                    Feature: i4,
                    ProjectionNode: nh,
                    MeasureLayout: rm
                }
            },
            ...{
                layout: {
                    ProjectionNode: nh,
                    MeasureLayout: rm
                }
            }
        },
        ri = (t, e) => nQ(t) ? new sm(e) : new sf(e,{
            allowProjection: t !== rn.Fragment
        }),
        function(t, {forwardMotionProps: e}={
            forwardMotionProps: !1
        }) {
            return function(t) {
                var e, i;
                let {preloadedFeatures: r, createVisualElement: n, useRender: s, useVisualState: o, Component: a} = t;
                function l(t, e) {
                    var i, r, l;
                    let u;
                    let h = {
                        ...(0,
                        rn.useContext)(nR),
                        ...t,
                        layoutId: function(t) {
                            let {layoutId: e} = t
                              , i = (0,
                            rn.useContext)(ro).id;
                            return i && void 0 !== e ? i + "-" + e : e
                        }(t)
                    }
                      , {isStatic: c} = h
                      , d = function(t) {
                        let {initial: e, animate: i} = function(t, e) {
                            if (nk(t)) {
                                let {initial: e, animate: i} = t;
                                return {
                                    initial: !1 === e || ir(e) ? e : void 0,
                                    animate: ir(i) ? i : void 0
                                }
                            }
                            return !1 !== t.inherit ? e : {}
                        }(t, (0,
                        rn.useContext)(nD));
                        return (0,
                        rn.useMemo)( () => ({
                            initial: e,
                            animate: i
                        }), [nF(e), nF(i)])
                    }(t)
                      , p = o(t, c);
                    if (!c && nL) {
                        r = 0,
                        l = 0,
                        (0,
                        rn.useContext)(nV).strict;
                        let t = function(t) {
                            let {drag: e, layout: i} = nI;
                            if (!e && !i)
                                return {};
                            let r = {
                                ...e,
                                ...i
                            };
                            return {
                                MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == i ? void 0 : i.isEnabled(t)) ? r.MeasureLayout : void 0,
                                ProjectionNode: r.ProjectionNode
                            }
                        }(h);
                        u = t.MeasureLayout,
                        d.visualElement = function(t, e, i, r, n) {
                            var s, o;
                            let {visualElement: a} = (0,
                            rn.useContext)(nD)
                              , l = (0,
                            rn.useContext)(nV)
                              , u = (0,
                            rn.useContext)(rs)
                              , h = (0,
                            rn.useContext)(nR).reducedMotion
                              , c = (0,
                            rn.useRef)(null);
                            r = r || l.renderer,
                            !c.current && r && (c.current = r(t, {
                                visualState: e,
                                parent: a,
                                props: i,
                                presenceContext: u,
                                blockInitialAnimation: !!u && !1 === u.initial,
                                reducedMotionConfig: h
                            }));
                            let d = c.current
                              , p = (0,
                            rn.useContext)(ra);
                            d && !d.projection && n && ("html" === d.type || "svg" === d.type) && function(t, e, i, r) {
                                let {layoutId: n, layout: s, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: u} = e;
                                t.projection = new i(t.latestValues,e["data-framer-portal-id"] ? void 0 : function t(e) {
                                    if (e)
                                        return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                                }(t.parent)),
                                t.projection.setOptions({
                                    layoutId: n,
                                    layout: s,
                                    alwaysMeasureLayout: !!o || a && iX(a),
                                    visualElement: t,
                                    animationType: "string" == typeof s ? s : "both",
                                    initialPromotionConfig: r,
                                    layoutScroll: l,
                                    layoutRoot: u
                                })
                            }(c.current, i, n, p);
                            let f = (0,
                            rn.useRef)(!1);
                            (0,
                            rn.useInsertionEffect)( () => {
                                d && f.current && d.update(i, u)
                            }
                            );
                            let m = i[F]
                              , g = (0,
                            rn.useRef)(!!m && !(null === (s = window.MotionHandoffIsComplete) || void 0 === s ? void 0 : s.call(window, m)) && (null === (o = window.MotionHasOptimisedAnimation) || void 0 === o ? void 0 : o.call(window, m)));
                            return nN( () => {
                                d && (f.current = !0,
                                window.MotionIsMounted = !0,
                                d.updateFeatures(),
                                rl.render(d.render),
                                g.current && d.animationState && d.animationState.animateChanges())
                            }
                            ),
                            (0,
                            rn.useEffect)( () => {
                                d && (!g.current && d.animationState && d.animationState.animateChanges(),
                                g.current && (queueMicrotask( () => {
                                    var t;
                                    null === (t = window.MotionHandoffMarkAsComplete) || void 0 === t || t.call(window, m)
                                }
                                ),
                                g.current = !1))
                            }
                            ),
                            d
                        }(a, p, h, n, t.ProjectionNode)
                    }
                    return (0,
                    rr.jsxs)(nD.Provider, {
                        value: d,
                        children: [u && d.visualElement ? (0,
                        rr.jsx)(u, {
                            visualElement: d.visualElement,
                            ...h
                        }) : null, s(a, t, (i = d.visualElement,
                        (0,
                        rn.useCallback)(t => {
                            t && p.onMount && p.onMount(t),
                            i && (t ? i.mount(t) : i.unmount()),
                            e && ("function" == typeof e ? e(t) : iX(e) && (e.current = t))
                        }
                        , [i])), p, c, d.visualElement)]
                    })
                }
                r && function(t) {
                    for (let e in t)
                        nI[e] = {
                            ...nI[e],
                            ...t[e]
                        }
                }(r),
                l.displayName = "motion.".concat("string" == typeof a ? a : "create(".concat(null !== (i = null !== (e = a.displayName) && void 0 !== e ? e : a.name) && void 0 !== i ? i : "", ")"));
                let u = (0,
                rn.forwardRef)(l);
                return u[nU] = a,
                u
            }({
                ...nQ(t) ? ss : n4,
                preloadedFeatures: re,
                useRender: function(t=!1) {
                    return (e, i, r, {latestValues: n}, s) => {
                        let o = (nQ(e) ? function(t, e, i, r) {
                            let n = (0,
                            rn.useMemo)( () => {
                                let i = n3();
                                return n5(i, e, n9(r), t.transformTemplate),
                                {
                                    ...i.attrs,
                                    style: {
                                        ...i.style
                                    }
                                }
                            }
                            , [e]);
                            if (t.style) {
                                let e = {};
                                nq(e, t.style, t),
                                n.style = {
                                    ...e,
                                    ...n.style
                                }
                            }
                            return n
                        }
                        : function(t, e) {
                            let i = {}
                              , r = function(t, e) {
                                let i = t.style || {}
                                  , r = {};
                                return nq(r, i, t),
                                Object.assign(r, function({transformTemplate: t}, e) {
                                    return (0,
                                    rn.useMemo)( () => {
                                        let i = nH();
                                        return nX(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                    }
                                    , [e])
                                }(t, e)),
                                r
                            }(t, e);
                            return t.drag && !1 !== t.dragListener && (i.draggable = !1,
                            r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
                            r.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`),
                            void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (i.tabIndex = 0),
                            i.style = r,
                            i
                        }
                        )(i, n, s, e)
                          , a = function(t, e, i) {
                            let r = {};
                            for (let n in t)
                                ("values" !== n || "object" != typeof t.values) && (nZ(n) || !0 === i && nG(n) || !e && !nG(n) || t.draggable && n.startsWith("onDrag")) && (r[n] = t[n]);
                            return r
                        }(i, "string" == typeof e, t)
                          , l = e !== rn.Fragment ? {
                            ...a,
                            ...o,
                            ref: r
                        } : {}
                          , {children: u} = i
                          , h = (0,
                        rn.useMemo)( () => D(u) ? u.get() : u, [u]);
                        return (0,
                        rn.createElement)(e, {
                            ...l,
                            children: h
                        })
                    }
                }(e),
                createVisualElement: ri,
                Component: t
            })
        }
        )("span")
    }
    ,
    6752: (t, e, i) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "ImageConfigContext", {
            enumerable: !0,
            get: function() {
                return s
            }
        });
        let r = i(8229)._(i(2115))
          , n = i(5840)
          , s = r.default.createContext(n.imageConfigDefault)
    }
    ,
    6766: (t, e, i) => {
        "use strict";
        i.d(e, {
            default: () => n.a
        });
        var r = i(1469)
          , n = i.n(r)
    }
    ,
    6874: (t, e, i) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return f
            }
        });
        let r = i(8229)
          , n = i(5155)
          , s = r._(i(2115))
          , o = i(2757)
          , a = i(5227)
          , l = i(9818)
          , u = i(6654)
          , h = i(9991)
          , c = i(5929);
        i(3230);
        let d = i(4930);
        function p(t) {
            return "string" == typeof t ? t : (0,
            o.formatUrl)(t)
        }
        let f = s.default.forwardRef(function(t, e) {
            let i, r;
            let {href: o, as: f, children: m, prefetch: g=null, passHref: v, replace: y, shallow: x, scroll: b, onClick: P, onMouseEnter: w, onTouchStart: S, legacyBehavior: T=!1, ...A} = t;
            i = m,
            T && ("string" == typeof i || "number" == typeof i) && (i = (0,
            n.jsx)("a", {
                children: i
            }));
            let E = s.default.useContext(a.AppRouterContext)
              , M = !1 !== g
              , C = null === g ? l.PrefetchKind.AUTO : l.PrefetchKind.FULL
              , {href: O, as: j} = s.default.useMemo( () => {
                let t = p(o);
                return {
                    href: t,
                    as: f ? p(f) : t
                }
            }
            , [o, f]);
            T && (r = s.default.Children.only(i));
            let V = T ? r && "object" == typeof r && r.ref : e
              , R = s.default.useCallback(t => (M && null !== E && (0,
            d.mountLinkInstance)(t, O, E, C),
            () => {
                (0,
                d.unmountLinkInstance)(t)
            }
            ), [M, O, E, C])
              , D = {
                ref: (0,
                u.useMergedRef)(R, V),
                onClick(t) {
                    T || "function" != typeof P || P(t),
                    T && r.props && "function" == typeof r.props.onClick && r.props.onClick(t),
                    E && !t.defaultPrevented && !function(t, e, i, r, n, o, a) {
                        let {nodeName: l} = t.currentTarget;
                        !("A" === l.toUpperCase() && function(t) {
                            let e = t.currentTarget.getAttribute("target");
                            return e && "_self" !== e || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which
                        }(t)) && (t.preventDefault(),
                        s.default.startTransition( () => {
                            let t = null == a || a;
                            "beforePopState"in e ? e[n ? "replace" : "push"](i, r, {
                                shallow: o,
                                scroll: t
                            }) : e[n ? "replace" : "push"](r || i, {
                                scroll: t
                            })
                        }
                        ))
                    }(t, E, O, j, y, x, b)
                },
                onMouseEnter(t) {
                    T || "function" != typeof w || w(t),
                    T && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(t),
                    E && M && (0,
                    d.onNavigationIntent)(t.currentTarget)
                },
                onTouchStart: function(t) {
                    T || "function" != typeof S || S(t),
                    T && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(t),
                    E && M && (0,
                    d.onNavigationIntent)(t.currentTarget)
                }
            };
            return (0,
            h.isAbsoluteUrl)(j) ? D.href = j : T && !v && ("a" !== r.type || "href"in r.props) || (D.href = (0,
            c.addBasePath)(j)),
            T ? s.default.cloneElement(r, D) : (0,
            n.jsx)("a", {
                ...A,
                ...D,
                children: i
            })
        });
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    }
    ,
    7544: (t, e) => {
        "use strict";
        function i(t) {
            let {ampFirst: e=!1, hybrid: i=!1, hasQuery: r=!1} = void 0 === t ? {} : t;
            return e || i && r
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "isInAmpMode", {
            enumerable: !0,
            get: function() {
                return i
            }
        })
    }
    ,
    8859: (t, e) => {
        "use strict";
        function i(t) {
            let e = {};
            for (let[i,r] of t.entries()) {
                let t = e[i];
                void 0 === t ? e[i] = r : Array.isArray(t) ? t.push(r) : e[i] = [t, r]
            }
            return e
        }
        function r(t) {
            return "string" == typeof t ? t : ("number" != typeof t || isNaN(t)) && "boolean" != typeof t ? "" : String(t)
        }
        function n(t) {
            let e = new URLSearchParams;
            for (let[i,n] of Object.entries(t))
                if (Array.isArray(n))
                    for (let t of n)
                        e.append(i, r(t));
                else
                    e.set(i, r(n));
            return e
        }
        function s(t) {
            for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
                i[r - 1] = arguments[r];
            for (let e of i) {
                for (let i of e.keys())
                    t.delete(i);
                for (let[i,r] of e.entries())
                    t.append(i, r)
            }
            return t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        !function(t, e) {
            for (var i in e)
                Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: e[i]
                })
        }(e, {
            assign: function() {
                return s
            },
            searchParamsToUrlQuery: function() {
                return i
            },
            urlQueryToSearchParams: function() {
                return n
            }
        })
    }
    ,
    8883: (t, e, i) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "getImgProps", {
            enumerable: !0,
            get: function() {
                return a
            }
        }),
        i(3230);
        let r = i(5100)
          , n = i(5840);
        function s(t) {
            return void 0 !== t.default
        }
        function o(t) {
            return void 0 === t ? t : "number" == typeof t ? Number.isFinite(t) ? t : NaN : "string" == typeof t && /^[0-9]+$/.test(t) ? parseInt(t, 10) : NaN
        }
        function a(t, e) {
            var i, a;
            let l, u, h, {src: c, sizes: d, unoptimized: p=!1, priority: f=!1, loading: m, className: g, quality: v, width: y, height: x, fill: b=!1, style: P, overrideSrc: w, onLoad: S, onLoadingComplete: T, placeholder: A="empty", blurDataURL: E, fetchPriority: M, decoding: C="async", layout: O, objectFit: j, objectPosition: V, lazyBoundary: R, lazyRoot: D, ...k} = t, {imgConf: _, showAltText: F, blurComplete: L, defaultLoader: B} = e, I = _ || n.imageConfigDefault;
            if ("allSizes"in I)
                l = I;
            else {
                let t = [...I.deviceSizes, ...I.imageSizes].sort( (t, e) => t - e)
                  , e = I.deviceSizes.sort( (t, e) => t - e)
                  , r = null == (i = I.qualities) ? void 0 : i.sort( (t, e) => t - e);
                l = {
                    ...I,
                    allSizes: t,
                    deviceSizes: e,
                    qualities: r
                }
            }
            if (void 0 === B)
                throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
                    value: "E163",
                    enumerable: !1,
                    configurable: !0
                });
            let U = k.loader || B;
            delete k.loader,
            delete k.srcSet;
            let N = "__next_img_default"in U;
            if (N) {
                if ("custom" === l.loader)
                    throw Object.defineProperty(Error('Image with src "' + c + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'), "__NEXT_ERROR_CODE", {
                        value: "E252",
                        enumerable: !1,
                        configurable: !0
                    })
            } else {
                let t = U;
                U = e => {
                    let {config: i, ...r} = e;
                    return t(r)
                }
            }
            if (O) {
                "fill" === O && (b = !0);
                let t = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[O];
                t && (P = {
                    ...P,
                    ...t
                });
                let e = {
                    responsive: "100vw",
                    fill: "100vw"
                }[O];
                e && !d && (d = e)
            }
            let z = ""
              , $ = o(y)
              , Y = o(x);
            if ((a = c) && "object" == typeof a && (s(a) || void 0 !== a.src)) {
                let t = s(c) ? c.default : c;
                if (!t.src)
                    throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(t)), "__NEXT_ERROR_CODE", {
                        value: "E460",
                        enumerable: !1,
                        configurable: !0
                    });
                if (!t.height || !t.width)
                    throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(t)), "__NEXT_ERROR_CODE", {
                        value: "E48",
                        enumerable: !1,
                        configurable: !0
                    });
                if (u = t.blurWidth,
                h = t.blurHeight,
                E = E || t.blurDataURL,
                z = t.src,
                !b) {
                    if ($ || Y) {
                        if ($ && !Y) {
                            let e = $ / t.width;
                            Y = Math.round(t.height * e)
                        } else if (!$ && Y) {
                            let e = Y / t.height;
                            $ = Math.round(t.width * e)
                        }
                    } else
                        $ = t.width,
                        Y = t.height
                }
            }
            let W = !f && ("lazy" === m || void 0 === m);
            (!(c = "string" == typeof c ? c : z) || c.startsWith("data:") || c.startsWith("blob:")) && (p = !0,
            W = !1),
            l.unoptimized && (p = !0),
            N && !l.dangerouslyAllowSVG && c.split("?", 1)[0].endsWith(".svg") && (p = !0);
            let X = o(v)
              , H = Object.assign(b ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: j,
                objectPosition: V
            } : {}, F ? {} : {
                color: "transparent"
            }, P)
              , q = L || "empty" === A ? null : "blur" === A ? 'url("data:image/svg+xml;charset=utf-8,' + (0,
            r.getImageBlurSvg)({
                widthInt: $,
                heightInt: Y,
                blurWidth: u,
                blurHeight: h,
                blurDataURL: E || "",
                objectFit: H.objectFit
            }) + '")' : 'url("' + A + '")'
              , K = q ? {
                backgroundSize: H.objectFit || "cover",
                backgroundPosition: H.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: q
            } : {}
              , G = function(t) {
                let {config: e, src: i, unoptimized: r, width: n, quality: s, sizes: o, loader: a} = t;
                if (r)
                    return {
                        src: i,
                        srcSet: void 0,
                        sizes: void 0
                    };
                let {widths: l, kind: u} = function(t, e, i) {
                    let {deviceSizes: r, allSizes: n} = t;
                    if (i) {
                        let t = /(^|\s)(1?\d?\d)vw/g
                          , e = [];
                        for (let r; r = t.exec(i); r)
                            e.push(parseInt(r[2]));
                        if (e.length) {
                            let t = .01 * Math.min(...e);
                            return {
                                widths: n.filter(e => e >= r[0] * t),
                                kind: "w"
                            }
                        }
                        return {
                            widths: n,
                            kind: "w"
                        }
                    }
                    return "number" != typeof e ? {
                        widths: r,
                        kind: "w"
                    } : {
                        widths: [...new Set([e, 2 * e].map(t => n.find(e => e >= t) || n[n.length - 1]))],
                        kind: "x"
                    }
                }(e, n, o)
                  , h = l.length - 1;
                return {
                    sizes: o || "w" !== u ? o : "100vw",
                    srcSet: l.map( (t, r) => a({
                        config: e,
                        src: i,
                        quality: s,
                        width: t
                    }) + " " + ("w" === u ? t : r + 1) + u).join(", "),
                    src: a({
                        config: e,
                        src: i,
                        quality: s,
                        width: l[h]
                    })
                }
            }({
                config: l,
                src: c,
                unoptimized: p,
                width: $,
                quality: X,
                sizes: d,
                loader: U
            });
            return {
                props: {
                    ...k,
                    loading: W ? "lazy" : m,
                    fetchPriority: M,
                    width: $,
                    height: Y,
                    decoding: C,
                    className: g,
                    style: {
                        ...H,
                        ...K
                    },
                    sizes: G.sizes,
                    srcSet: G.srcSet,
                    src: w || G.src
                },
                meta: {
                    unoptimized: p,
                    priority: f,
                    placeholder: A,
                    fill: b
                }
            }
        }
    }
    ,
    9300: (t, e) => {
        var i;
        !function() {
            "use strict";
            var r = {}.hasOwnProperty;
            function n() {
                for (var t = "", e = 0; e < arguments.length; e++) {
                    var i = arguments[e];
                    i && (t = s(t, function(t) {
                        if ("string" == typeof t || "number" == typeof t)
                            return t;
                        if ("object" != typeof t)
                            return "";
                        if (Array.isArray(t))
                            return n.apply(null, t);
                        if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]"))
                            return t.toString();
                        var e = "";
                        for (var i in t)
                            r.call(t, i) && t[i] && (e = s(e, i));
                        return e
                    }(i)))
                }
                return t
            }
            function s(t, e) {
                return e ? t ? t + " " + e : t + e : t
            }
            t.exports ? (n.default = n,
            t.exports = n) : void 0 !== (i = (function() {
                return n
            }
            ).apply(e, [])) && (t.exports = i)
        }()
    }
    ,
    9676: (t, e, i) => {
        "use strict";
        i.d(e, {
            L: () => h
        });
        var r = i(2115)
          , n = i(802);
        let s = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect
          , o = t => t && !Array.isArray(t) && "object" == typeof t
          , a = []
          , l = {}
          , u = n.Ay
          , h = (t, e=a) => {
            let i = l;
            o(t) ? (i = t,
            t = null,
            e = "dependencies"in i ? i.dependencies : a) : o(e) && (e = "dependencies"in (i = e) ? i.dependencies : a),
            t && "function" != typeof t && console.warn("First parameter must be a function or config object");
            let {scope: n, revertOnUpdate: h} = i
              , c = (0,
            r.useRef)(!1)
              , d = (0,
            r.useRef)(u.context( () => {}
            , n))
              , p = (0,
            r.useRef)(t => d.current.add(null, t))
              , f = e && e.length && !h;
            return f && s( () => (c.current = !0,
            () => d.current.revert()), a),
            s( () => {
                if (t && d.current.add(t, n),
                !f || !c.current)
                    return () => d.current.revert()
            }
            , e),
            {
                context: d.current,
                contextSafe: p.current
            }
        }
        ;
        h.register = t => {
            u = t
        }
        ,
        h.headless = !0
    }
    ,
    9991: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        !function(t, e) {
            for (var i in e)
                Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: e[i]
                })
        }(e, {
            DecodeError: function() {
                return f
            },
            MiddlewareNotFoundError: function() {
                return y
            },
            MissingStaticPage: function() {
                return v
            },
            NormalizeError: function() {
                return m
            },
            PageNotFoundError: function() {
                return g
            },
            SP: function() {
                return d
            },
            ST: function() {
                return p
            },
            WEB_VITALS: function() {
                return i
            },
            execOnce: function() {
                return r
            },
            getDisplayName: function() {
                return l
            },
            getLocationOrigin: function() {
                return o
            },
            getURL: function() {
                return a
            },
            isAbsoluteUrl: function() {
                return s
            },
            isResSent: function() {
                return u
            },
            loadGetInitialProps: function() {
                return c
            },
            normalizeRepeatedSlashes: function() {
                return h
            },
            stringifyError: function() {
                return x
            }
        });
        let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
        function r(t) {
            let e, i = !1;
            return function() {
                for (var r = arguments.length, n = Array(r), s = 0; s < r; s++)
                    n[s] = arguments[s];
                return i || (i = !0,
                e = t(...n)),
                e
            }
        }
        let n = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/
          , s = t => n.test(t);
        function o() {
            let {protocol: t, hostname: e, port: i} = window.location;
            return t + "//" + e + (i ? ":" + i : "")
        }
        function a() {
            let {href: t} = window.location
              , e = o();
            return t.substring(e.length)
        }
        function l(t) {
            return "string" == typeof t ? t : t.displayName || t.name || "Unknown"
        }
        function u(t) {
            return t.finished || t.headersSent
        }
        function h(t) {
            let e = t.split("?");
            return e[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (e[1] ? "?" + e.slice(1).join("?") : "")
        }
        async function c(t, e) {
            let i = e.res || e.ctx && e.ctx.res;
            if (!t.getInitialProps)
                return e.ctx && e.Component ? {
                    pageProps: await c(e.Component, e.ctx)
                } : {};
            let r = await t.getInitialProps(e);
            if (i && u(i))
                return r;
            if (!r)
                throw Object.defineProperty(Error('"' + l(t) + '.getInitialProps()" should resolve to an object. But found "' + r + '" instead.'), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: !1,
                    configurable: !0
                });
            return r
        }
        let d = "undefined" != typeof performance
          , p = d && ["mark", "measure", "getEntriesByName"].every(t => "function" == typeof performance[t]);
        class f extends Error {
        }
        class m extends Error {
        }
        class g extends Error {
            constructor(t) {
                super(),
                this.code = "ENOENT",
                this.name = "PageNotFoundError",
                this.message = "Cannot find module for page: " + t
            }
        }
        class v extends Error {
            constructor(t, e) {
                super(),
                this.message = "Failed to load static file for page: " + t + " " + e
            }
        }
        class y extends Error {
            constructor() {
                super(),
                this.code = "ENOENT",
                this.message = "Cannot find the middleware module"
            }
        }
        function x(t) {
            return JSON.stringify({
                message: t.message,
                stack: t.stack
            })
        }
    }
}]);
