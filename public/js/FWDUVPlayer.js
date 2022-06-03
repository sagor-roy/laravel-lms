var _fwd_fwdScope, asual;
! function (t) {
    function l() {}
    l.dumy = document.createElement("div"), l.trim = function (e) {
        return e.replace(/\s/gi, "")
    }, l.trimAndFormatUrl = function (e) {
        return e = (e = e.toLocaleLowerCase()).replace(/ /g, "-")
    }, l.storArrayBasedOnObjectValue = function (e, t) {
        e.sort(function (o) {
            var s = 1;
            "-" === o[0] && (s = -1, o = o.substr(1));
            return function (e, t) {
                return (e[o] < t[o] ? -1 : e[o] > t[o] ? 1 : 0) * s
            }
        }(t))
    }, l.getCookie = function (e) {
        for (var t = e + "=", o = document.cookie.split(";"), s = 0; s < o.length; s++) {
            for (var n = o[s];
                " " == n.charAt(0);) n = n.substring(1, n.length);
            if (0 == n.indexOf(t)) return n.substring(t.length, n.length)
        }
        return null
    }, l.hexToRgb = function (e) {
        e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, o, s) {
            return t + t + o + o + s + s
        });
        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return "rgb(" + (t = t ? {
            r: parseInt(t[1], 16),
            g: parseInt(t[2], 16),
            b: parseInt(t[3], 16)
        } : null).r + "," + t.g + "," + t.b + ")"
    }, l.splitAndTrim = function (e, t) {
        for (var o = e.split(","), s = o.length, n = 0; n < s; n++) t && (o[n] = l.trim(o[n]));
        return o
    }, l.checkTime = function (e) {
        return !!/^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$/.test(e)
    }, l.formatTimeWithMiliseconds = function (e) {
        var t = 60 * parseInt(e.split(":")[0]) * 60 + 60 * parseInt(e.split(":")[1]) + parseInt(e.split(":")[2]) + parseInt(e.split(",")[1] || e.split(".")[1]) / 1e3;
        return t = Math.round(100 * t) / 100
    }, l.formatTime = function (e, t) {
        e = Math.round(e);
        var o = Math.floor(e / 3600),
            s = e % 3600,
            n = Math.floor(s / 60),
            i = s % 60,
            a = Math.ceil(i),
            n = 10 <= n ? n : "0" + n;
        return 60 == (a = 10 <= a ? a : "0" + a) && (a = 59), isNaN(a) ? "00:00" : o || t ? "0" + o + ":" + n + ":" + a : n + ":" + a
    }, l.MD5 = function (e) {
        function l(e, t) {
            return e << t | e >>> 32 - t
        }

        function d(e, t) {
            var o = 2147483648 & e,
                s = 2147483648 & t,
                n = 1073741824 & e,
                i = 1073741824 & t,
                a = (1073741823 & e) + (1073741823 & t);
            return n & i ? 2147483648 ^ a ^ o ^ s : n | i ? 1073741824 & a ? 3221225472 ^ a ^ o ^ s : 1073741824 ^ a ^ o ^ s : a ^ o ^ s
        }

        function t(e, t, o, s, n, i, a) {
            var r;
            return e = d(e, d(d((r = t) & o | ~r & s, n), a)), d(l(e, i), t)
        }

        function o(e, t, o, s, n, i, a) {
            var r;
            return e = d(e, d(d(t & (r = s) | o & ~r, n), a)), d(l(e, i), t)
        }

        function s(e, t, o, s, n, i, a) {
            return e = d(e, d(d(t ^ o ^ s, n), a)), d(l(e, i), t)
        }

        function n(e, t, o, s, n, i, a) {
            return e = d(e, d(d(o ^ (t | ~s), n), a)), d(l(e, i), t)
        }

        function i(e) {
            for (var t = "", o = "", s = 0; s <= 3; s++) t += (o = "0" + (e >>> 8 * s & 255).toString(16)).substr(o.length - 2, 2);
            return t
        }
        for (var a, r, _, u, c = Array(), c = function (e) {
                for (var t, o = e.length, s = o + 8, n = 16 * (1 + (s - s % 64) / 64), i = Array(n - 1), a = 0, r = 0; r < o;) a = r % 4 * 8, i[t = (r - r % 4) / 4] = i[t] | e.charCodeAt(r) << a, r++;
                return a = r % 4 * 8, i[t = (r - r % 4) / 4] = i[t] | 128 << a, i[n - 2] = o << 3, i[n - 1] = o >>> 29, i
            }(e = function (e) {
                e = e.replace(/\r\n/g, "\n");
                for (var t = "", o = 0; o < e.length; o++) {
                    var s = e.charCodeAt(o);
                    s < 128 ? t += String.fromCharCode(s) : (127 < s && s < 2048 ? t += String.fromCharCode(s >> 6 | 192) : (t += String.fromCharCode(s >> 12 | 224), t += String.fromCharCode(s >> 6 & 63 | 128)), t += String.fromCharCode(63 & s | 128))
                }
                return t
            }(e)), p = 1732584193, h = 4023233417, m = 2562383102, b = 271733878, g = 0; g < c.length; g += 16) p = t(a = p, r = h, _ = m, u = b, c[g + 0], 7, 3614090360), b = t(b, p, h, m, c[g + 1], 12, 3905402710), m = t(m, b, p, h, c[g + 2], 17, 606105819), h = t(h, m, b, p, c[g + 3], 22, 3250441966), p = t(p, h, m, b, c[g + 4], 7, 4118548399), b = t(b, p, h, m, c[g + 5], 12, 1200080426), m = t(m, b, p, h, c[g + 6], 17, 2821735955), h = t(h, m, b, p, c[g + 7], 22, 4249261313), p = t(p, h, m, b, c[g + 8], 7, 1770035416), b = t(b, p, h, m, c[g + 9], 12, 2336552879), m = t(m, b, p, h, c[g + 10], 17, 4294925233), h = t(h, m, b, p, c[g + 11], 22, 2304563134), p = t(p, h, m, b, c[g + 12], 7, 1804603682), b = t(b, p, h, m, c[g + 13], 12, 4254626195), m = t(m, b, p, h, c[g + 14], 17, 2792965006), p = o(p, h = t(h, m, b, p, c[g + 15], 22, 1236535329), m, b, c[g + 1], 5, 4129170786), b = o(b, p, h, m, c[g + 6], 9, 3225465664), m = o(m, b, p, h, c[g + 11], 14, 643717713), h = o(h, m, b, p, c[g + 0], 20, 3921069994), p = o(p, h, m, b, c[g + 5], 5, 3593408605), b = o(b, p, h, m, c[g + 10], 9, 38016083), m = o(m, b, p, h, c[g + 15], 14, 3634488961), h = o(h, m, b, p, c[g + 4], 20, 3889429448), p = o(p, h, m, b, c[g + 9], 5, 568446438), b = o(b, p, h, m, c[g + 14], 9, 3275163606), m = o(m, b, p, h, c[g + 3], 14, 4107603335), h = o(h, m, b, p, c[g + 8], 20, 1163531501), p = o(p, h, m, b, c[g + 13], 5, 2850285829), b = o(b, p, h, m, c[g + 2], 9, 4243563512), m = o(m, b, p, h, c[g + 7], 14, 1735328473), p = s(p, h = o(h, m, b, p, c[g + 12], 20, 2368359562), m, b, c[g + 5], 4, 4294588738), b = s(b, p, h, m, c[g + 8], 11, 2272392833), m = s(m, b, p, h, c[g + 11], 16, 1839030562), h = s(h, m, b, p, c[g + 14], 23, 4259657740), p = s(p, h, m, b, c[g + 1], 4, 2763975236), b = s(b, p, h, m, c[g + 4], 11, 1272893353), m = s(m, b, p, h, c[g + 7], 16, 4139469664), h = s(h, m, b, p, c[g + 10], 23, 3200236656), p = s(p, h, m, b, c[g + 13], 4, 681279174), b = s(b, p, h, m, c[g + 0], 11, 3936430074), m = s(m, b, p, h, c[g + 3], 16, 3572445317), h = s(h, m, b, p, c[g + 6], 23, 76029189), p = s(p, h, m, b, c[g + 9], 4, 3654602809), b = s(b, p, h, m, c[g + 12], 11, 3873151461), m = s(m, b, p, h, c[g + 15], 16, 530742520), p = n(p, h = s(h, m, b, p, c[g + 2], 23, 3299628645), m, b, c[g + 0], 6, 4096336452), b = n(b, p, h, m, c[g + 7], 10, 1126891415), m = n(m, b, p, h, c[g + 14], 15, 2878612391), h = n(h, m, b, p, c[g + 5], 21, 4237533241), p = n(p, h, m, b, c[g + 12], 6, 1700485571), b = n(b, p, h, m, c[g + 3], 10, 2399980690), m = n(m, b, p, h, c[g + 10], 15, 4293915773), h = n(h, m, b, p, c[g + 1], 21, 2240044497), p = n(p, h, m, b, c[g + 8], 6, 1873313359), b = n(b, p, h, m, c[g + 15], 10, 4264355552), m = n(m, b, p, h, c[g + 6], 15, 2734768916), h = n(h, m, b, p, c[g + 13], 21, 1309151649), p = n(p, h, m, b, c[g + 4], 6, 4149444226), b = n(b, p, h, m, c[g + 11], 10, 3174756917), m = n(m, b, p, h, c[g + 2], 15, 718787259), h = n(h, m, b, p, c[g + 9], 21, 3951481745), p = d(p, a), h = d(h, r), m = d(m, _), b = d(b, u);
        return (i(p) + i(h) + i(m) + i(b)).toLowerCase()
    }, l.getSecondsFromString = function (e) {
        var t = 0,
            o = 0,
            s = 0;
        if (e) return "0" == (t = (e = e.split(":"))[0])[0] && "0" != t[1] && (t = parseInt(t[1])), "00" == t && (t = 0), "0" == (o = e[1])[0] && "0" != o[1] && (o = parseInt(o[1])), "00" == o && (o = 0), secs = parseInt(e[2].replace(/,.*/gi, "")), "0" == secs[0] && "0" != secs[1] && (secs = parseInt(secs[1])), "00" == secs && (secs = 0), 0 != t && (s += 60 * t * 60), 0 != o && (s += 60 * o), s += secs
    }, l.getCanvasWithModifiedColor = function (e, t, o, s, n) {
        if (e) {
            var i, a, r = document.createElement("canvas"),
                l = r.getContext("2d"),
                d = null,
                _ = parseInt(t.replace(/^#/, ""), 16),
                u = _ >>> 16 & 255,
                c = _ >>> 8 & 255,
                p = 255 & _;
            r.style.position = "absolute", r.style.left = "0px", r.style.top = "0px", r.style.margin = "0px", r.style.padding = "0px", r.style.maxWidth = "none", r.style.maxHeight = "none", r.style.border = "none", r.style.lineHeight = "1", r.style.backgroundColor = "transparent", r.style.backfaceVisibility = "hidden", r.style.webkitBackfaceVisibility = "hidden", r.style.MozBackfaceVisibility = "hidden", r.style.MozImageRendering = "optimizeSpeed", r.style.WebkitImageRendering = "optimizeSpeed", null == s && (s = e.width, n = e.height), r.width = s, r.height = n, l.drawImage(e, 0, 0, e.naturalWidth, e.naturalHeight, 0, 0, s, n), a = l.getImageData(0, 0, s, n), d = l.getImageData(0, 0, s, n);
            for (var h = 0, m = a.data.length; h < m; h += 4) 0 < d.data[h + 3] && (d.data[h] = a.data[h] / 255 * u, d.data[h + 1] = a.data[h + 1] / 255 * c, d.data[h + 2] = a.data[h + 2] / 255 * p);
            return l.globalAlpha = .5, l.putImageData(d, 0, 0), l.drawImage(r, 0, 0), o && ((i = new Image).src = r.toDataURL()), {
                canvas: r,
                image: i
            }
        }
    }, l.xmlToJson = function (e) {
        var t = {};
        if (1 == e.nodeType) {
            if (0 < e.attributes.length) {
                t["@attributes"] = {};
                for (var o = 0; o < e.attributes.length; o++) {
                    var s = e.attributes.item(o);
                    t["@attributes"][s.nodeName] = s.nodeValue
                }
            }
        } else 3 == e.nodeType ? t = e.nodeValue.trim() : 4 == e.nodeType && (t = e.nodeValue);
        if (e.hasChildNodes())
            for (var n = 0; n < e.childNodes.length; n++) {
                var i, a = e.childNodes.item(n),
                    r = a.nodeName;
                void 0 === t[r] ? t[r] = l.xmlToJson(a) : (void 0 === t[r].length && (i = t[r], t[r] = [], t[r].push(i)), "object" == typeof t[r] && t[r].push(l.xmlToJson(a)))
            }
        return t
    }, l.isIMA = function (e) {
        if (e.match(/doubleclick.net/gi)) return !0
    }, l.isURLEncoded = function (e) {
        try {
            if (decodeURIComponent(e) != e && -1 != e.indexOf("%")) return !0
        } catch (e) {}
        return !1
    }, l.getValidSource = function (e) {
        if (e) {
            var t = "null" == location.origin ? "" : location.origin,
                o = location.pathname; - 1 != o.indexOf(".") && (o = o.substr(0, o.lastIndexOf("/") + 1)), -1 == e.indexOf("http:") && -1 == e.indexOf("https:") && !l.isLocal && (e = t + o + e);
            var s = e.substr(0, e.lastIndexOf("/") + 1);
            l.isURLEncoded(s) || (s = encodeURI(s));
            var n = e.substr(e.lastIndexOf("/") + 1);
            return e = s + (n = !e.match(/\.mp3|\.mp4|\.m3u8|\.txt|\.srt|\.vtt|\.jpg|\.jpeg|\.png/gi) || e.match(/\.s3|\drive.|dropbox|\?/gi) || l.isURLEncoded(n) ? e.substr(e.lastIndexOf("/") + 1) : encodeURIComponent(e.substr(e.lastIndexOf("/") + 1)))
        }
    }, l.changeCanvasHEXColor = function (e, t, o, s, n, i) {
        if (e) {
            var a, r = (t = t).getContext("2d"),
                l = null,
                d = parseInt(o.replace(/^#/, ""), 16),
                _ = d >>> 16 & 255,
                u = d >>> 8 & 255,
                c = 255 & d;
            n || (n = e.width, i = e.height), t.width = n, t.height = i, r.drawImage(e, 0, 0, e.naturalWidth, e.naturalHeight, 0, 0, n, i), a = r.getImageData(0, 0, n, i), l = r.getImageData(0, 0, n, i);
            for (var p = 0, h = a.data.length; p < h; p += 4) 0 < l.data[p + 3] && (l.data[p] = a.data[p] / 255 * _, l.data[p + 1] = a.data[p + 1] / 255 * u, l.data[p + 2] = a.data[p + 2] / 255 * c);
            if (r.globalAlpha = .5, r.putImageData(l, 0, 0), r.drawImage(t, 0, 0), s) {
                var m = new Image;
                return m.src = t.toDataURL(), m
            }
        }
    }, l.indexOfArray = function (e, t) {
        for (var o = e.length, s = 0; s < o; s++)
            if (e[s] === t) return s;
        return -1
    }, l.randomizeArray = function (e) {
        for (var t = [], o = e.concat(), s = o.length, n = 0; n < s; n++) {
            var i = Math.floor(Math.random() * o.length);
            t.push(o[i]), o.splice(i, 1)
        }
        return t
    }, l.prt = function (e, t) {
        for (void 0 === t && (t = 1); t-- && e;) e = e.parentNode;
        return e && 1 === e.nodeType ? e : null
    }, l.sibling = function (e, t) {
        for (; e && 0 !== t;)
            if (0 < t) {
                if (e.nextElementSibling) e = e.nextElementSibling;
                else
                    for (e = e.nextSibling; e && 1 !== e.nodeType; e = e.nextSibling);
                t--
            } else {
                if (e.previousElementSibling) e = e.previousElementSibling;
                else
                    for (e = e.previousSibling; e && 1 !== e.nodeType; e = e.previousSibling);
                t++
            } return e
    }, l.getChildAt = function (e, t) {
        var o = l.getChildren(e);
        return t < 0 && (t += o.length), t < 0 ? null : o[t]
    }, l.getChildById = function (e) {
        return document.getElementById(e) || void 0
    }, l.getChildren = function (e, t) {
        for (var o = [], s = e.firstChild; null != s; s = s.nextSibling)(t || 1 === s.nodeType) && o.push(s);
        return o
    }, l.getChildrenFromAttribute = function (e, t, o) {
        for (var s = [], n = e.firstChild; null != n; n = n.nextSibling)(o && l.hasAttribute(n, t) || 1 === n.nodeType && l.hasAttribute(n, t)) && s.push(n);
        return 0 == s.length ? void 0 : s
    }, l.getChildFromNodeListFromAttribute = function (e, t, o) {
        for (var s = e.firstChild; null != s; s = s.nextSibling) {
            if (o && l.hasAttribute(s, t)) return s;
            if (1 === s.nodeType && l.hasAttribute(s, t)) return s
        }
    }, l.getAttributeValue = function (e, t) {
        if (l.hasAttribute(e, t)) return e.getAttribute(t)
    }, l.hasAttribute = function (e, t) {
        return e.hasAttribute ? e.hasAttribute(t) : !!e.attributes[t]
    }, l.insertNodeAt = function (e, t, o) {
        var s = l.children(e);
        if (o < 0 || o > s.length) throw new Error("invalid index!");
        e.insertBefore(t, s[o])
    }, l.hasCanvas = function () {
        return Boolean(document.createElement("canvas"))
    }, l.hitTest = function (e, t, o) {
        if (!e) throw Error("Hit test target is null!");
        var s = e.getBoundingClientRect();
        return t >= parseInt(s.left) && t <= parseInt(s.left + (s.right - s.left)) && o >= parseInt(s.top) && o <= parseInt(s.top + (s.bottom - s.top))
    }, l.hitBuggyTest = function (e, t, o) {
        if (!e) throw Error("Hit test target is null!");
        e.getBoundingClientRect();
        return !1
    }, l.hasWEBGL = function () {
        try {
            var e = document.createElement("canvas");
            return !!t.WebGLRenderingContext && (e.getContext("webgl") || e.getContext("experimental-webgl"))
        } catch (e) {
            return !1
        }
    }(), l.isLocal = "file:" == document.location.protocol, l.getScrollOffsets = function () {
        return null != t.pageXOffset ? {
            x: t.pageXOffset,
            y: t.pageYOffset
        } : "CSS1Compat" == document.compatMode ? {
            x: document.documentElement.scrollLeft,
            y: document.documentElement.scrollTop
        } : void 0
    }, l.getViewportSize = function () {
        return !(l.hasPointerEvent && 1 < navigator.msMaxTouchPoints) && l.isMobile ? {
            w: t.innerWidth,
            h: t.innerHeight
        } : {
            w: document.documentElement.clientWidth || t.innerWidth,
            h: document.documentElement.clientHeight || t.innerHeight
        }
    }, l.getViewportMouseCoordinates = function (e) {
        var t = l.getScrollOffsets();
        return e.touches ? {
            screenX: null == e.touches[0] ? e.touches.pageX - t.x : e.touches[0].pageX - t.x,
            screenY: null == e.touches[0] ? e.touches.pageY - t.y : e.touches[0].pageY - t.y
        } : {
            screenX: null == e.clientX ? e.pageX - t.x : e.clientX,
            screenY: null == e.clientY ? e.pageY - t.y : e.clientY
        }
    }, l.hasPointerEvent = Boolean(t.navigator.msPointerEnabled) || Boolean(t.navigator.pointerEnabled), l.isMobile = function () {
        var e = ["android", "webos", "iphone", "ipad", "blackberry", "kfsowi"];
        for (i in e)
            if (-1 != navigator.userAgent.toLowerCase().indexOf(String(e[i]).toLowerCase())) return !0;
        return "macintel" === navigator.platform.toLowerCase() && 1 < navigator.maxTouchPoints && !t.MSStream
    }(), l.isIE = Boolean(-1 != navigator.userAgent.toLowerCase().indexOf("msie")) || Boolean(-1 != navigator.userAgent.toLowerCase().indexOf("edge")) || Boolean(document.documentElement.msRequestFullscreen), l.isAndroid = -1 != navigator.userAgent.toLowerCase().indexOf("android".toLowerCase()), l.isChrome = function () {
        if (!l.isIE) {
            var e = navigator.userAgent.toLowerCase();
            if (!e.match(/browser/gi)) return e.match(/chrome/gi)
        }
    }(), l.isSafari = -1 != navigator.userAgent.toLowerCase().indexOf("safari") && -1 == navigator.userAgent.toLowerCase().indexOf("chrome"), l.isOpera = -1 != navigator.userAgent.toLowerCase().indexOf("opr"), l.isFirefox = -1 != navigator.userAgent.toLowerCase().indexOf("firefox"), l.isIEWebKit = Boolean(document.documentElement.msRequestFullscreen), l.isIEAndLessThen9 = Boolean(-1 != navigator.userAgent.toLowerCase().indexOf("msie 7")) || Boolean(-1 != navigator.userAgent.toLowerCase().indexOf("msie 8")), l.isIEAnd9OrLess = Boolean(-1 != navigator.userAgent.toLowerCase().indexOf("msie 7")) || Boolean(-1 != navigator.userAgent.toLowerCase().indexOf("msie 8")) || Boolean(-1 != navigator.userAgent.toLowerCase().indexOf("msie 9")), l.isIE7 = Boolean(-1 != navigator.userAgent.toLowerCase().indexOf("msie 7")), l.isMac = Boolean(-1 != navigator.appVersion.toLowerCase().indexOf("mac")), l.isWin = Boolean(-1 != navigator.appVersion.toLowerCase().indexOf("win")), l.isIOS = "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints || navigator.userAgent.match(/(iPad|iPhone|iPod)/g), l.isIphone = navigator.userAgent.match(/(iPhone|iPod)/g), l.hasFullScreen = l.dumy.requestFullScreen || l.dumy.mozRequestFullScreen || l.dumy.webkitRequestFullScreen || l.dumy.msieRequestFullScreen, l.volumeCanBeSet = function () {
        var e = document.createElement("audio");
        if (e) return (e.volume = 0) == e.volume
    }(), l.getVideoFormat = function () {
        var e, t = document.createElement("video");
        if (t.canPlayType) return "probably" == t.canPlayType("video/mp4") || "maybe" == t.canPlayType("video/mp4") ? e = ".mp4" : "probably" == t.canPlayType("video/ogg") || "maybe" == t.canPlayType("video/ogg") ? e = ".ogg" : "probably" != t.canPlayType("video/webm") && "maybe" != t.canPlayType("video/webm") || (e = ".webm"), t = null, e
    }(), l.onReady = function (e) {
        document.addEventListener ? document.addEventListener("DOMContentLoaded", function () {
            l.checkIfHasTransofrms(), l.hasFullScreen = l.checkIfHasFullscreen(), setTimeout(e, 100)
        }) : document.onreadystatechange = function () {
            l.checkIfHasTransofrms(), l.hasFullScreen = l.checkIfHasFullscreen(), "complete" == document.readyState && setTimeout(e, 100)
        }
    }, l.checkIfHasTransofrms = function () {
        document.documentElement.appendChild(l.dumy), l.hasTransform3d = function () {
            for (var e, t, o = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"]; e = o.shift();)
                if (void 0 !== l.dumy.style[e] && (l.dumy.style.position = "absolute", t = l.dumy.getBoundingClientRect().left, l.dumy.style[e] = "translate3d(500px, 0px, 0px)", 100 < (t = Math.abs(l.dumy.getBoundingClientRect().left - t)) && t < 900)) {
                    try {
                        document.documentElement.removeChild(l.dumy)
                    } catch (e) {}
                    return !0
                } try {
                document.documentElement.removeChild(l.dumy)
            } catch (e) {}
            return !1
        }(), l.hasTransform2d = function () {
            for (var e, t = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"]; e = t.shift();)
                if (void 0 !== l.dumy.style[e]) return !0;
            try {
                document.documentElement.removeChild(l.dumy)
            } catch (e) {}
            return !1
        }(), l.isReadyMethodCalled_bl = !0
    }, l.checkIfHasFullscreen = function () {
        return Boolean(document.documentElement.requestFullScreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullScreen || document.documentElement.msRequestFullscreen)
    }, l.disableElementSelection = function (e) {
        try {
            e.style.userSelect = "none"
        } catch (e) {}
        try {
            e.style.MozUserSelect = "none"
        } catch (e) {}
        try {
            e.style.webkitUserSelect = "none"
        } catch (e) {}
        try {
            e.style.khtmlUserSelect = "none"
        } catch (e) {}
        try {
            e.style.oUserSelect = "none"
        } catch (e) {}
        try {
            e.style.msUserSelect = "none"
        } catch (e) {}
        try {
            e.msUserSelect = "none"
        } catch (e) {}
        e.onselectstart = function () {
            return !1
        }
    }, l.getUrlArgs = function (e) {
        for (var t = {}, o = (e.substr(e.indexOf("?") + 1) || location.search.substring(1)).replace(/(\?*)(\/*)/g, "").split("&"), s = 0; s < o.length; s++) {
            var n = o[s].indexOf("="),
                i = o[s].substring(0, n),
                a = o[s].substring(n + 1),
                a = decodeURIComponent(a);
            t[i] = a
        }
        return t
    }, l.getHashUrlArgs = function (e) {
        for (var t = {}, o = (e.substr(e.indexOf("#") + 1) || location.search.substring(1)).replace(/(\?*)(\/*)/g, "").split("&"), s = 0; s < o.length; s++) {
            var n = o[s].indexOf("="),
                i = o[s].substring(0, n),
                a = o[s].substring(n + 1),
                a = decodeURIComponent(a);
            t[i] = a
        }
        return t
    }, l.validateEmail = function (e) {
        return !!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)
    }, l.isReadyMethodCalled_bl = !1, t.FWDUVPUtils = l
}(window), window.FWDAnimation || (((_fwd_fwdScope = "undefined" != typeof fwd_module && fwd_module.exports && "undefined" != typeof fwd_global ? fwd_global : this || window)._fwd_fwdQueue || (_fwd_fwdScope._fwd_fwdQueue = [])).push(function () {
        "use strict";

        function f(e, t, o, s) {
            o === s && (o = s - (s - t) / 1e6), e === t && (t = e + (o - e) / 1e6), this.a = e, this.b = t, this.c = o, this.d = s, this.da = s - e, this.ca = o - e, this.ba = t - e
        }

        function S(e, t, o, s) {
            var n = {
                    a: e
                },
                i = {},
                a = {},
                r = {
                    c: s
                },
                l = (e + t) / 2,
                d = (t + o) / 2,
                _ = (o + s) / 2,
                u = (l + d) / 2,
                c = (d + _) / 2,
                p = (c - u) / 8;
            return n.b = l + (e - l) / 4, i.b = u + p, n.c = i.a = (n.b + i.b) / 2, i.c = a.a = (u + c) / 2, a.b = c - p, r.b = _ + (s - _) / 4, a.c = r.a = (a.b + r.b) / 2, [n, i, a, r]
        }

        function p(e, t, o, s, n, i) {
            var a, r, l, d, _, u, c, p, h = {},
                m = [],
                b = i || e[0];
            for (r in n = "string" == typeof n ? "," + n + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == t && (t = 1), e[0]) m.push(r);
            if (1 < e.length) {
                for (p = e[e.length - 1], c = !0, a = m.length; - 1 < --a;)
                    if (r = m[a], .05 < Math.abs(b[r] - p[r])) {
                        c = !1;
                        break
                    } c && (e = e.concat(), i && e.unshift(i), e.push(e[1]), i = e[e.length - 3])
            }
            for (P.length = T.length = B.length = 0, a = m.length; - 1 < --a;) r = m[a], g[r] = -1 !== n.indexOf("," + r + ","), h[r] = function (e, t, o, s) {
                var n, i, a, r, l, d, _ = [];
                if (s)
                    for (i = (e = [s].concat(e)).length; - 1 < --i;) "string" == typeof (d = e[i][t]) && "=" === d.charAt(1) && (e[i][t] = s[t] + Number(d.charAt(0) + d.substr(2)));
                if ((n = e.length - 2) < 0) return _[0] = new f(e[0][t], 0, 0, e[n < -1 ? 0 : 1][t]), _;
                for (i = 0; i < n; i++) a = e[i][t], r = e[i + 1][t], _[i] = new f(a, 0, 0, r), o && (l = e[i + 2][t], P[i] = (P[i] || 0) + (r - a) * (r - a), T[i] = (T[i] || 0) + (l - r) * (l - r));
                return _[i] = new f(e[i][t], 0, 0, e[i + 1][t]), _
            }(e, r, g[r], i);
            for (a = P.length; - 1 < --a;) P[a] = Math.sqrt(P[a]), T[a] = Math.sqrt(T[a]);
            if (!s) {
                for (a = m.length; - 1 < --a;)
                    if (g[r])
                        for (u = (l = h[m[a]]).length - 1, d = 0; d < u; d++) _ = l[d + 1].da / T[d] + l[d].da / P[d] || 0, B[d] = (B[d] || 0) + _ * _;
                for (a = B.length; - 1 < --a;) B[a] = Math.sqrt(B[a])
            }
            for (a = m.length, d = o ? 4 : 1; - 1 < --a;)(function (e, t, o, s, n) {
                for (var i, a, r, l, d, _, u, c, p, h, m, b, g = e.length - 1, f = 0, y = e[0].a, v = 0; v < g; v++) i = (l = e[f]).a, a = l.d, r = e[f + 1].d, u = n ? (h = P[v], b = ((m = T[v]) + h) * t * .25 / (!s && B[v] || .5), a - ((d = a - (a - i) * (s ? .5 * t : 0 !== h ? b / h : 0)) + (((_ = a + (r - a) * (s ? .5 * t : 0 !== m ? b / m : 0)) - d) * (3 * h / (h + m) + .5) / 4 || 0))) : a - ((d = a - (a - i) * t * .5) + (_ = a + (r - a) * t * .5)) / 2, d += u, _ += u, l.c = c = d, l.b = 0 !== v ? y : y = l.a + .6 * (l.c - l.a), l.da = a - i, l.ca = c - i, l.ba = y - i, o ? (p = S(i, y, c, a), e.splice(f, 1, p[0], p[1], p[2], p[3]), f += 4) : f++, y = _;
                (l = e[f]).b = y, l.c = y + .4 * (l.d - y), l.da = l.d - l.a, l.ca = l.c - l.a, l.ba = y - l.a, o && (p = S(l.a, y, l.c, l.d), e.splice(f, 1, p[0], p[1], p[2], p[3]))
            })(l = h[r = m[a]], t, o, s, g[r]), c && (l.splice(0, d), l.splice(l.length - d, d));
            return h
        }
        var w, P, T, B, g, o, b, e;
        _fwd_fwdScope.FWDFWD_fwdDefine("FWDAnimation", ["core.FWDAnimation", "core.FWDSimpleTimeline", "FWDTweenLite"], function (b, _, g) {
            function f(e) {
                for (var t = [], o = e.length, s = 0; s !== o; t.push(e[s++]));
                return t
            }

            function y(e, t, o) {
                var s, n, i = e.cycle;
                for (s in i) n = i[s], e[s] = "function" == typeof n ? n(o, t[o]) : n[o % n.length];
                delete e.cycle
            }
            var b = function (e, t, o) {
                    g.call(this, e, t, o), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = b.prototype.render
                },
                v = 1e-10,
                S = g._internals,
                P = S.isSelector,
                w = S.isArray,
                e = b.prototype = g.to({}, .1, {}),
                T = [];
            b.version = "1.19.0", e.constructor = b, e.kill()._gc = !1, b.killTweensOf = b.killDelayedCallsTo = g.killTweensOf, b.getTweensOf = g.getTweensOf, b.lagSmoothing = g.lagSmoothing, b.ticker = g.ticker, b.render = g.render, e.invalidate = function () {
                return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), g.prototype.invalidate.call(this)
            }, e.updateTo = function (e, t) {
                var o, s = this.ratio,
                    n = this.vars.immediateRender || e.immediateRender;
                for (o in t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), e) this.vars[o] = e[o];
                if (this._initted || n)
                    if (t) this._initted = !1, n && this.render(0, !0, !0);
                    else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && g._onPluginEvent("_onDisable", this), .998 < this._time / this._duration) {
                    var i = this._totalTime;
                    this.render(0, !0, !1), this._initted = !1, this.render(i, !0, !1)
                } else if (this._initted = !1, this._init(), 0 < this._time || n)
                    for (var a, r = 1 / (1 - s), l = this._firstPT; l;) a = l.s + l.c, l.c *= r, l.s = a - l.c, l = l._next;
                return this
            }, e.render = function (e, t, o) {
                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                var s, n, i, a, r, l, d, _, u, c = this._dirty ? this.totalDuration() : this._totalDuration,
                    p = this._time,
                    h = this._totalTime,
                    m = this._cycle,
                    b = this._duration,
                    g = this._rawPrevTime;
                if (c - 1e-7 <= e ? (this._totalTime = c, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = b, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, n = "onComplete", o = o || this._timeline.autoRemoveChildren), 0 === b && (!this._initted && this.vars.lazy && !o || (this._startTime === this._timeline._duration && (e = 0), (g < 0 || e <= 0 && -1e-7 <= e || g === v && "isPause" !== this.data) && g !== e && (o = !0, v < g && (n = "onReverseComplete")), this._rawPrevTime = _ = !t || e || g === e ? e : v))) : e < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === b && 0 < g) && (n = "onReverseComplete", s = this._reversed), e < 0 && (this._active = !1, 0 === b && (!this._initted && this.vars.lazy && !o || (0 <= g && (o = !0), this._rawPrevTime = _ = !t || e || g === e ? e : v))), this._initted || (o = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (a = b + this._repeatDelay, this._cycle = this._totalTime / a >> 0, 0 !== this._cycle && this._cycle === this._totalTime / a && h <= e && this._cycle--, this._time = this._totalTime - this._cycle * a, this._yoyo && 0 != (1 & this._cycle) && (this._time = b - this._time), this._time > b ? this._time = b : this._time < 0 && (this._time = 0)), this._easeType ? (r = this._time / b, (1 === (l = this._easeType) || 3 === l && .5 <= r) && (r = 1 - r), 3 === l && (r *= 2), 1 === (d = this._easePower) ? r *= r : 2 === d ? r *= r * r : 3 === d ? r *= r * r * r : 4 === d && (r *= r * r * r * r), 1 === l ? this.ratio = 1 - r : 2 === l ? this.ratio = r : this._time / b < .5 ? this.ratio = r / 2 : this.ratio = 1 - r / 2) : this.ratio = this._ease.getRatio(this._time / b)), p !== this._time || o || m !== this._cycle) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!o && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = p, this._totalTime = h, this._rawPrevTime = g, this._cycle = m, S.lazyTweens.push(this), void(this._lazy = [e, t]);
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / b) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== p && 0 <= e && (this._active = !0), 0 === h && (2 === this._initted && 0 < e && this._init(), this._startAt && (0 <= e ? this._startAt.render(e, t, o) : n = n || "_dummyGS"), this.vars.onStart && (0 === this._totalTime && 0 !== b || t || this._callback("onStart"))), i = this._firstPT; i;) i.f ? i.t[i.p](i.c * this.ratio + i.s) : (u = i.c * this.ratio + i.s, "x" == i.p ? i.t.setX(u) : "y" == i.p ? i.t.setY(u) : "z" == i.p ? i.t.setZ(u) : "angleX" == i.p ? i.t.setAngleX(u) : "angleY" == i.p ? i.t.setAngleY(u) : "angleZ" == i.p ? i.t.setAngleZ(u) : "w" == i.p ? i.t.setWidth(u) : "h" == i.p ? i.t.setHeight(u) : "alpha" == i.p ? i.t.setAlpha(u) : "scale" == i.p ? i.t.setScale2(u) : i.t[i.p] = u), i = i._next;
                    this._onUpdate && (e < 0 && this._startAt && this._startTime && this._startAt.render(e, t, o), t || this._totalTime === h && !n || this._callback("onUpdate")), this._cycle !== m && (t || this._gc || this.vars.onRepeat && this._callback("onRepeat")), n && (this._gc && !o || (e < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, o), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[n] && this._callback(n), 0 === b && this._rawPrevTime === v && _ !== v && (this._rawPrevTime = 0)))
                } else h !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"))
            }, b.to = function (e, t, o) {
                return new b(e, t, o)
            }, b.from = function (e, t, o) {
                return o.runBackwards = !0, o.immediateRender = 0 != o.immediateRender, new b(e, t, o)
            }, b.fromTo = function (e, t, o, s) {
                return s.startAt = o, s.immediateRender = 0 != s.immediateRender && 0 != o.immediateRender, new b(e, t, s)
            }, b.staggerTo = b.allTo = function (e, t, o, s, n, i, a) {
                function r() {
                    o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), n.apply(a || o.callbackScope || this, i || T)
                }
                s = s || 0;
                var l, d, _, u, c = 0,
                    p = [],
                    h = o.cycle,
                    m = o.startAt && o.startAt.cycle;
                for (w(e) || ("string" == typeof e && (e = g.selector(e) || e), P(e) && (e = f(e))), e = e || [], s < 0 && ((e = f(e)).reverse(), s *= -1), l = e.length - 1, _ = 0; _ <= l; _++) {
                    for (u in d = {}, o) d[u] = o[u];
                    if (h && (y(d, e, _), null != d.duration && (t = d.duration, delete d.duration)), m) {
                        for (u in m = d.startAt = {}, o.startAt) m[u] = o.startAt[u];
                        y(d.startAt, e, _)
                    }
                    d.delay = c + (d.delay || 0), _ === l && n && (d.onComplete = r), p[_] = new b(e[_], t, d), c += s
                }
                return p
            }, b.staggerFrom = b.allFrom = function (e, t, o, s, n, i, a) {
                return o.runBackwards = !0, o.immediateRender = 0 != o.immediateRender, b.staggerTo(e, t, o, s, n, i, a)
            }, b.staggerFromTo = b.allFromTo = function (e, t, o, s, n, i, a, r) {
                return s.startAt = o, s.immediateRender = 0 != s.immediateRender && 0 != o.immediateRender, b.staggerTo(e, t, s, n, i, a, r)
            }, b.delayedCall = function (e, t, o, s, n) {
                return new b(t, 0, {
                    delay: e,
                    onComplete: t,
                    onCompleteParams: o,
                    callbackScope: s,
                    onReverseComplete: t,
                    onReverseCompleteParams: o,
                    immediateRender: !1,
                    useFrames: n,
                    overwrite: 0
                })
            }, b.set = function (e, t) {
                return new b(e, 0, t)
            }, b.isTweening = function (e) {
                return 0 < g.getTweensOf(e, !0).length
            };
            var i = function (e, t) {
                    for (var o = [], s = 0, n = e._first; n;) n instanceof g ? o[s++] = n : (t && (o[s++] = n), s = (o = o.concat(i(n, t))).length), n = n._next;
                    return o
                },
                u = b.getAllTweens = function (e) {
                    return i(b._rootTimeline, e).concat(i(b._rootFramesTimeline, e))
                };

            function s(e, t, o, s) {
                t = !1 !== t, o = !1 !== o;
                for (var n, i, a = u(s = !1 !== s), r = t && o && s, l = a.length; - 1 < --l;) i = a[l], (r || i instanceof _ || (n = i.target === i.vars.onComplete) && o || t && !n) && i.paused(e)
            }
            return b.killAll = function (e, t, o, s) {
                null == t && (t = !0), null == o && (o = !0);
                for (var n, i, a = u(0 != s), r = a.length, l = t && o && s, d = 0; d < r; d++) i = a[d], (l || i instanceof _ || (n = i.target === i.vars.onComplete) && o || t && !n) && (e ? i.totalTime(i._reversed ? 0 : i.totalDuration()) : i._enabled(!1, !1))
            }, b.killChildTweensOf = function (e, t) {
                if (null != e) {
                    var o, s, n, i, a, r = S.tweenLookup;
                    if ("string" == typeof e && (e = g.selector(e) || e), P(e) && (e = f(e)), w(e))
                        for (i = e.length; - 1 < --i;) b.killChildTweensOf(e[i], t);
                    else {
                        for (n in o = [], r)
                            for (s = r[n].target.parentNode; s;) s === e && (o = o.concat(r[n].tweens)), s = s.parentNode;
                        for (a = o.length, i = 0; i < a; i++) t && o[i].totalTime(o[i].totalDuration()), o[i]._enabled(!1, !1)
                    }
                }
            }, b.pauseAll = function (e, t, o) {
                s(!0, e, t, o)
            }, b.resumeAll = function (e, t, o) {
                s(!1, e, t, o)
            }, b.globalTimeScale = function (e) {
                var t = b._rootTimeline,
                    o = g.ticker.time;
                return arguments.length ? (e = e || v, t._startTime = o - (o - t._startTime) * t._timeScale / e, t = b._rootFramesTimeline, o = g.ticker.frame, t._startTime = o - (o - t._startTime) * t._timeScale / e, t._timeScale = b._rootTimeline._timeScale = e) : t._timeScale
            }, e.progress = function (e, t) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
            }, e.totalProgress = function (e, t) {
                return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
            }, e.time = function (e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 != (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
            }, e.duration = function (e) {
                return arguments.length ? b.prototype.duration.call(this, e) : this._duration
            }, e.totalDuration = function (e) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
            }, e.repeat = function (e) {
                return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
            }, e.repeatDelay = function (e) {
                return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
            }, e.yoyo = function (e) {
                return arguments.length ? (this._yoyo = e, this) : this._yoyo
            }, b
        }, !0), w = 180 / Math.PI, P = [], T = [], B = [], g = {}, o = _fwd_fwdScope.FWDFWD_fwdDefine.globals, e = (b = _fwd_fwdScope.FWDFWD_fwdDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.7",
            API: 2,
            fwd_global: !0,
            init: function (e, t, o) {
                this._target = e, t instanceof Array && (t = {
                    values: t
                }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                var s, n, i, a, r, l, d = t.values || [],
                    _ = {},
                    u = d[0],
                    c = t.autoRotate || o.vars.orientToBezier;
                for (s in this._autoRotate = c ? c instanceof Array ? c : [
                        ["x", "y", "rotation", !0 !== c && Number(c) || 0]
                    ] : null, u) this._props.push(s);
                for (i = this._props.length; - 1 < --i;) s = this._props[i], this._overwriteProps.push(s), n = this._func[s] = "function" == typeof e[s], _[s] = n ? e[s.indexOf("set") || "function" != typeof e["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(e[s]), r || _[s] !== d[0][s] && (r = _);
                if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? p(d, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, r) : function (e, t, o) {
                        var s, n, i, a, r, l, d, _, u, c, p, h = {},
                            m = "cubic" === (t = t || "soft") ? 3 : 2,
                            b = "soft" === t,
                            g = [];
                        if (b && o && (e = [o].concat(e)), null == e || e.length < 1 + m) throw "invalid Bezier data";
                        for (u in e[0]) g.push(u);
                        for (l = g.length; - 1 < --l;) {
                            for (h[u = g[l]] = r = [], c = 0, _ = e.length, d = 0; d < _; d++) s = null == o ? e[d][u] : "string" == typeof (p = e[d][u]) && "=" === p.charAt(1) ? o[u] + Number(p.charAt(0) + p.substr(2)) : Number(p), b && 1 < d && d < _ - 1 && (r[c++] = (s + r[c - 2]) / 2), r[c++] = s;
                            for (_ = c - m + 1, d = c = 0; d < _; d += m) s = r[d], n = r[d + 1], i = r[d + 2], a = 2 == m ? 0 : r[d + 3], r[c++] = p = 3 == m ? new f(s, n, i, a) : new f(s, (2 * n + s) / 3, (2 * n + i) / 3, i);
                            r.length = c
                        }
                        return h
                    }(d, t.type, _), this._segCount = this._beziers[s].length, this._timeRes && (l = function (e, t) {
                        var o, s, n, i, a = [],
                            r = [],
                            l = 0,
                            d = 0,
                            _ = (t = t >> 0 || 6) - 1,
                            u = [],
                            c = [];
                        for (o in e) ! function (e, t, o) {
                            for (var s, n, i, a, r, l, d, _, u, c, p, h = 1 / o, m = e.length; - 1 < --m;)
                                for (i = (c = e[m]).a, a = c.d - i, r = c.c - i, l = c.b - i, s = n = 0, _ = 1; _ <= o; _++) s = n - (n = ((d = h * _) * d * a + 3 * (u = 1 - d) * (d * r + u * l)) * d), t[p = m * o + _ - 1] = (t[p] || 0) + s * s
                        }(e[o], a, t);
                        for (n = a.length, s = 0; s < n; s++) l += Math.sqrt(a[s]), c[i = s % t] = l, i === _ && (d += l, u[i = s / t >> 0] = c, r[i] = d, l = 0, c = []);
                        return {
                            length: d,
                            lengths: r,
                            segments: u
                        }
                    }(this._beziers, this._timeRes), this._length = l.length, this._lengths = l.lengths, this._segments = l.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length), c = this._autoRotate)
                    for (this._initialRotations = [], c[0] instanceof Array || (this._autoRotate = c = [c]), i = c.length; - 1 < --i;) {
                        for (a = 0; a < 3; a++) s = c[i][a], this._func[s] = "function" == typeof e[s] && e[s.indexOf("set") || "function" != typeof e["get" + s.substr(3)] ? s : "get" + s.substr(3)];
                        s = c[i][2], this._initialRotations[i] = (this._func[s] ? this._func[s].call(this._target) : this._target[s]) || 0, this._overwriteProps.push(s)
                    }
                return this._startRatio = o.vars.runBackwards ? 1 : 0, !0
            },
            set: function (e) {
                var t, o, s, n, i, a, r, l, d, _ = this._segCount,
                    u = this._func,
                    c = this._target,
                    p = e !== this._startRatio;
                if (this._timeRes) {
                    if (l = this._lengths, d = this._curSeg, e *= this._length, P = this._li, e > this._l2 && P < _ - 1) {
                        for (r = _ - 1; P < r && (this._l2 = l[++P]) <= e;);
                        this._l1 = l[P - 1], this._li = P, this._curSeg = d = this._segments[P], this._s2 = d[this._s1 = this._si = 0]
                    } else if (e < this._l1 && 0 < P) {
                        for (; 0 < P && (this._l1 = l[--P]) >= e;);
                        0 === P && e < this._l1 ? this._l1 = 0 : P++, this._l2 = l[P], this._li = P, this._curSeg = d = this._segments[P], this._s1 = d[(this._si = d.length - 1) - 1] || 0, this._s2 = d[this._si]
                    }
                    if (t = P, e -= this._l1, P = this._si, e > this._s2 && P < d.length - 1) {
                        for (r = d.length - 1; P < r && (this._s2 = d[++P]) <= e;);
                        this._s1 = d[P - 1], this._si = P
                    } else if (e < this._s1 && 0 < P) {
                        for (; 0 < P && (this._s1 = d[--P]) >= e;);
                        0 === P && e < this._s1 ? this._s1 = 0 : P++, this._s2 = d[P], this._si = P
                    }
                    i = (P + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                } else i = (e - (t = e < 0 ? 0 : 1 <= e ? _ - 1 : _ * e >> 0) * (1 / _)) * _;
                for (o = 1 - i, P = this._props.length; - 1 < --P;) s = this._props[P], a = (i * i * (n = this._beziers[s][t]).da + 3 * o * (i * n.ca + o * n.ba)) * i + n.a, this._mod[s] && (a = this._mod[s](a, c)), u[s] ? c[s](a) : "x" == s ? c.setX(a) : "y" == s ? c.setY(a) : "z" == s ? c.setZ(a) : "angleX" == s ? c.setAngleX(a) : "angleY" == s ? c.setAngleY(a) : "angleZ" == s ? c.setAngleZ(a) : "w" == s ? c.setWidth(a) : "h" == s ? c.setHeight(a) : "alpha" == s ? c.setAlpha(a) : "scale" == s ? c.setScale2(a) : c[s] = a;
                if (this._autoRotate)
                    for (var h, m, b, g, f, y, v, S = this._autoRotate, P = S.length; - 1 < --P;) s = S[P][2], y = S[P][3] || 0, v = !0 === S[P][4] ? 1 : w, n = this._beziers[S[P][0]], h = this._beziers[S[P][1]], n && h && (n = n[t], h = h[t], m = n.a + (n.b - n.a) * i, m += ((g = n.b + (n.c - n.b) * i) - m) * i, g += (n.c + (n.d - n.c) * i - g) * i, b = h.a + (h.b - h.a) * i, b += ((f = h.b + (h.c - h.b) * i) - b) * i, f += (h.c + (h.d - h.c) * i - f) * i, a = p ? Math.atan2(f - b, g - m) * v + y : this._initialRotations[P], this._mod[s] && (a = this._mod[s](a, c)), u[s] ? c[s](a) : c[s] = a)
            }
        })).prototype, b.bezierThrough = p, b.cubicToQuadratic = S, b._autoCSS = !0, b.quadraticToCubic = function (e, t, o) {
            return new f(e, (2 * t + e) / 3, (2 * t + o) / 3, o)
        }, b._cssRegister = function () {
            var e, p, h, m, t = o.CSSPlugin;
            t && (e = t._internals, p = e._parseToProxy, h = e._setPluginRatio, m = e.CSSPropTween, e._registerComplexSpecialProp("bezier", {
                parser: function (e, t, o, s, n, i) {
                    t instanceof Array && (t = {
                        values: t
                    }), i = new b;
                    var a, r, l, d = t.values,
                        _ = d.length - 1,
                        u = [],
                        c = {};
                    if (_ < 0) return n;
                    for (a = 0; a <= _; a++) l = p(e, d[a], s, n, i, _ !== a), u[a] = l.end;
                    for (r in t) c[r] = t[r];
                    return c.values = u, (n = new m(e, "bezier", 0, 0, l.pt, 2)).data = l, n.plugin = i, n.setRatio = h, 0 === c.autoRotate && (c.autoRotate = !0), !c.autoRotate || c.autoRotate instanceof Array || (a = !0 === c.autoRotate ? 0 : Number(c.autoRotate), c.autoRotate = null != l.end.left ? [
                        ["left", "top", "rotation", a, !1]
                    ] : null != l.end.x && [
                        ["x", "y", "rotation", a, !1]
                    ]), c.autoRotate && (s._transform || s._enableTransforms(!1), l.autoRotate = s._target._fwdTransform, l.proxy.rotation = l.autoRotate.rotation || 0, s._overwriteProps.push("rotation")), i._onInitTween(l.proxy, c, s._tween), n
                }
            }))
        }, e._mod = function (e) {
            for (var t, o = this._overwriteProps, s = o.length; - 1 < --s;)(t = e[o[s]]) && "function" == typeof t && (this._mod[o[s]] = t)
        }, e._kill = function (e) {
            var t, o, s = this._props;
            for (t in this._beziers)
                if (t in e)
                    for (delete this._beziers[t], delete this._func[t], o = s.length; - 1 < --o;) s[o] === t && s.splice(o, 1);
            if (s = this._autoRotate)
                for (o = s.length; - 1 < --o;) e[s[o][2]] && s.splice(o, 1);
            return this._super._kill.call(this, e)
        }, _fwd_fwdScope.FWDFWD_fwdDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "FWDTweenLite"], function (i, M) {
            var h, T, B, m, R = function () {
                    i.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = R.prototype.setRatio
                },
                d = _fwd_fwdScope.FWDFWD_fwdDefine.globals,
                b = {},
                e = R.prototype = new i("css");

            function a(e, t) {
                return t.toUpperCase()
            }

            function t(e) {
                return $.createElementNS ? $.createElementNS("http://www.w3.org/1999/xhtml", e) : $.createElement(e)
            }

            function r(e) {
                return A.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            }

            function g(e) {
                window.console && console.log(e)
            }

            function D(e, t) {
                var o, s, n = (t = t || Z).style;
                if (void 0 !== n[e]) return e;
                for (e = e.charAt(0).toUpperCase() + e.substr(1), o = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; - 1 < --s && void 0 === n[o[s] + e];);
                return 0 <= s ? (ne = "-" + (ie = 3 === s ? "ms" : o[s]).toLowerCase() + "-", ie + e) : null
            }

            function f(e, t) {
                var o, s, n, i = {};
                if (t = t || ae(e, null))
                    if (o = t.length)
                        for (; - 1 < --o;) - 1 !== (n = t[o]).indexOf("-transform") && ke !== n || (i[n.replace(c, a)] = t.getPropertyValue(n));
                    else
                        for (o in t) - 1 !== o.indexOf("Transform") && Ae !== o || (i[o] = t[o]);
                else if (t = e.currentStyle || e.style)
                    for (o in t) "string" == typeof o && void 0 === i[o] && (i[o.replace(c, a)] = t[o]);
                return se || (i.opacity = r(e)), s = ze(e, t, !1), i.rotation = s.rotation, i.skewX = s.skewX, i.scaleX = s.scaleX, i.scaleY = s.scaleY, i.x = s.x, i.y = s.y, Me && (i.z = s.z, i.rotationX = s.rotationX, i.rotationY = s.rotationY, i.scaleZ = s.scaleZ), i.filters && delete i.filters, i
            }

            function y(e, t, o, s, n) {
                var i, a, r, l = {},
                    d = e.style;
                for (a in o) "cssText" !== a && "length" !== a && isNaN(a) && (t[a] !== (i = o[a]) || n && n[a]) && -1 === a.indexOf("Origin") && ("number" != typeof i && "string" != typeof i || (l[a] = "auto" !== i || "left" !== a && "top" !== a ? "" !== i && "auto" !== i && "none" !== i || "string" != typeof t[a] || "" === t[a].replace(_, "") ? i : 0 : de(e, a), void 0 !== d[a] && (r = new ye(d, a, d[a], r))));
                if (s)
                    for (a in s) "className" !== a && (l[a] = s[a]);
                return {
                    difs: l,
                    firstMPT: r
                }
            }

            function W(e, t) {
                return "function" == typeof e && (e = e(E, V)), "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t) || 0
            }

            function F(e, t) {
                return "function" == typeof e && (e = e(E, V)), null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
            }

            function H(e, t, o, s) {
                var n, i, a, r, l;
                return "function" == typeof e && (e = e(E, V)), (r = null == e ? t : "number" == typeof e ? e : (n = 360, i = e.split("_"), a = ((l = "=" === e.charAt(1)) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(i[0].substr(2)) : parseFloat(i[0])) * (-1 === e.indexOf("rad") ? 1 : K) - (l ? 0 : t), i.length && (s && (s[o] = t + a), -1 !== e.indexOf("short") && (a %= n) != a % 180 && (a = a < 0 ? a + n : a - n), -1 !== e.indexOf("_cw") && a < 0 ? a = (a + 3599999999640) % n - (a / n | 0) * n : -1 !== e.indexOf("ccw") && 0 < a && (a = (a - 3599999999640) % n - (a / n | 0) * n)), t + a)) < 1e-6 && -1e-6 < r && (r = 0), r
            }

            function p(e, t, o) {
                return 255 * (6 * (e = e < 0 ? e + 1 : 1 < e ? e - 1 : e) < 1 ? t + (o - t) * e * 6 : e < .5 ? o : 3 * e < 2 ? t + (o - t) * (2 / 3 - e) * 6 : t) + .5 | 0
            }

            function s(e, t) {
                for (var o, s, n = e.match(me) || [], i = 0, a = n.length ? "" : e, r = 0; r < n.length; r++) o = n[r], i += (s = e.substr(i, e.indexOf(o, i) - i)).length + o.length, 3 === (o = he(o, t)).length && o.push(1), a += s + (t ? "hsla(" + o[0] + "," + o[1] + "%," + o[2] + "%," + o[3] : "rgba(" + o.join(",")) + ")";
                return a + e.substr(i)
            }(e.constructor = R).version = "1.19.0", R.API = 2, R.defaultTransformPerspective = 0, R.defaultSkewType = "compensated", R.defaultSmoothOrigin = !0, e = "px", R.suffixMap = {
                top: e,
                right: e,
                bottom: e,
                left: e,
                width: e,
                height: e,
                fontSize: e,
                padding: e,
                margin: e,
                perspective: e,
                lineHeight: ""
            };
            var U, v, S, k, P, C, V, E, o, n, O = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                I = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                _ = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                x = /(?:\d|\-|\+|=|#|\.)*/g,
                A = /opacity *= *([^)]*)/i,
                L = /opacity:([^;]*)/i,
                l = /alpha\(opacity *=.+?\)/i,
                N = /^(rgb|hsl)/,
                u = /([A-Z])/g,
                c = /-([a-z])/gi,
                Y = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                j = /(?:Left|Right|Width)/i,
                X = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                z = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                Q = /,(?=[^\)]*(?:\(|$))/gi,
                G = /[\s,\(]/i,
                q = Math.PI / 180,
                K = 180 / Math.PI,
                J = {},
                $ = document,
                Z = t("div"),
                ee = t("img"),
                te = R._internals = {
                    _specialProps: b
                },
                oe = navigator.userAgent,
                se = (o = oe.indexOf("Android"), n = t("a"), S = -1 !== oe.indexOf("Safari") && -1 === oe.indexOf("Chrome") && (-1 === o || 3 < Number(oe.substr(o + 8, 1))), P = S && Number(oe.substr(oe.indexOf("Version/") + 8, 1)) < 6, k = -1 !== oe.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(oe) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(oe)) && (C = parseFloat(RegExp.$1)), !!n && (n.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(n.style.opacity))),
                ne = "",
                ie = "",
                ae = $.defaultView ? $.defaultView.getComputedStyle : function () {},
                re = R.getStyle = function (e, t, o, s, n) {
                    var i;
                    return se || "opacity" !== t ? (!s && e.style[t] ? i = e.style[t] : (o = o || ae(e)) ? i = o[t] || o.getPropertyValue(t) || o.getPropertyValue(t.replace(u, "-$1").toLowerCase()) : e.currentStyle && (i = e.currentStyle[t]), null == n || i && "none" !== i && "auto" !== i && "auto auto" !== i ? i : n) : r(e)
                },
                le = te.convertToPixels = function (e, t, o, s, n) {
                    if ("px" === s || !s) return o;
                    if ("auto" === s || !o) return 0;
                    var i, a, r, l = j.test(t),
                        d = e,
                        _ = Z.style,
                        u = o < 0,
                        c = 1 === o;
                    if (u && (o = -o), c && (o *= 100), "%" === s && -1 !== t.indexOf("border")) i = o / 100 * (l ? e.clientWidth : e.clientHeight);
                    else {
                        if (_.cssText = "border:0 solid red;position:" + re(e, "position") + ";line-height:0;", "%" !== s && d.appendChild && "v" !== s.charAt(0) && "rem" !== s) _[l ? "borderLeftWidth" : "borderTopWidth"] = o + s;
                        else {
                            if (a = (d = e.parentNode || $.body)._fwdCache, r = M.ticker.frame, a && l && a.time === r) return a.width * o / 100;
                            _[l ? "width" : "height"] = o + s
                        }
                        d.appendChild(Z), i = parseFloat(Z[l ? "offsetWidth" : "offsetHeight"]), d.removeChild(Z), l && "%" === s && !1 !== R.cacheWidths && ((a = d._fwdCache = d._fwdCache || {}).time = r, a.width = i / o * 100), 0 !== i || n || (i = le(e, t, o, s, !0))
                    }
                    return c && (i /= 100), u ? -i : i
                },
                de = te.calculateOffset = function (e, t, o) {
                    if ("absolute" !== re(e, "position", o)) return 0;
                    var s = "left" === t ? "Left" : "Top",
                        n = re(e, "margin" + s, o);
                    return e["offset" + s] - (le(e, t, parseFloat(n), n.replace(x, "")) || 0)
                },
                _e = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                ue = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                ce = function (e, t) {
                    if ("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
                    null != e && "" !== e || (e = "0 0");
                    var o, s = e.split(" "),
                        n = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : s[0],
                        i = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : s[1];
                    if (3 < s.length && !t) {
                        for (s = e.split(", ").join(",").split(","), e = [], o = 0; o < s.length; o++) e.push(ce(s[o]));
                        return e.join(",")
                    }
                    return null == i ? i = "center" === n ? "50%" : "0" : "center" === i && (i = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), e = n + " " + i + (2 < s.length ? " " + s[2] : ""), t && (t.oxp = -1 !== n.indexOf("%"), t.oyp = -1 !== i.indexOf("%"), t.oxr = "=" === n.charAt(1), t.oyr = "=" === i.charAt(1), t.ox = parseFloat(n.replace(_, "")), t.oy = parseFloat(i.replace(_, "")), t.v = e), t || e
                },
                pe = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                he = R.parseColor = function (e, t) {
                    var o, s, n, i, a, r, l, d, _, u, c;
                    if (e)
                        if ("number" == typeof e) o = [e >> 16, e >> 8 & 255, 255 & e];
                        else {
                            if ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), pe[e]) o = pe[e];
                            else if ("#" === e.charAt(0)) 4 === e.length && (e = "#" + (s = e.charAt(1)) + s + (n = e.charAt(2)) + n + (i = e.charAt(3)) + i), o = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & 255, 255 & e];
                            else if ("hsl" === e.substr(0, 3))
                                if (o = c = e.match(O), t) {
                                    if (-1 !== e.indexOf("=")) return e.match(I)
                                } else a = Number(o[0]) % 360 / 360, r = Number(o[1]) / 100, s = 2 * (l = Number(o[2]) / 100) - (n = l <= .5 ? l * (r + 1) : l + r - l * r), 3 < o.length && (o[3] = Number(e[3])), o[0] = p(a + 1 / 3, s, n), o[1] = p(a, s, n), o[2] = p(a - 1 / 3, s, n);
                            else o = e.match(O) || pe.transparent;
                            o[0] = Number(o[0]), o[1] = Number(o[1]), o[2] = Number(o[2]), 3 < o.length && (o[3] = Number(o[3]))
                        }
                    else o = pe.black;
                    return t && !c && (s = o[0] / 255, n = o[1] / 255, i = o[2] / 255, l = ((d = Math.max(s, n, i)) + (_ = Math.min(s, n, i))) / 2, d === _ ? a = r = 0 : (u = d - _, r = .5 < l ? u / (2 - d - _) : u / (d + _), a = d === s ? (n - i) / u + (n < i ? 6 : 0) : d === n ? (i - s) / u + 2 : (s - n) / u + 4, a *= 60), o[0] = a + .5 | 0, o[1] = 100 * r + .5 | 0, o[2] = 100 * l + .5 | 0), o
                },
                me = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (e in pe) me += "|" + e + "\\b";

            function be(e, t, i, a) {
                if (null == e) return function (e) {
                    return e
                };
                var r, l = t ? (e.match(me) || [""])[0] : "",
                    d = e.split(l).join("").match(w) || [],
                    _ = e.substr(0, e.indexOf(d[0])),
                    u = ")" === e.charAt(e.length - 1) ? ")" : "",
                    c = -1 !== e.indexOf(" ") ? " " : ",",
                    p = d.length,
                    h = 0 < p ? d[0].replace(O, "") : "";
                return p ? r = t ? function (e) {
                    var t, o, s, n;
                    if ("number" == typeof e) e += h;
                    else if (a && Q.test(e)) {
                        for (n = e.replace(Q, "|").split("|"), s = 0; s < n.length; s++) n[s] = r(n[s]);
                        return n.join(",")
                    }
                    if (t = (e.match(me) || [l])[0], s = (o = e.split(t).join("").match(w) || []).length, p > s--)
                        for (; ++s < p;) o[s] = i ? o[(s - 1) / 2 | 0] : d[s];
                    return _ + o.join(c) + c + t + u + (-1 !== e.indexOf("inset") ? " inset" : "")
                } : function (e) {
                    var t, o, s;
                    if ("number" == typeof e) e += h;
                    else if (a && Q.test(e)) {
                        for (o = e.replace(Q, "|").split("|"), s = 0; s < o.length; s++) o[s] = r(o[s]);
                        return o.join(",")
                    }
                    if (s = (t = e.match(w) || []).length, p > s--)
                        for (; ++s < p;) t[s] = i ? t[(s - 1) / 2 | 0] : d[s];
                    return _ + t.join(c) + u
                } : function (e) {
                    return e
                }
            }

            function ge(d) {
                return d = d.split(","),
                    function (e, t, o, s, n, i, a) {
                        var r, l = (t + "").split(" ");
                        for (a = {}, r = 0; r < 4; r++) a[d[r]] = l[r] = l[r] || l[(r - 1) / 2 >> 0];
                        return s.parse(e, a, n, i)
                    }
            }

            function fe(e, t, o, s, n, i) {
                var a = new ve(e, t, o, s - o, n, -1, i);
                return a.b = o, a.e = a.xs0 = s, a
            }
            me = new RegExp(me + ")", "gi"), R.colorStringFilter = function (e) {
                var t, o = e[0] + e[1];
                me.test(o) && (t = -1 !== o.indexOf("hsl(") || -1 !== o.indexOf("hsla("), e[0] = s(e[0], t), e[1] = s(e[1], t)), me.lastIndex = 0
            }, M.defaultStringFilter || (M.defaultStringFilter = R.colorStringFilter), te._setPluginRatio = function (e) {
                this.plugin.setRatio(e);
                for (var t, o, s, n, i, a = this.data, r = a.proxy, l = a.firstMPT; l;) t = r[l.v], l.r ? t = Math.round(t) : t < 1e-6 && -1e-6 < t && (t = 0), l.t[l.p] = t, l = l._next;
                if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod(r.rotation, this.t) : r.rotation), 1 === e || 0 === e)
                    for (l = a.firstMPT, i = 1 === e ? "e" : "b"; l;) {
                        if ((o = l.t).type) {
                            if (1 === o.type) {
                                for (n = o.xs0 + o.s + o.xs1, s = 1; s < o.l; s++) n += o["xn" + s] + o["xs" + (s + 1)];
                                o[i] = n
                            }
                        } else o[i] = o.s + o.xs0;
                        l = l._next
                    }
            };

            function ye(e, t, o, s, n) {
                this.t = e, this.p = t, this.v = o, this.r = n, s && ((s._prev = this)._next = s)
            }
            var ve = (te._parseToProxy = function (e, t, o, s, n, i) {
                    var a, r, l, d, _, u = s,
                        c = {},
                        p = {},
                        h = o._transform,
                        m = J;
                    for (o._transform = null, J = t, s = _ = o.parse(e, t, s, n), J = m, i && (o._transform = h, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                        if (s.type <= 1 && (p[r = s.p] = s.s + s.c, c[r] = s.s, i || (d = new ye(s, "s", r, d, s.r), s.c = 0), 1 === s.type))
                            for (a = s.l; 0 < --a;) l = "xn" + a, p[r = s.p + "_" + l] = s.data[l], c[r] = s[l], i || (d = new ye(s, l, r, d, s.rxp[l]));
                        s = s._next
                    }
                    return {
                        proxy: c,
                        end: p,
                        firstMPT: d,
                        pt: _
                    }
                }, te.CSSPropTween = function (e, t, o, s, n, i, a, r, l, d, _) {
                    this.t = e, this.p = t, this.s = o, this.c = s, this.n = a || t, e instanceof ve || m.push(this.n), this.r = r, this.type = i || 0, l && (this.pr = l, h = !0), this.b = void 0 === d ? o : d, this.e = void 0 === _ ? o + s : _, n && ((this._next = n)._prev = this)
                }),
                Se = R.parseComplex = function (e, t, o, s, n, i, a, r, l, d) {
                    o = o || i || "", "function" == typeof s && (s = s(E, V)), a = new ve(e, t, 0, 0, a, d ? 2 : 1, null, !1, r, o, s), s += "", n && me.test(s + o) && (s = [o, s], R.colorStringFilter(s), o = s[0], s = s[1]);
                    var _, u, c, p, h, m, b, g, f, y, v, S, P, w = o.split(", ").join(",").split(" "),
                        T = s.split(", ").join(",").split(" "),
                        B = w.length,
                        D = !1 !== U;
                    for (-1 === s.indexOf(",") && -1 === o.indexOf(",") || (w = w.join(" ").replace(Q, ", ").split(" "), T = T.join(" ").replace(Q, ", ").split(" "), B = w.length), B !== T.length && (B = (w = (i || "").split(" ")).length), a.plugin = l, a.setRatio = d, _ = me.lastIndex = 0; _ < B; _++)
                        if (p = w[_], h = T[_], (g = parseFloat(p)) || 0 === g) a.appendXtra("", g, W(h, g), h.replace(I, ""), D && -1 !== h.indexOf("px"), !0);
                        else if (n && me.test(p)) S = ")" + ((S = h.indexOf(")") + 1) ? h.substr(S) : ""), P = -1 !== h.indexOf("hsl") && se, p = he(p, P), h = he(h, P), (f = 6 < p.length + h.length) && !se && 0 === h[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(T[_]).join("transparent")) : (se || (f = !1), P ? a.appendXtra(f ? "hsla(" : "hsl(", p[0], W(h[0], p[0]), ",", !1, !0).appendXtra("", p[1], W(h[1], p[1]), "%,", !1).appendXtra("", p[2], W(h[2], p[2]), f ? "%," : "%" + S, !1) : a.appendXtra(f ? "rgba(" : "rgb(", p[0], h[0] - p[0], ",", !0, !0).appendXtra("", p[1], h[1] - p[1], ",", !0).appendXtra("", p[2], h[2] - p[2], f ? "," : S, !0), f && (p = p.length < 4 ? 1 : p[3], a.appendXtra("", p, (h.length < 4 ? 1 : h[3]) - p, S, !1))), me.lastIndex = 0;
                    else if (m = p.match(O)) {
                        if (!(b = h.match(I)) || b.length !== m.length) return a;
                        for (u = c = 0; u < m.length; u++) v = m[u], y = p.indexOf(v, c), a.appendXtra(p.substr(c, y - c), Number(v), W(b[u], v), "", D && "px" === p.substr(y + v.length, 2), 0 === u), c = y + v.length;
                        a["xs" + a.l] += p.substr(c)
                    } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + h : h;
                    if (-1 !== s.indexOf("=") && a.data) {
                        for (S = a.xs0 + a.data.s, _ = 1; _ < a.l; _++) S += a["xs" + _] + a.data["xn" + _];
                        a.e = S + a["xs" + _]
                    }
                    return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                },
                Pe = 9;
            for ((e = ve.prototype).l = e.pr = 0; 0 < --Pe;) e["xn" + Pe] = 0, e["xs" + Pe] = "";

            function we(e, t) {
                t = t || {}, this.p = t.prefix && D(e) || e, (b[e] = b[this.p] = this).format = t.formatter || be(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
            }
            e.xs0 = "", e._next = e._prev = e.xfirst = e.data = e.plugin = e.setRatio = e.rxp = null, e.appendXtra = function (e, t, o, s, n, i) {
                var a = this,
                    r = a.l;
                return a["xs" + r] += i && (r || a["xs" + r]) ? " " + e : e || "", o || 0 === r || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", 0 < r ? (a.data["xn" + r] = t + o, a.rxp["xn" + r] = n, a["xn" + r] = t, a.plugin || (a.xfirst = new ve(a, "xn" + r, t, o, a.xfirst || a, 0, a.n, n, a.pr), a.xfirst.xs0 = 0)) : (a.data = {
                    s: t + o
                }, a.rxp = {}, a.s = t, a.c = o, a.r = n)) : a["xs" + r] += t + (s || ""), a
            };
            var Te = te._registerComplexSpecialProp = function (e, t, o) {
                    "object" != typeof t && (t = {
                        parser: o
                    });
                    var s, n = e.split(","),
                        i = t.defaultValue;
                    for (o = o || [i], s = 0; s < n.length; s++) t.prefix = 0 === s && t.prefix, t.defaultValue = o[s] || i, new we(n[s], t)
                },
                Be = te._registerPluginProp = function (e) {
                    var l;
                    b[e] || (l = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin", Te(e, {
                        parser: function (e, t, o, s, n, i, a) {
                            var r = d.com.fwd.plugins[l];
                            return r ? (r._cssRegister(), b[o].parse(e, t, o, s, n, i, a)) : (g("Error: " + l + " js file not loaded."), n)
                        }
                    }))
                };

            function De(e, t, o) {
                var s, n = $.createElementNS("http://www.w3.org/2000/svg", e),
                    i = /([a-z])([A-Z])/g;
                for (s in o) n.setAttributeNS(null, s.replace(i, "$1-$2").toLowerCase(), o[s]);
                return t.appendChild(n), n
            }

            function We(e, t, o, s, n, i) {
                var a, r, l, d, _, u, c, p, h, m, b, g, f, y, v = e._fwdTransform,
                    S = Ue(e, !0);
                v && (f = v.xOrigin, y = v.yOrigin), (!s || (a = s.split(" ")).length < 2) && (c = e.getBBox(), a = [(-1 !== (t = ce(t).split(" "))[0].indexOf("%") ? parseFloat(t[0]) / 100 * c.width : parseFloat(t[0])) + c.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * c.height : parseFloat(t[1])) + c.y]), o.xOrigin = d = parseFloat(a[0]), o.yOrigin = _ = parseFloat(a[1]), s && S !== Xe && (u = S[0], c = S[1], p = S[2], h = S[3], m = S[4], r = d * (h / (g = u * h - c * p)) + _ * (-p / g) + (p * (b = S[5]) - h * m) / g, l = d * (-c / g) + _ * (u / g) - (u * b - c * m) / g, d = o.xOrigin = a[0] = r, _ = o.yOrigin = a[1] = l), v && (i && (o.xOffset = v.xOffset, o.yOffset = v.yOffset, v = o), n || !1 !== n && !1 !== R.defaultSmoothOrigin ? (r = d - f, l = _ - y, v.xOffset += r * S[0] + l * S[2] - r, v.yOffset += r * S[1] + l * S[3] - l) : v.xOffset = v.yOffset = 0), i || e.setAttribute("data-svg-origin", a.join(" "))
            }

            function Fe(e) {
                var t, o, s = this.data,
                    n = -s.rotation * q,
                    i = n + s.skewX * q,
                    a = 1e5,
                    r = (Math.cos(n) * s.scaleX * a | 0) / a,
                    l = (Math.sin(n) * s.scaleX * a | 0) / a,
                    d = (Math.sin(i) * -s.scaleY * a | 0) / a,
                    _ = (Math.cos(i) * s.scaleY * a | 0) / a,
                    u = this.t.style,
                    c = this.t.currentStyle;
                if (c) {
                    o = l, l = -d, d = -o, t = c.filter, u.filter = "";
                    var p = this.t.offsetWidth,
                        h = this.t.offsetHeight,
                        m = "absolute" !== c.position,
                        b = "progid:DXImageTransform.Microsoft.Matrix(M11=" + r + ", M12=" + l + ", M21=" + d + ", M22=" + _,
                        g = s.x + p * s.xPercent / 100,
                        f = s.y + h * s.yPercent / 100;
                    if (null != s.ox && (g += (w = (s.oxp ? p * s.ox * .01 : s.ox) - p / 2) - (w * r + (T = (s.oyp ? h * s.oy * .01 : s.oy) - h / 2) * l), f += T - (w * d + T * _)), b += m ? ", Dx=" + ((w = p / 2) - (w * r + (T = h / 2) * l) + g) + ", Dy=" + (T - (w * d + T * _) + f) + ")" : ", sizingMethod='auto expand')", -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = t.replace(z, b) : u.filter = b + " " + t, 0 !== e && 1 !== e || 1 == r && 0 === l && 0 === d && 1 == _ && (m && -1 === b.indexOf("Dx=0, Dy=0") || A.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && u.removeAttribute("filter")), !m) {
                        var y, v, S, P = C < 8 ? 1 : -1,
                            w = s.ieOffsetX || 0,
                            T = s.ieOffsetY || 0;
                        for (s.ieOffsetX = Math.round((p - ((r < 0 ? -r : r) * p + (l < 0 ? -l : l) * h)) / 2 + g), s.ieOffsetY = Math.round((h - ((_ < 0 ? -_ : _) * h + (d < 0 ? -d : d) * p)) / 2 + f), Pe = 0; Pe < 4; Pe++) S = (o = -1 !== (y = c[v = ue[Pe]]).indexOf("px") ? parseFloat(y) : le(this.t, v, parseFloat(y), y.replace(x, "")) || 0) !== s[v] ? Pe < 2 ? -s.ieOffsetX : -s.ieOffsetY : Pe < 2 ? w - s.ieOffsetX : T - s.ieOffsetY, u[v] = (s[v] = Math.round(o - S * (0 === Pe || 2 === Pe ? 1 : P))) + "px"
                    }
                }
            }(e = we.prototype).parseComplex = function (e, t, o, s, n, i) {
                var a, r, l, d, _, u, c = this.keyword;
                if (this.multi && (Q.test(o) || Q.test(t) ? (r = t.replace(Q, "|").split("|"), l = o.replace(Q, "|").split("|")) : c && (r = [t], l = [o])), l) {
                    for (d = l.length > r.length ? l.length : r.length, a = 0; a < d; a++) t = r[a] = r[a] || this.dflt, o = l[a] = l[a] || this.dflt, c && (_ = t.indexOf(c)) !== (u = o.indexOf(c)) && (-1 === u ? r[a] = r[a].split(c).join("") : -1 === _ && (r[a] += " " + c));
                    t = r.join(", "), o = l.join(", ")
                }
                return Se(e, this.p, t, o, this.clrs, this.dflt, s, this.pr, n, i)
            }, e.parse = function (e, t, o, s, n, i, a) {
                return this.parseComplex(e.style, this.format(re(e, this.p, B, !1, this.dflt)), this.format(t), n, i)
            }, R.registerSpecialProp = function (e, l, d) {
                Te(e, {
                    parser: function (e, t, o, s, n, i, a) {
                        var r = new ve(e, o, 0, 0, n, 2, o, !1, d);
                        return r.plugin = i, r.setRatio = l(e, t, s._tween, o), r
                    },
                    priority: d
                })
            }, R.useSVGTransformAttr = S || k;

            function He(e) {
                return !!(Ne && e.getBBox && e.getCTM && function (e) {
                    try {
                        return e.getBBox()
                    } catch (e) {}
                }(e) && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM))
            }

            function Ue(e, t) {
                var o, s, n, i, a, r, l = e._fwdTransform || new Re,
                    d = e.style;
                if (Ae ? s = re(e, ke, null, !0) : e.currentStyle && (s = (s = e.currentStyle.filter.match(X)) && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), (o = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s) && Ae && ((r = "none" === ae(e).display) || !e.parentNode) && (r && (i = d.display, d.display = "block"), e.parentNode || (a = 1, Ye.appendChild(e)), o = !(s = re(e, ke, null, !0)) || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, i ? d.display = i : r && Ke(d, "display"), a && Ye.removeChild(e)), (l.svg || e.getBBox && He(e)) && (o && -1 !== (d[Ae] + "").indexOf("matrix") && (s = d[Ae], o = 0), n = e.getAttribute("transform"), o && n && (-1 !== n.indexOf("matrix") ? (s = n, o = 0) : -1 !== n.indexOf("translate") && (s = "matrix(1,0,0,1," + n.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", o = 0))), o) return Xe;
                for (n = (s || "").match(O) || [], Pe = n.length; - 1 < --Pe;) i = Number(n[Pe]), n[Pe] = (a = i - (i |= 0)) ? (1e5 * a + (a < 0 ? -.5 : .5) | 0) / 1e5 + i : i;
                return t && 6 < n.length ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n
            }
            var Ce, Ve, Ee, Oe, Ie, xe = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                Ae = D("transform"),
                ke = ne + "transform",
                Le = D("transformOrigin"),
                Me = null !== D("perspective"),
                Re = te.Transform = function () {
                    this.perspective = parseFloat(R.defaultTransformPerspective) || 0, this.force3D = !(!1 === R.defaultForce3D || !Me) && (R.defaultForce3D || "auto")
                },
                Ne = window.SVGElement,
                Ye = $.documentElement,
                je = (Ie = C || /Android/i.test(oe) && !window.chrome, $.createElementNS && !Ie && (Ve = De("svg", Ye), Oe = (Ee = De("rect", Ve, {
                    width: 100,
                    height: 50,
                    x: 100
                })).getBoundingClientRect().width, Ee.style[Le] = "50% 50%", Ee.style[Ae] = "scaleX(0.5)", Ie = Oe === Ee.getBoundingClientRect().width && !(k && Me), Ye.removeChild(Ve)), Ie),
                Xe = [1, 0, 0, 1, 0, 0],
                ze = te.getTransform = function (e, t, o, s) {
                    if (e._fwdTransform && o && !s) return e._fwdTransform;
                    var n, i, a, r, l, d, _, u, c, p, h, m, b, g, f, y, v, S, P, w, T, B, D, W, F, H, U, C, V, E, O, I, x = o && e._fwdTransform || new Re,
                        A = x.scaleX < 0,
                        k = Me && (parseFloat(re(e, Le, t, !1, "0 0 0").split(" ")[2]) || x.zOrigin) || 0,
                        L = parseFloat(R.defaultTransformPerspective) || 0;
                    if (x.svg = !(!e.getBBox || !He(e)), x.svg && (We(e, re(e, Le, t, !1, "50% 50%") + "", x, e.getAttribute("data-svg-origin")), Ce = R.useSVGTransformAttr || je), (n = Ue(e)) !== Xe)
                        for (i in 16 === n.length ? (_ = n[0], u = n[1], c = n[2], p = n[3], h = n[4], m = n[5], b = n[6], g = n[7], f = n[8], y = n[9], v = n[10], S = n[12], P = n[13], w = n[14], T = n[11], B = Math.atan2(b, v), x.zOrigin && (S = f * (w = -x.zOrigin) - n[12], P = y * w - n[13], w = v * w + x.zOrigin - n[14]), x.rotationX = B * K, B && (D = h * (H = Math.cos(-B)) + f * (U = Math.sin(-B)), W = m * H + y * U, F = b * H + v * U, f = h * -U + f * H, y = m * -U + y * H, v = b * -U + v * H, T = g * -U + T * H, h = D, m = W, b = F), B = Math.atan2(-c, v), x.rotationY = B * K, B && (W = u * (H = Math.cos(-B)) - y * (U = Math.sin(-B)), F = c * H - v * U, y = u * U + y * H, v = c * U + v * H, T = p * U + T * H, _ = D = _ * H - f * U, u = W, c = F), B = Math.atan2(u, _), x.rotation = B * K, B && (_ = _ * (H = Math.cos(-B)) + h * (U = Math.sin(-B)), W = u * H + m * U, m = u * -U + m * H, b = c * -U + b * H, u = W), x.rotationX && 359.9 < Math.abs(x.rotationX) + Math.abs(x.rotation) && (x.rotationX = x.rotation = 0, x.rotationY = 180 - x.rotationY), x.scaleX = (1e5 * Math.sqrt(_ * _ + u * u) + .5 | 0) / 1e5, x.scaleY = (1e5 * Math.sqrt(m * m + y * y) + .5 | 0) / 1e5, x.scaleZ = (1e5 * Math.sqrt(b * b + v * v) + .5 | 0) / 1e5, x.rotationX || x.rotationY ? x.skewX = 0 : (x.skewX = h || m ? Math.atan2(h, m) * K + x.rotation : x.skewX || 0, 90 < Math.abs(x.skewX) && Math.abs(x.skewX) < 270 && (A ? (x.scaleX *= -1, x.skewX += x.rotation <= 0 ? 180 : -180, x.rotation += x.rotation <= 0 ? 180 : -180) : (x.scaleY *= -1, x.skewX += x.skewX <= 0 ? 180 : -180))), x.perspective = T ? 1 / (T < 0 ? -T : T) : 0, x.x = S, x.y = P, x.z = w, x.svg && (x.x -= x.xOrigin - (x.xOrigin * _ - x.yOrigin * h), x.y -= x.yOrigin - (x.yOrigin * u - x.xOrigin * m))) : Me && !s && n.length && x.x === n[4] && x.y === n[5] && (x.rotationX || x.rotationY) || (V = (C = 6 <= n.length) ? n[0] : 1, E = n[1] || 0, O = n[2] || 0, I = C ? n[3] : 1, x.x = n[4] || 0, x.y = n[5] || 0, a = Math.sqrt(V * V + E * E), r = Math.sqrt(I * I + O * O), l = V || E ? Math.atan2(E, V) * K : x.rotation || 0, d = O || I ? Math.atan2(O, I) * K + l : x.skewX || 0, 90 < Math.abs(d) && Math.abs(d) < 270 && (A ? (a *= -1, d += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (r *= -1, d += d <= 0 ? 180 : -180)), x.scaleX = a, x.scaleY = r, x.rotation = l, x.skewX = d, Me && (x.rotationX = x.rotationY = x.z = 0, x.perspective = L, x.scaleZ = 1), x.svg && (x.x -= x.xOrigin - (x.xOrigin * V + x.yOrigin * O), x.y -= x.yOrigin - (x.xOrigin * E + x.yOrigin * I))), x.zOrigin = k, x) x[i] < 2e-5 && -2e-5 < x[i] && (x[i] = 0);
                    return o && (e._fwdTransform = x).svg && (Ce && e.style[Ae] ? M.delayedCall(.001, function () {
                        Ke(e.style, Ae)
                    }) : !Ce && e.getAttribute("transform") && M.delayedCall(.001, function () {
                        e.removeAttribute("transform")
                    })), x
                },
                Qe = te.set3DTransformRatio = te.setTransformRatio = function (e) {
                    var t, o, s, n, i, a, r, l, d, _, u, c, p, h, m, b, g, f, y, v, S, P, w, T = this.data,
                        B = this.t.style,
                        D = T.rotation,
                        W = T.rotationX,
                        F = T.rotationY,
                        H = T.scaleX,
                        U = T.scaleY,
                        C = T.scaleZ,
                        V = T.x,
                        E = T.y,
                        O = T.z,
                        I = T.svg,
                        x = T.perspective,
                        A = T.force3D;
                    if (!((1 !== e && 0 !== e || "auto" !== A || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && A || O || x || F || W || 1 !== C) || Ce && I || !Me) D || T.skewX || I ? (D *= q, P = T.skewX * q, w = 1e5, t = Math.cos(D) * H, n = Math.sin(D) * H, o = Math.sin(D - P) * -U, i = Math.cos(D - P) * U, P && "simple" === T.skewType && (g = Math.tan(P - T.skewY * q), o *= g = Math.sqrt(1 + g * g), i *= g, T.skewY && (g = Math.tan(T.skewY * q), t *= g = Math.sqrt(1 + g * g), n *= g)), I && (V += T.xOrigin - (T.xOrigin * t + T.yOrigin * o) + T.xOffset, E += T.yOrigin - (T.xOrigin * n + T.yOrigin * i) + T.yOffset, Ce && (T.xPercent || T.yPercent) && (h = this.t.getBBox(), V += .01 * T.xPercent * h.width, E += .01 * T.yPercent * h.height), V < (h = 1e-6) && -h < V && (V = 0), E < h && -h < E && (E = 0)), y = (t * w | 0) / w + "," + (n * w | 0) / w + "," + (o * w | 0) / w + "," + (i * w | 0) / w + "," + V + "," + E + ")", I && Ce ? this.t.setAttribute("transform", "matrix(" + y) : B[Ae] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix(" : "matrix(") + y) : B[Ae] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix(" : "matrix(") + H + ",0,0," + U + "," + V + "," + E + ")";
                    else {
                        if (k && (H < (h = 1e-4) && -h < H && (H = C = 2e-5), U < h && -h < U && (U = C = 2e-5), !x || T.z || T.rotationX || T.rotationY || (x = 0)), D || T.skewX) D *= q, m = t = Math.cos(D), b = n = Math.sin(D), T.skewX && (D -= T.skewX * q, m = Math.cos(D), b = Math.sin(D), "simple" === T.skewType && (g = Math.tan((T.skewX - T.skewY) * q), m *= g = Math.sqrt(1 + g * g), b *= g, T.skewY && (g = Math.tan(T.skewY * q), t *= g = Math.sqrt(1 + g * g), n *= g))), o = -b, i = m;
                        else {
                            if (!(F || W || 1 !== C || x || I)) return void(B[Ae] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) translate3d(" : "translate3d(") + V + "px," + E + "px," + O + "px)" + (1 !== H || 1 !== U ? " scale(" + H + "," + U + ")" : ""));
                            t = i = 1, o = n = 0
                        }
                        d = 1, s = a = r = l = _ = u = 0, c = x ? -1 / x : 0, p = T.zOrigin, h = 1e-6, v = ",", S = "0", (D = F * q) && (m = Math.cos(D), _ = c * (r = -(b = Math.sin(D))), s = t * b, a = n * b, c *= d = m, t *= m, n *= m), (D = W * q) && (g = o * (m = Math.cos(D)) + s * (b = Math.sin(D)), f = i * m + a * b, l = d * b, u = c * b, s = o * -b + s * m, a = i * -b + a * m, d *= m, c *= m, o = g, i = f), 1 !== C && (s *= C, a *= C, d *= C, c *= C), 1 !== U && (o *= U, i *= U, l *= U, u *= U), 1 !== H && (t *= H, n *= H, r *= H, _ *= H), (p || I) && (p && (V += s * -p, E += a * -p, O += d * -p + p), I && (V += T.xOrigin - (T.xOrigin * t + T.yOrigin * o) + T.xOffset, E += T.yOrigin - (T.xOrigin * n + T.yOrigin * i) + T.yOffset), V < h && -h < V && (V = S), E < h && -h < E && (E = S), O < h && -h < O && (O = 0)), y = T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix3d(" : "matrix3d(", y += (t < h && -h < t ? S : t) + v + (n < h && -h < n ? S : n) + v + (r < h && -h < r ? S : r), y += v + (_ < h && -h < _ ? S : _) + v + (o < h && -h < o ? S : o) + v + (i < h && -h < i ? S : i), W || F || 1 !== C ? (y += v + (l < h && -h < l ? S : l) + v + (u < h && -h < u ? S : u) + v + (s < h && -h < s ? S : s), y += v + (a < h && -h < a ? S : a) + v + (d < h && -h < d ? S : d) + v + (c < h && -h < c ? S : c) + v) : y += ",0,0,0,0,1,0,", y += V + v + E + v + O + v + (x ? 1 + -O / x : 1) + ")", B[Ae] = y
                    }
                };

            function Ge(e) {
                var t, o = this.t,
                    s = o.filter || re(this.data, "filter") || "",
                    n = this.s + this.c * e | 0;
                100 == n && (t = -1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (o.removeAttribute("filter"), !re(this.data, "filter")) : (o.filter = s.replace(l, ""), !0)), t || (this.xn1 && (o.filter = s = s || "alpha(opacity=" + n + ")"), -1 === s.indexOf("pacity") ? 0 == n && this.xn1 || (o.filter = s + " alpha(opacity=" + n + ")") : o.filter = s.replace(A, "opacity=" + n))
            }

            function qe(e) {
                if (this.t._fwdClassPT = this, 1 === e || 0 === e) {
                    this.t.setAttribute("class", 0 === e ? this.b : this.e);
                    for (var t = this.data, o = this.t.style; t;) t.v ? o[t.p] = t.v : Ke(o, t.p), t = t._next;
                    1 === e && this.t._fwdClassPT === this && (this.t._fwdClassPT = null)
                } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
            }(e = Re.prototype).x = e.y = e.z = e.skewX = e.skewY = e.rotation = e.rotationX = e.rotationY = e.zOrigin = e.xPercent = e.yPercent = e.xOffset = e.yOffset = 0, e.scaleX = e.scaleY = e.scaleZ = 1, Te("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function (e, t, o, s, n, i, a) {
                    if (s._lastParsedTransform === a) return n;
                    var r;
                    "function" == typeof (s._lastParsedTransform = a)[o] && (r = a[o], a[o] = t);
                    var l, d, _, u, c, p, h, m, b, g = e._fwdTransform,
                        f = e.style,
                        y = xe.length,
                        v = a,
                        S = {},
                        P = "transformOrigin",
                        w = ze(e, B, !0, v.parseTransform),
                        T = v.transform && ("function" == typeof v.transform ? v.transform(E, V) : v.transform);
                    if (s._transform = w, T && "string" == typeof T && Ae)(d = Z.style)[Ae] = T, d.display = "block", d.position = "absolute", $.body.appendChild(Z), l = ze(Z, null, !1), w.svg && (p = w.xOrigin, h = w.yOrigin, l.x -= w.xOffset, l.y -= w.yOffset, (v.transformOrigin || v.svgOrigin) && (T = {}, We(e, ce(v.transformOrigin), T, v.svgOrigin, v.smoothOrigin, !0), p = T.xOrigin, h = T.yOrigin, l.x -= T.xOffset - w.xOffset, l.y -= T.yOffset - w.yOffset), (p || h) && (m = Ue(Z, !0), l.x -= p - (p * m[0] + h * m[2]), l.y -= h - (p * m[1] + h * m[3]))), $.body.removeChild(Z), l.perspective || (l.perspective = w.perspective), null != v.xPercent && (l.xPercent = F(v.xPercent, w.xPercent)), null != v.yPercent && (l.yPercent = F(v.yPercent, w.yPercent));
                    else if ("object" == typeof v) {
                        if (l = {
                                scaleX: F(null != v.scaleX ? v.scaleX : v.scale, w.scaleX),
                                scaleY: F(null != v.scaleY ? v.scaleY : v.scale, w.scaleY),
                                scaleZ: F(v.scaleZ, w.scaleZ),
                                x: F(v.x, w.x),
                                y: F(v.y, w.y),
                                z: F(v.z, w.z),
                                xPercent: F(v.xPercent, w.xPercent),
                                yPercent: F(v.yPercent, w.yPercent),
                                perspective: F(v.transformPerspective, w.perspective)
                            }, null != (c = v.directionalRotation))
                            if ("object" == typeof c)
                                for (d in c) v[d] = c[d];
                            else v.rotation = c;
                        "string" == typeof v.x && -1 !== v.x.indexOf("%") && (l.x = 0, l.xPercent = F(v.x, w.xPercent)), "string" == typeof v.y && -1 !== v.y.indexOf("%") && (l.y = 0, l.yPercent = F(v.y, w.yPercent)), l.rotation = H("rotation" in v ? v.rotation : "shortRotation" in v ? v.shortRotation + "_short" : "rotationZ" in v ? v.rotationZ : w.rotation - w.skewY, w.rotation - w.skewY, "rotation", S), Me && (l.rotationX = H("rotationX" in v ? v.rotationX : "shortRotationX" in v ? v.shortRotationX + "_short" : w.rotationX || 0, w.rotationX, "rotationX", S), l.rotationY = H("rotationY" in v ? v.rotationY : "shortRotationY" in v ? v.shortRotationY + "_short" : w.rotationY || 0, w.rotationY, "rotationY", S)), l.skewX = H(v.skewX, w.skewX - w.skewY), (l.skewY = H(v.skewY, w.skewY)) && (l.skewX += l.skewY, l.rotation += l.skewY)
                    }
                    for (Me && null != v.force3D && (w.force3D = v.force3D, u = !0), w.skewType = v.skewType || w.skewType || R.defaultSkewType, (_ = w.force3D || w.z || w.rotationX || w.rotationY || l.z || l.rotationX || l.rotationY || l.perspective) || null == v.scale || (l.scaleZ = 1); - 1 < --y;)(1e-6 < (T = l[b = xe[y]] - w[b]) || T < -1e-6 || null != v[b] || null != J[b]) && (u = !0, n = new ve(w, b, w[b], T, n), b in S && (n.e = S[b]), n.xs0 = 0, n.plugin = i, s._overwriteProps.push(n.n));
                    return T = v.transformOrigin, w.svg && (T || v.svgOrigin) && (p = w.xOffset, h = w.yOffset, We(e, ce(T), l, v.svgOrigin, v.smoothOrigin), n = fe(w, "xOrigin", (g ? w : l).xOrigin, l.xOrigin, n, P), n = fe(w, "yOrigin", (g ? w : l).yOrigin, l.yOrigin, n, P), p === w.xOffset && h === w.yOffset || (n = fe(w, "xOffset", g ? p : w.xOffset, w.xOffset, n, P), n = fe(w, "yOffset", g ? h : w.yOffset, w.yOffset, n, P)), T = Ce ? null : "0px 0px"), (T || Me && _ && w.zOrigin) && (Ae ? (u = !0, b = Le, T = (T || re(e, b, B, !1, "50% 50%")) + "", (n = new ve(f, b, 0, 0, n, -1, P)).b = f[b], n.plugin = i, Me ? (d = w.zOrigin, T = T.split(" "), w.zOrigin = (2 < T.length && (0 === d || "0px" !== T[2]) ? parseFloat(T[2]) : d) || 0, n.xs0 = n.e = T[0] + " " + (T[1] || "50%") + " 0px", (n = new ve(w, "zOrigin", 0, 0, n, -1, n.n)).b = d, n.xs0 = n.e = w.zOrigin) : n.xs0 = n.e = T) : ce(T + "", w)), u && (s._transformType = w.svg && Ce || !_ && 3 !== this._transformType ? 2 : 3), r && (a[o] = r), n
                },
                prefix: !0
            }), Te("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), Te("borderRadius", {
                defaultValue: "0px",
                parser: function (e, t, o, s, n, i) {
                    t = this.format(t);
                    for (var a, r, l, d, _, u, c, p, h, m, b, g, f = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], y = e.style, v = parseFloat(e.offsetWidth), S = parseFloat(e.offsetHeight), P = t.split(" "), w = 0; w < f.length; w++) this.p.indexOf("border") && (f[w] = D(f[w])), -1 !== (l = r = re(e, f[w], B, !1, "0px")).indexOf(" ") && (l = (r = l.split(" "))[0], r = r[1]), d = a = P[w], _ = parseFloat(l), p = l.substr((_ + "").length), "" === (c = (h = "=" === d.charAt(1)) ? (u = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), u *= parseFloat(d), d.substr((u + "").length - (u < 0 ? 1 : 0)) || "") : (u = parseFloat(d), d.substr((u + "").length))) && (c = T[o] || p), c !== p && (m = le(e, "borderLeft", _, p), b = le(e, "borderTop", _, p), r = "%" === c ? (l = m / v * 100 + "%", b / S * 100 + "%") : "em" === c ? (l = m / (g = le(e, "borderLeft", 1, "em")) + "em", b / g + "em") : (l = m + "px", b + "px"), h && (d = parseFloat(l) + u + c, a = parseFloat(r) + u + c)), n = Se(y, f[w], l + " " + r, d + " " + a, !1, "0px", n);
                    return n
                },
                prefix: !0,
                formatter: be("0px 0px 0px 0px", !1, !0)
            }), Te("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                defaultValue: "0px",
                parser: function (e, t, o, s, n, i) {
                    return Se(e.style, o, this.format(re(e, o, B, !1, "0px 0px")), this.format(t), !1, "0px", n)
                },
                prefix: !0,
                formatter: be("0px 0px", !1, !0)
            }), Te("backgroundPosition", {
                defaultValue: "0 0",
                parser: function (e, t, o, s, n, i) {
                    var a, r, l, d, _, u, c = "background-position",
                        p = B || ae(e, null),
                        h = this.format((p ? C ? p.getPropertyValue(c + "-x") + " " + p.getPropertyValue(c + "-y") : p.getPropertyValue(c) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                        m = this.format(t);
                    if (-1 !== h.indexOf("%") != (-1 !== m.indexOf("%")) && m.split(",").length < 2 && (u = re(e, "backgroundImage").replace(Y, "")) && "none" !== u) {
                        for (a = h.split(" "), r = m.split(" "), ee.setAttribute("src", u), l = 2; - 1 < --l;)(d = -1 !== (h = a[l]).indexOf("%")) != (-1 !== r[l].indexOf("%")) && (_ = 0 === l ? e.offsetWidth - ee.width : e.offsetHeight - ee.height, a[l] = d ? parseFloat(h) / 100 * _ + "px" : parseFloat(h) / _ * 100 + "%");
                        h = a.join(" ")
                    }
                    return this.parseComplex(e.style, h, m, n, i)
                },
                formatter: ce
            }), Te("backgroundSize", {
                defaultValue: "0 0",
                formatter: function (e) {
                    return ce(-1 === (e += "").indexOf(" ") ? e + " " + e : e)
                }
            }), Te("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), Te("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), Te("transformStyle", {
                prefix: !0
            }), Te("backfaceVisibility", {
                prefix: !0
            }), Te("userSelect", {
                prefix: !0
            }), Te("margin", {
                parser: ge("marginTop,marginRight,marginBottom,marginLeft")
            }), Te("padding", {
                parser: ge("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), Te("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function (e, t, o, s, n, i) {
                    var a, r, l;
                    return t = C < 9 ? (r = e.currentStyle, l = C < 8 ? " " : ",", a = "rect(" + r.clipTop + l + r.clipRight + l + r.clipBottom + l + r.clipLeft + ")", this.format(t).split(",").join(l)) : (a = this.format(re(e, this.p, B, !1, this.dflt)), this.format(t)), this.parseComplex(e.style, a, t, n, i)
                }
            }), Te("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), Te("autoRound,strictUnits", {
                parser: function (e, t, o, s, n) {
                    return n
                }
            }), Te("border", {
                defaultValue: "0px solid #000",
                parser: function (e, t, o, s, n, i) {
                    var a = re(e, "borderTopWidth", B, !1, "0px"),
                        r = this.format(t).split(" "),
                        l = r[0].replace(x, "");
                    return "px" !== l && (a = parseFloat(a) / le(e, "borderTopWidth", 1, l) + l), this.parseComplex(e.style, this.format(a + " " + re(e, "borderTopStyle", B, !1, "solid") + " " + re(e, "borderTopColor", B, !1, "#000")), r.join(" "), n, i)
                },
                color: !0,
                formatter: function (e) {
                    var t = e.split(" ");
                    return t[0] + " " + (t[1] || "solid") + " " + (e.match(me) || ["#000"])[0]
                }
            }), Te("borderWidth", {
                parser: ge("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), Te("float,cssFloat,styleFloat", {
                parser: function (e, t, o, s, n, i) {
                    var a = e.style,
                        r = "cssFloat" in a ? "cssFloat" : "styleFloat";
                    return new ve(a, r, 0, 0, n, -1, o, !1, 0, a[r], t)
                }
            }), Te("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function (e, t, o, s, n, i) {
                    var a = parseFloat(re(e, "opacity", B, !1, "1")),
                        r = e.style,
                        l = "autoAlpha" === o;
                    return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + a), l && 1 === a && "hidden" === re(e, "visibility", B) && 0 !== t && (a = 0), se ? n = new ve(r, "opacity", a, t - a, n) : ((n = new ve(r, "opacity", 100 * a, 100 * (t - a), n)).xn1 = l ? 1 : 0, r.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = e, n.plugin = i, n.setRatio = Ge), l && ((n = new ve(r, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit")).xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(o)), n
                }
            });
            var Ke = function (e, t) {
                t && (e.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t), e.removeProperty(t.replace(u, "-$1").toLowerCase())) : e.removeAttribute(t))
            };

            function Je(e) {
                if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var t, o, s, n, i, a = this.t.style,
                        r = b.transform.parse;
                    if ("all" === this.e) n = !(a.cssText = "");
                    else
                        for (s = (t = this.e.split(" ").join("").split(",")).length; - 1 < --s;) o = t[s], b[o] && (b[o].parse === r ? n = !0 : o = "transformOrigin" === o ? Le : b[o].p), Ke(a, o);
                    n && (Ke(a, Ae), (i = this.t._fwdTransform) && (i.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._fwdTransform))
                }
            }
            for (Te("className", {
                    parser: function (e, t, o, s, n, i, a) {
                        var r, l, d, _, u, c = e.getAttribute("class") || "",
                            p = e.style.cssText;
                        if ((n = s._classNamePT = new ve(e, o, 0, 0, n, 2)).setRatio = qe, n.pr = -11, h = !0, n.b = c, l = f(e, B), d = e._fwdClassPT) {
                            for (_ = {}, u = d.data; u;) _[u.p] = 1, u = u._next;
                            d.setRatio(1)
                        }
                        return (e._fwdClassPT = n).e = "=" !== t.charAt(1) ? t : c.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), e.setAttribute("class", n.e), r = y(e, l, f(e), a, _), e.setAttribute("class", c), n.data = r.firstMPT, e.style.cssText = p, n.xfirst = s.parse(e, r.difs, n, i)
                    }
                }), Te("clearProps", {
                    parser: function (e, t, o, s, n) {
                        return (n = new ve(e, o, 0, 0, n, 2)).setRatio = Je, n.e = t, n.pr = -10, n.data = s._tween, h = !0, n
                    }
                }), e = "bezier,throwProps,physicsProps,physics2D".split(","), Pe = e.length; Pe--;) Be(e[Pe]);

            function $e(e) {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            }(e = R.prototype)._firstPT = e._lastParsedTransform = e._transform = null, e._onInitTween = function (e, t, o, s) {
                if (!e.nodeType) return !1;
                this._target = V = e, this._tween = o, this._vars = t, E = s, U = t.autoRound, h = !1, T = t.suffixMap || R.suffixMap, B = ae(e, ""), m = this._overwriteProps;
                var n, i, a, r, l, d, _, u, c, p = e.style;
                if (v && "" === p.zIndex && ("auto" !== (n = re(e, "zIndex", B)) && "" !== n || this._addLazySet(p, "zIndex", 0)), "string" == typeof t && (r = p.cssText, n = f(e, B), p.cssText = r + ";" + t, n = y(e, n, f(e)).difs, !se && L.test(t) && (n.opacity = parseFloat(RegExp.$1)), t = n, p.cssText = r), t.className ? this._firstPT = i = b.className.parse(e, t.className, "className", this, null, null, t) : this._firstPT = i = this.parse(e, t, null), this._transformType) {
                    for (c = 3 === this._transformType, Ae ? S && (v = !0, "" === p.zIndex && ("auto" !== (_ = re(e, "zIndex", B)) && "" !== _ || this._addLazySet(p, "zIndex", 0)), P && this._addLazySet(p, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (c ? "visible" : "hidden"))) : p.zoom = 1, a = i; a && a._next;) a = a._next;
                    u = new ve(e, "transform", 0, 0, null, 2), this._linkCSSP(u, null, a), u.setRatio = Ae ? Qe : Fe, u.data = this._transform || ze(e, B, !0), u.tween = o, u.pr = -1, m.pop()
                }
                if (h) {
                    for (; i;) {
                        for (d = i._next, a = r; a && a.pr > i.pr;) a = a._next;
                        (i._prev = a ? a._prev : l) ? i._prev._next = i: r = i, (i._next = a) ? a._prev = i : l = i, i = d
                    }
                    this._firstPT = r
                }
                return !0
            }, e.parse = function (e, t, o, s) {
                var n, i, a, r, l, d, _, u, c, p, h = e.style;
                for (n in t) "function" == typeof (d = t[n]) && (d = d(E, V)), (i = b[n]) ? o = i.parse(e, d, n, this, o, s, t) : (l = re(e, n, B) + "", c = "string" == typeof d, "color" === n || "fill" === n || "stroke" === n || -1 !== n.indexOf("Color") || c && N.test(d) ? (c || (d = (3 < (d = he(d)).length ? "rgba(" : "rgb(") + d.join(",") + ")"), o = Se(h, n, l, d, !0, "transparent", o, 0, s)) : c && G.test(d) ? o = Se(h, n, l, d, !0, null, o, 0, s) : (_ = (a = parseFloat(l)) || 0 === a ? l.substr((a + "").length) : "", "" !== l && "auto" !== l || (_ = "width" === n || "height" === n ? (a = function (e, t, o) {
                    if ("svg" === (e.nodeName + "").toLowerCase()) return (o || ae(e))[t] || 0;
                    if (e.getBBox && He(e)) return e.getBBox()[t] || 0;
                    var s = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                        n = _e[t],
                        i = n.length;
                    for (o = o || ae(e, null); - 1 < --i;) s -= parseFloat(re(e, "padding" + n[i], o, !0)) || 0, s -= parseFloat(re(e, "border" + n[i] + "Width", o, !0)) || 0;
                    return s
                }(e, n, B), "px") : "left" === n || "top" === n ? (a = de(e, n, B), "px") : (a = "opacity" !== n ? 0 : 1, "")), "" === (u = (p = c && "=" === d.charAt(1)) ? (r = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), r *= parseFloat(d), d.replace(x, "")) : (r = parseFloat(d), c ? d.replace(x, "") : "")) && (u = n in T ? T[n] : _), d = r || 0 === r ? (p ? r + a : r) + u : t[n], _ !== u && "" !== u && (r || 0 === r) && a && (a = le(e, n, a, _), "%" === u ? (a /= le(e, n, 100, "%") / 100, !0 !== t.strictUnits && (l = a + "%")) : "em" === u || "rem" === u || "vw" === u || "vh" === u ? a /= le(e, n, 1, u) : "px" !== u && (r = le(e, n, r, u), u = "px"), p && (!r && 0 !== r || (d = r + a + u))), p && (r += a), !a && 0 !== a || !r && 0 !== r ? void 0 !== h[n] && (d || d + "" != "NaN" && null != d) ? (o = new ve(h, n, r || a || 0, 0, o, -1, n, !1, 0, l, d)).xs0 = "none" !== d || "display" !== n && -1 === n.indexOf("Style") ? d : l : g("invalid " + n + " tween value: " + t[n]) : (o = new ve(h, n, a, r - a, o, 0, n, !1 !== U && ("px" === u || "zIndex" === n), 0, l, d)).xs0 = u)), s && o && !o.plugin && (o.plugin = s);
                return o
            }, e.setRatio = function (e) {
                var t, o, s, n = this._firstPT;
                if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                        for (; n;) {
                            if (t = n.c * e + n.s, n.r ? t = Math.round(t) : t < 1e-6 && -1e-6 < t && (t = 0), n.type)
                                if (1 === n.type)
                                    if (2 === (s = n.l)) n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2;
                                    else if (3 === s) n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                            else if (4 === s) n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                            else if (5 === s) n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                            else {
                                for (o = n.xs0 + t + n.xs1, s = 1; s < n.l; s++) o += n["xn" + s] + n["xs" + (s + 1)];
                                n.t[n.p] = o
                            } else -1 === n.type ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(e);
                            else n.t[n.p] = t + n.xs0;
                            n = n._next
                        } else
                            for (; n;) 2 !== n.type ? n.t[n.p] = n.b : n.setRatio(e), n = n._next;
                    else
                        for (; n;) {
                            if (2 !== n.type)
                                if (n.r && -1 !== n.type)
                                    if (t = Math.round(n.s + n.c), n.type) {
                                        if (1 === n.type) {
                                            for (s = n.l, o = n.xs0 + t + n.xs1, s = 1; s < n.l; s++) o += n["xn" + s] + n["xs" + (s + 1)];
                                            n.t[n.p] = o
                                        }
                                    } else n.t[n.p] = t + n.xs0;
                            else n.t[n.p] = n.e;
                            else n.setRatio(e);
                            n = n._next
                        }
            }, e._enableTransforms = function (e) {
                this._transform = this._transform || ze(this._target, B, !0), this._transformType = this._transform.svg && Ce || !e && 3 !== this._transformType ? 2 : 3
            }, e._addLazySet = function (e, t, o) {
                var s = this._firstPT = new ve(e, t, 0, 0, this._firstPT, 2);
                s.e = o, s.setRatio = $e, s.data = this
            }, e._linkCSSP = function (e, t, o, s) {
                return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, s = !0), o ? o._next = e : s || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = o), e
            }, e._mod = function (e) {
                for (var t = this._firstPT; t;) "function" == typeof e[t.p] && e[t.p] === Math.round && (t.r = 1), t = t._next
            }, e._kill = function (e) {
                var t, o, s, n = e;
                if (e.autoAlpha || e.alpha) {
                    for (o in n = {}, e) n[o] = e[o];
                    n.opacity = 1, n.autoAlpha && (n.visibility = 1)
                }
                for (e.className && (t = this._classNamePT) && ((s = t.xfirst) && s._prev ? this._linkCSSP(s._prev, t._next, s._prev._prev) : s === this._firstPT && (this._firstPT = t._next), t._next && this._linkCSSP(t._next, t._next._next, s._prev), this._classNamePT = null), t = this._firstPT; t;) t.plugin && t.plugin !== o && t.plugin._kill && (t.plugin._kill(e), o = t.plugin), t = t._next;
                return i.prototype._kill.call(this, n)
            };
            var Ze = function (e, t, o) {
                var s, n, i, a;
                if (e.slice)
                    for (n = e.length; - 1 < --n;) Ze(e[n], t, o);
                else
                    for (n = (s = e.childNodes).length; - 1 < --n;) a = (i = s[n]).type, i.style && (t.push(f(i)), o && o.push(i)), 1 !== a && 9 !== a && 11 !== a || !i.childNodes.length || Ze(i, t, o)
            };
            return R.cascadeTo = function (e, t, o) {
                var s, n, i, a, r = M.to(e, t, o),
                    l = [r],
                    d = [],
                    _ = [],
                    u = [],
                    c = M._internals.reservedProps;
                for (e = r._targets || r.target, Ze(e, d, u), r.render(t, !0, !0), Ze(e, _), r.render(0, !0, !0), r._enabled(!0), s = u.length; - 1 < --s;)
                    if ((n = y(u[s], d[s], _[s])).firstMPT) {
                        for (i in n = n.difs, o) c[i] && (n[i] = o[i]);
                        for (i in a = {}, n) a[i] = d[s][i];
                        l.push(M.fromTo(u[s], t, a, n))
                    } return l
            }, i.activate([R]), R
        }, !0), _fwd_fwdScope.FWDFWD_fwdDefine("easing.Back", ["easing.Ease"], function (b) {
            function e(e, t) {
                var o = _("easing." + e, function () {}, !0),
                    s = o.prototype = new b;
                return s.constructor = o, s.getRatio = t, o
            }

            function t(e, t, o, s) {
                var n = _("easing." + e, {
                    easeOut: new t,
                    easeIn: new o,
                    easeInOut: new s
                }, !0);
                return u(n, e), n
            }

            function g(e, t, o) {
                this.t = e, this.v = t, o && (((this.next = o).prev = this).c = o.v - t, this.gap = o.t - e)
            }

            function o(e, t) {
                var o = _("easing." + e, function (e) {
                        this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                    }, !0),
                    s = o.prototype = new b;
                return s.constructor = o, s.getRatio = t, s.config = function (e) {
                    return new o(e)
                }, o
            }
            var s, n, i, a = _fwd_fwdScope.FWDGlobals || _fwd_fwdScope,
                r = a.com.fwd,
                l = 2 * Math.PI,
                d = Math.PI / 2,
                _ = r._class,
                u = b.register || function () {},
                c = t("Back", o("BackOut", function (e) {
                    return --e * e * ((this._p1 + 1) * e + this._p1) + 1
                }), o("BackIn", function (e) {
                    return e * e * ((this._p1 + 1) * e - this._p1)
                }), o("BackInOut", function (e) {
                    return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                })),
                p = _("easing.SlowMo", function (e, t, o) {
                    t = t || 0 === t ? t : .7, null == e ? e = .7 : 1 < e && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === o
                }, !0),
                h = p.prototype = new b;
            return h.constructor = p, h.getRatio = function (e) {
                var t = e + (.5 - e) * this._p;
                return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
            }, p.ease = new p(.7, .7), h.config = p.config = function (e, t, o) {
                return new p(e, t, o)
            }, (h = (s = _("easing.SteppedEase", function (e) {
                e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
            }, !0)).prototype = new b).constructor = s, h.getRatio = function (e) {
                return e < 0 ? e = 0 : 1 <= e && (e = .999999999), (this._p2 * e >> 0) * this._p1
            }, h.config = s.config = function (e) {
                return new s(e)
            }, (h = (n = _("easing.RoughEase", function (e) {
                for (var t, o, s, n, i, a, r = (e = e || {}).taper || "none", l = [], d = 0, _ = 0 | (e.points || 20), u = _, c = !1 !== e.randomize, p = !0 === e.clamp, h = e.template instanceof b ? e.template : null, m = "number" == typeof e.strength ? .4 * e.strength : .4; - 1 < --u;) t = c ? Math.random() : 1 / _ * u, o = h ? h.getRatio(t) : t, s = "none" === r ? m : "out" === r ? (n = 1 - t) * n * m : "in" === r ? t * t * m : t < .5 ? (n = 2 * t) * n * .5 * m : (n = 2 * (1 - t)) * n * .5 * m, c ? o += Math.random() * s - .5 * s : u % 2 ? o += .5 * s : o -= .5 * s, p && (1 < o ? o = 1 : o < 0 && (o = 0)), l[d++] = {
                    x: t,
                    y: o
                };
                for (l.sort(function (e, t) {
                        return e.x - t.x
                    }), a = new g(1, 1, null), u = _; - 1 < --u;) a = new g((i = l[u]).x, i.y, a);
                this._prev = new g(0, 0, 0 !== a.t ? a : a.next)
            }, !0)).prototype = new b).constructor = n, h.getRatio = function (e) {
                var t = this._prev;
                if (e > t.t) {
                    for (; t.next && e >= t.t;) t = t.next;
                    t = t.prev
                } else
                    for (; t.prev && e <= t.t;) t = t.prev;
                return (this._prev = t).v + (e - t.t) / t.gap * t.c
            }, h.config = function (e) {
                return new n(e)
            }, n.ease = new n, t("Bounce", e("BounceOut", function (e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }), e("BounceIn", function (e) {
                return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : e < 2 / 2.75 ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
            }), e("BounceInOut", function (e) {
                var t = e < .5;
                return (e = t ? 1 - 2 * e : 2 * e - 1) < 1 / 2.75 ? e *= 7.5625 * e : e = e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
            })), t("Circ", e("CircOut", function (e) {
                return Math.sqrt(1 - --e * e)
            }), e("CircIn", function (e) {
                return -(Math.sqrt(1 - e * e) - 1)
            }), e("CircInOut", function (e) {
                return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            })), t("Elastic", (i = function (e, t, o) {
                var s = _("easing." + e, function (e, t) {
                        this._p1 = 1 <= e ? e : 1, this._p2 = (t || o) / (e < 1 ? e : 1), this._p3 = this._p2 / l * (Math.asin(1 / this._p1) || 0), this._p2 = l / this._p2
                    }, !0),
                    n = s.prototype = new b;
                return n.constructor = s, n.getRatio = t, n.config = function (e, t) {
                    return new s(e, t)
                }, s
            })("ElasticOut", function (e) {
                return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
            }, .3), i("ElasticIn", function (e) {
                return -(this._p1 * Math.pow(2, 10 * --e) * Math.sin((e - this._p3) * this._p2))
            }, .3), i("ElasticInOut", function (e) {
                return (e *= 2) < 1 ? this._p1 * Math.pow(2, 10 * --e) * Math.sin((e - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * --e) * Math.sin((e - this._p3) * this._p2) * .5 + 1
            }, .45)), t("Expo", e("ExpoOut", function (e) {
                return 1 - Math.pow(2, -10 * e)
            }), e("ExpoIn", function (e) {
                return Math.pow(2, 10 * (e - 1)) - .001
            }), e("ExpoInOut", function (e) {
                return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
            })), t("Sine", e("SineOut", function (e) {
                return Math.sin(e * d)
            }), e("SineIn", function (e) {
                return 1 - Math.cos(e * d)
            }), e("SineInOut", function (e) {
                return -.5 * (Math.cos(Math.PI * e) - 1)
            })), _("easing.EaseLookup", {
                find: function (e) {
                    return b.map[e]
                }
            }, !0), u(a.SlowMo, "SlowMo", "ease,"), u(n, "RoughEase", "ease,"), u(s, "SteppedEase", "ease,"), c
        }, !0)
    }), _fwd_fwdScope.FWDFWD_fwdDefine && _fwd_fwdScope._fwd_fwdQueue.pop()(), function (p, h) {
        "use strict";
        var m = {},
            b = p.FWDGlobals = p.FWDGlobals || p;
        if (!b.FWDTweenLite) {
            var g, t, o, f = function (e) {
                    for (var t = e.split("."), o = b, s = 0; s < t.length; s++) o[t[s]] = o = o[t[s]] || {};
                    return o
                },
                u = f("com.fwd"),
                y = 1e-10,
                l = function (e) {
                    for (var t = [], o = e.length, s = 0; s !== o; t.push(e[s++]));
                    return t
                },
                s = function () {},
                v = (t = Object.prototype.toString, o = t.call([]), function (e) {
                    return null != e && (e instanceof Array || "object" == typeof e && !!e.push && t.call(e) === o)
                }),
                S = {},
                P = function (l, d, _, u) {
                    this.sc = S[l] ? S[l].sc : [], (S[l] = this).gsClass = null, this.func = _;
                    var c = [];
                    this.check = function (e) {
                        for (var t, o, s, n, i, a = d.length, r = a; - 1 < --a;)(t = S[d[a]] || new P(d[a], [])).gsClass ? (c[a] = t.gsClass, r--) : e && t.sc.push(this);
                        if (0 === r && _) {
                            if (s = (o = ("com.fwd." + l).split(".")).pop(), n = f(o.join("."))[s] = this.gsClass = _.apply(_, c), u)
                                if (b[s] = m[s] = n, !(i = "undefined" != typeof fwd_module && fwd_module.exports) && "function" == typeof define && define.amd) define((p.FWDAMDPath ? p.FWDAMDPath + "/" : "") + l.split(".").pop(), [], function () {
                                    return n
                                });
                                else if (i)
                                if (l === h)
                                    for (a in fwd_module.exports = m[h] = n, m) n[a] = m[a];
                                else m[h] && (m[h][s] = n);
                            for (a = 0; a < this.sc.length; a++) this.sc[a].check()
                        }
                    }, this.check(!0)
                },
                n = p.FWDFWD_fwdDefine = function (e, t, o, s) {
                    return new P(e, t, o, s)
                },
                c = u._class = function (e, t, o) {
                    return t = t || function () {}, n(e, [], function () {
                        return t
                    }, o), t
                };
            n.globals = b;
            var i = [0, 0, 1, 1],
                w = c("easing.Ease", function (e, t, o, s) {
                    this._func = e, this._type = o || 0, this._power = s || 0, this._params = t ? i.concat(t) : i
                }, !0),
                T = w.map = {},
                e = w.register = function (e, t, o, s) {
                    for (var n, i, a, r, l = t.split(","), d = l.length, _ = (o || "easeIn,easeOut,easeInOut").split(","); - 1 < --d;)
                        for (i = l[d], n = s ? c("easing." + i, null, !0) : u.easing[i] || {}, a = _.length; - 1 < --a;) r = _[a], T[i + "." + r] = T[r + i] = n[r] = e.getRatio ? e : e[r] || new e
                };
            for ((te = w.prototype)._calcEnd = !1, te.getRatio = function (e) {
                    if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                    var t = this._type,
                        o = this._power,
                        s = 1 === t ? 1 - e : 2 === t ? e : e < .5 ? 2 * e : 2 * (1 - e);
                    return 1 === o ? s *= s : 2 === o ? s *= s * s : 3 === o ? s *= s * s * s : 4 === o && (s *= s * s * s * s), 1 === t ? 1 - s : 2 === t ? s : e < .5 ? s / 2 : 1 - s / 2
                }, r = (a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; - 1 < --r;) te = a[r] + ",Power" + r, e(new w(null, null, 1, r), te, "easeOut", !0), e(new w(null, null, 2, r), te, "easeIn" + (0 === r ? ",easeNone" : "")), e(new w(null, null, 3, r), te, "easeInOut");
            T.linear = u.easing.Linear.easeIn, T.swing = u.easing.Quad.easeInOut;
            var B = c("events.EventDispatcher", function (e) {
                this._listeners = {}, this._eventTarget = e || this
            });
            (te = B.prototype).addEventListener = function (e, t, o, s, n) {
                n = n || 0;
                var i, a, r = this._listeners[e],
                    l = 0;
                for (this !== U || g || U.wake(), null == r && (this._listeners[e] = r = []), a = r.length; - 1 < --a;)(i = r[a]).c === t && i.s === o ? r.splice(a, 1) : 0 === l && i.pr < n && (l = a + 1);
                r.splice(l, 0, {
                    c: t,
                    s: o,
                    up: s,
                    pr: n
                })
            }, te.removeEventListener = function (e, t) {
                var o, s = this._listeners[e];
                if (s)
                    for (o = s.length; - 1 < --o;)
                        if (s[o].c === t) return void s.splice(o, 1)
            }, te.dispatchEvent = function (e) {
                var t, o, s, n = this._listeners[e];
                if (n)
                    for (1 < (t = n.length) && (n = n.slice(0)), o = this._eventTarget; - 1 < --t;)(s = n[t]) && (s.up ? s.c.call(s.s || o, {
                        type: e,
                        target: o
                    }) : s.c.call(s.s || o))
            };
            for (var a, D = p.requestAnimationFrame, W = p.cancelAnimationFrame, F = Date.now || function () {
                    return (new Date).getTime()
                }, H = F(), r = (a = ["ms", "moz", "webkit", "o"]).length; - 1 < --r && !D;) D = p[a[r] + "RequestAnimationFrame"], W = p[a[r] + "CancelAnimationFrame"] || p[a[r] + "CancelRequestAnimationFrame"];
            c("Ticker", function (e, t) {
                var n, i, a, r, l, d = this,
                    _ = F(),
                    o = !(!1 === t || !D) && "auto",
                    u = 500,
                    c = 33,
                    p = function (e) {
                        var t, o, s = F() - H;
                        u < s && (_ += s - c), H += s, d.time = (H - _) / 1e3, t = d.time - l, (!n || 0 < t || !0 === e) && (d.frame++, l += t + (r <= t ? .004 : r - t), o = !0), !0 !== e && (a = i(p)), o && d.dispatchEvent("tick")
                    };
                B.call(d), d.time = d.frame = 0, d.tick = function () {
                    p(!0)
                }, d.lagSmoothing = function (e, t) {
                    u = e || 1e10, c = Math.min(t, u, 0)
                }, d.sleep = function () {
                    null != a && ((o && W ? W : clearTimeout)(a), i = s, a = null, d === U && (g = !1))
                }, d.wake = function (e) {
                    null !== a ? d.sleep() : e ? _ += -H + (H = F()) : 10 < d.frame && (H = F() - u + 5), i = 0 === n ? s : o && D ? D : function (e) {
                        return setTimeout(e, 1e3 * (l - d.time) + 1 | 0)
                    }, d === U && (g = !0), p(2)
                }, d.fps = function (e) {
                    if (!arguments.length) return n;
                    r = 1 / ((n = e) || 60), l = this.time + r, d.wake()
                }, d.useRAF = function (e) {
                    if (!arguments.length) return o;
                    d.sleep(), o = e, d.fps(n)
                }, d.fps(e), setTimeout(function () {
                    "auto" === o && d.frame < 5 && "hidden" !== document.visibilityState && d.useRAF(!1)
                }, 1500)
            }), (te = u.Ticker.prototype = new u.events.EventDispatcher).constructor = u.Ticker;
            var d = c("core.FWDAnimation", function (e, t) {
                    var o;
                    this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = !0 === t.immediateRender, this.data = t.data, this._reversed = !0 === t.reversed, Q && (g || U.wake(), (o = this.vars.useFrames ? z : Q).add(this, o._time), this.vars.paused && this.paused(!0))
                }),
                U = d.ticker = new u.Ticker;
            (te = d.prototype)._dirty = te._gc = te._initted = te._paused = !1, te._totalTime = te._time = 0, te._rawPrevTime = -1, te._next = te._last = te._onUpdate = te._timeline = te.timeline = null, te._paused = !1;
            var _ = function () {
                g && 2e3 < F() - H && U.wake(), setTimeout(_, 2e3)
            };
            _(), te.play = function (e, t) {
                return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
            }, te.pause = function (e, t) {
                return null != e && this.seek(e, t), this.paused(!0)
            }, te.resume = function (e, t) {
                return null != e && this.seek(e, t), this.paused(!1)
            }, te.seek = function (e, t) {
                return this.totalTime(Number(e), !1 !== t)
            }, te.restart = function (e, t) {
                return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, !1 !== t, !0)
            }, te.reverse = function (e, t) {
                return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
            }, te.render = function (e, t, o) {}, te.invalidate = function () {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
            }, te.isActive = function () {
                var e, t = this._timeline,
                    o = this._startTime;
                return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= o && e < o + this.totalDuration() / this._timeScale
            }, te._enabled = function (e, t) {
                return g || U.wake(), this._gc = !e, this._active = this.isActive(), !0 !== t && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
            }, te._kill = function (e, t) {
                return this._enabled(!1, !1)
            }, te.kill = function (e, t) {
                return this._kill(e, t), this
            }, te._uncache = function (e) {
                for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
                return this
            }, te._swapSelfInParams = function (e) {
                for (var t = e.length, o = e.concat(); - 1 < --t;) "{self}" === e[t] && (o[t] = this);
                return o
            }, te._callback = function (e) {
                var t = this.vars,
                    o = t[e],
                    s = t[e + "Params"],
                    n = t[e + "Scope"] || t.callbackScope || this;
                switch (s ? s.length : 0) {
                    case 0:
                        o.call(n);
                        break;
                    case 1:
                        o.call(n, s[0]);
                        break;
                    case 2:
                        o.call(n, s[0], s[1]);
                        break;
                    default:
                        o.apply(n, s)
                }
            }, te.eventCallback = function (e, t, o, s) {
                if ("on" === (e || "").substr(0, 2)) {
                    var n = this.vars;
                    if (1 === arguments.length) return n[e];
                    null == t ? delete n[e] : (n[e] = t, n[e + "Params"] = v(o) && -1 !== o.join("").indexOf("{self}") ? this._swapSelfInParams(o) : o, n[e + "Scope"] = s), "onUpdate" === e && (this._onUpdate = t)
                }
                return this
            }, te.delay = function (e) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
            }, te.duration = function (e) {
                return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, te.totalDuration = function (e) {
                return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
            }, te.time = function (e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
            }, te.totalTime = function (e, t, o) {
                if (g || U.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (e < 0 && !o && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            n = this._timeline;
                        if (s < e && !o && (e = s), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? s - e : e) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                            for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
                    }
                    this._gc && this._enabled(!0, !1), this._totalTime === e && 0 !== this._duration || (O.length && q(), this.render(e, t, !1), O.length && q())
                }
                return this
            }, te.progress = te.totalProgress = function (e, t) {
                var o = this.duration();
                return arguments.length ? this.totalTime(o * e, t) : o ? this._time / o : this.ratio
            }, te.startTime = function (e) {
                return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
            }, te.endTime = function (e) {
                return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
            }, te.timeScale = function (e) {
                return arguments.length ? (e = e || y, this._timeline && this._timeline.smoothChildTiming && (o = (t = this._pauseTime) || 0 === t ? t : this._timeline.totalTime(), this._startTime = o - (o - this._startTime) * this._timeScale / e), this._timeScale = e, this._uncache(!1)) : this._timeScale;
                var t, o
            }, te.reversed = function (e) {
                return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, te.paused = function (e) {
                if (!arguments.length) return this._paused;
                var t, o, s = this._timeline;
                return e != this._paused && s && (g || e || U.wake(), o = (t = s.rawTime()) - this._pauseTime, !e && s.smoothChildTiming && (this._startTime += o, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = this.isActive(), !e && 0 != o && this._initted && this.duration() && (t = s.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, this.render(t, t === this._totalTime, !0))), this._gc && !e && this._enabled(!0, !1), this
            };
            var C = c("core.FWDSimpleTimeline", function (e) {
                d.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            (te = C.prototype = new d).constructor = C, te.kill()._gc = !1, te._first = te._last = te._recent = null, te._sortChildren = !1, te.add = te.insert = function (e, t, o, s) {
                var n, i;
                if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), n = this._last, this._sortChildren)
                    for (i = e._startTime; n && n._startTime > i;) n = n._prev;
                return n ? (e._next = n._next, n._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = n, this._recent = e, this._timeline && this._uncache(!0), this
            }, te._remove = function (e, t) {
                return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, te.render = function (e, t, o) {
                var s, n = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = e; n;) s = n._next, (n._active || e >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, o) : n.render((e - n._startTime) * n._timeScale, t, o)), n = s
            }, te.rawTime = function () {
                return g || U.wake(), this._totalTime
            };
            var V = c("FWDTweenLite", function (e, t, o) {
                    if (d.call(this, t, o), this.render = V.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" == typeof e && V.selector(e) || e;
                    var s, n, i, a = e.jquery || e.length && e !== p && e[0] && (e[0] === p || e[0].nodeType && e[0].style && !e.nodeType),
                        r = this.vars.overwrite;
                    if (this._overwrite = r = null == r ? X[V.defaultOverwrite] : "number" == typeof r ? r >> 0 : X[r], (a || e instanceof Array || e.push && v(e)) && "number" != typeof e[0])
                        for (this._targets = i = l(e), this._propLookup = [], this._siblings = [], s = 0; s < i.length; s++)(n = i[s]) ? "string" != typeof n ? n.length && n !== p && n[0] && (n[0] === p || n[0].nodeType && n[0].style && !n.nodeType) ? (i.splice(s--, 1), this._targets = i = i.concat(l(n))) : (this._siblings[s] = K(n, this, !1), 1 === r && 1 < this._siblings[s].length && $(n, this, null, 1, this._siblings[s])) : "string" == typeof (n = i[s--] = V.selector(n)) && i.splice(s + 1, 1) : i.splice(s--, 1);
                    else this._propLookup = {}, this._siblings = K(e, this, !1), 1 === r && 1 < this._siblings.length && $(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === t && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -y, this.render(Math.min(0, -this._delay)))
                }, !0),
                E = function (e) {
                    return e && e.length && e !== p && e[0] && (e[0] === p || e[0].nodeType && e[0].style && !e.nodeType)
                };
            (te = V.prototype = new d).constructor = V, te.kill()._gc = !1, te.ratio = 0, te._firstPT = te._targets = te._overwrittenProps = te._startAt = null, te._notifyPluginsOfEnabled = te._lazy = !1, V.version = "1.19.0", V.defaultEase = te._ease = new w(null, null, 1, 1), V.defaultOverwrite = "auto", V.ticker = U, V.autoSleep = 120, V.lagSmoothing = function (e, t) {
                U.lagSmoothing(e, t)
            }, V.selector = p.$ || p.jQuery || function (e) {
                var t = p.$ || p.jQuery;
                return t ? (V.selector = t)(e) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var O = [],
                I = {},
                x = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                A = function (e) {
                    for (var t, o = this._firstPT; o;) t = o.blob ? e ? this.join("") : this.start : o.c * e + o.s, o.m ? t = o.m(t, this._target || o.t) : t < 1e-6 && -1e-6 < t && (t = 0), o.f ? o.fp ? o.t[o.p](o.fp, t) : o.t[o.p](t) : o.t[o.p] = t, o = o._next
                },
                k = function (e, t, o, s) {
                    var n, i, a, r, l, d, _, u = [e, t],
                        c = 0,
                        p = "",
                        h = 0;
                    for (u.start = e, o && (o(u), e = u[0], t = u[1]), u.length = 0, n = e.match(x) || [], i = t.match(x) || [], s && (s._next = null, s.blob = 1, u._firstPT = u._applyPT = s), l = i.length, r = 0; r < l; r++) _ = i[r], p += (d = t.substr(c, t.indexOf(_, c) - c)) || !r ? d : ",", c += d.length, h ? h = (h + 1) % 5 : "rgba(" === d.substr(-5) && (h = 1), _ === n[r] || n.length <= r ? p += _ : (p && (u.push(p), p = ""), a = parseFloat(n[r]), u.push(a), u._firstPT = {
                        _next: u._firstPT,
                        t: u,
                        p: u.length - 1,
                        s: a,
                        c: ("=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * parseFloat(_.substr(2)) : parseFloat(_) - a) || 0,
                        f: 0,
                        m: h && h < 4 ? Math.round : 0
                    }), c += _.length;
                    return (p += t.substr(c)) && u.push(p), u.setRatio = A, u
                },
                L = function (e, t, o, s, n, i, a, r, l) {
                    "function" == typeof s && (s = s(l || 0, e));
                    var d, _ = "get" === o ? e[t] : o,
                        u = typeof e[t],
                        c = "string" == typeof s && "=" === s.charAt(1),
                        p = {
                            t: e,
                            p: t,
                            s: _,
                            f: "function" == u,
                            pg: 0,
                            n: n || t,
                            m: i ? "function" == typeof i ? i : Math.round : 0,
                            pr: 0,
                            c: c ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - _ || 0
                        };
                    if ("number" != u && ("function" == u && "get" === o && (d = t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3), p.s = _ = a ? e[d](a) : e[d]()), "string" == typeof _ && (a || isNaN(_)) ? (p.fp = a, p = {
                            t: k(_, s, r || V.defaultStringFilter, p),
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 2,
                            pg: 0,
                            n: n || t,
                            pr: 0,
                            m: 0
                        }) : c || (p.s = parseFloat(_), p.c = parseFloat(s) - p.s || 0)), p.c) return (p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p
                },
                M = V._internals = {
                    isArray: v,
                    isSelector: E,
                    lazyTweens: O,
                    blobDif: k
                },
                R = V._plugins = {},
                N = M.tweenLookup = {},
                Y = 0,
                j = M.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1
                },
                X = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0
                },
                z = d._rootFramesTimeline = new C,
                Q = d._rootTimeline = new C,
                G = 30,
                q = M.lazyRender = function () {
                    var e, t = O.length;
                    for (I = {}; - 1 < --t;)(e = O[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                    O.length = 0
                };
            Q._startTime = U.time, z._startTime = U.frame, Q._active = z._active = !0, setTimeout(q, 1), d._updateRoot = V.render = function () {
                var e, t, o;
                if (O.length && q(), Q.render((U.time - Q._startTime) * Q._timeScale, !1, !1), z.render((U.frame - z._startTime) * z._timeScale, !1, !1), O.length && q(), U.frame >= G) {
                    for (o in G = U.frame + (parseInt(V.autoSleep, 10) || 120), N) {
                        for (e = (t = N[o].tweens).length; - 1 < --e;) t[e]._gc && t.splice(e, 1);
                        0 === t.length && delete N[o]
                    }
                    if ((!(o = Q._first) || o._paused) && V.autoSleep && !z._first && 1 === U._listeners.tick.length) {
                        for (; o && o._paused;) o = o._next;
                        o || U.sleep()
                    }
                }
            }, U.addEventListener("tick", d._updateRoot);
            var K = function (e, t, o) {
                    var s, n, i = e._fwdTweenID;
                    if (N[i || (e._fwdTweenID = i = "t" + Y++)] || (N[i] = {
                            target: e,
                            tweens: []
                        }), t && ((s = N[i].tweens)[n = s.length] = t, o))
                        for (; - 1 < --n;) s[n] === t && s.splice(n, 1);
                    return N[i].tweens
                },
                J = function (e, t, o, s) {
                    var n, i, a = e.vars.onOverwrite;
                    return a && (n = a(e, t, o, s)), (a = V.onOverwrite) && (i = a(e, t, o, s)), !1 !== n && !1 !== i
                },
                $ = function (e, t, o, s, n) {
                    var i, a, r;
                    if (1 === s || 4 <= s) {
                        for (r = n.length, p = 0; p < r; p++)
                            if ((a = n[p]) !== t) a._gc || a._kill(null, e, t) && (i = !0);
                            else if (5 === s) break;
                        return i
                    }
                    for (var l, d = t._startTime + y, _ = [], u = 0, c = 0 === t._duration, p = n.length; - 1 < --p;)(a = n[p]) === t || a._gc || a._paused || (a._timeline !== t._timeline ? (l = l || Z(t, 0, c), 0 === Z(a, l, c) && (_[u++] = a)) : a._startTime <= d && a._startTime + a.totalDuration() / a._timeScale > d && ((c || !a._initted) && d - a._startTime <= 2e-10 || (_[u++] = a)));
                    for (p = u; - 1 < --p;)
                        if (a = _[p], 2 === s && a._kill(o, e, t) && (i = !0), 2 !== s || !a._firstPT && a._initted) {
                            if (2 !== s && !J(a, t)) continue;
                            a._enabled(!1, !1) && (i = !0)
                        } return i
                },
                Z = function (e, t, o) {
                    for (var s = e._timeline, n = s._timeScale, i = e._startTime; s._timeline;) {
                        if (i += s._startTime, n *= s._timeScale, s._paused) return -100;
                        s = s._timeline
                    }
                    return t < (i /= n) ? i - t : o && i === t || !e._initted && i - t < 2 * y ? y : (i += e.totalDuration() / e._timeScale / n) > t + y ? 0 : i - t - y
                };
            te._init = function () {
                var e, t, o, s, n, i, a = this.vars,
                    r = this._overwrittenProps,
                    l = this._duration,
                    d = !!a.immediateRender,
                    _ = a.ease;
                if (a.startAt) {
                    for (s in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), n = {}, a.startAt) n[s] = a.startAt[s];
                    if (n.overwrite = !1, n.immediateRender = !0, n.lazy = d && !1 !== a.lazy, n.startAt = n.delay = null, this._startAt = V.to(this.target, 0, n), d)
                        if (0 < this._time) this._startAt = null;
                        else if (0 !== l) return
                } else if (a.runBackwards && 0 !== l)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        for (s in 0 !== this._time && (d = !1), o = {}, a) j[s] && "autoCSS" !== s || (o[s] = a[s]);
                        if (o.overwrite = 0, o.data = "isFromStart", o.lazy = d && !1 !== a.lazy, o.immediateRender = d, this._startAt = V.to(this.target, 0, o), d) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    } if (this._ease = _ = _ ? _ instanceof w ? _ : "function" == typeof _ ? new w(_, a.easeParams) : T[_] || V.defaultEase : V.defaultEase, a.easeParams instanceof Array && _.config && (this._ease = _.config.apply(_, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (i = this._targets.length, e = 0; e < i; e++) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], r ? r[e] : null, e) && (t = !0);
                else t = this._initProps(this.target, this._propLookup, this._siblings, r, 0);
                if (t && V._onPluginEvent("_onInitAllProps", this), r && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
                    for (o = this._firstPT; o;) o.s += o.c, o.c = -o.c, o = o._next;
                this._onUpdate = a.onUpdate, this._initted = !0
            }, te._initProps = function (e, t, o, s, n) {
                var i, a, r, l, d, _;
                if (null == e) return !1;
                for (i in I[e._fwdTweenID] && q(), this.vars.css || e.style && e !== p && e.nodeType && R.css && !1 !== this.vars.autoCSS && function (e, t) {
                        var o, s = {};
                        for (o in e) j[o] || o in t && "transform" !== o && "x" !== o && "y" !== o && "width" !== o && "height" !== o && "className" !== o && "border" !== o || !(!R[o] || R[o] && R[o]._autoCSS) || (s[o] = e[o], delete e[o]);
                        e.css = s
                    }(this.vars, e), this.vars)
                    if (_ = this.vars[i], j[i]) _ && (_ instanceof Array || _.push && v(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[i] = _ = this._swapSelfInParams(_, this));
                    else if (R[i] && (l = new R[i])._onInitTween(e, this.vars[i], this, n)) {
                    for (this._firstPT = d = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: i,
                            pg: 1,
                            pr: l._priority,
                            m: 0
                        }, a = l._overwriteProps.length; - 1 < --a;) t[l._overwriteProps[a]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (r = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), d._next && (d._next._prev = d)
                } else t[i] = L.call(this, e, i, "get", _, i, 0, null, this.vars.stringFilter, n);
                return s && this._kill(s, e) ? this._initProps(e, t, o, s, n) : 1 < this._overwrite && this._firstPT && 1 < o.length && $(e, this, t, this._overwrite, o) ? (this._kill(t, e), this._initProps(e, t, o, s, n)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (I[e._fwdTweenID] = !0), r)
            }, te.render = function (e, t, o) {
                var s, n, i, a, r, l, d, _ = this._time,
                    u = this._duration,
                    c = this._rawPrevTime;
                if (u - 1e-7 <= e ? (this._totalTime = this._time = u, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, n = "onComplete", o = o || this._timeline.autoRemoveChildren), 0 === u && (!this._initted && this.vars.lazy && !o || (this._startTime === this._timeline._duration && (e = 0), (c < 0 || e <= 0 && -1e-7 <= e || c === y && "isPause" !== this.data) && c !== e && (o = !0, y < c && (n = "onReverseComplete")), this._rawPrevTime = a = !t || e || c === e ? e : y))) : e < 1e-7 ? (this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== _ || 0 === u && 0 < c) && (n = "onReverseComplete", s = this._reversed), e < 0 && (this._active = !1, 0 === u && (!this._initted && this.vars.lazy && !o || (0 <= c && (c !== y || "isPause" !== this.data) && (o = !0), this._rawPrevTime = a = !t || e || c === e ? e : y))), this._initted || (o = !0)) : (this._totalTime = this._time = e, this._easeType ? (r = e / u, (1 === (l = this._easeType) || 3 === l && .5 <= r) && (r = 1 - r), 3 === l && (r *= 2), 1 === (d = this._easePower) ? r *= r : 2 === d ? r *= r * r : 3 === d ? r *= r * r * r : 4 === d && (r *= r * r * r * r), this.ratio = 1 === l ? 1 - r : 2 === l ? r : e / u < .5 ? r / 2 : 1 - r / 2) : this.ratio = this._ease.getRatio(e / u)), this._time !== _ || o) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!o && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = _, this._rawPrevTime = c, O.push(this), void(this._lazy = [e, t]);
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / u) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== _ && 0 <= e && (this._active = !0), 0 === _ && (this._startAt && (0 <= e ? this._startAt.render(e, t, o) : n = n || "_dummyGS"), this.vars.onStart && (0 === this._time && 0 !== u || t || this._callback("onStart"))), i = this._firstPT; i;) i.f ? i.t[i.p](i.c * this.ratio + i.s) : i.t[i.p] = i.c * this.ratio + i.s, i = i._next;
                    this._onUpdate && (e < 0 && this._startAt && -1e-4 !== e && this._startAt.render(e, t, o), t || (this._time !== _ || s || o) && this._callback("onUpdate")), n && (this._gc && !o || (e < 0 && this._startAt && !this._onUpdate && -1e-4 !== e && this._startAt.render(e, t, o), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[n] && this._callback(n), 0 === u && this._rawPrevTime === y && a !== y && (this._rawPrevTime = 0)))
                }
            }, te._kill = function (e, t, o) {
                if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                t = "string" != typeof t ? t || this._targets || this.target : V.selector(t) || t;
                var s, n, i, a, r, l, d, _, u, c = o && this._time && o._startTime === this._startTime && this._timeline === o._timeline;
                if ((v(t) || E(t)) && "number" != typeof t[0])
                    for (s = t.length; - 1 < --s;) this._kill(e, t[s], o) && (l = !0);
                else {
                    if (this._targets) {
                        for (s = this._targets.length; - 1 < --s;)
                            if (t === this._targets[s]) {
                                r = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[s] = e ? this._overwrittenProps[s] || {} : "all";
                                break
                            }
                    } else {
                        if (t !== this.target) return !1;
                        r = this._propLookup, n = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                    }
                    if (r) {
                        if (d = e || r, _ = e !== n && "all" !== n && e !== r && ("object" != typeof e || !e._tempKill), o && (V.onOverwrite || this.vars.onOverwrite)) {
                            for (i in d) r[i] && (u = u || []).push(i);
                            if ((u || !e) && !J(this, o, t, u)) return !1
                        }
                        for (i in d)(a = r[i]) && (c && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(d) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete r[i]), _ && (n[i] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, te.invalidate = function () {
                return this._notifyPluginsOfEnabled && V._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], d.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -y, this.render(Math.min(0, -this._delay))), this
            }, te._enabled = function (e, t) {
                if (g || U.wake(), e && this._gc) {
                    var o, s = this._targets;
                    if (s)
                        for (o = s.length; - 1 < --o;) this._siblings[o] = K(s[o], this, !0);
                    else this._siblings = K(this.target, this, !0)
                }
                return d.prototype._enabled.call(this, e, t), !(!this._notifyPluginsOfEnabled || !this._firstPT) && V._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
            }, V.to = function (e, t, o) {
                return new V(e, t, o)
            }, V.from = function (e, t, o) {
                return o.runBackwards = !0, o.immediateRender = 0 != o.immediateRender, new V(e, t, o)
            }, V.fromTo = function (e, t, o, s) {
                return s.startAt = o, s.immediateRender = 0 != s.immediateRender && 0 != o.immediateRender, new V(e, t, s)
            }, V.delayedCall = function (e, t, o, s, n) {
                return new V(t, 0, {
                    delay: e,
                    onComplete: t,
                    onCompleteParams: o,
                    callbackScope: s,
                    onReverseComplete: t,
                    onReverseCompleteParams: o,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: n,
                    overwrite: 0
                })
            }, V.set = function (e, t) {
                return new V(e, 0, t)
            }, V.getTweensOf = function (e, t) {
                if (null == e) return [];
                var o, s, n, i;
                if (e = "string" == typeof e && V.selector(e) || e, (v(e) || E(e)) && "number" != typeof e[0]) {
                    for (o = e.length, s = []; - 1 < --o;) s = s.concat(V.getTweensOf(e[o], t));
                    for (o = s.length; - 1 < --o;)
                        for (i = s[o], n = o; - 1 < --n;) i === s[n] && s.splice(o, 1)
                } else
                    for (o = (s = K(e).concat()).length; - 1 < --o;)(s[o]._gc || t && !s[o].isActive()) && s.splice(o, 1);
                return s
            }, V.killTweensOf = V.killDelayedCallsTo = function (e, t, o) {
                "object" == typeof t && (o = t, t = !1);
                for (var s = V.getTweensOf(e, t), n = s.length; - 1 < --n;) s[n]._kill(o, e)
            };
            var ee = c("plugins.TweenPlugin", function (e, t) {
                    this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = ee.prototype
                }, !0),
                te = ee.prototype;
            if (ee.version = "1.19.0", ee.API = 2, te._firstPT = null, te._addTween = L, te.setRatio = A, te._kill = function (e) {
                    var t, o = this._overwriteProps,
                        s = this._firstPT;
                    if (null != e[this._propName]) this._overwriteProps = [];
                    else
                        for (t = o.length; - 1 < --t;) null != e[o[t]] && o.splice(t, 1);
                    for (; s;) null != e[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1
                }, te._mod = te._roundProps = function (e) {
                    for (var t, o = this._firstPT; o;)(t = e[this._propName] || null != o.n && e[o.n.split(this._propName + "_").join("")]) && "function" == typeof t && (2 === o.f ? o.t._applyPT.m = t : o.m = t), o = o._next
                }, V._onPluginEvent = function (e, t) {
                    var o, s, n, i, a, r = t._firstPT;
                    if ("_onInitAllProps" === e) {
                        for (; r;) {
                            for (a = r._next, s = n; s && s.pr > r.pr;) s = s._next;
                            (r._prev = s ? s._prev : i) ? r._prev._next = r: n = r, (r._next = s) ? s._prev = r : i = r, r = a
                        }
                        r = t._firstPT = n
                    }
                    for (; r;) r.pg && "function" == typeof r.t[e] && r.t[e]() && (o = !0), r = r._next;
                    return o
                }, ee.activate = function (e) {
                    for (var t = e.length; - 1 < --t;) e[t].API === ee.API && (R[(new e[t])._propName] = e[t]);
                    return !0
                }, n.plugin = function (e) {
                    if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                    var t, o = e.propName,
                        s = e.priority || 0,
                        n = e.overwriteProps,
                        i = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_mod",
                            mod: "_mod",
                            initAll: "_onInitAllProps"
                        },
                        a = c("plugins." + o.charAt(0).toUpperCase() + o.substr(1) + "Plugin", function () {
                            ee.call(this, o, s), this._overwriteProps = n || []
                        }, !0 === e.fwd_global),
                        r = a.prototype = new ee(o);
                    for (t in (r.constructor = a).API = e.API, i) "function" == typeof e[t] && (r[i[t]] = e[t]);
                    return a.version = e.version, ee.activate([a]), a
                }, a = p._fwd_fwdQueue) {
                for (r = 0; r < a.length; r++) a[r]();
                for (te in S) S[te].func || p.console.log("FWDAnimation encountered missing dependency: " + te)
            }
            g = !1
        }
    }("undefined" != typeof fwd_module && fwd_module.exports && "undefined" != typeof fwd_global ? fwd_global : this || window, "FWDAnimation")),
    function (e) {
        var t = function () {
            var n = this;
            t.prototype;
            n.main_do = null, n.init = function () {
                n.setupScreen(), e.onerror = n.showError, n.screen.style.zIndex = 1e25, setTimeout(n.addConsoleToDom, 100), setInterval(n.position, 100)
            }, n.position = function () {
                var e = FWDUVPUtils.getScrollOffsets();
                n.setX(e.x), n.setY(e.y)
            }, n.addConsoleToDom = function () {
                -1 != navigator.userAgent.toLowerCase().indexOf("msie 7") ? document.getElementsByTagName("body")[0].appendChild(n.screen) : document.documentElement.appendChild(n.screen)
            }, n.setupScreen = function () {
                n.main_do = new FWDUVPDisplayObject("div", "absolute"), n.main_do.setOverflow("auto"), n.main_do.setWidth(300), n.main_do.setHeight(100), n.setWidth(300), n.setHeight(100), n.main_do.setBkColor("#FFFFFF"), n.addChild(n.main_do)
            }, n.showError = function (e, t, o) {
                var s = n.main_do.getInnerHTML() + "<br>JavaScript error: " + e + " on line " + o + " for " + t;
                n.main_do.setInnerHTML(s), n.main_do.screen.scrollTop = n.main_do.screen.scrollHeight
            }, n.log = function (e) {
                var t = n.main_do.getInnerHTML() + "<br>" + e;
                n.main_do.setInnerHTML(t), n.main_do.getScreen().scrollTop = 1e4
            }, n.init()
        };
        t.setPrototype = function () {
            t.prototype = new FWDUVPDisplayObject("div", "absolute")
        }, t.prototype = null, e.FWDConsole = t
    }(window),
    function (e) {
        var p = function (e, t, o, s, n, i, a, r, l, d, _, u) {
            var c = this;
            p.prototype;
            c.main_do = null, c.icon_do = null, c.iconS_do = null, c.bk_do = null, c.text_do = null, c.border_do = null, c.thumbHolder_do = null, c.icon_img = e, c.useHEX = d, c.nBC = _, c.sBC = u, c.borderNColor_str = n, c.borderSColor_str = i, c.adsBackgroundPath_str = a, c.position_str = s, c.textNormalColor_str = r, c.textSelectedColor_str = l, c.text_str = o, c.iconOverPath_str = t, c.totalWidth = 215, c.totalHeight = 64, c.fontSize = 12, c.hasThumbanil_bl = !1, c.isShowed_bl = !1, c.isMbl = FWDUVPUtils.isMobile, c.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, c.init = function () {
                c.setOverflow("visible"), c.setupMainContainers(), c.hide(!1, !0)
            }, c.setupMainContainers = function () {
                c.main_do = new FWDUVPDisplayObject("div"), c.main_do.hasTransform3d_bl = !1, c.main_do.hasTransform2d_bl = !1, c.main_do.setBackfaceVisibility(), c.bk_do = new FWDUVPDisplayObject("div"), c.bk_do.getStyle().background = "url('" + c.adsBackgroundPath_str + "')", c.text_do = new FWDUVPDisplayObject("div"), c.text_do.screen.className = "UVP-skip", c.text_do.hasTransform3d_bl = !1, c.text_do.hasTransform2d_bl = !1, c.text_do.setBackfaceVisibility(), c.text_do.setOverflow("visible"), c.text_do.getStyle().display = "inline", c.text_do.getStyle().fontFamily = "Arial", c.text_do.getStyle().fontSize = "22px", c.text_do.getStyle().whiteSpace = "nowrap", c.text_do.getStyle().color = c.textNormalColor_str, c.text_do.getStyle().fontSmoothing = "antialiased", c.text_do.getStyle().webkitFontSmoothing = "antialiased", c.text_do.getStyle().textRendering = "optimizeLegibility", c.thumbHolder_do = new FWDUVPDisplayObject("div"), c.thumbHolder_do.setWidth(c.totalHeight - 8), c.thumbHolder_do.setHeight(c.totalHeight - 8), c.thumbHolder_do.setX(c.totalWidth - c.thumbHolder_do.w - 4), c.thumbHolder_do.setY(4), c.border_do = new FWDUVPDisplayObject("div"), c.border_do.getStyle().border = "1px solid " + c.borderNColor_str, c.border_do.setButtonMode(!0), c.main_do.setWidth(c.totalWidth), c.main_do.setHeight(c.totalHeight), c.bk_do.setWidth(c.totalWidth), c.bk_do.setHeight(c.totalHeight), "left" == c.position_str ? (c.border_do.setX(-1), c.border_do.setWidth(c.totalWidth - 1)) : c.border_do.setWidth(c.totalWidth), c.border_do.setHeight(c.totalHeight - 2), c.setWidth(c.totalWidth), c.setHeight(c.totalHeight), c.useHEX ? (c.icon_do = new FWDUVPDisplayObject("div"), c.icon_do.setWidth(c.icon_img.width), c.icon_do.setHeight(c.icon_img.height), c.icon_do_canvas = FWDUVPUtils.getCanvasWithModifiedColor(c.icon_img, c.nBC).canvas, c.icon_do.screen.appendChild(c.icon_do_canvas)) : (c.icon_do = new FWDUVPDisplayObject("img"), c.icon_do.setScreen(c.icon_img), c.icon_do.setWidth(c.icon_img.width), c.icon_do.setHeight(c.icon_img.height)), c.iconS_img = new Image, c.iconS_img.src = c.iconOverPath_str, c.useHEX ? (c.iconS_do = new FWDUVPDisplayObject("div"), c.iconS_do.setWidth(c.icon_do.w), c.iconS_do.setHeight(c.icon_do.h), c.iconS_img.onload = function () {
                    c.iconS_do_canvas = FWDUVPUtils.getCanvasWithModifiedColor(c.iconS_img, c.sBC).canvas, c.iconS_do.screen.appendChild(c.iconS_do_canvas)
                }) : (c.iconS_do = new FWDUVPDisplayObject("img"), c.iconS_do.setScreen(c.iconS_img), c.iconS_do.setWidth(c.icon_do.w), c.iconS_do.setHeight(c.icon_do.h)), c.iconS_do.setAlpha(0), c.main_do.addChild(c.bk_do), c.main_do.addChild(c.text_do), c.main_do.addChild(c.thumbHolder_do), c.main_do.addChild(c.icon_do), c.main_do.addChild(c.iconS_do), c.main_do.addChild(c.border_do), FWDUVPUtils.isIEAndLessThen9 && (c.dumy_do = new FWDUVPDisplayObject("div"), c.dumy_do.setBkColor("#00FF00"), c.dumy_do.setAlpha(1e-4), c.dumy_do.setWidth(c.totalWidth), c.dumy_do.setHeight(c.totalHeight), c.dumy_do.setButtonMode(!0), c.main_do.addChild(c.dumy_do)), c.addChild(c.main_do), c.updateText(c.text_str), FWDUVPUtils.isIEAndLessThen9 ? c.isMbl ? c.hasPointerEvent_bl ? (c.dumy_do.screen.addEventListener("pointerup", c.onMouseUp), c.dumy_do.screen.addEventListener("pointerover", c.onMouseOver), c.dumy_do.screen.addEventListener("pointerout", c.onMouseOut)) : c.dumy_do.screen.addEventListener("touchend", c.onMouseUp) : c.dumy_do.screen.addEventListener ? (c.dumy_do.screen.addEventListener("mouseover", c.onMouseOver), c.dumy_do.screen.addEventListener("mouseout", c.onMouseOut), c.dumy_do.screen.addEventListener("mouseup", c.onMouseUp)) : c.dumy_do.screen.attachEvent && (c.dumy_do.screen.attachEvent("onmouseover", c.onMouseOver), c.dumy_do.screen.attachEvent("onmouseout", c.onMouseOut), c.dumy_do.screen.attachEvent("onmouseup", c.onMouseUp)) : c.isMbl ? c.hasPointerEvent_bl ? (c.border_do.screen.addEventListener("pointerup", c.onMouseUp), c.border_do.screen.addEventListener("pointerover", c.onMouseOver), c.border_do.screen.addEventListener("pointerout", c.onMouseOut)) : c.border_do.screen.addEventListener("touchend", c.onMouseUp) : c.border_do.screen.addEventListener ? (c.border_do.screen.addEventListener("mouseover", c.onMouseOver), c.border_do.screen.addEventListener("mouseout", c.onMouseOut), c.border_do.screen.addEventListener("mouseup", c.onMouseUp)) : c.border_do.screen.attachEvent && (c.border_do.screen.attachEvent("onmouseover", c.onMouseOver), c.border_do.screen.attachEvent("onmouseout", c.onMouseOut), c.border_do.screen.attachEvent("onmouseup", c.onMouseUp))
            }, c.onMouseOver = function (e) {
                e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE && "mouse" != e.pointerType || c.setSelectedState()
            }, c.onMouseOut = function (e) {
                e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE && "mouse" != e.pointerType || c.setNormalState()
            }, c.onMouseUp = function (e) {
                e.preventDefault && e.preventDefault(), 2 != e.button && c.isShowed_bl && c.dispatchEvent(p.MOUSE_UP)
            }, c.updateText = function (e) {
                var t;
                c.text_do.setInnerHTML(e), setTimeout(function () {
                    t = c.text_do.getWidth() + 8 + c.iconS_do.w, c.text_do.setX(parseInt(c.totalWidth - t) / 2), c.text_do.setY(parseInt((c.totalHeight - c.text_do.getHeight()) / 2) + 2), c.icon_do.setX(c.text_do.x + t - c.iconS_do.w), c.icon_do.setY(parseInt((c.totalHeight - c.iconS_do.h) / 2) + 2), c.iconS_do.setX(c.text_do.x + t - c.iconS_do.w), c.iconS_do.setY(parseInt((c.totalHeight - c.iconS_do.h) / 2) + 2)
                }, 50)
            }, c.resize = function (e) {
                var t = c.totalWidth;
                e && (t = 64), e ? (c.text_do.setVisible(!1), c.icon_do.setX(Math.round((t - c.iconS_do.w) / 2) - 1), c.icon_do.setY(Math.round((c.totalHeight - c.iconS_do.h) / 2))) : (c.text_do.setVisible(!0), c.icon_do.setX(c.text_do.x + c.text_do.getWidth() + 8 + c.iconS_do.w - c.iconS_do.w), c.icon_do.setY(parseInt((c.totalHeight - c.iconS_do.h) / 2) + 2)), c.iconS_do.setX(c.icon_do.x), c.iconS_do.setY(c.icon_do.y), c.setWidth(t), c.main_do.setWidth(t), c.bk_do.setWidth(t), c.border_do.setWidth(t - 1)
            }, c.setNormalState = function () {
                FWDAnimation.to(c.iconS_do, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                }), FWDAnimation.to(c.text_do.screen, .5, {
                    css: {
                        color: c.textNormalColor_str
                    },
                    ease: Expo.easeOut
                }), FWDAnimation.to(c.border_do.screen, .5, {
                    css: {
                        borderColor: c.borderNColor_str
                    },
                    ease: Expo.easeOut
                })
            }, c.setSelectedState = function () {
                FWDAnimation.to(c.iconS_do, .5, {
                    alpha: 1,
                    ease: Expo.easeOut
                }), FWDAnimation.to(c.text_do.screen, .5, {
                    css: {
                        color: c.textSelectedColor_str
                    },
                    ease: Expo.easeOut
                }), FWDAnimation.to(c.border_do.screen, .5, {
                    css: {
                        borderColor: c.borderSColor_str
                    },
                    ease: Expo.easeOut
                })
            }, c.show = function (e) {
                c.isShowed_bl || (c.isShowed_bl = !0, c.setVisible(!0), FWDAnimation.killTweensOf(c.main_do), e && !c.isMbl ? "left" == c.position_str ? FWDAnimation.to(c.main_do, .8, {
                    x: 0,
                    delay: .8,
                    ease: Expo.easeInOut
                }) : FWDAnimation.to(c.main_do, .8, {
                    x: 1 - c.totalWidth,
                    delay: .8,
                    ease: Expo.easeInOut
                }) : "left" == c.position_str ? c.main_do.setX(0) : c.main_do.setX(-c.totalWidth), c.text_do.getStyle().color = c.textNormalColor_str)
            }, c.hide = function (e, t) {
                (c.isShowed_bl || t) && (c.isShowed_bl = !1, c.hasThumbanil_bl = !1, FWDAnimation.killTweensOf(c.main_do), e && !c.isMbl ? "left" == c.position_str ? FWDAnimation.to(c.main_do, .8, {
                    x: -c.totalWidth,
                    ease: Expo.easeInOut,
                    onComplete: c.hideCompleteHandler
                }) : FWDAnimation.to(c.main_do, .8, {
                    x: 0,
                    ease: Expo.easeInOut,
                    onComplete: c.hideCompleteHandler
                }) : ("left" == c.position_str ? c.main_do.setX(-c.totalWidth) : c.main_do.setX(0), c.hideCompleteHandler()))
            }, c.hideCompleteHandler = function () {
                c.smallImage_img && (c.smallImage_img.onload = null, c.smallImage_img.src = "", FWDAnimation.killTweensOf(c.icon_do)), 1 != c.main_do.alpha && c.main_do.setAlpha(1), c.thumbHolder_do.setVisible(!1), c.setVisible(!1)
            }, c.hideWithOpacity = function () {
                FWDUVPUtils.isIEAndLessThen9 || FWDAnimation.to(c.main_do, .8, {
                    alpha: .5
                })
            }, c.showWithOpacity = function () {
                FWDUVPUtils.isIEAndLessThen9 || FWDAnimation.to(c.main_do, .8, {
                    alpha: 1
                })
            }, c.init()
        };
        p.setPrototype = function () {
            p.prototype = null, p.prototype = new FWDUVPTransformDisplayObject("div")
        }, p.CLICK = "onClick", p.MOUSE_OVER = "onMouseOver", p.SHOW_TOOLTIP = "showTooltip", p.MOUSE_OUT = "onMouseOut", p.MOUSE_UP = "onMouseDown", p.prototype = null, e.FWDUVPAdsButton = p
    }(window),
    function (e) {
        var a = function (e, t, o, s, n) {
            var i = this;
            a.prototype;
            i.main_do = null, i.bk_do = null, i.text_do = null, i.border_do = null, i.thumbHolder_do = null, i.borderNColor_str = t, i.borderSColor_str = o, i.adsBackgroundPath_str = s, i.position_str = e, i.timeColor_str = n, i.totalWidth = 215, i.totalHeight = 64, i.fontSize = 12, i.hasThumbanil_bl = !1, i.isShowed_bl = !1, i.isMbl = FWDUVPUtils.isMobile, i.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, i.init = function () {
                i.setOverflow("visible"), i.setupMainContainers(), i.hide(!1, !0)
            }, i.setupMainContainers = function () {
                i.main_do = new FWDUVPDisplayObject("div"), i.main_do.hasTransform3d_bl = !1, i.main_do.hasTransform2d_bl = !1, i.main_do.setBackfaceVisibility(), i.bk_do = new FWDUVPDisplayObject("div"), i.bk_do.getStyle().background = "url('" + i.adsBackgroundPath_str + "')", i.text_do = new FWDUVPDisplayObject("div"), i.text_do.screen.className = "UVP-skip-in", i.text_do.hasTransform3d_bl = !1, i.text_do.hasTransform2d_bl = !1, i.text_do.setBackfaceVisibility(), i.text_do.getStyle().fontFamily = "Arial", i.text_do.getStyle().fontSize = "12px", i.text_do.getStyle().lineHeight = "18px", i.text_do.getStyle().textAlign = "center", i.text_do.getStyle().color = i.timeColor_str, i.text_do.getStyle().fontSmoothing = "antialiased", i.text_do.getStyle().webkitFontSmoothing = "antialiased", i.text_do.getStyle().textRendering = "optimizeLegibility", i.text_do.setInnerHTML("..."), i.thumbHolder_do = new FWDUVPDisplayObject("div"), i.thumbHolder_do.setWidth(i.totalHeight - 8), i.thumbHolder_do.setHeight(i.totalHeight - 8), i.thumbHolder_do.setX(i.totalWidth - i.thumbHolder_do.w - 4), i.thumbHolder_do.setY(4), i.border_do = new FWDUVPDisplayObject("div"), i.border_do.getStyle().border = "1px solid " + i.borderNColor_str, i.main_do.setWidth(i.totalWidth), i.main_do.setHeight(i.totalHeight), i.bk_do.setWidth(i.totalWidth), i.bk_do.setHeight(i.totalHeight), "left" == i.position_str ? (i.border_do.setX(-1), i.border_do.setWidth(i.totalWidth - 1)) : i.border_do.setWidth(i.totalWidth), i.border_do.setHeight(i.totalHeight - 2), i.setWidth(i.totalWidth), i.setHeight(i.totalHeight), i.main_do.addChild(i.bk_do), i.main_do.addChild(i.text_do), i.main_do.addChild(i.thumbHolder_do), i.main_do.addChild(i.border_do), i.addChild(i.main_do)
            }, i.loadThumbnail = function (e) {
                if (i.hasThumbanil_bl = !0, i.smallImage_img) {
                    i.smallImage_img.removeAttribute("width"), i.smallImage_img.removeAttribute("height"), i.smallImage_img.onload = null, i.smallImage_img.src = "";
                    try {
                        FWDUVPUtils.isIE || i.thumbHolder_do.removeChild(i.thumbnail_do)
                    } catch (e) {}
                }
                i.thumbnail_do || (i.thumbnail_do = new FWDUVPDisplayObject("img"), i.smallImage_img = new Image), i.thumbHolder_do.setVisible(!0), i.smallImage_img.onload = i.onSmallImageLoad, i.smallImage_img.src = e
            }, i.onSmallImageLoad = function () {
                i.smallImageOriginalW = i.smallImage_img.width, i.smallImageOriginalH = i.smallImage_img.height, i.thumbnail_do.setScreen(i.smallImage_img), i.thumbHolder_do.addChild(i.thumbnail_do);
                var e = i.thumbHolder_do.w / i.smallImageOriginalW,
                    t = i.thumbHolder_do.h / i.smallImageOriginalH,
                    o = 0;
                t <= e ? o = e : e <= t && (o = t), i.thumbnail_do.setWidth(Math.round(i.smallImageOriginalW * o)), i.thumbnail_do.setHeight(Math.round(i.smallImageOriginalH * o)), i.thumbnail_do.setX(Math.round((i.thumbHolder_do.w - i.thumbnail_do.w) / 2)), i.thumbnail_do.setY(Math.round((i.thumbHolder_do.h - i.thumbnail_do.h) / 2)), i.thumbnail_do.setAlpha(0), FWDAnimation.to(i.thumbnail_do, .8, {
                    alpha: 1
                }), i.updateText()
            }, i.updateText = function (e) {
                e && i.text_do.setInnerHTML(e), i.hasThumbanil_bl ? (i.text_do.setX(16), i.text_do.setWidth(i.totalWidth - i.totalHeight - 26)) : (i.text_do.setX(8), i.text_do.setWidth(i.totalWidth - 16)), i.text_do.setY(parseInt((i.totalHeight - i.text_do.getHeight()) / 2))
            }, i.show = function (e) {
                i.isShowed_bl || (i.isShowed_bl = !0, i.setVisible(!0), FWDAnimation.killTweensOf(i.main_do), e && !i.isMbl ? "left" == i.position_str ? FWDAnimation.to(i.main_do, .8, {
                    x: 0,
                    delay: .2,
                    ease: Expo.easeInOut
                }) : FWDAnimation.to(i.main_do, .8, {
                    x: 1 - i.totalWidth,
                    delay: .2,
                    ease: Expo.easeInOut
                }) : "left" == i.position_str ? i.main_do.setX(0) : i.main_do.setX(-i.totalWidth))
            }, i.hide = function (e, t) {
                (i.isShowed_bl || t) && (i.isShowed_bl = !1, i.hasThumbanil_bl = !1, FWDAnimation.killTweensOf(i.main_do), e && !i.isMbl ? "left" == i.position_str ? FWDAnimation.to(i.main_do, .8, {
                    x: -i.totalWidth,
                    ease: Expo.easeInOut,
                    onComplete: i.hideCompleteHandler
                }) : FWDAnimation.to(i.main_do, .8, {
                    x: 0,
                    ease: Expo.easeInOut,
                    onComplete: i.hideCompleteHandler
                }) : ("left" == i.position_str ? i.main_do.setX(-i.totalWidth) : i.main_do.setX(0), i.hideCompleteHandler()))
            }, i.hideCompleteHandler = function () {
                i.smallImage_img && (i.smallImage_img.onload = null, i.smallImage_img.src = "", FWDAnimation.killTweensOf(i.thumbnail_do)), 1 != i.main_do.alpha && i.main_do.setAlpha(1), i.thumbHolder_do.setVisible(!1), i.setVisible(!1)
            }, i.hideWithOpacity = function () {
                FWDUVPUtils.isIEAndLessThen9 || FWDAnimation.to(i.main_do, .8, {
                    alpha: .5
                })
            }, i.showWithOpacity = function () {
                FWDUVPUtils.isIEAndLessThen9 || FWDAnimation.to(i.main_do, .8, {
                    alpha: 1
                })
            }, i.init()
        };
        a.setPrototype = function () {
            a.prototype = null, a.prototype = new FWDUVPTransformDisplayObject("div")
        }, a.CLICK = "onClick", a.MOUSE_OVER = "onMouseOver", a.SHOW_TOOLTIP = "showTooltip", a.MOUSE_OUT = "onMouseOut", a.MOUSE_UP = "onMouseDown", a.prototype = null, e.FWDUVPAdsStart = a
    }(window),
    function (window) {
        var FWDUVPAnnotation = function (props_obj) {
            var _s = this,
                prototype = FWDUVPAnnotation.prototype;
            _s.id = props_obj.id, _s.startTime = props_obj.start, _s.endTime = props_obj.end, _s.htmlContent_str = props_obj.content, _s.left = props_obj.left, _s.top = props_obj.top, _s.showCloseButton_bl = props_obj.showCloseButton_bl, _s.clickSource = props_obj.clickSource, _s.clickSourceTarget = props_obj.clickSourceTarget, _s.closeButtonNpath = props_obj.closeButtonNpath, _s.closeButtonSPath = props_obj.closeButtonSPath, _s.normalStateClass = props_obj.normalStateClass, _s.selectedStateClass = props_obj.selectedStateClass, _s.showAnnotationsPositionTool_bl = props_obj.showAnnotationsPositionTool_bl, _s.prt = props_obj.prt, _s.curX = _s.left, _s.curY = _s.top, _s._d = props_obj._d, _s.useHEX = props_obj.useHEX, _s.nBC = props_obj.nBC, _s.sBC = props_obj.sBC, _s.handPath_str = props_obj.handPath_str, _s.grabPath_str = props_obj.grabPath_str, _s.dummy_do = null, _s.isShowed_bl = !1, _s.isClsd = !1, _s.init = function () {
                -1 != _s._d.sknPth.indexOf("hex_white") && (_s.sBC = "#FFFFFF"), _s.setOverflow("visible"), _s.setAlpha(0), _s.setVisible(!1), FWDUVPUtils.hasTransform2d && (_s.getStyle().transformOrigin = "0% 0%"), _s.screen.innerHTML = _s.htmlContent_str, _s.screen.className = _s.normalStateClass, _s.setBackfaceVisibility(), _s.getStyle().fontSmoothing = "antialiased", _s.getStyle().webkitFontSmoothing = "antialiased", _s.getStyle().textRendering = "optimizeLegibility", _s.dummy_do = new FWDUVPDisplayObject("div"), _s.dummy_do.getStyle().width = "100%", _s.dummy_do.getStyle().height = "100%", _s.addChild(_s.dummy_do), setTimeout(function () {
                    _s.w = _s.getWidth(), _s.h = _s.getHeight()
                }, 100), _s.showCloseButton_bl && !_s.showAnnotationsPositionTool_bl && (FWDUVPSimpleSizeButton.setPrototype(), _s.clsBtn = new FWDUVPSimpleSizeButton(_s.closeButtonNpath, _s.closeButtonSPath, 26, 26, _s.useHEX, _s.nBC, _s.sBC, !0), _s.clsBtn.setScale2(0), _s.clsBtn.addListener(FWDUVPSimpleSizeButton.MOUSE_UP, _s.closeClickButtonCloseHandler), _s.clsBtn.getStyle().position = "absolute", _s.addChild(_s.clsBtn)), _s.showAnnotationsPositionTool_bl && (_s.info_do = new FWDUVPDisplayObject("div"), _s.info_do.getStyle().backgroundColor = "#FFFFFF", _s.info_do.getStyle().boxShadow = "2px 2px 2px #888888;", _s.info_do.getStyle().fontSmoothing = "antialiased", _s.info_do.getStyle().webkitFontSmoothing = "antialiased", _s.info_do.getStyle().textRendering = "optimizeLegibility", _s.addChild(_s.info_do), setTimeout(function () {
                    _s.info_do.screen.innerHTML = "<div style='padding:4px; maring:4px; color:#000000'> _d-left=" + Math.round(_s.curX * _s.prt.scaleInverse) + "</div><div style='padding:4px; margin:4px; color:#000000;'> _d-top=" + Math.round(_s.curY * _s.prt.scaleInverse) + "</div>", _s.setX(Math.round(_s.curX * _s.prt.scale)), _s.setY(Math.round(_s.curY * _s.prt.scale))
                }, 100), _s.isMbl ? _s.hasPointerEvent_bl ? _s.screen.addEventListener("pointerdown", _s.selfOnDownHandler) : _s.screen.addEventListener("touchdown", _s.selfOnDownHandler) : window.addEventListener && _s.screen.addEventListener("mousedown", _s.selfOnDownHandler), _s.getStyle().cursor = "url(" + _s.handPath_str + "), default"), _s.clickSource && !_s.showAnnotationsPositionTool_bl && (_s.dummy_do.setButtonMode(!0), _s.dummy_do.screen.addEventListener("click", _s.onClickHandler), _s.dummy_do.screen.addEventListener("mouseover", _s.onMouseOverHandler), _s.dummy_do.screen.addEventListener("mouseout", _s.onMouseOutHandler))
            }, _s.selfOnDownHandler = function (e) {
                e.preventDefault && e.preventDefault(), _s.getStyle().cursor = "url(" + _s.grabPath_str + "), default", _s.prt.addChild(_s);
                var t = FWDUVPUtils.getViewportMouseCoordinates(e);
                _s.startX = t.screenX - _s.prt.getGlobalX(), _s.startY = t.screenY - _s.prt.getGlobalY(), _s.curX = _s.x, _s.curY = _s.y, _s.isMbl ? _s.hasPointerEvent_bl ? (window.addEventListener("pointermove", _s.selfMoveHandler), window.addEventListener("pointerup", _s.selfEndHandler)) : (window.addEventListener("touchmove", _s.selfMoveHandler), window.addEventListener("touchend", _s.selfEndHandler)) : window.addEventListener && (window.addEventListener("mousemove", _s.selfMoveHandler), window.addEventListener("mouseup", _s.selfEndHandler))
            }, _s.selfMoveHandler = function (e) {
                e.preventDefault && e.preventDefault();
                var t = FWDUVPUtils.getViewportMouseCoordinates(e);
                _s.localX = t.screenX - _s.prt.getGlobalX(), _s.localY = t.screenY - _s.prt.getGlobalY(), _s.curX = _s.x, _s.curY = _s.y, _s.curX += _s.localX - _s.startX, _s.curY += _s.localY - _s.startY, _s.setX(_s.curX), _s.setY(_s.curY), _s.startX = t.screenX - _s.prt.getGlobalX(), _s.startY = t.screenY - _s.prt.getGlobalY(), _s.info_do.screen.innerHTML = "<div style='padding:4px; maring:4px; color:#000000'> _d-left=" + Math.round(_s.curX * _s.prt.scaleInverse) + "</div><div style='padding:4px; margin:4px; color:#000000;'> _d-top=" + Math.round(_s.curY * _s.prt.scaleInverse) + "</div>"
            }, _s.selfEndHandler = function (e) {
                _s.getStyle().cursor = "url(" + _s.handPath_str + "), default", _s.isMbl ? _s.hasPointerEvent_bl ? (window.removeEventListener("pointermove", _s.selfMoveHandler), window.removeEventListener("pointerup", _s.selfEndHandler)) : (window.removeEventListener("touchmove", _s.selfMoveHandler), window.removeEventListener("touchend", _s.selfEndHandler)) : window.removeEventListener && (window.removeEventListener("mousemove", _s.selfMoveHandler), window.removeEventListener("mouseup", _s.selfEndHandler))
            }, _s.onMouseOverHandler = function (e) {
                _s.setSelectedAtate()
            }, _s.onMouseOutHandler = function (e) {
                _s.setNormalState()
            }, _s.onClickHandler = function () {
                -1 != _s.clickSource.indexOf("https") || -1 != _s.clickSource.indexOf("http") ? window.open(_s.clickSource, _s.clickSourceTarget) : eval(_s.clickSource)
            }, _s.closeClickButtonCloseHandler = function () {
                _s.hide(), _s.isClsd = !0
            }, _s.show = function () {
                _s.isShowed_bl || _s.isClsd || (_s.isShowed_bl = !0, _s.setVisible(!0), FWDAnimation.killTweensOf(_s), FWDAnimation.to(_s, .8, {
                    alpha: 1,
                    ease: Quint.easeOut
                }), _s.clsBtn && FWDAnimation.to(_s.clsBtn, .8, {
                    scale: 1,
                    delay: .2,
                    ease: Elastic.easeOut
                }))
            }, _s.hide = function () {
                _s.isShowed_bl && (FWDAnimation.killTweensOf(_s), _s.isShowed_bl = !1, _s.setVisible(!1), _s.setAlpha(0), _s.clsBtn && (FWDAnimation.killTweensOf(_s.clsBtn), _s.clsBtn.setScale2(0)))
            }, _s.setNormalState = function () {
                _s.selectedStateClass && FWDAnimation.to(_s.screen, .8, {
                    className: _s.normalStateClass,
                    ease: Quint.easeOut
                })
            }, _s.setSelectedAtate = function () {
                _s.selectedStateClass && FWDAnimation.to(_s.screen, .8, {
                    className: _s.selectedStateClass,
                    ease: Quint.easeOut
                })
            }, _s.updateHEXColors = function (e, t) {
                _s.clsBtn && _s.clsBtn.updateHEXColors(e, t, _s.buttonWidth, _s.buttonHeight)
            }, _s.init()
        };
        FWDUVPAnnotation.setPrototype = function () {
            FWDUVPAnnotation.prototype = null, FWDUVPUtils.hasTransform2d ? FWDUVPAnnotation.prototype = new FWDUVPTransformDisplayObject("div") : FWDUVPAnnotation.prototype = new FWDUVPDisplayObject("div")
        }, FWDUVPAnnotation.prototype = null, window.FWDUVPAnnotation = FWDUVPAnnotation
    }(window),
    function (r) {
        var e = function (n, i) {
            var a = this;
            e.prototype;
            a.nBC = i.nBC, a.sBC = i.sBC, a.ann_ar = [], a.showAnnotationsPositionTool_bl = i.showAnnotationsPositionTool_bl, a.init = function () {
                a.setOverflow("visible")
            }, a.setupAnnotations = function (e) {
                if (a.ann_ar)
                    for (var t = 0; t < a.ann_ar.length; t++) try {
                        a.removeChild(a.ann_ar[t])
                    } catch (e) {}
                if (null != (a.source_ar = e)) {
                    a.setVisible(!0), a.source_ar = e, a.ann_ar = [], a.totalAnnotations = a.source_ar.length;
                    var o = i.annotationAddCloseNPath_str;
                    r.isWhite && (o = "content/hex_white/annotation-close-button-normal.png");
                    for (t = 0; t < a.totalAnnotations; t++) {
                        FWDUVPAnnotation.setPrototype();
                        var s = new FWDUVPAnnotation({
                            id: t,
                            start: a.source_ar[t].start,
                            end: a.source_ar[t].end,
                            left: a.source_ar[t].left,
                            top: a.source_ar[t].top,
                            clickSource: a.source_ar[t].clickSource,
                            clickSourceTarget: a.source_ar[t].clickSourceTarget,
                            content: a.source_ar[t].content,
                            showCloseButton_bl: a.source_ar[t].showCloseButton_bl,
                            closeButtonNpath: o,
                            closeButtonSPath: i.annotationAddCloseSPath_str,
                            normalStateClass: a.source_ar[t].normalStateClass,
                            selectedStateClass: a.source_ar[t].selectedStateClass,
                            showAnnotationsPositionTool_bl: a.showAnnotationsPositionTool_bl,
                            prt: a,
                            handPath_str: i.handPath_str,
                            grabPath_str: i.grabPath_str,
                            useHEX: i.useHEX,
                            nBC: a.nBC,
                            sBC: a.sBC,
                            _d: i
                        });
                        a.ann_ar[t] = s, a.addChild(s)
                    }
                } else a.setVisible(!1)
            }, a.update = function (e) {
                if (0 != a.totalAnnotations)
                    for (var t, o = 0; o < a.totalAnnotations; o++) t = a.ann_ar[o], !(e <= 0) && e >= t.startTime && e <= t.endTime ? (t.show(), a.position()) : t.hide()
            }, a.position = function (e) {
                var t = n.sW / n.maxWidth;
                if (a.setX(Math.round((n.sW - t * n.maxWidth) / 2)), a.setY(Math.round((n.tempVidStageHeight - t * n.maxHeight) / 2)), a.scale = n.sW / n.maxWidth, a.scaleY = a.scale, a.scaleX = a.scale, a.scaleInverse = n.maxWidth / n.sW, !a.showAnnotationsPositionTool_bl)
                    for (var o = 0; o < a.totalAnnotations; o++) {
                        var s = a.ann_ar[o];
                        s.setScale2(a.scale), s.finalX = Math.floor(s.left * a.scaleX), n.playlist_do && n.isPlaylistShowed_bl && "right" == n.tempPlaylistPosition_str && !n.isFullScreen_bl && s.left > n.maxWidth / 3 && (s.finalX -= n.playlistWidth + n.spaceBetweenControllerAndPlaylist), s.finalY = Math.floor(s.top * a.scaleY), s.clsBtn && (s.clsBtn.setWidth(Math.round(s.clsBtn.buttonWidth * a.scaleInverse)), s.clsBtn.setHeight(Math.round(s.clsBtn.buttonHeight * a.scaleInverse)), s.clsBtn.n_do.setWidth(Math.round(s.clsBtn.buttonWidth * a.scaleInverse)), s.clsBtn.n_do.setHeight(Math.round(s.clsBtn.buttonHeight * a.scaleInverse)), s.clsBtn.n_do_canvas && (s.clsBtn.n_do_canvas.style.width = Math.round(s.clsBtn.buttonWidth * a.scaleInverse) + "px", s.clsBtn.n_do_canvas.style.height = Math.round(s.clsBtn.buttonheight * a.scaleInverse) + "px", s.clsBtn.s_do_canvas.style.width = Math.round(s.clsBtn.buttonWidth * a.scaleInverse) + "px", s.clsBtn.s_do_canvas.style.height = Math.round(s.clsBtn.buttonheight * a.scaleInverse) + "px"), s.clsBtn.s_do.setWidth(Math.round(s.clsBtn.buttonWidth * a.scaleInverse)), s.clsBtn.s_do.setHeight(Math.round(s.clsBtn.buttonHeight * a.scaleInverse)), s.clsBtn.setX(Math.floor(s.getWidth() - s.clsBtn.w / 2)), s.clsBtn.setY(Math.floor(-s.clsBtn.h / 2))), s.prevFinalX != s.finalX && (e ? FWDAnimation.to(s, .8, {
                            x: s.finalX,
                            ease: Expo.easeInOut
                        }) : s.setX(s.finalX)), s.prevFinalY != s.finalY && (e ? FWDAnimation.to(s, .8, {
                            y: s.finalY,
                            ease: Expo.easeInOut
                        }) : s.setY(s.finalY)), s.prevFinalX = s.finalX, s.prevFinalY = s.finalY
                    }
            }, a.updateHEXColors = function (e, t) {
                if (a.nBC = e, a.sBC = t, a.ann_ar)
                    for (var o = 0; o < a.ann_ar.length; o++) a.ann_ar[o].updateHEXColors(e, t)
            }, a.init()
        };
        e.setPrototype = function () {
            e.prototype = null, e.prototype = new FWDUVPDisplayObject("div", "absolute")
        }, e.prototype = null, r.FWDUVPAnnotations = e
    }(window),
    function (o) {
        var i = function (t, e) {
            var n = this;
            i.prototype;
            n.audio_el = null, n.sourcePath_str = null, n.lastPercentPlayed = 0, n.volume = e, n.curDuration = 0, n.countNormalMp3Errors = 0, n.countShoutCastErrors = 0, n.maxShoutCastCountErrors = 5, n.maxNormalCountErrors = 1, n.testShoutCastId_to, n.audioVisualizerLinesColor_str = FWDUVPUtils.hexToRgb(t._d.audioVisualizerLinesColor_str), n.audioVisualizerCircleColor_str = FWDUVPUtils.hexToRgb(t._d.audioVisualizerCircleColor_str), n.preload_bl = !1, n.allowScrubing_bl = !1, n.hasError_bl = !0, n.isPlaying_bl = !1, n.isStopped_bl = !0, n.hasPlayedOnce_bl = !1, n.isStartEventDispatched_bl = !1, n.isSafeToBeControlled_bl = !1, n.isShoutcast_bl = !1, n.isNormalMp3_bl = !1, n.init = function () {
                n.setupAudio()
            }, n.resizeAndPosition = function (e, t) {
                e && (n.sW = e, n.sH = t), n.setWidth(n.sW), n.setHeight(n.sH), n.resizeSpectrumCanvas()
            }, n.setupAudio = function () {
                null == n.audio_el && (n.audio_el = document.createElement("audio"), n.screen.appendChild(n.audio_el), n.audio_el.controls = !1, n.audio_el.preload = "auto", n.audio_el.volume = n.volume, FWDUVPUtils.isLocal || (n.audio_el.crossOrigin = "*"), n.setPlaybackRate(t._d.defaultPlaybackRate_ar[t._d.startAtPlaybackIndex])), n.audio_el.addEventListener("error", n.errorHandler), n.audio_el.addEventListener("canplay", n.safeToBeControlled), n.audio_el.addEventListener("canplaythrough", n.safeToBeControlled), n.audio_el.addEventListener("progress", n.updateProgress), n.audio_el.addEventListener("timeupdate", n.updateAudio), n.audio_el.addEventListener("pause", n.pauseHandler), n.audio_el.addEventListener("play", n.playHandler), n.audio_el.addEventListener("ended", n.endedHandler)
            }, n.destroyAudio = function () {
                n.audio_el && (n.audio_el.removeEventListener("error", n.errorHandler), n.audio_el.removeEventListener("canplay", n.safeToBeControlled), n.audio_el.removeEventListener("canplaythrough", n.safeToBeControlled), n.audio_el.removeEventListener("progress", n.updateProgress), n.audio_el.removeEventListener("timeupdate", n.updateAudio), n.audio_el.removeEventListener("pause", n.pauseHandler), n.audio_el.removeEventListener("play", n.playHandler), n.audio_el.removeEventListener("ended", n.endedHandler), n.audio_el.removeEventListener("waiting", n.startToBuffer), n.audio_el.removeEventListener("playing", n.stopToBuffer), n.audio_el.src = "", n.audio_el.load())
            }, n.startToBuffer = function (e) {
                n.dispatchEvent(FWDUVPVideoScreen.START_TO_BUFFER)
            }, n.stopToBuffer = function () {
                n.dispatchEvent(FWDUVPVideoScreen.STOP_TO_BUFFER)
            }, n.togglePlayPause = function () {
                null != n && n.isSafeToBeControlled_bl && (n.isPlaying_bl ? n.pause() : n.play())
            }, n.updateLinesColor = function (e) {
                n.audioVisualizerLinesColor_str = e
            }, n.errorHandler = function (e) {
                if (null != n.sourcePath_str && null != n.sourcePath_str) {
                    if (n.isNormalMp3_bl && n.countNormalMp3Errors <= n.maxNormalCountErrors) return n.stop(), n.testShoutCastId_to = setTimeout(n.play, 200), void n.countNormalMp3Errors++;
                    if (n.isShoutcast_bl && n.countShoutCastErrors <= n.maxShoutCastCountErrors && 0 == n.audio_el.networkState) return n.testShoutCastId_to = setTimeout(n.play, 200), void n.countShoutCastErrors++;
                    var t;
                    n.hasError_bl = !0, n.stop(), t = 0 == n.audio_el.networkState || 1 == n.audio_el.networkState ? "error '_s.audio_el.networkState = 1'" : 2 == n.audio_el.networkState ? "'_s.audio_el.networkState = 2'" : 3 == n.audio_el.networkState ? "source not found" : e, o.console && o.console.log(n.audio_el.networkState), n.dispatchEvent(i.ERROR, {
                        text: t
                    })
                }
            }, n.setSource = function (e) {
                n.sourcePath_str = e, clearTimeout(n.testShoutCastId_to), -1 != n.sourcePath_str.indexOf(";") ? (n.isShoutcast_bl = !0, n.countShoutCastErrors = 0) : n.isShoutcast_bl = !1, -1 == n.sourcePath_str.indexOf(";") ? (n.isNormalMp3_bl = !0, n.countNormalMp3Errors = 0) : n.isNormalMp3_bl = !1, n.lastPercentPlayed = 0, n.audio_el && n.stop(!0)
            }, n.play = function (e) {
                if (n.isStopped_bl) n.isPlaying_bl = !1, n.hasError_bl = !1, n.allowScrubing_bl = !1, n.isStopped_bl = !1, n.setupAudio(), n.audio_el.src = n.sourcePath_str, n.play(), n.setVisible(!0);
                else if (!n.audio_el.ended || e) try {
                    n.isPlaying_bl = !0, n.hasPlayedOnce_bl = !0;
                    var t = n.audio_el.play();
                    void 0 !== t && t.then(function () {}, function () {}), FWDUVPUtils.isIE && n.dispatchEvent(i.PLAY)
                } catch (e) {
                    console.log(e)
                }
            }, n.resume = function () {
                n.isStopped_bl || n.play()
            }, n.pause = function () {
                null != n && null != n.audio_el && (n.audio_el.ended || (n.audio_el.pause(), n.isPlaying_bl = !1, FWDUVPUtils.isIE && n.dispatchEvent(i.PAUSE)))
            }, n.pauseHandler = function () {
                n.allowScrubing_bl || (n.stopSpectrum(), n.dispatchEvent(i.PAUSE))
            }, n.playHandler = function () {
                n.allowScrubing_bl || (n.isStartEventDispatched_bl || (n.dispatchEvent(i.START), n.isStartEventDispatched_bl = !0), n.startSpectrum(), n.dispatchEvent(i.PLAY))
            }, n.endedHandler = function () {
                n.dispatchEvent(i.PLAY_COMPLETE)
            }, n.stop = function (e) {
                (null != n && null != n.audio_el && !n.isStopped_bl || e) && (n.isPlaying_bl = !1, n.isStopped_bl = !0, n.hasPlayedOnce_bl = !0, n.isSafeToBeControlled_bl = !1, n.isStartEventDispatched_bl = !1, n.setVisible(!1), clearTimeout(n.testShoutCastId_to), n.stopToUpdateSubtitles(), n.stopSpectrum(), n.audio_el.pause(), n.destroyAudio(), n.dispatchEvent(i.STOP), n.dispatchEvent(i.LOAD_PROGRESS, {
                    percent: 0
                }))
            }, n.safeToBeControlled = function () {
                n.isSafeToBeControlled_bl || (n.hasHours_bl = 0 < Math.floor(n.audio_el.duration / 3600), n.isPlaying_bl = !0, n.isSafeToBeControlled_bl = !0, n.startToUpdateSubtitles(), n.dispatchEvent(i.SAFE_TO_SCRUBB), n.dispatchEvent(i.SAFE_TO_UPDATE_VOLUME))
            }, n.updateProgress = function () {
                var e = 0;
                0 < n.audio_el.buffered.length && (e = n.audio_el.buffered.end(n.audio_el.buffered.length - 1).toFixed(1) / n.audio_el.duration.toFixed(1), !isNaN(e) && e || (e = 0)), 1 == e && n.audio_el.removeEventListener("progress", n.updateProgress), n.dispatchEvent(i.LOAD_PROGRESS, {
                    percent: e
                })
            }, n.updateAudio = function () {
                var e;
                n.allowScrubing_bl || (e = n.audio_el.currentTime / n.audio_el.duration, n.dispatchEvent(i.UPDATE, {
                    percent: e
                }));
                var t = FWDUVPUtils.formatTime(n.audio_el.duration),
                    o = FWDUVPUtils.formatTime(n.audio_el.currentTime);
                isNaN(n.audio_el.duration) ? n.dispatchEvent(FWDUVPVideoScreen.UPDATE_TIME, {
                    curTime: "00:00",
                    totalTime: "00:00",
                    seconds: 0,
                    totalTimeInSeconds: 0
                }) : n.dispatchEvent(FWDUVPVideoScreen.UPDATE_TIME, {
                    curTime: o,
                    totalTime: t,
                    seconds: n.audio_el.currentTime,
                    totalTimeInSeconds: n.audio_el.duration
                }), n.lastPercentPlayed = e, n.curDuration = o
            }, n.startToScrub = function () {
                n.allowScrubing_bl = !0
            }, n.stopToScrub = function () {
                n.allowScrubing_bl = !1
            }, n.scrubbAtTime = function (e) {
                n.audio_el.currentTime = e;
                var t = FWDUVPUtils.formatTime(n.audio_el.duration),
                    o = FWDUVPUtils.formatTime(n.audio_el.currentTime);
                n.dispatchEvent(FWDUVPVideoScreen.UPDATE_TIME, {
                    curTime: o,
                    totalTime: t
                })
            }, n.scrub = function (e, t) {
                if (null != n.audio_el && n.audio_el.duration) {
                    t && n.startToScrub();
                    try {
                        n.audio_el.currentTime = n.audio_el.duration * e;
                        var o = FWDUVPUtils.formatTime(n.audio_el.duration),
                            s = FWDUVPUtils.formatTime(n.audio_el.currentTime);
                        n.dispatchEvent(i.UPDATE_TIME, {
                            curTime: s,
                            totalTime: o
                        })
                    } catch (t) {}
                }
            }, n.replay = function () {
                n.scrub(0), n.play()
            }, n.stopToUpdateSubtitles = function () {
                clearInterval(n.startToUpdateSubtitleId_int)
            }, n.startToUpdateSubtitles = function () {
                clearInterval(n.startToUpdateSubtitleId_int), n.startToUpdateSubtitleId_int = setInterval(n.updateSubtitleHandler, 10)
            }, n.updateSubtitleHandler = function () {
                n.dispatchEvent(i.UPDATE_SUBTITLE, {
                    curTime: n.audio_el.currentTime
                })
            }, n.setVolume = function (e) {
                null != e && (n.volume = e), n.audio_el && (n.audio_el.volume = n.volume)
            }, n.setPlaybackRate = function (e) {
                n.audio_el && (.25 == e && (e = "0.5"), n.audio_el.defaultPlaybackRate = e, n.audio_el.playbackRate = e)
            }, n.setupSpectrum = function () {
                var e;
                FWDUVPUtils.isIOS || t.useWithoutVideoScreen_bl || (e = o.AudioContext || o.webkitAudioContext, !n.canvas_do && e && (3 < i.countAudioContext || (i.countAudioContext++, n.canvas_do = new FWDUVPDisplayObject("canvas"), n.addChild(n.canvas_do), n.canvas = n.canvas_do.screen, n.ctx = n.canvas.getContext("2d"), n.resizeSpectrumCanvas(), e && (n.context = new e, n.analyser = n.context.createAnalyser(), n.source = n.context.createMediaElementSource(n.audio_el), n.source.connect(n.analyser), n.analyser.connect(n.context.destination), n.fbc_array = new Uint8Array(n.analyser.frequencyBinCount), n.renderSpectrum()))))
            }, n.resizeSpectrumCanvas = function () {
                n.canvas_do && (n.canvas_do.setWidth(n.sW), n.canvas_do.setHeight(n.sH), n.canvas.width = n.sW, n.canvas.height = n.sH)
            }, n.bars = 200, FWDUVPUtils.isMobile && (n.bars = 100), n.react_x = 0, n.react_y = 0, n.radius = 0, n.deltarad = 0, n.shockwave = 0, n.rot = 0, n.intensity = 0, n.isSeeking = 0, n.center_x, n.center_y, n.renderSpectrum = function () {
                if (n.canvas_do) {
                    n.resizeSpectrumCanvas();
                    var e = n.ctx.createLinearGradient(0, 0, 0, n.canvas.height);
                    e.addColorStop(0, "rgba(0, 0, 0, 1)"), e.addColorStop(1, "rgba(0, 0, 0, 1)"), n.ctx.fillStyle = e, n.ctx.fillRect(0, 0, n.canvas.width, n.canvas.height), n.ctx.fillStyle = "rgba(255, 255, 255, " + (125e-7 * n.intensity - .4) + ")", n.ctx.fillRect(0, 0, n.canvas.width, n.canvas.height), n.rot = n.rot + 1e-7 * n.intensity, n.react_x = 0, n.react_y = 0, n.intensity = 0, n.analyser.getByteFrequencyData(n.fbc_array);
                    for (var t = 0; t < n.bars; t++) {
                        rads = 2 * Math.PI / n.bars, bar_x = n.center_x, bar_y = n.center_y;
                        var o = n.sH / 3;
                        isNaN(o) && (o = 10), bar_height = Math.round(n.fbc_array[t] / 256 * o), bar_width = Math.round(.02 * bar_height), bar_x_term = n.center_x + Math.cos(rads * t + n.rot) * (n.radius + bar_height), bar_y_term = n.center_y + Math.sin(rads * t + n.rot) * (n.radius + bar_height), n.ctx.save();
                        var s = n.audioVisualizerLinesColor_str;
                        n.ctx.strokeStyle = s, n.ctx.lineWidth = bar_width, n.ctx.beginPath(), n.ctx.moveTo(bar_x, bar_y), n.ctx.lineTo(bar_x_term, bar_y_term), n.ctx.stroke(), n.react_x += Math.cos(rads * t + n.rot) * (n.radius + bar_height), n.react_y += Math.sin(rads * t + n.rot) * (n.radius + bar_height), n.intensity += bar_height
                    }
                    n.center_x = n.canvas.width / 2 - .007 * n.react_x, n.center_y = n.canvas.height / 2 - .007 * n.react_y, radius_old = n.radius, n.radius = 25 + .002 * n.intensity, n.deltarad = n.radius - radius_old, n.ctx.fillStyle = n.audioVisualizerCircleColor_str, n.ctx.beginPath(), n.ctx.arc(n.center_x, n.center_y, n.radius + 2, 0, 2 * Math.PI, !1), n.ctx.fill(), n.shockwave += 60, n.ctx.lineWidth = 15, n.ctx.strokeStyle = n.audioVisualizerCircleColor_str, n.ctx.beginPath(), n.ctx.arc(n.center_x, n.center_y, n.shockwave + n.radius, 0, 2 * Math.PI, !1), n.ctx.stroke(), 15 < n.deltarad && (n.shockwave = 0, n.ctx.fillStyle = "rgba(255, 255, 255, 0.7)", n.ctx.fillRect(0, 0, n.canvas.width, n.canvas.height), n.rot = n.rot + .4), n.startSpectrum()
                }
            }, n.startSpectrum = function () {
                n.canvas_do && (n.stopSpectrum(), n.spectrumAnimationFrameId = o.requestAnimationFrame(n.renderSpectrum))
            }, n.stopSpectrum = function () {
                n.canvas_do && cancelAnimationFrame(n.spectrumAnimationFrameId)
            }, n.init()
        };
        i.setPrototype = function () {
            i.prototype = new FWDUVPDisplayObject("div")
        }, i.UPDATE_SUBTITLE = "updateSubtitle", i.ERROR = "error", i.UPDATE = "update", i.UPDATE = "update", i.UPDATE_TIME = "updateTime", i.SAFE_TO_SCRUBB = "safeToControll", i.SAFE_TO_UPDATE_VOLUME = "safeToUpdateVolume", i.LOAD_PROGRESS = "loadProgress", i.START = "start", i.PLAY = "play", i.PAUSE = "pause", i.STOP = "stop", i.PLAY_COMPLETE = "playComplete", i.countAudioContext = 0, o.FWDUVPAudioScreen = i
    }(window),
    function () {
        var e = function (o, s) {
            var m = this;
            e.prototype;
            m.image_img, m.catThumbBk_img = o.catThumbBk_img, m.catNextN_img = o.catNextN_img, m.catPrevN_img = o.catPrevN_img, m.catCloseN_img = o.catCloseN_img, m.mainHld = null, m.clsBtn = null, m.nextButton_do = null, m.prevButton_do = null, m.thumbs_ar = [], m.categories_ar = o.cats_ar, m.catBkPath_str = o.catBkPath_str, m.id = 0, m.mouseX = 0, m.mouseY = 0, m.dif = 0, m.tempId = m.id, m.sW = 0, m.sH = 0, m.thumbW = 0, m.thumbH = 0, m.buttonsMargins = o.buttonsMargins, m.thumbnailMaxWidth = o.thumbnailMaxWidth, m.thumbnailMaxHeight = o.thumbnailMaxHeight, m.spacerH = o.horizontalSpaceBetweenThumbnails, m.spacerV = o.verticalSpaceBetweenThumbnails, m.dl, m.howManyThumbsToDisplayH = 0, m.howManyThumbsToDisplayV = 0, m.catNextN_img && (m.categoriesOffsetTotalWidth = 2 * m.catNextN_img.width + 40 + 2 * m.buttonsMargins, m.categoriesOffsetTotalHeight = m.catNextN_img.height + 40), m.totalThumbnails = m.categories_ar.length, m.delayRate = .06, m.countLoadedThumbs = 0, m.inputBackgroundColor_str = o.searchInputBackgroundColor_str, m.inputColor_str = o.searchInputColor_str, m.hideCompleteId_to, m.showCompleteId_to, m.loadThumbnailsId_to, m.preventMouseWheelNavigId_to, m.preventMouseWheelNavig_bl = !1, m.areThumbnailsCreated_bl = !1, m.areThumbnailsLoaded_bl = !1, m.isShowed_bl = !1, m.isOnDOM_bl = !1, m.showSearchInpt = o.showPlaylistsSearchInput_bl, m.isMbl = FWDUVPUtils.isMobile, m.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, m.useVectorIcons_bl = o.useVectorIcons_bl, m.init = function () {
                -1 != o.sknPth.indexOf("hex_white") ? m.sBC = "#FFFFFF" : m.sBC = o.sBC, m.getStyle().zIndex = 2147483647, m.getStyle().msTouchAction = "none", m.getStyle().webkitTapHighlightColor = "rgba(0, 0, 0, 0)", m.getStyle().width = "100%", m.mainHld = new FWDUVPDisplayObject("div"), m.mainHld.screen.className = "fwduvp-categories-background", m.mainHld.getStyle().background = "url('" + m.catBkPath_str + "')", m.mainHld.setY(-3e3), m.addChild(m.mainHld), m.setupButtons(), m.setupDisable(), m.isMbl && (m.setupMobileMove(), FWDUVPUtils.isChrome && (FWDUVPUtils.isIEAndLessThen9 ? document.getElementsByTagName("body")[0].appendChild(m.screen) : document.documentElement.appendChild(m.screen))), (!m.isMbl || m.isMbl && m.hasPointerEvent_bl) && m.setSelectable(!1), window.addEventListener ? (m.screen.addEventListener("mousewheel", m.mouseWheelDumyHandler), m.screen.addEventListener("DOMMouseScroll", m.mouseWheelDumyHandler)) : document.attachEvent && m.screen.attachEvent("onmousewheel", m.mouseWheelDumyHandler), m.showSearchInpt && m.setupInput()
            }, m.mouseWheelDumyHandler = function (e) {
                var t;
                if (FWDAnimation.isTweening(m.mainHld)) return e.preventDefault && e.preventDefault(), !1;
                for (var o = 0; o < m.totalThumbnails; o++)
                    if (t = m.thumbs_ar[o], FWDAnimation.isTweening(t)) return e.preventDefault && e.preventDefault(), !1;
                var s = e.detail || e.wheelDelta;
                if (e.wheelDelta && (s *= -1), FWDUVPUtils.isOpera && (s *= -1), 0 < s) m.nextButtonOnMouseUpHandler();
                else if (s < 0) {
                    if (m.leftId <= 0) return;
                    m.prevButtonOnMouseUpHandler()
                }
                if (!e.preventDefault) return !1;
                e.preventDefault()
            }, m.resizeAndPosition = function (e) {
                var t, o;
                (m.isShowed_bl || e) && (t = FWDUVPUtils.getScrollOffsets(), o = FWDUVPUtils.getViewportSize(), m.sW = o.w, m.sH = o.h, FWDAnimation.killTweensOf(m.mainHld), m.mainHld.setX(0), m.mainHld.setWidth(m.sW), m.mainHld.setHeight(m.sH), m.setX(t.x), m.setY(t.y), m.setHeight(m.sH), (m.isMbl || s.isEmbedded_bl) && m.setWidth(m.sW), m.positionButtons(), m.tempId = m.id, m.resizeAndPositionThumbnails(), m.disableEnableNextAndPrevButtons(), m.input_do && (m.input_do.setX(m.sW - m.input_do.getWidth() - m.buttonsMargins), m.input_do.setY(m.sH - m.input_do.getHeight() - m.buttonsMargins), m.inputArrow_do.setX(m.input_do.x + m.input_do.getWidth() - 20), m.inputArrow_do.setY(m.input_do.y + m.input_do.getHeight() / 2 - m.inputArrow_do.getHeight() / 2)))
            }, m.onScrollHandler = function () {
                var e = FWDUVPUtils.getScrollOffsets();
                m.setX(e.x), m.setY(e.y)
            }, m.setupInput = function () {
                m.input_do = new FWDUVPDisplayObject("input"), m.input_do.screen.className = "fwduvp-search", m.input_do.screen.maxLength = 20, m.input_do.getStyle().textAlign = "left", m.input_do.getStyle().outline = "none", m.input_do.getStyle().boxShadow = "none", m.input_do.getStyle().fontSmoothing = "antialiased", m.input_do.getStyle().webkitFontSmoothing = "antialiased", m.input_do.getStyle().textRendering = "optimizeLegibility", m.input_do.getStyle().fontFamily = "Arial", m.input_do.getStyle().fontSize = "12px", m.input_do.getStyle().padding = "14px 10px", m.input_do.getStyle().boxSizing = "border-box", m.input_do.getStyle().backgroundColor = m.inputBackgroundColor_str, m.input_do.getStyle().color = m.inputColor_str, m.input_do.screen.value = "search", m.input_do.setHeight(20), m.input_do.setX(18), m.noSearchFound_do = new FWDUVPDisplayObject("div"), m.noSearchFound_do.setX(0), m.noSearchFound_do.getStyle().textAlign = "center", m.noSearchFound_do.getStyle().width = "100%", m.noSearchFound_do.getStyle().fontSmoothing = "antialiased", m.noSearchFound_do.getStyle().webkitFontSmoothing = "antialiased", m.noSearchFound_do.getStyle().textRendering = "optimizeLegibility", m.noSearchFound_do.getStyle().fontFamily = "Arial", m.noSearchFound_do.getStyle().fontSize = "12px", m.noSearchFound_do.getStyle().color = m.inputColor_str, m.noSearchFound_do.setInnerHTML("NOTHING FOUND!"), m.noSearchFound_do.setVisible(!1), m.addChild(m.noSearchFound_do);
                var e = new Image;
                e.src = o.inputArrowPath_str, m.inputArrow_do = new FWDUVPDisplayObject("img"), m.inputArrow_do.setScreen(e), m.inputArrow_do.setWidth(12), m.inputArrow_do.setHeight(12), m.hasPointerEvent_bl ? m.input_do.screen.addEventListener("pointerdown", m.inputFocusInHandler) : m.input_do.screen.addEventListener && (m.input_do.screen.addEventListener("mousedown", m.inputFocusInHandler), m.input_do.screen.addEventListener("touchstart", m.inputFocusInHandler)), m.input_do.screen.addEventListener("keyup", m.keyUpHandler), m.mainHld.addChild(m.input_do), m.mainHld.addChild(m.inputArrow_do)
            }, m.inputFocusInHandler = function () {
                m.hasInputFocus_bl || (m.hasInputFocus_bl = !0, "search" == m.input_do.screen.value && (m.input_do.screen.value = ""), m.input_do.screen.focus(), setTimeout(function () {
                    m.hasPointerEvent_bl ? window.addEventListener("pointerdown", m.inputFocusOutHandler) : window.addEventListener && (window.addEventListener("mousedown", m.inputFocusOutHandler), window.addEventListener("touchstart", m.inputFocusOutHandler))
                }, 50))
            }, m.inputFocusOutHandler = function (e) {
                if (m.hasInputFocus_bl) {
                    var t = FWDUVPUtils.getViewportMouseCoordinates(e);
                    return FWDUVPUtils.hitTest(m.input_do.screen, t.screenX, t.screenY) ? void 0 : (m.hasInputFocus_bl = !1, void("" == m.input_do.screen.value && (m.input_do.screen.value = "search", m.hasPointerEvent_bl ? window.removeEventListener("pointerdown", m.inputFocusOutHandler) : window.removeEventListener && (window.removeEventListener("mousedown", m.inputFocusOutHandler), window.removeEventListener("touchstart", m.inputFocusOutHandler)))))
                }
            }, m.keyUpHandler = function (e) {
                e.stopPropagation && e.stopPropagation(), m.prevInputValue_str != m.input_do.screen.value && (clearTimeout(m.keyPressedId_to), m.keyPressed_bl = !0, clearTimeout(m.rsId_to), m.rsId_to = setTimeout(function () {
                    m.resizeAndPositionThumbnails(!0), m.disableEnableNextAndPrevButtons()
                }, 400)), m.prevInputValue_str = m.input_do.screen.value, m.keyPressedId_to = setTimeout(function () {
                    m.keyPressed_bl = !1
                }, 450)
            }, m.showNothingFound = function () {
                m.isShowNothingFound_bl || (m.isShowNothingFound_bl = !0, m.noSearchFound_do.setVisible(!0), m.noSearchFound_do.setY(parseInt((m.sH - m.noSearchFound_do.getHeight()) / 2)), m.noSearchFound_do.setAlpha(0), FWDAnimation.to(m.noSearchFound_do, .1, {
                    alpha: 1,
                    yoyo: !0,
                    repeat: 4
                }))
            }, m.hideNothingFound = function () {
                m.isShowNothingFound_bl && (m.isShowNothingFound_bl = !1, FWDAnimation.killTweensOf(m.noSearchFound_do), m.noSearchFound_do.setVisible(!1))
            }, m.setupDisable = function () {
                m.disable_do = new FWDUVPDisplayObject("div"), FWDUVPUtils.isIE && (m.disable_do.setBkColor("#FFFFFF"), m.disable_do.setAlpha(.01)), m.addChild(m.disable_do)
            }, m.showDisable = function () {
                m.disable_do.w != m.sW && (m.disable_do.setWidth(m.sW), m.disable_do.setHeight(m.sH))
            }, m.hideDisable = function () {
                0 != m.disable_do.w && (m.disable_do.setWidth(0), m.disable_do.setHeight(0))
            }, m.setupButtons = function () {
                m.clsBtn || (m.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), m.clsBtn = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<div class='table-fwduvp-button'><span class='table-cell-fwduvp-button fwdicon-close'></span></div>", void 0, "UVPCategoriesNextAndPrevNormalState", "UVPCategoriesNextAndPrevSelectedState")) : (FWDUVPSimpleButton.setPrototype(), m.clsBtn = new FWDUVPSimpleButton(m.catCloseN_img, o.catCloseSPath_str, void 0, !0, o.useHEX, o.nBC, m.sBC, !1, !1, !1, !1, !0)), m.clsBtn.addListener(FWDUVPSimpleButton.MOUSE_UP, m.closeButtonOnMouseUpHandler), m.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), m.nextButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<div class='table-fwduvp-button'><span class='table-cell-fwduvp-button fwdicon-FF-right'></span></div>", void 0, "UVPCategoriesNextAndPrevNormalState", "UVPCategoriesNextAndPrevSelectedState")) : (FWDUVPSimpleButton.setPrototype(), m.nextButton_do = new FWDUVPSimpleButton(m.catNextN_img, o.catNextSPath_str, void 0, !0, o.useHEX, o.nBC, m.sBC, !1, !1, !1, !1, !0)), m.nextButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, m.nextButtonOnMouseUpHandler), m.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), m.prevButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<div class='table-fwduvp-button'><span class='table-cell-fwduvp-button fwdicon-FF-left'></span></div>", void 0, "UVPCategoriesNextAndPrevNormalState", "UVPCategoriesNextAndPrevSelectedState")) : (FWDUVPSimpleButton.setPrototype(), m.prevButton_do = new FWDUVPSimpleButton(m.catPrevN_img, o.catPrevSPath_str, void 0, !0, o.useHEX, o.nBC, m.sBC, !1, !1, !1, !1, !0)), m.prevButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, m.prevButtonOnMouseUpHandler))
            }, m.closeButtonOnMouseUpHandler = function () {
                m.hide()
            }, m.nextButtonOnMouseUpHandler = function () {
                var e = m.howManyThumbsToDisplayH * m.howManyThumbsToDisplayV;
                m.tempId += e, m.tempId > m.totalThumbnails - 1 && (m.tempId = m.totalThumbnails - 1);
                var t = Math.floor(m.tempId / e);
                m.tempId = t * e, m.resizeAndPositionThumbnails(!0, "next"), m.disableEnableNextAndPrevButtons(!1, !0)
            }, m.prevButtonOnMouseUpHandler = function () {
                var e = m.howManyThumbsToDisplayH * m.howManyThumbsToDisplayV;
                m.tempId -= e, m.tempId < 0 && (m.tempId = 0);
                var t = Math.floor(m.tempId / e);
                m.tempId = t * e, m.resizeAndPositionThumbnails(!0, "prev"), m.disableEnableNextAndPrevButtons(!0, !1)
            }, m.positionButtons = function () {
                m.clsBtn.setX(m.sW - m.clsBtn.w - m.buttonsMargins), m.clsBtn.setY(m.buttonsMargins), m.nextButton_do.setX(m.sW - m.nextButton_do.w - m.buttonsMargins), m.nextButton_do.setY(parseInt((m.sH - m.nextButton_do.h) / 2)), m.prevButton_do.setX(m.buttonsMargins), m.prevButton_do.setY(parseInt((m.sH - m.prevButton_do.h) / 2))
            }, m.disableEnableNextAndPrevButtons = function (e, t) {
                var o = m.howManyThumbsToDisplayH * m.howManyThumbsToDisplayV,
                    s = Math.floor(m.tempId / o),
                    n = Math.ceil(m.totalThumbnails / o) - 1;
                m.howManyThumbsToDisplayH, m.howManyThumbsToDisplayH;
                o >= m.totalThumbnails ? (m.nextButton_do.disable(), m.prevButton_do.disable(), m.nextButton_do.setDisabledState(), m.prevButton_do.setDisabledState()) : 0 == s ? (m.nextButton_do.enable(), m.prevButton_do.disable(), m.nextButton_do.setEnabledState(), m.prevButton_do.setDisabledState()) : (s == n ? (m.nextButton_do.disable(), m.prevButton_do.enable(), m.nextButton_do.setDisabledState()) : (m.nextButton_do.enable(), m.prevButton_do.enable(), m.nextButton_do.setEnabledState()), m.prevButton_do.setEnabledState()), e || m.prevButton_do.setNormalState(), t || m.nextButton_do.setNormalState()
            }, m.setupMobileMove = function () {
                m.hasPointerEvent_bl ? m.screen.addEventListener("pointerdown", m.mobileDownHandler) : m.screen.addEventListener("touchstart", m.mobileDownHandler)
            }, m.mobileDownHandler = function (e) {
                var t;
                e.touches && 1 != e.touches.length || (t = FWDUVPUtils.getViewportMouseCoordinates(e), m.mouseX = t.screenX, m.mouseY = t.screenY, m.hasPointerEvent_bl ? (window.addEventListener("pointerup", m.mobileUpHandler), window.addEventListener("pointermove", m.mobileMoveHandler)) : (window.addEventListener("touchend", m.mobileUpHandler), window.addEventListener("touchmove", m.mobileMoveHandler)))
            }, m.mobileMoveHandler = function (e) {
                var t;
                e.preventDefault && e.preventDefault(), e.touches && 1 != e.touches.length || (m.showDisable(), t = FWDUVPUtils.getViewportMouseCoordinates(e), m.dif = m.mouseX - t.screenX, m.mouseX = t.screenX, m.mouseY = t.screenY)
            }, m.mobileUpHandler = function (e) {
                m.hideDisable(), 10 < m.dif ? m.nextButtonOnMouseUpHandler() : m.dif < -10 && m.prevButtonOnMouseUpHandler(), m.dif = 0, m.hasPointerEvent_bl ? (window.removeEventListener("pointerup", m.mobileUpHandler), window.removeEventListener("pointermove", m.mobileMoveHandler)) : (window.removeEventListener("touchend", m.mobileUpHandler), window.removeEventListener("touchmove", m.mobileMoveHandler))
            }, m.setupThumbnails = function () {
                if (!m.areThumbnailsCreated_bl) {
                    var e;
                    m.areThumbnailsCreated_bl = !0;
                    for (var t = 0; t < m.totalThumbnails; t++) FWDUVPCategoriesThumb.setPrototype(), (e = new FWDUVPCategoriesThumb(m, t, o.catThumbBkPath_str, o.catThumbBkTextPath_str, o.thumbnailSelectedType_str, m.categories_ar[t].htmlContent, m.categories_ar[t].htmlText_str)).addListener(FWDUVPCategoriesThumb.MOUSE_UP, m.thumbnailOnMouseUpHandler), m.thumbs_ar[t] = e, m.mainHld.addChild(e);
                    m.mainHld.addChild(m.clsBtn), m.mainHld.addChild(m.nextButton_do), m.mainHld.addChild(m.prevButton_do)
                }
            }, m.thumbnailOnMouseUpHandler = function (e) {
                m.id = e.id, m.disableOrEnableThumbnails(), m.hide()
            }, m.resizeAndPositionThumbnails = function (e, t) {
                if (m.areThumbnailsCreated_bl) {
                    var o, s, n, i, a, r, l, d, _, u = [].concat(m.thumbs_ar);
                    if (m.isSearched_bl = !1, m.input_do && (inputValue = m.input_do.screen.value.toLowerCase(), "search" != inputValue))
                        for (var c = 0; c < u.length; c++) - 1 == (o = u[c]).htmlText_str.toLowerCase().indexOf(inputValue.toLowerCase()) && (FWDAnimation.killTweensOf(o), o.hide(), u.splice(c, 1), c--);
                    m.totalThumbnails = u.length, m.totalThumbnails != m.thumbs_ar.length && (m.isSearched_bl = !0), 0 == m.totalThumbnails ? m.showNothingFound() : m.hideNothingFound(), m.remainWidthSpace = m.sW - i;
                    var p = m.sW - m.categoriesOffsetTotalWidth,
                        h = m.sH - m.categoriesOffsetTotalHeight;
                    m.howManyThumbsToDisplayH = Math.ceil((p - m.spacerH) / (m.thumbnailMaxWidth + m.spacerH)), m.thumbW = Math.floor((p - m.spacerH * (m.howManyThumbsToDisplayH - 1)) / m.howManyThumbsToDisplayH), m.thumbW > m.thumbnailMaxWidth && (m.howManyThumbsToDisplayH += 1, m.thumbW = Math.floor((p - m.spacerH * (m.howManyThumbsToDisplayH - 1)) / m.howManyThumbsToDisplayH)), m.thumbH = Math.floor(m.thumbW / m.thumbnailMaxWidth * m.thumbnailMaxHeight), m.howManyThumbsToDisplayV = Math.floor(h / (m.thumbH + m.spacerV)), m.howManyThumbsToDisplayV < 1 && (m.howManyThumbsToDisplayV = 1), i = Math.min(m.howManyThumbsToDisplayH, m.totalThumbnails) * (m.thumbW + m.spacerH) - m.spacerH, a = Math.min(Math.ceil(m.totalThumbnails / m.howManyThumbsToDisplayH), m.howManyThumbsToDisplayV) * (m.thumbH + m.spacerV) - m.spacerV, r = m.howManyThumbsToDisplayH > m.totalThumbnails ? 0 : p - i, m.howManyThumbsToDisplayH > m.totalThumbnails && (m.howManyThumbsToDisplayH = m.totalThumbnails), _ = m.howManyThumbsToDisplayH * m.howManyThumbsToDisplayV, s = Math.floor(m.tempId / _), m.isSearched_bl && (s = 0), d = m.howManyThumbsToDisplayH * s, firstId = s * _, (l = firstId + _) > m.totalThumbnails && (l = m.totalThumbnails);
                    for (c = 0; c < m.totalThumbnails; c++)(o = u[c]).finalW = m.thumbW, c % m.howManyThumbsToDisplayH == m.howManyThumbsToDisplayH - 1 && (o.finalW += r), o.finalH = m.thumbH, o.finalX = c % m.howManyThumbsToDisplayH * (m.thumbW + m.spacerH), o.finalX += Math.floor(c / _) * m.howManyThumbsToDisplayH * (m.thumbW + m.spacerH), o.finalX += (m.sW - i) / 2, o.finalX = Math.floor(o.finalX - d * (m.thumbW + m.spacerH)), o.finalY = c % _, o.finalY = Math.floor(o.finalY / m.howManyThumbsToDisplayH) * (m.thumbH + m.spacerV), o.finalY += (h - a) / 2, o.finalY += m.categoriesOffsetTotalHeight / 2, o.finalY = Math.floor(o.finalY), s < (n = Math.floor(c / _)) ? o.finalX += 150 : n < s && (o.finalX -= 150), e ? c >= firstId && c < l ? (dl = "next" == t ? c % _ * m.delayRate + .1 : (_ - c % _) * m.delayRate + .1, m.keyPressed_bl && (dl = 0), o.resizeAndPosition(!0, dl)) : o.resizeAndPosition(!0, 0) : o.resizeAndPosition(), o.show();
                    m.howManyThumbsToDisplayH * m.howManyThumbsToDisplayV >= m.totalThumbnails ? (m.nextButton_do.setVisible(!1), m.prevButton_do.setVisible(!1)) : (m.nextButton_do.setVisible(!0), m.prevButton_do.setVisible(!0))
                }
            }, m.loadImages = function () {
                m.countLoadedThumbs > m.totalThumbnails - 1 || (m.image_img && (m.image_img.onload = null, m.image_img.onerror = null), m.image_img = new Image, m.image_img.onerror = m.onImageLoadError, m.image_img.onload = m.onImageLoadComplete, m.image_img.src = m.categories_ar[m.countLoadedThumbs].thumbnailPath)
            }, m.onImageLoadError = function (e) {}, m.onImageLoadComplete = function (e) {
                m.thumbs_ar[m.countLoadedThumbs].setImage(m.image_img), m.countLoadedThumbs++, m.loadWithDelayId_to = setTimeout(m.loadImages, 40)
            }, m.disableOrEnableThumbnails = function () {
                for (var e, t = 0; t < m.totalThumbnails; t++) e = m.thumbs_ar[t], t == m.id ? e.disable() : e.enable()
            }, m.show = function (e) {
                m.isShowed_bl || (m.isShowed_bl = !0, m.isOnDOM_bl = !0, m.id = e, FWDUVPUtils.isChrome && m.isMbl ? m.setVisible(!0) : FWDUVPUtils.isIEAndLessThen9 ? document.getElementsByTagName("body")[0].appendChild(m.screen) : document.documentElement.appendChild(m.screen), window.addEventListener ? window.addEventListener("scroll", m.onScrollHandler) : window.attachEvent && window.attachEvent("onscroll", m.onScrollHandler), m.setupThumbnails(), m.useVectorIcons_bl ? (m.clsBtn.setFinalSize(!0), m.nextButton_do.setFinalSize(!0), m.prevButton_do.setFinalSize(!0), m.checkButtonsId_to = setInterval(function () {
                    0 != m.clsBtn.w && (m.categoriesOffsetTotalWidth = 2 * m.clsBtn.w + 40 + 2 * m.buttonsMargins, m.categoriesOffsetTotalHeight = m.clsBtn.h, m.resizeAndPosition(!0), m.showDisable(), m.disableOrEnableThumbnails(), clearTimeout(m.hideCompleteId_to), clearTimeout(m.showCompleteId_to), m.mainHld.setY(-m.sH), m.isMbl ? (m.showCompleteId_to = setTimeout(m.showCompleteHandler, 1200), FWDAnimation.to(m.mainHld, .8, {
                        y: 0,
                        delay: .4,
                        ease: Expo.easeInOut
                    })) : (m.showCompleteId_to = setTimeout(m.showCompleteHandler, 800), FWDAnimation.to(m.mainHld, .8, {
                        y: 0,
                        ease: Expo.easeInOut
                    })), clearInterval(m.checkButtonsId_to))
                }, 50)) : (m.resizeAndPosition(!0), m.showDisable(), m.disableOrEnableThumbnails(), clearTimeout(m.hideCompleteId_to), clearTimeout(m.showCompleteId_to), m.mainHld.setY(-m.sH), m.isMbl ? (m.showCompleteId_to = setTimeout(m.showCompleteHandler, 1200), FWDAnimation.to(m.mainHld, .8, {
                    y: 0,
                    delay: .4,
                    ease: Expo.easeInOut
                })) : (m.showCompleteId_to = setTimeout(m.showCompleteHandler, 800), FWDAnimation.to(m.mainHld, .8, {
                    y: 0,
                    ease: Expo.easeInOut
                }))))
            }, m.showCompleteHandler = function () {
                m.mainHld.setY(0), m.hideDisable(), FWDUVPUtils.isIphone && (s.videoScreen_do && s.videoScreen_do.setY(-5e3), s.ytb_do && s.ytb_do.setY(-5e3)), m.resizeAndPosition(!0), m.areThumbnailsLoaded_bl || (m.loadImages(), m.areThumbnailsLoaded_bl = !0)
            }, m.hide = function () {
                m.isShowed_bl && (m.isShowed_bl = !1, FWDUVPUtils.isIphone && (s.videoScreen_do && s.videoScreen_do.setY(0), s.ytb_do && s.ytb_do.setY(0)), clearTimeout(m.hideCompleteId_to), clearTimeout(m.showCompleteId_to), m.showDisable(), m.hideCompleteId_to = setTimeout(m.hideCompleteHandler, 800), FWDAnimation.killTweensOf(m.mainHld), FWDAnimation.to(m.mainHld, .8, {
                    y: -m.sH,
                    ease: Expo.easeInOut
                }), window.addEventListener ? window.removeEventListener("scroll", m.onScrollHandler) : window.detachEvent && window.detachEvent("onscroll", m.onScrollHandler), m.resizeAndPosition())
            }, m.hideCompleteHandler = function () {
                FWDUVPUtils.isChrome && m.isMbl ? m.setVisible(!1) : FWDUVPUtils.isIEAndLessThen9 ? document.getElementsByTagName("body")[0].removeChild(m.screen) : document.documentElement.removeChild(m.screen), m.isOnDOM_bl = !1, m.dispatchEvent(e.HIDE_COMPLETE)
            }, m.init()
        };
        e.setPrototype = function () {
            e.prototype = new FWDUVPDisplayObject("div")
        }, e.HIDE_COMPLETE = "hideComplete", e.prototype = null, window.FWDUVPCategories = e
    }(),
    function (e) {
        var l = function (t, e, o, s, n, i, a) {
            var r = this;
            l.prototype;
            r.backgroundImagePath_str = o, r.catThumbTextBkPath_str = s, r.canvas_el = null, r.htmlContent = i, r.htmlText_str = a, r.simpleText_do = null, r.effectImage_do = null, r.imageHolder_do = null, r.normalImage_do = null, r.effectImage_do = null, r.dumy_do = null, r.thumbnailSelectedType_str = n, r.id = e, r.imageOriginalW, r.imageOriginalH, r.finalX, r.finalY, r.finalW, r.finalH, r.imageFinalX, r.imageFinalY, r.imageFinalW, r.imageFinalH, r.isDark = !0, -1 == o.indexOf("dark") && (r.isDark = !1), r.dispatchShowWithDelayId_to, r.isShowed_bl = !1, r.hasImage_bl = !1, r.isSelected_bl = !1, r.isDisabled_bl = !1, r.hasCanvas_bl = FWDUVPlayer.hasCanvas, r.isMbl = FWDUVPUtils.isMobile, r.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, r.init = function () {
                r.getStyle().background = "url('" + r.backgroundImagePath_str + "')", r.screen.className = "fwduvp-categories-thumbnail-background", r.setupMainContainers(), r.setupDescription(), r.setupDumy()
            }, r.setupMainContainers = function () {
                r.imageHolder_do = new FWDUVPDisplayObject("div"), r.addChild(r.imageHolder_do)
            }, r.setupDumy = function () {
                r.dumy_do = new FWDUVPDisplayObject("div"), FWDUVPUtils.isIE && (r.dumy_do.setBkColor("#FFFFFF"), r.dumy_do.setAlpha(0)), r.addChild(r.dumy_do)
            }, r.setupDescription = function () {
                r.simpleText_do = new FWDUVPDisplayObject("div"), r.simpleText_do.getStyle().background = "url('" + r.catThumbTextBkPath_str + "')";
                var e = "fwduvp-categories-white-text";
                r.isDark && (e = "fwduvp-categories-dark-text"), r.simpleText_do.screen.className = e, r.slTitle = r.simpleText_do.screen.className, FWDUVPUtils.isFirefox && (r.simpleText_do.hasTransform3d_bl = !1, r.simpleText_do.hasTransform2d_bl = !1), r.simpleText_do.setBackfaceVisibility(), r.simpleText_do.getStyle().width = "100%", r.simpleText_do.getStyle().fontFamily = "Arial", r.simpleText_do.getStyle().fontSize = "12px", r.simpleText_do.getStyle().textAlign = "left", r.simpleText_do.getStyle().color = "#FFFFFF", r.simpleText_do.getStyle().fontSmoothing = "antialiased", r.simpleText_do.getStyle().webkitFontSmoothing = "antialiased", r.simpleText_do.getStyle().textRendering = "optimizeLegibility", r.simpleText_do.setInnerHTML(r.htmlContent), r.addChild(r.simpleText_do)
            }, r.positionDescription = function () {
                r.simpleText_do.setY(parseInt(r.finalH - r.simpleText_do.getHeight()))
            }, r.setupBlackAndWhiteImage = function (e) {
                if (r.hasCanvas_bl && "opacity" != r.thumbnailSelectedType_str) {
                    var t = document.createElement("canvas"),
                        o = t.getContext("2d");
                    t.width = r.imageOriginalW, t.height = r.imageOriginalH, o.drawImage(e, 0, 0);
                    var s = o.getImageData(0, 0, t.width, t.height),
                        n = s._d;
                    if ("threshold" == r.thumbnailSelectedType_str)
                        for (var i = 0; i < n.length; i += 4) {
                            var a = 150 <= .2126 * n[i] + .7152 * n[i + 1] + .0722 * n[i + 2] ? 255 : 0;
                            n[i] = n[i + 1] = n[i + 2] = a
                        } else if ("blackAndWhite" == r.thumbnailSelectedType_str)
                            for (i = 0; i < n.length; i += 4) {
                                a = .2126 * n[i] + .7152 * n[i + 1] + .0722 * n[i + 2];
                                n[i] = n[i + 1] = n[i + 2] = a
                            }
                    o.putImageData(s, 0, 0, 0, 0, s.width, s.height), r.effectImage_do = new FWDUVPDisplayObject("canvas"), r.effectImage_do.screen = t, r.effectImage_do.setAlpha(.9), r.effectImage_do.setMainProperties()
                }
            }, r.setImage = function (e) {
                r.normalImage_do = new FWDUVPDisplayObject("img"), r.normalImage_do.setScreen(e), r.imageOriginalW = r.normalImage_do.w, r.imageOriginalH = r.normalImage_do.h, r.setButtonMode(!0), r.setupBlackAndWhiteImage(e), r.resizeImage(), r.imageHolder_do.setX(parseInt(r.finalW / 2)), r.imageHolder_do.setY(parseInt(r.finalH / 2)), r.imageHolder_do.setWidth(0), r.imageHolder_do.setHeight(0), r.normalImage_do.setX(-parseInt(r.normalImage_do.w / 2)), r.normalImage_do.setY(-parseInt(r.normalImage_do.h / 2)), r.normalImage_do.setAlpha(0), r.effectImage_do && (r.effectImage_do.setX(-parseInt(r.normalImage_do.w / 2)), r.effectImage_do.setY(-parseInt(r.normalImage_do.h / 2)), r.effectImage_do.setAlpha(.01)), FWDAnimation.to(r.imageHolder_do, .8, {
                    x: 0,
                    y: 0,
                    w: r.finalW,
                    h: r.finalH,
                    ease: Expo.easeInOut
                }), FWDAnimation.to(r.normalImage_do, .8, {
                    alpha: 1,
                    x: r.imageFinalX,
                    y: r.imageFinalY,
                    ease: Expo.easeInOut
                }), r.effectImage_do && FWDAnimation.to(r.effectImage_do, .8, {
                    x: r.imageFinalX,
                    y: r.imageFinalY,
                    ease: Expo.easeInOut
                }), r.hasPointerEvent_bl ? (r.screen.addEventListener("pointerup", r.onMouseUp), r.screen.addEventListener("pointerover", r.onMouseOver), r.screen.addEventListener("pointerout", r.onMouseOut)) : r.screen.addEventListener && (r.isMbl || (r.screen.addEventListener("mouseover", r.onMouseOver), r.screen.addEventListener("mouseout", r.onMouseOut), r.screen.addEventListener("mouseup", r.onMouseUp)), r.screen.addEventListener("touchend", r.onMouseUp)), r.imageHolder_do.addChild(r.normalImage_do), r.effectImage_do && r.imageHolder_do.addChild(r.effectImage_do), r.hasImage_bl = !0, r.id == t.id && r.disable()
            }, r.onMouseOver = function (e, t) {
                r.isDisabled_bl || e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE || r.setSelectedState(!0)
            }, r.onMouseOut = function (e) {
                r.isDisabled_bl || e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE || r.setNormalState(!0)
            }, r.onMouseUp = function (e) {
                r.isDisabled_bl || 2 == e.button || (e.preventDefault && e.preventDefault(), r.dispatchEvent(l.MOUSE_UP, {
                    id: r.id
                }))
            }, r.resizeAndPosition = function (e, t) {
                FWDAnimation.killTweensOf(r), FWDAnimation.killTweensOf(r.imageHolder_do), e ? FWDAnimation.to(r, .8, {
                    x: r.finalX,
                    y: r.finalY,
                    delay: t,
                    ease: Expo.easeInOut
                }) : (r.setX(r.finalX), r.setY(r.finalY)), r.setWidth(r.finalW), r.setHeight(r.finalH), r.imageHolder_do.setX(0), r.imageHolder_do.setY(0), r.imageHolder_do.setWidth(r.finalW), r.imageHolder_do.setHeight(r.finalH), r.dumy_do.setWidth(r.finalW), r.dumy_do.setHeight(r.finalH), r.resizeImage(), r.positionDescription()
            }, r.resizeImage = function (e) {
                var t, o, s;
                r.normalImage_do && (FWDAnimation.killTweensOf(r.normalImage_do), t = r.finalW / r.imageOriginalW, s = (o = r.finalH / r.imageOriginalH) <= t ? t : o, r.imageFinalW = Math.ceil(s * r.imageOriginalW), r.imageFinalH = Math.ceil(s * r.imageOriginalH), r.imageFinalX = Math.round((r.finalW - r.imageFinalW) / 2), r.imageFinalY = Math.round((r.finalH - r.imageFinalH) / 2), r.effectImage_do && (FWDAnimation.killTweensOf(r.effectImage_do), r.effectImage_do.setX(r.imageFinalX), r.effectImage_do.setY(r.imageFinalY), r.effectImage_do.setWidth(r.imageFinalW), r.effectImage_do.setHeight(r.imageFinalH), r.isDisabled_bl && r.setSelectedState(!1, !0)), r.normalImage_do.setX(r.imageFinalX), r.normalImage_do.setY(r.imageFinalY), r.normalImage_do.setWidth(r.imageFinalW + 1), r.normalImage_do.setHeight(r.imageFinalH), r.isDisabled_bl ? r.normalImage_do.setAlpha(.3) : r.normalImage_do.setAlpha(1))
            }, r.setNormalState = function (e) {
                r.isSelected_bl && (r.isSelected_bl = !1, r.slTitle && (r.simpleText_do.screen.className = r.slTitle), "threshold" == r.thumbnailSelectedType_str || "blackAndWhite" == r.thumbnailSelectedType_str ? e ? FWDAnimation.to(r.effectImage_do, 1, {
                    alpha: .01,
                    ease: Quart.easeOut
                }) : r.effectImage_do.setAlpha(.01) : "opacity" == r.thumbnailSelectedType_str && (e ? FWDAnimation.to(r.normalImage_do, 1, {
                    alpha: 1,
                    ease: Quart.easeOut
                }) : r.normalImage_do.setAlpha(1)))
            }, r.setSelectedState = function (e, t) {
                r.isSelected_bl && !t || (r.isSelected_bl = !0, r.setTitleSelectedClass(), "threshold" == r.thumbnailSelectedType_str || "blackAndWhite" == r.thumbnailSelectedType_str ? e ? FWDAnimation.to(r.effectImage_do, 1, {
                    alpha: 1,
                    ease: Expo.easeOut
                }) : r.effectImage_do.setAlpha(1) : "opacity" == r.thumbnailSelectedType_str && (e ? FWDAnimation.to(r.normalImage_do, 1, {
                    alpha: .3,
                    ease: Expo.easeOut
                }) : r.normalImage_do.setAlpha(.3)))
            }, r.show = function () {
                FWDAnimation.to(r, .8, {
                    scale: 1,
                    ease: Expo.easeInOut
                })
            }, r.hide = function () {
                FWDAnimation.to(r, .8, {
                    scale: 0,
                    ease: Expo.easeInOut
                })
            }, r.enable = function () {
                r.hasImage_bl && (r.isDisabled_bl = !1, r.setButtonMode(!0), r.setNormalState(!0))
            }, r.disable = function () {
                r.hasImage_bl && (r.isDisabled_bl = !0, r.setButtonMode(!1), r.setSelectedState(!0), r.setTitleSelectedClass())
            }, r.setTitleSelectedClass = function () {
                r.slTitle && (r.simpleText_do.screen.className = r.slTitle + " active")
            }, r.init()
        };
        l.setPrototype = function () {
            l.prototype = new FWDUVPTransformDisplayObject("div")
        }, l.MOUSE_UP = "onMouseUp", l.prototype = null, e.FWDUVPCategoriesThumb = l
    }(window),
    function (s) {
        var t = function (n, i) {
            var a = this;
            t.prototype;
            a.categories_ar = i.categories_ar, a.buttons_ar = [], a.arrowW = i.arrowW, a.arrowH = i.arrowH, a.useHEX = n._d.useHEX, a.nBC = n._d.nBC, a.sBC = n._d.sBC, a.arrowN_str = i.arrowN_str, a.arrowS_str = i.arrowS_str, a.selLabel = i.selectorLabel, a.selBkColN = i.selectorBackgroundNormalColor, a.selBkColS = i.selectorBackgroundSelectedColor, a.selTxtColN = i.selectorTextNormalColor, a.selTxtColS = i.selectorTextSelectedColor, a.itmBkClrN = i.buttonBackgroundNormalColor, a.itmBkClrS = i.buttonBackgroundSelectedColor, a.itmTxtClrN = i.buttonTextNormalColor, a.itmTxtClrS = i.buttonTextSelectedColor, a.scrBarHandY = 0, a.ttBtns = a.categories_ar.length, a.curId = i.startAtPlaylist, a.btnsHldW = 0, a.btnsHldH = 0, a.totalWidth = n.sW, a.buttonHeight = i.buttonHeight, a.ttBtnH = 0, a.spcBtwBtns = 1, a.thmbsFinY = 0, a.vy = 0, a.vy2 = 0, a.frc = .9, a.isShd = !1, a.addMouseWheelSupport_bl = n._d.addMouseWheelSupport_bl, a.scollbarSpeedSensitivity = n._d.scollbarSpeedSensitivity, a.isOpnd = !1, a.hasPointEvt = FWDUVPUtils.hasPointerEvent, a.isMbl = FWDUVPUtils.isMobile, a.init = function () {
                a.setOverflow("visible"), a.setupMainContainers(), a.setupScrollLogic(), a.getMaxWidthResizeAndPosition(), a.mainButtonsHolder_do.setVisible(!1), a.bk_do.setVisible(!1)
            }, a.setupMainContainers = function () {
                var e, t;
                a.mainHld = new FWDUVPDisplayObject("div"), a.mainHld.setOverflow("visible"), a.addChild(a.mainHld), a.bk_do = new FWDUVPDisplayObject("div"), a.bk_do.screen.className = "fwduvp-combobox-background", a.bk_do.setY(a.buttonHeight), a.bk_do.setBkColor(n.playlistBackgroundColor_str), a.bk_do.setAlpha(0), a.mainHld.addChild(a.bk_do), a.mainButtonsHolder_do = new FWDUVPDisplayObject("div"), a.mainButtonsHolder_do.setY(a.buttonHeight), a.mainHld.addChild(a.mainButtonsHolder_do), n.repeatBackground_bl ? (a.dummyBk_do = new FWDUVPDisplayObject("div"), a.dummyBk_do.getStyle().background = "url('" + n.bkPath_str + "')") : (a.dummyBk_do = new FWDUVPDisplayObject("img"), (t = new Image).src = n.bkPath_str, a.dummyBk_do.setScreen(t)), a.dummyBk_do.setHeight(a.buttonHeight), a.mainHld.addChild(a.dummyBk_do), a.buttonsHolder_do = new FWDUVPDisplayObject("div"), a.mainButtonsHolder_do.addChild(a.buttonsHolder_do);
                var o = a.selLabel;
                "default" == a.selLabel && (o = a.categories_ar[a.curId]), FWDUVPComboBoxSelector.setPrototype(), a.selector_do = new FWDUVPComboBoxSelector(11, 6, i.arrowN_str, i.arrowS_str, o, a.selBkColN, a.selBkColS, a.selTxtColN, a.selTxtColS, a.buttonHeight, a.useHEX, a.nBC, a.sBC), a.mainHld.addChild(a.selector_do), a.selector_do.setNormalState(!1), a.selector_do.addListener(FWDUVPComboBoxSelector.CLICK, a.openMenuHandler);
                for (var s = 0; s < a.ttBtns; s++) FWDUVPComboBoxButton.setPrototype(), e = new FWDUVPComboBoxButton(a, a.categories_ar[s], a.itmBkClrN, a.itmBkClrS, a.itmTxtClrN, a.itmTxtClrS, s, a.buttonHeight), (a.buttons_ar[s] = e).addListener(FWDUVPComboBoxButton.CLICK, a.buttonOnMouseDownHandler), a.buttonsHolder_do.addChild(e)
            }, a.buttonOnMouseDownHandler = function (e) {
                a.curId = e.id, clearTimeout(a.hideMenuTimeOutId_to), a.hide(!0), a.selector_do.enable(), a.hasPointEvt ? s.removeEventListener("pointerdown", a.checkOpenedMenu) : (s.removeEventListener("touchstart", a.checkOpenedMenu), a.isMbl || (s.removeEventListener("mousedown", a.checkOpenedMenu), s.removeEventListener("mousemove", a.checkOpenedMenu))), a.selector_do.setText(a.buttons_ar[a.curId].label1_str), a.dispatchEvent(t.BUTTON_PRESSED, {
                    id: a.curId
                })
            }, a.openMenuHandler = function (e) {
                FWDAnimation.isTweening(a.mainButtonsHolder_do) || (a.isShd ? a.checkOpenedMenu(e.e, !0) : (a.selector_do.disable(), a.show(!0), a.startToCheckOpenedMenu(), a.dispatchEvent(t.OPEN)))
            }, a.setButtonsStateBasedOnId = function (e) {
                a.curId = e;
                for (var t = 0; t < a.ttBtns; t++) button_do = a.buttons_ar[t], t == a.curId ? button_do.disable() : button_do.enable();
                a.selector_do.setText(a.buttons_ar[a.curId].label1_str), a.scrHandler_do ? (a.updateScrollBarSizeActiveAndDeactivate(), a.updateScrollBarHandlerAndContent(!1, !0)) : a.thmbsFinY = 0
            }, a.setValue = function (e) {
                a.curId = e, a.setButtonsStateBasedOnId()
            }, a.startToCheckOpenedMenu = function (e) {
                a.hasPointEvt ? s.addEventListener("pointerdown", a.checkOpenedMenu) : (s.addEventListener("touchstart", a.checkOpenedMenu), a.isMbl || s.addEventListener("mousedown", a.checkOpenedMenu))
            }, a.checkOpenedMenu = function (e, t) {
                e.preventDefault && e.preventDefault();
                var o = FWDUVPUtils.getViewportMouseCoordinates(e);
                e.type, !FWDUVPUtils.hitTest(a.screen, o.screenX, o.screenY) && !FWDUVPUtils.hitTest(a.mainButtonsHolder_do.screen, o.screenX, o.screenY) || t ? (a.hide(!0), a.selector_do.enable(), a.hasPointEvt ? s.removeEventListener("pointerdown", a.checkOpenedMenu) : (a.isMbl || (s.removeEventListener("touchstart", a.checkOpenedMenu), s.removeEventListener("mousemove", a.checkOpenedMenu)), s.removeEventListener("mousedown", a.checkOpenedMenu))) : clearTimeout(a.hideMenuTimeOutId_to), FWDUVPUtils.hitTest(a.selector_do.screen, o.screenX, o.screenY) && !a.isMbl && setTimeout(function () {
                    a.selector_do.setSelectedState(!0)
                }, 50)
            }, a.getMaxWidthResizeAndPosition = function () {
                for (var e, t = a.ttBtnH = 0; t < a.ttBtns; t++)(e = a.buttons_ar[t]).setY(t * (e.totalHeight + a.spcBtwBtns)), a.allowToScrollAndScrollBarIsActive_bl && a.isMbl, a.totalWidth = n.sW, e.totalWidth = a.totalWidth, e.setWidth(a.totalWidth), e.centerText();
                a.ttBtnH = e.getY() + e.totalHeight - a.spcBtwBtns;
                var o = 2;
                a.isMbl && (o = 0), a.dummyBk_do.setWidth(a.totalWidth + o), a.setWidth(a.totalWidth), a.setHeight(a.buttonHeight), a.selector_do.totalWidth = a.totalWidth + o, a.selector_do.setWidth(a.totalWidth + o), a.selector_do.centerText(), a.buttonsHolder_do.setWidth(a.totalWidth), a.buttonsHolder_do.setHeight(a.ttBtnH)
            }, a.position = function () {
                FWDUVPUtils.isAndroid ? (a.setX(Math.floor(a.finalX)), a.setY(Math.floor(a.finalY - 1)), setTimeout(a.poscombo - box, 100)) : (a.poscombo, box())
            }, a.resizeAndPosition = function () {
                a.sW = n.sW, a.sH = n.sH, a.bk_do.setWidth(a.sW), a.bk_do.setHeight(a.sH - n.removeFromThumbsHolderHeight + 5), a.mainButtonsHolder_do.setWidth(a.sW), a.mainButtonsHolder_do.setHeight(a.sH - n.removeFromThumbsHolderHeight), a.ttBtnH > a.mainButtonsHolder_do.h ? a.allowToScrollAndScrollBarIsActive_bl = !0 : a.allowToScrollAndScrollBarIsActive_bl = !1, !a.allowToScrollAndScrollBarIsActive_bl && a.scrMainHolder_do ? a.scrMainHolder_do.setVisible(!1) : a.allowToScrollAndScrollBarIsActive_bl && a.scrMainHolder_do && a.isShd && a.scrMainHolder_do.setVisible(!0), a.scrHandler_do && a.updateScrollBarSizeActiveAndDeactivate(), a.getMaxWidthResizeAndPosition(), a.updateScrollBarHandlerAndContent()
            }, a.hide = function (e, t) {
                (a.isShd || t) && (FWDAnimation.killTweensOf(a), a.isShd = !1, FWDAnimation.killTweensOf(a.mainButtonsHolder_do), FWDAnimation.killTweensOf(a.bk_do), e ? (FWDAnimation.to(a.mainButtonsHolder_do, .8, {
                    y: -a.ttBtnH,
                    ease: Expo.easeInOut,
                    onComplete: a.hideComplete
                }), FWDAnimation.to(a.bk_do, .8, {
                    alpha: 0
                })) : (a.mainButtonsHolder_do.setY(a.buttonHeight - a.ttBtnH), a.bk_do.setAlpha(0), a.setHeight(a.buttonHeight)))
            }, a.hideComplete = function () {
                a.mainButtonsHolder_do.setVisible(!1), a.bk_do.setVisible(!1)
            }, a.show = function (e, t) {
                a.isShd && !t || (FWDAnimation.killTweensOf(a), a.mainButtonsHolder_do.setY(-a.ttBtnH), a.isShd = !0, a.mainButtonsHolder_do.setVisible(!0), a.bk_do.setVisible(!0), a.resizeAndPosition(), FWDAnimation.killTweensOf(a.mainButtonsHolder_do), FWDAnimation.killTweensOf(a.bk_do), a.scrMainHolder_do && a.allowToScrollAndScrollBarIsActive_bl && a.scrMainHolder_do.setVisible(!0), e ? (FWDAnimation.to(a.bk_do, .8, {
                    alpha: 1
                }), FWDAnimation.to(a.mainButtonsHolder_do, .8, {
                    y: a.buttonHeight + n.spaceBetweenThumbnails,
                    ease: Expo.easeInOut
                })) : (a.bk_do.setAlpha(1), a.mainButtonsHolder_do.setY(a.buttonHeight + n.spaceBetweenThumbnails)))
            }, a.setupScrollLogic = function () {
                a.setupMobileScrollbar(), a.isMbl || a.setupScrollbar(), a.addMouseWheelSupport_bl && a.addMouseWheelSupport()
            }, a.setupMobileScrollbar = function () {
                a.hasPointEvt ? a.mainButtonsHolder_do.screen.addEventListener("pointerdown", a.scrollBarTouchStartHandler) : a.mainButtonsHolder_do.screen.addEventListener("touchstart", a.scrollBarTouchStartHandler), a.isMbl && (a.updateMobileScrollBarId_int = setInterval(a.updateMobileScrollBar, 16))
            }, a.scrollBarTouchStartHandler = function (e) {
                e.preventDefault && e.preventDefault(), a.isScrollingOnMove_bl = !1, FWDAnimation.killTweensOf(a.buttonsHolder_do);
                var t = FWDUVPUtils.getViewportMouseCoordinates(e);
                a.isDragging_bl = !0, a.lastPresedY = t.screenY, a.checkLastPresedY = t.screenY, a.hasPointEvt ? (s.addEventListener("pointerup", a.scrollBarTouchEndHandler), s.addEventListener("pointermove", a.scrollBarTouchMoveHandler)) : (s.addEventListener("touchend", a.scrollBarTouchEndHandler), s.addEventListener("touchmove", a.scrollBarTouchMoveHandler)), s.addEventListener("mouseup", a.scrollBarTouchEndHandler), s.addEventListener("mousemove", a.scrollBarTouchMoveHandler), clearInterval(a.updateMoveMobileScrollbarId_int), a.updateMoveMobileScrollbarId_int = setInterval(a.updateMoveMobileScrollbar, 20)
            }, a.scrollBarTouchMoveHandler = function (e) {
                var t, o, s;
                e.preventDefault && e.preventDefault(), e.stopImmediatePropagation(), a.ttBtnH < a.mainButtonsHolder_do.h || (n.prt.showDisable(), ((t = FWDUVPUtils.getViewportMouseCoordinates(e)).screenY >= a.checkLastPresedY + 6 || t.screenY <= a.checkLastPresedY - 6) && (a.isScrollingOnMove_bl = !0), o = t.screenY - a.lastPresedY, a.thmbsFinY += o, a.thmbsFinY = Math.round(a.thmbsFinY), a.lastPresedY = t.screenY, a.vy = 2 * o, a.isMobile || (0 < a.thmbsFinY ? a.thmbsFinY = 0 : a.thmbsFinY < a.mainButtonsHolder_do.h - a.ttBtnH && (a.thmbsFinY = a.mainButtonsHolder_do.h - a.ttBtnH), s = Math.max(0, a.thmbsFinY / (a.mainButtonsHolder_do.h - a.ttBtnH)), a.scrMainHolder_do && (a.scrBarHandY = Math.round((a.scrMainHolder_do.h - a.scrHandler_do.h) * s), a.scrBarHandY < 0 ? a.scrBarHandY = 0 : a.scrBarHandY > a.scrMainHolder_do.h - a.scrHandler_do.h - 1 && (a.scrBarHandY = a.scrMainHolder_do.h - a.scrHandler_do.h - 1), FWDAnimation.killTweensOf(a.scrHandler_do), FWDAnimation.killTweensOf(a.scrHandlerLines_do), a.scrHandler_do.setY(a.scrBarHandY), a.scrHandlerLines_do.setY(a.scrBarHandY + parseInt((a.scrHandler_do.h - a.scrHandlerLinesN_do.h) / 2)))))
            }, a.scrollBarTouchEndHandler = function (e) {
                a.isDragging_bl = !1, clearInterval(a.updateMoveMobileScrollbarId_int), clearTimeout(a.disableOnMoveId_to), a.disableOnMoveId_to = setTimeout(function () {
                    n.prt.hideDisable()
                }, 100), a.hasPointEvt ? (s.removeEventListener("pointerup", a.scrollBarTouchEndHandler), s.removeEventListener("pointermove", a.scrollBarTouchMoveHandler)) : (s.removeEventListener("touchend", a.scrollBarTouchEndHandler), s.removeEventListener("touchmove", a.scrollBarTouchMoveHandler)), s.removeEventListener("mousemove", a.scrollBarTouchMoveHandler)
            }, a.updateMoveMobileScrollbar = function () {
                a.buttonsHolder_do.setY(a.thmbsFinY)
            }, a.updateMobileScrollBar = function (e) {
                a.isDragging_bl || (a.ttBtnH < a.mainButtonsHolder_do.h && (a.thmbsFinY = .01), a.vy *= a.frc, a.thmbsFinY += a.vy, 0 < a.thmbsFinY ? (a.vy2 = .3 * (0 - a.thmbsFinY), a.vy *= a.frc, a.thmbsFinY += a.vy2) : a.thmbsFinY < a.mainButtonsHolder_do.h - a.ttBtnH && (a.vy2 = .3 * (a.mainButtonsHolder_do.h - a.ttBtnH - a.thmbsFinY), a.vy *= a.frc, a.thmbsFinY += a.vy2), a.buttonsHolder_do.setY(Math.round(a.thmbsFinY)))
            }, a.setupScrollbar = function () {
                a.scrMainHolder_do = new FWDUVPDisplayObject("div"), a.scrMainHolder_do.setVisible(!1), a.scrMainHolder_do.setWidth(n.scrWidth), a.scrTrack_do = new FWDUVPDisplayObject("div"), a.scrTrack_do.setWidth(n.scrWidth);
                var e = new Image;
                e.src = n.scrBkTop_img.src, a.scrTrackTop_do = new FWDUVPDisplayObject("img"), a.scrTrackTop_do.setWidth(n.scrTrackTop_do.w), a.scrTrackTop_do.setHeight(n.scrTrackTop_do.h), a.scrTrackTop_do.setScreen(e), a.scrTrackMiddle_do = new FWDUVPDisplayObject("div"), a.scrTrackMiddle_do.getStyle().background = "url('" + n._d.scrBkMiddlePath_str + "')", a.scrTrackMiddle_do.setWidth(n.scrWidth), a.scrTrackMiddle_do.setY(a.scrTrackTop_do.h);
                var t = new Image;
                t.src = n._d.scrBkBottomPath_str, a.scrTrackBottom_do = new FWDUVPDisplayObject("img"), a.scrTrackBottom_do.setScreen(t), a.scrTrackBottom_do.setWidth(a.scrTrackTop_do.w), a.scrTrackBottom_do.setHeight(a.scrTrackTop_do.h), a.scrHandler_do = new FWDUVPDisplayObject("div"), a.scrHandler_do.setWidth(n.scrWidth), a.scrDragTop_img = new Image, a.scrDragTop_img.src = n.scrDragTop_img.src, a.scrDragTop_img.width = n.scrDragTop_img.width, a.scrDragTop_img.height = n.scrDragTop_img.height, a.scrHandlerTop_do = new FWDUVPDisplayObject("img"), a.useHEX ? (a.scrHandlerTop_do = new FWDUVPDisplayObject("div"), a.scrHandlerTop_do.setWidth(a.scrDragTop_img.width), a.scrHandlerTop_do.setHeight(a.scrDragTop_img.height), a.mainScrubberDragTop_canvas = FWDUVPUtils.getCanvasWithModifiedColor(a.scrDragTop_img, a.nBC).canvas, a.scrHandlerTop_do.screen.appendChild(a.mainScrubberDragTop_canvas)) : (a.scrHandlerTop_do = new FWDUVPDisplayObject("img"), a.scrHandlerTop_do.setScreen(a.scrDragTop_img)), a.scrHandlerMiddle_do = new FWDUVPDisplayObject("div"), a.middleImage = new Image, a.middleImage.src = n._d.scrDragMiddlePath_str, a.useHEX ? a.middleImage.onload = function () {
                    a.scrubberDragMiddle_canvas = FWDUVPUtils.getCanvasWithModifiedColor(a.middleImage, a.nBC, !0), a.scrubberDragImage_img = a.scrubberDragMiddle_canvas.image, a.scrHandlerMiddle_do.getStyle().background = "url('" + a.scrubberDragImage_img.src + "') repeat-y"
                } : a.scrHandlerMiddle_do.getStyle().background = "url('" + n._d.scrDragMiddlePath_str + "')", a.scrHandlerMiddle_do.setWidth(n.scrWidth), a.scrHandlerMiddle_do.setY(a.scrHandlerTop_do.h), a.scrHandlerBottom_do = new FWDUVPDisplayObject("div"), a.bottomImage = new Image, a.bottomImage.src = n._d.scrDragMiddlePath_str, a.useHEX ? a.bottomImage.onload = function () {
                    a.scrubberDragBottom_canvas = FWDUVPUtils.getCanvasWithModifiedColor(a.bottomImage, a.nBC, !0), a.scrubberDragBottomImage_img = a.scrubberDragBottom_canvas.image, a.scrHandlerBottom_do.getStyle().background = "url('" + a.scrubberDragBottomImage_img.src + "') repeat-y"
                } : a.scrHandlerBottom_do.getStyle().background = "url('" + n._d.scrDragBottomPath_str + "')", a.scrHandlerBottom_do.setWidth(n.scrWidth), a.scrHandlerBottom_do.setY(a.scrHandlerTop_do.h), a.scrHandlerBottom_do.setWidth(a.scrHandlerTop_do.w), a.scrHandlerBottom_do.setHeight(a.scrHandlerTop_do.h), a.scrHandler_do.setButtonMode(!0), a.scrLinesN_img = new Image, a.scrLinesN_img.src = n.scrLinesN_img.src, a.scrLinesN_img.width = n.scrLinesN_img.width, a.scrLinesN_img.height = n.scrLinesN_img.height, a.useHEX ? (a.scrHandlerLinesN_do = new FWDUVPDisplayObject("div"), a.scrHandlerLinesN_do.setWidth(a.scrLinesN_img.width), a.scrHandlerLinesN_do.setHeight(a.scrLinesN_img.height), a.mainhandlerN_canvas = FWDUVPUtils.getCanvasWithModifiedColor(a.scrLinesN_img, a.sBC).canvas, a.scrHandlerLinesN_do.screen.appendChild(a.mainhandlerN_canvas)) : (a.scrHandlerLinesN_do = new FWDUVPDisplayObject("img"), a.scrHandlerLinesN_do.setScreen(a.scrLinesN_img)), a.scrHandlerLinesS_img = new Image, a.scrHandlerLinesS_img.src = n._d.scrLinesSPath_str, a.useHEX ? (a.scrHandlerLinesS_do = new FWDUVPDisplayObject("div"), a.scrHandlerLinesS_img.onload = function () {
                    a.scrHandlerLinesS_do.setWidth(a.scrHandlerLinesN_do.w), a.scrHandlerLinesS_do.setHeight(a.scrHandlerLinesN_do.h), a.scrubberLines_s_canvas = FWDUVPUtils.getCanvasWithModifiedColor(a.scrHandlerLinesS_img, a.sBC, !0), a.scrubbelinesSImage_img = a.scrubberLines_s_canvas.image, a.scrHandlerLinesS_do.getStyle().background = "url('" + a.scrubbelinesSImage_img.src + "') repeat-y"
                }) : (a.scrHandlerLinesS_do = new FWDUVPDisplayObject("img"), a.scrHandlerLinesS_do.setScreen(a.scrHandlerLinesS_img), a.scrHandlerLinesS_do.setWidth(a.scrHandlerLinesN_do.w), a.scrHandlerLinesS_do.setHeight(a.scrHandlerLinesN_do.h)), a.scrHandlerLinesS_do.setAlpha(0), a.scrHandlerLines_do = new FWDUVPDisplayObject("div"), a.scrHandlerLines_do.setWidth(a.scrHandlerLinesN_do.w), a.scrHandlerLines_do.setHeight(a.scrHandlerLinesN_do.h), a.scrHandlerLines_do.setButtonMode(!0), a.scrTrack_do.addChild(a.scrTrackTop_do), a.scrTrack_do.addChild(a.scrTrackMiddle_do), a.scrTrack_do.addChild(a.scrTrackBottom_do), a.scrHandler_do.addChild(a.scrHandlerTop_do), a.scrHandler_do.addChild(a.scrHandlerMiddle_do), a.scrHandler_do.addChild(a.scrHandlerBottom_do), a.scrHandlerLines_do.addChild(a.scrHandlerLinesN_do), a.scrHandlerLines_do.addChild(a.scrHandlerLinesS_do), a.scrMainHolder_do.addChild(a.scrTrack_do), a.scrMainHolder_do.addChild(a.scrHandler_do), a.scrMainHolder_do.addChild(a.scrHandlerLines_do), a.mainButtonsHolder_do.addChild(a.scrMainHolder_do), a.scrHandler_do.screen.addEventListener ? (a.scrHandler_do.screen.addEventListener("mouseover", a.scrollBarHandlerOnMouseOver), a.scrHandler_do.screen.addEventListener("mouseout", a.scrollBarHandlerOnMouseOut), a.scrHandler_do.screen.addEventListener("mousedown", a.scrollBarHandlerOnMouseDown), a.scrHandlerLines_do.screen.addEventListener("mouseover", a.scrollBarHandlerOnMouseOver), a.scrHandlerLines_do.screen.addEventListener("mouseout", a.scrollBarHandlerOnMouseOut), a.scrHandlerLines_do.screen.addEventListener("mousedown", a.scrollBarHandlerOnMouseDown)) : a.scrHandler_do.screen.attachEvent && (a.scrHandler_do.screen.attachEvent("onmouseover", a.scrollBarHandlerOnMouseOver), a.scrHandler_do.screen.attachEvent("onmouseout", a.scrollBarHandlerOnMouseOut), a.scrHandler_do.screen.attachEvent("onmousedown", a.scrollBarHandlerOnMouseDown), a.scrHandlerLines_do.screen.attachEvent("onmouseover", a.scrollBarHandlerOnMouseOver), a.scrHandlerLines_do.screen.attachEvent("onmouseout", a.scrollBarHandlerOnMouseOut), a.scrHandlerLines_do.screen.attachEvent("onmousedown", a.scrollBarHandlerOnMouseDown))
            }, a.scrollBarHandlerOnMouseOver = function (e) {
                a.allowToScrollAndScrollBarIsActive_bl && (FWDAnimation.killTweensOf(a.scrHandlerLinesN_do), FWDAnimation.killTweensOf(a.scrHandlerLinesS_do), FWDAnimation.to(a.scrHandlerLinesN_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                }), FWDAnimation.to(a.scrHandlerLinesS_do, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }))
            }, a.scrollBarHandlerOnMouseOut = function (e) {
                !a.isDragging_bl && a.allowToScrollAndScrollBarIsActive_bl && (FWDAnimation.killTweensOf(a.scrHandlerLinesN_do), FWDAnimation.killTweensOf(a.scrHandlerLinesS_do), FWDAnimation.to(a.scrHandlerLinesN_do, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }), FWDAnimation.to(a.scrHandlerLinesS_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                }))
            }, a.scrollBarHandlerOnMouseDown = function (e) {
                var t;
                a.allowToScrollAndScrollBarIsActive_bl && (t = FWDUVPUtils.getViewportMouseCoordinates(e), a.isDragging_bl = !0, a.yPositionOnPress = a.scrHandler_do.y, a.lastPresedY = t.screenY, FWDAnimation.killTweensOf(a.scrHandler_do), n.prt.showDisable(), s.addEventListener ? (s.addEventListener("mousemove", a.scrollBarHandlerMoveHandler), s.addEventListener("mouseup", a.scrollBarHandlerEndHandler)) : document.attachEvent && (document.attachEvent("onmousemove", a.scrollBarHandlerMoveHandler), document.attachEvent("onmouseup", a.scrollBarHandlerEndHandler)))
            }, a.scrollBarHandlerMoveHandler = function (e) {
                e.preventDefault && e.preventDefault();
                var t = FWDUVPUtils.getViewportMouseCoordinates(e),
                    o = a.scrBarHandY + parseInt((a.scrHandler_do.h - a.scrHandlerLines_do.h) / 2);
                a.scrBarHandY = Math.round(a.yPositionOnPress + t.screenY - a.lastPresedY), a.scrBarHandY >= a.scrTrack_do.h - a.scrHandler_do.h ? a.scrBarHandY = a.scrTrack_do.h - a.scrHandler_do.h : a.scrBarHandY <= 0 && (a.scrBarHandY = 0), a.scrHandler_do.setY(a.scrBarHandY), FWDAnimation.killTweensOf(a.scrHandler_do), FWDAnimation.to(a.scrHandlerLines_do, .8, {
                    y: o,
                    ease: Quart.easeOut
                }), a.updateScrollBarHandlerAndContent(!0)
            }, a.scrollBarHandlerEndHandler = function (e) {
                var t = FWDUVPUtils.getViewportMouseCoordinates(e);
                a.isDragging_bl = !1, FWDUVPUtils.hitTest(a.scrHandler_do.screen, t.screenX, t.screenY) || (FWDAnimation.killTweensOf(a.scrHandlerLinesN_do), FWDAnimation.killTweensOf(a.scrHandlerLinesS_do), FWDAnimation.to(a.scrHandlerLinesN_do, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }), FWDAnimation.to(a.scrHandlerLinesS_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                })), n.prt.hideDisable(), FWDAnimation.killTweensOf(a.scrHandler_do), FWDAnimation.to(a.scrHandler_do, .4, {
                    y: a.scrBarHandY,
                    ease: Quart.easeOut
                }), s.removeEventListener ? (s.removeEventListener("mousemove", a.scrollBarHandlerMoveHandler), s.removeEventListener("mouseup", a.scrollBarHandlerEndHandler)) : document.detachEvent && (document.detachEvent("onmousemove", a.scrollBarHandlerMoveHandler), document.detachEvent("onmouseup", a.scrollBarHandlerEndHandler))
            }, a.updateScrollBarSizeActiveAndDeactivate = function () {
                a.disableForAWhileAfterThumbClick_bl || (a.allowToScrollAndScrollBarIsActive_bl ? (a.allowToScrollAndScrollBarIsActive_bl = !0, a.scrMainHolder_do.setX(a.sW - a.scrMainHolder_do.w), a.scrMainHolder_do.setHeight(a.mainButtonsHolder_do.h), a.scrTrack_do.setHeight(a.scrMainHolder_do.h), a.scrTrackMiddle_do.setHeight(a.scrTrack_do.h - 2 * a.scrTrackTop_do.h), a.scrTrackBottom_do.setY(a.scrTrackMiddle_do.y + a.scrTrackMiddle_do.h), a.scrMainHolder_do.setAlpha(1), a.scrHandler_do.setButtonMode(!0), a.scrHandlerLines_do.setButtonMode(!0)) : (a.allowToScrollAndScrollBarIsActive_bl = !1, a.scrMainHolder_do.setX(a.sW - a.scrMainHolder_do.w), a.scrMainHolder_do.setHeight(a.mainButtonsHolder_do.h), a.scrTrack_do.setHeight(a.scrMainHolder_do.h), a.scrTrackMiddle_do.setHeight(a.scrTrack_do.h - 2 * a.scrTrackTop_do.h), a.scrTrackBottom_do.setY(a.scrTrackMiddle_do.y + a.scrTrackMiddle_do.h), a.scrMainHolder_do.setAlpha(.5), a.scrHandler_do.setY(0), a.scrHandler_do.setButtonMode(!1), a.scrHandlerLines_do.setButtonMode(!1)), a.scrHandler_do.setHeight(Math.max(120, Math.round(Math.min(1, a.scrMainHolder_do.h / a.ttBtnH) * a.scrMainHolder_do.h))), a.scrHandlerMiddle_do.setHeight(a.scrHandler_do.h - 2 * a.scrHandlerTop_do.h), a.scrHandlerBottom_do.setY(a.scrHandlerMiddle_do.y + a.scrHandlerMiddle_do.h), FWDAnimation.killTweensOf(a.scrHandlerLines_do), a.scrHandlerLines_do.setY(a.scrBarHandY + parseInt((a.scrHandler_do.h - a.scrHandlerLines_do.h) / 2)), a.scrHandlerBottom_do.setY(a.scrHandler_do.h - a.scrHandlerBottom_do.h))
            }, a.addMouseWheelSupport = function () {
                a.screen.addEventListener ? (a.screen.addEventListener("DOMMouseScroll", a.mouseWheelHandler), a.screen.addEventListener("mousewheel", a.mouseWheelHandler)) : a.screen.attachEvent && a.screen.attachEvent("onmousewheel", a.mouseWheelHandler)
            }, a.mouseWheelHandler = function (e) {
                if (e.preventDefault && e.preventDefault(), a.disableMouseWheel_bl || a.isDragging_bl) return !1;
                var t = e.detail || e.wheelDelta;
                e.wheelDelta && (t *= -1), 0 < t ? a.scrBarHandY += Math.round(160 * a.scollbarSpeedSensitivity * (a.mainButtonsHolder_do.h / a.ttBtnH)) : t < 0 && (a.scrBarHandY -= Math.round(160 * a.scollbarSpeedSensitivity * (a.mainButtonsHolder_do.h / a.ttBtnH))), a.scrBarHandY >= a.scrTrack_do.h - a.scrHandler_do.h ? a.scrBarHandY = a.scrTrack_do.h - a.scrHandler_do.h : a.scrBarHandY <= 0 && (a.scrBarHandY = 0);
                var o = a.scrBarHandY + parseInt((a.scrHandler_do.h - a.scrHandlerLines_do.h) / 2);
                if (FWDAnimation.killTweensOf(a.scrHandler_do), FWDAnimation.killTweensOf(a.scrHandlerLines_do), FWDAnimation.to(a.scrHandlerLines_do, .8, {
                        y: o,
                        ease: Quart.easeOut
                    }), FWDAnimation.to(a.scrHandler_do, .5, {
                        y: a.scrBarHandY,
                        ease: Quart.easeOut
                    }), a.isDragging_bl = !0, a.updateScrollBarHandlerAndContent(!0), a.isDragging_bl = !1, !e.preventDefault) return !1;
                e.preventDefault()
            }, a.updateScrollBarHandlerAndContent = function (e, t) {
                var o;
                a.disableForAWhileAfterThumbClick_bl || (a.allowToScrollAndScrollBarIsActive_bl || t) && (o = 0, a.isDragging_bl && !a.isMbl ? ("Infinity" == (o = a.scrBarHandY / (a.scrMainHolder_do.h - a.scrHandler_do.h)) ? o = 0 : 1 <= o && (scrollPercent = 1), a.thmbsFinY = -1 * Math.round(o * (a.ttBtnH - a.mainButtonsHolder_do.h)), 0 == a.mainButtonsHolder_do.h && (a.thmbsFinY = 0)) : (o = a.curId / (a.ttBtns - 1), a.thmbsFinY = Math.min(0, -1 * Math.round(o * (a.ttBtnH - a.mainButtonsHolder_do.h))), 0 == a.mainButtonsHolder_do.h && (a.thmbsFinY = 0), a.scrMainHolder_do && (a.scrBarHandY = Math.round((a.scrMainHolder_do.h - a.scrHandler_do.h) * o), a.scrBarHandY < 0 ? a.scrBarHandY = 0 : a.scrBarHandY > a.scrMainHolder_do.h - a.scrHandler_do.h - 1 && (a.scrBarHandY = a.scrMainHolder_do.h - a.scrHandler_do.h - 1), FWDAnimation.killTweensOf(a.scrHandler_do), FWDAnimation.killTweensOf(a.scrHandlerLines_do), e ? (FWDAnimation.to(a.scrHandler_do, .4, {
                    y: a.scrBarHandY,
                    ease: Quart.easeOut
                }), FWDAnimation.to(a.scrHandlerLines_do, .8, {
                    y: a.scrBarHandY + parseInt((a.scrHandler_do.h - a.scrHandlerLinesN_do.h) / 2),
                    ease: Quart.easeOut
                })) : (a.scrHandler_do.setY(a.scrBarHandY), a.scrHandlerLines_do.setY(a.scrBarHandY + parseInt((a.scrHandler_do.h - a.scrHandlerLinesN_do.h) / 2))))), a.lastThumbnailFinalY != a.thmbsFinY && (FWDAnimation.killTweensOf(a.buttonsHolder_do), e ? FWDAnimation.to(a.buttonsHolder_do, .5, {
                    y: a.thmbsFinY,
                    ease: Quart.easeOut
                }) : a.buttonsHolder_do.setY(a.thmbsFinY)), a.lastThumbnailFinalY = a.thmbsFinY)
            }, a.init()
        };
        t.setPrototype = function () {
            t.prototype = new FWDUVPDisplayObject("div")
        }, t.OPEN = "open", t.HIDE_COMPLETE = "infoWindowHideComplete", t.BUTTON_PRESSED = "buttonPressed", t.prototype = null, s.FWDUVPComboBox = t
    }(window),
    function () {
        var d = function (t, e, o, s, n, i, a, r) {
            var l = this;
            d.prototype;
            l.bk_sdo = null, l.text_sdo = null, l.dumy_sdo = null, l.label1_str = e, l.bkNClr = o, l.bkSClr = s, l.txtNClr = n, l.txtSClr = i, l.totalWidth = 400, l.totalHeight = r, l.id = a, l.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, l.isMbl = FWDUVPUtils.isMobile, l.isDisabled_bl = !1, l.init = function () {
                l.setBackfaceVisibility(), l.setButtonMode(!0), l.setupMainContainers(), l.setWidth(l.totalWidth), l.setHeight(l.totalHeight), l.setNormalState()
            }, l.setupMainContainers = function () {
                l.bk_sdo = new FWDUVPDisplayObject("div"), l.bk_sdo.setBkColor(l.bkNClr), l.addChild(l.bk_sdo), l.text_sdo = new FWDUVPDisplayObject("div"), l.text_sdo.getStyle().whiteSpace = "nowrap", l.text_sdo.screen.className = "fwduvp-cb-button", l.text_sdo.setBackfaceVisibility(), l.text_sdo.setOverflow("visible"), l.text_sdo.setDisplay("inline-block"), l.text_sdo.getStyle().fontFamily = "Arial", l.text_sdo.getStyle().fontSize = "13px", l.text_sdo.getStyle().padding = "6px", l.text_sdo.getStyle().fontWeight = "100", l.text_sdo.getStyle().color = l.nBC, l.text_sdo.getStyle().fontSmoothing = "antialiased", l.text_sdo.getStyle().webkitFontSmoothing = "antialiased", l.text_sdo.getStyle().textRendering = "optimizeLegibility", FWDUVPUtils.isIEAndLessThen9 ? l.text_sdo.screen.innerText = l.label1_str : l.text_sdo.setInnerHTML(l.label1_str), l.addChild(l.text_sdo), l.dumy_sdo = new FWDUVPDisplayObject("div"), FWDUVPUtils.isIE && (l.dumy_sdo.setBkColor("#FF0000"), l.dumy_sdo.setAlpha(0)), l.addChild(l.dumy_sdo), l.hasPointerEvent_bl ? (l.screen.addEventListener("pointerup", l.onClick), l.screen.addEventListener("pointerover", l.onMouseOver), l.screen.addEventListener("pointerout", l.onMouseOut)) : l.screen.addEventListener && (l.isMbl || (l.screen.addEventListener("mouseover", l.onMouseOver), l.screen.addEventListener("mouseout", l.onMouseOut), l.screen.addEventListener("mouseup", l.onClick)), l.screen.addEventListener("touchend", l.onClick))
            }, l.onMouseOver = function (e) {
                l.isDisabled_bl || e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE || (FWDAnimation.killTweensOf(l.text_sdo), l.setSelectedState(!0), l.dispatchEvent(d.MOUSE_OVER))
            }, l.onMouseOut = function (e) {
                l.isDisabled_bl || e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE || (FWDAnimation.killTweensOf(l.text_sdo), l.setNormalState(!0), l.dispatchEvent(d.MOUSE_OUT))
            }, l.onClick = function (e) {
                l.isDisabled_bl || t.isScrollingOnMove_bl || (e.preventDefault && e.preventDefault(), l.dispatchEvent(d.CLICK, {
                    id: l.id
                }))
            }, l.onMouseDown = function (e) {
                l.isDisabled_bl || t.isScrollingOnMove_bl || (e.preventDefault && e.preventDefault(), l.dispatchEvent(d.MOUSE_DOWN, {
                    id: l.id
                }))
            }, l.setSelectedState = function (e) {
                FWDAnimation.killTweensOf(l.bk_sdo.screen), FWDAnimation.killTweensOf(l.text_sdo.screen), e ? (FWDAnimation.to(l.bk_sdo.screen, .6, {
                    css: {
                        backgroundColor: l.bkSClr
                    },
                    ease: Quart.easeOut
                }), FWDAnimation.to(l.text_sdo.screen, .6, {
                    css: {
                        color: l.txtSClr
                    },
                    ease: Quart.easeOut
                })) : (l.bk_sdo.setBkColor(l.bkSClr), l.text_sdo.getStyle().color = l.txtSClr)
            }, l.setNormalState = function (e) {
                FWDAnimation.killTweensOf(l.bk_sdo.screen), FWDAnimation.killTweensOf(l.text_sdo.screen), e ? (FWDAnimation.to(l.bk_sdo.screen, .6, {
                    css: {
                        backgroundColor: l.bkNClr
                    },
                    ease: Quart.easeOut
                }), FWDAnimation.to(l.text_sdo.screen, .6, {
                    css: {
                        color: l.txtNClr
                    },
                    ease: Quart.easeOut
                })) : (l.bk_sdo.setBkColor(l.bkNClr), l.text_sdo.getStyle().color = l.txtNClr)
            }, l.centerText = function () {
                l.dumy_sdo.setWidth(l.totalWidth), l.dumy_sdo.setHeight(l.totalHeight), l.bk_sdo.setWidth(l.totalWidth), l.bk_sdo.setHeight(l.totalHeight), l.text_sdo.setX(4), l.text_sdo.setY(Math.round((l.totalHeight - l.text_sdo.getHeight()) / 2))
            }, l.getMaxTextWidth = function () {
                return l.text_sdo.getWidth()
            }, l.disable = function () {
                l.isDisabled_bl = !0, l.setButtonMode(!1), l.setSelectedState(!0)
            }, l.enable = function () {
                l.isDisabled_bl = !1, l.setNormalState(!0), l.setButtonMode(!0)
            }, l.init()
        };
        d.setPrototype = function () {
            d.prototype = new FWDUVPDisplayObject("div")
        }, d.FIRST_BUTTON_CLICK = "onFirstClick", d.SECOND_BUTTON_CLICK = "secondButtonOnClick", d.MOUSE_OVER = "onMouseOver", d.MOUSE_OUT = "onMouseOut", d.MOUSE_DOWN = "onMouseDown", d.CLICK = "onClick", d.prototype = null, window.FWDUVPComboBoxButton = d
    }(window),
    function () {
        var h = function (e, t, o, s, n, i, a, r, l, d, _, u, c) {
            var p = this;
            h.prototype;
            p.arrowN_str = o, p.arrowS_str = s, p.label1_str = n, p.bkNColor = i, p.bkSColor = a, p.tNColor = r, p.tSColor = l, p.useHEX = _, p.nBC = u, p.sBC = c, p.totalWidth = 400, p.totalHeight = d, p.arrowWidth = e, p.arrowHeight = t, p.hasPointEvt = FWDUVPUtils.hasPointerEvent, p.isMbl = FWDUVPUtils.isMobile, p.isDble = !1, p.init = function () {
                p.setBackfaceVisibility(), p.setButtonMode(!0), p.setupMainContainers(), p.setWidth(p.totalWidth), p.setHeight(p.totalHeight)
            }, p.setupMainContainers = function () {
                p.bk_sdo = new FWDUVPDisplayObject("div"), p.bk_sdo.getStyle().backgroundColor = p.bkNColor, p.addChild(p.bk_sdo), p.text_sdo = new FWDUVPDisplayObject("div"), p.text_sdo.getStyle().whiteSpace = "nowrap", p.text_sdo.screen.className = "fwduvp-cb-selector", p.text_sdo.setBackfaceVisibility(), p.text_sdo.setOverflow("visible"), p.text_sdo.setDisplay("inline-block"), p.text_sdo.getStyle().fontFamily = "Arial", p.text_sdo.getStyle().fontSize = "13px", p.text_sdo.getStyle().fontWeight = "100", p.text_sdo.getStyle().padding = "6px", p.text_sdo.getStyle().color = p.nBC, p.text_sdo.getStyle().fontSmoothing = "antialiased", p.text_sdo.getStyle().webkitFontSmoothing = "antialiased", p.text_sdo.getStyle().textRendering = "optimizeLegibility", FWDUVPUtils.isIEAndLessThen9 ? p.text_sdo.screen.innerText = p.label1_str : p.text_sdo.setInnerHTML(p.label1_str), p.addChild(p.text_sdo), p.arrow_do = new FWDUVPDisplayObject("div"), p.arrow_do.screen.className = "arrow", p.arrow_do.setOverflow("visible"), p.useHEX ? (p.arrowN_img = new Image, p.arrowN_img.src = p.arrowN_str, p.arrowS_img = new Image, p.arrowS_img.src = p.arrowS_str, p.arrowN_sdo = new FWDUVPDisplayObject("div"), p.arrowS_sdo = new FWDUVPDisplayObject("div"), p.arrowS_img.onload = function () {
                    p.arrowN_sdo.setWidth(p.arrowN_img.width), p.arrowN_sdo.setHeight(p.arrowN_img.height), p.nBC = p.bkNColor, p.scrubberLines_n_canvas = FWDUVPUtils.getCanvasWithModifiedColor(p.arrowN_img, p.nBC, !0), p.scrubbelinesNImage_img = p.scrubberLines_n_canvas.image, p.arrowN_sdo.getStyle().background = "url('" + p.scrubbelinesNImage_img.src + "') repeat-y", p.arrowS_sdo.setWidth(p.arrowS_img.width), p.arrowS_sdo.setHeight(p.arrowS_img.height), p.sBC = p.arrowS_str, p.scrubberLines_s_canvas = FWDUVPUtils.getCanvasWithModifiedColor(p.arrowS_img, p.sBC, !0), p.scrubbelinesSImage_img = p.scrubberLines_s_canvas.image, p.arrowS_sdo.getStyle().background = "url('" + p.scrubbelinesSImage_img.src + "') repeat-y"
                }) : (p.arrowN_sdo = new FWDUVPDisplayObject("div"), p.arrowN_sdo.screen.style.backgroundImage = "url(" + p.arrowN_str + ")", p.arrowS_sdo = new FWDUVPDisplayObject("div"), p.arrowS_sdo.screen.style.backgroundImage = "url(" + p.arrowS_str + ")"), p.arrowS_sdo.setAlpha(0), p.arrow_do.addChild(p.arrowN_sdo), p.arrow_do.addChild(p.arrowS_sdo), p.addChild(p.arrow_do), p.arrowN_sdo.setWidth(p.arrowWidth), p.arrowN_sdo.setHeight(p.arrowHeight), p.arrowS_sdo.setWidth(p.arrowWidth), p.arrowS_sdo.setHeight(p.arrowHeight), p.dumy_sdo = new FWDUVPDisplayObject("div"), FWDUVPUtils.isIE && (p.dumy_sdo.setBkColor("#FF0000"), p.dumy_sdo.setAlpha(0)), p.addChild(p.dumy_sdo), p.hasPointEvt ? (p.screen.addEventListener("pointerup", p.onClick), p.screen.addEventListener("pointerover", p.onMouseOver), p.screen.addEventListener("pointerout", p.onMouseOut)) : p.screen.addEventListener && (p.screen.addEventListener("mouseover", p.onMouseOver), p.screen.addEventListener("mouseout", p.onMouseOut), p.screen.addEventListener("mouseup", p.onClick), p.screen.addEventListener("touchend", p.onClick))
            }, p.onMouseOver = function (e) {
                p.isDble || e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE || (FWDAnimation.killTweensOf(p.text_sdo), p.setSelectedState(!0, 0), p.dispatchEvent(h.MOUSE_OVER))
            }, p.onMouseOut = function (e) {
                p.isDble || e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE || (FWDAnimation.killTweensOf(p.text_sdo), p.setNormalState(!0, !0), p.dispatchEvent(h.MOUSE_OUT))
            }, p.onClick = function (e) {
                p.isDeveleper_bl ? window.open("http://www.webdesign-flash.ro", "_blank") : (e.preventDefault && e.preventDefault(), p.dispatchEvent(h.CLICK, {
                    e: e
                }))
            }, p.onMouseDown = function (e) {
                e.preventDefault && e.preventDefault(), p.dispatchEvent(h.MOUSE_DOWN, {
                    e: e
                })
            }, p.setSelectedState = function (e, t) {
                e ? (FWDAnimation.to(p.bk_sdo, .6, {
                    alpha: 1,
                    ease: Expo.easeOut
                }), FWDAnimation.to(p.text_sdo.screen, .6, {
                    css: {
                        color: p.tSColor
                    },
                    ease: Expo.easeOut
                }), FWDAnimation.to(p.arrowS_sdo, .6, {
                    alpha: 1,
                    ease: Expo.easeOut
                })) : (p.bk_sdo.setAlpha(1), p.text_sdo.getStyle().color = p.tSColor, p.arrowS_sdo.alpha = 1)
            }, p.setNormalState = function (e, t) {
                var o = t ? 0 : .6,
                    o = 0;
                FWDAnimation.killTweensOf(p.bk_sdo), FWDAnimation.killTweensOf(p.text_sdo.screen), FWDAnimation.killTweensOf(p.arrowS_sdo), e ? (FWDAnimation.to(p.bk_sdo, .6, {
                    alpha: 0,
                    delay: o,
                    ease: Expo.easeOut
                }), FWDAnimation.to(p.text_sdo.screen, .6, {
                    css: {
                        color: p.tNColor
                    },
                    delay: o,
                    ease: Expo.easeOut
                }), FWDAnimation.to(p.arrowS_sdo, .6, {
                    alpha: 0,
                    delay: o,
                    ease: Expo.easeOut
                })) : (p.bk_sdo.setAlpha(0), p.text_sdo.getStyle().color = p.tNColor, p.arrowS_sdo.alpha = 0)
            }, p.centerText = function () {
                p.dumy_sdo.setWidth(p.totalWidth), p.dumy_sdo.setHeight(p.totalHeight), p.bk_sdo.setWidth(p.totalWidth), p.bk_sdo.setHeight(p.totalHeight), p.text_sdo.setX(2), p.text_sdo.setY(Math.round((p.totalHeight - p.text_sdo.getHeight()) / 2)), p.arrow_do.setX(p.totalWidth - p.arrowWidth - 5), p.arrow_do.setY(Math.round((p.totalHeight - p.arrowHeight) / 2))
            }, p.getMaxTextWidth = function () {
                return p.text_sdo.getWidth()
            }, p.disable = function () {
                p.isDble = !0, p.setSelectedState(!0), FWDUVPUtils.hasTransform2d && (FWDAnimation.to(p.arrowN_sdo.screen, .8, {
                    css: {
                        rotation: 180
                    },
                    ease: Quart.easeOut
                }), FWDAnimation.to(p.arrowS_sdo.screen, .8, {
                    css: {
                        rotation: 180
                    },
                    ease: Quart.easeOut
                })), p.setNormalState(!0)
            }, p.enable = function () {
                p.isDble = !1, FWDUVPUtils.hasTransform2d && (FWDAnimation.to(p.arrowN_sdo.screen, .8, {
                    css: {
                        rotation: 0
                    },
                    ease: Quart.easeOut
                }), FWDAnimation.to(p.arrowS_sdo.screen, .8, {
                    css: {
                        rotation: 0
                    },
                    ease: Quart.easeOut
                })), p.setButtonMode(!0)
            }, p.setText = function (e) {
                FWDUVPUtils.isIEAndLessThen9 ? p.text_sdo.screen.innerText = e : p.text_sdo.setInnerHTML(e)
            }, p.init()
        };
        h.setPrototype = function () {
            h.prototype = new FWDUVPDisplayObject("div")
        }, h.FIRST_BUTTON_CLICK = "onFirstClick", h.SECOND_BUTTON_CLICK = "secondButtonOnClick", h.MOUSE_OVER = "onMouseOver", h.MOUSE_OUT = "onMouseOut", h.MOUSE_DOWN = "onMouseDown", h.CLICK = "onClick", h.prototype = null, window.FWDUVPComboBoxSelector = h
    }(window),
    function () {
        var p = function (e, t, o, s, n, i, a, r, l, d, _, u) {
            var c = this;
            p.prototype;
            c.iconCSSString = l, c.icon2CSSString = d, c.normalCalssName = _, c.selectedCalssName = u, c.n1Img = e, c.s1Path_str = t, c.n2Img = o, c.s2Path_str = s, c.firstButton_do, c.n1_do, c.s1_do, c.secondButton_do, c.n2_do, c.s2_do, c.n1Img && (c.buttonWidth = c.n1Img.width, c.buttonHeight = c.n1Img.height), c.useHEX = i, c.nBC = a, c.sBC = r, c.isSelectedState_bl = !1, c.currentState = 1, c.isDisabled_bl = !1, c.isMaximized_bl = !1, c.disptachMainEvent_bl = n, c.isDisabled_bl = !1, c.isMbl = FWDUVPUtils.isMobile, c.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, c.allowToCreateSecondButton_bl = !c.isMbl || c.hasPointerEvent_bl, c.useFontAwesome_bl = Boolean(c.iconCSSString), c.init = function () {
                c.hasTransform2d_bl = !1, c.setButtonMode(!0), c.setWidth(c.buttonWidth), c.setHeight(c.buttonHeight), c.setupMainContainers(), c.secondButton_do.setVisible(!1), c.setNormalState()
            }, c.setupMainContainers = function () {
                c.useFontAwesome_bl ? (c.setOverflow("visible"), c.firstButton_do = new FWDUVPDisplayObject("div"), c.firstButton_do.setOverflow("visible"), c.n1_do = new FWDUVPDisplayObject("div"), c.n1_do.setInnerHTML(c.iconCSSString), c.firstButton_do.addChild(c.n1_do), c.secondButton_do = new FWDUVPDisplayObject("div"), c.secondButton_do.setOverflow("visible"), c.n2_do = new FWDUVPDisplayObject("div"), c.n2_do.setInnerHTML(c.icon2CSSString), c.secondButton_do.addChild(c.n2_do), c.setFinalSize()) : (c.firstButton_do = new FWDUVPDisplayObject("div"), c.firstButton_do.setWidth(c.buttonWidth), c.firstButton_do.setHeight(c.buttonHeight), c.useHEX ? (c.n1_do = new FWDUVPDisplayObject("div"), c.n1_do.setWidth(c.buttonWidth), c.n1_do.setHeight(c.buttonHeight), c.n1_sdo_canvas = FWDUVPUtils.getCanvasWithModifiedColor(c.n1Img, c.nBC).canvas, c.n1_do.screen.appendChild(c.n1_sdo_canvas)) : (c.n1_do = new FWDUVPDisplayObject("img"), c.n1_do.setScreen(c.n1Img)), c.firstButton_do.addChild(c.n1_do), c.allowToCreateSecondButton_bl && (c.s1_img = new Image, c.s1_img.src = c.s1Path_str, c.useHEX ? (c.s1_do = new FWDUVPTransformDisplayObject("div"), c.s1_do.setWidth(c.buttonWidth), c.s1_do.setHeight(c.buttonHeight), c.s1_img.onload = function () {
                    c.s1_do_canvas = FWDUVPUtils.getCanvasWithModifiedColor(c.s1_img, c.sBC).canvas, c.s1_do.screen.appendChild(c.s1_do_canvas)
                }) : (c.s1_do = new FWDUVPDisplayObject("img"), c.s1_do.setScreen(c.s1_img), c.s1_do.setWidth(c.buttonWidth), c.s1_do.setHeight(c.buttonHeight)), c.s1_do.setAlpha(0), c.firstButton_do.addChild(c.s1_do)), c.secondButton_do = new FWDUVPDisplayObject("div"), c.secondButton_do.setWidth(c.buttonWidth), c.secondButton_do.setHeight(c.buttonHeight), c.useHEX ? (c.n2_do = new FWDUVPDisplayObject("div"), c.n2_do.setWidth(c.buttonWidth), c.n2_do.setHeight(c.buttonHeight), c.n2_sdo_canvas = FWDUVPUtils.getCanvasWithModifiedColor(c.n2Img, c.nBC).canvas, c.n2_do.screen.appendChild(c.n2_sdo_canvas)) : (c.n2_do = new FWDUVPDisplayObject("img"), c.n2_do.setScreen(c.n2Img)), c.secondButton_do.addChild(c.n2_do), c.allowToCreateSecondButton_bl && (c.s2_img = new Image, c.s2_img.src = c.s2Path_str, c.useHEX ? (c.s2_do = new FWDUVPTransformDisplayObject("div"), c.s2_do.setWidth(c.buttonWidth), c.s2_do.setHeight(c.buttonHeight), c.s2_img.onload = function () {
                    c.s2_do_canvas = FWDUVPUtils.getCanvasWithModifiedColor(c.s2_img, c.sBC).canvas, c.s2_do.screen.appendChild(c.s2_do_canvas)
                }) : (c.s2_do = new FWDUVPDisplayObject("img"), c.s2_do.setScreen(c.s2_img), c.s2_do.setWidth(c.buttonWidth), c.s2_do.setHeight(c.buttonHeight)), c.s2_do.setAlpha(0), c.secondButton_do.addChild(c.s2_do))), c.addChild(c.secondButton_do), c.addChild(c.firstButton_do), c.hasPointerEvent_bl ? (c.screen.addEventListener("pointerup", c.onMouseUp), c.screen.addEventListener("pointerover", c.onMouseOver), c.screen.addEventListener("pointerout", c.onMouseOut)) : c.screen.addEventListener && (c.isMbl || (c.screen.addEventListener("mouseover", c.onMouseOver), c.screen.addEventListener("mouseout", c.onMouseOut), c.screen.addEventListener("mouseup", c.onMouseUp)), c.screen.addEventListener("toustart", c.onDown), c.screen.addEventListener("touchend", c.onMouseUp))
            }, c.onMouseOver = function (e, t) {
                c.isDisabled_bl || c.isSelectedState_bl || e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE && "mouse" != e.pointerType || (c.dispatchEvent(p.MOUSE_OVER, {
                    e: e
                }), c.dispatchEvent(p.SHOW_TOOLTIP, {
                    e: e
                }), c.setSelectedState(!0))
            }, c.onMouseOut = function (e) {
                !c.isDisabled_bl && c.isSelectedState_bl && (e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE && "mouse" != e.pointerType || (c.setNormalState(!0), c.dispatchEvent(p.MOUSE_OUT)))
            }, c.onDown = function (e) {
                e.preventDefault && e.preventDefault()
            }, c.onMouseUp = function (e) {
                c.isDisabled_bl || 2 == e.button || (e.preventDefault && e.preventDefault(), c.isMbl || c.onMouseOver(e, !1), c.disptachMainEvent_bl && c.dispatchEvent(p.MOUSE_UP, {
                    e: e
                }))
            }, c.checkCount = 0, c.setFinalSize = function () {
                var e, t;
                clearInterval(c.checkId_int), c.lastWidth = c.n1_do.screen.firstChild.offsetWidth, 5 < c.checkCount || (c.checkCount++, c.checkId_int = setInterval(function () {
                    c.setFinalSize()
                }, 100), c.prevWidth != c.lastWidth && 0 != c.lastWidth && (e = Math.max(c.n1_do.screen.firstChild.offsetWidth, c.n2_do.screen.firstChild.offsetWidth), t = Math.max(c.n1_do.screen.offsetHeight, c.n2_do.screen.firstChild.offsetHeight), c.buttonWidth = e, c.buttonHeight = t, c.setWidth(e), c.setHeight(t), c.firstButton_do.setWidth(c.w), c.firstButton_do.setHeight(c.h), c.secondButton_do.setWidth(c.w), c.secondButton_do.setHeight(c.h), c.n1_do.setX(Math.round((e - c.n1_do.getWidth()) / 2)), c.n1_do.setY(Math.round((t - c.n1_do.getHeight()) / 2)), c.n2_do.setX(Math.round((e - c.n2_do.getWidth()) / 2)), c.n2_do.setY(Math.round((t - c.n2_do.getHeight()) / 2)), c.prevWidth = c.lastWidth))
            }, c.toggleButton = function () {
                1 == c.currentState ? (c.firstButton_do.setVisible(!1), c.secondButton_do.setVisible(!0), c.currentState = 0, c.dispatchEvent(p.FIRST_BUTTON_CLICK)) : (c.firstButton_do.setVisible(!0), c.secondButton_do.setVisible(!1), c.currentState = 1, c.dispatchEvent(p.SECOND_BUTTON_CLICK))
            }, c.setButtonState = function (e) {
                1 == e ? (c.firstButton_do.setVisible(!0), c.secondButton_do.setVisible(!1), c.currentState = 1) : (c.firstButton_do.setVisible(!1), c.secondButton_do.setVisible(!0), c.currentState = 0)
            }, c.setNormalState = function (e) {
                c.isMbl && !c.hasPointerEvent_bl && !c.useFontAwesome_bl || (c.isSelectedState_bl = !1, FWDAnimation.killTweensOf(c.s1_do), FWDAnimation.killTweensOf(c.s2_do), c.useFontAwesome_bl ? (FWDAnimation.killTweensOf(c.n1_do.screen), FWDAnimation.killTweensOf(c.n2_do.screen), e ? (FWDAnimation.to(c.n1_do.screen, .8, {
                    className: c.normalCalssName,
                    ease: Expo.easeOut
                }), FWDAnimation.to(c.n2_do.screen, .8, {
                    className: c.normalCalssName,
                    ease: Expo.easeOut
                })) : (c.n1_do.screen.className = c.normalCalssName, c.n2_do.screen.className = c.normalCalssName)) : (FWDAnimation.to(c.s1_do, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                }), FWDAnimation.to(c.s2_do, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                })))
            }, c.setSelectedState = function (e) {
                c.isSelectedState_bl = !0, FWDAnimation.killTweensOf(c.s1_do), FWDAnimation.killTweensOf(c.s2_do), c.useFontAwesome_bl ? (FWDAnimation.killTweensOf(c.n1_do.screen), FWDAnimation.killTweensOf(c.n2_do.screen), e ? (FWDAnimation.to(c.n1_do.screen, .8, {
                    className: c.selectedCalssName,
                    ease: Expo.easeOut
                }), FWDAnimation.to(c.n2_do.screen, .8, {
                    className: c.selectedCalssName,
                    ease: Expo.easeOut
                })) : (c.n1_do.screen.className = c.selectedCalssName, c.n2_do.screen.className = c.selectedCalssName)) : (FWDAnimation.to(c.s1_do, .5, {
                    alpha: 1,
                    delay: .1,
                    ease: Expo.easeOut
                }), FWDAnimation.to(c.s2_do, .5, {
                    alpha: 1,
                    delay: .1,
                    ease: Expo.easeOut
                }))
            }, c.disable = function () {
                c.isDisabled_bl || (c.isDisabled_bl = !0, c.setButtonMode(!1), FWDAnimation.killTweensOf(c), FWDAnimation.to(c, .6, {
                    alpha: .4
                }), c.setNormalState())
            }, c.enable = function () {
                c.isDisabled_bl && (c.isDisabled_bl = !1, c.setButtonMode(!0), FWDAnimation.killTweensOf(c), FWDAnimation.to(c, .6, {
                    alpha: 1
                }))
            }, c.updateHEXColors = function (e, t) {
                FWDUVPUtils.changeCanvasHEXColor(c.n1Img, c.n1_sdo_canvas, e), FWDUVPUtils.changeCanvasHEXColor(c.s1_img, c.s1_do_canvas, t), FWDUVPUtils.changeCanvasHEXColor(c.n2Img, c.n2_sdo_canvas, e), FWDUVPUtils.changeCanvasHEXColor(c.s2_img, c.s2_do_canvas, t)
            }, c.init()
        };
        p.setPrototype = function () {
            p.prototype = new FWDUVPDisplayObject("div")
        }, p.FIRST_BUTTON_CLICK = "onFirstClick", p.SECOND_BUTTON_CLICK = "secondButtonOnClick", p.MOUSE_OVER = "onMouseOver", p.MOUSE_OUT = "onMouseOut", p.MOUSE_UP = "onMouseUp", p.CLICK = "onClick", p.SHOW_TOOLTIP = "showTooltip", p.prototype = null, window.FWDUVPComplexButton = p
    }(window),
    function () {
        var e = function (i, a) {
            var l = this;
            e.prototype;
            l.prt = i, l.buttonsTest_ar = ["copy_url", "copy_url_time", "fullscreen"], l.itemsLabels_ar = ["Copy video URL", "Copy video URL at current time", "Fullscreen/Normalscreen"], l.items_ar = [], l.spacers_ar = [], l.copyURL_do = null, l.copyURLTime_do = null, l.backgroundColor_str = a.contextMenuBackgroundColor_str, l.borderColor_str = a.contextMenuBorderColor_str, l.spacerColor_str = a.contextMenuSpacerColor_str, l.itemNormalColor_str = a.contextMenuItemNormalColor_str, l.itemSelectedColor_str = a.contextMenuItemSelectedColor_str, l.itemDisabledColor_str = a.contextMenuItemDisabledColor_str, l.draggingMode_str = a.startDraggingMode_str, l.link_str = a.link_str, l.borderRadius = 0, l.biggestWidth, l.totalWidth = 400, l.totalHeight = 400, l.sapaceBetweenButtons = 7, l.padding = 6, l.getMaxWidthResizeAndPositionId_to, l.inverseNextAndPrevRotation_bl = a.inverseNextAndPrevRotation_bl, l.showScriptDeveloper_bl = a.showScriptDeveloper_bl, l.show_bl = !1, l.init = function () {
                (l.itemsLabels_ar || l.showScriptDeveloper_bl) && (l.show_bl = !0, l.setWidth(l.totalWidth), l.setHeight(l.totalHeight), l.setBkColor(l.backgroundColor_str), l.getStyle().borderColor = l.borderColor_str, l.getStyle().borderStyle = "solid", l.getStyle().borderRadius = l.borderRadius + "px", l.getStyle().borderWidth = "1px", l.setVisible(!1), l.setY(-2e3), l.prt.main_do.addChild(l), l.setupLabels(), l.setupDeveloperButton(), l.setupSpacers(), l.disable(), l.getMaxWidthResizeAndPositionId_to = setTimeout(l.getMaxWidthResizeAndPosition, 200)), l.addContextEvent()
            }, l.copyText = function (e) {
                var t = document.createElement("textarea");
                t.value = e, document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t)
            }, l.setupLabels = function () {
                var e, t = l.buttonsTest_ar.length,
                    o = "",
                    s = "";
                if (l.itemsLabels_ar)
                    for (var n = 0; n < t; n++) "copy_url" == (e = l.buttonsTest_ar[n]) ? (o = l.itemsLabels_ar[n], FWDUVPContextMenuButton.setPrototype(), l.copyURL_do = new FWDUVPContextMenuButton(o, void 0, l.itemNormalColor_str, l.itemSelectedColor_str, l.itemDisabledColor_str), l.items_ar.push(l.copyURL_do), l.copyURL_do.addListener(FWDUVPContextMenuButton.MOUSE_DOWN, l.copyURLHandler), l.addChild(l.copyURL_do)) : "copy_url_time" == e ? (o = l.itemsLabels_ar[n], FWDUVPContextMenuButton.setPrototype(), l.copyURLTime_do = new FWDUVPContextMenuButton(o, void 0, l.itemNormalColor_str, l.itemSelectedColor_str, l.itemDisabledColor_str), l.items_ar.push(l.copyURLTime_do), l.copyURLTime_do.addListener(FWDUVPContextMenuButton.MOUSE_DOWN, l.copyURLAtTimeHandler), l.addChild(l.copyURLTime_do)) : "fullscreen" == e && a.showFullScreenButton_bl && (str = l.itemsLabels_ar[n], o = str.substr(0, str.indexOf("/")), s = str.substr(str.indexOf("/") + 1), FWDUVPContextMenuButton.setPrototype(), l.fullScreenButton_do = new FWDUVPContextMenuButton(o, s, l.itemNormalColor_str, l.itemSelectedColor_str, l.itemDisabledColor_str), l.items_ar.push(l.fullScreenButton_do), l.fullScreenButton_do.addListener(FWDUVPContextMenuButton.MOUSE_DOWN, l.fullScreenStartHandler), l.addChild(l.fullScreenButton_do))
            }, l.setupDeveloperButton = function () {
                l.showScriptDeveloper_bl && (l.itemsLabels_ar || (l.itemsLabels_ar = []), l.itemsLabels_ar.push("&#0169; made by FWD"), label1_str = "&#0169; made by FWD", FWDUVPContextMenuButton.setPrototype(), l.developerButton_do = new FWDUVPContextMenuButton(label1_str, void 0, l.itemNormalColor_str, l.itemSelectedColor_str, l.itemDisabledColor_str), l.developerButton_do.isDeveleper_bl = !0, l.items_ar.push(l.developerButton_do), l.addChild(l.developerButton_do))
            }, l.copyURLAtTimeHandler = function (e) {
                var t = i.curTime;
                5 == t.length && (t = "00:" + t);
                for (var o = String(t).split(":"), s = 0; s < o.length; s++) "00" == o[s] && (o[s] = "0");
                FWDUVPUtils.getHashUrlArgs(window.location.hash);
                var n = location.href;
                n = (n = (n = (n = n.replace(/&uvpi=.*/i, "")).replace(/&playlistId=.*/i, "")).replace(/playlistId=.*/i, "")).replace(/&t=.*/i, ""), -1 == (t = -1 == location.href.indexOf("?") ? 1 < FWDUVPlayer.instaces_ar.length ? n + "?uvpi=" + i.instanceName_str + "&playlistId=" + i.catId + "&videoId=" + i.id : n + "?playlistId=" + i.catId + "&videoId=" + i.id : 1 < FWDUVPlayer.instaces_ar.length ? n + "&uvpi=" + i.instanceName_str + "&playlistId=" + i.catId + "&videoId=" + i.id : n + "&playlistId=" + i.catId + "&videoId=" + i.id).indexOf("t=") && (t = t + "&t=" + o[0] + "h" + o[1] + "m" + o[2] + "s"), l.copyText(t), l.removeMenuId_to = setTimeout(l.removeFromDOM, 150)
            }, l.copyURLHandler = function (e) {
                l.copyText(location.href), l.removeMenuId_to = setTimeout(l.removeFromDOM, 150)
            }, l.fullScreenStartHandler = function (e) {
                0 == l.fullScreenButton_do.currentState ? i.goFullScreen() : 1 == l.fullScreenButton_do.currentState && i.goNormalScreen(), l.fullScreenButton_do.onMouseOut()
            }, l.updateFullScreenButton = function (e) {
                l.fullScreenButton_do && (0 == e ? l.fullScreenButton_do.setButtonState(0) : l.fullScreenButton_do.setButtonState(1), l.removeMenuId_to = setTimeout(l.removeFromDOM, 150))
            }, l.setupSpacers = function () {
                for (var e, t = l.items_ar.length - 1, o = 0; o < t; o++) e = new FWDUVPDisplayObject("div"), (l.spacers_ar[o] = e).setHeight(1), e.setBkColor(l.spacerColor_str), l.addChild(e)
            }, l.getMaxWidthResizeAndPosition = function () {
                var e, t, o = l.items_ar.length;
                l.totalWidth = 0;
                for (var s = l.totalHeight = 0; s < o; s++)(e = l.items_ar[s]).getMaxTextWidth() > l.totalWidth && (l.totalWidth = e.getMaxTextWidth());
                for (s = 0; s < o; s++) t = l.spacers_ar[s - 1], (e = l.items_ar[s]).setX(l.padding), e.setY(10 + s * (e.totalHeight + l.sapaceBetweenButtons) - l.padding), t && (t.setWidth(l.totalWidth + 2), t.setX(l.padding), t.setY(parseInt(e.getY() - l.sapaceBetweenButtons / 2) - 1)), e.setWidth(l.totalWidth + 2), e.centerText();
                l.totalHeight = e.getY() + e.totalHeight + 2, l.setWidth(l.totalWidth + 2 * l.padding + 4), l.setHeight(l.totalHeight), l.setVisible(!0), l.removeMenuId_to = setTimeout(l.removeFromDOM, 150)
            }, l.addContextEvent = function () {
                l.prt.main_do.screen.addEventListener ? l.prt.main_do.screen.addEventListener("contextmenu", l.contextMenuHandler) : l.prt.main_do.screen.attachEvent("oncontextmenu", l.contextMenuHandler)
            }, l.contextMenuHandler = function (e) {
                return l.show_bl && a.showContextmenu_bl && (clearTimeout(l.removeMenuId_to), l.prt.main_do.addChild(l), l.positionButtons(e), l.setAlpha(0), FWDAnimation.to(l, .4, {
                    alpha: 1,
                    ease: Quart.easeOut
                }), window.addEventListener ? (window.addEventListener("mousedown", l.contextMenuWindowOnMouseDownHandler), window.addEventListener("mouseup", l.contextMenuWindowOnMouseDownHandler)) : (document.documentElement.attachEvent("onmousedown", l.contextMenuWindowOnMouseDownHandler), document.documentElement.attachEvent("onmouseup", l.contextMenuWindowOnMouseDownHandler))), !!e.preventDefault && void e.preventDefault()
            }, l.contextMenuWindowOnMouseDownHandler = function (e) {
                var t = FWDUVPUtils.getViewportMouseCoordinates(e),
                    o = t.screenX,
                    s = t.screenY;
                FWDUVPUtils.hitTest(l.screen, o, s) || (window.removeEventListener ? (window.removeEventListener("mousedown", l.contextMenuWindowOnMouseDownHandler), window.removeEventListener("mouseup", l.contextMenuWindowOnMouseDownHandler)) : (document.documentElement.detachEvent("onmousedown", l.contextMenuWindowOnMouseDownHandler), document.documentElement.detachEvent("onmouseup", l.contextMenuWindowOnMouseDownHandler)), l.removeMenuId_to = setTimeout(l.removeFromDOM, 150))
            }, l.positionButtons = function (e) {
                var t = FWDUVPUtils.getViewportMouseCoordinates(e),
                    o = l.prt.main_do.getWidth(),
                    s = l.prt.main_do.getHeight(),
                    n = t.screenX - l.prt.main_do.getGlobalX(),
                    i = t.screenY - l.prt.main_do.getGlobalY(),
                    a = n - 2,
                    r = i - 2;
                l.totalWidth = l.getWidth(), l.totalHeight = l.getHeight(), a + l.totalWidth > o - 2 && (a = n - l.totalWidth), a < 0 && (a = parseInt((o - l.totalWidth) / 2)), a < 0 && (a = 0), r + l.totalHeight > s - 2 && (r = i - l.totalHeight), r < 0 && (r = parseInt((s - l.totalHeight) / 2)), r < 0 && (r = 0), l.setX(a), l.setY(r)
            }, l.disable = function () {
                l.copyURL_do && l.copyURL_do.disable(), l.copyURLTime_do && l.copyURLTime_do.disable()
            }, l.enable = function () {
                l.copyURL_do && l.copyURL_do.enable(), l.copyURLTime_do && l.copyURLTime_do.enable()
            }, l.removeFromDOM = function () {
                l.setX(-5e3)
            }, l.init()
        };
        e.setPrototype = function () {
            e.prototype = new FWDUVPDisplayObject("div")
        }, e.prototype = null, window.FWDUVPContextMenu = e
    }(window),
    function () {
        var r = function (e, t, o, s, n, i) {
            var a = this;
            r.prototype;
            a.label1_str = e, a.label2_str = t, a.nBC = o, a.sBC = s, a.disabledColor_str = n, a.totalWidth = 400, a.totalHeight = 20, a.padding, a.text1_sdo = null, a.text2_sdo = null, a.dumy_sdo = null, a.isMbl = FWDUVPUtils.isMobile, a.currentState = 1, a.isDisabled_bl = !1, a.isMaximized_bl = !1, a.showSecondButton_bl = null != t, a.isDeveleper_bl = !1, a.init = function () {
                a.setBackfaceVisibility(), a.setButtonMode(!0), a.setupMainContainers(), a.setWidth(a.totalWidth), a.setHeight(a.totalHeight), a.setButtonState(0)
            }, a.setupMainContainers = function () {
                a.text1_sdo = new FWDUVPDisplayObject("div"), a.text1_sdo.setBackfaceVisibility(), a.text1_sdo.setDisplay("inline-block"), a.text1_sdo.getStyle().fontFamily = "Arial", a.text1_sdo.getStyle().fontSize = "12px", a.text1_sdo.getStyle().color = a.nBC, a.text1_sdo.getStyle().fontSmoothing = "antialiased", a.text1_sdo.setInnerHTML(a.label1_str), a.addChild(a.text1_sdo), a.showSecondButton_bl && (a.text2_sdo = new FWDUVPDisplayObject("div"), a.text2_sdo.setBackfaceVisibility(), a.text2_sdo.setDisplay("inline-block"), a.text2_sdo.getStyle().fontFamily = "Arial", a.text2_sdo.getStyle().fontSize = "12px", a.text2_sdo.getStyle().color = a.nBC, a.text2_sdo.getStyle().fontSmoothing = "antialiased", a.text2_sdo.setInnerHTML(a.label2_str), a.addChild(a.text2_sdo)), a.dumy_sdo = new FWDUVPDisplayObject("div"), FWDUVPUtils.isIE && (a.dumy_sdo.setBkColor("#FF0000"), a.dumy_sdo.setAlpha(0)), a.addChild(a.dumy_sdo), a.isMbl ? a.screen.addEventListener("touchstart", a.onMouseDown) : a.screen.addEventListener && (a.screen.addEventListener("mouseover", a.onMouseOver), a.screen.addEventListener("mouseout", a.onMouseOut), a.screen.addEventListener("mousedown", a.onMouseDown), a.screen.addEventListener("click", a.onClick))
            }, a.onMouseOver = function (e) {
                a.isDisabled_bl || (FWDAnimation.killTweensOf(a.text1_sdo), e ? (FWDAnimation.to(a.text1_sdo.screen, .5, {
                    css: {
                        color: a.sBC
                    },
                    ease: Expo.easeOut
                }), a.showSecondButton_bl && FWDAnimation.to(a.text2_sdo.screen, .5, {
                    css: {
                        color: a.sBC
                    },
                    ease: Expo.easeOut
                })) : (a.text1_sdo.getStyle().color = a.sBC, a.showSecondButton_bl && (FWDAnimation.killTweensOf(a.text2_sdo), a.text2_sdo.getStyle().color = a.sBC)), a.dispatchEvent(r.MOUSE_OVER))
            }, a.onMouseOut = function (e) {
                a.isDisabled_bl || (FWDAnimation.killTweensOf(a.text1_sdo), FWDAnimation.to(a.text1_sdo.screen, .5, {
                    css: {
                        color: a.nBC
                    },
                    ease: Expo.easeOut
                }), a.showSecondButton_bl && (FWDAnimation.killTweensOf(a.text2_sdo), FWDAnimation.to(a.text2_sdo.screen, .5, {
                    css: {
                        color: a.nBC
                    },
                    ease: Expo.easeOut
                })), a.dispatchEvent(r.MOUSE_OUT))
            }, a.onClick = function (e) {
                a.isDeveleper_bl ? window.open("http://www.webdesign-flash.ro", "_blank") : a.isDisabled_bl || (e.preventDefault && e.preventDefault(), a.dispatchEvent(r.CLICK))
            }, a.onMouseDown = function (e) {
                a.isDisabled_bl || (e.preventDefault && e.preventDefault(), a.dispatchEvent(r.MOUSE_DOWN, {
                    e: e
                }))
            }, a.toggleButton = function () {
                a.showSecondButton_bl && (1 == a.currentState ? (a.text1_sdo.setVisible(!0), a.text2_sdo.setVisible(!1), a.currentState = 0, a.dispatchEvent(r.FIRST_BUTTON_CLICK)) : (a.text1_sdo.setVisible(!1), a.text2_sdo.setVisible(!0), a.currentState = 1, a.dispatchEvent(r.SECOND_BUTTON_CLICK)))
            }, a.setButtonState = function (e) {
                0 == e ? (a.text1_sdo.setVisible(!0), a.showSecondButton_bl && a.text2_sdo.setVisible(!1), a.currentState = 0) : 1 == e && (a.text1_sdo.setVisible(!1), a.showSecondButton_bl && a.text2_sdo.setVisible(!0), a.currentState = 1)
            }, a.centerText = function () {
                a.dumy_sdo.setWidth(a.totalWidth), a.dumy_sdo.setHeight(a.totalHeight), FWDUVPUtils.isIEAndLessThen9 ? (a.text1_sdo.setY(Math.round((a.totalHeight - a.text1_sdo.getHeight()) / 2) - 1), a.showSecondButton_bl && a.text2_sdo.setY(Math.round((a.totalHeight - a.text2_sdo.getHeight()) / 2) - 1)) : (a.text1_sdo.setY(Math.round((a.totalHeight - a.text1_sdo.getHeight()) / 2)), a.showSecondButton_bl && a.text2_sdo.setY(Math.round((a.totalHeight - a.text2_sdo.getHeight()) / 2))), a.text1_sdo.setHeight(a.totalHeight + 2), a.showSecondButton_bl && a.text2_sdo.setHeight(a.totalHeight + 2)
            }, a.getMaxTextWidth = function () {
                var e = a.text1_sdo.getWidth(),
                    t = 0;
                return a.showSecondButton_bl && (t = a.text2_sdo.getWidth()), Math.max(e, t)
            }, a.disable = function () {
                a.isDisabled_bl = !0, FWDAnimation.killTweensOf(a.text1_sdo), FWDAnimation.to(a.text1_sdo.screen, .5, {
                    css: {
                        color: a.disabledColor_str
                    },
                    ease: Expo.easeOut
                }), a.setButtonMode(!1)
            }, a.enable = function () {
                a.isDisabled_bl = !1, FWDAnimation.killTweensOf(a.text1_sdo), FWDAnimation.to(a.text1_sdo.screen, .5, {
                    css: {
                        color: a.nBC
                    },
                    ease: Expo.easeOut
                }), a.setButtonMode(!0)
            }, a.init()
        };
        r.setPrototype = function () {
            r.prototype = new FWDUVPDisplayObject("div")
        }, r.FIRST_BUTTON_CLICK = "onFirstClick", r.SECOND_BUTTON_CLICK = "secondButtonOnClick", r.MOUSE_OVER = "onMouseOver", r.MOUSE_OUT = "onMouseOut", r.MOUSE_DOWN = "onMouseDown", r.CLICK = "onClick", r.prototype = null, window.FWDUVPContextMenuButton = r
    }(window),
    function () {
        var s = function (m, b) {
            var g = this;
            s.prototype;
            g._d = m, g.bkLeft_img = m.bkLeft_img, g.bkRight_img = m.bkRight_img, g.playN_img = m.playN_img, g.pauseN_img = m.pauseN_img, g.mainScrubberBkLeft_img = m.mainScrubberBkLeft_img, g.mainScrubberDragLeft_img = m.mainScrubberDragLeft_img, g.mainScrubberDragLeftSource = m.mainScrubberDragLeft_img.src, g.mainScrubberLine_img = m.mainScrubberLine_img, g.volumeScrubberBkLeft_img = m.volumeScrubberBkLeft_img, g.volumeScrubberDragBottom_img = m.volumeScrubberDragBottom_img, g.volumeScrubberLine_img = m.volumeScrubberLine_img, g.volumeN_img = m.volumeN_img, g.progressLeft_img = m.progressLeft_img, g.categoriesN_img = m.categoriesN_img, g.prt = b, g.playlistN_img = m.playlistN_img, g.ytbQualityN_img = m.ytbQualityN_img, g.infoN_img = m.infoN_img, g.downloadN_img = m.downloadN_img, g.facebookN_img = m.facebookN_img, g.fullScreenN_img = m.fullScreenN_img, g.normalScreenN_img = m.normalScreenN_img, g.hidePlaylistN_img = m.hidePlaylistN_img, g.showPlaylistN_img = m.showPlaylistN_img, g.embedN_img = m.embedN_img, g.buttons_ar = [], g.useHEX = m.useHEX, g.nBC = m.nBC, g.sBC = m.sBC, g.bkMiddlePath_str = m.bkMiddlePath_str, g.mainScrubberBkMiddlePath_str = m.mainScrubberBkMiddlePath_str, g.volumeScrubberBkMiddlePath_str = m.volumeScrubberBkMiddlePath_str, g.mainScrubberDragMiddlePath_str = m.mainScrubberDragMiddlePath_str, g.volumeScrubberDragMiddlePath_str = m.volumeScrubberDragMiddlePath_str, g.timeColor_str = m.timeColor_str, g.progressMiddlePath_str = m.progressMiddlePath_str, g.youtubeQualityButtonNormalColor_str = m.youtubeQualityButtonNormalColor_str, g.youtubeQualityButtonSelectedColor_str = m.youtubeQualityButtonSelectedColor_str, g.youtubeQualityArrowPath_str = m.youtubeQualityArrowPath_str, g.controllerBkPath_str = m.controllerBkPath_str, g.ytbQualityButtonPointerPath_str = m.ytbQualityButtonPointerPath_str, g.buttonsToolTipFontColor_str = m.buttonsToolTipFontColor_str, g.buttonsToolTipHideDelay = m.buttonsToolTipHideDelay, g.ttYtbBtns = 0, g.sW = 0, g.sH = m.controllerHeight, g.scrbsBkLARW = g.mainScrubberBkLeft_img.width, g.maiScrbW = 0, g.mainScrbMinW = 100, g.volumeScrubberOfsetHeight = m.volumeScrubberOfsetHeight, g.volumeScrubberHeight = m.volumeScrubberHeight + g.volumeScrubberOfsetHeight, g.volScrbW = g.mainScrubberBkLeft_img.height, g.mainScrbH = g.mainScrubberBkLeft_img.height, g.mainScrbDrgLW = g.mainScrubberDragLeft_img.width, g.scrubbersOffsetWidth = m.scrubbersOffsetWidth, g.volume = m.volume, g.lastVolume = g.volume, g.startSpaceBetweenButtons = m.startSpaceBetweenButtons, g.spaceBetweenButtons = m.spaceBetweenButtons, g.percentPlayed = 0, g.percentLoaded = 0, g.lastTimeLength = 0, g.prevYtbQualityButtonsLength = 0, g.pointerWidth = 8, g.pointerHeight = 5, g.timeOffsetLeftWidth = m.timeOffsetLeftWidth, g.timeOffsetRightWidth = m.timeOffsetRightWidth, g.timeOffsetTop = m.timeOffsetTop, g.mainScrubberOffestTop = m.mainScrubberOffestTop, g.isVolumeScrubberShowed_bl = !0, g.volumeScrubberIsDragging_bl = !1, g.showButtonsToolTip_bl = m.showButtonsToolTip_bl, g.showPlaylistsButtonAndPlaylists_bl = m.showPlaylistsButtonAndPlaylists_bl, g.showPlaylistButtonAndPlaylist_bl = m.showPlaylistButtonAndPlaylist_bl, g.showEmbedButton_bl = m.showEmbedButton_bl, g.showPlaylistByDefault_bl = m.showPlaylistByDefault_bl, g.showShuffleButton_bl = m.showShuffleButton_bl, g.showLoopButton_bl = m.showLoopButton_bl, g.showNP_bl = b._d.showNextAndPrevButtonsInController_bl, g.showNextAndPrevButtonsInController_bl = m.showNextAndPrevButtonsInController_bl, g.showFullScreenButton_bl = m.showFullScreenButton_bl, g.disableVideoScrubber_bl = m.disableVideoScrubber_bl, g.showYoutubeQualityButton_bl = m.showYoutubeQualityButton_bl, g.showShareButton_bl = m.showShareButton_bl, g.showInfoButton_bl = m.showInfoButton_bl, g.showDownloadVideoButton_bl = m.showDownloadVideoButton_bl, g.showVolumeScrubber_bl = m.showVolumeScrubber_bl, g.allowToChangeVolume_bl = m.allowToChangeVolume_bl, g.showTime_bl = m.showTime_bl, g.showVolumeButton_bl = m.showVolumeButton_bl, g.showControllerWhenVideoIsStopped_bl = m.showControllerWhenVideoIsStopped_bl, g.showRewindButton_bl = m.showRewindButton_bl, g.isMainScrubberScrubbing_bl = !1, g.isMainScrubberDisabled_bl = !1, g.isVolumeScrubberDisabled_bl = !1, g.isMainScrubberLineVisible_bl = !1, g.isVolumeScrubberLineVisible_bl = !1, g.showSubBtn = m.showSubBtn, g.hasYtbButton_bl = !1, g.muted = b._d.autoPlay_bl, g.isShowed_bl = !0, g.forceToShowMainScrubberOverCotroller_bl = !1, g.isMainScrubberOnTop_bl = !1, g.showNextAndPrevButtons_bl = m.showNextAndPrevButtons_bl, g.isPlaylistShowed_bl = m.isPlaylistShowed_bl, g.areYtbQualityButtonsShowed_bl = !0, g.repeatBackground_bl = m.repeatBackground_bl, g.isMbl = FWDUVPUtils.isMobile, g.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, g.useVectorIcons_bl = m.useVectorIcons_bl, g.init = function () {
                var e;
                g.setOverflow("visible"), g.mainHld = new FWDUVPDisplayObject("div"), m.useAToB && g.setupATB(), g.repeatBackground_bl ? (g.bk_do = new FWDUVPDisplayObject("div"), g.bk_do.getStyle().background = "url('" + g.controllerBkPath_str + "')") : (g.bk_do = new FWDUVPDisplayObject("img"), (e = new Image).src = g.controllerBkPath_str, g.bk_do.setScreen(e)), g.mainHld.addChild(g.bk_do), g.mainHld.setOverflow("visible"), g.mainHld.getStyle().zIndex = 1, g.addChild(g.mainHld), g.showYoutubeQualityButton_bl && (g.ytbQuality_ar = ["hd2160", "hd1440", "highres", "hd1080", "hd720", "large", "medium", "small", "tiny"], g.ytbButtons_ar = [], g.ttYtbBtns = g.ytbQuality_ar.length, g.setupYtbButtons()), g.showNextAndPrevButtonsInController_bl && g.setupPrevButton(), g.setupPlayPauseButton(), g.showRewindButton_bl && g.setupRewindButton(), g.showNextAndPrevButtonsInController_bl && g.setupNextButton(), g.setupMainScrubber(), g.showTime_bl && g.setupTime(), g.showVolumeButton_bl && g.setupVolumeButton(), g.showPlaylistsButtonAndPlaylists_bl && g.setupCategoriesButton(), g.showPlaylistButtonAndPlaylist_bl && g.setupPlaylistButton(), g.showYoutubeQualityButton_bl && g.setupYoutubeQualityButton(), g.showShareButton_bl && g.setupShareButton(), g.showEmbedButton_bl && g.setupEmbedButton(), m.useAToB && g.setupAtbButton(), g.showInfoButton_bl && g.setupInfoButton(), m.showPlaybackRateButton_bl && g.setupPlaybackRateButton(), g.showDownloadVideoButton_bl && g.setupDownloadButton(), g.showSubBtn && g.setupSubtitleButton(), m.showChromecastButton_bl && g.setupChromecastButton(), g.showFullScreenButton_bl && g.setupFullscreenButton(), g.showButtonsToolTip_bl && g.setupToolTips(), g.showVolumeScrubber_bl && (g.setupVolumeScrubber(), g.hideVolumeScrubber()), g.hide(!1)
            }, g.resizeAndPosition = function () {
                g.sW = b.tempVidStageWidth, g.positionButtons(), g.setY(b.tempVidStageHeight - g.sH), g.hideQualityButtons(!1), g.ytbButtonsHolder_do && (FWDAnimation.killTweensOf(g.ytbButtonsHolder_do), g.ytbButtonsHolder_do.setY(b.tempStageHeight)), g.subtitlesButtonsHolder_do && (FWDAnimation.killTweensOf(g.subtitlesButtonsHolder_do), g.subtitlesButtonsHolder_do.setY(b.sH)), g.playbackRatesButtonsHolder_do && (FWDAnimation.killTweensOf(g.playbackRatesButtonsHolder_do), g.playbackRatesButtonsHolder_do.setY(b.sH)), g.positionAdsLines()
            }, g.getButtonIndex = function (e) {
                return FWDUVPUtils.indexOfArray(g.buttons_ar, e)
            }, g.positionButtons = function () {
                if (g.sW) {
                    var e, t, o, s, n, i, a = 0,
                        r = 0,
                        l = 0,
                        d = 0,
                        _ = g.showTime_bl;
                    if (m.playlist_ar[b.id]) {
                        g.showDownloadVideoButton_bl && (m.playlist_ar[b.id].downloadable ? -1 == g.getButtonIndex(g.downloadButton_do) && (g.ccBtn_do && -1 != g.getButtonIndex(g.ccBtn_do) ? (t = g.getButtonIndex(g.ccBtn_do), g.buttons_ar.splice(t, 0, g.downloadButton_do)) : g.fullScreenButton_do ? (t = g.getButtonIndex(g.fullScreenButton_do), g.buttons_ar.splice(t, 0, g.downloadButton_do)) : g.buttons_ar.splice(g.buttons_ar.length, 0, g.downloadButton_do), g.downloadButton_do.setVisible(!0)) : -1 != (o = g.getButtonIndex(g.downloadButton_do)) && (g.buttons_ar.splice(o, 1), g.downloadButton_do.setVisible(!1))), g.showInfoButton_bl && (m.playlist_ar[b.id].desc ? -1 == g.getButtonIndex(g.infoButton_do) && (g.downloadButton_do && -1 != g.getButtonIndex(g.downloadButton_do) ? (t = g.getButtonIndex(g.downloadButton_do), g.buttons_ar.splice(t, 0, g.infoButton_do)) : g.ccBtn_do && -1 != g.getButtonIndex(g.ccBtn_do) ? (t = g.getButtonIndex(g.ccBtn_do), g.buttons_ar.splice(t, 0, g.infoButton_do)) : g.fullScreenButton_do ? (t = g.getButtonIndex(g.fullScreenButton_do), g.buttons_ar.splice(t, 0, g.infoButton_do)) : g.buttons_ar.splice(g.buttons_ar.length, 0, g.infoButton_do), g.infoButton_do.setVisible(!0)) : -1 != (o = g.getButtonIndex(g.infoButton_do)) && (g.buttons_ar.splice(o, 1), g.infoButton_do.setVisible(!1))), m.useAToB && (m.playlist_ar[b.id].atb ? -1 == FWDUVPUtils.indexOfArray(g.buttons_ar, g.atbButton_do) && (g.infoButton_do && -1 != g.getButtonIndex(g.infoButton_do) ? (t = g.getButtonIndex(g.infoButton_do), g.buttons_ar.splice(t, 0, g.atbButton_do)) : g.downloadButton_do && -1 != g.getButtonIndex(g.downloadButton_do) ? (t = g.getButtonIndex(g.downloadButton_do), g.buttons_ar.splice(t, 0, g.atbButton_do)) : g.ccBtn_do && -1 != g.getButtonIndex(g.ccBtn_do) ? (t = g.getButtonIndex(g.ccBtn_do), g.buttons_ar.splice(t, 0, g.atbButton_do)) : g.fullScreenButton_do ? (t = g.getButtonIndex(g.fullScreenButton_do), g.buttons_ar.splice(t, 0, g.atbButton_do)) : g.buttons_ar.splice(g.buttons_ar.length, 0, g.atbButton_do), g.atbButton_do.setVisible(!0)) : -1 != (s = FWDUVPUtils.indexOfArray(g.buttons_ar, g.atbButton_do)) && (g.buttons_ar.splice(s, 1), g.atbButton_do.setVisible(!1), g.atb.hide(!0))), g.showSubBtn && (m.playlist_ar[b.id].subtitleSource ? -1 == FWDUVPUtils.indexOfArray(g.buttons_ar, g.subtitleButton_do) && (g.playbackRateButton_do && -1 != g.getButtonIndex(g.playbackRateButton_do) ? (t = g.getButtonIndex(g.playbackRateButton_do), g.buttons_ar.splice(t, 0, g.subtitleButton_do)) : g.atbButton_do && -1 != g.getButtonIndex(g.atbButton_do) ? (t = g.getButtonIndex(g.atbButton_do), g.buttons_ar.splice(t, 0, g.subtitleButton_do)) : g.infoButton_do && -1 != g.getButtonIndex(g.infoButton_do) ? (t = g.getButtonIndex(g.infoButton_do), g.buttons_ar.splice(t, 0, g.subtitleButton_do)) : g.downloadButton_do && -1 != g.getButtonIndex(g.downloadButton_do) ? (t = g.getButtonIndex(g.downloadButton_do), g.buttons_ar.splice(t, 0, g.subtitleButton_do)) : g.ccBtn_do && -1 != g.getButtonIndex(g.ccBtn_do) ? (t = g.getButtonIndex(g.ccBtn_do), g.buttons_ar.splice(t, 0, g.subtitleButton_do)) : g.fullScreenButton_do ? (t = g.getButtonIndex(g.fullScreenButton_do), g.buttons_ar.splice(t, 0, g.subtitleButton_do)) : g.buttons_ar.splice(g.buttons_ar.length, 0, g.subtitleButton_do), g.subtitleButton_do.setVisible(!0)) : -1 != (n = FWDUVPUtils.indexOfArray(g.buttons_ar, g.subtitleButton_do)) && (g.buttons_ar.splice(n, 1), g.subtitleButton_do.setVisible(!1), g.subtitleButton_do.setX(-5e3))), b.videoType_str != FWDUVPlayer.VIMEO || m.showDefaultControllerForVimeo_bl ? (-1 == FWDUVPUtils.indexOfArray(g.buttons_ar, g.playPauseButton_do) && g.playPauseButton_do && (t = 0, g.buttons_ar.splice(t, 0, g.playPauseButton_do), g.playPauseButton_do.setVisible(!0)), -1 == FWDUVPUtils.indexOfArray(g.buttons_ar, g.rewindButton_do) && g.rewindButton_do && (t = FWDUVPUtils.indexOfArray(g.buttons_ar, g.playPauseButton_do), g.buttons_ar.splice(t, 0, g.rewindButton_do), g.rewindButton_do.setVisible(!0)), g.showVolumeButton_bl && (g.showTime_bl ? -1 == FWDUVPUtils.indexOfArray(g.buttons_ar, g.volBtn) && (t = FWDUVPUtils.indexOfArray(g.buttons_ar, g.time_do) + 1, g.buttons_ar.splice(t, 0, g.volBtn), g.volBtn.setVisible(!0)) : -1 == FWDUVPUtils.indexOfArray(g.buttons_ar, g.volBtn) && (t = FWDUVPUtils.indexOfArray(g.buttons_ar, g.mainScrubber_do) + 1, g.buttons_ar.splice(t, 0, g.volBtn), g.volBtn.setVisible(!0))), g.mainScrubber_do.setVisible(!0)) : (-1 != (i = FWDUVPUtils.indexOfArray(g.buttons_ar, g.playPauseButton_do)) && (g.buttons_ar.splice(i, 1), g.playPauseButton_do.setVisible(!1), g.playPauseButton_do.setX(-500)), g.mainScrubber_do.setVisible(!1));
                        for (var u = [], c = 0; c < g.buttons_ar.length; c++) u[c] = g.buttons_ar[c];
                        "right" == b.tempPlaylistPosition_str && g.showNextAndPrevButtonsInController_bl && !g.showNP_bl && -1 != FWDUVPUtils.indexOfArray(u, g.nextButton_do) && (u.splice(FWDUVPUtils.indexOfArray(u, g.nextButton_do), 1), u.splice(FWDUVPUtils.indexOfArray(u, g.prevButton_do), 1), g.nextButton_do.setX(-1e3), g.prevButton_do.setX(-1e3)), g.maiScrbW = g.sW - 2 * g.startSpaceBetweenButtons;
                        for (c = 0; c < u.length; c++)(h = u[c]) != g.mainScrubber_do && (g.maiScrbW -= h.w + g.spaceBetweenButtons);
                        if (b.videoType_str == FWDUVPlayer.VIMEO && 120 <= g.maiScrbW && !m.showDefaultControllerForVimeo_bl) {
                            g.mainScrubber_do && -1 != FWDUVPUtils.indexOfArray(u, g.mainScrubber_do) && (u.splice(FWDUVPUtils.indexOfArray(u, g.mainScrubber_do), 1), g.positionScrollBarOnTopOfTheController()), g.time_do && -1 != FWDUVPUtils.indexOfArray(u, g.time_do) && (u.splice(FWDUVPUtils.indexOfArray(u, g.time_do), 1), g.time_do.setX(-1e3)), a = u.length;
                            for (c = 0; c < a; c++) r += u[c].w;
                            l = g.spaceBetweenButtons, d = g.sW - u[a - 1].w - g.startSpaceBetweenButtons - 2;
                            for (c = a - 1; 0 <= c; c--) h = u[c], c == a - 1 ? h.setX(d) : (e = u[c + 1], h.setX(e.x - h.w - l))
                        } else if (g.maiScrbW <= 120 || b.videoType_str == FWDUVPlayer.VIMEO && !m.showDefaultControllerForVimeo_bl) {
                            g.mainScrubber_do && -1 != FWDUVPUtils.indexOfArray(u, g.mainScrubber_do) && (u.splice(FWDUVPUtils.indexOfArray(u, g.mainScrubber_do), 1), g.positionScrollBarOnTopOfTheController()), g.time_do && -1 != FWDUVPUtils.indexOfArray(u, g.time_do) && (u.splice(FWDUVPUtils.indexOfArray(u, g.time_do), 1), g.time_do.setX(-1e3)), a = u.length;
                            for (c = 0; c < a; c++) r += u[c].w;
                            l = parseInt((g.sW - r - 2 * g.startSpaceBetweenButtons) / (a - 1)), d = parseInt((g.sW - r - (a - 1) * l) / 2);
                            for (c = 0; c < a; c++) h = u[c], 0 == c ? h.setX(d) : (e = u[c - 1], h.setX(e.x + e.w + l))
                        } else {
                            for (; g.maiScrbW < g.mainScrbMinW;) {
                                g.maiScrbW = g.sW - 2 * g.startSpaceBetweenButtons, g.time_do && -1 != FWDUVPUtils.indexOfArray(u, g.time_do) ? (u.splice(FWDUVPUtils.indexOfArray(u, g.time_do), 1), g.time_do.setX(-1e3), _ = !1) : g.shareButton_do && -1 != FWDUVPUtils.indexOfArray(u, g.shareButton_do) ? (u.splice(FWDUVPUtils.indexOfArray(u, g.shareButton_do), 1), g.shareButton_do.setX(-1e3)) : g.downloadButton_do && -1 != FWDUVPUtils.indexOfArray(u, g.downloadButton_do) ? (u.splice(FWDUVPUtils.indexOfArray(u, g.downloadButton_do), 1), g.downloadButton_do.setX(-1e3)) : g.embedButton_do && -1 != FWDUVPUtils.indexOfArray(u, g.embedButton_do) ? (u.splice(FWDUVPUtils.indexOfArray(u, g.embedButton_do), 1), g.embedButton_do.setX(-1e3)) : g.volBtn && -1 != FWDUVPUtils.indexOfArray(u, g.volBtn) ? (u.splice(FWDUVPUtils.indexOfArray(u, g.volBtn), 1), g.volBtn.setX(-1e3)) : g.playbackRateButton_do && -1 != FWDUVPUtils.indexOfArray(u, g.playbackRateButton_do) ? (u.splice(FWDUVPUtils.indexOfArray(u, g.playbackRateButton_do), 1), g.playbackRateButton_do.setX(-1e3)) : g.ytbQualityButton_do && -1 != FWDUVPUtils.indexOfArray(u, g.ytbQualityButton_do) ? (u.splice(FWDUVPUtils.indexOfArray(u, g.ytbQualityButton_do), 1), g.ytbQualityButton_do.setX(-1e3)) : g.playlistButton_do && -1 != FWDUVPUtils.indexOfArray(u, g.playlistButton_do) ? (u.splice(FWDUVPUtils.indexOfArray(u, g.playlistButton_do), 1), g.playlistButton_do.setX(-1e3)) : g.infoButton_do && -1 != FWDUVPUtils.indexOfArray(u, g.infoButton_do) ? (u.splice(FWDUVPUtils.indexOfArray(u, g.infoButton_do), 1), g.infoButton_do.setX(-1e3)) : g.categoriesButton_do && -1 != FWDUVPUtils.indexOfArray(u, g.categoriesButton_do) && (u.splice(FWDUVPUtils.indexOfArray(u, g.categoriesButton_do), 1), g.categoriesButton_do.setX(-1e3)), a = u.length;
                                for (c = 0; c < a; c++)(h = u[c]) != g.mainScrubber_do && (g.maiScrbW -= h.w + g.spaceBetweenButtons)
                            }
                            g.showNextAndPrevButtonsInController_bl && g.maiScrbW, _ && (g.maiScrbW -= 2 * g.timeOffsetLeftWidth), a = u.length;
                            for (c = 0; c < a; c++) {
                                var p, h = u[c];
                                0 == c ? h.setX(g.startSpaceBetweenButtons) : h == g.mainScrubber_do ? (e = u[c - 1], FWDAnimation.killTweensOf(g.mainScrubber_do), g.mainScrubber_do.setX(e.x + e.w + g.spaceBetweenButtons), g.mainScrubber_do.setY(parseInt((g.sH - g.mainScrbH) / 2)), g.mainScrubber_do.setWidth(g.maiScrbW + 1), g.mainScrubberBkMiddle_do.setWidth(g.maiScrbW - 2 * g.scrbsBkLARW), g.mainScrubberBkRight_do.setX(g.maiScrbW - g.scrbsBkLARW), g.mainScrubberDragMiddle_do.setWidth(g.maiScrbW - g.scrbsBkLARW - g.scrubbersOffsetWidth)) : h == g.time_do ? (e = u[c - 1], h.setX(e.x + e.w + g.spaceBetweenButtons + g.timeOffsetLeftWidth), p = 0, g.isLive && (p = 1), h.setY(parseInt((g.sH - h.h) / 2) + p)) : h == g.volBtn && _ ? (e = u[c - 1], h.setX(e.x + e.w + g.spaceBetweenButtons + g.timeOffsetRightWidth)) : (e = u[c - 1], h.setX(e.x + e.w + g.spaceBetweenButtons))
                            }
                            g.isShowed_bl ? g.isMainScrubberOnTop_bl = !1 : (g.isMainScrubberOnTop_bl = !0, g.positionScrollBarOnTopOfTheController())
                        }
                        g.bk_do && (g.bk_do.setWidth(g.sW), g.bk_do.setHeight(g.sH)), g.progressMiddle_do && g.progressMiddle_do.setWidth(Math.max(g.maiScrbW - g.scrbsBkLARW - g.scrubbersOffsetWidth, 0)), g.updateMainScrubber(g.percentPlayed), g.updatePreloaderBar(g.percentLoaded), g.mainHld.setWidth(g.sW), g.mainHld.setHeight(g.sH), g.setWidth(g.sW), g.setHeight(g.sH), g.atb && g.atb.resize()
                    }
                }
            }, g.positionScrollBarOnTopOfTheController = function () {
                g.maiScrbW = g.sW, g.updatePreloaderBar(g.percentLoaded), g.mainScrubber_do.setWidth(g.maiScrbW + 1), g.mainScrubberBkMiddle_do.setWidth(g.maiScrbW - 2 * g.scrbsBkLARW), g.mainScrubberBkRight_do.setX(g.maiScrbW - g.scrbsBkLARW), g.mainScrubberDragMiddle_do.setWidth(g.maiScrbW - g.scrbsBkLARW - g.scrubbersOffsetWidth);
                var e = 0;
                g.atb && g.atb.isShowed_bl && (e = g.sH), FWDAnimation.killTweensOf(g.mainScrubber_do), g.mainScrubber_do.setX(0), g.mainScrubber_do.setAlpha(1), g.isMainScrubberOnTop_bl || g.isShowed_bl ? (g.atb && g.atb.isShowed_bl && !g.isShowed_bl ? e += g.mainScrubberOffestTop : e = 0, FWDAnimation.killTweensOf(g.mainScrubber_do), g.isShowed_bl ? g.mainScrubber_do.setY(-g.mainScrubberOffestTop - e) : FWDAnimation.to(g.mainScrubber_do, .8, {
                    y: -g.mainScrubberOffestTop - e,
                    ease: Expo.easeOut
                })) : g.isLive || FWDAnimation.to(g.mainScrubber_do, .8, {
                    y: -g.mainScrubberOffestTop - e,
                    ease: Expo.easeOut
                }), g.isMainScrubberOnTop_bl = !0
            }, g.setupToolTips = function () {
                FWDUVPToolTip.setPrototype(), g.playPauseToolTip_do = new FWDUVPToolTip(g.playPauseButton_do, m.toopTipBk_str, m.toopTipPointer_str, "play / pause", g.buttonsToolTipFontColor_str, g.buttonsToolTipHideDelay), document.documentElement.appendChild(g.playPauseToolTip_do.screen), g.showControllerWhenVideoIsStopped_bl && (FWDUVPToolTip.setPrototype(), g.prevButtonToolTip_do = new FWDUVPToolTip(g.prevButton_do, m.toopTipBk_str, m.toopTipPointer_str, "previous video", g.buttonsToolTipFontColor_str, g.buttonsToolTipHideDelay), document.documentElement.appendChild(g.prevButtonToolTip_do.screen), FWDUVPToolTip.setPrototype(), g.nextButtonToolTip_do = new FWDUVPToolTip(g.nextButton_do, m.toopTipBk_str, m.toopTipPointer_str, "next video", g.buttonsToolTipFontColor_str, g.buttonsToolTipHideDelay), document.documentElement.appendChild(g.nextButtonToolTip_do.screen)), g.showPlaylistsButtonAndPlaylists_bl && (FWDUVPToolTip.setPrototype(), g.playlistsButtonToolTip_do = new FWDUVPToolTip(g.categoriesButton_do, m.toopTipBk_str, m.toopTipPointer_str, "show playlists", g.buttonsToolTipFontColor_str, g.buttonsToolTipHideDelay), document.documentElement.appendChild(g.playlistsButtonToolTip_do.screen)), g.showPlaylistButtonAndPlaylist_bl && (FWDUVPToolTip.setPrototype(), g.playlistButtonToolTip_do = new FWDUVPToolTip(g.playlistButton_do, m.toopTipBk_str, m.toopTipPointer_str, "show / hide playlist", g.buttonsToolTipFontColor_str, g.buttonsToolTipHideDelay), document.documentElement.appendChild(g.playlistButtonToolTip_do.screen)), g.showEmbedButton_bl && (FWDUVPToolTip.setPrototype(), g.embedButtonToolTip_do = new FWDUVPToolTip(g.embedButton_do, m.toopTipBk_str, m.toopTipPointer_str, "show embed window", g.buttonsToolTipFontColor_str, g.buttonsToolTipHideDelay), document.documentElement.appendChild(g.embedButtonToolTip_do.screen)), g.showShareButton_bl && (FWDUVPToolTip.setPrototype(), g.facebookButtonToolTip_do = new FWDUVPToolTip(g.shareButton_do, m.toopTipBk_str, m.toopTipPointer_str, "share", g.buttonsToolTipFontColor_str, g.buttonsToolTipHideDelay), document.documentElement.appendChild(g.facebookButtonToolTip_do.screen)), m.showChromecastButton_bl && (FWDUVPToolTip.setPrototype(), g.castButtonToolTip_do = new FWDUVPToolTip(g.ccBtn_do, m.toopTipBk_str, m.toopTipPointer_str, "chromecast", g.buttonsToolTipFontColor_str, g.buttonsToolTipHideDelay), document.documentElement.appendChild(g.castButtonToolTip_do.screen)), FWDUVPToolTip.setPrototype(), g.atbButtonToolTip_do = new FWDUVPToolTip(g.atbButton_do, m.toopTipBk_str, m.toopTipPointer_str, "a to b loop", g.buttonsToolTipFontColor_str, g.buttonsToolTipHideDelay), document.documentElement.appendChild(g.atbButtonToolTip_do.screen), g.showSubBtn && (FWDUVPToolTip.setPrototype(), g.subtitleButtonToolTip_do = new FWDUVPToolTip(g.subtitleButton_do, m.toopTipBk_str, m.toopTipPointer_str, "show / hide subtitle", g.buttonsToolTipFontColor_str, g.buttonsToolTipHideDelay), document.documentElement.appendChild(g.subtitleButtonToolTip_do.screen)), g.showInfoButton_bl && (FWDUVPToolTip.setPrototype(), g.infoButtonToolTip_do = new FWDUVPToolTip(g.infoButton_do, m.toopTipBk_str, m.toopTipPointer_str, "more info", g.buttonsToolTipFontColor_str, g.buttonsToolTipHideDelay), document.documentElement.appendChild(g.infoButtonToolTip_do.screen)), g.showDownloadVideoButton_bl && (FWDUVPToolTip.setPrototype(), g.downloadButtonToolTip_do = new FWDUVPToolTip(g.downloadButton_do, m.toopTipBk_str, m.toopTipPointer_str, "download video", g.buttonsToolTipFontColor_str, g.buttonsToolTipHideDelay), document.documentElement.appendChild(g.downloadButtonToolTip_do.screen)), g.fullScreenButton_do && (FWDUVPToolTip.setPrototype(), g.fullscreenButtonToolTip_do = new FWDUVPToolTip(g.fullScreenButton_do, m.toopTipBk_str, m.toopTipPointer_str, "fullscreen / normalscreen", g.buttonsToolTipFontColor_str, g.buttonsToolTipHideDelay), document.documentElement.appendChild(g.fullscreenButtonToolTip_do.screen))
            }, g.showToolTip = function (e, t, o) {
                var s, n, i, a;
                g.showButtonsToolTip_bl && (s = FWDUVPUtils.getViewportSize(), FWDUVPUtils.getViewportMouseCoordinates(o), i = e.screen.offsetWidth < 3 ? (n = parseInt(100 * e.getGlobalX() + e.w / 2 - t.w / 2), parseInt(100 * e.getGlobalY() - t.h - 8)) : (n = parseInt(e.getGlobalX() + e.w / 2 - t.w / 2), parseInt(e.getGlobalY() - t.h - 8)), n < (a = 0) ? (a = n, n = 0) : n + t.w > s.w && (n += -1 * (a = -1 * (s.w - (n + t.w)))), t.positionPointer(a, !1), t.setX(n), t.setY(i), t.show())
            }, g.setupAdsLines = function (e, t, o, s) {
                if (!g.createdAdsOnce_bl && (g.curLinesId != t || g.curLinesCat != o || s) && (g.curLinesId = t, g.curLinesCat = o, e)) {
                    if (g.resetsAdsLines(), g.linesHolder_do || (g.linesHolder_do = new FWDUVPDisplayObject("div"), g.linesHolder_do.setOverflow("visible"), g.mainScrubber_do.addChild(g.linesHolder_do)), g.createdAdsOnce_bl = !0, g.lines_ar = e, g.lines_ar) {
                        var n;
                        g.line_ar = [];
                        for (var i = 0; i < g.lines_ar.length; i++) {
                            (n = new FWDUVPDisplayObject("div")).screen.className = "uvp-ad-line";
                            var a = m.adLinePat_str;
                            g.useHEX && window.isWhite && (a = m.sknPth + "ad-line-dark.png"), n.getStyle().background = "url('" + a + "') repeat-x", n.timeStart = e[i].timeStart, n.setWidth(2), n.setHeight(g.mainScrubberDragLeft_img.height), n.isUsed_bl = !1, n.isShowed_bl = !1, g.lines_ar[i].played_bl && n.setVisible(!1), n.setAlpha(0), g.line_ar[i] = n, g.linesHolder_do.addChild(n)
                        }
                    }
                    g.totalDuration = 0
                }
            }, g.hideAdsLines = function () {
                if (g.linesHolder_do && g.linesHolder_do.setX(-5e3), g.line_ar)
                    for (var e = 0; e < g.line_ar.length; e++) g.line_ar[e].setAlpha(0), g.line_ar[e].isShowed_bl = !1
            }, g.positionAdsLines = function (e) {
                if (g.linesHolder_do && b.totalDuration && g.createdAdsOnce_bl && (g.totalDuration = b.totalDuration, b.isAdd_bl ? g.linesHolder_do.setX(-5e3) : g.linesHolder_do.setX(0), g.line_ar))
                    for (var t, o = 0; o < g.line_ar.length; o++) {
                        t = g.line_ar[o];
                        var s = Math.round(t.timeStart / g.totalDuration * g.maiScrbW) - 1;
                        t.setX(s), t.x < 0 && t.setX(0), t.isUsed_bl || 0 == g.totalDuration || t.isShowed_bl || (FWDAnimation.to(t, 1, {
                            alpha: 1,
                            delay: 1,
                            ease: Expo.easeOut
                        }), t.isShowed_bl = !0)
                    }
            }, g.resetsAdsLines = function () {
                if (g.line_ar) {
                    for (var e = 0; e < g.line_ar.length; e++) FWDAnimation.killTweensOf(g.line_ar[e]), g.linesHolder_do.removeChild(g.line_ar[e]);
                    g.createdAdsOnce_bl = !1, g.curLinesId = -1, g.line_ar = null, g.hadLInes = !1
                }
            }, g.playbackRatesSource_ar = m.defaultPlaybackRate_ar, g.playbackRateButtons_ar = [], g.totalPlaybackRateButtons = 6, g.arePlaybackRateButtonsShowed_bl = !0, g.showPlaybackRateButton_bl || (g.arePlaybackRateButtonsShowed_bl = !1), g.setupPlaybackRateButton = function () {
                g.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), g.playbackRateButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-watch-later'></span>", void 0, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), g.playbackRateButton_do = new FWDUVPSimpleButton(m.playbackRateNPath_img, m.playbackRateSPath_str, void 0, !0, g.useHEX, g.nBC, g.sBC)), g.playbackRateButton_do.setY(parseInt((g.sH - g.playbackRateButton_do.h) / 2));
                var e = setInterval(function () {
                    0 < g.playbackRateButton_do.buttonHeight && (clearInterval(e), g.playbackRateButton_do.setY(parseInt((g.sH - g.playbackRateButton_do.buttonHeight) / 2)))
                }, 50);
                g.playbackRateButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, g.playbackRateButtonMouseUpHandler), g.mainHld.addChild(g.playbackRateButton_do), g.playbackRateButton_do.setX(-500), g.disablePlaybackRateButton(), g.setupPlaybackRateButtons()
            }, g.playbackRateButtonMouseUpHandler = function () {
                g.arePlaybackRateButtonsShowed_bl ? g.hidePlaybackRateButtons(!0) : (g.showPlaybackRateButtons(!0), g.hideMainScrubberTop())
            }, g.disablePlaybackRateButton = function () {
                g.playbackRateButton_do && g.playbackRateButton_do.disable()
            }, g.enablePlaybackRateButton = function () {
                g.playbackRateButton_do && g.playbackRateButton_do.enable()
            }, g.removePlaybackRateButton = function () {
                g.playbackRateButton_do && -1 != FWDUVPUtils.indexOfArray(g.buttons_ar, g.playbackRateButton_do) && (g.buttons_ar.splice(FWDUVPUtils.indexOfArray(g.buttons_ar, g.playbackRateButton_do), 1), g.playbackRateButton_do.setX(-300), g.positionButtons())
            }, g.addPlaybackRateButton = function (e) {
                g.playbackRateButton_do && -1 == FWDUVPUtils.indexOfArray(g.buttons_ar, g.playbackRateButton_do) && (g.atbButton_do && -1 != g.getButtonIndex(g.atbButton_do) ? (indexToAdd = g.getButtonIndex(g.atbButton_do), g.buttons_ar.splice(indexToAdd, 0, g.playbackRateButton_do)) : g.infoButton_do && -1 != g.getButtonIndex(g.infoButton_do) ? (indexToAdd = g.getButtonIndex(g.infoButton_do), g.buttons_ar.splice(indexToAdd, 0, g.playbackRateButton_do)) : g.downloadButton_do && -1 != g.getButtonIndex(g.downloadButton_do) ? (indexToAdd = g.getButtonIndex(g.downloadButton_do), g.buttons_ar.splice(indexToAdd, 0, g.playbackRateButton_do)) : g.ccBtn_do && -1 != g.getButtonIndex(g.ccBtn_do) ? (indexToAdd = g.getButtonIndex(g.ccBtn_do), g.buttons_ar.splice(indexToAdd, 0, g.playbackRateButton_do)) : g.fullScreenButton_do ? (indexToAdd = g.getButtonIndex(g.fullScreenButton_do), g.buttons_ar.splice(indexToAdd, 0, g.playbackRateButton_do)) : g.buttons_ar.splice(g.buttons_ar.length, 0, g.playbackRateButton_do), g.updatePlaybackRateButtons(e))
            }, g.updatePlaybackRateButtons = function (e) {
                g.playbackRateButton_do && (setTimeout(function () {
                    g.disablePlaybackRateButtons(e)
                }, 65), g.prevplaybackRateIndex = e)
            }, g.setupPlaybackRateButtons = function () {
                var e, t;
                g.playbackRatesButtonsHolder_do = new FWDUVPDisplayObject("div"), g.playbackRatesButtonsHolder_do.setOverflow("visible"), g.repeatBackground_bl ? g.playbackRatesButtonsHolder_do.getStyle().background = "url('" + g.controllerBkPath_str + "')" : (g.playbackRatesButtonsBackground_do = new FWDUVPDisplayObject("img"), (e = new Image).src = g.controllerBkPath_str, g.playbackRatesButtonsBackground_do.setScreen(e), g.playbackRatesButtonsHolder_do.addChild(g.playbackRatesButtonsBackground_do)), g.playbackRatesButtonsHolder_do.setX(300), g.playbackRatesButtonsHolder_do.setY(-300), b.videoHolder_do.addChild(g.playbackRatesButtonsHolder_do), (e = new Image).src = g.ytbQualityButtonPointerPath_str, g.playbackRatesPonter_do = new FWDUVPDisplayObject("img"), g.playbackRatesPonter_do.setScreen(e), g.playbackRatesPonter_do.setWidth(g.pointerWidth), g.playbackRatesPonter_do.setHeight(g.pointerHeight), g.playbackRatesButtonsHolder_do.addChild(g.playbackRatesPonter_do), (e = new Image).src = g.youtubeQualityArrowPath_str, g.playbackRateQualityArrow_do = new FWDUVPDisplayObject("img"), g.playbackRateQualityArrow_do.setScreen(e), g.playbackRateQualityArrow_do.setX(7), g.playbackRateQualityArrow_do.setWidth(5), g.playbackRateQualityArrow_do.setHeight(7), g.playbackRatesButtonsHolder_do.addChild(g.playbackRateQualityArrow_do);
                for (var o = 0; o < g.totalPlaybackRateButtons; o++) FWDUVPYTBQButton.setPrototype(), (t = new FWDUVPYTBQButton("no source", g.youtubeQualityButtonNormalColor_str, g.youtubeQualityButtonSelectedColor_str, void 0, o)).addListener(FWDUVPYTBQButton.MOUSE_OVER, g.plbkQualityOver), t.addListener(FWDUVPYTBQButton.MOUSE_OUT, g.plbkQualityOut), t.addListener(FWDUVPYTBQButton.CLICK, g.plbkQualityClick), g.playbackRateButtons_ar[o] = t, g.playbackRatesButtonsHolder_do.addChild(t);
                g.positionAndResizePlaybackRateButtons(g.playbackRatesSource_ar), g.hidePlaybackRateButtons(!1)
            }, g.plbkQualityOver = function (e) {
                g.setPlaybackRateArrowPosition(e.target)
            }, g.plbkQualityOut = function (e) {
                g.setPlaybackRateArrowPosition(void 0)
            }, g.plbkQualityClick = function (e) {
                g.startAtPlaybackRate = e.id, g.disablePlaybackRateButtons(g.startAtPlaybackRate), g.hidePlaybackRateButtons(!0), g.dispatchEvent(s.CHANGE_PLAYBACK_RATES, {
                    rate: g.playbackRatesSource_ar[e.id]
                })
            }, g.positionAndResizePlaybackRateButtons = function (e) {
                if (e) {
                    var t, o = e.length;
                    if (g.prevplaybackRatesQualityButtonsLength != o) {
                        g.prevplaybackRatesQualityButtonsLength = o;
                        for (var s = 5, n = 0, i = 0, a = 0; a < o; a++) t = g.playbackRateButtons_ar[a], 1 == e[a] ? t.updateText("normal") : t.updateText(e[a]), t.setFinalSize();
                        setTimeout(function () {
                            for (var e = 0; e < o; e++) t = g.playbackRateButtons_ar[e], e < o ? (0 != t.x && t.setX(0), t.w > n && (n = t.w), t.setY(s), s += t.h) : -3e3 != t.x && t.setX(-3e3);
                            for (e = 0; e < o; e++)(t = g.playbackRateButtons_ar[e]).dumy_do.w < n && (t.setWidth(n), t.dumy_do.setWidth(n));
                            i = s + 5, g.playbackRatesPonter_do.setX(parseInt((n - g.playbackRatesPonter_do.w) / 2)), g.playbackRatesPonter_do.setY(i), g.playbackRatesButtonsBackground_do && (g.playbackRatesButtonsBackground_do.setWidth(n), g.playbackRatesButtonsBackground_do.setHeight(i)), g.playbackRatesButtonsHolder_do.setWidth(n), g.playbackRatesButtonsHolder_do.setHeight(i)
                        }, 60)
                    }
                }
            }, g.disablePlaybackRateButtons = function (e) {
                if (null != e)
                    for (var t = 0; t < g.totalPlaybackRateButtons; t++) btn = g.playbackRateButtons_ar[t], t == e ? (FWDAnimation.killTweensOf(g.playbackRateQualityArrow_do), g.playbackRateQualityArrow_do.setY(btn.y + parseInt((btn.h - g.playbackRateQualityArrow_do.h) / 2) - 1), btn.disable(), g.playbackRateDisabledButton_do = btn) : btn.enable()
            }, g.setPlaybackRateArrowPosition = function (e) {
                var t = 0,
                    t = e ? e.y + parseInt((e.h - g.playbackRateQualityArrow_do.h) / 2 - 1) : g.playbackRateDisabledButton_do.y + parseInt((g.playbackRateDisabledButton_do.h - g.playbackRateQualityArrow_do.h) / 2 - 1);
                FWDAnimation.killTweensOf(g.playbackRateQualityArrow_do), FWDAnimation.to(g.playbackRateQualityArrow_do, .6, {
                    y: t,
                    delay: .1,
                    ease: Expo.easeInOut
                })
            }, g.showPlaybackRateButtons = function (e) {
                var t, o;
                g.arePlaybackRateButtonsShowed_bl || (g.hideQualityButtons(), g.arePlaybackRateButtonsShowed_bl = !0, t = parseInt(g.playbackRateButton_do.x + parseInt(g.playbackRateButton_do.w - g.playbackRatesButtonsHolder_do.w) / 2), o = parseInt(b.tempVidStageHeight - g.sH - g.playbackRatesButtonsHolder_do.h - 6), g.hasPointerEvent_bl ? window.addEventListener("pointerdown", g.hideplaybackRatesButtonsHandler) : (g.isMbl || window.addEventListener("mousedown", g.hideplaybackRatesButtonsHandler), window.addEventListener("touchstart", g.hideplaybackRatesButtonsHandler)), g.playbackRatesButtonsHolder_do.setX(t), e ? FWDAnimation.to(g.playbackRatesButtonsHolder_do, .6, {
                    y: o,
                    ease: Expo.easeInOut
                }) : (FWDAnimation.killTweensOf(g.playbackRatesButtonsHolder_do), g.playbackRatesButtonsHolder_do.setY(o)))
            }, g.hidePlaybackRateButtons = function (e) {
                g.arePlaybackRateButtonsShowed_bl && g.playbackRatesButtonsHolder_do && (g.arePlaybackRateButtonsShowed_bl = !1, g.showMainScrubberOnTop(), e ? FWDAnimation.to(g.playbackRatesButtonsHolder_do, .6, {
                    y: b.sH,
                    ease: Expo.easeInOut
                }) : (FWDAnimation.killTweensOf(g.playbackRatesButtonsHolder_do), g.playbackRatesButtonsHolder_do.setY(b.sH)), g.hasPointerEvent_bl ? window.removeEventListener("pointerdown", g.hideplaybackRatesButtonsHandler) : (g.isMbl || window.removeEventListener("mousedown", g.hideplaybackRatesButtonsHandler), window.removeEventListener("touchstart", g.hideplaybackRatesButtonsHandler)))
            }, g.hideplaybackRatesButtonsHandler = function (e) {
                var t = FWDUVPUtils.getViewportMouseCoordinates(e);
                FWDUVPUtils.hitTest(g.playbackRateButton_do.screen, t.screenX, t.screenY) || FWDUVPUtils.hitTest(g.playbackRatesButtonsHolder_do.screen, t.screenX, t.screenY) || g.hidePlaybackRateButtons(!0)
            }, g.setIsLive = function (e) {
                (g.isLive = e) ? g.mainScrubber_do.contains(g.live_do) || (g.mainScrubber_do.setAlpha(.2), g.mainHld.addChild(g.live_do), setTimeout(function () {
                    g.live_do.setX(4), g.live_do.setY(-g.live_do.getHeight() - 4)
                }, 100), g.disableMainScrubber()): g.mainHld.contains(g.live_do) && (g.mainHld.removeChild(g.live_do), g.mainScrubber_do.setAlpha(1), g.enableMainScrubber())
            }, g.setupMainScrubber = function () {
                g.mainScrubber_do = new FWDUVPDisplayObject("div"), g.mainScrubber_do.setY(parseInt((g.sH - g.mainScrbH) / 2)), g.mainScrubber_do.setHeight(g.mainScrbH), g.mainScrubberBkLeft_do = new FWDUVPDisplayObject("img"), g.mainScrubberBkLeft_do.setScreen(g.mainScrubberBkLeft_img);
                var e = new Image;
                e.src = m.mainScrubberBkRightPath_str, g.mainScrubberBkRight_do = new FWDUVPDisplayObject("img"), g.mainScrubberBkRight_do.setScreen(e), g.mainScrubberBkRight_do.setWidth(g.mainScrubberBkLeft_do.w), g.mainScrubberBkRight_do.setHeight(g.mainScrubberBkLeft_do.h);
                var t = new Image;
                t.src = g.mainScrubberBkMiddlePath_str, g.mainScrubberBkMiddle_do = new FWDUVPDisplayObject("div"), g.mainScrubberBkMiddle_do.getStyle().background = "url('" + g.mainScrubberBkMiddlePath_str + "') repeat-x", g.mainScrubberBkMiddle_do.setHeight(g.mainScrbH), g.mainScrubberBkMiddle_do.setX(g.scrbsBkLARW), g.mainProgress_do = new FWDUVPDisplayObject("div"), g.mainProgress_do.setHeight(g.mainScrbH), g.progressLeft_do = new FWDUVPDisplayObject("img"), g.progressLeft_do.setScreen(g.progress), (t = new Image).src = g.progressMiddlePath_str, g.progressMiddle_do = new FWDUVPDisplayObject("div"), g.progressMiddle_do.getStyle().background = "url('" + g.progressMiddlePath_str + "') repeat-x", g.progressMiddle_do.setHeight(g.mainScrbH), g.progressMiddle_do.setX(g.mainScrbDrgLW), g.mainScrubberDrag_do = new FWDUVPDisplayObject("div"), g.mainScrubberDrag_do.setHeight(g.mainScrbH), g.useHEX ? (g.mainScrubberDragLeft_do = new FWDUVPDisplayObject("div"), g.mainScrubberDragLeft_do.setWidth(g.mainScrubberDragLeft_img.width), g.mainScrubberDragLeft_do.setHeight(g.mainScrubberDragLeft_img.height), g.mainScrubberDragLeft_canvas = FWDUVPUtils.getCanvasWithModifiedColor(g.mainScrubberDragLeft_img, g.nBC).canvas, g.mainScrubberDragLeft_do.screen.appendChild(g.mainScrubberDragLeft_canvas)) : (g.mainScrubberDragLeft_do = new FWDUVPDisplayObject("img"), g.mainScrubberDragLeft_do.setScreen(g.mainScrubberDragLeft_img)), g.mainScrubberMiddleImage = new Image, g.mainScrubberMiddleImage.src = g.mainScrubberDragMiddlePath_str, g.volumeScrubberDragMiddle_do = new FWDUVPDisplayObject("div"), g.useHEX ? (g.mainScrubberDragMiddle_do = new FWDUVPDisplayObject("div"), g.mainScrubberMiddleImage.onload = function () {
                    var e = FWDUVPUtils.getCanvasWithModifiedColor(g.mainScrubberMiddleImage, g.nBC, !0);
                    g.mainSCrubberMiddleCanvas = e.canvas, g.mainSCrubberDragMiddleImageBackground = e.image, g.mainScrubberDragMiddle_do.getStyle().background = "url('" + g.mainSCrubberDragMiddleImageBackground.src + "') repeat-x"
                }) : (g.mainScrubberDragMiddle_do = new FWDUVPDisplayObject("div"), g.mainScrubberDragMiddle_do.getStyle().background = "url('" + g.mainScrubberDragMiddlePath_str + "') repeat-x"), g.mainScrubberDragMiddle_do.setHeight(g.mainScrbH), g.mainScrubberDragMiddle_do.setX(g.mainScrbDrgLW), g.mainScrubberBarLine_do = new FWDUVPDisplayObject("img"), g.mainScrubberBarLine_do.setScreen(g.mainScrubberLine_img), g.mainScrubberBarLine_do.setAlpha(0), g.mainScrubberBarLine_do.hasTransform3d_bl = !1, g.mainScrubberBarLine_do.hasTransform2d_bl = !1, g.buttons_ar.push(g.mainScrubber_do), g.live_do = new FWDUVPDisplayObject("div"), g.live_do.hasTransform3d_bl = !1, g.live_do.hasTransform2d_bl = !1, g.live_do.setBackfaceVisibility(), g.live_do.getStyle().fontFamily = "Arial", g.live_do.getStyle().fontSize = "12px", g.live_do.getStyle().whiteSpace = "nowrap", g.live_do.getStyle().textAlign = "center", g.live_do.getStyle().padding = "4px", g.live_do.getStyle().paddingLeft = "6px", g.live_do.getStyle().paddingRIght = "6px", g.live_do.getStyle().color = "#FFFFFF", g.live_do.getStyle().fontSmoothing = "antialiased", g.live_do.getStyle().webkitFontSmoothing = "antialiased", g.live_do.getStyle().textRendering = "optimizeLegibility", g.live_do.getStyle().backgroundColor = "rgba(255,0,0,0.8)", g.live_do.setInnerHTML("&#x25C9; LIVE"), g.mainScrubber_do.addChild(g.mainScrubberBkLeft_do), g.mainScrubber_do.addChild(g.mainScrubberBkMiddle_do), g.mainScrubber_do.addChild(g.mainScrubberBkRight_do), g.mainScrubber_do.addChild(g.mainScrubberBarLine_do), g.mainScrubberDrag_do.addChild(g.mainScrubberDragLeft_do), g.mainScrubberDrag_do.addChild(g.mainScrubberDragMiddle_do), g.mainProgress_do.addChild(g.progressLeft_do), g.mainProgress_do.addChild(g.progressMiddle_do), g.mainScrubber_do.addChild(g.mainProgress_do), g.mainScrubber_do.addChild(g.mainScrubberDrag_do), g.mainScrubber_do.addChild(g.mainScrubberBarLine_do), g.mainHld.addChild(g.mainScrubber_do), g.disableVideoScrubber_bl || (g.hasPointerEvent_bl ? (g.mainScrubber_do.screen.addEventListener("pointerover", g.mainScrubberOnOverHandler), g.mainScrubber_do.screen.addEventListener("pointerout", g.mainScrubberOnOutHandler), g.mainScrubber_do.screen.addEventListener("pointerdown", g.mainScrubberOnDownHandler)) : g.screen.addEventListener && (g.isMbl || (g.mainScrubber_do.screen.addEventListener("mouseover", g.mainScrubberOnOverHandler), g.mainScrubber_do.screen.addEventListener("mousemove", g.updateTooltipOnMove), g.mainScrubber_do.screen.addEventListener("mouseout", g.mainScrubberOnOutHandler), g.mainScrubber_do.screen.addEventListener("mousedown", g.mainScrubberOnDownHandler)), g.mainScrubber_do.screen.addEventListener("touchstart", g.mainScrubberOnDownHandler))), g.disableMainScrubber(), g.updateMainScrubber(0), FWDUVPScrubberToolip.setPrototype(), g.ttm = new FWDUVPScrubberToolip(g.mainScrubber_do, m.scrubbersToolTipLabelBackgroundColor, m.scrubbersToolTipLabelFontColor, test), g.addChild(g.ttm)
            }, g.updateToolTip = function (e, t) {
                m.showMainScrubberToolTipLabel_bl && (b.isCasting ? g.ttm.setLabel(FWDUVPUtils.formatTime(Math.round(b.cc.getDuration() * t))) : g.ttm.setLabel(FWDUVPUtils.formatTime(Math.round(b.totalDuration * t))), g.ttm.setX(Math.round(g.mainScrubber_do.x + e - g.ttm.getWidth() / 2) + 1), g.ttm.setY(g.mainScrubber_do.y - g.ttm.h - 2))
            }, g.updateThumbnailsPreview = function (e, t) {
                var o, s;
                g.thumbnailsPreview_do && b.hasThumbnailsPreview && (o = 0, (s = Math.round(g.mainScrubber_do.x + e - g.thumbnailsPreview_do.getWidth() / 2) + 1) < 1 ? (o = s, s = 1) : s > g.sW - g.thumbnailsPreview_do.w - 1 && (o = s - g.sW + g.thumbnailsPreview_do.w, s = g.sW - g.thumbnailsPreview_do.w - 1), g.thumbnailsPreview_do.setLabel(FWDUVPUtils.formatTime(Math.round(b.totalDuration * t)), Math.round(b.totalDuration * t), o), g.thumbnailsPreview_do.setX(s), g.thumbnailsPreview_do.setY(g.mainScrubber_do.y - g.thumbnailsPreview_do.h - 2))
            }, g.updateTooltipOnMove = function (e) {
                var t = FWDUVPUtils.getViewportMouseCoordinates(e).screenX - g.mainScrubber_do.getGlobalX();
                t < 0 ? t = 0 : t > g.maiScrbW - g.scrubbersOffsetWidth && (t = g.maiScrbW - g.scrubbersOffsetWidth);
                var o = t / g.maiScrbW;
                g.updateToolTip(t, o), g.updateThumbnailsPreview(t, o)
            }, g.mainScrubberWMouseMove = function (e) {
                var t = FWDUVPUtils.getViewportMouseCoordinates(e);
                g.vcX = t.screenX, g.vcY = t.screenY, FWDUVPUtils.hitTest(g.mainScrubber_do.screen, g.vcX, g.vcY) || g.isMainScrubberScrubbing_bl || (window.removeEventListener("mousemove", g.mainScrubberWMouseMove), g.ttm.hide());
                var o = FWDUVPUtils.getViewportMouseCoordinates(e).screenX - g.mainScrubber_do.getGlobalX();
                o < 0 ? o = 0 : o > g.maiScrbW - g.scrubbersOffsetWidth && (o = g.maiScrbW - g.scrubbersOffsetWidth);
                var s = o / g.maiScrbW;
                g.updateThumbnailsPreview(o, s)
            }, g.mainScrubberOnOverHandler = function (e) {
                var t, o;
                g.isMainScrubberDisabled_bl || (m.showMainScrubberToolTipLabel_bl && !b.hasThumbnailsPreview && g.ttm.show(), g.thumbnailsPreview_do && b.hasThumbnailsPreview && g.thumbnailsPreview_do.show(), g.isMbl || !g.ttm && !g.thumbnailsPreview_do || (window.removeEventListener("mousemove", g.mainScrubberWMouseMove), window.addEventListener("mousemove", g.mainScrubberWMouseMove)), (t = FWDUVPUtils.getViewportMouseCoordinates(e).screenX - g.mainScrubber_do.getGlobalX()) < 0 ? t = 0 : t > g.maiScrbW - g.scrubbersOffsetWidth && (t = g.maiScrbW - g.scrubbersOffsetWidth), o = t / g.maiScrbW, g.updateToolTip(t, o), g.updateThumbnailsPreview(t, o))
            }, g.mainScrubberOnOutHandler = function (e) {
                g.isMainScrubberScrubbing_bl || (g.ttm && g.ttm.hide(), g.thumbnailsPreview_do && b.hasThumbnailsPreview && g.thumbnailsPreview_do.hide())
            }, g.mainScrubberOnDownHandler = function (e) {
                var t, o;
                g.isMainScrubberDisabled_bl || 2 == e.button || (b.showDisable(), e.preventDefault && e.preventDefault(), g.isMainScrubberScrubbing_bl = !0, (t = FWDUVPUtils.getViewportMouseCoordinates(e).screenX - g.mainScrubber_do.getGlobalX()) < 0 ? t = 0 : t > g.maiScrbW - g.scrubbersOffsetWidth && (t = g.maiScrbW - g.scrubbersOffsetWidth), o = t / g.maiScrbW, m.showMainScrubberToolTipLabel_bl && !b.hasThumbnailsPreview && g.ttm.show(), g.thumbnailsPreview_do && b.hasThumbnailsPreview && g.thumbnailsPreview_do.show(), g.updateToolTip(t, o), g.updateMainScrubber(o), g.updateThumbnailsPreview(t, o), g.dispatchEvent(s.START_TO_SCRUB), g.dispatchEvent(s.SCRUB, {
                    percent: o
                }), g.hasPointerEvent_bl ? (window.addEventListener("pointermove", g.mainScrubberMoveHandler), window.addEventListener("pointerup", g.mainScrubberEndHandler)) : (window.addEventListener("mousemove", g.mainScrubberMoveHandler), window.addEventListener("mouseup", g.mainScrubberEndHandler), window.addEventListener("touchmove", g.mainScrubberMoveHandler), window.addEventListener("touchend", g.mainScrubberEndHandler)))
            }, g.mainScrubberMoveHandler = function (e) {
                e.preventDefault && e.preventDefault();
                var t = FWDUVPUtils.getViewportMouseCoordinates(e).screenX - g.mainScrubber_do.getGlobalX();
                t < 0 ? t = 0 : t > g.maiScrbW - g.scrubbersOffsetWidth && (t = g.maiScrbW - g.scrubbersOffsetWidth);
                var o = t / g.maiScrbW;
                g.updateToolTip(t, o), g.updateMainScrubber(o), g.updateThumbnailsPreview(t, o), g.dispatchEvent(s.SCRUB, {
                    percent: o
                })
            }, g.mainScrubberEndHandler = function (e) {
                var t;
                b.hideDisable(), e && (t = FWDUVPUtils.getViewportMouseCoordinates(e), FWDUVPUtils.hitTest(g.mainScrubber_do.screen, t.screenX, t.screenY) || (g.ttm && g.ttm.hide(), g.thumbnailsPreview_do && b.hasThumbnailsPreview && g.thumbnailsPreview_do.hide())), g.isMainScrubberScrubbing_bl = !1, g.dispatchEvent(s.STOP_TO_SCRUB), g.hasPointerEvent_bl ? (window.removeEventListener("pointermove", g.mainScrubberMoveHandler), window.removeEventListener("pointerup", g.mainScrubberEndHandler)) : (window.removeEventListener("mousemove", g.mainScrubberMoveHandler), window.removeEventListener("mouseup", g.mainScrubberEndHandler), window.removeEventListener("touchmove", g.mainScrubberMoveHandler), window.removeEventListener("touchend", g.mainScrubberEndHandler))
            }, g.disableMainScrubber = function () {
                g.mainScrubber_do && (g.isMainScrubberDisabled_bl = !0, g.mainScrubber_do.setButtonMode(!1), g.mainScrubberEndHandler(), g.mainScrubberOnOutHandler(), g.updateMainScrubber(0), g.updatePreloaderBar(0))
            }, g.enableMainScrubber = function () {
                g.mainScrubber_do && !g.isLive && (g.isMainScrubberDisabled_bl = !1, g.disableVideoScrubber_bl || g.mainScrubber_do.setButtonMode(!0))
            }, g.updateMainScrubber = function (e) {
                var t;
                g.mainScrubber_do && (g.isLive && (e = 0), t = parseInt(e * g.maiScrbW), isNaN(t) || null == t || (t < 0 && (t = 0), g.percentPlayed = e, !FWDUVPlayer.hasHTML5Video && t >= g.mainProgress_do.w && (t = g.mainProgress_do.w), t < 1 && g.isMainScrubberLineVisible_bl ? (g.isMainScrubberLineVisible_bl = !1, FWDAnimation.to(g.mainScrubberBarLine_do, .5, {
                    alpha: 0
                })) : 1 < t && !g.isMainScrubberLineVisible_bl && (g.isMainScrubberLineVisible_bl = !0, FWDAnimation.to(g.mainScrubberBarLine_do, .5, {
                    alpha: 1
                })), g.mainScrubberDrag_do.setWidth(t), t > g.maiScrbW - g.scrubbersOffsetWidth && (t = g.maiScrbW - g.scrubbersOffsetWidth), t < 0 && (t = 0), FWDAnimation.to(g.mainScrubberBarLine_do, .8, {
                    x: t + 1,
                    ease: Expo.easeOut
                })))
            }, g.updatePreloaderBar = function (e) {
                var t;
                g.mainProgress_do && (g.isLive && (e = 0), g.percentLoaded = e, t = parseInt(g.percentLoaded * g.maiScrbW), isNaN(t) || null == t || (t < 0 && (t = 0), .98 <= g.percentLoaded ? (g.percentLoaded = 1, g.mainProgress_do.setY(-30)) : 0 != g.mainProgress_do.y && 1 != g.percentLoaded && g.mainProgress_do.setY(0), t > g.maiScrbW - g.scrubbersOffsetWidth && (t = g.maiScrbW - g.scrubbersOffsetWidth), t < 0 && (t = 0), g.mainProgress_do.setWidth(t)))
            }, g.setupPrevButton = function () {
                g.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), g.prevButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-FF-left'></span>", void 0, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), g.prevButton_do = new FWDUVPSimpleButton(m.prev2N_img, m.prevSPath_str, void 0, !0, g.useHEX, g.nBC, g.sBC)), g.prevButton_do.addListener(FWDUVPSimpleButton.SHOW_TOOLTIP, g.prevButtonShowTooltipHandler), g.prevButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, g.prevButtonOnMouseUpHandler), g.prevButton_do.setY(parseInt((g.sH - g.prevButton_do.h) / 2));
                var e = setInterval(function () {
                    0 < g.prevButton_do.buttonHeight && (clearInterval(e), g.prevButton_do.setY(parseInt((g.sH - g.prevButton_do.buttonHeight) / 2)))
                }, 50);
                g.buttons_ar.push(g.prevButton_do), g.mainHld.addChild(g.prevButton_do)
            }, g.prevButtonShowTooltipHandler = function (e) {
                g.showToolTip(g.prevButton_do, g.prevButtonToolTip_do, e.e)
            }, g.prevButtonOnMouseUpHandler = function () {
                g.dispatchEvent(FWDUVPPlaylist.PLAY_PREV_VIDEO)
            }, g.setupNextButton = function () {
                g.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), g.nextButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-FF-right'></span>", void 0, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), g.nextButton_do = new FWDUVPSimpleButton(m.next2N_img, m.nextSPath_str, void 0, !0, g.useHEX, g.nBC, g.sBC)), g.nextButton_do.addListener(FWDUVPSimpleButton.SHOW_TOOLTIP, g.nextButtonShowTooltipHandler), g.nextButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, g.nextButtonOnMouseUpHandler), g.nextButton_do.setY(parseInt((g.sH - g.nextButton_do.h) / 2));
                var e = setInterval(function () {
                    0 < g.nextButton_do.buttonHeight && (clearInterval(e), g.nextButton_do.setY(parseInt((g.sH - g.nextButton_do.buttonHeight) / 2)))
                }, 50);
                g.buttons_ar.push(g.nextButton_do), g.mainHld.addChild(g.nextButton_do)
            }, g.nextButtonShowTooltipHandler = function (e) {
                g.showToolTip(g.nextButton_do, g.nextButtonToolTip_do, e.e)
            }, g.nextButtonOnMouseUpHandler = function () {
                g.dispatchEvent(FWDUVPPlaylist.PLAY_NEXT_VIDEO)
            }, g.setupPlayPauseButton = function () {
                g.useVectorIcons_bl ? (FWDUVPComplexButton.setPrototype(), g.playPauseButton_do = new FWDUVPComplexButton(void 0, void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-play'></span>", "<span class='fwdicon fwdicon-pause'></span>", "UVPMainButtonsNormalState play", "UVPMainButtonsSelectedState play")) : (FWDUVPComplexButton.setPrototype(), g.playPauseButton_do = new FWDUVPComplexButton(g.playN_img, m.playSPath_str, g.pauseN_img, m.pauseSPath_str, !0, g.useHEX, g.nBC, g.sBC)), g.buttons_ar.push(g.playPauseButton_do), g.playPauseButton_do.setY(parseInt((g.sH - g.playPauseButton_do.buttonHeight) / 2));
                var e = setInterval(function () {
                    0 < g.playPauseButton_do.buttonHeight && (clearInterval(e), g.playPauseButton_do.setY(parseInt((g.sH - g.playPauseButton_do.buttonHeight) / 2)))
                }, 50);
                g.playPauseButton_do.addListener(FWDUVPComplexButton.SHOW_TOOLTIP, g.playButtonShowTooltipHandler), g.playPauseButton_do.addListener(FWDUVPComplexButton.MOUSE_UP, g.playButtonMouseUpHandler), g.mainHld.addChild(g.playPauseButton_do)
            }, g.playButtonShowTooltipHandler = function (e) {
                g.showToolTip(g.playPauseButton_do, g.playPauseToolTip_do, e.e)
            }, g.showPlayButton = function () {
                g.playPauseButton_do && g.playPauseButton_do.setButtonState(1)
            }, g.showPauseButton = function () {
                g.playPauseButton_do && g.playPauseButton_do.setButtonState(0)
            }, g.playButtonMouseUpHandler = function () {
                0 == g.playPauseButton_do.currentState ? g.dispatchEvent(s.PAUSE) : g.dispatchEvent(s.PLAY)
            }, g.disablePlayButton = function () {
                g.playPauseButton_do.disable(), g.playPauseButton_do.setNormalState(), g.showPlayButton()
            }, g.enablePlayButton = function () {
                g.playPauseButton_do.enable()
            }, g.setupCategoriesButton = function () {
                g.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), g.categoriesButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-playlist'></span>", void 0, "UVPMainButtonsNormalState cats", "UVPMainButtonsSelectedState cats")) : (FWDUVPSimpleButton.setPrototype(), g.categoriesButton_do = new FWDUVPSimpleButton(g.categoriesN_img, m.categoriesSPath_str, void 0, !0, g.useHEX, g.nBC, g.sBC)), g.categoriesButton_do.addListener(FWDUVPSimpleButton.SHOW_TOOLTIP, g.categoriesButtonShowTooltipHandler), g.categoriesButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, g.categoriesButtonOnMouseUpHandler), g.categoriesButton_do.setY(parseInt((g.sH - g.categoriesButton_do.h) / 2));
                var e = setInterval(function () {
                    0 < g.categoriesButton_do.buttonHeight && (clearInterval(e), g.categoriesButton_do.setY(parseInt((g.sH - g.categoriesButton_do.buttonHeight) / 2)))
                }, 50);
                g.buttons_ar.push(g.categoriesButton_do), g.mainHld.addChild(g.categoriesButton_do)
            }, g.categoriesButtonShowTooltipHandler = function (e) {
                g.showToolTip(g.categoriesButton_do, g.playlistsButtonToolTip_do, e.e)
            }, g.categoriesButtonOnMouseUpHandler = function () {
                g.dispatchEvent(s.SHOW_CATEGORIES)
            }, g.setCategoriesButtonState = function (e) {
                g.categoriesButton_do && ("selected" == e ? g.categoriesButton_do.setSelected() : "unselected" == e && g.categoriesButton_do.setUnselected())
            }, g.setupPlaylistButton = function () {
                g.useVectorIcons_bl ? (FWDUVPComplexButton.setPrototype(), g.playlistButton_do = new FWDUVPComplexButton(void 0, void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-playlist-sidebar'></span>", "<span class='fwdicon fwdicon-playlist-close-sidebar'></span>", "UVPMainButtonsNormalState playlist", "UVPMainButtonsSelectedState playlist")) : (FWDUVPComplexButton.setPrototype(), g.playlistButton_do = new FWDUVPComplexButton(g.hidePlaylistN_img, m.hidePlaylistSPath_str, g.showPlaylistN_img, m.showPlaylistSPath_str, !0, g.useHEX, g.nBC, g.sBC)), g.buttons_ar.push(g.playlistButton_do), g.playlistButton_do.setY(parseInt((g.sH - g.playlistButton_do.buttonHeight) / 2));
                var e = setInterval(function () {
                    0 < g.playlistButton_do.buttonHeight && (clearInterval(e), g.playlistButton_do.setY(parseInt((g.sH - g.playlistButton_do.buttonHeight) / 2)))
                }, 50);
                g.playlistButton_do.addListener(FWDUVPComplexButton.SHOW_TOOLTIP, g.playlistButtonShowToolTipHandler), g.playlistButton_do.addListener(FWDUVPComplexButton.MOUSE_UP, g.playlistButtonMouseUpHandler), g.showPlaylistByDefault_bl || g.playlistButton_do.setButtonState(0), g.mainHld.addChild(g.playlistButton_do)
            }, g.playlistButtonShowToolTipHandler = function (e) {
                g.showToolTip(g.playlistButton_do, g.playlistButtonToolTip_do, e.e)
            }, g.showShowPlaylistButton = function () {
                g.playlistButton_do && g.playlistButton_do.setButtonState(1)
            }, g.showHidePlaylistButton = function () {
                g.playlistButton_do && g.playlistButton_do.setButtonState(0)
            }, g.playlistButtonMouseUpHandler = function () {
                1 == g.playlistButton_do.currentState ? g.dispatchEvent(s.SHOW_PLAYLIST) : g.dispatchEvent(s.HIDE_PLAYLIST), g.playlistButton_do.setNormalState(!0), g.playlistButtonToolTip_do && g.playlistButtonToolTip_do.hide()
            }, g.disablePlaylistButton = function () {
                g.playlistButton_do && (g.playlistButton_do.disable(), g.playlistButton_do.setAlpha(.4))
            }, g.enablePlaylistButton = function () {
                g.playlistButton_do && (g.playlistButton_do.enable(), g.playlistButton_do.setAlpha(1))
            }, g.setupEmbedButton = function () {
                g.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), g.embedButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-embed'></span>", void 0, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), g.embedButton_do = new FWDUVPSimpleButton(g.embedN_img, m.embedPathS_str, void 0, !0, g.useHEX, g.nBC, g.sBC)), g.embedButton_do.addListener(FWDUVPSimpleButton.SHOW_TOOLTIP, g.embedButtonShowToolTipHandler), g.embedButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, g.embedButtonOnMouseUpHandler), g.embedButton_do.setY(parseInt((g.sH - g.embedButton_do.h) / 2));
                var e = setInterval(function () {
                    0 < g.embedButton_do.buttonHeight && (clearInterval(e), g.embedButton_do.setY(parseInt((g.sH - g.embedButton_do.buttonHeight) / 2)))
                }, 50);
                g.buttons_ar.push(g.embedButton_do), g.mainHld.addChild(g.embedButton_do)
            }, g.embedButtonShowToolTipHandler = function (e) {
                g.showToolTip(g.embedButton_do, g.embedButtonToolTip_do, e.e)
            }, g.embedButtonOnMouseUpHandler = function () {
                g.dispatchEvent(s.SHOW_EMBED_WINDOW), g.embedButtonToolTip_do && g.embedButtonToolTip_do.hide()
            }, g.setupYtbButtons = function () {
                var e, t;
                g.ytbButtonsHolder_do = new FWDUVPDisplayObject("div"), g.ytbButtonsHolder_do.setOverflow("visible"), g.repeatBackground_bl ? g.ytbButtonsHolder_do.getStyle().background = "url('" + g.controllerBkPath_str + "')" : (g.ytbButtonBackground_do = new FWDUVPDisplayObject("img"), (e = new Image).src = g.controllerBkPath_str, g.ytbButtonBackground_do.setScreen(e), g.ytbButtonsHolder_do.addChild(g.ytbButtonBackground_do)), g.ytbButtonsHolder_do.setX(300), g.ytbButtonsHolder_do.setY(-300), b.videoHolder_do.addChild(g.ytbButtonsHolder_do, 0), (e = new Image).src = g.ytbQualityButtonPointerPath_str, g.pointer_do = new FWDUVPDisplayObject("img"), g.pointer_do.setScreen(e), g.pointer_do.setWidth(g.pointerWidth), g.pointer_do.setHeight(g.pointerHeight), g.ytbButtonsHolder_do.addChild(g.pointer_do), (e = new Image).src = g.youtubeQualityArrowPath_str, g.ytbQualityArrow_do = new FWDUVPDisplayObject("img"), g.ytbQualityArrow_do.setScreen(e), g.ytbQualityArrow_do.setX(7), g.ytbQualityArrow_do.setWidth(5), g.ytbQualityArrow_do.setHeight(7), g.ytbButtonsHolder_do.addChild(g.ytbQualityArrow_do);
                for (var o = 0; o < g.ttYtbBtns; o++) FWDUVPYTBQButton.setPrototype(), (t = new FWDUVPYTBQButton(g.ytbQuality_ar[o], g.youtubeQualityButtonNormalColor_str, g.youtubeQualityButtonSelectedColor_str, m.hdPath_str, o)).addListener(FWDUVPYTBQButton.MOUSE_OVER, g.ytbQualityOver), t.addListener(FWDUVPYTBQButton.MOUSE_OUT, g.ytbQualityOut), t.addListener(FWDUVPYTBQButton.CLICK, g.ytbQualityClick), g.ytbButtons_ar[o] = t, g.ytbButtonsHolder_do.addChild(t);
                g.hideQualityButtons(!1)
            }, g.ytbQualityOver = function (e) {
                g.setYtbQualityArrowPosition(e.target)
            }, g.ytbQualityOut = function (e) {
                g.setYtbQualityArrowPosition(void 0)
            }, g.ytbQualityClick = function (e) {
                g.hideQualityButtons(!0), g.dispatchEvent(s.CHANGE_YOUTUBE_QUALITY, {
                    quality: e.target.label_str,
                    id: e.id
                })
            }, g.positionAndResizeYtbQualityButtons = function (e) {
                if (e) {
                    var t, o = e.length;
                    if (g.prevYtbQualityButtonsLength != o) {
                        g.prevYtbQualityButtonsLength = o;
                        for (var s = 5, n = 0, i = 0, a = 0; a < o; a++)(t = g.ytbButtons_ar[a]) && t.updateText(e[a]);
                        setTimeout(function () {
                            for (var e = 0; e < g.ttYtbBtns; e++)(t = g.ytbButtons_ar[e]).setFinalSize(), e < o ? (0 != t.x && t.setX(0), t.w > n && (n = t.w), t.setY(s), s += t.h) : -3e3 != t.x && t.setX(-3e3);
                            for (e = 0; e < g.ttYtbBtns; e++)(t = g.ytbButtons_ar[e]).dumy_do.w < n && (t.setWidth(n), t.dumy_do.setWidth(n));
                            i = s + 5, g.pointer_do.setX(parseInt((n - g.pointer_do.w) / 2)), g.pointer_do.setY(i), g.ytbButtonBackground_do && (g.ytbButtonBackground_do.setWidth(n), g.ytbButtonBackground_do.setHeight(i)), g.ytbButtonsHolder_do.setWidth(n), g.ytbButtonsHolder_do.setHeight(i)
                        }, 300)
                    }
                }
            }, g.disableQualityButtons = function (e) {
                "highres" == e || "hd1080" == e || "hd720" == e || "hd1440" == e || "hd2160" == e ? g.ytbQualityButton_do.showDisabledState() : g.ytbQualityButton_do.hideDisabledState();
                for (var t = 0; t < g.ttYtbBtns; t++) btn = g.ytbButtons_ar[t], btn.label_str == e ? (FWDAnimation.killTweensOf(g.ytbQualityArrow_do), 0 != btn.y && (g.ytbQualityArrow_do.setY(btn.y + Math.round((btn.h - g.ytbQualityArrow_do.h) / 2)), g.ytbDisabledButton_do = btn), btn.disable()) : btn.enable()
            }, g.setYtbQualityArrowPosition = function (e) {
                var t = 0,
                    t = e ? e.y + parseInt((e.h - g.ytbQualityArrow_do.h) / 2) : g.ytbDisabledButton_do.y + parseInt((g.ytbDisabledButton_do.h - g.ytbQualityArrow_do.h) / 2);
                FWDAnimation.killTweensOf(g.ytbQualityArrow_do), FWDAnimation.to(g.ytbQualityArrow_do, .6, {
                    y: t,
                    delay: .1,
                    ease: Expo.easeInOut
                })
            }, g.showQualityButtons = function (e) {
                var t, o;
                !g.areYtbQualityButtonsShowed_bl && g.showYoutubeQualityButton_bl && (g.hideSubtitleButtons(), g.hideMainScrubberTop(), g.areYtbQualityButtonsShowed_bl = !0, t = parseInt(g.ytbQualityButton_do.x + parseInt(g.ytbQualityButton_do.w - g.ytbButtonsHolder_do.w) / 2), o = parseInt(b.tempVidStageHeight - g.sH - g.ytbButtonsHolder_do.h - 6), window.hasPointerEvent_bl ? window.addEventListener("pointerdown", g.hideQualityButtonsHandler) : (g.isMbl || window.addEventListener("mousedown", g.hideQualityButtonsHandler), window.addEventListener("touchstart", g.hideQualityButtonsHandler)), g.ytbButtonsHolder_do.setX(t), e ? FWDAnimation.to(g.ytbButtonsHolder_do, .6, {
                    y: o,
                    ease: Expo.easeInOut
                }) : (FWDAnimation.killTweensOf(g.ytbButtonsHolder_do), g.ytbButtonsHolder_do.setY(o)))
            }, g.hideQualityButtons = function (e) {
                g.areYtbQualityButtonsShowed_bl && g.showYoutubeQualityButton_bl && (g.hideSubtitleButtons(), g.areYtbQualityButtonsShowed_bl = !1, e ? FWDAnimation.to(g.ytbButtonsHolder_do, .6, {
                    y: b.sH,
                    ease: Expo.easeInOut
                }) : (FWDAnimation.killTweensOf(g.ytbButtonsHolder_do), g.ytbButtonsHolder_do.setY(b.sH)), window.hasPointerEvent_bl ? window.removeEventListener("pointerdown", g.hideQualityButtonsHandler) : (g.isMbl || window.removeEventListener("mousedown", g.hideQualityButtonsHandler), window.removeEventListener("touchstart", g.hideQualityButtonsHandler)))
            }, g.showSubBtn, g.subtitlesSource_ar = m.subtitles_ar, g.subtitleButtons_ar = [], g.totalSubttleButtons = 10, g.setupSubtitleButton = function () {
                g.useVectorIcons_bl ? (FWDUVPComplexButton.setPrototype(), g.subtitleButton_do = new FWDUVPComplexButton(void 0, void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-CC'></span>", "<span class='fwdicon fwdicon-CC-off'></span>", "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPComplexButton.setPrototype(), g.subtitleButton_do = new FWDUVPComplexButton(m.showSubtitleNPath_img, m.showSubtitleSPath_str, m.hideSubtitleNPath_img, m.hideSubtitleSPath_str, !0, g.useHEX, g.nBC, g.sBC));
                var e = setInterval(function () {
                    0 < g.subtitleButton_do.buttonHeight && (clearInterval(e), g.subtitleButton_do.setY(parseInt((g.sH - g.subtitleButton_do.buttonHeight) / 2)))
                }, 50);
                g.buttons_ar.push(g.subtitleButton_do), g.subtitleButton_do.setY(parseInt((g.sH - g.subtitleButton_do.h) / 2)), g.subtitleButton_do.addListener(FWDUVPComplexButton.MOUSE_UP, g.subtitleButtonMouseUpHandler), g.mainHld.addChild(g.subtitleButton_do), g.setupSubtitleButtons(), -1 != location.protocol.indexOf("file:") && g.disableSubtitleButton(), b.subtitle_do.showSubtitileByDefault_bl && g.subtitleButton_do.setButtonState(0)
            }, g.subtitleButtonMouseUpHandler = function () {
                g.areSubtitleButtonsShowed_bl ? g.hideSubtitleButtons(!0) : g.showSubtitleButtons(!0)
            }, g.disableSubtitleButton = function () {
                g.subtitleButton_do && g.subtitleButton_do.disable()
            }, g.enableSubtitleButton = function () {
                g.subtitleButton_do && g.subtitleButton_do.enable()
            }, g.updateSubtitleButtons = function (e, t) {
                g.subtitleButton_do && (g.subtitlesSource_ar = e, g.positionAndResizeSubtitleButtons(e), setTimeout(function () {
                    t = g.subtitlesSource_ar.length - 1 - t, g.disableSubtitleButtons(t)
                }, 65), g.prevSubtitleIndex = t)
            }, g.setupSubtitleButtons = function () {
                var e, t;
                g.subtitlesButtonsHolder_do = new FWDUVPDisplayObject("div"), g.subtitlesButtonsHolder_do.setOverflow("visible"), g.repeatBackground_bl ? g.subtitlesButtonsHolder_do.getStyle().background = "url('" + g.controllerBkPath_str + "')" : (g.subtitlesButtonsBackground_do = new FWDUVPDisplayObject("img"), (e = new Image).src = g.controllerBkPath_str, g.subtitlesButtonsBackground_do.setScreen(e), g.subtitlesButtonsHolder_do.addChild(g.subtitlesButtonsBackground_do)), g.subtitlesButtonsHolder_do.setX(300), g.subtitlesButtonsHolder_do.setY(-300), b.videoHolder_do.addChild(g.subtitlesButtonsHolder_do, 0), (e = new Image).src = g.ytbQualityButtonPointerPath_str, g.subtitlesPonter_do = new FWDUVPDisplayObject("img"), g.subtitlesPonter_do.setScreen(e), g.subtitlesPonter_do.setWidth(g.pointerWidth), g.subtitlesPonter_do.setHeight(g.pointerHeight), g.subtitlesButtonsHolder_do.addChild(g.subtitlesPonter_do), (e = new Image).src = g.youtubeQualityArrowPath_str, g.subtitleQualityArrow_do = new FWDUVPDisplayObject("img"), g.subtitleQualityArrow_do.setScreen(e), g.subtitleQualityArrow_do.setX(7), g.subtitleQualityArrow_do.setWidth(5), g.subtitleQualityArrow_do.setHeight(7), g.subtitlesButtonsHolder_do.addChild(g.subtitleQualityArrow_do);
                for (var o = 0; o < g.totalSubttleButtons; o++) FWDUVPYTBQButton.setPrototype(), (t = new FWDUVPYTBQButton("no source", g.youtubeQualityButtonNormalColor_str, g.youtubeQualityButtonSelectedColor_str, m.hdPath_str, o)).addListener(FWDUVPYTBQButton.MOUSE_OVER, g.sbtQualityOver), t.addListener(FWDUVPYTBQButton.MOUSE_OUT, g.sbtQualityOut), t.addListener(FWDUVPYTBQButton.CLICK, g.sbtQualityClick), g.subtitleButtons_ar[o] = t, g.subtitlesButtonsHolder_do.addChild(t);
                g.hideSubtitleButtons(!1)
            }, g.sbtQualityOver = function (e) {
                g.setSubtitleArrowPosition(e.target)
            }, g.sbtQualityOut = function (e) {
                g.setSubtitleArrowPosition(void 0)
            }, g.sbtQualityClick = function (e) {
                g.startAtSubtitle = e.id, g.disableSubtitleButtons(g.startAtSubtitle), g.hideSubtitleButtons(!0), g.dispatchEvent(s.CHANGE_SUBTITLE, {
                    id: g.subtitlesSource_ar.length - 1 - e.id
                })
            }, g.positionAndResizeSubtitleButtons = function (e) {
                if (e) {
                    var t, o = e.length;
                    if (g.prevSubtitlesQualityButtonsLength != o) {
                        g.prevSubtitlesQualityButtonsLength = o;
                        for (var s = 5, n = 0, i = 0, a = 0; a < o; a++)(t = g.subtitleButtons_ar[a]).updateText(e[a].label), t.setFinalSize();
                        setTimeout(function () {
                            for (var e = 0; e < g.totalSubttleButtons; e++) t = g.subtitleButtons_ar[e], e < o ? (0 != t.x && t.setX(0), t.w > n && (n = t.w), t.setY(s), s += t.h) : -3e3 != t.x && t.setX(-3e3);
                            for (e = 0; e < g.totalSubttleButtons; e++)(t = g.subtitleButtons_ar[e]).dumy_do.w < n && (t.setWidth(n), t.dumy_do.setWidth(n));
                            i = s + 5, g.subtitlesPonter_do.setX(parseInt((n - g.subtitlesPonter_do.w) / 2)), g.subtitlesPonter_do.setY(i), g.subtitlesButtonsBackground_do && (g.subtitlesButtonsBackground_do.setWidth(n), g.subtitlesButtonsBackground_do.setHeight(i)), g.subtitlesButtonsHolder_do.setWidth(n), g.subtitlesButtonsHolder_do.setHeight(i)
                        }, 60)
                    }
                }
            }, g.disableSubtitleButtons = function (e) {
                for (var t = 0; t < g.totalSubttleButtons; t++) btn = g.subtitleButtons_ar[t], t == e ? (FWDAnimation.killTweensOf(g.subtitleQualityArrow_do), g.subtitleQualityArrow_do.setY(btn.y + parseInt((btn.h - g.subtitleQualityArrow_do.h) / 2) + 1), btn.disable(), g.subtitleDisabledButton_do = btn) : btn.enable();
                g.subtitlesSource_ar.length - 1 - e == 0 ? g.subtitleButton_do.setButtonState(0) : g.subtitleButton_do.setButtonState(1)
            }, g.setSubtitleArrowPosition = function (e) {
                var t = 0,
                    t = e ? e.y + parseInt((e.h - g.subtitleQualityArrow_do.h) / 2) : g.subtitleDisabledButton_do.y + parseInt((g.subtitleDisabledButton_do.h - g.subtitleQualityArrow_do.h) / 2);
                FWDAnimation.killTweensOf(g.subtitleQualityArrow_do), FWDAnimation.to(g.subtitleQualityArrow_do, .6, {
                    y: t,
                    delay: .1,
                    ease: Expo.easeInOut
                })
            }, g.showSubtitleButtons = function (e) {
                var t, o;
                g.areSubtitleButtonsShowed_bl || (g.hideQualityButtons(), g.hideMainScrubberTop(), g.areSubtitleButtonsShowed_bl = !0, t = parseInt(g.subtitleButton_do.x + parseInt(g.subtitleButton_do.w - g.subtitlesButtonsHolder_do.w) / 2), o = parseInt(b.tempVidStageHeight - g.sH - g.subtitlesButtonsHolder_do.h - 6), g.hasPointerEvent_bl ? window.addEventListener("pointerdown", g.hideSubtitlesButtonsHandler) : (g.isMbl || window.addEventListener("mousedown", g.hideSubtitlesButtonsHandler), window.addEventListener("touchstart", g.hideSubtitlesButtonsHandler)), g.subtitlesButtonsHolder_do.setX(t), e ? FWDAnimation.to(g.subtitlesButtonsHolder_do, .6, {
                    y: o,
                    ease: Expo.easeInOut
                }) : (FWDAnimation.killTweensOf(g.subtitlesButtonsHolder_do), g.subtitlesButtonsHolder_do.setY(o)))
            }, g.hideSubtitleButtons = function (e) {
                g.areSubtitleButtonsShowed_bl && g.subtitlesButtonsHolder_do && (g.areSubtitleButtonsShowed_bl = !1, e ? FWDAnimation.to(g.subtitlesButtonsHolder_do, .6, {
                    y: b.sH,
                    ease: Expo.easeInOut
                }) : (FWDAnimation.killTweensOf(g.subtitlesButtonsHolder_do), g.subtitlesButtonsHolder_do.setY(b.sH)), g.hasPointerEvent_bl ? window.removeEventListener("pointerdown", g.hideSubtitlesButtonsHandler) : (g.isMbl || window.removeEventListener("mousedown", g.hideSubtitlesButtonsHandler), window.removeEventListener("touchstart", g.hideSubtitlesButtonsHandler)), g.showMainScrubberOnTop())
            }, g.hideSubtitlesButtonsHandler = function (e) {
                var t = FWDUVPUtils.getViewportMouseCoordinates(e);
                FWDUVPUtils.hitTest(g.subtitleButton_do.screen, t.screenX, t.screenY) || FWDUVPUtils.hitTest(g.subtitlesButtonsHolder_do.screen, t.screenX, t.screenY) || g.hideSubtitleButtons(!0)
            }, g.setupYoutubeQualityButton = function () {
                g.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), g.ytbQualityButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-settings'></span>", m.hdIcn, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), g.ytbQualityButton_do = new FWDUVPSimpleButton(g.ytbQualityN_img, m.ytbQualitySPath_str, m.ytbQualityDPath_str, !0, g.useHEX, g.nBC, g.sBC)), g.ytbQualityButton_do.setX(-300), g.ytbQualityButton_do.setY(parseInt((g.sH - g.ytbQualityButton_do.h) / 2));
                var e = setInterval(function () {
                    0 < g.ytbQualityButton_do.buttonHeight && (clearInterval(e), g.ytbQualityButton_do.setY(parseInt((g.sH - g.ytbQualityButton_do.buttonHeight) / 2)))
                }, 50);
                g.ytbQualityButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, g.ytbQualityMouseUpHandler), g.mainHld.addChild(g.ytbQualityButton_do)
            }, g.ytbQualityMouseUpHandler = function () {
                g.areYtbQualityButtonsShowed_bl ? (g.hideQualityButtons(!0), g.isMainScrubberOnTop_bl && (g.mainScrubber_do.setX(0), FWDAnimation.to(g.mainScrubber_do, .6, {
                    alpha: 1
                }))) : g.showQualityButtons(!0)
            }, g.hideQualityButtonsHandler = function (e) {
                var t = FWDUVPUtils.getViewportMouseCoordinates(e);
                FWDUVPUtils.hitTest(g.ytbQualityButton_do.screen, t.screenX, t.screenY) || FWDUVPUtils.hitTest(g.ytbButtonsHolder_do.screen, t.screenX, t.screenY) || (g.hideQualityButtons(!0), g.showMainScrubberOnTop())
            }, g.addYtbQualityButton = function () {
                !g.hasYtbButton_bl && g.showYoutubeQualityButton_bl && (g.hasYtbButton_bl = !0, g.subtitleButton_do && -1 != g.getButtonIndex(g.subtitleButton_do) ? (indexToAdd = g.getButtonIndex(g.subtitleButton_do), g.buttons_ar.splice(indexToAdd, 0, g.ytbQualityButton_do)) : g.playbackRateButton_do && -1 != g.getButtonIndex(g.playbackRateButton_do) ? (indexToAdd = g.getButtonIndex(g.playbackRateButton_do), g.buttons_ar.splice(indexToAdd, 0, g.ytbQualityButton_do)) : g.atbButton_do && -1 != g.getButtonIndex(g.atbButton_do) ? (indexToAdd = g.getButtonIndex(g.atbButton_do), g.buttons_ar.splice(indexToAdd, 0, g.ytbQualityButton_do)) : g.infoButton_do && -1 != g.getButtonIndex(g.infoButton_do) ? (indexToAdd = g.getButtonIndex(g.infoButton_do), g.buttons_ar.splice(indexToAdd, 0, g.ytbQualityButton_do)) : g.downloadButton_do && -1 != g.getButtonIndex(g.downloadButton_do) ? (indexToAdd = g.getButtonIndex(g.ytbQualityButton_do), g.buttons_ar.splice(indexToAdd, 0, g.ytbQualityButton_do)) : g.ccBtn_do && -1 != g.getButtonIndex(g.ccBtn_do) ? (indexToAdd = g.getButtonIndex(g.ccBtn_do), g.buttons_ar.splice(indexToAdd, 0, g.ytbQualityButton_do)) : g.fullScreenButton_do ? (indexToAdd = g.getButtonIndex(g.fullScreenButton_do), g.buttons_ar.splice(indexToAdd, 0, g.ytbQualityButton_do)) : g.buttons_ar.splice(g.buttons_ar.length, 0, g.ytbQualityButton_do), g.ytbQualityButton_do.disable(), g.ytbQualityButton_do.rotation = 0, g.ytbQualityButton_do.setRotation(g.ytbQualityButton_do.rotation), g.ytbQualityButton_do.hideDisabledState(), g.hideQualityButtons(!1), g.positionButtons())
            }, g.removeYtbQualityButton = function () {
                g.hasYtbButton_bl && g.showYoutubeQualityButton_bl && (g.hasYtbButton_bl = !1, g.buttons_ar.splice(FWDUVPUtils.indexOfArray(g.buttons_ar, g.ytbQualityButton_do), 1), g.ytbQualityButton_do.setX(-300), g.ytbQualityButton_do.hideDisabledState(), g.hideQualityButtons(!1), g.positionButtons())
            }, g.updateQuality = function (e, t) {
                g.hasYtbButton_bl && g.showYoutubeQualityButton_bl && (g.positionAndResizeYtbQualityButtons(e), setTimeout(function () {
                    g.disableQualityButtons(t)
                }, 300))
            }, g.setupInfoButton = function () {
                g.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), g.infoButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-info'></span>", void 0, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), g.infoButton_do = new FWDUVPSimpleButton(g.infoN_img, m.infoSPath_str, void 0, !0, g.useHEX, g.nBC, g.sBC));
                var e = setInterval(function () {
                    0 < g.infoButton_do.buttonHeight && (clearInterval(e), g.infoButton_do.setY(parseInt((g.sH - g.infoButton_do.buttonHeight) / 2)))
                }, 50);
                g.infoButton_do.addListener(FWDUVPSimpleButton.SHOW_TOOLTIP, g.infoButtonShowToolTipHandler), g.infoButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, g.infoButtonOnMouseUpHandler), g.infoButton_do.setX(-300), g.infoButton_do.setY(parseInt((g.sH - g.infoButton_do.h) / 2)), g.mainHld.addChild(g.infoButton_do)
            }, g.infoButtonShowToolTipHandler = function (e) {
                g.showToolTip(g.infoButton_do, g.infoButtonToolTip_do, e.e)
            }, g.infoButtonOnMouseUpHandler = function () {
                g.dispatchEvent(s.SHOW_INFO_WINDOW)
            }, g.enableQualtyButton = function () {
                g.ytbQualityButton_do && g.ytbQualityButton_do.enable()
            }, g.disableQualtyButton = function () {
                g.ytbQualityButton_do && g.ytbQualityButton_do.disable()
            }, g.setupDownloadButton = function () {
                g.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), g.downloadButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-download'></span>", void 0, "UVPMainButtonsNormalState dw", "UVPMainButtonsSelectedState dw")) : (FWDUVPSimpleButton.setPrototype(), g.downloadButton_do = new FWDUVPSimpleButton(g.downloadN_img, m.downloadSPath_str, void 0, !0, g.useHEX, g.nBC, g.sBC)), g.downloadButton_do.addListener(FWDUVPSimpleButton.SHOW_TOOLTIP, g.downloadButtonShowToolTipHandler), g.downloadButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, g.downloadButtonOnMouseUpHandler), g.downloadButton_do.setX(-300), g.downloadButton_do.setY(parseInt((g.sH - g.downloadButton_do.h) / 2));
                var e = setInterval(function () {
                    0 < g.downloadButton_do.buttonHeight && (clearInterval(e), g.downloadButton_do.setY(parseInt((g.sH - g.downloadButton_do.buttonHeight) / 2)))
                }, 50);
                g.mainHld.addChild(g.downloadButton_do)
            }, g.downloadButtonShowToolTipHandler = function (e) {
                g.showToolTip(g.downloadButton_do, g.downloadButtonToolTip_do, e.e)
            }, g.downloadButtonOnMouseUpHandler = function () {
                g.dispatchEvent(s.DOWNLOAD_VIDEO)
            }, g.setupThumbnailsPreview = function () {
                !g.thumbnailsPreview_do && window.FWDUVPThumbnailsPreview && (FWDUVPThumbnailsPreview.setPrototype(), g.thumbnailsPreview_do = new FWDUVPThumbnailsPreview(g), g.thumbnailsPreview_do.addListener(FWDUVPData.LOAD_ERROR, function (e) {
                    g.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                        text: e.text
                    })
                }))
            }, g.setupATB = function () {
                FWDUVPATB.setPrototype(), g.atb = new FWDUVPATB(g), g.mainHld.addChild(g.atb), g.atb.addListener(FWDUVPATB.START_TO_SCRUB, g.atbStartToScrub), g.atb.addListener(FWDUVPATB.STOP_TO_SCRUB, g.atbStopToScrub)
            }, g.atbStartToScrub = function () {
                b.showDisable()
            }, g.atbStopToScrub = function () {
                b.hideDisable()
            }, g.setupAtbButton = function () {
                g.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), g.atbButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-AB'></span>", void 0, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), g.atbButton_do = new FWDUVPSimpleButton(m.atbNPath_img, m.atbSPath_str, void 0, !0, g.useHEX, g.nBC, g.sBC)), g.atbButton_do.setX(-5e3), g.atbButton_do.setY(parseInt((g.sH - g.atbButton_do.h) / 2));
                var e = setInterval(function () {
                    0 < g.atbButton_do.buttonHeight && (clearInterval(e), g.atbButton_do.setY(parseInt((g.sH - g.atbButton_do.buttonHeight) / 2)))
                }, 50);
                g.atbButton_do.addListener(FWDUVPSimpleButton.SHOW_TOOLTIP, g.atbButtonShowTooltipHandler), g.atbButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, g.atbButtonMouseUpHandler), g.mainHld.addChild(g.atbButton_do)
            }, g.atbButtonShowTooltipHandler = function (e) {
                g.showToolTip(g.atbButton_do, g.atbButtonToolTip_do, e.e)
            }, g.atbButtonMouseUpHandler = function () {
                g.atbButton_do.isSelected ? (g.atbButton_do.doNotallowToSetNormal = !1, g.atbButton_do.isSelected = !1, g.atb.hide(!0)) : (g.atbButton_do.isSelected = !0, g.atbButton_do.doNotallowToSetNormal = !0, g.atbButton_do.setSelectedState(), g.atb.show(!0))
            }, g.disableAtbButton = function () {
                g.atbButton_do && g.atbButton_do.disable()
            }, g.enableAtbButton = function () {
                g.atbButton_do && g.atbButton_do.enable()
            }, g.setupShareButton = function () {
                g.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), g.shareButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-share'></span>", void 0, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), g.shareButton_do = new FWDUVPSimpleButton(m.shareN_img, m.shareSPath_str, void 0, !0, g.useHEX, g.nBC, g.sBC)), g.buttons_ar.push(g.shareButton_do), g.shareButton_do.setY(parseInt((g.sH - g.shareButton_do.h) / 2));
                var e = setInterval(function () {
                    0 < g.shareButton_do.buttonHeight && (clearInterval(e), g.shareButton_do.setY(parseInt((g.sH - g.shareButton_do.buttonHeight) / 2)))
                }, 50);
                g.shareButton_do.addListener(FWDUVPSimpleButton.SHOW_TOOLTIP, g.facebookButtonShowTooltipHandler), g.shareButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, g.facebookButtonMouseUpHandler), g.mainHld.addChild(g.shareButton_do)
            }, g.facebookButtonShowTooltipHandler = function (e) {
                g.showToolTip(g.shareButton_do, g.facebookButtonToolTip_do, e.e)
            }, g.facebookButtonMouseUpHandler = function () {
                g.dispatchEvent(s.SHOW_SHARE_WINDOW)
            }, g.setupChromecastButton = function () {
                g.useVectorIcons_bl ? (FWDUVPComplexButton.setPrototype(), g.ccBtn_do = new FWDUVPComplexButton(void 0, void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-cast'></span>", "<span class='fwdicon fwdicon-uncast'></span>", "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPComplexButton.setPrototype(), g.ccBtn_do = new FWDUVPComplexButton(m.castN_img, m.castSPath_str, m.uncastN_img, m.uncastSPath_str, !0, g.useHEX, g.nBC, g.sBC));
                var e = setInterval(function () {
                    0 < g.ccBtn_do.buttonHeight && (clearInterval(e), g.ccBtn_do.setY(parseInt((g.sH - g.ccBtn_do.buttonHeight) / 2)))
                }, 50);
                g.ccBtn_do.setY(parseInt((g.sH - g.ccBtn_do.buttonHeight) / 2)), g.ccBtn_do.addListener(FWDUVPComplexButton.MOUSE_UP, g.chormecastMouseUpHandler), g.ccBtn_do.addListener(FWDUVPSimpleButton.SHOW_TOOLTIP, g.castTooltipHandler), g.ccBtn_do.setX(-500), g.mainHld.addChild(g.ccBtn_do)
            }, g.castTooltipHandler = function (e) {
                g.showToolTip(g.ccBtn_do, g.castButtonToolTip_do, e.e)
            }, g.chormecastMouseUpHandler = function () {
                0 == g.ccBtn_do.currentState ? g.dispatchEvent(s.UNCAST) : g.dispatchEvent(s.CAST)
            }, g.removeCCButton = function () {
                g.ccBtn_do && -1 != FWDUVPUtils.indexOfArray(g.buttons_ar, g.ccBtn_do) && (g.buttons_ar.splice(FWDUVPUtils.indexOfArray(g.buttons_ar, g.ccBtn_do), 1), g.ccBtn_do.setX(-300), g.positionButtons())
            }, g.addCCButton = function () {
                g.ccBtn_do && -1 == FWDUVPUtils.indexOfArray(g.buttons_ar, g.ccBtn_do) && (g.fullScreenButton_do && -1 != FWDUVPUtils.indexOfArray(g.buttons_ar, g.fullScreenButton_do) ? g.buttons_ar.splice(FWDUVPUtils.indexOfArray(g.buttons_ar, g.fullScreenButton_do), 0, g.ccBtn_do) : g.buttons_ar.splice(g.buttons_ar.length, 0, g.ccBtn_do), g.positionButtons())
            }, g.setupFullscreenButton = function () {
                g.useVectorIcons_bl ? (FWDUVPComplexButton.setPrototype(), g.fullScreenButton_do = new FWDUVPComplexButton(void 0, void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-fullscreen'></span>", "<span class='fwdicon fwdicon-normalscreen'></span>", "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPComplexButton.setPrototype(), g.fullScreenButton_do = new FWDUVPComplexButton(g.fullScreenN_img, m.fullScreenSPath_str, g.normalScreenN_img, m.normalScreenSPath_str, !0, g.useHEX, g.nBC, g.sBC)), g.buttons_ar.push(g.fullScreenButton_do), g.fullScreenButton_do.setY(parseInt((g.sH - g.fullScreenButton_do.buttonHeight) / 2));
                var e = setInterval(function () {
                    0 < g.fullScreenButton_do.buttonHeight && (clearInterval(e), g.fullScreenButton_do.setY(parseInt((g.sH - g.fullScreenButton_do.buttonHeight) / 2)))
                }, 50);
                g.fullScreenButton_do.addListener(FWDUVPComplexButton.SHOW_TOOLTIP, g.fullscreenButtonShowToolTipHandler), g.fullScreenButton_do.addListener(FWDUVPComplexButton.MOUSE_UP, g.fullScreenButtonMouseUpHandler), g.mainHld.addChild(g.fullScreenButton_do)
            }, g.fullscreenButtonShowToolTipHandler = function (e) {
                g.showToolTip(g.fullScreenButton_do, g.fullscreenButtonToolTip_do, e.e)
            }, g.showFullScreenButton = function () {
                g.fullScreenButton_do && g.fullScreenButton_do.setButtonState(1)
            }, g.showNormalScreenButton = function () {
                g.fullScreenButton_do && g.fullScreenButton_do.setButtonState(0)
            }, g.setNormalStateToFullScreenButton = function () {
                g.fullScreenButton_do && (g.fullScreenButton_do.setNormalState(!0), g.hideQualityButtons(!1))
            }, g.fullScreenButtonMouseUpHandler = function () {
                g.fullscreenButtonToolTip_do && g.fullscreenButtonToolTip_do.hide(), 1 == g.fullScreenButton_do.currentState ? g.dispatchEvent(s.FULL_SCREEN) : g.dispatchEvent(s.NORMAL_SCREEN)
            }, g.setupTime = function () {
                g.time_do = new FWDUVPDisplayObject("div"), g.time_do.screen.className = "fwduvp-time", g.time_do.hasTransform3d_bl = !1, g.time_do.hasTransform2d_bl = !1, g.time_do.setBackfaceVisibility(), g.time_do.getStyle().fontFamily = "Arial", g.time_do.getStyle().fontSize = "12px", g.time_do.getStyle().whiteSpace = "nowrap", g.time_do.getStyle().textAlign = "center", g.time_do.getStyle().color = g.timeColor_str, g.time_do.getStyle().fontSmoothing = "antialiased", g.time_do.getStyle().webkitFontSmoothing = "antialiased", g.time_do.getStyle().textRendering = "optimizeLegibility", g.mainHld.addChild(g.time_do), g.updateTime("00:00/00:00"), g.buttons_ar.push(g.time_do)
            }, g.updateTime = function (e) {
                g.time_do && (g.isLive && (e = e.substr(0, e.indexOf("/"))), g.time_do.setInnerHTML(e), g.lastTimeLength != e.length && (g.time_do.w = g.time_do.getWidth(), g.positionButtons(), setTimeout(function () {
                    g.time_do.w = g.time_do.getWidth(), g.time_do.h = g.time_do.getHeight(), g.time_do.setY(parseInt((g.sH - g.time_do.h) / 2) + 1 + g.timeOffsetTop), g.positionButtons()
                }, 50), g.lastTimeLength = e.length))
            }, g.setupRewindButton = function () {
                g.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), g.rewindButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-10'></span>", void 0, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), g.rewindButton_do = new FWDUVPSimpleButton(m.rewindN_img, m.rewindSPath_str, void 0, !0, g.useHEX, g.nBC, g.sBC)), g.buttons_ar.push(g.rewindButton_do), g.rewindButton_do.setY(parseInt((g.sH - g.rewindButton_do.h) / 2));
                var e = setInterval(function () {
                    0 < g.rewindButton_do.buttonHeight && (clearInterval(e), g.rewindButton_do.setY(parseInt((g.sH - g.rewindButton_do.buttonHeight) / 2)))
                }, 50);
                g.rewindButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, g.rewindButtonMouseUpHandler), g.mainHld.addChild(g.rewindButton_do)
            }, g.rewindButtonMouseUpHandler = function () {
                g.dispatchEvent(s.REWIND)
            }, g.disableRewindButton = function () {
                g.rewindButton_do && g.rewindButton_do.disable()
            }, g.enableRewindButton = function () {
                g.rewindButton_do && g.rewindButton_do.enable()
            }, g.setupVolumeButton = function () {
                g.useVectorIcons_bl ? (FWDUVPVolumeButton.setPrototype(), g.volBtn = new FWDUVPVolumeButton(void 0, void 0, void 0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-sound'></span>", "<span class='fwdicon fwdicon-sound-off'></span>", "UVPMainButtonsNormalState volume", "UVPMainButtonsSelectedState volume")) : (FWDUVPVolumeButton.setPrototype(), g.volBtn = new FWDUVPVolumeButton(g.volumeN_img, m.volumeSPath_str, m.volumeDPath_str, g.useHEX, g.nBC, g.sBC)), g.volBtn.addListener(FWDUVPVolumeButton.SHOW_TOOLTIP, g.volumeButtonShowTooltipHandler), g.volBtn.addListener(FWDUVPVolumeButton.MOUSE_OVER, g.volumeOnMouseOverHandler), g.volBtn.addListener(FWDUVPVolumeButton.MOUSE_UP, g.volumeOnMouseUpHandler), g.volBtn.setY(parseInt((g.sH - g.volBtn.h) / 2));
                var e = setInterval(function () {
                    0 < g.volBtn.buttonHeight && (clearInterval(e), g.volBtn.setY(parseInt((g.sH - g.volBtn.buttonHeight) / 2)))
                }, 50);
                g.buttons_ar.push(g.volBtn), g.mainHld.addChild(g.volBtn), 0 == g.volume && g.volBtn.setDisabledState()
            }, g.volumeButtonShowTooltipHandler = function (e) {}, g.hideMainScrubberTop = function () {
                g.isMainScrubberOnTop_bl && FWDAnimation.to(g.mainScrubber_do, .4, {
                    alpha: 0,
                    onComplete: function () {
                        g.mainScrubber_do.setX(-5e3)
                    }
                })
            }, g.showMainScrubberOnTop = function () {
                g.isMainScrubberOnTop_bl && (g.mainScrubber_do.setX(0), FWDAnimation.to(g.mainScrubber_do, .6, {
                    alpha: 1
                }))
            }, g.volumeOnMouseOverHandler = function () {
                g.showVolumeScrubber(!0), g.hideQualityButtons(!0), g.hideSubtitleButtons(!0), g.hidePlaybackRateButtons(!0), g.hideMainScrubberTop()
            }, g.volumeOnMouseUpHandler = function () {
                var e = g.lastVolume;
                g.isMbl ? g.isVolumeScrubberShowed_bl || g.volumeOnMouseOverHandler() : (g.muted ? (e = g.lastVolume, g.muted = !1) : (e = 1e-6, g.muted = !0), g.updateVolume(e))
            }, g.setupVolumeScrubber = function () {
                var e;
                g.volumeScrubberHolder_do = new FWDUVPDisplayObject("div"), g.repeatBackground_bl ? (g.volumeBk_do = new FWDUVPDisplayObject("div"), g.volumeBk_do.getStyle().background = "url('" + g.controllerBkPath_str + "')") : (g.volumeBk_do = new FWDUVPDisplayObject("img"), (e = new Image).src = g.controllerBkPath_str, g.volumeBk_do.setScreen(e)), g.volumeScrubberHolder_do.addChild(g.volumeBk_do), g.volumeScrubber_do = new FWDUVPDisplayObject("div"), g.volumeScrubber_do.setHeight(g.mainScrbH), g.volumeScrubber_do.setY(parseInt(g.volumeScrubberOfsetHeight / 2));
                var t = new Image;
                t.src = m.volumeScrubberBkBottomPath_str, g.volumeScrubberBkBottom_do = new FWDUVPDisplayObject("img"), g.volumeScrubberBkBottom_do.setScreen(t), g.volumeScrubberBkBottom_do.setWidth(g.mainScrubberBkLeft_img.height), g.volumeScrubberBkBottom_do.setHeight(g.mainScrubberBkLeft_img.width), g.volumeScrubberBkBottom_do.setY(g.volumeScrubberHeight - g.volumeScrubberOfsetHeight - g.volumeScrubberBkBottom_do.h);
                var o = new Image;
                o.src = m.volumeScrubberBkTopPath_str, g.volumeScrubberBkTop_do = new FWDUVPDisplayObject("img"), g.volumeScrubberBkTop_do.setScreen(o), g.volumeScrubberBkTop_do.setWidth(g.volumeScrubberBkBottom_do.w), g.volumeScrubberBkTop_do.setHeight(g.volumeScrubberBkBottom_do.h);
                var s = new Image;
                s.src = m.volumeScrubberBkMiddlePath_str, g.isMbl ? (g.volumeScrubberBkMiddle_do = new FWDUVPDisplayObject("div"), g.volumeScrubberBkMiddle_do.getStyle().background = "url('" + g.volumeScrubberBkMiddlePath_str + "') repeat-y") : (g.volumeScrubberBkMiddle_do = new FWDUVPDisplayObject("img"), g.volumeScrubberBkMiddle_do.setScreen(s)), g.volumeScrubberBkMiddle_do.setWidth(g.volumeScrubberBkBottom_do.w), g.volumeScrubberBkMiddle_do.setHeight(g.volumeScrubberHeight - g.volumeScrubberOfsetHeight - 2 * g.volumeScrubberBkTop_do.h), g.volumeScrubberBkMiddle_do.setY(g.volumeScrubberBkTop_do.h), g.volumeScrubberDrag_do = new FWDUVPDisplayObject("div"), g.volumeScrubberDrag_do.setWidth(g.volumeScrubberBkBottom_do.w), g.useHEX ? (g.volumeScrubberDragBottom_do = new FWDUVPDisplayObject("div"), g.volumeScrubberDragBottom_do.setWidth(g.volumeScrubberDragBottom_img.width), g.volumeScrubberDragBottom_do.setHeight(g.volumeScrubberDragBottom_img.height), g.volumeScrubberDragBottom_canvas = FWDUVPUtils.getCanvasWithModifiedColor(g.volumeScrubberDragBottom_img, g.nBC).canvas, g.volumeScrubberDragBottom_do.screen.appendChild(g.volumeScrubberDragBottom_canvas)) : (g.volumeScrubberDragBottom_do = new FWDUVPDisplayObject("img"), g.volumeScrubberDragBottom_do.setScreen(g.volumeScrubberDragBottom_img)), g.volumeScrubberDragBottom_do.setWidth(g.mainScrubberDragLeft_img.height), g.volumeScrubberDragBottom_do.setHeight(g.mainScrubberDragLeft_img.width), g.volumeScrubberDragBottom_do.setY(g.volumeScrubberHeight - g.volumeScrubberOfsetHeight - g.volumeScrubberDragBottom_do.h), g.middleImage = new Image, g.middleImage.src = g.volumeScrubberDragMiddlePath_str, g.useHEX ? (g.volumeScrubberDragMiddle_do = new FWDUVPDisplayObject("div"), g.middleImage.onload = function () {
                    g.volumeScrubberDragMiddle_canvas = FWDUVPUtils.getCanvasWithModifiedColor(g.middleImage, g.nBC, !0), g.volumeScrubberDragImage_img = g.volumeScrubberDragMiddle_canvas.image, g.volumeScrubberDragMiddle_do.getStyle().background = "url('" + g.volumeScrubberDragImage_img.src + "') repeat-y"
                }) : (g.volumeScrubberDragMiddle_do = new FWDUVPDisplayObject("img"), g.volumeScrubberDragMiddle_do.setScreen(g.middleImage)), g.volumeScrubberDragMiddle_do.setWidth(g.volumeScrubberDragBottom_do.w), g.volumeScrubberDragMiddle_do.setHeight(g.volumeScrubberHeight);
                var n = new Image;
                n.src = m.volumeScrubberLinePath_str, g.volumeScrubberBarLine_do = new FWDUVPDisplayObject("img"), g.volumeScrubberBarLine_do.setScreen(n), g.volumeScrubberBarLine_do.setWidth(g.mainScrubberLine_img.height), g.volumeScrubberBarLine_do.setHeight(g.mainScrubberLine_img.width), g.volumeScrubberBarLine_do.setAlpha(0), g.volumeScrubberBarLine_do.hasTransform3d_bl = !1, g.volumeScrubberBarLine_do.hasTransform2d_bl = !1, g.volumeScrubberHolder_do.setWidth(g.volScrbW), g.volumeScrubberHolder_do.setHeight(g.volumeScrubberHeight + g.sH), g.volumeBk_do.setWidth(g.volScrbW), g.volumeBk_do.setHeight(g.volumeScrubberHeight + g.sH), g.volumeScrubber_do.setWidth(g.volScrbW), g.volumeScrubber_do.setHeight(g.volumeScrubberHeight - g.volumeScrubberOfsetHeight), g.volumeScrubber_do.addChild(g.volumeScrubberBkBottom_do), g.volumeScrubber_do.addChild(g.volumeScrubberBkMiddle_do), g.volumeScrubber_do.addChild(g.volumeScrubberBkTop_do), g.volumeScrubber_do.addChild(g.volumeScrubberBarLine_do), g.volumeScrubber_do.addChild(g.volumeScrubberDragBottom_do), g.volumeScrubberDrag_do.addChild(g.volumeScrubberDragMiddle_do), g.volumeScrubber_do.addChild(g.volumeScrubberDrag_do), g.volumeScrubber_do.addChild(g.volumeScrubberBarLine_do), g.volumeScrubberHolder_do.addChild(g.volumeScrubber_do), g.addChild(g.volumeScrubberHolder_do), g.isMbl ? g.hasPointerEvent_bl ? (g.volumeScrubber_do.screen.addEventListener("pointerover", g.volumeScrubberOnOverHandler), g.volumeScrubber_do.screen.addEventListener("pointerout", g.volumeScrubberOnOutHandler), g.volumeScrubber_do.screen.addEventListener("pointerdown", g.volumeScrubberOnDownHandler)) : g.volumeScrubber_do.screen.addEventListener("touchstart", g.volumeScrubberOnDownHandler) : g.screen.addEventListener && (g.volumeScrubber_do.screen.addEventListener("mouseover", g.volumeScrubberOnOverHandler), g.volumeScrubber_do.screen.addEventListener("mouseout", g.volumeScrubberOnOutHandler), g.volumeScrubber_do.screen.addEventListener("mousedown", g.volumeScrubberOnDownHandler)), g.enableVolumeScrubber(), g.updateVolumeScrubber(g.volume)
            }, g.volumeScrubberOnOverHandler = function (e) {
                g.isVolumeScrubberDisabled_bl
            }, g.volumeScrubberOnOutHandler = function (e) {
                g.isVolumeScrubberDisabled_bl
            }, g.volumeScrubberOnDownHandler = function (e) {
                var t, o;
                g.isVolumeScrubberDisabled_bl || 2 == e.button || (e.preventDefault && e.preventDefault(), g.volumeScrubberIsDragging_bl = !0, t = FWDUVPUtils.getViewportMouseCoordinates(e).screenY - g.volumeScrubber_do.getGlobalY(), b.showDisable(), t < 0 ? t = 0 : t > g.volumeScrubber_do.h - g.scrubbersOffsetWidth && (t = g.volumeScrubber_do.h - g.scrubbersOffsetWidth), o = 1 - t / g.volumeScrubber_do.h, g.lastVolume = o, g.updateVolume(o), g.isMbl ? g.hasPointerEvent_bl ? (window.addEventListener("MSPointerMove", g.volumeScrubberMoveHandler), window.addEventListener("pointerup", g.volumeScrubberEndHandler)) : (window.addEventListener("touchmove", g.volumeScrubberMoveHandler), window.addEventListener("touchend", g.volumeScrubberEndHandler)) : window.addEventListener ? (window.addEventListener("mousemove", g.volumeScrubberMoveHandler), window.addEventListener("mouseup", g.volumeScrubberEndHandler)) : document.attachEvent && (document.attachEvent("onmousemove", g.volumeScrubberMoveHandler), document.attachEvent("onmouseup", g.volumeScrubberEndHandler)))
            }, g.volumeScrubberMoveHandler = function (e) {
                var t, o;
                g.isVolumeScrubberDisabled_bl || (e.preventDefault && e.preventDefault(), (t = FWDUVPUtils.getViewportMouseCoordinates(e).screenY - g.volumeScrubber_do.getGlobalY()) < g.scrubbersOffsetWidth ? t = g.scrubbersOffsetWidth : t > g.volumeScrubber_do.h && (t = g.volumeScrubber_do.h), o = 1 - t / g.volumeScrubber_do.h, g.lastVolume = o, g.updateVolume(o))
            }, g.volumeScrubberEndHandler = function () {
                b.hideDisable(), g.volumeScrubberIsDragging_bl = !1, g.isMbl ? g.hasPointerEvent_bl ? (window.removeEventListener("MSPointerMove", g.volumeScrubberMoveHandler), window.removeEventListener("pointerup", g.volumeScrubberEndHandler)) : (window.removeEventListener("touchmove", g.volumeScrubberMoveHandler), window.removeEventListener("touchend", g.volumeScrubberEndHandler)) : window.removeEventListener ? (window.removeEventListener("mousemove", g.volumeScrubberMoveHandler), window.removeEventListener("mouseup", g.volumeScrubberEndHandler)) : document.detachEvent && (document.detachEvent("onmousemove", g.volumeScrubberMoveHandler), document.detachEvent("onmouseup", g.volumeScrubberEndHandler))
            }, g.disableVolumeScrubber = function () {
                g.isVolumeScrubberDisabled_bl = !0, g.volumeScrubber_do.setButtonMode(!1), g.volumeScrubberEndHandler()
            }, g.enableVolumeScrubber = function () {
                g.isVolumeScrubberDisabled_bl = !1, g.volumeScrubber_do.setButtonMode(!0)
            }, g.updateVolumeScrubber = function (e) {
                var t = g.volumeScrubberHeight - g.volumeScrubberOfsetHeight,
                    o = Math.round(e * t);
                g.volumeScrubberDrag_do.setHeight(Math.max(0, o - g.volumeScrubberDragBottom_do.h)), g.volumeScrubberDrag_do.setY(t - o), o < 1 && g.isVolumeScrubberLineVisible_bl ? (g.isVolumeScrubberLineVisible_bl = !1, FWDAnimation.to(g.volumeScrubberBarLine_do, .5, {
                    alpha: 0
                }), FWDAnimation.to(g.volumeScrubberDragBottom_do, .5, {
                    alpha: 0
                })) : 1 < o && !g.isVolumeScrubberLineVisible_bl && (g.isVolumeScrubberLineVisible_bl = !0, FWDAnimation.to(g.volumeScrubberBarLine_do, .5, {
                    alpha: 1
                }), FWDAnimation.to(g.volumeScrubberDragBottom_do, .5, {
                    alpha: 1
                })), t < o && (o = t), FWDAnimation.to(g.volumeScrubberBarLine_do, .8, {
                    y: t - o - 2,
                    ease: Expo.easeOut
                })
            }, g.updateVolume = function (e, t) {
                g.showVolumeScrubber_bl && (g.volume = e, g.volume <= 1e-6 ? (g.muted = !0, g.volume = 0) : (1 <= g.voume ? (g.muted = !1, g.volume = 1) : g.muted = !1, b.removeAPT()), 0 == g.volume ? g.volBtn && g.volBtn.setDisabledState() : g.volBtn && g.volBtn.setEnabledState(), g.volumeScrubberBarLine_do && g.updateVolumeScrubber(g.volume), t || g.dispatchEvent(s.CHANGE_VOLUME, {
                    percent: g.volume
                }))
            }, g.showVolumeScrubber = function (e) {
                var t;
                g.isVolumeScrubberShowed_bl || (g.isVolumeScrubberShowed_bl = !0, t = -g.volumeScrubberHolder_do.h + g.h, g.volumeScrubberHolder_do.setVisible(!0), g.isMbl ? setTimeout(function () {
                    window.addEventListener("touchstart", g.hideVolumeSchubberOnMoveHandler)
                }, 50) : window.addEventListener("mousemove", g.hideVolumeSchubberOnMoveHandler), g.volumeScrubberHolder_do.setX(parseInt(g.volBtn.x + (g.volBtn.w - g.volumeScrubberHolder_do.w) / 2)), e ? FWDAnimation.to(g.volumeScrubberHolder_do, .6, {
                    y: t,
                    ease: Expo.easeInOut
                }) : (FWDAnimation.killTweensOf(g.volumeScrubberHolder_do), g.volumeScrubberHolder_do.setY(t)))
            }, g.hideVolumeSchubberOnMoveHandler = function (e) {
                var t = FWDUVPUtils.getViewportMouseCoordinates(e);
                (FWDUVPUtils.hitTest(g.volumeScrubberHolder_do.screen, t.screenX, t.screenY) || FWDUVPUtils.hitTest(g.volBtn.screen, t.screenX, t.screenY)) && !g.isMbl || FWDUVPUtils.hitTest(g.volumeScrubber_do.screen, t.screenX, t.screenY) && g.isMbl || g.volumeScrubberIsDragging_bl || (g.hideVolumeScrubber(!0), g.isMainScrubberOnTop_bl && (g.mainScrubber_do.setX(0), FWDAnimation.to(g.mainScrubber_do, .6, {
                    alpha: 1
                })))
            }, g.hideVolumeScrubber = function (e) {
                g.isVolumeScrubberShowed_bl && (g.isVolumeScrubberShowed_bl = !1, g.volBtn.setNormalState(!0), e ? FWDAnimation.to(g.volumeScrubberHolder_do, .6, {
                    y: b.sH,
                    ease: Expo.easeInOut,
                    onComplete: function () {
                        g.volumeScrubberHolder_do.setVisible(!1)
                    }
                }) : (FWDAnimation.killTweensOf(g.ytbButtonsHolder_do), g.volumeScrubberHolder_do.setY(b.sH), g.volumeScrubberHolder_do.setVisible(!1)), g.isMbl ? window.removeEventListener("touchstart", g.hideVolumeSchubberOnMoveHandler) : window.removeEventListener("mousemove", g.hideVolumeSchubberOnMoveHandler))
            }, g.show = function (e) {
                g.isShowed_bl || (g.isShowed_bl = !0, g.setX(0), e ? FWDAnimation.to(g.mainHld, .8, {
                    y: 0,
                    ease: Expo.easeInOut
                }) : (FWDAnimation.killTweensOf(g.mainHld), g.mainHld.setY(0)), g.disableCtrl_to = setTimeout(function () {
                    g.positionButtons(), g.getStyle().pointerEvents = "auto"
                }, 200))
            }, g.hide = function (e, t) {
                g.isShowed_bl && (t = t || 0, g.atb && g.atb.isShowed_bl && (t += g.h + 1), g.isMainScrubberOnTop_bl && g.atb && g.atb.isShowed_bl && (t += g.mainScrubberOffestTop), m.showScrubberWhenControllerIsHidden_bl || (t += g.mainScrubber_do.h - 14), g.isShowed_bl = !1, clearTimeout(g.disableCtrl_to), g.getStyle().pointerEvents = "none", e ? FWDAnimation.to(g.mainHld, .8, {
                    y: g.sH + t,
                    ease: Expo.easeInOut,
                    onComplete: function () {}
                }) : (FWDAnimation.killTweensOf(g.mainHld), g.mainHld.setY(g.sH + t)), g.hideQualityButtons(!0), g.hideSubtitleButtons(!0), g.hidePlaybackRateButtons(!0))
            }, g.mainScrubberDragMiddleAddPath_str = m.mainScrubberDragMiddleAddPath_str, g.updateHexColorForScrubber = function (e) {
                var t;
                e ? (g.mainScrubberDragMiddle_do.getStyle().background = "url('" + g.mainScrubberDragMiddleAddPath_str + "') repeat-x", g.mainScrubberDragLeft_do.screen.src = m.mainScrubberDragLeftAddPath_str) : g.useHEX && g.mainSCrubberMiddleCanvas ? (t = FWDUVPUtils.changeCanvasHEXColor(g.mainScrubberMiddleImage, g.mainSCrubberMiddleCanvas, g.nBC, !0), g.mainScrubberDragMiddle_do.getStyle().background = "url('" + t.src + "') repeat-x") : (g.mainScrubberDragMiddle_do.getStyle().background = "url('" + g.mainScrubberDragMiddlePath_str + "') repeat-x", g.mainScrubberDragLeft_do.screen.src = g.mainScrubberDragLeftSource)
            }, g.updateHEXColors = function (e, t) {
                g.nBC = e, g.sBC = t
            }, g.init()
        };
        s.setPrototype = function () {
            s.prototype = new FWDUVPDisplayObject("div")
        }, s.UNCAST = "uncast", s.CAST = "cast", s.SHOW_SHARE_WINDOW = "showShareWindow", s.SHOW_SUBTITLE = "showSubtitle", s.HIDE_SUBTITLE = "hideSubtitle", s.SHOW_PLAYLIST = "showPlaylist", s.HIDE_PLAYLIST = "hidePlaylist", s.SHOW_CATEGORIES = "showCategories", s.DOWNLOAD_VIDEO = "downloadVideo", s.UNCAST = "uncast", s.REWIND = "rewind", s.FULL_SCREEN = "fullScreen", s.NORMAL_SCREEN = "normalScreen", s.PLAY = "play", s.PAUSE = "pause", s.START_TO_SCRUB = "startToScrub", s.SCRUB = "scrub", s.STOP_TO_SCRUB = "stopToScrub", s.CHANGE_VOLUME = "changeVolume", s.CHANGE_YOUTUBE_QUALITY = "changeYoutubeQuality", s.SHOW_EMBED_WINDOW = "showEmbedWindow", s.SHOW_INFO_WINDOW = "showInfoWindow", s.CHANGE_SUBTITLE = "changeSubtitle", s.CHANGE_PLAYBACK_RATES = "changePlaybackRate", s.prototype = null, window.FWDUVPController = s
    }(),
    function (window) {
        var FWDUVPData = function (props, playListElement, prt) {
            var _s = this,
                prototype = FWDUVPData.prototype;
            _s.props = props, _s.skinPaths_ar = [], _s.images_ar = [], _s.cats_ar = [], _s.catsRef_ar = [], _s.controllerHeight = 0, _s.countLoadedSkinImages = 0, _s.volume = 1, _s.controllerHideDelay = 0, _s.startSpaceBetweenButtons = 0, _s.spaceBetweenButtons = 0, _s.scrubbersOffsetWidth = 0, _s.volumeScrubberOffsetTopWidth = 0, _s.timeOffsetLeftWidth = 0, _s.timeOffsetTop = 0, _s.logoMargins = 0, _s.startAtPlaylist = 0, _s.startAtVideo = 0, _s.playlistBottomHeight = 0, _s.maxPlaylistItems = 0, _s.totalPlaylists = 0, _s.thumbnailMaxWidth = 0, _s.buttonsMargins = 0, _s.nextAndPrevSetButtonsMargins = 0, _s.thumbnailMaxHeight = 0, _s.horizontalSpaceBetweenThumbnails = 0, _s.verticalSpaceBetweenThumbnails = 0, _s.buttonsToolTipHideDelay = 0, _s.thumbnailWidth = 0, _s.thumbnailHeight = 0, _s.timeOffsetTop = 0, _s.embedWindowCloseButtonMargins = 0, _s.plsCache_ar = [], _s.loadImageId_to, _s.dispatchLoadSkinCompleteWithDelayId_to, _s.dispatchPlaylistLoadCompleteWidthDelayId_to, _s.JSONPRequestTimeoutId_to, _s.isMbl = FWDUVPUtils.isMobile, _s.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, _s.init = function () {
                _s.parseProperties()
            }, _s.parseProperties = function () {
                if (_s.useHEX = _s.props.useHEXColorsForSkin, _s.useHEX = "yes" == _s.useHEX, -1 != location.protocol.indexOf("file:") && (_s.useHEX = !1), _s.categoriesId_str = _s.props.playlistsId, _s.categoriesId_str)
                    if (_s.mainFolderPath_str = _s.props.mainFolderPath, _s.mainFolderPath_str)
                        if (_s.mainFolderPath_str.lastIndexOf("/") + 1 != _s.mainFolderPath_str.length && (_s.mainFolderPath_str += "/"), _s.sknPth = _s.props.skinPath, _s.sknPth)
                            if (_s.sknPth.lastIndexOf("/") + 1 != _s.sknPth.length && (_s.sknPth += "/"), _s.sknPth = _s.mainFolderPath_str + _s.sknPth, _s.flashPath_str = _s.mainFolderPath_str + "flashlsChromeless.swf", _s.flashCopyToCBPath_str = _s.mainFolderPath_str + "cb.swf", _s.proxyPath_str = _s.mainFolderPath_str + "proxy.php", _s.proxyFolderPath_str = _s.mainFolderPath_str + "proxyFolder.php", _s.mailPath_str = _s.mainFolderPath_str + "sendMail.php", _s.sendToAFriendPath_str = _s.mainFolderPath_str + "sendMailToAFriend.php", _s.videoDownloaderPath_str = _s.mainFolderPath_str + "downloader.php", _s.handPath_str = _s.sknPth + "hand.cur", _s.grabPath_str = _s.sknPth + "grab.cur", -1 != _s.sknPth.indexOf("white") && (_s.isWhite = !0), _s.categories_el = document.getElementById(_s.categoriesId_str), _s.categories_el) {
                                var e = FWDUVPUtils.getChildren(_s.categories_el);
                                if (_s.totalCats = e.length, 0 != _s.totalCats) {
                                    for (var t = 0; t < _s.totalCats; t++) {
                                        var o = {},
                                            s = null;
                                        if (child = e[t], !FWDUVPUtils.hasAttribute(child, "data-source")) return void setTimeout(function () {
                                            null != _s && _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                                                text: "Attribute <font color='#ff0000'>data-source</font> is required in the plalists html element at position <font color='#ff0000'>" + (t + 1)
                                            })
                                        }, 50);
                                        if (!FWDUVPUtils.hasAttribute(child, "data-thumbnail-path")) return void setTimeout(function () {
                                            null != _s && _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                                                text: "Attribute <font color='#ff0000'>data-thumbnail-path</font> is required in the playlists html element at position <font color='#ff0000'>" + (t + 1)
                                            })
                                        }, 50);
                                        o.source = FWDUVPUtils.getAttributeValue(child, "data-source"), s = -1 == o.source.indexOf("=") && -1 == o.source.indexOf(".xml") && -1 == o.source.indexOf("vimeo.com") && -1 == o.source.indexOf("youtube.") ? document.getElementById(o.source) : o.source, _s.catsRef_ar.push(s), o.thumbnailPath = FWDUVPUtils.getAttributeValue(child, "data-thumbnail-path"), o.htmlContent = child.innerHTML, o.htmlText_str = child.innerText, o.vimeoUserId = FWDUVPUtils.getAttributeValue(child, "data-user-id"), o.clientId = FWDUVPUtils.getAttributeValue(child, "data-client-id"), o.vimeoSecret = FWDUVPUtils.getAttributeValue(child, "data-vimeo-secret"), o.vimeoToken = FWDUVPUtils.getAttributeValue(child, "data-vimeo-token"), FWDUVPUtils.hasAttribute(child, "data-playlist-name") ? o.playlistName = FWDUVPUtils.getAttributeValue(child, "data-playlist-name") : o.playlistName = "not defined!", o.pass = FWDUVPUtils.getAttributeValue(child, "data-password"), _s.cats_ar[t] = o
                                    }
                                    for (t = 0; t < _s.totalCats; t++) {
                                        o = {}, s = null;
                                        child = e[t], s = document.getElementById(FWDUVPUtils.getAttributeValue(child, "data-source"))
                                    }
                                    _s.startAtPlaylist = _s.props.startAtPlaylist || 0, isNaN(_s.startAtPlaylist) && (_s.startAtPlaylist = 0), _s.startAtPlaylist < 0 ? _s.startAtPlaylist = 0 : _s.startAtPlaylist > _s.totalCats - 1 && (_s.startAtPlaylist = _s.totalCats - 1), _s.playlistBottomHeight = _s.props.playlistBottomHeight || 0, _s.playlistBottomHeight = Math.min(800, _s.playlistBottomHeight), _s.subtitlesOffLabel_str = _s.props.subtitlesOffLabel || "Subtitle off", _s.videoSourcePath_str = _s.props.videoSourcePath || void 0, _s.timeColor_str = _s.props.timeColor || "#FF0000", _s.youtubeQualityButtonNormalColor_str = _s.props.youtubeQualityButtonNormalColor || "#FF0000", _s.youtubeQualityButtonSelectedColor_str = _s.props.youtubeQualityButtonSelectedColor || "#FF0000", _s.posterBackgroundColor_str = _s.props.posterBackgroundColor || "transparent", _s.showPlaylistButtonAndPlaylist_bl = _s.props.showPlaylistButtonAndPlaylist, _s.showPlaylistButtonAndPlaylist_bl = "no" != _s.showPlaylistButtonAndPlaylist_bl, _s.useResumeOnPlay_bl = _s.props.useResumeOnPlay, _s.useResumeOnPlay_bl = "yes" == _s.useResumeOnPlay_bl, _s.useResumeOnPlay_bl = _s.props.useResumeOnPlay, _s.useResumeOnPlay_bl = "yes" == _s.useResumeOnPlay_bl, _s.showOnlyThumbnail = _s.props.showOnlyThumbnail, _s.showOnlyThumbnail = "yes" == _s.showOnlyThumbnail, _s.showThumbnail_bl = _s.props.showThumbnail, _s.showThumbnail_bl = "no" != _s.showThumbnail_bl, _s.showOnlyThumbnail && (_s.showThumbnail_bl = !0), _s.showPlaylistOnFullScreen = _s.props.showPlaylistOnFullScreen, _s.showPlaylistOnFullScreen = "yes" == _s.showPlaylistOnFullScreen, _s.stopAfterLastVideoHasPlayed_bl = _s.props.stopAfterLastVideoHasPlayed, _s.stopAfterLastVideoHasPlayed_bl = "yes" == _s.stopAfterLastVideoHasPlayed_bl, _s.usePlaylistsSelectBox_bl = _s.props.usePlaylistsSelectBox, _s.usePlaylistsSelectBox_bl = "yes" == _s.usePlaylistsSelectBox_bl, _s.executeCuepointsOnlyOnce_bl = _s.props.executeCuepointsOnlyOnce, _s.executeCuepointsOnlyOnce_bl = "yes" == _s.executeCuepointsOnlyOnce_bl, _s.showPlaylistByDefault_bl = _s.props.showPlaylistByDefault, _s.showPlaylistByDefault_bl = "no" != _s.showPlaylistByDefault_bl, _s.playAfterVideoStop_bl = _s.props.playAfterVideoStop, _s.playAfterVideoStop_bl = "no" != _s.playAfterVideoStop_bl, _s.openerAlignment_str = _s.props.openerAlignment, _s.openerEqulizerOffsetTop = _s.props.openerEqulizerOffsetTop || 0, _s.openerEqulizerOffsetLeft = _s.props.openerEqulizerOffsetLeft || 0, _s.showOpener_bl = _s.props.showOpener, _s.showOpener_bl = "yes" == _s.showOpener_bl, _s.stickyOnScrollShowOpener_bl = _s.props.stickyOnScrollShowOpener, _s.stickyOnScrollShowOpener_bl = "yes" == _s.stickyOnScrollShowOpener_bl, _s.showOpenerPlayPauseButton_bl = _s.props.showOpenerPlayPauseButton, _s.showOpenerPlayPauseButton_bl = "yes" == _s.showOpenerPlayPauseButton_bl, _s.animate_bl = _s.props.animatePlayer, _s.animate_bl = "yes" == _s.animate_bl, _s.showChromecastButton_bl = _s.props.showChromecastButton, _s.showChromecastButton_bl = "yes" == _s.showChromecastButton_bl, FWDUVPUtils.isChrome && !FWDUVPUtils.isLocal && -1 != location.href.indexOf("https:") || (_s.showChromecastButton_bl = !1), _s.showAnnotationsPositionTool_bl = _s.props.showAnnotationsPositionTool, _s.showAnnotationsPositionTool_bl = "yes" == _s.showAnnotationsPositionTool_bl, _s.showAnnotationsPositionTool_bl && (_s.showPlaylistByDefault_bl = !1), _s.showPlaylistName_bl = _s.props.showPlaylistName, _s.showPlaylistName_bl = "no" != _s.showPlaylistName_bl, _s.showSearchInpt = _s.props.showSearchInput, _s.showSearchInpt = "no" != _s.showSearchInpt, _s.showSubByDflt = _s.props.showSubtitleByDefault, _s.showSubByDflt = "no" != _s.showSubByDflt, _s.showSubBtn = _s.props.showSubtitleButton, _s.showSubBtn = "no" != _s.showSubBtn, _s.forceDisableDownloadButtonForFolder_bl = _s.props.forceDisableDownloadButtonForFolder, _s.forceDisableDownloadButtonForFolder_bl = "yes" == _s.forceDisableDownloadButtonForFolder_bl, _s.nBC = _s.props.normalHEXButtonsColor || "#FFFFFF", -1 != _s.sknPth.indexOf("dark") ? _s.sBC = "#FFFFFF" : _s.sBC = "#000000", _s.playlistPosition_str = _s.props.playlistPosition || "bottom", test = "bottom" == _s.playlistPosition_str || "right" == _s.playlistPosition_str, test || (_s.playlistPosition_str = "right"), _s.folderVideoLabel_str = _s.props.folderVideoLabel || "Video ", _s.logoPosition_str = _s.props.logoPosition || "topleft", _s.logoPosition_str = String(_s.logoPosition_str).toLowerCase(), test = "topleft" == _s.logoPosition_str || "topright" == _s.logoPosition_str || "bottomleft" == _s.logoPosition_str || "bottomright" == _s.logoPosition_str, test || (_s.logoPosition_str = "topleft"), _s.thumbnailSelectedType_str = _s.props.thumbnailSelectedType || "opacity", "blackAndWhite" != _s.thumbnailSelectedType_str && "threshold" != _s.thumbnailSelectedType_str && "opacity" != _s.thumbnailSelectedType_str && (_s.thumbnailSelectedType_str = "opacity"), (_s.isMbl || FWDUVPUtils.isIEAndLessThen9) && (_s.thumbnailSelectedType_str = "opacity"), "file:" == document.location.protocol && (_s.thumbnailSelectedType_str = "opacity"), _s.adsButtonsPosition_str = _s.props.adsButtonsPosition || "left", _s.adsButtonsPosition_str = String(_s.adsButtonsPosition_str).toLowerCase(), test = "left" == _s.adsButtonsPosition_str || "right" == _s.adsButtonsPosition_str, test || (_s.adsButtonsPosition_str = "left"), _s.skipToVideoButtonText_str = _s.props.skipToVideoButtonText || "not defined", _s.skipToVideoText_str = _s.props.skipToVideoText, _s.adsTextNormalColor = _s.props.adsTextNormalColor || "#FF0000", _s.adsTextSelectedColor = _s.props.adsTextSelectedColor || "#FF0000", _s.adsBorderNormalColor_str = _s.props.adsBorderNormalColor || "#FF0000", _s.adsBorderSelectedColor_str = _s.props.adsBorderSelectedColor || "#FF0000", _s.volume = _s.props.volume, null != _s.volume && !isNaN(_s.volume) || (_s.volume = 1), 1 < _s.volume ? _s.volume = 1 : _s.volume <= 0 && (_s.volume = 0), _s.rewTm = _s.props.rewindTime, null != _s.rewTm && !isNaN(_s.rewTm) || (_s.rewTm = 10), _s.rewTm <= 1 && (_s.rewTm = 1), _s.buttonsToolTipFontColor_str = _s.props.buttonsToolTipFontColor || "#FF0000", _s.toolTipsButtonFontColor_str = _s.props.toolTipsButtonFontColor || "#FF0000", _s.shareAndEmbedTextColor_str = _s.props.shareAndEmbedTextColor || "#FF0000", _s.inputBackgroundColor_str = _s.props.inputBackgroundColor || "#FF0000", _s.inputColor_str = _s.props.inputColor || "#FF0000", _s.searchInputBackgroundColor_str = _s.props.searchInputBackgroundColor || "#FF0000", _s.borderColor_str = _s.props.borderColor || "#FF0000", _s.searchInputColor_str = _s.props.searchInputColor || "#FF0000", _s.youtubeAndFolderVideoTitleColor_str = _s.props.youtubeAndFolderVideoTitleColor || "#FF0000", _s.folderAudioSecondTitleColor_str = _s.props.folderAudioSecondTitleColor || "#666666", _s.youtubeDescriptionColor_str = _s.props.youtubeDescriptionColor || "#FF0000", _s.youtubeOwnerColor_str = _s.props.youtubeOwnerColor || "#FF0000", _s.secondaryLabelsColor_str = _s.props.secondaryLabelsColor || "#FF0000", _s.mainLabelsColor_str = _s.props.mainLabelsColor || "#FF0000", _s.playlistBackgroundColor_str = _s.props.playlistBackgroundColor || "#FF0000", _s.thumbnailNormalBackgroundColor_str = _s.props.thumbnailNormalBackgroundColor || "#FF0000", _s.playlistNameColor_str = _s.props.playlistNameColor || "#FF0000", _s.thumbnailHoverBackgroundColor_str = _s.props.thumbnailHoverBackgroundColor || "#FF0000", _s.thumbnailDisabledBackgroundColor_str = _s.props.thumbnailDisabledBackgroundColor || "#FF0000", _s.mainSelectorBackgroundSelectedColor = _s.props.mainSelectorBackgroundSelectedColor || "#FFFFFF", _s.mainSelectorTextNormalColor = _s.props.mainSelectorTextNormalColor || "#FFFFFF", _s.mainSelectorTextSelectedColor = _s.props.mainSelectorTextSelectedColor || "#000000", _s.mainButtonBackgroundNormalColor = _s.props.mainButtonBackgroundNormalColor || "#212021", _s.mainButtonBackgroundSelectedColor = _s.props.mainButtonBackgroundSelectedColor || "#FFFFFF", _s.mainButtonTextNormalColor = _s.props.mainButtonTextNormalColor || "#FFFFFF", _s.mainButtonTextSelectedColor = _s.props.mainButtonTextSelectedColor || "#000000", _s.logoLink_str = _s.props.logoLink || "none", _s.startAtVideo = parseInt(_s.props.startAtVideo) || 0, _s.audioVisualizerLinesColor_str = _s.props.audioVisualizerLinesColor || "#0099FF", _s.audioVisualizerCircleColor_str = _s.props.audioVisualizerCircleColor || "#FFFFFF", _s.privateVideoPassword_str = _s.props.privateVideoPassword, _s.youtubeAPIKey = _s.props.youtubeAPIKey || "AIzaSyCgbixU3aIWCkiZ76h_E-XpEGig5mFhnVY", _s.contextMenuBackgroundColor_str = _s.props.contextMenuBackgroundColor || "#000000", _s.contextMenuBorderColor_str = _s.props.contextMenuBorderColor || "#FF0000", _s.contextMenuSpacerColor_str = _s.props.contextMenuSpacerColor || "#FF0000", _s.contextMenuItemNormalColor_str = _s.props.contextMenuItemNormalColor || "#FF0000", _s.contextMenuItemSelectedColor_str = _s.props.contextMenuItemSelectedColor || "#FF0000", _s.contextMenuItemDisabledColor_str = _s.props.contextMenuItemDisabledColor || "#FF0000", _s.showScriptDeveloper_bl = _s.props.showScriptDeveloper, _s.showScriptDeveloper_bl = "yes" == _s.showScriptDeveloper_bl, _s.showContextmenu_bl = _s.props.showContextmenu, _s.showContextmenu_bl = "no" != _s.showContextmenu_bl, _s.useFingerPrintStamp = _s.props.useFingerPrintStamp, _s.useFingerPrintStamp = "yes" == _s.useFingerPrintStamp, window.fwduvpFingerPrintStamp || (_s.useFingerPrintStamp = !1), _s.frequencyOfFingerPrintStamp = _s.props.frequencyOfFingerPrintStamp || 5e3, _s.durationOfFingerPrintStamp = _s.props.durationOfFingerPrintStamp || 400, _s.nextAndPrevSetButtonsMargins = _s.props.nextAndPrevSetButtonsMargins || 0, _s.buttonsMargins = _s.props.buttonsMargins || 0, _s.thumbnailMaxWidth = _s.props.thumbnailMaxWidth || 330, _s.thumbnailMaxHeight = _s.props.thumbnailMaxHeight || 330, _s.horizontalSpaceBetweenThumbnails = _s.props.horizontalSpaceBetweenThumbnails, _s.verticalSpaceBetweenThumbnails = _s.props.verticalSpaceBetweenThumbnails, _s.totalPlaylists = _s.cats_ar.length, _s.controllerHeight = _s.props.controllerHeight || 50, _s.startSpaceBetweenButtons = _s.props.startSpaceBetweenButtons || 0, _s.controllerHideDelay = _s.props.controllerHideDelay || 2, _s.controllerHideDelay *= 1e3, _s.spaceBetweenButtons = _s.props.spaceBetweenButtons || 0, _s.scrubbersOffsetWidth = _s.props.scrubbersOffsetWidth || 0, _s.mainScrubberOffestTop = _s.props.mainScrubberOffestTop || 0, _s.volumeScrubberOffsetTopWidth = _s.props.volumeScrubberOffsetTopWidth || 0, _s.timeOffsetLeftWidth = _s.props.timeOffsetLeftWidth || 0, _s.timeOffsetRightWidth = _s.props.timeOffsetRightWidth || 0, _s.timeOffsetTop = _s.props.timeOffsetTop || 0, _s.embedWindowCloseButtonMargins = _s.props.embedAndInfoWindowCloseButtonMargins || 0, _s.logoMargins = _s.props.logoMargins || 0, _s.maxPlaylistItems = _s.props.maxPlaylistItems || 50, _s.volumeScrubberHeight = _s.props.volumeScrubberHeight || 10, _s.volumeScrubberOfsetHeight = _s.props.volumeScrubberOfsetHeight || 0, 200 < _s.volumeScrubberHeight && (_s.volumeScrubberHeight = 200), _s.buttonsToolTipHideDelay = _s.props.buttonsToolTipHideDelay || 1.5, _s.thumbnailWidth = _s.props.thumbnailWidth || 80, _s.thumbnailHeight = _s.props.thumbnailHeight || 80, _s.spaceBetweenThumbnails = _s.props.spaceBetweenThumbnails || 0, _s.timeOffsetTop = _s.props.timeOffsetTop || 0, _s.scrollbarOffestWidth = _s.props.scrollbarOffestWidth || 0, _s.scollbarSpeedSensitivity = _s.props.scollbarSpeedSensitivity || .5, _s.facebookAppId_str = _s.props.facebookAppId, _s.aopwBorderSize = _s.props.aopwBorderSize || 0, _s.aopwTitle = _s.props.aopwTitle || "Advertisement", _s.aopwTitleColor_str = _s.props.aopwTitleColor || "#FFFFFF", _s.aopwWidth = _s.props.aopwWidth || 200, _s.aopwHeight = _s.props.aopwHeight || 200, _s.fillEntireVideoScreen_bl = _s.props.fillEntireVideoScreen, _s.fillEntireVideoScreen_bl = "yes" == _s.fillEntireVideoScreen_bl, _s.fillEntireposterScreen_bl = _s.props.fillEntireposterScreen, _s.fillEntireposterScreen_bl = "yes" == _s.fillEntireposterScreen_bl, _s.goFullScreenOnPlay_bl = _s.props.goFullScreenOnButtonPlay, _s.goFullScreenOnPlay_bl = "yes" == _s.goFullScreenOnPlay_bl, _s.showContextMenu_bl = _s.props.showContextMenu, _s.showContextMenu_bl = "no" != _s.showContextMenu_bl, _s.showController_bl = _s.props.showController, _s.showController_bl = "no" != _s.showController_bl, _s.showButtonsToolTip_bl = _s.props.showButtonsToolTips, _s.showButtonsToolTip_bl = "no" != _s.showButtonsToolTip_bl, _s.isMbl && (_s.showButtonsToolTip_bl = !1), _s.addKeyboardSupport_bl = _s.props.addKeyboardSupport, _s.addKeyboardSupport_bl = "no" != _s.addKeyboardSupport_bl, _s.playsinline = "yes" == _s.props.playsinline, _s.useAToB = "yes" == _s.props.useAToB, _s.atbTimeBackgroundColor = _s.props.atbTimeBackgroundColor || "transparent", _s.atbTimeTextColorNormal = _s.props.atbTimeTextColorNormal || "#888888", _s.atbTimeTextColorSelected = _s.props.atbTimeTextColorSelected || "#FFFFFF", _s.atbButtonTextNormalColor = _s.props.atbButtonTextNormalColor || "#888888", _s.atbButtonTextSelectedColor = _s.props.atbButtonTextSelectedColor || "#FFFFFF", _s.atbButtonBackgroundNormalColor = _s.props.atbButtonBackgroundNormalColor || "#FFFFFF", _s.atbButtonBackgroundSelectedColor = _s.props.atbButtonBackgroundSelectedColor || "#000000", _s.addMouseWheelSupport_bl = _s.props.addMouseWheelSupport, _s.addMouseWheelSupport_bl = "no" != _s.addMouseWheelSupport_bl, _s.addScrOnMM_bl = _s.props.addScrollOnMouseMove, _s.addScrOnMM_bl = "yes" == _s.addScrOnMM_bl, _s.showPlaylistsSearchInput_bl = _s.props.showPlaylistsSearchInput, _s.showPlaylistsSearchInput_bl = "yes" == _s.showPlaylistsSearchInput_bl, _s.scrubbersToolTipLabelBackgroundColor = _s.props.scrubbersToolTipLabelBackgroundColor || "#FFFFFF", _s.scrubbersToolTipLabelFontColor = _s.props.scrubbersToolTipLabelFontColor || "#000000", _s.autoPlay_bl = _s.props.autoPlay, _s.autoPlay_bl = "yes" == _s.autoPlay_bl, _s.autoPlayText = _s.props.autoPlayText || "", _s.showNextAndPrevButtons_bl = _s.props.showNextAndPrevButtons, _s.showNextAndPrevButtons_bl = "no" != _s.showNextAndPrevButtons_bl, _s.showPlaylistsButtonAndPlaylists_bl = _s.props.showPlaylistsButtonAndPlaylists, _s.showPlaylistsButtonAndPlaylists_bl = "no" != _s.showPlaylistsButtonAndPlaylists_bl, _s.showEmbedButton_bl = _s.props.showEmbedButton, _s.showEmbedButton_bl = "no" != _s.showEmbedButton_bl, _s.showScrubberWhenControllerIsHidden_bl = _s.props.showScrubberWhenControllerIsHidden, _s.showScrubberWhenControllerIsHidden_bl = "no" != _s.showScrubberWhenControllerIsHidden_bl, _s.showMainScrubberToolTipLabel_bl = _s.props.showMainScrubberToolTipLabel, _s.showMainScrubberToolTipLabel_bl = "yes" == _s.showMainScrubberToolTipLabel_bl, _s.showPlaylistsByDefault_bl = _s.props.showPlaylistsByDefault, _s.showPlaylistsByDefault_bl = "yes" == _s.showPlaylistsByDefault_bl, _s.loop_bl = _s.props.loop, _s.loop_bl = "yes" == _s.loop_bl, _s.shuffle_bl = _s.props.shuffle, _s.shuffle_bl = "yes" == _s.shuffle_bl, _s.showLoopButton_bl = _s.props.showLoopButton, _s.showLoopButton_bl = "no" != _s.props.showLoopButton, _s.showShuffleButton_bl = _s.props.showShuffleButton, _s.showShuffleButton_bl = "no" != _s.props.showShuffleButton, _s.showDownloadVideoButton_bl = _s.props.showDownloadButton, _s.showDownloadVideoButton_bl = "no" != _s.showDownloadVideoButton_bl, _s.randomizePlaylist_bl = _s.props.randomizePlaylist, _s.randomizePlaylist_bl = "yes" == _s.randomizePlaylist_bl, _s.showDefaultControllerForVimeo_bl = _s.props.showDefaultControllerForVimeo, _s.showDefaultControllerForVimeo_bl = "yes" == _s.showDefaultControllerForVimeo_bl, _s.showInfoButton_bl = _s.props.showInfoButton, _s.showInfoButton_bl = "no" != _s.showInfoButton_bl, _s.showLogo_bl = _s.props.showLogo, _s.showLogo_bl = "yes" == _s.showLogo_bl, _s.hideLogoWithController_bl = _s.props.hideLogoWithController, _s.hideLogoWithController_bl = "yes" == _s.hideLogoWithController_bl, _s.showPoster_bl = _s.props.showPoster, _s.showPoster_bl = "yes" == _s.showPoster_bl, _s.useVectorIcons_bl = _s.props.useVectorIcons, _s.useVectorIcons_bl = "yes" == _s.useVectorIcons_bl, _s.showVolumeButton_bl = _s.props.showVolumeButton, _s.showVolumeButton_bl = "no" != _s.showVolumeButton_bl, _s.showVolumeScrubber_bl = _s.showVolumeButton_bl, _s.showControllerWhenVideoIsStopped_bl = _s.props.showControllerWhenVideoIsStopped, _s.showControllerWhenVideoIsStopped_bl = "yes" == _s.showControllerWhenVideoIsStopped_bl, _s.showNextAndPrevButtonsInController_bl = _s.props.showNextAndPrevButtonsInController, _s.showNextAndPrevButtonsInController_bl = "yes" == _s.showNextAndPrevButtonsInController_bl, _s.showTime_bl = _s.props.showTime, _s.showTime_bl = "no" != _s.showTime_bl, _s.shwPpoppAdClsBtn = _s.props.showPopupAdsCloseButton, _s.shwPpoppAdClsBtn = "no" != _s.shwPpoppAdClsBtn, _s.showRewindButton_bl = _s.props.showRewindButton, _s.showRewindButton_bl = "no" != _s.showRewindButton_bl, _s.disableVideoScrubber_bl = _s.props.disableVideoScrubber, _s.disableVideoScrubber_bl = "yes" == _s.disableVideoScrubber_bl, _s.showPlaybackRateButton_bl = _s.props.showPlaybackRateButton, _s.showPlaybackRateButton_bl = "yes" == _s.showPlaybackRateButton_bl, _s.defaultPlaybackRate_str = _s.props.defaultPlaybackRate, null == _s.defaultPlaybackRate_str && (_s.defaultPlaybackRate_str = 1), _s.defaultPlaybackRate_ar = ["0.25", "0.5", "1", "1.25", "1.5", "2"], _s.defaultPlaybackRate_ar.reverse();
                                    for (var n = !1, t = 0; t < _s.defaultPlaybackRate_ar.length; t++) _s.defaultPlaybackRate_ar[t] == _s.defaultPlaybackRate_str && (n = !0, _s.startAtPlaybackIndex = t);
                                    n || (_s.startAtPlaybackIndex = 3, _s.defaultPlaybackRate_str = _s.defaultPlaybackRate_ar[_s.startAtPlaybackIndex]), _s.showFullScreenButton_bl = _s.props.showFullScreenButton, _s.showFullScreenButton_bl = "no" != _s.showFullScreenButton_bl, _s.repeatBackground_bl = _s.props.repeatBackground, _s.repeatBackground_bl = "no" != _s.repeatBackground_bl, _s.playVideoOnlyWhenLoggedIn_bl = _s.props.playVideoOnlyWhenLoggedIn, _s.playVideoOnlyWhenLoggedIn_bl = "yes" == _s.playVideoOnlyWhenLoggedIn_bl, _s.playIfLoggedIn = _s.props.playIfLoggedIn, _s.playIfLoggedIn = "yes" == _s.playIfLoggedIn, _s.playIfLoggedInMessage = _s.props.playIfLoggedInMessage || "Please loggin", _s.showShareButton_bl = _s.props.showShareButton, _s.showShareButton_bl = "no" != _s.showShareButton_bl, _s.openNewPageAtTheEndOfTheAds_bl = _s.props.openNewPageAtTheEndOfTheAds, _s.openNewPageAtTheEndOfTheAds_bl = "yes" == _s.openNewPageAtTheEndOfTheAds_bl, _s.playAdsOnlyOnce_bl = _s.props.playAdsOnlyOnce, _s.playAdsOnlyOnce_bl = "yes" == _s.playAdsOnlyOnce_bl, _s.startAtRandomVideo_bl = _s.props.startAtRandomVideo, _s.startAtRandomVideo_bl = "yes" == _s.startAtRandomVideo_bl, _s.stopVideoWhenPlayComplete_bl = _s.props.stopVideoWhenPlayComplete, _s.stopVideoWhenPlayComplete_bl = "yes" == _s.stopVideoWhenPlayComplete_bl, _s.closeLightBoxWhenPlayComplete = _s.props.closeLightBoxWhenPlayComplete, _s.closeLightBoxWhenPlayComplete = "yes" == _s.closeLightBoxWhenPlayComplete, _s.showYoutubeQualityButton_bl = _s.props.showQualityButton, _s.showYoutubeQualityButton_bl = "no" != _s.showYoutubeQualityButton_bl, _s.thumbnailsPreviewWidth = _s.props.thumbnailsPreviewWidth || 300, _s.thumbnailsPreviewHeight = _s.props.thumbnailsPreviewHeight || 168, _s.thumbnailsPreviewBackgroundColor = _s.props.thumbnailsPreviewBackgroundColor || "#000", _s.thumbnailsPreviewBorderColor = _s.props.thumbnailsPreviewBorderColor || "#333", _s.thumbnailsPreviewLabelBackgroundColor = _s.props.thumbnailsPreviewLabelBackgroundColor || "#FFF", _s.thumbnailsPreviewLabelFontColor = _s.props.thumbnailsPreviewLabelFontColor || "#000", _s.arrowN_str = _s.sknPth + "combobox-arrow-normal.png", _s.arrowS_str = _s.sknPth + "combobox-arrow-selected.png", _s.hlsPath_str = _s.mainFolderPath_str + "java/hls.js", _s.dashPath_str = _s.mainFolderPath_str + "java/dash.all.min.js", _s.threeJsPath_str = _s.mainFolderPath_str + "java/three.js", _s.threeJsControlsPath_str = _s.mainFolderPath_str + "java/threeControled.js", _s.isDark = !0, -1 == _s.sknPth.indexOf("dark") && (_s.isDark = !1), _s.logoPath_str = _s.sknPth + "logo.png", _s.adLinePat_str = _s.sknPth + "ad-line.png", _s.props.logoPath && (_s.logoPath_str = _s.props.logoPath), _s.mainScrubberDragLeftAddPath_str = _s.sknPth + "scrubber-left-drag-add.png", _s.mainScrubberDragMiddleAddPath_str = _s.sknPth + "scrubber-middle-drag-add.png", _s.mainPreloader_img = new Image, _s.mainPreloader_img.onerror = _s.onSkinLoadErrorHandler, _s.mainPreloader_img.onload = _s.onPreloaderLoadHandler, _s.mainPreloader_img.src = _s.sknPth + "preloader.jpg", _s.hdIcn = _s.sknPth + "hd.png", _s.skinPaths_ar = [{
                                        img: _s.skipIconPath_img = new Image,
                                        src: _s.sknPth + "skip-icon.png"
                                    }, {
                                        img: _s.mainScrubberBkLeft_img = new Image,
                                        src: _s.sknPth + "scrubber-left-background.png"
                                    }, {
                                        img: _s.mainScrubberDragLeft_img = new Image,
                                        src: _s.sknPth + "scrubber-left-drag.png"
                                    }, {
                                        img: _s.mainScrubberLine_img = new Image,
                                        src: _s.sknPth + "scrubber-line.png"
                                    }, {
                                        img: _s.progressLeft_img = new Image,
                                        src: _s.sknPth + "progress-left.png"
                                    }, {
                                        img: _s.volumeScrubberDragBottom_img = new Image,
                                        src: _s.sknPth + "volume-scrubber-bottom-drag.png"
                                    }, {
                                        img: _s.popwColseN_img = new Image,
                                        src: _s.sknPth + "popw-close-button.png"
                                    }, {
                                        img: _s.embedColoseN_img = new Image,
                                        src: _s.sknPth + "embed-close-button.png"
                                    }], _s.useVectorIcons_bl || (_s.skinPaths_ar.push({
                                        img: _s.prevN_img = new Image,
                                        src: _s.sknPth + "prev-video.png"
                                    }, {
                                        img: _s.nextN_img = new Image,
                                        src: _s.sknPth + "next-video.png"
                                    }, {
                                        img: _s.playN_img = new Image,
                                        src: _s.sknPth + "play.png"
                                    }, {
                                        img: _s.pauseN_img = new Image,
                                        src: _s.sknPth + "pause.png"
                                    }, {
                                        img: _s.volumeN_img = new Image,
                                        src: _s.sknPth + "volume.png"
                                    }, {
                                        img: _s.largePlayN_img = new Image,
                                        src: _s.sknPth + "large-play.png"
                                    }, {
                                        img: _s.categoriesN_img = new Image,
                                        src: _s.sknPth + "categories-button.png"
                                    }, {
                                        img: _s.replayN_img = new Image,
                                        src: _s.sknPth + "replay-button.png"
                                    }, {
                                        img: _s.shuffleN_img = new Image,
                                        src: _s.sknPth + "shuffle-button.png"
                                    }, {
                                        img: _s.fullScreenN_img = new Image,
                                        src: _s.sknPth + "full-screen.png"
                                    }, {
                                        img: _s.ytbQualityN_img = new Image,
                                        src: _s.sknPth + "youtube-quality.png"
                                    }, {
                                        img: _s.shareN_img = new Image,
                                        src: _s.sknPth + "share.png"
                                    }, {
                                        img: _s.facebookN_img = new Image,
                                        src: _s.sknPth + "facebook.png"
                                    }, {
                                        img: _s.infoN_img = new Image,
                                        src: _s.sknPth + "info-button.png"
                                    }, {
                                        img: _s.downloadN_img = new Image,
                                        src: _s.sknPth + "download-button.png"
                                    }, {
                                        img: _s.normalScreenN_img = new Image,
                                        src: _s.sknPth + "normal-screen.png"
                                    }, {
                                        img: _s.embedN_img = new Image,
                                        src: _s.sknPth + "embed.png"
                                    }, {
                                        img: _s.passColoseN_img = new Image,
                                        src: _s.sknPth + "embed-close-button.png"
                                    }, {
                                        img: _s.showSubtitleNPath_img = new Image,
                                        src: _s.sknPth + "show-subtitle-icon.png"
                                    }, {
                                        img: _s.hideSubtitleNPath_img = new Image,
                                        src: _s.sknPth + "hide-subtitle-icon.png"
                                    }, {
                                        img: _s.playbackRateNPath_img = new Image,
                                        src: _s.sknPth + "playback-rate-normal.png"
                                    }), _s.useAToB && _s.skinPaths_ar.push({
                                        img: _s.atbNPath_img = new Image,
                                        src: _s.sknPth + "a-to-b-button.png"
                                    })), (_s.showOpener_bl && prt.displayType == FWDUVPlayer.STICKY || _s.stickyOnScrollShowOpener_bl && prt.stickyOnScroll) && (_s.skinPaths_ar.push({
                                        img: _s.openerPauseN_img = new Image,
                                        src: _s.sknPth + "open-pause-button-normal.png"
                                    }, {
                                        img: _s.openerPlayN_img = new Image,
                                        src: _s.sknPth + "open-play-button-normal.png"
                                    }, {
                                        img: _s.animationPath_img = new Image,
                                        src: _s.sknPth + "equalizer.png"
                                    }, {
                                        img: _s.closeN_img = new Image,
                                        src: _s.sknPth + "opener-close.png"
                                    }, {
                                        img: _s.openTopN_img = new Image,
                                        src: _s.sknPth + "open-button-normal-top.png"
                                    }, {
                                        img: _s.openBottomN_img = new Image,
                                        src: _s.sknPth + "open-button-normal-bottom.png"
                                    }), _s.openerPauseS_str = _s.sknPth + "open-pause-button-selected.png", _s.openerPlayS_str = _s.sknPth + "open-play-button-selected.png", _s.openerAnimationPath_str = _s.sknPth + "equalizer.png", _s.openTopSPath_str = _s.sknPth + "open-button-selected-top.png", _s.openBottomSPath_str = _s.sknPth + "open-button-selected-bottom.png", _s.openTopSPath_str = _s.sknPth + "open-button-selected-top.png", _s.openBottomSPath_str = _s.sknPth + "open-button-selected-bottom.png", _s.closeSPath_str = _s.sknPth + "opener-close-over.png"), _s.showRewindButton_bl && (_s.skinPaths_ar.push({
                                        img: _s.rewindN_img = new Image,
                                        src: _s.sknPth + "rewind.png"
                                    }), _s.rewindSPath_str = _s.sknPth + "rewind-over.png"), _s.showInfoButton_bl && _s.skinPaths_ar.push({
                                        img: _s.infoWindowClooseN_img = new Image,
                                        src: _s.sknPth + "embed-close-button.png"
                                    }), _s.showNextAndPrevButtonsInController_bl && !_s.useVectorIcons_bl && _s.skinPaths_ar.push({
                                        img: _s.next2N_img = new Image,
                                        src: _s.sknPth + "next-video.png"
                                    }, {
                                        img: _s.prev2N_img = new Image,
                                        src: _s.sknPth + "prev-video.png"
                                    }), _s.showShareButton_bl && !_s.useVectorIcons_bl && (_s.skinPaths_ar.push({
                                        img: _s.shareClooseN_img = new Image,
                                        src: _s.sknPth + "embed-close-button.png"
                                    }, {
                                        img: _s.facebookN_img = new Image,
                                        src: _s.sknPth + "facebook.png"
                                    }, {
                                        img: _s.googleN_img = new Image,
                                        src: _s.sknPth + "google-plus.png"
                                    }, {
                                        img: _s.twitterN_img = new Image,
                                        src: _s.sknPth + "twitter.png"
                                    }, {
                                        img: _s.likedInkN_img = new Image,
                                        src: _s.sknPth + "likedin.png"
                                    }, {
                                        img: _s.bufferkN_img = new Image,
                                        src: _s.sknPth + "buffer.png"
                                    }, {
                                        img: _s.diggN_img = new Image,
                                        src: _s.sknPth + "digg.png"
                                    }, {
                                        img: _s.redditN_img = new Image,
                                        src: _s.sknPth + "reddit.png"
                                    }, {
                                        img: _s.thumbrlN_img = new Image,
                                        src: _s.sknPth + "thumbrl.png"
                                    }), _s.facebookSPath_str = _s.sknPth + "facebook-over.png", _s.googleSPath_str = _s.sknPth + "google-plus-over.png", _s.twitterSPath_str = _s.sknPth + "twitter-over.png", _s.likedInSPath_str = _s.sknPth + "likedin-over.png", _s.bufferSPath_str = _s.sknPth + "buffer-over.png", _s.diggSPath_str = _s.sknPth + "digg-over.png", _s.redditSPath_str = _s.sknPth + "reddit-over.png", _s.thumbrlSPath_str = _s.sknPth + "thumbrl-over.png"), _s.atbSPath_str = _s.sknPth + "a-to-b-button-over.png", _s.popwColseSPath_str = _s.sknPth + "popw-close-button-over.png", _s.popwWindowBackgroundPath_str = _s.sknPth + "popw-window-background.png", _s.popwBarBackgroundPath_str = _s.sknPth + "popw-bar-background.png", _s.playbackRateSPath_str = _s.sknPth + "playback-rate-selected.png", _s.prevSPath_str = _s.sknPth + "prev-video-over.png", _s.nextSPath_str = _s.sknPth + "next-video-over.png", _s.playSPath_str = _s.sknPth + "play-over.png", _s.pauseSPath_str = _s.sknPth + "pause-over.png", _s.bkMiddlePath_str = _s.sknPth + "controller-middle.png", _s.hdPath_str = _s.sknPth + "hd.png", _s.youtubeQualityArrowPath_str = _s.sknPth + "youtube-quality-arrow.png", _s.ytbQualityButtonPointerPath_str = _s.sknPth + "youtube-quality-pointer.png", _s.controllerBkPath_str = _s.sknPth + "controller-background.png", _s.skipIconSPath_str = _s.sknPth + "skip-icon-over.png", _s.adsBackgroundPath_str = _s.sknPth + "ads-background.png", _s.shareSPath_str = _s.sknPth + "share-over.png", _s.mainScrubberBkRightPath_str = _s.sknPth + "scrubber-right-background.png", _s.mainScrubberBkMiddlePath_str = _s.sknPth + "scrubber-middle-background.png", _s.mainScrubberDragMiddlePath_str = _s.sknPth + "scrubber-middle-drag.png", _s.volumeScrubberBkBottomPath_str = _s.sknPth + "volume-scrubber-bottom-background.png", _s.volumeScrubberBkMiddlePath_str = _s.sknPth + "volume-scrubber-middle-background.png", _s.volumeScrubberBkTopPath_str = _s.sknPth + "volume-scrubber-top-background.png", _s.volumeScrubberDragBottomPath_str = _s.sknPth + "volume-scrubber-bottom-drag.png", _s.volumeScrubberLinePath_str = _s.sknPth + "volume-scrubber-line.png", _s.volumeScrubberDragMiddlePath_str = _s.sknPth + "volume-scrubber-middle-drag.png", _s.volumeSPath_str = _s.sknPth + "volume-over.png", _s.volumeDPath_str = _s.sknPth + "volume-disabled.png", _s.categoriesSPath_str = _s.sknPth + "categories-button-over.png", _s.replaySPath_str = _s.sknPth + "replay-button-over.png", _s.toopTipBk_str = _s.sknPth + "tooltip-background.png", _s.toopTipPointer_str = _s.sknPth + "tooltip-pointer.png", _s.shufflePathS_str = _s.sknPth + "shuffle-button-over.png", _s.passButtonNPath_str = _s.sknPth + "pass-button.png", _s.passButtonSPath_str = _s.sknPth + "pass-button-over.png", _s.largePlayS_str = _s.sknPth + "large-play-over.png", _s.fullScreenSPath_str = _s.sknPth + "full-screen-over.png", _s.ytbQualitySPath_str = _s.sknPth + "youtube-quality-over.png", _s.ytbQualityDPath_str = _s.sknPth + "youtube-quality-hd.png", _s.facebookSPath_str = _s.sknPth + "facebook-over.png", _s.infoSPath_str = _s.sknPth + "info-button-over.png", _s.downloadSPath_str = _s.sknPth + "download-button-over.png", _s.normalScreenSPath_str = _s.sknPth + "normal-screen-over.png", _s.progressMiddlePath_str = _s.sknPth + "progress-middle.png", _s.embedPathS_str = _s.sknPth + "embed-over.png", _s.embedWindowClosePathS_str = _s.sknPth + "embed-close-button-over.png", _s.embedWindowInputBackgroundPath_str = _s.sknPth + "embed-window-input-background.png", _s.embedCopyButtonNPath_str = _s.sknPth + "embed-copy-button.png", _s.embedCopyButtonSPath_str = _s.sknPth + "embed-copy-button-over.png", _s.sendButtonNPath_str = _s.sknPth + "send-button.png", _s.sendButtonSPath_str = _s.sknPth + "send-button-over.png", _s.embedWindowBackground_str = _s.sknPth + "embed-window-background.png", _s.showSubtitleSPath_str = _s.sknPth + "show-subtitle-icon-over.png", _s.hideSubtitleSPath_str = _s.sknPth + "hide-subtitle-icon-over.png", _s.inputArrowPath_str = _s.sknPth + "input-arrow.png", _s.showPlaylistsButtonAndPlaylists_bl && (_s.skinPaths_ar.push({
                                        img: new Image,
                                        src: _s.sknPth + "categories-background.png"
                                    }), _s.useVectorIcons_bl || _s.skinPaths_ar.push({
                                        img: _s.catNextN_img = new Image,
                                        src: _s.sknPth + "categories-next-button.png"
                                    }, {
                                        img: _s.catPrevN_img = new Image,
                                        src: _s.sknPth + "categories-prev-button.png"
                                    }, {
                                        img: _s.catCloseN_img = new Image,
                                        src: _s.sknPth + "categories-close-button.png"
                                    }), _s.catBkPath_str = _s.sknPth + "categories-background.png", _s.catThumbBkPath_str = _s.sknPth + "categories-thumbnail-background.png", _s.catThumbBkTextPath_str = _s.sknPth + "categories-thumbnail-text-backgorund.png", _s.catNextSPath_str = _s.sknPth + "categories-next-button-over.png", _s.catPrevSPath_str = _s.sknPth + "categories-prev-button-over.png", _s.catCloseSPath_str = _s.sknPth + "categories-close-button-over.png"), _s.poppAdClsNPth = _s.sknPth + "close-button-normal.png", _s.poppAdClsSPth = _s.sknPth + "close-button-selected.png", _s.annotationAddCloseNPath_str = _s.sknPth + "annotation-close-button-normal.png", _s.annotationAddCloseSPath_str = _s.sknPth + "annotation-close-button-selected.png", _s.showPlaylistButtonAndPlaylist_bl && (_s.playlistThumbnailsBkPath_str = _s.sknPth + "playlist-thumbnail-background.png", _s.playlistBkPath_str = _s.sknPth + "playlist-background.png", "bottom" == _s.playlistPosition_str ? (_s.skinPaths_ar.push({
                                        img: _s.hidePlaylistN_img = new Image,
                                        src: _s.sknPth + "hide-horizontal-playlist.png"
                                    }, {
                                        img: _s.showPlaylistN_img = new Image,
                                        src: _s.sknPth + "show-horizontal-playlist.png"
                                    }), _s.hidePlaylistSPath_str = _s.sknPth + "hide-horizontal-playlist-over.png", _s.showPlaylistSPath_str = _s.sknPth + "show-horizontal-playlist-over.png") : (_s.skinPaths_ar.push({
                                        img: _s.hidePlaylistN_img = new Image,
                                        src: _s.sknPth + "hide-vertical-playlist.png"
                                    }, {
                                        img: _s.showPlaylistN_img = new Image,
                                        src: _s.sknPth + "show-vertical-playlist.png"
                                    }), _s.hidePlaylistSPath_str = _s.sknPth + "hide-vertical-playlist-over.png", _s.showPlaylistSPath_str = _s.sknPth + "show-vertical-playlist-over.png"), _s.skinPaths_ar.push({
                                        img: _s.scrBkTop_img = new Image,
                                        src: _s.sknPth + "playlist-scrollbar-background-top.png"
                                    }, {
                                        img: _s.scrDragTop_img = new Image,
                                        src: _s.sknPth + "playlist-scrollbar-drag-top.png"
                                    }, {
                                        img: _s.scrLinesN_img = new Image,
                                        src: _s.sknPth + "playlist-scrollbar-lines.png"
                                    }), _s.scrBkMiddlePath_str = _s.sknPth + "playlist-scrollbar-background-middle.png", _s.scrBkBottomPath_str = _s.sknPth + "playlist-scrollbar-background-bottom.png", _s.scrDragMiddlePath_str = _s.sknPth + "playlist-scrollbar-drag-middle.png", _s.scrDragBottomPath_str = _s.sknPth + "playlist-scrollbar-drag-bottom.png", _s.scrLinesSPath_str = _s.sknPth + "playlist-scrollbar-lines-over.png", _s.inputArrowPath_str = _s.sknPth + "input-arrow.png"), _s.showChromecastButton_bl && (_s.skinPaths_ar.push({
                                        img: _s.castN_img = new Image,
                                        src: _s.sknPth + "cast.png"
                                    }, {
                                        img: _s.uncastN_img = new Image,
                                        src: _s.sknPth + "uncast.png"
                                    }), _s.castSPath_str = _s.sknPth + "cast-over.png", _s.uncastSPath_str = _s.sknPth + "uncast-over.png"), _s.totalGraphics = _s.skinPaths_ar.length
                                } else setTimeout(function () {
                                    null != _s && (errorMessage_str = "At least one playlist is required!", _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                                        text: errorMessage_str
                                    }))
                                }, 50)
                            } else setTimeout(function () {
                                null != _s && (errorMessage_str = "The playlist with the id <font color='#ff0000'>" + _s.categoriesId_str + "</font> is not found!", _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                                    text: errorMessage_str
                                }))
                            }, 50);
                else setTimeout(function () {
                    null != _s && (errorMessage_str = "The <font color='#ff0000'>skinPath</font> property is not defined in the constructor function!", _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                        text: errorMessage_str
                    }))
                }, 50);
                else setTimeout(function () {
                    null != _s && (errorMessage_str = "The <font color='#ff0000'>mainFolderPath</font> property is not defined in the constructor function!", _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                        text: errorMessage_str
                    }))
                }, 50);
                else setTimeout(function () {
                    null != _s && (errorMessage_str = "The <font color='#ff0000'>playlistsId</font> property is not defined in the constructor function!", _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                        text: errorMessage_str
                    }))
                }, 50)
            }, _s.onPreloaderLoadHandler = function () {
                _s.countLoadedSCript = 0, _s.scripts = [], _s.useAToB && _s.scripts.push("FWDUVPATB.js"), _s.thumbnailsPreview && _s.scripts.push("FWDUVPThumbnailsPreview.js"), _s.showChromecastButton_bl && (_s.scripts.push("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"), _s.scripts.push("FWDUVPCC.js")), _s.useFingerPrintStamp && _s.scripts.push("FWDUVPFPS.js"), _s.totalScripts = _s.scripts.length, _s.dispatchEvent(FWDUVPData.PRELOADER_LOAD_DONE), _s.loadPlugin()
            }, _s.loadPlugin = function () {
                var e, t;
                _s.countLoadedSCript == _s.totalScripts ? _s.loadSkin() : (e = document.createElement("script"), t = _s.scripts[_s.countLoadedSCript], /\?/.test(t) ? t += "&version=" + FWDUVPlayer.V : t += "?version=" + FWDUVPlayer.V, document.head.appendChild(e), -1 != t.indexOf("gstatic") ? e.src = t : e.src = _s.mainFolderPath_str + "java/" + t, e.onload = _s.loadPlugin, e.onerror = function (e) {
                    console.log(e), "FWDUVPFPS.js" == t ? _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                        text: 'You have enabled the FingerPrintstamp plugin, the fingerpintstamp js file named <font color="#FF0000">FWDUVPFPS.js</font> is not found. Please make sure that the content folder contains the java folder that contains the <font color="#FF0000">FWDUVPFPS.js</font> file. '
                    }) : "FWDUVPATB.js" == t ? _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                        text: 'You have enabled the A to B plugin, the A to B js file named <font color="#FF0000">FWDUVPATB.js</font> is not found. Please make sure that the content folder contains the java folder that contains the <font color="#FF0000">FWDUVPATB.js</font> file. '
                    }) : "FWDUVPThumbnailsPreview.js" == t ? _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                        text: 'You have enabled the thumbnal preview plugin, the thumbnail preview js file named <font color="#FF0000">FWDUVPThumbnailsPreview.js</font> is not found. Please make sure that the content folder contains the java folder that contains the <font color="#FF0000">FWDUVPThumbnailsPreview.js</font> file. '
                    }) : "FWDUVPCC.js" == t ? _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                        text: 'You have enabled the chromecast plugin, the js file named <font color="#FF0000">FWDUVPCC.js</font> is not found. Please make sure that the content folder contains the java folder that contains the <font color="#FF0000">FWDUVPCC.js</font> file.'
                    }) : -1 != t.indexOf("gstatic.js") && _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                        text: 'Choromecast framework javascript file can\'t be loaded<font color="#FF0000"> ' + t + " </font>"
                    })
                }), _s.countLoadedSCript++
            }, _s.countImaLoadedSCript = 0, _s.startToLoadIMA = function () {
                _s.imaScripts || (_s.imaScripts = ["//imasdk.googleapis.com/js/sdkloader/ima3.js", _s.mainFolderPath_str + "java/FWDUVPIMA.js"], _s.totalImaScripts = _s.imaScripts.length, _s.loadIMA())
            }, _s.loadIMA = function () {
                var e, t;
                _s.countImaLoadedSCript == _s.totalImaScripts ? (_s.imaReady = !0, _s.dispatchEvent(FWDUVPData.IMA_READY)) : (e = document.createElement("script"), t = _s.imaScripts[_s.countImaLoadedSCript], document.head.appendChild(e), e.src = t, e.onload = _s.loadIMA, e.onerror = function (e) {
                    1 == _s.countImaLoadedSCript ? _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                        text: "IMA SDK can't be loaded"
                    }) : 2 == _s.countImaLoadedSCript && _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                        text: 'IMA file <font color="#FF0000">FWDUVPIMA.js</font> is not found. Please make sure that the content folder contains the java folder that contains the <font color="#FF0000">FWDUVPIMA.js</font> file. '
                    }), _s.dispatchEvent(FWDUVPData.IMA_ERROR)
                }, _s.countImaLoadedSCript++)
            }, _s.loadSkin = function () {
                for (var e, t, o = 0; o < _s.totalGraphics; o++) e = _s.skinPaths_ar[o].img, t = _s.skinPaths_ar[o].src, e.onload = _s.onSkinLoadHandler, e.onerror = _s.onSkinLoadErrorHandler, e.src = t
            }, _s.onSkinLoadHandler = function (e) {
                _s.countLoadedSkinImages++, _s.countLoadedSkinImages == _s.totalGraphics && (_s.showOnlyThumbnail && (_s.thumbnailWidth = _s.thumbnailWidth - _s.scrBkTop_img.width, _s.showSearchInpt = !1), setTimeout(function () {
                    _s.dispatchEvent(FWDUVPData.SKIN_LOAD_COMPLETE)
                }, 50))
            }, _s.onSkinLoadErrorHandler = function (e) {
                message = FWDUVPUtils.isIEAndLessThen9 ? "Graphics image not found!" : "The skin icon with label <font color='#ff0000'>" + e.target.src + "</font> can't be loaded, check path!", window.console && console.log(e);
                var t = {
                    text: message
                };
                setTimeout(function () {
                    _s.dispatchEvent(FWDUVPData.LOAD_ERROR, t)
                }, 50)
            }, _s.downloadVideo = function (e, t) {
                if (FWDUVPUtils.isLocal) return _s.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function () {
                    _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                        text: "Downloading video files local is not allowed or possible! To function properly please test online."
                    }), _s.isPlaylistDispatchingError_bl = !1
                }, 50));
                if (!e) return _s.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function () {
                    _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                        text: "Not allowed to download _s video!"
                    }), _s.isPlaylistDispatchingError_bl = !1
                }, 50));
                if (!e.match(/\.mp3|\.mp4/gi)) return _s.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function () {
                    _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                        text: "Only mp4 video files hosted on your server can be downloaded."
                    }), _s.isPlaylistDispatchingError_bl = !1
                }, 50));
                var o = e,
                    s = location.origin,
                    n = location.pathname;
                if (-1 != n.indexOf(".") && (n = n.substr(0, n.lastIndexOf("/") + 1)), -1 == e.indexOf("http:") && -1 == e.indexOf("https:") && (e = s + n + e), t) {
                    t = (t = decodeURIComponent(t)).replace(/[^A-Z0-9\-\_\.]+/gi, "_"), e = FWDUVPUtils.getValidSource(e);
                    var i = _s.videoDownloaderPath_str;
                    if (_s.dlIframe || (_s.dlIframe = document.createElement("IFRAME"), _s.dlIframe.style.display = "none", document.documentElement.appendChild(_s.dlIframe)), _s.isMbl && !FWDUVPUtils.isAndroid) {
                        if (_s.openDownloadLinkOnMobile_bl) return void window.open(o, "_blank");
                        var a = _s.getValidEmail();
                        if (!a) return;
                        if (null != _s.emailXHR) {
                            try {
                                _s.emailXHR.abort()
                            } catch (e) {}
                            _s.emailXHR.onreadystatechange = null, _s.emailXHR.onerror = null, _s.emailXHR = null
                        }
                        return _s.emailXHR = new XMLHttpRequest, _s.emailXHR.onreadystatechange = function (e) {
                            4 == _s.emailXHR.readyState && (200 == _s.emailXHR.status ? "sent" == _s.emailXHR.responseText ? alert("Email sent.") : alert("Error sending email, _s is a server side error, the php file can't send the email!") : alert("Error sending email: " + _s.emailXHR.status + ": " + _s.emailXHR.statusText))
                        }, _s.emailXHR.onerror = function (e) {
                            try {
                                window.console && console.log(e), window.console && console.log(e.message)
                            } catch (e) {}
                            alert("Error sending email: " + e.message)
                        }, _s.emailXHR.open("get", _s.mailPath_str + "?mail=" + a + "&name=" + t + "&path=" + e, !0), void _s.emailXHR.send()
                    }
                    _s.dlIframe.src = i + "?path=" + e + "&name=" + t
                }
            }, _s.getValidEmail = function () {
                for (var e = prompt("Please enter your email address where the video download link will be sent:"), t = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; !t.test(e) || "" == e;) {
                    if (null === e) return;
                    e = prompt("Please enter a valid email address:")
                }
                return e
            }, _s.loadPlaylist = function (e) {
                if (_s.id = e, _s.playlist_ar = void 0, _s.stopToLoadPlaylist(), !_s.isPlaylistDispatchingError_bl) {
                    clearTimeout(_s.dispatchPlaylistLoadCompleteWidthDelayId_to);
                    var t = _s.catsRef_ar[e];
                    if (void 0 === t) return _s.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function () {
                        _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                            text: "<font color='#ff0000'>loadPlaylist()</font> - Please specify a DOM playlist id or youtube playlist id!"
                        }), _s.isPlaylistDispatchingError_bl = !1
                    }, 50));
                    if (null === t) return _s.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function () {
                        _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                            text: "The playlist with id <font color='#ff0000'>" + _s.cats_ar[e].source + "</font> is not found in the DOM."
                        }), _s.isPlaylistDispatchingError_bl = !1
                    }, 50));
                    if (!isNaN(t)) return _s.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function () {
                        _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                            text: "<font color='#ff0000'>loadPlaylist()</font> - The parameter must be of type string!"
                        }), _s.isPlaylistDispatchingError_bl = !1
                    }, 50));
                    if (_s.resetYutubeVimeoPlaylistLoader(), _s.isYoutbe_bl = !1, _s.loadFromFolder_bl = !1, _s.isVimeoAlbum_bl = !1, _s.playlist_ar = [], _s.playlistPass = _s.cats_ar[e].pass, t.length)
                        if (-1 != t.indexOf("list=") || -1 != t.indexOf("youtube.")) _s.isYoutbe_bl = !0, _s.playlist_ar = _s.plsCache_ar[_s.id], _s.playlist_ar ? _s.youtubePlLoadComplete() : _s.loadYoutubePlaylist(t);
                        else if (-1 != t.indexOf("vimeo.com")) _s.isVimeo_bl = !0, _s.loadVimeoPlaylist(t, _s.cats_ar[e].vimeoUserId, _s.cats_ar[e].clientId, _s.cats_ar[e].vimeoSecret, _s.cats_ar[e].vimeoToken);
                    else {
                        if (-1 != t.indexOf("list=")) return _s.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function () {
                            _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                                text: "Loading youtube playlist is only possible by setting <font color='#ff0000'>useYoutube=\"yes\"</font>."
                            }), _s.isPlaylistDispatchingError_bl = !1
                        }, 50)); - 1 != t.indexOf("folder=") ? _s.loadFolderPlaylist(t) : -1 == t.indexOf(".xml") && -1 == t.indexOf("http:") && -1 == t.indexOf("https:") && -1 == t.indexOf("www.") || _s.loadXMLPlaylist(t)
                    } else _s.parseDOMPlaylist(t, _s.cats_ar[e].source)
                }
            }, _s.loadXMLPlaylist = function (e) {
                if (!_s.isPlaylistDispatchingError_bl) {
                    if ("file:" == document.location.protocol) return _s.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function () {
                        _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                            text: "Loading XML files local is not allowed or possible!. To function properly please test online."
                        }), _s.isPlaylistDispatchingError_bl = !1
                    }, 50));
                    _s.sourceURL_str = e, _s.xhr = new XMLHttpRequest, _s.xhr.onreadystatechange = _s.ajaxOnLoadHandler, _s.xhr.onerror = _s.ajaxOnErrorHandler;
                    try {
                        _s.xhr.open("get", _s.proxyPath_str + "?url=" + _s.sourceURL_str + "&rand=" + parseInt(99999999 * Math.random()), !0), _s.xhr.setRequestHeader("Content-Type", "text/xml"), _s.xhr.send()
                    } catch (e) {
                        var t = e;
                        e && e.message && (t = e.message), _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                            text: "XML file can't be loaded! <font color='#ff0000'>" + _s.sourceURL_str + "</font>. " + t
                        })
                    }
                }
            }, _s.loadFolderPlaylist = function (e) {
                if (!_s.isPlaylistDispatchingError_bl) {
                    if ("file:" == document.location.protocol) return _s.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function () {
                        _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                            text: "Creating a video playlist from a folder is not allowed or possible local! To function properly please test online."
                        }), _s.isPlaylistDispatchingError_bl = !1
                    }, 50));
                    _s.loadFromFolder_bl = !0, _s.sourceURL_str = e.substr(e.indexOf("=") + 1), _s.xhr = new XMLHttpRequest, _s.xhr.onreadystatechange = _s.ajaxOnLoadHandler, _s.xhr.onerror = _s.ajaxOnErrorHandler;
                    try {
                        _s.xhr.open("get", _s.proxyFolderPath_str + "?dir=" + encodeURIComponent(_s.sourceURL_str) + "&videoLabel=" + _s.folderVideoLabel_str + "&rand=" + parseInt(9999999 * Math.random()), !0), _s.xhr.send()
                    } catch (e) {
                        e && e.message && e.message, _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                            text: "Folder proxy file path is not found: <font color='#ff0000'>" + _s.proxyFolderPath_str + "</font>"
                        })
                    }
                }
            }, _s.loadVimeoPlaylist = function (e, t, o, s, n) {
                if ("file:" == document.location.protocol) return _s.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function () {
                    _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                        text: "Loading Vimeo albums local is not allowed or possible! To function properly please test online."
                    }), _s.isPlaylistDispatchingError_bl = !1
                }, 50));
                _s.isVimeoAlbum_bl = !0, e && (_s.vimeoAlbumURL = e), t && (_s.userId = t), o && (_s.clientId = o), s && (_s.vimeoSecret = s), n && (_s.vimeoToken = n);
                var i = (i = _s.vimeoAlbumURL.match(/\/[\d]+/gi))[0].substr(1),
                    a = "";
                _s.clientId && (a = "&client_id=" + _s.clientId + "&vimeo_secret=" + _s.vimeoSecret + "&vimeo_token=" + _s.vimeoToken), _s.nextPageToken_str ? _s.sourceURL_str = _s.mainFolderPath_str + "vimeo/vimeo_data.php?rand=" + Math.round(99999999 * Math.random()) + "&type=vimeo_user_album&user=" + _s.userId + "&album_id=" + i + "&page=" + _s.nextPageToken_str + "&per_page=50" + a : _s.sourceURL_str = _s.mainFolderPath_str + "vimeo/vimeo_data.php?rand=" + Math.round(99999999 * Math.random()) + "&type=vimeo_user_album&user=" + _s.userId + "&album_id=" + i + "&page=1&per_page=50" + a, _s.xhr = new XMLHttpRequest, _s.xhr.onreadystatechange = _s.ajaxOnLoadHandler, _s.xhr.onerror = _s.ajaxOnErrorHandler;
                try {
                    _s.xhr.open("get", _s.sourceURL_str, !0), _s.xhr.send()
                } catch (e) {
                    e && e.message && e.message, _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                        text: "Error loading vimeo album! <font color='#ff0000'>" + _s.vimeoAlbumURL + "</font>"
                    })
                }
            }, _s.parseVimeoPlaylist = function (e) {
                if (_s.stopToLoadPlaylist(), e.body.error) _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                    text: e.body.error + " " + e.body.developer_message
                });
                else {
                    var t;
                    e = e.body, _s.vimeoObject_ar || (_s.vimeoObject_ar = []);
                    for (var o = 0; o < e.data.length; o++) _s.vimeoObject_ar.push(e.data[o]);
                    if (t = _s.vimeoObject_ar.length, e.paging.next) return _s.nextPageToken_str = Number(e.page) + 1, void _s.loadVimeoPlaylist();
                    for (o = 0; o < t; o++) {
                        var s, n = {},
                            i = (s = _s.vimeoObject_ar[o]).uri.match(/\/[\d]+/gi)[0].substr(1);
                        n.startAtVideo = 0, n.videoSource = [{
                            source: "https://vimeo.com/" + i
                        }], n.gaStr = s.name, n.title = "<p class='ytbChangeColor fwduvp-ytb-info-title' style='color:" + _s.youtubeAndFolderVideoTitleColor_str + ";'>" + s.name + "</p>";
                        var a = (a = s.description) || "";
                        a = (a = 165 < n.title.length ? a.substr(0, 60) : a.substr(0, 90)).substr(0, a.lastIndexOf(" ")) + " ...", n.titleText = s.name, n.titleText = s.name, n.desc = void 0, n.desc = "<p class='fwduvp-ytb-info-title' style='color:" + _s.youtubeAndFolderVideoTitleColor_str + ";'>" + s.name + "</p><p class='fwduvp-ytb-info-p' style='color:" + _s.youtubeDescriptionColor_str + ";'>" + s.description + "</p>", n.downloadable = !1;
                        try {
                            n.thumbSource = s.pictures.sizes[2].link
                        } catch (e) {}
                        n.posterSource = "none", n.downloadable = !1, _s.playlist_ar.push(n)
                    }
                    _s.randomizePlaylist_bl && (_s.playlist_ar = FWDUVPUtils.randomizeArray(_s.playlist_ar)), _s.maxPlaylistItems < _s.playlist_ar.length && (_s.playlist_ar = _s.playlist_ar.splice(0, _s.maxPlaylistItems)), clearTimeout(_s.dispatchPlaylistLoadCompleteWidthDelayId_to), _s.dispatchPlaylistLoadCompleteWidthDelayId_to = setTimeout(function () {
                        _s.dispatchEvent(FWDUVPData.PLAYLIST_LOAD_COMPLETE)
                    }, 50), _s.isDataLoaded_bl = !0
                }
            }, _s.loadYoutubePlaylist = function (e) {
                if (!_s.isPlaylistDispatchingError_bl || _s.isYoutbe_bl) {
                    if (_s.isChannel = -1 != e.indexOf("channel/"), _s.url = e, _s.youtubeUrl_str || (e = (-1 != e.indexOf("list=") ? /list=(.*?)(?:&|$)/i.exec(e) : /channel\/(.*?)(?:&|$)/i.exec(e))[1], _s.youtubeUrl_str = e), _s.nextPageToken_str ? _s.isChannel ? _s.sourceURL_str = "https://www.googleapis.com/youtube/v3/search?part=snippet&pageToken=" + _s.nextPageToken_str + "&channelId=" + _s.youtubeUrl_str + "&key=" + _s.youtubeAPIKey + "&maxResults=50&callback=" + prt.instanceName_str + "._d.parseYoutubePlaylist" : _s.sourceURL_str = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&pageToken=" + _s.nextPageToken_str + "&playlistId=" + _s.youtubeUrl_str + "&key=" + _s.youtubeAPIKey + "&maxResults=50&callback=" + prt.instanceName_str + "._d.parseYoutubePlaylist" : _s.isChannel ? _s.sourceURL_str = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=" + _s.youtubeUrl_str + "&key=" + _s.youtubeAPIKey + "&maxResults=50&callback=" + prt.instanceName_str + "._d.parseYoutubePlaylist" : _s.sourceURL_str = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=" + _s.youtubeUrl_str + "&key=" + _s.youtubeAPIKey + "&maxResults=50&callback=" + prt.instanceName_str + "._d.parseYoutubePlaylist", null == _s.scs_el) try {
                        _s.scs_el = document.createElement("script"), _s.scs_el.src = _s.sourceURL_str, _s.scs_el.id = prt.instanceName_str + "._d.parseYoutubePlaylist", document.documentElement.appendChild(_s.scs_el)
                    } catch (e) {}
                    _s.JSONPRequestTimeoutId_to = setTimeout(function () {
                        var e;
                        _s.isChannel && (e = "channel"), _s.JSONPRequestTimeoutError("Error loading youtube " + e + "!<font color='#ff0000'>" + _s.youtubeUrl_str + "</font>")
                    }, 6e3)
                }
            }, _s.JSONPRequestTimeoutError = function (e) {
                _s.stopToLoadPlaylist(), _s.isPlaylistDispatchingError_bl = !0, showLoadPlaylistErrorId_to = setTimeout(function () {
                    _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                        text: e
                    }), _s.isPlaylistDispatchingError_bl = !1
                }, 50)
            }, _s.resetYutubeVimeoPlaylistLoader = function () {
                _s.isYoutbe_bl = !1, _s.youtubeObject_ar = null, _s.vimeoObject_ar = null, _s.nextPageToken_str = null, _s.youtubeUrl_str = null
            }, _s.ajaxOnErrorHandler = function (e) {
                try {
                    window.console && console.log(e), window.console && console.log(e.message)
                } catch (e) {}
                _s.isVimeoAlbum_bl ? _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                    text: "Error loading vimeo album! <font color='#ff0000'>" + _s.vimeoAlbumURL + "</font>"
                }) : _s.loadFromFolder_bl ? _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                    text: "Error loading file : <font color='#ff0000'>" + _s.proxyFolderPath_str + "</font>. Make sure the path is correct"
                }) : _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                    text: "Error loading file : <font color='#ff0000'>" + _s.proxyPath_str + "</font>. Make sure the path is correct"
                })
            }, _s.ajaxOnLoadHandler = function (e) {
                var response, isXML = !1;
                if (4 == _s.xhr.readyState)
                    if (404 == _s.xhr.status) _s.isVimeoAlbum_bl ? _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                        text: "Error loading vimeo album! <font color='#ff0000'>" + _s.vimeoAlbumURL + "</font>"
                    }) : _s.loadFromFolder_bl ? _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                        text: "Folder proxy file path is not found: <font color='#ff0000'>" + _s.proxyFolderPath_str + "</font>"
                    }) : _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                        text: "Proxy file path is not found: <font color='#ff0000'>" + _s.proxyPath_str + "</font>"
                    });
                    else if (408 == _s.xhr.status) _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                    text: "Server has timeout!"
                });
                else if (200 == _s.xhr.status) {
                    if (-1 != _s.xhr.responseText.indexOf("<b>Warning</b>:")) return void _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                        text: "Error loading folder: <font color='#ff0000'>" + _s.sourceURL_str + "</font>. Make sure that the folder path is correct!"
                    });
                    response = window.JSON ? JSON.parse(_s.xhr.responseText) : eval("(" + _s.xhr.responseText + ")"), response.body ? _s.parseVimeoPlaylist(response) : response.folder ? _s.parseFolderJSON(response) : response.li ? _s.parseXML(response) : response.error && _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                        text: "Error loading file: <font color='#ff0000'>" + _s.sourceURL_str + "</font>. Make sure the file path (xml or podcast) is correct and well formatted!"
                    })
                }
            }, _s.parseYoutubePlaylist = function (e) {
                if (!_s.isPlaylistDispatchingError_bl && _s.isYoutbe_bl) {
                    var t, o;
                    if (e.error) return _s.isChannel && (t = "channel"), _s.JSONPRequestTimeoutError("Error loading youtube " + t + "! <font color='#ff0000'>" + _s.youtubeUrl_str + "</font>"), void(console && console.log(e));
                    _s.playlist_ar = [], _s.youtubeObject_ar || (_s.youtubeObject_ar = []);
                    for (var s = 0; s < e.items.length; s++) _s.youtubeObject_ar.push(e.items[s]);
                    if (o = _s.youtubeObject_ar.length, _s.stopToLoadPlaylist(), e.nextPageToken) return _s.nextPageToken_str = e.nextPageToken, void _s.loadYoutubePlaylist(_s.url);
                    for (s = 0; s < o; s++) {
                        var n, i = {};
                        if ((n = _s.youtubeObject_ar[s]).snippet.thumbnails) {
                            _s.isChannel ? i.videoSource = n.id.videoId : i.videoSource = n.snippet.resourceId.videoId, i.startAtVideo = 0, i.videoSource = [{
                                source: "https://www.youtube.com/watch?v=" + i.videoSource
                            }], i.owner = n.snippet.channelTitle, i.gaStr = n.snippet.title, window.isWhite ? _s.youtubeAndFolderVideoTitleColor_str = "#000000" : window.isDark && (_s.youtubeAndFolderVideoTitleColor_str = "#FFFFFF"), i.title = "<p class='ytbChangeColor fwduvp-ytb-title' style='color:" + _s.youtubeAndFolderVideoTitleColor_str + ";'>" + n.snippet.title + "</p>";
                            var a = n.snippet.description;
                            a = (a = 190 < i.title.length ? a.substr(0, 20) : 165 < i.title.length ? a.substr(0, 60) : a.substr(0, 90)).substr(0, a.lastIndexOf(" ")) + " ...", i.title += "<p class='fwduvp-ytb-p' style='color:" + _s.youtubeOwnerColor_str + ";'> " + a + "</p>", i.titleText = n.snippet.title, i.titleText = n.snippet.title, i.desc = void 0, i.desc = "<p class='fwduvp-ytb-info-title' style='color:" + _s.youtubeAndFolderVideoTitleColor_str + ";'>" + n.snippet.title + "</p><p class='fwduvp-ytb-info-p' style='color:" + _s.youtubeDescriptionColor_str + ";'>" + n.snippet.description + "</p>", i.downloadable = !1;
                            try {
                                i.thumbSource = n.snippet.thumbnails.default.url, _s.showOnlyThumbnail && (n.snippet.thumbnails.standard ? i.thumbSource = n.snippet.thumbnails.standard.url : n.snippet.thumbnails.high && (i.thumbSource = n.snippet.thumbnails.high.url))
                            } catch (e) {}
                            i.posterSource = "none", -1 == n.snippet.title.indexOf("eleted video") && -1 == n.snippet.title.indexOf("his video is unavailable") && _s.playlist_ar.push(i)
                        }
                    }
                    _s.randomizePlaylist_bl && (_s.playlist_ar = FWDUVPUtils.randomizeArray(_s.playlist_ar)), _s.maxPlaylistItems < _s.playlist_ar.length && (_s.playlist_ar = _s.playlist_ar.splice(0, _s.maxPlaylistItems)), _s.plsCache_ar[_s.id] = _s.playlist_ar, _s.youtubePlLoadComplete()
                }
            }, _s.youtubePlLoadComplete = function () {
                clearTimeout(_s.dispatchPlaylistLoadCompleteWidthDelayId_to), _s.dispatchPlaylistLoadCompleteWidthDelayId_to = setTimeout(function () {
                    _s.dispatchEvent(FWDUVPData.PLAYLIST_LOAD_COMPLETE)
                }, 50), _s.isDataLoaded_bl = !0
            }, _s.isDataLoaded_bl = !0, _s.setYoutubePlaylistHEXColor = function (e) {
                _s.youtubeAndFolderVideoTitleColor_str = e
            }, _s.closeJsonPLoader = function () {
                clearTimeout(_s.JSONPRequestTimeoutId_to)
            }, _s.parseDOMPlaylist = function (element, id) {
                if (!_s.isPlaylistDispatchingError_bl) {
                    var children_ar = FWDUVPUtils.getChildren(element),
                        totalChildren = children_ar.length,
                        child, has360Video = !1;
                    if (_s.playlist_ar = [], 0 != totalChildren) {
                        for (var i = 0; i < totalChildren; i++) {
                            var obj = {},
                                adsObj, child = children_ar[i],
                                annotations_ar;
                            if (!FWDUVPUtils.hasAttribute(child, "data-thumb-source")) return _s.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function () {
                                _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                                    text: "Attribute <font color='#ff0000'>data-thumb-source</font> is required in the playlist at position <font color='#ff0000'>" + (i + 1)
                                })
                            }, 50));
                            if (!FWDUVPUtils.hasAttribute(child, "data-video-source")) return _s.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function () {
                                _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                                    text: "Attribute <font color='#ff0000'>data-video-source</font> is required in the playlist at position <font color='#ff0000'>" + (i + 1)
                                })
                            }, 50));
                            if (obj.thumbSource = encodeURI(FWDUVPUtils.getAttributeValue(child, "data-thumb-source")), obj.videoSource = FWDUVPUtils.getAttributeValue(child, "data-video-source"), obj._dPlaybackRate = FWDUVPUtils.getAttributeValue(child, "data-playback-rate"), obj.startAtVideo = FWDUVPUtils.getAttributeValue(child, "data-start-at-video") || 0, obj.isLive = FWDUVPUtils.getAttributeValue(child, "data-is-live"), obj.atb = "yes" == FWDUVPUtils.getAttributeValue(child, "data-use-a-to-b"), obj.thumbnailsPreview = FWDUVPUtils.getAttributeValue(child, "data-thumbnails-preview"), _s.useAToB || (obj.atb = !1), "yes" == obj.isLive ? obj.isLive = !0 : obj.isLive = !1, obj.isPrivate = FWDUVPUtils.getAttributeValue(child, "data-is-private"), "yes" == obj.isPrivate ? obj.isPrivate = !0 : obj.isPrivate = !1, obj.redirectURL = FWDUVPUtils.getAttributeValue(child, "data-redirect-url"), obj.redirectTarget = FWDUVPUtils.getAttributeValue(child, "data-redirect-target"), obj.privateVideoPassword_str = FWDUVPUtils.getAttributeValue(child, "data-private-video-password"), obj.startAtTime = FWDUVPUtils.getAttributeValue(child, "data-start-at-time"), "00:00:00" != obj.startAtTime && FWDUVPUtils.checkTime(obj.startAtTime) || (obj.startAtTime = void 0), obj.stopAtTime = FWDUVPUtils.getAttributeValue(child, "data-stop-at-time"), "00:00:00" != obj.stopAtTime && FWDUVPUtils.checkTime(obj.stopAtTime) || (obj.stopAtTime = void 0), -1 != obj.videoSource.indexOf("{source:")) try {
                                obj.videoLabels_ar = [], obj.videoSource = eval(obj.videoSource);
                                for (var m = 0; m < obj.videoSource.length; m++) obj.videoLabels_ar[m] = obj.videoSource[m].label;
                                for (var m = 0; m < obj.videoSource.length; m++) {
                                    var src = obj.videoSource[m].source; - 1 != src.indexOf("encrypt:") && (src = atob(src.substr(8))), obj.videoSource[m].source = FWDUVPUtils.getValidSource(src)
                                }
                                for (var m = 0; m < obj.videoSource.length; m++) obj.videoSource[m].is360, "yes" == obj.videoSource[m].is360 && (obj.videoSource[m].is360 = !0), "no" == obj.videoSource[m].is360 && (obj.videoSource[m].is360 = !1), 1 == obj.videoSource[m].is360 && (has360Video = !0);
                                obj.videoLabels_ar.reverse()
                            } catch (e) {
                                return _s.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function () {
                                    _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                                        text: "Please make sure that the <font color='#ff0000'>data-video-source</font> attribute contains an array of videos at position <font color='#ff0000'>" + (i + 1) + "</font>"
                                    })
                                }, 50))
                            } else src = obj.videoSource, -1 != src.indexOf("encrypt:") && (src = atob(src.substr(8))), obj.videoSource = [{
                                source: FWDUVPUtils.getValidSource(src)
                            }];
                            if (FWDUVPUtils.hasAttribute(child, "data-subtitle-soruce")) {
                                if (obj.subtitleSource = FWDUVPUtils.getAttributeValue(child, "data-subtitle-soruce"), -1 != obj.subtitleSource.indexOf("{source:")) {
                                    if (obj.startAtSubtitle = FWDUVPUtils.getAttributeValue(child, "data-start-at-subtitle") || 0, -1 != obj.subtitleSource.indexOf("{source:")) {
                                        try {
                                            obj.subtitleSource = eval(obj.subtitleSource)
                                        } catch (e) {
                                            return _s.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function () {
                                                _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                                                    text: "Please make sure that the <font color='#ff0000'>data-subtitle-source</font> attribute contains an array of subtitles at position <font color='#ff0000'>" + (i + 1) + "</font>"
                                                })
                                            }, 50))
                                        }
                                        obj.subtitleSource.splice(0, 0, {
                                            source: "none",
                                            label: _s.subtitlesOffLabel_str
                                        }), obj.subtitleSource.reverse()
                                    }
                                } else obj.subtitleSource = [{
                                    source: obj.subtitleSource
                                }];
                                if (obj.subtitleSource)
                                    for (var x = 0; x < obj.subtitleSource.length; x++) {
                                        var source = obj.subtitleSource[x].source; - 1 != source.indexOf("encrypt:") && (obj.subtitleSource[x].source = atob(source.substr(8)))
                                    }
                            }
                            obj._dAdvertisementOnPauseSource = FWDUVPUtils.getAttributeValue(child, "data-advertisement-on-pause-source"), obj.scrubAtTimeAtFirstPlay = FWDUVPUtils.getAttributeValue(child, "data-scrub-at-time-at-first-play") || "none", /^((?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$)/g.test(obj.scrubAtTimeAtFirstPlay) ? obj.scrubAtTimeAtFirstPlay = FWDUVPUtils.getSecondsFromString(obj.scrubAtTimeAtFirstPlay) : obj.scrubAtTimeAtFirstPlay = void 0, FWDUVPUtils.hasAttribute(child, "data-poster-source") ? obj.posterSource = encodeURI(FWDUVPUtils.getAttributeValue(child, "data-poster-source")) : obj.posterSource = "none", obj.downloadPath = obj.videoSource[obj.startAtVideo], FWDUVPUtils.hasAttribute(child, "data-downloadable") && _s.showDownloadVideoButton_bl ? (obj.downloadable = "yes" == FWDUVPUtils.getAttributeValue(child, "data-downloadable"), -1 == obj.downloadPath.source.indexOf(".") && (obj.downloadable = !1)) : obj.downloadable = !1, FWDUVPUtils.hasAttribute(child, "data-play-if-logged-in") && (obj.playIfLoggedIn = FWDUVPUtils.getAttributeValue(child, "data-play-if-logged-in"), "no" == obj.playIfLoggedIn && (obj.playIfLoggedIn = void 0));
                            for (var mainPopupAds_ar = FWDUVPUtils.getChildren(child), tempPopupAds_ar, popupAds_ar, popupOrAnnotationChild, finalPopupChild, popupObj, k = 0, adsChild, vsrc, cuepointsChild; k < mainPopupAds_ar.length; k++) {
                                if (popupOrAnnotationChild = mainPopupAds_ar[k], FWDUVPUtils.hasAttribute(popupOrAnnotationChild, "data-add-popup")) {
                                    tempPopupAds_ar = FWDUVPUtils.getChildren(popupOrAnnotationChild), popupAds_ar = [];
                                    for (var x = 0; x < tempPopupAds_ar.length; x++) finalPopupChild = tempPopupAds_ar[x], finalPopupChild && (popupObj = {}, popupObj.source = FWDUVPUtils.getValidSource(FWDUVPUtils.getAttributeValue(finalPopupChild, "data-image-path")), popupObj.timeStart = FWDUVPUtils.getSecondsFromString(FWDUVPUtils.getAttributeValue(finalPopupChild, "data-time-start")), popupObj.timeEnd = FWDUVPUtils.getSecondsFromString(FWDUVPUtils.getAttributeValue(finalPopupChild, "data-time-end")), popupObj.link = FWDUVPUtils.getAttributeValue(finalPopupChild, "data-link"), popupObj.target = FWDUVPUtils.getAttributeValue(finalPopupChild, "data-target"), popupObj.google_ad_width = parseInt(FWDUVPUtils.getAttributeValue(finalPopupChild, "data-google-ad-width")) || 600, popupObj.google_ad_height = parseInt(FWDUVPUtils.getAttributeValue(finalPopupChild, "data-google-ad-height")) || 200, popupObj.google_ad_client = FWDUVPUtils.getAttributeValue(finalPopupChild, "data-google-ad-client"), popupObj.google_ad_slot = FWDUVPUtils.getAttributeValue(finalPopupChild, "data-google-ad-slot"), popupAds_ar.push(popupObj));
                                    obj.popupAds_ar = popupAds_ar
                                }
                                if (FWDUVPUtils.hasAttribute(popupOrAnnotationChild, "data-ads")) {
                                    adsData_ar = FWDUVPUtils.getChildren(popupOrAnnotationChild), ads_ar = [];
                                    for (var tt = adsData_ar.length, m = 0; m < tt; m++) {
                                        var adsObj = {},
                                            adsChild = adsData_ar[m];
                                        adsObj.timeStart = FWDUVPUtils.getSecondsFromString(FWDUVPUtils.getAttributeValue(adsChild, "data-time-start")), FWDUVPUtils.hasAttribute(adsChild, "data-add-duration") && (adsObj.addDuration = FWDUVPUtils.getSecondsFromString(FWDUVPUtils.getAttributeValue(adsChild, "data-add-duration"))), adsObj.thumbnailSource = FWDUVPUtils.getAttributeValue(adsChild, "data-thumbnail-source"), "" != adsObj.thumbnailSource && " " != adsObj.thumbnailSource || (adsObj.thumbnailSource = void 0), adsObj.timeToHoldAds = parseInt(FWDUVPUtils.getAttributeValue(adsChild, "data-time-to-hold-ads") || 4), adsObj.source = FWDUVPUtils.getValidSource(FWDUVPUtils.getAttributeValue(adsChild, "data-source")), adsObj.link = FWDUVPUtils.getAttributeValue(adsChild, "data-link"), adsObj.target = FWDUVPUtils.getAttributeValue(adsChild, "data-target"), ads_ar[m] = adsObj
                                    }
                                    obj.ads_ar = ads_ar
                                }
                                if (FWDUVPUtils.hasAttribute(child, "data-vast-url") && (obj.ads_ar = void 0, vsrc = FWDUVPUtils.getAttributeValue(child, "data-vast-url"), FWDUVPUtils.isIMA(vsrc) ? obj.imaURL = vsrc : (obj.vastURL = vsrc, obj.vastClickTroughTarget = FWDUVPUtils.getAttributeValue(child, "data-vast-clicktrough-target") || "_blank", obj.vastLinearStartTime = FWDUVPUtils.getAttributeValue(child, "data-vast-linear-astart-at-time") || "00:00:00")), FWDUVPUtils.hasAttribute(popupOrAnnotationChild, "data-cuepoints")) {
                                    cuepointsData_ar = FWDUVPUtils.getChildren(popupOrAnnotationChild), cuepoints_ar = [];
                                    for (var tt = cuepointsData_ar.length, m = 0; m < tt; m++) {
                                        var cuepointsObj = {},
                                            cuepointsChild = cuepointsData_ar[m];
                                        cuepointsObj.timeStart = FWDUVPUtils.getSecondsFromString(FWDUVPUtils.getAttributeValue(cuepointsChild, "data-time-start")), cuepointsObj.javascriptCall = FWDUVPUtils.getAttributeValue(cuepointsChild, "data-javascript-call"), cuepointsObj.isPlayed_bl = !1, cuepoints_ar[m] = cuepointsObj
                                    }
                                    obj.cuepoints_ar = cuepoints_ar
                                }
                                if (FWDUVPUtils.hasAttribute(popupOrAnnotationChild, "data-annotations")) {
                                    for (var annotationChild, annotations_ar = FWDUVPUtils.getChildren(popupOrAnnotationChild), tt = annotations_ar.length, m = 0; m < tt; m++) {
                                        var annotationObj = {},
                                            annotationChild = annotations_ar[m];
                                        annotationObj.start = FWDUVPUtils.getSecondsFromString(FWDUVPUtils.getAttributeValue(annotationChild, "data-start-time")), annotationObj.end = FWDUVPUtils.getSecondsFromString(FWDUVPUtils.getAttributeValue(annotationChild, "data-end-time")), annotationObj.left = parseInt(FWDUVPUtils.getAttributeValue(annotationChild, "data-left"), 10), annotationObj.top = parseInt(FWDUVPUtils.getAttributeValue(annotationChild, "data-top"), 10), annotationObj.showCloseButton_bl = "yes" == FWDUVPUtils.getAttributeValue(annotationChild, "data-show-close-button"), annotationObj.clickSource = FWDUVPUtils.getAttributeValue(annotationChild, "data-click-source"), annotationObj.clickSourceTarget = FWDUVPUtils.getAttributeValue(annotationChild, "data-click-source-target"), annotationObj.normalStateClass = FWDUVPUtils.getAttributeValue(annotationChild, "data-normal-state-class"), annotationObj.selectedStateClass = FWDUVPUtils.getAttributeValue(annotationChild, "data-selected-state-class"), annotationObj.content = annotationChild.innerHTML, annotations_ar[m] = annotationObj
                                    }
                                    obj.annotations_ar = annotations_ar
                                }
                            }
                            var descChidren_ar = FWDUVPUtils.getChildren(child),
                                descChild;
                            obj.title = "not defined!", obj.titleText = "not defined!";
                            for (var k = 0; k < descChidren_ar.length; k++) descChild = descChidren_ar[k], FWDUVPUtils.hasAttribute(descChild, "data-video-short-description") ? (obj.title = descChild.innerHTML, obj.titleText = descChild.textContent, obj.titleText = obj.titleText.replace(/^\s+/g, "")) : FWDUVPUtils.hasAttribute(descChild, "data-video-long-description") && (obj.desc = descChild.innerHTML);
                            gaStr = obj.titleText.split("\n");
                            for (var x = 0; x < gaStr.length; x++)
                                if (2 < gaStr[x].length) {
                                    obj.gaStr = gaStr[x];
                                    break
                                } FWDUVPUtils.hasAttribute(child, "data-ads-source") && (adsObj = {}, adsObj.source = FWDUVPUtils.getValidSource(FWDUVPUtils.getAttributeValue(child, "data-ads-source")), adsObj.pageToOpen = FWDUVPUtils.getAttributeValue(child, "data-ads-page-to-open-url"), adsObj.pageTarget = FWDUVPUtils.getAttributeValue(child, "data-ads-page-target") || "_blank", adsObj.timeToHoldAds = parseInt(FWDUVPUtils.getAttributeValue(child, "data-time-to-hold-ads")) || 0, obj.ads = adsObj), _s.playlist_ar[i] = obj
                        }
                        _s.randomizePlaylist_bl && (_s.playlist_ar = FWDUVPUtils.randomizeArray(_s.playlist_ar)), _s.maxPlaylistItems < _s.playlist_ar.length && (_s.playlist_ar = _s.playlist_ar.splice(0, _s.maxPlaylistItems)), clearTimeout(_s.dispatchPlaylistLoadCompleteWidthDelayId_to), _s.dispatchPlaylistLoadCompleteWidthDelayId_to = setTimeout(function () {
                            _s.dispatchEvent(FWDUVPData.PLAYLIST_LOAD_COMPLETE)
                        }, 50), _s.isDataLoaded_bl = !0
                    } else showLoadPlaylistErrorId_to = setTimeout(function () {
                        _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                            text: "At least one video is required in the playlist with id: <font color='#ff0000'>" + id + "</font>"
                        }), _s.isPlaylistDispatchingError_bl = !1
                    }, 50)
                }
            }, _s.parseFolderJSON = function (e) {
                var t;
                _s.playlist_ar = [];
                for (var o = e.folder, s = 0; s < o.length; s++)(t = {}).videoSource = encodeURI(o[s]["@attributes"]["data-video-path"]), t.videoSource = o[s]["@attributes"]["data-video-path"], t._dPlaybackRate = o[s]["@attributes"]["data-playback-rate"], t.startAtVideo = o[s]["@attributes"]["data-start-at-video"] || 0, t.videoSource = [{
                    source: FWDUVPUtils.getValidSource(t.videoSource)
                }], t.thumbSource = encodeURI(o[s]["@attributes"]["data-thumb-path"]), t.posterSource = encodeURI(o[s]["@attributes"]["data-poster-path"]), t.downloadPath = encodeURIComponent(o[s]["@attributes"]["download-path"]), t.downloadable = _s.showDownloadVideoButton_bl, _s.forceDisableDownloadButtonForFolder_bl && (t.downloadable = !1), t.titleText = "...", t.title = "<p class='fwduvp-thumbnail-title' style='color:" + _s.youtubeAndFolderVideoTitleColor_str + "'>...</p>", t.titleText = o[s]["@attributes"]["data-title"], t.title = "<p class='fwduvp-thumbnail-title' style='color:" + _s.youtubeAndFolderVideoTitleColor_str + "'>" + o[s]["@attributes"]["data-title"] + "</p>", t.desc = void 0, _s.playlist_ar[s] = t;
                _s.randomizePlaylist_bl && (_s.playlist_ar = FWDUVPUtils.randomizeArray(_s.playlist_ar)), _s.maxPlaylistItems < _s.playlist_ar.length && (_s.playlist_ar = _s.playlist_ar.splice(0, _s.maxPlaylistItems)), clearTimeout(_s.dispatchPlaylistLoadCompleteWidthDelayId_to), _s.dispatchPlaylistLoadCompleteWidthDelayId_to = setTimeout(function () {
                    _s.dispatchEvent(FWDUVPData.PLAYLIST_LOAD_COMPLETE)
                }, 50), _s.isDataLoaded_bl = !0
            }, _s.parseXML = function (response) {
                var obj;
                _s.playlist_ar = [];
                var obj_ar = response.li,
                    has360Video = !1;
                obj_ar.length || (obj_ar = [obj_ar]);
                for (var i = 0, vsrc; i < obj_ar.length; i++) {
                    if (obj = {}, obj.videoSource = obj_ar[i]["@attributes"]["data-video-source"], obj.startAtVideo = obj_ar[i]["@attributes"]["data-start-at-video"] || 0, obj.isLive = obj_ar[i]["@attributes"]["data-is-live"], obj.atb = "yes" == obj_ar[i]["@attributes"]["data-use-a-to-b"], _s.useAToB || (obj.atb = !1), obj.isPrivate = obj_ar[i]["@attributes"]["data-is-private"], "yes" == obj.isPrivate ? obj.isPrivate = !0 : obj.isPrivate = !1, obj_ar[i]["@attributes"]["data-play-if-logged-in"] && (obj.playIfLoggedIn = obj_ar[i]["@attributes"]["data-play-if-logged-in"], "no" == obj.playIfLoggedIn && (obj.playIfLoggedIn = void 0)), obj.privateVideoPassword_str = obj_ar[i]["@attributes"]["data-private-video-password"], obj.startAtTime = obj_ar[i]["@attributes"]["data-start-at-time"], "00:00:00" != obj.startAtTime && FWDUVPUtils.checkTime(obj.startAtTime) || (obj.startAtTime = void 0), obj.stopAtTime = obj_ar[i]["@attributes"]["data-stop-at-time"], "00:00:00" != obj.stopAtTime && FWDUVPUtils.checkTime(obj.stopAtTime) || (obj.stopAtTime = void 0), -1 != obj.videoSource.indexOf("{source:")) try {
                        obj.videoLabels_ar = [], obj.videoSource = eval(obj.videoSource);
                        for (var m = 0; m < obj.videoSource.length; m++) obj.videoLabels_ar[m] = obj.videoSource[m].label;
                        for (var m = 0; m < obj.videoSource.length; m++) {
                            var src = obj.videoSource[m].source; - 1 != src.indexOf("encrypt:") && (src = atob(src.substr(8))), obj.videoSource[m].source = FWDUVPUtils.getValidSource(src)
                        }
                        for (var m = 0; m < obj.videoSource.length; m++) obj.videoSource[m].is360, "yes" == obj.videoSource[m].is360 && (obj.videoSource[m].is360 = !0), "no" == obj.videoSource[m].is360 && (obj.videoSource[m].is360 = !1), 1 == obj.videoSource[m].is360 && (has360Video = !0);
                        obj.videoLabels_ar.reverse()
                    } catch (e) {
                        return _s.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function () {
                            _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                                text: "Please make sure that the <font color='#ff0000'>data-video-source</font> attribute contains an array of videos at position <font color='#ff0000'>" + (i + 1) + "</font>"
                            })
                        }, 50))
                    } else {
                        var src = obj.videoSource; - 1 != src.indexOf("encrypt:") && (src = atob(src.substr(8))), obj.videoSource = [{
                            source: FWDUVPUtils.getValidSource(src)
                        }]
                    }
                    if (obj.subtitleSource = obj_ar[i]["@attributes"]["data-subtitle-soruce"], obj.startAtSubtitle = obj_ar[i]["@attributes"]["data-start-at-subtitle"] || 0, obj.subtitleSource) {
                        if (-1 != obj.subtitleSource.indexOf("{source:")) {
                            if (-1 != obj.subtitleSource.indexOf("{source:")) {
                                try {
                                    obj.subtitleSource = eval(obj.subtitleSource), -1 != obj.subtitleSource.indexOf("encrypt:") && (obj.subtitleSource = atob(src.substr(8)))
                                } catch (e) {
                                    return _s.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function () {
                                        _s.dispatchEvent(FWDRVPData.LOAD_ERROR, {
                                            text: "Please make sure that the <font color='#ff0000'>data-subtitle-source</font> attribute contains an array of subtitles at position <font color='#ff0000'>" + (i + 1) + "</font>"
                                        })
                                    }, 50))
                                }
                                obj.subtitleSource.splice(0, 0, {
                                    source: "none",
                                    label: _s.subtitlesOffLabel_str
                                }), obj.subtitleSource.reverse()
                            }
                        } else obj.subtitleSource = [{
                            source: obj.subtitleSource
                        }];
                        if (obj.subtitleSource)
                            for (var x = 0; x < obj.subtitleSource.length; x++) {
                                var source = obj.subtitleSource[x].source; - 1 != source.indexOf("encrypt:") && (obj.subtitleSource[x].source = atob(source.substr(8)))
                            }
                    }
                    obj._dAdvertisementOnPauseSource = obj_ar[i]["@attributes"]["data-advertisement-on-pause-source"], obj.scrubAtTimeAtFirstPlay = obj_ar[i]["@attributes"]["data-scrub-at-time-at-first-play"], obj.scrubAtTimeAtFirstPlay && /^((?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$)/g.test(obj.scrubAtTimeAtFirstPlay) && (obj.scrubAtTimeAtFirstPlay = FWDUVPUtils.getSecondsFromString(obj.scrubAtTimeAtFirstPlay)), obj.downloadPath = obj.videoSource[obj.startAtVideo], obj.downloadable = "yes" == obj_ar[i]["@attributes"]["data-downloadable"], -1 == obj.videoSource[0].source.indexOf(".") && (obj.downloadable = !1), obj.posterSource = encodeURI(obj_ar[i]["@attributes"]["data-poster-source"]), obj.thumbSource = obj_ar[i]["@attributes"]["data-thumb-source"], obj.title = obj_ar[i]["@attributes"]["data-title"], obj.titleText = obj_ar[i]["@attributes"]["data-title"], obj.desc = obj_ar[i]["@attributes"]["data-desc"], obj.gaStr = obj.titleText, obj_ar[i]["@attributes"]["data-ads-source"] && (adsObj = {}, adsObj.source = FWDUVPUtils.getValidSource(obj_ar[i]["@attributes"]["data-ads-source"]), adsObj.pageToOpen = obj_ar[i]["@attributes"]["data-ads-page-to-open-url"], adsObj.pageTarget = obj_ar[i]["@attributes"]["data-ads-page-target"] || "_blank", adsObj.timeToHoldAds = obj_ar[i]["@attributes"]["data-time-to-hold-ads"] || 0, obj.ads = adsObj), obj_ar[i]["@attributes"]["data-vast-url"] && (obj.ads_ar = void 0, vsrc = obj_ar[i]["@attributes"]["data-vast-url"], FWDUVPUtils.isIMA(vsrc) ? obj.imaURL = vsrc : (obj.vastURL = vsrc, obj.vastClickTroughTarget = obj_ar[i]["@attributes"]["data-vast-clicktrough-target"], obj.vastLinearStartTime = obj_ar[i]["@attributes"]["data-vast-linear-astart-at-time"] || "00:00:00")), obj_ar[i]["@attributes"]["data-cuepoints"] && (adsObj = {}, adsObj.timeStart = obj_ar[i]["@attributes"]["data-time-start"], adsObj.javascriptCall = obj_ar[i]["@attributes"]["data-javascript-call"], adsObj.isPlayed_bl = !1, obj.cuepoints_ar = adsObj), _s.playlist_ar[i] = obj
                }
                _s.randomizePlaylist_bl && (_s.playlist_ar = FWDUVPUtils.randomizeArray(_s.playlist_ar)), _s.maxPlaylistItems < _s.playlist_ar.length && (_s.playlist_ar = _s.playlist_ar.splice(0, _s.maxPlaylistItems)), clearTimeout(_s.dispatchPlaylistLoadCompleteWidthDelayId_to), _s.dispatchPlaylistLoadCompleteWidthDelayId_to = setTimeout(function () {
                    _s.dispatchEvent(FWDUVPData.PLAYLIST_LOAD_COMPLETE)
                }, 50), _s.isDataLoaded_bl = !0
            }, _s.setVastSource = function (e, t) {
                if (!_s.vastLoaded_bl) {
                    _s.vastScript = document.createElement("script");
                    _s.scripts[_s.countLoadedSCript];
                    return document.head.appendChild(_s.vastScript), _s.vastScript.src = _s.mainFolderPath_str + "java/FWDUVPVast.js", _s.vastScript.onload = function () {
                        FWDUVPVast.setPrototype(), _s.vast = new FWDUVPVast(_s), _s.vast.setSource(e, t)
                    }, _s.vastScript.onerror = function (e) {
                        _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                            text: 'VAST js plugin named <font color="#FF0000">FWDUVPVast.js</font> is not found. Please make sure that the content folder contains the java folder that contains the <font color="#FF0000">FWDUVPVast.js</font> file. '
                        })
                    }, void(_s.vastLoaded_bl = !0)
                }
                _s.vast.setSource(e)
            }, _s.closeVast = function () {
                _s.vast && _s.vast.closeVast()
            }, _s.fixVmapTimes = function (e, t, o, s) {
                _s.vast && _s.vast.fixVmapTimes(e, t, o, s)
            }, _s.resetVastId = function () {
                _s.vast && (_s.vast.id = -1)
            }, _s.showPropertyError = function (e) {
                _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                    text: "The property called <font color='#FF0000'>" + e + "</font> is not defined."
                })
            }, _s.stopToLoadPlaylist = function () {
                _s.closeJsonPLoader();
                try {
                    _s.scs_el.src = null, document.documentElement.removeChild(_s.scs_el), _s.scs_el = null
                } catch (e) {}
                if (null != _s.xhr) {
                    try {
                        _s.xhr.abort()
                    } catch (e) {}
                    _s.xhr.onreadystatechange = null, _s.xhr.onerror = null, _s.xhr = null
                }
            }, _s.showPropertyError = function (e) {
                _s.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                    text: "The property called <font color='#ff0000'>" + e + "</font> is not defined."
                })
            }, _s.init()
        };
        FWDUVPData.setPrototype = function () {
            FWDUVPData.prototype = new FWDUVPEventDispatcher
        }, FWDUVPData.prototype = null, FWDUVPData.VAST_LOADING = "vastLoading", FWDUVPData.VAST_LOADED = "vastLoaded", FWDUVPData.PLAYLIST_LOAD_COMPLETE = "playlistLoadComplete", FWDUVPData.PRELOADER_LOAD_DONE = "onPreloaderLoadDone", FWDUVPData.LOAD_DONE = "onLoadDone", FWDUVPData.LOAD_ERROR = "onLoadError", FWDUVPData.IMAGE_LOADED = "onImageLoaded", FWDUVPData.SKIN_LOAD_COMPLETE = "onSkinLoadComplete", FWDUVPData.SKIN_PROGRESS = "onSkinProgress", FWDUVPData.IMAGES_PROGRESS = "onImagesPogress", FWDUVPData.IMA_READY = "imaReady", FWDUVPData.IMA_ERROR = "ima_error", window.FWDUVPData = FWDUVPData
    }(window), window.FWDUVPDisplayObject = function (e, t, o, s) {
        var i = this;
        i.listeners = {
            events_ar: []
        }, i.type = e, i.children_ar = [], i.style, i.screen, i.transform, i.position = t || "absolute", i.overflow = o || "hidden", i.display = s || "inline-block", i.visible = !0, i.buttonMode, i.x = 0, i.y = 0, i.w = 0, i.h = 0, i.rect, i.alpha = 1, i.innerHTML = "", i.opacityType = "", i.isHtml5_bl = !1, i.hasTransform3d_bl = FWDUVPUtils.hasTransform3d, i.hasTransform2d_bl = FWDUVPUtils.hasTransform2d, i.hasBeenSetSelectable_bl = !1, i.init = function () {
            i.setScreen()
        }, i.getTransform = function () {
            for (var e, t = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"]; e = t.shift();)
                if (void 0 !== i.screen.style[e]) return e;
            return !1
        }, i.getOpacityType = function () {
            var e = void 0 !== i.screen.style.opacity ? "opacity" : "filter";
            return e
        }, i.setScreen = function (e) {
            "img" == i.type && e ? (i.screen = null, i.screen = e) : i.screen = document.createElement(i.type), i.setMainProperties()
        }, i.setMainProperties = function () {
            i.transform = i.getTransform(), i.setPosition(i.position), i.setOverflow(i.overflow), i.opacityType = i.getOpacityType(), "opacity" == i.opacityType && (i.isHtml5_bl = !0), "filter" == i.opacityType && (i.screen.style.filter = "inherit"), i.screen.style.left = "0px", i.screen.style.top = "0px", i.screen.style.margin = "0px", i.screen.style.padding = "0px", i.screen.style.maxWidth = "none", i.screen.style.maxHeight = "none", i.screen.style.border = "none", i.screen.style.lineHeight = "1", i.screen.style.backfaceVisibility = "hidden", i.screen.style.webkitBackfaceVisibility = "hidden", i.screen.style.MozBackfaceVisibility = "hidden", "img" == e && (i.setWidth(i.screen.width), i.setHeight(i.screen.height))
        }, i.setBackfaceVisibility = function () {
            i.screen.style.backfaceVisibility = "visible", i.screen.style.webkitBackfaceVisibility = "visible", i.screen.style.MozBackfaceVisibility = "visible"
        }, i.setSelectable = function (e) {
            e ? (FWDUVPUtils.isFirefox || FWDUVPUtils.isIE ? (i.screen.style.userSelect = "element", i.screen.style.MozUserSelect = "element", i.screen.style.msUserSelect = "element") : FWDUVPUtils.isSafari ? (i.screen.style.userSelect = "text", i.screen.style.webkitUserSelect = "text") : (i.screen.style.userSelect = "auto", i.screen.style.webkitUserSelect = "auto"), i.screen.style.khtmlUserSelect = "auto", i.screen.style.oUserSelect = "auto", FWDUVPUtils.isIEAndLessThen9 ? (i.screen.ondragstart = null, i.screen.onselectstart = null, i.screen.ontouchstart = null) : (i.screen.ondragstart = void 0, i.screen.onselectstart = void 0, i.screen.ontouchstart = void 0), i.screen.style.webkitTouchCallout = "default", i.hasBeenSetSelectable_bl = !1) : (i.screen.style.userSelect = "none", i.screen.style.MozUserSelect = "none", i.screen.style.webkitUserSelect = "none", i.screen.style.khtmlUserSelect = "none", i.screen.style.oUserSelect = "none", i.screen.style.msUserSelect = "none", i.screen.msUserSelect = "none", i.screen.ondragstart = function (e) {
                return !1
            }, i.screen.onselectstart = function () {
                return !1
            }, i.screen.ontouchstart = function () {
                return !1
            }, i.screen.style.webkitTouchCallout = "none", i.hasBeenSetSelectable_bl = !0)
        }, i.getScreen = function () {
            return i.screen
        }, i.setVisible = function (e) {
            i.visible = e, 1 == i.visible ? i.screen.style.visibility = "visible" : i.screen.style.visibility = "hidden"
        }, i.getVisible = function () {
            return i.visible
        }, i.setResizableSizeAfterParent = function () {
            i.screen.style.width = "100%", i.screen.style.height = "100%"
        }, i.getStyle = function () {
            return i.screen.style
        }, i.setOverflow = function (e) {
            i.overflow = e, i.screen.style.overflow = i.overflow
        }, i.setPosition = function (e) {
            i.position = e, i.screen.style.position = i.position
        }, i.setDisplay = function (e) {
            i.display = e, i.screen.style.display = i.display
        }, i.setButtonMode = function (e) {
            i.buttonMode = e, 1 == i.buttonMode ? i.screen.style.cursor = "pointer" : i.screen.style.cursor = "default"
        }, i.setBkColor = function (e) {
            i.screen.style.backgroundColor = e
        }, i.setInnerHTML = function (e) {
            i.innerHTML = e, i.screen.innerHTML = i.innerHTML
        }, i.getInnerHTML = function () {
            return i.innerHTML
        }, i.getRect = function () {
            return i.screen.getBoundingClientRect()
        }, i.setAlpha = function (e) {
            i.alpha = e, "opacity" == i.opacityType ? i.screen.style.opacity = i.alpha : "filter" == i.opacityType && (i.screen.style.filter = "alpha(opacity=" + 100 * i.alpha + ")", i.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(100 * i.alpha) + ")")
        }, i.getAlpha = function () {
            return i.alpha
        }, i.getRect = function () {
            return i.screen.getBoundingClientRect()
        }, i.getGlobalX = function () {
            return i.getRect().left
        }, i.getGlobalY = function () {
            return i.getRect().top
        }, i.setX = function (e) {
            i.x = e, i.hasTransform3d_bl ? i.screen.style[i.transform] = "translate3d(" + i.x + "px," + i.y + "px,0)" : i.hasTransform2d_bl ? i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px)" : i.screen.style.left = i.x + "px"
        }, i.getX = function () {
            return i.x
        }, i.setY = function (e) {
            i.y = e, i.hasTransform3d_bl ? i.screen.style[i.transform] = "translate3d(" + i.x + "px," + i.y + "px,0)" : i.hasTransform2d_bl ? i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px)" : i.screen.style.top = i.y + "px"
        }, i.getY = function () {
            return i.y
        }, i.setWidth = function (e) {
            i.w = e, "img" == i.type && (i.screen.width = i.w), i.screen.style.width = i.w + "px"
        }, i.getWidth = function () {
            return "div" == i.type || "input" == i.type ? 0 != i.screen.offsetWidth ? i.screen.offsetWidth : i.w : "img" == i.type ? 0 != i.screen.offsetWidth ? i.screen.offsetWidth : 0 != i.screen.width ? i.screen.width : i._w : "canvas" == i.type ? 0 != i.screen.offsetWidth ? i.screen.offsetWidth : i.w : void 0
        }, i.setHeight = function (e) {
            i.h = e, "img" == i.type && (i.screen.height = i.h), i.screen.style.height = i.h + "px"
        }, i.getHeight = function () {
            return "div" == i.type || "input" == i.type ? 0 != i.screen.offsetHeight ? i.screen.offsetHeight : i.h : "img" == i.type ? 0 != i.screen.offsetHeight ? i.screen.offsetHeight : 0 != i.screen.height ? i.screen.height : i.h : "canvas" == i.type ? 0 != i.screen.offsetHeight ? i.screen.offsetHeight : i.h : void 0
        }, i.addChild = function (e) {
            i.contains(e) && i.children_ar.splice(FWDUVPUtils.indexOfArray(i.children_ar, e), 1), i.children_ar.push(e), i.screen.appendChild(e.screen)
        }, i.removeChild = function (e) {
            if (!i.contains(e)) throw Error("##removeChild()## Child dose't exist, it can't be removed!");
            i.children_ar.splice(FWDUVPUtils.indexOfArray(i.children_ar, e), 1), i.screen.removeChild(e.screen)
        }, i.contains = function (e) {
            return -1 != FWDUVPUtils.indexOfArray(i.children_ar, e)
        }, i.addChildAt = function (e, t) {
            if (0 == i.getNumChildren()) i.children_ar.push(e), i.screen.appendChild(e.screen);
            else if (1 == t) i.screen.insertBefore(e.screen, i.children_ar[0].screen), i.screen.insertBefore(i.children_ar[0].screen, e.screen), i.contains(e) ? i.children_ar.splice(FWDUVPUtils.indexOfArray(i.children_ar, e), 1, e) : i.children_ar.splice(FWDUVPUtils.indexOfArray(i.children_ar, e), 0, e);
            else {
                if (t < 0 || t > i.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!");
                i.screen.insertBefore(e.screen, i.children_ar[t].screen), i.contains(e) ? i.children_ar.splice(FWDUVPUtils.indexOfArray(i.children_ar, e), 1, e) : i.children_ar.splice(FWDUVPUtils.indexOfArray(i.children_ar, e), 0, e)
            }
        }, i.getChildAt = function (e) {
            if (e < 0 || e > i.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!");
            if (0 == i.getNumChildren()) throw Error("##getChildAt## Child dose not exist!");
            return i.children_ar[e]
        }, i.getChildIndex = function (e) {
            return i.contains(e) ? FWDUVPUtils.indexOfArray(i.children_ar, e) : 0
        }, i.removeChildAtZero = function () {
            i.screen.removeChild(i.children_ar[0].screen), i.children_ar.shift()
        }, i.getNumChildren = function () {
            return i.children_ar.length
        }, i.addListener = function (e, t) {
            if (null == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function.");
            var o = {};
            o.type = e, o.listener = t, (o.target = i).listeners.events_ar.push(o)
        }, i.dispatchEvent = function (e, t) {
            if (null != i.listeners) {
                if (null == e) throw Error("type is required.");
                if ("object" == typeof e) throw Error("type must be of type String.");
                for (var o = 0, s = i.listeners.events_ar.length; o < s; o++)
                    if (i.listeners.events_ar[o].target === i && i.listeners.events_ar[o].type === e) {
                        if (t)
                            for (var n in t) i.listeners.events_ar[o][n] = t[n];
                        i.listeners.events_ar[o].listener.call(i, i.listeners.events_ar[o])
                    }
            }
        }, i.removeListener = function (e, t) {
            if (null == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function." + e);
            for (var o = 0, s = i.listeners.events_ar.length; o < s; o++)
                if (i.listeners.events_ar[o].target === i && i.listeners.events_ar[o].type === e && i.listeners.events_ar[o].listener === t) {
                    i.listeners.events_ar.splice(o, 1);
                    break
                }
        }, i.disposeImage = function () {
            "img" == i.type && (i.screen.src = null)
        }, i.destroy = function () {
            i.hasBeenSetSelectable_bl && (i.screen.ondragstart = null, i.screen.onselectstart = null, i.screen.ontouchstart = null), i.screen.removeAttribute("style"), i.listeners = [], i.listeners = null, i.children_ar = [], i.children_ar = null, i.style = null, i.screen = null, i.transform = null, i.position = null, i.overflow = null, i.display = null, i.visible = null, i.buttonMode = null, i.x = null, i.y = null, i.w = null, i.h = null, i.rect = null, i.alpha = null, i.innerHTML = null, i.opacityType = null, i.isHtml5_bl = null, i.hasTransform3d_bl = null, i.hasTransform2d_bl = null, i = null
        }, i.init()
    }, void 0 === asual && (asual = {}), void 0 === asual.util && (asual.util = {}), asual.util.Browser = new function () {
        var e = navigator.userAgent.toLowerCase(),
            t = /webkit/.test(e),
            o = /opera/.test(e),
            s = /msie/.test(e) && !/opera/.test(e),
            n = /mozilla/.test(e) && !/(compatible|webkit)/.test(e),
            i = parseFloat(s ? e.substr(e.indexOf("msie") + 4) : (e.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1]);
        this.toString = function () {
            return "[class Browser]"
        }, this.getVersion = function () {
            return i
        }, this.isMSIE = function () {
            return s
        }, this.isSafari = function () {
            return t
        }, this.isOpera = function () {
            return o
        }, this.isMozilla = function () {
            return n
        }
    }, asual.util.Events = new function () {
        var i = "DOMContentLoaded",
            t = "onstop",
            o = window,
            s = document,
            a = [],
            n = asual.util,
            e = n.Browser,
            r = e.isMSIE(),
            l = e.isSafari();
        this.toString = function () {
            return "[class Events]"
        }, this.addListener = function (e, t, o) {
            a.push({
                o: e,
                t: t,
                l: o
            }), t == i && (r || l) || (e.addEventListener ? e.addEventListener(t, o, !1) : e.attachEvent && e.attachEvent("on" + t, o))
        }, this.removeListener = function (e, t, o) {
            for (var s, n = 0; s = a[n]; n++)
                if (s.o == e && s.t == t && s.l == o) {
                    a.splice(n, 1);
                    break
                } t == i && (r || l) || (e.removeEventListener ? e.removeEventListener(t, o, !1) : e.detachEvent && e.detachEvent("on" + t, o))
        };

        function d() {
            for (var e, t = 0; e = a[t]; t++) e.t != i && n.Events.removeListener(e.o, e.t, e.l)
        }(r || l) && function () {
            try {
                (r && s.body || !/loaded|complete/.test(s.readyState)) && s.documentElement.doScroll("left")
            } catch (e) {
                return setTimeout(arguments.callee, 0)
            }
            for (var e, t = 0; e = a[t]; t++) e.t == i && e.l.call(null)
        }(), r && o.attachEvent && o.attachEvent("onbeforeunload", function () {
            function e() {
                s.detachEvent(t, e), d()
            }
            "interactive" == s.readyState && (s.attachEvent(t, e), o.setTimeout(function () {
                s.detachEvent(t, e)
            }, 0))
        }), this.addListener(o, "unload", d)
    }, asual.util.Functions = new function () {
        this.toString = function () {
            return "[class Functions]"
        }, this.bind = function (e, t, o) {
            for (var s, n = 2, i = []; s = arguments[n]; n++) i.push(s);
            return function () {
                return e.apply(t, i)
            }
        }
    };
var FWDUVPAddressEvent = function (e) {
    this.toString = function () {
        return "[object FWDUVPAddressEvent]"
    }, this.type = e, this.target = [FWDUVPAddress][0], this.value = FWDUVPAddress.getValue(), this.path = FWDUVPAddress.getPath(), this.pathNames = FWDUVPAddress.getPathNames(), this.parameters = {};
    for (var t = FWDUVPAddress.getParameterNames(), o = 0, s = t.length; o < s; o++) this.parameters[t[o]] = FWDUVPAddress.getParameter(t[o]);
    this.parameterNames = t
};
FWDUVPAddressEvent.INIT = "init", FWDUVPAddressEvent.CHANGE = "change", FWDUVPAddressEvent.INTERNAL_CHANGE = "internalChange", FWDUVPAddressEvent.EXTERNAL_CHANGE = "externalChange";
var FWDUVPAddress = new function () {
    var _getHash = function () {
            var e = _l.href.indexOf("#");
            return -1 != e ? _ec(_dc(_l.href.substr(e + 1))) : ""
        },
        _getWindow = function () {
            try {
                return top.document, top
            } catch (e) {
                return window
            }
        },
        _strictCheck = function (e, t) {
            return _opts.strict && (e = t ? "/" != e.substr(0, 1) ? "/" + e : e : "" == e ? "/" : e), e
        },
        _ieLocal = function (e, t) {
            return _msie && "file:" == _l.protocol ? t ? _value.replace(/\?/, "%3F") : _value.replace(/%253F/, "?") : e
        },
        _searchScript = function (e) {
            if (e.childNodes)
                for (var t, o = 0, s = e.childNodes.length; o < s; o++)
                    if (e.childNodes[o].src && (_url = String(e.childNodes[o].src)), t = _searchScript(e.childNodes[o])) return t
        },
        _titleCheck = function () {
            _d.title != _title && -1 != _d.title.indexOf("#") && (_d.title = _title)
        },
        _listen = function () {
            var e, t;
            _silent || (e = _getHash(), t = !(_value == e), _safari && _version < 523 ? _length != _h.length && (_length = _h.length, typeof _stack[_length - 1] != UNDEFINED && (_value = _stack[_length - 1]), _update.call(this, !1)) : _msie && t ? _version < 7 ? _l.reload() : this.setValue(e) : t && (_value = e, _update.call(this, !1)), _msie && _titleCheck.call(this))
        },
        _bodyClick = function (e) {
            var popup;
            0 < _popup.length && (popup = window.open(_popup[0], _popup[1], eval(_popup[2])), typeof _popup[3] != UNDEFINED && eval(_popup[3])), _popup = []
        },
        _swfChange = function () {
            for (var e, t, o, s, n = 0, i = FWDUVPAddress.getValue(), a = "setFWDUVPAddressValue"; e = _ids[n]; n++) {
                (s = document.getElementById(e)) ? s.parentNode && typeof s.parentNode.so != UNDEFINED ? s.parentNode.so.call(a, i) : (s && typeof s[a] != UNDEFINED || (t = s.getElementsByTagName("object"), o = s.getElementsByTagName("embed"), s = t[0] && typeof t[0][a] != UNDEFINED ? t[0] : o[0] && typeof o[0][a] != UNDEFINED ? o[0] : null), s && s[a](i)): (s = document[e]) && typeof s[a] != UNDEFINED && s[a](i)
            }
        },
        _jsDispatch = function (e) {
            this.dispatchEvent(new FWDUVPAddressEvent(e)), typeof this["on" + (e = e.substr(0, 1).toUpperCase() + e.substr(1))] == FUNCTION && this["on" + e]()
        },
        _jsInit = function () {
            _util.Browser.isSafari() && _d.body.addEventListener("click", _bodyClick), _jsDispatch.call(this, "init")
        },
        _jsChange = function () {
            _swfChange(), _jsDispatch.call(this, "change")
        },
        _update = function (e) {
            _jsChange.call(this), e ? _jsDispatch.call(this, "internalChange") : _jsDispatch.call(this, "externalChange"), _st(_functions.bind(_track, this), 10)
        },
        _track = function () {
            var e = (_l.pathname + (/\/$/.test(_l.pathname) ? "" : "/") + this.getValue()).replace(/\/\//, "/").replace(/^\/$/, ""),
                t = _t[_opts.tracker];
            typeof t == FUNCTION ? t(e) : typeof _t.pageTracker != UNDEFINED && typeof _t.pageTracker._trackPageview == FUNCTION ? _t.pageTracker._trackPageview(e) : typeof _t.urchinTracker == FUNCTION && _t.urchinTracker(e)
        },
        _htmlWrite = function () {
            var e = _frame.contentWindow.document;
            e.open(), e.write("<html><head><title>" + _d.title + "</title><script>var " + ID + ' = "' + _getHash() + '";<\/script></head></html>'), e.close()
        },
        _htmlLoad = function () {
            var e = _frame.contentWindow;
            e.location.href;
            (_value = typeof e[ID] != UNDEFINED ? e[ID] : "") != _getHash() && (_update.call(FWDUVPAddress, !1), _l.hash = _ieLocal(_value, TRUE))
        },
        _load = function () {
            var e;
            _loaded || (_loaded = TRUE, _msie && _version < 8 ? (e = _d.getElementsByTagName("frameset")[0], _frame = _d.createElement((e ? "" : "i") + "frame"), e ? (e.insertAdjacentElement("beforeEnd", _frame), e[e.cols ? "cols" : "rows"] += ",0", _frame.src = "javascript:false", _frame.noResize = !0, _frame.frameBorder = _frame.frameSpacing = 0) : (_frame.src = "javascript:false", _frame.style.display = "none", _d.body.insertAdjacentElement("afterBegin", _frame)), _st(function () {
                _events.addListener(_frame, "load", _htmlLoad), typeof _frame.contentWindow[ID] == UNDEFINED && _htmlWrite()
            }, 50)) : _safari && (_version < 418 && (_d.body.innerHTML += '<form id="' + ID + '" style="position:absolute;top:-9999px;" method="get"></form>', _form = _d.getElementById(ID)), typeof _l[ID] == UNDEFINED && (_l[ID] = {}), typeof _l[ID][_l.pathname] != UNDEFINED && (_stack = _l[ID][_l.pathname].split(","))), _st(_functions.bind(function () {
                _jsInit.call(this), _jsChange.call(this), _track.call(this)
            }, this), 1), _msie && 8 <= _version ? (_d.body.onhashchange = _functions.bind(_listen, this), _si(_functions.bind(_titleCheck, this), 50)) : _si(_functions.bind(_listen, this), 50))
        },
        ID = "swfaddress",
        FUNCTION = "function",
        UNDEFINED = "undefined",
        TRUE = !0,
        FALSE = !1,
        _util = asual.util,
        _browser = _util.Browser,
        _events = _util.Events,
        _functions = _util.Functions,
        _version = _browser.getVersion(),
        _msie = _browser.isMSIE(),
        _mozilla = _browser.isMozilla(),
        _opera = _browser.isOpera(),
        _safari = _browser.isSafari(),
        _supported = FALSE,
        _t = _getWindow(),
        _d = _t.document,
        _h = _t.history,
        _l = _t.location,
        _si = setInterval,
        _st = setTimeout,
        _dc = decodeURI,
        _ec = encodeURI,
        _frame, _form, _url, _title = _d.title,
        _length = _h.length,
        _silent = FALSE,
        _loaded = FALSE,
        _justset = TRUE,
        _juststart = TRUE,
        _ref = this,
        _stack = [],
        _ids = [],
        _popup = [],
        _listeners = {},
        _value = _getHash(),
        _opts = {
            history: TRUE,
            strict: TRUE
        },
        $Y, _Y, aZ, bZ, cZ, dZ, eZ;
    if (_msie && _d.documentMode && _d.documentMode != _version && (_version = 8 != _d.documentMode ? 7 : 8), _supported = _mozilla && 1 <= _version || _msie && 6 <= _version || _opera && 9.5 <= _version || _safari && 312 <= _version, _supported) {
        _opera && (history.navigationMode = "compatible");
        for (var i = 1; i < _length; i++) _stack.push("");
        _stack.push(_getHash()), _msie && _l.hash != _getHash() && (_l.hash = "#" + _ieLocal(_getHash(), TRUE)), _searchScript(document);
        var _qi = _url ? _url.indexOf("?") : -1;
        if (-1 != _qi)
            for (var param, params = _url.substr(_qi + 1).split("&"), i = 0, p; p = params[i]; i++) param = p.split("="), /^(history|strict)$/.test(param[0]) && (_opts[param[0]] = isNaN(param[1]) ? /^(true|yes)$/i.test(param[1]) : 0 != parseInt(param[1])), /^tracker$/.test(param[0]) && (_opts[param[0]] = param[1]);
        _msie && _titleCheck.call(this), window == _t && _events.addListener(document, "DOMContentLoaded", _functions.bind(_load, this)), _events.addListener(_t, "load", _functions.bind(_load, this))
    } else !_supported && -1 != _l.href.indexOf("#") || _safari && _version < 418 && -1 != _l.href.indexOf("#") && "" != _l.search ? (_d.open(), _d.write('<html><head><meta http-equiv="refresh" content="0;url=' + _l.href.substr(0, _l.href.indexOf("#")) + '" /></head></html>'), _d.close()) : _track();
    this.toString = function () {
        return "[class FWDUVPAddress]"
    }, this.back = function () {
        _h.back()
    }, this.forward = function () {
        _h.forward()
    }, this.up = function () {
        var e = this.getPath();
        this.setValue(e.substr(0, e.lastIndexOf("/", e.length - 2) + ("/" == e.substr(e.length - 1) ? 1 : 0)))
    }, this.go = function (e) {
        _h.go(e)
    }, this.href = function (e, t) {
        "_self" == (t = typeof t != UNDEFINED ? t : "_self") ? self.location.href = e: "_top" == t ? _l.href = e : "_blank" == t ? window.open(e) : _t.frames[t].location.href = e
    }, this.popup = function (url, name, options, handler) {
        try {
            var popup = window.open(url, name, eval(options));
            typeof handler != UNDEFINED && eval(handler)
        } catch (e) {}
        _popup = arguments
    }, this.getIds = function () {
        return _ids
    }, this.getId = function (e) {
        return _ids[0]
    }, this.setId = function (e) {
        _ids[0] = e
    }, this.addId = function (e) {
        this.removeId(e), _ids.push(e)
    }, this.removeId = function (e) {
        for (var t = 0; t < _ids.length; t++)
            if (e == _ids[t]) {
                _ids.splice(t, 1);
                break
            }
    }, this.addEventListener = function (e, t) {
        typeof _listeners[e] == UNDEFINED && (_listeners[e] = []), _listeners[e].push(t)
    }, this.removeEventListener = function (e, t) {
        if (typeof _listeners[e] != UNDEFINED) {
            for (var o, s = 0;
                (o = _listeners[e][s]) && o != t; s++);
            _listeners[e].splice(s, 1)
        }
    }, this.dispatchEvent = function (e) {
        if (this.hasEventListener(e.type)) {
            e.target = this;
            for (var t, o = 0; t = _listeners[e.type][o]; o++) t(e);
            return TRUE
        }
        return FALSE
    }, this.hasEventListener = function (e) {
        return typeof _listeners[e] != UNDEFINED && 0 < _listeners[e].length
    }, this.getBaseURL = function () {
        var e = _l.href;
        return -1 != e.indexOf("#") && (e = e.substr(0, e.indexOf("#"))), "/" == e.substr(e.length - 1) && (e = e.substr(0, e.length - 1)), e
    }, this.getStrict = function () {
        return _opts.strict
    }, this.setStrict = function (e) {
        _opts.strict = e
    }, this.getHistory = function () {
        return _opts.history
    }, this.setHistory = function (e) {
        _opts.history = e
    }, this.getTracker = function () {
        return _opts.tracker
    }, this.setTracker = function (e) {
        _opts.tracker = e
    }, this.getTitle = function () {
        return _d.title
    }, this.setTitle = function (e) {
        if (!_supported) return null;
        typeof e != UNDEFINED && ("null" == e && (e = ""), e = _dc(e), _st(function () {
            _title = _d.title = e, _juststart && _frame && _frame.contentWindow && _frame.contentWindow.document && (_frame.contentWindow.document.title = e, _juststart = FALSE), !_justset && _mozilla && _l.replace(-1 != _l.href.indexOf("#") ? _l.href : _l.href + "#"), _justset = FALSE
        }, 10))
    }, this.getStatus = function () {
        return _t.status
    }, this.setStatus = function (e) {
        if (!_supported) return null;
        var t;
        typeof e != UNDEFINED && ("null" == e && (e = ""), e = _dc(e), _safari || ("/" == (e = _strictCheck("null" != e ? e : "", TRUE)) && (e = ""), /http(s)?:\/\//.test(e) || (e = (-1 == (t = _l.href.indexOf("#")) ? _l.href : _l.href.substr(0, t)) + "#" + e), _t.status = e))
    }, this.resetStatus = function () {
        _t.status = ""
    }, this.getValue = function () {
        return _supported ? _dc(_strictCheck(_ieLocal(_value, FALSE), FALSE)) : null
    }, this.setValue = function (e) {
        if (!_supported) return null;
        typeof e != UNDEFINED && ("null" == e && (e = ""), "/" == (e = _ec(_dc(_strictCheck(e, TRUE)))) && (e = ""), _value != e && (_value = e, _silent = _justset = TRUE, _update.call(FWDUVPAddress, !0), (_stack[_h.length] = _value) != _getHash() && (_opts.history ? _l.hash = "#" + _dc(_ieLocal(_value, TRUE)) : _l.replace("#" + _dc(_value))), _msie && _version < 8 && _opts.history && _st(_htmlWrite, 50), _safari ? _st(function () {
            _silent = FALSE
        }, 1) : _silent = FALSE))
    }, this.getPath = function () {
        var e = this.getValue();
        return -1 != e.indexOf("?") ? e.split("?")[0] : -1 != e.indexOf("#") ? e.split("#")[0] : e
    }, this.getPathNames = function () {
        var e = this.getPath(),
            t = e.split("/");
        return "/" != e.substr(0, 1) && 0 != e.length || t.splice(0, 1), "/" == e.substr(e.length - 1, 1) && t.splice(t.length - 1, 1), t
    }, this.getQueryString = function () {
        var e = this.getValue(),
            t = e.indexOf("?");
        if (-1 != t && t < e.length) return e.substr(t + 1)
    }, this.getParameter = function (e) {
        var t = this.getValue(),
            o = t.indexOf("?");
        if (-1 != o) {
            for (var s, n = (t = t.substr(o + 1)).split("&"), i = n.length, a = []; i--;)(s = n[i].split("="))[0] == e && a.push(s[1]);
            if (0 != a.length) return 1 != a.length ? a : a[0]
        }
    }, this.getParameterNames = function () {
        var e = this.getValue(),
            t = e.indexOf("?"),
            o = [];
        if (-1 != t && "" != (e = e.substr(t + 1)) && -1 != e.indexOf("="))
            for (var s = e.split("&"), n = 0; n < s.length;) o.push(s[n].split("=")[0]), n++;
        return o
    }, this.onInit = null, this.onChange = null, this.onInternalChange = null, this.onExternalChange = null, typeof FlashObject != UNDEFINED && (SWFObject = FlashObject), typeof SWFObject != UNDEFINED && SWFObject.prototype && SWFObject.prototype.write && (_Y = SWFObject.prototype.write, SWFObject.prototype.write = function () {
        var e;
        return $Y = arguments, this.getAttribute("version").major < 8 && (this.addVariable("$swfaddress", FWDUVPAddress.getValue()), ("string" == typeof $Y[0] ? document.getElementById($Y[0]) : $Y[0]).so = this), (e = _Y.apply(this, $Y)) && _ref.addId(this.getAttribute("id")), e
    }), typeof swfobject != UNDEFINED && (aZ = swfobject.registerObject, swfobject.registerObject = function () {
        $Y = arguments, aZ.apply(this, $Y), _ref.addId($Y[0])
    }, bZ = swfobject.createSWF, swfobject.createSWF = function () {
        $Y = arguments;
        var e = bZ.apply(this, $Y);
        return e && _ref.addId($Y[0].id), e
    }, cZ = swfobject.embedSWF, swfobject.embedSWF = function () {
        typeof ($Y = arguments)[8] == UNDEFINED && ($Y[8] = {}), typeof $Y[8].id == UNDEFINED && ($Y[8].id = $Y[1]), cZ.apply(this, $Y), _ref.addId($Y[8].id)
    }), typeof UFO != UNDEFINED && (dZ = UFO.create, UFO.create = function () {
        $Y = arguments, dZ.apply(this, $Y), _ref.addId($Y[0].id)
    }), typeof AC_FL_RunContent != UNDEFINED && (eZ = AC_FL_RunContent, AC_FL_RunContent = function () {
        $Y = arguments, eZ.apply(this, $Y);
        for (var e = 0, t = $Y.length; e < t; e++) "id" == $Y[e] && _ref.addId($Y[e + 1])
    })
};
! function (s) {
    var o = function (e, a) {
        var l = this;
        o.prototype;

        function t(e) {
            var t, o;
            s.top != s && FWDEVPUtils.isIE || (e = e || l, document.body.createTextRange ? ((t = document.body.createTextRange()).moveToElementText(e), t.select()) : s.getSelection && document.createRange && (o = s.getSelection(), (t = document.createRange()).selectNodeContents(e), o.removeAllRanges(), o.addRange(t)))
        }
        l.xhr = null, l.embedColoseN_img = e.embedColoseN_img, l.bk_do = null, l.mainHld = null, l.mainLbl = null, l.lnkAndEbdHldBk = null, l.linkTxt = null, l.linkLbl = null, l.embdTxt = null, l.embedLbl = null, l.linkAndEmbedHld = null, l.copyLinkBtn = null, l.copyEmbedBtn = null, l.infoText_do = null, l.sendMainHld = null, l.sendMainHldBk = null, l.sendMainLbl = null, l.yourEmailLabel_do = null, l.yourEmailInpt = null, l.friendEmailLbl = null, l.friendEmailInpt = null, l.clsBtn = null, l.useHEX = e.useHEX, l.nBC = e.nBC, l.sBC = e.sBC, l.videoLink_str = null, l.embedWindowBackground_str = e.embedWindowBackground_str, l.embedWindowInputBackgroundPath_str = e.embedWindowInputBackgroundPath_str, l.secondaryLabelsColor_str = e.secondaryLabelsColor_str, l.inputColor_str = e.inputColor_str, l.mainLabelsColor_str = e.mainLabelsColor_str, l.sendButtonNPath_str = e.sendButtonNPath_str, l.sendButtonSPath_str = e.sendButtonSPath_str, l.inputBackgroundColor_str = e.inputBackgroundColor_str, l.borderColor_str = e.borderColor_str, l.sendToAFriendPath_str = e.sendToAFriendPath_str, l.maxTextWidth = 0, l.totalWidth = 0, l.sW = 0, l.sH = 0, l.buttonWidth = 44, l.buttonHeight = 19, l.embedWindowCloseButtonMargins = e.embedWindowCloseButtonMargins, l.finalEmbedPath_str = null, l.finalEmbedCode_str = null, l.linkToVideo_str = null, l.shareAndEmbedTextColor_str = e.shareAndEmbedTextColor_str, l.isSending_bl = !1, l.isShowed_bl = !1, l.isMbl = FWDUVPUtils.isMobile, l.useVectorIcons_bl = e.useVectorIcons_bl, l.init = function () {
            l.clsBtn || (-1 != e.sknPth.indexOf("hex_white") && (l.sBC = "#FFFFFF"), l.setBackfaceVisibility(), l.mainHld = new FWDUVPDisplayObject("div"), l.bk_do = new FWDUVPDisplayObject("div"), l.bk_do.getStyle().width = "100%", l.bk_do.getStyle().height = "100%", l.bk_do.setAlpha(.9), l.bk_do.getStyle().background = "url('" + l.embedWindowBackground_str + "')", l.linkAndEmbedHld = new FWDUVPDisplayObject("div"), l.lnkAndEbdHldBk = new FWDUVPDisplayObject("div"), l.lnkAndEbdHldBk.getStyle().background = "url('" + l.embedWindowBackground_str + "')", l.lnkAndEbdHldBk.getStyle().borderStyle = "solid", l.lnkAndEbdHldBk.getStyle().borderWidth = "1px", l.lnkAndEbdHldBk.getStyle().borderColor = l.borderColor_str, l.mainLbl = new FWDUVPDisplayObject("div"), l.mainLbl.setBackfaceVisibility(), l.mainLbl.getStyle().fontFamily = "Arial", l.mainLbl.getStyle().fontSize = "12px", l.mainLbl.getStyle().color = l.mainLabelsColor_str, l.mainLbl.getStyle().whiteSpace = "nowrap", l.mainLbl.getStyle().fontSmoothing = "antialiased", l.mainLbl.getStyle().webkitFontSmoothing = "antialiased", l.mainLbl.getStyle().textRendering = "optimizeLegibility", l.mainLbl.getStyle().padding = "0px", l.mainLbl.screen.className = "UVP-main-label", l.mainLbl.setInnerHTML("SHARE & EMBED"), l.linkLbl = new FWDUVPDisplayObject("div"), l.linkLbl.screen.className = "UVP-secnd-label", l.linkLbl.setBackfaceVisibility(), l.linkLbl.getStyle().fontFamily = "Arial", l.linkLbl.getStyle().fontSize = "12px", l.linkLbl.getStyle().color = l.secondaryLabelsColor_str, l.linkLbl.getStyle().whiteSpace = "nowrap", l.linkLbl.getStyle().fontSmoothing = "antialiased", l.linkLbl.getStyle().webkitFontSmoothing = "antialiased", l.linkLbl.getStyle().textRendering = "optimizeLegibility", l.linkLbl.getStyle().padding = "0px", l.linkLbl.setInnerHTML("Link to _s video:"), l.linkTxt = new FWDUVPDisplayObject("div"), l.linkTxt.screen.className = "UVP-embed-inpt", l.linkTxt.setBackfaceVisibility(), l.linkTxt.getStyle().fontFamily = "Arial", l.linkTxt.getStyle().fontSize = "12px", l.linkTxt.getStyle().color = l.shareAndEmbedTextColor_str, FWDUVPUtils.isIEAndLessThen9 || (l.linkTxt.getStyle().wordBreak = "break-all"), l.linkTxt.getStyle().fontSmoothing = "antialiased", l.linkTxt.getStyle().webkitFontSmoothing = "antialiased", l.linkTxt.getStyle().textRendering = "optimizeLegibility", l.linkTxt.getStyle().padding = "6px", l.linkTxt.getStyle().paddingTop = "4px", l.linkTxt.getStyle().paddingBottom = "4px", l.linkTxt.getStyle().backgroundColor = l.inputBackgroundColor_str, l.linkTxt.screen.addEventListener("touchstart", function () {
                t(l.linkTxt.screen)
            }), l.embedLbl = new FWDUVPDisplayObject("div"), l.embedLbl.setBackfaceVisibility(), l.embedLbl.screen.className = "UVP-secnd-label", l.embedLbl.getStyle().fontFamily = "Arial", l.embedLbl.getStyle().fontSize = "12px", l.embedLbl.getStyle().color = l.secondaryLabelsColor_str, l.embedLbl.getStyle().whiteSpace = "nowrap", l.embedLbl.getStyle().fontSmoothing = "antialiased", l.embedLbl.getStyle().webkitFontSmoothing = "antialiased", l.embedLbl.getStyle().textRendering = "optimizeLegibility", l.embedLbl.getStyle().padding = "0px", l.embedLbl.setInnerHTML("Embed _s video:"), l.embdTxt = new FWDUVPDisplayObject("div"), l.embdTxt.screen.className = "UVP-embed-inpt", l.embdTxt.setBackfaceVisibility(), FWDUVPUtils.isIEAndLessThen9 || (l.embdTxt.getStyle().wordBreak = "break-all"), l.embdTxt.getStyle().fontFamily = "Arial", l.embdTxt.getStyle().fontSize = "12px", l.embdTxt.getStyle().lineHeight = "16px", l.embdTxt.getStyle().color = l.shareAndEmbedTextColor_str, l.embdTxt.getStyle().fontSmoothing = "antialiased", l.embdTxt.getStyle().webkitFontSmoothing = "antialiased", l.embdTxt.getStyle().textRendering = "optimizeLegibility", l.embdTxt.getStyle().backgroundColor = l.inputBackgroundColor_str, l.embdTxt.getStyle().padding = "6px", l.embdTxt.getStyle().paddingTop = "4px", l.embdTxt.getStyle().paddingBottom = "4px", l.embdTxt.screen.addEventListener("touchstart", function () {
                t(l.embdTxt.screen)
            }), FWDUVPSimpleSizeButton.setPrototype(), l.copyLinkBtn = new FWDUVPSimpleSizeButton(e.embedCopyButtonNPath_str, e.embedCopyButtonSPath_str, l.buttonWidth, l.buttonHeight, e.useHEX, e.nBC, e.sBC, !0), l.copyLinkBtn.screen.style.position = "absolute", l.copyLinkBtn.addListener(FWDUVPSimpleSizeButton.CLICK, function () {
                l.copyToClipboard(l.linkTxt.screen)
            }), FWDUVPSimpleSizeButton.setPrototype(), l.copyEmbedBtn = new FWDUVPSimpleSizeButton(e.embedCopyButtonNPath_str, e.embedCopyButtonSPath_str, l.buttonWidth, l.buttonHeight, e.useHEX, e.nBC, e.sBC, !0), l.copyEmbedBtn.screen.style.position = "absolute", l.copyEmbedBtn.addListener(FWDUVPSimpleSizeButton.CLICK, function () {
                l.copyToClipboard(l.embdTxt.screen)
            }), l.sendMainHld = new FWDUVPDisplayObject("div"), l.sendMainHldBk = new FWDUVPDisplayObject("div"), l.sendMainHldBk.getStyle().background = "url('" + l.embedWindowBackground_str + "')", l.sendMainHldBk.getStyle().borderStyle = "solid", l.sendMainHldBk.getStyle().borderWidth = "1px", l.sendMainHldBk.getStyle().borderColor = l.borderColor_str, l.sendMainLbl = new FWDUVPDisplayObject("div"), l.sendMainLbl.setBackfaceVisibility(), l.sendMainLbl.getStyle().fontFamily = "Arial", l.sendMainLbl.getStyle().fontSize = "12px", l.sendMainLbl.getStyle().color = l.mainLabelsColor_str, l.sendMainLbl.getStyle().whiteSpace = "nowrap", l.sendMainLbl.getStyle().fontSmoothing = "antialiased", l.sendMainLbl.getStyle().webkitFontSmoothing = "antialiased", l.sendMainLbl.getStyle().textRendering = "optimizeLegibility", l.sendMainLbl.getStyle().padding = "0px", l.sendMainLbl.screen.className = "UVP-main-label", l.sendMainLbl.setInnerHTML("SEND TO A FRIEND"), l.yourEmailLabel_do = new FWDUVPDisplayObject("div"), l.yourEmailLabel_do.setBackfaceVisibility(), l.yourEmailLabel_do.screen.className = "UVP-secnd-label", l.yourEmailLabel_do.getStyle().fontFamily = "Arial", l.yourEmailLabel_do.getStyle().fontSize = "12px", l.yourEmailLabel_do.getStyle().color = l.secondaryLabelsColor_str, l.yourEmailLabel_do.getStyle().whiteSpace = "nowrap", l.yourEmailLabel_do.getStyle().fontSmoothing = "antialiased", l.yourEmailLabel_do.getStyle().webkitFontSmoothing = "antialiased", l.yourEmailLabel_do.getStyle().textRendering = "optimizeLegibility", l.yourEmailLabel_do.getStyle().padding = "0px", l.yourEmailLabel_do.setInnerHTML("Your email:"), l.yourEmailInpt = new FWDUVPDisplayObject("input"), l.yourEmailInpt.screen.className = "UVP-embed-inpt", l.yourEmailInpt.setBackfaceVisibility(), l.yourEmailInpt.getStyle().fontFamily = "Arial", l.yourEmailInpt.getStyle().fontSize = "12px", l.yourEmailInpt.getStyle().backgroundColor = l.inputBackgroundColor_str, l.yourEmailInpt.getStyle().color = l.inputColor_str, l.yourEmailInpt.getStyle().outline = 0, l.yourEmailInpt.getStyle().whiteSpace = "nowrap", l.yourEmailInpt.getStyle().fontSmoothing = "antialiased", l.yourEmailInpt.getStyle().webkitFontSmoothing = "antialiased", l.yourEmailInpt.getStyle().textRendering = "optimizeLegibility", l.yourEmailInpt.getStyle().padding = "6px", l.yourEmailInpt.getStyle().paddingTop = "4px", l.yourEmailInpt.getStyle().paddingBottom = "4px", l.friendEmailLbl = new FWDUVPDisplayObject("div"), l.friendEmailLbl.setBackfaceVisibility(), l.friendEmailLbl.screen.className = "UVP-secnd-label", l.friendEmailLbl.getStyle().fontFamily = "Arial", l.friendEmailLbl.getStyle().fontSize = "12px", l.friendEmailLbl.getStyle().color = l.secondaryLabelsColor_str, l.friendEmailLbl.getStyle().whiteSpace = "nowrap", l.friendEmailLbl.getStyle().fontSmoothing = "antialiased", l.friendEmailLbl.getStyle().webkitFontSmoothing = "antialiased", l.friendEmailLbl.getStyle().textRendering = "optimizeLegibility", l.friendEmailLbl.getStyle().padding = "0px", l.friendEmailLbl.setInnerHTML("Your friend's email:"), l.friendEmailInpt = new FWDUVPDisplayObject("input"), l.friendEmailInpt.screen.className = "UVP-embed-inpt", l.friendEmailInpt.setBackfaceVisibility(), l.friendEmailInpt.getStyle().fontFamily = "Arial", l.friendEmailInpt.getStyle().fontSize = "12px", l.friendEmailInpt.getStyle().backgroundColor = l.inputBackgroundColor_str, l.friendEmailInpt.getStyle().color = l.inputColor_str, l.friendEmailInpt.getStyle().outline = 0, l.friendEmailInpt.getStyle().whiteSpace = "nowrap", l.friendEmailInpt.getStyle().fontSmoothing = "antialiased", l.friendEmailInpt.getStyle().webkitFontSmoothing = "antialiased", l.friendEmailInpt.getStyle().textRendering = "optimizeLegibility", l.friendEmailInpt.getStyle().padding = "6px", l.friendEmailInpt.getStyle().paddingTop = "4px", l.friendEmailInpt.getStyle().paddingBottom = "4px", FWDUVPSimpleSizeButton.setPrototype(), l.sndBtn = new FWDUVPSimpleSizeButton(l.sendButtonNPath_str, l.sendButtonSPath_str, l.buttonWidth, l.buttonHeight, l.useHEX, e.nBC, e.sBC, !0), l.sndBtn.addListener(FWDUVPSimpleSizeButton.MOUSE_UP, l.sendClickHandler), l.infoText_do = new FWDUVPDisplayObject("div"), l.infoText_do.setBackfaceVisibility(), l.infoText_do.getStyle().fontFamily = "Arial", l.infoText_do.getStyle().fontSize = "12px", l.infoText_do.getStyle().color = l.secondaryLabelsColor_str, l.infoText_do.getStyle().whiteSpace = "nowrap", l.infoText_do.getStyle().fontSmoothing = "antialiased", l.infoText_do.getStyle().webkitFontSmoothing = "antialiased", l.infoText_do.getStyle().textRendering = "optimizeLegibility", l.infoText_do.getStyle().padding = "0px", l.infoText_do.getStyle().paddingTop = "4px", l.infoText_do.getStyle().textAlign = "center", l.infoText_do.getStyle().color = l.mainLabelsColor_str, l.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), l.clsBtn = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<div class='table-fwduvp-button'><span class='table-cell-fwduvp-button fwdicon-close'></span></div>", void 0, "UVPCloseButtonNormalState", "UVPCloseButtonSelectedState")) : (FWDUVPSimpleButton.setPrototype(), l.clsBtn = new FWDUVPSimpleButton(e.embedColoseN_img, e.embedWindowClosePathS_str, void 0, !0, e.useHEX, e.nBC, e.sBC, !1, !1, !1, !1, !0)), l.clsBtn.addListener(FWDUVPSimpleButton.MOUSE_UP, l.closeButtonOnMouseUpHandler), l.addChild(l.mainHld), l.mainHld.addChild(l.bk_do), l.linkAndEmbedHld.addChild(l.lnkAndEbdHldBk), l.linkAndEmbedHld.addChild(l.mainLbl), l.linkAndEmbedHld.addChild(l.linkLbl), l.linkAndEmbedHld.addChild(l.linkTxt), l.linkAndEmbedHld.addChild(l.embedLbl), l.linkAndEmbedHld.addChild(l.embdTxt), l.linkAndEmbedHld.addChild(l.copyLinkBtn), l.linkAndEmbedHld.addChild(l.copyEmbedBtn), l.sendMainHld.addChild(l.sendMainHldBk), l.sendMainHld.addChild(l.sendMainLbl), l.sendMainHld.addChild(l.yourEmailLabel_do), l.sendMainHld.addChild(l.yourEmailInpt), l.sendMainHld.addChild(l.friendEmailLbl), l.sendMainHld.addChild(l.friendEmailInpt), l.sendMainHld.addChild(l.sndBtn), l.mainHld.addChild(l.linkAndEmbedHld), l.mainHld.addChild(l.sendMainHld), l.mainHld.addChild(l.clsBtn))
        }, l.closeButtonOnMouseUpHandler = function () {
            l.isShowed_bl && l.hide()
        }, l.copyToClipboard = function (e) {
            t(e), document.execCommand("copy")
        }, l.positionAndResize = function () {
            l.sW = a.sW, l.sH = a.sH, l.maxTextWidth = Math.min(l.sW - 150, 500), l.totalWidth = l.maxTextWidth + l.buttonWidth + 40, l.isMbl ? (l.linkTxt.setWidth(l.maxTextWidth + 52), l.embdTxt.setWidth(l.maxTextWidth + 52)) : (l.linkTxt.setWidth(l.maxTextWidth), l.embdTxt.setWidth(l.maxTextWidth)), l.positionFinal(), l.clsBtn.setX(l.sW - l.clsBtn.w - l.embedWindowCloseButtonMargins), l.clsBtn.setY(l.embedWindowCloseButtonMargins), l.setWidth(l.sW), l.setHeight(l.sH), l.mainHld.setWidth(l.sW), l.mainHld.setHeight(l.sH)
        }, l.positionFinal = function () {
            var e, t, o, s, n, i, a, r = !1;
            l.sH < 360 || l.sW < 350 ? (l.linkTxt.getStyle().whiteSpace = "nowrap", l.embdTxt.getStyle().whiteSpace = "nowrap") : (l.linkTxt.getStyle().whiteSpace = "normal", l.embdTxt.getStyle().whiteSpace = "normal"), l.linkLbl.screen.offsetHeight < 6 && (r = !0), t = r ? Math.round(100 * l.mainLbl.screen.getBoundingClientRect().height) : l.mainLbl.getHeight(), l.mainLbl.setX(16), l.linkLbl.setX(16), l.linkLbl.setY(t + 14), s = r ? (o = Math.round(100 * l.linkLbl.screen.getBoundingClientRect().height), Math.round(100 * l.linkTxt.screen.getBoundingClientRect().height)) : (o = l.linkLbl.getHeight(), l.linkTxt.getHeight()), l.linkTxt.setX(10), l.linkTxt.setY(l.linkLbl.y + o + 5), l.isMbl ? l.copyLinkBtn.setX(-100) : l.copyLinkBtn.setX(l.maxTextWidth + 30), l.copyLinkBtn.setY(l.linkTxt.y + s - l.buttonHeight), l.embedLbl.setX(16), l.embedLbl.setY(l.copyLinkBtn.y + l.copyLinkBtn.h + 14), n = r ? Math.round(100 * l.embdTxt.screen.getBoundingClientRect().height) : l.embdTxt.getHeight(), l.embdTxt.setX(10), l.embdTxt.setY(l.embedLbl.y + o + 5), l.isMbl ? l.copyEmbedBtn.setX(-100) : l.copyEmbedBtn.setX(l.maxTextWidth + 30), l.copyEmbedBtn.setY(l.embdTxt.y + n - l.buttonHeight), l.lnkAndEbdHldBk.setY(l.linkLbl.y - 9), l.lnkAndEbdHldBk.setWidth(l.totalWidth - 2), l.lnkAndEbdHldBk.setHeight(l.embdTxt.y + n - 9), l.linkAndEmbedHld.setWidth(l.totalWidth), l.linkAndEmbedHld.setHeight(l.embdTxt.y + n + 14), a = r ? (i = Math.round(100 * l.sendMainLbl.screen.getBoundingClientRect().height), Math.round(100 * l.yourEmailInpt.screen.getBoundingClientRect().height)) : (i = l.sendMainLbl.getHeight(), l.yourEmailInpt.getHeight()), l.sendMainLbl.setX(16), l.yourEmailLabel_do.setX(16), l.yourEmailLabel_do.setY(i + 14), 400 < l.sW ? (l.yourEmailInpt.setX(10), l.yourEmailInpt.setWidth(parseInt(l.totalWidth - 52 - l.buttonWidth) / 2), l.yourEmailInpt.setY(l.yourEmailLabel_do.y + o + 5), l.friendEmailLbl.setX(l.yourEmailInpt.x + l.yourEmailInpt.w + 26), l.friendEmailLbl.setY(l.yourEmailLabel_do.y), l.friendEmailInpt.setX(l.yourEmailInpt.x + l.yourEmailInpt.w + 20), l.friendEmailInpt.setWidth(parseInt((l.maxTextWidth - 30) / 2)), l.friendEmailInpt.setY(l.yourEmailLabel_do.y + o + 5), l.sndBtn.setX(l.friendEmailInpt.x + l.yourEmailInpt.w + 10), l.sndBtn.setY(l.friendEmailInpt.y + a - l.buttonHeight)) : (l.yourEmailInpt.setX(10), l.yourEmailInpt.setWidth(l.totalWidth - 32), l.yourEmailInpt.setY(l.yourEmailLabel_do.y + o + 5), l.friendEmailLbl.setX(16), l.friendEmailLbl.setY(l.yourEmailInpt.y + a + 14), l.friendEmailInpt.setX(10), l.friendEmailInpt.setY(l.friendEmailLbl.y + o + 5), l.friendEmailInpt.setWidth(l.totalWidth - 32), l.sndBtn.setX(l.totalWidth - l.buttonWidth - 10), l.sndBtn.setY(l.friendEmailInpt.y + a + 10)), l.sendMainHldBk.setY(l.yourEmailLabel_do.y - 9), l.sendMainHldBk.setWidth(l.totalWidth - 2), l.sendMainHldBk.setHeight(l.sndBtn.y + l.sndBtn.h - 9), l.sendMainHld.setWidth(l.totalWidth), l.sendMainHld.setHeight(l.sndBtn.y + l.sndBtn.h + 14), e = r ? Math.round(100 * l.linkAndEmbedHld.screen.getBoundingClientRect().height + 100 * l.sendMainHld.screen.getBoundingClientRect().height) : l.linkAndEmbedHld.getHeight() + l.sendMainHld.getHeight(), l.linkAndEmbedHld.setX(parseInt((l.sW - l.totalWidth) / 2)), l.linkAndEmbedHld.setY(parseInt((l.sH - e) / 2) - 8), l.sendMainHld.setX(parseInt((l.sW - l.totalWidth) / 2)), r ? l.sendMainHld.setY(Math.round(l.linkAndEmbedHld.y + 100 * l.linkAndEmbedHld.screen.getBoundingClientRect().height + 20)) : l.sendMainHld.setY(l.linkAndEmbedHld.y + l.linkAndEmbedHld.getHeight() + 20)
        }, l.sendClickHandler = function () {
            var e = !1;
            if (!l.getValidEmail(l.yourEmailInpt.screen.value)) {
                if (FWDAnimation.isTweening(l.yourEmailInpt.screen)) return;
                FWDAnimation.to(l.yourEmailInpt.screen, .1, {
                    css: {
                        backgroundColor: "#FF0000"
                    },
                    yoyo: !0,
                    repeat: 3
                }), e = !0
            }
            if (!l.getValidEmail(l.friendEmailInpt.screen.value)) {
                if (FWDAnimation.isTweening(l.friendEmailInpt.screen)) return;
                FWDAnimation.to(l.friendEmailInpt.screen, .1, {
                    css: {
                        backgroundColor: "#FF0000"
                    },
                    yoyo: !0,
                    repeat: 3
                }), e = !0
            }
            e || l.sendEmail()
        }, l.sendEmail = function () {
            if (!l.isSending_bl) {
                l.isSending_bl = !0, l.xhr = new XMLHttpRequest, l.xhr.onreadystatechange = l.onChange, l.xhr.onerror = l.ajaxOnErrorHandler;
                try {
                    l.xhr.open("get", l.sendToAFriendPath_str + "?friendMail=" + l.friendEmailInpt.screen.value + "&yourMail=" + l.yourEmailInpt.screen.value + "&link=" + encodeURIComponent(l.linkToVideo_str), !0), l.xhr.send()
                } catch (e) {
                    l.showInfo("ERROR", !0), console && console.log(e), e.message && s.console && console.log(e.message)
                }
                l.resetInputs()
            }
        }, l.ajaxOnErrorHandler = function (e) {
            l.showInfo("ERROR", !0);
            try {
                s.console && console.log(e), s.console && console.log(e.message)
            } catch (e) {}
            l.isSending_bl = !1
        }, l.onChange = function (e) {
            4 == l.xhr.readyState && 200 == l.xhr.status && ("sent" == l.xhr.responseText ? l.showInfo("SENT") : (l.showInfo("ERROR", !0), s.console && console.log("Error The server can't send the email!")), l.isSending_bl = !1)
        }, l.resetInputs = function () {
            l.yourEmailInpt.screen.value = "", l.friendEmailInpt.screen.value = ""
        }, l.getValidEmail = function (e) {
            return !(!/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(e) || "" == e)
        }, l.setEmbedData = function () {
            var e = location.href,
                t = location.protocol + "//" + location.host,
                o = location.pathname,
                s = location.hash,
                n = t + o,
                i = (i = location.search).replace(/&?RVPInstanceName=.+RVPVideoId=[0-9]+/g, ""),
                e = e.replace(/&?RVPInstanceName=.+RVPVideoId=[0-9]+/g, "");
            l.finalEmbedPath_str = i ? s ? n + i + "&RVPInstanceName=" + a.instanceName_str + "&RVPPlaylistId=" + a.catId + "&RVPVideoId=" + a.id + s : n + i + "&RVPInstanceName=" + a.instanceName_str + "&RVPPlaylistId=" + a.catId + "&RVPVideoId=" + a.id : s ? n + "?RVPInstanceName=" + a.instanceName_str + "&RVPPlaylistId=" + a.catId + "&RVPVideoId=" + a.id + s : n + "?RVPInstanceName=" + a.instanceName_str + "&RVPPlaylistId=" + a.catId + "&RVPVideoId=" + a.id, s ? -1 == s.indexOf("playlistId=") ? l.linkToVideo_str = n + i + s + "&playlistId=" + a.catId + "&videoId=" + a.id : l.linkToVideo_str = e : l.linkToVideo_str = e + "#/?playlistId=" + a.catId + "&videoId=" + a.id, l.finalEmbedPath_str = encodeURI(l.finalEmbedPath_str), l.linkToVideo_str = encodeURI(l.linkToVideo_str), l.finalEmbedCode_str = "<iframe src='" + l.finalEmbedPath_str + "' width='" + a.sW + "' height='" + a.sH + "' frameborder='0' scrolling='no' allowfullscreen></iframe>", FWDUVPUtils.isIE ? (l.linkTxt.screen.innerText = l.linkToVideo_str, l.embdTxt.screen.innerText = l.finalEmbedCode_str) : (l.linkTxt.screen.textContent = l.linkToVideo_str, l.embdTxt.screen.textContent = l.finalEmbedCode_str)
        }, l.showInfo = function (e, t) {
            l.infoText_do.setInnerHTML(e), l.sendMainHld.addChild(l.infoText_do), l.infoText_do.setWidth(l.buttonWidth), l.infoText_do.setHeight(l.buttonHeight - 4), l.infoText_do.setX(l.sndBtn.x), l.infoText_do.setY(l.sndBtn.y - 23), l.infoText_do.setAlpha(0), l.infoText_do.getStyle().color = t ? "#FF0000" : l.mainLabelsColor_str, FWDAnimation.killTweensOf(l.infoText_do), FWDAnimation.to(l.infoText_do, .16, {
                alpha: 1,
                yoyo: !0,
                repeat: 7
            })
        }, l.show = function (e) {
            l.isShowed_bl || (l.isShowed_bl = !0, a.main_do.addChild(l), l.init(), l.resetInputs(), l.setEmbedData(), (!FWDUVPUtils.isMobile || FWDUVPUtils.isMobile && FWDUVPUtils.hasPointerEvent) && a.main_do.setSelectable(!0), l.useVectorIcons_bl ? l.checkButtonsId_to = setInterval(function () {
                0 != l.clsBtn.w && (l.positionAndResize(), clearInterval(l.checkButtonsId_to), clearTimeout(l.hideCompleteId_to), clearTimeout(l.showCompleteId_to), l.mainHld.setY(-l.sH), l.showCompleteId_to = setTimeout(l.showCompleteHandler, 900), setTimeout(function () {
                    FWDAnimation.to(l.mainHld, .8, {
                        y: 0,
                        delay: .1,
                        ease: Expo.easeInOut
                    })
                }, 100))
            }, 50) : (l.positionAndResize(), clearTimeout(l.hideCompleteId_to), clearTimeout(l.showCompleteId_to), l.mainHld.setY(-l.sH), l.showCompleteId_to = setTimeout(l.showCompleteHandler, 900), setTimeout(function () {
                FWDAnimation.to(l.mainHld, .8, {
                    y: 0,
                    delay: .1,
                    ease: Expo.easeInOut
                })
            }, 100)))
        }, l.showCompleteHandler = function () {}, l.hide = function () {
            l.isShowed_bl && (l.isShowed_bl = !1, a.customContextMenu_do && a.customContextMenu_do.enable(), l.positionAndResize(), clearTimeout(l.hideCompleteId_to), clearTimeout(l.showCompleteId_to), (!FWDUVPUtils.isMobile || FWDUVPUtils.isMobile && FWDUVPUtils.hasPointerEvent) && a.main_do.setSelectable(!1), l.hideCompleteId_to = setTimeout(l.hideCompleteHandler, 800), FWDAnimation.killTweensOf(l.mainHld), FWDAnimation.to(l.mainHld, .8, {
                y: -l.sH,
                ease: Expo.easeInOut
            }))
        }, l.hideCompleteHandler = function () {
            a.main_do.removeChild(l), l.dispatchEvent(o.HIDE_COMPLETE)
        }, l.useHEX && l.init()
    };
    o.setPrototype = function () {
        o.prototype = new FWDUVPDisplayObject("div")
    }, o.ERROR = "error", o.HIDE_COMPLETE = "hideComplete", o.prototype = null, s.FWDUVPEmbedWindow = o
}(window), window, window.FWDUVPEventDispatcher = function () {
        this.listeners = {
            events_ar: []
        }, this.addListener = function (e, t) {
            if (null == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function.");
            var o = {};
            o.type = e, o.listener = t, (o.target = this).listeners.events_ar.push(o)
        }, this.dispatchEvent = function (e, t) {
            if (null != this.listeners) {
                if (null == e) throw Error("type is required.");
                if ("object" == typeof e) throw Error("type must be of type String.");
                for (var o = 0, s = this.listeners.events_ar.length; o < s; o++)
                    if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e) {
                        if (t)
                            for (var n in t) this.listeners.events_ar[o][n] = t[n];
                        this.listeners.events_ar[o].listener.call(this, this.listeners.events_ar[o])
                    }
            }
        }, this.removeListener = function (e, t) {
            if (null == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function." + e);
            for (var o = 0, s = this.listeners.events_ar.length; o < s; o++)
                if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e && this.listeners.events_ar[o].listener === t) {
                    this.listeners.events_ar.splice(o, 1);
                    break
                }
        }, this.destroy = function () {
            this.listeners = null, this.addListener = null, this.dispatchEvent = null, this.removeListener = null
        }
    },
    function (i) {
        var a = function (e, t, o) {
            var s = this,
                n = a.prototype;
            s.screenToTest = e, s.screenToTest2 = t, s.hideDelay = o, s.globalX = 0, s.globalY = 0, s.currentTime, s.checkIntervalId_int, s.hideCompleteId_to, s.hasInitialTestEvents_bl = !1, s.addSecondTestEvents_bl = !1, s.dispatchOnceShow_bl = !0, s.dispatchOnceHide_bl = !1, s.isStopped_bl = !0, s.isMbl = FWDUVPUtils.isMobile, s.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, s.init = function () {}, s.start = function () {
                s.currentTime = (new Date).getTime(), clearInterval(s.checkIntervalId_int), s.checkIntervalId_int = setInterval(s.update, 100), s.addMouseOrTouchCheck(), s.isStopped_bl = !1
            }, s.stop = function () {
                clearInterval(s.checkIntervalId_int), s.isStopped_bl = !0, s.removeMouseOrTouchCheck(), s.removeMouseOrTouchCheck2()
            }, s.addMouseOrTouchCheck = function () {
                s.hasInitialTestEvents_bl || (s.hasInitialTestEvents_bl = !0, s.isMbl ? s.hasPointerEvent_bl ? (s.screenToTest.screen.addEventListener("pointerdown", s.onMouseOrTouchUpdate), s.screenToTest.screen.addEventListener("MSPointerMove", s.onMouseOrTouchUpdate)) : s.screenToTest.screen.addEventListener("touchstart", s.onMouseOrTouchUpdate) : i.addEventListener ? i.addEventListener("mousemove", s.onMouseOrTouchUpdate) : document.attachEvent && document.attachEvent("onmousemove", s.onMouseOrTouchUpdate))
            }, s.removeMouseOrTouchCheck = function () {
                s.hasInitialTestEvents_bl && (s.hasInitialTestEvents_bl = !1, s.isMbl ? s.hasPointerEvent_bl ? (s.screenToTest.screen.removeEventListener("pointerdown", s.onMouseOrTouchUpdate), s.screenToTest.screen.removeEventListener("MSPointerMove", s.onMouseOrTouchUpdate)) : s.screenToTest.screen.removeEventListener("touchstart", s.onMouseOrTouchUpdate) : i.removeEventListener ? i.removeEventListener("mousemove", s.onMouseOrTouchUpdate) : document.detachEvent && document.detachEvent("onmousemove", s.onMouseOrTouchUpdate))
            }, s.addMouseOrTouchCheck2 = function () {
                s.addSecondTestEvents_bl || (s.addSecondTestEvents_bl = !0, s.screenToTest.screen.addEventListener ? s.screenToTest.screen.addEventListener("mousemove", s.secondTestMoveDummy) : s.screenToTest.screen.attachEvent && s.screenToTest.screen.attachEvent("onmousemove", s.secondTestMoveDummy))
            }, s.removeMouseOrTouchCheck2 = function () {
                s.addSecondTestEvents_bl && (s.addSecondTestEvents_bl = !1, s.screenToTest.screen.removeEventListener ? s.screenToTest.screen.removeEventListener("mousemove", s.secondTestMoveDummy) : s.screenToTest.screen.detachEvent && s.screenToTest.screen.detachEvent("onmousemove", s.secondTestMoveDummy))
            }, s.secondTestMoveDummy = function () {
                s.removeMouseOrTouchCheck2(), s.addMouseOrTouchCheck()
            }, s.onMouseOrTouchUpdate = function (e) {
                var t = FWDUVPUtils.getViewportMouseCoordinates(e);
                s.globalX != t.screenX && s.globalY != t.screenY && (s.currentTime = (new Date).getTime()), s.globalX = t.screenX, s.globalY = t.screenY, s.isMbl || FWDUVPUtils.hitTest(s.screenToTest.screen, s.globalX, s.globalY) || (s.removeMouseOrTouchCheck(), s.addMouseOrTouchCheck2())
            }, s.update = function (e) {
                (new Date).getTime() > s.currentTime + s.hideDelay ? s.dispatchOnceShow_bl && (s.dispatchOnceHide_bl = !0, s.dispatchOnceShow_bl = !1, s.dispatchEvent(a.HIDE), clearTimeout(s.hideCompleteId_to), s.hideCompleteId_to = setTimeout(function () {
                    s.dispatchEvent(a.HIDE_COMPLETE)
                }, 1e3)) : s.dispatchOnceHide_bl && (clearTimeout(s.hideCompleteId_to), s.dispatchOnceHide_bl = !1, s.dispatchOnceShow_bl = !0, s.dispatchEvent(a.SHOW))
            }, s.reset = function () {
                clearTimeout(s.hideCompleteId_to), s.currentTime = (new Date).getTime(), s.dispatchEvent(a.SHOW)
            }, s.destroy = function () {
                s.removeMouseOrTouchCheck(), clearInterval(s.checkIntervalId_int), s.screenToTest = null, e = null, s.init = null, s.start = null, s.stop = null, s.addMouseOrTouchCheck = null, s.removeMouseOrTouchCheck = null, s.onMouseOrTouchUpdate = null, s.update = null, s.reset = null, s.destroy = null, n.destroy(), s = n = null, a.prototype = null
            }, s.init()
        };
        a.HIDE = "hide", a.SHOW = "show", a.HIDE_COMPLETE = "hideComplete", a.setPrototype = function () {
            a.prototype = new FWDUVPEventDispatcher
        }, i.FWDUVPHider = a
    }(window),
    function (e) {
        var o = function (n, e, t) {
            var i = this;
            o.prototype;
            i.bk_do = null, i.textHolder_do = null, i.warningIconPath_str = e, i.showErrorInfo_bl = t, i.show_to = null, i.isShowed_bl = !1, i.isShowedOnce_bl = !1, i.allowToRemove_bl = !0, i.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, i.init = function () {
                i.setResizableSizeAfterParent(), i.bk_do = new FWDUVPDisplayObject("div"), i.bk_do.setAlpha(.6), i.bk_do.setBkColor("#000000"), i.addChild(i.bk_do), i.textHolder_do = new FWDUVPDisplayObject("div"), FWDUVPUtils.isIEAndLessThen9 || (i.textHolder_do.getStyle().font = "Arial"), i.textHolder_do.getStyle().wordWrap = "break-word", i.textHolder_do.getStyle().padding = "10px", i.textHolder_do.getStyle().paddingLeft = "42px", i.textHolder_do.getStyle().lineHeight = "18px", i.textHolder_do.getStyle().color = "#000000", i.textHolder_do.setBkColor("#EEEEEE");
                var e = new Image;
                e.src = i.warningIconPath_str, i.img_do = new FWDUVPDisplayObject("img"), i.img_do.setScreen(e), i.img_do.setWidth(28), i.img_do.setHeight(28), i.addChild(i.textHolder_do), i.addChild(i.img_do)
            }, i.showText = function (e) {
                i.isShowedOnce_bl || (i.hasPointerEvent_bl ? i.screen.addEventListener("pointerdown", i.closeWindow) : (i.screen.addEventListener("click", i.closeWindow), i.screen.addEventListener("touchend", i.closeWindow)), i.isShowedOnce_bl = !0), i.setVisible(!1), i.textHolder_do.getStyle().paddingBottom = "10px", i.textHolder_do.setInnerHTML(e), clearTimeout(i.show_to), i.show_to = setTimeout(i.show, 60), setTimeout(function () {
                    i.positionAndResize()
                }, 10)
            }, i.show = function () {
                var e = Math.min(640, n.sW - 120);
                i.isShowed_bl = !0, i.textHolder_do.setWidth(e), setTimeout(function () {
                    i.showErrorInfo_bl && i.setVisible(!0), i.positionAndResize()
                }, 100)
            }, i.positionAndResize = function () {
                var e = i.textHolder_do.getWidth(),
                    t = i.textHolder_do.getHeight(),
                    o = parseInt((n.sW - e) / 2),
                    s = parseInt((n.sH - t) / 2);
                i.bk_do.setWidth(n.sW), i.bk_do.setHeight(n.sH), i.textHolder_do.setX(o), i.textHolder_do.setY(s), i.img_do.setX(o + 6), i.img_do.setY(s + parseInt((i.textHolder_do.getHeight() - i.img_do.h) / 2))
            }, i.closeWindow = function () {
                i.allowToRemove_bl && (i.isShowed_bl = !1, clearTimeout(i.show_to), setTimeout(function () {
                    try {
                        n.main_do.removeChild(i)
                    } catch (e) {}
                }, 100))
            }, i.init()
        };
        o.setPrototype = function () {
            o.prototype = new FWDUVPDisplayObject("div", "relative")
        }, o.prototype = null, e.FWDUVPInfo = o
    }(window),
    function (e) {
        var n = function (t, o) {
            var s = this;
            n.prototype;
            s.xhr = null, s.embedColoseN_img = o.embedColoseN_img, s.mainBk_do = null, s.mainHld = null, s.mainTextHolder_do = null, s.text_do = null, s.bk_do = null, s.clsBtn = null, s.embedWindowBackground_str = o.embedWindowBackground_str, s.embedWindowInputBackgroundPath_str = o.embedWindowInputBackgroundPath_str, s.secondaryLabelsColor_str = o.secondaryLabelsColor_str, s.inputColor_str = o.inputColor_str, s.sendButtonNPath_str = o.sendButtonNPath_str, s.sendButtonSPath_str = o.sendButtonSPath_str, s.inputBackgroundColor_str = o.inputBackgroundColor_str, s.borderColor_str = o.borderColor_str, s.sendToAFriendPath_str = o.sendToAFriendPath_str, s.maxTextWidth = 0, s.totalWidth = 0, s.sW = 0, s.sH = 0, s.buttonWidth = 44, s.buttonHeight = 19, s.embedWindowCloseButtonMargins = o.embedWindowCloseButtonMargins, s.finalEmbedPath_str = null, s.finalEmbedCode_str = null, s.linkToVideo_str = null, s.shareAndEmbedTextColor_str = o.shareAndEmbedTextColor_str, s.isDark = !0, -1 == s.embedWindowBackground_str.indexOf("dark") && (s.isDark = !1), s.isYTB_bl = !1, s.isShowed_bl = !1, s.isMbl = FWDUVPUtils.isMobile, s.useVectorIcons_bl = o.useVectorIcons_bl, s.init = function () {
                s.setBackfaceVisibility(), s.mainHld = new FWDUVPDisplayObject("div");
                var e = "fwduvp-info-window-white";
                s.isDark && (e = "fwduvp-info-window-dark"), s.mainHld.screen.className = e, s.mainBk_do = new FWDUVPDisplayObject("div"), s.mainBk_do.getStyle().width = "100%", s.mainBk_do.getStyle().height = "100%", s.mainBk_do.setAlpha(.9), s.mainBk_do.getStyle().background = "url('" + s.embedWindowBackground_str + "')", s.mainTextHolder_do = new FWDUVPDisplayObject("div", "absolute"), s.bk_do = new FWDUVPDisplayObject("div"), s.bk_do.getStyle().background = "url('" + s.embedWindowBackground_str + "')", s.bk_do.getStyle().borderStyle = "solid", s.bk_do.getStyle().borderWidth = "1px", s.bk_do.getStyle().borderColor = s.borderColor_str, s.text_do = new FWDUVPDisplayObject("div", "relative"), s.text_do.hasTransform3d_bl = !1, s.text_do.hasTransform2d_bl = !1, s.text_do.getStyle().fontFamily = "Arial", s.text_do.getStyle().fontSize = "12px", s.text_do.getStyle().fontSmoothing = "antialiased", s.text_do.getStyle().webkitFontSmoothing = "antialiased", s.text_do.getStyle().textRendering = "optimizeLegibility", s.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), s.clsBtn = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<div class='table-fwduvp-button'><span class='table-cell-fwduvp-button fwdicon-close'></span></div>", void 0, "UVPCloseButtonNormalState", "UVPCloseButtonSelectedState")) : (FWDUVPSimpleButton.setPrototype(), s.clsBtn = new FWDUVPSimpleButton(o.infoWindowClooseN_img, o.embedWindowClosePathS_str, void 0, !0, o.useHEX, o.nBC, o.sBC, !1, !1, !1, !1, !0)), s.clsBtn.addListener(FWDUVPSimpleButton.MOUSE_UP, s.closeButtonOnMouseUpHandler), s.mainHld.addChild(s.mainBk_do), s.mainTextHolder_do.addChild(s.bk_do), s.mainTextHolder_do.addChild(s.text_do), s.mainHld.addChild(s.mainTextHolder_do), s.addChild(s.mainHld), s.mainHld.addChild(s.clsBtn)
            }, s.closeButtonOnMouseUpHandler = function () {
                s.isShowed_bl && s.hide()
            }, s.positionAndResize = function () {
                s.sW = t.sW, s.sH = t.sH, s.maxTextWidth = Math.min(s.sW - 150, 500), s.totalWidth = s.maxTextWidth + s.buttonWidth + 40, s.positionFinal(), s.clsBtn.setX(s.sW - s.clsBtn.w - s.embedWindowCloseButtonMargins), s.clsBtn.setY(s.embedWindowCloseButtonMargins), s.setWidth(s.sW), s.setHeight(s.sH), s.mainHld.setWidth(s.sW), s.mainHld.setHeight(s.sH)
            }, s.positionFinal = function () {
                var e;
                s.mainTextHolder_do.setWidth(s.totalWidth), e = s.mainTextHolder_do.getHeight(), s.bk_do.setWidth(s.totalWidth - 2), s.bk_do.setHeight(e - 2), s.mainTextHolder_do.setX(parseInt((s.sW - s.totalWidth) / 2)), s.mainTextHolder_do.setY(parseInt((s.sH - e) / 2) - 8)
            }, s.show = function (e) {
                s.isShowed_bl || (s.isShowed_bl = !0, t.main_do.addChild(s), s.text_do.setInnerHTML(e), s.positionAndResize(), clearTimeout(s.hideCompleteId_to), clearTimeout(s.showCompleteId_to), s.mainHld.setY(-s.sH), s.showCompleteId_to = setTimeout(s.showCompleteHandler, 900), setTimeout(function () {
                    FWDAnimation.to(s.mainHld, .8, {
                        y: 0,
                        delay: .1,
                        ease: Expo.easeInOut
                    })
                }, 100))
            }, s.showCompleteHandler = function () {}, s.hide = function () {
                s.isShowed_bl && (s.isShowed_bl = !1, t.customContextMenu_do && t.customContextMenu_do.enable(), s.positionAndResize(), clearTimeout(s.hideCompleteId_to), clearTimeout(s.showCompleteId_to), s.hideCompleteId_to = setTimeout(s.hideCompleteHandler, 800), FWDAnimation.killTweensOf(s.mainHld), FWDAnimation.to(s.mainHld, .8, {
                    y: -s.sH,
                    ease: Expo.easeInOut
                }))
            }, s.hideCompleteHandler = function () {
                t.main_do.removeChild(s), s.dispatchEvent(n.HIDE_COMPLETE)
            }, s.init()
        };
        n.setPrototype = function () {
            n.prototype = new FWDUVPDisplayObject("div")
        }, n.ERROR = "error", n.HIDE_COMPLETE = "hideComplete", n.prototype = null, e.FWDUVPInfoWindow = n
    }(window),
    function (window) {
        var FWDUVPlayer = function (props) {
                FWDUVPlayer.V = "8.3";
                var _s = this;
                _s.isInstantiate_bl = !1, _s.displayType = props.displayType || FWDUVPlayer.RESPONSIVE, _s.displayType.toLowerCase() != FWDUVPlayer.RESPONSIVE && _s.displayType.toLowerCase() != FWDUVPlayer.FULL_SCREEN && _s.displayType.toLowerCase() != FWDUVPlayer.STICKY && _s.displayType.toLowerCase() != FWDUVPlayer.AFTER_PARENT && _s.displayType.toLowerCase() != FWDUVPlayer.LIGHTBOX && (_s.displayType = FWDUVPlayer.RESPONSIVE), _s.displayType = _s.displayType.toLowerCase(), _s.stickyOnScroll = props.stickyOnScroll || "no", _s.stickyOnScroll = "yes" == _s.stickyOnScroll, _s.displayType != FWDUVPlayer.RESPONSIVE && (_s.stickyOnScroll = !1), _s.isMinShowed = !0, _s.stickyOnScrollWidth = props.stickyOnScrollWidth || 700, _s.stickyOnScrollHeight = props.stickyOnScrollHeight || 394, _s.maxWidth = props.maxWidth || 640, _s.maxHeight = props.maxHeight || 380, _s.embeddedPlaylistId, _s.embeddedVideoId, _s.isEmbedded_bl = !1, _s.useYoutube_bl = props.useYoutube || "no", _s.useYoutube_bl = "yes" == _s.useYoutube_bl, _s.useVimeo_bl = props.useVimeo || "no", _s.useVimeo_bl = "yes" == _s.useVimeo_bl, _s.mainFolderPath_str = props.mainFolderPath, _s.mainFolderPath_str.lastIndexOf("/") + 1 != _s.mainFolderPath_str.length && (_s.mainFolderPath_str += "/"), _s.sknPth = props.skinPath, _s.sknPth.lastIndexOf("/") + 1 != _s.sknPth.length && (_s.sknPth += "/"), _s.warningIconPath_str = _s.mainFolderPath_str + _s.sknPth + "warningIcon.png", FWDUVPlayer.YTAPIReady = !1, _s.fillEntireVideoScreen_bl = !1, _s.init = function () {
                    var e, t, o, s, n;
                    _s.isInstantiate_bl || (FWDUVPlayer.instaces_ar.push(_s), FWDTweenLite.ticker.useRAF(!1), _s.props = props, _s.mustHaveHolderDiv_bl = !1, _s.instanceName_str = _s.props.instanceName, _s.instanceName_str ? window[_s.instanceName_str] ? alert("FWDUVPlayer instance name " + _s.instanceName_str + " is already defined and contains a different instance reference, set a different instance name.") : (window[_s.instanceName_str] = _s).props ? _s.props.parentId ? (_s.displayType == FWDUVPlayer.RESPONSIVE && (_s.mustHaveHolderDiv_bl = !0), !_s.mustHaveHolderDiv_bl || FWDUVPUtils.getChildById(_s.props.parentId) ? (_s.body = document.getElementsByTagName("body")[0], _s.displayType == FWDUVPlayer.STICKY ? (_s.stageContainer = document.createElement("div"), _s.stageContainer.style.position = "fixed", _s.stageContainer.style.width = "100%", _s.stageContainer.style.zIndex = "999999", _s.stageContainer.style.height = "0px", document.documentElement.appendChild(_s.stageContainer), _s.stageContainer.style.overflow = "visible") : _s.displayType == FWDUVPlayer.FULL_SCREEN || _s.displayType == FWDUVPlayer.LIGHTBOX ? _s.stageContainer = document.documentElement : _s.stageContainer = FWDUVPUtils.getChildById(_s.props.parentId), _s.position_str = _s.props.verticalPosition, _s.position_str || (_s.position_str = FWDUVPlayer.POSITION_TOP), "bottom" == _s.position_str ? _s.position_str = FWDUVPlayer.POSITION_BOTTOM : _s.position_str = FWDUVPlayer.POSITION_TOP, _s.horizontalPosition_str = _s.props.horizontalPosition, _s.horizontalPosition_str || (_s.horizontalPosition_str = FWDUVPlayer.CENTER), "center" == _s.horizontalPosition_str ? _s.horizontalPosition_str = FWDUVPlayer.CENTER : "left" == _s.horizontalPosition_str ? _s.horizontalPosition_str = FWDUVPlayer.LEFT : "right" == _s.horizontalPosition_str ? _s.horizontalPosition_str = FWDUVPlayer.RIGHT : _s.horizontalPosition_str = FWDUVPlayer.CENTER, _s.isEmbedded_bl && (_s.displayType = FWDUVPlayer.FULL_SCREEN), _s.isMin = !1, _s.lightBox_do = null, _s.listeners = {
                        events_ar: []
                    }, _s.customContextMenu_do = null, _s.info_do = null, _s.categories_do = null, _s.playlist_do = null, _s.main_do = null, _s.ytb_do = null, _s.preloader_do = null, _s.controller_do = null, _s.videoScreen_do = null, _s.videoPoster_do = null, _s.lrgPlayBtn = null, _s.hider = null, _s.videoHolder_do = null, _s.videoHider_do = null, _s.disableClick_do = null, _s.embedWindow_do = null, _s.spaceBetweenControllerAndPlaylist = _s.props.spaceBetweenControllerAndPlaylist || 1, _s.autoScale_bl = _s.props.autoScale, _s.autoScale_bl = "yes" == _s.autoScale_bl, _s.ec = document.getElementById("fwduvp_extra_content"), _s.showPreloader_bl = _s.props.showPreloader, _s.showPreloader_bl = "yes" == _s.showPreloader_bl, _s.preloaderColors = _s.props.preloaderColors || ["#666666", "#FFFFFF"], _s.backgroundColor_str = _s.props.backgroundColor || "transparent", _s.videoBackgroundColor_str = _s.props.videoBackgroundColor || "transparent", _s.mainBackgroundImagePath_str = _s.props.mainBackgroundImagePath, _s.mainBackgroundImagePath_str && _s.mainBackgroundImagePath_str.length < 3 && (_s.mainBackgroundImagePath_str = void 0), _s.animate_bl = !0, _s.isShowedFirstTime_bl = !0, _s.offsetX = parseInt(_s.props.offsetX) || 0, _s.offsetY = parseInt(_s.props.offsetY) || 0, _s.lastX = 0, _s.lastY = 0, _s.tempStageWidth = 0, _s.tempStageHeight = 0, _s.tempVidStageWidth = 0, _s.tempVidStageHeight = 0, _s.sW = 0, _s.sH = 0, _s.vidStageWidth = 0, _s.vidStageHeight = 0, _s.firstTapX, _s.firstTapY, _s.curTime, _s.totalTime, _s.catId = -1, _s.id = -1, _s.totaadsIdeos = 0, _s.prevCatId = -1, _s.totalTimePlayed = 0, _s.videoSourcePath_str = "", _s.prevVideoSourcePath_str, _s.posterPath_str = _s.props.posterPath, _s.videoType_str, _s.videoStartBehaviour_str, _s.prevVideoSource_str, _s.prUVPosterSource_str, _s.finalVideoPath_str, _s.playListThumbnailWidth = _s.props.thumbnailWidth || 80, _s.playListThumbnailHeight = _s.props.thumbnailHeight || 80, _s.showOnlyThumbnail = _s.props.showOnlyThumbnail, _s.showOnlyThumbnail = "yes" == _s.showOnlyThumbnail, _s.playlistWidth = _s.props.playlistRightWidth || 250, _s.playlistHeight = 0, _s.resizeHandlerId_to, _s.resizeHandler2Id_to, _s.hidePreloaderId_to, _s.orientationChangeId_to, _s.disableClickId_to, _s.clickDelayId_to, _s.secondTapId_to, _s.videoHiderId_to, _s.showPlaylistButtonAndPlaylist_bl = _s.props.showPlaylistButtonAndPlaylist, _s.showPlaylistButtonAndPlaylist_bl = "no" != _s.showPlaylistButtonAndPlaylist_bl, _s.isPlaylistShowed_bl = _s.props.showPlaylistByDefault, _s.isPlaylistShowed_bl = "no" != _s.isPlaylistShowed_bl, _s.showErrorInfo_bl = _s.props.showErrorInfo, _s.showErrorInfo_bl = "no" != _s.showErrorInfo_bl, _s.showAnnotationsPositionTool_bl = _s.props.showAnnotationsPositionTool, _s.showAnnotationsPositionTool_bl = "yes" == _s.showAnnotationsPositionTool_bl, _s.showAnnotationsPositionTool_bl && (_s.isPlaylistShowed_bl = !1), "pause" != FWDUVPlayer.videoStartBehaviour && "stop" != FWDUVPlayer.videoStartBehaviour && "default" != FWDUVPlayer.videoStartBehaviour && (FWDUVPlayer.videoStartBehaviour = "pause"), _s.lightBoxBackgroundOpacity = _s.props.lightBoxBackgroundOpacity || 1, _s.lightBoxBackgroundColor_str = _s.props.lightBoxBackgroundColor || "transparent", _s.preloaderBackgroundColor = _s.props.preloaderBackgroundColor || "#000000", _s.preloaderFillColor = _s.props.preloaderFillColor || "#FFFFFF", _s.addPrevId = 999999999 * Math.random(), _s.isVideoPlayingWhenOpenWindows_bl = !1, _s.isFirstPlaylistLoaded_bl = !1, _s.isVideoHiderShowed_bl = !1, _s.isSpaceDown_bl = !1, _s.isPlaying_bl = !1, _s.firstTapPlaying_bl = !1, _s.stickOnCurrentInstanceKey_bl = !1, _s.isFullScreen_bl = !1, _s.isFlashScreenReady_bl = !1, _s.orintationChangeComplete_bl = !0, _s.disableClick_bl = !1, _s.isAPIReady_bl = !1, _s.isInstantiate_bl = !0, _s.isPlaylistLoaded_bl = !1, _s.isPlaylistLoadedFirstTime_bl = !1, _s.useDeepLinking_bl = _s.props.useDeepLinking, _s.useDeepLinking_bl = "yes" == _s.useDeepLinking_bl, _s.isAdd_bl = !1, _s.isMbl = FWDUVPUtils.isMobile, _s.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, _s.lightBoxWidth = _s.props.maxWidth || 500, _s.lightBoxHeight = _s.props.maxHeight || 400, _s.isShowed_bl = _s.props.showPlayerByDefault, _s.isShowed_bl = "yes" == _s.isShowed_bl, _s.googleAnalyticsTrackingCode = _s.props.googleAnalyticsTrackingCode, !window.ga && _s.googleAnalyticsTrackingCode ? (e = window, t = document, o = "ga", e.GoogleAnalyticsObject = o, e.ga = e.ga || function () {
                        (e.ga.q = e.ga.q || []).push(arguments)
                    }, e.ga.l = +new Date, s = t.createElement("script"), n = t.getElementsByTagName("script")[0], s.async = 1, s.src = "https://www.google-analytics.com/analytics.js", n.parentNode.insertBefore(s, n), ga("create", _s.googleAnalyticsTrackingCode, "auto"), ga("send", "pageview")) : window.ga && _s.googleAnalyticsTrackingCode && (ga("create", _s.googleAnalyticsTrackingCode, "auto"), ga("send", "pageview")), _s.displayType == FWDUVPlayer.LIGHTBOX ? _s.setupLightBox() : _s.displayType != FWDUVPlayer.STICKY && _s.initializeOnlyWhenVisible_bl ? (_s.startResizeHandler(), window.addEventListener("scroll", _s.onInitlalizeScrollHandler), setTimeout(_s.onInitlalizeScrollHandler, 500)) : (_s.setupPlayer(), _s.startResizeHandler())) : alert("FWDUVPlayer holder div is not found, please make sure that the div exsists and the id is correct! " + _s.props.parentId)) : alert("Property parentId is not defined in the FWDUVPlayer constructor, _s property represents the div id into which the megazoom is added as a child!") : alert("FWDUVPlayer constructor properties object is not defined!") : alert("FWDUVPlayer instance name is required please make sure that the instanceName parameter exsists and it's value is uinique."))
                }, _s.addMinOnScroll = function () {
                    _s.displayType == FWDUVPlayer.RESPONSIVE && _s.stickyOnScroll && window.addEventListener("scroll", _s.minimizeOnScrollHandler)
                }, _s.removeMinOnScroll = function () {
                    _s.stickyOnScroll && window.removeEventListener("scroll", _s.minimizeOnScrollHandler)
                }, _s.minimizeOnScrollHandler = function (e) {
                    var t = FWDUVPUtils.getScrollOffsets();
                    _s.pageXOffset = t.x, _s.pageYOffset = t.y, _s.stageContainer.getBoundingClientRect().bottom < 0 ? _s.setMinimized() : _s.setNormal()
                }, _s.setMinimized = function () {
                    _s.isMin || _s.isFullscreen_bl || (_s.isMin = !0, _s.main_do.getStyle().position = "fixed", _s.main_do.getStyle().zIndex = 9999999999999, _s.main_do.setAlpha(0), _s.startPosisionOnMin())
                }, _s.startPosisionOnMin = function () {
                    _s.wasPlaylistShowed_bl = _s.isPlaylistShowed_bl, _s.showPlaylist(), _s.resizeHandler(), _s.positionOnMin()
                }, _s.setNormal = function () {
                    _s.isMin && (_s.isMinShowed = !0, _s.isMin = !1, _s.main_do.getStyle().position = "relative", _s.main_do.getStyle().zIndex = 0, FWDAnimation.killTweensOf(_s.main_do), _s.main_do.setAlpha(1), _s.main_do.setX(0), _s.main_do.setY(0), _s.opener_do && _s.opener_do.setX(-1e3), _s.startPosisionOnNormal())
                }, _s.startPosisionOnNormal = function () {
                    _s.opener_do && _s.opener_do.showCloseButton(), _s.isPlaylistShowed_bl = _s.wasPlaylistShowed_bl, _s.isPlaylistShowed_bl && _s.hidePlaylist(!0), _s.resizeHandler()
                }, _s.positionOnMin = function (e) {
                    var t, o, s, n, i;
                    (_s.isMin || e) && (t = 5, o = .2, _s.isMbl && (t = 0), s = 0, _s.isMinShowed || (o = 0, s = Math.round(_s.tempStageHeight) + t), _s.opener_do && (n = _s.ws.w - _s.opener_do.w - t, i = _s.ws.h - _s.tempStageHeight - t + s - _s.opener_do.h), _s.main_do.setX(_s.ws.w - _s.tempStageWidth - t), 0 == _s.main_do.alpha || e ? (0 == _s.main_do.alpha && (_s.main_do.setY(_s.ws.h), _s.opener_do && (_s.opener_do.setX(n), _s.opener_do.setY(_s.ws.h))), FWDAnimation.to(_s.main_do, .8, {
                        alpha: 1,
                        y: _s.ws.h - _s.tempStageHeight - t + s,
                        delay: o,
                        ease: Expo.easeInOut
                    }), _s.opener_do && (FWDAnimation.killTweensOf(_s.opener_do), FWDAnimation.to(_s.opener_do, .8, {
                        x: n,
                        y: i,
                        delay: o,
                        ease: Expo.easeInOut
                    }))) : (FWDAnimation.killTweensOf(_s.main_do), _s.main_do.setAlpha(1), _s.main_do.setY(_s.ws.h - _s.tempStageHeight - t + s), _s.opener_do && (FWDAnimation.killTweensOf(_s.opener_do), _s.opener_do.setX(n), _s.opener_do.setY(i))))
                }, _s.onInitlalizeScrollHandler = function () {
                    var e = FWDUVPUtils.getScrollOffsets();
                    _s.pageXOffset = e.x, _s.pageYOffset = e.y, _s.main_do.getRect().top >= -_s.sH && _s.main_do.getRect().top < _s.ws.h && (window.removeEventListener("scroll", _s.onInitlalizeScrollHandler), _s.setupPlayer())
                }, _s.setupPlayer = function () {
                    _s.main_do || (_s.setupMainDo(), _s.setupInfo(), _s.setupData())
                }, _s.setupLightBox = function () {
                    FWDUVPLightBox.setPrototype(), _s.lightBox_do = new FWDUVPLightBox(_s, _s.lightBoxBackgroundColor_str, _s.backgroundColor_str, _s.lightBoxBackgroundOpacity, _s.lightBoxWidth, _s.lightBoxHeight), _s.lightBox_do.addListener(FWDUVPLightBox.SHOW, _s.lightBoxShowHandler), _s.lightBox_do.addListener(FWDUVPLightBox.CLOSE, _s.lightBoxCloseHandler), _s.lightBox_do.addListener(FWDUVPLightBox.HIDE_COMPLETE, _s.lightBoxHideCompleteHandler), _s.setupPlayer()
                }, _s.lightBoxShowHandler = function () {}, _s.lightBoxCloseHandler = function () {
                    _s.stop(), _s.stopResizeHandler()
                }, _s.lightBoxHideCompleteHandler = function () {
                    _s.dispatchEvent(FWDUVPlayer.HIDE_LIGHTBOX_COMPLETE)
                }, _s.setupMainDo = function () {
                    _s.main_do = new FWDUVPDisplayObject("div", "relative"), _s.main_do.screen.className = "fwduvp", _s.hasPointerEvent_bl && (_s.main_do.getStyle().touchAction = "none"), _s.main_do.getStyle().webkitTapHighlightColor = "rgba(0, 0, 0, 0)", _s.main_do.getStyle().webkitFocusRingColor = "rgba(0, 0, 0, 0)", _s.main_do.getStyle().width = "100%", _s.main_do.getStyle().height = "100%", _s.main_do.setBackfaceVisibility(), _s.main_do.setBkColor(_s.backgroundColor_str), (!FWDUVPUtils.isMobile || FWDUVPUtils.isMobile && FWDUVPUtils.hasPointerEvent) && _s.main_do.setSelectable(!1), _s.videoHolder_do = new FWDUVPDisplayObject("div"), _s.main_do.addChild(_s.videoHolder_do), _s.displayType == FWDUVPlayer.STICKY ? (_s.background_do = new FWDUVPDisplayObject("div"), _s.background_do.getStyle().width = "100%", _s.mainBackgroundImagePath_str && (_s.mainBackground_do = new FWDUVPDisplayObject("div"), _s.stageContainer.appendChild(_s.mainBackground_do.screen)), _s.stageContainer.appendChild(_s.background_do.screen), _s.stageContainer.appendChild(_s.main_do.screen)) : _s.displayType == FWDUVPlayer.FULL_SCREEN ? (_s.stageContainer.style.overflow = "hidden", _s.main_do.getStyle().position = "absolute", document.documentElement.appendChild(_s.main_do.screen), _s.stageContainer.style.zIndex = 9999999999998, _s.main_do.getStyle().zIndex = 9999999999998) : _s.displayType == FWDUVPlayer.BACKGROUND_VIDEO ? (document.documentElement.appendChild(_s.main_do.screen), _s.main_do.getStyle().zIndex = -9999999999998, _s.main_do.getStyle().position = "fixed", document.documentElement.insertBefore(_s.main_do.screen, document.documentElement.firstChild)) : _s.displayType == FWDUVPlayer.LIGHTBOX ? (_s.main_do.getStyle().position = "absolute", _s.stageContainer = _s.lightBox_do.mainLightBox_do.screen, _s.stageContainer.appendChild(_s.main_do.screen), _s.main_do.setX(-1e4), _s.main_do.setY(-1e4), _s.main_do.setWidth(0), _s.main_do.setHeight(0)) : (_s.stageContainer.style.overflow = "hidden", _s.stageContainer.appendChild(_s.main_do.screen)), _s.isEmbedded_bl && (_s.main_do.getStyle().zIndex = 9999999999998)
                }, _s.setupInfo = function () {
                    FWDUVPInfo.setPrototype(), _s.info_do = new FWDUVPInfo(_s, _s.warningIconPath_str, _s.showErrorInfo_bl), _s.info_do.getStyle().zIndex = "9999999999999999"
                }, _s.startResizeHandler = function () {
                    _s.displayType == FWDUVPlayer.STICKY && (FWDUVPUtils.isAndroid && window.addEventListener("orientationchange", _s.orientationChange), window.addEventListener("scroll", _s.onScrollHandler)), _s.displayType == FWDUVPlayer.LIGHTBOX && window.addEventListener("scroll", _s.onScrollHandler), window.addEventListener("resize", _s.onResizeHandler), _s.onResizeHandler(!0), _s.resizeHandlerId_to = setTimeout(function () {
                        _s.resizeHandler()
                    }, 500)
                }, _s.orientationChange = function () {
                    _s.orintationChangeComplete_bl = !1, clearTimeout(_s.resizeHandlerId_to), clearTimeout(_s.resizeHandler2Id_to), clearTimeout(_s.orientationChangeId_to), _s.orientationChangeId_to = setTimeout(function () {
                        _s.orintationChangeComplete_bl = !0, _s.stageContainer.style.left = "0", _s.resizeHandler(!0)
                    }, 1e3), _s.stageContainer.style.left = "-5000px", _s.preloader_do && _s.preloader_do.setX(-5e3)
                }, _s.onScrollHandler = function (e) {
                    var t;
                    _s.displayType == FWDUVPlayer.STICKY && _s.isMbl && _s.onResizeHandler(), _s.lightBox_do && !_s.lightBox_do.isShowed_bl || (_s.scrollHandler(), t = FWDUVPUtils.getScrollOffsets(), _s.scrollOffsets = t)
                }, _s.scrollHandler = function () {
                    var e = FWDUVPUtils.getScrollOffsets();
                    _s.pageXOffset = e.x, _s.pageYOffset = e.y, _s.displayType == FWDUVPlayer.LIGHTBOX ? (_s.lightBox_do.setX(e.x), _s.lightBox_do.setY(e.y)) : !_s.isFullScreen_bl && _s.displayType != FWDUVPlayer.FULL_SCREEN || (_s.main_do.setX(e.x), _s.main_do.setY(e.y))
                }, _s.stopResizeHandler = function () {
                    window.removeEventListener ? window.removeEventListener("resize", _s.onResizeHandler) : window.detachEvent && window.detachEvent("onresize", _s.onResizeHandler), clearTimeout(_s.resizeHandlerId_to)
                }, _s.onResizeHandler = function (e) {
                    _s.resizeHandler(), clearTimeout(_s.resizeHandler2Id_to), _s.resizeHandler2Id_to = setTimeout(function () {
                        _s.resizeHandler()
                    }, 300)
                }, _s.prevVpW, _s.resizeHandler = function (e, t) {
                    _s.tempPlaylistPosition_str;
                    var o = FWDUVPUtils.getViewportSize(),
                        s = FWDUVPUtils.getScrollOffsets();
                    if (_s.ws = o, _s.showPlaylistOnFullScreen = _s._d.showPlaylistOnFullScreen, _s.ws.w < 1e3 && (_s.showPlaylistOnFullScreen = !1), _s.displayType != FWDUVPlayer.STICKY || _s.isFullScreen_bl)
                        if (_s.displayType != FWDUVPlayer.LIGHTBOX || _s.isFullScreen_bl) _s.isFullScreen_bl || _s.displayType == FWDUVPlayer.FULL_SCREEN ? (_s.main_do.setX(0), _s.main_do.setY(0), _s.sW = o.w, _s.sH = o.h) : _s.displayType == FWDUVPlayer.AFTER_PARENT ? (_s.main_do.setX(0), _s.main_do.setY(0), _s.sW = _s.stageContainer.offsetWidth, _s.sH = _s.stageContainer.offsetHeight) : (_s.stageContainer.style.width = "100%", _s.stageContainer.offsetWidth > _s.maxWidth && (_s.stageContainer.style.width = _s.maxWidth + "px"), _s.sW = _s.stageContainer.offsetWidth, _s.autoScale_bl ? _s.sH = parseInt(_s.maxHeight * (_s.sW / _s.maxWidth)) : _s.sH = _s.maxHeight, _s.tempStageHeight = _s.sH);
                        else {
                            if (!_s.lightBox_do.isShowed_bl || !_s.main_do) return;
                            _s.lightBoxWidth > o.w ? (_s.finalLightBoxWidth = o.w, _s.finalLightBoxHeight = parseInt(_s.lightBoxHeight * (o.w / _s.lightBoxWidth))) : (_s.finalLightBoxWidth = _s.lightBoxWidth, _s.finalLightBoxHeight = _s.lightBoxHeight), _s.lightBox_do.setWidth(o.w), _s.lightBox_do.setHeight(o.h), _s.lightBox_do.setX(s.x), _s.lightBox_do.setY(s.y), _s.lightBox_do.mainLightBox_do.setX(parseInt((o.w - _s.finalLightBoxWidth) / 2)), _s.lightBox_do.mainLightBox_do.setY(parseInt((o.h - _s.finalLightBoxHeight) / 2)), _s.lightBox_do.clsBtn && _s.lightBox_do.isShowed_bl && (_s.lightBox_do.clsBtn.setX(o.w - _s.lightBox_do.clsBtn.w - 15), _s.lightBox_do.clsBtn.setY(15)), _s.main_do.setX(0), _s.main_do.setY(0), _s.lightBox_do.mainLightBox_do.setWidth(_s.finalLightBoxWidth), _s.lightBox_do.mainLightBox_do.setHeight(_s.finalLightBoxHeight), _s.sW = _s.finalLightBoxWidth, _s.sH = _s.finalLightBoxHeight
                        }
                    else _s.main_do.getStyle().width = "100%", _s.main_do.getWidth() > _s.maxWidth && _s.main_do.setWidth(_s.maxWidth), _s.sW = _s.main_do.getWidth(), _s.autoScale_bl ? _s.sH = parseInt(_s.maxHeight * (_s.sW / _s.maxWidth)) : _s.sH = _s.maxHeight;
                    _s.sH > o.h && _s.isFullScreen_bl && (_s.sH = o.h), _s._d && _s.playlist_do && (_s.playlistHeight = parseInt(_s._d.playlistBottomHeight)), _s.isMin && !_s.isFullScreen_bl && (_s.sW = Math.min(_s.stickyOnScrollWidth - 10, _s.ws.w - 10), _s.sH = parseInt(_s.stickyOnScrollHeight * (_s.sW / _s.stickyOnScrollWidth)), _s.tempStageHeight = _s.sH), _s._d && (_s.tempPlaylistPosition_str = _s._d.playlistPosition_str, (_s.sW < 800 || _s.ec && _s.sH < 600) && (_s.tempPlaylistPosition_str = "bottom"), _s.playlistPosition_str = _s.tempPlaylistPosition_str, _s.playlist_do && (_s.playlist_do.position_str = _s.tempPlaylistPosition_str)), _s.playlist_do && _s.isPlaylistShowed_bl ? "bottom" == _s.playlistPosition_str ? (_s.vidStageWidth = _s.sW, _s.sH += _s.playlistHeight + _s.spaceBetweenControllerAndPlaylist, _s.vidStageHeight = _s.sH - _s.playlistHeight - _s.spaceBetweenControllerAndPlaylist, _s.displayType == FWDUVPlayer.FULL_SCREEN && _s.controller_do.disablePlaylistButton()) : "right" == _s.playlistPosition_str && (_s.isFullScreen_bl && !_s.showPlaylistOnFullScreen ? _s.vidStageWidth = _s.sW : _s.vidStageWidth = _s.sW - _s.playlistWidth - _s.spaceBetweenControllerAndPlaylist, _s.controller_do && _s.controller_do.enablePlaylistButton(), _s.vidStageHeight = _s.sH) : (_s.vidStageWidth = _s.sW, _s.vidStageHeight = _s.sH), _s.controller_do && _s.playlist_do && ("right" == _s.playlistPosition_str ? _s.isFullScreen_bl && !_s.showPlaylistOnFullScreen ? _s.controller_do.disablePlaylistButton() : _s.controller_do.enablePlaylistButton() : _s.isEmbedded_bl && _s.controller_do.disablePlaylistButton()), _s.mainBackground_do && (_s.mainBackground_do.setWidth(_s.ws.w), _s.mainBackground_do.setHeight(_s.sH)), e || (FWDAnimation.killTweensOf(_s), _s.tempStageWidth = _s.sW, _s.tempStageHeight = _s.sH, _s.tempVidStageWidth = _s.vidStageWidth, _s.tempVidStageHeight = Math.max(0, _s.vidStageHeight), _s.resizeFinal(t), _s.prevVpW == o.w && _s.displayType == FWDUVPlayer.STICKY || _s.setStageContainerFinalHeightAndPosition(t)), setTimeout(function () {
                        _s.prevVpW = o.w
                    }, 50)
                }, _s.resizeFinal = function (e) {
                    _s.displayType == FWDUVPlayer.STICKY || _s.isMin || (_s.stageContainer.style.height = _s.tempStageHeight + "px"), _s.mainBackground_do && (_s.mainBackground_do.setWidth(_s.ws.w), _s.mainBackground_do.setHeight(_s.tempStageHeight)), _s.main_do.setWidth(_s.tempStageWidth), _s.videoHolder_do.setWidth(_s.tempVidStageWidth), _s.videoHolder_do.setHeight(_s.tempVidStageHeight), _s.showPlaylistButtonAndPlaylist_bl && _s.isPlaylistShowed_bl && _s.playlistPosition_str, _s.main_do.setHeight(_s.tempStageHeight), _s.displayType == FWDUVPlayer.LIGHTBOX && _s.lightBox_do.mainLightBox_do.setY(parseInt((_s.ws.h - _s.tempStageHeight) / 2)), _s.audioScreen_do && _s.videoType_str == FWDUVPlayer.MP3 && _s.audioScreen_do.resizeAndPosition(_s.tempVidStageWidth, _s.tempVidStageHeight), _s.ytb_do && _s.videoType_str == FWDUVPlayer.YOUTUBE && (_s.ytb_do.setWidth(_s.tempVidStageWidth), _s.ytb_do.setHeight(_s.tempVidStageHeight)), _s.logo_do && _s.logo_do.positionAndResize(), _s.playlist_do && !FWDAnimation.isTweening(_s) && _s.playlist_do.resizeAndPosition(e), _s.annotations_do && (FWDAnimation.isTweening(_s) ? _s.annotations_do.position(!0) : _s.annotations_do.position(!1)), _s.controller_do && _s.controller_do.resizeAndPosition(), _s.categories_do && _s.categories_do.resizeAndPosition(), !_s.videoScreen_do || _s.videoType_str != FWDUVPlayer.VIDEO && _s.videoType_str != FWDUVPlayer.HLS_JS && _s.videoType_str != FWDUVPlayer.DASH || (_s.finaadsIdeoScreenW = _s.tempVidStageWidth, _s.finaadsIdeoScreenH = _s.tempVidStageHeight, _s.finaadsIdeoScreenX = _s.finaadsIdeoScreenY = 0, _s.videoScreen_do.resizeAndPosition(_s.finaadsIdeoScreenW, _s.finaadsIdeoScreenH, _s.finaadsIdeoScreenX, _s.finaadsIdeoScreenY)), _s.isIMA && _s.IMA && _s.IMA.resizeAndPosition(), _s.ytb_do && _s.ytb_do.ytb && _s.videoType_str == FWDUVPlayer.YOUTUBE && _s.ytb_do.resizeAndPosition(), _s.vimeo_do && _s.videoType_str == FWDUVPlayer.VIMEO && _s.vimeo_do.resizeAndPosition(), _s.preloader_do && _s.positionPreloader(), _s.dClk_do && ((!_s.is360 || _s.videoType_str != FWDUVPlayer.YOUTUBE) && (_s.videoType_str != FWDUVPlayer.VIMEO || _s._d.showDefaultControllerForVimeo_bl) ? (_s.dClk_do.setWidth(_s.tempVidStageWidth), _s.isMbl || _s.videoType_str != FWDUVPlayer.YOUTUBE || _s.isAdd_bl, _s.dClk_do.setHeight(_s.tempVidStageHeight)) : _s.dClk_do.setWidth(0)), _s.videoHider_do && _s.resizeVideoHider(), _s.lrgPlayBtn && _s.positionLargePlayButton(), _s.videoPoster_do && _s.videoPoster_do.allowToShow_bl && _s.videoPoster_do.positionAndResize(), _s.popw_do && _s.popw_do.isShowed_bl && _s.popw_do.positionAndResize(), _s.embedWindow_do && _s.embedWindow_do.isShowed_bl && _s.embedWindow_do.positionAndResize(), _s.passWindow_do && _s.passWindow_do.isShowed_bl && _s.passWindow_do.positionAndResize(), _s.lg_do && _s.lg_do.isShowed_bl && _s.lg_do.positionAndResize(), _s.infoWindow_do && _s.infoWindow_do.isShowed_bl && _s.infoWindow_do.positionAndResize(), _s.info_do && _s.info_do.isShowed_bl && _s.info_do.positionAndResize(), _s.shareWindow_do && _s.shareWindow_do.isShowed_bl && _s.shareWindow_do.positionAndResize(), _s.adsStart_do && _s.isAdd_bl && _s.positionAds(), _s.subtitle_do && _s.subtitle_do.position(e), _s.popupAds_do && _s.popupAds_do.position(e), _s.positionAdsImage(), _s.positionOnMin()
                }, _s.setStageContainerFinalHeightAndPosition = function (e) {
                    _s.displayType == FWDUVPlayer.STICKY && (_s.allowToResizeAndPosition_bl = !0, clearTimeout(_s.showPlaylistWithDelayId_to), _s.horizontalPosition_str == FWDUVPlayer.LEFT ? (_s.main_do.setX(_s.offsetX), _s.opener_do && ("right" == _s._d.openerAlignment_str ? _s.opener_do.setX(Math.round(_s.sW - _s.opener_do.w + _s.offsetX)) : _s.opener_do.setX(_s.offsetX))) : _s.horizontalPosition_str == FWDUVPlayer.CENTER ? (_s.main_do.setX(Math.round((_s.ws.w - _s.sW) / 2)), _s.opener_do && ("right" == _s._d.openerAlignment_str ? _s.opener_do.setX(parseInt((_s.ws.w - _s.sW) / 2) + _s.sW - _s.opener_do.w) : _s.opener_do.setX(_s.main_do.x))) : _s.horizontalPosition_str == FWDUVPlayer.RIGHT && (_s.main_do.setX(Math.round(_s.ws.w - _s.sW - _s.offsetX)), _s.opener_do && ("right" == _s._d.openerAlignment_str ? _s.opener_do.setX(Math.round(_s.ws.w - _s.opener_do.w - _s.offsetX)) : _s.opener_do.setX(Math.round(_s.ws.w - _s.sW - _s.offsetX)))), e ? _s.position_str == FWDUVPlayer.POSITION_TOP ? (_s.isShowed_bl && !_s.isShowedFirstTime_bl ? FWDAnimation.to(_s.stageContainer, .8, {
                        css: {
                            top: _s.offsetY
                        },
                        ease: Expo.easeInOut
                    }) : FWDAnimation.to(_s.stageContainer, .8, {
                        css: {
                            top: -_s.sH
                        },
                        ease: Expo.easeInOut
                    }), _s.isShowedFirstTime_bl ? _s.opener_do && FWDAnimation.to(_s.opener_do, .8, {
                        y: _s.sH - _s.opener_do.h,
                        ease: Expo.easeInOut
                    }) : _s.opener_do && FWDAnimation.to(_s.opener_do, .8, {
                        y: _s.sH,
                        ease: Expo.easeInOut
                    })) : (_s.isShowed_bl && !_s.isShowedFirstTime_bl ? FWDAnimation.to(_s.stageContainer, .8, {
                        css: {
                            top: _s.ws.h - _s.sH - _s.offsetY
                        },
                        ease: Expo.easeInOut
                    }) : FWDAnimation.to(_s.stageContainer, .8, {
                        css: {
                            top: _s.ws.h
                        },
                        ease: Expo.easeInOut,
                        onComplete: _s.moveWheyLeft
                    }), _s.isShowedFirstTime_bl ? _s.opener_do && FWDAnimation.to(_s.opener_do, .8, {
                        y: 0,
                        ease: Expo.easeInOut
                    }) : _s.opener_do && FWDAnimation.to(_s.opener_do, .8, {
                        y: -_s.opener_do.h,
                        ease: Expo.easeInOut
                    })) : (FWDAnimation.killTweensOf(_s.stageContainer), _s.position_str == FWDUVPlayer.POSITION_TOP ? (_s.isShowed_bl && !_s.isShowedFirstTime_bl ? _s.stageContainer.style.top = _s.offsetY + "px" : _s.stageContainer.style.top = -_s.sH + "px", _s.isShowedFirstTime_bl ? _s.opener_do && _s.opener_do.setY(_s.sH - _s.opener_do.h) : _s.opener_do && _s.opener_do.setY(_s.sH)) : (_s.isShowed_bl && !_s.isShowedFirstTime_bl ? _s.stageContainer.style.top = _s.ws.h - _s.sH - _s.offsetY + "px" : _s.stageContainer.style.top = _s.ws.h + "px", _s.isShowedFirstTime_bl ? _s.opener_do && _s.opener_do.setY(0) : _s.opener_do && _s.opener_do.setY(-_s.opener_do.h))))
                }, _s.setupClickScreen = function () {
                    _s.dClk_do = new FWDUVPDisplayObject("div"), FWDUVPUtils.isIE && _s.dClk_do.setBkColor("rgba(255,0,0,.00001"), _s.hasPointerEvent_bl ? (_s.dClk_do.screen.addEventListener("pointerdown", _s.playPauseDownHandler), _s.dClk_do.screen.addEventListener("pointerup", _s.playPauseClickHandler), _s.dClk_do.screen.addEventListener("pointermove", _s.playPauseMoveHandler)) : _s.isMbl ? _s.dClk_do.screen.addEventListener("click", _s.playPauseClickHandler) : (_s.dClk_do.screen.addEventListener("mousedown", _s.playPauseDownHandler), _s.dClk_do.screen.addEventListener("mouseup", _s.playPauseClickHandler), _s.dClk_do.screen.addEventListener("mousemove", _s.playPauseMoveHandler)), _s.hideClickScreen(), _s.videoHolder_do.addChild(_s.dClk_do)
                }, _s.playPauseDownHandler = function (e) {
                    _s.isClickHandlerMoved_bl = !1;
                    var t = FWDUVPUtils.getViewportMouseCoordinates(e);
                    _s.firstDommyTapX = t.screenX, _s.firstDommyTapY = t.screenY, _s.is360 && (_s.dClk_do.getStyle().cursor = "url(" + _s._d.grabPath_str + "), default")
                }, _s.playPauseMoveHandler = function (e) {
                    var t, o, s = FWDUVPUtils.getViewportMouseCoordinates(e);
                    e.touches && 1 != e.touches.length || (t = Math.abs(s.screenX - _s.firstDommyTapX), o = Math.abs(s.screenY - _s.firstDommyTapY), (_s.isMbl && (10 < t || 10 < o) || !_s.isMbl && (2 < t || 2 < o)) && (_s.isClickHandlerMoved_bl = !0))
                }, _s.playPauseClickHandler = function (e) {
                    _s.is360 && (_s.dClk_do.getStyle().cursor = "url(" + _s._d.handPath_str + "), default"), 2 != e.button && (_s.isClickHandlerMoved_bl || (_s.isAdd_bl ? _s._d.adsPageToOpenURL_str && "none" != _s._d.adsPageToOpenURL_str && (_s.ClickTracking && _s.executeVastEvent(_s.ClickTracking), window.open(_s._d.adsPageToOpenURL_str, _s._d.adsPageToOpenTarget_str), _s.pause()) : _s.disableClick_bl || (_s.firstTapPlaying_bl = _s.isPlaying_bl, (FWDUVPlayer.keyboardCurInstance = _s).controller_do && 0 != _s.controller_do.mainHld.y && _s.isMbl || (_s.isMbl || (FWDUVPlayer.videoStartBehaviour == FWDUVPlayer.PAUSE_ALL_VIDEOS ? FWDUVPlayer.pauseAllVideos(_s) : FWDUVPlayer.videoStartBehaviour == FWDUVPlayer.STOP_ALL_VIDEOS && FWDUVPlayer.stopAllVideos(_s)), _s.videoType_str == FWDUVPlayer.YOUTUBE ? _s.ytb_do.togglePlayPause() : _s.videoType_str == FWDUVPlayer.MP3 ? _s.audioScreen_do.togglePlayPause() : _s.videoType_str == FWDUVPlayer.VIMEO ? _s.vimeo_do.togglePlayPause() : _s.videoScreen_do && _s.videoScreen_do.togglePlayPause()))))
                }, _s.showClickScreen = function () {
                    _s.dClk_do.setVisible(!0), _s.isAdd_bl && _s._d.adsPageToOpenURL_str && "none" != _s._d.adsPageToOpenURL_str ? _s.dClk_do.setButtonMode(!0) : _s.is360 ? _s.dClk_do.getStyle().cursor = "url(" + _s._d.handPath_str + "), default" : _s.dClk_do.setButtonMode(!1)
                }, _s.hideClickScreen = function () {
                    _s.dClk_do.setVisible(!1)
                }, _s.setupDisableClick = function () {
                    _s.disableClick_do = new FWDUVPDisplayObject("div"), FWDUVPUtils.isIE && _s.disableClick_do.setBkColor("rgba(0,255,0,.0001"), _s.main_do.addChild(_s.disableClick_do)
                }, _s.disableClick = function () {
                    _s.disableClick_bl = !0, clearTimeout(_s.disableClickId_to), _s.disableClick_do && (_s.disableClick_do.setWidth(_s.sW), _s.disableClick_do.setHeight(_s.sH)), _s.disableClickId_to = setTimeout(function () {
                        _s.disableClick_do && (_s.disableClick_do.setWidth(0), _s.disableClick_do.setHeight(0)), _s.disableClick_bl = !1
                    }, 500)
                }, _s.showDisable = function () {
                    _s.disableClick_do.setWidth(_s.sW), _s.disableClick_do.setHeight(_s.sH)
                }, _s.hideDisable = function () {
                    _s.disableClick_do && 0 != _s.disableClick_do.w && (_s.disableClick_do.setWidth(0), _s.disableClick_do.setHeight(0))
                }, _s.addDoubleClickSupport = function () {
                    _s.hasPointerEvent_bl ? _s.dClk_do.screen.addEventListener("pointerdown", _s.onFirstDown) : (_s.isMbl || _s.dClk_do.screen.addEventListener("mousedown", _s.onFirstDown), _s.dClk_do.screen.addEventListener("touchstart", _s.onFirstDown)), _s.setupVisualization()
                }, _s.onFirstDown = function (e) {
                    var t;
                    2 != e.button && (_s.isFullscreen_bl && e.preventDefault && e.preventDefault(), t = FWDUVPUtils.getViewportMouseCoordinates(e), _s.firstTapX = t.screenX - _s.main_do.getGlobalX(), _s.firstTapY = t.screenY - _s.main_do.getGlobalY(), _s.firstTapPlaying_bl = _s.isPlaying_bl, FWDUVPUtils.isIEWebKit || (_s.hasPointerEvent_bl ? (_s.dClk_do.screen.removeEventListener("pointerdown", _s.onFirstDown), _s.dClk_do.screen.addEventListener("pointerdown", _s.onSecondDown)) : (_s.isMbl || (_s.dClk_do.screen.addEventListener("mousedown", _s.onSecondDown), _s.dClk_do.screen.removeEventListener("mousedown", _s.onFirstDown)), _s.dClk_do.screen.addEventListener("touchstart", _s.onSecondDown), _s.dClk_do.screen.removeEventListener("touchstart", _s.onFirstDown)), clearTimeout(_s.secondTapId_to), _s.secondTapId_to = setTimeout(_s.doubleTapExpired, 500)))
                }, _s.doubleTapExpired = function () {
                    clearTimeout(_s.secondTapId_to), _s.hasPointerEvent_bl ? (_s.dClk_do.screen.removeEventListener("pointerdown", _s.onSecondDown), _s.dClk_do.screen.addEventListener("pointerdown", _s.onFirstDown)) : (_s.dClk_do.screen.removeEventListener("touchstart", _s.onSecondDown), _s.dClk_do.screen.addEventListener("touchstart", _s.onFirstDown), _s.isMbl || (_s.dClk_do.screen.removeEventListener("mousedown", _s.onSecondDown), _s.dClk_do.screen.addEventListener("mousedown", _s.onFirstDown)))
                }, _s.onSecondDown = function (e) {
                    e.preventDefault && e.preventDefault();
                    var t, o, s = FWDUVPUtils.getViewportMouseCoordinates(e);
                    FWDUVPUtils.isIEWebKit && (_s.firstTapPlaying_bl = _s.isPlaying_bl), e.touches && 1 != e.touches.length || (t = Math.abs(s.screenX - _s.main_do.getGlobalX() - _s.firstTapX), o = Math.abs(s.screenY - _s.main_do.getGlobalY() - _s.firstTapY), 10 < t || 10 < o || (_s.firstTapX < .33 * _s.tempVidStageWidth ? _s.isPlaying_bl || (_s.skipOnDb_bl = !0, _s.rewind(_s._d.rewTm), _s.addVisualization("left"), setTimeout(function () {
                        _s.isPlaying_bl || _s.play()
                    }, 200), setTimeout(function () {
                        _s.skipOnDb_bl = !1
                    }, 500)) : _s.firstTapX > .67 * _s.tempVidStageWidth ? _s.isPlaying_bl || (_s.skipOnDb_bl = !0, _s.rewind(-_s._d.rewTm), _s.addVisualization("right"), setTimeout(function () {
                        _s.isPlaying_bl || _s.play()
                    }, 200), setTimeout(function () {
                        _s.skipOnDb_bl = !1
                    }, 500)) : (_s.switchFullScreenOnDoubleClick(), _s.firstTapPlaying_bl ? _s.play() : _s.pause())))
                }, _s.switchFullScreenOnDoubleClick = function () {
                    _s.disableClick(), _s.isFullScreen_bl ? _s.goNormalScreen() : _s.goFullScreen()
                }, _s.lasPosition, _s.setupVisualization = function () {
                    _s.mainVz_do = new FWDUVPDisplayObject("div"), _s.mainVz_do.getStyle().pointerEvents = "none", _s.mainVz_do.getStyle().backgroundColor = "rgba(0,0,0,0.01)", _s.mainVzBackgrond_do = new FWDUVPDisplayObject("div"), _s.mainVzBackgrond_do.getStyle().width = "100%", _s.mainVzBackgrond_do.getStyle().height = "100%", _s.mainVzBackgrond_do.getStyle().backgroundColor = "rgba(255,255,255, .15)", _s.mainVz_do.getStyle().borderRadius = "100%", _s.mainVz_do.addChild(_s.mainVzBackgrond_do), _s.circle_do = new FWDUVPTransformDisplayObject("div"), _s.circle_do.getStyle().backgroundColor = "rgba(255,255,255, .15)", _s.circle_do.getStyle().borderRadius = "100%", _s.mainVz_do.addChild(_s.circle_do);
                    var e = new Image;
                    e.src = _s.mainFolderPath_str + _s.sknPth + "vis.png", _s.vzImg1_do = new FWDUVPTransformDisplayObject("img"), _s.vzImg1_do.setScreen(e), _s.vzImg1_do.setWidth(17), _s.vzImg1_do.setHeight(23), _s.mainVz_do.addChild(_s.vzImg1_do);
                    var t = new Image;
                    t.src = _s.mainFolderPath_str + _s.sknPth + "vis.png", _s.vzImg2_do = new FWDUVPTransformDisplayObject("img"), _s.vzImg2_do.setScreen(t), _s.vzImg2_do.setWidth(17), _s.vzImg2_do.setHeight(23), _s.mainVz_do.addChild(_s.vzImg2_do);
                    var o = new Image;
                    o.src = _s.mainFolderPath_str + _s.sknPth + "vis.png", _s.vzImg3_do = new FWDUVPTransformDisplayObject("img"), _s.vzImg3_do.setScreen(o), _s.vzImg3_do.setWidth(17), _s.vzImg3_do.setHeight(23), _s.mainVz_do.addChild(_s.vzImg3_do)
                }, _s.addVisualization = function (e) {
                    clearTimeout(_s.vizFinisedId_to), clearTimeout(_s.vizFinished2Id_to);
                    var t = Math.round(_s.tempVidStageWidth / 2),
                        o = Math.round(1.5 * _s.tempVidStageHeight);
                    FWDAnimation.killTweensOf(_s.mainVzBackgrond_do), _s.lasPosition != e && _s.mainVzBackgrond_do.setAlpha(0), FWDAnimation.to(_s.mainVzBackgrond_do, .4, {
                        alpha: 1
                    }), _s.mainVz_do.setVisible(!0), _s.mainVz_do.setWidth(t), _s.mainVz_do.setHeight(o), _s.mainVz_do.setY((_s.tempVidStageHeight - o) / 2);
                    var s = Math.abs(_s.mainVz_do.y);
                    _s.controller_do && _s.controller_do.isShowed_bl && (s -= _s.controller_do.sH / 2), _s.videoHolder_do.contains(_s.mainVz_do) || (_s.controller_do ? _s.videoHolder_do.addChildAt(_s.mainVz_do, _s.videoHolder_do.getChildIndex(_s.controller_do) - 1) : _s.videoHolder_do.addChild(_s.mainVz_do)), "right" == e ? (_s.mainVz_do.getStyle().borderRadius = "100% 0% 0% 100%", _s.mainVz_do.setX(t), _s.vzImg1_do.setRotation(0), _s.vzImg2_do.setRotation(0), _s.vzImg3_do.setRotation(0)) : (_s.mainVz_do.getStyle().borderRadius = "0% 100% 100% 0%", _s.mainVz_do.setX(0), _s.vzImg1_do.setRotation(180), _s.vzImg2_do.setRotation(180), _s.vzImg3_do.setRotation(180)), _s.vzImg1_do.setX(Math.round(t - 3 * _s.vzImg1_do.w) / 2), _s.vzImg1_do.setY(Math.round(s + (_s.tempVidStageHeight - _s.vzImg1_do.h) / 2)), _s.vzImg2_do.setX(_s.vzImg1_do.x + _s.vzImg1_do.w), _s.vzImg2_do.setY(_s.vzImg1_do.y), _s.vzImg3_do.setX(_s.vzImg2_do.x + _s.vzImg2_do.w), _s.vzImg3_do.setY(_s.vzImg2_do.y), FWDAnimation.killTweensOf(_s.vzImg1_do), FWDAnimation.killTweensOf(_s.vzImg2_do), FWDAnimation.killTweensOf(_s.vzImg3_do), _s.vzImg1_do.setAlpha(0), _s.vzImg2_do.setAlpha(0), _s.vzImg3_do.setAlpha(0), "right" == e ? (FWDAnimation.to(_s.vzImg1_do, .4, {
                        alpha: 1
                    }), FWDAnimation.to(_s.vzImg1_do, .4, {
                        alpha: 0,
                        delay: .3
                    }), FWDAnimation.to(_s.vzImg2_do, .4, {
                        alpha: 1,
                        delay: .3
                    }), FWDAnimation.to(_s.vzImg2_do, .4, {
                        alpha: 0,
                        delay: .6
                    }), FWDAnimation.to(_s.vzImg3_do, .4, {
                        alpha: 1,
                        delay: .6
                    }), FWDAnimation.to(_s.vzImg3_do, .4, {
                        alpha: 0,
                        delay: .9
                    })) : (FWDAnimation.to(_s.vzImg3_do, .4, {
                        alpha: 1
                    }), FWDAnimation.to(_s.vzImg3_do, .4, {
                        alpha: 0,
                        delay: .3
                    }), FWDAnimation.to(_s.vzImg2_do, .4, {
                        alpha: 1,
                        delay: .3
                    }), FWDAnimation.to(_s.vzImg2_do, .4, {
                        alpha: 0,
                        delay: .6
                    }), FWDAnimation.to(_s.vzImg1_do, .4, {
                        alpha: 1,
                        delay: .6
                    }), FWDAnimation.to(_s.vzImg1_do, .4, {
                        alpha: 0,
                        delay: .9
                    })), FWDAnimation.killTweensOf(_s.circle_do), _s.circle_do.setAlpha(1), _s.circle_do.setScale2(1), _s.circle_do.setWidth(t), _s.circle_do.setHeight(t), _s.circle_do.setScale2(0), _s.circle_do.setX(_s.firstTapX - _s.mainVz_do.x - _s.circle_do.w / 2), _s.circle_do.setY(_s.firstTapY + s - _s.circle_do.w / 2), FWDAnimation.to(_s.circle_do, .8, {
                        scale: 2,
                        ease: Expo.easeInOut
                    }), _s.vizFinisedId_to = setTimeout(function () {
                        FWDAnimation.to(_s.mainVzBackgrond_do, .4, {
                            alpha: 0
                        }), FWDAnimation.to(_s.circle_do, .4, {
                            alpha: 0
                        }), _s.vizFinished2Id_to = setTimeout(function () {
                            _s.mainVz_do.setVisible(!1)
                        }, 400)
                    }, 800), _s.lasPosition = e
                }, _s.stopVisualization = function () {
                    _s.mainVz_do && (clearTimeout(_s.vizFinisedId_to), clearTimeout(_s.vizFinished2Id_to), _s.mainVz_do.setVisible(!1))
                }, _s.setupVideoHider = function () {
                    _s.videoHider_do = new FWDUVPDisplayObject("div"), _s.videoHolder_do.addChild(_s.videoHider_do)
                }, _s.showVideoHider = function () {
                    !_s.isVideoHiderShowed_bl && _s.videoHider_do && (_s.isVideoHiderShowed_bl = !0, _s.videoHider_do.setVisible(!0), _s.resizeVideoHider())
                }, _s.hideVideoHider = function () {
                    _s.isVideoHiderShowed_bl && (_s.isVideoHiderShowed_bl = !1, clearTimeout(_s.videoHilderId_to), _s.videoHilderId_to = setTimeout(function () {
                        _s.videoHider_do.setVisible(!1)
                    }, 300))
                }, _s.resizeVideoHider = function () {
                    _s.isVideoHiderShowed_bl && (_s.videoHider_do.setWidth(_s.tempStageWidth), _s.videoHider_do.setHeight(_s.tempStageHeight))
                }, _s.setupYoutubeAPI = function () {
                    var e, t;
                    _s.ytb_do || ("undefined" != typeof YT && YT.Player ? _s.setupYoutubePlayer() : FWDUVPlayer.isYoutubeAPILoadedOnce_bl ? _s.keepCheckingYoutubeAPI_int = setInterval(function () {
                        "undefined" != typeof YT && YT && YT.Player && (-1 == _s.videoSourcePath_str.indexOf("youtube.") && clearInterval(_s.keepCheckingYoutubeAPI_int), clearInterval(_s.keepCheckingYoutubeAPI_int), _s.setupYoutubePlayer())
                    }, 50) : ((e = document.createElement("script")).src = "https://www.youtube.com/iframe_api", (t = document.getElementsByTagName("script")[0]).parentNode.insertBefore(e, t), e.onload = function () {
                        _s.checkIfYoutubePlayerIsReadyId_int = setInterval(function () {
                            YT && YT.Player && (clearInterval(_s.checkIfYoutubePlayerIsReadyId_int), _s.setupYoutubePlayer())
                        }, 50)
                    }, e.onerror = function () {
                        setTimeout(function () {
                            _s.showSourceError("Error loading Youtube API")
                        }, 500)
                    }, FWDUVPlayer.isYoutubeAPILoadedOnce_bl = !0))
                }, _s.setupYoutubePlayer = function () {
                    _s.ytb_do || (FWDUVPYoutubeScreen.setPrototype(), _s.ytb_do = new FWDUVPYoutubeScreen(_s, _s._d.volume), _s.ytb_do.addListener(FWDUVPYoutubeScreen.READY, _s.youtubeReadyHandler), _s.ytb_do.addListener(FWDUVPVideoScreen.ERROR, _s.videoScreenErrorHandler), _s.ytb_do.addListener(FWDUVPYoutubeScreen.SAFE_TO_SCRUBB, _s.videoScreenSafeToScrubbHandler), _s.ytb_do.addListener(FWDUVPYoutubeScreen.STOP, _s.videoScreenStopHandler), _s.ytb_do.addListener(FWDUVPYoutubeScreen.PLAY, _s.videoScreenPlayHandler), _s.ytb_do.addListener(FWDUVPYoutubeScreen.PAUSE, _s.videoScreenPauseHandler), _s.ytb_do.addListener(FWDUVPYoutubeScreen.UPDATE, _s.videoScreenUpdateHandler), _s.ytb_do.addListener(FWDUVPYoutubeScreen.UPDATE_TIME, _s.videoScreenUpdateTimeHandler), _s.ytb_do.addListener(FWDUVPYoutubeScreen.LOAD_PROGRESS, _s.videoScreenLoadProgressHandler), _s.ytb_do.addListener(FWDUVPYoutubeScreen.PLAY_COMPLETE, _s.videoScreenPlayCompleteHandler), _s.ytb_do.addListener(FWDUVPYoutubeScreen.CUED, _s.youtubeScreenCuedHandler), _s.ytb_do.addListener(FWDUVPYoutubeScreen.QUALITY_CHANGE, _s.youtubeScreenQualityChangeHandler), _s.ytb_do.addListener(FWDUVPYoutubeScreen.UPDATE_SUBTITLE, _s.videoScreenUpdateSubtitleHandler))
                }, _s.youtubeReadyHandler = function (e) {
                    _s.isYoutubeReady_bl = !0, _s.hidePreloaderId_to = setTimeout(function () {
                        _s.preloader_do && _s.preloader_do.hide(!0)
                    }, 50), _s.isTempYoutubeAdd_bl = _s.isAdd_bl, _s.isAdd_bl ? _s.videoType_str == FWDUVPlayer.YOUTUBE && _s.setSource(_s.addSource_str) : _s.videoType_str == FWDUVPlayer.YOUTUBE && _s.updateAds(0, !0)
                }, _s.youtubeScreenCuedHandler = function () {
                    _s.main_do && _s.main_do.contains(_s.info_do) && _s.main_do.removeChild(_s.info_do)
                }, _s.youtubeScreenQualityChangeHandler = function (e) {
                    _s.videoType_str == FWDUVPlayer.VIDEO && (_s.curDurration = _s.videoScreen_do.curDuration), _s.controller_do && _s.controller_do.updateQuality(e.levels, e.qualityLevel)
                }, _s.setupVimeoAPI = function () {
                    var e, t;
                    _s.vimeo_do || ("undefined" != typeof Vimeo && Vimeo.Player ? _s.setupVimeoPlayer() : FWDUVPlayer.isVimeoAPILoadedOnce_bl ? _s.keepCheckingVimeoAPI_int = setInterval(function () {
                        "undefined" != typeof Vimeo && Vimeo && Vimeo.Player && (-1 == _s.videoSourcePath_str.indexOf("vimeo.") && clearInterval(_s.keepCheckingVimeoAPI_int), clearInterval(_s.keepCheckingVimeoAPI_int), _s.setupVimeoPlayer())
                    }, 50) : ((e = document.createElement("script")).src = "https://player.vimeo.com/api/player.js", (t = document.getElementsByTagName("script")[0]).parentNode.insertBefore(e, t), e.onload = function () {
                        _s.keepCheckingVimeoAPI_int = setInterval(function () {
                            "undefined" != typeof Vimeo && Vimeo && Vimeo.Player && (clearInterval(_s.keepCheckingVimeoAPI_int), _s.setupVimeoPlayer())
                        }, 50)
                    }, e.onerror = function () {
                        setTimeout(function () {
                            _s.showSourceError("Error loading Vimeo API")
                        }, 500)
                    }, FWDUVPlayer.isVimeoAPILoadedOnce_bl = !0))
                }, _s.setupVimeoPlayer = function () {
                    _s.vimeo_do || (FWDUVPVimeoScreen.setPrototype(), _s.vimeo_do = new FWDUVPVimeoScreen(_s, _s._d.volume), _s.vimeo_do.addListener(FWDUVPVimeoScreen.ERROR, _s.vimeoInitErrorHandler), _s.vimeo_do.addListener(FWDUVPVimeoScreen.READY, _s.vimeoReadyHandler), _s.vimeo_do.addListener(FWDUVPVimeoScreen.SAFE_TO_SCRUBB, _s.videoScreenSafeToScrubbHandler), _s.vimeo_do.addListener(FWDUVPVimeoScreen.STOP, _s.videoScreenStopHandler), _s.vimeo_do.addListener(FWDUVPVimeoScreen.PLAY, _s.videoScreenPlayHandler), _s.vimeo_do.addListener(FWDUVPVimeoScreen.PAUSE, _s.videoScreenPauseHandler), _s.vimeo_do.addListener(FWDUVPVimeoScreen.UPDATE, _s.videoScreenUpdateHandler), _s.vimeo_do.addListener(FWDUVPVimeoScreen.UPDATE_TIME, _s.videoScreenUpdateTimeHandler), _s.vimeo_do.addListener(FWDUVPVimeoScreen.LOAD_PROGRESS, _s.videoScreenLoadProgressHandler), _s.vimeo_do.addListener(FWDUVPVimeoScreen.PLAY_COMPLETE, _s.videoScreenPlayCompleteHandler), _s.vimeo_do.addListener(FWDUVPVimeoScreen.UPDATE_SUBTITLE, _s.videoScreenUpdateSubtitleHandler))
                }, _s.vimeoInitErrorHandler = function (e) {
                    _s.showSourceError(e.error)
                }, _s.vimeoReadyHandler = function (e) {
                    _s.isVimeoReady_bl = !0, clearInterval(_s.hidePreloaderId_to), _s.hidePreloaderId_to = setTimeout(function () {
                        _s.preloader_do && _s.preloader_do.hide(!0)
                    }, 50), _s.isAdd_bl ? _s.videoType_str == FWDUVPlayer.VIMEO && _s.setSource(_s.addSource_str) : _s.videoType_str == FWDUVPlayer.VIMEO && _s.updateAds(0, !0)
                }, _s.setupContextMenu = function () {
                    FWDUVPContextMenu.setPrototype(), _s.customContextMenu_do = new FWDUVPContextMenu(_s, _s._d)
                }, _s.setupRSM = function () {
                    window.addEventListener("beforeunload", function (e) {
                        var t;
                        Math.random();
                        _s.isPlaying_bl && !_s.isAdd_bl && (document.cookie = "fwduvp_video_path=" + _s.videoSourcePath_str + "; expires=Thu, 18 Dec 2040 00:00:01 GMT; path=/", 5 == (t = _s.getCurrentTime()).length && (t = "00:" + t), document.cookie = "fwduvp_time=" + t + "; expires=Thu, 18 Dec 2040 00:00:01 GMT; path=/")
                    })
                }, _s.setupData = function () {
                    FWDUVPData.setPrototype(), _s._d = new FWDUVPData(_s.props, _s.rootElement_el, _s), _s._d.useYoutube_bl = _s.useYoutube_bl, _s.mainBackground_do && (_s.mainBackground_do.getStyle().background = "url('" + _s.mainBackgroundImagePath_str + "')"), _s._d.addListener(FWDUVPData.VAST_LOADED, _s.vastLoaded), _s._d.addListener(FWDUVPData.PRELOADER_LOAD_DONE, _s.onPreloaderLoadDone), _s._d.addListener(FWDUVPData.LOAD_ERROR, _s._dLoadError), _s._d.addListener(FWDUVPData.SKIN_PROGRESS, _s._dSkinProgressHandler), _s._d.addListener(FWDUVPData.SKIN_LOAD_COMPLETE, _s._dSkinLoadComplete), _s._d.addListener(FWDUVPData.PLAYLIST_LOAD_COMPLETE, _s._dPlayListLoadComplete), _s._d.addListener(FWDUVPData.IMA_READY, _s._dImaReady), _s._d.addListener(FWDUVPData.IMA_ERROR, _s._dImaError)
                }, _s.vastLoaded = function (e) {
                    _s.isAdd_bl = !1, _s.isVastLoading_bl = !1, _s._d.playlist_ar[_s.id].popupAds_ar = e.popupAds, _s._d.playlist_ar[_s.id].ads_ar = e.ads, _s.adsId = -1, _s.updateAds(0), _s.dispatchEvent(FWDUVPData.VAST_LOADED)
                }, _s.onPreloaderLoadDone = function () {
                    _s.showPreloader_bl && _s.setupPreloader(), _s.isMbl || _s.setupContextMenu(), _s.fillEntireVideoScreen_bl = _s._d.fillEntireVideoScreen_bl, _s.resizeHandler()
                }, _s._dLoadError = function (e) {
                    _s.showSourceError(e.text), _s.playlist_do && (_s.playlist_do.catId = -1), _s.dispatchEvent(FWDUVPlayer.ERROR, {
                        error: e.text
                    })
                }, _s._dSkinProgressHandler = function (e) {}, _s._dSkinLoadComplete = function () {
                    var e; - 1 == location.protocol.indexOf("file:") || !FWDUVPUtils.isOpera && !FWDUVPUtils.isIEAndLessThen9 ? (_s.showOnlyThumbnail && (_s.playlistWidth = _s.playListThumbnailWidth), _s.volume = _s._d.volume, _s.playlistHeight = _s._d.playlistBottomHeight, _s.displayType != FWDUVPlayer.FULL_SCREEN || FWDUVPUtils.hasFullScreen || (_s._d.showFullScreenButton_bl = !1), _s.isEmbedded_bl && (_s.useDeepLinking_bl = !1, _s._d.playlistPosition_str = "right"), FWDUVPlayer.atLeastOnePlayerHasDeeplinking_bl && (_s.useDeepLinking_bl = !1), _s.useDeepLinking_bl && (FWDUVPlayer.atLeastOnePlayerHasDeeplinking_bl = !0), _s.useDeepLinking_bl ? setTimeout(function () {
                        _s.setupDL()
                    }, 200) : (_s.isEmbedded_bl ? (_s.catId = _s.embeddedPlaylistId, _s.id = _s.embeddedVideoId) : (e = FWDUVPUtils.getHashUrlArgs(window.location.hash), _s.useDeepLinking_bl && void 0 !== e.playlistId && void 0 !== e.videoId ? (_s.catId = e.playlistId, _s.id = e.videoId) : (e.videoId ? _s.id = e.videoId : _s.id = _s._d.startAtVideo, e.playlistId ? _s.catId = e.playlistId : _s.catId = _s._d.startAtPlaylist)), _s.loadInternalPlaylist())) : _s.showSourceError("This browser can't play video local, please test online or use a browser like Firefox of Chrome.")
                }, _s._dPlayListLoadComplete = function () {
                    _s._d.cats_ar[_s.catId].pass && (_s.playlistPass = _s._d.cats_ar[_s.catId].pass), _s.loadAddFirstTime_bl = !0, _s.isPlaylistLoadedFirstTime_bl || (_s.setupNormalVideoPlayers(), FWDUVPUtils.isIEAndLessThen9 || _s.updatePlaylist()), _s.isPlaylistLoadedFirstTime_bl && _s.updatePlaylist(), _s.isPlaylistLoaded_bl = !0, _s.videoHolder_do.setY(0), _s.resizeHandler(), setTimeout(function () {
                        _s.positionLargePlayButton(), _s.controller_do && _s.controller_do.resizeAndPosition(), _s.playlist_do && _s.playlist_do.resizeAndPosition()
                    }, 350)
                }, _s.updatePlaylist = function () {
                    _s.videoType_str = "none", _s.main_do && _s.main_do.contains(_s.info_do) && _s.main_do.removeChild(_s.info_do), _s.preloader_do && _s.preloader_do.hide(!0), _s.totaadsIdeos = _s._d.playlist_ar.length, _s.id < 0 ? _s.id = 0 : _s.id > _s.totaadsIdeos - 1 && (_s.id = _s.totaadsIdeos - 1), _s.playlist_do && _s.playlist_do.updatePlaylist(_s._d.playlist_ar, _s.catId, _s.id, _s._d.cats_ar[_s.catId].playlistName), _s.hideVideoHider(), _s._d.startAtRandomVideo_bl && (_s.id = parseInt(Math.random() * _s._d.playlist_ar.length), _s.useDeepLinking_bl) ? FWDUVPAddress.setValue("?playlistId=" + _s.catId + "&videoId=" + _s.id) : (_s.plPassPassed = !1, _s.prevSource = 99999999999 * Math.random(), _s.posterPath_str = _s._d.playlist_ar[_s.id].posterSource, _s.updateAds(0), _s.isFirstPlaylistLoaded_bl && !_s.isMbl && !_s._d.startAtRandomVideo_bl && _s._d.autoPlay_bl && _s.play(), _s._d.startAtRandomVideo_bl = !1, _s.isFirstPlaylistLoaded_bl = !0, _s.dispatchEvent(FWDUVPlayer.LOAD_PLAYLIST_COMPLETE), _s.displayType == FWDUVPlayer.STICKY && setTimeout(function () {
                        _s.isShowedFirstTime_bl = !1, _s.setStageContainerFinalHeightAndPosition(_s.animate_bl)
                    }, 50))
                }, _s._dImaReady = function () {
                    _s.isIMA && _s.setSource(_s.videoSourcePath_str)
                }, _s._dImaError = function () {
                    _s.errorImaSDK = !0, _s.setSource(_s.videoSourcePath_str)
                }, _s.loadInternalPlaylist = function () {
                    _s.isPlaylistLoaded_bl = !1, _s.playlistPass = !1, _s.isAdd_bl = !1, _s.adsId = -1, _s.prvAdSource = 999999999 * Math.random(), _s.prevCatId != _s.catId && (_s.prevCatId = _s.catId, _s.stop(), _s.videoHolder_do.setY(-5e3), _s.hider && _s.hider.stop(), _s.setPosterSource("none"), _s.videoPoster_do && (_s.videoPoster_do.id = -1, _s.videoPoster_do.hide(!0)), _s.preloader_do && _s.preloader_do.show(!1), _s.lrgPlayBtn && _s.lrgPlayBtn.hide(), _s.controller_do && _s.controller_do.hide(!1, 10), _s.showVideoHider(), _s._d.resetVastId(), _s.popupAds_do && _s.popupAds_do.resetId(), _s._d.loadPlaylist(_s.catId), _s.logo_do && _s.logo_do.hide(!1, !0), _s.isAdd_bl && (_s.adsSkip_do.hide(!1), _s.adsStart_do.hide(!1)), _s.playlist_do && _s.playlist_do.destroyPlaylist(), _s.preloader_do && _s.positionPreloader(), _s.isAPIReady_bl && _s.dispatchEvent(FWDUVPlayer.START_TO_LOAD_PLAYLIST))
                }, _s.setupDL = function () {
                    _s.initFirstDL = !0, FWDUVPAddress.onChange = _s.dlChangeHandler, _s.isEmbedded_bl && FWDUVPAddress.setValue("?playlistId=" + _s.embeddedPlaylistId + "&videoId=" + _s.embeddedVideoId), _s.dlChangeHandler()
                }, _s.dlChangeHandler = function () {
                    var e, t;
                    _s.hasOpenedInPopup_bl || (e = !1, _s.categories_do && _s.categories_do.isOnDOM_bl ? _s.categories_do.hide() : (_s.prevId = _s.id, _s.prevEventCatId = _s.catId, _s.catId = parseInt(FWDUVPAddress.getParameter("playlistId")), _s.id = parseInt(FWDUVPAddress.getParameter("videoId")), (null == _s.catId || null == _s.id || isNaN(_s.catId) || isNaN(_s.id)) && (_s.catId = _s._d.startAtPlaylist, _s.id = _s._d.startAtVideo, e = !0), (_s.catId < 0 || _s.catId > _s._d.totalCategories - 1 && !e) && (_s.catId = _s._d.startAtPlaylist, _s.id = _s._d.startAtVideo, e = !0), _s._d.playlist_ar && (_s.id < 0 && !e ? (_s.id = _s._d.startAtVideo, e = !0) : _s.prevCatId == _s.catId && _s.id > _s._d.playlist_ar.length - 1 && !e && (_s.id = _s._d.playlist_ar.length - 1, e = !0)), _s.totalDuration = 0, t = _s.catId + " - " + _s.id, e ? FWDUVPAddress.setValue("?playlistId=" + _s.catId + "&videoId=" + _s.id) : _s.lastValue != t && (_s.lastValue = _s.catId + " - " + _s.id, -1 == _s.prevId && (_s.prevId = _s.id), -1 == _s.prevEventCatId && (_s.prevEventCatId = _s.catId), _s.prevCatId != _s.catId ? (_s.loadInternalPlaylist(), _s.prevCatId = _s.catId) : (_s.stop(), _s.isThumbClick_bl = !0, _s.updateAds(0, !0), _s._d.startAtRandomVideo_bl = !1), _s.pastHref = window.location.href)))
                }, _s.playVimeoWithDelay = function () {
                    _s.isMbl || (_s.vimeo_do.isVideoLoaded_bl ? (_s.hasVimeoStarted_bl = !0, _s.play(), _s.vimeo_do.play(), clearTimeout(_s.playVimeoWhenLoadedId_to)) : _s.playVimeoWhenLoadedId_to = setTimeout(_s.playVimeoWithDelay, 50))
                }, _s.setupNormalVideoPlayers = function () {
                    _s.videoScreen_do || (_s.isAPIReady_bl = !0, _s.setupRSM(), _s.setupVideoScreen(), _s.setupAudioScreen(), _s.setupVideoPoster(), _s.preloader_do && _s.main_do.addChild(_s.preloader_do), _s.setupSubtitle(), _s.setupClickScreen(), _s.setupPopupAds(), _s._d.showLogo_bl && _s.setupLogo(), _s.addDoubleClickSupport(), _s.setupVideoHider(), _s.setupAnnotations(), _s._d.showController_bl && _s.setupController(), _s.setupAdsStart(), _s._d.showPlaylistButtonAndPlaylist_bl && _s.setupPlaylist(), _s.setupLargePlayPauseButton(), _s._d.showChromecastButton_bl && _s.setupChormecast(), _s._d.showController_bl && _s.setupHider(), _s._d.showPlaylistsButtonAndPlaylists_bl && _s.setupCategories(), _s.setupDisableClick(), _s._d.showEmbedButton_bl && _s.setupEmbedWindow(), _s.setupPasswordWindow(), !_s._d.isLoggedIn_bl && _s._d.showController_bl && _s.setupLoginWindow(), _s._d.showShareButton_bl && _s.setupShareWindow(), _s.setupAopw(), _s._d.showInfoButton_bl && _s.setupInfoWindow(), (_s._d.showOpener_bl && _s.displayType == FWDUVPlayer.STICKY || _s._d.stickyOnScrollShowOpener_bl && _s.stickyOnScroll) && _s.setupOpener(), _s._d.useFingerPrintStamp && _s.setupFingerPrintStamp(), "no" == FWDUVPlayer.useYoutube && (_s.isPlaylistLoadedFirstTime_bl = !0), _s.addMinOnScroll(), _s.isAPIReady_bl = !0, _s.dispatchEvent(FWDUVPlayer.READY), _s._d.addKeyboardSupport_bl && _s.addKeyboardSupport())
                }, _s.setupFingerPrintStamp = function () {
                    FWDUVPFPS.setPrototype(), _s.fps = new FWDUVPFPS(_s), _s.videoHolder_do.addChild(_s.fps)
                }, _s.setupOpener = function () {
                    FWDUVPOpener.setPrototype(), _s.opener_do = new FWDUVPOpener(_s._d, _s.position_str, _s.isShowed_bl), FWDUVPUtils.isIEAndLessThen9 ? _s.opener_do.getStyle().zIndex = "2147483634" : _s.opener_do.getStyle().zIndex = "99999999994", _s.opener_do.setX(-1e4), _s.isShowed_bl ? _s.opener_do.showCloseButton() : _s.opener_do.showOpenButton(), _s.opener_do.addListener(FWDUVPOpener.SHOW, _s.openerShowHandler), _s.opener_do.addListener(FWDUVPOpener.HIDE, _s.openerHideHandler), _s.opener_do.addListener(FWDUVPController.PLAY, _s.controllerOnPlayHandler), _s.opener_do.addListener(FWDUVPController.PAUSE, _s.controllerOnPauseHandler), _s.stageContainer.appendChild(_s.opener_do.screen), _s.stickyOnScroll && (_s.opener_do.getStyle().position = "fixed", document.documentElement.appendChild(_s.opener_do.screen))
                }, _s.openerShowHandler = function () {
                    _s.showPlayer()
                }, _s.openerHideHandler = function () {
                    _s.hidePlayer()
                }, _s.setupPreloader = function () {
                    FWDUVPPreloader.setPrototype(), _s.preloader_do = new FWDUVPPreloader(_s, "center", 10, _s.preloaderBackgroundColor, _s.preloaderFillColor, 3, .8), _s.preloader_do.show(!1), _s.showPreloader_bl && (_s.displayType == FWDUVPlayer.STICKY ? document.documentElement.appendChild(_s.preloader_do.screen) : _s.main_do.addChild(_s.preloader_do))
                }, _s.positionPreloader = function () {
                    function e() {
                        var e = _s.isPlaylistLoaded_bl ? _s.tempVidStageWidth : _s.sW;
                        _s.preloader_do.setX(parseInt((e - _s.preloader_do.w) / 2)), _s.preloader_do.setY(parseInt((_s.tempVidStageHeight - _s.preloader_do.h) / 2))
                    }
                    _s.displayType != FWDUVPlayer.STICKY || _s.main_do.contains(_s.preloader_do) ? e() : (_s.preloader_do.setX(Math.round((_s.ws.w - _s.preloader_do.w) / 2)), _s.position_str == FWDUVPlayer.POSITION_BOTTOM ? _s.preloader_do.setY(Math.round(_s.ws.h - _s.preloader_do.h - 10) + FWDUVPUtils.getScrollOffsets().y) : _s.preloader_do.setY(10))
                }, _s.setupCategories = function () {
                    FWDUVPCategories.setPrototype(), _s.categories_do = new FWDUVPCategories(_s._d, _s), _s.categories_do.getStyle().zIndex = "2147483647", _s.categories_do.addListener(FWDUVPCategories.HIDE_COMPLETE, _s.categoriesHideCompleteHandler), _s._d.showPlaylistsByDefault_bl && (_s.showCatWidthDelayId_to = setTimeout(function () {
                        _s.showCategories()
                    }, 1400))
                }, _s.categoriesHideCompleteHandler = function (e) {
                    if (_s.controller_do && (_s.controller_do.setCategoriesButtonState("unselected"), _s.controller_do.categoriesButton_do.setNormalState(!0)), _s.useDeepLinking_bl) {
                        if (_s.categories_do.id != _s.catId) return _s.catId = _s.categories_do.id, _s.id = 0, void FWDUVPAddress.setValue("?playlistId=" + _s.catId + "&videoId=" + _s.id)
                    } else {
                        if (_s.catId == _s.categories_do.id) return;
                        _s.catId = _s.categories_do.id, _s.id = 0, _s.loadInternalPlaylist(_s.catId)
                    }
                    _s.isVideoPlayingWhenOpenWindows_bl && _s.resume()
                }, _s.setupVideoPoster = function () {
                    FWDUVPPoster.setPrototype(), _s.videoPoster_do = new FWDUVPPoster(_s, _s._d.show, _s._d.posterBackgroundColor_str), _s.videoHolder_do.addChild(_s.videoPoster_do)
                }, _s.setupInfoWindow = function () {
                    FWDUVPInfoWindow.setPrototype(), _s.infoWindow_do = new FWDUVPInfoWindow(_s, _s._d), _s.infoWindow_do.addListener(FWDUVPInfoWindow.HIDE_COMPLETE, _s.infoWindowHideCompleteHandler), _s.main_do.addChild(_s.infoWindow_do)
                }, _s.infoWindowHideCompleteHandler = function () {
                    _s.isVideoPlayingWhenOpenWindows_bl && _s.resume(), _s.controller_do && !_s.isMbl && (_s.controller_do.infoButton_do.isDisabled_bl = !1, _s.controller_do.infoButton_do.setNormalState(!0))
                }, _s.setupChormecast = function () {
                    _s._d.showController_bl && (FWDUVPCC.setPrototype(), _s.cc = new FWDUVPCC(_s.controller_do))
                }, _s.setupLargePlayPauseButton = function () {
                    _s._d.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), _s.lrgPlayBtn = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<div class='table-fwduvp-button'><span class='table-cell-fwduvp-button fwdicon-play'></span></div>", void 0, "UVPLargePlayButtonNormalState", "UVPLargePlayButtonSelectedState")) : (FWDUVPSimpleButton.setPrototype(), -1 != _s.sknPth.indexOf("hex_white") ? _s.lrgPlayBtn = new FWDUVPSimpleButton(_s._d.largePlayN_img, _s._d.largePlayS_str, void 0, !0, _s._d.useHEX, _s._d.nBC, "#FFFFFF", !1, !1, !1, !1, !0) : _s.lrgPlayBtn = new FWDUVPSimpleButton(_s._d.largePlayN_img, _s._d.largePlayS_str, void 0, !0, _s._d.useHEX, _s._d.nBC, _s._d.sBC, !1, !1, !1, !1, !0)), _s.lrgPlayBtn.addListener(FWDUVPSimpleButton.MOUSE_UP, _s.largePlayButtonUpHandler), _s.lrgPlayBtn.setOverflow("visible"), _s.lrgPlayBtn.hide(!1), _s.main_do.addChild(_s.lrgPlayBtn)
                }, _s.largePlayButtonUpHandler = function () {
                    _s.isIMA && _s.IMA && !_s.IMA.isReady || (_s.isThumbClick_bl = !0, _s.disableClick(), _s.lrgPlayBtn.hide(), _s.play(), _s._d.goFullScreenOnPlay_bl && _s.goFullScreen())
                }, _s.positionLargePlayButton = function () {
                    _s.lrgPlayBtn.setX(parseInt((_s.tempVidStageWidth - _s.lrgPlayBtn.w) / 2)), _s.lrgPlayBtn.setY(parseInt((_s.tempVidStageHeight - _s.lrgPlayBtn.h) / 2))
                }, _s.setupLogo = function () {
                    FWDUVPLogo.setPrototype(), _s.logo_do = new FWDUVPLogo(_s, _s._d.logoPath_str, _s._d.logoPosition_str, _s._d.logoMargins), _s.main_do.addChild(_s.logo_do)
                }, _s.setupPlaylist = function () {
                    FWDUVPPlaylist.setPrototype(), _s.playlist_do = new FWDUVPPlaylist(_s, _s._d), _s.playlist_do.addListener(FWDUVPPlaylist.THUMB_MOUSE_UP, _s.playlistThumbMouseUpHandler), _s.playlist_do.addListener(FWDUVPPlaylist.PLAY_PREV_VIDEO, _s.playPrevVideoHandler), _s.playlist_do.addListener(FWDUVPPlaylist.PLAY_NEXT_VIDEO, _s.playNextVideoHandler), _s.playlist_do.addListener(FWDUVPPlaylist.ENABLE_SHUFFLE, _s.enableShuffleHandler), _s.playlist_do.addListener(FWDUVPPlaylist.DISABLE_SHUFFLE, _s.disableShuffleHandler), _s.playlist_do.addListener(FWDUVPPlaylist.ENABLE_LOOP, _s.enableLoopHandler), _s.playlist_do.addListener(FWDUVPPlaylist.DISABLE_LOOP, _s.disableLoopHandler), _s.playlist_do.addListener(FWDUVPPlaylist.CHANGE_PLAYLIST, _s.changePlaylistHandler), _s.main_do.addChildAt(_s.playlist_do, 0), _s._d.useVectorIcons_bl && setTimeout(function () {
                        _s.playlist_do.resizeAndPosition(!0)
                    }, 340)
                }, _s.changePlaylistHandler = function (e) {
                    _s.loadPlaylist(e.id)
                }, _s.playlistThumbMouseUpHandler = function (e) {
                    _s.disableClick_bl || (_s._d.playlist_ar && (_s.videoNameGa = _s._d.playlist_ar[_s.id].gaStr, _s.videoCat = _s._d.cats_ar[_s.catId].playlistName), _s.totalDuration = 0, _s.useDeepLinking_bl && _s.id != e.id ? (FWDUVPAddress.setValue("?playlistId=" + _s.catId + "&videoId=" + e.id), _s.id = e.id, _s.isThumbClick_bl = !0) : (_s.stop(), _s.id = e.id, _s.changeHLS_bl = !0, _s.isThumbClick_bl = !0, _s.isAdd_bl = !1, _s.updateAds(0)), _s._d.goFullScreenOnPlay_bl && _s.goFullScreen())
                }, _s.playPrevVideoHandler = function () {
                    _s.isThumbClick_bl = !0, _s._d.shuffle_bl ? _s.playShuffle() : _s.playPrev()
                }, _s.playNextVideoHandler = function () {
                    _s.isThumbClick_bl = !0, _s._d.shuffle_bl ? _s.playShuffle() : _s.playNext()
                }, _s.enableShuffleHandler = function (e) {
                    _s._d.shuffle_bl = !0, _s._d.loop_bl = !1, _s.playlist_do.setShuffleButtonState("selected"), _s.playlist_do.setLoopStateButton("unselected")
                }, _s.disableShuffleHandler = function (e) {
                    _s._d.shuffle_bl = !1, _s.playlist_do.setShuffleButtonState("unselected")
                }, _s.enableLoopHandler = function (e) {
                    _s._d.loop_bl = !0, _s._d.shuffle_bl = !1, _s.playlist_do.setLoopStateButton("selected"), _s.playlist_do.setShuffleButtonState("unselected")
                }, _s.disableLoopHandler = function (e) {
                    _s._d.loop_bl = !1, _s.playlist_do.setLoopStateButton("unselected")
                }, _s.setupAPT = function () {
                    !_s.apt && _s._d.autoPlayText && _s._d.autoPlay_bl && (_s.apt = new FWDUVPTransformDisplayObject("div"), _s.apt.screen.className = "fwduvp-autoplay-text", _s.apt.setButtonMode(!0), _s.apt.setInnerHTML(_s._d.autoPlayText + '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M9.4272 0.430497C9.4272 0.267667 9.33293 0.113407 9.18724 0.0448468C9.03298 -0.0322832 8.86158 -0.00657319 8.73303 0.0962667L4.93652 3.12147L9.4272 7.61215V0.430497Z" fill="black"/><path d="M11.8742 11.2702L0.733188 0.129242C0.566073 -0.0378725 0.294404 -0.0378725 0.127289 0.129242C-0.0398256 0.296357 -0.0398256 0.568026 0.127289 0.735141L2.82341 3.43212H2.57231C2.30664 3.43212 2.07525 3.5521 1.92099 3.74064C1.79244 3.88633 1.71531 4.08344 1.71531 4.28912V7.71712C1.71531 8.18847 2.10096 8.57412 2.57231 8.57412H4.56055L8.73413 11.9078C8.81126 11.9678 8.90553 12.0021 8.9998 12.0021C9.05979 12.0021 9.12835 11.985 9.18834 11.9593C9.33403 11.8907 9.4283 11.7364 9.4283 11.5736V10.037L11.2674 11.8761C11.3514 11.9601 11.4611 12.0021 11.5708 12.0021C11.6805 12.0021 11.7902 11.9601 11.8742 11.877C12.0413 11.709 12.0413 11.4382 11.8742 11.2702Z" fill="black"/></g></svg>'), _s.main_do.addChild(_s.apt), _s.apt.screen.addEventListener("click", function (e) {
                        _s.setVolume(_s._d.volume, !0)
                    })), _s.showAPT()
                }, _s.removeAPT = function () {
                    _s.apt && _s.main_do.contains(_s.apt) && _s.main_do.removeChild(_s.apt), _s.aptRemoved = !0
                }, _s.hideAPT = function () {
                    _s.apt && _s.apt.setX(-5e3)
                }, _s.showAPT = function () {
                    _s.apt && !_s.aptRemoved && (_s.apt.setX(0), _s.apt.setScale2(0), FWDAnimation.to(_s.apt, 1, {
                        scale: 1,
                        ease: Elastic.easeInOut
                    }))
                }, _s.setupPopupAds = function () {
                    FWDUVPPupupAds.setPrototype(), _s.popupAds_do = new FWDUVPPupupAds(_s, _s._d), _s.videoHolder_do.addChild(_s.popupAds_do)
                }, _s.setupSubtitle = function () {
                    FWDUVPSubtitle.setPrototype(), _s.subtitle_do = new FWDUVPSubtitle(_s, _s._d), _s.subtitle_do.addListener(FWDUVPSubtitle.LOAD_COMPLETE, _s.subtitleLoadComplete)
                }, _s.subtitleLoadComplete = function () {
                    _s.subtitle_do.show(), _s.controller_do && _s.controller_do.enableSubtitleButton()
                }, _s.loadSubtitle = function (e) {
                    _s.isCasting ? _s.cc.loadSubtitle() : (_s.controller_do && _s.controller_do.disableSubtitleButton(), e && (_s.subtitle_do.loadSubtitle(e), _s.videoHolder_do.addChildAt(_s.subtitle_do, _s.videoHolder_do.getChildIndex(_s.dClk_do) - 1)))
                }, _s.setupController = function () {
                    FWDUVPController.setPrototype(), _s.controller_do = new FWDUVPController(_s._d, _s), _s.controller_do.addListener(FWDUVPData.LOAD_ERROR, _s.controllerErrorHandler), _s.controller_do.addListener(FWDUVPController.REWIND, _s.rewindHandler), _s.controller_do.addListener(FWDUVPController.CHANGE_PLAYBACK_RATES, _s.changePlaybackRateHandler), _s.controller_do.addListener(FWDUVPController.CHANGE_SUBTITLE, _s.changeSubtitileHandler), _s.controller_do.addListener(FWDUVPController.SHOW_CATEGORIES, _s.showCategoriesHandler), _s.controller_do.addListener(FWDUVPController.SHOW_PLAYLIST, _s.showPlaylistHandler), _s.controller_do.addListener(FWDUVPController.HIDE_PLAYLIST, _s.hidePlaylistHandler), _s.controller_do.addListener(FWDUVPController.PLAY, _s.controllerOnPlayHandler), _s.controller_do.addListener(FWDUVPController.PAUSE, _s.controllerOnPauseHandler), _s.controller_do.addListener(FWDUVPController.START_TO_SCRUB, _s.controllerStartToScrubbHandler), _s.controller_do.addListener(FWDUVPController.SCRUB, _s.controllerScrubbHandler), _s.controller_do.addListener(FWDUVPController.STOP_TO_SCRUB, _s.controllerStopToScrubbHandler), _s.controller_do.addListener(FWDUVPController.CHANGE_VOLUME, _s.controllerChangeVolumeHandler), _s.controller_do.addListener(FWDUVPController.DOWNLOAD_VIDEO, _s.controllerDownloadVideoHandler), _s.controller_do.addListener(FWDUVPController.CHANGE_YOUTUBE_QUALITY, _s.controllerChangeYoutubeQualityHandler), _s.controller_do.addListener(FWDUVPController.FULL_SCREEN, _s.controllerFullScreenHandler), _s.controller_do.addListener(FWDUVPController.NORMAL_SCREEN, _s.controllerNormalScreenHandler), _s.controller_do.addListener(FWDUVPPlaylist.PLAY_PREV_VIDEO, _s.playPrevVideoHandler), _s.controller_do.addListener(FWDUVPPlaylist.PLAY_NEXT_VIDEO, _s.playNextVideoHandler), _s.controller_do.addListener(FWDUVPController.SHOW_EMBED_WINDOW, _s.showEmbedWindowHandler), _s.controller_do.addListener(FWDUVPController.SHOW_INFO_WINDOW, _s.showInfoWindowHandler), _s.controller_do.addListener(FWDUVPController.SHOW_SHARE_WINDOW, _s.controllerShareHandler), _s.controller_do.addListener(FWDUVPController.SHOW_SUBTITLE, _s.showSubtitleHandler), _s.controller_do.addListener(FWDUVPController.HIDE_SUBTITLE, _s.hideSubtitleHandler), _s.videoHolder_do.addChild(_s.controller_do)
                }, _s.controllerErrorHandler = function (e) {
                    _s.showSourceError(e.text)
                }, _s.rewindHandler = function () {
                    _s.rewind(_s._d.rewTm)
                }, _s.rewind = function (e) {
                    var t = _s.getCurrentTime();
                    5 == t.length && (t = "00:" + t), 7 == t.length && (t = "0" + t), t = FWDUVPUtils.getSecondsFromString(t), t -= e, 5 == (t = FWDUVPUtils.formatTime(t)).length && (t = "00:" + t), 7 == t.length && (t = "0" + t), _s.scrubbAtTime(t)
                }, _s.changePlaybackRateHandler = function (e) {
                    _s.setPlaybackRate(e.rate)
                }, _s.changeSubtitileHandler = function (e) {
                    _s._d.playlist_ar[_s.id].startAtSubtitle = e.id, _s.controller_do.updateSubtitleButtons(_s._d.playlist_ar[_s.id].subtitleSource, _s._d.playlist_ar[_s.id].startAtSubtitle), _s.ccSS = Number(_s._d.playlist_ar[_s.id].subtitleSource.length - e.id), _s.isAdd_bl || _s.loadSubtitle(_s._d.playlist_ar[_s.id].subtitleSource[_s._d.playlist_ar[_s.id].subtitleSource.length - 1 - _s._d.playlist_ar[_s.id].startAtSubtitle].source)
                }, _s.showSubtitleHandler = function () {
                    _s.subtitle_do.show(), _s.subtitle_do.isShowed_bl = !0
                }, _s.hideSubtitleHandler = function () {
                    _s.subtitle_do.isShowed_bl = !1, _s.subtitle_do.hide()
                }, _s.showCategoriesHandler = function (e) {
                    _s.showCategories(), _s.controller_do && _s.controller_do.setCategoriesButtonState("selected")
                }, _s.showPlaylistHandler = function (e) {
                    _s.disableClick(), _s.showPlaylist()
                }, _s.hidePlaylistHandler = function (e) {
                    _s.disableClick(), _s.hidePlaylist()
                }, _s.controllerOnPlayHandler = function (e) {
                    _s.play(), _s._d.goFullScreenOnPlay_bl && _s.goFullScreen()
                }, _s.controllerOnPauseHandler = function (e) {
                    _s.pause()
                }, _s.controllerStartToScrubbHandler = function (e) {
                    _s.isCasting ? _s.cc.startToScrub() : _s.startToScrub()
                }, _s.controllerScrubbHandler = function (e) {
                    _s.isCasting ? _s.cc.seek(e.percent) : _s.scrub(e.percent)
                }, _s.controllerStopToScrubbHandler = function (e) {
                    _s.isCasting ? _s.cc.stopToScrub() : _s.stopToScrub()
                }, _s.controllerChangeVolumeHandler = function (e) {
                    _s.setVolume(e.percent)
                }, _s.controllerDownloadVideoHandler = function () {
                    _s.downloadVideo()
                }, _s.controllerShareHandler = function (e) {
                    _s.setVideoPlayingStateOnWindowShow(), _s.pause(), _s.shareWindow_do.show(), _s.controller_do && !_s.isMbl && (_s.controller_do.shareButton_do.setSelectedState(), _s.controller_do.shareButton_do.isDisabled_bl = !0)
                }, _s.controllerChangeYoutubeQualityHandler = function (e) {
                    _s.videoType_str == FWDUVPlayer.YOUTUBE ? _s.ytb_do.setQuality(e.quality) : (_s._d.playlist_ar[_s.id].startAtVideo = _s._d.playlist_ar[_s.id].videoSource.length - 1 - e.id, _s.setSource(_s._d.playlist_ar[_s.id].videoSource[_s._d.playlist_ar[_s.id].startAtVideo].source, !1, _s._d.playlist_ar[_s.id].videoSource[_s._d.playlist_ar[_s.id].startAtVideo].is360), _s.isQualityChanging_bl = !0, _s.play())
                }, _s.controllerFullScreenHandler = function () {
                    _s.goFullScreen()
                }, _s.controllerNormalScreenHandler = function () {
                    _s.goNormalScreen()
                }, _s.showEmbedWindowHandler = function () {
                    _s.setVideoPlayingStateOnWindowShow(), _s.pause(), _s.embedWindow_do.show(), _s.controller_do && !_s.isMbl && (_s.controller_do.embedButton_do.setSelectedState(), _s.controller_do.embedButton_do.isDisabled_bl = !0)
                }, _s.showInfoWindowHandler = function () {
                    _s.setVideoPlayingStateOnWindowShow(), _s.pause(), _s.infoWindow_do.show(_s._d.playlist_ar[_s.id].desc), _s.controller_do && !_s.isMbl && (_s.controller_do.infoButton_do.setSelectedState(), _s.controller_do.infoButton_do.isDisabled_bl = !0)
                }, _s.setVideoPlayingStateOnWindowShow = function () {
                    _s.isCasting ? _s.isVideoPlayingWhenOpenWindows_bl = "PLAYING" == _s.cc.playerState : _s.isIMA && _s.IMA.started ? _s.isVideoPlayingWhenOpenWindows_bl = _s.IMA.isPlaying : _s.videoType_str == FWDUVPlayer.YOUTUBE && _s.ytb_do ? _s.isVideoPlayingWhenOpenWindows_bl = _s.ytb_do.isPlaying_bl : _s.videoType_str == FWDUVPlayer.VIMEO && _s.vimeo_do ? _s.isVideoPlayingWhenOpenWindows_bl = _s.vimeo_do.isPlaying_bl : _s.videoScreen_do && (_s.isVideoPlayingWhenOpenWindows_bl = _s.videoScreen_do.isPlaying_bl)
                }, _s.setupAudioScreen = function () {
                    _s.audioScreen_do || (FWDUVPAudioScreen.setPrototype(), _s.audioScreen_do = new FWDUVPAudioScreen(_s, _s._d.volume), _s.audioScreen_do.addListener(FWDUVPAudioScreen.ERROR, _s.videoScreenErrorHandler), _s.audioScreen_do.addListener(FWDUVPAudioScreen.SAFE_TO_SCRUBB, _s.videoScreenSafeToScrubbHandler), _s.audioScreen_do.addListener(FWDUVPAudioScreen.STOP, _s.videoScreenStopHandler), _s.audioScreen_do.addListener(FWDUVPAudioScreen.PLAY, _s.videoScreenPlayHandler), _s.audioScreen_do.addListener(FWDUVPAudioScreen.PAUSE, _s.videoScreenPauseHandler), _s.audioScreen_do.addListener(FWDUVPAudioScreen.UPDATE, _s.videoScreenUpdateHandler), _s.audioScreen_do.addListener(FWDUVPAudioScreen.UPDATE_TIME, _s.videoScreenUpdateTimeHandler), _s.audioScreen_do.addListener(FWDUVPAudioScreen.LOAD_PROGRESS, _s.videoScreenLoadProgressHandler), _s.audioScreen_do.addListener(FWDUVPVideoScreen.START_TO_BUFFER, _s.videoScreenStartToBuferHandler), _s.audioScreen_do.addListener(FWDUVPVideoScreen.STOP_TO_BUFFER, _s.videoScreenStopToBuferHandler), _s.audioScreen_do.addListener(FWDUVPAudioScreen.PLAY_COMPLETE, _s.videoScreenPlayCompleteHandler), _s.audioScreen_do.addListener(FWDUVPAudioScreen.UPDATE_SUBTITLE, _s.videoScreenUpdateSubtitleHandler), _s.videoHolder_do.addChild(_s.audioScreen_do))
                }, _s.setupVideoScreen = function () {
                    FWDUVPVideoScreen.setPrototype(), _s.videoScreen_do = new FWDUVPVideoScreen(_s, _s._d.volume), _s.videoScreen_do.addListener(FWDUVPVideoScreen.ERROR, _s.videoScreenErrorHandler), _s.videoScreen_do.addListener(FWDUVPVideoScreen.SAFE_TO_SCRUBB, _s.videoScreenSafeToScrubbHandler), _s.videoScreen_do.addListener(FWDUVPVideoScreen.STOP, _s.videoScreenStopHandler), _s.videoScreen_do.addListener(FWDUVPVideoScreen.PLAY, _s.videoScreenPlayHandler), _s.videoScreen_do.addListener(FWDUVPVideoScreen.PAUSE, _s.videoScreenPauseHandler), _s.videoScreen_do.addListener(FWDUVPVideoScreen.UPDATE, _s.videoScreenUpdateHandler), _s.videoScreen_do.addListener(FWDUVPVideoScreen.UPDATE_TIME, _s.videoScreenUpdateTimeHandler), _s.videoScreen_do.addListener(FWDUVPVideoScreen.LOAD_PROGRESS, _s.videoScreenLoadProgressHandler), _s.videoScreen_do.addListener(FWDUVPVideoScreen.START_TO_BUFFER, _s.videoScreenStartToBuferHandler), _s.videoScreen_do.addListener(FWDUVPVideoScreen.STOP_TO_BUFFER, _s.videoScreenStopToBuferHandler), _s.videoScreen_do.addListener(FWDUVPVideoScreen.PLAY_COMPLETE, _s.videoScreenPlayCompleteHandler), _s.videoScreen_do.addListener(FWDUVPVideoScreen.UPDATE_SUBTITLE, _s.videoScreenUpdateSubtitleHandler), _s.videoHolder_do.addChild(_s.videoScreen_do)
                }, _s.videoScreenErrorHandler = function (e) {
                    var t;
                    _s.isPlaying_bl = !1, FWDUVPlayer.hasHTML5Video || _s.videoType_str == FWDUVPlayer.YOUTUBE ? (t = e.text, window.console && console.log(e.text), _s.showSourceError(t), _s.controller_do && (_s.controller_do.disableMainScrubber(), _s.controller_do.disablePlayButton(), _s._d.showControllerWhenVideoIsStopped_bl || _s.controller_do.hide(!_s.isMbl), _s.lrgPlayBtn.hide(), _s.hideClickScreen(), _s.hider && _s.hider.stop())) : (t = e, _s.showSourceError(t)), _s.logo_do && _s.logo_do.hide(!1), _s.preloader_do && _s.preloader_do.hide(!1), _s.showCursor(), _s.dispatchEvent(FWDUVPlayer.ERROR, {
                        error: t
                    })
                }, _s.videoScreenSafeToScrubbHandler = function () {
                    var e = _s._d.playlist_ar[_s.id];
                    _s.controller_do && (_s.isAdd_bl ? (_s.controller_do.disableMainScrubber(), _s._d.timeToHoldAds && _s.adsStart_do.show(!0), _s._d.adsThumbnailPath_str && "none" != _s._d.adsThumbnailPath_str && _s.adsStart_do.loadThumbnail(_s._d.adsThumbnailPath_str), _s.positionAds()) : _s.controller_do.enableMainScrubber(), _s.controller_do.enablePlayButton(), _s.controller_do.show(!0), !_s.isAdd_bl && _s.controller_do.ytbQualityButton_do && (_s.controller_do.ytbQualityButton_do.enable(), _s.controller_do.enablePlaybackRateButton()), !_s.isAdd_bl && _s.controller_do.playbackRateButton_do && _s.controller_do.enablePlaybackRateButton(), _s.isAdd_bl || (_s.controller_do.downloadButton_do && _s.controller_do.downloadButton_do.enable(), _s.controller_do.rewindButton_do && _s.controller_do.rewindButton_do.enable()), _s.hider && _s.hider.start()), !_s.isAdd_bl && !_s.isIMA && e && e.subtitleSource && _s.loadSubtitle(e.subtitleSource[e.subtitleSource.length - 1 - e.startAtSubtitle].source), _s.isAdd_bl || (_s.customContextMenu_do && _s.customContextMenu_do.enable(), (_s.controller_do.thumbnailsPreview_do && e.thumbnailsPreview || _s.controller_do.thumbnailsPreview_do && "auto" == e.thumbnailsPreview && (_s.videoType_str == FWDUVPlayer.VIDEO || _s.videoType_str == FWDUVPlayer.HLS_JS)) && (_s._d.tempShowMainScrubberToolTipLabel_bl = !1, _s.controller_do.thumbnailsPreview_do.load(e.thumbnailsPreview, _s.videoType_str, _s.videoSourcePath_str, _s.videoScreen_do.video_el))), _s.controller_do && (_s.isQualityChanging_bl || _s.controller_do.disableSubtitleButton(), _s.controller_do.enableAtbButton(), _s.isAdd_bl && window.FWDUVPCC && FWDUVPCC.disableButton()), _s.isMbl && _s.adsSkip_do.hide(!1), _s.videoPoster_do.hide(), _s.callVastEvent("start"), _s.executeVastEvent(_s.Impression), _s.showClickScreen(), setTimeout(function () {
                        _s.totalDuration && _s.controller_do && _s.controller_do.positionAdsLines(_s.totalDuration)
                    }, 1500), "00:00:00" == _s.getStartTimeStamp("t") || args.uvpi && args.uvpi != _s.instanceName_str || _s.scrubbAtTime(_s.getStartTimeStamp("t")), document.cookie && _s._d.useResumeOnPlay_bl && !_s.isAdd_bl && (FWDUVPUtils.getCookie("fwduvp_video_path") && FWDUVPUtils.getCookie("fwduvp_time") && FWDUVPUtils.getCookie("fwduvp_video_path") == _s.videoSourcePath_str && (FWDUVPUtils.getCookie("fwduvp_time"), _s.rmsPlayed_bl || _s.scrubbAtTime(FWDUVPUtils.getCookie("fwduvp_time"))), _s.rmsPlayed_bl = !0), _s.resumeAfterAd(), _s.dispatchEvent(FWDUVPlayer.SAFE_TO_SCRUB)
                }, _s.videoScreenUpdateSubtitleHandler = function (e) {
                    _s.subtitle_do && _s.subtitle_do.updateSubtitle(e.curTime)
                }, _s.videoScreenStopHandler = function (e) {
                    _s.main_do && _s.main_do.contains(_s.info_do) && _s.main_do.removeChild(_s.info_do), _s.videoPoster_do.allowToShow_bl = !0, _s.isPlaying_bl = !1, _s.controller_do && (_s.controller_do.disableMainScrubber(), _s.controller_do.showPlayButton(), _s._d.showControllerWhenVideoIsStopped_bl ? _s.controller_do.show(!_s.isMbl) : _s.controller_do.hide(!_s.isMbl), _s.hider && _s.hider.stop()), _s.useYoutube_bl && _s.ytb_do && (_s.isMbl ? _s.ytb_do.destroyYoutube() : _s.ytb_do.stopVideo()), _s.logo_do && _s.logo_do.hide(!0), _s.hideClickScreen(), _s.isMbl && _s.videoType_str == FWDUVPlayer.YOUTUBE && (_s.videoPoster_do.hide(), _s.lrgPlayBtn.hide()), _s.isMbl && (_s.adsSkip_do.hide(!1), _s.adsStart_do.hide(!1)), _s.showCursor(), _s.dispatchEvent(FWDUVPlayer.STOP)
                }, _s.videoScreenPlayHandler = function () {
                    _s.is360 && (_s.dClk_do.getStyle().cursor = "url(" + _s._d.handPath_str + "), default"), (FWDUVPlayer.keyboardCurInstance = _s).videoType_str == FWDUVPlayer.YOUTUBE && _s.ytb_do && _s.ytb_do.isStopped_bl || (_s.setupAPT(), _s.callVastEvent("resume"), _s.isMbl ? FWDUVPlayer.videoStartBehaviour == FWDUVPlayer.STOP_ALL_VIDEOS && FWDUVPlayer.stopAllVideos(_s) : FWDUVPlayer.videoStartBehaviour == FWDUVPlayer.PAUSE_ALL_VIDEOS && FWDUVPlayer.pauseAllVideos(_s), _s.logo_do && _s.logo_do.show(!0), _s.controller_do && (_s.controller_do.showPauseButton(), _s.controller_do.show(!0)), _s.playAtTime_bl = !1, _s.hasHlsPlayedOnce_bl = !0, _s.lrgPlayBtn && _s.lrgPlayBtn.hide(), _s.hider && _s.hider.start(), _s.showCursor(), _s.popw_do && _s.popw_do.hide(), _s.isQualityChanging_bl && (_s.scrubbAtTime(_s.curDurration), _s.curDurration = 0, _s.isQualityChanging_bl = !1), (!_s.isMbl || -1 == _s.source.indexOf(".m3u") || _s.isMbl && -1 == _s.source.indexOf(".m3u")) && _s.resumeAfterAd(), !_s.hasStartedToPlay_bl && _s._d.playlist_ar[_s.id] && _s._d.playlist_ar[_s.id].startAtTime && !_s.isAdd_bl && _s.scrubbAtTime(_s._d.playlist_ar[_s.id].startAtTime), _s.hasStartedToPlay_bl || !_s.castStartAtTime || _s.isAdd_bl || (_s.scrubbAtTime(_s.castStartAtTime), _s.castStartAtTime = void 0), _s.isPlaying_bl = !0, _s.isThumbClick_bl = !1, _s.loadAddFirstTime_bl = !1, _s.hasStartedToPlay_bl = !0, _s.opener_do && _s.opener_do.showPauseButton(), _s.fps && _s.fps.start(), _s.dispatchEvent(FWDUVPlayer.PLAY))
                }, _s.resumeAfterAd = function () {
                    _s.wasAdd_bl && (FWDUVPUtils.isIOS || _s.videoType_str == FWDUVPlayer.VIMEO ? setTimeout(function () {
                        _s.scrubbAtTime(_s.scrubAfterAddDuration)
                    }, 500) : _s.scrubbAtTime(_s.scrubAfterAddDuration), _s.wasAdd_bl = !1)
                }, _s.videoScreenPauseHandler = function () {
                    var e, t;
                    _s.videoType_str == FWDUVPlayer.YOUTUBE && _s.ytb_do && _s.ytb_do.isStopped_bl || _s.videoType_str == FWDUVPlayer.VIMEO && _s.vimeo_do && _s.vimeo_do.isStopped_bl || (_s.callVastEvent("pause"), _s.preloader_do && _s.preloader_do.hide(), _s.isPlaying_bl = !1, _s.controller_do && (_s.controller_do.showPlayButton(), _s.controller_do.show(!0)), e = _s.shareWindow_do && _s.shareWindow_do.isShowed_bl, t = _s.embedWindow_do && _s.embedWindow_do.isShowed_bl, e || t || _s.showPopW_bl && _s.popw_do.show(_s.popwSource), _s.lrgPlayBtn && !_s._d.showAnnotationsPositionTool_bl && _s.lrgPlayBtn.show(), _s.hider && (_s.hider.reset(), _s.hider.stop()), _s.showClickScreen(), _s.showCursor(), _s.opener_do && _s.opener_do.showPlayButton(), _s.fps && _s.fps.stop(), _s.dispatchEvent(FWDUVPlayer.PAUSE))
                }, _s.videoScreenUpdateHandler = function (e) {
                    var t;
                    FWDUVPlayer.hasHTML5Video || _s.videoType_str == FWDUVPlayer.YOUTUBE ? t = e.percent : (t = e, console.log(e)), _s.controller_do && _s.controller_do.updateMainScrubber(t), _s.dispatchEvent(FWDUVPlayer.UPDATE, {
                        percent: t
                    })
                }, _s.videoScreenUpdateTimeHandler = function (e, e2, e3) {
                    if (!_s.isStopped_bl) {
                        var a, b, time, seconds;
                        if (_s.prevSeconds != Math.round(e.seconds) && (_s.totalTimePlayed += 1), _s.totalTimeInSeconds = Math.round(e.totalTimeInSeconds), _s.totalTimeInMilliseconds = e.totalTimeInSeconds, _s.curTimeInSecond = Math.round(e.seconds), _s.curTimeInmilliseconds = e.seconds, _s.prevSeconds = Math.round(e.seconds), _s.totalPercentPlayed = _s.totalTimePlayed / e.totalTimeInSeconds, isFinite(_s.totalPercentPlayed) || (_s.totalPercentPlayed = 0), FWDUVPUtils.getSecondsFromString(_s.getStartTimeStamp("e")) && _s.curTimeInSecond >= parseInt(FWDUVPUtils.getSecondsFromString(_s.getStartTimeStamp("e"))) && _s.stop(), _s.controller_do && !_s.controller_do.isMainScrubberScrubbing_bl && _s.controller_do.atb && _s.controller_do.atb.isShowed_bl && !_s.controller_do.atb.scrub && (a = _s.totalTimeInSeconds * _s.controller_do.atb.pa, b = _s.totalTimeInSeconds * _s.controller_do.atb.pb, _s.prevCurTimeInSeconds != _s.curTimeInSecond && (_s.prevCurTimeInSeconds = _s.curTimeInSecond, (_s.curTimeInSecond < a || _s.curTimeInSecond > b) && _s.scrub(_s.controller_do.atb.pa))), _s.isAdd_bl && (.25 <= _s.totalPercentPlayed && _s.callFirstQuartile ? (_s.callVastEvent("firstQuartile"), _s.callFirstQuartile = !1) : .5 <= _s.totalPercentPlayed && _s.callMidpoint ? (_s.callVastEvent("midpoint"), _s.callMidpoint = !1) : .75 <= _s.totalPercentPlayed && _s.callThirdQuartile && (_s.callVastEvent("thirdQuartile"), _s.callThirdQuartile = !1)), seconds = FWDUVPlayer.hasHTML5Video || _s.videoType_str == FWDUVPlayer.YOUTUBE || _s.videoType_str == FWDUVPlayer.VIMEO ? (_s.curTime = e.curTime, _s.totalTime = e.totalTime, time = _s.curTime + "/" + _s.totalTime, _s.curTimeInSecond) : (_s.curTime = e, _s.totalTime = e2, time = _s.curTime + "/" + _s.totalTime, null != e && null != e2 || (time = "00:00/00:00"), Math.round(e3)), _s.controller_do && _s.controller_do.updateTime(time), _s.currentSecconds = e.seconds, _s.popupAds_do && !_s.isAdd_bl && _s.popupAds_do.update(_s.curTimeInSecond), _s.annotations_do && !_s.isAdd_bl && _s.annotations_do.update(_s.curTimeInSecond), _s._d.playlist_ar && _s._d.playlist_ar[_s.id] && (_s.cuePointsSource_ar = _s._d.playlist_ar[_s.id].cuepoints_ar), _s.cuePointsSource_ar && !_s.isAdd_bl)
                            for (var length = _s.cuePointsSource_ar.length, i = 0, cuePoint; i < length; i++) {
                                _s.cuePointsSource_ar && (cuePoint = _s.cuePointsSource_ar[i], cuePoint.timeStart != _s.curTimeInSecond || cuePoint.played_bl || (_s._d.executeCuepointsOnlyOnce_bl && cuePoint.played_bl || eval(cuePoint.javascriptCall), cuePoint.played_bl = !0))
                            }
                        _s.isAdd_bl || (5 < _s.totalTime.length ? _s.totalDuration = FWDUVPUtils.getSecondsFromString(_s.totalTime) : _s.totalDuration = FWDUVPUtils.getSecondsFromString("00:" + _s.totalTime)), _s.isIMA && _s.IMA.updateCuepointLines(seconds), _s.isAdd_bl ? _s._d.timeToHoldAds > seconds ? (_s.adsStart_do.updateText(_s._d.skipToVideoText_str + Math.abs(_s._d.timeToHoldAds - seconds)), _s.isMbl && _s.adsSkip_do.hide(!1), _s.videoType_str != FWDUVPlayer.IMAGE && _s.videoType_str != FWDUVPlayer.IFRAME || _s.adsStart_do.show(!0)) : _s.isPlaying_bl && (_s.adsStart_do.hide(!0), _s._d.timeToHoldAds && _s.adsSkip_do.show(!0)) : (_s.adsStart_do.hide(!0), _s.adsSkip_do.hide(!0)), 0 != seconds && (_s.curDurration = seconds, _s.updateAds(seconds)), _s.isPlaying_bl && _s._d.playlist_ar[_s.id] && FWDUVPUtils.getSecondsFromString(_s._d.playlist_ar[_s.id].stopAtTime) <= e.seconds && (_s._d.playAfterVideoStop_bl ? _s._d.stopAfterLastVideoHasPlayed_bl && _s._d.playlist_ar.length - 1 == _s.id ? _s.stop() : _s.playNext() : _s._d.stopAfterLastVideoHasPlayed_bl || _s._d.playlist_ar.length - 1 != _s.id ? _s.stop() : _s.playNext()), _s.dispatchEvent(FWDUVPlayer.UPDATE_TIME, {
                            currentTime: _s.curTime,
                            totalTime: _s.totalTime
                        })
                    }
                }, _s.videoScreenLoadProgressHandler = function (e) {
                    FWDUVPlayer.hasHTML5Video || _s.videoType_str == FWDUVPlayer.YOUTUBE ? _s.controller_do && _s.controller_do.updatePreloaderBar(e.percent) : _s.controller_do && _s.controller_do.updatePreloaderBar(e)
                }, _s.videoScreenStartToBuferHandler = function () {
                    _s.preloader_do && _s.preloader_do.show(!1)
                }, _s.videoScreenStopToBuferHandler = function () {
                    _s.preloader_do && _s.preloader_do.hide(!0)
                }, _s.videoScreenPlayCompleteHandler = function (e, t) {
                    var o;
                    _s._d.playlist_ar && (_s.videoNameGa = _s._d.playlist_ar[_s.id].gaStr, _s.videoCat = _s._d.cats_ar[_s.catId].playlistName), _s.stopedAtComplete = !0, _s.callVastEvent("complete"), _s.isIMA && _s.IMA.hasPostRoll && _s.curTimeInSecond >= _s.totalTimeInSeconds - 1 ? _s.IMA.playPostRoll() : (!_s.isAdd_bl && _s._d.playlist_ar[_s.id].redirectURL && ("_self" == _s._d.playlist_ar[_s.id].redirectTarget ? location.replace(_s._d.playlist_ar[_s.id].redirectURL) : window.open(_s._d.playlist_ar[_s.id].redirectURL, _s._d.playlist_ar[_s.id].redirectTarget)), o = _s.isAdd_bl, _s.isAdd_bl && (_s.isThumbClick_bl = !0, _s._d.openNewPageAtTheEndOfTheAds_bl && "none" != _s._d.adsPageToOpenURL_str && !t && ("_self" == _s._d.adsPageToOpenTarget_str ? location.href = _s._d.adsPageToOpenURL_str : window.open(_s._d.adsPageToOpenURL_str, _s._d.adsPageToOpenTarget_str)), _s.isAdd_bl = !1, _s.updateAds(0), _s.wasAdd_bl = !0, (t && _s.videoType_str == FWDUVPlayer.VIDEO || !_s.isMbl && _s.videoType_str != FWDUVPlayer.DASH && _s.videoType_str != FWDUVPlayer.VIMEO) && _s.play()), o || (_s.lightBox_do && _s.lightBox_do.isShowed_bl && _s._d.closeLightBoxWhenPlayComplete && (_s.stop(), _s.lightBox_do.closeButtonOnStartHandler()), _s._d.stopVideoWhenPlayComplete_bl || 1 == _s._d.playlist_ar.length || _s._d.stopAfterLastVideoHasPlayed_bl && _s._d.playlist_ar.length - 1 == _s.id ? _s.stop() : _s._d.loop_bl ? _s.videoType_str == FWDUVPlayer.HLS_JS || _s.videoType_str == FWDUVPlayer.DASH ? setTimeout(function () {
                        _s.scrub(0), _s.resume()
                    }, 50) : (_s.scrub(0), _s.play()) : _s._d.shuffle_bl ? (_s.playShuffle(), _s.isMbl && _s.stop(), _s.videoType_str == FWDUVPlayer.DASH && _s.setSource(_s.source)) : (_s.playNext(), _s.isMbl && (_s.stop(), _s.videoType_str == FWDUVPlayer.DASH && _s.setSource(_s.source)))), _s.hider && _s.hider.reset(), _s.dispatchEvent(FWDUVPlayer.PLAY_COMPLETE))
                }, _s.setupAnnotations = function () {
                    FWDUVPAnnotations.setPrototype(), _s.annotations_do = new FWDUVPAnnotations(_s, _s._d), _s.videoHolder_do.setBkColor = props.backgroundColor, _s.videoHolder_do.screen.className = "fwduvp-video-holder", _s.videoHolder_do.addChild(_s.annotations_do)
                }, _s.setupAdsStart = function () {
                    FWDUVPAdsStart.setPrototype(), _s.adsStart_do = new FWDUVPAdsStart(_s._d.adsButtonsPosition_str, _s._d.adsBorderNormalColor_str, "", _s._d.adsBackgroundPath_str, _s._d.adsTextNormalColor), FWDUVPAdsButton.setPrototype(), _s.adsSkip_do = new FWDUVPAdsButton(_s._d.skipIconPath_img, _s._d.skipIconSPath_str, _s._d.skipToVideoButtonText_str, _s._d.adsButtonsPosition_str, _s._d.adsBorderNormalColor_str, _s._d.adsBorderSelectedColor_str, _s._d.adsBackgroundPath_str, _s._d.adsTextNormalColor, _s._d.adsTextSelectedColor, _s._d.useHEX, _s._d.nBC, _s._d.sBC), _s.adsSkip_do.addListener(FWDUVPAdsButton.MOUSE_UP, _s.skipAdsMouseUpHandler), _s.videoHolder_do.addChild(_s.adsSkip_do), _s.videoHolder_do.addChild(_s.adsStart_do)
                }, _s.skipAdsMouseUpHandler = function () {
                    _s.isThumbClick_bl = !0, _s.callVastEvent("skip"), _s.videoScreenPlayCompleteHandler(null, !0)
                }, _s.positionAds = function (e) {
                    var t = "left" == _s._d.adsButtonsPosition_str ? 0 : _s.tempVidStageWidth,
                        o = _s.controller_do ? _s.controller_do.isShowed_bl ? _s.tempVidStageHeight - _s.adsStart_do.h - _s._d.controllerHeight - 30 : _s.tempVidStageHeight - _s.adsStart_do.h - _s._d.controllerHeight : _s.tempVidStageHeight - _s.adsStart_do.h;
                    FWDAnimation.killTweensOf(_s.adsStart_do), e ? FWDAnimation.to(_s.adsStart_do, .8, {
                        y: o,
                        ease: Expo.easeInOut
                    }) : _s.adsStart_do.setY(o), _s.adsStart_do.setX(t);
                    var s = !1;
                    _s.tempStageWidth < 600 && (s = !0), _s.adsSkip_do.resize(s), t = "left" == _s._d.adsButtonsPosition_str ? 0 : _s.tempVidStageWidth, o = _s.controller_do ? _s.controller_do.isShowed_bl ? _s.tempVidStageHeight - _s.adsSkip_do.h - _s._d.controllerHeight - 30 : _s.tempVidStageHeight - _s.adsSkip_do.h - _s._d.controllerHeight : _s.tempVidStageHeight - _s.adsSkip_do.h, FWDAnimation.killTweensOf(_s.adsSkip_do), e ? FWDAnimation.to(_s.adsSkip_do, .8, {
                        y: o,
                        ease: Expo.easeInOut
                    }) : _s.adsSkip_do.setY(o), _s.adsSkip_do.setX(t)
                }, _s.setupShareWindow = function () {
                    FWDUVPShareWindow.setPrototype(), _s.shareWindow_do = new FWDUVPShareWindow(_s._d, _s), _s.shareWindow_do.addListener(FWDUVPShareWindow.HIDE_COMPLETE, _s.shareWindowHideCompleteHandler)
                }, _s.shareWindowHideCompleteHandler = function () {
                    _s.isVideoPlayingWhenOpenWindows_bl && _s.resume(), _s.controller_do && !_s.isMbl && (_s.controller_do.shareButton_do.isDisabled_bl = !1, _s.controller_do.shareButton_do.setNormalState(!0))
                }, _s.setupLoginWindow = function () {
                    FWDUVPPassword.setPrototype(), _s.lg_do = new FWDUVPPassword(_s._d, _s, !0)
                }, _s.setupPasswordWindow = function () {
                    FWDUVPPassword.setPrototype(), _s.passWindow_do = new FWDUVPPassword(_s._d, _s), _s.passWindow_do.addListener(FWDUVPPassword.CORRECT, _s.passordCorrect)
                }, _s.passordCorrect = function () {
                    _s.passWindow_do.hide(), _s.hasPassedPassowrd_bl = !0, _s.play()
                }, _s.setupEmbedWindow = function () {
                    FWDUVPEmbedWindow.setPrototype(), _s.embedWindow_do = new FWDUVPEmbedWindow(_s._d, _s), _s.embedWindow_do.addListener(FWDUVPEmbedWindow.ERROR, _s.embedWindowErrorHandler), _s.embedWindow_do.addListener(FWDUVPEmbedWindow.HIDE_COMPLETE, _s.embedWindowHideCompleteHandler)
                }, _s.embedWindowErrorHandler = function (e) {
                    _s.showSourceError(e.error)
                }, _s.embedWindowHideCompleteHandler = function () {
                    _s.isVideoPlayingWhenOpenWindows_bl && _s.resume(), _s.controller_do && !_s.isMbl && (_s.controller_do.embedButton_do.isDisabled_bl = !1, _s.controller_do.embedButton_do.setNormalState(!0))
                }, _s.copyLinkButtonOnMouseOver = function () {
                    _s.embedWindow_do.copyLinkButton_do.setSelectedState()
                }, _s.copyLinkButtonOnMouseOut = function () {
                    _s.embedWindow_do.copyLinkButton_do.setNormalState()
                }, _s.getLinkCopyPath = function () {
                    return _s.embedWindow_do.linkToVideo_str
                }, _s.embedkButtonOnMouseOver = function () {
                    _s.embedWindow_do.copyEmbedButton_do.setSelectedState()
                }, _s.embedButtonOnMouseOut = function () {
                    _s.embedWindow_do.copyEmbedButton_do.setNormalState()
                }, _s.getEmbedCopyPath = function () {
                    return _s.embedWindow_do.finalEmbedCode_str
                }, _s.setInputs = function () {
                    for (var e = document.querySelectorAll("input"), t = 0; t < e.length; t++) _s.hasPointerEvent_bl ? e[t].addEventListener("pointerdown", _s.inputFocusInHandler) : e[t].addEventListener && (e[t].addEventListener("mousedown", _s.inputFocusInHandler), e[t].addEventListener("touchstart", _s.inputFocusInHandler))
                }, _s.inputFocusInHandler = function (e) {
                    _s.curInput = e.target, setTimeout(function () {
                        _s.hasPointerEvent_bl ? window.addEventListener("pointerdown", _s.inputFocusOutHandler) : window.addEventListener && (window.addEventListener("mousedown", _s.inputFocusOutHandler), window.addEventListener("touchstart", _s.inputFocusOutHandler)), FWDUVPlayer.isSearchedFocused_bl = !0
                    }, 50)
                }, _s.inputFocusOutHandler = function (e) {
                    var t = FWDUVPUtils.getViewportMouseCoordinates(e);
                    if (!FWDUVPUtils.hitTest(_s.curInput, t.screenX, t.screenY)) return _s.hasPointerEvent_bl ? window.removeEventListener("pointerdown", _s.inputFocusOutHandler) : window.removeEventListener && (window.removeEventListener("mousedown", _s.inputFocusOutHandler), window.removeEventListener("touchstart", _s.inputFocusOutHandler)), void(FWDUVPlayer.isSearchedFocused_bl = !1)
                }, _s.addKeyboardSupport = function () {
                    _s.setInputs(), document.addEventListener("keydown", _s.onKeyDownHandler), document.addEventListener("keyup", _s.onKeyUpHandler)
                }, _s.onKeyDownHandler = function (e) {
                    if ((!_s.isSpaceDown_bl && _s.hasStartedToPlay_bl && !FWDUVPlayer.isSearchedFocused_bl || _s.isCasting) && (_s.isSpaceDown_bl = !0, e.preventDefault && e.preventDefault(), _s == FWDUVPlayer.keyboardCurInstance || "pause" != FWDUVPlayer.videoStartBehaviour && "none" != FWDUVPlayer.videoStartBehaviour)) {
                        if (32 == e.keyCode) {
                            if (_s.stickOnCurrentInstanceKey_bl = !0, _s.isCasting) _s.cc.togglePlayPause();
                            else if (_s.videoType_str == FWDUVPlayer.IMAGE || _s.videoType_str == FWDUVPlayer.IFRAME) _s.isImageAdsPlaying_bl ? _s.stopUpdateImageInterval() : _s.startUpdateImageInterval();
                            else if (_s.isIMA && _s.IMA.started) _s.IMA.togglePlayPause();
                            else if (_s.videoType_str == FWDUVPlayer.YOUTUBE) {
                                if (!_s.ytb_do.isSafeToBeControlled_bl) return;
                                _s.ytb_do.togglePlayPause()
                            } else if (_s.videoType_str == FWDUVPlayer.VIMEO) {
                                if (!_s.vimeo_do.isSafeToBeControlled_bl) return;
                                _s.vimeo_do.togglePlayPause()
                            } else if (_s.videoType_str == FWDUVPlayer.MP3) {
                                if (!_s.audioScreen_do.isSafeToBeControlled_bl) return;
                                _s.audioScreen_do.togglePlayPause()
                            } else if (FWDUVPlayer.hasHTML5Video) {
                                if (!_s.videoScreen_do.isSafeToBeControlled_bl) return;
                                _s.videoScreen_do && _s.videoScreen_do.togglePlayPause()
                            }
                            return e.preventDefault && e.preventDefault(), !1
                        }
                        var t;
                        70 == e.keyCode ? _s.isFullScreen_bl ? _s.goNormalScreen() : _s.goFullScreen() : 77 == e.keyCode ? (0 != _s.volume && (_s.lastVolume = _s.volume), 0 != _s.volume ? _s.volume = 0 : _s.volume = _s.lastVolume, _s.setVolume(_s.volume)) : 38 == e.keyCode ? (_s.volume += .1, 1 < _s.volume && (_s.volume = 1), _s.setVolume(_s.volume)) : 40 == e.keyCode ? (_s.volume -= .1, _s.volume < 0 && (_s.volume = 0), _s.setVolume(_s.volume)) : 77 == e.keyCode ? (_s.volume < 0 && (_s.volume = 0), _s.setVolume(_s.volume)) : 39 != e.keyCode || _s.isAdd_bl || _s.isIMA ? 37 != e.keyCode || _s.isAdd_bl || _s.isIMA || (5 == (t = _s.getCurrentTime()).length && (t = "00:" + t), 7 == t.length && (t = "0" + t), t = FWDUVPUtils.getSecondsFromString(t), t -= 5, 5 == (t = FWDUVPUtils.formatTime(t)).length && (t = "00:" + t), 7 == t.length && (t = "0" + t), _s.scrubbAtTime(t)) : (5 == (t = _s.getCurrentTime()).length && (t = "00:" + t), 7 == t.length && (t = "0" + t), t = FWDUVPUtils.getSecondsFromString(t), t += 5, 5 == (t = FWDUVPUtils.formatTime(t)).length && (t = "00:" + t), 7 == t.length && (t = "0" + t), _s.scrubbAtTime(t))
                    }
                }, _s.onKeyUpHandler = function (e) {
                    _s.isSpaceDown_bl = !1
                }, _s.setupAopw = function () {
                    FWDUVPOPWindow.setPrototype(), _s.popw_do = new FWDUVPOPWindow(_s._d, _s)
                }, _s.setupHider = function () {
                    FWDUVPHider.setPrototype(), _s.hider = new FWDUVPHider(_s.main_do, _s.controller_do, _s._d.controllerHideDelay), _s.hider.addListener(FWDUVPHider.SHOW, _s.hiderShowHandler), _s.hider.addListener(FWDUVPHider.HIDE, _s.hiderHideHandler), _s.hider.addListener(FWDUVPHider.HIDE_COMPLETE, _s.hiderHideCompleteHandler)
                }, _s.hiderShowHandler = function () {
                    _s.controller_do && _s.isPlaying_bl && _s.controller_do.show(!0), _s.logo_do && _s._d.hideLogoWithController_bl && _s.isPlaying_bl && _s.logo_do.show(!0), _s.showCursor(), _s.isAdd_bl && (_s.positionAds(!0), _s.adsStart_do.showWithOpacity(), _s.adsSkip_do.showWithOpacity()), _s.subtitle_do && _s.subtitle_do.position(!0), _s.popupAds_do && _s.popupAds_do.position(!0)
                }, _s.hiderHideHandler = function () {
                    _s.videoType_str == FWDUVPlayer.VIMEO || _s.controller_do.volumeScrubber_do && _s.controller_do.isVolumeScrubberShowed_bl || _s.controller_do.atb && _s.controller_do.atb.isShowed_bl && FWDUVPUtils.hitTest(_s.controller_do.atb.mainHld.screen, _s.hider.globalX, _s.hider.globalY) || _s._d.showYoutubeQualityButton_bl && FWDUVPUtils.hitTest(_s.controller_do.ytbButtonsHolder_do.screen, _s.hider.globalX, _s.hider.globalY) || _s._d.showPlaybackRateButton_bl && _s.controller_do && FWDUVPUtils.hitTest(_s.controller_do.playbackRatesButtonsHolder_do.screen, _s.hider.globalX, _s.hider.globalY) || _s.controller_do && _s._d.showSubBtn && FWDUVPUtils.hitTest(_s.controller_do.subtitlesButtonsHolder_do.screen, _s.hider.globalX, _s.hider.globalY) || FWDUVPUtils.hitTest(_s.controller_do.screen, _s.hider.globalX, _s.hider.globalY) || FWDUVPUtils.hitTest(_s.controller_do.mainScrubber_do.screen, _s.hider.globalX, _s.hider.globalY) ? _s.hider.reset() : (_s.controller_do.hide(!0), _s.logo_do && _s._d.hideLogoWithController_bl && _s.logo_do.hide(!0), _s.isFullScreen_bl && _s.hideCursor(), _s.isAdd_bl && (_s.positionAds(!0), _s.adsStart_do.hideWithOpacity(), _s.adsSkip_do.hideWithOpacity()), _s.subtitle_do.position(!0), _s.popupAds_do && _s.popupAds_do.position(!0))
                }, _s.hiderHideCompleteHandler = function () {
                    _s.controller_do.positionScrollBarOnTopOfTheController()
                }, _s.play = function () {
                    if (_s.isAPIReady_bl)
                        if (_s.isCasting) _s.cc.play();
                        else if (!_s.isMbl || _s.videoType_str != FWDUVPlayer.YOUTUBE || !_s.ytb_do || _s.ytb_do.isSafeToBeControlled_bl || _s._d.autoPlay_bl)
                        if (_s.videoType_str == FWDUVPlayer.HLS_JS && 0 <= location.protocol.indexOf("file:")) _s.showSourceError("HLS m3u8 videos can't be played local on _s browser, please test it online!.");
                        else {
                            if (!_s.isAdd_bl && (_s._d.playlist_ar[_s.id].isPrivate || _s.playlistPass) && !_s.hasPassedPassowrd_bl && _s.passWindow_do && !_s.plPassPassed) return _s.lrgPlayBtn && _s.lrgPlayBtn.show(), _s.passWindow_do.show(), void _s.videoPoster_do.show();
                            if (_s.hasPassedPassowrd_bl = !0, _s._d.playIfLoggedIn || _s._d.playlist_ar[_s.id].playIfLoggedIn) return _s.lg_do.show(), void _s.videoPoster_do.show();
                            if (_s.isMbl ? FWDUVPlayer.stopAllVideos(_s) : FWDUVPlayer.videoStartBehaviour == FWDUVPlayer.PAUSE_ALL_VIDEOS ? FWDUVPlayer.pauseAllVideos(_s) : FWDUVPlayer.videoStartBehaviour == FWDUVPlayer.STOP_ALL_VIDEOS && FWDUVPlayer.stopAllVideos(_s), _s.isIMA) {
                                if (_s.isIMA && _s.IMA && !_s.IMA.isReady) return;
                                _s.IMA.play()
                            } else _s.videoType_str == FWDUVPlayer.IMAGE || _s.videoType_str == FWDUVPlayer.IFRAME ? _s.startUpdateImageInterval() : _s.videoType_str == FWDUVPlayer.YOUTUBE ? _s.ytb_do && _s.ytb_do.play() : _s.videoType_str == FWDUVPlayer.MP3 ? (_s.audioScreen_do && _s.audioScreen_do.play(), FWDUVPUtils.isLocal || _s.audioScreen_do.setupSpectrum()) : _s.videoType_str == FWDUVPlayer.VIMEO ? _s.vimeo_do && _s.vimeo_do.play() : FWDUVPlayer.hasHTML5Video && (_s.videoType_str != FWDUVPlayer.HLS_JS || _s.isHLSManifestReady_bl ? _s.videoType_str != FWDUVPlayer.DASH || _s.isDASHManifestReady_bl ? _s.videoScreen_do.play() : (_s.videoScreen_do.initVideo(), window.dashjs && (_s.setupDASH(), _s.dashJS.initialize(_s.videoScreen_do.video_el, _s.videoSourcePath_str, !1), _s.dashJS.attachSource(_s.videoSourcePath_str), _s.dashJS.on(dashjs.MediaPlayer.events.MANIFEST_LOADED, function (e) {
                                _s.isDASHManifestReady_bl = !0, _s.videoType_str == FWDUVPlayer.DASH && setTimeout(_s.play, 100)
                            }))) : (_s.videoScreen_do.initVideo(), window.Hls && (_s.setupHLS(), _s.hlsJS.loadSource(_s.videoSourcePath_str), _s.hlsJS.attachMedia(_s.videoScreen_do.video_el), _s.hlsJS.on(Hls.Events.MANIFEST_PARSED, function (e) {
                                _s.isHLSManifestReady_bl = !0, _s.videoType_str == FWDUVPlayer.HLS_JS && _s.play()
                            }))));
                            _s.lrgPlayBtn.hide(), _s.videoPoster_do.hide()
                        }
                }, _s.pause = function () {
                    _s.isAPIReady_bl && (_s.isCasting ? _s.cc.pause() : _s.isIMA ? _s.IMA.pause() : _s.videoType_str == FWDUVPlayer.IMAGE || _s.videoType_str == FWDUVPlayer.IFRAME ? _s.stopUpdateImageInterval() : _s.videoType_str == FWDUVPlayer.YOUTUBE ? _s.ytb_do.pause() : _s.videoType_str == FWDUVPlayer.MP3 ? _s.audioScreen_do && _s.audioScreen_do.pause() : _s.videoType_str == FWDUVPlayer.VIMEO ? _s.vimeo_do.pause() : FWDUVPlayer.hasHTML5Video && _s.videoScreen_do && _s.videoScreen_do.pause())
                }, _s.resume = function () {
                    _s.isAPIReady_bl && (_s.isCasting ? _s.cc.play() : _s.isIMA && _s.IMA.started ? _s.IMA.play() : _s.videoType_str == FWDUVPlayer.IMAGE || _s.videoType_str == FWDUVPlayer.IFRAME ? _s.startUpdateImageInterval() : _s.videoType_str == FWDUVPlayer.YOUTUBE && _s.ytb_do ? _s.ytb_do.resume() : _s.videoType_str == FWDUVPlayer.MP3 ? _s.audioScreen_do && _s.audioScreen_do.resume() : _s.videoType_str == FWDUVPlayer.VIMEO && _s.vimeo_do ? _s.vimeo_do.resume() : FWDUVPlayer.hasHTML5Video && _s.videoScreen_do && _s.videoScreen_do.resume())
                }, _s.sendPlayEvent = function () {}, _s.sendGAPlayedEvent = function () {
                    var e;
                    !isNaN(_s.totalPercentPlayed) && window.ga && Math.round(100 * _s.totalPercentPlayed) && (e = "videoName:" + _s.videoNameGa + ", percentPlayed:" + Math.round(100 * _s.totalPercentPlayed) + ", stoppedAtTime:" + _s.getCurrentTime() + ", fullScreen:" + _s.isFullScreen_bl, ga("send", {
                        hitType: "event",
                        eventCategory: _s.videoCat,
                        eventAction: "played",
                        eventLabel: e,
                        nonInteraction: !0
                    }), _s.totalTimePlayed = 0, _s.totalPercentPlayed = 0)
                }, _s.stop = function (e) {
                    _s.isAPIReady_bl && (_s.isStopped_bl || (_s.sendGAPlayedEvent(), _s.isCasting && _s.cc.stop(), _s.IMA && _s.IMA.stop(), FWDUVPPassword.isCorect = !0, _s.totalTimePlayed = 0, _s.totalDuration = 0, _s.isIMA = void 0, _s.hasPassedPassowrd_bl = !1, _s.isHLSManifestReady_bl = !1, _s.isDASHManifestReady_bl = !1, clearInterval(_s.tryHLS_int), clearInterval(_s.checkIfYoutubePlayerIsReadyId_int), clearInterval(_s.keepCheckingYoutubeAPI_int), _s.hideAPT(), _s.destroyDASH(), _s.destroyHLS(), _s._d.closeVast(), _s.fps && _s.fps.stop(), _s.isPlaying_bl = !1, _s.customContextMenu_do && _s.customContextMenu_do.disable(), _s.videoType_str == FWDUVPlayer.IMAGE || _s.videoType_str == FWDUVPlayer.IFRAME ? _s.stopUpdateImageInterval() : _s.videoType_str == FWDUVPlayer.YOUTUBE && _s.ytb_do ? _s.ytb_do.stop() : _s.videoType_str == FWDUVPlayer.MP3 ? _s.audioScreen_do && _s.audioScreen_do.stop() : _s.videoType_str == FWDUVPlayer.VIMEO && _s.vimeo_do ? _s.vimeo_do.stop() : FWDUVPlayer.hasHTML5Video && _s.videoScreen_do.stop(), clearTimeout(_s.playVimeoWhenLoadedId_to), _s.popw_do && _s.popw_do.hide(), _s._d.playlist_ar[_s.id] && (_s.posterPath_str = _s._d.playlist_ar[_s.id].posterSource), _s.isMbl ? (_s._d.showControllerWhenVideoIsStopped_bl && _s.controller_do && _s.controller_do.show(!0), e || _s.videoType_str == FWDUVPlayer.YOUTUBE ? _s.useYoutube_bl && _s.ytb_do && !_s.ytb_do.ytb && _s.ytb_do.setupVideo() : (_s.videoPoster_do.show(), _s.lrgPlayBtn.show())) : _s.isThumbClick_bl || (_s.controller_do && _s._d.showControllerWhenVideoIsStopped_bl && _s.controller_do.show(!0), _s.videoPoster_do && _s.videoPoster_do.show(), _s.lrgPlayBtn && _s.lrgPlayBtn.show()), _s.controller_do && (_s.controller_do.atb && _s.controller_do.atb.hide(!0), _s.controller_do.subtitleButton_do && (_s.controller_do.disableSubtitleButton(), _s.subtitle_do && (_s.subtitle_do.showSubByDflt ? _s.controller_do.subtitleButton_do.setButtonState(0) : _s.controller_do.subtitleButton_do.setButtonState(1))), _s.controller_do.thumbnailsPreview_do && _s.controller_do.thumbnailsPreview_do.remove(), _s.controller_do.atbButton_do && (_s.controller_do.atbButton_do.doNotallowToSetNormal = !1, _s.controller_do.atbButton_do.isSelected = !1, _s.controller_do.atbButton_do.setNormalState()), _s.controller_do.disableAtbButton(), _s.controller_do.ttm && _s.controller_do.ttm.hide(), _s.controller_do.ytbQualityButton_do && _s.controller_do.ytbQualityButton_do.disable(), _s.controller_do.playbackRateButton_do && _s.controller_do.playbackRateButton_do.disable(), _s.controller_do && _s.controller_do.rewindButton_do && _s.controller_do.rewindButton_do.disable()), _s.popupAds_do && _s.popupAds_do.hideAllPopupButtons(!1), _s.hasHlsPlayedOnce_bl = !1, _s.isSafeToScrub_bl = !1, _s.hlsState = void 0, _s.changeHLS_bl = !1, _s.totalDuration = 0, _s.hasStartedToPlay_bl = !1, _s.controller_do && _s.controller_do.disablePlaybackRateButton(), _s.subtitle_do && _s.subtitle_do.hide(), _s.annotations_do && _s.annotations_do.update(-1), _s.hider && _s.hider.reset(), _s.showCursor(), _s.adsStart_do && _s.adsStart_do.hide(!0), _s.adsSkip_do && _s.adsSkip_do.hide(!0), _s.controller_do && _s.controller_do.hideAdsLines(), _s.stopVisualization(), _s.isStopped_bl = !1))
                }, _s.startToScrub = function () {
                    _s.isAPIReady_bl && (_s.videoType_str == FWDUVPlayer.YOUTUBE && _s.ytb_do && _s.ytb_do.isSafeToBeControlled_bl ? _s.ytb_do.startToScrub() : _s.videoType_str == FWDUVPlayer.MP3 ? _s.audioScreen_do && _s.audioScreen_do.startToScrub() : _s.videoScreen_do && _s.videoScreen_do.startToScrub())
                }, _s.stopToScrub = function () {
                    _s.isAPIReady_bl && (_s.videoType_str == FWDUVPlayer.YOUTUBE && _s.ytb_do && _s.ytb_do.isSafeToBeControlled_bl ? _s.ytb_do.stopToScrub() : _s.videoType_str == FWDUVPlayer.MP3 ? _s.audioScreen_do && _s.audioScreen_do.stopToScrub() : _s.videoScreen_do && _s.videoScreen_do.stopToScrub())
                }, _s.scrubbAtTime = function (e) {
                    _s.isAPIReady_bl && e && (-1 != String(e).indexOf(":") && (e = FWDUVPUtils.getSecondsFromString(e)), _s.isCasting ? _s.cc.scrubbAtTime(e) : _s.videoType_str == FWDUVPlayer.YOUTUBE && _s.ytb_do && _s.ytb_do.isSafeToBeControlled_bl ? _s.ytb_do.scrubbAtTime(e) : _s.videoType_str == FWDUVPlayer.VIMEO && _s.vimeo_do ? _s.vimeo_do.scrubbAtTime(e) : _s.videoType_str == FWDUVPlayer.MP3 ? _s.audioScreen_do && _s.audioScreen_do.scrubbAtTime(e) : FWDUVPlayer.hasHTML5Video && _s.videoScreen_do && _s.videoScreen_do.scrubbAtTime(e))
                }, _s.scrub = function (e) {
                    _s.isAPIReady_bl && (isNaN(e) || (e < 0 ? e = 0 : 1 < e && (e = 1), _s.videoType_str == FWDUVPlayer.YOUTUBE && _s.ytb_do && _s.ytb_do.isSafeToBeControlled_bl ? _s.ytb_do.scrub(e) : _s.videoType_str == FWDUVPlayer.MP3 ? _s.audioScreen_do && _s.audioScreen_do.scrub(e) : _s.videoType_str == FWDUVPlayer.VIMEO && _s.vimeo_do && _s.vimeo_do.isSafeToBeControlled_bl ? _s.vimeo_do.scrub(e) : _s.videoScreen_do && _s.videoScreen_do.scrub(e)))
                }, _s.setVolume = function (e, t) {
                    _s.isAPIReady_bl && ((_s.volume = e) && t && (_s._d.autoPlay_bl = !1, _s.removeAPT()), _s.controller_do && _s.controller_do.updateVolume(e, !0), _s.isIMA && _s.IMA.setVolume(e), _s.videoType_str == FWDUVPlayer.YOUTUBE && _s.ytb_do && _s.ytb_do.setVolume(e), _s.videoType_str == FWDUVPlayer.VIMEO && _s.vimeo_do && _s.vimeo_do.setVolume(e), _s.audioScreen_do && _s.audioScreen_do.setVolume(e), FWDUVPlayer.hasHTML5Video && _s.videoScreen_do && _s.videoScreen_do.setVolume(e), _s.isCasting && _s.cc.setVolume(), _s.dispatchEvent(FWDUVPlayer.VOLUME_SET, {
                        volume: e
                    }))
                }, _s.showCategories = function () {
                    _s.isAPIReady_bl && (_s.setVideoPlayingStateOnWindowShow(), _s.categories_do && (_s.categories_do.show(_s.catId), _s.controller_do && _s.controller_do.setCategoriesButtonState("selected"), _s.pause()))
                }, _s.hideCategories = function () {
                    _s.isAPIReady_bl && _s.categories_do && (_s.categories_do.hide(), _s.controller_do && _s.controller_do.setCategoriesButtonState("unselected"))
                }, _s.showPlaylist = function () {
                    _s.isAPIReady_bl && _s.showPlaylistButtonAndPlaylist_bl && (_s.isPlaylistShowed_bl = !1, _s.controller_do && _s.controller_do.showHidePlaylistButton(), _s.playlist_do.hide(_s.animate_bl), "right" == _s.playlistPosition_str && _s.resizeHandler(!_s.isMbl), _s.sH = _s.vidStageHeight, _s.setStageContainerFinalHeightAndPosition(_s.animate_bl), FWDAnimation.to(_s, .8, {
                        tempStageWidth: _s.sW,
                        tempStageHeight: _s.sH,
                        tempVidStageWidth: _s.vidStageWidth,
                        tempVidStageHeight: _s.vidStageHeight,
                        ease: Expo.easeInOut,
                        onUpdate: _s.resizeFinal
                    }))
                }, _s.hidePlaylist = function (e) {
                    _s.isAPIReady_bl && _s.showPlaylistButtonAndPlaylist_bl && (_s.isPlaylistShowed_bl = !0, _s.controller_do && _s.controller_do.showShowPlaylistButton(), e ? _s.playlist_do.show(!1) : _s.playlist_do.show(_s.animate_bl), _s.resizeHandler(_s.animate_bl), _s.setStageContainerFinalHeightAndPosition(_s.animate_bl), FWDAnimation.to(_s, .8, {
                        tempStageWidth: _s.sW,
                        tempStageHeight: _s.sH,
                        tempVidStageWidth: _s.vidStageWidth,
                        tempVidStageHeight: _s.vidStageHeight,
                        ease: Expo.easeInOut,
                        onUpdate: _s.resizeFinal
                    }))
                }, _s.setPosterSource = function (e) {
                    var t;
                    _s.isAPIReady_bl && e && "none" != _s.videoType_str && (t = e.split(","), e = _s.isMbl && null != t[1] ? t[1] : t[0], _s.videoPoster_do && (_s.posterPath_str = e, -1 == _s.videoSourcePath_str.indexOf(".") && _s.videoType_str == FWDUVPlayer.YOUTUBE && _s.isMbl ? (_s.posterPath_str = "youtubemobile", _s.videoPoster_do.setPoster(_s.posterPath_str)) : (_s.videoPoster_do.setPoster(_s.posterPath_str), _s.prUVPosterSource_str != e && _s.dispatchEvent(FWDUVPlayer.UPDATE_POSTER_SOURCE)), _s.prUVPosterSource_str = e))
                }, _s.setThumbnailPreviewSource = function (e) {
                    if (_s.isAPIReady_bl && !FWDUVPUtils.isLocal && _s.controller_do) {
                        if (!_s.thumbnailsPreviewLoaded_bl) {
                            var t = document.createElement("script");
                            return t.src = _s.mainFolderPath_str + "java/FWDUVPThumbnailsPreview.js", document.head.appendChild(t), void(t.onload = function () {
                                _s.thumbnailsPreviewLoaded_bl = !0, _s.setThumbnailPreviewSource(e)
                            })
                        }
                        _s.hasThumbnailsPreview = !0, _s.controller_do.setupThumbnailsPreview(), _s.controller_do.thumbnailsPreview_do.load(e)
                    }
                }, _s.updateAds = function (e, t) {
                    if (_s._d.vastXML && !_s._d.isVastXMLParsed_bl) return _s.controller_do && (_s.controller_do.hideAdsLines(), _s.controller_do.resetsAdsLines()), void _s._d.setVastSource(_s._d.vastXML);
                    if (_s._d.playlist_ar[_s.id]) {
                        _s.curAddData = _s._d.playlist_ar[_s.id].ads_ar, _s.curPopupAdsData = _s._d.playlist_ar[_s.id].popupAds_ar;
                        var o = _s.curPopupAdsData && 0 < _s.curPopupAdsData.length;
                        if (_s.adsId != _s.id && (_s.popupAds_do && _s.popupAds_do.hideAllPopupButtons(!0), _s.controller_do && _s.controller_do.resetsAdsLines()), _s._d.playlist_ar[_s.id].vastURL && !_s.curAddData) return _s.adsId != _s.id && _s._d.setVastSource(_s._d.playlist_ar[_s.id].vastURL, _s._d.playlist_ar[_s.id].vastLinearStartTime), void(_s.adsId = _s.id);
                        if (_s.adsId = _s.id, _s.isAdd_bl || (_s.TrackingEvents = void 0, _s.Impression = void 0, _s.ClickTracking = void 0, _s.curAddData && (_s.callFirstQuartile = !0, _s.callMidpoint = !0, _s.callThirdQuartile = !0)), _s.isAdd_bl) _s.isAdd_bl ? _s.curSource = "FWDUVPDummy" + (new Date).getTime() : _s.curSource = _s._d.playlist_ar[_s.id].videoSource[_s._d.playlist_ar[_s.id].startAtVideo].source;
                        else if (_s.controller_do && _s.totalDuration && (_s._d.fixVmapTimes(_s.totalDuration, _s.curAddData, _s.curPopupAdsData, _s.id), _s.controller_do.setupAdsLines(_s.curAddData, _s.id, _s.catId), _s.totalDuration && _s.controller_do.positionAdsLines(_s.totalDuration), o && (_s.popupAds_do.resetPopups(_s.curPopupAdsData, _s.id), _s.popupAds_do.id = _s.id)), _s.curSource = _s._d.playlist_ar[_s.id].videoSource[_s._d.playlist_ar[_s.id].startAtVideo].source, _s.curAddData)
                            for (var s = 0; s < _s.curAddData.length; s++)
                                if (e >= _s.curAddData[s].timeStart && e <= _s.curAddData[s].timeStart + 1 && !_s.curAddData[s].played_bl && e != _s.prevDuration) return _s.addId = s, 0 == _s.curAddData[s].timeStart && (t = !1), _s.isAdd_bl = !0, _s.addSource_str = _s.curAddData[s].source, _s.curAddData[_s.addId].played_bl = !0, _s.adDuation = e, _s._d.adsThumbnailPath_str = _s.curAddData[s].thumbnailSource, _s._d.timeToHoldAds = _s.curAddData[s].timeToHoldAds, _s._d.adsPageToOpenURL_str = _s.curAddData[s].link, _s._d.adsPageToOpenTarget_str = _s.curAddData[s].target, _s.TrackingEvents = _s.curAddData[s].TrackingEvents, _s.Impression = _s.curAddData[s].Impression, _s.ClickTracking = _s.curAddData[s].ClickTracking, _s.scrubAfterAddDuration = _s.curAddData[s].timeStart, _s.curImageTotalTime = _s.curAddData[s].addDuration, _s.setSource(_s.addSource_str), _s.controller_do && _s.controller_do.line_ar && _s.controller_do.line_ar[s].setVisible(!1), void(_s.prvAdSource = _s.addSource_str);
                        _s.isLive = _s._d.playlist_ar[_s.id].isLive, (!_s.isAdd_bl && _s.prevSource != _s.curSource && -1 == _s.curSource.indexOf("FWDUVPDummy") || t) && (t && (_s.isAdd_bl = !1, _s.curSource = _s._d.playlist_ar[_s.id].videoSource[_s._d.playlist_ar[_s.id].startAtVideo].source), _s.setSource(_s.curSource, !1, _s._d.playlist_ar[_s.id].videoSource[_s._d.playlist_ar[_s.id].startAtVideo].is360)), _s.controller_do && _s.controller_do.positionAdsLines(_s.curDuration), _s.prevDuration = e, _s.prevSource = _s.curSource
                    }
                }, _s.updateImageScreen = function (e) {
                    if (_s.videoType_str == FWDUVPlayer.IFRAME) return _s.ifr_do || (_s.ifr_do = new FWDUVPDisplayObject("iframe"), _s.ifr_do.hasTransform3d_bl = !1, _s.ifr_do.hasTransform2d_bl = !1, _s.ifr_do.setBackfaceVisibility()), _s.videoHolder_do.addChildAt(_s.ifr_do, _s.videoHolder_do.getChildIndex(_s.dClk_do) + 1), _s.showClickScreen(), _s.ifr_do.screen.src = e, _s.ifr_do.setBkColor("#000000"), _s.positionAdsImage(), void _s.startToUpdateAdsButton();
                    _s.imgH_do || (_s.imgH_do = new FWDUVPDisplayObject("div"), _s.imgH_do.setX(0), _s.imgH_do.setY(0), _s.imgH_do.setBkColor("#000000")), _s.videoHolder_do.addChildAt(_s.imgH_do, _s.videoHolder_do.getChildIndex(_s.dClk_do) - 1), _s.showClickScreen(), _s.imgH_do.contains(_s.imageScreen_do) && _s.imgH_do.removeChild(_s.imageScreen_do), _s.imageScreen_do = null, _s.imageScreen_do = new FWDUVPDisplayObject("img"), _s.imageAdd_img = new Image, _s.imageAdd_img.src = e, _s.preloader_do && _s.preloader_do.show(!1), _s.lrgPlayBtn && _s.lrgPlayBtn.hide(), _s.imageAdd_img.onload = function () {
                        _s.imageScreen_do.setScreen(_s.imageAdd_img), _s.imageScreen_do.setAlpha(0), FWDAnimation.to(_s.imageScreen_do, 1, {
                            alpha: 1
                        }), _s.imageAddOriginalWidth = _s.imageAdd_img.width, _s.imageAddOriginalHeight = _s.imageAdd_img.height, _s.preloader_do && _s.preloader_do.hide(), _s.imgH_do.addChild(_s.imageScreen_do), _s.positionAdsImage(), _s.startToUpdateAdsButton()
                    }, _s.imageAdd_img.onerror = function () {
                        _s.showSourceError("Advertisment image with path " + e + " can't be found")
                    }
                }, _s.positionAdsImage = function () {
                    var e, t;
                    _s.videoType_str == FWDUVPlayer.IFRAME && _s.ifr_do && (_s.ifr_do.setWidth(_s.tempVidStageWidth), _s.ifr_do.setHeight(_s.tempVidStageHeight)), _s.imageScreen_do && _s.videoType_str == FWDUVPlayer.IMAGE && (e = _s.tempVidStageWidth / _s.imageAddOriginalWidth, t = _s.tempVidStageHeight / _s.imageAddOriginalHeight, totalScale = 0, t <= e ? totalScale = e : e <= t && (totalScale = t), finalW = parseInt(_s.imageAddOriginalWidth * totalScale), finalH = parseInt(_s.imageAddOriginalHeight * totalScale), finalX = parseInt((_s.tempVidStageWidth - finalW) / 2), finalY = parseInt((_s.tempVidStageHeight - finalH) / 2), _s.imageScreen_do.setWidth(finalW), _s.imageScreen_do.setHeight(finalH), _s.imageScreen_do.setX(finalX), _s.imageScreen_do.setY(finalY), _s.imgH_do.setWidth(_s.tempVidStageWidth), _s.imgH_do.setHeight(_s.tempVidStageHeight))
                }, _s.startToUpdateAdsButton = function () {
                    _s.curImageTime = 0, _s.updateAdsButton(), _s.stopUpdateImageInterval(), (_s._d.autoPlay_bl || _s.adDuation || _s.isThumbClick_bl) && (_s.startUpdateImageInterval(), _s.setPlayAndPauseButtonState())
                }, _s.stopUpdateImageInterval = function () {
                    _s.isImageAdsPlaying_bl = !1, clearInterval(_s.startUpdateAdsId_int), _s.setPlayAndPauseButtonState(), _s.isPlaying_bl = !1, _s.hider.stop()
                }, _s.startUpdateImageInterval = function () {
                    _s.isImageAdsPlaying_bl = !0, _s.startUpdateAdsId_int = setInterval(_s.updateAdsButton, 1e3), _s.setPlayAndPauseButtonState(), _s.lrgPlayBtn && _s.lrgPlayBtn.hide(), _s.isPlaying_bl = !0, _s.hider.start()
                }, _s.updateAdsButton = function () {
                    _s.videoScreenUpdateTimeHandler({
                        curTime: FWDUVPUtils.formatTime(_s.curImageTime),
                        totalTime: FWDUVPUtils.formatTime(_s.curImageTotalTime),
                        seconds: _s.curImageTime
                    }), _s.videoScreenUpdateHandler({
                        percent: _s.curImageTime / _s.curImageTotalTime
                    }), _s.curImageTime == _s.curImageTotalTime && _s.videoScreenPlayCompleteHandler(), _s.curImageTime += 1
                }, _s.setPlayAndPauseButtonState = function () {
                    _s.isImageAdsPlaying_bl ? _s.controller_do && _s.controller_do.showPauseButton() : _s.controller_do && _s.controller_do.showPlayButton()
                }, _s.showSourceError = function (e) {
                    _s.main_do.addChild(_s.info_do), _s.info_do.showText(e), _s.preloader_do && _s.preloader_do.hide(), _s.resizeHandler()
                }, _s.setSource = function (t, e, o) {
                    if ((t && (_s.source = t), _s._d.playlist_ar && _s._d.playlist_ar[_s.id] && !_s._d.playlist_ar[_s.id].playIfLoggedIn && _s.lg_do.hide(), _s.is360 = o, _s._d.playlist_ar && _s._d.playlist_ar[_s.id].thumbnailsPreview) && (-1 != location.protocol.indexOf("file:") && setTimeout(function () {
                            _s.showSourceError("This browser doesn't allow thumbnails preview videos local, please test online.")
                        }, 50), 2 < _s._d.playlist_ar[_s.id].thumbnailsPreview.length && -1 == location.protocol.indexOf("file:") && !_s.thumbnailsPreviewLoaded_bl)) return (i = document.createElement("script")).src = _s.mainFolderPath_str + "java/FWDUVPThumbnailsPreview.js", document.head.appendChild(i), i.onerror = function (e) {
                        _s.main_do.addChild(_s.info_do), _s.showSourceError('The thumbnails preview javascript file named <font color="#FF0000">FWDUVPThumbnailsPreview.js</font> is not found. Please make sure that the content folder contains the java folder that contains the <font color="#FF0000">FWDUVPThumbnailsPreview.js</font> file.')
                    }, void(i.onload = function () {
                        _s.thumbnailsPreviewLoaded_bl = !0, _s.setSource(_s.source, !1, _s.is360)
                    });
                    if (_s.hasThumbnailsPreview = !1, _s._d.playlist_ar[_s.id].thumbnailsPreview && 2 < _s._d.playlist_ar[_s.id].thumbnailsPreview.length && (_s.hasThumbnailsPreview = !0, _s.controller_do && _s.controller_do.setupThumbnailsPreview()), _s.isAPIReady_bl && -1 != _s.id && (_s.id < 0 ? _s.id = 0 : _s.id > _s.totaadsIdeos - 1 && (_s.id = _s.totaadsIdeos - 1), null != _s._d.playlist_ar[_s.id])) {
                        if (_s.stop(t), _s.isThumbClick_bl && !_s.aptRemoved && (_s._d.autoPlay_bl = !1, _s.removeAPT(), _s.setVolume(_s._d.volume, !0)), _s.controller_do && _s.controller_do.setIsLive(_s.isLive), _s.cuePointsSource_ar = _s._d.playlist_ar[_s.id].cuepoints_ar, _s.playlist_do && _s.playlist_do.curId != _s.id) {
                            if (_s.prvAdSource = 999999999 * Math.random(), !_s._d.playAdsOnlyOnce_bl)
                                for (var s = 0; s < _s._d.playlist_ar.length; s++) {
                                    if (_s._d.playlist_ar[s].ads_ar)
                                        for (var n = 0; n < _s._d.playlist_ar[s].ads_ar.length; n++) _s._d.playlist_ar[s].ads_ar[n].played_bl = !1;
                                    if (_s._d.playlist_ar[s].popupAds_ar)
                                        for (n = 0; n < _s._d.playlist_ar[s].popupAds_ar.length; n++) _s._d.playlist_ar[s].popupAds_ar[n].isClsd = !1
                                }
                            if (!_s._d.executeCuepointsOnlyOnce_bl && _s.cuePointsSource_ar)
                                for (s = 0; s < _s.cuePointsSource_ar.length; s++) _s.cuePointsSource_ar[s].played_bl = !1
                        } - 1 != t.toLowerCase().indexOf("vimeo.com") && -1 == t.toLowerCase().indexOf(".m3u8") && -1 == t.toLowerCase().indexOf(".mp4") ? _s.videoType_str = FWDUVPlayer.VIMEO : -1 != t.toLowerCase().indexOf("youtube.") ? _s.videoType_str = FWDUVPlayer.YOUTUBE : -1 != t.toLowerCase().indexOf(".mp3") ? (_s.videoType_str = FWDUVPlayer.MP3, _s.controller_do && _s.controller_do.setX(0)) : -1 != t.toLowerCase().indexOf(".jpg") || -1 != t.toLowerCase().indexOf(".jpeg") || -1 != t.toLowerCase().indexOf(".png") ? (_s.videoType_str = FWDUVPlayer.IMAGE, _s.controller_do && _s.controller_do.setX(0)) : t.match(/\.mpd|\.m3u8|\.mp4|\.mov|google.com|lh3.|myqnapcloud/gi) ? (_s.controller_do && _s.controller_do.setX(0), _s.isMbl || FWDUVPlayer.hasHTMLHLS || -1 == t.toLowerCase().indexOf(".m3u8") ? -1 != t.toLowerCase().indexOf(".mpd") ? _s.videoType_str = FWDUVPlayer.DASH : _s.videoType_str = FWDUVPlayer.VIDEO : _s.videoType_str = FWDUVPlayer.HLS_JS) : (_s.videoType_str = FWDUVPlayer.IFRAME, _s.controller_do && _s.controller_do.setX(0)), _s.videoSourcePath_str = t, _s.finalVideoPath_str = t, _s.posterPath_str = _s._d.playlist_ar[_s.id].posterSource;
                        var i, a = _s._d.playlist_ar[_s.id].imaURL;
                        if (_s.videoType_str == FWDUVPlayer.VIDEO && !_s.errorImaSDK || (a = !1), a) {
                            if (_s.isIMA = a, !_s._d.imaReady) return void _s._d.startToLoadIMA();
                            _s.IMA || (FWDUVPIMA.setPrototype(), _s.IMA = new FWDUVPIMA(_s))
                        }
                        if (_s.IMA || (_s.isIMA = !1), _s.cc && _s.cc.checkButtonState(), -1 != t.indexOf(".mpd") && !_s.isDASHLoaded_bl && !FWDUVPlayer.isDASHLoaded_bl) return -1 != location.protocol.indexOf("file:") ? void _s.showSourceError("This browser doesn't allow playing MPEG DASH videos local, please test online.") : ((i = document.createElement("script")).src = _s._d.dashPath_str, document.head.appendChild(i), i.onerror = function () {
                            _s.showSourceError("Error loading MPEG DASH library <font color='#FF0000'>" + _s._d.dashPath_str + "</font>.")
                        }, i.onload = function () {
                            _s.isDASHLoaded_bl = !0, FWDUVPlayer.isDASHLoaded_bl = !0, _s.setupDASH(), _s.setSource(t, !1, _s.is360)
                        }, _s.isMbl && (_s.isThumbClick_bl = !1), void(_s._d.autoPlay_bl || _s.isThumbClick_bl || (_s.setPosterSource(_s.posterPath_str), _s.videoPoster_do && _s.videoPoster_do.show(), _s.lrgPlayBtn && _s.lrgPlayBtn.show())));
                        if (!(_s.isMbl || FWDUVPlayer.hasHTMLHLS || -1 == t.indexOf(".m3u8") || _s.isHLSJsLoaded_bl || FWDUVPlayer.isHLSJsLoaded_bl)) return -1 != location.protocol.indexOf("file:") ? void _s.showSourceError("This browser doesn't allow playing HLS videos local, please test online.") : ((i = document.createElement("script")).src = _s._d.hlsPath_str, document.head.appendChild(i), i.onerror = function () {
                            _s.showSourceError("Error loading HLS library <font color='#FF0000'>" + _s._d.hlsPath_str + "</font>.")
                        }, i.onload = function () {
                            _s.isHLSJsLoaded_bl = !0, FWDUVPlayer.isHLSJsLoaded_bl = !0, _s.setupHLS(), _s.setSource(t, !1, _s.is360)
                        }, void(_s._d.autoPlay_bl || _s.isThumbClick_bl || (_s.setPosterSource(_s.posterPath_str), _s.videoPoster_do && _s.videoPoster_do.show(), _s.lrgPlayBtn && _s.lrgPlayBtn.show())));
                        if (-1 != t.indexOf("youtube.") && !_s.ytb_do) return setTimeout(function () {
                            _s.showPreloader_bl && (_s.main_do.addChild(_s.preloader_do), _s.preloader_do && _s.preloader_do.show(!1), _s.lrgPlayBtn && _s.lrgPlayBtn.hide(), -1 != location.protocol.indexOf("file:") && FWDUVPUtils.isIE && _s.main_do.addChild(_s.info_do))
                        }, 50), -1 != location.protocol.indexOf("file:") && FWDUVPUtils.isIE ? void _s.showSourceError("This browser doesn't allow the Youtube API to run local, please test it online or in another browser like Firefox or Chrome.") : void _s.setupYoutubeAPI();
                        if (-1 != t.indexOf("vimeo.") && !_s.vimeo_do && _s.videoType_str == FWDUVPlayer.VIMEO) return -1 != location.protocol.indexOf("file:") ? void _s.showSourceError("This browser doesn't allow playing Vimeo videos local, please test online.") : (_s.showPreloader_bl && (_s.main_do.addChild(_s.preloader_do), _s.preloader_do && _s.preloader_do.show(!1)), _s.lrgPlayBtn && _s.lrgPlayBtn.hide(), void _s.setupVimeoAPI());
                        if (_s.videoType_str != FWDUVPlayer.VIDEO && _s.videoType_str != FWDUVPlayer.HLS_JS && (_s.is360 = !1), _s.is360 && !_s.isThreeJsOrbigLoaded_bl) {
                            if (FWDUVPUtils.isLocal) return void _s.showSourceError("This browser doesn't allow playing 360 videos local, please test online.");
                            if (!FWDUVPUtils.hasWEBGL) return void _s.showSourceError("Playing 360 videos in _s browser is not possible because it doesn't support WEBGL.");
                            if (!_s.isThreeJsLoaded_bl && !FWDUVPlayer.hasThreeJsLoaded_bl) return (i = document.createElement("script")).src = _s._d.threeJsPath_str, i.onerror = function () {
                                _s.showSourceError("Error loading 360 degree library <font color='#FF0000'>" + _s._d.threeJsPath_str + "</font>.")
                            }, i.onload = function () {
                                _s.isThreeJsOrbigLoaded_bl = !0;
                                var e = document.createElement("script");
                                e.src = _s._d.threeJsControlsPath_str, e.onerror = function () {
                                    _s.showSourceError("Error loading three.js from <font color='#FF0000'>" + _s._d.threeJsControlsPath_str + "</font>.")
                                }, e.onload = function () {
                                    FWDUVPlayer.hasThreeJsLoaded_bl = !0, _s.isThreeJsOrbitLoaded_bl = !0, _s.isThreeJsOrbigLoaded_bl && _s.isThreeJsOrbitLoaded_bl && _s.setSource(t, !0, !0), clearTimeout(_s.load360ScriptsId_to), _s.preloader_do && _s.preloader_do.hide()
                                }, document.head.appendChild(e)
                            }, document.head.appendChild(i), void(_s.load360ScriptsId_to = setTimeout(function () {
                                _s.showPreloader_bl && _s.preloader_do && _s.preloader_do.show(!1)
                            }, 1e3))
                        }
                        if (_s.is360 ? _s.dClk_do.getStyle().cursor = "url(" + _s._d.handPath_str + "), default" : _s.dClk_do.getStyle().cursor = "auto", _s._d.playlist_ar[_s.id] && _s._d.playlist_ar[_s.id].scrubAtTimeAtFirstPlay && (_s.playAtTime_bl = !0), _s.controller_do && _s.controller_do.rewindButton_do && _s.controller_do.rewindButton_do.disable(), _s.popwSource = _s._d.playlist_ar[_s.id]._dAdvertisementOnPauseSource, _s._d.playlist_ar[_s.id] && _s._d.playlist_ar[_s.id]._dAdvertisementOnPauseSource ? _s.showPopW_bl = !0 : _s.showPopW_bl = !1, -1 != (t = t || _s._d.playlist_ar[_s.id].videoSource[_s._d.playlist_ar[_s.id].startAtVideo].source).indexOf("youtube.") && (t = t.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2]), _s.controller_do && _s.controller_do.enablePlayButton(), _s.prevVideoSource_str = t) {
                            if (_s.playlist_do && (_s.playlist_do.curId = _s.id, _s.playlist_do.checkThumbsState()), _s.controller_do && _s._d.playlist_ar[_s.id].subtitleSource && 1 < _s._d.playlist_ar[_s.id].subtitleSource.length && (_s.controller_do.updateSubtitleButtons(_s._d.playlist_ar[_s.id].subtitleSource, _s._d.playlist_ar[_s.id].startAtSubtitle), _s.ccSS = Number(_s._d.playlist_ar[_s.id].subtitleSource.length - _s._d.playlist_ar[_s.id].startAtSubtitle)), _s.subtitle_do.stopToLoadSubtitle(), _s.controller_do && _s.controller_do.updateHexColorForScrubber(_s.isAdd_bl), _s.annotations_ar = _s._d.playlist_ar[_s.id].annotations_ar, _s.annotations_do.setupAnnotations(_s.annotations_ar), _s.startAtPlaybackIndex = _s._d.startAtPlaybackIndex, "0.25" == _s._d.playlist_ar[_s.id]._dPlaybackRate ? _s.startAtPlaybackIndex = 5 : "0.5" == _s._d.playlist_ar[_s.id]._dPlaybackRate ? _s.startAtPlaybackIndex = 4 : "1" == _s._d.playlist_ar[_s.id]._dPlaybackRate ? _s.startAtPlaybackIndex = 3 : "1.25" == _s._d.playlist_ar[_s.id]._dPlaybackRate ? _s.startAtPlaybackIndex = 2 : "1.5" == _s._d.playlist_ar[_s.id]._dPlaybackRate ? _s.startAtPlaybackIndex = 1 : "2" == _s._d.playlist_ar[_s.id]._dPlaybackRate && (_s.startAtPlaybackIndex = 0), _s.prevVideoSourcePath_str = _s.videoSourcePath_str, _s.resizeHandler(!1, !0), _s.videoType_str == FWDUVPlayer.IMAGE || _s.videoType_str == FWDUVPlayer.IFRAME) return _s.updateImageScreen(_s.videoSourcePath_str), void(_s.videoPoster_do && _s.videoPoster_do.setX(-5e3));
                            if (_s.videoHolder_do.contains(_s.ifr_do) && _s.videoHolder_do.removeChild(_s.ifr_do), _s.videoHolder_do.contains(_s.imgH_do) && _s.videoHolder_do.removeChild(_s.imgH_do), _s.videoPoster_do && _s.videoPoster_do.setX(0), _s.getVideoSource() && _s.dispatchEvent(FWDUVPlayer.UPDATE_VIDEO_SOURCE), _s.videoType_str == FWDUVPlayer.VIMEO) return _s.ytb_do && _s.ytb_do.setX(-5e3), _s.videoScreen_do && _s.videoScreen_do.setX(-5e3), 0 != _s.vimeo_do.x && _s.vimeo_do.setX(0), _s.isAdd_bl ? _s.showClickScreen() : _s.hideClickScreen(), _s.audioScreen_do && _s.audioScreen_do.setX(-5e3), _s.audioScreen_do.setVisible(!1), _s.videoScreen_do && _s.videoScreen_do.setVisible(!1), _s.controller_do && _s.controller_do.removePlaybackRateButton(), _s.controller_do && (_s.controller_do.hideQualityButtons(!1), _s.controller_do.removeYtbQualityButton()), _s.videoPoster_do.hide(!0), _s.setPosterSource(_s.posterPath_str), _s.vimeo_do.setSource(t), _s.getVideoSource() && _s.dispatchEvent(FWDUVPlayer.UPDATE_VIDEO_SOURCE), void _s.resizeHandler();
                            if (_s.videoType_str == FWDUVPlayer.YOUTUBE) return _s.vimeo_do && _s.vimeo_do.setX(-5e3), _s.videoScreen_do.setX(-5e3), _s.videoScreen_do.setVisible(!1), _s.audioScreen_do && _s.audioScreen_do.setX(-5e3), _s.audioScreen_do.setVisible(!1), _s.ytb_do && _s.ytb_do.setX(0), _s.videoPoster_do.hide(!0), _s.setPosterSource(_s.posterPath_str), _s.isTempYoutubeAdd_bl = !1, _s.ytb_do.setSource(t), _s.controller_do && (_s.controller_do.addYtbQualityButton(), _s.controller_do && (_s.videoType_str == FWDUVPlayer.VIMEO || _s.videoType_str == FWDUVPlayer.IMAGE || _s.videoType_str == FWDUVPlayer.IFRAME ? _s.controller_do.removePlaybackRateButton() : _s.controller_do.addPlaybackRateButton(_s.startAtPlaybackIndex))), _s.isAdd_bl ? _s.setPlaybackRate(1) : _s.setPlaybackRate(_s._d.defaultPlaybackRate_ar[_s._d.startAtPlaybackIndex]), _s.controller_do && _s._d.showPlaybackRateButton_bl && _s.controller_do.updatePlaybackRateButtons(_s.startAtPlaybackIndex), _s.resizeHandler(!1, !0), void(_s.getVideoSource() && _s.dispatchEvent(FWDUVPlayer.UPDATE_VIDEO_SOURCE));
                            _s.finalVideoPath_str = t, _s.videoType_str == FWDUVPlayer.MP3 && (_s.vimeo_do && _s.vimeo_do.setX(-5e3), _s.ytb_do && _s.ytb_do.setX(-5e3), _s.audioScreen_do && _s.audioScreen_do.setX(-5e3), _s.audioScreen_do.setVisible(!1), _s.videoScreen_do.setVisible(!0), _s.controller_do && 1 < _s._d.playlist_ar[_s.id].videoSource.length ? (_s.controller_do.updatePreloaderBar(0), _s.controller_do && _s.controller_do.addYtbQualityButton(), _s.controller_do.updateQuality(_s._d.playlist_ar[_s.id].videoLabels_ar, _s._d.playlist_ar[_s.id].videoLabels_ar[_s._d.playlist_ar[_s.id].videoLabels_ar.length - 1 - _s._d.playlist_ar[_s.id].startAtVideo])) : _s.controller_do && _s.controller_do.removeYtbQualityButton(), _s.controller_do && (_s.videoType_str == FWDUVPlayer.VIMEO || _s.videoType_str == FWDUVPlayer.IMAGE || _s.videoType_str == FWDUVPlayer.IMAGE ? _s.controller_do.removePlaybackRateButton() : _s.controller_do.addPlaybackRateButton(_s.startAtPlaybackIndex)), _s._d.autoPlay_bl = !1, _s.removeAPT(), _s.audioScreen_do.setX(0), _s.audioScreen_do.setVisible(!0), !_s.isAdd_bl && window.FWDUVPCC && FWDUVPCC.enableButton(), _s.videoPoster_do.hide(!0), _s.setPosterSource(_s.posterPath_str), _s.audioScreen_do.setSource(t), _s.isAdd_bl && !_s.isMbl ? _s.play() : _s.isThumbClick_bl ? _s.displayType == FWDUVPlayer.LIGHTBOX && !_s.lightBox_do.isShowed_bl || _s.play() : (_s.videoPoster_do && _s.videoPoster_do.show(), _s.lrgPlayBtn && _s.lrgPlayBtn.show())), (FWDUVPlayer.hasHTML5Video && _s.videoType_str == FWDUVPlayer.VIDEO || _s.videoType_str == FWDUVPlayer.HLS_JS || _s.videoType_str == FWDUVPlayer.DASH) && (_s.vimeo_do && _s.vimeo_do.setX(-5e3), _s.ytb_do && _s.ytb_do.setX(-5e3), _s.audioScreen_do && _s.audioScreen_do.setX(-5e3), _s.audioScreen_do.setVisible(!1), _s.videoScreen_do.setVisible(!0), _s.controller_do && 1 < _s._d.playlist_ar[_s.id].videoSource.length ? (_s.controller_do.updatePreloaderBar(0), _s.controller_do && _s.controller_do.addYtbQualityButton(), _s.controller_do.updateQuality(_s._d.playlist_ar[_s.id].videoLabels_ar, _s._d.playlist_ar[_s.id].videoLabels_ar[_s._d.playlist_ar[_s.id].videoLabels_ar.length - 1 - _s._d.playlist_ar[_s.id].startAtVideo])) : _s.controller_do && _s.controller_do.removeYtbQualityButton(), _s.controller_do && _s.controller_do && (_s.videoType_str == FWDUVPlayer.VIMEO || _s.videoType_str == FWDUVPlayer.IMAGE || _s.videoType_str == FWDUVPlayer.IFRAME ? _s.controller_do.removePlaybackRateButton() : _s.controller_do.addPlaybackRateButton(_s.startAtPlaybackIndex)), _s.videoType_str == FWDUVPlayer.DASH ? (_s.setPosterSource(_s.posterPath_str), (_s._d.autoPlay_bl || _s.isThumbClick_bl || !_s.isMbl && _s.isAdd_bl && !_s.loadAddFirstTime_bl) && _s.videoPoster_do.hide(!0), _s.videoScreen_do.setSource(t), _s.videoScreen_do.initVideo(), _s.setupDASH(), _s.dashJS.initialize(_s.videoScreen_do.video_el, _s.videoSourcePath_str, !1), _s.dashJS.attachSource(_s.videoSourcePath_str), _s.dashJS.on(dashjs.MediaPlayer.events.MANIFEST_LOADED, function (e) {
                                _s.isDASHManifestReady_bl = !0, _s.isMbl || !_s.isAdd_bl || _s.loadAddFirstTime_bl || setTimeout(_s.play, 100), _s._d.autoPlay_bl || _s.isThumbClick_bl ? (_s.isThumbClick_bl && _s.videoType_str == FWDUVPlayer.DASH && setTimeout(_s.play, 100), _s._d.autoPlay_bl && (_s.controller_do && _s.controller_do.updateVolume(0), _s.displayType == FWDUVPlayer.LIGHTBOX && !_s.lightBox_do.isShowed_bl || _s.videoType_str != FWDUVPlayer.DASH || setTimeout(_s.play, 100))) : (_s.videoPoster_do.show(!0), _s.lrgPlayBtn.show()), _s.isAdd_bl ? _s.setPlaybackRate(1) : _s.setPlaybackRate(_s._d.defaultPlaybackRate_ar[_s.startAtPlaybackIndex]), _s.controller_do && _s._d.showPlaybackRateButton_bl && _s.controller_do.updatePlaybackRateButtons(_s.startAtPlaybackIndex)
                            })) : _s.videoType_str == FWDUVPlayer.HLS_JS ? (_s.setPosterSource(_s.posterPath_str), (_s._d.autoPlay_bl || _s.isThumbClick_bl || !_s.isMbl && _s.isAdd_bl && !_s.loadAddFirstTime_bl) && _s.videoPoster_do.hide(!0), _s.videoScreen_do.setSource(t), _s.videoScreen_do.initVideo(), _s.setupHLS(), _s.hlsJS.loadSource(_s.videoSourcePath_str), _s.hlsJS.attachMedia(_s.videoScreen_do.video_el), _s.hlsJS.on(Hls.Events.MANIFEST_PARSED, function (e) {
                                _s.videoType_str == FWDUVPlayer.HLS_JS && (_s.isHLSManifestReady_bl = !0, _s.isMbl || !_s.isAdd_bl || _s.loadAddFirstTime_bl || _s.play(), (_s._d.autoPlay_bl || _s.isThumbClick_bl) && (_s.isThumbClick_bl && _s.play(), _s._d.autoPlay_bl && (_s.controller_do && _s.controller_do.updateVolume(0), _s.displayType == FWDUVPlayer.LIGHTBOX && !_s.lightBox_do.isShowed_bl || _s.play())), _s.isAdd_bl ? _s.setPlaybackRate(1) : _s.setPlaybackRate(_s._d.defaultPlaybackRate_ar[_s.startAtPlaybackIndex]), _s.controller_do && _s._d.showPlaybackRateButton_bl && _s.controller_do.updatePlaybackRateButtons(_s.startAtPlaybackIndex))
                            })) : (!_s.isAdd_bl && window.FWDUVPCC && FWDUVPCC.enableButton(), _s.setPosterSource(_s.posterPath_str), _s.videoPoster_do.hide(!0), _s.videoScreen_do.setSource(t), _s.isMbl || !_s.isAdd_bl || _s.loadAddFirstTime_bl || _s.play(), _s._d.autoPlay_bl || _s.isThumbClick_bl ? (_s.isThumbClick_bl && _s.play(), _s._d.autoPlay_bl && (_s.controller_do && _s.controller_do.updateVolume(0), _s.displayType == FWDUVPlayer.LIGHTBOX && !_s.lightBox_do.isShowed_bl || _s.play()), _s.isCasting && _s.videoPoster_do.show()) : (_s.videoPoster_do.show(!0), _s.lrgPlayBtn.show()), _s.isAdd_bl ? _s.setPlaybackRate(1) : _s.setPlaybackRate(_s._d.defaultPlaybackRate_ar[_s.startAtPlaybackIndex]), _s.controller_do && _s._d.showPlaybackRateButton_bl && _s.controller_do.updatePlaybackRateButtons(_s.startAtPlaybackIndex)), _s.isIMA && _s.IMA.setSource(_s.isIMA)), _s.resizeHandler()
                        } else _s.showSourceError("Video source is not defined!")
                    }
                }, _s.setupDASH = function () {
                    _s.dashJS || (_s.isDASHLoaded_bl = !0, _s.dashJS = dashjs.MediaPlayer().create(), _s.dashJS.on(dashjs.MediaPlayer.events.ERROR, function (e) {
                        console.log(e), _s.main_do.addChild(_s.info_do), _s.info_do.showText(e.error.message)
                    }))
                }, _s.destroyDASH = function (e) {
                    if (_s.dashJS) {
                        try {
                            _s.dashJS.reset()
                        } catch (e) {}
                        _s.dashJS = null
                    }
                }, _s.setupHLS = function () {
                    !_s.hlsJS && window.Hls && (_s.isHLSJsLoaded_bl = !0, _s.hlsJS = new Hls, FWDUVPRegisterHLSError(_s))
                }, _s.destroyHLS = function () {
                    _s.hlsJS && (_s.hlsJS.destroy(), _s.hlsJS = null)
                }, _s.goFullScreen = function () {
                    var e;
                    _s.isAPIReady_bl && (_s.wasMin = _s.isMin, _s.isFullScreen_bl = !0, _s.removeMinOnScroll(), document.addEventListener && (document.addEventListener("fullscreenchange", _s.onFullScreenChange), document.addEventListener("mozfullscreenchange", _s.onFullScreenChange), document.addEventListener("webkitfullscreenchange", _s.onFullScreenChange), document.addEventListener("MSFullscreenChange", _s.onFullScreenChange)), FWDUVPUtils.isSafari && FWDUVPUtils.isWin || (document.documentElement.requestFullScreen ? _s.main_do.screen.requestFullScreen() : document.documentElement.mozRequestFullScreen ? _s.main_do.screen.mozRequestFullScreen() : document.documentElement.webkitRequestFullScreen ? _s.main_do.screen.webkitRequestFullScreen() : document.documentElement.msRequestFullscreen && _s.main_do.screen.msRequestFullscreen()), _s.callVastEvent("playerExpand"), _s.stopVisualization(), _s.disableClick(), _s.isEmbedded_bl || (_s.main_do.getStyle().position = "fixed", document.documentElement.style.overflow = "hidden", _s.main_do.getStyle().zIndex = 2147483641), _s.controller_do && (_s.controller_do.showNormalScreenButton(), _s.controller_do.setNormalStateToFullScreenButton()), _s.customContextMenu_do && _s.customContextMenu_do.updateFullScreenButton(1), e = FWDUVPUtils.getScrollOffsets(), _s.lastX = e.x, _s.lastY = e.y, window.scrollTo(0, 0), _s.isMbl && window.addEventListener("touchmove", _s.disableFullScreenOnMobileHandler), _s.dispatchEvent(FWDUVPlayer.GO_FULLSCREEN), _s.resizeHandler())
                }, _s.disableFullScreenOnMobileHandler = function (e) {
                    e.preventDefault && e.preventDefault()
                }, _s.goNormalScreen = function () {
                    _s.isAPIReady_bl && (document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(), _s.disableClick(), _s.addMainDoToTheOriginalParent(), _s.isFullScreen_bl = !1)
                }, _s.addMainDoToTheOriginalParent = function () {
                    _s.isFullScreen_bl && (document.removeEventListener && (document.removeEventListener("fullscreenchange", _s.onFullScreenChange), document.removeEventListener("mozfullscreenchange", _s.onFullScreenChange), document.removeEventListener("webkitfullscreenchange", _s.onFullScreenChange), document.removeEventListener("MSFullscreenChange", _s.onFullScreenChange)), _s.callVastEvent("playerCollapse"), _s.controller_do && _s.controller_do.setNormalStateToFullScreenButton(), _s.isEmbedded_bl || (_s.displayType == FWDUVPlayer.RESPONSIVE || _s.displayType == FWDUVPlayer.AFTER_PARENT || _s.displayType == FWDUVPlayer.LIGHTBOX || _s.displayType == FWDUVPlayer.STICKY ? (document.documentElement.style.overflow = "visible", _s.isMin ? (_s.main_do.getStyle().position = "fixed", _s.main_do.getStyle().zIndex = 9999999999999) : (_s.main_do.getStyle().position = "relative", _s.main_do.getStyle().zIndex = 0)) : (_s.main_do.getStyle().position = "absolute", _s.main_do.getStyle().zIndex = 9999999999998)), _s.displayType != FWDUVPlayer.FULL_SCREEN && _s.controller_do.enablePlaylistButton(), _s.customContextMenu_do && _s.customContextMenu_do.updateFullScreenButton(0), _s.controller_do.showFullScreenButton(), window.scrollTo(_s.lastX, _s.lastY), _s.showCursor(), _s.resizeHandler(), setTimeout(function () {
                        _s.addMinOnScroll(), _s.resizeHandler()
                    }, 500), window.scrollTo(_s.lastX, _s.lastY), FWDUVPUtils.isIE || setTimeout(function () {
                        window.scrollTo(_s.lastX, _s.lastY)
                    }, 150), _s.isMbl && window.removeEventListener("touchmove", _s.disableFullScreenOnMobileHandler), _s.dispatchEvent(FWDUVPlayer.GO_NORMALSCREEN))
                }, _s.onFullScreenChange = function (e) {
                    document.fullScreen || document.msFullscreenElement || document.mozFullScreen || document.webkitIsFullScreen || document.msieFullScreen || (_s.controller_do.showNormalScreenButton(), _s.addMainDoToTheOriginalParent(), _s.isFullScreen_bl = !1)
                }, _s.loadPlaylist = function (e) {
                    _s.isAPIReady_bl && _s._d.prevId != e && (_s._d.playlist_ar && _s._d.playlist_ar[_s.id] && (_s.videoNameGa = _s._d.playlist_ar[_s.id].gaStr, _s.videoCat = _s._d.cats_ar[_s.catId].playlistName), _s.catId = e, _s.id = 0, _s.catId < 0 ? _s.catId = 0 : _s.catId > _s._d.totalPlaylists - 1 && (_s.catId = _s._d.totalPlaylists - 1), _s.useDeepLinking_bl ? FWDUVPAddress.setValue("?playlistId=" + _s.catId + "&videoId=" + _s.id) : _s.loadInternalPlaylist())
                }, _s.playNext = function () {
                    _s.isAPIReady_bl && _s.isPlaylistLoaded_bl && (_s._d.playlist_ar && (_s.videoNameGa = _s._d.playlist_ar[_s.id].gaStr, _s.videoCat = _s._d.cats_ar[_s.catId].playlistName), _s.id++, _s.executePlayNextPrevOrShuffle())
                }, _s.playPrev = function () {
                    _s.isAPIReady_bl && _s.isPlaylistLoaded_bl && (_s._d.playlist_ar && (_s.videoNameGa = _s._d.playlist_ar[_s.id].gaStr, _s.videoCat = _s._d.cats_ar[_s.catId].playlistName), _s.id--, _s.executePlayNextPrevOrShuffle())
                }, _s.playShuffle = function () {
                    if (_s.isAPIReady_bl && _s.isPlaylistLoaded_bl) {
                        _s._d.playlist_ar && (_s.videoNameGa = _s._d.playlist_ar[_s.id].gaStr, _s.videoCat = _s._d.cats_ar[_s.catId].playlistName);
                        for (var e = parseInt(Math.random() * _s.totaadsIdeos); e == _s.id;) e = parseInt(Math.random() * _s.totaadsIdeos);
                        _s.id = e, _s.executePlayNextPrevOrShuffle()
                    }
                }, _s.executePlayNextPrevOrShuffle = function () {
                    _s._d.isVastXMLParsed_bl = !1, _s.totalDuration = 0, _s.id < 0 ? _s.id = _s.totaadsIdeos - 1 : _s.id > _s.totaadsIdeos - 1 && (_s.id = 0), _s.useDeepLinking_bl ? FWDUVPAddress.setValue("?playlistId=" + _s.catId + "&videoId=" + _s.id) : (_s.isThumbClick_bl = !0, _s.updateAds(0, !0))
                }, _s.playVideo = function (e) {
                    _s.isAPIReady_bl && _s.isPlaylistLoaded_bl && (_s._d.playlist_ar && (_s.videoNameGa = _s._d.playlist_ar[_s.id].gaStr, _s.videoCat = _s._d.cats_ar[_s.catId].playlistName), _s.id = e, _s.id < 0 ? _s.id = _s.totaadsIdeos - 1 : _s.id > _s.totaadsIdeos - 1 && (_s.id = 0), _s.useDeepLinking_bl ? FWDUVPAddress.setValue("?playlistId=" + _s.catId + "&videoId=" + _s.id) : (_s.updateAds(0, !0), _s.isMbl && _s.videoType_str == FWDUVPlayer.VIDEO && _s.play(), _s.isMbl || _s.play()))
                }, _s.setVideoSource = function (e, t, o) {
                    _s.isAdd_bl = !1;
                    _s.isLive = o, _s.setSource(e, !1, t)
                }, _s.downloadVideo = function (e) {
                    var t;
                    null == e && (e = _s.id);
                    var o = _s._d.playlist_ar[e].videoSource[_s._d.playlist_ar[_s.id].startAtVideo].source; - 1 != String(o.indexOf("encrypt:")) && (o = atob(o.substr(8))), t = -1 != o.indexOf("/") ? o.substr(o.lastIndexOf("/") + 1) : o;
                    var s = "videoName:" + _s._d.playlist_ar[_s.id].gaStr;
                    window.ga && ga("send", {
                        hitType: "event",
                        eventCategory: _s._d.cats_ar[_s.catId].playlistName,
                        eventAction: "downloaded",
                        eventLabel: s,
                        nonInteraction: !0
                    }), _s._d.downloadVideo(o, t)
                }, _s.share = function () {
                    _s.isAPIReady_bl && _s.controllerShareHandler()
                }, _s.getVideoSource = function () {
                    if (_s.isAPIReady_bl) return _s.finalVideoPath_str
                }, _s.getPosterSource = function () {
                    if (_s.isAPIReady_bl) return _s.posterPath_str
                }, _s.getPlaylistId = function () {
                    return _s.catId
                }, _s.getVideoId = function () {
                    return _s.id
                }, _s.getCurrentTime = function (e) {
                    var t;
                    return "milliseconds" == (e = e || "text") ? (t = _s.curTimeInmilliseconds ? _s.curTimeInmilliseconds : 0, _s.isCasting && (t = _s.cc.getCurrentTime())) : "seconds" == e ? (t = _s.curTimeInSecond ? _s.curTimeInSecond : 0, _s.isCasting && (t = _s.cc.getCurrentTime())) : (t = _s.curTime ? _s.curTime : "00:00", _s.isCasting && (t = FWDUVPUtils.formatTime(_s.cc.getCurrentTime()))), t
                }, _s.getTotalTime = function (e) {
                    var t;
                    return "milliseconds" == (e = e || "text") ? (t = _s.totalTimeInMilliseconds ? _s.totalTimeInMilliseconds : 0, _s.isCasting && (t = _s.cc.getCurrentTime())) : "seconds" == e ? (t = Math.round(_s.totalTimeInSeconds), _s.isCasting && (t = _s.cc.getDuration())) : (t = _s.totalTime ? _s.totalTime : "00:00", _s.isCasting && (t = FWDUVPUtils.formatTime(_s.cc.getDuration()))), t
                }, _s.setPlaybackRate = function (e) {
                    _s.isAPIReady_bl && (_s.videoType_str == FWDUVPlayer.VIDEO && _s.videoScreen_do ? _s.videoScreen_do.setPlaybackRate(e) : _s.videoType_str == FWDUVPlayer.YOUTUBE ? _s.ytb_do.setPlaybackRate(e) : _s.videoType_str == FWDUVPlayer.MP3 && _s.audioScreen_do.setPlaybackRate(e))
                }, _s.showLightbox = function () {
                    _s.lightBox_do && _s.lightBox_do.show()
                }, _s.fillEntireVideoScreen = function (e) {
                    _s.fillEntireVideoScreen_bl = e, _s.resizeHandler()
                }, _s.hideCursor = function () {
                    document.documentElement.style.cursor = "none", document.getElementsByTagName("body")[0].style.cursor = "none", _s.isAdd_bl || (_s.dClk_do.getStyle().cursor = "none")
                }, _s.showCursor = function () {
                    document.documentElement.style.cursor = "auto", document.getElementsByTagName("body")[0].style.cursor = "auto", _s.isAdd_bl ? _s.dClk_do.setButtonMode(!0) : _s.is360 ? _s.dClk_do.getStyle().cursor = "url(" + _s._d.handPath_str + "), default" : _s.dClk_do.getStyle().cursor = "auto"
                }, _s.showPlayer = function () {
                    _s.isAPIReady_bl && (_s.isShowed_bl = !0, _s.opener_do.showCloseButton(), _s.setStageContainerFinalHeightAndPosition(_s.animate_bl), _s.isMin && (_s.isMinShowed = !0, _s.positionOnMin(!0)))
                }, _s.hidePlayer = function () {
                    _s.isAPIReady_bl && (_s.isShowed_bl = !1, _s.opener_do.showOpenButton(), _s.setStageContainerFinalHeightAndPosition(_s.animate_bl), _s.isMin && (_s.isMinShowed = !1, _s.positionOnMin(!0)))
                }, _s.getStartTimeStamp = function (e) {
                    var t = window.location.href;
                    if (-1 != (t = t.substr(t.indexOf(e + "=") + 2)).indexOf("&") && (t = t.substr(0, t.indexOf("&"))), -1 != t.indexOf("s&") && (t = t.substr(0, t.indexOf("s&") + 1)), !(10 < t.length)) {
                        var o = /\d+h/g,
                            s = t.match(o);
                        try {
                            s = t.match(o)[0]
                        } catch (e) {}
                        s && (1 == (s = s.substr(0, s.length - 1)).length && parseInt(s) < 10 && (s = "0" + s), 59 < parseInt(s) && (s = 59)), s = s || "00";
                        var o = /h\d+m/g,
                            n = t.match(o);
                        try {
                            n = t.match(o)[0].substr(1)
                        } catch (e) {}
                        n && (1 == (n = n.substr(0, n.length - 1)).length && parseInt(n) < 10 && (n = "0" + n), 59 < parseInt(n) && (n = 59)), n = n || "00";
                        var o = /\d+s/g,
                            i = t.match(o);
                        try {
                            i = t.match(o)[0]
                        } catch (e) {}
                        return i && (1 == (i = i.substr(0, i.length - 1)).length && parseInt(i) < 10 && (i = "0" + i), 59 < parseInt(i) && (i = 59)), s + ":" + n + ":" + (i = i || "00")
                    }
                }, _s.setVastSource = function (e) {
                    _s.isAPIReady_bl && (_s.isAdd_bl = !1, _s.adDone_bl = !1, _s.stop(), _s.prevDuration = -1, _s._d.vastXML = e, _s._d.isVastXMLParsed_bl = !1, _s._d.vast.id = -1, _s.updateAds())
                }, _s.addListener = function (e, t) {
                    if (null == e) throw Error("type is required.");
                    if ("object" == typeof e) throw Error("type must be of type String.");
                    if ("function" != typeof t) throw Error("listener must be of type Function.");
                    var o = {};
                    o.type = e, o.listener = t, (o.target = _s).listeners.events_ar.push(o)
                }, _s.dispatchEvent = function (e, t) {
                    if (null != _s.listeners) {
                        if (null == e) throw Error("type is required.");
                        if ("object" == typeof e) throw Error("type must be of type String.");
                        for (var o = 0, s = _s.listeners.events_ar.length; o < s; o++)
                            if (_s.listeners.events_ar[o].target === _s && _s.listeners.events_ar[o].type === e) {
                                if (t)
                                    for (var n in t) _s.listeners.events_ar[o][n] = t[n];
                                _s.listeners.events_ar[o].listener.call(_s, _s.listeners.events_ar[o])
                            }
                    }
                }, _s.removeListener = function (e, t) {
                    if (null == e) throw Error("type is required.");
                    if ("object" == typeof e) throw Error("type must be of type String.");
                    if ("function" != typeof t) throw Error("listener must be of type Function." + e);
                    for (var o = 0, s = _s.listeners.events_ar.length; o < s; o++)
                        if (_s.listeners.events_ar[o].target === _s && _s.listeners.events_ar[o].type === e && _s.listeners.events_ar[o].listener === t) {
                            _s.listeners.events_ar.splice(o, 1);
                            break
                        }
                }, _s.callVastEvent = function (e) {
                    if (_s.TrackingEvents) {
                        for (var t, o = 0; o < _s.TrackingEvents.length; o++) e == _s.TrackingEvents[o].event && (t = _s.TrackingEvents[o].URI);
                        t && _s.executeVastEvent(t)
                    }
                }, _s.executeVastEvent = function (e) {
                    e && ((new Image).src = e)
                }, _s.cleanMainEvents = function () {
                    window.removeEventListener ? window.removeEventListener("resize", _s.onResizeHandler) : window.detachEvent && window.detachEvent("onresize", _s.onResizeHandler), clearTimeout(_s.resizeHandlerId_to), clearTimeout(_s.resizeHandler2Id_to), clearTimeout(_s.hidePreloaderId_to), clearTimeout(_s.orientationChangeId_to)
                };
                var args = FWDUVPUtils.getUrlArgs(window.location.search),
                    embedTest = args.RVPInstanceName,
                    instanceName = args.RVPInstanceName,
                    ws, dumy_do;
                embedTest && (_s.isEmbedded_bl = props.instanceName == instanceName), _s.isEmbedded_bl && (ws = FWDUVPUtils.getViewportSize(), _s.embeddedPlaylistId = parseInt(args.RVPPlaylistId), _s.embeddedVideoId = parseInt(args.RVPVideoId), dumy_do = new FWDUVPDisplayObject("div"), dumy_do.setBkColor(props.backgroundColor), dumy_do.setWidth(ws.w), dumy_do.setHeight(ws.h), document.documentElement.style.overflow = "hidden", document.getElementsByTagName("body")[0].style.overflow = "hidden", FWDUVPUtils.isIEAndLessThen9 ? document.getElementsByTagName("body")[0].appendChild(dumy_do.screen) : document.documentElement.appendChild(dumy_do.screen)), _s.init()
            },
            E2, F2;
        FWDUVPlayer.setPrototype = function () {
            FWDUVPlayer.prototype = new FWDUVPEventDispatcher
        }, FWDUVPlayer.stopAllVideos = function (e) {
            for (var t, o = FWDUVPlayer.instaces_ar.length, s = 0; s < o; s++)(t = FWDUVPlayer.instaces_ar[s]) != e && t.stop()
        }, FWDUVPlayer.pauseAllVideos = function (e) {
            for (var t, o = FWDUVPlayer.instaces_ar.length, s = 0; s < o; s++)(t = FWDUVPlayer.instaces_ar[s]) != e && t.pause()
        }, FWDUVPlayer.hasHTML5Video = !0, FWDUVPlayer.hasCanvas = Boolean(document.createElement("canvas")), FWDUVPlayer.instaces_ar = [], FWDUVPlayer.hasHTMLHLS = (E2 = document.createElement("video"), F2 = !1, E2.canPlayType && (F2 = Boolean("probably" === E2.canPlayType("application/vnd.apple.mpegurl") || "maybe" === E2.canPlayType("application/vnd.apple.mpegurl"))), F2), FWDUVPlayer.areMainInstancesInitialized_bl = !1, FWDUVPlayer.curInstance = null, FWDUVPlayer.keyboardCurInstance = null, FWDUVPlayer.isYoutubeAPICreated_bl = !1, FWDUVPlayer.HLS_JS = "HLS", FWDUVPlayer.DASH = "DASH", FWDUVPlayer.PAUSE_ALL_VIDEOS = "pause", FWDUVPlayer.STOP_ALL_VIDEOS = "stop", FWDUVPlayer.DO_NOTHING = "none", FWDUVPlayer.YOUTUBE = "youtube", FWDUVPlayer.VIMEO = "vimeo", FWDUVPlayer.VIDEO = "video", FWDUVPlayer.IFRAME = "iframe", FWDUVPlayer.atLeastOnePlayerHasDeeplinking_bl = !1, FWDUVPlayer.MP3 = "mp3", FWDUVPlayer.CENTER = "center", FWDUVPlayer.RIGHT = "right", FWDUVPlayer.LEFT = "left", FWDUVPlayer.POSITION_BOTTOM = "bottom", FWDUVPlayer.POSITION_TOP = "top", FWDUVPlayer.HIDE_LIGHTBOX_COMPLETE = "lightboxHideComplete", FWDUVPlayer.START_TO_LOAD_PLAYLIST = "startToLoadPlaylist", FWDUVPlayer.LOAD_PLAYLIST_COMPLETE = "loadPlaylistComplete", FWDUVPlayer.READY = "ready", FWDUVPlayer.STOP = "stop", FWDUVPlayer.PLAY = "play", FWDUVPlayer.PAUSE = "pause", FWDUVPlayer.UPDATE = "update", FWDUVPlayer.UPDATE_TIME = "updateTime", FWDUVPlayer.UPDATE_VIDEO_SOURCE = "updateVideoSource", FWDUVPlayer.UPDATE_POSTER_SOURCE = "udpatePosterSource", FWDUVPlayer.ERROR = "error", FWDUVPlayer.PLAY_COMPLETE = "playComplete", FWDUVPlayer.VOLUME_SET = "volumeSet", FWDUVPlayer.GO_FULLSCREEN = "goFullScreen", FWDUVPlayer.GO_NORMALSCREEN = "goNormalScreen", FWDUVPlayer.IMAGE = "image", FWDUVPlayer.HLS_JS = "hls_flash", FWDUVPlayer.SAFE_TO_SCRUB = "safeToScrub", FWDUVPlayer.LIGHTBOX = "lightbox", FWDUVPlayer.STICKY = "sticky", FWDUVPlayer.RESPONSIVE = "responsive", FWDUVPlayer.FULL_SCREEN = "fullscreen", FWDUVPlayer.AFTER_PARENT = "afterparent", window.FWDUVPlayer = FWDUVPlayer
    }(window),
    function (e) {
        var r = function (o, e, t, s, n, i) {
            var a = this;
            r.prototype;
            a.mainLightBox_do = null, a.lightBoxBackground_sdo = null, a.lightBoxGridHolder_do = null, a.clsBtn = null, a.mainBackgroundColor_str = e, a.holderBackgroundColor_str = t, a.lightBoxBackgroundOpacity = s, a.lightBoxWidth = n, a.lightBoxHeight = i, a.setupButtonWithDelayId_to, a.isMbl = FWDUVPUtils.isMobile, a.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, a.closeButtonIsTweening_bl = !0, a.init = function () {
                a.getStyle().zIndex = 9999999, a.setupMainContainers()
            }, a.setupMainContainers = function () {
                a.isMbl && a.hasPointerEvent_bl && (a.getStyle().msTouchAction = "none"), a.lightBoxBackground_sdo = new FWDUVPDisplayObject("div"), a.lightBoxBackground_sdo.setResizableSizeAfterParent(), a.lightBoxBackground_sdo.setBkColor(a.mainBackgroundColor_str), a.lightBoxBackground_sdo.screen.addEventListener("click", a.closeButtonOnStartHandler), a.addChild(a.lightBoxBackground_sdo), a.mainLightBox_do = new FWDUVPDisplayObject("div"), a.mainLightBox_do.setBkColor(a.holderBackgroundColor_str), a.mainLightBox_do.setWidth(1), a.mainLightBox_do.setHeight(1), a.addChild(a.mainLightBox_do), document.documentElement.appendChild(a.screen), a.setX(-1e4), a.setY(-1e4), a.setWidth(0), a.setHeight(0)
            }, a.show = function () {
                var e, t;
                a.isShowed_bl || (a.clsBtn ? (a.hideCloseButton(!1), a.showCloseButton(!0), a.clsBtn.setX(-200)) : a.loadClsoeButtonImage(), e = FWDUVPUtils.getViewportSize(), t = FWDUVPUtils.getScrollOffsets(), a.setWidth(e.w), a.setHeight(e.h), a.setX(t.x), a.setY(t.y), a.lightBoxBackground_sdo.setAlpha(0), FWDAnimation.to(a.lightBoxBackground_sdo, .8, {
                    alpha: a.lightBoxBackgroundOpacity
                }), a.setX(t.x), a.setY(t.y), a.mainLightBox_do.setX(parseInt(e.w / 2)), a.mainLightBox_do.setY(parseInt(e.h / 2)), a.lightBoxWidth > e.w ? (a.finalLightBoxWidth = e.w, a.finalLightBoxHeight = parseInt(a.lightBoxHeight * (e.w / a.lightBoxWidth))) : (a.finalLightBoxWidth = a.lightBoxWidth, a.finalLightBoxHeight = a.lightBoxHeight), FWDAnimation.to(a.mainLightBox_do, .8, {
                    w: a.finalLightBoxWidth,
                    h: a.finalLightBoxHeight,
                    x: parseInt((e.w - a.finalLightBoxWidth) / 2),
                    y: parseInt((e.h - a.finalLightBoxHeight) / 2),
                    delay: .4,
                    onComplete: a.showComplete,
                    ease: Expo.easeInOut
                }), o.main_do && o.main_do.setX(-5e3), a.dispatchEvent(r.SHOW))
            }, a.showComplete = function () {
                a.isShowed_bl = !0, a.clsBtn.addListener(FWDUVPSimpleButton.MOUSE_UP, a.closeButtonOnStartHandler), a.addKeyboardSupport(), o.startResizeHandler(), console.log("complete " + a.wasAutoPlay), o.isPlaylistLoaded_bl && (o._d.autoPlay_bl || a.wasAutoPlay) && (a.setWAP || (a.wasAutoPlay = o._d.autoPlay_bl), a.setWAP = !0, o.play())
            }, a.addKeyboardSupport = function () {
                document.addEventListener("keydown", a.onKeyDownHandler)
            }, a.onKeyDownHandler = function (e) {
                27 == e.keyCode && a.closeButtonOnStartHandler()
            }, a.loadClsoeButtonImage = function () {
                a.closeN_img = new Image, a.closeN_img.onload = a.setupCloseButton, a.closeN_img.src = o.mainFolderPath_str + o.sknPth + "embed-close-button.png", a.closeSPath_str = o.mainFolderPath_str + o.sknPth + "embed-close-button-over.png"
            }, a.setupCloseButton = function (e) {
                var t = FWDUVPUtils.getViewportSize();
                FWDUVPSimpleButton.setPrototype(), a.clsBtn = new FWDUVPSimpleButton(a.closeN_img, a.closeSPath_str, void 0, !0), a.hideCloseButton(!1), a.showCloseButton(!0), a.clsBtn.setX(t.w - a.clsBtn.w - 15), a.clsBtn.setY(15), a.addChild(a.clsBtn)
            }, a.showCloseButtonComplete = function () {
                a.closeButtonIsTweening_bl = !1
            }, a.hideCloseButton = function (e) {
                FWDAnimation.killTweensOf(a.clsBtn), e ? FWDAnimation.to(a.clsBtn, .9, {
                    alpha: 0
                }) : a.clsBtn.setAlpha(0)
            }, a.showCloseButton = function (e) {
                FWDAnimation.killTweensOf(a.clsBtn), e ? FWDAnimation.to(a.clsBtn, .9, {
                    alpha: 1,
                    delay: .8
                }) : a.clsBtn.setAlpha(1)
            }, a.mouseDummyHandler = function (e) {
                if (!e.preventDefault) return !1;
                e.preventDefault()
            }, a.closeButtonOnStartHandler = function (e) {
                var t;
                a.isShowed_bl && (a.isShowed_bl = !1, t = FWDUVPUtils.getViewportSize(), a.clsBtn.removeListener(FWDUVPSimpleButton.MOUSE_UP, a.closeButtonOnStartHandler), FWDAnimation.to(a.clsBtn, .9, {
                    alpha: 0
                }), FWDAnimation.to(a.mainLightBox_do, .8, {
                    w: 0,
                    h: 0,
                    x: parseInt(t.w / 2),
                    y: parseInt(t.h / 2),
                    delay: .4,
                    ease: Expo.easeInOut
                }), FWDAnimation.to(a.lightBoxBackground_sdo, .8, {
                    alpha: 0,
                    delay: .8
                }), FWDAnimation.to(o.main_do, .8, {
                    x: -o.main_do.w / 2,
                    y: -o.main_do.h / 2,
                    ease: Expo.easeInOut,
                    delay: .4
                }), a.lighboxAnimDoneId_to = setTimeout(a.lighboxHideAnimationDone, 1600), a.dispatchEvent(r.CLOSE))
            }, a.lighboxHideAnimationDone = function () {
                a.setX(-1e4), a.setY(-1e4), a.setWidth(0), a.setHeight(0), a.dispatchEvent(r.HIDE_COMPLETE)
            }, a.init()
        };
        r.setPrototype = function () {
            r.prototype = new FWDUVPDisplayObject("div")
        }, r.CLOSE = "ligtBoxClose", r.SHOW = "show", r.HIDE_COMPLETE = "hideComplete", r.prototype = null, e.FWDUVPLightBox = r
    }(window),
    function (i) {
        var a = function (e, t, o, s) {
            var n = this;
            a.prototype;
            n.img_img = null, n.logoImage_do = null, n.position_str = o, n.source_str = t, n.logoLink_str = e._d.logoLink_str, n.margins = s, n.isShowed_bl = !0, n.allowToShow_bl = !0, n.init = function () {
                "none" == n.logoLink_str ? n.getStyle().pointerEvents = "none" : (n.setButtonMode(!0), n.screen.onclick = function () {
                    i.open(n.logoLink_str, "_blank")
                }), n.logoImage_do = new FWDUVPDisplayObject("img"), n.img_img = new Image, n.img_img.onerror = null, n.img_img.onload = n.loadDone, n.img_img.src = n.source_str + "?" + (new Date).getTime(), n.hide()
            }, n.loadDone = function () {
                n.setWidth(n.img_img.width), n.setHeight(n.img_img.height), n.logoImage_do.setScreen(n.img_img), n.addChild(n.logoImage_do), n.logoImage_do.setWidth(n.img_img.width), n.logoImage_do.setHeight(n.img_img.height), n.positionAndResize()
            }, n.positionAndResize = function () {
                e.tempVidStageWidth && ("topleft" == n.position_str ? (n.finalX = n.margins, n.finalY = n.margins) : "topright" == n.position_str ? (n.finalX = e.tempVidStageWidth - n.w - n.margins, n.finalY = n.margins) : "bottomright" == n.position_str ? (n.finalX = e.tempVidStageWidth - n.w - n.margins, n.finalY = e.tempVidStageHeight - n.h - n.margins) : "bottomleft" == n.position_str && (n.finalX = n.margins, n.finalY = e.tempVidStageHeight - n.h - n.margins), n.setX(n.finalX), n.setY(n.finalY))
            }, n.show = function (e) {
                n.isShowed_bl || (n.isShowed_bl = !0, n.setVisible(!0), FWDAnimation.killTweensOf(n), e ? FWDAnimation.to(n, .8, {
                    alpha: 1,
                    ease: Expo.easeInOut
                }) : n.setAlpha(1))
            }, n.hide = function (e, t) {
                (n.isShowed_bl || t) && (n.isShowed_bl = !1, FWDAnimation.killTweensOf(n), e ? FWDAnimation.to(n, .8, {
                    alpha: 0,
                    ease: Expo.easeInOut,
                    onComplete: function () {
                        n.setVisible(!1)
                    }
                }) : (n.setAlpha(0), n.setVisible(!1)))
            }, n.init()
        };
        a.setPrototype = function () {
            a.prototype = new FWDUVPDisplayObject("div")
        }, a.prototype = null, i.FWDUVPLogo = a
    }(window),
    function () {
        var n = function (e, t, o) {
            var s = this;
            s.animation_img = e.openerAnimation_img, t == FWDUVPlayer.POSITION_TOP ? (s.openN_img = e.openTopN_img, s.openSPath_str = e.openTopSPath_str) : (s.openN_img = e.openBottomN_img, s.openSPath_str = e.openBottomSPath_str), s.openerPauseN_img = e.openerPauseN_img, s.openerPlayN_img = e.openerPlayN_img, s.closeN_img = e.closeN_img, s.useHEX = e.useHEX, s.nBC = e.nBC, s.sBC = e.sBC, s.openerPauseS_str = e.openerPauseS_str, s.openerPlaySPath_str = e.openerPlayS_str, s.closeSPath_str = e.closeSPath_str, s.animationPath_img = e.animationPath_img;
            try {
                s.totalWidth = s.openN_img.width, s.totalHeight = s.openN_img.height
            } catch (e) {}
            s.mainHld = null, s.dumy_do = null, s.openN_do = null, s.openS_do = null, s.closeN_do = null, s.closeS_do = null, s.animation_do = null, s.playPauseButton_do = null, s.position_str = t, s.alignment_str = e.openerAlignment_str, s.openerEqulizerOffsetLeft = e.openerEqulizerOffsetLeft, s.openerEqulizerOffsetTop = e.openerEqulizerOffsetTop, s.showFirstTime_bl = !0, s.playerIsShowed_bl = o, s.showOpenerPlayPauseButton_bl = e.showOpenerPlayPauseButton_bl, s.isMbl = FWDUVPUtils.isMobile, s.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, s.init = function () {
                -1 != e.sknPth.indexOf("hex_white") ? s.sBC = "#FFFFFF" : s.sBC = e.sBC, s.hasTransform3d_bl = !1, s.hasTransform2d_bl = !1, s.setBackfaceVisibility(), s.getStyle().msTouchAction = "none", s.getStyle().webkitTapHighlightColor = "rgba(0, 0, 0, 0)", s.setupStuff(), s.showOpenerPlayPauseButton_bl && s.setupPlayPauseButton(), s.playerIsShowed_bl && s.showCloseButton(), s.showOpenerPlayPauseButton_bl ? s.setWidth(s.totalWidth + s.openerPauseN_img.width + 1) : s.setWidth(s.totalWidth), s.setHeight(s.totalHeight)
            }, s.setupStuff = function (e) {
                s.mainHld = new FWDUVPDisplayObject("div"), s.mainHld.hasTransform3d_bl = !1, s.mainHld.hasTransform2d_bl = !1, s.mainHld.setBackfaceVisibility(), s.showOpenerPlayPauseButton_bl ? s.mainHld.setWidth(s.totalWidth + s.openerPauseN_img.width + 1) : s.mainHld.setWidth(s.totalWidth), s.mainHld.setHeight(s.totalHeight), s.useHEX ? (s.openN_do = new FWDUVPDisplayObject("div"), s.openN_canvas = FWDUVPUtils.getCanvasWithModifiedColor(s.openN_img, s.nBC).canvas, s.openN_do.screen.appendChild(s.openN_canvas)) : (s.openN_do = new FWDUVPDisplayObject("img"), s.openN_do.setScreen(s.openN_img)), s.openN_do.setWidth(s.openN_img.width), s.openN_do.setHeight(s.openN_img.height), s.openS_img = new Image, s.openS_img.src = s.openSPath_str, s.useHEX ? (s.openS_do = new FWDUVPDisplayObject("div"), s.openS_img.onload = function () {
                    s.openS_canvas = FWDUVPUtils.getCanvasWithModifiedColor(s.openS_img, s.sBC).canvas, s.openS_do.setWidth(s.openS_img.width), s.openS_do.setHeight(s.openS_img.height), s.openS_do.screen.appendChild(s.openS_canvas)
                }) : (s.openS_do = new FWDUVPDisplayObject("img"), s.openS_do.setScreen(s.openS_img)), s.openS_do.setWidth(s.openN_do.w), s.openS_do.setHeight(s.openN_do.h), s.openS_do.setAlpha(0), s.useHEX ? (s.closeN_do = new FWDUVPDisplayObject("div"), s.closeN_canvas = FWDUVPUtils.getCanvasWithModifiedColor(s.closeN_img, s.nBC).canvas, s.closeN_do.screen.appendChild(s.closeN_canvas)) : (s.closeN_do = new FWDUVPDisplayObject("img"), s.closeN_do.setScreen(s.closeN_img)), s.closeN_do.setWidth(s.closeN_img.width), s.closeN_do.setHeight(s.closeN_img.height), s.closeN_do.hasTransform3d_bl = !1, s.closeN_do.hasTransform2d_bl = !1, s.closeN_do.setBackfaceVisibility(), s.closeS_img = new Image, s.closeS_img.src = s.closeSPath_str, s.useHEX ? (s.closeS_do = new FWDUVPDisplayObject("div"), s.closeS_img.onload = function () {
                    s.closeS_canvas = FWDUVPUtils.getCanvasWithModifiedColor(s.closeS_img, s.sBC).canvas, s.closeS_do.setWidth(s.closeN_img.width), s.closeS_do.setHeight(s.closeN_img.height), s.closeS_do.screen.appendChild(s.closeS_canvas)
                }) : (s.closeS_do = new FWDUVPDisplayObject("img"), s.closeS_do.setScreen(s.closeS_img)), s.closeS_do.setWidth(s.closeN_img.width), s.closeS_do.setHeight(s.closeN_img.height), s.closeS_do.setAlpha(0), s.closeS_do.hasTransform3d_bl = !1, s.closeS_do.hasTransform2d_bl = !1, FWDUVPPreloader2.setPrototype(), s.animation_do = new FWDUVPPreloader2(s.animationPath_img, 29, 22, 31, 80, !0), s.animation_do.setY(s.openerEqulizerOffsetTop), s.animation_do.show(!1), s.animation_do.stop(), s.dumy_do = new FWDUVPDisplayObject("div"), s.dumy_do.setWidth(s.totalWidth), s.dumy_do.setHeight(s.totalHeight), s.dumy_do.getStyle().zIndex = 2, s.dumy_do.hasTransform3d_bl = !1, s.dumy_do.hasTransform2d_bl = !1, s.dumy_do.setBackfaceVisibility(), s.dumy_do.setButtonMode(!0), (FWDUVPUtils.isIE || FWDUVPUtils.isAndroid) && (s.dumy_do.setBkColor("#FF0000"), s.dumy_do.setAlpha(.01)), s.hasPointerEvent_bl ? (s.mainHld.screen.addEventListener("pointerup", s.onMouseUp), s.mainHld.screen.addEventListener("pointerover", s.onMouseOver), s.mainHld.screen.addEventListener("pointerout", s.onMouseOut)) : s.screen.addEventListener && (s.isMbl || (s.mainHld.screen.addEventListener("mouseover", s.onMouseOver), s.mainHld.screen.addEventListener("mouseout", s.onMouseOut), s.mainHld.screen.addEventListener("mouseup", s.onMouseUp)), s.screen.addEventListener("touchend", s.onMouseUp)), s.mainHld.addChild(s.openN_do), s.mainHld.addChild(s.openS_do), s.mainHld.addChild(s.closeN_do), s.mainHld.addChild(s.closeS_do), s.mainHld.addChild(s.animation_do), s.mainHld.addChild(s.dumy_do), s.addChild(s.mainHld)
            }, s.showOpener = function (e) {}, s.onMouseOver = function (e, t) {
                e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE && "mouse" != e.pointerType || s.setSelectedState()
            }, s.onMouseOut = function (e) {
                e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE && "mouse" != e.pointerType || s.setNormalState()
            }, s.onMouseUp = function (e) {
                e.preventDefault && e.preventDefault(), s.playerIsShowed_bl ? (s.playerIsShowed_bl = !1, s.dispatchEvent(n.HIDE)) : (s.playerIsShowed_bl = !0, s.dispatchEvent(n.SHOW))
            }, s.setupPlayPauseButton = function () {
                FWDUVPComplexButton.setPrototype(), s.playPauseButton_do = new FWDUVPComplexButton(s.openerPlayN_img, s.openerPlaySPath_str, s.openerPauseN_img, s.openerPauseS_str, !0, s.useHEX, s.nBC, s.sBC), s.playPauseButton_do.addListener(FWDUVPComplexButton.MOUSE_UP, s.playButtonMouseUpHandler), s.addChild(s.playPauseButton_do)
            }, s.showPlayButton = function () {
                s.playPauseButton_do && s.playPauseButton_do.setButtonState(1), s.animation_do.stop()
            }, s.showPauseButton = function () {
                s.playPauseButton_do && s.playPauseButton_do.setButtonState(0), s.animation_do.start(0)
            }, s.playButtonMouseUpHandler = function () {
                0 == s.playPauseButton_do.currentState ? s.dispatchEvent(FWDUVPController.PAUSE) : s.dispatchEvent(FWDUVPController.PLAY)
            }, s.setNormalState = function () {
                s.isMbl && !s.hasPointerEvent_bl || (FWDAnimation.killTweensOf(s.openS_do), FWDAnimation.killTweensOf(s.closeS_do), FWDAnimation.to(s.openS_do, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                }), FWDAnimation.to(s.closeS_do, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                }))
            }, s.setSelectedState = function (e) {
                FWDAnimation.killTweensOf(s.openS_do), FWDAnimation.killTweensOf(s.closeS_do), FWDAnimation.to(s.openS_do, .5, {
                    alpha: 1,
                    ease: Expo.easeOut
                }), FWDAnimation.to(s.closeS_do, .5, {
                    alpha: 1,
                    ease: Expo.easeOut
                })
            }, s.showOpenButton = function () {
                s.playerIsShowed_bl = !1, s.closeN_do.setX(150), s.closeS_do.setX(150), s.playPauseButton_do ? "right" == s.alignment_str ? (s.playPauseButton_do.setX(0), s.openN_do.setX(s.playPauseButton_do.w + 1), s.openS_do.setX(s.playPauseButton_do.w + 1), s.dumy_do.setX(s.playPauseButton_do.w + 1), s.dumy_do.setWidth(s.totalWidth), s.animation_do.setX(s.playPauseButton_do.w + 1 + s.openerEqulizerOffsetLeft)) : (s.playPauseButton_do.setX(s.openN_do.w + 1), s.openN_do.setX(0), s.openS_do.setX(0), s.dumy_do.setX(0), s.dumy_do.setWidth(s.totalWidth), s.animation_do.setX(s.openerEqulizerOffsetLeft)) : (s.openN_do.setX(0), s.openS_do.setX(0), s.dumy_do.setX(0), s.dumy_do.setWidth(s.totalWidth), s.animation_do.setX(s.openerEqulizerOffsetLeft)), s.animation_do.setVisible(!0)
            }, s.showCloseButton = function () {
                s.playerIsShowed_bl = !0, s.openN_do.setX(150), s.openS_do.setX(150), s.dumy_do.setWidth(s.closeN_do.w), "right" == s.alignment_str ? s.playPauseButton_do ? (s.closeN_do.setX(s.totalWidth + 1), s.closeS_do.setX(s.totalWidth + 1), s.dumy_do.setX(s.totalWidth + 1)) : (s.closeN_do.setX(s.totalWidth - s.closeN_do.w), s.closeS_do.setX(s.totalWidth - s.closeN_do.w), s.dumy_do.setX(s.totalWidth - s.closeN_do.w)) : (s.closeN_do.setX(0), s.closeS_do.setX(0), s.dumy_do.setX(0)), s.playPauseButton_do && s.playPauseButton_do.setX(150), s.animation_do.setX(150), s.animation_do.setVisible(!1)
            }, s.hide = function () {
                s.mainHld.setX(150)
            }, s.show = function () {
                s.mainHld.setX(0)
            }, s.updateHEXColors = function (e, t) {
                s.nBC = e, s.sBC = t, s.playPauseButton_do.updateHEXColors(e, t), FWDUVPUtils.changeCanvasHEXColor(s.openN_img, s.openN_canvas, e), FWDUVPUtils.changeCanvasHEXColor(s.closeN_img, s.closeN_canvas, e), FWDUVPUtils.changeCanvasHEXColor(s.openS_img, s.openS_canvas, t), FWDUVPUtils.changeCanvasHEXColor(s.closeS_img, s.closeS_canvas, t)
            }, s.init()
        };
        n.setPrototype = function () {
            n.prototype = new FWDUVPDisplayObject("div")
        }, n.SHOW = "show", n.HIDE = "hise", n.PLAY = "play", n.PAUSE = "pause", n.prototype = null, window.FWDUVPOpener = n
    }(window),
    function (e) {
        var t = function (e, s) {
            var n = this;
            t.prototype;
            n.adHolder_do = null, n.mainHld = null, n.clsBtn = null, n.buttons_ar = [], n.maxWidth = e.aopwWidth, n.maxHeight = e.aopwHeight + e.popwColseN_img.height + 1, n.sW = 0, n.sH = 0, n.aopwSource = e.aopwSource, n.aopwTitle = e.aopwTitle, n.aopwTitleColor_str = e.aopwTitleColor_str, n.aopwBorderSize = e.aopwBorderSize, n.isShowed_bl = !1, n.isMbl = FWDUVPUtils.isMobile, n.init = function () {
                n.setBackfaceVisibility(), n.mainBar_do = new FWDUVPDisplayObject("div"), n.bar_do = new FWDUVPDisplayObject("div"), n.bar_do.getStyle().background = "url('" + e.popwBarBackgroundPath_str + "')", n.adHolder_do = new FWDUVPDisplayObject("div"), n.adBk_do = new FWDUVPDisplayObject("div"), n.adBk_do.getStyle().background = "url('" + e.popwWindowBackgroundPath_str + "')", FWDUVPSimpleButton.setPrototype(), n.clsBtn = new FWDUVPSimpleButton(e.popwColseN_img, e.popwColseSPath_str, void 0, !0, e.useHEX, e.nBC, e.sBC, !1, !1, !1, !1, !0), n.clsBtn.addListener(FWDUVPSimpleButton.MOUSE_UP, n.closeButtonOnMouseUpHandler), n.title_do = new FWDUVPDisplayObject("div"), n.title_do.getStyle().width = "100%", n.title_do.getStyle().textAlign = "left", n.title_do.getStyle().fontFamily = "Arial", n.title_do.getStyle().fontSize = "14px", n.title_do.getStyle().fontWeight = "100", n.title_do.getStyle().color = n.aopwTitleColor_str, n.title_do.setInnerHTML(n.aopwTitle), n.bar_do.addChild(n.title_do), n.addChild(n.adBk_do), n.mainBar_do.addChild(n.bar_do), n.mainBar_do.addChild(n.clsBtn), n.mainBar_do.setHeight(n.clsBtn.h), n.addChild(n.mainBar_do), n.addChild(n.adHolder_do), n.bar_do.setHeight(n.mainBar_do.h)
            }, n.closeButtonOnMouseUpHandler = function () {
                n.isShowed_bl && (n.hide(), s.play())
            }, n.positionAndResize = function () {
                n.sW = Math.min(s.tempVidStageWidth, n.maxWidth), n.sH = Math.min(s.tempVidStageHeight, n.maxHeight);
                var e = 1,
                    t = s.tempVidStageWidth / n.maxWidth,
                    o = s.tempVidStageHeight / n.maxHeight;
                t < o ? e = t : o < t && (e = o), 1 < e && (e = 1), n.sW = e * n.maxWidth, n.sH = e * n.maxHeight, n.setWidth(n.sW), n.setHeight(n.sH), n.setHeight(n.sH), n.setX(Math.round((s.tempVidStageWidth - n.sW) / 2)), n.setY(Math.round((s.tempVidStageHeight - n.sH) / 2)), n.mainBar_do.setWidth(n.sW), n.clsBtn.setX(n.sW - n.clsBtn.w), n.bar_do.setWidth(n.sW - n.clsBtn.w - 1), n.adBk_do.setWidth(n.sW), n.adBk_do.setHeight(n.sH - n.mainBar_do.h - 1), n.adBk_do.setY(n.mainBar_do.h + 1), n.adHolder_do.setWidth(n.sW - 2 * n.aopwBorderSize), n.adHolder_do.setX(n.aopwBorderSize), n.adHolder_do.setY(n.mainBar_do.h + n.aopwBorderSize + 1), n.adHolder_do.setHeight(n.sH - n.mainBar_do.h - 2 * n.aopwBorderSize - 1)
            }, n.show = function (e) {
                n.isShowed_bl || (n.isShowed_bl = !0, e && (n.aopwSource = e), s.main_do.addChild(n), n.adHolder_do.setInnerHTML("<iframe width='100%' height='100%' scrolling='no' frameBorder='0' src=" + n.aopwSource + "></iframe>"), n.positionAndResize(), n.title_do.setX(8), n.title_do.setY(Math.round((n.bar_do.h - n.title_do.getHeight()) / 2)))
            }, n.showCompleteHandler = function () {}, n.hide = function () {
                n.isShowed_bl && (n.isShowed_bl = !1, s.main_do.contains(n) && s.main_do.removeChild(n))
            }, n.hideCompleteHandler = function () {
                s.main_do.removeChild(n), n.dispatchEvent(t.HIDE_COMPLETE)
            }, n.updateHEXColors = function (e, t) {
                n.clsBtn.updateHEXColors(e, t)
            }, n.init()
        };
        t.setPrototype = function () {
            t.prototype = new FWDUVPDisplayObject("div")
        }, t.HIDE_COMPLETE = "hideComplete", t.prototype = null, e.FWDUVPOPWindow = t
    }(window),
    function (e) {
        var a = function (o, s, n) {
            var i = this;
            a.prototype;
            i.xhr = null, i.passColoseN_img = o.passColoseN_img, i.privateVideoPassword_str = o.privateVideoPassword_str, i.bk_do = null, i.mainHld = null, i.passMainHolder_do = null, i.passMainHldBk = null, i.passMainLabel_do = null, i.passLabel_do = null, i.passInput_do = null, i.clsBtn = null, i.embedWindowBackground_str = o.embedWindowBackground_str, i.secondaryLabelsColor_str = o.secondaryLabelsColor_str, i.inputColor_str = o.inputColor_str, i.mainLabelsColor_str = o.mainLabelsColor_str, i.passButtonNPath_str = o.passButtonNPath_str, i.passButtonSPath_str = o.passButtonSPath_str, i.inputBackgroundColor_str = o.inputBackgroundColor_str, i.borderColor_str = o.borderColor_str, i.maxTextWidth = 0, i.totalWidth = 0, i.sW = 0, i.sH = 0, i.buttonWidth = 28, i.buttonHeight = 19, i.embedWindowCloseButtonMargins = o.embedWindowCloseButtonMargins, i.finalEmbedPath_str = null, i.useVectorIcons_bl = o.useVectorIcons_bl, i.isShowed_bl = !1, i.isMobile_bl = FWDUVPUtils.isMobile, i.init = function () {
                var e, t;
                i.clsBtn || (i.setBackfaceVisibility(), i.mainHld = new FWDUVPDisplayObject("div"), i.mainHld.hasTransform3d_bl = !1, i.mainHld.hasTransform2d_bl = !1, i.mainHld.setBackfaceVisibility(), i.bk_do = new FWDUVPDisplayObject("div"), i.bk_do.getStyle().width = "100%", i.bk_do.getStyle().height = "100%", i.bk_do.setAlpha(.9), i.bk_do.getStyle().background = "url('" + i.embedWindowBackground_str + "')", i.passMainHolder_do = new FWDUVPDisplayObject("div"), i.passMainHldBk = new FWDUVPDisplayObject("div"), i.passMainHldBk.getStyle().background = "url('" + i.embedWindowBackground_str + "')", i.passMainHldBk.getStyle().borderStyle = "solid", i.passMainHldBk.getStyle().borderWidth = "1px", i.passMainHldBk.getStyle().borderColor = i.borderColor_str, i.passMainLabel_do = new FWDUVPDisplayObject("div"), i.passMainLabel_do.screen.className = "UVP-main-label", i.passMainLabel_do.setBackfaceVisibility(), i.passMainLabel_do.screen.className = "fwdeap-main-label", i.passMainLabel_do.getStyle().fontFamily = "Arial", i.passMainLabel_do.getStyle().fontSize = "12px", i.passMainLabel_do.getStyle().color = i.mainLabelsColor_str, i.passMainLabel_do.getStyle().whiteSpace = "nowrap", i.passMainLabel_do.getStyle().padding = "0px", i.passMainLabel_do.setInnerHTML("PRIVATE VIDEO"), i.passLabel_do = new FWDUVPDisplayObject("div"), i.passMainLabel_do.screen.className = "UVP-main-label", i.passLabel_do.setBackfaceVisibility(), i.passLabel_do.screen.className = "fwdeap-label", i.passLabel_do.getStyle().fontFamily = "Arial", i.passLabel_do.getStyle().fontSize = "12px", i.passLabel_do.getStyle().color = i.secondaryLabelsColor_str, i.passLabel_do.getStyle().whiteSpace = "nowrap", i.passLabel_do.getStyle().padding = "0px", i.passLabel_do.setInnerHTML("Please enter password:"), i.passInput_do = new FWDUVPDisplayObject("input"), i.passInput_do.screen.className = "UVP-embed-inpt", i.passInput_do.setBackfaceVisibility(), i.passInput_do.getStyle().fontFamily = "Arial", i.passInput_do.getStyle().fontSize = "12px", i.passInput_do.getStyle().backgroundColor = i.inputBackgroundColor_str, i.passInput_do.getStyle().color = i.inputColor_str, i.passInput_do.getStyle().outline = 0, i.passInput_do.getStyle().whiteSpace = "nowrap", i.passInput_do.getStyle().padding = "6px", i.passInput_do.getStyle().paddingTop = "4px", i.passInput_do.getStyle().paddingBottom = "4px", i.passInput_do.screen.setAttribute("type", "password"), n ? (i.addChild(i.mainHld), i.mainHld.addChild(i.bk_do), i.mainHld.addChild(i.passLabel_do), i.passLabel_do.getStyle().whiteSpace = "normal", i.passLabel_do.getStyle().width = "calc(100% - 40px)", i.passLabel_do.getStyle().textAlign = "center", i.passLabel_do.setInnerHTML(o.playIfLoggedInMessage), e = "fwduvp-loggedin-message-white", o.isDark && (e = "fwduvp-loggedin-message-dark"), i.passLabel_do.screen.className = e, i.passLabel_do.setOverflow("visible"), FWDUVPSimpleButton.setPrototype(), i.useVectorIcons_bl ? (i.clsBtn = new FWDUVPSimpleButton(0, 0, 0, !0, 0, 0, 0, "<div class='table-fwduvp-button'><span class='table-cell-fwduvp-button fwdicon-close'></span></div>", void 0, "UVPCloseButtonNormalState", "UVPCloseButtonSelectedState"), i.clsBtn.screen.className = "fwduvp-close-button", i.clsBtn.addListener(FWDUVPSimpleButton.MOUSE_UP, i.closeButtonOnMouseUpHandler), i.mainHld.addChild(i.clsBtn)) : ((t = new Image).src = i.passColoseN_img.src, t.onload = function () {
                    FWDUVPSimpleButton.setPrototype(), i.clsBtn = new FWDUVPSimpleButton(t, o.embedWindowClosePathS_str, void 0, !0, o.useHEX, o.nBC, o.sBC, 0, 0, 0, 0, !0), i.clsBtn.screen.className = "fwduvp-close-button", i.clsBtn.addListener(FWDUVPSimpleButton.MOUSE_UP, i.closeButtonOnMouseUpHandler), i.mainHld.addChild(i.clsBtn), t.onload = null, i.posClsBtn()
                })) : (FWDUVPSimpleSizeButton.setPrototype(), i.passBtn = new FWDUVPSimpleSizeButton(i.passButtonNPath_str, i.passButtonSPath_str, i.buttonWidth, i.buttonHeight, o.useHEX, o.nBC, o.sBC, !0), i.passBtn.addListener(FWDUVPSimpleSizeButton.CLICK, i.passClickHandler), FWDUVPSimpleButton.setPrototype(), i.useVectorIcons_bl ? (i.clsBtn = new FWDUVPSimpleButton(0, 0, 0, !0, 0, 0, 0, "<div class='table-fwduvp-button'><span class='table-cell-fwduvp-button fwdicon-close'></span></div>", void 0, "UVPCloseButtonNormalState", "UVPCloseButtonSelectedState"), i.clsBtn.addListener(FWDUVPSimpleButton.MOUSE_UP, i.closeButtonOnMouseUpHandler), i.mainHld.addChild(i.clsBtn)) : (FWDUVPSimpleButton.setPrototype(), i.clsBtn = new FWDUVPSimpleButton(i.passColoseN_img, o.embedWindowClosePathS_str, 0, !0, o.useHEX, o.nBC, o.sBC, 0, 0, 0, 0, !0)), i.clsBtn.screen.className = "fwduvp-close-button", i.clsBtn.addListener(FWDUVPSimpleButton.MOUSE_UP, i.closeButtonOnMouseUpHandler), i.addChild(i.mainHld), i.mainHld.addChild(i.bk_do), i.passMainHolder_do.addChild(i.passMainHldBk), i.passMainHolder_do.addChild(i.passMainLabel_do), i.passMainHolder_do.addChild(i.passLabel_do), i.passMainHolder_do.addChild(i.passInput_do), i.passMainHolder_do.addChild(i.passBtn), i.mainHld.addChild(i.passMainHolder_do), i.mainHld.addChild(i.clsBtn)), i.posClsBtn())
            }, i.closeButtonOnMouseUpHandler = function () {
                i.isShowed_bl && i.hide()
            }, i.positionAndResize = function () {
                i.sW = s.sW, i.sH = s.sH, i.maxTextWidth = Math.min(i.sW - 150, 300), i.totalWidth = i.maxTextWidth + i.buttonWidth, i.positionFinal(), i.setWidth(i.sW), i.setHeight(i.sH), i.mainHld.setWidth(i.sW), i.mainHld.setHeight(i.sH)
            }, i.posClsBtn = function () {
                i.clsBtn && (i.clsBtn.getStyle().left = "auto", i.clsBtn.getStyle().right = i.embedWindowCloseButtonMargins + "px", i.clsBtn.getStyle().top = i.embedWindowCloseButtonMargins + "px")
            }, i.positionFinal = function () {
                var e, t = i.passLabel_do.getHeight(),
                    o = i.passMainLabel_do.getHeight();
                n ? (i.passLabel_do.setX(Math.round((i.sW - i.passLabel_do.getWidth()) / 2)), i.passLabel_do.setY(Math.round((i.sH - i.passLabel_do.getHeight()) / 2))) : (i.passMainLabel_do.setX(14), i.passLabel_do.setX(14), i.passLabel_do.setY(o + 14), i.passInput_do.setX(10), i.passInput_do.setWidth(parseInt(i.totalWidth - 40 - i.buttonWidth)), i.passInput_do.setY(i.passLabel_do.y + t + 5), i.passBtn.setX(10 + i.passInput_do.w + 20), i.passBtn.setY(i.passLabel_do.y + t + 7), i.passMainHldBk.setY(i.passLabel_do.y - 9), i.passMainHldBk.setWidth(i.totalWidth - 2), i.passMainHldBk.setHeight(i.passBtn.y + i.passBtn.h - 9), i.passMainHolder_do.setWidth(i.totalWidth), i.passMainHolder_do.setHeight(i.passBtn.y + i.passBtn.h + 14), i.passMainHolder_do.setX(Math.round((i.sW - i.totalWidth) / 2)), e = i.passMainHldBk.getHeight(), i.passMainHolder_do.setY(Math.round((i.sH - e) / 2) - 10))
            }, i.passClickHandler = function () {
                var e = !0,
                    t = s._d.playlist_ar[s.id].privateVideoPassword_str,
                    o = s.playlistPass;
                o ? o != FWDUVPUtils.MD5(i.passInput_do.screen.value) ? e = !1 : s.plPassPassed = !0 : t ? t != FWDUVPUtils.MD5(i.passInput_do.screen.value) && (e = !1) : i.privateVideoPassword_str != FWDUVPUtils.MD5(i.passInput_do.screen.value) && (e = !1), e ? i.dispatchEvent(a.CORRECT) : FWDAnimation.isTweening(i.passInput_do.screen) || FWDAnimation.to(i.passInput_do.screen, .1, {
                    css: {
                        backgroundColor: "#FF0000"
                    },
                    yoyo: !0,
                    repeat: 3
                })
            }, i.updateHEXColors = function (e, t) {
                i.passBtn.updateHEXColors(e, t), i.clsBtn.updateHEXColors(e, t)
            }, i.showInfo = function (e, t) {
                i.infoText_do.setInnerHTML(e), i.passMainHolder_do.addChild(i.infoText_do), i.infoText_do.setWidth(i.buttonWidth), i.infoText_do.setHeight(i.buttonHeight - 4), i.infoText_do.setX(i.passBtn.x), i.infoText_do.setY(i.passBtn.y - 23), i.infoText_do.setAlpha(0), i.infoText_do.getStyle().color = t ? "#FF0000" : i.mainLabelsColor_str, FWDAnimation.killTweensOf(i.infoText_do), FWDAnimation.to(i.infoText_do, .16, {
                    alpha: 1,
                    yoyo: !0,
                    repeat: 7
                })
            }, i.show = function (e) {
                i.isShowed_bl || (i.isShowed_bl = !0, s.main_do.addChild(i), i.init(), i.passBtn && (i.passBtn.setSelectedState(), i.passInput_do.setInnerHTML("")), (!FWDUVPUtils.isMobile || FWDUVPUtils.isMobile && FWDUVPUtils.hasPointerEvent) && s.main_do.setSelectable(!0), i.positionAndResize(), clearTimeout(i.hideCompleteId_to), clearTimeout(i.showCompleteId_to), i.mainHld.setY(-i.sH), i.passBtn && i.passBtn.setNormalState(), i.showCompleteId_to = setTimeout(i.showCompleteHandler, 900), setTimeout(function () {
                    i.positionAndResize(), FWDAnimation.to(i.mainHld, .8, {
                        y: 0,
                        delay: .1,
                        ease: Expo.easeInOut
                    })
                }, 100))
            }, i.showCompleteHandler = function () {}, i.hide = function () {
                i.isShowed_bl && (i.isShowed_bl = !1, s.customContextMenu_do && s.customContextMenu_do.enable(), i.positionAndResize(), clearTimeout(i.hideCompleteId_to), clearTimeout(i.showCompleteId_to), (!FWDUVPUtils.isMobile || FWDUVPUtils.isMobile && FWDUVPUtils.hasPointerEvent) && s.main_do.setSelectable(!1), i.hideCompleteId_to = setTimeout(i.hideCompleteHandler, 800), FWDAnimation.killTweensOf(i.mainHld), FWDAnimation.to(i.mainHld, .8, {
                    y: -i.sH,
                    ease: Expo.easeInOut
                }))
            }, i.hideCompleteHandler = function () {
                s.main_do.removeChild(i), i.dispatchEvent(a.HIDE_COMPLETE)
            }, o.useHEX && i.init()
        };
        a.setPrototype = function () {
            a.prototype = new FWDUVPDisplayObject("div")
        }, a.ERROR = "error", a.CORRECT = "correct", a.HIDE_COMPLETE = "hideComplete", a.prototype = null, e.FWDUVPPassword = a
    }(window),
    function (a) {
        var t = function (n, i) {
            var r = this;
            t.prototype;
            r.moveEvent = null, r.prt = n, r._d = i, r.image_img = null, r.prevN_img = i.prevN_img, r.nextN_img = i.nextN_img, r.replayN_img = i.replayN_img, r.shuffleN_img = i.shuffleN_img, r.scrBkTop_img = i.scrBkTop_img, r.scrDragTop_img = i.scrDragTop_img, r.scrLinesN_img = i.scrLinesN_img, r.playlist_ar = null, r.buttons_ar = [], r.thumbs_ar = null, r.useHEX = i.useHEX, r.nBC = i.nBC, r.sBC = i.sBC, r.bkPath_str = i.controllerBkPath_str, r.position_str = n.playlistPosition_str, r.playlistBackgroundColor_str = i.playlistBackgroundColor_str, r.inputBackgroundColor_str = i.searchInputBackgroundColor_str, r.inputColor_str = i.searchInputColor_str, r.prevInputValue_str = "none", r.showOnlyThmb = i.showOnlyThumbnail, r.scrWidth = r.scrBkTop_img.width, r.mouseX = 0, r.mouseY = 0, r.catId = -1, r.dif = 0, r.countLoadedThumbs = 0, r.curId = -1, r.finalX = 0, r.finalY = 0, r.controlBarHeight = i.controllerHeight, r.totalThumbs = 0, r.totalWidth = n.playlistWidth, r.totalHeight = n.playlistHeight, r.dThumbW = r.thumbImageW = i.thumbnailWidth, r.dThumbH = r.thumbImageH = i.thumbnailHeight, r.thumbInPadding = 3, r.spaceBetweenThumbnails = i.spaceBetweenThumbnails, r.startSpaceBetweenButtons = i.startSpaceBetweenButtons, r.spaceBetweenButtons = i.spaceBetweenButtons, r.totalButtons = 0, r.buttonsToolTipHideDelay = i.buttonsToolTipHideDelay, r.removeFromThumbsHolderHeight = 0, r.totalThumbsHeight = 0, r.scrollBarHandlerFinalY = 0, r.sW = r.totalWidth, r.sH = r.totalHeight, r.scrollbarOffestWidth = i.scrollbarOffestWidth, r.lastThumbnailFinalY = -1, r.thumbsFinalY = 0, r.scollbarSpeedSensitivity = i.scollbarSpeedSensitivity, r.vy = 0, r.vy2 = 0, r.friction = .9, r.loadWithDelayId_to, r.showToolTipId_to, r.disableThumbsId_to, r.disableMouseWheelId_to, r.thumbnailsAnimDoneId_to, r.disableForAWhileAfterThumbClickId_to, r.updateMobileScrollBarId_int, r.showThumbnail_bl = i.showThumbnail_bl, r.disableForAWhileAfterThumbClick_bl = !1, r.showPlaylistName_bl = i.showPlaylistName_bl, r.isShowNothingFound_bl = !1, r.hasInputFocus_bl = !1, r.showController_bl = i.showSearchInpt || i.showNextAndPrevButtons_bl || i.showLoopButton_bl || i.showShuffleButton_bl, r.loop_bl = i.loop_bl, r.shuffle_bl = i.shuffle_bl, r.showSearchInpt = i.showSearchInpt, r.allowToScrollAndScrollBarIsActive_bl = !0, r.showPlaylistToolTips_bl = i.showPlaylistToolTips_bl, r.hasPlaylist_bl = !1, r.showPlaylistByDefault_bl = i.showPlaylistByDefault_bl, r.repeatBackground_bl = i.repeatBackground_bl, r.addMouseWheelSupport_bl = i.addMouseWheelSupport_bl, r.showNextAndPrevButtons_bl = i.showNextAndPrevButtons_bl, r.showShuffleButton_bl = i.showShuffleButton_bl, r.showLoopButton_bl = i.showLoopButton_bl, r.showButtonsToolTip_bl = i.showButtonsToolTip_bl, r.isShowed_bl = !0, r.allowToSwipe_bl = !1, r.disableThumbs_bl = !1, r.disableMouseWheel_bl = !1, r.usePlaylistsSelectBox_bl = i.usePlaylistsSelectBox_bl, r.isMbl = FWDUVPUtils.isMobile, r.isDragging_bl = !1, r.isSearched_bl = !1, r.addScrOnMM_bl = i.addScrOnMM_bl, r.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, r.useVectorIcons_bl = i.useVectorIcons_bl, r.init = function () {
                var e;
                r.setOverflow("hidden"), r.screen.className = "fwduvp-playlist", r.mainHld = new FWDUVPDisplayObject("div"), r.mainHld.screen.className = "fwduvp-playlist-background", i.isWhite && (r.mainHld.screen.className = "fwduvp-playlist-background white"), r.mainHld.setBkColor(r.playlistBackgroundColor_str), r.mainThumbsHolder_do = new FWDUVPDisplayObject("div"), r.mainThumbsHolder_do.screen.className = "fwduvp-playlist-thumbs-holder", r.mainThumbsHolder_do.setBkColor(r.playlistBackgroundColor_str), r.thumbsHolder_do = new FWDUVPDisplayObject("div"), r.thumbsHolder_do.setOverflow("visible"), r.mainThumbsHolder_do.addChild(r.thumbsHolder_do), r.mainHld.addChild(r.mainThumbsHolder_do), r.addChild(r.mainHld), r.showController_bl && (r.controllBar_do = new FWDUVPDisplayObject("div"), r.repeatBackground_bl ? (r.controllerBk_do = new FWDUVPDisplayObject("div"), r.controllerBk_do.getStyle().background = "url('" + r.bkPath_str + "')") : (r.controllerBk_do = new FWDUVPDisplayObject("img"), (e = new Image).src = r.bkPath_str, r.controllerBk_do.setScreen(e)), r.controllerBk_do.setHeight(r.controlBarHeight), r.controllerBk_do.getStyle().width = "100%", r.controllBar_do.addChild(r.controllerBk_do), r.controllBar_do.setHeight(r.controlBarHeight), r.mainHld.addChild(r.controllBar_do)), r.showShuffleButton_bl && r.setupShuffleButton(), r.showLoopButton_bl && r.setupLoopButton(), r.showNextAndPrevButtons_bl && (r.setupPrevButton(), r.setupNextButton()), r.showButtonsToolTip_bl && r.setupToolTips(), r.totalButtons = r.buttons_ar.length, r.showSearchInpt && r.showController_bl && r.setupInput(), r.showController_bl && (r.removeFromThumbsHolderHeight = r.controllBar_do.h + r.spaceBetweenThumbnails), r.setupMobileScrollbar(), r.isMbl || r.setupScrollbar(), r.addMouseWheelSupport_bl && r.addMouseWheelSupport(), r.showPlaylistName_bl && (r.setupPlaylistName(), r.removeFromThumbsHolderHeight += r.controlBarHeight + r.spaceBetweenThumbnails, r.mainThumbsHolder_do.setY(r.controlBarHeight + r.spaceBetweenThumbnails), r.scrMainHolder_do && r.scrMainHolder_do.setY(r.mainThumbsHolder_do.y));
                var t = n.ec;
                t && (r.ec = new FWDUVPDisplayObject("div", "relative"), r.ec.setInnerHTML(t.innerHTML), n.main_do.addChild(r.ec), r.positionEc()), r.showPlaylistByDefault_bl || r.hide()
            }, r.positionEc = function () {
                r.ec && (r.ec.setWidth(r.sW), r.ec.setX(n.sW - r.sW), r.ec.setY(0))
            }, r.resizeAndPosition = function (e) {
                var t;
                n.sW && (t = 0, r.ec && (t = Math.round(r.ec.getHeight()), r.positionEc()), "bottom" == r.position_str ? (r.sW = n.sW, r.sH = n.playlistHeight, r.showOnlyThmb && (r.thumbImageW = r.sW - r.scrWidth), r.finalX = 0, r.finalY = n.tempVidStageHeight + n.spaceBetweenControllerAndPlaylist) : (r.sW = r.totalWidth, r.showOnlyThmb && (r.thumbImageW = r.sW - r.scrWidth), r.sH = n.sH - t, r.finalX = n.sW - r.totalWidth, r.finalY = 0), r.comboBox_do && r.comboBox_do.resizeAndPosition(), r.bk_do && (r.bk_do.setWidth(r.sW), r.bk_do.setHeight(r.sH)), r.positionThumbs(e), r.allowToScrollAndScrollBarIsActive_bl && r.scrMainHolder_do ? r.mainThumbsHolder_do.setWidth(r.sW - r.scrollbarOffestWidth + 1) : r.mainThumbsHolder_do.setWidth(r.sW), r.mainThumbsHolder_do.setHeight(r.sH - r.removeFromThumbsHolderHeight), r.scrHandler_do && r.updateScrollBarSizeActiveAndDeactivate(), r.controllBar_do && r.positionControllBar(), r.updateScrollBarHandlerAndContent(e), r.setWidth(r.sW), r.setHeight(r.sH + t), r.setX(r.finalX), r.setY(r.finalY + t), r.mainHld.setWidth(r.sW), r.mainHld.setHeight(r.sH))
            }, r.updatePlaylist = function (e, t, o, s) {
                clearTimeout(r.populateNextItemId_to), r.hasPlaylist_bl = !0, r.catId = t, r.curId = o, r.playlist_ar = e, r.countLoadedThumbs = 0, r.allowToScrollAndScrollBarIsActive_bl = !1, r.input_do && (r.hasInputFocus_bl = !1, r.input_do.screen.value = "search"), r.setupThumbnails(), r.updatePlaylistName(s), r.showThumbnail_bl && r.loadImages(), r.comboBox_do && r.comboBox_do.setButtonsStateBasedOnId(r.catId), r.hideAndShow(!0), r.resizeAndPosition(), r.scrHandler_do && (r.updateScrollBarSizeActiveAndDeactivate(), r.updateScrollBarHandlerAndContent(!1, !0))
            }, r.destroyPlaylist = function () {
                if (r.thumbs_ar) {
                    var e;
                    r.stopToUpdateDrag(), r.hasPlaylist_bl = !1, r.image_img && (r.image_img.onerror = null, r.image_img.onload = null), FWDAnimation.killTweensOf(r.mainHld), "bottom" == r.position_str ? r.mainHld.setY(-r.sH - 5) : r.mainHld.setX(-r.sW - 5), r.ec && r.ec.setX(-5e3), clearTimeout(r.loadWithDelayId_to);
                    for (var t = 0; t < r.totalThumbs; t++) e = r.thumbs_ar[t], r.thumbsHolder_do.removeChild(e), e.destroy();
                    r.thumbs_ar = null
                }
            }, r.setupcomboBox = function () {
                r.labels_ar = [];
                for (var e = 0; e < i.cats_ar.length; e++) r.labels_ar[e] = i.cats_ar[e].playlistName;
                var t = {
                    categories_ar: r.labels_ar,
                    selectorLabel: r.labels_ar[0],
                    selectorBackgroundNormalColor: i.mainSelectorBackgroundSelectedColor,
                    selectorTextNormalColor: i.mainSelectorTextNormalColor,
                    selectorTextSelectedColor: i.mainSelectorTextSelectedColor,
                    buttonBackgroundNormalColor: i.mainButtonBackgroundNormalColor,
                    buttonBackgroundSelectedColor: i.mainButtonBackgroundSelectedColor,
                    buttonTextNormalColor: i.mainButtonTextNormalColor,
                    buttonTextSelectedColor: i.mainButtonTextSelectedColor,
                    buttonHeight: r.controlBarHeight,
                    arrowN_str: i.arrowN_str,
                    arrowS_str: i.arrowS_str,
                    arrowW: 11,
                    arrowH: 6
                };
                FWDUVPComboBox.setPrototype(), r.comboBox_do = new FWDUVPComboBox(r, t), r.comboBox_do.addListener(FWDUVPComboBox.BUTTON_PRESSED, r.changePlaylistOnClick), r.mainHld.addChild(r.comboBox_do)
            }, r.changePlaylistOnClick = function (e) {
                r.dispatchEvent(t.CHANGE_PLAYLIST, {
                    id: e.id
                })
            }, r.setupPlaylistName = function () {
                var e;
                r.playlistNameHolder_do = new FWDUVPDisplayObject("div"), r.playlistNameHolder_do.setHeight(r.controlBarHeight), r.playlistNameHolder_do.getStyle().width = "100%", r.repeatBackground_bl ? (r.playlistNameBk_do = new FWDUVPDisplayObject("div"), r.playlistNameBk_do.getStyle().background = "url('" + r.bkPath_str + "')") : (r.playlistNameBk_do = new FWDUVPDisplayObject("img"), (e = new Image).src = r.bkPath_str, r.playlistNameBk_do.setScreen(e)), r.playlistNameBk_do.getStyle().width = "100%", r.playlistNameBk_do.getStyle().height = "100%", r.playlistName_do = new FWDUVPDisplayObject("div"), r.playlistName_do.getStyle().width = "100%", r.playlistName_do.screen.className = "fwduvp-playlist-name", r.playlistName_do.getStyle().textAlign = "center", r.playlistName_do.getStyle().fontSmoothing = "antialiased", r.playlistName_do.getStyle().webkitFontSmoothing = "antialiased", r.playlistName_do.getStyle().textRendering = "optimizeLegibility", r.playlistName_do.getStyle().fontFamily = "Arial", r.playlistName_do.getStyle().fontSize = "14px", r.playlistName_do.getStyle().color = i.playlistNameColor_str, r.playlistNameHolder_do.addChild(r.playlistNameBk_do), r.usePlaylistsSelectBox_bl || r.playlistNameHolder_do.addChild(r.playlistName_do), r.mainHld.addChild(r.playlistNameHolder_do), r.usePlaylistsSelectBox_bl && (r.setupcomboBox(), r.controllBar_do && r.mainHld.addChild(r.controllBar_do))
            }, r.updatePlaylistName = function (e) {
                r.playlistName_do && (r.playlistName_do.setInnerHTML(e), setTimeout(function () {
                    r.playlistName_do.setY(parseInt((r.playlistNameHolder_do.h - r.playlistName_do.getHeight()) / 2) + 1)
                }, 50))
            }, r.setupInput = function () {
                r.input_do = new FWDUVPDisplayObject("input"), r.input_do.screen.maxLength = 20, r.input_do.screen.className = "fwduvp-search", r.input_do.getStyle().textAlign = "left", r.input_do.getStyle().outline = "none", r.input_do.getStyle().boxShadow = "none", r.input_do.getStyle().fontSmoothing = "antialiased", r.input_do.getStyle().webkitFontSmoothing = "antialiased", r.input_do.getStyle().textRendering = "optimizeLegibility", r.input_do.getStyle().fontFamily = "Arial", r.input_do.getStyle().fontSize = "12px", r.input_do.getStyle().padding = "7px 10px 7px", r.input_do.getStyle().boxSizing = "border-box", FWDUVPUtils.isIEAndLessThen9 || (r.input_do.getStyle().paddingRight = "-6px"), r.input_do.getStyle().backgroundColor = r.inputBackgroundColor_str, r.input_do.getStyle().color = r.inputColor_str, r.input_do.screen.value = "search", r.noSearchFound_do = new FWDUVPDisplayObject("div"), r.noSearchFound_do.setX(0), r.noSearchFound_do.screen.className = "fwduvp-search-not-found", r.noSearchFound_do.getStyle().textAlign = "center", r.noSearchFound_do.getStyle().width = "100%", r.noSearchFound_do.getStyle().fontSmoothing = "antialiased", r.noSearchFound_do.getStyle().webkitFontSmoothing = "antialiased", r.noSearchFound_do.getStyle().textRendering = "optimizeLegibility", r.noSearchFound_do.getStyle().fontFamily = "Arial", r.noSearchFound_do.getStyle().fontSize = "12px", r.noSearchFound_do.getStyle().color = r.inputColor_str, r.noSearchFound_do.setInnerHTML("NOTHING FOUND!"), r.noSearchFound_do.setVisible(!1), r.mainHld.addChild(r.noSearchFound_do), r.hasPointerEvent_bl ? r.input_do.screen.addEventListener("pointerdown", r.inputFocusInHandler) : r.input_do.screen.addEventListener && (r.input_do.screen.addEventListener("mousedown", r.inputFocusInHandler), r.input_do.screen.addEventListener("touchstart", r.inputFocusInHandler)), r.input_do.screen.addEventListener("keyup", r.keyUpHandler);
                var e = new Image;
                e.src = i.inputArrowPath_str, r.inputArrow_do = new FWDUVPDisplayObject("img"), r.inputArrow_do.setScreen(e), r.inputArrow_do.setWidth(12), r.inputArrow_do.setHeight(12), r.controllBar_do.addChild(r.input_do), r.controllBar_do.addChild(r.inputArrow_do)
            }, r.inputFocusInHandler = function () {
                r.hasInputFocus_bl || (r.hasInputFocus_bl = !0, "search" == r.input_do.screen.value && (r.input_do.screen.value = ""), r.input_do.screen.focus(), setTimeout(function () {
                    r.hasPointerEvent_bl ? a.addEventListener("pointerdown", r.inputFocusOutHandler) : a.addEventListener && (a.addEventListener("mousedown", r.inputFocusOutHandler), a.addEventListener("touchstart", r.inputFocusOutHandler)), FWDUVPlayer.isSearchedFocused_bl = !0
                }, 50))
            }, r.inputFocusOutHandler = function (e) {
                if (FWDUVPlayer.isSearchedFocused_bl = !1, r.hasInputFocus_bl) {
                    var t = FWDUVPUtils.getViewportMouseCoordinates(e);
                    return FWDUVPUtils.hitTest(r.input_do.screen, t.screenX, t.screenY) ? void 0 : (r.hasInputFocus_bl = !1, void("" == r.input_do.screen.value && (r.input_do.screen.value = "search", r.hasPointerEvent_bl ? a.removeEventListener("pointerdown", r.inputFocusOutHandler) : a.removeEventListener && (a.removeEventListener("mousedown", r.inputFocusOutHandler), a.removeEventListener("touchstart", r.inputFocusOutHandler)))))
                }
            }, r.keyUpHandler = function (e) {
                e.stopPropagation && e.stopPropagation(), r.prevInputValue_str != r.input_do.screen.value && (r.isMbl ? (r.positionThumbs(!1), r.thumbsFinalY = -1 * Math.round(r.curId / (r.totalThumbs - 1) * (r.totalThumbsHeight - r.mainThumbsHolder_do.h))) : r.positionThumbs(!0)), r.prevInputValue_str = r.input_do.screen.value, r.scrHandler_do && (r.updateScrollBarSizeActiveAndDeactivate(), r.updateScrollBarHandlerAndContent(!0, !0))
            }, r.showNothingFound = function () {
                r.isShowNothingFound_bl || (r.isShowNothingFound_bl = !0, r.noSearchFound_do.setVisible(!0), r.noSearchFound_do.setY(parseInt((r.sH - r.noSearchFound_do.getHeight()) / 2)), r.noSearchFound_do.setAlpha(0), FWDAnimation.to(r.noSearchFound_do, .1, {
                    alpha: 1,
                    yoyo: !0,
                    repeat: 4
                }))
            }, r.hideNothingFound = function () {
                r.isShowNothingFound_bl && (r.isShowNothingFound_bl = !1, FWDAnimation.killTweensOf(r.noSearchFound_do), r.noSearchFound_do.setVisible(!1))
            }, r.positionControllBar = function () {
                var e, t, o;
                if (r.input_do && r.sW <= 340) {
                    e = r.sW - 2 * r.startSpaceBetweenButtons, r.nextButton_do && (e -= r.nextButton_do.w + r.spaceBetweenButtons), r.prevButton_do && (e -= r.prevButton_do.w + r.spaceBetweenButtons), r.shuffleButton_do && (e -= r.shuffleButton_do.w + r.spaceBetweenButtons), r.loopButton_do && (e -= r.loopButton_do.w + r.spaceBetweenButtons);
                    for (var s = 0; s < r.totalButtons; s++) t = r.buttons_ar[r.totalButtons - 1 - s], o = r.buttons_ar[r.totalButtons - s], 0 == s ? t.setX(r.sW - t.w - r.startSpaceBetweenButtons) : t.setX(o.x - o.w - r.spaceBetweenButtons), t.setY(parseInt((r.controllBar_do.h - t.h) / 2))
                } else if (r.input_do && 340 < r.sW) {
                    350 < (e = r.sW - 2 * r.startSpaceBetweenButtons + r.spaceBetweenButtons - 2) && (e = 350), r.nextButton_do && (e -= r.nextButton_do.w + r.spaceBetweenButtons), r.prevButton_do && (e -= r.prevButton_do.w + r.spaceBetweenButtons), r.shuffleButton_do && (e -= r.shuffleButton_do.w + r.spaceBetweenButtons), r.loopButton_do && (e -= r.loopButton_do.w + r.spaceBetweenButtons);
                    for (s = 0; s < r.totalButtons; s++) t = r.buttons_ar[r.totalButtons - 1 - s], o = r.buttons_ar[r.totalButtons - s], 0 == s ? t.setX(r.sW - t.w - r.startSpaceBetweenButtons) : t.setX(o.x - o.w - r.spaceBetweenButtons), t.setY(parseInt((r.controllBar_do.h - t.h) / 2))
                } else r.shuffleButton_do ? (r.shuffleButton_do.setX(r.spaceBetweenButtons), r.shuffleButton_do.setY(parseInt((r.controllBar_do.h - r.shuffleButton_do.h) / 2)), r.loopButton_do && (r.loopButton_do.setX(r.shuffleButton_do.x + r.shuffleButton_do.w + r.spaceBetweenButtons), r.loopButton_do.setY(parseInt((r.controllBar_do.h - r.shuffleButton_do.h) / 2)))) : r.loopButton_do && (r.loopButton_do.setX(r.spaceBetweenButtons), r.loopButton_do.setY(parseInt((r.controllBar_do.h - r.loopButton_do.h) / 2))), r.nextButton_do && (r.nextButton_do.setX(r.sW - r.nextButton_do.w - r.startSpaceBetweenButtons), r.nextButton_do.setY(parseInt((r.controllBar_do.h - r.nextButton_do.h) / 2)), r.prevButton_do.setX(r.nextButton_do.x - r.nextButton_do.w - r.spaceBetweenButtons), r.prevButton_do.setY(parseInt((r.controllBar_do.h - r.prevButton_do.h) / 2)));
                r.input_do && (r.input_do.setWidth(e), r.input_do.setX(r.startSpaceBetweenButtons), r.input_do.setY(parseInt((r.controllBar_do.h - r.input_do.getHeight()) / 2)), r.inputArrow_do.setX(parseInt(r.input_do.x + r.input_do.getWidth()) - r.inputArrow_do.w - 7), r.inputArrow_do.setY(parseInt((r.controllBar_do.h - r.inputArrow_do.h) / 2))), r.controllBar_do.setWidth(r.sW), r.controllBar_do.setY(r.sH - r.controllBar_do.h)
            }, r.setupPrevButton = function () {
                r.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), r.prevButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-FF-left'></span>", void 0, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), r.prevButton_do = new FWDUVPSimpleButton(r.prevN_img, i.prevSPath_str, void 0, !0, i.useHEX, i.nBC, i.sBC)), r.prevButton_do.addListener(FWDUVPSimpleButton.SHOW_TOOLTIP, r.prevButtonShowTooltipHandler), r.prevButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, r.prevButtonOnMouseUpHandler), r.buttons_ar.push(r.prevButton_do), r.controllBar_do.addChild(r.prevButton_do)
            }, r.prevButtonShowTooltipHandler = function (e) {
                r.showToolTip(r.prevButton_do, r.prevButtonToolTip_do, e.e)
            }, r.prevButtonOnMouseUpHandler = function () {
                r.dispatchEvent(t.PLAY_PREV_VIDEO)
            }, r.setupNextButton = function () {
                r.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), r.nextButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-FF-right'></span>", void 0, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), r.nextButton_do = new FWDUVPSimpleButton(r.nextN_img, i.nextSPath_str, void 0, !0, i.useHEX, i.nBC, i.sBC)), r.nextButton_do.addListener(FWDUVPSimpleButton.SHOW_TOOLTIP, r.nextButtonShowTooltipHandler), r.nextButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, r.nextButtonOnMouseUpHandler), r.buttons_ar.push(r.nextButton_do), r.controllBar_do.addChild(r.nextButton_do)
            }, r.nextButtonShowTooltipHandler = function (e) {
                r.showToolTip(r.nextButton_do, r.nextButtonToolTip_do, e.e)
            }, r.nextButtonOnMouseUpHandler = function () {
                r.dispatchEvent(t.PLAY_NEXT_VIDEO)
            }, r.setupShuffleButton = function () {
                r.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), r.shuffleButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-shuffle'></span>", void 0, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), r.shuffleButton_do = new FWDUVPSimpleButton(r.shuffleN_img, i.shufflePathS_str, void 0, !0, i.useHEX, i.nBC, i.sBC)), r.shuffleButton_do.addListener(FWDUVPSimpleButton.SHOW_TOOLTIP, r.shuffleButtonShowToolTipHandler), r.shuffleButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, r.shuffleButtonOnMouseUpHandler), r.buttons_ar.push(r.shuffleButton_do), r.controllBar_do.addChild(r.shuffleButton_do), !r.loop_bl && r.shuffle_bl && r.setShuffleButtonState("selected")
            }, r.shuffleButtonShowToolTipHandler = function (e) {
                r.showToolTip(r.shuffleButton_do, r.shuffleButtonToolTip_do, e.e)
            }, r.shuffleButtonOnMouseUpHandler = function () {
                r.shuffleButton_do.isSelectedFinal_bl ? r.dispatchEvent(t.DISABLE_SHUFFLE) : r.dispatchEvent(t.ENABLE_SHUFFLE)
            }, r.setShuffleButtonState = function (e) {
                r.shuffleButton_do && ("selected" == e ? r.shuffleButton_do.setSelected() : "unselected" == e && r.shuffleButton_do.setUnselected())
            }, r.setupLoopButton = function () {
                r.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), r.loopButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='fwdicon fwdicon-loop'></span>", void 0, "UVPMainButtonsNormalState", "UVPMainButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), r.loopButton_do = new FWDUVPSimpleButton(r.replayN_img, i.replaySPath_str, void 0, !0, i.useHEX, i.nBC, i.sBC)), r.loopButton_do.addListener(FWDUVPSimpleButton.SHOW_TOOLTIP, r.loopButtonShowTooltipHandler), r.loopButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, r.loopButtonOnMouseUpHandler), r.buttons_ar.push(r.loopButton_do), r.controllBar_do.addChild(r.loopButton_do), r.loop_bl && r.setLoopStateButton("selected")
            }, r.loopButtonShowTooltipHandler = function (e) {
                r.showToolTip(r.loopButton_do, r.loopButtonToolTip_do, e.e)
            }, r.loopButtonOnMouseUpHandler = function () {
                r.loopButton_do.isSelectedFinal_bl ? r.dispatchEvent(t.DISABLE_LOOP) : r.dispatchEvent(t.ENABLE_LOOP)
            }, r.setLoopStateButton = function (e) {
                r.loopButton_do && ("selected" == e ? r.loopButton_do.setSelected() : "unselected" == e && r.loopButton_do.setUnselected())
            }, r.setupToolTips = function () {
                r.showNextAndPrevButtons_bl && (FWDUVPToolTip.setPrototype(), r.prevButtonToolTip_do = new FWDUVPToolTip(r.prevButton_do, i.toopTipBk_str, i.toopTipPointer_str, "previous video", i.buttonsToolTipFontColor_str, r.buttonsToolTipHideDelay), document.documentElement.appendChild(r.prevButtonToolTip_do.screen), FWDUVPToolTip.setPrototype(), r.nextButtonToolTip_do = new FWDUVPToolTip(r.nextButton_do, i.toopTipBk_str, i.toopTipPointer_str, "next video", i.buttonsToolTipFontColor_str, r.buttonsToolTipHideDelay), document.documentElement.appendChild(r.nextButtonToolTip_do.screen)), r.showShuffleButton_bl && (FWDUVPToolTip.setPrototype(), r.shuffleButtonToolTip_do = new FWDUVPToolTip(r.shuffleButton_do, i.toopTipBk_str, i.toopTipPointer_str, "shuffle", i.buttonsToolTipFontColor_str, r.buttonsToolTipHideDelay), document.documentElement.appendChild(r.shuffleButtonToolTip_do.screen)), r.showLoopButton_bl && (FWDUVPToolTip.setPrototype(), r.loopButtonToolTip_do = new FWDUVPToolTip(r.loopButton_do, i.toopTipBk_str, i.toopTipPointer_str, "loop", i.buttonsToolTipFontColor_str, r.buttonsToolTipHideDelay), document.documentElement.appendChild(r.loopButtonToolTip_do.screen))
            }, r.showToolTip = function (e, t, o) {
                var s, n, i, a;
                r.showButtonsToolTip_bl && (s = FWDUVPUtils.getViewportSize(), FWDUVPUtils.getViewportMouseCoordinates(o), i = e.screen.offsetWidth < 3 ? (n = parseInt(100 * e.getGlobalX() + e.w / 2 - t.w / 2), parseInt(100 * e.getGlobalY() - t.h - 8)) : (n = parseInt(e.getGlobalX() + e.w / 2 - t.w / 2), parseInt(e.getGlobalY() - t.h - 8)), n < (a = 0) ? (a = n, n = 0) : n + t.w > s.w && (n += -1 * (a = -1 * (s.w - (n + t.w)))), t.positionPointer(a, !1), t.setX(n), t.setY(i), t.show())
            }, r.setupThumbnails = function () {
                var e;
                r.totalThumbs = r.playlist_ar.length, r.thumbs_ar = [];
                var t = i.thumbnailNormalBackgroundColor_str,
                    o = i.thumbnailHoverBackgroundColor_str,
                    s = i.thumbnailDisabledBackgroundColor_str;
                a.isWhite && (t = "#FFFFFF", o = s = "#EEEEEE");
                for (var n = 0; n < r.totalThumbs; n++) FWDUVPPlaylistThumb.setPrototype(), e = new FWDUVPPlaylistThumb(r, n, i.playlistThumbnailsBkPath_str, t, o, s, r.thumbImageW, r.thumbImageH, r.thumbInPadding, r.playlist_ar[n].title, r.playlist_ar[n].titleText, r.showThumbnail_bl), (r.thumbs_ar[n] = e).addListener(FWDUVPPlaylistThumb.MOUSE_UP, r.thumbMouseUpHandler), r.thumbsHolder_do.addChild(e)
            }, r.thumbMouseUpHandler = function (e) {
                r.disableThumbs_bl || (r.disableForAWhileAfterThumbClick_bl = !0, clearTimeout(r.disableForAWhileAfterThumbClickId_to), r.disableForAWhileAfterThumbClickId_to = setTimeout(function () {
                    r.disableForAWhileAfterThumbClick_bl = !1
                }, 200), r.dispatchEvent(t.THUMB_MOUSE_UP, {
                    id: e.id
                }))
            }, r.loadImages = function () {
                r.playlist_ar[r.countLoadedThumbs] && (r.image_img && (r.image_img.onload = null, r.image_img.onerror = null), r.image_img = new Image, r.image_img.onerror = r.onImageLoadError, r.image_img.onload = r.onImageLoadComplete, r.image_img.src = r.playlist_ar[r.countLoadedThumbs].thumbSource)
            }, r.onImageLoadError = function (e) {}, r.onImageLoadComplete = function (e) {
                r.thumbs_ar[r.countLoadedThumbs].setImage(r.image_img), r.countLoadedThumbs++, r.loadWithDelayId_to = setTimeout(r.loadImages, 40)
            }, r.checkThumbsState = function () {
                if (r.thumbs_ar)
                    for (var e, t = 0; t < r.totalThumbs; t++) e = r.thumbs_ar[t], t == r.curId ? e.disable() : e.enable()
            }, r.positionThumbs = function (e) {
                if (r.thumbs_ar) {
                    var t, o, s = r.spaceBetweenThumbnails,
                        n = [].concat(r.thumbs_ar);
                    if (r.isSearched_bl = !1, r.input_do && "search" != (o = r.input_do.screen.value.toLowerCase()))
                        for (var i = 0; i < n.length; i++) - 1 == (t = n[i]).htmlText_str.indexOf(o) && (FWDAnimation.killTweensOf(t), t.setX(-t.w - 20), n.splice(i, 1), i--);
                    var a = n.length;
                    r.totalThumbs != a && (r.isSearched_bl = !0);
                    for (i = 0; i < a; i++)(t = n[i]).thumbImageWidth = r.thumbImageW, t.thumbImageHeight = r.thumbImageH, t.finalW = r.sW, t.finalX = 0, t.finalY = i * (t.finalH + s), t.resizeAndPosition(e);
                    0 == a ? r.showNothingFound() : r.hideNothingFound(), t && (r.totalThumbsHeight = Math.max(0, a * (t.h + r.spaceBetweenThumbnails) - r.spaceBetweenThumbnails), r.totalThumbsHeight > r.sH - r.removeFromThumbsHolderHeight ? r.allowToScrollAndScrollBarIsActive_bl = !0 : r.allowToScrollAndScrollBarIsActive_bl = !1)
                }
            }, r.setupMobileScrollbar = function () {
                r.isMbl && (r.hasPointerEvent_bl ? r.mainThumbsHolder_do.screen.addEventListener("pointerdown", r.scrollBarTouchStartHandler) : r.mainThumbsHolder_do.screen.addEventListener("touchstart", r.scrollBarTouchStartHandler))
            }, r.scrollBarTouchStartHandler = function (e) {
                r.isScrollingOnMove_bl = !1, FWDAnimation.killTweensOf(r.thumbsHolder_do);
                var t = FWDUVPUtils.getViewportMouseCoordinates(e);
                r.isDragging_bl = !0, r.thumbsFinalY = r.lastThumbsFinalY = r.thumbsHolder_do.y, r.lastPresedY = r.lastPresedY2 = t.screenY, r.startToUpdateDrag(), r.hasPointerEvent_bl ? (a.addEventListener("pointerup", r.scrollBarTouchEndHandler), a.addEventListener("pointermove", r.scrollBarTouchMoveHandler)) : (a.addEventListener("touchend", r.scrollBarTouchEndHandler), a.addEventListener("touchmove", r.scrollBarTouchMoveHandler, {
                    passive: !1
                }))
            }, r.scrollBarTouchMoveHandler = function (e) {
                var t, o, s;
                e.preventDefault && e.preventDefault(), e.stopImmediatePropagation(), r.totalThumbsHeight < r.mainThumbsHolder_do.h || r.comboBox_do && r.comboBox_do.isShowed_bl || (o = (t = FWDUVPUtils.getViewportMouseCoordinates(e)).screenY - r.lastPresedY, r.thumbsFinalY += o, r.thumbsFinalY = Math.round(r.thumbsFinalY), s = t.screenY - r.lastPresedY2, r.lastPresedY = t.screenY, 5 < Math.abs(s) && n.showDisable(), FWDAnimation.killTweensOf(r.thumbsHolder_do), r.thumbsHolder_do.setY(r.thumbsFinalY))
            }, r.scrollBarTouchEndHandler = function (e) {
                r.isDragging_bl = !1, clearTimeout(r.disableOnMoveId_to), r.disableOnMoveId_to = setTimeout(function () {
                    n.hideDisable()
                }, 50), r.hasPointerEvent_bl ? (a.removeEventListener("pointerup", r.scrollBarTouchEndHandler), a.removeEventListener("pointermove", r.scrollBarTouchMoveHandler)) : (a.removeEventListener("touchend", r.scrollBarTouchEndHandler), a.removeEventListener("touchmove", r.scrollBarTouchMoveHandler))
            }, r.stopToUpdateDrag = function () {
                FWDAnimation.killTweensOf(r.thumbsHld_do), cancelAnimationFrame(r.updateMov_af)
            }, r.startToUpdateDrag = function () {
                r.stopToUpdateDrag(), r.updateDrag()
            }, r.updateDrag = function (e) {
                r.updateMov_af = requestAnimationFrame(r.updateDrag), r.isDragging_bl ? (r.vy = r.thumbsFinalY - r.lastThumbsFinalY, r.lastThumbsFinalY = r.thumbsFinalY, Math.abs(r.vy) < 20 && (r.vy = 0)) : (r.vy *= r.friction, r.thumbsFinalY += r.vy, r.mainThumbsHolder_do.h <= r.totalThumbsHeight && (0 < r.thumbsFinalY ? (r.vy2 = .3 * (0 - r.thumbsFinalY), r.vy *= r.friction, r.thumbsFinalY += r.vy2) : r.thumbsFinalY <= r.mainThumbsHolder_do.h - r.totalThumbsHeight && (r.vy2 = .3 * (r.mainThumbsHolder_do.h - r.totalThumbsHeight - r.thumbsFinalY), r.vy *= r.friction, r.thumbsFinalY += r.vy2)), r.thumbsFinalY = parseFloat(r.thumbsFinalY.toFixed(2)), r.prevThumbsFinalY == r.thumbsFinalY && (r.stopToUpdateDrag(), r.thumbsFinalY = Math.round(r.thumbsFinalY)), FWDAnimation.killTweensOf(r.thumbsHolder_do), r.thumbsHolder_do.setY(r.thumbsFinalY), r.prevThumbsFinalY = r.thumbsFinalY)
            }, r.setupScrollbar = function () {
                r.scrMainHolder_do = new FWDUVPDisplayObject("div"), r.scrMainHolder_do.setWidth(r.scrWidth), r.scrTrack_do = new FWDUVPDisplayObject("div"), r.scrTrack_do.setWidth(r.scrWidth), r.scrTrackTop_do = new FWDUVPDisplayObject("img"), r.scrTrackTop_do.setScreen(r.scrBkTop_img), r.scrTrackMiddle_do = new FWDUVPDisplayObject("div"), r.scrTrackMiddle_do.getStyle().background = "url('" + i.scrBkMiddlePath_str + "')", r.scrTrackMiddle_do.setWidth(r.scrWidth), r.scrTrackMiddle_do.setY(r.scrTrackTop_do.h);
                var e = new Image;
                e.src = i.scrBkBottomPath_str, r.scrTrackBottom_do = new FWDUVPDisplayObject("img"), r.scrTrackBottom_do.setScreen(e), r.scrTrackBottom_do.setWidth(r.scrTrackTop_do.w), r.scrTrackBottom_do.setHeight(r.scrTrackTop_do.h), r.scrHandler_do = new FWDUVPDisplayObject("div"), r.scrHandler_do.setWidth(r.scrWidth), r.scrHandlerTop_do = new FWDUVPDisplayObject("img"), r.useHEX ? (r.scrHandlerTop_do = new FWDUVPDisplayObject("div"), r.scrHandlerTop_do.setWidth(r.scrDragTop_img.width), r.scrHandlerTop_do.setHeight(r.scrDragTop_img.height), r.mainScrubberDragTop_canvas = FWDUVPUtils.getCanvasWithModifiedColor(r.scrDragTop_img, r.nBC).canvas, r.scrHandlerTop_do.screen.appendChild(r.mainScrubberDragTop_canvas)) : (r.scrHandlerTop_do = new FWDUVPDisplayObject("img"), r.scrHandlerTop_do.setScreen(r.scrDragTop_img)), r.scrHandlerMiddle_do = new FWDUVPDisplayObject("div"), r.middleImage = new Image, r.middleImage.src = i.scrDragMiddlePath_str, r.useHEX ? r.middleImage.onload = function () {
                    r.scrubberDragMiddle_canvas = FWDUVPUtils.getCanvasWithModifiedColor(r.middleImage, r.nBC, !0), r.scrubberDragImage_img = r.scrubberDragMiddle_canvas.image, r.scrHandlerMiddle_do.getStyle().background = "url('" + r.scrubberDragImage_img.src + "') repeat-y"
                } : r.scrHandlerMiddle_do.getStyle().background = "url('" + i.scrDragMiddlePath_str + "')", r.scrHandlerMiddle_do.setWidth(r.scrWidth), r.scrHandlerMiddle_do.setY(r.scrHandlerTop_do.h), r.scrHandlerBottom_do = new FWDUVPDisplayObject("div"), r.bottomImage = new Image, r.bottomImage.src = i.scrDragMiddlePath_str, r.useHEX ? r.bottomImage.onload = function () {
                    r.scrubberDragBottom_canvas = FWDUVPUtils.getCanvasWithModifiedColor(r.bottomImage, r.nBC, !0), r.scrubberDragBottomImage_img = r.scrubberDragBottom_canvas.image, r.scrHandlerBottom_do.getStyle().background = "url('" + r.scrubberDragBottomImage_img.src + "') repeat-y"
                } : r.scrHandlerBottom_do.getStyle().background = "url('" + i.scrDragBottomPath_str + "')", r.scrHandlerBottom_do.setWidth(r.scrWidth), r.scrHandlerBottom_do.setY(r.scrHandlerTop_do.h), r.scrHandlerBottom_do.setWidth(r.scrHandlerTop_do.w), r.scrHandlerBottom_do.setHeight(r.scrHandlerTop_do.h), r.useHEX ? (r.scrHandlerLinesN_do = new FWDUVPDisplayObject("div"), r.scrHandlerLinesN_do.setWidth(r.scrLinesN_img.width), r.scrHandlerLinesN_do.setHeight(r.scrLinesN_img.height), r.mainhandlerN_canvas = FWDUVPUtils.getCanvasWithModifiedColor(r.scrLinesN_img, r.sBC).canvas, r.scrHandlerLinesN_do.screen.appendChild(r.mainhandlerN_canvas)) : (r.scrHandlerLinesN_do = new FWDUVPDisplayObject("img"), r.scrHandlerLinesN_do.setScreen(r.scrLinesN_img)), r.scrHandlerLinesS_img = new Image, r.scrHandlerLinesS_img.src = i.scrLinesSPath_str, r.useHEX ? (r.scrHandlerLinesS_do = new FWDUVPDisplayObject("div"), r.scrHandlerLinesS_img.onload = function () {
                    r.scrHandlerLinesS_do.setWidth(r.scrHandlerLinesN_do.w), r.scrHandlerLinesS_do.setHeight(r.scrHandlerLinesN_do.h), r.scrubberLines_s_canvas = FWDUVPUtils.getCanvasWithModifiedColor(r.scrHandlerLinesS_img, r.sBC, !0), r.scrubbelinesSImage_img = r.scrubberLines_s_canvas.image, r.scrHandlerLinesS_do.getStyle().background = "url('" + r.scrubbelinesSImage_img.src + "') repeat-y"
                }) : (r.scrHandlerLinesS_do = new FWDUVPDisplayObject("img"), r.scrHandlerLinesS_do.setScreen(r.scrHandlerLinesS_img), r.scrHandlerLinesS_do.setWidth(r.scrHandlerLinesN_do.w), r.scrHandlerLinesS_do.setHeight(r.scrHandlerLinesN_do.h)), r.scrHandlerLinesS_do.setAlpha(0), r.scrHandlerLines_do = new FWDUVPDisplayObject("div"), r.scrHandlerLines_do.setWidth(r.scrHandlerLinesN_do.w), r.scrHandlerLines_do.setHeight(r.scrHandlerLinesN_do.h), r.scrTrack_do.addChild(r.scrTrackTop_do), r.scrTrack_do.addChild(r.scrTrackMiddle_do), r.scrTrack_do.addChild(r.scrTrackBottom_do), r.scrHandler_do.addChild(r.scrHandlerTop_do), r.scrHandler_do.addChild(r.scrHandlerMiddle_do), r.scrHandler_do.addChild(r.scrHandlerBottom_do), r.scrHandlerLines_do.addChild(r.scrHandlerLinesN_do), r.scrHandlerLines_do.addChild(r.scrHandlerLinesS_do), r.scrMainHolder_do.addChild(r.scrTrack_do), r.scrMainHolder_do.addChild(r.scrHandler_do), r.scrMainHolder_do.addChild(r.scrHandlerLines_do), r.mainHld.addChild(r.scrMainHolder_do), r.scrHandler_do.screen.addEventListener("mouseover", r.scrollBarHandlerOnMouseOver), r.scrHandler_do.screen.addEventListener("mouseout", r.scrollBarHandlerOnMouseOut), r.scrHandler_do.screen.addEventListener("mousedown", r.scrollBarHandlerOnMouseDown), r.scrHandlerLines_do.screen.addEventListener("mouseover", r.scrollBarHandlerOnMouseOver), r.scrHandlerLines_do.screen.addEventListener("mouseout", r.scrollBarHandlerOnMouseOut), r.scrHandlerLines_do.screen.addEventListener("mousedown", r.scrollBarHandlerOnMouseDown), r.addScrOnMM_bl && a.addEventListener("mousemove", r.scrOnMM)
            }, r.scrOnMM = function (e) {
                var t = FWDUVPUtils.getViewportMouseCoordinates(e);
                FWDUVPUtils.hitTest(r.mainThumbsHolder_do.screen, t.screenX, t.screenY) ? (r.isDragging_bl = !0, r.scrollBarHandlerMoveHandler(e)) : r.isDragging_bl = !1
            }, r.scrollBarHandlerOnMouseOver = function (e) {
                r.allowToScrollAndScrollBarIsActive_bl && !r.addScrOnMM_bl && (FWDAnimation.killTweensOf(r.scrHandlerLinesN_do), FWDAnimation.killTweensOf(r.scrHandlerLinesS_do), FWDAnimation.to(r.scrHandlerLinesN_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                }), FWDAnimation.to(r.scrHandlerLinesS_do, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }))
            }, r.scrollBarHandlerOnMouseOut = function (e) {
                !r.isDragging_bl && r.allowToScrollAndScrollBarIsActive_bl && (FWDAnimation.killTweensOf(r.scrHandlerLinesN_do), FWDAnimation.killTweensOf(r.scrHandlerLinesS_do), FWDAnimation.to(r.scrHandlerLinesN_do, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }), FWDAnimation.to(r.scrHandlerLinesS_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                }))
            }, r.scrollBarHandlerOnMouseDown = function (e) {
                var t;
                r.allowToScrollAndScrollBarIsActive_bl && !r.addScrOnMM_bl && (t = FWDUVPUtils.getViewportMouseCoordinates(e), r.isDragging_bl = !0, r.yPositionOnPress = r.scrHandler_do.y, r.lastPresedY = t.screenY, FWDAnimation.killTweensOf(r.scrHandler_do), n.showDisable(), a.addEventListener && (a.addEventListener("mousemove", r.scrollBarHandlerMoveHandler), a.addEventListener("mouseup", r.scrollBarHandlerEndHandler)))
            }, r.scrollBarHandlerMoveHandler = function (e) {
                e.preventDefault && e.preventDefault();
                var t = FWDUVPUtils.getViewportMouseCoordinates(e),
                    o = r.scrollBarHandlerFinalY + parseInt((r.scrHandler_do.h - r.scrHandlerLines_do.h) / 2);
                r.addScrOnMM_bl ? r.scrollBarHandlerFinalY = Math.round(t.screenY - r.mainThumbsHolder_do.getGlobalY() - r.scrHandler_do.h / 2) : r.scrollBarHandlerFinalY = Math.round(r.yPositionOnPress + t.screenY - r.lastPresedY), r.scrollBarHandlerFinalY >= r.scrTrack_do.h - r.scrHandler_do.h ? r.scrollBarHandlerFinalY = r.scrTrack_do.h - r.scrHandler_do.h : r.scrollBarHandlerFinalY <= 0 && (r.scrollBarHandlerFinalY = 0), r.scrHandler_do.setY(r.scrollBarHandlerFinalY), FWDAnimation.killTweensOf(r.scrHandler_do), FWDAnimation.to(r.scrHandlerLines_do, .8, {
                    y: o,
                    ease: Quart.easeOut
                }), r.updateScrollBarHandlerAndContent(!0)
            }, r.scrollBarHandlerEndHandler = function (e) {
                var t = FWDUVPUtils.getViewportMouseCoordinates(e);
                r.isDragging_bl = !1, FWDUVPUtils.hitTest(r.scrHandler_do.screen, t.screenX, t.screenY) || (FWDAnimation.killTweensOf(r.scrHandlerLinesN_do), FWDAnimation.killTweensOf(r.scrHandlerLinesS_do), FWDAnimation.to(r.scrHandlerLinesN_do, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }), FWDAnimation.to(r.scrHandlerLinesS_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                })), n.hideDisable(), FWDAnimation.killTweensOf(r.scrHandler_do), FWDAnimation.to(r.scrHandler_do, .4, {
                    y: r.scrollBarHandlerFinalY,
                    ease: Quart.easeOut
                }), a.removeEventListener && (a.removeEventListener("mousemove", r.scrollBarHandlerMoveHandler), a.removeEventListener("mouseup", r.scrollBarHandlerEndHandler))
            }, r.updateScrollBarSizeActiveAndDeactivate = function () {
                r.disableForAWhileAfterThumbClick_bl || (r.allowToScrollAndScrollBarIsActive_bl ? (r.allowToScrollAndScrollBarIsActive_bl = !0, r.scrMainHolder_do.setX(r.sW - r.scrMainHolder_do.w), r.scrMainHolder_do.setHeight(r.sH - r.removeFromThumbsHolderHeight), r.scrTrack_do.setHeight(r.scrMainHolder_do.h), r.scrTrackMiddle_do.setHeight(r.scrTrack_do.h - 2 * r.scrTrackTop_do.h), r.scrTrackBottom_do.setY(r.scrTrackMiddle_do.y + r.scrTrackMiddle_do.h), r.scrMainHolder_do.setAlpha(1), r.addScrOnMM_bl || (r.scrHandler_do.setButtonMode(!0), r.scrHandlerLines_do.setButtonMode(!0))) : (r.allowToScrollAndScrollBarIsActive_bl = !1, r.scrMainHolder_do.setX(r.sW - r.scrMainHolder_do.w), r.scrMainHolder_do.setHeight(r.sH - r.removeFromThumbsHolderHeight), r.scrTrack_do.setHeight(r.scrMainHolder_do.h), r.scrTrackMiddle_do.setHeight(r.scrTrack_do.h - 2 * r.scrTrackTop_do.h), r.scrTrackBottom_do.setY(r.scrTrackMiddle_do.y + r.scrTrackMiddle_do.h), r.scrMainHolder_do.setAlpha(.5), r.scrHandler_do.setY(0), r.scrHandler_do.setButtonMode(!1), r.scrHandlerLines_do.setButtonMode(!1)), r.scrHandler_do.setHeight(Math.max(120, Math.round(Math.min(1, r.scrMainHolder_do.h / r.totalThumbsHeight) * r.scrMainHolder_do.h))), r.scrHandlerMiddle_do.setHeight(r.scrHandler_do.h - 2 * r.scrHandlerTop_do.h), r.scrHandlerBottom_do.setY(r.scrHandlerMiddle_do.y + r.scrHandlerMiddle_do.h), FWDAnimation.killTweensOf(r.scrHandlerLines_do), r.scrHandlerLines_do.setY(r.scrollBarHandlerFinalY + parseInt((r.scrHandler_do.h - r.scrHandlerLines_do.h) / 2)), r.scrHandlerBottom_do.setY(r.scrHandler_do.h - r.scrHandlerBottom_do.h))
            }, r.updateScrollBarHandlerAndContent = function (e, t) {
                var o;
                r.isMbl && r.disableForAWhileAfterThumbClick_bl || (r.allowToScrollAndScrollBarIsActive_bl || t) && (o = 0, r.isDragging_bl && !r.isMbl ? ("Infinity" == (o = r.scrollBarHandlerFinalY / (r.scrMainHolder_do.h - r.scrHandler_do.h)) ? o = 0 : 1 <= o && (scrollPercent = 1), r.thumbsFinalY = -1 * Math.round(o * (r.totalThumbsHeight - r.mainThumbsHolder_do.h))) : (o = r.isSearched_bl ? r.percentScrolled = 0 : r.curId / (r.totalThumbs - 1), r.thumbsFinalY = Math.min(0, -1 * Math.round(o * (r.totalThumbsHeight - r.mainThumbsHolder_do.h))), r.scrMainHolder_do && (r.scrollBarHandlerFinalY = Math.round((r.scrMainHolder_do.h - r.scrHandler_do.h) * o), r.scrollBarHandlerFinalY < 0 ? r.scrollBarHandlerFinalY = 0 : r.scrollBarHandlerFinalY > r.scrMainHolder_do.h - r.scrHandler_do.h - 1 && (r.scrollBarHandlerFinalY = r.scrMainHolder_do.h - r.scrHandler_do.h - 1), FWDAnimation.killTweensOf(r.scrHandler_do), FWDAnimation.killTweensOf(r.scrHandlerLines_do), e ? (FWDAnimation.to(r.scrHandler_do, .4, {
                    y: r.scrollBarHandlerFinalY,
                    ease: Quart.easeOut
                }), FWDAnimation.to(r.scrHandlerLines_do, .8, {
                    y: r.scrollBarHandlerFinalY + parseInt((r.scrHandler_do.h - r.scrHandlerLinesN_do.h) / 2),
                    ease: Quart.easeOut
                })) : (r.scrHandler_do.setY(r.scrollBarHandlerFinalY), r.scrHandlerLines_do.setY(r.scrollBarHandlerFinalY + parseInt((r.scrHandler_do.h - r.scrHandlerLinesN_do.h) / 2))))), r.lastThumbnailFinalY != r.thumbsFinalY && (FWDAnimation.killTweensOf(r.thumbsHolder_do), e ? FWDAnimation.to(r.thumbsHolder_do, .5, {
                    y: r.thumbsFinalY,
                    ease: Quart.easeOut
                }) : r.thumbsHolder_do.setY(r.thumbsFinalY)), r.lastThumbnailFinalY = r.thumbsFinalY)
            }, r.addMouseWheelSupport = function () {
                r.screen.addEventListener && (r.screen.addEventListener("DOMMouseScroll", r.mouseWheelHandler), r.screen.addEventListener("mousewheel", r.mouseWheelHandler))
            }, r.mouseWheelHandler = function (e) {
                if (e.preventDefault && e.preventDefault(), r.disableMouseWheel_bl || r.isDragging_bl) return !1;
                if (!r.comboBox_do || !r.comboBox_do.isShowed_bl) {
                    var t = e.detail || e.wheelDelta;
                    e.wheelDelta && (t *= -1), 0 < t ? r.scrollBarHandlerFinalY += Math.round(160 * r.scollbarSpeedSensitivity * (r.mainThumbsHolder_do.h / r.totalThumbsHeight)) : t < 0 && (r.scrollBarHandlerFinalY -= Math.round(160 * r.scollbarSpeedSensitivity * (r.mainThumbsHolder_do.h / r.totalThumbsHeight))), r.scrollBarHandlerFinalY >= r.scrTrack_do.h - r.scrHandler_do.h ? r.scrollBarHandlerFinalY = r.scrTrack_do.h - r.scrHandler_do.h : r.scrollBarHandlerFinalY <= 0 && (r.scrollBarHandlerFinalY = 0);
                    var o = r.scrollBarHandlerFinalY + parseInt((r.scrHandler_do.h - r.scrHandlerLines_do.h) / 2);
                    if (FWDAnimation.killTweensOf(r.scrHandler_do), FWDAnimation.killTweensOf(r.scrHandlerLines_do), FWDAnimation.to(r.scrHandlerLines_do, .8, {
                            y: o,
                            ease: Quart.easeOut
                        }), FWDAnimation.to(r.scrHandler_do, .5, {
                            y: r.scrollBarHandlerFinalY,
                            ease: Quart.easeOut
                        }), r.isDragging_bl = !0, r.updateScrollBarHandlerAndContent(!0), r.isDragging_bl = !1, !e.preventDefault) return !1;
                    e.preventDefault()
                }
            }, r.hideAndShow = function (e) {
                "bottom" == r.position_str ? (r.mainHld.setY(-r.sH), FWDAnimation.to(r.mainHld, .8, {
                    y: 0,
                    delay: .3,
                    ease: Expo.easeInOut
                })) : (r.mainHld.setX(-r.sW - 2), FWDAnimation.to(r.mainHld, .8, {
                    x: 0,
                    delay: .3,
                    ease: Expo.easeInOut
                }), r.ec && (r.positionEc(), r.ec.setAlpha(0), FWDAnimation.to(r.ec, .8, {
                    alpha: 1,
                    delay: .3,
                    ease: Expo.easeInOut
                })))
            }, r.hide = function (e) {
                r.isShowed_bl = !1, e ? "bottom" == r.position_str && FWDAnimation.to(r.mainHld, .8, {
                    y: -r.sH,
                    ease: Expo.easeInOut
                }) : (FWDAnimation.killTweensOf(r.mainHld), "bottom" == r.position_str && r.mainHld.setY(-r.sH))
            }, r.show = function (e) {
                r.isShowed_bl = !0, FWDAnimation.isTweening(r.mainHld) || r.hide(!1), e ? "bottom" == r.position_str ? FWDAnimation.to(r.mainHld, .8, {
                    y: 0,
                    ease: Expo.easeInOut
                }) : r.mainHld.setY(0) : (FWDAnimation.killTweensOf(r.mainHld), r.mainHld.setX(0), r.mainHld.setY(0), clearTimeout(r.disableThumbsId_to), r.disableThumbsId_to = setTimeout(function () {
                    r.disableThumbs_bl = !1
                }, 200), r.disableThumbs_bl = !0)
            }, r.init()
        };
        t.setPrototype = function () {
            t.prototype = new FWDUVPDisplayObject("div", "absolute", "visible")
        }, t.THUMB_MOUSE_UP = "thumbMouseOut", t.PLAY_PREV_VIDEO = "playPrevVideo", t.PLAY_NEXT_VIDEO = "playNextVideo", t.DISABLE_LOOP = "disableLoop", t.ENABLE_LOOP = "enableLoop", t.DISABLE_SHUFFLE = "disableShuffle", t.ENABLE_SHUFFLE = "enableShuffle", t.CHANGE_PLAYLIST = "changePlaylist", t.prototype = null, a.FWDUVPPlaylist = t
    }(window),
    function (e) {
        var p = function (n, e, t, o, s, i, a, r, l, d, _, u) {
            var c = this;
            p.prototype;
            c.mainImgHld = null, c.txt = null, c.backgroundImagePath_str = t, c.thumbnailNormalBackgroundColor_str = o, c.thumbnailHoverBackgroundColor_str = s, c.thumbnailDisabledBackgroundColor_str = i, c.htmlContent_str = d, c.htmlText_str = _.toLowerCase(), c.curStt = "none", c.id = e, c.padding = l, c.imageOriginalW, c.imageOriginalH, c.finalX, c.finalY, c.thumbImageWidth = a, c.thumbImageHeight = r, c.finalW, c.finalH = 2 * c.padding + c.thumbImageHeight, c.imageFinalX, c.imageFinalY, c.imageFinalW, c.imageFinalH, c.mouseX, c.mouseY, c.showId_to, c.disableForAWhileId_to, c.isDark = !0, -1 == t.indexOf("dark") && (c.isDark = !1), c.hasImage_bl = !1, c.isSelected_bl = !1, c.isDisabled_bl = !1, c.disableForAWhile_bl = !1, c.hasToolTipShowed_bl = !1, c.hasCanvas_bl = FWDUVPlayer.hasCanvas, c.isMbl = FWDUVPUtils.isMobile, c.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, c.hasDispatchedOverEvent_bl = !1, c.showThumbnail_bl = u, c.init = function () {
                c.setupMainContainers(), c.setButtonMode(!0), c.setNormalState(), c.hasPointerEvent_bl ? (c.screen.addEventListener("pointerover", c.onMouseOver), c.screen.addEventListener("pointerout", c.onMouseOut), c.screen.addEventListener("pointerup", c.onMouseUp)) : c.screen.addEventListener && (c.screen.addEventListener("mouseover", c.onMouseOver), c.screen.addEventListener("mouseout", c.onMouseOut), c.screen.addEventListener("click", c.onMouseUp))
            }, c.onMouseUp = function (e) {
                c.isDisabled_bl || 2 == e.button || (e.preventDefault && e.preventDefault(), c.dispatchEvent(p.MOUSE_UP, {
                    id: c.id
                }))
            }, c.onMouseOver = function (e) {
                if (!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE) {
                    if (c.isDisabled_bl) return;
                    c.setSelectedState(!0)
                }
            }, c.onMouseOut = function (e) {
                if (!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE) {
                    if (c.isDisabled_bl) return;
                    c.setNormalState(!0)
                }
            }, c.setupMainContainers = function () {
                c.mainImgHld = new FWDUVPDisplayObject("div"), c.mainImgHld.screen.className = "fwduvp-playlist-thumbnail", c.mainImgHld.getStyle().background = "url('" + c.backgroundImagePath_str + "')", c.mainImgHld.setX(c.padding), c.mainImgHld.setY(c.padding), c.mainImgHld.setWidth(c.thumbImageWidth), c.mainImgHld.setHeight(c.thumbImageHeight), c.imageHolder_do = new FWDUVPDisplayObject("div"), c.txt = new FWDUVPDisplayObject("div");
                var e = "fwduvp-playlist-thumbnail-white-text";
                c.isDark && (e = "fwduvp-playlist-thumbnail-dark-text"), c.txt.screen.className = e, c.txt.hasTransform3d_bl = !1, c.txt.hasTransform2d_bl = !1, c.txt.setHeight(c.finalH - 6), c.txt.setBackfaceVisibility(), c.txt.getStyle().fontFamily = "Arial", c.txt.getStyle().fontSize = "12px", c.txt.getStyle().color = c.fontColor_str, c.txt.getStyle().fontSmoothing = "antialiased", c.txt.getStyle().webkitFontSmoothing = "antialiased", c.txt.getStyle().textRendering = "optimizeLegibility", c.slTitle = c.txt.screen.className, c.showThumbnail_bl ? c.txt.setX(2 * c.padding + c.thumbImageWidth + 4) : c.txt.setX(2 * c.padding), c.txt.setInnerHTML(c.htmlContent_str), n.showOnlyThmb || c.addChild(c.txt), c.dumy_do = new FWDUVPDisplayObject("div"), c.dumy_do.getStyle().width = "100%", c.dumy_do.getStyle().height = "100%", FWDUVPUtils.isIE && (c.dumy_do.setBkColor("#FF0000"), c.dumy_do.setAlpha(.01)), c.showThumbnail_bl && c.addChild(c.mainImgHld), c.mainImgHld.addChild(c.imageHolder_do), c.addChild(c.dumy_do)
            }, c.updateText = function (e) {
                try {
                    c.htmlContent_str = e, c.txt.setInnerHTML(c.htmlContent_str)
                } catch (e) {}
            }, c.setImage = function (e) {
                var t;
                c.normalImage_do = new FWDUVPDisplayObject("img"), c.normalImage_do.setScreen(e), c.imageOriginalW = c.normalImage_do.w, c.imageOriginalH = c.normalImage_do.h, c.resizeImage(), c.imageHolder_do.setX(parseInt(c.thumbImageWidth / 2)), c.imageHolder_do.setY(parseInt(c.thumbImageHeight / 2)), c.imageHolder_do.setWidth(0), c.imageHolder_do.setHeight(0), c.normalImage_do.setX(-parseInt(c.normalImage_do.w / 2)), c.normalImage_do.setY(-parseInt(c.normalImage_do.h / 2)), FWDAnimation.to(c.imageHolder_do, .8, {
                    x: 0,
                    y: 0,
                    w: c.thumbImageWidth,
                    h: c.thumbImageHeight,
                    ease: Expo.easeInOut
                }), c.normalImage_do.setAlpha(0), c.isMbl ? (t = c.id == n.curId ? .3 : 1, FWDAnimation.to(c.normalImage_do, .8, {
                    alpha: t,
                    x: c.imageFinalX,
                    y: c.imageFinalY,
                    ease: Expo.easeInOut
                })) : FWDAnimation.to(c.normalImage_do, .8, {
                    alpha: 1,
                    x: c.imageFinalX,
                    y: c.imageFinalY,
                    ease: Expo.easeInOut
                }), c.imageHolder_do.addChild(c.normalImage_do), c.hasImage_bl = !0
            }, c.resizeAndPosition = function (e) {
                c.showThumbnail_bl ? c.txt.setWidth(c.finalW - (2 * c.padding + c.thumbImageWidth) - 16) : c.txt.setWidth(c.finalW - 2 * c.padding - 16), c.setWidth(c.finalW), c.setHeight(c.finalH), e ? FWDAnimation.to(c, .6, {
                    x: c.finalX,
                    y: c.finalY,
                    ease: Expo.easeInOut
                }) : (FWDAnimation.killTweensOf(c), c.setX(c.finalX), c.setY(c.finalY)), c.resizeImage()
            }, c.resizeImage = function (e) {
                var t, o, s;
                n.showOnlyThmb && (c.mainImgHld.setWidth(c.thumbImageWidth), c.mainImgHld.setHeight(c.thumbImageHeight), c.imageHolder_do.setWidth(c.thumbImageWidth), c.imageHolder_do.setHeight(c.thumbImageHeight)), c.normalImage_do && (c.isMbl ? 1 == c.normalImage_do.alpha || c.isDisabled_bl || c.normalImage_do.setAlpha(1) : 1 == c.imageHolder_do.alpha || c.isDisabled_bl || c.imageHolder_do.setAlpha(1), t = c.thumbImageWidth / c.imageOriginalW, s = (o = c.thumbImageHeight / c.imageOriginalH) <= t ? t : o, c.imageFinalW = Math.ceil(s * c.imageOriginalW), c.imageFinalH = Math.ceil(s * c.imageOriginalH), c.imageFinalX = Math.round((c.thumbImageWidth - c.imageFinalW) / 2), c.imageFinalY = Math.round((c.thumbImageHeight - c.imageFinalH) / 2), c.normalImage_do.setX(c.imageFinalX), c.normalImage_do.setY(c.imageFinalY), c.normalImage_do.setWidth(c.imageFinalW), c.normalImage_do.setHeight(c.imageFinalH))
            }, c.setNormalState = function (e) {
                "normal" != c.curStt && (c.curStt = "normal", c.slTitle && (c.txt.screen.className = c.slTitle), e ? FWDAnimation.to(c.screen, .8, {
                    css: {
                        backgroundColor: c.thumbnailNormalBackgroundColor_str
                    },
                    ease: Expo.easeOut
                }) : (FWDAnimation.killTweensOf(c.screen), c.getStyle().backgroundColor = c.thumbnailNormalBackgroundColor_str))
            }, c.setSelectedState = function (e) {
                "selected" != c.curStt && (c.curStt = "selected", c.setTitleSelectedClass(), e ? FWDAnimation.to(c.screen, .8, {
                    css: {
                        backgroundColor: c.thumbnailHoverBackgroundColor_str
                    },
                    ease: Expo.easeOut
                }) : (FWDAnimation.killTweensOf(c.screen), c.getStyle().backgroundColor = c.thumbnailNormalBackgroundColor_str))
            }, c.setDisabledState = function (e) {
                "disabled" != c.curStt && (c.curStt = "disabled", c.setTitleSelectedClass(), e ? FWDAnimation.to(c.screen, .8, {
                    css: {
                        backgroundColor: c.thumbnailDisabledBackgroundColor_str
                    },
                    ease: Expo.easeOut
                }) : (FWDAnimation.killTweensOf(c.screen), c.getStyle().backgroundColor = c.thumbnailNormalBackgroundColor_str))
            }, c.setTitleSelectedClass = function () {
                c.slTitle && (c.txt.screen.className = c.slTitle + " active")
            }, c.enable = function () {
                c.isDisabled_bl && (c.isDisabled_bl = !1, c.setButtonMode(!0), c.setNormalState(!0), c.isMbl ? c.normalImage_do && c.normalImage_do.setAlpha(1) : FWDAnimation.to(c.imageHolder_do, .6, {
                    alpha: 1
                }))
            }, c.disable = function () {
                c.isDisabled_bl || (c.disableForAWhile_bl = !0, clearTimeout(c.disableForAWhileId_to), c.disableForAWhileId_to = setTimeout(function () {
                    c.disableForAWhile_bl = !1
                }, 200), c.isDisabled_bl = !0, c.setButtonMode(!1), c.setDisabledState(!0), c.isMbl ? c.normalImage_do && c.normalImage_do.setAlpha(.3) : FWDAnimation.to(c.imageHolder_do, .6, {
                    alpha: .3
                }))
            }, c.destroy = function () {
                FWDAnimation.killTweensOf(c), c.normalImage_do && (FWDAnimation.killTweensOf(c.normalImage_do), c.normalImage_do.destroy()), FWDAnimation.killTweensOf(c.imageHolder_do), c.imageHolder_do.destroy(), c.dumy_do.destroy(), c.txt.destroy(), c.backgroundImagePath_str = t, c.imageHolder_do = null, c.normalImage_do = null, c.dumy_do = null, c.txt = null, c.htmlContent_str = null, c.htmlText_str = null, c.curStt = null
            }, c.init()
        };
        p.setPrototype = function () {
            p.prototype = new FWDUVPDisplayObject("div")
        }, p.SHOW_TOOL_TIP = "showToolTip", p.HIDE_TOOL_TIP = "hideToolTip", p.MOUSE_UP = "onMouseUp", p.prototype = null, e.FWDUVPPlaylistThumb = p
    }(window),
    function (e) {
        var a = function (e, t, o, s, n) {
            var i = this;
            a.prototype;
            i.buttonRef_do = null, i.bkPath_str = e, i.pointerPath_str = t, i.text_do = null, i.pointer_do = null, i.fontColor_str = o, i.position_str = s, i.id = -1, "bottom" == i.position_str ? (i.pointerWidth = 7, i.pointerHeight = 4) : (i.pointerWidth = 4, i.pointerHeight = 7), i.maxWidth = n, i.showWithDelayId_to, i.isMbl = FWDUVPUtils.isMobile, i.isShowed_bl = !0, i.init = function () {
                i.setOverflow("visible"), i.setupMainContainers(), i.hide(), i.getStyle().background = "url('" + i.bkPath_str + "')", i.getStyle().zIndex = 9999999999999
            }, i.setupMainContainers = function () {
                i.text_do = new FWDUVPDisplayObject("div"), i.text_do.hasTransform3d_bl = !1, i.text_do.hasTransform2d_bl = !1, i.text_do.setBackfaceVisibility(), i.text_do.setDisplay("inline-block"), i.text_do.getStyle().fontFamily = "Arial", i.text_do.getStyle().fontSize = "12px", i.text_do.getStyle().color = i.fontColor_str, i.text_do.getStyle().fontSmoothing = "antialiased", i.text_do.getStyle().webkitFontSmoothing = "antialiased", i.text_do.getStyle().textRendering = "optimizeLegibility", i.text_do.getStyle().lineHeight = "16px", i.text_do.getStyle().padding = "6px", i.text_do.getStyle().paddingTop = "4px", i.text_do.getStyle().paddingBottom = "4px", i.text_do.getStyle().textAlign = "center", i.addChild(i.text_do);
                var e = new Image;
                e.src = i.pointerPath_str, i.pointer_do = new FWDUVPDisplayObject("img"), i.pointer_do.setScreen(e), i.pointer_do.setWidth(i.pointerWidth), i.pointer_do.setHeight(i.pointerHeight), i.addChild(i.pointer_do)
            }, i.setLabel = function (e, t) {
                i.id != t && (i.setVisible(!1), i.text_do.getStyle().whiteSpace = "normal", i.setWidth(i.maxWidth), i.text_do.setInnerHTML(e)), setTimeout(function () {
                    var e;
                    null != i && ((e = (e = i.text_do.screen.getBoundingClientRect().width) < 8 && null != e ? (i.setHeight(Math.round(100 * i.text_do.screen.getBoundingClientRect().height)), Math.round(100 * e)) : (i.setHeight(i.text_do.screen.offsetHeight), Math.round(i.text_do.screen.offsetWidth))) < i.w - 15 && i.setWidth(e), e < i.maxWidth && (i.text_do.getStyle().whiteSpace = "nowrap"), i.positionPointer(), i.id = t)
                }, 60)
            }, i.positionPointer = function (e) {
                var t, o;
                e = e || 0, o = "bottom" == i.position_str ? (t = parseInt((i.w - i.pointerWidth) / 2) + e, i.h) : (t = i.w, parseInt((i.h - i.pointerHeight) / 2)), i.pointer_do.setX(t), i.pointer_do.setY(o)
            }, i.show = function () {
                i.isShowed_bl || (i.isShowed_bl = !0, FWDAnimation.killTweensOf(i), clearTimeout(i.showWithDelayId_to), i.showWithDelayId_to = setTimeout(i.showFinal, 100))
            }, i.showFinal = function () {
                i.setVisible(!0), i.setAlpha(0), FWDAnimation.to(i, .4, {
                    alpha: 1,
                    onComplete: function () {
                        i.setVisible(!0)
                    },
                    ease: Quart.easeOut
                })
            }, i.hide = function () {
                i.isShowed_bl && (clearTimeout(i.showWithDelayId_to), FWDAnimation.killTweensOf(i), i.setVisible(!1), i.isShowed_bl = !1)
            }, i.init()
        };
        a.setPrototype = function () {
            a.prototype = null, a.prototype = new FWDUVPDisplayObject("div", "fixed")
        }, a.CLICK = "onClick", a.MOUSE_DOWN = "onMouseDown", a.prototype = null, e.FWDUVPPlaylistToolTip = a
    }(window),
    function () {
        var v = function (n, e, t, o, s, i, a, r, l, d, _, u, c, p, h, m, b, g, f) {
            var y = this;
            v.prototype;
            y.clsBtn, y.image_do, y.imgSrc = e, y.link = s, y.target = i, y.start = t, y.end = o, y.google_ad_client = l, y.google_ad_slot = d, y.originalW = y.google_ad_width = _, y.originalH = y.google_ad_height = u, y.tracking = c, y.finalW = 0, y.finalH = 0, Boolean(y.google_ad_client) ? y.type = "adsense" : y.imgSrc.match(/.png|.jpg|.jpeg/gi) ? y.type = "image" : y.type = "iframe", y.id = r, y.shwPpoppAdClsBtn = m, y.poppAdClsNPth = p, y.poppAdClsSPth = h, y.isClsd = a, y.isLded = !1, y.isShowed_bl = !1, y.init = function () {
                y.setBkColor("rgba(0, 0, 0, 0.6)"), y.setX(-5e3);
                var e = y.poppAdClsNPth;
                window.isWhite && (e = "content/hex_white/close-button-normal.png"), y.shwPpoppAdClsBtn && (FWDUVPSimpleSizeButton.setPrototype(), y.clsBtn = new FWDUVPSimpleSizeButton(e, y.poppAdClsSPth, 22, 21, b, g, f, !0), y.clsBtn.addListener(FWDUVPSimpleSizeButton.MOUSE_UP, y.closeClickButtonCloseHandler)), "image" == y.type ? (y.image = new Image, y.image.src = y.imgSrc, y.image.onload = y.onLoadHandler) : (y.isLded = !0, y.setWidth(y.originalW), y.setHeight(y.originalH)), y.clsBtn && (y.addChild(y.clsBtn), y.clsBtn.setX(-300)), y.link && y.setButtonMode(!0)
            }, y.closeClickButtonCloseHandler = function () {
                y.hide(), y.isClsd = !0, n.popupAds_ar[y.id].isClosed = !0
            }, y.clickHandler = function () {
                y.link && (n.prt.pause(), window.open(y.link, y.target))
            }, y.onLoadHandler = function () {
                y.originalW = y.image.width, y.originalH = y.image.height, y.image_do = new FWDUVPDisplayObject("img"), y.image_do.setScreen(y.image), y.image_do.setWidth(y.originalW), y.image_do.setHeight(y.originalH), y.addChild(y.image_do), y.isLded = !0, y.clsBtn && (y.addChild(y.clsBtn), y.clsBtn.setX(-300)), y.screen.addEventListener ? y.image_do.screen.addEventListener("click", y.clickHandler) : y.image_do.screen.attachEvent("onclick", y.clickHandler)
            }, y.hide = function (e) {
                var t;
                y.isShowed_bl && (y.isShowed_bl = !1, t = Math.min(1, n.prt.tempVidStageWidth / y.originalW), parseInt(t * y.originalH), finalY = parseInt(n.prt.tempVidStageHeight), n.setY(finalY), y.setX(-5e3), FWDAnimation.killTweensOf(n), e ? (n.removeChild(y), n.setWidth(0), n.setHeight(0)) : (y.setWidth(0), y.setHeight(0), n.setVisible(!1), y.setVisible(!1)))
            }, y.show = function () {
                y.isShowed_bl || y.isClsd || !y.isLded || (y.isShowed_bl = !0, y.setX(0), setTimeout(function () {
                    var t, e;
                    FWDAnimation.killTweensOf(n), n.setVisible(!0), y.setVisible(!0), "adsense" != y.type || y.isGooglAdCreated_bl ? "iframe" == y.type && (y.container = new FWDUVPTransformDisplayObject("div"), y.container.setWidth(y.originalW), y.container.setHeight(y.originalH), y.ifr = new FWDUVPTransformDisplayObject("iframe"), y.ifr.screen.scrolling = "no", y.ifr.setWidth(y.originalW), y.ifr.setHeight(y.originalH), y.ifr.screen.src = y.imgSrc, y.container.addChild(y.ifr), y.link && (y.clicker = new FWDUVPDisplayObject("div"), y.clicker.screen.style.width = "100%", y.clicker.screen.style.height = "100%", y.container.addChild(y.clicker), y.container.addChild(y.clicker), y.container.screen.addEventListener("click", y.clickHandler)), y.addChild(y.container), y.clsBtn && (y.addChild(y.clsBtn), y.clsBtn.setX(-300))) : (y.isGooglAdCreated_bl = !0, window.google_ad_client = y.google_ad_client, window.google_ad_slot = y.google_ad_slot, window.google_ad_width = y.originalW, window.google_ad_height = y.originalH, y.container = new FWDUVPTransformDisplayObject("div"), y.container.setWidth(y.originalW), y.container.setHeight(y.originalH), y.addChild(y.container), t = document.write, document.write = function (e) {
                        y.container.screen.innerHTML = e, document.write = t
                    }, (e = document.createElement("script")).type = "text/javascript", -1 != location.href.indexOf("https") ? e.src = "https://pagead2.googlesyndication.com/pagead/show_ads.js" : e.src = "http://pagead2.googlesyndication.com/pagead/show_ads.js", document.body.appendChild(e), y.clsBtn && (y.addChild(y.clsBtn), y.clsBtn.setX(-300)));
                    var o = Math.min(1, n.prt.tempVidStageWidth / y.originalW),
                        s = parseInt(o * y.originalH) - 2;
                    finalY = n.prt.controller_do.isShowed_bl ? parseInt(n.prt.tempVidStageHeight - n.prt.controller_do.h - y.originalH * o + 2 + s) : parseInt(n.prt.tempVidStageHeight - y.originalH * o + 2 + s), n.setY(finalY), y.resizeAndPosition(!0)
                }, 100))
            }, y.resizeAndPosition = function (e) {
                var t, o;
                y.isLded && !y.isClsd && y.isShowed_bl && (FWDUVPUtils.isIEAndLessThen9, o = Math.min(1, n.prt.tempVidStageWidth / y.originalW), y.finalW = parseInt(o * y.originalW), y.finalH = parseInt(o * y.originalH), y.finalW == y.prevFinalW && y.finalH == y.prevFinalH || (y.setWidth(y.finalW), y.setHeight(y.finalH), "image" == y.type ? (y.image_do.setWidth(y.finalW), y.image_do.setHeight(y.finalH)) : y.container && (y.container.setScale2(o), y.container.setX((y.finalW - y.originalW) / 2), y.container.setY((y.finalH - y.originalH) / 2)), t = n.prt.controller_do ? n.prt.controller_do.isShowed_bl ? parseInt(n.prt.tempVidStageHeight - n.prt.controller_do.h - y.originalH * o - 10) : parseInt(n.prt.tempVidStageHeight - y.originalH * o - 10) : parseInt(n.prt.tempVidStageHeight - y.originalH * o), n.setX(parseInt((n.prt.tempVidStageWidth - y.finalW) / 2)), FWDAnimation.killTweensOf(n), e ? FWDAnimation.to(n, .8, {
                    y: t,
                    ease: Expo.easeInOut
                }) : n.setY(t), y.clsBtn && (y.clsBtn.setY(5), y.clsBtn.setX(parseInt(y.finalW - 21 - 5))), y.prevFinalW = y.finalW, y.prevFinallH = y.finalH, n.setWidth(y.finalW), n.setHeight(y.finalH)))
            }, y.init()
        };
        v.setPrototype = function () {
            v.prototype = new FWDUVPDisplayObject("div", "absolute", "visible")
        }, v.MOUSE_OVER = "onMouseOver", v.MOUSE_OUT = "onMouseOut", v.CLICK = "onClick", v.prototype = null, window.FWDUVPPopupAddButton = v
    }(window),
    function (e) {
        var o = function (s, e, t) {
            var n = this;
            o.prototype;
            n.img_img = new Image, n.img_do = null, n.imgW = 0, n.imgH = 0, n.finalW = 0, n.finalH = 0, n.finalX = 0, n.finalY = 0, n.curPath_str, n.posterBackgroundColor_str = t, n.isTransparent_bl = !1, n.showPoster_bl = e, n.showOrLoadOnMobile_bl = !1, n.isShowed_bl = !0, n.allowToShow_bl = !0, n.isMbl = FWDUVPUtils.isMobile, n.init = function () {
                n.img_img = new Image, n.img_do = new FWDUVPDisplayObject("img"), n.hide()
            }, n.positionAndResize = function () {
                var e, t, o;
                s.vidStageWidth && (n.setWidth(s.tempVidStageWidth), n.setHeight(s.tempVidStageHeight), n.imgW && (o = (e = s.tempVidStageWidth / n.imgW) <= (t = s.tempVidStageHeight / n.imgH) ? e : t, s._d.fillEntireposterScreen_bl && (o = t <= e ? e : t), n.finalW = Math.round(o * n.imgW), n.finalH = Math.round(o * n.imgH), n.finalX = parseInt((s.tempVidStageWidth - n.finalW) / 2), n.finalY = parseInt((s.tempVidStageHeight - n.finalH) / 2), n.img_do.setX(n.finalX), n.img_do.setY(n.finalY), n.img_do.setWidth(n.finalW), n.img_do.setHeight(n.finalH)))
            }, n.setPoster = function (e) {
                if (n.id != s.id && e) {
                    if (n.id = s.id, e && "" == FWDUVPUtils.trim(e) || "none" == e) return n.showOrLoadOnMobile_bl = !0, n.isTransparent_bl = !0, void n.show();
                    if ("youtubemobile" == e && n.isMbl) return n.isTransparent_bl = !1, n.showOrLoadOnMobile_bl = !1, n.img_img.src = null, void(n.imgW = 0);
                    e == n.curPath_str ? (n.isTransparent_bl = !1, n.showOrLoadOnMobile_bl = !0) : n.isTransparent_bl = !1, n.isTransparent_bl ? n.getStyle().backgroundColor = "transparent" : n.getStyle().backgroundColor = n.posterBackgroundColor_str, n.isTransparent_bl = !1, n.showOrLoadOnMobile_bl = !0, n.curPath_str = e, n.allowToShow_bl && (n.isShowed_bl = !1);
                    try {
                        n.removeChild(n.img_do)
                    } catch (e) {}
                    n.img_img = new Image, n.img_img.onload = n.posterLoadHandler, n.img_img.src = n.curPath_str
                }
            }, n.posterLoadHandler = function (e) {
                n.imgW = n.img_img.width, n.imgH = n.img_img.height, n.img_do.setScreen(n.img_img), n.addChild(n.img_do), n.positionAndResize(), n.isShowed_bl && n.show()
            }, n.show = function (e) {
                n.allowToShow_bl && !n.isShowed_bl && n.showOrLoadOnMobile_bl && (n.isShowed_bl = !0, n.isTransparent_bl ? 0 != n.alpha && n.setAlpha(0) : 1 != n.alpha && n.setAlpha(1), n.setVisible(!0), n.isMbl || n.isTransparent_bl || (FWDAnimation.killTweensOf(n), n.setAlpha(0), FWDAnimation.to(n, .6, {
                    alpha: 1,
                    delay: .4
                })), n.positionAndResize())
            }, n.hide = function (e) {
                (n.isShowed_bl || e) && (FWDAnimation.killTweensOf(n), n.isShowed_bl = !1, n.setVisible(!1))
            }, n.init()
        };
        o.setPrototype = function () {
            o.prototype = new FWDUVPDisplayObject("div")
        }, o.prototype = null, e.FWDUVPPoster = o
    }(window),
    function (e) {
        var l = function (e, t, o, s, n, i, a) {
            var r = this;
            l.prototype;
            r.main_do, r.preloaderPostion = t, r.backgroundColor = s, r.fillColor = n, r.radius = o, r.strokeSize = i, r.animDuration = a || 300, r.strtAngle = 270, r.countAnimation = 0, r.isShowed_bl = !0, r.slideshowAngle = {
                n: 0
            }, r.init = function () {
                r.main_do = new FWDUVPDisplayObject("div"), r.main_do.setOverflow("visible"), r.main_do.setWidth(2 * r.radius + r.strokeSize), r.main_do.setHeight(2 * r.radius + r.strokeSize), r.addChild(r.main_do), r.setOverflow("visible"), r.setWidth(2 * r.radius + r.strokeSize), r.setHeight(2 * r.radius + r.strokeSize), r.bkCanvas = new FWDUVPDisplayObject("canvas"), r.bkCanvasContext = r.bkCanvas.screen.getContext("2d"), r.fillCircleCanvas = new FWDUVPDisplayObject("canvas"), r.fillCircleCanvasContext = r.fillCircleCanvas.screen.getContext("2d"), r.main_do.screen.style.transformOrigin = "50% 50%", r.main_do.addChild(r.bkCanvas), r.main_do.addChild(r.fillCircleCanvas), r.drawBackground(), r.drawFill(), r.hide()
            }, r.positionAndResize = function () {
                "bottomleft" == r.preloaderPostion ? (r.setX(e.offsetPreloader), r.setY(e.sH - r.h - e.offsetPreloader)) : "bottomright" == r.preloaderPostion ? (r.setX(e.sW - r.w - e.offsetPreloader), r.setY(e.sH - r.h - e.offsetPreloader)) : "topright" == r.preloaderPostion ? (r.setX(e.sW - r.w - e.offsetPreloader), r.setY(e.offsetPreloader)) : "topleft" == r.preloaderPostion ? (r.setX(e.offsetPreloader), r.setY(e.offsetPreloader)) : "center" == r.preloaderPostion && (r.setX(Math.round(e.sW - r.w) / 2), r.setY(Math.round(Math.min(e.sH, e.viewportSize.h) - r.h) / 2))
            }, r.drawBackground = function () {
                r.bkCanvas.screen.width = 2 * r.radius + 2 * r.strokeSize, r.bkCanvas.screen.height = 2 * r.radius + 2 * r.strokeSize, r.bkCanvasContext.lineWidth = r.thicknessSize, r.bkCanvasContext.translate(r.strokeSize / 2, r.strokeSize / 2), r.bkCanvasContext.shadowColor = "#333333", r.bkCanvasContext.shadowBlur = 1, r.bkCanvasContext.lineWidth = r.strokeSize, r.bkCanvasContext.strokeStyle = r.backgroundColor, r.bkCanvasContext.beginPath(), r.bkCanvasContext.arc(r.radius, r.radius, r.radius, Math.PI / 180 * 0, Math.PI / 180 * 360, !1), r.bkCanvasContext.stroke(), r.bkCanvasContext.closePath()
            }, r.drawFill = function () {
                r.fillCircleCanvas.screen.width = 2 * r.radius + 2 * r.strokeSize, r.fillCircleCanvas.screen.height = 2 * r.radius + 2 * r.strokeSize, r.fillCircleCanvasContext.lineWidth = r.thicknessSize, r.fillCircleCanvasContext.translate(r.strokeSize / 2, r.strokeSize / 2), r.fillCircleCanvasContext.lineWidth = r.strokeSize, r.fillCircleCanvasContext.strokeStyle = r.fillColor, r.fillCircleCanvasContext.beginPath(), r.fillCircleCanvasContext.arc(r.radius, r.radius, r.radius, Math.PI / 180 * r.strtAngle, Math.PI / 180 * (r.strtAngle + r.slideshowAngle.n), !1), r.fillCircleCanvasContext.stroke(), r.fillCircleCanvasContext.closePath()
            }, r.startSlideshow = function () {
                null != r && (FWDAnimation.killTweensOf(r.slideshowAngle), FWDAnimation.to(r.slideshowAngle, r.animDuration, {
                    n: 360,
                    onUpdate: r.drawFill,
                    onComplete: r.stopSlideshow
                }))
            }, r.stopSlideshow = function () {
                FWDAnimation.killTweensOf(r.slideshowAngle), FWDAnimation.to(r.slideshowAngle, .8, {
                    n: 0,
                    onupdate: r.drawFill,
                    onUpdate: r.drawFill,
                    ease: Expo.easiInOut
                })
            }, r.startPreloader = function () {
                r.stopPreloader(), r.slideshowAngle = {
                    n: 0
                }, FWDAnimation.to(r.slideshowAngle, r.animDuration, {
                    n: 360,
                    onUpdate: r.drawFill,
                    repeat: 100,
                    yoyo: !0,
                    ease: Expo.easInOut
                }), FWDAnimation.to(r.main_do.screen, r.animDuration, {
                    rotation: 360,
                    repeat: 100
                })
            }, r.stopPreloader = function () {
                FWDAnimation.killTweensOf(r.slideshowAngle), FWDAnimation.killTweensOf(r.main_do.screen), FWDAnimation.to(r.main_do.screen, 1e-5, {
                    rotation: 0
                })
            }, r.show = function () {
                r.isShowed_bl || (r.setVisible(!0), FWDAnimation.killTweensOf(r), FWDAnimation.to(r, 1, {
                    alpha: 1,
                    delay: .2
                }), r.stopPreloader(), r.startPreloader(), r.isShowed_bl = !0)
            }, r.hide = function (e) {
                r.isShowed_bl && (FWDAnimation.killTweensOf(r), e ? FWDAnimation.to(r, .2, {
                    alpha: 0,
                    onComplete: r.onHideComplete
                }) : (r.setVisible(!1), r.setAlpha(0)), r.isShowed_bl = !1)
            }, r.onHideComplete = function () {
                r.setVisible(!1), r.stopPreloader(), r.dispatchEvent(l.HIDE_COMPLETE)
            }, r.init()
        };
        l.setPrototype = function () {
            l.prototype = new FWDUVPDisplayObject("div")
        }, l.HIDE_COMPLETE = "hideComplete", l.prototype = null, e.FWDUVPPreloader = l
    }(window),
    function (e) {
        var a = function (e, t, o, s, n) {
            var i = this;
            a.prototype;
            this.imageSource_img = e, this.image_sdo = null, this.segmentWidth = t, this.segmentHeight = o, this.totalSegments = s, this.animDelay = n || 300, this.count = 0, this.delayTimerId_int, this.isShowed_bl = !1, this.init = function () {
                i.setWidth(i.segmentWidth), i.setHeight(i.segmentHeight), i.image_sdo = new FWDUVPDisplayObject("img"), i.image_sdo.setScreen(i.imageSource_img), i.addChild(i.image_sdo), i.hide(!1)
            }, this.start = function () {
                null != i && (clearInterval(i.delayTimerId_int), i.delayTimerId_int = setInterval(i.updatePreloader, i.animDelay))
            }, this.stop = function () {
                clearInterval(i.delayTimerId_int)
            }, this.updatePreloader = function () {
                var e;
                null != i && (i.count++, i.count > i.totalSegments - 1 && (i.count = 0), e = i.count * i.segmentWidth, i.image_sdo.setX(-e))
            }, this.show = function () {
                i.isShowed_bl || (i.setVisible(!0), i.start(), FWDAnimation.killTweensOf(i), FWDAnimation.to(i, 1, {
                    alpha: 1,
                    delay: .2
                }), i.isShowed_bl = !0)
            }, this.hide = function (e) {
                i.isShowed_bl && (FWDAnimation.killTweensOf(this), e ? FWDAnimation.to(this, 1, {
                    alpha: 0,
                    onComplete: i.onHideComplete
                }) : (i.setVisible(!1), i.setAlpha(0)), i.isShowed_bl = !1)
            }, this.onHideComplete = function () {
                i.setVisible(!1), i.stop(), i.dispatchEvent(a.HIDE_COMPLETE)
            }, this.init()
        };
        a.setPrototype = function () {
            a.prototype = new FWDUVPDisplayObject("div")
        }, a.HIDE_COMPLETE = "hideComplete", a.prototype = null, e.FWDUVPPreloader2 = a
    }(window),
    function (e) {
        var t = function (e, n) {
            var i = this;
            t.prototype;
            i.prt = e, i.main_do = null, i.reader = null, i.subtitiles_ar = null, i.totalAds = 0, i.popupAds_ar, i.popupAdsButtons_ar, i.hasText_bl = !1, i.isLded = !1, i.isMbl = FWDUVPUtils.isMobile, i.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, i.showSubByDflt = n.showSubByDflt, i.nBC = n.nBC, i.sBC = n.sBC, i.setSizeOnce_bl = !1, i.init = function () {
                -1 != n.sknPth.indexOf("hex_white") && (i.sBC = "#FFFFFF"), i.setOverflow("visible"), i.getStyle().cursor = "default", i.setVisible(!1)
            }, i.resetPopups = function (e, t) {
                if (i.id != t) {
                    var o;
                    i.hideAllPopupButtons(!0), i.popupAds_ar = e, i.totalAds = i.popupAds_ar.length, i.popupAdsButtons_ar = [];
                    for (var s = 0; s < i.totalAds; s++) FWDUVPPopupAddButton.setPrototype(), o = new FWDUVPPopupAddButton(i, i.popupAds_ar[s].source, i.popupAds_ar[s].timeStart, i.popupAds_ar[s].timeEnd, i.popupAds_ar[s].link, i.popupAds_ar[s].trget, i.popupAds_ar[s].isClosed, s, i.popupAds_ar[s].google_ad_client, i.popupAds_ar[s].google_ad_slot, i.popupAds_ar[s].google_ad_width, i.popupAds_ar[s].google_ad_height, i.popupAds_ar[s].tracking, n.poppAdClsNPth, n.poppAdClsSPth, n.shwPpoppAdClsBtn, n.useHEX, i.nBC, i.sBC), i.popupAdsButtons_ar[s] = o, i.addChild(o)
                }
            }, i.update = function (e) {
                if (0 != i.totalAds)
                    for (var t, o = 0; o < i.totalAds; o++) t = i.popupAdsButtons_ar[o], i.curAdId = o, e >= t.start && e < t.end ? t.show() : t.hide()
            }, i.position = function (e) {
                if (0 != i.totalAds)
                    for (var t = 0; t < i.totalAds; t++) i.popupAdsButtons_ar[t].resizeAndPosition(e)
            }, i.hideAllPopupButtons = function (e) {
                if (0 != i.totalAds) {
                    for (var t = 0; t < i.totalAds; t++) i.popupAdsButtons_ar[t].hide(e);
                    e && (i.popupAdsButtons_ar = null, i.totalAds = 0), i.id = -1
                }
            }, i.resetId = function () {
                i.id = -1
            }, i.init()
        };
        t.setPrototype = function () {
            t.prototype = new FWDUVPDisplayObject("div")
        }, t.LOAD_ERROR = "error", t.LOAD_COMPLETE = "complete", t.prototype = null, e.FWDUVPPupupAds = t
    }(window),
    function (e) {
        var a = function (e, t, o, s, n) {
            var i = this;
            a.prototype;
            i.buttonRef_do = e, i.bkColor = t, i.text_do = null, i.pointer_do = null, i.fontColor_str = o, i.toolTipLabel_str = s, i.toolTipsButtonsHideDelay = 1e3 * n, i.pointerWidth = 7, i.pointerHeight = 4, i.showWithDelayId_to, i.isMbl = FWDUVPUtils.isMobile, i.isShowed_bl = !0, i.init = function () {
                i.setOverflow("visible"), i.screen.className = "UVP-tooltip-bk", i.setupMainContainers(), i.setLabel(s), i.hide(), i.setVisible(!1), i.getStyle().backgroundColor = i.bkColor, i.getStyle().zIndex = 9999999999999, i.getStyle().pointerEvents = "none"
            }, i.setupMainContainers = function () {
                i.pointerHolder_do = new FWDUVPDisplayObject("div"), i.pointerHolder_do.setOverflow("visible"), i.addChild(i.pointerHolder_do), i.text_do = new FWDUVPDisplayObject("div"), i.text_do.screen.className = "UVP-tooltip-text", i.text_do.hasTransform3d_bl = !1, i.text_do.hasTransform2d_bl = !1, i.text_do.setBackfaceVisibility(), i.text_do.setDisplay("inline-block"), i.text_do.getStyle().fontFamily = "Arial", i.text_do.getStyle().fontSize = "12px", i.text_do.getStyle().color = i.fontColor_str, i.text_do.getStyle().whiteSpace = "nowrap", i.text_do.getStyle().fontSmoothing = "antialiased", i.text_do.getStyle().webkitFontSmoothing = "antialiased", i.text_do.getStyle().textRendering = "optimizeLegibility", i.text_do.getStyle().padding = "6px", i.text_do.getStyle().paddingTop = "4px", i.text_do.getStyle().paddingBottom = "4px", i.addChild(i.text_do), i.pointer_do = new FWDUVPDisplayObject("div"), i.pointer_do.screen.className = "UVP-scrubber-pointer", i.pointer_do.setBkColor(i.bkColor), i.pointer_do.screen.style = "border: 4px solid transparent; border-top-color: " + i.bkColor + ";", i.pointerHolder_do.addChild(i.pointer_do)
            }, i.setLabel = function (e) {
                void 0 !== e && (i.text_do.setInnerHTML(e), setTimeout(function () {
                    null != i && (i.setWidth(i.text_do.getWidth()), i.setHeight(i.text_do.getHeight()), i.positionPointer())
                }, 20))
            }, i.positionPointer = function (e) {
                var t, o;
                e = e || 0, t = parseInt((i.w - 8) / 2) + e, o = i.h, i.pointerHolder_do.setX(t), i.pointerHolder_do.setY(o)
            }, i.show = function () {
                i.isShowed_bl = !0, clearTimeout(i.hideWithDelayId_to), FWDAnimation.killTweensOf(i), clearTimeout(i.showWithDelayId_to), i.showWithDelayId_to = setTimeout(i.showFinal, i.toolTipsButtonsHideDelay)
            }, i.showFinal = function () {
                i.setVisible(!0), FWDAnimation.to(i, .4, {
                    alpha: 1,
                    onComplete: function () {
                        i.setVisible(!0)
                    },
                    ease: Quart.easeOut
                })
            }, i.hide = function () {
                i.isShowed_bl && (clearTimeout(i.showWithDelayId_to), clearTimeout(i.hideWithDelayId_to), i.hideWithDelayId_to = setTimeout(function () {
                    FWDAnimation.killTweensOf(i), i.setVisible(!1), i.isShowed_bl = !1, i.setAlpha(0)
                }, 100))
            }, i.init()
        };
        a.setPrototype = function () {
            a.prototype = null, a.prototype = new FWDUVPDisplayObject("div")
        }, a.CLICK = "onClick", a.MOUSE_DOWN = "onMouseDown", a.prototype = null, e.FWDUVPScrubberToolip = a
    }(window),
    function (s) {
        var e = function (o, t) {
            var h = this;
            e.prototype;
            h.embedColoseN_img = o.embedColoseN_img, h.bk_do = null, h.mainHld = null, h.clsBtn = null, h.btns_ar = [], h.embedWindowBackground_str = o.embedWindowBackground_str, h.embedWindowCloseButtonMargins = o.embedWindowCloseButtonMargins, h.totalWidth = 0, h.sW = 0, h.sH = 0, h.minMrgXSpc = 20, h.hSpace = 20, h.minHSpace = 10, h.vSpace = 15, h.isShowed_bl = !1, h.isMbl = FWDUVPUtils.isMobile, h.useVectorIcons_bl = o.useVectorIcons_bl, h.init = function () {
                h.setupButtons()
            }, h.stpInit = function () {
                var e, t;
                h.clsBtn || (e = o.sBC, s.isWhite && (e = "#000000"), h.setBackfaceVisibility(), h.mainHld = new FWDUVPDisplayObject("div"), h.mainHld.hasTransform3d_bl = !1, h.mainHld.hasTransform2d_bl = !1, h.mainHld.setBackfaceVisibility(), h.bk_do = new FWDUVPDisplayObject("div"), h.bk_do.getStyle().width = "100%", h.bk_do.getStyle().height = "100%", h.bk_do.setAlpha(.9), t = h.embedWindowBackground_str, s.isWhite && (t = "content/hex_white/embed-window-background.png"), h.bk_do.getStyle().background = "url('" + t + "')", h.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), h.clsBtn = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<div class='table-fwduvp-button'><span class='table-cell-fwduvp-button fwdicon-close'></span></div>", void 0, "UVPCloseButtonNormalState", "UVPCloseButtonSelectedState")) : (FWDUVPSimpleButton.setPrototype(), h.clsBtn = new FWDUVPSimpleButton(o.shareClooseN_img, o.embedWindowClosePathS_str, void 0, !0, o.useHEX, o.nBC, e, !1, !1, !1, !1, !0)), h.clsBtn.addListener(FWDUVPSimpleButton.MOUSE_UP, h.closeButtonOnMouseUpHandler), h.addChild(h.mainHld), h.mainHld.addChild(h.bk_do), h.mainHld.addChild(h.clsBtn))
            }, h.closeButtonOnMouseUpHandler = function () {
                h.isShowed_bl && h.hide()
            }, h.positionAndResize = function () {
                h.sW = t.sW, h.sH = t.sH, h.clsBtn.setX(h.sW - h.clsBtn.w - h.embedWindowCloseButtonMargins), h.clsBtn.setY(h.embedWindowCloseButtonMargins), h.setWidth(h.sW), h.setHeight(h.sH), h.mainHld.setWidth(h.sW), h.mainHld.setHeight(h.sH), h.positionButtons()
            }, h.setupButtons = function () {
                var e;
                h.btsCrted || (h.stpInit(), h.btsCrted = !0, e = o.sBC, s.isWhite && (e = "#000000"), h.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), h.facebookButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='uvpicon fwdicon-facebook'></span>", void 0, "UVPSocialMediaButtonsNormalState", "UVPSocialMediaButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), h.facebookButton_do = new FWDUVPSimpleButton(o.facebookN_img, o.facebookSPath_str, void 0, !0, o.useHEX, o.nBC, e)), h.facebookButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, h.facebookOnMouseUpHandler), h.btns_ar.push(h.facebookButton_do), h.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), h.googleButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='uvpicon fwdicon-google-plus'></span>", void 0, "UVPSocialMediaButtonsNormalState", "UVPSocialMediaButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), h.googleButton_do = new FWDUVPSimpleButton(o.googleN_img, o.googleSPath_str, void 0, !0, o.useHEX, o.nBC, e)), h.googleButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, h.googleOnMouseUpHandler), h.btns_ar.push(h.googleButton_do), h.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), h.twitterButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='uvpicon fwdicon-twitter'></span>", void 0, "UVPSocialMediaButtonsNormalState", "UVPSocialMediaButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), h.twitterButton_do = new FWDUVPSimpleButton(o.twitterN_img, o.twitterSPath_str, void 0, !0, o.useHEX, o.nBC, e)), h.twitterButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, h.twitterOnMouseUpHandler), h.btns_ar.push(h.twitterButton_do), h.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), h.likedinButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='uvpicon fwdicon-linkedin'></span>", void 0, "UVPSocialMediaButtonsNormalState", "UVPSocialMediaButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), h.likedinButton_do = new FWDUVPSimpleButton(o.likedInkN_img, o.likedInSPath_str, void 0, !0, o.useHEX, o.nBC, e)), h.likedinButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, h.likedinOnMouseUpHandler), h.btns_ar.push(h.likedinButton_do), h.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), h.bufferButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='uvpicon fwdicon-comments'></span>", void 0, "UVPSocialMediaButtonsNormalState", "UVPSocialMediaButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), h.bufferButton_do = new FWDUVPSimpleButton(o.bufferkN_img, o.bufferSPath_str, void 0, !0, o.useHEX, o.nBC, e)), h.bufferButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, h.bufferOnMouseUpHandler), h.btns_ar.push(h.bufferButton_do), h.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), h.diggButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='uvpicon fwdicon-digg'></span>", void 0, "UVPSocialMediaButtonsNormalState", "UVPSocialMediaButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), h.diggButton_do = new FWDUVPSimpleButton(o.diggN_img, o.diggSPath_str, void 0, !0, o.useHEX, o.nBC, e)), h.diggButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, h.diggOnMouseUpHandler), h.btns_ar.push(h.diggButton_do), h.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), h.redditButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='uvpicon fwdicon-reddit'></span>", void 0, "UVPSocialMediaButtonsNormalState", "UVPSocialMediaButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), h.redditButton_do = new FWDUVPSimpleButton(o.redditN_img, o.redditSPath_str, void 0, !0, o.useHEX, o.nBC, e)), h.redditButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, h.redditOnMouseUpHandler), h.btns_ar.push(h.redditButton_do), h.useVectorIcons_bl ? (FWDUVPSimpleButton.setPrototype(), h.thumbrlButton_do = new FWDUVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<span class='uvpicon fwdicon-tumblr'></span>", void 0, "UVPSocialMediaButtonsNormalState", "UVPSocialMediaButtonsSelectedState")) : (FWDUVPSimpleButton.setPrototype(), h.thumbrlButton_do = new FWDUVPSimpleButton(o.thumbrlN_img, o.thumbrlSPath_str, void 0, !0, o.useHEX, o.nBC, e)), h.thumbrlButton_do.addListener(FWDUVPSimpleButton.MOUSE_UP, h.thumbrlOnMouseUpHandler), h.btns_ar.push(h.thumbrlButton_do), h.mainHld.addChild(h.facebookButton_do), h.mainHld.addChild(h.googleButton_do), h.mainHld.addChild(h.twitterButton_do), h.mainHld.addChild(h.likedinButton_do), h.mainHld.addChild(h.bufferButton_do), h.mainHld.addChild(h.diggButton_do), h.mainHld.addChild(h.redditButton_do), h.mainHld.addChild(h.thumbrlButton_do))
            }, h.facebookOnMouseUpHandler = function () {
                var e = "http://www.facebook.com/share.php?u=" + encodeURIComponent(location.href);
                s.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
            }, h.googleOnMouseUpHandler = function () {
                var e = "https://plus.google.com/share?url=" + encodeURIComponent(location.href);
                s.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
            }, h.twitterOnMouseUpHandler = function () {
                var e = "http://twitter.com/home?status=" + encodeURIComponent(location.href);
                s.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
            }, h.likedinOnMouseUpHandler = function () {
                var e = "https://www.linkedin.com/cws/share?url=" + location.href;
                s.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
            }, h.bufferOnMouseUpHandler = function () {
                var e = "https://buffer.com/add?url=" + location.href;
                s.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
            }, h.diggOnMouseUpHandler = function () {
                var e = "http://digg.com/submit?url=" + location.href;
                s.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
            }, h.redditOnMouseUpHandler = function () {
                var e = "https://www.reddit.com/?submit=" + location.href;
                s.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
            }, h.thumbrlOnMouseUpHandler = function () {
                var e = "http://www.tumblr.com/share/link?url=" + location.href;
                s.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
            }, h.positionButtons = function () {
                var e, t, o, s = [],
                    n = [],
                    i = [],
                    a = 0,
                    r = 0,
                    l = 0;
                s[l] = [0], n[l] = h.btns_ar[0].totalWidth, i[l] = h.btns_ar[0].totalWidth, h.totalButtons = h.btns_ar.length;
                for (var d = 1; d < h.totalButtons; d++) e = h.btns_ar[d], n[l] + e.totalWidth + h.minHSpace > h.sW - h.minMrgXSpc ? (s[++l] = [], s[l].push(d), n[l] = e.totalWidth, i[l] = e.totalWidth) : (s[l].push(d), n[l] += e.totalWidth + h.minHSpace, i[l] += e.totalWidth);
                a = parseInt((h.sH - ((l + 1) * (e.totalHeight + h.vSpace) - h.vSpace)) / 2);
                for (d = 0; d < l + 1; d++) {
                    var _, u, c = 0;
                    c = 1 < s[d].length ? (_ = Math.min((h.sW - h.minMrgXSpc - i[d]) / (s[d].length - 1), h.hSpace), u = i[d] + _ * (s[d].length - 1), parseInt((h.sW - u) / 2)) : parseInt((h.sW - n[d]) / 2), 0 < d && (a += e.h + h.vSpace);
                    for (var p = 0; p < s[d].length; p++) e = h.btns_ar[s[d][p]], o = 0 == p ? c : (t = h.btns_ar[s[d][p] - 1]).finalX + t.totalWidth + _, e.finalX = o, e.finalY = a, r < e.finalY && (r = e.finalY), h.buttonsBarTotalHeight = r + e.totalHeight + h.startY, e.setX(e.finalX), e.setY(e.finalY)
                }
            }, h.show = function (e) {
                h.isShowed_bl || (h.isShowed_bl = !0, t.main_do.addChild(h), h.init(), h.useVectorIcons_bl ? h.checkButtonsId_to = setInterval(function () {
                    0 != h.clsBtn.w && (h.positionAndResize(), clearInterval(h.checkButtonsId_to), clearTimeout(h.hideCompleteId_to), clearTimeout(h.showCompleteId_to), h.mainHld.setY(-h.sH), h.showCompleteId_to = setTimeout(h.showCompleteHandler, 900), FWDAnimation.to(h.mainHld, .8, {
                        y: 0,
                        delay: .1,
                        ease: Expo.easeInOut
                    }))
                }, 50) : (h.positionAndResize(), clearTimeout(h.hideCompleteId_to), clearTimeout(h.showCompleteId_to), h.mainHld.setY(-h.sH), h.showCompleteId_to = setTimeout(h.showCompleteHandler, 900), setTimeout(function () {
                    FWDAnimation.to(h.mainHld, .8, {
                        y: 0,
                        delay: .1,
                        ease: Expo.easeInOut
                    })
                }, 100)))
            }, h.showCompleteHandler = function () {}, h.hide = function () {
                h.isShowed_bl && (h.isShowed_bl = !1, (!FWDUVPUtils.isMobile || FWDUVPUtils.isMobile && FWDUVPUtils.hasPointerEvent) && t.main_do.setSelectable(!1), t.customContextMenu_do && t.customContextMenu_do.enable(), h.positionAndResize(), clearTimeout(h.hideCompleteId_to), clearTimeout(h.showCompleteId_to), h.hideCompleteId_to = setTimeout(h.hideCompleteHandler, 800), FWDAnimation.killTweensOf(h.mainHld), FWDAnimation.to(h.mainHld, .8, {
                    y: -h.sH,
                    ease: Expo.easeInOut
                }))
            }, h.hideCompleteHandler = function () {
                t.main_do.removeChild(h), h.dispatchEvent(e.HIDE_COMPLETE)
            }, o.useHEX && h.init()
        };
        e.setPrototype = function () {
            e.prototype = new FWDUVPDisplayObject("div")
        }, e.HIDE_COMPLETE = "hideComplete", e.prototype = null, s.FWDUVPShareWindow = e
    }(window),
    function (e) {
        var p = function (e, t, o, s, n, i, a, r, l, d, _, u) {
            var c = this;
            p.prototype;
            c.iconCSSString = r, c.showHDIcon = l, c.nImg = e, c.sPath_str = t, c.dPath_str = o, c.testButton = Boolean(-1 != String(c.iconCSSString).indexOf("download")), c.n_do, c.s_sdo, c.d_sdo, c.showOver = u, n || (c.showOver = !1), c.toolTipLabel_str, c.nImg && (c.totalWidth = c.nImg.width, c.totalHeight = c.nImg.height, c.buttonWidth = c.totalWidth, c.buttonHeight = c.totalHeight), c.normalCalssName = d, c.selectedCalssName = _, c.useHEX = n, c.nBC = i, c.sBC = a, c.isShowed_bl = !0, c.isSetToDisabledState_bl = !1, c.isDisabled_bl = !1, c.isDisabledForGood_bl = !1, c.isSelectedFinal_bl = !1, c.isActive_bl = !1, c.isMbl = FWDUVPUtils.isMobile, c.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, c.allowToCreateSecondButton_bl = !c.isMbl || c.hasPointerEvent_bl || s, c.useFontAwesome_bl = Boolean(c.iconCSSString), c.init = function () {
                c.iconCSSString && c.setOverflow("visible"), c.setupMainContainers(), c.setNormalState()
            }, c.setupMainContainers = function () {
                var e, t, o;
                c.useFontAwesome_bl ? (c.setOverflow("visible"), c.n_do = new FWDUVPTransformDisplayObject("div"), c.n_do.setInnerHTML(c.iconCSSString), c.addChild(c.n_do), c.showHDIcon && ((e = new Image).src = l, c.hd_do = new FWDUVPDisplayObject("img"), c.hd_do.setScreen(e), c.hd_do.setWidth(7), c.hd_do.setHeight(5), c.setOverflow("visible"), c.addChild(c.hd_do)), c.setFinalSize()) : (c.useHEX && !c.showOver ? (c.n_do = new FWDUVPTransformDisplayObject("div"), c.n_do.setWidth(c.totalWidth), c.n_do.setHeight(c.totalHeight), c.n_do_canvas = FWDUVPUtils.getCanvasWithModifiedColor(c.nImg, c.nBC).canvas, c.n_do.screen.appendChild(c.n_do_canvas)) : (c.n_do = new FWDUVPTransformDisplayObject("img"), c.n_do.setScreen(c.nImg)), c.addChild(c.n_do), c.allowToCreateSecondButton_bl && (c.img1 = new Image, c.img1.src = c.sPath_str, t = new Image, c.sImg = t, c.useHEX ? (c.s_sdo = new FWDUVPTransformDisplayObject("div"), c.s_sdo.setWidth(c.totalWidth), c.s_sdo.setHeight(c.totalHeight), o = c.sBC, c.showOver && (o = c.nBC), c.img1.onload = function () {
                    c.s_sdo_canvas = FWDUVPUtils.getCanvasWithModifiedColor(c.img1, o).canvas, c.s_sdo.screen.appendChild(c.s_sdo_canvas)
                }, c.showOver || c.s_sdo.setAlpha(0)) : (c.s_sdo = new FWDUVPDisplayObject("img"), c.s_sdo.setScreen(c.img1), c.s_sdo.setWidth(c.totalWidth), c.s_sdo.setHeight(c.totalHeight), c.useHEX || c.s_sdo.setAlpha(0)), c.addChild(c.s_sdo), c.dPath_str && (t.src = c.dPath_str, c.d_sdo = new FWDUVPDisplayObject("img"), c.d_sdo.setScreen(t), c.d_sdo.setWidth(c.totalWidth), c.d_sdo.setHeight(c.totalHeight), c.d_sdo.setX(-100), c.addChild(c.d_sdo)), c.setWidth(c.totalWidth), c.setHeight(c.totalHeight))), c.setButtonMode(!0), c.screen.style.yellowOverlayPointerEvents = "none", c.hasPointerEvent_bl ? (c.screen.addEventListener("pointerup", c.onMouseUp), c.screen.addEventListener("pointerover", c.onMouseOver), c.screen.addEventListener("pointerout", c.onMouseOut)) : c.screen.addEventListener && (c.isMbl || (c.screen.addEventListener("mouseover", c.onMouseOver), c.screen.addEventListener("mouseout", c.onMouseOut), c.screen.addEventListener("mouseup", c.onMouseUp)), c.screen.addEventListener("touchend", c.onMouseUp))
            }, c.onMouseOver = function (e) {
                if (c.dispatchEvent(p.SHOW_TOOLTIP, {
                        e: e
                    }), !(c.isDisabledForGood_bl || e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE && "mouse" != e.pointerType)) {
                    if (c.isDisabled_bl || c.isSelectedFinal_bl) return;
                    c.dispatchEvent(p.MOUSE_OVER, {
                        e: e
                    }), c.setSelectedState(!0)
                }
            }, c.onMouseOut = function (e) {
                if (!(c.isDisabledForGood_bl || e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE && "mouse" != e.pointerType)) {
                    if (c.isDisabled_bl || c.isSelectedFinal_bl) return;
                    c.dispatchEvent(p.MOUSE_OUT, {
                        e: e
                    }), c.setNormalState(!0)
                }
            }, c.onMouseUp = function (e) {
                c.isDisabledForGood_bl || (e.preventDefault && e.preventDefault(), c.isDisabled_bl || 2 == e.button || c.dispatchEvent(p.MOUSE_UP, {
                    e: e
                }))
            }, c.checkCount = 0, c.setFinalSize = function (e) {
                e && (c.checkCount = 0), clearInterval(c.checkId_int), 6 < c.checkCount || (c.lastWidth = c.n_do.screen.firstChild.offsetWidth, c.checkCount += 1, c.checkId_int = setInterval(function () {
                    c.setFinalSize()
                }, 100), c.prevWidth != c.lastWidth && 0 != c.lastWidth && (c.setWidth(c.n_do.screen.firstChild.offsetWidth), c.setHeight(c.n_do.screen.firstChild.offsetHeight), c.n_do.setWidth(c.w), c.n_do.setHeight(c.h), c.buttonWidth = c.w, c.buttonHeight = c.h, c.totalWidth = c.w, c.totalHeight = c.h, c.hd_do && (c.hd_do.setX(c.w - c.hd_do.w + 2), c.hd_do.setY(-2)), c.prevWidth = c.lastWidth))
            }, c.setSelected = function () {
                c.isSelectedFinal_bl = !0, c.s_sdo && (FWDAnimation.killTweensOf(c.s_sdo), FWDAnimation.to(c.s_sdo, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }))
            }, c.setUnselected = function () {
                c.isSelectedFinal_bl = !1, c.s_sdo && FWDAnimation.to(c.s_sdo, .8, {
                    alpha: 0,
                    delay: .1,
                    ease: Expo.easeOut
                })
            }, c.setNormalState = function (e) {
                c.doNotallowToSetNormal || (c.useFontAwesome_bl ? (FWDAnimation.killTweensOf(c.n_do.screen), e ? FWDAnimation.to(c.n_do.screen, .6, {
                    className: c.normalCalssName,
                    ease: Quart.easeOut
                }) : c.n_do.screen.className = c.normalCalssName) : c.showOver ? (FWDAnimation.killTweensOf(c.s_sdo), FWDAnimation.to(c.s_sdo, .6, {
                    alpha: 1,
                    ease: Quart.easeOut
                })) : (FWDAnimation.killTweensOf(c.s_sdo), FWDAnimation.to(c.s_sdo, .6, {
                    alpha: 0,
                    ease: Quart.easeOut
                })))
            }, c.setSelectedState = function (e) {
                c.useFontAwesome_bl ? (FWDAnimation.killTweensOf(c.n_do.screen), e ? FWDAnimation.to(c.n_do.screen, .6, {
                    className: c.selectedCalssName,
                    ease: Quart.easeOut
                }) : c.n_do.screen.className = c.selectedCalssName) : c.showOver ? (FWDAnimation.killTweensOf(c.s_sdo), FWDAnimation.to(c.s_sdo, .6, {
                    alpha: 0,
                    ease: Quart.easeOut
                })) : (FWDAnimation.killTweensOf(c.s_sdo), FWDAnimation.to(c.s_sdo, .6, {
                    alpha: 1,
                    delay: .1,
                    ease: Quart.easeOut
                }))
            }, c.setDisabledState = function () {
                c.isSetToDisabledState_bl || (c.isSetToDisabledState_bl = !0, c.d_sdo && c.d_sdo.setX(0), c.hd_do && c.hd_do.setX(c.w - c.hd_do.w))
            }, c.setEnabledState = function () {
                c.isSetToDisabledState_bl && (c.isSetToDisabledState_bl = !1, c.d_sdo && c.d_sdo.setX(-100), c.hd_do && c.hd_do.setX(-1e5))
            }, c.disable = function () {
                c.isDisabledForGood_bl || c.isDisabled_bl || (c.isDisabled_bl = !0, c.setButtonMode(!1), FWDAnimation.killTweensOf(c), FWDAnimation.to(c, .6, {
                    alpha: .4
                }), c.setNormalState(!0))
            }, c.enable = function () {
                !c.isDisabledForGood_bl && c.isDisabled_bl && (c.isDisabled_bl = !1, c.setButtonMode(!0), FWDAnimation.killTweensOf(c), FWDAnimation.to(c, .6, {
                    alpha: 1
                }))
            }, c.disableForGood = function () {
                c.isDisabledForGood_bl = !0, c.setButtonMode(!1)
            }, c.showDisabledState = function () {
                c.d_sdo && 0 != c.d_sdo.x && c.d_sdo.setX(0), c.hd_do && c.hd_do.setX(c.w - c.hd_do.w + 2)
            }, c.hideDisabledState = function () {
                c.d_sdo && -100 != c.d_sdo.x && c.d_sdo.setX(-100), c.hd_do && c.hd_do.setX(-1e4)
            }, c.show = function () {
                c.isShowed_bl || (c.isShowed_bl = !0, FWDAnimation.killTweensOf(c), FWDUVPUtils.isIEAndLessThen9 ? (FWDUVPUtils.isIEAndLessThen9 || (c.setAlpha(0), FWDAnimation.to(c, .4, {
                    alpha: 1,
                    delay: .4
                })), c.setVisible(!0)) : FWDUVPUtils.isIEWebKit ? (FWDAnimation.killTweensOf(c.n_do), c.n_do.setScale2(0), FWDAnimation.to(c.n_do, .8, {
                    scale: 1,
                    delay: .4,
                    onStart: function () {
                        c.setVisible(!0)
                    },
                    ease: Elastic.easeOut
                })) : (c.setScale2(0), FWDAnimation.to(c, .8, {
                    scale: 1,
                    delay: .4,
                    onStart: function () {
                        c.setVisible(!0)
                    },
                    ease: Elastic.easeOut
                })))
            }, c.hide = function (e) {
                c.isShowed_bl && (c.isShowed_bl = !1, FWDAnimation.killTweensOf(c), FWDAnimation.killTweensOf(c.n_do), c.setVisible(!1))
            }, c.updateHEXColors = function (e, t) {
                c.n_do_canvas && FWDUVPUtils.changeCanvasHEXColor(c.nImg, c.n_do_canvas, e), c.s_sdo_canvas && FWDUVPUtils.changeCanvasHEXColor(c.img1, c.s_sdo_canvas, t)
            }, c.init()
        };
        p.setPrototype = function () {
            p.prototype = null, p.prototype = new FWDUVPTransformDisplayObject("div")
        }, p.CLICK = "onClick", p.MOUSE_OVER = "onMouseOver", p.SHOW_TOOLTIP = "showTooltip", p.MOUSE_OUT = "onMouseOut", p.MOUSE_UP = "onMouseDown", p.prototype = null, e.FWDUVPSimpleButton = p
    }(window),
    function (e) {
        var d = function (e, t, o, s, n, i, a, r) {
            var l = this;
            d.prototype;
            l.nImg_img = null, l.sImg_img = null, l.n_do, l.s_do, l.useHEX = n, l.nBC = i, l.sBC = a, l.nImgPath_str = e, l.sImgPath_str = t, l.buttonWidth = o, l.buttonHeight = s, l.showOver = r, n || (l.showOver = !1), l.isMbl = FWDUVPUtils.isMobile, l.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, l.isDisabled_bl = !1, l.init = function () {
                l.setupMainContainers(), l.setWidth(l.buttonWidth), l.setHeight(l.buttonHeight), l.setButtonMode(!0)
            }, l.setupMainContainers = function () {
                l.nImg = new Image, l.nImg.src = l.nImgPath_str, l.useHEX && !l.showOver ? (l.n_do = new FWDUVPTransformDisplayObject("div"), l.n_do.setWidth(l.buttonWidth), l.n_do.setHeight(l.buttonHeight), l.nImg.onload = function () {
                    l.n_do_canvas = FWDUVPUtils.getCanvasWithModifiedColor(l.nImg, l.nBC).canvas, l.n_do.screen.appendChild(l.n_do_canvas)
                }) : (l.n_do = new FWDUVPDisplayObject("img"), l.n_do.setScreen(l.nImg), l.n_do.setWidth(l.buttonWidth), l.n_do.setHeight(l.buttonHeight)), l.addChild(l.n_do), l.sImg = new Image, l.sImg.src = l.sImgPath_str, l.useHEX ? (l.s_do = new FWDUVPTransformDisplayObject("div"), l.s_do.setWidth(l.buttonWidth), l.s_do.setHeight(l.buttonHeight), l.sImg.onload = function () {
                    l.s_do_canvas = FWDUVPUtils.getCanvasWithModifiedColor(l.sImg, l.nBC).canvas, l.s_do.screen.appendChild(l.s_do_canvas)
                }, l.showOver || l.s_do.setAlpha(0), l.addChild(l.s_do)) : (l.s_do = new FWDUVPDisplayObject("img"), l.s_do.setScreen(l.sImg), l.s_do.setWidth(l.buttonWidth), l.s_do.setHeight(l.buttonHeight), l.addChild(l.s_do), l.useHEX || l.s_do.setAlpha(0)), l.showOver && l.addChild(l.s_do), l.hasPointerEvent_bl ? (l.screen.addEventListener("pointerup", l.onMouseUp), l.screen.addEventListener("pointerover", l.setSelectedState), l.screen.addEventListener("pointerout", l.setNormalState)) : l.screen.addEventListener && (l.isMbl || (l.screen.addEventListener("mouseover", l.setSelectedState), l.screen.addEventListener("mouseout", l.setNormalState), l.screen.addEventListener("mouseup", l.onMouseUp)), l.screen.addEventListener("touchend", l.onMouseUp))
            }, l.setNormalState = function (e) {
                l.showOver ? (FWDAnimation.killTweensOf(l.s_do), FWDAnimation.to(l.s_do, .6, {
                    alpha: 1,
                    ease: Quart.easeOut
                })) : (FWDAnimation.killTweensOf(l.s_do), FWDAnimation.to(l.s_do, .6, {
                    alpha: 0,
                    ease: Quart.easeOut
                }))
            }, l.setSelectedState = function (e) {
                l.showOver ? (FWDAnimation.killTweensOf(l.s_do), FWDAnimation.to(l.s_do, .6, {
                    alpha: 0,
                    ease: Quart.easeOut
                })) : (FWDAnimation.killTweensOf(l.s_do), FWDAnimation.to(l.s_do, .6, {
                    alpha: 1,
                    ease: Quart.easeOut
                }))
            }, l.onMouseUp = function (e) {
                l.dispatchEvent(d.MOUSE_UP), l.dispatchEvent(d.CLICK)
            }, l.updateHEXColors = function (e, t) {
                l.n_do_canvas && FWDUVPUtils.changeCanvasHEXColor(l.nImg, l.n_do_canvas, e);
                var o = t;
                l.showOver && (o = e), FWDUVPUtils.changeCanvasHEXColor(l.sImg, l.s_do_canvas, o)
            }, l.init()
        };
        d.setPrototype = function () {
            d.prototype = null, d.prototype = new FWDUVPTransformDisplayObject("div", "relative")
        }, d.MOUSE_UP = "onClick", d.CLICK = "onClick", d.prototype = null, e.FWDUVPSimpleSizeButton = d
    }(window),
    function (a) {
        var r = function (i, e) {
            var _ = this;
            r.prototype;
            _.main_do = null, _.reader = null, _.subtitiles_ar = null, _.hasText_bl = !1, _.isLded = !1, _.isMbl = FWDUVPUtils.isMobile, _.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, _.showSubtitileByDefault_bl = e.showSubtitileByDefault_bl, _.init = function () {
                _.setOverflow("visible"), _.getStyle().pointerEvents = "none", _.getStyle().cursor = "default", _.setupTextContainer(), _.getStyle().margin = "auto", _.hide(), setTimeout(function () {
                    _.setSizeOnce()
                }, 500)
            }, _.setSizeOnce = function () {}, _.setupTextContainer = function () {
                _.text_do = new FWDUVPTransformDisplayObject("div"), _.text_do.getStyle().pointerEvents = "none", _.text_do.hasTransform3d_bl = !1, _.text_do.setBackfaceVisibility(), _.text_do.getStyle().transformOrigin = "50% 0%", _.text_do.getStyle().textAlign = "center", _.text_do.getStyle().fontSmoothing = "antialiased", _.text_do.getStyle().webkitFontSmoothing = "antialiased", _.text_do.getStyle().textRendering = "optimizeLegibility", _.addChild(_.text_do)
            }, _.loadSubtitle = function (e) {
                if (_.text_do.setX(-5e3), -1 == location.protocol.indexOf("file:")) {
                    _.subtitiles_ar = [], _.stopToLoadSubtitle(), _.sourceURL_str = e, _.xhr = new XMLHttpRequest, _.xhr.onreadystatechange = _.onLoad, _.xhr.onerror = _.onError;
                    try {
                        _.xhr.open("get", _.sourceURL_str + "?rand=" + parseInt(99999999 * Math.random()), !0), _.xhr.send()
                    } catch (e) {
                        e && e.message && e.message
                    }
                }
            }, _.onLoad = function (e) {
                4 == _.xhr.readyState && (404 == _.xhr.status ? _.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                    text: "Subtitle file path is not found: <font color='#FF0000'>" + _.sourceURL_str + "</font>"
                }) : 408 == _.xhr.status ? _.dispatchEvent(FWDUVPData.LOAD_ERROR, {
                    text: "Loadiong subtitle file file request load timeout!"
                }) : 200 == _.xhr.status && (a.JSON, _.subtitle_txt = _.xhr.responseText, _.isShowed_bl && _.show(), _.parseSubtitle(_.subtitle_txt), _.prevText = "none", _.shId_to = setTimeout(function () {
                    _.show(), _.text_do.setX(0), _.updateSubtitle(i.currentSecconds)
                }, 400))), _.dispatchEvent(r.LOAD_COMPLETE)
            }, _.onError = function (e) {
                try {
                    a.console && console.log(e), a.console && console.log(e.message)
                } catch (e) {}
                _.dispatchEvent(r.LOAD_ERROR, {
                    text: "Error loading subtitle file : <font color='#FF0000'>" + _.sourceURL_str + "</font>."
                })
            }, _.stopToLoadSubtitle = function () {
                if (null != _.xhr) {
                    try {
                        _.xhr.abort()
                    } catch (e) {}
                    _.xhr.onreadystatechange = null, _.xhr.onerror = null, _.xhr = null
                }
                _.hide(), _.isLded = !1
            }, _.parseSubtitle = function (e) {
                function i(e) {
                    return null == e ? "" : e.replace(/^\s+|\s+$/g, "")
                }
                _.isLded = !0;
                var a = (e = i(e = e.replace(/\r\n|\r|\n/g, "\n"))).split("\n\n"),
                    r = 0;
                for (s in a) {
                    var l = a[s].split("\n");
                    if (2 <= l.length) {
                        if (n = l[0], d = i(l[1].split(" --\x3e ")[0]), o = i(l[1].split(" --\x3e ")[1]), t = l[2], 2 < l.length)
                            for (j = 3; j < l.length; j++) t += "<br>" + l[j];
                        _.subtitiles_ar[r] = {}, _.subtitiles_ar[r].number = n, _.subtitiles_ar[r].start = d, _.subtitiles_ar[r].end = o, _.subtitiles_ar[r].startDuration = FWDUVPUtils.formatTimeWithMiliseconds(d), _.subtitiles_ar[r].endDuration = FWDUVPUtils.formatTimeWithMiliseconds(o), _.subtitiles_ar[r].text = "<p class='fwduvp-subtitle'>" + t + "</p>"
                    }
                    r++
                }
                for (var d = 0; d < _.subtitiles_ar.length; d++) _.subtitiles_ar[d] || (_.subtitiles_ar.splice(d, 1), d--)
            }, _.updateSubtitle = function (e) {
                if (_.isLded) {
                    for (var t, o, s = "", n = 0; n < _.subtitiles_ar.length; n++)
                        if (t = _.subtitiles_ar[n].startDuration, o = _.subtitiles_ar[n].endDuration, t < e && e < o) {
                            s = _.subtitiles_ar[n].text;
                            break
                        } _.prevText != s && (_.text_do.setInnerHTML(s), _.setAlpha(0), setTimeout(function () {
                        _.setAlpha(1), _.position()
                    }, 300), _.hasText_bl = !0), _.prevText = s
                }
            }, _.position = function (e) {
                var t, o;
                _.isLded && (_.setWidth(i.tempVidStageWidth), _.text_do.setWidth(i.tempVidStageWidth), _.setX(Math.round((i.tempVidStageWidth - _.w) / 2)), t = _.text_do.getHeight(), o = i.controller_do ? i.controller_do.isShowed_bl ? parseInt(i.vidStageHeight - i.controller_do.h - t) : parseInt(i.vidStageHeight - t - 10) : parseInt(i.vidStageHeight - t), FWDAnimation.killTweensOf(_.text_do), e ? FWDAnimation.to(_.text_do, .8, {
                    y: o,
                    ease: Expo.easeInOut
                }) : _.text_do.setY(o), _.text_do.setX(0))
            }, _.show = function () {
                _.setVisible(!0)
            }, _.hide = function () {
                clearTimeout(_.shId_to), _.setVisible(!1)
            }, _.init()
        };
        r.getDuration = function (e) {
            var t = 0,
                o = 0,
                s = 0;
            return "0" == (t = (e = e.split(":"))[0])[0] && "0" != t[1] && (t = parseInt(t[1])), "00" == t && (t = 0), "0" == (o = e[1])[0] && "0" != o[1] && (o = parseInt(o[1])), "00" == o && (o = 0), secs = parseInt(e[2].replace(/,.*/gi, "")), "0" == secs[0] && "0" != secs[1] && (secs = parseInt(secs[1])), "00" == secs && (secs = 0), 0 != t && (s += 60 * t * 60), 0 != o && (s += 60 * o), s += secs
        }, r.setPrototype = function () {
            r.prototype = null, r.prototype = new FWDUVPTransformDisplayObject("div")
        }, r.LOAD_ERROR = "error", r.LOAD_COMPLETE = "complete", r.prototype = null, a.FWDUVPSubtitle = r
    }(window),
    function (r) {
        var l = function (e, t, o, s, n, i) {
            var a = this;
            l.prototype;
            a.buttonRef_do = e, a.bkPath_str = t, a.pointerPath_str = o, a.text_do = null, a.pointer_do = null, a.fontColor_str = n, a.toolTipLabel_str = s, a.toolTipsButtonsHideDelay = 1e3 * i, a.pointerWidth = 7, a.pointerHeight = 4, a.showWithDelayId_to, a.isMbl = FWDUVPUtils.isMobile, a.isShowed_bl = !0, a.init = function () {
                a.setOverflow("visible"), a.screen.className = "UVP-tooltip-bk", a.setupMainContainers(), a.setLabel(a.toolTipLabel_str), a.hide(), a.getStyle().background = "url('" + a.bkPath_str + "')", a.getStyle().zIndex = 9999999999999
            }, a.setupMainContainers = function () {
                a.text_do = new FWDUVPDisplayObject("div"), a.text_do.screen.className = "UVP-tooltip-text", a.text_do.hasTransform3d_bl = !1, a.text_do.hasTransform2d_bl = !1, a.text_do.setBackfaceVisibility(), a.text_do.setDisplay("inline"), a.text_do.getStyle().fontFamily = "Arial", a.text_do.getStyle().fontSize = "12px", a.text_do.getStyle().color = a.fontColor_str, a.text_do.getStyle().whiteSpace = "nowrap", a.text_do.getStyle().fontSmoothing = "antialiased", a.text_do.getStyle().webkitFontSmoothing = "antialiased", a.text_do.getStyle().textRendering = "optimizeLegibility", a.text_do.getStyle().padding = "6px", a.text_do.getStyle().paddingTop = "4px", a.text_do.getStyle().paddingBottom = "4px", a.setLabel(), a.addChild(a.text_do), a.pointer_do = new FWDUVPDisplayObject("div"), a.pointer_do.screen.className = "UVP-tooltip-pointer", a.pointer_do.getStyle().background = "url('" + a.pointerPath_str + "')", a.pointer_do.setWidth(a.pointerWidth), a.pointer_do.setHeight(a.pointerHeight), a.addChild(a.pointer_do)
            }, a.setLabel = function (e) {
                a.text_do.setInnerHTML(s), setTimeout(function () {
                    null != a && (a.setWidth(a.text_do.getWidth()), a.setHeight(a.text_do.getHeight()), a.positionPointer())
                }, 50)
            }, a.positionPointer = function (e) {
                var t, o;
                e = e || 0, t = parseInt((a.w - a.pointerWidth) / 2) + e, o = a.h, a.pointer_do.setX(t), a.pointer_do.setY(o)
            }, a.show = function () {
                a.isShowed_bl || (a.isShowed_bl = !0, FWDAnimation.killTweensOf(a), clearTimeout(a.showWithDelayId_to), a.showWithDelayId_to = setTimeout(a.showFinal, a.toolTipsButtonsHideDelay), r.addEventListener ? r.addEventListener("mousemove", a.moveHandler) : document.attachEvent && (document.detachEvent("onmousemove", a.moveHandler), document.attachEvent("onmousemove", a.moveHandler)))
            }, a.showFinal = function () {
                a.setVisible(!0), a.setAlpha(0), FWDAnimation.to(a, .4, {
                    alpha: 1,
                    onComplete: function () {
                        a.setVisible(!0)
                    },
                    ease: Quart.easeOut
                })
            }, a.moveHandler = function (e) {
                var t = FWDUVPUtils.getViewportMouseCoordinates(e);
                FWDUVPUtils.hitTest(a.buttonRef_do.screen, t.screenX, t.screenY) || a.hide()
            }, a.hide = function () {
                a.isShowed_bl && (clearTimeout(a.showWithDelayId_to), r.removeEventListener ? r.removeEventListener("mousemove", a.moveHandler) : document.detachEvent && document.detachEvent("onmousemove", a.moveHandler), FWDAnimation.killTweensOf(a), a.setVisible(!1), a.isShowed_bl = !1)
            }, a.init()
        };
        l.setPrototype = function () {
            l.prototype = null, l.prototype = new FWDUVPDisplayObject("div", "fixed")
        }, l.CLICK = "onClick", l.MOUSE_DOWN = "onMouseDown", l.prototype = null, r.FWDUVPToolTip = l
    }(window), window.FWDUVPTransformDisplayObject = function (e, t, o, s) {
        var i = this;
        if (i.listeners = {
                events_ar: []
            }, "div" != e && "img" != e && "canvas" != e && "iframe" != e) throw Error("Type is not valid! " + e);
        i.type = e, i.children_ar = [], i.style, i.screen, i.numChildren, i.transform, i.position = t || "absolute", i.overflow = o || "hidden", i.display = s || "block", i.visible = !0, i.buttonMode, i.x = 0, i.y = 0, i.scale = 1, i.rotation = 0, i.w = 0, i.h = 0, i.rect, i.alpha = 1, i.innerHTML = "", i.opacityType = "", i.isHtml5_bl = !1, i.hasTransform2d_bl = FWDUVPUtils.hasTransform2d, i.init = function () {
            i.setScreen()
        }, i.getTransform = function () {
            for (var e, t = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"]; e = t.shift();)
                if (void 0 !== i.screen.style[e]) return e;
            return !1
        }, i.getOpacityType = function () {
            var e = void 0 !== i.screen.style.opacity ? "opacity" : "filter";
            return e
        }, i.setScreen = function (e) {
            "img" == i.type && e ? i.screen = e : i.screen = document.createElement(i.type), i.setMainProperties()
        }, i.setMainProperties = function () {
            i.transform = i.getTransform(), i.setPosition(i.position), i.setOverflow(i.overflow), i.opacityType = i.getOpacityType(), "opacity" == i.opacityType && (i.isHtml5_bl = !0), "filter" == i.opacityType && (i.screen.style.filter = "inherit"), i.screen.style.left = "0px", i.screen.style.top = "0px", i.screen.style.margin = "0px", i.screen.style.padding = "0px", i.screen.style.maxWidth = "none", i.screen.style.maxHeight = "none", i.screen.style.border = "none", i.screen.style.lineHeight = "1", i.screen.style.backfaceVisibility = "hidden", i.screen.style.webkitBackfaceVisibility = "hidden", i.screen.style.MozBackfaceVisibility = "hidden", i.screen.style.MozImageRendering = "optimizeSpeed", i.screen.style.WebkitImageRendering = "optimizeSpeed", "img" == e && (i.setWidth(i.screen.width), i.setHeight(i.screen.height), i.screen.onmousedown = function (e) {
                return !1
            })
        }, i.setBackfaceVisibility = function () {
            i.screen.style.backfaceVisibility = "visible", i.screen.style.webkitBackfaceVisibility = "visible", i.screen.style.MozBackfaceVisibility = "visible"
        }, i.removeBackfaceVisibility = function () {
            i.screen.style.backfaceVisibility = "hidden", i.screen.style.webkitBackfaceVisibility = "hidden", i.screen.style.MozBackfaceVisibility = "hidden"
        }, i.setSelectable = function (e) {
            if (!e) {
                try {
                    i.screen.style.userSelect = "none"
                } catch (e) {}
                try {
                    i.screen.style.MozUserSelect = "none"
                } catch (e) {}
                try {
                    i.screen.style.webkitUserSelect = "none"
                } catch (e) {}
                try {
                    i.screen.style.khtmlUserSelect = "none"
                } catch (e) {}
                try {
                    i.screen.style.oUserSelect = "none"
                } catch (e) {}
                try {
                    i.screen.style.msUserSelect = "none"
                } catch (e) {}
                try {
                    i.screen.msUserSelect = "none"
                } catch (e) {}
                i.screen.ondragstart = function (e) {
                    return !1
                }, i.screen.onselectstart = function () {
                    return !1
                }, i.screen.style.webkitTouchCallout = "none"
            }
        }, i.getScreen = function () {
            return i.screen
        }, i.setVisible = function (e) {
            i.visible = e, 1 == i.visible ? i.screen.style.visibility = "visible" : i.screen.style.visibility = "hidden"
        }, i.getVisible = function () {
            return i.visible
        }, i.setResizableSizeAfterParent = function () {
            i.screen.style.width = "100%", i.screen.style.height = "100%"
        }, i.getStyle = function () {
            return i.screen.style
        }, i.setOverflow = function (e) {
            i.overflow = e, i.screen.style.overflow = i.overflow
        }, i.setPosition = function (e) {
            i.position = e, i.screen.style.position = i.position
        }, i.setDisplay = function (e) {
            i.display = e, i.screen.style.display = i.display
        }, i.setButtonMode = function (e) {
            i.buttonMode = e, 1 == i.buttonMode ? i.screen.style.cursor = "pointer" : i.screen.style.cursor = "default"
        }, i.setBkColor = function (e) {
            i.screen.style.backgroundColor = e
        }, i.setInnerHTML = function (e) {
            i.innerHTML = e, i.screen.innerHTML = i.innerHTML
        }, i.getInnerHTML = function () {
            return i.innerHTML
        }, i.getRect = function () {
            return i.screen.getBoundingClientRect()
        }, i.setAlpha = function (e) {
            i.alpha = e, "opacity" == i.opacityType ? i.screen.style.opacity = i.alpha : "filter" == i.opacityType && (i.screen.style.filter = "alpha(opacity=" + 100 * i.alpha + ")", i.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(100 * i.alpha) + ")")
        }, i.getAlpha = function () {
            return i.alpha
        }, i.getRect = function () {
            return i.screen.getBoundingClientRect()
        }, i.getGlobalX = function () {
            return i.getRect().left
        }, i.getGlobalY = function () {
            return i.getRect().top
        }, i.setX = function (e) {
            i.x = e, i.hasTransform2d_bl ? i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px) scale(" + i.scale + " , " + i.scale + ") rotate(" + i.rotation + "deg)" : i.screen.style.left = i.x + "px"
        }, i.getX = function () {
            return i.x
        }, i.setY = function (e) {
            i.y = e, i.hasTransform2d_bl ? i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px) scale(" + i.scale + " , " + i.scale + ") rotate(" + i.rotation + "deg)" : i.screen.style.top = i.y + "px"
        }, i.getY = function () {
            return i.y
        }, i.setScale2 = function (e) {
            i.scale = e, i.hasTransform2d_bl && (i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px) scale(" + i.scale + " , " + i.scale + ") rotate(" + i.rotation + "deg)")
        }, i.getScale = function () {
            return i.scale
        }, i.setRotation = function (e) {
            i.rotation = e, i.hasTransform2d_bl && (i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px) scale(" + i.scale + " , " + i.scale + ") rotate(" + i.rotation + "deg)")
        }, i.setWidth = function (e) {
            i.w = e, "img" == i.type && (i.screen.width = i.w), i.screen.style.width = i.w + "px"
        }, i.getWidth = function () {
            return "div" == i.type ? 0 != i.screen.offsetWidth ? i.screen.offsetWidth : i.w : "img" == i.type ? 0 != i.screen.offsetWidth ? i.screen.offsetWidth : 0 != i.screen.width ? i.screen.width : i._w : "canvas" == i.type ? 0 != i.screen.offsetWidth ? i.screen.offsetWidth : i.w : void 0
        }, i.setHeight = function (e) {
            i.h = e, "img" == i.type && (i.screen.height = i.h), i.screen.style.height = i.h + "px"
        }, i.getHeight = function () {
            return "div" == i.type ? 0 != i.screen.offsetHeight ? i.screen.offsetHeight : i.h : "img" == i.type ? 0 != i.screen.offsetHeight ? i.screen.offsetHeight : 0 != i.screen.height ? i.screen.height : i.h : "canvas" == i.type ? 0 != i.screen.offsetHeight ? i.screen.offsetHeight : i.h : void 0
        }, i.getNumChildren = function () {
            return i.children_ar.length
        }, i.addChild = function (e) {
            i.contains(e) && i.children_ar.splice(FWDUVPUtils.indexOfArray(i.children_ar, e), 1), i.children_ar.push(e), i.screen.appendChild(e.screen)
        }, i.removeChild = function (e) {
            if (!i.contains(e)) throw Error("##removeChild()## Child doesn't exist, it can't be removed!");
            i.children_ar.splice(FWDUVPUtils.indexOfArray(i.children_ar, e), 1), i.screen.removeChild(e.screen)
        }, i.contains = function (e) {
            return -1 != FWDUVPUtils.indexOfArray(i.children_ar, e)
        }, i.addChildAtZero = function (e) {
            0 == i.numChildren ? (i.children_ar.push(e), i.screen.appendChild(e.screen)) : (i.screen.insertBefore(e.screen, i.children_ar[0].screen), i.contains(e) && i.children_ar.splice(FWDUVPUtils.indexOfArray(i.children_ar, e), 1), i.children_ar.unshift(e))
        }, i.getChildAt = function (e) {
            if (e < 0 || e > i.numChildren - 1) throw Error("##getChildAt()## Index out of bounds!");
            if (0 == i.numChildren) throw Errror("##getChildAt## Child dose not exist!");
            return i.children_ar[e]
        }, i.removeChildAtZero = function () {
            i.screen.removeChild(i.children_ar[0].screen), i.children_ar.shift()
        }, i.addListener = function (e, t) {
            if (null == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function.");
            var o = {};
            o.type = e, o.listener = t, (o.target = i).listeners.events_ar.push(o)
        }, i.dispatchEvent = function (e, t) {
            if (null == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            for (var o = 0, s = i.listeners.events_ar.length; o < s; o++)
                if (i.listeners.events_ar[o].target === i && i.listeners.events_ar[o].type === e) {
                    if (t)
                        for (var n in t) i.listeners.events_ar[o][n] = t[n];
                    i.listeners.events_ar[o].listener.call(i, i.listeners.events_ar[o]);
                    break
                }
        }, i.removeListener = function (e, t) {
            if (null == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function." + e);
            for (var o = 0, s = i.listeners.events_ar.length; o < s; o++)
                if (i.listeners.events_ar[o].target === i && i.listeners.events_ar[o].type === e && i.listeners.events_ar[o].listener === t) {
                    i.listeners.events_ar.splice(o, 1);
                    break
                }
        }, i.disposeImage = function () {
            "img" == i.type && (i.screen.src = null)
        }, i.destroy = function () {
            try {
                i.screen.parentNode.removeChild(i.screen)
            } catch (e) {}
            i.screen.onselectstart = null, i.screen.ondragstart = null, i.screen.ontouchstart = null, i.screen.ontouchmove = null, i.screen.ontouchend = null, i.screen.onmouseover = null, i.screen.onmouseout = null, i.screen.onmouseup = null, i.screen.onmousedown = null, i.screen.onmousemove = null, i.screen.onclick = null, delete i.screen, delete i.style, delete i.rect, delete i.selectable, delete i.buttonMode, delete i.position, delete i.overflow, delete i.visible, delete i.innerHTML, delete i.numChildren, delete i.x, delete i.y, delete i.w, delete i.h, delete i.opacityType, delete i.isHtml5_bl, delete i.hasTransform2d_bl, i.children_ar = null, i.style = null, i.screen = null, i.numChildren = null, i.transform = null, i.position = null, i.overflow = null, i.display = null, i.visible = null, i.buttonMode = null, i.globalX = null, i.globalY = null, i.x = null, i.y = null, i.w = null, i.h = null, i.rect = null, i.alpha = null, i.innerHTML = null, i.opacityType = null, i.isHtml5_bl = null, i.hasTransform3d_bl = null, i.hasTransform2d_bl = null, i = null
        }, i.init()
    },
    function (o) {
        var a = function (n, e) {
            var i = this;
            a.prototype;
            i.video_el = null, i.sourcePath_str = null, i.bk_do = null, i.controllerHeight = n._d.controllerHeight, i.sW = 0, i.sH = 0, i.lastPercentPlayed = 0, i.volume = e, i.curDuration = 0, i.countNormalMp3Errors = 0, i.countShoutCastErrors = 0, i.maxShoutCastCountErrors = 5, i.maxNormalCountErrors = 1, i.disableClickForAWhileId_to, i.showErrorWithDelayId_to, i.playWithDelayId_to, i.disableClick_bl = !1, i.allowScrubing_bl = !1, i.hasError_bl = !0, i.isPlaying_bl = !1, i.isStopped_bl = !0, i.hasPlayedOnce_bl = !1, i.isStartEventDispatched_bl = !1, i.isSafeToBeControlled_bl = !1, i.isMbl = FWDUVPUtils.isMobile, i.init = function () {
                i.setBkColor(n.videoBackgroundColor_str), i.setupVideo()
            }, i.setupVideo = function () {
                null == i.video_el && (i.video_el = document.createElement("video"), i.video_el.controls = !1, i.video_el.volume = i.volume, n._d.playsinline && (i.video_el.WebKitPlaysInline = !0, i.video_el.playsinline = !0, i.video_el.setAttribute("playsinline", ""), i.video_el.setAttribute("webkit-playsinline", "")), n.fillEntireVideoScreen_bl && (i.video_el.style.objectFit = "cover"), n._d.autoPlay_bl && (i.video_el.muted = !0), i.video_el.style.position = "relative", i.video_el.style.left = "0px", i.video_el.style.top = "0px", i.video_el.style.width = "100%", i.video_el.style.height = "100%", i.video_el.style.margin = "0px", i.video_el.style.padding = "0px", i.video_el.style.maxWidth = "none", i.video_el.style.maxHeight = "none", i.video_el.style.border = "none", i.video_el.style.lineHeight = "0", i.video_el.style.msTouchAction = "none", i.screen.appendChild(i.video_el)), i.video_el.addEventListener("error", i.errorHandler), i.video_el.addEventListener("progress", i.updateProgress), i.video_el.addEventListener("timeupdate", i.updateVideo), i.video_el.addEventListener("pause", i.pauseHandler), i.video_el.addEventListener("play", i.playHandler), FWDUVPUtils.isIE || i.video_el.addEventListener("waiting", i.startToBuffer), i.video_el.addEventListener("playing", i.stopToBuffer), i.video_el.addEventListener("ended", i.endedHandler), i.resizeAndPosition()
            }, i.destroyVideo = function () {
                clearTimeout(i.showErrorWithDelayId_to), i.video_el && (i.stopToUpdateSubtitles(), i.video_el.removeEventListener("error", i.errorHandler), i.video_el.removeEventListener("progress", i.updateProgress), i.video_el.removeEventListener("timeupdate", i.updateVideo), i.video_el.removeEventListener("pause", i.pauseHandler), i.video_el.removeEventListener("play", i.playHandler), FWDUVPUtils.isIE || i.video_el.removeEventListener("waiting", i.startToBuffer), i.video_el.removeEventListener("playing", i.stopToBuffer), i.video_el.removeEventListener("ended", i.endedHandler), i.video_el.style.visibility = "hidden", i.video_el.src = "", i.video_el.load())
            }, i.startToBuffer = function (e) {
                i.dispatchEvent(a.START_TO_BUFFER)
            }, i.stopToBuffer = function () {
                i.dispatchEvent(a.STOP_TO_BUFFER)
            }, i.errorHandler = function (e) {
                var t;
                "DASH" != n.videoType_str && (i.hasError_bl = !0, t = 0 == i.video_el.networkState ? "error '_s.video_el.networkState = 0'" : 1 == i.video_el.networkState ? "error '_s.video_el.networkState = 1'" : 3 == i.video_el.networkState ? "source not found" : e, o.console && o.console.log(i.video_el.networkState), clearTimeout(i.showErrorWithDelayId_to), i.showErrorWithDelayId_to = setTimeout(function () {
                    i.dispatchEvent(a.ERROR, {
                        text: t
                    })
                }, 200))
            }, i.resizeAndPosition = function (e, t, o, s) {
                e && (i.sW = e, i.sH = t), i.setWidth(i.sW), i.setHeight(i.sH), i.setX(o), i.setY(s), n.is360 && i.renderer && (i.camera.aspect = i.sW / i.sH, i.camera.updateProjectionMatrix(), i.renderer.setSize(i.sW, i.sH))
            }, i.setSource = function (e) {
                i.stopToUpdateSubtitles(), i.sourcePath_str = e, n.is360 && i.video_el && (i.video_el.style.visibility = "hidden"), i.video_el && i.stop(), i.initVideo()
            }, i.play = function (e) {
                var t;
                if (clearTimeout(i.playWithDelayId_to), FWDUVPlayer.curInstance = n, i.isStopped_bl) i.initVideo(), i.setVolume(), i.isMbl ? i.play() : i.playWithDelayId_to = setTimeout(i.play, 1e3), i.hasStrtLivStrm = !0, i.startToBuffer(!0), i.isPlaying_bl = !0;
                else if (!i.video_el.ended || e) try {
                    i.hasStrtLivStrm = !0, i.isPlaying_bl = !0, i.hasPlayedOnce_bl = !0, void 0 !== (t = i.video_el.play()) && t.then(function () {}, function () {}), FWDUVPUtils.isIE && i.dispatchEvent(a.PLAY)
                } catch (e) {}
                n.is360 && i.add360Vid()
            }, i.initVideo = function () {
                i.setupVideo(), i.setVolume(), i.isPlaying_bl = !1, i.hasError_bl = !1, i.allowScrubing_bl = !1, i.isStopped_bl = !1, i.video_el.src != i.sourcePath_str && (i.video_el.src = i.sourcePath_str)
            }, i.pause = function () {
                if (null != i && !i.isStopped_bl && !i.hasError_bl && !i.video_el.ended) try {
                    i.video_el.pause(), i.isPlaying_bl = !1, FWDUVPUtils.isIE && i.dispatchEvent(a.PAUSE)
                } catch (e) {}
            }, i.togglePlayPause = function () {
                null != i && i.isSafeToBeControlled_bl && (i.isPlaying_bl ? i.pause() : i.play())
            }, i.resume = function () {
                i.isStopped_bl || i.play()
            }, i.pauseHandler = function () {
                i.allowScrubing_bl || i.dispatchEvent(a.PAUSE)
            }, i.playHandler = function () {
                i.allowScrubing_bl || (i.isStartEventDispatched_bl || (i.dispatchEvent(a.START), i.isStartEventDispatched_bl = !0), n.is360 && i.start360Render(), i.startToUpdateSubtitles(), i.dispatchEvent(a.PLAY))
            }, i.endedHandler = function () {
                i.stopToUpdateSubtitles(), i.dispatchEvent(a.PLAY_COMPLETE)
            }, i.stop = function (e) {
                (null != i && null != i.video_el && !i.isStopped_bl || e) && (clearTimeout(i.sizeId_to), i.isPlaying_bl = !1, i.isStopped_bl = !0, i.hasPlayedOnce_bl = !0, i.hasStrtLivStrm = !1, i.isSafeToBeControlled_bl = !1, i.isStartEventDispatched_bl = !1, i.stopToUpdateSubtitles(), clearTimeout(i.playWithDelayId_to), i.stop360Render(), i.destroyVideo(), i.dispatchEvent(a.LOAD_PROGRESS, {
                    percent: 0
                }), i.dispatchEvent(a.UPDATE_TIME, {
                    curTime: "00:00",
                    totalTime: "00:00"
                }), i.dispatchEvent(a.STOP), i.stopToBuffer())
            }, i.safeToBeControlled = function () {
                (n.videoType_str != FWDUVPlayer.HLS_JS && n.videoType_str != FWDUVPlayer.DASH || i.hasStrtLivStrm) && (i.isSafeToBeControlled_bl || (i.stopToScrub(), i.resizeAndPosition(), i.hasHours_bl = 0 < Math.floor(i.video_el.duration / 3600), i.isPlaying_bl = !0, i.isSafeToBeControlled_bl = !0, n.is360 || (i.video_el.style.visibility = "visible"), setTimeout(function () {
                    i.renderer && (i.renderer.domElement.style.left = "0px")
                }, 1e3), n.fillEntireVideoScreen_bl ? i.sizeId_to = setTimeout(function () {
                    i.dispatchEvent(a.SAFE_TO_SCRUBB)
                }, 500) : i.dispatchEvent(a.SAFE_TO_SCRUBB)))
            }, i.updateProgress = function () {
                var e;
                n.videoType_str == FWDUVPlayer.HLS_JS && !i.hasStrtLivStrm || ((e = 0) < i.video_el.buffered.length && (e = i.video_el.buffered.end(i.video_el.buffered.length - 1).toFixed(1) / i.video_el.duration.toFixed(1), !isNaN(e) && e || (e = 0)), 1 == e && i.video_el.removeEventListener("progress", i.updateProgress), i.dispatchEvent(a.LOAD_PROGRESS, {
                    percent: e
                }))
            }, i.updateVideo = function () {
                var e;
                i.allowScrubing_bl || (e = i.video_el.currentTime / i.video_el.duration, i.dispatchEvent(a.UPDATE, {
                    percent: e
                }));
                var t = FWDUVPUtils.formatTime(i.video_el.duration),
                    o = FWDUVPUtils.formatTime(i.video_el.currentTime);
                i.video_el.currentTime && i.safeToBeControlled(), isNaN(i.video_el.duration) || n.videoType_str != FWDUVPlayer.VIDEO && n.videoType_str != FWDUVPlayer.HLS_JS && n.videoType_str != FWDUVPlayer.DASH ? i.dispatchEvent(a.UPDATE_TIME, {
                    curTime: "00:00",
                    totalTime: "00:00",
                    seconds: 0,
                    totalTimeInSeconds: 0
                }) : i.dispatchEvent(a.UPDATE_TIME, {
                    curTime: o,
                    totalTime: t,
                    seconds: i.video_el.currentTime,
                    totalTimeInSeconds: i.video_el.duration
                }), i.lastPercentPlayed = e, i.curDuration = o
            }, i.startToScrub = function () {
                i.allowScrubing_bl = !0
            }, i.stopToScrub = function () {
                i.allowScrubing_bl = !1
            }, i.scrubbAtTime = function (e) {
                i.video_el.currentTime = e;
                var t = FWDUVPUtils.formatTime(i.video_el.duration),
                    o = FWDUVPUtils.formatTime(i.video_el.currentTime);
                i.dispatchEvent(a.UPDATE_TIME, {
                    curTime: o,
                    totalTime: t
                })
            }, i.scrub = function (e, t) {
                t && i.startToScrub();
                try {
                    i.video_el.currentTime = i.video_el.duration * e;
                    var o = FWDUVPUtils.formatTime(i.video_el.duration),
                        s = FWDUVPUtils.formatTime(i.video_el.currentTime);
                    i.dispatchEvent(a.UPDATE_TIME, {
                        curTime: s,
                        totalTime: o
                    })
                } catch (t) {}
            }, i.replay = function () {
                i.scrub(0), i.play()
            }, i.setVolume = function (e) {
                null != e && (i.volume = e), i.video_el && (i.video_el.volume = i.volume, e && (i.video_el.muted = !1))
            }, i.setPlaybackRate = function (e) {
                i.video_el && (i.video_el.defaultPlaybackRate = e, i.video_el.playbackRate = e)
            }, i.add360Vid = function () {
                i.renderer ? i.screen.appendChild(i.renderer.domElement) : null != o.THREE && (i.renderer = new THREE.WebGLRenderer({
                    antialias: !0
                }), i.renderer.setSize(i.sW, i.sH), i.renderer.domElement.style.position = "absolute", i.renderer.domElement.style.left = "0px", i.renderer.domElement.style.top = "0px", i.renderer.domElement.style.margin = "0px", i.renderer.domElement.style.padding = "0px", i.renderer.domElement.style.maxWidth = "none", i.renderer.domElement.style.maxHeight = "none", i.renderer.domElement.style.border = "none", i.renderer.domElement.style.lineHeight = "1", i.renderer.domElement.style.backgroundColor = "transparent", i.renderer.domElement.style.backfaceVisibility = "hidden", i.renderer.domElement.style.webkitBackfaceVisibility = "hidden", i.renderer.domElement.style.MozBackfaceVisibility = "hidden", i.renderer.domElement.style.MozImageRendering = "optimizeSpeed", i.renderer.domElement.style.WebkitImageRendering = "optimizeSpeed", i.screen.appendChild(i.renderer.domElement), i.scene = new THREE.Scene, i.video_el.setAttribute("crossorigin", "anonymous"), i.canvas = document.createElement("canvas"), i.context = i.canvas.getContext("2d"), FWDUVPUtils.isFirefox ? i.videoTexture = new THREE.Texture(i.video_el) : i.videoTexture = new THREE.Texture(i.canvas), i.videoTexture.minFilter = THREE.LinearFilter, i.videoTexture.magFilter = THREE.LinearFilter, i.videoTexture.format = THREE.RGBFormat, i.cubeGeometry = new THREE.SphereGeometry(500, 60, 40), i.sphereMat = new THREE.MeshBasicMaterial({
                    map: i.videoTexture
                }), i.sphereMat.side = THREE.BackSide, i.cube = new THREE.Mesh(i.cubeGeometry, i.sphereMat), i.scene.add(i.cube), i.camera = new THREE.PerspectiveCamera(45, i.sW / i.sH, .1, 1e4), i.camera.position.y = 0, i.camera.position.z = 500, i.camera.position.x = 0, i.scene.add(i.camera), i.controls = new THREE.OrbitControls(i.camera, n.dClk_do.screen), i.controls.enableDamping = !0, i.controls.enableZoom = !1, i.controls.dampingFactor = .25, i.controls.maxDistance = 500, i.controls.minDistance = 500, i.controls.rotateLeft(90 * Math.PI / 180), i.controls.enabled = !0, i.render(), setTimeout(function () {
                    n.preloader_do.hide(!0)
                }, 1e3))
            }, i.start360Render = function () {
                i.is360Rendering_bl = !0, cancelAnimationFrame(i.requestId), i.requestId = requestAnimationFrame(i.render)
            }, i.stop360Render = function () {
                if (i.is360Rendering_bl = !1, i.camera) {
                    i.camera.position.y = 0, i.camera.position.z = 500, i.camera.position.x = 0, i.renderer.domElement.style.left = "-10000px", cancelAnimationFrame(i.requestId);
                    try {
                        i.screen.removeChild(i.renderer.domElement)
                    } catch (e) {}
                }
            }, i.render = function () {
                i.is360Rendering_bl && i.camera && n.is360 ? (i.video_el.readyState === i.video_el.HAVE_ENOUGH_DATA && (i.videoTexture.needsUpdate = !0), FWDUVPUtils.isFirefox || !i.context || i.isStopped_bl || (0 != i.video_el.videoWidth && (i.canvas.width = i.video_el.videoWidth, i.canvas.height = i.video_el.videoHeight), i.context.save(), i.context.scale(-1, 1), i.context.drawImage(i.video_el, 0, 0, -1 * i.canvas.width, i.canvas.height), i.context.restore()), i.controls.update(), i.renderer.render(i.scene, i.camera), i.requestId = requestAnimationFrame(i.render)) : cancelAnimationFrame(i.requestId)
            }, i.stopToUpdateSubtitles = function () {
                clearInterval(i.startToUpdateSubtitleId_int)
            }, i.startToUpdateSubtitles = function () {
                clearInterval(i.startToUpdateSubtitleId_int), i.startToUpdateSubtitleId_int = setInterval(i.updateSubtitleHandler, 10)
            }, i.updateSubtitleHandler = function () {
                i.dispatchEvent(a.UPDATE_SUBTITLE, {
                    curTime: i.video_el.currentTime
                })
            }, i.init()
        };
        a.setPrototype = function () {
            a.prototype = new FWDUVPDisplayObject("div")
        }, a.UPDATE_SUBTITLE = "updateSubtitle", a.ERROR = "error", a.UPDATE = "update", a.UPDATE_TIME = "updateTime", a.SAFE_TO_SCRUBB = "safeToControll", a.LOAD_PROGRESS = "loadProgress", a.START = "start", a.PLAY = "play", a.PAUSE = "pause", a.STOP = "stop", a.PLAY_COMPLETE = "playComplete", a.START_TO_BUFFER = "startToBuffer", a.STOP_TO_BUFFER = "stopToBuffer", o.FWDUVPVideoScreen = a
    }(window),
    function (e) {
        var n = function (o, e) {
            var s = this;
            n.prototype;
            s.iframe_do = null, s.vimeoPlayer = null, s.lastQuality_str = "auto", s.volume = e, s.updateVideoId_int, s.updatePreloadId_int, s.controllerHeight = o._d.controllerHeight, s.hasBeenCreatedOnce_bl = !0, s.hasHours_bl = !1, s.allowScrubing_bl = !1, s.hasError_bl = !1, s.isPlaying_bl = !1, s.isStopped_bl = !0, s.isStartEventDispatched_bl = !1, s.isSafeToBeControlled_bl = !1, s.isPausedInEvent_bl = !0, s.isShowed_bl = !0, s.isCued_bl = !1, s.isVideoLoaded_bl = !1, s.isReady_bl = !1, s.isMbl = FWDUVPUtils.isMobile, s.init = function () {
                s.hasTransform3d_bl = !1, s.hasTransform2d_bl = !1, s.setBkColor(o.videoBackgroundColor_str), s.setBackfaceVisibility(), o.videoHolder_do.addChildAt(s, 0), s.resizeAndPosition(), s.setupVideo(), s.setupDisableClick()
            }, s.setupDisableClick = function () {
                s.disableClick_do = new FWDUVPDisplayObject("div"), s.disableClick_do.setBkColor(o.backgroundColor_str), s.disableClick_do.setAlpha(1e-8), s.addChild(s.disableClick_do)
            }, s.showDisable = function () {
                o.tempVidStageWidth && s.disableClick_do.w != s.sW && (s.disableClick_do.setWidth(o.tempVidStageWidth), FWDUVPUtils.isIphone ? s.disableClick_do.setHeight(o.tempVidStageHeight - s.controllerHeight) : s.disableClick_do.setHeight(o.tempVidStageHeight))
            }, s.hideDisable = function () {
                0 != s.disableClick_do.w && (s.disableClick_do.setWidth(0), s.disableClick_do.setHeight(0))
            }, s.setupVideo = function () {
                var e, t;
                s.vimeoPlayer || (s.iframe_do = new FWDUVPDisplayObject("IFRAME"), s.iframe_do.hasTransform3d_bl = !1, s.iframe_do.hasTransform2d_bl = !1, s.iframe_do.screen.setAttribute("id", o.instanceName_str + "vimeo"), s.isMbl && (s.iframe_do.screen.setAttribute("webkitallowfullscreen", "1"), s.iframe_do.screen.setAttribute("mozallowfullscreen", "1"), s.iframe_do.screen.setAttribute("allowfullscreen", "1")), s.iframe_do.screen.setAttribute("allow", "autoplay"), o._d.autoPlay_bl && s.iframe_do.screen.setAttribute("muted", "1"), e = 0, o._d.showDefaultControllerForVimeo_bl && !s.isMobile_bl && (e = 1), t = 0, o._d.playsinline && (t = 1), s.iframe_do.screen.setAttribute("src", "https://player.vimeo.com/video/76979871?player_id=" + o.instanceName_str + "vimeo&playsinline=" + t + "&autoplay=0&background=" + e), s.iframe_do.getStyle().width = "100%", s.iframe_do.getStyle().height = "100%", s.iframe_do.setBackfaceVisibility(), s.addChild(s.iframe_do), s.vimeoPlayer = new Vimeo.Player(s.iframe_do.screen), s.vimeoPlayer.on("play", function (e) {
                    s.playHandler()
                }), s.vimeoPlayer.on("pause", function (e) {
                    s.pauseHandler()
                }), s.vimeoPlayer.on("loadProgress", function (e) {
                    s.loadProgressHandler()
                }), s.vimeoPlayer.on("ended", function (e) {}), s.vimeoPlayer.on("loaded", function (e) {
                    s.loadedHandler()
                }), s.vimeoPlayer.ready().then(function () {
                    s.readyHandler()
                }), s.blackOverlay_do = new FWDUVPDisplayObject("div"), s.blackOverlay_do.getStyle().backgroundColor = "#000000", s.blackOverlay_do.getStyle().width = "100%", s.blackOverlay_do.getStyle().height = "100%", s.addChild(s.blackOverlay_do))
            }, s.resizeAndPosition = function () {
                o.tempVidStageWidth && (s.setWidth(o.tempVidStageWidth), s.setHeight(o.tempVidStageHeight - s.controllerHeight))
            }, s.setSource = function (e) {
                e && (s.sourcePath_str = e), s.stopToUpdateSubtitles();
                var t = s.sourcePath_str.match(/[^\/]+$/i);
                s.vimeoPlayer.loadVideo(t).then(function (e) {
                    o._d.autoPlay_bl || o.isThumbClick_bl ? (o.isThumbClick_bl && (o.videoPoster_do.hide(!0), o.play()), o._d.autoPlay_bl && (o.controller_do && o.controller_do.updateVolume(0), o.displayType == FWDUVPlayer.LIGHTBOX && !o.lightBox_do.isShowed_bl || (o.videoPoster_do.hide(!0), o.play()))) : (o.videoPoster_do.show(), o.lrgPlayBtn && o.lrgPlayBtn.show()), s.isMbl || !o.isAdd_bl || o.loadAddFirstTime_bl || (o.play(), o.videoPoster_do.hide(!0)), s.setVolume(o.volume)
                }).catch(function (e) {
                    console && console.log(e), s.displayErrorId_to = setTimeout(function () {
                        s.dispatchEvent(n.ERROR, {
                            error: e.name
                        })
                    }, 2e3), console && console.log(e)
                })
            }, s.readyHandler = function () {
                if (clearTimeout(s.intitErrorId_to), s.contains(s.blackOverlay_do) && (clearTimeout(s.removeChildWithDelayId_to), s.removeChildWithDelayId_to = setTimeout(function () {
                        s.removeChild(s.blackOverlay_do)
                    }, 1500)), s.resizeAndPosition(), s.isReady_bl) {
                    try {
                        s.vimeoPlayer.api("setColor", "#FFFFFF")
                    } catch (e) {}
                    return o.videoType_str == FWDUVPlayer.VIMEO && s.setX(0), void(o._d.autoPlay_bl && o.play())
                }
                s.isReady_bl = !0, s.dispatchEvent(n.READY)
            }, s.loadedHandler = function () {
                s.isVideoLoaded_bl = !0
            }, s.playHandler = function () {
                clearInterval(s.startToPlayWithDelayId_to), clearTimeout(s.displayErrorId_to), s.isStopped_bl = !1, s.isSafeToBeControlled_bl = !0, s.isPlaying_bl = !0, s.startToUpdateSubtitles(), s.startToUpdate(), s.dispatchEvent(n.SAFE_TO_SCRUBB), s.dispatchEvent(n.PLAY), s.hasHours_bl = 0 < Math.floor(s.getDuration() / 3600)
            }, s.loadProgressHandler = function (e) {
                s.isShowed_bl || s.dispatchEvent(n.LOAD_PROGRESS, {
                    percent: e.percent
                })
            }, s.pauseHandler = function () {
                s.isPlaying_bl && (s.isPlaying_bl = !1, clearInterval(s.startToPlayWithDelayId_to), s.dispatchEvent(n.PAUSE), s.stopToUpdate())
            }, s.finishHandler = function () {
                o._d.loop_bl && (s.stop(), setTimeout(s.play, 200)), s.dispatchEvent(n.PLAY_COMPLETE)
            }, s.play = function (e) {
                FWDUVPlayer.curInstance = o, s.hasError_bl = !1, s.vimeoPlayer.play(), s.isMbl || (s.isStopped_bl = !1)
            }, s.pause = function () {
                s.isStopped_bl || s.hasError_bl || (clearInterval(s.startToPlayWithDelayId_to), s.vimeoPlayer.pause(), s.stopToUpdate())
            }, s.togglePlayPause = function () {
                s.isPlaying_bl ? s.pause() : s.play()
            }, s.resume = function () {
                s.isStopped_bl || s.play()
            }, s.startToUpdate = function () {
                clearInterval(s.updateVideoId_int), s.updateVideoId_int = setInterval(s.updateVideo, 500)
            }, s.stopToUpdate = function () {
                clearInterval(s.updateVideoId_int)
            }, s.updateVideo = function () {
                var e, t, o;
                s.vimeoPlayer ? (e = FWDUVPUtils.formatTime(s.getDuration()), t = FWDUVPUtils.formatTime(s.getCurrentTime()), o = s.getCurrentTime() / s.getDuration(), isNaN(o) && (o = 0), s.getCurrentTime() + 1 >= s.getDuration() ? s.finishHandler() : (s.dispatchEvent(FWDUVPYoutubeScreen.UPDATE, {
                    percent: o
                }), s.dispatchEvent(n.UPDATE_TIME, {
                    curTime: t,
                    totalTime: e,
                    seconds: s.getCurrentTime(),
                    totalTimeInSeconds: s.getCurrentTime()
                }))) : stopToUpdate()
            }, s.stop = function (e) {
                s.isVideoLoaded_bl = !1, s.isStopped_bl || (clearInterval(s.startToPlayWithDelayId_to), clearTimeout(s.displayErrorId_to), s.stopVideo(), s.stopToUpdateSubtitles(), s.isPlaying_bl = !1, s.isStopped_bl = !0, s.isCued_bl = !1, s.allowScrubing_bl = !1, s.isSafeToBeControlled_bl = !1, s.isPausedInEvent_bl = !0, s.stopToUpdate(), e || (s.stopVideo(), s.dispatchEvent(n.STOP)))
            }, s.destroy = function () {
                s.iframe_do && (s.iframe_do.screen.removeAttribute("id", o.instanceName_str + "vimeo"), s.removeChild(s.iframe_do), s.iframe_do.destroy(), s.iframe_do = null), s.vimeoPlayer = null
            }, s.stopVideo = function () {
                s.vimeoPlayer.unload().then(function () {}).catch(function (e) {})
            }, s.startToScrub = function () {
                s.isSafeToBeControlled_bl && (s.allowScrubing_bl = !0)
            }, s.stopToScrub = function () {
                s.isSafeToBeControlled_bl && (s.allowScrubing_bl = !1)
            }, s.scrubbAtTime = function (e) {
                s.vimeoPlayer.setCurrentTime(e).then(function (e) {})
            }, s.scrub = function (e) {
                s.isSafeToBeControlled_bl && s.vimeoPlayer.setCurrentTime(e * s.getDuration()).then(function (e) {})
            }, s.setVolume = function (e) {
                null != e && (s.volume = e), s.vimeoPlayer && s.vimeoPlayer.setVolume(e)
            }, s.getDuration = function () {
                if (s.isSafeToBeControlled_bl) return s.vimeoPlayer.getDuration().then(function (e) {
                    s.duration = Math.round(e)
                }), s.duration
            }, s.getCurrentTime = function () {
                if (s.isSafeToBeControlled_bl) return s.vimeoPlayer.getCurrentTime().then(function (e) {
                    s.currentTime = Math.round(e)
                }), s.currentTime
            }, s.stopToUpdateSubtitles = function () {
                clearInterval(s.startToUpdateSubtitleId_int)
            }, s.startToUpdateSubtitles = function () {
                clearInterval(s.startToUpdateSubtitleId_int), s.startToUpdateSubtitleId_int = setInterval(s.updateSubtitleHandler, 10)
            }, s.updateSubtitleHandler = function () {
                s.getCurrentTime() && s.dispatchEvent(n.UPDATE_SUBTITLE, {
                    curTime: s.getCurrentTime()
                })
            }, s.init()
        };
        n.setPrototype = function () {
            n.prototype = new FWDUVPDisplayObject("div")
        }, n.UPDATE_SUBTITLE = "updateSubtitle", n.SAFE_TO_SCRUBB = "safeToScrub", n.READY = "ready", n.ERROR = "initError", n.UPDATE = "update", n.UPDATE_TIME = "updateTime", n.LOAD_PROGRESS = "loadProgress", n.PLAY = "play", n.PAUSE = "pause", n.STOP = "stop", n.PLAY_COMPLETE = "playComplete", n.CUED = "cued", n.QUALITY_CHANGE = "qualityChange", e.FWDUVPVimeoScreen = n
    }(window),
    function (e) {
        var c = function (e, t, o, s, n, i, a, r, l, d) {
            var _ = this,
                u = c.prototype;
            _.iconCSSString1 = a, _.iconCSSString2 = r, _.nImg = e, _.sPath_str = t, _.dPath_str = o, _.n_sdo, _.s_sdo, _.d_sdo, _.toolTipLabel_str, _.nImg && (_.totalWidth = _.nImg.width, _.totalHeight = _.nImg.height), _.normalCalssName = l, _.selectedCalssName = d, _.useHEX = s, _.nBC = n, _.sBC = i, _.isSetToDisabledState_bl = !1, _.isDisabled_bl = !1, _.isSelectedFinal_bl = !1, _.isActive_bl = !1, _.isMbl = FWDUVPUtils.isMobile, _.hasPointerEvent_bl = FWDUVPUtils.hasPointerEvent, _.allowToCreateSecondButton_bl = !0, _.useFontAwesome_bl = Boolean(_.iconCSSString1), _.init = function () {
                _.setupMainContainers(), _.setNormalState(!1), _.setEnabledState()
            }, _.setupMainContainers = function () {
                var e;
                _.useFontAwesome_bl ? (_.setOverflow("visible"), _.n_sdo = new FWDUVPTransformDisplayObject("div"), _.n_sdo.setInnerHTML(_.iconCSSString1), _.addChild(_.n_sdo), _.d_sdo = new FWDUVPTransformDisplayObject("div"), _.d_sdo.setInnerHTML(_.iconCSSString2), _.addChild(_.d_sdo), _.setFinalSize()) : (_.useHEX ? (_.n_sdo = new FWDUVPTransformDisplayObject("div"), _.n_sdo.setWidth(_.totalWidth), _.n_sdo.setHeight(_.totalHeight), _.n_sdo_canvas = FWDUVPUtils.getCanvasWithModifiedColor(_.nImg, _.nBC).canvas, _.n_sdo.screen.appendChild(_.n_sdo_canvas)) : (_.n_sdo = new FWDUVPTransformDisplayObject("img"), _.n_sdo.setScreen(_.nImg)), _.addChild(_.n_sdo), _.allowToCreateSecondButton_bl && (_.img1 = new Image, _.img1.src = _.sPath_str, e = new Image, _.sImg = e, _.useHEX ? (_.s_sdo = new FWDUVPTransformDisplayObject("div"), _.s_sdo.setWidth(_.totalWidth), _.s_sdo.setHeight(_.totalHeight), _.img1.onload = function () {
                    _.s_sdo_canvas = FWDUVPUtils.getCanvasWithModifiedColor(_.img1, _.sBC).canvas, _.s_sdo.screen.appendChild(_.s_sdo_canvas)
                }) : (_.s_sdo = new FWDUVPDisplayObject("img"), _.s_sdo.setScreen(_.img1), _.s_sdo.setWidth(_.totalWidth), _.s_sdo.setHeight(_.totalHeight)), _.s_sdo.setAlpha(0), _.addChild(_.s_sdo), _.dPath_str && (e.src = _.dPath_str, _.d_sdo = new FWDUVPDisplayObject("img"), _.d_sdo.setScreen(e), _.d_sdo.setWidth(_.totalWidth), _.d_sdo.setHeight(_.totalHeight), _.d_sdo.setX(-100), _.addChild(_.d_sdo)))), _.setWidth(_.totalWidth), _.setHeight(_.totalHeight), _.setButtonMode(!0), _.hasPointerEvent_bl ? (_.screen.addEventListener("pointerup", _.onMouseUp), _.screen.addEventListener("pointerover", _.onMouseOver), _.screen.addEventListener("pointerout", _.onMouseOut)) : _.screen.addEventListener && (_.screen.addEventListener("mouseover", _.onMouseOver), _.screen.addEventListener("mouseout", _.onMouseOut), _.screen.addEventListener("mouseup", _.onMouseUp), _.screen.addEventListener("touchstart", _.onMouseDown), _.screen.addEventListener("touchstart", _.onMouseUp))
            }, _.setFinalSize = function () {
                _.setWidth(_.n_sdo.getWidth()), _.setHeight(_.n_sdo.getHeight()), _.buttonWidth = _.w, _.buttonHeight = _.h, 0 == _.w && setTimeout(function () {
                    _.setFinalSize()
                }, 300)
            }, _.setNormalState = function (e) {
                _.useFontAwesome_bl ? (FWDAnimation.killTweensOf(_.n_sdo.screen), FWDAnimation.killTweensOf(_.d_sdo.screen), e ? (FWDAnimation.to(_.n_sdo.screen, .8, {
                    className: _.normalCalssName,
                    ease: Expo.easeOut
                }), FWDAnimation.to(_.d_sdo.screen, .8, {
                    className: _.normalCalssName,
                    ease: Expo.easeOut
                })) : (_.n_sdo.screen.className = _.normalCalssName, _.d_sdo.screen.className = _.normalCalssName)) : (FWDAnimation.killTweensOf(_.s_sdo), FWDAnimation.to(_.s_sdo, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                }))
            }, _.setSelectedState = function (e) {
                _.useFontAwesome_bl ? (FWDAnimation.killTweensOf(_.n_sdo.screen), FWDAnimation.killTweensOf(_.d_sdo.screen), e ? (FWDAnimation.to(_.n_sdo.screen, .8, {
                    className: _.selectedCalssName,
                    ease: Expo.easeOut
                }), FWDAnimation.to(_.d_sdo.screen, .8, {
                    className: _.selectedCalssName,
                    ease: Expo.easeOut
                })) : (_.n_sdo.screen.className = _.selectedCalssName, _.d_sdo.screen.className = _.selectedCalssName)) : (FWDAnimation.killTweensOf(_.s_sdo), FWDAnimation.to(_.s_sdo, .5, {
                    alpha: 1,
                    delay: .1,
                    ease: Expo.easeOut
                }))
            }, _.onMouseOver = function (e) {
                if (!e.pointerType || "mouse" == e.pointerType) {
                    if (_.isDisabled_bl || _.isSelectedFinal_bl) return;
                    _.dispatchEvent(c.MOUSE_OVER, {
                        e: e
                    }), _.setSelectedState(!0)
                }
            }, _.onMouseOut = function (e) {
                if (!e.pointerType || "mouse" == e.pointerType) {
                    if (_.isDisabled_bl || _.isSelectedFinal_bl) return;
                    _.dispatchEvent(c.MOUSE_OUT, {
                        e: e
                    }), _.setNormalState(!0)
                }
            }, _.onMouseDown = function (e) {
                e.preventDefault && e.preventDefault(), _.isDisabled_bl || 2 == e.button || _.isSelectedFinal_bl || _.dispatchEvent(c.MOUSE_DOWN, {
                    e: e
                })
            }, _.onMouseUp = function (e) {
                e.preventDefault && e.preventDefault(), _.isDisabled_bl || 2 == e.button || _.isSelectedFinal_bl || _.dispatchEvent(c.MOUSE_UP, {
                    e: e
                })
            }, _.setSelctedFinal = function () {
                _.isSelectedFinal_bl = !0, FWDAnimation.killTweensOf(_.s_sdo), FWDAnimation.to(_.s_sdo, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }), _.setButtonMode(!1)
            }, _.setUnselctedFinal = function () {
                _.isSelectedFinal_bl = !1, FWDAnimation.to(_.s_sdo, .8, {
                    alpha: 0,
                    delay: .1,
                    ease: Expo.easeOut
                }), _.setButtonMode(!0)
            }, _.setDisabledState = function () {
                _.isSetToDisabledState_bl = !0, _.useFontAwesome_bl ? (_.n_sdo.setX(-1e4), _.d_sdo.setX(0)) : (_.d_sdo.setX(0), FWDAnimation.killTweensOf(_.d_sdo), FWDAnimation.to(_.d_sdo, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }))
            }, _.setEnabledState = function () {
                _.isSetToDisabledState_bl = !1, _.useFontAwesome_bl ? (_.n_sdo.setX(0), _.d_sdo.setX(-1e4)) : (_.d_sdo.setX(-100), FWDAnimation.killTweensOf(_.d_sdo), FWDAnimation.to(_.d_sdo, .8, {
                    alpha: 0,
                    delay: .1,
                    ease: Expo.easeOut
                }))
            }, _.disable = function () {
                _.isDisabled_bl = !0, _.setButtonMode(!1)
            }, _.enable = function () {
                _.isDisabled_bl = !1, _.setButtonMode(!0)
            }, _.updateHEXColors = function (e, t) {
                FWDUVPUtils.changeCanvasHEXColor(_.nImg, _.n_sdo_canvas, e), FWDUVPUtils.changeCanvasHEXColor(_.img1, _.s_sdo_canvas, t)
            }, _.destroy = function () {
                _.isMbl ? _.hasPointerEvent_bl ? (_.screen.removeEventListener("pointerdown", _.onMouseUp), _.screen.removeEventListener("pointerover", _.onMouseOver), _.screen.removeEventListener("pointerout", _.onMouseOut)) : (_.screen.removeEventListener("touchstart", _.onMouseDown), _.screen.removeEventListener("touchend", _.onMouseUp)) : _.screen.removeEventListener && (_.screen.removeEventListener("mouseover", _.onMouseOver), _.screen.removeEventListener("mouseout", _.onMouseOut), _.screen.removeEventListener("mousedown", _.onMouseUp)), FWDAnimation.killTweensOf(_.s_sdo), _.n_sdo.destroy(), _.s_sdo.destroy(), _.d_sdo && (FWDAnimation.killTweensOf(_.d_sdo), _.d_sdo.destroy()), _.nImg = null, _.sImg = null, _.dImg = null, _.n_sdo = null, _.s_sdo = null, _.d_sdo = null, sImg = e = null, dImg = null, _.toolTipLabel_str = null, _.init = null, _.setupMainContainers = null, _.onMouseOver = null, _.onMouseOut = null, _.onClick = null, _.onMouseDown = null, _.setSelctedFinal = null, _.setUnselctedFinal = null, _.setInnerHTML(""), u.destroy(), u = _ = null, c.prototype = null
            }, _.init()
        };
        c.setPrototype = function () {
            c.prototype = null, c.prototype = new FWDUVPDisplayObject("div")
        }, c.SHOW_TOOLTIP = "showTooltip", c.CLICK = "onClick", c.MOUSE_OVER = "onMouseOver", c.MOUSE_OUT = "onMouseOut", c.MOUSE_UP = "onMouseUp", c.MOUSE_DOWN = "onMouseDown", c.prototype = null, e.FWDUVPVolumeButton = c
    }(window),
    function (e) {
        var n = function (t, e) {
            var s = this;
            n.prototype;
            s.videoHolder_do = null, s.ytb = null, s.lastQuality_str = "auto", s.volume = e, s.updateVideoId_int, s.updatePreloadId_int, s.controllerHeight = t._d.controllerHeight, s.hasHours_bl = !1, s.hasBeenCreatedOnce_bl = !1, s.allowScrubing_bl = !1, s.hasError_bl = !1, s.isPlaying_bl = !1, s.isStopped_bl = !0, s.isStartEventDispatched_bl = !1, s.isSafeToBeControlled_bl = !1, s.isPausedInEvent_bl = !0, s.isShowed_bl = !0, s.isQualityArrayDisapatched_bl = !1, s.playsinline = t._d.playsinline ? 1 : 0, s.isMbl = FWDUVPUtils.isMobile, s.init = function () {
                s.hasTransform3d_bl = !1, s.hasTransform2d_bl = !1, s.setBkColor("#000"), s.setBackfaceVisibility(), t.videoHolder_do.addChildAt(s, 0), s.resizeAndPosition(), s.setupVideo()
            }, s.setupVideo = function () {
                s.videoHolder_do = new FWDUVPDisplayObject("div"), s.videoHolder_do.hasTransform3d_bl = !1, s.videoHolder_do.hasTransform2d_bl = !1, s.videoHolder_do.screen.setAttribute("id", t.instanceName_str + "youtube"), s.videoHolder_do.getStyle().width = "100%", s.videoHolder_do.getStyle().height = "100%", s.videoHolder_do.setBackfaceVisibility(), s.addChild(s.videoHolder_do), s.ytb = new YT.Player(t.instanceName_str + "youtube", {
                    width: "100%",
                    height: "100%",
                    playerVars: {
                        controls: 0,
                        disablekb: 0,
                        loop: 0,
                        autoplay: 0,
                        wmode: "opaque",
                        showinfo: 0,
                        rel: 0,
                        modestbranding: 1,
                        iv_load_policy: 3,
                        cc_load_policy: 0,
                        fs: 0,
                        html5: 0,
                        playsinline: s.playsinline
                    },
                    events: {
                        onReady: s.playerReadyHandler,
                        onError: s.playerErrorHandler,
                        onStateChange: s.stateChangeHandler,
                        onPlaybackQualityChange: s.qualityChangeHandler
                    }
                }), s.setBkColor("#000")
            }, s.playerReadyHandler = function (e) {
                s.resizeAndPosition(), t._d.autoPlay_bl && s.ytb.mute(), s.dispatchEvent(n.READY), s.hasBeenCreatedOnce_bl = !0
            }, s.stateChangeHandler = function (e) {
                if (-1 == e.data && s.isCued_bl && s.isMbl && (s.isStopped_bl = !1, FWDUVPlayer.stopAllVideos(t)), e.data == YT.PlayerState.PLAYING) s.isSafeToBeControlled_bl || (s.isStopped_bl = !1, s.isSafeToBeControlled_bl = !0, s.isPlaying_bl = !0, s.hasHours_bl = 0 < Math.floor(s.ytb.getDuration() / 3600), s.setVolume(t.volume), s.startToUpdate(), s.startToPreload(), s.scrub(1e-5), s.isMbl || s.setQuality(s.lastQuality_str), s.ytb.getAvailableQualityLevels() && 0 != s.ytb.getAvailableQualityLevels().length && s.dispatchEvent(n.QUALITY_CHANGE, {
                    qualityLevel: s.ytb.getPlaybackQuality(),
                    levels: s.ytb.getAvailableQualityLevels()
                }), s.startToUpdateSubtitles(), s.dispatchEvent(n.SAFE_TO_SCRUBB)), s.isPausedInEvent_bl && s.dispatchEvent(n.PLAY), s.isPausedInEvent_bl = !1, s.hasError_bl = !1;
                else if (e.data == YT.PlayerState.PAUSED) {
                    if (!s.isSafeToBeControlled_bl) return;
                    s.isStopped_bl = !1, s.isPausedInEvent_bl || s.dispatchEvent(n.PAUSE), s.isPausedInEvent_bl = !0
                } else e.data == YT.PlayerState.ENDED ? s.ytb.getCurrentTime() && 0 < s.ytb.getCurrentTime() && (s.isStopped_bl = !1, s.stopToUpdateSubtitles(), setTimeout(function () {
                    s.dispatchEvent(n.PLAY_COMPLETE)
                }, 100)) : e.data == YT.PlayerState.CUED && (s.isStopped_bl || s.dispatchEvent(n.CUED), s.isCued_bl = !0)
            }, s.qualityChangeHandler = function (e) {
                s.ytb.getAvailableQualityLevels() && 0 != s.ytb.getAvailableQualityLevels().length && s.dispatchEvent(n.QUALITY_CHANGE, {
                    qualityLevel: s.ytb.getPlaybackQuality()
                })
            }, s.playerErrorHandler = function (e) {
                var t;
                s.isPausedInEvent_bl = !0, s.isStopped_bl || s.hasError_bl || (t = "", s.hasError_bl = !0, 2 == e.data ? t = "The youtube id is not well formatted, make sure it has exactly 11 characters and that it dosn't contain invalid characters such as exclamation points or asterisks." : 5 == e.data ? t = "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred." : 100 == e.data ? t = "The youtube video request was not found, probably the video ID is incorrect." : 101 != e.data && 150 != e.data || (t = "The owner of the requested video does not allow it to be played in embedded players."), s.dispatchEvent(n.ERROR, {
                    text: t
                }))
            }, s.resizeAndPosition = function () {
                if (s.setWidth(t.tempVidStageWidth), s.setHeight(t.tempVidStageHeight), s.videoHolder_do && (s.videoHolder_do.setWidth(t.tempVidStageWidth), s.videoHolder_do.setHeight(t.tempVidStageHeight), s.ytb && s.ytb.a)) try {
                    s.ytb.a.width = t.tempVidStageWidth, s.ytb.a.height = t.tempVidStageHeight, s.ytb.a.style.width = t.tempVidStageWidth + "px", s.ytb.a.style.height = t.tempVidStageHeight + "px"
                } catch (e) {}
            }, s.setSource = function (e) {
                e && (s.sourcePath_str = e), clearInterval(s.setSourceId_int), s.setSourceId_int = setInterval(function () {
                    s.ytb.cueVideoById && s.ytb.setPlaybackRate && (s.ytb.cueVideoById(s.sourcePath_str), s.isMbl && !t._d.autoPlay_bl ? setTimeout(function () {
                        t.videoPoster_do.hide(), t.lrgPlayBtn.hide()
                    }, 100) : (t._d.autoPlay_bl || t.isThumbClick_bl ? (t.isThumbClick_bl && t.play(), t._d.autoPlay_bl && (t.controller_do && t.controller_do.updateVolume(0), t.displayType == FWDUVPlayer.LIGHTBOX && !t.lightBox_do.isShowed_bl || t.play())) : (t.videoPoster_do.show(), t.lrgPlayBtn && t.lrgPlayBtn.show()), s.isMbl || !t.isAdd_bl || t.loadAddFirstTime_bl || (t.play(), t.videoPoster_do.hide(!0))), clearInterval(s.setSourceId_int))
                }, 50)
            }, s.play = function (e) {
                FWDUVPlayer.curInstance = t, s.isPlaying_bl = !0, s.hasError_bl = !1, s.hasStarted_bl = !0;
                try {
                    s.ytb.playVideo(), s.startToUpdate()
                } catch (e) {}
                s.isStopped_bl = !1
            }, s.pause = function () {
                if (!s.isStopped_bl && !s.hasError_bl) {
                    s.isPlaying_bl = !1;
                    try {
                        s.ytb.pauseVideo()
                    } catch (e) {}
                    s.stopToUpdate()
                }
            }, s.togglePlayPause = function () {
                s.isPlaying_bl ? s.pause() : s.play()
            }, s.resume = function () {
                s.isStopped_bl || s.play()
            }, s.startToUpdate = function () {
                clearInterval(s.updateVideoId_int), s.updateVideoId_int = setInterval(s.updateVideo, 500)
            }, s.stopToUpdate = function () {
                clearInterval(s.updateVideoId_int)
            }, s.updateVideo = function () {
                var e, t, o;
                s.ytb ? (s.allowScrubing_bl || (e = s.ytb.getCurrentTime() / s.ytb.getDuration(), s.dispatchEvent(n.UPDATE, {
                    percent: e
                })), t = FWDUVPUtils.formatTime(s.ytb.getDuration()), o = FWDUVPUtils.formatTime(s.ytb.getCurrentTime()), s.dispatchEvent(n.UPDATE_TIME, {
                    curTime: o,
                    totalTime: t,
                    seconds: s.ytb.getCurrentTime(),
                    totalTimeInSeconds: s.ytb.getDuration()
                })) : stopToUpdate()
            }, s.startToPreload = function () {
                clearInterval(s.preloadVideoId_int), s.updatePreloadId_int = setInterval(s.updateProgress, 500)
            }, s.stopToPreload = function () {
                clearInterval(s.updatePreloadId_int)
            }, s.updateProgress = function () {
                var e;
                s.ytb ? (e = s.ytb.getVideoLoadedFraction(), s.dispatchEvent(n.LOAD_PROGRESS, {
                    percent: e
                })) : stopToPreload()
            }, s.stop = function () {
                s.isStopped_bl || (s.isPlaying_bl = !1, s.isStopped_bl = !0, s.hasStarted_bl = !1, s.isCued_bl = !1, clearInterval(s.setSourceId_int), s.allowScrubing_bl = !1, s.isSafeToBeControlled_bl = !1, s.isQualityArrayDisapatched_bl = !1, s.isPausedInEvent_bl = !0, s.stopToUpdateSubtitles(), s.stopToUpdate(), s.stopToPreload(), s.stopVideo(), s.dispatchEvent(n.STOP), s.dispatchEvent(n.LOAD_PROGRESS, {
                    percent: 0
                }))
            }, s.destroyYoutube = function () {
                s.videoHolder_do && (s.videoHolder_do.screen.removeAttribute("id", t.instanceName_str + "youtube"), s.videoHolder_do.destroy(), s.videoHolder_do = null), s.ytb && s.ytb.destroy(), s.ytb = null
            }, s.stopVideo = function () {
                s.ytb.cueVideoById(s.sourcePath_str)
            }, s.setPlaybackRate = function (e) {
                s.ytb && !s.isMbl && (e && (s.rate = e), s.ytb.setPlaybackRate && s.ytb.setPlaybackRate(Number(s.rate)))
            }, s.stopToUpdateSubtitles = function () {
                clearInterval(s.startToUpdateSubtitleId_int)
            }, s.startToUpdateSubtitles = function () {
                clearInterval(s.startToUpdateSubtitleId_int), s.startToUpdateSubtitleId_int = setInterval(s.updateSubtitleHandler, 10)
            }, s.updateSubtitleHandler = function () {
                s.dispatchEvent(n.UPDATE_SUBTITLE, {
                    curTime: s.ytb.getCurrentTime()
                })
            }, s.startToScrub = function () {
                s.isSafeToBeControlled_bl && (s.allowScrubing_bl = !0)
            }, s.stopToScrub = function () {
                s.isSafeToBeControlled_bl && (s.allowScrubing_bl = !1)
            }, s.scrubbAtTime = function (e) {
                s.isSafeToBeControlled_bl && s.ytb.seekTo(e)
            }, s.scrub = function (e) {
                s.isSafeToBeControlled_bl && s.ytb.seekTo(e * s.ytb.getDuration())
            }, s.setVolume = function (e) {
                null != e && (s.volume = e), s.ytb && (s.ytb.setVolume(100 * e), e && s.ytb.unMute())
            }, s.setQuality = function (e) {
                s.lastQuality_str = e, s.ytb.setPlaybackQuality(e)
            }, s.init()
        };
        n.setPrototype = function () {
            n.prototype = new FWDUVPDisplayObject("div")
        }, n.UPDATE_SUBTITLE = "updateSubtitle", n.READY = "ready", n.ERROR = "error", n.UPDATE = "update", n.UPDATE_TIME = "updateTime", n.SAFE_TO_SCRUBB = "safeToControll", n.LOAD_PROGRESS = "loadProgress", n.PLAY = "play", n.PAUSE = "pause", n.STOP = "stop", n.PLAY_COMPLETE = "playComplete", n.CUED = "cued", n.QUALITY_CHANGE = "qualityChange", e.FWDUVPYoutubeScreen = n
    }(window),
    function () {
        var a = function (e, t, o, s, n) {
            var i = this;
            a.prototype;
            i.text_do = null, i.hd_do = null, i.dumy_do = null, i.label_str = e, i.nBC = t, i.sBC = o, i.hdPath_str = s, i.id = n, i.totalWidth = 0, i.totalHeight = 23, i.hdWidth = 7, i.hdHeight = 5, i.hasHd_bl = i.hdPath_str, i.isMbl = FWDUVPUtils.isMobile, i.isDisabled_bl = !1, i.init = function () {
                i.setBackfaceVisibility(), i.setupMainContainers(), i.setHeight(i.totalHeight)
            }, i.setupMainContainers = function () {
                var e;
                i.text_do = new FWDUVPDisplayObject("div"), i.text_do.setBackfaceVisibility(), i.text_do.hasTransform3d_bl = !1, i.text_do.hasTransform2d_bl = !1, i.text_do.getStyle().display = "inline-block", i.text_do.getStyle().whiteSpace = "nowrap", i.text_do.getStyle().fontFamily = "Arial", i.text_do.getStyle().fontSize = "12px", i.text_do.getStyle().color = i.nBC, i.text_do.getStyle().fontSmoothing = "antialiased", i.text_do.getStyle().webkitFontSmoothing = "antialiased", i.text_do.getStyle().textRendering = "optimizeLegibility", i.text_do.setInnerHTML(i.label_str), i.addChild(i.text_do), i.hasHd_bl && ((e = new Image).src = i.hdPath_str, i.hd_do = new FWDUVPDisplayObject("img"), i.hd_do.setScreen(e), i.hd_do.setWidth(i.hdWidth), i.hd_do.setHeight(i.hdHeight), i.addChild(i.hd_do)), i.dumy_do = new FWDUVPDisplayObject("div"), FWDUVPUtils.isIE && (i.dumy_do.setBkColor("#FF0000"), i.dumy_do.setAlpha(1e-4)), i.dumy_do.setButtonMode(!0), i.dumy_do.setHeight(i.totalHeight), i.addChild(i.dumy_do), i.hasPointerEvent_bl ? (i.screen.addEventListener("pointerup", i.onMouseUp), i.screen.addEventListener("pointerover", i.onMouseOver), i.screen.addEventListener("pointerout", i.onMouseOut)) : i.screen.addEventListener && (i.isMbl || (i.screen.addEventListener("mouseover", i.onMouseOver), i.screen.addEventListener("mouseout", i.onMouseOut), i.screen.addEventListener("mouseup", i.onMouseUp)), i.screen.addEventListener("touchend", i.onMouseUp))
            }, i.onMouseOver = function (e) {
                i.isDisabled_bl || (i.setSelectedState(!0), i.dispatchEvent(a.MOUSE_OVER, {
                    e: e,
                    id: i.id
                }))
            }, i.onMouseOut = function (e) {
                i.isDisabled_bl || (i.setNormalState(!0), i.dispatchEvent(a.MOUSE_OUT, {
                    e: e,
                    id: i.id
                }))
            }, i.onMouseUp = function (e) {
                i.isDisabled_bl || 2 == e.button || (e.preventDefault && e.preventDefault(), i.dispatchEvent(a.CLICK, {
                    e: e,
                    id: i.id
                }))
            }, i.setFinalSize = function () {
                var e = i.text_do.getWidth() + 34,
                    t = i.text_do.getHeight();
                i.text_do.setX(18), i.text_do.setY(parseInt((i.totalHeight - t) / 2)), i.hd_do && (i.hd_do.setX(e - 12), i.hd_do.setY(i.text_do.y + 1)), i.dumy_do.setWidth(e), i.setWidth(e)
            }, i.updateText = function (e) {
                i.label_str = e, i.text_do.setInnerHTML(i.label_str), i.hd_do && ("highres" == i.label_str || "hd1080" == i.label_str || "hd720" == i.label_str || "hd1440" == i.label_str || "hd2160" == i.label_str ? i.hd_do.setVisible(!0) : i.hd_do.setVisible(!1))
            }, i.setSelectedState = function (e) {
                i.isSelected_bl = !0, FWDAnimation.killTweensOf(i.text_do), e ? FWDAnimation.to(i.text_do.screen, .5, {
                    css: {
                        color: i.sBC
                    },
                    ease: Expo.easeOut
                }) : i.text_do.getStyle().color = i.sBC
            }, i.setNormalState = function (e) {
                i.isSelected_bl = !1, FWDAnimation.killTweensOf(i.text_do), e ? FWDAnimation.to(i.text_do.screen, .5, {
                    css: {
                        color: i.nBC
                    },
                    ease: Expo.easeOut
                }) : i.text_do.getStyle().color = i.nBC
            }, i.disable = function () {
                i.isDisabled_bl = !0, FWDAnimation.killTweensOf(i.text_do), i.setSelectedState(!0), i.dumy_do.setButtonMode(!1)
            }, i.enable = function () {
                i.isDisabled_bl = !1, FWDAnimation.killTweensOf(i.text_do), i.setNormalState(!0), i.dumy_do.setButtonMode(!0)
            }, i.init()
        };
        a.setPrototype = function () {
            a.prototype = new FWDUVPDisplayObject("div")
        }, a.MOUSE_OVER = "onMouseOver", a.MOUSE_OUT = "onMouseOut", a.CLICK = "onClick", a.prototype = null, window.FWDUVPYTBQButton = a
    }(window);