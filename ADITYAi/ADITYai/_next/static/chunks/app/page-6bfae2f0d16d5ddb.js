(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974], {
        199: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 8948))
        },
        8948: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => b
            });
            var l = a(5155),
                r = a(2115);
            let n = {
                    "kling-2.6-std": {
                        label: "Kling 2.6 Standard",
                        createUrl: "https://api.magnific.com/v1/ai/video/kling-v2-6-motion-control-std",
                        statusUrl: "https://api.magnific.com/v1/ai/image-to-video/kling-v2-6/{taskId}"
                    },
                    "kling-2.6-pro": {
                        label: "Kling 2.6 Pro",
                        createUrl: "https://api.magnific.com/v1/ai/video/kling-v2-6-motion-control-pro",
                        statusUrl: "https://api.magnific.com/v1/ai/image-to-video/kling-v2-6/{taskId}"
                    },
                    "kling-3-std": {
                        label: "Kling 3 Standard",
                        createUrl: "https://api.magnific.com/v1/ai/video/kling-v3-motion-control-std",
                        statusUrl: "https://api.magnific.com/v1/ai/video/kling-v3-motion-control-std/{taskId}"
                    },
                    "kling-3-pro": {
                        label: "Kling 3 Pro",
                        createUrl: "https://api.magnific.com/v1/ai/video/kling-v3-motion-control-pro",
                        statusUrl: "https://api.magnific.com/v1/ai/video/kling-v3-motion-control-pro/{taskId}"
                    }
                },
                s = /\.(mp4|webm|mov|m4v|m3u8)/i,
                i = /video|output|result|download/i,
                o = "https://snowy-dream-967b.cintakupalsu38.workers.dev",
                c = Object.keys(n),
                d = [{
                    value: "video",
                    label: "Video (default)"
                }, {
                    value: "image",
                    label: "Image"
                }],
                u = ["insufficient credit", "out of credit", "no credit", "quota", "limit reached", "limit exceeded", "usage limit", "exhausted", "balance", "subscription", "plan", "invalid api key", "invalid key", "api key", "apikey", "unauthorized", "authentication failed", "not authorized", "billing", "payment", "upgrade"];

            function x(e, t) {
                var a;
                if (401 === e) return !0;
                let l = ((null == t ? void 0 : t.message) || (null == t ? void 0 : t.error) || (null == t ? void 0 : t.detail) || (null == t || null == (a = t.data) ? void 0 : a.message) || "").toLowerCase();
                return u.some(e => l.includes(e))
            }

            function p(e, t) {
                if (x(e, t)) return !1;
                if (403 === e || 429 === e) return !0;
                let a = ((null == t ? void 0 : t.message) || (null == t ? void 0 : t.error) || "").toLowerCase();
                return !!(a.includes("suspicious activity") || a.includes("ip") && (a.includes("block") || a.includes("ban")))
            }

            function f(e) {
                var t;
                let a = ((null == e ? void 0 : e.message) || (null == e ? void 0 : e.error) || (null == e ? void 0 : e.detail) || (null == e || null == (t = e.data) ? void 0 : t.message) || "").trim();
                return a ? "API key error: ".concat(a) : "API key tidak valid atau limit habis. Coba ganti API key."
            }

            function m(e) {
                return e[Math.floor(Math.random() * e.length)]
            }

            function h(e) {
                let t = Math.floor(e / 1e3),
                    a = Math.floor(t / 60),
                    l = t % 60;
                return 0 === a ? "".concat(l, " detik") : "".concat(a, " menit ").concat(l, " detik")
            }
            let v = ["Task Dibuat", "Proses", "Selesai"];

            function g(e) {
                let {
                    step: t,
                    errorMsg: a
                } = e;
                if ("idle" === t) return null;
                let r = "created" === t ? 0 : "processing" === t ? 1 : 2,
                    n = "failed" === t,
                    s = "done" === t;
                return (0, l.jsxs)("div", {
                    className: "card p-4 space-y-3",
                    children: [(0, l.jsx)("div", {
                        className: "flex items-center gap-0",
                        children: v.map((e, t) => {
                            let a = !n && r === t,
                                i = !n && r > t;
                            return (0, l.jsxs)("div", {
                                className: "flex items-center flex-1 last:flex-none",
                                children: [(0, l.jsxs)("div", {
                                    className: "flex flex-col items-center gap-1 flex-1",
                                    children: [(0, l.jsx)("div", {
                                        className: "w-7 h-7 rounded-full flex items-center justify-center text-xs font-black transition-all ".concat(n && 2 === t ? "bg-red-900/40 border border-red-700 text-red-400" : i ? "bg-[#F5C518] text-black" : a ? "bg-[#1c1c0a] border-2 border-[#F5C518] text-[#F5C518]" : "bg-[#111] border border-[#2a2a1a] text-[#444438]"),
                                        children: i ? "✓" : n && 2 === t ? "✕" : t + 1
                                    }), (0, l.jsx)("span", {
                                        className: "text-[10px] font-bold tracking-wide ".concat(n && 2 === t ? "text-red-400" : i || a ? "text-[#F5C518]" : "text-[#444438]"),
                                        children: 2 === t && n ? "Gagal" : 2 === t && s ? "Selesai" : e
                                    })]
                                }), t < v.length - 1 && (0, l.jsx)("div", {
                                    className: "h-0.5 flex-1 mx-1 mb-4 rounded transition-all ".concat(r > t && !n ? "bg-[#F5C518]" : "bg-[#2a2a1a]")
                                })]
                            }, e)
                        })
                    }), n && a && (0, l.jsxs)("div", {
                        className: "bg-red-950/30 border border-red-900/50 rounded-xl px-3 py-2",
                        children: [(0, l.jsx)("p", {
                            className: "text-xs text-red-400 font-medium",
                            children: "Alasan gagal:"
                        }), (0, l.jsx)("p", {
                            className: "text-xs text-red-300 mt-0.5 break-words",
                            children: a
                        })]
                    })]
                })
            }

            function b() {
                let [e, t] = (0, r.useState)(""), [a, u] = (0, r.useState)(null), [v, b] = (0, r.useState)(null), [w, F] = (0, r.useState)(null), [S, R] = (0, r.useState)(null), [_, T] = (0, r.useState)(c[0]), [L, P] = (0, r.useState)(""), [U, M] = (0, r.useState)("video"), [I, O] = (0, r.useState)(.5), [E, A] = (0, r.useState)("idle"), [D, G] = (0, r.useState)(0), [K, B] = (0, r.useState)("idle"), [H, V] = (0, r.useState)(""), [W, z] = (0, r.useState)(""), [J, q] = (0, r.useState)(null), [Q, $] = (0, r.useState)(null), [X, Y] = (0, r.useState)(""), Z = (0, r.useRef)(null), ee = (0, r.useRef)(null), et = (0, r.useRef)(null), ea = (0, r.useRef)(null), el = (0, r.useRef)(null), er = (0, r.useRef)(null), en = (0, r.useRef)(null), es = (0, r.useRef)(null), ei = (0, r.useRef)([]), eo = (0, r.useRef)(new Set);
                (0, r.useEffect)(() => {
                    fetch("/proxies.json?_=" + Date.now()).then(e => e.json()).then(e => {
                        let t = (e.proxies || []).map(e => e.trim().replace(/\/$/, "")).filter(Boolean);
                        ei.current = t, Y("".concat(t.length, " proxy tersedia"))
                    }).catch(() => Y("Gagal memuat daftar proxy"))
                }, []), (0, r.useEffect)(() => {
                    let e = () => {
                        fetch("".concat(o, "/count")).then(e => e.json()).then(e => {
                            "number" == typeof e.total && $(e.total)
                        }).catch(() => {})
                    };
                    e();
                    let t = setInterval(e, 6e4);
                    return () => clearInterval(t)
                }, []);
                let ec = (0, r.useCallback)(() => ei.current.filter(e => !eo.current.has(e)), []),
                    ed = (0, r.useCallback)(e => {
                        eo.current.add(e);
                        let t = ei.current.length,
                            a = ei.current.filter(e => !eo.current.has(e)).length;
                        Y("Proxy dirotasi — ".concat(a, "/").concat(t, " tersisa"))
                    }, []),
                    eu = (0, r.useCallback)(async () => {
                        let e = [Z.current, ee.current].filter(Boolean);
                        if (0 !== e.length) {
                            Z.current = null, ee.current = null;
                            try {
                                await fetch("/api/delete-blob", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        urls: e
                                    })
                                })
                            } catch (e) {}
                        }
                    }, []),
                    ex = (0, r.useCallback)(() => {
                        et.current && (clearTimeout(et.current), et.current = null)
                    }, []),
                    ep = (0, r.useCallback)(() => {
                        ea.current && (clearTimeout(ea.current), ea.current = null)
                    }, []),
                    ef = (0, r.useCallback)(() => {
                        el.current && (clearInterval(el.current), el.current = null)
                    }, []),
                    em = (0, r.useCallback)(() => {
                        ef(), er.current = Date.now(), G(0), el.current = setInterval(() => {
                            G(Date.now() - er.current)
                        }, 1e3)
                    }, [ef]),
                    eh = (0, r.useCallback)(async function(e, t, a) {
                        let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Set,
                            r = ec().filter(e => !l.has(e));
                        if (0 === r.length) throw Error("Semua ".concat(ei.current.length, " proxy tidak tersedia. Tambah proxy baru di proxies.json."));
                        let n = m(r);
                        l.add(n);
                        try {
                            let r = await fetch("".concat(n, "/generate"), {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        "x-proxy-api-key": e
                                    },
                                    body: JSON.stringify({
                                        model: t,
                                        ...a
                                    })
                                }),
                                s = await r.json();
                            if (x(r.status, s)) {
                                let e = Error(f(s));
                                throw e.isApiKeyError = !0, e
                            }
                            if (p(r.status, s)) return ed(n), eh(e, t, a, l);
                            return {
                                res: r,
                                data: s
                            }
                        } catch (r) {
                            if (r.isApiKeyError) throw r;
                            return ed(n), eh(e, t, a, l)
                        }
                    }, [ec, ed]),
                    ev = (0, r.useCallback)((e, t, a) => {
                        ex(), ea.current = setTimeout(async () => {
                            ex(), ef(), await eu(), A("error"), B("failed"), V("Task timeout setelah 20 menit. File referensi sudah dihapus.")
                        }, 12e5);
                        let l = () => {
                                et.current = setTimeout(r, 6e4 + (Math.floor(20001 * Math.random()) - 1e4))
                            },
                            r = async () => {
                                try {
                                    var r, n, c, d, u;
                                    let h, v, g = ec();
                                    if (0 === g.length) {
                                        ex(), ep(), ef(), await eu(), A("error"), B("failed"), V("Semua proxy mati. Tambah proxy baru di proxies.json.");
                                        return
                                    }
                                    let b = m(g);
                                    try {
                                        h = await fetch("".concat(b, "/status/").concat(encodeURIComponent(t), "/").concat(encodeURIComponent(e)), {
                                            method: "GET",
                                            headers: {
                                                "x-proxy-api-key": a
                                            }
                                        }), v = await h.json()
                                    } catch (e) {
                                        ed(b), null !== et.current && l();
                                        return
                                    }
                                    if (!h.ok) {
                                        if (x(h.status, v)) {
                                            ex(), ep(), ef(), await eu(), A("error"), B("failed"), V(f(v));
                                            return
                                        }
                                        if (p(h.status, v)) {
                                            ed(b), null !== et.current && l();
                                            return
                                        }
                                        ex(), ep(), ef(), await eu();
                                        let e = (null == v ? void 0 : v.message) || (null == v ? void 0 : v.error) || "Error ".concat(h.status);
                                        A("error"), B("failed"), V(e);
                                        return
                                    }
                                    let j = (r = v) && ((null == r ? void 0 : r.status) || (null == r || null == (n = r.data) ? void 0 : n.status) || (null == r || null == (c = r.result) ? void 0 : c.status) || (null == r || null == (d = r.task) ? void 0 : d.status)) || null,
                                        y = function(e) {
                                            var t, a, l, r, n, o, c, d, u, x;
                                            if (!e) return null;
                                            for (let s of [null == e ? void 0 : e.video_url, null == e ? void 0 : e.output_url, null == e ? void 0 : e.result_url, null == e ? void 0 : e.url, null == e ? void 0 : e.download_url, null == e || null == (t = e.output) ? void 0 : t[0], null == e || null == (a = e.outputs) ? void 0 : a[0], null == e || null == (r = e.data) || null == (l = r.output) ? void 0 : l[0], null == e || null == (o = e.result) || null == (n = o.output) ? void 0 : n[0], null == e || null == (c = e.data) ? void 0 : c.video_url, null == e || null == (d = e.result) ? void 0 : d.video_url, null == e || null == (u = e.data) ? void 0 : u.url, null == e || null == (x = e.result) ? void 0 : x.url])
                                                if ("string" == typeof s && s.startsWith("http")) return s;
                                            return function e(t) {
                                                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                                                if (a > 6) return null;
                                                if ("string" == typeof t) {
                                                    try {
                                                        let e = new URL(t);
                                                        if (s.test(e.pathname) || i.test(e.pathname)) return t
                                                    } catch (e) {}
                                                    return null
                                                }
                                                if (Array.isArray(t)) {
                                                    for (let l of t) {
                                                        let t = e(l, a + 1);
                                                        if (t) return t
                                                    }
                                                    return null
                                                }
                                                if (t && "object" == typeof t) {
                                                    let l = ["video_url", "output_url", "result_url", "url", "download_url"];
                                                    for (let r of l)
                                                        if (t[r]) {
                                                            let l = e(t[r], a + 1);
                                                            if (l) return l
                                                        }
                                                    for (let r of Object.keys(t)) {
                                                        if (l.includes(r)) continue;
                                                        let n = e(t[r], a + 1);
                                                        if (n) return n
                                                    }
                                                }
                                                return null
                                            }(e)
                                        }(v);
                                    if (y) {
                                        ex(), ep(), ef(), await eu(), q(y), A("done"), B("done"), fetch("".concat(o, "/increment"), {
                                            method: "POST"
                                        }).then(e => e.json()).then(e => {
                                            "number" == typeof e.total && $(e.total)
                                        }).catch(() => {});
                                        return
                                    }
                                    let k = (j || "").toLowerCase(),
                                        w = ["success", "completed", "succeeded", "done"].includes(k),
                                        N = ["failed", "error", "cancelled"].includes(k);
                                    if (w) {
                                        ex(), ep(), ef(), await eu(), A("error"), B("failed"), V("Task ".concat(k, " tapi URL video tidak ditemukan. Coba lagi."));
                                        return
                                    }
                                    if (N) {
                                        ex(), ep(), ef(), await eu(),
                                            function e(t) {
                                                if (!t || "object" != typeof t) return t;
                                                let a = ["apikey", "api_key", "x-magnific-api-key", "x-proxy-api-key", "token", "secret"],
                                                    l = Array.isArray(t) ? [] : {};
                                                for (let [r, n] of Object.entries(t)) a.some(e => r.toLowerCase().includes(e)) ? l[r] = "[redacted]" : "object" == typeof n && null !== n ? l[r] = e(n) : l[r] = n;
                                                return l
                                            }(v);
                                        let e = (null == v ? void 0 : v.message) || (null == v ? void 0 : v.error) || (null == v || null == (u = v.data) ? void 0 : u.message) || "Task ".concat(k);
                                        A("error"), B("failed"), V(e);
                                        return
                                    }
                                } catch (e) {
                                    ex(), ep(), ef(), await eu(), A("error"), B("failed"), V(e.message || "Polling error.");
                                    return
                                }
                                null !== et.current && l()
                            };
                        l()
                    }, [ex, ep, ef, eu, ec, ed]),
                    eg = async () => {
                        if (z(""), q(null), B("idle"), V(""), G(0), Z.current = null, ee.current = null, eo.current = new Set, !e.trim()) return void z("API key harus diisi.");
                        if (!a) return void z("Upload gambar referensi dulu.");
                        if (!w) return void z("Upload video referensi dulu.");
                        if (!_) return void z("Pilih model dulu.");
                        if (0 === ei.current.length) return void z("Daftar proxy kosong.");
                        try {
                            var t, l, r, n;
                            A("uploading"), em();
                            let s = new FormData;
                            s.append("file", a), s.append("fileType", "image");
                            let i = await fetch("/api/upload", {
                                    method: "POST",
                                    body: s
                                }),
                                o = await i.json();
                            if (!i.ok) throw Error(o.error || "Upload gambar gagal.");
                            Z.current = o.url;
                            let c = new FormData;
                            c.append("file", w), c.append("fileType", "video");
                            let d = await fetch("/api/upload", {
                                    method: "POST",
                                    body: c
                                }),
                                u = await d.json();
                            if (!d.ok) throw Error(u.error || "Upload video gagal.");
                            ee.current = u.url, A("generating");
                            let {
                                res: x,
                                data: p
                            } = await eh(e, _, {
                                image_url: o.url,
                                video_url: u.url,
                                ...L ? {
                                    prompt: L
                                } : {},
                                ...U ? {
                                    character_orientation: U
                                } : {},
                                cfg_scale: Number(I)
                            });
                            if (!x.ok) throw Error((null == p ? void 0 : p.message) || (null == p ? void 0 : p.error) || "Generate gagal: ".concat(x.status));
                            let f = p && ((null == p ? void 0 : p.task_id) || (null == p ? void 0 : p.id) || (null == p ? void 0 : p.taskId) || (null == p || null == (t = p.data) ? void 0 : t.task_id) || (null == p || null == (l = p.data) ? void 0 : l.id) || (null == p || null == (r = p.result) ? void 0 : r.task_id) || (null == p || null == (n = p.result) ? void 0 : n.id)) || null;
                            if (!f) throw Error("Tidak ada taskId dari response.");
                            A("polling"), B("created"), setTimeout(() => B("processing"), 2e3), ev(f, _, e)
                        } catch (e) {
                            ex(), ep(), ef(), await eu(), A("error"), B("failed"), V(e.message || "Terjadi error tak terduga.")
                        }
                    },
                    eb = "uploading" === E || "generating" === E || "polling" === E,
                    ej = "uploading" === E ? "Mengupload file..." : "generating" === E ? "Mengirim ke Magnific..." : "polling" === E ? "Menunggu hasil... ".concat(h(D)) : "";
                return (0, l.jsx)("main", {
                    className: "min-h-screen bg-[#0a0a0a] text-[#f5f5f0] py-8 px-4",
                    children: (0, l.jsxs)("div", {
                        className: "max-w-2xl mx-auto space-y-4",
                        children: [(0, l.jsxs)("div", {
                            className: "card card-yellow p-6 text-center",
                            children: [(0, l.jsx)("h1", {
                                className: "text-3xl font-black tracking-tight text-[#F5C518] mb-2",
                                children: "SAKEN GEAL-GEOL"
                            }), (0, l.jsxs)("p", {
                                className: "text-sm text-[#888878]",
                                children: ["motion control generator by", " ", (0, l.jsx)("span", {
                                    className: "text-[#F5C518] font-semibold",
                                    children: "SAKURA"
                                })]
                            }), (0, l.jsx)("a", {
                                href: "https://www.facebook.com/S4QR4",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-block mt-1 text-xs text-[#F5C518] hover:text-[#FFD84D] underline underline-offset-2 transition-colors",
                                children: "follow FB: facebook.com/S4QR4"
                            }), null !== Q && (0, l.jsxs)("div", {
                                className: "mt-3 inline-flex items-center gap-2 bg-[#1c1c0a] border border-[#3a3200] rounded-full px-4 py-1.5",
                                children: [(0, l.jsx)("span", {
                                    className: "w-2 h-2 rounded-full bg-[#F5C518] animate-pulse"
                                }), (0, l.jsxs)("span", {
                                    className: "text-xs font-bold text-[#F5C518]",
                                    children: [Q.toLocaleString(), " video berhasil dibuat"]
                                })]
                            })]
                        }), X && (0, l.jsxs)("div", {
                            className: "card px-4 py-2 text-xs ".concat(X.includes("dirotasi") ? "border-yellow-900/40 bg-yellow-950/20 text-yellow-500" : X.includes("Gagal") ? "border-red-900/40 bg-red-950/20 text-red-400" : "border-[#2a2a1a] text-[#888878]"),
                            children: ["⟳ ", X]
                        }), (0, l.jsxs)("div", {
                            className: "card p-4 space-y-2",
                            children: [(0, l.jsx)(j, {
                                text: "API Key",
                                hint: "Magnific / Freepik API key — tidak disimpan"
                            }), (0, l.jsx)("input", {
                                type: "password",
                                value: e,
                                onChange: e => t(e.target.value),
                                placeholder: "sk-mag-...",
                                autoComplete: "off",
                                className: "w-full bg-[#0f0f0f] border border-[#2a2a1a] focus:border-[#F5C518] rounded-xl px-4 py-3 text-sm text-[#f5f5f0] placeholder:text-[#444438] outline-none transition-colors"
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                            children: [(0, l.jsxs)("div", {
                                className: "card p-4 space-y-2",
                                children: [(0, l.jsx)(j, {
                                    text: "Reference Image",
                                    hint: "JPG, PNG, WebP \xb7 max 15 MB"
                                }), (0, l.jsx)(k, {
                                    accept: "image/jpeg,image/jpg,image/png,image/webp",
                                    preview: v,
                                    previewType: "image",
                                    label: "Klik atau drag gambar di sini",
                                    onChange: e => {
                                        var t;
                                        let a = null == (t = e.target.files) ? void 0 : t[0];
                                        a && (u(a), b(URL.createObjectURL(a)))
                                    },
                                    inputRef: en,
                                    fileName: null == a ? void 0 : a.name
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "card p-4 space-y-2",
                                children: [(0, l.jsx)(j, {
                                    text: "Reference Video",
                                    hint: "MP4, MOV, WebM \xb7 max 100 MB"
                                }), (0, l.jsx)(k, {
                                    accept: "video/mp4,video/quicktime,video/webm,video/x-m4v",
                                    preview: S,
                                    previewType: "video",
                                    label: "Klik atau drag video di sini",
                                    onChange: e => {
                                        var t;
                                        let a = null == (t = e.target.files) ? void 0 : t[0];
                                        a && (F(a), R(URL.createObjectURL(a)))
                                    },
                                    inputRef: es,
                                    fileName: null == w ? void 0 : w.name
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "card p-4 space-y-2",
                            children: [(0, l.jsx)(j, {
                                text: "Model"
                            }), (0, l.jsxs)("div", {
                                className: "relative",
                                children: [(0, l.jsx)("select", {
                                    value: _,
                                    onChange: e => T(e.target.value),
                                    className: "w-full bg-[#0f0f0f] border border-[#2a2a1a] focus:border-[#F5C518] rounded-xl px-4 py-3 text-sm text-[#f5f5f0] outline-none appearance-none cursor-pointer transition-colors",
                                    children: c.map(e => (0, l.jsx)("option", {
                                        value: e,
                                        children: n[e].label
                                    }, e))
                                }), (0, l.jsx)(y, {})]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "card p-4 space-y-2",
                            children: [(0, l.jsx)(j, {
                                text: "Prompt",
                                hint: "Opsional"
                            }), (0, l.jsx)("textarea", {
                                value: L,
                                onChange: e => P(e.target.value),
                                placeholder: "contoh: The character walks forward slowly...",
                                rows: 3,
                                className: "w-full bg-[#0f0f0f] border border-[#2a2a1a] focus:border-[#F5C518] rounded-xl px-4 py-3 text-sm text-[#f5f5f0] placeholder:text-[#444438] outline-none resize-none transition-colors"
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                            children: [(0, l.jsxs)("div", {
                                className: "card p-4 space-y-2",
                                children: [(0, l.jsx)(j, {
                                    text: "Character Orientation"
                                }), (0, l.jsxs)("div", {
                                    className: "relative",
                                    children: [(0, l.jsx)("select", {
                                        value: U,
                                        onChange: e => M(e.target.value),
                                        className: "w-full bg-[#0f0f0f] border border-[#2a2a1a] focus:border-[#F5C518] rounded-xl px-4 py-3 text-sm text-[#f5f5f0] outline-none appearance-none cursor-pointer transition-colors",
                                        children: d.map(e => (0, l.jsx)("option", {
                                            value: e.value,
                                            children: e.label
                                        }, e.value))
                                    }), (0, l.jsx)(y, {})]
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "card p-4 space-y-2",
                                children: [(0, l.jsx)(j, {
                                    text: "CFG Scale",
                                    hint: "".concat(I.toFixed(2), " \xb7 0 = bebas, 1 = ketat")
                                }), (0, l.jsxs)("div", {
                                    className: "flex items-center gap-3 pt-1",
                                    children: [(0, l.jsx)("span", {
                                        className: "text-xs text-[#888878]",
                                        children: "0"
                                    }), (0, l.jsx)("input", {
                                        type: "range",
                                        min: 0,
                                        max: 1,
                                        step: .01,
                                        value: I,
                                        onChange: e => O(parseFloat(e.target.value)),
                                        className: "flex-1 h-2 rounded-full cursor-pointer"
                                    }), (0, l.jsx)("span", {
                                        className: "text-xs text-[#888878]",
                                        children: "1"
                                    })]
                                })]
                            })]
                        }), W && (0, l.jsx)("div", {
                            className: "card border-red-900/60 bg-red-950/30 px-4 py-3 text-red-400 text-sm",
                            children: W
                        }), eb && (0, l.jsxs)("div", {
                            className: "card card-yellow p-4 space-y-2",
                            children: [(0, l.jsxs)("div", {
                                className: "flex items-center gap-2 mb-2",
                                children: [(0, l.jsx)(N, {}), (0, l.jsx)("span", {
                                    className: "text-xs text-[#888878]",
                                    children: ej
                                })]
                            }), (0, l.jsx)("div", {
                                className: "progress-bar-track",
                                children: (0, l.jsx)("div", {
                                    className: "progress-bar-indeterminate"
                                })
                            })]
                        }), "done" === E && (0, l.jsxs)("div", {
                            className: "card card-yellow p-4 space-y-2",
                            children: [(0, l.jsxs)("span", {
                                className: "text-xs text-[#F5C518] font-medium",
                                children: ["Video siap! Selesai dalam ", h(D)]
                            }), (0, l.jsx)("div", {
                                className: "progress-bar-track",
                                children: (0, l.jsx)("div", {
                                    className: "progress-bar-fill"
                                })
                            })]
                        }), (0, l.jsx)(g, {
                            step: K,
                            errorMsg: H
                        }), (0, l.jsx)("button", {
                            onClick: eg,
                            disabled: eb,
                            className: "w-full py-4 rounded-xl font-black text-sm tracking-wide transition-all bg-[#F5C518] hover:bg-[#FFD84D] disabled:opacity-40 disabled:cursor-not-allowed text-black shadow-lg shadow-[#F5C518]/10",
                            children: eb ? "Memproses... ".concat(h(D)) : "Generate Video"
                        }), J && (0, l.jsx)(C, {
                            url: J
                        }), (0, l.jsx)("div", {
                            className: "pb-4"
                        })]
                    })
                })
            }

            function j(e) {
                let {
                    text: t,
                    hint: a
                } = e;
                return (0, l.jsxs)("div", {
                    className: "flex items-baseline gap-2",
                    children: [(0, l.jsx)("span", {
                        className: "text-xs font-bold text-[#888878] uppercase tracking-wider",
                        children: t
                    }), a && (0, l.jsx)("span", {
                        className: "text-xs text-[#444438]",
                        children: a
                    })]
                })
            }

            function y() {
                return (0, l.jsx)("div", {
                    className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2",
                    children: (0, l.jsx)("svg", {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            d: "M2 4L6 8L10 4",
                            stroke: "#888878",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                })
            }

            function k(e) {
                let {
                    accept: t,
                    preview: a,
                    previewType: r,
                    label: n,
                    onChange: s,
                    inputRef: i,
                    fileName: o
                } = e;
                return (0, l.jsxs)("div", {
                    className: "relative group cursor-pointer rounded-xl border border-dashed border-[#2a2a1a] hover:border-[#F5C518]/50 transition-colors overflow-hidden bg-[#0f0f0f]",
                    style: {
                        minHeight: 140
                    },
                    onClick: () => {
                        var e;
                        return null == (e = i.current) ? void 0 : e.click()
                    },
                    children: [(0, l.jsx)("input", {
                        ref: i,
                        type: "file",
                        accept: t,
                        onChange: s,
                        className: "hidden"
                    }), a ? "image" === r ? (0, l.jsxs)("div", {
                        className: "relative w-full h-full",
                        style: {
                            minHeight: 140
                        },
                        children: [(0, l.jsx)("img", {
                            src: a,
                            alt: "Preview",
                            className: "w-full h-full object-cover",
                            style: {
                                maxHeight: 200
                            }
                        }), (0, l.jsx)("div", {
                            className: "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",
                            children: (0, l.jsx)("span", {
                                className: "text-xs text-[#F5C518] font-bold",
                                children: "Ganti"
                            })
                        })]
                    }) : (0, l.jsxs)("div", {
                        className: "relative w-full",
                        style: {
                            minHeight: 140
                        },
                        children: [(0, l.jsx)("video", {
                            src: a,
                            className: "w-full",
                            style: {
                                maxHeight: 200
                            },
                            muted: !0,
                            playsInline: !0
                        }), (0, l.jsx)("div", {
                            className: "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",
                            children: (0, l.jsx)("span", {
                                className: "text-xs text-[#F5C518] font-bold",
                                children: "Ganti"
                            })
                        })]
                    }) : (0, l.jsxs)("div", {
                        className: "flex flex-col items-center justify-center h-full py-8 gap-2",
                        children: [(0, l.jsx)(w, {}), (0, l.jsx)("p", {
                            className: "text-xs text-[#444438] text-center px-2",
                            children: n
                        })]
                    }), o && (0, l.jsx)("div", {
                        className: "absolute bottom-0 left-0 right-0 bg-black/70 px-2 py-1",
                        children: (0, l.jsx)("p", {
                            className: "text-xs text-[#888878] truncate",
                            children: o
                        })
                    })]
                })
            }

            function w() {
                return (0, l.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "28",
                    height: "28",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "#3a3200",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, l.jsx)("path", {
                        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                    }), (0, l.jsx)("polyline", {
                        points: "17 8 12 3 7 8"
                    }), (0, l.jsx)("line", {
                        x1: "12",
                        y1: "3",
                        x2: "12",
                        y2: "15"
                    })]
                })
            }

            function N() {
                return (0, l.jsxs)("span", {
                    className: "flex gap-1 items-center",
                    children: [
                        [0, 1, 2].map(e => (0, l.jsx)("span", {
                            className: "w-1.5 h-1.5 rounded-full bg-[#F5C518]",
                            style: {
                                animation: "pulse 1.2s ease-in-out ".concat(.2 * e, "s infinite")
                            }
                        }, e)), (0, l.jsx)("style", {
                            children: "@keyframes pulse{0%,100%{opacity:.2;transform:scale(.8)}50%{opacity:1;transform:scale(1)}}"
                        })
                    ]
                })
            }

            function C(e) {
                let {
                    url: t
                } = e, [a, n] = (0, r.useState)("preview"), [s, i] = (0, r.useState)(!1), o = async () => {
                    i(!0);
                    try {
                        let e = await fetch(t),
                            a = await e.blob(),
                            l = t.split("?")[0].split(".").pop() || "mp4",
                            r = document.createElement("a");
                        r.href = URL.createObjectURL(a), r.download = "saken-geal-geol-".concat(Date.now(), ".").concat(l), r.click(), URL.revokeObjectURL(r.href)
                    } catch (e) {
                        window.open(t, "_blank")
                    } finally {
                        i(!1)
                    }
                };
                return (0, l.jsxs)("div", {
                    className: "card card-yellow overflow-hidden",
                    children: [(0, l.jsx)("div", {
                        className: "flex border-b border-[#2a2a1a]",
                        children: ["preview", "download"].map(e => (0, l.jsx)("button", {
                            onClick: () => n(e),
                            className: "flex-1 py-3 text-xs font-bold uppercase tracking-wider transition-colors ".concat(a === e ? "text-[#F5C518] border-b-2 border-[#F5C518] bg-[#1c1c0a]" : "text-[#888878] hover:text-[#F5C518]"),
                            children: "preview" === e ? "Preview" : "Download"
                        }, e))
                    }), (0, l.jsxs)("div", {
                        className: "p-4",
                        children: ["preview" === a && (0, l.jsx)("video", {
                            src: t,
                            controls: !0,
                            playsInline: !0,
                            className: "w-full rounded-xl bg-black"
                        }), "download" === a && (0, l.jsxs)("div", {
                            className: "flex flex-col items-center gap-4 py-6",
                            children: [(0, l.jsx)("div", {
                                className: "w-16 h-16 rounded-2xl bg-[#1c1c0a] border border-[#3a3200] flex items-center justify-center",
                                children: (0, l.jsxs)("svg", {
                                    width: "28",
                                    height: "28",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "#F5C518",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [(0, l.jsx)("path", {
                                        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                    }), (0, l.jsx)("polyline", {
                                        points: "7 10 12 15 17 10"
                                    }), (0, l.jsx)("line", {
                                        x1: "12",
                                        y1: "15",
                                        x2: "12",
                                        y2: "3"
                                    })]
                                })
                            }), (0, l.jsxs)("div", {
                                className: "text-center",
                                children: [(0, l.jsx)("p", {
                                    className: "text-sm font-bold text-[#f5f5f0] mb-1",
                                    children: "Download Video Hasil"
                                }), (0, l.jsx)("p", {
                                    className: "text-xs text-[#888878]",
                                    children: "Video akan tersimpan ke perangkat kamu"
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "flex flex-col gap-2 w-full max-w-xs",
                                children: [(0, l.jsx)("button", {
                                    onClick: o,
                                    disabled: s,
                                    className: "w-full py-3 rounded-xl font-black text-sm bg-[#F5C518] hover:bg-[#FFD84D] disabled:opacity-50 text-black transition-colors flex items-center justify-center gap-2",
                                    children: s ? (0, l.jsxs)(l.Fragment, {
                                        children: [(0, l.jsx)(N, {}), (0, l.jsx)("span", {
                                            children: "Mengunduh..."
                                        })]
                                    }) : "Download Video"
                                }), (0, l.jsx)("a", {
                                    href: t,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "w-full py-3 rounded-xl font-bold text-xs text-center text-[#888878] hover:text-[#F5C518] border border-[#2a2a1a] hover:border-[#F5C518] transition-colors",
                                    children: "Buka di Tab Baru ↗"
                                })]
                            })]
                        })]
                    })]
                })
            }
        }
    },
    e => {
        e.O(0, [441, 255, 358], () => e(e.s = 199)), _N_E = e.O()
    }
]);