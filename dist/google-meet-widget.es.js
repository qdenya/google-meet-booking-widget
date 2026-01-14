function Q1(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var Ir = { exports: {} }, ye = {};
var G2;
function Fy() {
  if (G2) return ye;
  G2 = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), p = /* @__PURE__ */ Symbol.for("react.context"), D = /* @__PURE__ */ Symbol.for("react.forward_ref"), v = /* @__PURE__ */ Symbol.for("react.suspense"), m = /* @__PURE__ */ Symbol.for("react.memo"), j = /* @__PURE__ */ Symbol.for("react.lazy"), S = /* @__PURE__ */ Symbol.for("react.activity"), U = Symbol.iterator;
  function Q(y) {
    return y === null || typeof y != "object" ? null : (y = U && y[U] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var z = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, L = Object.assign, x = {};
  function G(y, K, le) {
    this.props = y, this.context = K, this.refs = x, this.updater = le || z;
  }
  G.prototype.isReactComponent = {}, G.prototype.setState = function(y, K) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, K, "setState");
  }, G.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function F() {
  }
  F.prototype = G.prototype;
  function b(y, K, le) {
    this.props = y, this.context = K, this.refs = x, this.updater = le || z;
  }
  var O = b.prototype = new F();
  O.constructor = b, L(O, G.prototype), O.isPureReactComponent = !0;
  var C = Array.isArray;
  function T() {
  }
  var R = { H: null, A: null, T: null, S: null }, X = Object.prototype.hasOwnProperty;
  function V(y, K, le) {
    var ne = le.ref;
    return {
      $$typeof: u,
      type: y,
      key: K,
      ref: ne !== void 0 ? ne : null,
      props: le
    };
  }
  function q(y, K) {
    return V(y.type, K, y.props);
  }
  function _(y) {
    return typeof y == "object" && y !== null && y.$$typeof === u;
  }
  function A(y) {
    var K = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(le) {
      return K[le];
    });
  }
  var Y = /\/+/g;
  function $(y, K) {
    return typeof y == "object" && y !== null && y.key != null ? A("" + y.key) : K.toString(36);
  }
  function ae(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(T, T) : (y.status = "pending", y.then(
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
  function M(y, K, le, ne, fe) {
    var se = typeof y;
    (se === "undefined" || se === "boolean") && (y = null);
    var ie = !1;
    if (y === null) ie = !0;
    else
      switch (se) {
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
            case j:
              return ie = y._init, M(
                ie(y._payload),
                K,
                le,
                ne,
                fe
              );
          }
      }
    if (ie)
      return fe = fe(y), ie = ne === "" ? "." + $(y, 0) : ne, C(fe) ? (le = "", ie != null && (le = ie.replace(Y, "$&/") + "/"), M(fe, K, le, "", function(pe) {
        return pe;
      })) : fe != null && (_(fe) && (fe = q(
        fe,
        le + (fe.key == null || y && y.key === fe.key ? "" : ("" + fe.key).replace(
          Y,
          "$&/"
        ) + "/") + ie
      )), K.push(fe)), 1;
    ie = 0;
    var Se = ne === "" ? "." : ne + ":";
    if (C(y))
      for (var de = 0; de < y.length; de++)
        ne = y[de], se = Se + $(ne, de), ie += M(
          ne,
          K,
          le,
          se,
          fe
        );
    else if (de = Q(y), typeof de == "function")
      for (y = de.call(y), de = 0; !(ne = y.next()).done; )
        ne = ne.value, se = Se + $(ne, de++), ie += M(
          ne,
          K,
          le,
          se,
          fe
        );
    else if (se === "object") {
      if (typeof y.then == "function")
        return M(
          ae(y),
          K,
          le,
          ne,
          fe
        );
      throw K = String(y), Error(
        "Objects are not valid as a React child (found: " + (K === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : K) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ie;
  }
  function W(y, K, le) {
    if (y == null) return y;
    var ne = [], fe = 0;
    return M(y, ne, "", "", function(se) {
      return K.call(le, se, fe++);
    }), ne;
  }
  function P(y) {
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
    map: W,
    forEach: function(y, K, le) {
      W(
        y,
        function() {
          K.apply(this, arguments);
        },
        le
      );
    },
    count: function(y) {
      var K = 0;
      return W(y, function() {
        K++;
      }), K;
    },
    toArray: function(y) {
      return W(y, function(K) {
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
  return ye.Activity = S, ye.Children = ue, ye.Component = G, ye.Fragment = s, ye.Profiler = d, ye.PureComponent = b, ye.StrictMode = r, ye.Suspense = v, ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = R, ye.__COMPILER_RUNTIME = {
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
    var ne = L({}, y.props), fe = y.key;
    if (K != null)
      for (se in K.key !== void 0 && (fe = "" + K.key), K)
        !X.call(K, se) || se === "key" || se === "__self" || se === "__source" || se === "ref" && K.ref === void 0 || (ne[se] = K[se]);
    var se = arguments.length - 2;
    if (se === 1) ne.children = le;
    else if (1 < se) {
      for (var ie = Array(se), Se = 0; Se < se; Se++)
        ie[Se] = arguments[Se + 2];
      ne.children = ie;
    }
    return V(y.type, fe, ne);
  }, ye.createContext = function(y) {
    return y = {
      $$typeof: p,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: h,
      _context: y
    }, y;
  }, ye.createElement = function(y, K, le) {
    var ne, fe = {}, se = null;
    if (K != null)
      for (ne in K.key !== void 0 && (se = "" + K.key), K)
        X.call(K, ne) && ne !== "key" && ne !== "__self" && ne !== "__source" && (fe[ne] = K[ne]);
    var ie = arguments.length - 2;
    if (ie === 1) fe.children = le;
    else if (1 < ie) {
      for (var Se = Array(ie), de = 0; de < ie; de++)
        Se[de] = arguments[de + 2];
      fe.children = Se;
    }
    if (y && y.defaultProps)
      for (ne in ie = y.defaultProps, ie)
        fe[ne] === void 0 && (fe[ne] = ie[ne]);
    return V(y, se, fe);
  }, ye.createRef = function() {
    return { current: null };
  }, ye.forwardRef = function(y) {
    return { $$typeof: D, render: y };
  }, ye.isValidElement = _, ye.lazy = function(y) {
    return {
      $$typeof: j,
      _payload: { _status: -1, _result: y },
      _init: P
    };
  }, ye.memo = function(y, K) {
    return {
      $$typeof: m,
      type: y,
      compare: K === void 0 ? null : K
    };
  }, ye.startTransition = function(y) {
    var K = R.T, le = {};
    R.T = le;
    try {
      var ne = y(), fe = R.S;
      fe !== null && fe(le, ne), typeof ne == "object" && ne !== null && typeof ne.then == "function" && ne.then(T, te);
    } catch (se) {
      te(se);
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
var V2;
function zc() {
  return V2 || (V2 = 1, Ir.exports = Fy()), Ir.exports;
}
var ce = zc();
const Ot = /* @__PURE__ */ Q1(ce);
var Pr = { exports: {} }, hu = {}, es = { exports: {} }, ts = {};
var X2;
function Wy() {
  return X2 || (X2 = 1, (function(u) {
    function c(M, W) {
      var P = M.length;
      M.push(W);
      e: for (; 0 < P; ) {
        var te = P - 1 >>> 1, ue = M[te];
        if (0 < d(ue, W))
          M[te] = W, M[P] = ue, P = te;
        else break e;
      }
    }
    function s(M) {
      return M.length === 0 ? null : M[0];
    }
    function r(M) {
      if (M.length === 0) return null;
      var W = M[0], P = M.pop();
      if (P !== W) {
        M[0] = P;
        e: for (var te = 0, ue = M.length, y = ue >>> 1; te < y; ) {
          var K = 2 * (te + 1) - 1, le = M[K], ne = K + 1, fe = M[ne];
          if (0 > d(le, P))
            ne < ue && 0 > d(fe, le) ? (M[te] = fe, M[ne] = P, te = ne) : (M[te] = le, M[K] = P, te = K);
          else if (ne < ue && 0 > d(fe, P))
            M[te] = fe, M[ne] = P, te = ne;
          else break e;
        }
      }
      return W;
    }
    function d(M, W) {
      var P = M.sortIndex - W.sortIndex;
      return P !== 0 ? P : M.id - W.id;
    }
    if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      u.unstable_now = function() {
        return h.now();
      };
    } else {
      var p = Date, D = p.now();
      u.unstable_now = function() {
        return p.now() - D;
      };
    }
    var v = [], m = [], j = 1, S = null, U = 3, Q = !1, z = !1, L = !1, x = !1, G = typeof setTimeout == "function" ? setTimeout : null, F = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
    function O(M) {
      for (var W = s(m); W !== null; ) {
        if (W.callback === null) r(m);
        else if (W.startTime <= M)
          r(m), W.sortIndex = W.expirationTime, c(v, W);
        else break;
        W = s(m);
      }
    }
    function C(M) {
      if (L = !1, O(M), !z)
        if (s(v) !== null)
          z = !0, T || (T = !0, A());
        else {
          var W = s(m);
          W !== null && ae(C, W.startTime - M);
        }
    }
    var T = !1, R = -1, X = 5, V = -1;
    function q() {
      return x ? !0 : !(u.unstable_now() - V < X);
    }
    function _() {
      if (x = !1, T) {
        var M = u.unstable_now();
        V = M;
        var W = !0;
        try {
          e: {
            z = !1, L && (L = !1, F(R), R = -1), Q = !0;
            var P = U;
            try {
              t: {
                for (O(M), S = s(v); S !== null && !(S.expirationTime > M && q()); ) {
                  var te = S.callback;
                  if (typeof te == "function") {
                    S.callback = null, U = S.priorityLevel;
                    var ue = te(
                      S.expirationTime <= M
                    );
                    if (M = u.unstable_now(), typeof ue == "function") {
                      S.callback = ue, O(M), W = !0;
                      break t;
                    }
                    S === s(v) && r(v), O(M);
                  } else r(v);
                  S = s(v);
                }
                if (S !== null) W = !0;
                else {
                  var y = s(m);
                  y !== null && ae(
                    C,
                    y.startTime - M
                  ), W = !1;
                }
              }
              break e;
            } finally {
              S = null, U = P, Q = !1;
            }
            W = void 0;
          }
        } finally {
          W ? A() : T = !1;
        }
      }
    }
    var A;
    if (typeof b == "function")
      A = function() {
        b(_);
      };
    else if (typeof MessageChannel < "u") {
      var Y = new MessageChannel(), $ = Y.port2;
      Y.port1.onmessage = _, A = function() {
        $.postMessage(null);
      };
    } else
      A = function() {
        G(_, 0);
      };
    function ae(M, W) {
      R = G(function() {
        M(u.unstable_now());
      }, W);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, u.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : X = 0 < M ? Math.floor(1e3 / M) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return U;
    }, u.unstable_next = function(M) {
      switch (U) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = U;
      }
      var P = U;
      U = W;
      try {
        return M();
      } finally {
        U = P;
      }
    }, u.unstable_requestPaint = function() {
      x = !0;
    }, u.unstable_runWithPriority = function(M, W) {
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
      var P = U;
      U = M;
      try {
        return W();
      } finally {
        U = P;
      }
    }, u.unstable_scheduleCallback = function(M, W, P) {
      var te = u.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? te + P : te) : P = te, M) {
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
      return ue = P + ue, M = {
        id: j++,
        callback: W,
        priorityLevel: M,
        startTime: P,
        expirationTime: ue,
        sortIndex: -1
      }, P > te ? (M.sortIndex = P, c(m, M), s(v) === null && M === s(m) && (L ? (F(R), R = -1) : L = !0, ae(C, P - te))) : (M.sortIndex = ue, c(v, M), z || Q || (z = !0, T || (T = !0, A()))), M;
    }, u.unstable_shouldYield = q, u.unstable_wrapCallback = function(M) {
      var W = U;
      return function() {
        var P = U;
        U = W;
        try {
          return M.apply(this, arguments);
        } finally {
          U = P;
        }
      };
    };
  })(ts)), ts;
}
var Z2;
function $y() {
  return Z2 || (Z2 = 1, es.exports = Wy()), es.exports;
}
var ns = { exports: {} }, ft = {};
var K2;
function Iy() {
  if (K2) return ft;
  K2 = 1;
  var u = zc();
  function c(v) {
    var m = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var j = 2; j < arguments.length; j++)
        m += "&args[]=" + encodeURIComponent(arguments[j]);
    }
    return "Minified React error #" + v + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function h(v, m, j) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: S == null ? null : "" + S,
      children: v,
      containerInfo: m,
      implementation: j
    };
  }
  var p = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function D(v, m) {
    if (v === "font") return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : "";
  }
  return ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, ft.createPortal = function(v, m) {
    var j = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(c(299));
    return h(v, m, null, j);
  }, ft.flushSync = function(v) {
    var m = p.T, j = r.p;
    try {
      if (p.T = null, r.p = 2, v) return v();
    } finally {
      p.T = m, r.p = j, r.d.f();
    }
  }, ft.preconnect = function(v, m) {
    typeof v == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, r.d.C(v, m));
  }, ft.prefetchDNS = function(v) {
    typeof v == "string" && r.d.D(v);
  }, ft.preinit = function(v, m) {
    if (typeof v == "string" && m && typeof m.as == "string") {
      var j = m.as, S = D(j, m.crossOrigin), U = typeof m.integrity == "string" ? m.integrity : void 0, Q = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      j === "style" ? r.d.S(
        v,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: S,
          integrity: U,
          fetchPriority: Q
        }
      ) : j === "script" && r.d.X(v, {
        crossOrigin: S,
        integrity: U,
        fetchPriority: Q,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, ft.preinitModule = function(v, m) {
    if (typeof v == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var j = D(
            m.as,
            m.crossOrigin
          );
          r.d.M(v, {
            crossOrigin: j,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0
          });
        }
      } else m == null && r.d.M(v);
  }, ft.preload = function(v, m) {
    if (typeof v == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var j = m.as, S = D(j, m.crossOrigin);
      r.d.L(v, j, {
        crossOrigin: S,
        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0,
        type: typeof m.type == "string" ? m.type : void 0,
        fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
        referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
        imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
        imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
        media: typeof m.media == "string" ? m.media : void 0
      });
    }
  }, ft.preloadModule = function(v, m) {
    if (typeof v == "string")
      if (m) {
        var j = D(m.as, m.crossOrigin);
        r.d.m(v, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: j,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0
        });
      } else r.d.m(v);
  }, ft.requestFormReset = function(v) {
    r.d.r(v);
  }, ft.unstable_batchedUpdates = function(v, m) {
    return v(m);
  }, ft.useFormState = function(v, m, j) {
    return p.H.useFormState(v, m, j);
  }, ft.useFormStatus = function() {
    return p.H.useHostTransitionStatus();
  }, ft.version = "19.2.3", ft;
}
var J2;
function Py() {
  if (J2) return ns.exports;
  J2 = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), ns.exports = Iy(), ns.exports;
}
var k2;
function ev() {
  if (k2) return hu;
  k2 = 1;
  var u = $y(), c = zc(), s = Py();
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
  function h(e) {
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
  function p(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function D(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function v(e) {
    if (h(e) !== e)
      throw Error(r(188));
  }
  function m(e) {
    var t = e.alternate;
    if (!t) {
      if (t = h(e), t === null) throw Error(r(188));
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
          if (i === n) return v(a), e;
          if (i === l) return v(a), t;
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
  function j(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = j(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var S = Object.assign, U = /* @__PURE__ */ Symbol.for("react.element"), Q = /* @__PURE__ */ Symbol.for("react.transitional.element"), z = /* @__PURE__ */ Symbol.for("react.portal"), L = /* @__PURE__ */ Symbol.for("react.fragment"), x = /* @__PURE__ */ Symbol.for("react.strict_mode"), G = /* @__PURE__ */ Symbol.for("react.profiler"), F = /* @__PURE__ */ Symbol.for("react.consumer"), b = /* @__PURE__ */ Symbol.for("react.context"), O = /* @__PURE__ */ Symbol.for("react.forward_ref"), C = /* @__PURE__ */ Symbol.for("react.suspense"), T = /* @__PURE__ */ Symbol.for("react.suspense_list"), R = /* @__PURE__ */ Symbol.for("react.memo"), X = /* @__PURE__ */ Symbol.for("react.lazy"), V = /* @__PURE__ */ Symbol.for("react.activity"), q = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), _ = Symbol.iterator;
  function A(e) {
    return e === null || typeof e != "object" ? null : (e = _ && e[_] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Y = /* @__PURE__ */ Symbol.for("react.client.reference");
  function $(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Y ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case L:
        return "Fragment";
      case G:
        return "Profiler";
      case x:
        return "StrictMode";
      case C:
        return "Suspense";
      case T:
        return "SuspenseList";
      case V:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case z:
          return "Portal";
        case b:
          return e.displayName || "Context";
        case F:
          return (e._context.displayName || "Context") + ".Consumer";
        case O:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case R:
          return t = e.displayName || null, t !== null ? t : $(e.type) || "Memo";
        case X:
          t = e._payload, e = e._init;
          try {
            return $(e(t));
          } catch {
          }
      }
    return null;
  }
  var ae = Array.isArray, M = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = {
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
  var ne = y(null), fe = y(null), se = y(null), ie = y(null);
  function Se(e, t) {
    switch (le(se, t), le(fe, e), le(ne, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? o2(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = o2(t), e = d2(t, e);
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
    K(ne), K(fe), K(se);
  }
  function pe(e) {
    e.memoizedState !== null && le(ie, e);
    var t = ne.current, n = d2(t, e.type);
    t !== n && (le(fe, e), le(ne, n));
  }
  function rt(e) {
    fe.current === e && (K(ne), K(fe)), ie.current === e && (K(ie), ru._currentValue = P);
  }
  var Pe, nn;
  function et(e) {
    if (Pe === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Pe = t && t[1] || "", nn = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Pe + e + nn;
  }
  var $t = !1;
  function xt(e, t) {
    if (!e || $t) return "";
    $t = !0;
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
                  var w = Z;
                }
                Reflect.construct(e, [], ee);
              } else {
                try {
                  ee.call();
                } catch (Z) {
                  w = Z;
                }
                e.call(ee.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Z) {
                w = Z;
              }
              (ee = e()) && typeof ee.catch == "function" && ee.catch(function() {
              });
            }
          } catch (Z) {
            if (Z && w && typeof Z.stack == "string")
              return [Z.stack, w.stack];
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
        var g = f.split(`
`), H = o.split(`
`);
        for (a = l = 0; l < g.length && !g[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; a < H.length && !H[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (l === g.length || a === H.length)
          for (l = g.length - 1, a = H.length - 1; 1 <= l && 0 <= a && g[l] !== H[a]; )
            a--;
        for (; 1 <= l && 0 <= a; l--, a--)
          if (g[l] !== H[a]) {
            if (l !== 1 || a !== 1)
              do
                if (l--, a--, 0 > a || g[l] !== H[a]) {
                  var k = `
` + g[l].replace(" at new ", " at ");
                  return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), k;
                }
              while (1 <= l && 0 <= a);
            break;
          }
      }
    } finally {
      $t = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? et(n) : "";
  }
  function Dn(e, t) {
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
        return xt(e.type, !1);
      case 11:
        return xt(e.type.render, !1);
      case 1:
        return xt(e.type, !0);
      case 31:
        return et("Activity");
      default:
        return "";
    }
  }
  function Ol(e) {
    try {
      var t = "", n = null;
      do
        t += Dn(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var ll = Object.prototype.hasOwnProperty, ba = u.unstable_scheduleCallback, Rl = u.unstable_cancelCallback, Qc = u.unstable_shouldYield, zh = u.unstable_requestPaint, St = u.unstable_now, Oh = u.unstable_getCurrentPriorityLevel, Gs = u.unstable_ImmediatePriority, Vs = u.unstable_UserBlockingPriority, Gu = u.unstable_NormalPriority, Rh = u.unstable_LowPriority, Xs = u.unstable_IdlePriority, Nh = u.log, Uh = u.unstable_setDisableYieldValue, _a = null, bt = null;
  function zn(e) {
    if (typeof Nh == "function" && Uh(e), bt && typeof bt.setStrictMode == "function")
      try {
        bt.setStrictMode(_a, e);
      } catch {
      }
  }
  var _t = Math.clz32 ? Math.clz32 : qh, xh = Math.log, jh = Math.LN2;
  function qh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (xh(e) / jh | 0) | 0;
  }
  var Vu = 256, Xu = 262144, Zu = 4194304;
  function al(e) {
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
  function Ku(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var a = 0, i = e.suspendedLanes, f = e.pingedLanes;
    e = e.warmLanes;
    var o = l & 134217727;
    return o !== 0 ? (l = o & ~i, l !== 0 ? a = al(l) : (f &= o, f !== 0 ? a = al(f) : n || (n = o & ~e, n !== 0 && (a = al(n))))) : (o = l & ~i, o !== 0 ? a = al(o) : f !== 0 ? a = al(f) : n || (n = l & ~e, n !== 0 && (a = al(n)))), a === 0 ? 0 : t !== 0 && t !== a && (t & i) === 0 && (i = a & -a, n = t & -t, i >= n || i === 32 && (n & 4194048) !== 0) ? t : a;
  }
  function Ea(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Bh(e, t) {
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
  function Zs() {
    var e = Zu;
    return Zu <<= 1, (Zu & 62914560) === 0 && (Zu = 4194304), e;
  }
  function wc(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ca(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Hh(e, t, n, l, a, i) {
    var f = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var o = e.entanglements, g = e.expirationTimes, H = e.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var k = 31 - _t(n), ee = 1 << k;
      o[k] = 0, g[k] = -1;
      var w = H[k];
      if (w !== null)
        for (H[k] = null, k = 0; k < w.length; k++) {
          var Z = w[k];
          Z !== null && (Z.lane &= -536870913);
        }
      n &= ~ee;
    }
    l !== 0 && Ks(e, l, 0), i !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(f & ~t));
  }
  function Ks(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - _t(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 261930;
  }
  function Js(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var l = 31 - _t(n), a = 1 << l;
      a & t | e[l] & t && (e[l] |= t), n &= ~a;
    }
  }
  function ks(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Lc(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Lc(e) {
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
  function Yc(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Fs() {
    var e = W.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : q2(e.type));
  }
  function Ws(e, t) {
    var n = W.p;
    try {
      return W.p = e, t();
    } finally {
      W.p = n;
    }
  }
  var On = Math.random().toString(36).slice(2), tt = "__reactFiber$" + On, ot = "__reactProps$" + On, Nl = "__reactContainer$" + On, Gc = "__reactEvents$" + On, Qh = "__reactListeners$" + On, wh = "__reactHandles$" + On, $s = "__reactResources$" + On, Ta = "__reactMarker$" + On;
  function Vc(e) {
    delete e[tt], delete e[ot], delete e[Gc], delete e[Qh], delete e[wh];
  }
  function Ul(e) {
    var t = e[tt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Nl] || n[tt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = S2(e); e !== null; ) {
            if (n = e[tt]) return n;
            e = S2(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function xl(e) {
    if (e = e[tt] || e[Nl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Aa(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function jl(e) {
    var t = e[$s];
    return t || (t = e[$s] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Fe(e) {
    e[Ta] = !0;
  }
  var Is = /* @__PURE__ */ new Set(), Ps = {};
  function ul(e, t) {
    ql(e, t), ql(e + "Capture", t);
  }
  function ql(e, t) {
    for (Ps[e] = t, e = 0; e < t.length; e++)
      Is.add(t[e]);
  }
  var Lh = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), eo = {}, to = {};
  function Yh(e) {
    return ll.call(to, e) ? !0 : ll.call(eo, e) ? !1 : Lh.test(e) ? to[e] = !0 : (eo[e] = !0, !1);
  }
  function Ju(e, t, n) {
    if (Yh(t))
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
  function ku(e, t, n) {
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
  function ln(e, t, n, l) {
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
  function no(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Gh(e, t, n) {
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
      var t = no(e) ? "checked" : "value";
      e._valueTracker = Gh(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function lo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), l = "";
    return e && (l = no(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Fu(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Vh = /[\n"\\]/g;
  function qt(e) {
    return e.replace(
      Vh,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Zc(e, t, n, l, a, i, f, o) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + jt(t)) : e.value !== "" + jt(t) && (e.value = "" + jt(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? Kc(e, f, jt(t)) : n != null ? Kc(e, f, jt(n)) : l != null && e.removeAttribute("value"), a == null && i != null && (e.defaultChecked = !!i), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.name = "" + jt(o) : e.removeAttribute("name");
  }
  function ao(e, t, n, l, a, i, f, o) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || n != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        Xc(e);
        return;
      }
      n = n != null ? "" + jt(n) : "", t = t != null ? "" + jt(t) : n, o || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? a, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = o ? e.checked : !!l, e.defaultChecked = !!l, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), Xc(e);
  }
  function Kc(e, t, n) {
    t === "number" && Fu(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Bl(e, t, n, l) {
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
  function uo(e, t, n) {
    if (t != null && (t = "" + jt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + jt(n) : "";
  }
  function io(e, t, n, l) {
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
    n = jt(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l), Xc(e);
  }
  function Hl(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Xh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function co(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Xh.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function fo(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (e = e.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var a in t)
        l = t[a], t.hasOwnProperty(a) && n[a] !== l && co(e, a, l);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && co(e, i, t[i]);
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
  var Zh = /* @__PURE__ */ new Map([
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
  ]), Kh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Wu(e) {
    return Kh.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function an() {
  }
  var kc = null;
  function Fc(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ql = null, wl = null;
  function ro(e) {
    var t = xl(e);
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
              l = n[t], l.form === e.form && lo(l);
          }
          break e;
        case "textarea":
          uo(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Bl(e, !!n.multiple, t, !1);
      }
    }
  }
  var Wc = !1;
  function so(e, t, n) {
    if (Wc) return e(t, n);
    Wc = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Wc = !1, (Ql !== null || wl !== null) && (Hi(), Ql && (t = Ql, e = wl, wl = Ql = null, ro(t), e)))
        for (t = 0; t < e.length; t++) ro(e[t]);
    }
  }
  function Ma(e, t) {
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
  var un = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), $c = !1;
  if (un)
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
  var Rn = null, Ic = null, $u = null;
  function oo() {
    if ($u) return $u;
    var e, t = Ic, n = t.length, l, a = "value" in Rn ? Rn.value : Rn.textContent, i = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var f = n - e;
    for (l = 1; l <= f && t[n - l] === a[i - l]; l++) ;
    return $u = a.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Iu(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Pu() {
    return !0;
  }
  function ho() {
    return !1;
  }
  function dt(e) {
    function t(n, l, a, i, f) {
      this._reactName = n, this._targetInst = a, this.type = l, this.nativeEvent = i, this.target = f, this.currentTarget = null;
      for (var o in e)
        e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(i) : i[o]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Pu : ho, this.isPropagationStopped = ho, this;
    }
    return S(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Pu);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Pu);
      },
      persist: function() {
      },
      isPersistent: Pu
    }), t;
  }
  var il = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ei = dt(il), za = S({}, il, { view: 0, detail: 0 }), Jh = dt(za), Pc, ef, Oa, ti = S({}, za, {
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
  }), mo = dt(ti), kh = S({}, ti, { dataTransfer: 0 }), Fh = dt(kh), Wh = S({}, za, { relatedTarget: 0 }), tf = dt(Wh), $h = S({}, il, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ih = dt($h), Ph = S({}, il, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), em = dt(Ph), tm = S({}, il, { data: 0 }), yo = dt(tm), nm = {
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
  }, lm = {
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
  }, am = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function um(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = am[e]) ? !!t[e] : !1;
  }
  function nf() {
    return um;
  }
  var im = S({}, za, {
    key: function(e) {
      if (e.key) {
        var t = nm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Iu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? lm[e.keyCode] || "Unidentified" : "";
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
      return e.type === "keypress" ? Iu(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Iu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), cm = dt(im), fm = S({}, ti, {
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
  }), vo = dt(fm), rm = S({}, za, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nf
  }), sm = dt(rm), om = S({}, il, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), dm = dt(om), hm = S({}, ti, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), mm = dt(hm), ym = S({}, il, {
    newState: 0,
    oldState: 0
  }), vm = dt(ym), gm = [9, 13, 27, 32], lf = un && "CompositionEvent" in window, Ra = null;
  un && "documentMode" in document && (Ra = document.documentMode);
  var pm = un && "TextEvent" in window && !Ra, go = un && (!lf || Ra && 8 < Ra && 11 >= Ra), po = " ", So = !1;
  function bo(e, t) {
    switch (e) {
      case "keyup":
        return gm.indexOf(t.keyCode) !== -1;
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
  function _o(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ll = !1;
  function Sm(e, t) {
    switch (e) {
      case "compositionend":
        return _o(t);
      case "keypress":
        return t.which !== 32 ? null : (So = !0, po);
      case "textInput":
        return e = t.data, e === po && So ? null : e;
      default:
        return null;
    }
  }
  function bm(e, t) {
    if (Ll)
      return e === "compositionend" || !lf && bo(e, t) ? (e = oo(), $u = Ic = Rn = null, Ll = !1, e) : null;
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
        return go && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var _m = {
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
  function Eo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!_m[e.type] : t === "textarea";
  }
  function Co(e, t, n, l) {
    Ql ? wl ? wl.push(l) : wl = [l] : Ql = l, t = Xi(t, "onChange"), 0 < t.length && (n = new ei(
      "onChange",
      "change",
      null,
      n,
      l
    ), e.push({ event: n, listeners: t }));
  }
  var Na = null, Ua = null;
  function Em(e) {
    u2(e, 0);
  }
  function ni(e) {
    var t = Aa(e);
    if (lo(t)) return e;
  }
  function To(e, t) {
    if (e === "change") return t;
  }
  var Ao = !1;
  if (un) {
    var af;
    if (un) {
      var uf = "oninput" in document;
      if (!uf) {
        var Mo = document.createElement("div");
        Mo.setAttribute("oninput", "return;"), uf = typeof Mo.oninput == "function";
      }
      af = uf;
    } else af = !1;
    Ao = af && (!document.documentMode || 9 < document.documentMode);
  }
  function Do() {
    Na && (Na.detachEvent("onpropertychange", zo), Ua = Na = null);
  }
  function zo(e) {
    if (e.propertyName === "value" && ni(Ua)) {
      var t = [];
      Co(
        t,
        Ua,
        e,
        Fc(e)
      ), so(Em, t);
    }
  }
  function Cm(e, t, n) {
    e === "focusin" ? (Do(), Na = t, Ua = n, Na.attachEvent("onpropertychange", zo)) : e === "focusout" && Do();
  }
  function Tm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ni(Ua);
  }
  function Am(e, t) {
    if (e === "click") return ni(t);
  }
  function Mm(e, t) {
    if (e === "input" || e === "change")
      return ni(t);
  }
  function Dm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Et = typeof Object.is == "function" ? Object.is : Dm;
  function xa(e, t) {
    if (Et(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var a = n[l];
      if (!ll.call(t, a) || !Et(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  function Oo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ro(e, t) {
    var n = Oo(e);
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
      n = Oo(n);
    }
  }
  function No(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? No(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Uo(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Fu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Fu(e.document);
    }
    return t;
  }
  function cf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var zm = un && "documentMode" in document && 11 >= document.documentMode, Yl = null, ff = null, ja = null, rf = !1;
  function xo(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    rf || Yl == null || Yl !== Fu(l) || (l = Yl, "selectionStart" in l && cf(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), ja && xa(ja, l) || (ja = l, l = Xi(ff, "onSelect"), 0 < l.length && (t = new ei(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: l }), t.target = Yl)));
  }
  function cl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Gl = {
    animationend: cl("Animation", "AnimationEnd"),
    animationiteration: cl("Animation", "AnimationIteration"),
    animationstart: cl("Animation", "AnimationStart"),
    transitionrun: cl("Transition", "TransitionRun"),
    transitionstart: cl("Transition", "TransitionStart"),
    transitioncancel: cl("Transition", "TransitionCancel"),
    transitionend: cl("Transition", "TransitionEnd")
  }, sf = {}, jo = {};
  un && (jo = document.createElement("div").style, "AnimationEvent" in window || (delete Gl.animationend.animation, delete Gl.animationiteration.animation, delete Gl.animationstart.animation), "TransitionEvent" in window || delete Gl.transitionend.transition);
  function fl(e) {
    if (sf[e]) return sf[e];
    if (!Gl[e]) return e;
    var t = Gl[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in jo)
        return sf[e] = t[n];
    return e;
  }
  var qo = fl("animationend"), Bo = fl("animationiteration"), Ho = fl("animationstart"), Om = fl("transitionrun"), Rm = fl("transitionstart"), Nm = fl("transitioncancel"), Qo = fl("transitionend"), wo = /* @__PURE__ */ new Map(), of = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  of.push("scrollEnd");
  function Kt(e, t) {
    wo.set(e, t), ul(t, [e]);
  }
  var li = typeof reportError == "function" ? reportError : function(e) {
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
  }, Bt = [], Vl = 0, df = 0;
  function ai() {
    for (var e = Vl, t = df = Vl = 0; t < e; ) {
      var n = Bt[t];
      Bt[t++] = null;
      var l = Bt[t];
      Bt[t++] = null;
      var a = Bt[t];
      Bt[t++] = null;
      var i = Bt[t];
      if (Bt[t++] = null, l !== null && a !== null) {
        var f = l.pending;
        f === null ? a.next = a : (a.next = f.next, f.next = a), l.pending = a;
      }
      i !== 0 && Lo(n, a, i);
    }
  }
  function ui(e, t, n, l) {
    Bt[Vl++] = e, Bt[Vl++] = t, Bt[Vl++] = n, Bt[Vl++] = l, df |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function hf(e, t, n, l) {
    return ui(e, t, n, l), ii(e);
  }
  function rl(e, t) {
    return ui(e, null, null, t), ii(e);
  }
  function Lo(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var a = !1, i = e.return; i !== null; )
      i.childLanes |= n, l = i.alternate, l !== null && (l.childLanes |= n), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (a = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, a && t !== null && (a = 31 - _t(n), e = i.hiddenUpdates, l = e[a], l === null ? e[a] = [t] : l.push(t), t.lane = n | 536870912), i) : null;
  }
  function ii(e) {
    if (50 < nu)
      throw nu = 0, Er = null, Error(r(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Xl = {};
  function Um(e, t, n, l) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ct(e, t, n, l) {
    return new Um(e, t, n, l);
  }
  function mf(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function cn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ct(
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
  function ci(e, t, n, l, a, i) {
    var f = 0;
    if (l = e, typeof e == "function") mf(e) && (f = 1);
    else if (typeof e == "string")
      f = Hy(
        e,
        n,
        ne.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case V:
          return e = Ct(31, n, t, a), e.elementType = V, e.lanes = i, e;
        case L:
          return sl(n.children, a, i, t);
        case x:
          f = 8, a |= 24;
          break;
        case G:
          return e = Ct(12, n, t, a | 2), e.elementType = G, e.lanes = i, e;
        case C:
          return e = Ct(13, n, t, a), e.elementType = C, e.lanes = i, e;
        case T:
          return e = Ct(19, n, t, a), e.elementType = T, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case b:
                f = 10;
                break e;
              case F:
                f = 9;
                break e;
              case O:
                f = 11;
                break e;
              case R:
                f = 14;
                break e;
              case X:
                f = 16, l = null;
                break e;
            }
          f = 29, n = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = Ct(f, n, t, a), t.elementType = e, t.type = l, t.lanes = i, t;
  }
  function sl(e, t, n, l) {
    return e = Ct(7, e, l, t), e.lanes = n, e;
  }
  function yf(e, t, n) {
    return e = Ct(6, e, null, t), e.lanes = n, e;
  }
  function Go(e) {
    var t = Ct(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function vf(e, t, n) {
    return t = Ct(
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
  var Vo = /* @__PURE__ */ new WeakMap();
  function Ht(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Vo.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: Ol(t)
      }, Vo.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Ol(t)
    };
  }
  var Zl = [], Kl = 0, fi = null, qa = 0, Qt = [], wt = 0, Nn = null, It = 1, Pt = "";
  function fn(e, t) {
    Zl[Kl++] = qa, Zl[Kl++] = fi, fi = e, qa = t;
  }
  function Xo(e, t, n) {
    Qt[wt++] = It, Qt[wt++] = Pt, Qt[wt++] = Nn, Nn = e;
    var l = It;
    e = Pt;
    var a = 32 - _t(l) - 1;
    l &= ~(1 << a), n += 1;
    var i = 32 - _t(t) + a;
    if (30 < i) {
      var f = a - a % 5;
      i = (l & (1 << f) - 1).toString(32), l >>= f, a -= f, It = 1 << 32 - _t(t) + a | n << a | l, Pt = i + e;
    } else
      It = 1 << i | n << a | l, Pt = e;
  }
  function gf(e) {
    e.return !== null && (fn(e, 1), Xo(e, 1, 0));
  }
  function pf(e) {
    for (; e === fi; )
      fi = Zl[--Kl], Zl[Kl] = null, qa = Zl[--Kl], Zl[Kl] = null;
    for (; e === Nn; )
      Nn = Qt[--wt], Qt[wt] = null, Pt = Qt[--wt], Qt[wt] = null, It = Qt[--wt], Qt[wt] = null;
  }
  function Zo(e, t) {
    Qt[wt++] = It, Qt[wt++] = Pt, Qt[wt++] = Nn, It = t.id, Pt = t.overflow, Nn = e;
  }
  var nt = null, je = null, Te = !1, Un = null, Lt = !1, Sf = Error(r(519));
  function xn(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ba(Ht(t, e)), Sf;
  }
  function Ko(e) {
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
        _e("invalid", t), ao(
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
        _e("invalid", t), io(t, l.value, l.defaultValue, l.children);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || r2(t.textContent, n) ? (l.popover != null && (_e("beforetoggle", t), _e("toggle", t)), l.onScroll != null && _e("scroll", t), l.onScrollEnd != null && _e("scrollend", t), l.onClick != null && (t.onclick = an), t = !0) : t = !1, t || xn(e, !0);
  }
  function Jo(e) {
    for (nt = e.return; nt; )
      switch (nt.tag) {
        case 5:
        case 31:
        case 13:
          Lt = !1;
          return;
        case 27:
        case 3:
          Lt = !0;
          return;
        default:
          nt = nt.return;
      }
  }
  function Jl(e) {
    if (e !== nt) return !1;
    if (!Te) return Jo(e), Te = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Hr(e.type, e.memoizedProps)), n = !n), n && je && xn(e), Jo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      je = p2(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      je = p2(e);
    } else
      t === 27 ? (t = je, Jn(e.type) ? (e = Gr, Gr = null, je = e) : je = t) : je = nt ? Gt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ol() {
    je = nt = null, Te = !1;
  }
  function bf() {
    var e = Un;
    return e !== null && (vt === null ? vt = e : vt.push.apply(
      vt,
      e
    ), Un = null), e;
  }
  function Ba(e) {
    Un === null ? Un = [e] : Un.push(e);
  }
  var _f = y(null), dl = null, rn = null;
  function jn(e, t, n) {
    le(_f, t._currentValue), t._currentValue = n;
  }
  function sn(e) {
    e._currentValue = _f.current, K(_f);
  }
  function Ef(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Cf(e, t, n, l) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var i = a.dependencies;
      if (i !== null) {
        var f = a.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var o = i;
          i = a;
          for (var g = 0; g < t.length; g++)
            if (o.context === t[g]) {
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
  function kl(e, t, n, l) {
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
    e !== null && Cf(
      t,
      e,
      n,
      l
    ), t.flags |= 262144;
  }
  function ri(e) {
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
  function hl(e) {
    dl = e, rn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function lt(e) {
    return ko(dl, e);
  }
  function si(e, t) {
    return dl === null && hl(e), ko(e, t);
  }
  function ko(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, rn === null) {
      if (e === null) throw Error(r(308));
      rn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else rn = rn.next = t;
    return n;
  }
  var xm = typeof AbortController < "u" ? AbortController : function() {
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
  }, jm = u.unstable_scheduleCallback, qm = u.unstable_NormalPriority, Xe = {
    $$typeof: b,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Tf() {
    return {
      controller: new xm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ha(e) {
    e.refCount--, e.refCount === 0 && jm(qm, function() {
      e.controller.abort();
    });
  }
  var Qa = null, Af = 0, Fl = 0, Wl = null;
  function Bm(e, t) {
    if (Qa === null) {
      var n = Qa = [];
      Af = 0, Fl = zr(), Wl = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return Af++, t.then(Fo, Fo), t;
  }
  function Fo() {
    if (--Af === 0 && Qa !== null) {
      Wl !== null && (Wl.status = "fulfilled");
      var e = Qa;
      Qa = null, Fl = 0, Wl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Hm(e, t) {
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
  var Wo = M.S;
  M.S = function(e, t) {
    x0 = St(), typeof t == "object" && t !== null && typeof t.then == "function" && Bm(e, t), Wo !== null && Wo(e, t);
  };
  var ml = y(null);
  function Mf() {
    var e = ml.current;
    return e !== null ? e : xe.pooledCache;
  }
  function oi(e, t) {
    t === null ? le(ml, ml.current) : le(ml, t.pool);
  }
  function $o() {
    var e = Mf();
    return e === null ? null : { parent: Xe._currentValue, pool: e };
  }
  var $l = Error(r(460)), Df = Error(r(474)), di = Error(r(542)), hi = { then: function() {
  } };
  function Io(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Po(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(an, an), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, td(e), e;
      default:
        if (typeof t.status == "string") t.then(an, an);
        else {
          if (e = xe, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = t.reason, td(e), e;
        }
        throw vl = t, $l;
    }
  }
  function yl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (vl = n, $l) : n;
    }
  }
  var vl = null;
  function ed() {
    if (vl === null) throw Error(r(459));
    var e = vl;
    return vl = null, e;
  }
  function td(e) {
    if (e === $l || e === di)
      throw Error(r(483));
  }
  var Il = null, wa = 0;
  function mi(e) {
    var t = wa;
    return wa += 1, Il === null && (Il = []), Po(Il, e, t);
  }
  function La(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function yi(e, t) {
    throw t.$$typeof === U ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function nd(e) {
    function t(N, E) {
      if (e) {
        var B = N.deletions;
        B === null ? (N.deletions = [E], N.flags |= 16) : B.push(E);
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
      return N = cn(N, E), N.index = 0, N.sibling = null, N;
    }
    function i(N, E, B) {
      return N.index = B, e ? (B = N.alternate, B !== null ? (B = B.index, B < E ? (N.flags |= 67108866, E) : B) : (N.flags |= 67108866, E)) : (N.flags |= 1048576, E);
    }
    function f(N) {
      return e && N.alternate === null && (N.flags |= 67108866), N;
    }
    function o(N, E, B, I) {
      return E === null || E.tag !== 6 ? (E = yf(B, N.mode, I), E.return = N, E) : (E = a(E, B), E.return = N, E);
    }
    function g(N, E, B, I) {
      var he = B.type;
      return he === L ? k(
        N,
        E,
        B.props.children,
        I,
        B.key
      ) : E !== null && (E.elementType === he || typeof he == "object" && he !== null && he.$$typeof === X && yl(he) === E.type) ? (E = a(E, B.props), La(E, B), E.return = N, E) : (E = ci(
        B.type,
        B.key,
        B.props,
        null,
        N.mode,
        I
      ), La(E, B), E.return = N, E);
    }
    function H(N, E, B, I) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== B.containerInfo || E.stateNode.implementation !== B.implementation ? (E = vf(B, N.mode, I), E.return = N, E) : (E = a(E, B.children || []), E.return = N, E);
    }
    function k(N, E, B, I, he) {
      return E === null || E.tag !== 7 ? (E = sl(
        B,
        N.mode,
        I,
        he
      ), E.return = N, E) : (E = a(E, B), E.return = N, E);
    }
    function ee(N, E, B) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = yf(
          "" + E,
          N.mode,
          B
        ), E.return = N, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Q:
            return B = ci(
              E.type,
              E.key,
              E.props,
              null,
              N.mode,
              B
            ), La(B, E), B.return = N, B;
          case z:
            return E = vf(
              E,
              N.mode,
              B
            ), E.return = N, E;
          case X:
            return E = yl(E), ee(N, E, B);
        }
        if (ae(E) || A(E))
          return E = sl(
            E,
            N.mode,
            B,
            null
          ), E.return = N, E;
        if (typeof E.then == "function")
          return ee(N, mi(E), B);
        if (E.$$typeof === b)
          return ee(
            N,
            si(N, E),
            B
          );
        yi(N, E);
      }
      return null;
    }
    function w(N, E, B, I) {
      var he = E !== null ? E.key : null;
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return he !== null ? null : o(N, E, "" + B, I);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case Q:
            return B.key === he ? g(N, E, B, I) : null;
          case z:
            return B.key === he ? H(N, E, B, I) : null;
          case X:
            return B = yl(B), w(N, E, B, I);
        }
        if (ae(B) || A(B))
          return he !== null ? null : k(N, E, B, I, null);
        if (typeof B.then == "function")
          return w(
            N,
            E,
            mi(B),
            I
          );
        if (B.$$typeof === b)
          return w(
            N,
            E,
            si(N, B),
            I
          );
        yi(N, B);
      }
      return null;
    }
    function Z(N, E, B, I, he) {
      if (typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint")
        return N = N.get(B) || null, o(E, N, "" + I, he);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case Q:
            return N = N.get(
              I.key === null ? B : I.key
            ) || null, g(E, N, I, he);
          case z:
            return N = N.get(
              I.key === null ? B : I.key
            ) || null, H(E, N, I, he);
          case X:
            return I = yl(I), Z(
              N,
              E,
              B,
              I,
              he
            );
        }
        if (ae(I) || A(I))
          return N = N.get(B) || null, k(E, N, I, he, null);
        if (typeof I.then == "function")
          return Z(
            N,
            E,
            B,
            mi(I),
            he
          );
        if (I.$$typeof === b)
          return Z(
            N,
            E,
            B,
            si(E, I),
            he
          );
        yi(E, I);
      }
      return null;
    }
    function re(N, E, B, I) {
      for (var he = null, Ae = null, oe = E, ge = E = 0, Ce = null; oe !== null && ge < B.length; ge++) {
        oe.index > ge ? (Ce = oe, oe = null) : Ce = oe.sibling;
        var Me = w(
          N,
          oe,
          B[ge],
          I
        );
        if (Me === null) {
          oe === null && (oe = Ce);
          break;
        }
        e && oe && Me.alternate === null && t(N, oe), E = i(Me, E, ge), Ae === null ? he = Me : Ae.sibling = Me, Ae = Me, oe = Ce;
      }
      if (ge === B.length)
        return n(N, oe), Te && fn(N, ge), he;
      if (oe === null) {
        for (; ge < B.length; ge++)
          oe = ee(N, B[ge], I), oe !== null && (E = i(
            oe,
            E,
            ge
          ), Ae === null ? he = oe : Ae.sibling = oe, Ae = oe);
        return Te && fn(N, ge), he;
      }
      for (oe = l(oe); ge < B.length; ge++)
        Ce = Z(
          oe,
          N,
          ge,
          B[ge],
          I
        ), Ce !== null && (e && Ce.alternate !== null && oe.delete(
          Ce.key === null ? ge : Ce.key
        ), E = i(
          Ce,
          E,
          ge
        ), Ae === null ? he = Ce : Ae.sibling = Ce, Ae = Ce);
      return e && oe.forEach(function(In) {
        return t(N, In);
      }), Te && fn(N, ge), he;
    }
    function me(N, E, B, I) {
      if (B == null) throw Error(r(151));
      for (var he = null, Ae = null, oe = E, ge = E = 0, Ce = null, Me = B.next(); oe !== null && !Me.done; ge++, Me = B.next()) {
        oe.index > ge ? (Ce = oe, oe = null) : Ce = oe.sibling;
        var In = w(N, oe, Me.value, I);
        if (In === null) {
          oe === null && (oe = Ce);
          break;
        }
        e && oe && In.alternate === null && t(N, oe), E = i(In, E, ge), Ae === null ? he = In : Ae.sibling = In, Ae = In, oe = Ce;
      }
      if (Me.done)
        return n(N, oe), Te && fn(N, ge), he;
      if (oe === null) {
        for (; !Me.done; ge++, Me = B.next())
          Me = ee(N, Me.value, I), Me !== null && (E = i(Me, E, ge), Ae === null ? he = Me : Ae.sibling = Me, Ae = Me);
        return Te && fn(N, ge), he;
      }
      for (oe = l(oe); !Me.done; ge++, Me = B.next())
        Me = Z(oe, N, ge, Me.value, I), Me !== null && (e && Me.alternate !== null && oe.delete(Me.key === null ? ge : Me.key), E = i(Me, E, ge), Ae === null ? he = Me : Ae.sibling = Me, Ae = Me);
      return e && oe.forEach(function(ky) {
        return t(N, ky);
      }), Te && fn(N, ge), he;
    }
    function Ue(N, E, B, I) {
      if (typeof B == "object" && B !== null && B.type === L && B.key === null && (B = B.props.children), typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case Q:
            e: {
              for (var he = B.key; E !== null; ) {
                if (E.key === he) {
                  if (he = B.type, he === L) {
                    if (E.tag === 7) {
                      n(
                        N,
                        E.sibling
                      ), I = a(
                        E,
                        B.props.children
                      ), I.return = N, N = I;
                      break e;
                    }
                  } else if (E.elementType === he || typeof he == "object" && he !== null && he.$$typeof === X && yl(he) === E.type) {
                    n(
                      N,
                      E.sibling
                    ), I = a(E, B.props), La(I, B), I.return = N, N = I;
                    break e;
                  }
                  n(N, E);
                  break;
                } else t(N, E);
                E = E.sibling;
              }
              B.type === L ? (I = sl(
                B.props.children,
                N.mode,
                I,
                B.key
              ), I.return = N, N = I) : (I = ci(
                B.type,
                B.key,
                B.props,
                null,
                N.mode,
                I
              ), La(I, B), I.return = N, N = I);
            }
            return f(N);
          case z:
            e: {
              for (he = B.key; E !== null; ) {
                if (E.key === he)
                  if (E.tag === 4 && E.stateNode.containerInfo === B.containerInfo && E.stateNode.implementation === B.implementation) {
                    n(
                      N,
                      E.sibling
                    ), I = a(E, B.children || []), I.return = N, N = I;
                    break e;
                  } else {
                    n(N, E);
                    break;
                  }
                else t(N, E);
                E = E.sibling;
              }
              I = vf(B, N.mode, I), I.return = N, N = I;
            }
            return f(N);
          case X:
            return B = yl(B), Ue(
              N,
              E,
              B,
              I
            );
        }
        if (ae(B))
          return re(
            N,
            E,
            B,
            I
          );
        if (A(B)) {
          if (he = A(B), typeof he != "function") throw Error(r(150));
          return B = he.call(B), me(
            N,
            E,
            B,
            I
          );
        }
        if (typeof B.then == "function")
          return Ue(
            N,
            E,
            mi(B),
            I
          );
        if (B.$$typeof === b)
          return Ue(
            N,
            E,
            si(N, B),
            I
          );
        yi(N, B);
      }
      return typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint" ? (B = "" + B, E !== null && E.tag === 6 ? (n(N, E.sibling), I = a(E, B), I.return = N, N = I) : (n(N, E), I = yf(B, N.mode, I), I.return = N, N = I), f(N)) : n(N, E);
    }
    return function(N, E, B, I) {
      try {
        wa = 0;
        var he = Ue(
          N,
          E,
          B,
          I
        );
        return Il = null, he;
      } catch (oe) {
        if (oe === $l || oe === di) throw oe;
        var Ae = Ct(29, oe, null, N.mode);
        return Ae.lanes = I, Ae.return = N, Ae;
      }
    };
  }
  var gl = nd(!0), ld = nd(!1), qn = !1;
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
  function Bn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Hn(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (De & 2) !== 0) {
      var a = l.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t, t = ii(e), Lo(e, null, n), t;
    }
    return ui(e, l, t, n), ii(e);
  }
  function Ya(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, Js(e, n);
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
      var e = Wl;
      if (e !== null) throw e;
    }
  }
  function Va(e, t, n, l) {
    Nf = !1;
    var a = e.updateQueue;
    qn = !1;
    var i = a.firstBaseUpdate, f = a.lastBaseUpdate, o = a.shared.pending;
    if (o !== null) {
      a.shared.pending = null;
      var g = o, H = g.next;
      g.next = null, f === null ? i = H : f.next = H, f = g;
      var k = e.alternate;
      k !== null && (k = k.updateQueue, o = k.lastBaseUpdate, o !== f && (o === null ? k.firstBaseUpdate = H : o.next = H, k.lastBaseUpdate = g));
    }
    if (i !== null) {
      var ee = a.baseState;
      f = 0, k = H = g = null, o = i;
      do {
        var w = o.lane & -536870913, Z = w !== o.lane;
        if (Z ? (Ee & w) === w : (l & w) === w) {
          w !== 0 && w === Fl && (Nf = !0), k !== null && (k = k.next = {
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          });
          e: {
            var re = e, me = o;
            w = t;
            var Ue = n;
            switch (me.tag) {
              case 1:
                if (re = me.payload, typeof re == "function") {
                  ee = re.call(Ue, ee, w);
                  break e;
                }
                ee = re;
                break e;
              case 3:
                re.flags = re.flags & -65537 | 128;
              case 0:
                if (re = me.payload, w = typeof re == "function" ? re.call(Ue, ee, w) : re, w == null) break e;
                ee = S({}, ee, w);
                break e;
              case 2:
                qn = !0;
            }
          }
          w = o.callback, w !== null && (e.flags |= 64, Z && (e.flags |= 8192), Z = a.callbacks, Z === null ? a.callbacks = [w] : Z.push(w));
        } else
          Z = {
            lane: w,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          }, k === null ? (H = k = Z, g = ee) : k = k.next = Z, f |= w;
        if (o = o.next, o === null) {
          if (o = a.shared.pending, o === null)
            break;
          Z = o, o = Z.next, Z.next = null, a.lastBaseUpdate = Z, a.shared.pending = null;
        }
      } while (!0);
      k === null && (g = ee), a.baseState = g, a.firstBaseUpdate = H, a.lastBaseUpdate = k, i === null && (a.shared.lanes = 0), Gn |= f, e.lanes = f, e.memoizedState = ee;
    }
  }
  function ad(e, t) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(t);
  }
  function ud(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        ad(n[e], t);
  }
  var Pl = y(null), vi = y(0);
  function id(e, t) {
    e = Sn, le(vi, e), le(Pl, t), Sn = e | t.baseLanes;
  }
  function Uf() {
    le(vi, Sn), le(Pl, Pl.current);
  }
  function xf() {
    Sn = vi.current, K(Pl), K(vi);
  }
  var Tt = y(null), Yt = null;
  function Qn(e) {
    var t = e.alternate;
    le(Ge, Ge.current & 1), le(Tt, e), Yt === null && (t === null || Pl.current !== null || t.memoizedState !== null) && (Yt = e);
  }
  function jf(e) {
    le(Ge, Ge.current), le(Tt, e), Yt === null && (Yt = e);
  }
  function cd(e) {
    e.tag === 22 ? (le(Ge, Ge.current), le(Tt, e), Yt === null && (Yt = e)) : wn();
  }
  function wn() {
    le(Ge, Ge.current), le(Tt, Tt.current);
  }
  function At(e) {
    K(Tt), Yt === e && (Yt = null), K(Ge);
  }
  var Ge = y(0);
  function gi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Lr(n) || Yr(n)))
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
  var on = 0, ve = null, Re = null, Ze = null, pi = !1, ea = !1, pl = !1, Si = 0, Xa = 0, ta = null, Qm = 0;
  function Qe() {
    throw Error(r(321));
  }
  function qf(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Et(e[n], t[n])) return !1;
    return !0;
  }
  function Bf(e, t, n, l, a, i) {
    return on = i, ve = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, M.H = e === null || e.memoizedState === null ? Xd : $f, pl = !1, i = n(l, a), pl = !1, ea && (i = rd(
      t,
      n,
      l,
      a
    )), fd(e), i;
  }
  function fd(e) {
    M.H = Ja;
    var t = Re !== null && Re.next !== null;
    if (on = 0, Ze = Re = ve = null, pi = !1, Xa = 0, ta = null, t) throw Error(r(300));
    e === null || Ke || (e = e.dependencies, e !== null && ri(e) && (Ke = !0));
  }
  function rd(e, t, n, l) {
    ve = e;
    var a = 0;
    do {
      if (ea && (ta = null), Xa = 0, ea = !1, 25 <= a) throw Error(r(301));
      if (a += 1, Ze = Re = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      M.H = Zd, i = t(n, l);
    } while (ea);
    return i;
  }
  function wm() {
    var e = M.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Za(t) : t, e = e.useState()[0], (Re !== null ? Re.memoizedState : null) !== e && (ve.flags |= 1024), t;
  }
  function Hf() {
    var e = Si !== 0;
    return Si = 0, e;
  }
  function Qf(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function wf(e) {
    if (pi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      pi = !1;
    }
    on = 0, Ze = Re = ve = null, ea = !1, Xa = Si = 0, ta = null;
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
  function bi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Za(e) {
    var t = Xa;
    return Xa += 1, ta === null && (ta = []), e = Po(ta, e, t), t = ve, (Ze === null ? t.memoizedState : Ze.next) === null && (t = t.alternate, M.H = t === null || t.memoizedState === null ? Xd : $f), e;
  }
  function _i(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Za(e);
      if (e.$$typeof === b) return lt(e);
    }
    throw Error(r(438, String(e)));
  }
  function Lf(e) {
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
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = bi(), ve.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = q;
    return t.index++, n;
  }
  function dn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ei(e) {
    var t = Ve();
    return Yf(t, Re, e);
  }
  function Yf(e, t, n) {
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
      var o = f = null, g = null, H = t, k = !1;
      do {
        var ee = H.lane & -536870913;
        if (ee !== H.lane ? (Ee & ee) === ee : (on & ee) === ee) {
          var w = H.revertLane;
          if (w === 0)
            g !== null && (g = g.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }), ee === Fl && (k = !0);
          else if ((on & w) === w) {
            H = H.next, w === Fl && (k = !0);
            continue;
          } else
            ee = {
              lane: 0,
              revertLane: H.revertLane,
              gesture: null,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }, g === null ? (o = g = ee, f = i) : g = g.next = ee, ve.lanes |= w, Gn |= w;
          ee = H.action, pl && n(i, ee), i = H.hasEagerState ? H.eagerState : n(i, ee);
        } else
          w = {
            lane: ee,
            revertLane: H.revertLane,
            gesture: H.gesture,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null
          }, g === null ? (o = g = w, f = i) : g = g.next = w, ve.lanes |= ee, Gn |= ee;
        H = H.next;
      } while (H !== null && H !== t);
      if (g === null ? f = i : g.next = o, !Et(i, e.memoizedState) && (Ke = !0, k && (n = Wl, n !== null)))
        throw n;
      e.memoizedState = i, e.baseState = f, e.baseQueue = g, l.lastRenderedState = i;
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
  function sd(e, t, n) {
    var l = ve, a = Ve(), i = Te;
    if (i) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = t();
    var f = !Et(
      (Re || a).memoizedState,
      n
    );
    if (f && (a.memoizedState = n, Ke = !0), a = a.queue, Zf(hd.bind(null, l, a, e), [
      e
    ]), a.getSnapshot !== t || f || Ze !== null && Ze.memoizedState.tag & 1) {
      if (l.flags |= 2048, na(
        9,
        { destroy: void 0 },
        dd.bind(
          null,
          l,
          a,
          n,
          t
        ),
        null
      ), xe === null) throw Error(r(349));
      i || (on & 127) !== 0 || od(l, t, n);
    }
    return n;
  }
  function od(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ve.updateQueue, t === null ? (t = bi(), ve.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function dd(e, t, n, l) {
    t.value = n, t.getSnapshot = l, md(t) && yd(e);
  }
  function hd(e, t, n) {
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
    var t = rl(e, 2);
    t !== null && gt(t, e, 2);
  }
  function Vf(e) {
    var t = st();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), pl) {
        zn(!0);
        try {
          n();
        } finally {
          zn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: dn,
      lastRenderedState: e
    }, t;
  }
  function vd(e, t, n, l) {
    return e.baseState = n, Yf(
      e,
      Re,
      typeof l == "function" ? l : dn
    );
  }
  function Lm(e, t, n, l, a) {
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
      M.T !== null ? n(!0) : i.isTransition = !1, l(i), n = t.pending, n === null ? (i.next = t.pending = i, gd(t, i)) : (i.next = n.next, t.pending = n.next = i);
    }
  }
  function gd(e, t) {
    var n = t.action, l = t.payload, a = e.state;
    if (t.isTransition) {
      var i = M.T, f = {};
      M.T = f;
      try {
        var o = n(a, l), g = M.S;
        g !== null && g(f, o), pd(e, t, o);
      } catch (H) {
        Xf(e, t, H);
      } finally {
        i !== null && f.types !== null && (i.types = f.types), M.T = i;
      }
    } else
      try {
        i = n(a, l), pd(e, t, i);
      } catch (H) {
        Xf(e, t, H);
      }
  }
  function pd(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        Sd(e, t, l);
      },
      function(l) {
        return Xf(e, t, l);
      }
    ) : Sd(e, t, n);
  }
  function Sd(e, t, n) {
    t.status = "fulfilled", t.value = n, bd(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, gd(e, n)));
  }
  function Xf(e, t, n) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = n, bd(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function bd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function _d(e, t) {
    return t;
  }
  function Ed(e, t) {
    if (Te) {
      var n = xe.formState;
      if (n !== null) {
        e: {
          var l = ve;
          if (Te) {
            if (je) {
              t: {
                for (var a = je, i = Lt; a.nodeType !== 8; ) {
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
                je = Gt(
                  a.nextSibling
                ), l = a.data === "F!";
                break e;
              }
            }
            xn(l);
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
      lastRenderedReducer: _d,
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
    }, l.queue = a, n = Lm.bind(
      null,
      ve,
      a,
      i,
      n
    ), a.dispatch = n, l.memoizedState = e, [t, n, !1];
  }
  function Cd(e) {
    var t = Ve();
    return Td(t, Re, e);
  }
  function Td(e, t, n) {
    if (t = Yf(
      e,
      t,
      _d
    )[0], e = Ei(dn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Za(t);
      } catch (f) {
        throw f === $l ? di : f;
      }
    else l = t;
    t = Ve();
    var a = t.queue, i = a.dispatch;
    return n !== t.memoizedState && (ve.flags |= 2048, na(
      9,
      { destroy: void 0 },
      Ym.bind(null, a, n),
      null
    )), [l, i, e];
  }
  function Ym(e, t) {
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
  function na(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = ve.updateQueue, t === null && (t = bi(), ve.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Md() {
    return Ve().memoizedState;
  }
  function Ci(e, t, n, l) {
    var a = st();
    ve.flags |= e, a.memoizedState = na(
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
    Re !== null && l !== null && qf(l, Re.memoizedState.deps) ? a.memoizedState = na(t, i, n, l) : (ve.flags |= e, a.memoizedState = na(
      1 | t,
      i,
      n,
      l
    ));
  }
  function Dd(e, t) {
    Ci(8390656, 8, e, t);
  }
  function Zf(e, t) {
    Ti(2048, 8, e, t);
  }
  function Gm(e) {
    ve.flags |= 4;
    var t = ve.updateQueue;
    if (t === null)
      t = bi(), ve.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function zd(e) {
    var t = Ve().memoizedState;
    return Gm({ ref: t, nextImpl: e }), function() {
      if ((De & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Od(e, t) {
    return Ti(4, 2, e, t);
  }
  function Rd(e, t) {
    return Ti(4, 4, e, t);
  }
  function Nd(e, t) {
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
  function Ud(e, t, n) {
    n = n != null ? n.concat([e]) : null, Ti(4, 4, Nd.bind(null, t, e), n);
  }
  function Kf() {
  }
  function xd(e, t) {
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
    if (l = e(), pl) {
      zn(!0);
      try {
        e();
      } finally {
        zn(!1);
      }
    }
    return n.memoizedState = [l, t], l;
  }
  function Jf(e, t, n) {
    return n === void 0 || (on & 1073741824) !== 0 && (Ee & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = q0(), ve.lanes |= e, Gn |= e, n);
  }
  function qd(e, t, n, l) {
    return Et(n, t) ? n : Pl.current !== null ? (e = Jf(e, n, l), Et(e, t) || (Ke = !0), e) : (on & 42) === 0 || (on & 1073741824) !== 0 && (Ee & 261930) === 0 ? (Ke = !0, e.memoizedState = n) : (e = q0(), ve.lanes |= e, Gn |= e, t);
  }
  function Bd(e, t, n, l, a) {
    var i = W.p;
    W.p = i !== 0 && 8 > i ? i : 8;
    var f = M.T, o = {};
    M.T = o, Wf(e, !1, t, n);
    try {
      var g = a(), H = M.S;
      if (H !== null && H(o, g), g !== null && typeof g == "object" && typeof g.then == "function") {
        var k = Hm(
          g,
          l
        );
        Ka(
          e,
          t,
          k,
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
      W.p = i, f !== null && o.types !== null && (f.types = o.types), M.T = f;
    }
  }
  function Vm() {
  }
  function kf(e, t, n, l) {
    if (e.tag !== 5) throw Error(r(476));
    var a = Hd(e).queue;
    Bd(
      e,
      a,
      t,
      P,
      n === null ? Vm : function() {
        return Qd(e), n(l);
      }
    );
  }
  function Hd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: P,
      baseState: P,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dn,
        lastRenderedState: P
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
        lastRenderedReducer: dn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Qd(e) {
    var t = Hd(e);
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
  function wd() {
    return Ve().memoizedState;
  }
  function Ld() {
    return Ve().memoizedState;
  }
  function Xm(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = zt();
          e = Bn(n);
          var l = Hn(t, e, n);
          l !== null && (gt(l, t, n), Ya(l, t, n)), t = { cache: Tf() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Zm(e, t, n) {
    var l = zt();
    n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ai(e) ? Gd(t, n) : (n = hf(e, t, n, l), n !== null && (gt(n, e, l), Vd(n, t, l)));
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
    if (Ai(e)) Gd(t, a);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var f = t.lastRenderedState, o = i(f, n);
          if (a.hasEagerState = !0, a.eagerState = o, Et(o, f))
            return ui(e, t, a, 0), xe === null && ai(), !1;
        } catch {
        }
      if (n = hf(e, t, a, l), n !== null)
        return gt(n, e, l), Vd(n, t, l), !0;
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
      t = hf(
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
  function Gd(e, t) {
    ea = pi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Vd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, Js(e, n);
    }
  }
  var Ja = {
    readContext: lt,
    use: _i,
    useCallback: Qe,
    useContext: Qe,
    useEffect: Qe,
    useImperativeHandle: Qe,
    useLayoutEffect: Qe,
    useInsertionEffect: Qe,
    useMemo: Qe,
    useReducer: Qe,
    useRef: Qe,
    useState: Qe,
    useDebugValue: Qe,
    useDeferredValue: Qe,
    useTransition: Qe,
    useSyncExternalStore: Qe,
    useId: Qe,
    useHostTransitionStatus: Qe,
    useFormState: Qe,
    useActionState: Qe,
    useOptimistic: Qe,
    useMemoCache: Qe,
    useCacheRefresh: Qe
  };
  Ja.useEffectEvent = Qe;
  var Xd = {
    readContext: lt,
    use: _i,
    useCallback: function(e, t) {
      return st().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: lt,
    useEffect: Dd,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, Ci(
        4194308,
        4,
        Nd.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return Ci(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Ci(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = st();
      t = t === void 0 ? null : t;
      var l = e();
      if (pl) {
        zn(!0);
        try {
          e();
        } finally {
          zn(!1);
        }
      }
      return n.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, n) {
      var l = st();
      if (n !== void 0) {
        var a = n(t);
        if (pl) {
          zn(!0);
          try {
            n(t);
          } finally {
            zn(!1);
          }
        }
      } else a = t;
      return l.memoizedState = l.baseState = a, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      }, l.queue = e, e = e.dispatch = Zm.bind(
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
      return e = Bd.bind(
        null,
        ve,
        e.queue,
        !0,
        !1
      ), st().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var l = ve, a = st();
      if (Te) {
        if (n === void 0)
          throw Error(r(407));
        n = n();
      } else {
        if (n = t(), xe === null)
          throw Error(r(349));
        (Ee & 127) !== 0 || od(l, t, n);
      }
      a.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return a.queue = i, Dd(hd.bind(null, l, i, e), [
        e
      ]), l.flags |= 2048, na(
        9,
        { destroy: void 0 },
        dd.bind(
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
      var e = st(), t = xe.identifierPrefix;
      if (Te) {
        var n = Pt, l = It;
        n = (l & ~(1 << 32 - _t(l) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Si++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = Qm++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Ff,
    useFormState: Ed,
    useActionState: Ed,
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
    useMemoCache: Lf,
    useCacheRefresh: function() {
      return st().memoizedState = Xm.bind(
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
    use: _i,
    useCallback: xd,
    useContext: lt,
    useEffect: Zf,
    useImperativeHandle: Ud,
    useInsertionEffect: Od,
    useLayoutEffect: Rd,
    useMemo: jd,
    useReducer: Ei,
    useRef: Md,
    useState: function() {
      return Ei(dn);
    },
    useDebugValue: Kf,
    useDeferredValue: function(e, t) {
      var n = Ve();
      return qd(
        n,
        Re.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ei(dn)[0], t = Ve().memoizedState;
      return [
        typeof e == "boolean" ? e : Za(e),
        t
      ];
    },
    useSyncExternalStore: sd,
    useId: wd,
    useHostTransitionStatus: Ff,
    useFormState: Cd,
    useActionState: Cd,
    useOptimistic: function(e, t) {
      var n = Ve();
      return vd(n, Re, e, t);
    },
    useMemoCache: Lf,
    useCacheRefresh: Ld
  };
  $f.useEffectEvent = zd;
  var Zd = {
    readContext: lt,
    use: _i,
    useCallback: xd,
    useContext: lt,
    useEffect: Zf,
    useImperativeHandle: Ud,
    useInsertionEffect: Od,
    useLayoutEffect: Rd,
    useMemo: jd,
    useReducer: Gf,
    useRef: Md,
    useState: function() {
      return Gf(dn);
    },
    useDebugValue: Kf,
    useDeferredValue: function(e, t) {
      var n = Ve();
      return Re === null ? Jf(n, e, t) : qd(
        n,
        Re.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Gf(dn)[0], t = Ve().memoizedState;
      return [
        typeof e == "boolean" ? e : Za(e),
        t
      ];
    },
    useSyncExternalStore: sd,
    useId: wd,
    useHostTransitionStatus: Ff,
    useFormState: Ad,
    useActionState: Ad,
    useOptimistic: function(e, t) {
      var n = Ve();
      return Re !== null ? vd(n, Re, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Lf,
    useCacheRefresh: Ld
  };
  Zd.useEffectEvent = zd;
  function If(e, t, n, l) {
    t = e.memoizedState, n = n(l, t), n = n == null ? t : S({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Pf = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var l = zt(), a = Bn(l);
      a.payload = t, n != null && (a.callback = n), t = Hn(e, a, l), t !== null && (gt(t, e, l), Ya(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var l = zt(), a = Bn(l);
      a.tag = 1, a.payload = t, n != null && (a.callback = n), t = Hn(e, a, l), t !== null && (gt(t, e, l), Ya(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = zt(), l = Bn(n);
      l.tag = 2, t != null && (l.callback = t), t = Hn(e, l, n), t !== null && (gt(t, e, n), Ya(t, e, n));
    }
  };
  function Kd(e, t, n, l, a, i, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, i, f) : t.prototype && t.prototype.isPureReactComponent ? !xa(n, l) || !xa(a, i) : !0;
  }
  function Jd(e, t, n, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && Pf.enqueueReplaceState(t, t.state, null);
  }
  function Sl(e, t) {
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
  function kd(e) {
    li(e);
  }
  function Fd(e) {
    console.error(e);
  }
  function Wd(e) {
    li(e);
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
  function $d(e, t, n) {
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
    return n = Bn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Mi(e, t);
    }, n;
  }
  function Id(e) {
    return e = Bn(e), e.tag = 3, e;
  }
  function Pd(e, t, n, l) {
    var a = n.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var i = l.value;
      e.payload = function() {
        return a(i);
      }, e.callback = function() {
        $d(t, n, l);
      };
    }
    var f = n.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
      $d(t, n, l), typeof a != "function" && (Vn === null ? Vn = /* @__PURE__ */ new Set([this]) : Vn.add(this));
      var o = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: o !== null ? o : ""
      });
    });
  }
  function Km(e, t, n, l, a) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = n.alternate, t !== null && kl(
        t,
        n,
        a,
        !0
      ), n = Tt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Yt === null ? Qi() : n.alternate === null && we === 0 && (we = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, l === hi ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), Ar(e, l, a)), !1;
          case 22:
            return n.flags |= 65536, l === hi ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), Ar(e, l, a)), !1;
        }
        throw Error(r(435, n.tag));
      }
      return Ar(e, l, a), Qi(), !1;
    }
    if (Te)
      return t = Tt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, l !== Sf && (e = Error(r(422), { cause: l }), Ba(Ht(e, n)))) : (l !== Sf && (t = Error(r(423), {
        cause: l
      }), Ba(
        Ht(t, n)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, l = Ht(l, n), a = er(
        e.stateNode,
        l,
        a
      ), Rf(e, a), we !== 4 && (we = 2)), !1;
    var i = Error(r(520), { cause: l });
    if (i = Ht(i, n), tu === null ? tu = [i] : tu.push(i), we !== 4 && (we = 2), t === null) return !0;
    l = Ht(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = a & -a, n.lanes |= e, e = er(n.stateNode, l, e), Rf(n, e), !1;
        case 1:
          if (t = n.type, i = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Vn === null || !Vn.has(i))))
            return n.flags |= 65536, a &= -a, n.lanes |= a, a = Id(a), Pd(
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
    t.child = e === null ? ld(t, null, n, l) : gl(
      t,
      e.child,
      n,
      l
    );
  }
  function e0(e, t, n, l, a) {
    n = n.render;
    var i = t.ref;
    if ("ref" in l) {
      var f = {};
      for (var o in l)
        o !== "ref" && (f[o] = l[o]);
    } else f = l;
    return hl(t), l = Bf(
      e,
      t,
      n,
      f,
      i,
      a
    ), o = Hf(), e !== null && !Ke ? (Qf(e, t, a), hn(e, t, a)) : (Te && o && gf(t), t.flags |= 1, at(e, t, l, a), t.child);
  }
  function t0(e, t, n, l, a) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !mf(i) && i.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = i, n0(
        e,
        t,
        i,
        l,
        a
      )) : (e = ci(
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
      if (n = n.compare, n = n !== null ? n : xa, n(f, l) && e.ref === t.ref)
        return hn(e, t, a);
    }
    return t.flags |= 1, e = cn(i, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function n0(e, t, n, l, a) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (xa(i, l) && e.ref === t.ref)
        if (Ke = !1, t.pendingProps = l = i, rr(e, a))
          (e.flags & 131072) !== 0 && (Ke = !0);
        else
          return t.lanes = e.lanes, hn(e, t, a);
    }
    return nr(
      e,
      t,
      n,
      l,
      a
    );
  }
  function l0(e, t, n, l) {
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
        return a0(
          e,
          t,
          i,
          n,
          l
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && oi(
          t,
          i !== null ? i.cachePool : null
        ), i !== null ? id(t, i) : Uf(), cd(t);
      else
        return l = t.lanes = 536870912, a0(
          e,
          t,
          i !== null ? i.baseLanes | n : n,
          n,
          l
        );
    } else
      i !== null ? (oi(t, i.cachePool), id(t, i), wn(), t.memoizedState = null) : (e !== null && oi(t, null), Uf(), wn());
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
  function a0(e, t, n, l, a) {
    var i = Mf();
    return i = i === null ? null : { parent: Xe._currentValue, pool: i }, t.memoizedState = {
      baseLanes: n,
      cachePool: i
    }, e !== null && oi(t, null), Uf(), cd(t), e !== null && kl(e, t, l, !0), t.childLanes = a, null;
  }
  function Di(e, t) {
    return t = Oi(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function u0(e, t, n) {
    return gl(t, e.child, null, n), e = Di(t, t.pendingProps), e.flags |= 2, At(t), t.memoizedState = null, e;
  }
  function Jm(e, t, n) {
    var l = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Te) {
        if (l.mode === "hidden")
          return e = Di(t, l), t.lanes = 536870912, ka(null, e);
        if (jf(t), (e = je) ? (e = g2(
          e,
          Lt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Nn !== null ? { id: It, overflow: Pt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Go(e), n.return = t, t.child = n, nt = t, je = null)) : e = null, e === null) throw xn(t);
        return t.lanes = 536870912, null;
      }
      return Di(t, l);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var f = i.dehydrated;
      if (jf(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = u0(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (Ke || kl(e, t, n, !1), a = (n & e.childLanes) !== 0, Ke || a) {
        if (l = xe, l !== null && (f = ks(l, n), f !== 0 && f !== i.retryLane))
          throw i.retryLane = f, rl(e, f), gt(l, e, f), tr;
        Qi(), t = u0(
          e,
          t,
          n
        );
      } else
        e = i.treeContext, je = Gt(f.nextSibling), nt = t, Te = !0, Un = null, Lt = !1, e !== null && Zo(t, e), t = Di(t, l), t.flags |= 4096;
      return t;
    }
    return e = cn(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function zi(e, t) {
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
    return hl(t), n = Bf(
      e,
      t,
      n,
      l,
      void 0,
      a
    ), l = Hf(), e !== null && !Ke ? (Qf(e, t, a), hn(e, t, a)) : (Te && l && gf(t), t.flags |= 1, at(e, t, n, a), t.child);
  }
  function i0(e, t, n, l, a, i) {
    return hl(t), t.updateQueue = null, n = rd(
      t,
      l,
      n,
      a
    ), fd(e), l = Hf(), e !== null && !Ke ? (Qf(e, t, i), hn(e, t, i)) : (Te && l && gf(t), t.flags |= 1, at(e, t, n, i), t.child);
  }
  function c0(e, t, n, l, a) {
    if (hl(t), t.stateNode === null) {
      var i = Xl, f = n.contextType;
      typeof f == "object" && f !== null && (i = lt(f)), i = new n(l, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Pf, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = l, i.state = t.memoizedState, i.refs = {}, zf(t), f = n.contextType, i.context = typeof f == "object" && f !== null ? lt(f) : Xl, i.state = t.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (If(
        t,
        n,
        f,
        l
      ), i.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (f = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), f !== i.state && Pf.enqueueReplaceState(i, i.state, null), Va(t, l, i, a), Ga(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      i = t.stateNode;
      var o = t.memoizedProps, g = Sl(n, o);
      i.props = g;
      var H = i.context, k = n.contextType;
      f = Xl, typeof k == "object" && k !== null && (f = lt(k));
      var ee = n.getDerivedStateFromProps;
      k = typeof ee == "function" || typeof i.getSnapshotBeforeUpdate == "function", o = t.pendingProps !== o, k || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o || H !== f) && Jd(
        t,
        i,
        l,
        f
      ), qn = !1;
      var w = t.memoizedState;
      i.state = w, Va(t, l, i, a), Ga(), H = t.memoizedState, o || w !== H || qn ? (typeof ee == "function" && (If(
        t,
        n,
        ee,
        l
      ), H = t.memoizedState), (g = qn || Kd(
        t,
        n,
        g,
        l,
        w,
        H,
        f
      )) ? (k || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = H), i.props = l, i.state = H, i.context = f, l = g) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      i = t.stateNode, Of(e, t), f = t.memoizedProps, k = Sl(n, f), i.props = k, ee = t.pendingProps, w = i.context, H = n.contextType, g = Xl, typeof H == "object" && H !== null && (g = lt(H)), o = n.getDerivedStateFromProps, (H = typeof o == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f !== ee || w !== g) && Jd(
        t,
        i,
        l,
        g
      ), qn = !1, w = t.memoizedState, i.state = w, Va(t, l, i, a), Ga();
      var Z = t.memoizedState;
      f !== ee || w !== Z || qn || e !== null && e.dependencies !== null && ri(e.dependencies) ? (typeof o == "function" && (If(
        t,
        n,
        o,
        l
      ), Z = t.memoizedState), (k = qn || Kd(
        t,
        n,
        k,
        l,
        w,
        Z,
        g
      ) || e !== null && e.dependencies !== null && ri(e.dependencies)) ? (H || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(l, Z, g), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        l,
        Z,
        g
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = Z), i.props = l, i.state = Z, i.context = g, l = k) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return i = l, zi(e, t), l = (t.flags & 128) !== 0, i || l ? (i = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && l ? (t.child = gl(
      t,
      e.child,
      null,
      a
    ), t.child = gl(
      t,
      null,
      n,
      a
    )) : at(e, t, n, a), t.memoizedState = i.state, e = t.child) : e = hn(
      e,
      t,
      a
    ), e;
  }
  function f0(e, t, n, l) {
    return ol(), t.flags |= 256, at(e, t, n, l), t.child;
  }
  var lr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ar(e) {
    return { baseLanes: e, cachePool: $o() };
  }
  function ur(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Dt), e;
  }
  function r0(e, t, n) {
    var l = t.pendingProps, a = !1, i = (t.flags & 128) !== 0, f;
    if ((f = i) || (f = e !== null && e.memoizedState === null ? !1 : (Ge.current & 2) !== 0), f && (a = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Te) {
        if (a ? Qn(t) : wn(), (e = je) ? (e = g2(
          e,
          Lt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Nn !== null ? { id: It, overflow: Pt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Go(e), n.return = t, t.child = n, nt = t, je = null)) : e = null, e === null) throw xn(t);
        return Yr(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var o = l.children;
      return l = l.fallback, a ? (wn(), a = t.mode, o = Oi(
        { mode: "hidden", children: o },
        a
      ), l = sl(
        l,
        a,
        n,
        null
      ), o.return = t, l.return = t, o.sibling = l, t.child = o, l = t.child, l.memoizedState = ar(n), l.childLanes = ur(
        e,
        f,
        n
      ), t.memoizedState = lr, ka(null, l)) : (Qn(t), ir(t, o));
    }
    var g = e.memoizedState;
    if (g !== null && (o = g.dehydrated, o !== null)) {
      if (i)
        t.flags & 256 ? (Qn(t), t.flags &= -257, t = cr(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (wn(), t.child = e.child, t.flags |= 128, t = null) : (wn(), o = l.fallback, a = t.mode, l = Oi(
          { mode: "visible", children: l.children },
          a
        ), o = sl(
          o,
          a,
          n,
          null
        ), o.flags |= 2, l.return = t, o.return = t, l.sibling = o, t.child = l, gl(
          t,
          e.child,
          null,
          n
        ), l = t.child, l.memoizedState = ar(n), l.childLanes = ur(
          e,
          f,
          n
        ), t.memoizedState = lr, t = ka(null, l));
      else if (Qn(t), Yr(o)) {
        if (f = o.nextSibling && o.nextSibling.dataset, f) var H = f.dgst;
        f = H, l = Error(r(419)), l.stack = "", l.digest = f, Ba({ value: l, source: null, stack: null }), t = cr(
          e,
          t,
          n
        );
      } else if (Ke || kl(e, t, n, !1), f = (n & e.childLanes) !== 0, Ke || f) {
        if (f = xe, f !== null && (l = ks(f, n), l !== 0 && l !== g.retryLane))
          throw g.retryLane = l, rl(e, l), gt(f, e, l), tr;
        Lr(o) || Qi(), t = cr(
          e,
          t,
          n
        );
      } else
        Lr(o) ? (t.flags |= 192, t.child = e.child, t = null) : (e = g.treeContext, je = Gt(
          o.nextSibling
        ), nt = t, Te = !0, Un = null, Lt = !1, e !== null && Zo(t, e), t = ir(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (wn(), o = l.fallback, a = t.mode, g = e.child, H = g.sibling, l = cn(g, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = g.subtreeFlags & 65011712, H !== null ? o = cn(
      H,
      o
    ) : (o = sl(
      o,
      a,
      n,
      null
    ), o.flags |= 2), o.return = t, l.return = t, l.sibling = o, t.child = l, ka(null, l), l = t.child, o = e.child.memoizedState, o === null ? o = ar(n) : (a = o.cachePool, a !== null ? (g = Xe._currentValue, a = a.parent !== g ? { parent: g, pool: g } : a) : a = $o(), o = {
      baseLanes: o.baseLanes | n,
      cachePool: a
    }), l.memoizedState = o, l.childLanes = ur(
      e,
      f,
      n
    ), t.memoizedState = lr, ka(e.child, l)) : (Qn(t), n = e.child, e = n.sibling, n = cn(n, {
      mode: "visible",
      children: l.children
    }), n.return = t, n.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function ir(e, t) {
    return t = Oi(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Oi(e, t) {
    return e = Ct(22, e, null, t), e.lanes = 0, e;
  }
  function cr(e, t, n) {
    return gl(t, e.child, null, n), e = ir(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function s0(e, t, n) {
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
  function o0(e, t, n) {
    var l = t.pendingProps, a = l.revealOrder, i = l.tail;
    l = l.children;
    var f = Ge.current, o = (f & 2) !== 0;
    if (o ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, le(Ge, f), at(e, t, l, n), l = Te ? qa : 0, !o && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && s0(e, n, t);
        else if (e.tag === 19)
          s0(e, n, t);
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
          e = n.alternate, e !== null && gi(e) === null && (a = n), n = n.sibling;
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
          if (e = a.alternate, e !== null && gi(e) === null) {
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
  function hn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Gn |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (kl(
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
      for (e = t.child, n = cn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = cn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function rr(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ri(e)));
  }
  function km(e, t, n) {
    switch (t.tag) {
      case 3:
        Se(t, t.stateNode.containerInfo), jn(t, Xe, e.memoizedState.cache), ol();
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
          return t.flags |= 128, jf(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Qn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? r0(e, t, n) : (Qn(t), e = hn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        Qn(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (l = (n & t.childLanes) !== 0, l || (kl(
          e,
          t,
          n,
          !1
        ), l = (n & t.childLanes) !== 0), a) {
          if (l)
            return o0(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), le(Ge, Ge.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, l0(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        jn(t, Xe, e.memoizedState.cache);
    }
    return hn(e, t, n);
  }
  function d0(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ke = !0;
      else {
        if (!rr(e, n) && (t.flags & 128) === 0)
          return Ke = !1, km(
            e,
            t,
            n
          );
        Ke = (e.flags & 131072) !== 0;
      }
    else
      Ke = !1, Te && (t.flags & 1048576) !== 0 && Xo(t, qa, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = yl(t.elementType), t.type = e, typeof e == "function")
            mf(e) ? (l = Sl(e, l), t.tag = 1, t = c0(
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
              if (a === O) {
                t.tag = 11, t = e0(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              } else if (a === R) {
                t.tag = 14, t = t0(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              }
            }
            throw t = $(e) || e, Error(r(306, t, ""));
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
        return l = t.type, a = Sl(
          l,
          t.pendingProps
        ), c0(
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
          if (l = f.cache, jn(t, Xe, l), l !== i.cache && Cf(
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
              t = f0(
                e,
                t,
                l,
                n
              );
              break e;
            } else if (l !== a) {
              a = Ht(
                Error(r(424)),
                t
              ), Ba(a), t = f0(
                e,
                t,
                l,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, je = Gt(e.firstChild), nt = t, Te = !0, Un = null, Lt = !0, n = ld(
                t,
                null,
                l,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (ol(), l === a) {
              t = hn(
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
        return zi(e, t), e === null ? (n = C2(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Te || (n = t.type, e = t.pendingProps, l = Zi(
          se.current
        ).createElement(n), l[tt] = t, l[ot] = e, ut(l, n, e), Fe(l), t.stateNode = l) : t.memoizedState = C2(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return pe(t), e === null && Te && (l = t.stateNode = b2(
          t.type,
          t.pendingProps,
          se.current
        ), nt = t, Lt = !0, a = je, Jn(t.type) ? (Gr = a, je = Gt(l.firstChild)) : je = a), at(
          e,
          t,
          t.pendingProps.children,
          n
        ), zi(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Te && ((a = l = je) && (l = Ty(
          l,
          t.type,
          t.pendingProps,
          Lt
        ), l !== null ? (t.stateNode = l, nt = t, je = Gt(l.firstChild), Lt = !1, a = !0) : a = !1), a || xn(t)), pe(t), a = t.type, i = t.pendingProps, f = e !== null ? e.memoizedProps : null, l = i.children, Hr(a, i) ? l = null : f !== null && Hr(a, f) && (t.flags |= 32), t.memoizedState !== null && (a = Bf(
          e,
          t,
          wm,
          null,
          null,
          n
        ), ru._currentValue = a), zi(e, t), at(e, t, l, n), t.child;
      case 6:
        return e === null && Te && ((e = n = je) && (n = Ay(
          n,
          t.pendingProps,
          Lt
        ), n !== null ? (t.stateNode = n, nt = t, je = null, e = !0) : e = !1), e || xn(t)), null;
      case 13:
        return r0(e, t, n);
      case 4:
        return Se(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = gl(
          t,
          null,
          l,
          n
        ) : at(e, t, l, n), t.child;
      case 11:
        return e0(
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
        return a = t.type._context, l = t.pendingProps.children, hl(t), a = lt(a), l = l(a), t.flags |= 1, at(e, t, l, n), t.child;
      case 14:
        return t0(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return n0(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return o0(e, t, n);
      case 31:
        return Jm(e, t, n);
      case 22:
        return l0(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return hl(t), l = lt(Xe), e === null ? (a = Mf(), a === null && (a = xe, i = Tf(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= n), a = i), t.memoizedState = { parent: l, cache: a }, zf(t), jn(t, Xe, a)) : ((e.lanes & n) !== 0 && (Of(e, t), Va(t, null, null, n), Ga()), a = e.memoizedState, i = t.memoizedState, a.parent !== l ? (a = { parent: l, cache: l }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), jn(t, Xe, l)) : (l = i.cache, jn(t, Xe, l), l !== a.cache && Cf(
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
        else if (w0()) e.flags |= 8192;
        else
          throw vl = hi, Df;
    } else e.flags &= -16777217;
  }
  function h0(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !z2(t))
      if (w0()) e.flags |= 8192;
      else
        throw vl = hi, Df;
  }
  function Ri(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Zs() : 536870912, e.lanes |= t, ia |= t);
  }
  function Fa(e, t) {
    if (!Te)
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
  function Fm(e, t, n) {
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
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), sn(Xe), de(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Jl(t) ? mn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, bf())), qe(t), null;
      case 26:
        var a = t.type, i = t.memoizedState;
        return e === null ? (mn(t), i !== null ? (qe(t), h0(t, i)) : (qe(t), sr(
          t,
          a,
          null,
          l,
          n
        ))) : i ? i !== e.memoizedState ? (mn(t), qe(t), h0(t, i)) : (qe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && mn(t), qe(t), sr(
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
          e = ne.current, Jl(t) ? Ko(t) : (e = b2(a, l, n), t.stateNode = e, mn(t));
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
          if (i = ne.current, Jl(t))
            Ko(t);
          else {
            var f = Zi(
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
          if (e = se.current, Jl(t)) {
            if (e = t.stateNode, n = t.memoizedProps, l = null, a = nt, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  l = a.memoizedProps;
              }
            e[tt] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || r2(e.nodeValue, n)), e || xn(t, !0);
          } else
            e = Zi(e).createTextNode(
              l
            ), e[tt] = t, t.stateNode = e;
        }
        return qe(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Jl(t), n !== null) {
            if (e === null) {
              if (!l) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[tt] = t;
            } else
              ol(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            qe(t), e = !1;
          } else
            n = bf(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (At(t), t) : (At(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return qe(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = Jl(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(r(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
              a[tt] = t;
            } else
              ol(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            qe(t), a = !1;
          } else
            a = bf(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (At(t), t) : (At(t), null);
        }
        return At(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = l !== null, e = e !== null && e.memoizedState !== null, n && (l = t.child, a = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (a = l.alternate.memoizedState.cachePool.pool), i = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (i = l.memoizedState.cachePool.pool), i !== a && (l.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Ri(t, t.updateQueue), qe(t), null);
      case 4:
        return de(), e === null && Ur(t.stateNode.containerInfo), qe(t), null;
      case 10:
        return sn(t.type), qe(t), null;
      case 19:
        if (K(Ge), l = t.memoizedState, l === null) return qe(t), null;
        if (a = (t.flags & 128) !== 0, i = l.rendering, i === null)
          if (a) Fa(l, !1);
          else {
            if (we !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = gi(e), i !== null) {
                  for (t.flags |= 128, Fa(l, !1), e = i.updateQueue, t.updateQueue = e, Ri(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Yo(n, e), n = n.sibling;
                  return le(
                    Ge,
                    Ge.current & 1 | 2
                  ), Te && fn(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && St() > qi && (t.flags |= 128, a = !0, Fa(l, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = gi(i), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, Ri(t, e), Fa(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !Te)
                return qe(t), null;
            } else
              2 * St() - l.renderingStartTime > qi && n !== 536870912 && (t.flags |= 128, a = !0, Fa(l, !1), t.lanes = 4194304);
          l.isBackwards ? (i.sibling = t.child, t.child = i) : (e = l.last, e !== null ? e.sibling = i : t.child = i, l.last = i);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = St(), e.sibling = null, n = Ge.current, le(
          Ge,
          a ? n & 1 | 2 : n & 1
        ), Te && fn(t, l.treeForkCount), e) : (qe(t), null);
      case 22:
      case 23:
        return At(t), xf(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : qe(t), n = t.updateQueue, n !== null && Ri(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && K(ml), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), sn(Xe), qe(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function Wm(e, t) {
    switch (pf(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return sn(Xe), de(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return rt(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (At(t), t.alternate === null)
            throw Error(r(340));
          ol();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (At(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          ol();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return K(Ge), null;
      case 4:
        return de(), null;
      case 10:
        return sn(t.type), null;
      case 22:
      case 23:
        return At(t), xf(), e !== null && K(ml), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return sn(Xe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function m0(e, t) {
    switch (pf(t), t.tag) {
      case 3:
        sn(Xe), de();
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
        t.memoizedState !== null && At(t);
        break;
      case 13:
        At(t);
        break;
      case 19:
        K(Ge);
        break;
      case 10:
        sn(t.type);
        break;
      case 22:
      case 23:
        At(t), xf(), e !== null && K(ml);
        break;
      case 24:
        sn(Xe);
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
  function Ln(e, t, n) {
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
              var g = n, H = o;
              try {
                H();
              } catch (k) {
                Oe(
                  a,
                  g,
                  k
                );
              }
            }
          }
          l = l.next;
        } while (l !== i);
      }
    } catch (k) {
      Oe(t, t.return, k);
    }
  }
  function y0(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        ud(t, n);
      } catch (l) {
        Oe(e, e.return, l);
      }
    }
  }
  function v0(e, t, n) {
    n.props = Sl(
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
  function en(e, t) {
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
  function g0(e) {
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
      py(l, e.type, n, t), l[ot] = t;
    } catch (a) {
      Oe(e, e.return, a);
    }
  }
  function p0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Jn(e.type) || e.tag === 4;
  }
  function dr(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || p0(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Jn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function hr(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = an));
    else if (l !== 4 && (l === 27 && Jn(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (hr(e, t, n), e = e.sibling; e !== null; )
        hr(e, t, n), e = e.sibling;
  }
  function Ni(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && (l === 27 && Jn(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (Ni(e, t, n), e = e.sibling; e !== null; )
        Ni(e, t, n), e = e.sibling;
  }
  function S0(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      ut(t, l, n), t[tt] = e, t[ot] = n;
    } catch (i) {
      Oe(e, e.return, i);
    }
  }
  var yn = !1, Je = !1, mr = !1, b0 = typeof WeakSet == "function" ? WeakSet : Set, We = null;
  function $m(e, t) {
    if (e = e.containerInfo, qr = Ii, e = Uo(e), cf(e)) {
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
            var f = 0, o = -1, g = -1, H = 0, k = 0, ee = e, w = null;
            t: for (; ; ) {
              for (var Z; ee !== n || a !== 0 && ee.nodeType !== 3 || (o = f + a), ee !== i || l !== 0 && ee.nodeType !== 3 || (g = f + l), ee.nodeType === 3 && (f += ee.nodeValue.length), (Z = ee.firstChild) !== null; )
                w = ee, ee = Z;
              for (; ; ) {
                if (ee === e) break t;
                if (w === n && ++H === a && (o = f), w === i && ++k === l && (g = f), (Z = ee.nextSibling) !== null) break;
                ee = w, w = ee.parentNode;
              }
              ee = Z;
            }
            n = o === -1 || g === -1 ? null : { start: o, end: g };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Br = { focusedElem: e, selectionRange: n }, Ii = !1, We = t; We !== null; )
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
                  var re = Sl(
                    n.type,
                    a
                  );
                  e = l.getSnapshotBeforeUpdate(
                    re,
                    i
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (me) {
                  Oe(
                    n,
                    n.return,
                    me
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
  function _0(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        gn(e, n), l & 4 && Wa(5, n);
        break;
      case 1:
        if (gn(e, n), l & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (f) {
              Oe(n, n.return, f);
            }
          else {
            var a = Sl(
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
        if (gn(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
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
            ud(e, t);
          } catch (f) {
            Oe(n, n.return, f);
          }
        }
        break;
      case 27:
        t === null && l & 4 && S0(n);
      case 26:
      case 5:
        gn(e, n), t === null && l & 4 && g0(n), l & 512 && $a(n, n.return);
        break;
      case 12:
        gn(e, n);
        break;
      case 31:
        gn(e, n), l & 4 && T0(e, n);
        break;
      case 13:
        gn(e, n), l & 4 && A0(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = iy.bind(
          null,
          n
        ), My(e, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || yn, !l) {
          t = t !== null && t.memoizedState !== null || Je, a = yn;
          var i = Je;
          yn = l, (Je = t) && !i ? pn(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : gn(e, n), yn = a, Je = i;
        }
        break;
      case 30:
        break;
      default:
        gn(e, n);
    }
  }
  function E0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, E0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Vc(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Be = null, ht = !1;
  function vn(e, t, n) {
    for (n = n.child; n !== null; )
      C0(e, t, n), n = n.sibling;
  }
  function C0(e, t, n) {
    if (bt && typeof bt.onCommitFiberUnmount == "function")
      try {
        bt.onCommitFiberUnmount(_a, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Je || en(n, t), vn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Je || en(n, t);
        var l = Be, a = ht;
        Jn(n.type) && (Be = n.stateNode, ht = !1), vn(
          e,
          t,
          n
        ), iu(n.stateNode), Be = l, ht = a;
        break;
      case 5:
        Je || en(n, t);
      case 6:
        if (l = Be, a = ht, Be = null, vn(
          e,
          t,
          n
        ), Be = l, ht = a, Be !== null)
          if (ht)
            try {
              (Be.nodeType === 9 ? Be.body : Be.nodeName === "HTML" ? Be.ownerDocument.body : Be).removeChild(n.stateNode);
            } catch (i) {
              Oe(
                n,
                t,
                i
              );
            }
          else
            try {
              Be.removeChild(n.stateNode);
            } catch (i) {
              Oe(
                n,
                t,
                i
              );
            }
        break;
      case 18:
        Be !== null && (ht ? (e = Be, y2(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), ma(e)) : y2(Be, n.stateNode));
        break;
      case 4:
        l = Be, a = ht, Be = n.stateNode.containerInfo, ht = !0, vn(
          e,
          t,
          n
        ), Be = l, ht = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ln(2, n, t), Je || Ln(4, n, t), vn(
          e,
          t,
          n
        );
        break;
      case 1:
        Je || (en(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && v0(
          n,
          t,
          l
        )), vn(
          e,
          t,
          n
        );
        break;
      case 21:
        vn(
          e,
          t,
          n
        );
        break;
      case 22:
        Je = (l = Je) || n.memoizedState !== null, vn(
          e,
          t,
          n
        ), Je = l;
        break;
      default:
        vn(
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
  function Im(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new b0()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new b0()), t;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function Ui(e, t) {
    var n = Im(e);
    t.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var a = cy.bind(null, e, l);
        l.then(a, a);
      }
    });
  }
  function mt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var a = n[l], i = e, f = t, o = f;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (Jn(o.type)) {
                Be = o.stateNode, ht = !1;
                break e;
              }
              break;
            case 5:
              Be = o.stateNode, ht = !1;
              break e;
            case 3:
            case 4:
              Be = o.stateNode.containerInfo, ht = !0;
              break e;
          }
          o = o.return;
        }
        if (Be === null) throw Error(r(160));
        C0(i, f, a), Be = null, ht = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        M0(t, e), t = t.sibling;
  }
  var Jt = null;
  function M0(e, t) {
    var n = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        mt(t, e), yt(e), l & 4 && (Ln(3, e, e.return), Wa(3, e), Ln(5, e, e.return));
        break;
      case 1:
        mt(t, e), yt(e), l & 512 && (Je || n === null || en(n, n.return)), l & 64 && yn && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var a = Jt;
        if (mt(t, e), yt(e), l & 512 && (Je || n === null || en(n, n.return)), l & 4) {
          var i = n !== null ? n.memoizedState : null;
          if (l = e.memoizedState, n === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, n = e.memoizedProps, a = a.ownerDocument || a;
                  t: switch (l) {
                    case "title":
                      i = a.getElementsByTagName("title")[0], (!i || i[Ta] || i[tt] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(l), a.head.insertBefore(
                        i,
                        a.querySelector("head > title")
                      )), ut(i, l, n), i[tt] = e, Fe(i), l = i;
                      break e;
                    case "link":
                      var f = M2(
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
                      if (f = M2(
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
                D2(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = A2(
                a,
                l,
                e.memoizedProps
              );
          else
            i !== l ? (i === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : i.count--, l === null ? D2(
              a,
              e.type,
              e.stateNode
            ) : A2(
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
        mt(t, e), yt(e), l & 512 && (Je || n === null || en(n, n.return)), n !== null && l & 4 && or(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (mt(t, e), yt(e), l & 512 && (Je || n === null || en(n, n.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            Hl(a, "");
          } catch (re) {
            Oe(e, e.return, re);
          }
        }
        l & 4 && e.stateNode != null && (a = e.memoizedProps, or(
          e,
          a,
          n !== null ? n.memoizedProps : a
        )), l & 1024 && (mr = !0);
        break;
      case 6:
        if (mt(t, e), yt(e), l & 4) {
          if (e.stateNode === null)
            throw Error(r(162));
          l = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = l;
          } catch (re) {
            Oe(e, e.return, re);
          }
        }
        break;
      case 3:
        if (ki = null, a = Jt, Jt = Ki(t.containerInfo), mt(t, e), Jt = a, yt(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            ma(t.containerInfo);
          } catch (re) {
            Oe(e, e.return, re);
          }
        mr && (mr = !1, D0(e));
        break;
      case 4:
        l = Jt, Jt = Ki(
          e.stateNode.containerInfo
        ), mt(t, e), yt(e), Jt = l;
        break;
      case 12:
        mt(t, e), yt(e);
        break;
      case 31:
        mt(t, e), yt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Ui(e, l)));
        break;
      case 13:
        mt(t, e), yt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (ji = St()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Ui(e, l)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var g = n !== null && n.memoizedState !== null, H = yn, k = Je;
        if (yn = H || a, Je = k || g, mt(t, e), Je = k, yn = H, yt(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (n === null || g || yn || Je || bl(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                g = n = t;
                try {
                  if (i = g.stateNode, a)
                    f = i.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    o = g.stateNode;
                    var ee = g.memoizedProps.style, w = ee != null && ee.hasOwnProperty("display") ? ee.display : null;
                    o.style.display = w == null || typeof w == "boolean" ? "" : ("" + w).trim();
                  }
                } catch (re) {
                  Oe(g, g.return, re);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                g = t;
                try {
                  g.stateNode.nodeValue = a ? "" : g.memoizedProps;
                } catch (re) {
                  Oe(g, g.return, re);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                g = t;
                try {
                  var Z = g.stateNode;
                  a ? v2(Z, !0) : v2(g.stateNode, !1);
                } catch (re) {
                  Oe(g, g.return, re);
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
        l & 4 && (l = e.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, Ui(e, n))));
        break;
      case 19:
        mt(t, e), yt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Ui(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        mt(t, e), yt(e);
    }
  }
  function yt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (p0(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var a = n.stateNode, i = dr(e);
            Ni(e, i, a);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (Hl(f, ""), n.flags &= -33);
            var o = dr(e);
            Ni(e, o, f);
            break;
          case 3:
          case 4:
            var g = n.stateNode.containerInfo, H = dr(e);
            hr(
              e,
              H,
              g
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (k) {
        Oe(e, e.return, k);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function D0(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        D0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function gn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        _0(e, t.alternate, t), t = t.sibling;
  }
  function bl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ln(4, t, t.return), bl(t);
          break;
        case 1:
          en(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && v0(
            t,
            t.return,
            n
          ), bl(t);
          break;
        case 27:
          iu(t.stateNode);
        case 26:
        case 5:
          en(t, t.return), bl(t);
          break;
        case 22:
          t.memoizedState === null && bl(t);
          break;
        case 30:
          bl(t);
          break;
        default:
          bl(t);
      }
      e = e.sibling;
    }
  }
  function pn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, a = e, i = t, f = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          pn(
            a,
            i,
            n
          ), Wa(4, i);
          break;
        case 1:
          if (pn(
            a,
            i,
            n
          ), l = i, a = l.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (H) {
              Oe(l, l.return, H);
            }
          if (l = i, a = l.updateQueue, a !== null) {
            var o = l.stateNode;
            try {
              var g = a.shared.hiddenCallbacks;
              if (g !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < g.length; a++)
                  ad(g[a], o);
            } catch (H) {
              Oe(l, l.return, H);
            }
          }
          n && f & 64 && y0(i), $a(i, i.return);
          break;
        case 27:
          S0(i);
        case 26:
        case 5:
          pn(
            a,
            i,
            n
          ), n && l === null && f & 4 && g0(i), $a(i, i.return);
          break;
        case 12:
          pn(
            a,
            i,
            n
          );
          break;
        case 31:
          pn(
            a,
            i,
            n
          ), n && f & 4 && T0(a, i);
          break;
        case 13:
          pn(
            a,
            i,
            n
          ), n && f & 4 && A0(a, i);
          break;
        case 22:
          i.memoizedState === null && pn(
            a,
            i,
            n
          ), $a(i, i.return);
          break;
        case 30:
          break;
        default:
          pn(
            a,
            i,
            n
          );
      }
      t = t.sibling;
    }
  }
  function yr(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Ha(n));
  }
  function vr(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ha(e));
  }
  function kt(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        z0(
          e,
          t,
          n,
          l
        ), t = t.sibling;
  }
  function z0(e, t, n, l) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        kt(
          e,
          t,
          n,
          l
        ), a & 2048 && Wa(9, t);
        break;
      case 1:
        kt(
          e,
          t,
          n,
          l
        );
        break;
      case 3:
        kt(
          e,
          t,
          n,
          l
        ), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ha(e)));
        break;
      case 12:
        if (a & 2048) {
          kt(
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
          } catch (g) {
            Oe(t, t.return, g);
          }
        } else
          kt(
            e,
            t,
            n,
            l
          );
        break;
      case 31:
        kt(
          e,
          t,
          n,
          l
        );
        break;
      case 13:
        kt(
          e,
          t,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        i = t.stateNode, f = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? kt(
          e,
          t,
          n,
          l
        ) : Ia(e, t) : i._visibility & 2 ? kt(
          e,
          t,
          n,
          l
        ) : (i._visibility |= 2, la(
          e,
          t,
          n,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && yr(f, t);
        break;
      case 24:
        kt(
          e,
          t,
          n,
          l
        ), a & 2048 && vr(t.alternate, t);
        break;
      default:
        kt(
          e,
          t,
          n,
          l
        );
    }
  }
  function la(e, t, n, l, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, f = t, o = n, g = l, H = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          la(
            i,
            f,
            o,
            g,
            a
          ), Wa(8, f);
          break;
        case 23:
          break;
        case 22:
          var k = f.stateNode;
          f.memoizedState !== null ? k._visibility & 2 ? la(
            i,
            f,
            o,
            g,
            a
          ) : Ia(
            i,
            f
          ) : (k._visibility |= 2, la(
            i,
            f,
            o,
            g,
            a
          )), a && H & 2048 && yr(
            f.alternate,
            f
          );
          break;
        case 24:
          la(
            i,
            f,
            o,
            g,
            a
          ), a && H & 2048 && vr(f.alternate, f);
          break;
        default:
          la(
            i,
            f,
            o,
            g,
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
            Ia(n, l), a & 2048 && yr(
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
  function aa(e, t, n) {
    if (e.subtreeFlags & Pa)
      for (e = e.child; e !== null; )
        O0(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function O0(e, t, n) {
    switch (e.tag) {
      case 26:
        aa(
          e,
          t,
          n
        ), e.flags & Pa && e.memoizedState !== null && Qy(
          n,
          Jt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        aa(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var l = Jt;
        Jt = Ki(e.stateNode.containerInfo), aa(
          e,
          t,
          n
        ), Jt = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Pa, Pa = 16777216, aa(
          e,
          t,
          n
        ), Pa = l) : aa(
          e,
          t,
          n
        ));
        break;
      default:
        aa(
          e,
          t,
          n
        );
    }
  }
  function R0(e) {
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
          We = l, U0(
            l,
            e
          );
        }
      R0(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        N0(e), e = e.sibling;
  }
  function N0(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        eu(e), e.flags & 2048 && Ln(9, e, e.return);
        break;
      case 3:
        eu(e);
        break;
      case 12:
        eu(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, xi(e)) : eu(e);
        break;
      default:
        eu(e);
    }
  }
  function xi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          We = l, U0(
            l,
            e
          );
        }
      R0(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Ln(8, t, t.return), xi(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, xi(t));
          break;
        default:
          xi(t);
      }
      e = e.sibling;
    }
  }
  function U0(e, t) {
    for (; We !== null; ) {
      var n = We;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Ln(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Ha(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, We = l;
      else
        e: for (n = e; We !== null; ) {
          l = We;
          var a = l.sibling, i = l.return;
          if (E0(l), l === n) {
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
  var Pm = {
    getCacheForType: function(e) {
      var t = lt(Xe), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return lt(Xe).controller.signal;
    }
  }, ey = typeof WeakMap == "function" ? WeakMap : Map, De = 0, xe = null, be = null, Ee = 0, ze = 0, Mt = null, Yn = !1, ua = !1, gr = !1, Sn = 0, we = 0, Gn = 0, _l = 0, pr = 0, Dt = 0, ia = 0, tu = null, vt = null, Sr = !1, ji = 0, x0 = 0, qi = 1 / 0, Bi = null, Vn = null, ke = 0, Xn = null, ca = null, bn = 0, br = 0, _r = null, j0 = null, nu = 0, Er = null;
  function zt() {
    return (De & 2) !== 0 && Ee !== 0 ? Ee & -Ee : M.T !== null ? zr() : Fs();
  }
  function q0() {
    if (Dt === 0)
      if ((Ee & 536870912) === 0 || Te) {
        var e = Xu;
        Xu <<= 1, (Xu & 3932160) === 0 && (Xu = 262144), Dt = e;
      } else Dt = 536870912;
    return e = Tt.current, e !== null && (e.flags |= 32), Dt;
  }
  function gt(e, t, n) {
    (e === xe && (ze === 2 || ze === 9) || e.cancelPendingCommit !== null) && (fa(e, 0), Zn(
      e,
      Ee,
      Dt,
      !1
    )), Ca(e, n), ((De & 2) === 0 || e !== xe) && (e === xe && ((De & 2) === 0 && (_l |= n), we === 4 && Zn(
      e,
      Ee,
      Dt,
      !1
    )), tn(e));
  }
  function B0(e, t, n) {
    if ((De & 6) !== 0) throw Error(r(327));
    var l = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ea(e, t), a = l ? ly(e, t) : Tr(e, t, !0), i = l;
    do {
      if (a === 0) {
        ua && !l && Zn(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, i && !ty(n)) {
          a = Tr(e, t, !1), i = !1;
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
              var g = o.current.memoizedState.isDehydrated;
              if (g && (fa(o, f).flags |= 256), f = Tr(
                o,
                f,
                !1
              ), f !== 2) {
                if (gr && !g) {
                  o.errorRecoveryDisabledLanes |= i, _l |= i, a = 4;
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
          fa(e, 0), Zn(e, t, 0, !0);
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
              Zn(
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
            if (Zn(
              l,
              t,
              Dt,
              !Yn
            ), Ku(l, 0, !0) !== 0) break e;
            bn = t, l.timeoutHandle = h2(
              H0.bind(
                null,
                l,
                n,
                vt,
                Bi,
                Sr,
                t,
                Dt,
                _l,
                ia,
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
          H0(
            l,
            n,
            vt,
            Bi,
            Sr,
            t,
            Dt,
            _l,
            ia,
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
    tn(e);
  }
  function H0(e, t, n, l, a, i, f, o, g, H, k, ee, w, Z) {
    if (e.timeoutHandle = -1, ee = t.subtreeFlags, ee & 8192 || (ee & 16785408) === 16785408) {
      ee = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: an
      }, O0(
        t,
        i,
        ee
      );
      var re = (i & 62914560) === i ? ji - St() : (i & 4194048) === i ? x0 - St() : 0;
      if (re = wy(
        ee,
        re
      ), re !== null) {
        bn = i, e.cancelPendingCommit = re(
          Z0.bind(
            null,
            e,
            t,
            i,
            n,
            l,
            a,
            f,
            o,
            g,
            k,
            ee,
            null,
            w,
            Z
          )
        ), Zn(e, i, f, !H);
        return;
      }
    }
    Z0(
      e,
      t,
      i,
      n,
      l,
      a,
      f,
      o,
      g
    );
  }
  function ty(e) {
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
  function Zn(e, t, n, l) {
    t &= ~pr, t &= ~_l, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var i = 31 - _t(a), f = 1 << i;
      l[i] = -1, a &= ~f;
    }
    n !== 0 && Ks(e, n, t);
  }
  function Hi() {
    return (De & 6) === 0 ? (lu(0), !1) : !0;
  }
  function Cr() {
    if (be !== null) {
      if (ze === 0)
        var e = be.return;
      else
        e = be, rn = dl = null, wf(e), Il = null, wa = 0, e = be;
      for (; e !== null; )
        m0(e.alternate, e), e = e.return;
      be = null;
    }
  }
  function fa(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, _y(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), bn = 0, Cr(), xe = e, be = n = cn(e.current, null), Ee = t, ze = 0, Mt = null, Yn = !1, ua = Ea(e, t), gr = !1, ia = Dt = pr = _l = Gn = we = 0, vt = tu = null, Sr = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var a = 31 - _t(l), i = 1 << a;
        t |= e[a], l &= ~i;
      }
    return Sn = t, ai(), n;
  }
  function Q0(e, t) {
    ve = null, M.H = Ja, t === $l || t === di ? (t = ed(), ze = 3) : t === Df ? (t = ed(), ze = 4) : ze = t === tr ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Mt = t, be === null && (we = 1, Mi(
      e,
      Ht(t, e.current)
    ));
  }
  function w0() {
    var e = Tt.current;
    return e === null ? !0 : (Ee & 4194048) === Ee ? Yt === null : (Ee & 62914560) === Ee || (Ee & 536870912) !== 0 ? e === Yt : !1;
  }
  function L0() {
    var e = M.H;
    return M.H = Ja, e === null ? Ja : e;
  }
  function Y0() {
    var e = M.A;
    return M.A = Pm, e;
  }
  function Qi() {
    we = 4, Yn || (Ee & 4194048) !== Ee && Tt.current !== null || (ua = !0), (Gn & 134217727) === 0 && (_l & 134217727) === 0 || xe === null || Zn(
      xe,
      Ee,
      Dt,
      !1
    );
  }
  function Tr(e, t, n) {
    var l = De;
    De |= 2;
    var a = L0(), i = Y0();
    (xe !== e || Ee !== t) && (Bi = null, fa(e, t)), t = !1;
    var f = we;
    e: do
      try {
        if (ze !== 0 && be !== null) {
          var o = be, g = Mt;
          switch (ze) {
            case 8:
              Cr(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Tt.current === null && (t = !0);
              var H = ze;
              if (ze = 0, Mt = null, ra(e, o, g, H), n && ua) {
                f = 0;
                break e;
              }
              break;
            default:
              H = ze, ze = 0, Mt = null, ra(e, o, g, H);
          }
        }
        ny(), f = we;
        break;
      } catch (k) {
        Q0(e, k);
      }
    while (!0);
    return t && e.shellSuspendCounter++, rn = dl = null, De = l, M.H = a, M.A = i, be === null && (xe = null, Ee = 0, ai()), f;
  }
  function ny() {
    for (; be !== null; ) G0(be);
  }
  function ly(e, t) {
    var n = De;
    De |= 2;
    var l = L0(), a = Y0();
    xe !== e || Ee !== t ? (Bi = null, qi = St() + 500, fa(e, t)) : ua = Ea(
      e,
      t
    );
    e: do
      try {
        if (ze !== 0 && be !== null) {
          t = be;
          var i = Mt;
          t: switch (ze) {
            case 1:
              ze = 0, Mt = null, ra(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (Io(i)) {
                ze = 0, Mt = null, V0(t);
                break;
              }
              t = function() {
                ze !== 2 && ze !== 9 || xe !== e || (ze = 7), tn(e);
              }, i.then(t, t);
              break e;
            case 3:
              ze = 7;
              break e;
            case 4:
              ze = 5;
              break e;
            case 7:
              Io(i) ? (ze = 0, Mt = null, V0(t)) : (ze = 0, Mt = null, ra(e, t, i, 7));
              break;
            case 5:
              var f = null;
              switch (be.tag) {
                case 26:
                  f = be.memoizedState;
                case 5:
                case 27:
                  var o = be;
                  if (f ? z2(f) : o.stateNode.complete) {
                    ze = 0, Mt = null;
                    var g = o.sibling;
                    if (g !== null) be = g;
                    else {
                      var H = o.return;
                      H !== null ? (be = H, wi(H)) : be = null;
                    }
                    break t;
                  }
              }
              ze = 0, Mt = null, ra(e, t, i, 5);
              break;
            case 6:
              ze = 0, Mt = null, ra(e, t, i, 6);
              break;
            case 8:
              Cr(), we = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        ay();
        break;
      } catch (k) {
        Q0(e, k);
      }
    while (!0);
    return rn = dl = null, M.H = l, M.A = a, De = n, be !== null ? 0 : (xe = null, Ee = 0, ai(), we);
  }
  function ay() {
    for (; be !== null && !Qc(); )
      G0(be);
  }
  function G0(e) {
    var t = d0(e.alternate, e, Sn);
    e.memoizedProps = e.pendingProps, t === null ? wi(e) : be = t;
  }
  function V0(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = i0(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Ee
        );
        break;
      case 11:
        t = i0(
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
        m0(n, t), t = be = Yo(t, Sn), t = d0(n, t, Sn);
    }
    e.memoizedProps = e.pendingProps, t === null ? wi(e) : be = t;
  }
  function ra(e, t, n, l) {
    rn = dl = null, wf(t), Il = null, wa = 0;
    var a = t.return;
    try {
      if (Km(
        e,
        a,
        t,
        n,
        Ee
      )) {
        we = 1, Mi(
          e,
          Ht(n, e.current)
        ), be = null;
        return;
      }
    } catch (i) {
      if (a !== null) throw be = a, i;
      we = 1, Mi(
        e,
        Ht(n, e.current)
      ), be = null;
      return;
    }
    t.flags & 32768 ? (Te || l === 1 ? e = !0 : ua || (Ee & 536870912) !== 0 ? e = !1 : (Yn = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Tt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), X0(t, e)) : wi(t);
  }
  function wi(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        X0(
          t,
          Yn
        );
        return;
      }
      e = t.return;
      var n = Fm(
        t.alternate,
        t,
        Sn
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
    we === 0 && (we = 5);
  }
  function X0(e, t) {
    do {
      var n = Wm(e.alternate, e);
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
    we = 6, be = null;
  }
  function Z0(e, t, n, l, a, i, f, o, g) {
    e.cancelPendingCommit = null;
    do
      Li();
    while (ke !== 0);
    if ((De & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (i = t.lanes | t.childLanes, i |= df, Hh(
        e,
        n,
        i,
        f,
        o,
        g
      ), e === xe && (be = xe = null, Ee = 0), ca = t, Xn = e, bn = n, br = i, _r = a, j0 = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, fy(Gu, function() {
        return W0(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = M.T, M.T = null, a = W.p, W.p = 2, f = De, De |= 4;
        try {
          $m(e, t, n);
        } finally {
          De = f, W.p = a, M.T = l;
        }
      }
      ke = 1, K0(), J0(), k0();
    }
  }
  function K0() {
    if (ke === 1) {
      ke = 0;
      var e = Xn, t = ca, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = M.T, M.T = null;
        var l = W.p;
        W.p = 2;
        var a = De;
        De |= 4;
        try {
          M0(t, e);
          var i = Br, f = Uo(e.containerInfo), o = i.focusedElem, g = i.selectionRange;
          if (f !== o && o && o.ownerDocument && No(
            o.ownerDocument.documentElement,
            o
          )) {
            if (g !== null && cf(o)) {
              var H = g.start, k = g.end;
              if (k === void 0 && (k = H), "selectionStart" in o)
                o.selectionStart = H, o.selectionEnd = Math.min(
                  k,
                  o.value.length
                );
              else {
                var ee = o.ownerDocument || document, w = ee && ee.defaultView || window;
                if (w.getSelection) {
                  var Z = w.getSelection(), re = o.textContent.length, me = Math.min(g.start, re), Ue = g.end === void 0 ? me : Math.min(g.end, re);
                  !Z.extend && me > Ue && (f = Ue, Ue = me, me = f);
                  var N = Ro(
                    o,
                    me
                  ), E = Ro(
                    o,
                    Ue
                  );
                  if (N && E && (Z.rangeCount !== 1 || Z.anchorNode !== N.node || Z.anchorOffset !== N.offset || Z.focusNode !== E.node || Z.focusOffset !== E.offset)) {
                    var B = ee.createRange();
                    B.setStart(N.node, N.offset), Z.removeAllRanges(), me > Ue ? (Z.addRange(B), Z.extend(E.node, E.offset)) : (B.setEnd(E.node, E.offset), Z.addRange(B));
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
              var I = ee[o];
              I.element.scrollLeft = I.left, I.element.scrollTop = I.top;
            }
          }
          Ii = !!qr, Br = qr = null;
        } finally {
          De = a, W.p = l, M.T = n;
        }
      }
      e.current = t, ke = 2;
    }
  }
  function J0() {
    if (ke === 2) {
      ke = 0;
      var e = Xn, t = ca, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = M.T, M.T = null;
        var l = W.p;
        W.p = 2;
        var a = De;
        De |= 4;
        try {
          _0(e, t.alternate, t);
        } finally {
          De = a, W.p = l, M.T = n;
        }
      }
      ke = 3;
    }
  }
  function k0() {
    if (ke === 4 || ke === 3) {
      ke = 0, zh();
      var e = Xn, t = ca, n = bn, l = j0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ke = 5 : (ke = 0, ca = Xn = null, F0(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (Vn = null), Yc(n), t = t.stateNode, bt && typeof bt.onCommitFiberRoot == "function")
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
        t = M.T, a = W.p, W.p = 2, M.T = null;
        try {
          for (var i = e.onRecoverableError, f = 0; f < l.length; f++) {
            var o = l[f];
            i(o.value, {
              componentStack: o.stack
            });
          }
        } finally {
          M.T = t, W.p = a;
        }
      }
      (bn & 3) !== 0 && Li(), tn(e), a = e.pendingLanes, (n & 261930) !== 0 && (a & 42) !== 0 ? e === Er ? nu++ : (nu = 0, Er = e) : nu = 0, lu(0);
    }
  }
  function F0(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ha(t)));
  }
  function Li() {
    return K0(), J0(), k0(), W0();
  }
  function W0() {
    if (ke !== 5) return !1;
    var e = Xn, t = br;
    br = 0;
    var n = Yc(bn), l = M.T, a = W.p;
    try {
      W.p = 32 > n ? 32 : n, M.T = null, n = _r, _r = null;
      var i = Xn, f = bn;
      if (ke = 0, ca = Xn = null, bn = 0, (De & 6) !== 0) throw Error(r(331));
      var o = De;
      if (De |= 4, N0(i.current), z0(
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
      W.p = a, M.T = l, F0(e, t);
    }
  }
  function $0(e, t, n) {
    t = Ht(n, t), t = er(e.stateNode, t, 2), e = Hn(e, t, 2), e !== null && (Ca(e, 2), tn(e));
  }
  function Oe(e, t, n) {
    if (e.tag === 3)
      $0(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          $0(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Vn === null || !Vn.has(l))) {
            e = Ht(n, e), n = Id(2), l = Hn(t, n, 2), l !== null && (Pd(
              n,
              l,
              t,
              e
            ), Ca(l, 2), tn(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ar(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new ey();
      var a = /* @__PURE__ */ new Set();
      l.set(t, a);
    } else
      a = l.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), l.set(t, a));
    a.has(n) || (gr = !0, a.add(n), e = uy.bind(null, e, t, n), t.then(e, e));
  }
  function uy(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, xe === e && (Ee & n) === n && (we === 4 || we === 3 && (Ee & 62914560) === Ee && 300 > St() - ji ? (De & 2) === 0 && fa(e, 0) : pr |= n, ia === Ee && (ia = 0)), tn(e);
  }
  function I0(e, t) {
    t === 0 && (t = Zs()), e = rl(e, t), e !== null && (Ca(e, t), tn(e));
  }
  function iy(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), I0(e, n);
  }
  function cy(e, t) {
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
    l !== null && l.delete(t), I0(e, n);
  }
  function fy(e, t) {
    return ba(e, t);
  }
  var Yi = null, sa = null, Mr = !1, Gi = !1, Dr = !1, Kn = 0;
  function tn(e) {
    e !== sa && e.next === null && (sa === null ? Yi = sa = e : sa = sa.next = e), Gi = !0, Mr || (Mr = !0, sy());
  }
  function lu(e, t) {
    if (!Dr && Gi) {
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
            i !== 0 && (n = !0, n2(l, i));
          } else
            i = Ee, i = Ku(
              l,
              l === xe ? i : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (i & 3) === 0 || Ea(l, i) || (n = !0, n2(l, i));
          l = l.next;
        }
      while (n);
      Dr = !1;
    }
  }
  function ry() {
    P0();
  }
  function P0() {
    Gi = Mr = !1;
    var e = 0;
    Kn !== 0 && by() && (e = Kn);
    for (var t = St(), n = null, l = Yi; l !== null; ) {
      var a = l.next, i = e2(l, t);
      i === 0 ? (l.next = null, n === null ? Yi = a : n.next = a, a === null && (sa = n)) : (n = l, (e !== 0 || (i & 3) !== 0) && (Gi = !0)), l = a;
    }
    ke !== 0 && ke !== 5 || lu(e), Kn !== 0 && (Kn = 0);
  }
  function e2(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var f = 31 - _t(i), o = 1 << f, g = a[f];
      g === -1 ? ((o & n) === 0 || (o & l) !== 0) && (a[f] = Bh(o, t)) : g <= t && (e.expiredLanes |= o), i &= ~o;
    }
    if (t = xe, n = Ee, n = Ku(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, n === 0 || e === t && (ze === 2 || ze === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Rl(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Ea(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (l !== null && Rl(l), Yc(n)) {
        case 2:
        case 8:
          n = Vs;
          break;
        case 32:
          n = Gu;
          break;
        case 268435456:
          n = Xs;
          break;
        default:
          n = Gu;
      }
      return l = t2.bind(null, e), n = ba(n, l), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return l !== null && l !== null && Rl(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function t2(e, t) {
    if (ke !== 0 && ke !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Li() && e.callbackNode !== n)
      return null;
    var l = Ee;
    return l = Ku(
      e,
      e === xe ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (B0(e, l, t), e2(e, St()), e.callbackNode != null && e.callbackNode === n ? t2.bind(null, e) : null);
  }
  function n2(e, t) {
    if (Li()) return null;
    B0(e, t, !0);
  }
  function sy() {
    Ey(function() {
      (De & 6) !== 0 ? ba(
        Gs,
        ry
      ) : P0();
    });
  }
  function zr() {
    if (Kn === 0) {
      var e = Fl;
      e === 0 && (e = Vu, Vu <<= 1, (Vu & 261888) === 0 && (Vu = 256)), Kn = e;
    }
    return Kn;
  }
  function l2(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Wu("" + e);
  }
  function a2(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function oy(e, t, n, l, a) {
    if (t === "submit" && n && n.stateNode === a) {
      var i = l2(
        (a[ot] || null).action
      ), f = l.submitter;
      f && (t = (t = f[ot] || null) ? l2(t.formAction) : f.getAttribute("formAction"), t !== null && (i = t, f = null));
      var o = new ei(
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
                if (Kn !== 0) {
                  var g = f ? a2(a, f) : new FormData(a);
                  kf(
                    n,
                    {
                      pending: !0,
                      data: g,
                      method: a.method,
                      action: i
                    },
                    null,
                    g
                  );
                }
              } else
                typeof i == "function" && (o.preventDefault(), g = f ? a2(a, f) : new FormData(a), kf(
                  n,
                  {
                    pending: !0,
                    data: g,
                    method: a.method,
                    action: i
                  },
                  i,
                  g
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var Or = 0; Or < of.length; Or++) {
    var Rr = of[Or], dy = Rr.toLowerCase(), hy = Rr[0].toUpperCase() + Rr.slice(1);
    Kt(
      dy,
      "on" + hy
    );
  }
  Kt(qo, "onAnimationEnd"), Kt(Bo, "onAnimationIteration"), Kt(Ho, "onAnimationStart"), Kt("dblclick", "onDoubleClick"), Kt("focusin", "onFocus"), Kt("focusout", "onBlur"), Kt(Om, "onTransitionRun"), Kt(Rm, "onTransitionStart"), Kt(Nm, "onTransitionCancel"), Kt(Qo, "onTransitionEnd"), ql("onMouseEnter", ["mouseout", "mouseover"]), ql("onMouseLeave", ["mouseout", "mouseover"]), ql("onPointerEnter", ["pointerout", "pointerover"]), ql("onPointerLeave", ["pointerout", "pointerover"]), ul(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ul(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ul("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ul(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ul(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ul(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var au = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), my = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(au)
  );
  function u2(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n], a = l.event;
      l = l.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var f = l.length - 1; 0 <= f; f--) {
            var o = l[f], g = o.instance, H = o.currentTarget;
            if (o = o.listener, g !== i && a.isPropagationStopped())
              break e;
            i = o, a.currentTarget = H;
            try {
              i(a);
            } catch (k) {
              li(k);
            }
            a.currentTarget = null, i = g;
          }
        else
          for (f = 0; f < l.length; f++) {
            if (o = l[f], g = o.instance, H = o.currentTarget, o = o.listener, g !== i && a.isPropagationStopped())
              break e;
            i = o, a.currentTarget = H;
            try {
              i(a);
            } catch (k) {
              li(k);
            }
            a.currentTarget = null, i = g;
          }
      }
    }
  }
  function _e(e, t) {
    var n = t[Gc];
    n === void 0 && (n = t[Gc] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    n.has(l) || (i2(t, e, 2, !1), n.add(l));
  }
  function Nr(e, t, n) {
    var l = 0;
    t && (l |= 4), i2(
      n,
      e,
      l,
      t
    );
  }
  var Vi = "_reactListening" + Math.random().toString(36).slice(2);
  function Ur(e) {
    if (!e[Vi]) {
      e[Vi] = !0, Is.forEach(function(n) {
        n !== "selectionchange" && (my.has(n) || Nr(n, !1, e), Nr(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Vi] || (t[Vi] = !0, Nr("selectionchange", !1, t));
    }
  }
  function i2(e, t, n, l) {
    switch (q2(t)) {
      case 2:
        var a = Gy;
        break;
      case 8:
        a = Vy;
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
  function xr(e, t, n, l, a) {
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
              var g = f.tag;
              if ((g === 3 || g === 4) && f.stateNode.containerInfo === a)
                return;
              f = f.return;
            }
          for (; o !== null; ) {
            if (f = Ul(o), f === null) return;
            if (g = f.tag, g === 5 || g === 6 || g === 26 || g === 27) {
              l = i = f;
              continue e;
            }
            o = o.parentNode;
          }
        }
        l = l.return;
      }
    so(function() {
      var H = i, k = Fc(n), ee = [];
      e: {
        var w = wo.get(e);
        if (w !== void 0) {
          var Z = ei, re = e;
          switch (e) {
            case "keypress":
              if (Iu(n) === 0) break e;
            case "keydown":
            case "keyup":
              Z = cm;
              break;
            case "focusin":
              re = "focus", Z = tf;
              break;
            case "focusout":
              re = "blur", Z = tf;
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
              Z = Fh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = sm;
              break;
            case qo:
            case Bo:
            case Ho:
              Z = Ih;
              break;
            case Qo:
              Z = dm;
              break;
            case "scroll":
            case "scrollend":
              Z = Jh;
              break;
            case "wheel":
              Z = mm;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = em;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = vo;
              break;
            case "toggle":
            case "beforetoggle":
              Z = vm;
          }
          var me = (t & 4) !== 0, Ue = !me && (e === "scroll" || e === "scrollend"), N = me ? w !== null ? w + "Capture" : null : w;
          me = [];
          for (var E = H, B; E !== null; ) {
            var I = E;
            if (B = I.stateNode, I = I.tag, I !== 5 && I !== 26 && I !== 27 || B === null || N === null || (I = Ma(E, N), I != null && me.push(
              uu(E, I, B)
            )), Ue) break;
            E = E.return;
          }
          0 < me.length && (w = new Z(
            w,
            re,
            null,
            n,
            k
          ), ee.push({ event: w, listeners: me }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (w = e === "mouseover" || e === "pointerover", Z = e === "mouseout" || e === "pointerout", w && n !== kc && (re = n.relatedTarget || n.fromElement) && (Ul(re) || re[Nl]))
            break e;
          if ((Z || w) && (w = k.window === k ? k : (w = k.ownerDocument) ? w.defaultView || w.parentWindow : window, Z ? (re = n.relatedTarget || n.toElement, Z = H, re = re ? Ul(re) : null, re !== null && (Ue = h(re), me = re.tag, re !== Ue || me !== 5 && me !== 27 && me !== 6) && (re = null)) : (Z = null, re = H), Z !== re)) {
            if (me = mo, I = "onMouseLeave", N = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (me = vo, I = "onPointerLeave", N = "onPointerEnter", E = "pointer"), Ue = Z == null ? w : Aa(Z), B = re == null ? w : Aa(re), w = new me(
              I,
              E + "leave",
              Z,
              n,
              k
            ), w.target = Ue, w.relatedTarget = B, I = null, Ul(k) === H && (me = new me(
              N,
              E + "enter",
              re,
              n,
              k
            ), me.target = B, me.relatedTarget = Ue, I = me), Ue = I, Z && re)
              t: {
                for (me = yy, N = Z, E = re, B = 0, I = N; I; I = me(I))
                  B++;
                I = 0;
                for (var he = E; he; he = me(he))
                  I++;
                for (; 0 < B - I; )
                  N = me(N), B--;
                for (; 0 < I - B; )
                  E = me(E), I--;
                for (; B--; ) {
                  if (N === E || E !== null && N === E.alternate) {
                    me = N;
                    break t;
                  }
                  N = me(N), E = me(E);
                }
                me = null;
              }
            else me = null;
            Z !== null && c2(
              ee,
              w,
              Z,
              me,
              !1
            ), re !== null && Ue !== null && c2(
              ee,
              Ue,
              re,
              me,
              !0
            );
          }
        }
        e: {
          if (w = H ? Aa(H) : window, Z = w.nodeName && w.nodeName.toLowerCase(), Z === "select" || Z === "input" && w.type === "file")
            var Ae = To;
          else if (Eo(w))
            if (Ao)
              Ae = Mm;
            else {
              Ae = Tm;
              var oe = Cm;
            }
          else
            Z = w.nodeName, !Z || Z.toLowerCase() !== "input" || w.type !== "checkbox" && w.type !== "radio" ? H && Jc(H.elementType) && (Ae = To) : Ae = Am;
          if (Ae && (Ae = Ae(e, H))) {
            Co(
              ee,
              Ae,
              n,
              k
            );
            break e;
          }
          oe && oe(e, w, H), e === "focusout" && H && w.type === "number" && H.memoizedProps.value != null && Kc(w, "number", w.value);
        }
        switch (oe = H ? Aa(H) : window, e) {
          case "focusin":
            (Eo(oe) || oe.contentEditable === "true") && (Yl = oe, ff = H, ja = null);
            break;
          case "focusout":
            ja = ff = Yl = null;
            break;
          case "mousedown":
            rf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            rf = !1, xo(ee, n, k);
            break;
          case "selectionchange":
            if (zm) break;
          case "keydown":
          case "keyup":
            xo(ee, n, k);
        }
        var ge;
        if (lf)
          e: {
            switch (e) {
              case "compositionstart":
                var Ce = "onCompositionStart";
                break e;
              case "compositionend":
                Ce = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ce = "onCompositionUpdate";
                break e;
            }
            Ce = void 0;
          }
        else
          Ll ? bo(e, n) && (Ce = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Ce = "onCompositionStart");
        Ce && (go && n.locale !== "ko" && (Ll || Ce !== "onCompositionStart" ? Ce === "onCompositionEnd" && Ll && (ge = oo()) : (Rn = k, Ic = "value" in Rn ? Rn.value : Rn.textContent, Ll = !0)), oe = Xi(H, Ce), 0 < oe.length && (Ce = new yo(
          Ce,
          e,
          null,
          n,
          k
        ), ee.push({ event: Ce, listeners: oe }), ge ? Ce.data = ge : (ge = _o(n), ge !== null && (Ce.data = ge)))), (ge = pm ? Sm(e, n) : bm(e, n)) && (Ce = Xi(H, "onBeforeInput"), 0 < Ce.length && (oe = new yo(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          k
        ), ee.push({
          event: oe,
          listeners: Ce
        }), oe.data = ge)), oy(
          ee,
          e,
          H,
          n,
          k
        );
      }
      u2(ee, t);
    });
  }
  function uu(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Xi(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var a = e, i = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || i === null || (a = Ma(e, n), a != null && l.unshift(
        uu(e, a, i)
      ), a = Ma(e, t), a != null && l.push(
        uu(e, a, i)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function yy(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function c2(e, t, n, l, a) {
    for (var i = t._reactName, f = []; n !== null && n !== l; ) {
      var o = n, g = o.alternate, H = o.stateNode;
      if (o = o.tag, g !== null && g === l) break;
      o !== 5 && o !== 26 && o !== 27 || H === null || (g = H, a ? (H = Ma(n, i), H != null && f.unshift(
        uu(n, H, g)
      )) : a || (H = Ma(n, i), H != null && f.push(
        uu(n, H, g)
      ))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var vy = /\r\n?/g, gy = /\u0000|\uFFFD/g;
  function f2(e) {
    return (typeof e == "string" ? e : "" + e).replace(vy, `
`).replace(gy, "");
  }
  function r2(e, t) {
    return t = f2(t), f2(e) === t;
  }
  function Ne(e, t, n, l, a, i) {
    switch (n) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Hl(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Hl(e, "" + l);
        break;
      case "className":
        ku(e, "class", l);
        break;
      case "tabIndex":
        ku(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ku(e, n, l);
        break;
      case "style":
        fo(e, l, i);
        break;
      case "data":
        if (t !== "object") {
          ku(e, "data", l);
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
        l = Wu("" + l), e.setAttribute(n, l);
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
        l = Wu("" + l), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = an);
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
        n = Wu("" + l), e.setAttributeNS(
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
        _e("beforetoggle", e), _e("toggle", e), Ju(e, "popover", l);
        break;
      case "xlinkActuate":
        ln(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        ln(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        ln(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        ln(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        ln(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        ln(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        ln(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        ln(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        ln(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Ju(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Zh.get(n) || n, Ju(e, n, l));
    }
  }
  function jr(e, t, n, l, a, i) {
    switch (n) {
      case "style":
        fo(e, l, i);
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
        typeof l == "string" ? Hl(e, l) : (typeof l == "number" || typeof l == "bigint") && Hl(e, "" + l);
        break;
      case "onScroll":
        l != null && _e("scroll", e);
        break;
      case "onScrollEnd":
        l != null && _e("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = an);
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
        if (!Ps.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), i = e[ot] || null, i = i != null ? i[n] : null, typeof i == "function" && e.removeEventListener(t, i, a), typeof l == "function")) {
              typeof i != "function" && i !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, a);
              break e;
            }
            n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : Ju(e, n, l);
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
        var o = i = f = a = null, g = null, H = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var k = n[l];
            if (k != null)
              switch (l) {
                case "name":
                  a = k;
                  break;
                case "type":
                  f = k;
                  break;
                case "checked":
                  g = k;
                  break;
                case "defaultChecked":
                  H = k;
                  break;
                case "value":
                  i = k;
                  break;
                case "defaultValue":
                  o = k;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (k != null)
                    throw Error(r(137, t));
                  break;
                default:
                  Ne(e, t, l, k, n, null);
              }
          }
        ao(
          e,
          i,
          o,
          g,
          H,
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
        t = i, n = f, e.multiple = !!l, t != null ? Bl(e, !!l, t, !1) : n != null && Bl(e, !!l, n, !0);
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
        io(e, l, a, i);
        return;
      case "option":
        for (g in n)
          n.hasOwnProperty(g) && (l = n[g], l != null) && (g === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : Ne(e, t, g, l, n, null));
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
        for (H in n)
          if (n.hasOwnProperty(H) && (l = n[H], l != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                Ne(e, t, H, l, n, null);
            }
        return;
      default:
        if (Jc(t)) {
          for (k in n)
            n.hasOwnProperty(k) && (l = n[k], l !== void 0 && jr(
              e,
              t,
              k,
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
  function py(e, t, n, l) {
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
        var a = null, i = null, f = null, o = null, g = null, H = null, k = null;
        for (Z in n) {
          var ee = n[Z];
          if (n.hasOwnProperty(Z) && ee != null)
            switch (Z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = ee;
              default:
                l.hasOwnProperty(Z) || Ne(e, t, Z, null, l, ee);
            }
        }
        for (var w in l) {
          var Z = l[w];
          if (ee = n[w], l.hasOwnProperty(w) && (Z != null || ee != null))
            switch (w) {
              case "type":
                i = Z;
                break;
              case "name":
                a = Z;
                break;
              case "checked":
                H = Z;
                break;
              case "defaultChecked":
                k = Z;
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
                  w,
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
          g,
          H,
          k,
          i,
          a
        );
        return;
      case "select":
        Z = f = o = w = null;
        for (i in n)
          if (g = n[i], n.hasOwnProperty(i) && g != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                Z = g;
              default:
                l.hasOwnProperty(i) || Ne(
                  e,
                  t,
                  i,
                  null,
                  l,
                  g
                );
            }
        for (a in l)
          if (i = l[a], g = n[a], l.hasOwnProperty(a) && (i != null || g != null))
            switch (a) {
              case "value":
                w = i;
                break;
              case "defaultValue":
                o = i;
                break;
              case "multiple":
                f = i;
              default:
                i !== g && Ne(
                  e,
                  t,
                  a,
                  i,
                  l,
                  g
                );
            }
        t = o, n = f, l = Z, w != null ? Bl(e, !!n, w, !1) : !!l != !!n && (t != null ? Bl(e, !!n, t, !0) : Bl(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        Z = w = null;
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
                w = a;
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
        uo(e, w, Z);
        return;
      case "option":
        for (var re in n)
          w = n[re], n.hasOwnProperty(re) && w != null && !l.hasOwnProperty(re) && (re === "selected" ? e.selected = !1 : Ne(
            e,
            t,
            re,
            null,
            l,
            w
          ));
        for (g in l)
          w = l[g], Z = n[g], l.hasOwnProperty(g) && w !== Z && (w != null || Z != null) && (g === "selected" ? e.selected = w && typeof w != "function" && typeof w != "symbol" : Ne(
            e,
            t,
            g,
            w,
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
        for (var me in n)
          w = n[me], n.hasOwnProperty(me) && w != null && !l.hasOwnProperty(me) && Ne(e, t, me, null, l, w);
        for (H in l)
          if (w = l[H], Z = n[H], l.hasOwnProperty(H) && w !== Z && (w != null || Z != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null)
                  throw Error(r(137, t));
                break;
              default:
                Ne(
                  e,
                  t,
                  H,
                  w,
                  l,
                  Z
                );
            }
        return;
      default:
        if (Jc(t)) {
          for (var Ue in n)
            w = n[Ue], n.hasOwnProperty(Ue) && w !== void 0 && !l.hasOwnProperty(Ue) && jr(
              e,
              t,
              Ue,
              void 0,
              l,
              w
            );
          for (k in l)
            w = l[k], Z = n[k], !l.hasOwnProperty(k) || w === Z || w === void 0 && Z === void 0 || jr(
              e,
              t,
              k,
              w,
              l,
              Z
            );
          return;
        }
    }
    for (var N in n)
      w = n[N], n.hasOwnProperty(N) && w != null && !l.hasOwnProperty(N) && Ne(e, t, N, null, l, w);
    for (ee in l)
      w = l[ee], Z = n[ee], !l.hasOwnProperty(ee) || w === Z || w == null && Z == null || Ne(e, t, ee, w, l, Z);
  }
  function s2(e) {
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
  function Sy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
        var a = n[l], i = a.transferSize, f = a.initiatorType, o = a.duration;
        if (i && o && s2(f)) {
          for (f = 0, o = a.responseEnd, l += 1; l < n.length; l++) {
            var g = n[l], H = g.startTime;
            if (H > o) break;
            var k = g.transferSize, ee = g.initiatorType;
            k && s2(ee) && (g = g.responseEnd, f += k * (g < o ? 1 : (o - H) / (g - H)));
          }
          if (--l, t += 8 * (i + f) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var qr = null, Br = null;
  function Zi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function o2(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function d2(e, t) {
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
  function Hr(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Qr = null;
  function by() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Qr ? !1 : (Qr = e, !0) : (Qr = null, !1);
  }
  var h2 = typeof setTimeout == "function" ? setTimeout : void 0, _y = typeof clearTimeout == "function" ? clearTimeout : void 0, m2 = typeof Promise == "function" ? Promise : void 0, Ey = typeof queueMicrotask == "function" ? queueMicrotask : typeof m2 < "u" ? function(e) {
    return m2.resolve(null).then(e).catch(Cy);
  } : h2;
  function Cy(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Jn(e) {
    return e === "head";
  }
  function y2(e, t) {
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
            i[Ta] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && i.rel.toLowerCase() === "stylesheet" || n.removeChild(i), i = f;
          }
        } else
          n === "body" && iu(e.ownerDocument.body);
      n = a;
    } while (n);
    ma(t);
  }
  function v2(e, t) {
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
  function Ty(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var a = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[Ta])
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
  function Ay(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Gt(e.nextSibling), e === null)) return null;
    return e;
  }
  function g2(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Gt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Lr(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Yr(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function My(e, t) {
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
  function p2(e) {
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
  function S2(e) {
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
  function b2(e, t, n) {
    switch (t = Zi(n), e) {
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
  var Vt = /* @__PURE__ */ new Map(), _2 = /* @__PURE__ */ new Set();
  function Ki(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var _n = W.d;
  W.d = {
    f: Dy,
    r: zy,
    D: Oy,
    C: Ry,
    L: Ny,
    m: Uy,
    X: jy,
    S: xy,
    M: qy
  };
  function Dy() {
    var e = _n.f(), t = Hi();
    return e || t;
  }
  function zy(e) {
    var t = xl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Qd(t) : _n.r(e);
  }
  var oa = typeof document > "u" ? null : document;
  function E2(e, t, n) {
    var l = oa;
    if (l && typeof t == "string" && t) {
      var a = qt(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof n == "string" && (a += '[crossorigin="' + n + '"]'), _2.has(a) || (_2.add(a), e = { rel: e, crossOrigin: n, href: t }, l.querySelector(a) === null && (t = l.createElement("link"), ut(t, "link", e), Fe(t), l.head.appendChild(t)));
    }
  }
  function Oy(e) {
    _n.D(e), E2("dns-prefetch", e, null);
  }
  function Ry(e, t) {
    _n.C(e, t), E2("preconnect", e, t);
  }
  function Ny(e, t, n) {
    _n.L(e, t, n);
    var l = oa;
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
          i = da(e);
          break;
        case "script":
          i = ha(e);
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
  function Uy(e, t) {
    _n.m(e, t);
    var n = oa;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + qt(l) + '"][href="' + qt(e) + '"]', i = a;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = ha(e);
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
  function xy(e, t, n) {
    _n.S(e, t, n);
    var l = oa;
    if (l && e) {
      var a = jl(l).hoistableStyles, i = da(e);
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
          var g = f = l.createElement("link");
          Fe(g), ut(g, "link", e), g._p = new Promise(function(H, k) {
            g.onload = H, g.onerror = k;
          }), g.addEventListener("load", function() {
            o.loading |= 1;
          }), g.addEventListener("error", function() {
            o.loading |= 2;
          }), o.loading |= 4, Ji(f, t, l);
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
  function jy(e, t) {
    _n.X(e, t);
    var n = oa;
    if (n && e) {
      var l = jl(n).hoistableScripts, a = ha(e), i = l.get(a);
      i || (i = n.querySelector(fu(a)), i || (e = S({ src: e, async: !0 }, t), (t = Vt.get(a)) && Xr(e, t), i = n.createElement("script"), Fe(i), ut(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, l.set(a, i));
    }
  }
  function qy(e, t) {
    _n.M(e, t);
    var n = oa;
    if (n && e) {
      var l = jl(n).hoistableScripts, a = ha(e), i = l.get(a);
      i || (i = n.querySelector(fu(a)), i || (e = S({ src: e, async: !0, type: "module" }, t), (t = Vt.get(a)) && Xr(e, t), i = n.createElement("script"), Fe(i), ut(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, l.set(a, i));
    }
  }
  function C2(e, t, n, l) {
    var a = (a = se.current) ? Ki(a) : null;
    if (!a) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = da(n.href), n = jl(
          a
        ).hoistableStyles, l = n.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = da(n.href);
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
          }, Vt.set(e, n), i || By(
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
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ha(n), n = jl(
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
  function da(e) {
    return 'href="' + qt(e) + '"';
  }
  function cu(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function T2(e) {
    return S({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function By(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), ut(t, "link", n), Fe(t), e.head.appendChild(t));
  }
  function ha(e) {
    return '[src="' + qt(e) + '"]';
  }
  function fu(e) {
    return "script[async]" + e;
  }
  function A2(e, t, n) {
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
          ), Fe(l), ut(l, "style", a), Ji(l, n.precedence, e), t.instance = l;
        case "stylesheet":
          a = da(n.href);
          var i = e.querySelector(
            cu(a)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, Fe(i), i;
          l = T2(n), (a = Vt.get(a)) && Vr(l, a), i = (e.ownerDocument || e).createElement("link"), Fe(i);
          var f = i;
          return f._p = new Promise(function(o, g) {
            f.onload = o, f.onerror = g;
          }), ut(i, "link", l), t.state.loading |= 4, Ji(i, n.precedence, e), t.instance = i;
        case "script":
          return i = ha(n.src), (a = e.querySelector(
            fu(i)
          )) ? (t.instance = a, Fe(a), a) : (l = n, (a = Vt.get(i)) && (l = S({}, n), Xr(l, a)), e = e.ownerDocument || e, a = e.createElement("script"), Fe(a), ut(a, "link", l), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Ji(l, n.precedence, e));
    return t.instance;
  }
  function Ji(e, t, n) {
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
  var ki = null;
  function M2(e, t, n) {
    if (ki === null) {
      var l = /* @__PURE__ */ new Map(), a = ki = /* @__PURE__ */ new Map();
      a.set(n, l);
    } else
      a = ki, l = a.get(n), l || (l = /* @__PURE__ */ new Map(), a.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
      var i = n[a];
      if (!(i[Ta] || i[tt] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = i.getAttribute(t) || "";
        f = e + f;
        var o = l.get(f);
        o ? o.push(i) : l.set(f, [i]);
      }
    }
    return l;
  }
  function D2(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Hy(e, t, n) {
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
  function z2(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Qy(e, t, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var a = da(l.href), i = t.querySelector(
          cu(a)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Fi.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, Fe(i);
          return;
        }
        i = t.ownerDocument || t, l = T2(l), (a = Vt.get(a)) && Vr(l, a), i = i.createElement("link"), Fe(i);
        var f = i;
        f._p = new Promise(function(o, g) {
          f.onload = o, f.onerror = g;
        }), ut(i, "link", l), n.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Fi.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Zr = 0;
  function wy(e, t) {
    return e.stylesheets && e.count === 0 && $i(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var l = setTimeout(function() {
        if (e.stylesheets && $i(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Zr === 0 && (Zr = 62500 * Sy());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && $i(e, e.stylesheets), e.unsuspend)) {
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
  function Fi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) $i(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Wi = null;
  function $i(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Wi = /* @__PURE__ */ new Map(), t.forEach(Ly, e), Wi = null, Fi.call(e));
  }
  function Ly(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Wi.get(e);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Wi.set(e, n);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < a.length; i++) {
          var f = a[i];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), l = f);
        }
        l && n.set(null, l);
      }
      a = t.instance, f = a.getAttribute("data-precedence"), i = n.get(f) || l, i === l && n.set(null, a), n.set(f, a), this.count++, l = Fi.bind(this), a.addEventListener("load", l), a.addEventListener("error", l), i ? i.parentNode.insertBefore(a, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ru = {
    $$typeof: b,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0
  };
  function Yy(e, t, n, l, a, i, f, o, g) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = wc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wc(0), this.hiddenUpdates = wc(null), this.identifierPrefix = l, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = g, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function O2(e, t, n, l, a, i, f, o, g, H, k, ee) {
    return e = new Yy(
      e,
      t,
      n,
      f,
      g,
      H,
      k,
      ee,
      o
    ), t = 1, i === !0 && (t |= 24), i = Ct(3, null, null, t), e.current = i, i.stateNode = e, t = Tf(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, zf(i), e;
  }
  function R2(e) {
    return e ? (e = Xl, e) : Xl;
  }
  function N2(e, t, n, l, a, i) {
    a = R2(a), l.context === null ? l.context = a : l.pendingContext = a, l = Bn(t), l.payload = { element: n }, i = i === void 0 ? null : i, i !== null && (l.callback = i), n = Hn(e, l, t), n !== null && (gt(n, e, t), Ya(n, e, t));
  }
  function U2(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Kr(e, t) {
    U2(e, t), (e = e.alternate) && U2(e, t);
  }
  function x2(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = rl(e, 67108864);
      t !== null && gt(t, e, 67108864), Kr(e, 67108864);
    }
  }
  function j2(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = zt();
      t = Lc(t);
      var n = rl(e, t);
      n !== null && gt(n, e, t), Kr(e, t);
    }
  }
  var Ii = !0;
  function Gy(e, t, n, l) {
    var a = M.T;
    M.T = null;
    var i = W.p;
    try {
      W.p = 2, Jr(e, t, n, l);
    } finally {
      W.p = i, M.T = a;
    }
  }
  function Vy(e, t, n, l) {
    var a = M.T;
    M.T = null;
    var i = W.p;
    try {
      W.p = 8, Jr(e, t, n, l);
    } finally {
      W.p = i, M.T = a;
    }
  }
  function Jr(e, t, n, l) {
    if (Ii) {
      var a = kr(l);
      if (a === null)
        xr(
          e,
          t,
          l,
          Pi,
          n
        ), B2(e, l);
      else if (Zy(
        a,
        e,
        t,
        n,
        l
      ))
        l.stopPropagation();
      else if (B2(e, l), t & 4 && -1 < Xy.indexOf(e)) {
        for (; a !== null; ) {
          var i = xl(a);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var f = al(i.pendingLanes);
                  if (f !== 0) {
                    var o = i;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; f; ) {
                      var g = 1 << 31 - _t(f);
                      o.entanglements[1] |= g, f &= ~g;
                    }
                    tn(i), (De & 6) === 0 && (qi = St() + 500, lu(0));
                  }
                }
                break;
              case 31:
              case 13:
                o = rl(i, 2), o !== null && gt(o, i, 2), Hi(), Kr(i, 2);
            }
          if (i = kr(l), i === null && xr(
            e,
            t,
            l,
            Pi,
            n
          ), i === a) break;
          a = i;
        }
        a !== null && l.stopPropagation();
      } else
        xr(
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
  var Pi = null;
  function Fr(e) {
    if (Pi = null, e = Ul(e), e !== null) {
      var t = h(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = p(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = D(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Pi = e, null;
  }
  function q2(e) {
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
        switch (Oh()) {
          case Gs:
            return 2;
          case Vs:
            return 8;
          case Gu:
          case Rh:
            return 32;
          case Xs:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Wr = !1, kn = null, Fn = null, Wn = null, su = /* @__PURE__ */ new Map(), ou = /* @__PURE__ */ new Map(), $n = [], Xy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function B2(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        kn = null;
        break;
      case "dragenter":
      case "dragleave":
        Fn = null;
        break;
      case "mouseover":
      case "mouseout":
        Wn = null;
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
    }, t !== null && (t = xl(t), t !== null && x2(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function Zy(e, t, n, l, a) {
    switch (t) {
      case "focusin":
        return kn = du(
          kn,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "dragenter":
        return Fn = du(
          Fn,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "mouseover":
        return Wn = du(
          Wn,
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
  function H2(e) {
    var t = Ul(e.target);
    if (t !== null) {
      var n = h(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = p(n), t !== null) {
            e.blockedOn = t, Ws(e.priority, function() {
              j2(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = D(n), t !== null) {
            e.blockedOn = t, Ws(e.priority, function() {
              j2(n);
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
  function ec(e) {
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
        return t = xl(n), t !== null && x2(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Q2(e, t, n) {
    ec(e) && n.delete(t);
  }
  function Ky() {
    Wr = !1, kn !== null && ec(kn) && (kn = null), Fn !== null && ec(Fn) && (Fn = null), Wn !== null && ec(Wn) && (Wn = null), su.forEach(Q2), ou.forEach(Q2);
  }
  function tc(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Wr || (Wr = !0, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      Ky
    )));
  }
  var nc = null;
  function w2(e) {
    nc !== e && (nc = e, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      function() {
        nc === e && (nc = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], a = e[t + 2];
          if (typeof l != "function") {
            if (Fr(l || n) === null)
              continue;
            break;
          }
          var i = xl(n);
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
    function t(g) {
      return tc(g, e);
    }
    kn !== null && tc(kn, e), Fn !== null && tc(Fn, e), Wn !== null && tc(Wn, e), su.forEach(t), ou.forEach(t);
    for (var n = 0; n < $n.length; n++) {
      var l = $n[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < $n.length && (n = $n[0], n.blockedOn === null); )
      H2(n), n.blockedOn === null && $n.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var a = n[l], i = n[l + 1], f = a[ot] || null;
        if (typeof i == "function")
          f || w2(n);
        else if (f) {
          var o = null;
          if (i && i.hasAttribute("formAction")) {
            if (a = i, f = i[ot] || null)
              o = f.formAction;
            else if (Fr(a) !== null) continue;
          } else o = f.action;
          typeof o == "function" ? n[l + 1] = o : (n.splice(l, 3), l -= 3), w2(n);
        }
      }
  }
  function L2() {
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
  lc.prototype.render = $r.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var n = t.current, l = zt();
    N2(n, l, e, t, null, null);
  }, lc.prototype.unmount = $r.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      N2(e.current, 2, null, e, null, null), Hi(), t[Nl] = null;
    }
  };
  function lc(e) {
    this._internalRoot = e;
  }
  lc.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Fs();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < $n.length && t !== 0 && t < $n[n].priority; n++) ;
      $n.splice(n, 0, e), n === 0 && H2(e);
    }
  };
  var Y2 = c.version;
  if (Y2 !== "19.2.3")
    throw Error(
      r(
        527,
        Y2,
        "19.2.3"
      )
    );
  W.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = m(t), e = e !== null ? j(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Jy = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ac.isDisabled && ac.supportsFiber)
      try {
        _a = ac.inject(
          Jy
        ), bt = ac;
      } catch {
      }
  }
  return hu.createRoot = function(e, t) {
    if (!d(e)) throw Error(r(299));
    var n = !1, l = "", a = kd, i = Fd, f = Wd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = O2(
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
      L2
    ), e[Nl] = t.current, Ur(e), new $r(t);
  }, hu.hydrateRoot = function(e, t, n) {
    if (!d(e)) throw Error(r(299));
    var l = !1, a = "", i = kd, f = Fd, o = Wd, g = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onUncaughtError !== void 0 && (i = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (o = n.onRecoverableError), n.formState !== void 0 && (g = n.formState)), t = O2(
      e,
      1,
      !0,
      t,
      n ?? null,
      l,
      a,
      g,
      i,
      f,
      o,
      L2
    ), t.context = R2(null), n = t.current, l = zt(), l = Lc(l), a = Bn(l), a.callback = null, Hn(n, a, l), n = l, t.current.lanes = n, Ca(t, n), tn(t), e[Nl] = t.current, Ur(e), new lc(t);
  }, hu.version = "19.2.3", hu;
}
var F2;
function tv() {
  if (F2) return Pr.exports;
  F2 = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), Pr.exports = ev(), Pr.exports;
}
var nv = tv();
const w1 = /* @__PURE__ */ Q1(nv);
var ls = { exports: {} }, as = {};
var W2;
function lv() {
  if (W2) return as;
  W2 = 1;
  var u = zc();
  function c(v, m) {
    return v === m && (v !== 0 || 1 / v === 1 / m) || v !== v && m !== m;
  }
  var s = typeof Object.is == "function" ? Object.is : c, r = u.useSyncExternalStore, d = u.useRef, h = u.useEffect, p = u.useMemo, D = u.useDebugValue;
  return as.useSyncExternalStoreWithSelector = function(v, m, j, S, U) {
    var Q = d(null);
    if (Q.current === null) {
      var z = { hasValue: !1, value: null };
      Q.current = z;
    } else z = Q.current;
    Q = p(
      function() {
        function x(C) {
          if (!G) {
            if (G = !0, F = C, C = S(C), U !== void 0 && z.hasValue) {
              var T = z.value;
              if (U(T, C))
                return b = T;
            }
            return b = C;
          }
          if (T = b, s(F, C)) return T;
          var R = S(C);
          return U !== void 0 && U(T, R) ? (F = C, T) : (F = C, b = R);
        }
        var G = !1, F, b, O = j === void 0 ? null : j;
        return [
          function() {
            return x(m());
          },
          O === null ? void 0 : function() {
            return x(O());
          }
        ];
      },
      [m, j, S, U]
    );
    var L = r(v, Q[0], Q[1]);
    return h(
      function() {
        z.hasValue = !0, z.value = L;
      },
      [L]
    ), D(L), L;
  }, as;
}
var $2;
function av() {
  return $2 || ($2 = 1, ls.exports = lv()), ls.exports;
}
var uv = av();
function L1(u) {
  u();
}
function iv() {
  let u = null, c = null;
  return {
    clear() {
      u = null, c = null;
    },
    notify() {
      L1(() => {
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
var I2 = {
  notify() {
  },
  get: () => []
};
function cv(u, c) {
  let s, r = I2, d = 0, h = !1;
  function p(L) {
    j();
    const x = r.subscribe(L);
    let G = !1;
    return () => {
      G || (G = !0, x(), S());
    };
  }
  function D() {
    r.notify();
  }
  function v() {
    z.onStateChange && z.onStateChange();
  }
  function m() {
    return h;
  }
  function j() {
    d++, s || (s = u.subscribe(v), r = iv());
  }
  function S() {
    d--, s && d === 0 && (s(), s = void 0, r.clear(), r = I2);
  }
  function U() {
    h || (h = !0, j());
  }
  function Q() {
    h && (h = !1, S());
  }
  const z = {
    addNestedSub: p,
    notifyNestedSubs: D,
    handleChangeWrapper: v,
    isSubscribed: m,
    trySubscribe: U,
    tryUnsubscribe: Q,
    getListeners: () => r
  };
  return z;
}
var fv = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", rv = /* @__PURE__ */ fv(), sv = () => typeof navigator < "u" && navigator.product === "ReactNative", ov = /* @__PURE__ */ sv(), dv = () => rv || ov ? ce.useLayoutEffect : ce.useEffect, hv = /* @__PURE__ */ dv();
function P2(u, c) {
  return u === c ? u !== 0 || c !== 0 || 1 / u === 1 / c : u !== u && c !== c;
}
function Eu(u, c) {
  if (P2(u, c)) return !0;
  if (typeof u != "object" || u === null || typeof c != "object" || c === null)
    return !1;
  const s = Object.keys(u), r = Object.keys(c);
  if (s.length !== r.length) return !1;
  for (let d = 0; d < s.length; d++)
    if (!Object.prototype.hasOwnProperty.call(c, s[d]) || !P2(u[s[d]], c[s[d]]))
      return !1;
  return !0;
}
var mv = /* @__PURE__ */ Symbol.for("react-redux-context"), yv = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function vv() {
  if (!ce.createContext) return {};
  const u = yv[mv] ??= /* @__PURE__ */ new Map();
  let c = u.get(ce.createContext);
  return c || (c = ce.createContext(
    null
  ), u.set(ce.createContext, c)), c;
}
var el = /* @__PURE__ */ vv();
function gv(u) {
  const { children: c, context: s, serverState: r, store: d } = u, h = ce.useMemo(() => {
    const v = cv(d);
    return {
      store: d,
      subscription: v,
      getServerState: r ? () => r : void 0
    };
  }, [d, r]), p = ce.useMemo(() => d.getState(), [d]);
  hv(() => {
    const { subscription: v } = h;
    return v.onStateChange = v.notifyNestedSubs, v.trySubscribe(), p !== d.getState() && v.notifyNestedSubs(), () => {
      v.tryUnsubscribe(), v.onStateChange = void 0;
    };
  }, [h, p]);
  const D = s || el;
  return /* @__PURE__ */ ce.createElement(D.Provider, { value: h }, c);
}
var ys = gv;
function Rs(u = el) {
  return function() {
    return ce.useContext(u);
  };
}
var Y1 = /* @__PURE__ */ Rs();
function G1(u = el) {
  const c = u === el ? Y1 : (
    // @ts-ignore
    Rs(u)
  ), s = () => {
    const { store: r } = c();
    return r;
  };
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var V1 = /* @__PURE__ */ G1();
function pv(u = el) {
  const c = u === el ? V1 : G1(u), s = () => c().dispatch;
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var X1 = /* @__PURE__ */ pv(), Sv = (u, c) => u === c;
function bv(u = el) {
  const c = u === el ? Y1 : Rs(u), s = (r, d = {}) => {
    const { equalityFn: h = Sv } = typeof d == "function" ? { equalityFn: d } : d, p = c(), { store: D, subscription: v, getServerState: m } = p;
    ce.useRef(!0);
    const j = ce.useCallback(
      {
        [r.name](U) {
          return r(U);
        }
      }[r.name],
      [r]
    ), S = uv.useSyncExternalStoreWithSelector(
      v.addNestedSub,
      D.getState,
      m || D.getState,
      j,
      h
    );
    return ce.useDebugValue(S), S;
  };
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var Z1 = /* @__PURE__ */ bv(), _v = L1;
function it(u) {
  return `Minified Redux error #${u}; visit https://redux.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
}
var Ev = typeof Symbol == "function" && Symbol.observable || "@@observable", e1 = Ev, us = () => Math.random().toString(36).substring(7).split("").join("."), Cv = {
  INIT: `@@redux/INIT${/* @__PURE__ */ us()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ us()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${us()}`
}, vc = Cv;
function tl(u) {
  if (typeof u != "object" || u === null)
    return !1;
  let c = u;
  for (; Object.getPrototypeOf(c) !== null; )
    c = Object.getPrototypeOf(c);
  return Object.getPrototypeOf(u) === c || Object.getPrototypeOf(u) === null;
}
function K1(u, c, s) {
  if (typeof u != "function")
    throw new Error(it(2));
  if (typeof c == "function" && typeof s == "function" || typeof s == "function" && typeof arguments[3] == "function")
    throw new Error(it(0));
  if (typeof c == "function" && typeof s > "u" && (s = c, c = void 0), typeof s < "u") {
    if (typeof s != "function")
      throw new Error(it(1));
    return s(K1)(u, c);
  }
  let r = u, d = c, h = /* @__PURE__ */ new Map(), p = h, D = 0, v = !1;
  function m() {
    p === h && (p = /* @__PURE__ */ new Map(), h.forEach((x, G) => {
      p.set(G, x);
    }));
  }
  function j() {
    if (v)
      throw new Error(it(3));
    return d;
  }
  function S(x) {
    if (typeof x != "function")
      throw new Error(it(4));
    if (v)
      throw new Error(it(5));
    let G = !0;
    m();
    const F = D++;
    return p.set(F, x), function() {
      if (G) {
        if (v)
          throw new Error(it(6));
        G = !1, m(), p.delete(F), h = null;
      }
    };
  }
  function U(x) {
    if (!tl(x))
      throw new Error(it(7));
    if (typeof x.type > "u")
      throw new Error(it(8));
    if (typeof x.type != "string")
      throw new Error(it(17));
    if (v)
      throw new Error(it(9));
    try {
      v = !0, d = r(d, x);
    } finally {
      v = !1;
    }
    return (h = p).forEach((F) => {
      F();
    }), x;
  }
  function Q(x) {
    if (typeof x != "function")
      throw new Error(it(10));
    r = x, U({
      type: vc.REPLACE
    });
  }
  function z() {
    const x = S;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(G) {
        if (typeof G != "object" || G === null)
          throw new Error(it(11));
        function F() {
          const O = G;
          O.next && O.next(j());
        }
        return F(), {
          unsubscribe: x(F)
        };
      },
      [e1]() {
        return this;
      }
    };
  }
  return U({
    type: vc.INIT
  }), {
    dispatch: U,
    subscribe: S,
    getState: j,
    replaceReducer: Q,
    [e1]: z
  };
}
function Tv(u) {
  Object.keys(u).forEach((c) => {
    const s = u[c];
    if (typeof s(void 0, {
      type: vc.INIT
    }) > "u")
      throw new Error(it(12));
    if (typeof s(void 0, {
      type: vc.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(it(13));
  });
}
function J1(u) {
  const c = Object.keys(u), s = {};
  for (let h = 0; h < c.length; h++) {
    const p = c[h];
    typeof u[p] == "function" && (s[p] = u[p]);
  }
  const r = Object.keys(s);
  let d;
  try {
    Tv(s);
  } catch (h) {
    d = h;
  }
  return function(p = {}, D) {
    if (d)
      throw d;
    let v = !1;
    const m = {};
    for (let j = 0; j < r.length; j++) {
      const S = r[j], U = s[S], Q = p[S], z = U(Q, D);
      if (typeof z > "u")
        throw D && D.type, new Error(it(14));
      m[S] = z, v = v || z !== Q;
    }
    return v = v || r.length !== Object.keys(p).length, v ? m : p;
  };
}
function gc(...u) {
  return u.length === 0 ? (c) => c : u.length === 1 ? u[0] : u.reduce((c, s) => (...r) => c(s(...r)));
}
function Av(...u) {
  return (c) => (s, r) => {
    const d = c(s, r);
    let h = () => {
      throw new Error(it(15));
    };
    const p = {
      getState: d.getState,
      dispatch: (v, ...m) => h(v, ...m)
    }, D = u.map((v) => v(p));
    return h = gc(...D)(d.dispatch), {
      ...d,
      dispatch: h
    };
  };
}
function k1(u) {
  return tl(u) && "type" in u && typeof u.type == "string";
}
var Ns = /* @__PURE__ */ Symbol.for("immer-nothing"), Cu = /* @__PURE__ */ Symbol.for("immer-draftable"), Ie = /* @__PURE__ */ Symbol.for("immer-state");
function ct(u, ...c) {
  throw new Error(
    `[Immer] minified error nr: ${u}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Rt = Object, Al = Rt.getPrototypeOf, Mu = "constructor", xu = "prototype", vs = "configurable", pc = "enumerable", hc = "writable", Du = "value", Nt = (u) => !!u && !!u[Ie];
function Ut(u) {
  return u ? F1(u) || qu(u) || !!u[Cu] || !!u[Mu]?.[Cu] || Bu(u) || Hu(u) : !1;
}
var Mv = Rt[xu][Mu].toString(), t1 = /* @__PURE__ */ new WeakMap();
function F1(u) {
  if (!u || !ga(u))
    return !1;
  const c = Al(u);
  if (c === null || c === Rt[xu])
    return !0;
  const s = Rt.hasOwnProperty.call(c, Mu) && c[Mu];
  if (s === Object)
    return !0;
  if (!Tl(s))
    return !1;
  let r = t1.get(s);
  return r === void 0 && (r = Function.toString.call(s), t1.set(s, r)), r === Mv;
}
function Dv(u) {
  return Nt(u) || ct(15, u), u[Ie].base_;
}
function ju(u, c, s = !0) {
  Ml(u) === 0 ? (s ? Reflect.ownKeys(u) : Rt.keys(u)).forEach((d) => {
    c(d, u[d], u);
  }) : u.forEach((r, d) => c(d, r, u));
}
function Ml(u) {
  const c = u[Ie];
  return c ? c.type_ : qu(u) ? 1 : Bu(u) ? 2 : Hu(u) ? 3 : 0;
}
var Tu = (u, c, s = Ml(u)) => s === 2 ? u.has(c) : Rt[xu].hasOwnProperty.call(u, c), Cn = (u, c, s = Ml(u)) => (
  // @ts-ignore
  s === 2 ? u.get(c) : u[c]
), Sc = (u, c, s, r = Ml(u)) => {
  r === 2 ? u.set(c, s) : r === 3 ? u.add(s) : u[c] = s;
};
function zv(u, c) {
  return u === c ? u !== 0 || 1 / u === 1 / c : u !== u && c !== c;
}
var qu = Array.isArray, Bu = (u) => u instanceof Map, Hu = (u) => u instanceof Set, ga = (u) => typeof u == "object", Tl = (u) => typeof u == "function", is = (u) => typeof u == "boolean";
function Ov(u) {
  const c = +u;
  return Number.isInteger(c) && String(c) === u;
}
var Rv = (u) => ga(u) ? u?.[Ie] : null, Tn = (u) => u.copy_ || u.base_, Us = (u) => u.modified_ ? u.copy_ : u.base_;
function gs(u, c) {
  if (Bu(u))
    return new Map(u);
  if (Hu(u))
    return new Set(u);
  if (qu(u))
    return Array[xu].slice.call(u);
  const s = F1(u);
  if (c === !0 || c === "class_only" && !s) {
    const r = Rt.getOwnPropertyDescriptors(u);
    delete r[Ie];
    let d = Reflect.ownKeys(r);
    for (let h = 0; h < d.length; h++) {
      const p = d[h], D = r[p];
      D[hc] === !1 && (D[hc] = !0, D[vs] = !0), (D.get || D.set) && (r[p] = {
        [vs]: !0,
        [hc]: !0,
        // could live with !!desc.set as well here...
        [pc]: D[pc],
        [Du]: u[p]
      });
    }
    return Rt.create(Al(u), r);
  } else {
    const r = Al(u);
    if (r !== null && s)
      return { ...u };
    const d = Rt.create(r);
    return Rt.assign(d, u);
  }
}
function xs(u, c = !1) {
  return Oc(u) || Nt(u) || !Ut(u) || (Ml(u) > 1 && Rt.defineProperties(u, {
    set: uc,
    add: uc,
    clear: uc,
    delete: uc
  }), Rt.freeze(u), c && ju(
    u,
    (s, r) => {
      xs(r, !0);
    },
    !1
  )), u;
}
function Nv() {
  ct(2);
}
var uc = {
  [Du]: Nv
};
function Oc(u) {
  return u === null || !ga(u) ? !0 : Rt.isFrozen(u);
}
var bc = "MapSet", _c = "Patches", n1 = "ArrayMethods", Ec = {};
function Dl(u) {
  const c = Ec[u];
  return c || ct(0, u), c;
}
var l1 = (u) => !!Ec[u];
function Uv(u, c) {
  Ec[u] || (Ec[u] = c);
}
var zu, W1 = () => zu, xv = (u, c) => ({
  drafts_: [],
  parent_: u,
  immer_: c,
  // Whenever the modified draft contains a draft from another scope, we
  // need to prevent auto-freezing so the unowned draft can be finalized.
  canAutoFreeze_: !0,
  unfinalizedDrafts_: 0,
  handledSet_: /* @__PURE__ */ new Set(),
  processedForPatches_: /* @__PURE__ */ new Set(),
  mapSetPlugin_: l1(bc) ? Dl(bc) : void 0,
  arrayMethodsPlugin_: l1(n1) ? Dl(n1) : void 0
});
function a1(u, c) {
  c && (u.patchPlugin_ = Dl(_c), u.patches_ = [], u.inversePatches_ = [], u.patchListener_ = c);
}
function ps(u) {
  Ss(u), u.drafts_.forEach(jv), u.drafts_ = null;
}
function Ss(u) {
  u === zu && (zu = u.parent_);
}
var u1 = (u) => zu = xv(zu, u);
function jv(u) {
  const c = u[Ie];
  c.type_ === 0 || c.type_ === 1 ? c.revoke_() : c.revoked_ = !0;
}
function i1(u, c) {
  c.unfinalizedDrafts_ = c.drafts_.length;
  const s = c.drafts_[0];
  if (u !== void 0 && u !== s) {
    s[Ie].modified_ && (ps(c), ct(4)), Ut(u) && (u = c1(c, u));
    const { patchPlugin_: d } = c;
    d && d.generateReplacementPatches_(
      s[Ie].base_,
      u,
      c
    );
  } else
    u = c1(c, s);
  return qv(c, u, !0), ps(c), c.patches_ && c.patchListener_(c.patches_, c.inversePatches_), u !== Ns ? u : void 0;
}
function c1(u, c) {
  if (Oc(c))
    return c;
  const s = c[Ie];
  if (!s)
    return Cc(c, u.handledSet_, u);
  if (!Rc(s, u))
    return c;
  if (!s.modified_)
    return s.base_;
  if (!s.finalized_) {
    const { callbacks_: r } = s;
    if (r)
      for (; r.length > 0; )
        r.pop()(u);
    P1(s, u);
  }
  return s.copy_;
}
function qv(u, c, s = !1) {
  !u.parent_ && u.immer_.autoFreeze_ && u.canAutoFreeze_ && xs(c, s);
}
function $1(u) {
  u.finalized_ = !0, u.scope_.unfinalizedDrafts_--;
}
var Rc = (u, c) => u.scope_ === c, Bv = [];
function I1(u, c, s, r) {
  const d = Tn(u), h = u.type_;
  if (r !== void 0 && Cn(d, r, h) === c) {
    Sc(d, r, s, h);
    return;
  }
  if (!u.draftLocations_) {
    const D = u.draftLocations_ = /* @__PURE__ */ new Map();
    ju(d, (v, m) => {
      if (Nt(m)) {
        const j = D.get(m) || [];
        j.push(v), D.set(m, j);
      }
    });
  }
  const p = u.draftLocations_.get(c) ?? Bv;
  for (const D of p)
    Sc(d, D, s, h);
}
function Hv(u, c, s) {
  u.callbacks_.push(function(d) {
    const h = c;
    if (!h || !Rc(h, d))
      return;
    d.mapSetPlugin_?.fixSetContents(h);
    const p = Us(h);
    I1(u, h.draft_ ?? h, p, s), P1(h, d);
  });
}
function P1(u, c) {
  if (u.modified_ && !u.finalized_ && (u.type_ === 3 || u.type_ === 1 && u.allIndicesReassigned_ || (u.assigned_?.size ?? 0) > 0)) {
    const { patchPlugin_: r } = c;
    if (r) {
      const d = r.getPath(u);
      d && r.generatePatches_(u, d, c);
    }
    $1(u);
  }
}
function Qv(u, c, s) {
  const { scope_: r } = u;
  if (Nt(s)) {
    const d = s[Ie];
    Rc(d, r) && d.callbacks_.push(function() {
      mc(u);
      const p = Us(d);
      I1(u, s, p, c);
    });
  } else Ut(s) && u.callbacks_.push(function() {
    const h = Tn(u);
    u.type_ === 3 ? h.has(s) && Cc(s, r.handledSet_, r) : Cn(h, c, u.type_) === s && r.drafts_.length > 1 && (u.assigned_.get(c) ?? !1) === !0 && u.copy_ && Cc(
      Cn(u.copy_, c, u.type_),
      r.handledSet_,
      r
    );
  });
}
function Cc(u, c, s) {
  return !s.immer_.autoFreeze_ && s.unfinalizedDrafts_ < 1 || Nt(u) || c.has(u) || !Ut(u) || Oc(u) || (c.add(u), ju(u, (r, d) => {
    if (Nt(d)) {
      const h = d[Ie];
      if (Rc(h, s)) {
        const p = Us(h);
        Sc(u, r, p, u.type_), $1(h);
      }
    } else Ut(d) && Cc(d, c, s);
  })), u;
}
function wv(u, c) {
  const s = qu(u), r = {
    type_: s ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: c ? c.scope_ : W1(),
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
  let d = r, h = Tc;
  s && (d = [r], h = Ou);
  const { revoke: p, proxy: D } = Proxy.revocable(d, h);
  return r.draft_ = D, r.revoke_ = p, [D, r];
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
    if (!Tu(d, c, u.type_))
      return Lv(u, d, c);
    const h = d[c];
    if (u.finalized_ || !Ut(h) || r && u.operationMethod && s?.isMutatingArrayMethod(
      u.operationMethod
    ) && Ov(c))
      return h;
    if (h === cs(u.base_, c)) {
      mc(u);
      const p = u.type_ === 1 ? +c : c, D = _s(u.scope_, h, u, p);
      return u.copy_[p] = D;
    }
    return h;
  },
  has(u, c) {
    return c in Tn(u);
  },
  ownKeys(u) {
    return Reflect.ownKeys(Tn(u));
  },
  set(u, c, s) {
    const r = eh(Tn(u), c);
    if (r?.set)
      return r.set.call(u.draft_, s), !0;
    if (!u.modified_) {
      const d = cs(Tn(u), c), h = d?.[Ie];
      if (h && h.base_ === s)
        return u.copy_[c] = s, u.assigned_.set(c, !1), !0;
      if (zv(s, d) && (s !== void 0 || Tu(u.base_, c, u.type_)))
        return !0;
      mc(u), bs(u);
    }
    return u.copy_[c] === s && // special case: handle new props with value 'undefined'
    (s !== void 0 || c in u.copy_) || // special case: NaN
    Number.isNaN(s) && Number.isNaN(u.copy_[c]) || (u.copy_[c] = s, u.assigned_.set(c, !0), Qv(u, c, s)), !0;
  },
  deleteProperty(u, c) {
    return mc(u), cs(u.base_, c) !== void 0 || c in u.base_ ? (u.assigned_.set(c, !1), bs(u)) : u.assigned_.delete(c), u.copy_ && delete u.copy_[c], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(u, c) {
    const s = Tn(u), r = Reflect.getOwnPropertyDescriptor(s, c);
    return r && {
      [hc]: !0,
      [vs]: u.type_ !== 1 || c !== "length",
      [pc]: r[pc],
      [Du]: s[c]
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
function Lv(u, c, s) {
  const r = eh(c, s);
  return r ? Du in r ? r[Du] : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    r.get?.call(u.draft_)
  ) : void 0;
}
function eh(u, c) {
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
function bs(u) {
  u.modified_ || (u.modified_ = !0, u.parent_ && bs(u.parent_));
}
function mc(u) {
  u.copy_ || (u.assigned_ = /* @__PURE__ */ new Map(), u.copy_ = gs(
    u.base_,
    u.scope_.immer_.useStrictShallowCopy_
  ));
}
var Yv = class {
  constructor(u) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (c, s, r) => {
      if (Tl(c) && !Tl(s)) {
        const h = s;
        s = c;
        const p = this;
        return function(v = h, ...m) {
          return p.produce(v, (j) => s.call(this, j, ...m));
        };
      }
      Tl(s) || ct(6), r !== void 0 && !Tl(r) && ct(7);
      let d;
      if (Ut(c)) {
        const h = u1(this), p = _s(h, c, void 0);
        let D = !0;
        try {
          d = s(p), D = !1;
        } finally {
          D ? ps(h) : Ss(h);
        }
        return a1(h, r), i1(d, h);
      } else if (!c || !ga(c)) {
        if (d = s(c), d === void 0 && (d = c), d === Ns && (d = void 0), this.autoFreeze_ && xs(d, !0), r) {
          const h = [], p = [];
          Dl(_c).generateReplacementPatches_(c, d, {
            patches_: h,
            inversePatches_: p
          }), r(h, p);
        }
        return d;
      } else
        ct(1, c);
    }, this.produceWithPatches = (c, s) => {
      if (Tl(c))
        return (p, ...D) => this.produceWithPatches(p, (v) => c(v, ...D));
      let r, d;
      return [this.produce(c, s, (p, D) => {
        r = p, d = D;
      }), r, d];
    }, is(u?.autoFreeze) && this.setAutoFreeze(u.autoFreeze), is(u?.useStrictShallowCopy) && this.setUseStrictShallowCopy(u.useStrictShallowCopy), is(u?.useStrictIteration) && this.setUseStrictIteration(u.useStrictIteration);
  }
  createDraft(u) {
    Ut(u) || ct(8), Nt(u) && (u = th(u));
    const c = u1(this), s = _s(c, u, void 0);
    return s[Ie].isManual_ = !0, Ss(c), s;
  }
  finishDraft(u, c) {
    const s = u && u[Ie];
    (!s || !s.isManual_) && ct(9);
    const { scope_: r } = s;
    return a1(r, c), i1(void 0, r);
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
    const r = Dl(_c).applyPatches_;
    return Nt(u) ? r(u, c) : this.produce(
      u,
      (d) => r(d, c)
    );
  }
};
function _s(u, c, s, r) {
  const [d, h] = Bu(c) ? Dl(bc).proxyMap_(c, s) : Hu(c) ? Dl(bc).proxySet_(c, s) : wv(c, s);
  return (s?.scope_ ?? W1()).drafts_.push(d), h.callbacks_ = s?.callbacks_ ?? [], h.key_ = r, s && r !== void 0 ? Hv(s, h, r) : h.callbacks_.push(function(v) {
    v.mapSetPlugin_?.fixSetContents(h);
    const { patchPlugin_: m } = v;
    h.modified_ && m && m.generatePatches_(h, [], v);
  }), d;
}
function th(u) {
  return Nt(u) || ct(10, u), nh(u);
}
function nh(u) {
  if (!Ut(u) || Oc(u))
    return u;
  const c = u[Ie];
  let s, r = !0;
  if (c) {
    if (!c.modified_)
      return c.base_;
    c.finalized_ = !0, s = gs(u, c.scope_.immer_.useStrictShallowCopy_), r = c.scope_.immer_.shouldUseStrictIteration();
  } else
    s = gs(u, !0);
  return ju(
    s,
    (d, h) => {
      Sc(s, d, nh(h));
    },
    r
  ), c && (c.finalized_ = !1), s;
}
function Gv() {
  function c(z, L = []) {
    if (z.key_ !== void 0) {
      const x = z.parent_.copy_ ?? z.parent_.base_, G = Rv(Cn(x, z.key_)), F = Cn(x, z.key_);
      if (F === void 0 || F !== z.draft_ && F !== z.base_ && F !== z.copy_ || G != null && G.base_ !== z.base_)
        return null;
      const b = z.parent_.type_ === 3;
      let O;
      if (b) {
        const C = z.parent_;
        O = Array.from(C.drafts_.keys()).indexOf(z.key_);
      } else
        O = z.key_;
      if (!(b && x.size > O || Tu(x, O)))
        return null;
      L.push(O);
    }
    if (z.parent_)
      return c(z.parent_, L);
    L.reverse();
    try {
      s(z.copy_, L);
    } catch {
      return null;
    }
    return L;
  }
  function s(z, L) {
    let x = z;
    for (let G = 0; G < L.length - 1; G++) {
      const F = L[G];
      if (x = Cn(x, F), !ga(x) || x === null)
        throw new Error(`Cannot resolve path at '${L.join("/")}'`);
    }
    return x;
  }
  const r = "replace", d = "add", h = "remove";
  function p(z, L, x) {
    if (z.scope_.processedForPatches_.has(z))
      return;
    z.scope_.processedForPatches_.add(z);
    const { patches_: G, inversePatches_: F } = x;
    switch (z.type_) {
      case 0:
      case 2:
        return v(
          z,
          L,
          G,
          F
        );
      case 1:
        return D(
          z,
          L,
          G,
          F
        );
      case 3:
        return m(
          z,
          L,
          G,
          F
        );
    }
  }
  function D(z, L, x, G) {
    let { base_: F, assigned_: b } = z, O = z.copy_;
    O.length < F.length && ([F, O] = [O, F], [x, G] = [G, x]);
    const C = z.allIndicesReassigned_ === !0;
    for (let T = 0; T < F.length; T++) {
      const R = O[T], X = F[T];
      if ((C || b?.get(T.toString())) && R !== X) {
        const q = R?.[Ie];
        if (q && q.modified_)
          continue;
        const _ = L.concat([T]);
        x.push({
          op: r,
          path: _,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: Q(R)
        }), G.push({
          op: r,
          path: _,
          value: Q(X)
        });
      }
    }
    for (let T = F.length; T < O.length; T++) {
      const R = L.concat([T]);
      x.push({
        op: d,
        path: R,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: Q(O[T])
      });
    }
    for (let T = O.length - 1; F.length <= T; --T) {
      const R = L.concat([T]);
      G.push({
        op: h,
        path: R
      });
    }
  }
  function v(z, L, x, G) {
    const { base_: F, copy_: b, type_: O } = z;
    ju(z.assigned_, (C, T) => {
      const R = Cn(F, C, O), X = Cn(b, C, O), V = T ? Tu(F, C) ? r : d : h;
      if (R === X && V === r)
        return;
      const q = L.concat(C);
      x.push(
        V === h ? { op: V, path: q } : { op: V, path: q, value: Q(X) }
      ), G.push(
        V === d ? { op: h, path: q } : V === h ? { op: d, path: q, value: Q(R) } : { op: r, path: q, value: Q(R) }
      );
    });
  }
  function m(z, L, x, G) {
    let { base_: F, copy_: b } = z, O = 0;
    F.forEach((C) => {
      if (!b.has(C)) {
        const T = L.concat([O]);
        x.push({
          op: h,
          path: T,
          value: C
        }), G.unshift({
          op: d,
          path: T,
          value: C
        });
      }
      O++;
    }), O = 0, b.forEach((C) => {
      if (!F.has(C)) {
        const T = L.concat([O]);
        x.push({
          op: d,
          path: T,
          value: C
        }), G.unshift({
          op: h,
          path: T,
          value: C
        });
      }
      O++;
    });
  }
  function j(z, L, x) {
    const { patches_: G, inversePatches_: F } = x;
    G.push({
      op: r,
      path: [],
      value: L === Ns ? void 0 : L
    }), F.push({
      op: r,
      path: [],
      value: z
    });
  }
  function S(z, L) {
    return L.forEach((x) => {
      const { path: G, op: F } = x;
      let b = z;
      for (let R = 0; R < G.length - 1; R++) {
        const X = Ml(b);
        let V = G[R];
        typeof V != "string" && typeof V != "number" && (V = "" + V), (X === 0 || X === 1) && (V === "__proto__" || V === Mu) && ct(19), Tl(b) && V === xu && ct(19), b = Cn(b, V), ga(b) || ct(18, G.join("/"));
      }
      const O = Ml(b), C = U(x.value), T = G[G.length - 1];
      switch (F) {
        case r:
          switch (O) {
            case 2:
              return b.set(T, C);
            case 3:
              ct(16);
            default:
              return b[T] = C;
          }
        case d:
          switch (O) {
            case 1:
              return T === "-" ? b.push(C) : b.splice(T, 0, C);
            case 2:
              return b.set(T, C);
            case 3:
              return b.add(C);
            default:
              return b[T] = C;
          }
        case h:
          switch (O) {
            case 1:
              return b.splice(T, 1);
            case 2:
              return b.delete(T);
            case 3:
              return b.delete(x.value);
            default:
              return delete b[T];
          }
        default:
          ct(17, F);
      }
    }), z;
  }
  function U(z) {
    if (!Ut(z))
      return z;
    if (qu(z))
      return z.map(U);
    if (Bu(z))
      return new Map(
        Array.from(z.entries()).map(([x, G]) => [x, U(G)])
      );
    if (Hu(z))
      return new Set(Array.from(z).map(U));
    const L = Object.create(Al(z));
    for (const x in z)
      L[x] = U(z[x]);
    return Tu(z, Cu) && (L[Cu] = z[Cu]), L;
  }
  function Q(z) {
    return Nt(z) ? U(z) : z;
  }
  Uv(_c, {
    applyPatches_: S,
    generatePatches_: p,
    generateReplacementPatches_: j,
    getPath: c
  });
}
var Ru = new Yv(), Qu = Ru.produce, lh = /* @__PURE__ */ Ru.produceWithPatches.bind(
  Ru
), f1 = /* @__PURE__ */ Ru.applyPatches.bind(Ru);
function Vv(u, c = `expected a function, instead received ${typeof u}`) {
  if (typeof u != "function")
    throw new TypeError(c);
}
function Xv(u, c = `expected an object, instead received ${typeof u}`) {
  if (typeof u != "object")
    throw new TypeError(c);
}
function Zv(u, c = "expected all items to be functions, instead received the following types: ") {
  if (!u.every((s) => typeof s == "function")) {
    const s = u.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${c}[${s}]`);
  }
}
var r1 = (u) => Array.isArray(u) ? u : [u];
function Kv(u) {
  const c = Array.isArray(u[0]) ? u[0] : u;
  return Zv(
    c,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), c;
}
function Jv(u, c) {
  const s = [], { length: r } = u;
  for (let d = 0; d < r; d++)
    s.push(u[d].apply(null, c));
  return s;
}
var kv = class {
  constructor(u) {
    this.value = u;
  }
  deref() {
    return this.value;
  }
}, Fv = typeof WeakRef < "u" ? WeakRef : kv, Wv = 0, s1 = 1;
function ic() {
  return {
    s: Wv,
    v: void 0,
    o: null,
    p: null
  };
}
function Ac(u, c = {}) {
  let s = ic();
  const { resultEqualityCheck: r } = c;
  let d, h = 0;
  function p() {
    let D = s;
    const { length: v } = arguments;
    for (let S = 0, U = v; S < U; S++) {
      const Q = arguments[S];
      if (typeof Q == "function" || typeof Q == "object" && Q !== null) {
        let z = D.o;
        z === null && (D.o = z = /* @__PURE__ */ new WeakMap());
        const L = z.get(Q);
        L === void 0 ? (D = ic(), z.set(Q, D)) : D = L;
      } else {
        let z = D.p;
        z === null && (D.p = z = /* @__PURE__ */ new Map());
        const L = z.get(Q);
        L === void 0 ? (D = ic(), z.set(Q, D)) : D = L;
      }
    }
    const m = D;
    let j;
    if (D.s === s1)
      j = D.v;
    else if (j = u.apply(null, arguments), h++, r) {
      const S = d?.deref?.() ?? d;
      S != null && r(S, j) && (j = S, h !== 0 && h--), d = typeof j == "object" && j !== null || typeof j == "function" ? new Fv(j) : j;
    }
    return m.s = s1, m.v = j, j;
  }
  return p.clearCache = () => {
    s = ic(), p.resetResultsCount();
  }, p.resultsCount = () => h, p.resetResultsCount = () => {
    h = 0;
  }, p;
}
function $v(u, ...c) {
  const s = typeof u == "function" ? {
    memoize: u,
    memoizeOptions: c
  } : u, r = (...d) => {
    let h = 0, p = 0, D, v = {}, m = d.pop();
    typeof m == "object" && (v = m, m = d.pop()), Vv(
      m,
      `createSelector expects an output function after the inputs, but received: [${typeof m}]`
    );
    const j = {
      ...s,
      ...v
    }, {
      memoize: S,
      memoizeOptions: U = [],
      argsMemoize: Q = Ac,
      argsMemoizeOptions: z = []
    } = j, L = r1(U), x = r1(z), G = Kv(d), F = S(function() {
      return h++, m.apply(
        null,
        arguments
      );
    }, ...L), b = Q(function() {
      p++;
      const C = Jv(
        G,
        arguments
      );
      return D = F.apply(null, C), D;
    }, ...x);
    return Object.assign(b, {
      resultFunc: m,
      memoizedResultFunc: F,
      dependencies: G,
      dependencyRecomputations: () => p,
      resetDependencyRecomputations: () => {
        p = 0;
      },
      lastResult: () => D,
      recomputations: () => h,
      resetRecomputations: () => {
        h = 0;
      },
      memoize: S,
      argsMemoize: Q
    });
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var js = /* @__PURE__ */ $v(Ac), Iv = Object.assign(
  (u, c = js) => {
    Xv(
      u,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof u}`
    );
    const s = Object.keys(u), r = s.map(
      (h) => u[h]
    );
    return c(
      r,
      (...h) => h.reduce((p, D, v) => (p[s[v]] = D, p), {})
    );
  },
  { withTypes: () => Iv }
);
function ah(u) {
  return ({ dispatch: s, getState: r }) => (d) => (h) => typeof h == "function" ? h(s, r, u) : d(h);
}
var Pv = ah(), eg = ah, tg = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? gc : gc.apply(null, arguments);
}, ng = (u) => u && typeof u.match == "function";
function Wt(u, c) {
  function s(...r) {
    if (c) {
      let d = c(...r);
      if (!d)
        throw new Error(Zt(0));
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
  return s.toString = () => `${u}`, s.type = u, s.match = (r) => k1(r) && r.type === u, s;
}
var uh = class Su extends Array {
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
function o1(u) {
  return Ut(u) ? Qu(u, () => {
  }) : u;
}
function cc(u, c, s) {
  return u.has(c) ? u.get(c) : u.set(c, s(c)).get(c);
}
function lg(u) {
  return typeof u == "boolean";
}
var ag = () => function(c) {
  const {
    thunk: s = !0,
    immutableCheck: r = !0,
    serializableCheck: d = !0,
    actionCreatorCheck: h = !0
  } = c ?? {};
  let p = new uh();
  return s && (lg(s) ? p.push(Pv) : p.push(eg(s.extraArgument))), p;
}, Nc = "RTK_autoBatch", mu = () => (u) => ({
  payload: u,
  meta: {
    [Nc]: !0
  }
}), d1 = (u) => (c) => {
  setTimeout(c, u);
}, ug = (u = {
  type: "raf"
}) => (c) => (...s) => {
  const r = c(...s);
  let d = !0, h = !1, p = !1;
  const D = /* @__PURE__ */ new Set(), v = u.type === "tick" ? queueMicrotask : u.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : d1(10)
  ) : u.type === "callback" ? u.queueNotification : d1(u.timeout), m = () => {
    p = !1, h && (h = !1, D.forEach((j) => j()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(j) {
      const S = () => d && j(), U = r.subscribe(S);
      return D.add(j), () => {
        U(), D.delete(j);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(j) {
      try {
        return d = !j?.meta?.[Nc], h = !d, h && (p || (p = !0, v(m))), r.dispatch(j);
      } finally {
        d = !0;
      }
    }
  });
}, ig = (u) => function(s) {
  const {
    autoBatch: r = !0
  } = s ?? {};
  let d = new uh(u);
  return r && d.push(ug(typeof r == "object" ? r : void 0)), d;
};
function cg(u) {
  const c = ag(), {
    reducer: s = void 0,
    middleware: r,
    devTools: d = !0,
    preloadedState: h = void 0,
    enhancers: p = void 0
  } = u || {};
  let D;
  if (typeof s == "function")
    D = s;
  else if (tl(s))
    D = J1(s);
  else
    throw new Error(Zt(1));
  let v;
  typeof r == "function" ? v = r(c) : v = c();
  let m = gc;
  d && (m = tg({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !1,
    ...typeof d == "object" && d
  }));
  const j = Av(...v), S = ig(j);
  let U = typeof p == "function" ? p(S) : S();
  const Q = m(...U);
  return K1(D, h, Q);
}
function ih(u) {
  const c = {}, s = [];
  let r;
  const d = {
    addCase(h, p) {
      const D = typeof h == "string" ? h : h.type;
      if (!D)
        throw new Error(Zt(28));
      if (D in c)
        throw new Error(Zt(29));
      return c[D] = p, d;
    },
    addAsyncThunk(h, p) {
      return p.pending && (c[h.pending.type] = p.pending), p.rejected && (c[h.rejected.type] = p.rejected), p.fulfilled && (c[h.fulfilled.type] = p.fulfilled), p.settled && s.push({
        matcher: h.settled,
        reducer: p.settled
      }), d;
    },
    addMatcher(h, p) {
      return s.push({
        matcher: h,
        reducer: p
      }), d;
    },
    addDefaultCase(h) {
      return r = h, d;
    }
  };
  return u(d), [c, s, r];
}
function fg(u) {
  return typeof u == "function";
}
function rg(u, c) {
  let [s, r, d] = ih(c), h;
  if (fg(u))
    h = () => o1(u());
  else {
    const D = o1(u);
    h = () => D;
  }
  function p(D = h(), v) {
    let m = [s[v.type], ...r.filter(({
      matcher: j
    }) => j(v)).map(({
      reducer: j
    }) => j)];
    return m.filter((j) => !!j).length === 0 && (m = [d]), m.reduce((j, S) => {
      if (S)
        if (Nt(j)) {
          const Q = S(j, v);
          return Q === void 0 ? j : Q;
        } else {
          if (Ut(j))
            return Qu(j, (U) => S(U, v));
          {
            const U = S(j, v);
            if (U === void 0) {
              if (j === null)
                return j;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return U;
          }
        }
      return j;
    }, D);
  }
  return p.getInitialState = h, p;
}
var ch = (u, c) => ng(u) ? u.match(c) : u(c);
function An(...u) {
  return (c) => u.some((s) => ch(s, c));
}
function Au(...u) {
  return (c) => u.every((s) => ch(s, c));
}
function Uc(u, c) {
  if (!u || !u.meta) return !1;
  const s = typeof u.meta.requestId == "string", r = c.indexOf(u.meta.requestStatus) > -1;
  return s && r;
}
function wu(u) {
  return typeof u[0] == "function" && "pending" in u[0] && "fulfilled" in u[0] && "rejected" in u[0];
}
function qs(...u) {
  return u.length === 0 ? (c) => Uc(c, ["pending"]) : wu(u) ? An(...u.map((c) => c.pending)) : qs()(u[0]);
}
function pa(...u) {
  return u.length === 0 ? (c) => Uc(c, ["rejected"]) : wu(u) ? An(...u.map((c) => c.rejected)) : pa()(u[0]);
}
function xc(...u) {
  const c = (s) => s && s.meta && s.meta.rejectedWithValue;
  return u.length === 0 ? Au(pa(...u), c) : wu(u) ? Au(pa(...u), c) : xc()(u[0]);
}
function nl(...u) {
  return u.length === 0 ? (c) => Uc(c, ["fulfilled"]) : wu(u) ? An(...u.map((c) => c.fulfilled)) : nl()(u[0]);
}
function Es(...u) {
  return u.length === 0 ? (c) => Uc(c, ["pending", "fulfilled", "rejected"]) : wu(u) ? An(...u.flatMap((c) => [c.pending, c.rejected, c.fulfilled])) : Es()(u[0]);
}
var sg = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Bs = (u = 21) => {
  let c = "", s = u;
  for (; s--; )
    c += sg[Math.random() * 64 | 0];
  return c;
}, og = ["name", "message", "stack", "code"], fs = class {
  constructor(u, c) {
    this.payload = u, this.meta = c;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
}, h1 = class {
  constructor(u, c) {
    this.payload = u, this.meta = c;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
}, dg = (u) => {
  if (typeof u == "object" && u !== null) {
    const c = {};
    for (const s of og)
      typeof u[s] == "string" && (c[s] = u[s]);
    return c;
  }
  return {
    message: String(u)
  };
}, m1 = "External signal was aborted", y1 = /* @__PURE__ */ (() => {
  function u(c, s, r) {
    const d = Wt(c + "/fulfilled", (v, m, j, S) => ({
      payload: v,
      meta: {
        ...S || {},
        arg: j,
        requestId: m,
        requestStatus: "fulfilled"
      }
    })), h = Wt(c + "/pending", (v, m, j) => ({
      payload: void 0,
      meta: {
        ...j || {},
        arg: m,
        requestId: v,
        requestStatus: "pending"
      }
    })), p = Wt(c + "/rejected", (v, m, j, S, U) => ({
      payload: S,
      error: (r && r.serializeError || dg)(v || "Rejected"),
      meta: {
        ...U || {},
        arg: j,
        requestId: m,
        rejectedWithValue: !!S,
        requestStatus: "rejected",
        aborted: v?.name === "AbortError",
        condition: v?.name === "ConditionError"
      }
    }));
    function D(v, {
      signal: m
    } = {}) {
      return (j, S, U) => {
        const Q = r?.idGenerator ? r.idGenerator(v) : Bs(), z = new AbortController();
        let L, x;
        function G(b) {
          x = b, z.abort();
        }
        m && (m.aborted ? G(m1) : m.addEventListener("abort", () => G(m1), {
          once: !0
        }));
        const F = (async function() {
          let b;
          try {
            let C = r?.condition?.(v, {
              getState: S,
              extra: U
            });
            if (mg(C) && (C = await C), C === !1 || z.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const T = new Promise((R, X) => {
              L = () => {
                X({
                  name: "AbortError",
                  message: x || "Aborted"
                });
              }, z.signal.addEventListener("abort", L, {
                once: !0
              });
            });
            j(h(Q, v, r?.getPendingMeta?.({
              requestId: Q,
              arg: v
            }, {
              getState: S,
              extra: U
            }))), b = await Promise.race([T, Promise.resolve(s(v, {
              dispatch: j,
              getState: S,
              extra: U,
              requestId: Q,
              signal: z.signal,
              abort: G,
              rejectWithValue: (R, X) => new fs(R, X),
              fulfillWithValue: (R, X) => new h1(R, X)
            })).then((R) => {
              if (R instanceof fs)
                throw R;
              return R instanceof h1 ? d(R.payload, Q, v, R.meta) : d(R, Q, v);
            })]);
          } catch (C) {
            b = C instanceof fs ? p(null, Q, v, C.payload, C.meta) : p(C, Q, v);
          } finally {
            L && z.signal.removeEventListener("abort", L);
          }
          return r && !r.dispatchConditionRejection && p.match(b) && b.meta.condition || j(b), b;
        })();
        return Object.assign(F, {
          abort: G,
          requestId: Q,
          arg: v,
          unwrap() {
            return F.then(hg);
          }
        });
      };
    }
    return Object.assign(D, {
      pending: h,
      rejected: p,
      fulfilled: d,
      settled: An(p, d),
      typePrefix: c
    });
  }
  return u.withTypes = () => u, u;
})();
function hg(u) {
  if (u.meta && u.meta.rejectedWithValue)
    throw u.payload;
  if (u.error)
    throw u.error;
  return u.payload;
}
function mg(u) {
  return u !== null && typeof u == "object" && typeof u.then == "function";
}
var yg = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function vg(u, c) {
  return `${u}/${c}`;
}
function gg({
  creators: u
} = {}) {
  const c = u?.asyncThunk?.[yg];
  return function(r) {
    const {
      name: d,
      reducerPath: h = d
    } = r;
    if (!d)
      throw new Error(Zt(11));
    const p = (typeof r.reducers == "function" ? r.reducers(Sg()) : r.reducers) || {}, D = Object.keys(p), v = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, m = {
      addCase(b, O) {
        const C = typeof b == "string" ? b : b.type;
        if (!C)
          throw new Error(Zt(12));
        if (C in v.sliceCaseReducersByType)
          throw new Error(Zt(13));
        return v.sliceCaseReducersByType[C] = O, m;
      },
      addMatcher(b, O) {
        return v.sliceMatchers.push({
          matcher: b,
          reducer: O
        }), m;
      },
      exposeAction(b, O) {
        return v.actionCreators[b] = O, m;
      },
      exposeCaseReducer(b, O) {
        return v.sliceCaseReducersByName[b] = O, m;
      }
    };
    D.forEach((b) => {
      const O = p[b], C = {
        reducerName: b,
        type: vg(d, b),
        createNotation: typeof r.reducers == "function"
      };
      _g(O) ? Cg(C, O, m, c) : bg(C, O, m);
    });
    function j() {
      const [b = {}, O = [], C = void 0] = typeof r.extraReducers == "function" ? ih(r.extraReducers) : [r.extraReducers], T = {
        ...b,
        ...v.sliceCaseReducersByType
      };
      return rg(r.initialState, (R) => {
        for (let X in T)
          R.addCase(X, T[X]);
        for (let X of v.sliceMatchers)
          R.addMatcher(X.matcher, X.reducer);
        for (let X of O)
          R.addMatcher(X.matcher, X.reducer);
        C && R.addDefaultCase(C);
      });
    }
    const S = (b) => b, U = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new WeakMap();
    let z;
    function L(b, O) {
      return z || (z = j()), z(b, O);
    }
    function x() {
      return z || (z = j()), z.getInitialState();
    }
    function G(b, O = !1) {
      function C(R) {
        let X = R[b];
        return typeof X > "u" && O && (X = cc(Q, C, x)), X;
      }
      function T(R = S) {
        const X = cc(U, O, () => /* @__PURE__ */ new WeakMap());
        return cc(X, R, () => {
          const V = {};
          for (const [q, _] of Object.entries(r.selectors ?? {}))
            V[q] = pg(_, R, () => cc(Q, R, x), O);
          return V;
        });
      }
      return {
        reducerPath: b,
        getSelectors: T,
        get selectors() {
          return T(C);
        },
        selectSlice: C
      };
    }
    const F = {
      name: d,
      reducer: L,
      actions: v.actionCreators,
      caseReducers: v.sliceCaseReducersByName,
      getInitialState: x,
      ...G(h),
      injectInto(b, {
        reducerPath: O,
        ...C
      } = {}) {
        const T = O ?? h;
        return b.inject({
          reducerPath: T,
          reducer: L
        }, C), {
          ...F,
          ...G(T, !0)
        };
      }
    };
    return F;
  };
}
function pg(u, c, s, r) {
  function d(h, ...p) {
    let D = c(h);
    return typeof D > "u" && r && (D = s()), u(D, ...p);
  }
  return d.unwrapped = u, d;
}
var Pn = /* @__PURE__ */ gg();
function Sg() {
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
function bg({
  type: u,
  reducerName: c,
  createNotation: s
}, r, d) {
  let h, p;
  if ("reducer" in r) {
    if (s && !Eg(r))
      throw new Error(Zt(17));
    h = r.reducer, p = r.prepare;
  } else
    h = r;
  d.addCase(u, h).exposeCaseReducer(c, h).exposeAction(c, p ? Wt(u, p) : Wt(u));
}
function _g(u) {
  return u._reducerDefinitionType === "asyncThunk";
}
function Eg(u) {
  return u._reducerDefinitionType === "reducerWithPrepare";
}
function Cg({
  type: u,
  reducerName: c
}, s, r, d) {
  if (!d)
    throw new Error(Zt(18));
  const {
    payloadCreator: h,
    fulfilled: p,
    pending: D,
    rejected: v,
    settled: m,
    options: j
  } = s, S = d(u, h, j);
  r.exposeAction(c, S), p && r.addCase(S.fulfilled, p), D && r.addCase(S.pending, D), v && r.addCase(S.rejected, v), m && r.addMatcher(S.settled, m), r.exposeCaseReducer(c, {
    fulfilled: p || fc,
    pending: D || fc,
    rejected: v || fc,
    settled: m || fc
  });
}
function fc() {
}
function Zt(u) {
  return `Minified Redux Toolkit error #${u}; visit https://redux-toolkit.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
}
var Tg = class extends Error {
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
}, fh = /* @__PURE__ */ ((u) => (u.uninitialized = "uninitialized", u.pending = "pending", u.fulfilled = "fulfilled", u.rejected = "rejected", u))(fh || {}), Mn = "uninitialized", Cs = "pending", bu = "fulfilled", _u = "rejected";
function v1(u) {
  return {
    status: u,
    isUninitialized: u === Mn,
    isLoading: u === Cs,
    isSuccess: u === bu,
    isError: u === _u
  };
}
var g1 = tl;
function Hs(u, c) {
  if (u === c || !(g1(u) && g1(c) || Array.isArray(u) && Array.isArray(c)))
    return c;
  const s = Object.keys(c), r = Object.keys(u);
  let d = s.length === r.length;
  const h = Array.isArray(c) ? [] : {};
  for (const p of s)
    h[p] = Hs(u[p], c[p]), d && (d = u[p] === h[p]);
  return d ? u : h;
}
function Ts(u, c, s) {
  return u.reduce((r, d, h) => (c(d, h) && r.push(s(d, h)), r), []).flat();
}
function Ag(u) {
  return new RegExp("(^|:)//").test(u);
}
function Mg() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function Qs(u) {
  return u != null;
}
function p1(u) {
  return [...u?.values() ?? []].filter(Qs);
}
function Dg() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
var zg = (u) => u.replace(/\/$/, ""), Og = (u) => u.replace(/^\//, "");
function Rg(u, c) {
  if (!u)
    return c;
  if (!c)
    return u;
  if (Ag(c))
    return c;
  const s = u.endsWith("/") || !c.startsWith("?") ? "/" : "";
  return u = zg(u), c = Og(c), `${u}${s}${c}`;
}
function Mc(u, c, s) {
  return u.has(c) ? u.get(c) : u.set(c, s(c)).get(c);
}
var As = () => /* @__PURE__ */ new Map(), Ng = (u) => {
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
}, Ug = (...u) => {
  for (const s of u) if (s.aborted) return AbortSignal.abort(s.reason);
  const c = new AbortController();
  for (const s of u)
    s.addEventListener("abort", () => c.abort(s.reason), {
      signal: c.signal,
      once: !0
    });
  return c.signal;
}, S1 = (...u) => fetch(...u), xg = (u) => u.status >= 200 && u.status <= 299, jg = (u) => (
  /*applicat*/
  /ion\/(vnd\.api\+)?json/.test(u.get("content-type") || "")
);
function b1(u) {
  if (!tl(u))
    return u;
  const c = {
    ...u
  };
  for (const [s, r] of Object.entries(c))
    r === void 0 && delete c[s];
  return c;
}
var qg = (u) => typeof u == "object" && (tl(u) || Array.isArray(u) || typeof u.toJSON == "function");
function Bg({
  baseUrl: u,
  prepareHeaders: c = (S) => S,
  fetchFn: s = S1,
  paramsSerializer: r,
  isJsonContentType: d = jg,
  jsonContentType: h = "application/json",
  jsonReplacer: p,
  timeout: D,
  responseHandler: v,
  validateStatus: m,
  ...j
} = {}) {
  return typeof fetch > "u" && s === S1 && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), async (U, Q, z) => {
    const {
      getState: L,
      extra: x,
      endpoint: G,
      forced: F,
      type: b
    } = Q;
    let O, {
      url: C,
      headers: T = new Headers(j.headers),
      params: R = void 0,
      responseHandler: X = v ?? "json",
      validateStatus: V = m ?? xg,
      timeout: q = D,
      ..._
    } = typeof U == "string" ? {
      url: U
    } : U, A = {
      ...j,
      signal: q ? Ug(Q.signal, Ng(q)) : Q.signal,
      ..._
    };
    T = new Headers(b1(T)), A.headers = await c(T, {
      getState: L,
      arg: U,
      extra: x,
      endpoint: G,
      forced: F,
      type: b,
      extraOptions: z
    }) || T;
    const Y = qg(A.body);
    if (A.body != null && !Y && typeof A.body != "string" && A.headers.delete("content-type"), !A.headers.has("content-type") && Y && A.headers.set("content-type", h), Y && d(A.headers) && (A.body = JSON.stringify(A.body, p)), A.headers.has("accept") || (X === "json" ? A.headers.set("accept", "application/json") : X === "text" && A.headers.set("accept", "text/plain, text/html, */*")), R) {
      const ue = ~C.indexOf("?") ? "&" : "?", y = r ? r(R) : new URLSearchParams(b1(R));
      C += ue + y;
    }
    C = Rg(u, C);
    const $ = new Request(C, A);
    O = {
      request: new Request(C, A)
    };
    let M;
    try {
      M = await s($);
    } catch (ue) {
      return {
        error: {
          status: (ue instanceof Error || typeof DOMException < "u" && ue instanceof DOMException) && ue.name === "TimeoutError" ? "TIMEOUT_ERROR" : "FETCH_ERROR",
          error: String(ue)
        },
        meta: O
      };
    }
    const W = M.clone();
    O.response = W;
    let P, te = "";
    try {
      let ue;
      if (await Promise.all([
        S(M, X).then((y) => P = y, (y) => ue = y),
        // see https://github.com/node-fetch/node-fetch/issues/665#issuecomment-538995182
        // we *have* to "use up" both streams at the same time or they will stop running in node-fetch scenarios
        W.text().then((y) => te = y, () => {
        })
      ]), ue) throw ue;
    } catch (ue) {
      return {
        error: {
          status: "PARSING_ERROR",
          originalStatus: M.status,
          data: te,
          error: String(ue)
        },
        meta: O
      };
    }
    return V(M, P) ? {
      data: P,
      meta: O
    } : {
      error: {
        status: M.status,
        data: P
      },
      meta: O
    };
  };
  async function S(U, Q) {
    if (typeof Q == "function")
      return Q(U);
    if (Q === "content-type" && (Q = d(U.headers) ? "json" : "text"), Q === "json") {
      const z = await U.text();
      return z.length ? JSON.parse(z) : null;
    }
    return U.text();
  }
}
var _1 = class {
  constructor(u, c = void 0) {
    this.value = u, this.meta = c;
  }
}, jc = "__rtkq/", Hg = "online", Qg = "offline", rh = "focused", ws = /* @__PURE__ */ Wt(`${jc}${rh}`), sh = /* @__PURE__ */ Wt(`${jc}un${rh}`), Ls = /* @__PURE__ */ Wt(`${jc}${Hg}`), oh = /* @__PURE__ */ Wt(`${jc}${Qg}`), Lu = "query", dh = "mutation", hh = "infinitequery";
function qc(u) {
  return u.type === Lu;
}
function wg(u) {
  return u.type === dh;
}
function Bc(u) {
  return u.type === hh;
}
function Dc(u) {
  return qc(u) || Bc(u);
}
function Ys(u, c, s, r, d, h) {
  const p = Lg(u) ? u(c, s, r, d) : u;
  return p ? Ts(p, Qs, (D) => h(mh(D))) : [];
}
function Lg(u) {
  return typeof u == "function";
}
function mh(u) {
  return typeof u == "string" ? {
    type: u
  } : u;
}
function Yg(u, c) {
  return u.catch(c);
}
var Sa = (u, c) => u.endpointDefinitions[c], Nu = /* @__PURE__ */ Symbol("forceQueryFn"), Ms = (u) => typeof u[Nu] == "function";
function Gg({
  serializeQueryArgs: u,
  queryThunk: c,
  infiniteQueryThunk: s,
  mutationThunk: r,
  api: d,
  context: h,
  getInternalState: p
}) {
  const D = (O) => p(O)?.runningQueries, v = (O) => p(O)?.runningMutations, {
    unsubscribeQueryResult: m,
    removeMutationResult: j,
    updateSubscriptionOptions: S
  } = d.internalActions;
  return {
    buildInitiateQuery: G,
    buildInitiateInfiniteQuery: F,
    buildInitiateMutation: b,
    getRunningQueryThunk: U,
    getRunningMutationThunk: Q,
    getRunningQueriesThunk: z,
    getRunningMutationsThunk: L
  };
  function U(O, C) {
    return (T) => {
      const R = Sa(h, O), X = u({
        queryArgs: C,
        endpointDefinition: R,
        endpointName: O
      });
      return D(T)?.get(X);
    };
  }
  function Q(O, C) {
    return (T) => v(T)?.get(C);
  }
  function z() {
    return (O) => p1(D(O));
  }
  function L() {
    return (O) => p1(v(O));
  }
  function x(O, C) {
    const T = (R, {
      subscribe: X = !0,
      forceRefetch: V,
      subscriptionOptions: q,
      [Nu]: _,
      ...A
    } = {}) => (Y, $) => {
      const ae = u({
        queryArgs: R,
        endpointDefinition: C,
        endpointName: O
      });
      let M;
      const W = {
        ...A,
        type: Lu,
        subscribe: X,
        forceRefetch: V,
        subscriptionOptions: q,
        endpointName: O,
        originalArgs: R,
        queryCacheKey: ae,
        [Nu]: _
      };
      if (qc(C))
        M = c(W);
      else {
        const {
          direction: ie,
          initialPageParam: Se,
          refetchCachedPages: de
        } = A;
        M = s({
          ...W,
          // Supply these even if undefined. This helps with a field existence
          // check over in `buildSlice.ts`
          direction: ie,
          initialPageParam: Se,
          refetchCachedPages: de
        });
      }
      const P = d.endpoints[O].select(R), te = Y(M), ue = P($()), {
        requestId: y,
        abort: K
      } = te, le = ue.requestId !== y, ne = D(Y)?.get(ae), fe = () => P($()), se = Object.assign(_ ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        te.then(fe)
      ) : le && !ne ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(ue)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([ne, te]).then(fe)
      ), {
        arg: R,
        requestId: y,
        subscriptionOptions: q,
        queryCacheKey: ae,
        abort: K,
        async unwrap() {
          const ie = await se;
          if (ie.isError)
            throw ie.error;
          return ie.data;
        },
        refetch: (ie) => Y(T(R, {
          subscribe: !1,
          forceRefetch: !0,
          ...ie
        })),
        unsubscribe() {
          X && Y(m({
            queryCacheKey: ae,
            requestId: y
          }));
        },
        updateSubscriptionOptions(ie) {
          se.subscriptionOptions = ie, Y(S({
            endpointName: O,
            requestId: y,
            queryCacheKey: ae,
            options: ie
          }));
        }
      });
      if (!ne && !le && !_) {
        const ie = D(Y);
        ie.set(ae, se), se.then(() => {
          ie.delete(ae);
        });
      }
      return se;
    };
    return T;
  }
  function G(O, C) {
    return x(O, C);
  }
  function F(O, C) {
    return x(O, C);
  }
  function b(O) {
    return (C, {
      track: T = !0,
      fixedCacheKey: R
    } = {}) => (X, V) => {
      const q = r({
        type: "mutation",
        endpointName: O,
        originalArgs: C,
        track: T,
        fixedCacheKey: R
      }), _ = X(q), {
        requestId: A,
        abort: Y,
        unwrap: $
      } = _, ae = Yg(_.unwrap().then((te) => ({
        data: te
      })), (te) => ({
        error: te
      })), M = () => {
        X(j({
          requestId: A,
          fixedCacheKey: R
        }));
      }, W = Object.assign(ae, {
        arg: _.arg,
        requestId: A,
        abort: Y,
        unwrap: $,
        reset: M
      }), P = v(X);
      return P.set(A, W), W.then(() => {
        P.delete(A);
      }), R && (P.set(R, W), W.then(() => {
        P.get(R) === W && P.delete(R);
      })), W;
    };
  }
}
var yh = class extends Tg {
  constructor(u, c, s, r) {
    super(u), this.value = c, this.schemaName = s, this._bqMeta = r;
  }
}, El = (u, c) => Array.isArray(u) ? u.includes(c) : !!u;
async function Cl(u, c, s, r) {
  const d = await u["~standard"].validate(c);
  if (d.issues)
    throw new yh(d.issues, c, s, r);
  return d.value;
}
function E1(u) {
  return u;
}
var yu = (u = {}) => ({
  ...u,
  [Nc]: !0
});
function Vg({
  reducerPath: u,
  baseQuery: c,
  context: {
    endpointDefinitions: s
  },
  serializeQueryArgs: r,
  api: d,
  assertTagType: h,
  selectors: p,
  onSchemaFailure: D,
  catchSchemaFailure: v,
  skipSchemaValidation: m
}) {
  const j = (_, A, Y, $) => (ae, M) => {
    const W = s[_], P = r({
      queryArgs: A,
      endpointDefinition: W,
      endpointName: _
    });
    if (ae(d.internalActions.queryResultPatched({
      queryCacheKey: P,
      patches: Y
    })), !$)
      return;
    const te = d.endpoints[_].select(A)(
      // Work around TS 4.1 mismatch
      M()
    ), ue = Ys(W.providesTags, te.data, void 0, A, {}, h);
    ae(d.internalActions.updateProvidedBy([{
      queryCacheKey: P,
      providedTags: ue
    }]));
  };
  function S(_, A, Y = 0) {
    const $ = [A, ..._];
    return Y && $.length > Y ? $.slice(0, -1) : $;
  }
  function U(_, A, Y = 0) {
    const $ = [..._, A];
    return Y && $.length > Y ? $.slice(1) : $;
  }
  const Q = (_, A, Y, $ = !0) => (ae, M) => {
    const P = d.endpoints[_].select(A)(
      // Work around TS 4.1 mismatch
      M()
    ), te = {
      patches: [],
      inversePatches: [],
      undo: () => ae(d.util.patchQueryData(_, A, te.inversePatches, $))
    };
    if (P.status === Mn)
      return te;
    let ue;
    if ("data" in P)
      if (Ut(P.data)) {
        const [y, K, le] = lh(P.data, Y);
        te.patches.push(...K), te.inversePatches.push(...le), ue = y;
      } else
        ue = Y(P.data), te.patches.push({
          op: "replace",
          path: [],
          value: ue
        }), te.inversePatches.push({
          op: "replace",
          path: [],
          value: P.data
        });
    return te.patches.length === 0 || ae(d.util.patchQueryData(_, A, te.patches, $)), te;
  }, z = (_, A, Y) => ($) => $(d.endpoints[_].initiate(A, {
    subscribe: !1,
    forceRefetch: !0,
    [Nu]: () => ({
      data: Y
    })
  })), L = (_, A) => _.query && _[A] ? _[A] : E1, x = async (_, {
    signal: A,
    abort: Y,
    rejectWithValue: $,
    fulfillWithValue: ae,
    dispatch: M,
    getState: W,
    extra: P
  }) => {
    const te = s[_.endpointName], {
      metaSchema: ue,
      skipSchemaValidation: y = m
    } = te, K = _.type === Lu;
    try {
      let le = E1;
      const ne = {
        signal: A,
        abort: Y,
        dispatch: M,
        getState: W,
        extra: P,
        endpoint: _.endpointName,
        type: _.type,
        forced: K ? G(_, W()) : void 0,
        queryCacheKey: K ? _.queryCacheKey : void 0
      }, fe = K ? _[Nu] : void 0;
      let se;
      const ie = async (de, pe, rt, Pe) => {
        if (pe == null && de.pages.length)
          return Promise.resolve({
            data: de
          });
        const nn = {
          queryArg: _.originalArgs,
          pageParam: pe
        }, et = await Se(nn), $t = Pe ? S : U;
        return {
          data: {
            pages: $t(de.pages, et.data, rt),
            pageParams: $t(de.pageParams, pe, rt)
          },
          meta: et.meta
        };
      };
      async function Se(de) {
        let pe;
        const {
          extraOptions: rt,
          argSchema: Pe,
          rawResponseSchema: nn,
          responseSchema: et
        } = te;
        if (Pe && !El(y, "arg") && (de = await Cl(
          Pe,
          de,
          "argSchema",
          {}
          // we don't have a meta yet, so we can't pass it
        )), fe ? pe = fe() : te.query ? (le = L(te, "transformResponse"), pe = await c(te.query(de), ne, rt)) : pe = await te.queryFn(de, ne, rt, (Dn) => c(Dn, ne, rt)), typeof process < "u", pe.error) throw new _1(pe.error, pe.meta);
        let {
          data: $t
        } = pe;
        nn && !El(y, "rawResponse") && ($t = await Cl(nn, pe.data, "rawResponseSchema", pe.meta));
        let xt = await le($t, pe.meta, de);
        return et && !El(y, "response") && (xt = await Cl(et, xt, "responseSchema", pe.meta)), {
          ...pe,
          data: xt
        };
      }
      if (K && "infiniteQueryOptions" in te) {
        const {
          infiniteQueryOptions: de
        } = te, {
          maxPages: pe = 1 / 0
        } = de, rt = _.refetchCachedPages ?? de.refetchCachedPages ?? !0;
        let Pe;
        const nn = {
          pages: [],
          pageParams: []
        }, et = p.selectQueryEntry(W(), _.queryCacheKey)?.data, xt = /* arg.forceRefetch */ G(_, W()) && !_.direction || !et ? nn : et;
        if ("direction" in _ && _.direction && xt.pages.length) {
          const Dn = _.direction === "backward", ll = (Dn ? vh : Ds)(de, xt, _.originalArgs);
          Pe = await ie(xt, ll, pe, Dn);
        } else {
          const {
            initialPageParam: Dn = de.initialPageParam
          } = _, Ol = et?.pageParams ?? [], ll = Ol[0] ?? Dn, ba = Ol.length;
          if (Pe = await ie(xt, ll, pe), fe && (Pe = {
            data: Pe.data.pages[0]
          }), rt)
            for (let Rl = 1; Rl < ba; Rl++) {
              const Qc = Ds(de, Pe.data, _.originalArgs);
              Pe = await ie(Pe.data, Qc, pe);
            }
        }
        se = Pe;
      } else
        se = await Se(_.originalArgs);
      return ue && !El(y, "meta") && se.meta && (se.meta = await Cl(ue, se.meta, "metaSchema", se.meta)), ae(se.data, yu({
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: se.meta
      }));
    } catch (le) {
      let ne = le;
      if (ne instanceof _1) {
        let fe = L(te, "transformErrorResponse");
        const {
          rawErrorResponseSchema: se,
          errorResponseSchema: ie
        } = te;
        let {
          value: Se,
          meta: de
        } = ne;
        try {
          se && !El(y, "rawErrorResponse") && (Se = await Cl(se, Se, "rawErrorResponseSchema", de)), ue && !El(y, "meta") && (de = await Cl(ue, de, "metaSchema", de));
          let pe = await fe(Se, de, _.originalArgs);
          return ie && !El(y, "errorResponse") && (pe = await Cl(ie, pe, "errorResponseSchema", de)), $(pe, yu({
            baseQueryMeta: de
          }));
        } catch (pe) {
          ne = pe;
        }
      }
      try {
        if (ne instanceof yh) {
          const fe = {
            endpoint: _.endpointName,
            arg: _.originalArgs,
            type: _.type,
            queryCacheKey: K ? _.queryCacheKey : void 0
          };
          te.onSchemaFailure?.(ne, fe), D?.(ne, fe);
          const {
            catchSchemaFailure: se = v
          } = te;
          if (se)
            return $(se(ne, fe), yu({
              baseQueryMeta: ne._bqMeta
            }));
        }
      } catch (fe) {
        ne = fe;
      }
      throw console.error(ne), ne;
    }
  };
  function G(_, A) {
    const Y = p.selectQueryEntry(A, _.queryCacheKey), $ = p.selectConfig(A).refetchOnMountOrArgChange, ae = Y?.fulfilledTimeStamp, M = _.forceRefetch ?? (_.subscribe && $);
    return M ? M === !0 || (Number(/* @__PURE__ */ new Date()) - Number(ae)) / 1e3 >= M : !1;
  }
  const F = () => y1(`${u}/executeQuery`, x, {
    getPendingMeta({
      arg: A
    }) {
      const Y = s[A.endpointName];
      return yu({
        startedTimeStamp: Date.now(),
        ...Bc(Y) ? {
          direction: A.direction
        } : {}
      });
    },
    condition(A, {
      getState: Y
    }) {
      const $ = Y(), ae = p.selectQueryEntry($, A.queryCacheKey), M = ae?.fulfilledTimeStamp, W = A.originalArgs, P = ae?.originalArgs, te = s[A.endpointName], ue = A.direction;
      return Ms(A) ? !0 : ae?.status === "pending" ? !1 : G(A, $) || qc(te) && te?.forceRefetch?.({
        currentArg: W,
        previousArg: P,
        endpointState: ae,
        state: $
      }) ? !0 : !(M && !ue);
    },
    dispatchConditionRejection: !0
  }), b = F(), O = F(), C = y1(`${u}/executeMutation`, x, {
    getPendingMeta() {
      return yu({
        startedTimeStamp: Date.now()
      });
    }
  }), T = (_) => "force" in _, R = (_) => "ifOlderThan" in _, X = (_, A, Y = {}) => ($, ae) => {
    const M = T(Y) && Y.force, W = R(Y) && Y.ifOlderThan, P = (ue = !0) => {
      const y = {
        forceRefetch: ue,
        subscribe: !1
      };
      return d.endpoints[_].initiate(A, y);
    }, te = d.endpoints[_].select(A)(ae());
    if (M)
      $(P());
    else if (W) {
      const ue = te?.fulfilledTimeStamp;
      if (!ue) {
        $(P());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(ue))) / 1e3 >= W && $(P());
    } else
      $(P(!1));
  };
  function V(_) {
    return (A) => A?.meta?.arg?.endpointName === _;
  }
  function q(_, A) {
    return {
      matchPending: Au(qs(_), V(A)),
      matchFulfilled: Au(nl(_), V(A)),
      matchRejected: Au(pa(_), V(A))
    };
  }
  return {
    queryThunk: b,
    mutationThunk: C,
    infiniteQueryThunk: O,
    prefetch: X,
    updateQueryData: Q,
    upsertQueryData: z,
    patchQueryData: j,
    buildMatchThunkActions: q
  };
}
function Ds(u, {
  pages: c,
  pageParams: s
}, r) {
  const d = c.length - 1;
  return u.getNextPageParam(c[d], c, s[d], s, r);
}
function vh(u, {
  pages: c,
  pageParams: s
}, r) {
  return u.getPreviousPageParam?.(c[0], c, s[0], s, r);
}
function gh(u, c, s, r) {
  return Ys(s[u.meta.arg.endpointName][c], nl(u) ? u.payload : void 0, xc(u) ? u.payload : void 0, u.meta.arg.originalArgs, "baseQueryMeta" in u.meta ? u.meta.baseQueryMeta : void 0, r);
}
function C1(u) {
  return Nt(u) ? th(u) : u;
}
function rc(u, c, s) {
  const r = u[c];
  r && s(r);
}
function Uu(u) {
  return ("arg" in u ? u.arg.fixedCacheKey : u.fixedCacheKey) ?? u.requestId;
}
function T1(u, c, s) {
  const r = u[Uu(c)];
  r && s(r);
}
var sc = {};
function Xg({
  reducerPath: u,
  queryThunk: c,
  mutationThunk: s,
  serializeQueryArgs: r,
  context: {
    endpointDefinitions: d,
    apiUid: h,
    extractRehydrationInfo: p,
    hasRehydrationInfo: D
  },
  assertTagType: v,
  config: m
}) {
  const j = Wt(`${u}/resetApiState`);
  function S(V, q, _, A) {
    V[q.queryCacheKey] ??= {
      status: Mn,
      endpointName: q.endpointName
    }, rc(V, q.queryCacheKey, (Y) => {
      Y.status = Cs, Y.requestId = _ && Y.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        Y.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        A.requestId
      ), q.originalArgs !== void 0 && (Y.originalArgs = q.originalArgs), Y.startedTimeStamp = A.startedTimeStamp;
      const $ = d[A.arg.endpointName];
      Bc($) && "direction" in q && (Y.direction = q.direction);
    });
  }
  function U(V, q, _, A) {
    rc(V, q.arg.queryCacheKey, (Y) => {
      if (Y.requestId !== q.requestId && !A) return;
      const {
        merge: $
      } = d[q.arg.endpointName];
      if (Y.status = bu, $)
        if (Y.data !== void 0) {
          const {
            fulfilledTimeStamp: ae,
            arg: M,
            baseQueryMeta: W,
            requestId: P
          } = q;
          let te = Qu(Y.data, (ue) => $(ue, _, {
            arg: M.originalArgs,
            baseQueryMeta: W,
            fulfilledTimeStamp: ae,
            requestId: P
          }));
          Y.data = te;
        } else
          Y.data = _;
      else
        Y.data = d[q.arg.endpointName].structuralSharing ?? !0 ? Hs(Nt(Y.data) ? Dv(Y.data) : Y.data, _) : _;
      delete Y.error, Y.fulfilledTimeStamp = q.fulfilledTimeStamp;
    });
  }
  const Q = Pn({
    name: `${u}/queries`,
    initialState: sc,
    reducers: {
      removeQueryResult: {
        reducer(V, {
          payload: {
            queryCacheKey: q
          }
        }) {
          delete V[q];
        },
        prepare: mu()
      },
      cacheEntriesUpserted: {
        reducer(V, q) {
          for (const _ of q.payload) {
            const {
              queryDescription: A,
              value: Y
            } = _;
            S(V, A, !0, {
              arg: A,
              requestId: q.meta.requestId,
              startedTimeStamp: q.meta.timestamp
            }), U(
              V,
              {
                arg: A,
                requestId: q.meta.requestId,
                fulfilledTimeStamp: q.meta.timestamp,
                baseQueryMeta: {}
              },
              Y,
              // We know we're upserting here
              !0
            );
          }
        },
        prepare: (V) => ({
          payload: V.map((A) => {
            const {
              endpointName: Y,
              arg: $,
              value: ae
            } = A, M = d[Y];
            return {
              queryDescription: {
                type: Lu,
                endpointName: Y,
                originalArgs: A.arg,
                queryCacheKey: r({
                  queryArgs: $,
                  endpointDefinition: M,
                  endpointName: Y
                })
              },
              value: ae
            };
          }),
          meta: {
            [Nc]: !0,
            requestId: Bs(),
            timestamp: Date.now()
          }
        })
      },
      queryResultPatched: {
        reducer(V, {
          payload: {
            queryCacheKey: q,
            patches: _
          }
        }) {
          rc(V, q, (A) => {
            A.data = f1(A.data, _.concat());
          });
        },
        prepare: mu()
      }
    },
    extraReducers(V) {
      V.addCase(c.pending, (q, {
        meta: _,
        meta: {
          arg: A
        }
      }) => {
        const Y = Ms(A);
        S(q, A, Y, _);
      }).addCase(c.fulfilled, (q, {
        meta: _,
        payload: A
      }) => {
        const Y = Ms(_.arg);
        U(q, _, A, Y);
      }).addCase(c.rejected, (q, {
        meta: {
          condition: _,
          arg: A,
          requestId: Y
        },
        error: $,
        payload: ae
      }) => {
        rc(q, A.queryCacheKey, (M) => {
          if (!_) {
            if (M.requestId !== Y) return;
            M.status = _u, M.error = ae ?? $;
          }
        });
      }).addMatcher(D, (q, _) => {
        const {
          queries: A
        } = p(_);
        for (const [Y, $] of Object.entries(A))
          // do not rehydrate entries that were currently in flight.
          ($?.status === bu || $?.status === _u) && (q[Y] = $);
      });
    }
  }), z = Pn({
    name: `${u}/mutations`,
    initialState: sc,
    reducers: {
      removeMutationResult: {
        reducer(V, {
          payload: q
        }) {
          const _ = Uu(q);
          _ in V && delete V[_];
        },
        prepare: mu()
      }
    },
    extraReducers(V) {
      V.addCase(s.pending, (q, {
        meta: _,
        meta: {
          requestId: A,
          arg: Y,
          startedTimeStamp: $
        }
      }) => {
        Y.track && (q[Uu(_)] = {
          requestId: A,
          status: Cs,
          endpointName: Y.endpointName,
          startedTimeStamp: $
        });
      }).addCase(s.fulfilled, (q, {
        payload: _,
        meta: A
      }) => {
        A.arg.track && T1(q, A, (Y) => {
          Y.requestId === A.requestId && (Y.status = bu, Y.data = _, Y.fulfilledTimeStamp = A.fulfilledTimeStamp);
        });
      }).addCase(s.rejected, (q, {
        payload: _,
        error: A,
        meta: Y
      }) => {
        Y.arg.track && T1(q, Y, ($) => {
          $.requestId === Y.requestId && ($.status = _u, $.error = _ ?? A);
        });
      }).addMatcher(D, (q, _) => {
        const {
          mutations: A
        } = p(_);
        for (const [Y, $] of Object.entries(A))
          // do not rehydrate entries that were currently in flight.
          ($?.status === bu || $?.status === _u) && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          Y !== $?.requestId && (q[Y] = $);
      });
    }
  }), L = {
    tags: {},
    keys: {}
  }, x = Pn({
    name: `${u}/invalidation`,
    initialState: L,
    reducers: {
      updateProvidedBy: {
        reducer(V, q) {
          for (const {
            queryCacheKey: _,
            providedTags: A
          } of q.payload) {
            G(V, _);
            for (const {
              type: Y,
              id: $
            } of A) {
              const ae = (V.tags[Y] ??= {})[$ || "__internal_without_id"] ??= [];
              ae.includes(_) || ae.push(_);
            }
            V.keys[_] = A;
          }
        },
        prepare: mu()
      }
    },
    extraReducers(V) {
      V.addCase(Q.actions.removeQueryResult, (q, {
        payload: {
          queryCacheKey: _
        }
      }) => {
        G(q, _);
      }).addMatcher(D, (q, _) => {
        const {
          provided: A
        } = p(_);
        for (const [Y, $] of Object.entries(A.tags ?? {}))
          for (const [ae, M] of Object.entries($)) {
            const W = (q.tags[Y] ??= {})[ae || "__internal_without_id"] ??= [];
            for (const P of M)
              W.includes(P) || W.push(P), q.keys[P] = A.keys[P];
          }
      }).addMatcher(An(nl(c), xc(c)), (q, _) => {
        F(q, [_]);
      }).addMatcher(Q.actions.cacheEntriesUpserted.match, (q, _) => {
        const A = _.payload.map(({
          queryDescription: Y,
          value: $
        }) => ({
          type: "UNKNOWN",
          payload: $,
          meta: {
            requestStatus: "fulfilled",
            requestId: "UNKNOWN",
            arg: Y
          }
        }));
        F(q, A);
      });
    }
  });
  function G(V, q) {
    const _ = C1(V.keys[q] ?? []);
    for (const A of _) {
      const Y = A.type, $ = A.id ?? "__internal_without_id", ae = V.tags[Y]?.[$];
      ae && (V.tags[Y][$] = C1(ae).filter((M) => M !== q));
    }
    delete V.keys[q];
  }
  function F(V, q) {
    const _ = q.map((A) => {
      const Y = gh(A, "providesTags", d, v), {
        queryCacheKey: $
      } = A.meta.arg;
      return {
        queryCacheKey: $,
        providedTags: Y
      };
    });
    x.caseReducers.updateProvidedBy(V, x.actions.updateProvidedBy(_));
  }
  const b = Pn({
    name: `${u}/subscriptions`,
    initialState: sc,
    reducers: {
      updateSubscriptionOptions(V, q) {
      },
      unsubscribeQueryResult(V, q) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), O = Pn({
    name: `${u}/internalSubscriptions`,
    initialState: sc,
    reducers: {
      subscriptionsUpdated: {
        reducer(V, q) {
          return f1(V, q.payload);
        },
        prepare: mu()
      }
    }
  }), C = Pn({
    name: `${u}/config`,
    initialState: {
      online: Dg(),
      focused: Mg(),
      middlewareRegistered: !1,
      ...m
    },
    reducers: {
      middlewareRegistered(V, {
        payload: q
      }) {
        V.middlewareRegistered = V.middlewareRegistered === "conflict" || h !== q ? "conflict" : !0;
      }
    },
    extraReducers: (V) => {
      V.addCase(Ls, (q) => {
        q.online = !0;
      }).addCase(oh, (q) => {
        q.online = !1;
      }).addCase(ws, (q) => {
        q.focused = !0;
      }).addCase(sh, (q) => {
        q.focused = !1;
      }).addMatcher(D, (q) => ({
        ...q
      }));
    }
  }), T = J1({
    queries: Q.reducer,
    mutations: z.reducer,
    provided: x.reducer,
    subscriptions: O.reducer,
    config: C.reducer
  }), R = (V, q) => T(j.match(q) ? void 0 : V, q), X = {
    ...C.actions,
    ...Q.actions,
    ...b.actions,
    ...O.actions,
    ...z.actions,
    ...x.actions,
    resetApiState: j
  };
  return {
    reducer: R,
    actions: X
  };
}
var Ft = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), ph = {
  status: Mn
}, A1 = /* @__PURE__ */ Qu(ph, () => {
}), M1 = /* @__PURE__ */ Qu(ph, () => {
});
function Zg({
  serializeQueryArgs: u,
  reducerPath: c,
  createSelector: s
}) {
  const r = (b) => A1, d = (b) => M1;
  return {
    buildQuerySelector: U,
    buildInfiniteQuerySelector: Q,
    buildMutationSelector: z,
    selectInvalidatedBy: L,
    selectCachedArgsForQuery: x,
    selectApiState: p,
    selectQueries: D,
    selectMutations: m,
    selectQueryEntry: v,
    selectConfig: j
  };
  function h(b) {
    return {
      ...b,
      ...v1(b.status)
    };
  }
  function p(b) {
    return b[c];
  }
  function D(b) {
    return p(b)?.queries;
  }
  function v(b, O) {
    return D(b)?.[O];
  }
  function m(b) {
    return p(b)?.mutations;
  }
  function j(b) {
    return p(b)?.config;
  }
  function S(b, O, C) {
    return (T) => {
      if (T === Ft)
        return s(r, C);
      const R = u({
        queryArgs: T,
        endpointDefinition: O,
        endpointName: b
      });
      return s((V) => v(V, R) ?? A1, C);
    };
  }
  function U(b, O) {
    return S(b, O, h);
  }
  function Q(b, O) {
    const {
      infiniteQueryOptions: C
    } = O;
    function T(R) {
      const X = {
        ...R,
        ...v1(R.status)
      }, {
        isLoading: V,
        isError: q,
        direction: _
      } = X, A = _ === "forward", Y = _ === "backward";
      return {
        ...X,
        hasNextPage: G(C, X.data, X.originalArgs),
        hasPreviousPage: F(C, X.data, X.originalArgs),
        isFetchingNextPage: V && A,
        isFetchingPreviousPage: V && Y,
        isFetchNextPageError: q && A,
        isFetchPreviousPageError: q && Y
      };
    }
    return S(b, O, T);
  }
  function z() {
    return (b) => {
      let O;
      return typeof b == "object" ? O = Uu(b) ?? Ft : O = b, s(O === Ft ? d : (R) => p(R)?.mutations?.[O] ?? M1, h);
    };
  }
  function L(b, O) {
    const C = b[c], T = /* @__PURE__ */ new Set(), R = Ts(O, Qs, mh);
    for (const X of R) {
      const V = C.provided.tags[X.type];
      if (!V)
        continue;
      let q = (X.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        V[X.id]
      ) : (
        // no id: invalidate all queries that provide this type
        Object.values(V).flat()
      )) ?? [];
      for (const _ of q)
        T.add(_);
    }
    return Array.from(T.values()).flatMap((X) => {
      const V = C.queries[X];
      return V ? {
        queryCacheKey: X,
        endpointName: V.endpointName,
        originalArgs: V.originalArgs
      } : [];
    });
  }
  function x(b, O) {
    return Ts(Object.values(D(b)), (C) => C?.endpointName === O && C.status !== Mn, (C) => C.originalArgs);
  }
  function G(b, O, C) {
    return O ? Ds(b, O, C) != null : !1;
  }
  function F(b, O, C) {
    return !O || !b.getPreviousPageParam ? !1 : vh(b, O, C) != null;
  }
}
var D1 = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, z1 = ({
  endpointName: u,
  queryArgs: c
}) => {
  let s = "";
  const r = D1?.get(c);
  if (typeof r == "string")
    s = r;
  else {
    const d = JSON.stringify(c, (h, p) => (p = typeof p == "bigint" ? {
      $bigint: p.toString()
    } : p, p = tl(p) ? Object.keys(p).sort().reduce((D, v) => (D[v] = p[v], D), {}) : p, p));
    tl(c) && D1?.set(c, d), s = d;
  }
  return `${u}(${s})`;
};
function Sh(...u) {
  return function(s) {
    const r = Ac((m) => s.extractRehydrationInfo?.(m, {
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
      serializeQueryArgs(m) {
        let j = z1;
        if ("serializeQueryArgs" in m.endpointDefinition) {
          const S = m.endpointDefinition.serializeQueryArgs;
          j = (U) => {
            const Q = S(U);
            return typeof Q == "string" ? Q : z1({
              ...U,
              queryArgs: Q
            });
          };
        } else s.serializeQueryArgs && (j = s.serializeQueryArgs);
        return j(m);
      },
      tagTypes: [...s.tagTypes || []]
    }, h = {
      endpointDefinitions: {},
      batch(m) {
        m();
      },
      apiUid: Bs(),
      extractRehydrationInfo: r,
      hasRehydrationInfo: Ac((m) => r(m) != null)
    }, p = {
      injectEndpoints: v,
      enhanceEndpoints({
        addTagTypes: m,
        endpoints: j
      }) {
        if (m)
          for (const S of m)
            d.tagTypes.includes(S) || d.tagTypes.push(S);
        if (j)
          for (const [S, U] of Object.entries(j))
            typeof U == "function" ? U(Sa(h, S)) : Object.assign(Sa(h, S) || {}, U);
        return p;
      }
    }, D = u.map((m) => m.init(p, d, h));
    function v(m) {
      const j = m.endpoints({
        query: (S) => ({
          ...S,
          type: Lu
        }),
        mutation: (S) => ({
          ...S,
          type: dh
        }),
        infiniteQuery: (S) => ({
          ...S,
          type: hh
        })
      });
      for (const [S, U] of Object.entries(j)) {
        if (m.overrideExisting !== !0 && S in h.endpointDefinitions) {
          if (m.overrideExisting === "throw")
            throw new Error(Zt(39));
          continue;
        }
        h.endpointDefinitions[S] = U;
        for (const Q of D)
          Q.injectEndpoint(S, U);
      }
      return p;
    }
    return p.injectEndpoints({
      endpoints: s.endpoints
    });
  };
}
function En(u, ...c) {
  return Object.assign(u, ...c);
}
var Kg = ({
  api: u,
  queryThunk: c,
  internalState: s,
  mwApi: r
}) => {
  const d = `${u.reducerPath}/subscriptions`;
  let h = null, p = null;
  const {
    updateSubscriptionOptions: D,
    unsubscribeQueryResult: v
  } = u.internalActions, m = (L, x) => {
    if (D.match(x)) {
      const {
        queryCacheKey: F,
        requestId: b,
        options: O
      } = x.payload, C = L.get(F);
      return C?.has(b) && C.set(b, O), !0;
    }
    if (v.match(x)) {
      const {
        queryCacheKey: F,
        requestId: b
      } = x.payload, O = L.get(F);
      return O && O.delete(b), !0;
    }
    if (u.internalActions.removeQueryResult.match(x))
      return L.delete(x.payload.queryCacheKey), !0;
    if (c.pending.match(x)) {
      const {
        meta: {
          arg: F,
          requestId: b
        }
      } = x, O = Mc(L, F.queryCacheKey, As);
      return F.subscribe && O.set(b, F.subscriptionOptions ?? O.get(b) ?? {}), !0;
    }
    let G = !1;
    if (c.rejected.match(x)) {
      const {
        meta: {
          condition: F,
          arg: b,
          requestId: O
        }
      } = x;
      if (F && b.subscribe) {
        const C = Mc(L, b.queryCacheKey, As);
        C.set(O, b.subscriptionOptions ?? C.get(O) ?? {}), G = !0;
      }
    }
    return G;
  }, j = () => s.currentSubscriptions, Q = {
    getSubscriptions: j,
    getSubscriptionCount: (L) => j().get(L)?.size ?? 0,
    isRequestSubscribed: (L, x) => !!j()?.get(L)?.get(x)
  };
  function z(L) {
    return JSON.parse(JSON.stringify(Object.fromEntries([...L].map(([x, G]) => [x, Object.fromEntries(G)]))));
  }
  return (L, x) => {
    if (h || (h = z(s.currentSubscriptions)), u.util.resetApiState.match(L))
      return h = {}, s.currentSubscriptions.clear(), p = null, [!0, !1];
    if (u.internalActions.internal_getRTKQSubscriptions.match(L))
      return [!1, Q];
    const G = m(s.currentSubscriptions, L);
    let F = !0;
    if (G) {
      p || (p = setTimeout(() => {
        const C = z(s.currentSubscriptions), [, T] = lh(h, () => C);
        x.next(u.internalActions.subscriptionsUpdated(T)), h = C, p = null;
      }, 500));
      const b = typeof L.type == "string" && !!L.type.startsWith(d), O = c.rejected.match(L) && L.meta.condition && !!L.meta.arg.subscribe;
      F = !b && !O;
    }
    return [F, !1];
  };
}, Jg = 2147483647 / 1e3 - 1, kg = ({
  reducerPath: u,
  api: c,
  queryThunk: s,
  context: r,
  internalState: d,
  selectors: {
    selectQueryEntry: h,
    selectConfig: p
  },
  getRunningQueryThunk: D,
  mwApi: v
}) => {
  const {
    removeQueryResult: m,
    unsubscribeQueryResult: j,
    cacheEntriesUpserted: S
  } = c.internalActions, U = An(j.match, s.fulfilled, s.rejected, S.match);
  function Q(b) {
    const O = d.currentSubscriptions.get(b);
    return O ? O.size > 0 : !1;
  }
  const z = {};
  function L(b) {
    for (const O of b.values())
      O?.abort?.();
  }
  const x = (b, O) => {
    const C = O.getState(), T = p(C);
    if (U(b)) {
      let R;
      if (S.match(b))
        R = b.payload.map((X) => X.queryDescription.queryCacheKey);
      else {
        const {
          queryCacheKey: X
        } = j.match(b) ? b.payload : b.meta.arg;
        R = [X];
      }
      G(R, O, T);
    }
    if (c.util.resetApiState.match(b)) {
      for (const [R, X] of Object.entries(z))
        X && clearTimeout(X), delete z[R];
      L(d.runningQueries), L(d.runningMutations);
    }
    if (r.hasRehydrationInfo(b)) {
      const {
        queries: R
      } = r.extractRehydrationInfo(b);
      G(Object.keys(R), O, T);
    }
  };
  function G(b, O, C) {
    const T = O.getState();
    for (const R of b) {
      const X = h(T, R);
      X?.endpointName && F(R, X.endpointName, O, C);
    }
  }
  function F(b, O, C, T) {
    const X = Sa(r, O)?.keepUnusedDataFor ?? T.keepUnusedDataFor;
    if (X === 1 / 0)
      return;
    const V = Math.max(0, Math.min(X, Jg));
    if (!Q(b)) {
      const q = z[b];
      q && clearTimeout(q), z[b] = setTimeout(() => {
        if (!Q(b)) {
          const _ = h(C.getState(), b);
          _?.endpointName && C.dispatch(D(_.endpointName, _.originalArgs))?.abort(), C.dispatch(m({
            queryCacheKey: b
          }));
        }
        delete z[b];
      }, V * 1e3);
    }
  }
  return x;
}, O1 = new Error("Promise never resolved before cacheEntryRemoved."), Fg = ({
  api: u,
  reducerPath: c,
  context: s,
  queryThunk: r,
  mutationThunk: d,
  internalState: h,
  selectors: {
    selectQueryEntry: p,
    selectApiState: D
  }
}) => {
  const v = Es(r), m = Es(d), j = nl(r, d), S = {}, {
    removeQueryResult: U,
    removeMutationResult: Q,
    cacheEntriesUpserted: z
  } = u.internalActions;
  function L(C, T, R) {
    const X = S[C];
    X?.valueResolved && (X.valueResolved({
      data: T,
      meta: R
    }), delete X.valueResolved);
  }
  function x(C) {
    const T = S[C];
    T && (delete S[C], T.cacheEntryRemoved());
  }
  function G(C) {
    const {
      arg: T,
      requestId: R
    } = C.meta, {
      endpointName: X,
      originalArgs: V
    } = T;
    return [X, V, R];
  }
  const F = (C, T, R) => {
    const X = b(C);
    function V(q, _, A, Y) {
      const $ = p(R, _), ae = p(T.getState(), _);
      !$ && ae && O(q, Y, _, T, A);
    }
    if (r.pending.match(C)) {
      const [q, _, A] = G(C);
      V(q, X, A, _);
    } else if (z.match(C))
      for (const {
        queryDescription: q,
        value: _
      } of C.payload) {
        const {
          endpointName: A,
          originalArgs: Y,
          queryCacheKey: $
        } = q;
        V(A, $, C.meta.requestId, Y), L($, _, {});
      }
    else if (d.pending.match(C)) {
      if (T.getState()[c].mutations[X]) {
        const [_, A, Y] = G(C);
        O(_, A, X, T, Y);
      }
    } else if (j(C))
      L(X, C.payload, C.meta.baseQueryMeta);
    else if (U.match(C) || Q.match(C))
      x(X);
    else if (u.util.resetApiState.match(C))
      for (const q of Object.keys(S))
        x(q);
  };
  function b(C) {
    return v(C) ? C.meta.arg.queryCacheKey : m(C) ? C.meta.arg.fixedCacheKey ?? C.meta.requestId : U.match(C) ? C.payload.queryCacheKey : Q.match(C) ? Uu(C.payload) : "";
  }
  function O(C, T, R, X, V) {
    const q = Sa(s, C), _ = q?.onCacheEntryAdded;
    if (!_) return;
    const A = {}, Y = new Promise((te) => {
      A.cacheEntryRemoved = te;
    }), $ = Promise.race([new Promise((te) => {
      A.valueResolved = te;
    }), Y.then(() => {
      throw O1;
    })]);
    $.catch(() => {
    }), S[R] = A;
    const ae = u.endpoints[C].select(Dc(q) ? T : R), M = X.dispatch((te, ue, y) => y), W = {
      ...X,
      getCacheEntry: () => ae(X.getState()),
      requestId: V,
      extra: M,
      updateCachedData: Dc(q) ? (te) => X.dispatch(u.util.updateQueryData(C, T, te)) : void 0,
      cacheDataLoaded: $,
      cacheEntryRemoved: Y
    }, P = _(T, W);
    Promise.resolve(P).catch((te) => {
      if (te !== O1)
        throw te;
    });
  }
  return F;
}, Wg = ({
  api: u,
  context: {
    apiUid: c
  },
  reducerPath: s
}) => (r, d) => {
  u.util.resetApiState.match(r) && d.dispatch(u.internalActions.middlewareRegistered(c));
}, $g = ({
  reducerPath: u,
  context: c,
  context: {
    endpointDefinitions: s
  },
  mutationThunk: r,
  queryThunk: d,
  api: h,
  assertTagType: p,
  refetchQuery: D,
  internalState: v
}) => {
  const {
    removeQueryResult: m
  } = h.internalActions, j = An(nl(r), xc(r)), S = An(nl(d, r), pa(d, r));
  let U = [], Q = 0;
  const z = (G, F) => {
    (d.pending.match(G) || r.pending.match(G)) && Q++, S(G) && (Q = Math.max(0, Q - 1)), j(G) ? x(gh(G, "invalidatesTags", s, p), F) : S(G) ? x([], F) : h.util.invalidateTags.match(G) && x(Ys(G.payload, void 0, void 0, void 0, void 0, p), F);
  };
  function L() {
    return Q > 0;
  }
  function x(G, F) {
    const b = F.getState(), O = b[u];
    if (U.push(...G), O.config.invalidationBehavior === "delayed" && L())
      return;
    const C = U;
    if (U = [], C.length === 0) return;
    const T = h.util.selectInvalidatedBy(b, C);
    c.batch(() => {
      const R = Array.from(T.values());
      for (const {
        queryCacheKey: X
      } of R) {
        const V = O.queries[X], q = Mc(v.currentSubscriptions, X, As);
        V && (q.size === 0 ? F.dispatch(m({
          queryCacheKey: X
        })) : V.status !== Mn && F.dispatch(D(V)));
      }
    });
  }
  return z;
}, Ig = ({
  reducerPath: u,
  queryThunk: c,
  api: s,
  refetchQuery: r,
  internalState: d
}) => {
  const {
    currentPolls: h,
    currentSubscriptions: p
  } = d, D = /* @__PURE__ */ new Set();
  let v = null;
  const m = (x, G) => {
    (s.internalActions.updateSubscriptionOptions.match(x) || s.internalActions.unsubscribeQueryResult.match(x)) && j(x.payload.queryCacheKey, G), (c.pending.match(x) || c.rejected.match(x) && x.meta.condition) && j(x.meta.arg.queryCacheKey, G), (c.fulfilled.match(x) || c.rejected.match(x) && !x.meta.condition) && S(x.meta.arg, G), s.util.resetApiState.match(x) && (z(), v && (clearTimeout(v), v = null), D.clear());
  };
  function j(x, G) {
    D.add(x), v || (v = setTimeout(() => {
      for (const F of D)
        U({
          queryCacheKey: F
        }, G);
      D.clear(), v = null;
    }, 0));
  }
  function S({
    queryCacheKey: x
  }, G) {
    const F = G.getState()[u], b = F.queries[x], O = p.get(x);
    if (!b || b.status === Mn) return;
    const {
      lowestPollingInterval: C,
      skipPollingIfUnfocused: T
    } = L(O);
    if (!Number.isFinite(C)) return;
    const R = h.get(x);
    R?.timeout && (clearTimeout(R.timeout), R.timeout = void 0);
    const X = Date.now() + C;
    h.set(x, {
      nextPollTimestamp: X,
      pollingInterval: C,
      timeout: setTimeout(() => {
        (F.config.focused || !T) && G.dispatch(r(b)), S({
          queryCacheKey: x
        }, G);
      }, C)
    });
  }
  function U({
    queryCacheKey: x
  }, G) {
    const b = G.getState()[u].queries[x], O = p.get(x);
    if (!b || b.status === Mn)
      return;
    const {
      lowestPollingInterval: C
    } = L(O);
    if (!Number.isFinite(C)) {
      Q(x);
      return;
    }
    const T = h.get(x), R = Date.now() + C;
    (!T || R < T.nextPollTimestamp) && S({
      queryCacheKey: x
    }, G);
  }
  function Q(x) {
    const G = h.get(x);
    G?.timeout && clearTimeout(G.timeout), h.delete(x);
  }
  function z() {
    for (const x of h.keys())
      Q(x);
  }
  function L(x = /* @__PURE__ */ new Map()) {
    let G = !1, F = Number.POSITIVE_INFINITY;
    for (const b of x.values())
      b.pollingInterval && (F = Math.min(b.pollingInterval, F), G = b.skipPollingIfUnfocused || G);
    return {
      lowestPollingInterval: F,
      skipPollingIfUnfocused: G
    };
  }
  return m;
}, Pg = ({
  api: u,
  context: c,
  queryThunk: s,
  mutationThunk: r
}) => {
  const d = qs(s, r), h = pa(s, r), p = nl(s, r), D = {};
  return (m, j) => {
    if (d(m)) {
      const {
        requestId: S,
        arg: {
          endpointName: U,
          originalArgs: Q
        }
      } = m.meta, z = Sa(c, U), L = z?.onQueryStarted;
      if (L) {
        const x = {}, G = new Promise((C, T) => {
          x.resolve = C, x.reject = T;
        });
        G.catch(() => {
        }), D[S] = x;
        const F = u.endpoints[U].select(Dc(z) ? Q : S), b = j.dispatch((C, T, R) => R), O = {
          ...j,
          getCacheEntry: () => F(j.getState()),
          requestId: S,
          extra: b,
          updateCachedData: Dc(z) ? (C) => j.dispatch(u.util.updateQueryData(U, Q, C)) : void 0,
          queryFulfilled: G
        };
        L(Q, O);
      }
    } else if (p(m)) {
      const {
        requestId: S,
        baseQueryMeta: U
      } = m.meta;
      D[S]?.resolve({
        data: m.payload,
        meta: U
      }), delete D[S];
    } else if (h(m)) {
      const {
        requestId: S,
        rejectedWithValue: U,
        baseQueryMeta: Q
      } = m.meta;
      D[S]?.reject({
        error: m.payload ?? m.error,
        isUnhandledError: !U,
        meta: Q
      }), delete D[S];
    }
  };
}, ep = ({
  reducerPath: u,
  context: c,
  api: s,
  refetchQuery: r,
  internalState: d
}) => {
  const {
    removeQueryResult: h
  } = s.internalActions, p = (v, m) => {
    ws.match(v) && D(m, "refetchOnFocus"), Ls.match(v) && D(m, "refetchOnReconnect");
  };
  function D(v, m) {
    const j = v.getState()[u], S = j.queries, U = d.currentSubscriptions;
    c.batch(() => {
      for (const Q of U.keys()) {
        const z = S[Q], L = U.get(Q);
        if (!L || !z) continue;
        const x = [...L.values()];
        (x.some((F) => F[m] === !0) || x.every((F) => F[m] === void 0) && j.config[m]) && (L.size === 0 ? v.dispatch(h({
          queryCacheKey: Q
        })) : z.status !== Mn && v.dispatch(r(z)));
      }
    });
  }
  return p;
};
function tp(u) {
  const {
    reducerPath: c,
    queryThunk: s,
    api: r,
    context: d,
    getInternalState: h
  } = u, {
    apiUid: p
  } = d, D = {
    invalidateTags: Wt(`${c}/invalidateTags`)
  }, v = (U) => U.type.startsWith(`${c}/`), m = [Wg, kg, $g, Ig, Fg, Pg];
  return {
    middleware: (U) => {
      let Q = !1;
      const z = h(U.dispatch), L = {
        ...u,
        internalState: z,
        refetchQuery: S,
        isThisApiSliceAction: v,
        mwApi: U
      }, x = m.map((b) => b(L)), G = Kg(L), F = ep(L);
      return (b) => (O) => {
        if (!k1(O))
          return b(O);
        Q || (Q = !0, U.dispatch(r.internalActions.middlewareRegistered(p)));
        const C = {
          ...U,
          next: b
        }, T = U.getState(), [R, X] = G(O, C, T);
        let V;
        if (R ? V = b(O) : V = X, U.getState()[c] && (F(O, C, T), v(O) || d.hasRehydrationInfo(O)))
          for (const q of x)
            q(O, C, T);
        return V;
      };
    },
    actions: D
  };
  function S(U) {
    return u.api.endpoints[U.endpointName].initiate(U.originalArgs, {
      subscribe: !1,
      forceRefetch: !0
    });
  }
}
var R1 = /* @__PURE__ */ Symbol(), bh = ({
  createSelector: u = js
} = {}) => ({
  name: R1,
  init(c, {
    baseQuery: s,
    tagTypes: r,
    reducerPath: d,
    serializeQueryArgs: h,
    keepUnusedDataFor: p,
    refetchOnMountOrArgChange: D,
    refetchOnFocus: v,
    refetchOnReconnect: m,
    invalidationBehavior: j,
    onSchemaFailure: S,
    catchSchemaFailure: U,
    skipSchemaValidation: Q
  }, z) {
    Gv();
    const L = (ie) => ie;
    Object.assign(c, {
      reducerPath: d,
      endpoints: {},
      internalActions: {
        onOnline: Ls,
        onOffline: oh,
        onFocus: ws,
        onFocusLost: sh
      },
      util: {}
    });
    const x = Zg({
      serializeQueryArgs: h,
      reducerPath: d,
      createSelector: u
    }), {
      selectInvalidatedBy: G,
      selectCachedArgsForQuery: F,
      buildQuerySelector: b,
      buildInfiniteQuerySelector: O,
      buildMutationSelector: C
    } = x;
    En(c.util, {
      selectInvalidatedBy: G,
      selectCachedArgsForQuery: F
    });
    const {
      queryThunk: T,
      infiniteQueryThunk: R,
      mutationThunk: X,
      patchQueryData: V,
      updateQueryData: q,
      upsertQueryData: _,
      prefetch: A,
      buildMatchThunkActions: Y
    } = Vg({
      baseQuery: s,
      reducerPath: d,
      context: z,
      api: c,
      serializeQueryArgs: h,
      assertTagType: L,
      selectors: x,
      onSchemaFailure: S,
      catchSchemaFailure: U,
      skipSchemaValidation: Q
    }), {
      reducer: $,
      actions: ae
    } = Xg({
      context: z,
      queryThunk: T,
      mutationThunk: X,
      serializeQueryArgs: h,
      reducerPath: d,
      assertTagType: L,
      config: {
        refetchOnFocus: v,
        refetchOnReconnect: m,
        refetchOnMountOrArgChange: D,
        keepUnusedDataFor: p,
        reducerPath: d,
        invalidationBehavior: j
      }
    });
    En(c.util, {
      patchQueryData: V,
      updateQueryData: q,
      upsertQueryData: _,
      prefetch: A,
      resetApiState: ae.resetApiState,
      upsertQueryEntries: ae.cacheEntriesUpserted
    }), En(c.internalActions, ae);
    const M = /* @__PURE__ */ new WeakMap(), W = (ie) => Mc(M, ie, () => ({
      currentSubscriptions: /* @__PURE__ */ new Map(),
      currentPolls: /* @__PURE__ */ new Map(),
      runningQueries: /* @__PURE__ */ new Map(),
      runningMutations: /* @__PURE__ */ new Map()
    })), {
      buildInitiateQuery: P,
      buildInitiateInfiniteQuery: te,
      buildInitiateMutation: ue,
      getRunningMutationThunk: y,
      getRunningMutationsThunk: K,
      getRunningQueriesThunk: le,
      getRunningQueryThunk: ne
    } = Gg({
      queryThunk: T,
      mutationThunk: X,
      infiniteQueryThunk: R,
      api: c,
      serializeQueryArgs: h,
      context: z,
      getInternalState: W
    });
    En(c.util, {
      getRunningMutationThunk: y,
      getRunningMutationsThunk: K,
      getRunningQueryThunk: ne,
      getRunningQueriesThunk: le
    });
    const {
      middleware: fe,
      actions: se
    } = tp({
      reducerPath: d,
      context: z,
      queryThunk: T,
      mutationThunk: X,
      infiniteQueryThunk: R,
      api: c,
      assertTagType: L,
      selectors: x,
      getRunningQueryThunk: ne,
      getInternalState: W
    });
    return En(c.util, se), En(c, {
      reducer: $,
      middleware: fe
    }), {
      name: R1,
      injectEndpoint(ie, Se) {
        const de = c, pe = de.endpoints[ie] ??= {};
        qc(Se) && En(pe, {
          name: ie,
          select: b(ie, Se),
          initiate: P(ie, Se)
        }, Y(T, ie)), wg(Se) && En(pe, {
          name: ie,
          select: C(),
          initiate: ue(ie)
        }, Y(X, ie)), Bc(Se) && En(pe, {
          name: ie,
          select: O(ie, Se),
          initiate: te(ie, Se)
        }, Y(T, ie));
      }
    };
  }
});
bh();
function oc(u) {
  return u.replace(u[0], u[0].toUpperCase());
}
var np = "query", lp = "mutation", ap = "infinitequery";
function up(u) {
  return u.type === np;
}
function ip(u) {
  return u.type === lp;
}
function _h(u) {
  return u.type === ap;
}
function vu(u, ...c) {
  return Object.assign(u, ...c);
}
var rs = /* @__PURE__ */ Symbol();
function ss(u) {
  const c = ce.useRef(u), s = ce.useMemo(() => Hs(c.current, u), [u]);
  return ce.useEffect(() => {
    c.current !== s && (c.current = s);
  }, [s]), s;
}
function ya(u) {
  const c = ce.useRef(u);
  return ce.useEffect(() => {
    Eu(c.current, u) || (c.current = u);
  }, [u]), Eu(c.current, u) ? c.current : u;
}
var cp = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", fp = /* @__PURE__ */ cp(), rp = () => typeof navigator < "u" && navigator.product === "ReactNative", sp = /* @__PURE__ */ rp(), op = () => fp || sp ? ce.useLayoutEffect : ce.useEffect, dp = /* @__PURE__ */ op(), N1 = (u) => u.isUninitialized ? {
  ...u,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: u.data === void 0,
  // This is the one place where we still have to use `QueryStatus` as an enum,
  // since it's the only reference in the React package and not in the core.
  status: fh.pending
} : u;
function os(u, ...c) {
  const s = {};
  return c.forEach((r) => {
    s[r] = u[r];
  }), s;
}
var ds = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
function hp({
  api: u,
  moduleOptions: {
    batch: c,
    hooks: {
      useDispatch: s,
      useSelector: r,
      useStore: d
    },
    unstable__sideEffectsInRender: h,
    createSelector: p
  },
  serializeQueryArgs: D,
  context: v
}) {
  const m = h ? (T) => T() : ce.useEffect, j = (T) => T.current?.unsubscribe?.(), S = v.endpointDefinitions;
  return {
    buildQueryHooks: b,
    buildInfiniteQueryHooks: O,
    buildMutationHook: C,
    usePrefetch: z
  };
  function U(T, R, X) {
    if (R?.endpointName && T.isUninitialized) {
      const {
        endpointName: $
      } = R, ae = S[$];
      X !== Ft && D({
        queryArgs: R.originalArgs,
        endpointDefinition: ae,
        endpointName: $
      }) === D({
        queryArgs: X,
        endpointDefinition: ae,
        endpointName: $
      }) && (R = void 0);
    }
    let V = T.isSuccess ? T.data : R?.data;
    V === void 0 && (V = T.data);
    const q = V !== void 0, _ = T.isLoading, A = (!R || R.isLoading || R.isUninitialized) && !q && _, Y = T.isSuccess || q && (_ && !R?.isError || T.isUninitialized);
    return {
      ...T,
      data: V,
      currentData: T.data,
      isFetching: _,
      isLoading: A,
      isSuccess: Y
    };
  }
  function Q(T, R, X) {
    if (R?.endpointName && T.isUninitialized) {
      const {
        endpointName: $
      } = R, ae = S[$];
      X !== Ft && D({
        queryArgs: R.originalArgs,
        endpointDefinition: ae,
        endpointName: $
      }) === D({
        queryArgs: X,
        endpointDefinition: ae,
        endpointName: $
      }) && (R = void 0);
    }
    let V = T.isSuccess ? T.data : R?.data;
    V === void 0 && (V = T.data);
    const q = V !== void 0, _ = T.isLoading, A = (!R || R.isLoading || R.isUninitialized) && !q && _, Y = T.isSuccess || _ && q;
    return {
      ...T,
      data: V,
      currentData: T.data,
      isFetching: _,
      isLoading: A,
      isSuccess: Y
    };
  }
  function z(T, R) {
    const X = s(), V = ya(R);
    return ce.useCallback((q, _) => X(u.util.prefetch(T, q, {
      ...V,
      ..._
    })), [T, X, V]);
  }
  function L(T, R, {
    refetchOnReconnect: X,
    refetchOnFocus: V,
    refetchOnMountOrArgChange: q,
    skip: _ = !1,
    pollingInterval: A = 0,
    skipPollingIfUnfocused: Y = !1,
    ...$
  } = {}) {
    const {
      initiate: ae
    } = u.endpoints[T], M = s(), W = ce.useRef(void 0);
    if (!W.current) {
      const de = M(u.internalActions.internal_getRTKQSubscriptions());
      W.current = de;
    }
    const P = ss(_ ? Ft : R), te = ya({
      refetchOnReconnect: X,
      refetchOnFocus: V,
      pollingInterval: A,
      skipPollingIfUnfocused: Y
    }), ue = $.initialPageParam, y = ya(ue), K = $.refetchCachedPages, le = ya(K), ne = ce.useRef(void 0);
    let {
      queryCacheKey: fe,
      requestId: se
    } = ne.current || {}, ie = !1;
    fe && se && (ie = W.current.isRequestSubscribed(fe, se));
    const Se = !ie && ne.current !== void 0;
    return m(() => {
      Se && (ne.current = void 0);
    }, [Se]), m(() => {
      const de = ne.current;
      if (P === Ft) {
        de?.unsubscribe(), ne.current = void 0;
        return;
      }
      const pe = ne.current?.subscriptionOptions;
      if (!de || de.arg !== P) {
        de?.unsubscribe();
        const rt = M(ae(P, {
          subscriptionOptions: te,
          forceRefetch: q,
          ..._h(S[T]) ? {
            initialPageParam: y,
            refetchCachedPages: le
          } : {}
        }));
        ne.current = rt;
      } else te !== pe && de.updateSubscriptionOptions(te);
    }, [M, ae, q, P, te, Se, y, le, T]), [ne, M, ae, te];
  }
  function x(T, R) {
    return (V, {
      skip: q = !1,
      selectFromResult: _
    } = {}) => {
      const {
        select: A
      } = u.endpoints[T], Y = ss(q ? Ft : V), $ = ce.useRef(void 0), ae = ce.useMemo(() => (
        // Normally ts-ignores are bad and should be avoided, but we're
        // already casting this selector to be `Selector<any>` anyway,
        // so the inconsistencies don't matter here
        // @ts-ignore
        p([
          // @ts-ignore
          A(Y),
          (ue, y) => y,
          (ue) => Y
        ], R, {
          memoizeOptions: {
            resultEqualityCheck: Eu
          }
        })
      ), [A, Y]), M = ce.useMemo(() => _ ? p([ae], _, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : ae, [ae, _]), W = r((ue) => M(ue, $.current), Eu), P = d(), te = ae(P.getState(), $.current);
      return dp(() => {
        $.current = te;
      }, [te]), W;
    };
  }
  function G(T) {
    ce.useEffect(() => () => {
      j(T), T.current = void 0;
    }, [T]);
  }
  function F(T) {
    if (!T.current) throw new Error(Zt(38));
    return T.current.refetch();
  }
  function b(T) {
    const R = (q, _ = {}) => {
      const [A] = L(T, q, _);
      return G(A), ce.useMemo(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => F(A)
      }), [A]);
    }, X = ({
      refetchOnReconnect: q,
      refetchOnFocus: _,
      pollingInterval: A = 0,
      skipPollingIfUnfocused: Y = !1
    } = {}) => {
      const {
        initiate: $
      } = u.endpoints[T], ae = s(), [M, W] = ce.useState(rs), P = ce.useRef(void 0), te = ya({
        refetchOnReconnect: q,
        refetchOnFocus: _,
        pollingInterval: A,
        skipPollingIfUnfocused: Y
      });
      m(() => {
        const le = P.current?.subscriptionOptions;
        te !== le && P.current?.updateSubscriptionOptions(te);
      }, [te]);
      const ue = ce.useRef(te);
      m(() => {
        ue.current = te;
      }, [te]);
      const y = ce.useCallback(function(le, ne = !1) {
        let fe;
        return c(() => {
          j(P), P.current = fe = ae($(le, {
            subscriptionOptions: ue.current,
            forceRefetch: !ne
          })), W(le);
        }), fe;
      }, [ae, $]), K = ce.useCallback(() => {
        P.current?.queryCacheKey && ae(u.internalActions.removeQueryResult({
          queryCacheKey: P.current?.queryCacheKey
        }));
      }, [ae]);
      return ce.useEffect(() => () => {
        j(P);
      }, []), ce.useEffect(() => {
        M !== rs && !P.current && y(M, !0);
      }, [M, y]), ce.useMemo(() => [y, M, {
        reset: K
      }], [y, M, K]);
    }, V = x(T, U);
    return {
      useQueryState: V,
      useQuerySubscription: R,
      useLazyQuerySubscription: X,
      useLazyQuery(q) {
        const [_, A, {
          reset: Y
        }] = X(q), $ = V(A, {
          ...q,
          skip: A === rs
        }), ae = ce.useMemo(() => ({
          lastArg: A
        }), [A]);
        return ce.useMemo(() => [_, {
          ...$,
          reset: Y
        }, ae], [_, $, Y, ae]);
      },
      useQuery(q, _) {
        const A = R(q, _), Y = V(q, {
          selectFromResult: q === Ft || _?.skip ? void 0 : N1,
          ..._
        }), $ = os(Y, ...ds);
        return ce.useDebugValue($), ce.useMemo(() => ({
          ...Y,
          ...A
        }), [Y, A]);
      }
    };
  }
  function O(T) {
    const R = (V, q = {}) => {
      const [_, A, Y, $] = L(T, V, q), ae = ce.useRef($);
      m(() => {
        ae.current = $;
      }, [$]);
      const M = q.refetchCachedPages, W = ya(M), P = ce.useCallback(function(y, K) {
        let le;
        return c(() => {
          j(_), _.current = le = A(Y(y, {
            subscriptionOptions: ae.current,
            direction: K
          }));
        }), le;
      }, [_, A, Y]);
      G(_);
      const te = ss(q.skip ? Ft : V), ue = ce.useCallback((y) => {
        if (!_.current) throw new Error(Zt(38));
        const K = {
          refetchCachedPages: y?.refetchCachedPages ?? W
        };
        return _.current.refetch(K);
      }, [_, W]);
      return ce.useMemo(() => ({
        trigger: P,
        /**
         * A method to manually refetch data for the query
         */
        refetch: ue,
        fetchNextPage: () => P(te, "forward"),
        fetchPreviousPage: () => P(te, "backward")
      }), [ue, P, te]);
    }, X = x(T, Q);
    return {
      useInfiniteQueryState: X,
      useInfiniteQuerySubscription: R,
      useInfiniteQuery(V, q) {
        const {
          refetch: _,
          fetchNextPage: A,
          fetchPreviousPage: Y
        } = R(V, q), $ = X(V, {
          selectFromResult: V === Ft || q?.skip ? void 0 : N1,
          ...q
        }), ae = os($, ...ds, "hasNextPage", "hasPreviousPage");
        return ce.useDebugValue(ae), ce.useMemo(() => ({
          ...$,
          fetchNextPage: A,
          fetchPreviousPage: Y,
          refetch: _
        }), [$, A, Y, _]);
      }
    };
  }
  function C(T) {
    return ({
      selectFromResult: R,
      fixedCacheKey: X
    } = {}) => {
      const {
        select: V,
        initiate: q
      } = u.endpoints[T], _ = s(), [A, Y] = ce.useState();
      ce.useEffect(() => () => {
        A?.arg.fixedCacheKey || A?.reset();
      }, [A]);
      const $ = ce.useCallback(function(le) {
        const ne = _(q(le, {
          fixedCacheKey: X
        }));
        return Y(ne), ne;
      }, [_, q, X]), {
        requestId: ae
      } = A || {}, M = ce.useMemo(() => V({
        fixedCacheKey: X,
        requestId: A?.requestId
      }), [X, A, V]), W = ce.useMemo(() => R ? p([M], R) : M, [R, M]), P = r(W, Eu), te = X == null ? A?.arg.originalArgs : void 0, ue = ce.useCallback(() => {
        c(() => {
          A && Y(void 0), X && _(u.internalActions.removeMutationResult({
            requestId: ae,
            fixedCacheKey: X
          }));
        });
      }, [_, X, A, ae]), y = os(P, ...ds, "endpointName");
      ce.useDebugValue(y);
      const K = ce.useMemo(() => ({
        ...P,
        originalArgs: te,
        reset: ue
      }), [P, te, ue]);
      return ce.useMemo(() => [$, K], [$, K]);
    };
  }
}
var mp = /* @__PURE__ */ Symbol(), yp = ({
  batch: u = _v,
  hooks: c = {
    useDispatch: X1,
    useSelector: Z1,
    useStore: V1
  },
  createSelector: s = js,
  unstable__sideEffectsInRender: r = !1,
  ...d
} = {}) => ({
  name: mp,
  init(h, {
    serializeQueryArgs: p
  }, D) {
    const v = h, {
      buildQueryHooks: m,
      buildInfiniteQueryHooks: j,
      buildMutationHook: S,
      usePrefetch: U
    } = hp({
      api: h,
      moduleOptions: {
        batch: u,
        hooks: c,
        unstable__sideEffectsInRender: r,
        createSelector: s
      },
      serializeQueryArgs: p,
      context: D
    });
    return vu(v, {
      usePrefetch: U
    }), vu(D, {
      batch: u
    }), {
      injectEndpoint(Q, z) {
        if (up(z)) {
          const {
            useQuery: L,
            useLazyQuery: x,
            useLazyQuerySubscription: G,
            useQueryState: F,
            useQuerySubscription: b
          } = m(Q);
          vu(v.endpoints[Q], {
            useQuery: L,
            useLazyQuery: x,
            useLazyQuerySubscription: G,
            useQueryState: F,
            useQuerySubscription: b
          }), h[`use${oc(Q)}Query`] = L, h[`useLazy${oc(Q)}Query`] = x;
        }
        if (ip(z)) {
          const L = S(Q);
          vu(v.endpoints[Q], {
            useMutation: L
          }), h[`use${oc(Q)}Mutation`] = L;
        } else if (_h(z)) {
          const {
            useInfiniteQuery: L,
            useInfiniteQuerySubscription: x,
            useInfiniteQueryState: G
          } = j(Q);
          vu(v.endpoints[Q], {
            useInfiniteQuery: L,
            useInfiniteQuerySubscription: x,
            useInfiniteQueryState: G
          }), h[`use${oc(Q)}InfiniteQuery`] = L;
        }
      }
    };
  }
}), vp = /* @__PURE__ */ Sh(bh(), yp());
let Hc = {
  apiUrl: "http://localhost:3000",
  apiToken: ""
};
const Eh = (u) => {
  Hc = u;
}, gp = Bg({
  baseUrl: "",
  prepareHeaders: (u) => (u.set("X-API-Token", Hc.apiToken), u)
}), pp = async (u, c, s) => {
  const r = typeof u == "string" ? u : u.url, d = `${Hc.apiUrl}${r}`, h = typeof u == "string" ? d : { ...u, url: d };
  return gp(h, c, s);
}, yc = vp({
  reducerPath: "bookingApi",
  baseQuery: pp,
  tagTypes: ["Slots", "Config"],
  endpoints: (u) => ({
    // Получить настройки клиента
    getClientConfig: u.query({
      query: () => `/public/config/${Hc.apiToken}`,
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
  useGetClientConfigQuery: Sp,
  useGetAvailableSlotsQuery: bp,
  useCreateBookingMutation: _p
} = yc, Ep = {
  selectedDate: null,
  currentMonth: (/* @__PURE__ */ new Date()).toISOString()
}, Ch = Pn({
  name: "calendar",
  initialState: Ep,
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
}), { setSelectedDate: Cp, setCurrentMonth: _b, nextMonth: Tp, previousMonth: Ap } = Ch.actions, Mp = Ch.reducer, U1 = {
  currentStep: "calendar",
  selectedSlot: null,
  formData: {
    name: "",
    email: "",
    phone: "",
    description: ""
  },
  bookingResult: null,
  recaptchaToken: null
}, Th = Pn({
  name: "booking",
  initialState: U1,
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
    setRecaptchaToken: (u, c) => {
      u.recaptchaToken = c.payload;
    },
    resetBooking: (u) => {
      u.currentStep = "calendar", u.selectedSlot = null, u.formData = U1.formData, u.bookingResult = null, u.recaptchaToken = null;
    }
  }
}), {
  setCurrentStep: zs,
  setSelectedSlot: x1,
  updateFormData: Dp,
  setBookingResult: zp,
  setRecaptchaToken: Op,
  resetBooking: Rp
} = Th.actions, Np = Th.reducer, Os = cg({
  reducer: {
    [yc.reducerPath]: yc.reducer,
    calendar: Mp,
    booking: Np
  },
  middleware: (u) => u().concat(yc.middleware)
});
var hs = { exports: {} }, gu = {};
var j1;
function Up() {
  if (j1) return gu;
  j1 = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(r, d, h) {
    var p = null;
    if (h !== void 0 && (p = "" + h), d.key !== void 0 && (p = "" + d.key), "key" in d) {
      h = {};
      for (var D in d)
        D !== "key" && (h[D] = d[D]);
    } else h = d;
    return d = h.ref, {
      $$typeof: u,
      type: r,
      key: p,
      ref: d !== void 0 ? d : null,
      props: h
    };
  }
  return gu.Fragment = c, gu.jsx = s, gu.jsxs = s, gu;
}
var q1;
function xp() {
  return q1 || (q1 = 1, hs.exports = Up()), hs.exports;
}
var J = xp();
const Yu = X1.withTypes(), zl = Z1.withTypes(), jp = "_calendar_nv465_1", qp = "_header_nv465_7", Bp = "_monthYear_nv465_14", Hp = "_month_nv465_14", Qp = "_year_nv465_27", wp = "_navigation_nv465_33", Lp = "_navButton_nv465_38", Yp = "_weekDays_nv465_47", Gp = "_weekDay_nv465_47", Vp = "_daysGrid_nv465_63", Xp = "_dayCell_nv465_70", Zp = "_selected_nv465_87", Kp = "_disabled_nv465_92", pt = {
  calendar: jp,
  header: qp,
  monthYear: Bp,
  month: Hp,
  year: Qp,
  navigation: wp,
  navButton: Lp,
  weekDays: Yp,
  weekDay: Gp,
  daysGrid: Vp,
  dayCell: Xp,
  selected: Zp,
  disabled: Kp
}, Jp = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2020C0%208.95431%208.95431%200%2020%200C31.0457%200%2040%208.95431%2040%2020C40%2031.0457%2031.0457%2040%2020%2040C8.95431%2040%200%2031.0457%200%2020Z'%20fill='%232C2C2E'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M22.495%2026.495C22.7684%2026.2216%2022.7684%2025.7784%2022.495%2025.505L16.99%2020L22.495%2014.495C22.7684%2014.2216%2022.7684%2013.7784%2022.495%2013.505C22.2217%2013.2317%2021.7784%2013.2317%2021.5051%2013.505L15.5051%2019.505C15.2317%2019.7784%2015.2317%2020.2216%2015.5051%2020.495L21.5051%2026.495C21.7784%2026.7684%2022.2217%2026.7684%2022.495%2026.495Z'%20fill='%23F2F2F2'/%3e%3c/svg%3e", kp = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2020C0%208.95431%208.95431%200%2020%200C31.0457%200%2040%208.95431%2040%2020C40%2031.0457%2031.0457%2040%2020%2040C8.95431%2040%200%2031.0457%200%2020Z'%20fill='%232C2C2E'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.505%2013.505C17.2316%2013.7784%2017.2316%2014.2216%2017.505%2014.495L23.01%2020L17.505%2025.505C17.2316%2025.7784%2017.2316%2026.2216%2017.505%2026.495C17.7783%2026.7683%2018.2216%2026.7683%2018.4949%2026.495L24.4949%2020.495C24.7683%2020.2216%2024.7683%2019.7784%2024.4949%2019.505L18.4949%2013.505C18.2216%2013.2316%2017.7783%2013.2316%2017.505%2013.505Z'%20fill='%23F2F2F2'/%3e%3c/svg%3e", Fp = () => {
  const u = Yu(), { selectedDate: c, currentMonth: s } = zl((S) => S.calendar), r = ce.useMemo(() => {
    const S = new Date(s), U = S.getFullYear(), Q = S.getMonth(), z = new Date(U, Q, 1), x = new Date(U, Q + 1, 0).getDate(), G = z.getDay(), F = [];
    for (let b = 0; b < (G === 0 ? 6 : G - 1); b++)
      F.push(null);
    for (let b = 1; b <= x; b++)
      F.push(new Date(U, Q, b));
    return F;
  }, [s]), d = new Date(s), h = d.toLocaleDateString("ru-RU", {
    month: "long"
  }), p = d.getFullYear().toString(), D = (S) => {
    const U = /* @__PURE__ */ new Date();
    U.setHours(0, 0, 0, 0), S >= U && u(Cp(S.toISOString()));
  }, v = (S) => {
    if (!S || !c) return !1;
    const U = new Date(c);
    return S.getDate() === U.getDate() && S.getMonth() === U.getMonth() && S.getFullYear() === U.getFullYear();
  }, m = (S) => {
    if (!S) return !0;
    const U = /* @__PURE__ */ new Date();
    return U.setHours(0, 0, 0, 0), S < U;
  }, j = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  return /* @__PURE__ */ J.jsxs("div", { className: pt.calendar, children: [
    /* @__PURE__ */ J.jsxs("div", { className: pt.header, children: [
      /* @__PURE__ */ J.jsxs("div", { className: pt.monthYear, children: [
        /* @__PURE__ */ J.jsx("span", { className: pt.month, children: h }),
        /* @__PURE__ */ J.jsx("span", { className: pt.year, children: p })
      ] }),
      /* @__PURE__ */ J.jsxs("div", { className: pt.navigation, children: [
        /* @__PURE__ */ J.jsx(
          "div",
          {
            className: pt.navButton,
            onClick: () => u(Ap()),
            children: /* @__PURE__ */ J.jsx("img", { src: Jp, alt: "←" })
          }
        ),
        /* @__PURE__ */ J.jsx(
          "div",
          {
            className: pt.navButton,
            onClick: () => u(Tp()),
            children: /* @__PURE__ */ J.jsx("img", { src: kp, alt: "→" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ J.jsx("div", { className: pt.weekDays, children: j.map((S) => /* @__PURE__ */ J.jsx("div", { className: pt.weekDay, children: S }, S)) }),
    /* @__PURE__ */ J.jsx("div", { className: pt.daysGrid, children: r.map((S, U) => /* @__PURE__ */ J.jsx(
      "button",
      {
        className: `${pt.dayCell} ${v(S) ? pt.selected : ""} ${m(S) ? pt.disabled : ""}`,
        onClick: () => S && D(S),
        disabled: m(S),
        children: S ? S.getDate() : ""
      },
      U
    )) })
  ] });
}, Wp = "_container_1hh8m_1", $p = "_title_1hh8m_11", Ip = "_message_1hh8m_19", Pp = "_loading_1hh8m_26", eS = "_spinner_1hh8m_32", tS = "_error_1hh8m_47", nS = "_slotsList_1hh8m_54", lS = "_slotButton_1hh8m_63", aS = "_selected_1hh8m_80", uS = "_slotTime_1hh8m_85", iS = "_continueButton_1hh8m_105", $e = {
  container: Wp,
  title: $p,
  message: Ip,
  loading: Pp,
  spinner: eS,
  error: tS,
  slotsList: nS,
  slotButton: lS,
  selected: aS,
  slotTime: uS,
  continueButton: iS
}, Ah = () => {
  const u = Yu(), { selectedDate: c } = zl((U) => U.calendar), { selectedSlot: s } = zl((U) => U.booking), r = ce.useMemo(() => {
    if (!c) return null;
    const U = new Date(c), Q = new Date(U);
    Q.setHours(0, 0, 0, 0);
    const z = new Date(U);
    return z.setHours(23, 59, 59, 999), {
      startDate: Q.toISOString(),
      endDate: z.toISOString(),
      workingHours: "9-18"
    };
  }, [c]), { data: d, isLoading: h, error: p } = bp(r, {
    skip: !r
  });
  ce.useEffect(() => {
    u(x1(null));
  }, [c, u]);
  const D = (U) => {
    u(x1(U));
  }, v = () => {
    s && u(zs("form"));
  }, m = (U) => s?.start === U.start && s?.end === U.end, j = (U) => new Date(U).toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit"
  });
  if (!c)
    return /* @__PURE__ */ J.jsxs("div", { className: $e.container, children: [
      /* @__PURE__ */ J.jsx("h3", { className: $e.title, children: "Доступное время" }),
      /* @__PURE__ */ J.jsx("p", { className: $e.message, children: "Выберите дату в календаре" })
    ] });
  if (h)
    return /* @__PURE__ */ J.jsxs("div", { className: $e.container, children: [
      /* @__PURE__ */ J.jsx("h3", { className: $e.title, children: "Доступное время" }),
      /* @__PURE__ */ J.jsxs("div", { className: $e.loading, children: [
        /* @__PURE__ */ J.jsx("div", { className: $e.spinner }),
        /* @__PURE__ */ J.jsx("p", { children: "Загрузка слотов..." })
      ] })
    ] });
  if (p)
    return /* @__PURE__ */ J.jsxs("div", { className: $e.container, children: [
      /* @__PURE__ */ J.jsx("h3", { className: $e.title, children: "Доступное время" }),
      /* @__PURE__ */ J.jsx("p", { className: $e.error, children: "Нет доступных слотов" })
    ] });
  const S = d?.data?.slots || [];
  return /* @__PURE__ */ J.jsxs("div", { className: $e.container, children: [
    /* @__PURE__ */ J.jsx("h3", { className: $e.title, children: "Доступное время" }),
    S.length === 0 ? /* @__PURE__ */ J.jsx("p", { className: $e.message, children: "Нет доступных слотов" }) : /* @__PURE__ */ J.jsxs(J.Fragment, { children: [
      /* @__PURE__ */ J.jsx("div", { className: $e.slotsList, children: S.map((U, Q) => /* @__PURE__ */ J.jsx(
        "button",
        {
          className: `${$e.slotButton} ${m(U) ? $e.selected : ""}`,
          onClick: () => D(U),
          children: /* @__PURE__ */ J.jsx("span", { className: $e.slotTime, children: j(U.start) })
        },
        Q
      )) }),
      /* @__PURE__ */ J.jsx(
        "button",
        {
          className: $e.continueButton,
          onClick: v,
          disabled: !s,
          children: "Продолжить"
        }
      )
    ] })
  ] });
}, cS = "_card_1dbg2_1", fS = "_photoContainer_1dbg2_10", rS = "_photo_1dbg2_10", sS = "_photoPlaceholder_1dbg2_22", oS = "_initials_1dbg2_32", dS = "_name_1dbg2_38", hS = "_description_1dbg2_45", mS = "_email_1dbg2_52", yS = "_divider_1dbg2_66", vS = "_info_1dbg2_72", gS = "_infoItem_1dbg2_77", pS = "_icon_1dbg2_85", SS = "_infoText_1dbg2_92", bS = "_meetInfo_1dbg2_98", _S = "_meetSubject_1dbg2_103", ES = "_meetDescription_1dbg2_110", Le = {
  card: cS,
  photoContainer: fS,
  photo: rS,
  photoPlaceholder: sS,
  initials: oS,
  name: dS,
  description: hS,
  email: mS,
  divider: yS,
  info: vS,
  infoItem: gS,
  icon: pS,
  infoText: SS,
  meetInfo: bS,
  meetSubject: _S,
  meetDescription: ES
}, CS = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21%2012C21%2016.9706%2016.9706%2021%2012%2021C7.02944%2021%203%2016.9706%203%2012C3%207.02944%207.02944%203%2012%203C16.9706%203%2021%207.02944%2021%2012ZM12%2019.875C16.3492%2019.875%2019.875%2016.3492%2019.875%2012C19.875%207.65076%2016.3492%204.125%2012%204.125C7.65076%204.125%204.125%207.65076%204.125%2012C4.125%2016.3492%207.65076%2019.875%2012%2019.875Z'%20fill='%232C2C2E'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12%206.9375C12.3107%206.9375%2012.5625%207.18934%2012.5625%207.5V12.5625H15.375C15.6857%2012.5625%2015.9375%2012.8143%2015.9375%2013.125C15.9375%2013.4357%2015.6857%2013.6875%2015.375%2013.6875H12.2812C11.8153%2013.6875%2011.4375%2013.3097%2011.4375%2012.8438V7.5C11.4375%207.18934%2011.6893%206.9375%2012%206.9375Z'%20fill='%232C2C2E'/%3e%3c/svg%3e", TS = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.24231%202.90907C11.3455%202.27106%2013.6049%202.38205%2015.6355%203.22315C17.6661%204.06424%2019.3422%205.58338%2020.3783%207.52173C21.4143%209.46009%2021.7463%2011.6977%2021.3175%2013.8534C20.8887%2016.009%2019.7257%2017.9493%2018.0268%2019.3436C16.3278%2020.7379%2014.1979%2021.5%2012%2021.5C11.7239%2021.5%2011.5%2021.2761%2011.5%2021C11.5%2020.7239%2011.7239%2020.5%2012%2020.5C13.9665%2020.5%2015.8722%2019.8181%2017.3924%2018.5706C18.9125%2017.323%2019.953%2015.587%2020.3367%2013.6583C20.7203%2011.7295%2020.4234%209.72745%2019.4963%207.99313C18.5693%206.25881%2017.0697%204.89958%2015.2528%204.14702C13.436%203.39447%2011.4144%203.29516%209.5326%203.86601C7.65075%204.43686%206.02506%205.64255%204.93252%207.27765C3.83998%208.91275%203.34819%2010.8761%203.54094%2012.8331C3.7337%2014.7902%204.59907%2016.6199%205.98961%2018.0104C6.18487%2018.2057%206.18487%2018.5222%205.98961%2018.7175C5.79434%2018.9128%205.47776%2018.9128%205.2825%2018.7175C3.72837%2017.1634%202.76119%2015.1185%202.54576%2012.9312C2.33033%2010.7439%202.87998%208.54955%204.10105%206.72208C5.32213%204.89462%207.13908%203.54708%209.24231%202.90907Z'%20fill='%232C2C2E'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16.3201%209.61589C16.108%209.43911%2015.7927%209.46777%2015.6159%209.67991L12.0179%2013.9975C11.6807%2014.4022%2011.4603%2014.6648%2011.273%2014.8352C11.0964%2014.9959%2011.0112%2015.0155%2010.9555%2015.0181C10.8998%2015.0206%2010.8131%2015.0087%2010.6227%2014.8647C10.4207%2014.712%2010.1775%2014.4703%209.80496%2014.0978L8.35357%2012.6464C8.15831%2012.4512%207.84172%2012.4512%207.64646%2012.6464C7.4512%2012.8417%207.4512%2013.1583%207.64646%2013.3536L9.12241%2014.8295C9.46344%2015.1706%209.75559%2015.4627%2010.0195%2015.6623C10.3013%2015.8754%2010.6159%2016.0345%2011.0008%2016.017C11.3856%2015.9996%2011.6846%2015.8126%2011.9459%2015.5749C12.1907%2015.3523%2012.4552%2015.0349%2012.7639%2014.6643L16.3841%2010.3201C16.5609%2010.108%2016.5322%209.79267%2016.3201%209.61589Z'%20fill='%232C2C2E'/%3e%3c/svg%3e", AS = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAfnSURBVHgB7Zt7bFPXHce/5z58nfgBNE6C46RxQ+mAZIFioChNq71pt8DUSWVb0dZt6rq10l6omzRpm7r/Nmmof2yaBOofLaq0StM0TRNjha0bjxSVAqUdU4OAAiVtAnmSxq97z72n5zi2Y1MSv5PcxB/JsWPfe33O17/f9zwvUKVKlSpVqlSpsjQhKB1xDZk/aDAIZ10dTMwTp08nvttKlokkX5dEqQKJ8yX+MMeeWn/M+4u3us1B1cB8wHhZJBaTnOTc4b8ZX3/457iCqR+upB+sFIGmxdn2YK+zcaJLe+YsNW8oCuYDNlUi/sTUDkLe/gdC679jnEGJSCiOtDgTPd0nFJN2RQyTEoL5ESdVoqknEjnLrM6voHfvk1BRfB0TFHNyWpwPd3SfINTcGqEm5T/c/IlzCw4FhL0H5x1N8naU6EOFCjSdVj3dvdDNrVGDcnGwYMRJQng0o/8Ga0eJFCJQdlpRsyuiL0hx0rDcKZ9qgYFQSM14L61LvpXLSqtU5Myr5+QBYQnrnvHj5MP81JlvvRAbMnepWsfg+Zf6Nt14/vUbqYPyqaBd0qoQRH1Y6MmQrD3acSF8KdLGqGVRGYF7dq09ywXyZx44G7ZLqzwQZbfaf9PdsuwnWyeM0UkujmnxcJNgMZhxw8c/d2QePBO2TKsciLLTDfu//EXv6roDN08PWESRpsSZgrCptEyn5kwRtNjSKj0c2vLXr+7x3LniQOTyuElkwuvIZs0iaYaLLba0Spjx5y89fQxE2h39YIJCInI+4wjlNhdaNGnFVIVHjY67d93nDuzuvDJ28voKXhchTt71yTxwcaWVIkEbjF8I7Hnknjt7mvpunhoAkSVuw4X1+DMPTuSo/mBjrzp+ocuilLqQp9IGsdBACVbLRKktxwxKRumGGaJD0FVlumXJBRU9xMk4Bns++bjLX//ixKmBvPxmpiKkr7v7sede/H1wc9dweJzXNimOqG/K02d4TYgq6dGLl61vP/1NasCPMhGOkPHt97MndmwjO+l4fueIIjm9Bp44toq+ZK36zCbXuBUXflMkWRFyoGadt87fBTNiFhSGXB+EB9pG/rcXx1Hm+bLVLdLGHU5pJ2btFPOOjYgaxQRxMGx9dSPeGHIra1aFYTJNKmVSJ0uIGhqmHsOEQeMoBIlfhtDJiniVoqImhzZcBALNSTGsq1h7cAsi/P/62ghPNSdKpaS5koWA8BvNZeDUqAf+f3bD5P2+5Q4jEVHlwNYC8SYp4Tf7LgWw+egW1LuicHKBLIayYc/+DRdAtEkOD8XjJ9dg/9UAmr2TPJpQdmwnUMKMVRMWL/m9/9qEcxNuNHvCFRFHYCuBUmY8ENPQfngz7yMzNNbGKiaOwDYelDBjt4HXhpeh5VAX7xWb8DooFw0VxR4CJc34ub5m3H88hEZ3FBo3Y1ZhcQQLPsU03qWHx8DOV9fhz/3+pBmXcTiTgwUvkMoQfvhwCP8eTJnx3IkjWPAC/Xg0ZGmxFahTxvg8RdFDqqJZ8B7U4KTeDaEWKDUaaJxOLXjNIQteIGYxy4jpaO1ogdfngR7V51QkW7RiorGKR3SsbGtEQ2sDf13YYLoUbCEQSf7RowaWr1yG5rWBRLrNQStvs8EqF8mIGaj11CLY2QqLT80wvqSFCmac/UbzRMwL83l3Pue8amMbf5Zh6mbFfMme0x1cC4tHjklNBNe3osZbA51HViVEsvV8EONjDYP7UvOaAFasXI54BVo4288oimgSrVpDsB5+3soJkcqJkv1dMmSZr+FLhfVYZUkSC5UUFcCiLIocUSGiRufdAG+9F6rTgWvvXCtbJGUJNBmPYOzDKG8pwigEIjmgs7DP/yXnAwytK1EuTHPIGXCHzFge2idbOK3WgbYNd+HdNy9b3KdEhogteEVnSpZAg6NDGH1/ACw+gUJgVGI1DTeDHXu+cDQ+4kPZ4C2VMRqBPhrV+apo7oVDLpIwbhE9d3UGTUNlYX4NDwzGFSZFjTuzTlJVFU6HA5alohCYrBCFL1pOXhyBMVnYufmQlziZ5eHmrTXUqtf3vfn9pm90rJdd2g/NcLwokexv0jMhPMgpB1/f/vKPapq0Xzt8HoVRq2CfXLwCQazEk8QW4P+GXng2fGH4Ic8nfIpFLfFe3qOURS1QBspbTx14ZfhM/9119/klllg4I3ntn14qAonUks997+Clt/dedLtX+0a4UUlk6v1ZWSoCCcSuCun67w5Fj2zeV+9qbzwjaYrChZoWiSU2KWZ1oJaSQIKU/yhHOv8YYiB/cvhqp0UiYMSR3UleagIJhECJlDv5yMuPEUX6gavtDkU0eopXE/fCvMI/S9/SdYtAczvfW2kkMusSiEg5tffT+/8wfOTqvUaUHjJHYr967XP7e5DRP8weizFb72T9GLy/mMuERaTI///Z4bP8eVvyvcQ+zdQBWYJINb5+ZlVkzDm3sMRkP7R6T18eR9+6JS6r+c9KMUdk7Leqr0WcY1+VhMNYzHQ2udlF1/G/oETfyBRIev/gd/ujV994xuFr484uepxzMS1eJqaLytzr6uXRo1cewLMoqNd8O25VV4w0jcav/f2zWmv385Yebk6M/HKVjQ9uHcuuoeWhn8KYCGBeSBgy/6MofSMn3nv0/C//cx7JezNQArcLv+mLtrc74HQW8AucxvwSEveGC+NNb4pHlSpVqlSpUqVKlaL4CM+wHUMyol4NAAAAAElFTkSuQmCC", B1 = ({ specialist: u }) => {
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
  return /* @__PURE__ */ J.jsxs("div", { className: Le.card, children: [
    /* @__PURE__ */ J.jsx("div", { className: Le.photoContainer, children: s.photo ? /* @__PURE__ */ J.jsx("img", { src: s.photo, alt: s.name, className: Le.photo }) : /* @__PURE__ */ J.jsx("div", { className: Le.photoPlaceholder, children: /* @__PURE__ */ J.jsx("span", { className: Le.initials, children: s.name.split(" ").map((d) => d[0]).join("").toUpperCase().slice(0, 2) }) }) }),
    /* @__PURE__ */ J.jsx("h2", { className: Le.name, children: s.name }),
    s.description && /* @__PURE__ */ J.jsx("p", { className: Le.description, children: s.description }),
    s.email && /* @__PURE__ */ J.jsx("a", { href: `mailto:${s.email}`, className: Le.email, children: s.email }),
    (s.meetSubject || s.meetDescription) && /* @__PURE__ */ J.jsxs("div", { className: Le.meetInfo, children: [
      s.meetSubject && /* @__PURE__ */ J.jsx("span", { className: Le.meetSubject, children: s.meetSubject }),
      s.meetDescription && /* @__PURE__ */ J.jsx("span", { className: Le.meetDescription, children: s.meetDescription })
    ] }),
    /* @__PURE__ */ J.jsx("div", { className: Le.divider }),
    /* @__PURE__ */ J.jsxs("div", { className: Le.info, children: [
      /* @__PURE__ */ J.jsxs("div", { className: Le.infoItem, children: [
        /* @__PURE__ */ J.jsx("img", { src: CS, alt: "Clock", className: Le.icon }),
        /* @__PURE__ */ J.jsx("span", { className: Le.infoText, children: r.timeSlot })
      ] }),
      /* @__PURE__ */ J.jsxs("div", { className: Le.infoItem, children: [
        /* @__PURE__ */ J.jsx("img", { src: TS, alt: "Check", className: Le.icon }),
        /* @__PURE__ */ J.jsx("span", { className: Le.infoText, children: r.confirmation })
      ] }),
      /* @__PURE__ */ J.jsxs("div", { className: Le.infoItem, children: [
        /* @__PURE__ */ J.jsx("img", { src: AS, alt: "Google Meet", className: Le.icon }),
        /* @__PURE__ */ J.jsx("span", { className: Le.infoText, children: r.videoCall })
      ] })
    ] })
  ] });
}, MS = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014C12.1978%2014%2012.3911%2013.9414%2012.5556%2013.8315C12.72%2013.7216%2012.8482%2013.5654%2012.9239%2013.3827C12.9996%2013.2%2013.0194%2012.9989%2012.9808%2012.8049C12.9422%2012.6109%2012.847%2012.4327%2012.7071%2012.2929C12.5673%2012.153%2012.3891%2012.0578%2012.1951%2012.0192C12.0011%2011.9806%2011.8%2012.0004%2011.6173%2012.0761C11.4346%2012.1518%2011.2784%2012.28%2011.1685%2012.4444C11.0586%2012.6089%2011%2012.8022%2011%2013C11%2013.2652%2011.1054%2013.5196%2011.2929%2013.7071C11.4804%2013.8946%2011.7348%2014%2012%2014ZM17%2014C17.1978%2014%2017.3911%2013.9414%2017.5556%2013.8315C17.72%2013.7216%2017.8482%2013.5654%2017.9239%2013.3827C17.9996%2013.2%2018.0194%2012.9989%2017.9808%2012.8049C17.9422%2012.6109%2017.847%2012.4327%2017.7071%2012.2929C17.5673%2012.153%2017.3891%2012.0578%2017.1951%2012.0192C17.0011%2011.9806%2016.8%2012.0004%2016.6173%2012.0761C16.4346%2012.1518%2016.2784%2012.28%2016.1685%2012.4444C16.0586%2012.6089%2016%2012.8022%2016%2013C16%2013.2652%2016.1054%2013.5196%2016.2929%2013.7071C16.4804%2013.8946%2016.7348%2014%2017%2014ZM12%2018C12.1978%2018%2012.3911%2017.9414%2012.5556%2017.8315C12.72%2017.7216%2012.8482%2017.5654%2012.9239%2017.3827C12.9996%2017.2%2013.0194%2016.9989%2012.9808%2016.8049C12.9422%2016.6109%2012.847%2016.4327%2012.7071%2016.2929C12.5673%2016.153%2012.3891%2016.0578%2012.1951%2016.0192C12.0011%2015.9806%2011.8%2016.0004%2011.6173%2016.0761C11.4346%2016.1518%2011.2784%2016.28%2011.1685%2016.4444C11.0586%2016.6089%2011%2016.8022%2011%2017C11%2017.2652%2011.1054%2017.5196%2011.2929%2017.7071C11.4804%2017.8946%2011.7348%2018%2012%2018ZM17%2018C17.1978%2018%2017.3911%2017.9414%2017.5556%2017.8315C17.72%2017.7216%2017.8482%2017.5654%2017.9239%2017.3827C17.9996%2017.2%2018.0194%2016.9989%2017.9808%2016.8049C17.9422%2016.6109%2017.847%2016.4327%2017.7071%2016.2929C17.5673%2016.153%2017.3891%2016.0578%2017.1951%2016.0192C17.0011%2015.9806%2016.8%2016.0004%2016.6173%2016.0761C16.4346%2016.1518%2016.2784%2016.28%2016.1685%2016.4444C16.0586%2016.6089%2016%2016.8022%2016%2017C16%2017.2652%2016.1054%2017.5196%2016.2929%2017.7071C16.4804%2017.8946%2016.7348%2018%2017%2018ZM7%2014C7.19778%2014%207.39112%2013.9414%207.55557%2013.8315C7.72002%2013.7216%207.84819%2013.5654%207.92388%2013.3827C7.99957%2013.2%208.01937%2012.9989%207.98079%2012.8049C7.9422%2012.6109%207.84696%2012.4327%207.70711%2012.2929C7.56725%2012.153%207.38907%2012.0578%207.19509%2012.0192C7.00111%2011.9806%206.80004%2012.0004%206.61732%2012.0761C6.43459%2012.1518%206.27841%2012.28%206.16853%2012.4444C6.05865%2012.6089%206%2012.8022%206%2013C6%2013.2652%206.10536%2013.5196%206.29289%2013.7071C6.48043%2013.8946%206.73478%2014%207%2014ZM19%204H18V3C18%202.73478%2017.8946%202.48043%2017.7071%202.29289C17.5196%202.10536%2017.2652%202%2017%202C16.7348%202%2016.4804%202.10536%2016.2929%202.29289C16.1054%202.48043%2016%202.73478%2016%203V4H8V3C8%202.73478%207.89464%202.48043%207.70711%202.29289C7.51957%202.10536%207.26522%202%207%202C6.73478%202%206.48043%202.10536%206.29289%202.29289C6.10536%202.48043%206%202.73478%206%203V4H5C4.20435%204%203.44129%204.31607%202.87868%204.87868C2.31607%205.44129%202%206.20435%202%207V19C2%2019.7956%202.31607%2020.5587%202.87868%2021.1213C3.44129%2021.6839%204.20435%2022%205%2022H19C19.7956%2022%2020.5587%2021.6839%2021.1213%2021.1213C21.6839%2020.5587%2022%2019.7956%2022%2019V7C22%206.20435%2021.6839%205.44129%2021.1213%204.87868C20.5587%204.31607%2019.7956%204%2019%204ZM20%2019C20%2019.2652%2019.8946%2019.5196%2019.7071%2019.7071C19.5196%2019.8946%2019.2652%2020%2019%2020H5C4.73478%2020%204.48043%2019.8946%204.29289%2019.7071C4.10536%2019.5196%204%2019.2652%204%2019V10H20V19ZM20%208H4V7C4%206.73478%204.10536%206.48043%204.29289%206.29289C4.48043%206.10536%204.73478%206%205%206H19C19.2652%206%2019.5196%206.10536%2019.7071%206.29289C19.8946%206.48043%2020%206.73478%2020%207V8ZM7%2018C7.19778%2018%207.39112%2017.9414%207.55557%2017.8315C7.72002%2017.7216%207.84819%2017.5654%207.92388%2017.3827C7.99957%2017.2%208.01937%2016.9989%207.98079%2016.8049C7.9422%2016.6109%207.84696%2016.4327%207.70711%2016.2929C7.56725%2016.153%207.38907%2016.0578%207.19509%2016.0192C7.00111%2015.9806%206.80004%2016.0004%206.61732%2016.0761C6.43459%2016.1518%206.27841%2016.28%206.16853%2016.4444C6.05865%2016.6089%206%2016.8022%206%2017C6%2017.2652%206.10536%2017.5196%206.29289%2017.7071C6.48043%2017.8946%206.73478%2018%207%2018Z'%20fill='%23404040'/%3e%3c/svg%3e", DS = "_container_panbg_1", zS = "_selectedSlot_panbg_6", OS = "_slotIcon_panbg_16", RS = "_slotInfo_panbg_22", NS = "_slotDate_panbg_28", US = "_slotTime_panbg_34", xS = "_error_panbg_40", jS = "_form_panbg_50", qS = "_formGroup_panbg_56", BS = "_label_panbg_61", HS = "_input_panbg_68", QS = "_textarea_panbg_69", wS = "_buttons_panbg_90", LS = "_backButton_panbg_97", YS = "_submitButton_panbg_98", He = {
  container: DS,
  selectedSlot: zS,
  slotIcon: OS,
  slotInfo: RS,
  slotDate: NS,
  slotTime: US,
  error: xS,
  form: jS,
  formGroup: qS,
  label: BS,
  input: HS,
  textarea: QS,
  buttons: wS,
  backButton: LS,
  submitButton: YS
}, GS = () => {
  const u = Yu(), { selectedSlot: c, formData: s, recaptchaToken: r } = zl((Q) => Q.booking), [d, { isLoading: h }] = _p(), [p, D] = ce.useState(null), v = (Q) => {
    const { name: z, value: L } = Q.target;
    u(Dp({ [z]: L }));
  }, m = async (Q) => {
    if (Q.preventDefault(), D(null), !c) {
      D("Слот не выбран");
      return;
    }
    if (!s.name || !s.email || !s.phone) {
      D("Пожалуйста, заполните все обязательные поля");
      return;
    }
    try {
      let z = r;
      if (r && typeof window < "u" && window.grecaptcha)
        try {
          z = await window.grecaptcha.execute(r, { action: "submit" }), console.log("reCAPTCHA token generated:", z?.substring(0, 20) + "...");
        } catch (x) {
          console.error("reCAPTCHA error:", x), D("Ошибка проверки reCAPTCHA");
          return;
        }
      const L = await d({
        startTime: c.start,
        name: s.name,
        email: s.email,
        phone: s.phone,
        description: s.description,
        recaptchaToken: z || void 0
      }).unwrap();
      L.success && (u(
        zp({
          meetLink: L.data.booking.meetLink,
          startTime: L.data.booking.startTime,
          endTime: L.data.booking.endTime
        })
      ), u(zs("success")));
    } catch (z) {
      D(z?.data?.error || "Ошибка при бронировании");
    }
  }, j = () => {
    u(zs("calendar"));
  }, S = () => {
    if (!c) return "";
    const Q = new Date(c.start), z = Q.toLocaleDateString("ru-RU", { weekday: "long" }), L = Q.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    return `${z.charAt(0).toUpperCase() + z.slice(1)}, ${L}`;
  }, U = () => c ? new Date(c.start).toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit"
  }) : "";
  return /* @__PURE__ */ J.jsxs("div", { className: He.container, children: [
    /* @__PURE__ */ J.jsxs("div", { className: He.selectedSlot, children: [
      /* @__PURE__ */ J.jsx("img", { src: MS, alt: "Календарь", className: He.slotIcon }),
      /* @__PURE__ */ J.jsxs("div", { className: He.slotInfo, children: [
        /* @__PURE__ */ J.jsx("div", { className: He.slotDate, children: S() }),
        /* @__PURE__ */ J.jsx("div", { className: He.slotTime, children: U() })
      ] })
    ] }),
    p && /* @__PURE__ */ J.jsx("div", { className: He.error, children: p }),
    /* @__PURE__ */ J.jsxs("form", { onSubmit: m, className: He.form, children: [
      /* @__PURE__ */ J.jsxs("div", { className: He.formGroup, children: [
        /* @__PURE__ */ J.jsx("label", { htmlFor: "name", className: He.label, children: "Имя *" }),
        /* @__PURE__ */ J.jsx(
          "input",
          {
            type: "text",
            id: "name",
            name: "name",
            value: s.name,
            onChange: v,
            className: He.input,
            placeholder: "Иван Петров",
            required: !0
          }
        )
      ] }),
      /* @__PURE__ */ J.jsxs("div", { className: He.formGroup, children: [
        /* @__PURE__ */ J.jsx("label", { htmlFor: "email", className: He.label, children: "Email *" }),
        /* @__PURE__ */ J.jsx(
          "input",
          {
            type: "email",
            id: "email",
            name: "email",
            value: s.email,
            onChange: v,
            className: He.input,
            placeholder: "ivan@example.com",
            required: !0
          }
        )
      ] }),
      /* @__PURE__ */ J.jsxs("div", { className: He.formGroup, children: [
        /* @__PURE__ */ J.jsx("label", { htmlFor: "phone", className: He.label, children: "Телефон *" }),
        /* @__PURE__ */ J.jsx(
          "input",
          {
            type: "tel",
            id: "phone",
            name: "phone",
            value: s.phone,
            onChange: v,
            className: He.input,
            placeholder: "+7 (999) 123-45-67",
            required: !0
          }
        )
      ] }),
      /* @__PURE__ */ J.jsxs("div", { className: He.formGroup, children: [
        /* @__PURE__ */ J.jsx("label", { htmlFor: "description", className: He.label, children: "Комментарий (необязательно)" }),
        /* @__PURE__ */ J.jsx(
          "textarea",
          {
            id: "description",
            name: "description",
            value: s.description,
            onChange: v,
            className: He.textarea,
            placeholder: "Опишите кратко, что вы хотели бы обсудить",
            rows: 3
          }
        )
      ] }),
      /* @__PURE__ */ J.jsxs("div", { className: He.buttons, children: [
        /* @__PURE__ */ J.jsx(
          "button",
          {
            type: "button",
            onClick: j,
            className: He.backButton,
            disabled: h,
            children: "Назад"
          }
        ),
        /* @__PURE__ */ J.jsx(
          "button",
          {
            type: "submit",
            className: He.submitButton,
            disabled: h,
            children: h ? "Бронирование..." : "Забронировать"
          }
        )
      ] })
    ] })
  ] });
}, VS = "_container_18fmv_1", XS = "_icon_18fmv_11", ZS = "_title_18fmv_16", KS = "_subtitle_18fmv_23", JS = "_details_18fmv_29", kS = "_detailRow_18fmv_37", FS = "_detailLabel_18fmv_49", WS = "_detailValue_18fmv_55", $S = "_meetLink_18fmv_61", IS = "_newBookingButton_18fmv_80", Ye = {
  container: VS,
  icon: XS,
  title: ZS,
  subtitle: KS,
  details: JS,
  detailRow: kS,
  detailLabel: FS,
  detailValue: WS,
  meetLink: $S,
  newBookingButton: IS
}, PS = () => {
  const u = Yu(), { bookingResult: c, formData: s } = zl((D) => D.booking), r = () => {
    u(Rp());
  }, d = (D) => {
    const v = new Date(D);
    return {
      date: v.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }),
      time: v.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit"
      })
    };
  };
  if (!c)
    return null;
  const { date: h, time: p } = d(c.startTime);
  return /* @__PURE__ */ J.jsxs("div", { className: Ye.container, children: [
    /* @__PURE__ */ J.jsx("div", { className: Ye.icon, children: "✅" }),
    /* @__PURE__ */ J.jsx("h2", { className: Ye.title, children: "Встреча успешно забронирована!" }),
    /* @__PURE__ */ J.jsx("p", { className: Ye.subtitle, children: "На ваш email отправлена ссылка на встречу" }),
    /* @__PURE__ */ J.jsxs("div", { className: Ye.details, children: [
      /* @__PURE__ */ J.jsxs("div", { className: Ye.detailRow, children: [
        /* @__PURE__ */ J.jsx("span", { className: Ye.detailLabel, children: "📅 Дата:" }),
        /* @__PURE__ */ J.jsx("span", { className: Ye.detailValue, children: h })
      ] }),
      /* @__PURE__ */ J.jsxs("div", { className: Ye.detailRow, children: [
        /* @__PURE__ */ J.jsx("span", { className: Ye.detailLabel, children: "🕐 Время:" }),
        /* @__PURE__ */ J.jsx("span", { className: Ye.detailValue, children: p })
      ] }),
      /* @__PURE__ */ J.jsxs("div", { className: Ye.detailRow, children: [
        /* @__PURE__ */ J.jsx("span", { className: Ye.detailLabel, children: "👤 Имя:" }),
        /* @__PURE__ */ J.jsx("span", { className: Ye.detailValue, children: s.name })
      ] }),
      /* @__PURE__ */ J.jsxs("div", { className: Ye.detailRow, children: [
        /* @__PURE__ */ J.jsx("span", { className: Ye.detailLabel, children: "📧 Email:" }),
        /* @__PURE__ */ J.jsx("span", { className: Ye.detailValue, children: s.email })
      ] }),
      /* @__PURE__ */ J.jsxs("div", { className: Ye.detailRow, children: [
        /* @__PURE__ */ J.jsx("span", { className: Ye.detailLabel, children: "📞 Телефон:" }),
        /* @__PURE__ */ J.jsx("span", { className: Ye.detailValue, children: s.phone })
      ] })
    ] }),
    /* @__PURE__ */ J.jsx(
      "a",
      {
        href: c.meetLink,
        target: "_blank",
        rel: "noopener noreferrer",
        className: Ye.meetLink,
        children: "Открыть Google Meet"
      }
    ),
    /* @__PURE__ */ J.jsx("button", { onClick: r, className: Ye.newBookingButton, children: "Забронировать еще одну встречу" })
  ] });
}, eb = "_overlay_q0uxt_1", tb = "_content_q0uxt_24", nb = "_closeButton_q0uxt_44", ms = {
  overlay: eb,
  content: tb,
  closeButton: nb
}, lb = ({ isOpen: u, onClose: c }) => (ce.useEffect(() => (u ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
  document.body.style.overflow = "";
}), [u]), ce.useEffect(() => {
  const s = (r) => {
    r.key === "Escape" && u && c();
  };
  return document.addEventListener("keydown", s), () => document.removeEventListener("keydown", s);
}, [u, c]), u ? /* @__PURE__ */ J.jsx("div", { className: ms.overlay, onClick: c, children: /* @__PURE__ */ J.jsxs("div", { className: ms.content, onClick: (s) => s.stopPropagation(), children: [
  /* @__PURE__ */ J.jsx("button", { className: ms.closeButton, onClick: c, "aria-label": "Закрыть", children: "×" }),
  /* @__PURE__ */ J.jsx(Ah, {})
] }) }) : null), ab = "_widget_ofhhd_1", ub = "_content_ofhhd_15", ib = "_leftColumn_ofhhd_22", cb = "_centerColumn_ofhhd_30", fb = "_rightColumn_ofhhd_35", rb = "_formMainContent_ofhhd_44", sb = "_successContent_ofhhd_53", ob = "_loading_ofhhd_58", db = "_error_ofhhd_59", hb = "_spinner_ofhhd_69", Xt = {
  widget: ab,
  content: ub,
  leftColumn: ib,
  centerColumn: cb,
  rightColumn: fb,
  formMainContent: rb,
  successContent: sb,
  loading: ob,
  error: db,
  spinner: hb
}, Mh = ({ specialist: u }) => {
  const c = Yu(), { currentStep: s } = zl((S) => S.booking), { selectedDate: r } = zl((S) => S.calendar), [d, h] = ce.useState(!1), [p, D] = ce.useState(!1), { data: v, isLoading: m, error: j } = Sp(void 0);
  return ce.useEffect(() => {
    if (v?.data?.recaptcha?.enabled && v?.data?.recaptcha?.siteKey) {
      const S = document.createElement("script");
      return S.src = `https://www.google.com/recaptcha/api.js?render=${v.data.recaptcha.siteKey}`, S.async = !0, document.head.appendChild(S), c(Op(v.data.recaptcha.siteKey)), console.log("reCAPTCHA loaded with siteKey:", v.data.recaptcha.siteKey), () => {
        document.head.removeChild(S);
      };
    }
  }, [v, c]), ce.useEffect(() => {
    (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0);
  }, []), ce.useEffect(() => {
    r && window.innerWidth <= 1024 && h(!0);
  }, [r]), ce.useEffect(() => {
    s === "form" && window.innerWidth <= 1024 ? D(!0) : D(!1);
  }, [s]), /* @__PURE__ */ J.jsxs("div", { className: Xt.widget, children: [
    m && /* @__PURE__ */ J.jsxs("div", { className: Xt.loading, children: [
      /* @__PURE__ */ J.jsx("div", { className: Xt.spinner }),
      /* @__PURE__ */ J.jsx("p", { children: "Загрузка..." })
    ] }),
    j && /* @__PURE__ */ J.jsx("div", { className: Xt.error, children: /* @__PURE__ */ J.jsx("p", { children: "Ошибка загрузки конфигурации. Проверьте API токен." }) }),
    !m && !j && /* @__PURE__ */ J.jsxs(J.Fragment, { children: [
      s === "calendar" && /* @__PURE__ */ J.jsxs(J.Fragment, { children: [
        /* @__PURE__ */ J.jsxs("div", { className: Xt.content, children: [
          /* @__PURE__ */ J.jsx("div", { className: Xt.leftColumn, children: /* @__PURE__ */ J.jsx(B1, { specialist: u }) }),
          /* @__PURE__ */ J.jsx("div", { className: Xt.centerColumn, children: /* @__PURE__ */ J.jsx(Fp, {}) }),
          /* @__PURE__ */ J.jsx("div", { className: Xt.rightColumn, children: /* @__PURE__ */ J.jsx(Ah, {}) })
        ] }),
        /* @__PURE__ */ J.jsx(
          lb,
          {
            isOpen: d,
            onClose: () => h(!1)
          }
        )
      ] }),
      s === "form" && /* @__PURE__ */ J.jsx(J.Fragment, { children: /* @__PURE__ */ J.jsxs("div", { className: Xt.content, children: [
        /* @__PURE__ */ J.jsx("div", { className: Xt.leftColumn, children: /* @__PURE__ */ J.jsx(B1, { specialist: u }) }),
        /* @__PURE__ */ J.jsx("div", { className: Xt.formMainContent, children: /* @__PURE__ */ J.jsx(GS, {}) })
      ] }) }),
      s === "success" && /* @__PURE__ */ J.jsx("div", { className: Xt.successContent, children: /* @__PURE__ */ J.jsx(PS, {}) })
    ] })
  ] });
}, mb = "_overlay_ov4rs_1", yb = "_modal_ov4rs_25", vb = "_closeButton_ov4rs_48", gb = "_content_ov4rs_74", dc = {
  overlay: mb,
  modal: yb,
  closeButton: vb,
  content: gb
}, H1 = ({ isOpen: u, onClose: c, children: s }) => (ce.useEffect(() => (u ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
  document.body.style.overflow = "";
}), [u]), ce.useEffect(() => {
  const r = (d) => {
    d.key === "Escape" && u && c();
  };
  return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
}, [u, c]), u ? /* @__PURE__ */ J.jsx("div", { className: dc.overlay, onClick: c, children: /* @__PURE__ */ J.jsxs("div", { className: dc.modal, onClick: (r) => r.stopPropagation(), children: [
  /* @__PURE__ */ J.jsx(
    "button",
    {
      className: dc.closeButton,
      onClick: c,
      "aria-label": "Закрыть",
      children: "×"
    }
  ),
  /* @__PURE__ */ J.jsx("div", { className: dc.content, children: s })
] }) }) : null);
let pu = null, va = null;
function pb(u, c) {
  const s = document.getElementById(u);
  if (!s) {
    console.error(`Element with id "${u}" not found`);
    return;
  }
  Eh({
    apiUrl: c.apiUrl,
    apiToken: c.apiToken
  }), Dh(c), w1.createRoot(s).render(
    Ot.createElement(
      Ot.StrictMode,
      null,
      Ot.createElement(
        ys,
        { store: Os, children: Ot.createElement(Mh, { specialist: c.specialist }) }
      )
    )
  );
}
function Sb(u) {
  return Eh({
    apiUrl: u.apiUrl,
    apiToken: u.apiToken
  }), Dh(u), () => bb(u);
}
function bb(u) {
  va || (va = document.createElement("div"), va.id = "google-meet-booking-modal", document.body.appendChild(va), pu = w1.createRoot(va));
  const c = () => {
    pu && va && pu.render(
      Ot.createElement(
        Ot.StrictMode,
        null,
        Ot.createElement(
          ys,
          {
            store: Os,
            children: Ot.createElement(H1, {
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
          store: Os,
          children: Ot.createElement(H1, {
            isOpen: !0,
            onClose: c,
            children: Ot.createElement(Mh, { specialist: u.specialist })
          })
        }
      )
    )
  );
}
function Dh(u) {
  u.theme?.primaryColor && document.documentElement.style.setProperty(
    "--primary-color",
    u.theme.primaryColor
  ), u.theme?.secondaryColor && document.documentElement.style.setProperty(
    "--secondary-color",
    u.theme.secondaryColor
  );
}
typeof window < "u" && (window.GoogleMeetBooking = {
  init: pb,
  initModal: Sb
});
export {
  Sb as initBookingModal,
  pb as initBookingWidget
};
