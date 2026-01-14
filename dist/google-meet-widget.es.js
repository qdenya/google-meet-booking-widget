import * as De from "react";
import va, { useCallback as _n, useDebugValue as Ws, useMemo as ie, useState as or, useEffect as Pe, useRef as Wl, useLayoutEffect as U2 } from "react";
import j2 from "react-dom";
function x2(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var $s = { exports: {} }, mu = {}, Is = { exports: {} }, Ps = {};
var Bh;
function q2() {
  return Bh || (Bh = 1, (function(u) {
    function c(M, k) {
      var W = M.length;
      M.push(k);
      t: for (; 0 < W; ) {
        var P = W - 1 >>> 1, et = M[P];
        if (0 < d(et, k))
          M[P] = k, M[W] = et, W = P;
        else break t;
      }
    }
    function s(M) {
      return M.length === 0 ? null : M[0];
    }
    function r(M) {
      if (M.length === 0) return null;
      var k = M[0], W = M.pop();
      if (W !== k) {
        M[0] = W;
        t: for (var P = 0, et = M.length, nt = et >>> 1; P < nt; ) {
          var st = 2 * (P + 1) - 1, ut = M[st], it = st + 1, _t = M[it];
          if (0 > d(ut, W))
            it < et && 0 > d(_t, ut) ? (M[P] = _t, M[it] = W, P = it) : (M[P] = ut, M[st] = W, P = st);
          else if (it < et && 0 > d(_t, W))
            M[P] = _t, M[it] = W, P = it;
          else break t;
        }
      }
      return k;
    }
    function d(M, k) {
      var W = M.sortIndex - k.sortIndex;
      return W !== 0 ? W : M.id - k.id;
    }
    if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      u.unstable_now = function() {
        return h.now();
      };
    } else {
      var y = Date, C = y.now();
      u.unstable_now = function() {
        return y.now() - C;
      };
    }
    var D = [], j = [], w = 1, v = null, E = 3, G = !1, N = !1, X = !1, O = !1, L = typeof setTimeout == "function" ? setTimeout : null, K = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
    function T(M) {
      for (var k = s(j); k !== null; ) {
        if (k.callback === null) r(j);
        else if (k.startTime <= M)
          r(j), k.sortIndex = k.expirationTime, c(D, k);
        else break;
        k = s(j);
      }
    }
    function b(M) {
      if (X = !1, T(M), !N)
        if (s(D) !== null)
          N = !0, _ || (_ = !0, A());
        else {
          var k = s(j);
          k !== null && tt(b, k.startTime - M);
        }
    }
    var _ = !1, q = -1, H = 5, Y = -1;
    function R() {
      return O ? !0 : !(u.unstable_now() - Y < H);
    }
    function S() {
      if (O = !1, _) {
        var M = u.unstable_now();
        Y = M;
        var k = !0;
        try {
          t: {
            N = !1, X && (X = !1, K(q), q = -1), G = !0;
            var W = E;
            try {
              e: {
                for (T(M), v = s(D); v !== null && !(v.expirationTime > M && R()); ) {
                  var P = v.callback;
                  if (typeof P == "function") {
                    v.callback = null, E = v.priorityLevel;
                    var et = P(
                      v.expirationTime <= M
                    );
                    if (M = u.unstable_now(), typeof et == "function") {
                      v.callback = et, T(M), k = !0;
                      break e;
                    }
                    v === s(D) && r(D), T(M);
                  } else r(D);
                  v = s(D);
                }
                if (v !== null) k = !0;
                else {
                  var nt = s(j);
                  nt !== null && tt(
                    b,
                    nt.startTime - M
                  ), k = !1;
                }
              }
              break t;
            } finally {
              v = null, E = W, G = !1;
            }
            k = void 0;
          }
        } finally {
          k ? A() : _ = !1;
        }
      }
    }
    var A;
    if (typeof p == "function")
      A = function() {
        p(S);
      };
    else if (typeof MessageChannel < "u") {
      var B = new MessageChannel(), J = B.port2;
      B.port1.onmessage = S, A = function() {
        J.postMessage(null);
      };
    } else
      A = function() {
        L(S, 0);
      };
    function tt(M, k) {
      q = L(function() {
        M(u.unstable_now());
      }, k);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, u.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : H = 0 < M ? Math.floor(1e3 / M) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return E;
    }, u.unstable_next = function(M) {
      switch (E) {
        case 1:
        case 2:
        case 3:
          var k = 3;
          break;
        default:
          k = E;
      }
      var W = E;
      E = k;
      try {
        return M();
      } finally {
        E = W;
      }
    }, u.unstable_requestPaint = function() {
      O = !0;
    }, u.unstable_runWithPriority = function(M, k) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var W = E;
      E = M;
      try {
        return k();
      } finally {
        E = W;
      }
    }, u.unstable_scheduleCallback = function(M, k, W) {
      var P = u.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? P + W : P) : W = P, M) {
        case 1:
          var et = -1;
          break;
        case 2:
          et = 250;
          break;
        case 5:
          et = 1073741823;
          break;
        case 4:
          et = 1e4;
          break;
        default:
          et = 5e3;
      }
      return et = W + et, M = {
        id: w++,
        callback: k,
        priorityLevel: M,
        startTime: W,
        expirationTime: et,
        sortIndex: -1
      }, W > P ? (M.sortIndex = W, c(j, M), s(D) === null && M === s(j) && (X ? (K(q), q = -1) : X = !0, tt(b, W - P))) : (M.sortIndex = et, c(D, M), N || G || (N = !0, _ || (_ = !0, A()))), M;
    }, u.unstable_shouldYield = R, u.unstable_wrapCallback = function(M) {
      var k = E;
      return function() {
        var W = E;
        E = k;
        try {
          return M.apply(this, arguments);
        } finally {
          E = W;
        }
      };
    };
  })(Ps)), Ps;
}
var Hh;
function Q2() {
  return Hh || (Hh = 1, Is.exports = q2()), Is.exports;
}
var Yh;
function B2() {
  if (Yh) return mu;
  Yh = 1;
  var u = Q2(), c = va, s = j2;
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function h(t) {
    var e = t, l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function y(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function C(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function D(t) {
    if (h(t) !== t)
      throw Error(r(188));
  }
  function j(t) {
    var e = t.alternate;
    if (!e) {
      if (e = h(t), e === null) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var l = t, n = e; ; ) {
      var a = l.return;
      if (a === null) break;
      var i = a.alternate;
      if (i === null) {
        if (n = a.return, n !== null) {
          l = n;
          continue;
        }
        break;
      }
      if (a.child === i.child) {
        for (i = a.child; i; ) {
          if (i === l) return D(a), t;
          if (i === n) return D(a), e;
          i = i.sibling;
        }
        throw Error(r(188));
      }
      if (l.return !== n.return) l = a, n = i;
      else {
        for (var f = !1, o = a.child; o; ) {
          if (o === l) {
            f = !0, l = a, n = i;
            break;
          }
          if (o === n) {
            f = !0, n = a, l = i;
            break;
          }
          o = o.sibling;
        }
        if (!f) {
          for (o = i.child; o; ) {
            if (o === l) {
              f = !0, l = i, n = a;
              break;
            }
            if (o === n) {
              f = !0, n = i, l = a;
              break;
            }
            o = o.sibling;
          }
          if (!f) throw Error(r(189));
        }
      }
      if (l.alternate !== n) throw Error(r(190));
    }
    if (l.tag !== 3) throw Error(r(188));
    return l.stateNode.current === l ? t : e;
  }
  function w(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = w(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var v = Object.assign, E = /* @__PURE__ */ Symbol.for("react.element"), G = /* @__PURE__ */ Symbol.for("react.transitional.element"), N = /* @__PURE__ */ Symbol.for("react.portal"), X = /* @__PURE__ */ Symbol.for("react.fragment"), O = /* @__PURE__ */ Symbol.for("react.strict_mode"), L = /* @__PURE__ */ Symbol.for("react.profiler"), K = /* @__PURE__ */ Symbol.for("react.consumer"), p = /* @__PURE__ */ Symbol.for("react.context"), T = /* @__PURE__ */ Symbol.for("react.forward_ref"), b = /* @__PURE__ */ Symbol.for("react.suspense"), _ = /* @__PURE__ */ Symbol.for("react.suspense_list"), q = /* @__PURE__ */ Symbol.for("react.memo"), H = /* @__PURE__ */ Symbol.for("react.lazy"), Y = /* @__PURE__ */ Symbol.for("react.activity"), R = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), S = Symbol.iterator;
  function A(t) {
    return t === null || typeof t != "object" ? null : (t = S && t[S] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var B = /* @__PURE__ */ Symbol.for("react.client.reference");
  function J(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === B ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case X:
        return "Fragment";
      case L:
        return "Profiler";
      case O:
        return "StrictMode";
      case b:
        return "Suspense";
      case _:
        return "SuspenseList";
      case Y:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case N:
          return "Portal";
        case p:
          return t.displayName || "Context";
        case K:
          return (t._context.displayName || "Context") + ".Consumer";
        case T:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case q:
          return e = t.displayName || null, e !== null ? e : J(t.type) || "Memo";
        case H:
          e = t._payload, t = t._init;
          try {
            return J(t(e));
          } catch {
          }
      }
    return null;
  }
  var tt = Array.isArray, M = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, P = [], et = -1;
  function nt(t) {
    return { current: t };
  }
  function st(t) {
    0 > et || (t.current = P[et], P[et] = null, et--);
  }
  function ut(t, e) {
    et++, P[et] = t.current, t.current = e;
  }
  var it = nt(null), _t = nt(null), bt = nt(null), rt = nt(null);
  function Rt(t, e) {
    switch (ut(bt, e), ut(_t, t), ut(it, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? ih(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = ih(e), t = ch(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    st(it), ut(it, t);
  }
  function ot() {
    st(it), st(_t), st(bt);
  }
  function vt(t) {
    t.memoizedState !== null && ut(rt, t);
    var e = it.current, l = ch(e, t.type);
    e !== l && (ut(_t, t), ut(it, l));
  }
  function ce(t) {
    _t.current === t && (st(it), st(_t)), rt.current === t && (st(rt), ru._currentValue = W);
  }
  var $t, tl;
  function It(t) {
    if ($t === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        $t = e && e[1] || "", tl = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + $t + t + tl;
  }
  var ke = !1;
  function Re(t, e) {
    if (!t || ke) return "";
    ke = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var $ = function() {
                throw Error();
              };
              if (Object.defineProperty($.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct($, []);
                } catch (V) {
                  var Q = V;
                }
                Reflect.construct(t, [], $);
              } else {
                try {
                  $.call();
                } catch (V) {
                  Q = V;
                }
                t.call($.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (V) {
                Q = V;
              }
              ($ = t()) && typeof $.catch == "function" && $.catch(function() {
              });
            }
          } catch (V) {
            if (V && Q && typeof V.stack == "string")
              return [V.stack, Q.stack];
          }
          return [null, null];
        }
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name"
      );
      a && a.configurable && Object.defineProperty(
        n.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var i = n.DetermineComponentFrameRoot(), f = i[0], o = i[1];
      if (f && o) {
        var m = f.split(`
`), x = o.split(`
`);
        for (a = n = 0; n < m.length && !m[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; a < x.length && !x[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (n === m.length || a === x.length)
          for (n = m.length - 1, a = x.length - 1; 1 <= n && 0 <= a && m[n] !== x[a]; )
            a--;
        for (; 1 <= n && 0 <= a; n--, a--)
          if (m[n] !== x[a]) {
            if (n !== 1 || a !== 1)
              do
                if (n--, a--, 0 > a || m[n] !== x[a]) {
                  var Z = `
` + m[n].replace(" at new ", " at ");
                  return t.displayName && Z.includes("<anonymous>") && (Z = Z.replace("<anonymous>", t.displayName)), Z;
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      ke = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? It(l) : "";
  }
  function Tl(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return It(t.type);
      case 16:
        return It("Lazy");
      case 13:
        return t.child !== e && e !== null ? It("Suspense Fallback") : It("Suspense");
      case 19:
        return It("SuspenseList");
      case 0:
      case 15:
        return Re(t.type, !1);
      case 11:
        return Re(t.type.render, !1);
      case 1:
        return Re(t.type, !0);
      case 31:
        return It("Activity");
      default:
        return "";
    }
  }
  function On(t) {
    try {
      var e = "", l = null;
      do
        e += Tl(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var en = Object.prototype.hasOwnProperty, _a = u.unstable_scheduleCallback, Nn = u.unstable_cancelCallback, Qc = u.unstable_shouldYield, oy = u.unstable_requestPaint, ge = u.unstable_now, dy = u.unstable_getCurrentPriorityLevel, Br = u.unstable_ImmediatePriority, Hr = u.unstable_UserBlockingPriority, Gu = u.unstable_NormalPriority, hy = u.unstable_LowPriority, Yr = u.unstable_IdlePriority, my = u.log, yy = u.unstable_setDisableYieldValue, Aa = null, pe = null;
  function Ml(t) {
    if (typeof my == "function" && yy(t), pe && typeof pe.setStrictMode == "function")
      try {
        pe.setStrictMode(Aa, t);
      } catch {
      }
  }
  var Se = Math.clz32 ? Math.clz32 : py, vy = Math.log, gy = Math.LN2;
  function py(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (vy(t) / gy | 0) | 0;
  }
  var Lu = 256, Vu = 262144, Xu = 4194304;
  function ln(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Zu(t, e, l) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var a = 0, i = t.suspendedLanes, f = t.pingedLanes;
    t = t.warmLanes;
    var o = n & 134217727;
    return o !== 0 ? (n = o & ~i, n !== 0 ? a = ln(n) : (f &= o, f !== 0 ? a = ln(f) : l || (l = o & ~t, l !== 0 && (a = ln(l))))) : (o = n & ~i, o !== 0 ? a = ln(o) : f !== 0 ? a = ln(f) : l || (l = n & ~t, l !== 0 && (a = ln(l)))), a === 0 ? 0 : e !== 0 && e !== a && (e & i) === 0 && (i = a & -a, l = e & -e, i >= l || i === 32 && (l & 4194048) !== 0) ? e : a;
  }
  function Ea(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Sy(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function wr() {
    var t = Xu;
    return Xu <<= 1, (Xu & 62914560) === 0 && (Xu = 4194304), t;
  }
  function Bc(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Ta(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function by(t, e, l, n, a, i) {
    var f = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var o = t.entanglements, m = t.expirationTimes, x = t.hiddenUpdates;
    for (l = f & ~l; 0 < l; ) {
      var Z = 31 - Se(l), $ = 1 << Z;
      o[Z] = 0, m[Z] = -1;
      var Q = x[Z];
      if (Q !== null)
        for (x[Z] = null, Z = 0; Z < Q.length; Z++) {
          var V = Q[Z];
          V !== null && (V.lane &= -536870913);
        }
      l &= ~$;
    }
    n !== 0 && Gr(t, n, 0), i !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(f & ~e));
  }
  function Gr(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var n = 31 - Se(e);
    t.entangledLanes |= e, t.entanglements[n] = t.entanglements[n] | 1073741824 | l & 261930;
  }
  function Lr(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var n = 31 - Se(l), a = 1 << n;
      a & e | t[n] & e && (t[n] |= e), l &= ~a;
    }
  }
  function Vr(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : Hc(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function Hc(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Yc(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Xr() {
    var t = k.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Nh(t.type));
  }
  function Zr(t, e) {
    var l = k.p;
    try {
      return k.p = t, e();
    } finally {
      k.p = l;
    }
  }
  var zl = Math.random().toString(36).slice(2), Pt = "__reactFiber$" + zl, se = "__reactProps$" + zl, Rn = "__reactContainer$" + zl, wc = "__reactEvents$" + zl, _y = "__reactListeners$" + zl, Ay = "__reactHandles$" + zl, Kr = "__reactResources$" + zl, Ma = "__reactMarker$" + zl;
  function Gc(t) {
    delete t[Pt], delete t[se], delete t[wc], delete t[_y], delete t[Ay];
  }
  function Un(t) {
    var e = t[Pt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[Rn] || l[Pt]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = mh(t); t !== null; ) {
            if (l = t[Pt]) return l;
            t = mh(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function jn(t) {
    if (t = t[Pt] || t[Rn]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function za(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function xn(t) {
    var e = t[Kr];
    return e || (e = t[Kr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Jt(t) {
    t[Ma] = !0;
  }
  var Jr = /* @__PURE__ */ new Set(), kr = {};
  function nn(t, e) {
    qn(t, e), qn(t + "Capture", e);
  }
  function qn(t, e) {
    for (kr[t] = e, t = 0; t < e.length; t++)
      Jr.add(e[t]);
  }
  var Ey = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Fr = {}, Wr = {};
  function Ty(t) {
    return en.call(Wr, t) ? !0 : en.call(Fr, t) ? !1 : Ey.test(t) ? Wr[t] = !0 : (Fr[t] = !0, !1);
  }
  function Ku(t, e, l) {
    if (Ty(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var n = e.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function Ju(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function el(t, e, l, n) {
    if (n === null) t.removeAttribute(l);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + n);
    }
  }
  function Ue(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function $r(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function My(t, e, l) {
    var n = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var a = n.get, i = n.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return a.call(this);
        },
        set: function(f) {
          l = "" + f, i.call(this, f);
        }
      }), Object.defineProperty(t, e, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(f) {
          l = "" + f;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function Lc(t) {
    if (!t._valueTracker) {
      var e = $r(t) ? "checked" : "value";
      t._valueTracker = My(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function Ir(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), n = "";
    return t && (n = $r(t) ? t.checked ? "true" : "false" : t.value), t = n, t !== l ? (e.setValue(t), !0) : !1;
  }
  function ku(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var zy = /[\n"\\]/g;
  function je(t) {
    return t.replace(
      zy,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Vc(t, e, l, n, a, i, f, o) {
    t.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"), e != null ? f === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ue(e)) : t.value !== "" + Ue(e) && (t.value = "" + Ue(e)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"), e != null ? Xc(t, f, Ue(e)) : l != null ? Xc(t, f, Ue(l)) : n != null && t.removeAttribute("value"), a == null && i != null && (t.defaultChecked = !!i), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? t.name = "" + Ue(o) : t.removeAttribute("name");
  }
  function Pr(t, e, l, n, a, i, f, o) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.type = i), e != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || e != null)) {
        Lc(t);
        return;
      }
      l = l != null ? "" + Ue(l) : "", e = e != null ? "" + Ue(e) : l, o || e === t.value || (t.value = e), t.defaultValue = e;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, t.checked = o ? t.checked : !!n, t.defaultChecked = !!n, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f), Lc(t);
  }
  function Xc(t, e, l) {
    e === "number" && ku(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function Qn(t, e, l, n) {
    if (t = t.options, e) {
      e = {};
      for (var a = 0; a < l.length; a++)
        e["$" + l[a]] = !0;
      for (l = 0; l < t.length; l++)
        a = e.hasOwnProperty("$" + t[l].value), t[l].selected !== a && (t[l].selected = a), a && n && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + Ue(l), e = null, a = 0; a < t.length; a++) {
        if (t[a].value === l) {
          t[a].selected = !0, n && (t[a].defaultSelected = !0);
          return;
        }
        e !== null || t[a].disabled || (e = t[a]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function to(t, e, l) {
    if (e != null && (e = "" + Ue(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + Ue(l) : "";
  }
  function eo(t, e, l, n) {
    if (e == null) {
      if (n != null) {
        if (l != null) throw Error(r(92));
        if (tt(n)) {
          if (1 < n.length) throw Error(r(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), e = l;
    }
    l = Ue(e), t.defaultValue = l, n = t.textContent, n === l && n !== "" && n !== null && (t.value = n), Lc(t);
  }
  function Bn(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Dy = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function lo(t, e, l) {
    var n = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : n ? t.setProperty(e, l) : typeof l != "number" || l === 0 || Dy.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function no(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || e != null && e.hasOwnProperty(n) || (n.indexOf("--") === 0 ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "");
      for (var a in e)
        n = e[a], e.hasOwnProperty(a) && l[a] !== n && lo(t, a, n);
    } else
      for (var i in e)
        e.hasOwnProperty(i) && lo(t, i, e[i]);
  }
  function Zc(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Cy = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Oy = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Fu(t) {
    return Oy.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function ll() {
  }
  var Kc = null;
  function Jc(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Hn = null, Yn = null;
  function ao(t) {
    var e = jn(t);
    if (e && (t = e.stateNode)) {
      var l = t[se] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Vc(
            t,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), e = l.name, l.type === "radio" && e != null) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + je(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var n = l[e];
              if (n !== t && n.form === t.form) {
                var a = n[se] || null;
                if (!a) throw Error(r(90));
                Vc(
                  n,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              n = l[e], n.form === t.form && Ir(n);
          }
          break t;
        case "textarea":
          to(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && Qn(t, !!l.multiple, e, !1);
      }
    }
  }
  var kc = !1;
  function uo(t, e, l) {
    if (kc) return t(e, l);
    kc = !0;
    try {
      var n = t(e);
      return n;
    } finally {
      if (kc = !1, (Hn !== null || Yn !== null) && (Qi(), Hn && (e = Hn, t = Yn, Yn = Hn = null, ao(e), t)))
        for (e = 0; e < t.length; e++) ao(t[e]);
    }
  }
  function Da(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var n = l[se] || null;
    if (n === null) return null;
    l = n[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (n = !n.disabled) || (t = t.type, n = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !n;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function")
      throw Error(
        r(231, e, typeof l)
      );
    return l;
  }
  var nl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Fc = !1;
  if (nl)
    try {
      var Ca = {};
      Object.defineProperty(Ca, "passive", {
        get: function() {
          Fc = !0;
        }
      }), window.addEventListener("test", Ca, Ca), window.removeEventListener("test", Ca, Ca);
    } catch {
      Fc = !1;
    }
  var Dl = null, Wc = null, Wu = null;
  function io() {
    if (Wu) return Wu;
    var t, e = Wc, l = e.length, n, a = "value" in Dl ? Dl.value : Dl.textContent, i = a.length;
    for (t = 0; t < l && e[t] === a[t]; t++) ;
    var f = l - t;
    for (n = 1; n <= f && e[l - n] === a[i - n]; n++) ;
    return Wu = a.slice(t, 1 < n ? 1 - n : void 0);
  }
  function $u(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Iu() {
    return !0;
  }
  function co() {
    return !1;
  }
  function re(t) {
    function e(l, n, a, i, f) {
      this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = f, this.currentTarget = null;
      for (var o in t)
        t.hasOwnProperty(o) && (l = t[o], this[o] = l ? l(i) : i[o]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Iu : co, this.isPropagationStopped = co, this;
    }
    return v(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Iu);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Iu);
      },
      persist: function() {
      },
      isPersistent: Iu
    }), e;
  }
  var an = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Pu = re(an), Oa = v({}, an, { view: 0, detail: 0 }), Ny = re(Oa), $c, Ic, Na, ti = v({}, Oa, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: tf,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Na && (Na && t.type === "mousemove" ? ($c = t.screenX - Na.screenX, Ic = t.screenY - Na.screenY) : Ic = $c = 0, Na = t), $c);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Ic;
    }
  }), fo = re(ti), Ry = v({}, ti, { dataTransfer: 0 }), Uy = re(Ry), jy = v({}, Oa, { relatedTarget: 0 }), Pc = re(jy), xy = v({}, an, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), qy = re(xy), Qy = v({}, an, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), By = re(Qy), Hy = v({}, an, { data: 0 }), so = re(Hy), Yy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, wy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Gy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Ly(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Gy[t]) ? !!e[t] : !1;
  }
  function tf() {
    return Ly;
  }
  var Vy = v({}, Oa, {
    key: function(t) {
      if (t.key) {
        var e = Yy[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = $u(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? wy[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: tf,
    charCode: function(t) {
      return t.type === "keypress" ? $u(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? $u(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), Xy = re(Vy), Zy = v({}, ti, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), ro = re(Zy), Ky = v({}, Oa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: tf
  }), Jy = re(Ky), ky = v({}, an, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fy = re(ky), Wy = v({}, ti, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), $y = re(Wy), Iy = v({}, an, {
    newState: 0,
    oldState: 0
  }), Py = re(Iy), tv = [9, 13, 27, 32], ef = nl && "CompositionEvent" in window, Ra = null;
  nl && "documentMode" in document && (Ra = document.documentMode);
  var ev = nl && "TextEvent" in window && !Ra, oo = nl && (!ef || Ra && 8 < Ra && 11 >= Ra), ho = " ", mo = !1;
  function yo(t, e) {
    switch (t) {
      case "keyup":
        return tv.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function vo(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var wn = !1;
  function lv(t, e) {
    switch (t) {
      case "compositionend":
        return vo(e);
      case "keypress":
        return e.which !== 32 ? null : (mo = !0, ho);
      case "textInput":
        return t = e.data, t === ho && mo ? null : t;
      default:
        return null;
    }
  }
  function nv(t, e) {
    if (wn)
      return t === "compositionend" || !ef && yo(t, e) ? (t = io(), Wu = Wc = Dl = null, wn = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return oo && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var av = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function go(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!av[t.type] : e === "textarea";
  }
  function po(t, e, l, n) {
    Hn ? Yn ? Yn.push(n) : Yn = [n] : Hn = n, e = Vi(e, "onChange"), 0 < e.length && (l = new Pu(
      "onChange",
      "change",
      null,
      l,
      n
    ), t.push({ event: l, listeners: e }));
  }
  var Ua = null, ja = null;
  function uv(t) {
    th(t, 0);
  }
  function ei(t) {
    var e = za(t);
    if (Ir(e)) return t;
  }
  function So(t, e) {
    if (t === "change") return e;
  }
  var bo = !1;
  if (nl) {
    var lf;
    if (nl) {
      var nf = "oninput" in document;
      if (!nf) {
        var _o = document.createElement("div");
        _o.setAttribute("oninput", "return;"), nf = typeof _o.oninput == "function";
      }
      lf = nf;
    } else lf = !1;
    bo = lf && (!document.documentMode || 9 < document.documentMode);
  }
  function Ao() {
    Ua && (Ua.detachEvent("onpropertychange", Eo), ja = Ua = null);
  }
  function Eo(t) {
    if (t.propertyName === "value" && ei(ja)) {
      var e = [];
      po(
        e,
        ja,
        t,
        Jc(t)
      ), uo(uv, e);
    }
  }
  function iv(t, e, l) {
    t === "focusin" ? (Ao(), Ua = e, ja = l, Ua.attachEvent("onpropertychange", Eo)) : t === "focusout" && Ao();
  }
  function cv(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ei(ja);
  }
  function fv(t, e) {
    if (t === "click") return ei(e);
  }
  function sv(t, e) {
    if (t === "input" || t === "change")
      return ei(e);
  }
  function rv(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var be = typeof Object.is == "function" ? Object.is : rv;
  function xa(t, e) {
    if (be(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), n = Object.keys(e);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var a = l[n];
      if (!en.call(e, a) || !be(t[a], e[a]))
        return !1;
    }
    return !0;
  }
  function To(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Mo(t, e) {
    var l = To(t);
    t = 0;
    for (var n; l; ) {
      if (l.nodeType === 3) {
        if (n = t + l.textContent.length, t <= e && n >= e)
          return { node: l, offset: e - t };
        t = n;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = To(l);
    }
  }
  function zo(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? zo(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Do(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = ku(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = ku(t.document);
    }
    return e;
  }
  function af(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var ov = nl && "documentMode" in document && 11 >= document.documentMode, Gn = null, uf = null, qa = null, cf = !1;
  function Co(t, e, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    cf || Gn == null || Gn !== ku(n) || (n = Gn, "selectionStart" in n && af(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), qa && xa(qa, n) || (qa = n, n = Vi(uf, "onSelect"), 0 < n.length && (e = new Pu(
      "onSelect",
      "select",
      null,
      e,
      l
    ), t.push({ event: e, listeners: n }), e.target = Gn)));
  }
  function un(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var Ln = {
    animationend: un("Animation", "AnimationEnd"),
    animationiteration: un("Animation", "AnimationIteration"),
    animationstart: un("Animation", "AnimationStart"),
    transitionrun: un("Transition", "TransitionRun"),
    transitionstart: un("Transition", "TransitionStart"),
    transitioncancel: un("Transition", "TransitionCancel"),
    transitionend: un("Transition", "TransitionEnd")
  }, ff = {}, Oo = {};
  nl && (Oo = document.createElement("div").style, "AnimationEvent" in window || (delete Ln.animationend.animation, delete Ln.animationiteration.animation, delete Ln.animationstart.animation), "TransitionEvent" in window || delete Ln.transitionend.transition);
  function cn(t) {
    if (ff[t]) return ff[t];
    if (!Ln[t]) return t;
    var e = Ln[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in Oo)
        return ff[t] = e[l];
    return t;
  }
  var No = cn("animationend"), Ro = cn("animationiteration"), Uo = cn("animationstart"), dv = cn("transitionrun"), hv = cn("transitionstart"), mv = cn("transitioncancel"), jo = cn("transitionend"), xo = /* @__PURE__ */ new Map(), sf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  sf.push("scrollEnd");
  function Ve(t, e) {
    xo.set(t, e), nn(e, [t]);
  }
  var li = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, xe = [], Vn = 0, rf = 0;
  function ni() {
    for (var t = Vn, e = rf = Vn = 0; e < t; ) {
      var l = xe[e];
      xe[e++] = null;
      var n = xe[e];
      xe[e++] = null;
      var a = xe[e];
      xe[e++] = null;
      var i = xe[e];
      if (xe[e++] = null, n !== null && a !== null) {
        var f = n.pending;
        f === null ? a.next = a : (a.next = f.next, f.next = a), n.pending = a;
      }
      i !== 0 && qo(l, a, i);
    }
  }
  function ai(t, e, l, n) {
    xe[Vn++] = t, xe[Vn++] = e, xe[Vn++] = l, xe[Vn++] = n, rf |= n, t.lanes |= n, t = t.alternate, t !== null && (t.lanes |= n);
  }
  function of(t, e, l, n) {
    return ai(t, e, l, n), ui(t);
  }
  function fn(t, e) {
    return ai(t, null, null, e), ui(t);
  }
  function qo(t, e, l) {
    t.lanes |= l;
    var n = t.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, i = t.return; i !== null; )
      i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (t = i.stateNode, t === null || t._visibility & 1 || (a = !0)), t = i, i = i.return;
    return t.tag === 3 ? (i = t.stateNode, a && e !== null && (a = 31 - Se(l), t = i.hiddenUpdates, n = t[a], n === null ? t[a] = [e] : n.push(e), e.lane = l | 536870912), i) : null;
  }
  function ui(t) {
    if (50 < nu)
      throw nu = 0, bs = null, Error(r(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Xn = {};
  function yv(t, e, l, n) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function _e(t, e, l, n) {
    return new yv(t, e, l, n);
  }
  function df(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function al(t, e) {
    var l = t.alternate;
    return l === null ? (l = _e(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function Qo(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function ii(t, e, l, n, a, i) {
    var f = 0;
    if (n = t, typeof t == "function") df(t) && (f = 1);
    else if (typeof t == "string")
      f = b2(
        t,
        l,
        it.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case Y:
          return t = _e(31, l, e, a), t.elementType = Y, t.lanes = i, t;
        case X:
          return sn(l.children, a, i, e);
        case O:
          f = 8, a |= 24;
          break;
        case L:
          return t = _e(12, l, e, a | 2), t.elementType = L, t.lanes = i, t;
        case b:
          return t = _e(13, l, e, a), t.elementType = b, t.lanes = i, t;
        case _:
          return t = _e(19, l, e, a), t.elementType = _, t.lanes = i, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case p:
                f = 10;
                break t;
              case K:
                f = 9;
                break t;
              case T:
                f = 11;
                break t;
              case q:
                f = 14;
                break t;
              case H:
                f = 16, n = null;
                break t;
            }
          f = 29, l = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), n = null;
      }
    return e = _e(f, l, e, a), e.elementType = t, e.type = n, e.lanes = i, e;
  }
  function sn(t, e, l, n) {
    return t = _e(7, t, n, e), t.lanes = l, t;
  }
  function hf(t, e, l) {
    return t = _e(6, t, null, e), t.lanes = l, t;
  }
  function Bo(t) {
    var e = _e(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function mf(t, e, l) {
    return e = _e(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = l, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var Ho = /* @__PURE__ */ new WeakMap();
  function qe(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Ho.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: On(e)
      }, Ho.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: On(e)
    };
  }
  var Zn = [], Kn = 0, ci = null, Qa = 0, Qe = [], Be = 0, Cl = null, Fe = 1, We = "";
  function ul(t, e) {
    Zn[Kn++] = Qa, Zn[Kn++] = ci, ci = t, Qa = e;
  }
  function Yo(t, e, l) {
    Qe[Be++] = Fe, Qe[Be++] = We, Qe[Be++] = Cl, Cl = t;
    var n = Fe;
    t = We;
    var a = 32 - Se(n) - 1;
    n &= ~(1 << a), l += 1;
    var i = 32 - Se(e) + a;
    if (30 < i) {
      var f = a - a % 5;
      i = (n & (1 << f) - 1).toString(32), n >>= f, a -= f, Fe = 1 << 32 - Se(e) + a | l << a | n, We = i + t;
    } else
      Fe = 1 << i | l << a | n, We = t;
  }
  function yf(t) {
    t.return !== null && (ul(t, 1), Yo(t, 1, 0));
  }
  function vf(t) {
    for (; t === ci; )
      ci = Zn[--Kn], Zn[Kn] = null, Qa = Zn[--Kn], Zn[Kn] = null;
    for (; t === Cl; )
      Cl = Qe[--Be], Qe[Be] = null, We = Qe[--Be], Qe[Be] = null, Fe = Qe[--Be], Qe[Be] = null;
  }
  function wo(t, e) {
    Qe[Be++] = Fe, Qe[Be++] = We, Qe[Be++] = Cl, Fe = e.id, We = e.overflow, Cl = t;
  }
  var te = null, Ut = null, St = !1, Ol = null, He = !1, gf = Error(r(519));
  function Nl(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ba(qe(e, t)), gf;
  }
  function Go(t) {
    var e = t.stateNode, l = t.type, n = t.memoizedProps;
    switch (e[Pt] = t, e[se] = n, l) {
      case "dialog":
        yt("cancel", e), yt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        yt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < uu.length; l++)
          yt(uu[l], e);
        break;
      case "source":
        yt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        yt("error", e), yt("load", e);
        break;
      case "details":
        yt("toggle", e);
        break;
      case "input":
        yt("invalid", e), Pr(
          e,
          n.value,
          n.defaultValue,
          n.checked,
          n.defaultChecked,
          n.type,
          n.name,
          !0
        );
        break;
      case "select":
        yt("invalid", e);
        break;
      case "textarea":
        yt("invalid", e), eo(e, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || n.suppressHydrationWarning === !0 || ah(e.textContent, l) ? (n.popover != null && (yt("beforetoggle", e), yt("toggle", e)), n.onScroll != null && yt("scroll", e), n.onScrollEnd != null && yt("scrollend", e), n.onClick != null && (e.onclick = ll), e = !0) : e = !1, e || Nl(t, !0);
  }
  function Lo(t) {
    for (te = t.return; te; )
      switch (te.tag) {
        case 5:
        case 31:
        case 13:
          He = !1;
          return;
        case 27:
        case 3:
          He = !0;
          return;
        default:
          te = te.return;
      }
  }
  function Jn(t) {
    if (t !== te) return !1;
    if (!St) return Lo(t), St = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || qs(t.type, t.memoizedProps)), l = !l), l && Ut && Nl(t), Lo(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Ut = hh(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Ut = hh(t);
    } else
      e === 27 ? (e = Ut, Xl(t.type) ? (t = ws, ws = null, Ut = t) : Ut = e) : Ut = te ? we(t.stateNode.nextSibling) : null;
    return !0;
  }
  function rn() {
    Ut = te = null, St = !1;
  }
  function pf() {
    var t = Ol;
    return t !== null && (me === null ? me = t : me.push.apply(
      me,
      t
    ), Ol = null), t;
  }
  function Ba(t) {
    Ol === null ? Ol = [t] : Ol.push(t);
  }
  var Sf = nt(null), on = null, il = null;
  function Rl(t, e, l) {
    ut(Sf, e._currentValue), e._currentValue = l;
  }
  function cl(t) {
    t._currentValue = Sf.current, st(Sf);
  }
  function bf(t, e, l) {
    for (; t !== null; ) {
      var n = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function _f(t, e, l, n) {
    var a = t.child;
    for (a !== null && (a.return = t); a !== null; ) {
      var i = a.dependencies;
      if (i !== null) {
        var f = a.child;
        i = i.firstContext;
        t: for (; i !== null; ) {
          var o = i;
          i = a;
          for (var m = 0; m < e.length; m++)
            if (o.context === e[m]) {
              i.lanes |= l, o = i.alternate, o !== null && (o.lanes |= l), bf(
                i.return,
                l,
                t
              ), n || (f = null);
              break t;
            }
          i = o.next;
        }
      } else if (a.tag === 18) {
        if (f = a.return, f === null) throw Error(r(341));
        f.lanes |= l, i = f.alternate, i !== null && (i.lanes |= l), bf(f, l, t), f = null;
      } else f = a.child;
      if (f !== null) f.return = a;
      else
        for (f = a; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (a = f.sibling, a !== null) {
            a.return = f.return, f = a;
            break;
          }
          f = f.return;
        }
      a = f;
    }
  }
  function kn(t, e, l, n) {
    t = null;
    for (var a = e, i = !1; a !== null; ) {
      if (!i) {
        if ((a.flags & 524288) !== 0) i = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var f = a.alternate;
        if (f === null) throw Error(r(387));
        if (f = f.memoizedProps, f !== null) {
          var o = a.type;
          be(a.pendingProps.value, f.value) || (t !== null ? t.push(o) : t = [o]);
        }
      } else if (a === rt.current) {
        if (f = a.alternate, f === null) throw Error(r(387));
        f.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(ru) : t = [ru]);
      }
      a = a.return;
    }
    t !== null && _f(
      e,
      t,
      l,
      n
    ), e.flags |= 262144;
  }
  function fi(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!be(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function dn(t) {
    on = t, il = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function ee(t) {
    return Vo(on, t);
  }
  function si(t, e) {
    return on === null && dn(t), Vo(t, e);
  }
  function Vo(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, il === null) {
      if (t === null) throw Error(r(308));
      il = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else il = il.next = e;
    return l;
  }
  var vv = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(l, n) {
        t.push(n);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(l) {
        return l();
      });
    };
  }, gv = u.unstable_scheduleCallback, pv = u.unstable_NormalPriority, Lt = {
    $$typeof: p,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Af() {
    return {
      controller: new vv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ha(t) {
    t.refCount--, t.refCount === 0 && gv(pv, function() {
      t.controller.abort();
    });
  }
  var Ya = null, Ef = 0, Fn = 0, Wn = null;
  function Sv(t, e) {
    if (Ya === null) {
      var l = Ya = [];
      Ef = 0, Fn = zs(), Wn = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return Ef++, e.then(Xo, Xo), e;
  }
  function Xo() {
    if (--Ef === 0 && Ya !== null) {
      Wn !== null && (Wn.status = "fulfilled");
      var t = Ya;
      Ya = null, Fn = 0, Wn = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function bv(t, e) {
    var l = [], n = {
      status: "pending",
      value: null,
      reason: null,
      then: function(a) {
        l.push(a);
      }
    };
    return t.then(
      function() {
        n.status = "fulfilled", n.value = e;
        for (var a = 0; a < l.length; a++) (0, l[a])(e);
      },
      function(a) {
        for (n.status = "rejected", n.reason = a, a = 0; a < l.length; a++)
          (0, l[a])(void 0);
      }
    ), n;
  }
  var Zo = M.S;
  M.S = function(t, e) {
    C0 = ge(), typeof e == "object" && e !== null && typeof e.then == "function" && Sv(t, e), Zo !== null && Zo(t, e);
  };
  var hn = nt(null);
  function Tf() {
    var t = hn.current;
    return t !== null ? t : Nt.pooledCache;
  }
  function ri(t, e) {
    e === null ? ut(hn, hn.current) : ut(hn, e.pool);
  }
  function Ko() {
    var t = Tf();
    return t === null ? null : { parent: Lt._currentValue, pool: t };
  }
  var $n = Error(r(460)), Mf = Error(r(474)), oi = Error(r(542)), di = { then: function() {
  } };
  function Jo(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function ko(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(ll, ll), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Wo(t), t;
      default:
        if (typeof e.status == "string") e.then(ll, ll);
        else {
          if (t = Nt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
          t = e, t.status = "pending", t.then(
            function(n) {
              if (e.status === "pending") {
                var a = e;
                a.status = "fulfilled", a.value = n;
              }
            },
            function(n) {
              if (e.status === "pending") {
                var a = e;
                a.status = "rejected", a.reason = n;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Wo(t), t;
        }
        throw yn = e, $n;
    }
  }
  function mn(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (yn = l, $n) : l;
    }
  }
  var yn = null;
  function Fo() {
    if (yn === null) throw Error(r(459));
    var t = yn;
    return yn = null, t;
  }
  function Wo(t) {
    if (t === $n || t === oi)
      throw Error(r(483));
  }
  var In = null, wa = 0;
  function hi(t) {
    var e = wa;
    return wa += 1, In === null && (In = []), ko(In, t, e);
  }
  function Ga(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function mi(t, e) {
    throw e.$$typeof === E ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function $o(t) {
    function e(z, g) {
      if (t) {
        var U = z.deletions;
        U === null ? (z.deletions = [g], z.flags |= 16) : U.push(g);
      }
    }
    function l(z, g) {
      if (!t) return null;
      for (; g !== null; )
        e(z, g), g = g.sibling;
      return null;
    }
    function n(z) {
      for (var g = /* @__PURE__ */ new Map(); z !== null; )
        z.key !== null ? g.set(z.key, z) : g.set(z.index, z), z = z.sibling;
      return g;
    }
    function a(z, g) {
      return z = al(z, g), z.index = 0, z.sibling = null, z;
    }
    function i(z, g, U) {
      return z.index = U, t ? (U = z.alternate, U !== null ? (U = U.index, U < g ? (z.flags |= 67108866, g) : U) : (z.flags |= 67108866, g)) : (z.flags |= 1048576, g);
    }
    function f(z) {
      return t && z.alternate === null && (z.flags |= 67108866), z;
    }
    function o(z, g, U, F) {
      return g === null || g.tag !== 6 ? (g = hf(U, z.mode, F), g.return = z, g) : (g = a(g, U), g.return = z, g);
    }
    function m(z, g, U, F) {
      var ct = U.type;
      return ct === X ? Z(
        z,
        g,
        U.props.children,
        F,
        U.key
      ) : g !== null && (g.elementType === ct || typeof ct == "object" && ct !== null && ct.$$typeof === H && mn(ct) === g.type) ? (g = a(g, U.props), Ga(g, U), g.return = z, g) : (g = ii(
        U.type,
        U.key,
        U.props,
        null,
        z.mode,
        F
      ), Ga(g, U), g.return = z, g);
    }
    function x(z, g, U, F) {
      return g === null || g.tag !== 4 || g.stateNode.containerInfo !== U.containerInfo || g.stateNode.implementation !== U.implementation ? (g = mf(U, z.mode, F), g.return = z, g) : (g = a(g, U.children || []), g.return = z, g);
    }
    function Z(z, g, U, F, ct) {
      return g === null || g.tag !== 7 ? (g = sn(
        U,
        z.mode,
        F,
        ct
      ), g.return = z, g) : (g = a(g, U), g.return = z, g);
    }
    function $(z, g, U) {
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return g = hf(
          "" + g,
          z.mode,
          U
        ), g.return = z, g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case G:
            return U = ii(
              g.type,
              g.key,
              g.props,
              null,
              z.mode,
              U
            ), Ga(U, g), U.return = z, U;
          case N:
            return g = mf(
              g,
              z.mode,
              U
            ), g.return = z, g;
          case H:
            return g = mn(g), $(z, g, U);
        }
        if (tt(g) || A(g))
          return g = sn(
            g,
            z.mode,
            U,
            null
          ), g.return = z, g;
        if (typeof g.then == "function")
          return $(z, hi(g), U);
        if (g.$$typeof === p)
          return $(
            z,
            si(z, g),
            U
          );
        mi(z, g);
      }
      return null;
    }
    function Q(z, g, U, F) {
      var ct = g !== null ? g.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return ct !== null ? null : o(z, g, "" + U, F);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case G:
            return U.key === ct ? m(z, g, U, F) : null;
          case N:
            return U.key === ct ? x(z, g, U, F) : null;
          case H:
            return U = mn(U), Q(z, g, U, F);
        }
        if (tt(U) || A(U))
          return ct !== null ? null : Z(z, g, U, F, null);
        if (typeof U.then == "function")
          return Q(
            z,
            g,
            hi(U),
            F
          );
        if (U.$$typeof === p)
          return Q(
            z,
            g,
            si(z, U),
            F
          );
        mi(z, U);
      }
      return null;
    }
    function V(z, g, U, F, ct) {
      if (typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint")
        return z = z.get(U) || null, o(g, z, "" + F, ct);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case G:
            return z = z.get(
              F.key === null ? U : F.key
            ) || null, m(g, z, F, ct);
          case N:
            return z = z.get(
              F.key === null ? U : F.key
            ) || null, x(g, z, F, ct);
          case H:
            return F = mn(F), V(
              z,
              g,
              U,
              F,
              ct
            );
        }
        if (tt(F) || A(F))
          return z = z.get(U) || null, Z(g, z, F, ct, null);
        if (typeof F.then == "function")
          return V(
            z,
            g,
            U,
            hi(F),
            ct
          );
        if (F.$$typeof === p)
          return V(
            z,
            g,
            U,
            si(g, F),
            ct
          );
        mi(g, F);
      }
      return null;
    }
    function lt(z, g, U, F) {
      for (var ct = null, At = null, at = g, ht = g = 0, pt = null; at !== null && ht < U.length; ht++) {
        at.index > ht ? (pt = at, at = null) : pt = at.sibling;
        var Et = Q(
          z,
          at,
          U[ht],
          F
        );
        if (Et === null) {
          at === null && (at = pt);
          break;
        }
        t && at && Et.alternate === null && e(z, at), g = i(Et, g, ht), At === null ? ct = Et : At.sibling = Et, At = Et, at = pt;
      }
      if (ht === U.length)
        return l(z, at), St && ul(z, ht), ct;
      if (at === null) {
        for (; ht < U.length; ht++)
          at = $(z, U[ht], F), at !== null && (g = i(
            at,
            g,
            ht
          ), At === null ? ct = at : At.sibling = at, At = at);
        return St && ul(z, ht), ct;
      }
      for (at = n(at); ht < U.length; ht++)
        pt = V(
          at,
          z,
          ht,
          U[ht],
          F
        ), pt !== null && (t && pt.alternate !== null && at.delete(
          pt.key === null ? ht : pt.key
        ), g = i(
          pt,
          g,
          ht
        ), At === null ? ct = pt : At.sibling = pt, At = pt);
      return t && at.forEach(function(Fl) {
        return e(z, Fl);
      }), St && ul(z, ht), ct;
    }
    function ft(z, g, U, F) {
      if (U == null) throw Error(r(151));
      for (var ct = null, At = null, at = g, ht = g = 0, pt = null, Et = U.next(); at !== null && !Et.done; ht++, Et = U.next()) {
        at.index > ht ? (pt = at, at = null) : pt = at.sibling;
        var Fl = Q(z, at, Et.value, F);
        if (Fl === null) {
          at === null && (at = pt);
          break;
        }
        t && at && Fl.alternate === null && e(z, at), g = i(Fl, g, ht), At === null ? ct = Fl : At.sibling = Fl, At = Fl, at = pt;
      }
      if (Et.done)
        return l(z, at), St && ul(z, ht), ct;
      if (at === null) {
        for (; !Et.done; ht++, Et = U.next())
          Et = $(z, Et.value, F), Et !== null && (g = i(Et, g, ht), At === null ? ct = Et : At.sibling = Et, At = Et);
        return St && ul(z, ht), ct;
      }
      for (at = n(at); !Et.done; ht++, Et = U.next())
        Et = V(at, z, ht, Et.value, F), Et !== null && (t && Et.alternate !== null && at.delete(Et.key === null ? ht : Et.key), g = i(Et, g, ht), At === null ? ct = Et : At.sibling = Et, At = Et);
      return t && at.forEach(function(R2) {
        return e(z, R2);
      }), St && ul(z, ht), ct;
    }
    function Ot(z, g, U, F) {
      if (typeof U == "object" && U !== null && U.type === X && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case G:
            t: {
              for (var ct = U.key; g !== null; ) {
                if (g.key === ct) {
                  if (ct = U.type, ct === X) {
                    if (g.tag === 7) {
                      l(
                        z,
                        g.sibling
                      ), F = a(
                        g,
                        U.props.children
                      ), F.return = z, z = F;
                      break t;
                    }
                  } else if (g.elementType === ct || typeof ct == "object" && ct !== null && ct.$$typeof === H && mn(ct) === g.type) {
                    l(
                      z,
                      g.sibling
                    ), F = a(g, U.props), Ga(F, U), F.return = z, z = F;
                    break t;
                  }
                  l(z, g);
                  break;
                } else e(z, g);
                g = g.sibling;
              }
              U.type === X ? (F = sn(
                U.props.children,
                z.mode,
                F,
                U.key
              ), F.return = z, z = F) : (F = ii(
                U.type,
                U.key,
                U.props,
                null,
                z.mode,
                F
              ), Ga(F, U), F.return = z, z = F);
            }
            return f(z);
          case N:
            t: {
              for (ct = U.key; g !== null; ) {
                if (g.key === ct)
                  if (g.tag === 4 && g.stateNode.containerInfo === U.containerInfo && g.stateNode.implementation === U.implementation) {
                    l(
                      z,
                      g.sibling
                    ), F = a(g, U.children || []), F.return = z, z = F;
                    break t;
                  } else {
                    l(z, g);
                    break;
                  }
                else e(z, g);
                g = g.sibling;
              }
              F = mf(U, z.mode, F), F.return = z, z = F;
            }
            return f(z);
          case H:
            return U = mn(U), Ot(
              z,
              g,
              U,
              F
            );
        }
        if (tt(U))
          return lt(
            z,
            g,
            U,
            F
          );
        if (A(U)) {
          if (ct = A(U), typeof ct != "function") throw Error(r(150));
          return U = ct.call(U), ft(
            z,
            g,
            U,
            F
          );
        }
        if (typeof U.then == "function")
          return Ot(
            z,
            g,
            hi(U),
            F
          );
        if (U.$$typeof === p)
          return Ot(
            z,
            g,
            si(z, U),
            F
          );
        mi(z, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, g !== null && g.tag === 6 ? (l(z, g.sibling), F = a(g, U), F.return = z, z = F) : (l(z, g), F = hf(U, z.mode, F), F.return = z, z = F), f(z)) : l(z, g);
    }
    return function(z, g, U, F) {
      try {
        wa = 0;
        var ct = Ot(
          z,
          g,
          U,
          F
        );
        return In = null, ct;
      } catch (at) {
        if (at === $n || at === oi) throw at;
        var At = _e(29, at, null, z.mode);
        return At.lanes = F, At.return = z, At;
      }
    };
  }
  var vn = $o(!0), Io = $o(!1), Ul = !1;
  function zf(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Df(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function jl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function xl(t, e, l) {
    var n = t.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (Tt & 2) !== 0) {
      var a = n.pending;
      return a === null ? e.next = e : (e.next = a.next, a.next = e), n.pending = e, e = ui(t), qo(t, null, l), e;
    }
    return ai(t, n, e, l), ui(t);
  }
  function La(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, Lr(t, l);
    }
  }
  function Cf(t, e) {
    var l = t.updateQueue, n = t.alternate;
    if (n !== null && (n = n.updateQueue, l === n)) {
      var a = null, i = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var f = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          i === null ? a = i = f : i = i.next = f, l = l.next;
        } while (l !== null);
        i === null ? a = i = e : i = i.next = e;
      } else a = i = e;
      l = {
        baseState: n.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: i,
        shared: n.shared,
        callbacks: n.callbacks
      }, t.updateQueue = l;
      return;
    }
    t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
  }
  var Of = !1;
  function Va() {
    if (Of) {
      var t = Wn;
      if (t !== null) throw t;
    }
  }
  function Xa(t, e, l, n) {
    Of = !1;
    var a = t.updateQueue;
    Ul = !1;
    var i = a.firstBaseUpdate, f = a.lastBaseUpdate, o = a.shared.pending;
    if (o !== null) {
      a.shared.pending = null;
      var m = o, x = m.next;
      m.next = null, f === null ? i = x : f.next = x, f = m;
      var Z = t.alternate;
      Z !== null && (Z = Z.updateQueue, o = Z.lastBaseUpdate, o !== f && (o === null ? Z.firstBaseUpdate = x : o.next = x, Z.lastBaseUpdate = m));
    }
    if (i !== null) {
      var $ = a.baseState;
      f = 0, Z = x = m = null, o = i;
      do {
        var Q = o.lane & -536870913, V = Q !== o.lane;
        if (V ? (gt & Q) === Q : (n & Q) === Q) {
          Q !== 0 && Q === Fn && (Of = !0), Z !== null && (Z = Z.next = {
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          });
          t: {
            var lt = t, ft = o;
            Q = e;
            var Ot = l;
            switch (ft.tag) {
              case 1:
                if (lt = ft.payload, typeof lt == "function") {
                  $ = lt.call(Ot, $, Q);
                  break t;
                }
                $ = lt;
                break t;
              case 3:
                lt.flags = lt.flags & -65537 | 128;
              case 0:
                if (lt = ft.payload, Q = typeof lt == "function" ? lt.call(Ot, $, Q) : lt, Q == null) break t;
                $ = v({}, $, Q);
                break t;
              case 2:
                Ul = !0;
            }
          }
          Q = o.callback, Q !== null && (t.flags |= 64, V && (t.flags |= 8192), V = a.callbacks, V === null ? a.callbacks = [Q] : V.push(Q));
        } else
          V = {
            lane: Q,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          }, Z === null ? (x = Z = V, m = $) : Z = Z.next = V, f |= Q;
        if (o = o.next, o === null) {
          if (o = a.shared.pending, o === null)
            break;
          V = o, o = V.next, V.next = null, a.lastBaseUpdate = V, a.shared.pending = null;
        }
      } while (!0);
      Z === null && (m = $), a.baseState = m, a.firstBaseUpdate = x, a.lastBaseUpdate = Z, i === null && (a.shared.lanes = 0), Yl |= f, t.lanes = f, t.memoizedState = $;
    }
  }
  function Po(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function td(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        Po(l[t], e);
  }
  var Pn = nt(null), yi = nt(0);
  function ed(t, e) {
    t = vl, ut(yi, t), ut(Pn, e), vl = t | e.baseLanes;
  }
  function Nf() {
    ut(yi, vl), ut(Pn, Pn.current);
  }
  function Rf() {
    vl = yi.current, st(Pn), st(yi);
  }
  var Ae = nt(null), Ye = null;
  function ql(t) {
    var e = t.alternate;
    ut(wt, wt.current & 1), ut(Ae, t), Ye === null && (e === null || Pn.current !== null || e.memoizedState !== null) && (Ye = t);
  }
  function Uf(t) {
    ut(wt, wt.current), ut(Ae, t), Ye === null && (Ye = t);
  }
  function ld(t) {
    t.tag === 22 ? (ut(wt, wt.current), ut(Ae, t), Ye === null && (Ye = t)) : Ql();
  }
  function Ql() {
    ut(wt, wt.current), ut(Ae, Ae.current);
  }
  function Ee(t) {
    st(Ae), Ye === t && (Ye = null), st(wt);
  }
  var wt = nt(0);
  function vi(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Hs(l) || Ys(l)))
          return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var fl = 0, dt = null, Dt = null, Vt = null, gi = !1, ta = !1, gn = !1, pi = 0, Za = 0, ea = null, _v = 0;
  function qt() {
    throw Error(r(321));
  }
  function jf(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!be(t[l], e[l])) return !1;
    return !0;
  }
  function xf(t, e, l, n, a, i) {
    return fl = i, dt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, M.H = t === null || t.memoizedState === null ? Yd : Ff, gn = !1, i = l(n, a), gn = !1, ta && (i = ad(
      e,
      l,
      n,
      a
    )), nd(t), i;
  }
  function nd(t) {
    M.H = ka;
    var e = Dt !== null && Dt.next !== null;
    if (fl = 0, Vt = Dt = dt = null, gi = !1, Za = 0, ea = null, e) throw Error(r(300));
    t === null || Xt || (t = t.dependencies, t !== null && fi(t) && (Xt = !0));
  }
  function ad(t, e, l, n) {
    dt = t;
    var a = 0;
    do {
      if (ta && (ea = null), Za = 0, ta = !1, 25 <= a) throw Error(r(301));
      if (a += 1, Vt = Dt = null, t.updateQueue != null) {
        var i = t.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      M.H = wd, i = e(l, n);
    } while (ta);
    return i;
  }
  function Av() {
    var t = M.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Ka(e) : e, t = t.useState()[0], (Dt !== null ? Dt.memoizedState : null) !== t && (dt.flags |= 1024), e;
  }
  function qf() {
    var t = pi !== 0;
    return pi = 0, t;
  }
  function Qf(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function Bf(t) {
    if (gi) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      gi = !1;
    }
    fl = 0, Vt = Dt = dt = null, ta = !1, Za = pi = 0, ea = null;
  }
  function fe() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Vt === null ? dt.memoizedState = Vt = t : Vt = Vt.next = t, Vt;
  }
  function Gt() {
    if (Dt === null) {
      var t = dt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Dt.next;
    var e = Vt === null ? dt.memoizedState : Vt.next;
    if (e !== null)
      Vt = e, Dt = t;
    else {
      if (t === null)
        throw dt.alternate === null ? Error(r(467)) : Error(r(310));
      Dt = t, t = {
        memoizedState: Dt.memoizedState,
        baseState: Dt.baseState,
        baseQueue: Dt.baseQueue,
        queue: Dt.queue,
        next: null
      }, Vt === null ? dt.memoizedState = Vt = t : Vt = Vt.next = t;
    }
    return Vt;
  }
  function Si() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ka(t) {
    var e = Za;
    return Za += 1, ea === null && (ea = []), t = ko(ea, t, e), e = dt, (Vt === null ? e.memoizedState : Vt.next) === null && (e = e.alternate, M.H = e === null || e.memoizedState === null ? Yd : Ff), t;
  }
  function bi(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ka(t);
      if (t.$$typeof === p) return ee(t);
    }
    throw Error(r(438, String(t)));
  }
  function Hf(t) {
    var e = null, l = dt.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var n = dt.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (e = {
        data: n.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = Si(), dt.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), n = 0; n < t; n++)
        l[n] = R;
    return e.index++, l;
  }
  function sl(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function _i(t) {
    var e = Gt();
    return Yf(e, Dt, t);
  }
  function Yf(t, e, l) {
    var n = t.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = l;
    var a = t.baseQueue, i = n.pending;
    if (i !== null) {
      if (a !== null) {
        var f = a.next;
        a.next = i.next, i.next = f;
      }
      e.baseQueue = a = i, n.pending = null;
    }
    if (i = t.baseState, a === null) t.memoizedState = i;
    else {
      e = a.next;
      var o = f = null, m = null, x = e, Z = !1;
      do {
        var $ = x.lane & -536870913;
        if ($ !== x.lane ? (gt & $) === $ : (fl & $) === $) {
          var Q = x.revertLane;
          if (Q === 0)
            m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }), $ === Fn && (Z = !0);
          else if ((fl & Q) === Q) {
            x = x.next, Q === Fn && (Z = !0);
            continue;
          } else
            $ = {
              lane: 0,
              revertLane: x.revertLane,
              gesture: null,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }, m === null ? (o = m = $, f = i) : m = m.next = $, dt.lanes |= Q, Yl |= Q;
          $ = x.action, gn && l(i, $), i = x.hasEagerState ? x.eagerState : l(i, $);
        } else
          Q = {
            lane: $,
            revertLane: x.revertLane,
            gesture: x.gesture,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null
          }, m === null ? (o = m = Q, f = i) : m = m.next = Q, dt.lanes |= $, Yl |= $;
        x = x.next;
      } while (x !== null && x !== e);
      if (m === null ? f = i : m.next = o, !be(i, t.memoizedState) && (Xt = !0, Z && (l = Wn, l !== null)))
        throw l;
      t.memoizedState = i, t.baseState = f, t.baseQueue = m, n.lastRenderedState = i;
    }
    return a === null && (n.lanes = 0), [t.memoizedState, n.dispatch];
  }
  function wf(t) {
    var e = Gt(), l = e.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = t;
    var n = l.dispatch, a = l.pending, i = e.memoizedState;
    if (a !== null) {
      l.pending = null;
      var f = a = a.next;
      do
        i = t(i, f.action), f = f.next;
      while (f !== a);
      be(i, e.memoizedState) || (Xt = !0), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), l.lastRenderedState = i;
    }
    return [i, n];
  }
  function ud(t, e, l) {
    var n = dt, a = Gt(), i = St;
    if (i) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = e();
    var f = !be(
      (Dt || a).memoizedState,
      l
    );
    if (f && (a.memoizedState = l, Xt = !0), a = a.queue, Vf(fd.bind(null, n, a, t), [
      t
    ]), a.getSnapshot !== e || f || Vt !== null && Vt.memoizedState.tag & 1) {
      if (n.flags |= 2048, la(
        9,
        { destroy: void 0 },
        cd.bind(
          null,
          n,
          a,
          l,
          e
        ),
        null
      ), Nt === null) throw Error(r(349));
      i || (fl & 127) !== 0 || id(n, e, l);
    }
    return l;
  }
  function id(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = dt.updateQueue, e === null ? (e = Si(), dt.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function cd(t, e, l, n) {
    e.value = l, e.getSnapshot = n, sd(e) && rd(t);
  }
  function fd(t, e, l) {
    return l(function() {
      sd(e) && rd(t);
    });
  }
  function sd(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !be(t, l);
    } catch {
      return !0;
    }
  }
  function rd(t) {
    var e = fn(t, 2);
    e !== null && ye(e, t, 2);
  }
  function Gf(t) {
    var e = fe();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), gn) {
        Ml(!0);
        try {
          l();
        } finally {
          Ml(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: sl,
      lastRenderedState: t
    }, e;
  }
  function od(t, e, l, n) {
    return t.baseState = l, Yf(
      t,
      Dt,
      typeof n == "function" ? n : sl
    );
  }
  function Ev(t, e, l, n, a) {
    if (Ti(t)) throw Error(r(485));
    if (t = e.action, t !== null) {
      var i = {
        payload: a,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          i.listeners.push(f);
        }
      };
      M.T !== null ? l(!0) : i.isTransition = !1, n(i), l = e.pending, l === null ? (i.next = e.pending = i, dd(e, i)) : (i.next = l.next, e.pending = l.next = i);
    }
  }
  function dd(t, e) {
    var l = e.action, n = e.payload, a = t.state;
    if (e.isTransition) {
      var i = M.T, f = {};
      M.T = f;
      try {
        var o = l(a, n), m = M.S;
        m !== null && m(f, o), hd(t, e, o);
      } catch (x) {
        Lf(t, e, x);
      } finally {
        i !== null && f.types !== null && (i.types = f.types), M.T = i;
      }
    } else
      try {
        i = l(a, n), hd(t, e, i);
      } catch (x) {
        Lf(t, e, x);
      }
  }
  function hd(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        md(t, e, n);
      },
      function(n) {
        return Lf(t, e, n);
      }
    ) : md(t, e, l);
  }
  function md(t, e, l) {
    e.status = "fulfilled", e.value = l, yd(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, dd(t, l)));
  }
  function Lf(t, e, l) {
    var n = t.pending;
    if (t.pending = null, n !== null) {
      n = n.next;
      do
        e.status = "rejected", e.reason = l, yd(e), e = e.next;
      while (e !== n);
    }
    t.action = null;
  }
  function yd(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function vd(t, e) {
    return e;
  }
  function gd(t, e) {
    if (St) {
      var l = Nt.formState;
      if (l !== null) {
        t: {
          var n = dt;
          if (St) {
            if (Ut) {
              e: {
                for (var a = Ut, i = He; a.nodeType !== 8; ) {
                  if (!i) {
                    a = null;
                    break e;
                  }
                  if (a = we(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break e;
                  }
                }
                i = a.data, a = i === "F!" || i === "F" ? a : null;
              }
              if (a) {
                Ut = we(
                  a.nextSibling
                ), n = a.data === "F!";
                break t;
              }
            }
            Nl(n);
          }
          n = !1;
        }
        n && (e = l[0]);
      }
    }
    return l = fe(), l.memoizedState = l.baseState = e, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: vd,
      lastRenderedState: e
    }, l.queue = n, l = Qd.bind(
      null,
      dt,
      n
    ), n.dispatch = l, n = Gf(!1), i = kf.bind(
      null,
      dt,
      !1,
      n.queue
    ), n = fe(), a = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, n.queue = a, l = Ev.bind(
      null,
      dt,
      a,
      i,
      l
    ), a.dispatch = l, n.memoizedState = t, [e, l, !1];
  }
  function pd(t) {
    var e = Gt();
    return Sd(e, Dt, t);
  }
  function Sd(t, e, l) {
    if (e = Yf(
      t,
      e,
      vd
    )[0], t = _i(sl)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var n = Ka(e);
      } catch (f) {
        throw f === $n ? oi : f;
      }
    else n = e;
    e = Gt();
    var a = e.queue, i = a.dispatch;
    return l !== e.memoizedState && (dt.flags |= 2048, la(
      9,
      { destroy: void 0 },
      Tv.bind(null, a, l),
      null
    )), [n, i, t];
  }
  function Tv(t, e) {
    t.action = e;
  }
  function bd(t) {
    var e = Gt(), l = Dt;
    if (l !== null)
      return Sd(e, l, t);
    Gt(), e = e.memoizedState, l = Gt();
    var n = l.queue.dispatch;
    return l.memoizedState = t, [e, n, !1];
  }
  function la(t, e, l, n) {
    return t = { tag: t, create: l, deps: n, inst: e, next: null }, e = dt.updateQueue, e === null && (e = Si(), dt.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (n = l.next, l.next = t, t.next = n, e.lastEffect = t), t;
  }
  function _d() {
    return Gt().memoizedState;
  }
  function Ai(t, e, l, n) {
    var a = fe();
    dt.flags |= t, a.memoizedState = la(
      1 | e,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function Ei(t, e, l, n) {
    var a = Gt();
    n = n === void 0 ? null : n;
    var i = a.memoizedState.inst;
    Dt !== null && n !== null && jf(n, Dt.memoizedState.deps) ? a.memoizedState = la(e, i, l, n) : (dt.flags |= t, a.memoizedState = la(
      1 | e,
      i,
      l,
      n
    ));
  }
  function Ad(t, e) {
    Ai(8390656, 8, t, e);
  }
  function Vf(t, e) {
    Ei(2048, 8, t, e);
  }
  function Mv(t) {
    dt.flags |= 4;
    var e = dt.updateQueue;
    if (e === null)
      e = Si(), dt.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function Ed(t) {
    var e = Gt().memoizedState;
    return Mv({ ref: e, nextImpl: t }), function() {
      if ((Tt & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Td(t, e) {
    return Ei(4, 2, t, e);
  }
  function Md(t, e) {
    return Ei(4, 4, t, e);
  }
  function zd(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function() {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function Dd(t, e, l) {
    l = l != null ? l.concat([t]) : null, Ei(4, 4, zd.bind(null, e, t), l);
  }
  function Xf() {
  }
  function Cd(t, e) {
    var l = Gt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    return e !== null && jf(e, n[1]) ? n[0] : (l.memoizedState = [t, e], t);
  }
  function Od(t, e) {
    var l = Gt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    if (e !== null && jf(e, n[1]))
      return n[0];
    if (n = t(), gn) {
      Ml(!0);
      try {
        t();
      } finally {
        Ml(!1);
      }
    }
    return l.memoizedState = [n, e], n;
  }
  function Zf(t, e, l) {
    return l === void 0 || (fl & 1073741824) !== 0 && (gt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = N0(), dt.lanes |= t, Yl |= t, l);
  }
  function Nd(t, e, l, n) {
    return be(l, e) ? l : Pn.current !== null ? (t = Zf(t, l, n), be(t, e) || (Xt = !0), t) : (fl & 42) === 0 || (fl & 1073741824) !== 0 && (gt & 261930) === 0 ? (Xt = !0, t.memoizedState = l) : (t = N0(), dt.lanes |= t, Yl |= t, e);
  }
  function Rd(t, e, l, n, a) {
    var i = k.p;
    k.p = i !== 0 && 8 > i ? i : 8;
    var f = M.T, o = {};
    M.T = o, kf(t, !1, e, l);
    try {
      var m = a(), x = M.S;
      if (x !== null && x(o, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var Z = bv(
          m,
          n
        );
        Ja(
          t,
          e,
          Z,
          ze(t)
        );
      } else
        Ja(
          t,
          e,
          n,
          ze(t)
        );
    } catch ($) {
      Ja(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: $ },
        ze()
      );
    } finally {
      k.p = i, f !== null && o.types !== null && (f.types = o.types), M.T = f;
    }
  }
  function zv() {
  }
  function Kf(t, e, l, n) {
    if (t.tag !== 5) throw Error(r(476));
    var a = Ud(t).queue;
    Rd(
      t,
      a,
      e,
      W,
      l === null ? zv : function() {
        return jd(t), l(n);
      }
    );
  }
  function Ud(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: W,
      baseState: W,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: sl,
        lastRenderedState: W
      },
      next: null
    };
    var l = {};
    return e.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: sl,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function jd(t) {
    var e = Ud(t);
    e.next === null && (e = t.alternate.memoizedState), Ja(
      t,
      e.next.queue,
      {},
      ze()
    );
  }
  function Jf() {
    return ee(ru);
  }
  function xd() {
    return Gt().memoizedState;
  }
  function qd() {
    return Gt().memoizedState;
  }
  function Dv(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = ze();
          t = jl(l);
          var n = xl(e, t, l);
          n !== null && (ye(n, e, l), La(n, e, l)), e = { cache: Af() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Cv(t, e, l) {
    var n = ze();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ti(t) ? Bd(e, l) : (l = of(t, e, l, n), l !== null && (ye(l, t, n), Hd(l, e, n)));
  }
  function Qd(t, e, l) {
    var n = ze();
    Ja(t, e, l, n);
  }
  function Ja(t, e, l, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ti(t)) Bd(e, a);
    else {
      var i = t.alternate;
      if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer, i !== null))
        try {
          var f = e.lastRenderedState, o = i(f, l);
          if (a.hasEagerState = !0, a.eagerState = o, be(o, f))
            return ai(t, e, a, 0), Nt === null && ni(), !1;
        } catch {
        }
      if (l = of(t, e, a, n), l !== null)
        return ye(l, t, n), Hd(l, e, n), !0;
    }
    return !1;
  }
  function kf(t, e, l, n) {
    if (n = {
      lane: 2,
      revertLane: zs(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ti(t)) {
      if (e) throw Error(r(479));
    } else
      e = of(
        t,
        l,
        n,
        2
      ), e !== null && ye(e, t, 2);
  }
  function Ti(t) {
    var e = t.alternate;
    return t === dt || e !== null && e === dt;
  }
  function Bd(t, e) {
    ta = gi = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function Hd(t, e, l) {
    if ((l & 4194048) !== 0) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, Lr(t, l);
    }
  }
  var ka = {
    readContext: ee,
    use: bi,
    useCallback: qt,
    useContext: qt,
    useEffect: qt,
    useImperativeHandle: qt,
    useLayoutEffect: qt,
    useInsertionEffect: qt,
    useMemo: qt,
    useReducer: qt,
    useRef: qt,
    useState: qt,
    useDebugValue: qt,
    useDeferredValue: qt,
    useTransition: qt,
    useSyncExternalStore: qt,
    useId: qt,
    useHostTransitionStatus: qt,
    useFormState: qt,
    useActionState: qt,
    useOptimistic: qt,
    useMemoCache: qt,
    useCacheRefresh: qt
  };
  ka.useEffectEvent = qt;
  var Yd = {
    readContext: ee,
    use: bi,
    useCallback: function(t, e) {
      return fe().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: ee,
    useEffect: Ad,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, Ai(
        4194308,
        4,
        zd.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return Ai(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Ai(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = fe();
      e = e === void 0 ? null : e;
      var n = t();
      if (gn) {
        Ml(!0);
        try {
          t();
        } finally {
          Ml(!1);
        }
      }
      return l.memoizedState = [n, e], n;
    },
    useReducer: function(t, e, l) {
      var n = fe();
      if (l !== void 0) {
        var a = l(e);
        if (gn) {
          Ml(!0);
          try {
            l(e);
          } finally {
            Ml(!1);
          }
        }
      } else a = e;
      return n.memoizedState = n.baseState = a, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: a
      }, n.queue = t, t = t.dispatch = Cv.bind(
        null,
        dt,
        t
      ), [n.memoizedState, t];
    },
    useRef: function(t) {
      var e = fe();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Gf(t);
      var e = t.queue, l = Qd.bind(null, dt, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: Xf,
    useDeferredValue: function(t, e) {
      var l = fe();
      return Zf(l, t, e);
    },
    useTransition: function() {
      var t = Gf(!1);
      return t = Rd.bind(
        null,
        dt,
        t.queue,
        !0,
        !1
      ), fe().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var n = dt, a = fe();
      if (St) {
        if (l === void 0)
          throw Error(r(407));
        l = l();
      } else {
        if (l = e(), Nt === null)
          throw Error(r(349));
        (gt & 127) !== 0 || id(n, e, l);
      }
      a.memoizedState = l;
      var i = { value: l, getSnapshot: e };
      return a.queue = i, Ad(fd.bind(null, n, i, t), [
        t
      ]), n.flags |= 2048, la(
        9,
        { destroy: void 0 },
        cd.bind(
          null,
          n,
          i,
          l,
          e
        ),
        null
      ), l;
    },
    useId: function() {
      var t = fe(), e = Nt.identifierPrefix;
      if (St) {
        var l = We, n = Fe;
        l = (n & ~(1 << 32 - Se(n) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = pi++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = _v++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Jf,
    useFormState: gd,
    useActionState: gd,
    useOptimistic: function(t) {
      var e = fe();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = kf.bind(
        null,
        dt,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: Hf,
    useCacheRefresh: function() {
      return fe().memoizedState = Dv.bind(
        null,
        dt
      );
    },
    useEffectEvent: function(t) {
      var e = fe(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((Tt & 2) !== 0)
          throw Error(r(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, Ff = {
    readContext: ee,
    use: bi,
    useCallback: Cd,
    useContext: ee,
    useEffect: Vf,
    useImperativeHandle: Dd,
    useInsertionEffect: Td,
    useLayoutEffect: Md,
    useMemo: Od,
    useReducer: _i,
    useRef: _d,
    useState: function() {
      return _i(sl);
    },
    useDebugValue: Xf,
    useDeferredValue: function(t, e) {
      var l = Gt();
      return Nd(
        l,
        Dt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = _i(sl)[0], e = Gt().memoizedState;
      return [
        typeof t == "boolean" ? t : Ka(t),
        e
      ];
    },
    useSyncExternalStore: ud,
    useId: xd,
    useHostTransitionStatus: Jf,
    useFormState: pd,
    useActionState: pd,
    useOptimistic: function(t, e) {
      var l = Gt();
      return od(l, Dt, t, e);
    },
    useMemoCache: Hf,
    useCacheRefresh: qd
  };
  Ff.useEffectEvent = Ed;
  var wd = {
    readContext: ee,
    use: bi,
    useCallback: Cd,
    useContext: ee,
    useEffect: Vf,
    useImperativeHandle: Dd,
    useInsertionEffect: Td,
    useLayoutEffect: Md,
    useMemo: Od,
    useReducer: wf,
    useRef: _d,
    useState: function() {
      return wf(sl);
    },
    useDebugValue: Xf,
    useDeferredValue: function(t, e) {
      var l = Gt();
      return Dt === null ? Zf(l, t, e) : Nd(
        l,
        Dt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = wf(sl)[0], e = Gt().memoizedState;
      return [
        typeof t == "boolean" ? t : Ka(t),
        e
      ];
    },
    useSyncExternalStore: ud,
    useId: xd,
    useHostTransitionStatus: Jf,
    useFormState: bd,
    useActionState: bd,
    useOptimistic: function(t, e) {
      var l = Gt();
      return Dt !== null ? od(l, Dt, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: Hf,
    useCacheRefresh: qd
  };
  wd.useEffectEvent = Ed;
  function Wf(t, e, l, n) {
    e = t.memoizedState, l = l(n, e), l = l == null ? e : v({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var $f = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var n = ze(), a = jl(n);
      a.payload = e, l != null && (a.callback = l), e = xl(t, a, n), e !== null && (ye(e, t, n), La(e, t, n));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var n = ze(), a = jl(n);
      a.tag = 1, a.payload = e, l != null && (a.callback = l), e = xl(t, a, n), e !== null && (ye(e, t, n), La(e, t, n));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = ze(), n = jl(l);
      n.tag = 2, e != null && (n.callback = e), e = xl(t, n, l), e !== null && (ye(e, t, l), La(e, t, l));
    }
  };
  function Gd(t, e, l, n, a, i, f) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(n, i, f) : e.prototype && e.prototype.isPureReactComponent ? !xa(l, n) || !xa(a, i) : !0;
  }
  function Ld(t, e, l, n) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, n), e.state !== t && $f.enqueueReplaceState(e, e.state, null);
  }
  function pn(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var n in e)
        n !== "ref" && (l[n] = e[n]);
    }
    if (t = t.defaultProps) {
      l === e && (l = v({}, l));
      for (var a in t)
        l[a] === void 0 && (l[a] = t[a]);
    }
    return l;
  }
  function Vd(t) {
    li(t);
  }
  function Xd(t) {
    console.error(t);
  }
  function Zd(t) {
    li(t);
  }
  function Mi(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Kd(t, e, l) {
    try {
      var n = t.onCaughtError;
      n(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function If(t, e, l) {
    return l = jl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Mi(t, e);
    }, l;
  }
  function Jd(t) {
    return t = jl(t), t.tag = 3, t;
  }
  function kd(t, e, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var i = n.value;
      t.payload = function() {
        return a(i);
      }, t.callback = function() {
        Kd(e, l, n);
      };
    }
    var f = l.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
      Kd(e, l, n), typeof a != "function" && (wl === null ? wl = /* @__PURE__ */ new Set([this]) : wl.add(this));
      var o = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: o !== null ? o : ""
      });
    });
  }
  function Ov(t, e, l, n, a) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (e = l.alternate, e !== null && kn(
        e,
        l,
        a,
        !0
      ), l = Ae.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Ye === null ? Bi() : l.alternate === null && Qt === 0 && (Qt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === di ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : e.add(n), Es(t, n, a)), !1;
          case 22:
            return l.flags |= 65536, n === di ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Es(t, n, a)), !1;
        }
        throw Error(r(435, l.tag));
      }
      return Es(t, n, a), Bi(), !1;
    }
    if (St)
      return e = Ae.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = a, n !== gf && (t = Error(r(422), { cause: n }), Ba(qe(t, l)))) : (n !== gf && (e = Error(r(423), {
        cause: n
      }), Ba(
        qe(e, l)
      )), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, n = qe(n, l), a = If(
        t.stateNode,
        n,
        a
      ), Cf(t, a), Qt !== 4 && (Qt = 2)), !1;
    var i = Error(r(520), { cause: n });
    if (i = qe(i, l), lu === null ? lu = [i] : lu.push(i), Qt !== 4 && (Qt = 2), e === null) return !0;
    n = qe(n, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = a & -a, l.lanes |= t, t = If(l.stateNode, n, t), Cf(l, t), !1;
        case 1:
          if (e = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (wl === null || !wl.has(i))))
            return l.flags |= 65536, a &= -a, l.lanes |= a, a = Jd(a), kd(
              a,
              t,
              l,
              n
            ), Cf(l, a), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Pf = Error(r(461)), Xt = !1;
  function le(t, e, l, n) {
    e.child = t === null ? Io(e, null, l, n) : vn(
      e,
      t.child,
      l,
      n
    );
  }
  function Fd(t, e, l, n, a) {
    l = l.render;
    var i = e.ref;
    if ("ref" in n) {
      var f = {};
      for (var o in n)
        o !== "ref" && (f[o] = n[o]);
    } else f = n;
    return dn(e), n = xf(
      t,
      e,
      l,
      f,
      i,
      a
    ), o = qf(), t !== null && !Xt ? (Qf(t, e, a), rl(t, e, a)) : (St && o && yf(e), e.flags |= 1, le(t, e, n, a), e.child);
  }
  function Wd(t, e, l, n, a) {
    if (t === null) {
      var i = l.type;
      return typeof i == "function" && !df(i) && i.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = i, $d(
        t,
        e,
        i,
        n,
        a
      )) : (t = ii(
        l.type,
        null,
        n,
        e,
        e.mode,
        a
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (i = t.child, !cs(t, a)) {
      var f = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : xa, l(f, n) && t.ref === e.ref)
        return rl(t, e, a);
    }
    return e.flags |= 1, t = al(i, n), t.ref = e.ref, t.return = e, e.child = t;
  }
  function $d(t, e, l, n, a) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (xa(i, n) && t.ref === e.ref)
        if (Xt = !1, e.pendingProps = n = i, cs(t, a))
          (t.flags & 131072) !== 0 && (Xt = !0);
        else
          return e.lanes = t.lanes, rl(t, e, a);
    }
    return ts(
      t,
      e,
      l,
      n,
      a
    );
  }
  function Id(t, e, l, n) {
    var a = n.children, i = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | l : l, t !== null) {
          for (n = e.child = t.child, a = 0; n !== null; )
            a = a | n.lanes | n.childLanes, n = n.sibling;
          n = a & ~i;
        } else n = 0, e.child = null;
        return Pd(
          t,
          e,
          i,
          l,
          n
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && ri(
          e,
          i !== null ? i.cachePool : null
        ), i !== null ? ed(e, i) : Nf(), ld(e);
      else
        return n = e.lanes = 536870912, Pd(
          t,
          e,
          i !== null ? i.baseLanes | l : l,
          l,
          n
        );
    } else
      i !== null ? (ri(e, i.cachePool), ed(e, i), Ql(), e.memoizedState = null) : (t !== null && ri(e, null), Nf(), Ql());
    return le(t, e, a, l), e.child;
  }
  function Fa(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Pd(t, e, l, n, a) {
    var i = Tf();
    return i = i === null ? null : { parent: Lt._currentValue, pool: i }, e.memoizedState = {
      baseLanes: l,
      cachePool: i
    }, t !== null && ri(e, null), Nf(), ld(e), t !== null && kn(t, e, n, !0), e.childLanes = a, null;
  }
  function zi(t, e) {
    return e = Ci(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function t0(t, e, l) {
    return vn(e, t.child, null, l), t = zi(e, e.pendingProps), t.flags |= 2, Ee(e), e.memoizedState = null, t;
  }
  function Nv(t, e, l) {
    var n = e.pendingProps, a = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (St) {
        if (n.mode === "hidden")
          return t = zi(e, n), e.lanes = 536870912, Fa(null, t);
        if (Uf(e), (t = Ut) ? (t = dh(
          t,
          He
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Cl !== null ? { id: Fe, overflow: We } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Bo(t), l.return = e, e.child = l, te = e, Ut = null)) : t = null, t === null) throw Nl(e);
        return e.lanes = 536870912, null;
      }
      return zi(e, n);
    }
    var i = t.memoizedState;
    if (i !== null) {
      var f = i.dehydrated;
      if (Uf(e), a)
        if (e.flags & 256)
          e.flags &= -257, e = t0(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (Xt || kn(t, e, l, !1), a = (l & t.childLanes) !== 0, Xt || a) {
        if (n = Nt, n !== null && (f = Vr(n, l), f !== 0 && f !== i.retryLane))
          throw i.retryLane = f, fn(t, f), ye(n, t, f), Pf;
        Bi(), e = t0(
          t,
          e,
          l
        );
      } else
        t = i.treeContext, Ut = we(f.nextSibling), te = e, St = !0, Ol = null, He = !1, t !== null && wo(e, t), e = zi(e, n), e.flags |= 4096;
      return e;
    }
    return t = al(t.child, {
      mode: n.mode,
      children: n.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Di(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(r(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function ts(t, e, l, n, a) {
    return dn(e), l = xf(
      t,
      e,
      l,
      n,
      void 0,
      a
    ), n = qf(), t !== null && !Xt ? (Qf(t, e, a), rl(t, e, a)) : (St && n && yf(e), e.flags |= 1, le(t, e, l, a), e.child);
  }
  function e0(t, e, l, n, a, i) {
    return dn(e), e.updateQueue = null, l = ad(
      e,
      n,
      l,
      a
    ), nd(t), n = qf(), t !== null && !Xt ? (Qf(t, e, i), rl(t, e, i)) : (St && n && yf(e), e.flags |= 1, le(t, e, l, i), e.child);
  }
  function l0(t, e, l, n, a) {
    if (dn(e), e.stateNode === null) {
      var i = Xn, f = l.contextType;
      typeof f == "object" && f !== null && (i = ee(f)), i = new l(n, i), e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = $f, e.stateNode = i, i._reactInternals = e, i = e.stateNode, i.props = n, i.state = e.memoizedState, i.refs = {}, zf(e), f = l.contextType, i.context = typeof f == "object" && f !== null ? ee(f) : Xn, i.state = e.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (Wf(
        e,
        l,
        f,
        n
      ), i.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (f = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), f !== i.state && $f.enqueueReplaceState(i, i.state, null), Xa(e, n, i, a), Va(), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308), n = !0;
    } else if (t === null) {
      i = e.stateNode;
      var o = e.memoizedProps, m = pn(l, o);
      i.props = m;
      var x = i.context, Z = l.contextType;
      f = Xn, typeof Z == "object" && Z !== null && (f = ee(Z));
      var $ = l.getDerivedStateFromProps;
      Z = typeof $ == "function" || typeof i.getSnapshotBeforeUpdate == "function", o = e.pendingProps !== o, Z || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o || x !== f) && Ld(
        e,
        i,
        n,
        f
      ), Ul = !1;
      var Q = e.memoizedState;
      i.state = Q, Xa(e, n, i, a), Va(), x = e.memoizedState, o || Q !== x || Ul ? (typeof $ == "function" && (Wf(
        e,
        l,
        $,
        n
      ), x = e.memoizedState), (m = Ul || Gd(
        e,
        l,
        m,
        n,
        Q,
        x,
        f
      )) ? (Z || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = x), i.props = n, i.state = x, i.context = f, n = m) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), n = !1);
    } else {
      i = e.stateNode, Df(t, e), f = e.memoizedProps, Z = pn(l, f), i.props = Z, $ = e.pendingProps, Q = i.context, x = l.contextType, m = Xn, typeof x == "object" && x !== null && (m = ee(x)), o = l.getDerivedStateFromProps, (x = typeof o == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f !== $ || Q !== m) && Ld(
        e,
        i,
        n,
        m
      ), Ul = !1, Q = e.memoizedState, i.state = Q, Xa(e, n, i, a), Va();
      var V = e.memoizedState;
      f !== $ || Q !== V || Ul || t !== null && t.dependencies !== null && fi(t.dependencies) ? (typeof o == "function" && (Wf(
        e,
        l,
        o,
        n
      ), V = e.memoizedState), (Z = Ul || Gd(
        e,
        l,
        Z,
        n,
        Q,
        V,
        m
      ) || t !== null && t.dependencies !== null && fi(t.dependencies)) ? (x || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, V, m), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        n,
        V,
        m
      )), typeof i.componentDidUpdate == "function" && (e.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || f === t.memoizedProps && Q === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && Q === t.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = V), i.props = n, i.state = V, i.context = m, n = Z) : (typeof i.componentDidUpdate != "function" || f === t.memoizedProps && Q === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && Q === t.memoizedState || (e.flags |= 1024), n = !1);
    }
    return i = n, Di(t, e), n = (e.flags & 128) !== 0, i || n ? (i = e.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(), e.flags |= 1, t !== null && n ? (e.child = vn(
      e,
      t.child,
      null,
      a
    ), e.child = vn(
      e,
      null,
      l,
      a
    )) : le(t, e, l, a), e.memoizedState = i.state, t = e.child) : t = rl(
      t,
      e,
      a
    ), t;
  }
  function n0(t, e, l, n) {
    return rn(), e.flags |= 256, le(t, e, l, n), e.child;
  }
  var es = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ls(t) {
    return { baseLanes: t, cachePool: Ko() };
  }
  function ns(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= Me), t;
  }
  function a0(t, e, l) {
    var n = e.pendingProps, a = !1, i = (e.flags & 128) !== 0, f;
    if ((f = i) || (f = t !== null && t.memoizedState === null ? !1 : (wt.current & 2) !== 0), f && (a = !0, e.flags &= -129), f = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (St) {
        if (a ? ql(e) : Ql(), (t = Ut) ? (t = dh(
          t,
          He
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Cl !== null ? { id: Fe, overflow: We } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Bo(t), l.return = e, e.child = l, te = e, Ut = null)) : t = null, t === null) throw Nl(e);
        return Ys(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var o = n.children;
      return n = n.fallback, a ? (Ql(), a = e.mode, o = Ci(
        { mode: "hidden", children: o },
        a
      ), n = sn(
        n,
        a,
        l,
        null
      ), o.return = e, n.return = e, o.sibling = n, e.child = o, n = e.child, n.memoizedState = ls(l), n.childLanes = ns(
        t,
        f,
        l
      ), e.memoizedState = es, Fa(null, n)) : (ql(e), as(e, o));
    }
    var m = t.memoizedState;
    if (m !== null && (o = m.dehydrated, o !== null)) {
      if (i)
        e.flags & 256 ? (ql(e), e.flags &= -257, e = us(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (Ql(), e.child = t.child, e.flags |= 128, e = null) : (Ql(), o = n.fallback, a = e.mode, n = Ci(
          { mode: "visible", children: n.children },
          a
        ), o = sn(
          o,
          a,
          l,
          null
        ), o.flags |= 2, n.return = e, o.return = e, n.sibling = o, e.child = n, vn(
          e,
          t.child,
          null,
          l
        ), n = e.child, n.memoizedState = ls(l), n.childLanes = ns(
          t,
          f,
          l
        ), e.memoizedState = es, e = Fa(null, n));
      else if (ql(e), Ys(o)) {
        if (f = o.nextSibling && o.nextSibling.dataset, f) var x = f.dgst;
        f = x, n = Error(r(419)), n.stack = "", n.digest = f, Ba({ value: n, source: null, stack: null }), e = us(
          t,
          e,
          l
        );
      } else if (Xt || kn(t, e, l, !1), f = (l & t.childLanes) !== 0, Xt || f) {
        if (f = Nt, f !== null && (n = Vr(f, l), n !== 0 && n !== m.retryLane))
          throw m.retryLane = n, fn(t, n), ye(f, t, n), Pf;
        Hs(o) || Bi(), e = us(
          t,
          e,
          l
        );
      } else
        Hs(o) ? (e.flags |= 192, e.child = t.child, e = null) : (t = m.treeContext, Ut = we(
          o.nextSibling
        ), te = e, St = !0, Ol = null, He = !1, t !== null && wo(e, t), e = as(
          e,
          n.children
        ), e.flags |= 4096);
      return e;
    }
    return a ? (Ql(), o = n.fallback, a = e.mode, m = t.child, x = m.sibling, n = al(m, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = m.subtreeFlags & 65011712, x !== null ? o = al(
      x,
      o
    ) : (o = sn(
      o,
      a,
      l,
      null
    ), o.flags |= 2), o.return = e, n.return = e, n.sibling = o, e.child = n, Fa(null, n), n = e.child, o = t.child.memoizedState, o === null ? o = ls(l) : (a = o.cachePool, a !== null ? (m = Lt._currentValue, a = a.parent !== m ? { parent: m, pool: m } : a) : a = Ko(), o = {
      baseLanes: o.baseLanes | l,
      cachePool: a
    }), n.memoizedState = o, n.childLanes = ns(
      t,
      f,
      l
    ), e.memoizedState = es, Fa(t.child, n)) : (ql(e), l = t.child, t = l.sibling, l = al(l, {
      mode: "visible",
      children: n.children
    }), l.return = e, l.sibling = null, t !== null && (f = e.deletions, f === null ? (e.deletions = [t], e.flags |= 16) : f.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function as(t, e) {
    return e = Ci(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Ci(t, e) {
    return t = _e(22, t, null, e), t.lanes = 0, t;
  }
  function us(t, e, l) {
    return vn(e, t.child, null, l), t = as(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function u0(t, e, l) {
    t.lanes |= e;
    var n = t.alternate;
    n !== null && (n.lanes |= e), bf(t.return, e, l);
  }
  function is(t, e, l, n, a, i) {
    var f = t.memoizedState;
    f === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: n,
      tail: l,
      tailMode: a,
      treeForkCount: i
    } : (f.isBackwards = e, f.rendering = null, f.renderingStartTime = 0, f.last = n, f.tail = l, f.tailMode = a, f.treeForkCount = i);
  }
  function i0(t, e, l) {
    var n = e.pendingProps, a = n.revealOrder, i = n.tail;
    n = n.children;
    var f = wt.current, o = (f & 2) !== 0;
    if (o ? (f = f & 1 | 2, e.flags |= 128) : f &= 1, ut(wt, f), le(t, e, n, l), n = St ? Qa : 0, !o && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && u0(t, l, e);
        else if (t.tag === 19)
          u0(t, l, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (a) {
      case "forwards":
        for (l = e.child, a = null; l !== null; )
          t = l.alternate, t !== null && vi(t) === null && (a = l), l = l.sibling;
        l = a, l === null ? (a = e.child, e.child = null) : (a = l.sibling, l.sibling = null), is(
          e,
          !1,
          a,
          l,
          i,
          n
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, a = e.child, e.child = null; a !== null; ) {
          if (t = a.alternate, t !== null && vi(t) === null) {
            e.child = a;
            break;
          }
          t = a.sibling, a.sibling = l, l = a, a = t;
        }
        is(
          e,
          !0,
          l,
          null,
          i,
          n
        );
        break;
      case "together":
        is(
          e,
          !1,
          null,
          null,
          void 0,
          n
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function rl(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), Yl |= e.lanes, (l & e.childLanes) === 0)
      if (t !== null) {
        if (kn(
          t,
          e,
          l,
          !1
        ), (l & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(r(153));
    if (e.child !== null) {
      for (t = e.child, l = al(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = al(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function cs(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && fi(t)));
  }
  function Rv(t, e, l) {
    switch (e.tag) {
      case 3:
        Rt(e, e.stateNode.containerInfo), Rl(e, Lt, t.memoizedState.cache), rn();
        break;
      case 27:
      case 5:
        vt(e);
        break;
      case 4:
        Rt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Rl(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Uf(e), null;
        break;
      case 13:
        var n = e.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (ql(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? a0(t, e, l) : (ql(e), t = rl(
            t,
            e,
            l
          ), t !== null ? t.sibling : null);
        ql(e);
        break;
      case 19:
        var a = (t.flags & 128) !== 0;
        if (n = (l & e.childLanes) !== 0, n || (kn(
          t,
          e,
          l,
          !1
        ), n = (l & e.childLanes) !== 0), a) {
          if (n)
            return i0(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (a = e.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), ut(wt, wt.current), n) break;
        return null;
      case 22:
        return e.lanes = 0, Id(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        Rl(e, Lt, t.memoizedState.cache);
    }
    return rl(t, e, l);
  }
  function c0(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Xt = !0;
      else {
        if (!cs(t, l) && (e.flags & 128) === 0)
          return Xt = !1, Rv(
            t,
            e,
            l
          );
        Xt = (t.flags & 131072) !== 0;
      }
    else
      Xt = !1, St && (e.flags & 1048576) !== 0 && Yo(e, Qa, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var n = e.pendingProps;
          if (t = mn(e.elementType), e.type = t, typeof t == "function")
            df(t) ? (n = pn(t, n), e.tag = 1, e = l0(
              null,
              e,
              t,
              n,
              l
            )) : (e.tag = 0, e = ts(
              null,
              e,
              t,
              n,
              l
            ));
          else {
            if (t != null) {
              var a = t.$$typeof;
              if (a === T) {
                e.tag = 11, e = Fd(
                  null,
                  e,
                  t,
                  n,
                  l
                );
                break t;
              } else if (a === q) {
                e.tag = 14, e = Wd(
                  null,
                  e,
                  t,
                  n,
                  l
                );
                break t;
              }
            }
            throw e = J(t) || t, Error(r(306, e, ""));
          }
        }
        return e;
      case 0:
        return ts(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 1:
        return n = e.type, a = pn(
          n,
          e.pendingProps
        ), l0(
          t,
          e,
          n,
          a,
          l
        );
      case 3:
        t: {
          if (Rt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          n = e.pendingProps;
          var i = e.memoizedState;
          a = i.element, Df(t, e), Xa(e, n, null, l);
          var f = e.memoizedState;
          if (n = f.cache, Rl(e, Lt, n), n !== i.cache && _f(
            e,
            [Lt],
            l,
            !0
          ), Va(), n = f.element, i.isDehydrated)
            if (i = {
              element: n,
              isDehydrated: !1,
              cache: f.cache
            }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
              e = n0(
                t,
                e,
                n,
                l
              );
              break t;
            } else if (n !== a) {
              a = qe(
                Error(r(424)),
                e
              ), Ba(a), e = n0(
                t,
                e,
                n,
                l
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Ut = we(t.firstChild), te = e, St = !0, Ol = null, He = !0, l = Io(
                e,
                null,
                n,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (rn(), n === a) {
              e = rl(
                t,
                e,
                l
              );
              break t;
            }
            le(t, e, n, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Di(t, e), t === null ? (l = ph(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : St || (l = e.type, t = e.pendingProps, n = Xi(
          bt.current
        ).createElement(l), n[Pt] = e, n[se] = t, ne(n, l, t), Jt(n), e.stateNode = n) : e.memoizedState = ph(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return vt(e), t === null && St && (n = e.stateNode = yh(
          e.type,
          e.pendingProps,
          bt.current
        ), te = e, He = !0, a = Ut, Xl(e.type) ? (ws = a, Ut = we(n.firstChild)) : Ut = a), le(
          t,
          e,
          e.pendingProps.children,
          l
        ), Di(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && St && ((a = n = Ut) && (n = c2(
          n,
          e.type,
          e.pendingProps,
          He
        ), n !== null ? (e.stateNode = n, te = e, Ut = we(n.firstChild), He = !1, a = !0) : a = !1), a || Nl(e)), vt(e), a = e.type, i = e.pendingProps, f = t !== null ? t.memoizedProps : null, n = i.children, qs(a, i) ? n = null : f !== null && qs(a, f) && (e.flags |= 32), e.memoizedState !== null && (a = xf(
          t,
          e,
          Av,
          null,
          null,
          l
        ), ru._currentValue = a), Di(t, e), le(t, e, n, l), e.child;
      case 6:
        return t === null && St && ((t = l = Ut) && (l = f2(
          l,
          e.pendingProps,
          He
        ), l !== null ? (e.stateNode = l, te = e, Ut = null, t = !0) : t = !1), t || Nl(e)), null;
      case 13:
        return a0(t, e, l);
      case 4:
        return Rt(
          e,
          e.stateNode.containerInfo
        ), n = e.pendingProps, t === null ? e.child = vn(
          e,
          null,
          n,
          l
        ) : le(t, e, n, l), e.child;
      case 11:
        return Fd(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 7:
        return le(
          t,
          e,
          e.pendingProps,
          l
        ), e.child;
      case 8:
        return le(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 12:
        return le(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 10:
        return n = e.pendingProps, Rl(e, e.type, n.value), le(t, e, n.children, l), e.child;
      case 9:
        return a = e.type._context, n = e.pendingProps.children, dn(e), a = ee(a), n = n(a), e.flags |= 1, le(t, e, n, l), e.child;
      case 14:
        return Wd(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return $d(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return i0(t, e, l);
      case 31:
        return Nv(t, e, l);
      case 22:
        return Id(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return dn(e), n = ee(Lt), t === null ? (a = Tf(), a === null && (a = Nt, i = Af(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), e.memoizedState = { parent: n, cache: a }, zf(e), Rl(e, Lt, a)) : ((t.lanes & l) !== 0 && (Df(t, e), Xa(e, null, null, l), Va()), a = t.memoizedState, i = e.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, e.memoizedState = a, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = a), Rl(e, Lt, n)) : (n = i.cache, Rl(e, Lt, n), n !== a.cache && _f(
          e,
          [Lt],
          l,
          !0
        ))), le(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function ol(t) {
    t.flags |= 4;
  }
  function fs(t, e, l, n, a) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (a & 335544128) === a)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (x0()) t.flags |= 8192;
        else
          throw yn = di, Mf;
    } else t.flags &= -16777217;
  }
  function f0(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Eh(e))
      if (x0()) t.flags |= 8192;
      else
        throw yn = di, Mf;
  }
  function Oi(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? wr() : 536870912, t.lanes |= e, ia |= e);
  }
  function Wa(t, e) {
    if (!St)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), e = e.sibling;
          l === null ? t.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = t.tail;
          for (var n = null; l !== null; )
            l.alternate !== null && (n = l), l = l.sibling;
          n === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : n.sibling = null;
      }
  }
  function jt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, l = 0, n = 0;
    if (e)
      for (var a = t.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags & 65011712, n |= a.flags & 65011712, a.return = t, a = a.sibling;
    else
      for (a = t.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = t, a = a.sibling;
    return t.subtreeFlags |= n, t.childLanes = l, e;
  }
  function Uv(t, e, l) {
    var n = e.pendingProps;
    switch (vf(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return jt(e), null;
      case 1:
        return jt(e), null;
      case 3:
        return l = e.stateNode, n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), cl(Lt), ot(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (Jn(e) ? ol(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, pf())), jt(e), null;
      case 26:
        var a = e.type, i = e.memoizedState;
        return t === null ? (ol(e), i !== null ? (jt(e), f0(e, i)) : (jt(e), fs(
          e,
          a,
          null,
          n,
          l
        ))) : i ? i !== t.memoizedState ? (ol(e), jt(e), f0(e, i)) : (jt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== n && ol(e), jt(e), fs(
          e,
          a,
          t,
          n,
          l
        )), null;
      case 27:
        if (ce(e), l = bt.current, a = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && ol(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(r(166));
            return jt(e), null;
          }
          t = it.current, Jn(e) ? Go(e) : (t = yh(a, n, l), e.stateNode = t, ol(e));
        }
        return jt(e), null;
      case 5:
        if (ce(e), a = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && ol(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(r(166));
            return jt(e), null;
          }
          if (i = it.current, Jn(e))
            Go(e);
          else {
            var f = Xi(
              bt.current
            );
            switch (i) {
              case 1:
                i = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                i = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    i = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    i = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    i = f.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof n.is == "string" ? f.createElement("select", {
                      is: n.is
                    }) : f.createElement("select"), n.multiple ? i.multiple = !0 : n.size && (i.size = n.size);
                    break;
                  default:
                    i = typeof n.is == "string" ? f.createElement(a, { is: n.is }) : f.createElement(a);
                }
            }
            i[Pt] = e, i[se] = n;
            t: for (f = e.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                i.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === e) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e)
                  break t;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            e.stateNode = i;
            t: switch (ne(i, a, n), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break t;
              case "img":
                n = !0;
                break t;
              default:
                n = !1;
            }
            n && ol(e);
          }
        }
        return jt(e), fs(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          l
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== n && ol(e);
        else {
          if (typeof n != "string" && e.stateNode === null)
            throw Error(r(166));
          if (t = bt.current, Jn(e)) {
            if (t = e.stateNode, l = e.memoizedProps, n = null, a = te, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            t[Pt] = e, t = !!(t.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || ah(t.nodeValue, l)), t || Nl(e, !0);
          } else
            t = Xi(t).createTextNode(
              n
            ), t[Pt] = e, e.stateNode = t;
        }
        return jt(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (n = Jn(e), l !== null) {
            if (t === null) {
              if (!n) throw Error(r(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[Pt] = e;
            } else
              rn(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            jt(e), t = !1;
          } else
            l = pf(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (Ee(e), e) : (Ee(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return jt(e), null;
      case 13:
        if (n = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (a = Jn(e), n !== null && n.dehydrated !== null) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (a = e.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
              a[Pt] = e;
            } else
              rn(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            jt(e), a = !1;
          } else
            a = pf(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return e.flags & 256 ? (Ee(e), e) : (Ee(e), null);
        }
        return Ee(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = n !== null, t = t !== null && t.memoizedState !== null, l && (n = e.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== a && (n.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Oi(e, e.updateQueue), jt(e), null);
      case 4:
        return ot(), t === null && Ns(e.stateNode.containerInfo), jt(e), null;
      case 10:
        return cl(e.type), jt(e), null;
      case 19:
        if (st(wt), n = e.memoizedState, n === null) return jt(e), null;
        if (a = (e.flags & 128) !== 0, i = n.rendering, i === null)
          if (a) Wa(n, !1);
          else {
            if (Qt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (i = vi(t), i !== null) {
                  for (e.flags |= 128, Wa(n, !1), t = i.updateQueue, e.updateQueue = t, Oi(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    Qo(l, t), l = l.sibling;
                  return ut(
                    wt,
                    wt.current & 1 | 2
                  ), St && ul(e, n.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            n.tail !== null && ge() > xi && (e.flags |= 128, a = !0, Wa(n, !1), e.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = vi(i), t !== null) {
              if (e.flags |= 128, a = !0, t = t.updateQueue, e.updateQueue = t, Oi(e, t), Wa(n, !0), n.tail === null && n.tailMode === "hidden" && !i.alternate && !St)
                return jt(e), null;
            } else
              2 * ge() - n.renderingStartTime > xi && l !== 536870912 && (e.flags |= 128, a = !0, Wa(n, !1), e.lanes = 4194304);
          n.isBackwards ? (i.sibling = e.child, e.child = i) : (t = n.last, t !== null ? t.sibling = i : e.child = i, n.last = i);
        }
        return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = ge(), t.sibling = null, l = wt.current, ut(
          wt,
          a ? l & 1 | 2 : l & 1
        ), St && ul(e, n.treeForkCount), t) : (jt(e), null);
      case 22:
      case 23:
        return Ee(e), Rf(), n = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== n && (e.flags |= 8192) : n && (e.flags |= 8192), n ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (jt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : jt(e), l = e.updateQueue, l !== null && Oi(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== l && (e.flags |= 2048), t !== null && st(hn), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), cl(Lt), jt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function jv(t, e) {
    switch (vf(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return cl(Lt), ot(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return ce(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Ee(e), e.alternate === null)
            throw Error(r(340));
          rn();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Ee(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          rn();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return st(wt), null;
      case 4:
        return ot(), null;
      case 10:
        return cl(e.type), null;
      case 22:
      case 23:
        return Ee(e), Rf(), t !== null && st(hn), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return cl(Lt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function s0(t, e) {
    switch (vf(e), e.tag) {
      case 3:
        cl(Lt), ot();
        break;
      case 26:
      case 27:
      case 5:
        ce(e);
        break;
      case 4:
        ot();
        break;
      case 31:
        e.memoizedState !== null && Ee(e);
        break;
      case 13:
        Ee(e);
        break;
      case 19:
        st(wt);
        break;
      case 10:
        cl(e.type);
        break;
      case 22:
      case 23:
        Ee(e), Rf(), t !== null && st(hn);
        break;
      case 24:
        cl(Lt);
    }
  }
  function $a(t, e) {
    try {
      var l = e.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var a = n.next;
        l = a;
        do {
          if ((l.tag & t) === t) {
            n = void 0;
            var i = l.create, f = l.inst;
            n = i(), f.destroy = n;
          }
          l = l.next;
        } while (l !== a);
      }
    } catch (o) {
      zt(e, e.return, o);
    }
  }
  function Bl(t, e, l) {
    try {
      var n = e.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        n = i;
        do {
          if ((n.tag & t) === t) {
            var f = n.inst, o = f.destroy;
            if (o !== void 0) {
              f.destroy = void 0, a = e;
              var m = l, x = o;
              try {
                x();
              } catch (Z) {
                zt(
                  a,
                  m,
                  Z
                );
              }
            }
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (Z) {
      zt(e, e.return, Z);
    }
  }
  function r0(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        td(e, l);
      } catch (n) {
        zt(t, t.return, n);
      }
    }
  }
  function o0(t, e, l) {
    l.props = pn(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      zt(t, e, n);
    }
  }
  function Ia(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var n = t.stateNode;
            break;
          case 30:
            n = t.stateNode;
            break;
          default:
            n = t.stateNode;
        }
        typeof l == "function" ? t.refCleanup = l(n) : l.current = n;
      }
    } catch (a) {
      zt(t, e, a);
    }
  }
  function $e(t, e) {
    var l = t.ref, n = t.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          zt(t, e, a);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (a) {
          zt(t, e, a);
        }
      else l.current = null;
  }
  function d0(t) {
    var e = t.type, l = t.memoizedProps, n = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && n.focus();
          break t;
        case "img":
          l.src ? n.src = l.src : l.srcSet && (n.srcset = l.srcSet);
      }
    } catch (a) {
      zt(t, t.return, a);
    }
  }
  function ss(t, e, l) {
    try {
      var n = t.stateNode;
      e2(n, t.type, l, e), n[se] = e;
    } catch (a) {
      zt(t, t.return, a);
    }
  }
  function h0(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Xl(t.type) || t.tag === 4;
  }
  function rs(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || h0(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Xl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function os(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = ll));
    else if (n !== 4 && (n === 27 && Xl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (os(t, e, l), t = t.sibling; t !== null; )
        os(t, e, l), t = t.sibling;
  }
  function Ni(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (n !== 4 && (n === 27 && Xl(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (Ni(t, e, l), t = t.sibling; t !== null; )
        Ni(t, e, l), t = t.sibling;
  }
  function m0(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var n = t.type, a = e.attributes; a.length; )
        e.removeAttributeNode(a[0]);
      ne(e, n, l), e[Pt] = t, e[se] = l;
    } catch (i) {
      zt(t, t.return, i);
    }
  }
  var dl = !1, Zt = !1, ds = !1, y0 = typeof WeakSet == "function" ? WeakSet : Set, kt = null;
  function xv(t, e) {
    if (t = t.containerInfo, js = $i, t = Do(t), af(t)) {
      if ("selectionStart" in t)
        var l = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          l = (l = t.ownerDocument) && l.defaultView || window;
          var n = l.getSelection && l.getSelection();
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode;
            var a = n.anchorOffset, i = n.focusNode;
            n = n.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break t;
            }
            var f = 0, o = -1, m = -1, x = 0, Z = 0, $ = t, Q = null;
            e: for (; ; ) {
              for (var V; $ !== l || a !== 0 && $.nodeType !== 3 || (o = f + a), $ !== i || n !== 0 && $.nodeType !== 3 || (m = f + n), $.nodeType === 3 && (f += $.nodeValue.length), (V = $.firstChild) !== null; )
                Q = $, $ = V;
              for (; ; ) {
                if ($ === t) break e;
                if (Q === l && ++x === a && (o = f), Q === i && ++Z === n && (m = f), (V = $.nextSibling) !== null) break;
                $ = Q, Q = $.parentNode;
              }
              $ = V;
            }
            l = o === -1 || m === -1 ? null : { start: o, end: m };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (xs = { focusedElem: t, selectionRange: l }, $i = !1, kt = e; kt !== null; )
      if (e = kt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, kt = t;
      else
        for (; kt !== null; ) {
          switch (e = kt, i = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (l = 0; l < t.length; l++)
                  a = t[l], a.ref.impl = a.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && i !== null) {
                t = void 0, l = e, a = i.memoizedProps, i = i.memoizedState, n = l.stateNode;
                try {
                  var lt = pn(
                    l.type,
                    a
                  );
                  t = n.getSnapshotBeforeUpdate(
                    lt,
                    i
                  ), n.__reactInternalSnapshotBeforeUpdate = t;
                } catch (ft) {
                  zt(
                    l,
                    l.return,
                    ft
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9)
                  Bs(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Bs(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, kt = t;
            break;
          }
          kt = e.return;
        }
  }
  function v0(t, e, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ml(t, l), n & 4 && $a(5, l);
        break;
      case 1:
        if (ml(t, l), n & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (f) {
              zt(l, l.return, f);
            }
          else {
            var a = pn(
              l.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                a,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              zt(
                l,
                l.return,
                f
              );
            }
          }
        n & 64 && r0(l), n & 512 && Ia(l, l.return);
        break;
      case 3:
        if (ml(t, l), n & 64 && (t = l.updateQueue, t !== null)) {
          if (e = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            td(t, e);
          } catch (f) {
            zt(l, l.return, f);
          }
        }
        break;
      case 27:
        e === null && n & 4 && m0(l);
      case 26:
      case 5:
        ml(t, l), e === null && n & 4 && d0(l), n & 512 && Ia(l, l.return);
        break;
      case 12:
        ml(t, l);
        break;
      case 31:
        ml(t, l), n & 4 && S0(t, l);
        break;
      case 13:
        ml(t, l), n & 4 && b0(t, l), n & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = Vv.bind(
          null,
          l
        ), s2(t, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || dl, !n) {
          e = e !== null && e.memoizedState !== null || Zt, a = dl;
          var i = Zt;
          dl = n, (Zt = e) && !i ? yl(
            t,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : ml(t, l), dl = a, Zt = i;
        }
        break;
      case 30:
        break;
      default:
        ml(t, l);
    }
  }
  function g0(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, g0(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Gc(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var xt = null, oe = !1;
  function hl(t, e, l) {
    for (l = l.child; l !== null; )
      p0(t, e, l), l = l.sibling;
  }
  function p0(t, e, l) {
    if (pe && typeof pe.onCommitFiberUnmount == "function")
      try {
        pe.onCommitFiberUnmount(Aa, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Zt || $e(l, e), hl(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Zt || $e(l, e);
        var n = xt, a = oe;
        Xl(l.type) && (xt = l.stateNode, oe = !1), hl(
          t,
          e,
          l
        ), cu(l.stateNode), xt = n, oe = a;
        break;
      case 5:
        Zt || $e(l, e);
      case 6:
        if (n = xt, a = oe, xt = null, hl(
          t,
          e,
          l
        ), xt = n, oe = a, xt !== null)
          if (oe)
            try {
              (xt.nodeType === 9 ? xt.body : xt.nodeName === "HTML" ? xt.ownerDocument.body : xt).removeChild(l.stateNode);
            } catch (i) {
              zt(
                l,
                e,
                i
              );
            }
          else
            try {
              xt.removeChild(l.stateNode);
            } catch (i) {
              zt(
                l,
                e,
                i
              );
            }
        break;
      case 18:
        xt !== null && (oe ? (t = xt, rh(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), ma(t)) : rh(xt, l.stateNode));
        break;
      case 4:
        n = xt, a = oe, xt = l.stateNode.containerInfo, oe = !0, hl(
          t,
          e,
          l
        ), xt = n, oe = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Bl(2, l, e), Zt || Bl(4, l, e), hl(
          t,
          e,
          l
        );
        break;
      case 1:
        Zt || ($e(l, e), n = l.stateNode, typeof n.componentWillUnmount == "function" && o0(
          l,
          e,
          n
        )), hl(
          t,
          e,
          l
        );
        break;
      case 21:
        hl(
          t,
          e,
          l
        );
        break;
      case 22:
        Zt = (n = Zt) || l.memoizedState !== null, hl(
          t,
          e,
          l
        ), Zt = n;
        break;
      default:
        hl(
          t,
          e,
          l
        );
    }
  }
  function S0(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        ma(t);
      } catch (l) {
        zt(e, e.return, l);
      }
    }
  }
  function b0(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        ma(t);
      } catch (l) {
        zt(e, e.return, l);
      }
  }
  function qv(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new y0()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new y0()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Ri(t, e) {
    var l = qv(t);
    e.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var a = Xv.bind(null, t, n);
        n.then(a, a);
      }
    });
  }
  function de(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n], i = t, f = e, o = f;
        t: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (Xl(o.type)) {
                xt = o.stateNode, oe = !1;
                break t;
              }
              break;
            case 5:
              xt = o.stateNode, oe = !1;
              break t;
            case 3:
            case 4:
              xt = o.stateNode.containerInfo, oe = !0;
              break t;
          }
          o = o.return;
        }
        if (xt === null) throw Error(r(160));
        p0(i, f, a), xt = null, oe = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        _0(e, t), e = e.sibling;
  }
  var Xe = null;
  function _0(t, e) {
    var l = t.alternate, n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        de(e, t), he(t), n & 4 && (Bl(3, t, t.return), $a(3, t), Bl(5, t, t.return));
        break;
      case 1:
        de(e, t), he(t), n & 512 && (Zt || l === null || $e(l, l.return)), n & 64 && dl && (t = t.updateQueue, t !== null && (n = t.callbacks, n !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var a = Xe;
        if (de(e, t), he(t), n & 512 && (Zt || l === null || $e(l, l.return)), n & 4) {
          var i = l !== null ? l.memoizedState : null;
          if (n = t.memoizedState, l === null)
            if (n === null)
              if (t.stateNode === null) {
                t: {
                  n = t.type, l = t.memoizedProps, a = a.ownerDocument || a;
                  e: switch (n) {
                    case "title":
                      i = a.getElementsByTagName("title")[0], (!i || i[Ma] || i[Pt] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(n), a.head.insertBefore(
                        i,
                        a.querySelector("head > title")
                      )), ne(i, n, l), i[Pt] = t, Jt(i), n = i;
                      break t;
                    case "link":
                      var f = _h(
                        "link",
                        "href",
                        a
                      ).get(n + (l.href || ""));
                      if (f) {
                        for (var o = 0; o < f.length; o++)
                          if (i = f[o], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            f.splice(o, 1);
                            break e;
                          }
                      }
                      i = a.createElement(n), ne(i, n, l), a.head.appendChild(i);
                      break;
                    case "meta":
                      if (f = _h(
                        "meta",
                        "content",
                        a
                      ).get(n + (l.content || ""))) {
                        for (o = 0; o < f.length; o++)
                          if (i = f[o], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            f.splice(o, 1);
                            break e;
                          }
                      }
                      i = a.createElement(n), ne(i, n, l), a.head.appendChild(i);
                      break;
                    default:
                      throw Error(r(468, n));
                  }
                  i[Pt] = t, Jt(i), n = i;
                }
                t.stateNode = n;
              } else
                Ah(
                  a,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = bh(
                a,
                n,
                t.memoizedProps
              );
          else
            i !== n ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, n === null ? Ah(
              a,
              t.type,
              t.stateNode
            ) : bh(
              a,
              n,
              t.memoizedProps
            )) : n === null && t.stateNode !== null && ss(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        de(e, t), he(t), n & 512 && (Zt || l === null || $e(l, l.return)), l !== null && n & 4 && ss(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (de(e, t), he(t), n & 512 && (Zt || l === null || $e(l, l.return)), t.flags & 32) {
          a = t.stateNode;
          try {
            Bn(a, "");
          } catch (lt) {
            zt(t, t.return, lt);
          }
        }
        n & 4 && t.stateNode != null && (a = t.memoizedProps, ss(
          t,
          a,
          l !== null ? l.memoizedProps : a
        )), n & 1024 && (ds = !0);
        break;
      case 6:
        if (de(e, t), he(t), n & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          n = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = n;
          } catch (lt) {
            zt(t, t.return, lt);
          }
        }
        break;
      case 3:
        if (Ji = null, a = Xe, Xe = Zi(e.containerInfo), de(e, t), Xe = a, he(t), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            ma(e.containerInfo);
          } catch (lt) {
            zt(t, t.return, lt);
          }
        ds && (ds = !1, A0(t));
        break;
      case 4:
        n = Xe, Xe = Zi(
          t.stateNode.containerInfo
        ), de(e, t), he(t), Xe = n;
        break;
      case 12:
        de(e, t), he(t);
        break;
      case 31:
        de(e, t), he(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, Ri(t, n)));
        break;
      case 13:
        de(e, t), he(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (ji = ge()), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, Ri(t, n)));
        break;
      case 22:
        a = t.memoizedState !== null;
        var m = l !== null && l.memoizedState !== null, x = dl, Z = Zt;
        if (dl = x || a, Zt = Z || m, de(e, t), Zt = Z, dl = x, he(t), n & 8192)
          t: for (e = t.stateNode, e._visibility = a ? e._visibility & -2 : e._visibility | 1, a && (l === null || m || dl || Zt || Sn(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                m = l = e;
                try {
                  if (i = m.stateNode, a)
                    f = i.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    o = m.stateNode;
                    var $ = m.memoizedProps.style, Q = $ != null && $.hasOwnProperty("display") ? $.display : null;
                    o.style.display = Q == null || typeof Q == "boolean" ? "" : ("" + Q).trim();
                  }
                } catch (lt) {
                  zt(m, m.return, lt);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                m = e;
                try {
                  m.stateNode.nodeValue = a ? "" : m.memoizedProps;
                } catch (lt) {
                  zt(m, m.return, lt);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                m = e;
                try {
                  var V = m.stateNode;
                  a ? oh(V, !0) : oh(m.stateNode, !1);
                } catch (lt) {
                  zt(m, m.return, lt);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), e = e.return;
            }
            l === e && (l = null), e.sibling.return = e.return, e = e.sibling;
          }
        n & 4 && (n = t.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, Ri(t, l))));
        break;
      case 19:
        de(e, t), he(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, Ri(t, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        de(e, t), he(t);
    }
  }
  function he(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, n = t.return; n !== null; ) {
          if (h0(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode, i = rs(t);
            Ni(t, i, a);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (Bn(f, ""), l.flags &= -33);
            var o = rs(t);
            Ni(t, o, f);
            break;
          case 3:
          case 4:
            var m = l.stateNode.containerInfo, x = rs(t);
            os(
              t,
              x,
              m
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (Z) {
        zt(t, t.return, Z);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function A0(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        A0(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function ml(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        v0(t, e.alternate, e), e = e.sibling;
  }
  function Sn(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Bl(4, e, e.return), Sn(e);
          break;
        case 1:
          $e(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && o0(
            e,
            e.return,
            l
          ), Sn(e);
          break;
        case 27:
          cu(e.stateNode);
        case 26:
        case 5:
          $e(e, e.return), Sn(e);
          break;
        case 22:
          e.memoizedState === null && Sn(e);
          break;
        case 30:
          Sn(e);
          break;
        default:
          Sn(e);
      }
      t = t.sibling;
    }
  }
  function yl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var n = e.alternate, a = t, i = e, f = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          yl(
            a,
            i,
            l
          ), $a(4, i);
          break;
        case 1:
          if (yl(
            a,
            i,
            l
          ), n = i, a = n.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (x) {
              zt(n, n.return, x);
            }
          if (n = i, a = n.updateQueue, a !== null) {
            var o = n.stateNode;
            try {
              var m = a.shared.hiddenCallbacks;
              if (m !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < m.length; a++)
                  Po(m[a], o);
            } catch (x) {
              zt(n, n.return, x);
            }
          }
          l && f & 64 && r0(i), Ia(i, i.return);
          break;
        case 27:
          m0(i);
        case 26:
        case 5:
          yl(
            a,
            i,
            l
          ), l && n === null && f & 4 && d0(i), Ia(i, i.return);
          break;
        case 12:
          yl(
            a,
            i,
            l
          );
          break;
        case 31:
          yl(
            a,
            i,
            l
          ), l && f & 4 && S0(a, i);
          break;
        case 13:
          yl(
            a,
            i,
            l
          ), l && f & 4 && b0(a, i);
          break;
        case 22:
          i.memoizedState === null && yl(
            a,
            i,
            l
          ), Ia(i, i.return);
          break;
        case 30:
          break;
        default:
          yl(
            a,
            i,
            l
          );
      }
      e = e.sibling;
    }
  }
  function hs(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && Ha(l));
  }
  function ms(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ha(t));
  }
  function Ze(t, e, l, n) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        E0(
          t,
          e,
          l,
          n
        ), e = e.sibling;
  }
  function E0(t, e, l, n) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ze(
          t,
          e,
          l,
          n
        ), a & 2048 && $a(9, e);
        break;
      case 1:
        Ze(
          t,
          e,
          l,
          n
        );
        break;
      case 3:
        Ze(
          t,
          e,
          l,
          n
        ), a & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ha(t)));
        break;
      case 12:
        if (a & 2048) {
          Ze(
            t,
            e,
            l,
            n
          ), t = e.stateNode;
          try {
            var i = e.memoizedProps, f = i.id, o = i.onPostCommit;
            typeof o == "function" && o(
              f,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (m) {
            zt(e, e.return, m);
          }
        } else
          Ze(
            t,
            e,
            l,
            n
          );
        break;
      case 31:
        Ze(
          t,
          e,
          l,
          n
        );
        break;
      case 13:
        Ze(
          t,
          e,
          l,
          n
        );
        break;
      case 23:
        break;
      case 22:
        i = e.stateNode, f = e.alternate, e.memoizedState !== null ? i._visibility & 2 ? Ze(
          t,
          e,
          l,
          n
        ) : Pa(t, e) : i._visibility & 2 ? Ze(
          t,
          e,
          l,
          n
        ) : (i._visibility |= 2, na(
          t,
          e,
          l,
          n,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && hs(f, e);
        break;
      case 24:
        Ze(
          t,
          e,
          l,
          n
        ), a & 2048 && ms(e.alternate, e);
        break;
      default:
        Ze(
          t,
          e,
          l,
          n
        );
    }
  }
  function na(t, e, l, n, a) {
    for (a = a && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var i = t, f = e, o = l, m = n, x = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          na(
            i,
            f,
            o,
            m,
            a
          ), $a(8, f);
          break;
        case 23:
          break;
        case 22:
          var Z = f.stateNode;
          f.memoizedState !== null ? Z._visibility & 2 ? na(
            i,
            f,
            o,
            m,
            a
          ) : Pa(
            i,
            f
          ) : (Z._visibility |= 2, na(
            i,
            f,
            o,
            m,
            a
          )), a && x & 2048 && hs(
            f.alternate,
            f
          );
          break;
        case 24:
          na(
            i,
            f,
            o,
            m,
            a
          ), a && x & 2048 && ms(f.alternate, f);
          break;
        default:
          na(
            i,
            f,
            o,
            m,
            a
          );
      }
      e = e.sibling;
    }
  }
  function Pa(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, n = e, a = n.flags;
        switch (n.tag) {
          case 22:
            Pa(l, n), a & 2048 && hs(
              n.alternate,
              n
            );
            break;
          case 24:
            Pa(l, n), a & 2048 && ms(n.alternate, n);
            break;
          default:
            Pa(l, n);
        }
        e = e.sibling;
      }
  }
  var tu = 8192;
  function aa(t, e, l) {
    if (t.subtreeFlags & tu)
      for (t = t.child; t !== null; )
        T0(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function T0(t, e, l) {
    switch (t.tag) {
      case 26:
        aa(
          t,
          e,
          l
        ), t.flags & tu && t.memoizedState !== null && _2(
          l,
          Xe,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        aa(
          t,
          e,
          l
        );
        break;
      case 3:
      case 4:
        var n = Xe;
        Xe = Zi(t.stateNode.containerInfo), aa(
          t,
          e,
          l
        ), Xe = n;
        break;
      case 22:
        t.memoizedState === null && (n = t.alternate, n !== null && n.memoizedState !== null ? (n = tu, tu = 16777216, aa(
          t,
          e,
          l
        ), tu = n) : aa(
          t,
          e,
          l
        ));
        break;
      default:
        aa(
          t,
          e,
          l
        );
    }
  }
  function M0(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function eu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          kt = n, D0(
            n,
            t
          );
        }
      M0(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        z0(t), t = t.sibling;
  }
  function z0(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        eu(t), t.flags & 2048 && Bl(9, t, t.return);
        break;
      case 3:
        eu(t);
        break;
      case 12:
        eu(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Ui(t)) : eu(t);
        break;
      default:
        eu(t);
    }
  }
  function Ui(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          kt = n, D0(
            n,
            t
          );
        }
      M0(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Bl(8, e, e.return), Ui(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, Ui(e));
          break;
        default:
          Ui(e);
      }
      t = t.sibling;
    }
  }
  function D0(t, e) {
    for (; kt !== null; ) {
      var l = kt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Bl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          Ha(l.memoizedState.cache);
      }
      if (n = l.child, n !== null) n.return = l, kt = n;
      else
        t: for (l = t; kt !== null; ) {
          n = kt;
          var a = n.sibling, i = n.return;
          if (g0(n), n === l) {
            kt = null;
            break t;
          }
          if (a !== null) {
            a.return = i, kt = a;
            break t;
          }
          kt = i;
        }
    }
  }
  var Qv = {
    getCacheForType: function(t) {
      var e = ee(Lt), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return ee(Lt).controller.signal;
    }
  }, Bv = typeof WeakMap == "function" ? WeakMap : Map, Tt = 0, Nt = null, mt = null, gt = 0, Mt = 0, Te = null, Hl = !1, ua = !1, ys = !1, vl = 0, Qt = 0, Yl = 0, bn = 0, vs = 0, Me = 0, ia = 0, lu = null, me = null, gs = !1, ji = 0, C0 = 0, xi = 1 / 0, qi = null, wl = null, Kt = 0, Gl = null, ca = null, gl = 0, ps = 0, Ss = null, O0 = null, nu = 0, bs = null;
  function ze() {
    return (Tt & 2) !== 0 && gt !== 0 ? gt & -gt : M.T !== null ? zs() : Xr();
  }
  function N0() {
    if (Me === 0)
      if ((gt & 536870912) === 0 || St) {
        var t = Vu;
        Vu <<= 1, (Vu & 3932160) === 0 && (Vu = 262144), Me = t;
      } else Me = 536870912;
    return t = Ae.current, t !== null && (t.flags |= 32), Me;
  }
  function ye(t, e, l) {
    (t === Nt && (Mt === 2 || Mt === 9) || t.cancelPendingCommit !== null) && (fa(t, 0), Ll(
      t,
      gt,
      Me,
      !1
    )), Ta(t, l), ((Tt & 2) === 0 || t !== Nt) && (t === Nt && ((Tt & 2) === 0 && (bn |= l), Qt === 4 && Ll(
      t,
      gt,
      Me,
      !1
    )), Ie(t));
  }
  function R0(t, e, l) {
    if ((Tt & 6) !== 0) throw Error(r(327));
    var n = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Ea(t, e), a = n ? wv(t, e) : As(t, e, !0), i = n;
    do {
      if (a === 0) {
        ua && !n && Ll(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, i && !Hv(l)) {
          a = As(t, e, !1), i = !1;
          continue;
        }
        if (a === 2) {
          if (i = e, t.errorRecoveryDisabledLanes & i)
            var f = 0;
          else
            f = t.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            e = f;
            t: {
              var o = t;
              a = lu;
              var m = o.current.memoizedState.isDehydrated;
              if (m && (fa(o, f).flags |= 256), f = As(
                o,
                f,
                !1
              ), f !== 2) {
                if (ys && !m) {
                  o.errorRecoveryDisabledLanes |= i, bn |= i, a = 4;
                  break t;
                }
                i = me, me = a, i !== null && (me === null ? me = i : me.push.apply(
                  me,
                  i
                ));
              }
              a = f;
            }
            if (i = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          fa(t, 0), Ll(t, e, 0, !0);
          break;
        }
        t: {
          switch (n = t, i = a, i) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Ll(
                n,
                e,
                Me,
                !Hl
              );
              break t;
            case 2:
              me = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && (a = ji + 300 - ge(), 10 < a)) {
            if (Ll(
              n,
              e,
              Me,
              !Hl
            ), Zu(n, 0, !0) !== 0) break t;
            gl = e, n.timeoutHandle = fh(
              U0.bind(
                null,
                n,
                l,
                me,
                qi,
                gs,
                e,
                Me,
                bn,
                ia,
                Hl,
                i,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break t;
          }
          U0(
            n,
            l,
            me,
            qi,
            gs,
            e,
            Me,
            bn,
            ia,
            Hl,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Ie(t);
  }
  function U0(t, e, l, n, a, i, f, o, m, x, Z, $, Q, V) {
    if (t.timeoutHandle = -1, $ = e.subtreeFlags, $ & 8192 || ($ & 16785408) === 16785408) {
      $ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ll
      }, T0(
        e,
        i,
        $
      );
      var lt = (i & 62914560) === i ? ji - ge() : (i & 4194048) === i ? C0 - ge() : 0;
      if (lt = A2(
        $,
        lt
      ), lt !== null) {
        gl = i, t.cancelPendingCommit = lt(
          w0.bind(
            null,
            t,
            e,
            i,
            l,
            n,
            a,
            f,
            o,
            m,
            Z,
            $,
            null,
            Q,
            V
          )
        ), Ll(t, i, f, !x);
        return;
      }
    }
    w0(
      t,
      e,
      i,
      l,
      n,
      a,
      f,
      o,
      m
    );
  }
  function Hv(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var n = 0; n < l.length; n++) {
          var a = l[n], i = a.getSnapshot;
          a = a.value;
          try {
            if (!be(i(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = e.child, e.subtreeFlags & 16384 && l !== null)
        l.return = e, e = l;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function Ll(t, e, l, n) {
    e &= ~vs, e &= ~bn, t.suspendedLanes |= e, t.pingedLanes &= ~e, n && (t.warmLanes |= e), n = t.expirationTimes;
    for (var a = e; 0 < a; ) {
      var i = 31 - Se(a), f = 1 << i;
      n[i] = -1, a &= ~f;
    }
    l !== 0 && Gr(t, l, e);
  }
  function Qi() {
    return (Tt & 6) === 0 ? (au(0), !1) : !0;
  }
  function _s() {
    if (mt !== null) {
      if (Mt === 0)
        var t = mt.return;
      else
        t = mt, il = on = null, Bf(t), In = null, wa = 0, t = mt;
      for (; t !== null; )
        s0(t.alternate, t), t = t.return;
      mt = null;
    }
  }
  function fa(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, a2(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), gl = 0, _s(), Nt = t, mt = l = al(t.current, null), gt = e, Mt = 0, Te = null, Hl = !1, ua = Ea(t, e), ys = !1, ia = Me = vs = bn = Yl = Qt = 0, me = lu = null, gs = !1, (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var a = 31 - Se(n), i = 1 << a;
        e |= t[a], n &= ~i;
      }
    return vl = e, ni(), l;
  }
  function j0(t, e) {
    dt = null, M.H = ka, e === $n || e === oi ? (e = Fo(), Mt = 3) : e === Mf ? (e = Fo(), Mt = 4) : Mt = e === Pf ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Te = e, mt === null && (Qt = 1, Mi(
      t,
      qe(e, t.current)
    ));
  }
  function x0() {
    var t = Ae.current;
    return t === null ? !0 : (gt & 4194048) === gt ? Ye === null : (gt & 62914560) === gt || (gt & 536870912) !== 0 ? t === Ye : !1;
  }
  function q0() {
    var t = M.H;
    return M.H = ka, t === null ? ka : t;
  }
  function Q0() {
    var t = M.A;
    return M.A = Qv, t;
  }
  function Bi() {
    Qt = 4, Hl || (gt & 4194048) !== gt && Ae.current !== null || (ua = !0), (Yl & 134217727) === 0 && (bn & 134217727) === 0 || Nt === null || Ll(
      Nt,
      gt,
      Me,
      !1
    );
  }
  function As(t, e, l) {
    var n = Tt;
    Tt |= 2;
    var a = q0(), i = Q0();
    (Nt !== t || gt !== e) && (qi = null, fa(t, e)), e = !1;
    var f = Qt;
    t: do
      try {
        if (Mt !== 0 && mt !== null) {
          var o = mt, m = Te;
          switch (Mt) {
            case 8:
              _s(), f = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ae.current === null && (e = !0);
              var x = Mt;
              if (Mt = 0, Te = null, sa(t, o, m, x), l && ua) {
                f = 0;
                break t;
              }
              break;
            default:
              x = Mt, Mt = 0, Te = null, sa(t, o, m, x);
          }
        }
        Yv(), f = Qt;
        break;
      } catch (Z) {
        j0(t, Z);
      }
    while (!0);
    return e && t.shellSuspendCounter++, il = on = null, Tt = n, M.H = a, M.A = i, mt === null && (Nt = null, gt = 0, ni()), f;
  }
  function Yv() {
    for (; mt !== null; ) B0(mt);
  }
  function wv(t, e) {
    var l = Tt;
    Tt |= 2;
    var n = q0(), a = Q0();
    Nt !== t || gt !== e ? (qi = null, xi = ge() + 500, fa(t, e)) : ua = Ea(
      t,
      e
    );
    t: do
      try {
        if (Mt !== 0 && mt !== null) {
          e = mt;
          var i = Te;
          e: switch (Mt) {
            case 1:
              Mt = 0, Te = null, sa(t, e, i, 1);
              break;
            case 2:
            case 9:
              if (Jo(i)) {
                Mt = 0, Te = null, H0(e);
                break;
              }
              e = function() {
                Mt !== 2 && Mt !== 9 || Nt !== t || (Mt = 7), Ie(t);
              }, i.then(e, e);
              break t;
            case 3:
              Mt = 7;
              break t;
            case 4:
              Mt = 5;
              break t;
            case 7:
              Jo(i) ? (Mt = 0, Te = null, H0(e)) : (Mt = 0, Te = null, sa(t, e, i, 7));
              break;
            case 5:
              var f = null;
              switch (mt.tag) {
                case 26:
                  f = mt.memoizedState;
                case 5:
                case 27:
                  var o = mt;
                  if (f ? Eh(f) : o.stateNode.complete) {
                    Mt = 0, Te = null;
                    var m = o.sibling;
                    if (m !== null) mt = m;
                    else {
                      var x = o.return;
                      x !== null ? (mt = x, Hi(x)) : mt = null;
                    }
                    break e;
                  }
              }
              Mt = 0, Te = null, sa(t, e, i, 5);
              break;
            case 6:
              Mt = 0, Te = null, sa(t, e, i, 6);
              break;
            case 8:
              _s(), Qt = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        Gv();
        break;
      } catch (Z) {
        j0(t, Z);
      }
    while (!0);
    return il = on = null, M.H = n, M.A = a, Tt = l, mt !== null ? 0 : (Nt = null, gt = 0, ni(), Qt);
  }
  function Gv() {
    for (; mt !== null && !Qc(); )
      B0(mt);
  }
  function B0(t) {
    var e = c0(t.alternate, t, vl);
    t.memoizedProps = t.pendingProps, e === null ? Hi(t) : mt = e;
  }
  function H0(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = e0(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          gt
        );
        break;
      case 11:
        e = e0(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          gt
        );
        break;
      case 5:
        Bf(e);
      default:
        s0(l, e), e = mt = Qo(e, vl), e = c0(l, e, vl);
    }
    t.memoizedProps = t.pendingProps, e === null ? Hi(t) : mt = e;
  }
  function sa(t, e, l, n) {
    il = on = null, Bf(e), In = null, wa = 0;
    var a = e.return;
    try {
      if (Ov(
        t,
        a,
        e,
        l,
        gt
      )) {
        Qt = 1, Mi(
          t,
          qe(l, t.current)
        ), mt = null;
        return;
      }
    } catch (i) {
      if (a !== null) throw mt = a, i;
      Qt = 1, Mi(
        t,
        qe(l, t.current)
      ), mt = null;
      return;
    }
    e.flags & 32768 ? (St || n === 1 ? t = !0 : ua || (gt & 536870912) !== 0 ? t = !1 : (Hl = t = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = Ae.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Y0(e, t)) : Hi(e);
  }
  function Hi(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Y0(
          e,
          Hl
        );
        return;
      }
      t = e.return;
      var l = Uv(
        e.alternate,
        e,
        vl
      );
      if (l !== null) {
        mt = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        mt = e;
        return;
      }
      mt = e = t;
    } while (e !== null);
    Qt === 0 && (Qt = 5);
  }
  function Y0(t, e) {
    do {
      var l = jv(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, mt = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        mt = t;
        return;
      }
      mt = t = l;
    } while (t !== null);
    Qt = 6, mt = null;
  }
  function w0(t, e, l, n, a, i, f, o, m) {
    t.cancelPendingCommit = null;
    do
      Yi();
    while (Kt !== 0);
    if ((Tt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (i = e.lanes | e.childLanes, i |= rf, by(
        t,
        l,
        i,
        f,
        o,
        m
      ), t === Nt && (mt = Nt = null, gt = 0), ca = e, Gl = t, gl = l, ps = i, Ss = a, O0 = n, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Zv(Gu, function() {
        return Z0(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), n = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || n) {
        n = M.T, M.T = null, a = k.p, k.p = 2, f = Tt, Tt |= 4;
        try {
          xv(t, e, l);
        } finally {
          Tt = f, k.p = a, M.T = n;
        }
      }
      Kt = 1, G0(), L0(), V0();
    }
  }
  function G0() {
    if (Kt === 1) {
      Kt = 0;
      var t = Gl, e = ca, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = M.T, M.T = null;
        var n = k.p;
        k.p = 2;
        var a = Tt;
        Tt |= 4;
        try {
          _0(e, t);
          var i = xs, f = Do(t.containerInfo), o = i.focusedElem, m = i.selectionRange;
          if (f !== o && o && o.ownerDocument && zo(
            o.ownerDocument.documentElement,
            o
          )) {
            if (m !== null && af(o)) {
              var x = m.start, Z = m.end;
              if (Z === void 0 && (Z = x), "selectionStart" in o)
                o.selectionStart = x, o.selectionEnd = Math.min(
                  Z,
                  o.value.length
                );
              else {
                var $ = o.ownerDocument || document, Q = $ && $.defaultView || window;
                if (Q.getSelection) {
                  var V = Q.getSelection(), lt = o.textContent.length, ft = Math.min(m.start, lt), Ot = m.end === void 0 ? ft : Math.min(m.end, lt);
                  !V.extend && ft > Ot && (f = Ot, Ot = ft, ft = f);
                  var z = Mo(
                    o,
                    ft
                  ), g = Mo(
                    o,
                    Ot
                  );
                  if (z && g && (V.rangeCount !== 1 || V.anchorNode !== z.node || V.anchorOffset !== z.offset || V.focusNode !== g.node || V.focusOffset !== g.offset)) {
                    var U = $.createRange();
                    U.setStart(z.node, z.offset), V.removeAllRanges(), ft > Ot ? (V.addRange(U), V.extend(g.node, g.offset)) : (U.setEnd(g.node, g.offset), V.addRange(U));
                  }
                }
              }
            }
            for ($ = [], V = o; V = V.parentNode; )
              V.nodeType === 1 && $.push({
                element: V,
                left: V.scrollLeft,
                top: V.scrollTop
              });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < $.length; o++) {
              var F = $[o];
              F.element.scrollLeft = F.left, F.element.scrollTop = F.top;
            }
          }
          $i = !!js, xs = js = null;
        } finally {
          Tt = a, k.p = n, M.T = l;
        }
      }
      t.current = e, Kt = 2;
    }
  }
  function L0() {
    if (Kt === 2) {
      Kt = 0;
      var t = Gl, e = ca, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = M.T, M.T = null;
        var n = k.p;
        k.p = 2;
        var a = Tt;
        Tt |= 4;
        try {
          v0(t, e.alternate, e);
        } finally {
          Tt = a, k.p = n, M.T = l;
        }
      }
      Kt = 3;
    }
  }
  function V0() {
    if (Kt === 4 || Kt === 3) {
      Kt = 0, oy();
      var t = Gl, e = ca, l = gl, n = O0;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Kt = 5 : (Kt = 0, ca = Gl = null, X0(t, t.pendingLanes));
      var a = t.pendingLanes;
      if (a === 0 && (wl = null), Yc(l), e = e.stateNode, pe && typeof pe.onCommitFiberRoot == "function")
        try {
          pe.onCommitFiberRoot(
            Aa,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        e = M.T, a = k.p, k.p = 2, M.T = null;
        try {
          for (var i = t.onRecoverableError, f = 0; f < n.length; f++) {
            var o = n[f];
            i(o.value, {
              componentStack: o.stack
            });
          }
        } finally {
          M.T = e, k.p = a;
        }
      }
      (gl & 3) !== 0 && Yi(), Ie(t), a = t.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? t === bs ? nu++ : (nu = 0, bs = t) : nu = 0, au(0);
    }
  }
  function X0(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Ha(e)));
  }
  function Yi() {
    return G0(), L0(), V0(), Z0();
  }
  function Z0() {
    if (Kt !== 5) return !1;
    var t = Gl, e = ps;
    ps = 0;
    var l = Yc(gl), n = M.T, a = k.p;
    try {
      k.p = 32 > l ? 32 : l, M.T = null, l = Ss, Ss = null;
      var i = Gl, f = gl;
      if (Kt = 0, ca = Gl = null, gl = 0, (Tt & 6) !== 0) throw Error(r(331));
      var o = Tt;
      if (Tt |= 4, z0(i.current), E0(
        i,
        i.current,
        f,
        l
      ), Tt = o, au(0, !1), pe && typeof pe.onPostCommitFiberRoot == "function")
        try {
          pe.onPostCommitFiberRoot(Aa, i);
        } catch {
        }
      return !0;
    } finally {
      k.p = a, M.T = n, X0(t, e);
    }
  }
  function K0(t, e, l) {
    e = qe(l, e), e = If(t.stateNode, e, 2), t = xl(t, e, 2), t !== null && (Ta(t, 2), Ie(t));
  }
  function zt(t, e, l) {
    if (t.tag === 3)
      K0(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          K0(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var n = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (wl === null || !wl.has(n))) {
            t = qe(l, t), l = Jd(2), n = xl(e, l, 2), n !== null && (kd(
              l,
              n,
              e,
              t
            ), Ta(n, 2), Ie(n));
            break;
          }
        }
        e = e.return;
      }
  }
  function Es(t, e, l) {
    var n = t.pingCache;
    if (n === null) {
      n = t.pingCache = new Bv();
      var a = /* @__PURE__ */ new Set();
      n.set(e, a);
    } else
      a = n.get(e), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(e, a));
    a.has(l) || (ys = !0, a.add(l), t = Lv.bind(null, t, e, l), e.then(t, t));
  }
  function Lv(t, e, l) {
    var n = t.pingCache;
    n !== null && n.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Nt === t && (gt & l) === l && (Qt === 4 || Qt === 3 && (gt & 62914560) === gt && 300 > ge() - ji ? (Tt & 2) === 0 && fa(t, 0) : vs |= l, ia === gt && (ia = 0)), Ie(t);
  }
  function J0(t, e) {
    e === 0 && (e = wr()), t = fn(t, e), t !== null && (Ta(t, e), Ie(t));
  }
  function Vv(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), J0(t, l);
  }
  function Xv(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var n = t.stateNode, a = t.memoizedState;
        a !== null && (l = a.retryLane);
        break;
      case 19:
        n = t.stateNode;
        break;
      case 22:
        n = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    n !== null && n.delete(e), J0(t, l);
  }
  function Zv(t, e) {
    return _a(t, e);
  }
  var wi = null, ra = null, Ts = !1, Gi = !1, Ms = !1, Vl = 0;
  function Ie(t) {
    t !== ra && t.next === null && (ra === null ? wi = ra = t : ra = ra.next = t), Gi = !0, Ts || (Ts = !0, Jv());
  }
  function au(t, e) {
    if (!Ms && Gi) {
      Ms = !0;
      do
        for (var l = !1, n = wi; n !== null; ) {
          if (t !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var i = 0;
            else {
              var f = n.suspendedLanes, o = n.pingedLanes;
              i = (1 << 31 - Se(42 | t) + 1) - 1, i &= a & ~(f & ~o), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, $0(n, i));
          } else
            i = gt, i = Zu(
              n,
              n === Nt ? i : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (i & 3) === 0 || Ea(n, i) || (l = !0, $0(n, i));
          n = n.next;
        }
      while (l);
      Ms = !1;
    }
  }
  function Kv() {
    k0();
  }
  function k0() {
    Gi = Ts = !1;
    var t = 0;
    Vl !== 0 && n2() && (t = Vl);
    for (var e = ge(), l = null, n = wi; n !== null; ) {
      var a = n.next, i = F0(n, e);
      i === 0 ? (n.next = null, l === null ? wi = a : l.next = a, a === null && (ra = l)) : (l = n, (t !== 0 || (i & 3) !== 0) && (Gi = !0)), n = a;
    }
    Kt !== 0 && Kt !== 5 || au(t), Vl !== 0 && (Vl = 0);
  }
  function F0(t, e) {
    for (var l = t.suspendedLanes, n = t.pingedLanes, a = t.expirationTimes, i = t.pendingLanes & -62914561; 0 < i; ) {
      var f = 31 - Se(i), o = 1 << f, m = a[f];
      m === -1 ? ((o & l) === 0 || (o & n) !== 0) && (a[f] = Sy(o, e)) : m <= e && (t.expiredLanes |= o), i &= ~o;
    }
    if (e = Nt, l = gt, l = Zu(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n = t.callbackNode, l === 0 || t === e && (Mt === 2 || Mt === 9) || t.cancelPendingCommit !== null)
      return n !== null && n !== null && Nn(n), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || Ea(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (n !== null && Nn(n), Yc(l)) {
        case 2:
        case 8:
          l = Hr;
          break;
        case 32:
          l = Gu;
          break;
        case 268435456:
          l = Yr;
          break;
        default:
          l = Gu;
      }
      return n = W0.bind(null, t), l = _a(l, n), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return n !== null && n !== null && Nn(n), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function W0(t, e) {
    if (Kt !== 0 && Kt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (Yi() && t.callbackNode !== l)
      return null;
    var n = gt;
    return n = Zu(
      t,
      t === Nt ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n === 0 ? null : (R0(t, n, e), F0(t, ge()), t.callbackNode != null && t.callbackNode === l ? W0.bind(null, t) : null);
  }
  function $0(t, e) {
    if (Yi()) return null;
    R0(t, e, !0);
  }
  function Jv() {
    u2(function() {
      (Tt & 6) !== 0 ? _a(
        Br,
        Kv
      ) : k0();
    });
  }
  function zs() {
    if (Vl === 0) {
      var t = Fn;
      t === 0 && (t = Lu, Lu <<= 1, (Lu & 261888) === 0 && (Lu = 256)), Vl = t;
    }
    return Vl;
  }
  function I0(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Fu("" + t);
  }
  function P0(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function kv(t, e, l, n, a) {
    if (e === "submit" && l && l.stateNode === a) {
      var i = I0(
        (a[se] || null).action
      ), f = n.submitter;
      f && (e = (e = f[se] || null) ? I0(e.formAction) : f.getAttribute("formAction"), e !== null && (i = e, f = null));
      var o = new Pu(
        "action",
        "action",
        null,
        n,
        a
      );
      t.push({
        event: o,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (n.defaultPrevented) {
                if (Vl !== 0) {
                  var m = f ? P0(a, f) : new FormData(a);
                  Kf(
                    l,
                    {
                      pending: !0,
                      data: m,
                      method: a.method,
                      action: i
                    },
                    null,
                    m
                  );
                }
              } else
                typeof i == "function" && (o.preventDefault(), m = f ? P0(a, f) : new FormData(a), Kf(
                  l,
                  {
                    pending: !0,
                    data: m,
                    method: a.method,
                    action: i
                  },
                  i,
                  m
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var Ds = 0; Ds < sf.length; Ds++) {
    var Cs = sf[Ds], Fv = Cs.toLowerCase(), Wv = Cs[0].toUpperCase() + Cs.slice(1);
    Ve(
      Fv,
      "on" + Wv
    );
  }
  Ve(No, "onAnimationEnd"), Ve(Ro, "onAnimationIteration"), Ve(Uo, "onAnimationStart"), Ve("dblclick", "onDoubleClick"), Ve("focusin", "onFocus"), Ve("focusout", "onBlur"), Ve(dv, "onTransitionRun"), Ve(hv, "onTransitionStart"), Ve(mv, "onTransitionCancel"), Ve(jo, "onTransitionEnd"), qn("onMouseEnter", ["mouseout", "mouseover"]), qn("onMouseLeave", ["mouseout", "mouseover"]), qn("onPointerEnter", ["pointerout", "pointerover"]), qn("onPointerLeave", ["pointerout", "pointerover"]), nn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), nn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), nn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), nn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), nn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), nn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var uu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), $v = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(uu)
  );
  function th(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var n = t[l], a = n.event;
      n = n.listeners;
      t: {
        var i = void 0;
        if (e)
          for (var f = n.length - 1; 0 <= f; f--) {
            var o = n[f], m = o.instance, x = o.currentTarget;
            if (o = o.listener, m !== i && a.isPropagationStopped())
              break t;
            i = o, a.currentTarget = x;
            try {
              i(a);
            } catch (Z) {
              li(Z);
            }
            a.currentTarget = null, i = m;
          }
        else
          for (f = 0; f < n.length; f++) {
            if (o = n[f], m = o.instance, x = o.currentTarget, o = o.listener, m !== i && a.isPropagationStopped())
              break t;
            i = o, a.currentTarget = x;
            try {
              i(a);
            } catch (Z) {
              li(Z);
            }
            a.currentTarget = null, i = m;
          }
      }
    }
  }
  function yt(t, e) {
    var l = e[wc];
    l === void 0 && (l = e[wc] = /* @__PURE__ */ new Set());
    var n = t + "__bubble";
    l.has(n) || (eh(e, t, 2, !1), l.add(n));
  }
  function Os(t, e, l) {
    var n = 0;
    e && (n |= 4), eh(
      l,
      t,
      n,
      e
    );
  }
  var Li = "_reactListening" + Math.random().toString(36).slice(2);
  function Ns(t) {
    if (!t[Li]) {
      t[Li] = !0, Jr.forEach(function(l) {
        l !== "selectionchange" && ($v.has(l) || Os(l, !1, t), Os(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Li] || (e[Li] = !0, Os("selectionchange", !1, e));
    }
  }
  function eh(t, e, l, n) {
    switch (Nh(e)) {
      case 2:
        var a = M2;
        break;
      case 8:
        a = z2;
        break;
      default:
        a = Zs;
    }
    l = a.bind(
      null,
      e,
      l,
      t
    ), a = void 0, !Fc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (a = !0), n ? a !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: a
    }) : t.addEventListener(e, l, !0) : a !== void 0 ? t.addEventListener(e, l, {
      passive: a
    }) : t.addEventListener(e, l, !1);
  }
  function Rs(t, e, l, n, a) {
    var i = n;
    if ((e & 1) === 0 && (e & 2) === 0 && n !== null)
      t: for (; ; ) {
        if (n === null) return;
        var f = n.tag;
        if (f === 3 || f === 4) {
          var o = n.stateNode.containerInfo;
          if (o === a) break;
          if (f === 4)
            for (f = n.return; f !== null; ) {
              var m = f.tag;
              if ((m === 3 || m === 4) && f.stateNode.containerInfo === a)
                return;
              f = f.return;
            }
          for (; o !== null; ) {
            if (f = Un(o), f === null) return;
            if (m = f.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              n = i = f;
              continue t;
            }
            o = o.parentNode;
          }
        }
        n = n.return;
      }
    uo(function() {
      var x = i, Z = Jc(l), $ = [];
      t: {
        var Q = xo.get(t);
        if (Q !== void 0) {
          var V = Pu, lt = t;
          switch (t) {
            case "keypress":
              if ($u(l) === 0) break t;
            case "keydown":
            case "keyup":
              V = Xy;
              break;
            case "focusin":
              lt = "focus", V = Pc;
              break;
            case "focusout":
              lt = "blur", V = Pc;
              break;
            case "beforeblur":
            case "afterblur":
              V = Pc;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              V = fo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              V = Uy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              V = Jy;
              break;
            case No:
            case Ro:
            case Uo:
              V = qy;
              break;
            case jo:
              V = Fy;
              break;
            case "scroll":
            case "scrollend":
              V = Ny;
              break;
            case "wheel":
              V = $y;
              break;
            case "copy":
            case "cut":
            case "paste":
              V = By;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              V = ro;
              break;
            case "toggle":
            case "beforetoggle":
              V = Py;
          }
          var ft = (e & 4) !== 0, Ot = !ft && (t === "scroll" || t === "scrollend"), z = ft ? Q !== null ? Q + "Capture" : null : Q;
          ft = [];
          for (var g = x, U; g !== null; ) {
            var F = g;
            if (U = F.stateNode, F = F.tag, F !== 5 && F !== 26 && F !== 27 || U === null || z === null || (F = Da(g, z), F != null && ft.push(
              iu(g, F, U)
            )), Ot) break;
            g = g.return;
          }
          0 < ft.length && (Q = new V(
            Q,
            lt,
            null,
            l,
            Z
          ), $.push({ event: Q, listeners: ft }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (Q = t === "mouseover" || t === "pointerover", V = t === "mouseout" || t === "pointerout", Q && l !== Kc && (lt = l.relatedTarget || l.fromElement) && (Un(lt) || lt[Rn]))
            break t;
          if ((V || Q) && (Q = Z.window === Z ? Z : (Q = Z.ownerDocument) ? Q.defaultView || Q.parentWindow : window, V ? (lt = l.relatedTarget || l.toElement, V = x, lt = lt ? Un(lt) : null, lt !== null && (Ot = h(lt), ft = lt.tag, lt !== Ot || ft !== 5 && ft !== 27 && ft !== 6) && (lt = null)) : (V = null, lt = x), V !== lt)) {
            if (ft = fo, F = "onMouseLeave", z = "onMouseEnter", g = "mouse", (t === "pointerout" || t === "pointerover") && (ft = ro, F = "onPointerLeave", z = "onPointerEnter", g = "pointer"), Ot = V == null ? Q : za(V), U = lt == null ? Q : za(lt), Q = new ft(
              F,
              g + "leave",
              V,
              l,
              Z
            ), Q.target = Ot, Q.relatedTarget = U, F = null, Un(Z) === x && (ft = new ft(
              z,
              g + "enter",
              lt,
              l,
              Z
            ), ft.target = U, ft.relatedTarget = Ot, F = ft), Ot = F, V && lt)
              e: {
                for (ft = Iv, z = V, g = lt, U = 0, F = z; F; F = ft(F))
                  U++;
                F = 0;
                for (var ct = g; ct; ct = ft(ct))
                  F++;
                for (; 0 < U - F; )
                  z = ft(z), U--;
                for (; 0 < F - U; )
                  g = ft(g), F--;
                for (; U--; ) {
                  if (z === g || g !== null && z === g.alternate) {
                    ft = z;
                    break e;
                  }
                  z = ft(z), g = ft(g);
                }
                ft = null;
              }
            else ft = null;
            V !== null && lh(
              $,
              Q,
              V,
              ft,
              !1
            ), lt !== null && Ot !== null && lh(
              $,
              Ot,
              lt,
              ft,
              !0
            );
          }
        }
        t: {
          if (Q = x ? za(x) : window, V = Q.nodeName && Q.nodeName.toLowerCase(), V === "select" || V === "input" && Q.type === "file")
            var At = So;
          else if (go(Q))
            if (bo)
              At = sv;
            else {
              At = cv;
              var at = iv;
            }
          else
            V = Q.nodeName, !V || V.toLowerCase() !== "input" || Q.type !== "checkbox" && Q.type !== "radio" ? x && Zc(x.elementType) && (At = So) : At = fv;
          if (At && (At = At(t, x))) {
            po(
              $,
              At,
              l,
              Z
            );
            break t;
          }
          at && at(t, Q, x), t === "focusout" && x && Q.type === "number" && x.memoizedProps.value != null && Xc(Q, "number", Q.value);
        }
        switch (at = x ? za(x) : window, t) {
          case "focusin":
            (go(at) || at.contentEditable === "true") && (Gn = at, uf = x, qa = null);
            break;
          case "focusout":
            qa = uf = Gn = null;
            break;
          case "mousedown":
            cf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            cf = !1, Co($, l, Z);
            break;
          case "selectionchange":
            if (ov) break;
          case "keydown":
          case "keyup":
            Co($, l, Z);
        }
        var ht;
        if (ef)
          t: {
            switch (t) {
              case "compositionstart":
                var pt = "onCompositionStart";
                break t;
              case "compositionend":
                pt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                pt = "onCompositionUpdate";
                break t;
            }
            pt = void 0;
          }
        else
          wn ? yo(t, l) && (pt = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (pt = "onCompositionStart");
        pt && (oo && l.locale !== "ko" && (wn || pt !== "onCompositionStart" ? pt === "onCompositionEnd" && wn && (ht = io()) : (Dl = Z, Wc = "value" in Dl ? Dl.value : Dl.textContent, wn = !0)), at = Vi(x, pt), 0 < at.length && (pt = new so(
          pt,
          t,
          null,
          l,
          Z
        ), $.push({ event: pt, listeners: at }), ht ? pt.data = ht : (ht = vo(l), ht !== null && (pt.data = ht)))), (ht = ev ? lv(t, l) : nv(t, l)) && (pt = Vi(x, "onBeforeInput"), 0 < pt.length && (at = new so(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          Z
        ), $.push({
          event: at,
          listeners: pt
        }), at.data = ht)), kv(
          $,
          t,
          x,
          l,
          Z
        );
      }
      th($, e);
    });
  }
  function iu(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function Vi(t, e) {
    for (var l = e + "Capture", n = []; t !== null; ) {
      var a = t, i = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || i === null || (a = Da(t, l), a != null && n.unshift(
        iu(t, a, i)
      ), a = Da(t, e), a != null && n.push(
        iu(t, a, i)
      )), t.tag === 3) return n;
      t = t.return;
    }
    return [];
  }
  function Iv(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function lh(t, e, l, n, a) {
    for (var i = e._reactName, f = []; l !== null && l !== n; ) {
      var o = l, m = o.alternate, x = o.stateNode;
      if (o = o.tag, m !== null && m === n) break;
      o !== 5 && o !== 26 && o !== 27 || x === null || (m = x, a ? (x = Da(l, i), x != null && f.unshift(
        iu(l, x, m)
      )) : a || (x = Da(l, i), x != null && f.push(
        iu(l, x, m)
      ))), l = l.return;
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var Pv = /\r\n?/g, t2 = /\u0000|\uFFFD/g;
  function nh(t) {
    return (typeof t == "string" ? t : "" + t).replace(Pv, `
`).replace(t2, "");
  }
  function ah(t, e) {
    return e = nh(e), nh(t) === e;
  }
  function Ct(t, e, l, n, a, i) {
    switch (l) {
      case "children":
        typeof n == "string" ? e === "body" || e === "textarea" && n === "" || Bn(t, n) : (typeof n == "number" || typeof n == "bigint") && e !== "body" && Bn(t, "" + n);
        break;
      case "className":
        Ju(t, "class", n);
        break;
      case "tabIndex":
        Ju(t, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ju(t, l, n);
        break;
      case "style":
        no(t, n, i);
        break;
      case "data":
        if (e !== "object") {
          Ju(t, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(l);
          break;
        }
        n = Fu("" + n), t.setAttribute(l, n);
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (l === "formAction" ? (e !== "input" && Ct(t, e, "name", a.name, a, null), Ct(
            t,
            e,
            "formEncType",
            a.formEncType,
            a,
            null
          ), Ct(
            t,
            e,
            "formMethod",
            a.formMethod,
            a,
            null
          ), Ct(
            t,
            e,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (Ct(t, e, "encType", a.encType, a, null), Ct(t, e, "method", a.method, a, null), Ct(t, e, "target", a.target, a, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(l);
          break;
        }
        n = Fu("" + n), t.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (t.onclick = ll);
        break;
      case "onScroll":
        n != null && yt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && yt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(r(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(r(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        t.muted = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        l = Fu("" + n), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, "" + n) : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        n && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        n === !0 ? t.setAttribute(l, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, n) : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? t.setAttribute(l, n) : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? t.removeAttribute(l) : t.setAttribute(l, n);
        break;
      case "popover":
        yt("beforetoggle", t), yt("toggle", t), Ku(t, "popover", n);
        break;
      case "xlinkActuate":
        el(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        el(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        el(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        el(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        el(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        el(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        el(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        el(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        el(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        Ku(t, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Cy.get(l) || l, Ku(t, l, n));
    }
  }
  function Us(t, e, l, n, a, i) {
    switch (l) {
      case "style":
        no(t, n, i);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(r(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(r(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof n == "string" ? Bn(t, n) : (typeof n == "number" || typeof n == "bigint") && Bn(t, "" + n);
        break;
      case "onScroll":
        n != null && yt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && yt("scrollend", t);
        break;
      case "onClick":
        n != null && (t.onclick = ll);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!kr.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), e = l.slice(2, a ? l.length - 7 : void 0), i = t[se] || null, i = i != null ? i[l] : null, typeof i == "function" && t.removeEventListener(e, i, a), typeof n == "function")) {
              typeof i != "function" && i !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, n, a);
              break t;
            }
            l in t ? t[l] = n : n === !0 ? t.setAttribute(l, "") : Ku(t, l, n);
          }
    }
  }
  function ne(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        yt("error", t), yt("load", t);
        var n = !1, a = !1, i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var f = l[i];
            if (f != null)
              switch (i) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  Ct(t, e, i, f, l, null);
              }
          }
        a && Ct(t, e, "srcSet", l.srcSet, l, null), n && Ct(t, e, "src", l.src, l, null);
        return;
      case "input":
        yt("invalid", t);
        var o = i = f = a = null, m = null, x = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var Z = l[n];
            if (Z != null)
              switch (n) {
                case "name":
                  a = Z;
                  break;
                case "type":
                  f = Z;
                  break;
                case "checked":
                  m = Z;
                  break;
                case "defaultChecked":
                  x = Z;
                  break;
                case "value":
                  i = Z;
                  break;
                case "defaultValue":
                  o = Z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Z != null)
                    throw Error(r(137, e));
                  break;
                default:
                  Ct(t, e, n, Z, l, null);
              }
          }
        Pr(
          t,
          i,
          o,
          m,
          x,
          f,
          a,
          !1
        );
        return;
      case "select":
        yt("invalid", t), n = f = i = null;
        for (a in l)
          if (l.hasOwnProperty(a) && (o = l[a], o != null))
            switch (a) {
              case "value":
                i = o;
                break;
              case "defaultValue":
                f = o;
                break;
              case "multiple":
                n = o;
              default:
                Ct(t, e, a, o, l, null);
            }
        e = i, l = f, t.multiple = !!n, e != null ? Qn(t, !!n, e, !1) : l != null && Qn(t, !!n, l, !0);
        return;
      case "textarea":
        yt("invalid", t), i = a = n = null;
        for (f in l)
          if (l.hasOwnProperty(f) && (o = l[f], o != null))
            switch (f) {
              case "value":
                n = o;
                break;
              case "defaultValue":
                a = o;
                break;
              case "children":
                i = o;
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(r(91));
                break;
              default:
                Ct(t, e, f, o, l, null);
            }
        eo(t, n, a, i);
        return;
      case "option":
        for (m in l)
          l.hasOwnProperty(m) && (n = l[m], n != null) && (m === "selected" ? t.selected = n && typeof n != "function" && typeof n != "symbol" : Ct(t, e, m, n, l, null));
        return;
      case "dialog":
        yt("beforetoggle", t), yt("toggle", t), yt("cancel", t), yt("close", t);
        break;
      case "iframe":
      case "object":
        yt("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < uu.length; n++)
          yt(uu[n], t);
        break;
      case "image":
        yt("error", t), yt("load", t);
        break;
      case "details":
        yt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        yt("error", t), yt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (x in l)
          if (l.hasOwnProperty(x) && (n = l[x], n != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                Ct(t, e, x, n, l, null);
            }
        return;
      default:
        if (Zc(e)) {
          for (Z in l)
            l.hasOwnProperty(Z) && (n = l[Z], n !== void 0 && Us(
              t,
              e,
              Z,
              n,
              l,
              void 0
            ));
          return;
        }
    }
    for (o in l)
      l.hasOwnProperty(o) && (n = l[o], n != null && Ct(t, e, o, n, l, null));
  }
  function e2(t, e, l, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var a = null, i = null, f = null, o = null, m = null, x = null, Z = null;
        for (V in l) {
          var $ = l[V];
          if (l.hasOwnProperty(V) && $ != null)
            switch (V) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = $;
              default:
                n.hasOwnProperty(V) || Ct(t, e, V, null, n, $);
            }
        }
        for (var Q in n) {
          var V = n[Q];
          if ($ = l[Q], n.hasOwnProperty(Q) && (V != null || $ != null))
            switch (Q) {
              case "type":
                i = V;
                break;
              case "name":
                a = V;
                break;
              case "checked":
                x = V;
                break;
              case "defaultChecked":
                Z = V;
                break;
              case "value":
                f = V;
                break;
              case "defaultValue":
                o = V;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null)
                  throw Error(r(137, e));
                break;
              default:
                V !== $ && Ct(
                  t,
                  e,
                  Q,
                  V,
                  n,
                  $
                );
            }
        }
        Vc(
          t,
          f,
          o,
          m,
          x,
          Z,
          i,
          a
        );
        return;
      case "select":
        V = f = o = Q = null;
        for (i in l)
          if (m = l[i], l.hasOwnProperty(i) && m != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                V = m;
              default:
                n.hasOwnProperty(i) || Ct(
                  t,
                  e,
                  i,
                  null,
                  n,
                  m
                );
            }
        for (a in n)
          if (i = n[a], m = l[a], n.hasOwnProperty(a) && (i != null || m != null))
            switch (a) {
              case "value":
                Q = i;
                break;
              case "defaultValue":
                o = i;
                break;
              case "multiple":
                f = i;
              default:
                i !== m && Ct(
                  t,
                  e,
                  a,
                  i,
                  n,
                  m
                );
            }
        e = o, l = f, n = V, Q != null ? Qn(t, !!l, Q, !1) : !!n != !!l && (e != null ? Qn(t, !!l, e, !0) : Qn(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        V = Q = null;
        for (o in l)
          if (a = l[o], l.hasOwnProperty(o) && a != null && !n.hasOwnProperty(o))
            switch (o) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ct(t, e, o, null, n, a);
            }
        for (f in n)
          if (a = n[f], i = l[f], n.hasOwnProperty(f) && (a != null || i != null))
            switch (f) {
              case "value":
                Q = a;
                break;
              case "defaultValue":
                V = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(r(91));
                break;
              default:
                a !== i && Ct(t, e, f, a, n, i);
            }
        to(t, Q, V);
        return;
      case "option":
        for (var lt in l)
          Q = l[lt], l.hasOwnProperty(lt) && Q != null && !n.hasOwnProperty(lt) && (lt === "selected" ? t.selected = !1 : Ct(
            t,
            e,
            lt,
            null,
            n,
            Q
          ));
        for (m in n)
          Q = n[m], V = l[m], n.hasOwnProperty(m) && Q !== V && (Q != null || V != null) && (m === "selected" ? t.selected = Q && typeof Q != "function" && typeof Q != "symbol" : Ct(
            t,
            e,
            m,
            Q,
            n,
            V
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ft in l)
          Q = l[ft], l.hasOwnProperty(ft) && Q != null && !n.hasOwnProperty(ft) && Ct(t, e, ft, null, n, Q);
        for (x in n)
          if (Q = n[x], V = l[x], n.hasOwnProperty(x) && Q !== V && (Q != null || V != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Q != null)
                  throw Error(r(137, e));
                break;
              default:
                Ct(
                  t,
                  e,
                  x,
                  Q,
                  n,
                  V
                );
            }
        return;
      default:
        if (Zc(e)) {
          for (var Ot in l)
            Q = l[Ot], l.hasOwnProperty(Ot) && Q !== void 0 && !n.hasOwnProperty(Ot) && Us(
              t,
              e,
              Ot,
              void 0,
              n,
              Q
            );
          for (Z in n)
            Q = n[Z], V = l[Z], !n.hasOwnProperty(Z) || Q === V || Q === void 0 && V === void 0 || Us(
              t,
              e,
              Z,
              Q,
              n,
              V
            );
          return;
        }
    }
    for (var z in l)
      Q = l[z], l.hasOwnProperty(z) && Q != null && !n.hasOwnProperty(z) && Ct(t, e, z, null, n, Q);
    for ($ in n)
      Q = n[$], V = l[$], !n.hasOwnProperty($) || Q === V || Q == null && V == null || Ct(t, e, $, Q, n, V);
  }
  function uh(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function l2() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
        var a = l[n], i = a.transferSize, f = a.initiatorType, o = a.duration;
        if (i && o && uh(f)) {
          for (f = 0, o = a.responseEnd, n += 1; n < l.length; n++) {
            var m = l[n], x = m.startTime;
            if (x > o) break;
            var Z = m.transferSize, $ = m.initiatorType;
            Z && uh($) && (m = m.responseEnd, f += Z * (m < o ? 1 : (o - x) / (m - x)));
          }
          if (--n, e += 8 * (i + f) / (a.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var js = null, xs = null;
  function Xi(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function ih(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ch(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function qs(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Qs = null;
  function n2() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Qs ? !1 : (Qs = t, !0) : (Qs = null, !1);
  }
  var fh = typeof setTimeout == "function" ? setTimeout : void 0, a2 = typeof clearTimeout == "function" ? clearTimeout : void 0, sh = typeof Promise == "function" ? Promise : void 0, u2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof sh < "u" ? function(t) {
    return sh.resolve(null).then(t).catch(i2);
  } : fh;
  function i2(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Xl(t) {
    return t === "head";
  }
  function rh(t, e) {
    var l = e, n = 0;
    do {
      var a = l.nextSibling;
      if (t.removeChild(l), a && a.nodeType === 8)
        if (l = a.data, l === "/$" || l === "/&") {
          if (n === 0) {
            t.removeChild(a), ma(e);
            return;
          }
          n--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          n++;
        else if (l === "html")
          cu(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, cu(l);
          for (var i = l.firstChild; i; ) {
            var f = i.nextSibling, o = i.nodeName;
            i[Ma] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = f;
          }
        } else
          l === "body" && cu(t.ownerDocument.body);
      l = a;
    } while (l);
    ma(e);
  }
  function oh(t, e) {
    var l = t;
    t = 0;
    do {
      var n = l.nextSibling;
      if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), n && n.nodeType === 8)
        if (l = n.data, l === "/$") {
          if (t === 0) break;
          t--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
      l = n;
    } while (l);
  }
  function Bs(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Bs(l), Gc(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function c2(t, e, l, n) {
    for (; t.nodeType === 1; ) {
      var a = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!n && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (n) {
        if (!t[Ma])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (i = t.getAttribute("rel"), i === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (i !== a.rel || t.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || t.getAttribute("title") !== (a.title == null ? null : a.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (i = t.getAttribute("src"), (i !== (a.src == null ? null : a.src) || t.getAttribute("type") !== (a.type == null ? null : a.type) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && i && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var i = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && t.getAttribute("name") === i)
          return t;
      } else return t;
      if (t = we(t.nextSibling), t === null) break;
    }
    return null;
  }
  function f2(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = we(t.nextSibling), t === null)) return null;
    return t;
  }
  function dh(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = we(t.nextSibling), t === null)) return null;
    return t;
  }
  function Hs(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Ys(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function s2(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading")
      e();
    else {
      var n = function() {
        e(), l.removeEventListener("DOMContentLoaded", n);
      };
      l.addEventListener("DOMContentLoaded", n), t._reactRetry = n;
    }
  }
  function we(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var ws = null;
  function hh(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0)
            return we(t.nextSibling);
          e--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function mh(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else l !== "/$" && l !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function yh(t, e, l) {
    switch (e = Xi(l), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(r(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(r(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function cu(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Gc(t);
  }
  var Ge = /* @__PURE__ */ new Map(), vh = /* @__PURE__ */ new Set();
  function Zi(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var pl = k.d;
  k.d = {
    f: r2,
    r: o2,
    D: d2,
    C: h2,
    L: m2,
    m: y2,
    X: g2,
    S: v2,
    M: p2
  };
  function r2() {
    var t = pl.f(), e = Qi();
    return t || e;
  }
  function o2(t) {
    var e = jn(t);
    e !== null && e.tag === 5 && e.type === "form" ? jd(e) : pl.r(t);
  }
  var oa = typeof document > "u" ? null : document;
  function gh(t, e, l) {
    var n = oa;
    if (n && typeof e == "string" && e) {
      var a = je(e);
      a = 'link[rel="' + t + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), vh.has(a) || (vh.add(a), t = { rel: t, crossOrigin: l, href: e }, n.querySelector(a) === null && (e = n.createElement("link"), ne(e, "link", t), Jt(e), n.head.appendChild(e)));
    }
  }
  function d2(t) {
    pl.D(t), gh("dns-prefetch", t, null);
  }
  function h2(t, e) {
    pl.C(t, e), gh("preconnect", t, e);
  }
  function m2(t, e, l) {
    pl.L(t, e, l);
    var n = oa;
    if (n && t && e) {
      var a = 'link[rel="preload"][as="' + je(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + je(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + je(
        l.imageSizes
      ) + '"]')) : a += '[href="' + je(t) + '"]';
      var i = a;
      switch (e) {
        case "style":
          i = da(t);
          break;
        case "script":
          i = ha(t);
      }
      Ge.has(i) || (t = v(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), Ge.set(i, t), n.querySelector(a) !== null || e === "style" && n.querySelector(fu(i)) || e === "script" && n.querySelector(su(i)) || (e = n.createElement("link"), ne(e, "link", t), Jt(e), n.head.appendChild(e)));
    }
  }
  function y2(t, e) {
    pl.m(t, e);
    var l = oa;
    if (l && t) {
      var n = e && typeof e.as == "string" ? e.as : "script", a = 'link[rel="modulepreload"][as="' + je(n) + '"][href="' + je(t) + '"]', i = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = ha(t);
      }
      if (!Ge.has(i) && (t = v({ rel: "modulepreload", href: t }, e), Ge.set(i, t), l.querySelector(a) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(su(i)))
              return;
        }
        n = l.createElement("link"), ne(n, "link", t), Jt(n), l.head.appendChild(n);
      }
    }
  }
  function v2(t, e, l) {
    pl.S(t, e, l);
    var n = oa;
    if (n && t) {
      var a = xn(n).hoistableStyles, i = da(t);
      e = e || "default";
      var f = a.get(i);
      if (!f) {
        var o = { loading: 0, preload: null };
        if (f = n.querySelector(
          fu(i)
        ))
          o.loading = 5;
        else {
          t = v(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = Ge.get(i)) && Gs(t, l);
          var m = f = n.createElement("link");
          Jt(m), ne(m, "link", t), m._p = new Promise(function(x, Z) {
            m.onload = x, m.onerror = Z;
          }), m.addEventListener("load", function() {
            o.loading |= 1;
          }), m.addEventListener("error", function() {
            o.loading |= 2;
          }), o.loading |= 4, Ki(f, e, n);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: o
        }, a.set(i, f);
      }
    }
  }
  function g2(t, e) {
    pl.X(t, e);
    var l = oa;
    if (l && t) {
      var n = xn(l).hoistableScripts, a = ha(t), i = n.get(a);
      i || (i = l.querySelector(su(a)), i || (t = v({ src: t, async: !0 }, e), (e = Ge.get(a)) && Ls(t, e), i = l.createElement("script"), Jt(i), ne(i, "link", t), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function p2(t, e) {
    pl.M(t, e);
    var l = oa;
    if (l && t) {
      var n = xn(l).hoistableScripts, a = ha(t), i = n.get(a);
      i || (i = l.querySelector(su(a)), i || (t = v({ src: t, async: !0, type: "module" }, e), (e = Ge.get(a)) && Ls(t, e), i = l.createElement("script"), Jt(i), ne(i, "link", t), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function ph(t, e, l, n) {
    var a = (a = bt.current) ? Zi(a) : null;
    if (!a) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = da(l.href), l = xn(
          a
        ).hoistableStyles, n = l.get(e), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = da(l.href);
          var i = xn(
            a
          ).hoistableStyles, f = i.get(t);
          if (f || (a = a.ownerDocument || a, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(t, f), (i = a.querySelector(
            fu(t)
          )) && !i._p && (f.instance = i, f.state.loading = 5), Ge.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Ge.set(t, l), i || S2(
            a,
            t,
            l,
            f.state
          ))), e && n === null)
            throw Error(r(528, ""));
          return f;
        }
        if (e && n !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ha(l), l = xn(
          a
        ).hoistableScripts, n = l.get(e), n || (n = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, n)), n) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, t));
    }
  }
  function da(t) {
    return 'href="' + je(t) + '"';
  }
  function fu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Sh(t) {
    return v({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function S2(t, e, l, n) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? n.loading = 1 : (e = t.createElement("link"), n.preload = e, e.addEventListener("load", function() {
      return n.loading |= 1;
    }), e.addEventListener("error", function() {
      return n.loading |= 2;
    }), ne(e, "link", l), Jt(e), t.head.appendChild(e));
  }
  function ha(t) {
    return '[src="' + je(t) + '"]';
  }
  function su(t) {
    return "script[async]" + t;
  }
  function bh(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var n = t.querySelector(
            'style[data-href~="' + je(l.href) + '"]'
          );
          if (n)
            return e.instance = n, Jt(n), n;
          var a = v({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (t.ownerDocument || t).createElement(
            "style"
          ), Jt(n), ne(n, "style", a), Ki(n, l.precedence, t), e.instance = n;
        case "stylesheet":
          a = da(l.href);
          var i = t.querySelector(
            fu(a)
          );
          if (i)
            return e.state.loading |= 4, e.instance = i, Jt(i), i;
          n = Sh(l), (a = Ge.get(a)) && Gs(n, a), i = (t.ownerDocument || t).createElement("link"), Jt(i);
          var f = i;
          return f._p = new Promise(function(o, m) {
            f.onload = o, f.onerror = m;
          }), ne(i, "link", n), e.state.loading |= 4, Ki(i, l.precedence, t), e.instance = i;
        case "script":
          return i = ha(l.src), (a = t.querySelector(
            su(i)
          )) ? (e.instance = a, Jt(a), a) : (n = l, (a = Ge.get(i)) && (n = v({}, l), Ls(n, a)), t = t.ownerDocument || t, a = t.createElement("script"), Jt(a), ne(a, "link", n), t.head.appendChild(a), e.instance = a);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (n = e.instance, e.state.loading |= 4, Ki(n, l.precedence, t));
    return e.instance;
  }
  function Ki(t, e, l) {
    for (var n = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = n.length ? n[n.length - 1] : null, i = a, f = 0; f < n.length; f++) {
      var o = n[f];
      if (o.dataset.precedence === e) i = o;
      else if (i !== a) break;
    }
    i ? i.parentNode.insertBefore(t, i.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function Gs(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Ls(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Ji = null;
  function _h(t, e, l) {
    if (Ji === null) {
      var n = /* @__PURE__ */ new Map(), a = Ji = /* @__PURE__ */ new Map();
      a.set(l, n);
    } else
      a = Ji, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
    if (n.has(t)) return n;
    for (n.set(t, null), l = l.getElementsByTagName(t), a = 0; a < l.length; a++) {
      var i = l[a];
      if (!(i[Ma] || i[Pt] || t === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = i.getAttribute(e) || "";
        f = t + f;
        var o = n.get(f);
        o ? o.push(i) : n.set(f, [i]);
      }
    }
    return n;
  }
  function Ah(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function b2(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function Eh(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function _2(t, e, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = da(n.href), i = e.querySelector(
          fu(a)
        );
        if (i) {
          e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = ki.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = i, Jt(i);
          return;
        }
        i = e.ownerDocument || e, n = Sh(n), (a = Ge.get(a)) && Gs(n, a), i = i.createElement("link"), Jt(i);
        var f = i;
        f._p = new Promise(function(o, m) {
          f.onload = o, f.onerror = m;
        }), ne(i, "link", n), l.instance = i;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = ki.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var Vs = 0;
  function A2(t, e) {
    return t.stylesheets && t.count === 0 && Wi(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (t.stylesheets && Wi(t, t.stylesheets), t.unsuspend) {
          var i = t.unsuspend;
          t.unsuspend = null, i();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Vs === 0 && (Vs = 62500 * l2());
      var a = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Wi(t, t.stylesheets), t.unsuspend)) {
            var i = t.unsuspend;
            t.unsuspend = null, i();
          }
        },
        (t.imgBytes > Vs ? 50 : 800) + e
      );
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(n), clearTimeout(a);
      };
    } : null;
  }
  function ki() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Wi(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Fi = null;
  function Wi(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Fi = /* @__PURE__ */ new Map(), e.forEach(E2, t), Fi = null, ki.call(t));
  }
  function E2(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Fi.get(t);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), Fi.set(t, l);
        for (var a = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < a.length; i++) {
          var f = a[i];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (l.set(f.dataset.precedence, f), n = f);
        }
        n && l.set(null, n);
      }
      a = e.instance, f = a.getAttribute("data-precedence"), i = l.get(f) || n, i === n && l.set(null, a), l.set(f, a), this.count++, n = ki.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), i ? i.parentNode.insertBefore(a, i.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(a, t.firstChild)), e.state.loading |= 4;
    }
  }
  var ru = {
    $$typeof: p,
    Provider: null,
    Consumer: null,
    _currentValue: W,
    _currentValue2: W,
    _threadCount: 0
  };
  function T2(t, e, l, n, a, i, f, o, m) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Bc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bc(0), this.hiddenUpdates = Bc(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Th(t, e, l, n, a, i, f, o, m, x, Z, $) {
    return t = new T2(
      t,
      e,
      l,
      f,
      m,
      x,
      Z,
      $,
      o
    ), e = 1, i === !0 && (e |= 24), i = _e(3, null, null, e), t.current = i, i.stateNode = t, e = Af(), e.refCount++, t.pooledCache = e, e.refCount++, i.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: e
    }, zf(i), t;
  }
  function Mh(t) {
    return t ? (t = Xn, t) : Xn;
  }
  function zh(t, e, l, n, a, i) {
    a = Mh(a), n.context === null ? n.context = a : n.pendingContext = a, n = jl(e), n.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = xl(t, n, e), l !== null && (ye(l, t, e), La(l, t, e));
  }
  function Dh(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Xs(t, e) {
    Dh(t, e), (t = t.alternate) && Dh(t, e);
  }
  function Ch(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = fn(t, 67108864);
      e !== null && ye(e, t, 67108864), Xs(t, 67108864);
    }
  }
  function Oh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ze();
      e = Hc(e);
      var l = fn(t, e);
      l !== null && ye(l, t, e), Xs(t, e);
    }
  }
  var $i = !0;
  function M2(t, e, l, n) {
    var a = M.T;
    M.T = null;
    var i = k.p;
    try {
      k.p = 2, Zs(t, e, l, n);
    } finally {
      k.p = i, M.T = a;
    }
  }
  function z2(t, e, l, n) {
    var a = M.T;
    M.T = null;
    var i = k.p;
    try {
      k.p = 8, Zs(t, e, l, n);
    } finally {
      k.p = i, M.T = a;
    }
  }
  function Zs(t, e, l, n) {
    if ($i) {
      var a = Ks(n);
      if (a === null)
        Rs(
          t,
          e,
          n,
          Ii,
          l
        ), Rh(t, n);
      else if (C2(
        a,
        t,
        e,
        l,
        n
      ))
        n.stopPropagation();
      else if (Rh(t, n), e & 4 && -1 < D2.indexOf(t)) {
        for (; a !== null; ) {
          var i = jn(a);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var f = ln(i.pendingLanes);
                  if (f !== 0) {
                    var o = i;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; f; ) {
                      var m = 1 << 31 - Se(f);
                      o.entanglements[1] |= m, f &= ~m;
                    }
                    Ie(i), (Tt & 6) === 0 && (xi = ge() + 500, au(0));
                  }
                }
                break;
              case 31:
              case 13:
                o = fn(i, 2), o !== null && ye(o, i, 2), Qi(), Xs(i, 2);
            }
          if (i = Ks(n), i === null && Rs(
            t,
            e,
            n,
            Ii,
            l
          ), i === a) break;
          a = i;
        }
        a !== null && n.stopPropagation();
      } else
        Rs(
          t,
          e,
          n,
          null,
          l
        );
    }
  }
  function Ks(t) {
    return t = Jc(t), Js(t);
  }
  var Ii = null;
  function Js(t) {
    if (Ii = null, t = Un(t), t !== null) {
      var e = h(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = y(e), t !== null) return t;
          t = null;
        } else if (l === 31) {
          if (t = C(e), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Ii = t, null;
  }
  function Nh(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (dy()) {
          case Br:
            return 2;
          case Hr:
            return 8;
          case Gu:
          case hy:
            return 32;
          case Yr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ks = !1, Zl = null, Kl = null, Jl = null, ou = /* @__PURE__ */ new Map(), du = /* @__PURE__ */ new Map(), kl = [], D2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Rh(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Zl = null;
        break;
      case "dragenter":
      case "dragleave":
        Kl = null;
        break;
      case "mouseover":
      case "mouseout":
        Jl = null;
        break;
      case "pointerover":
      case "pointerout":
        ou.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        du.delete(e.pointerId);
    }
  }
  function hu(t, e, l, n, a, i) {
    return t === null || t.nativeEvent !== i ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: n,
      nativeEvent: i,
      targetContainers: [a]
    }, e !== null && (e = jn(e), e !== null && Ch(e)), t) : (t.eventSystemFlags |= n, e = t.targetContainers, a !== null && e.indexOf(a) === -1 && e.push(a), t);
  }
  function C2(t, e, l, n, a) {
    switch (e) {
      case "focusin":
        return Zl = hu(
          Zl,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "dragenter":
        return Kl = hu(
          Kl,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "mouseover":
        return Jl = hu(
          Jl,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "pointerover":
        var i = a.pointerId;
        return ou.set(
          i,
          hu(
            ou.get(i) || null,
            t,
            e,
            l,
            n,
            a
          )
        ), !0;
      case "gotpointercapture":
        return i = a.pointerId, du.set(
          i,
          hu(
            du.get(i) || null,
            t,
            e,
            l,
            n,
            a
          )
        ), !0;
    }
    return !1;
  }
  function Uh(t) {
    var e = Un(t.target);
    if (e !== null) {
      var l = h(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = y(l), e !== null) {
            t.blockedOn = e, Zr(t.priority, function() {
              Oh(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = C(l), e !== null) {
            t.blockedOn = e, Zr(t.priority, function() {
              Oh(l);
            });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Pi(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = Ks(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        Kc = n, l.target.dispatchEvent(n), Kc = null;
      } else
        return e = jn(l), e !== null && Ch(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function jh(t, e, l) {
    Pi(t) && l.delete(e);
  }
  function O2() {
    ks = !1, Zl !== null && Pi(Zl) && (Zl = null), Kl !== null && Pi(Kl) && (Kl = null), Jl !== null && Pi(Jl) && (Jl = null), ou.forEach(jh), du.forEach(jh);
  }
  function tc(t, e) {
    t.blockedOn === e && (t.blockedOn = null, ks || (ks = !0, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      O2
    )));
  }
  var ec = null;
  function xh(t) {
    ec !== t && (ec = t, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      function() {
        ec === t && (ec = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], n = t[e + 1], a = t[e + 2];
          if (typeof n != "function") {
            if (Js(n || l) === null)
              continue;
            break;
          }
          var i = jn(l);
          i !== null && (t.splice(e, 3), e -= 3, Kf(
            i,
            {
              pending: !0,
              data: a,
              method: l.method,
              action: n
            },
            n,
            a
          ));
        }
      }
    ));
  }
  function ma(t) {
    function e(m) {
      return tc(m, t);
    }
    Zl !== null && tc(Zl, t), Kl !== null && tc(Kl, t), Jl !== null && tc(Jl, t), ou.forEach(e), du.forEach(e);
    for (var l = 0; l < kl.length; l++) {
      var n = kl[l];
      n.blockedOn === t && (n.blockedOn = null);
    }
    for (; 0 < kl.length && (l = kl[0], l.blockedOn === null); )
      Uh(l), l.blockedOn === null && kl.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var a = l[n], i = l[n + 1], f = a[se] || null;
        if (typeof i == "function")
          f || xh(l);
        else if (f) {
          var o = null;
          if (i && i.hasAttribute("formAction")) {
            if (a = i, f = i[se] || null)
              o = f.formAction;
            else if (Js(a) !== null) continue;
          } else o = f.action;
          typeof o == "function" ? l[n + 1] = o : (l.splice(n, 3), n -= 3), xh(l);
        }
      }
  }
  function qh() {
    function t(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(f) {
            return a = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      a !== null && (a(), a = null), n || setTimeout(l, 20);
    }
    function l() {
      if (!n && !navigation.transition) {
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, {
          state: i.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var n = !1, a = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100), function() {
        n = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), a !== null && (a(), a = null);
      };
    }
  }
  function Fs(t) {
    this._internalRoot = t;
  }
  lc.prototype.render = Fs.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var l = e.current, n = ze();
    zh(l, n, t, e, null, null);
  }, lc.prototype.unmount = Fs.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      zh(t.current, 2, null, t, null, null), Qi(), e[Rn] = null;
    }
  };
  function lc(t) {
    this._internalRoot = t;
  }
  lc.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Xr();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < kl.length && e !== 0 && e < kl[l].priority; l++) ;
      kl.splice(l, 0, t), l === 0 && Uh(t);
    }
  };
  var Qh = c.version;
  if (Qh !== "19.2.3")
    throw Error(
      r(
        527,
        Qh,
        "19.2.3"
      )
    );
  k.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = j(e), t = t !== null ? w(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var N2 = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var nc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!nc.isDisabled && nc.supportsFiber)
      try {
        Aa = nc.inject(
          N2
        ), pe = nc;
      } catch {
      }
  }
  return mu.createRoot = function(t, e) {
    if (!d(t)) throw Error(r(299));
    var l = !1, n = "", a = Vd, i = Xd, f = Zd;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (a = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError)), e = Th(
      t,
      1,
      !1,
      null,
      null,
      l,
      n,
      null,
      a,
      i,
      f,
      qh
    ), t[Rn] = e.current, Ns(t), new Fs(e);
  }, mu.hydrateRoot = function(t, e, l) {
    if (!d(t)) throw Error(r(299));
    var n = !1, a = "", i = Vd, f = Xd, o = Zd, m = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (f = l.onCaughtError), l.onRecoverableError !== void 0 && (o = l.onRecoverableError), l.formState !== void 0 && (m = l.formState)), e = Th(
      t,
      1,
      !0,
      e,
      l ?? null,
      n,
      a,
      m,
      i,
      f,
      o,
      qh
    ), e.context = Mh(null), l = e.current, n = ze(), n = Hc(n), a = jl(n), a.callback = null, xl(l, a, n), l = n, e.current.lanes = l, Ta(e, l), Ie(e), t[Rn] = e.current, Ns(t), new lc(e);
  }, mu.version = "19.2.3", mu;
}
var wh;
function H2() {
  if (wh) return $s.exports;
  wh = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), $s.exports = B2(), $s.exports;
}
var Y2 = H2();
const w2 = /* @__PURE__ */ x2(Y2);
var tr = { exports: {} }, er = {};
var Gh;
function G2() {
  if (Gh) return er;
  Gh = 1;
  var u = va;
  function c(D, j) {
    return D === j && (D !== 0 || 1 / D === 1 / j) || D !== D && j !== j;
  }
  var s = typeof Object.is == "function" ? Object.is : c, r = u.useSyncExternalStore, d = u.useRef, h = u.useEffect, y = u.useMemo, C = u.useDebugValue;
  return er.useSyncExternalStoreWithSelector = function(D, j, w, v, E) {
    var G = d(null);
    if (G.current === null) {
      var N = { hasValue: !1, value: null };
      G.current = N;
    } else N = G.current;
    G = y(
      function() {
        function O(b) {
          if (!L) {
            if (L = !0, K = b, b = v(b), E !== void 0 && N.hasValue) {
              var _ = N.value;
              if (E(_, b))
                return p = _;
            }
            return p = b;
          }
          if (_ = p, s(K, b)) return _;
          var q = v(b);
          return E !== void 0 && E(_, q) ? (K = b, _) : (K = b, p = q);
        }
        var L = !1, K, p, T = w === void 0 ? null : w;
        return [
          function() {
            return O(j());
          },
          T === null ? void 0 : function() {
            return O(T());
          }
        ];
      },
      [j, w, v, E]
    );
    var X = r(D, G[0], G[1]);
    return h(
      function() {
        N.hasValue = !0, N.value = X;
      },
      [X]
    ), C(X), X;
  }, er;
}
var Lh;
function L2() {
  return Lh || (Lh = 1, tr.exports = G2()), tr.exports;
}
var V2 = L2();
function Dm(u) {
  u();
}
function X2() {
  let u = null, c = null;
  return {
    clear() {
      u = null, c = null;
    },
    notify() {
      Dm(() => {
        let s = u;
        for (; s; )
          s.callback(), s = s.next;
      });
    },
    get() {
      const s = [];
      let r = u;
      for (; r; )
        s.push(r), r = r.next;
      return s;
    },
    subscribe(s) {
      let r = !0;
      const d = c = {
        callback: s,
        next: null,
        prev: c
      };
      return d.prev ? d.prev.next = d : u = d, function() {
        !r || u === null || (r = !1, d.next ? d.next.prev = d.prev : c = d.prev, d.prev ? d.prev.next = d.next : u = d.next);
      };
    }
  };
}
var Vh = {
  notify() {
  },
  get: () => []
};
function Z2(u, c) {
  let s, r = Vh, d = 0, h = !1;
  function y(X) {
    w();
    const O = r.subscribe(X);
    let L = !1;
    return () => {
      L || (L = !0, O(), v());
    };
  }
  function C() {
    r.notify();
  }
  function D() {
    N.onStateChange && N.onStateChange();
  }
  function j() {
    return h;
  }
  function w() {
    d++, s || (s = u.subscribe(D), r = X2());
  }
  function v() {
    d--, s && d === 0 && (s(), s = void 0, r.clear(), r = Vh);
  }
  function E() {
    h || (h = !0, w());
  }
  function G() {
    h && (h = !1, v());
  }
  const N = {
    addNestedSub: y,
    notifyNestedSubs: C,
    handleChangeWrapper: D,
    isSubscribed: j,
    trySubscribe: E,
    tryUnsubscribe: G,
    getListeners: () => r
  };
  return N;
}
var K2 = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", J2 = /* @__PURE__ */ K2(), k2 = () => typeof navigator < "u" && navigator.product === "ReactNative", F2 = /* @__PURE__ */ k2(), W2 = () => J2 || F2 ? De.useLayoutEffect : De.useEffect, $2 = /* @__PURE__ */ W2();
function Xh(u, c) {
  return u === c ? u !== 0 || c !== 0 || 1 / u === 1 / c : u !== u && c !== c;
}
function Au(u, c) {
  if (Xh(u, c)) return !0;
  if (typeof u != "object" || u === null || typeof c != "object" || c === null)
    return !1;
  const s = Object.keys(u), r = Object.keys(c);
  if (s.length !== r.length) return !1;
  for (let d = 0; d < s.length; d++)
    if (!Object.prototype.hasOwnProperty.call(c, s[d]) || !Xh(u[s[d]], c[s[d]]))
      return !1;
  return !0;
}
var I2 = /* @__PURE__ */ Symbol.for("react-redux-context"), P2 = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function t1() {
  if (!De.createContext) return {};
  const u = P2[I2] ??= /* @__PURE__ */ new Map();
  let c = u.get(De.createContext);
  return c || (c = De.createContext(
    null
  ), u.set(De.createContext, c)), c;
}
var Il = /* @__PURE__ */ t1();
function e1(u) {
  const { children: c, context: s, serverState: r, store: d } = u, h = De.useMemo(() => {
    const D = Z2(d);
    return {
      store: d,
      subscription: D,
      getServerState: r ? () => r : void 0
    };
  }, [d, r]), y = De.useMemo(() => d.getState(), [d]);
  $2(() => {
    const { subscription: D } = h;
    return D.onStateChange = D.notifyNestedSubs, D.trySubscribe(), y !== d.getState() && D.notifyNestedSubs(), () => {
      D.tryUnsubscribe(), D.onStateChange = void 0;
    };
  }, [h, y]);
  const C = s || Il;
  return /* @__PURE__ */ De.createElement(C.Provider, { value: h }, c);
}
var l1 = e1;
function Mr(u = Il) {
  return function() {
    return De.useContext(u);
  };
}
var Cm = /* @__PURE__ */ Mr();
function Om(u = Il) {
  const c = u === Il ? Cm : (
    // @ts-ignore
    Mr(u)
  ), s = () => {
    const { store: r } = c();
    return r;
  };
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var Nm = /* @__PURE__ */ Om();
function n1(u = Il) {
  const c = u === Il ? Nm : Om(u), s = () => c().dispatch;
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var Rm = /* @__PURE__ */ n1(), a1 = (u, c) => u === c;
function u1(u = Il) {
  const c = u === Il ? Cm : Mr(u), s = (r, d = {}) => {
    const { equalityFn: h = a1 } = typeof d == "function" ? { equalityFn: d } : d, y = c(), { store: C, subscription: D, getServerState: j } = y;
    De.useRef(!0);
    const w = De.useCallback(
      {
        [r.name](E) {
          return r(E);
        }
      }[r.name],
      [r]
    ), v = V2.useSyncExternalStoreWithSelector(
      D.addNestedSub,
      C.getState,
      j || C.getState,
      w,
      h
    );
    return De.useDebugValue(v), v;
  };
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var Um = /* @__PURE__ */ u1(), i1 = Dm;
function ae(u) {
  return `Minified Redux error #${u}; visit https://redux.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
}
var c1 = typeof Symbol == "function" && Symbol.observable || "@@observable", Zh = c1, lr = () => Math.random().toString(36).substring(7).split("").join("."), f1 = {
  INIT: `@@redux/INIT${/* @__PURE__ */ lr()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ lr()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${lr()}`
}, mc = f1;
function Pl(u) {
  if (typeof u != "object" || u === null)
    return !1;
  let c = u;
  for (; Object.getPrototypeOf(c) !== null; )
    c = Object.getPrototypeOf(c);
  return Object.getPrototypeOf(u) === c || Object.getPrototypeOf(u) === null;
}
function jm(u, c, s) {
  if (typeof u != "function")
    throw new Error(ae(2));
  if (typeof c == "function" && typeof s == "function" || typeof s == "function" && typeof arguments[3] == "function")
    throw new Error(ae(0));
  if (typeof c == "function" && typeof s > "u" && (s = c, c = void 0), typeof s < "u") {
    if (typeof s != "function")
      throw new Error(ae(1));
    return s(jm)(u, c);
  }
  let r = u, d = c, h = /* @__PURE__ */ new Map(), y = h, C = 0, D = !1;
  function j() {
    y === h && (y = /* @__PURE__ */ new Map(), h.forEach((O, L) => {
      y.set(L, O);
    }));
  }
  function w() {
    if (D)
      throw new Error(ae(3));
    return d;
  }
  function v(O) {
    if (typeof O != "function")
      throw new Error(ae(4));
    if (D)
      throw new Error(ae(5));
    let L = !0;
    j();
    const K = C++;
    return y.set(K, O), function() {
      if (L) {
        if (D)
          throw new Error(ae(6));
        L = !1, j(), y.delete(K), h = null;
      }
    };
  }
  function E(O) {
    if (!Pl(O))
      throw new Error(ae(7));
    if (typeof O.type > "u")
      throw new Error(ae(8));
    if (typeof O.type != "string")
      throw new Error(ae(17));
    if (D)
      throw new Error(ae(9));
    try {
      D = !0, d = r(d, O);
    } finally {
      D = !1;
    }
    return (h = y).forEach((K) => {
      K();
    }), O;
  }
  function G(O) {
    if (typeof O != "function")
      throw new Error(ae(10));
    r = O, E({
      type: mc.REPLACE
    });
  }
  function N() {
    const O = v;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(L) {
        if (typeof L != "object" || L === null)
          throw new Error(ae(11));
        function K() {
          const T = L;
          T.next && T.next(w());
        }
        return K(), {
          unsubscribe: O(K)
        };
      },
      [Zh]() {
        return this;
      }
    };
  }
  return E({
    type: mc.INIT
  }), {
    dispatch: E,
    subscribe: v,
    getState: w,
    replaceReducer: G,
    [Zh]: N
  };
}
function s1(u) {
  Object.keys(u).forEach((c) => {
    const s = u[c];
    if (typeof s(void 0, {
      type: mc.INIT
    }) > "u")
      throw new Error(ae(12));
    if (typeof s(void 0, {
      type: mc.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(ae(13));
  });
}
function xm(u) {
  const c = Object.keys(u), s = {};
  for (let h = 0; h < c.length; h++) {
    const y = c[h];
    typeof u[y] == "function" && (s[y] = u[y]);
  }
  const r = Object.keys(s);
  let d;
  try {
    s1(s);
  } catch (h) {
    d = h;
  }
  return function(y = {}, C) {
    if (d)
      throw d;
    let D = !1;
    const j = {};
    for (let w = 0; w < r.length; w++) {
      const v = r[w], E = s[v], G = y[v], N = E(G, C);
      if (typeof N > "u")
        throw C && C.type, new Error(ae(14));
      j[v] = N, D = D || N !== G;
    }
    return D = D || r.length !== Object.keys(y).length, D ? j : y;
  };
}
function yc(...u) {
  return u.length === 0 ? (c) => c : u.length === 1 ? u[0] : u.reduce((c, s) => (...r) => c(s(...r)));
}
function r1(...u) {
  return (c) => (s, r) => {
    const d = c(s, r);
    let h = () => {
      throw new Error(ae(15));
    };
    const y = {
      getState: d.getState,
      dispatch: (D, ...j) => h(D, ...j)
    }, C = u.map((D) => D(y));
    return h = yc(...C)(d.dispatch), {
      ...d,
      dispatch: h
    };
  };
}
function qm(u) {
  return Pl(u) && "type" in u && typeof u.type == "string";
}
var zr = /* @__PURE__ */ Symbol.for("immer-nothing"), Eu = /* @__PURE__ */ Symbol.for("immer-draftable"), Wt = /* @__PURE__ */ Symbol.for("immer-state");
function ue(u, ...c) {
  throw new Error(
    `[Immer] minified error nr: ${u}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Ce = Object, zn = Ce.getPrototypeOf, zu = "constructor", ju = "prototype", dr = "configurable", vc = "enumerable", oc = "writable", Du = "value", Oe = (u) => !!u && !!u[Wt];
function Ne(u) {
  return u ? Qm(u) || qu(u) || !!u[Eu] || !!u[zu]?.[Eu] || Qu(u) || Bu(u) : !1;
}
var o1 = Ce[ju][zu].toString(), Kh = /* @__PURE__ */ new WeakMap();
function Qm(u) {
  if (!u || !ga(u))
    return !1;
  const c = zn(u);
  if (c === null || c === Ce[ju])
    return !0;
  const s = Ce.hasOwnProperty.call(c, zu) && c[zu];
  if (s === Object)
    return !0;
  if (!Mn(s))
    return !1;
  let r = Kh.get(s);
  return r === void 0 && (r = Function.toString.call(s), Kh.set(s, r)), r === o1;
}
function d1(u) {
  return Oe(u) || ue(15, u), u[Wt].base_;
}
function xu(u, c, s = !0) {
  Dn(u) === 0 ? (s ? Reflect.ownKeys(u) : Ce.keys(u)).forEach((d) => {
    c(d, u[d], u);
  }) : u.forEach((r, d) => c(d, r, u));
}
function Dn(u) {
  const c = u[Wt];
  return c ? c.type_ : qu(u) ? 1 : Qu(u) ? 2 : Bu(u) ? 3 : 0;
}
var Tu = (u, c, s = Dn(u)) => s === 2 ? u.has(c) : Ce[ju].hasOwnProperty.call(u, c), bl = (u, c, s = Dn(u)) => (
  // @ts-ignore
  s === 2 ? u.get(c) : u[c]
), gc = (u, c, s, r = Dn(u)) => {
  r === 2 ? u.set(c, s) : r === 3 ? u.add(s) : u[c] = s;
};
function h1(u, c) {
  return u === c ? u !== 0 || 1 / u === 1 / c : u !== u && c !== c;
}
var qu = Array.isArray, Qu = (u) => u instanceof Map, Bu = (u) => u instanceof Set, ga = (u) => typeof u == "object", Mn = (u) => typeof u == "function", nr = (u) => typeof u == "boolean";
function m1(u) {
  const c = +u;
  return Number.isInteger(c) && String(c) === u;
}
var y1 = (u) => ga(u) ? u?.[Wt] : null, _l = (u) => u.copy_ || u.base_, Dr = (u) => u.modified_ ? u.copy_ : u.base_;
function hr(u, c) {
  if (Qu(u))
    return new Map(u);
  if (Bu(u))
    return new Set(u);
  if (qu(u))
    return Array[ju].slice.call(u);
  const s = Qm(u);
  if (c === !0 || c === "class_only" && !s) {
    const r = Ce.getOwnPropertyDescriptors(u);
    delete r[Wt];
    let d = Reflect.ownKeys(r);
    for (let h = 0; h < d.length; h++) {
      const y = d[h], C = r[y];
      C[oc] === !1 && (C[oc] = !0, C[dr] = !0), (C.get || C.set) && (r[y] = {
        [dr]: !0,
        [oc]: !0,
        // could live with !!desc.set as well here...
        [vc]: C[vc],
        [Du]: u[y]
      });
    }
    return Ce.create(zn(u), r);
  } else {
    const r = zn(u);
    if (r !== null && s)
      return { ...u };
    const d = Ce.create(r);
    return Ce.assign(d, u);
  }
}
function Cr(u, c = !1) {
  return zc(u) || Oe(u) || !Ne(u) || (Dn(u) > 1 && Ce.defineProperties(u, {
    set: ac,
    add: ac,
    clear: ac,
    delete: ac
  }), Ce.freeze(u), c && xu(
    u,
    (s, r) => {
      Cr(r, !0);
    },
    !1
  )), u;
}
function v1() {
  ue(2);
}
var ac = {
  [Du]: v1
};
function zc(u) {
  return u === null || !ga(u) ? !0 : Ce.isFrozen(u);
}
var pc = "MapSet", Sc = "Patches", Jh = "ArrayMethods", bc = {};
function Cn(u) {
  const c = bc[u];
  return c || ue(0, u), c;
}
var kh = (u) => !!bc[u];
function g1(u, c) {
  bc[u] || (bc[u] = c);
}
var Cu, Bm = () => Cu, p1 = (u, c) => ({
  drafts_: [],
  parent_: u,
  immer_: c,
  // Whenever the modified draft contains a draft from another scope, we
  // need to prevent auto-freezing so the unowned draft can be finalized.
  canAutoFreeze_: !0,
  unfinalizedDrafts_: 0,
  handledSet_: /* @__PURE__ */ new Set(),
  processedForPatches_: /* @__PURE__ */ new Set(),
  mapSetPlugin_: kh(pc) ? Cn(pc) : void 0,
  arrayMethodsPlugin_: kh(Jh) ? Cn(Jh) : void 0
});
function Fh(u, c) {
  c && (u.patchPlugin_ = Cn(Sc), u.patches_ = [], u.inversePatches_ = [], u.patchListener_ = c);
}
function mr(u) {
  yr(u), u.drafts_.forEach(S1), u.drafts_ = null;
}
function yr(u) {
  u === Cu && (Cu = u.parent_);
}
var Wh = (u) => Cu = p1(Cu, u);
function S1(u) {
  const c = u[Wt];
  c.type_ === 0 || c.type_ === 1 ? c.revoke_() : c.revoked_ = !0;
}
function $h(u, c) {
  c.unfinalizedDrafts_ = c.drafts_.length;
  const s = c.drafts_[0];
  if (u !== void 0 && u !== s) {
    s[Wt].modified_ && (mr(c), ue(4)), Ne(u) && (u = Ih(c, u));
    const { patchPlugin_: d } = c;
    d && d.generateReplacementPatches_(
      s[Wt].base_,
      u,
      c
    );
  } else
    u = Ih(c, s);
  return b1(c, u, !0), mr(c), c.patches_ && c.patchListener_(c.patches_, c.inversePatches_), u !== zr ? u : void 0;
}
function Ih(u, c) {
  if (zc(c))
    return c;
  const s = c[Wt];
  if (!s)
    return _c(c, u.handledSet_, u);
  if (!Dc(s, u))
    return c;
  if (!s.modified_)
    return s.base_;
  if (!s.finalized_) {
    const { callbacks_: r } = s;
    if (r)
      for (; r.length > 0; )
        r.pop()(u);
    wm(s, u);
  }
  return s.copy_;
}
function b1(u, c, s = !1) {
  !u.parent_ && u.immer_.autoFreeze_ && u.canAutoFreeze_ && Cr(c, s);
}
function Hm(u) {
  u.finalized_ = !0, u.scope_.unfinalizedDrafts_--;
}
var Dc = (u, c) => u.scope_ === c, _1 = [];
function Ym(u, c, s, r) {
  const d = _l(u), h = u.type_;
  if (r !== void 0 && bl(d, r, h) === c) {
    gc(d, r, s, h);
    return;
  }
  if (!u.draftLocations_) {
    const C = u.draftLocations_ = /* @__PURE__ */ new Map();
    xu(d, (D, j) => {
      if (Oe(j)) {
        const w = C.get(j) || [];
        w.push(D), C.set(j, w);
      }
    });
  }
  const y = u.draftLocations_.get(c) ?? _1;
  for (const C of y)
    gc(d, C, s, h);
}
function A1(u, c, s) {
  u.callbacks_.push(function(d) {
    const h = c;
    if (!h || !Dc(h, d))
      return;
    d.mapSetPlugin_?.fixSetContents(h);
    const y = Dr(h);
    Ym(u, h.draft_ ?? h, y, s), wm(h, d);
  });
}
function wm(u, c) {
  if (u.modified_ && !u.finalized_ && (u.type_ === 3 || u.type_ === 1 && u.allIndicesReassigned_ || (u.assigned_?.size ?? 0) > 0)) {
    const { patchPlugin_: r } = c;
    if (r) {
      const d = r.getPath(u);
      d && r.generatePatches_(u, d, c);
    }
    Hm(u);
  }
}
function E1(u, c, s) {
  const { scope_: r } = u;
  if (Oe(s)) {
    const d = s[Wt];
    Dc(d, r) && d.callbacks_.push(function() {
      dc(u);
      const y = Dr(d);
      Ym(u, s, y, c);
    });
  } else Ne(s) && u.callbacks_.push(function() {
    const h = _l(u);
    u.type_ === 3 ? h.has(s) && _c(s, r.handledSet_, r) : bl(h, c, u.type_) === s && r.drafts_.length > 1 && (u.assigned_.get(c) ?? !1) === !0 && u.copy_ && _c(
      bl(u.copy_, c, u.type_),
      r.handledSet_,
      r
    );
  });
}
function _c(u, c, s) {
  return !s.immer_.autoFreeze_ && s.unfinalizedDrafts_ < 1 || Oe(u) || c.has(u) || !Ne(u) || zc(u) || (c.add(u), xu(u, (r, d) => {
    if (Oe(d)) {
      const h = d[Wt];
      if (Dc(h, s)) {
        const y = Dr(h);
        gc(u, r, y, u.type_), Hm(h);
      }
    } else Ne(d) && _c(d, c, s);
  })), u;
}
function T1(u, c) {
  const s = qu(u), r = {
    type_: s ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: c ? c.scope_ : Bm(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    // actually instantiated in `prepareCopy()`
    assigned_: void 0,
    // The parent draft state.
    parent_: c,
    // The base state.
    base_: u,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1,
    // `callbacks` actually gets assigned in `createProxy`
    callbacks_: void 0
  };
  let d = r, h = Ac;
  s && (d = [r], h = Ou);
  const { revoke: y, proxy: C } = Proxy.revocable(d, h);
  return r.draft_ = C, r.revoke_ = y, [C, r];
}
var Ac = {
  get(u, c) {
    if (c === Wt)
      return u;
    let s = u.scope_.arrayMethodsPlugin_;
    const r = u.type_ === 1 && typeof c == "string";
    if (r && s?.isArrayOperationMethod(c))
      return s.createMethodInterceptor(u, c);
    const d = _l(u);
    if (!Tu(d, c, u.type_))
      return M1(u, d, c);
    const h = d[c];
    if (u.finalized_ || !Ne(h) || r && u.operationMethod && s?.isMutatingArrayMethod(
      u.operationMethod
    ) && m1(c))
      return h;
    if (h === ar(u.base_, c)) {
      dc(u);
      const y = u.type_ === 1 ? +c : c, C = gr(u.scope_, h, u, y);
      return u.copy_[y] = C;
    }
    return h;
  },
  has(u, c) {
    return c in _l(u);
  },
  ownKeys(u) {
    return Reflect.ownKeys(_l(u));
  },
  set(u, c, s) {
    const r = Gm(_l(u), c);
    if (r?.set)
      return r.set.call(u.draft_, s), !0;
    if (!u.modified_) {
      const d = ar(_l(u), c), h = d?.[Wt];
      if (h && h.base_ === s)
        return u.copy_[c] = s, u.assigned_.set(c, !1), !0;
      if (h1(s, d) && (s !== void 0 || Tu(u.base_, c, u.type_)))
        return !0;
      dc(u), vr(u);
    }
    return u.copy_[c] === s && // special case: handle new props with value 'undefined'
    (s !== void 0 || c in u.copy_) || // special case: NaN
    Number.isNaN(s) && Number.isNaN(u.copy_[c]) || (u.copy_[c] = s, u.assigned_.set(c, !0), E1(u, c, s)), !0;
  },
  deleteProperty(u, c) {
    return dc(u), ar(u.base_, c) !== void 0 || c in u.base_ ? (u.assigned_.set(c, !1), vr(u)) : u.assigned_.delete(c), u.copy_ && delete u.copy_[c], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(u, c) {
    const s = _l(u), r = Reflect.getOwnPropertyDescriptor(s, c);
    return r && {
      [oc]: !0,
      [dr]: u.type_ !== 1 || c !== "length",
      [vc]: r[vc],
      [Du]: s[c]
    };
  },
  defineProperty() {
    ue(11);
  },
  getPrototypeOf(u) {
    return zn(u.base_);
  },
  setPrototypeOf() {
    ue(12);
  }
}, Ou = {};
for (let u in Ac) {
  let c = Ac[u];
  Ou[u] = function() {
    const s = arguments;
    return s[0] = s[0][0], c.apply(this, s);
  };
}
Ou.deleteProperty = function(u, c) {
  return Ou.set.call(this, u, c, void 0);
};
Ou.set = function(u, c, s) {
  return Ac.set.call(this, u[0], c, s, u[0]);
};
function ar(u, c) {
  const s = u[Wt];
  return (s ? _l(s) : u)[c];
}
function M1(u, c, s) {
  const r = Gm(c, s);
  return r ? Du in r ? r[Du] : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    r.get?.call(u.draft_)
  ) : void 0;
}
function Gm(u, c) {
  if (!(c in u))
    return;
  let s = zn(u);
  for (; s; ) {
    const r = Object.getOwnPropertyDescriptor(s, c);
    if (r)
      return r;
    s = zn(s);
  }
}
function vr(u) {
  u.modified_ || (u.modified_ = !0, u.parent_ && vr(u.parent_));
}
function dc(u) {
  u.copy_ || (u.assigned_ = /* @__PURE__ */ new Map(), u.copy_ = hr(
    u.base_,
    u.scope_.immer_.useStrictShallowCopy_
  ));
}
var z1 = class {
  constructor(u) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (c, s, r) => {
      if (Mn(c) && !Mn(s)) {
        const h = s;
        s = c;
        const y = this;
        return function(D = h, ...j) {
          return y.produce(D, (w) => s.call(this, w, ...j));
        };
      }
      Mn(s) || ue(6), r !== void 0 && !Mn(r) && ue(7);
      let d;
      if (Ne(c)) {
        const h = Wh(this), y = gr(h, c, void 0);
        let C = !0;
        try {
          d = s(y), C = !1;
        } finally {
          C ? mr(h) : yr(h);
        }
        return Fh(h, r), $h(d, h);
      } else if (!c || !ga(c)) {
        if (d = s(c), d === void 0 && (d = c), d === zr && (d = void 0), this.autoFreeze_ && Cr(d, !0), r) {
          const h = [], y = [];
          Cn(Sc).generateReplacementPatches_(c, d, {
            patches_: h,
            inversePatches_: y
          }), r(h, y);
        }
        return d;
      } else
        ue(1, c);
    }, this.produceWithPatches = (c, s) => {
      if (Mn(c))
        return (y, ...C) => this.produceWithPatches(y, (D) => c(D, ...C));
      let r, d;
      return [this.produce(c, s, (y, C) => {
        r = y, d = C;
      }), r, d];
    }, nr(u?.autoFreeze) && this.setAutoFreeze(u.autoFreeze), nr(u?.useStrictShallowCopy) && this.setUseStrictShallowCopy(u.useStrictShallowCopy), nr(u?.useStrictIteration) && this.setUseStrictIteration(u.useStrictIteration);
  }
  createDraft(u) {
    Ne(u) || ue(8), Oe(u) && (u = Lm(u));
    const c = Wh(this), s = gr(c, u, void 0);
    return s[Wt].isManual_ = !0, yr(c), s;
  }
  finishDraft(u, c) {
    const s = u && u[Wt];
    (!s || !s.isManual_) && ue(9);
    const { scope_: r } = s;
    return Fh(r, c), $h(void 0, r);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(u) {
    this.autoFreeze_ = u;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(u) {
    this.useStrictShallowCopy_ = u;
  }
  /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */
  setUseStrictIteration(u) {
    this.useStrictIteration_ = u;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(u, c) {
    let s;
    for (s = c.length - 1; s >= 0; s--) {
      const d = c[s];
      if (d.path.length === 0 && d.op === "replace") {
        u = d.value;
        break;
      }
    }
    s > -1 && (c = c.slice(s + 1));
    const r = Cn(Sc).applyPatches_;
    return Oe(u) ? r(u, c) : this.produce(
      u,
      (d) => r(d, c)
    );
  }
};
function gr(u, c, s, r) {
  const [d, h] = Qu(c) ? Cn(pc).proxyMap_(c, s) : Bu(c) ? Cn(pc).proxySet_(c, s) : T1(c, s);
  return (s?.scope_ ?? Bm()).drafts_.push(d), h.callbacks_ = s?.callbacks_ ?? [], h.key_ = r, s && r !== void 0 ? A1(s, h, r) : h.callbacks_.push(function(D) {
    D.mapSetPlugin_?.fixSetContents(h);
    const { patchPlugin_: j } = D;
    h.modified_ && j && j.generatePatches_(h, [], D);
  }), d;
}
function Lm(u) {
  return Oe(u) || ue(10, u), Vm(u);
}
function Vm(u) {
  if (!Ne(u) || zc(u))
    return u;
  const c = u[Wt];
  let s, r = !0;
  if (c) {
    if (!c.modified_)
      return c.base_;
    c.finalized_ = !0, s = hr(u, c.scope_.immer_.useStrictShallowCopy_), r = c.scope_.immer_.shouldUseStrictIteration();
  } else
    s = hr(u, !0);
  return xu(
    s,
    (d, h) => {
      gc(s, d, Vm(h));
    },
    r
  ), c && (c.finalized_ = !1), s;
}
function D1() {
  function c(N, X = []) {
    if (N.key_ !== void 0) {
      const O = N.parent_.copy_ ?? N.parent_.base_, L = y1(bl(O, N.key_)), K = bl(O, N.key_);
      if (K === void 0 || K !== N.draft_ && K !== N.base_ && K !== N.copy_ || L != null && L.base_ !== N.base_)
        return null;
      const p = N.parent_.type_ === 3;
      let T;
      if (p) {
        const b = N.parent_;
        T = Array.from(b.drafts_.keys()).indexOf(N.key_);
      } else
        T = N.key_;
      if (!(p && O.size > T || Tu(O, T)))
        return null;
      X.push(T);
    }
    if (N.parent_)
      return c(N.parent_, X);
    X.reverse();
    try {
      s(N.copy_, X);
    } catch {
      return null;
    }
    return X;
  }
  function s(N, X) {
    let O = N;
    for (let L = 0; L < X.length - 1; L++) {
      const K = X[L];
      if (O = bl(O, K), !ga(O) || O === null)
        throw new Error(`Cannot resolve path at '${X.join("/")}'`);
    }
    return O;
  }
  const r = "replace", d = "add", h = "remove";
  function y(N, X, O) {
    if (N.scope_.processedForPatches_.has(N))
      return;
    N.scope_.processedForPatches_.add(N);
    const { patches_: L, inversePatches_: K } = O;
    switch (N.type_) {
      case 0:
      case 2:
        return D(
          N,
          X,
          L,
          K
        );
      case 1:
        return C(
          N,
          X,
          L,
          K
        );
      case 3:
        return j(
          N,
          X,
          L,
          K
        );
    }
  }
  function C(N, X, O, L) {
    let { base_: K, assigned_: p } = N, T = N.copy_;
    T.length < K.length && ([K, T] = [T, K], [O, L] = [L, O]);
    const b = N.allIndicesReassigned_ === !0;
    for (let _ = 0; _ < K.length; _++) {
      const q = T[_], H = K[_];
      if ((b || p?.get(_.toString())) && q !== H) {
        const R = q?.[Wt];
        if (R && R.modified_)
          continue;
        const S = X.concat([_]);
        O.push({
          op: r,
          path: S,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: G(q)
        }), L.push({
          op: r,
          path: S,
          value: G(H)
        });
      }
    }
    for (let _ = K.length; _ < T.length; _++) {
      const q = X.concat([_]);
      O.push({
        op: d,
        path: q,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: G(T[_])
      });
    }
    for (let _ = T.length - 1; K.length <= _; --_) {
      const q = X.concat([_]);
      L.push({
        op: h,
        path: q
      });
    }
  }
  function D(N, X, O, L) {
    const { base_: K, copy_: p, type_: T } = N;
    xu(N.assigned_, (b, _) => {
      const q = bl(K, b, T), H = bl(p, b, T), Y = _ ? Tu(K, b) ? r : d : h;
      if (q === H && Y === r)
        return;
      const R = X.concat(b);
      O.push(
        Y === h ? { op: Y, path: R } : { op: Y, path: R, value: G(H) }
      ), L.push(
        Y === d ? { op: h, path: R } : Y === h ? { op: d, path: R, value: G(q) } : { op: r, path: R, value: G(q) }
      );
    });
  }
  function j(N, X, O, L) {
    let { base_: K, copy_: p } = N, T = 0;
    K.forEach((b) => {
      if (!p.has(b)) {
        const _ = X.concat([T]);
        O.push({
          op: h,
          path: _,
          value: b
        }), L.unshift({
          op: d,
          path: _,
          value: b
        });
      }
      T++;
    }), T = 0, p.forEach((b) => {
      if (!K.has(b)) {
        const _ = X.concat([T]);
        O.push({
          op: d,
          path: _,
          value: b
        }), L.unshift({
          op: h,
          path: _,
          value: b
        });
      }
      T++;
    });
  }
  function w(N, X, O) {
    const { patches_: L, inversePatches_: K } = O;
    L.push({
      op: r,
      path: [],
      value: X === zr ? void 0 : X
    }), K.push({
      op: r,
      path: [],
      value: N
    });
  }
  function v(N, X) {
    return X.forEach((O) => {
      const { path: L, op: K } = O;
      let p = N;
      for (let q = 0; q < L.length - 1; q++) {
        const H = Dn(p);
        let Y = L[q];
        typeof Y != "string" && typeof Y != "number" && (Y = "" + Y), (H === 0 || H === 1) && (Y === "__proto__" || Y === zu) && ue(19), Mn(p) && Y === ju && ue(19), p = bl(p, Y), ga(p) || ue(18, L.join("/"));
      }
      const T = Dn(p), b = E(O.value), _ = L[L.length - 1];
      switch (K) {
        case r:
          switch (T) {
            case 2:
              return p.set(_, b);
            case 3:
              ue(16);
            default:
              return p[_] = b;
          }
        case d:
          switch (T) {
            case 1:
              return _ === "-" ? p.push(b) : p.splice(_, 0, b);
            case 2:
              return p.set(_, b);
            case 3:
              return p.add(b);
            default:
              return p[_] = b;
          }
        case h:
          switch (T) {
            case 1:
              return p.splice(_, 1);
            case 2:
              return p.delete(_);
            case 3:
              return p.delete(O.value);
            default:
              return delete p[_];
          }
        default:
          ue(17, K);
      }
    }), N;
  }
  function E(N) {
    if (!Ne(N))
      return N;
    if (qu(N))
      return N.map(E);
    if (Qu(N))
      return new Map(
        Array.from(N.entries()).map(([O, L]) => [O, E(L)])
      );
    if (Bu(N))
      return new Set(Array.from(N).map(E));
    const X = Object.create(zn(N));
    for (const O in N)
      X[O] = E(N[O]);
    return Tu(N, Eu) && (X[Eu] = N[Eu]), X;
  }
  function G(N) {
    return Oe(N) ? E(N) : N;
  }
  g1(Sc, {
    applyPatches_: v,
    generatePatches_: y,
    generateReplacementPatches_: w,
    getPath: c
  });
}
var Nu = new z1(), Hu = Nu.produce, Xm = /* @__PURE__ */ Nu.produceWithPatches.bind(
  Nu
), Ph = /* @__PURE__ */ Nu.applyPatches.bind(Nu);
function C1(u, c = `expected a function, instead received ${typeof u}`) {
  if (typeof u != "function")
    throw new TypeError(c);
}
function O1(u, c = `expected an object, instead received ${typeof u}`) {
  if (typeof u != "object")
    throw new TypeError(c);
}
function N1(u, c = "expected all items to be functions, instead received the following types: ") {
  if (!u.every((s) => typeof s == "function")) {
    const s = u.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${c}[${s}]`);
  }
}
var tm = (u) => Array.isArray(u) ? u : [u];
function R1(u) {
  const c = Array.isArray(u[0]) ? u[0] : u;
  return N1(
    c,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), c;
}
function U1(u, c) {
  const s = [], { length: r } = u;
  for (let d = 0; d < r; d++)
    s.push(u[d].apply(null, c));
  return s;
}
var j1 = class {
  constructor(u) {
    this.value = u;
  }
  deref() {
    return this.value;
  }
}, x1 = typeof WeakRef < "u" ? WeakRef : j1, q1 = 0, em = 1;
function uc() {
  return {
    s: q1,
    v: void 0,
    o: null,
    p: null
  };
}
function Ec(u, c = {}) {
  let s = uc();
  const { resultEqualityCheck: r } = c;
  let d, h = 0;
  function y() {
    let C = s;
    const { length: D } = arguments;
    for (let v = 0, E = D; v < E; v++) {
      const G = arguments[v];
      if (typeof G == "function" || typeof G == "object" && G !== null) {
        let N = C.o;
        N === null && (C.o = N = /* @__PURE__ */ new WeakMap());
        const X = N.get(G);
        X === void 0 ? (C = uc(), N.set(G, C)) : C = X;
      } else {
        let N = C.p;
        N === null && (C.p = N = /* @__PURE__ */ new Map());
        const X = N.get(G);
        X === void 0 ? (C = uc(), N.set(G, C)) : C = X;
      }
    }
    const j = C;
    let w;
    if (C.s === em)
      w = C.v;
    else if (w = u.apply(null, arguments), h++, r) {
      const v = d?.deref?.() ?? d;
      v != null && r(v, w) && (w = v, h !== 0 && h--), d = typeof w == "object" && w !== null || typeof w == "function" ? new x1(w) : w;
    }
    return j.s = em, j.v = w, w;
  }
  return y.clearCache = () => {
    s = uc(), y.resetResultsCount();
  }, y.resultsCount = () => h, y.resetResultsCount = () => {
    h = 0;
  }, y;
}
function Q1(u, ...c) {
  const s = typeof u == "function" ? {
    memoize: u,
    memoizeOptions: c
  } : u, r = (...d) => {
    let h = 0, y = 0, C, D = {}, j = d.pop();
    typeof j == "object" && (D = j, j = d.pop()), C1(
      j,
      `createSelector expects an output function after the inputs, but received: [${typeof j}]`
    );
    const w = {
      ...s,
      ...D
    }, {
      memoize: v,
      memoizeOptions: E = [],
      argsMemoize: G = Ec,
      argsMemoizeOptions: N = []
    } = w, X = tm(E), O = tm(N), L = R1(d), K = v(function() {
      return h++, j.apply(
        null,
        arguments
      );
    }, ...X), p = G(function() {
      y++;
      const b = U1(
        L,
        arguments
      );
      return C = K.apply(null, b), C;
    }, ...O);
    return Object.assign(p, {
      resultFunc: j,
      memoizedResultFunc: K,
      dependencies: L,
      dependencyRecomputations: () => y,
      resetDependencyRecomputations: () => {
        y = 0;
      },
      lastResult: () => C,
      recomputations: () => h,
      resetRecomputations: () => {
        h = 0;
      },
      memoize: v,
      argsMemoize: G
    });
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Or = /* @__PURE__ */ Q1(Ec), B1 = Object.assign(
  (u, c = Or) => {
    O1(
      u,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof u}`
    );
    const s = Object.keys(u), r = s.map(
      (h) => u[h]
    );
    return c(
      r,
      (...h) => h.reduce((y, C, D) => (y[s[D]] = C, y), {})
    );
  },
  { withTypes: () => B1 }
);
function Zm(u) {
  return ({ dispatch: s, getState: r }) => (d) => (h) => typeof h == "function" ? h(s, r, u) : d(h);
}
var H1 = Zm(), Y1 = Zm, w1 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? yc : yc.apply(null, arguments);
}, G1 = (u) => u && typeof u.match == "function";
function Je(u, c) {
  function s(...r) {
    if (c) {
      let d = c(...r);
      if (!d)
        throw new Error(Le(0));
      return {
        type: u,
        payload: d.payload,
        ..."meta" in d && {
          meta: d.meta
        },
        ..."error" in d && {
          error: d.error
        }
      };
    }
    return {
      type: u,
      payload: r[0]
    };
  }
  return s.toString = () => `${u}`, s.type = u, s.match = (r) => qm(r) && r.type === u, s;
}
var Km = class Su extends Array {
  constructor(...c) {
    super(...c), Object.setPrototypeOf(this, Su.prototype);
  }
  static get [Symbol.species]() {
    return Su;
  }
  concat(...c) {
    return super.concat.apply(this, c);
  }
  prepend(...c) {
    return c.length === 1 && Array.isArray(c[0]) ? new Su(...c[0].concat(this)) : new Su(...c.concat(this));
  }
};
function lm(u) {
  return Ne(u) ? Hu(u, () => {
  }) : u;
}
function ic(u, c, s) {
  return u.has(c) ? u.get(c) : u.set(c, s(c)).get(c);
}
function L1(u) {
  return typeof u == "boolean";
}
var V1 = () => function(c) {
  const {
    thunk: s = !0,
    immutableCheck: r = !0,
    serializableCheck: d = !0,
    actionCreatorCheck: h = !0
  } = c ?? {};
  let y = new Km();
  return s && (L1(s) ? y.push(H1) : y.push(Y1(s.extraArgument))), y;
}, Cc = "RTK_autoBatch", yu = () => (u) => ({
  payload: u,
  meta: {
    [Cc]: !0
  }
}), nm = (u) => (c) => {
  setTimeout(c, u);
}, X1 = (u = {
  type: "raf"
}) => (c) => (...s) => {
  const r = c(...s);
  let d = !0, h = !1, y = !1;
  const C = /* @__PURE__ */ new Set(), D = u.type === "tick" ? queueMicrotask : u.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : nm(10)
  ) : u.type === "callback" ? u.queueNotification : nm(u.timeout), j = () => {
    y = !1, h && (h = !1, C.forEach((w) => w()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(w) {
      const v = () => d && w(), E = r.subscribe(v);
      return C.add(w), () => {
        E(), C.delete(w);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(w) {
      try {
        return d = !w?.meta?.[Cc], h = !d, h && (y || (y = !0, D(j))), r.dispatch(w);
      } finally {
        d = !0;
      }
    }
  });
}, Z1 = (u) => function(s) {
  const {
    autoBatch: r = !0
  } = s ?? {};
  let d = new Km(u);
  return r && d.push(X1(typeof r == "object" ? r : void 0)), d;
};
function K1(u) {
  const c = V1(), {
    reducer: s = void 0,
    middleware: r,
    devTools: d = !0,
    preloadedState: h = void 0,
    enhancers: y = void 0
  } = u || {};
  let C;
  if (typeof s == "function")
    C = s;
  else if (Pl(s))
    C = xm(s);
  else
    throw new Error(Le(1));
  let D;
  typeof r == "function" ? D = r(c) : D = c();
  let j = yc;
  d && (j = w1({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !1,
    ...typeof d == "object" && d
  }));
  const w = r1(...D), v = Z1(w);
  let E = typeof y == "function" ? y(v) : v();
  const G = j(...E);
  return jm(C, h, G);
}
function Jm(u) {
  const c = {}, s = [];
  let r;
  const d = {
    addCase(h, y) {
      const C = typeof h == "string" ? h : h.type;
      if (!C)
        throw new Error(Le(28));
      if (C in c)
        throw new Error(Le(29));
      return c[C] = y, d;
    },
    addAsyncThunk(h, y) {
      return y.pending && (c[h.pending.type] = y.pending), y.rejected && (c[h.rejected.type] = y.rejected), y.fulfilled && (c[h.fulfilled.type] = y.fulfilled), y.settled && s.push({
        matcher: h.settled,
        reducer: y.settled
      }), d;
    },
    addMatcher(h, y) {
      return s.push({
        matcher: h,
        reducer: y
      }), d;
    },
    addDefaultCase(h) {
      return r = h, d;
    }
  };
  return u(d), [c, s, r];
}
function J1(u) {
  return typeof u == "function";
}
function k1(u, c) {
  let [s, r, d] = Jm(c), h;
  if (J1(u))
    h = () => lm(u());
  else {
    const C = lm(u);
    h = () => C;
  }
  function y(C = h(), D) {
    let j = [s[D.type], ...r.filter(({
      matcher: w
    }) => w(D)).map(({
      reducer: w
    }) => w)];
    return j.filter((w) => !!w).length === 0 && (j = [d]), j.reduce((w, v) => {
      if (v)
        if (Oe(w)) {
          const G = v(w, D);
          return G === void 0 ? w : G;
        } else {
          if (Ne(w))
            return Hu(w, (E) => v(E, D));
          {
            const E = v(w, D);
            if (E === void 0) {
              if (w === null)
                return w;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return E;
          }
        }
      return w;
    }, C);
  }
  return y.getInitialState = h, y;
}
var km = (u, c) => G1(u) ? u.match(c) : u(c);
function Al(...u) {
  return (c) => u.some((s) => km(s, c));
}
function Mu(...u) {
  return (c) => u.every((s) => km(s, c));
}
function Oc(u, c) {
  if (!u || !u.meta) return !1;
  const s = typeof u.meta.requestId == "string", r = c.indexOf(u.meta.requestStatus) > -1;
  return s && r;
}
function Yu(u) {
  return typeof u[0] == "function" && "pending" in u[0] && "fulfilled" in u[0] && "rejected" in u[0];
}
function Nr(...u) {
  return u.length === 0 ? (c) => Oc(c, ["pending"]) : Yu(u) ? Al(...u.map((c) => c.pending)) : Nr()(u[0]);
}
function pa(...u) {
  return u.length === 0 ? (c) => Oc(c, ["rejected"]) : Yu(u) ? Al(...u.map((c) => c.rejected)) : pa()(u[0]);
}
function Nc(...u) {
  const c = (s) => s && s.meta && s.meta.rejectedWithValue;
  return u.length === 0 ? Mu(pa(...u), c) : Yu(u) ? Mu(pa(...u), c) : Nc()(u[0]);
}
function tn(...u) {
  return u.length === 0 ? (c) => Oc(c, ["fulfilled"]) : Yu(u) ? Al(...u.map((c) => c.fulfilled)) : tn()(u[0]);
}
function pr(...u) {
  return u.length === 0 ? (c) => Oc(c, ["pending", "fulfilled", "rejected"]) : Yu(u) ? Al(...u.flatMap((c) => [c.pending, c.rejected, c.fulfilled])) : pr()(u[0]);
}
var F1 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Rr = (u = 21) => {
  let c = "", s = u;
  for (; s--; )
    c += F1[Math.random() * 64 | 0];
  return c;
}, W1 = ["name", "message", "stack", "code"], ur = class {
  constructor(u, c) {
    this.payload = u, this.meta = c;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
}, am = class {
  constructor(u, c) {
    this.payload = u, this.meta = c;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
}, $1 = (u) => {
  if (typeof u == "object" && u !== null) {
    const c = {};
    for (const s of W1)
      typeof u[s] == "string" && (c[s] = u[s]);
    return c;
  }
  return {
    message: String(u)
  };
}, um = "External signal was aborted", im = /* @__PURE__ */ (() => {
  function u(c, s, r) {
    const d = Je(c + "/fulfilled", (D, j, w, v) => ({
      payload: D,
      meta: {
        ...v || {},
        arg: w,
        requestId: j,
        requestStatus: "fulfilled"
      }
    })), h = Je(c + "/pending", (D, j, w) => ({
      payload: void 0,
      meta: {
        ...w || {},
        arg: j,
        requestId: D,
        requestStatus: "pending"
      }
    })), y = Je(c + "/rejected", (D, j, w, v, E) => ({
      payload: v,
      error: (r && r.serializeError || $1)(D || "Rejected"),
      meta: {
        ...E || {},
        arg: w,
        requestId: j,
        rejectedWithValue: !!v,
        requestStatus: "rejected",
        aborted: D?.name === "AbortError",
        condition: D?.name === "ConditionError"
      }
    }));
    function C(D, {
      signal: j
    } = {}) {
      return (w, v, E) => {
        const G = r?.idGenerator ? r.idGenerator(D) : Rr(), N = new AbortController();
        let X, O;
        function L(p) {
          O = p, N.abort();
        }
        j && (j.aborted ? L(um) : j.addEventListener("abort", () => L(um), {
          once: !0
        }));
        const K = (async function() {
          let p;
          try {
            let b = r?.condition?.(D, {
              getState: v,
              extra: E
            });
            if (P1(b) && (b = await b), b === !1 || N.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const _ = new Promise((q, H) => {
              X = () => {
                H({
                  name: "AbortError",
                  message: O || "Aborted"
                });
              }, N.signal.addEventListener("abort", X, {
                once: !0
              });
            });
            w(h(G, D, r?.getPendingMeta?.({
              requestId: G,
              arg: D
            }, {
              getState: v,
              extra: E
            }))), p = await Promise.race([_, Promise.resolve(s(D, {
              dispatch: w,
              getState: v,
              extra: E,
              requestId: G,
              signal: N.signal,
              abort: L,
              rejectWithValue: (q, H) => new ur(q, H),
              fulfillWithValue: (q, H) => new am(q, H)
            })).then((q) => {
              if (q instanceof ur)
                throw q;
              return q instanceof am ? d(q.payload, G, D, q.meta) : d(q, G, D);
            })]);
          } catch (b) {
            p = b instanceof ur ? y(null, G, D, b.payload, b.meta) : y(b, G, D);
          } finally {
            X && N.signal.removeEventListener("abort", X);
          }
          return r && !r.dispatchConditionRejection && y.match(p) && p.meta.condition || w(p), p;
        })();
        return Object.assign(K, {
          abort: L,
          requestId: G,
          arg: D,
          unwrap() {
            return K.then(I1);
          }
        });
      };
    }
    return Object.assign(C, {
      pending: h,
      rejected: y,
      fulfilled: d,
      settled: Al(y, d),
      typePrefix: c
    });
  }
  return u.withTypes = () => u, u;
})();
function I1(u) {
  if (u.meta && u.meta.rejectedWithValue)
    throw u.payload;
  if (u.error)
    throw u.error;
  return u.payload;
}
function P1(u) {
  return u !== null && typeof u == "object" && typeof u.then == "function";
}
var tg = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function eg(u, c) {
  return `${u}/${c}`;
}
function lg({
  creators: u
} = {}) {
  const c = u?.asyncThunk?.[tg];
  return function(r) {
    const {
      name: d,
      reducerPath: h = d
    } = r;
    if (!d)
      throw new Error(Le(11));
    const y = (typeof r.reducers == "function" ? r.reducers(ag()) : r.reducers) || {}, C = Object.keys(y), D = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, j = {
      addCase(p, T) {
        const b = typeof p == "string" ? p : p.type;
        if (!b)
          throw new Error(Le(12));
        if (b in D.sliceCaseReducersByType)
          throw new Error(Le(13));
        return D.sliceCaseReducersByType[b] = T, j;
      },
      addMatcher(p, T) {
        return D.sliceMatchers.push({
          matcher: p,
          reducer: T
        }), j;
      },
      exposeAction(p, T) {
        return D.actionCreators[p] = T, j;
      },
      exposeCaseReducer(p, T) {
        return D.sliceCaseReducersByName[p] = T, j;
      }
    };
    C.forEach((p) => {
      const T = y[p], b = {
        reducerName: p,
        type: eg(d, p),
        createNotation: typeof r.reducers == "function"
      };
      ig(T) ? fg(b, T, j, c) : ug(b, T, j);
    });
    function w() {
      const [p = {}, T = [], b = void 0] = typeof r.extraReducers == "function" ? Jm(r.extraReducers) : [r.extraReducers], _ = {
        ...p,
        ...D.sliceCaseReducersByType
      };
      return k1(r.initialState, (q) => {
        for (let H in _)
          q.addCase(H, _[H]);
        for (let H of D.sliceMatchers)
          q.addMatcher(H.matcher, H.reducer);
        for (let H of T)
          q.addMatcher(H.matcher, H.reducer);
        b && q.addDefaultCase(b);
      });
    }
    const v = (p) => p, E = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new WeakMap();
    let N;
    function X(p, T) {
      return N || (N = w()), N(p, T);
    }
    function O() {
      return N || (N = w()), N.getInitialState();
    }
    function L(p, T = !1) {
      function b(q) {
        let H = q[p];
        return typeof H > "u" && T && (H = ic(G, b, O)), H;
      }
      function _(q = v) {
        const H = ic(E, T, () => /* @__PURE__ */ new WeakMap());
        return ic(H, q, () => {
          const Y = {};
          for (const [R, S] of Object.entries(r.selectors ?? {}))
            Y[R] = ng(S, q, () => ic(G, q, O), T);
          return Y;
        });
      }
      return {
        reducerPath: p,
        getSelectors: _,
        get selectors() {
          return _(b);
        },
        selectSlice: b
      };
    }
    const K = {
      name: d,
      reducer: X,
      actions: D.actionCreators,
      caseReducers: D.sliceCaseReducersByName,
      getInitialState: O,
      ...L(h),
      injectInto(p, {
        reducerPath: T,
        ...b
      } = {}) {
        const _ = T ?? h;
        return p.inject({
          reducerPath: _,
          reducer: X
        }, b), {
          ...K,
          ...L(_, !0)
        };
      }
    };
    return K;
  };
}
function ng(u, c, s, r) {
  function d(h, ...y) {
    let C = c(h);
    return typeof C > "u" && r && (C = s()), u(C, ...y);
  }
  return d.unwrapped = u, d;
}
var $l = /* @__PURE__ */ lg();
function ag() {
  function u(c, s) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: c,
      ...s
    };
  }
  return u.withTypes = () => u, {
    reducer(c) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [c.name](...s) {
          return c(...s);
        }
      }[c.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(c, s) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: c,
        reducer: s
      };
    },
    asyncThunk: u
  };
}
function ug({
  type: u,
  reducerName: c,
  createNotation: s
}, r, d) {
  let h, y;
  if ("reducer" in r) {
    if (s && !cg(r))
      throw new Error(Le(17));
    h = r.reducer, y = r.prepare;
  } else
    h = r;
  d.addCase(u, h).exposeCaseReducer(c, h).exposeAction(c, y ? Je(u, y) : Je(u));
}
function ig(u) {
  return u._reducerDefinitionType === "asyncThunk";
}
function cg(u) {
  return u._reducerDefinitionType === "reducerWithPrepare";
}
function fg({
  type: u,
  reducerName: c
}, s, r, d) {
  if (!d)
    throw new Error(Le(18));
  const {
    payloadCreator: h,
    fulfilled: y,
    pending: C,
    rejected: D,
    settled: j,
    options: w
  } = s, v = d(u, h, w);
  r.exposeAction(c, v), y && r.addCase(v.fulfilled, y), C && r.addCase(v.pending, C), D && r.addCase(v.rejected, D), j && r.addMatcher(v.settled, j), r.exposeCaseReducer(c, {
    fulfilled: y || cc,
    pending: C || cc,
    rejected: D || cc,
    settled: j || cc
  });
}
function cc() {
}
function Le(u) {
  return `Minified Redux Toolkit error #${u}; visit https://redux-toolkit.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
}
var sg = class extends Error {
  /**
   * The schema issues.
   */
  issues;
  /**
   * Creates a schema error with useful information.
   *
   * @param issues The schema issues.
   */
  constructor(u) {
    super(u[0].message), this.name = "SchemaError", this.issues = u;
  }
}, Fm = /* @__PURE__ */ ((u) => (u.uninitialized = "uninitialized", u.pending = "pending", u.fulfilled = "fulfilled", u.rejected = "rejected", u))(Fm || {}), El = "uninitialized", Sr = "pending", bu = "fulfilled", _u = "rejected";
function cm(u) {
  return {
    status: u,
    isUninitialized: u === El,
    isLoading: u === Sr,
    isSuccess: u === bu,
    isError: u === _u
  };
}
var fm = Pl;
function Ur(u, c) {
  if (u === c || !(fm(u) && fm(c) || Array.isArray(u) && Array.isArray(c)))
    return c;
  const s = Object.keys(c), r = Object.keys(u);
  let d = s.length === r.length;
  const h = Array.isArray(c) ? [] : {};
  for (const y of s)
    h[y] = Ur(u[y], c[y]), d && (d = u[y] === h[y]);
  return d ? u : h;
}
function br(u, c, s) {
  return u.reduce((r, d, h) => (c(d, h) && r.push(s(d, h)), r), []).flat();
}
function rg(u) {
  return new RegExp("(^|:)//").test(u);
}
function og() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function jr(u) {
  return u != null;
}
function sm(u) {
  return [...u?.values() ?? []].filter(jr);
}
function dg() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
var hg = (u) => u.replace(/\/$/, ""), mg = (u) => u.replace(/^\//, "");
function yg(u, c) {
  if (!u)
    return c;
  if (!c)
    return u;
  if (rg(c))
    return c;
  const s = u.endsWith("/") || !c.startsWith("?") ? "/" : "";
  return u = hg(u), c = mg(c), `${u}${s}${c}`;
}
function Tc(u, c, s) {
  return u.has(c) ? u.get(c) : u.set(c, s(c)).get(c);
}
var _r = () => /* @__PURE__ */ new Map(), vg = (u) => {
  const c = new AbortController();
  return setTimeout(() => {
    const s = "signal timed out", r = "TimeoutError";
    c.abort(
      // some environments (React Native, Node) don't have DOMException
      typeof DOMException < "u" ? new DOMException(s, r) : Object.assign(new Error(s), {
        name: r
      })
    );
  }, u), c.signal;
}, gg = (...u) => {
  for (const s of u) if (s.aborted) return AbortSignal.abort(s.reason);
  const c = new AbortController();
  for (const s of u)
    s.addEventListener("abort", () => c.abort(s.reason), {
      signal: c.signal,
      once: !0
    });
  return c.signal;
}, rm = (...u) => fetch(...u), pg = (u) => u.status >= 200 && u.status <= 299, Sg = (u) => (
  /*applicat*/
  /ion\/(vnd\.api\+)?json/.test(u.get("content-type") || "")
);
function om(u) {
  if (!Pl(u))
    return u;
  const c = {
    ...u
  };
  for (const [s, r] of Object.entries(c))
    r === void 0 && delete c[s];
  return c;
}
var bg = (u) => typeof u == "object" && (Pl(u) || Array.isArray(u) || typeof u.toJSON == "function");
function _g({
  baseUrl: u,
  prepareHeaders: c = (v) => v,
  fetchFn: s = rm,
  paramsSerializer: r,
  isJsonContentType: d = Sg,
  jsonContentType: h = "application/json",
  jsonReplacer: y,
  timeout: C,
  responseHandler: D,
  validateStatus: j,
  ...w
} = {}) {
  return typeof fetch > "u" && s === rm && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), async (E, G, N) => {
    const {
      getState: X,
      extra: O,
      endpoint: L,
      forced: K,
      type: p
    } = G;
    let T, {
      url: b,
      headers: _ = new Headers(w.headers),
      params: q = void 0,
      responseHandler: H = D ?? "json",
      validateStatus: Y = j ?? pg,
      timeout: R = C,
      ...S
    } = typeof E == "string" ? {
      url: E
    } : E, A = {
      ...w,
      signal: R ? gg(G.signal, vg(R)) : G.signal,
      ...S
    };
    _ = new Headers(om(_)), A.headers = await c(_, {
      getState: X,
      arg: E,
      extra: O,
      endpoint: L,
      forced: K,
      type: p,
      extraOptions: N
    }) || _;
    const B = bg(A.body);
    if (A.body != null && !B && typeof A.body != "string" && A.headers.delete("content-type"), !A.headers.has("content-type") && B && A.headers.set("content-type", h), B && d(A.headers) && (A.body = JSON.stringify(A.body, y)), A.headers.has("accept") || (H === "json" ? A.headers.set("accept", "application/json") : H === "text" && A.headers.set("accept", "text/plain, text/html, */*")), q) {
      const et = ~b.indexOf("?") ? "&" : "?", nt = r ? r(q) : new URLSearchParams(om(q));
      b += et + nt;
    }
    b = yg(u, b);
    const J = new Request(b, A);
    T = {
      request: new Request(b, A)
    };
    let M;
    try {
      M = await s(J);
    } catch (et) {
      return {
        error: {
          status: (et instanceof Error || typeof DOMException < "u" && et instanceof DOMException) && et.name === "TimeoutError" ? "TIMEOUT_ERROR" : "FETCH_ERROR",
          error: String(et)
        },
        meta: T
      };
    }
    const k = M.clone();
    T.response = k;
    let W, P = "";
    try {
      let et;
      if (await Promise.all([
        v(M, H).then((nt) => W = nt, (nt) => et = nt),
        // see https://github.com/node-fetch/node-fetch/issues/665#issuecomment-538995182
        // we *have* to "use up" both streams at the same time or they will stop running in node-fetch scenarios
        k.text().then((nt) => P = nt, () => {
        })
      ]), et) throw et;
    } catch (et) {
      return {
        error: {
          status: "PARSING_ERROR",
          originalStatus: M.status,
          data: P,
          error: String(et)
        },
        meta: T
      };
    }
    return Y(M, W) ? {
      data: W,
      meta: T
    } : {
      error: {
        status: M.status,
        data: W
      },
      meta: T
    };
  };
  async function v(E, G) {
    if (typeof G == "function")
      return G(E);
    if (G === "content-type" && (G = d(E.headers) ? "json" : "text"), G === "json") {
      const N = await E.text();
      return N.length ? JSON.parse(N) : null;
    }
    return E.text();
  }
}
var dm = class {
  constructor(u, c = void 0) {
    this.value = u, this.meta = c;
  }
}, Rc = "__rtkq/", Ag = "online", Eg = "offline", Wm = "focused", xr = /* @__PURE__ */ Je(`${Rc}${Wm}`), $m = /* @__PURE__ */ Je(`${Rc}un${Wm}`), qr = /* @__PURE__ */ Je(`${Rc}${Ag}`), Im = /* @__PURE__ */ Je(`${Rc}${Eg}`), wu = "query", Pm = "mutation", ty = "infinitequery";
function Uc(u) {
  return u.type === wu;
}
function Tg(u) {
  return u.type === Pm;
}
function jc(u) {
  return u.type === ty;
}
function Mc(u) {
  return Uc(u) || jc(u);
}
function Qr(u, c, s, r, d, h) {
  const y = Mg(u) ? u(c, s, r, d) : u;
  return y ? br(y, jr, (C) => h(ey(C))) : [];
}
function Mg(u) {
  return typeof u == "function";
}
function ey(u) {
  return typeof u == "string" ? {
    type: u
  } : u;
}
function zg(u, c) {
  return u.catch(c);
}
var Sa = (u, c) => u.endpointDefinitions[c], Ru = /* @__PURE__ */ Symbol("forceQueryFn"), Ar = (u) => typeof u[Ru] == "function";
function Dg({
  serializeQueryArgs: u,
  queryThunk: c,
  infiniteQueryThunk: s,
  mutationThunk: r,
  api: d,
  context: h,
  getInternalState: y
}) {
  const C = (T) => y(T)?.runningQueries, D = (T) => y(T)?.runningMutations, {
    unsubscribeQueryResult: j,
    removeMutationResult: w,
    updateSubscriptionOptions: v
  } = d.internalActions;
  return {
    buildInitiateQuery: L,
    buildInitiateInfiniteQuery: K,
    buildInitiateMutation: p,
    getRunningQueryThunk: E,
    getRunningMutationThunk: G,
    getRunningQueriesThunk: N,
    getRunningMutationsThunk: X
  };
  function E(T, b) {
    return (_) => {
      const q = Sa(h, T), H = u({
        queryArgs: b,
        endpointDefinition: q,
        endpointName: T
      });
      return C(_)?.get(H);
    };
  }
  function G(T, b) {
    return (_) => D(_)?.get(b);
  }
  function N() {
    return (T) => sm(C(T));
  }
  function X() {
    return (T) => sm(D(T));
  }
  function O(T, b) {
    const _ = (q, {
      subscribe: H = !0,
      forceRefetch: Y,
      subscriptionOptions: R,
      [Ru]: S,
      ...A
    } = {}) => (B, J) => {
      const tt = u({
        queryArgs: q,
        endpointDefinition: b,
        endpointName: T
      });
      let M;
      const k = {
        ...A,
        type: wu,
        subscribe: H,
        forceRefetch: Y,
        subscriptionOptions: R,
        endpointName: T,
        originalArgs: q,
        queryCacheKey: tt,
        [Ru]: S
      };
      if (Uc(b))
        M = c(k);
      else {
        const {
          direction: rt,
          initialPageParam: Rt,
          refetchCachedPages: ot
        } = A;
        M = s({
          ...k,
          // Supply these even if undefined. This helps with a field existence
          // check over in `buildSlice.ts`
          direction: rt,
          initialPageParam: Rt,
          refetchCachedPages: ot
        });
      }
      const W = d.endpoints[T].select(q), P = B(M), et = W(J()), {
        requestId: nt,
        abort: st
      } = P, ut = et.requestId !== nt, it = C(B)?.get(tt), _t = () => W(J()), bt = Object.assign(S ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        P.then(_t)
      ) : ut && !it ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(et)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([it, P]).then(_t)
      ), {
        arg: q,
        requestId: nt,
        subscriptionOptions: R,
        queryCacheKey: tt,
        abort: st,
        async unwrap() {
          const rt = await bt;
          if (rt.isError)
            throw rt.error;
          return rt.data;
        },
        refetch: (rt) => B(_(q, {
          subscribe: !1,
          forceRefetch: !0,
          ...rt
        })),
        unsubscribe() {
          H && B(j({
            queryCacheKey: tt,
            requestId: nt
          }));
        },
        updateSubscriptionOptions(rt) {
          bt.subscriptionOptions = rt, B(v({
            endpointName: T,
            requestId: nt,
            queryCacheKey: tt,
            options: rt
          }));
        }
      });
      if (!it && !ut && !S) {
        const rt = C(B);
        rt.set(tt, bt), bt.then(() => {
          rt.delete(tt);
        });
      }
      return bt;
    };
    return _;
  }
  function L(T, b) {
    return O(T, b);
  }
  function K(T, b) {
    return O(T, b);
  }
  function p(T) {
    return (b, {
      track: _ = !0,
      fixedCacheKey: q
    } = {}) => (H, Y) => {
      const R = r({
        type: "mutation",
        endpointName: T,
        originalArgs: b,
        track: _,
        fixedCacheKey: q
      }), S = H(R), {
        requestId: A,
        abort: B,
        unwrap: J
      } = S, tt = zg(S.unwrap().then((P) => ({
        data: P
      })), (P) => ({
        error: P
      })), M = () => {
        H(w({
          requestId: A,
          fixedCacheKey: q
        }));
      }, k = Object.assign(tt, {
        arg: S.arg,
        requestId: A,
        abort: B,
        unwrap: J,
        reset: M
      }), W = D(H);
      return W.set(A, k), k.then(() => {
        W.delete(A);
      }), q && (W.set(q, k), k.then(() => {
        W.get(q) === k && W.delete(q);
      })), k;
    };
  }
}
var ly = class extends sg {
  constructor(u, c, s, r) {
    super(u), this.value = c, this.schemaName = s, this._bqMeta = r;
  }
}, An = (u, c) => Array.isArray(u) ? u.includes(c) : !!u;
async function En(u, c, s, r) {
  const d = await u["~standard"].validate(c);
  if (d.issues)
    throw new ly(d.issues, c, s, r);
  return d.value;
}
function hm(u) {
  return u;
}
var vu = (u = {}) => ({
  ...u,
  [Cc]: !0
});
function Cg({
  reducerPath: u,
  baseQuery: c,
  context: {
    endpointDefinitions: s
  },
  serializeQueryArgs: r,
  api: d,
  assertTagType: h,
  selectors: y,
  onSchemaFailure: C,
  catchSchemaFailure: D,
  skipSchemaValidation: j
}) {
  const w = (S, A, B, J) => (tt, M) => {
    const k = s[S], W = r({
      queryArgs: A,
      endpointDefinition: k,
      endpointName: S
    });
    if (tt(d.internalActions.queryResultPatched({
      queryCacheKey: W,
      patches: B
    })), !J)
      return;
    const P = d.endpoints[S].select(A)(
      // Work around TS 4.1 mismatch
      M()
    ), et = Qr(k.providesTags, P.data, void 0, A, {}, h);
    tt(d.internalActions.updateProvidedBy([{
      queryCacheKey: W,
      providedTags: et
    }]));
  };
  function v(S, A, B = 0) {
    const J = [A, ...S];
    return B && J.length > B ? J.slice(0, -1) : J;
  }
  function E(S, A, B = 0) {
    const J = [...S, A];
    return B && J.length > B ? J.slice(1) : J;
  }
  const G = (S, A, B, J = !0) => (tt, M) => {
    const W = d.endpoints[S].select(A)(
      // Work around TS 4.1 mismatch
      M()
    ), P = {
      patches: [],
      inversePatches: [],
      undo: () => tt(d.util.patchQueryData(S, A, P.inversePatches, J))
    };
    if (W.status === El)
      return P;
    let et;
    if ("data" in W)
      if (Ne(W.data)) {
        const [nt, st, ut] = Xm(W.data, B);
        P.patches.push(...st), P.inversePatches.push(...ut), et = nt;
      } else
        et = B(W.data), P.patches.push({
          op: "replace",
          path: [],
          value: et
        }), P.inversePatches.push({
          op: "replace",
          path: [],
          value: W.data
        });
    return P.patches.length === 0 || tt(d.util.patchQueryData(S, A, P.patches, J)), P;
  }, N = (S, A, B) => (J) => J(d.endpoints[S].initiate(A, {
    subscribe: !1,
    forceRefetch: !0,
    [Ru]: () => ({
      data: B
    })
  })), X = (S, A) => S.query && S[A] ? S[A] : hm, O = async (S, {
    signal: A,
    abort: B,
    rejectWithValue: J,
    fulfillWithValue: tt,
    dispatch: M,
    getState: k,
    extra: W
  }) => {
    const P = s[S.endpointName], {
      metaSchema: et,
      skipSchemaValidation: nt = j
    } = P, st = S.type === wu;
    try {
      let ut = hm;
      const it = {
        signal: A,
        abort: B,
        dispatch: M,
        getState: k,
        extra: W,
        endpoint: S.endpointName,
        type: S.type,
        forced: st ? L(S, k()) : void 0,
        queryCacheKey: st ? S.queryCacheKey : void 0
      }, _t = st ? S[Ru] : void 0;
      let bt;
      const rt = async (ot, vt, ce, $t) => {
        if (vt == null && ot.pages.length)
          return Promise.resolve({
            data: ot
          });
        const tl = {
          queryArg: S.originalArgs,
          pageParam: vt
        }, It = await Rt(tl), ke = $t ? v : E;
        return {
          data: {
            pages: ke(ot.pages, It.data, ce),
            pageParams: ke(ot.pageParams, vt, ce)
          },
          meta: It.meta
        };
      };
      async function Rt(ot) {
        let vt;
        const {
          extraOptions: ce,
          argSchema: $t,
          rawResponseSchema: tl,
          responseSchema: It
        } = P;
        if ($t && !An(nt, "arg") && (ot = await En(
          $t,
          ot,
          "argSchema",
          {}
          // we don't have a meta yet, so we can't pass it
        )), _t ? vt = _t() : P.query ? (ut = X(P, "transformResponse"), vt = await c(P.query(ot), it, ce)) : vt = await P.queryFn(ot, it, ce, (Tl) => c(Tl, it, ce)), typeof process < "u", vt.error) throw new dm(vt.error, vt.meta);
        let {
          data: ke
        } = vt;
        tl && !An(nt, "rawResponse") && (ke = await En(tl, vt.data, "rawResponseSchema", vt.meta));
        let Re = await ut(ke, vt.meta, ot);
        return It && !An(nt, "response") && (Re = await En(It, Re, "responseSchema", vt.meta)), {
          ...vt,
          data: Re
        };
      }
      if (st && "infiniteQueryOptions" in P) {
        const {
          infiniteQueryOptions: ot
        } = P, {
          maxPages: vt = 1 / 0
        } = ot, ce = S.refetchCachedPages ?? ot.refetchCachedPages ?? !0;
        let $t;
        const tl = {
          pages: [],
          pageParams: []
        }, It = y.selectQueryEntry(k(), S.queryCacheKey)?.data, Re = /* arg.forceRefetch */ L(S, k()) && !S.direction || !It ? tl : It;
        if ("direction" in S && S.direction && Re.pages.length) {
          const Tl = S.direction === "backward", en = (Tl ? ny : Er)(ot, Re, S.originalArgs);
          $t = await rt(Re, en, vt, Tl);
        } else {
          const {
            initialPageParam: Tl = ot.initialPageParam
          } = S, On = It?.pageParams ?? [], en = On[0] ?? Tl, _a = On.length;
          if ($t = await rt(Re, en, vt), _t && ($t = {
            data: $t.data.pages[0]
          }), ce)
            for (let Nn = 1; Nn < _a; Nn++) {
              const Qc = Er(ot, $t.data, S.originalArgs);
              $t = await rt($t.data, Qc, vt);
            }
        }
        bt = $t;
      } else
        bt = await Rt(S.originalArgs);
      return et && !An(nt, "meta") && bt.meta && (bt.meta = await En(et, bt.meta, "metaSchema", bt.meta)), tt(bt.data, vu({
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: bt.meta
      }));
    } catch (ut) {
      let it = ut;
      if (it instanceof dm) {
        let _t = X(P, "transformErrorResponse");
        const {
          rawErrorResponseSchema: bt,
          errorResponseSchema: rt
        } = P;
        let {
          value: Rt,
          meta: ot
        } = it;
        try {
          bt && !An(nt, "rawErrorResponse") && (Rt = await En(bt, Rt, "rawErrorResponseSchema", ot)), et && !An(nt, "meta") && (ot = await En(et, ot, "metaSchema", ot));
          let vt = await _t(Rt, ot, S.originalArgs);
          return rt && !An(nt, "errorResponse") && (vt = await En(rt, vt, "errorResponseSchema", ot)), J(vt, vu({
            baseQueryMeta: ot
          }));
        } catch (vt) {
          it = vt;
        }
      }
      try {
        if (it instanceof ly) {
          const _t = {
            endpoint: S.endpointName,
            arg: S.originalArgs,
            type: S.type,
            queryCacheKey: st ? S.queryCacheKey : void 0
          };
          P.onSchemaFailure?.(it, _t), C?.(it, _t);
          const {
            catchSchemaFailure: bt = D
          } = P;
          if (bt)
            return J(bt(it, _t), vu({
              baseQueryMeta: it._bqMeta
            }));
        }
      } catch (_t) {
        it = _t;
      }
      throw console.error(it), it;
    }
  };
  function L(S, A) {
    const B = y.selectQueryEntry(A, S.queryCacheKey), J = y.selectConfig(A).refetchOnMountOrArgChange, tt = B?.fulfilledTimeStamp, M = S.forceRefetch ?? (S.subscribe && J);
    return M ? M === !0 || (Number(/* @__PURE__ */ new Date()) - Number(tt)) / 1e3 >= M : !1;
  }
  const K = () => im(`${u}/executeQuery`, O, {
    getPendingMeta({
      arg: A
    }) {
      const B = s[A.endpointName];
      return vu({
        startedTimeStamp: Date.now(),
        ...jc(B) ? {
          direction: A.direction
        } : {}
      });
    },
    condition(A, {
      getState: B
    }) {
      const J = B(), tt = y.selectQueryEntry(J, A.queryCacheKey), M = tt?.fulfilledTimeStamp, k = A.originalArgs, W = tt?.originalArgs, P = s[A.endpointName], et = A.direction;
      return Ar(A) ? !0 : tt?.status === "pending" ? !1 : L(A, J) || Uc(P) && P?.forceRefetch?.({
        currentArg: k,
        previousArg: W,
        endpointState: tt,
        state: J
      }) ? !0 : !(M && !et);
    },
    dispatchConditionRejection: !0
  }), p = K(), T = K(), b = im(`${u}/executeMutation`, O, {
    getPendingMeta() {
      return vu({
        startedTimeStamp: Date.now()
      });
    }
  }), _ = (S) => "force" in S, q = (S) => "ifOlderThan" in S, H = (S, A, B = {}) => (J, tt) => {
    const M = _(B) && B.force, k = q(B) && B.ifOlderThan, W = (et = !0) => {
      const nt = {
        forceRefetch: et,
        subscribe: !1
      };
      return d.endpoints[S].initiate(A, nt);
    }, P = d.endpoints[S].select(A)(tt());
    if (M)
      J(W());
    else if (k) {
      const et = P?.fulfilledTimeStamp;
      if (!et) {
        J(W());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(et))) / 1e3 >= k && J(W());
    } else
      J(W(!1));
  };
  function Y(S) {
    return (A) => A?.meta?.arg?.endpointName === S;
  }
  function R(S, A) {
    return {
      matchPending: Mu(Nr(S), Y(A)),
      matchFulfilled: Mu(tn(S), Y(A)),
      matchRejected: Mu(pa(S), Y(A))
    };
  }
  return {
    queryThunk: p,
    mutationThunk: b,
    infiniteQueryThunk: T,
    prefetch: H,
    updateQueryData: G,
    upsertQueryData: N,
    patchQueryData: w,
    buildMatchThunkActions: R
  };
}
function Er(u, {
  pages: c,
  pageParams: s
}, r) {
  const d = c.length - 1;
  return u.getNextPageParam(c[d], c, s[d], s, r);
}
function ny(u, {
  pages: c,
  pageParams: s
}, r) {
  return u.getPreviousPageParam?.(c[0], c, s[0], s, r);
}
function ay(u, c, s, r) {
  return Qr(s[u.meta.arg.endpointName][c], tn(u) ? u.payload : void 0, Nc(u) ? u.payload : void 0, u.meta.arg.originalArgs, "baseQueryMeta" in u.meta ? u.meta.baseQueryMeta : void 0, r);
}
function mm(u) {
  return Oe(u) ? Lm(u) : u;
}
function fc(u, c, s) {
  const r = u[c];
  r && s(r);
}
function Uu(u) {
  return ("arg" in u ? u.arg.fixedCacheKey : u.fixedCacheKey) ?? u.requestId;
}
function ym(u, c, s) {
  const r = u[Uu(c)];
  r && s(r);
}
var sc = {};
function Og({
  reducerPath: u,
  queryThunk: c,
  mutationThunk: s,
  serializeQueryArgs: r,
  context: {
    endpointDefinitions: d,
    apiUid: h,
    extractRehydrationInfo: y,
    hasRehydrationInfo: C
  },
  assertTagType: D,
  config: j
}) {
  const w = Je(`${u}/resetApiState`);
  function v(Y, R, S, A) {
    Y[R.queryCacheKey] ??= {
      status: El,
      endpointName: R.endpointName
    }, fc(Y, R.queryCacheKey, (B) => {
      B.status = Sr, B.requestId = S && B.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        B.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        A.requestId
      ), R.originalArgs !== void 0 && (B.originalArgs = R.originalArgs), B.startedTimeStamp = A.startedTimeStamp;
      const J = d[A.arg.endpointName];
      jc(J) && "direction" in R && (B.direction = R.direction);
    });
  }
  function E(Y, R, S, A) {
    fc(Y, R.arg.queryCacheKey, (B) => {
      if (B.requestId !== R.requestId && !A) return;
      const {
        merge: J
      } = d[R.arg.endpointName];
      if (B.status = bu, J)
        if (B.data !== void 0) {
          const {
            fulfilledTimeStamp: tt,
            arg: M,
            baseQueryMeta: k,
            requestId: W
          } = R;
          let P = Hu(B.data, (et) => J(et, S, {
            arg: M.originalArgs,
            baseQueryMeta: k,
            fulfilledTimeStamp: tt,
            requestId: W
          }));
          B.data = P;
        } else
          B.data = S;
      else
        B.data = d[R.arg.endpointName].structuralSharing ?? !0 ? Ur(Oe(B.data) ? d1(B.data) : B.data, S) : S;
      delete B.error, B.fulfilledTimeStamp = R.fulfilledTimeStamp;
    });
  }
  const G = $l({
    name: `${u}/queries`,
    initialState: sc,
    reducers: {
      removeQueryResult: {
        reducer(Y, {
          payload: {
            queryCacheKey: R
          }
        }) {
          delete Y[R];
        },
        prepare: yu()
      },
      cacheEntriesUpserted: {
        reducer(Y, R) {
          for (const S of R.payload) {
            const {
              queryDescription: A,
              value: B
            } = S;
            v(Y, A, !0, {
              arg: A,
              requestId: R.meta.requestId,
              startedTimeStamp: R.meta.timestamp
            }), E(
              Y,
              {
                arg: A,
                requestId: R.meta.requestId,
                fulfilledTimeStamp: R.meta.timestamp,
                baseQueryMeta: {}
              },
              B,
              // We know we're upserting here
              !0
            );
          }
        },
        prepare: (Y) => ({
          payload: Y.map((A) => {
            const {
              endpointName: B,
              arg: J,
              value: tt
            } = A, M = d[B];
            return {
              queryDescription: {
                type: wu,
                endpointName: B,
                originalArgs: A.arg,
                queryCacheKey: r({
                  queryArgs: J,
                  endpointDefinition: M,
                  endpointName: B
                })
              },
              value: tt
            };
          }),
          meta: {
            [Cc]: !0,
            requestId: Rr(),
            timestamp: Date.now()
          }
        })
      },
      queryResultPatched: {
        reducer(Y, {
          payload: {
            queryCacheKey: R,
            patches: S
          }
        }) {
          fc(Y, R, (A) => {
            A.data = Ph(A.data, S.concat());
          });
        },
        prepare: yu()
      }
    },
    extraReducers(Y) {
      Y.addCase(c.pending, (R, {
        meta: S,
        meta: {
          arg: A
        }
      }) => {
        const B = Ar(A);
        v(R, A, B, S);
      }).addCase(c.fulfilled, (R, {
        meta: S,
        payload: A
      }) => {
        const B = Ar(S.arg);
        E(R, S, A, B);
      }).addCase(c.rejected, (R, {
        meta: {
          condition: S,
          arg: A,
          requestId: B
        },
        error: J,
        payload: tt
      }) => {
        fc(R, A.queryCacheKey, (M) => {
          if (!S) {
            if (M.requestId !== B) return;
            M.status = _u, M.error = tt ?? J;
          }
        });
      }).addMatcher(C, (R, S) => {
        const {
          queries: A
        } = y(S);
        for (const [B, J] of Object.entries(A))
          // do not rehydrate entries that were currently in flight.
          (J?.status === bu || J?.status === _u) && (R[B] = J);
      });
    }
  }), N = $l({
    name: `${u}/mutations`,
    initialState: sc,
    reducers: {
      removeMutationResult: {
        reducer(Y, {
          payload: R
        }) {
          const S = Uu(R);
          S in Y && delete Y[S];
        },
        prepare: yu()
      }
    },
    extraReducers(Y) {
      Y.addCase(s.pending, (R, {
        meta: S,
        meta: {
          requestId: A,
          arg: B,
          startedTimeStamp: J
        }
      }) => {
        B.track && (R[Uu(S)] = {
          requestId: A,
          status: Sr,
          endpointName: B.endpointName,
          startedTimeStamp: J
        });
      }).addCase(s.fulfilled, (R, {
        payload: S,
        meta: A
      }) => {
        A.arg.track && ym(R, A, (B) => {
          B.requestId === A.requestId && (B.status = bu, B.data = S, B.fulfilledTimeStamp = A.fulfilledTimeStamp);
        });
      }).addCase(s.rejected, (R, {
        payload: S,
        error: A,
        meta: B
      }) => {
        B.arg.track && ym(R, B, (J) => {
          J.requestId === B.requestId && (J.status = _u, J.error = S ?? A);
        });
      }).addMatcher(C, (R, S) => {
        const {
          mutations: A
        } = y(S);
        for (const [B, J] of Object.entries(A))
          // do not rehydrate entries that were currently in flight.
          (J?.status === bu || J?.status === _u) && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          B !== J?.requestId && (R[B] = J);
      });
    }
  }), X = {
    tags: {},
    keys: {}
  }, O = $l({
    name: `${u}/invalidation`,
    initialState: X,
    reducers: {
      updateProvidedBy: {
        reducer(Y, R) {
          for (const {
            queryCacheKey: S,
            providedTags: A
          } of R.payload) {
            L(Y, S);
            for (const {
              type: B,
              id: J
            } of A) {
              const tt = (Y.tags[B] ??= {})[J || "__internal_without_id"] ??= [];
              tt.includes(S) || tt.push(S);
            }
            Y.keys[S] = A;
          }
        },
        prepare: yu()
      }
    },
    extraReducers(Y) {
      Y.addCase(G.actions.removeQueryResult, (R, {
        payload: {
          queryCacheKey: S
        }
      }) => {
        L(R, S);
      }).addMatcher(C, (R, S) => {
        const {
          provided: A
        } = y(S);
        for (const [B, J] of Object.entries(A.tags ?? {}))
          for (const [tt, M] of Object.entries(J)) {
            const k = (R.tags[B] ??= {})[tt || "__internal_without_id"] ??= [];
            for (const W of M)
              k.includes(W) || k.push(W), R.keys[W] = A.keys[W];
          }
      }).addMatcher(Al(tn(c), Nc(c)), (R, S) => {
        K(R, [S]);
      }).addMatcher(G.actions.cacheEntriesUpserted.match, (R, S) => {
        const A = S.payload.map(({
          queryDescription: B,
          value: J
        }) => ({
          type: "UNKNOWN",
          payload: J,
          meta: {
            requestStatus: "fulfilled",
            requestId: "UNKNOWN",
            arg: B
          }
        }));
        K(R, A);
      });
    }
  });
  function L(Y, R) {
    const S = mm(Y.keys[R] ?? []);
    for (const A of S) {
      const B = A.type, J = A.id ?? "__internal_without_id", tt = Y.tags[B]?.[J];
      tt && (Y.tags[B][J] = mm(tt).filter((M) => M !== R));
    }
    delete Y.keys[R];
  }
  function K(Y, R) {
    const S = R.map((A) => {
      const B = ay(A, "providesTags", d, D), {
        queryCacheKey: J
      } = A.meta.arg;
      return {
        queryCacheKey: J,
        providedTags: B
      };
    });
    O.caseReducers.updateProvidedBy(Y, O.actions.updateProvidedBy(S));
  }
  const p = $l({
    name: `${u}/subscriptions`,
    initialState: sc,
    reducers: {
      updateSubscriptionOptions(Y, R) {
      },
      unsubscribeQueryResult(Y, R) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), T = $l({
    name: `${u}/internalSubscriptions`,
    initialState: sc,
    reducers: {
      subscriptionsUpdated: {
        reducer(Y, R) {
          return Ph(Y, R.payload);
        },
        prepare: yu()
      }
    }
  }), b = $l({
    name: `${u}/config`,
    initialState: {
      online: dg(),
      focused: og(),
      middlewareRegistered: !1,
      ...j
    },
    reducers: {
      middlewareRegistered(Y, {
        payload: R
      }) {
        Y.middlewareRegistered = Y.middlewareRegistered === "conflict" || h !== R ? "conflict" : !0;
      }
    },
    extraReducers: (Y) => {
      Y.addCase(qr, (R) => {
        R.online = !0;
      }).addCase(Im, (R) => {
        R.online = !1;
      }).addCase(xr, (R) => {
        R.focused = !0;
      }).addCase($m, (R) => {
        R.focused = !1;
      }).addMatcher(C, (R) => ({
        ...R
      }));
    }
  }), _ = xm({
    queries: G.reducer,
    mutations: N.reducer,
    provided: O.reducer,
    subscriptions: T.reducer,
    config: b.reducer
  }), q = (Y, R) => _(w.match(R) ? void 0 : Y, R), H = {
    ...b.actions,
    ...G.actions,
    ...p.actions,
    ...T.actions,
    ...N.actions,
    ...O.actions,
    resetApiState: w
  };
  return {
    reducer: q,
    actions: H
  };
}
var Ke = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), uy = {
  status: El
}, vm = /* @__PURE__ */ Hu(uy, () => {
}), gm = /* @__PURE__ */ Hu(uy, () => {
});
function Ng({
  serializeQueryArgs: u,
  reducerPath: c,
  createSelector: s
}) {
  const r = (p) => vm, d = (p) => gm;
  return {
    buildQuerySelector: E,
    buildInfiniteQuerySelector: G,
    buildMutationSelector: N,
    selectInvalidatedBy: X,
    selectCachedArgsForQuery: O,
    selectApiState: y,
    selectQueries: C,
    selectMutations: j,
    selectQueryEntry: D,
    selectConfig: w
  };
  function h(p) {
    return {
      ...p,
      ...cm(p.status)
    };
  }
  function y(p) {
    return p[c];
  }
  function C(p) {
    return y(p)?.queries;
  }
  function D(p, T) {
    return C(p)?.[T];
  }
  function j(p) {
    return y(p)?.mutations;
  }
  function w(p) {
    return y(p)?.config;
  }
  function v(p, T, b) {
    return (_) => {
      if (_ === Ke)
        return s(r, b);
      const q = u({
        queryArgs: _,
        endpointDefinition: T,
        endpointName: p
      });
      return s((Y) => D(Y, q) ?? vm, b);
    };
  }
  function E(p, T) {
    return v(p, T, h);
  }
  function G(p, T) {
    const {
      infiniteQueryOptions: b
    } = T;
    function _(q) {
      const H = {
        ...q,
        ...cm(q.status)
      }, {
        isLoading: Y,
        isError: R,
        direction: S
      } = H, A = S === "forward", B = S === "backward";
      return {
        ...H,
        hasNextPage: L(b, H.data, H.originalArgs),
        hasPreviousPage: K(b, H.data, H.originalArgs),
        isFetchingNextPage: Y && A,
        isFetchingPreviousPage: Y && B,
        isFetchNextPageError: R && A,
        isFetchPreviousPageError: R && B
      };
    }
    return v(p, T, _);
  }
  function N() {
    return (p) => {
      let T;
      return typeof p == "object" ? T = Uu(p) ?? Ke : T = p, s(T === Ke ? d : (q) => y(q)?.mutations?.[T] ?? gm, h);
    };
  }
  function X(p, T) {
    const b = p[c], _ = /* @__PURE__ */ new Set(), q = br(T, jr, ey);
    for (const H of q) {
      const Y = b.provided.tags[H.type];
      if (!Y)
        continue;
      let R = (H.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        Y[H.id]
      ) : (
        // no id: invalidate all queries that provide this type
        Object.values(Y).flat()
      )) ?? [];
      for (const S of R)
        _.add(S);
    }
    return Array.from(_.values()).flatMap((H) => {
      const Y = b.queries[H];
      return Y ? {
        queryCacheKey: H,
        endpointName: Y.endpointName,
        originalArgs: Y.originalArgs
      } : [];
    });
  }
  function O(p, T) {
    return br(Object.values(C(p)), (b) => b?.endpointName === T && b.status !== El, (b) => b.originalArgs);
  }
  function L(p, T, b) {
    return T ? Er(p, T, b) != null : !1;
  }
  function K(p, T, b) {
    return !T || !p.getPreviousPageParam ? !1 : ny(p, T, b) != null;
  }
}
var pm = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Sm = ({
  endpointName: u,
  queryArgs: c
}) => {
  let s = "";
  const r = pm?.get(c);
  if (typeof r == "string")
    s = r;
  else {
    const d = JSON.stringify(c, (h, y) => (y = typeof y == "bigint" ? {
      $bigint: y.toString()
    } : y, y = Pl(y) ? Object.keys(y).sort().reduce((C, D) => (C[D] = y[D], C), {}) : y, y));
    Pl(c) && pm?.set(c, d), s = d;
  }
  return `${u}(${s})`;
};
function iy(...u) {
  return function(s) {
    const r = Ec((j) => s.extractRehydrationInfo?.(j, {
      reducerPath: s.reducerPath ?? "api"
    })), d = {
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1,
      invalidationBehavior: "delayed",
      ...s,
      extractRehydrationInfo: r,
      serializeQueryArgs(j) {
        let w = Sm;
        if ("serializeQueryArgs" in j.endpointDefinition) {
          const v = j.endpointDefinition.serializeQueryArgs;
          w = (E) => {
            const G = v(E);
            return typeof G == "string" ? G : Sm({
              ...E,
              queryArgs: G
            });
          };
        } else s.serializeQueryArgs && (w = s.serializeQueryArgs);
        return w(j);
      },
      tagTypes: [...s.tagTypes || []]
    }, h = {
      endpointDefinitions: {},
      batch(j) {
        j();
      },
      apiUid: Rr(),
      extractRehydrationInfo: r,
      hasRehydrationInfo: Ec((j) => r(j) != null)
    }, y = {
      injectEndpoints: D,
      enhanceEndpoints({
        addTagTypes: j,
        endpoints: w
      }) {
        if (j)
          for (const v of j)
            d.tagTypes.includes(v) || d.tagTypes.push(v);
        if (w)
          for (const [v, E] of Object.entries(w))
            typeof E == "function" ? E(Sa(h, v)) : Object.assign(Sa(h, v) || {}, E);
        return y;
      }
    }, C = u.map((j) => j.init(y, d, h));
    function D(j) {
      const w = j.endpoints({
        query: (v) => ({
          ...v,
          type: wu
        }),
        mutation: (v) => ({
          ...v,
          type: Pm
        }),
        infiniteQuery: (v) => ({
          ...v,
          type: ty
        })
      });
      for (const [v, E] of Object.entries(w)) {
        if (j.overrideExisting !== !0 && v in h.endpointDefinitions) {
          if (j.overrideExisting === "throw")
            throw new Error(Le(39));
          continue;
        }
        h.endpointDefinitions[v] = E;
        for (const G of C)
          G.injectEndpoint(v, E);
      }
      return y;
    }
    return y.injectEndpoints({
      endpoints: s.endpoints
    });
  };
}
function Sl(u, ...c) {
  return Object.assign(u, ...c);
}
var Rg = ({
  api: u,
  queryThunk: c,
  internalState: s,
  mwApi: r
}) => {
  const d = `${u.reducerPath}/subscriptions`;
  let h = null, y = null;
  const {
    updateSubscriptionOptions: C,
    unsubscribeQueryResult: D
  } = u.internalActions, j = (X, O) => {
    if (C.match(O)) {
      const {
        queryCacheKey: K,
        requestId: p,
        options: T
      } = O.payload, b = X.get(K);
      return b?.has(p) && b.set(p, T), !0;
    }
    if (D.match(O)) {
      const {
        queryCacheKey: K,
        requestId: p
      } = O.payload, T = X.get(K);
      return T && T.delete(p), !0;
    }
    if (u.internalActions.removeQueryResult.match(O))
      return X.delete(O.payload.queryCacheKey), !0;
    if (c.pending.match(O)) {
      const {
        meta: {
          arg: K,
          requestId: p
        }
      } = O, T = Tc(X, K.queryCacheKey, _r);
      return K.subscribe && T.set(p, K.subscriptionOptions ?? T.get(p) ?? {}), !0;
    }
    let L = !1;
    if (c.rejected.match(O)) {
      const {
        meta: {
          condition: K,
          arg: p,
          requestId: T
        }
      } = O;
      if (K && p.subscribe) {
        const b = Tc(X, p.queryCacheKey, _r);
        b.set(T, p.subscriptionOptions ?? b.get(T) ?? {}), L = !0;
      }
    }
    return L;
  }, w = () => s.currentSubscriptions, G = {
    getSubscriptions: w,
    getSubscriptionCount: (X) => w().get(X)?.size ?? 0,
    isRequestSubscribed: (X, O) => !!w()?.get(X)?.get(O)
  };
  function N(X) {
    return JSON.parse(JSON.stringify(Object.fromEntries([...X].map(([O, L]) => [O, Object.fromEntries(L)]))));
  }
  return (X, O) => {
    if (h || (h = N(s.currentSubscriptions)), u.util.resetApiState.match(X))
      return h = {}, s.currentSubscriptions.clear(), y = null, [!0, !1];
    if (u.internalActions.internal_getRTKQSubscriptions.match(X))
      return [!1, G];
    const L = j(s.currentSubscriptions, X);
    let K = !0;
    if (L) {
      y || (y = setTimeout(() => {
        const b = N(s.currentSubscriptions), [, _] = Xm(h, () => b);
        O.next(u.internalActions.subscriptionsUpdated(_)), h = b, y = null;
      }, 500));
      const p = typeof X.type == "string" && !!X.type.startsWith(d), T = c.rejected.match(X) && X.meta.condition && !!X.meta.arg.subscribe;
      K = !p && !T;
    }
    return [K, !1];
  };
}, Ug = 2147483647 / 1e3 - 1, jg = ({
  reducerPath: u,
  api: c,
  queryThunk: s,
  context: r,
  internalState: d,
  selectors: {
    selectQueryEntry: h,
    selectConfig: y
  },
  getRunningQueryThunk: C,
  mwApi: D
}) => {
  const {
    removeQueryResult: j,
    unsubscribeQueryResult: w,
    cacheEntriesUpserted: v
  } = c.internalActions, E = Al(w.match, s.fulfilled, s.rejected, v.match);
  function G(p) {
    const T = d.currentSubscriptions.get(p);
    return T ? T.size > 0 : !1;
  }
  const N = {};
  function X(p) {
    for (const T of p.values())
      T?.abort?.();
  }
  const O = (p, T) => {
    const b = T.getState(), _ = y(b);
    if (E(p)) {
      let q;
      if (v.match(p))
        q = p.payload.map((H) => H.queryDescription.queryCacheKey);
      else {
        const {
          queryCacheKey: H
        } = w.match(p) ? p.payload : p.meta.arg;
        q = [H];
      }
      L(q, T, _);
    }
    if (c.util.resetApiState.match(p)) {
      for (const [q, H] of Object.entries(N))
        H && clearTimeout(H), delete N[q];
      X(d.runningQueries), X(d.runningMutations);
    }
    if (r.hasRehydrationInfo(p)) {
      const {
        queries: q
      } = r.extractRehydrationInfo(p);
      L(Object.keys(q), T, _);
    }
  };
  function L(p, T, b) {
    const _ = T.getState();
    for (const q of p) {
      const H = h(_, q);
      H?.endpointName && K(q, H.endpointName, T, b);
    }
  }
  function K(p, T, b, _) {
    const H = Sa(r, T)?.keepUnusedDataFor ?? _.keepUnusedDataFor;
    if (H === 1 / 0)
      return;
    const Y = Math.max(0, Math.min(H, Ug));
    if (!G(p)) {
      const R = N[p];
      R && clearTimeout(R), N[p] = setTimeout(() => {
        if (!G(p)) {
          const S = h(b.getState(), p);
          S?.endpointName && b.dispatch(C(S.endpointName, S.originalArgs))?.abort(), b.dispatch(j({
            queryCacheKey: p
          }));
        }
        delete N[p];
      }, Y * 1e3);
    }
  }
  return O;
}, bm = new Error("Promise never resolved before cacheEntryRemoved."), xg = ({
  api: u,
  reducerPath: c,
  context: s,
  queryThunk: r,
  mutationThunk: d,
  internalState: h,
  selectors: {
    selectQueryEntry: y,
    selectApiState: C
  }
}) => {
  const D = pr(r), j = pr(d), w = tn(r, d), v = {}, {
    removeQueryResult: E,
    removeMutationResult: G,
    cacheEntriesUpserted: N
  } = u.internalActions;
  function X(b, _, q) {
    const H = v[b];
    H?.valueResolved && (H.valueResolved({
      data: _,
      meta: q
    }), delete H.valueResolved);
  }
  function O(b) {
    const _ = v[b];
    _ && (delete v[b], _.cacheEntryRemoved());
  }
  function L(b) {
    const {
      arg: _,
      requestId: q
    } = b.meta, {
      endpointName: H,
      originalArgs: Y
    } = _;
    return [H, Y, q];
  }
  const K = (b, _, q) => {
    const H = p(b);
    function Y(R, S, A, B) {
      const J = y(q, S), tt = y(_.getState(), S);
      !J && tt && T(R, B, S, _, A);
    }
    if (r.pending.match(b)) {
      const [R, S, A] = L(b);
      Y(R, H, A, S);
    } else if (N.match(b))
      for (const {
        queryDescription: R,
        value: S
      } of b.payload) {
        const {
          endpointName: A,
          originalArgs: B,
          queryCacheKey: J
        } = R;
        Y(A, J, b.meta.requestId, B), X(J, S, {});
      }
    else if (d.pending.match(b)) {
      if (_.getState()[c].mutations[H]) {
        const [S, A, B] = L(b);
        T(S, A, H, _, B);
      }
    } else if (w(b))
      X(H, b.payload, b.meta.baseQueryMeta);
    else if (E.match(b) || G.match(b))
      O(H);
    else if (u.util.resetApiState.match(b))
      for (const R of Object.keys(v))
        O(R);
  };
  function p(b) {
    return D(b) ? b.meta.arg.queryCacheKey : j(b) ? b.meta.arg.fixedCacheKey ?? b.meta.requestId : E.match(b) ? b.payload.queryCacheKey : G.match(b) ? Uu(b.payload) : "";
  }
  function T(b, _, q, H, Y) {
    const R = Sa(s, b), S = R?.onCacheEntryAdded;
    if (!S) return;
    const A = {}, B = new Promise((P) => {
      A.cacheEntryRemoved = P;
    }), J = Promise.race([new Promise((P) => {
      A.valueResolved = P;
    }), B.then(() => {
      throw bm;
    })]);
    J.catch(() => {
    }), v[q] = A;
    const tt = u.endpoints[b].select(Mc(R) ? _ : q), M = H.dispatch((P, et, nt) => nt), k = {
      ...H,
      getCacheEntry: () => tt(H.getState()),
      requestId: Y,
      extra: M,
      updateCachedData: Mc(R) ? (P) => H.dispatch(u.util.updateQueryData(b, _, P)) : void 0,
      cacheDataLoaded: J,
      cacheEntryRemoved: B
    }, W = S(_, k);
    Promise.resolve(W).catch((P) => {
      if (P !== bm)
        throw P;
    });
  }
  return K;
}, qg = ({
  api: u,
  context: {
    apiUid: c
  },
  reducerPath: s
}) => (r, d) => {
  u.util.resetApiState.match(r) && d.dispatch(u.internalActions.middlewareRegistered(c));
}, Qg = ({
  reducerPath: u,
  context: c,
  context: {
    endpointDefinitions: s
  },
  mutationThunk: r,
  queryThunk: d,
  api: h,
  assertTagType: y,
  refetchQuery: C,
  internalState: D
}) => {
  const {
    removeQueryResult: j
  } = h.internalActions, w = Al(tn(r), Nc(r)), v = Al(tn(d, r), pa(d, r));
  let E = [], G = 0;
  const N = (L, K) => {
    (d.pending.match(L) || r.pending.match(L)) && G++, v(L) && (G = Math.max(0, G - 1)), w(L) ? O(ay(L, "invalidatesTags", s, y), K) : v(L) ? O([], K) : h.util.invalidateTags.match(L) && O(Qr(L.payload, void 0, void 0, void 0, void 0, y), K);
  };
  function X() {
    return G > 0;
  }
  function O(L, K) {
    const p = K.getState(), T = p[u];
    if (E.push(...L), T.config.invalidationBehavior === "delayed" && X())
      return;
    const b = E;
    if (E = [], b.length === 0) return;
    const _ = h.util.selectInvalidatedBy(p, b);
    c.batch(() => {
      const q = Array.from(_.values());
      for (const {
        queryCacheKey: H
      } of q) {
        const Y = T.queries[H], R = Tc(D.currentSubscriptions, H, _r);
        Y && (R.size === 0 ? K.dispatch(j({
          queryCacheKey: H
        })) : Y.status !== El && K.dispatch(C(Y)));
      }
    });
  }
  return N;
}, Bg = ({
  reducerPath: u,
  queryThunk: c,
  api: s,
  refetchQuery: r,
  internalState: d
}) => {
  const {
    currentPolls: h,
    currentSubscriptions: y
  } = d, C = /* @__PURE__ */ new Set();
  let D = null;
  const j = (O, L) => {
    (s.internalActions.updateSubscriptionOptions.match(O) || s.internalActions.unsubscribeQueryResult.match(O)) && w(O.payload.queryCacheKey, L), (c.pending.match(O) || c.rejected.match(O) && O.meta.condition) && w(O.meta.arg.queryCacheKey, L), (c.fulfilled.match(O) || c.rejected.match(O) && !O.meta.condition) && v(O.meta.arg, L), s.util.resetApiState.match(O) && (N(), D && (clearTimeout(D), D = null), C.clear());
  };
  function w(O, L) {
    C.add(O), D || (D = setTimeout(() => {
      for (const K of C)
        E({
          queryCacheKey: K
        }, L);
      C.clear(), D = null;
    }, 0));
  }
  function v({
    queryCacheKey: O
  }, L) {
    const K = L.getState()[u], p = K.queries[O], T = y.get(O);
    if (!p || p.status === El) return;
    const {
      lowestPollingInterval: b,
      skipPollingIfUnfocused: _
    } = X(T);
    if (!Number.isFinite(b)) return;
    const q = h.get(O);
    q?.timeout && (clearTimeout(q.timeout), q.timeout = void 0);
    const H = Date.now() + b;
    h.set(O, {
      nextPollTimestamp: H,
      pollingInterval: b,
      timeout: setTimeout(() => {
        (K.config.focused || !_) && L.dispatch(r(p)), v({
          queryCacheKey: O
        }, L);
      }, b)
    });
  }
  function E({
    queryCacheKey: O
  }, L) {
    const p = L.getState()[u].queries[O], T = y.get(O);
    if (!p || p.status === El)
      return;
    const {
      lowestPollingInterval: b
    } = X(T);
    if (!Number.isFinite(b)) {
      G(O);
      return;
    }
    const _ = h.get(O), q = Date.now() + b;
    (!_ || q < _.nextPollTimestamp) && v({
      queryCacheKey: O
    }, L);
  }
  function G(O) {
    const L = h.get(O);
    L?.timeout && clearTimeout(L.timeout), h.delete(O);
  }
  function N() {
    for (const O of h.keys())
      G(O);
  }
  function X(O = /* @__PURE__ */ new Map()) {
    let L = !1, K = Number.POSITIVE_INFINITY;
    for (const p of O.values())
      p.pollingInterval && (K = Math.min(p.pollingInterval, K), L = p.skipPollingIfUnfocused || L);
    return {
      lowestPollingInterval: K,
      skipPollingIfUnfocused: L
    };
  }
  return j;
}, Hg = ({
  api: u,
  context: c,
  queryThunk: s,
  mutationThunk: r
}) => {
  const d = Nr(s, r), h = pa(s, r), y = tn(s, r), C = {};
  return (j, w) => {
    if (d(j)) {
      const {
        requestId: v,
        arg: {
          endpointName: E,
          originalArgs: G
        }
      } = j.meta, N = Sa(c, E), X = N?.onQueryStarted;
      if (X) {
        const O = {}, L = new Promise((b, _) => {
          O.resolve = b, O.reject = _;
        });
        L.catch(() => {
        }), C[v] = O;
        const K = u.endpoints[E].select(Mc(N) ? G : v), p = w.dispatch((b, _, q) => q), T = {
          ...w,
          getCacheEntry: () => K(w.getState()),
          requestId: v,
          extra: p,
          updateCachedData: Mc(N) ? (b) => w.dispatch(u.util.updateQueryData(E, G, b)) : void 0,
          queryFulfilled: L
        };
        X(G, T);
      }
    } else if (y(j)) {
      const {
        requestId: v,
        baseQueryMeta: E
      } = j.meta;
      C[v]?.resolve({
        data: j.payload,
        meta: E
      }), delete C[v];
    } else if (h(j)) {
      const {
        requestId: v,
        rejectedWithValue: E,
        baseQueryMeta: G
      } = j.meta;
      C[v]?.reject({
        error: j.payload ?? j.error,
        isUnhandledError: !E,
        meta: G
      }), delete C[v];
    }
  };
}, Yg = ({
  reducerPath: u,
  context: c,
  api: s,
  refetchQuery: r,
  internalState: d
}) => {
  const {
    removeQueryResult: h
  } = s.internalActions, y = (D, j) => {
    xr.match(D) && C(j, "refetchOnFocus"), qr.match(D) && C(j, "refetchOnReconnect");
  };
  function C(D, j) {
    const w = D.getState()[u], v = w.queries, E = d.currentSubscriptions;
    c.batch(() => {
      for (const G of E.keys()) {
        const N = v[G], X = E.get(G);
        if (!X || !N) continue;
        const O = [...X.values()];
        (O.some((K) => K[j] === !0) || O.every((K) => K[j] === void 0) && w.config[j]) && (X.size === 0 ? D.dispatch(h({
          queryCacheKey: G
        })) : N.status !== El && D.dispatch(r(N)));
      }
    });
  }
  return y;
};
function wg(u) {
  const {
    reducerPath: c,
    queryThunk: s,
    api: r,
    context: d,
    getInternalState: h
  } = u, {
    apiUid: y
  } = d, C = {
    invalidateTags: Je(`${c}/invalidateTags`)
  }, D = (E) => E.type.startsWith(`${c}/`), j = [qg, jg, Qg, Bg, xg, Hg];
  return {
    middleware: (E) => {
      let G = !1;
      const N = h(E.dispatch), X = {
        ...u,
        internalState: N,
        refetchQuery: v,
        isThisApiSliceAction: D,
        mwApi: E
      }, O = j.map((p) => p(X)), L = Rg(X), K = Yg(X);
      return (p) => (T) => {
        if (!qm(T))
          return p(T);
        G || (G = !0, E.dispatch(r.internalActions.middlewareRegistered(y)));
        const b = {
          ...E,
          next: p
        }, _ = E.getState(), [q, H] = L(T, b, _);
        let Y;
        if (q ? Y = p(T) : Y = H, E.getState()[c] && (K(T, b, _), D(T) || d.hasRehydrationInfo(T)))
          for (const R of O)
            R(T, b, _);
        return Y;
      };
    },
    actions: C
  };
  function v(E) {
    return u.api.endpoints[E.endpointName].initiate(E.originalArgs, {
      subscribe: !1,
      forceRefetch: !0
    });
  }
}
var _m = /* @__PURE__ */ Symbol(), cy = ({
  createSelector: u = Or
} = {}) => ({
  name: _m,
  init(c, {
    baseQuery: s,
    tagTypes: r,
    reducerPath: d,
    serializeQueryArgs: h,
    keepUnusedDataFor: y,
    refetchOnMountOrArgChange: C,
    refetchOnFocus: D,
    refetchOnReconnect: j,
    invalidationBehavior: w,
    onSchemaFailure: v,
    catchSchemaFailure: E,
    skipSchemaValidation: G
  }, N) {
    D1();
    const X = (rt) => rt;
    Object.assign(c, {
      reducerPath: d,
      endpoints: {},
      internalActions: {
        onOnline: qr,
        onOffline: Im,
        onFocus: xr,
        onFocusLost: $m
      },
      util: {}
    });
    const O = Ng({
      serializeQueryArgs: h,
      reducerPath: d,
      createSelector: u
    }), {
      selectInvalidatedBy: L,
      selectCachedArgsForQuery: K,
      buildQuerySelector: p,
      buildInfiniteQuerySelector: T,
      buildMutationSelector: b
    } = O;
    Sl(c.util, {
      selectInvalidatedBy: L,
      selectCachedArgsForQuery: K
    });
    const {
      queryThunk: _,
      infiniteQueryThunk: q,
      mutationThunk: H,
      patchQueryData: Y,
      updateQueryData: R,
      upsertQueryData: S,
      prefetch: A,
      buildMatchThunkActions: B
    } = Cg({
      baseQuery: s,
      reducerPath: d,
      context: N,
      api: c,
      serializeQueryArgs: h,
      assertTagType: X,
      selectors: O,
      onSchemaFailure: v,
      catchSchemaFailure: E,
      skipSchemaValidation: G
    }), {
      reducer: J,
      actions: tt
    } = Og({
      context: N,
      queryThunk: _,
      mutationThunk: H,
      serializeQueryArgs: h,
      reducerPath: d,
      assertTagType: X,
      config: {
        refetchOnFocus: D,
        refetchOnReconnect: j,
        refetchOnMountOrArgChange: C,
        keepUnusedDataFor: y,
        reducerPath: d,
        invalidationBehavior: w
      }
    });
    Sl(c.util, {
      patchQueryData: Y,
      updateQueryData: R,
      upsertQueryData: S,
      prefetch: A,
      resetApiState: tt.resetApiState,
      upsertQueryEntries: tt.cacheEntriesUpserted
    }), Sl(c.internalActions, tt);
    const M = /* @__PURE__ */ new WeakMap(), k = (rt) => Tc(M, rt, () => ({
      currentSubscriptions: /* @__PURE__ */ new Map(),
      currentPolls: /* @__PURE__ */ new Map(),
      runningQueries: /* @__PURE__ */ new Map(),
      runningMutations: /* @__PURE__ */ new Map()
    })), {
      buildInitiateQuery: W,
      buildInitiateInfiniteQuery: P,
      buildInitiateMutation: et,
      getRunningMutationThunk: nt,
      getRunningMutationsThunk: st,
      getRunningQueriesThunk: ut,
      getRunningQueryThunk: it
    } = Dg({
      queryThunk: _,
      mutationThunk: H,
      infiniteQueryThunk: q,
      api: c,
      serializeQueryArgs: h,
      context: N,
      getInternalState: k
    });
    Sl(c.util, {
      getRunningMutationThunk: nt,
      getRunningMutationsThunk: st,
      getRunningQueryThunk: it,
      getRunningQueriesThunk: ut
    });
    const {
      middleware: _t,
      actions: bt
    } = wg({
      reducerPath: d,
      context: N,
      queryThunk: _,
      mutationThunk: H,
      infiniteQueryThunk: q,
      api: c,
      assertTagType: X,
      selectors: O,
      getRunningQueryThunk: it,
      getInternalState: k
    });
    return Sl(c.util, bt), Sl(c, {
      reducer: J,
      middleware: _t
    }), {
      name: _m,
      injectEndpoint(rt, Rt) {
        const ot = c, vt = ot.endpoints[rt] ??= {};
        Uc(Rt) && Sl(vt, {
          name: rt,
          select: p(rt, Rt),
          initiate: W(rt, Rt)
        }, B(_, rt)), Tg(Rt) && Sl(vt, {
          name: rt,
          select: b(),
          initiate: et(rt)
        }, B(H, rt)), jc(Rt) && Sl(vt, {
          name: rt,
          select: T(rt, Rt),
          initiate: P(rt, Rt)
        }, B(_, rt));
      }
    };
  }
});
cy();
function rc(u) {
  return u.replace(u[0], u[0].toUpperCase());
}
var Gg = "query", Lg = "mutation", Vg = "infinitequery";
function Xg(u) {
  return u.type === Gg;
}
function Zg(u) {
  return u.type === Lg;
}
function fy(u) {
  return u.type === Vg;
}
function gu(u, ...c) {
  return Object.assign(u, ...c);
}
var ir = /* @__PURE__ */ Symbol();
function cr(u) {
  const c = Wl(u), s = ie(() => Ur(c.current, u), [u]);
  return Pe(() => {
    c.current !== s && (c.current = s);
  }, [s]), s;
}
function ya(u) {
  const c = Wl(u);
  return Pe(() => {
    Au(c.current, u) || (c.current = u);
  }, [u]), Au(c.current, u) ? c.current : u;
}
var Kg = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Jg = /* @__PURE__ */ Kg(), kg = () => typeof navigator < "u" && navigator.product === "ReactNative", Fg = /* @__PURE__ */ kg(), Wg = () => Jg || Fg ? U2 : Pe, $g = /* @__PURE__ */ Wg(), Am = (u) => u.isUninitialized ? {
  ...u,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: u.data === void 0,
  // This is the one place where we still have to use `QueryStatus` as an enum,
  // since it's the only reference in the React package and not in the core.
  status: Fm.pending
} : u;
function fr(u, ...c) {
  const s = {};
  return c.forEach((r) => {
    s[r] = u[r];
  }), s;
}
var sr = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
function Ig({
  api: u,
  moduleOptions: {
    batch: c,
    hooks: {
      useDispatch: s,
      useSelector: r,
      useStore: d
    },
    unstable__sideEffectsInRender: h,
    createSelector: y
  },
  serializeQueryArgs: C,
  context: D
}) {
  const j = h ? (_) => _() : Pe, w = (_) => _.current?.unsubscribe?.(), v = D.endpointDefinitions;
  return {
    buildQueryHooks: p,
    buildInfiniteQueryHooks: T,
    buildMutationHook: b,
    usePrefetch: N
  };
  function E(_, q, H) {
    if (q?.endpointName && _.isUninitialized) {
      const {
        endpointName: J
      } = q, tt = v[J];
      H !== Ke && C({
        queryArgs: q.originalArgs,
        endpointDefinition: tt,
        endpointName: J
      }) === C({
        queryArgs: H,
        endpointDefinition: tt,
        endpointName: J
      }) && (q = void 0);
    }
    let Y = _.isSuccess ? _.data : q?.data;
    Y === void 0 && (Y = _.data);
    const R = Y !== void 0, S = _.isLoading, A = (!q || q.isLoading || q.isUninitialized) && !R && S, B = _.isSuccess || R && (S && !q?.isError || _.isUninitialized);
    return {
      ..._,
      data: Y,
      currentData: _.data,
      isFetching: S,
      isLoading: A,
      isSuccess: B
    };
  }
  function G(_, q, H) {
    if (q?.endpointName && _.isUninitialized) {
      const {
        endpointName: J
      } = q, tt = v[J];
      H !== Ke && C({
        queryArgs: q.originalArgs,
        endpointDefinition: tt,
        endpointName: J
      }) === C({
        queryArgs: H,
        endpointDefinition: tt,
        endpointName: J
      }) && (q = void 0);
    }
    let Y = _.isSuccess ? _.data : q?.data;
    Y === void 0 && (Y = _.data);
    const R = Y !== void 0, S = _.isLoading, A = (!q || q.isLoading || q.isUninitialized) && !R && S, B = _.isSuccess || S && R;
    return {
      ..._,
      data: Y,
      currentData: _.data,
      isFetching: S,
      isLoading: A,
      isSuccess: B
    };
  }
  function N(_, q) {
    const H = s(), Y = ya(q);
    return _n((R, S) => H(u.util.prefetch(_, R, {
      ...Y,
      ...S
    })), [_, H, Y]);
  }
  function X(_, q, {
    refetchOnReconnect: H,
    refetchOnFocus: Y,
    refetchOnMountOrArgChange: R,
    skip: S = !1,
    pollingInterval: A = 0,
    skipPollingIfUnfocused: B = !1,
    ...J
  } = {}) {
    const {
      initiate: tt
    } = u.endpoints[_], M = s(), k = Wl(void 0);
    if (!k.current) {
      const ot = M(u.internalActions.internal_getRTKQSubscriptions());
      k.current = ot;
    }
    const W = cr(S ? Ke : q), P = ya({
      refetchOnReconnect: H,
      refetchOnFocus: Y,
      pollingInterval: A,
      skipPollingIfUnfocused: B
    }), et = J.initialPageParam, nt = ya(et), st = J.refetchCachedPages, ut = ya(st), it = Wl(void 0);
    let {
      queryCacheKey: _t,
      requestId: bt
    } = it.current || {}, rt = !1;
    _t && bt && (rt = k.current.isRequestSubscribed(_t, bt));
    const Rt = !rt && it.current !== void 0;
    return j(() => {
      Rt && (it.current = void 0);
    }, [Rt]), j(() => {
      const ot = it.current;
      if (W === Ke) {
        ot?.unsubscribe(), it.current = void 0;
        return;
      }
      const vt = it.current?.subscriptionOptions;
      if (!ot || ot.arg !== W) {
        ot?.unsubscribe();
        const ce = M(tt(W, {
          subscriptionOptions: P,
          forceRefetch: R,
          ...fy(v[_]) ? {
            initialPageParam: nt,
            refetchCachedPages: ut
          } : {}
        }));
        it.current = ce;
      } else P !== vt && ot.updateSubscriptionOptions(P);
    }, [M, tt, R, W, P, Rt, nt, ut, _]), [it, M, tt, P];
  }
  function O(_, q) {
    return (Y, {
      skip: R = !1,
      selectFromResult: S
    } = {}) => {
      const {
        select: A
      } = u.endpoints[_], B = cr(R ? Ke : Y), J = Wl(void 0), tt = ie(() => (
        // Normally ts-ignores are bad and should be avoided, but we're
        // already casting this selector to be `Selector<any>` anyway,
        // so the inconsistencies don't matter here
        // @ts-ignore
        y([
          // @ts-ignore
          A(B),
          (et, nt) => nt,
          (et) => B
        ], q, {
          memoizeOptions: {
            resultEqualityCheck: Au
          }
        })
      ), [A, B]), M = ie(() => S ? y([tt], S, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : tt, [tt, S]), k = r((et) => M(et, J.current), Au), W = d(), P = tt(W.getState(), J.current);
      return $g(() => {
        J.current = P;
      }, [P]), k;
    };
  }
  function L(_) {
    Pe(() => () => {
      w(_), _.current = void 0;
    }, [_]);
  }
  function K(_) {
    if (!_.current) throw new Error(Le(38));
    return _.current.refetch();
  }
  function p(_) {
    const q = (R, S = {}) => {
      const [A] = X(_, R, S);
      return L(A), ie(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => K(A)
      }), [A]);
    }, H = ({
      refetchOnReconnect: R,
      refetchOnFocus: S,
      pollingInterval: A = 0,
      skipPollingIfUnfocused: B = !1
    } = {}) => {
      const {
        initiate: J
      } = u.endpoints[_], tt = s(), [M, k] = or(ir), W = Wl(void 0), P = ya({
        refetchOnReconnect: R,
        refetchOnFocus: S,
        pollingInterval: A,
        skipPollingIfUnfocused: B
      });
      j(() => {
        const ut = W.current?.subscriptionOptions;
        P !== ut && W.current?.updateSubscriptionOptions(P);
      }, [P]);
      const et = Wl(P);
      j(() => {
        et.current = P;
      }, [P]);
      const nt = _n(function(ut, it = !1) {
        let _t;
        return c(() => {
          w(W), W.current = _t = tt(J(ut, {
            subscriptionOptions: et.current,
            forceRefetch: !it
          })), k(ut);
        }), _t;
      }, [tt, J]), st = _n(() => {
        W.current?.queryCacheKey && tt(u.internalActions.removeQueryResult({
          queryCacheKey: W.current?.queryCacheKey
        }));
      }, [tt]);
      return Pe(() => () => {
        w(W);
      }, []), Pe(() => {
        M !== ir && !W.current && nt(M, !0);
      }, [M, nt]), ie(() => [nt, M, {
        reset: st
      }], [nt, M, st]);
    }, Y = O(_, E);
    return {
      useQueryState: Y,
      useQuerySubscription: q,
      useLazyQuerySubscription: H,
      useLazyQuery(R) {
        const [S, A, {
          reset: B
        }] = H(R), J = Y(A, {
          ...R,
          skip: A === ir
        }), tt = ie(() => ({
          lastArg: A
        }), [A]);
        return ie(() => [S, {
          ...J,
          reset: B
        }, tt], [S, J, B, tt]);
      },
      useQuery(R, S) {
        const A = q(R, S), B = Y(R, {
          selectFromResult: R === Ke || S?.skip ? void 0 : Am,
          ...S
        }), J = fr(B, ...sr);
        return Ws(J), ie(() => ({
          ...B,
          ...A
        }), [B, A]);
      }
    };
  }
  function T(_) {
    const q = (Y, R = {}) => {
      const [S, A, B, J] = X(_, Y, R), tt = Wl(J);
      j(() => {
        tt.current = J;
      }, [J]);
      const M = R.refetchCachedPages, k = ya(M), W = _n(function(nt, st) {
        let ut;
        return c(() => {
          w(S), S.current = ut = A(B(nt, {
            subscriptionOptions: tt.current,
            direction: st
          }));
        }), ut;
      }, [S, A, B]);
      L(S);
      const P = cr(R.skip ? Ke : Y), et = _n((nt) => {
        if (!S.current) throw new Error(Le(38));
        const st = {
          refetchCachedPages: nt?.refetchCachedPages ?? k
        };
        return S.current.refetch(st);
      }, [S, k]);
      return ie(() => ({
        trigger: W,
        /**
         * A method to manually refetch data for the query
         */
        refetch: et,
        fetchNextPage: () => W(P, "forward"),
        fetchPreviousPage: () => W(P, "backward")
      }), [et, W, P]);
    }, H = O(_, G);
    return {
      useInfiniteQueryState: H,
      useInfiniteQuerySubscription: q,
      useInfiniteQuery(Y, R) {
        const {
          refetch: S,
          fetchNextPage: A,
          fetchPreviousPage: B
        } = q(Y, R), J = H(Y, {
          selectFromResult: Y === Ke || R?.skip ? void 0 : Am,
          ...R
        }), tt = fr(J, ...sr, "hasNextPage", "hasPreviousPage");
        return Ws(tt), ie(() => ({
          ...J,
          fetchNextPage: A,
          fetchPreviousPage: B,
          refetch: S
        }), [J, A, B, S]);
      }
    };
  }
  function b(_) {
    return ({
      selectFromResult: q,
      fixedCacheKey: H
    } = {}) => {
      const {
        select: Y,
        initiate: R
      } = u.endpoints[_], S = s(), [A, B] = or();
      Pe(() => () => {
        A?.arg.fixedCacheKey || A?.reset();
      }, [A]);
      const J = _n(function(ut) {
        const it = S(R(ut, {
          fixedCacheKey: H
        }));
        return B(it), it;
      }, [S, R, H]), {
        requestId: tt
      } = A || {}, M = ie(() => Y({
        fixedCacheKey: H,
        requestId: A?.requestId
      }), [H, A, Y]), k = ie(() => q ? y([M], q) : M, [q, M]), W = r(k, Au), P = H == null ? A?.arg.originalArgs : void 0, et = _n(() => {
        c(() => {
          A && B(void 0), H && S(u.internalActions.removeMutationResult({
            requestId: tt,
            fixedCacheKey: H
          }));
        });
      }, [S, H, A, tt]), nt = fr(W, ...sr, "endpointName");
      Ws(nt);
      const st = ie(() => ({
        ...W,
        originalArgs: P,
        reset: et
      }), [W, P, et]);
      return ie(() => [J, st], [J, st]);
    };
  }
}
var Pg = /* @__PURE__ */ Symbol(), tp = ({
  batch: u = i1,
  hooks: c = {
    useDispatch: Rm,
    useSelector: Um,
    useStore: Nm
  },
  createSelector: s = Or,
  unstable__sideEffectsInRender: r = !1,
  ...d
} = {}) => ({
  name: Pg,
  init(h, {
    serializeQueryArgs: y
  }, C) {
    const D = h, {
      buildQueryHooks: j,
      buildInfiniteQueryHooks: w,
      buildMutationHook: v,
      usePrefetch: E
    } = Ig({
      api: h,
      moduleOptions: {
        batch: u,
        hooks: c,
        unstable__sideEffectsInRender: r,
        createSelector: s
      },
      serializeQueryArgs: y,
      context: C
    });
    return gu(D, {
      usePrefetch: E
    }), gu(C, {
      batch: u
    }), {
      injectEndpoint(G, N) {
        if (Xg(N)) {
          const {
            useQuery: X,
            useLazyQuery: O,
            useLazyQuerySubscription: L,
            useQueryState: K,
            useQuerySubscription: p
          } = j(G);
          gu(D.endpoints[G], {
            useQuery: X,
            useLazyQuery: O,
            useLazyQuerySubscription: L,
            useQueryState: K,
            useQuerySubscription: p
          }), h[`use${rc(G)}Query`] = X, h[`useLazy${rc(G)}Query`] = O;
        }
        if (Zg(N)) {
          const X = v(G);
          gu(D.endpoints[G], {
            useMutation: X
          }), h[`use${rc(G)}Mutation`] = X;
        } else if (fy(N)) {
          const {
            useInfiniteQuery: X,
            useInfiniteQuerySubscription: O,
            useInfiniteQueryState: L
          } = w(G);
          gu(D.endpoints[G], {
            useInfiniteQuery: X,
            useInfiniteQuerySubscription: O,
            useInfiniteQueryState: L
          }), h[`use${rc(G)}InfiniteQuery`] = X;
        }
      }
    };
  }
}), ep = /* @__PURE__ */ iy(cy(), tp());
let xc = {
  apiUrl: "http://localhost:3000",
  apiToken: ""
};
const lp = (u) => {
  xc = u;
}, np = _g({
  baseUrl: "",
  prepareHeaders: (u) => (u.set("X-API-Token", xc.apiToken), u)
}), ap = async (u, c, s) => {
  const r = typeof u == "string" ? u : u.url, d = `${xc.apiUrl}${r}`, h = typeof u == "string" ? d : { ...u, url: d };
  return np(h, c, s);
}, hc = ep({
  reducerPath: "bookingApi",
  baseQuery: ap,
  tagTypes: ["Slots", "Config"],
  endpoints: (u) => ({
    // Получить настройки клиента
    getClientConfig: u.query({
      query: () => `/public/config/${xc.apiToken}`,
      providesTags: ["Config"]
    }),
    // Получить доступные слоты
    getAvailableSlots: u.query({
      query: (c) => ({
        url: "/api/slots/available",
        params: c
      }),
      providesTags: ["Slots"]
    }),
    // Забронировать встречу
    createBooking: u.mutation({
      query: (c) => ({
        url: "/api/book",
        method: "POST",
        body: c
      }),
      invalidatesTags: ["Slots"]
    })
  })
}), {
  useGetAvailableSlotsQuery: up,
  useCreateBookingMutation: ip
} = hc, cp = {
  selectedDate: null,
  currentMonth: (/* @__PURE__ */ new Date()).toISOString()
}, sy = $l({
  name: "calendar",
  initialState: cp,
  reducers: {
    setSelectedDate: (u, c) => {
      u.selectedDate = c.payload;
    },
    setCurrentMonth: (u, c) => {
      u.currentMonth = c.payload;
    },
    nextMonth: (u) => {
      const c = new Date(u.currentMonth);
      c.setMonth(c.getMonth() + 1), u.currentMonth = c.toISOString();
    },
    previousMonth: (u) => {
      const c = new Date(u.currentMonth);
      c.setMonth(c.getMonth() - 1), u.currentMonth = c.toISOString();
    }
  }
}), { setSelectedDate: fp, setCurrentMonth: WS, nextMonth: sp, previousMonth: rp } = sy.actions, op = sy.reducer, Em = {
  currentStep: "calendar",
  selectedSlot: null,
  formData: {
    name: "",
    email: "",
    phone: "",
    description: ""
  },
  bookingResult: null
}, ry = $l({
  name: "booking",
  initialState: Em,
  reducers: {
    setCurrentStep: (u, c) => {
      u.currentStep = c.payload;
    },
    setSelectedSlot: (u, c) => {
      u.selectedSlot = c.payload;
    },
    updateFormData: (u, c) => {
      u.formData = { ...u.formData, ...c.payload };
    },
    setBookingResult: (u, c) => {
      u.bookingResult = c.payload;
    },
    resetBooking: (u) => {
      u.currentStep = "calendar", u.selectedSlot = null, u.formData = Em.formData, u.bookingResult = null;
    }
  }
}), {
  setCurrentStep: Tr,
  setSelectedSlot: Tm,
  updateFormData: dp,
  setBookingResult: hp,
  resetBooking: mp
} = ry.actions, yp = ry.reducer, vp = K1({
  reducer: {
    [hc.reducerPath]: hc.reducer,
    calendar: op,
    booking: yp
  },
  middleware: (u) => u().concat(hc.middleware)
});
var rr = { exports: {} }, pu = {};
var Mm;
function gp() {
  if (Mm) return pu;
  Mm = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(r, d, h) {
    var y = null;
    if (h !== void 0 && (y = "" + h), d.key !== void 0 && (y = "" + d.key), "key" in d) {
      h = {};
      for (var C in d)
        C !== "key" && (h[C] = d[C]);
    } else h = d;
    return d = h.ref, {
      $$typeof: u,
      type: r,
      key: y,
      ref: d !== void 0 ? d : null,
      props: h
    };
  }
  return pu.Fragment = c, pu.jsx = s, pu.jsxs = s, pu;
}
var zm;
function pp() {
  return zm || (zm = 1, rr.exports = gp()), rr.exports;
}
var I = pp();
const qc = Rm.withTypes(), ba = Um.withTypes(), Sp = "_calendar_nv465_1", bp = "_header_nv465_7", _p = "_monthYear_nv465_14", Ap = "_month_nv465_14", Ep = "_year_nv465_27", Tp = "_navigation_nv465_33", Mp = "_navButton_nv465_38", zp = "_weekDays_nv465_47", Dp = "_weekDay_nv465_47", Cp = "_daysGrid_nv465_63", Op = "_dayCell_nv465_70", Np = "_selected_nv465_87", Rp = "_disabled_nv465_92", ve = {
  calendar: Sp,
  header: bp,
  monthYear: _p,
  month: Ap,
  year: Ep,
  navigation: Tp,
  navButton: Mp,
  weekDays: zp,
  weekDay: Dp,
  daysGrid: Cp,
  dayCell: Op,
  selected: Np,
  disabled: Rp
}, Up = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2020C0%208.95431%208.95431%200%2020%200C31.0457%200%2040%208.95431%2040%2020C40%2031.0457%2031.0457%2040%2020%2040C8.95431%2040%200%2031.0457%200%2020Z'%20fill='%232C2C2E'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M22.495%2026.495C22.7684%2026.2216%2022.7684%2025.7784%2022.495%2025.505L16.99%2020L22.495%2014.495C22.7684%2014.2216%2022.7684%2013.7784%2022.495%2013.505C22.2217%2013.2317%2021.7784%2013.2317%2021.5051%2013.505L15.5051%2019.505C15.2317%2019.7784%2015.2317%2020.2216%2015.5051%2020.495L21.5051%2026.495C21.7784%2026.7684%2022.2217%2026.7684%2022.495%2026.495Z'%20fill='%23F2F2F2'/%3e%3c/svg%3e", jp = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2020C0%208.95431%208.95431%200%2020%200C31.0457%200%2040%208.95431%2040%2020C40%2031.0457%2031.0457%2040%2020%2040C8.95431%2040%200%2031.0457%200%2020Z'%20fill='%232C2C2E'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.505%2013.505C17.2316%2013.7784%2017.2316%2014.2216%2017.505%2014.495L23.01%2020L17.505%2025.505C17.2316%2025.7784%2017.2316%2026.2216%2017.505%2026.495C17.7783%2026.7683%2018.2216%2026.7683%2018.4949%2026.495L24.4949%2020.495C24.7683%2020.2216%2024.7683%2019.7784%2024.4949%2019.505L18.4949%2013.505C18.2216%2013.2316%2017.7783%2013.2316%2017.505%2013.505Z'%20fill='%23F2F2F2'/%3e%3c/svg%3e", xp = () => {
  const u = qc(), { selectedDate: c, currentMonth: s } = ba((v) => v.calendar), r = ie(() => {
    const v = new Date(s), E = v.getFullYear(), G = v.getMonth(), N = new Date(E, G, 1), O = new Date(E, G + 1, 0).getDate(), L = N.getDay(), K = [];
    for (let p = 0; p < (L === 0 ? 6 : L - 1); p++)
      K.push(null);
    for (let p = 1; p <= O; p++)
      K.push(new Date(E, G, p));
    return K;
  }, [s]), d = new Date(s), h = d.toLocaleDateString("ru-RU", {
    month: "long"
  }), y = d.getFullYear().toString(), C = (v) => {
    const E = /* @__PURE__ */ new Date();
    E.setHours(0, 0, 0, 0), v >= E && u(fp(v.toISOString()));
  }, D = (v) => {
    if (!v || !c) return !1;
    const E = new Date(c);
    return v.getDate() === E.getDate() && v.getMonth() === E.getMonth() && v.getFullYear() === E.getFullYear();
  }, j = (v) => {
    if (!v) return !0;
    const E = /* @__PURE__ */ new Date();
    return E.setHours(0, 0, 0, 0), v < E;
  }, w = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  return /* @__PURE__ */ I.jsxs("div", { className: ve.calendar, children: [
    /* @__PURE__ */ I.jsxs("div", { className: ve.header, children: [
      /* @__PURE__ */ I.jsxs("div", { className: ve.monthYear, children: [
        /* @__PURE__ */ I.jsx("span", { className: ve.month, children: h }),
        /* @__PURE__ */ I.jsx("span", { className: ve.year, children: y })
      ] }),
      /* @__PURE__ */ I.jsxs("div", { className: ve.navigation, children: [
        /* @__PURE__ */ I.jsx(
          "div",
          {
            className: ve.navButton,
            onClick: () => u(rp()),
            children: /* @__PURE__ */ I.jsx("img", { src: Up, alt: "←" })
          }
        ),
        /* @__PURE__ */ I.jsx(
          "div",
          {
            className: ve.navButton,
            onClick: () => u(sp()),
            children: /* @__PURE__ */ I.jsx("img", { src: jp, alt: "→" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ I.jsx("div", { className: ve.weekDays, children: w.map((v) => /* @__PURE__ */ I.jsx("div", { className: ve.weekDay, children: v }, v)) }),
    /* @__PURE__ */ I.jsx("div", { className: ve.daysGrid, children: r.map((v, E) => /* @__PURE__ */ I.jsx(
      "button",
      {
        className: `${ve.dayCell} ${D(v) ? ve.selected : ""} ${j(v) ? ve.disabled : ""}`,
        onClick: () => v && C(v),
        disabled: j(v),
        children: v ? v.getDate() : ""
      },
      E
    )) })
  ] });
}, qp = "_container_a70pb_1", Qp = "_title_a70pb_10", Bp = "_message_a70pb_18", Hp = "_loading_a70pb_25", Yp = "_spinner_a70pb_30", wp = "_error_a70pb_45", Gp = "_slotsList_a70pb_52", Lp = "_slotButton_a70pb_61", Vp = "_selected_a70pb_78", Xp = "_slotTime_a70pb_83", Zp = "_continueButton_a70pb_103", Ft = {
  container: qp,
  title: Qp,
  message: Bp,
  loading: Hp,
  spinner: Yp,
  error: wp,
  slotsList: Gp,
  slotButton: Lp,
  selected: Vp,
  slotTime: Xp,
  continueButton: Zp
}, Kp = () => {
  const u = qc(), { selectedDate: c } = ba((E) => E.calendar), { selectedSlot: s } = ba((E) => E.booking), r = ie(() => {
    if (!c) return null;
    const E = new Date(c), G = new Date(E);
    G.setHours(0, 0, 0, 0);
    const N = new Date(E);
    return N.setHours(23, 59, 59, 999), {
      startDate: G.toISOString(),
      endDate: N.toISOString(),
      workingHours: "9-18"
    };
  }, [c]), { data: d, isLoading: h, error: y } = up(r, {
    skip: !r
  });
  Pe(() => {
    u(Tm(null));
  }, [c, u]);
  const C = (E) => {
    u(Tm(E));
  }, D = () => {
    s && u(Tr("form"));
  }, j = (E) => s?.start === E.start && s?.end === E.end, w = (E) => new Date(E).toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit"
  });
  if (!c)
    return /* @__PURE__ */ I.jsxs("div", { className: Ft.container, children: [
      /* @__PURE__ */ I.jsx("h3", { className: Ft.title, children: "Доступное время" }),
      /* @__PURE__ */ I.jsx("p", { className: Ft.message, children: "Выберите дату в календаре" })
    ] });
  if (h)
    return /* @__PURE__ */ I.jsxs("div", { className: Ft.container, children: [
      /* @__PURE__ */ I.jsx("h3", { className: Ft.title, children: "Доступное время" }),
      /* @__PURE__ */ I.jsxs("div", { className: Ft.loading, children: [
        /* @__PURE__ */ I.jsx("div", { className: Ft.spinner }),
        /* @__PURE__ */ I.jsx("p", { children: "Загрузка слотов..." })
      ] })
    ] });
  if (y)
    return /* @__PURE__ */ I.jsxs("div", { className: Ft.container, children: [
      /* @__PURE__ */ I.jsx("h3", { className: Ft.title, children: "Доступное время" }),
      /* @__PURE__ */ I.jsx("p", { className: Ft.error, children: "Нет доступных слотов" })
    ] });
  const v = d?.data?.slots || [];
  return /* @__PURE__ */ I.jsxs("div", { className: Ft.container, children: [
    /* @__PURE__ */ I.jsx("h3", { className: Ft.title, children: "Доступное время" }),
    v.length === 0 ? /* @__PURE__ */ I.jsx("p", { className: Ft.message, children: "Нет доступных слотов" }) : /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
      /* @__PURE__ */ I.jsx("div", { className: Ft.slotsList, children: v.map((E, G) => /* @__PURE__ */ I.jsx(
        "button",
        {
          className: `${Ft.slotButton} ${j(E) ? Ft.selected : ""}`,
          onClick: () => C(E),
          children: /* @__PURE__ */ I.jsx("span", { className: Ft.slotTime, children: w(E.start) })
        },
        G
      )) }),
      /* @__PURE__ */ I.jsx(
        "button",
        {
          className: Ft.continueButton,
          onClick: D,
          disabled: !s,
          children: "Продолжить"
        }
      )
    ] })
  ] });
}, Jp = "_card_nly0a_1", kp = "_photoContainer_nly0a_10", Fp = "_photo_nly0a_10", Wp = "_photoPlaceholder_nly0a_22", $p = "_initials_nly0a_32", Ip = "_name_nly0a_38", Pp = "_description_nly0a_45", tS = "_email_nly0a_52", eS = "_divider_nly0a_66", lS = "_info_nly0a_72", nS = "_infoItem_nly0a_77", aS = "_icon_nly0a_85", uS = "_infoText_nly0a_92", iS = "_meetInfo_nly0a_98", cS = "_meetSubject_nly0a_103", fS = "_meetDescription_nly0a_110", Bt = {
  card: Jp,
  photoContainer: kp,
  photo: Fp,
  photoPlaceholder: Wp,
  initials: $p,
  name: Ip,
  description: Pp,
  email: tS,
  divider: eS,
  info: lS,
  infoItem: nS,
  icon: aS,
  infoText: uS,
  meetInfo: iS,
  meetSubject: cS,
  meetDescription: fS
}, sS = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21%2012C21%2016.9706%2016.9706%2021%2012%2021C7.02944%2021%203%2016.9706%203%2012C3%207.02944%207.02944%203%2012%203C16.9706%203%2021%207.02944%2021%2012ZM12%2019.875C16.3492%2019.875%2019.875%2016.3492%2019.875%2012C19.875%207.65076%2016.3492%204.125%2012%204.125C7.65076%204.125%204.125%207.65076%204.125%2012C4.125%2016.3492%207.65076%2019.875%2012%2019.875Z'%20fill='%232C2C2E'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12%206.9375C12.3107%206.9375%2012.5625%207.18934%2012.5625%207.5V12.5625H15.375C15.6857%2012.5625%2015.9375%2012.8143%2015.9375%2013.125C15.9375%2013.4357%2015.6857%2013.6875%2015.375%2013.6875H12.2812C11.8153%2013.6875%2011.4375%2013.3097%2011.4375%2012.8438V7.5C11.4375%207.18934%2011.6893%206.9375%2012%206.9375Z'%20fill='%232C2C2E'/%3e%3c/svg%3e", rS = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.24231%202.90907C11.3455%202.27106%2013.6049%202.38205%2015.6355%203.22315C17.6661%204.06424%2019.3422%205.58338%2020.3783%207.52173C21.4143%209.46009%2021.7463%2011.6977%2021.3175%2013.8534C20.8887%2016.009%2019.7257%2017.9493%2018.0268%2019.3436C16.3278%2020.7379%2014.1979%2021.5%2012%2021.5C11.7239%2021.5%2011.5%2021.2761%2011.5%2021C11.5%2020.7239%2011.7239%2020.5%2012%2020.5C13.9665%2020.5%2015.8722%2019.8181%2017.3924%2018.5706C18.9125%2017.323%2019.953%2015.587%2020.3367%2013.6583C20.7203%2011.7295%2020.4234%209.72745%2019.4963%207.99313C18.5693%206.25881%2017.0697%204.89958%2015.2528%204.14702C13.436%203.39447%2011.4144%203.29516%209.5326%203.86601C7.65075%204.43686%206.02506%205.64255%204.93252%207.27765C3.83998%208.91275%203.34819%2010.8761%203.54094%2012.8331C3.7337%2014.7902%204.59907%2016.6199%205.98961%2018.0104C6.18487%2018.2057%206.18487%2018.5222%205.98961%2018.7175C5.79434%2018.9128%205.47776%2018.9128%205.2825%2018.7175C3.72837%2017.1634%202.76119%2015.1185%202.54576%2012.9312C2.33033%2010.7439%202.87998%208.54955%204.10105%206.72208C5.32213%204.89462%207.13908%203.54708%209.24231%202.90907Z'%20fill='%232C2C2E'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16.3201%209.61589C16.108%209.43911%2015.7927%209.46777%2015.6159%209.67991L12.0179%2013.9975C11.6807%2014.4022%2011.4603%2014.6648%2011.273%2014.8352C11.0964%2014.9959%2011.0112%2015.0155%2010.9555%2015.0181C10.8998%2015.0206%2010.8131%2015.0087%2010.6227%2014.8647C10.4207%2014.712%2010.1775%2014.4703%209.80496%2014.0978L8.35357%2012.6464C8.15831%2012.4512%207.84172%2012.4512%207.64646%2012.6464C7.4512%2012.8417%207.4512%2013.1583%207.64646%2013.3536L9.12241%2014.8295C9.46344%2015.1706%209.75559%2015.4627%2010.0195%2015.6623C10.3013%2015.8754%2010.6159%2016.0345%2011.0008%2016.017C11.3856%2015.9996%2011.6846%2015.8126%2011.9459%2015.5749C12.1907%2015.3523%2012.4552%2015.0349%2012.7639%2014.6643L16.3841%2010.3201C16.5609%2010.108%2016.5322%209.79267%2016.3201%209.61589Z'%20fill='%232C2C2E'/%3e%3c/svg%3e", oS = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAfnSURBVHgB7Zt7bFPXHce/5z58nfgBNE6C46RxQ+mAZIFioChNq71pt8DUSWVb0dZt6rq10l6omzRpm7r/Nmmof2yaBOofLaq0StM0TRNjha0bjxSVAqUdU4OAAiVtAnmSxq97z72n5zi2Y1MSv5PcxB/JsWPfe33O17/f9zwvUKVKlSpVqlSpsjQhKB1xDZk/aDAIZ10dTMwTp08nvttKlokkX5dEqQKJ8yX+MMeeWn/M+4u3us1B1cB8wHhZJBaTnOTc4b8ZX3/457iCqR+upB+sFIGmxdn2YK+zcaJLe+YsNW8oCuYDNlUi/sTUDkLe/gdC679jnEGJSCiOtDgTPd0nFJN2RQyTEoL5ESdVoqknEjnLrM6voHfvk1BRfB0TFHNyWpwPd3SfINTcGqEm5T/c/IlzCw4FhL0H5x1N8naU6EOFCjSdVj3dvdDNrVGDcnGwYMRJQng0o/8Ga0eJFCJQdlpRsyuiL0hx0rDcKZ9qgYFQSM14L61LvpXLSqtU5Myr5+QBYQnrnvHj5MP81JlvvRAbMnepWsfg+Zf6Nt14/vUbqYPyqaBd0qoQRH1Y6MmQrD3acSF8KdLGqGVRGYF7dq09ywXyZx44G7ZLqzwQZbfaf9PdsuwnWyeM0UkujmnxcJNgMZhxw8c/d2QePBO2TKsciLLTDfu//EXv6roDN08PWESRpsSZgrCptEyn5kwRtNjSKj0c2vLXr+7x3LniQOTyuElkwuvIZs0iaYaLLba0Spjx5y89fQxE2h39YIJCInI+4wjlNhdaNGnFVIVHjY67d93nDuzuvDJ28voKXhchTt71yTxwcaWVIkEbjF8I7Hnknjt7mvpunhoAkSVuw4X1+DMPTuSo/mBjrzp+ocuilLqQp9IGsdBACVbLRKktxwxKRumGGaJD0FVlumXJBRU9xMk4Bns++bjLX//ixKmBvPxmpiKkr7v7sede/H1wc9dweJzXNimOqG/K02d4TYgq6dGLl61vP/1NasCPMhGOkPHt97MndmwjO+l4fueIIjm9Bp44toq+ZK36zCbXuBUXflMkWRFyoGadt87fBTNiFhSGXB+EB9pG/rcXx1Hm+bLVLdLGHU5pJ2btFPOOjYgaxQRxMGx9dSPeGHIra1aFYTJNKmVSJ0uIGhqmHsOEQeMoBIlfhtDJiniVoqImhzZcBALNSTGsq1h7cAsi/P/62ghPNSdKpaS5koWA8BvNZeDUqAf+f3bD5P2+5Q4jEVHlwNYC8SYp4Tf7LgWw+egW1LuicHKBLIayYc/+DRdAtEkOD8XjJ9dg/9UAmr2TPJpQdmwnUMKMVRMWL/m9/9qEcxNuNHvCFRFHYCuBUmY8ENPQfngz7yMzNNbGKiaOwDYelDBjt4HXhpeh5VAX7xWb8DooFw0VxR4CJc34ub5m3H88hEZ3FBo3Y1ZhcQQLPsU03qWHx8DOV9fhz/3+pBmXcTiTgwUvkMoQfvhwCP8eTJnx3IkjWPAC/Xg0ZGmxFahTxvg8RdFDqqJZ8B7U4KTeDaEWKDUaaJxOLXjNIQteIGYxy4jpaO1ogdfngR7V51QkW7RiorGKR3SsbGtEQ2sDf13YYLoUbCEQSf7RowaWr1yG5rWBRLrNQStvs8EqF8mIGaj11CLY2QqLT80wvqSFCmac/UbzRMwL83l3Pue8amMbf5Zh6mbFfMme0x1cC4tHjklNBNe3osZbA51HViVEsvV8EONjDYP7UvOaAFasXI54BVo4288oimgSrVpDsB5+3soJkcqJkv1dMmSZr+FLhfVYZUkSC5UUFcCiLIocUSGiRufdAG+9F6rTgWvvXCtbJGUJNBmPYOzDKG8pwigEIjmgs7DP/yXnAwytK1EuTHPIGXCHzFge2idbOK3WgbYNd+HdNy9b3KdEhogteEVnSpZAg6NDGH1/ACw+gUJgVGI1DTeDHXu+cDQ+4kPZ4C2VMRqBPhrV+apo7oVDLpIwbhE9d3UGTUNlYX4NDwzGFSZFjTuzTlJVFU6HA5alohCYrBCFL1pOXhyBMVnYufmQlziZ5eHmrTXUqtf3vfn9pm90rJdd2g/NcLwokexv0jMhPMgpB1/f/vKPapq0Xzt8HoVRq2CfXLwCQazEk8QW4P+GXng2fGH4Ic8nfIpFLfFe3qOURS1QBspbTx14ZfhM/9119/klllg4I3ntn14qAonUks997+Clt/dedLtX+0a4UUlk6v1ZWSoCCcSuCun67w5Fj2zeV+9qbzwjaYrChZoWiSU2KWZ1oJaSQIKU/yhHOv8YYiB/cvhqp0UiYMSR3UleagIJhECJlDv5yMuPEUX6gavtDkU0eopXE/fCvMI/S9/SdYtAczvfW2kkMusSiEg5tffT+/8wfOTqvUaUHjJHYr967XP7e5DRP8weizFb72T9GLy/mMuERaTI///Z4bP8eVvyvcQ+zdQBWYJINb5+ZlVkzDm3sMRkP7R6T18eR9+6JS6r+c9KMUdk7Leqr0WcY1+VhMNYzHQ2udlF1/G/oETfyBRIev/gd/ujV994xuFr484uepxzMS1eJqaLytzr6uXRo1cewLMoqNd8O25VV4w0jcav/f2zWmv385Yebk6M/HKVjQ9uHcuuoeWhn8KYCGBeSBgy/6MofSMn3nv0/C//cx7JezNQArcLv+mLtrc74HQW8AucxvwSEveGC+NNb4pHlSpVqlSpUqVKlaL4CM+wHUMyol4NAAAAAElFTkSuQmCC", dS = ({ specialist: u }) => {
  const c = {
    name: "Специалист",
    description: "Консультация по бронированию встреч",
    photo: void 0,
    meetSubject: "Онлайн консультация",
    meetDescription: "Google Meet",
    infoLabels: {
      timeSlot: "Время созвона",
      confirmation: "Обязательно подтверждение",
      videoCall: "Google Meet Video"
    }
  }, s = u || c, r = {
    timeSlot: s.infoLabels?.timeSlot || c.infoLabels.timeSlot,
    confirmation: s.infoLabels?.confirmation || c.infoLabels.confirmation,
    videoCall: s.infoLabels?.videoCall || c.infoLabels.videoCall
  };
  return /* @__PURE__ */ I.jsxs("div", { className: Bt.card, children: [
    /* @__PURE__ */ I.jsx("div", { className: Bt.photoContainer, children: s.photo ? /* @__PURE__ */ I.jsx("img", { src: s.photo, alt: s.name, className: Bt.photo }) : /* @__PURE__ */ I.jsx("div", { className: Bt.photoPlaceholder, children: /* @__PURE__ */ I.jsx("span", { className: Bt.initials, children: s.name.split(" ").map((d) => d[0]).join("").toUpperCase().slice(0, 2) }) }) }),
    /* @__PURE__ */ I.jsx("h2", { className: Bt.name, children: s.name }),
    s.description && /* @__PURE__ */ I.jsx("p", { className: Bt.description, children: s.description }),
    s.email && /* @__PURE__ */ I.jsx("a", { href: `mailto:${s.email}`, className: Bt.email, children: s.email }),
    (s.meetSubject || s.meetDescription) && /* @__PURE__ */ I.jsxs("div", { className: Bt.meetInfo, children: [
      s.meetSubject && /* @__PURE__ */ I.jsx("span", { className: Bt.meetSubject, children: s.meetSubject }),
      s.meetDescription && /* @__PURE__ */ I.jsx("span", { className: Bt.meetDescription, children: s.meetDescription })
    ] }),
    /* @__PURE__ */ I.jsx("div", { className: Bt.divider }),
    /* @__PURE__ */ I.jsxs("div", { className: Bt.info, children: [
      /* @__PURE__ */ I.jsxs("div", { className: Bt.infoItem, children: [
        /* @__PURE__ */ I.jsx("img", { src: sS, alt: "Clock", className: Bt.icon }),
        /* @__PURE__ */ I.jsx("span", { className: Bt.infoText, children: r.timeSlot })
      ] }),
      /* @__PURE__ */ I.jsxs("div", { className: Bt.infoItem, children: [
        /* @__PURE__ */ I.jsx("img", { src: rS, alt: "Check", className: Bt.icon }),
        /* @__PURE__ */ I.jsx("span", { className: Bt.infoText, children: r.confirmation })
      ] }),
      /* @__PURE__ */ I.jsxs("div", { className: Bt.infoItem, children: [
        /* @__PURE__ */ I.jsx("img", { src: oS, alt: "Google Meet", className: Bt.icon }),
        /* @__PURE__ */ I.jsx("span", { className: Bt.infoText, children: r.videoCall })
      ] })
    ] })
  ] });
}, hS = "_container_lvje3_1", mS = "_title_lvje3_8", yS = "_selectedSlot_lvje3_15", vS = "_slotIcon_lvje3_26", gS = "_slotText_lvje3_30", pS = "_error_lvje3_36", SS = "_form_lvje3_46", bS = "_formGroup_lvje3_52", _S = "_label_lvje3_57", AS = "_input_lvje3_64", ES = "_textarea_lvje3_65", TS = "_buttons_lvje3_86", MS = "_backButton_lvje3_92", zS = "_submitButton_lvje3_93", Ht = {
  container: hS,
  title: mS,
  selectedSlot: yS,
  slotIcon: vS,
  slotText: gS,
  error: pS,
  form: SS,
  formGroup: bS,
  label: _S,
  input: AS,
  textarea: ES,
  buttons: TS,
  backButton: MS,
  submitButton: zS
}, DS = () => {
  const u = qc(), { selectedSlot: c, formData: s } = ba((v) => v.booking), [r, { isLoading: d }] = ip(), [h, y] = or(null), C = (v) => {
    const { name: E, value: G } = v.target;
    u(dp({ [E]: G }));
  }, D = async (v) => {
    if (v.preventDefault(), y(null), !c) {
      y("Слот не выбран");
      return;
    }
    if (!s.name || !s.email || !s.phone) {
      y("Пожалуйста, заполните все обязательные поля");
      return;
    }
    try {
      const E = await r({
        startTime: c.start,
        name: s.name,
        email: s.email,
        phone: s.phone,
        description: s.description
      }).unwrap();
      E.success && (u(
        hp({
          meetLink: E.data.booking.meetLink,
          startTime: E.data.booking.startTime,
          endTime: E.data.booking.endTime
        })
      ), u(Tr("success")));
    } catch (E) {
      y(E?.data?.error || "Ошибка при бронировании");
    }
  }, j = () => {
    u(Tr("calendar"));
  }, w = () => {
    if (!c) return "";
    const v = new Date(c.start), E = new Date(c.end);
    return `${v.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric"
    })} в ${v.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit"
    })} - ${E.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit"
    })}`;
  };
  return /* @__PURE__ */ I.jsxs("div", { className: Ht.container, children: [
    /* @__PURE__ */ I.jsx("h2", { className: Ht.title, children: "Ваши контактные данные" }),
    /* @__PURE__ */ I.jsxs("div", { className: Ht.selectedSlot, children: [
      /* @__PURE__ */ I.jsx("span", { className: Ht.slotIcon, children: "📅" }),
      /* @__PURE__ */ I.jsx("span", { className: Ht.slotText, children: w() })
    ] }),
    h && /* @__PURE__ */ I.jsx("div", { className: Ht.error, children: h }),
    /* @__PURE__ */ I.jsxs("form", { onSubmit: D, className: Ht.form, children: [
      /* @__PURE__ */ I.jsxs("div", { className: Ht.formGroup, children: [
        /* @__PURE__ */ I.jsx("label", { htmlFor: "name", className: Ht.label, children: "Имя *" }),
        /* @__PURE__ */ I.jsx(
          "input",
          {
            type: "text",
            id: "name",
            name: "name",
            value: s.name,
            onChange: C,
            className: Ht.input,
            placeholder: "Иван Петров",
            required: !0
          }
        )
      ] }),
      /* @__PURE__ */ I.jsxs("div", { className: Ht.formGroup, children: [
        /* @__PURE__ */ I.jsx("label", { htmlFor: "email", className: Ht.label, children: "Email *" }),
        /* @__PURE__ */ I.jsx(
          "input",
          {
            type: "email",
            id: "email",
            name: "email",
            value: s.email,
            onChange: C,
            className: Ht.input,
            placeholder: "ivan@example.com",
            required: !0
          }
        )
      ] }),
      /* @__PURE__ */ I.jsxs("div", { className: Ht.formGroup, children: [
        /* @__PURE__ */ I.jsx("label", { htmlFor: "phone", className: Ht.label, children: "Телефон *" }),
        /* @__PURE__ */ I.jsx(
          "input",
          {
            type: "tel",
            id: "phone",
            name: "phone",
            value: s.phone,
            onChange: C,
            className: Ht.input,
            placeholder: "+7 (999) 123-45-67",
            required: !0
          }
        )
      ] }),
      /* @__PURE__ */ I.jsxs("div", { className: Ht.formGroup, children: [
        /* @__PURE__ */ I.jsx("label", { htmlFor: "description", className: Ht.label, children: "Комментарий (необязательно)" }),
        /* @__PURE__ */ I.jsx(
          "textarea",
          {
            id: "description",
            name: "description",
            value: s.description,
            onChange: C,
            className: Ht.textarea,
            placeholder: "Опишите кратко, что вы хотели бы обсудить",
            rows: 3
          }
        )
      ] }),
      /* @__PURE__ */ I.jsxs("div", { className: Ht.buttons, children: [
        /* @__PURE__ */ I.jsx(
          "button",
          {
            type: "button",
            onClick: j,
            className: Ht.backButton,
            disabled: d,
            children: "← Назад"
          }
        ),
        /* @__PURE__ */ I.jsx(
          "button",
          {
            type: "submit",
            className: Ht.submitButton,
            disabled: d,
            children: d ? "Бронирование..." : "Забронировать"
          }
        )
      ] })
    ] })
  ] });
}, CS = "_container_18fmv_1", OS = "_icon_18fmv_11", NS = "_title_18fmv_16", RS = "_subtitle_18fmv_23", US = "_details_18fmv_29", jS = "_detailRow_18fmv_37", xS = "_detailLabel_18fmv_49", qS = "_detailValue_18fmv_55", QS = "_meetLink_18fmv_61", BS = "_newBookingButton_18fmv_80", Yt = {
  container: CS,
  icon: OS,
  title: NS,
  subtitle: RS,
  details: US,
  detailRow: jS,
  detailLabel: xS,
  detailValue: qS,
  meetLink: QS,
  newBookingButton: BS
}, HS = () => {
  const u = qc(), { bookingResult: c, formData: s } = ba((C) => C.booking), r = () => {
    u(mp());
  }, d = (C) => {
    const D = new Date(C);
    return {
      date: D.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }),
      time: D.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit"
      })
    };
  };
  if (!c)
    return null;
  const { date: h, time: y } = d(c.startTime);
  return /* @__PURE__ */ I.jsxs("div", { className: Yt.container, children: [
    /* @__PURE__ */ I.jsx("div", { className: Yt.icon, children: "✅" }),
    /* @__PURE__ */ I.jsx("h2", { className: Yt.title, children: "Встреча успешно забронирована!" }),
    /* @__PURE__ */ I.jsx("p", { className: Yt.subtitle, children: "На ваш email отправлена ссылка на встречу" }),
    /* @__PURE__ */ I.jsxs("div", { className: Yt.details, children: [
      /* @__PURE__ */ I.jsxs("div", { className: Yt.detailRow, children: [
        /* @__PURE__ */ I.jsx("span", { className: Yt.detailLabel, children: "📅 Дата:" }),
        /* @__PURE__ */ I.jsx("span", { className: Yt.detailValue, children: h })
      ] }),
      /* @__PURE__ */ I.jsxs("div", { className: Yt.detailRow, children: [
        /* @__PURE__ */ I.jsx("span", { className: Yt.detailLabel, children: "🕐 Время:" }),
        /* @__PURE__ */ I.jsx("span", { className: Yt.detailValue, children: y })
      ] }),
      /* @__PURE__ */ I.jsxs("div", { className: Yt.detailRow, children: [
        /* @__PURE__ */ I.jsx("span", { className: Yt.detailLabel, children: "👤 Имя:" }),
        /* @__PURE__ */ I.jsx("span", { className: Yt.detailValue, children: s.name })
      ] }),
      /* @__PURE__ */ I.jsxs("div", { className: Yt.detailRow, children: [
        /* @__PURE__ */ I.jsx("span", { className: Yt.detailLabel, children: "📧 Email:" }),
        /* @__PURE__ */ I.jsx("span", { className: Yt.detailValue, children: s.email })
      ] }),
      /* @__PURE__ */ I.jsxs("div", { className: Yt.detailRow, children: [
        /* @__PURE__ */ I.jsx("span", { className: Yt.detailLabel, children: "📞 Телефон:" }),
        /* @__PURE__ */ I.jsx("span", { className: Yt.detailValue, children: s.phone })
      ] })
    ] }),
    /* @__PURE__ */ I.jsx(
      "a",
      {
        href: c.meetLink,
        target: "_blank",
        rel: "noopener noreferrer",
        className: Yt.meetLink,
        children: "Открыть Google Meet"
      }
    ),
    /* @__PURE__ */ I.jsx("button", { onClick: r, className: Yt.newBookingButton, children: "Забронировать еще одну встречу" })
  ] });
}, YS = "_widget_1pjbl_1", wS = "_content_1pjbl_8", GS = "_leftColumn_1pjbl_15", LS = "_centerColumn_1pjbl_23", VS = "_rightColumn_1pjbl_28", XS = "_formContent_1pjbl_37", ZS = "_successContent_1pjbl_38", Tn = {
  widget: YS,
  content: wS,
  leftColumn: GS,
  centerColumn: LS,
  rightColumn: VS,
  formContent: XS,
  successContent: ZS
}, KS = ({ specialist: u }) => {
  const { currentStep: c } = ba((s) => s.booking);
  return Pe(() => {
    (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0);
  }, []), /* @__PURE__ */ I.jsxs("div", { className: Tn.widget, children: [
    c === "calendar" && /* @__PURE__ */ I.jsxs("div", { className: Tn.content, children: [
      /* @__PURE__ */ I.jsx("div", { className: Tn.leftColumn, children: /* @__PURE__ */ I.jsx(dS, { specialist: u }) }),
      /* @__PURE__ */ I.jsx("div", { className: Tn.centerColumn, children: /* @__PURE__ */ I.jsx(xp, {}) }),
      /* @__PURE__ */ I.jsx("div", { className: Tn.rightColumn, children: /* @__PURE__ */ I.jsx(Kp, {}) })
    ] }),
    c === "form" && /* @__PURE__ */ I.jsx("div", { className: Tn.formContent, children: /* @__PURE__ */ I.jsx(DS, {}) }),
    c === "success" && /* @__PURE__ */ I.jsx("div", { className: Tn.successContent, children: /* @__PURE__ */ I.jsx(HS, {}) })
  ] });
};
function JS(u, c) {
  const s = document.getElementById(u);
  if (!s) {
    console.error(`Element with id "${u}" not found`);
    return;
  }
  lp({
    apiUrl: c.apiUrl,
    apiToken: c.apiToken
  }), c.theme?.primaryColor && document.documentElement.style.setProperty(
    "--primary-color",
    c.theme.primaryColor
  ), c.theme?.secondaryColor && document.documentElement.style.setProperty(
    "--secondary-color",
    c.theme.secondaryColor
  ), w2.createRoot(s).render(
    va.createElement(
      va.StrictMode,
      null,
      va.createElement(
        l1,
        { store: vp, children: va.createElement(KS, { specialist: c.specialist }) }
      )
    )
  );
}
typeof window < "u" && (window.GoogleMeetBooking = {
  init: JS
});
export {
  JS as initBookingWidget
};
