function Qy(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var Ir = { exports: {} }, he = {};
var Lm;
function K2() {
  if (Lm) return he;
  Lm = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), m = /* @__PURE__ */ Symbol.for("react.consumer"), g = /* @__PURE__ */ Symbol.for("react.context"), O = /* @__PURE__ */ Symbol.for("react.forward_ref"), p = /* @__PURE__ */ Symbol.for("react.suspense"), y = /* @__PURE__ */ Symbol.for("react.memo"), q = /* @__PURE__ */ Symbol.for("react.lazy"), S = /* @__PURE__ */ Symbol.for("react.activity"), C = Symbol.iterator;
  function G(h) {
    return h === null || typeof h != "object" ? null : (h = C && h[C] || h["@@iterator"], typeof h == "function" ? h : null);
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
  function Y(h, K, le) {
    this.props = h, this.context = K, this.refs = U, this.updater = le || j;
  }
  Y.prototype.isReactComponent = {}, Y.prototype.setState = function(h, K) {
    if (typeof h != "object" && typeof h != "function" && h != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, h, K, "setState");
  }, Y.prototype.forceUpdate = function(h) {
    this.updater.enqueueForceUpdate(this, h, "forceUpdate");
  };
  function k() {
  }
  k.prototype = Y.prototype;
  function b(h, K, le) {
    this.props = h, this.context = K, this.refs = U, this.updater = le || j;
  }
  var z = b.prototype = new k();
  z.constructor = b, X(z, Y.prototype), z.isPureReactComponent = !0;
  var T = Array.isArray;
  function A() {
  }
  var R = { H: null, A: null, T: null, S: null }, V = Object.prototype.hasOwnProperty;
  function L(h, K, le) {
    var ne = le.ref;
    return {
      $$typeof: u,
      type: h,
      key: K,
      ref: ne !== void 0 ? ne : null,
      props: le
    };
  }
  function x(h, K) {
    return L(h.type, K, h.props);
  }
  function _(h) {
    return typeof h == "object" && h !== null && h.$$typeof === u;
  }
  function M(h) {
    var K = { "=": "=0", ":": "=2" };
    return "$" + h.replace(/[=:]/g, function(le) {
      return K[le];
    });
  }
  var w = /\/+/g;
  function W(h, K) {
    return typeof h == "object" && h !== null && h.key != null ? M("" + h.key) : K.toString(36);
  }
  function ae(h) {
    switch (h.status) {
      case "fulfilled":
        return h.value;
      case "rejected":
        throw h.reason;
      default:
        switch (typeof h.status == "string" ? h.then(A, A) : (h.status = "pending", h.then(
          function(K) {
            h.status === "pending" && (h.status = "fulfilled", h.value = K);
          },
          function(K) {
            h.status === "pending" && (h.status = "rejected", h.reason = K);
          }
        )), h.status) {
          case "fulfilled":
            return h.value;
          case "rejected":
            throw h.reason;
        }
    }
    throw h;
  }
  function D(h, K, le, ne, ce) {
    var se = typeof h;
    (se === "undefined" || se === "boolean") && (h = null);
    var ie = !1;
    if (h === null) ie = !0;
    else
      switch (se) {
        case "bigint":
        case "string":
        case "number":
          ie = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case u:
            case c:
              ie = !0;
              break;
            case q:
              return ie = h._init, D(
                ie(h._payload),
                K,
                le,
                ne,
                ce
              );
          }
      }
    if (ie)
      return ce = ce(h), ie = ne === "" ? "." + W(h, 0) : ne, T(ce) ? (le = "", ie != null && (le = ie.replace(w, "$&/") + "/"), D(ce, K, le, "", function(pe) {
        return pe;
      })) : ce != null && (_(ce) && (ce = x(
        ce,
        le + (ce.key == null || h && h.key === ce.key ? "" : ("" + ce.key).replace(
          w,
          "$&/"
        ) + "/") + ie
      )), K.push(ce)), 1;
    ie = 0;
    var Se = ne === "" ? "." : ne + ":";
    if (T(h))
      for (var de = 0; de < h.length; de++)
        ne = h[de], se = Se + W(ne, de), ie += D(
          ne,
          K,
          le,
          se,
          ce
        );
    else if (de = G(h), typeof de == "function")
      for (h = de.call(h), de = 0; !(ne = h.next()).done; )
        ne = ne.value, se = Se + W(ne, de++), ie += D(
          ne,
          K,
          le,
          se,
          ce
        );
    else if (se === "object") {
      if (typeof h.then == "function")
        return D(
          ae(h),
          K,
          le,
          ne,
          ce
        );
      throw K = String(h), Error(
        "Objects are not valid as a React child (found: " + (K === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : K) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ie;
  }
  function F(h, K, le) {
    if (h == null) return h;
    var ne = [], ce = 0;
    return D(h, ne, "", "", function(se) {
      return K.call(le, se, ce++);
    }), ne;
  }
  function I(h) {
    if (h._status === -1) {
      var K = h._result;
      K = K(), K.then(
        function(le) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = le);
        },
        function(le) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = le);
        }
      ), h._status === -1 && (h._status = 0, h._result = K);
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var te = typeof reportError == "function" ? reportError : function(h) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var K = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h),
        error: h
      });
      if (!window.dispatchEvent(K)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", h);
      return;
    }
    console.error(h);
  }, ue = {
    map: F,
    forEach: function(h, K, le) {
      F(
        h,
        function() {
          K.apply(this, arguments);
        },
        le
      );
    },
    count: function(h) {
      var K = 0;
      return F(h, function() {
        K++;
      }), K;
    },
    toArray: function(h) {
      return F(h, function(K) {
        return K;
      }) || [];
    },
    only: function(h) {
      if (!_(h))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return h;
    }
  };
  return he.Activity = S, he.Children = ue, he.Component = Y, he.Fragment = s, he.Profiler = d, he.PureComponent = b, he.StrictMode = r, he.Suspense = p, he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = R, he.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(h) {
      return R.H.useMemoCache(h);
    }
  }, he.cache = function(h) {
    return function() {
      return h.apply(null, arguments);
    };
  }, he.cacheSignal = function() {
    return null;
  }, he.cloneElement = function(h, K, le) {
    if (h == null)
      throw Error(
        "The argument must be a React element, but you passed " + h + "."
      );
    var ne = X({}, h.props), ce = h.key;
    if (K != null)
      for (se in K.key !== void 0 && (ce = "" + K.key), K)
        !V.call(K, se) || se === "key" || se === "__self" || se === "__source" || se === "ref" && K.ref === void 0 || (ne[se] = K[se]);
    var se = arguments.length - 2;
    if (se === 1) ne.children = le;
    else if (1 < se) {
      for (var ie = Array(se), Se = 0; Se < se; Se++)
        ie[Se] = arguments[Se + 2];
      ne.children = ie;
    }
    return L(h.type, ce, ne);
  }, he.createContext = function(h) {
    return h = {
      $$typeof: g,
      _currentValue: h,
      _currentValue2: h,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, h.Provider = h, h.Consumer = {
      $$typeof: m,
      _context: h
    }, h;
  }, he.createElement = function(h, K, le) {
    var ne, ce = {}, se = null;
    if (K != null)
      for (ne in K.key !== void 0 && (se = "" + K.key), K)
        V.call(K, ne) && ne !== "key" && ne !== "__self" && ne !== "__source" && (ce[ne] = K[ne]);
    var ie = arguments.length - 2;
    if (ie === 1) ce.children = le;
    else if (1 < ie) {
      for (var Se = Array(ie), de = 0; de < ie; de++)
        Se[de] = arguments[de + 2];
      ce.children = Se;
    }
    if (h && h.defaultProps)
      for (ne in ie = h.defaultProps, ie)
        ce[ne] === void 0 && (ce[ne] = ie[ne]);
    return L(h, se, ce);
  }, he.createRef = function() {
    return { current: null };
  }, he.forwardRef = function(h) {
    return { $$typeof: O, render: h };
  }, he.isValidElement = _, he.lazy = function(h) {
    return {
      $$typeof: q,
      _payload: { _status: -1, _result: h },
      _init: I
    };
  }, he.memo = function(h, K) {
    return {
      $$typeof: y,
      type: h,
      compare: K === void 0 ? null : K
    };
  }, he.startTransition = function(h) {
    var K = R.T, le = {};
    R.T = le;
    try {
      var ne = h(), ce = R.S;
      ce !== null && ce(le, ne), typeof ne == "object" && ne !== null && typeof ne.then == "function" && ne.then(A, te);
    } catch (se) {
      te(se);
    } finally {
      K !== null && le.types !== null && (K.types = le.types), R.T = K;
    }
  }, he.unstable_useCacheRefresh = function() {
    return R.H.useCacheRefresh();
  }, he.use = function(h) {
    return R.H.use(h);
  }, he.useActionState = function(h, K, le) {
    return R.H.useActionState(h, K, le);
  }, he.useCallback = function(h, K) {
    return R.H.useCallback(h, K);
  }, he.useContext = function(h) {
    return R.H.useContext(h);
  }, he.useDebugValue = function() {
  }, he.useDeferredValue = function(h, K) {
    return R.H.useDeferredValue(h, K);
  }, he.useEffect = function(h, K) {
    return R.H.useEffect(h, K);
  }, he.useEffectEvent = function(h) {
    return R.H.useEffectEvent(h);
  }, he.useId = function() {
    return R.H.useId();
  }, he.useImperativeHandle = function(h, K, le) {
    return R.H.useImperativeHandle(h, K, le);
  }, he.useInsertionEffect = function(h, K) {
    return R.H.useInsertionEffect(h, K);
  }, he.useLayoutEffect = function(h, K) {
    return R.H.useLayoutEffect(h, K);
  }, he.useMemo = function(h, K) {
    return R.H.useMemo(h, K);
  }, he.useOptimistic = function(h, K) {
    return R.H.useOptimistic(h, K);
  }, he.useReducer = function(h, K, le) {
    return R.H.useReducer(h, K, le);
  }, he.useRef = function(h) {
    return R.H.useRef(h);
  }, he.useState = function(h) {
    return R.H.useState(h);
  }, he.useSyncExternalStore = function(h, K, le) {
    return R.H.useSyncExternalStore(
      h,
      K,
      le
    );
  }, he.useTransition = function() {
    return R.H.useTransition();
  }, he.version = "19.2.3", he;
}
var Gm;
function Dc() {
  return Gm || (Gm = 1, Ir.exports = K2()), Ir.exports;
}
var re = Dc();
const Ot = /* @__PURE__ */ Qy(re);
var Pr = { exports: {} }, mu = {}, es = { exports: {} }, ts = {};
var Vm;
function J2() {
  return Vm || (Vm = 1, (function(u) {
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
        e: for (var te = 0, ue = D.length, h = ue >>> 1; te < h; ) {
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
    var p = [], y = [], q = 1, S = null, C = 3, G = !1, j = !1, X = !1, U = !1, Y = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
    function z(D) {
      for (var F = s(y); F !== null; ) {
        if (F.callback === null) r(y);
        else if (F.startTime <= D)
          r(y), F.sortIndex = F.expirationTime, c(p, F);
        else break;
        F = s(y);
      }
    }
    function T(D) {
      if (X = !1, z(D), !j)
        if (s(p) !== null)
          j = !0, A || (A = !0, M());
        else {
          var F = s(y);
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
                  var h = s(y);
                  h !== null && ae(
                    T,
                    h.startTime - D
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
      }, I > te ? (D.sortIndex = I, c(y, D), s(p) === null && D === s(y) && (X ? (k(R), R = -1) : X = !0, ae(T, I - te))) : (D.sortIndex = ue, c(p, D), j || G || (j = !0, A || (A = !0, M()))), D;
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
  })(ts)), ts;
}
var Xm;
function k2() {
  return Xm || (Xm = 1, es.exports = J2()), es.exports;
}
var ns = { exports: {} }, ft = {};
var Zm;
function F2() {
  if (Zm) return ft;
  Zm = 1;
  var u = Dc();
  function c(p) {
    var y = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var q = 2; q < arguments.length; q++)
        y += "&args[]=" + encodeURIComponent(arguments[q]);
    }
    return "Minified React error #" + p + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function m(p, y, q) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: S == null ? null : "" + S,
      children: p,
      containerInfo: y,
      implementation: q
    };
  }
  var g = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function O(p, y) {
    if (p === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, ft.createPortal = function(p, y) {
    var q = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(c(299));
    return m(p, y, null, q);
  }, ft.flushSync = function(p) {
    var y = g.T, q = r.p;
    try {
      if (g.T = null, r.p = 2, p) return p();
    } finally {
      g.T = y, r.p = q, r.d.f();
    }
  }, ft.preconnect = function(p, y) {
    typeof p == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, r.d.C(p, y));
  }, ft.prefetchDNS = function(p) {
    typeof p == "string" && r.d.D(p);
  }, ft.preinit = function(p, y) {
    if (typeof p == "string" && y && typeof y.as == "string") {
      var q = y.as, S = O(q, y.crossOrigin), C = typeof y.integrity == "string" ? y.integrity : void 0, G = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      q === "style" ? r.d.S(
        p,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: S,
          integrity: C,
          fetchPriority: G
        }
      ) : q === "script" && r.d.X(p, {
        crossOrigin: S,
        integrity: C,
        fetchPriority: G,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, ft.preinitModule = function(p, y) {
    if (typeof p == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var q = O(
            y.as,
            y.crossOrigin
          );
          r.d.M(p, {
            crossOrigin: q,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && r.d.M(p);
  }, ft.preload = function(p, y) {
    if (typeof p == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var q = y.as, S = O(q, y.crossOrigin);
      r.d.L(p, q, {
        crossOrigin: S,
        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0,
        type: typeof y.type == "string" ? y.type : void 0,
        fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
        referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
        imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
        imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
        media: typeof y.media == "string" ? y.media : void 0
      });
    }
  }, ft.preloadModule = function(p, y) {
    if (typeof p == "string")
      if (y) {
        var q = O(y.as, y.crossOrigin);
        r.d.m(p, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: q,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else r.d.m(p);
  }, ft.requestFormReset = function(p) {
    r.d.r(p);
  }, ft.unstable_batchedUpdates = function(p, y) {
    return p(y);
  }, ft.useFormState = function(p, y, q) {
    return g.H.useFormState(p, y, q);
  }, ft.useFormStatus = function() {
    return g.H.useHostTransitionStatus();
  }, ft.version = "19.2.3", ft;
}
var Km;
function W2() {
  if (Km) return ns.exports;
  Km = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), ns.exports = F2(), ns.exports;
}
var Jm;
function $2() {
  if (Jm) return mu;
  Jm = 1;
  var u = k2(), c = Dc(), s = W2();
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
  function y(e) {
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
  function h(e) {
    return { current: e };
  }
  function K(e) {
    0 > ue || (e.current = te[ue], te[ue] = null, ue--);
  }
  function le(e, t) {
    ue++, te[ue] = e.current, e.current = t;
  }
  var ne = h(null), ce = h(null), se = h(null), ie = h(null);
  function Se(e, t) {
    switch (le(se, t), le(ce, e), le(ne, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? sm(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = sm(t), e = om(t, e);
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
    K(ne), K(ce), K(se);
  }
  function pe(e) {
    e.memoizedState !== null && le(ie, e);
    var t = ne.current, n = om(t, e.type);
    t !== n && (le(ce, e), le(ne, n));
  }
  function rt(e) {
    ce.current === e && (K(ne), K(ce)), ie.current === e && (K(ie), ru._currentValue = I);
  }
  var Pe, tn;
  function et(e) {
    if (Pe === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Pe = t && t[1] || "", tn = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Pe + e + tn;
  }
  var Wt = !1;
  function jt(e, t) {
    if (!e || Wt) return "";
    Wt = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var ee = function() {
                throw Error();
              };
              if (Object.defineProperty(ee.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(ee, []);
                } catch (Z) {
                  var H = Z;
                }
                Reflect.construct(e, [], ee);
              } else {
                try {
                  ee.call();
                } catch (Z) {
                  H = Z;
                }
                e.call(ee.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Z) {
                H = Z;
              }
              (ee = e()) && typeof ee.catch == "function" && ee.catch(function() {
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
      Wt = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? et(n) : "";
  }
  function Cn(e, t) {
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
        return jt(e.type, !1);
      case 11:
        return jt(e.type.render, !1);
      case 1:
        return jt(e.type, !0);
      case 31:
        return et("Activity");
      default:
        return "";
    }
  }
  function zl(e) {
    try {
      var t = "", n = null;
      do
        t += Cn(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var nl = Object.prototype.hasOwnProperty, ba = u.unstable_scheduleCallback, Ol = u.unstable_cancelCallback, Hc = u.unstable_shouldYield, Mh = u.unstable_requestPaint, St = u.unstable_now, Ch = u.unstable_getCurrentPriorityLevel, Ls = u.unstable_ImmediatePriority, Gs = u.unstable_UserBlockingPriority, Lu = u.unstable_NormalPriority, Dh = u.unstable_LowPriority, Vs = u.unstable_IdlePriority, zh = u.log, Oh = u.unstable_setDisableYieldValue, _a = null, bt = null;
  function Dn(e) {
    if (typeof zh == "function" && Oh(e), bt && typeof bt.setStrictMode == "function")
      try {
        bt.setStrictMode(_a, e);
      } catch {
      }
  }
  var _t = Math.clz32 ? Math.clz32 : Uh, Rh = Math.log, Nh = Math.LN2;
  function Uh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Rh(e) / Nh | 0) | 0;
  }
  var Gu = 256, Vu = 262144, Xu = 4194304;
  function ll(e) {
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
  function Zu(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var a = 0, i = e.suspendedLanes, f = e.pingedLanes;
    e = e.warmLanes;
    var o = l & 134217727;
    return o !== 0 ? (l = o & ~i, l !== 0 ? a = ll(l) : (f &= o, f !== 0 ? a = ll(f) : n || (n = o & ~e, n !== 0 && (a = ll(n))))) : (o = l & ~i, o !== 0 ? a = ll(o) : f !== 0 ? a = ll(f) : n || (n = l & ~e, n !== 0 && (a = ll(n)))), a === 0 ? 0 : t !== 0 && t !== a && (t & i) === 0 && (i = a & -a, n = t & -t, i >= n || i === 32 && (n & 4194048) !== 0) ? t : a;
  }
  function Ea(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function jh(e, t) {
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
  function Xs() {
    var e = Xu;
    return Xu <<= 1, (Xu & 62914560) === 0 && (Xu = 4194304), e;
  }
  function wc(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ta(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function xh(e, t, n, l, a, i) {
    var f = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var o = e.entanglements, v = e.expirationTimes, B = e.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var J = 31 - _t(n), ee = 1 << J;
      o[J] = 0, v[J] = -1;
      var H = B[J];
      if (H !== null)
        for (B[J] = null, J = 0; J < H.length; J++) {
          var Z = H[J];
          Z !== null && (Z.lane &= -536870913);
        }
      n &= ~ee;
    }
    l !== 0 && Zs(e, l, 0), i !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(f & ~t));
  }
  function Zs(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - _t(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 261930;
  }
  function Ks(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var l = 31 - _t(n), a = 1 << l;
      a & t | e[l] & t && (e[l] |= t), n &= ~a;
    }
  }
  function Js(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Yc(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Yc(e) {
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
  function Lc(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ks() {
    var e = F.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : xm(e.type));
  }
  function Fs(e, t) {
    var n = F.p;
    try {
      return F.p = e, t();
    } finally {
      F.p = n;
    }
  }
  var zn = Math.random().toString(36).slice(2), tt = "__reactFiber$" + zn, ot = "__reactProps$" + zn, Rl = "__reactContainer$" + zn, Gc = "__reactEvents$" + zn, qh = "__reactListeners$" + zn, Qh = "__reactHandles$" + zn, Ws = "__reactResources$" + zn, Aa = "__reactMarker$" + zn;
  function Vc(e) {
    delete e[tt], delete e[ot], delete e[Gc], delete e[qh], delete e[Qh];
  }
  function Nl(e) {
    var t = e[tt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Rl] || n[tt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = pm(e); e !== null; ) {
            if (n = e[tt]) return n;
            e = pm(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Ul(e) {
    if (e = e[tt] || e[Rl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Ma(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function jl(e) {
    var t = e[Ws];
    return t || (t = e[Ws] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Fe(e) {
    e[Aa] = !0;
  }
  var $s = /* @__PURE__ */ new Set(), Is = {};
  function al(e, t) {
    xl(e, t), xl(e + "Capture", t);
  }
  function xl(e, t) {
    for (Is[e] = t, e = 0; e < t.length; e++)
      $s.add(t[e]);
  }
  var Bh = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ps = {}, eo = {};
  function Hh(e) {
    return nl.call(eo, e) ? !0 : nl.call(Ps, e) ? !1 : Bh.test(e) ? eo[e] = !0 : (Ps[e] = !0, !1);
  }
  function Ku(e, t, n) {
    if (Hh(t))
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
  function Ju(e, t, n) {
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
  function nn(e, t, n, l) {
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
  function xt(e) {
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
  function to(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function wh(e, t, n) {
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
  function Xc(e) {
    if (!e._valueTracker) {
      var t = to(e) ? "checked" : "value";
      e._valueTracker = wh(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function no(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), l = "";
    return e && (l = to(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ku(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Yh = /[\n"\\]/g;
  function qt(e) {
    return e.replace(
      Yh,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Zc(e, t, n, l, a, i, f, o) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + xt(t)) : e.value !== "" + xt(t) && (e.value = "" + xt(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? Kc(e, f, xt(t)) : n != null ? Kc(e, f, xt(n)) : l != null && e.removeAttribute("value"), a == null && i != null && (e.defaultChecked = !!i), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.name = "" + xt(o) : e.removeAttribute("name");
  }
  function lo(e, t, n, l, a, i, f, o) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || n != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        Xc(e);
        return;
      }
      n = n != null ? "" + xt(n) : "", t = t != null ? "" + xt(t) : n, o || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? a, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = o ? e.checked : !!l, e.defaultChecked = !!l, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), Xc(e);
  }
  function Kc(e, t, n) {
    t === "number" && ku(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function ql(e, t, n, l) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < n.length; a++)
        t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++)
        a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + xt(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          e[a].selected = !0, l && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ao(e, t, n) {
    if (t != null && (t = "" + xt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + xt(n) : "";
  }
  function uo(e, t, n, l) {
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
    n = xt(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l), Xc(e);
  }
  function Ql(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Lh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function io(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Lh.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function co(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (e = e.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var a in t)
        l = t[a], t.hasOwnProperty(a) && n[a] !== l && io(e, a, l);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && io(e, i, t[i]);
  }
  function Jc(e) {
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
  var Gh = /* @__PURE__ */ new Map([
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
  ]), Vh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Fu(e) {
    return Vh.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function ln() {
  }
  var kc = null;
  function Fc(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Bl = null, Hl = null;
  function fo(e) {
    var t = Ul(e);
    if (t && (e = t.stateNode)) {
      var n = e[ot] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Zc(
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
              'input[name="' + qt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var a = l[ot] || null;
                if (!a) throw Error(r(90));
                Zc(
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
              l = n[t], l.form === e.form && no(l);
          }
          break e;
        case "textarea":
          ao(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && ql(e, !!n.multiple, t, !1);
      }
    }
  }
  var Wc = !1;
  function ro(e, t, n) {
    if (Wc) return e(t, n);
    Wc = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Wc = !1, (Bl !== null || Hl !== null) && (Qi(), Bl && (t = Bl, e = Hl, Hl = Bl = null, fo(t), e)))
        for (t = 0; t < e.length; t++) fo(e[t]);
    }
  }
  function Ca(e, t) {
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
  var an = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), $c = !1;
  if (an)
    try {
      var Da = {};
      Object.defineProperty(Da, "passive", {
        get: function() {
          $c = !0;
        }
      }), window.addEventListener("test", Da, Da), window.removeEventListener("test", Da, Da);
    } catch {
      $c = !1;
    }
  var On = null, Ic = null, Wu = null;
  function so() {
    if (Wu) return Wu;
    var e, t = Ic, n = t.length, l, a = "value" in On ? On.value : On.textContent, i = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var f = n - e;
    for (l = 1; l <= f && t[n - l] === a[i - l]; l++) ;
    return Wu = a.slice(e, 1 < l ? 1 - l : void 0);
  }
  function $u(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Iu() {
    return !0;
  }
  function oo() {
    return !1;
  }
  function dt(e) {
    function t(n, l, a, i, f) {
      this._reactName = n, this._targetInst = a, this.type = l, this.nativeEvent = i, this.target = f, this.currentTarget = null;
      for (var o in e)
        e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(i) : i[o]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Iu : oo, this.isPropagationStopped = oo, this;
    }
    return S(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Iu);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Iu);
      },
      persist: function() {
      },
      isPersistent: Iu
    }), t;
  }
  var ul = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Pu = dt(ul), za = S({}, ul, { view: 0, detail: 0 }), Xh = dt(za), Pc, ef, Oa, ei = S({}, za, {
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
    getModifierState: nf,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Oa && (Oa && e.type === "mousemove" ? (Pc = e.screenX - Oa.screenX, ef = e.screenY - Oa.screenY) : ef = Pc = 0, Oa = e), Pc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : ef;
    }
  }), mo = dt(ei), Zh = S({}, ei, { dataTransfer: 0 }), Kh = dt(Zh), Jh = S({}, za, { relatedTarget: 0 }), tf = dt(Jh), kh = S({}, ul, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fh = dt(kh), Wh = S({}, ul, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), $h = dt(Wh), Ih = S({}, ul, { data: 0 }), yo = dt(Ih), Ph = {
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
  }, ev = {
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
  }, tv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function nv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = tv[e]) ? !!t[e] : !1;
  }
  function nf() {
    return nv;
  }
  var lv = S({}, za, {
    key: function(e) {
      if (e.key) {
        var t = Ph[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = $u(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ev[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: nf,
    charCode: function(e) {
      return e.type === "keypress" ? $u(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? $u(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), av = dt(lv), uv = S({}, ei, {
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
  }), ho = dt(uv), iv = S({}, za, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nf
  }), cv = dt(iv), fv = S({}, ul, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), rv = dt(fv), sv = S({}, ei, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ov = dt(sv), dv = S({}, ul, {
    newState: 0,
    oldState: 0
  }), mv = dt(dv), yv = [9, 13, 27, 32], lf = an && "CompositionEvent" in window, Ra = null;
  an && "documentMode" in document && (Ra = document.documentMode);
  var hv = an && "TextEvent" in window && !Ra, vo = an && (!lf || Ra && 8 < Ra && 11 >= Ra), go = " ", po = !1;
  function So(e, t) {
    switch (e) {
      case "keyup":
        return yv.indexOf(t.keyCode) !== -1;
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
  function bo(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var wl = !1;
  function vv(e, t) {
    switch (e) {
      case "compositionend":
        return bo(t);
      case "keypress":
        return t.which !== 32 ? null : (po = !0, go);
      case "textInput":
        return e = t.data, e === go && po ? null : e;
      default:
        return null;
    }
  }
  function gv(e, t) {
    if (wl)
      return e === "compositionend" || !lf && So(e, t) ? (e = so(), Wu = Ic = On = null, wl = !1, e) : null;
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
        return vo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var pv = {
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
  function _o(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!pv[e.type] : t === "textarea";
  }
  function Eo(e, t, n, l) {
    Bl ? Hl ? Hl.push(l) : Hl = [l] : Bl = l, t = Vi(t, "onChange"), 0 < t.length && (n = new Pu(
      "onChange",
      "change",
      null,
      n,
      l
    ), e.push({ event: n, listeners: t }));
  }
  var Na = null, Ua = null;
  function Sv(e) {
    am(e, 0);
  }
  function ti(e) {
    var t = Ma(e);
    if (no(t)) return e;
  }
  function To(e, t) {
    if (e === "change") return t;
  }
  var Ao = !1;
  if (an) {
    var af;
    if (an) {
      var uf = "oninput" in document;
      if (!uf) {
        var Mo = document.createElement("div");
        Mo.setAttribute("oninput", "return;"), uf = typeof Mo.oninput == "function";
      }
      af = uf;
    } else af = !1;
    Ao = af && (!document.documentMode || 9 < document.documentMode);
  }
  function Co() {
    Na && (Na.detachEvent("onpropertychange", Do), Ua = Na = null);
  }
  function Do(e) {
    if (e.propertyName === "value" && ti(Ua)) {
      var t = [];
      Eo(
        t,
        Ua,
        e,
        Fc(e)
      ), ro(Sv, t);
    }
  }
  function bv(e, t, n) {
    e === "focusin" ? (Co(), Na = t, Ua = n, Na.attachEvent("onpropertychange", Do)) : e === "focusout" && Co();
  }
  function _v(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ti(Ua);
  }
  function Ev(e, t) {
    if (e === "click") return ti(t);
  }
  function Tv(e, t) {
    if (e === "input" || e === "change")
      return ti(t);
  }
  function Av(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Et = typeof Object.is == "function" ? Object.is : Av;
  function ja(e, t) {
    if (Et(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var a = n[l];
      if (!nl.call(t, a) || !Et(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  function zo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Oo(e, t) {
    var n = zo(e);
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
      n = zo(n);
    }
  }
  function Ro(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ro(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function No(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = ku(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ku(e.document);
    }
    return t;
  }
  function cf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Mv = an && "documentMode" in document && 11 >= document.documentMode, Yl = null, ff = null, xa = null, rf = !1;
  function Uo(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    rf || Yl == null || Yl !== ku(l) || (l = Yl, "selectionStart" in l && cf(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), xa && ja(xa, l) || (xa = l, l = Vi(ff, "onSelect"), 0 < l.length && (t = new Pu(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: l }), t.target = Yl)));
  }
  function il(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Ll = {
    animationend: il("Animation", "AnimationEnd"),
    animationiteration: il("Animation", "AnimationIteration"),
    animationstart: il("Animation", "AnimationStart"),
    transitionrun: il("Transition", "TransitionRun"),
    transitionstart: il("Transition", "TransitionStart"),
    transitioncancel: il("Transition", "TransitionCancel"),
    transitionend: il("Transition", "TransitionEnd")
  }, sf = {}, jo = {};
  an && (jo = document.createElement("div").style, "AnimationEvent" in window || (delete Ll.animationend.animation, delete Ll.animationiteration.animation, delete Ll.animationstart.animation), "TransitionEvent" in window || delete Ll.transitionend.transition);
  function cl(e) {
    if (sf[e]) return sf[e];
    if (!Ll[e]) return e;
    var t = Ll[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in jo)
        return sf[e] = t[n];
    return e;
  }
  var xo = cl("animationend"), qo = cl("animationiteration"), Qo = cl("animationstart"), Cv = cl("transitionrun"), Dv = cl("transitionstart"), zv = cl("transitioncancel"), Bo = cl("transitionend"), Ho = /* @__PURE__ */ new Map(), of = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  of.push("scrollEnd");
  function Zt(e, t) {
    Ho.set(e, t), al(t, [e]);
  }
  var ni = typeof reportError == "function" ? reportError : function(e) {
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
  }, Qt = [], Gl = 0, df = 0;
  function li() {
    for (var e = Gl, t = df = Gl = 0; t < e; ) {
      var n = Qt[t];
      Qt[t++] = null;
      var l = Qt[t];
      Qt[t++] = null;
      var a = Qt[t];
      Qt[t++] = null;
      var i = Qt[t];
      if (Qt[t++] = null, l !== null && a !== null) {
        var f = l.pending;
        f === null ? a.next = a : (a.next = f.next, f.next = a), l.pending = a;
      }
      i !== 0 && wo(n, a, i);
    }
  }
  function ai(e, t, n, l) {
    Qt[Gl++] = e, Qt[Gl++] = t, Qt[Gl++] = n, Qt[Gl++] = l, df |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function mf(e, t, n, l) {
    return ai(e, t, n, l), ui(e);
  }
  function fl(e, t) {
    return ai(e, null, null, t), ui(e);
  }
  function wo(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var a = !1, i = e.return; i !== null; )
      i.childLanes |= n, l = i.alternate, l !== null && (l.childLanes |= n), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (a = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, a && t !== null && (a = 31 - _t(n), e = i.hiddenUpdates, l = e[a], l === null ? e[a] = [t] : l.push(t), t.lane = n | 536870912), i) : null;
  }
  function ui(e) {
    if (50 < nu)
      throw nu = 0, Er = null, Error(r(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Vl = {};
  function Ov(e, t, n, l) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Tt(e, t, n, l) {
    return new Ov(e, t, n, l);
  }
  function yf(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function un(e, t) {
    var n = e.alternate;
    return n === null ? (n = Tt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function Yo(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function ii(e, t, n, l, a, i) {
    var f = 0;
    if (l = e, typeof e == "function") yf(e) && (f = 1);
    else if (typeof e == "string")
      f = x2(
        e,
        n,
        ne.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case L:
          return e = Tt(31, n, t, a), e.elementType = L, e.lanes = i, e;
        case X:
          return rl(n.children, a, i, t);
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
  function rl(e, t, n, l) {
    return e = Tt(7, e, l, t), e.lanes = n, e;
  }
  function hf(e, t, n) {
    return e = Tt(6, e, null, t), e.lanes = n, e;
  }
  function Lo(e) {
    var t = Tt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function vf(e, t, n) {
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
  var Go = /* @__PURE__ */ new WeakMap();
  function Bt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Go.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: zl(t)
      }, Go.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: zl(t)
    };
  }
  var Xl = [], Zl = 0, ci = null, qa = 0, Ht = [], wt = 0, Rn = null, $t = 1, It = "";
  function cn(e, t) {
    Xl[Zl++] = qa, Xl[Zl++] = ci, ci = e, qa = t;
  }
  function Vo(e, t, n) {
    Ht[wt++] = $t, Ht[wt++] = It, Ht[wt++] = Rn, Rn = e;
    var l = $t;
    e = It;
    var a = 32 - _t(l) - 1;
    l &= ~(1 << a), n += 1;
    var i = 32 - _t(t) + a;
    if (30 < i) {
      var f = a - a % 5;
      i = (l & (1 << f) - 1).toString(32), l >>= f, a -= f, $t = 1 << 32 - _t(t) + a | n << a | l, It = i + e;
    } else
      $t = 1 << i | n << a | l, It = e;
  }
  function gf(e) {
    e.return !== null && (cn(e, 1), Vo(e, 1, 0));
  }
  function pf(e) {
    for (; e === ci; )
      ci = Xl[--Zl], Xl[Zl] = null, qa = Xl[--Zl], Xl[Zl] = null;
    for (; e === Rn; )
      Rn = Ht[--wt], Ht[wt] = null, It = Ht[--wt], Ht[wt] = null, $t = Ht[--wt], Ht[wt] = null;
  }
  function Xo(e, t) {
    Ht[wt++] = $t, Ht[wt++] = It, Ht[wt++] = Rn, $t = t.id, It = t.overflow, Rn = e;
  }
  var nt = null, xe = null, Ae = !1, Nn = null, Yt = !1, Sf = Error(r(519));
  function Un(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Qa(Bt(t, e)), Sf;
  }
  function Zo(e) {
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
        for (n = 0; n < au.length; n++)
          _e(au[n], t);
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
        _e("invalid", t), lo(
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
        _e("invalid", t), uo(t, l.value, l.defaultValue, l.children);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || fm(t.textContent, n) ? (l.popover != null && (_e("beforetoggle", t), _e("toggle", t)), l.onScroll != null && _e("scroll", t), l.onScrollEnd != null && _e("scrollend", t), l.onClick != null && (t.onclick = ln), t = !0) : t = !1, t || Un(e, !0);
  }
  function Ko(e) {
    for (nt = e.return; nt; )
      switch (nt.tag) {
        case 5:
        case 31:
        case 13:
          Yt = !1;
          return;
        case 27:
        case 3:
          Yt = !0;
          return;
        default:
          nt = nt.return;
      }
  }
  function Kl(e) {
    if (e !== nt) return !1;
    if (!Ae) return Ko(e), Ae = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Br(e.type, e.memoizedProps)), n = !n), n && xe && Un(e), Ko(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      xe = gm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      xe = gm(e);
    } else
      t === 27 ? (t = xe, Kn(e.type) ? (e = Gr, Gr = null, xe = e) : xe = t) : xe = nt ? Gt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function sl() {
    xe = nt = null, Ae = !1;
  }
  function bf() {
    var e = Nn;
    return e !== null && (vt === null ? vt = e : vt.push.apply(
      vt,
      e
    ), Nn = null), e;
  }
  function Qa(e) {
    Nn === null ? Nn = [e] : Nn.push(e);
  }
  var _f = h(null), ol = null, fn = null;
  function jn(e, t, n) {
    le(_f, t._currentValue), t._currentValue = n;
  }
  function rn(e) {
    e._currentValue = _f.current, K(_f);
  }
  function Ef(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Tf(e, t, n, l) {
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
              i.lanes |= n, o = i.alternate, o !== null && (o.lanes |= n), Ef(
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
        f.lanes |= n, i = f.alternate, i !== null && (i.lanes |= n), Ef(f, n, e), f = null;
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
  function Jl(e, t, n, l) {
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
        f.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(ru) : e = [ru]);
      }
      a = a.return;
    }
    e !== null && Tf(
      t,
      e,
      n,
      l
    ), t.flags |= 262144;
  }
  function fi(e) {
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
  function dl(e) {
    ol = e, fn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function lt(e) {
    return Jo(ol, e);
  }
  function ri(e, t) {
    return ol === null && dl(e), Jo(e, t);
  }
  function Jo(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, fn === null) {
      if (e === null) throw Error(r(308));
      fn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else fn = fn.next = t;
    return n;
  }
  var Rv = typeof AbortController < "u" ? AbortController : function() {
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
  }, Nv = u.unstable_scheduleCallback, Uv = u.unstable_NormalPriority, Xe = {
    $$typeof: b,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Af() {
    return {
      controller: new Rv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ba(e) {
    e.refCount--, e.refCount === 0 && Nv(Uv, function() {
      e.controller.abort();
    });
  }
  var Ha = null, Mf = 0, kl = 0, Fl = null;
  function jv(e, t) {
    if (Ha === null) {
      var n = Ha = [];
      Mf = 0, kl = zr(), Fl = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return Mf++, t.then(ko, ko), t;
  }
  function ko() {
    if (--Mf === 0 && Ha !== null) {
      Fl !== null && (Fl.status = "fulfilled");
      var e = Ha;
      Ha = null, kl = 0, Fl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function xv(e, t) {
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
  var Fo = D.S;
  D.S = function(e, t) {
    U0 = St(), typeof t == "object" && t !== null && typeof t.then == "function" && jv(e, t), Fo !== null && Fo(e, t);
  };
  var ml = h(null);
  function Cf() {
    var e = ml.current;
    return e !== null ? e : je.pooledCache;
  }
  function si(e, t) {
    t === null ? le(ml, ml.current) : le(ml, t.pool);
  }
  function Wo() {
    var e = Cf();
    return e === null ? null : { parent: Xe._currentValue, pool: e };
  }
  var Wl = Error(r(460)), Df = Error(r(474)), oi = Error(r(542)), di = { then: function() {
  } };
  function $o(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Io(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(ln, ln), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, ed(e), e;
      default:
        if (typeof t.status == "string") t.then(ln, ln);
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
            throw e = t.reason, ed(e), e;
        }
        throw hl = t, Wl;
    }
  }
  function yl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (hl = n, Wl) : n;
    }
  }
  var hl = null;
  function Po() {
    if (hl === null) throw Error(r(459));
    var e = hl;
    return hl = null, e;
  }
  function ed(e) {
    if (e === Wl || e === oi)
      throw Error(r(483));
  }
  var $l = null, wa = 0;
  function mi(e) {
    var t = wa;
    return wa += 1, $l === null && ($l = []), Io($l, e, t);
  }
  function Ya(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function yi(e, t) {
    throw t.$$typeof === C ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function td(e) {
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
      return N = un(N, E), N.index = 0, N.sibling = null, N;
    }
    function i(N, E, Q) {
      return N.index = Q, e ? (Q = N.alternate, Q !== null ? (Q = Q.index, Q < E ? (N.flags |= 67108866, E) : Q) : (N.flags |= 67108866, E)) : (N.flags |= 1048576, E);
    }
    function f(N) {
      return e && N.alternate === null && (N.flags |= 67108866), N;
    }
    function o(N, E, Q, $) {
      return E === null || E.tag !== 6 ? (E = hf(Q, N.mode, $), E.return = N, E) : (E = a(E, Q), E.return = N, E);
    }
    function v(N, E, Q, $) {
      var me = Q.type;
      return me === X ? J(
        N,
        E,
        Q.props.children,
        $,
        Q.key
      ) : E !== null && (E.elementType === me || typeof me == "object" && me !== null && me.$$typeof === V && yl(me) === E.type) ? (E = a(E, Q.props), Ya(E, Q), E.return = N, E) : (E = ii(
        Q.type,
        Q.key,
        Q.props,
        null,
        N.mode,
        $
      ), Ya(E, Q), E.return = N, E);
    }
    function B(N, E, Q, $) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== Q.containerInfo || E.stateNode.implementation !== Q.implementation ? (E = vf(Q, N.mode, $), E.return = N, E) : (E = a(E, Q.children || []), E.return = N, E);
    }
    function J(N, E, Q, $, me) {
      return E === null || E.tag !== 7 ? (E = rl(
        Q,
        N.mode,
        $,
        me
      ), E.return = N, E) : (E = a(E, Q), E.return = N, E);
    }
    function ee(N, E, Q) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = hf(
          "" + E,
          N.mode,
          Q
        ), E.return = N, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case G:
            return Q = ii(
              E.type,
              E.key,
              E.props,
              null,
              N.mode,
              Q
            ), Ya(Q, E), Q.return = N, Q;
          case j:
            return E = vf(
              E,
              N.mode,
              Q
            ), E.return = N, E;
          case V:
            return E = yl(E), ee(N, E, Q);
        }
        if (ae(E) || M(E))
          return E = rl(
            E,
            N.mode,
            Q,
            null
          ), E.return = N, E;
        if (typeof E.then == "function")
          return ee(N, mi(E), Q);
        if (E.$$typeof === b)
          return ee(
            N,
            ri(N, E),
            Q
          );
        yi(N, E);
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
            return Q = yl(Q), H(N, E, Q, $);
        }
        if (ae(Q) || M(Q))
          return me !== null ? null : J(N, E, Q, $, null);
        if (typeof Q.then == "function")
          return H(
            N,
            E,
            mi(Q),
            $
          );
        if (Q.$$typeof === b)
          return H(
            N,
            E,
            ri(N, Q),
            $
          );
        yi(N, Q);
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
            return $ = yl($), Z(
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
            mi($),
            me
          );
        if ($.$$typeof === b)
          return Z(
            N,
            E,
            Q,
            ri(E, $),
            me
          );
        yi(E, $);
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
        return n(N, oe), Ae && cn(N, ge), me;
      if (oe === null) {
        for (; ge < Q.length; ge++)
          oe = ee(N, Q[ge], $), oe !== null && (E = i(
            oe,
            E,
            ge
          ), Me === null ? me = oe : Me.sibling = oe, Me = oe);
        return Ae && cn(N, ge), me;
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
      return e && oe.forEach(function($n) {
        return t(N, $n);
      }), Ae && cn(N, ge), me;
    }
    function ye(N, E, Q, $) {
      if (Q == null) throw Error(r(151));
      for (var me = null, Me = null, oe = E, ge = E = 0, Te = null, Ce = Q.next(); oe !== null && !Ce.done; ge++, Ce = Q.next()) {
        oe.index > ge ? (Te = oe, oe = null) : Te = oe.sibling;
        var $n = H(N, oe, Ce.value, $);
        if ($n === null) {
          oe === null && (oe = Te);
          break;
        }
        e && oe && $n.alternate === null && t(N, oe), E = i($n, E, ge), Me === null ? me = $n : Me.sibling = $n, Me = $n, oe = Te;
      }
      if (Ce.done)
        return n(N, oe), Ae && cn(N, ge), me;
      if (oe === null) {
        for (; !Ce.done; ge++, Ce = Q.next())
          Ce = ee(N, Ce.value, $), Ce !== null && (E = i(Ce, E, ge), Me === null ? me = Ce : Me.sibling = Ce, Me = Ce);
        return Ae && cn(N, ge), me;
      }
      for (oe = l(oe); !Ce.done; ge++, Ce = Q.next())
        Ce = Z(oe, N, ge, Ce.value, $), Ce !== null && (e && Ce.alternate !== null && oe.delete(Ce.key === null ? ge : Ce.key), E = i(Ce, E, ge), Me === null ? me = Ce : Me.sibling = Ce, Me = Ce);
      return e && oe.forEach(function(Z2) {
        return t(N, Z2);
      }), Ae && cn(N, ge), me;
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
                  } else if (E.elementType === me || typeof me == "object" && me !== null && me.$$typeof === V && yl(me) === E.type) {
                    n(
                      N,
                      E.sibling
                    ), $ = a(E, Q.props), Ya($, Q), $.return = N, N = $;
                    break e;
                  }
                  n(N, E);
                  break;
                } else t(N, E);
                E = E.sibling;
              }
              Q.type === X ? ($ = rl(
                Q.props.children,
                N.mode,
                $,
                Q.key
              ), $.return = N, N = $) : ($ = ii(
                Q.type,
                Q.key,
                Q.props,
                null,
                N.mode,
                $
              ), Ya($, Q), $.return = N, N = $);
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
              $ = vf(Q, N.mode, $), $.return = N, N = $;
            }
            return f(N);
          case V:
            return Q = yl(Q), Ue(
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
          return Q = me.call(Q), ye(
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
            mi(Q),
            $
          );
        if (Q.$$typeof === b)
          return Ue(
            N,
            E,
            ri(N, Q),
            $
          );
        yi(N, Q);
      }
      return typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint" ? (Q = "" + Q, E !== null && E.tag === 6 ? (n(N, E.sibling), $ = a(E, Q), $.return = N, N = $) : (n(N, E), $ = hf(Q, N.mode, $), $.return = N, N = $), f(N)) : n(N, E);
    }
    return function(N, E, Q, $) {
      try {
        wa = 0;
        var me = Ue(
          N,
          E,
          Q,
          $
        );
        return $l = null, me;
      } catch (oe) {
        if (oe === Wl || oe === oi) throw oe;
        var Me = Tt(29, oe, null, N.mode);
        return Me.lanes = $, Me.return = N, Me;
      }
    };
  }
  var vl = td(!0), nd = td(!1), xn = !1;
  function zf(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Of(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function qn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Qn(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (De & 2) !== 0) {
      var a = l.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t, t = ui(e), wo(e, null, n), t;
    }
    return ai(e, l, t, n), ui(e);
  }
  function La(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, Ks(e, n);
    }
  }
  function Rf(e, t) {
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
  var Nf = !1;
  function Ga() {
    if (Nf) {
      var e = Fl;
      if (e !== null) throw e;
    }
  }
  function Va(e, t, n, l) {
    Nf = !1;
    var a = e.updateQueue;
    xn = !1;
    var i = a.firstBaseUpdate, f = a.lastBaseUpdate, o = a.shared.pending;
    if (o !== null) {
      a.shared.pending = null;
      var v = o, B = v.next;
      v.next = null, f === null ? i = B : f.next = B, f = v;
      var J = e.alternate;
      J !== null && (J = J.updateQueue, o = J.lastBaseUpdate, o !== f && (o === null ? J.firstBaseUpdate = B : o.next = B, J.lastBaseUpdate = v));
    }
    if (i !== null) {
      var ee = a.baseState;
      f = 0, J = B = v = null, o = i;
      do {
        var H = o.lane & -536870913, Z = H !== o.lane;
        if (Z ? (Ee & H) === H : (l & H) === H) {
          H !== 0 && H === kl && (Nf = !0), J !== null && (J = J.next = {
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          });
          e: {
            var fe = e, ye = o;
            H = t;
            var Ue = n;
            switch (ye.tag) {
              case 1:
                if (fe = ye.payload, typeof fe == "function") {
                  ee = fe.call(Ue, ee, H);
                  break e;
                }
                ee = fe;
                break e;
              case 3:
                fe.flags = fe.flags & -65537 | 128;
              case 0:
                if (fe = ye.payload, H = typeof fe == "function" ? fe.call(Ue, ee, H) : fe, H == null) break e;
                ee = S({}, ee, H);
                break e;
              case 2:
                xn = !0;
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
          }, J === null ? (B = J = Z, v = ee) : J = J.next = Z, f |= H;
        if (o = o.next, o === null) {
          if (o = a.shared.pending, o === null)
            break;
          Z = o, o = Z.next, Z.next = null, a.lastBaseUpdate = Z, a.shared.pending = null;
        }
      } while (!0);
      J === null && (v = ee), a.baseState = v, a.firstBaseUpdate = B, a.lastBaseUpdate = J, i === null && (a.shared.lanes = 0), Ln |= f, e.lanes = f, e.memoizedState = ee;
    }
  }
  function ld(e, t) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(t);
  }
  function ad(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        ld(n[e], t);
  }
  var Il = h(null), hi = h(0);
  function ud(e, t) {
    e = pn, le(hi, e), le(Il, t), pn = e | t.baseLanes;
  }
  function Uf() {
    le(hi, pn), le(Il, Il.current);
  }
  function jf() {
    pn = hi.current, K(Il), K(hi);
  }
  var At = h(null), Lt = null;
  function Bn(e) {
    var t = e.alternate;
    le(Ge, Ge.current & 1), le(At, e), Lt === null && (t === null || Il.current !== null || t.memoizedState !== null) && (Lt = e);
  }
  function xf(e) {
    le(Ge, Ge.current), le(At, e), Lt === null && (Lt = e);
  }
  function id(e) {
    e.tag === 22 ? (le(Ge, Ge.current), le(At, e), Lt === null && (Lt = e)) : Hn();
  }
  function Hn() {
    le(Ge, Ge.current), le(At, At.current);
  }
  function Mt(e) {
    K(At), Lt === e && (Lt = null), K(Ge);
  }
  var Ge = h(0);
  function vi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Yr(n) || Lr(n)))
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
  var sn = 0, ve = null, Re = null, Ze = null, gi = !1, Pl = !1, gl = !1, pi = 0, Xa = 0, ea = null, qv = 0;
  function Be() {
    throw Error(r(321));
  }
  function qf(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Et(e[n], t[n])) return !1;
    return !0;
  }
  function Qf(e, t, n, l, a, i) {
    return sn = i, ve = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, D.H = e === null || e.memoizedState === null ? Vd : $f, gl = !1, i = n(l, a), gl = !1, Pl && (i = fd(
      t,
      n,
      l,
      a
    )), cd(e), i;
  }
  function cd(e) {
    D.H = Ja;
    var t = Re !== null && Re.next !== null;
    if (sn = 0, Ze = Re = ve = null, gi = !1, Xa = 0, ea = null, t) throw Error(r(300));
    e === null || Ke || (e = e.dependencies, e !== null && fi(e) && (Ke = !0));
  }
  function fd(e, t, n, l) {
    ve = e;
    var a = 0;
    do {
      if (Pl && (ea = null), Xa = 0, Pl = !1, 25 <= a) throw Error(r(301));
      if (a += 1, Ze = Re = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      D.H = Xd, i = t(n, l);
    } while (Pl);
    return i;
  }
  function Qv() {
    var e = D.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Za(t) : t, e = e.useState()[0], (Re !== null ? Re.memoizedState : null) !== e && (ve.flags |= 1024), t;
  }
  function Bf() {
    var e = pi !== 0;
    return pi = 0, e;
  }
  function Hf(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function wf(e) {
    if (gi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      gi = !1;
    }
    sn = 0, Ze = Re = ve = null, Pl = !1, Xa = pi = 0, ea = null;
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
  function Si() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Za(e) {
    var t = Xa;
    return Xa += 1, ea === null && (ea = []), e = Io(ea, e, t), t = ve, (Ze === null ? t.memoizedState : Ze.next) === null && (t = t.alternate, D.H = t === null || t.memoizedState === null ? Vd : $f), e;
  }
  function bi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Za(e);
      if (e.$$typeof === b) return lt(e);
    }
    throw Error(r(438, String(e)));
  }
  function Yf(e) {
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
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Si(), ve.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = x;
    return t.index++, n;
  }
  function on(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function _i(e) {
    var t = Ve();
    return Lf(t, Re, e);
  }
  function Lf(e, t, n) {
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
        var ee = B.lane & -536870913;
        if (ee !== B.lane ? (Ee & ee) === ee : (sn & ee) === ee) {
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
            }), ee === kl && (J = !0);
          else if ((sn & H) === H) {
            B = B.next, H === kl && (J = !0);
            continue;
          } else
            ee = {
              lane: 0,
              revertLane: B.revertLane,
              gesture: null,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }, v === null ? (o = v = ee, f = i) : v = v.next = ee, ve.lanes |= H, Ln |= H;
          ee = B.action, gl && n(i, ee), i = B.hasEagerState ? B.eagerState : n(i, ee);
        } else
          H = {
            lane: ee,
            revertLane: B.revertLane,
            gesture: B.gesture,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null
          }, v === null ? (o = v = H, f = i) : v = v.next = H, ve.lanes |= ee, Ln |= ee;
        B = B.next;
      } while (B !== null && B !== t);
      if (v === null ? f = i : v.next = o, !Et(i, e.memoizedState) && (Ke = !0, J && (n = Fl, n !== null)))
        throw n;
      e.memoizedState = i, e.baseState = f, e.baseQueue = v, l.lastRenderedState = i;
    }
    return a === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Gf(e) {
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
  function rd(e, t, n) {
    var l = ve, a = Ve(), i = Ae;
    if (i) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = t();
    var f = !Et(
      (Re || a).memoizedState,
      n
    );
    if (f && (a.memoizedState = n, Ke = !0), a = a.queue, Zf(dd.bind(null, l, a, e), [
      e
    ]), a.getSnapshot !== t || f || Ze !== null && Ze.memoizedState.tag & 1) {
      if (l.flags |= 2048, ta(
        9,
        { destroy: void 0 },
        od.bind(
          null,
          l,
          a,
          n,
          t
        ),
        null
      ), je === null) throw Error(r(349));
      i || (sn & 127) !== 0 || sd(l, t, n);
    }
    return n;
  }
  function sd(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ve.updateQueue, t === null ? (t = Si(), ve.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function od(e, t, n, l) {
    t.value = n, t.getSnapshot = l, md(t) && yd(e);
  }
  function dd(e, t, n) {
    return n(function() {
      md(t) && yd(e);
    });
  }
  function md(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Et(e, n);
    } catch {
      return !0;
    }
  }
  function yd(e) {
    var t = fl(e, 2);
    t !== null && gt(t, e, 2);
  }
  function Vf(e) {
    var t = st();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), gl) {
        Dn(!0);
        try {
          n();
        } finally {
          Dn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: on,
      lastRenderedState: e
    }, t;
  }
  function hd(e, t, n, l) {
    return e.baseState = n, Lf(
      e,
      Re,
      typeof l == "function" ? l : on
    );
  }
  function Bv(e, t, n, l, a) {
    if (Ai(e)) throw Error(r(485));
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
      D.T !== null ? n(!0) : i.isTransition = !1, l(i), n = t.pending, n === null ? (i.next = t.pending = i, vd(t, i)) : (i.next = n.next, t.pending = n.next = i);
    }
  }
  function vd(e, t) {
    var n = t.action, l = t.payload, a = e.state;
    if (t.isTransition) {
      var i = D.T, f = {};
      D.T = f;
      try {
        var o = n(a, l), v = D.S;
        v !== null && v(f, o), gd(e, t, o);
      } catch (B) {
        Xf(e, t, B);
      } finally {
        i !== null && f.types !== null && (i.types = f.types), D.T = i;
      }
    } else
      try {
        i = n(a, l), gd(e, t, i);
      } catch (B) {
        Xf(e, t, B);
      }
  }
  function gd(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        pd(e, t, l);
      },
      function(l) {
        return Xf(e, t, l);
      }
    ) : pd(e, t, n);
  }
  function pd(e, t, n) {
    t.status = "fulfilled", t.value = n, Sd(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, vd(e, n)));
  }
  function Xf(e, t, n) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = n, Sd(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function Sd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function bd(e, t) {
    return t;
  }
  function _d(e, t) {
    if (Ae) {
      var n = je.formState;
      if (n !== null) {
        e: {
          var l = ve;
          if (Ae) {
            if (xe) {
              t: {
                for (var a = xe, i = Yt; a.nodeType !== 8; ) {
                  if (!i) {
                    a = null;
                    break t;
                  }
                  if (a = Gt(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break t;
                  }
                }
                i = a.data, a = i === "F!" || i === "F" ? a : null;
              }
              if (a) {
                xe = Gt(
                  a.nextSibling
                ), l = a.data === "F!";
                break e;
              }
            }
            Un(l);
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
      lastRenderedReducer: bd,
      lastRenderedState: t
    }, n.queue = l, n = Yd.bind(
      null,
      ve,
      l
    ), l.dispatch = n, l = Vf(!1), i = Wf.bind(
      null,
      ve,
      !1,
      l.queue
    ), l = st(), a = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = a, n = Bv.bind(
      null,
      ve,
      a,
      i,
      n
    ), a.dispatch = n, l.memoizedState = e, [t, n, !1];
  }
  function Ed(e) {
    var t = Ve();
    return Td(t, Re, e);
  }
  function Td(e, t, n) {
    if (t = Lf(
      e,
      t,
      bd
    )[0], e = _i(on)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Za(t);
      } catch (f) {
        throw f === Wl ? oi : f;
      }
    else l = t;
    t = Ve();
    var a = t.queue, i = a.dispatch;
    return n !== t.memoizedState && (ve.flags |= 2048, ta(
      9,
      { destroy: void 0 },
      Hv.bind(null, a, n),
      null
    )), [l, i, e];
  }
  function Hv(e, t) {
    e.action = t;
  }
  function Ad(e) {
    var t = Ve(), n = Re;
    if (n !== null)
      return Td(t, n, e);
    Ve(), t = t.memoizedState, n = Ve();
    var l = n.queue.dispatch;
    return n.memoizedState = e, [t, l, !1];
  }
  function ta(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = ve.updateQueue, t === null && (t = Si(), ve.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Md() {
    return Ve().memoizedState;
  }
  function Ei(e, t, n, l) {
    var a = st();
    ve.flags |= e, a.memoizedState = ta(
      1 | t,
      { destroy: void 0 },
      n,
      l === void 0 ? null : l
    );
  }
  function Ti(e, t, n, l) {
    var a = Ve();
    l = l === void 0 ? null : l;
    var i = a.memoizedState.inst;
    Re !== null && l !== null && qf(l, Re.memoizedState.deps) ? a.memoizedState = ta(t, i, n, l) : (ve.flags |= e, a.memoizedState = ta(
      1 | t,
      i,
      n,
      l
    ));
  }
  function Cd(e, t) {
    Ei(8390656, 8, e, t);
  }
  function Zf(e, t) {
    Ti(2048, 8, e, t);
  }
  function wv(e) {
    ve.flags |= 4;
    var t = ve.updateQueue;
    if (t === null)
      t = Si(), ve.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function Dd(e) {
    var t = Ve().memoizedState;
    return wv({ ref: t, nextImpl: e }), function() {
      if ((De & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function zd(e, t) {
    return Ti(4, 2, e, t);
  }
  function Od(e, t) {
    return Ti(4, 4, e, t);
  }
  function Rd(e, t) {
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
  function Nd(e, t, n) {
    n = n != null ? n.concat([e]) : null, Ti(4, 4, Rd.bind(null, t, e), n);
  }
  function Kf() {
  }
  function Ud(e, t) {
    var n = Ve();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && qf(t, l[1]) ? l[0] : (n.memoizedState = [e, t], e);
  }
  function jd(e, t) {
    var n = Ve();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && qf(t, l[1]))
      return l[0];
    if (l = e(), gl) {
      Dn(!0);
      try {
        e();
      } finally {
        Dn(!1);
      }
    }
    return n.memoizedState = [l, t], l;
  }
  function Jf(e, t, n) {
    return n === void 0 || (sn & 1073741824) !== 0 && (Ee & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = x0(), ve.lanes |= e, Ln |= e, n);
  }
  function xd(e, t, n, l) {
    return Et(n, t) ? n : Il.current !== null ? (e = Jf(e, n, l), Et(e, t) || (Ke = !0), e) : (sn & 42) === 0 || (sn & 1073741824) !== 0 && (Ee & 261930) === 0 ? (Ke = !0, e.memoizedState = n) : (e = x0(), ve.lanes |= e, Ln |= e, t);
  }
  function qd(e, t, n, l, a) {
    var i = F.p;
    F.p = i !== 0 && 8 > i ? i : 8;
    var f = D.T, o = {};
    D.T = o, Wf(e, !1, t, n);
    try {
      var v = a(), B = D.S;
      if (B !== null && B(o, v), v !== null && typeof v == "object" && typeof v.then == "function") {
        var J = xv(
          v,
          l
        );
        Ka(
          e,
          t,
          J,
          zt(e)
        );
      } else
        Ka(
          e,
          t,
          l,
          zt(e)
        );
    } catch (ee) {
      Ka(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: ee },
        zt()
      );
    } finally {
      F.p = i, f !== null && o.types !== null && (f.types = o.types), D.T = f;
    }
  }
  function Yv() {
  }
  function kf(e, t, n, l) {
    if (e.tag !== 5) throw Error(r(476));
    var a = Qd(e).queue;
    qd(
      e,
      a,
      t,
      I,
      n === null ? Yv : function() {
        return Bd(e), n(l);
      }
    );
  }
  function Qd(e) {
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
        lastRenderedReducer: on,
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
        lastRenderedReducer: on,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Bd(e) {
    var t = Qd(e);
    t.next === null && (t = e.alternate.memoizedState), Ka(
      e,
      t.next.queue,
      {},
      zt()
    );
  }
  function Ff() {
    return lt(ru);
  }
  function Hd() {
    return Ve().memoizedState;
  }
  function wd() {
    return Ve().memoizedState;
  }
  function Lv(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = zt();
          e = qn(n);
          var l = Qn(t, e, n);
          l !== null && (gt(l, t, n), La(l, t, n)), t = { cache: Af() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Gv(e, t, n) {
    var l = zt();
    n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ai(e) ? Ld(t, n) : (n = mf(e, t, n, l), n !== null && (gt(n, e, l), Gd(n, t, l)));
  }
  function Yd(e, t, n) {
    var l = zt();
    Ka(e, t, n, l);
  }
  function Ka(e, t, n, l) {
    var a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ai(e)) Ld(t, a);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var f = t.lastRenderedState, o = i(f, n);
          if (a.hasEagerState = !0, a.eagerState = o, Et(o, f))
            return ai(e, t, a, 0), je === null && li(), !1;
        } catch {
        }
      if (n = mf(e, t, a, l), n !== null)
        return gt(n, e, l), Gd(n, t, l), !0;
    }
    return !1;
  }
  function Wf(e, t, n, l) {
    if (l = {
      lane: 2,
      revertLane: zr(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ai(e)) {
      if (t) throw Error(r(479));
    } else
      t = mf(
        e,
        n,
        l,
        2
      ), t !== null && gt(t, e, 2);
  }
  function Ai(e) {
    var t = e.alternate;
    return e === ve || t !== null && t === ve;
  }
  function Ld(e, t) {
    Pl = gi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Gd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, Ks(e, n);
    }
  }
  var Ja = {
    readContext: lt,
    use: bi,
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
  Ja.useEffectEvent = Be;
  var Vd = {
    readContext: lt,
    use: bi,
    useCallback: function(e, t) {
      return st().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: lt,
    useEffect: Cd,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, Ei(
        4194308,
        4,
        Rd.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return Ei(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Ei(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = st();
      t = t === void 0 ? null : t;
      var l = e();
      if (gl) {
        Dn(!0);
        try {
          e();
        } finally {
          Dn(!1);
        }
      }
      return n.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, n) {
      var l = st();
      if (n !== void 0) {
        var a = n(t);
        if (gl) {
          Dn(!0);
          try {
            n(t);
          } finally {
            Dn(!1);
          }
        }
      } else a = t;
      return l.memoizedState = l.baseState = a, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      }, l.queue = e, e = e.dispatch = Gv.bind(
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
      e = Vf(e);
      var t = e.queue, n = Yd.bind(null, ve, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Kf,
    useDeferredValue: function(e, t) {
      var n = st();
      return Jf(n, e, t);
    },
    useTransition: function() {
      var e = Vf(!1);
      return e = qd.bind(
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
        (Ee & 127) !== 0 || sd(l, t, n);
      }
      a.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return a.queue = i, Cd(dd.bind(null, l, i, e), [
        e
      ]), l.flags |= 2048, ta(
        9,
        { destroy: void 0 },
        od.bind(
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
        var n = It, l = $t;
        n = (l & ~(1 << 32 - _t(l) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = pi++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = qv++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Ff,
    useFormState: _d,
    useActionState: _d,
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
      return t.queue = n, t = Wf.bind(
        null,
        ve,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Yf,
    useCacheRefresh: function() {
      return st().memoizedState = Lv.bind(
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
  }, $f = {
    readContext: lt,
    use: bi,
    useCallback: Ud,
    useContext: lt,
    useEffect: Zf,
    useImperativeHandle: Nd,
    useInsertionEffect: zd,
    useLayoutEffect: Od,
    useMemo: jd,
    useReducer: _i,
    useRef: Md,
    useState: function() {
      return _i(on);
    },
    useDebugValue: Kf,
    useDeferredValue: function(e, t) {
      var n = Ve();
      return xd(
        n,
        Re.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = _i(on)[0], t = Ve().memoizedState;
      return [
        typeof e == "boolean" ? e : Za(e),
        t
      ];
    },
    useSyncExternalStore: rd,
    useId: Hd,
    useHostTransitionStatus: Ff,
    useFormState: Ed,
    useActionState: Ed,
    useOptimistic: function(e, t) {
      var n = Ve();
      return hd(n, Re, e, t);
    },
    useMemoCache: Yf,
    useCacheRefresh: wd
  };
  $f.useEffectEvent = Dd;
  var Xd = {
    readContext: lt,
    use: bi,
    useCallback: Ud,
    useContext: lt,
    useEffect: Zf,
    useImperativeHandle: Nd,
    useInsertionEffect: zd,
    useLayoutEffect: Od,
    useMemo: jd,
    useReducer: Gf,
    useRef: Md,
    useState: function() {
      return Gf(on);
    },
    useDebugValue: Kf,
    useDeferredValue: function(e, t) {
      var n = Ve();
      return Re === null ? Jf(n, e, t) : xd(
        n,
        Re.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Gf(on)[0], t = Ve().memoizedState;
      return [
        typeof e == "boolean" ? e : Za(e),
        t
      ];
    },
    useSyncExternalStore: rd,
    useId: Hd,
    useHostTransitionStatus: Ff,
    useFormState: Ad,
    useActionState: Ad,
    useOptimistic: function(e, t) {
      var n = Ve();
      return Re !== null ? hd(n, Re, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Yf,
    useCacheRefresh: wd
  };
  Xd.useEffectEvent = Dd;
  function If(e, t, n, l) {
    t = e.memoizedState, n = n(l, t), n = n == null ? t : S({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Pf = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var l = zt(), a = qn(l);
      a.payload = t, n != null && (a.callback = n), t = Qn(e, a, l), t !== null && (gt(t, e, l), La(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var l = zt(), a = qn(l);
      a.tag = 1, a.payload = t, n != null && (a.callback = n), t = Qn(e, a, l), t !== null && (gt(t, e, l), La(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = zt(), l = qn(n);
      l.tag = 2, t != null && (l.callback = t), t = Qn(e, l, n), t !== null && (gt(t, e, n), La(t, e, n));
    }
  };
  function Zd(e, t, n, l, a, i, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, i, f) : t.prototype && t.prototype.isPureReactComponent ? !ja(n, l) || !ja(a, i) : !0;
  }
  function Kd(e, t, n, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && Pf.enqueueReplaceState(t, t.state, null);
  }
  function pl(e, t) {
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
  function Jd(e) {
    ni(e);
  }
  function kd(e) {
    console.error(e);
  }
  function Fd(e) {
    ni(e);
  }
  function Mi(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Wd(e, t, n) {
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
  function er(e, t, n) {
    return n = qn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Mi(e, t);
    }, n;
  }
  function $d(e) {
    return e = qn(e), e.tag = 3, e;
  }
  function Id(e, t, n, l) {
    var a = n.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var i = l.value;
      e.payload = function() {
        return a(i);
      }, e.callback = function() {
        Wd(t, n, l);
      };
    }
    var f = n.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
      Wd(t, n, l), typeof a != "function" && (Gn === null ? Gn = /* @__PURE__ */ new Set([this]) : Gn.add(this));
      var o = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: o !== null ? o : ""
      });
    });
  }
  function Vv(e, t, n, l, a) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = n.alternate, t !== null && Jl(
        t,
        n,
        a,
        !0
      ), n = At.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Lt === null ? Bi() : n.alternate === null && He === 0 && (He = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, l === di ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), Mr(e, l, a)), !1;
          case 22:
            return n.flags |= 65536, l === di ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), Mr(e, l, a)), !1;
        }
        throw Error(r(435, n.tag));
      }
      return Mr(e, l, a), Bi(), !1;
    }
    if (Ae)
      return t = At.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, l !== Sf && (e = Error(r(422), { cause: l }), Qa(Bt(e, n)))) : (l !== Sf && (t = Error(r(423), {
        cause: l
      }), Qa(
        Bt(t, n)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, l = Bt(l, n), a = er(
        e.stateNode,
        l,
        a
      ), Rf(e, a), He !== 4 && (He = 2)), !1;
    var i = Error(r(520), { cause: l });
    if (i = Bt(i, n), tu === null ? tu = [i] : tu.push(i), He !== 4 && (He = 2), t === null) return !0;
    l = Bt(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = a & -a, n.lanes |= e, e = er(n.stateNode, l, e), Rf(n, e), !1;
        case 1:
          if (t = n.type, i = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Gn === null || !Gn.has(i))))
            return n.flags |= 65536, a &= -a, n.lanes |= a, a = $d(a), Id(
              a,
              e,
              n,
              l
            ), Rf(n, a), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var tr = Error(r(461)), Ke = !1;
  function at(e, t, n, l) {
    t.child = e === null ? nd(t, null, n, l) : vl(
      t,
      e.child,
      n,
      l
    );
  }
  function Pd(e, t, n, l, a) {
    n = n.render;
    var i = t.ref;
    if ("ref" in l) {
      var f = {};
      for (var o in l)
        o !== "ref" && (f[o] = l[o]);
    } else f = l;
    return dl(t), l = Qf(
      e,
      t,
      n,
      f,
      i,
      a
    ), o = Bf(), e !== null && !Ke ? (Hf(e, t, a), dn(e, t, a)) : (Ae && o && gf(t), t.flags |= 1, at(e, t, l, a), t.child);
  }
  function e0(e, t, n, l, a) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !yf(i) && i.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = i, t0(
        e,
        t,
        i,
        l,
        a
      )) : (e = ii(
        n.type,
        null,
        l,
        t,
        t.mode,
        a
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !rr(e, a)) {
      var f = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : ja, n(f, l) && e.ref === t.ref)
        return dn(e, t, a);
    }
    return t.flags |= 1, e = un(i, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function t0(e, t, n, l, a) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (ja(i, l) && e.ref === t.ref)
        if (Ke = !1, t.pendingProps = l = i, rr(e, a))
          (e.flags & 131072) !== 0 && (Ke = !0);
        else
          return t.lanes = e.lanes, dn(e, t, a);
    }
    return nr(
      e,
      t,
      n,
      l,
      a
    );
  }
  function n0(e, t, n, l) {
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
        return l0(
          e,
          t,
          i,
          n,
          l
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && si(
          t,
          i !== null ? i.cachePool : null
        ), i !== null ? ud(t, i) : Uf(), id(t);
      else
        return l = t.lanes = 536870912, l0(
          e,
          t,
          i !== null ? i.baseLanes | n : n,
          n,
          l
        );
    } else
      i !== null ? (si(t, i.cachePool), ud(t, i), Hn(), t.memoizedState = null) : (e !== null && si(t, null), Uf(), Hn());
    return at(e, t, a, n), t.child;
  }
  function ka(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function l0(e, t, n, l, a) {
    var i = Cf();
    return i = i === null ? null : { parent: Xe._currentValue, pool: i }, t.memoizedState = {
      baseLanes: n,
      cachePool: i
    }, e !== null && si(t, null), Uf(), id(t), e !== null && Jl(e, t, l, !0), t.childLanes = a, null;
  }
  function Ci(e, t) {
    return t = zi(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function a0(e, t, n) {
    return vl(t, e.child, null, n), e = Ci(t, t.pendingProps), e.flags |= 2, Mt(t), t.memoizedState = null, e;
  }
  function Xv(e, t, n) {
    var l = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ae) {
        if (l.mode === "hidden")
          return e = Ci(t, l), t.lanes = 536870912, ka(null, e);
        if (xf(t), (e = xe) ? (e = vm(
          e,
          Yt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Rn !== null ? { id: $t, overflow: It } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Lo(e), n.return = t, t.child = n, nt = t, xe = null)) : e = null, e === null) throw Un(t);
        return t.lanes = 536870912, null;
      }
      return Ci(t, l);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var f = i.dehydrated;
      if (xf(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = a0(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (Ke || Jl(e, t, n, !1), a = (n & e.childLanes) !== 0, Ke || a) {
        if (l = je, l !== null && (f = Js(l, n), f !== 0 && f !== i.retryLane))
          throw i.retryLane = f, fl(e, f), gt(l, e, f), tr;
        Bi(), t = a0(
          e,
          t,
          n
        );
      } else
        e = i.treeContext, xe = Gt(f.nextSibling), nt = t, Ae = !0, Nn = null, Yt = !1, e !== null && Xo(t, e), t = Ci(t, l), t.flags |= 4096;
      return t;
    }
    return e = un(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Di(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(r(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function nr(e, t, n, l, a) {
    return dl(t), n = Qf(
      e,
      t,
      n,
      l,
      void 0,
      a
    ), l = Bf(), e !== null && !Ke ? (Hf(e, t, a), dn(e, t, a)) : (Ae && l && gf(t), t.flags |= 1, at(e, t, n, a), t.child);
  }
  function u0(e, t, n, l, a, i) {
    return dl(t), t.updateQueue = null, n = fd(
      t,
      l,
      n,
      a
    ), cd(e), l = Bf(), e !== null && !Ke ? (Hf(e, t, i), dn(e, t, i)) : (Ae && l && gf(t), t.flags |= 1, at(e, t, n, i), t.child);
  }
  function i0(e, t, n, l, a) {
    if (dl(t), t.stateNode === null) {
      var i = Vl, f = n.contextType;
      typeof f == "object" && f !== null && (i = lt(f)), i = new n(l, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Pf, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = l, i.state = t.memoizedState, i.refs = {}, zf(t), f = n.contextType, i.context = typeof f == "object" && f !== null ? lt(f) : Vl, i.state = t.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (If(
        t,
        n,
        f,
        l
      ), i.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (f = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), f !== i.state && Pf.enqueueReplaceState(i, i.state, null), Va(t, l, i, a), Ga(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      i = t.stateNode;
      var o = t.memoizedProps, v = pl(n, o);
      i.props = v;
      var B = i.context, J = n.contextType;
      f = Vl, typeof J == "object" && J !== null && (f = lt(J));
      var ee = n.getDerivedStateFromProps;
      J = typeof ee == "function" || typeof i.getSnapshotBeforeUpdate == "function", o = t.pendingProps !== o, J || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o || B !== f) && Kd(
        t,
        i,
        l,
        f
      ), xn = !1;
      var H = t.memoizedState;
      i.state = H, Va(t, l, i, a), Ga(), B = t.memoizedState, o || H !== B || xn ? (typeof ee == "function" && (If(
        t,
        n,
        ee,
        l
      ), B = t.memoizedState), (v = xn || Zd(
        t,
        n,
        v,
        l,
        H,
        B,
        f
      )) ? (J || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = B), i.props = l, i.state = B, i.context = f, l = v) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      i = t.stateNode, Of(e, t), f = t.memoizedProps, J = pl(n, f), i.props = J, ee = t.pendingProps, H = i.context, B = n.contextType, v = Vl, typeof B == "object" && B !== null && (v = lt(B)), o = n.getDerivedStateFromProps, (B = typeof o == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f !== ee || H !== v) && Kd(
        t,
        i,
        l,
        v
      ), xn = !1, H = t.memoizedState, i.state = H, Va(t, l, i, a), Ga();
      var Z = t.memoizedState;
      f !== ee || H !== Z || xn || e !== null && e.dependencies !== null && fi(e.dependencies) ? (typeof o == "function" && (If(
        t,
        n,
        o,
        l
      ), Z = t.memoizedState), (J = xn || Zd(
        t,
        n,
        J,
        l,
        H,
        Z,
        v
      ) || e !== null && e.dependencies !== null && fi(e.dependencies)) ? (B || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(l, Z, v), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        l,
        Z,
        v
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && H === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = Z), i.props = l, i.state = Z, i.context = v, l = J) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && H === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return i = l, Di(e, t), l = (t.flags & 128) !== 0, i || l ? (i = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && l ? (t.child = vl(
      t,
      e.child,
      null,
      a
    ), t.child = vl(
      t,
      null,
      n,
      a
    )) : at(e, t, n, a), t.memoizedState = i.state, e = t.child) : e = dn(
      e,
      t,
      a
    ), e;
  }
  function c0(e, t, n, l) {
    return sl(), t.flags |= 256, at(e, t, n, l), t.child;
  }
  var lr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ar(e) {
    return { baseLanes: e, cachePool: Wo() };
  }
  function ur(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Dt), e;
  }
  function f0(e, t, n) {
    var l = t.pendingProps, a = !1, i = (t.flags & 128) !== 0, f;
    if ((f = i) || (f = e !== null && e.memoizedState === null ? !1 : (Ge.current & 2) !== 0), f && (a = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ae) {
        if (a ? Bn(t) : Hn(), (e = xe) ? (e = vm(
          e,
          Yt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Rn !== null ? { id: $t, overflow: It } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Lo(e), n.return = t, t.child = n, nt = t, xe = null)) : e = null, e === null) throw Un(t);
        return Lr(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var o = l.children;
      return l = l.fallback, a ? (Hn(), a = t.mode, o = zi(
        { mode: "hidden", children: o },
        a
      ), l = rl(
        l,
        a,
        n,
        null
      ), o.return = t, l.return = t, o.sibling = l, t.child = o, l = t.child, l.memoizedState = ar(n), l.childLanes = ur(
        e,
        f,
        n
      ), t.memoizedState = lr, ka(null, l)) : (Bn(t), ir(t, o));
    }
    var v = e.memoizedState;
    if (v !== null && (o = v.dehydrated, o !== null)) {
      if (i)
        t.flags & 256 ? (Bn(t), t.flags &= -257, t = cr(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (Hn(), t.child = e.child, t.flags |= 128, t = null) : (Hn(), o = l.fallback, a = t.mode, l = zi(
          { mode: "visible", children: l.children },
          a
        ), o = rl(
          o,
          a,
          n,
          null
        ), o.flags |= 2, l.return = t, o.return = t, l.sibling = o, t.child = l, vl(
          t,
          e.child,
          null,
          n
        ), l = t.child, l.memoizedState = ar(n), l.childLanes = ur(
          e,
          f,
          n
        ), t.memoizedState = lr, t = ka(null, l));
      else if (Bn(t), Lr(o)) {
        if (f = o.nextSibling && o.nextSibling.dataset, f) var B = f.dgst;
        f = B, l = Error(r(419)), l.stack = "", l.digest = f, Qa({ value: l, source: null, stack: null }), t = cr(
          e,
          t,
          n
        );
      } else if (Ke || Jl(e, t, n, !1), f = (n & e.childLanes) !== 0, Ke || f) {
        if (f = je, f !== null && (l = Js(f, n), l !== 0 && l !== v.retryLane))
          throw v.retryLane = l, fl(e, l), gt(f, e, l), tr;
        Yr(o) || Bi(), t = cr(
          e,
          t,
          n
        );
      } else
        Yr(o) ? (t.flags |= 192, t.child = e.child, t = null) : (e = v.treeContext, xe = Gt(
          o.nextSibling
        ), nt = t, Ae = !0, Nn = null, Yt = !1, e !== null && Xo(t, e), t = ir(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (Hn(), o = l.fallback, a = t.mode, v = e.child, B = v.sibling, l = un(v, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = v.subtreeFlags & 65011712, B !== null ? o = un(
      B,
      o
    ) : (o = rl(
      o,
      a,
      n,
      null
    ), o.flags |= 2), o.return = t, l.return = t, l.sibling = o, t.child = l, ka(null, l), l = t.child, o = e.child.memoizedState, o === null ? o = ar(n) : (a = o.cachePool, a !== null ? (v = Xe._currentValue, a = a.parent !== v ? { parent: v, pool: v } : a) : a = Wo(), o = {
      baseLanes: o.baseLanes | n,
      cachePool: a
    }), l.memoizedState = o, l.childLanes = ur(
      e,
      f,
      n
    ), t.memoizedState = lr, ka(e.child, l)) : (Bn(t), n = e.child, e = n.sibling, n = un(n, {
      mode: "visible",
      children: l.children
    }), n.return = t, n.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function ir(e, t) {
    return t = zi(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function zi(e, t) {
    return e = Tt(22, e, null, t), e.lanes = 0, e;
  }
  function cr(e, t, n) {
    return vl(t, e.child, null, n), e = ir(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function r0(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Ef(e.return, t, n);
  }
  function fr(e, t, n, l, a, i) {
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
  function s0(e, t, n) {
    var l = t.pendingProps, a = l.revealOrder, i = l.tail;
    l = l.children;
    var f = Ge.current, o = (f & 2) !== 0;
    if (o ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, le(Ge, f), at(e, t, l, n), l = Ae ? qa : 0, !o && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && r0(e, n, t);
        else if (e.tag === 19)
          r0(e, n, t);
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
          e = n.alternate, e !== null && vi(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), fr(
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
          if (e = a.alternate, e !== null && vi(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        fr(
          t,
          !0,
          n,
          null,
          i,
          l
        );
        break;
      case "together":
        fr(
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
  function dn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Ln |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Jl(
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
      for (e = t.child, n = un(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = un(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function rr(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && fi(e)));
  }
  function Zv(e, t, n) {
    switch (t.tag) {
      case 3:
        Se(t, t.stateNode.containerInfo), jn(t, Xe, e.memoizedState.cache), sl();
        break;
      case 27:
      case 5:
        pe(t);
        break;
      case 4:
        Se(t, t.stateNode.containerInfo);
        break;
      case 10:
        jn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, xf(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Bn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? f0(e, t, n) : (Bn(t), e = dn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        Bn(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (l = (n & t.childLanes) !== 0, l || (Jl(
          e,
          t,
          n,
          !1
        ), l = (n & t.childLanes) !== 0), a) {
          if (l)
            return s0(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), le(Ge, Ge.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, n0(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        jn(t, Xe, e.memoizedState.cache);
    }
    return dn(e, t, n);
  }
  function o0(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ke = !0;
      else {
        if (!rr(e, n) && (t.flags & 128) === 0)
          return Ke = !1, Zv(
            e,
            t,
            n
          );
        Ke = (e.flags & 131072) !== 0;
      }
    else
      Ke = !1, Ae && (t.flags & 1048576) !== 0 && Vo(t, qa, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = yl(t.elementType), t.type = e, typeof e == "function")
            yf(e) ? (l = pl(e, l), t.tag = 1, t = i0(
              null,
              t,
              e,
              l,
              n
            )) : (t.tag = 0, t = nr(
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
                t.tag = 11, t = Pd(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              } else if (a === R) {
                t.tag = 14, t = e0(
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
        return nr(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return l = t.type, a = pl(
          l,
          t.pendingProps
        ), i0(
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
          a = i.element, Of(e, t), Va(t, l, null, n);
          var f = t.memoizedState;
          if (l = f.cache, jn(t, Xe, l), l !== i.cache && Tf(
            t,
            [Xe],
            n,
            !0
          ), Ga(), l = f.element, i.isDehydrated)
            if (i = {
              element: l,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = c0(
                e,
                t,
                l,
                n
              );
              break e;
            } else if (l !== a) {
              a = Bt(
                Error(r(424)),
                t
              ), Qa(a), t = c0(
                e,
                t,
                l,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, xe = Gt(e.firstChild), nt = t, Ae = !0, Nn = null, Yt = !0, n = nd(
                t,
                null,
                l,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (sl(), l === a) {
              t = dn(
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
        return Di(e, t), e === null ? (n = Em(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Ae || (n = t.type, e = t.pendingProps, l = Xi(
          se.current
        ).createElement(n), l[tt] = t, l[ot] = e, ut(l, n, e), Fe(l), t.stateNode = l) : t.memoizedState = Em(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return pe(t), e === null && Ae && (l = t.stateNode = Sm(
          t.type,
          t.pendingProps,
          se.current
        ), nt = t, Yt = !0, a = xe, Kn(t.type) ? (Gr = a, xe = Gt(l.firstChild)) : xe = a), at(
          e,
          t,
          t.pendingProps.children,
          n
        ), Di(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ae && ((a = l = xe) && (l = _2(
          l,
          t.type,
          t.pendingProps,
          Yt
        ), l !== null ? (t.stateNode = l, nt = t, xe = Gt(l.firstChild), Yt = !1, a = !0) : a = !1), a || Un(t)), pe(t), a = t.type, i = t.pendingProps, f = e !== null ? e.memoizedProps : null, l = i.children, Br(a, i) ? l = null : f !== null && Br(a, f) && (t.flags |= 32), t.memoizedState !== null && (a = Qf(
          e,
          t,
          Qv,
          null,
          null,
          n
        ), ru._currentValue = a), Di(e, t), at(e, t, l, n), t.child;
      case 6:
        return e === null && Ae && ((e = n = xe) && (n = E2(
          n,
          t.pendingProps,
          Yt
        ), n !== null ? (t.stateNode = n, nt = t, xe = null, e = !0) : e = !1), e || Un(t)), null;
      case 13:
        return f0(e, t, n);
      case 4:
        return Se(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = vl(
          t,
          null,
          l,
          n
        ) : at(e, t, l, n), t.child;
      case 11:
        return Pd(
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
        return l = t.pendingProps, jn(t, t.type, l.value), at(e, t, l.children, n), t.child;
      case 9:
        return a = t.type._context, l = t.pendingProps.children, dl(t), a = lt(a), l = l(a), t.flags |= 1, at(e, t, l, n), t.child;
      case 14:
        return e0(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return t0(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return s0(e, t, n);
      case 31:
        return Xv(e, t, n);
      case 22:
        return n0(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return dl(t), l = lt(Xe), e === null ? (a = Cf(), a === null && (a = je, i = Af(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= n), a = i), t.memoizedState = { parent: l, cache: a }, zf(t), jn(t, Xe, a)) : ((e.lanes & n) !== 0 && (Of(e, t), Va(t, null, null, n), Ga()), a = e.memoizedState, i = t.memoizedState, a.parent !== l ? (a = { parent: l, cache: l }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), jn(t, Xe, l)) : (l = i.cache, jn(t, Xe, l), l !== a.cache && Tf(
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
  function mn(e) {
    e.flags |= 4;
  }
  function sr(e, t, n, l, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (H0()) e.flags |= 8192;
        else
          throw hl = di, Df;
    } else e.flags &= -16777217;
  }
  function d0(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Dm(t))
      if (H0()) e.flags |= 8192;
      else
        throw hl = di, Df;
  }
  function Oi(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Xs() : 536870912, e.lanes |= t, ua |= t);
  }
  function Fa(e, t) {
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
  function Kv(e, t, n) {
    var l = t.pendingProps;
    switch (pf(t), t.tag) {
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
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), rn(Xe), de(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Kl(t) ? mn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, bf())), qe(t), null;
      case 26:
        var a = t.type, i = t.memoizedState;
        return e === null ? (mn(t), i !== null ? (qe(t), d0(t, i)) : (qe(t), sr(
          t,
          a,
          null,
          l,
          n
        ))) : i ? i !== e.memoizedState ? (mn(t), qe(t), d0(t, i)) : (qe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && mn(t), qe(t), sr(
          t,
          a,
          e,
          l,
          n
        )), null;
      case 27:
        if (rt(t), n = se.current, a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && mn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(r(166));
            return qe(t), null;
          }
          e = ne.current, Kl(t) ? Zo(t) : (e = Sm(a, l, n), t.stateNode = e, mn(t));
        }
        return qe(t), null;
      case 5:
        if (rt(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && mn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(r(166));
            return qe(t), null;
          }
          if (i = ne.current, Kl(t))
            Zo(t);
          else {
            var f = Xi(
              se.current
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
            l && mn(t);
          }
        }
        return qe(t), sr(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && mn(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(r(166));
          if (e = se.current, Kl(t)) {
            if (e = t.stateNode, n = t.memoizedProps, l = null, a = nt, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  l = a.memoizedProps;
              }
            e[tt] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || fm(e.nodeValue, n)), e || Un(t, !0);
          } else
            e = Xi(e).createTextNode(
              l
            ), e[tt] = t, t.stateNode = e;
        }
        return qe(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Kl(t), n !== null) {
            if (e === null) {
              if (!l) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[tt] = t;
            } else
              sl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            qe(t), e = !1;
          } else
            n = bf(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Mt(t), t) : (Mt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return qe(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = Kl(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(r(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
              a[tt] = t;
            } else
              sl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            qe(t), a = !1;
          } else
            a = bf(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (Mt(t), t) : (Mt(t), null);
        }
        return Mt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = l !== null, e = e !== null && e.memoizedState !== null, n && (l = t.child, a = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (a = l.alternate.memoizedState.cachePool.pool), i = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (i = l.memoizedState.cachePool.pool), i !== a && (l.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Oi(t, t.updateQueue), qe(t), null);
      case 4:
        return de(), e === null && Ur(t.stateNode.containerInfo), qe(t), null;
      case 10:
        return rn(t.type), qe(t), null;
      case 19:
        if (K(Ge), l = t.memoizedState, l === null) return qe(t), null;
        if (a = (t.flags & 128) !== 0, i = l.rendering, i === null)
          if (a) Fa(l, !1);
          else {
            if (He !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = vi(e), i !== null) {
                  for (t.flags |= 128, Fa(l, !1), e = i.updateQueue, t.updateQueue = e, Oi(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Yo(n, e), n = n.sibling;
                  return le(
                    Ge,
                    Ge.current & 1 | 2
                  ), Ae && cn(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && St() > xi && (t.flags |= 128, a = !0, Fa(l, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = vi(i), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, Oi(t, e), Fa(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !Ae)
                return qe(t), null;
            } else
              2 * St() - l.renderingStartTime > xi && n !== 536870912 && (t.flags |= 128, a = !0, Fa(l, !1), t.lanes = 4194304);
          l.isBackwards ? (i.sibling = t.child, t.child = i) : (e = l.last, e !== null ? e.sibling = i : t.child = i, l.last = i);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = St(), e.sibling = null, n = Ge.current, le(
          Ge,
          a ? n & 1 | 2 : n & 1
        ), Ae && cn(t, l.treeForkCount), e) : (qe(t), null);
      case 22:
      case 23:
        return Mt(t), jf(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : qe(t), n = t.updateQueue, n !== null && Oi(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && K(ml), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), rn(Xe), qe(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function Jv(e, t) {
    switch (pf(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return rn(Xe), de(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return rt(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Mt(t), t.alternate === null)
            throw Error(r(340));
          sl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Mt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          sl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return K(Ge), null;
      case 4:
        return de(), null;
      case 10:
        return rn(t.type), null;
      case 22:
      case 23:
        return Mt(t), jf(), e !== null && K(ml), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return rn(Xe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function m0(e, t) {
    switch (pf(t), t.tag) {
      case 3:
        rn(Xe), de();
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
        rn(t.type);
        break;
      case 22:
      case 23:
        Mt(t), jf(), e !== null && K(ml);
        break;
      case 24:
        rn(Xe);
    }
  }
  function Wa(e, t) {
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
  function wn(e, t, n) {
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
  function y0(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        ad(t, n);
      } catch (l) {
        Oe(e, e.return, l);
      }
    }
  }
  function h0(e, t, n) {
    n.props = pl(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      Oe(e, t, l);
    }
  }
  function $a(e, t) {
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
  function Pt(e, t) {
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
  function v0(e) {
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
  function or(e, t, n) {
    try {
      var l = e.stateNode;
      h2(l, e.type, n, t), l[ot] = t;
    } catch (a) {
      Oe(e, e.return, a);
    }
  }
  function g0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Kn(e.type) || e.tag === 4;
  }
  function dr(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || g0(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Kn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function mr(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ln));
    else if (l !== 4 && (l === 27 && Kn(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (mr(e, t, n), e = e.sibling; e !== null; )
        mr(e, t, n), e = e.sibling;
  }
  function Ri(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && (l === 27 && Kn(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (Ri(e, t, n), e = e.sibling; e !== null; )
        Ri(e, t, n), e = e.sibling;
  }
  function p0(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      ut(t, l, n), t[tt] = e, t[ot] = n;
    } catch (i) {
      Oe(e, e.return, i);
    }
  }
  var yn = !1, Je = !1, yr = !1, S0 = typeof WeakSet == "function" ? WeakSet : Set, We = null;
  function kv(e, t) {
    if (e = e.containerInfo, qr = $i, e = No(e), cf(e)) {
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
            var f = 0, o = -1, v = -1, B = 0, J = 0, ee = e, H = null;
            t: for (; ; ) {
              for (var Z; ee !== n || a !== 0 && ee.nodeType !== 3 || (o = f + a), ee !== i || l !== 0 && ee.nodeType !== 3 || (v = f + l), ee.nodeType === 3 && (f += ee.nodeValue.length), (Z = ee.firstChild) !== null; )
                H = ee, ee = Z;
              for (; ; ) {
                if (ee === e) break t;
                if (H === n && ++B === a && (o = f), H === i && ++J === l && (v = f), (Z = ee.nextSibling) !== null) break;
                ee = H, H = ee.parentNode;
              }
              ee = Z;
            }
            n = o === -1 || v === -1 ? null : { start: o, end: v };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Qr = { focusedElem: e, selectionRange: n }, $i = !1, We = t; We !== null; )
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
                  var fe = pl(
                    n.type,
                    a
                  );
                  e = l.getSnapshotBeforeUpdate(
                    fe,
                    i
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ye) {
                  Oe(
                    n,
                    n.return,
                    ye
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  wr(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      wr(e);
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
  function b0(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        vn(e, n), l & 4 && Wa(5, n);
        break;
      case 1:
        if (vn(e, n), l & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (f) {
              Oe(n, n.return, f);
            }
          else {
            var a = pl(
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
        l & 64 && y0(n), l & 512 && $a(n, n.return);
        break;
      case 3:
        if (vn(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
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
            ad(e, t);
          } catch (f) {
            Oe(n, n.return, f);
          }
        }
        break;
      case 27:
        t === null && l & 4 && p0(n);
      case 26:
      case 5:
        vn(e, n), t === null && l & 4 && v0(n), l & 512 && $a(n, n.return);
        break;
      case 12:
        vn(e, n);
        break;
      case 31:
        vn(e, n), l & 4 && T0(e, n);
        break;
      case 13:
        vn(e, n), l & 4 && A0(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = l2.bind(
          null,
          n
        ), T2(e, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || yn, !l) {
          t = t !== null && t.memoizedState !== null || Je, a = yn;
          var i = Je;
          yn = l, (Je = t) && !i ? gn(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : vn(e, n), yn = a, Je = i;
        }
        break;
      case 30:
        break;
      default:
        vn(e, n);
    }
  }
  function _0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, _0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Vc(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Qe = null, mt = !1;
  function hn(e, t, n) {
    for (n = n.child; n !== null; )
      E0(e, t, n), n = n.sibling;
  }
  function E0(e, t, n) {
    if (bt && typeof bt.onCommitFiberUnmount == "function")
      try {
        bt.onCommitFiberUnmount(_a, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Je || Pt(n, t), hn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Je || Pt(n, t);
        var l = Qe, a = mt;
        Kn(n.type) && (Qe = n.stateNode, mt = !1), hn(
          e,
          t,
          n
        ), iu(n.stateNode), Qe = l, mt = a;
        break;
      case 5:
        Je || Pt(n, t);
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
        Qe !== null && (mt ? (e = Qe, ym(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), ma(e)) : ym(Qe, n.stateNode));
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
        wn(2, n, t), Je || wn(4, n, t), hn(
          e,
          t,
          n
        );
        break;
      case 1:
        Je || (Pt(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && h0(
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
  function T0(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        ma(e);
      } catch (n) {
        Oe(t, t.return, n);
      }
    }
  }
  function A0(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        ma(e);
      } catch (n) {
        Oe(t, t.return, n);
      }
  }
  function Fv(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new S0()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new S0()), t;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function Ni(e, t) {
    var n = Fv(e);
    t.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var a = a2.bind(null, e, l);
        l.then(a, a);
      }
    });
  }
  function yt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var a = n[l], i = e, f = t, o = f;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (Kn(o.type)) {
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
        E0(i, f, a), Qe = null, mt = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        M0(t, e), t = t.sibling;
  }
  var Kt = null;
  function M0(e, t) {
    var n = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        yt(t, e), ht(e), l & 4 && (wn(3, e, e.return), Wa(3, e), wn(5, e, e.return));
        break;
      case 1:
        yt(t, e), ht(e), l & 512 && (Je || n === null || Pt(n, n.return)), l & 64 && yn && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var a = Kt;
        if (yt(t, e), ht(e), l & 512 && (Je || n === null || Pt(n, n.return)), l & 4) {
          var i = n !== null ? n.memoizedState : null;
          if (l = e.memoizedState, n === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, n = e.memoizedProps, a = a.ownerDocument || a;
                  t: switch (l) {
                    case "title":
                      i = a.getElementsByTagName("title")[0], (!i || i[Aa] || i[tt] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(l), a.head.insertBefore(
                        i,
                        a.querySelector("head > title")
                      )), ut(i, l, n), i[tt] = e, Fe(i), l = i;
                      break e;
                    case "link":
                      var f = Mm(
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
                      if (f = Mm(
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
                Cm(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Am(
                a,
                l,
                e.memoizedProps
              );
          else
            i !== l ? (i === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : i.count--, l === null ? Cm(
              a,
              e.type,
              e.stateNode
            ) : Am(
              a,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && or(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        yt(t, e), ht(e), l & 512 && (Je || n === null || Pt(n, n.return)), n !== null && l & 4 && or(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (yt(t, e), ht(e), l & 512 && (Je || n === null || Pt(n, n.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            Ql(a, "");
          } catch (fe) {
            Oe(e, e.return, fe);
          }
        }
        l & 4 && e.stateNode != null && (a = e.memoizedProps, or(
          e,
          a,
          n !== null ? n.memoizedProps : a
        )), l & 1024 && (yr = !0);
        break;
      case 6:
        if (yt(t, e), ht(e), l & 4) {
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
        if (Ji = null, a = Kt, Kt = Zi(t.containerInfo), yt(t, e), Kt = a, ht(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            ma(t.containerInfo);
          } catch (fe) {
            Oe(e, e.return, fe);
          }
        yr && (yr = !1, C0(e));
        break;
      case 4:
        l = Kt, Kt = Zi(
          e.stateNode.containerInfo
        ), yt(t, e), ht(e), Kt = l;
        break;
      case 12:
        yt(t, e), ht(e);
        break;
      case 31:
        yt(t, e), ht(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Ni(e, l)));
        break;
      case 13:
        yt(t, e), ht(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (ji = St()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Ni(e, l)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var v = n !== null && n.memoizedState !== null, B = yn, J = Je;
        if (yn = B || a, Je = J || v, yt(t, e), Je = J, yn = B, ht(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (n === null || v || yn || Je || Sl(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                v = n = t;
                try {
                  if (i = v.stateNode, a)
                    f = i.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    o = v.stateNode;
                    var ee = v.memoizedProps.style, H = ee != null && ee.hasOwnProperty("display") ? ee.display : null;
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
                  a ? hm(Z, !0) : hm(v.stateNode, !1);
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
        l & 4 && (l = e.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, Ni(e, n))));
        break;
      case 19:
        yt(t, e), ht(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Ni(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        yt(t, e), ht(e);
    }
  }
  function ht(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (g0(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var a = n.stateNode, i = dr(e);
            Ri(e, i, a);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (Ql(f, ""), n.flags &= -33);
            var o = dr(e);
            Ri(e, o, f);
            break;
          case 3:
          case 4:
            var v = n.stateNode.containerInfo, B = dr(e);
            mr(
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
  function C0(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        C0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function vn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        b0(e, t.alternate, t), t = t.sibling;
  }
  function Sl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          wn(4, t, t.return), Sl(t);
          break;
        case 1:
          Pt(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && h0(
            t,
            t.return,
            n
          ), Sl(t);
          break;
        case 27:
          iu(t.stateNode);
        case 26:
        case 5:
          Pt(t, t.return), Sl(t);
          break;
        case 22:
          t.memoizedState === null && Sl(t);
          break;
        case 30:
          Sl(t);
          break;
        default:
          Sl(t);
      }
      e = e.sibling;
    }
  }
  function gn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, a = e, i = t, f = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          gn(
            a,
            i,
            n
          ), Wa(4, i);
          break;
        case 1:
          if (gn(
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
                  ld(v[a], o);
            } catch (B) {
              Oe(l, l.return, B);
            }
          }
          n && f & 64 && y0(i), $a(i, i.return);
          break;
        case 27:
          p0(i);
        case 26:
        case 5:
          gn(
            a,
            i,
            n
          ), n && l === null && f & 4 && v0(i), $a(i, i.return);
          break;
        case 12:
          gn(
            a,
            i,
            n
          );
          break;
        case 31:
          gn(
            a,
            i,
            n
          ), n && f & 4 && T0(a, i);
          break;
        case 13:
          gn(
            a,
            i,
            n
          ), n && f & 4 && A0(a, i);
          break;
        case 22:
          i.memoizedState === null && gn(
            a,
            i,
            n
          ), $a(i, i.return);
          break;
        case 30:
          break;
        default:
          gn(
            a,
            i,
            n
          );
      }
      t = t.sibling;
    }
  }
  function hr(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Ba(n));
  }
  function vr(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ba(e));
  }
  function Jt(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        D0(
          e,
          t,
          n,
          l
        ), t = t.sibling;
  }
  function D0(e, t, n, l) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Jt(
          e,
          t,
          n,
          l
        ), a & 2048 && Wa(9, t);
        break;
      case 1:
        Jt(
          e,
          t,
          n,
          l
        );
        break;
      case 3:
        Jt(
          e,
          t,
          n,
          l
        ), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ba(e)));
        break;
      case 12:
        if (a & 2048) {
          Jt(
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
          Jt(
            e,
            t,
            n,
            l
          );
        break;
      case 31:
        Jt(
          e,
          t,
          n,
          l
        );
        break;
      case 13:
        Jt(
          e,
          t,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        i = t.stateNode, f = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? Jt(
          e,
          t,
          n,
          l
        ) : Ia(e, t) : i._visibility & 2 ? Jt(
          e,
          t,
          n,
          l
        ) : (i._visibility |= 2, na(
          e,
          t,
          n,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && hr(f, t);
        break;
      case 24:
        Jt(
          e,
          t,
          n,
          l
        ), a & 2048 && vr(t.alternate, t);
        break;
      default:
        Jt(
          e,
          t,
          n,
          l
        );
    }
  }
  function na(e, t, n, l, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, f = t, o = n, v = l, B = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          na(
            i,
            f,
            o,
            v,
            a
          ), Wa(8, f);
          break;
        case 23:
          break;
        case 22:
          var J = f.stateNode;
          f.memoizedState !== null ? J._visibility & 2 ? na(
            i,
            f,
            o,
            v,
            a
          ) : Ia(
            i,
            f
          ) : (J._visibility |= 2, na(
            i,
            f,
            o,
            v,
            a
          )), a && B & 2048 && hr(
            f.alternate,
            f
          );
          break;
        case 24:
          na(
            i,
            f,
            o,
            v,
            a
          ), a && B & 2048 && vr(f.alternate, f);
          break;
        default:
          na(
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
  function Ia(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, l = t, a = l.flags;
        switch (l.tag) {
          case 22:
            Ia(n, l), a & 2048 && hr(
              l.alternate,
              l
            );
            break;
          case 24:
            Ia(n, l), a & 2048 && vr(l.alternate, l);
            break;
          default:
            Ia(n, l);
        }
        t = t.sibling;
      }
  }
  var Pa = 8192;
  function la(e, t, n) {
    if (e.subtreeFlags & Pa)
      for (e = e.child; e !== null; )
        z0(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function z0(e, t, n) {
    switch (e.tag) {
      case 26:
        la(
          e,
          t,
          n
        ), e.flags & Pa && e.memoizedState !== null && q2(
          n,
          Kt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        la(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var l = Kt;
        Kt = Zi(e.stateNode.containerInfo), la(
          e,
          t,
          n
        ), Kt = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Pa, Pa = 16777216, la(
          e,
          t,
          n
        ), Pa = l) : la(
          e,
          t,
          n
        ));
        break;
      default:
        la(
          e,
          t,
          n
        );
    }
  }
  function O0(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function eu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          We = l, N0(
            l,
            e
          );
        }
      O0(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        R0(e), e = e.sibling;
  }
  function R0(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        eu(e), e.flags & 2048 && wn(9, e, e.return);
        break;
      case 3:
        eu(e);
        break;
      case 12:
        eu(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Ui(e)) : eu(e);
        break;
      default:
        eu(e);
    }
  }
  function Ui(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          We = l, N0(
            l,
            e
          );
        }
      O0(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          wn(8, t, t.return), Ui(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Ui(t));
          break;
        default:
          Ui(t);
      }
      e = e.sibling;
    }
  }
  function N0(e, t) {
    for (; We !== null; ) {
      var n = We;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          wn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Ba(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, We = l;
      else
        e: for (n = e; We !== null; ) {
          l = We;
          var a = l.sibling, i = l.return;
          if (_0(l), l === n) {
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
  var Wv = {
    getCacheForType: function(e) {
      var t = lt(Xe), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return lt(Xe).controller.signal;
    }
  }, $v = typeof WeakMap == "function" ? WeakMap : Map, De = 0, je = null, be = null, Ee = 0, ze = 0, Ct = null, Yn = !1, aa = !1, gr = !1, pn = 0, He = 0, Ln = 0, bl = 0, pr = 0, Dt = 0, ua = 0, tu = null, vt = null, Sr = !1, ji = 0, U0 = 0, xi = 1 / 0, qi = null, Gn = null, ke = 0, Vn = null, ia = null, Sn = 0, br = 0, _r = null, j0 = null, nu = 0, Er = null;
  function zt() {
    return (De & 2) !== 0 && Ee !== 0 ? Ee & -Ee : D.T !== null ? zr() : ks();
  }
  function x0() {
    if (Dt === 0)
      if ((Ee & 536870912) === 0 || Ae) {
        var e = Vu;
        Vu <<= 1, (Vu & 3932160) === 0 && (Vu = 262144), Dt = e;
      } else Dt = 536870912;
    return e = At.current, e !== null && (e.flags |= 32), Dt;
  }
  function gt(e, t, n) {
    (e === je && (ze === 2 || ze === 9) || e.cancelPendingCommit !== null) && (ca(e, 0), Xn(
      e,
      Ee,
      Dt,
      !1
    )), Ta(e, n), ((De & 2) === 0 || e !== je) && (e === je && ((De & 2) === 0 && (bl |= n), He === 4 && Xn(
      e,
      Ee,
      Dt,
      !1
    )), en(e));
  }
  function q0(e, t, n) {
    if ((De & 6) !== 0) throw Error(r(327));
    var l = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ea(e, t), a = l ? e2(e, t) : Ar(e, t, !0), i = l;
    do {
      if (a === 0) {
        aa && !l && Xn(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, i && !Iv(n)) {
          a = Ar(e, t, !1), i = !1;
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
              a = tu;
              var v = o.current.memoizedState.isDehydrated;
              if (v && (ca(o, f).flags |= 256), f = Ar(
                o,
                f,
                !1
              ), f !== 2) {
                if (gr && !v) {
                  o.errorRecoveryDisabledLanes |= i, bl |= i, a = 4;
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
          ca(e, 0), Xn(e, t, 0, !0);
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
              Xn(
                l,
                t,
                Dt,
                !Yn
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
          if ((t & 62914560) === t && (a = ji + 300 - St(), 10 < a)) {
            if (Xn(
              l,
              t,
              Dt,
              !Yn
            ), Zu(l, 0, !0) !== 0) break e;
            Sn = t, l.timeoutHandle = dm(
              Q0.bind(
                null,
                l,
                n,
                vt,
                qi,
                Sr,
                t,
                Dt,
                bl,
                ua,
                Yn,
                i,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break e;
          }
          Q0(
            l,
            n,
            vt,
            qi,
            Sr,
            t,
            Dt,
            bl,
            ua,
            Yn,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    en(e);
  }
  function Q0(e, t, n, l, a, i, f, o, v, B, J, ee, H, Z) {
    if (e.timeoutHandle = -1, ee = t.subtreeFlags, ee & 8192 || (ee & 16785408) === 16785408) {
      ee = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ln
      }, z0(
        t,
        i,
        ee
      );
      var fe = (i & 62914560) === i ? ji - St() : (i & 4194048) === i ? U0 - St() : 0;
      if (fe = Q2(
        ee,
        fe
      ), fe !== null) {
        Sn = i, e.cancelPendingCommit = fe(
          X0.bind(
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
            ee,
            null,
            H,
            Z
          )
        ), Xn(e, i, f, !B);
        return;
      }
    }
    X0(
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
  function Iv(e) {
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
  function Xn(e, t, n, l) {
    t &= ~pr, t &= ~bl, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var i = 31 - _t(a), f = 1 << i;
      l[i] = -1, a &= ~f;
    }
    n !== 0 && Zs(e, n, t);
  }
  function Qi() {
    return (De & 6) === 0 ? (lu(0), !1) : !0;
  }
  function Tr() {
    if (be !== null) {
      if (ze === 0)
        var e = be.return;
      else
        e = be, fn = ol = null, wf(e), $l = null, wa = 0, e = be;
      for (; e !== null; )
        m0(e.alternate, e), e = e.return;
      be = null;
    }
  }
  function ca(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, p2(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Sn = 0, Tr(), je = e, be = n = un(e.current, null), Ee = t, ze = 0, Ct = null, Yn = !1, aa = Ea(e, t), gr = !1, ua = Dt = pr = bl = Ln = He = 0, vt = tu = null, Sr = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var a = 31 - _t(l), i = 1 << a;
        t |= e[a], l &= ~i;
      }
    return pn = t, li(), n;
  }
  function B0(e, t) {
    ve = null, D.H = Ja, t === Wl || t === oi ? (t = Po(), ze = 3) : t === Df ? (t = Po(), ze = 4) : ze = t === tr ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ct = t, be === null && (He = 1, Mi(
      e,
      Bt(t, e.current)
    ));
  }
  function H0() {
    var e = At.current;
    return e === null ? !0 : (Ee & 4194048) === Ee ? Lt === null : (Ee & 62914560) === Ee || (Ee & 536870912) !== 0 ? e === Lt : !1;
  }
  function w0() {
    var e = D.H;
    return D.H = Ja, e === null ? Ja : e;
  }
  function Y0() {
    var e = D.A;
    return D.A = Wv, e;
  }
  function Bi() {
    He = 4, Yn || (Ee & 4194048) !== Ee && At.current !== null || (aa = !0), (Ln & 134217727) === 0 && (bl & 134217727) === 0 || je === null || Xn(
      je,
      Ee,
      Dt,
      !1
    );
  }
  function Ar(e, t, n) {
    var l = De;
    De |= 2;
    var a = w0(), i = Y0();
    (je !== e || Ee !== t) && (qi = null, ca(e, t)), t = !1;
    var f = He;
    e: do
      try {
        if (ze !== 0 && be !== null) {
          var o = be, v = Ct;
          switch (ze) {
            case 8:
              Tr(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              At.current === null && (t = !0);
              var B = ze;
              if (ze = 0, Ct = null, fa(e, o, v, B), n && aa) {
                f = 0;
                break e;
              }
              break;
            default:
              B = ze, ze = 0, Ct = null, fa(e, o, v, B);
          }
        }
        Pv(), f = He;
        break;
      } catch (J) {
        B0(e, J);
      }
    while (!0);
    return t && e.shellSuspendCounter++, fn = ol = null, De = l, D.H = a, D.A = i, be === null && (je = null, Ee = 0, li()), f;
  }
  function Pv() {
    for (; be !== null; ) L0(be);
  }
  function e2(e, t) {
    var n = De;
    De |= 2;
    var l = w0(), a = Y0();
    je !== e || Ee !== t ? (qi = null, xi = St() + 500, ca(e, t)) : aa = Ea(
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
              ze = 0, Ct = null, fa(e, t, i, 1);
              break;
            case 2:
            case 9:
              if ($o(i)) {
                ze = 0, Ct = null, G0(t);
                break;
              }
              t = function() {
                ze !== 2 && ze !== 9 || je !== e || (ze = 7), en(e);
              }, i.then(t, t);
              break e;
            case 3:
              ze = 7;
              break e;
            case 4:
              ze = 5;
              break e;
            case 7:
              $o(i) ? (ze = 0, Ct = null, G0(t)) : (ze = 0, Ct = null, fa(e, t, i, 7));
              break;
            case 5:
              var f = null;
              switch (be.tag) {
                case 26:
                  f = be.memoizedState;
                case 5:
                case 27:
                  var o = be;
                  if (f ? Dm(f) : o.stateNode.complete) {
                    ze = 0, Ct = null;
                    var v = o.sibling;
                    if (v !== null) be = v;
                    else {
                      var B = o.return;
                      B !== null ? (be = B, Hi(B)) : be = null;
                    }
                    break t;
                  }
              }
              ze = 0, Ct = null, fa(e, t, i, 5);
              break;
            case 6:
              ze = 0, Ct = null, fa(e, t, i, 6);
              break;
            case 8:
              Tr(), He = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        t2();
        break;
      } catch (J) {
        B0(e, J);
      }
    while (!0);
    return fn = ol = null, D.H = l, D.A = a, De = n, be !== null ? 0 : (je = null, Ee = 0, li(), He);
  }
  function t2() {
    for (; be !== null && !Hc(); )
      L0(be);
  }
  function L0(e) {
    var t = o0(e.alternate, e, pn);
    e.memoizedProps = e.pendingProps, t === null ? Hi(e) : be = t;
  }
  function G0(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = u0(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Ee
        );
        break;
      case 11:
        t = u0(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Ee
        );
        break;
      case 5:
        wf(t);
      default:
        m0(n, t), t = be = Yo(t, pn), t = o0(n, t, pn);
    }
    e.memoizedProps = e.pendingProps, t === null ? Hi(e) : be = t;
  }
  function fa(e, t, n, l) {
    fn = ol = null, wf(t), $l = null, wa = 0;
    var a = t.return;
    try {
      if (Vv(
        e,
        a,
        t,
        n,
        Ee
      )) {
        He = 1, Mi(
          e,
          Bt(n, e.current)
        ), be = null;
        return;
      }
    } catch (i) {
      if (a !== null) throw be = a, i;
      He = 1, Mi(
        e,
        Bt(n, e.current)
      ), be = null;
      return;
    }
    t.flags & 32768 ? (Ae || l === 1 ? e = !0 : aa || (Ee & 536870912) !== 0 ? e = !1 : (Yn = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = At.current, l !== null && l.tag === 13 && (l.flags |= 16384))), V0(t, e)) : Hi(t);
  }
  function Hi(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        V0(
          t,
          Yn
        );
        return;
      }
      e = t.return;
      var n = Kv(
        t.alternate,
        t,
        pn
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
  function V0(e, t) {
    do {
      var n = Jv(e.alternate, e);
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
  function X0(e, t, n, l, a, i, f, o, v) {
    e.cancelPendingCommit = null;
    do
      wi();
    while (ke !== 0);
    if ((De & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (i = t.lanes | t.childLanes, i |= df, xh(
        e,
        n,
        i,
        f,
        o,
        v
      ), e === je && (be = je = null, Ee = 0), ia = t, Vn = e, Sn = n, br = i, _r = a, j0 = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, u2(Lu, function() {
        return F0(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = D.T, D.T = null, a = F.p, F.p = 2, f = De, De |= 4;
        try {
          kv(e, t, n);
        } finally {
          De = f, F.p = a, D.T = l;
        }
      }
      ke = 1, Z0(), K0(), J0();
    }
  }
  function Z0() {
    if (ke === 1) {
      ke = 0;
      var e = Vn, t = ia, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = D.T, D.T = null;
        var l = F.p;
        F.p = 2;
        var a = De;
        De |= 4;
        try {
          M0(t, e);
          var i = Qr, f = No(e.containerInfo), o = i.focusedElem, v = i.selectionRange;
          if (f !== o && o && o.ownerDocument && Ro(
            o.ownerDocument.documentElement,
            o
          )) {
            if (v !== null && cf(o)) {
              var B = v.start, J = v.end;
              if (J === void 0 && (J = B), "selectionStart" in o)
                o.selectionStart = B, o.selectionEnd = Math.min(
                  J,
                  o.value.length
                );
              else {
                var ee = o.ownerDocument || document, H = ee && ee.defaultView || window;
                if (H.getSelection) {
                  var Z = H.getSelection(), fe = o.textContent.length, ye = Math.min(v.start, fe), Ue = v.end === void 0 ? ye : Math.min(v.end, fe);
                  !Z.extend && ye > Ue && (f = Ue, Ue = ye, ye = f);
                  var N = Oo(
                    o,
                    ye
                  ), E = Oo(
                    o,
                    Ue
                  );
                  if (N && E && (Z.rangeCount !== 1 || Z.anchorNode !== N.node || Z.anchorOffset !== N.offset || Z.focusNode !== E.node || Z.focusOffset !== E.offset)) {
                    var Q = ee.createRange();
                    Q.setStart(N.node, N.offset), Z.removeAllRanges(), ye > Ue ? (Z.addRange(Q), Z.extend(E.node, E.offset)) : (Q.setEnd(E.node, E.offset), Z.addRange(Q));
                  }
                }
              }
            }
            for (ee = [], Z = o; Z = Z.parentNode; )
              Z.nodeType === 1 && ee.push({
                element: Z,
                left: Z.scrollLeft,
                top: Z.scrollTop
              });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < ee.length; o++) {
              var $ = ee[o];
              $.element.scrollLeft = $.left, $.element.scrollTop = $.top;
            }
          }
          $i = !!qr, Qr = qr = null;
        } finally {
          De = a, F.p = l, D.T = n;
        }
      }
      e.current = t, ke = 2;
    }
  }
  function K0() {
    if (ke === 2) {
      ke = 0;
      var e = Vn, t = ia, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = D.T, D.T = null;
        var l = F.p;
        F.p = 2;
        var a = De;
        De |= 4;
        try {
          b0(e, t.alternate, t);
        } finally {
          De = a, F.p = l, D.T = n;
        }
      }
      ke = 3;
    }
  }
  function J0() {
    if (ke === 4 || ke === 3) {
      ke = 0, Mh();
      var e = Vn, t = ia, n = Sn, l = j0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ke = 5 : (ke = 0, ia = Vn = null, k0(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (Gn = null), Lc(n), t = t.stateNode, bt && typeof bt.onCommitFiberRoot == "function")
        try {
          bt.onCommitFiberRoot(
            _a,
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
      (Sn & 3) !== 0 && wi(), en(e), a = e.pendingLanes, (n & 261930) !== 0 && (a & 42) !== 0 ? e === Er ? nu++ : (nu = 0, Er = e) : nu = 0, lu(0);
    }
  }
  function k0(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ba(t)));
  }
  function wi() {
    return Z0(), K0(), J0(), F0();
  }
  function F0() {
    if (ke !== 5) return !1;
    var e = Vn, t = br;
    br = 0;
    var n = Lc(Sn), l = D.T, a = F.p;
    try {
      F.p = 32 > n ? 32 : n, D.T = null, n = _r, _r = null;
      var i = Vn, f = Sn;
      if (ke = 0, ia = Vn = null, Sn = 0, (De & 6) !== 0) throw Error(r(331));
      var o = De;
      if (De |= 4, R0(i.current), D0(
        i,
        i.current,
        f,
        n
      ), De = o, lu(0, !1), bt && typeof bt.onPostCommitFiberRoot == "function")
        try {
          bt.onPostCommitFiberRoot(_a, i);
        } catch {
        }
      return !0;
    } finally {
      F.p = a, D.T = l, k0(e, t);
    }
  }
  function W0(e, t, n) {
    t = Bt(n, t), t = er(e.stateNode, t, 2), e = Qn(e, t, 2), e !== null && (Ta(e, 2), en(e));
  }
  function Oe(e, t, n) {
    if (e.tag === 3)
      W0(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          W0(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Gn === null || !Gn.has(l))) {
            e = Bt(n, e), n = $d(2), l = Qn(t, n, 2), l !== null && (Id(
              n,
              l,
              t,
              e
            ), Ta(l, 2), en(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function Mr(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new $v();
      var a = /* @__PURE__ */ new Set();
      l.set(t, a);
    } else
      a = l.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), l.set(t, a));
    a.has(n) || (gr = !0, a.add(n), e = n2.bind(null, e, t, n), t.then(e, e));
  }
  function n2(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, je === e && (Ee & n) === n && (He === 4 || He === 3 && (Ee & 62914560) === Ee && 300 > St() - ji ? (De & 2) === 0 && ca(e, 0) : pr |= n, ua === Ee && (ua = 0)), en(e);
  }
  function $0(e, t) {
    t === 0 && (t = Xs()), e = fl(e, t), e !== null && (Ta(e, t), en(e));
  }
  function l2(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), $0(e, n);
  }
  function a2(e, t) {
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
    l !== null && l.delete(t), $0(e, n);
  }
  function u2(e, t) {
    return ba(e, t);
  }
  var Yi = null, ra = null, Cr = !1, Li = !1, Dr = !1, Zn = 0;
  function en(e) {
    e !== ra && e.next === null && (ra === null ? Yi = ra = e : ra = ra.next = e), Li = !0, Cr || (Cr = !0, c2());
  }
  function lu(e, t) {
    if (!Dr && Li) {
      Dr = !0;
      do
        for (var n = !1, l = Yi; l !== null; ) {
          if (e !== 0) {
            var a = l.pendingLanes;
            if (a === 0) var i = 0;
            else {
              var f = l.suspendedLanes, o = l.pingedLanes;
              i = (1 << 31 - _t(42 | e) + 1) - 1, i &= a & ~(f & ~o), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (n = !0, tm(l, i));
          } else
            i = Ee, i = Zu(
              l,
              l === je ? i : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (i & 3) === 0 || Ea(l, i) || (n = !0, tm(l, i));
          l = l.next;
        }
      while (n);
      Dr = !1;
    }
  }
  function i2() {
    I0();
  }
  function I0() {
    Li = Cr = !1;
    var e = 0;
    Zn !== 0 && g2() && (e = Zn);
    for (var t = St(), n = null, l = Yi; l !== null; ) {
      var a = l.next, i = P0(l, t);
      i === 0 ? (l.next = null, n === null ? Yi = a : n.next = a, a === null && (ra = n)) : (n = l, (e !== 0 || (i & 3) !== 0) && (Li = !0)), l = a;
    }
    ke !== 0 && ke !== 5 || lu(e), Zn !== 0 && (Zn = 0);
  }
  function P0(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var f = 31 - _t(i), o = 1 << f, v = a[f];
      v === -1 ? ((o & n) === 0 || (o & l) !== 0) && (a[f] = jh(o, t)) : v <= t && (e.expiredLanes |= o), i &= ~o;
    }
    if (t = je, n = Ee, n = Zu(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, n === 0 || e === t && (ze === 2 || ze === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Ol(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Ea(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (l !== null && Ol(l), Lc(n)) {
        case 2:
        case 8:
          n = Gs;
          break;
        case 32:
          n = Lu;
          break;
        case 268435456:
          n = Vs;
          break;
        default:
          n = Lu;
      }
      return l = em.bind(null, e), n = ba(n, l), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return l !== null && l !== null && Ol(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function em(e, t) {
    if (ke !== 0 && ke !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (wi() && e.callbackNode !== n)
      return null;
    var l = Ee;
    return l = Zu(
      e,
      e === je ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (q0(e, l, t), P0(e, St()), e.callbackNode != null && e.callbackNode === n ? em.bind(null, e) : null);
  }
  function tm(e, t) {
    if (wi()) return null;
    q0(e, t, !0);
  }
  function c2() {
    S2(function() {
      (De & 6) !== 0 ? ba(
        Ls,
        i2
      ) : I0();
    });
  }
  function zr() {
    if (Zn === 0) {
      var e = kl;
      e === 0 && (e = Gu, Gu <<= 1, (Gu & 261888) === 0 && (Gu = 256)), Zn = e;
    }
    return Zn;
  }
  function nm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Fu("" + e);
  }
  function lm(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function f2(e, t, n, l, a) {
    if (t === "submit" && n && n.stateNode === a) {
      var i = nm(
        (a[ot] || null).action
      ), f = l.submitter;
      f && (t = (t = f[ot] || null) ? nm(t.formAction) : f.getAttribute("formAction"), t !== null && (i = t, f = null));
      var o = new Pu(
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
                if (Zn !== 0) {
                  var v = f ? lm(a, f) : new FormData(a);
                  kf(
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
                typeof i == "function" && (o.preventDefault(), v = f ? lm(a, f) : new FormData(a), kf(
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
  for (var Or = 0; Or < of.length; Or++) {
    var Rr = of[Or], r2 = Rr.toLowerCase(), s2 = Rr[0].toUpperCase() + Rr.slice(1);
    Zt(
      r2,
      "on" + s2
    );
  }
  Zt(xo, "onAnimationEnd"), Zt(qo, "onAnimationIteration"), Zt(Qo, "onAnimationStart"), Zt("dblclick", "onDoubleClick"), Zt("focusin", "onFocus"), Zt("focusout", "onBlur"), Zt(Cv, "onTransitionRun"), Zt(Dv, "onTransitionStart"), Zt(zv, "onTransitionCancel"), Zt(Bo, "onTransitionEnd"), xl("onMouseEnter", ["mouseout", "mouseover"]), xl("onMouseLeave", ["mouseout", "mouseover"]), xl("onPointerEnter", ["pointerout", "pointerover"]), xl("onPointerLeave", ["pointerout", "pointerover"]), al(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), al(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), al("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), al(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), al(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), al(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var au = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), o2 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(au)
  );
  function am(e, t) {
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
              ni(J);
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
              ni(J);
            }
            a.currentTarget = null, i = v;
          }
      }
    }
  }
  function _e(e, t) {
    var n = t[Gc];
    n === void 0 && (n = t[Gc] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    n.has(l) || (um(t, e, 2, !1), n.add(l));
  }
  function Nr(e, t, n) {
    var l = 0;
    t && (l |= 4), um(
      n,
      e,
      l,
      t
    );
  }
  var Gi = "_reactListening" + Math.random().toString(36).slice(2);
  function Ur(e) {
    if (!e[Gi]) {
      e[Gi] = !0, $s.forEach(function(n) {
        n !== "selectionchange" && (o2.has(n) || Nr(n, !1, e), Nr(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Gi] || (t[Gi] = !0, Nr("selectionchange", !1, t));
    }
  }
  function um(e, t, n, l) {
    switch (xm(t)) {
      case 2:
        var a = w2;
        break;
      case 8:
        a = Y2;
        break;
      default:
        a = Jr;
    }
    n = a.bind(
      null,
      t,
      n,
      e
    ), a = void 0, !$c || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), l ? a !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: a
    }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, {
      passive: a
    }) : e.addEventListener(t, n, !1);
  }
  function jr(e, t, n, l, a) {
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
            if (f = Nl(o), f === null) return;
            if (v = f.tag, v === 5 || v === 6 || v === 26 || v === 27) {
              l = i = f;
              continue e;
            }
            o = o.parentNode;
          }
        }
        l = l.return;
      }
    ro(function() {
      var B = i, J = Fc(n), ee = [];
      e: {
        var H = Ho.get(e);
        if (H !== void 0) {
          var Z = Pu, fe = e;
          switch (e) {
            case "keypress":
              if ($u(n) === 0) break e;
            case "keydown":
            case "keyup":
              Z = av;
              break;
            case "focusin":
              fe = "focus", Z = tf;
              break;
            case "focusout":
              fe = "blur", Z = tf;
              break;
            case "beforeblur":
            case "afterblur":
              Z = tf;
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
              Z = mo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Z = Kh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = cv;
              break;
            case xo:
            case qo:
            case Qo:
              Z = Fh;
              break;
            case Bo:
              Z = rv;
              break;
            case "scroll":
            case "scrollend":
              Z = Xh;
              break;
            case "wheel":
              Z = ov;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = $h;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = ho;
              break;
            case "toggle":
            case "beforetoggle":
              Z = mv;
          }
          var ye = (t & 4) !== 0, Ue = !ye && (e === "scroll" || e === "scrollend"), N = ye ? H !== null ? H + "Capture" : null : H;
          ye = [];
          for (var E = B, Q; E !== null; ) {
            var $ = E;
            if (Q = $.stateNode, $ = $.tag, $ !== 5 && $ !== 26 && $ !== 27 || Q === null || N === null || ($ = Ca(E, N), $ != null && ye.push(
              uu(E, $, Q)
            )), Ue) break;
            E = E.return;
          }
          0 < ye.length && (H = new Z(
            H,
            fe,
            null,
            n,
            J
          ), ee.push({ event: H, listeners: ye }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (H = e === "mouseover" || e === "pointerover", Z = e === "mouseout" || e === "pointerout", H && n !== kc && (fe = n.relatedTarget || n.fromElement) && (Nl(fe) || fe[Rl]))
            break e;
          if ((Z || H) && (H = J.window === J ? J : (H = J.ownerDocument) ? H.defaultView || H.parentWindow : window, Z ? (fe = n.relatedTarget || n.toElement, Z = B, fe = fe ? Nl(fe) : null, fe !== null && (Ue = m(fe), ye = fe.tag, fe !== Ue || ye !== 5 && ye !== 27 && ye !== 6) && (fe = null)) : (Z = null, fe = B), Z !== fe)) {
            if (ye = mo, $ = "onMouseLeave", N = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (ye = ho, $ = "onPointerLeave", N = "onPointerEnter", E = "pointer"), Ue = Z == null ? H : Ma(Z), Q = fe == null ? H : Ma(fe), H = new ye(
              $,
              E + "leave",
              Z,
              n,
              J
            ), H.target = Ue, H.relatedTarget = Q, $ = null, Nl(J) === B && (ye = new ye(
              N,
              E + "enter",
              fe,
              n,
              J
            ), ye.target = Q, ye.relatedTarget = Ue, $ = ye), Ue = $, Z && fe)
              t: {
                for (ye = d2, N = Z, E = fe, Q = 0, $ = N; $; $ = ye($))
                  Q++;
                $ = 0;
                for (var me = E; me; me = ye(me))
                  $++;
                for (; 0 < Q - $; )
                  N = ye(N), Q--;
                for (; 0 < $ - Q; )
                  E = ye(E), $--;
                for (; Q--; ) {
                  if (N === E || E !== null && N === E.alternate) {
                    ye = N;
                    break t;
                  }
                  N = ye(N), E = ye(E);
                }
                ye = null;
              }
            else ye = null;
            Z !== null && im(
              ee,
              H,
              Z,
              ye,
              !1
            ), fe !== null && Ue !== null && im(
              ee,
              Ue,
              fe,
              ye,
              !0
            );
          }
        }
        e: {
          if (H = B ? Ma(B) : window, Z = H.nodeName && H.nodeName.toLowerCase(), Z === "select" || Z === "input" && H.type === "file")
            var Me = To;
          else if (_o(H))
            if (Ao)
              Me = Tv;
            else {
              Me = _v;
              var oe = bv;
            }
          else
            Z = H.nodeName, !Z || Z.toLowerCase() !== "input" || H.type !== "checkbox" && H.type !== "radio" ? B && Jc(B.elementType) && (Me = To) : Me = Ev;
          if (Me && (Me = Me(e, B))) {
            Eo(
              ee,
              Me,
              n,
              J
            );
            break e;
          }
          oe && oe(e, H, B), e === "focusout" && B && H.type === "number" && B.memoizedProps.value != null && Kc(H, "number", H.value);
        }
        switch (oe = B ? Ma(B) : window, e) {
          case "focusin":
            (_o(oe) || oe.contentEditable === "true") && (Yl = oe, ff = B, xa = null);
            break;
          case "focusout":
            xa = ff = Yl = null;
            break;
          case "mousedown":
            rf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            rf = !1, Uo(ee, n, J);
            break;
          case "selectionchange":
            if (Mv) break;
          case "keydown":
          case "keyup":
            Uo(ee, n, J);
        }
        var ge;
        if (lf)
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
          wl ? So(e, n) && (Te = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Te = "onCompositionStart");
        Te && (vo && n.locale !== "ko" && (wl || Te !== "onCompositionStart" ? Te === "onCompositionEnd" && wl && (ge = so()) : (On = J, Ic = "value" in On ? On.value : On.textContent, wl = !0)), oe = Vi(B, Te), 0 < oe.length && (Te = new yo(
          Te,
          e,
          null,
          n,
          J
        ), ee.push({ event: Te, listeners: oe }), ge ? Te.data = ge : (ge = bo(n), ge !== null && (Te.data = ge)))), (ge = hv ? vv(e, n) : gv(e, n)) && (Te = Vi(B, "onBeforeInput"), 0 < Te.length && (oe = new yo(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          J
        ), ee.push({
          event: oe,
          listeners: Te
        }), oe.data = ge)), f2(
          ee,
          e,
          B,
          n,
          J
        );
      }
      am(ee, t);
    });
  }
  function uu(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Vi(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var a = e, i = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || i === null || (a = Ca(e, n), a != null && l.unshift(
        uu(e, a, i)
      ), a = Ca(e, t), a != null && l.push(
        uu(e, a, i)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function d2(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function im(e, t, n, l, a) {
    for (var i = t._reactName, f = []; n !== null && n !== l; ) {
      var o = n, v = o.alternate, B = o.stateNode;
      if (o = o.tag, v !== null && v === l) break;
      o !== 5 && o !== 26 && o !== 27 || B === null || (v = B, a ? (B = Ca(n, i), B != null && f.unshift(
        uu(n, B, v)
      )) : a || (B = Ca(n, i), B != null && f.push(
        uu(n, B, v)
      ))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var m2 = /\r\n?/g, y2 = /\u0000|\uFFFD/g;
  function cm(e) {
    return (typeof e == "string" ? e : "" + e).replace(m2, `
`).replace(y2, "");
  }
  function fm(e, t) {
    return t = cm(t), cm(e) === t;
  }
  function Ne(e, t, n, l, a, i) {
    switch (n) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Ql(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Ql(e, "" + l);
        break;
      case "className":
        Ju(e, "class", l);
        break;
      case "tabIndex":
        Ju(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ju(e, n, l);
        break;
      case "style":
        co(e, l, i);
        break;
      case "data":
        if (t !== "object") {
          Ju(e, "data", l);
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
        l = Fu("" + l), e.setAttribute(n, l);
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
        l = Fu("" + l), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = ln);
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
        n = Fu("" + l), e.setAttributeNS(
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
        _e("beforetoggle", e), _e("toggle", e), Ku(e, "popover", l);
        break;
      case "xlinkActuate":
        nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        nn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        nn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        nn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Ku(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Gh.get(n) || n, Ku(e, n, l));
    }
  }
  function xr(e, t, n, l, a, i) {
    switch (n) {
      case "style":
        co(e, l, i);
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
        typeof l == "string" ? Ql(e, l) : (typeof l == "number" || typeof l == "bigint") && Ql(e, "" + l);
        break;
      case "onScroll":
        l != null && _e("scroll", e);
        break;
      case "onScrollEnd":
        l != null && _e("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = ln);
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
        if (!Is.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), i = e[ot] || null, i = i != null ? i[n] : null, typeof i == "function" && e.removeEventListener(t, i, a), typeof l == "function")) {
              typeof i != "function" && i !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, a);
              break e;
            }
            n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : Ku(e, n, l);
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
        lo(
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
        t = i, n = f, e.multiple = !!l, t != null ? ql(e, !!l, t, !1) : n != null && ql(e, !!l, n, !0);
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
        uo(e, l, a, i);
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
        for (l = 0; l < au.length; l++)
          _e(au[l], e);
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
        if (Jc(t)) {
          for (J in n)
            n.hasOwnProperty(J) && (l = n[J], l !== void 0 && xr(
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
  function h2(e, t, n, l) {
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
          var ee = n[Z];
          if (n.hasOwnProperty(Z) && ee != null)
            switch (Z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                v = ee;
              default:
                l.hasOwnProperty(Z) || Ne(e, t, Z, null, l, ee);
            }
        }
        for (var H in l) {
          var Z = l[H];
          if (ee = n[H], l.hasOwnProperty(H) && (Z != null || ee != null))
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
                Z !== ee && Ne(
                  e,
                  t,
                  H,
                  Z,
                  l,
                  ee
                );
            }
        }
        Zc(
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
        t = o, n = f, l = Z, H != null ? ql(e, !!n, H, !1) : !!l != !!n && (t != null ? ql(e, !!n, t, !0) : ql(e, !!n, n ? [] : "", !1));
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
        ao(e, H, Z);
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
        for (var ye in n)
          H = n[ye], n.hasOwnProperty(ye) && H != null && !l.hasOwnProperty(ye) && Ne(e, t, ye, null, l, H);
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
        if (Jc(t)) {
          for (var Ue in n)
            H = n[Ue], n.hasOwnProperty(Ue) && H !== void 0 && !l.hasOwnProperty(Ue) && xr(
              e,
              t,
              Ue,
              void 0,
              l,
              H
            );
          for (J in l)
            H = l[J], Z = n[J], !l.hasOwnProperty(J) || H === Z || H === void 0 && Z === void 0 || xr(
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
    for (ee in l)
      H = l[ee], Z = n[ee], !l.hasOwnProperty(ee) || H === Z || H == null && Z == null || Ne(e, t, ee, H, l, Z);
  }
  function rm(e) {
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
  function v2() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
        var a = n[l], i = a.transferSize, f = a.initiatorType, o = a.duration;
        if (i && o && rm(f)) {
          for (f = 0, o = a.responseEnd, l += 1; l < n.length; l++) {
            var v = n[l], B = v.startTime;
            if (B > o) break;
            var J = v.transferSize, ee = v.initiatorType;
            J && rm(ee) && (v = v.responseEnd, f += J * (v < o ? 1 : (o - B) / (v - B)));
          }
          if (--l, t += 8 * (i + f) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var qr = null, Qr = null;
  function Xi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function sm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function om(e, t) {
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
  function Br(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Hr = null;
  function g2() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Hr ? !1 : (Hr = e, !0) : (Hr = null, !1);
  }
  var dm = typeof setTimeout == "function" ? setTimeout : void 0, p2 = typeof clearTimeout == "function" ? clearTimeout : void 0, mm = typeof Promise == "function" ? Promise : void 0, S2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof mm < "u" ? function(e) {
    return mm.resolve(null).then(e).catch(b2);
  } : dm;
  function b2(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Kn(e) {
    return e === "head";
  }
  function ym(e, t) {
    var n = t, l = 0;
    do {
      var a = n.nextSibling;
      if (e.removeChild(n), a && a.nodeType === 8)
        if (n = a.data, n === "/$" || n === "/&") {
          if (l === 0) {
            e.removeChild(a), ma(t);
            return;
          }
          l--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          l++;
        else if (n === "html")
          iu(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, iu(n);
          for (var i = n.firstChild; i; ) {
            var f = i.nextSibling, o = i.nodeName;
            i[Aa] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && i.rel.toLowerCase() === "stylesheet" || n.removeChild(i), i = f;
          }
        } else
          n === "body" && iu(e.ownerDocument.body);
      n = a;
    } while (n);
    ma(t);
  }
  function hm(e, t) {
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
  function wr(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          wr(n), Vc(n);
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
  function _2(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var a = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[Aa])
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
      if (e = Gt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function E2(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Gt(e.nextSibling), e === null)) return null;
    return e;
  }
  function vm(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Gt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Yr(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Lr(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function T2(e, t) {
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
  function Gt(e) {
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
  var Gr = null;
  function gm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return Gt(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function pm(e) {
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
  function Sm(e, t, n) {
    switch (t = Xi(n), e) {
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
  function iu(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Vc(e);
  }
  var Vt = /* @__PURE__ */ new Map(), bm = /* @__PURE__ */ new Set();
  function Zi(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var bn = F.d;
  F.d = {
    f: A2,
    r: M2,
    D: C2,
    C: D2,
    L: z2,
    m: O2,
    X: N2,
    S: R2,
    M: U2
  };
  function A2() {
    var e = bn.f(), t = Qi();
    return e || t;
  }
  function M2(e) {
    var t = Ul(e);
    t !== null && t.tag === 5 && t.type === "form" ? Bd(t) : bn.r(e);
  }
  var sa = typeof document > "u" ? null : document;
  function _m(e, t, n) {
    var l = sa;
    if (l && typeof t == "string" && t) {
      var a = qt(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof n == "string" && (a += '[crossorigin="' + n + '"]'), bm.has(a) || (bm.add(a), e = { rel: e, crossOrigin: n, href: t }, l.querySelector(a) === null && (t = l.createElement("link"), ut(t, "link", e), Fe(t), l.head.appendChild(t)));
    }
  }
  function C2(e) {
    bn.D(e), _m("dns-prefetch", e, null);
  }
  function D2(e, t) {
    bn.C(e, t), _m("preconnect", e, t);
  }
  function z2(e, t, n) {
    bn.L(e, t, n);
    var l = sa;
    if (l && e && t) {
      var a = 'link[rel="preload"][as="' + qt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (a += '[imagesrcset="' + qt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (a += '[imagesizes="' + qt(
        n.imageSizes
      ) + '"]')) : a += '[href="' + qt(e) + '"]';
      var i = a;
      switch (t) {
        case "style":
          i = oa(e);
          break;
        case "script":
          i = da(e);
      }
      Vt.has(i) || (e = S(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), Vt.set(i, e), l.querySelector(a) !== null || t === "style" && l.querySelector(cu(i)) || t === "script" && l.querySelector(fu(i)) || (t = l.createElement("link"), ut(t, "link", e), Fe(t), l.head.appendChild(t)));
    }
  }
  function O2(e, t) {
    bn.m(e, t);
    var n = sa;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + qt(l) + '"][href="' + qt(e) + '"]', i = a;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = da(e);
      }
      if (!Vt.has(i) && (e = S({ rel: "modulepreload", href: e }, t), Vt.set(i, e), n.querySelector(a) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(fu(i)))
              return;
        }
        l = n.createElement("link"), ut(l, "link", e), Fe(l), n.head.appendChild(l);
      }
    }
  }
  function R2(e, t, n) {
    bn.S(e, t, n);
    var l = sa;
    if (l && e) {
      var a = jl(l).hoistableStyles, i = oa(e);
      t = t || "default";
      var f = a.get(i);
      if (!f) {
        var o = { loading: 0, preload: null };
        if (f = l.querySelector(
          cu(i)
        ))
          o.loading = 5;
        else {
          e = S(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = Vt.get(i)) && Vr(e, n);
          var v = f = l.createElement("link");
          Fe(v), ut(v, "link", e), v._p = new Promise(function(B, J) {
            v.onload = B, v.onerror = J;
          }), v.addEventListener("load", function() {
            o.loading |= 1;
          }), v.addEventListener("error", function() {
            o.loading |= 2;
          }), o.loading |= 4, Ki(f, t, l);
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
  function N2(e, t) {
    bn.X(e, t);
    var n = sa;
    if (n && e) {
      var l = jl(n).hoistableScripts, a = da(e), i = l.get(a);
      i || (i = n.querySelector(fu(a)), i || (e = S({ src: e, async: !0 }, t), (t = Vt.get(a)) && Xr(e, t), i = n.createElement("script"), Fe(i), ut(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, l.set(a, i));
    }
  }
  function U2(e, t) {
    bn.M(e, t);
    var n = sa;
    if (n && e) {
      var l = jl(n).hoistableScripts, a = da(e), i = l.get(a);
      i || (i = n.querySelector(fu(a)), i || (e = S({ src: e, async: !0, type: "module" }, t), (t = Vt.get(a)) && Xr(e, t), i = n.createElement("script"), Fe(i), ut(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, l.set(a, i));
    }
  }
  function Em(e, t, n, l) {
    var a = (a = se.current) ? Zi(a) : null;
    if (!a) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = oa(n.href), n = jl(
          a
        ).hoistableStyles, l = n.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = oa(n.href);
          var i = jl(
            a
          ).hoistableStyles, f = i.get(e);
          if (f || (a = a.ownerDocument || a, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, f), (i = a.querySelector(
            cu(e)
          )) && !i._p && (f.instance = i, f.state.loading = 5), Vt.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Vt.set(e, n), i || j2(
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
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = da(n), n = jl(
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
  function oa(e) {
    return 'href="' + qt(e) + '"';
  }
  function cu(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Tm(e) {
    return S({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function j2(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), ut(t, "link", n), Fe(t), e.head.appendChild(t));
  }
  function da(e) {
    return '[src="' + qt(e) + '"]';
  }
  function fu(e) {
    return "script[async]" + e;
  }
  function Am(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + qt(n.href) + '"]'
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
          ), Fe(l), ut(l, "style", a), Ki(l, n.precedence, e), t.instance = l;
        case "stylesheet":
          a = oa(n.href);
          var i = e.querySelector(
            cu(a)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, Fe(i), i;
          l = Tm(n), (a = Vt.get(a)) && Vr(l, a), i = (e.ownerDocument || e).createElement("link"), Fe(i);
          var f = i;
          return f._p = new Promise(function(o, v) {
            f.onload = o, f.onerror = v;
          }), ut(i, "link", l), t.state.loading |= 4, Ki(i, n.precedence, e), t.instance = i;
        case "script":
          return i = da(n.src), (a = e.querySelector(
            fu(i)
          )) ? (t.instance = a, Fe(a), a) : (l = n, (a = Vt.get(i)) && (l = S({}, n), Xr(l, a)), e = e.ownerDocument || e, a = e.createElement("script"), Fe(a), ut(a, "link", l), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Ki(l, n.precedence, e));
    return t.instance;
  }
  function Ki(e, t, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = l.length ? l[l.length - 1] : null, i = a, f = 0; f < l.length; f++) {
      var o = l[f];
      if (o.dataset.precedence === t) i = o;
      else if (i !== a) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Vr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Xr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Ji = null;
  function Mm(e, t, n) {
    if (Ji === null) {
      var l = /* @__PURE__ */ new Map(), a = Ji = /* @__PURE__ */ new Map();
      a.set(n, l);
    } else
      a = Ji, l = a.get(n), l || (l = /* @__PURE__ */ new Map(), a.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
      var i = n[a];
      if (!(i[Aa] || i[tt] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = i.getAttribute(t) || "";
        f = e + f;
        var o = l.get(f);
        o ? o.push(i) : l.set(f, [i]);
      }
    }
    return l;
  }
  function Cm(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function x2(e, t, n) {
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
  function Dm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function q2(e, t, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var a = oa(l.href), i = t.querySelector(
          cu(a)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = ki.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, Fe(i);
          return;
        }
        i = t.ownerDocument || t, l = Tm(l), (a = Vt.get(a)) && Vr(l, a), i = i.createElement("link"), Fe(i);
        var f = i;
        f._p = new Promise(function(o, v) {
          f.onload = o, f.onerror = v;
        }), ut(i, "link", l), n.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = ki.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Zr = 0;
  function Q2(e, t) {
    return e.stylesheets && e.count === 0 && Wi(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var l = setTimeout(function() {
        if (e.stylesheets && Wi(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Zr === 0 && (Zr = 62500 * v2());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Wi(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        },
        (e.imgBytes > Zr ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(a);
      };
    } : null;
  }
  function ki() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Wi(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Fi = null;
  function Wi(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Fi = /* @__PURE__ */ new Map(), t.forEach(B2, e), Fi = null, ki.call(e));
  }
  function B2(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Fi.get(e);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Fi.set(e, n);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < a.length; i++) {
          var f = a[i];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), l = f);
        }
        l && n.set(null, l);
      }
      a = t.instance, f = a.getAttribute("data-precedence"), i = n.get(f) || l, i === l && n.set(null, a), n.set(f, a), this.count++, l = ki.bind(this), a.addEventListener("load", l), a.addEventListener("error", l), i ? i.parentNode.insertBefore(a, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ru = {
    $$typeof: b,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0
  };
  function H2(e, t, n, l, a, i, f, o, v) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = wc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wc(0), this.hiddenUpdates = wc(null), this.identifierPrefix = l, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function zm(e, t, n, l, a, i, f, o, v, B, J, ee) {
    return e = new H2(
      e,
      t,
      n,
      f,
      v,
      B,
      J,
      ee,
      o
    ), t = 1, i === !0 && (t |= 24), i = Tt(3, null, null, t), e.current = i, i.stateNode = e, t = Af(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, zf(i), e;
  }
  function Om(e) {
    return e ? (e = Vl, e) : Vl;
  }
  function Rm(e, t, n, l, a, i) {
    a = Om(a), l.context === null ? l.context = a : l.pendingContext = a, l = qn(t), l.payload = { element: n }, i = i === void 0 ? null : i, i !== null && (l.callback = i), n = Qn(e, l, t), n !== null && (gt(n, e, t), La(n, e, t));
  }
  function Nm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Kr(e, t) {
    Nm(e, t), (e = e.alternate) && Nm(e, t);
  }
  function Um(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = fl(e, 67108864);
      t !== null && gt(t, e, 67108864), Kr(e, 67108864);
    }
  }
  function jm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = zt();
      t = Yc(t);
      var n = fl(e, t);
      n !== null && gt(n, e, t), Kr(e, t);
    }
  }
  var $i = !0;
  function w2(e, t, n, l) {
    var a = D.T;
    D.T = null;
    var i = F.p;
    try {
      F.p = 2, Jr(e, t, n, l);
    } finally {
      F.p = i, D.T = a;
    }
  }
  function Y2(e, t, n, l) {
    var a = D.T;
    D.T = null;
    var i = F.p;
    try {
      F.p = 8, Jr(e, t, n, l);
    } finally {
      F.p = i, D.T = a;
    }
  }
  function Jr(e, t, n, l) {
    if ($i) {
      var a = kr(l);
      if (a === null)
        jr(
          e,
          t,
          l,
          Ii,
          n
        ), qm(e, l);
      else if (G2(
        a,
        e,
        t,
        n,
        l
      ))
        l.stopPropagation();
      else if (qm(e, l), t & 4 && -1 < L2.indexOf(e)) {
        for (; a !== null; ) {
          var i = Ul(a);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var f = ll(i.pendingLanes);
                  if (f !== 0) {
                    var o = i;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; f; ) {
                      var v = 1 << 31 - _t(f);
                      o.entanglements[1] |= v, f &= ~v;
                    }
                    en(i), (De & 6) === 0 && (xi = St() + 500, lu(0));
                  }
                }
                break;
              case 31:
              case 13:
                o = fl(i, 2), o !== null && gt(o, i, 2), Qi(), Kr(i, 2);
            }
          if (i = kr(l), i === null && jr(
            e,
            t,
            l,
            Ii,
            n
          ), i === a) break;
          a = i;
        }
        a !== null && l.stopPropagation();
      } else
        jr(
          e,
          t,
          l,
          null,
          n
        );
    }
  }
  function kr(e) {
    return e = Fc(e), Fr(e);
  }
  var Ii = null;
  function Fr(e) {
    if (Ii = null, e = Nl(e), e !== null) {
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
    return Ii = e, null;
  }
  function xm(e) {
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
        switch (Ch()) {
          case Ls:
            return 2;
          case Gs:
            return 8;
          case Lu:
          case Dh:
            return 32;
          case Vs:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Wr = !1, Jn = null, kn = null, Fn = null, su = /* @__PURE__ */ new Map(), ou = /* @__PURE__ */ new Map(), Wn = [], L2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function qm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Jn = null;
        break;
      case "dragenter":
      case "dragleave":
        kn = null;
        break;
      case "mouseover":
      case "mouseout":
        Fn = null;
        break;
      case "pointerover":
      case "pointerout":
        su.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ou.delete(t.pointerId);
    }
  }
  function du(e, t, n, l, a, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: i,
      targetContainers: [a]
    }, t !== null && (t = Ul(t), t !== null && Um(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function G2(e, t, n, l, a) {
    switch (t) {
      case "focusin":
        return Jn = du(
          Jn,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "dragenter":
        return kn = du(
          kn,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "mouseover":
        return Fn = du(
          Fn,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "pointerover":
        var i = a.pointerId;
        return su.set(
          i,
          du(
            su.get(i) || null,
            e,
            t,
            n,
            l,
            a
          )
        ), !0;
      case "gotpointercapture":
        return i = a.pointerId, ou.set(
          i,
          du(
            ou.get(i) || null,
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
  function Qm(e) {
    var t = Nl(e.target);
    if (t !== null) {
      var n = m(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = g(n), t !== null) {
            e.blockedOn = t, Fs(e.priority, function() {
              jm(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = O(n), t !== null) {
            e.blockedOn = t, Fs(e.priority, function() {
              jm(n);
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
  function Pi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = kr(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        kc = l, n.target.dispatchEvent(l), kc = null;
      } else
        return t = Ul(n), t !== null && Um(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Bm(e, t, n) {
    Pi(e) && n.delete(t);
  }
  function V2() {
    Wr = !1, Jn !== null && Pi(Jn) && (Jn = null), kn !== null && Pi(kn) && (kn = null), Fn !== null && Pi(Fn) && (Fn = null), su.forEach(Bm), ou.forEach(Bm);
  }
  function ec(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Wr || (Wr = !0, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      V2
    )));
  }
  var tc = null;
  function Hm(e) {
    tc !== e && (tc = e, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      function() {
        tc === e && (tc = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], a = e[t + 2];
          if (typeof l != "function") {
            if (Fr(l || n) === null)
              continue;
            break;
          }
          var i = Ul(n);
          i !== null && (e.splice(t, 3), t -= 3, kf(
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
  function ma(e) {
    function t(v) {
      return ec(v, e);
    }
    Jn !== null && ec(Jn, e), kn !== null && ec(kn, e), Fn !== null && ec(Fn, e), su.forEach(t), ou.forEach(t);
    for (var n = 0; n < Wn.length; n++) {
      var l = Wn[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Wn.length && (n = Wn[0], n.blockedOn === null); )
      Qm(n), n.blockedOn === null && Wn.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var a = n[l], i = n[l + 1], f = a[ot] || null;
        if (typeof i == "function")
          f || Hm(n);
        else if (f) {
          var o = null;
          if (i && i.hasAttribute("formAction")) {
            if (a = i, f = i[ot] || null)
              o = f.formAction;
            else if (Fr(a) !== null) continue;
          } else o = f.action;
          typeof o == "function" ? n[l + 1] = o : (n.splice(l, 3), l -= 3), Hm(n);
        }
      }
  }
  function wm() {
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
  function $r(e) {
    this._internalRoot = e;
  }
  nc.prototype.render = $r.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var n = t.current, l = zt();
    Rm(n, l, e, t, null, null);
  }, nc.prototype.unmount = $r.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Rm(e.current, 2, null, e, null, null), Qi(), t[Rl] = null;
    }
  };
  function nc(e) {
    this._internalRoot = e;
  }
  nc.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = ks();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Wn.length && t !== 0 && t < Wn[n].priority; n++) ;
      Wn.splice(n, 0, e), n === 0 && Qm(e);
    }
  };
  var Ym = c.version;
  if (Ym !== "19.2.3")
    throw Error(
      r(
        527,
        Ym,
        "19.2.3"
      )
    );
  F.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = y(t), e = e !== null ? q(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var X2 = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: D,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var lc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!lc.isDisabled && lc.supportsFiber)
      try {
        _a = lc.inject(
          X2
        ), bt = lc;
      } catch {
      }
  }
  return mu.createRoot = function(e, t) {
    if (!d(e)) throw Error(r(299));
    var n = !1, l = "", a = Jd, i = kd, f = Fd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = zm(
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
      wm
    ), e[Rl] = t.current, Ur(e), new $r(t);
  }, mu.hydrateRoot = function(e, t, n) {
    if (!d(e)) throw Error(r(299));
    var l = !1, a = "", i = Jd, f = kd, o = Fd, v = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onUncaughtError !== void 0 && (i = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (o = n.onRecoverableError), n.formState !== void 0 && (v = n.formState)), t = zm(
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
      wm
    ), t.context = Om(null), n = t.current, l = zt(), l = Yc(l), a = qn(l), a.callback = null, Qn(n, a, l), n = l, t.current.lanes = n, Ta(t, n), en(t), e[Rl] = t.current, Ur(e), new nc(t);
  }, mu.version = "19.2.3", mu;
}
var km;
function I2() {
  if (km) return Pr.exports;
  km = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), Pr.exports = $2(), Pr.exports;
}
var P2 = I2();
const By = /* @__PURE__ */ Qy(P2);
var ls = { exports: {} }, as = {};
var Fm;
function e1() {
  if (Fm) return as;
  Fm = 1;
  var u = Dc();
  function c(p, y) {
    return p === y && (p !== 0 || 1 / p === 1 / y) || p !== p && y !== y;
  }
  var s = typeof Object.is == "function" ? Object.is : c, r = u.useSyncExternalStore, d = u.useRef, m = u.useEffect, g = u.useMemo, O = u.useDebugValue;
  return as.useSyncExternalStoreWithSelector = function(p, y, q, S, C) {
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
            return U(y());
          },
          z === null ? void 0 : function() {
            return U(z());
          }
        ];
      },
      [y, q, S, C]
    );
    var X = r(p, G[0], G[1]);
    return m(
      function() {
        j.hasValue = !0, j.value = X;
      },
      [X]
    ), O(X), X;
  }, as;
}
var Wm;
function t1() {
  return Wm || (Wm = 1, ls.exports = e1()), ls.exports;
}
var n1 = t1();
function Hy(u) {
  u();
}
function l1() {
  let u = null, c = null;
  return {
    clear() {
      u = null, c = null;
    },
    notify() {
      Hy(() => {
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
var $m = {
  notify() {
  },
  get: () => []
};
function a1(u, c) {
  let s, r = $m, d = 0, m = !1;
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
  function y() {
    return m;
  }
  function q() {
    d++, s || (s = u.subscribe(p), r = l1());
  }
  function S() {
    d--, s && d === 0 && (s(), s = void 0, r.clear(), r = $m);
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
    isSubscribed: y,
    trySubscribe: C,
    tryUnsubscribe: G,
    getListeners: () => r
  };
  return j;
}
var u1 = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", i1 = /* @__PURE__ */ u1(), c1 = () => typeof navigator < "u" && navigator.product === "ReactNative", f1 = /* @__PURE__ */ c1(), r1 = () => i1 || f1 ? re.useLayoutEffect : re.useEffect, s1 = /* @__PURE__ */ r1();
function Im(u, c) {
  return u === c ? u !== 0 || c !== 0 || 1 / u === 1 / c : u !== u && c !== c;
}
function Eu(u, c) {
  if (Im(u, c)) return !0;
  if (typeof u != "object" || u === null || typeof c != "object" || c === null)
    return !1;
  const s = Object.keys(u), r = Object.keys(c);
  if (s.length !== r.length) return !1;
  for (let d = 0; d < s.length; d++)
    if (!Object.prototype.hasOwnProperty.call(c, s[d]) || !Im(u[s[d]], c[s[d]]))
      return !1;
  return !0;
}
var o1 = /* @__PURE__ */ Symbol.for("react-redux-context"), d1 = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function m1() {
  if (!re.createContext) return {};
  const u = d1[o1] ??= /* @__PURE__ */ new Map();
  let c = u.get(re.createContext);
  return c || (c = re.createContext(
    null
  ), u.set(re.createContext, c)), c;
}
var Pn = /* @__PURE__ */ m1();
function y1(u) {
  const { children: c, context: s, serverState: r, store: d } = u, m = re.useMemo(() => {
    const p = a1(d);
    return {
      store: d,
      subscription: p,
      getServerState: r ? () => r : void 0
    };
  }, [d, r]), g = re.useMemo(() => d.getState(), [d]);
  s1(() => {
    const { subscription: p } = m;
    return p.onStateChange = p.notifyNestedSubs, p.trySubscribe(), g !== d.getState() && p.notifyNestedSubs(), () => {
      p.tryUnsubscribe(), p.onStateChange = void 0;
    };
  }, [m, g]);
  const O = s || Pn;
  return /* @__PURE__ */ re.createElement(O.Provider, { value: m }, c);
}
var ys = y1;
function Os(u = Pn) {
  return function() {
    return re.useContext(u);
  };
}
var wy = /* @__PURE__ */ Os();
function Yy(u = Pn) {
  const c = u === Pn ? wy : (
    // @ts-ignore
    Os(u)
  ), s = () => {
    const { store: r } = c();
    return r;
  };
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var Ly = /* @__PURE__ */ Yy();
function h1(u = Pn) {
  const c = u === Pn ? Ly : Yy(u), s = () => c().dispatch;
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var Gy = /* @__PURE__ */ h1(), v1 = (u, c) => u === c;
function g1(u = Pn) {
  const c = u === Pn ? wy : Os(u), s = (r, d = {}) => {
    const { equalityFn: m = v1 } = typeof d == "function" ? { equalityFn: d } : d, g = c(), { store: O, subscription: p, getServerState: y } = g;
    re.useRef(!0);
    const q = re.useCallback(
      {
        [r.name](C) {
          return r(C);
        }
      }[r.name],
      [r]
    ), S = n1.useSyncExternalStoreWithSelector(
      p.addNestedSub,
      O.getState,
      y || O.getState,
      q,
      m
    );
    return re.useDebugValue(S), S;
  };
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var Vy = /* @__PURE__ */ g1(), p1 = Hy;
function it(u) {
  return `Minified Redux error #${u}; visit https://redux.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
}
var S1 = typeof Symbol == "function" && Symbol.observable || "@@observable", Pm = S1, us = () => Math.random().toString(36).substring(7).split("").join("."), b1 = {
  INIT: `@@redux/INIT${/* @__PURE__ */ us()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ us()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${us()}`
}, hc = b1;
function el(u) {
  if (typeof u != "object" || u === null)
    return !1;
  let c = u;
  for (; Object.getPrototypeOf(c) !== null; )
    c = Object.getPrototypeOf(c);
  return Object.getPrototypeOf(u) === c || Object.getPrototypeOf(u) === null;
}
function Xy(u, c, s) {
  if (typeof u != "function")
    throw new Error(it(2));
  if (typeof c == "function" && typeof s == "function" || typeof s == "function" && typeof arguments[3] == "function")
    throw new Error(it(0));
  if (typeof c == "function" && typeof s > "u" && (s = c, c = void 0), typeof s < "u") {
    if (typeof s != "function")
      throw new Error(it(1));
    return s(Xy)(u, c);
  }
  let r = u, d = c, m = /* @__PURE__ */ new Map(), g = m, O = 0, p = !1;
  function y() {
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
    y();
    const k = O++;
    return g.set(k, U), function() {
      if (Y) {
        if (p)
          throw new Error(it(6));
        Y = !1, y(), g.delete(k), m = null;
      }
    };
  }
  function C(U) {
    if (!el(U))
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
      type: hc.REPLACE
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
      [Pm]() {
        return this;
      }
    };
  }
  return C({
    type: hc.INIT
  }), {
    dispatch: C,
    subscribe: S,
    getState: q,
    replaceReducer: G,
    [Pm]: j
  };
}
function _1(u) {
  Object.keys(u).forEach((c) => {
    const s = u[c];
    if (typeof s(void 0, {
      type: hc.INIT
    }) > "u")
      throw new Error(it(12));
    if (typeof s(void 0, {
      type: hc.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(it(13));
  });
}
function Zy(u) {
  const c = Object.keys(u), s = {};
  for (let m = 0; m < c.length; m++) {
    const g = c[m];
    typeof u[g] == "function" && (s[g] = u[g]);
  }
  const r = Object.keys(s);
  let d;
  try {
    _1(s);
  } catch (m) {
    d = m;
  }
  return function(g = {}, O) {
    if (d)
      throw d;
    let p = !1;
    const y = {};
    for (let q = 0; q < r.length; q++) {
      const S = r[q], C = s[S], G = g[S], j = C(G, O);
      if (typeof j > "u")
        throw O && O.type, new Error(it(14));
      y[S] = j, p = p || j !== G;
    }
    return p = p || r.length !== Object.keys(g).length, p ? y : g;
  };
}
function vc(...u) {
  return u.length === 0 ? (c) => c : u.length === 1 ? u[0] : u.reduce((c, s) => (...r) => c(s(...r)));
}
function E1(...u) {
  return (c) => (s, r) => {
    const d = c(s, r);
    let m = () => {
      throw new Error(it(15));
    };
    const g = {
      getState: d.getState,
      dispatch: (p, ...y) => m(p, ...y)
    }, O = u.map((p) => p(g));
    return m = vc(...O)(d.dispatch), {
      ...d,
      dispatch: m
    };
  };
}
function Ky(u) {
  return el(u) && "type" in u && typeof u.type == "string";
}
var Rs = /* @__PURE__ */ Symbol.for("immer-nothing"), Tu = /* @__PURE__ */ Symbol.for("immer-draftable"), Ie = /* @__PURE__ */ Symbol.for("immer-state");
function ct(u, ...c) {
  throw new Error(
    `[Immer] minified error nr: ${u}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Rt = Object, Ml = Rt.getPrototypeOf, Cu = "constructor", ju = "prototype", hs = "configurable", gc = "enumerable", dc = "writable", Du = "value", Nt = (u) => !!u && !!u[Ie];
function Ut(u) {
  return u ? Jy(u) || qu(u) || !!u[Tu] || !!u[Cu]?.[Tu] || Qu(u) || Bu(u) : !1;
}
var T1 = Rt[ju][Cu].toString(), ey = /* @__PURE__ */ new WeakMap();
function Jy(u) {
  if (!u || !va(u))
    return !1;
  const c = Ml(u);
  if (c === null || c === Rt[ju])
    return !0;
  const s = Rt.hasOwnProperty.call(c, Cu) && c[Cu];
  if (s === Object)
    return !0;
  if (!Al(s))
    return !1;
  let r = ey.get(s);
  return r === void 0 && (r = Function.toString.call(s), ey.set(s, r)), r === T1;
}
function A1(u) {
  return Nt(u) || ct(15, u), u[Ie].base_;
}
function xu(u, c, s = !0) {
  Cl(u) === 0 ? (s ? Reflect.ownKeys(u) : Rt.keys(u)).forEach((d) => {
    c(d, u[d], u);
  }) : u.forEach((r, d) => c(d, r, u));
}
function Cl(u) {
  const c = u[Ie];
  return c ? c.type_ : qu(u) ? 1 : Qu(u) ? 2 : Bu(u) ? 3 : 0;
}
var Au = (u, c, s = Cl(u)) => s === 2 ? u.has(c) : Rt[ju].hasOwnProperty.call(u, c), En = (u, c, s = Cl(u)) => (
  // @ts-ignore
  s === 2 ? u.get(c) : u[c]
), pc = (u, c, s, r = Cl(u)) => {
  r === 2 ? u.set(c, s) : r === 3 ? u.add(s) : u[c] = s;
};
function M1(u, c) {
  return u === c ? u !== 0 || 1 / u === 1 / c : u !== u && c !== c;
}
var qu = Array.isArray, Qu = (u) => u instanceof Map, Bu = (u) => u instanceof Set, va = (u) => typeof u == "object", Al = (u) => typeof u == "function", is = (u) => typeof u == "boolean";
function C1(u) {
  const c = +u;
  return Number.isInteger(c) && String(c) === u;
}
var D1 = (u) => va(u) ? u?.[Ie] : null, Tn = (u) => u.copy_ || u.base_, Ns = (u) => u.modified_ ? u.copy_ : u.base_;
function vs(u, c) {
  if (Qu(u))
    return new Map(u);
  if (Bu(u))
    return new Set(u);
  if (qu(u))
    return Array[ju].slice.call(u);
  const s = Jy(u);
  if (c === !0 || c === "class_only" && !s) {
    const r = Rt.getOwnPropertyDescriptors(u);
    delete r[Ie];
    let d = Reflect.ownKeys(r);
    for (let m = 0; m < d.length; m++) {
      const g = d[m], O = r[g];
      O[dc] === !1 && (O[dc] = !0, O[hs] = !0), (O.get || O.set) && (r[g] = {
        [hs]: !0,
        [dc]: !0,
        // could live with !!desc.set as well here...
        [gc]: O[gc],
        [Du]: u[g]
      });
    }
    return Rt.create(Ml(u), r);
  } else {
    const r = Ml(u);
    if (r !== null && s)
      return { ...u };
    const d = Rt.create(r);
    return Rt.assign(d, u);
  }
}
function Us(u, c = !1) {
  return zc(u) || Nt(u) || !Ut(u) || (Cl(u) > 1 && Rt.defineProperties(u, {
    set: ac,
    add: ac,
    clear: ac,
    delete: ac
  }), Rt.freeze(u), c && xu(
    u,
    (s, r) => {
      Us(r, !0);
    },
    !1
  )), u;
}
function z1() {
  ct(2);
}
var ac = {
  [Du]: z1
};
function zc(u) {
  return u === null || !va(u) ? !0 : Rt.isFrozen(u);
}
var Sc = "MapSet", bc = "Patches", ty = "ArrayMethods", _c = {};
function Dl(u) {
  const c = _c[u];
  return c || ct(0, u), c;
}
var ny = (u) => !!_c[u];
function O1(u, c) {
  _c[u] || (_c[u] = c);
}
var zu, ky = () => zu, R1 = (u, c) => ({
  drafts_: [],
  parent_: u,
  immer_: c,
  // Whenever the modified draft contains a draft from another scope, we
  // need to prevent auto-freezing so the unowned draft can be finalized.
  canAutoFreeze_: !0,
  unfinalizedDrafts_: 0,
  handledSet_: /* @__PURE__ */ new Set(),
  processedForPatches_: /* @__PURE__ */ new Set(),
  mapSetPlugin_: ny(Sc) ? Dl(Sc) : void 0,
  arrayMethodsPlugin_: ny(ty) ? Dl(ty) : void 0
});
function ly(u, c) {
  c && (u.patchPlugin_ = Dl(bc), u.patches_ = [], u.inversePatches_ = [], u.patchListener_ = c);
}
function gs(u) {
  ps(u), u.drafts_.forEach(N1), u.drafts_ = null;
}
function ps(u) {
  u === zu && (zu = u.parent_);
}
var ay = (u) => zu = R1(zu, u);
function N1(u) {
  const c = u[Ie];
  c.type_ === 0 || c.type_ === 1 ? c.revoke_() : c.revoked_ = !0;
}
function uy(u, c) {
  c.unfinalizedDrafts_ = c.drafts_.length;
  const s = c.drafts_[0];
  if (u !== void 0 && u !== s) {
    s[Ie].modified_ && (gs(c), ct(4)), Ut(u) && (u = iy(c, u));
    const { patchPlugin_: d } = c;
    d && d.generateReplacementPatches_(
      s[Ie].base_,
      u,
      c
    );
  } else
    u = iy(c, s);
  return U1(c, u, !0), gs(c), c.patches_ && c.patchListener_(c.patches_, c.inversePatches_), u !== Rs ? u : void 0;
}
function iy(u, c) {
  if (zc(c))
    return c;
  const s = c[Ie];
  if (!s)
    return Ec(c, u.handledSet_, u);
  if (!Oc(s, u))
    return c;
  if (!s.modified_)
    return s.base_;
  if (!s.finalized_) {
    const { callbacks_: r } = s;
    if (r)
      for (; r.length > 0; )
        r.pop()(u);
    $y(s, u);
  }
  return s.copy_;
}
function U1(u, c, s = !1) {
  !u.parent_ && u.immer_.autoFreeze_ && u.canAutoFreeze_ && Us(c, s);
}
function Fy(u) {
  u.finalized_ = !0, u.scope_.unfinalizedDrafts_--;
}
var Oc = (u, c) => u.scope_ === c, j1 = [];
function Wy(u, c, s, r) {
  const d = Tn(u), m = u.type_;
  if (r !== void 0 && En(d, r, m) === c) {
    pc(d, r, s, m);
    return;
  }
  if (!u.draftLocations_) {
    const O = u.draftLocations_ = /* @__PURE__ */ new Map();
    xu(d, (p, y) => {
      if (Nt(y)) {
        const q = O.get(y) || [];
        q.push(p), O.set(y, q);
      }
    });
  }
  const g = u.draftLocations_.get(c) ?? j1;
  for (const O of g)
    pc(d, O, s, m);
}
function x1(u, c, s) {
  u.callbacks_.push(function(d) {
    const m = c;
    if (!m || !Oc(m, d))
      return;
    d.mapSetPlugin_?.fixSetContents(m);
    const g = Ns(m);
    Wy(u, m.draft_ ?? m, g, s), $y(m, d);
  });
}
function $y(u, c) {
  if (u.modified_ && !u.finalized_ && (u.type_ === 3 || u.type_ === 1 && u.allIndicesReassigned_ || (u.assigned_?.size ?? 0) > 0)) {
    const { patchPlugin_: r } = c;
    if (r) {
      const d = r.getPath(u);
      d && r.generatePatches_(u, d, c);
    }
    Fy(u);
  }
}
function q1(u, c, s) {
  const { scope_: r } = u;
  if (Nt(s)) {
    const d = s[Ie];
    Oc(d, r) && d.callbacks_.push(function() {
      mc(u);
      const g = Ns(d);
      Wy(u, s, g, c);
    });
  } else Ut(s) && u.callbacks_.push(function() {
    const m = Tn(u);
    u.type_ === 3 ? m.has(s) && Ec(s, r.handledSet_, r) : En(m, c, u.type_) === s && r.drafts_.length > 1 && (u.assigned_.get(c) ?? !1) === !0 && u.copy_ && Ec(
      En(u.copy_, c, u.type_),
      r.handledSet_,
      r
    );
  });
}
function Ec(u, c, s) {
  return !s.immer_.autoFreeze_ && s.unfinalizedDrafts_ < 1 || Nt(u) || c.has(u) || !Ut(u) || zc(u) || (c.add(u), xu(u, (r, d) => {
    if (Nt(d)) {
      const m = d[Ie];
      if (Oc(m, s)) {
        const g = Ns(m);
        pc(u, r, g, u.type_), Fy(m);
      }
    } else Ut(d) && Ec(d, c, s);
  })), u;
}
function Q1(u, c) {
  const s = qu(u), r = {
    type_: s ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: c ? c.scope_ : ky(),
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
  let d = r, m = Tc;
  s && (d = [r], m = Ou);
  const { revoke: g, proxy: O } = Proxy.revocable(d, m);
  return r.draft_ = O, r.revoke_ = g, [O, r];
}
var Tc = {
  get(u, c) {
    if (c === Ie)
      return u;
    let s = u.scope_.arrayMethodsPlugin_;
    const r = u.type_ === 1 && typeof c == "string";
    if (r && s?.isArrayOperationMethod(c))
      return s.createMethodInterceptor(u, c);
    const d = Tn(u);
    if (!Au(d, c, u.type_))
      return B1(u, d, c);
    const m = d[c];
    if (u.finalized_ || !Ut(m) || r && u.operationMethod && s?.isMutatingArrayMethod(
      u.operationMethod
    ) && C1(c))
      return m;
    if (m === cs(u.base_, c)) {
      mc(u);
      const g = u.type_ === 1 ? +c : c, O = bs(u.scope_, m, u, g);
      return u.copy_[g] = O;
    }
    return m;
  },
  has(u, c) {
    return c in Tn(u);
  },
  ownKeys(u) {
    return Reflect.ownKeys(Tn(u));
  },
  set(u, c, s) {
    const r = Iy(Tn(u), c);
    if (r?.set)
      return r.set.call(u.draft_, s), !0;
    if (!u.modified_) {
      const d = cs(Tn(u), c), m = d?.[Ie];
      if (m && m.base_ === s)
        return u.copy_[c] = s, u.assigned_.set(c, !1), !0;
      if (M1(s, d) && (s !== void 0 || Au(u.base_, c, u.type_)))
        return !0;
      mc(u), Ss(u);
    }
    return u.copy_[c] === s && // special case: handle new props with value 'undefined'
    (s !== void 0 || c in u.copy_) || // special case: NaN
    Number.isNaN(s) && Number.isNaN(u.copy_[c]) || (u.copy_[c] = s, u.assigned_.set(c, !0), q1(u, c, s)), !0;
  },
  deleteProperty(u, c) {
    return mc(u), cs(u.base_, c) !== void 0 || c in u.base_ ? (u.assigned_.set(c, !1), Ss(u)) : u.assigned_.delete(c), u.copy_ && delete u.copy_[c], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(u, c) {
    const s = Tn(u), r = Reflect.getOwnPropertyDescriptor(s, c);
    return r && {
      [dc]: !0,
      [hs]: u.type_ !== 1 || c !== "length",
      [gc]: r[gc],
      [Du]: s[c]
    };
  },
  defineProperty() {
    ct(11);
  },
  getPrototypeOf(u) {
    return Ml(u.base_);
  },
  setPrototypeOf() {
    ct(12);
  }
}, Ou = {};
for (let u in Tc) {
  let c = Tc[u];
  Ou[u] = function() {
    const s = arguments;
    return s[0] = s[0][0], c.apply(this, s);
  };
}
Ou.deleteProperty = function(u, c) {
  return Ou.set.call(this, u, c, void 0);
};
Ou.set = function(u, c, s) {
  return Tc.set.call(this, u[0], c, s, u[0]);
};
function cs(u, c) {
  const s = u[Ie];
  return (s ? Tn(s) : u)[c];
}
function B1(u, c, s) {
  const r = Iy(c, s);
  return r ? Du in r ? r[Du] : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    r.get?.call(u.draft_)
  ) : void 0;
}
function Iy(u, c) {
  if (!(c in u))
    return;
  let s = Ml(u);
  for (; s; ) {
    const r = Object.getOwnPropertyDescriptor(s, c);
    if (r)
      return r;
    s = Ml(s);
  }
}
function Ss(u) {
  u.modified_ || (u.modified_ = !0, u.parent_ && Ss(u.parent_));
}
function mc(u) {
  u.copy_ || (u.assigned_ = /* @__PURE__ */ new Map(), u.copy_ = vs(
    u.base_,
    u.scope_.immer_.useStrictShallowCopy_
  ));
}
var H1 = class {
  constructor(u) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (c, s, r) => {
      if (Al(c) && !Al(s)) {
        const m = s;
        s = c;
        const g = this;
        return function(p = m, ...y) {
          return g.produce(p, (q) => s.call(this, q, ...y));
        };
      }
      Al(s) || ct(6), r !== void 0 && !Al(r) && ct(7);
      let d;
      if (Ut(c)) {
        const m = ay(this), g = bs(m, c, void 0);
        let O = !0;
        try {
          d = s(g), O = !1;
        } finally {
          O ? gs(m) : ps(m);
        }
        return ly(m, r), uy(d, m);
      } else if (!c || !va(c)) {
        if (d = s(c), d === void 0 && (d = c), d === Rs && (d = void 0), this.autoFreeze_ && Us(d, !0), r) {
          const m = [], g = [];
          Dl(bc).generateReplacementPatches_(c, d, {
            patches_: m,
            inversePatches_: g
          }), r(m, g);
        }
        return d;
      } else
        ct(1, c);
    }, this.produceWithPatches = (c, s) => {
      if (Al(c))
        return (g, ...O) => this.produceWithPatches(g, (p) => c(p, ...O));
      let r, d;
      return [this.produce(c, s, (g, O) => {
        r = g, d = O;
      }), r, d];
    }, is(u?.autoFreeze) && this.setAutoFreeze(u.autoFreeze), is(u?.useStrictShallowCopy) && this.setUseStrictShallowCopy(u.useStrictShallowCopy), is(u?.useStrictIteration) && this.setUseStrictIteration(u.useStrictIteration);
  }
  createDraft(u) {
    Ut(u) || ct(8), Nt(u) && (u = Py(u));
    const c = ay(this), s = bs(c, u, void 0);
    return s[Ie].isManual_ = !0, ps(c), s;
  }
  finishDraft(u, c) {
    const s = u && u[Ie];
    (!s || !s.isManual_) && ct(9);
    const { scope_: r } = s;
    return ly(r, c), uy(void 0, r);
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
    const r = Dl(bc).applyPatches_;
    return Nt(u) ? r(u, c) : this.produce(
      u,
      (d) => r(d, c)
    );
  }
};
function bs(u, c, s, r) {
  const [d, m] = Qu(c) ? Dl(Sc).proxyMap_(c, s) : Bu(c) ? Dl(Sc).proxySet_(c, s) : Q1(c, s);
  return (s?.scope_ ?? ky()).drafts_.push(d), m.callbacks_ = s?.callbacks_ ?? [], m.key_ = r, s && r !== void 0 ? x1(s, m, r) : m.callbacks_.push(function(p) {
    p.mapSetPlugin_?.fixSetContents(m);
    const { patchPlugin_: y } = p;
    m.modified_ && y && y.generatePatches_(m, [], p);
  }), d;
}
function Py(u) {
  return Nt(u) || ct(10, u), eh(u);
}
function eh(u) {
  if (!Ut(u) || zc(u))
    return u;
  const c = u[Ie];
  let s, r = !0;
  if (c) {
    if (!c.modified_)
      return c.base_;
    c.finalized_ = !0, s = vs(u, c.scope_.immer_.useStrictShallowCopy_), r = c.scope_.immer_.shouldUseStrictIteration();
  } else
    s = vs(u, !0);
  return xu(
    s,
    (d, m) => {
      pc(s, d, eh(m));
    },
    r
  ), c && (c.finalized_ = !1), s;
}
function w1() {
  function c(j, X = []) {
    if (j.key_ !== void 0) {
      const U = j.parent_.copy_ ?? j.parent_.base_, Y = D1(En(U, j.key_)), k = En(U, j.key_);
      if (k === void 0 || k !== j.draft_ && k !== j.base_ && k !== j.copy_ || Y != null && Y.base_ !== j.base_)
        return null;
      const b = j.parent_.type_ === 3;
      let z;
      if (b) {
        const T = j.parent_;
        z = Array.from(T.drafts_.keys()).indexOf(j.key_);
      } else
        z = j.key_;
      if (!(b && U.size > z || Au(U, z)))
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
      if (U = En(U, k), !va(U) || U === null)
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
        return y(
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
    xu(j.assigned_, (T, A) => {
      const R = En(k, T, z), V = En(b, T, z), L = A ? Au(k, T) ? r : d : m;
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
  function y(j, X, U, Y) {
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
      value: X === Rs ? void 0 : X
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
        const V = Cl(b);
        let L = Y[R];
        typeof L != "string" && typeof L != "number" && (L = "" + L), (V === 0 || V === 1) && (L === "__proto__" || L === Cu) && ct(19), Al(b) && L === ju && ct(19), b = En(b, L), va(b) || ct(18, Y.join("/"));
      }
      const z = Cl(b), T = C(U.value), A = Y[Y.length - 1];
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
    if (!Ut(j))
      return j;
    if (qu(j))
      return j.map(C);
    if (Qu(j))
      return new Map(
        Array.from(j.entries()).map(([U, Y]) => [U, C(Y)])
      );
    if (Bu(j))
      return new Set(Array.from(j).map(C));
    const X = Object.create(Ml(j));
    for (const U in j)
      X[U] = C(j[U]);
    return Au(j, Tu) && (X[Tu] = j[Tu]), X;
  }
  function G(j) {
    return Nt(j) ? C(j) : j;
  }
  O1(bc, {
    applyPatches_: S,
    generatePatches_: g,
    generateReplacementPatches_: q,
    getPath: c
  });
}
var Ru = new H1(), Hu = Ru.produce, th = /* @__PURE__ */ Ru.produceWithPatches.bind(
  Ru
), cy = /* @__PURE__ */ Ru.applyPatches.bind(Ru);
function Y1(u, c = `expected a function, instead received ${typeof u}`) {
  if (typeof u != "function")
    throw new TypeError(c);
}
function L1(u, c = `expected an object, instead received ${typeof u}`) {
  if (typeof u != "object")
    throw new TypeError(c);
}
function G1(u, c = "expected all items to be functions, instead received the following types: ") {
  if (!u.every((s) => typeof s == "function")) {
    const s = u.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${c}[${s}]`);
  }
}
var fy = (u) => Array.isArray(u) ? u : [u];
function V1(u) {
  const c = Array.isArray(u[0]) ? u[0] : u;
  return G1(
    c,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), c;
}
function X1(u, c) {
  const s = [], { length: r } = u;
  for (let d = 0; d < r; d++)
    s.push(u[d].apply(null, c));
  return s;
}
var Z1 = class {
  constructor(u) {
    this.value = u;
  }
  deref() {
    return this.value;
  }
}, K1 = typeof WeakRef < "u" ? WeakRef : Z1, J1 = 0, ry = 1;
function uc() {
  return {
    s: J1,
    v: void 0,
    o: null,
    p: null
  };
}
function Ac(u, c = {}) {
  let s = uc();
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
        X === void 0 ? (O = uc(), j.set(G, O)) : O = X;
      } else {
        let j = O.p;
        j === null && (O.p = j = /* @__PURE__ */ new Map());
        const X = j.get(G);
        X === void 0 ? (O = uc(), j.set(G, O)) : O = X;
      }
    }
    const y = O;
    let q;
    if (O.s === ry)
      q = O.v;
    else if (q = u.apply(null, arguments), m++, r) {
      const S = d?.deref?.() ?? d;
      S != null && r(S, q) && (q = S, m !== 0 && m--), d = typeof q == "object" && q !== null || typeof q == "function" ? new K1(q) : q;
    }
    return y.s = ry, y.v = q, q;
  }
  return g.clearCache = () => {
    s = uc(), g.resetResultsCount();
  }, g.resultsCount = () => m, g.resetResultsCount = () => {
    m = 0;
  }, g;
}
function k1(u, ...c) {
  const s = typeof u == "function" ? {
    memoize: u,
    memoizeOptions: c
  } : u, r = (...d) => {
    let m = 0, g = 0, O, p = {}, y = d.pop();
    typeof y == "object" && (p = y, y = d.pop()), Y1(
      y,
      `createSelector expects an output function after the inputs, but received: [${typeof y}]`
    );
    const q = {
      ...s,
      ...p
    }, {
      memoize: S,
      memoizeOptions: C = [],
      argsMemoize: G = Ac,
      argsMemoizeOptions: j = []
    } = q, X = fy(C), U = fy(j), Y = V1(d), k = S(function() {
      return m++, y.apply(
        null,
        arguments
      );
    }, ...X), b = G(function() {
      g++;
      const T = X1(
        Y,
        arguments
      );
      return O = k.apply(null, T), O;
    }, ...U);
    return Object.assign(b, {
      resultFunc: y,
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
var js = /* @__PURE__ */ k1(Ac), F1 = Object.assign(
  (u, c = js) => {
    L1(
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
  { withTypes: () => F1 }
);
function nh(u) {
  return ({ dispatch: s, getState: r }) => (d) => (m) => typeof m == "function" ? m(s, r, u) : d(m);
}
var W1 = nh(), $1 = nh, I1 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? vc : vc.apply(null, arguments);
}, P1 = (u) => u && typeof u.match == "function";
function Ft(u, c) {
  function s(...r) {
    if (c) {
      let d = c(...r);
      if (!d)
        throw new Error(Xt(0));
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
  return s.toString = () => `${u}`, s.type = u, s.match = (r) => Ky(r) && r.type === u, s;
}
var lh = class Su extends Array {
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
function sy(u) {
  return Ut(u) ? Hu(u, () => {
  }) : u;
}
function ic(u, c, s) {
  return u.has(c) ? u.get(c) : u.set(c, s(c)).get(c);
}
function eg(u) {
  return typeof u == "boolean";
}
var tg = () => function(c) {
  const {
    thunk: s = !0,
    immutableCheck: r = !0,
    serializableCheck: d = !0,
    actionCreatorCheck: m = !0
  } = c ?? {};
  let g = new lh();
  return s && (eg(s) ? g.push(W1) : g.push($1(s.extraArgument))), g;
}, Rc = "RTK_autoBatch", yu = () => (u) => ({
  payload: u,
  meta: {
    [Rc]: !0
  }
}), oy = (u) => (c) => {
  setTimeout(c, u);
}, ng = (u = {
  type: "raf"
}) => (c) => (...s) => {
  const r = c(...s);
  let d = !0, m = !1, g = !1;
  const O = /* @__PURE__ */ new Set(), p = u.type === "tick" ? queueMicrotask : u.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : oy(10)
  ) : u.type === "callback" ? u.queueNotification : oy(u.timeout), y = () => {
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
        return d = !q?.meta?.[Rc], m = !d, m && (g || (g = !0, p(y))), r.dispatch(q);
      } finally {
        d = !0;
      }
    }
  });
}, lg = (u) => function(s) {
  const {
    autoBatch: r = !0
  } = s ?? {};
  let d = new lh(u);
  return r && d.push(ng(typeof r == "object" ? r : void 0)), d;
};
function ag(u) {
  const c = tg(), {
    reducer: s = void 0,
    middleware: r,
    devTools: d = !0,
    preloadedState: m = void 0,
    enhancers: g = void 0
  } = u || {};
  let O;
  if (typeof s == "function")
    O = s;
  else if (el(s))
    O = Zy(s);
  else
    throw new Error(Xt(1));
  let p;
  typeof r == "function" ? p = r(c) : p = c();
  let y = vc;
  d && (y = I1({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !1,
    ...typeof d == "object" && d
  }));
  const q = E1(...p), S = lg(q);
  let C = typeof g == "function" ? g(S) : S();
  const G = y(...C);
  return Xy(O, m, G);
}
function ah(u) {
  const c = {}, s = [];
  let r;
  const d = {
    addCase(m, g) {
      const O = typeof m == "string" ? m : m.type;
      if (!O)
        throw new Error(Xt(28));
      if (O in c)
        throw new Error(Xt(29));
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
function ug(u) {
  return typeof u == "function";
}
function ig(u, c) {
  let [s, r, d] = ah(c), m;
  if (ug(u))
    m = () => sy(u());
  else {
    const O = sy(u);
    m = () => O;
  }
  function g(O = m(), p) {
    let y = [s[p.type], ...r.filter(({
      matcher: q
    }) => q(p)).map(({
      reducer: q
    }) => q)];
    return y.filter((q) => !!q).length === 0 && (y = [d]), y.reduce((q, S) => {
      if (S)
        if (Nt(q)) {
          const G = S(q, p);
          return G === void 0 ? q : G;
        } else {
          if (Ut(q))
            return Hu(q, (C) => S(C, p));
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
var uh = (u, c) => P1(u) ? u.match(c) : u(c);
function An(...u) {
  return (c) => u.some((s) => uh(s, c));
}
function Mu(...u) {
  return (c) => u.every((s) => uh(s, c));
}
function Nc(u, c) {
  if (!u || !u.meta) return !1;
  const s = typeof u.meta.requestId == "string", r = c.indexOf(u.meta.requestStatus) > -1;
  return s && r;
}
function wu(u) {
  return typeof u[0] == "function" && "pending" in u[0] && "fulfilled" in u[0] && "rejected" in u[0];
}
function xs(...u) {
  return u.length === 0 ? (c) => Nc(c, ["pending"]) : wu(u) ? An(...u.map((c) => c.pending)) : xs()(u[0]);
}
function ga(...u) {
  return u.length === 0 ? (c) => Nc(c, ["rejected"]) : wu(u) ? An(...u.map((c) => c.rejected)) : ga()(u[0]);
}
function Uc(...u) {
  const c = (s) => s && s.meta && s.meta.rejectedWithValue;
  return u.length === 0 ? Mu(ga(...u), c) : wu(u) ? Mu(ga(...u), c) : Uc()(u[0]);
}
function tl(...u) {
  return u.length === 0 ? (c) => Nc(c, ["fulfilled"]) : wu(u) ? An(...u.map((c) => c.fulfilled)) : tl()(u[0]);
}
function _s(...u) {
  return u.length === 0 ? (c) => Nc(c, ["pending", "fulfilled", "rejected"]) : wu(u) ? An(...u.flatMap((c) => [c.pending, c.rejected, c.fulfilled])) : _s()(u[0]);
}
var cg = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", qs = (u = 21) => {
  let c = "", s = u;
  for (; s--; )
    c += cg[Math.random() * 64 | 0];
  return c;
}, fg = ["name", "message", "stack", "code"], fs = class {
  constructor(u, c) {
    this.payload = u, this.meta = c;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
}, dy = class {
  constructor(u, c) {
    this.payload = u, this.meta = c;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
}, rg = (u) => {
  if (typeof u == "object" && u !== null) {
    const c = {};
    for (const s of fg)
      typeof u[s] == "string" && (c[s] = u[s]);
    return c;
  }
  return {
    message: String(u)
  };
}, my = "External signal was aborted", yy = /* @__PURE__ */ (() => {
  function u(c, s, r) {
    const d = Ft(c + "/fulfilled", (p, y, q, S) => ({
      payload: p,
      meta: {
        ...S || {},
        arg: q,
        requestId: y,
        requestStatus: "fulfilled"
      }
    })), m = Ft(c + "/pending", (p, y, q) => ({
      payload: void 0,
      meta: {
        ...q || {},
        arg: y,
        requestId: p,
        requestStatus: "pending"
      }
    })), g = Ft(c + "/rejected", (p, y, q, S, C) => ({
      payload: S,
      error: (r && r.serializeError || rg)(p || "Rejected"),
      meta: {
        ...C || {},
        arg: q,
        requestId: y,
        rejectedWithValue: !!S,
        requestStatus: "rejected",
        aborted: p?.name === "AbortError",
        condition: p?.name === "ConditionError"
      }
    }));
    function O(p, {
      signal: y
    } = {}) {
      return (q, S, C) => {
        const G = r?.idGenerator ? r.idGenerator(p) : qs(), j = new AbortController();
        let X, U;
        function Y(b) {
          U = b, j.abort();
        }
        y && (y.aborted ? Y(my) : y.addEventListener("abort", () => Y(my), {
          once: !0
        }));
        const k = (async function() {
          let b;
          try {
            let T = r?.condition?.(p, {
              getState: S,
              extra: C
            });
            if (og(T) && (T = await T), T === !1 || j.signal.aborted)
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
              rejectWithValue: (R, V) => new fs(R, V),
              fulfillWithValue: (R, V) => new dy(R, V)
            })).then((R) => {
              if (R instanceof fs)
                throw R;
              return R instanceof dy ? d(R.payload, G, p, R.meta) : d(R, G, p);
            })]);
          } catch (T) {
            b = T instanceof fs ? g(null, G, p, T.payload, T.meta) : g(T, G, p);
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
            return k.then(sg);
          }
        });
      };
    }
    return Object.assign(O, {
      pending: m,
      rejected: g,
      fulfilled: d,
      settled: An(g, d),
      typePrefix: c
    });
  }
  return u.withTypes = () => u, u;
})();
function sg(u) {
  if (u.meta && u.meta.rejectedWithValue)
    throw u.payload;
  if (u.error)
    throw u.error;
  return u.payload;
}
function og(u) {
  return u !== null && typeof u == "object" && typeof u.then == "function";
}
var dg = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function mg(u, c) {
  return `${u}/${c}`;
}
function yg({
  creators: u
} = {}) {
  const c = u?.asyncThunk?.[dg];
  return function(r) {
    const {
      name: d,
      reducerPath: m = d
    } = r;
    if (!d)
      throw new Error(Xt(11));
    const g = (typeof r.reducers == "function" ? r.reducers(vg()) : r.reducers) || {}, O = Object.keys(g), p = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, y = {
      addCase(b, z) {
        const T = typeof b == "string" ? b : b.type;
        if (!T)
          throw new Error(Xt(12));
        if (T in p.sliceCaseReducersByType)
          throw new Error(Xt(13));
        return p.sliceCaseReducersByType[T] = z, y;
      },
      addMatcher(b, z) {
        return p.sliceMatchers.push({
          matcher: b,
          reducer: z
        }), y;
      },
      exposeAction(b, z) {
        return p.actionCreators[b] = z, y;
      },
      exposeCaseReducer(b, z) {
        return p.sliceCaseReducersByName[b] = z, y;
      }
    };
    O.forEach((b) => {
      const z = g[b], T = {
        reducerName: b,
        type: mg(d, b),
        createNotation: typeof r.reducers == "function"
      };
      pg(z) ? bg(T, z, y, c) : gg(T, z, y);
    });
    function q() {
      const [b = {}, z = [], T = void 0] = typeof r.extraReducers == "function" ? ah(r.extraReducers) : [r.extraReducers], A = {
        ...b,
        ...p.sliceCaseReducersByType
      };
      return ig(r.initialState, (R) => {
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
        return typeof V > "u" && z && (V = ic(G, T, U)), V;
      }
      function A(R = S) {
        const V = ic(C, z, () => /* @__PURE__ */ new WeakMap());
        return ic(V, R, () => {
          const L = {};
          for (const [x, _] of Object.entries(r.selectors ?? {}))
            L[x] = hg(_, R, () => ic(G, R, U), z);
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
function hg(u, c, s, r) {
  function d(m, ...g) {
    let O = c(m);
    return typeof O > "u" && r && (O = s()), u(O, ...g);
  }
  return d.unwrapped = u, d;
}
var In = /* @__PURE__ */ yg();
function vg() {
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
function gg({
  type: u,
  reducerName: c,
  createNotation: s
}, r, d) {
  let m, g;
  if ("reducer" in r) {
    if (s && !Sg(r))
      throw new Error(Xt(17));
    m = r.reducer, g = r.prepare;
  } else
    m = r;
  d.addCase(u, m).exposeCaseReducer(c, m).exposeAction(c, g ? Ft(u, g) : Ft(u));
}
function pg(u) {
  return u._reducerDefinitionType === "asyncThunk";
}
function Sg(u) {
  return u._reducerDefinitionType === "reducerWithPrepare";
}
function bg({
  type: u,
  reducerName: c
}, s, r, d) {
  if (!d)
    throw new Error(Xt(18));
  const {
    payloadCreator: m,
    fulfilled: g,
    pending: O,
    rejected: p,
    settled: y,
    options: q
  } = s, S = d(u, m, q);
  r.exposeAction(c, S), g && r.addCase(S.fulfilled, g), O && r.addCase(S.pending, O), p && r.addCase(S.rejected, p), y && r.addMatcher(S.settled, y), r.exposeCaseReducer(c, {
    fulfilled: g || cc,
    pending: O || cc,
    rejected: p || cc,
    settled: y || cc
  });
}
function cc() {
}
function Xt(u) {
  return `Minified Redux Toolkit error #${u}; visit https://redux-toolkit.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
}
var _g = class extends Error {
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
}, ih = /* @__PURE__ */ ((u) => (u.uninitialized = "uninitialized", u.pending = "pending", u.fulfilled = "fulfilled", u.rejected = "rejected", u))(ih || {}), Mn = "uninitialized", Es = "pending", bu = "fulfilled", _u = "rejected";
function hy(u) {
  return {
    status: u,
    isUninitialized: u === Mn,
    isLoading: u === Es,
    isSuccess: u === bu,
    isError: u === _u
  };
}
var vy = el;
function Qs(u, c) {
  if (u === c || !(vy(u) && vy(c) || Array.isArray(u) && Array.isArray(c)))
    return c;
  const s = Object.keys(c), r = Object.keys(u);
  let d = s.length === r.length;
  const m = Array.isArray(c) ? [] : {};
  for (const g of s)
    m[g] = Qs(u[g], c[g]), d && (d = u[g] === m[g]);
  return d ? u : m;
}
function Ts(u, c, s) {
  return u.reduce((r, d, m) => (c(d, m) && r.push(s(d, m)), r), []).flat();
}
function Eg(u) {
  return new RegExp("(^|:)//").test(u);
}
function Tg() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function Bs(u) {
  return u != null;
}
function gy(u) {
  return [...u?.values() ?? []].filter(Bs);
}
function Ag() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
var Mg = (u) => u.replace(/\/$/, ""), Cg = (u) => u.replace(/^\//, "");
function Dg(u, c) {
  if (!u)
    return c;
  if (!c)
    return u;
  if (Eg(c))
    return c;
  const s = u.endsWith("/") || !c.startsWith("?") ? "/" : "";
  return u = Mg(u), c = Cg(c), `${u}${s}${c}`;
}
function Mc(u, c, s) {
  return u.has(c) ? u.get(c) : u.set(c, s(c)).get(c);
}
var As = () => /* @__PURE__ */ new Map(), zg = (u) => {
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
}, Og = (...u) => {
  for (const s of u) if (s.aborted) return AbortSignal.abort(s.reason);
  const c = new AbortController();
  for (const s of u)
    s.addEventListener("abort", () => c.abort(s.reason), {
      signal: c.signal,
      once: !0
    });
  return c.signal;
}, py = (...u) => fetch(...u), Rg = (u) => u.status >= 200 && u.status <= 299, Ng = (u) => (
  /*applicat*/
  /ion\/(vnd\.api\+)?json/.test(u.get("content-type") || "")
);
function Sy(u) {
  if (!el(u))
    return u;
  const c = {
    ...u
  };
  for (const [s, r] of Object.entries(c))
    r === void 0 && delete c[s];
  return c;
}
var Ug = (u) => typeof u == "object" && (el(u) || Array.isArray(u) || typeof u.toJSON == "function");
function jg({
  baseUrl: u,
  prepareHeaders: c = (S) => S,
  fetchFn: s = py,
  paramsSerializer: r,
  isJsonContentType: d = Ng,
  jsonContentType: m = "application/json",
  jsonReplacer: g,
  timeout: O,
  responseHandler: p,
  validateStatus: y,
  ...q
} = {}) {
  return typeof fetch > "u" && s === py && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), async (C, G, j) => {
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
      validateStatus: L = y ?? Rg,
      timeout: x = O,
      ..._
    } = typeof C == "string" ? {
      url: C
    } : C, M = {
      ...q,
      signal: x ? Og(G.signal, zg(x)) : G.signal,
      ..._
    };
    A = new Headers(Sy(A)), M.headers = await c(A, {
      getState: X,
      arg: C,
      extra: U,
      endpoint: Y,
      forced: k,
      type: b,
      extraOptions: j
    }) || A;
    const w = Ug(M.body);
    if (M.body != null && !w && typeof M.body != "string" && M.headers.delete("content-type"), !M.headers.has("content-type") && w && M.headers.set("content-type", m), w && d(M.headers) && (M.body = JSON.stringify(M.body, g)), M.headers.has("accept") || (V === "json" ? M.headers.set("accept", "application/json") : V === "text" && M.headers.set("accept", "text/plain, text/html, */*")), R) {
      const ue = ~T.indexOf("?") ? "&" : "?", h = r ? r(R) : new URLSearchParams(Sy(R));
      T += ue + h;
    }
    T = Dg(u, T);
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
        S(D, V).then((h) => I = h, (h) => ue = h),
        // see https://github.com/node-fetch/node-fetch/issues/665#issuecomment-538995182
        // we *have* to "use up" both streams at the same time or they will stop running in node-fetch scenarios
        F.text().then((h) => te = h, () => {
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
var by = class {
  constructor(u, c = void 0) {
    this.value = u, this.meta = c;
  }
}, jc = "__rtkq/", xg = "online", qg = "offline", ch = "focused", Hs = /* @__PURE__ */ Ft(`${jc}${ch}`), fh = /* @__PURE__ */ Ft(`${jc}un${ch}`), ws = /* @__PURE__ */ Ft(`${jc}${xg}`), rh = /* @__PURE__ */ Ft(`${jc}${qg}`), Yu = "query", sh = "mutation", oh = "infinitequery";
function xc(u) {
  return u.type === Yu;
}
function Qg(u) {
  return u.type === sh;
}
function qc(u) {
  return u.type === oh;
}
function Cc(u) {
  return xc(u) || qc(u);
}
function Ys(u, c, s, r, d, m) {
  const g = Bg(u) ? u(c, s, r, d) : u;
  return g ? Ts(g, Bs, (O) => m(dh(O))) : [];
}
function Bg(u) {
  return typeof u == "function";
}
function dh(u) {
  return typeof u == "string" ? {
    type: u
  } : u;
}
function Hg(u, c) {
  return u.catch(c);
}
var pa = (u, c) => u.endpointDefinitions[c], Nu = /* @__PURE__ */ Symbol("forceQueryFn"), Ms = (u) => typeof u[Nu] == "function";
function wg({
  serializeQueryArgs: u,
  queryThunk: c,
  infiniteQueryThunk: s,
  mutationThunk: r,
  api: d,
  context: m,
  getInternalState: g
}) {
  const O = (z) => g(z)?.runningQueries, p = (z) => g(z)?.runningMutations, {
    unsubscribeQueryResult: y,
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
      const R = pa(m, z), V = u({
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
    return (z) => gy(O(z));
  }
  function X() {
    return (z) => gy(p(z));
  }
  function U(z, T) {
    const A = (R, {
      subscribe: V = !0,
      forceRefetch: L,
      subscriptionOptions: x,
      [Nu]: _,
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
        type: Yu,
        subscribe: V,
        forceRefetch: L,
        subscriptionOptions: x,
        endpointName: z,
        originalArgs: R,
        queryCacheKey: ae,
        [Nu]: _
      };
      if (xc(T))
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
        requestId: h,
        abort: K
      } = te, le = ue.requestId !== h, ne = O(w)?.get(ae), ce = () => I(W()), se = Object.assign(_ ? (
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
        requestId: h,
        subscriptionOptions: x,
        queryCacheKey: ae,
        abort: K,
        async unwrap() {
          const ie = await se;
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
          V && w(y({
            queryCacheKey: ae,
            requestId: h
          }));
        },
        updateSubscriptionOptions(ie) {
          se.subscriptionOptions = ie, w(S({
            endpointName: z,
            requestId: h,
            queryCacheKey: ae,
            options: ie
          }));
        }
      });
      if (!ne && !le && !_) {
        const ie = O(w);
        ie.set(ae, se), se.then(() => {
          ie.delete(ae);
        });
      }
      return se;
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
      } = _, ae = Hg(_.unwrap().then((te) => ({
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
var mh = class extends _g {
  constructor(u, c, s, r) {
    super(u), this.value = c, this.schemaName = s, this._bqMeta = r;
  }
}, _l = (u, c) => Array.isArray(u) ? u.includes(c) : !!u;
async function El(u, c, s, r) {
  const d = await u["~standard"].validate(c);
  if (d.issues)
    throw new mh(d.issues, c, s, r);
  return d.value;
}
function _y(u) {
  return u;
}
var hu = (u = {}) => ({
  ...u,
  [Rc]: !0
});
function Yg({
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
  skipSchemaValidation: y
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
    ), ue = Ys(F.providesTags, te.data, void 0, M, {}, m);
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
    if (I.status === Mn)
      return te;
    let ue;
    if ("data" in I)
      if (Ut(I.data)) {
        const [h, K, le] = th(I.data, w);
        te.patches.push(...K), te.inversePatches.push(...le), ue = h;
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
    [Nu]: () => ({
      data: w
    })
  })), X = (_, M) => _.query && _[M] ? _[M] : _y, U = async (_, {
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
      skipSchemaValidation: h = y
    } = te, K = _.type === Yu;
    try {
      let le = _y;
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
      }, ce = K ? _[Nu] : void 0;
      let se;
      const ie = async (de, pe, rt, Pe) => {
        if (pe == null && de.pages.length)
          return Promise.resolve({
            data: de
          });
        const tn = {
          queryArg: _.originalArgs,
          pageParam: pe
        }, et = await Se(tn), Wt = Pe ? S : C;
        return {
          data: {
            pages: Wt(de.pages, et.data, rt),
            pageParams: Wt(de.pageParams, pe, rt)
          },
          meta: et.meta
        };
      };
      async function Se(de) {
        let pe;
        const {
          extraOptions: rt,
          argSchema: Pe,
          rawResponseSchema: tn,
          responseSchema: et
        } = te;
        if (Pe && !_l(h, "arg") && (de = await El(
          Pe,
          de,
          "argSchema",
          {}
          // we don't have a meta yet, so we can't pass it
        )), ce ? pe = ce() : te.query ? (le = X(te, "transformResponse"), pe = await c(te.query(de), ne, rt)) : pe = await te.queryFn(de, ne, rt, (Cn) => c(Cn, ne, rt)), typeof process < "u", pe.error) throw new by(pe.error, pe.meta);
        let {
          data: Wt
        } = pe;
        tn && !_l(h, "rawResponse") && (Wt = await El(tn, pe.data, "rawResponseSchema", pe.meta));
        let jt = await le(Wt, pe.meta, de);
        return et && !_l(h, "response") && (jt = await El(et, jt, "responseSchema", pe.meta)), {
          ...pe,
          data: jt
        };
      }
      if (K && "infiniteQueryOptions" in te) {
        const {
          infiniteQueryOptions: de
        } = te, {
          maxPages: pe = 1 / 0
        } = de, rt = _.refetchCachedPages ?? de.refetchCachedPages ?? !0;
        let Pe;
        const tn = {
          pages: [],
          pageParams: []
        }, et = g.selectQueryEntry(F(), _.queryCacheKey)?.data, jt = /* arg.forceRefetch */ Y(_, F()) && !_.direction || !et ? tn : et;
        if ("direction" in _ && _.direction && jt.pages.length) {
          const Cn = _.direction === "backward", nl = (Cn ? yh : Cs)(de, jt, _.originalArgs);
          Pe = await ie(jt, nl, pe, Cn);
        } else {
          const {
            initialPageParam: Cn = de.initialPageParam
          } = _, zl = et?.pageParams ?? [], nl = zl[0] ?? Cn, ba = zl.length;
          if (Pe = await ie(jt, nl, pe), ce && (Pe = {
            data: Pe.data.pages[0]
          }), rt)
            for (let Ol = 1; Ol < ba; Ol++) {
              const Hc = Cs(de, Pe.data, _.originalArgs);
              Pe = await ie(Pe.data, Hc, pe);
            }
        }
        se = Pe;
      } else
        se = await Se(_.originalArgs);
      return ue && !_l(h, "meta") && se.meta && (se.meta = await El(ue, se.meta, "metaSchema", se.meta)), ae(se.data, hu({
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: se.meta
      }));
    } catch (le) {
      let ne = le;
      if (ne instanceof by) {
        let ce = X(te, "transformErrorResponse");
        const {
          rawErrorResponseSchema: se,
          errorResponseSchema: ie
        } = te;
        let {
          value: Se,
          meta: de
        } = ne;
        try {
          se && !_l(h, "rawErrorResponse") && (Se = await El(se, Se, "rawErrorResponseSchema", de)), ue && !_l(h, "meta") && (de = await El(ue, de, "metaSchema", de));
          let pe = await ce(Se, de, _.originalArgs);
          return ie && !_l(h, "errorResponse") && (pe = await El(ie, pe, "errorResponseSchema", de)), W(pe, hu({
            baseQueryMeta: de
          }));
        } catch (pe) {
          ne = pe;
        }
      }
      try {
        if (ne instanceof mh) {
          const ce = {
            endpoint: _.endpointName,
            arg: _.originalArgs,
            type: _.type,
            queryCacheKey: K ? _.queryCacheKey : void 0
          };
          te.onSchemaFailure?.(ne, ce), O?.(ne, ce);
          const {
            catchSchemaFailure: se = p
          } = te;
          if (se)
            return W(se(ne, ce), hu({
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
  const k = () => yy(`${u}/executeQuery`, U, {
    getPendingMeta({
      arg: M
    }) {
      const w = s[M.endpointName];
      return hu({
        startedTimeStamp: Date.now(),
        ...qc(w) ? {
          direction: M.direction
        } : {}
      });
    },
    condition(M, {
      getState: w
    }) {
      const W = w(), ae = g.selectQueryEntry(W, M.queryCacheKey), D = ae?.fulfilledTimeStamp, F = M.originalArgs, I = ae?.originalArgs, te = s[M.endpointName], ue = M.direction;
      return Ms(M) ? !0 : ae?.status === "pending" ? !1 : Y(M, W) || xc(te) && te?.forceRefetch?.({
        currentArg: F,
        previousArg: I,
        endpointState: ae,
        state: W
      }) ? !0 : !(D && !ue);
    },
    dispatchConditionRejection: !0
  }), b = k(), z = k(), T = yy(`${u}/executeMutation`, U, {
    getPendingMeta() {
      return hu({
        startedTimeStamp: Date.now()
      });
    }
  }), A = (_) => "force" in _, R = (_) => "ifOlderThan" in _, V = (_, M, w = {}) => (W, ae) => {
    const D = A(w) && w.force, F = R(w) && w.ifOlderThan, I = (ue = !0) => {
      const h = {
        forceRefetch: ue,
        subscribe: !1
      };
      return d.endpoints[_].initiate(M, h);
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
      matchPending: Mu(xs(_), L(M)),
      matchFulfilled: Mu(tl(_), L(M)),
      matchRejected: Mu(ga(_), L(M))
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
function Cs(u, {
  pages: c,
  pageParams: s
}, r) {
  const d = c.length - 1;
  return u.getNextPageParam(c[d], c, s[d], s, r);
}
function yh(u, {
  pages: c,
  pageParams: s
}, r) {
  return u.getPreviousPageParam?.(c[0], c, s[0], s, r);
}
function hh(u, c, s, r) {
  return Ys(s[u.meta.arg.endpointName][c], tl(u) ? u.payload : void 0, Uc(u) ? u.payload : void 0, u.meta.arg.originalArgs, "baseQueryMeta" in u.meta ? u.meta.baseQueryMeta : void 0, r);
}
function Ey(u) {
  return Nt(u) ? Py(u) : u;
}
function fc(u, c, s) {
  const r = u[c];
  r && s(r);
}
function Uu(u) {
  return ("arg" in u ? u.arg.fixedCacheKey : u.fixedCacheKey) ?? u.requestId;
}
function Ty(u, c, s) {
  const r = u[Uu(c)];
  r && s(r);
}
var rc = {};
function Lg({
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
  config: y
}) {
  const q = Ft(`${u}/resetApiState`);
  function S(L, x, _, M) {
    L[x.queryCacheKey] ??= {
      status: Mn,
      endpointName: x.endpointName
    }, fc(L, x.queryCacheKey, (w) => {
      w.status = Es, w.requestId = _ && w.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        w.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        M.requestId
      ), x.originalArgs !== void 0 && (w.originalArgs = x.originalArgs), w.startedTimeStamp = M.startedTimeStamp;
      const W = d[M.arg.endpointName];
      qc(W) && "direction" in x && (w.direction = x.direction);
    });
  }
  function C(L, x, _, M) {
    fc(L, x.arg.queryCacheKey, (w) => {
      if (w.requestId !== x.requestId && !M) return;
      const {
        merge: W
      } = d[x.arg.endpointName];
      if (w.status = bu, W)
        if (w.data !== void 0) {
          const {
            fulfilledTimeStamp: ae,
            arg: D,
            baseQueryMeta: F,
            requestId: I
          } = x;
          let te = Hu(w.data, (ue) => W(ue, _, {
            arg: D.originalArgs,
            baseQueryMeta: F,
            fulfilledTimeStamp: ae,
            requestId: I
          }));
          w.data = te;
        } else
          w.data = _;
      else
        w.data = d[x.arg.endpointName].structuralSharing ?? !0 ? Qs(Nt(w.data) ? A1(w.data) : w.data, _) : _;
      delete w.error, w.fulfilledTimeStamp = x.fulfilledTimeStamp;
    });
  }
  const G = In({
    name: `${u}/queries`,
    initialState: rc,
    reducers: {
      removeQueryResult: {
        reducer(L, {
          payload: {
            queryCacheKey: x
          }
        }) {
          delete L[x];
        },
        prepare: yu()
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
                type: Yu,
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
            [Rc]: !0,
            requestId: qs(),
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
          fc(L, x, (M) => {
            M.data = cy(M.data, _.concat());
          });
        },
        prepare: yu()
      }
    },
    extraReducers(L) {
      L.addCase(c.pending, (x, {
        meta: _,
        meta: {
          arg: M
        }
      }) => {
        const w = Ms(M);
        S(x, M, w, _);
      }).addCase(c.fulfilled, (x, {
        meta: _,
        payload: M
      }) => {
        const w = Ms(_.arg);
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
        fc(x, M.queryCacheKey, (D) => {
          if (!_) {
            if (D.requestId !== w) return;
            D.status = _u, D.error = ae ?? W;
          }
        });
      }).addMatcher(O, (x, _) => {
        const {
          queries: M
        } = g(_);
        for (const [w, W] of Object.entries(M))
          // do not rehydrate entries that were currently in flight.
          (W?.status === bu || W?.status === _u) && (x[w] = W);
      });
    }
  }), j = In({
    name: `${u}/mutations`,
    initialState: rc,
    reducers: {
      removeMutationResult: {
        reducer(L, {
          payload: x
        }) {
          const _ = Uu(x);
          _ in L && delete L[_];
        },
        prepare: yu()
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
        w.track && (x[Uu(_)] = {
          requestId: M,
          status: Es,
          endpointName: w.endpointName,
          startedTimeStamp: W
        });
      }).addCase(s.fulfilled, (x, {
        payload: _,
        meta: M
      }) => {
        M.arg.track && Ty(x, M, (w) => {
          w.requestId === M.requestId && (w.status = bu, w.data = _, w.fulfilledTimeStamp = M.fulfilledTimeStamp);
        });
      }).addCase(s.rejected, (x, {
        payload: _,
        error: M,
        meta: w
      }) => {
        w.arg.track && Ty(x, w, (W) => {
          W.requestId === w.requestId && (W.status = _u, W.error = _ ?? M);
        });
      }).addMatcher(O, (x, _) => {
        const {
          mutations: M
        } = g(_);
        for (const [w, W] of Object.entries(M))
          // do not rehydrate entries that were currently in flight.
          (W?.status === bu || W?.status === _u) && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          w !== W?.requestId && (x[w] = W);
      });
    }
  }), X = {
    tags: {},
    keys: {}
  }, U = In({
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
        prepare: yu()
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
      }).addMatcher(An(tl(c), Uc(c)), (x, _) => {
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
    const _ = Ey(L.keys[x] ?? []);
    for (const M of _) {
      const w = M.type, W = M.id ?? "__internal_without_id", ae = L.tags[w]?.[W];
      ae && (L.tags[w][W] = Ey(ae).filter((D) => D !== x));
    }
    delete L.keys[x];
  }
  function k(L, x) {
    const _ = x.map((M) => {
      const w = hh(M, "providesTags", d, p), {
        queryCacheKey: W
      } = M.meta.arg;
      return {
        queryCacheKey: W,
        providedTags: w
      };
    });
    U.caseReducers.updateProvidedBy(L, U.actions.updateProvidedBy(_));
  }
  const b = In({
    name: `${u}/subscriptions`,
    initialState: rc,
    reducers: {
      updateSubscriptionOptions(L, x) {
      },
      unsubscribeQueryResult(L, x) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), z = In({
    name: `${u}/internalSubscriptions`,
    initialState: rc,
    reducers: {
      subscriptionsUpdated: {
        reducer(L, x) {
          return cy(L, x.payload);
        },
        prepare: yu()
      }
    }
  }), T = In({
    name: `${u}/config`,
    initialState: {
      online: Ag(),
      focused: Tg(),
      middlewareRegistered: !1,
      ...y
    },
    reducers: {
      middlewareRegistered(L, {
        payload: x
      }) {
        L.middlewareRegistered = L.middlewareRegistered === "conflict" || m !== x ? "conflict" : !0;
      }
    },
    extraReducers: (L) => {
      L.addCase(ws, (x) => {
        x.online = !0;
      }).addCase(rh, (x) => {
        x.online = !1;
      }).addCase(Hs, (x) => {
        x.focused = !0;
      }).addCase(fh, (x) => {
        x.focused = !1;
      }).addMatcher(O, (x) => ({
        ...x
      }));
    }
  }), A = Zy({
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
var kt = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), vh = {
  status: Mn
}, Ay = /* @__PURE__ */ Hu(vh, () => {
}), My = /* @__PURE__ */ Hu(vh, () => {
});
function Gg({
  serializeQueryArgs: u,
  reducerPath: c,
  createSelector: s
}) {
  const r = (b) => Ay, d = (b) => My;
  return {
    buildQuerySelector: C,
    buildInfiniteQuerySelector: G,
    buildMutationSelector: j,
    selectInvalidatedBy: X,
    selectCachedArgsForQuery: U,
    selectApiState: g,
    selectQueries: O,
    selectMutations: y,
    selectQueryEntry: p,
    selectConfig: q
  };
  function m(b) {
    return {
      ...b,
      ...hy(b.status)
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
  function y(b) {
    return g(b)?.mutations;
  }
  function q(b) {
    return g(b)?.config;
  }
  function S(b, z, T) {
    return (A) => {
      if (A === kt)
        return s(r, T);
      const R = u({
        queryArgs: A,
        endpointDefinition: z,
        endpointName: b
      });
      return s((L) => p(L, R) ?? Ay, T);
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
        ...hy(R.status)
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
      return typeof b == "object" ? z = Uu(b) ?? kt : z = b, s(z === kt ? d : (R) => g(R)?.mutations?.[z] ?? My, m);
    };
  }
  function X(b, z) {
    const T = b[c], A = /* @__PURE__ */ new Set(), R = Ts(z, Bs, dh);
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
    return Ts(Object.values(O(b)), (T) => T?.endpointName === z && T.status !== Mn, (T) => T.originalArgs);
  }
  function Y(b, z, T) {
    return z ? Cs(b, z, T) != null : !1;
  }
  function k(b, z, T) {
    return !z || !b.getPreviousPageParam ? !1 : yh(b, z, T) != null;
  }
}
var Cy = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Dy = ({
  endpointName: u,
  queryArgs: c
}) => {
  let s = "";
  const r = Cy?.get(c);
  if (typeof r == "string")
    s = r;
  else {
    const d = JSON.stringify(c, (m, g) => (g = typeof g == "bigint" ? {
      $bigint: g.toString()
    } : g, g = el(g) ? Object.keys(g).sort().reduce((O, p) => (O[p] = g[p], O), {}) : g, g));
    el(c) && Cy?.set(c, d), s = d;
  }
  return `${u}(${s})`;
};
function gh(...u) {
  return function(s) {
    const r = Ac((y) => s.extractRehydrationInfo?.(y, {
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
      serializeQueryArgs(y) {
        let q = Dy;
        if ("serializeQueryArgs" in y.endpointDefinition) {
          const S = y.endpointDefinition.serializeQueryArgs;
          q = (C) => {
            const G = S(C);
            return typeof G == "string" ? G : Dy({
              ...C,
              queryArgs: G
            });
          };
        } else s.serializeQueryArgs && (q = s.serializeQueryArgs);
        return q(y);
      },
      tagTypes: [...s.tagTypes || []]
    }, m = {
      endpointDefinitions: {},
      batch(y) {
        y();
      },
      apiUid: qs(),
      extractRehydrationInfo: r,
      hasRehydrationInfo: Ac((y) => r(y) != null)
    }, g = {
      injectEndpoints: p,
      enhanceEndpoints({
        addTagTypes: y,
        endpoints: q
      }) {
        if (y)
          for (const S of y)
            d.tagTypes.includes(S) || d.tagTypes.push(S);
        if (q)
          for (const [S, C] of Object.entries(q))
            typeof C == "function" ? C(pa(m, S)) : Object.assign(pa(m, S) || {}, C);
        return g;
      }
    }, O = u.map((y) => y.init(g, d, m));
    function p(y) {
      const q = y.endpoints({
        query: (S) => ({
          ...S,
          type: Yu
        }),
        mutation: (S) => ({
          ...S,
          type: sh
        }),
        infiniteQuery: (S) => ({
          ...S,
          type: oh
        })
      });
      for (const [S, C] of Object.entries(q)) {
        if (y.overrideExisting !== !0 && S in m.endpointDefinitions) {
          if (y.overrideExisting === "throw")
            throw new Error(Xt(39));
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
function _n(u, ...c) {
  return Object.assign(u, ...c);
}
var Vg = ({
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
  } = u.internalActions, y = (X, U) => {
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
      } = U, z = Mc(X, k.queryCacheKey, As);
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
        const T = Mc(X, b.queryCacheKey, As);
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
    const Y = y(s.currentSubscriptions, X);
    let k = !0;
    if (Y) {
      g || (g = setTimeout(() => {
        const T = j(s.currentSubscriptions), [, A] = th(m, () => T);
        U.next(u.internalActions.subscriptionsUpdated(A)), m = T, g = null;
      }, 500));
      const b = typeof X.type == "string" && !!X.type.startsWith(d), z = c.rejected.match(X) && X.meta.condition && !!X.meta.arg.subscribe;
      k = !b && !z;
    }
    return [k, !1];
  };
}, Xg = 2147483647 / 1e3 - 1, Zg = ({
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
    removeQueryResult: y,
    unsubscribeQueryResult: q,
    cacheEntriesUpserted: S
  } = c.internalActions, C = An(q.match, s.fulfilled, s.rejected, S.match);
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
    const V = pa(r, z)?.keepUnusedDataFor ?? A.keepUnusedDataFor;
    if (V === 1 / 0)
      return;
    const L = Math.max(0, Math.min(V, Xg));
    if (!G(b)) {
      const x = j[b];
      x && clearTimeout(x), j[b] = setTimeout(() => {
        if (!G(b)) {
          const _ = m(T.getState(), b);
          _?.endpointName && T.dispatch(O(_.endpointName, _.originalArgs))?.abort(), T.dispatch(y({
            queryCacheKey: b
          }));
        }
        delete j[b];
      }, L * 1e3);
    }
  }
  return U;
}, zy = new Error("Promise never resolved before cacheEntryRemoved."), Kg = ({
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
  const p = _s(r), y = _s(d), q = tl(r, d), S = {}, {
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
    return p(T) ? T.meta.arg.queryCacheKey : y(T) ? T.meta.arg.fixedCacheKey ?? T.meta.requestId : C.match(T) ? T.payload.queryCacheKey : G.match(T) ? Uu(T.payload) : "";
  }
  function z(T, A, R, V, L) {
    const x = pa(s, T), _ = x?.onCacheEntryAdded;
    if (!_) return;
    const M = {}, w = new Promise((te) => {
      M.cacheEntryRemoved = te;
    }), W = Promise.race([new Promise((te) => {
      M.valueResolved = te;
    }), w.then(() => {
      throw zy;
    })]);
    W.catch(() => {
    }), S[R] = M;
    const ae = u.endpoints[T].select(Cc(x) ? A : R), D = V.dispatch((te, ue, h) => h), F = {
      ...V,
      getCacheEntry: () => ae(V.getState()),
      requestId: L,
      extra: D,
      updateCachedData: Cc(x) ? (te) => V.dispatch(u.util.updateQueryData(T, A, te)) : void 0,
      cacheDataLoaded: W,
      cacheEntryRemoved: w
    }, I = _(A, F);
    Promise.resolve(I).catch((te) => {
      if (te !== zy)
        throw te;
    });
  }
  return k;
}, Jg = ({
  api: u,
  context: {
    apiUid: c
  },
  reducerPath: s
}) => (r, d) => {
  u.util.resetApiState.match(r) && d.dispatch(u.internalActions.middlewareRegistered(c));
}, kg = ({
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
    removeQueryResult: y
  } = m.internalActions, q = An(tl(r), Uc(r)), S = An(tl(d, r), ga(d, r));
  let C = [], G = 0;
  const j = (Y, k) => {
    (d.pending.match(Y) || r.pending.match(Y)) && G++, S(Y) && (G = Math.max(0, G - 1)), q(Y) ? U(hh(Y, "invalidatesTags", s, g), k) : S(Y) ? U([], k) : m.util.invalidateTags.match(Y) && U(Ys(Y.payload, void 0, void 0, void 0, void 0, g), k);
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
        const L = z.queries[V], x = Mc(p.currentSubscriptions, V, As);
        L && (x.size === 0 ? k.dispatch(y({
          queryCacheKey: V
        })) : L.status !== Mn && k.dispatch(O(L)));
      }
    });
  }
  return j;
}, Fg = ({
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
  const y = (U, Y) => {
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
    if (!b || b.status === Mn) return;
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
    if (!b || b.status === Mn)
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
  return y;
}, Wg = ({
  api: u,
  context: c,
  queryThunk: s,
  mutationThunk: r
}) => {
  const d = xs(s, r), m = ga(s, r), g = tl(s, r), O = {};
  return (y, q) => {
    if (d(y)) {
      const {
        requestId: S,
        arg: {
          endpointName: C,
          originalArgs: G
        }
      } = y.meta, j = pa(c, C), X = j?.onQueryStarted;
      if (X) {
        const U = {}, Y = new Promise((T, A) => {
          U.resolve = T, U.reject = A;
        });
        Y.catch(() => {
        }), O[S] = U;
        const k = u.endpoints[C].select(Cc(j) ? G : S), b = q.dispatch((T, A, R) => R), z = {
          ...q,
          getCacheEntry: () => k(q.getState()),
          requestId: S,
          extra: b,
          updateCachedData: Cc(j) ? (T) => q.dispatch(u.util.updateQueryData(C, G, T)) : void 0,
          queryFulfilled: Y
        };
        X(G, z);
      }
    } else if (g(y)) {
      const {
        requestId: S,
        baseQueryMeta: C
      } = y.meta;
      O[S]?.resolve({
        data: y.payload,
        meta: C
      }), delete O[S];
    } else if (m(y)) {
      const {
        requestId: S,
        rejectedWithValue: C,
        baseQueryMeta: G
      } = y.meta;
      O[S]?.reject({
        error: y.payload ?? y.error,
        isUnhandledError: !C,
        meta: G
      }), delete O[S];
    }
  };
}, $g = ({
  reducerPath: u,
  context: c,
  api: s,
  refetchQuery: r,
  internalState: d
}) => {
  const {
    removeQueryResult: m
  } = s.internalActions, g = (p, y) => {
    Hs.match(p) && O(y, "refetchOnFocus"), ws.match(p) && O(y, "refetchOnReconnect");
  };
  function O(p, y) {
    const q = p.getState()[u], S = q.queries, C = d.currentSubscriptions;
    c.batch(() => {
      for (const G of C.keys()) {
        const j = S[G], X = C.get(G);
        if (!X || !j) continue;
        const U = [...X.values()];
        (U.some((k) => k[y] === !0) || U.every((k) => k[y] === void 0) && q.config[y]) && (X.size === 0 ? p.dispatch(m({
          queryCacheKey: G
        })) : j.status !== Mn && p.dispatch(r(j)));
      }
    });
  }
  return g;
};
function Ig(u) {
  const {
    reducerPath: c,
    queryThunk: s,
    api: r,
    context: d,
    getInternalState: m
  } = u, {
    apiUid: g
  } = d, O = {
    invalidateTags: Ft(`${c}/invalidateTags`)
  }, p = (C) => C.type.startsWith(`${c}/`), y = [Jg, Zg, kg, Fg, Kg, Wg];
  return {
    middleware: (C) => {
      let G = !1;
      const j = m(C.dispatch), X = {
        ...u,
        internalState: j,
        refetchQuery: S,
        isThisApiSliceAction: p,
        mwApi: C
      }, U = y.map((b) => b(X)), Y = Vg(X), k = $g(X);
      return (b) => (z) => {
        if (!Ky(z))
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
var Oy = /* @__PURE__ */ Symbol(), ph = ({
  createSelector: u = js
} = {}) => ({
  name: Oy,
  init(c, {
    baseQuery: s,
    tagTypes: r,
    reducerPath: d,
    serializeQueryArgs: m,
    keepUnusedDataFor: g,
    refetchOnMountOrArgChange: O,
    refetchOnFocus: p,
    refetchOnReconnect: y,
    invalidationBehavior: q,
    onSchemaFailure: S,
    catchSchemaFailure: C,
    skipSchemaValidation: G
  }, j) {
    w1();
    const X = (ie) => ie;
    Object.assign(c, {
      reducerPath: d,
      endpoints: {},
      internalActions: {
        onOnline: ws,
        onOffline: rh,
        onFocus: Hs,
        onFocusLost: fh
      },
      util: {}
    });
    const U = Gg({
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
    _n(c.util, {
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
    } = Yg({
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
    } = Lg({
      context: j,
      queryThunk: A,
      mutationThunk: V,
      serializeQueryArgs: m,
      reducerPath: d,
      assertTagType: X,
      config: {
        refetchOnFocus: p,
        refetchOnReconnect: y,
        refetchOnMountOrArgChange: O,
        keepUnusedDataFor: g,
        reducerPath: d,
        invalidationBehavior: q
      }
    });
    _n(c.util, {
      patchQueryData: L,
      updateQueryData: x,
      upsertQueryData: _,
      prefetch: M,
      resetApiState: ae.resetApiState,
      upsertQueryEntries: ae.cacheEntriesUpserted
    }), _n(c.internalActions, ae);
    const D = /* @__PURE__ */ new WeakMap(), F = (ie) => Mc(D, ie, () => ({
      currentSubscriptions: /* @__PURE__ */ new Map(),
      currentPolls: /* @__PURE__ */ new Map(),
      runningQueries: /* @__PURE__ */ new Map(),
      runningMutations: /* @__PURE__ */ new Map()
    })), {
      buildInitiateQuery: I,
      buildInitiateInfiniteQuery: te,
      buildInitiateMutation: ue,
      getRunningMutationThunk: h,
      getRunningMutationsThunk: K,
      getRunningQueriesThunk: le,
      getRunningQueryThunk: ne
    } = wg({
      queryThunk: A,
      mutationThunk: V,
      infiniteQueryThunk: R,
      api: c,
      serializeQueryArgs: m,
      context: j,
      getInternalState: F
    });
    _n(c.util, {
      getRunningMutationThunk: h,
      getRunningMutationsThunk: K,
      getRunningQueryThunk: ne,
      getRunningQueriesThunk: le
    });
    const {
      middleware: ce,
      actions: se
    } = Ig({
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
    return _n(c.util, se), _n(c, {
      reducer: W,
      middleware: ce
    }), {
      name: Oy,
      injectEndpoint(ie, Se) {
        const de = c, pe = de.endpoints[ie] ??= {};
        xc(Se) && _n(pe, {
          name: ie,
          select: b(ie, Se),
          initiate: I(ie, Se)
        }, w(A, ie)), Qg(Se) && _n(pe, {
          name: ie,
          select: T(),
          initiate: ue(ie)
        }, w(V, ie)), qc(Se) && _n(pe, {
          name: ie,
          select: z(ie, Se),
          initiate: te(ie, Se)
        }, w(A, ie));
      }
    };
  }
});
ph();
function sc(u) {
  return u.replace(u[0], u[0].toUpperCase());
}
var Pg = "query", ep = "mutation", tp = "infinitequery";
function np(u) {
  return u.type === Pg;
}
function lp(u) {
  return u.type === ep;
}
function Sh(u) {
  return u.type === tp;
}
function vu(u, ...c) {
  return Object.assign(u, ...c);
}
var rs = /* @__PURE__ */ Symbol();
function ss(u) {
  const c = re.useRef(u), s = re.useMemo(() => Qs(c.current, u), [u]);
  return re.useEffect(() => {
    c.current !== s && (c.current = s);
  }, [s]), s;
}
function ya(u) {
  const c = re.useRef(u);
  return re.useEffect(() => {
    Eu(c.current, u) || (c.current = u);
  }, [u]), Eu(c.current, u) ? c.current : u;
}
var ap = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", up = /* @__PURE__ */ ap(), ip = () => typeof navigator < "u" && navigator.product === "ReactNative", cp = /* @__PURE__ */ ip(), fp = () => up || cp ? re.useLayoutEffect : re.useEffect, rp = /* @__PURE__ */ fp(), Ry = (u) => u.isUninitialized ? {
  ...u,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: u.data === void 0,
  // This is the one place where we still have to use `QueryStatus` as an enum,
  // since it's the only reference in the React package and not in the core.
  status: ih.pending
} : u;
function os(u, ...c) {
  const s = {};
  return c.forEach((r) => {
    s[r] = u[r];
  }), s;
}
var ds = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
function sp({
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
  const y = m ? (A) => A() : re.useEffect, q = (A) => A.current?.unsubscribe?.(), S = p.endpointDefinitions;
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
      V !== kt && O({
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
      V !== kt && O({
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
    const V = s(), L = ya(R);
    return re.useCallback((x, _) => V(u.util.prefetch(A, x, {
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
    } = u.endpoints[A], D = s(), F = re.useRef(void 0);
    if (!F.current) {
      const de = D(u.internalActions.internal_getRTKQSubscriptions());
      F.current = de;
    }
    const I = ss(_ ? kt : R), te = ya({
      refetchOnReconnect: V,
      refetchOnFocus: L,
      pollingInterval: M,
      skipPollingIfUnfocused: w
    }), ue = W.initialPageParam, h = ya(ue), K = W.refetchCachedPages, le = ya(K), ne = re.useRef(void 0);
    let {
      queryCacheKey: ce,
      requestId: se
    } = ne.current || {}, ie = !1;
    ce && se && (ie = F.current.isRequestSubscribed(ce, se));
    const Se = !ie && ne.current !== void 0;
    return y(() => {
      Se && (ne.current = void 0);
    }, [Se]), y(() => {
      const de = ne.current;
      if (I === kt) {
        de?.unsubscribe(), ne.current = void 0;
        return;
      }
      const pe = ne.current?.subscriptionOptions;
      if (!de || de.arg !== I) {
        de?.unsubscribe();
        const rt = D(ae(I, {
          subscriptionOptions: te,
          forceRefetch: x,
          ...Sh(S[A]) ? {
            initialPageParam: h,
            refetchCachedPages: le
          } : {}
        }));
        ne.current = rt;
      } else te !== pe && de.updateSubscriptionOptions(te);
    }, [D, ae, x, I, te, Se, h, le, A]), [ne, D, ae, te];
  }
  function U(A, R) {
    return (L, {
      skip: x = !1,
      selectFromResult: _
    } = {}) => {
      const {
        select: M
      } = u.endpoints[A], w = ss(x ? kt : L), W = re.useRef(void 0), ae = re.useMemo(() => (
        // Normally ts-ignores are bad and should be avoided, but we're
        // already casting this selector to be `Selector<any>` anyway,
        // so the inconsistencies don't matter here
        // @ts-ignore
        g([
          // @ts-ignore
          M(w),
          (ue, h) => h,
          (ue) => w
        ], R, {
          memoizeOptions: {
            resultEqualityCheck: Eu
          }
        })
      ), [M, w]), D = re.useMemo(() => _ ? g([ae], _, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : ae, [ae, _]), F = r((ue) => D(ue, W.current), Eu), I = d(), te = ae(I.getState(), W.current);
      return rp(() => {
        W.current = te;
      }, [te]), F;
    };
  }
  function Y(A) {
    re.useEffect(() => () => {
      q(A), A.current = void 0;
    }, [A]);
  }
  function k(A) {
    if (!A.current) throw new Error(Xt(38));
    return A.current.refetch();
  }
  function b(A) {
    const R = (x, _ = {}) => {
      const [M] = X(A, x, _);
      return Y(M), re.useMemo(() => ({
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
      } = u.endpoints[A], ae = s(), [D, F] = re.useState(rs), I = re.useRef(void 0), te = ya({
        refetchOnReconnect: x,
        refetchOnFocus: _,
        pollingInterval: M,
        skipPollingIfUnfocused: w
      });
      y(() => {
        const le = I.current?.subscriptionOptions;
        te !== le && I.current?.updateSubscriptionOptions(te);
      }, [te]);
      const ue = re.useRef(te);
      y(() => {
        ue.current = te;
      }, [te]);
      const h = re.useCallback(function(le, ne = !1) {
        let ce;
        return c(() => {
          q(I), I.current = ce = ae(W(le, {
            subscriptionOptions: ue.current,
            forceRefetch: !ne
          })), F(le);
        }), ce;
      }, [ae, W]), K = re.useCallback(() => {
        I.current?.queryCacheKey && ae(u.internalActions.removeQueryResult({
          queryCacheKey: I.current?.queryCacheKey
        }));
      }, [ae]);
      return re.useEffect(() => () => {
        q(I);
      }, []), re.useEffect(() => {
        D !== rs && !I.current && h(D, !0);
      }, [D, h]), re.useMemo(() => [h, D, {
        reset: K
      }], [h, D, K]);
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
          skip: M === rs
        }), ae = re.useMemo(() => ({
          lastArg: M
        }), [M]);
        return re.useMemo(() => [_, {
          ...W,
          reset: w
        }, ae], [_, W, w, ae]);
      },
      useQuery(x, _) {
        const M = R(x, _), w = L(x, {
          selectFromResult: x === kt || _?.skip ? void 0 : Ry,
          ..._
        }), W = os(w, ...ds);
        return re.useDebugValue(W), re.useMemo(() => ({
          ...w,
          ...M
        }), [w, M]);
      }
    };
  }
  function z(A) {
    const R = (L, x = {}) => {
      const [_, M, w, W] = X(A, L, x), ae = re.useRef(W);
      y(() => {
        ae.current = W;
      }, [W]);
      const D = x.refetchCachedPages, F = ya(D), I = re.useCallback(function(h, K) {
        let le;
        return c(() => {
          q(_), _.current = le = M(w(h, {
            subscriptionOptions: ae.current,
            direction: K
          }));
        }), le;
      }, [_, M, w]);
      Y(_);
      const te = ss(x.skip ? kt : L), ue = re.useCallback((h) => {
        if (!_.current) throw new Error(Xt(38));
        const K = {
          refetchCachedPages: h?.refetchCachedPages ?? F
        };
        return _.current.refetch(K);
      }, [_, F]);
      return re.useMemo(() => ({
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
          selectFromResult: L === kt || x?.skip ? void 0 : Ry,
          ...x
        }), ae = os(W, ...ds, "hasNextPage", "hasPreviousPage");
        return re.useDebugValue(ae), re.useMemo(() => ({
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
      } = u.endpoints[A], _ = s(), [M, w] = re.useState();
      re.useEffect(() => () => {
        M?.arg.fixedCacheKey || M?.reset();
      }, [M]);
      const W = re.useCallback(function(le) {
        const ne = _(x(le, {
          fixedCacheKey: V
        }));
        return w(ne), ne;
      }, [_, x, V]), {
        requestId: ae
      } = M || {}, D = re.useMemo(() => L({
        fixedCacheKey: V,
        requestId: M?.requestId
      }), [V, M, L]), F = re.useMemo(() => R ? g([D], R) : D, [R, D]), I = r(F, Eu), te = V == null ? M?.arg.originalArgs : void 0, ue = re.useCallback(() => {
        c(() => {
          M && w(void 0), V && _(u.internalActions.removeMutationResult({
            requestId: ae,
            fixedCacheKey: V
          }));
        });
      }, [_, V, M, ae]), h = os(I, ...ds, "endpointName");
      re.useDebugValue(h);
      const K = re.useMemo(() => ({
        ...I,
        originalArgs: te,
        reset: ue
      }), [I, te, ue]);
      return re.useMemo(() => [W, K], [W, K]);
    };
  }
}
var op = /* @__PURE__ */ Symbol(), dp = ({
  batch: u = p1,
  hooks: c = {
    useDispatch: Gy,
    useSelector: Vy,
    useStore: Ly
  },
  createSelector: s = js,
  unstable__sideEffectsInRender: r = !1,
  ...d
} = {}) => ({
  name: op,
  init(m, {
    serializeQueryArgs: g
  }, O) {
    const p = m, {
      buildQueryHooks: y,
      buildInfiniteQueryHooks: q,
      buildMutationHook: S,
      usePrefetch: C
    } = sp({
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
    return vu(p, {
      usePrefetch: C
    }), vu(O, {
      batch: u
    }), {
      injectEndpoint(G, j) {
        if (np(j)) {
          const {
            useQuery: X,
            useLazyQuery: U,
            useLazyQuerySubscription: Y,
            useQueryState: k,
            useQuerySubscription: b
          } = y(G);
          vu(p.endpoints[G], {
            useQuery: X,
            useLazyQuery: U,
            useLazyQuerySubscription: Y,
            useQueryState: k,
            useQuerySubscription: b
          }), m[`use${sc(G)}Query`] = X, m[`useLazy${sc(G)}Query`] = U;
        }
        if (lp(j)) {
          const X = S(G);
          vu(p.endpoints[G], {
            useMutation: X
          }), m[`use${sc(G)}Mutation`] = X;
        } else if (Sh(j)) {
          const {
            useInfiniteQuery: X,
            useInfiniteQuerySubscription: U,
            useInfiniteQueryState: Y
          } = q(G);
          vu(p.endpoints[G], {
            useInfiniteQuery: X,
            useInfiniteQuerySubscription: U,
            useInfiniteQueryState: Y
          }), m[`use${sc(G)}InfiniteQuery`] = X;
        }
      }
    };
  }
}), mp = /* @__PURE__ */ gh(ph(), dp());
let Qc = {
  apiUrl: "http://localhost:3000",
  apiToken: ""
};
const bh = (u) => {
  Qc = u;
}, yp = jg({
  baseUrl: "",
  prepareHeaders: (u) => (u.set("X-API-Token", Qc.apiToken), u)
}), hp = async (u, c, s) => {
  const r = typeof u == "string" ? u : u.url, d = `${Qc.apiUrl}${r}`, m = typeof u == "string" ? d : { ...u, url: d };
  return yp(m, c, s);
}, yc = mp({
  reducerPath: "bookingApi",
  baseQuery: hp,
  tagTypes: ["Slots", "Config"],
  endpoints: (u) => ({
    // Получить настройки клиента
    getClientConfig: u.query({
      query: () => `/public/config/${Qc.apiToken}`,
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
  useGetAvailableSlotsQuery: vp,
  useCreateBookingMutation: gp
} = yc, pp = {
  selectedDate: null,
  currentMonth: (/* @__PURE__ */ new Date()).toISOString()
}, _h = In({
  name: "calendar",
  initialState: pp,
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
}), { setSelectedDate: Sp, setCurrentMonth: rb, nextMonth: bp, previousMonth: _p } = _h.actions, Ep = _h.reducer, Ny = {
  currentStep: "calendar",
  selectedSlot: null,
  formData: {
    name: "",
    email: "",
    phone: "",
    description: ""
  },
  bookingResult: null
}, Eh = In({
  name: "booking",
  initialState: Ny,
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
      u.currentStep = "calendar", u.selectedSlot = null, u.formData = Ny.formData, u.bookingResult = null;
    }
  }
}), {
  setCurrentStep: Ds,
  setSelectedSlot: Uy,
  updateFormData: Tp,
  setBookingResult: Ap,
  resetBooking: Mp
} = Eh.actions, Cp = Eh.reducer, zs = ag({
  reducer: {
    [yc.reducerPath]: yc.reducer,
    calendar: Ep,
    booking: Cp
  },
  middleware: (u) => u().concat(yc.middleware)
});
var ms = { exports: {} }, gu = {};
var jy;
function Dp() {
  if (jy) return gu;
  jy = 1;
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
  return gu.Fragment = c, gu.jsx = s, gu.jsxs = s, gu;
}
var xy;
function zp() {
  return xy || (xy = 1, ms.exports = Dp()), ms.exports;
}
var P = zp();
const Bc = Gy.withTypes(), Sa = Vy.withTypes(), Op = "_calendar_nv465_1", Rp = "_header_nv465_7", Np = "_monthYear_nv465_14", Up = "_month_nv465_14", jp = "_year_nv465_27", xp = "_navigation_nv465_33", qp = "_navButton_nv465_38", Qp = "_weekDays_nv465_47", Bp = "_weekDay_nv465_47", Hp = "_daysGrid_nv465_63", wp = "_dayCell_nv465_70", Yp = "_selected_nv465_87", Lp = "_disabled_nv465_92", pt = {
  calendar: Op,
  header: Rp,
  monthYear: Np,
  month: Up,
  year: jp,
  navigation: xp,
  navButton: qp,
  weekDays: Qp,
  weekDay: Bp,
  daysGrid: Hp,
  dayCell: wp,
  selected: Yp,
  disabled: Lp
}, Gp = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2020C0%208.95431%208.95431%200%2020%200C31.0457%200%2040%208.95431%2040%2020C40%2031.0457%2031.0457%2040%2020%2040C8.95431%2040%200%2031.0457%200%2020Z'%20fill='%232C2C2E'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M22.495%2026.495C22.7684%2026.2216%2022.7684%2025.7784%2022.495%2025.505L16.99%2020L22.495%2014.495C22.7684%2014.2216%2022.7684%2013.7784%2022.495%2013.505C22.2217%2013.2317%2021.7784%2013.2317%2021.5051%2013.505L15.5051%2019.505C15.2317%2019.7784%2015.2317%2020.2216%2015.5051%2020.495L21.5051%2026.495C21.7784%2026.7684%2022.2217%2026.7684%2022.495%2026.495Z'%20fill='%23F2F2F2'/%3e%3c/svg%3e", Vp = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2020C0%208.95431%208.95431%200%2020%200C31.0457%200%2040%208.95431%2040%2020C40%2031.0457%2031.0457%2040%2020%2040C8.95431%2040%200%2031.0457%200%2020Z'%20fill='%232C2C2E'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.505%2013.505C17.2316%2013.7784%2017.2316%2014.2216%2017.505%2014.495L23.01%2020L17.505%2025.505C17.2316%2025.7784%2017.2316%2026.2216%2017.505%2026.495C17.7783%2026.7683%2018.2216%2026.7683%2018.4949%2026.495L24.4949%2020.495C24.7683%2020.2216%2024.7683%2019.7784%2024.4949%2019.505L18.4949%2013.505C18.2216%2013.2316%2017.7783%2013.2316%2017.505%2013.505Z'%20fill='%23F2F2F2'/%3e%3c/svg%3e", Xp = () => {
  const u = Bc(), { selectedDate: c, currentMonth: s } = Sa((S) => S.calendar), r = re.useMemo(() => {
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
    C.setHours(0, 0, 0, 0), S >= C && u(Sp(S.toISOString()));
  }, p = (S) => {
    if (!S || !c) return !1;
    const C = new Date(c);
    return S.getDate() === C.getDate() && S.getMonth() === C.getMonth() && S.getFullYear() === C.getFullYear();
  }, y = (S) => {
    if (!S) return !0;
    const C = /* @__PURE__ */ new Date();
    return C.setHours(0, 0, 0, 0), S < C;
  }, q = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  return /* @__PURE__ */ P.jsxs("div", { className: pt.calendar, children: [
    /* @__PURE__ */ P.jsxs("div", { className: pt.header, children: [
      /* @__PURE__ */ P.jsxs("div", { className: pt.monthYear, children: [
        /* @__PURE__ */ P.jsx("span", { className: pt.month, children: m }),
        /* @__PURE__ */ P.jsx("span", { className: pt.year, children: g })
      ] }),
      /* @__PURE__ */ P.jsxs("div", { className: pt.navigation, children: [
        /* @__PURE__ */ P.jsx(
          "div",
          {
            className: pt.navButton,
            onClick: () => u(_p()),
            children: /* @__PURE__ */ P.jsx("img", { src: Gp, alt: "←" })
          }
        ),
        /* @__PURE__ */ P.jsx(
          "div",
          {
            className: pt.navButton,
            onClick: () => u(bp()),
            children: /* @__PURE__ */ P.jsx("img", { src: Vp, alt: "→" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ P.jsx("div", { className: pt.weekDays, children: q.map((S) => /* @__PURE__ */ P.jsx("div", { className: pt.weekDay, children: S }, S)) }),
    /* @__PURE__ */ P.jsx("div", { className: pt.daysGrid, children: r.map((S, C) => /* @__PURE__ */ P.jsx(
      "button",
      {
        className: `${pt.dayCell} ${p(S) ? pt.selected : ""} ${y(S) ? pt.disabled : ""}`,
        onClick: () => S && O(S),
        disabled: y(S),
        children: S ? S.getDate() : ""
      },
      C
    )) })
  ] });
}, Zp = "_container_a70pb_1", Kp = "_title_a70pb_10", Jp = "_message_a70pb_18", kp = "_loading_a70pb_25", Fp = "_spinner_a70pb_30", Wp = "_error_a70pb_45", $p = "_slotsList_a70pb_52", Ip = "_slotButton_a70pb_61", Pp = "_selected_a70pb_78", eS = "_slotTime_a70pb_83", tS = "_continueButton_a70pb_103", $e = {
  container: Zp,
  title: Kp,
  message: Jp,
  loading: kp,
  spinner: Fp,
  error: Wp,
  slotsList: $p,
  slotButton: Ip,
  selected: Pp,
  slotTime: eS,
  continueButton: tS
}, nS = () => {
  const u = Bc(), { selectedDate: c } = Sa((C) => C.calendar), { selectedSlot: s } = Sa((C) => C.booking), r = re.useMemo(() => {
    if (!c) return null;
    const C = new Date(c), G = new Date(C);
    G.setHours(0, 0, 0, 0);
    const j = new Date(C);
    return j.setHours(23, 59, 59, 999), {
      startDate: G.toISOString(),
      endDate: j.toISOString(),
      workingHours: "9-18"
    };
  }, [c]), { data: d, isLoading: m, error: g } = vp(r, {
    skip: !r
  });
  re.useEffect(() => {
    u(Uy(null));
  }, [c, u]);
  const O = (C) => {
    u(Uy(C));
  }, p = () => {
    s && u(Ds("form"));
  }, y = (C) => s?.start === C.start && s?.end === C.end, q = (C) => new Date(C).toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit"
  });
  if (!c)
    return /* @__PURE__ */ P.jsxs("div", { className: $e.container, children: [
      /* @__PURE__ */ P.jsx("h3", { className: $e.title, children: "Доступное время" }),
      /* @__PURE__ */ P.jsx("p", { className: $e.message, children: "Выберите дату в календаре" })
    ] });
  if (m)
    return /* @__PURE__ */ P.jsxs("div", { className: $e.container, children: [
      /* @__PURE__ */ P.jsx("h3", { className: $e.title, children: "Доступное время" }),
      /* @__PURE__ */ P.jsxs("div", { className: $e.loading, children: [
        /* @__PURE__ */ P.jsx("div", { className: $e.spinner }),
        /* @__PURE__ */ P.jsx("p", { children: "Загрузка слотов..." })
      ] })
    ] });
  if (g)
    return /* @__PURE__ */ P.jsxs("div", { className: $e.container, children: [
      /* @__PURE__ */ P.jsx("h3", { className: $e.title, children: "Доступное время" }),
      /* @__PURE__ */ P.jsx("p", { className: $e.error, children: "Нет доступных слотов" })
    ] });
  const S = d?.data?.slots || [];
  return /* @__PURE__ */ P.jsxs("div", { className: $e.container, children: [
    /* @__PURE__ */ P.jsx("h3", { className: $e.title, children: "Доступное время" }),
    S.length === 0 ? /* @__PURE__ */ P.jsx("p", { className: $e.message, children: "Нет доступных слотов" }) : /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
      /* @__PURE__ */ P.jsx("div", { className: $e.slotsList, children: S.map((C, G) => /* @__PURE__ */ P.jsx(
        "button",
        {
          className: `${$e.slotButton} ${y(C) ? $e.selected : ""}`,
          onClick: () => O(C),
          children: /* @__PURE__ */ P.jsx("span", { className: $e.slotTime, children: q(C.start) })
        },
        G
      )) }),
      /* @__PURE__ */ P.jsx(
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
}, lS = "_card_nly0a_1", aS = "_photoContainer_nly0a_10", uS = "_photo_nly0a_10", iS = "_photoPlaceholder_nly0a_22", cS = "_initials_nly0a_32", fS = "_name_nly0a_38", rS = "_description_nly0a_45", sS = "_email_nly0a_52", oS = "_divider_nly0a_66", dS = "_info_nly0a_72", mS = "_infoItem_nly0a_77", yS = "_icon_nly0a_85", hS = "_infoText_nly0a_92", vS = "_meetInfo_nly0a_98", gS = "_meetSubject_nly0a_103", pS = "_meetDescription_nly0a_110", we = {
  card: lS,
  photoContainer: aS,
  photo: uS,
  photoPlaceholder: iS,
  initials: cS,
  name: fS,
  description: rS,
  email: sS,
  divider: oS,
  info: dS,
  infoItem: mS,
  icon: yS,
  infoText: hS,
  meetInfo: vS,
  meetSubject: gS,
  meetDescription: pS
}, SS = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21%2012C21%2016.9706%2016.9706%2021%2012%2021C7.02944%2021%203%2016.9706%203%2012C3%207.02944%207.02944%203%2012%203C16.9706%203%2021%207.02944%2021%2012ZM12%2019.875C16.3492%2019.875%2019.875%2016.3492%2019.875%2012C19.875%207.65076%2016.3492%204.125%2012%204.125C7.65076%204.125%204.125%207.65076%204.125%2012C4.125%2016.3492%207.65076%2019.875%2012%2019.875Z'%20fill='%232C2C2E'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12%206.9375C12.3107%206.9375%2012.5625%207.18934%2012.5625%207.5V12.5625H15.375C15.6857%2012.5625%2015.9375%2012.8143%2015.9375%2013.125C15.9375%2013.4357%2015.6857%2013.6875%2015.375%2013.6875H12.2812C11.8153%2013.6875%2011.4375%2013.3097%2011.4375%2012.8438V7.5C11.4375%207.18934%2011.6893%206.9375%2012%206.9375Z'%20fill='%232C2C2E'/%3e%3c/svg%3e", bS = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.24231%202.90907C11.3455%202.27106%2013.6049%202.38205%2015.6355%203.22315C17.6661%204.06424%2019.3422%205.58338%2020.3783%207.52173C21.4143%209.46009%2021.7463%2011.6977%2021.3175%2013.8534C20.8887%2016.009%2019.7257%2017.9493%2018.0268%2019.3436C16.3278%2020.7379%2014.1979%2021.5%2012%2021.5C11.7239%2021.5%2011.5%2021.2761%2011.5%2021C11.5%2020.7239%2011.7239%2020.5%2012%2020.5C13.9665%2020.5%2015.8722%2019.8181%2017.3924%2018.5706C18.9125%2017.323%2019.953%2015.587%2020.3367%2013.6583C20.7203%2011.7295%2020.4234%209.72745%2019.4963%207.99313C18.5693%206.25881%2017.0697%204.89958%2015.2528%204.14702C13.436%203.39447%2011.4144%203.29516%209.5326%203.86601C7.65075%204.43686%206.02506%205.64255%204.93252%207.27765C3.83998%208.91275%203.34819%2010.8761%203.54094%2012.8331C3.7337%2014.7902%204.59907%2016.6199%205.98961%2018.0104C6.18487%2018.2057%206.18487%2018.5222%205.98961%2018.7175C5.79434%2018.9128%205.47776%2018.9128%205.2825%2018.7175C3.72837%2017.1634%202.76119%2015.1185%202.54576%2012.9312C2.33033%2010.7439%202.87998%208.54955%204.10105%206.72208C5.32213%204.89462%207.13908%203.54708%209.24231%202.90907Z'%20fill='%232C2C2E'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16.3201%209.61589C16.108%209.43911%2015.7927%209.46777%2015.6159%209.67991L12.0179%2013.9975C11.6807%2014.4022%2011.4603%2014.6648%2011.273%2014.8352C11.0964%2014.9959%2011.0112%2015.0155%2010.9555%2015.0181C10.8998%2015.0206%2010.8131%2015.0087%2010.6227%2014.8647C10.4207%2014.712%2010.1775%2014.4703%209.80496%2014.0978L8.35357%2012.6464C8.15831%2012.4512%207.84172%2012.4512%207.64646%2012.6464C7.4512%2012.8417%207.4512%2013.1583%207.64646%2013.3536L9.12241%2014.8295C9.46344%2015.1706%209.75559%2015.4627%2010.0195%2015.6623C10.3013%2015.8754%2010.6159%2016.0345%2011.0008%2016.017C11.3856%2015.9996%2011.6846%2015.8126%2011.9459%2015.5749C12.1907%2015.3523%2012.4552%2015.0349%2012.7639%2014.6643L16.3841%2010.3201C16.5609%2010.108%2016.5322%209.79267%2016.3201%209.61589Z'%20fill='%232C2C2E'/%3e%3c/svg%3e", _S = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAfnSURBVHgB7Zt7bFPXHce/5z58nfgBNE6C46RxQ+mAZIFioChNq71pt8DUSWVb0dZt6rq10l6omzRpm7r/Nmmof2yaBOofLaq0StM0TRNjha0bjxSVAqUdU4OAAiVtAnmSxq97z72n5zi2Y1MSv5PcxB/JsWPfe33O17/f9zwvUKVKlSpVqlSpsjQhKB1xDZk/aDAIZ10dTMwTp08nvttKlokkX5dEqQKJ8yX+MMeeWn/M+4u3us1B1cB8wHhZJBaTnOTc4b8ZX3/457iCqR+upB+sFIGmxdn2YK+zcaJLe+YsNW8oCuYDNlUi/sTUDkLe/gdC679jnEGJSCiOtDgTPd0nFJN2RQyTEoL5ESdVoqknEjnLrM6voHfvk1BRfB0TFHNyWpwPd3SfINTcGqEm5T/c/IlzCw4FhL0H5x1N8naU6EOFCjSdVj3dvdDNrVGDcnGwYMRJQng0o/8Ga0eJFCJQdlpRsyuiL0hx0rDcKZ9qgYFQSM14L61LvpXLSqtU5Myr5+QBYQnrnvHj5MP81JlvvRAbMnepWsfg+Zf6Nt14/vUbqYPyqaBd0qoQRH1Y6MmQrD3acSF8KdLGqGVRGYF7dq09ywXyZx44G7ZLqzwQZbfaf9PdsuwnWyeM0UkujmnxcJNgMZhxw8c/d2QePBO2TKsciLLTDfu//EXv6roDN08PWESRpsSZgrCptEyn5kwRtNjSKj0c2vLXr+7x3LniQOTyuElkwuvIZs0iaYaLLba0Spjx5y89fQxE2h39YIJCInI+4wjlNhdaNGnFVIVHjY67d93nDuzuvDJ28voKXhchTt71yTxwcaWVIkEbjF8I7Hnknjt7mvpunhoAkSVuw4X1+DMPTuSo/mBjrzp+ocuilLqQp9IGsdBACVbLRKktxwxKRumGGaJD0FVlumXJBRU9xMk4Bns++bjLX//ixKmBvPxmpiKkr7v7sede/H1wc9dweJzXNimOqG/K02d4TYgq6dGLl61vP/1NasCPMhGOkPHt97MndmwjO+l4fueIIjm9Bp44toq+ZK36zCbXuBUXflMkWRFyoGadt87fBTNiFhSGXB+EB9pG/rcXx1Hm+bLVLdLGHU5pJ2btFPOOjYgaxQRxMGx9dSPeGHIra1aFYTJNKmVSJ0uIGhqmHsOEQeMoBIlfhtDJiniVoqImhzZcBALNSTGsq1h7cAsi/P/62ghPNSdKpaS5koWA8BvNZeDUqAf+f3bD5P2+5Q4jEVHlwNYC8SYp4Tf7LgWw+egW1LuicHKBLIayYc/+DRdAtEkOD8XjJ9dg/9UAmr2TPJpQdmwnUMKMVRMWL/m9/9qEcxNuNHvCFRFHYCuBUmY8ENPQfngz7yMzNNbGKiaOwDYelDBjt4HXhpeh5VAX7xWb8DooFw0VxR4CJc34ub5m3H88hEZ3FBo3Y1ZhcQQLPsU03qWHx8DOV9fhz/3+pBmXcTiTgwUvkMoQfvhwCP8eTJnx3IkjWPAC/Xg0ZGmxFahTxvg8RdFDqqJZ8B7U4KTeDaEWKDUaaJxOLXjNIQteIGYxy4jpaO1ogdfngR7V51QkW7RiorGKR3SsbGtEQ2sDf13YYLoUbCEQSf7RowaWr1yG5rWBRLrNQStvs8EqF8mIGaj11CLY2QqLT80wvqSFCmac/UbzRMwL83l3Pue8amMbf5Zh6mbFfMme0x1cC4tHjklNBNe3osZbA51HViVEsvV8EONjDYP7UvOaAFasXI54BVo4288oimgSrVpDsB5+3soJkcqJkv1dMmSZr+FLhfVYZUkSC5UUFcCiLIocUSGiRufdAG+9F6rTgWvvXCtbJGUJNBmPYOzDKG8pwigEIjmgs7DP/yXnAwytK1EuTHPIGXCHzFge2idbOK3WgbYNd+HdNy9b3KdEhogteEVnSpZAg6NDGH1/ACw+gUJgVGI1DTeDHXu+cDQ+4kPZ4C2VMRqBPhrV+apo7oVDLpIwbhE9d3UGTUNlYX4NDwzGFSZFjTuzTlJVFU6HA5alohCYrBCFL1pOXhyBMVnYufmQlziZ5eHmrTXUqtf3vfn9pm90rJdd2g/NcLwokexv0jMhPMgpB1/f/vKPapq0Xzt8HoVRq2CfXLwCQazEk8QW4P+GXng2fGH4Ic8nfIpFLfFe3qOURS1QBspbTx14ZfhM/9119/klllg4I3ntn14qAonUks997+Clt/dedLtX+0a4UUlk6v1ZWSoCCcSuCun67w5Fj2zeV+9qbzwjaYrChZoWiSU2KWZ1oJaSQIKU/yhHOv8YYiB/cvhqp0UiYMSR3UleagIJhECJlDv5yMuPEUX6gavtDkU0eopXE/fCvMI/S9/SdYtAczvfW2kkMusSiEg5tffT+/8wfOTqvUaUHjJHYr967XP7e5DRP8weizFb72T9GLy/mMuERaTI///Z4bP8eVvyvcQ+zdQBWYJINb5+ZlVkzDm3sMRkP7R6T18eR9+6JS6r+c9KMUdk7Leqr0WcY1+VhMNYzHQ2udlF1/G/oETfyBRIev/gd/ujV994xuFr484uepxzMS1eJqaLytzr6uXRo1cewLMoqNd8O25VV4w0jcav/f2zWmv385Yebk6M/HKVjQ9uHcuuoeWhn8KYCGBeSBgy/6MofSMn3nv0/C//cx7JezNQArcLv+mLtrc74HQW8AucxvwSEveGC+NNb4pHlSpVqlSpUqVKlaL4CM+wHUMyol4NAAAAAElFTkSuQmCC", ES = ({ specialist: u }) => {
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
  return /* @__PURE__ */ P.jsxs("div", { className: we.card, children: [
    /* @__PURE__ */ P.jsx("div", { className: we.photoContainer, children: s.photo ? /* @__PURE__ */ P.jsx("img", { src: s.photo, alt: s.name, className: we.photo }) : /* @__PURE__ */ P.jsx("div", { className: we.photoPlaceholder, children: /* @__PURE__ */ P.jsx("span", { className: we.initials, children: s.name.split(" ").map((d) => d[0]).join("").toUpperCase().slice(0, 2) }) }) }),
    /* @__PURE__ */ P.jsx("h2", { className: we.name, children: s.name }),
    s.description && /* @__PURE__ */ P.jsx("p", { className: we.description, children: s.description }),
    s.email && /* @__PURE__ */ P.jsx("a", { href: `mailto:${s.email}`, className: we.email, children: s.email }),
    (s.meetSubject || s.meetDescription) && /* @__PURE__ */ P.jsxs("div", { className: we.meetInfo, children: [
      s.meetSubject && /* @__PURE__ */ P.jsx("span", { className: we.meetSubject, children: s.meetSubject }),
      s.meetDescription && /* @__PURE__ */ P.jsx("span", { className: we.meetDescription, children: s.meetDescription })
    ] }),
    /* @__PURE__ */ P.jsx("div", { className: we.divider }),
    /* @__PURE__ */ P.jsxs("div", { className: we.info, children: [
      /* @__PURE__ */ P.jsxs("div", { className: we.infoItem, children: [
        /* @__PURE__ */ P.jsx("img", { src: SS, alt: "Clock", className: we.icon }),
        /* @__PURE__ */ P.jsx("span", { className: we.infoText, children: r.timeSlot })
      ] }),
      /* @__PURE__ */ P.jsxs("div", { className: we.infoItem, children: [
        /* @__PURE__ */ P.jsx("img", { src: bS, alt: "Check", className: we.icon }),
        /* @__PURE__ */ P.jsx("span", { className: we.infoText, children: r.confirmation })
      ] }),
      /* @__PURE__ */ P.jsxs("div", { className: we.infoItem, children: [
        /* @__PURE__ */ P.jsx("img", { src: _S, alt: "Google Meet", className: we.icon }),
        /* @__PURE__ */ P.jsx("span", { className: we.infoText, children: r.videoCall })
      ] })
    ] })
  ] });
}, TS = "_container_lvje3_1", AS = "_title_lvje3_8", MS = "_selectedSlot_lvje3_15", CS = "_slotIcon_lvje3_26", DS = "_slotText_lvje3_30", zS = "_error_lvje3_36", OS = "_form_lvje3_46", RS = "_formGroup_lvje3_52", NS = "_label_lvje3_57", US = "_input_lvje3_64", jS = "_textarea_lvje3_65", xS = "_buttons_lvje3_86", qS = "_backButton_lvje3_92", QS = "_submitButton_lvje3_93", Ye = {
  container: TS,
  title: AS,
  selectedSlot: MS,
  slotIcon: CS,
  slotText: DS,
  error: zS,
  form: OS,
  formGroup: RS,
  label: NS,
  input: US,
  textarea: jS,
  buttons: xS,
  backButton: qS,
  submitButton: QS
}, BS = () => {
  const u = Bc(), { selectedSlot: c, formData: s } = Sa((S) => S.booking), [r, { isLoading: d }] = gp(), [m, g] = re.useState(null), O = (S) => {
    const { name: C, value: G } = S.target;
    u(Tp({ [C]: G }));
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
        Ap({
          meetLink: C.data.booking.meetLink,
          startTime: C.data.booking.startTime,
          endTime: C.data.booking.endTime
        })
      ), u(Ds("success")));
    } catch (C) {
      g(C?.data?.error || "Ошибка при бронировании");
    }
  }, y = () => {
    u(Ds("calendar"));
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
  return /* @__PURE__ */ P.jsxs("div", { className: Ye.container, children: [
    /* @__PURE__ */ P.jsx("h2", { className: Ye.title, children: "Ваши контактные данные" }),
    /* @__PURE__ */ P.jsxs("div", { className: Ye.selectedSlot, children: [
      /* @__PURE__ */ P.jsx("span", { className: Ye.slotIcon, children: "📅" }),
      /* @__PURE__ */ P.jsx("span", { className: Ye.slotText, children: q() })
    ] }),
    m && /* @__PURE__ */ P.jsx("div", { className: Ye.error, children: m }),
    /* @__PURE__ */ P.jsxs("form", { onSubmit: p, className: Ye.form, children: [
      /* @__PURE__ */ P.jsxs("div", { className: Ye.formGroup, children: [
        /* @__PURE__ */ P.jsx("label", { htmlFor: "name", className: Ye.label, children: "Имя *" }),
        /* @__PURE__ */ P.jsx(
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
      /* @__PURE__ */ P.jsxs("div", { className: Ye.formGroup, children: [
        /* @__PURE__ */ P.jsx("label", { htmlFor: "email", className: Ye.label, children: "Email *" }),
        /* @__PURE__ */ P.jsx(
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
      /* @__PURE__ */ P.jsxs("div", { className: Ye.formGroup, children: [
        /* @__PURE__ */ P.jsx("label", { htmlFor: "phone", className: Ye.label, children: "Телефон *" }),
        /* @__PURE__ */ P.jsx(
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
      /* @__PURE__ */ P.jsxs("div", { className: Ye.formGroup, children: [
        /* @__PURE__ */ P.jsx("label", { htmlFor: "description", className: Ye.label, children: "Комментарий (необязательно)" }),
        /* @__PURE__ */ P.jsx(
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
      /* @__PURE__ */ P.jsxs("div", { className: Ye.buttons, children: [
        /* @__PURE__ */ P.jsx(
          "button",
          {
            type: "button",
            onClick: y,
            className: Ye.backButton,
            disabled: d,
            children: "← Назад"
          }
        ),
        /* @__PURE__ */ P.jsx(
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
}, HS = "_container_18fmv_1", wS = "_icon_18fmv_11", YS = "_title_18fmv_16", LS = "_subtitle_18fmv_23", GS = "_details_18fmv_29", VS = "_detailRow_18fmv_37", XS = "_detailLabel_18fmv_49", ZS = "_detailValue_18fmv_55", KS = "_meetLink_18fmv_61", JS = "_newBookingButton_18fmv_80", Le = {
  container: HS,
  icon: wS,
  title: YS,
  subtitle: LS,
  details: GS,
  detailRow: VS,
  detailLabel: XS,
  detailValue: ZS,
  meetLink: KS,
  newBookingButton: JS
}, kS = () => {
  const u = Bc(), { bookingResult: c, formData: s } = Sa((O) => O.booking), r = () => {
    u(Mp());
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
  return /* @__PURE__ */ P.jsxs("div", { className: Le.container, children: [
    /* @__PURE__ */ P.jsx("div", { className: Le.icon, children: "✅" }),
    /* @__PURE__ */ P.jsx("h2", { className: Le.title, children: "Встреча успешно забронирована!" }),
    /* @__PURE__ */ P.jsx("p", { className: Le.subtitle, children: "На ваш email отправлена ссылка на встречу" }),
    /* @__PURE__ */ P.jsxs("div", { className: Le.details, children: [
      /* @__PURE__ */ P.jsxs("div", { className: Le.detailRow, children: [
        /* @__PURE__ */ P.jsx("span", { className: Le.detailLabel, children: "📅 Дата:" }),
        /* @__PURE__ */ P.jsx("span", { className: Le.detailValue, children: m })
      ] }),
      /* @__PURE__ */ P.jsxs("div", { className: Le.detailRow, children: [
        /* @__PURE__ */ P.jsx("span", { className: Le.detailLabel, children: "🕐 Время:" }),
        /* @__PURE__ */ P.jsx("span", { className: Le.detailValue, children: g })
      ] }),
      /* @__PURE__ */ P.jsxs("div", { className: Le.detailRow, children: [
        /* @__PURE__ */ P.jsx("span", { className: Le.detailLabel, children: "👤 Имя:" }),
        /* @__PURE__ */ P.jsx("span", { className: Le.detailValue, children: s.name })
      ] }),
      /* @__PURE__ */ P.jsxs("div", { className: Le.detailRow, children: [
        /* @__PURE__ */ P.jsx("span", { className: Le.detailLabel, children: "📧 Email:" }),
        /* @__PURE__ */ P.jsx("span", { className: Le.detailValue, children: s.email })
      ] }),
      /* @__PURE__ */ P.jsxs("div", { className: Le.detailRow, children: [
        /* @__PURE__ */ P.jsx("span", { className: Le.detailLabel, children: "📞 Телефон:" }),
        /* @__PURE__ */ P.jsx("span", { className: Le.detailValue, children: s.phone })
      ] })
    ] }),
    /* @__PURE__ */ P.jsx(
      "a",
      {
        href: c.meetLink,
        target: "_blank",
        rel: "noopener noreferrer",
        className: Le.meetLink,
        children: "Открыть Google Meet"
      }
    ),
    /* @__PURE__ */ P.jsx("button", { onClick: r, className: Le.newBookingButton, children: "Забронировать еще одну встречу" })
  ] });
}, FS = "_widget_1pjbl_1", WS = "_content_1pjbl_8", $S = "_leftColumn_1pjbl_15", IS = "_centerColumn_1pjbl_23", PS = "_rightColumn_1pjbl_28", eb = "_formContent_1pjbl_37", tb = "_successContent_1pjbl_38", Tl = {
  widget: FS,
  content: WS,
  leftColumn: $S,
  centerColumn: IS,
  rightColumn: PS,
  formContent: eb,
  successContent: tb
}, Th = ({ specialist: u }) => {
  const { currentStep: c } = Sa((s) => s.booking);
  return re.useEffect(() => {
    (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0);
  }, []), /* @__PURE__ */ P.jsxs("div", { className: Tl.widget, children: [
    c === "calendar" && /* @__PURE__ */ P.jsxs("div", { className: Tl.content, children: [
      /* @__PURE__ */ P.jsx("div", { className: Tl.leftColumn, children: /* @__PURE__ */ P.jsx(ES, { specialist: u }) }),
      /* @__PURE__ */ P.jsx("div", { className: Tl.centerColumn, children: /* @__PURE__ */ P.jsx(Xp, {}) }),
      /* @__PURE__ */ P.jsx("div", { className: Tl.rightColumn, children: /* @__PURE__ */ P.jsx(nS, {}) })
    ] }),
    c === "form" && /* @__PURE__ */ P.jsx("div", { className: Tl.formContent, children: /* @__PURE__ */ P.jsx(BS, {}) }),
    c === "success" && /* @__PURE__ */ P.jsx("div", { className: Tl.successContent, children: /* @__PURE__ */ P.jsx(kS, {}) })
  ] });
}, nb = "_overlay_ov4rs_1", lb = "_modal_ov4rs_25", ab = "_closeButton_ov4rs_48", ub = "_content_ov4rs_74", oc = {
  overlay: nb,
  modal: lb,
  closeButton: ab,
  content: ub
}, qy = ({ isOpen: u, onClose: c, children: s }) => (re.useEffect(() => (u ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
  document.body.style.overflow = "";
}), [u]), re.useEffect(() => {
  const r = (d) => {
    d.key === "Escape" && u && c();
  };
  return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
}, [u, c]), u ? /* @__PURE__ */ P.jsx("div", { className: oc.overlay, onClick: c, children: /* @__PURE__ */ P.jsxs("div", { className: oc.modal, onClick: (r) => r.stopPropagation(), children: [
  /* @__PURE__ */ P.jsx(
    "button",
    {
      className: oc.closeButton,
      onClick: c,
      "aria-label": "Закрыть",
      children: "×"
    }
  ),
  /* @__PURE__ */ P.jsx("div", { className: oc.content, children: s })
] }) }) : null);
let pu = null, ha = null;
function ib(u, c) {
  const s = document.getElementById(u);
  if (!s) {
    console.error(`Element with id "${u}" not found`);
    return;
  }
  bh({
    apiUrl: c.apiUrl,
    apiToken: c.apiToken
  }), Ah(c), By.createRoot(s).render(
    Ot.createElement(
      Ot.StrictMode,
      null,
      Ot.createElement(
        ys,
        { store: zs, children: Ot.createElement(Th, { specialist: c.specialist }) }
      )
    )
  );
}
function cb(u) {
  return bh({
    apiUrl: u.apiUrl,
    apiToken: u.apiToken
  }), Ah(u), () => fb(u);
}
function fb(u) {
  ha || (ha = document.createElement("div"), ha.id = "google-meet-booking-modal", document.body.appendChild(ha), pu = By.createRoot(ha));
  const c = () => {
    pu && ha && pu.render(
      Ot.createElement(
        Ot.StrictMode,
        null,
        Ot.createElement(
          ys,
          {
            store: zs,
            children: Ot.createElement(qy, {
              isOpen: !1,
              onClose: () => {
              },
              children: null
            })
          }
        )
      )
    );
  };
  pu && pu.render(
    Ot.createElement(
      Ot.StrictMode,
      null,
      Ot.createElement(
        ys,
        {
          store: zs,
          children: Ot.createElement(qy, {
            isOpen: !0,
            onClose: c,
            children: Ot.createElement(Th, { specialist: u.specialist })
          })
        }
      )
    )
  );
}
function Ah(u) {
  u.theme?.primaryColor && document.documentElement.style.setProperty(
    "--primary-color",
    u.theme.primaryColor
  ), u.theme?.secondaryColor && document.documentElement.style.setProperty(
    "--secondary-color",
    u.theme.secondaryColor
  );
}
typeof window < "u" && (window.GoogleMeetBooking = {
  init: ib,
  initModal: cb
});
export {
  cb as initBookingModal,
  ib as initBookingWidget
};
