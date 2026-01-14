function Rh(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var Fr = { exports: {} }, ye = {};
var Qm;
function Q2() {
  if (Qm) return ye;
  Qm = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), m = /* @__PURE__ */ Symbol.for("react.consumer"), g = /* @__PURE__ */ Symbol.for("react.context"), O = /* @__PURE__ */ Symbol.for("react.forward_ref"), p = /* @__PURE__ */ Symbol.for("react.suspense"), h = /* @__PURE__ */ Symbol.for("react.memo"), q = /* @__PURE__ */ Symbol.for("react.lazy"), S = /* @__PURE__ */ Symbol.for("react.activity"), C = Symbol.iterator;
  function G(y) {
    return y === null || typeof y != "object" ? null : (y = C && y[C] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var j = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, X = Object.assign, U = {};
  function Y(y, K, le) {
    this.props = y, this.context = K, this.refs = U, this.updater = le || j;
  }
  Y.prototype.isReactComponent = {}, Y.prototype.setState = function(y, K) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, K, "setState");
  }, Y.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function k() {
  }
  k.prototype = Y.prototype;
  function b(y, K, le) {
    this.props = y, this.context = K, this.refs = U, this.updater = le || j;
  }
  var z = b.prototype = new k();
  z.constructor = b, X(z, Y.prototype), z.isPureReactComponent = !0;
  var T = Array.isArray;
  function A() {
  }
  var R = { H: null, A: null, T: null, S: null }, V = Object.prototype.hasOwnProperty;
  function L(y, K, le) {
    var ne = le.ref;
    return {
      $$typeof: u,
      type: y,
      key: K,
      ref: ne !== void 0 ? ne : null,
      props: le
    };
  }
  function x(y, K) {
    return L(y.type, K, y.props);
  }
  function _(y) {
    return typeof y == "object" && y !== null && y.$$typeof === u;
  }
  function M(y) {
    var K = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(le) {
      return K[le];
    });
  }
  var w = /\/+/g;
  function W(y, K) {
    return typeof y == "object" && y !== null && y.key != null ? M("" + y.key) : K.toString(36);
  }
  function ae(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(A, A) : (y.status = "pending", y.then(
          function(K) {
            y.status === "pending" && (y.status = "fulfilled", y.value = K);
          },
          function(K) {
            y.status === "pending" && (y.status = "rejected", y.reason = K);
          }
        )), y.status) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function D(y, K, le, ne, ce) {
    var re = typeof y;
    (re === "undefined" || re === "boolean") && (y = null);
    var ie = !1;
    if (y === null) ie = !0;
    else
      switch (re) {
        case "bigint":
        case "string":
        case "number":
          ie = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case u:
            case c:
              ie = !0;
              break;
            case q:
              return ie = y._init, D(
                ie(y._payload),
                K,
                le,
                ne,
                ce
              );
          }
      }
    if (ie)
      return ce = ce(y), ie = ne === "" ? "." + W(y, 0) : ne, T(ce) ? (le = "", ie != null && (le = ie.replace(w, "$&/") + "/"), D(ce, K, le, "", function(pe) {
        return pe;
      })) : ce != null && (_(ce) && (ce = x(
        ce,
        le + (ce.key == null || y && y.key === ce.key ? "" : ("" + ce.key).replace(
          w,
          "$&/"
        ) + "/") + ie
      )), K.push(ce)), 1;
    ie = 0;
    var Se = ne === "" ? "." : ne + ":";
    if (T(y))
      for (var de = 0; de < y.length; de++)
        ne = y[de], re = Se + W(ne, de), ie += D(
          ne,
          K,
          le,
          re,
          ce
        );
    else if (de = G(y), typeof de == "function")
      for (y = de.call(y), de = 0; !(ne = y.next()).done; )
        ne = ne.value, re = Se + W(ne, de++), ie += D(
          ne,
          K,
          le,
          re,
          ce
        );
    else if (re === "object") {
      if (typeof y.then == "function")
        return D(
          ae(y),
          K,
          le,
          ne,
          ce
        );
      throw K = String(y), Error(
        "Objects are not valid as a React child (found: " + (K === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : K) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ie;
  }
  function F(y, K, le) {
    if (y == null) return y;
    var ne = [], ce = 0;
    return D(y, ne, "", "", function(re) {
      return K.call(le, re, ce++);
    }), ne;
  }
  function I(y) {
    if (y._status === -1) {
      var K = y._result;
      K = K(), K.then(
        function(le) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = le);
        },
        function(le) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = le);
        }
      ), y._status === -1 && (y._status = 0, y._result = K);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var te = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var K = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(K)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  }, ue = {
    map: F,
    forEach: function(y, K, le) {
      F(
        y,
        function() {
          K.apply(this, arguments);
        },
        le
      );
    },
    count: function(y) {
      var K = 0;
      return F(y, function() {
        K++;
      }), K;
    },
    toArray: function(y) {
      return F(y, function(K) {
        return K;
      }) || [];
    },
    only: function(y) {
      if (!_(y))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return y;
    }
  };
  return ye.Activity = S, ye.Children = ue, ye.Component = Y, ye.Fragment = s, ye.Profiler = d, ye.PureComponent = b, ye.StrictMode = r, ye.Suspense = p, ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = R, ye.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return R.H.useMemoCache(y);
    }
  }, ye.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, ye.cacheSignal = function() {
    return null;
  }, ye.cloneElement = function(y, K, le) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var ne = X({}, y.props), ce = y.key;
    if (K != null)
      for (re in K.key !== void 0 && (ce = "" + K.key), K)
        !V.call(K, re) || re === "key" || re === "__self" || re === "__source" || re === "ref" && K.ref === void 0 || (ne[re] = K[re]);
    var re = arguments.length - 2;
    if (re === 1) ne.children = le;
    else if (1 < re) {
      for (var ie = Array(re), Se = 0; Se < re; Se++)
        ie[Se] = arguments[Se + 2];
      ne.children = ie;
    }
    return L(y.type, ce, ne);
  }, ye.createContext = function(y) {
    return y = {
      $$typeof: g,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: m,
      _context: y
    }, y;
  }, ye.createElement = function(y, K, le) {
    var ne, ce = {}, re = null;
    if (K != null)
      for (ne in K.key !== void 0 && (re = "" + K.key), K)
        V.call(K, ne) && ne !== "key" && ne !== "__self" && ne !== "__source" && (ce[ne] = K[ne]);
    var ie = arguments.length - 2;
    if (ie === 1) ce.children = le;
    else if (1 < ie) {
      for (var Se = Array(ie), de = 0; de < ie; de++)
        Se[de] = arguments[de + 2];
      ce.children = Se;
    }
    if (y && y.defaultProps)
      for (ne in ie = y.defaultProps, ie)
        ce[ne] === void 0 && (ce[ne] = ie[ne]);
    return L(y, re, ce);
  }, ye.createRef = function() {
    return { current: null };
  }, ye.forwardRef = function(y) {
    return { $$typeof: O, render: y };
  }, ye.isValidElement = _, ye.lazy = function(y) {
    return {
      $$typeof: q,
      _payload: { _status: -1, _result: y },
      _init: I
    };
  }, ye.memo = function(y, K) {
    return {
      $$typeof: h,
      type: y,
      compare: K === void 0 ? null : K
    };
  }, ye.startTransition = function(y) {
    var K = R.T, le = {};
    R.T = le;
    try {
      var ne = y(), ce = R.S;
      ce !== null && ce(le, ne), typeof ne == "object" && ne !== null && typeof ne.then == "function" && ne.then(A, te);
    } catch (re) {
      te(re);
    } finally {
      K !== null && le.types !== null && (K.types = le.types), R.T = K;
    }
  }, ye.unstable_useCacheRefresh = function() {
    return R.H.useCacheRefresh();
  }, ye.use = function(y) {
    return R.H.use(y);
  }, ye.useActionState = function(y, K, le) {
    return R.H.useActionState(y, K, le);
  }, ye.useCallback = function(y, K) {
    return R.H.useCallback(y, K);
  }, ye.useContext = function(y) {
    return R.H.useContext(y);
  }, ye.useDebugValue = function() {
  }, ye.useDeferredValue = function(y, K) {
    return R.H.useDeferredValue(y, K);
  }, ye.useEffect = function(y, K) {
    return R.H.useEffect(y, K);
  }, ye.useEffectEvent = function(y) {
    return R.H.useEffectEvent(y);
  }, ye.useId = function() {
    return R.H.useId();
  }, ye.useImperativeHandle = function(y, K, le) {
    return R.H.useImperativeHandle(y, K, le);
  }, ye.useInsertionEffect = function(y, K) {
    return R.H.useInsertionEffect(y, K);
  }, ye.useLayoutEffect = function(y, K) {
    return R.H.useLayoutEffect(y, K);
  }, ye.useMemo = function(y, K) {
    return R.H.useMemo(y, K);
  }, ye.useOptimistic = function(y, K) {
    return R.H.useOptimistic(y, K);
  }, ye.useReducer = function(y, K, le) {
    return R.H.useReducer(y, K, le);
  }, ye.useRef = function(y) {
    return R.H.useRef(y);
  }, ye.useState = function(y) {
    return R.H.useState(y);
  }, ye.useSyncExternalStore = function(y, K, le) {
    return R.H.useSyncExternalStore(
      y,
      K,
      le
    );
  }, ye.useTransition = function() {
    return R.H.useTransition();
  }, ye.version = "19.2.3", ye;
}
var Bm;
function Ac() {
  return Bm || (Bm = 1, Fr.exports = Q2()), Fr.exports;
}
var se = Ac();
const tc = /* @__PURE__ */ Rh(se);
var Wr = { exports: {} }, ou = {}, $r = { exports: {} }, Ir = {};
var Hm;
function B2() {
  return Hm || (Hm = 1, (function(u) {
    function c(D, F) {
      var I = D.length;
      D.push(F);
      e: for (; 0 < I; ) {
        var te = I - 1 >>> 1, ue = D[te];
        if (0 < d(ue, F))
          D[te] = F, D[I] = ue, I = te;
        else break e;
      }
    }
    function s(D) {
      return D.length === 0 ? null : D[0];
    }
    function r(D) {
      if (D.length === 0) return null;
      var F = D[0], I = D.pop();
      if (I !== F) {
        D[0] = I;
        e: for (var te = 0, ue = D.length, y = ue >>> 1; te < y; ) {
          var K = 2 * (te + 1) - 1, le = D[K], ne = K + 1, ce = D[ne];
          if (0 > d(le, I))
            ne < ue && 0 > d(ce, le) ? (D[te] = ce, D[ne] = I, te = ne) : (D[te] = le, D[K] = I, te = K);
          else if (ne < ue && 0 > d(ce, I))
            D[te] = ce, D[ne] = I, te = ne;
          else break e;
        }
      }
      return F;
    }
    function d(D, F) {
      var I = D.sortIndex - F.sortIndex;
      return I !== 0 ? I : D.id - F.id;
    }
    if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      u.unstable_now = function() {
        return m.now();
      };
    } else {
      var g = Date, O = g.now();
      u.unstable_now = function() {
        return g.now() - O;
      };
    }
    var p = [], h = [], q = 1, S = null, C = 3, G = !1, j = !1, X = !1, U = !1, Y = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
    function z(D) {
      for (var F = s(h); F !== null; ) {
        if (F.callback === null) r(h);
        else if (F.startTime <= D)
          r(h), F.sortIndex = F.expirationTime, c(p, F);
        else break;
        F = s(h);
      }
    }
    function T(D) {
      if (X = !1, z(D), !j)
        if (s(p) !== null)
          j = !0, A || (A = !0, M());
        else {
          var F = s(h);
          F !== null && ae(T, F.startTime - D);
        }
    }
    var A = !1, R = -1, V = 5, L = -1;
    function x() {
      return U ? !0 : !(u.unstable_now() - L < V);
    }
    function _() {
      if (U = !1, A) {
        var D = u.unstable_now();
        L = D;
        var F = !0;
        try {
          e: {
            j = !1, X && (X = !1, k(R), R = -1), G = !0;
            var I = C;
            try {
              t: {
                for (z(D), S = s(p); S !== null && !(S.expirationTime > D && x()); ) {
                  var te = S.callback;
                  if (typeof te == "function") {
                    S.callback = null, C = S.priorityLevel;
                    var ue = te(
                      S.expirationTime <= D
                    );
                    if (D = u.unstable_now(), typeof ue == "function") {
                      S.callback = ue, z(D), F = !0;
                      break t;
                    }
                    S === s(p) && r(p), z(D);
                  } else r(p);
                  S = s(p);
                }
                if (S !== null) F = !0;
                else {
                  var y = s(h);
                  y !== null && ae(
                    T,
                    y.startTime - D
                  ), F = !1;
                }
              }
              break e;
            } finally {
              S = null, C = I, G = !1;
            }
            F = void 0;
          }
        } finally {
          F ? M() : A = !1;
        }
      }
    }
    var M;
    if (typeof b == "function")
      M = function() {
        b(_);
      };
    else if (typeof MessageChannel < "u") {
      var w = new MessageChannel(), W = w.port2;
      w.port1.onmessage = _, M = function() {
        W.postMessage(null);
      };
    } else
      M = function() {
        Y(_, 0);
      };
    function ae(D, F) {
      R = Y(function() {
        D(u.unstable_now());
      }, F);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, u.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : V = 0 < D ? Math.floor(1e3 / D) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, u.unstable_next = function(D) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = C;
      }
      var I = C;
      C = F;
      try {
        return D();
      } finally {
        C = I;
      }
    }, u.unstable_requestPaint = function() {
      U = !0;
    }, u.unstable_runWithPriority = function(D, F) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var I = C;
      C = D;
      try {
        return F();
      } finally {
        C = I;
      }
    }, u.unstable_scheduleCallback = function(D, F, I) {
      var te = u.unstable_now();
      switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? te + I : te) : I = te, D) {
        case 1:
          var ue = -1;
          break;
        case 2:
          ue = 250;
          break;
        case 5:
          ue = 1073741823;
          break;
        case 4:
          ue = 1e4;
          break;
        default:
          ue = 5e3;
      }
      return ue = I + ue, D = {
        id: q++,
        callback: F,
        priorityLevel: D,
        startTime: I,
        expirationTime: ue,
        sortIndex: -1
      }, I > te ? (D.sortIndex = I, c(h, D), s(p) === null && D === s(h) && (X ? (k(R), R = -1) : X = !0, ae(T, I - te))) : (D.sortIndex = ue, c(p, D), j || G || (j = !0, A || (A = !0, M()))), D;
    }, u.unstable_shouldYield = x, u.unstable_wrapCallback = function(D) {
      var F = C;
      return function() {
        var I = C;
        C = F;
        try {
          return D.apply(this, arguments);
        } finally {
          C = I;
        }
      };
    };
  })(Ir)), Ir;
}
var wm;
function H2() {
  return wm || (wm = 1, $r.exports = B2()), $r.exports;
}
var Pr = { exports: {} }, ft = {};
var Ym;
function w2() {
  if (Ym) return ft;
  Ym = 1;
  var u = Ac();
  function c(p) {
    var h = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var q = 2; q < arguments.length; q++)
        h += "&args[]=" + encodeURIComponent(arguments[q]);
    }
    return "Minified React error #" + p + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s() {
  }
  var r = {
    d: {
      f: s,
      r: function() {
        throw Error(c(522));
      },
      D: s,
      C: s,
      L: s,
      m: s,
      X: s,
      S: s,
      M: s
    },
    p: 0,
    findDOMNode: null
  }, d = /* @__PURE__ */ Symbol.for("react.portal");
  function m(p, h, q) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: S == null ? null : "" + S,
      children: p,
      containerInfo: h,
      implementation: q
    };
  }
  var g = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function O(p, h) {
    if (p === "font") return "";
    if (typeof h == "string")
      return h === "use-credentials" ? h : "";
  }
  return ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, ft.createPortal = function(p, h) {
    var q = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(c(299));
    return m(p, h, null, q);
  }, ft.flushSync = function(p) {
    var h = g.T, q = r.p;
    try {
      if (g.T = null, r.p = 2, p) return p();
    } finally {
      g.T = h, r.p = q, r.d.f();
    }
  }, ft.preconnect = function(p, h) {
    typeof p == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, r.d.C(p, h));
  }, ft.prefetchDNS = function(p) {
    typeof p == "string" && r.d.D(p);
  }, ft.preinit = function(p, h) {
    if (typeof p == "string" && h && typeof h.as == "string") {
      var q = h.as, S = O(q, h.crossOrigin), C = typeof h.integrity == "string" ? h.integrity : void 0, G = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      q === "style" ? r.d.S(
        p,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: S,
          integrity: C,
          fetchPriority: G
        }
      ) : q === "script" && r.d.X(p, {
        crossOrigin: S,
        integrity: C,
        fetchPriority: G,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      });
    }
  }, ft.preinitModule = function(p, h) {
    if (typeof p == "string")
      if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var q = O(
            h.as,
            h.crossOrigin
          );
          r.d.M(p, {
            crossOrigin: q,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && r.d.M(p);
  }, ft.preload = function(p, h) {
    if (typeof p == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var q = h.as, S = O(q, h.crossOrigin);
      r.d.L(p, q, {
        crossOrigin: S,
        integrity: typeof h.integrity == "string" ? h.integrity : void 0,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0,
        type: typeof h.type == "string" ? h.type : void 0,
        fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
        referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
        imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
        imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
        media: typeof h.media == "string" ? h.media : void 0
      });
    }
  }, ft.preloadModule = function(p, h) {
    if (typeof p == "string")
      if (h) {
        var q = O(h.as, h.crossOrigin);
        r.d.m(p, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: q,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else r.d.m(p);
  }, ft.requestFormReset = function(p) {
    r.d.r(p);
  }, ft.unstable_batchedUpdates = function(p, h) {
    return p(h);
  }, ft.useFormState = function(p, h, q) {
    return g.H.useFormState(p, h, q);
  }, ft.useFormStatus = function() {
    return g.H.useHostTransitionStatus();
  }, ft.version = "19.2.3", ft;
}
var Lm;
function Y2() {
  if (Lm) return Pr.exports;
  Lm = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), Pr.exports = w2(), Pr.exports;
}
var Gm;
function L2() {
  if (Gm) return ou;
  Gm = 1;
  var u = H2(), c = Ac(), s = Y2();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function m(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function g(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function O(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (m(e) !== e)
      throw Error(r(188));
  }
  function h(e) {
    var t = e.alternate;
    if (!t) {
      if (t = m(e), t === null) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var a = n.return;
      if (a === null) break;
      var i = a.alternate;
      if (i === null) {
        if (l = a.return, l !== null) {
          n = l;
          continue;
        }
        break;
      }
      if (a.child === i.child) {
        for (i = a.child; i; ) {
          if (i === n) return p(a), e;
          if (i === l) return p(a), t;
          i = i.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== l.return) n = a, l = i;
      else {
        for (var f = !1, o = a.child; o; ) {
          if (o === n) {
            f = !0, n = a, l = i;
            break;
          }
          if (o === l) {
            f = !0, l = a, n = i;
            break;
          }
          o = o.sibling;
        }
        if (!f) {
          for (o = i.child; o; ) {
            if (o === n) {
              f = !0, n = i, l = a;
              break;
            }
            if (o === l) {
              f = !0, l = i, n = a;
              break;
            }
            o = o.sibling;
          }
          if (!f) throw Error(r(189));
        }
      }
      if (n.alternate !== l) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? e : t;
  }
  function q(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = q(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var S = Object.assign, C = /* @__PURE__ */ Symbol.for("react.element"), G = /* @__PURE__ */ Symbol.for("react.transitional.element"), j = /* @__PURE__ */ Symbol.for("react.portal"), X = /* @__PURE__ */ Symbol.for("react.fragment"), U = /* @__PURE__ */ Symbol.for("react.strict_mode"), Y = /* @__PURE__ */ Symbol.for("react.profiler"), k = /* @__PURE__ */ Symbol.for("react.consumer"), b = /* @__PURE__ */ Symbol.for("react.context"), z = /* @__PURE__ */ Symbol.for("react.forward_ref"), T = /* @__PURE__ */ Symbol.for("react.suspense"), A = /* @__PURE__ */ Symbol.for("react.suspense_list"), R = /* @__PURE__ */ Symbol.for("react.memo"), V = /* @__PURE__ */ Symbol.for("react.lazy"), L = /* @__PURE__ */ Symbol.for("react.activity"), x = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), _ = Symbol.iterator;
  function M(e) {
    return e === null || typeof e != "object" ? null : (e = _ && e[_] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var w = /* @__PURE__ */ Symbol.for("react.client.reference");
  function W(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === w ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case X:
        return "Fragment";
      case Y:
        return "Profiler";
      case U:
        return "StrictMode";
      case T:
        return "Suspense";
      case A:
        return "SuspenseList";
      case L:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case j:
          return "Portal";
        case b:
          return e.displayName || "Context";
        case k:
          return (e._context.displayName || "Context") + ".Consumer";
        case z:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case R:
          return t = e.displayName || null, t !== null ? t : W(e.type) || "Memo";
        case V:
          t = e._payload, e = e._init;
          try {
            return W(e(t));
          } catch {
          }
      }
    return null;
  }
  var ae = Array.isArray, D = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, te = [], ue = -1;
  function y(e) {
    return { current: e };
  }
  function K(e) {
    0 > ue || (e.current = te[ue], te[ue] = null, ue--);
  }
  function le(e, t) {
    ue++, te[ue] = e.current, e.current = t;
  }
  var ne = y(null), ce = y(null), re = y(null), ie = y(null);
  function Se(e, t) {
    switch (le(re, t), le(ce, e), le(ne, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? um(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = um(t), e = im(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    K(ne), le(ne, e);
  }
  function de() {
    K(ne), K(ce), K(re);
  }
  function pe(e) {
    e.memoizedState !== null && le(ie, e);
    var t = ne.current, n = im(t, e.type);
    t !== n && (le(ce, e), le(ne, n));
  }
  function rt(e) {
    ce.current === e && (K(ne), K(ce)), ie.current === e && (K(ie), cu._currentValue = I);
  }
  var Pe, en;
  function et(e) {
    if (Pe === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Pe = t && t[1] || "", en = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Pe + e + en;
  }
  var Ft = !1;
  function Ut(e, t) {
    if (!e || Ft) return "";
    Ft = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var P = function() {
                throw Error();
              };
              if (Object.defineProperty(P.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(P, []);
                } catch (Z) {
                  var H = Z;
                }
                Reflect.construct(e, [], P);
              } else {
                try {
                  P.call();
                } catch (Z) {
                  H = Z;
                }
                e.call(P.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Z) {
                H = Z;
              }
              (P = e()) && typeof P.catch == "function" && P.catch(function() {
              });
            }
          } catch (Z) {
            if (Z && H && typeof Z.stack == "string")
              return [Z.stack, H.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      a && a.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var i = l.DetermineComponentFrameRoot(), f = i[0], o = i[1];
      if (f && o) {
        var v = f.split(`
`), B = o.split(`
`);
        for (a = l = 0; l < v.length && !v[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; a < B.length && !B[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (l === v.length || a === B.length)
          for (l = v.length - 1, a = B.length - 1; 1 <= l && 0 <= a && v[l] !== B[a]; )
            a--;
        for (; 1 <= l && 0 <= a; l--, a--)
          if (v[l] !== B[a]) {
            if (l !== 1 || a !== 1)
              do
                if (l--, a--, 0 > a || v[l] !== B[a]) {
                  var J = `
` + v[l].replace(" at new ", " at ");
                  return e.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", e.displayName)), J;
                }
              while (1 <= l && 0 <= a);
            break;
          }
      }
    } finally {
      Ft = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? et(n) : "";
  }
  function Mn(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return et(e.type);
      case 16:
        return et("Lazy");
      case 13:
        return e.child !== t && t !== null ? et("Suspense Fallback") : et("Suspense");
      case 19:
        return et("SuspenseList");
      case 0:
      case 15:
        return Ut(e.type, !1);
      case 11:
        return Ut(e.type.render, !1);
      case 1:
        return Ut(e.type, !0);
      case 31:
        return et("Activity");
      default:
        return "";
    }
  }
  function Dl(e) {
    try {
      var t = "", n = null;
      do
        t += Mn(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var tl = Object.prototype.hasOwnProperty, pa = u.unstable_scheduleCallback, zl = u.unstable_cancelCallback, qc = u.unstable_shouldYield, yy = u.unstable_requestPaint, St = u.unstable_now, vy = u.unstable_getCurrentPriorityLevel, Qs = u.unstable_ImmediatePriority, Bs = u.unstable_UserBlockingPriority, Hu = u.unstable_NormalPriority, gy = u.unstable_LowPriority, Hs = u.unstable_IdlePriority, py = u.log, Sy = u.unstable_setDisableYieldValue, Sa = null, bt = null;
  function Cn(e) {
    if (typeof py == "function" && Sy(e), bt && typeof bt.setStrictMode == "function")
      try {
        bt.setStrictMode(Sa, e);
      } catch {
      }
  }
  var _t = Math.clz32 ? Math.clz32 : Ey, by = Math.log, _y = Math.LN2;
  function Ey(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (by(e) / _y | 0) | 0;
  }
  var wu = 256, Yu = 262144, Lu = 4194304;
  function nl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
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
        return e;
    }
  }
  function Gu(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var a = 0, i = e.suspendedLanes, f = e.pingedLanes;
    e = e.warmLanes;
    var o = l & 134217727;
    return o !== 0 ? (l = o & ~i, l !== 0 ? a = nl(l) : (f &= o, f !== 0 ? a = nl(f) : n || (n = o & ~e, n !== 0 && (a = nl(n))))) : (o = l & ~i, o !== 0 ? a = nl(o) : f !== 0 ? a = nl(f) : n || (n = l & ~e, n !== 0 && (a = nl(n)))), a === 0 ? 0 : t !== 0 && t !== a && (t & i) === 0 && (i = a & -a, n = t & -t, i >= n || i === 32 && (n & 4194048) !== 0) ? t : a;
  }
  function ba(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Ty(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
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
        return t + 5e3;
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
  function ws() {
    var e = Lu;
    return Lu <<= 1, (Lu & 62914560) === 0 && (Lu = 4194304), e;
  }
  function Qc(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function _a(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Ay(e, t, n, l, a, i) {
    var f = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var o = e.entanglements, v = e.expirationTimes, B = e.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var J = 31 - _t(n), P = 1 << J;
      o[J] = 0, v[J] = -1;
      var H = B[J];
      if (H !== null)
        for (B[J] = null, J = 0; J < H.length; J++) {
          var Z = H[J];
          Z !== null && (Z.lane &= -536870913);
        }
      n &= ~P;
    }
    l !== 0 && Ys(e, l, 0), i !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(f & ~t));
  }
  function Ys(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - _t(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 261930;
  }
  function Ls(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var l = 31 - _t(n), a = 1 << l;
      a & t | e[l] & t && (e[l] |= t), n &= ~a;
    }
  }
  function Gs(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Bc(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Bc(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Hc(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Vs() {
    var e = F.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Om(e.type));
  }
  function Xs(e, t) {
    var n = F.p;
    try {
      return F.p = e, t();
    } finally {
      F.p = n;
    }
  }
  var Dn = Math.random().toString(36).slice(2), tt = "__reactFiber$" + Dn, ot = "__reactProps$" + Dn, Ol = "__reactContainer$" + Dn, wc = "__reactEvents$" + Dn, My = "__reactListeners$" + Dn, Cy = "__reactHandles$" + Dn, Zs = "__reactResources$" + Dn, Ea = "__reactMarker$" + Dn;
  function Yc(e) {
    delete e[tt], delete e[ot], delete e[wc], delete e[My], delete e[Cy];
  }
  function Rl(e) {
    var t = e[tt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Ol] || n[tt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = mm(e); e !== null; ) {
            if (n = e[tt]) return n;
            e = mm(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Nl(e) {
    if (e = e[tt] || e[Ol]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Ta(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function Ul(e) {
    var t = e[Zs];
    return t || (t = e[Zs] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Fe(e) {
    e[Ea] = !0;
  }
  var Ks = /* @__PURE__ */ new Set(), Js = {};
  function ll(e, t) {
    jl(e, t), jl(e + "Capture", t);
  }
  function jl(e, t) {
    for (Js[e] = t, e = 0; e < t.length; e++)
      Ks.add(t[e]);
  }
  var Dy = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ks = {}, Fs = {};
  function zy(e) {
    return tl.call(Fs, e) ? !0 : tl.call(ks, e) ? !1 : Dy.test(e) ? Fs[e] = !0 : (ks[e] = !0, !1);
  }
  function Vu(e, t, n) {
    if (zy(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Xu(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function tn(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + l);
    }
  }
  function jt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ws(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Oy(e, t, n) {
    var l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var a = l.get, i = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return a.call(this);
        },
        set: function(f) {
          n = "" + f, i.call(this, f);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(f) {
          n = "" + f;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Lc(e) {
    if (!e._valueTracker) {
      var t = Ws(e) ? "checked" : "value";
      e._valueTracker = Oy(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function $s(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), l = "";
    return e && (l = Ws(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Zu(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Ry = /[\n"\\]/g;
  function xt(e) {
    return e.replace(
      Ry,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Gc(e, t, n, l, a, i, f, o) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + jt(t)) : e.value !== "" + jt(t) && (e.value = "" + jt(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? Vc(e, f, jt(t)) : n != null ? Vc(e, f, jt(n)) : l != null && e.removeAttribute("value"), a == null && i != null && (e.defaultChecked = !!i), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.name = "" + jt(o) : e.removeAttribute("name");
  }
  function Is(e, t, n, l, a, i, f, o) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || n != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        Lc(e);
        return;
      }
      n = n != null ? "" + jt(n) : "", t = t != null ? "" + jt(t) : n, o || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? a, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = o ? e.checked : !!l, e.defaultChecked = !!l, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), Lc(e);
  }
  function Vc(e, t, n) {
    t === "number" && Zu(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function xl(e, t, n, l) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < n.length; a++)
        t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++)
        a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + jt(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          e[a].selected = !0, l && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ps(e, t, n) {
    if (t != null && (t = "" + jt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + jt(n) : "";
  }
  function eo(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(r(92));
        if (ae(l)) {
          if (1 < l.length) throw Error(r(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), t = n;
    }
    n = jt(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l), Lc(e);
  }
  function ql(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ny = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function to(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Ny.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function no(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (e = e.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var a in t)
        l = t[a], t.hasOwnProperty(a) && n[a] !== l && to(e, a, l);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && to(e, i, t[i]);
  }
  function Xc(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
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
  var Uy = /* @__PURE__ */ new Map([
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
  ]), jy = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ku(e) {
    return jy.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function nn() {
  }
  var Zc = null;
  function Kc(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ql = null, Bl = null;
  function lo(e) {
    var t = Nl(e);
    if (t && (e = t.stateNode)) {
      var n = e[ot] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Gc(
            e,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + xt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var a = l[ot] || null;
                if (!a) throw Error(r(90));
                Gc(
                  l,
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
            for (t = 0; t < n.length; t++)
              l = n[t], l.form === e.form && $s(l);
          }
          break e;
        case "textarea":
          Ps(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && xl(e, !!n.multiple, t, !1);
      }
    }
  }
  var Jc = !1;
  function ao(e, t, n) {
    if (Jc) return e(t, n);
    Jc = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Jc = !1, (Ql !== null || Bl !== null) && (ji(), Ql && (t = Ql, e = Bl, Bl = Ql = null, lo(t), e)))
        for (t = 0; t < e.length; t++) lo(e[t]);
    }
  }
  function Aa(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[ot] || null;
    if (l === null) return null;
    n = l[t];
    e: switch (t) {
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
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function")
      throw Error(
        r(231, t, typeof n)
      );
    return n;
  }
  var ln = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), kc = !1;
  if (ln)
    try {
      var Ma = {};
      Object.defineProperty(Ma, "passive", {
        get: function() {
          kc = !0;
        }
      }), window.addEventListener("test", Ma, Ma), window.removeEventListener("test", Ma, Ma);
    } catch {
      kc = !1;
    }
  var zn = null, Fc = null, Ju = null;
  function uo() {
    if (Ju) return Ju;
    var e, t = Fc, n = t.length, l, a = "value" in zn ? zn.value : zn.textContent, i = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var f = n - e;
    for (l = 1; l <= f && t[n - l] === a[i - l]; l++) ;
    return Ju = a.slice(e, 1 < l ? 1 - l : void 0);
  }
  function ku(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Fu() {
    return !0;
  }
  function io() {
    return !1;
  }
  function dt(e) {
    function t(n, l, a, i, f) {
      this._reactName = n, this._targetInst = a, this.type = l, this.nativeEvent = i, this.target = f, this.currentTarget = null;
      for (var o in e)
        e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(i) : i[o]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Fu : io, this.isPropagationStopped = io, this;
    }
    return S(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Fu);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Fu);
      },
      persist: function() {
      },
      isPersistent: Fu
    }), t;
  }
  var al = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Wu = dt(al), Ca = S({}, al, { view: 0, detail: 0 }), xy = dt(Ca), Wc, $c, Da, $u = S({}, Ca, {
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
    getModifierState: Pc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Da && (Da && e.type === "mousemove" ? (Wc = e.screenX - Da.screenX, $c = e.screenY - Da.screenY) : $c = Wc = 0, Da = e), Wc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : $c;
    }
  }), co = dt($u), qy = S({}, $u, { dataTransfer: 0 }), Qy = dt(qy), By = S({}, Ca, { relatedTarget: 0 }), Ic = dt(By), Hy = S({}, al, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), wy = dt(Hy), Yy = S({}, al, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Ly = dt(Yy), Gy = S({}, al, { data: 0 }), fo = dt(Gy), Vy = {
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
  }, Xy = {
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
  }, Zy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Ky(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Zy[e]) ? !!t[e] : !1;
  }
  function Pc() {
    return Ky;
  }
  var Jy = S({}, Ca, {
    key: function(e) {
      if (e.key) {
        var t = Vy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = ku(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Xy[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Pc,
    charCode: function(e) {
      return e.type === "keypress" ? ku(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? ku(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), ky = dt(Jy), Fy = S({}, $u, {
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
  }), ro = dt(Fy), Wy = S({}, Ca, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pc
  }), $y = dt(Wy), Iy = S({}, al, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Py = dt(Iy), ev = S({}, $u, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), tv = dt(ev), nv = S({}, al, {
    newState: 0,
    oldState: 0
  }), lv = dt(nv), av = [9, 13, 27, 32], ef = ln && "CompositionEvent" in window, za = null;
  ln && "documentMode" in document && (za = document.documentMode);
  var uv = ln && "TextEvent" in window && !za, so = ln && (!ef || za && 8 < za && 11 >= za), oo = " ", mo = !1;
  function ho(e, t) {
    switch (e) {
      case "keyup":
        return av.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function yo(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Hl = !1;
  function iv(e, t) {
    switch (e) {
      case "compositionend":
        return yo(t);
      case "keypress":
        return t.which !== 32 ? null : (mo = !0, oo);
      case "textInput":
        return e = t.data, e === oo && mo ? null : e;
      default:
        return null;
    }
  }
  function cv(e, t) {
    if (Hl)
      return e === "compositionend" || !ef && ho(e, t) ? (e = uo(), Ju = Fc = zn = null, Hl = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return so && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var fv = {
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
  function vo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!fv[e.type] : t === "textarea";
  }
  function go(e, t, n, l) {
    Ql ? Bl ? Bl.push(l) : Bl = [l] : Ql = l, t = Yi(t, "onChange"), 0 < t.length && (n = new Wu(
      "onChange",
      "change",
      null,
      n,
      l
    ), e.push({ event: n, listeners: t }));
  }
  var Oa = null, Ra = null;
  function rv(e) {
    P0(e, 0);
  }
  function Iu(e) {
    var t = Ta(e);
    if ($s(t)) return e;
  }
  function po(e, t) {
    if (e === "change") return t;
  }
  var So = !1;
  if (ln) {
    var tf;
    if (ln) {
      var nf = "oninput" in document;
      if (!nf) {
        var bo = document.createElement("div");
        bo.setAttribute("oninput", "return;"), nf = typeof bo.oninput == "function";
      }
      tf = nf;
    } else tf = !1;
    So = tf && (!document.documentMode || 9 < document.documentMode);
  }
  function _o() {
    Oa && (Oa.detachEvent("onpropertychange", Eo), Ra = Oa = null);
  }
  function Eo(e) {
    if (e.propertyName === "value" && Iu(Ra)) {
      var t = [];
      go(
        t,
        Ra,
        e,
        Kc(e)
      ), ao(rv, t);
    }
  }
  function sv(e, t, n) {
    e === "focusin" ? (_o(), Oa = t, Ra = n, Oa.attachEvent("onpropertychange", Eo)) : e === "focusout" && _o();
  }
  function ov(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Iu(Ra);
  }
  function dv(e, t) {
    if (e === "click") return Iu(t);
  }
  function mv(e, t) {
    if (e === "input" || e === "change")
      return Iu(t);
  }
  function hv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Et = typeof Object.is == "function" ? Object.is : hv;
  function Na(e, t) {
    if (Et(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var a = n[l];
      if (!tl.call(t, a) || !Et(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  function To(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ao(e, t) {
    var n = To(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (l = e + n.textContent.length, e <= t && l >= t)
          return { node: n, offset: t - e };
        e = l;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = To(n);
    }
  }
  function Mo(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Mo(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Co(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Zu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Zu(e.document);
    }
    return t;
  }
  function lf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var yv = ln && "documentMode" in document && 11 >= document.documentMode, wl = null, af = null, Ua = null, uf = !1;
  function Do(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    uf || wl == null || wl !== Zu(l) || (l = wl, "selectionStart" in l && lf(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Ua && Na(Ua, l) || (Ua = l, l = Yi(af, "onSelect"), 0 < l.length && (t = new Wu(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: l }), t.target = wl)));
  }
  function ul(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Yl = {
    animationend: ul("Animation", "AnimationEnd"),
    animationiteration: ul("Animation", "AnimationIteration"),
    animationstart: ul("Animation", "AnimationStart"),
    transitionrun: ul("Transition", "TransitionRun"),
    transitionstart: ul("Transition", "TransitionStart"),
    transitioncancel: ul("Transition", "TransitionCancel"),
    transitionend: ul("Transition", "TransitionEnd")
  }, cf = {}, zo = {};
  ln && (zo = document.createElement("div").style, "AnimationEvent" in window || (delete Yl.animationend.animation, delete Yl.animationiteration.animation, delete Yl.animationstart.animation), "TransitionEvent" in window || delete Yl.transitionend.transition);
  function il(e) {
    if (cf[e]) return cf[e];
    if (!Yl[e]) return e;
    var t = Yl[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in zo)
        return cf[e] = t[n];
    return e;
  }
  var Oo = il("animationend"), Ro = il("animationiteration"), No = il("animationstart"), vv = il("transitionrun"), gv = il("transitionstart"), pv = il("transitioncancel"), Uo = il("transitionend"), jo = /* @__PURE__ */ new Map(), ff = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ff.push("scrollEnd");
  function Xt(e, t) {
    jo.set(e, t), ll(t, [e]);
  }
  var Pu = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, qt = [], Ll = 0, rf = 0;
  function ei() {
    for (var e = Ll, t = rf = Ll = 0; t < e; ) {
      var n = qt[t];
      qt[t++] = null;
      var l = qt[t];
      qt[t++] = null;
      var a = qt[t];
      qt[t++] = null;
      var i = qt[t];
      if (qt[t++] = null, l !== null && a !== null) {
        var f = l.pending;
        f === null ? a.next = a : (a.next = f.next, f.next = a), l.pending = a;
      }
      i !== 0 && xo(n, a, i);
    }
  }
  function ti(e, t, n, l) {
    qt[Ll++] = e, qt[Ll++] = t, qt[Ll++] = n, qt[Ll++] = l, rf |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function sf(e, t, n, l) {
    return ti(e, t, n, l), ni(e);
  }
  function cl(e, t) {
    return ti(e, null, null, t), ni(e);
  }
  function xo(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var a = !1, i = e.return; i !== null; )
      i.childLanes |= n, l = i.alternate, l !== null && (l.childLanes |= n), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (a = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, a && t !== null && (a = 31 - _t(n), e = i.hiddenUpdates, l = e[a], l === null ? e[a] = [t] : l.push(t), t.lane = n | 536870912), i) : null;
  }
  function ni(e) {
    if (50 < eu)
      throw eu = 0, Sr = null, Error(r(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Gl = {};
  function Sv(e, t, n, l) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Tt(e, t, n, l) {
    return new Sv(e, t, n, l);
  }
  function of(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function an(e, t) {
    var n = e.alternate;
    return n === null ? (n = Tt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function qo(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function li(e, t, n, l, a, i) {
    var f = 0;
    if (l = e, typeof e == "function") of(e) && (f = 1);
    else if (typeof e == "string")
      f = A2(
        e,
        n,
        ne.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case L:
          return e = Tt(31, n, t, a), e.elementType = L, e.lanes = i, e;
        case X:
          return fl(n.children, a, i, t);
        case U:
          f = 8, a |= 24;
          break;
        case Y:
          return e = Tt(12, n, t, a | 2), e.elementType = Y, e.lanes = i, e;
        case T:
          return e = Tt(13, n, t, a), e.elementType = T, e.lanes = i, e;
        case A:
          return e = Tt(19, n, t, a), e.elementType = A, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case b:
                f = 10;
                break e;
              case k:
                f = 9;
                break e;
              case z:
                f = 11;
                break e;
              case R:
                f = 14;
                break e;
              case V:
                f = 16, l = null;
                break e;
            }
          f = 29, n = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = Tt(f, n, t, a), t.elementType = e, t.type = l, t.lanes = i, t;
  }
  function fl(e, t, n, l) {
    return e = Tt(7, e, l, t), e.lanes = n, e;
  }
  function df(e, t, n) {
    return e = Tt(6, e, null, t), e.lanes = n, e;
  }
  function Qo(e) {
    var t = Tt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function mf(e, t, n) {
    return t = Tt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Bo = /* @__PURE__ */ new WeakMap();
  function Qt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Bo.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: Dl(t)
      }, Bo.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Dl(t)
    };
  }
  var Vl = [], Xl = 0, ai = null, ja = 0, Bt = [], Ht = 0, On = null, Wt = 1, $t = "";
  function un(e, t) {
    Vl[Xl++] = ja, Vl[Xl++] = ai, ai = e, ja = t;
  }
  function Ho(e, t, n) {
    Bt[Ht++] = Wt, Bt[Ht++] = $t, Bt[Ht++] = On, On = e;
    var l = Wt;
    e = $t;
    var a = 32 - _t(l) - 1;
    l &= ~(1 << a), n += 1;
    var i = 32 - _t(t) + a;
    if (30 < i) {
      var f = a - a % 5;
      i = (l & (1 << f) - 1).toString(32), l >>= f, a -= f, Wt = 1 << 32 - _t(t) + a | n << a | l, $t = i + e;
    } else
      Wt = 1 << i | n << a | l, $t = e;
  }
  function hf(e) {
    e.return !== null && (un(e, 1), Ho(e, 1, 0));
  }
  function yf(e) {
    for (; e === ai; )
      ai = Vl[--Xl], Vl[Xl] = null, ja = Vl[--Xl], Vl[Xl] = null;
    for (; e === On; )
      On = Bt[--Ht], Bt[Ht] = null, $t = Bt[--Ht], Bt[Ht] = null, Wt = Bt[--Ht], Bt[Ht] = null;
  }
  function wo(e, t) {
    Bt[Ht++] = Wt, Bt[Ht++] = $t, Bt[Ht++] = On, Wt = t.id, $t = t.overflow, On = e;
  }
  var nt = null, xe = null, Ae = !1, Rn = null, wt = !1, vf = Error(r(519));
  function Nn(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw xa(Qt(t, e)), vf;
  }
  function Yo(e) {
    var t = e.stateNode, n = e.type, l = e.memoizedProps;
    switch (t[tt] = e, t[ot] = l, n) {
      case "dialog":
        _e("cancel", t), _e("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        _e("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < nu.length; n++)
          _e(nu[n], t);
        break;
      case "source":
        _e("error", t);
        break;
      case "img":
      case "image":
      case "link":
        _e("error", t), _e("load", t);
        break;
      case "details":
        _e("toggle", t);
        break;
      case "input":
        _e("invalid", t), Is(
          t,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        _e("invalid", t);
        break;
      case "textarea":
        _e("invalid", t), eo(t, l.value, l.defaultValue, l.children);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || lm(t.textContent, n) ? (l.popover != null && (_e("beforetoggle", t), _e("toggle", t)), l.onScroll != null && _e("scroll", t), l.onScrollEnd != null && _e("scrollend", t), l.onClick != null && (t.onclick = nn), t = !0) : t = !1, t || Nn(e, !0);
  }
  function Lo(e) {
    for (nt = e.return; nt; )
      switch (nt.tag) {
        case 5:
        case 31:
        case 13:
          wt = !1;
          return;
        case 27:
        case 3:
          wt = !0;
          return;
        default:
          nt = nt.return;
      }
  }
  function Zl(e) {
    if (e !== nt) return !1;
    if (!Ae) return Lo(e), Ae = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || xr(e.type, e.memoizedProps)), n = !n), n && xe && Nn(e), Lo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      xe = dm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      xe = dm(e);
    } else
      t === 27 ? (t = xe, Zn(e.type) ? (e = wr, wr = null, xe = e) : xe = t) : xe = nt ? Lt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function rl() {
    xe = nt = null, Ae = !1;
  }
  function gf() {
    var e = Rn;
    return e !== null && (vt === null ? vt = e : vt.push.apply(
      vt,
      e
    ), Rn = null), e;
  }
  function xa(e) {
    Rn === null ? Rn = [e] : Rn.push(e);
  }
  var pf = y(null), sl = null, cn = null;
  function Un(e, t, n) {
    le(pf, t._currentValue), t._currentValue = n;
  }
  function fn(e) {
    e._currentValue = pf.current, K(pf);
  }
  function Sf(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function bf(e, t, n, l) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var i = a.dependencies;
      if (i !== null) {
        var f = a.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var o = i;
          i = a;
          for (var v = 0; v < t.length; v++)
            if (o.context === t[v]) {
              i.lanes |= n, o = i.alternate, o !== null && (o.lanes |= n), Sf(
                i.return,
                n,
                e
              ), l || (f = null);
              break e;
            }
          i = o.next;
        }
      } else if (a.tag === 18) {
        if (f = a.return, f === null) throw Error(r(341));
        f.lanes |= n, i = f.alternate, i !== null && (i.lanes |= n), Sf(f, n, e), f = null;
      } else f = a.child;
      if (f !== null) f.return = a;
      else
        for (f = a; f !== null; ) {
          if (f === e) {
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
  function Kl(e, t, n, l) {
    e = null;
    for (var a = t, i = !1; a !== null; ) {
      if (!i) {
        if ((a.flags & 524288) !== 0) i = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var f = a.alternate;
        if (f === null) throw Error(r(387));
        if (f = f.memoizedProps, f !== null) {
          var o = a.type;
          Et(a.pendingProps.value, f.value) || (e !== null ? e.push(o) : e = [o]);
        }
      } else if (a === ie.current) {
        if (f = a.alternate, f === null) throw Error(r(387));
        f.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(cu) : e = [cu]);
      }
      a = a.return;
    }
    e !== null && bf(
      t,
      e,
      n,
      l
    ), t.flags |= 262144;
  }
  function ui(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Et(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function ol(e) {
    sl = e, cn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function lt(e) {
    return Go(sl, e);
  }
  function ii(e, t) {
    return sl === null && ol(e), Go(e, t);
  }
  function Go(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, cn === null) {
      if (e === null) throw Error(r(308));
      cn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else cn = cn.next = t;
    return n;
  }
  var bv = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, _v = u.unstable_scheduleCallback, Ev = u.unstable_NormalPriority, Xe = {
    $$typeof: b,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function _f() {
    return {
      controller: new bv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function qa(e) {
    e.refCount--, e.refCount === 0 && _v(Ev, function() {
      e.controller.abort();
    });
  }
  var Qa = null, Ef = 0, Jl = 0, kl = null;
  function Tv(e, t) {
    if (Qa === null) {
      var n = Qa = [];
      Ef = 0, Jl = Mr(), kl = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return Ef++, t.then(Vo, Vo), t;
  }
  function Vo() {
    if (--Ef === 0 && Qa !== null) {
      kl !== null && (kl.status = "fulfilled");
      var e = Qa;
      Qa = null, Jl = 0, kl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Av(e, t) {
    var n = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(a) {
        n.push(a);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var a = 0; a < n.length; a++) (0, n[a])(t);
      },
      function(a) {
        for (l.status = "rejected", l.reason = a, a = 0; a < n.length; a++)
          (0, n[a])(void 0);
      }
    ), l;
  }
  var Xo = D.S;
  D.S = function(e, t) {
    D0 = St(), typeof t == "object" && t !== null && typeof t.then == "function" && Tv(e, t), Xo !== null && Xo(e, t);
  };
  var dl = y(null);
  function Tf() {
    var e = dl.current;
    return e !== null ? e : je.pooledCache;
  }
  function ci(e, t) {
    t === null ? le(dl, dl.current) : le(dl, t.pool);
  }
  function Zo() {
    var e = Tf();
    return e === null ? null : { parent: Xe._currentValue, pool: e };
  }
  var Fl = Error(r(460)), Af = Error(r(474)), fi = Error(r(542)), ri = { then: function() {
  } };
  function Ko(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Jo(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(nn, nn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Fo(e), e;
      default:
        if (typeof t.status == "string") t.then(nn, nn);
        else {
          if (e = je, e !== null && 100 < e.shellSuspendCounter)
            throw Error(r(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var a = t;
                a.status = "fulfilled", a.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var a = t;
                a.status = "rejected", a.reason = l;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Fo(e), e;
        }
        throw hl = t, Fl;
    }
  }
  function ml(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (hl = n, Fl) : n;
    }
  }
  var hl = null;
  function ko() {
    if (hl === null) throw Error(r(459));
    var e = hl;
    return hl = null, e;
  }
  function Fo(e) {
    if (e === Fl || e === fi)
      throw Error(r(483));
  }
  var Wl = null, Ba = 0;
  function si(e) {
    var t = Ba;
    return Ba += 1, Wl === null && (Wl = []), Jo(Wl, e, t);
  }
  function Ha(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function oi(e, t) {
    throw t.$$typeof === C ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Wo(e) {
    function t(N, E) {
      if (e) {
        var Q = N.deletions;
        Q === null ? (N.deletions = [E], N.flags |= 16) : Q.push(E);
      }
    }
    function n(N, E) {
      if (!e) return null;
      for (; E !== null; )
        t(N, E), E = E.sibling;
      return null;
    }
    function l(N) {
      for (var E = /* @__PURE__ */ new Map(); N !== null; )
        N.key !== null ? E.set(N.key, N) : E.set(N.index, N), N = N.sibling;
      return E;
    }
    function a(N, E) {
      return N = an(N, E), N.index = 0, N.sibling = null, N;
    }
    function i(N, E, Q) {
      return N.index = Q, e ? (Q = N.alternate, Q !== null ? (Q = Q.index, Q < E ? (N.flags |= 67108866, E) : Q) : (N.flags |= 67108866, E)) : (N.flags |= 1048576, E);
    }
    function f(N) {
      return e && N.alternate === null && (N.flags |= 67108866), N;
    }
    function o(N, E, Q, $) {
      return E === null || E.tag !== 6 ? (E = df(Q, N.mode, $), E.return = N, E) : (E = a(E, Q), E.return = N, E);
    }
    function v(N, E, Q, $) {
      var me = Q.type;
      return me === X ? J(
        N,
        E,
        Q.props.children,
        $,
        Q.key
      ) : E !== null && (E.elementType === me || typeof me == "object" && me !== null && me.$$typeof === V && ml(me) === E.type) ? (E = a(E, Q.props), Ha(E, Q), E.return = N, E) : (E = li(
        Q.type,
        Q.key,
        Q.props,
        null,
        N.mode,
        $
      ), Ha(E, Q), E.return = N, E);
    }
    function B(N, E, Q, $) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== Q.containerInfo || E.stateNode.implementation !== Q.implementation ? (E = mf(Q, N.mode, $), E.return = N, E) : (E = a(E, Q.children || []), E.return = N, E);
    }
    function J(N, E, Q, $, me) {
      return E === null || E.tag !== 7 ? (E = fl(
        Q,
        N.mode,
        $,
        me
      ), E.return = N, E) : (E = a(E, Q), E.return = N, E);
    }
    function P(N, E, Q) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = df(
          "" + E,
          N.mode,
          Q
        ), E.return = N, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case G:
            return Q = li(
              E.type,
              E.key,
              E.props,
              null,
              N.mode,
              Q
            ), Ha(Q, E), Q.return = N, Q;
          case j:
            return E = mf(
              E,
              N.mode,
              Q
            ), E.return = N, E;
          case V:
            return E = ml(E), P(N, E, Q);
        }
        if (ae(E) || M(E))
          return E = fl(
            E,
            N.mode,
            Q,
            null
          ), E.return = N, E;
        if (typeof E.then == "function")
          return P(N, si(E), Q);
        if (E.$$typeof === b)
          return P(
            N,
            ii(N, E),
            Q
          );
        oi(N, E);
      }
      return null;
    }
    function H(N, E, Q, $) {
      var me = E !== null ? E.key : null;
      if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint")
        return me !== null ? null : o(N, E, "" + Q, $);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case G:
            return Q.key === me ? v(N, E, Q, $) : null;
          case j:
            return Q.key === me ? B(N, E, Q, $) : null;
          case V:
            return Q = ml(Q), H(N, E, Q, $);
        }
        if (ae(Q) || M(Q))
          return me !== null ? null : J(N, E, Q, $, null);
        if (typeof Q.then == "function")
          return H(
            N,
            E,
            si(Q),
            $
          );
        if (Q.$$typeof === b)
          return H(
            N,
            E,
            ii(N, Q),
            $
          );
        oi(N, Q);
      }
      return null;
    }
    function Z(N, E, Q, $, me) {
      if (typeof $ == "string" && $ !== "" || typeof $ == "number" || typeof $ == "bigint")
        return N = N.get(Q) || null, o(E, N, "" + $, me);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case G:
            return N = N.get(
              $.key === null ? Q : $.key
            ) || null, v(E, N, $, me);
          case j:
            return N = N.get(
              $.key === null ? Q : $.key
            ) || null, B(E, N, $, me);
          case V:
            return $ = ml($), Z(
              N,
              E,
              Q,
              $,
              me
            );
        }
        if (ae($) || M($))
          return N = N.get(Q) || null, J(E, N, $, me, null);
        if (typeof $.then == "function")
          return Z(
            N,
            E,
            Q,
            si($),
            me
          );
        if ($.$$typeof === b)
          return Z(
            N,
            E,
            Q,
            ii(E, $),
            me
          );
        oi(E, $);
      }
      return null;
    }
    function fe(N, E, Q, $) {
      for (var me = null, Me = null, oe = E, ge = E = 0, Te = null; oe !== null && ge < Q.length; ge++) {
        oe.index > ge ? (Te = oe, oe = null) : Te = oe.sibling;
        var Ce = H(
          N,
          oe,
          Q[ge],
          $
        );
        if (Ce === null) {
          oe === null && (oe = Te);
          break;
        }
        e && oe && Ce.alternate === null && t(N, oe), E = i(Ce, E, ge), Me === null ? me = Ce : Me.sibling = Ce, Me = Ce, oe = Te;
      }
      if (ge === Q.length)
        return n(N, oe), Ae && un(N, ge), me;
      if (oe === null) {
        for (; ge < Q.length; ge++)
          oe = P(N, Q[ge], $), oe !== null && (E = i(
            oe,
            E,
            ge
          ), Me === null ? me = oe : Me.sibling = oe, Me = oe);
        return Ae && un(N, ge), me;
      }
      for (oe = l(oe); ge < Q.length; ge++)
        Te = Z(
          oe,
          N,
          ge,
          Q[ge],
          $
        ), Te !== null && (e && Te.alternate !== null && oe.delete(
          Te.key === null ? ge : Te.key
        ), E = i(
          Te,
          E,
          ge
        ), Me === null ? me = Te : Me.sibling = Te, Me = Te);
      return e && oe.forEach(function(Wn) {
        return t(N, Wn);
      }), Ae && un(N, ge), me;
    }
    function he(N, E, Q, $) {
      if (Q == null) throw Error(r(151));
      for (var me = null, Me = null, oe = E, ge = E = 0, Te = null, Ce = Q.next(); oe !== null && !Ce.done; ge++, Ce = Q.next()) {
        oe.index > ge ? (Te = oe, oe = null) : Te = oe.sibling;
        var Wn = H(N, oe, Ce.value, $);
        if (Wn === null) {
          oe === null && (oe = Te);
          break;
        }
        e && oe && Wn.alternate === null && t(N, oe), E = i(Wn, E, ge), Me === null ? me = Wn : Me.sibling = Wn, Me = Wn, oe = Te;
      }
      if (Ce.done)
        return n(N, oe), Ae && un(N, ge), me;
      if (oe === null) {
        for (; !Ce.done; ge++, Ce = Q.next())
          Ce = P(N, Ce.value, $), Ce !== null && (E = i(Ce, E, ge), Me === null ? me = Ce : Me.sibling = Ce, Me = Ce);
        return Ae && un(N, ge), me;
      }
      for (oe = l(oe); !Ce.done; ge++, Ce = Q.next())
        Ce = Z(oe, N, ge, Ce.value, $), Ce !== null && (e && Ce.alternate !== null && oe.delete(Ce.key === null ? ge : Ce.key), E = i(Ce, E, ge), Me === null ? me = Ce : Me.sibling = Ce, Me = Ce);
      return e && oe.forEach(function(q2) {
        return t(N, q2);
      }), Ae && un(N, ge), me;
    }
    function Ue(N, E, Q, $) {
      if (typeof Q == "object" && Q !== null && Q.type === X && Q.key === null && (Q = Q.props.children), typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case G:
            e: {
              for (var me = Q.key; E !== null; ) {
                if (E.key === me) {
                  if (me = Q.type, me === X) {
                    if (E.tag === 7) {
                      n(
                        N,
                        E.sibling
                      ), $ = a(
                        E,
                        Q.props.children
                      ), $.return = N, N = $;
                      break e;
                    }
                  } else if (E.elementType === me || typeof me == "object" && me !== null && me.$$typeof === V && ml(me) === E.type) {
                    n(
                      N,
                      E.sibling
                    ), $ = a(E, Q.props), Ha($, Q), $.return = N, N = $;
                    break e;
                  }
                  n(N, E);
                  break;
                } else t(N, E);
                E = E.sibling;
              }
              Q.type === X ? ($ = fl(
                Q.props.children,
                N.mode,
                $,
                Q.key
              ), $.return = N, N = $) : ($ = li(
                Q.type,
                Q.key,
                Q.props,
                null,
                N.mode,
                $
              ), Ha($, Q), $.return = N, N = $);
            }
            return f(N);
          case j:
            e: {
              for (me = Q.key; E !== null; ) {
                if (E.key === me)
                  if (E.tag === 4 && E.stateNode.containerInfo === Q.containerInfo && E.stateNode.implementation === Q.implementation) {
                    n(
                      N,
                      E.sibling
                    ), $ = a(E, Q.children || []), $.return = N, N = $;
                    break e;
                  } else {
                    n(N, E);
                    break;
                  }
                else t(N, E);
                E = E.sibling;
              }
              $ = mf(Q, N.mode, $), $.return = N, N = $;
            }
            return f(N);
          case V:
            return Q = ml(Q), Ue(
              N,
              E,
              Q,
              $
            );
        }
        if (ae(Q))
          return fe(
            N,
            E,
            Q,
            $
          );
        if (M(Q)) {
          if (me = M(Q), typeof me != "function") throw Error(r(150));
          return Q = me.call(Q), he(
            N,
            E,
            Q,
            $
          );
        }
        if (typeof Q.then == "function")
          return Ue(
            N,
            E,
            si(Q),
            $
          );
        if (Q.$$typeof === b)
          return Ue(
            N,
            E,
            ii(N, Q),
            $
          );
        oi(N, Q);
      }
      return typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint" ? (Q = "" + Q, E !== null && E.tag === 6 ? (n(N, E.sibling), $ = a(E, Q), $.return = N, N = $) : (n(N, E), $ = df(Q, N.mode, $), $.return = N, N = $), f(N)) : n(N, E);
    }
    return function(N, E, Q, $) {
      try {
        Ba = 0;
        var me = Ue(
          N,
          E,
          Q,
          $
        );
        return Wl = null, me;
      } catch (oe) {
        if (oe === Fl || oe === fi) throw oe;
        var Me = Tt(29, oe, null, N.mode);
        return Me.lanes = $, Me.return = N, Me;
      }
    };
  }
  var yl = Wo(!0), $o = Wo(!1), jn = !1;
  function Mf(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Cf(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function xn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function qn(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (De & 2) !== 0) {
      var a = l.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t, t = ni(e), xo(e, null, n), t;
    }
    return ti(e, l, t, n), ni(e);
  }
  function wa(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, Ls(e, n);
    }
  }
  function Df(e, t) {
    var n = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, n === l)) {
      var a = null, i = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          i === null ? a = i = f : i = i.next = f, n = n.next;
        } while (n !== null);
        i === null ? a = i = t : i = i.next = t;
      } else a = i = t;
      n = {
        baseState: l.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: i,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var zf = !1;
  function Ya() {
    if (zf) {
      var e = kl;
      if (e !== null) throw e;
    }
  }
  function La(e, t, n, l) {
    zf = !1;
    var a = e.updateQueue;
    jn = !1;
    var i = a.firstBaseUpdate, f = a.lastBaseUpdate, o = a.shared.pending;
    if (o !== null) {
      a.shared.pending = null;
      var v = o, B = v.next;
      v.next = null, f === null ? i = B : f.next = B, f = v;
      var J = e.alternate;
      J !== null && (J = J.updateQueue, o = J.lastBaseUpdate, o !== f && (o === null ? J.firstBaseUpdate = B : o.next = B, J.lastBaseUpdate = v));
    }
    if (i !== null) {
      var P = a.baseState;
      f = 0, J = B = v = null, o = i;
      do {
        var H = o.lane & -536870913, Z = H !== o.lane;
        if (Z ? (Ee & H) === H : (l & H) === H) {
          H !== 0 && H === Jl && (zf = !0), J !== null && (J = J.next = {
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          });
          e: {
            var fe = e, he = o;
            H = t;
            var Ue = n;
            switch (he.tag) {
              case 1:
                if (fe = he.payload, typeof fe == "function") {
                  P = fe.call(Ue, P, H);
                  break e;
                }
                P = fe;
                break e;
              case 3:
                fe.flags = fe.flags & -65537 | 128;
              case 0:
                if (fe = he.payload, H = typeof fe == "function" ? fe.call(Ue, P, H) : fe, H == null) break e;
                P = S({}, P, H);
                break e;
              case 2:
                jn = !0;
            }
          }
          H = o.callback, H !== null && (e.flags |= 64, Z && (e.flags |= 8192), Z = a.callbacks, Z === null ? a.callbacks = [H] : Z.push(H));
        } else
          Z = {
            lane: H,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          }, J === null ? (B = J = Z, v = P) : J = J.next = Z, f |= H;
        if (o = o.next, o === null) {
          if (o = a.shared.pending, o === null)
            break;
          Z = o, o = Z.next, Z.next = null, a.lastBaseUpdate = Z, a.shared.pending = null;
        }
      } while (!0);
      J === null && (v = P), a.baseState = v, a.firstBaseUpdate = B, a.lastBaseUpdate = J, i === null && (a.shared.lanes = 0), Yn |= f, e.lanes = f, e.memoizedState = P;
    }
  }
  function Io(e, t) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(t);
  }
  function Po(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Io(n[e], t);
  }
  var $l = y(null), di = y(0);
  function ed(e, t) {
    e = gn, le(di, e), le($l, t), gn = e | t.baseLanes;
  }
  function Of() {
    le(di, gn), le($l, $l.current);
  }
  function Rf() {
    gn = di.current, K($l), K(di);
  }
  var At = y(null), Yt = null;
  function Qn(e) {
    var t = e.alternate;
    le(Ge, Ge.current & 1), le(At, e), Yt === null && (t === null || $l.current !== null || t.memoizedState !== null) && (Yt = e);
  }
  function Nf(e) {
    le(Ge, Ge.current), le(At, e), Yt === null && (Yt = e);
  }
  function td(e) {
    e.tag === 22 ? (le(Ge, Ge.current), le(At, e), Yt === null && (Yt = e)) : Bn();
  }
  function Bn() {
    le(Ge, Ge.current), le(At, At.current);
  }
  function Mt(e) {
    K(At), Yt === e && (Yt = null), K(Ge);
  }
  var Ge = y(0);
  function mi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Br(n) || Hr(n)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var rn = 0, ve = null, Re = null, Ze = null, hi = !1, Il = !1, vl = !1, yi = 0, Ga = 0, Pl = null, Mv = 0;
  function Be() {
    throw Error(r(321));
  }
  function Uf(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Et(e[n], t[n])) return !1;
    return !0;
  }
  function jf(e, t, n, l, a, i) {
    return rn = i, ve = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, D.H = e === null || e.memoizedState === null ? Hd : kf, vl = !1, i = n(l, a), vl = !1, Il && (i = ld(
      t,
      n,
      l,
      a
    )), nd(e), i;
  }
  function nd(e) {
    D.H = Za;
    var t = Re !== null && Re.next !== null;
    if (rn = 0, Ze = Re = ve = null, hi = !1, Ga = 0, Pl = null, t) throw Error(r(300));
    e === null || Ke || (e = e.dependencies, e !== null && ui(e) && (Ke = !0));
  }
  function ld(e, t, n, l) {
    ve = e;
    var a = 0;
    do {
      if (Il && (Pl = null), Ga = 0, Il = !1, 25 <= a) throw Error(r(301));
      if (a += 1, Ze = Re = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      D.H = wd, i = t(n, l);
    } while (Il);
    return i;
  }
  function Cv() {
    var e = D.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Va(t) : t, e = e.useState()[0], (Re !== null ? Re.memoizedState : null) !== e && (ve.flags |= 1024), t;
  }
  function xf() {
    var e = yi !== 0;
    return yi = 0, e;
  }
  function qf(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Qf(e) {
    if (hi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      hi = !1;
    }
    rn = 0, Ze = Re = ve = null, Il = !1, Ga = yi = 0, Pl = null;
  }
  function st() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ze === null ? ve.memoizedState = Ze = e : Ze = Ze.next = e, Ze;
  }
  function Ve() {
    if (Re === null) {
      var e = ve.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Re.next;
    var t = Ze === null ? ve.memoizedState : Ze.next;
    if (t !== null)
      Ze = t, Re = e;
    else {
      if (e === null)
        throw ve.alternate === null ? Error(r(467)) : Error(r(310));
      Re = e, e = {
        memoizedState: Re.memoizedState,
        baseState: Re.baseState,
        baseQueue: Re.baseQueue,
        queue: Re.queue,
        next: null
      }, Ze === null ? ve.memoizedState = Ze = e : Ze = Ze.next = e;
    }
    return Ze;
  }
  function vi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Va(e) {
    var t = Ga;
    return Ga += 1, Pl === null && (Pl = []), e = Jo(Pl, e, t), t = ve, (Ze === null ? t.memoizedState : Ze.next) === null && (t = t.alternate, D.H = t === null || t.memoizedState === null ? Hd : kf), e;
  }
  function gi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Va(e);
      if (e.$$typeof === b) return lt(e);
    }
    throw Error(r(438, String(e)));
  }
  function Bf(e) {
    var t = null, n = ve.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var l = ve.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = vi(), ve.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = x;
    return t.index++, n;
  }
  function sn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function pi(e) {
    var t = Ve();
    return Hf(t, Re, e);
  }
  function Hf(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = n;
    var a = e.baseQueue, i = l.pending;
    if (i !== null) {
      if (a !== null) {
        var f = a.next;
        a.next = i.next, i.next = f;
      }
      t.baseQueue = a = i, l.pending = null;
    }
    if (i = e.baseState, a === null) e.memoizedState = i;
    else {
      t = a.next;
      var o = f = null, v = null, B = t, J = !1;
      do {
        var P = B.lane & -536870913;
        if (P !== B.lane ? (Ee & P) === P : (rn & P) === P) {
          var H = B.revertLane;
          if (H === 0)
            v !== null && (v = v.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }), P === Jl && (J = !0);
          else if ((rn & H) === H) {
            B = B.next, H === Jl && (J = !0);
            continue;
          } else
            P = {
              lane: 0,
              revertLane: B.revertLane,
              gesture: null,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }, v === null ? (o = v = P, f = i) : v = v.next = P, ve.lanes |= H, Yn |= H;
          P = B.action, vl && n(i, P), i = B.hasEagerState ? B.eagerState : n(i, P);
        } else
          H = {
            lane: P,
            revertLane: B.revertLane,
            gesture: B.gesture,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null
          }, v === null ? (o = v = H, f = i) : v = v.next = H, ve.lanes |= P, Yn |= P;
        B = B.next;
      } while (B !== null && B !== t);
      if (v === null ? f = i : v.next = o, !Et(i, e.memoizedState) && (Ke = !0, J && (n = kl, n !== null)))
        throw n;
      e.memoizedState = i, e.baseState = f, e.baseQueue = v, l.lastRenderedState = i;
    }
    return a === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function wf(e) {
    var t = Ve(), n = t.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch, a = n.pending, i = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var f = a = a.next;
      do
        i = e(i, f.action), f = f.next;
      while (f !== a);
      Et(i, t.memoizedState) || (Ke = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, l];
  }
  function ad(e, t, n) {
    var l = ve, a = Ve(), i = Ae;
    if (i) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = t();
    var f = !Et(
      (Re || a).memoizedState,
      n
    );
    if (f && (a.memoizedState = n, Ke = !0), a = a.queue, Gf(cd.bind(null, l, a, e), [
      e
    ]), a.getSnapshot !== t || f || Ze !== null && Ze.memoizedState.tag & 1) {
      if (l.flags |= 2048, ea(
        9,
        { destroy: void 0 },
        id.bind(
          null,
          l,
          a,
          n,
          t
        ),
        null
      ), je === null) throw Error(r(349));
      i || (rn & 127) !== 0 || ud(l, t, n);
    }
    return n;
  }
  function ud(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ve.updateQueue, t === null ? (t = vi(), ve.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function id(e, t, n, l) {
    t.value = n, t.getSnapshot = l, fd(t) && rd(e);
  }
  function cd(e, t, n) {
    return n(function() {
      fd(t) && rd(e);
    });
  }
  function fd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Et(e, n);
    } catch {
      return !0;
    }
  }
  function rd(e) {
    var t = cl(e, 2);
    t !== null && gt(t, e, 2);
  }
  function Yf(e) {
    var t = st();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), vl) {
        Cn(!0);
        try {
          n();
        } finally {
          Cn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: sn,
      lastRenderedState: e
    }, t;
  }
  function sd(e, t, n, l) {
    return e.baseState = n, Hf(
      e,
      Re,
      typeof l == "function" ? l : sn
    );
  }
  function Dv(e, t, n, l, a) {
    if (_i(e)) throw Error(r(485));
    if (e = t.action, e !== null) {
      var i = {
        payload: a,
        action: e,
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
      D.T !== null ? n(!0) : i.isTransition = !1, l(i), n = t.pending, n === null ? (i.next = t.pending = i, od(t, i)) : (i.next = n.next, t.pending = n.next = i);
    }
  }
  function od(e, t) {
    var n = t.action, l = t.payload, a = e.state;
    if (t.isTransition) {
      var i = D.T, f = {};
      D.T = f;
      try {
        var o = n(a, l), v = D.S;
        v !== null && v(f, o), dd(e, t, o);
      } catch (B) {
        Lf(e, t, B);
      } finally {
        i !== null && f.types !== null && (i.types = f.types), D.T = i;
      }
    } else
      try {
        i = n(a, l), dd(e, t, i);
      } catch (B) {
        Lf(e, t, B);
      }
  }
  function dd(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        md(e, t, l);
      },
      function(l) {
        return Lf(e, t, l);
      }
    ) : md(e, t, n);
  }
  function md(e, t, n) {
    t.status = "fulfilled", t.value = n, hd(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, od(e, n)));
  }
  function Lf(e, t, n) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = n, hd(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function hd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function yd(e, t) {
    return t;
  }
  function vd(e, t) {
    if (Ae) {
      var n = je.formState;
      if (n !== null) {
        e: {
          var l = ve;
          if (Ae) {
            if (xe) {
              t: {
                for (var a = xe, i = wt; a.nodeType !== 8; ) {
                  if (!i) {
                    a = null;
                    break t;
                  }
                  if (a = Lt(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break t;
                  }
                }
                i = a.data, a = i === "F!" || i === "F" ? a : null;
              }
              if (a) {
                xe = Lt(
                  a.nextSibling
                ), l = a.data === "F!";
                break e;
              }
            }
            Nn(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return n = st(), n.memoizedState = n.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: yd,
      lastRenderedState: t
    }, n.queue = l, n = qd.bind(
      null,
      ve,
      l
    ), l.dispatch = n, l = Yf(!1), i = Jf.bind(
      null,
      ve,
      !1,
      l.queue
    ), l = st(), a = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = a, n = Dv.bind(
      null,
      ve,
      a,
      i,
      n
    ), a.dispatch = n, l.memoizedState = e, [t, n, !1];
  }
  function gd(e) {
    var t = Ve();
    return pd(t, Re, e);
  }
  function pd(e, t, n) {
    if (t = Hf(
      e,
      t,
      yd
    )[0], e = pi(sn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Va(t);
      } catch (f) {
        throw f === Fl ? fi : f;
      }
    else l = t;
    t = Ve();
    var a = t.queue, i = a.dispatch;
    return n !== t.memoizedState && (ve.flags |= 2048, ea(
      9,
      { destroy: void 0 },
      zv.bind(null, a, n),
      null
    )), [l, i, e];
  }
  function zv(e, t) {
    e.action = t;
  }
  function Sd(e) {
    var t = Ve(), n = Re;
    if (n !== null)
      return pd(t, n, e);
    Ve(), t = t.memoizedState, n = Ve();
    var l = n.queue.dispatch;
    return n.memoizedState = e, [t, l, !1];
  }
  function ea(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = ve.updateQueue, t === null && (t = vi(), ve.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function bd() {
    return Ve().memoizedState;
  }
  function Si(e, t, n, l) {
    var a = st();
    ve.flags |= e, a.memoizedState = ea(
      1 | t,
      { destroy: void 0 },
      n,
      l === void 0 ? null : l
    );
  }
  function bi(e, t, n, l) {
    var a = Ve();
    l = l === void 0 ? null : l;
    var i = a.memoizedState.inst;
    Re !== null && l !== null && Uf(l, Re.memoizedState.deps) ? a.memoizedState = ea(t, i, n, l) : (ve.flags |= e, a.memoizedState = ea(
      1 | t,
      i,
      n,
      l
    ));
  }
  function _d(e, t) {
    Si(8390656, 8, e, t);
  }
  function Gf(e, t) {
    bi(2048, 8, e, t);
  }
  function Ov(e) {
    ve.flags |= 4;
    var t = ve.updateQueue;
    if (t === null)
      t = vi(), ve.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function Ed(e) {
    var t = Ve().memoizedState;
    return Ov({ ref: t, nextImpl: e }), function() {
      if ((De & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Td(e, t) {
    return bi(4, 2, e, t);
  }
  function Ad(e, t) {
    return bi(4, 4, e, t);
  }
  function Md(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function() {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function Cd(e, t, n) {
    n = n != null ? n.concat([e]) : null, bi(4, 4, Md.bind(null, t, e), n);
  }
  function Vf() {
  }
  function Dd(e, t) {
    var n = Ve();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && Uf(t, l[1]) ? l[0] : (n.memoizedState = [e, t], e);
  }
  function zd(e, t) {
    var n = Ve();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && Uf(t, l[1]))
      return l[0];
    if (l = e(), vl) {
      Cn(!0);
      try {
        e();
      } finally {
        Cn(!1);
      }
    }
    return n.memoizedState = [l, t], l;
  }
  function Xf(e, t, n) {
    return n === void 0 || (rn & 1073741824) !== 0 && (Ee & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = O0(), ve.lanes |= e, Yn |= e, n);
  }
  function Od(e, t, n, l) {
    return Et(n, t) ? n : $l.current !== null ? (e = Xf(e, n, l), Et(e, t) || (Ke = !0), e) : (rn & 42) === 0 || (rn & 1073741824) !== 0 && (Ee & 261930) === 0 ? (Ke = !0, e.memoizedState = n) : (e = O0(), ve.lanes |= e, Yn |= e, t);
  }
  function Rd(e, t, n, l, a) {
    var i = F.p;
    F.p = i !== 0 && 8 > i ? i : 8;
    var f = D.T, o = {};
    D.T = o, Jf(e, !1, t, n);
    try {
      var v = a(), B = D.S;
      if (B !== null && B(o, v), v !== null && typeof v == "object" && typeof v.then == "function") {
        var J = Av(
          v,
          l
        );
        Xa(
          e,
          t,
          J,
          zt(e)
        );
      } else
        Xa(
          e,
          t,
          l,
          zt(e)
        );
    } catch (P) {
      Xa(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: P },
        zt()
      );
    } finally {
      F.p = i, f !== null && o.types !== null && (f.types = o.types), D.T = f;
    }
  }
  function Rv() {
  }
  function Zf(e, t, n, l) {
    if (e.tag !== 5) throw Error(r(476));
    var a = Nd(e).queue;
    Rd(
      e,
      a,
      t,
      I,
      n === null ? Rv : function() {
        return Ud(e), n(l);
      }
    );
  }
  function Nd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: I,
      baseState: I,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: sn,
        lastRenderedState: I
      },
      next: null
    };
    var n = {};
    return t.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: sn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Ud(e) {
    var t = Nd(e);
    t.next === null && (t = e.alternate.memoizedState), Xa(
      e,
      t.next.queue,
      {},
      zt()
    );
  }
  function Kf() {
    return lt(cu);
  }
  function jd() {
    return Ve().memoizedState;
  }
  function xd() {
    return Ve().memoizedState;
  }
  function Nv(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = zt();
          e = xn(n);
          var l = qn(t, e, n);
          l !== null && (gt(l, t, n), wa(l, t, n)), t = { cache: _f() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Uv(e, t, n) {
    var l = zt();
    n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, _i(e) ? Qd(t, n) : (n = sf(e, t, n, l), n !== null && (gt(n, e, l), Bd(n, t, l)));
  }
  function qd(e, t, n) {
    var l = zt();
    Xa(e, t, n, l);
  }
  function Xa(e, t, n, l) {
    var a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (_i(e)) Qd(t, a);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var f = t.lastRenderedState, o = i(f, n);
          if (a.hasEagerState = !0, a.eagerState = o, Et(o, f))
            return ti(e, t, a, 0), je === null && ei(), !1;
        } catch {
        }
      if (n = sf(e, t, a, l), n !== null)
        return gt(n, e, l), Bd(n, t, l), !0;
    }
    return !1;
  }
  function Jf(e, t, n, l) {
    if (l = {
      lane: 2,
      revertLane: Mr(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, _i(e)) {
      if (t) throw Error(r(479));
    } else
      t = sf(
        e,
        n,
        l,
        2
      ), t !== null && gt(t, e, 2);
  }
  function _i(e) {
    var t = e.alternate;
    return e === ve || t !== null && t === ve;
  }
  function Qd(e, t) {
    Il = hi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Bd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, Ls(e, n);
    }
  }
  var Za = {
    readContext: lt,
    use: gi,
    useCallback: Be,
    useContext: Be,
    useEffect: Be,
    useImperativeHandle: Be,
    useLayoutEffect: Be,
    useInsertionEffect: Be,
    useMemo: Be,
    useReducer: Be,
    useRef: Be,
    useState: Be,
    useDebugValue: Be,
    useDeferredValue: Be,
    useTransition: Be,
    useSyncExternalStore: Be,
    useId: Be,
    useHostTransitionStatus: Be,
    useFormState: Be,
    useActionState: Be,
    useOptimistic: Be,
    useMemoCache: Be,
    useCacheRefresh: Be
  };
  Za.useEffectEvent = Be;
  var Hd = {
    readContext: lt,
    use: gi,
    useCallback: function(e, t) {
      return st().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: lt,
    useEffect: _d,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, Si(
        4194308,
        4,
        Md.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return Si(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Si(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = st();
      t = t === void 0 ? null : t;
      var l = e();
      if (vl) {
        Cn(!0);
        try {
          e();
        } finally {
          Cn(!1);
        }
      }
      return n.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, n) {
      var l = st();
      if (n !== void 0) {
        var a = n(t);
        if (vl) {
          Cn(!0);
          try {
            n(t);
          } finally {
            Cn(!1);
          }
        }
      } else a = t;
      return l.memoizedState = l.baseState = a, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      }, l.queue = e, e = e.dispatch = Uv.bind(
        null,
        ve,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = st();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Yf(e);
      var t = e.queue, n = qd.bind(null, ve, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Vf,
    useDeferredValue: function(e, t) {
      var n = st();
      return Xf(n, e, t);
    },
    useTransition: function() {
      var e = Yf(!1);
      return e = Rd.bind(
        null,
        ve,
        e.queue,
        !0,
        !1
      ), st().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var l = ve, a = st();
      if (Ae) {
        if (n === void 0)
          throw Error(r(407));
        n = n();
      } else {
        if (n = t(), je === null)
          throw Error(r(349));
        (Ee & 127) !== 0 || ud(l, t, n);
      }
      a.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return a.queue = i, _d(cd.bind(null, l, i, e), [
        e
      ]), l.flags |= 2048, ea(
        9,
        { destroy: void 0 },
        id.bind(
          null,
          l,
          i,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = st(), t = je.identifierPrefix;
      if (Ae) {
        var n = $t, l = Wt;
        n = (l & ~(1 << 32 - _t(l) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = yi++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = Mv++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Kf,
    useFormState: vd,
    useActionState: vd,
    useOptimistic: function(e) {
      var t = st();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = Jf.bind(
        null,
        ve,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Bf,
    useCacheRefresh: function() {
      return st().memoizedState = Nv.bind(
        null,
        ve
      );
    },
    useEffectEvent: function(e) {
      var t = st(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((De & 2) !== 0)
          throw Error(r(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, kf = {
    readContext: lt,
    use: gi,
    useCallback: Dd,
    useContext: lt,
    useEffect: Gf,
    useImperativeHandle: Cd,
    useInsertionEffect: Td,
    useLayoutEffect: Ad,
    useMemo: zd,
    useReducer: pi,
    useRef: bd,
    useState: function() {
      return pi(sn);
    },
    useDebugValue: Vf,
    useDeferredValue: function(e, t) {
      var n = Ve();
      return Od(
        n,
        Re.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = pi(sn)[0], t = Ve().memoizedState;
      return [
        typeof e == "boolean" ? e : Va(e),
        t
      ];
    },
    useSyncExternalStore: ad,
    useId: jd,
    useHostTransitionStatus: Kf,
    useFormState: gd,
    useActionState: gd,
    useOptimistic: function(e, t) {
      var n = Ve();
      return sd(n, Re, e, t);
    },
    useMemoCache: Bf,
    useCacheRefresh: xd
  };
  kf.useEffectEvent = Ed;
  var wd = {
    readContext: lt,
    use: gi,
    useCallback: Dd,
    useContext: lt,
    useEffect: Gf,
    useImperativeHandle: Cd,
    useInsertionEffect: Td,
    useLayoutEffect: Ad,
    useMemo: zd,
    useReducer: wf,
    useRef: bd,
    useState: function() {
      return wf(sn);
    },
    useDebugValue: Vf,
    useDeferredValue: function(e, t) {
      var n = Ve();
      return Re === null ? Xf(n, e, t) : Od(
        n,
        Re.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = wf(sn)[0], t = Ve().memoizedState;
      return [
        typeof e == "boolean" ? e : Va(e),
        t
      ];
    },
    useSyncExternalStore: ad,
    useId: jd,
    useHostTransitionStatus: Kf,
    useFormState: Sd,
    useActionState: Sd,
    useOptimistic: function(e, t) {
      var n = Ve();
      return Re !== null ? sd(n, Re, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Bf,
    useCacheRefresh: xd
  };
  wd.useEffectEvent = Ed;
  function Ff(e, t, n, l) {
    t = e.memoizedState, n = n(l, t), n = n == null ? t : S({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Wf = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var l = zt(), a = xn(l);
      a.payload = t, n != null && (a.callback = n), t = qn(e, a, l), t !== null && (gt(t, e, l), wa(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var l = zt(), a = xn(l);
      a.tag = 1, a.payload = t, n != null && (a.callback = n), t = qn(e, a, l), t !== null && (gt(t, e, l), wa(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = zt(), l = xn(n);
      l.tag = 2, t != null && (l.callback = t), t = qn(e, l, n), t !== null && (gt(t, e, n), wa(t, e, n));
    }
  };
  function Yd(e, t, n, l, a, i, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, i, f) : t.prototype && t.prototype.isPureReactComponent ? !Na(n, l) || !Na(a, i) : !0;
  }
  function Ld(e, t, n, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && Wf.enqueueReplaceState(t, t.state, null);
  }
  function gl(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t)
        l !== "ref" && (n[l] = t[l]);
    }
    if (e = e.defaultProps) {
      n === t && (n = S({}, n));
      for (var a in e)
        n[a] === void 0 && (n[a] = e[a]);
    }
    return n;
  }
  function Gd(e) {
    Pu(e);
  }
  function Vd(e) {
    console.error(e);
  }
  function Xd(e) {
    Pu(e);
  }
  function Ei(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Zd(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function $f(e, t, n) {
    return n = xn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Ei(e, t);
    }, n;
  }
  function Kd(e) {
    return e = xn(e), e.tag = 3, e;
  }
  function Jd(e, t, n, l) {
    var a = n.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var i = l.value;
      e.payload = function() {
        return a(i);
      }, e.callback = function() {
        Zd(t, n, l);
      };
    }
    var f = n.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
      Zd(t, n, l), typeof a != "function" && (Ln === null ? Ln = /* @__PURE__ */ new Set([this]) : Ln.add(this));
      var o = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: o !== null ? o : ""
      });
    });
  }
  function jv(e, t, n, l, a) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = n.alternate, t !== null && Kl(
        t,
        n,
        a,
        !0
      ), n = At.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Yt === null ? xi() : n.alternate === null && He === 0 && (He = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, l === ri ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), Er(e, l, a)), !1;
          case 22:
            return n.flags |= 65536, l === ri ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), Er(e, l, a)), !1;
        }
        throw Error(r(435, n.tag));
      }
      return Er(e, l, a), xi(), !1;
    }
    if (Ae)
      return t = At.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, l !== vf && (e = Error(r(422), { cause: l }), xa(Qt(e, n)))) : (l !== vf && (t = Error(r(423), {
        cause: l
      }), xa(
        Qt(t, n)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, l = Qt(l, n), a = $f(
        e.stateNode,
        l,
        a
      ), Df(e, a), He !== 4 && (He = 2)), !1;
    var i = Error(r(520), { cause: l });
    if (i = Qt(i, n), Pa === null ? Pa = [i] : Pa.push(i), He !== 4 && (He = 2), t === null) return !0;
    l = Qt(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = a & -a, n.lanes |= e, e = $f(n.stateNode, l, e), Df(n, e), !1;
        case 1:
          if (t = n.type, i = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Ln === null || !Ln.has(i))))
            return n.flags |= 65536, a &= -a, n.lanes |= a, a = Kd(a), Jd(
              a,
              e,
              n,
              l
            ), Df(n, a), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var If = Error(r(461)), Ke = !1;
  function at(e, t, n, l) {
    t.child = e === null ? $o(t, null, n, l) : yl(
      t,
      e.child,
      n,
      l
    );
  }
  function kd(e, t, n, l, a) {
    n = n.render;
    var i = t.ref;
    if ("ref" in l) {
      var f = {};
      for (var o in l)
        o !== "ref" && (f[o] = l[o]);
    } else f = l;
    return ol(t), l = jf(
      e,
      t,
      n,
      f,
      i,
      a
    ), o = xf(), e !== null && !Ke ? (qf(e, t, a), on(e, t, a)) : (Ae && o && hf(t), t.flags |= 1, at(e, t, l, a), t.child);
  }
  function Fd(e, t, n, l, a) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !of(i) && i.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = i, Wd(
        e,
        t,
        i,
        l,
        a
      )) : (e = li(
        n.type,
        null,
        l,
        t,
        t.mode,
        a
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !ir(e, a)) {
      var f = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Na, n(f, l) && e.ref === t.ref)
        return on(e, t, a);
    }
    return t.flags |= 1, e = an(i, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Wd(e, t, n, l, a) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Na(i, l) && e.ref === t.ref)
        if (Ke = !1, t.pendingProps = l = i, ir(e, a))
          (e.flags & 131072) !== 0 && (Ke = !0);
        else
          return t.lanes = e.lanes, on(e, t, a);
    }
    return Pf(
      e,
      t,
      n,
      l,
      a
    );
  }
  function $d(e, t, n, l) {
    var a = l.children, i = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | n : n, e !== null) {
          for (l = t.child = e.child, a = 0; l !== null; )
            a = a | l.lanes | l.childLanes, l = l.sibling;
          l = a & ~i;
        } else l = 0, t.child = null;
        return Id(
          e,
          t,
          i,
          n,
          l
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ci(
          t,
          i !== null ? i.cachePool : null
        ), i !== null ? ed(t, i) : Of(), td(t);
      else
        return l = t.lanes = 536870912, Id(
          e,
          t,
          i !== null ? i.baseLanes | n : n,
          n,
          l
        );
    } else
      i !== null ? (ci(t, i.cachePool), ed(t, i), Bn(), t.memoizedState = null) : (e !== null && ci(t, null), Of(), Bn());
    return at(e, t, a, n), t.child;
  }
  function Ka(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Id(e, t, n, l, a) {
    var i = Tf();
    return i = i === null ? null : { parent: Xe._currentValue, pool: i }, t.memoizedState = {
      baseLanes: n,
      cachePool: i
    }, e !== null && ci(t, null), Of(), td(t), e !== null && Kl(e, t, l, !0), t.childLanes = a, null;
  }
  function Ti(e, t) {
    return t = Mi(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Pd(e, t, n) {
    return yl(t, e.child, null, n), e = Ti(t, t.pendingProps), e.flags |= 2, Mt(t), t.memoizedState = null, e;
  }
  function xv(e, t, n) {
    var l = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ae) {
        if (l.mode === "hidden")
          return e = Ti(t, l), t.lanes = 536870912, Ka(null, e);
        if (Nf(t), (e = xe) ? (e = om(
          e,
          wt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: On !== null ? { id: Wt, overflow: $t } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Qo(e), n.return = t, t.child = n, nt = t, xe = null)) : e = null, e === null) throw Nn(t);
        return t.lanes = 536870912, null;
      }
      return Ti(t, l);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var f = i.dehydrated;
      if (Nf(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = Pd(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (Ke || Kl(e, t, n, !1), a = (n & e.childLanes) !== 0, Ke || a) {
        if (l = je, l !== null && (f = Gs(l, n), f !== 0 && f !== i.retryLane))
          throw i.retryLane = f, cl(e, f), gt(l, e, f), If;
        xi(), t = Pd(
          e,
          t,
          n
        );
      } else
        e = i.treeContext, xe = Lt(f.nextSibling), nt = t, Ae = !0, Rn = null, wt = !1, e !== null && wo(t, e), t = Ti(t, l), t.flags |= 4096;
      return t;
    }
    return e = an(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Ai(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(r(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Pf(e, t, n, l, a) {
    return ol(t), n = jf(
      e,
      t,
      n,
      l,
      void 0,
      a
    ), l = xf(), e !== null && !Ke ? (qf(e, t, a), on(e, t, a)) : (Ae && l && hf(t), t.flags |= 1, at(e, t, n, a), t.child);
  }
  function e0(e, t, n, l, a, i) {
    return ol(t), t.updateQueue = null, n = ld(
      t,
      l,
      n,
      a
    ), nd(e), l = xf(), e !== null && !Ke ? (qf(e, t, i), on(e, t, i)) : (Ae && l && hf(t), t.flags |= 1, at(e, t, n, i), t.child);
  }
  function t0(e, t, n, l, a) {
    if (ol(t), t.stateNode === null) {
      var i = Gl, f = n.contextType;
      typeof f == "object" && f !== null && (i = lt(f)), i = new n(l, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Wf, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = l, i.state = t.memoizedState, i.refs = {}, Mf(t), f = n.contextType, i.context = typeof f == "object" && f !== null ? lt(f) : Gl, i.state = t.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (Ff(
        t,
        n,
        f,
        l
      ), i.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (f = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), f !== i.state && Wf.enqueueReplaceState(i, i.state, null), La(t, l, i, a), Ya(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      i = t.stateNode;
      var o = t.memoizedProps, v = gl(n, o);
      i.props = v;
      var B = i.context, J = n.contextType;
      f = Gl, typeof J == "object" && J !== null && (f = lt(J));
      var P = n.getDerivedStateFromProps;
      J = typeof P == "function" || typeof i.getSnapshotBeforeUpdate == "function", o = t.pendingProps !== o, J || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o || B !== f) && Ld(
        t,
        i,
        l,
        f
      ), jn = !1;
      var H = t.memoizedState;
      i.state = H, La(t, l, i, a), Ya(), B = t.memoizedState, o || H !== B || jn ? (typeof P == "function" && (Ff(
        t,
        n,
        P,
        l
      ), B = t.memoizedState), (v = jn || Yd(
        t,
        n,
        v,
        l,
        H,
        B,
        f
      )) ? (J || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = B), i.props = l, i.state = B, i.context = f, l = v) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      i = t.stateNode, Cf(e, t), f = t.memoizedProps, J = gl(n, f), i.props = J, P = t.pendingProps, H = i.context, B = n.contextType, v = Gl, typeof B == "object" && B !== null && (v = lt(B)), o = n.getDerivedStateFromProps, (B = typeof o == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f !== P || H !== v) && Ld(
        t,
        i,
        l,
        v
      ), jn = !1, H = t.memoizedState, i.state = H, La(t, l, i, a), Ya();
      var Z = t.memoizedState;
      f !== P || H !== Z || jn || e !== null && e.dependencies !== null && ui(e.dependencies) ? (typeof o == "function" && (Ff(
        t,
        n,
        o,
        l
      ), Z = t.memoizedState), (J = jn || Yd(
        t,
        n,
        J,
        l,
        H,
        Z,
        v
      ) || e !== null && e.dependencies !== null && ui(e.dependencies)) ? (B || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(l, Z, v), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        l,
        Z,
        v
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && H === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = Z), i.props = l, i.state = Z, i.context = v, l = J) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && H === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return i = l, Ai(e, t), l = (t.flags & 128) !== 0, i || l ? (i = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && l ? (t.child = yl(
      t,
      e.child,
      null,
      a
    ), t.child = yl(
      t,
      null,
      n,
      a
    )) : at(e, t, n, a), t.memoizedState = i.state, e = t.child) : e = on(
      e,
      t,
      a
    ), e;
  }
  function n0(e, t, n, l) {
    return rl(), t.flags |= 256, at(e, t, n, l), t.child;
  }
  var er = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function tr(e) {
    return { baseLanes: e, cachePool: Zo() };
  }
  function nr(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Dt), e;
  }
  function l0(e, t, n) {
    var l = t.pendingProps, a = !1, i = (t.flags & 128) !== 0, f;
    if ((f = i) || (f = e !== null && e.memoizedState === null ? !1 : (Ge.current & 2) !== 0), f && (a = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ae) {
        if (a ? Qn(t) : Bn(), (e = xe) ? (e = om(
          e,
          wt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: On !== null ? { id: Wt, overflow: $t } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Qo(e), n.return = t, t.child = n, nt = t, xe = null)) : e = null, e === null) throw Nn(t);
        return Hr(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var o = l.children;
      return l = l.fallback, a ? (Bn(), a = t.mode, o = Mi(
        { mode: "hidden", children: o },
        a
      ), l = fl(
        l,
        a,
        n,
        null
      ), o.return = t, l.return = t, o.sibling = l, t.child = o, l = t.child, l.memoizedState = tr(n), l.childLanes = nr(
        e,
        f,
        n
      ), t.memoizedState = er, Ka(null, l)) : (Qn(t), lr(t, o));
    }
    var v = e.memoizedState;
    if (v !== null && (o = v.dehydrated, o !== null)) {
      if (i)
        t.flags & 256 ? (Qn(t), t.flags &= -257, t = ar(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (Bn(), t.child = e.child, t.flags |= 128, t = null) : (Bn(), o = l.fallback, a = t.mode, l = Mi(
          { mode: "visible", children: l.children },
          a
        ), o = fl(
          o,
          a,
          n,
          null
        ), o.flags |= 2, l.return = t, o.return = t, l.sibling = o, t.child = l, yl(
          t,
          e.child,
          null,
          n
        ), l = t.child, l.memoizedState = tr(n), l.childLanes = nr(
          e,
          f,
          n
        ), t.memoizedState = er, t = Ka(null, l));
      else if (Qn(t), Hr(o)) {
        if (f = o.nextSibling && o.nextSibling.dataset, f) var B = f.dgst;
        f = B, l = Error(r(419)), l.stack = "", l.digest = f, xa({ value: l, source: null, stack: null }), t = ar(
          e,
          t,
          n
        );
      } else if (Ke || Kl(e, t, n, !1), f = (n & e.childLanes) !== 0, Ke || f) {
        if (f = je, f !== null && (l = Gs(f, n), l !== 0 && l !== v.retryLane))
          throw v.retryLane = l, cl(e, l), gt(f, e, l), If;
        Br(o) || xi(), t = ar(
          e,
          t,
          n
        );
      } else
        Br(o) ? (t.flags |= 192, t.child = e.child, t = null) : (e = v.treeContext, xe = Lt(
          o.nextSibling
        ), nt = t, Ae = !0, Rn = null, wt = !1, e !== null && wo(t, e), t = lr(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (Bn(), o = l.fallback, a = t.mode, v = e.child, B = v.sibling, l = an(v, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = v.subtreeFlags & 65011712, B !== null ? o = an(
      B,
      o
    ) : (o = fl(
      o,
      a,
      n,
      null
    ), o.flags |= 2), o.return = t, l.return = t, l.sibling = o, t.child = l, Ka(null, l), l = t.child, o = e.child.memoizedState, o === null ? o = tr(n) : (a = o.cachePool, a !== null ? (v = Xe._currentValue, a = a.parent !== v ? { parent: v, pool: v } : a) : a = Zo(), o = {
      baseLanes: o.baseLanes | n,
      cachePool: a
    }), l.memoizedState = o, l.childLanes = nr(
      e,
      f,
      n
    ), t.memoizedState = er, Ka(e.child, l)) : (Qn(t), n = e.child, e = n.sibling, n = an(n, {
      mode: "visible",
      children: l.children
    }), n.return = t, n.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function lr(e, t) {
    return t = Mi(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Mi(e, t) {
    return e = Tt(22, e, null, t), e.lanes = 0, e;
  }
  function ar(e, t, n) {
    return yl(t, e.child, null, n), e = lr(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function a0(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Sf(e.return, t, n);
  }
  function ur(e, t, n, l, a, i) {
    var f = e.memoizedState;
    f === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: n,
      tailMode: a,
      treeForkCount: i
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = l, f.tail = n, f.tailMode = a, f.treeForkCount = i);
  }
  function u0(e, t, n) {
    var l = t.pendingProps, a = l.revealOrder, i = l.tail;
    l = l.children;
    var f = Ge.current, o = (f & 2) !== 0;
    if (o ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, le(Ge, f), at(e, t, l, n), l = Ae ? ja : 0, !o && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && a0(e, n, t);
        else if (e.tag === 19)
          a0(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (a) {
      case "forwards":
        for (n = t.child, a = null; n !== null; )
          e = n.alternate, e !== null && mi(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), ur(
          t,
          !1,
          a,
          n,
          i,
          l
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && mi(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        ur(
          t,
          !0,
          n,
          null,
          i,
          l
        );
        break;
      case "together":
        ur(
          t,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function on(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Yn |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Kl(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (e = t.child, n = an(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = an(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function ir(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ui(e)));
  }
  function qv(e, t, n) {
    switch (t.tag) {
      case 3:
        Se(t, t.stateNode.containerInfo), Un(t, Xe, e.memoizedState.cache), rl();
        break;
      case 27:
      case 5:
        pe(t);
        break;
      case 4:
        Se(t, t.stateNode.containerInfo);
        break;
      case 10:
        Un(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Nf(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Qn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? l0(e, t, n) : (Qn(t), e = on(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        Qn(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (l = (n & t.childLanes) !== 0, l || (Kl(
          e,
          t,
          n,
          !1
        ), l = (n & t.childLanes) !== 0), a) {
          if (l)
            return u0(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), le(Ge, Ge.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, $d(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        Un(t, Xe, e.memoizedState.cache);
    }
    return on(e, t, n);
  }
  function i0(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ke = !0;
      else {
        if (!ir(e, n) && (t.flags & 128) === 0)
          return Ke = !1, qv(
            e,
            t,
            n
          );
        Ke = (e.flags & 131072) !== 0;
      }
    else
      Ke = !1, Ae && (t.flags & 1048576) !== 0 && Ho(t, ja, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = ml(t.elementType), t.type = e, typeof e == "function")
            of(e) ? (l = gl(e, l), t.tag = 1, t = t0(
              null,
              t,
              e,
              l,
              n
            )) : (t.tag = 0, t = Pf(
              null,
              t,
              e,
              l,
              n
            ));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === z) {
                t.tag = 11, t = kd(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              } else if (a === R) {
                t.tag = 14, t = Fd(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              }
            }
            throw t = W(e) || e, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return Pf(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return l = t.type, a = gl(
          l,
          t.pendingProps
        ), t0(
          e,
          t,
          l,
          a,
          n
        );
      case 3:
        e: {
          if (Se(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(r(387));
          l = t.pendingProps;
          var i = t.memoizedState;
          a = i.element, Cf(e, t), La(t, l, null, n);
          var f = t.memoizedState;
          if (l = f.cache, Un(t, Xe, l), l !== i.cache && bf(
            t,
            [Xe],
            n,
            !0
          ), Ya(), l = f.element, i.isDehydrated)
            if (i = {
              element: l,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = n0(
                e,
                t,
                l,
                n
              );
              break e;
            } else if (l !== a) {
              a = Qt(
                Error(r(424)),
                t
              ), xa(a), t = n0(
                e,
                t,
                l,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, xe = Lt(e.firstChild), nt = t, Ae = !0, Rn = null, wt = !0, n = $o(
                t,
                null,
                l,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (rl(), l === a) {
              t = on(
                e,
                t,
                n
              );
              break e;
            }
            at(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Ai(e, t), e === null ? (n = gm(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Ae || (n = t.type, e = t.pendingProps, l = Li(
          re.current
        ).createElement(n), l[tt] = t, l[ot] = e, ut(l, n, e), Fe(l), t.stateNode = l) : t.memoizedState = gm(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return pe(t), e === null && Ae && (l = t.stateNode = hm(
          t.type,
          t.pendingProps,
          re.current
        ), nt = t, wt = !0, a = xe, Zn(t.type) ? (wr = a, xe = Lt(l.firstChild)) : xe = a), at(
          e,
          t,
          t.pendingProps.children,
          n
        ), Ai(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ae && ((a = l = xe) && (l = o2(
          l,
          t.type,
          t.pendingProps,
          wt
        ), l !== null ? (t.stateNode = l, nt = t, xe = Lt(l.firstChild), wt = !1, a = !0) : a = !1), a || Nn(t)), pe(t), a = t.type, i = t.pendingProps, f = e !== null ? e.memoizedProps : null, l = i.children, xr(a, i) ? l = null : f !== null && xr(a, f) && (t.flags |= 32), t.memoizedState !== null && (a = jf(
          e,
          t,
          Cv,
          null,
          null,
          n
        ), cu._currentValue = a), Ai(e, t), at(e, t, l, n), t.child;
      case 6:
        return e === null && Ae && ((e = n = xe) && (n = d2(
          n,
          t.pendingProps,
          wt
        ), n !== null ? (t.stateNode = n, nt = t, xe = null, e = !0) : e = !1), e || Nn(t)), null;
      case 13:
        return l0(e, t, n);
      case 4:
        return Se(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = yl(
          t,
          null,
          l,
          n
        ) : at(e, t, l, n), t.child;
      case 11:
        return kd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return at(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return at(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return at(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return l = t.pendingProps, Un(t, t.type, l.value), at(e, t, l.children, n), t.child;
      case 9:
        return a = t.type._context, l = t.pendingProps.children, ol(t), a = lt(a), l = l(a), t.flags |= 1, at(e, t, l, n), t.child;
      case 14:
        return Fd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Wd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return u0(e, t, n);
      case 31:
        return xv(e, t, n);
      case 22:
        return $d(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return ol(t), l = lt(Xe), e === null ? (a = Tf(), a === null && (a = je, i = _f(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= n), a = i), t.memoizedState = { parent: l, cache: a }, Mf(t), Un(t, Xe, a)) : ((e.lanes & n) !== 0 && (Cf(e, t), La(t, null, null, n), Ya()), a = e.memoizedState, i = t.memoizedState, a.parent !== l ? (a = { parent: l, cache: l }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), Un(t, Xe, l)) : (l = i.cache, Un(t, Xe, l), l !== a.cache && bf(
          t,
          [Xe],
          n,
          !0
        ))), at(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function dn(e) {
    e.flags |= 4;
  }
  function cr(e, t, n, l, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (j0()) e.flags |= 8192;
        else
          throw hl = ri, Af;
    } else e.flags &= -16777217;
  }
  function c0(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Em(t))
      if (j0()) e.flags |= 8192;
      else
        throw hl = ri, Af;
  }
  function Ci(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? ws() : 536870912, e.lanes |= t, aa |= t);
  }
  function Ja(e, t) {
    if (!Ae)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), n = n.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
  }
  function qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, l = 0;
    if (t)
      for (var a = e.child; a !== null; )
        n |= a.lanes | a.childLanes, l |= a.subtreeFlags & 65011712, l |= a.flags & 65011712, a.return = e, a = a.sibling;
    else
      for (a = e.child; a !== null; )
        n |= a.lanes | a.childLanes, l |= a.subtreeFlags, l |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= l, e.childLanes = n, t;
  }
  function Qv(e, t, n) {
    var l = t.pendingProps;
    switch (yf(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return qe(t), null;
      case 1:
        return qe(t), null;
      case 3:
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), fn(Xe), de(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Zl(t) ? dn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, gf())), qe(t), null;
      case 26:
        var a = t.type, i = t.memoizedState;
        return e === null ? (dn(t), i !== null ? (qe(t), c0(t, i)) : (qe(t), cr(
          t,
          a,
          null,
          l,
          n
        ))) : i ? i !== e.memoizedState ? (dn(t), qe(t), c0(t, i)) : (qe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && dn(t), qe(t), cr(
          t,
          a,
          e,
          l,
          n
        )), null;
      case 27:
        if (rt(t), n = re.current, a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && dn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(r(166));
            return qe(t), null;
          }
          e = ne.current, Zl(t) ? Yo(t) : (e = hm(a, l, n), t.stateNode = e, dn(t));
        }
        return qe(t), null;
      case 5:
        if (rt(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && dn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(r(166));
            return qe(t), null;
          }
          if (i = ne.current, Zl(t))
            Yo(t);
          else {
            var f = Li(
              re.current
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
                    i = typeof l.is == "string" ? f.createElement("select", {
                      is: l.is
                    }) : f.createElement("select"), l.multiple ? i.multiple = !0 : l.size && (i.size = l.size);
                    break;
                  default:
                    i = typeof l.is == "string" ? f.createElement(a, { is: l.is }) : f.createElement(a);
                }
            }
            i[tt] = t, i[ot] = l;
            e: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                i.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break e;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t)
                  break e;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = i;
            e: switch (ut(i, a, l), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && dn(t);
          }
        }
        return qe(t), cr(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && dn(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(r(166));
          if (e = re.current, Zl(t)) {
            if (e = t.stateNode, n = t.memoizedProps, l = null, a = nt, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  l = a.memoizedProps;
              }
            e[tt] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || lm(e.nodeValue, n)), e || Nn(t, !0);
          } else
            e = Li(e).createTextNode(
              l
            ), e[tt] = t, t.stateNode = e;
        }
        return qe(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Zl(t), n !== null) {
            if (e === null) {
              if (!l) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[tt] = t;
            } else
              rl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            qe(t), e = !1;
          } else
            n = gf(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Mt(t), t) : (Mt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return qe(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = Zl(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(r(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
              a[tt] = t;
            } else
              rl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            qe(t), a = !1;
          } else
            a = gf(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (Mt(t), t) : (Mt(t), null);
        }
        return Mt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = l !== null, e = e !== null && e.memoizedState !== null, n && (l = t.child, a = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (a = l.alternate.memoizedState.cachePool.pool), i = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (i = l.memoizedState.cachePool.pool), i !== a && (l.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Ci(t, t.updateQueue), qe(t), null);
      case 4:
        return de(), e === null && Or(t.stateNode.containerInfo), qe(t), null;
      case 10:
        return fn(t.type), qe(t), null;
      case 19:
        if (K(Ge), l = t.memoizedState, l === null) return qe(t), null;
        if (a = (t.flags & 128) !== 0, i = l.rendering, i === null)
          if (a) Ja(l, !1);
          else {
            if (He !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = mi(e), i !== null) {
                  for (t.flags |= 128, Ja(l, !1), e = i.updateQueue, t.updateQueue = e, Ci(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    qo(n, e), n = n.sibling;
                  return le(
                    Ge,
                    Ge.current & 1 | 2
                  ), Ae && un(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && St() > Ni && (t.flags |= 128, a = !0, Ja(l, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = mi(i), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, Ci(t, e), Ja(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !Ae)
                return qe(t), null;
            } else
              2 * St() - l.renderingStartTime > Ni && n !== 536870912 && (t.flags |= 128, a = !0, Ja(l, !1), t.lanes = 4194304);
          l.isBackwards ? (i.sibling = t.child, t.child = i) : (e = l.last, e !== null ? e.sibling = i : t.child = i, l.last = i);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = St(), e.sibling = null, n = Ge.current, le(
          Ge,
          a ? n & 1 | 2 : n & 1
        ), Ae && un(t, l.treeForkCount), e) : (qe(t), null);
      case 22:
      case 23:
        return Mt(t), Rf(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : qe(t), n = t.updateQueue, n !== null && Ci(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && K(dl), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), fn(Xe), qe(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function Bv(e, t) {
    switch (yf(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return fn(Xe), de(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return rt(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Mt(t), t.alternate === null)
            throw Error(r(340));
          rl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Mt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          rl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return K(Ge), null;
      case 4:
        return de(), null;
      case 10:
        return fn(t.type), null;
      case 22:
      case 23:
        return Mt(t), Rf(), e !== null && K(dl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return fn(Xe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function f0(e, t) {
    switch (yf(t), t.tag) {
      case 3:
        fn(Xe), de();
        break;
      case 26:
      case 27:
      case 5:
        rt(t);
        break;
      case 4:
        de();
        break;
      case 31:
        t.memoizedState !== null && Mt(t);
        break;
      case 13:
        Mt(t);
        break;
      case 19:
        K(Ge);
        break;
      case 10:
        fn(t.type);
        break;
      case 22:
      case 23:
        Mt(t), Rf(), e !== null && K(dl);
        break;
      case 24:
        fn(Xe);
    }
  }
  function ka(e, t) {
    try {
      var n = t.updateQueue, l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var a = l.next;
        n = a;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var i = n.create, f = n.inst;
            l = i(), f.destroy = l;
          }
          n = n.next;
        } while (n !== a);
      }
    } catch (o) {
      Oe(t, t.return, o);
    }
  }
  function Hn(e, t, n) {
    try {
      var l = t.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        l = i;
        do {
          if ((l.tag & e) === e) {
            var f = l.inst, o = f.destroy;
            if (o !== void 0) {
              f.destroy = void 0, a = t;
              var v = n, B = o;
              try {
                B();
              } catch (J) {
                Oe(
                  a,
                  v,
                  J
                );
              }
            }
          }
          l = l.next;
        } while (l !== i);
      }
    } catch (J) {
      Oe(t, t.return, J);
    }
  }
  function r0(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Po(t, n);
      } catch (l) {
        Oe(e, e.return, l);
      }
    }
  }
  function s0(e, t, n) {
    n.props = gl(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      Oe(e, t, l);
    }
  }
  function Fa(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(l) : n.current = l;
      }
    } catch (a) {
      Oe(e, t, a);
    }
  }
  function It(e, t) {
    var n = e.ref, l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (a) {
          Oe(e, t, a);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (a) {
          Oe(e, t, a);
        }
      else n.current = null;
  }
  function o0(e) {
    var t = e.type, n = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break e;
        case "img":
          n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (a) {
      Oe(e, e.return, a);
    }
  }
  function fr(e, t, n) {
    try {
      var l = e.stateNode;
      u2(l, e.type, n, t), l[ot] = t;
    } catch (a) {
      Oe(e, e.return, a);
    }
  }
  function d0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Zn(e.type) || e.tag === 4;
  }
  function rr(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || d0(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Zn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function sr(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = nn));
    else if (l !== 4 && (l === 27 && Zn(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (sr(e, t, n), e = e.sibling; e !== null; )
        sr(e, t, n), e = e.sibling;
  }
  function Di(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && (l === 27 && Zn(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (Di(e, t, n), e = e.sibling; e !== null; )
        Di(e, t, n), e = e.sibling;
  }
  function m0(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      ut(t, l, n), t[tt] = e, t[ot] = n;
    } catch (i) {
      Oe(e, e.return, i);
    }
  }
  var mn = !1, Je = !1, or = !1, h0 = typeof WeakSet == "function" ? WeakSet : Set, We = null;
  function Hv(e, t) {
    if (e = e.containerInfo, Ur = ki, e = Co(e), lf(e)) {
      if ("selectionStart" in e)
        var n = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var a = l.anchorOffset, i = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, i.nodeType;
            } catch {
              n = null;
              break e;
            }
            var f = 0, o = -1, v = -1, B = 0, J = 0, P = e, H = null;
            t: for (; ; ) {
              for (var Z; P !== n || a !== 0 && P.nodeType !== 3 || (o = f + a), P !== i || l !== 0 && P.nodeType !== 3 || (v = f + l), P.nodeType === 3 && (f += P.nodeValue.length), (Z = P.firstChild) !== null; )
                H = P, P = Z;
              for (; ; ) {
                if (P === e) break t;
                if (H === n && ++B === a && (o = f), H === i && ++J === l && (v = f), (Z = P.nextSibling) !== null) break;
                P = H, H = P.parentNode;
              }
              P = Z;
            }
            n = o === -1 || v === -1 ? null : { start: o, end: v };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (jr = { focusedElem: e, selectionRange: n }, ki = !1, We = t; We !== null; )
      if (t = We, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, We = e;
      else
        for (; We !== null; ) {
          switch (t = We, i = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (n = 0; n < e.length; n++)
                  a = e[n], a.ref.impl = a.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                e = void 0, n = t, a = i.memoizedProps, i = i.memoizedState, l = n.stateNode;
                try {
                  var fe = gl(
                    n.type,
                    a
                  );
                  e = l.getSnapshotBeforeUpdate(
                    fe,
                    i
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (he) {
                  Oe(
                    n,
                    n.return,
                    he
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  Qr(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Qr(e);
                      break;
                    default:
                      e.textContent = "";
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
              if ((e & 1024) !== 0) throw Error(r(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, We = e;
            break;
          }
          We = t.return;
        }
  }
  function y0(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        yn(e, n), l & 4 && ka(5, n);
        break;
      case 1:
        if (yn(e, n), l & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (f) {
              Oe(n, n.return, f);
            }
          else {
            var a = gl(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                a,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              Oe(
                n,
                n.return,
                f
              );
            }
          }
        l & 64 && r0(n), l & 512 && Fa(n, n.return);
        break;
      case 3:
        if (yn(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
          if (t = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            Po(e, t);
          } catch (f) {
            Oe(n, n.return, f);
          }
        }
        break;
      case 27:
        t === null && l & 4 && m0(n);
      case 26:
      case 5:
        yn(e, n), t === null && l & 4 && o0(n), l & 512 && Fa(n, n.return);
        break;
      case 12:
        yn(e, n);
        break;
      case 31:
        yn(e, n), l & 4 && p0(e, n);
        break;
      case 13:
        yn(e, n), l & 4 && S0(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Jv.bind(
          null,
          n
        ), m2(e, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || mn, !l) {
          t = t !== null && t.memoizedState !== null || Je, a = mn;
          var i = Je;
          mn = l, (Je = t) && !i ? vn(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : yn(e, n), mn = a, Je = i;
        }
        break;
      case 30:
        break;
      default:
        yn(e, n);
    }
  }
  function v0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, v0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Yc(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Qe = null, mt = !1;
  function hn(e, t, n) {
    for (n = n.child; n !== null; )
      g0(e, t, n), n = n.sibling;
  }
  function g0(e, t, n) {
    if (bt && typeof bt.onCommitFiberUnmount == "function")
      try {
        bt.onCommitFiberUnmount(Sa, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Je || It(n, t), hn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Je || It(n, t);
        var l = Qe, a = mt;
        Zn(n.type) && (Qe = n.stateNode, mt = !1), hn(
          e,
          t,
          n
        ), au(n.stateNode), Qe = l, mt = a;
        break;
      case 5:
        Je || It(n, t);
      case 6:
        if (l = Qe, a = mt, Qe = null, hn(
          e,
          t,
          n
        ), Qe = l, mt = a, Qe !== null)
          if (mt)
            try {
              (Qe.nodeType === 9 ? Qe.body : Qe.nodeName === "HTML" ? Qe.ownerDocument.body : Qe).removeChild(n.stateNode);
            } catch (i) {
              Oe(
                n,
                t,
                i
              );
            }
          else
            try {
              Qe.removeChild(n.stateNode);
            } catch (i) {
              Oe(
                n,
                t,
                i
              );
            }
        break;
      case 18:
        Qe !== null && (mt ? (e = Qe, rm(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), da(e)) : rm(Qe, n.stateNode));
        break;
      case 4:
        l = Qe, a = mt, Qe = n.stateNode.containerInfo, mt = !0, hn(
          e,
          t,
          n
        ), Qe = l, mt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Hn(2, n, t), Je || Hn(4, n, t), hn(
          e,
          t,
          n
        );
        break;
      case 1:
        Je || (It(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && s0(
          n,
          t,
          l
        )), hn(
          e,
          t,
          n
        );
        break;
      case 21:
        hn(
          e,
          t,
          n
        );
        break;
      case 22:
        Je = (l = Je) || n.memoizedState !== null, hn(
          e,
          t,
          n
        ), Je = l;
        break;
      default:
        hn(
          e,
          t,
          n
        );
    }
  }
  function p0(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        da(e);
      } catch (n) {
        Oe(t, t.return, n);
      }
    }
  }
  function S0(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        da(e);
      } catch (n) {
        Oe(t, t.return, n);
      }
  }
  function wv(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new h0()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new h0()), t;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function zi(e, t) {
    var n = wv(e);
    t.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var a = kv.bind(null, e, l);
        l.then(a, a);
      }
    });
  }
  function ht(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var a = n[l], i = e, f = t, o = f;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (Zn(o.type)) {
                Qe = o.stateNode, mt = !1;
                break e;
              }
              break;
            case 5:
              Qe = o.stateNode, mt = !1;
              break e;
            case 3:
            case 4:
              Qe = o.stateNode.containerInfo, mt = !0;
              break e;
          }
          o = o.return;
        }
        if (Qe === null) throw Error(r(160));
        g0(i, f, a), Qe = null, mt = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        b0(t, e), t = t.sibling;
  }
  var Zt = null;
  function b0(e, t) {
    var n = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ht(t, e), yt(e), l & 4 && (Hn(3, e, e.return), ka(3, e), Hn(5, e, e.return));
        break;
      case 1:
        ht(t, e), yt(e), l & 512 && (Je || n === null || It(n, n.return)), l & 64 && mn && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var a = Zt;
        if (ht(t, e), yt(e), l & 512 && (Je || n === null || It(n, n.return)), l & 4) {
          var i = n !== null ? n.memoizedState : null;
          if (l = e.memoizedState, n === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, n = e.memoizedProps, a = a.ownerDocument || a;
                  t: switch (l) {
                    case "title":
                      i = a.getElementsByTagName("title")[0], (!i || i[Ea] || i[tt] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(l), a.head.insertBefore(
                        i,
                        a.querySelector("head > title")
                      )), ut(i, l, n), i[tt] = e, Fe(i), l = i;
                      break e;
                    case "link":
                      var f = bm(
                        "link",
                        "href",
                        a
                      ).get(l + (n.href || ""));
                      if (f) {
                        for (var o = 0; o < f.length; o++)
                          if (i = f[o], i.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && i.getAttribute("rel") === (n.rel == null ? null : n.rel) && i.getAttribute("title") === (n.title == null ? null : n.title) && i.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            f.splice(o, 1);
                            break t;
                          }
                      }
                      i = a.createElement(l), ut(i, l, n), a.head.appendChild(i);
                      break;
                    case "meta":
                      if (f = bm(
                        "meta",
                        "content",
                        a
                      ).get(l + (n.content || ""))) {
                        for (o = 0; o < f.length; o++)
                          if (i = f[o], i.getAttribute("content") === (n.content == null ? null : "" + n.content) && i.getAttribute("name") === (n.name == null ? null : n.name) && i.getAttribute("property") === (n.property == null ? null : n.property) && i.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && i.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            f.splice(o, 1);
                            break t;
                          }
                      }
                      i = a.createElement(l), ut(i, l, n), a.head.appendChild(i);
                      break;
                    default:
                      throw Error(r(468, l));
                  }
                  i[tt] = e, Fe(i), l = i;
                }
                e.stateNode = l;
              } else
                _m(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Sm(
                a,
                l,
                e.memoizedProps
              );
          else
            i !== l ? (i === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : i.count--, l === null ? _m(
              a,
              e.type,
              e.stateNode
            ) : Sm(
              a,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && fr(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        ht(t, e), yt(e), l & 512 && (Je || n === null || It(n, n.return)), n !== null && l & 4 && fr(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (ht(t, e), yt(e), l & 512 && (Je || n === null || It(n, n.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            ql(a, "");
          } catch (fe) {
            Oe(e, e.return, fe);
          }
        }
        l & 4 && e.stateNode != null && (a = e.memoizedProps, fr(
          e,
          a,
          n !== null ? n.memoizedProps : a
        )), l & 1024 && (or = !0);
        break;
      case 6:
        if (ht(t, e), yt(e), l & 4) {
          if (e.stateNode === null)
            throw Error(r(162));
          l = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = l;
          } catch (fe) {
            Oe(e, e.return, fe);
          }
        }
        break;
      case 3:
        if (Xi = null, a = Zt, Zt = Gi(t.containerInfo), ht(t, e), Zt = a, yt(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            da(t.containerInfo);
          } catch (fe) {
            Oe(e, e.return, fe);
          }
        or && (or = !1, _0(e));
        break;
      case 4:
        l = Zt, Zt = Gi(
          e.stateNode.containerInfo
        ), ht(t, e), yt(e), Zt = l;
        break;
      case 12:
        ht(t, e), yt(e);
        break;
      case 31:
        ht(t, e), yt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, zi(e, l)));
        break;
      case 13:
        ht(t, e), yt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Ri = St()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, zi(e, l)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var v = n !== null && n.memoizedState !== null, B = mn, J = Je;
        if (mn = B || a, Je = J || v, ht(t, e), Je = J, mn = B, yt(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (n === null || v || mn || Je || pl(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                v = n = t;
                try {
                  if (i = v.stateNode, a)
                    f = i.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    o = v.stateNode;
                    var P = v.memoizedProps.style, H = P != null && P.hasOwnProperty("display") ? P.display : null;
                    o.style.display = H == null || typeof H == "boolean" ? "" : ("" + H).trim();
                  }
                } catch (fe) {
                  Oe(v, v.return, fe);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                v = t;
                try {
                  v.stateNode.nodeValue = a ? "" : v.memoizedProps;
                } catch (fe) {
                  Oe(v, v.return, fe);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                v = t;
                try {
                  var Z = v.stateNode;
                  a ? sm(Z, !0) : sm(v.stateNode, !1);
                } catch (fe) {
                  Oe(v, v.return, fe);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), t = t.return;
            }
            n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
          }
        l & 4 && (l = e.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, zi(e, n))));
        break;
      case 19:
        ht(t, e), yt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, zi(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ht(t, e), yt(e);
    }
  }
  function yt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (d0(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var a = n.stateNode, i = rr(e);
            Di(e, i, a);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (ql(f, ""), n.flags &= -33);
            var o = rr(e);
            Di(e, o, f);
            break;
          case 3:
          case 4:
            var v = n.stateNode.containerInfo, B = rr(e);
            sr(
              e,
              B,
              v
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (J) {
        Oe(e, e.return, J);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function _0(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        _0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function yn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        y0(e, t.alternate, t), t = t.sibling;
  }
  function pl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Hn(4, t, t.return), pl(t);
          break;
        case 1:
          It(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && s0(
            t,
            t.return,
            n
          ), pl(t);
          break;
        case 27:
          au(t.stateNode);
        case 26:
        case 5:
          It(t, t.return), pl(t);
          break;
        case 22:
          t.memoizedState === null && pl(t);
          break;
        case 30:
          pl(t);
          break;
        default:
          pl(t);
      }
      e = e.sibling;
    }
  }
  function vn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, a = e, i = t, f = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          vn(
            a,
            i,
            n
          ), ka(4, i);
          break;
        case 1:
          if (vn(
            a,
            i,
            n
          ), l = i, a = l.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (B) {
              Oe(l, l.return, B);
            }
          if (l = i, a = l.updateQueue, a !== null) {
            var o = l.stateNode;
            try {
              var v = a.shared.hiddenCallbacks;
              if (v !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < v.length; a++)
                  Io(v[a], o);
            } catch (B) {
              Oe(l, l.return, B);
            }
          }
          n && f & 64 && r0(i), Fa(i, i.return);
          break;
        case 27:
          m0(i);
        case 26:
        case 5:
          vn(
            a,
            i,
            n
          ), n && l === null && f & 4 && o0(i), Fa(i, i.return);
          break;
        case 12:
          vn(
            a,
            i,
            n
          );
          break;
        case 31:
          vn(
            a,
            i,
            n
          ), n && f & 4 && p0(a, i);
          break;
        case 13:
          vn(
            a,
            i,
            n
          ), n && f & 4 && S0(a, i);
          break;
        case 22:
          i.memoizedState === null && vn(
            a,
            i,
            n
          ), Fa(i, i.return);
          break;
        case 30:
          break;
        default:
          vn(
            a,
            i,
            n
          );
      }
      t = t.sibling;
    }
  }
  function dr(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && qa(n));
  }
  function mr(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && qa(e));
  }
  function Kt(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        E0(
          e,
          t,
          n,
          l
        ), t = t.sibling;
  }
  function E0(e, t, n, l) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Kt(
          e,
          t,
          n,
          l
        ), a & 2048 && ka(9, t);
        break;
      case 1:
        Kt(
          e,
          t,
          n,
          l
        );
        break;
      case 3:
        Kt(
          e,
          t,
          n,
          l
        ), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && qa(e)));
        break;
      case 12:
        if (a & 2048) {
          Kt(
            e,
            t,
            n,
            l
          ), e = t.stateNode;
          try {
            var i = t.memoizedProps, f = i.id, o = i.onPostCommit;
            typeof o == "function" && o(
              f,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (v) {
            Oe(t, t.return, v);
          }
        } else
          Kt(
            e,
            t,
            n,
            l
          );
        break;
      case 31:
        Kt(
          e,
          t,
          n,
          l
        );
        break;
      case 13:
        Kt(
          e,
          t,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        i = t.stateNode, f = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? Kt(
          e,
          t,
          n,
          l
        ) : Wa(e, t) : i._visibility & 2 ? Kt(
          e,
          t,
          n,
          l
        ) : (i._visibility |= 2, ta(
          e,
          t,
          n,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && dr(f, t);
        break;
      case 24:
        Kt(
          e,
          t,
          n,
          l
        ), a & 2048 && mr(t.alternate, t);
        break;
      default:
        Kt(
          e,
          t,
          n,
          l
        );
    }
  }
  function ta(e, t, n, l, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, f = t, o = n, v = l, B = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ta(
            i,
            f,
            o,
            v,
            a
          ), ka(8, f);
          break;
        case 23:
          break;
        case 22:
          var J = f.stateNode;
          f.memoizedState !== null ? J._visibility & 2 ? ta(
            i,
            f,
            o,
            v,
            a
          ) : Wa(
            i,
            f
          ) : (J._visibility |= 2, ta(
            i,
            f,
            o,
            v,
            a
          )), a && B & 2048 && dr(
            f.alternate,
            f
          );
          break;
        case 24:
          ta(
            i,
            f,
            o,
            v,
            a
          ), a && B & 2048 && mr(f.alternate, f);
          break;
        default:
          ta(
            i,
            f,
            o,
            v,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Wa(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, l = t, a = l.flags;
        switch (l.tag) {
          case 22:
            Wa(n, l), a & 2048 && dr(
              l.alternate,
              l
            );
            break;
          case 24:
            Wa(n, l), a & 2048 && mr(l.alternate, l);
            break;
          default:
            Wa(n, l);
        }
        t = t.sibling;
      }
  }
  var $a = 8192;
  function na(e, t, n) {
    if (e.subtreeFlags & $a)
      for (e = e.child; e !== null; )
        T0(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function T0(e, t, n) {
    switch (e.tag) {
      case 26:
        na(
          e,
          t,
          n
        ), e.flags & $a && e.memoizedState !== null && M2(
          n,
          Zt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        na(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var l = Zt;
        Zt = Gi(e.stateNode.containerInfo), na(
          e,
          t,
          n
        ), Zt = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = $a, $a = 16777216, na(
          e,
          t,
          n
        ), $a = l) : na(
          e,
          t,
          n
        ));
        break;
      default:
        na(
          e,
          t,
          n
        );
    }
  }
  function A0(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Ia(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          We = l, C0(
            l,
            e
          );
        }
      A0(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        M0(e), e = e.sibling;
  }
  function M0(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ia(e), e.flags & 2048 && Hn(9, e, e.return);
        break;
      case 3:
        Ia(e);
        break;
      case 12:
        Ia(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Oi(e)) : Ia(e);
        break;
      default:
        Ia(e);
    }
  }
  function Oi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          We = l, C0(
            l,
            e
          );
        }
      A0(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Hn(8, t, t.return), Oi(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Oi(t));
          break;
        default:
          Oi(t);
      }
      e = e.sibling;
    }
  }
  function C0(e, t) {
    for (; We !== null; ) {
      var n = We;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Hn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          qa(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, We = l;
      else
        e: for (n = e; We !== null; ) {
          l = We;
          var a = l.sibling, i = l.return;
          if (v0(l), l === n) {
            We = null;
            break e;
          }
          if (a !== null) {
            a.return = i, We = a;
            break e;
          }
          We = i;
        }
    }
  }
  var Yv = {
    getCacheForType: function(e) {
      var t = lt(Xe), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return lt(Xe).controller.signal;
    }
  }, Lv = typeof WeakMap == "function" ? WeakMap : Map, De = 0, je = null, be = null, Ee = 0, ze = 0, Ct = null, wn = !1, la = !1, hr = !1, gn = 0, He = 0, Yn = 0, Sl = 0, yr = 0, Dt = 0, aa = 0, Pa = null, vt = null, vr = !1, Ri = 0, D0 = 0, Ni = 1 / 0, Ui = null, Ln = null, ke = 0, Gn = null, ua = null, pn = 0, gr = 0, pr = null, z0 = null, eu = 0, Sr = null;
  function zt() {
    return (De & 2) !== 0 && Ee !== 0 ? Ee & -Ee : D.T !== null ? Mr() : Vs();
  }
  function O0() {
    if (Dt === 0)
      if ((Ee & 536870912) === 0 || Ae) {
        var e = Yu;
        Yu <<= 1, (Yu & 3932160) === 0 && (Yu = 262144), Dt = e;
      } else Dt = 536870912;
    return e = At.current, e !== null && (e.flags |= 32), Dt;
  }
  function gt(e, t, n) {
    (e === je && (ze === 2 || ze === 9) || e.cancelPendingCommit !== null) && (ia(e, 0), Vn(
      e,
      Ee,
      Dt,
      !1
    )), _a(e, n), ((De & 2) === 0 || e !== je) && (e === je && ((De & 2) === 0 && (Sl |= n), He === 4 && Vn(
      e,
      Ee,
      Dt,
      !1
    )), Pt(e));
  }
  function R0(e, t, n) {
    if ((De & 6) !== 0) throw Error(r(327));
    var l = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ba(e, t), a = l ? Xv(e, t) : _r(e, t, !0), i = l;
    do {
      if (a === 0) {
        la && !l && Vn(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, i && !Gv(n)) {
          a = _r(e, t, !1), i = !1;
          continue;
        }
        if (a === 2) {
          if (i = t, e.errorRecoveryDisabledLanes & i)
            var f = 0;
          else
            f = e.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            e: {
              var o = e;
              a = Pa;
              var v = o.current.memoizedState.isDehydrated;
              if (v && (ia(o, f).flags |= 256), f = _r(
                o,
                f,
                !1
              ), f !== 2) {
                if (hr && !v) {
                  o.errorRecoveryDisabledLanes |= i, Sl |= i, a = 4;
                  break e;
                }
                i = vt, vt = a, i !== null && (vt === null ? vt = i : vt.push.apply(
                  vt,
                  i
                ));
              }
              a = f;
            }
            if (i = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          ia(e, 0), Vn(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, i = a, i) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Vn(
                l,
                t,
                Dt,
                !wn
              );
              break e;
            case 2:
              vt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (a = Ri + 300 - St(), 10 < a)) {
            if (Vn(
              l,
              t,
              Dt,
              !wn
            ), Gu(l, 0, !0) !== 0) break e;
            pn = t, l.timeoutHandle = cm(
              N0.bind(
                null,
                l,
                n,
                vt,
                Ui,
                vr,
                t,
                Dt,
                Sl,
                aa,
                wn,
                i,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break e;
          }
          N0(
            l,
            n,
            vt,
            Ui,
            vr,
            t,
            Dt,
            Sl,
            aa,
            wn,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Pt(e);
  }
  function N0(e, t, n, l, a, i, f, o, v, B, J, P, H, Z) {
    if (e.timeoutHandle = -1, P = t.subtreeFlags, P & 8192 || (P & 16785408) === 16785408) {
      P = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: nn
      }, T0(
        t,
        i,
        P
      );
      var fe = (i & 62914560) === i ? Ri - St() : (i & 4194048) === i ? D0 - St() : 0;
      if (fe = C2(
        P,
        fe
      ), fe !== null) {
        pn = i, e.cancelPendingCommit = fe(
          w0.bind(
            null,
            e,
            t,
            i,
            n,
            l,
            a,
            f,
            o,
            v,
            J,
            P,
            null,
            H,
            Z
          )
        ), Vn(e, i, f, !B);
        return;
      }
    }
    w0(
      e,
      t,
      i,
      n,
      l,
      a,
      f,
      o,
      v
    );
  }
  function Gv(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var a = n[l], i = a.getSnapshot;
          a = a.value;
          try {
            if (!Et(i(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Vn(e, t, n, l) {
    t &= ~yr, t &= ~Sl, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var i = 31 - _t(a), f = 1 << i;
      l[i] = -1, a &= ~f;
    }
    n !== 0 && Ys(e, n, t);
  }
  function ji() {
    return (De & 6) === 0 ? (tu(0), !1) : !0;
  }
  function br() {
    if (be !== null) {
      if (ze === 0)
        var e = be.return;
      else
        e = be, cn = sl = null, Qf(e), Wl = null, Ba = 0, e = be;
      for (; e !== null; )
        f0(e.alternate, e), e = e.return;
      be = null;
    }
  }
  function ia(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, f2(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), pn = 0, br(), je = e, be = n = an(e.current, null), Ee = t, ze = 0, Ct = null, wn = !1, la = ba(e, t), hr = !1, aa = Dt = yr = Sl = Yn = He = 0, vt = Pa = null, vr = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var a = 31 - _t(l), i = 1 << a;
        t |= e[a], l &= ~i;
      }
    return gn = t, ei(), n;
  }
  function U0(e, t) {
    ve = null, D.H = Za, t === Fl || t === fi ? (t = ko(), ze = 3) : t === Af ? (t = ko(), ze = 4) : ze = t === If ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ct = t, be === null && (He = 1, Ei(
      e,
      Qt(t, e.current)
    ));
  }
  function j0() {
    var e = At.current;
    return e === null ? !0 : (Ee & 4194048) === Ee ? Yt === null : (Ee & 62914560) === Ee || (Ee & 536870912) !== 0 ? e === Yt : !1;
  }
  function x0() {
    var e = D.H;
    return D.H = Za, e === null ? Za : e;
  }
  function q0() {
    var e = D.A;
    return D.A = Yv, e;
  }
  function xi() {
    He = 4, wn || (Ee & 4194048) !== Ee && At.current !== null || (la = !0), (Yn & 134217727) === 0 && (Sl & 134217727) === 0 || je === null || Vn(
      je,
      Ee,
      Dt,
      !1
    );
  }
  function _r(e, t, n) {
    var l = De;
    De |= 2;
    var a = x0(), i = q0();
    (je !== e || Ee !== t) && (Ui = null, ia(e, t)), t = !1;
    var f = He;
    e: do
      try {
        if (ze !== 0 && be !== null) {
          var o = be, v = Ct;
          switch (ze) {
            case 8:
              br(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              At.current === null && (t = !0);
              var B = ze;
              if (ze = 0, Ct = null, ca(e, o, v, B), n && la) {
                f = 0;
                break e;
              }
              break;
            default:
              B = ze, ze = 0, Ct = null, ca(e, o, v, B);
          }
        }
        Vv(), f = He;
        break;
      } catch (J) {
        U0(e, J);
      }
    while (!0);
    return t && e.shellSuspendCounter++, cn = sl = null, De = l, D.H = a, D.A = i, be === null && (je = null, Ee = 0, ei()), f;
  }
  function Vv() {
    for (; be !== null; ) Q0(be);
  }
  function Xv(e, t) {
    var n = De;
    De |= 2;
    var l = x0(), a = q0();
    je !== e || Ee !== t ? (Ui = null, Ni = St() + 500, ia(e, t)) : la = ba(
      e,
      t
    );
    e: do
      try {
        if (ze !== 0 && be !== null) {
          t = be;
          var i = Ct;
          t: switch (ze) {
            case 1:
              ze = 0, Ct = null, ca(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (Ko(i)) {
                ze = 0, Ct = null, B0(t);
                break;
              }
              t = function() {
                ze !== 2 && ze !== 9 || je !== e || (ze = 7), Pt(e);
              }, i.then(t, t);
              break e;
            case 3:
              ze = 7;
              break e;
            case 4:
              ze = 5;
              break e;
            case 7:
              Ko(i) ? (ze = 0, Ct = null, B0(t)) : (ze = 0, Ct = null, ca(e, t, i, 7));
              break;
            case 5:
              var f = null;
              switch (be.tag) {
                case 26:
                  f = be.memoizedState;
                case 5:
                case 27:
                  var o = be;
                  if (f ? Em(f) : o.stateNode.complete) {
                    ze = 0, Ct = null;
                    var v = o.sibling;
                    if (v !== null) be = v;
                    else {
                      var B = o.return;
                      B !== null ? (be = B, qi(B)) : be = null;
                    }
                    break t;
                  }
              }
              ze = 0, Ct = null, ca(e, t, i, 5);
              break;
            case 6:
              ze = 0, Ct = null, ca(e, t, i, 6);
              break;
            case 8:
              br(), He = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        Zv();
        break;
      } catch (J) {
        U0(e, J);
      }
    while (!0);
    return cn = sl = null, D.H = l, D.A = a, De = n, be !== null ? 0 : (je = null, Ee = 0, ei(), He);
  }
  function Zv() {
    for (; be !== null && !qc(); )
      Q0(be);
  }
  function Q0(e) {
    var t = i0(e.alternate, e, gn);
    e.memoizedProps = e.pendingProps, t === null ? qi(e) : be = t;
  }
  function B0(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = e0(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Ee
        );
        break;
      case 11:
        t = e0(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Ee
        );
        break;
      case 5:
        Qf(t);
      default:
        f0(n, t), t = be = qo(t, gn), t = i0(n, t, gn);
    }
    e.memoizedProps = e.pendingProps, t === null ? qi(e) : be = t;
  }
  function ca(e, t, n, l) {
    cn = sl = null, Qf(t), Wl = null, Ba = 0;
    var a = t.return;
    try {
      if (jv(
        e,
        a,
        t,
        n,
        Ee
      )) {
        He = 1, Ei(
          e,
          Qt(n, e.current)
        ), be = null;
        return;
      }
    } catch (i) {
      if (a !== null) throw be = a, i;
      He = 1, Ei(
        e,
        Qt(n, e.current)
      ), be = null;
      return;
    }
    t.flags & 32768 ? (Ae || l === 1 ? e = !0 : la || (Ee & 536870912) !== 0 ? e = !1 : (wn = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = At.current, l !== null && l.tag === 13 && (l.flags |= 16384))), H0(t, e)) : qi(t);
  }
  function qi(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        H0(
          t,
          wn
        );
        return;
      }
      e = t.return;
      var n = Qv(
        t.alternate,
        t,
        gn
      );
      if (n !== null) {
        be = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        be = t;
        return;
      }
      be = t = e;
    } while (t !== null);
    He === 0 && (He = 5);
  }
  function H0(e, t) {
    do {
      var n = Bv(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, be = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        be = e;
        return;
      }
      be = e = n;
    } while (e !== null);
    He = 6, be = null;
  }
  function w0(e, t, n, l, a, i, f, o, v) {
    e.cancelPendingCommit = null;
    do
      Qi();
    while (ke !== 0);
    if ((De & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (i = t.lanes | t.childLanes, i |= rf, Ay(
        e,
        n,
        i,
        f,
        o,
        v
      ), e === je && (be = je = null, Ee = 0), ua = t, Gn = e, pn = n, gr = i, pr = a, z0 = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Fv(Hu, function() {
        return X0(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = D.T, D.T = null, a = F.p, F.p = 2, f = De, De |= 4;
        try {
          Hv(e, t, n);
        } finally {
          De = f, F.p = a, D.T = l;
        }
      }
      ke = 1, Y0(), L0(), G0();
    }
  }
  function Y0() {
    if (ke === 1) {
      ke = 0;
      var e = Gn, t = ua, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = D.T, D.T = null;
        var l = F.p;
        F.p = 2;
        var a = De;
        De |= 4;
        try {
          b0(t, e);
          var i = jr, f = Co(e.containerInfo), o = i.focusedElem, v = i.selectionRange;
          if (f !== o && o && o.ownerDocument && Mo(
            o.ownerDocument.documentElement,
            o
          )) {
            if (v !== null && lf(o)) {
              var B = v.start, J = v.end;
              if (J === void 0 && (J = B), "selectionStart" in o)
                o.selectionStart = B, o.selectionEnd = Math.min(
                  J,
                  o.value.length
                );
              else {
                var P = o.ownerDocument || document, H = P && P.defaultView || window;
                if (H.getSelection) {
                  var Z = H.getSelection(), fe = o.textContent.length, he = Math.min(v.start, fe), Ue = v.end === void 0 ? he : Math.min(v.end, fe);
                  !Z.extend && he > Ue && (f = Ue, Ue = he, he = f);
                  var N = Ao(
                    o,
                    he
                  ), E = Ao(
                    o,
                    Ue
                  );
                  if (N && E && (Z.rangeCount !== 1 || Z.anchorNode !== N.node || Z.anchorOffset !== N.offset || Z.focusNode !== E.node || Z.focusOffset !== E.offset)) {
                    var Q = P.createRange();
                    Q.setStart(N.node, N.offset), Z.removeAllRanges(), he > Ue ? (Z.addRange(Q), Z.extend(E.node, E.offset)) : (Q.setEnd(E.node, E.offset), Z.addRange(Q));
                  }
                }
              }
            }
            for (P = [], Z = o; Z = Z.parentNode; )
              Z.nodeType === 1 && P.push({
                element: Z,
                left: Z.scrollLeft,
                top: Z.scrollTop
              });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < P.length; o++) {
              var $ = P[o];
              $.element.scrollLeft = $.left, $.element.scrollTop = $.top;
            }
          }
          ki = !!Ur, jr = Ur = null;
        } finally {
          De = a, F.p = l, D.T = n;
        }
      }
      e.current = t, ke = 2;
    }
  }
  function L0() {
    if (ke === 2) {
      ke = 0;
      var e = Gn, t = ua, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = D.T, D.T = null;
        var l = F.p;
        F.p = 2;
        var a = De;
        De |= 4;
        try {
          y0(e, t.alternate, t);
        } finally {
          De = a, F.p = l, D.T = n;
        }
      }
      ke = 3;
    }
  }
  function G0() {
    if (ke === 4 || ke === 3) {
      ke = 0, yy();
      var e = Gn, t = ua, n = pn, l = z0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ke = 5 : (ke = 0, ua = Gn = null, V0(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (Ln = null), Hc(n), t = t.stateNode, bt && typeof bt.onCommitFiberRoot == "function")
        try {
          bt.onCommitFiberRoot(
            Sa,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = D.T, a = F.p, F.p = 2, D.T = null;
        try {
          for (var i = e.onRecoverableError, f = 0; f < l.length; f++) {
            var o = l[f];
            i(o.value, {
              componentStack: o.stack
            });
          }
        } finally {
          D.T = t, F.p = a;
        }
      }
      (pn & 3) !== 0 && Qi(), Pt(e), a = e.pendingLanes, (n & 261930) !== 0 && (a & 42) !== 0 ? e === Sr ? eu++ : (eu = 0, Sr = e) : eu = 0, tu(0);
    }
  }
  function V0(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, qa(t)));
  }
  function Qi() {
    return Y0(), L0(), G0(), X0();
  }
  function X0() {
    if (ke !== 5) return !1;
    var e = Gn, t = gr;
    gr = 0;
    var n = Hc(pn), l = D.T, a = F.p;
    try {
      F.p = 32 > n ? 32 : n, D.T = null, n = pr, pr = null;
      var i = Gn, f = pn;
      if (ke = 0, ua = Gn = null, pn = 0, (De & 6) !== 0) throw Error(r(331));
      var o = De;
      if (De |= 4, M0(i.current), E0(
        i,
        i.current,
        f,
        n
      ), De = o, tu(0, !1), bt && typeof bt.onPostCommitFiberRoot == "function")
        try {
          bt.onPostCommitFiberRoot(Sa, i);
        } catch {
        }
      return !0;
    } finally {
      F.p = a, D.T = l, V0(e, t);
    }
  }
  function Z0(e, t, n) {
    t = Qt(n, t), t = $f(e.stateNode, t, 2), e = qn(e, t, 2), e !== null && (_a(e, 2), Pt(e));
  }
  function Oe(e, t, n) {
    if (e.tag === 3)
      Z0(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Z0(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Ln === null || !Ln.has(l))) {
            e = Qt(n, e), n = Kd(2), l = qn(t, n, 2), l !== null && (Jd(
              n,
              l,
              t,
              e
            ), _a(l, 2), Pt(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function Er(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Lv();
      var a = /* @__PURE__ */ new Set();
      l.set(t, a);
    } else
      a = l.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), l.set(t, a));
    a.has(n) || (hr = !0, a.add(n), e = Kv.bind(null, e, t, n), t.then(e, e));
  }
  function Kv(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, je === e && (Ee & n) === n && (He === 4 || He === 3 && (Ee & 62914560) === Ee && 300 > St() - Ri ? (De & 2) === 0 && ia(e, 0) : yr |= n, aa === Ee && (aa = 0)), Pt(e);
  }
  function K0(e, t) {
    t === 0 && (t = ws()), e = cl(e, t), e !== null && (_a(e, t), Pt(e));
  }
  function Jv(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), K0(e, n);
  }
  function kv(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, a = e.memoizedState;
        a !== null && (n = a.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    l !== null && l.delete(t), K0(e, n);
  }
  function Fv(e, t) {
    return pa(e, t);
  }
  var Bi = null, fa = null, Tr = !1, Hi = !1, Ar = !1, Xn = 0;
  function Pt(e) {
    e !== fa && e.next === null && (fa === null ? Bi = fa = e : fa = fa.next = e), Hi = !0, Tr || (Tr = !0, $v());
  }
  function tu(e, t) {
    if (!Ar && Hi) {
      Ar = !0;
      do
        for (var n = !1, l = Bi; l !== null; ) {
          if (e !== 0) {
            var a = l.pendingLanes;
            if (a === 0) var i = 0;
            else {
              var f = l.suspendedLanes, o = l.pingedLanes;
              i = (1 << 31 - _t(42 | e) + 1) - 1, i &= a & ~(f & ~o), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (n = !0, W0(l, i));
          } else
            i = Ee, i = Gu(
              l,
              l === je ? i : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (i & 3) === 0 || ba(l, i) || (n = !0, W0(l, i));
          l = l.next;
        }
      while (n);
      Ar = !1;
    }
  }
  function Wv() {
    J0();
  }
  function J0() {
    Hi = Tr = !1;
    var e = 0;
    Xn !== 0 && c2() && (e = Xn);
    for (var t = St(), n = null, l = Bi; l !== null; ) {
      var a = l.next, i = k0(l, t);
      i === 0 ? (l.next = null, n === null ? Bi = a : n.next = a, a === null && (fa = n)) : (n = l, (e !== 0 || (i & 3) !== 0) && (Hi = !0)), l = a;
    }
    ke !== 0 && ke !== 5 || tu(e), Xn !== 0 && (Xn = 0);
  }
  function k0(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var f = 31 - _t(i), o = 1 << f, v = a[f];
      v === -1 ? ((o & n) === 0 || (o & l) !== 0) && (a[f] = Ty(o, t)) : v <= t && (e.expiredLanes |= o), i &= ~o;
    }
    if (t = je, n = Ee, n = Gu(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, n === 0 || e === t && (ze === 2 || ze === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && zl(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || ba(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (l !== null && zl(l), Hc(n)) {
        case 2:
        case 8:
          n = Bs;
          break;
        case 32:
          n = Hu;
          break;
        case 268435456:
          n = Hs;
          break;
        default:
          n = Hu;
      }
      return l = F0.bind(null, e), n = pa(n, l), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return l !== null && l !== null && zl(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function F0(e, t) {
    if (ke !== 0 && ke !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Qi() && e.callbackNode !== n)
      return null;
    var l = Ee;
    return l = Gu(
      e,
      e === je ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (R0(e, l, t), k0(e, St()), e.callbackNode != null && e.callbackNode === n ? F0.bind(null, e) : null);
  }
  function W0(e, t) {
    if (Qi()) return null;
    R0(e, t, !0);
  }
  function $v() {
    r2(function() {
      (De & 6) !== 0 ? pa(
        Qs,
        Wv
      ) : J0();
    });
  }
  function Mr() {
    if (Xn === 0) {
      var e = Jl;
      e === 0 && (e = wu, wu <<= 1, (wu & 261888) === 0 && (wu = 256)), Xn = e;
    }
    return Xn;
  }
  function $0(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ku("" + e);
  }
  function I0(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Iv(e, t, n, l, a) {
    if (t === "submit" && n && n.stateNode === a) {
      var i = $0(
        (a[ot] || null).action
      ), f = l.submitter;
      f && (t = (t = f[ot] || null) ? $0(t.formAction) : f.getAttribute("formAction"), t !== null && (i = t, f = null));
      var o = new Wu(
        "action",
        "action",
        null,
        l,
        a
      );
      e.push({
        event: o,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Xn !== 0) {
                  var v = f ? I0(a, f) : new FormData(a);
                  Zf(
                    n,
                    {
                      pending: !0,
                      data: v,
                      method: a.method,
                      action: i
                    },
                    null,
                    v
                  );
                }
              } else
                typeof i == "function" && (o.preventDefault(), v = f ? I0(a, f) : new FormData(a), Zf(
                  n,
                  {
                    pending: !0,
                    data: v,
                    method: a.method,
                    action: i
                  },
                  i,
                  v
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var Cr = 0; Cr < ff.length; Cr++) {
    var Dr = ff[Cr], Pv = Dr.toLowerCase(), e2 = Dr[0].toUpperCase() + Dr.slice(1);
    Xt(
      Pv,
      "on" + e2
    );
  }
  Xt(Oo, "onAnimationEnd"), Xt(Ro, "onAnimationIteration"), Xt(No, "onAnimationStart"), Xt("dblclick", "onDoubleClick"), Xt("focusin", "onFocus"), Xt("focusout", "onBlur"), Xt(vv, "onTransitionRun"), Xt(gv, "onTransitionStart"), Xt(pv, "onTransitionCancel"), Xt(Uo, "onTransitionEnd"), jl("onMouseEnter", ["mouseout", "mouseover"]), jl("onMouseLeave", ["mouseout", "mouseover"]), jl("onPointerEnter", ["pointerout", "pointerover"]), jl("onPointerLeave", ["pointerout", "pointerover"]), ll(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ll(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ll("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ll(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ll(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ll(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var nu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), t2 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nu)
  );
  function P0(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n], a = l.event;
      l = l.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var f = l.length - 1; 0 <= f; f--) {
            var o = l[f], v = o.instance, B = o.currentTarget;
            if (o = o.listener, v !== i && a.isPropagationStopped())
              break e;
            i = o, a.currentTarget = B;
            try {
              i(a);
            } catch (J) {
              Pu(J);
            }
            a.currentTarget = null, i = v;
          }
        else
          for (f = 0; f < l.length; f++) {
            if (o = l[f], v = o.instance, B = o.currentTarget, o = o.listener, v !== i && a.isPropagationStopped())
              break e;
            i = o, a.currentTarget = B;
            try {
              i(a);
            } catch (J) {
              Pu(J);
            }
            a.currentTarget = null, i = v;
          }
      }
    }
  }
  function _e(e, t) {
    var n = t[wc];
    n === void 0 && (n = t[wc] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    n.has(l) || (em(t, e, 2, !1), n.add(l));
  }
  function zr(e, t, n) {
    var l = 0;
    t && (l |= 4), em(
      n,
      e,
      l,
      t
    );
  }
  var wi = "_reactListening" + Math.random().toString(36).slice(2);
  function Or(e) {
    if (!e[wi]) {
      e[wi] = !0, Ks.forEach(function(n) {
        n !== "selectionchange" && (t2.has(n) || zr(n, !1, e), zr(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[wi] || (t[wi] = !0, zr("selectionchange", !1, t));
    }
  }
  function em(e, t, n, l) {
    switch (Om(t)) {
      case 2:
        var a = O2;
        break;
      case 8:
        a = R2;
        break;
      default:
        a = Xr;
    }
    n = a.bind(
      null,
      t,
      n,
      e
    ), a = void 0, !kc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), l ? a !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: a
    }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, {
      passive: a
    }) : e.addEventListener(t, n, !1);
  }
  function Rr(e, t, n, l, a) {
    var i = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var f = l.tag;
        if (f === 3 || f === 4) {
          var o = l.stateNode.containerInfo;
          if (o === a) break;
          if (f === 4)
            for (f = l.return; f !== null; ) {
              var v = f.tag;
              if ((v === 3 || v === 4) && f.stateNode.containerInfo === a)
                return;
              f = f.return;
            }
          for (; o !== null; ) {
            if (f = Rl(o), f === null) return;
            if (v = f.tag, v === 5 || v === 6 || v === 26 || v === 27) {
              l = i = f;
              continue e;
            }
            o = o.parentNode;
          }
        }
        l = l.return;
      }
    ao(function() {
      var B = i, J = Kc(n), P = [];
      e: {
        var H = jo.get(e);
        if (H !== void 0) {
          var Z = Wu, fe = e;
          switch (e) {
            case "keypress":
              if (ku(n) === 0) break e;
            case "keydown":
            case "keyup":
              Z = ky;
              break;
            case "focusin":
              fe = "focus", Z = Ic;
              break;
            case "focusout":
              fe = "blur", Z = Ic;
              break;
            case "beforeblur":
            case "afterblur":
              Z = Ic;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Z = co;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Z = Qy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = $y;
              break;
            case Oo:
            case Ro:
            case No:
              Z = wy;
              break;
            case Uo:
              Z = Py;
              break;
            case "scroll":
            case "scrollend":
              Z = xy;
              break;
            case "wheel":
              Z = tv;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = Ly;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = ro;
              break;
            case "toggle":
            case "beforetoggle":
              Z = lv;
          }
          var he = (t & 4) !== 0, Ue = !he && (e === "scroll" || e === "scrollend"), N = he ? H !== null ? H + "Capture" : null : H;
          he = [];
          for (var E = B, Q; E !== null; ) {
            var $ = E;
            if (Q = $.stateNode, $ = $.tag, $ !== 5 && $ !== 26 && $ !== 27 || Q === null || N === null || ($ = Aa(E, N), $ != null && he.push(
              lu(E, $, Q)
            )), Ue) break;
            E = E.return;
          }
          0 < he.length && (H = new Z(
            H,
            fe,
            null,
            n,
            J
          ), P.push({ event: H, listeners: he }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (H = e === "mouseover" || e === "pointerover", Z = e === "mouseout" || e === "pointerout", H && n !== Zc && (fe = n.relatedTarget || n.fromElement) && (Rl(fe) || fe[Ol]))
            break e;
          if ((Z || H) && (H = J.window === J ? J : (H = J.ownerDocument) ? H.defaultView || H.parentWindow : window, Z ? (fe = n.relatedTarget || n.toElement, Z = B, fe = fe ? Rl(fe) : null, fe !== null && (Ue = m(fe), he = fe.tag, fe !== Ue || he !== 5 && he !== 27 && he !== 6) && (fe = null)) : (Z = null, fe = B), Z !== fe)) {
            if (he = co, $ = "onMouseLeave", N = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (he = ro, $ = "onPointerLeave", N = "onPointerEnter", E = "pointer"), Ue = Z == null ? H : Ta(Z), Q = fe == null ? H : Ta(fe), H = new he(
              $,
              E + "leave",
              Z,
              n,
              J
            ), H.target = Ue, H.relatedTarget = Q, $ = null, Rl(J) === B && (he = new he(
              N,
              E + "enter",
              fe,
              n,
              J
            ), he.target = Q, he.relatedTarget = Ue, $ = he), Ue = $, Z && fe)
              t: {
                for (he = n2, N = Z, E = fe, Q = 0, $ = N; $; $ = he($))
                  Q++;
                $ = 0;
                for (var me = E; me; me = he(me))
                  $++;
                for (; 0 < Q - $; )
                  N = he(N), Q--;
                for (; 0 < $ - Q; )
                  E = he(E), $--;
                for (; Q--; ) {
                  if (N === E || E !== null && N === E.alternate) {
                    he = N;
                    break t;
                  }
                  N = he(N), E = he(E);
                }
                he = null;
              }
            else he = null;
            Z !== null && tm(
              P,
              H,
              Z,
              he,
              !1
            ), fe !== null && Ue !== null && tm(
              P,
              Ue,
              fe,
              he,
              !0
            );
          }
        }
        e: {
          if (H = B ? Ta(B) : window, Z = H.nodeName && H.nodeName.toLowerCase(), Z === "select" || Z === "input" && H.type === "file")
            var Me = po;
          else if (vo(H))
            if (So)
              Me = mv;
            else {
              Me = ov;
              var oe = sv;
            }
          else
            Z = H.nodeName, !Z || Z.toLowerCase() !== "input" || H.type !== "checkbox" && H.type !== "radio" ? B && Xc(B.elementType) && (Me = po) : Me = dv;
          if (Me && (Me = Me(e, B))) {
            go(
              P,
              Me,
              n,
              J
            );
            break e;
          }
          oe && oe(e, H, B), e === "focusout" && B && H.type === "number" && B.memoizedProps.value != null && Vc(H, "number", H.value);
        }
        switch (oe = B ? Ta(B) : window, e) {
          case "focusin":
            (vo(oe) || oe.contentEditable === "true") && (wl = oe, af = B, Ua = null);
            break;
          case "focusout":
            Ua = af = wl = null;
            break;
          case "mousedown":
            uf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            uf = !1, Do(P, n, J);
            break;
          case "selectionchange":
            if (yv) break;
          case "keydown":
          case "keyup":
            Do(P, n, J);
        }
        var ge;
        if (ef)
          e: {
            switch (e) {
              case "compositionstart":
                var Te = "onCompositionStart";
                break e;
              case "compositionend":
                Te = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Te = "onCompositionUpdate";
                break e;
            }
            Te = void 0;
          }
        else
          Hl ? ho(e, n) && (Te = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Te = "onCompositionStart");
        Te && (so && n.locale !== "ko" && (Hl || Te !== "onCompositionStart" ? Te === "onCompositionEnd" && Hl && (ge = uo()) : (zn = J, Fc = "value" in zn ? zn.value : zn.textContent, Hl = !0)), oe = Yi(B, Te), 0 < oe.length && (Te = new fo(
          Te,
          e,
          null,
          n,
          J
        ), P.push({ event: Te, listeners: oe }), ge ? Te.data = ge : (ge = yo(n), ge !== null && (Te.data = ge)))), (ge = uv ? iv(e, n) : cv(e, n)) && (Te = Yi(B, "onBeforeInput"), 0 < Te.length && (oe = new fo(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          J
        ), P.push({
          event: oe,
          listeners: Te
        }), oe.data = ge)), Iv(
          P,
          e,
          B,
          n,
          J
        );
      }
      P0(P, t);
    });
  }
  function lu(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Yi(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var a = e, i = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || i === null || (a = Aa(e, n), a != null && l.unshift(
        lu(e, a, i)
      ), a = Aa(e, t), a != null && l.push(
        lu(e, a, i)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function n2(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function tm(e, t, n, l, a) {
    for (var i = t._reactName, f = []; n !== null && n !== l; ) {
      var o = n, v = o.alternate, B = o.stateNode;
      if (o = o.tag, v !== null && v === l) break;
      o !== 5 && o !== 26 && o !== 27 || B === null || (v = B, a ? (B = Aa(n, i), B != null && f.unshift(
        lu(n, B, v)
      )) : a || (B = Aa(n, i), B != null && f.push(
        lu(n, B, v)
      ))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var l2 = /\r\n?/g, a2 = /\u0000|\uFFFD/g;
  function nm(e) {
    return (typeof e == "string" ? e : "" + e).replace(l2, `
`).replace(a2, "");
  }
  function lm(e, t) {
    return t = nm(t), nm(e) === t;
  }
  function Ne(e, t, n, l, a, i) {
    switch (n) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || ql(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && ql(e, "" + l);
        break;
      case "className":
        Xu(e, "class", l);
        break;
      case "tabIndex":
        Xu(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Xu(e, n, l);
        break;
      case "style":
        no(e, l, i);
        break;
      case "data":
        if (t !== "object") {
          Xu(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = Ku("" + l), e.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (n === "formAction" ? (t !== "input" && Ne(e, t, "name", a.name, a, null), Ne(
            e,
            t,
            "formEncType",
            a.formEncType,
            a,
            null
          ), Ne(
            e,
            t,
            "formMethod",
            a.formMethod,
            a,
            null
          ), Ne(
            e,
            t,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (Ne(e, t, "encType", a.encType, a, null), Ne(e, t, "method", a.method, a, null), Ne(e, t, "target", a.target, a, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = Ku("" + l), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = nn);
        break;
      case "onScroll":
        l != null && _e("scroll", e);
        break;
      case "onScrollEnd":
        l != null && _e("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(r(61));
          if (n = l.__html, n != null) {
            if (a.children != null) throw Error(r(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
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
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = Ku("" + l), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
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
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "" + l) : e.removeAttribute(n);
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
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(n) : e.setAttribute(n, l);
        break;
      case "popover":
        _e("beforetoggle", e), _e("toggle", e), Vu(e, "popover", l);
        break;
      case "xlinkActuate":
        tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        tn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        tn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        tn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Vu(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Uy.get(n) || n, Vu(e, n, l));
    }
  }
  function Nr(e, t, n, l, a, i) {
    switch (n) {
      case "style":
        no(e, l, i);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(r(61));
          if (n = l.__html, n != null) {
            if (a.children != null) throw Error(r(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string" ? ql(e, l) : (typeof l == "number" || typeof l == "bigint") && ql(e, "" + l);
        break;
      case "onScroll":
        l != null && _e("scroll", e);
        break;
      case "onScrollEnd":
        l != null && _e("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = nn);
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
        if (!Js.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), i = e[ot] || null, i = i != null ? i[n] : null, typeof i == "function" && e.removeEventListener(t, i, a), typeof l == "function")) {
              typeof i != "function" && i !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, a);
              break e;
            }
            n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : Vu(e, n, l);
          }
    }
  }
  function ut(e, t, n) {
    switch (t) {
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
        _e("error", e), _e("load", e);
        var l = !1, a = !1, i;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var f = n[i];
            if (f != null)
              switch (i) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  Ne(e, t, i, f, n, null);
              }
          }
        a && Ne(e, t, "srcSet", n.srcSet, n, null), l && Ne(e, t, "src", n.src, n, null);
        return;
      case "input":
        _e("invalid", e);
        var o = i = f = a = null, v = null, B = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var J = n[l];
            if (J != null)
              switch (l) {
                case "name":
                  a = J;
                  break;
                case "type":
                  f = J;
                  break;
                case "checked":
                  v = J;
                  break;
                case "defaultChecked":
                  B = J;
                  break;
                case "value":
                  i = J;
                  break;
                case "defaultValue":
                  o = J;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (J != null)
                    throw Error(r(137, t));
                  break;
                default:
                  Ne(e, t, l, J, n, null);
              }
          }
        Is(
          e,
          i,
          o,
          v,
          B,
          f,
          a,
          !1
        );
        return;
      case "select":
        _e("invalid", e), l = f = i = null;
        for (a in n)
          if (n.hasOwnProperty(a) && (o = n[a], o != null))
            switch (a) {
              case "value":
                i = o;
                break;
              case "defaultValue":
                f = o;
                break;
              case "multiple":
                l = o;
              default:
                Ne(e, t, a, o, n, null);
            }
        t = i, n = f, e.multiple = !!l, t != null ? xl(e, !!l, t, !1) : n != null && xl(e, !!l, n, !0);
        return;
      case "textarea":
        _e("invalid", e), i = a = l = null;
        for (f in n)
          if (n.hasOwnProperty(f) && (o = n[f], o != null))
            switch (f) {
              case "value":
                l = o;
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
                Ne(e, t, f, o, n, null);
            }
        eo(e, l, a, i);
        return;
      case "option":
        for (v in n)
          n.hasOwnProperty(v) && (l = n[v], l != null) && (v === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : Ne(e, t, v, l, n, null));
        return;
      case "dialog":
        _e("beforetoggle", e), _e("toggle", e), _e("cancel", e), _e("close", e);
        break;
      case "iframe":
      case "object":
        _e("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < nu.length; l++)
          _e(nu[l], e);
        break;
      case "image":
        _e("error", e), _e("load", e);
        break;
      case "details":
        _e("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        _e("error", e), _e("load", e);
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
        for (B in n)
          if (n.hasOwnProperty(B) && (l = n[B], l != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                Ne(e, t, B, l, n, null);
            }
        return;
      default:
        if (Xc(t)) {
          for (J in n)
            n.hasOwnProperty(J) && (l = n[J], l !== void 0 && Nr(
              e,
              t,
              J,
              l,
              n,
              void 0
            ));
          return;
        }
    }
    for (o in n)
      n.hasOwnProperty(o) && (l = n[o], l != null && Ne(e, t, o, l, n, null));
  }
  function u2(e, t, n, l) {
    switch (t) {
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
        var a = null, i = null, f = null, o = null, v = null, B = null, J = null;
        for (Z in n) {
          var P = n[Z];
          if (n.hasOwnProperty(Z) && P != null)
            switch (Z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                v = P;
              default:
                l.hasOwnProperty(Z) || Ne(e, t, Z, null, l, P);
            }
        }
        for (var H in l) {
          var Z = l[H];
          if (P = n[H], l.hasOwnProperty(H) && (Z != null || P != null))
            switch (H) {
              case "type":
                i = Z;
                break;
              case "name":
                a = Z;
                break;
              case "checked":
                B = Z;
                break;
              case "defaultChecked":
                J = Z;
                break;
              case "value":
                f = Z;
                break;
              case "defaultValue":
                o = Z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null)
                  throw Error(r(137, t));
                break;
              default:
                Z !== P && Ne(
                  e,
                  t,
                  H,
                  Z,
                  l,
                  P
                );
            }
        }
        Gc(
          e,
          f,
          o,
          v,
          B,
          J,
          i,
          a
        );
        return;
      case "select":
        Z = f = o = H = null;
        for (i in n)
          if (v = n[i], n.hasOwnProperty(i) && v != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                Z = v;
              default:
                l.hasOwnProperty(i) || Ne(
                  e,
                  t,
                  i,
                  null,
                  l,
                  v
                );
            }
        for (a in l)
          if (i = l[a], v = n[a], l.hasOwnProperty(a) && (i != null || v != null))
            switch (a) {
              case "value":
                H = i;
                break;
              case "defaultValue":
                o = i;
                break;
              case "multiple":
                f = i;
              default:
                i !== v && Ne(
                  e,
                  t,
                  a,
                  i,
                  l,
                  v
                );
            }
        t = o, n = f, l = Z, H != null ? xl(e, !!n, H, !1) : !!l != !!n && (t != null ? xl(e, !!n, t, !0) : xl(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        Z = H = null;
        for (o in n)
          if (a = n[o], n.hasOwnProperty(o) && a != null && !l.hasOwnProperty(o))
            switch (o) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ne(e, t, o, null, l, a);
            }
        for (f in l)
          if (a = l[f], i = n[f], l.hasOwnProperty(f) && (a != null || i != null))
            switch (f) {
              case "value":
                H = a;
                break;
              case "defaultValue":
                Z = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(r(91));
                break;
              default:
                a !== i && Ne(e, t, f, a, l, i);
            }
        Ps(e, H, Z);
        return;
      case "option":
        for (var fe in n)
          H = n[fe], n.hasOwnProperty(fe) && H != null && !l.hasOwnProperty(fe) && (fe === "selected" ? e.selected = !1 : Ne(
            e,
            t,
            fe,
            null,
            l,
            H
          ));
        for (v in l)
          H = l[v], Z = n[v], l.hasOwnProperty(v) && H !== Z && (H != null || Z != null) && (v === "selected" ? e.selected = H && typeof H != "function" && typeof H != "symbol" : Ne(
            e,
            t,
            v,
            H,
            l,
            Z
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
        for (var he in n)
          H = n[he], n.hasOwnProperty(he) && H != null && !l.hasOwnProperty(he) && Ne(e, t, he, null, l, H);
        for (B in l)
          if (H = l[B], Z = n[B], l.hasOwnProperty(B) && H !== Z && (H != null || Z != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null)
                  throw Error(r(137, t));
                break;
              default:
                Ne(
                  e,
                  t,
                  B,
                  H,
                  l,
                  Z
                );
            }
        return;
      default:
        if (Xc(t)) {
          for (var Ue in n)
            H = n[Ue], n.hasOwnProperty(Ue) && H !== void 0 && !l.hasOwnProperty(Ue) && Nr(
              e,
              t,
              Ue,
              void 0,
              l,
              H
            );
          for (J in l)
            H = l[J], Z = n[J], !l.hasOwnProperty(J) || H === Z || H === void 0 && Z === void 0 || Nr(
              e,
              t,
              J,
              H,
              l,
              Z
            );
          return;
        }
    }
    for (var N in n)
      H = n[N], n.hasOwnProperty(N) && H != null && !l.hasOwnProperty(N) && Ne(e, t, N, null, l, H);
    for (P in l)
      H = l[P], Z = n[P], !l.hasOwnProperty(P) || H === Z || H == null && Z == null || Ne(e, t, P, H, l, Z);
  }
  function am(e) {
    switch (e) {
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
  function i2() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
        var a = n[l], i = a.transferSize, f = a.initiatorType, o = a.duration;
        if (i && o && am(f)) {
          for (f = 0, o = a.responseEnd, l += 1; l < n.length; l++) {
            var v = n[l], B = v.startTime;
            if (B > o) break;
            var J = v.transferSize, P = v.initiatorType;
            J && am(P) && (v = v.responseEnd, f += J * (v < o ? 1 : (o - B) / (v - B)));
          }
          if (--l, t += 8 * (i + f) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Ur = null, jr = null;
  function Li(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function um(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function im(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function xr(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var qr = null;
  function c2() {
    var e = window.event;
    return e && e.type === "popstate" ? e === qr ? !1 : (qr = e, !0) : (qr = null, !1);
  }
  var cm = typeof setTimeout == "function" ? setTimeout : void 0, f2 = typeof clearTimeout == "function" ? clearTimeout : void 0, fm = typeof Promise == "function" ? Promise : void 0, r2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof fm < "u" ? function(e) {
    return fm.resolve(null).then(e).catch(s2);
  } : cm;
  function s2(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Zn(e) {
    return e === "head";
  }
  function rm(e, t) {
    var n = t, l = 0;
    do {
      var a = n.nextSibling;
      if (e.removeChild(n), a && a.nodeType === 8)
        if (n = a.data, n === "/$" || n === "/&") {
          if (l === 0) {
            e.removeChild(a), da(t);
            return;
          }
          l--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          l++;
        else if (n === "html")
          au(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, au(n);
          for (var i = n.firstChild; i; ) {
            var f = i.nextSibling, o = i.nodeName;
            i[Ea] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && i.rel.toLowerCase() === "stylesheet" || n.removeChild(i), i = f;
          }
        } else
          n === "body" && au(e.ownerDocument.body);
      n = a;
    } while (n);
    da(t);
  }
  function sm(e, t) {
    var n = e;
    e = 0;
    do {
      var l = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), l && l.nodeType === 8)
        if (n = l.data, n === "/$") {
          if (e === 0) break;
          e--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = l;
    } while (n);
  }
  function Qr(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Qr(n), Yc(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function o2(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var a = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[Ea])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (i !== a.rel || e.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || e.getAttribute("title") !== (a.title == null ? null : a.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (i = e.getAttribute("src"), (i !== (a.src == null ? null : a.src) || e.getAttribute("type") !== (a.type == null ? null : a.type) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var i = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && e.getAttribute("name") === i)
          return e;
      } else return e;
      if (e = Lt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function d2(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Lt(e.nextSibling), e === null)) return null;
    return e;
  }
  function om(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Lt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Br(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Hr(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function m2(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading")
      t();
    else {
      var l = function() {
        t(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function Lt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var wr = null;
  function dm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return Lt(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function mm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else n !== "/$" && n !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function hm(e, t, n) {
    switch (t = Li(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(r(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(r(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function au(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Yc(e);
  }
  var Gt = /* @__PURE__ */ new Map(), ym = /* @__PURE__ */ new Set();
  function Gi(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Sn = F.d;
  F.d = {
    f: h2,
    r: y2,
    D: v2,
    C: g2,
    L: p2,
    m: S2,
    X: _2,
    S: b2,
    M: E2
  };
  function h2() {
    var e = Sn.f(), t = ji();
    return e || t;
  }
  function y2(e) {
    var t = Nl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Ud(t) : Sn.r(e);
  }
  var ra = typeof document > "u" ? null : document;
  function vm(e, t, n) {
    var l = ra;
    if (l && typeof t == "string" && t) {
      var a = xt(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof n == "string" && (a += '[crossorigin="' + n + '"]'), ym.has(a) || (ym.add(a), e = { rel: e, crossOrigin: n, href: t }, l.querySelector(a) === null && (t = l.createElement("link"), ut(t, "link", e), Fe(t), l.head.appendChild(t)));
    }
  }
  function v2(e) {
    Sn.D(e), vm("dns-prefetch", e, null);
  }
  function g2(e, t) {
    Sn.C(e, t), vm("preconnect", e, t);
  }
  function p2(e, t, n) {
    Sn.L(e, t, n);
    var l = ra;
    if (l && e && t) {
      var a = 'link[rel="preload"][as="' + xt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (a += '[imagesrcset="' + xt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (a += '[imagesizes="' + xt(
        n.imageSizes
      ) + '"]')) : a += '[href="' + xt(e) + '"]';
      var i = a;
      switch (t) {
        case "style":
          i = sa(e);
          break;
        case "script":
          i = oa(e);
      }
      Gt.has(i) || (e = S(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), Gt.set(i, e), l.querySelector(a) !== null || t === "style" && l.querySelector(uu(i)) || t === "script" && l.querySelector(iu(i)) || (t = l.createElement("link"), ut(t, "link", e), Fe(t), l.head.appendChild(t)));
    }
  }
  function S2(e, t) {
    Sn.m(e, t);
    var n = ra;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + xt(l) + '"][href="' + xt(e) + '"]', i = a;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = oa(e);
      }
      if (!Gt.has(i) && (e = S({ rel: "modulepreload", href: e }, t), Gt.set(i, e), n.querySelector(a) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(iu(i)))
              return;
        }
        l = n.createElement("link"), ut(l, "link", e), Fe(l), n.head.appendChild(l);
      }
    }
  }
  function b2(e, t, n) {
    Sn.S(e, t, n);
    var l = ra;
    if (l && e) {
      var a = Ul(l).hoistableStyles, i = sa(e);
      t = t || "default";
      var f = a.get(i);
      if (!f) {
        var o = { loading: 0, preload: null };
        if (f = l.querySelector(
          uu(i)
        ))
          o.loading = 5;
        else {
          e = S(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = Gt.get(i)) && Yr(e, n);
          var v = f = l.createElement("link");
          Fe(v), ut(v, "link", e), v._p = new Promise(function(B, J) {
            v.onload = B, v.onerror = J;
          }), v.addEventListener("load", function() {
            o.loading |= 1;
          }), v.addEventListener("error", function() {
            o.loading |= 2;
          }), o.loading |= 4, Vi(f, t, l);
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
  function _2(e, t) {
    Sn.X(e, t);
    var n = ra;
    if (n && e) {
      var l = Ul(n).hoistableScripts, a = oa(e), i = l.get(a);
      i || (i = n.querySelector(iu(a)), i || (e = S({ src: e, async: !0 }, t), (t = Gt.get(a)) && Lr(e, t), i = n.createElement("script"), Fe(i), ut(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, l.set(a, i));
    }
  }
  function E2(e, t) {
    Sn.M(e, t);
    var n = ra;
    if (n && e) {
      var l = Ul(n).hoistableScripts, a = oa(e), i = l.get(a);
      i || (i = n.querySelector(iu(a)), i || (e = S({ src: e, async: !0, type: "module" }, t), (t = Gt.get(a)) && Lr(e, t), i = n.createElement("script"), Fe(i), ut(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, l.set(a, i));
    }
  }
  function gm(e, t, n, l) {
    var a = (a = re.current) ? Gi(a) : null;
    if (!a) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = sa(n.href), n = Ul(
          a
        ).hoistableStyles, l = n.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = sa(n.href);
          var i = Ul(
            a
          ).hoistableStyles, f = i.get(e);
          if (f || (a = a.ownerDocument || a, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, f), (i = a.querySelector(
            uu(e)
          )) && !i._p && (f.instance = i, f.state.loading = 5), Gt.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Gt.set(e, n), i || T2(
            a,
            e,
            n,
            f.state
          ))), t && l === null)
            throw Error(r(528, ""));
          return f;
        }
        if (t && l !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = oa(n), n = Ul(
          a
        ).hoistableScripts, l = n.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, e));
    }
  }
  function sa(e) {
    return 'href="' + xt(e) + '"';
  }
  function uu(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function pm(e) {
    return S({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function T2(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), ut(t, "link", n), Fe(t), e.head.appendChild(t));
  }
  function oa(e) {
    return '[src="' + xt(e) + '"]';
  }
  function iu(e) {
    return "script[async]" + e;
  }
  function Sm(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + xt(n.href) + '"]'
          );
          if (l)
            return t.instance = l, Fe(l), l;
          var a = S({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), Fe(l), ut(l, "style", a), Vi(l, n.precedence, e), t.instance = l;
        case "stylesheet":
          a = sa(n.href);
          var i = e.querySelector(
            uu(a)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, Fe(i), i;
          l = pm(n), (a = Gt.get(a)) && Yr(l, a), i = (e.ownerDocument || e).createElement("link"), Fe(i);
          var f = i;
          return f._p = new Promise(function(o, v) {
            f.onload = o, f.onerror = v;
          }), ut(i, "link", l), t.state.loading |= 4, Vi(i, n.precedence, e), t.instance = i;
        case "script":
          return i = oa(n.src), (a = e.querySelector(
            iu(i)
          )) ? (t.instance = a, Fe(a), a) : (l = n, (a = Gt.get(i)) && (l = S({}, n), Lr(l, a)), e = e.ownerDocument || e, a = e.createElement("script"), Fe(a), ut(a, "link", l), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Vi(l, n.precedence, e));
    return t.instance;
  }
  function Vi(e, t, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = l.length ? l[l.length - 1] : null, i = a, f = 0; f < l.length; f++) {
      var o = l[f];
      if (o.dataset.precedence === t) i = o;
      else if (i !== a) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Yr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Lr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Xi = null;
  function bm(e, t, n) {
    if (Xi === null) {
      var l = /* @__PURE__ */ new Map(), a = Xi = /* @__PURE__ */ new Map();
      a.set(n, l);
    } else
      a = Xi, l = a.get(n), l || (l = /* @__PURE__ */ new Map(), a.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
      var i = n[a];
      if (!(i[Ea] || i[tt] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = i.getAttribute(t) || "";
        f = e + f;
        var o = l.get(f);
        o ? o.push(i) : l.set(f, [i]);
      }
    }
    return l;
  }
  function _m(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function A2(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Em(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function M2(e, t, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var a = sa(l.href), i = t.querySelector(
          uu(a)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Zi.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, Fe(i);
          return;
        }
        i = t.ownerDocument || t, l = pm(l), (a = Gt.get(a)) && Yr(l, a), i = i.createElement("link"), Fe(i);
        var f = i;
        f._p = new Promise(function(o, v) {
          f.onload = o, f.onerror = v;
        }), ut(i, "link", l), n.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Zi.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Gr = 0;
  function C2(e, t) {
    return e.stylesheets && e.count === 0 && Ji(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var l = setTimeout(function() {
        if (e.stylesheets && Ji(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Gr === 0 && (Gr = 62500 * i2());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Ji(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        },
        (e.imgBytes > Gr ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(a);
      };
    } : null;
  }
  function Zi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Ji(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Ki = null;
  function Ji(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Ki = /* @__PURE__ */ new Map(), t.forEach(D2, e), Ki = null, Zi.call(e));
  }
  function D2(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Ki.get(e);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Ki.set(e, n);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < a.length; i++) {
          var f = a[i];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), l = f);
        }
        l && n.set(null, l);
      }
      a = t.instance, f = a.getAttribute("data-precedence"), i = n.get(f) || l, i === l && n.set(null, a), n.set(f, a), this.count++, l = Zi.bind(this), a.addEventListener("load", l), a.addEventListener("error", l), i ? i.parentNode.insertBefore(a, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var cu = {
    $$typeof: b,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0
  };
  function z2(e, t, n, l, a, i, f, o, v) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Qc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qc(0), this.hiddenUpdates = Qc(null), this.identifierPrefix = l, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Tm(e, t, n, l, a, i, f, o, v, B, J, P) {
    return e = new z2(
      e,
      t,
      n,
      f,
      v,
      B,
      J,
      P,
      o
    ), t = 1, i === !0 && (t |= 24), i = Tt(3, null, null, t), e.current = i, i.stateNode = e, t = _f(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, Mf(i), e;
  }
  function Am(e) {
    return e ? (e = Gl, e) : Gl;
  }
  function Mm(e, t, n, l, a, i) {
    a = Am(a), l.context === null ? l.context = a : l.pendingContext = a, l = xn(t), l.payload = { element: n }, i = i === void 0 ? null : i, i !== null && (l.callback = i), n = qn(e, l, t), n !== null && (gt(n, e, t), wa(n, e, t));
  }
  function Cm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Vr(e, t) {
    Cm(e, t), (e = e.alternate) && Cm(e, t);
  }
  function Dm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = cl(e, 67108864);
      t !== null && gt(t, e, 67108864), Vr(e, 67108864);
    }
  }
  function zm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = zt();
      t = Bc(t);
      var n = cl(e, t);
      n !== null && gt(n, e, t), Vr(e, t);
    }
  }
  var ki = !0;
  function O2(e, t, n, l) {
    var a = D.T;
    D.T = null;
    var i = F.p;
    try {
      F.p = 2, Xr(e, t, n, l);
    } finally {
      F.p = i, D.T = a;
    }
  }
  function R2(e, t, n, l) {
    var a = D.T;
    D.T = null;
    var i = F.p;
    try {
      F.p = 8, Xr(e, t, n, l);
    } finally {
      F.p = i, D.T = a;
    }
  }
  function Xr(e, t, n, l) {
    if (ki) {
      var a = Zr(l);
      if (a === null)
        Rr(
          e,
          t,
          l,
          Fi,
          n
        ), Rm(e, l);
      else if (U2(
        a,
        e,
        t,
        n,
        l
      ))
        l.stopPropagation();
      else if (Rm(e, l), t & 4 && -1 < N2.indexOf(e)) {
        for (; a !== null; ) {
          var i = Nl(a);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var f = nl(i.pendingLanes);
                  if (f !== 0) {
                    var o = i;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; f; ) {
                      var v = 1 << 31 - _t(f);
                      o.entanglements[1] |= v, f &= ~v;
                    }
                    Pt(i), (De & 6) === 0 && (Ni = St() + 500, tu(0));
                  }
                }
                break;
              case 31:
              case 13:
                o = cl(i, 2), o !== null && gt(o, i, 2), ji(), Vr(i, 2);
            }
          if (i = Zr(l), i === null && Rr(
            e,
            t,
            l,
            Fi,
            n
          ), i === a) break;
          a = i;
        }
        a !== null && l.stopPropagation();
      } else
        Rr(
          e,
          t,
          l,
          null,
          n
        );
    }
  }
  function Zr(e) {
    return e = Kc(e), Kr(e);
  }
  var Fi = null;
  function Kr(e) {
    if (Fi = null, e = Rl(e), e !== null) {
      var t = m(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = g(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = O(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Fi = e, null;
  }
  function Om(e) {
    switch (e) {
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
        switch (vy()) {
          case Qs:
            return 2;
          case Bs:
            return 8;
          case Hu:
          case gy:
            return 32;
          case Hs:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Jr = !1, Kn = null, Jn = null, kn = null, fu = /* @__PURE__ */ new Map(), ru = /* @__PURE__ */ new Map(), Fn = [], N2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Rm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Kn = null;
        break;
      case "dragenter":
      case "dragleave":
        Jn = null;
        break;
      case "mouseover":
      case "mouseout":
        kn = null;
        break;
      case "pointerover":
      case "pointerout":
        fu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ru.delete(t.pointerId);
    }
  }
  function su(e, t, n, l, a, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: i,
      targetContainers: [a]
    }, t !== null && (t = Nl(t), t !== null && Dm(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function U2(e, t, n, l, a) {
    switch (t) {
      case "focusin":
        return Kn = su(
          Kn,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "dragenter":
        return Jn = su(
          Jn,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "mouseover":
        return kn = su(
          kn,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "pointerover":
        var i = a.pointerId;
        return fu.set(
          i,
          su(
            fu.get(i) || null,
            e,
            t,
            n,
            l,
            a
          )
        ), !0;
      case "gotpointercapture":
        return i = a.pointerId, ru.set(
          i,
          su(
            ru.get(i) || null,
            e,
            t,
            n,
            l,
            a
          )
        ), !0;
    }
    return !1;
  }
  function Nm(e) {
    var t = Rl(e.target);
    if (t !== null) {
      var n = m(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = g(n), t !== null) {
            e.blockedOn = t, Xs(e.priority, function() {
              zm(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = O(n), t !== null) {
            e.blockedOn = t, Xs(e.priority, function() {
              zm(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Wi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Zr(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        Zc = l, n.target.dispatchEvent(l), Zc = null;
      } else
        return t = Nl(n), t !== null && Dm(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Um(e, t, n) {
    Wi(e) && n.delete(t);
  }
  function j2() {
    Jr = !1, Kn !== null && Wi(Kn) && (Kn = null), Jn !== null && Wi(Jn) && (Jn = null), kn !== null && Wi(kn) && (kn = null), fu.forEach(Um), ru.forEach(Um);
  }
  function $i(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Jr || (Jr = !0, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      j2
    )));
  }
  var Ii = null;
  function jm(e) {
    Ii !== e && (Ii = e, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      function() {
        Ii === e && (Ii = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], a = e[t + 2];
          if (typeof l != "function") {
            if (Kr(l || n) === null)
              continue;
            break;
          }
          var i = Nl(n);
          i !== null && (e.splice(t, 3), t -= 3, Zf(
            i,
            {
              pending: !0,
              data: a,
              method: n.method,
              action: l
            },
            l,
            a
          ));
        }
      }
    ));
  }
  function da(e) {
    function t(v) {
      return $i(v, e);
    }
    Kn !== null && $i(Kn, e), Jn !== null && $i(Jn, e), kn !== null && $i(kn, e), fu.forEach(t), ru.forEach(t);
    for (var n = 0; n < Fn.length; n++) {
      var l = Fn[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Fn.length && (n = Fn[0], n.blockedOn === null); )
      Nm(n), n.blockedOn === null && Fn.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var a = n[l], i = n[l + 1], f = a[ot] || null;
        if (typeof i == "function")
          f || jm(n);
        else if (f) {
          var o = null;
          if (i && i.hasAttribute("formAction")) {
            if (a = i, f = i[ot] || null)
              o = f.formAction;
            else if (Kr(a) !== null) continue;
          } else o = f.action;
          typeof o == "function" ? n[l + 1] = o : (n.splice(l, 3), l -= 3), jm(n);
        }
      }
  }
  function xm() {
    function e(i) {
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
    function t() {
      a !== null && (a(), a = null), l || setTimeout(n, 20);
    }
    function n() {
      if (!l && !navigation.transition) {
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, {
          state: i.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, a = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), a !== null && (a(), a = null);
      };
    }
  }
  function kr(e) {
    this._internalRoot = e;
  }
  Pi.prototype.render = kr.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var n = t.current, l = zt();
    Mm(n, l, e, t, null, null);
  }, Pi.prototype.unmount = kr.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Mm(e.current, 2, null, e, null, null), ji(), t[Ol] = null;
    }
  };
  function Pi(e) {
    this._internalRoot = e;
  }
  Pi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Vs();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Fn.length && t !== 0 && t < Fn[n].priority; n++) ;
      Fn.splice(n, 0, e), n === 0 && Nm(e);
    }
  };
  var qm = c.version;
  if (qm !== "19.2.3")
    throw Error(
      r(
        527,
        qm,
        "19.2.3"
      )
    );
  F.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = h(t), e = e !== null ? q(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var x2 = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: D,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ec = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ec.isDisabled && ec.supportsFiber)
      try {
        Sa = ec.inject(
          x2
        ), bt = ec;
      } catch {
      }
  }
  return ou.createRoot = function(e, t) {
    if (!d(e)) throw Error(r(299));
    var n = !1, l = "", a = Gd, i = Vd, f = Xd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = Tm(
      e,
      1,
      !1,
      null,
      null,
      n,
      l,
      null,
      a,
      i,
      f,
      xm
    ), e[Ol] = t.current, Or(e), new kr(t);
  }, ou.hydrateRoot = function(e, t, n) {
    if (!d(e)) throw Error(r(299));
    var l = !1, a = "", i = Gd, f = Vd, o = Xd, v = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onUncaughtError !== void 0 && (i = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (o = n.onRecoverableError), n.formState !== void 0 && (v = n.formState)), t = Tm(
      e,
      1,
      !0,
      t,
      n ?? null,
      l,
      a,
      v,
      i,
      f,
      o,
      xm
    ), t.context = Am(null), n = t.current, l = zt(), l = Bc(l), a = xn(l), a.callback = null, qn(n, a, l), n = l, t.current.lanes = n, _a(t, n), Pt(t), e[Ol] = t.current, Or(e), new Pi(t);
  }, ou.version = "19.2.3", ou;
}
var Vm;
function G2() {
  if (Vm) return Wr.exports;
  Vm = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), Wr.exports = L2(), Wr.exports;
}
var V2 = G2();
const X2 = /* @__PURE__ */ Rh(V2);
var es = { exports: {} }, ts = {};
var Xm;
function Z2() {
  if (Xm) return ts;
  Xm = 1;
  var u = Ac();
  function c(p, h) {
    return p === h && (p !== 0 || 1 / p === 1 / h) || p !== p && h !== h;
  }
  var s = typeof Object.is == "function" ? Object.is : c, r = u.useSyncExternalStore, d = u.useRef, m = u.useEffect, g = u.useMemo, O = u.useDebugValue;
  return ts.useSyncExternalStoreWithSelector = function(p, h, q, S, C) {
    var G = d(null);
    if (G.current === null) {
      var j = { hasValue: !1, value: null };
      G.current = j;
    } else j = G.current;
    G = g(
      function() {
        function U(T) {
          if (!Y) {
            if (Y = !0, k = T, T = S(T), C !== void 0 && j.hasValue) {
              var A = j.value;
              if (C(A, T))
                return b = A;
            }
            return b = T;
          }
          if (A = b, s(k, T)) return A;
          var R = S(T);
          return C !== void 0 && C(A, R) ? (k = T, A) : (k = T, b = R);
        }
        var Y = !1, k, b, z = q === void 0 ? null : q;
        return [
          function() {
            return U(h());
          },
          z === null ? void 0 : function() {
            return U(z());
          }
        ];
      },
      [h, q, S, C]
    );
    var X = r(p, G[0], G[1]);
    return m(
      function() {
        j.hasValue = !0, j.value = X;
      },
      [X]
    ), O(X), X;
  }, ts;
}
var Zm;
function K2() {
  return Zm || (Zm = 1, es.exports = Z2()), es.exports;
}
var J2 = K2();
function Nh(u) {
  u();
}
function k2() {
  let u = null, c = null;
  return {
    clear() {
      u = null, c = null;
    },
    notify() {
      Nh(() => {
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
var Km = {
  notify() {
  },
  get: () => []
};
function F2(u, c) {
  let s, r = Km, d = 0, m = !1;
  function g(X) {
    q();
    const U = r.subscribe(X);
    let Y = !1;
    return () => {
      Y || (Y = !0, U(), S());
    };
  }
  function O() {
    r.notify();
  }
  function p() {
    j.onStateChange && j.onStateChange();
  }
  function h() {
    return m;
  }
  function q() {
    d++, s || (s = u.subscribe(p), r = k2());
  }
  function S() {
    d--, s && d === 0 && (s(), s = void 0, r.clear(), r = Km);
  }
  function C() {
    m || (m = !0, q());
  }
  function G() {
    m && (m = !1, S());
  }
  const j = {
    addNestedSub: g,
    notifyNestedSubs: O,
    handleChangeWrapper: p,
    isSubscribed: h,
    trySubscribe: C,
    tryUnsubscribe: G,
    getListeners: () => r
  };
  return j;
}
var W2 = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", $2 = /* @__PURE__ */ W2(), I2 = () => typeof navigator < "u" && navigator.product === "ReactNative", P2 = /* @__PURE__ */ I2(), e1 = () => $2 || P2 ? se.useLayoutEffect : se.useEffect, t1 = /* @__PURE__ */ e1();
function Jm(u, c) {
  return u === c ? u !== 0 || c !== 0 || 1 / u === 1 / c : u !== u && c !== c;
}
function Su(u, c) {
  if (Jm(u, c)) return !0;
  if (typeof u != "object" || u === null || typeof c != "object" || c === null)
    return !1;
  const s = Object.keys(u), r = Object.keys(c);
  if (s.length !== r.length) return !1;
  for (let d = 0; d < s.length; d++)
    if (!Object.prototype.hasOwnProperty.call(c, s[d]) || !Jm(u[s[d]], c[s[d]]))
      return !1;
  return !0;
}
var n1 = /* @__PURE__ */ Symbol.for("react-redux-context"), l1 = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function a1() {
  if (!se.createContext) return {};
  const u = l1[n1] ??= /* @__PURE__ */ new Map();
  let c = u.get(se.createContext);
  return c || (c = se.createContext(
    null
  ), u.set(se.createContext, c)), c;
}
var In = /* @__PURE__ */ a1();
function u1(u) {
  const { children: c, context: s, serverState: r, store: d } = u, m = se.useMemo(() => {
    const p = F2(d);
    return {
      store: d,
      subscription: p,
      getServerState: r ? () => r : void 0
    };
  }, [d, r]), g = se.useMemo(() => d.getState(), [d]);
  t1(() => {
    const { subscription: p } = m;
    return p.onStateChange = p.notifyNestedSubs, p.trySubscribe(), g !== d.getState() && p.notifyNestedSubs(), () => {
      p.tryUnsubscribe(), p.onStateChange = void 0;
    };
  }, [m, g]);
  const O = s || In;
  return /* @__PURE__ */ se.createElement(O.Provider, { value: m }, c);
}
var i1 = u1;
function As(u = In) {
  return function() {
    return se.useContext(u);
  };
}
var Uh = /* @__PURE__ */ As();
function jh(u = In) {
  const c = u === In ? Uh : (
    // @ts-ignore
    As(u)
  ), s = () => {
    const { store: r } = c();
    return r;
  };
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var xh = /* @__PURE__ */ jh();
function c1(u = In) {
  const c = u === In ? xh : jh(u), s = () => c().dispatch;
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var qh = /* @__PURE__ */ c1(), f1 = (u, c) => u === c;
function r1(u = In) {
  const c = u === In ? Uh : As(u), s = (r, d = {}) => {
    const { equalityFn: m = f1 } = typeof d == "function" ? { equalityFn: d } : d, g = c(), { store: O, subscription: p, getServerState: h } = g;
    se.useRef(!0);
    const q = se.useCallback(
      {
        [r.name](C) {
          return r(C);
        }
      }[r.name],
      [r]
    ), S = J2.useSyncExternalStoreWithSelector(
      p.addNestedSub,
      O.getState,
      h || O.getState,
      q,
      m
    );
    return se.useDebugValue(S), S;
  };
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var Qh = /* @__PURE__ */ r1(), s1 = Nh;
function it(u) {
  return `Minified Redux error #${u}; visit https://redux.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
}
var o1 = typeof Symbol == "function" && Symbol.observable || "@@observable", km = o1, ns = () => Math.random().toString(36).substring(7).split("").join("."), d1 = {
  INIT: `@@redux/INIT${/* @__PURE__ */ ns()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ ns()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ns()}`
}, dc = d1;
function Pn(u) {
  if (typeof u != "object" || u === null)
    return !1;
  let c = u;
  for (; Object.getPrototypeOf(c) !== null; )
    c = Object.getPrototypeOf(c);
  return Object.getPrototypeOf(u) === c || Object.getPrototypeOf(u) === null;
}
function Bh(u, c, s) {
  if (typeof u != "function")
    throw new Error(it(2));
  if (typeof c == "function" && typeof s == "function" || typeof s == "function" && typeof arguments[3] == "function")
    throw new Error(it(0));
  if (typeof c == "function" && typeof s > "u" && (s = c, c = void 0), typeof s < "u") {
    if (typeof s != "function")
      throw new Error(it(1));
    return s(Bh)(u, c);
  }
  let r = u, d = c, m = /* @__PURE__ */ new Map(), g = m, O = 0, p = !1;
  function h() {
    g === m && (g = /* @__PURE__ */ new Map(), m.forEach((U, Y) => {
      g.set(Y, U);
    }));
  }
  function q() {
    if (p)
      throw new Error(it(3));
    return d;
  }
  function S(U) {
    if (typeof U != "function")
      throw new Error(it(4));
    if (p)
      throw new Error(it(5));
    let Y = !0;
    h();
    const k = O++;
    return g.set(k, U), function() {
      if (Y) {
        if (p)
          throw new Error(it(6));
        Y = !1, h(), g.delete(k), m = null;
      }
    };
  }
  function C(U) {
    if (!Pn(U))
      throw new Error(it(7));
    if (typeof U.type > "u")
      throw new Error(it(8));
    if (typeof U.type != "string")
      throw new Error(it(17));
    if (p)
      throw new Error(it(9));
    try {
      p = !0, d = r(d, U);
    } finally {
      p = !1;
    }
    return (m = g).forEach((k) => {
      k();
    }), U;
  }
  function G(U) {
    if (typeof U != "function")
      throw new Error(it(10));
    r = U, C({
      type: dc.REPLACE
    });
  }
  function j() {
    const U = S;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(Y) {
        if (typeof Y != "object" || Y === null)
          throw new Error(it(11));
        function k() {
          const z = Y;
          z.next && z.next(q());
        }
        return k(), {
          unsubscribe: U(k)
        };
      },
      [km]() {
        return this;
      }
    };
  }
  return C({
    type: dc.INIT
  }), {
    dispatch: C,
    subscribe: S,
    getState: q,
    replaceReducer: G,
    [km]: j
  };
}
function m1(u) {
  Object.keys(u).forEach((c) => {
    const s = u[c];
    if (typeof s(void 0, {
      type: dc.INIT
    }) > "u")
      throw new Error(it(12));
    if (typeof s(void 0, {
      type: dc.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(it(13));
  });
}
function Hh(u) {
  const c = Object.keys(u), s = {};
  for (let m = 0; m < c.length; m++) {
    const g = c[m];
    typeof u[g] == "function" && (s[g] = u[g]);
  }
  const r = Object.keys(s);
  let d;
  try {
    m1(s);
  } catch (m) {
    d = m;
  }
  return function(g = {}, O) {
    if (d)
      throw d;
    let p = !1;
    const h = {};
    for (let q = 0; q < r.length; q++) {
      const S = r[q], C = s[S], G = g[S], j = C(G, O);
      if (typeof j > "u")
        throw O && O.type, new Error(it(14));
      h[S] = j, p = p || j !== G;
    }
    return p = p || r.length !== Object.keys(g).length, p ? h : g;
  };
}
function mc(...u) {
  return u.length === 0 ? (c) => c : u.length === 1 ? u[0] : u.reduce((c, s) => (...r) => c(s(...r)));
}
function h1(...u) {
  return (c) => (s, r) => {
    const d = c(s, r);
    let m = () => {
      throw new Error(it(15));
    };
    const g = {
      getState: d.getState,
      dispatch: (p, ...h) => m(p, ...h)
    }, O = u.map((p) => p(g));
    return m = mc(...O)(d.dispatch), {
      ...d,
      dispatch: m
    };
  };
}
function wh(u) {
  return Pn(u) && "type" in u && typeof u.type == "string";
}
var Ms = /* @__PURE__ */ Symbol.for("immer-nothing"), bu = /* @__PURE__ */ Symbol.for("immer-draftable"), Ie = /* @__PURE__ */ Symbol.for("immer-state");
function ct(u, ...c) {
  throw new Error(
    `[Immer] minified error nr: ${u}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Ot = Object, Al = Ot.getPrototypeOf, Tu = "constructor", Ru = "prototype", os = "configurable", hc = "enumerable", rc = "writable", Au = "value", Rt = (u) => !!u && !!u[Ie];
function Nt(u) {
  return u ? Yh(u) || Uu(u) || !!u[bu] || !!u[Tu]?.[bu] || ju(u) || xu(u) : !1;
}
var y1 = Ot[Ru][Tu].toString(), Fm = /* @__PURE__ */ new WeakMap();
function Yh(u) {
  if (!u || !ha(u))
    return !1;
  const c = Al(u);
  if (c === null || c === Ot[Ru])
    return !0;
  const s = Ot.hasOwnProperty.call(c, Tu) && c[Tu];
  if (s === Object)
    return !0;
  if (!Tl(s))
    return !1;
  let r = Fm.get(s);
  return r === void 0 && (r = Function.toString.call(s), Fm.set(s, r)), r === y1;
}
function v1(u) {
  return Rt(u) || ct(15, u), u[Ie].base_;
}
function Nu(u, c, s = !0) {
  Ml(u) === 0 ? (s ? Reflect.ownKeys(u) : Ot.keys(u)).forEach((d) => {
    c(d, u[d], u);
  }) : u.forEach((r, d) => c(d, r, u));
}
function Ml(u) {
  const c = u[Ie];
  return c ? c.type_ : Uu(u) ? 1 : ju(u) ? 2 : xu(u) ? 3 : 0;
}
var _u = (u, c, s = Ml(u)) => s === 2 ? u.has(c) : Ot[Ru].hasOwnProperty.call(u, c), _n = (u, c, s = Ml(u)) => (
  // @ts-ignore
  s === 2 ? u.get(c) : u[c]
), yc = (u, c, s, r = Ml(u)) => {
  r === 2 ? u.set(c, s) : r === 3 ? u.add(s) : u[c] = s;
};
function g1(u, c) {
  return u === c ? u !== 0 || 1 / u === 1 / c : u !== u && c !== c;
}
var Uu = Array.isArray, ju = (u) => u instanceof Map, xu = (u) => u instanceof Set, ha = (u) => typeof u == "object", Tl = (u) => typeof u == "function", ls = (u) => typeof u == "boolean";
function p1(u) {
  const c = +u;
  return Number.isInteger(c) && String(c) === u;
}
var S1 = (u) => ha(u) ? u?.[Ie] : null, En = (u) => u.copy_ || u.base_, Cs = (u) => u.modified_ ? u.copy_ : u.base_;
function ds(u, c) {
  if (ju(u))
    return new Map(u);
  if (xu(u))
    return new Set(u);
  if (Uu(u))
    return Array[Ru].slice.call(u);
  const s = Yh(u);
  if (c === !0 || c === "class_only" && !s) {
    const r = Ot.getOwnPropertyDescriptors(u);
    delete r[Ie];
    let d = Reflect.ownKeys(r);
    for (let m = 0; m < d.length; m++) {
      const g = d[m], O = r[g];
      O[rc] === !1 && (O[rc] = !0, O[os] = !0), (O.get || O.set) && (r[g] = {
        [os]: !0,
        [rc]: !0,
        // could live with !!desc.set as well here...
        [hc]: O[hc],
        [Au]: u[g]
      });
    }
    return Ot.create(Al(u), r);
  } else {
    const r = Al(u);
    if (r !== null && s)
      return { ...u };
    const d = Ot.create(r);
    return Ot.assign(d, u);
  }
}
function Ds(u, c = !1) {
  return Mc(u) || Rt(u) || !Nt(u) || (Ml(u) > 1 && Ot.defineProperties(u, {
    set: nc,
    add: nc,
    clear: nc,
    delete: nc
  }), Ot.freeze(u), c && Nu(
    u,
    (s, r) => {
      Ds(r, !0);
    },
    !1
  )), u;
}
function b1() {
  ct(2);
}
var nc = {
  [Au]: b1
};
function Mc(u) {
  return u === null || !ha(u) ? !0 : Ot.isFrozen(u);
}
var vc = "MapSet", gc = "Patches", Wm = "ArrayMethods", pc = {};
function Cl(u) {
  const c = pc[u];
  return c || ct(0, u), c;
}
var $m = (u) => !!pc[u];
function _1(u, c) {
  pc[u] || (pc[u] = c);
}
var Mu, Lh = () => Mu, E1 = (u, c) => ({
  drafts_: [],
  parent_: u,
  immer_: c,
  // Whenever the modified draft contains a draft from another scope, we
  // need to prevent auto-freezing so the unowned draft can be finalized.
  canAutoFreeze_: !0,
  unfinalizedDrafts_: 0,
  handledSet_: /* @__PURE__ */ new Set(),
  processedForPatches_: /* @__PURE__ */ new Set(),
  mapSetPlugin_: $m(vc) ? Cl(vc) : void 0,
  arrayMethodsPlugin_: $m(Wm) ? Cl(Wm) : void 0
});
function Im(u, c) {
  c && (u.patchPlugin_ = Cl(gc), u.patches_ = [], u.inversePatches_ = [], u.patchListener_ = c);
}
function ms(u) {
  hs(u), u.drafts_.forEach(T1), u.drafts_ = null;
}
function hs(u) {
  u === Mu && (Mu = u.parent_);
}
var Pm = (u) => Mu = E1(Mu, u);
function T1(u) {
  const c = u[Ie];
  c.type_ === 0 || c.type_ === 1 ? c.revoke_() : c.revoked_ = !0;
}
function eh(u, c) {
  c.unfinalizedDrafts_ = c.drafts_.length;
  const s = c.drafts_[0];
  if (u !== void 0 && u !== s) {
    s[Ie].modified_ && (ms(c), ct(4)), Nt(u) && (u = th(c, u));
    const { patchPlugin_: d } = c;
    d && d.generateReplacementPatches_(
      s[Ie].base_,
      u,
      c
    );
  } else
    u = th(c, s);
  return A1(c, u, !0), ms(c), c.patches_ && c.patchListener_(c.patches_, c.inversePatches_), u !== Ms ? u : void 0;
}
function th(u, c) {
  if (Mc(c))
    return c;
  const s = c[Ie];
  if (!s)
    return Sc(c, u.handledSet_, u);
  if (!Cc(s, u))
    return c;
  if (!s.modified_)
    return s.base_;
  if (!s.finalized_) {
    const { callbacks_: r } = s;
    if (r)
      for (; r.length > 0; )
        r.pop()(u);
    Xh(s, u);
  }
  return s.copy_;
}
function A1(u, c, s = !1) {
  !u.parent_ && u.immer_.autoFreeze_ && u.canAutoFreeze_ && Ds(c, s);
}
function Gh(u) {
  u.finalized_ = !0, u.scope_.unfinalizedDrafts_--;
}
var Cc = (u, c) => u.scope_ === c, M1 = [];
function Vh(u, c, s, r) {
  const d = En(u), m = u.type_;
  if (r !== void 0 && _n(d, r, m) === c) {
    yc(d, r, s, m);
    return;
  }
  if (!u.draftLocations_) {
    const O = u.draftLocations_ = /* @__PURE__ */ new Map();
    Nu(d, (p, h) => {
      if (Rt(h)) {
        const q = O.get(h) || [];
        q.push(p), O.set(h, q);
      }
    });
  }
  const g = u.draftLocations_.get(c) ?? M1;
  for (const O of g)
    yc(d, O, s, m);
}
function C1(u, c, s) {
  u.callbacks_.push(function(d) {
    const m = c;
    if (!m || !Cc(m, d))
      return;
    d.mapSetPlugin_?.fixSetContents(m);
    const g = Cs(m);
    Vh(u, m.draft_ ?? m, g, s), Xh(m, d);
  });
}
function Xh(u, c) {
  if (u.modified_ && !u.finalized_ && (u.type_ === 3 || u.type_ === 1 && u.allIndicesReassigned_ || (u.assigned_?.size ?? 0) > 0)) {
    const { patchPlugin_: r } = c;
    if (r) {
      const d = r.getPath(u);
      d && r.generatePatches_(u, d, c);
    }
    Gh(u);
  }
}
function D1(u, c, s) {
  const { scope_: r } = u;
  if (Rt(s)) {
    const d = s[Ie];
    Cc(d, r) && d.callbacks_.push(function() {
      sc(u);
      const g = Cs(d);
      Vh(u, s, g, c);
    });
  } else Nt(s) && u.callbacks_.push(function() {
    const m = En(u);
    u.type_ === 3 ? m.has(s) && Sc(s, r.handledSet_, r) : _n(m, c, u.type_) === s && r.drafts_.length > 1 && (u.assigned_.get(c) ?? !1) === !0 && u.copy_ && Sc(
      _n(u.copy_, c, u.type_),
      r.handledSet_,
      r
    );
  });
}
function Sc(u, c, s) {
  return !s.immer_.autoFreeze_ && s.unfinalizedDrafts_ < 1 || Rt(u) || c.has(u) || !Nt(u) || Mc(u) || (c.add(u), Nu(u, (r, d) => {
    if (Rt(d)) {
      const m = d[Ie];
      if (Cc(m, s)) {
        const g = Cs(m);
        yc(u, r, g, u.type_), Gh(m);
      }
    } else Nt(d) && Sc(d, c, s);
  })), u;
}
function z1(u, c) {
  const s = Uu(u), r = {
    type_: s ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: c ? c.scope_ : Lh(),
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
  let d = r, m = bc;
  s && (d = [r], m = Cu);
  const { revoke: g, proxy: O } = Proxy.revocable(d, m);
  return r.draft_ = O, r.revoke_ = g, [O, r];
}
var bc = {
  get(u, c) {
    if (c === Ie)
      return u;
    let s = u.scope_.arrayMethodsPlugin_;
    const r = u.type_ === 1 && typeof c == "string";
    if (r && s?.isArrayOperationMethod(c))
      return s.createMethodInterceptor(u, c);
    const d = En(u);
    if (!_u(d, c, u.type_))
      return O1(u, d, c);
    const m = d[c];
    if (u.finalized_ || !Nt(m) || r && u.operationMethod && s?.isMutatingArrayMethod(
      u.operationMethod
    ) && p1(c))
      return m;
    if (m === as(u.base_, c)) {
      sc(u);
      const g = u.type_ === 1 ? +c : c, O = vs(u.scope_, m, u, g);
      return u.copy_[g] = O;
    }
    return m;
  },
  has(u, c) {
    return c in En(u);
  },
  ownKeys(u) {
    return Reflect.ownKeys(En(u));
  },
  set(u, c, s) {
    const r = Zh(En(u), c);
    if (r?.set)
      return r.set.call(u.draft_, s), !0;
    if (!u.modified_) {
      const d = as(En(u), c), m = d?.[Ie];
      if (m && m.base_ === s)
        return u.copy_[c] = s, u.assigned_.set(c, !1), !0;
      if (g1(s, d) && (s !== void 0 || _u(u.base_, c, u.type_)))
        return !0;
      sc(u), ys(u);
    }
    return u.copy_[c] === s && // special case: handle new props with value 'undefined'
    (s !== void 0 || c in u.copy_) || // special case: NaN
    Number.isNaN(s) && Number.isNaN(u.copy_[c]) || (u.copy_[c] = s, u.assigned_.set(c, !0), D1(u, c, s)), !0;
  },
  deleteProperty(u, c) {
    return sc(u), as(u.base_, c) !== void 0 || c in u.base_ ? (u.assigned_.set(c, !1), ys(u)) : u.assigned_.delete(c), u.copy_ && delete u.copy_[c], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(u, c) {
    const s = En(u), r = Reflect.getOwnPropertyDescriptor(s, c);
    return r && {
      [rc]: !0,
      [os]: u.type_ !== 1 || c !== "length",
      [hc]: r[hc],
      [Au]: s[c]
    };
  },
  defineProperty() {
    ct(11);
  },
  getPrototypeOf(u) {
    return Al(u.base_);
  },
  setPrototypeOf() {
    ct(12);
  }
}, Cu = {};
for (let u in bc) {
  let c = bc[u];
  Cu[u] = function() {
    const s = arguments;
    return s[0] = s[0][0], c.apply(this, s);
  };
}
Cu.deleteProperty = function(u, c) {
  return Cu.set.call(this, u, c, void 0);
};
Cu.set = function(u, c, s) {
  return bc.set.call(this, u[0], c, s, u[0]);
};
function as(u, c) {
  const s = u[Ie];
  return (s ? En(s) : u)[c];
}
function O1(u, c, s) {
  const r = Zh(c, s);
  return r ? Au in r ? r[Au] : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    r.get?.call(u.draft_)
  ) : void 0;
}
function Zh(u, c) {
  if (!(c in u))
    return;
  let s = Al(u);
  for (; s; ) {
    const r = Object.getOwnPropertyDescriptor(s, c);
    if (r)
      return r;
    s = Al(s);
  }
}
function ys(u) {
  u.modified_ || (u.modified_ = !0, u.parent_ && ys(u.parent_));
}
function sc(u) {
  u.copy_ || (u.assigned_ = /* @__PURE__ */ new Map(), u.copy_ = ds(
    u.base_,
    u.scope_.immer_.useStrictShallowCopy_
  ));
}
var R1 = class {
  constructor(u) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (c, s, r) => {
      if (Tl(c) && !Tl(s)) {
        const m = s;
        s = c;
        const g = this;
        return function(p = m, ...h) {
          return g.produce(p, (q) => s.call(this, q, ...h));
        };
      }
      Tl(s) || ct(6), r !== void 0 && !Tl(r) && ct(7);
      let d;
      if (Nt(c)) {
        const m = Pm(this), g = vs(m, c, void 0);
        let O = !0;
        try {
          d = s(g), O = !1;
        } finally {
          O ? ms(m) : hs(m);
        }
        return Im(m, r), eh(d, m);
      } else if (!c || !ha(c)) {
        if (d = s(c), d === void 0 && (d = c), d === Ms && (d = void 0), this.autoFreeze_ && Ds(d, !0), r) {
          const m = [], g = [];
          Cl(gc).generateReplacementPatches_(c, d, {
            patches_: m,
            inversePatches_: g
          }), r(m, g);
        }
        return d;
      } else
        ct(1, c);
    }, this.produceWithPatches = (c, s) => {
      if (Tl(c))
        return (g, ...O) => this.produceWithPatches(g, (p) => c(p, ...O));
      let r, d;
      return [this.produce(c, s, (g, O) => {
        r = g, d = O;
      }), r, d];
    }, ls(u?.autoFreeze) && this.setAutoFreeze(u.autoFreeze), ls(u?.useStrictShallowCopy) && this.setUseStrictShallowCopy(u.useStrictShallowCopy), ls(u?.useStrictIteration) && this.setUseStrictIteration(u.useStrictIteration);
  }
  createDraft(u) {
    Nt(u) || ct(8), Rt(u) && (u = Kh(u));
    const c = Pm(this), s = vs(c, u, void 0);
    return s[Ie].isManual_ = !0, hs(c), s;
  }
  finishDraft(u, c) {
    const s = u && u[Ie];
    (!s || !s.isManual_) && ct(9);
    const { scope_: r } = s;
    return Im(r, c), eh(void 0, r);
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
    const r = Cl(gc).applyPatches_;
    return Rt(u) ? r(u, c) : this.produce(
      u,
      (d) => r(d, c)
    );
  }
};
function vs(u, c, s, r) {
  const [d, m] = ju(c) ? Cl(vc).proxyMap_(c, s) : xu(c) ? Cl(vc).proxySet_(c, s) : z1(c, s);
  return (s?.scope_ ?? Lh()).drafts_.push(d), m.callbacks_ = s?.callbacks_ ?? [], m.key_ = r, s && r !== void 0 ? C1(s, m, r) : m.callbacks_.push(function(p) {
    p.mapSetPlugin_?.fixSetContents(m);
    const { patchPlugin_: h } = p;
    m.modified_ && h && h.generatePatches_(m, [], p);
  }), d;
}
function Kh(u) {
  return Rt(u) || ct(10, u), Jh(u);
}
function Jh(u) {
  if (!Nt(u) || Mc(u))
    return u;
  const c = u[Ie];
  let s, r = !0;
  if (c) {
    if (!c.modified_)
      return c.base_;
    c.finalized_ = !0, s = ds(u, c.scope_.immer_.useStrictShallowCopy_), r = c.scope_.immer_.shouldUseStrictIteration();
  } else
    s = ds(u, !0);
  return Nu(
    s,
    (d, m) => {
      yc(s, d, Jh(m));
    },
    r
  ), c && (c.finalized_ = !1), s;
}
function N1() {
  function c(j, X = []) {
    if (j.key_ !== void 0) {
      const U = j.parent_.copy_ ?? j.parent_.base_, Y = S1(_n(U, j.key_)), k = _n(U, j.key_);
      if (k === void 0 || k !== j.draft_ && k !== j.base_ && k !== j.copy_ || Y != null && Y.base_ !== j.base_)
        return null;
      const b = j.parent_.type_ === 3;
      let z;
      if (b) {
        const T = j.parent_;
        z = Array.from(T.drafts_.keys()).indexOf(j.key_);
      } else
        z = j.key_;
      if (!(b && U.size > z || _u(U, z)))
        return null;
      X.push(z);
    }
    if (j.parent_)
      return c(j.parent_, X);
    X.reverse();
    try {
      s(j.copy_, X);
    } catch {
      return null;
    }
    return X;
  }
  function s(j, X) {
    let U = j;
    for (let Y = 0; Y < X.length - 1; Y++) {
      const k = X[Y];
      if (U = _n(U, k), !ha(U) || U === null)
        throw new Error(`Cannot resolve path at '${X.join("/")}'`);
    }
    return U;
  }
  const r = "replace", d = "add", m = "remove";
  function g(j, X, U) {
    if (j.scope_.processedForPatches_.has(j))
      return;
    j.scope_.processedForPatches_.add(j);
    const { patches_: Y, inversePatches_: k } = U;
    switch (j.type_) {
      case 0:
      case 2:
        return p(
          j,
          X,
          Y,
          k
        );
      case 1:
        return O(
          j,
          X,
          Y,
          k
        );
      case 3:
        return h(
          j,
          X,
          Y,
          k
        );
    }
  }
  function O(j, X, U, Y) {
    let { base_: k, assigned_: b } = j, z = j.copy_;
    z.length < k.length && ([k, z] = [z, k], [U, Y] = [Y, U]);
    const T = j.allIndicesReassigned_ === !0;
    for (let A = 0; A < k.length; A++) {
      const R = z[A], V = k[A];
      if ((T || b?.get(A.toString())) && R !== V) {
        const x = R?.[Ie];
        if (x && x.modified_)
          continue;
        const _ = X.concat([A]);
        U.push({
          op: r,
          path: _,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: G(R)
        }), Y.push({
          op: r,
          path: _,
          value: G(V)
        });
      }
    }
    for (let A = k.length; A < z.length; A++) {
      const R = X.concat([A]);
      U.push({
        op: d,
        path: R,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: G(z[A])
      });
    }
    for (let A = z.length - 1; k.length <= A; --A) {
      const R = X.concat([A]);
      Y.push({
        op: m,
        path: R
      });
    }
  }
  function p(j, X, U, Y) {
    const { base_: k, copy_: b, type_: z } = j;
    Nu(j.assigned_, (T, A) => {
      const R = _n(k, T, z), V = _n(b, T, z), L = A ? _u(k, T) ? r : d : m;
      if (R === V && L === r)
        return;
      const x = X.concat(T);
      U.push(
        L === m ? { op: L, path: x } : { op: L, path: x, value: G(V) }
      ), Y.push(
        L === d ? { op: m, path: x } : L === m ? { op: d, path: x, value: G(R) } : { op: r, path: x, value: G(R) }
      );
    });
  }
  function h(j, X, U, Y) {
    let { base_: k, copy_: b } = j, z = 0;
    k.forEach((T) => {
      if (!b.has(T)) {
        const A = X.concat([z]);
        U.push({
          op: m,
          path: A,
          value: T
        }), Y.unshift({
          op: d,
          path: A,
          value: T
        });
      }
      z++;
    }), z = 0, b.forEach((T) => {
      if (!k.has(T)) {
        const A = X.concat([z]);
        U.push({
          op: d,
          path: A,
          value: T
        }), Y.unshift({
          op: m,
          path: A,
          value: T
        });
      }
      z++;
    });
  }
  function q(j, X, U) {
    const { patches_: Y, inversePatches_: k } = U;
    Y.push({
      op: r,
      path: [],
      value: X === Ms ? void 0 : X
    }), k.push({
      op: r,
      path: [],
      value: j
    });
  }
  function S(j, X) {
    return X.forEach((U) => {
      const { path: Y, op: k } = U;
      let b = j;
      for (let R = 0; R < Y.length - 1; R++) {
        const V = Ml(b);
        let L = Y[R];
        typeof L != "string" && typeof L != "number" && (L = "" + L), (V === 0 || V === 1) && (L === "__proto__" || L === Tu) && ct(19), Tl(b) && L === Ru && ct(19), b = _n(b, L), ha(b) || ct(18, Y.join("/"));
      }
      const z = Ml(b), T = C(U.value), A = Y[Y.length - 1];
      switch (k) {
        case r:
          switch (z) {
            case 2:
              return b.set(A, T);
            case 3:
              ct(16);
            default:
              return b[A] = T;
          }
        case d:
          switch (z) {
            case 1:
              return A === "-" ? b.push(T) : b.splice(A, 0, T);
            case 2:
              return b.set(A, T);
            case 3:
              return b.add(T);
            default:
              return b[A] = T;
          }
        case m:
          switch (z) {
            case 1:
              return b.splice(A, 1);
            case 2:
              return b.delete(A);
            case 3:
              return b.delete(U.value);
            default:
              return delete b[A];
          }
        default:
          ct(17, k);
      }
    }), j;
  }
  function C(j) {
    if (!Nt(j))
      return j;
    if (Uu(j))
      return j.map(C);
    if (ju(j))
      return new Map(
        Array.from(j.entries()).map(([U, Y]) => [U, C(Y)])
      );
    if (xu(j))
      return new Set(Array.from(j).map(C));
    const X = Object.create(Al(j));
    for (const U in j)
      X[U] = C(j[U]);
    return _u(j, bu) && (X[bu] = j[bu]), X;
  }
  function G(j) {
    return Rt(j) ? C(j) : j;
  }
  _1(gc, {
    applyPatches_: S,
    generatePatches_: g,
    generateReplacementPatches_: q,
    getPath: c
  });
}
var Du = new R1(), qu = Du.produce, kh = /* @__PURE__ */ Du.produceWithPatches.bind(
  Du
), nh = /* @__PURE__ */ Du.applyPatches.bind(Du);
function U1(u, c = `expected a function, instead received ${typeof u}`) {
  if (typeof u != "function")
    throw new TypeError(c);
}
function j1(u, c = `expected an object, instead received ${typeof u}`) {
  if (typeof u != "object")
    throw new TypeError(c);
}
function x1(u, c = "expected all items to be functions, instead received the following types: ") {
  if (!u.every((s) => typeof s == "function")) {
    const s = u.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${c}[${s}]`);
  }
}
var lh = (u) => Array.isArray(u) ? u : [u];
function q1(u) {
  const c = Array.isArray(u[0]) ? u[0] : u;
  return x1(
    c,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), c;
}
function Q1(u, c) {
  const s = [], { length: r } = u;
  for (let d = 0; d < r; d++)
    s.push(u[d].apply(null, c));
  return s;
}
var B1 = class {
  constructor(u) {
    this.value = u;
  }
  deref() {
    return this.value;
  }
}, H1 = typeof WeakRef < "u" ? WeakRef : B1, w1 = 0, ah = 1;
function lc() {
  return {
    s: w1,
    v: void 0,
    o: null,
    p: null
  };
}
function _c(u, c = {}) {
  let s = lc();
  const { resultEqualityCheck: r } = c;
  let d, m = 0;
  function g() {
    let O = s;
    const { length: p } = arguments;
    for (let S = 0, C = p; S < C; S++) {
      const G = arguments[S];
      if (typeof G == "function" || typeof G == "object" && G !== null) {
        let j = O.o;
        j === null && (O.o = j = /* @__PURE__ */ new WeakMap());
        const X = j.get(G);
        X === void 0 ? (O = lc(), j.set(G, O)) : O = X;
      } else {
        let j = O.p;
        j === null && (O.p = j = /* @__PURE__ */ new Map());
        const X = j.get(G);
        X === void 0 ? (O = lc(), j.set(G, O)) : O = X;
      }
    }
    const h = O;
    let q;
    if (O.s === ah)
      q = O.v;
    else if (q = u.apply(null, arguments), m++, r) {
      const S = d?.deref?.() ?? d;
      S != null && r(S, q) && (q = S, m !== 0 && m--), d = typeof q == "object" && q !== null || typeof q == "function" ? new H1(q) : q;
    }
    return h.s = ah, h.v = q, q;
  }
  return g.clearCache = () => {
    s = lc(), g.resetResultsCount();
  }, g.resultsCount = () => m, g.resetResultsCount = () => {
    m = 0;
  }, g;
}
function Y1(u, ...c) {
  const s = typeof u == "function" ? {
    memoize: u,
    memoizeOptions: c
  } : u, r = (...d) => {
    let m = 0, g = 0, O, p = {}, h = d.pop();
    typeof h == "object" && (p = h, h = d.pop()), U1(
      h,
      `createSelector expects an output function after the inputs, but received: [${typeof h}]`
    );
    const q = {
      ...s,
      ...p
    }, {
      memoize: S,
      memoizeOptions: C = [],
      argsMemoize: G = _c,
      argsMemoizeOptions: j = []
    } = q, X = lh(C), U = lh(j), Y = q1(d), k = S(function() {
      return m++, h.apply(
        null,
        arguments
      );
    }, ...X), b = G(function() {
      g++;
      const T = Q1(
        Y,
        arguments
      );
      return O = k.apply(null, T), O;
    }, ...U);
    return Object.assign(b, {
      resultFunc: h,
      memoizedResultFunc: k,
      dependencies: Y,
      dependencyRecomputations: () => g,
      resetDependencyRecomputations: () => {
        g = 0;
      },
      lastResult: () => O,
      recomputations: () => m,
      resetRecomputations: () => {
        m = 0;
      },
      memoize: S,
      argsMemoize: G
    });
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var zs = /* @__PURE__ */ Y1(_c), L1 = Object.assign(
  (u, c = zs) => {
    j1(
      u,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof u}`
    );
    const s = Object.keys(u), r = s.map(
      (m) => u[m]
    );
    return c(
      r,
      (...m) => m.reduce((g, O, p) => (g[s[p]] = O, g), {})
    );
  },
  { withTypes: () => L1 }
);
function Fh(u) {
  return ({ dispatch: s, getState: r }) => (d) => (m) => typeof m == "function" ? m(s, r, u) : d(m);
}
var G1 = Fh(), V1 = Fh, X1 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? mc : mc.apply(null, arguments);
}, Z1 = (u) => u && typeof u.match == "function";
function kt(u, c) {
  function s(...r) {
    if (c) {
      let d = c(...r);
      if (!d)
        throw new Error(Vt(0));
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
  return s.toString = () => `${u}`, s.type = u, s.match = (r) => wh(r) && r.type === u, s;
}
var Wh = class vu extends Array {
  constructor(...c) {
    super(...c), Object.setPrototypeOf(this, vu.prototype);
  }
  static get [Symbol.species]() {
    return vu;
  }
  concat(...c) {
    return super.concat.apply(this, c);
  }
  prepend(...c) {
    return c.length === 1 && Array.isArray(c[0]) ? new vu(...c[0].concat(this)) : new vu(...c.concat(this));
  }
};
function uh(u) {
  return Nt(u) ? qu(u, () => {
  }) : u;
}
function ac(u, c, s) {
  return u.has(c) ? u.get(c) : u.set(c, s(c)).get(c);
}
function K1(u) {
  return typeof u == "boolean";
}
var J1 = () => function(c) {
  const {
    thunk: s = !0,
    immutableCheck: r = !0,
    serializableCheck: d = !0,
    actionCreatorCheck: m = !0
  } = c ?? {};
  let g = new Wh();
  return s && (K1(s) ? g.push(G1) : g.push(V1(s.extraArgument))), g;
}, Dc = "RTK_autoBatch", du = () => (u) => ({
  payload: u,
  meta: {
    [Dc]: !0
  }
}), ih = (u) => (c) => {
  setTimeout(c, u);
}, k1 = (u = {
  type: "raf"
}) => (c) => (...s) => {
  const r = c(...s);
  let d = !0, m = !1, g = !1;
  const O = /* @__PURE__ */ new Set(), p = u.type === "tick" ? queueMicrotask : u.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : ih(10)
  ) : u.type === "callback" ? u.queueNotification : ih(u.timeout), h = () => {
    g = !1, m && (m = !1, O.forEach((q) => q()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(q) {
      const S = () => d && q(), C = r.subscribe(S);
      return O.add(q), () => {
        C(), O.delete(q);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(q) {
      try {
        return d = !q?.meta?.[Dc], m = !d, m && (g || (g = !0, p(h))), r.dispatch(q);
      } finally {
        d = !0;
      }
    }
  });
}, F1 = (u) => function(s) {
  const {
    autoBatch: r = !0
  } = s ?? {};
  let d = new Wh(u);
  return r && d.push(k1(typeof r == "object" ? r : void 0)), d;
};
function W1(u) {
  const c = J1(), {
    reducer: s = void 0,
    middleware: r,
    devTools: d = !0,
    preloadedState: m = void 0,
    enhancers: g = void 0
  } = u || {};
  let O;
  if (typeof s == "function")
    O = s;
  else if (Pn(s))
    O = Hh(s);
  else
    throw new Error(Vt(1));
  let p;
  typeof r == "function" ? p = r(c) : p = c();
  let h = mc;
  d && (h = X1({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !1,
    ...typeof d == "object" && d
  }));
  const q = h1(...p), S = F1(q);
  let C = typeof g == "function" ? g(S) : S();
  const G = h(...C);
  return Bh(O, m, G);
}
function $h(u) {
  const c = {}, s = [];
  let r;
  const d = {
    addCase(m, g) {
      const O = typeof m == "string" ? m : m.type;
      if (!O)
        throw new Error(Vt(28));
      if (O in c)
        throw new Error(Vt(29));
      return c[O] = g, d;
    },
    addAsyncThunk(m, g) {
      return g.pending && (c[m.pending.type] = g.pending), g.rejected && (c[m.rejected.type] = g.rejected), g.fulfilled && (c[m.fulfilled.type] = g.fulfilled), g.settled && s.push({
        matcher: m.settled,
        reducer: g.settled
      }), d;
    },
    addMatcher(m, g) {
      return s.push({
        matcher: m,
        reducer: g
      }), d;
    },
    addDefaultCase(m) {
      return r = m, d;
    }
  };
  return u(d), [c, s, r];
}
function $1(u) {
  return typeof u == "function";
}
function I1(u, c) {
  let [s, r, d] = $h(c), m;
  if ($1(u))
    m = () => uh(u());
  else {
    const O = uh(u);
    m = () => O;
  }
  function g(O = m(), p) {
    let h = [s[p.type], ...r.filter(({
      matcher: q
    }) => q(p)).map(({
      reducer: q
    }) => q)];
    return h.filter((q) => !!q).length === 0 && (h = [d]), h.reduce((q, S) => {
      if (S)
        if (Rt(q)) {
          const G = S(q, p);
          return G === void 0 ? q : G;
        } else {
          if (Nt(q))
            return qu(q, (C) => S(C, p));
          {
            const C = S(q, p);
            if (C === void 0) {
              if (q === null)
                return q;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return C;
          }
        }
      return q;
    }, O);
  }
  return g.getInitialState = m, g;
}
var Ih = (u, c) => Z1(u) ? u.match(c) : u(c);
function Tn(...u) {
  return (c) => u.some((s) => Ih(s, c));
}
function Eu(...u) {
  return (c) => u.every((s) => Ih(s, c));
}
function zc(u, c) {
  if (!u || !u.meta) return !1;
  const s = typeof u.meta.requestId == "string", r = c.indexOf(u.meta.requestStatus) > -1;
  return s && r;
}
function Qu(u) {
  return typeof u[0] == "function" && "pending" in u[0] && "fulfilled" in u[0] && "rejected" in u[0];
}
function Os(...u) {
  return u.length === 0 ? (c) => zc(c, ["pending"]) : Qu(u) ? Tn(...u.map((c) => c.pending)) : Os()(u[0]);
}
function ya(...u) {
  return u.length === 0 ? (c) => zc(c, ["rejected"]) : Qu(u) ? Tn(...u.map((c) => c.rejected)) : ya()(u[0]);
}
function Oc(...u) {
  const c = (s) => s && s.meta && s.meta.rejectedWithValue;
  return u.length === 0 ? Eu(ya(...u), c) : Qu(u) ? Eu(ya(...u), c) : Oc()(u[0]);
}
function el(...u) {
  return u.length === 0 ? (c) => zc(c, ["fulfilled"]) : Qu(u) ? Tn(...u.map((c) => c.fulfilled)) : el()(u[0]);
}
function gs(...u) {
  return u.length === 0 ? (c) => zc(c, ["pending", "fulfilled", "rejected"]) : Qu(u) ? Tn(...u.flatMap((c) => [c.pending, c.rejected, c.fulfilled])) : gs()(u[0]);
}
var P1 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Rs = (u = 21) => {
  let c = "", s = u;
  for (; s--; )
    c += P1[Math.random() * 64 | 0];
  return c;
}, eg = ["name", "message", "stack", "code"], us = class {
  constructor(u, c) {
    this.payload = u, this.meta = c;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
}, ch = class {
  constructor(u, c) {
    this.payload = u, this.meta = c;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
}, tg = (u) => {
  if (typeof u == "object" && u !== null) {
    const c = {};
    for (const s of eg)
      typeof u[s] == "string" && (c[s] = u[s]);
    return c;
  }
  return {
    message: String(u)
  };
}, fh = "External signal was aborted", rh = /* @__PURE__ */ (() => {
  function u(c, s, r) {
    const d = kt(c + "/fulfilled", (p, h, q, S) => ({
      payload: p,
      meta: {
        ...S || {},
        arg: q,
        requestId: h,
        requestStatus: "fulfilled"
      }
    })), m = kt(c + "/pending", (p, h, q) => ({
      payload: void 0,
      meta: {
        ...q || {},
        arg: h,
        requestId: p,
        requestStatus: "pending"
      }
    })), g = kt(c + "/rejected", (p, h, q, S, C) => ({
      payload: S,
      error: (r && r.serializeError || tg)(p || "Rejected"),
      meta: {
        ...C || {},
        arg: q,
        requestId: h,
        rejectedWithValue: !!S,
        requestStatus: "rejected",
        aborted: p?.name === "AbortError",
        condition: p?.name === "ConditionError"
      }
    }));
    function O(p, {
      signal: h
    } = {}) {
      return (q, S, C) => {
        const G = r?.idGenerator ? r.idGenerator(p) : Rs(), j = new AbortController();
        let X, U;
        function Y(b) {
          U = b, j.abort();
        }
        h && (h.aborted ? Y(fh) : h.addEventListener("abort", () => Y(fh), {
          once: !0
        }));
        const k = (async function() {
          let b;
          try {
            let T = r?.condition?.(p, {
              getState: S,
              extra: C
            });
            if (lg(T) && (T = await T), T === !1 || j.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const A = new Promise((R, V) => {
              X = () => {
                V({
                  name: "AbortError",
                  message: U || "Aborted"
                });
              }, j.signal.addEventListener("abort", X, {
                once: !0
              });
            });
            q(m(G, p, r?.getPendingMeta?.({
              requestId: G,
              arg: p
            }, {
              getState: S,
              extra: C
            }))), b = await Promise.race([A, Promise.resolve(s(p, {
              dispatch: q,
              getState: S,
              extra: C,
              requestId: G,
              signal: j.signal,
              abort: Y,
              rejectWithValue: (R, V) => new us(R, V),
              fulfillWithValue: (R, V) => new ch(R, V)
            })).then((R) => {
              if (R instanceof us)
                throw R;
              return R instanceof ch ? d(R.payload, G, p, R.meta) : d(R, G, p);
            })]);
          } catch (T) {
            b = T instanceof us ? g(null, G, p, T.payload, T.meta) : g(T, G, p);
          } finally {
            X && j.signal.removeEventListener("abort", X);
          }
          return r && !r.dispatchConditionRejection && g.match(b) && b.meta.condition || q(b), b;
        })();
        return Object.assign(k, {
          abort: Y,
          requestId: G,
          arg: p,
          unwrap() {
            return k.then(ng);
          }
        });
      };
    }
    return Object.assign(O, {
      pending: m,
      rejected: g,
      fulfilled: d,
      settled: Tn(g, d),
      typePrefix: c
    });
  }
  return u.withTypes = () => u, u;
})();
function ng(u) {
  if (u.meta && u.meta.rejectedWithValue)
    throw u.payload;
  if (u.error)
    throw u.error;
  return u.payload;
}
function lg(u) {
  return u !== null && typeof u == "object" && typeof u.then == "function";
}
var ag = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function ug(u, c) {
  return `${u}/${c}`;
}
function ig({
  creators: u
} = {}) {
  const c = u?.asyncThunk?.[ag];
  return function(r) {
    const {
      name: d,
      reducerPath: m = d
    } = r;
    if (!d)
      throw new Error(Vt(11));
    const g = (typeof r.reducers == "function" ? r.reducers(fg()) : r.reducers) || {}, O = Object.keys(g), p = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, h = {
      addCase(b, z) {
        const T = typeof b == "string" ? b : b.type;
        if (!T)
          throw new Error(Vt(12));
        if (T in p.sliceCaseReducersByType)
          throw new Error(Vt(13));
        return p.sliceCaseReducersByType[T] = z, h;
      },
      addMatcher(b, z) {
        return p.sliceMatchers.push({
          matcher: b,
          reducer: z
        }), h;
      },
      exposeAction(b, z) {
        return p.actionCreators[b] = z, h;
      },
      exposeCaseReducer(b, z) {
        return p.sliceCaseReducersByName[b] = z, h;
      }
    };
    O.forEach((b) => {
      const z = g[b], T = {
        reducerName: b,
        type: ug(d, b),
        createNotation: typeof r.reducers == "function"
      };
      sg(z) ? dg(T, z, h, c) : rg(T, z, h);
    });
    function q() {
      const [b = {}, z = [], T = void 0] = typeof r.extraReducers == "function" ? $h(r.extraReducers) : [r.extraReducers], A = {
        ...b,
        ...p.sliceCaseReducersByType
      };
      return I1(r.initialState, (R) => {
        for (let V in A)
          R.addCase(V, A[V]);
        for (let V of p.sliceMatchers)
          R.addMatcher(V.matcher, V.reducer);
        for (let V of z)
          R.addMatcher(V.matcher, V.reducer);
        T && R.addDefaultCase(T);
      });
    }
    const S = (b) => b, C = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new WeakMap();
    let j;
    function X(b, z) {
      return j || (j = q()), j(b, z);
    }
    function U() {
      return j || (j = q()), j.getInitialState();
    }
    function Y(b, z = !1) {
      function T(R) {
        let V = R[b];
        return typeof V > "u" && z && (V = ac(G, T, U)), V;
      }
      function A(R = S) {
        const V = ac(C, z, () => /* @__PURE__ */ new WeakMap());
        return ac(V, R, () => {
          const L = {};
          for (const [x, _] of Object.entries(r.selectors ?? {}))
            L[x] = cg(_, R, () => ac(G, R, U), z);
          return L;
        });
      }
      return {
        reducerPath: b,
        getSelectors: A,
        get selectors() {
          return A(T);
        },
        selectSlice: T
      };
    }
    const k = {
      name: d,
      reducer: X,
      actions: p.actionCreators,
      caseReducers: p.sliceCaseReducersByName,
      getInitialState: U,
      ...Y(m),
      injectInto(b, {
        reducerPath: z,
        ...T
      } = {}) {
        const A = z ?? m;
        return b.inject({
          reducerPath: A,
          reducer: X
        }, T), {
          ...k,
          ...Y(A, !0)
        };
      }
    };
    return k;
  };
}
function cg(u, c, s, r) {
  function d(m, ...g) {
    let O = c(m);
    return typeof O > "u" && r && (O = s()), u(O, ...g);
  }
  return d.unwrapped = u, d;
}
var $n = /* @__PURE__ */ ig();
function fg() {
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
function rg({
  type: u,
  reducerName: c,
  createNotation: s
}, r, d) {
  let m, g;
  if ("reducer" in r) {
    if (s && !og(r))
      throw new Error(Vt(17));
    m = r.reducer, g = r.prepare;
  } else
    m = r;
  d.addCase(u, m).exposeCaseReducer(c, m).exposeAction(c, g ? kt(u, g) : kt(u));
}
function sg(u) {
  return u._reducerDefinitionType === "asyncThunk";
}
function og(u) {
  return u._reducerDefinitionType === "reducerWithPrepare";
}
function dg({
  type: u,
  reducerName: c
}, s, r, d) {
  if (!d)
    throw new Error(Vt(18));
  const {
    payloadCreator: m,
    fulfilled: g,
    pending: O,
    rejected: p,
    settled: h,
    options: q
  } = s, S = d(u, m, q);
  r.exposeAction(c, S), g && r.addCase(S.fulfilled, g), O && r.addCase(S.pending, O), p && r.addCase(S.rejected, p), h && r.addMatcher(S.settled, h), r.exposeCaseReducer(c, {
    fulfilled: g || uc,
    pending: O || uc,
    rejected: p || uc,
    settled: h || uc
  });
}
function uc() {
}
function Vt(u) {
  return `Minified Redux Toolkit error #${u}; visit https://redux-toolkit.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
}
var mg = class extends Error {
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
}, Ph = /* @__PURE__ */ ((u) => (u.uninitialized = "uninitialized", u.pending = "pending", u.fulfilled = "fulfilled", u.rejected = "rejected", u))(Ph || {}), An = "uninitialized", ps = "pending", gu = "fulfilled", pu = "rejected";
function sh(u) {
  return {
    status: u,
    isUninitialized: u === An,
    isLoading: u === ps,
    isSuccess: u === gu,
    isError: u === pu
  };
}
var oh = Pn;
function Ns(u, c) {
  if (u === c || !(oh(u) && oh(c) || Array.isArray(u) && Array.isArray(c)))
    return c;
  const s = Object.keys(c), r = Object.keys(u);
  let d = s.length === r.length;
  const m = Array.isArray(c) ? [] : {};
  for (const g of s)
    m[g] = Ns(u[g], c[g]), d && (d = u[g] === m[g]);
  return d ? u : m;
}
function Ss(u, c, s) {
  return u.reduce((r, d, m) => (c(d, m) && r.push(s(d, m)), r), []).flat();
}
function hg(u) {
  return new RegExp("(^|:)//").test(u);
}
function yg() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function Us(u) {
  return u != null;
}
function dh(u) {
  return [...u?.values() ?? []].filter(Us);
}
function vg() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
var gg = (u) => u.replace(/\/$/, ""), pg = (u) => u.replace(/^\//, "");
function Sg(u, c) {
  if (!u)
    return c;
  if (!c)
    return u;
  if (hg(c))
    return c;
  const s = u.endsWith("/") || !c.startsWith("?") ? "/" : "";
  return u = gg(u), c = pg(c), `${u}${s}${c}`;
}
function Ec(u, c, s) {
  return u.has(c) ? u.get(c) : u.set(c, s(c)).get(c);
}
var bs = () => /* @__PURE__ */ new Map(), bg = (u) => {
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
}, _g = (...u) => {
  for (const s of u) if (s.aborted) return AbortSignal.abort(s.reason);
  const c = new AbortController();
  for (const s of u)
    s.addEventListener("abort", () => c.abort(s.reason), {
      signal: c.signal,
      once: !0
    });
  return c.signal;
}, mh = (...u) => fetch(...u), Eg = (u) => u.status >= 200 && u.status <= 299, Tg = (u) => (
  /*applicat*/
  /ion\/(vnd\.api\+)?json/.test(u.get("content-type") || "")
);
function hh(u) {
  if (!Pn(u))
    return u;
  const c = {
    ...u
  };
  for (const [s, r] of Object.entries(c))
    r === void 0 && delete c[s];
  return c;
}
var Ag = (u) => typeof u == "object" && (Pn(u) || Array.isArray(u) || typeof u.toJSON == "function");
function Mg({
  baseUrl: u,
  prepareHeaders: c = (S) => S,
  fetchFn: s = mh,
  paramsSerializer: r,
  isJsonContentType: d = Tg,
  jsonContentType: m = "application/json",
  jsonReplacer: g,
  timeout: O,
  responseHandler: p,
  validateStatus: h,
  ...q
} = {}) {
  return typeof fetch > "u" && s === mh && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), async (C, G, j) => {
    const {
      getState: X,
      extra: U,
      endpoint: Y,
      forced: k,
      type: b
    } = G;
    let z, {
      url: T,
      headers: A = new Headers(q.headers),
      params: R = void 0,
      responseHandler: V = p ?? "json",
      validateStatus: L = h ?? Eg,
      timeout: x = O,
      ..._
    } = typeof C == "string" ? {
      url: C
    } : C, M = {
      ...q,
      signal: x ? _g(G.signal, bg(x)) : G.signal,
      ..._
    };
    A = new Headers(hh(A)), M.headers = await c(A, {
      getState: X,
      arg: C,
      extra: U,
      endpoint: Y,
      forced: k,
      type: b,
      extraOptions: j
    }) || A;
    const w = Ag(M.body);
    if (M.body != null && !w && typeof M.body != "string" && M.headers.delete("content-type"), !M.headers.has("content-type") && w && M.headers.set("content-type", m), w && d(M.headers) && (M.body = JSON.stringify(M.body, g)), M.headers.has("accept") || (V === "json" ? M.headers.set("accept", "application/json") : V === "text" && M.headers.set("accept", "text/plain, text/html, */*")), R) {
      const ue = ~T.indexOf("?") ? "&" : "?", y = r ? r(R) : new URLSearchParams(hh(R));
      T += ue + y;
    }
    T = Sg(u, T);
    const W = new Request(T, M);
    z = {
      request: new Request(T, M)
    };
    let D;
    try {
      D = await s(W);
    } catch (ue) {
      return {
        error: {
          status: (ue instanceof Error || typeof DOMException < "u" && ue instanceof DOMException) && ue.name === "TimeoutError" ? "TIMEOUT_ERROR" : "FETCH_ERROR",
          error: String(ue)
        },
        meta: z
      };
    }
    const F = D.clone();
    z.response = F;
    let I, te = "";
    try {
      let ue;
      if (await Promise.all([
        S(D, V).then((y) => I = y, (y) => ue = y),
        // see https://github.com/node-fetch/node-fetch/issues/665#issuecomment-538995182
        // we *have* to "use up" both streams at the same time or they will stop running in node-fetch scenarios
        F.text().then((y) => te = y, () => {
        })
      ]), ue) throw ue;
    } catch (ue) {
      return {
        error: {
          status: "PARSING_ERROR",
          originalStatus: D.status,
          data: te,
          error: String(ue)
        },
        meta: z
      };
    }
    return L(D, I) ? {
      data: I,
      meta: z
    } : {
      error: {
        status: D.status,
        data: I
      },
      meta: z
    };
  };
  async function S(C, G) {
    if (typeof G == "function")
      return G(C);
    if (G === "content-type" && (G = d(C.headers) ? "json" : "text"), G === "json") {
      const j = await C.text();
      return j.length ? JSON.parse(j) : null;
    }
    return C.text();
  }
}
var yh = class {
  constructor(u, c = void 0) {
    this.value = u, this.meta = c;
  }
}, Rc = "__rtkq/", Cg = "online", Dg = "offline", ey = "focused", js = /* @__PURE__ */ kt(`${Rc}${ey}`), ty = /* @__PURE__ */ kt(`${Rc}un${ey}`), xs = /* @__PURE__ */ kt(`${Rc}${Cg}`), ny = /* @__PURE__ */ kt(`${Rc}${Dg}`), Bu = "query", ly = "mutation", ay = "infinitequery";
function Nc(u) {
  return u.type === Bu;
}
function zg(u) {
  return u.type === ly;
}
function Uc(u) {
  return u.type === ay;
}
function Tc(u) {
  return Nc(u) || Uc(u);
}
function qs(u, c, s, r, d, m) {
  const g = Og(u) ? u(c, s, r, d) : u;
  return g ? Ss(g, Us, (O) => m(uy(O))) : [];
}
function Og(u) {
  return typeof u == "function";
}
function uy(u) {
  return typeof u == "string" ? {
    type: u
  } : u;
}
function Rg(u, c) {
  return u.catch(c);
}
var va = (u, c) => u.endpointDefinitions[c], zu = /* @__PURE__ */ Symbol("forceQueryFn"), _s = (u) => typeof u[zu] == "function";
function Ng({
  serializeQueryArgs: u,
  queryThunk: c,
  infiniteQueryThunk: s,
  mutationThunk: r,
  api: d,
  context: m,
  getInternalState: g
}) {
  const O = (z) => g(z)?.runningQueries, p = (z) => g(z)?.runningMutations, {
    unsubscribeQueryResult: h,
    removeMutationResult: q,
    updateSubscriptionOptions: S
  } = d.internalActions;
  return {
    buildInitiateQuery: Y,
    buildInitiateInfiniteQuery: k,
    buildInitiateMutation: b,
    getRunningQueryThunk: C,
    getRunningMutationThunk: G,
    getRunningQueriesThunk: j,
    getRunningMutationsThunk: X
  };
  function C(z, T) {
    return (A) => {
      const R = va(m, z), V = u({
        queryArgs: T,
        endpointDefinition: R,
        endpointName: z
      });
      return O(A)?.get(V);
    };
  }
  function G(z, T) {
    return (A) => p(A)?.get(T);
  }
  function j() {
    return (z) => dh(O(z));
  }
  function X() {
    return (z) => dh(p(z));
  }
  function U(z, T) {
    const A = (R, {
      subscribe: V = !0,
      forceRefetch: L,
      subscriptionOptions: x,
      [zu]: _,
      ...M
    } = {}) => (w, W) => {
      const ae = u({
        queryArgs: R,
        endpointDefinition: T,
        endpointName: z
      });
      let D;
      const F = {
        ...M,
        type: Bu,
        subscribe: V,
        forceRefetch: L,
        subscriptionOptions: x,
        endpointName: z,
        originalArgs: R,
        queryCacheKey: ae,
        [zu]: _
      };
      if (Nc(T))
        D = c(F);
      else {
        const {
          direction: ie,
          initialPageParam: Se,
          refetchCachedPages: de
        } = M;
        D = s({
          ...F,
          // Supply these even if undefined. This helps with a field existence
          // check over in `buildSlice.ts`
          direction: ie,
          initialPageParam: Se,
          refetchCachedPages: de
        });
      }
      const I = d.endpoints[z].select(R), te = w(D), ue = I(W()), {
        requestId: y,
        abort: K
      } = te, le = ue.requestId !== y, ne = O(w)?.get(ae), ce = () => I(W()), re = Object.assign(_ ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        te.then(ce)
      ) : le && !ne ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(ue)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([ne, te]).then(ce)
      ), {
        arg: R,
        requestId: y,
        subscriptionOptions: x,
        queryCacheKey: ae,
        abort: K,
        async unwrap() {
          const ie = await re;
          if (ie.isError)
            throw ie.error;
          return ie.data;
        },
        refetch: (ie) => w(A(R, {
          subscribe: !1,
          forceRefetch: !0,
          ...ie
        })),
        unsubscribe() {
          V && w(h({
            queryCacheKey: ae,
            requestId: y
          }));
        },
        updateSubscriptionOptions(ie) {
          re.subscriptionOptions = ie, w(S({
            endpointName: z,
            requestId: y,
            queryCacheKey: ae,
            options: ie
          }));
        }
      });
      if (!ne && !le && !_) {
        const ie = O(w);
        ie.set(ae, re), re.then(() => {
          ie.delete(ae);
        });
      }
      return re;
    };
    return A;
  }
  function Y(z, T) {
    return U(z, T);
  }
  function k(z, T) {
    return U(z, T);
  }
  function b(z) {
    return (T, {
      track: A = !0,
      fixedCacheKey: R
    } = {}) => (V, L) => {
      const x = r({
        type: "mutation",
        endpointName: z,
        originalArgs: T,
        track: A,
        fixedCacheKey: R
      }), _ = V(x), {
        requestId: M,
        abort: w,
        unwrap: W
      } = _, ae = Rg(_.unwrap().then((te) => ({
        data: te
      })), (te) => ({
        error: te
      })), D = () => {
        V(q({
          requestId: M,
          fixedCacheKey: R
        }));
      }, F = Object.assign(ae, {
        arg: _.arg,
        requestId: M,
        abort: w,
        unwrap: W,
        reset: D
      }), I = p(V);
      return I.set(M, F), F.then(() => {
        I.delete(M);
      }), R && (I.set(R, F), F.then(() => {
        I.get(R) === F && I.delete(R);
      })), F;
    };
  }
}
var iy = class extends mg {
  constructor(u, c, s, r) {
    super(u), this.value = c, this.schemaName = s, this._bqMeta = r;
  }
}, bl = (u, c) => Array.isArray(u) ? u.includes(c) : !!u;
async function _l(u, c, s, r) {
  const d = await u["~standard"].validate(c);
  if (d.issues)
    throw new iy(d.issues, c, s, r);
  return d.value;
}
function vh(u) {
  return u;
}
var mu = (u = {}) => ({
  ...u,
  [Dc]: !0
});
function Ug({
  reducerPath: u,
  baseQuery: c,
  context: {
    endpointDefinitions: s
  },
  serializeQueryArgs: r,
  api: d,
  assertTagType: m,
  selectors: g,
  onSchemaFailure: O,
  catchSchemaFailure: p,
  skipSchemaValidation: h
}) {
  const q = (_, M, w, W) => (ae, D) => {
    const F = s[_], I = r({
      queryArgs: M,
      endpointDefinition: F,
      endpointName: _
    });
    if (ae(d.internalActions.queryResultPatched({
      queryCacheKey: I,
      patches: w
    })), !W)
      return;
    const te = d.endpoints[_].select(M)(
      // Work around TS 4.1 mismatch
      D()
    ), ue = qs(F.providesTags, te.data, void 0, M, {}, m);
    ae(d.internalActions.updateProvidedBy([{
      queryCacheKey: I,
      providedTags: ue
    }]));
  };
  function S(_, M, w = 0) {
    const W = [M, ..._];
    return w && W.length > w ? W.slice(0, -1) : W;
  }
  function C(_, M, w = 0) {
    const W = [..._, M];
    return w && W.length > w ? W.slice(1) : W;
  }
  const G = (_, M, w, W = !0) => (ae, D) => {
    const I = d.endpoints[_].select(M)(
      // Work around TS 4.1 mismatch
      D()
    ), te = {
      patches: [],
      inversePatches: [],
      undo: () => ae(d.util.patchQueryData(_, M, te.inversePatches, W))
    };
    if (I.status === An)
      return te;
    let ue;
    if ("data" in I)
      if (Nt(I.data)) {
        const [y, K, le] = kh(I.data, w);
        te.patches.push(...K), te.inversePatches.push(...le), ue = y;
      } else
        ue = w(I.data), te.patches.push({
          op: "replace",
          path: [],
          value: ue
        }), te.inversePatches.push({
          op: "replace",
          path: [],
          value: I.data
        });
    return te.patches.length === 0 || ae(d.util.patchQueryData(_, M, te.patches, W)), te;
  }, j = (_, M, w) => (W) => W(d.endpoints[_].initiate(M, {
    subscribe: !1,
    forceRefetch: !0,
    [zu]: () => ({
      data: w
    })
  })), X = (_, M) => _.query && _[M] ? _[M] : vh, U = async (_, {
    signal: M,
    abort: w,
    rejectWithValue: W,
    fulfillWithValue: ae,
    dispatch: D,
    getState: F,
    extra: I
  }) => {
    const te = s[_.endpointName], {
      metaSchema: ue,
      skipSchemaValidation: y = h
    } = te, K = _.type === Bu;
    try {
      let le = vh;
      const ne = {
        signal: M,
        abort: w,
        dispatch: D,
        getState: F,
        extra: I,
        endpoint: _.endpointName,
        type: _.type,
        forced: K ? Y(_, F()) : void 0,
        queryCacheKey: K ? _.queryCacheKey : void 0
      }, ce = K ? _[zu] : void 0;
      let re;
      const ie = async (de, pe, rt, Pe) => {
        if (pe == null && de.pages.length)
          return Promise.resolve({
            data: de
          });
        const en = {
          queryArg: _.originalArgs,
          pageParam: pe
        }, et = await Se(en), Ft = Pe ? S : C;
        return {
          data: {
            pages: Ft(de.pages, et.data, rt),
            pageParams: Ft(de.pageParams, pe, rt)
          },
          meta: et.meta
        };
      };
      async function Se(de) {
        let pe;
        const {
          extraOptions: rt,
          argSchema: Pe,
          rawResponseSchema: en,
          responseSchema: et
        } = te;
        if (Pe && !bl(y, "arg") && (de = await _l(
          Pe,
          de,
          "argSchema",
          {}
          // we don't have a meta yet, so we can't pass it
        )), ce ? pe = ce() : te.query ? (le = X(te, "transformResponse"), pe = await c(te.query(de), ne, rt)) : pe = await te.queryFn(de, ne, rt, (Mn) => c(Mn, ne, rt)), typeof process < "u", pe.error) throw new yh(pe.error, pe.meta);
        let {
          data: Ft
        } = pe;
        en && !bl(y, "rawResponse") && (Ft = await _l(en, pe.data, "rawResponseSchema", pe.meta));
        let Ut = await le(Ft, pe.meta, de);
        return et && !bl(y, "response") && (Ut = await _l(et, Ut, "responseSchema", pe.meta)), {
          ...pe,
          data: Ut
        };
      }
      if (K && "infiniteQueryOptions" in te) {
        const {
          infiniteQueryOptions: de
        } = te, {
          maxPages: pe = 1 / 0
        } = de, rt = _.refetchCachedPages ?? de.refetchCachedPages ?? !0;
        let Pe;
        const en = {
          pages: [],
          pageParams: []
        }, et = g.selectQueryEntry(F(), _.queryCacheKey)?.data, Ut = /* arg.forceRefetch */ Y(_, F()) && !_.direction || !et ? en : et;
        if ("direction" in _ && _.direction && Ut.pages.length) {
          const Mn = _.direction === "backward", tl = (Mn ? cy : Es)(de, Ut, _.originalArgs);
          Pe = await ie(Ut, tl, pe, Mn);
        } else {
          const {
            initialPageParam: Mn = de.initialPageParam
          } = _, Dl = et?.pageParams ?? [], tl = Dl[0] ?? Mn, pa = Dl.length;
          if (Pe = await ie(Ut, tl, pe), ce && (Pe = {
            data: Pe.data.pages[0]
          }), rt)
            for (let zl = 1; zl < pa; zl++) {
              const qc = Es(de, Pe.data, _.originalArgs);
              Pe = await ie(Pe.data, qc, pe);
            }
        }
        re = Pe;
      } else
        re = await Se(_.originalArgs);
      return ue && !bl(y, "meta") && re.meta && (re.meta = await _l(ue, re.meta, "metaSchema", re.meta)), ae(re.data, mu({
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: re.meta
      }));
    } catch (le) {
      let ne = le;
      if (ne instanceof yh) {
        let ce = X(te, "transformErrorResponse");
        const {
          rawErrorResponseSchema: re,
          errorResponseSchema: ie
        } = te;
        let {
          value: Se,
          meta: de
        } = ne;
        try {
          re && !bl(y, "rawErrorResponse") && (Se = await _l(re, Se, "rawErrorResponseSchema", de)), ue && !bl(y, "meta") && (de = await _l(ue, de, "metaSchema", de));
          let pe = await ce(Se, de, _.originalArgs);
          return ie && !bl(y, "errorResponse") && (pe = await _l(ie, pe, "errorResponseSchema", de)), W(pe, mu({
            baseQueryMeta: de
          }));
        } catch (pe) {
          ne = pe;
        }
      }
      try {
        if (ne instanceof iy) {
          const ce = {
            endpoint: _.endpointName,
            arg: _.originalArgs,
            type: _.type,
            queryCacheKey: K ? _.queryCacheKey : void 0
          };
          te.onSchemaFailure?.(ne, ce), O?.(ne, ce);
          const {
            catchSchemaFailure: re = p
          } = te;
          if (re)
            return W(re(ne, ce), mu({
              baseQueryMeta: ne._bqMeta
            }));
        }
      } catch (ce) {
        ne = ce;
      }
      throw console.error(ne), ne;
    }
  };
  function Y(_, M) {
    const w = g.selectQueryEntry(M, _.queryCacheKey), W = g.selectConfig(M).refetchOnMountOrArgChange, ae = w?.fulfilledTimeStamp, D = _.forceRefetch ?? (_.subscribe && W);
    return D ? D === !0 || (Number(/* @__PURE__ */ new Date()) - Number(ae)) / 1e3 >= D : !1;
  }
  const k = () => rh(`${u}/executeQuery`, U, {
    getPendingMeta({
      arg: M
    }) {
      const w = s[M.endpointName];
      return mu({
        startedTimeStamp: Date.now(),
        ...Uc(w) ? {
          direction: M.direction
        } : {}
      });
    },
    condition(M, {
      getState: w
    }) {
      const W = w(), ae = g.selectQueryEntry(W, M.queryCacheKey), D = ae?.fulfilledTimeStamp, F = M.originalArgs, I = ae?.originalArgs, te = s[M.endpointName], ue = M.direction;
      return _s(M) ? !0 : ae?.status === "pending" ? !1 : Y(M, W) || Nc(te) && te?.forceRefetch?.({
        currentArg: F,
        previousArg: I,
        endpointState: ae,
        state: W
      }) ? !0 : !(D && !ue);
    },
    dispatchConditionRejection: !0
  }), b = k(), z = k(), T = rh(`${u}/executeMutation`, U, {
    getPendingMeta() {
      return mu({
        startedTimeStamp: Date.now()
      });
    }
  }), A = (_) => "force" in _, R = (_) => "ifOlderThan" in _, V = (_, M, w = {}) => (W, ae) => {
    const D = A(w) && w.force, F = R(w) && w.ifOlderThan, I = (ue = !0) => {
      const y = {
        forceRefetch: ue,
        subscribe: !1
      };
      return d.endpoints[_].initiate(M, y);
    }, te = d.endpoints[_].select(M)(ae());
    if (D)
      W(I());
    else if (F) {
      const ue = te?.fulfilledTimeStamp;
      if (!ue) {
        W(I());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(ue))) / 1e3 >= F && W(I());
    } else
      W(I(!1));
  };
  function L(_) {
    return (M) => M?.meta?.arg?.endpointName === _;
  }
  function x(_, M) {
    return {
      matchPending: Eu(Os(_), L(M)),
      matchFulfilled: Eu(el(_), L(M)),
      matchRejected: Eu(ya(_), L(M))
    };
  }
  return {
    queryThunk: b,
    mutationThunk: T,
    infiniteQueryThunk: z,
    prefetch: V,
    updateQueryData: G,
    upsertQueryData: j,
    patchQueryData: q,
    buildMatchThunkActions: x
  };
}
function Es(u, {
  pages: c,
  pageParams: s
}, r) {
  const d = c.length - 1;
  return u.getNextPageParam(c[d], c, s[d], s, r);
}
function cy(u, {
  pages: c,
  pageParams: s
}, r) {
  return u.getPreviousPageParam?.(c[0], c, s[0], s, r);
}
function fy(u, c, s, r) {
  return qs(s[u.meta.arg.endpointName][c], el(u) ? u.payload : void 0, Oc(u) ? u.payload : void 0, u.meta.arg.originalArgs, "baseQueryMeta" in u.meta ? u.meta.baseQueryMeta : void 0, r);
}
function gh(u) {
  return Rt(u) ? Kh(u) : u;
}
function ic(u, c, s) {
  const r = u[c];
  r && s(r);
}
function Ou(u) {
  return ("arg" in u ? u.arg.fixedCacheKey : u.fixedCacheKey) ?? u.requestId;
}
function ph(u, c, s) {
  const r = u[Ou(c)];
  r && s(r);
}
var cc = {};
function jg({
  reducerPath: u,
  queryThunk: c,
  mutationThunk: s,
  serializeQueryArgs: r,
  context: {
    endpointDefinitions: d,
    apiUid: m,
    extractRehydrationInfo: g,
    hasRehydrationInfo: O
  },
  assertTagType: p,
  config: h
}) {
  const q = kt(`${u}/resetApiState`);
  function S(L, x, _, M) {
    L[x.queryCacheKey] ??= {
      status: An,
      endpointName: x.endpointName
    }, ic(L, x.queryCacheKey, (w) => {
      w.status = ps, w.requestId = _ && w.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        w.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        M.requestId
      ), x.originalArgs !== void 0 && (w.originalArgs = x.originalArgs), w.startedTimeStamp = M.startedTimeStamp;
      const W = d[M.arg.endpointName];
      Uc(W) && "direction" in x && (w.direction = x.direction);
    });
  }
  function C(L, x, _, M) {
    ic(L, x.arg.queryCacheKey, (w) => {
      if (w.requestId !== x.requestId && !M) return;
      const {
        merge: W
      } = d[x.arg.endpointName];
      if (w.status = gu, W)
        if (w.data !== void 0) {
          const {
            fulfilledTimeStamp: ae,
            arg: D,
            baseQueryMeta: F,
            requestId: I
          } = x;
          let te = qu(w.data, (ue) => W(ue, _, {
            arg: D.originalArgs,
            baseQueryMeta: F,
            fulfilledTimeStamp: ae,
            requestId: I
          }));
          w.data = te;
        } else
          w.data = _;
      else
        w.data = d[x.arg.endpointName].structuralSharing ?? !0 ? Ns(Rt(w.data) ? v1(w.data) : w.data, _) : _;
      delete w.error, w.fulfilledTimeStamp = x.fulfilledTimeStamp;
    });
  }
  const G = $n({
    name: `${u}/queries`,
    initialState: cc,
    reducers: {
      removeQueryResult: {
        reducer(L, {
          payload: {
            queryCacheKey: x
          }
        }) {
          delete L[x];
        },
        prepare: du()
      },
      cacheEntriesUpserted: {
        reducer(L, x) {
          for (const _ of x.payload) {
            const {
              queryDescription: M,
              value: w
            } = _;
            S(L, M, !0, {
              arg: M,
              requestId: x.meta.requestId,
              startedTimeStamp: x.meta.timestamp
            }), C(
              L,
              {
                arg: M,
                requestId: x.meta.requestId,
                fulfilledTimeStamp: x.meta.timestamp,
                baseQueryMeta: {}
              },
              w,
              // We know we're upserting here
              !0
            );
          }
        },
        prepare: (L) => ({
          payload: L.map((M) => {
            const {
              endpointName: w,
              arg: W,
              value: ae
            } = M, D = d[w];
            return {
              queryDescription: {
                type: Bu,
                endpointName: w,
                originalArgs: M.arg,
                queryCacheKey: r({
                  queryArgs: W,
                  endpointDefinition: D,
                  endpointName: w
                })
              },
              value: ae
            };
          }),
          meta: {
            [Dc]: !0,
            requestId: Rs(),
            timestamp: Date.now()
          }
        })
      },
      queryResultPatched: {
        reducer(L, {
          payload: {
            queryCacheKey: x,
            patches: _
          }
        }) {
          ic(L, x, (M) => {
            M.data = nh(M.data, _.concat());
          });
        },
        prepare: du()
      }
    },
    extraReducers(L) {
      L.addCase(c.pending, (x, {
        meta: _,
        meta: {
          arg: M
        }
      }) => {
        const w = _s(M);
        S(x, M, w, _);
      }).addCase(c.fulfilled, (x, {
        meta: _,
        payload: M
      }) => {
        const w = _s(_.arg);
        C(x, _, M, w);
      }).addCase(c.rejected, (x, {
        meta: {
          condition: _,
          arg: M,
          requestId: w
        },
        error: W,
        payload: ae
      }) => {
        ic(x, M.queryCacheKey, (D) => {
          if (!_) {
            if (D.requestId !== w) return;
            D.status = pu, D.error = ae ?? W;
          }
        });
      }).addMatcher(O, (x, _) => {
        const {
          queries: M
        } = g(_);
        for (const [w, W] of Object.entries(M))
          // do not rehydrate entries that were currently in flight.
          (W?.status === gu || W?.status === pu) && (x[w] = W);
      });
    }
  }), j = $n({
    name: `${u}/mutations`,
    initialState: cc,
    reducers: {
      removeMutationResult: {
        reducer(L, {
          payload: x
        }) {
          const _ = Ou(x);
          _ in L && delete L[_];
        },
        prepare: du()
      }
    },
    extraReducers(L) {
      L.addCase(s.pending, (x, {
        meta: _,
        meta: {
          requestId: M,
          arg: w,
          startedTimeStamp: W
        }
      }) => {
        w.track && (x[Ou(_)] = {
          requestId: M,
          status: ps,
          endpointName: w.endpointName,
          startedTimeStamp: W
        });
      }).addCase(s.fulfilled, (x, {
        payload: _,
        meta: M
      }) => {
        M.arg.track && ph(x, M, (w) => {
          w.requestId === M.requestId && (w.status = gu, w.data = _, w.fulfilledTimeStamp = M.fulfilledTimeStamp);
        });
      }).addCase(s.rejected, (x, {
        payload: _,
        error: M,
        meta: w
      }) => {
        w.arg.track && ph(x, w, (W) => {
          W.requestId === w.requestId && (W.status = pu, W.error = _ ?? M);
        });
      }).addMatcher(O, (x, _) => {
        const {
          mutations: M
        } = g(_);
        for (const [w, W] of Object.entries(M))
          // do not rehydrate entries that were currently in flight.
          (W?.status === gu || W?.status === pu) && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          w !== W?.requestId && (x[w] = W);
      });
    }
  }), X = {
    tags: {},
    keys: {}
  }, U = $n({
    name: `${u}/invalidation`,
    initialState: X,
    reducers: {
      updateProvidedBy: {
        reducer(L, x) {
          for (const {
            queryCacheKey: _,
            providedTags: M
          } of x.payload) {
            Y(L, _);
            for (const {
              type: w,
              id: W
            } of M) {
              const ae = (L.tags[w] ??= {})[W || "__internal_without_id"] ??= [];
              ae.includes(_) || ae.push(_);
            }
            L.keys[_] = M;
          }
        },
        prepare: du()
      }
    },
    extraReducers(L) {
      L.addCase(G.actions.removeQueryResult, (x, {
        payload: {
          queryCacheKey: _
        }
      }) => {
        Y(x, _);
      }).addMatcher(O, (x, _) => {
        const {
          provided: M
        } = g(_);
        for (const [w, W] of Object.entries(M.tags ?? {}))
          for (const [ae, D] of Object.entries(W)) {
            const F = (x.tags[w] ??= {})[ae || "__internal_without_id"] ??= [];
            for (const I of D)
              F.includes(I) || F.push(I), x.keys[I] = M.keys[I];
          }
      }).addMatcher(Tn(el(c), Oc(c)), (x, _) => {
        k(x, [_]);
      }).addMatcher(G.actions.cacheEntriesUpserted.match, (x, _) => {
        const M = _.payload.map(({
          queryDescription: w,
          value: W
        }) => ({
          type: "UNKNOWN",
          payload: W,
          meta: {
            requestStatus: "fulfilled",
            requestId: "UNKNOWN",
            arg: w
          }
        }));
        k(x, M);
      });
    }
  });
  function Y(L, x) {
    const _ = gh(L.keys[x] ?? []);
    for (const M of _) {
      const w = M.type, W = M.id ?? "__internal_without_id", ae = L.tags[w]?.[W];
      ae && (L.tags[w][W] = gh(ae).filter((D) => D !== x));
    }
    delete L.keys[x];
  }
  function k(L, x) {
    const _ = x.map((M) => {
      const w = fy(M, "providesTags", d, p), {
        queryCacheKey: W
      } = M.meta.arg;
      return {
        queryCacheKey: W,
        providedTags: w
      };
    });
    U.caseReducers.updateProvidedBy(L, U.actions.updateProvidedBy(_));
  }
  const b = $n({
    name: `${u}/subscriptions`,
    initialState: cc,
    reducers: {
      updateSubscriptionOptions(L, x) {
      },
      unsubscribeQueryResult(L, x) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), z = $n({
    name: `${u}/internalSubscriptions`,
    initialState: cc,
    reducers: {
      subscriptionsUpdated: {
        reducer(L, x) {
          return nh(L, x.payload);
        },
        prepare: du()
      }
    }
  }), T = $n({
    name: `${u}/config`,
    initialState: {
      online: vg(),
      focused: yg(),
      middlewareRegistered: !1,
      ...h
    },
    reducers: {
      middlewareRegistered(L, {
        payload: x
      }) {
        L.middlewareRegistered = L.middlewareRegistered === "conflict" || m !== x ? "conflict" : !0;
      }
    },
    extraReducers: (L) => {
      L.addCase(xs, (x) => {
        x.online = !0;
      }).addCase(ny, (x) => {
        x.online = !1;
      }).addCase(js, (x) => {
        x.focused = !0;
      }).addCase(ty, (x) => {
        x.focused = !1;
      }).addMatcher(O, (x) => ({
        ...x
      }));
    }
  }), A = Hh({
    queries: G.reducer,
    mutations: j.reducer,
    provided: U.reducer,
    subscriptions: z.reducer,
    config: T.reducer
  }), R = (L, x) => A(q.match(x) ? void 0 : L, x), V = {
    ...T.actions,
    ...G.actions,
    ...b.actions,
    ...z.actions,
    ...j.actions,
    ...U.actions,
    resetApiState: q
  };
  return {
    reducer: R,
    actions: V
  };
}
var Jt = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), ry = {
  status: An
}, Sh = /* @__PURE__ */ qu(ry, () => {
}), bh = /* @__PURE__ */ qu(ry, () => {
});
function xg({
  serializeQueryArgs: u,
  reducerPath: c,
  createSelector: s
}) {
  const r = (b) => Sh, d = (b) => bh;
  return {
    buildQuerySelector: C,
    buildInfiniteQuerySelector: G,
    buildMutationSelector: j,
    selectInvalidatedBy: X,
    selectCachedArgsForQuery: U,
    selectApiState: g,
    selectQueries: O,
    selectMutations: h,
    selectQueryEntry: p,
    selectConfig: q
  };
  function m(b) {
    return {
      ...b,
      ...sh(b.status)
    };
  }
  function g(b) {
    return b[c];
  }
  function O(b) {
    return g(b)?.queries;
  }
  function p(b, z) {
    return O(b)?.[z];
  }
  function h(b) {
    return g(b)?.mutations;
  }
  function q(b) {
    return g(b)?.config;
  }
  function S(b, z, T) {
    return (A) => {
      if (A === Jt)
        return s(r, T);
      const R = u({
        queryArgs: A,
        endpointDefinition: z,
        endpointName: b
      });
      return s((L) => p(L, R) ?? Sh, T);
    };
  }
  function C(b, z) {
    return S(b, z, m);
  }
  function G(b, z) {
    const {
      infiniteQueryOptions: T
    } = z;
    function A(R) {
      const V = {
        ...R,
        ...sh(R.status)
      }, {
        isLoading: L,
        isError: x,
        direction: _
      } = V, M = _ === "forward", w = _ === "backward";
      return {
        ...V,
        hasNextPage: Y(T, V.data, V.originalArgs),
        hasPreviousPage: k(T, V.data, V.originalArgs),
        isFetchingNextPage: L && M,
        isFetchingPreviousPage: L && w,
        isFetchNextPageError: x && M,
        isFetchPreviousPageError: x && w
      };
    }
    return S(b, z, A);
  }
  function j() {
    return (b) => {
      let z;
      return typeof b == "object" ? z = Ou(b) ?? Jt : z = b, s(z === Jt ? d : (R) => g(R)?.mutations?.[z] ?? bh, m);
    };
  }
  function X(b, z) {
    const T = b[c], A = /* @__PURE__ */ new Set(), R = Ss(z, Us, uy);
    for (const V of R) {
      const L = T.provided.tags[V.type];
      if (!L)
        continue;
      let x = (V.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        L[V.id]
      ) : (
        // no id: invalidate all queries that provide this type
        Object.values(L).flat()
      )) ?? [];
      for (const _ of x)
        A.add(_);
    }
    return Array.from(A.values()).flatMap((V) => {
      const L = T.queries[V];
      return L ? {
        queryCacheKey: V,
        endpointName: L.endpointName,
        originalArgs: L.originalArgs
      } : [];
    });
  }
  function U(b, z) {
    return Ss(Object.values(O(b)), (T) => T?.endpointName === z && T.status !== An, (T) => T.originalArgs);
  }
  function Y(b, z, T) {
    return z ? Es(b, z, T) != null : !1;
  }
  function k(b, z, T) {
    return !z || !b.getPreviousPageParam ? !1 : cy(b, z, T) != null;
  }
}
var _h = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Eh = ({
  endpointName: u,
  queryArgs: c
}) => {
  let s = "";
  const r = _h?.get(c);
  if (typeof r == "string")
    s = r;
  else {
    const d = JSON.stringify(c, (m, g) => (g = typeof g == "bigint" ? {
      $bigint: g.toString()
    } : g, g = Pn(g) ? Object.keys(g).sort().reduce((O, p) => (O[p] = g[p], O), {}) : g, g));
    Pn(c) && _h?.set(c, d), s = d;
  }
  return `${u}(${s})`;
};
function sy(...u) {
  return function(s) {
    const r = _c((h) => s.extractRehydrationInfo?.(h, {
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
      serializeQueryArgs(h) {
        let q = Eh;
        if ("serializeQueryArgs" in h.endpointDefinition) {
          const S = h.endpointDefinition.serializeQueryArgs;
          q = (C) => {
            const G = S(C);
            return typeof G == "string" ? G : Eh({
              ...C,
              queryArgs: G
            });
          };
        } else s.serializeQueryArgs && (q = s.serializeQueryArgs);
        return q(h);
      },
      tagTypes: [...s.tagTypes || []]
    }, m = {
      endpointDefinitions: {},
      batch(h) {
        h();
      },
      apiUid: Rs(),
      extractRehydrationInfo: r,
      hasRehydrationInfo: _c((h) => r(h) != null)
    }, g = {
      injectEndpoints: p,
      enhanceEndpoints({
        addTagTypes: h,
        endpoints: q
      }) {
        if (h)
          for (const S of h)
            d.tagTypes.includes(S) || d.tagTypes.push(S);
        if (q)
          for (const [S, C] of Object.entries(q))
            typeof C == "function" ? C(va(m, S)) : Object.assign(va(m, S) || {}, C);
        return g;
      }
    }, O = u.map((h) => h.init(g, d, m));
    function p(h) {
      const q = h.endpoints({
        query: (S) => ({
          ...S,
          type: Bu
        }),
        mutation: (S) => ({
          ...S,
          type: ly
        }),
        infiniteQuery: (S) => ({
          ...S,
          type: ay
        })
      });
      for (const [S, C] of Object.entries(q)) {
        if (h.overrideExisting !== !0 && S in m.endpointDefinitions) {
          if (h.overrideExisting === "throw")
            throw new Error(Vt(39));
          continue;
        }
        m.endpointDefinitions[S] = C;
        for (const G of O)
          G.injectEndpoint(S, C);
      }
      return g;
    }
    return g.injectEndpoints({
      endpoints: s.endpoints
    });
  };
}
function bn(u, ...c) {
  return Object.assign(u, ...c);
}
var qg = ({
  api: u,
  queryThunk: c,
  internalState: s,
  mwApi: r
}) => {
  const d = `${u.reducerPath}/subscriptions`;
  let m = null, g = null;
  const {
    updateSubscriptionOptions: O,
    unsubscribeQueryResult: p
  } = u.internalActions, h = (X, U) => {
    if (O.match(U)) {
      const {
        queryCacheKey: k,
        requestId: b,
        options: z
      } = U.payload, T = X.get(k);
      return T?.has(b) && T.set(b, z), !0;
    }
    if (p.match(U)) {
      const {
        queryCacheKey: k,
        requestId: b
      } = U.payload, z = X.get(k);
      return z && z.delete(b), !0;
    }
    if (u.internalActions.removeQueryResult.match(U))
      return X.delete(U.payload.queryCacheKey), !0;
    if (c.pending.match(U)) {
      const {
        meta: {
          arg: k,
          requestId: b
        }
      } = U, z = Ec(X, k.queryCacheKey, bs);
      return k.subscribe && z.set(b, k.subscriptionOptions ?? z.get(b) ?? {}), !0;
    }
    let Y = !1;
    if (c.rejected.match(U)) {
      const {
        meta: {
          condition: k,
          arg: b,
          requestId: z
        }
      } = U;
      if (k && b.subscribe) {
        const T = Ec(X, b.queryCacheKey, bs);
        T.set(z, b.subscriptionOptions ?? T.get(z) ?? {}), Y = !0;
      }
    }
    return Y;
  }, q = () => s.currentSubscriptions, G = {
    getSubscriptions: q,
    getSubscriptionCount: (X) => q().get(X)?.size ?? 0,
    isRequestSubscribed: (X, U) => !!q()?.get(X)?.get(U)
  };
  function j(X) {
    return JSON.parse(JSON.stringify(Object.fromEntries([...X].map(([U, Y]) => [U, Object.fromEntries(Y)]))));
  }
  return (X, U) => {
    if (m || (m = j(s.currentSubscriptions)), u.util.resetApiState.match(X))
      return m = {}, s.currentSubscriptions.clear(), g = null, [!0, !1];
    if (u.internalActions.internal_getRTKQSubscriptions.match(X))
      return [!1, G];
    const Y = h(s.currentSubscriptions, X);
    let k = !0;
    if (Y) {
      g || (g = setTimeout(() => {
        const T = j(s.currentSubscriptions), [, A] = kh(m, () => T);
        U.next(u.internalActions.subscriptionsUpdated(A)), m = T, g = null;
      }, 500));
      const b = typeof X.type == "string" && !!X.type.startsWith(d), z = c.rejected.match(X) && X.meta.condition && !!X.meta.arg.subscribe;
      k = !b && !z;
    }
    return [k, !1];
  };
}, Qg = 2147483647 / 1e3 - 1, Bg = ({
  reducerPath: u,
  api: c,
  queryThunk: s,
  context: r,
  internalState: d,
  selectors: {
    selectQueryEntry: m,
    selectConfig: g
  },
  getRunningQueryThunk: O,
  mwApi: p
}) => {
  const {
    removeQueryResult: h,
    unsubscribeQueryResult: q,
    cacheEntriesUpserted: S
  } = c.internalActions, C = Tn(q.match, s.fulfilled, s.rejected, S.match);
  function G(b) {
    const z = d.currentSubscriptions.get(b);
    return z ? z.size > 0 : !1;
  }
  const j = {};
  function X(b) {
    for (const z of b.values())
      z?.abort?.();
  }
  const U = (b, z) => {
    const T = z.getState(), A = g(T);
    if (C(b)) {
      let R;
      if (S.match(b))
        R = b.payload.map((V) => V.queryDescription.queryCacheKey);
      else {
        const {
          queryCacheKey: V
        } = q.match(b) ? b.payload : b.meta.arg;
        R = [V];
      }
      Y(R, z, A);
    }
    if (c.util.resetApiState.match(b)) {
      for (const [R, V] of Object.entries(j))
        V && clearTimeout(V), delete j[R];
      X(d.runningQueries), X(d.runningMutations);
    }
    if (r.hasRehydrationInfo(b)) {
      const {
        queries: R
      } = r.extractRehydrationInfo(b);
      Y(Object.keys(R), z, A);
    }
  };
  function Y(b, z, T) {
    const A = z.getState();
    for (const R of b) {
      const V = m(A, R);
      V?.endpointName && k(R, V.endpointName, z, T);
    }
  }
  function k(b, z, T, A) {
    const V = va(r, z)?.keepUnusedDataFor ?? A.keepUnusedDataFor;
    if (V === 1 / 0)
      return;
    const L = Math.max(0, Math.min(V, Qg));
    if (!G(b)) {
      const x = j[b];
      x && clearTimeout(x), j[b] = setTimeout(() => {
        if (!G(b)) {
          const _ = m(T.getState(), b);
          _?.endpointName && T.dispatch(O(_.endpointName, _.originalArgs))?.abort(), T.dispatch(h({
            queryCacheKey: b
          }));
        }
        delete j[b];
      }, L * 1e3);
    }
  }
  return U;
}, Th = new Error("Promise never resolved before cacheEntryRemoved."), Hg = ({
  api: u,
  reducerPath: c,
  context: s,
  queryThunk: r,
  mutationThunk: d,
  internalState: m,
  selectors: {
    selectQueryEntry: g,
    selectApiState: O
  }
}) => {
  const p = gs(r), h = gs(d), q = el(r, d), S = {}, {
    removeQueryResult: C,
    removeMutationResult: G,
    cacheEntriesUpserted: j
  } = u.internalActions;
  function X(T, A, R) {
    const V = S[T];
    V?.valueResolved && (V.valueResolved({
      data: A,
      meta: R
    }), delete V.valueResolved);
  }
  function U(T) {
    const A = S[T];
    A && (delete S[T], A.cacheEntryRemoved());
  }
  function Y(T) {
    const {
      arg: A,
      requestId: R
    } = T.meta, {
      endpointName: V,
      originalArgs: L
    } = A;
    return [V, L, R];
  }
  const k = (T, A, R) => {
    const V = b(T);
    function L(x, _, M, w) {
      const W = g(R, _), ae = g(A.getState(), _);
      !W && ae && z(x, w, _, A, M);
    }
    if (r.pending.match(T)) {
      const [x, _, M] = Y(T);
      L(x, V, M, _);
    } else if (j.match(T))
      for (const {
        queryDescription: x,
        value: _
      } of T.payload) {
        const {
          endpointName: M,
          originalArgs: w,
          queryCacheKey: W
        } = x;
        L(M, W, T.meta.requestId, w), X(W, _, {});
      }
    else if (d.pending.match(T)) {
      if (A.getState()[c].mutations[V]) {
        const [_, M, w] = Y(T);
        z(_, M, V, A, w);
      }
    } else if (q(T))
      X(V, T.payload, T.meta.baseQueryMeta);
    else if (C.match(T) || G.match(T))
      U(V);
    else if (u.util.resetApiState.match(T))
      for (const x of Object.keys(S))
        U(x);
  };
  function b(T) {
    return p(T) ? T.meta.arg.queryCacheKey : h(T) ? T.meta.arg.fixedCacheKey ?? T.meta.requestId : C.match(T) ? T.payload.queryCacheKey : G.match(T) ? Ou(T.payload) : "";
  }
  function z(T, A, R, V, L) {
    const x = va(s, T), _ = x?.onCacheEntryAdded;
    if (!_) return;
    const M = {}, w = new Promise((te) => {
      M.cacheEntryRemoved = te;
    }), W = Promise.race([new Promise((te) => {
      M.valueResolved = te;
    }), w.then(() => {
      throw Th;
    })]);
    W.catch(() => {
    }), S[R] = M;
    const ae = u.endpoints[T].select(Tc(x) ? A : R), D = V.dispatch((te, ue, y) => y), F = {
      ...V,
      getCacheEntry: () => ae(V.getState()),
      requestId: L,
      extra: D,
      updateCachedData: Tc(x) ? (te) => V.dispatch(u.util.updateQueryData(T, A, te)) : void 0,
      cacheDataLoaded: W,
      cacheEntryRemoved: w
    }, I = _(A, F);
    Promise.resolve(I).catch((te) => {
      if (te !== Th)
        throw te;
    });
  }
  return k;
}, wg = ({
  api: u,
  context: {
    apiUid: c
  },
  reducerPath: s
}) => (r, d) => {
  u.util.resetApiState.match(r) && d.dispatch(u.internalActions.middlewareRegistered(c));
}, Yg = ({
  reducerPath: u,
  context: c,
  context: {
    endpointDefinitions: s
  },
  mutationThunk: r,
  queryThunk: d,
  api: m,
  assertTagType: g,
  refetchQuery: O,
  internalState: p
}) => {
  const {
    removeQueryResult: h
  } = m.internalActions, q = Tn(el(r), Oc(r)), S = Tn(el(d, r), ya(d, r));
  let C = [], G = 0;
  const j = (Y, k) => {
    (d.pending.match(Y) || r.pending.match(Y)) && G++, S(Y) && (G = Math.max(0, G - 1)), q(Y) ? U(fy(Y, "invalidatesTags", s, g), k) : S(Y) ? U([], k) : m.util.invalidateTags.match(Y) && U(qs(Y.payload, void 0, void 0, void 0, void 0, g), k);
  };
  function X() {
    return G > 0;
  }
  function U(Y, k) {
    const b = k.getState(), z = b[u];
    if (C.push(...Y), z.config.invalidationBehavior === "delayed" && X())
      return;
    const T = C;
    if (C = [], T.length === 0) return;
    const A = m.util.selectInvalidatedBy(b, T);
    c.batch(() => {
      const R = Array.from(A.values());
      for (const {
        queryCacheKey: V
      } of R) {
        const L = z.queries[V], x = Ec(p.currentSubscriptions, V, bs);
        L && (x.size === 0 ? k.dispatch(h({
          queryCacheKey: V
        })) : L.status !== An && k.dispatch(O(L)));
      }
    });
  }
  return j;
}, Lg = ({
  reducerPath: u,
  queryThunk: c,
  api: s,
  refetchQuery: r,
  internalState: d
}) => {
  const {
    currentPolls: m,
    currentSubscriptions: g
  } = d, O = /* @__PURE__ */ new Set();
  let p = null;
  const h = (U, Y) => {
    (s.internalActions.updateSubscriptionOptions.match(U) || s.internalActions.unsubscribeQueryResult.match(U)) && q(U.payload.queryCacheKey, Y), (c.pending.match(U) || c.rejected.match(U) && U.meta.condition) && q(U.meta.arg.queryCacheKey, Y), (c.fulfilled.match(U) || c.rejected.match(U) && !U.meta.condition) && S(U.meta.arg, Y), s.util.resetApiState.match(U) && (j(), p && (clearTimeout(p), p = null), O.clear());
  };
  function q(U, Y) {
    O.add(U), p || (p = setTimeout(() => {
      for (const k of O)
        C({
          queryCacheKey: k
        }, Y);
      O.clear(), p = null;
    }, 0));
  }
  function S({
    queryCacheKey: U
  }, Y) {
    const k = Y.getState()[u], b = k.queries[U], z = g.get(U);
    if (!b || b.status === An) return;
    const {
      lowestPollingInterval: T,
      skipPollingIfUnfocused: A
    } = X(z);
    if (!Number.isFinite(T)) return;
    const R = m.get(U);
    R?.timeout && (clearTimeout(R.timeout), R.timeout = void 0);
    const V = Date.now() + T;
    m.set(U, {
      nextPollTimestamp: V,
      pollingInterval: T,
      timeout: setTimeout(() => {
        (k.config.focused || !A) && Y.dispatch(r(b)), S({
          queryCacheKey: U
        }, Y);
      }, T)
    });
  }
  function C({
    queryCacheKey: U
  }, Y) {
    const b = Y.getState()[u].queries[U], z = g.get(U);
    if (!b || b.status === An)
      return;
    const {
      lowestPollingInterval: T
    } = X(z);
    if (!Number.isFinite(T)) {
      G(U);
      return;
    }
    const A = m.get(U), R = Date.now() + T;
    (!A || R < A.nextPollTimestamp) && S({
      queryCacheKey: U
    }, Y);
  }
  function G(U) {
    const Y = m.get(U);
    Y?.timeout && clearTimeout(Y.timeout), m.delete(U);
  }
  function j() {
    for (const U of m.keys())
      G(U);
  }
  function X(U = /* @__PURE__ */ new Map()) {
    let Y = !1, k = Number.POSITIVE_INFINITY;
    for (const b of U.values())
      b.pollingInterval && (k = Math.min(b.pollingInterval, k), Y = b.skipPollingIfUnfocused || Y);
    return {
      lowestPollingInterval: k,
      skipPollingIfUnfocused: Y
    };
  }
  return h;
}, Gg = ({
  api: u,
  context: c,
  queryThunk: s,
  mutationThunk: r
}) => {
  const d = Os(s, r), m = ya(s, r), g = el(s, r), O = {};
  return (h, q) => {
    if (d(h)) {
      const {
        requestId: S,
        arg: {
          endpointName: C,
          originalArgs: G
        }
      } = h.meta, j = va(c, C), X = j?.onQueryStarted;
      if (X) {
        const U = {}, Y = new Promise((T, A) => {
          U.resolve = T, U.reject = A;
        });
        Y.catch(() => {
        }), O[S] = U;
        const k = u.endpoints[C].select(Tc(j) ? G : S), b = q.dispatch((T, A, R) => R), z = {
          ...q,
          getCacheEntry: () => k(q.getState()),
          requestId: S,
          extra: b,
          updateCachedData: Tc(j) ? (T) => q.dispatch(u.util.updateQueryData(C, G, T)) : void 0,
          queryFulfilled: Y
        };
        X(G, z);
      }
    } else if (g(h)) {
      const {
        requestId: S,
        baseQueryMeta: C
      } = h.meta;
      O[S]?.resolve({
        data: h.payload,
        meta: C
      }), delete O[S];
    } else if (m(h)) {
      const {
        requestId: S,
        rejectedWithValue: C,
        baseQueryMeta: G
      } = h.meta;
      O[S]?.reject({
        error: h.payload ?? h.error,
        isUnhandledError: !C,
        meta: G
      }), delete O[S];
    }
  };
}, Vg = ({
  reducerPath: u,
  context: c,
  api: s,
  refetchQuery: r,
  internalState: d
}) => {
  const {
    removeQueryResult: m
  } = s.internalActions, g = (p, h) => {
    js.match(p) && O(h, "refetchOnFocus"), xs.match(p) && O(h, "refetchOnReconnect");
  };
  function O(p, h) {
    const q = p.getState()[u], S = q.queries, C = d.currentSubscriptions;
    c.batch(() => {
      for (const G of C.keys()) {
        const j = S[G], X = C.get(G);
        if (!X || !j) continue;
        const U = [...X.values()];
        (U.some((k) => k[h] === !0) || U.every((k) => k[h] === void 0) && q.config[h]) && (X.size === 0 ? p.dispatch(m({
          queryCacheKey: G
        })) : j.status !== An && p.dispatch(r(j)));
      }
    });
  }
  return g;
};
function Xg(u) {
  const {
    reducerPath: c,
    queryThunk: s,
    api: r,
    context: d,
    getInternalState: m
  } = u, {
    apiUid: g
  } = d, O = {
    invalidateTags: kt(`${c}/invalidateTags`)
  }, p = (C) => C.type.startsWith(`${c}/`), h = [wg, Bg, Yg, Lg, Hg, Gg];
  return {
    middleware: (C) => {
      let G = !1;
      const j = m(C.dispatch), X = {
        ...u,
        internalState: j,
        refetchQuery: S,
        isThisApiSliceAction: p,
        mwApi: C
      }, U = h.map((b) => b(X)), Y = qg(X), k = Vg(X);
      return (b) => (z) => {
        if (!wh(z))
          return b(z);
        G || (G = !0, C.dispatch(r.internalActions.middlewareRegistered(g)));
        const T = {
          ...C,
          next: b
        }, A = C.getState(), [R, V] = Y(z, T, A);
        let L;
        if (R ? L = b(z) : L = V, C.getState()[c] && (k(z, T, A), p(z) || d.hasRehydrationInfo(z)))
          for (const x of U)
            x(z, T, A);
        return L;
      };
    },
    actions: O
  };
  function S(C) {
    return u.api.endpoints[C.endpointName].initiate(C.originalArgs, {
      subscribe: !1,
      forceRefetch: !0
    });
  }
}
var Ah = /* @__PURE__ */ Symbol(), oy = ({
  createSelector: u = zs
} = {}) => ({
  name: Ah,
  init(c, {
    baseQuery: s,
    tagTypes: r,
    reducerPath: d,
    serializeQueryArgs: m,
    keepUnusedDataFor: g,
    refetchOnMountOrArgChange: O,
    refetchOnFocus: p,
    refetchOnReconnect: h,
    invalidationBehavior: q,
    onSchemaFailure: S,
    catchSchemaFailure: C,
    skipSchemaValidation: G
  }, j) {
    N1();
    const X = (ie) => ie;
    Object.assign(c, {
      reducerPath: d,
      endpoints: {},
      internalActions: {
        onOnline: xs,
        onOffline: ny,
        onFocus: js,
        onFocusLost: ty
      },
      util: {}
    });
    const U = xg({
      serializeQueryArgs: m,
      reducerPath: d,
      createSelector: u
    }), {
      selectInvalidatedBy: Y,
      selectCachedArgsForQuery: k,
      buildQuerySelector: b,
      buildInfiniteQuerySelector: z,
      buildMutationSelector: T
    } = U;
    bn(c.util, {
      selectInvalidatedBy: Y,
      selectCachedArgsForQuery: k
    });
    const {
      queryThunk: A,
      infiniteQueryThunk: R,
      mutationThunk: V,
      patchQueryData: L,
      updateQueryData: x,
      upsertQueryData: _,
      prefetch: M,
      buildMatchThunkActions: w
    } = Ug({
      baseQuery: s,
      reducerPath: d,
      context: j,
      api: c,
      serializeQueryArgs: m,
      assertTagType: X,
      selectors: U,
      onSchemaFailure: S,
      catchSchemaFailure: C,
      skipSchemaValidation: G
    }), {
      reducer: W,
      actions: ae
    } = jg({
      context: j,
      queryThunk: A,
      mutationThunk: V,
      serializeQueryArgs: m,
      reducerPath: d,
      assertTagType: X,
      config: {
        refetchOnFocus: p,
        refetchOnReconnect: h,
        refetchOnMountOrArgChange: O,
        keepUnusedDataFor: g,
        reducerPath: d,
        invalidationBehavior: q
      }
    });
    bn(c.util, {
      patchQueryData: L,
      updateQueryData: x,
      upsertQueryData: _,
      prefetch: M,
      resetApiState: ae.resetApiState,
      upsertQueryEntries: ae.cacheEntriesUpserted
    }), bn(c.internalActions, ae);
    const D = /* @__PURE__ */ new WeakMap(), F = (ie) => Ec(D, ie, () => ({
      currentSubscriptions: /* @__PURE__ */ new Map(),
      currentPolls: /* @__PURE__ */ new Map(),
      runningQueries: /* @__PURE__ */ new Map(),
      runningMutations: /* @__PURE__ */ new Map()
    })), {
      buildInitiateQuery: I,
      buildInitiateInfiniteQuery: te,
      buildInitiateMutation: ue,
      getRunningMutationThunk: y,
      getRunningMutationsThunk: K,
      getRunningQueriesThunk: le,
      getRunningQueryThunk: ne
    } = Ng({
      queryThunk: A,
      mutationThunk: V,
      infiniteQueryThunk: R,
      api: c,
      serializeQueryArgs: m,
      context: j,
      getInternalState: F
    });
    bn(c.util, {
      getRunningMutationThunk: y,
      getRunningMutationsThunk: K,
      getRunningQueryThunk: ne,
      getRunningQueriesThunk: le
    });
    const {
      middleware: ce,
      actions: re
    } = Xg({
      reducerPath: d,
      context: j,
      queryThunk: A,
      mutationThunk: V,
      infiniteQueryThunk: R,
      api: c,
      assertTagType: X,
      selectors: U,
      getRunningQueryThunk: ne,
      getInternalState: F
    });
    return bn(c.util, re), bn(c, {
      reducer: W,
      middleware: ce
    }), {
      name: Ah,
      injectEndpoint(ie, Se) {
        const de = c, pe = de.endpoints[ie] ??= {};
        Nc(Se) && bn(pe, {
          name: ie,
          select: b(ie, Se),
          initiate: I(ie, Se)
        }, w(A, ie)), zg(Se) && bn(pe, {
          name: ie,
          select: T(),
          initiate: ue(ie)
        }, w(V, ie)), Uc(Se) && bn(pe, {
          name: ie,
          select: z(ie, Se),
          initiate: te(ie, Se)
        }, w(A, ie));
      }
    };
  }
});
oy();
function fc(u) {
  return u.replace(u[0], u[0].toUpperCase());
}
var Zg = "query", Kg = "mutation", Jg = "infinitequery";
function kg(u) {
  return u.type === Zg;
}
function Fg(u) {
  return u.type === Kg;
}
function dy(u) {
  return u.type === Jg;
}
function hu(u, ...c) {
  return Object.assign(u, ...c);
}
var is = /* @__PURE__ */ Symbol();
function cs(u) {
  const c = se.useRef(u), s = se.useMemo(() => Ns(c.current, u), [u]);
  return se.useEffect(() => {
    c.current !== s && (c.current = s);
  }, [s]), s;
}
function ma(u) {
  const c = se.useRef(u);
  return se.useEffect(() => {
    Su(c.current, u) || (c.current = u);
  }, [u]), Su(c.current, u) ? c.current : u;
}
var Wg = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", $g = /* @__PURE__ */ Wg(), Ig = () => typeof navigator < "u" && navigator.product === "ReactNative", Pg = /* @__PURE__ */ Ig(), ep = () => $g || Pg ? se.useLayoutEffect : se.useEffect, tp = /* @__PURE__ */ ep(), Mh = (u) => u.isUninitialized ? {
  ...u,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: u.data === void 0,
  // This is the one place where we still have to use `QueryStatus` as an enum,
  // since it's the only reference in the React package and not in the core.
  status: Ph.pending
} : u;
function fs(u, ...c) {
  const s = {};
  return c.forEach((r) => {
    s[r] = u[r];
  }), s;
}
var rs = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
function np({
  api: u,
  moduleOptions: {
    batch: c,
    hooks: {
      useDispatch: s,
      useSelector: r,
      useStore: d
    },
    unstable__sideEffectsInRender: m,
    createSelector: g
  },
  serializeQueryArgs: O,
  context: p
}) {
  const h = m ? (A) => A() : se.useEffect, q = (A) => A.current?.unsubscribe?.(), S = p.endpointDefinitions;
  return {
    buildQueryHooks: b,
    buildInfiniteQueryHooks: z,
    buildMutationHook: T,
    usePrefetch: j
  };
  function C(A, R, V) {
    if (R?.endpointName && A.isUninitialized) {
      const {
        endpointName: W
      } = R, ae = S[W];
      V !== Jt && O({
        queryArgs: R.originalArgs,
        endpointDefinition: ae,
        endpointName: W
      }) === O({
        queryArgs: V,
        endpointDefinition: ae,
        endpointName: W
      }) && (R = void 0);
    }
    let L = A.isSuccess ? A.data : R?.data;
    L === void 0 && (L = A.data);
    const x = L !== void 0, _ = A.isLoading, M = (!R || R.isLoading || R.isUninitialized) && !x && _, w = A.isSuccess || x && (_ && !R?.isError || A.isUninitialized);
    return {
      ...A,
      data: L,
      currentData: A.data,
      isFetching: _,
      isLoading: M,
      isSuccess: w
    };
  }
  function G(A, R, V) {
    if (R?.endpointName && A.isUninitialized) {
      const {
        endpointName: W
      } = R, ae = S[W];
      V !== Jt && O({
        queryArgs: R.originalArgs,
        endpointDefinition: ae,
        endpointName: W
      }) === O({
        queryArgs: V,
        endpointDefinition: ae,
        endpointName: W
      }) && (R = void 0);
    }
    let L = A.isSuccess ? A.data : R?.data;
    L === void 0 && (L = A.data);
    const x = L !== void 0, _ = A.isLoading, M = (!R || R.isLoading || R.isUninitialized) && !x && _, w = A.isSuccess || _ && x;
    return {
      ...A,
      data: L,
      currentData: A.data,
      isFetching: _,
      isLoading: M,
      isSuccess: w
    };
  }
  function j(A, R) {
    const V = s(), L = ma(R);
    return se.useCallback((x, _) => V(u.util.prefetch(A, x, {
      ...L,
      ..._
    })), [A, V, L]);
  }
  function X(A, R, {
    refetchOnReconnect: V,
    refetchOnFocus: L,
    refetchOnMountOrArgChange: x,
    skip: _ = !1,
    pollingInterval: M = 0,
    skipPollingIfUnfocused: w = !1,
    ...W
  } = {}) {
    const {
      initiate: ae
    } = u.endpoints[A], D = s(), F = se.useRef(void 0);
    if (!F.current) {
      const de = D(u.internalActions.internal_getRTKQSubscriptions());
      F.current = de;
    }
    const I = cs(_ ? Jt : R), te = ma({
      refetchOnReconnect: V,
      refetchOnFocus: L,
      pollingInterval: M,
      skipPollingIfUnfocused: w
    }), ue = W.initialPageParam, y = ma(ue), K = W.refetchCachedPages, le = ma(K), ne = se.useRef(void 0);
    let {
      queryCacheKey: ce,
      requestId: re
    } = ne.current || {}, ie = !1;
    ce && re && (ie = F.current.isRequestSubscribed(ce, re));
    const Se = !ie && ne.current !== void 0;
    return h(() => {
      Se && (ne.current = void 0);
    }, [Se]), h(() => {
      const de = ne.current;
      if (I === Jt) {
        de?.unsubscribe(), ne.current = void 0;
        return;
      }
      const pe = ne.current?.subscriptionOptions;
      if (!de || de.arg !== I) {
        de?.unsubscribe();
        const rt = D(ae(I, {
          subscriptionOptions: te,
          forceRefetch: x,
          ...dy(S[A]) ? {
            initialPageParam: y,
            refetchCachedPages: le
          } : {}
        }));
        ne.current = rt;
      } else te !== pe && de.updateSubscriptionOptions(te);
    }, [D, ae, x, I, te, Se, y, le, A]), [ne, D, ae, te];
  }
  function U(A, R) {
    return (L, {
      skip: x = !1,
      selectFromResult: _
    } = {}) => {
      const {
        select: M
      } = u.endpoints[A], w = cs(x ? Jt : L), W = se.useRef(void 0), ae = se.useMemo(() => (
        // Normally ts-ignores are bad and should be avoided, but we're
        // already casting this selector to be `Selector<any>` anyway,
        // so the inconsistencies don't matter here
        // @ts-ignore
        g([
          // @ts-ignore
          M(w),
          (ue, y) => y,
          (ue) => w
        ], R, {
          memoizeOptions: {
            resultEqualityCheck: Su
          }
        })
      ), [M, w]), D = se.useMemo(() => _ ? g([ae], _, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : ae, [ae, _]), F = r((ue) => D(ue, W.current), Su), I = d(), te = ae(I.getState(), W.current);
      return tp(() => {
        W.current = te;
      }, [te]), F;
    };
  }
  function Y(A) {
    se.useEffect(() => () => {
      q(A), A.current = void 0;
    }, [A]);
  }
  function k(A) {
    if (!A.current) throw new Error(Vt(38));
    return A.current.refetch();
  }
  function b(A) {
    const R = (x, _ = {}) => {
      const [M] = X(A, x, _);
      return Y(M), se.useMemo(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => k(M)
      }), [M]);
    }, V = ({
      refetchOnReconnect: x,
      refetchOnFocus: _,
      pollingInterval: M = 0,
      skipPollingIfUnfocused: w = !1
    } = {}) => {
      const {
        initiate: W
      } = u.endpoints[A], ae = s(), [D, F] = se.useState(is), I = se.useRef(void 0), te = ma({
        refetchOnReconnect: x,
        refetchOnFocus: _,
        pollingInterval: M,
        skipPollingIfUnfocused: w
      });
      h(() => {
        const le = I.current?.subscriptionOptions;
        te !== le && I.current?.updateSubscriptionOptions(te);
      }, [te]);
      const ue = se.useRef(te);
      h(() => {
        ue.current = te;
      }, [te]);
      const y = se.useCallback(function(le, ne = !1) {
        let ce;
        return c(() => {
          q(I), I.current = ce = ae(W(le, {
            subscriptionOptions: ue.current,
            forceRefetch: !ne
          })), F(le);
        }), ce;
      }, [ae, W]), K = se.useCallback(() => {
        I.current?.queryCacheKey && ae(u.internalActions.removeQueryResult({
          queryCacheKey: I.current?.queryCacheKey
        }));
      }, [ae]);
      return se.useEffect(() => () => {
        q(I);
      }, []), se.useEffect(() => {
        D !== is && !I.current && y(D, !0);
      }, [D, y]), se.useMemo(() => [y, D, {
        reset: K
      }], [y, D, K]);
    }, L = U(A, C);
    return {
      useQueryState: L,
      useQuerySubscription: R,
      useLazyQuerySubscription: V,
      useLazyQuery(x) {
        const [_, M, {
          reset: w
        }] = V(x), W = L(M, {
          ...x,
          skip: M === is
        }), ae = se.useMemo(() => ({
          lastArg: M
        }), [M]);
        return se.useMemo(() => [_, {
          ...W,
          reset: w
        }, ae], [_, W, w, ae]);
      },
      useQuery(x, _) {
        const M = R(x, _), w = L(x, {
          selectFromResult: x === Jt || _?.skip ? void 0 : Mh,
          ..._
        }), W = fs(w, ...rs);
        return se.useDebugValue(W), se.useMemo(() => ({
          ...w,
          ...M
        }), [w, M]);
      }
    };
  }
  function z(A) {
    const R = (L, x = {}) => {
      const [_, M, w, W] = X(A, L, x), ae = se.useRef(W);
      h(() => {
        ae.current = W;
      }, [W]);
      const D = x.refetchCachedPages, F = ma(D), I = se.useCallback(function(y, K) {
        let le;
        return c(() => {
          q(_), _.current = le = M(w(y, {
            subscriptionOptions: ae.current,
            direction: K
          }));
        }), le;
      }, [_, M, w]);
      Y(_);
      const te = cs(x.skip ? Jt : L), ue = se.useCallback((y) => {
        if (!_.current) throw new Error(Vt(38));
        const K = {
          refetchCachedPages: y?.refetchCachedPages ?? F
        };
        return _.current.refetch(K);
      }, [_, F]);
      return se.useMemo(() => ({
        trigger: I,
        /**
         * A method to manually refetch data for the query
         */
        refetch: ue,
        fetchNextPage: () => I(te, "forward"),
        fetchPreviousPage: () => I(te, "backward")
      }), [ue, I, te]);
    }, V = U(A, G);
    return {
      useInfiniteQueryState: V,
      useInfiniteQuerySubscription: R,
      useInfiniteQuery(L, x) {
        const {
          refetch: _,
          fetchNextPage: M,
          fetchPreviousPage: w
        } = R(L, x), W = V(L, {
          selectFromResult: L === Jt || x?.skip ? void 0 : Mh,
          ...x
        }), ae = fs(W, ...rs, "hasNextPage", "hasPreviousPage");
        return se.useDebugValue(ae), se.useMemo(() => ({
          ...W,
          fetchNextPage: M,
          fetchPreviousPage: w,
          refetch: _
        }), [W, M, w, _]);
      }
    };
  }
  function T(A) {
    return ({
      selectFromResult: R,
      fixedCacheKey: V
    } = {}) => {
      const {
        select: L,
        initiate: x
      } = u.endpoints[A], _ = s(), [M, w] = se.useState();
      se.useEffect(() => () => {
        M?.arg.fixedCacheKey || M?.reset();
      }, [M]);
      const W = se.useCallback(function(le) {
        const ne = _(x(le, {
          fixedCacheKey: V
        }));
        return w(ne), ne;
      }, [_, x, V]), {
        requestId: ae
      } = M || {}, D = se.useMemo(() => L({
        fixedCacheKey: V,
        requestId: M?.requestId
      }), [V, M, L]), F = se.useMemo(() => R ? g([D], R) : D, [R, D]), I = r(F, Su), te = V == null ? M?.arg.originalArgs : void 0, ue = se.useCallback(() => {
        c(() => {
          M && w(void 0), V && _(u.internalActions.removeMutationResult({
            requestId: ae,
            fixedCacheKey: V
          }));
        });
      }, [_, V, M, ae]), y = fs(I, ...rs, "endpointName");
      se.useDebugValue(y);
      const K = se.useMemo(() => ({
        ...I,
        originalArgs: te,
        reset: ue
      }), [I, te, ue]);
      return se.useMemo(() => [W, K], [W, K]);
    };
  }
}
var lp = /* @__PURE__ */ Symbol(), ap = ({
  batch: u = s1,
  hooks: c = {
    useDispatch: qh,
    useSelector: Qh,
    useStore: xh
  },
  createSelector: s = zs,
  unstable__sideEffectsInRender: r = !1,
  ...d
} = {}) => ({
  name: lp,
  init(m, {
    serializeQueryArgs: g
  }, O) {
    const p = m, {
      buildQueryHooks: h,
      buildInfiniteQueryHooks: q,
      buildMutationHook: S,
      usePrefetch: C
    } = np({
      api: m,
      moduleOptions: {
        batch: u,
        hooks: c,
        unstable__sideEffectsInRender: r,
        createSelector: s
      },
      serializeQueryArgs: g,
      context: O
    });
    return hu(p, {
      usePrefetch: C
    }), hu(O, {
      batch: u
    }), {
      injectEndpoint(G, j) {
        if (kg(j)) {
          const {
            useQuery: X,
            useLazyQuery: U,
            useLazyQuerySubscription: Y,
            useQueryState: k,
            useQuerySubscription: b
          } = h(G);
          hu(p.endpoints[G], {
            useQuery: X,
            useLazyQuery: U,
            useLazyQuerySubscription: Y,
            useQueryState: k,
            useQuerySubscription: b
          }), m[`use${fc(G)}Query`] = X, m[`useLazy${fc(G)}Query`] = U;
        }
        if (Fg(j)) {
          const X = S(G);
          hu(p.endpoints[G], {
            useMutation: X
          }), m[`use${fc(G)}Mutation`] = X;
        } else if (dy(j)) {
          const {
            useInfiniteQuery: X,
            useInfiniteQuerySubscription: U,
            useInfiniteQueryState: Y
          } = q(G);
          hu(p.endpoints[G], {
            useInfiniteQuery: X,
            useInfiniteQuerySubscription: U,
            useInfiniteQueryState: Y
          }), m[`use${fc(G)}InfiniteQuery`] = X;
        }
      }
    };
  }
}), up = /* @__PURE__ */ sy(oy(), ap());
let jc = {
  apiUrl: "http://localhost:3000",
  apiToken: ""
};
const ip = (u) => {
  jc = u;
}, cp = Mg({
  baseUrl: "",
  prepareHeaders: (u) => (u.set("X-API-Token", jc.apiToken), u)
}), fp = async (u, c, s) => {
  const r = typeof u == "string" ? u : u.url, d = `${jc.apiUrl}${r}`, m = typeof u == "string" ? d : { ...u, url: d };
  return cp(m, c, s);
}, oc = up({
  reducerPath: "bookingApi",
  baseQuery: fp,
  tagTypes: ["Slots", "Config"],
  endpoints: (u) => ({
    // Получить настройки клиента
    getClientConfig: u.query({
      query: () => `/public/config/${jc.apiToken}`,
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
  useGetAvailableSlotsQuery: rp,
  useCreateBookingMutation: sp
} = oc, op = {
  selectedDate: null,
  currentMonth: (/* @__PURE__ */ new Date()).toISOString()
}, my = $n({
  name: "calendar",
  initialState: op,
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
}), { setSelectedDate: dp, setCurrentMonth: IS, nextMonth: mp, previousMonth: hp } = my.actions, yp = my.reducer, Ch = {
  currentStep: "calendar",
  selectedSlot: null,
  formData: {
    name: "",
    email: "",
    phone: "",
    description: ""
  },
  bookingResult: null
}, hy = $n({
  name: "booking",
  initialState: Ch,
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
      u.currentStep = "calendar", u.selectedSlot = null, u.formData = Ch.formData, u.bookingResult = null;
    }
  }
}), {
  setCurrentStep: Ts,
  setSelectedSlot: Dh,
  updateFormData: vp,
  setBookingResult: gp,
  resetBooking: pp
} = hy.actions, Sp = hy.reducer, bp = W1({
  reducer: {
    [oc.reducerPath]: oc.reducer,
    calendar: yp,
    booking: Sp
  },
  middleware: (u) => u().concat(oc.middleware)
});
var ss = { exports: {} }, yu = {};
var zh;
function _p() {
  if (zh) return yu;
  zh = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(r, d, m) {
    var g = null;
    if (m !== void 0 && (g = "" + m), d.key !== void 0 && (g = "" + d.key), "key" in d) {
      m = {};
      for (var O in d)
        O !== "key" && (m[O] = d[O]);
    } else m = d;
    return d = m.ref, {
      $$typeof: u,
      type: r,
      key: g,
      ref: d !== void 0 ? d : null,
      props: m
    };
  }
  return yu.Fragment = c, yu.jsx = s, yu.jsxs = s, yu;
}
var Oh;
function Ep() {
  return Oh || (Oh = 1, ss.exports = _p()), ss.exports;
}
var ee = Ep();
const xc = qh.withTypes(), ga = Qh.withTypes(), Tp = "_calendar_nv465_1", Ap = "_header_nv465_7", Mp = "_monthYear_nv465_14", Cp = "_month_nv465_14", Dp = "_year_nv465_27", zp = "_navigation_nv465_33", Op = "_navButton_nv465_38", Rp = "_weekDays_nv465_47", Np = "_weekDay_nv465_47", Up = "_daysGrid_nv465_63", jp = "_dayCell_nv465_70", xp = "_selected_nv465_87", qp = "_disabled_nv465_92", pt = {
  calendar: Tp,
  header: Ap,
  monthYear: Mp,
  month: Cp,
  year: Dp,
  navigation: zp,
  navButton: Op,
  weekDays: Rp,
  weekDay: Np,
  daysGrid: Up,
  dayCell: jp,
  selected: xp,
  disabled: qp
}, Qp = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2020C0%208.95431%208.95431%200%2020%200C31.0457%200%2040%208.95431%2040%2020C40%2031.0457%2031.0457%2040%2020%2040C8.95431%2040%200%2031.0457%200%2020Z'%20fill='%232C2C2E'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M22.495%2026.495C22.7684%2026.2216%2022.7684%2025.7784%2022.495%2025.505L16.99%2020L22.495%2014.495C22.7684%2014.2216%2022.7684%2013.7784%2022.495%2013.505C22.2217%2013.2317%2021.7784%2013.2317%2021.5051%2013.505L15.5051%2019.505C15.2317%2019.7784%2015.2317%2020.2216%2015.5051%2020.495L21.5051%2026.495C21.7784%2026.7684%2022.2217%2026.7684%2022.495%2026.495Z'%20fill='%23F2F2F2'/%3e%3c/svg%3e", Bp = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2020C0%208.95431%208.95431%200%2020%200C31.0457%200%2040%208.95431%2040%2020C40%2031.0457%2031.0457%2040%2020%2040C8.95431%2040%200%2031.0457%200%2020Z'%20fill='%232C2C2E'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.505%2013.505C17.2316%2013.7784%2017.2316%2014.2216%2017.505%2014.495L23.01%2020L17.505%2025.505C17.2316%2025.7784%2017.2316%2026.2216%2017.505%2026.495C17.7783%2026.7683%2018.2216%2026.7683%2018.4949%2026.495L24.4949%2020.495C24.7683%2020.2216%2024.7683%2019.7784%2024.4949%2019.505L18.4949%2013.505C18.2216%2013.2316%2017.7783%2013.2316%2017.505%2013.505Z'%20fill='%23F2F2F2'/%3e%3c/svg%3e", Hp = () => {
  const u = xc(), { selectedDate: c, currentMonth: s } = ga((S) => S.calendar), r = se.useMemo(() => {
    const S = new Date(s), C = S.getFullYear(), G = S.getMonth(), j = new Date(C, G, 1), U = new Date(C, G + 1, 0).getDate(), Y = j.getDay(), k = [];
    for (let b = 0; b < (Y === 0 ? 6 : Y - 1); b++)
      k.push(null);
    for (let b = 1; b <= U; b++)
      k.push(new Date(C, G, b));
    return k;
  }, [s]), d = new Date(s), m = d.toLocaleDateString("ru-RU", {
    month: "long"
  }), g = d.getFullYear().toString(), O = (S) => {
    const C = /* @__PURE__ */ new Date();
    C.setHours(0, 0, 0, 0), S >= C && u(dp(S.toISOString()));
  }, p = (S) => {
    if (!S || !c) return !1;
    const C = new Date(c);
    return S.getDate() === C.getDate() && S.getMonth() === C.getMonth() && S.getFullYear() === C.getFullYear();
  }, h = (S) => {
    if (!S) return !0;
    const C = /* @__PURE__ */ new Date();
    return C.setHours(0, 0, 0, 0), S < C;
  }, q = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  return /* @__PURE__ */ ee.jsxs("div", { className: pt.calendar, children: [
    /* @__PURE__ */ ee.jsxs("div", { className: pt.header, children: [
      /* @__PURE__ */ ee.jsxs("div", { className: pt.monthYear, children: [
        /* @__PURE__ */ ee.jsx("span", { className: pt.month, children: m }),
        /* @__PURE__ */ ee.jsx("span", { className: pt.year, children: g })
      ] }),
      /* @__PURE__ */ ee.jsxs("div", { className: pt.navigation, children: [
        /* @__PURE__ */ ee.jsx(
          "div",
          {
            className: pt.navButton,
            onClick: () => u(hp()),
            children: /* @__PURE__ */ ee.jsx("img", { src: Qp, alt: "←" })
          }
        ),
        /* @__PURE__ */ ee.jsx(
          "div",
          {
            className: pt.navButton,
            onClick: () => u(mp()),
            children: /* @__PURE__ */ ee.jsx("img", { src: Bp, alt: "→" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ ee.jsx("div", { className: pt.weekDays, children: q.map((S) => /* @__PURE__ */ ee.jsx("div", { className: pt.weekDay, children: S }, S)) }),
    /* @__PURE__ */ ee.jsx("div", { className: pt.daysGrid, children: r.map((S, C) => /* @__PURE__ */ ee.jsx(
      "button",
      {
        className: `${pt.dayCell} ${p(S) ? pt.selected : ""} ${h(S) ? pt.disabled : ""}`,
        onClick: () => S && O(S),
        disabled: h(S),
        children: S ? S.getDate() : ""
      },
      C
    )) })
  ] });
}, wp = "_container_a70pb_1", Yp = "_title_a70pb_10", Lp = "_message_a70pb_18", Gp = "_loading_a70pb_25", Vp = "_spinner_a70pb_30", Xp = "_error_a70pb_45", Zp = "_slotsList_a70pb_52", Kp = "_slotButton_a70pb_61", Jp = "_selected_a70pb_78", kp = "_slotTime_a70pb_83", Fp = "_continueButton_a70pb_103", $e = {
  container: wp,
  title: Yp,
  message: Lp,
  loading: Gp,
  spinner: Vp,
  error: Xp,
  slotsList: Zp,
  slotButton: Kp,
  selected: Jp,
  slotTime: kp,
  continueButton: Fp
}, Wp = () => {
  const u = xc(), { selectedDate: c } = ga((C) => C.calendar), { selectedSlot: s } = ga((C) => C.booking), r = se.useMemo(() => {
    if (!c) return null;
    const C = new Date(c), G = new Date(C);
    G.setHours(0, 0, 0, 0);
    const j = new Date(C);
    return j.setHours(23, 59, 59, 999), {
      startDate: G.toISOString(),
      endDate: j.toISOString(),
      workingHours: "9-18"
    };
  }, [c]), { data: d, isLoading: m, error: g } = rp(r, {
    skip: !r
  });
  se.useEffect(() => {
    u(Dh(null));
  }, [c, u]);
  const O = (C) => {
    u(Dh(C));
  }, p = () => {
    s && u(Ts("form"));
  }, h = (C) => s?.start === C.start && s?.end === C.end, q = (C) => new Date(C).toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit"
  });
  if (!c)
    return /* @__PURE__ */ ee.jsxs("div", { className: $e.container, children: [
      /* @__PURE__ */ ee.jsx("h3", { className: $e.title, children: "Доступное время" }),
      /* @__PURE__ */ ee.jsx("p", { className: $e.message, children: "Выберите дату в календаре" })
    ] });
  if (m)
    return /* @__PURE__ */ ee.jsxs("div", { className: $e.container, children: [
      /* @__PURE__ */ ee.jsx("h3", { className: $e.title, children: "Доступное время" }),
      /* @__PURE__ */ ee.jsxs("div", { className: $e.loading, children: [
        /* @__PURE__ */ ee.jsx("div", { className: $e.spinner }),
        /* @__PURE__ */ ee.jsx("p", { children: "Загрузка слотов..." })
      ] })
    ] });
  if (g)
    return /* @__PURE__ */ ee.jsxs("div", { className: $e.container, children: [
      /* @__PURE__ */ ee.jsx("h3", { className: $e.title, children: "Доступное время" }),
      /* @__PURE__ */ ee.jsx("p", { className: $e.error, children: "Нет доступных слотов" })
    ] });
  const S = d?.data?.slots || [];
  return /* @__PURE__ */ ee.jsxs("div", { className: $e.container, children: [
    /* @__PURE__ */ ee.jsx("h3", { className: $e.title, children: "Доступное время" }),
    S.length === 0 ? /* @__PURE__ */ ee.jsx("p", { className: $e.message, children: "Нет доступных слотов" }) : /* @__PURE__ */ ee.jsxs(ee.Fragment, { children: [
      /* @__PURE__ */ ee.jsx("div", { className: $e.slotsList, children: S.map((C, G) => /* @__PURE__ */ ee.jsx(
        "button",
        {
          className: `${$e.slotButton} ${h(C) ? $e.selected : ""}`,
          onClick: () => O(C),
          children: /* @__PURE__ */ ee.jsx("span", { className: $e.slotTime, children: q(C.start) })
        },
        G
      )) }),
      /* @__PURE__ */ ee.jsx(
        "button",
        {
          className: $e.continueButton,
          onClick: p,
          disabled: !s,
          children: "Продолжить"
        }
      )
    ] })
  ] });
}, $p = "_card_nly0a_1", Ip = "_photoContainer_nly0a_10", Pp = "_photo_nly0a_10", eS = "_photoPlaceholder_nly0a_22", tS = "_initials_nly0a_32", nS = "_name_nly0a_38", lS = "_description_nly0a_45", aS = "_email_nly0a_52", uS = "_divider_nly0a_66", iS = "_info_nly0a_72", cS = "_infoItem_nly0a_77", fS = "_icon_nly0a_85", rS = "_infoText_nly0a_92", sS = "_meetInfo_nly0a_98", oS = "_meetSubject_nly0a_103", dS = "_meetDescription_nly0a_110", we = {
  card: $p,
  photoContainer: Ip,
  photo: Pp,
  photoPlaceholder: eS,
  initials: tS,
  name: nS,
  description: lS,
  email: aS,
  divider: uS,
  info: iS,
  infoItem: cS,
  icon: fS,
  infoText: rS,
  meetInfo: sS,
  meetSubject: oS,
  meetDescription: dS
}, mS = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21%2012C21%2016.9706%2016.9706%2021%2012%2021C7.02944%2021%203%2016.9706%203%2012C3%207.02944%207.02944%203%2012%203C16.9706%203%2021%207.02944%2021%2012ZM12%2019.875C16.3492%2019.875%2019.875%2016.3492%2019.875%2012C19.875%207.65076%2016.3492%204.125%2012%204.125C7.65076%204.125%204.125%207.65076%204.125%2012C4.125%2016.3492%207.65076%2019.875%2012%2019.875Z'%20fill='%232C2C2E'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12%206.9375C12.3107%206.9375%2012.5625%207.18934%2012.5625%207.5V12.5625H15.375C15.6857%2012.5625%2015.9375%2012.8143%2015.9375%2013.125C15.9375%2013.4357%2015.6857%2013.6875%2015.375%2013.6875H12.2812C11.8153%2013.6875%2011.4375%2013.3097%2011.4375%2012.8438V7.5C11.4375%207.18934%2011.6893%206.9375%2012%206.9375Z'%20fill='%232C2C2E'/%3e%3c/svg%3e", hS = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.24231%202.90907C11.3455%202.27106%2013.6049%202.38205%2015.6355%203.22315C17.6661%204.06424%2019.3422%205.58338%2020.3783%207.52173C21.4143%209.46009%2021.7463%2011.6977%2021.3175%2013.8534C20.8887%2016.009%2019.7257%2017.9493%2018.0268%2019.3436C16.3278%2020.7379%2014.1979%2021.5%2012%2021.5C11.7239%2021.5%2011.5%2021.2761%2011.5%2021C11.5%2020.7239%2011.7239%2020.5%2012%2020.5C13.9665%2020.5%2015.8722%2019.8181%2017.3924%2018.5706C18.9125%2017.323%2019.953%2015.587%2020.3367%2013.6583C20.7203%2011.7295%2020.4234%209.72745%2019.4963%207.99313C18.5693%206.25881%2017.0697%204.89958%2015.2528%204.14702C13.436%203.39447%2011.4144%203.29516%209.5326%203.86601C7.65075%204.43686%206.02506%205.64255%204.93252%207.27765C3.83998%208.91275%203.34819%2010.8761%203.54094%2012.8331C3.7337%2014.7902%204.59907%2016.6199%205.98961%2018.0104C6.18487%2018.2057%206.18487%2018.5222%205.98961%2018.7175C5.79434%2018.9128%205.47776%2018.9128%205.2825%2018.7175C3.72837%2017.1634%202.76119%2015.1185%202.54576%2012.9312C2.33033%2010.7439%202.87998%208.54955%204.10105%206.72208C5.32213%204.89462%207.13908%203.54708%209.24231%202.90907Z'%20fill='%232C2C2E'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16.3201%209.61589C16.108%209.43911%2015.7927%209.46777%2015.6159%209.67991L12.0179%2013.9975C11.6807%2014.4022%2011.4603%2014.6648%2011.273%2014.8352C11.0964%2014.9959%2011.0112%2015.0155%2010.9555%2015.0181C10.8998%2015.0206%2010.8131%2015.0087%2010.6227%2014.8647C10.4207%2014.712%2010.1775%2014.4703%209.80496%2014.0978L8.35357%2012.6464C8.15831%2012.4512%207.84172%2012.4512%207.64646%2012.6464C7.4512%2012.8417%207.4512%2013.1583%207.64646%2013.3536L9.12241%2014.8295C9.46344%2015.1706%209.75559%2015.4627%2010.0195%2015.6623C10.3013%2015.8754%2010.6159%2016.0345%2011.0008%2016.017C11.3856%2015.9996%2011.6846%2015.8126%2011.9459%2015.5749C12.1907%2015.3523%2012.4552%2015.0349%2012.7639%2014.6643L16.3841%2010.3201C16.5609%2010.108%2016.5322%209.79267%2016.3201%209.61589Z'%20fill='%232C2C2E'/%3e%3c/svg%3e", yS = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAfnSURBVHgB7Zt7bFPXHce/5z58nfgBNE6C46RxQ+mAZIFioChNq71pt8DUSWVb0dZt6rq10l6omzRpm7r/Nmmof2yaBOofLaq0StM0TRNjha0bjxSVAqUdU4OAAiVtAnmSxq97z72n5zi2Y1MSv5PcxB/JsWPfe33O17/f9zwvUKVKlSpVqlSpsjQhKB1xDZk/aDAIZ10dTMwTp08nvttKlokkX5dEqQKJ8yX+MMeeWn/M+4u3us1B1cB8wHhZJBaTnOTc4b8ZX3/457iCqR+upB+sFIGmxdn2YK+zcaJLe+YsNW8oCuYDNlUi/sTUDkLe/gdC679jnEGJSCiOtDgTPd0nFJN2RQyTEoL5ESdVoqknEjnLrM6voHfvk1BRfB0TFHNyWpwPd3SfINTcGqEm5T/c/IlzCw4FhL0H5x1N8naU6EOFCjSdVj3dvdDNrVGDcnGwYMRJQng0o/8Ga0eJFCJQdlpRsyuiL0hx0rDcKZ9qgYFQSM14L61LvpXLSqtU5Myr5+QBYQnrnvHj5MP81JlvvRAbMnepWsfg+Zf6Nt14/vUbqYPyqaBd0qoQRH1Y6MmQrD3acSF8KdLGqGVRGYF7dq09ywXyZx44G7ZLqzwQZbfaf9PdsuwnWyeM0UkujmnxcJNgMZhxw8c/d2QePBO2TKsciLLTDfu//EXv6roDN08PWESRpsSZgrCptEyn5kwRtNjSKj0c2vLXr+7x3LniQOTyuElkwuvIZs0iaYaLLba0Spjx5y89fQxE2h39YIJCInI+4wjlNhdaNGnFVIVHjY67d93nDuzuvDJ28voKXhchTt71yTxwcaWVIkEbjF8I7Hnknjt7mvpunhoAkSVuw4X1+DMPTuSo/mBjrzp+ocuilLqQp9IGsdBACVbLRKktxwxKRumGGaJD0FVlumXJBRU9xMk4Bns++bjLX//ixKmBvPxmpiKkr7v7sede/H1wc9dweJzXNimOqG/K02d4TYgq6dGLl61vP/1NasCPMhGOkPHt97MndmwjO+l4fueIIjm9Bp44toq+ZK36zCbXuBUXflMkWRFyoGadt87fBTNiFhSGXB+EB9pG/rcXx1Hm+bLVLdLGHU5pJ2btFPOOjYgaxQRxMGx9dSPeGHIra1aFYTJNKmVSJ0uIGhqmHsOEQeMoBIlfhtDJiniVoqImhzZcBALNSTGsq1h7cAsi/P/62ghPNSdKpaS5koWA8BvNZeDUqAf+f3bD5P2+5Q4jEVHlwNYC8SYp4Tf7LgWw+egW1LuicHKBLIayYc/+DRdAtEkOD8XjJ9dg/9UAmr2TPJpQdmwnUMKMVRMWL/m9/9qEcxNuNHvCFRFHYCuBUmY8ENPQfngz7yMzNNbGKiaOwDYelDBjt4HXhpeh5VAX7xWb8DooFw0VxR4CJc34ub5m3H88hEZ3FBo3Y1ZhcQQLPsU03qWHx8DOV9fhz/3+pBmXcTiTgwUvkMoQfvhwCP8eTJnx3IkjWPAC/Xg0ZGmxFahTxvg8RdFDqqJZ8B7U4KTeDaEWKDUaaJxOLXjNIQteIGYxy4jpaO1ogdfngR7V51QkW7RiorGKR3SsbGtEQ2sDf13YYLoUbCEQSf7RowaWr1yG5rWBRLrNQStvs8EqF8mIGaj11CLY2QqLT80wvqSFCmac/UbzRMwL83l3Pue8amMbf5Zh6mbFfMme0x1cC4tHjklNBNe3osZbA51HViVEsvV8EONjDYP7UvOaAFasXI54BVo4288oimgSrVpDsB5+3soJkcqJkv1dMmSZr+FLhfVYZUkSC5UUFcCiLIocUSGiRufdAG+9F6rTgWvvXCtbJGUJNBmPYOzDKG8pwigEIjmgs7DP/yXnAwytK1EuTHPIGXCHzFge2idbOK3WgbYNd+HdNy9b3KdEhogteEVnSpZAg6NDGH1/ACw+gUJgVGI1DTeDHXu+cDQ+4kPZ4C2VMRqBPhrV+apo7oVDLpIwbhE9d3UGTUNlYX4NDwzGFSZFjTuzTlJVFU6HA5alohCYrBCFL1pOXhyBMVnYufmQlziZ5eHmrTXUqtf3vfn9pm90rJdd2g/NcLwokexv0jMhPMgpB1/f/vKPapq0Xzt8HoVRq2CfXLwCQazEk8QW4P+GXng2fGH4Ic8nfIpFLfFe3qOURS1QBspbTx14ZfhM/9119/klllg4I3ntn14qAonUks997+Clt/dedLtX+0a4UUlk6v1ZWSoCCcSuCun67w5Fj2zeV+9qbzwjaYrChZoWiSU2KWZ1oJaSQIKU/yhHOv8YYiB/cvhqp0UiYMSR3UleagIJhECJlDv5yMuPEUX6gavtDkU0eopXE/fCvMI/S9/SdYtAczvfW2kkMusSiEg5tffT+/8wfOTqvUaUHjJHYr967XP7e5DRP8weizFb72T9GLy/mMuERaTI///Z4bP8eVvyvcQ+zdQBWYJINb5+ZlVkzDm3sMRkP7R6T18eR9+6JS6r+c9KMUdk7Leqr0WcY1+VhMNYzHQ2udlF1/G/oETfyBRIev/gd/ujV994xuFr484uepxzMS1eJqaLytzr6uXRo1cewLMoqNd8O25VV4w0jcav/f2zWmv385Yebk6M/HKVjQ9uHcuuoeWhn8KYCGBeSBgy/6MofSMn3nv0/C//cx7JezNQArcLv+mLtrc74HQW8AucxvwSEveGC+NNb4pHlSpVqlSpUqVKlaL4CM+wHUMyol4NAAAAAElFTkSuQmCC", vS = ({ specialist: u }) => {
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
  return /* @__PURE__ */ ee.jsxs("div", { className: we.card, children: [
    /* @__PURE__ */ ee.jsx("div", { className: we.photoContainer, children: s.photo ? /* @__PURE__ */ ee.jsx("img", { src: s.photo, alt: s.name, className: we.photo }) : /* @__PURE__ */ ee.jsx("div", { className: we.photoPlaceholder, children: /* @__PURE__ */ ee.jsx("span", { className: we.initials, children: s.name.split(" ").map((d) => d[0]).join("").toUpperCase().slice(0, 2) }) }) }),
    /* @__PURE__ */ ee.jsx("h2", { className: we.name, children: s.name }),
    s.description && /* @__PURE__ */ ee.jsx("p", { className: we.description, children: s.description }),
    s.email && /* @__PURE__ */ ee.jsx("a", { href: `mailto:${s.email}`, className: we.email, children: s.email }),
    (s.meetSubject || s.meetDescription) && /* @__PURE__ */ ee.jsxs("div", { className: we.meetInfo, children: [
      s.meetSubject && /* @__PURE__ */ ee.jsx("span", { className: we.meetSubject, children: s.meetSubject }),
      s.meetDescription && /* @__PURE__ */ ee.jsx("span", { className: we.meetDescription, children: s.meetDescription })
    ] }),
    /* @__PURE__ */ ee.jsx("div", { className: we.divider }),
    /* @__PURE__ */ ee.jsxs("div", { className: we.info, children: [
      /* @__PURE__ */ ee.jsxs("div", { className: we.infoItem, children: [
        /* @__PURE__ */ ee.jsx("img", { src: mS, alt: "Clock", className: we.icon }),
        /* @__PURE__ */ ee.jsx("span", { className: we.infoText, children: r.timeSlot })
      ] }),
      /* @__PURE__ */ ee.jsxs("div", { className: we.infoItem, children: [
        /* @__PURE__ */ ee.jsx("img", { src: hS, alt: "Check", className: we.icon }),
        /* @__PURE__ */ ee.jsx("span", { className: we.infoText, children: r.confirmation })
      ] }),
      /* @__PURE__ */ ee.jsxs("div", { className: we.infoItem, children: [
        /* @__PURE__ */ ee.jsx("img", { src: yS, alt: "Google Meet", className: we.icon }),
        /* @__PURE__ */ ee.jsx("span", { className: we.infoText, children: r.videoCall })
      ] })
    ] })
  ] });
}, gS = "_container_lvje3_1", pS = "_title_lvje3_8", SS = "_selectedSlot_lvje3_15", bS = "_slotIcon_lvje3_26", _S = "_slotText_lvje3_30", ES = "_error_lvje3_36", TS = "_form_lvje3_46", AS = "_formGroup_lvje3_52", MS = "_label_lvje3_57", CS = "_input_lvje3_64", DS = "_textarea_lvje3_65", zS = "_buttons_lvje3_86", OS = "_backButton_lvje3_92", RS = "_submitButton_lvje3_93", Ye = {
  container: gS,
  title: pS,
  selectedSlot: SS,
  slotIcon: bS,
  slotText: _S,
  error: ES,
  form: TS,
  formGroup: AS,
  label: MS,
  input: CS,
  textarea: DS,
  buttons: zS,
  backButton: OS,
  submitButton: RS
}, NS = () => {
  const u = xc(), { selectedSlot: c, formData: s } = ga((S) => S.booking), [r, { isLoading: d }] = sp(), [m, g] = se.useState(null), O = (S) => {
    const { name: C, value: G } = S.target;
    u(vp({ [C]: G }));
  }, p = async (S) => {
    if (S.preventDefault(), g(null), !c) {
      g("Слот не выбран");
      return;
    }
    if (!s.name || !s.email || !s.phone) {
      g("Пожалуйста, заполните все обязательные поля");
      return;
    }
    try {
      const C = await r({
        startTime: c.start,
        name: s.name,
        email: s.email,
        phone: s.phone,
        description: s.description
      }).unwrap();
      C.success && (u(
        gp({
          meetLink: C.data.booking.meetLink,
          startTime: C.data.booking.startTime,
          endTime: C.data.booking.endTime
        })
      ), u(Ts("success")));
    } catch (C) {
      g(C?.data?.error || "Ошибка при бронировании");
    }
  }, h = () => {
    u(Ts("calendar"));
  }, q = () => {
    if (!c) return "";
    const S = new Date(c.start), C = new Date(c.end);
    return `${S.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric"
    })} в ${S.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit"
    })} - ${C.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit"
    })}`;
  };
  return /* @__PURE__ */ ee.jsxs("div", { className: Ye.container, children: [
    /* @__PURE__ */ ee.jsx("h2", { className: Ye.title, children: "Ваши контактные данные" }),
    /* @__PURE__ */ ee.jsxs("div", { className: Ye.selectedSlot, children: [
      /* @__PURE__ */ ee.jsx("span", { className: Ye.slotIcon, children: "📅" }),
      /* @__PURE__ */ ee.jsx("span", { className: Ye.slotText, children: q() })
    ] }),
    m && /* @__PURE__ */ ee.jsx("div", { className: Ye.error, children: m }),
    /* @__PURE__ */ ee.jsxs("form", { onSubmit: p, className: Ye.form, children: [
      /* @__PURE__ */ ee.jsxs("div", { className: Ye.formGroup, children: [
        /* @__PURE__ */ ee.jsx("label", { htmlFor: "name", className: Ye.label, children: "Имя *" }),
        /* @__PURE__ */ ee.jsx(
          "input",
          {
            type: "text",
            id: "name",
            name: "name",
            value: s.name,
            onChange: O,
            className: Ye.input,
            placeholder: "Иван Петров",
            required: !0
          }
        )
      ] }),
      /* @__PURE__ */ ee.jsxs("div", { className: Ye.formGroup, children: [
        /* @__PURE__ */ ee.jsx("label", { htmlFor: "email", className: Ye.label, children: "Email *" }),
        /* @__PURE__ */ ee.jsx(
          "input",
          {
            type: "email",
            id: "email",
            name: "email",
            value: s.email,
            onChange: O,
            className: Ye.input,
            placeholder: "ivan@example.com",
            required: !0
          }
        )
      ] }),
      /* @__PURE__ */ ee.jsxs("div", { className: Ye.formGroup, children: [
        /* @__PURE__ */ ee.jsx("label", { htmlFor: "phone", className: Ye.label, children: "Телефон *" }),
        /* @__PURE__ */ ee.jsx(
          "input",
          {
            type: "tel",
            id: "phone",
            name: "phone",
            value: s.phone,
            onChange: O,
            className: Ye.input,
            placeholder: "+7 (999) 123-45-67",
            required: !0
          }
        )
      ] }),
      /* @__PURE__ */ ee.jsxs("div", { className: Ye.formGroup, children: [
        /* @__PURE__ */ ee.jsx("label", { htmlFor: "description", className: Ye.label, children: "Комментарий (необязательно)" }),
        /* @__PURE__ */ ee.jsx(
          "textarea",
          {
            id: "description",
            name: "description",
            value: s.description,
            onChange: O,
            className: Ye.textarea,
            placeholder: "Опишите кратко, что вы хотели бы обсудить",
            rows: 3
          }
        )
      ] }),
      /* @__PURE__ */ ee.jsxs("div", { className: Ye.buttons, children: [
        /* @__PURE__ */ ee.jsx(
          "button",
          {
            type: "button",
            onClick: h,
            className: Ye.backButton,
            disabled: d,
            children: "← Назад"
          }
        ),
        /* @__PURE__ */ ee.jsx(
          "button",
          {
            type: "submit",
            className: Ye.submitButton,
            disabled: d,
            children: d ? "Бронирование..." : "Забронировать"
          }
        )
      ] })
    ] })
  ] });
}, US = "_container_18fmv_1", jS = "_icon_18fmv_11", xS = "_title_18fmv_16", qS = "_subtitle_18fmv_23", QS = "_details_18fmv_29", BS = "_detailRow_18fmv_37", HS = "_detailLabel_18fmv_49", wS = "_detailValue_18fmv_55", YS = "_meetLink_18fmv_61", LS = "_newBookingButton_18fmv_80", Le = {
  container: US,
  icon: jS,
  title: xS,
  subtitle: qS,
  details: QS,
  detailRow: BS,
  detailLabel: HS,
  detailValue: wS,
  meetLink: YS,
  newBookingButton: LS
}, GS = () => {
  const u = xc(), { bookingResult: c, formData: s } = ga((O) => O.booking), r = () => {
    u(pp());
  }, d = (O) => {
    const p = new Date(O);
    return {
      date: p.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }),
      time: p.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit"
      })
    };
  };
  if (!c)
    return null;
  const { date: m, time: g } = d(c.startTime);
  return /* @__PURE__ */ ee.jsxs("div", { className: Le.container, children: [
    /* @__PURE__ */ ee.jsx("div", { className: Le.icon, children: "✅" }),
    /* @__PURE__ */ ee.jsx("h2", { className: Le.title, children: "Встреча успешно забронирована!" }),
    /* @__PURE__ */ ee.jsx("p", { className: Le.subtitle, children: "На ваш email отправлена ссылка на встречу" }),
    /* @__PURE__ */ ee.jsxs("div", { className: Le.details, children: [
      /* @__PURE__ */ ee.jsxs("div", { className: Le.detailRow, children: [
        /* @__PURE__ */ ee.jsx("span", { className: Le.detailLabel, children: "📅 Дата:" }),
        /* @__PURE__ */ ee.jsx("span", { className: Le.detailValue, children: m })
      ] }),
      /* @__PURE__ */ ee.jsxs("div", { className: Le.detailRow, children: [
        /* @__PURE__ */ ee.jsx("span", { className: Le.detailLabel, children: "🕐 Время:" }),
        /* @__PURE__ */ ee.jsx("span", { className: Le.detailValue, children: g })
      ] }),
      /* @__PURE__ */ ee.jsxs("div", { className: Le.detailRow, children: [
        /* @__PURE__ */ ee.jsx("span", { className: Le.detailLabel, children: "👤 Имя:" }),
        /* @__PURE__ */ ee.jsx("span", { className: Le.detailValue, children: s.name })
      ] }),
      /* @__PURE__ */ ee.jsxs("div", { className: Le.detailRow, children: [
        /* @__PURE__ */ ee.jsx("span", { className: Le.detailLabel, children: "📧 Email:" }),
        /* @__PURE__ */ ee.jsx("span", { className: Le.detailValue, children: s.email })
      ] }),
      /* @__PURE__ */ ee.jsxs("div", { className: Le.detailRow, children: [
        /* @__PURE__ */ ee.jsx("span", { className: Le.detailLabel, children: "📞 Телефон:" }),
        /* @__PURE__ */ ee.jsx("span", { className: Le.detailValue, children: s.phone })
      ] })
    ] }),
    /* @__PURE__ */ ee.jsx(
      "a",
      {
        href: c.meetLink,
        target: "_blank",
        rel: "noopener noreferrer",
        className: Le.meetLink,
        children: "Открыть Google Meet"
      }
    ),
    /* @__PURE__ */ ee.jsx("button", { onClick: r, className: Le.newBookingButton, children: "Забронировать еще одну встречу" })
  ] });
}, VS = "_widget_1pjbl_1", XS = "_content_1pjbl_8", ZS = "_leftColumn_1pjbl_15", KS = "_centerColumn_1pjbl_23", JS = "_rightColumn_1pjbl_28", kS = "_formContent_1pjbl_37", FS = "_successContent_1pjbl_38", El = {
  widget: VS,
  content: XS,
  leftColumn: ZS,
  centerColumn: KS,
  rightColumn: JS,
  formContent: kS,
  successContent: FS
}, WS = ({ specialist: u }) => {
  const { currentStep: c } = ga((s) => s.booking);
  return se.useEffect(() => {
    (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0);
  }, []), /* @__PURE__ */ ee.jsxs("div", { className: El.widget, children: [
    c === "calendar" && /* @__PURE__ */ ee.jsxs("div", { className: El.content, children: [
      /* @__PURE__ */ ee.jsx("div", { className: El.leftColumn, children: /* @__PURE__ */ ee.jsx(vS, { specialist: u }) }),
      /* @__PURE__ */ ee.jsx("div", { className: El.centerColumn, children: /* @__PURE__ */ ee.jsx(Hp, {}) }),
      /* @__PURE__ */ ee.jsx("div", { className: El.rightColumn, children: /* @__PURE__ */ ee.jsx(Wp, {}) })
    ] }),
    c === "form" && /* @__PURE__ */ ee.jsx("div", { className: El.formContent, children: /* @__PURE__ */ ee.jsx(NS, {}) }),
    c === "success" && /* @__PURE__ */ ee.jsx("div", { className: El.successContent, children: /* @__PURE__ */ ee.jsx(GS, {}) })
  ] });
};
function $S(u, c) {
  const s = document.getElementById(u);
  if (!s) {
    console.error(`Element with id "${u}" not found`);
    return;
  }
  ip({
    apiUrl: c.apiUrl,
    apiToken: c.apiToken
  }), c.theme?.primaryColor && document.documentElement.style.setProperty(
    "--primary-color",
    c.theme.primaryColor
  ), c.theme?.secondaryColor && document.documentElement.style.setProperty(
    "--secondary-color",
    c.theme.secondaryColor
  ), X2.createRoot(s).render(
    tc.createElement(
      tc.StrictMode,
      null,
      tc.createElement(
        i1,
        { store: bp, children: tc.createElement(WS, { specialist: c.specialist }) }
      )
    )
  );
}
typeof window < "u" && (window.GoogleMeetBooking = {
  init: $S
});
export {
  $S as initBookingWidget
};
