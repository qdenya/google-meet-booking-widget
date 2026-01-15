function Y1(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var ef = { exports: {} }, ye = {};
var Z2;
function Py() {
  if (Z2) return ye;
  Z2 = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.portal"), f = /* @__PURE__ */ Symbol.for("react.fragment"), s = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), p = /* @__PURE__ */ Symbol.for("react.context"), z = /* @__PURE__ */ Symbol.for("react.forward_ref"), g = /* @__PURE__ */ Symbol.for("react.suspense"), m = /* @__PURE__ */ Symbol.for("react.memo"), j = /* @__PURE__ */ Symbol.for("react.lazy"), S = /* @__PURE__ */ Symbol.for("react.activity"), N = Symbol.iterator;
  function Q(y) {
    return y === null || typeof y != "object" ? null : (y = N && y[N] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var T = {
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
  function G(y, J, le) {
    this.props = y, this.context = J, this.refs = x, this.updater = le || T;
  }
  G.prototype.isReactComponent = {}, G.prototype.setState = function(y, J) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, J, "setState");
  }, G.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function F() {
  }
  F.prototype = G.prototype;
  function b(y, J, le) {
    this.props = y, this.context = J, this.refs = x, this.updater = le || T;
  }
  var O = b.prototype = new F();
  O.constructor = b, L(O, G.prototype), O.isPureReactComponent = !0;
  var C = Array.isArray;
  function A() {
  }
  var R = { H: null, A: null, T: null, S: null }, X = Object.prototype.hasOwnProperty;
  function V(y, J, le) {
    var ne = le.ref;
    return {
      $$typeof: u,
      type: y,
      key: J,
      ref: ne !== void 0 ? ne : null,
      props: le
    };
  }
  function q(y, J) {
    return V(y.type, J, y.props);
  }
  function _(y) {
    return typeof y == "object" && y !== null && y.$$typeof === u;
  }
  function M(y) {
    var J = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(le) {
      return J[le];
    });
  }
  var Y = /\/+/g;
  function $(y, J) {
    return typeof y == "object" && y !== null && y.key != null ? M("" + y.key) : J.toString(36);
  }
  function ae(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(A, A) : (y.status = "pending", y.then(
          function(J) {
            y.status === "pending" && (y.status = "fulfilled", y.value = J);
          },
          function(J) {
            y.status === "pending" && (y.status = "rejected", y.reason = J);
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
  function D(y, J, le, ne, re) {
    var fe = typeof y;
    (fe === "undefined" || fe === "boolean") && (y = null);
    var ce = !1;
    if (y === null) ce = !0;
    else
      switch (fe) {
        case "bigint":
        case "string":
        case "number":
          ce = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case u:
            case c:
              ce = !0;
              break;
            case j:
              return ce = y._init, D(
                ce(y._payload),
                J,
                le,
                ne,
                re
              );
          }
      }
    if (ce)
      return re = re(y), ce = ne === "" ? "." + $(y, 0) : ne, C(re) ? (le = "", ce != null && (le = ce.replace(Y, "$&/") + "/"), D(re, J, le, "", function(pe) {
        return pe;
      })) : re != null && (_(re) && (re = q(
        re,
        le + (re.key == null || y && y.key === re.key ? "" : ("" + re.key).replace(
          Y,
          "$&/"
        ) + "/") + ce
      )), J.push(re)), 1;
    ce = 0;
    var Se = ne === "" ? "." : ne + ":";
    if (C(y))
      for (var de = 0; de < y.length; de++)
        ne = y[de], fe = Se + $(ne, de), ce += D(
          ne,
          J,
          le,
          fe,
          re
        );
    else if (de = Q(y), typeof de == "function")
      for (y = de.call(y), de = 0; !(ne = y.next()).done; )
        ne = ne.value, fe = Se + $(ne, de++), ce += D(
          ne,
          J,
          le,
          fe,
          re
        );
    else if (fe === "object") {
      if (typeof y.then == "function")
        return D(
          ae(y),
          J,
          le,
          ne,
          re
        );
      throw J = String(y), Error(
        "Objects are not valid as a React child (found: " + (J === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : J) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ce;
  }
  function W(y, J, le) {
    if (y == null) return y;
    var ne = [], re = 0;
    return D(y, ne, "", "", function(fe) {
      return J.call(le, fe, re++);
    }), ne;
  }
  function P(y) {
    if (y._status === -1) {
      var J = y._result;
      J = J(), J.then(
        function(le) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = le);
        },
        function(le) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = le);
        }
      ), y._status === -1 && (y._status = 0, y._result = J);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var te = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var J = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(J)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  }, ue = {
    map: W,
    forEach: function(y, J, le) {
      W(
        y,
        function() {
          J.apply(this, arguments);
        },
        le
      );
    },
    count: function(y) {
      var J = 0;
      return W(y, function() {
        J++;
      }), J;
    },
    toArray: function(y) {
      return W(y, function(J) {
        return J;
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
  return ye.Activity = S, ye.Children = ue, ye.Component = G, ye.Fragment = f, ye.Profiler = d, ye.PureComponent = b, ye.StrictMode = s, ye.Suspense = g, ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = R, ye.__COMPILER_RUNTIME = {
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
  }, ye.cloneElement = function(y, J, le) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var ne = L({}, y.props), re = y.key;
    if (J != null)
      for (fe in J.key !== void 0 && (re = "" + J.key), J)
        !X.call(J, fe) || fe === "key" || fe === "__self" || fe === "__source" || fe === "ref" && J.ref === void 0 || (ne[fe] = J[fe]);
    var fe = arguments.length - 2;
    if (fe === 1) ne.children = le;
    else if (1 < fe) {
      for (var ce = Array(fe), Se = 0; Se < fe; Se++)
        ce[Se] = arguments[Se + 2];
      ne.children = ce;
    }
    return V(y.type, re, ne);
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
  }, ye.createElement = function(y, J, le) {
    var ne, re = {}, fe = null;
    if (J != null)
      for (ne in J.key !== void 0 && (fe = "" + J.key), J)
        X.call(J, ne) && ne !== "key" && ne !== "__self" && ne !== "__source" && (re[ne] = J[ne]);
    var ce = arguments.length - 2;
    if (ce === 1) re.children = le;
    else if (1 < ce) {
      for (var Se = Array(ce), de = 0; de < ce; de++)
        Se[de] = arguments[de + 2];
      re.children = Se;
    }
    if (y && y.defaultProps)
      for (ne in ce = y.defaultProps, ce)
        re[ne] === void 0 && (re[ne] = ce[ne]);
    return V(y, fe, re);
  }, ye.createRef = function() {
    return { current: null };
  }, ye.forwardRef = function(y) {
    return { $$typeof: z, render: y };
  }, ye.isValidElement = _, ye.lazy = function(y) {
    return {
      $$typeof: j,
      _payload: { _status: -1, _result: y },
      _init: P
    };
  }, ye.memo = function(y, J) {
    return {
      $$typeof: m,
      type: y,
      compare: J === void 0 ? null : J
    };
  }, ye.startTransition = function(y) {
    var J = R.T, le = {};
    R.T = le;
    try {
      var ne = y(), re = R.S;
      re !== null && re(le, ne), typeof ne == "object" && ne !== null && typeof ne.then == "function" && ne.then(A, te);
    } catch (fe) {
      te(fe);
    } finally {
      J !== null && le.types !== null && (J.types = le.types), R.T = J;
    }
  }, ye.unstable_useCacheRefresh = function() {
    return R.H.useCacheRefresh();
  }, ye.use = function(y) {
    return R.H.use(y);
  }, ye.useActionState = function(y, J, le) {
    return R.H.useActionState(y, J, le);
  }, ye.useCallback = function(y, J) {
    return R.H.useCallback(y, J);
  }, ye.useContext = function(y) {
    return R.H.useContext(y);
  }, ye.useDebugValue = function() {
  }, ye.useDeferredValue = function(y, J) {
    return R.H.useDeferredValue(y, J);
  }, ye.useEffect = function(y, J) {
    return R.H.useEffect(y, J);
  }, ye.useEffectEvent = function(y) {
    return R.H.useEffectEvent(y);
  }, ye.useId = function() {
    return R.H.useId();
  }, ye.useImperativeHandle = function(y, J, le) {
    return R.H.useImperativeHandle(y, J, le);
  }, ye.useInsertionEffect = function(y, J) {
    return R.H.useInsertionEffect(y, J);
  }, ye.useLayoutEffect = function(y, J) {
    return R.H.useLayoutEffect(y, J);
  }, ye.useMemo = function(y, J) {
    return R.H.useMemo(y, J);
  }, ye.useOptimistic = function(y, J) {
    return R.H.useOptimistic(y, J);
  }, ye.useReducer = function(y, J, le) {
    return R.H.useReducer(y, J, le);
  }, ye.useRef = function(y) {
    return R.H.useRef(y);
  }, ye.useState = function(y) {
    return R.H.useState(y);
  }, ye.useSyncExternalStore = function(y, J, le) {
    return R.H.useSyncExternalStore(
      y,
      J,
      le
    );
  }, ye.useTransition = function() {
    return R.H.useTransition();
  }, ye.version = "19.2.3", ye;
}
var K2;
function Nc() {
  return K2 || (K2 = 1, ef.exports = Py()), ef.exports;
}
var ie = Nc();
const Ot = /* @__PURE__ */ Y1(ie);
var tf = { exports: {} }, hu = {}, nf = { exports: {} }, lf = {};
var J2;
function ev() {
  return J2 || (J2 = 1, (function(u) {
    function c(D, W) {
      var P = D.length;
      D.push(W);
      e: for (; 0 < P; ) {
        var te = P - 1 >>> 1, ue = D[te];
        if (0 < d(ue, W))
          D[te] = W, D[P] = ue, P = te;
        else break e;
      }
    }
    function f(D) {
      return D.length === 0 ? null : D[0];
    }
    function s(D) {
      if (D.length === 0) return null;
      var W = D[0], P = D.pop();
      if (P !== W) {
        D[0] = P;
        e: for (var te = 0, ue = D.length, y = ue >>> 1; te < y; ) {
          var J = 2 * (te + 1) - 1, le = D[J], ne = J + 1, re = D[ne];
          if (0 > d(le, P))
            ne < ue && 0 > d(re, le) ? (D[te] = re, D[ne] = P, te = ne) : (D[te] = le, D[J] = P, te = J);
          else if (ne < ue && 0 > d(re, P))
            D[te] = re, D[ne] = P, te = ne;
          else break e;
        }
      }
      return W;
    }
    function d(D, W) {
      var P = D.sortIndex - W.sortIndex;
      return P !== 0 ? P : D.id - W.id;
    }
    if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      u.unstable_now = function() {
        return h.now();
      };
    } else {
      var p = Date, z = p.now();
      u.unstable_now = function() {
        return p.now() - z;
      };
    }
    var g = [], m = [], j = 1, S = null, N = 3, Q = !1, T = !1, L = !1, x = !1, G = typeof setTimeout == "function" ? setTimeout : null, F = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
    function O(D) {
      for (var W = f(m); W !== null; ) {
        if (W.callback === null) s(m);
        else if (W.startTime <= D)
          s(m), W.sortIndex = W.expirationTime, c(g, W);
        else break;
        W = f(m);
      }
    }
    function C(D) {
      if (L = !1, O(D), !T)
        if (f(g) !== null)
          T = !0, A || (A = !0, M());
        else {
          var W = f(m);
          W !== null && ae(C, W.startTime - D);
        }
    }
    var A = !1, R = -1, X = 5, V = -1;
    function q() {
      return x ? !0 : !(u.unstable_now() - V < X);
    }
    function _() {
      if (x = !1, A) {
        var D = u.unstable_now();
        V = D;
        var W = !0;
        try {
          e: {
            T = !1, L && (L = !1, F(R), R = -1), Q = !0;
            var P = N;
            try {
              t: {
                for (O(D), S = f(g); S !== null && !(S.expirationTime > D && q()); ) {
                  var te = S.callback;
                  if (typeof te == "function") {
                    S.callback = null, N = S.priorityLevel;
                    var ue = te(
                      S.expirationTime <= D
                    );
                    if (D = u.unstable_now(), typeof ue == "function") {
                      S.callback = ue, O(D), W = !0;
                      break t;
                    }
                    S === f(g) && s(g), O(D);
                  } else s(g);
                  S = f(g);
                }
                if (S !== null) W = !0;
                else {
                  var y = f(m);
                  y !== null && ae(
                    C,
                    y.startTime - D
                  ), W = !1;
                }
              }
              break e;
            } finally {
              S = null, N = P, Q = !1;
            }
            W = void 0;
          }
        } finally {
          W ? M() : A = !1;
        }
      }
    }
    var M;
    if (typeof b == "function")
      M = function() {
        b(_);
      };
    else if (typeof MessageChannel < "u") {
      var Y = new MessageChannel(), $ = Y.port2;
      Y.port1.onmessage = _, M = function() {
        $.postMessage(null);
      };
    } else
      M = function() {
        G(_, 0);
      };
    function ae(D, W) {
      R = G(function() {
        D(u.unstable_now());
      }, W);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, u.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : X = 0 < D ? Math.floor(1e3 / D) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return N;
    }, u.unstable_next = function(D) {
      switch (N) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = N;
      }
      var P = N;
      N = W;
      try {
        return D();
      } finally {
        N = P;
      }
    }, u.unstable_requestPaint = function() {
      x = !0;
    }, u.unstable_runWithPriority = function(D, W) {
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
      var P = N;
      N = D;
      try {
        return W();
      } finally {
        N = P;
      }
    }, u.unstable_scheduleCallback = function(D, W, P) {
      var te = u.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? te + P : te) : P = te, D) {
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
      return ue = P + ue, D = {
        id: j++,
        callback: W,
        priorityLevel: D,
        startTime: P,
        expirationTime: ue,
        sortIndex: -1
      }, P > te ? (D.sortIndex = P, c(m, D), f(g) === null && D === f(m) && (L ? (F(R), R = -1) : L = !0, ae(C, P - te))) : (D.sortIndex = ue, c(g, D), T || Q || (T = !0, A || (A = !0, M()))), D;
    }, u.unstable_shouldYield = q, u.unstable_wrapCallback = function(D) {
      var W = N;
      return function() {
        var P = N;
        N = W;
        try {
          return D.apply(this, arguments);
        } finally {
          N = P;
        }
      };
    };
  })(lf)), lf;
}
var k2;
function tv() {
  return k2 || (k2 = 1, nf.exports = ev()), nf.exports;
}
var af = { exports: {} }, rt = {};
var F2;
function nv() {
  if (F2) return rt;
  F2 = 1;
  var u = Nc();
  function c(g) {
    var m = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var j = 2; j < arguments.length; j++)
        m += "&args[]=" + encodeURIComponent(arguments[j]);
    }
    return "Minified React error #" + g + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f() {
  }
  var s = {
    d: {
      f,
      r: function() {
        throw Error(c(522));
      },
      D: f,
      C: f,
      L: f,
      m: f,
      X: f,
      S: f,
      M: f
    },
    p: 0,
    findDOMNode: null
  }, d = /* @__PURE__ */ Symbol.for("react.portal");
  function h(g, m, j) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: S == null ? null : "" + S,
      children: g,
      containerInfo: m,
      implementation: j
    };
  }
  var p = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function z(g, m) {
    if (g === "font") return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : "";
  }
  return rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, rt.createPortal = function(g, m) {
    var j = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(c(299));
    return h(g, m, null, j);
  }, rt.flushSync = function(g) {
    var m = p.T, j = s.p;
    try {
      if (p.T = null, s.p = 2, g) return g();
    } finally {
      p.T = m, s.p = j, s.d.f();
    }
  }, rt.preconnect = function(g, m) {
    typeof g == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, s.d.C(g, m));
  }, rt.prefetchDNS = function(g) {
    typeof g == "string" && s.d.D(g);
  }, rt.preinit = function(g, m) {
    if (typeof g == "string" && m && typeof m.as == "string") {
      var j = m.as, S = z(j, m.crossOrigin), N = typeof m.integrity == "string" ? m.integrity : void 0, Q = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      j === "style" ? s.d.S(
        g,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: S,
          integrity: N,
          fetchPriority: Q
        }
      ) : j === "script" && s.d.X(g, {
        crossOrigin: S,
        integrity: N,
        fetchPriority: Q,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, rt.preinitModule = function(g, m) {
    if (typeof g == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var j = z(
            m.as,
            m.crossOrigin
          );
          s.d.M(g, {
            crossOrigin: j,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0
          });
        }
      } else m == null && s.d.M(g);
  }, rt.preload = function(g, m) {
    if (typeof g == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var j = m.as, S = z(j, m.crossOrigin);
      s.d.L(g, j, {
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
  }, rt.preloadModule = function(g, m) {
    if (typeof g == "string")
      if (m) {
        var j = z(m.as, m.crossOrigin);
        s.d.m(g, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: j,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0
        });
      } else s.d.m(g);
  }, rt.requestFormReset = function(g) {
    s.d.r(g);
  }, rt.unstable_batchedUpdates = function(g, m) {
    return g(m);
  }, rt.useFormState = function(g, m, j) {
    return p.H.useFormState(g, m, j);
  }, rt.useFormStatus = function() {
    return p.H.useHostTransitionStatus();
  }, rt.version = "19.2.3", rt;
}
var W2;
function lv() {
  if (W2) return af.exports;
  W2 = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), af.exports = nv(), af.exports;
}
var $2;
function av() {
  if ($2) return hu;
  $2 = 1;
  var u = tv(), c = Nc(), f = lv();
  function s(e) {
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
  function z(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function g(e) {
    if (h(e) !== e)
      throw Error(s(188));
  }
  function m(e) {
    var t = e.alternate;
    if (!t) {
      if (t = h(e), t === null) throw Error(s(188));
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
          if (i === n) return g(a), e;
          if (i === l) return g(a), t;
          i = i.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== l.return) n = a, l = i;
      else {
        for (var r = !1, o = a.child; o; ) {
          if (o === n) {
            r = !0, n = a, l = i;
            break;
          }
          if (o === l) {
            r = !0, l = a, n = i;
            break;
          }
          o = o.sibling;
        }
        if (!r) {
          for (o = i.child; o; ) {
            if (o === n) {
              r = !0, n = i, l = a;
              break;
            }
            if (o === l) {
              r = !0, l = i, n = a;
              break;
            }
            o = o.sibling;
          }
          if (!r) throw Error(s(189));
        }
      }
      if (n.alternate !== l) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
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
  var S = Object.assign, N = /* @__PURE__ */ Symbol.for("react.element"), Q = /* @__PURE__ */ Symbol.for("react.transitional.element"), T = /* @__PURE__ */ Symbol.for("react.portal"), L = /* @__PURE__ */ Symbol.for("react.fragment"), x = /* @__PURE__ */ Symbol.for("react.strict_mode"), G = /* @__PURE__ */ Symbol.for("react.profiler"), F = /* @__PURE__ */ Symbol.for("react.consumer"), b = /* @__PURE__ */ Symbol.for("react.context"), O = /* @__PURE__ */ Symbol.for("react.forward_ref"), C = /* @__PURE__ */ Symbol.for("react.suspense"), A = /* @__PURE__ */ Symbol.for("react.suspense_list"), R = /* @__PURE__ */ Symbol.for("react.memo"), X = /* @__PURE__ */ Symbol.for("react.lazy"), V = /* @__PURE__ */ Symbol.for("react.activity"), q = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), _ = Symbol.iterator;
  function M(e) {
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
      case A:
        return "SuspenseList";
      case V:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case T:
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
  var ae = Array.isArray, D = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, te = [], ue = -1;
  function y(e) {
    return { current: e };
  }
  function J(e) {
    0 > ue || (e.current = te[ue], te[ue] = null, ue--);
  }
  function le(e, t) {
    ue++, te[ue] = e.current, e.current = t;
  }
  var ne = y(null), re = y(null), fe = y(null), ce = y(null);
  function Se(e, t) {
    switch (le(fe, t), le(re, e), le(ne, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? m2(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = m2(t), e = y2(t, e);
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
    J(ne), le(ne, e);
  }
  function de() {
    J(ne), J(re), J(fe);
  }
  function pe(e) {
    e.memoizedState !== null && le(ce, e);
    var t = ne.current, n = y2(t, e.type);
    t !== n && (le(re, e), le(ne, n));
  }
  function st(e) {
    re.current === e && (J(ne), J(re)), ce.current === e && (J(ce), su._currentValue = P);
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
      var i = l.DetermineComponentFrameRoot(), r = i[0], o = i[1];
      if (r && o) {
        var v = r.split(`
`), H = o.split(`
`);
        for (a = l = 0; l < v.length && !v[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; a < H.length && !H[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (l === v.length || a === H.length)
          for (l = v.length - 1, a = H.length - 1; 1 <= l && 0 <= a && v[l] !== H[a]; )
            a--;
        for (; 1 <= l && 0 <= a; l--, a--)
          if (v[l] !== H[a]) {
            if (l !== 1 || a !== 1)
              do
                if (l--, a--, 0 > a || v[l] !== H[a]) {
                  var k = `
` + v[l].replace(" at new ", " at ");
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
  var ll = Object.prototype.hasOwnProperty, ba = u.unstable_scheduleCallback, Rl = u.unstable_cancelCallback, Yc = u.unstable_shouldYield, Uh = u.unstable_requestPaint, St = u.unstable_now, xh = u.unstable_getCurrentPriorityLevel, Zf = u.unstable_ImmediatePriority, Kf = u.unstable_UserBlockingPriority, Vu = u.unstable_NormalPriority, jh = u.unstable_LowPriority, Jf = u.unstable_IdlePriority, qh = u.log, Bh = u.unstable_setDisableYieldValue, _a = null, bt = null;
  function zn(e) {
    if (typeof qh == "function" && Bh(e), bt && typeof bt.setStrictMode == "function")
      try {
        bt.setStrictMode(_a, e);
      } catch {
      }
  }
  var _t = Math.clz32 ? Math.clz32 : wh, Hh = Math.log, Qh = Math.LN2;
  function wh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Hh(e) / Qh | 0) | 0;
  }
  var Xu = 256, Zu = 262144, Ku = 4194304;
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
  function Ju(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var a = 0, i = e.suspendedLanes, r = e.pingedLanes;
    e = e.warmLanes;
    var o = l & 134217727;
    return o !== 0 ? (l = o & ~i, l !== 0 ? a = al(l) : (r &= o, r !== 0 ? a = al(r) : n || (n = o & ~e, n !== 0 && (a = al(n))))) : (o = l & ~i, o !== 0 ? a = al(o) : r !== 0 ? a = al(r) : n || (n = l & ~e, n !== 0 && (a = al(n)))), a === 0 ? 0 : t !== 0 && t !== a && (t & i) === 0 && (i = a & -a, n = t & -t, i >= n || i === 32 && (n & 4194048) !== 0) ? t : a;
  }
  function Ea(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Lh(e, t) {
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
  function kf() {
    var e = Ku;
    return Ku <<= 1, (Ku & 62914560) === 0 && (Ku = 4194304), e;
  }
  function Gc(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ca(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Yh(e, t, n, l, a, i) {
    var r = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var o = e.entanglements, v = e.expirationTimes, H = e.hiddenUpdates;
    for (n = r & ~n; 0 < n; ) {
      var k = 31 - _t(n), ee = 1 << k;
      o[k] = 0, v[k] = -1;
      var w = H[k];
      if (w !== null)
        for (H[k] = null, k = 0; k < w.length; k++) {
          var Z = w[k];
          Z !== null && (Z.lane &= -536870913);
        }
      n &= ~ee;
    }
    l !== 0 && Ff(e, l, 0), i !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(r & ~t));
  }
  function Ff(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - _t(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 261930;
  }
  function Wf(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var l = 31 - _t(n), a = 1 << l;
      a & t | e[l] & t && (e[l] |= t), n &= ~a;
    }
  }
  function $f(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Vc(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Vc(e) {
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
  function Xc(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function If() {
    var e = W.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Q2(e.type));
  }
  function Pf(e, t) {
    var n = W.p;
    try {
      return W.p = e, t();
    } finally {
      W.p = n;
    }
  }
  var On = Math.random().toString(36).slice(2), tt = "__reactFiber$" + On, ot = "__reactProps$" + On, Nl = "__reactContainer$" + On, Zc = "__reactEvents$" + On, Gh = "__reactListeners$" + On, Vh = "__reactHandles$" + On, eo = "__reactResources$" + On, Ta = "__reactMarker$" + On;
  function Kc(e) {
    delete e[tt], delete e[ot], delete e[Zc], delete e[Gh], delete e[Vh];
  }
  function Ul(e) {
    var t = e[tt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Nl] || n[tt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = E2(e); e !== null; ) {
            if (n = e[tt]) return n;
            e = E2(e);
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
    throw Error(s(33));
  }
  function jl(e) {
    var t = e[eo];
    return t || (t = e[eo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Fe(e) {
    e[Ta] = !0;
  }
  var to = /* @__PURE__ */ new Set(), no = {};
  function ul(e, t) {
    ql(e, t), ql(e + "Capture", t);
  }
  function ql(e, t) {
    for (no[e] = t, e = 0; e < t.length; e++)
      to.add(t[e]);
  }
  var Xh = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), lo = {}, ao = {};
  function Zh(e) {
    return ll.call(ao, e) ? !0 : ll.call(lo, e) ? !1 : Xh.test(e) ? ao[e] = !0 : (lo[e] = !0, !1);
  }
  function ku(e, t, n) {
    if (Zh(t))
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
  function Fu(e, t, n) {
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
  function uo(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Kh(e, t, n) {
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
        set: function(r) {
          n = "" + r, i.call(this, r);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(r) {
          n = "" + r;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Jc(e) {
    if (!e._valueTracker) {
      var t = uo(e) ? "checked" : "value";
      e._valueTracker = Kh(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function io(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), l = "";
    return e && (l = uo(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Wu(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Jh = /[\n"\\]/g;
  function qt(e) {
    return e.replace(
      Jh,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function kc(e, t, n, l, a, i, r, o) {
    e.name = "", r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? e.type = r : e.removeAttribute("type"), t != null ? r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + jt(t)) : e.value !== "" + jt(t) && (e.value = "" + jt(t)) : r !== "submit" && r !== "reset" || e.removeAttribute("value"), t != null ? Fc(e, r, jt(t)) : n != null ? Fc(e, r, jt(n)) : l != null && e.removeAttribute("value"), a == null && i != null && (e.defaultChecked = !!i), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.name = "" + jt(o) : e.removeAttribute("name");
  }
  function co(e, t, n, l, a, i, r, o) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || n != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        Jc(e);
        return;
      }
      n = n != null ? "" + jt(n) : "", t = t != null ? "" + jt(t) : n, o || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? a, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = o ? e.checked : !!l, e.defaultChecked = !!l, r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (e.name = r), Jc(e);
  }
  function Fc(e, t, n) {
    t === "number" && Wu(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
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
  function ro(e, t, n) {
    if (t != null && (t = "" + jt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + jt(n) : "";
  }
  function so(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(s(92));
        if (ae(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), t = n;
    }
    n = jt(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l), Jc(e);
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
  var kh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function fo(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || kh.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function oo(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(s(62));
    if (e = e.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var a in t)
        l = t[a], t.hasOwnProperty(a) && n[a] !== l && fo(e, a, l);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && fo(e, i, t[i]);
  }
  function Wc(e) {
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
  var Fh = /* @__PURE__ */ new Map([
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
  ]), Wh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function $u(e) {
    return Wh.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function an() {
  }
  var $c = null;
  function Ic(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ql = null, wl = null;
  function ho(e) {
    var t = xl(e);
    if (t && (e = t.stateNode)) {
      var n = e[ot] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (kc(
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
                if (!a) throw Error(s(90));
                kc(
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
              l = n[t], l.form === e.form && io(l);
          }
          break e;
        case "textarea":
          ro(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Bl(e, !!n.multiple, t, !1);
      }
    }
  }
  var Pc = !1;
  function mo(e, t, n) {
    if (Pc) return e(t, n);
    Pc = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Pc = !1, (Ql !== null || wl !== null) && (Qi(), Ql && (t = Ql, e = wl, wl = Ql = null, ho(t), e)))
        for (t = 0; t < e.length; t++) ho(e[t]);
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
        s(231, t, typeof n)
      );
    return n;
  }
  var un = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), er = !1;
  if (un)
    try {
      var Da = {};
      Object.defineProperty(Da, "passive", {
        get: function() {
          er = !0;
        }
      }), window.addEventListener("test", Da, Da), window.removeEventListener("test", Da, Da);
    } catch {
      er = !1;
    }
  var Rn = null, tr = null, Iu = null;
  function yo() {
    if (Iu) return Iu;
    var e, t = tr, n = t.length, l, a = "value" in Rn ? Rn.value : Rn.textContent, i = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var r = n - e;
    for (l = 1; l <= r && t[n - l] === a[i - l]; l++) ;
    return Iu = a.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Pu(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function ei() {
    return !0;
  }
  function vo() {
    return !1;
  }
  function dt(e) {
    function t(n, l, a, i, r) {
      this._reactName = n, this._targetInst = a, this.type = l, this.nativeEvent = i, this.target = r, this.currentTarget = null;
      for (var o in e)
        e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(i) : i[o]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ei : vo, this.isPropagationStopped = vo, this;
    }
    return S(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ei);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ei);
      },
      persist: function() {
      },
      isPersistent: ei
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
  }, ti = dt(il), za = S({}, il, { view: 0, detail: 0 }), $h = dt(za), nr, lr, Oa, ni = S({}, za, {
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
    getModifierState: ur,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Oa && (Oa && e.type === "mousemove" ? (nr = e.screenX - Oa.screenX, lr = e.screenY - Oa.screenY) : lr = nr = 0, Oa = e), nr);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : lr;
    }
  }), go = dt(ni), Ih = S({}, ni, { dataTransfer: 0 }), Ph = dt(Ih), em = S({}, za, { relatedTarget: 0 }), ar = dt(em), tm = S({}, il, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), nm = dt(tm), lm = S({}, il, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), am = dt(lm), um = S({}, il, { data: 0 }), po = dt(um), im = {
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
  }, cm = {
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
  }, rm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function sm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = rm[e]) ? !!t[e] : !1;
  }
  function ur() {
    return sm;
  }
  var fm = S({}, za, {
    key: function(e) {
      if (e.key) {
        var t = im[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Pu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? cm[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ur,
    charCode: function(e) {
      return e.type === "keypress" ? Pu(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Pu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), om = dt(fm), dm = S({}, ni, {
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
  }), So = dt(dm), hm = S({}, za, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ur
  }), mm = dt(hm), ym = S({}, il, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), vm = dt(ym), gm = S({}, ni, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), pm = dt(gm), Sm = S({}, il, {
    newState: 0,
    oldState: 0
  }), bm = dt(Sm), _m = [9, 13, 27, 32], ir = un && "CompositionEvent" in window, Ra = null;
  un && "documentMode" in document && (Ra = document.documentMode);
  var Em = un && "TextEvent" in window && !Ra, bo = un && (!ir || Ra && 8 < Ra && 11 >= Ra), _o = " ", Eo = !1;
  function Co(e, t) {
    switch (e) {
      case "keyup":
        return _m.indexOf(t.keyCode) !== -1;
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
  function To(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ll = !1;
  function Cm(e, t) {
    switch (e) {
      case "compositionend":
        return To(t);
      case "keypress":
        return t.which !== 32 ? null : (Eo = !0, _o);
      case "textInput":
        return e = t.data, e === _o && Eo ? null : e;
      default:
        return null;
    }
  }
  function Tm(e, t) {
    if (Ll)
      return e === "compositionend" || !ir && Co(e, t) ? (e = yo(), Iu = tr = Rn = null, Ll = !1, e) : null;
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
        return bo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Am = {
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
  function Ao(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Am[e.type] : t === "textarea";
  }
  function Mo(e, t, n, l) {
    Ql ? wl ? wl.push(l) : wl = [l] : Ql = l, t = Zi(t, "onChange"), 0 < t.length && (n = new ti(
      "onChange",
      "change",
      null,
      n,
      l
    ), e.push({ event: n, listeners: t }));
  }
  var Na = null, Ua = null;
  function Mm(e) {
    r2(e, 0);
  }
  function li(e) {
    var t = Aa(e);
    if (io(t)) return e;
  }
  function Do(e, t) {
    if (e === "change") return t;
  }
  var zo = !1;
  if (un) {
    var cr;
    if (un) {
      var rr = "oninput" in document;
      if (!rr) {
        var Oo = document.createElement("div");
        Oo.setAttribute("oninput", "return;"), rr = typeof Oo.oninput == "function";
      }
      cr = rr;
    } else cr = !1;
    zo = cr && (!document.documentMode || 9 < document.documentMode);
  }
  function Ro() {
    Na && (Na.detachEvent("onpropertychange", No), Ua = Na = null);
  }
  function No(e) {
    if (e.propertyName === "value" && li(Ua)) {
      var t = [];
      Mo(
        t,
        Ua,
        e,
        Ic(e)
      ), mo(Mm, t);
    }
  }
  function Dm(e, t, n) {
    e === "focusin" ? (Ro(), Na = t, Ua = n, Na.attachEvent("onpropertychange", No)) : e === "focusout" && Ro();
  }
  function zm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return li(Ua);
  }
  function Om(e, t) {
    if (e === "click") return li(t);
  }
  function Rm(e, t) {
    if (e === "input" || e === "change")
      return li(t);
  }
  function Nm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Et = typeof Object.is == "function" ? Object.is : Nm;
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
  function Uo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function xo(e, t) {
    var n = Uo(e);
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
      n = Uo(n);
    }
  }
  function jo(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? jo(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function qo(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Wu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Wu(e.document);
    }
    return t;
  }
  function sr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Um = un && "documentMode" in document && 11 >= document.documentMode, Yl = null, fr = null, ja = null, or = !1;
  function Bo(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    or || Yl == null || Yl !== Wu(l) || (l = Yl, "selectionStart" in l && sr(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), ja && xa(ja, l) || (ja = l, l = Zi(fr, "onSelect"), 0 < l.length && (t = new ti(
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
  }, dr = {}, Ho = {};
  un && (Ho = document.createElement("div").style, "AnimationEvent" in window || (delete Gl.animationend.animation, delete Gl.animationiteration.animation, delete Gl.animationstart.animation), "TransitionEvent" in window || delete Gl.transitionend.transition);
  function rl(e) {
    if (dr[e]) return dr[e];
    if (!Gl[e]) return e;
    var t = Gl[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Ho)
        return dr[e] = t[n];
    return e;
  }
  var Qo = rl("animationend"), wo = rl("animationiteration"), Lo = rl("animationstart"), xm = rl("transitionrun"), jm = rl("transitionstart"), qm = rl("transitioncancel"), Yo = rl("transitionend"), Go = /* @__PURE__ */ new Map(), hr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  hr.push("scrollEnd");
  function Kt(e, t) {
    Go.set(e, t), ul(t, [e]);
  }
  var ai = typeof reportError == "function" ? reportError : function(e) {
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
  }, Bt = [], Vl = 0, mr = 0;
  function ui() {
    for (var e = Vl, t = mr = Vl = 0; t < e; ) {
      var n = Bt[t];
      Bt[t++] = null;
      var l = Bt[t];
      Bt[t++] = null;
      var a = Bt[t];
      Bt[t++] = null;
      var i = Bt[t];
      if (Bt[t++] = null, l !== null && a !== null) {
        var r = l.pending;
        r === null ? a.next = a : (a.next = r.next, r.next = a), l.pending = a;
      }
      i !== 0 && Vo(n, a, i);
    }
  }
  function ii(e, t, n, l) {
    Bt[Vl++] = e, Bt[Vl++] = t, Bt[Vl++] = n, Bt[Vl++] = l, mr |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function yr(e, t, n, l) {
    return ii(e, t, n, l), ci(e);
  }
  function sl(e, t) {
    return ii(e, null, null, t), ci(e);
  }
  function Vo(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var a = !1, i = e.return; i !== null; )
      i.childLanes |= n, l = i.alternate, l !== null && (l.childLanes |= n), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (a = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, a && t !== null && (a = 31 - _t(n), e = i.hiddenUpdates, l = e[a], l === null ? e[a] = [t] : l.push(t), t.lane = n | 536870912), i) : null;
  }
  function ci(e) {
    if (50 < nu)
      throw nu = 0, Ts = null, Error(s(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Xl = {};
  function Bm(e, t, n, l) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ct(e, t, n, l) {
    return new Bm(e, t, n, l);
  }
  function vr(e) {
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
  function Xo(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function ri(e, t, n, l, a, i) {
    var r = 0;
    if (l = e, typeof e == "function") vr(e) && (r = 1);
    else if (typeof e == "string")
      r = Yy(
        e,
        n,
        ne.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case V:
          return e = Ct(31, n, t, a), e.elementType = V, e.lanes = i, e;
        case L:
          return fl(n.children, a, i, t);
        case x:
          r = 8, a |= 24;
          break;
        case G:
          return e = Ct(12, n, t, a | 2), e.elementType = G, e.lanes = i, e;
        case C:
          return e = Ct(13, n, t, a), e.elementType = C, e.lanes = i, e;
        case A:
          return e = Ct(19, n, t, a), e.elementType = A, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case b:
                r = 10;
                break e;
              case F:
                r = 9;
                break e;
              case O:
                r = 11;
                break e;
              case R:
                r = 14;
                break e;
              case X:
                r = 16, l = null;
                break e;
            }
          r = 29, n = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = Ct(r, n, t, a), t.elementType = e, t.type = l, t.lanes = i, t;
  }
  function fl(e, t, n, l) {
    return e = Ct(7, e, l, t), e.lanes = n, e;
  }
  function gr(e, t, n) {
    return e = Ct(6, e, null, t), e.lanes = n, e;
  }
  function Zo(e) {
    var t = Ct(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function pr(e, t, n) {
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
  var Ko = /* @__PURE__ */ new WeakMap();
  function Ht(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Ko.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: Ol(t)
      }, Ko.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Ol(t)
    };
  }
  var Zl = [], Kl = 0, si = null, qa = 0, Qt = [], wt = 0, Nn = null, It = 1, Pt = "";
  function rn(e, t) {
    Zl[Kl++] = qa, Zl[Kl++] = si, si = e, qa = t;
  }
  function Jo(e, t, n) {
    Qt[wt++] = It, Qt[wt++] = Pt, Qt[wt++] = Nn, Nn = e;
    var l = It;
    e = Pt;
    var a = 32 - _t(l) - 1;
    l &= ~(1 << a), n += 1;
    var i = 32 - _t(t) + a;
    if (30 < i) {
      var r = a - a % 5;
      i = (l & (1 << r) - 1).toString(32), l >>= r, a -= r, It = 1 << 32 - _t(t) + a | n << a | l, Pt = i + e;
    } else
      It = 1 << i | n << a | l, Pt = e;
  }
  function Sr(e) {
    e.return !== null && (rn(e, 1), Jo(e, 1, 0));
  }
  function br(e) {
    for (; e === si; )
      si = Zl[--Kl], Zl[Kl] = null, qa = Zl[--Kl], Zl[Kl] = null;
    for (; e === Nn; )
      Nn = Qt[--wt], Qt[wt] = null, Pt = Qt[--wt], Qt[wt] = null, It = Qt[--wt], Qt[wt] = null;
  }
  function ko(e, t) {
    Qt[wt++] = It, Qt[wt++] = Pt, Qt[wt++] = Nn, It = t.id, Pt = t.overflow, Nn = e;
  }
  var nt = null, je = null, Te = !1, Un = null, Lt = !1, _r = Error(s(519));
  function xn(e) {
    var t = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ba(Ht(t, e)), _r;
  }
  function Fo(e) {
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
        _e("invalid", t), co(
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
        _e("invalid", t), so(t, l.value, l.defaultValue, l.children);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || d2(t.textContent, n) ? (l.popover != null && (_e("beforetoggle", t), _e("toggle", t)), l.onScroll != null && _e("scroll", t), l.onScrollEnd != null && _e("scrollend", t), l.onClick != null && (t.onclick = an), t = !0) : t = !1, t || xn(e, !0);
  }
  function Wo(e) {
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
    if (!Te) return Wo(e), Te = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || ws(e.type, e.memoizedProps)), n = !n), n && je && xn(e), Wo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      je = _2(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      je = _2(e);
    } else
      t === 27 ? (t = je, Jn(e.type) ? (e = Xs, Xs = null, je = e) : je = t) : je = nt ? Gt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ol() {
    je = nt = null, Te = !1;
  }
  function Er() {
    var e = Un;
    return e !== null && (vt === null ? vt = e : vt.push.apply(
      vt,
      e
    ), Un = null), e;
  }
  function Ba(e) {
    Un === null ? Un = [e] : Un.push(e);
  }
  var Cr = y(null), dl = null, sn = null;
  function jn(e, t, n) {
    le(Cr, t._currentValue), t._currentValue = n;
  }
  function fn(e) {
    e._currentValue = Cr.current, J(Cr);
  }
  function Tr(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Ar(e, t, n, l) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var i = a.dependencies;
      if (i !== null) {
        var r = a.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var o = i;
          i = a;
          for (var v = 0; v < t.length; v++)
            if (o.context === t[v]) {
              i.lanes |= n, o = i.alternate, o !== null && (o.lanes |= n), Tr(
                i.return,
                n,
                e
              ), l || (r = null);
              break e;
            }
          i = o.next;
        }
      } else if (a.tag === 18) {
        if (r = a.return, r === null) throw Error(s(341));
        r.lanes |= n, i = r.alternate, i !== null && (i.lanes |= n), Tr(r, n, e), r = null;
      } else r = a.child;
      if (r !== null) r.return = a;
      else
        for (r = a; r !== null; ) {
          if (r === e) {
            r = null;
            break;
          }
          if (a = r.sibling, a !== null) {
            a.return = r.return, r = a;
            break;
          }
          r = r.return;
        }
      a = r;
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
        var r = a.alternate;
        if (r === null) throw Error(s(387));
        if (r = r.memoizedProps, r !== null) {
          var o = a.type;
          Et(a.pendingProps.value, r.value) || (e !== null ? e.push(o) : e = [o]);
        }
      } else if (a === ce.current) {
        if (r = a.alternate, r === null) throw Error(s(387));
        r.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(su) : e = [su]);
      }
      a = a.return;
    }
    e !== null && Ar(
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
  function hl(e) {
    dl = e, sn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function lt(e) {
    return $o(dl, e);
  }
  function oi(e, t) {
    return dl === null && hl(e), $o(e, t);
  }
  function $o(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, sn === null) {
      if (e === null) throw Error(s(308));
      sn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else sn = sn.next = t;
    return n;
  }
  var Hm = typeof AbortController < "u" ? AbortController : function() {
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
  }, Qm = u.unstable_scheduleCallback, wm = u.unstable_NormalPriority, Xe = {
    $$typeof: b,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Mr() {
    return {
      controller: new Hm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ha(e) {
    e.refCount--, e.refCount === 0 && Qm(wm, function() {
      e.controller.abort();
    });
  }
  var Qa = null, Dr = 0, Fl = 0, Wl = null;
  function Lm(e, t) {
    if (Qa === null) {
      var n = Qa = [];
      Dr = 0, Fl = Rs(), Wl = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return Dr++, t.then(Io, Io), t;
  }
  function Io() {
    if (--Dr === 0 && Qa !== null) {
      Wl !== null && (Wl.status = "fulfilled");
      var e = Qa;
      Qa = null, Fl = 0, Wl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Ym(e, t) {
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
  var Po = D.S;
  D.S = function(e, t) {
    Bd = St(), typeof t == "object" && t !== null && typeof t.then == "function" && Lm(e, t), Po !== null && Po(e, t);
  };
  var ml = y(null);
  function zr() {
    var e = ml.current;
    return e !== null ? e : xe.pooledCache;
  }
  function di(e, t) {
    t === null ? le(ml, ml.current) : le(ml, t.pool);
  }
  function e0() {
    var e = zr();
    return e === null ? null : { parent: Xe._currentValue, pool: e };
  }
  var $l = Error(s(460)), Or = Error(s(474)), hi = Error(s(542)), mi = { then: function() {
  } };
  function t0(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function n0(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(an, an), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, a0(e), e;
      default:
        if (typeof t.status == "string") t.then(an, an);
        else {
          if (e = xe, e !== null && 100 < e.shellSuspendCounter)
            throw Error(s(482));
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
            throw e = t.reason, a0(e), e;
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
  function l0() {
    if (vl === null) throw Error(s(459));
    var e = vl;
    return vl = null, e;
  }
  function a0(e) {
    if (e === $l || e === hi)
      throw Error(s(483));
  }
  var Il = null, wa = 0;
  function yi(e) {
    var t = wa;
    return wa += 1, Il === null && (Il = []), n0(Il, e, t);
  }
  function La(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function vi(e, t) {
    throw t.$$typeof === N ? Error(s(525)) : (e = Object.prototype.toString.call(t), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function u0(e) {
    function t(U, E) {
      if (e) {
        var B = U.deletions;
        B === null ? (U.deletions = [E], U.flags |= 16) : B.push(E);
      }
    }
    function n(U, E) {
      if (!e) return null;
      for (; E !== null; )
        t(U, E), E = E.sibling;
      return null;
    }
    function l(U) {
      for (var E = /* @__PURE__ */ new Map(); U !== null; )
        U.key !== null ? E.set(U.key, U) : E.set(U.index, U), U = U.sibling;
      return E;
    }
    function a(U, E) {
      return U = cn(U, E), U.index = 0, U.sibling = null, U;
    }
    function i(U, E, B) {
      return U.index = B, e ? (B = U.alternate, B !== null ? (B = B.index, B < E ? (U.flags |= 67108866, E) : B) : (U.flags |= 67108866, E)) : (U.flags |= 1048576, E);
    }
    function r(U) {
      return e && U.alternate === null && (U.flags |= 67108866), U;
    }
    function o(U, E, B, I) {
      return E === null || E.tag !== 6 ? (E = gr(B, U.mode, I), E.return = U, E) : (E = a(E, B), E.return = U, E);
    }
    function v(U, E, B, I) {
      var he = B.type;
      return he === L ? k(
        U,
        E,
        B.props.children,
        I,
        B.key
      ) : E !== null && (E.elementType === he || typeof he == "object" && he !== null && he.$$typeof === X && yl(he) === E.type) ? (E = a(E, B.props), La(E, B), E.return = U, E) : (E = ri(
        B.type,
        B.key,
        B.props,
        null,
        U.mode,
        I
      ), La(E, B), E.return = U, E);
    }
    function H(U, E, B, I) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== B.containerInfo || E.stateNode.implementation !== B.implementation ? (E = pr(B, U.mode, I), E.return = U, E) : (E = a(E, B.children || []), E.return = U, E);
    }
    function k(U, E, B, I, he) {
      return E === null || E.tag !== 7 ? (E = fl(
        B,
        U.mode,
        I,
        he
      ), E.return = U, E) : (E = a(E, B), E.return = U, E);
    }
    function ee(U, E, B) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = gr(
          "" + E,
          U.mode,
          B
        ), E.return = U, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Q:
            return B = ri(
              E.type,
              E.key,
              E.props,
              null,
              U.mode,
              B
            ), La(B, E), B.return = U, B;
          case T:
            return E = pr(
              E,
              U.mode,
              B
            ), E.return = U, E;
          case X:
            return E = yl(E), ee(U, E, B);
        }
        if (ae(E) || M(E))
          return E = fl(
            E,
            U.mode,
            B,
            null
          ), E.return = U, E;
        if (typeof E.then == "function")
          return ee(U, yi(E), B);
        if (E.$$typeof === b)
          return ee(
            U,
            oi(U, E),
            B
          );
        vi(U, E);
      }
      return null;
    }
    function w(U, E, B, I) {
      var he = E !== null ? E.key : null;
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return he !== null ? null : o(U, E, "" + B, I);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case Q:
            return B.key === he ? v(U, E, B, I) : null;
          case T:
            return B.key === he ? H(U, E, B, I) : null;
          case X:
            return B = yl(B), w(U, E, B, I);
        }
        if (ae(B) || M(B))
          return he !== null ? null : k(U, E, B, I, null);
        if (typeof B.then == "function")
          return w(
            U,
            E,
            yi(B),
            I
          );
        if (B.$$typeof === b)
          return w(
            U,
            E,
            oi(U, B),
            I
          );
        vi(U, B);
      }
      return null;
    }
    function Z(U, E, B, I, he) {
      if (typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint")
        return U = U.get(B) || null, o(E, U, "" + I, he);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case Q:
            return U = U.get(
              I.key === null ? B : I.key
            ) || null, v(E, U, I, he);
          case T:
            return U = U.get(
              I.key === null ? B : I.key
            ) || null, H(E, U, I, he);
          case X:
            return I = yl(I), Z(
              U,
              E,
              B,
              I,
              he
            );
        }
        if (ae(I) || M(I))
          return U = U.get(B) || null, k(E, U, I, he, null);
        if (typeof I.then == "function")
          return Z(
            U,
            E,
            B,
            yi(I),
            he
          );
        if (I.$$typeof === b)
          return Z(
            U,
            E,
            B,
            oi(E, I),
            he
          );
        vi(E, I);
      }
      return null;
    }
    function se(U, E, B, I) {
      for (var he = null, Ae = null, oe = E, ge = E = 0, Ce = null; oe !== null && ge < B.length; ge++) {
        oe.index > ge ? (Ce = oe, oe = null) : Ce = oe.sibling;
        var Me = w(
          U,
          oe,
          B[ge],
          I
        );
        if (Me === null) {
          oe === null && (oe = Ce);
          break;
        }
        e && oe && Me.alternate === null && t(U, oe), E = i(Me, E, ge), Ae === null ? he = Me : Ae.sibling = Me, Ae = Me, oe = Ce;
      }
      if (ge === B.length)
        return n(U, oe), Te && rn(U, ge), he;
      if (oe === null) {
        for (; ge < B.length; ge++)
          oe = ee(U, B[ge], I), oe !== null && (E = i(
            oe,
            E,
            ge
          ), Ae === null ? he = oe : Ae.sibling = oe, Ae = oe);
        return Te && rn(U, ge), he;
      }
      for (oe = l(oe); ge < B.length; ge++)
        Ce = Z(
          oe,
          U,
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
        return t(U, In);
      }), Te && rn(U, ge), he;
    }
    function me(U, E, B, I) {
      if (B == null) throw Error(s(151));
      for (var he = null, Ae = null, oe = E, ge = E = 0, Ce = null, Me = B.next(); oe !== null && !Me.done; ge++, Me = B.next()) {
        oe.index > ge ? (Ce = oe, oe = null) : Ce = oe.sibling;
        var In = w(U, oe, Me.value, I);
        if (In === null) {
          oe === null && (oe = Ce);
          break;
        }
        e && oe && In.alternate === null && t(U, oe), E = i(In, E, ge), Ae === null ? he = In : Ae.sibling = In, Ae = In, oe = Ce;
      }
      if (Me.done)
        return n(U, oe), Te && rn(U, ge), he;
      if (oe === null) {
        for (; !Me.done; ge++, Me = B.next())
          Me = ee(U, Me.value, I), Me !== null && (E = i(Me, E, ge), Ae === null ? he = Me : Ae.sibling = Me, Ae = Me);
        return Te && rn(U, ge), he;
      }
      for (oe = l(oe); !Me.done; ge++, Me = B.next())
        Me = Z(oe, U, ge, Me.value, I), Me !== null && (e && Me.alternate !== null && oe.delete(Me.key === null ? ge : Me.key), E = i(Me, E, ge), Ae === null ? he = Me : Ae.sibling = Me, Ae = Me);
      return e && oe.forEach(function(Iy) {
        return t(U, Iy);
      }), Te && rn(U, ge), he;
    }
    function Ue(U, E, B, I) {
      if (typeof B == "object" && B !== null && B.type === L && B.key === null && (B = B.props.children), typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case Q:
            e: {
              for (var he = B.key; E !== null; ) {
                if (E.key === he) {
                  if (he = B.type, he === L) {
                    if (E.tag === 7) {
                      n(
                        U,
                        E.sibling
                      ), I = a(
                        E,
                        B.props.children
                      ), I.return = U, U = I;
                      break e;
                    }
                  } else if (E.elementType === he || typeof he == "object" && he !== null && he.$$typeof === X && yl(he) === E.type) {
                    n(
                      U,
                      E.sibling
                    ), I = a(E, B.props), La(I, B), I.return = U, U = I;
                    break e;
                  }
                  n(U, E);
                  break;
                } else t(U, E);
                E = E.sibling;
              }
              B.type === L ? (I = fl(
                B.props.children,
                U.mode,
                I,
                B.key
              ), I.return = U, U = I) : (I = ri(
                B.type,
                B.key,
                B.props,
                null,
                U.mode,
                I
              ), La(I, B), I.return = U, U = I);
            }
            return r(U);
          case T:
            e: {
              for (he = B.key; E !== null; ) {
                if (E.key === he)
                  if (E.tag === 4 && E.stateNode.containerInfo === B.containerInfo && E.stateNode.implementation === B.implementation) {
                    n(
                      U,
                      E.sibling
                    ), I = a(E, B.children || []), I.return = U, U = I;
                    break e;
                  } else {
                    n(U, E);
                    break;
                  }
                else t(U, E);
                E = E.sibling;
              }
              I = pr(B, U.mode, I), I.return = U, U = I;
            }
            return r(U);
          case X:
            return B = yl(B), Ue(
              U,
              E,
              B,
              I
            );
        }
        if (ae(B))
          return se(
            U,
            E,
            B,
            I
          );
        if (M(B)) {
          if (he = M(B), typeof he != "function") throw Error(s(150));
          return B = he.call(B), me(
            U,
            E,
            B,
            I
          );
        }
        if (typeof B.then == "function")
          return Ue(
            U,
            E,
            yi(B),
            I
          );
        if (B.$$typeof === b)
          return Ue(
            U,
            E,
            oi(U, B),
            I
          );
        vi(U, B);
      }
      return typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint" ? (B = "" + B, E !== null && E.tag === 6 ? (n(U, E.sibling), I = a(E, B), I.return = U, U = I) : (n(U, E), I = gr(B, U.mode, I), I.return = U, U = I), r(U)) : n(U, E);
    }
    return function(U, E, B, I) {
      try {
        wa = 0;
        var he = Ue(
          U,
          E,
          B,
          I
        );
        return Il = null, he;
      } catch (oe) {
        if (oe === $l || oe === hi) throw oe;
        var Ae = Ct(29, oe, null, U.mode);
        return Ae.lanes = I, Ae.return = U, Ae;
      }
    };
  }
  var gl = u0(!0), i0 = u0(!1), qn = !1;
  function Rr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Nr(e, t) {
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
      return a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t, t = ci(e), Vo(e, null, n), t;
    }
    return ii(e, l, t, n), ci(e);
  }
  function Ya(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, Wf(e, n);
    }
  }
  function Ur(e, t) {
    var n = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, n === l)) {
      var a = null, i = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var r = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          i === null ? a = i = r : i = i.next = r, n = n.next;
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
  var xr = !1;
  function Ga() {
    if (xr) {
      var e = Wl;
      if (e !== null) throw e;
    }
  }
  function Va(e, t, n, l) {
    xr = !1;
    var a = e.updateQueue;
    qn = !1;
    var i = a.firstBaseUpdate, r = a.lastBaseUpdate, o = a.shared.pending;
    if (o !== null) {
      a.shared.pending = null;
      var v = o, H = v.next;
      v.next = null, r === null ? i = H : r.next = H, r = v;
      var k = e.alternate;
      k !== null && (k = k.updateQueue, o = k.lastBaseUpdate, o !== r && (o === null ? k.firstBaseUpdate = H : o.next = H, k.lastBaseUpdate = v));
    }
    if (i !== null) {
      var ee = a.baseState;
      r = 0, k = H = v = null, o = i;
      do {
        var w = o.lane & -536870913, Z = w !== o.lane;
        if (Z ? (Ee & w) === w : (l & w) === w) {
          w !== 0 && w === Fl && (xr = !0), k !== null && (k = k.next = {
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          });
          e: {
            var se = e, me = o;
            w = t;
            var Ue = n;
            switch (me.tag) {
              case 1:
                if (se = me.payload, typeof se == "function") {
                  ee = se.call(Ue, ee, w);
                  break e;
                }
                ee = se;
                break e;
              case 3:
                se.flags = se.flags & -65537 | 128;
              case 0:
                if (se = me.payload, w = typeof se == "function" ? se.call(Ue, ee, w) : se, w == null) break e;
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
          }, k === null ? (H = k = Z, v = ee) : k = k.next = Z, r |= w;
        if (o = o.next, o === null) {
          if (o = a.shared.pending, o === null)
            break;
          Z = o, o = Z.next, Z.next = null, a.lastBaseUpdate = Z, a.shared.pending = null;
        }
      } while (!0);
      k === null && (v = ee), a.baseState = v, a.firstBaseUpdate = H, a.lastBaseUpdate = k, i === null && (a.shared.lanes = 0), Gn |= r, e.lanes = r, e.memoizedState = ee;
    }
  }
  function c0(e, t) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(t);
  }
  function r0(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        c0(n[e], t);
  }
  var Pl = y(null), gi = y(0);
  function s0(e, t) {
    e = Sn, le(gi, e), le(Pl, t), Sn = e | t.baseLanes;
  }
  function jr() {
    le(gi, Sn), le(Pl, Pl.current);
  }
  function qr() {
    Sn = gi.current, J(Pl), J(gi);
  }
  var Tt = y(null), Yt = null;
  function Qn(e) {
    var t = e.alternate;
    le(Ye, Ye.current & 1), le(Tt, e), Yt === null && (t === null || Pl.current !== null || t.memoizedState !== null) && (Yt = e);
  }
  function Br(e) {
    le(Ye, Ye.current), le(Tt, e), Yt === null && (Yt = e);
  }
  function f0(e) {
    e.tag === 22 ? (le(Ye, Ye.current), le(Tt, e), Yt === null && (Yt = e)) : wn();
  }
  function wn() {
    le(Ye, Ye.current), le(Tt, Tt.current);
  }
  function At(e) {
    J(Tt), Yt === e && (Yt = null), J(Ye);
  }
  var Ye = y(0);
  function pi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Gs(n) || Vs(n)))
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
  var on = 0, ve = null, Re = null, Ze = null, Si = !1, ea = !1, pl = !1, bi = 0, Xa = 0, ta = null, Gm = 0;
  function Qe() {
    throw Error(s(321));
  }
  function Hr(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Et(e[n], t[n])) return !1;
    return !0;
  }
  function Qr(e, t, n, l, a, i) {
    return on = i, ve = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, D.H = e === null || e.memoizedState === null ? J0 : Pr, pl = !1, i = n(l, a), pl = !1, ea && (i = d0(
      t,
      n,
      l,
      a
    )), o0(e), i;
  }
  function o0(e) {
    D.H = Ja;
    var t = Re !== null && Re.next !== null;
    if (on = 0, Ze = Re = ve = null, Si = !1, Xa = 0, ta = null, t) throw Error(s(300));
    e === null || Ke || (e = e.dependencies, e !== null && fi(e) && (Ke = !0));
  }
  function d0(e, t, n, l) {
    ve = e;
    var a = 0;
    do {
      if (ea && (ta = null), Xa = 0, ea = !1, 25 <= a) throw Error(s(301));
      if (a += 1, Ze = Re = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      D.H = k0, i = t(n, l);
    } while (ea);
    return i;
  }
  function Vm() {
    var e = D.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Za(t) : t, e = e.useState()[0], (Re !== null ? Re.memoizedState : null) !== e && (ve.flags |= 1024), t;
  }
  function wr() {
    var e = bi !== 0;
    return bi = 0, e;
  }
  function Lr(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Yr(e) {
    if (Si) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Si = !1;
    }
    on = 0, Ze = Re = ve = null, ea = !1, Xa = bi = 0, ta = null;
  }
  function ft() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ze === null ? ve.memoizedState = Ze = e : Ze = Ze.next = e, Ze;
  }
  function Ge() {
    if (Re === null) {
      var e = ve.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Re.next;
    var t = Ze === null ? ve.memoizedState : Ze.next;
    if (t !== null)
      Ze = t, Re = e;
    else {
      if (e === null)
        throw ve.alternate === null ? Error(s(467)) : Error(s(310));
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
  function _i() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Za(e) {
    var t = Xa;
    return Xa += 1, ta === null && (ta = []), e = n0(ta, e, t), t = ve, (Ze === null ? t.memoizedState : Ze.next) === null && (t = t.alternate, D.H = t === null || t.memoizedState === null ? J0 : Pr), e;
  }
  function Ei(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Za(e);
      if (e.$$typeof === b) return lt(e);
    }
    throw Error(s(438, String(e)));
  }
  function Gr(e) {
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
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = _i(), ve.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = q;
    return t.index++, n;
  }
  function dn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ci(e) {
    var t = Ge();
    return Vr(t, Re, e);
  }
  function Vr(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = n;
    var a = e.baseQueue, i = l.pending;
    if (i !== null) {
      if (a !== null) {
        var r = a.next;
        a.next = i.next, i.next = r;
      }
      t.baseQueue = a = i, l.pending = null;
    }
    if (i = e.baseState, a === null) e.memoizedState = i;
    else {
      t = a.next;
      var o = r = null, v = null, H = t, k = !1;
      do {
        var ee = H.lane & -536870913;
        if (ee !== H.lane ? (Ee & ee) === ee : (on & ee) === ee) {
          var w = H.revertLane;
          if (w === 0)
            v !== null && (v = v.next = {
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
            }, v === null ? (o = v = ee, r = i) : v = v.next = ee, ve.lanes |= w, Gn |= w;
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
          }, v === null ? (o = v = w, r = i) : v = v.next = w, ve.lanes |= ee, Gn |= ee;
        H = H.next;
      } while (H !== null && H !== t);
      if (v === null ? r = i : v.next = o, !Et(i, e.memoizedState) && (Ke = !0, k && (n = Wl, n !== null)))
        throw n;
      e.memoizedState = i, e.baseState = r, e.baseQueue = v, l.lastRenderedState = i;
    }
    return a === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Xr(e) {
    var t = Ge(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch, a = n.pending, i = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var r = a = a.next;
      do
        i = e(i, r.action), r = r.next;
      while (r !== a);
      Et(i, t.memoizedState) || (Ke = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, l];
  }
  function h0(e, t, n) {
    var l = ve, a = Ge(), i = Te;
    if (i) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = t();
    var r = !Et(
      (Re || a).memoizedState,
      n
    );
    if (r && (a.memoizedState = n, Ke = !0), a = a.queue, Jr(v0.bind(null, l, a, e), [
      e
    ]), a.getSnapshot !== t || r || Ze !== null && Ze.memoizedState.tag & 1) {
      if (l.flags |= 2048, na(
        9,
        { destroy: void 0 },
        y0.bind(
          null,
          l,
          a,
          n,
          t
        ),
        null
      ), xe === null) throw Error(s(349));
      i || (on & 127) !== 0 || m0(l, t, n);
    }
    return n;
  }
  function m0(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ve.updateQueue, t === null ? (t = _i(), ve.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function y0(e, t, n, l) {
    t.value = n, t.getSnapshot = l, g0(t) && p0(e);
  }
  function v0(e, t, n) {
    return n(function() {
      g0(t) && p0(e);
    });
  }
  function g0(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Et(e, n);
    } catch {
      return !0;
    }
  }
  function p0(e) {
    var t = sl(e, 2);
    t !== null && gt(t, e, 2);
  }
  function Zr(e) {
    var t = ft();
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
  function S0(e, t, n, l) {
    return e.baseState = n, Vr(
      e,
      Re,
      typeof l == "function" ? l : dn
    );
  }
  function Xm(e, t, n, l, a) {
    if (Mi(e)) throw Error(s(485));
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
        then: function(r) {
          i.listeners.push(r);
        }
      };
      D.T !== null ? n(!0) : i.isTransition = !1, l(i), n = t.pending, n === null ? (i.next = t.pending = i, b0(t, i)) : (i.next = n.next, t.pending = n.next = i);
    }
  }
  function b0(e, t) {
    var n = t.action, l = t.payload, a = e.state;
    if (t.isTransition) {
      var i = D.T, r = {};
      D.T = r;
      try {
        var o = n(a, l), v = D.S;
        v !== null && v(r, o), _0(e, t, o);
      } catch (H) {
        Kr(e, t, H);
      } finally {
        i !== null && r.types !== null && (i.types = r.types), D.T = i;
      }
    } else
      try {
        i = n(a, l), _0(e, t, i);
      } catch (H) {
        Kr(e, t, H);
      }
  }
  function _0(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        E0(e, t, l);
      },
      function(l) {
        return Kr(e, t, l);
      }
    ) : E0(e, t, n);
  }
  function E0(e, t, n) {
    t.status = "fulfilled", t.value = n, C0(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, b0(e, n)));
  }
  function Kr(e, t, n) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = n, C0(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function C0(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function T0(e, t) {
    return t;
  }
  function A0(e, t) {
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
    return n = ft(), n.memoizedState = n.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: T0,
      lastRenderedState: t
    }, n.queue = l, n = X0.bind(
      null,
      ve,
      l
    ), l.dispatch = n, l = Zr(!1), i = Ir.bind(
      null,
      ve,
      !1,
      l.queue
    ), l = ft(), a = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = a, n = Xm.bind(
      null,
      ve,
      a,
      i,
      n
    ), a.dispatch = n, l.memoizedState = e, [t, n, !1];
  }
  function M0(e) {
    var t = Ge();
    return D0(t, Re, e);
  }
  function D0(e, t, n) {
    if (t = Vr(
      e,
      t,
      T0
    )[0], e = Ci(dn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Za(t);
      } catch (r) {
        throw r === $l ? hi : r;
      }
    else l = t;
    t = Ge();
    var a = t.queue, i = a.dispatch;
    return n !== t.memoizedState && (ve.flags |= 2048, na(
      9,
      { destroy: void 0 },
      Zm.bind(null, a, n),
      null
    )), [l, i, e];
  }
  function Zm(e, t) {
    e.action = t;
  }
  function z0(e) {
    var t = Ge(), n = Re;
    if (n !== null)
      return D0(t, n, e);
    Ge(), t = t.memoizedState, n = Ge();
    var l = n.queue.dispatch;
    return n.memoizedState = e, [t, l, !1];
  }
  function na(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = ve.updateQueue, t === null && (t = _i(), ve.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function O0() {
    return Ge().memoizedState;
  }
  function Ti(e, t, n, l) {
    var a = ft();
    ve.flags |= e, a.memoizedState = na(
      1 | t,
      { destroy: void 0 },
      n,
      l === void 0 ? null : l
    );
  }
  function Ai(e, t, n, l) {
    var a = Ge();
    l = l === void 0 ? null : l;
    var i = a.memoizedState.inst;
    Re !== null && l !== null && Hr(l, Re.memoizedState.deps) ? a.memoizedState = na(t, i, n, l) : (ve.flags |= e, a.memoizedState = na(
      1 | t,
      i,
      n,
      l
    ));
  }
  function R0(e, t) {
    Ti(8390656, 8, e, t);
  }
  function Jr(e, t) {
    Ai(2048, 8, e, t);
  }
  function Km(e) {
    ve.flags |= 4;
    var t = ve.updateQueue;
    if (t === null)
      t = _i(), ve.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function N0(e) {
    var t = Ge().memoizedState;
    return Km({ ref: t, nextImpl: e }), function() {
      if ((De & 2) !== 0) throw Error(s(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function U0(e, t) {
    return Ai(4, 2, e, t);
  }
  function x0(e, t) {
    return Ai(4, 4, e, t);
  }
  function j0(e, t) {
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
  function q0(e, t, n) {
    n = n != null ? n.concat([e]) : null, Ai(4, 4, j0.bind(null, t, e), n);
  }
  function kr() {
  }
  function B0(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && Hr(t, l[1]) ? l[0] : (n.memoizedState = [e, t], e);
  }
  function H0(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && Hr(t, l[1]))
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
  function Fr(e, t, n) {
    return n === void 0 || (on & 1073741824) !== 0 && (Ee & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Qd(), ve.lanes |= e, Gn |= e, n);
  }
  function Q0(e, t, n, l) {
    return Et(n, t) ? n : Pl.current !== null ? (e = Fr(e, n, l), Et(e, t) || (Ke = !0), e) : (on & 42) === 0 || (on & 1073741824) !== 0 && (Ee & 261930) === 0 ? (Ke = !0, e.memoizedState = n) : (e = Qd(), ve.lanes |= e, Gn |= e, t);
  }
  function w0(e, t, n, l, a) {
    var i = W.p;
    W.p = i !== 0 && 8 > i ? i : 8;
    var r = D.T, o = {};
    D.T = o, Ir(e, !1, t, n);
    try {
      var v = a(), H = D.S;
      if (H !== null && H(o, v), v !== null && typeof v == "object" && typeof v.then == "function") {
        var k = Ym(
          v,
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
      W.p = i, r !== null && o.types !== null && (r.types = o.types), D.T = r;
    }
  }
  function Jm() {
  }
  function Wr(e, t, n, l) {
    if (e.tag !== 5) throw Error(s(476));
    var a = L0(e).queue;
    w0(
      e,
      a,
      t,
      P,
      n === null ? Jm : function() {
        return Y0(e), n(l);
      }
    );
  }
  function L0(e) {
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
  function Y0(e) {
    var t = L0(e);
    t.next === null && (t = e.alternate.memoizedState), Ka(
      e,
      t.next.queue,
      {},
      zt()
    );
  }
  function $r() {
    return lt(su);
  }
  function G0() {
    return Ge().memoizedState;
  }
  function V0() {
    return Ge().memoizedState;
  }
  function km(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = zt();
          e = Bn(n);
          var l = Hn(t, e, n);
          l !== null && (gt(l, t, n), Ya(l, t, n)), t = { cache: Mr() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Fm(e, t, n) {
    var l = zt();
    n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Mi(e) ? Z0(t, n) : (n = yr(e, t, n, l), n !== null && (gt(n, e, l), K0(n, t, l)));
  }
  function X0(e, t, n) {
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
    if (Mi(e)) Z0(t, a);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var r = t.lastRenderedState, o = i(r, n);
          if (a.hasEagerState = !0, a.eagerState = o, Et(o, r))
            return ii(e, t, a, 0), xe === null && ui(), !1;
        } catch {
        }
      if (n = yr(e, t, a, l), n !== null)
        return gt(n, e, l), K0(n, t, l), !0;
    }
    return !1;
  }
  function Ir(e, t, n, l) {
    if (l = {
      lane: 2,
      revertLane: Rs(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Mi(e)) {
      if (t) throw Error(s(479));
    } else
      t = yr(
        e,
        n,
        l,
        2
      ), t !== null && gt(t, e, 2);
  }
  function Mi(e) {
    var t = e.alternate;
    return e === ve || t !== null && t === ve;
  }
  function Z0(e, t) {
    ea = Si = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function K0(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, Wf(e, n);
    }
  }
  var Ja = {
    readContext: lt,
    use: Ei,
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
  var J0 = {
    readContext: lt,
    use: Ei,
    useCallback: function(e, t) {
      return ft().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: lt,
    useEffect: R0,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, Ti(
        4194308,
        4,
        j0.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return Ti(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Ti(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = ft();
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
      var l = ft();
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
      }, l.queue = e, e = e.dispatch = Fm.bind(
        null,
        ve,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = ft();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Zr(e);
      var t = e.queue, n = X0.bind(null, ve, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: kr,
    useDeferredValue: function(e, t) {
      var n = ft();
      return Fr(n, e, t);
    },
    useTransition: function() {
      var e = Zr(!1);
      return e = w0.bind(
        null,
        ve,
        e.queue,
        !0,
        !1
      ), ft().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var l = ve, a = ft();
      if (Te) {
        if (n === void 0)
          throw Error(s(407));
        n = n();
      } else {
        if (n = t(), xe === null)
          throw Error(s(349));
        (Ee & 127) !== 0 || m0(l, t, n);
      }
      a.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return a.queue = i, R0(v0.bind(null, l, i, e), [
        e
      ]), l.flags |= 2048, na(
        9,
        { destroy: void 0 },
        y0.bind(
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
      var e = ft(), t = xe.identifierPrefix;
      if (Te) {
        var n = Pt, l = It;
        n = (l & ~(1 << 32 - _t(l) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = bi++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = Gm++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: $r,
    useFormState: A0,
    useActionState: A0,
    useOptimistic: function(e) {
      var t = ft();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = Ir.bind(
        null,
        ve,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Gr,
    useCacheRefresh: function() {
      return ft().memoizedState = km.bind(
        null,
        ve
      );
    },
    useEffectEvent: function(e) {
      var t = ft(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((De & 2) !== 0)
          throw Error(s(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Pr = {
    readContext: lt,
    use: Ei,
    useCallback: B0,
    useContext: lt,
    useEffect: Jr,
    useImperativeHandle: q0,
    useInsertionEffect: U0,
    useLayoutEffect: x0,
    useMemo: H0,
    useReducer: Ci,
    useRef: O0,
    useState: function() {
      return Ci(dn);
    },
    useDebugValue: kr,
    useDeferredValue: function(e, t) {
      var n = Ge();
      return Q0(
        n,
        Re.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ci(dn)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : Za(e),
        t
      ];
    },
    useSyncExternalStore: h0,
    useId: G0,
    useHostTransitionStatus: $r,
    useFormState: M0,
    useActionState: M0,
    useOptimistic: function(e, t) {
      var n = Ge();
      return S0(n, Re, e, t);
    },
    useMemoCache: Gr,
    useCacheRefresh: V0
  };
  Pr.useEffectEvent = N0;
  var k0 = {
    readContext: lt,
    use: Ei,
    useCallback: B0,
    useContext: lt,
    useEffect: Jr,
    useImperativeHandle: q0,
    useInsertionEffect: U0,
    useLayoutEffect: x0,
    useMemo: H0,
    useReducer: Xr,
    useRef: O0,
    useState: function() {
      return Xr(dn);
    },
    useDebugValue: kr,
    useDeferredValue: function(e, t) {
      var n = Ge();
      return Re === null ? Fr(n, e, t) : Q0(
        n,
        Re.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Xr(dn)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : Za(e),
        t
      ];
    },
    useSyncExternalStore: h0,
    useId: G0,
    useHostTransitionStatus: $r,
    useFormState: z0,
    useActionState: z0,
    useOptimistic: function(e, t) {
      var n = Ge();
      return Re !== null ? S0(n, Re, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Gr,
    useCacheRefresh: V0
  };
  k0.useEffectEvent = N0;
  function es(e, t, n, l) {
    t = e.memoizedState, n = n(l, t), n = n == null ? t : S({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ts = {
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
  function F0(e, t, n, l, a, i, r) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, i, r) : t.prototype && t.prototype.isPureReactComponent ? !xa(n, l) || !xa(a, i) : !0;
  }
  function W0(e, t, n, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && ts.enqueueReplaceState(t, t.state, null);
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
  function $0(e) {
    ai(e);
  }
  function I0(e) {
    console.error(e);
  }
  function P0(e) {
    ai(e);
  }
  function Di(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function ed(e, t, n) {
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
  function ns(e, t, n) {
    return n = Bn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Di(e, t);
    }, n;
  }
  function td(e) {
    return e = Bn(e), e.tag = 3, e;
  }
  function nd(e, t, n, l) {
    var a = n.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var i = l.value;
      e.payload = function() {
        return a(i);
      }, e.callback = function() {
        ed(t, n, l);
      };
    }
    var r = n.stateNode;
    r !== null && typeof r.componentDidCatch == "function" && (e.callback = function() {
      ed(t, n, l), typeof a != "function" && (Vn === null ? Vn = /* @__PURE__ */ new Set([this]) : Vn.add(this));
      var o = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: o !== null ? o : ""
      });
    });
  }
  function Wm(e, t, n, l, a) {
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
            return Yt === null ? wi() : n.alternate === null && we === 0 && (we = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, l === mi ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), Ds(e, l, a)), !1;
          case 22:
            return n.flags |= 65536, l === mi ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), Ds(e, l, a)), !1;
        }
        throw Error(s(435, n.tag));
      }
      return Ds(e, l, a), wi(), !1;
    }
    if (Te)
      return t = Tt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, l !== _r && (e = Error(s(422), { cause: l }), Ba(Ht(e, n)))) : (l !== _r && (t = Error(s(423), {
        cause: l
      }), Ba(
        Ht(t, n)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, l = Ht(l, n), a = ns(
        e.stateNode,
        l,
        a
      ), Ur(e, a), we !== 4 && (we = 2)), !1;
    var i = Error(s(520), { cause: l });
    if (i = Ht(i, n), tu === null ? tu = [i] : tu.push(i), we !== 4 && (we = 2), t === null) return !0;
    l = Ht(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = a & -a, n.lanes |= e, e = ns(n.stateNode, l, e), Ur(n, e), !1;
        case 1:
          if (t = n.type, i = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Vn === null || !Vn.has(i))))
            return n.flags |= 65536, a &= -a, n.lanes |= a, a = td(a), nd(
              a,
              e,
              n,
              l
            ), Ur(n, a), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var ls = Error(s(461)), Ke = !1;
  function at(e, t, n, l) {
    t.child = e === null ? i0(t, null, n, l) : gl(
      t,
      e.child,
      n,
      l
    );
  }
  function ld(e, t, n, l, a) {
    n = n.render;
    var i = t.ref;
    if ("ref" in l) {
      var r = {};
      for (var o in l)
        o !== "ref" && (r[o] = l[o]);
    } else r = l;
    return hl(t), l = Qr(
      e,
      t,
      n,
      r,
      i,
      a
    ), o = wr(), e !== null && !Ke ? (Lr(e, t, a), hn(e, t, a)) : (Te && o && Sr(t), t.flags |= 1, at(e, t, l, a), t.child);
  }
  function ad(e, t, n, l, a) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !vr(i) && i.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = i, ud(
        e,
        t,
        i,
        l,
        a
      )) : (e = ri(
        n.type,
        null,
        l,
        t,
        t.mode,
        a
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !os(e, a)) {
      var r = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : xa, n(r, l) && e.ref === t.ref)
        return hn(e, t, a);
    }
    return t.flags |= 1, e = cn(i, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ud(e, t, n, l, a) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (xa(i, l) && e.ref === t.ref)
        if (Ke = !1, t.pendingProps = l = i, os(e, a))
          (e.flags & 131072) !== 0 && (Ke = !0);
        else
          return t.lanes = e.lanes, hn(e, t, a);
    }
    return as(
      e,
      t,
      n,
      l,
      a
    );
  }
  function id(e, t, n, l) {
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
        return cd(
          e,
          t,
          i,
          n,
          l
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && di(
          t,
          i !== null ? i.cachePool : null
        ), i !== null ? s0(t, i) : jr(), f0(t);
      else
        return l = t.lanes = 536870912, cd(
          e,
          t,
          i !== null ? i.baseLanes | n : n,
          n,
          l
        );
    } else
      i !== null ? (di(t, i.cachePool), s0(t, i), wn(), t.memoizedState = null) : (e !== null && di(t, null), jr(), wn());
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
  function cd(e, t, n, l, a) {
    var i = zr();
    return i = i === null ? null : { parent: Xe._currentValue, pool: i }, t.memoizedState = {
      baseLanes: n,
      cachePool: i
    }, e !== null && di(t, null), jr(), f0(t), e !== null && kl(e, t, l, !0), t.childLanes = a, null;
  }
  function zi(e, t) {
    return t = Ri(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function rd(e, t, n) {
    return gl(t, e.child, null, n), e = zi(t, t.pendingProps), e.flags |= 2, At(t), t.memoizedState = null, e;
  }
  function $m(e, t, n) {
    var l = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Te) {
        if (l.mode === "hidden")
          return e = zi(t, l), t.lanes = 536870912, ka(null, e);
        if (Br(t), (e = je) ? (e = b2(
          e,
          Lt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Nn !== null ? { id: It, overflow: Pt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Zo(e), n.return = t, t.child = n, nt = t, je = null)) : e = null, e === null) throw xn(t);
        return t.lanes = 536870912, null;
      }
      return zi(t, l);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var r = i.dehydrated;
      if (Br(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = rd(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(s(558));
      else if (Ke || kl(e, t, n, !1), a = (n & e.childLanes) !== 0, Ke || a) {
        if (l = xe, l !== null && (r = $f(l, n), r !== 0 && r !== i.retryLane))
          throw i.retryLane = r, sl(e, r), gt(l, e, r), ls;
        wi(), t = rd(
          e,
          t,
          n
        );
      } else
        e = i.treeContext, je = Gt(r.nextSibling), nt = t, Te = !0, Un = null, Lt = !1, e !== null && ko(t, e), t = zi(t, l), t.flags |= 4096;
      return t;
    }
    return e = cn(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Oi(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(s(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function as(e, t, n, l, a) {
    return hl(t), n = Qr(
      e,
      t,
      n,
      l,
      void 0,
      a
    ), l = wr(), e !== null && !Ke ? (Lr(e, t, a), hn(e, t, a)) : (Te && l && Sr(t), t.flags |= 1, at(e, t, n, a), t.child);
  }
  function sd(e, t, n, l, a, i) {
    return hl(t), t.updateQueue = null, n = d0(
      t,
      l,
      n,
      a
    ), o0(e), l = wr(), e !== null && !Ke ? (Lr(e, t, i), hn(e, t, i)) : (Te && l && Sr(t), t.flags |= 1, at(e, t, n, i), t.child);
  }
  function fd(e, t, n, l, a) {
    if (hl(t), t.stateNode === null) {
      var i = Xl, r = n.contextType;
      typeof r == "object" && r !== null && (i = lt(r)), i = new n(l, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = ts, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = l, i.state = t.memoizedState, i.refs = {}, Rr(t), r = n.contextType, i.context = typeof r == "object" && r !== null ? lt(r) : Xl, i.state = t.memoizedState, r = n.getDerivedStateFromProps, typeof r == "function" && (es(
        t,
        n,
        r,
        l
      ), i.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (r = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), r !== i.state && ts.enqueueReplaceState(i, i.state, null), Va(t, l, i, a), Ga(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      i = t.stateNode;
      var o = t.memoizedProps, v = Sl(n, o);
      i.props = v;
      var H = i.context, k = n.contextType;
      r = Xl, typeof k == "object" && k !== null && (r = lt(k));
      var ee = n.getDerivedStateFromProps;
      k = typeof ee == "function" || typeof i.getSnapshotBeforeUpdate == "function", o = t.pendingProps !== o, k || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o || H !== r) && W0(
        t,
        i,
        l,
        r
      ), qn = !1;
      var w = t.memoizedState;
      i.state = w, Va(t, l, i, a), Ga(), H = t.memoizedState, o || w !== H || qn ? (typeof ee == "function" && (es(
        t,
        n,
        ee,
        l
      ), H = t.memoizedState), (v = qn || F0(
        t,
        n,
        v,
        l,
        w,
        H,
        r
      )) ? (k || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = H), i.props = l, i.state = H, i.context = r, l = v) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      i = t.stateNode, Nr(e, t), r = t.memoizedProps, k = Sl(n, r), i.props = k, ee = t.pendingProps, w = i.context, H = n.contextType, v = Xl, typeof H == "object" && H !== null && (v = lt(H)), o = n.getDerivedStateFromProps, (H = typeof o == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (r !== ee || w !== v) && W0(
        t,
        i,
        l,
        v
      ), qn = !1, w = t.memoizedState, i.state = w, Va(t, l, i, a), Ga();
      var Z = t.memoizedState;
      r !== ee || w !== Z || qn || e !== null && e.dependencies !== null && fi(e.dependencies) ? (typeof o == "function" && (es(
        t,
        n,
        o,
        l
      ), Z = t.memoizedState), (k = qn || F0(
        t,
        n,
        k,
        l,
        w,
        Z,
        v
      ) || e !== null && e.dependencies !== null && fi(e.dependencies)) ? (H || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(l, Z, v), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        l,
        Z,
        v
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || r === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || r === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = Z), i.props = l, i.state = Z, i.context = v, l = k) : (typeof i.componentDidUpdate != "function" || r === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || r === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return i = l, Oi(e, t), l = (t.flags & 128) !== 0, i || l ? (i = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && l ? (t.child = gl(
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
  function od(e, t, n, l) {
    return ol(), t.flags |= 256, at(e, t, n, l), t.child;
  }
  var us = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function is(e) {
    return { baseLanes: e, cachePool: e0() };
  }
  function cs(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Dt), e;
  }
  function dd(e, t, n) {
    var l = t.pendingProps, a = !1, i = (t.flags & 128) !== 0, r;
    if ((r = i) || (r = e !== null && e.memoizedState === null ? !1 : (Ye.current & 2) !== 0), r && (a = !0, t.flags &= -129), r = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Te) {
        if (a ? Qn(t) : wn(), (e = je) ? (e = b2(
          e,
          Lt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Nn !== null ? { id: It, overflow: Pt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Zo(e), n.return = t, t.child = n, nt = t, je = null)) : e = null, e === null) throw xn(t);
        return Vs(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var o = l.children;
      return l = l.fallback, a ? (wn(), a = t.mode, o = Ri(
        { mode: "hidden", children: o },
        a
      ), l = fl(
        l,
        a,
        n,
        null
      ), o.return = t, l.return = t, o.sibling = l, t.child = o, l = t.child, l.memoizedState = is(n), l.childLanes = cs(
        e,
        r,
        n
      ), t.memoizedState = us, ka(null, l)) : (Qn(t), rs(t, o));
    }
    var v = e.memoizedState;
    if (v !== null && (o = v.dehydrated, o !== null)) {
      if (i)
        t.flags & 256 ? (Qn(t), t.flags &= -257, t = ss(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (wn(), t.child = e.child, t.flags |= 128, t = null) : (wn(), o = l.fallback, a = t.mode, l = Ri(
          { mode: "visible", children: l.children },
          a
        ), o = fl(
          o,
          a,
          n,
          null
        ), o.flags |= 2, l.return = t, o.return = t, l.sibling = o, t.child = l, gl(
          t,
          e.child,
          null,
          n
        ), l = t.child, l.memoizedState = is(n), l.childLanes = cs(
          e,
          r,
          n
        ), t.memoizedState = us, t = ka(null, l));
      else if (Qn(t), Vs(o)) {
        if (r = o.nextSibling && o.nextSibling.dataset, r) var H = r.dgst;
        r = H, l = Error(s(419)), l.stack = "", l.digest = r, Ba({ value: l, source: null, stack: null }), t = ss(
          e,
          t,
          n
        );
      } else if (Ke || kl(e, t, n, !1), r = (n & e.childLanes) !== 0, Ke || r) {
        if (r = xe, r !== null && (l = $f(r, n), l !== 0 && l !== v.retryLane))
          throw v.retryLane = l, sl(e, l), gt(r, e, l), ls;
        Gs(o) || wi(), t = ss(
          e,
          t,
          n
        );
      } else
        Gs(o) ? (t.flags |= 192, t.child = e.child, t = null) : (e = v.treeContext, je = Gt(
          o.nextSibling
        ), nt = t, Te = !0, Un = null, Lt = !1, e !== null && ko(t, e), t = rs(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (wn(), o = l.fallback, a = t.mode, v = e.child, H = v.sibling, l = cn(v, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = v.subtreeFlags & 65011712, H !== null ? o = cn(
      H,
      o
    ) : (o = fl(
      o,
      a,
      n,
      null
    ), o.flags |= 2), o.return = t, l.return = t, l.sibling = o, t.child = l, ka(null, l), l = t.child, o = e.child.memoizedState, o === null ? o = is(n) : (a = o.cachePool, a !== null ? (v = Xe._currentValue, a = a.parent !== v ? { parent: v, pool: v } : a) : a = e0(), o = {
      baseLanes: o.baseLanes | n,
      cachePool: a
    }), l.memoizedState = o, l.childLanes = cs(
      e,
      r,
      n
    ), t.memoizedState = us, ka(e.child, l)) : (Qn(t), n = e.child, e = n.sibling, n = cn(n, {
      mode: "visible",
      children: l.children
    }), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function rs(e, t) {
    return t = Ri(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Ri(e, t) {
    return e = Ct(22, e, null, t), e.lanes = 0, e;
  }
  function ss(e, t, n) {
    return gl(t, e.child, null, n), e = rs(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function hd(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Tr(e.return, t, n);
  }
  function fs(e, t, n, l, a, i) {
    var r = e.memoizedState;
    r === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: n,
      tailMode: a,
      treeForkCount: i
    } : (r.isBackwards = t, r.rendering = null, r.renderingStartTime = 0, r.last = l, r.tail = n, r.tailMode = a, r.treeForkCount = i);
  }
  function md(e, t, n) {
    var l = t.pendingProps, a = l.revealOrder, i = l.tail;
    l = l.children;
    var r = Ye.current, o = (r & 2) !== 0;
    if (o ? (r = r & 1 | 2, t.flags |= 128) : r &= 1, le(Ye, r), at(e, t, l, n), l = Te ? qa : 0, !o && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && hd(e, n, t);
        else if (e.tag === 19)
          hd(e, n, t);
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
          e = n.alternate, e !== null && pi(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), fs(
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
          if (e = a.alternate, e !== null && pi(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        fs(
          t,
          !0,
          n,
          null,
          i,
          l
        );
        break;
      case "together":
        fs(
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
      throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = cn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = cn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function os(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && fi(e)));
  }
  function Im(e, t, n) {
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
          return t.flags |= 128, Br(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Qn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? dd(e, t, n) : (Qn(t), e = hn(
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
            return md(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), le(Ye, Ye.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, id(
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
  function yd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ke = !0;
      else {
        if (!os(e, n) && (t.flags & 128) === 0)
          return Ke = !1, Im(
            e,
            t,
            n
          );
        Ke = (e.flags & 131072) !== 0;
      }
    else
      Ke = !1, Te && (t.flags & 1048576) !== 0 && Jo(t, qa, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = yl(t.elementType), t.type = e, typeof e == "function")
            vr(e) ? (l = Sl(e, l), t.tag = 1, t = fd(
              null,
              t,
              e,
              l,
              n
            )) : (t.tag = 0, t = as(
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
                t.tag = 11, t = ld(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              } else if (a === R) {
                t.tag = 14, t = ad(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              }
            }
            throw t = $(e) || e, Error(s(306, t, ""));
          }
        }
        return t;
      case 0:
        return as(
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
        ), fd(
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
          ), e === null) throw Error(s(387));
          l = t.pendingProps;
          var i = t.memoizedState;
          a = i.element, Nr(e, t), Va(t, l, null, n);
          var r = t.memoizedState;
          if (l = r.cache, jn(t, Xe, l), l !== i.cache && Ar(
            t,
            [Xe],
            n,
            !0
          ), Ga(), l = r.element, i.isDehydrated)
            if (i = {
              element: l,
              isDehydrated: !1,
              cache: r.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = od(
                e,
                t,
                l,
                n
              );
              break e;
            } else if (l !== a) {
              a = Ht(
                Error(s(424)),
                t
              ), Ba(a), t = od(
                e,
                t,
                l,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, je = Gt(e.firstChild), nt = t, Te = !0, Un = null, Lt = !0, n = i0(
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
        return Oi(e, t), e === null ? (n = M2(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Te || (n = t.type, e = t.pendingProps, l = Ki(
          fe.current
        ).createElement(n), l[tt] = t, l[ot] = e, ut(l, n, e), Fe(l), t.stateNode = l) : t.memoizedState = M2(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return pe(t), e === null && Te && (l = t.stateNode = C2(
          t.type,
          t.pendingProps,
          fe.current
        ), nt = t, Lt = !0, a = je, Jn(t.type) ? (Xs = a, je = Gt(l.firstChild)) : je = a), at(
          e,
          t,
          t.pendingProps.children,
          n
        ), Oi(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Te && ((a = l = je) && (l = zy(
          l,
          t.type,
          t.pendingProps,
          Lt
        ), l !== null ? (t.stateNode = l, nt = t, je = Gt(l.firstChild), Lt = !1, a = !0) : a = !1), a || xn(t)), pe(t), a = t.type, i = t.pendingProps, r = e !== null ? e.memoizedProps : null, l = i.children, ws(a, i) ? l = null : r !== null && ws(a, r) && (t.flags |= 32), t.memoizedState !== null && (a = Qr(
          e,
          t,
          Vm,
          null,
          null,
          n
        ), su._currentValue = a), Oi(e, t), at(e, t, l, n), t.child;
      case 6:
        return e === null && Te && ((e = n = je) && (n = Oy(
          n,
          t.pendingProps,
          Lt
        ), n !== null ? (t.stateNode = n, nt = t, je = null, e = !0) : e = !1), e || xn(t)), null;
      case 13:
        return dd(e, t, n);
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
        return ld(
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
        return ad(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return ud(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return md(e, t, n);
      case 31:
        return $m(e, t, n);
      case 22:
        return id(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return hl(t), l = lt(Xe), e === null ? (a = zr(), a === null && (a = xe, i = Mr(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= n), a = i), t.memoizedState = { parent: l, cache: a }, Rr(t), jn(t, Xe, a)) : ((e.lanes & n) !== 0 && (Nr(e, t), Va(t, null, null, n), Ga()), a = e.memoizedState, i = t.memoizedState, a.parent !== l ? (a = { parent: l, cache: l }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), jn(t, Xe, l)) : (l = i.cache, jn(t, Xe, l), l !== a.cache && Ar(
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
    throw Error(s(156, t.tag));
  }
  function mn(e) {
    e.flags |= 4;
  }
  function ds(e, t, n, l, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Gd()) e.flags |= 8192;
        else
          throw vl = mi, Or;
    } else e.flags &= -16777217;
  }
  function vd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !N2(t))
      if (Gd()) e.flags |= 8192;
      else
        throw vl = mi, Or;
  }
  function Ni(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? kf() : 536870912, e.lanes |= t, ia |= t);
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
  function Pm(e, t, n) {
    var l = t.pendingProps;
    switch (br(t), t.tag) {
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
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), fn(Xe), de(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Jl(t) ? mn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Er())), qe(t), null;
      case 26:
        var a = t.type, i = t.memoizedState;
        return e === null ? (mn(t), i !== null ? (qe(t), vd(t, i)) : (qe(t), ds(
          t,
          a,
          null,
          l,
          n
        ))) : i ? i !== e.memoizedState ? (mn(t), qe(t), vd(t, i)) : (qe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && mn(t), qe(t), ds(
          t,
          a,
          e,
          l,
          n
        )), null;
      case 27:
        if (st(t), n = fe.current, a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && mn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(s(166));
            return qe(t), null;
          }
          e = ne.current, Jl(t) ? Fo(t) : (e = C2(a, l, n), t.stateNode = e, mn(t));
        }
        return qe(t), null;
      case 5:
        if (st(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && mn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(s(166));
            return qe(t), null;
          }
          if (i = ne.current, Jl(t))
            Fo(t);
          else {
            var r = Ki(
              fe.current
            );
            switch (i) {
              case 1:
                i = r.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                i = r.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    i = r.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    i = r.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    i = r.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof l.is == "string" ? r.createElement("select", {
                      is: l.is
                    }) : r.createElement("select"), l.multiple ? i.multiple = !0 : l.size && (i.size = l.size);
                    break;
                  default:
                    i = typeof l.is == "string" ? r.createElement(a, { is: l.is }) : r.createElement(a);
                }
            }
            i[tt] = t, i[ot] = l;
            e: for (r = t.child; r !== null; ) {
              if (r.tag === 5 || r.tag === 6)
                i.appendChild(r.stateNode);
              else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                r.child.return = r, r = r.child;
                continue;
              }
              if (r === t) break e;
              for (; r.sibling === null; ) {
                if (r.return === null || r.return === t)
                  break e;
                r = r.return;
              }
              r.sibling.return = r.return, r = r.sibling;
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
        return qe(t), ds(
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
            throw Error(s(166));
          if (e = fe.current, Jl(t)) {
            if (e = t.stateNode, n = t.memoizedProps, l = null, a = nt, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  l = a.memoizedProps;
              }
            e[tt] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || d2(e.nodeValue, n)), e || xn(t, !0);
          } else
            e = Ki(e).createTextNode(
              l
            ), e[tt] = t, t.stateNode = e;
        }
        return qe(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Jl(t), n !== null) {
            if (e === null) {
              if (!l) throw Error(s(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(557));
              e[tt] = t;
            } else
              ol(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            qe(t), e = !1;
          } else
            n = Er(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (At(t), t) : (At(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(s(558));
        }
        return qe(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = Jl(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(s(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(s(317));
              a[tt] = t;
            } else
              ol(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            qe(t), a = !1;
          } else
            a = Er(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (At(t), t) : (At(t), null);
        }
        return At(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = l !== null, e = e !== null && e.memoizedState !== null, n && (l = t.child, a = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (a = l.alternate.memoizedState.cachePool.pool), i = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (i = l.memoizedState.cachePool.pool), i !== a && (l.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Ni(t, t.updateQueue), qe(t), null);
      case 4:
        return de(), e === null && js(t.stateNode.containerInfo), qe(t), null;
      case 10:
        return fn(t.type), qe(t), null;
      case 19:
        if (J(Ye), l = t.memoizedState, l === null) return qe(t), null;
        if (a = (t.flags & 128) !== 0, i = l.rendering, i === null)
          if (a) Fa(l, !1);
          else {
            if (we !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = pi(e), i !== null) {
                  for (t.flags |= 128, Fa(l, !1), e = i.updateQueue, t.updateQueue = e, Ni(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Xo(n, e), n = n.sibling;
                  return le(
                    Ye,
                    Ye.current & 1 | 2
                  ), Te && rn(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && St() > Bi && (t.flags |= 128, a = !0, Fa(l, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = pi(i), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, Ni(t, e), Fa(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !Te)
                return qe(t), null;
            } else
              2 * St() - l.renderingStartTime > Bi && n !== 536870912 && (t.flags |= 128, a = !0, Fa(l, !1), t.lanes = 4194304);
          l.isBackwards ? (i.sibling = t.child, t.child = i) : (e = l.last, e !== null ? e.sibling = i : t.child = i, l.last = i);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = St(), e.sibling = null, n = Ye.current, le(
          Ye,
          a ? n & 1 | 2 : n & 1
        ), Te && rn(t, l.treeForkCount), e) : (qe(t), null);
      case 22:
      case 23:
        return At(t), qr(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : qe(t), n = t.updateQueue, n !== null && Ni(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && J(ml), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), fn(Xe), qe(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function ey(e, t) {
    switch (br(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return fn(Xe), de(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return st(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (At(t), t.alternate === null)
            throw Error(s(340));
          ol();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (At(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(s(340));
          ol();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return J(Ye), null;
      case 4:
        return de(), null;
      case 10:
        return fn(t.type), null;
      case 22:
      case 23:
        return At(t), qr(), e !== null && J(ml), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return fn(Xe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function gd(e, t) {
    switch (br(t), t.tag) {
      case 3:
        fn(Xe), de();
        break;
      case 26:
      case 27:
      case 5:
        st(t);
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
        J(Ye);
        break;
      case 10:
        fn(t.type);
        break;
      case 22:
      case 23:
        At(t), qr(), e !== null && J(ml);
        break;
      case 24:
        fn(Xe);
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
            var i = n.create, r = n.inst;
            l = i(), r.destroy = l;
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
            var r = l.inst, o = r.destroy;
            if (o !== void 0) {
              r.destroy = void 0, a = t;
              var v = n, H = o;
              try {
                H();
              } catch (k) {
                Oe(
                  a,
                  v,
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
  function pd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        r0(t, n);
      } catch (l) {
        Oe(e, e.return, l);
      }
    }
  }
  function Sd(e, t, n) {
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
  function bd(e) {
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
  function hs(e, t, n) {
    try {
      var l = e.stateNode;
      Ey(l, e.type, n, t), l[ot] = t;
    } catch (a) {
      Oe(e, e.return, a);
    }
  }
  function _d(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Jn(e.type) || e.tag === 4;
  }
  function ms(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || _d(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Jn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ys(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = an));
    else if (l !== 4 && (l === 27 && Jn(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (ys(e, t, n), e = e.sibling; e !== null; )
        ys(e, t, n), e = e.sibling;
  }
  function Ui(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && (l === 27 && Jn(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (Ui(e, t, n), e = e.sibling; e !== null; )
        Ui(e, t, n), e = e.sibling;
  }
  function Ed(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      ut(t, l, n), t[tt] = e, t[ot] = n;
    } catch (i) {
      Oe(e, e.return, i);
    }
  }
  var yn = !1, Je = !1, vs = !1, Cd = typeof WeakSet == "function" ? WeakSet : Set, We = null;
  function ty(e, t) {
    if (e = e.containerInfo, Hs = Pi, e = qo(e), sr(e)) {
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
            var r = 0, o = -1, v = -1, H = 0, k = 0, ee = e, w = null;
            t: for (; ; ) {
              for (var Z; ee !== n || a !== 0 && ee.nodeType !== 3 || (o = r + a), ee !== i || l !== 0 && ee.nodeType !== 3 || (v = r + l), ee.nodeType === 3 && (r += ee.nodeValue.length), (Z = ee.firstChild) !== null; )
                w = ee, ee = Z;
              for (; ; ) {
                if (ee === e) break t;
                if (w === n && ++H === a && (o = r), w === i && ++k === l && (v = r), (Z = ee.nextSibling) !== null) break;
                ee = w, w = ee.parentNode;
              }
              ee = Z;
            }
            n = o === -1 || v === -1 ? null : { start: o, end: v };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Qs = { focusedElem: e, selectionRange: n }, Pi = !1, We = t; We !== null; )
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
                  var se = Sl(
                    n.type,
                    a
                  );
                  e = l.getSnapshotBeforeUpdate(
                    se,
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
                  Ys(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ys(e);
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
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, We = e;
            break;
          }
          We = t.return;
        }
  }
  function Td(e, t, n) {
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
            } catch (r) {
              Oe(n, n.return, r);
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
            } catch (r) {
              Oe(
                n,
                n.return,
                r
              );
            }
          }
        l & 64 && pd(n), l & 512 && $a(n, n.return);
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
            r0(e, t);
          } catch (r) {
            Oe(n, n.return, r);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Ed(n);
      case 26:
      case 5:
        gn(e, n), t === null && l & 4 && bd(n), l & 512 && $a(n, n.return);
        break;
      case 12:
        gn(e, n);
        break;
      case 31:
        gn(e, n), l & 4 && Dd(e, n);
        break;
      case 13:
        gn(e, n), l & 4 && zd(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = fy.bind(
          null,
          n
        ), Ry(e, n))));
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
  function Ad(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ad(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Kc(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Be = null, ht = !1;
  function vn(e, t, n) {
    for (n = n.child; n !== null; )
      Md(e, t, n), n = n.sibling;
  }
  function Md(e, t, n) {
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
        Be !== null && (ht ? (e = Be, p2(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), ma(e)) : p2(Be, n.stateNode));
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
        Je || (en(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && Sd(
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
  function Dd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        ma(e);
      } catch (n) {
        Oe(t, t.return, n);
      }
    }
  }
  function zd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        ma(e);
      } catch (n) {
        Oe(t, t.return, n);
      }
  }
  function ny(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Cd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Cd()), t;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function xi(e, t) {
    var n = ny(e);
    t.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var a = oy.bind(null, e, l);
        l.then(a, a);
      }
    });
  }
  function mt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var a = n[l], i = e, r = t, o = r;
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
        if (Be === null) throw Error(s(160));
        Md(i, r, a), Be = null, ht = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Od(t, e), t = t.sibling;
  }
  var Jt = null;
  function Od(e, t) {
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
                      var r = O2(
                        "link",
                        "href",
                        a
                      ).get(l + (n.href || ""));
                      if (r) {
                        for (var o = 0; o < r.length; o++)
                          if (i = r[o], i.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && i.getAttribute("rel") === (n.rel == null ? null : n.rel) && i.getAttribute("title") === (n.title == null ? null : n.title) && i.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            r.splice(o, 1);
                            break t;
                          }
                      }
                      i = a.createElement(l), ut(i, l, n), a.head.appendChild(i);
                      break;
                    case "meta":
                      if (r = O2(
                        "meta",
                        "content",
                        a
                      ).get(l + (n.content || ""))) {
                        for (o = 0; o < r.length; o++)
                          if (i = r[o], i.getAttribute("content") === (n.content == null ? null : "" + n.content) && i.getAttribute("name") === (n.name == null ? null : n.name) && i.getAttribute("property") === (n.property == null ? null : n.property) && i.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && i.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            r.splice(o, 1);
                            break t;
                          }
                      }
                      i = a.createElement(l), ut(i, l, n), a.head.appendChild(i);
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  i[tt] = e, Fe(i), l = i;
                }
                e.stateNode = l;
              } else
                R2(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = z2(
                a,
                l,
                e.memoizedProps
              );
          else
            i !== l ? (i === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : i.count--, l === null ? R2(
              a,
              e.type,
              e.stateNode
            ) : z2(
              a,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && hs(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        mt(t, e), yt(e), l & 512 && (Je || n === null || en(n, n.return)), n !== null && l & 4 && hs(
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
          } catch (se) {
            Oe(e, e.return, se);
          }
        }
        l & 4 && e.stateNode != null && (a = e.memoizedProps, hs(
          e,
          a,
          n !== null ? n.memoizedProps : a
        )), l & 1024 && (vs = !0);
        break;
      case 6:
        if (mt(t, e), yt(e), l & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          l = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = l;
          } catch (se) {
            Oe(e, e.return, se);
          }
        }
        break;
      case 3:
        if (Fi = null, a = Jt, Jt = Ji(t.containerInfo), mt(t, e), Jt = a, yt(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            ma(t.containerInfo);
          } catch (se) {
            Oe(e, e.return, se);
          }
        vs && (vs = !1, Rd(e));
        break;
      case 4:
        l = Jt, Jt = Ji(
          e.stateNode.containerInfo
        ), mt(t, e), yt(e), Jt = l;
        break;
      case 12:
        mt(t, e), yt(e);
        break;
      case 31:
        mt(t, e), yt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, xi(e, l)));
        break;
      case 13:
        mt(t, e), yt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (qi = St()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, xi(e, l)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var v = n !== null && n.memoizedState !== null, H = yn, k = Je;
        if (yn = H || a, Je = k || v, mt(t, e), Je = k, yn = H, yt(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (n === null || v || yn || Je || bl(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                v = n = t;
                try {
                  if (i = v.stateNode, a)
                    r = i.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
                  else {
                    o = v.stateNode;
                    var ee = v.memoizedProps.style, w = ee != null && ee.hasOwnProperty("display") ? ee.display : null;
                    o.style.display = w == null || typeof w == "boolean" ? "" : ("" + w).trim();
                  }
                } catch (se) {
                  Oe(v, v.return, se);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                v = t;
                try {
                  v.stateNode.nodeValue = a ? "" : v.memoizedProps;
                } catch (se) {
                  Oe(v, v.return, se);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                v = t;
                try {
                  var Z = v.stateNode;
                  a ? S2(Z, !0) : S2(v.stateNode, !1);
                } catch (se) {
                  Oe(v, v.return, se);
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
        l & 4 && (l = e.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, xi(e, n))));
        break;
      case 19:
        mt(t, e), yt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, xi(e, l)));
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
          if (_d(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(s(160));
        switch (n.tag) {
          case 27:
            var a = n.stateNode, i = ms(e);
            Ui(e, i, a);
            break;
          case 5:
            var r = n.stateNode;
            n.flags & 32 && (Hl(r, ""), n.flags &= -33);
            var o = ms(e);
            Ui(e, o, r);
            break;
          case 3:
          case 4:
            var v = n.stateNode.containerInfo, H = ms(e);
            ys(
              e,
              H,
              v
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (k) {
        Oe(e, e.return, k);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Rd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Rd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function gn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Td(e, t.alternate, t), t = t.sibling;
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
          typeof n.componentWillUnmount == "function" && Sd(
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
      var l = t.alternate, a = e, i = t, r = i.flags;
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
              var v = a.shared.hiddenCallbacks;
              if (v !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < v.length; a++)
                  c0(v[a], o);
            } catch (H) {
              Oe(l, l.return, H);
            }
          }
          n && r & 64 && pd(i), $a(i, i.return);
          break;
        case 27:
          Ed(i);
        case 26:
        case 5:
          pn(
            a,
            i,
            n
          ), n && l === null && r & 4 && bd(i), $a(i, i.return);
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
          ), n && r & 4 && Dd(a, i);
          break;
        case 13:
          pn(
            a,
            i,
            n
          ), n && r & 4 && zd(a, i);
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
  function gs(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Ha(n));
  }
  function ps(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ha(e));
  }
  function kt(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Nd(
          e,
          t,
          n,
          l
        ), t = t.sibling;
  }
  function Nd(e, t, n, l) {
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
            var i = t.memoizedProps, r = i.id, o = i.onPostCommit;
            typeof o == "function" && o(
              r,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (v) {
            Oe(t, t.return, v);
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
        i = t.stateNode, r = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? kt(
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
        )), a & 2048 && gs(r, t);
        break;
      case 24:
        kt(
          e,
          t,
          n,
          l
        ), a & 2048 && ps(t.alternate, t);
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
      var i = e, r = t, o = n, v = l, H = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          la(
            i,
            r,
            o,
            v,
            a
          ), Wa(8, r);
          break;
        case 23:
          break;
        case 22:
          var k = r.stateNode;
          r.memoizedState !== null ? k._visibility & 2 ? la(
            i,
            r,
            o,
            v,
            a
          ) : Ia(
            i,
            r
          ) : (k._visibility |= 2, la(
            i,
            r,
            o,
            v,
            a
          )), a && H & 2048 && gs(
            r.alternate,
            r
          );
          break;
        case 24:
          la(
            i,
            r,
            o,
            v,
            a
          ), a && H & 2048 && ps(r.alternate, r);
          break;
        default:
          la(
            i,
            r,
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
            Ia(n, l), a & 2048 && gs(
              l.alternate,
              l
            );
            break;
          case 24:
            Ia(n, l), a & 2048 && ps(l.alternate, l);
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
        Ud(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function Ud(e, t, n) {
    switch (e.tag) {
      case 26:
        aa(
          e,
          t,
          n
        ), e.flags & Pa && e.memoizedState !== null && Gy(
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
        Jt = Ji(e.stateNode.containerInfo), aa(
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
  function xd(e) {
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
          We = l, qd(
            l,
            e
          );
        }
      xd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        jd(e), e = e.sibling;
  }
  function jd(e) {
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
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, ji(e)) : eu(e);
        break;
      default:
        eu(e);
    }
  }
  function ji(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          We = l, qd(
            l,
            e
          );
        }
      xd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Ln(8, t, t.return), ji(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, ji(t));
          break;
        default:
          ji(t);
      }
      e = e.sibling;
    }
  }
  function qd(e, t) {
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
          if (Ad(l), l === n) {
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
  var ly = {
    getCacheForType: function(e) {
      var t = lt(Xe), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return lt(Xe).controller.signal;
    }
  }, ay = typeof WeakMap == "function" ? WeakMap : Map, De = 0, xe = null, be = null, Ee = 0, ze = 0, Mt = null, Yn = !1, ua = !1, Ss = !1, Sn = 0, we = 0, Gn = 0, _l = 0, bs = 0, Dt = 0, ia = 0, tu = null, vt = null, _s = !1, qi = 0, Bd = 0, Bi = 1 / 0, Hi = null, Vn = null, ke = 0, Xn = null, ca = null, bn = 0, Es = 0, Cs = null, Hd = null, nu = 0, Ts = null;
  function zt() {
    return (De & 2) !== 0 && Ee !== 0 ? Ee & -Ee : D.T !== null ? Rs() : If();
  }
  function Qd() {
    if (Dt === 0)
      if ((Ee & 536870912) === 0 || Te) {
        var e = Zu;
        Zu <<= 1, (Zu & 3932160) === 0 && (Zu = 262144), Dt = e;
      } else Dt = 536870912;
    return e = Tt.current, e !== null && (e.flags |= 32), Dt;
  }
  function gt(e, t, n) {
    (e === xe && (ze === 2 || ze === 9) || e.cancelPendingCommit !== null) && (ra(e, 0), Zn(
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
  function wd(e, t, n) {
    if ((De & 6) !== 0) throw Error(s(327));
    var l = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ea(e, t), a = l ? cy(e, t) : Ms(e, t, !0), i = l;
    do {
      if (a === 0) {
        ua && !l && Zn(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, i && !uy(n)) {
          a = Ms(e, t, !1), i = !1;
          continue;
        }
        if (a === 2) {
          if (i = t, e.errorRecoveryDisabledLanes & i)
            var r = 0;
          else
            r = e.pendingLanes & -536870913, r = r !== 0 ? r : r & 536870912 ? 536870912 : 0;
          if (r !== 0) {
            t = r;
            e: {
              var o = e;
              a = tu;
              var v = o.current.memoizedState.isDehydrated;
              if (v && (ra(o, r).flags |= 256), r = Ms(
                o,
                r,
                !1
              ), r !== 2) {
                if (Ss && !v) {
                  o.errorRecoveryDisabledLanes |= i, _l |= i, a = 4;
                  break e;
                }
                i = vt, vt = a, i !== null && (vt === null ? vt = i : vt.push.apply(
                  vt,
                  i
                ));
              }
              a = r;
            }
            if (i = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          ra(e, 0), Zn(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, i = a, i) {
            case 0:
            case 1:
              throw Error(s(345));
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
              throw Error(s(329));
          }
          if ((t & 62914560) === t && (a = qi + 300 - St(), 10 < a)) {
            if (Zn(
              l,
              t,
              Dt,
              !Yn
            ), Ju(l, 0, !0) !== 0) break e;
            bn = t, l.timeoutHandle = v2(
              Ld.bind(
                null,
                l,
                n,
                vt,
                Hi,
                _s,
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
          Ld(
            l,
            n,
            vt,
            Hi,
            _s,
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
  function Ld(e, t, n, l, a, i, r, o, v, H, k, ee, w, Z) {
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
      }, Ud(
        t,
        i,
        ee
      );
      var se = (i & 62914560) === i ? qi - St() : (i & 4194048) === i ? Bd - St() : 0;
      if (se = Vy(
        ee,
        se
      ), se !== null) {
        bn = i, e.cancelPendingCommit = se(
          kd.bind(
            null,
            e,
            t,
            i,
            n,
            l,
            a,
            r,
            o,
            v,
            k,
            ee,
            null,
            w,
            Z
          )
        ), Zn(e, i, r, !H);
        return;
      }
    }
    kd(
      e,
      t,
      i,
      n,
      l,
      a,
      r,
      o,
      v
    );
  }
  function uy(e) {
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
    t &= ~bs, t &= ~_l, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var i = 31 - _t(a), r = 1 << i;
      l[i] = -1, a &= ~r;
    }
    n !== 0 && Ff(e, n, t);
  }
  function Qi() {
    return (De & 6) === 0 ? (lu(0), !1) : !0;
  }
  function As() {
    if (be !== null) {
      if (ze === 0)
        var e = be.return;
      else
        e = be, sn = dl = null, Yr(e), Il = null, wa = 0, e = be;
      for (; e !== null; )
        gd(e.alternate, e), e = e.return;
      be = null;
    }
  }
  function ra(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, Ay(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), bn = 0, As(), xe = e, be = n = cn(e.current, null), Ee = t, ze = 0, Mt = null, Yn = !1, ua = Ea(e, t), Ss = !1, ia = Dt = bs = _l = Gn = we = 0, vt = tu = null, _s = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var a = 31 - _t(l), i = 1 << a;
        t |= e[a], l &= ~i;
      }
    return Sn = t, ui(), n;
  }
  function Yd(e, t) {
    ve = null, D.H = Ja, t === $l || t === hi ? (t = l0(), ze = 3) : t === Or ? (t = l0(), ze = 4) : ze = t === ls ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Mt = t, be === null && (we = 1, Di(
      e,
      Ht(t, e.current)
    ));
  }
  function Gd() {
    var e = Tt.current;
    return e === null ? !0 : (Ee & 4194048) === Ee ? Yt === null : (Ee & 62914560) === Ee || (Ee & 536870912) !== 0 ? e === Yt : !1;
  }
  function Vd() {
    var e = D.H;
    return D.H = Ja, e === null ? Ja : e;
  }
  function Xd() {
    var e = D.A;
    return D.A = ly, e;
  }
  function wi() {
    we = 4, Yn || (Ee & 4194048) !== Ee && Tt.current !== null || (ua = !0), (Gn & 134217727) === 0 && (_l & 134217727) === 0 || xe === null || Zn(
      xe,
      Ee,
      Dt,
      !1
    );
  }
  function Ms(e, t, n) {
    var l = De;
    De |= 2;
    var a = Vd(), i = Xd();
    (xe !== e || Ee !== t) && (Hi = null, ra(e, t)), t = !1;
    var r = we;
    e: do
      try {
        if (ze !== 0 && be !== null) {
          var o = be, v = Mt;
          switch (ze) {
            case 8:
              As(), r = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Tt.current === null && (t = !0);
              var H = ze;
              if (ze = 0, Mt = null, sa(e, o, v, H), n && ua) {
                r = 0;
                break e;
              }
              break;
            default:
              H = ze, ze = 0, Mt = null, sa(e, o, v, H);
          }
        }
        iy(), r = we;
        break;
      } catch (k) {
        Yd(e, k);
      }
    while (!0);
    return t && e.shellSuspendCounter++, sn = dl = null, De = l, D.H = a, D.A = i, be === null && (xe = null, Ee = 0, ui()), r;
  }
  function iy() {
    for (; be !== null; ) Zd(be);
  }
  function cy(e, t) {
    var n = De;
    De |= 2;
    var l = Vd(), a = Xd();
    xe !== e || Ee !== t ? (Hi = null, Bi = St() + 500, ra(e, t)) : ua = Ea(
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
              ze = 0, Mt = null, sa(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (t0(i)) {
                ze = 0, Mt = null, Kd(t);
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
              t0(i) ? (ze = 0, Mt = null, Kd(t)) : (ze = 0, Mt = null, sa(e, t, i, 7));
              break;
            case 5:
              var r = null;
              switch (be.tag) {
                case 26:
                  r = be.memoizedState;
                case 5:
                case 27:
                  var o = be;
                  if (r ? N2(r) : o.stateNode.complete) {
                    ze = 0, Mt = null;
                    var v = o.sibling;
                    if (v !== null) be = v;
                    else {
                      var H = o.return;
                      H !== null ? (be = H, Li(H)) : be = null;
                    }
                    break t;
                  }
              }
              ze = 0, Mt = null, sa(e, t, i, 5);
              break;
            case 6:
              ze = 0, Mt = null, sa(e, t, i, 6);
              break;
            case 8:
              As(), we = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        ry();
        break;
      } catch (k) {
        Yd(e, k);
      }
    while (!0);
    return sn = dl = null, D.H = l, D.A = a, De = n, be !== null ? 0 : (xe = null, Ee = 0, ui(), we);
  }
  function ry() {
    for (; be !== null && !Yc(); )
      Zd(be);
  }
  function Zd(e) {
    var t = yd(e.alternate, e, Sn);
    e.memoizedProps = e.pendingProps, t === null ? Li(e) : be = t;
  }
  function Kd(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = sd(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Ee
        );
        break;
      case 11:
        t = sd(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Ee
        );
        break;
      case 5:
        Yr(t);
      default:
        gd(n, t), t = be = Xo(t, Sn), t = yd(n, t, Sn);
    }
    e.memoizedProps = e.pendingProps, t === null ? Li(e) : be = t;
  }
  function sa(e, t, n, l) {
    sn = dl = null, Yr(t), Il = null, wa = 0;
    var a = t.return;
    try {
      if (Wm(
        e,
        a,
        t,
        n,
        Ee
      )) {
        we = 1, Di(
          e,
          Ht(n, e.current)
        ), be = null;
        return;
      }
    } catch (i) {
      if (a !== null) throw be = a, i;
      we = 1, Di(
        e,
        Ht(n, e.current)
      ), be = null;
      return;
    }
    t.flags & 32768 ? (Te || l === 1 ? e = !0 : ua || (Ee & 536870912) !== 0 ? e = !1 : (Yn = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Tt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Jd(t, e)) : Li(t);
  }
  function Li(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Jd(
          t,
          Yn
        );
        return;
      }
      e = t.return;
      var n = Pm(
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
  function Jd(e, t) {
    do {
      var n = ey(e.alternate, e);
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
  function kd(e, t, n, l, a, i, r, o, v) {
    e.cancelPendingCommit = null;
    do
      Yi();
    while (ke !== 0);
    if ((De & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (i = t.lanes | t.childLanes, i |= mr, Yh(
        e,
        n,
        i,
        r,
        o,
        v
      ), e === xe && (be = xe = null, Ee = 0), ca = t, Xn = e, bn = n, Es = i, Cs = a, Hd = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, dy(Vu, function() {
        return Pd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = D.T, D.T = null, a = W.p, W.p = 2, r = De, De |= 4;
        try {
          ty(e, t, n);
        } finally {
          De = r, W.p = a, D.T = l;
        }
      }
      ke = 1, Fd(), Wd(), $d();
    }
  }
  function Fd() {
    if (ke === 1) {
      ke = 0;
      var e = Xn, t = ca, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = D.T, D.T = null;
        var l = W.p;
        W.p = 2;
        var a = De;
        De |= 4;
        try {
          Od(t, e);
          var i = Qs, r = qo(e.containerInfo), o = i.focusedElem, v = i.selectionRange;
          if (r !== o && o && o.ownerDocument && jo(
            o.ownerDocument.documentElement,
            o
          )) {
            if (v !== null && sr(o)) {
              var H = v.start, k = v.end;
              if (k === void 0 && (k = H), "selectionStart" in o)
                o.selectionStart = H, o.selectionEnd = Math.min(
                  k,
                  o.value.length
                );
              else {
                var ee = o.ownerDocument || document, w = ee && ee.defaultView || window;
                if (w.getSelection) {
                  var Z = w.getSelection(), se = o.textContent.length, me = Math.min(v.start, se), Ue = v.end === void 0 ? me : Math.min(v.end, se);
                  !Z.extend && me > Ue && (r = Ue, Ue = me, me = r);
                  var U = xo(
                    o,
                    me
                  ), E = xo(
                    o,
                    Ue
                  );
                  if (U && E && (Z.rangeCount !== 1 || Z.anchorNode !== U.node || Z.anchorOffset !== U.offset || Z.focusNode !== E.node || Z.focusOffset !== E.offset)) {
                    var B = ee.createRange();
                    B.setStart(U.node, U.offset), Z.removeAllRanges(), me > Ue ? (Z.addRange(B), Z.extend(E.node, E.offset)) : (B.setEnd(E.node, E.offset), Z.addRange(B));
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
          Pi = !!Hs, Qs = Hs = null;
        } finally {
          De = a, W.p = l, D.T = n;
        }
      }
      e.current = t, ke = 2;
    }
  }
  function Wd() {
    if (ke === 2) {
      ke = 0;
      var e = Xn, t = ca, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = D.T, D.T = null;
        var l = W.p;
        W.p = 2;
        var a = De;
        De |= 4;
        try {
          Td(e, t.alternate, t);
        } finally {
          De = a, W.p = l, D.T = n;
        }
      }
      ke = 3;
    }
  }
  function $d() {
    if (ke === 4 || ke === 3) {
      ke = 0, Uh();
      var e = Xn, t = ca, n = bn, l = Hd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ke = 5 : (ke = 0, ca = Xn = null, Id(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (Vn = null), Xc(n), t = t.stateNode, bt && typeof bt.onCommitFiberRoot == "function")
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
        t = D.T, a = W.p, W.p = 2, D.T = null;
        try {
          for (var i = e.onRecoverableError, r = 0; r < l.length; r++) {
            var o = l[r];
            i(o.value, {
              componentStack: o.stack
            });
          }
        } finally {
          D.T = t, W.p = a;
        }
      }
      (bn & 3) !== 0 && Yi(), tn(e), a = e.pendingLanes, (n & 261930) !== 0 && (a & 42) !== 0 ? e === Ts ? nu++ : (nu = 0, Ts = e) : nu = 0, lu(0);
    }
  }
  function Id(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ha(t)));
  }
  function Yi() {
    return Fd(), Wd(), $d(), Pd();
  }
  function Pd() {
    if (ke !== 5) return !1;
    var e = Xn, t = Es;
    Es = 0;
    var n = Xc(bn), l = D.T, a = W.p;
    try {
      W.p = 32 > n ? 32 : n, D.T = null, n = Cs, Cs = null;
      var i = Xn, r = bn;
      if (ke = 0, ca = Xn = null, bn = 0, (De & 6) !== 0) throw Error(s(331));
      var o = De;
      if (De |= 4, jd(i.current), Nd(
        i,
        i.current,
        r,
        n
      ), De = o, lu(0, !1), bt && typeof bt.onPostCommitFiberRoot == "function")
        try {
          bt.onPostCommitFiberRoot(_a, i);
        } catch {
        }
      return !0;
    } finally {
      W.p = a, D.T = l, Id(e, t);
    }
  }
  function e2(e, t, n) {
    t = Ht(n, t), t = ns(e.stateNode, t, 2), e = Hn(e, t, 2), e !== null && (Ca(e, 2), tn(e));
  }
  function Oe(e, t, n) {
    if (e.tag === 3)
      e2(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          e2(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Vn === null || !Vn.has(l))) {
            e = Ht(n, e), n = td(2), l = Hn(t, n, 2), l !== null && (nd(
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
  function Ds(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new ay();
      var a = /* @__PURE__ */ new Set();
      l.set(t, a);
    } else
      a = l.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), l.set(t, a));
    a.has(n) || (Ss = !0, a.add(n), e = sy.bind(null, e, t, n), t.then(e, e));
  }
  function sy(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, xe === e && (Ee & n) === n && (we === 4 || we === 3 && (Ee & 62914560) === Ee && 300 > St() - qi ? (De & 2) === 0 && ra(e, 0) : bs |= n, ia === Ee && (ia = 0)), tn(e);
  }
  function t2(e, t) {
    t === 0 && (t = kf()), e = sl(e, t), e !== null && (Ca(e, t), tn(e));
  }
  function fy(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), t2(e, n);
  }
  function oy(e, t) {
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
        throw Error(s(314));
    }
    l !== null && l.delete(t), t2(e, n);
  }
  function dy(e, t) {
    return ba(e, t);
  }
  var Gi = null, fa = null, zs = !1, Vi = !1, Os = !1, Kn = 0;
  function tn(e) {
    e !== fa && e.next === null && (fa === null ? Gi = fa = e : fa = fa.next = e), Vi = !0, zs || (zs = !0, my());
  }
  function lu(e, t) {
    if (!Os && Vi) {
      Os = !0;
      do
        for (var n = !1, l = Gi; l !== null; ) {
          if (e !== 0) {
            var a = l.pendingLanes;
            if (a === 0) var i = 0;
            else {
              var r = l.suspendedLanes, o = l.pingedLanes;
              i = (1 << 31 - _t(42 | e) + 1) - 1, i &= a & ~(r & ~o), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (n = !0, u2(l, i));
          } else
            i = Ee, i = Ju(
              l,
              l === xe ? i : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (i & 3) === 0 || Ea(l, i) || (n = !0, u2(l, i));
          l = l.next;
        }
      while (n);
      Os = !1;
    }
  }
  function hy() {
    n2();
  }
  function n2() {
    Vi = zs = !1;
    var e = 0;
    Kn !== 0 && Ty() && (e = Kn);
    for (var t = St(), n = null, l = Gi; l !== null; ) {
      var a = l.next, i = l2(l, t);
      i === 0 ? (l.next = null, n === null ? Gi = a : n.next = a, a === null && (fa = n)) : (n = l, (e !== 0 || (i & 3) !== 0) && (Vi = !0)), l = a;
    }
    ke !== 0 && ke !== 5 || lu(e), Kn !== 0 && (Kn = 0);
  }
  function l2(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var r = 31 - _t(i), o = 1 << r, v = a[r];
      v === -1 ? ((o & n) === 0 || (o & l) !== 0) && (a[r] = Lh(o, t)) : v <= t && (e.expiredLanes |= o), i &= ~o;
    }
    if (t = xe, n = Ee, n = Ju(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, n === 0 || e === t && (ze === 2 || ze === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Rl(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Ea(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (l !== null && Rl(l), Xc(n)) {
        case 2:
        case 8:
          n = Kf;
          break;
        case 32:
          n = Vu;
          break;
        case 268435456:
          n = Jf;
          break;
        default:
          n = Vu;
      }
      return l = a2.bind(null, e), n = ba(n, l), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return l !== null && l !== null && Rl(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function a2(e, t) {
    if (ke !== 0 && ke !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Yi() && e.callbackNode !== n)
      return null;
    var l = Ee;
    return l = Ju(
      e,
      e === xe ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (wd(e, l, t), l2(e, St()), e.callbackNode != null && e.callbackNode === n ? a2.bind(null, e) : null);
  }
  function u2(e, t) {
    if (Yi()) return null;
    wd(e, t, !0);
  }
  function my() {
    My(function() {
      (De & 6) !== 0 ? ba(
        Zf,
        hy
      ) : n2();
    });
  }
  function Rs() {
    if (Kn === 0) {
      var e = Fl;
      e === 0 && (e = Xu, Xu <<= 1, (Xu & 261888) === 0 && (Xu = 256)), Kn = e;
    }
    return Kn;
  }
  function i2(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : $u("" + e);
  }
  function c2(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function yy(e, t, n, l, a) {
    if (t === "submit" && n && n.stateNode === a) {
      var i = i2(
        (a[ot] || null).action
      ), r = l.submitter;
      r && (t = (t = r[ot] || null) ? i2(t.formAction) : r.getAttribute("formAction"), t !== null && (i = t, r = null));
      var o = new ti(
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
                  var v = r ? c2(a, r) : new FormData(a);
                  Wr(
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
                typeof i == "function" && (o.preventDefault(), v = r ? c2(a, r) : new FormData(a), Wr(
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
  for (var Ns = 0; Ns < hr.length; Ns++) {
    var Us = hr[Ns], vy = Us.toLowerCase(), gy = Us[0].toUpperCase() + Us.slice(1);
    Kt(
      vy,
      "on" + gy
    );
  }
  Kt(Qo, "onAnimationEnd"), Kt(wo, "onAnimationIteration"), Kt(Lo, "onAnimationStart"), Kt("dblclick", "onDoubleClick"), Kt("focusin", "onFocus"), Kt("focusout", "onBlur"), Kt(xm, "onTransitionRun"), Kt(jm, "onTransitionStart"), Kt(qm, "onTransitionCancel"), Kt(Yo, "onTransitionEnd"), ql("onMouseEnter", ["mouseout", "mouseover"]), ql("onMouseLeave", ["mouseout", "mouseover"]), ql("onPointerEnter", ["pointerout", "pointerover"]), ql("onPointerLeave", ["pointerout", "pointerover"]), ul(
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
  ), py = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(au)
  );
  function r2(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n], a = l.event;
      l = l.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var r = l.length - 1; 0 <= r; r--) {
            var o = l[r], v = o.instance, H = o.currentTarget;
            if (o = o.listener, v !== i && a.isPropagationStopped())
              break e;
            i = o, a.currentTarget = H;
            try {
              i(a);
            } catch (k) {
              ai(k);
            }
            a.currentTarget = null, i = v;
          }
        else
          for (r = 0; r < l.length; r++) {
            if (o = l[r], v = o.instance, H = o.currentTarget, o = o.listener, v !== i && a.isPropagationStopped())
              break e;
            i = o, a.currentTarget = H;
            try {
              i(a);
            } catch (k) {
              ai(k);
            }
            a.currentTarget = null, i = v;
          }
      }
    }
  }
  function _e(e, t) {
    var n = t[Zc];
    n === void 0 && (n = t[Zc] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    n.has(l) || (s2(t, e, 2, !1), n.add(l));
  }
  function xs(e, t, n) {
    var l = 0;
    t && (l |= 4), s2(
      n,
      e,
      l,
      t
    );
  }
  var Xi = "_reactListening" + Math.random().toString(36).slice(2);
  function js(e) {
    if (!e[Xi]) {
      e[Xi] = !0, to.forEach(function(n) {
        n !== "selectionchange" && (py.has(n) || xs(n, !1, e), xs(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Xi] || (t[Xi] = !0, xs("selectionchange", !1, t));
    }
  }
  function s2(e, t, n, l) {
    switch (Q2(t)) {
      case 2:
        var a = Ky;
        break;
      case 8:
        a = Jy;
        break;
      default:
        a = Fs;
    }
    n = a.bind(
      null,
      t,
      n,
      e
    ), a = void 0, !er || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), l ? a !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: a
    }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, {
      passive: a
    }) : e.addEventListener(t, n, !1);
  }
  function qs(e, t, n, l, a) {
    var i = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var r = l.tag;
        if (r === 3 || r === 4) {
          var o = l.stateNode.containerInfo;
          if (o === a) break;
          if (r === 4)
            for (r = l.return; r !== null; ) {
              var v = r.tag;
              if ((v === 3 || v === 4) && r.stateNode.containerInfo === a)
                return;
              r = r.return;
            }
          for (; o !== null; ) {
            if (r = Ul(o), r === null) return;
            if (v = r.tag, v === 5 || v === 6 || v === 26 || v === 27) {
              l = i = r;
              continue e;
            }
            o = o.parentNode;
          }
        }
        l = l.return;
      }
    mo(function() {
      var H = i, k = Ic(n), ee = [];
      e: {
        var w = Go.get(e);
        if (w !== void 0) {
          var Z = ti, se = e;
          switch (e) {
            case "keypress":
              if (Pu(n) === 0) break e;
            case "keydown":
            case "keyup":
              Z = om;
              break;
            case "focusin":
              se = "focus", Z = ar;
              break;
            case "focusout":
              se = "blur", Z = ar;
              break;
            case "beforeblur":
            case "afterblur":
              Z = ar;
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
              Z = go;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Z = Ph;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = mm;
              break;
            case Qo:
            case wo:
            case Lo:
              Z = nm;
              break;
            case Yo:
              Z = vm;
              break;
            case "scroll":
            case "scrollend":
              Z = $h;
              break;
            case "wheel":
              Z = pm;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = am;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = So;
              break;
            case "toggle":
            case "beforetoggle":
              Z = bm;
          }
          var me = (t & 4) !== 0, Ue = !me && (e === "scroll" || e === "scrollend"), U = me ? w !== null ? w + "Capture" : null : w;
          me = [];
          for (var E = H, B; E !== null; ) {
            var I = E;
            if (B = I.stateNode, I = I.tag, I !== 5 && I !== 26 && I !== 27 || B === null || U === null || (I = Ma(E, U), I != null && me.push(
              uu(E, I, B)
            )), Ue) break;
            E = E.return;
          }
          0 < me.length && (w = new Z(
            w,
            se,
            null,
            n,
            k
          ), ee.push({ event: w, listeners: me }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (w = e === "mouseover" || e === "pointerover", Z = e === "mouseout" || e === "pointerout", w && n !== $c && (se = n.relatedTarget || n.fromElement) && (Ul(se) || se[Nl]))
            break e;
          if ((Z || w) && (w = k.window === k ? k : (w = k.ownerDocument) ? w.defaultView || w.parentWindow : window, Z ? (se = n.relatedTarget || n.toElement, Z = H, se = se ? Ul(se) : null, se !== null && (Ue = h(se), me = se.tag, se !== Ue || me !== 5 && me !== 27 && me !== 6) && (se = null)) : (Z = null, se = H), Z !== se)) {
            if (me = go, I = "onMouseLeave", U = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (me = So, I = "onPointerLeave", U = "onPointerEnter", E = "pointer"), Ue = Z == null ? w : Aa(Z), B = se == null ? w : Aa(se), w = new me(
              I,
              E + "leave",
              Z,
              n,
              k
            ), w.target = Ue, w.relatedTarget = B, I = null, Ul(k) === H && (me = new me(
              U,
              E + "enter",
              se,
              n,
              k
            ), me.target = B, me.relatedTarget = Ue, I = me), Ue = I, Z && se)
              t: {
                for (me = Sy, U = Z, E = se, B = 0, I = U; I; I = me(I))
                  B++;
                I = 0;
                for (var he = E; he; he = me(he))
                  I++;
                for (; 0 < B - I; )
                  U = me(U), B--;
                for (; 0 < I - B; )
                  E = me(E), I--;
                for (; B--; ) {
                  if (U === E || E !== null && U === E.alternate) {
                    me = U;
                    break t;
                  }
                  U = me(U), E = me(E);
                }
                me = null;
              }
            else me = null;
            Z !== null && f2(
              ee,
              w,
              Z,
              me,
              !1
            ), se !== null && Ue !== null && f2(
              ee,
              Ue,
              se,
              me,
              !0
            );
          }
        }
        e: {
          if (w = H ? Aa(H) : window, Z = w.nodeName && w.nodeName.toLowerCase(), Z === "select" || Z === "input" && w.type === "file")
            var Ae = Do;
          else if (Ao(w))
            if (zo)
              Ae = Rm;
            else {
              Ae = zm;
              var oe = Dm;
            }
          else
            Z = w.nodeName, !Z || Z.toLowerCase() !== "input" || w.type !== "checkbox" && w.type !== "radio" ? H && Wc(H.elementType) && (Ae = Do) : Ae = Om;
          if (Ae && (Ae = Ae(e, H))) {
            Mo(
              ee,
              Ae,
              n,
              k
            );
            break e;
          }
          oe && oe(e, w, H), e === "focusout" && H && w.type === "number" && H.memoizedProps.value != null && Fc(w, "number", w.value);
        }
        switch (oe = H ? Aa(H) : window, e) {
          case "focusin":
            (Ao(oe) || oe.contentEditable === "true") && (Yl = oe, fr = H, ja = null);
            break;
          case "focusout":
            ja = fr = Yl = null;
            break;
          case "mousedown":
            or = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            or = !1, Bo(ee, n, k);
            break;
          case "selectionchange":
            if (Um) break;
          case "keydown":
          case "keyup":
            Bo(ee, n, k);
        }
        var ge;
        if (ir)
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
          Ll ? Co(e, n) && (Ce = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Ce = "onCompositionStart");
        Ce && (bo && n.locale !== "ko" && (Ll || Ce !== "onCompositionStart" ? Ce === "onCompositionEnd" && Ll && (ge = yo()) : (Rn = k, tr = "value" in Rn ? Rn.value : Rn.textContent, Ll = !0)), oe = Zi(H, Ce), 0 < oe.length && (Ce = new po(
          Ce,
          e,
          null,
          n,
          k
        ), ee.push({ event: Ce, listeners: oe }), ge ? Ce.data = ge : (ge = To(n), ge !== null && (Ce.data = ge)))), (ge = Em ? Cm(e, n) : Tm(e, n)) && (Ce = Zi(H, "onBeforeInput"), 0 < Ce.length && (oe = new po(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          k
        ), ee.push({
          event: oe,
          listeners: Ce
        }), oe.data = ge)), yy(
          ee,
          e,
          H,
          n,
          k
        );
      }
      r2(ee, t);
    });
  }
  function uu(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Zi(e, t) {
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
  function Sy(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function f2(e, t, n, l, a) {
    for (var i = t._reactName, r = []; n !== null && n !== l; ) {
      var o = n, v = o.alternate, H = o.stateNode;
      if (o = o.tag, v !== null && v === l) break;
      o !== 5 && o !== 26 && o !== 27 || H === null || (v = H, a ? (H = Ma(n, i), H != null && r.unshift(
        uu(n, H, v)
      )) : a || (H = Ma(n, i), H != null && r.push(
        uu(n, H, v)
      ))), n = n.return;
    }
    r.length !== 0 && e.push({ event: t, listeners: r });
  }
  var by = /\r\n?/g, _y = /\u0000|\uFFFD/g;
  function o2(e) {
    return (typeof e == "string" ? e : "" + e).replace(by, `
`).replace(_y, "");
  }
  function d2(e, t) {
    return t = o2(t), o2(e) === t;
  }
  function Ne(e, t, n, l, a, i) {
    switch (n) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Hl(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Hl(e, "" + l);
        break;
      case "className":
        Fu(e, "class", l);
        break;
      case "tabIndex":
        Fu(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Fu(e, n, l);
        break;
      case "style":
        oo(e, l, i);
        break;
      case "data":
        if (t !== "object") {
          Fu(e, "data", l);
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
        l = $u("" + l), e.setAttribute(n, l);
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
        l = $u("" + l), e.setAttribute(n, l);
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
            throw Error(s(61));
          if (n = l.__html, n != null) {
            if (a.children != null) throw Error(s(60));
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
        n = $u("" + l), e.setAttributeNS(
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
        _e("beforetoggle", e), _e("toggle", e), ku(e, "popover", l);
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
        ku(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Fh.get(n) || n, ku(e, n, l));
    }
  }
  function Bs(e, t, n, l, a, i) {
    switch (n) {
      case "style":
        oo(e, l, i);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(s(61));
          if (n = l.__html, n != null) {
            if (a.children != null) throw Error(s(60));
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
        if (!no.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), i = e[ot] || null, i = i != null ? i[n] : null, typeof i == "function" && e.removeEventListener(t, i, a), typeof l == "function")) {
              typeof i != "function" && i !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, a);
              break e;
            }
            n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : ku(e, n, l);
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
            var r = n[i];
            if (r != null)
              switch (i) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, t));
                default:
                  Ne(e, t, i, r, n, null);
              }
          }
        a && Ne(e, t, "srcSet", n.srcSet, n, null), l && Ne(e, t, "src", n.src, n, null);
        return;
      case "input":
        _e("invalid", e);
        var o = i = r = a = null, v = null, H = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var k = n[l];
            if (k != null)
              switch (l) {
                case "name":
                  a = k;
                  break;
                case "type":
                  r = k;
                  break;
                case "checked":
                  v = k;
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
                    throw Error(s(137, t));
                  break;
                default:
                  Ne(e, t, l, k, n, null);
              }
          }
        co(
          e,
          i,
          o,
          v,
          H,
          r,
          a,
          !1
        );
        return;
      case "select":
        _e("invalid", e), l = r = i = null;
        for (a in n)
          if (n.hasOwnProperty(a) && (o = n[a], o != null))
            switch (a) {
              case "value":
                i = o;
                break;
              case "defaultValue":
                r = o;
                break;
              case "multiple":
                l = o;
              default:
                Ne(e, t, a, o, n, null);
            }
        t = i, n = r, e.multiple = !!l, t != null ? Bl(e, !!l, t, !1) : n != null && Bl(e, !!l, n, !0);
        return;
      case "textarea":
        _e("invalid", e), i = a = l = null;
        for (r in n)
          if (n.hasOwnProperty(r) && (o = n[r], o != null))
            switch (r) {
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
                if (o != null) throw Error(s(91));
                break;
              default:
                Ne(e, t, r, o, n, null);
            }
        so(e, l, a, i);
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
        for (H in n)
          if (n.hasOwnProperty(H) && (l = n[H], l != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                Ne(e, t, H, l, n, null);
            }
        return;
      default:
        if (Wc(t)) {
          for (k in n)
            n.hasOwnProperty(k) && (l = n[k], l !== void 0 && Bs(
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
  function Ey(e, t, n, l) {
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
        var a = null, i = null, r = null, o = null, v = null, H = null, k = null;
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
                r = Z;
                break;
              case "defaultValue":
                o = Z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null)
                  throw Error(s(137, t));
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
        kc(
          e,
          r,
          o,
          v,
          H,
          k,
          i,
          a
        );
        return;
      case "select":
        Z = r = o = w = null;
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
                w = i;
                break;
              case "defaultValue":
                o = i;
                break;
              case "multiple":
                r = i;
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
        t = o, n = r, l = Z, w != null ? Bl(e, !!n, w, !1) : !!l != !!n && (t != null ? Bl(e, !!n, t, !0) : Bl(e, !!n, n ? [] : "", !1));
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
        for (r in l)
          if (a = l[r], i = n[r], l.hasOwnProperty(r) && (a != null || i != null))
            switch (r) {
              case "value":
                w = a;
                break;
              case "defaultValue":
                Z = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(s(91));
                break;
              default:
                a !== i && Ne(e, t, r, a, l, i);
            }
        ro(e, w, Z);
        return;
      case "option":
        for (var se in n)
          w = n[se], n.hasOwnProperty(se) && w != null && !l.hasOwnProperty(se) && (se === "selected" ? e.selected = !1 : Ne(
            e,
            t,
            se,
            null,
            l,
            w
          ));
        for (v in l)
          w = l[v], Z = n[v], l.hasOwnProperty(v) && w !== Z && (w != null || Z != null) && (v === "selected" ? e.selected = w && typeof w != "function" && typeof w != "symbol" : Ne(
            e,
            t,
            v,
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
                  throw Error(s(137, t));
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
        if (Wc(t)) {
          for (var Ue in n)
            w = n[Ue], n.hasOwnProperty(Ue) && w !== void 0 && !l.hasOwnProperty(Ue) && Bs(
              e,
              t,
              Ue,
              void 0,
              l,
              w
            );
          for (k in l)
            w = l[k], Z = n[k], !l.hasOwnProperty(k) || w === Z || w === void 0 && Z === void 0 || Bs(
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
    for (var U in n)
      w = n[U], n.hasOwnProperty(U) && w != null && !l.hasOwnProperty(U) && Ne(e, t, U, null, l, w);
    for (ee in l)
      w = l[ee], Z = n[ee], !l.hasOwnProperty(ee) || w === Z || w == null && Z == null || Ne(e, t, ee, w, l, Z);
  }
  function h2(e) {
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
  function Cy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
        var a = n[l], i = a.transferSize, r = a.initiatorType, o = a.duration;
        if (i && o && h2(r)) {
          for (r = 0, o = a.responseEnd, l += 1; l < n.length; l++) {
            var v = n[l], H = v.startTime;
            if (H > o) break;
            var k = v.transferSize, ee = v.initiatorType;
            k && h2(ee) && (v = v.responseEnd, r += k * (v < o ? 1 : (o - H) / (v - H)));
          }
          if (--l, t += 8 * (i + r) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Hs = null, Qs = null;
  function Ki(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function m2(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function y2(e, t) {
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
  function ws(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ls = null;
  function Ty() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Ls ? !1 : (Ls = e, !0) : (Ls = null, !1);
  }
  var v2 = typeof setTimeout == "function" ? setTimeout : void 0, Ay = typeof clearTimeout == "function" ? clearTimeout : void 0, g2 = typeof Promise == "function" ? Promise : void 0, My = typeof queueMicrotask == "function" ? queueMicrotask : typeof g2 < "u" ? function(e) {
    return g2.resolve(null).then(e).catch(Dy);
  } : v2;
  function Dy(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Jn(e) {
    return e === "head";
  }
  function p2(e, t) {
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
            var r = i.nextSibling, o = i.nodeName;
            i[Ta] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && i.rel.toLowerCase() === "stylesheet" || n.removeChild(i), i = r;
          }
        } else
          n === "body" && iu(e.ownerDocument.body);
      n = a;
    } while (n);
    ma(t);
  }
  function S2(e, t) {
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
  function Ys(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ys(n), Kc(n);
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
  function zy(e, t, n, l) {
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
  function Oy(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Gt(e.nextSibling), e === null)) return null;
    return e;
  }
  function b2(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Gt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Gs(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Vs(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Ry(e, t) {
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
  var Xs = null;
  function _2(e) {
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
  function E2(e) {
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
  function C2(e, t, n) {
    switch (t = Ki(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(s(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(s(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function iu(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Kc(e);
  }
  var Vt = /* @__PURE__ */ new Map(), T2 = /* @__PURE__ */ new Set();
  function Ji(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var _n = W.d;
  W.d = {
    f: Ny,
    r: Uy,
    D: xy,
    C: jy,
    L: qy,
    m: By,
    X: Qy,
    S: Hy,
    M: wy
  };
  function Ny() {
    var e = _n.f(), t = Qi();
    return e || t;
  }
  function Uy(e) {
    var t = xl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Y0(t) : _n.r(e);
  }
  var oa = typeof document > "u" ? null : document;
  function A2(e, t, n) {
    var l = oa;
    if (l && typeof t == "string" && t) {
      var a = qt(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof n == "string" && (a += '[crossorigin="' + n + '"]'), T2.has(a) || (T2.add(a), e = { rel: e, crossOrigin: n, href: t }, l.querySelector(a) === null && (t = l.createElement("link"), ut(t, "link", e), Fe(t), l.head.appendChild(t)));
    }
  }
  function xy(e) {
    _n.D(e), A2("dns-prefetch", e, null);
  }
  function jy(e, t) {
    _n.C(e, t), A2("preconnect", e, t);
  }
  function qy(e, t, n) {
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
      ), Vt.set(i, e), l.querySelector(a) !== null || t === "style" && l.querySelector(cu(i)) || t === "script" && l.querySelector(ru(i)) || (t = l.createElement("link"), ut(t, "link", e), Fe(t), l.head.appendChild(t)));
    }
  }
  function By(e, t) {
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
            if (n.querySelector(ru(i)))
              return;
        }
        l = n.createElement("link"), ut(l, "link", e), Fe(l), n.head.appendChild(l);
      }
    }
  }
  function Hy(e, t, n) {
    _n.S(e, t, n);
    var l = oa;
    if (l && e) {
      var a = jl(l).hoistableStyles, i = da(e);
      t = t || "default";
      var r = a.get(i);
      if (!r) {
        var o = { loading: 0, preload: null };
        if (r = l.querySelector(
          cu(i)
        ))
          o.loading = 5;
        else {
          e = S(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = Vt.get(i)) && Zs(e, n);
          var v = r = l.createElement("link");
          Fe(v), ut(v, "link", e), v._p = new Promise(function(H, k) {
            v.onload = H, v.onerror = k;
          }), v.addEventListener("load", function() {
            o.loading |= 1;
          }), v.addEventListener("error", function() {
            o.loading |= 2;
          }), o.loading |= 4, ki(r, t, l);
        }
        r = {
          type: "stylesheet",
          instance: r,
          count: 1,
          state: o
        }, a.set(i, r);
      }
    }
  }
  function Qy(e, t) {
    _n.X(e, t);
    var n = oa;
    if (n && e) {
      var l = jl(n).hoistableScripts, a = ha(e), i = l.get(a);
      i || (i = n.querySelector(ru(a)), i || (e = S({ src: e, async: !0 }, t), (t = Vt.get(a)) && Ks(e, t), i = n.createElement("script"), Fe(i), ut(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, l.set(a, i));
    }
  }
  function wy(e, t) {
    _n.M(e, t);
    var n = oa;
    if (n && e) {
      var l = jl(n).hoistableScripts, a = ha(e), i = l.get(a);
      i || (i = n.querySelector(ru(a)), i || (e = S({ src: e, async: !0, type: "module" }, t), (t = Vt.get(a)) && Ks(e, t), i = n.createElement("script"), Fe(i), ut(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, l.set(a, i));
    }
  }
  function M2(e, t, n, l) {
    var a = (a = fe.current) ? Ji(a) : null;
    if (!a) throw Error(s(446));
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
          ).hoistableStyles, r = i.get(e);
          if (r || (a = a.ownerDocument || a, r = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, r), (i = a.querySelector(
            cu(e)
          )) && !i._p && (r.instance = i, r.state.loading = 5), Vt.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Vt.set(e, n), i || Ly(
            a,
            e,
            n,
            r.state
          ))), t && l === null)
            throw Error(s(528, ""));
          return r;
        }
        if (t && l !== null)
          throw Error(s(529, ""));
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
        throw Error(s(444, e));
    }
  }
  function da(e) {
    return 'href="' + qt(e) + '"';
  }
  function cu(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function D2(e) {
    return S({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Ly(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), ut(t, "link", n), Fe(t), e.head.appendChild(t));
  }
  function ha(e) {
    return '[src="' + qt(e) + '"]';
  }
  function ru(e) {
    return "script[async]" + e;
  }
  function z2(e, t, n) {
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
          ), Fe(l), ut(l, "style", a), ki(l, n.precedence, e), t.instance = l;
        case "stylesheet":
          a = da(n.href);
          var i = e.querySelector(
            cu(a)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, Fe(i), i;
          l = D2(n), (a = Vt.get(a)) && Zs(l, a), i = (e.ownerDocument || e).createElement("link"), Fe(i);
          var r = i;
          return r._p = new Promise(function(o, v) {
            r.onload = o, r.onerror = v;
          }), ut(i, "link", l), t.state.loading |= 4, ki(i, n.precedence, e), t.instance = i;
        case "script":
          return i = ha(n.src), (a = e.querySelector(
            ru(i)
          )) ? (t.instance = a, Fe(a), a) : (l = n, (a = Vt.get(i)) && (l = S({}, n), Ks(l, a)), e = e.ownerDocument || e, a = e.createElement("script"), Fe(a), ut(a, "link", l), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, ki(l, n.precedence, e));
    return t.instance;
  }
  function ki(e, t, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = l.length ? l[l.length - 1] : null, i = a, r = 0; r < l.length; r++) {
      var o = l[r];
      if (o.dataset.precedence === t) i = o;
      else if (i !== a) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Zs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Ks(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Fi = null;
  function O2(e, t, n) {
    if (Fi === null) {
      var l = /* @__PURE__ */ new Map(), a = Fi = /* @__PURE__ */ new Map();
      a.set(n, l);
    } else
      a = Fi, l = a.get(n), l || (l = /* @__PURE__ */ new Map(), a.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
      var i = n[a];
      if (!(i[Ta] || i[tt] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var r = i.getAttribute(t) || "";
        r = e + r;
        var o = l.get(r);
        o ? o.push(i) : l.set(r, [i]);
      }
    }
    return l;
  }
  function R2(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Yy(e, t, n) {
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
  function N2(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Gy(e, t, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var a = da(l.href), i = t.querySelector(
          cu(a)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Wi.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, Fe(i);
          return;
        }
        i = t.ownerDocument || t, l = D2(l), (a = Vt.get(a)) && Zs(l, a), i = i.createElement("link"), Fe(i);
        var r = i;
        r._p = new Promise(function(o, v) {
          r.onload = o, r.onerror = v;
        }), ut(i, "link", l), n.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Wi.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Js = 0;
  function Vy(e, t) {
    return e.stylesheets && e.count === 0 && Ii(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var l = setTimeout(function() {
        if (e.stylesheets && Ii(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Js === 0 && (Js = 62500 * Cy());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Ii(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        },
        (e.imgBytes > Js ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(a);
      };
    } : null;
  }
  function Wi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Ii(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var $i = null;
  function Ii(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, $i = /* @__PURE__ */ new Map(), t.forEach(Xy, e), $i = null, Wi.call(e));
  }
  function Xy(e, t) {
    if (!(t.state.loading & 4)) {
      var n = $i.get(e);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), $i.set(e, n);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < a.length; i++) {
          var r = a[i];
          (r.nodeName === "LINK" || r.getAttribute("media") !== "not all") && (n.set(r.dataset.precedence, r), l = r);
        }
        l && n.set(null, l);
      }
      a = t.instance, r = a.getAttribute("data-precedence"), i = n.get(r) || l, i === l && n.set(null, a), n.set(r, a), this.count++, l = Wi.bind(this), a.addEventListener("load", l), a.addEventListener("error", l), i ? i.parentNode.insertBefore(a, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var su = {
    $$typeof: b,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0
  };
  function Zy(e, t, n, l, a, i, r, o, v) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Gc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gc(0), this.hiddenUpdates = Gc(null), this.identifierPrefix = l, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = r, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function U2(e, t, n, l, a, i, r, o, v, H, k, ee) {
    return e = new Zy(
      e,
      t,
      n,
      r,
      v,
      H,
      k,
      ee,
      o
    ), t = 1, i === !0 && (t |= 24), i = Ct(3, null, null, t), e.current = i, i.stateNode = e, t = Mr(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, Rr(i), e;
  }
  function x2(e) {
    return e ? (e = Xl, e) : Xl;
  }
  function j2(e, t, n, l, a, i) {
    a = x2(a), l.context === null ? l.context = a : l.pendingContext = a, l = Bn(t), l.payload = { element: n }, i = i === void 0 ? null : i, i !== null && (l.callback = i), n = Hn(e, l, t), n !== null && (gt(n, e, t), Ya(n, e, t));
  }
  function q2(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ks(e, t) {
    q2(e, t), (e = e.alternate) && q2(e, t);
  }
  function B2(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = sl(e, 67108864);
      t !== null && gt(t, e, 67108864), ks(e, 67108864);
    }
  }
  function H2(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = zt();
      t = Vc(t);
      var n = sl(e, t);
      n !== null && gt(n, e, t), ks(e, t);
    }
  }
  var Pi = !0;
  function Ky(e, t, n, l) {
    var a = D.T;
    D.T = null;
    var i = W.p;
    try {
      W.p = 2, Fs(e, t, n, l);
    } finally {
      W.p = i, D.T = a;
    }
  }
  function Jy(e, t, n, l) {
    var a = D.T;
    D.T = null;
    var i = W.p;
    try {
      W.p = 8, Fs(e, t, n, l);
    } finally {
      W.p = i, D.T = a;
    }
  }
  function Fs(e, t, n, l) {
    if (Pi) {
      var a = Ws(l);
      if (a === null)
        qs(
          e,
          t,
          l,
          ec,
          n
        ), w2(e, l);
      else if (Fy(
        a,
        e,
        t,
        n,
        l
      ))
        l.stopPropagation();
      else if (w2(e, l), t & 4 && -1 < ky.indexOf(e)) {
        for (; a !== null; ) {
          var i = xl(a);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var r = al(i.pendingLanes);
                  if (r !== 0) {
                    var o = i;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; r; ) {
                      var v = 1 << 31 - _t(r);
                      o.entanglements[1] |= v, r &= ~v;
                    }
                    tn(i), (De & 6) === 0 && (Bi = St() + 500, lu(0));
                  }
                }
                break;
              case 31:
              case 13:
                o = sl(i, 2), o !== null && gt(o, i, 2), Qi(), ks(i, 2);
            }
          if (i = Ws(l), i === null && qs(
            e,
            t,
            l,
            ec,
            n
          ), i === a) break;
          a = i;
        }
        a !== null && l.stopPropagation();
      } else
        qs(
          e,
          t,
          l,
          null,
          n
        );
    }
  }
  function Ws(e) {
    return e = Ic(e), $s(e);
  }
  var ec = null;
  function $s(e) {
    if (ec = null, e = Ul(e), e !== null) {
      var t = h(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = p(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = z(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ec = e, null;
  }
  function Q2(e) {
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
        switch (xh()) {
          case Zf:
            return 2;
          case Kf:
            return 8;
          case Vu:
          case jh:
            return 32;
          case Jf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Is = !1, kn = null, Fn = null, Wn = null, fu = /* @__PURE__ */ new Map(), ou = /* @__PURE__ */ new Map(), $n = [], ky = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function w2(e, t) {
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
        fu.delete(t.pointerId);
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
    }, t !== null && (t = xl(t), t !== null && B2(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function Fy(e, t, n, l, a) {
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
        return fu.set(
          i,
          du(
            fu.get(i) || null,
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
  function L2(e) {
    var t = Ul(e.target);
    if (t !== null) {
      var n = h(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = p(n), t !== null) {
            e.blockedOn = t, Pf(e.priority, function() {
              H2(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = z(n), t !== null) {
            e.blockedOn = t, Pf(e.priority, function() {
              H2(n);
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
  function tc(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ws(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        $c = l, n.target.dispatchEvent(l), $c = null;
      } else
        return t = xl(n), t !== null && B2(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Y2(e, t, n) {
    tc(e) && n.delete(t);
  }
  function Wy() {
    Is = !1, kn !== null && tc(kn) && (kn = null), Fn !== null && tc(Fn) && (Fn = null), Wn !== null && tc(Wn) && (Wn = null), fu.forEach(Y2), ou.forEach(Y2);
  }
  function nc(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Is || (Is = !0, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      Wy
    )));
  }
  var lc = null;
  function G2(e) {
    lc !== e && (lc = e, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      function() {
        lc === e && (lc = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], a = e[t + 2];
          if (typeof l != "function") {
            if ($s(l || n) === null)
              continue;
            break;
          }
          var i = xl(n);
          i !== null && (e.splice(t, 3), t -= 3, Wr(
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
      return nc(v, e);
    }
    kn !== null && nc(kn, e), Fn !== null && nc(Fn, e), Wn !== null && nc(Wn, e), fu.forEach(t), ou.forEach(t);
    for (var n = 0; n < $n.length; n++) {
      var l = $n[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < $n.length && (n = $n[0], n.blockedOn === null); )
      L2(n), n.blockedOn === null && $n.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var a = n[l], i = n[l + 1], r = a[ot] || null;
        if (typeof i == "function")
          r || G2(n);
        else if (r) {
          var o = null;
          if (i && i.hasAttribute("formAction")) {
            if (a = i, r = i[ot] || null)
              o = r.formAction;
            else if ($s(a) !== null) continue;
          } else o = r.action;
          typeof o == "function" ? n[l + 1] = o : (n.splice(l, 3), l -= 3), G2(n);
        }
      }
  }
  function V2() {
    function e(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(r) {
            return a = r;
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
  function Ps(e) {
    this._internalRoot = e;
  }
  ac.prototype.render = Ps.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    var n = t.current, l = zt();
    j2(n, l, e, t, null, null);
  }, ac.prototype.unmount = Ps.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      j2(e.current, 2, null, e, null, null), Qi(), t[Nl] = null;
    }
  };
  function ac(e) {
    this._internalRoot = e;
  }
  ac.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = If();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < $n.length && t !== 0 && t < $n[n].priority; n++) ;
      $n.splice(n, 0, e), n === 0 && L2(e);
    }
  };
  var X2 = c.version;
  if (X2 !== "19.2.3")
    throw Error(
      s(
        527,
        X2,
        "19.2.3"
      )
    );
  W.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = m(t), e = e !== null ? j(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var $y = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: D,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var uc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!uc.isDisabled && uc.supportsFiber)
      try {
        _a = uc.inject(
          $y
        ), bt = uc;
      } catch {
      }
  }
  return hu.createRoot = function(e, t) {
    if (!d(e)) throw Error(s(299));
    var n = !1, l = "", a = $0, i = I0, r = P0;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (r = t.onRecoverableError)), t = U2(
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
      r,
      V2
    ), e[Nl] = t.current, js(e), new Ps(t);
  }, hu.hydrateRoot = function(e, t, n) {
    if (!d(e)) throw Error(s(299));
    var l = !1, a = "", i = $0, r = I0, o = P0, v = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onUncaughtError !== void 0 && (i = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (o = n.onRecoverableError), n.formState !== void 0 && (v = n.formState)), t = U2(
      e,
      1,
      !0,
      t,
      n ?? null,
      l,
      a,
      v,
      i,
      r,
      o,
      V2
    ), t.context = x2(null), n = t.current, l = zt(), l = Vc(l), a = Bn(l), a.callback = null, Hn(n, a, l), n = l, t.current.lanes = n, Ca(t, n), tn(t), e[Nl] = t.current, js(e), new ac(t);
  }, hu.version = "19.2.3", hu;
}
var I2;
function uv() {
  if (I2) return tf.exports;
  I2 = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), tf.exports = av(), tf.exports;
}
var iv = uv();
const G1 = /* @__PURE__ */ Y1(iv);
var uf = { exports: {} }, cf = {};
var P2;
function cv() {
  if (P2) return cf;
  P2 = 1;
  var u = Nc();
  function c(g, m) {
    return g === m && (g !== 0 || 1 / g === 1 / m) || g !== g && m !== m;
  }
  var f = typeof Object.is == "function" ? Object.is : c, s = u.useSyncExternalStore, d = u.useRef, h = u.useEffect, p = u.useMemo, z = u.useDebugValue;
  return cf.useSyncExternalStoreWithSelector = function(g, m, j, S, N) {
    var Q = d(null);
    if (Q.current === null) {
      var T = { hasValue: !1, value: null };
      Q.current = T;
    } else T = Q.current;
    Q = p(
      function() {
        function x(C) {
          if (!G) {
            if (G = !0, F = C, C = S(C), N !== void 0 && T.hasValue) {
              var A = T.value;
              if (N(A, C))
                return b = A;
            }
            return b = C;
          }
          if (A = b, f(F, C)) return A;
          var R = S(C);
          return N !== void 0 && N(A, R) ? (F = C, A) : (F = C, b = R);
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
      [m, j, S, N]
    );
    var L = s(g, Q[0], Q[1]);
    return h(
      function() {
        T.hasValue = !0, T.value = L;
      },
      [L]
    ), z(L), L;
  }, cf;
}
var e1;
function rv() {
  return e1 || (e1 = 1, uf.exports = cv()), uf.exports;
}
var sv = rv();
function V1(u) {
  u();
}
function fv() {
  let u = null, c = null;
  return {
    clear() {
      u = null, c = null;
    },
    notify() {
      V1(() => {
        let f = u;
        for (; f; )
          f.callback(), f = f.next;
      });
    },
    get() {
      const f = [];
      let s = u;
      for (; s; )
        f.push(s), s = s.next;
      return f;
    },
    subscribe(f) {
      let s = !0;
      const d = c = {
        callback: f,
        next: null,
        prev: c
      };
      return d.prev ? d.prev.next = d : u = d, function() {
        !s || u === null || (s = !1, d.next ? d.next.prev = d.prev : c = d.prev, d.prev ? d.prev.next = d.next : u = d.next);
      };
    }
  };
}
var t1 = {
  notify() {
  },
  get: () => []
};
function ov(u, c) {
  let f, s = t1, d = 0, h = !1;
  function p(L) {
    j();
    const x = s.subscribe(L);
    let G = !1;
    return () => {
      G || (G = !0, x(), S());
    };
  }
  function z() {
    s.notify();
  }
  function g() {
    T.onStateChange && T.onStateChange();
  }
  function m() {
    return h;
  }
  function j() {
    d++, f || (f = u.subscribe(g), s = fv());
  }
  function S() {
    d--, f && d === 0 && (f(), f = void 0, s.clear(), s = t1);
  }
  function N() {
    h || (h = !0, j());
  }
  function Q() {
    h && (h = !1, S());
  }
  const T = {
    addNestedSub: p,
    notifyNestedSubs: z,
    handleChangeWrapper: g,
    isSubscribed: m,
    trySubscribe: N,
    tryUnsubscribe: Q,
    getListeners: () => s
  };
  return T;
}
var dv = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", hv = /* @__PURE__ */ dv(), mv = () => typeof navigator < "u" && navigator.product === "ReactNative", yv = /* @__PURE__ */ mv(), vv = () => hv || yv ? ie.useLayoutEffect : ie.useEffect, gv = /* @__PURE__ */ vv();
function n1(u, c) {
  return u === c ? u !== 0 || c !== 0 || 1 / u === 1 / c : u !== u && c !== c;
}
function Cu(u, c) {
  if (n1(u, c)) return !0;
  if (typeof u != "object" || u === null || typeof c != "object" || c === null)
    return !1;
  const f = Object.keys(u), s = Object.keys(c);
  if (f.length !== s.length) return !1;
  for (let d = 0; d < f.length; d++)
    if (!Object.prototype.hasOwnProperty.call(c, f[d]) || !n1(u[f[d]], c[f[d]]))
      return !1;
  return !0;
}
var pv = /* @__PURE__ */ Symbol.for("react-redux-context"), Sv = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function bv() {
  if (!ie.createContext) return {};
  const u = Sv[pv] ??= /* @__PURE__ */ new Map();
  let c = u.get(ie.createContext);
  return c || (c = ie.createContext(
    null
  ), u.set(ie.createContext, c)), c;
}
var el = /* @__PURE__ */ bv();
function _v(u) {
  const { children: c, context: f, serverState: s, store: d } = u, h = ie.useMemo(() => {
    const g = ov(d);
    return {
      store: d,
      subscription: g,
      getServerState: s ? () => s : void 0
    };
  }, [d, s]), p = ie.useMemo(() => d.getState(), [d]);
  gv(() => {
    const { subscription: g } = h;
    return g.onStateChange = g.notifyNestedSubs, g.trySubscribe(), p !== d.getState() && g.notifyNestedSubs(), () => {
      g.tryUnsubscribe(), g.onStateChange = void 0;
    };
  }, [h, p]);
  const z = f || el;
  return /* @__PURE__ */ ie.createElement(z.Provider, { value: h }, c);
}
var Sf = _v;
function xf(u = el) {
  return function() {
    return ie.useContext(u);
  };
}
var X1 = /* @__PURE__ */ xf();
function Z1(u = el) {
  const c = u === el ? X1 : (
    // @ts-ignore
    xf(u)
  ), f = () => {
    const { store: s } = c();
    return s;
  };
  return Object.assign(f, {
    withTypes: () => f
  }), f;
}
var K1 = /* @__PURE__ */ Z1();
function Ev(u = el) {
  const c = u === el ? K1 : Z1(u), f = () => c().dispatch;
  return Object.assign(f, {
    withTypes: () => f
  }), f;
}
var J1 = /* @__PURE__ */ Ev(), Cv = (u, c) => u === c;
function Tv(u = el) {
  const c = u === el ? X1 : xf(u), f = (s, d = {}) => {
    const { equalityFn: h = Cv } = typeof d == "function" ? { equalityFn: d } : d, p = c(), { store: z, subscription: g, getServerState: m } = p;
    ie.useRef(!0);
    const j = ie.useCallback(
      {
        [s.name](N) {
          return s(N);
        }
      }[s.name],
      [s]
    ), S = sv.useSyncExternalStoreWithSelector(
      g.addNestedSub,
      z.getState,
      m || z.getState,
      j,
      h
    );
    return ie.useDebugValue(S), S;
  };
  return Object.assign(f, {
    withTypes: () => f
  }), f;
}
var k1 = /* @__PURE__ */ Tv(), Av = V1;
function it(u) {
  return `Minified Redux error #${u}; visit https://redux.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
}
var Mv = typeof Symbol == "function" && Symbol.observable || "@@observable", l1 = Mv, rf = () => Math.random().toString(36).substring(7).split("").join("."), Dv = {
  INIT: `@@redux/INIT${/* @__PURE__ */ rf()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ rf()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${rf()}`
}, gc = Dv;
function tl(u) {
  if (typeof u != "object" || u === null)
    return !1;
  let c = u;
  for (; Object.getPrototypeOf(c) !== null; )
    c = Object.getPrototypeOf(c);
  return Object.getPrototypeOf(u) === c || Object.getPrototypeOf(u) === null;
}
function F1(u, c, f) {
  if (typeof u != "function")
    throw new Error(it(2));
  if (typeof c == "function" && typeof f == "function" || typeof f == "function" && typeof arguments[3] == "function")
    throw new Error(it(0));
  if (typeof c == "function" && typeof f > "u" && (f = c, c = void 0), typeof f < "u") {
    if (typeof f != "function")
      throw new Error(it(1));
    return f(F1)(u, c);
  }
  let s = u, d = c, h = /* @__PURE__ */ new Map(), p = h, z = 0, g = !1;
  function m() {
    p === h && (p = /* @__PURE__ */ new Map(), h.forEach((x, G) => {
      p.set(G, x);
    }));
  }
  function j() {
    if (g)
      throw new Error(it(3));
    return d;
  }
  function S(x) {
    if (typeof x != "function")
      throw new Error(it(4));
    if (g)
      throw new Error(it(5));
    let G = !0;
    m();
    const F = z++;
    return p.set(F, x), function() {
      if (G) {
        if (g)
          throw new Error(it(6));
        G = !1, m(), p.delete(F), h = null;
      }
    };
  }
  function N(x) {
    if (!tl(x))
      throw new Error(it(7));
    if (typeof x.type > "u")
      throw new Error(it(8));
    if (typeof x.type != "string")
      throw new Error(it(17));
    if (g)
      throw new Error(it(9));
    try {
      g = !0, d = s(d, x);
    } finally {
      g = !1;
    }
    return (h = p).forEach((F) => {
      F();
    }), x;
  }
  function Q(x) {
    if (typeof x != "function")
      throw new Error(it(10));
    s = x, N({
      type: gc.REPLACE
    });
  }
  function T() {
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
      [l1]() {
        return this;
      }
    };
  }
  return N({
    type: gc.INIT
  }), {
    dispatch: N,
    subscribe: S,
    getState: j,
    replaceReducer: Q,
    [l1]: T
  };
}
function zv(u) {
  Object.keys(u).forEach((c) => {
    const f = u[c];
    if (typeof f(void 0, {
      type: gc.INIT
    }) > "u")
      throw new Error(it(12));
    if (typeof f(void 0, {
      type: gc.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(it(13));
  });
}
function W1(u) {
  const c = Object.keys(u), f = {};
  for (let h = 0; h < c.length; h++) {
    const p = c[h];
    typeof u[p] == "function" && (f[p] = u[p]);
  }
  const s = Object.keys(f);
  let d;
  try {
    zv(f);
  } catch (h) {
    d = h;
  }
  return function(p = {}, z) {
    if (d)
      throw d;
    let g = !1;
    const m = {};
    for (let j = 0; j < s.length; j++) {
      const S = s[j], N = f[S], Q = p[S], T = N(Q, z);
      if (typeof T > "u")
        throw z && z.type, new Error(it(14));
      m[S] = T, g = g || T !== Q;
    }
    return g = g || s.length !== Object.keys(p).length, g ? m : p;
  };
}
function pc(...u) {
  return u.length === 0 ? (c) => c : u.length === 1 ? u[0] : u.reduce((c, f) => (...s) => c(f(...s)));
}
function Ov(...u) {
  return (c) => (f, s) => {
    const d = c(f, s);
    let h = () => {
      throw new Error(it(15));
    };
    const p = {
      getState: d.getState,
      dispatch: (g, ...m) => h(g, ...m)
    }, z = u.map((g) => g(p));
    return h = pc(...z)(d.dispatch), {
      ...d,
      dispatch: h
    };
  };
}
function $1(u) {
  return tl(u) && "type" in u && typeof u.type == "string";
}
var jf = /* @__PURE__ */ Symbol.for("immer-nothing"), Tu = /* @__PURE__ */ Symbol.for("immer-draftable"), Ie = /* @__PURE__ */ Symbol.for("immer-state");
function ct(u, ...c) {
  throw new Error(
    `[Immer] minified error nr: ${u}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Rt = Object, Al = Rt.getPrototypeOf, Du = "constructor", ju = "prototype", bf = "configurable", Sc = "enumerable", mc = "writable", zu = "value", Nt = (u) => !!u && !!u[Ie];
function Ut(u) {
  return u ? I1(u) || Bu(u) || !!u[Tu] || !!u[Du]?.[Tu] || Hu(u) || Qu(u) : !1;
}
var Rv = Rt[ju][Du].toString(), a1 = /* @__PURE__ */ new WeakMap();
function I1(u) {
  if (!u || !ga(u))
    return !1;
  const c = Al(u);
  if (c === null || c === Rt[ju])
    return !0;
  const f = Rt.hasOwnProperty.call(c, Du) && c[Du];
  if (f === Object)
    return !0;
  if (!Tl(f))
    return !1;
  let s = a1.get(f);
  return s === void 0 && (s = Function.toString.call(f), a1.set(f, s)), s === Rv;
}
function Nv(u) {
  return Nt(u) || ct(15, u), u[Ie].base_;
}
function qu(u, c, f = !0) {
  Ml(u) === 0 ? (f ? Reflect.ownKeys(u) : Rt.keys(u)).forEach((d) => {
    c(d, u[d], u);
  }) : u.forEach((s, d) => c(d, s, u));
}
function Ml(u) {
  const c = u[Ie];
  return c ? c.type_ : Bu(u) ? 1 : Hu(u) ? 2 : Qu(u) ? 3 : 0;
}
var Au = (u, c, f = Ml(u)) => f === 2 ? u.has(c) : Rt[ju].hasOwnProperty.call(u, c), Cn = (u, c, f = Ml(u)) => (
  // @ts-ignore
  f === 2 ? u.get(c) : u[c]
), bc = (u, c, f, s = Ml(u)) => {
  s === 2 ? u.set(c, f) : s === 3 ? u.add(f) : u[c] = f;
};
function Uv(u, c) {
  return u === c ? u !== 0 || 1 / u === 1 / c : u !== u && c !== c;
}
var Bu = Array.isArray, Hu = (u) => u instanceof Map, Qu = (u) => u instanceof Set, ga = (u) => typeof u == "object", Tl = (u) => typeof u == "function", sf = (u) => typeof u == "boolean";
function xv(u) {
  const c = +u;
  return Number.isInteger(c) && String(c) === u;
}
var jv = (u) => ga(u) ? u?.[Ie] : null, Tn = (u) => u.copy_ || u.base_, qf = (u) => u.modified_ ? u.copy_ : u.base_;
function _f(u, c) {
  if (Hu(u))
    return new Map(u);
  if (Qu(u))
    return new Set(u);
  if (Bu(u))
    return Array[ju].slice.call(u);
  const f = I1(u);
  if (c === !0 || c === "class_only" && !f) {
    const s = Rt.getOwnPropertyDescriptors(u);
    delete s[Ie];
    let d = Reflect.ownKeys(s);
    for (let h = 0; h < d.length; h++) {
      const p = d[h], z = s[p];
      z[mc] === !1 && (z[mc] = !0, z[bf] = !0), (z.get || z.set) && (s[p] = {
        [bf]: !0,
        [mc]: !0,
        // could live with !!desc.set as well here...
        [Sc]: z[Sc],
        [zu]: u[p]
      });
    }
    return Rt.create(Al(u), s);
  } else {
    const s = Al(u);
    if (s !== null && f)
      return { ...u };
    const d = Rt.create(s);
    return Rt.assign(d, u);
  }
}
function Bf(u, c = !1) {
  return Uc(u) || Nt(u) || !Ut(u) || (Ml(u) > 1 && Rt.defineProperties(u, {
    set: ic,
    add: ic,
    clear: ic,
    delete: ic
  }), Rt.freeze(u), c && qu(
    u,
    (f, s) => {
      Bf(s, !0);
    },
    !1
  )), u;
}
function qv() {
  ct(2);
}
var ic = {
  [zu]: qv
};
function Uc(u) {
  return u === null || !ga(u) ? !0 : Rt.isFrozen(u);
}
var _c = "MapSet", Ec = "Patches", u1 = "ArrayMethods", Cc = {};
function Dl(u) {
  const c = Cc[u];
  return c || ct(0, u), c;
}
var i1 = (u) => !!Cc[u];
function Bv(u, c) {
  Cc[u] || (Cc[u] = c);
}
var Ou, P1 = () => Ou, Hv = (u, c) => ({
  drafts_: [],
  parent_: u,
  immer_: c,
  // Whenever the modified draft contains a draft from another scope, we
  // need to prevent auto-freezing so the unowned draft can be finalized.
  canAutoFreeze_: !0,
  unfinalizedDrafts_: 0,
  handledSet_: /* @__PURE__ */ new Set(),
  processedForPatches_: /* @__PURE__ */ new Set(),
  mapSetPlugin_: i1(_c) ? Dl(_c) : void 0,
  arrayMethodsPlugin_: i1(u1) ? Dl(u1) : void 0
});
function c1(u, c) {
  c && (u.patchPlugin_ = Dl(Ec), u.patches_ = [], u.inversePatches_ = [], u.patchListener_ = c);
}
function Ef(u) {
  Cf(u), u.drafts_.forEach(Qv), u.drafts_ = null;
}
function Cf(u) {
  u === Ou && (Ou = u.parent_);
}
var r1 = (u) => Ou = Hv(Ou, u);
function Qv(u) {
  const c = u[Ie];
  c.type_ === 0 || c.type_ === 1 ? c.revoke_() : c.revoked_ = !0;
}
function s1(u, c) {
  c.unfinalizedDrafts_ = c.drafts_.length;
  const f = c.drafts_[0];
  if (u !== void 0 && u !== f) {
    f[Ie].modified_ && (Ef(c), ct(4)), Ut(u) && (u = f1(c, u));
    const { patchPlugin_: d } = c;
    d && d.generateReplacementPatches_(
      f[Ie].base_,
      u,
      c
    );
  } else
    u = f1(c, f);
  return wv(c, u, !0), Ef(c), c.patches_ && c.patchListener_(c.patches_, c.inversePatches_), u !== jf ? u : void 0;
}
function f1(u, c) {
  if (Uc(c))
    return c;
  const f = c[Ie];
  if (!f)
    return Tc(c, u.handledSet_, u);
  if (!xc(f, u))
    return c;
  if (!f.modified_)
    return f.base_;
  if (!f.finalized_) {
    const { callbacks_: s } = f;
    if (s)
      for (; s.length > 0; )
        s.pop()(u);
    nh(f, u);
  }
  return f.copy_;
}
function wv(u, c, f = !1) {
  !u.parent_ && u.immer_.autoFreeze_ && u.canAutoFreeze_ && Bf(c, f);
}
function eh(u) {
  u.finalized_ = !0, u.scope_.unfinalizedDrafts_--;
}
var xc = (u, c) => u.scope_ === c, Lv = [];
function th(u, c, f, s) {
  const d = Tn(u), h = u.type_;
  if (s !== void 0 && Cn(d, s, h) === c) {
    bc(d, s, f, h);
    return;
  }
  if (!u.draftLocations_) {
    const z = u.draftLocations_ = /* @__PURE__ */ new Map();
    qu(d, (g, m) => {
      if (Nt(m)) {
        const j = z.get(m) || [];
        j.push(g), z.set(m, j);
      }
    });
  }
  const p = u.draftLocations_.get(c) ?? Lv;
  for (const z of p)
    bc(d, z, f, h);
}
function Yv(u, c, f) {
  u.callbacks_.push(function(d) {
    const h = c;
    if (!h || !xc(h, d))
      return;
    d.mapSetPlugin_?.fixSetContents(h);
    const p = qf(h);
    th(u, h.draft_ ?? h, p, f), nh(h, d);
  });
}
function nh(u, c) {
  if (u.modified_ && !u.finalized_ && (u.type_ === 3 || u.type_ === 1 && u.allIndicesReassigned_ || (u.assigned_?.size ?? 0) > 0)) {
    const { patchPlugin_: s } = c;
    if (s) {
      const d = s.getPath(u);
      d && s.generatePatches_(u, d, c);
    }
    eh(u);
  }
}
function Gv(u, c, f) {
  const { scope_: s } = u;
  if (Nt(f)) {
    const d = f[Ie];
    xc(d, s) && d.callbacks_.push(function() {
      yc(u);
      const p = qf(d);
      th(u, f, p, c);
    });
  } else Ut(f) && u.callbacks_.push(function() {
    const h = Tn(u);
    u.type_ === 3 ? h.has(f) && Tc(f, s.handledSet_, s) : Cn(h, c, u.type_) === f && s.drafts_.length > 1 && (u.assigned_.get(c) ?? !1) === !0 && u.copy_ && Tc(
      Cn(u.copy_, c, u.type_),
      s.handledSet_,
      s
    );
  });
}
function Tc(u, c, f) {
  return !f.immer_.autoFreeze_ && f.unfinalizedDrafts_ < 1 || Nt(u) || c.has(u) || !Ut(u) || Uc(u) || (c.add(u), qu(u, (s, d) => {
    if (Nt(d)) {
      const h = d[Ie];
      if (xc(h, f)) {
        const p = qf(h);
        bc(u, s, p, u.type_), eh(h);
      }
    } else Ut(d) && Tc(d, c, f);
  })), u;
}
function Vv(u, c) {
  const f = Bu(u), s = {
    type_: f ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: c ? c.scope_ : P1(),
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
  let d = s, h = Ac;
  f && (d = [s], h = Ru);
  const { revoke: p, proxy: z } = Proxy.revocable(d, h);
  return s.draft_ = z, s.revoke_ = p, [z, s];
}
var Ac = {
  get(u, c) {
    if (c === Ie)
      return u;
    let f = u.scope_.arrayMethodsPlugin_;
    const s = u.type_ === 1 && typeof c == "string";
    if (s && f?.isArrayOperationMethod(c))
      return f.createMethodInterceptor(u, c);
    const d = Tn(u);
    if (!Au(d, c, u.type_))
      return Xv(u, d, c);
    const h = d[c];
    if (u.finalized_ || !Ut(h) || s && u.operationMethod && f?.isMutatingArrayMethod(
      u.operationMethod
    ) && xv(c))
      return h;
    if (h === ff(u.base_, c)) {
      yc(u);
      const p = u.type_ === 1 ? +c : c, z = Af(u.scope_, h, u, p);
      return u.copy_[p] = z;
    }
    return h;
  },
  has(u, c) {
    return c in Tn(u);
  },
  ownKeys(u) {
    return Reflect.ownKeys(Tn(u));
  },
  set(u, c, f) {
    const s = lh(Tn(u), c);
    if (s?.set)
      return s.set.call(u.draft_, f), !0;
    if (!u.modified_) {
      const d = ff(Tn(u), c), h = d?.[Ie];
      if (h && h.base_ === f)
        return u.copy_[c] = f, u.assigned_.set(c, !1), !0;
      if (Uv(f, d) && (f !== void 0 || Au(u.base_, c, u.type_)))
        return !0;
      yc(u), Tf(u);
    }
    return u.copy_[c] === f && // special case: handle new props with value 'undefined'
    (f !== void 0 || c in u.copy_) || // special case: NaN
    Number.isNaN(f) && Number.isNaN(u.copy_[c]) || (u.copy_[c] = f, u.assigned_.set(c, !0), Gv(u, c, f)), !0;
  },
  deleteProperty(u, c) {
    return yc(u), ff(u.base_, c) !== void 0 || c in u.base_ ? (u.assigned_.set(c, !1), Tf(u)) : u.assigned_.delete(c), u.copy_ && delete u.copy_[c], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(u, c) {
    const f = Tn(u), s = Reflect.getOwnPropertyDescriptor(f, c);
    return s && {
      [mc]: !0,
      [bf]: u.type_ !== 1 || c !== "length",
      [Sc]: s[Sc],
      [zu]: f[c]
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
}, Ru = {};
for (let u in Ac) {
  let c = Ac[u];
  Ru[u] = function() {
    const f = arguments;
    return f[0] = f[0][0], c.apply(this, f);
  };
}
Ru.deleteProperty = function(u, c) {
  return Ru.set.call(this, u, c, void 0);
};
Ru.set = function(u, c, f) {
  return Ac.set.call(this, u[0], c, f, u[0]);
};
function ff(u, c) {
  const f = u[Ie];
  return (f ? Tn(f) : u)[c];
}
function Xv(u, c, f) {
  const s = lh(c, f);
  return s ? zu in s ? s[zu] : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    s.get?.call(u.draft_)
  ) : void 0;
}
function lh(u, c) {
  if (!(c in u))
    return;
  let f = Al(u);
  for (; f; ) {
    const s = Object.getOwnPropertyDescriptor(f, c);
    if (s)
      return s;
    f = Al(f);
  }
}
function Tf(u) {
  u.modified_ || (u.modified_ = !0, u.parent_ && Tf(u.parent_));
}
function yc(u) {
  u.copy_ || (u.assigned_ = /* @__PURE__ */ new Map(), u.copy_ = _f(
    u.base_,
    u.scope_.immer_.useStrictShallowCopy_
  ));
}
var Zv = class {
  constructor(u) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (c, f, s) => {
      if (Tl(c) && !Tl(f)) {
        const h = f;
        f = c;
        const p = this;
        return function(g = h, ...m) {
          return p.produce(g, (j) => f.call(this, j, ...m));
        };
      }
      Tl(f) || ct(6), s !== void 0 && !Tl(s) && ct(7);
      let d;
      if (Ut(c)) {
        const h = r1(this), p = Af(h, c, void 0);
        let z = !0;
        try {
          d = f(p), z = !1;
        } finally {
          z ? Ef(h) : Cf(h);
        }
        return c1(h, s), s1(d, h);
      } else if (!c || !ga(c)) {
        if (d = f(c), d === void 0 && (d = c), d === jf && (d = void 0), this.autoFreeze_ && Bf(d, !0), s) {
          const h = [], p = [];
          Dl(Ec).generateReplacementPatches_(c, d, {
            patches_: h,
            inversePatches_: p
          }), s(h, p);
        }
        return d;
      } else
        ct(1, c);
    }, this.produceWithPatches = (c, f) => {
      if (Tl(c))
        return (p, ...z) => this.produceWithPatches(p, (g) => c(g, ...z));
      let s, d;
      return [this.produce(c, f, (p, z) => {
        s = p, d = z;
      }), s, d];
    }, sf(u?.autoFreeze) && this.setAutoFreeze(u.autoFreeze), sf(u?.useStrictShallowCopy) && this.setUseStrictShallowCopy(u.useStrictShallowCopy), sf(u?.useStrictIteration) && this.setUseStrictIteration(u.useStrictIteration);
  }
  createDraft(u) {
    Ut(u) || ct(8), Nt(u) && (u = ah(u));
    const c = r1(this), f = Af(c, u, void 0);
    return f[Ie].isManual_ = !0, Cf(c), f;
  }
  finishDraft(u, c) {
    const f = u && u[Ie];
    (!f || !f.isManual_) && ct(9);
    const { scope_: s } = f;
    return c1(s, c), s1(void 0, s);
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
    let f;
    for (f = c.length - 1; f >= 0; f--) {
      const d = c[f];
      if (d.path.length === 0 && d.op === "replace") {
        u = d.value;
        break;
      }
    }
    f > -1 && (c = c.slice(f + 1));
    const s = Dl(Ec).applyPatches_;
    return Nt(u) ? s(u, c) : this.produce(
      u,
      (d) => s(d, c)
    );
  }
};
function Af(u, c, f, s) {
  const [d, h] = Hu(c) ? Dl(_c).proxyMap_(c, f) : Qu(c) ? Dl(_c).proxySet_(c, f) : Vv(c, f);
  return (f?.scope_ ?? P1()).drafts_.push(d), h.callbacks_ = f?.callbacks_ ?? [], h.key_ = s, f && s !== void 0 ? Yv(f, h, s) : h.callbacks_.push(function(g) {
    g.mapSetPlugin_?.fixSetContents(h);
    const { patchPlugin_: m } = g;
    h.modified_ && m && m.generatePatches_(h, [], g);
  }), d;
}
function ah(u) {
  return Nt(u) || ct(10, u), uh(u);
}
function uh(u) {
  if (!Ut(u) || Uc(u))
    return u;
  const c = u[Ie];
  let f, s = !0;
  if (c) {
    if (!c.modified_)
      return c.base_;
    c.finalized_ = !0, f = _f(u, c.scope_.immer_.useStrictShallowCopy_), s = c.scope_.immer_.shouldUseStrictIteration();
  } else
    f = _f(u, !0);
  return qu(
    f,
    (d, h) => {
      bc(f, d, uh(h));
    },
    s
  ), c && (c.finalized_ = !1), f;
}
function Kv() {
  function c(T, L = []) {
    if (T.key_ !== void 0) {
      const x = T.parent_.copy_ ?? T.parent_.base_, G = jv(Cn(x, T.key_)), F = Cn(x, T.key_);
      if (F === void 0 || F !== T.draft_ && F !== T.base_ && F !== T.copy_ || G != null && G.base_ !== T.base_)
        return null;
      const b = T.parent_.type_ === 3;
      let O;
      if (b) {
        const C = T.parent_;
        O = Array.from(C.drafts_.keys()).indexOf(T.key_);
      } else
        O = T.key_;
      if (!(b && x.size > O || Au(x, O)))
        return null;
      L.push(O);
    }
    if (T.parent_)
      return c(T.parent_, L);
    L.reverse();
    try {
      f(T.copy_, L);
    } catch {
      return null;
    }
    return L;
  }
  function f(T, L) {
    let x = T;
    for (let G = 0; G < L.length - 1; G++) {
      const F = L[G];
      if (x = Cn(x, F), !ga(x) || x === null)
        throw new Error(`Cannot resolve path at '${L.join("/")}'`);
    }
    return x;
  }
  const s = "replace", d = "add", h = "remove";
  function p(T, L, x) {
    if (T.scope_.processedForPatches_.has(T))
      return;
    T.scope_.processedForPatches_.add(T);
    const { patches_: G, inversePatches_: F } = x;
    switch (T.type_) {
      case 0:
      case 2:
        return g(
          T,
          L,
          G,
          F
        );
      case 1:
        return z(
          T,
          L,
          G,
          F
        );
      case 3:
        return m(
          T,
          L,
          G,
          F
        );
    }
  }
  function z(T, L, x, G) {
    let { base_: F, assigned_: b } = T, O = T.copy_;
    O.length < F.length && ([F, O] = [O, F], [x, G] = [G, x]);
    const C = T.allIndicesReassigned_ === !0;
    for (let A = 0; A < F.length; A++) {
      const R = O[A], X = F[A];
      if ((C || b?.get(A.toString())) && R !== X) {
        const q = R?.[Ie];
        if (q && q.modified_)
          continue;
        const _ = L.concat([A]);
        x.push({
          op: s,
          path: _,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: Q(R)
        }), G.push({
          op: s,
          path: _,
          value: Q(X)
        });
      }
    }
    for (let A = F.length; A < O.length; A++) {
      const R = L.concat([A]);
      x.push({
        op: d,
        path: R,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: Q(O[A])
      });
    }
    for (let A = O.length - 1; F.length <= A; --A) {
      const R = L.concat([A]);
      G.push({
        op: h,
        path: R
      });
    }
  }
  function g(T, L, x, G) {
    const { base_: F, copy_: b, type_: O } = T;
    qu(T.assigned_, (C, A) => {
      const R = Cn(F, C, O), X = Cn(b, C, O), V = A ? Au(F, C) ? s : d : h;
      if (R === X && V === s)
        return;
      const q = L.concat(C);
      x.push(
        V === h ? { op: V, path: q } : { op: V, path: q, value: Q(X) }
      ), G.push(
        V === d ? { op: h, path: q } : V === h ? { op: d, path: q, value: Q(R) } : { op: s, path: q, value: Q(R) }
      );
    });
  }
  function m(T, L, x, G) {
    let { base_: F, copy_: b } = T, O = 0;
    F.forEach((C) => {
      if (!b.has(C)) {
        const A = L.concat([O]);
        x.push({
          op: h,
          path: A,
          value: C
        }), G.unshift({
          op: d,
          path: A,
          value: C
        });
      }
      O++;
    }), O = 0, b.forEach((C) => {
      if (!F.has(C)) {
        const A = L.concat([O]);
        x.push({
          op: d,
          path: A,
          value: C
        }), G.unshift({
          op: h,
          path: A,
          value: C
        });
      }
      O++;
    });
  }
  function j(T, L, x) {
    const { patches_: G, inversePatches_: F } = x;
    G.push({
      op: s,
      path: [],
      value: L === jf ? void 0 : L
    }), F.push({
      op: s,
      path: [],
      value: T
    });
  }
  function S(T, L) {
    return L.forEach((x) => {
      const { path: G, op: F } = x;
      let b = T;
      for (let R = 0; R < G.length - 1; R++) {
        const X = Ml(b);
        let V = G[R];
        typeof V != "string" && typeof V != "number" && (V = "" + V), (X === 0 || X === 1) && (V === "__proto__" || V === Du) && ct(19), Tl(b) && V === ju && ct(19), b = Cn(b, V), ga(b) || ct(18, G.join("/"));
      }
      const O = Ml(b), C = N(x.value), A = G[G.length - 1];
      switch (F) {
        case s:
          switch (O) {
            case 2:
              return b.set(A, C);
            case 3:
              ct(16);
            default:
              return b[A] = C;
          }
        case d:
          switch (O) {
            case 1:
              return A === "-" ? b.push(C) : b.splice(A, 0, C);
            case 2:
              return b.set(A, C);
            case 3:
              return b.add(C);
            default:
              return b[A] = C;
          }
        case h:
          switch (O) {
            case 1:
              return b.splice(A, 1);
            case 2:
              return b.delete(A);
            case 3:
              return b.delete(x.value);
            default:
              return delete b[A];
          }
        default:
          ct(17, F);
      }
    }), T;
  }
  function N(T) {
    if (!Ut(T))
      return T;
    if (Bu(T))
      return T.map(N);
    if (Hu(T))
      return new Map(
        Array.from(T.entries()).map(([x, G]) => [x, N(G)])
      );
    if (Qu(T))
      return new Set(Array.from(T).map(N));
    const L = Object.create(Al(T));
    for (const x in T)
      L[x] = N(T[x]);
    return Au(T, Tu) && (L[Tu] = T[Tu]), L;
  }
  function Q(T) {
    return Nt(T) ? N(T) : T;
  }
  Bv(Ec, {
    applyPatches_: S,
    generatePatches_: p,
    generateReplacementPatches_: j,
    getPath: c
  });
}
var Nu = new Zv(), wu = Nu.produce, ih = /* @__PURE__ */ Nu.produceWithPatches.bind(
  Nu
), o1 = /* @__PURE__ */ Nu.applyPatches.bind(Nu);
function Jv(u, c = `expected a function, instead received ${typeof u}`) {
  if (typeof u != "function")
    throw new TypeError(c);
}
function kv(u, c = `expected an object, instead received ${typeof u}`) {
  if (typeof u != "object")
    throw new TypeError(c);
}
function Fv(u, c = "expected all items to be functions, instead received the following types: ") {
  if (!u.every((f) => typeof f == "function")) {
    const f = u.map(
      (s) => typeof s == "function" ? `function ${s.name || "unnamed"}()` : typeof s
    ).join(", ");
    throw new TypeError(`${c}[${f}]`);
  }
}
var d1 = (u) => Array.isArray(u) ? u : [u];
function Wv(u) {
  const c = Array.isArray(u[0]) ? u[0] : u;
  return Fv(
    c,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), c;
}
function $v(u, c) {
  const f = [], { length: s } = u;
  for (let d = 0; d < s; d++)
    f.push(u[d].apply(null, c));
  return f;
}
var Iv = class {
  constructor(u) {
    this.value = u;
  }
  deref() {
    return this.value;
  }
}, Pv = typeof WeakRef < "u" ? WeakRef : Iv, eg = 0, h1 = 1;
function cc() {
  return {
    s: eg,
    v: void 0,
    o: null,
    p: null
  };
}
function Mc(u, c = {}) {
  let f = cc();
  const { resultEqualityCheck: s } = c;
  let d, h = 0;
  function p() {
    let z = f;
    const { length: g } = arguments;
    for (let S = 0, N = g; S < N; S++) {
      const Q = arguments[S];
      if (typeof Q == "function" || typeof Q == "object" && Q !== null) {
        let T = z.o;
        T === null && (z.o = T = /* @__PURE__ */ new WeakMap());
        const L = T.get(Q);
        L === void 0 ? (z = cc(), T.set(Q, z)) : z = L;
      } else {
        let T = z.p;
        T === null && (z.p = T = /* @__PURE__ */ new Map());
        const L = T.get(Q);
        L === void 0 ? (z = cc(), T.set(Q, z)) : z = L;
      }
    }
    const m = z;
    let j;
    if (z.s === h1)
      j = z.v;
    else if (j = u.apply(null, arguments), h++, s) {
      const S = d?.deref?.() ?? d;
      S != null && s(S, j) && (j = S, h !== 0 && h--), d = typeof j == "object" && j !== null || typeof j == "function" ? new Pv(j) : j;
    }
    return m.s = h1, m.v = j, j;
  }
  return p.clearCache = () => {
    f = cc(), p.resetResultsCount();
  }, p.resultsCount = () => h, p.resetResultsCount = () => {
    h = 0;
  }, p;
}
function tg(u, ...c) {
  const f = typeof u == "function" ? {
    memoize: u,
    memoizeOptions: c
  } : u, s = (...d) => {
    let h = 0, p = 0, z, g = {}, m = d.pop();
    typeof m == "object" && (g = m, m = d.pop()), Jv(
      m,
      `createSelector expects an output function after the inputs, but received: [${typeof m}]`
    );
    const j = {
      ...f,
      ...g
    }, {
      memoize: S,
      memoizeOptions: N = [],
      argsMemoize: Q = Mc,
      argsMemoizeOptions: T = []
    } = j, L = d1(N), x = d1(T), G = Wv(d), F = S(function() {
      return h++, m.apply(
        null,
        arguments
      );
    }, ...L), b = Q(function() {
      p++;
      const C = $v(
        G,
        arguments
      );
      return z = F.apply(null, C), z;
    }, ...x);
    return Object.assign(b, {
      resultFunc: m,
      memoizedResultFunc: F,
      dependencies: G,
      dependencyRecomputations: () => p,
      resetDependencyRecomputations: () => {
        p = 0;
      },
      lastResult: () => z,
      recomputations: () => h,
      resetRecomputations: () => {
        h = 0;
      },
      memoize: S,
      argsMemoize: Q
    });
  };
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var Hf = /* @__PURE__ */ tg(Mc), ng = Object.assign(
  (u, c = Hf) => {
    kv(
      u,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof u}`
    );
    const f = Object.keys(u), s = f.map(
      (h) => u[h]
    );
    return c(
      s,
      (...h) => h.reduce((p, z, g) => (p[f[g]] = z, p), {})
    );
  },
  { withTypes: () => ng }
);
function ch(u) {
  return ({ dispatch: f, getState: s }) => (d) => (h) => typeof h == "function" ? h(f, s, u) : d(h);
}
var lg = ch(), ag = ch, ug = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? pc : pc.apply(null, arguments);
}, ig = (u) => u && typeof u.match == "function";
function Wt(u, c) {
  function f(...s) {
    if (c) {
      let d = c(...s);
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
      payload: s[0]
    };
  }
  return f.toString = () => `${u}`, f.type = u, f.match = (s) => $1(s) && s.type === u, f;
}
var rh = class Su extends Array {
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
function m1(u) {
  return Ut(u) ? wu(u, () => {
  }) : u;
}
function rc(u, c, f) {
  return u.has(c) ? u.get(c) : u.set(c, f(c)).get(c);
}
function cg(u) {
  return typeof u == "boolean";
}
var rg = () => function(c) {
  const {
    thunk: f = !0,
    immutableCheck: s = !0,
    serializableCheck: d = !0,
    actionCreatorCheck: h = !0
  } = c ?? {};
  let p = new rh();
  return f && (cg(f) ? p.push(lg) : p.push(ag(f.extraArgument))), p;
}, jc = "RTK_autoBatch", mu = () => (u) => ({
  payload: u,
  meta: {
    [jc]: !0
  }
}), y1 = (u) => (c) => {
  setTimeout(c, u);
}, sg = (u = {
  type: "raf"
}) => (c) => (...f) => {
  const s = c(...f);
  let d = !0, h = !1, p = !1;
  const z = /* @__PURE__ */ new Set(), g = u.type === "tick" ? queueMicrotask : u.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : y1(10)
  ) : u.type === "callback" ? u.queueNotification : y1(u.timeout), m = () => {
    p = !1, h && (h = !1, z.forEach((j) => j()));
  };
  return Object.assign({}, s, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(j) {
      const S = () => d && j(), N = s.subscribe(S);
      return z.add(j), () => {
        N(), z.delete(j);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(j) {
      try {
        return d = !j?.meta?.[jc], h = !d, h && (p || (p = !0, g(m))), s.dispatch(j);
      } finally {
        d = !0;
      }
    }
  });
}, fg = (u) => function(f) {
  const {
    autoBatch: s = !0
  } = f ?? {};
  let d = new rh(u);
  return s && d.push(sg(typeof s == "object" ? s : void 0)), d;
};
function og(u) {
  const c = rg(), {
    reducer: f = void 0,
    middleware: s,
    devTools: d = !0,
    preloadedState: h = void 0,
    enhancers: p = void 0
  } = u || {};
  let z;
  if (typeof f == "function")
    z = f;
  else if (tl(f))
    z = W1(f);
  else
    throw new Error(Zt(1));
  let g;
  typeof s == "function" ? g = s(c) : g = c();
  let m = pc;
  d && (m = ug({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !1,
    ...typeof d == "object" && d
  }));
  const j = Ov(...g), S = fg(j);
  let N = typeof p == "function" ? p(S) : S();
  const Q = m(...N);
  return F1(z, h, Q);
}
function sh(u) {
  const c = {}, f = [];
  let s;
  const d = {
    addCase(h, p) {
      const z = typeof h == "string" ? h : h.type;
      if (!z)
        throw new Error(Zt(28));
      if (z in c)
        throw new Error(Zt(29));
      return c[z] = p, d;
    },
    addAsyncThunk(h, p) {
      return p.pending && (c[h.pending.type] = p.pending), p.rejected && (c[h.rejected.type] = p.rejected), p.fulfilled && (c[h.fulfilled.type] = p.fulfilled), p.settled && f.push({
        matcher: h.settled,
        reducer: p.settled
      }), d;
    },
    addMatcher(h, p) {
      return f.push({
        matcher: h,
        reducer: p
      }), d;
    },
    addDefaultCase(h) {
      return s = h, d;
    }
  };
  return u(d), [c, f, s];
}
function dg(u) {
  return typeof u == "function";
}
function hg(u, c) {
  let [f, s, d] = sh(c), h;
  if (dg(u))
    h = () => m1(u());
  else {
    const z = m1(u);
    h = () => z;
  }
  function p(z = h(), g) {
    let m = [f[g.type], ...s.filter(({
      matcher: j
    }) => j(g)).map(({
      reducer: j
    }) => j)];
    return m.filter((j) => !!j).length === 0 && (m = [d]), m.reduce((j, S) => {
      if (S)
        if (Nt(j)) {
          const Q = S(j, g);
          return Q === void 0 ? j : Q;
        } else {
          if (Ut(j))
            return wu(j, (N) => S(N, g));
          {
            const N = S(j, g);
            if (N === void 0) {
              if (j === null)
                return j;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return N;
          }
        }
      return j;
    }, z);
  }
  return p.getInitialState = h, p;
}
var fh = (u, c) => ig(u) ? u.match(c) : u(c);
function An(...u) {
  return (c) => u.some((f) => fh(f, c));
}
function Mu(...u) {
  return (c) => u.every((f) => fh(f, c));
}
function qc(u, c) {
  if (!u || !u.meta) return !1;
  const f = typeof u.meta.requestId == "string", s = c.indexOf(u.meta.requestStatus) > -1;
  return f && s;
}
function Lu(u) {
  return typeof u[0] == "function" && "pending" in u[0] && "fulfilled" in u[0] && "rejected" in u[0];
}
function Qf(...u) {
  return u.length === 0 ? (c) => qc(c, ["pending"]) : Lu(u) ? An(...u.map((c) => c.pending)) : Qf()(u[0]);
}
function pa(...u) {
  return u.length === 0 ? (c) => qc(c, ["rejected"]) : Lu(u) ? An(...u.map((c) => c.rejected)) : pa()(u[0]);
}
function Bc(...u) {
  const c = (f) => f && f.meta && f.meta.rejectedWithValue;
  return u.length === 0 ? Mu(pa(...u), c) : Lu(u) ? Mu(pa(...u), c) : Bc()(u[0]);
}
function nl(...u) {
  return u.length === 0 ? (c) => qc(c, ["fulfilled"]) : Lu(u) ? An(...u.map((c) => c.fulfilled)) : nl()(u[0]);
}
function Mf(...u) {
  return u.length === 0 ? (c) => qc(c, ["pending", "fulfilled", "rejected"]) : Lu(u) ? An(...u.flatMap((c) => [c.pending, c.rejected, c.fulfilled])) : Mf()(u[0]);
}
var mg = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", wf = (u = 21) => {
  let c = "", f = u;
  for (; f--; )
    c += mg[Math.random() * 64 | 0];
  return c;
}, yg = ["name", "message", "stack", "code"], of = class {
  constructor(u, c) {
    this.payload = u, this.meta = c;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
}, v1 = class {
  constructor(u, c) {
    this.payload = u, this.meta = c;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
}, vg = (u) => {
  if (typeof u == "object" && u !== null) {
    const c = {};
    for (const f of yg)
      typeof u[f] == "string" && (c[f] = u[f]);
    return c;
  }
  return {
    message: String(u)
  };
}, g1 = "External signal was aborted", p1 = /* @__PURE__ */ (() => {
  function u(c, f, s) {
    const d = Wt(c + "/fulfilled", (g, m, j, S) => ({
      payload: g,
      meta: {
        ...S || {},
        arg: j,
        requestId: m,
        requestStatus: "fulfilled"
      }
    })), h = Wt(c + "/pending", (g, m, j) => ({
      payload: void 0,
      meta: {
        ...j || {},
        arg: m,
        requestId: g,
        requestStatus: "pending"
      }
    })), p = Wt(c + "/rejected", (g, m, j, S, N) => ({
      payload: S,
      error: (s && s.serializeError || vg)(g || "Rejected"),
      meta: {
        ...N || {},
        arg: j,
        requestId: m,
        rejectedWithValue: !!S,
        requestStatus: "rejected",
        aborted: g?.name === "AbortError",
        condition: g?.name === "ConditionError"
      }
    }));
    function z(g, {
      signal: m
    } = {}) {
      return (j, S, N) => {
        const Q = s?.idGenerator ? s.idGenerator(g) : wf(), T = new AbortController();
        let L, x;
        function G(b) {
          x = b, T.abort();
        }
        m && (m.aborted ? G(g1) : m.addEventListener("abort", () => G(g1), {
          once: !0
        }));
        const F = (async function() {
          let b;
          try {
            let C = s?.condition?.(g, {
              getState: S,
              extra: N
            });
            if (pg(C) && (C = await C), C === !1 || T.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const A = new Promise((R, X) => {
              L = () => {
                X({
                  name: "AbortError",
                  message: x || "Aborted"
                });
              }, T.signal.addEventListener("abort", L, {
                once: !0
              });
            });
            j(h(Q, g, s?.getPendingMeta?.({
              requestId: Q,
              arg: g
            }, {
              getState: S,
              extra: N
            }))), b = await Promise.race([A, Promise.resolve(f(g, {
              dispatch: j,
              getState: S,
              extra: N,
              requestId: Q,
              signal: T.signal,
              abort: G,
              rejectWithValue: (R, X) => new of(R, X),
              fulfillWithValue: (R, X) => new v1(R, X)
            })).then((R) => {
              if (R instanceof of)
                throw R;
              return R instanceof v1 ? d(R.payload, Q, g, R.meta) : d(R, Q, g);
            })]);
          } catch (C) {
            b = C instanceof of ? p(null, Q, g, C.payload, C.meta) : p(C, Q, g);
          } finally {
            L && T.signal.removeEventListener("abort", L);
          }
          return s && !s.dispatchConditionRejection && p.match(b) && b.meta.condition || j(b), b;
        })();
        return Object.assign(F, {
          abort: G,
          requestId: Q,
          arg: g,
          unwrap() {
            return F.then(gg);
          }
        });
      };
    }
    return Object.assign(z, {
      pending: h,
      rejected: p,
      fulfilled: d,
      settled: An(p, d),
      typePrefix: c
    });
  }
  return u.withTypes = () => u, u;
})();
function gg(u) {
  if (u.meta && u.meta.rejectedWithValue)
    throw u.payload;
  if (u.error)
    throw u.error;
  return u.payload;
}
function pg(u) {
  return u !== null && typeof u == "object" && typeof u.then == "function";
}
var Sg = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function bg(u, c) {
  return `${u}/${c}`;
}
function _g({
  creators: u
} = {}) {
  const c = u?.asyncThunk?.[Sg];
  return function(s) {
    const {
      name: d,
      reducerPath: h = d
    } = s;
    if (!d)
      throw new Error(Zt(11));
    const p = (typeof s.reducers == "function" ? s.reducers(Cg()) : s.reducers) || {}, z = Object.keys(p), g = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, m = {
      addCase(b, O) {
        const C = typeof b == "string" ? b : b.type;
        if (!C)
          throw new Error(Zt(12));
        if (C in g.sliceCaseReducersByType)
          throw new Error(Zt(13));
        return g.sliceCaseReducersByType[C] = O, m;
      },
      addMatcher(b, O) {
        return g.sliceMatchers.push({
          matcher: b,
          reducer: O
        }), m;
      },
      exposeAction(b, O) {
        return g.actionCreators[b] = O, m;
      },
      exposeCaseReducer(b, O) {
        return g.sliceCaseReducersByName[b] = O, m;
      }
    };
    z.forEach((b) => {
      const O = p[b], C = {
        reducerName: b,
        type: bg(d, b),
        createNotation: typeof s.reducers == "function"
      };
      Ag(O) ? Dg(C, O, m, c) : Tg(C, O, m);
    });
    function j() {
      const [b = {}, O = [], C = void 0] = typeof s.extraReducers == "function" ? sh(s.extraReducers) : [s.extraReducers], A = {
        ...b,
        ...g.sliceCaseReducersByType
      };
      return hg(s.initialState, (R) => {
        for (let X in A)
          R.addCase(X, A[X]);
        for (let X of g.sliceMatchers)
          R.addMatcher(X.matcher, X.reducer);
        for (let X of O)
          R.addMatcher(X.matcher, X.reducer);
        C && R.addDefaultCase(C);
      });
    }
    const S = (b) => b, N = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new WeakMap();
    let T;
    function L(b, O) {
      return T || (T = j()), T(b, O);
    }
    function x() {
      return T || (T = j()), T.getInitialState();
    }
    function G(b, O = !1) {
      function C(R) {
        let X = R[b];
        return typeof X > "u" && O && (X = rc(Q, C, x)), X;
      }
      function A(R = S) {
        const X = rc(N, O, () => /* @__PURE__ */ new WeakMap());
        return rc(X, R, () => {
          const V = {};
          for (const [q, _] of Object.entries(s.selectors ?? {}))
            V[q] = Eg(_, R, () => rc(Q, R, x), O);
          return V;
        });
      }
      return {
        reducerPath: b,
        getSelectors: A,
        get selectors() {
          return A(C);
        },
        selectSlice: C
      };
    }
    const F = {
      name: d,
      reducer: L,
      actions: g.actionCreators,
      caseReducers: g.sliceCaseReducersByName,
      getInitialState: x,
      ...G(h),
      injectInto(b, {
        reducerPath: O,
        ...C
      } = {}) {
        const A = O ?? h;
        return b.inject({
          reducerPath: A,
          reducer: L
        }, C), {
          ...F,
          ...G(A, !0)
        };
      }
    };
    return F;
  };
}
function Eg(u, c, f, s) {
  function d(h, ...p) {
    let z = c(h);
    return typeof z > "u" && s && (z = f()), u(z, ...p);
  }
  return d.unwrapped = u, d;
}
var Pn = /* @__PURE__ */ _g();
function Cg() {
  function u(c, f) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: c,
      ...f
    };
  }
  return u.withTypes = () => u, {
    reducer(c) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [c.name](...f) {
          return c(...f);
        }
      }[c.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(c, f) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: c,
        reducer: f
      };
    },
    asyncThunk: u
  };
}
function Tg({
  type: u,
  reducerName: c,
  createNotation: f
}, s, d) {
  let h, p;
  if ("reducer" in s) {
    if (f && !Mg(s))
      throw new Error(Zt(17));
    h = s.reducer, p = s.prepare;
  } else
    h = s;
  d.addCase(u, h).exposeCaseReducer(c, h).exposeAction(c, p ? Wt(u, p) : Wt(u));
}
function Ag(u) {
  return u._reducerDefinitionType === "asyncThunk";
}
function Mg(u) {
  return u._reducerDefinitionType === "reducerWithPrepare";
}
function Dg({
  type: u,
  reducerName: c
}, f, s, d) {
  if (!d)
    throw new Error(Zt(18));
  const {
    payloadCreator: h,
    fulfilled: p,
    pending: z,
    rejected: g,
    settled: m,
    options: j
  } = f, S = d(u, h, j);
  s.exposeAction(c, S), p && s.addCase(S.fulfilled, p), z && s.addCase(S.pending, z), g && s.addCase(S.rejected, g), m && s.addMatcher(S.settled, m), s.exposeCaseReducer(c, {
    fulfilled: p || sc,
    pending: z || sc,
    rejected: g || sc,
    settled: m || sc
  });
}
function sc() {
}
function Zt(u) {
  return `Minified Redux Toolkit error #${u}; visit https://redux-toolkit.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
}
var zg = class extends Error {
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
}, oh = /* @__PURE__ */ ((u) => (u.uninitialized = "uninitialized", u.pending = "pending", u.fulfilled = "fulfilled", u.rejected = "rejected", u))(oh || {}), Mn = "uninitialized", Df = "pending", bu = "fulfilled", _u = "rejected";
function S1(u) {
  return {
    status: u,
    isUninitialized: u === Mn,
    isLoading: u === Df,
    isSuccess: u === bu,
    isError: u === _u
  };
}
var b1 = tl;
function Lf(u, c) {
  if (u === c || !(b1(u) && b1(c) || Array.isArray(u) && Array.isArray(c)))
    return c;
  const f = Object.keys(c), s = Object.keys(u);
  let d = f.length === s.length;
  const h = Array.isArray(c) ? [] : {};
  for (const p of f)
    h[p] = Lf(u[p], c[p]), d && (d = u[p] === h[p]);
  return d ? u : h;
}
function zf(u, c, f) {
  return u.reduce((s, d, h) => (c(d, h) && s.push(f(d, h)), s), []).flat();
}
function Og(u) {
  return new RegExp("(^|:)//").test(u);
}
function Rg() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function Yf(u) {
  return u != null;
}
function _1(u) {
  return [...u?.values() ?? []].filter(Yf);
}
function Ng() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
var Ug = (u) => u.replace(/\/$/, ""), xg = (u) => u.replace(/^\//, "");
function jg(u, c) {
  if (!u)
    return c;
  if (!c)
    return u;
  if (Og(c))
    return c;
  const f = u.endsWith("/") || !c.startsWith("?") ? "/" : "";
  return u = Ug(u), c = xg(c), `${u}${f}${c}`;
}
function Dc(u, c, f) {
  return u.has(c) ? u.get(c) : u.set(c, f(c)).get(c);
}
var Of = () => /* @__PURE__ */ new Map(), qg = (u) => {
  const c = new AbortController();
  return setTimeout(() => {
    const f = "signal timed out", s = "TimeoutError";
    c.abort(
      // some environments (React Native, Node) don't have DOMException
      typeof DOMException < "u" ? new DOMException(f, s) : Object.assign(new Error(f), {
        name: s
      })
    );
  }, u), c.signal;
}, Bg = (...u) => {
  for (const f of u) if (f.aborted) return AbortSignal.abort(f.reason);
  const c = new AbortController();
  for (const f of u)
    f.addEventListener("abort", () => c.abort(f.reason), {
      signal: c.signal,
      once: !0
    });
  return c.signal;
}, E1 = (...u) => fetch(...u), Hg = (u) => u.status >= 200 && u.status <= 299, Qg = (u) => (
  /*applicat*/
  /ion\/(vnd\.api\+)?json/.test(u.get("content-type") || "")
);
function C1(u) {
  if (!tl(u))
    return u;
  const c = {
    ...u
  };
  for (const [f, s] of Object.entries(c))
    s === void 0 && delete c[f];
  return c;
}
var wg = (u) => typeof u == "object" && (tl(u) || Array.isArray(u) || typeof u.toJSON == "function");
function Lg({
  baseUrl: u,
  prepareHeaders: c = (S) => S,
  fetchFn: f = E1,
  paramsSerializer: s,
  isJsonContentType: d = Qg,
  jsonContentType: h = "application/json",
  jsonReplacer: p,
  timeout: z,
  responseHandler: g,
  validateStatus: m,
  ...j
} = {}) {
  return typeof fetch > "u" && f === E1 && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), async (N, Q, T) => {
    const {
      getState: L,
      extra: x,
      endpoint: G,
      forced: F,
      type: b
    } = Q;
    let O, {
      url: C,
      headers: A = new Headers(j.headers),
      params: R = void 0,
      responseHandler: X = g ?? "json",
      validateStatus: V = m ?? Hg,
      timeout: q = z,
      ..._
    } = typeof N == "string" ? {
      url: N
    } : N, M = {
      ...j,
      signal: q ? Bg(Q.signal, qg(q)) : Q.signal,
      ..._
    };
    A = new Headers(C1(A)), M.headers = await c(A, {
      getState: L,
      arg: N,
      extra: x,
      endpoint: G,
      forced: F,
      type: b,
      extraOptions: T
    }) || A;
    const Y = wg(M.body);
    if (M.body != null && !Y && typeof M.body != "string" && M.headers.delete("content-type"), !M.headers.has("content-type") && Y && M.headers.set("content-type", h), Y && d(M.headers) && (M.body = JSON.stringify(M.body, p)), M.headers.has("accept") || (X === "json" ? M.headers.set("accept", "application/json") : X === "text" && M.headers.set("accept", "text/plain, text/html, */*")), R) {
      const ue = ~C.indexOf("?") ? "&" : "?", y = s ? s(R) : new URLSearchParams(C1(R));
      C += ue + y;
    }
    C = jg(u, C);
    const $ = new Request(C, M);
    O = {
      request: new Request(C, M)
    };
    let D;
    try {
      D = await f($);
    } catch (ue) {
      return {
        error: {
          status: (ue instanceof Error || typeof DOMException < "u" && ue instanceof DOMException) && ue.name === "TimeoutError" ? "TIMEOUT_ERROR" : "FETCH_ERROR",
          error: String(ue)
        },
        meta: O
      };
    }
    const W = D.clone();
    O.response = W;
    let P, te = "";
    try {
      let ue;
      if (await Promise.all([
        S(D, X).then((y) => P = y, (y) => ue = y),
        // see https://github.com/node-fetch/node-fetch/issues/665#issuecomment-538995182
        // we *have* to "use up" both streams at the same time or they will stop running in node-fetch scenarios
        W.text().then((y) => te = y, () => {
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
        meta: O
      };
    }
    return V(D, P) ? {
      data: P,
      meta: O
    } : {
      error: {
        status: D.status,
        data: P
      },
      meta: O
    };
  };
  async function S(N, Q) {
    if (typeof Q == "function")
      return Q(N);
    if (Q === "content-type" && (Q = d(N.headers) ? "json" : "text"), Q === "json") {
      const T = await N.text();
      return T.length ? JSON.parse(T) : null;
    }
    return N.text();
  }
}
var T1 = class {
  constructor(u, c = void 0) {
    this.value = u, this.meta = c;
  }
}, Hc = "__rtkq/", Yg = "online", Gg = "offline", dh = "focused", Gf = /* @__PURE__ */ Wt(`${Hc}${dh}`), hh = /* @__PURE__ */ Wt(`${Hc}un${dh}`), Vf = /* @__PURE__ */ Wt(`${Hc}${Yg}`), mh = /* @__PURE__ */ Wt(`${Hc}${Gg}`), Yu = "query", yh = "mutation", vh = "infinitequery";
function Qc(u) {
  return u.type === Yu;
}
function Vg(u) {
  return u.type === yh;
}
function wc(u) {
  return u.type === vh;
}
function zc(u) {
  return Qc(u) || wc(u);
}
function Xf(u, c, f, s, d, h) {
  const p = Xg(u) ? u(c, f, s, d) : u;
  return p ? zf(p, Yf, (z) => h(gh(z))) : [];
}
function Xg(u) {
  return typeof u == "function";
}
function gh(u) {
  return typeof u == "string" ? {
    type: u
  } : u;
}
function Zg(u, c) {
  return u.catch(c);
}
var Sa = (u, c) => u.endpointDefinitions[c], Uu = /* @__PURE__ */ Symbol("forceQueryFn"), Rf = (u) => typeof u[Uu] == "function";
function Kg({
  serializeQueryArgs: u,
  queryThunk: c,
  infiniteQueryThunk: f,
  mutationThunk: s,
  api: d,
  context: h,
  getInternalState: p
}) {
  const z = (O) => p(O)?.runningQueries, g = (O) => p(O)?.runningMutations, {
    unsubscribeQueryResult: m,
    removeMutationResult: j,
    updateSubscriptionOptions: S
  } = d.internalActions;
  return {
    buildInitiateQuery: G,
    buildInitiateInfiniteQuery: F,
    buildInitiateMutation: b,
    getRunningQueryThunk: N,
    getRunningMutationThunk: Q,
    getRunningQueriesThunk: T,
    getRunningMutationsThunk: L
  };
  function N(O, C) {
    return (A) => {
      const R = Sa(h, O), X = u({
        queryArgs: C,
        endpointDefinition: R,
        endpointName: O
      });
      return z(A)?.get(X);
    };
  }
  function Q(O, C) {
    return (A) => g(A)?.get(C);
  }
  function T() {
    return (O) => _1(z(O));
  }
  function L() {
    return (O) => _1(g(O));
  }
  function x(O, C) {
    const A = (R, {
      subscribe: X = !0,
      forceRefetch: V,
      subscriptionOptions: q,
      [Uu]: _,
      ...M
    } = {}) => (Y, $) => {
      const ae = u({
        queryArgs: R,
        endpointDefinition: C,
        endpointName: O
      });
      let D;
      const W = {
        ...M,
        type: Yu,
        subscribe: X,
        forceRefetch: V,
        subscriptionOptions: q,
        endpointName: O,
        originalArgs: R,
        queryCacheKey: ae,
        [Uu]: _
      };
      if (Qc(C))
        D = c(W);
      else {
        const {
          direction: ce,
          initialPageParam: Se,
          refetchCachedPages: de
        } = M;
        D = f({
          ...W,
          // Supply these even if undefined. This helps with a field existence
          // check over in `buildSlice.ts`
          direction: ce,
          initialPageParam: Se,
          refetchCachedPages: de
        });
      }
      const P = d.endpoints[O].select(R), te = Y(D), ue = P($()), {
        requestId: y,
        abort: J
      } = te, le = ue.requestId !== y, ne = z(Y)?.get(ae), re = () => P($()), fe = Object.assign(_ ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        te.then(re)
      ) : le && !ne ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(ue)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([ne, te]).then(re)
      ), {
        arg: R,
        requestId: y,
        subscriptionOptions: q,
        queryCacheKey: ae,
        abort: J,
        async unwrap() {
          const ce = await fe;
          if (ce.isError)
            throw ce.error;
          return ce.data;
        },
        refetch: (ce) => Y(A(R, {
          subscribe: !1,
          forceRefetch: !0,
          ...ce
        })),
        unsubscribe() {
          X && Y(m({
            queryCacheKey: ae,
            requestId: y
          }));
        },
        updateSubscriptionOptions(ce) {
          fe.subscriptionOptions = ce, Y(S({
            endpointName: O,
            requestId: y,
            queryCacheKey: ae,
            options: ce
          }));
        }
      });
      if (!ne && !le && !_) {
        const ce = z(Y);
        ce.set(ae, fe), fe.then(() => {
          ce.delete(ae);
        });
      }
      return fe;
    };
    return A;
  }
  function G(O, C) {
    return x(O, C);
  }
  function F(O, C) {
    return x(O, C);
  }
  function b(O) {
    return (C, {
      track: A = !0,
      fixedCacheKey: R
    } = {}) => (X, V) => {
      const q = s({
        type: "mutation",
        endpointName: O,
        originalArgs: C,
        track: A,
        fixedCacheKey: R
      }), _ = X(q), {
        requestId: M,
        abort: Y,
        unwrap: $
      } = _, ae = Zg(_.unwrap().then((te) => ({
        data: te
      })), (te) => ({
        error: te
      })), D = () => {
        X(j({
          requestId: M,
          fixedCacheKey: R
        }));
      }, W = Object.assign(ae, {
        arg: _.arg,
        requestId: M,
        abort: Y,
        unwrap: $,
        reset: D
      }), P = g(X);
      return P.set(M, W), W.then(() => {
        P.delete(M);
      }), R && (P.set(R, W), W.then(() => {
        P.get(R) === W && P.delete(R);
      })), W;
    };
  }
}
var ph = class extends zg {
  constructor(u, c, f, s) {
    super(u), this.value = c, this.schemaName = f, this._bqMeta = s;
  }
}, El = (u, c) => Array.isArray(u) ? u.includes(c) : !!u;
async function Cl(u, c, f, s) {
  const d = await u["~standard"].validate(c);
  if (d.issues)
    throw new ph(d.issues, c, f, s);
  return d.value;
}
function A1(u) {
  return u;
}
var yu = (u = {}) => ({
  ...u,
  [jc]: !0
});
function Jg({
  reducerPath: u,
  baseQuery: c,
  context: {
    endpointDefinitions: f
  },
  serializeQueryArgs: s,
  api: d,
  assertTagType: h,
  selectors: p,
  onSchemaFailure: z,
  catchSchemaFailure: g,
  skipSchemaValidation: m
}) {
  const j = (_, M, Y, $) => (ae, D) => {
    const W = f[_], P = s({
      queryArgs: M,
      endpointDefinition: W,
      endpointName: _
    });
    if (ae(d.internalActions.queryResultPatched({
      queryCacheKey: P,
      patches: Y
    })), !$)
      return;
    const te = d.endpoints[_].select(M)(
      // Work around TS 4.1 mismatch
      D()
    ), ue = Xf(W.providesTags, te.data, void 0, M, {}, h);
    ae(d.internalActions.updateProvidedBy([{
      queryCacheKey: P,
      providedTags: ue
    }]));
  };
  function S(_, M, Y = 0) {
    const $ = [M, ..._];
    return Y && $.length > Y ? $.slice(0, -1) : $;
  }
  function N(_, M, Y = 0) {
    const $ = [..._, M];
    return Y && $.length > Y ? $.slice(1) : $;
  }
  const Q = (_, M, Y, $ = !0) => (ae, D) => {
    const P = d.endpoints[_].select(M)(
      // Work around TS 4.1 mismatch
      D()
    ), te = {
      patches: [],
      inversePatches: [],
      undo: () => ae(d.util.patchQueryData(_, M, te.inversePatches, $))
    };
    if (P.status === Mn)
      return te;
    let ue;
    if ("data" in P)
      if (Ut(P.data)) {
        const [y, J, le] = ih(P.data, Y);
        te.patches.push(...J), te.inversePatches.push(...le), ue = y;
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
    return te.patches.length === 0 || ae(d.util.patchQueryData(_, M, te.patches, $)), te;
  }, T = (_, M, Y) => ($) => $(d.endpoints[_].initiate(M, {
    subscribe: !1,
    forceRefetch: !0,
    [Uu]: () => ({
      data: Y
    })
  })), L = (_, M) => _.query && _[M] ? _[M] : A1, x = async (_, {
    signal: M,
    abort: Y,
    rejectWithValue: $,
    fulfillWithValue: ae,
    dispatch: D,
    getState: W,
    extra: P
  }) => {
    const te = f[_.endpointName], {
      metaSchema: ue,
      skipSchemaValidation: y = m
    } = te, J = _.type === Yu;
    try {
      let le = A1;
      const ne = {
        signal: M,
        abort: Y,
        dispatch: D,
        getState: W,
        extra: P,
        endpoint: _.endpointName,
        type: _.type,
        forced: J ? G(_, W()) : void 0,
        queryCacheKey: J ? _.queryCacheKey : void 0
      }, re = J ? _[Uu] : void 0;
      let fe;
      const ce = async (de, pe, st, Pe) => {
        if (pe == null && de.pages.length)
          return Promise.resolve({
            data: de
          });
        const nn = {
          queryArg: _.originalArgs,
          pageParam: pe
        }, et = await Se(nn), $t = Pe ? S : N;
        return {
          data: {
            pages: $t(de.pages, et.data, st),
            pageParams: $t(de.pageParams, pe, st)
          },
          meta: et.meta
        };
      };
      async function Se(de) {
        let pe;
        const {
          extraOptions: st,
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
        )), re ? pe = re() : te.query ? (le = L(te, "transformResponse"), pe = await c(te.query(de), ne, st)) : pe = await te.queryFn(de, ne, st, (Dn) => c(Dn, ne, st)), typeof process < "u", pe.error) throw new T1(pe.error, pe.meta);
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
      if (J && "infiniteQueryOptions" in te) {
        const {
          infiniteQueryOptions: de
        } = te, {
          maxPages: pe = 1 / 0
        } = de, st = _.refetchCachedPages ?? de.refetchCachedPages ?? !0;
        let Pe;
        const nn = {
          pages: [],
          pageParams: []
        }, et = p.selectQueryEntry(W(), _.queryCacheKey)?.data, xt = /* arg.forceRefetch */ G(_, W()) && !_.direction || !et ? nn : et;
        if ("direction" in _ && _.direction && xt.pages.length) {
          const Dn = _.direction === "backward", ll = (Dn ? Sh : Nf)(de, xt, _.originalArgs);
          Pe = await ce(xt, ll, pe, Dn);
        } else {
          const {
            initialPageParam: Dn = de.initialPageParam
          } = _, Ol = et?.pageParams ?? [], ll = Ol[0] ?? Dn, ba = Ol.length;
          if (Pe = await ce(xt, ll, pe), re && (Pe = {
            data: Pe.data.pages[0]
          }), st)
            for (let Rl = 1; Rl < ba; Rl++) {
              const Yc = Nf(de, Pe.data, _.originalArgs);
              Pe = await ce(Pe.data, Yc, pe);
            }
        }
        fe = Pe;
      } else
        fe = await Se(_.originalArgs);
      return ue && !El(y, "meta") && fe.meta && (fe.meta = await Cl(ue, fe.meta, "metaSchema", fe.meta)), ae(fe.data, yu({
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: fe.meta
      }));
    } catch (le) {
      let ne = le;
      if (ne instanceof T1) {
        let re = L(te, "transformErrorResponse");
        const {
          rawErrorResponseSchema: fe,
          errorResponseSchema: ce
        } = te;
        let {
          value: Se,
          meta: de
        } = ne;
        try {
          fe && !El(y, "rawErrorResponse") && (Se = await Cl(fe, Se, "rawErrorResponseSchema", de)), ue && !El(y, "meta") && (de = await Cl(ue, de, "metaSchema", de));
          let pe = await re(Se, de, _.originalArgs);
          return ce && !El(y, "errorResponse") && (pe = await Cl(ce, pe, "errorResponseSchema", de)), $(pe, yu({
            baseQueryMeta: de
          }));
        } catch (pe) {
          ne = pe;
        }
      }
      try {
        if (ne instanceof ph) {
          const re = {
            endpoint: _.endpointName,
            arg: _.originalArgs,
            type: _.type,
            queryCacheKey: J ? _.queryCacheKey : void 0
          };
          te.onSchemaFailure?.(ne, re), z?.(ne, re);
          const {
            catchSchemaFailure: fe = g
          } = te;
          if (fe)
            return $(fe(ne, re), yu({
              baseQueryMeta: ne._bqMeta
            }));
        }
      } catch (re) {
        ne = re;
      }
      throw console.error(ne), ne;
    }
  };
  function G(_, M) {
    const Y = p.selectQueryEntry(M, _.queryCacheKey), $ = p.selectConfig(M).refetchOnMountOrArgChange, ae = Y?.fulfilledTimeStamp, D = _.forceRefetch ?? (_.subscribe && $);
    return D ? D === !0 || (Number(/* @__PURE__ */ new Date()) - Number(ae)) / 1e3 >= D : !1;
  }
  const F = () => p1(`${u}/executeQuery`, x, {
    getPendingMeta({
      arg: M
    }) {
      const Y = f[M.endpointName];
      return yu({
        startedTimeStamp: Date.now(),
        ...wc(Y) ? {
          direction: M.direction
        } : {}
      });
    },
    condition(M, {
      getState: Y
    }) {
      const $ = Y(), ae = p.selectQueryEntry($, M.queryCacheKey), D = ae?.fulfilledTimeStamp, W = M.originalArgs, P = ae?.originalArgs, te = f[M.endpointName], ue = M.direction;
      return Rf(M) ? !0 : ae?.status === "pending" ? !1 : G(M, $) || Qc(te) && te?.forceRefetch?.({
        currentArg: W,
        previousArg: P,
        endpointState: ae,
        state: $
      }) ? !0 : !(D && !ue);
    },
    dispatchConditionRejection: !0
  }), b = F(), O = F(), C = p1(`${u}/executeMutation`, x, {
    getPendingMeta() {
      return yu({
        startedTimeStamp: Date.now()
      });
    }
  }), A = (_) => "force" in _, R = (_) => "ifOlderThan" in _, X = (_, M, Y = {}) => ($, ae) => {
    const D = A(Y) && Y.force, W = R(Y) && Y.ifOlderThan, P = (ue = !0) => {
      const y = {
        forceRefetch: ue,
        subscribe: !1
      };
      return d.endpoints[_].initiate(M, y);
    }, te = d.endpoints[_].select(M)(ae());
    if (D)
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
    return (M) => M?.meta?.arg?.endpointName === _;
  }
  function q(_, M) {
    return {
      matchPending: Mu(Qf(_), V(M)),
      matchFulfilled: Mu(nl(_), V(M)),
      matchRejected: Mu(pa(_), V(M))
    };
  }
  return {
    queryThunk: b,
    mutationThunk: C,
    infiniteQueryThunk: O,
    prefetch: X,
    updateQueryData: Q,
    upsertQueryData: T,
    patchQueryData: j,
    buildMatchThunkActions: q
  };
}
function Nf(u, {
  pages: c,
  pageParams: f
}, s) {
  const d = c.length - 1;
  return u.getNextPageParam(c[d], c, f[d], f, s);
}
function Sh(u, {
  pages: c,
  pageParams: f
}, s) {
  return u.getPreviousPageParam?.(c[0], c, f[0], f, s);
}
function bh(u, c, f, s) {
  return Xf(f[u.meta.arg.endpointName][c], nl(u) ? u.payload : void 0, Bc(u) ? u.payload : void 0, u.meta.arg.originalArgs, "baseQueryMeta" in u.meta ? u.meta.baseQueryMeta : void 0, s);
}
function M1(u) {
  return Nt(u) ? ah(u) : u;
}
function fc(u, c, f) {
  const s = u[c];
  s && f(s);
}
function xu(u) {
  return ("arg" in u ? u.arg.fixedCacheKey : u.fixedCacheKey) ?? u.requestId;
}
function D1(u, c, f) {
  const s = u[xu(c)];
  s && f(s);
}
var oc = {};
function kg({
  reducerPath: u,
  queryThunk: c,
  mutationThunk: f,
  serializeQueryArgs: s,
  context: {
    endpointDefinitions: d,
    apiUid: h,
    extractRehydrationInfo: p,
    hasRehydrationInfo: z
  },
  assertTagType: g,
  config: m
}) {
  const j = Wt(`${u}/resetApiState`);
  function S(V, q, _, M) {
    V[q.queryCacheKey] ??= {
      status: Mn,
      endpointName: q.endpointName
    }, fc(V, q.queryCacheKey, (Y) => {
      Y.status = Df, Y.requestId = _ && Y.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        Y.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        M.requestId
      ), q.originalArgs !== void 0 && (Y.originalArgs = q.originalArgs), Y.startedTimeStamp = M.startedTimeStamp;
      const $ = d[M.arg.endpointName];
      wc($) && "direction" in q && (Y.direction = q.direction);
    });
  }
  function N(V, q, _, M) {
    fc(V, q.arg.queryCacheKey, (Y) => {
      if (Y.requestId !== q.requestId && !M) return;
      const {
        merge: $
      } = d[q.arg.endpointName];
      if (Y.status = bu, $)
        if (Y.data !== void 0) {
          const {
            fulfilledTimeStamp: ae,
            arg: D,
            baseQueryMeta: W,
            requestId: P
          } = q;
          let te = wu(Y.data, (ue) => $(ue, _, {
            arg: D.originalArgs,
            baseQueryMeta: W,
            fulfilledTimeStamp: ae,
            requestId: P
          }));
          Y.data = te;
        } else
          Y.data = _;
      else
        Y.data = d[q.arg.endpointName].structuralSharing ?? !0 ? Lf(Nt(Y.data) ? Nv(Y.data) : Y.data, _) : _;
      delete Y.error, Y.fulfilledTimeStamp = q.fulfilledTimeStamp;
    });
  }
  const Q = Pn({
    name: `${u}/queries`,
    initialState: oc,
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
              queryDescription: M,
              value: Y
            } = _;
            S(V, M, !0, {
              arg: M,
              requestId: q.meta.requestId,
              startedTimeStamp: q.meta.timestamp
            }), N(
              V,
              {
                arg: M,
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
          payload: V.map((M) => {
            const {
              endpointName: Y,
              arg: $,
              value: ae
            } = M, D = d[Y];
            return {
              queryDescription: {
                type: Yu,
                endpointName: Y,
                originalArgs: M.arg,
                queryCacheKey: s({
                  queryArgs: $,
                  endpointDefinition: D,
                  endpointName: Y
                })
              },
              value: ae
            };
          }),
          meta: {
            [jc]: !0,
            requestId: wf(),
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
          fc(V, q, (M) => {
            M.data = o1(M.data, _.concat());
          });
        },
        prepare: mu()
      }
    },
    extraReducers(V) {
      V.addCase(c.pending, (q, {
        meta: _,
        meta: {
          arg: M
        }
      }) => {
        const Y = Rf(M);
        S(q, M, Y, _);
      }).addCase(c.fulfilled, (q, {
        meta: _,
        payload: M
      }) => {
        const Y = Rf(_.arg);
        N(q, _, M, Y);
      }).addCase(c.rejected, (q, {
        meta: {
          condition: _,
          arg: M,
          requestId: Y
        },
        error: $,
        payload: ae
      }) => {
        fc(q, M.queryCacheKey, (D) => {
          if (!_) {
            if (D.requestId !== Y) return;
            D.status = _u, D.error = ae ?? $;
          }
        });
      }).addMatcher(z, (q, _) => {
        const {
          queries: M
        } = p(_);
        for (const [Y, $] of Object.entries(M))
          // do not rehydrate entries that were currently in flight.
          ($?.status === bu || $?.status === _u) && (q[Y] = $);
      });
    }
  }), T = Pn({
    name: `${u}/mutations`,
    initialState: oc,
    reducers: {
      removeMutationResult: {
        reducer(V, {
          payload: q
        }) {
          const _ = xu(q);
          _ in V && delete V[_];
        },
        prepare: mu()
      }
    },
    extraReducers(V) {
      V.addCase(f.pending, (q, {
        meta: _,
        meta: {
          requestId: M,
          arg: Y,
          startedTimeStamp: $
        }
      }) => {
        Y.track && (q[xu(_)] = {
          requestId: M,
          status: Df,
          endpointName: Y.endpointName,
          startedTimeStamp: $
        });
      }).addCase(f.fulfilled, (q, {
        payload: _,
        meta: M
      }) => {
        M.arg.track && D1(q, M, (Y) => {
          Y.requestId === M.requestId && (Y.status = bu, Y.data = _, Y.fulfilledTimeStamp = M.fulfilledTimeStamp);
        });
      }).addCase(f.rejected, (q, {
        payload: _,
        error: M,
        meta: Y
      }) => {
        Y.arg.track && D1(q, Y, ($) => {
          $.requestId === Y.requestId && ($.status = _u, $.error = _ ?? M);
        });
      }).addMatcher(z, (q, _) => {
        const {
          mutations: M
        } = p(_);
        for (const [Y, $] of Object.entries(M))
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
            providedTags: M
          } of q.payload) {
            G(V, _);
            for (const {
              type: Y,
              id: $
            } of M) {
              const ae = (V.tags[Y] ??= {})[$ || "__internal_without_id"] ??= [];
              ae.includes(_) || ae.push(_);
            }
            V.keys[_] = M;
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
      }).addMatcher(z, (q, _) => {
        const {
          provided: M
        } = p(_);
        for (const [Y, $] of Object.entries(M.tags ?? {}))
          for (const [ae, D] of Object.entries($)) {
            const W = (q.tags[Y] ??= {})[ae || "__internal_without_id"] ??= [];
            for (const P of D)
              W.includes(P) || W.push(P), q.keys[P] = M.keys[P];
          }
      }).addMatcher(An(nl(c), Bc(c)), (q, _) => {
        F(q, [_]);
      }).addMatcher(Q.actions.cacheEntriesUpserted.match, (q, _) => {
        const M = _.payload.map(({
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
        F(q, M);
      });
    }
  });
  function G(V, q) {
    const _ = M1(V.keys[q] ?? []);
    for (const M of _) {
      const Y = M.type, $ = M.id ?? "__internal_without_id", ae = V.tags[Y]?.[$];
      ae && (V.tags[Y][$] = M1(ae).filter((D) => D !== q));
    }
    delete V.keys[q];
  }
  function F(V, q) {
    const _ = q.map((M) => {
      const Y = bh(M, "providesTags", d, g), {
        queryCacheKey: $
      } = M.meta.arg;
      return {
        queryCacheKey: $,
        providedTags: Y
      };
    });
    x.caseReducers.updateProvidedBy(V, x.actions.updateProvidedBy(_));
  }
  const b = Pn({
    name: `${u}/subscriptions`,
    initialState: oc,
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
    initialState: oc,
    reducers: {
      subscriptionsUpdated: {
        reducer(V, q) {
          return o1(V, q.payload);
        },
        prepare: mu()
      }
    }
  }), C = Pn({
    name: `${u}/config`,
    initialState: {
      online: Ng(),
      focused: Rg(),
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
      V.addCase(Vf, (q) => {
        q.online = !0;
      }).addCase(mh, (q) => {
        q.online = !1;
      }).addCase(Gf, (q) => {
        q.focused = !0;
      }).addCase(hh, (q) => {
        q.focused = !1;
      }).addMatcher(z, (q) => ({
        ...q
      }));
    }
  }), A = W1({
    queries: Q.reducer,
    mutations: T.reducer,
    provided: x.reducer,
    subscriptions: O.reducer,
    config: C.reducer
  }), R = (V, q) => A(j.match(q) ? void 0 : V, q), X = {
    ...C.actions,
    ...Q.actions,
    ...b.actions,
    ...O.actions,
    ...T.actions,
    ...x.actions,
    resetApiState: j
  };
  return {
    reducer: R,
    actions: X
  };
}
var Ft = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), _h = {
  status: Mn
}, z1 = /* @__PURE__ */ wu(_h, () => {
}), O1 = /* @__PURE__ */ wu(_h, () => {
});
function Fg({
  serializeQueryArgs: u,
  reducerPath: c,
  createSelector: f
}) {
  const s = (b) => z1, d = (b) => O1;
  return {
    buildQuerySelector: N,
    buildInfiniteQuerySelector: Q,
    buildMutationSelector: T,
    selectInvalidatedBy: L,
    selectCachedArgsForQuery: x,
    selectApiState: p,
    selectQueries: z,
    selectMutations: m,
    selectQueryEntry: g,
    selectConfig: j
  };
  function h(b) {
    return {
      ...b,
      ...S1(b.status)
    };
  }
  function p(b) {
    return b[c];
  }
  function z(b) {
    return p(b)?.queries;
  }
  function g(b, O) {
    return z(b)?.[O];
  }
  function m(b) {
    return p(b)?.mutations;
  }
  function j(b) {
    return p(b)?.config;
  }
  function S(b, O, C) {
    return (A) => {
      if (A === Ft)
        return f(s, C);
      const R = u({
        queryArgs: A,
        endpointDefinition: O,
        endpointName: b
      });
      return f((V) => g(V, R) ?? z1, C);
    };
  }
  function N(b, O) {
    return S(b, O, h);
  }
  function Q(b, O) {
    const {
      infiniteQueryOptions: C
    } = O;
    function A(R) {
      const X = {
        ...R,
        ...S1(R.status)
      }, {
        isLoading: V,
        isError: q,
        direction: _
      } = X, M = _ === "forward", Y = _ === "backward";
      return {
        ...X,
        hasNextPage: G(C, X.data, X.originalArgs),
        hasPreviousPage: F(C, X.data, X.originalArgs),
        isFetchingNextPage: V && M,
        isFetchingPreviousPage: V && Y,
        isFetchNextPageError: q && M,
        isFetchPreviousPageError: q && Y
      };
    }
    return S(b, O, A);
  }
  function T() {
    return (b) => {
      let O;
      return typeof b == "object" ? O = xu(b) ?? Ft : O = b, f(O === Ft ? d : (R) => p(R)?.mutations?.[O] ?? O1, h);
    };
  }
  function L(b, O) {
    const C = b[c], A = /* @__PURE__ */ new Set(), R = zf(O, Yf, gh);
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
        A.add(_);
    }
    return Array.from(A.values()).flatMap((X) => {
      const V = C.queries[X];
      return V ? {
        queryCacheKey: X,
        endpointName: V.endpointName,
        originalArgs: V.originalArgs
      } : [];
    });
  }
  function x(b, O) {
    return zf(Object.values(z(b)), (C) => C?.endpointName === O && C.status !== Mn, (C) => C.originalArgs);
  }
  function G(b, O, C) {
    return O ? Nf(b, O, C) != null : !1;
  }
  function F(b, O, C) {
    return !O || !b.getPreviousPageParam ? !1 : Sh(b, O, C) != null;
  }
}
var R1 = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, N1 = ({
  endpointName: u,
  queryArgs: c
}) => {
  let f = "";
  const s = R1?.get(c);
  if (typeof s == "string")
    f = s;
  else {
    const d = JSON.stringify(c, (h, p) => (p = typeof p == "bigint" ? {
      $bigint: p.toString()
    } : p, p = tl(p) ? Object.keys(p).sort().reduce((z, g) => (z[g] = p[g], z), {}) : p, p));
    tl(c) && R1?.set(c, d), f = d;
  }
  return `${u}(${f})`;
};
function Eh(...u) {
  return function(f) {
    const s = Mc((m) => f.extractRehydrationInfo?.(m, {
      reducerPath: f.reducerPath ?? "api"
    })), d = {
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1,
      invalidationBehavior: "delayed",
      ...f,
      extractRehydrationInfo: s,
      serializeQueryArgs(m) {
        let j = N1;
        if ("serializeQueryArgs" in m.endpointDefinition) {
          const S = m.endpointDefinition.serializeQueryArgs;
          j = (N) => {
            const Q = S(N);
            return typeof Q == "string" ? Q : N1({
              ...N,
              queryArgs: Q
            });
          };
        } else f.serializeQueryArgs && (j = f.serializeQueryArgs);
        return j(m);
      },
      tagTypes: [...f.tagTypes || []]
    }, h = {
      endpointDefinitions: {},
      batch(m) {
        m();
      },
      apiUid: wf(),
      extractRehydrationInfo: s,
      hasRehydrationInfo: Mc((m) => s(m) != null)
    }, p = {
      injectEndpoints: g,
      enhanceEndpoints({
        addTagTypes: m,
        endpoints: j
      }) {
        if (m)
          for (const S of m)
            d.tagTypes.includes(S) || d.tagTypes.push(S);
        if (j)
          for (const [S, N] of Object.entries(j))
            typeof N == "function" ? N(Sa(h, S)) : Object.assign(Sa(h, S) || {}, N);
        return p;
      }
    }, z = u.map((m) => m.init(p, d, h));
    function g(m) {
      const j = m.endpoints({
        query: (S) => ({
          ...S,
          type: Yu
        }),
        mutation: (S) => ({
          ...S,
          type: yh
        }),
        infiniteQuery: (S) => ({
          ...S,
          type: vh
        })
      });
      for (const [S, N] of Object.entries(j)) {
        if (m.overrideExisting !== !0 && S in h.endpointDefinitions) {
          if (m.overrideExisting === "throw")
            throw new Error(Zt(39));
          continue;
        }
        h.endpointDefinitions[S] = N;
        for (const Q of z)
          Q.injectEndpoint(S, N);
      }
      return p;
    }
    return p.injectEndpoints({
      endpoints: f.endpoints
    });
  };
}
function En(u, ...c) {
  return Object.assign(u, ...c);
}
var Wg = ({
  api: u,
  queryThunk: c,
  internalState: f,
  mwApi: s
}) => {
  const d = `${u.reducerPath}/subscriptions`;
  let h = null, p = null;
  const {
    updateSubscriptionOptions: z,
    unsubscribeQueryResult: g
  } = u.internalActions, m = (L, x) => {
    if (z.match(x)) {
      const {
        queryCacheKey: F,
        requestId: b,
        options: O
      } = x.payload, C = L.get(F);
      return C?.has(b) && C.set(b, O), !0;
    }
    if (g.match(x)) {
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
      } = x, O = Dc(L, F.queryCacheKey, Of);
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
        const C = Dc(L, b.queryCacheKey, Of);
        C.set(O, b.subscriptionOptions ?? C.get(O) ?? {}), G = !0;
      }
    }
    return G;
  }, j = () => f.currentSubscriptions, Q = {
    getSubscriptions: j,
    getSubscriptionCount: (L) => j().get(L)?.size ?? 0,
    isRequestSubscribed: (L, x) => !!j()?.get(L)?.get(x)
  };
  function T(L) {
    return JSON.parse(JSON.stringify(Object.fromEntries([...L].map(([x, G]) => [x, Object.fromEntries(G)]))));
  }
  return (L, x) => {
    if (h || (h = T(f.currentSubscriptions)), u.util.resetApiState.match(L))
      return h = {}, f.currentSubscriptions.clear(), p = null, [!0, !1];
    if (u.internalActions.internal_getRTKQSubscriptions.match(L))
      return [!1, Q];
    const G = m(f.currentSubscriptions, L);
    let F = !0;
    if (G) {
      p || (p = setTimeout(() => {
        const C = T(f.currentSubscriptions), [, A] = ih(h, () => C);
        x.next(u.internalActions.subscriptionsUpdated(A)), h = C, p = null;
      }, 500));
      const b = typeof L.type == "string" && !!L.type.startsWith(d), O = c.rejected.match(L) && L.meta.condition && !!L.meta.arg.subscribe;
      F = !b && !O;
    }
    return [F, !1];
  };
}, $g = 2147483647 / 1e3 - 1, Ig = ({
  reducerPath: u,
  api: c,
  queryThunk: f,
  context: s,
  internalState: d,
  selectors: {
    selectQueryEntry: h,
    selectConfig: p
  },
  getRunningQueryThunk: z,
  mwApi: g
}) => {
  const {
    removeQueryResult: m,
    unsubscribeQueryResult: j,
    cacheEntriesUpserted: S
  } = c.internalActions, N = An(j.match, f.fulfilled, f.rejected, S.match);
  function Q(b) {
    const O = d.currentSubscriptions.get(b);
    return O ? O.size > 0 : !1;
  }
  const T = {};
  function L(b) {
    for (const O of b.values())
      O?.abort?.();
  }
  const x = (b, O) => {
    const C = O.getState(), A = p(C);
    if (N(b)) {
      let R;
      if (S.match(b))
        R = b.payload.map((X) => X.queryDescription.queryCacheKey);
      else {
        const {
          queryCacheKey: X
        } = j.match(b) ? b.payload : b.meta.arg;
        R = [X];
      }
      G(R, O, A);
    }
    if (c.util.resetApiState.match(b)) {
      for (const [R, X] of Object.entries(T))
        X && clearTimeout(X), delete T[R];
      L(d.runningQueries), L(d.runningMutations);
    }
    if (s.hasRehydrationInfo(b)) {
      const {
        queries: R
      } = s.extractRehydrationInfo(b);
      G(Object.keys(R), O, A);
    }
  };
  function G(b, O, C) {
    const A = O.getState();
    for (const R of b) {
      const X = h(A, R);
      X?.endpointName && F(R, X.endpointName, O, C);
    }
  }
  function F(b, O, C, A) {
    const X = Sa(s, O)?.keepUnusedDataFor ?? A.keepUnusedDataFor;
    if (X === 1 / 0)
      return;
    const V = Math.max(0, Math.min(X, $g));
    if (!Q(b)) {
      const q = T[b];
      q && clearTimeout(q), T[b] = setTimeout(() => {
        if (!Q(b)) {
          const _ = h(C.getState(), b);
          _?.endpointName && C.dispatch(z(_.endpointName, _.originalArgs))?.abort(), C.dispatch(m({
            queryCacheKey: b
          }));
        }
        delete T[b];
      }, V * 1e3);
    }
  }
  return x;
}, U1 = new Error("Promise never resolved before cacheEntryRemoved."), Pg = ({
  api: u,
  reducerPath: c,
  context: f,
  queryThunk: s,
  mutationThunk: d,
  internalState: h,
  selectors: {
    selectQueryEntry: p,
    selectApiState: z
  }
}) => {
  const g = Mf(s), m = Mf(d), j = nl(s, d), S = {}, {
    removeQueryResult: N,
    removeMutationResult: Q,
    cacheEntriesUpserted: T
  } = u.internalActions;
  function L(C, A, R) {
    const X = S[C];
    X?.valueResolved && (X.valueResolved({
      data: A,
      meta: R
    }), delete X.valueResolved);
  }
  function x(C) {
    const A = S[C];
    A && (delete S[C], A.cacheEntryRemoved());
  }
  function G(C) {
    const {
      arg: A,
      requestId: R
    } = C.meta, {
      endpointName: X,
      originalArgs: V
    } = A;
    return [X, V, R];
  }
  const F = (C, A, R) => {
    const X = b(C);
    function V(q, _, M, Y) {
      const $ = p(R, _), ae = p(A.getState(), _);
      !$ && ae && O(q, Y, _, A, M);
    }
    if (s.pending.match(C)) {
      const [q, _, M] = G(C);
      V(q, X, M, _);
    } else if (T.match(C))
      for (const {
        queryDescription: q,
        value: _
      } of C.payload) {
        const {
          endpointName: M,
          originalArgs: Y,
          queryCacheKey: $
        } = q;
        V(M, $, C.meta.requestId, Y), L($, _, {});
      }
    else if (d.pending.match(C)) {
      if (A.getState()[c].mutations[X]) {
        const [_, M, Y] = G(C);
        O(_, M, X, A, Y);
      }
    } else if (j(C))
      L(X, C.payload, C.meta.baseQueryMeta);
    else if (N.match(C) || Q.match(C))
      x(X);
    else if (u.util.resetApiState.match(C))
      for (const q of Object.keys(S))
        x(q);
  };
  function b(C) {
    return g(C) ? C.meta.arg.queryCacheKey : m(C) ? C.meta.arg.fixedCacheKey ?? C.meta.requestId : N.match(C) ? C.payload.queryCacheKey : Q.match(C) ? xu(C.payload) : "";
  }
  function O(C, A, R, X, V) {
    const q = Sa(f, C), _ = q?.onCacheEntryAdded;
    if (!_) return;
    const M = {}, Y = new Promise((te) => {
      M.cacheEntryRemoved = te;
    }), $ = Promise.race([new Promise((te) => {
      M.valueResolved = te;
    }), Y.then(() => {
      throw U1;
    })]);
    $.catch(() => {
    }), S[R] = M;
    const ae = u.endpoints[C].select(zc(q) ? A : R), D = X.dispatch((te, ue, y) => y), W = {
      ...X,
      getCacheEntry: () => ae(X.getState()),
      requestId: V,
      extra: D,
      updateCachedData: zc(q) ? (te) => X.dispatch(u.util.updateQueryData(C, A, te)) : void 0,
      cacheDataLoaded: $,
      cacheEntryRemoved: Y
    }, P = _(A, W);
    Promise.resolve(P).catch((te) => {
      if (te !== U1)
        throw te;
    });
  }
  return F;
}, ep = ({
  api: u,
  context: {
    apiUid: c
  },
  reducerPath: f
}) => (s, d) => {
  u.util.resetApiState.match(s) && d.dispatch(u.internalActions.middlewareRegistered(c));
}, tp = ({
  reducerPath: u,
  context: c,
  context: {
    endpointDefinitions: f
  },
  mutationThunk: s,
  queryThunk: d,
  api: h,
  assertTagType: p,
  refetchQuery: z,
  internalState: g
}) => {
  const {
    removeQueryResult: m
  } = h.internalActions, j = An(nl(s), Bc(s)), S = An(nl(d, s), pa(d, s));
  let N = [], Q = 0;
  const T = (G, F) => {
    (d.pending.match(G) || s.pending.match(G)) && Q++, S(G) && (Q = Math.max(0, Q - 1)), j(G) ? x(bh(G, "invalidatesTags", f, p), F) : S(G) ? x([], F) : h.util.invalidateTags.match(G) && x(Xf(G.payload, void 0, void 0, void 0, void 0, p), F);
  };
  function L() {
    return Q > 0;
  }
  function x(G, F) {
    const b = F.getState(), O = b[u];
    if (N.push(...G), O.config.invalidationBehavior === "delayed" && L())
      return;
    const C = N;
    if (N = [], C.length === 0) return;
    const A = h.util.selectInvalidatedBy(b, C);
    c.batch(() => {
      const R = Array.from(A.values());
      for (const {
        queryCacheKey: X
      } of R) {
        const V = O.queries[X], q = Dc(g.currentSubscriptions, X, Of);
        V && (q.size === 0 ? F.dispatch(m({
          queryCacheKey: X
        })) : V.status !== Mn && F.dispatch(z(V)));
      }
    });
  }
  return T;
}, np = ({
  reducerPath: u,
  queryThunk: c,
  api: f,
  refetchQuery: s,
  internalState: d
}) => {
  const {
    currentPolls: h,
    currentSubscriptions: p
  } = d, z = /* @__PURE__ */ new Set();
  let g = null;
  const m = (x, G) => {
    (f.internalActions.updateSubscriptionOptions.match(x) || f.internalActions.unsubscribeQueryResult.match(x)) && j(x.payload.queryCacheKey, G), (c.pending.match(x) || c.rejected.match(x) && x.meta.condition) && j(x.meta.arg.queryCacheKey, G), (c.fulfilled.match(x) || c.rejected.match(x) && !x.meta.condition) && S(x.meta.arg, G), f.util.resetApiState.match(x) && (T(), g && (clearTimeout(g), g = null), z.clear());
  };
  function j(x, G) {
    z.add(x), g || (g = setTimeout(() => {
      for (const F of z)
        N({
          queryCacheKey: F
        }, G);
      z.clear(), g = null;
    }, 0));
  }
  function S({
    queryCacheKey: x
  }, G) {
    const F = G.getState()[u], b = F.queries[x], O = p.get(x);
    if (!b || b.status === Mn) return;
    const {
      lowestPollingInterval: C,
      skipPollingIfUnfocused: A
    } = L(O);
    if (!Number.isFinite(C)) return;
    const R = h.get(x);
    R?.timeout && (clearTimeout(R.timeout), R.timeout = void 0);
    const X = Date.now() + C;
    h.set(x, {
      nextPollTimestamp: X,
      pollingInterval: C,
      timeout: setTimeout(() => {
        (F.config.focused || !A) && G.dispatch(s(b)), S({
          queryCacheKey: x
        }, G);
      }, C)
    });
  }
  function N({
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
    const A = h.get(x), R = Date.now() + C;
    (!A || R < A.nextPollTimestamp) && S({
      queryCacheKey: x
    }, G);
  }
  function Q(x) {
    const G = h.get(x);
    G?.timeout && clearTimeout(G.timeout), h.delete(x);
  }
  function T() {
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
}, lp = ({
  api: u,
  context: c,
  queryThunk: f,
  mutationThunk: s
}) => {
  const d = Qf(f, s), h = pa(f, s), p = nl(f, s), z = {};
  return (m, j) => {
    if (d(m)) {
      const {
        requestId: S,
        arg: {
          endpointName: N,
          originalArgs: Q
        }
      } = m.meta, T = Sa(c, N), L = T?.onQueryStarted;
      if (L) {
        const x = {}, G = new Promise((C, A) => {
          x.resolve = C, x.reject = A;
        });
        G.catch(() => {
        }), z[S] = x;
        const F = u.endpoints[N].select(zc(T) ? Q : S), b = j.dispatch((C, A, R) => R), O = {
          ...j,
          getCacheEntry: () => F(j.getState()),
          requestId: S,
          extra: b,
          updateCachedData: zc(T) ? (C) => j.dispatch(u.util.updateQueryData(N, Q, C)) : void 0,
          queryFulfilled: G
        };
        L(Q, O);
      }
    } else if (p(m)) {
      const {
        requestId: S,
        baseQueryMeta: N
      } = m.meta;
      z[S]?.resolve({
        data: m.payload,
        meta: N
      }), delete z[S];
    } else if (h(m)) {
      const {
        requestId: S,
        rejectedWithValue: N,
        baseQueryMeta: Q
      } = m.meta;
      z[S]?.reject({
        error: m.payload ?? m.error,
        isUnhandledError: !N,
        meta: Q
      }), delete z[S];
    }
  };
}, ap = ({
  reducerPath: u,
  context: c,
  api: f,
  refetchQuery: s,
  internalState: d
}) => {
  const {
    removeQueryResult: h
  } = f.internalActions, p = (g, m) => {
    Gf.match(g) && z(m, "refetchOnFocus"), Vf.match(g) && z(m, "refetchOnReconnect");
  };
  function z(g, m) {
    const j = g.getState()[u], S = j.queries, N = d.currentSubscriptions;
    c.batch(() => {
      for (const Q of N.keys()) {
        const T = S[Q], L = N.get(Q);
        if (!L || !T) continue;
        const x = [...L.values()];
        (x.some((F) => F[m] === !0) || x.every((F) => F[m] === void 0) && j.config[m]) && (L.size === 0 ? g.dispatch(h({
          queryCacheKey: Q
        })) : T.status !== Mn && g.dispatch(s(T)));
      }
    });
  }
  return p;
};
function up(u) {
  const {
    reducerPath: c,
    queryThunk: f,
    api: s,
    context: d,
    getInternalState: h
  } = u, {
    apiUid: p
  } = d, z = {
    invalidateTags: Wt(`${c}/invalidateTags`)
  }, g = (N) => N.type.startsWith(`${c}/`), m = [ep, Ig, tp, np, Pg, lp];
  return {
    middleware: (N) => {
      let Q = !1;
      const T = h(N.dispatch), L = {
        ...u,
        internalState: T,
        refetchQuery: S,
        isThisApiSliceAction: g,
        mwApi: N
      }, x = m.map((b) => b(L)), G = Wg(L), F = ap(L);
      return (b) => (O) => {
        if (!$1(O))
          return b(O);
        Q || (Q = !0, N.dispatch(s.internalActions.middlewareRegistered(p)));
        const C = {
          ...N,
          next: b
        }, A = N.getState(), [R, X] = G(O, C, A);
        let V;
        if (R ? V = b(O) : V = X, N.getState()[c] && (F(O, C, A), g(O) || d.hasRehydrationInfo(O)))
          for (const q of x)
            q(O, C, A);
        return V;
      };
    },
    actions: z
  };
  function S(N) {
    return u.api.endpoints[N.endpointName].initiate(N.originalArgs, {
      subscribe: !1,
      forceRefetch: !0
    });
  }
}
var x1 = /* @__PURE__ */ Symbol(), Ch = ({
  createSelector: u = Hf
} = {}) => ({
  name: x1,
  init(c, {
    baseQuery: f,
    tagTypes: s,
    reducerPath: d,
    serializeQueryArgs: h,
    keepUnusedDataFor: p,
    refetchOnMountOrArgChange: z,
    refetchOnFocus: g,
    refetchOnReconnect: m,
    invalidationBehavior: j,
    onSchemaFailure: S,
    catchSchemaFailure: N,
    skipSchemaValidation: Q
  }, T) {
    Kv();
    const L = (ce) => ce;
    Object.assign(c, {
      reducerPath: d,
      endpoints: {},
      internalActions: {
        onOnline: Vf,
        onOffline: mh,
        onFocus: Gf,
        onFocusLost: hh
      },
      util: {}
    });
    const x = Fg({
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
      queryThunk: A,
      infiniteQueryThunk: R,
      mutationThunk: X,
      patchQueryData: V,
      updateQueryData: q,
      upsertQueryData: _,
      prefetch: M,
      buildMatchThunkActions: Y
    } = Jg({
      baseQuery: f,
      reducerPath: d,
      context: T,
      api: c,
      serializeQueryArgs: h,
      assertTagType: L,
      selectors: x,
      onSchemaFailure: S,
      catchSchemaFailure: N,
      skipSchemaValidation: Q
    }), {
      reducer: $,
      actions: ae
    } = kg({
      context: T,
      queryThunk: A,
      mutationThunk: X,
      serializeQueryArgs: h,
      reducerPath: d,
      assertTagType: L,
      config: {
        refetchOnFocus: g,
        refetchOnReconnect: m,
        refetchOnMountOrArgChange: z,
        keepUnusedDataFor: p,
        reducerPath: d,
        invalidationBehavior: j
      }
    });
    En(c.util, {
      patchQueryData: V,
      updateQueryData: q,
      upsertQueryData: _,
      prefetch: M,
      resetApiState: ae.resetApiState,
      upsertQueryEntries: ae.cacheEntriesUpserted
    }), En(c.internalActions, ae);
    const D = /* @__PURE__ */ new WeakMap(), W = (ce) => Dc(D, ce, () => ({
      currentSubscriptions: /* @__PURE__ */ new Map(),
      currentPolls: /* @__PURE__ */ new Map(),
      runningQueries: /* @__PURE__ */ new Map(),
      runningMutations: /* @__PURE__ */ new Map()
    })), {
      buildInitiateQuery: P,
      buildInitiateInfiniteQuery: te,
      buildInitiateMutation: ue,
      getRunningMutationThunk: y,
      getRunningMutationsThunk: J,
      getRunningQueriesThunk: le,
      getRunningQueryThunk: ne
    } = Kg({
      queryThunk: A,
      mutationThunk: X,
      infiniteQueryThunk: R,
      api: c,
      serializeQueryArgs: h,
      context: T,
      getInternalState: W
    });
    En(c.util, {
      getRunningMutationThunk: y,
      getRunningMutationsThunk: J,
      getRunningQueryThunk: ne,
      getRunningQueriesThunk: le
    });
    const {
      middleware: re,
      actions: fe
    } = up({
      reducerPath: d,
      context: T,
      queryThunk: A,
      mutationThunk: X,
      infiniteQueryThunk: R,
      api: c,
      assertTagType: L,
      selectors: x,
      getRunningQueryThunk: ne,
      getInternalState: W
    });
    return En(c.util, fe), En(c, {
      reducer: $,
      middleware: re
    }), {
      name: x1,
      injectEndpoint(ce, Se) {
        const de = c, pe = de.endpoints[ce] ??= {};
        Qc(Se) && En(pe, {
          name: ce,
          select: b(ce, Se),
          initiate: P(ce, Se)
        }, Y(A, ce)), Vg(Se) && En(pe, {
          name: ce,
          select: C(),
          initiate: ue(ce)
        }, Y(X, ce)), wc(Se) && En(pe, {
          name: ce,
          select: O(ce, Se),
          initiate: te(ce, Se)
        }, Y(A, ce));
      }
    };
  }
});
Ch();
function dc(u) {
  return u.replace(u[0], u[0].toUpperCase());
}
var ip = "query", cp = "mutation", rp = "infinitequery";
function sp(u) {
  return u.type === ip;
}
function fp(u) {
  return u.type === cp;
}
function Th(u) {
  return u.type === rp;
}
function vu(u, ...c) {
  return Object.assign(u, ...c);
}
var df = /* @__PURE__ */ Symbol();
function hf(u) {
  const c = ie.useRef(u), f = ie.useMemo(() => Lf(c.current, u), [u]);
  return ie.useEffect(() => {
    c.current !== f && (c.current = f);
  }, [f]), f;
}
function ya(u) {
  const c = ie.useRef(u);
  return ie.useEffect(() => {
    Cu(c.current, u) || (c.current = u);
  }, [u]), Cu(c.current, u) ? c.current : u;
}
var op = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", dp = /* @__PURE__ */ op(), hp = () => typeof navigator < "u" && navigator.product === "ReactNative", mp = /* @__PURE__ */ hp(), yp = () => dp || mp ? ie.useLayoutEffect : ie.useEffect, vp = /* @__PURE__ */ yp(), j1 = (u) => u.isUninitialized ? {
  ...u,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: u.data === void 0,
  // This is the one place where we still have to use `QueryStatus` as an enum,
  // since it's the only reference in the React package and not in the core.
  status: oh.pending
} : u;
function mf(u, ...c) {
  const f = {};
  return c.forEach((s) => {
    f[s] = u[s];
  }), f;
}
var yf = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
function gp({
  api: u,
  moduleOptions: {
    batch: c,
    hooks: {
      useDispatch: f,
      useSelector: s,
      useStore: d
    },
    unstable__sideEffectsInRender: h,
    createSelector: p
  },
  serializeQueryArgs: z,
  context: g
}) {
  const m = h ? (A) => A() : ie.useEffect, j = (A) => A.current?.unsubscribe?.(), S = g.endpointDefinitions;
  return {
    buildQueryHooks: b,
    buildInfiniteQueryHooks: O,
    buildMutationHook: C,
    usePrefetch: T
  };
  function N(A, R, X) {
    if (R?.endpointName && A.isUninitialized) {
      const {
        endpointName: $
      } = R, ae = S[$];
      X !== Ft && z({
        queryArgs: R.originalArgs,
        endpointDefinition: ae,
        endpointName: $
      }) === z({
        queryArgs: X,
        endpointDefinition: ae,
        endpointName: $
      }) && (R = void 0);
    }
    let V = A.isSuccess ? A.data : R?.data;
    V === void 0 && (V = A.data);
    const q = V !== void 0, _ = A.isLoading, M = (!R || R.isLoading || R.isUninitialized) && !q && _, Y = A.isSuccess || q && (_ && !R?.isError || A.isUninitialized);
    return {
      ...A,
      data: V,
      currentData: A.data,
      isFetching: _,
      isLoading: M,
      isSuccess: Y
    };
  }
  function Q(A, R, X) {
    if (R?.endpointName && A.isUninitialized) {
      const {
        endpointName: $
      } = R, ae = S[$];
      X !== Ft && z({
        queryArgs: R.originalArgs,
        endpointDefinition: ae,
        endpointName: $
      }) === z({
        queryArgs: X,
        endpointDefinition: ae,
        endpointName: $
      }) && (R = void 0);
    }
    let V = A.isSuccess ? A.data : R?.data;
    V === void 0 && (V = A.data);
    const q = V !== void 0, _ = A.isLoading, M = (!R || R.isLoading || R.isUninitialized) && !q && _, Y = A.isSuccess || _ && q;
    return {
      ...A,
      data: V,
      currentData: A.data,
      isFetching: _,
      isLoading: M,
      isSuccess: Y
    };
  }
  function T(A, R) {
    const X = f(), V = ya(R);
    return ie.useCallback((q, _) => X(u.util.prefetch(A, q, {
      ...V,
      ..._
    })), [A, X, V]);
  }
  function L(A, R, {
    refetchOnReconnect: X,
    refetchOnFocus: V,
    refetchOnMountOrArgChange: q,
    skip: _ = !1,
    pollingInterval: M = 0,
    skipPollingIfUnfocused: Y = !1,
    ...$
  } = {}) {
    const {
      initiate: ae
    } = u.endpoints[A], D = f(), W = ie.useRef(void 0);
    if (!W.current) {
      const de = D(u.internalActions.internal_getRTKQSubscriptions());
      W.current = de;
    }
    const P = hf(_ ? Ft : R), te = ya({
      refetchOnReconnect: X,
      refetchOnFocus: V,
      pollingInterval: M,
      skipPollingIfUnfocused: Y
    }), ue = $.initialPageParam, y = ya(ue), J = $.refetchCachedPages, le = ya(J), ne = ie.useRef(void 0);
    let {
      queryCacheKey: re,
      requestId: fe
    } = ne.current || {}, ce = !1;
    re && fe && (ce = W.current.isRequestSubscribed(re, fe));
    const Se = !ce && ne.current !== void 0;
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
        const st = D(ae(P, {
          subscriptionOptions: te,
          forceRefetch: q,
          ...Th(S[A]) ? {
            initialPageParam: y,
            refetchCachedPages: le
          } : {}
        }));
        ne.current = st;
      } else te !== pe && de.updateSubscriptionOptions(te);
    }, [D, ae, q, P, te, Se, y, le, A]), [ne, D, ae, te];
  }
  function x(A, R) {
    return (V, {
      skip: q = !1,
      selectFromResult: _
    } = {}) => {
      const {
        select: M
      } = u.endpoints[A], Y = hf(q ? Ft : V), $ = ie.useRef(void 0), ae = ie.useMemo(() => (
        // Normally ts-ignores are bad and should be avoided, but we're
        // already casting this selector to be `Selector<any>` anyway,
        // so the inconsistencies don't matter here
        // @ts-ignore
        p([
          // @ts-ignore
          M(Y),
          (ue, y) => y,
          (ue) => Y
        ], R, {
          memoizeOptions: {
            resultEqualityCheck: Cu
          }
        })
      ), [M, Y]), D = ie.useMemo(() => _ ? p([ae], _, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : ae, [ae, _]), W = s((ue) => D(ue, $.current), Cu), P = d(), te = ae(P.getState(), $.current);
      return vp(() => {
        $.current = te;
      }, [te]), W;
    };
  }
  function G(A) {
    ie.useEffect(() => () => {
      j(A), A.current = void 0;
    }, [A]);
  }
  function F(A) {
    if (!A.current) throw new Error(Zt(38));
    return A.current.refetch();
  }
  function b(A) {
    const R = (q, _ = {}) => {
      const [M] = L(A, q, _);
      return G(M), ie.useMemo(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => F(M)
      }), [M]);
    }, X = ({
      refetchOnReconnect: q,
      refetchOnFocus: _,
      pollingInterval: M = 0,
      skipPollingIfUnfocused: Y = !1
    } = {}) => {
      const {
        initiate: $
      } = u.endpoints[A], ae = f(), [D, W] = ie.useState(df), P = ie.useRef(void 0), te = ya({
        refetchOnReconnect: q,
        refetchOnFocus: _,
        pollingInterval: M,
        skipPollingIfUnfocused: Y
      });
      m(() => {
        const le = P.current?.subscriptionOptions;
        te !== le && P.current?.updateSubscriptionOptions(te);
      }, [te]);
      const ue = ie.useRef(te);
      m(() => {
        ue.current = te;
      }, [te]);
      const y = ie.useCallback(function(le, ne = !1) {
        let re;
        return c(() => {
          j(P), P.current = re = ae($(le, {
            subscriptionOptions: ue.current,
            forceRefetch: !ne
          })), W(le);
        }), re;
      }, [ae, $]), J = ie.useCallback(() => {
        P.current?.queryCacheKey && ae(u.internalActions.removeQueryResult({
          queryCacheKey: P.current?.queryCacheKey
        }));
      }, [ae]);
      return ie.useEffect(() => () => {
        j(P);
      }, []), ie.useEffect(() => {
        D !== df && !P.current && y(D, !0);
      }, [D, y]), ie.useMemo(() => [y, D, {
        reset: J
      }], [y, D, J]);
    }, V = x(A, N);
    return {
      useQueryState: V,
      useQuerySubscription: R,
      useLazyQuerySubscription: X,
      useLazyQuery(q) {
        const [_, M, {
          reset: Y
        }] = X(q), $ = V(M, {
          ...q,
          skip: M === df
        }), ae = ie.useMemo(() => ({
          lastArg: M
        }), [M]);
        return ie.useMemo(() => [_, {
          ...$,
          reset: Y
        }, ae], [_, $, Y, ae]);
      },
      useQuery(q, _) {
        const M = R(q, _), Y = V(q, {
          selectFromResult: q === Ft || _?.skip ? void 0 : j1,
          ..._
        }), $ = mf(Y, ...yf);
        return ie.useDebugValue($), ie.useMemo(() => ({
          ...Y,
          ...M
        }), [Y, M]);
      }
    };
  }
  function O(A) {
    const R = (V, q = {}) => {
      const [_, M, Y, $] = L(A, V, q), ae = ie.useRef($);
      m(() => {
        ae.current = $;
      }, [$]);
      const D = q.refetchCachedPages, W = ya(D), P = ie.useCallback(function(y, J) {
        let le;
        return c(() => {
          j(_), _.current = le = M(Y(y, {
            subscriptionOptions: ae.current,
            direction: J
          }));
        }), le;
      }, [_, M, Y]);
      G(_);
      const te = hf(q.skip ? Ft : V), ue = ie.useCallback((y) => {
        if (!_.current) throw new Error(Zt(38));
        const J = {
          refetchCachedPages: y?.refetchCachedPages ?? W
        };
        return _.current.refetch(J);
      }, [_, W]);
      return ie.useMemo(() => ({
        trigger: P,
        /**
         * A method to manually refetch data for the query
         */
        refetch: ue,
        fetchNextPage: () => P(te, "forward"),
        fetchPreviousPage: () => P(te, "backward")
      }), [ue, P, te]);
    }, X = x(A, Q);
    return {
      useInfiniteQueryState: X,
      useInfiniteQuerySubscription: R,
      useInfiniteQuery(V, q) {
        const {
          refetch: _,
          fetchNextPage: M,
          fetchPreviousPage: Y
        } = R(V, q), $ = X(V, {
          selectFromResult: V === Ft || q?.skip ? void 0 : j1,
          ...q
        }), ae = mf($, ...yf, "hasNextPage", "hasPreviousPage");
        return ie.useDebugValue(ae), ie.useMemo(() => ({
          ...$,
          fetchNextPage: M,
          fetchPreviousPage: Y,
          refetch: _
        }), [$, M, Y, _]);
      }
    };
  }
  function C(A) {
    return ({
      selectFromResult: R,
      fixedCacheKey: X
    } = {}) => {
      const {
        select: V,
        initiate: q
      } = u.endpoints[A], _ = f(), [M, Y] = ie.useState();
      ie.useEffect(() => () => {
        M?.arg.fixedCacheKey || M?.reset();
      }, [M]);
      const $ = ie.useCallback(function(le) {
        const ne = _(q(le, {
          fixedCacheKey: X
        }));
        return Y(ne), ne;
      }, [_, q, X]), {
        requestId: ae
      } = M || {}, D = ie.useMemo(() => V({
        fixedCacheKey: X,
        requestId: M?.requestId
      }), [X, M, V]), W = ie.useMemo(() => R ? p([D], R) : D, [R, D]), P = s(W, Cu), te = X == null ? M?.arg.originalArgs : void 0, ue = ie.useCallback(() => {
        c(() => {
          M && Y(void 0), X && _(u.internalActions.removeMutationResult({
            requestId: ae,
            fixedCacheKey: X
          }));
        });
      }, [_, X, M, ae]), y = mf(P, ...yf, "endpointName");
      ie.useDebugValue(y);
      const J = ie.useMemo(() => ({
        ...P,
        originalArgs: te,
        reset: ue
      }), [P, te, ue]);
      return ie.useMemo(() => [$, J], [$, J]);
    };
  }
}
var pp = /* @__PURE__ */ Symbol(), Sp = ({
  batch: u = Av,
  hooks: c = {
    useDispatch: J1,
    useSelector: k1,
    useStore: K1
  },
  createSelector: f = Hf,
  unstable__sideEffectsInRender: s = !1,
  ...d
} = {}) => ({
  name: pp,
  init(h, {
    serializeQueryArgs: p
  }, z) {
    const g = h, {
      buildQueryHooks: m,
      buildInfiniteQueryHooks: j,
      buildMutationHook: S,
      usePrefetch: N
    } = gp({
      api: h,
      moduleOptions: {
        batch: u,
        hooks: c,
        unstable__sideEffectsInRender: s,
        createSelector: f
      },
      serializeQueryArgs: p,
      context: z
    });
    return vu(g, {
      usePrefetch: N
    }), vu(z, {
      batch: u
    }), {
      injectEndpoint(Q, T) {
        if (sp(T)) {
          const {
            useQuery: L,
            useLazyQuery: x,
            useLazyQuerySubscription: G,
            useQueryState: F,
            useQuerySubscription: b
          } = m(Q);
          vu(g.endpoints[Q], {
            useQuery: L,
            useLazyQuery: x,
            useLazyQuerySubscription: G,
            useQueryState: F,
            useQuerySubscription: b
          }), h[`use${dc(Q)}Query`] = L, h[`useLazy${dc(Q)}Query`] = x;
        }
        if (fp(T)) {
          const L = S(Q);
          vu(g.endpoints[Q], {
            useMutation: L
          }), h[`use${dc(Q)}Mutation`] = L;
        } else if (Th(T)) {
          const {
            useInfiniteQuery: L,
            useInfiniteQuerySubscription: x,
            useInfiniteQueryState: G
          } = j(Q);
          vu(g.endpoints[Q], {
            useInfiniteQuery: L,
            useInfiniteQuerySubscription: x,
            useInfiniteQueryState: G
          }), h[`use${dc(Q)}InfiniteQuery`] = L;
        }
      }
    };
  }
}), bp = /* @__PURE__ */ Eh(Ch(), Sp());
let Lc = {
  apiUrl: "http://localhost:3000",
  apiToken: ""
};
const Ah = (u) => {
  Lc = u;
}, _p = Lg({
  baseUrl: "",
  prepareHeaders: (u) => (u.set("X-API-Token", Lc.apiToken), u)
}), Ep = async (u, c, f) => {
  const s = typeof u == "string" ? u : u.url, d = `${Lc.apiUrl}${s}`, h = typeof u == "string" ? d : { ...u, url: d };
  return _p(h, c, f);
}, vc = bp({
  reducerPath: "bookingApi",
  baseQuery: Ep,
  tagTypes: ["Slots", "Config"],
  endpoints: (u) => ({
    // Получить настройки клиента
    getClientConfig: u.query({
      query: () => `/public/config/${Lc.apiToken}`,
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
  useGetClientConfigQuery: Cp,
  useGetAvailableSlotsQuery: Tp,
  useCreateBookingMutation: Ap
} = vc, Mp = {
  selectedDate: null,
  currentMonth: (/* @__PURE__ */ new Date()).toISOString()
}, Mh = Pn({
  name: "calendar",
  initialState: Mp,
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
    },
    resetCalendar: (u) => {
      u.selectedDate = null, u.currentMonth = (/* @__PURE__ */ new Date()).toISOString();
    }
  }
}), { setSelectedDate: Dp, setCurrentMonth: D3, nextMonth: zp, previousMonth: Op, resetCalendar: Oc } = Mh.actions, Rp = Mh.reducer, q1 = {
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
}, Dh = Pn({
  name: "booking",
  initialState: q1,
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
      const c = u.recaptchaToken;
      u.currentStep = "calendar", u.selectedSlot = null, u.formData = q1.formData, u.bookingResult = null, u.recaptchaToken = c;
    }
  }
}), {
  setCurrentStep: Uf,
  setSelectedSlot: B1,
  updateFormData: Np,
  setBookingResult: Up,
  setRecaptchaToken: xp,
  resetBooking: Rc
} = Dh.actions, jp = Dh.reducer, Eu = og({
  reducer: {
    [vc.reducerPath]: vc.reducer,
    calendar: Rp,
    booking: jp
  },
  middleware: (u) => u().concat(vc.middleware)
});
var vf = { exports: {} }, gu = {};
var H1;
function qp() {
  if (H1) return gu;
  H1 = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.fragment");
  function f(s, d, h) {
    var p = null;
    if (h !== void 0 && (p = "" + h), d.key !== void 0 && (p = "" + d.key), "key" in d) {
      h = {};
      for (var z in d)
        z !== "key" && (h[z] = d[z]);
    } else h = d;
    return d = h.ref, {
      $$typeof: u,
      type: s,
      key: p,
      ref: d !== void 0 ? d : null,
      props: h
    };
  }
  return gu.Fragment = c, gu.jsx = f, gu.jsxs = f, gu;
}
var Q1;
function Bp() {
  return Q1 || (Q1 = 1, vf.exports = qp()), vf.exports;
}
var K = Bp();
const Gu = J1.withTypes(), zl = k1.withTypes(), Hp = "_calendar_1kq8r_1", Qp = "_header_1kq8r_7", wp = "_monthYear_1kq8r_14", Lp = "_month_1kq8r_14", Yp = "_year_1kq8r_27", Gp = "_navigation_1kq8r_33", Vp = "_navButton_1kq8r_38", Xp = "_weekDays_1kq8r_47", Zp = "_weekDay_1kq8r_47", Kp = "_daysGrid_1kq8r_63", Jp = "_dayCell_1kq8r_70", kp = "_selected_1kq8r_87", Fp = "_disabled_1kq8r_92", pt = {
  calendar: Hp,
  header: Qp,
  monthYear: wp,
  month: Lp,
  year: Yp,
  navigation: Gp,
  navButton: Vp,
  weekDays: Xp,
  weekDay: Zp,
  daysGrid: Kp,
  dayCell: Jp,
  selected: kp,
  disabled: Fp
}, Wp = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2020C0%208.95431%208.95431%200%2020%200C31.0457%200%2040%208.95431%2040%2020C40%2031.0457%2031.0457%2040%2020%2040C8.95431%2040%200%2031.0457%200%2020Z'%20fill='%232C2C2E'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M22.495%2026.495C22.7684%2026.2216%2022.7684%2025.7784%2022.495%2025.505L16.99%2020L22.495%2014.495C22.7684%2014.2216%2022.7684%2013.7784%2022.495%2013.505C22.2217%2013.2317%2021.7784%2013.2317%2021.5051%2013.505L15.5051%2019.505C15.2317%2019.7784%2015.2317%2020.2216%2015.5051%2020.495L21.5051%2026.495C21.7784%2026.7684%2022.2217%2026.7684%2022.495%2026.495Z'%20fill='%23F2F2F2'/%3e%3c/svg%3e", $p = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2020C0%208.95431%208.95431%200%2020%200C31.0457%200%2040%208.95431%2040%2020C40%2031.0457%2031.0457%2040%2020%2040C8.95431%2040%200%2031.0457%200%2020Z'%20fill='%232C2C2E'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.505%2013.505C17.2316%2013.7784%2017.2316%2014.2216%2017.505%2014.495L23.01%2020L17.505%2025.505C17.2316%2025.7784%2017.2316%2026.2216%2017.505%2026.495C17.7783%2026.7683%2018.2216%2026.7683%2018.4949%2026.495L24.4949%2020.495C24.7683%2020.2216%2024.7683%2019.7784%2024.4949%2019.505L18.4949%2013.505C18.2216%2013.2316%2017.7783%2013.2316%2017.505%2013.505Z'%20fill='%23F2F2F2'/%3e%3c/svg%3e", Ip = () => {
  const u = Gu(), { selectedDate: c, currentMonth: f } = zl((S) => S.calendar), s = ie.useMemo(() => {
    const S = new Date(f), N = S.getFullYear(), Q = S.getMonth(), T = new Date(N, Q, 1), x = new Date(N, Q + 1, 0).getDate(), G = T.getDay(), F = [];
    for (let b = 0; b < (G === 0 ? 6 : G - 1); b++)
      F.push(null);
    for (let b = 1; b <= x; b++)
      F.push(new Date(N, Q, b));
    return F;
  }, [f]), d = new Date(f), h = d.toLocaleDateString("ru-RU", {
    month: "long"
  }), p = d.getFullYear().toString(), z = (S) => {
    const N = /* @__PURE__ */ new Date();
    N.setHours(0, 0, 0, 0), S >= N && u(Dp(S.toISOString()));
  }, g = (S) => {
    if (!S || !c) return !1;
    const N = new Date(c);
    return S.getDate() === N.getDate() && S.getMonth() === N.getMonth() && S.getFullYear() === N.getFullYear();
  }, m = (S) => {
    if (!S) return !0;
    const N = /* @__PURE__ */ new Date();
    return N.setHours(0, 0, 0, 0), S < N;
  }, j = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  return /* @__PURE__ */ K.jsxs("div", { className: pt.calendar, children: [
    /* @__PURE__ */ K.jsxs("div", { className: pt.header, children: [
      /* @__PURE__ */ K.jsxs("div", { className: pt.monthYear, children: [
        /* @__PURE__ */ K.jsx("span", { className: pt.month, children: h }),
        /* @__PURE__ */ K.jsx("span", { className: pt.year, children: p })
      ] }),
      /* @__PURE__ */ K.jsxs("div", { className: pt.navigation, children: [
        /* @__PURE__ */ K.jsx(
          "div",
          {
            className: pt.navButton,
            onClick: () => u(Op()),
            children: /* @__PURE__ */ K.jsx("img", { src: Wp, alt: "←" })
          }
        ),
        /* @__PURE__ */ K.jsx(
          "div",
          {
            className: pt.navButton,
            onClick: () => u(zp()),
            children: /* @__PURE__ */ K.jsx("img", { src: $p, alt: "→" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ K.jsx("div", { className: pt.weekDays, children: j.map((S) => /* @__PURE__ */ K.jsx("div", { className: pt.weekDay, children: S }, S)) }),
    /* @__PURE__ */ K.jsx("div", { className: pt.daysGrid, children: s.map((S, N) => /* @__PURE__ */ K.jsx(
      "button",
      {
        className: `${pt.dayCell} ${g(S) ? pt.selected : ""} ${m(S) ? pt.disabled : ""}`,
        onClick: () => S && z(S),
        disabled: m(S),
        children: S ? S.getDate() : ""
      },
      N
    )) })
  ] });
}, Pp = "_container_1hh8m_1", eS = "_title_1hh8m_11", tS = "_message_1hh8m_19", nS = "_loading_1hh8m_26", lS = "_spinner_1hh8m_32", aS = "_error_1hh8m_47", uS = "_slotsList_1hh8m_54", iS = "_slotButton_1hh8m_63", cS = "_selected_1hh8m_80", rS = "_slotTime_1hh8m_85", sS = "_continueButton_1hh8m_105", $e = {
  container: Pp,
  title: eS,
  message: tS,
  loading: nS,
  spinner: lS,
  error: aS,
  slotsList: uS,
  slotButton: iS,
  selected: cS,
  slotTime: rS,
  continueButton: sS
}, zh = () => {
  const u = Gu(), { selectedDate: c } = zl((N) => N.calendar), { selectedSlot: f } = zl((N) => N.booking), s = ie.useMemo(() => {
    if (!c) return null;
    const N = new Date(c), Q = new Date(N);
    Q.setHours(0, 0, 0, 0);
    const T = new Date(N);
    return T.setHours(23, 59, 59, 999), {
      startDate: Q.toISOString(),
      endDate: T.toISOString(),
      workingHours: "9-18"
    };
  }, [c]), { data: d, isLoading: h, error: p } = Tp(s, {
    skip: !s
  });
  ie.useEffect(() => {
    u(B1(null));
  }, [c, u]);
  const z = (N) => {
    u(B1(N));
  }, g = () => {
    f && u(Uf("form"));
  }, m = (N) => f?.start === N.start && f?.end === N.end, j = (N) => new Date(N).toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit"
  });
  if (!c)
    return /* @__PURE__ */ K.jsxs("div", { className: $e.container, children: [
      /* @__PURE__ */ K.jsx("h3", { className: $e.title, children: "Доступное время" }),
      /* @__PURE__ */ K.jsx("p", { className: $e.message, children: "Выберите дату в календаре" })
    ] });
  if (h)
    return /* @__PURE__ */ K.jsxs("div", { className: $e.container, children: [
      /* @__PURE__ */ K.jsx("h3", { className: $e.title, children: "Доступное время" }),
      /* @__PURE__ */ K.jsxs("div", { className: $e.loading, children: [
        /* @__PURE__ */ K.jsx("div", { className: $e.spinner }),
        /* @__PURE__ */ K.jsx("p", { children: "Загрузка слотов..." })
      ] })
    ] });
  if (p)
    return /* @__PURE__ */ K.jsxs("div", { className: $e.container, children: [
      /* @__PURE__ */ K.jsx("h3", { className: $e.title, children: "Доступное время" }),
      /* @__PURE__ */ K.jsx("p", { className: $e.error, children: "Нет доступных слотов" })
    ] });
  const S = d?.data?.slots || [];
  return /* @__PURE__ */ K.jsxs("div", { className: $e.container, children: [
    /* @__PURE__ */ K.jsx("h3", { className: $e.title, children: "Доступное время" }),
    S.length === 0 ? /* @__PURE__ */ K.jsx("p", { className: $e.message, children: "Нет доступных слотов" }) : /* @__PURE__ */ K.jsxs(K.Fragment, { children: [
      /* @__PURE__ */ K.jsx("div", { className: $e.slotsList, children: S.map((N, Q) => /* @__PURE__ */ K.jsx(
        "button",
        {
          className: `${$e.slotButton} ${m(N) ? $e.selected : ""}`,
          onClick: () => z(N),
          children: /* @__PURE__ */ K.jsx("span", { className: $e.slotTime, children: j(N.start) })
        },
        Q
      )) }),
      /* @__PURE__ */ K.jsx(
        "button",
        {
          className: $e.continueButton,
          onClick: g,
          disabled: !f,
          children: "Продолжить"
        }
      )
    ] })
  ] });
}, fS = "_card_1dbg2_1", oS = "_photoContainer_1dbg2_10", dS = "_photo_1dbg2_10", hS = "_photoPlaceholder_1dbg2_22", mS = "_initials_1dbg2_32", yS = "_name_1dbg2_38", vS = "_description_1dbg2_45", gS = "_email_1dbg2_52", pS = "_divider_1dbg2_66", SS = "_info_1dbg2_72", bS = "_infoItem_1dbg2_77", _S = "_icon_1dbg2_85", ES = "_infoText_1dbg2_92", CS = "_meetInfo_1dbg2_98", TS = "_meetSubject_1dbg2_103", AS = "_meetDescription_1dbg2_110", Le = {
  card: fS,
  photoContainer: oS,
  photo: dS,
  photoPlaceholder: hS,
  initials: mS,
  name: yS,
  description: vS,
  email: gS,
  divider: pS,
  info: SS,
  infoItem: bS,
  icon: _S,
  infoText: ES,
  meetInfo: CS,
  meetSubject: TS,
  meetDescription: AS
}, MS = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21%2012C21%2016.9706%2016.9706%2021%2012%2021C7.02944%2021%203%2016.9706%203%2012C3%207.02944%207.02944%203%2012%203C16.9706%203%2021%207.02944%2021%2012ZM12%2019.875C16.3492%2019.875%2019.875%2016.3492%2019.875%2012C19.875%207.65076%2016.3492%204.125%2012%204.125C7.65076%204.125%204.125%207.65076%204.125%2012C4.125%2016.3492%207.65076%2019.875%2012%2019.875Z'%20fill='%232C2C2E'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12%206.9375C12.3107%206.9375%2012.5625%207.18934%2012.5625%207.5V12.5625H15.375C15.6857%2012.5625%2015.9375%2012.8143%2015.9375%2013.125C15.9375%2013.4357%2015.6857%2013.6875%2015.375%2013.6875H12.2812C11.8153%2013.6875%2011.4375%2013.3097%2011.4375%2012.8438V7.5C11.4375%207.18934%2011.6893%206.9375%2012%206.9375Z'%20fill='%232C2C2E'/%3e%3c/svg%3e", DS = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.24231%202.90907C11.3455%202.27106%2013.6049%202.38205%2015.6355%203.22315C17.6661%204.06424%2019.3422%205.58338%2020.3783%207.52173C21.4143%209.46009%2021.7463%2011.6977%2021.3175%2013.8534C20.8887%2016.009%2019.7257%2017.9493%2018.0268%2019.3436C16.3278%2020.7379%2014.1979%2021.5%2012%2021.5C11.7239%2021.5%2011.5%2021.2761%2011.5%2021C11.5%2020.7239%2011.7239%2020.5%2012%2020.5C13.9665%2020.5%2015.8722%2019.8181%2017.3924%2018.5706C18.9125%2017.323%2019.953%2015.587%2020.3367%2013.6583C20.7203%2011.7295%2020.4234%209.72745%2019.4963%207.99313C18.5693%206.25881%2017.0697%204.89958%2015.2528%204.14702C13.436%203.39447%2011.4144%203.29516%209.5326%203.86601C7.65075%204.43686%206.02506%205.64255%204.93252%207.27765C3.83998%208.91275%203.34819%2010.8761%203.54094%2012.8331C3.7337%2014.7902%204.59907%2016.6199%205.98961%2018.0104C6.18487%2018.2057%206.18487%2018.5222%205.98961%2018.7175C5.79434%2018.9128%205.47776%2018.9128%205.2825%2018.7175C3.72837%2017.1634%202.76119%2015.1185%202.54576%2012.9312C2.33033%2010.7439%202.87998%208.54955%204.10105%206.72208C5.32213%204.89462%207.13908%203.54708%209.24231%202.90907Z'%20fill='%232C2C2E'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16.3201%209.61589C16.108%209.43911%2015.7927%209.46777%2015.6159%209.67991L12.0179%2013.9975C11.6807%2014.4022%2011.4603%2014.6648%2011.273%2014.8352C11.0964%2014.9959%2011.0112%2015.0155%2010.9555%2015.0181C10.8998%2015.0206%2010.8131%2015.0087%2010.6227%2014.8647C10.4207%2014.712%2010.1775%2014.4703%209.80496%2014.0978L8.35357%2012.6464C8.15831%2012.4512%207.84172%2012.4512%207.64646%2012.6464C7.4512%2012.8417%207.4512%2013.1583%207.64646%2013.3536L9.12241%2014.8295C9.46344%2015.1706%209.75559%2015.4627%2010.0195%2015.6623C10.3013%2015.8754%2010.6159%2016.0345%2011.0008%2016.017C11.3856%2015.9996%2011.6846%2015.8126%2011.9459%2015.5749C12.1907%2015.3523%2012.4552%2015.0349%2012.7639%2014.6643L16.3841%2010.3201C16.5609%2010.108%2016.5322%209.79267%2016.3201%209.61589Z'%20fill='%232C2C2E'/%3e%3c/svg%3e", zS = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAfnSURBVHgB7Zt7bFPXHce/5z58nfgBNE6C46RxQ+mAZIFioChNq71pt8DUSWVb0dZt6rq10l6omzRpm7r/Nmmof2yaBOofLaq0StM0TRNjha0bjxSVAqUdU4OAAiVtAnmSxq97z72n5zi2Y1MSv5PcxB/JsWPfe33O17/f9zwvUKVKlSpVqlSpsjQhKB1xDZk/aDAIZ10dTMwTp08nvttKlokkX5dEqQKJ8yX+MMeeWn/M+4u3us1B1cB8wHhZJBaTnOTc4b8ZX3/457iCqR+upB+sFIGmxdn2YK+zcaJLe+YsNW8oCuYDNlUi/sTUDkLe/gdC679jnEGJSCiOtDgTPd0nFJN2RQyTEoL5ESdVoqknEjnLrM6voHfvk1BRfB0TFHNyWpwPd3SfINTcGqEm5T/c/IlzCw4FhL0H5x1N8naU6EOFCjSdVj3dvdDNrVGDcnGwYMRJQng0o/8Ga0eJFCJQdlpRsyuiL0hx0rDcKZ9qgYFQSM14L61LvpXLSqtU5Myr5+QBYQnrnvHj5MP81JlvvRAbMnepWsfg+Zf6Nt14/vUbqYPyqaBd0qoQRH1Y6MmQrD3acSF8KdLGqGVRGYF7dq09ywXyZx44G7ZLqzwQZbfaf9PdsuwnWyeM0UkujmnxcJNgMZhxw8c/d2QePBO2TKsciLLTDfu//EXv6roDN08PWESRpsSZgrCptEyn5kwRtNjSKj0c2vLXr+7x3LniQOTyuElkwuvIZs0iaYaLLba0Spjx5y89fQxE2h39YIJCInI+4wjlNhdaNGnFVIVHjY67d93nDuzuvDJ28voKXhchTt71yTxwcaWVIkEbjF8I7Hnknjt7mvpunhoAkSVuw4X1+DMPTuSo/mBjrzp+ocuilLqQp9IGsdBACVbLRKktxwxKRumGGaJD0FVlumXJBRU9xMk4Bns++bjLX//ixKmBvPxmpiKkr7v7sede/H1wc9dweJzXNimOqG/K02d4TYgq6dGLl61vP/1NasCPMhGOkPHt97MndmwjO+l4fueIIjm9Bp44toq+ZK36zCbXuBUXflMkWRFyoGadt87fBTNiFhSGXB+EB9pG/rcXx1Hm+bLVLdLGHU5pJ2btFPOOjYgaxQRxMGx9dSPeGHIra1aFYTJNKmVSJ0uIGhqmHsOEQeMoBIlfhtDJiniVoqImhzZcBALNSTGsq1h7cAsi/P/62ghPNSdKpaS5koWA8BvNZeDUqAf+f3bD5P2+5Q4jEVHlwNYC8SYp4Tf7LgWw+egW1LuicHKBLIayYc/+DRdAtEkOD8XjJ9dg/9UAmr2TPJpQdmwnUMKMVRMWL/m9/9qEcxNuNHvCFRFHYCuBUmY8ENPQfngz7yMzNNbGKiaOwDYelDBjt4HXhpeh5VAX7xWb8DooFw0VxR4CJc34ub5m3H88hEZ3FBo3Y1ZhcQQLPsU03qWHx8DOV9fhz/3+pBmXcTiTgwUvkMoQfvhwCP8eTJnx3IkjWPAC/Xg0ZGmxFahTxvg8RdFDqqJZ8B7U4KTeDaEWKDUaaJxOLXjNIQteIGYxy4jpaO1ogdfngR7V51QkW7RiorGKR3SsbGtEQ2sDf13YYLoUbCEQSf7RowaWr1yG5rWBRLrNQStvs8EqF8mIGaj11CLY2QqLT80wvqSFCmac/UbzRMwL83l3Pue8amMbf5Zh6mbFfMme0x1cC4tHjklNBNe3osZbA51HViVEsvV8EONjDYP7UvOaAFasXI54BVo4288oimgSrVpDsB5+3soJkcqJkv1dMmSZr+FLhfVYZUkSC5UUFcCiLIocUSGiRufdAG+9F6rTgWvvXCtbJGUJNBmPYOzDKG8pwigEIjmgs7DP/yXnAwytK1EuTHPIGXCHzFge2idbOK3WgbYNd+HdNy9b3KdEhogteEVnSpZAg6NDGH1/ACw+gUJgVGI1DTeDHXu+cDQ+4kPZ4C2VMRqBPhrV+apo7oVDLpIwbhE9d3UGTUNlYX4NDwzGFSZFjTuzTlJVFU6HA5alohCYrBCFL1pOXhyBMVnYufmQlziZ5eHmrTXUqtf3vfn9pm90rJdd2g/NcLwokexv0jMhPMgpB1/f/vKPapq0Xzt8HoVRq2CfXLwCQazEk8QW4P+GXng2fGH4Ic8nfIpFLfFe3qOURS1QBspbTx14ZfhM/9119/klllg4I3ntn14qAonUks997+Clt/dedLtX+0a4UUlk6v1ZWSoCCcSuCun67w5Fj2zeV+9qbzwjaYrChZoWiSU2KWZ1oJaSQIKU/yhHOv8YYiB/cvhqp0UiYMSR3UleagIJhECJlDv5yMuPEUX6gavtDkU0eopXE/fCvMI/S9/SdYtAczvfW2kkMusSiEg5tffT+/8wfOTqvUaUHjJHYr967XP7e5DRP8weizFb72T9GLy/mMuERaTI///Z4bP8eVvyvcQ+zdQBWYJINb5+ZlVkzDm3sMRkP7R6T18eR9+6JS6r+c9KMUdk7Leqr0WcY1+VhMNYzHQ2udlF1/G/oETfyBRIev/gd/ujV994xuFr484uepxzMS1eJqaLytzr6uXRo1cewLMoqNd8O25VV4w0jcav/f2zWmv385Yebk6M/HKVjQ9uHcuuoeWhn8KYCGBeSBgy/6MofSMn3nv0/C//cx7JezNQArcLv+mLtrc74HQW8AucxvwSEveGC+NNb4pHlSpVqlSpUqVKlaL4CM+wHUMyol4NAAAAAElFTkSuQmCC", w1 = ({ specialist: u }) => {
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
  }, f = u || c, s = {
    timeSlot: f.infoLabels?.timeSlot || c.infoLabels.timeSlot,
    confirmation: f.infoLabels?.confirmation || c.infoLabels.confirmation,
    videoCall: f.infoLabels?.videoCall || c.infoLabels.videoCall
  };
  return /* @__PURE__ */ K.jsxs("div", { className: Le.card, children: [
    /* @__PURE__ */ K.jsx("div", { className: Le.photoContainer, children: f.photo ? /* @__PURE__ */ K.jsx("img", { src: f.photo, alt: f.name, className: Le.photo }) : /* @__PURE__ */ K.jsx("div", { className: Le.photoPlaceholder, children: /* @__PURE__ */ K.jsx("span", { className: Le.initials, children: f.name.split(" ").map((d) => d[0]).join("").toUpperCase().slice(0, 2) }) }) }),
    /* @__PURE__ */ K.jsx("h2", { className: Le.name, children: f.name }),
    f.description && /* @__PURE__ */ K.jsx("p", { className: Le.description, children: f.description }),
    f.email && /* @__PURE__ */ K.jsx("a", { href: `mailto:${f.email}`, className: Le.email, children: f.email }),
    (f.meetSubject || f.meetDescription) && /* @__PURE__ */ K.jsxs("div", { className: Le.meetInfo, children: [
      f.meetSubject && /* @__PURE__ */ K.jsx("span", { className: Le.meetSubject, children: f.meetSubject }),
      f.meetDescription && /* @__PURE__ */ K.jsx("span", { className: Le.meetDescription, children: f.meetDescription })
    ] }),
    /* @__PURE__ */ K.jsx("div", { className: Le.divider }),
    /* @__PURE__ */ K.jsxs("div", { className: Le.info, children: [
      /* @__PURE__ */ K.jsxs("div", { className: Le.infoItem, children: [
        /* @__PURE__ */ K.jsx("img", { src: MS, alt: "Clock", className: Le.icon }),
        /* @__PURE__ */ K.jsx("span", { className: Le.infoText, children: s.timeSlot })
      ] }),
      /* @__PURE__ */ K.jsxs("div", { className: Le.infoItem, children: [
        /* @__PURE__ */ K.jsx("img", { src: DS, alt: "Check", className: Le.icon }),
        /* @__PURE__ */ K.jsx("span", { className: Le.infoText, children: s.confirmation })
      ] }),
      /* @__PURE__ */ K.jsxs("div", { className: Le.infoItem, children: [
        /* @__PURE__ */ K.jsx("img", { src: zS, alt: "Google Meet", className: Le.icon }),
        /* @__PURE__ */ K.jsx("span", { className: Le.infoText, children: s.videoCall })
      ] })
    ] })
  ] });
}, OS = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014C12.1978%2014%2012.3911%2013.9414%2012.5556%2013.8315C12.72%2013.7216%2012.8482%2013.5654%2012.9239%2013.3827C12.9996%2013.2%2013.0194%2012.9989%2012.9808%2012.8049C12.9422%2012.6109%2012.847%2012.4327%2012.7071%2012.2929C12.5673%2012.153%2012.3891%2012.0578%2012.1951%2012.0192C12.0011%2011.9806%2011.8%2012.0004%2011.6173%2012.0761C11.4346%2012.1518%2011.2784%2012.28%2011.1685%2012.4444C11.0586%2012.6089%2011%2012.8022%2011%2013C11%2013.2652%2011.1054%2013.5196%2011.2929%2013.7071C11.4804%2013.8946%2011.7348%2014%2012%2014ZM17%2014C17.1978%2014%2017.3911%2013.9414%2017.5556%2013.8315C17.72%2013.7216%2017.8482%2013.5654%2017.9239%2013.3827C17.9996%2013.2%2018.0194%2012.9989%2017.9808%2012.8049C17.9422%2012.6109%2017.847%2012.4327%2017.7071%2012.2929C17.5673%2012.153%2017.3891%2012.0578%2017.1951%2012.0192C17.0011%2011.9806%2016.8%2012.0004%2016.6173%2012.0761C16.4346%2012.1518%2016.2784%2012.28%2016.1685%2012.4444C16.0586%2012.6089%2016%2012.8022%2016%2013C16%2013.2652%2016.1054%2013.5196%2016.2929%2013.7071C16.4804%2013.8946%2016.7348%2014%2017%2014ZM12%2018C12.1978%2018%2012.3911%2017.9414%2012.5556%2017.8315C12.72%2017.7216%2012.8482%2017.5654%2012.9239%2017.3827C12.9996%2017.2%2013.0194%2016.9989%2012.9808%2016.8049C12.9422%2016.6109%2012.847%2016.4327%2012.7071%2016.2929C12.5673%2016.153%2012.3891%2016.0578%2012.1951%2016.0192C12.0011%2015.9806%2011.8%2016.0004%2011.6173%2016.0761C11.4346%2016.1518%2011.2784%2016.28%2011.1685%2016.4444C11.0586%2016.6089%2011%2016.8022%2011%2017C11%2017.2652%2011.1054%2017.5196%2011.2929%2017.7071C11.4804%2017.8946%2011.7348%2018%2012%2018ZM17%2018C17.1978%2018%2017.3911%2017.9414%2017.5556%2017.8315C17.72%2017.7216%2017.8482%2017.5654%2017.9239%2017.3827C17.9996%2017.2%2018.0194%2016.9989%2017.9808%2016.8049C17.9422%2016.6109%2017.847%2016.4327%2017.7071%2016.2929C17.5673%2016.153%2017.3891%2016.0578%2017.1951%2016.0192C17.0011%2015.9806%2016.8%2016.0004%2016.6173%2016.0761C16.4346%2016.1518%2016.2784%2016.28%2016.1685%2016.4444C16.0586%2016.6089%2016%2016.8022%2016%2017C16%2017.2652%2016.1054%2017.5196%2016.2929%2017.7071C16.4804%2017.8946%2016.7348%2018%2017%2018ZM7%2014C7.19778%2014%207.39112%2013.9414%207.55557%2013.8315C7.72002%2013.7216%207.84819%2013.5654%207.92388%2013.3827C7.99957%2013.2%208.01937%2012.9989%207.98079%2012.8049C7.9422%2012.6109%207.84696%2012.4327%207.70711%2012.2929C7.56725%2012.153%207.38907%2012.0578%207.19509%2012.0192C7.00111%2011.9806%206.80004%2012.0004%206.61732%2012.0761C6.43459%2012.1518%206.27841%2012.28%206.16853%2012.4444C6.05865%2012.6089%206%2012.8022%206%2013C6%2013.2652%206.10536%2013.5196%206.29289%2013.7071C6.48043%2013.8946%206.73478%2014%207%2014ZM19%204H18V3C18%202.73478%2017.8946%202.48043%2017.7071%202.29289C17.5196%202.10536%2017.2652%202%2017%202C16.7348%202%2016.4804%202.10536%2016.2929%202.29289C16.1054%202.48043%2016%202.73478%2016%203V4H8V3C8%202.73478%207.89464%202.48043%207.70711%202.29289C7.51957%202.10536%207.26522%202%207%202C6.73478%202%206.48043%202.10536%206.29289%202.29289C6.10536%202.48043%206%202.73478%206%203V4H5C4.20435%204%203.44129%204.31607%202.87868%204.87868C2.31607%205.44129%202%206.20435%202%207V19C2%2019.7956%202.31607%2020.5587%202.87868%2021.1213C3.44129%2021.6839%204.20435%2022%205%2022H19C19.7956%2022%2020.5587%2021.6839%2021.1213%2021.1213C21.6839%2020.5587%2022%2019.7956%2022%2019V7C22%206.20435%2021.6839%205.44129%2021.1213%204.87868C20.5587%204.31607%2019.7956%204%2019%204ZM20%2019C20%2019.2652%2019.8946%2019.5196%2019.7071%2019.7071C19.5196%2019.8946%2019.2652%2020%2019%2020H5C4.73478%2020%204.48043%2019.8946%204.29289%2019.7071C4.10536%2019.5196%204%2019.2652%204%2019V10H20V19ZM20%208H4V7C4%206.73478%204.10536%206.48043%204.29289%206.29289C4.48043%206.10536%204.73478%206%205%206H19C19.2652%206%2019.5196%206.10536%2019.7071%206.29289C19.8946%206.48043%2020%206.73478%2020%207V8ZM7%2018C7.19778%2018%207.39112%2017.9414%207.55557%2017.8315C7.72002%2017.7216%207.84819%2017.5654%207.92388%2017.3827C7.99957%2017.2%208.01937%2016.9989%207.98079%2016.8049C7.9422%2016.6109%207.84696%2016.4327%207.70711%2016.2929C7.56725%2016.153%207.38907%2016.0578%207.19509%2016.0192C7.00111%2015.9806%206.80004%2016.0004%206.61732%2016.0761C6.43459%2016.1518%206.27841%2016.28%206.16853%2016.4444C6.05865%2016.6089%206%2016.8022%206%2017C6%2017.2652%206.10536%2017.5196%206.29289%2017.7071C6.48043%2017.8946%206.73478%2018%207%2018Z'%20fill='%23404040'/%3e%3c/svg%3e", RS = "_container_18m29_1", NS = "_selectedSlot_18m29_6", US = "_slotIcon_18m29_16", xS = "_slotInfo_18m29_22", jS = "_slotDate_18m29_28", qS = "_slotTime_18m29_34", BS = "_error_18m29_40", HS = "_form_18m29_50", QS = "_formGroup_18m29_56", wS = "_label_18m29_61", LS = "_input_18m29_68", YS = "_textarea_18m29_69", GS = "_buttons_18m29_89", VS = "_backButton_18m29_96", XS = "_submitButton_18m29_97", He = {
  container: RS,
  selectedSlot: NS,
  slotIcon: US,
  slotInfo: xS,
  slotDate: jS,
  slotTime: qS,
  error: BS,
  form: HS,
  formGroup: QS,
  label: wS,
  input: LS,
  textarea: YS,
  buttons: GS,
  backButton: VS,
  submitButton: XS
}, Oh = () => {
  const u = Gu(), { selectedSlot: c, formData: f, recaptchaToken: s } = zl((Q) => Q.booking), [d, { isLoading: h }] = Ap(), [p, z] = ie.useState(null), g = (Q) => {
    const { name: T, value: L } = Q.target;
    u(Np({ [T]: L }));
  }, m = async (Q) => {
    if (Q.preventDefault(), z(null), !c) {
      z("Слот не выбран");
      return;
    }
    if (!f.name || !f.email || !f.phone) {
      z("Пожалуйста, заполните все обязательные поля");
      return;
    }
    try {
      let T = s;
      if (s && typeof window < "u" && window.grecaptcha)
        try {
          T = await window.grecaptcha.execute(s, { action: "submit" }), console.log("reCAPTCHA token generated:", T?.substring(0, 20) + "...");
        } catch (x) {
          console.error("reCAPTCHA error:", x), z("Ошибка проверки reCAPTCHA");
          return;
        }
      const L = await d({
        startTime: c.start,
        name: f.name,
        email: f.email,
        phone: f.phone,
        description: f.description,
        recaptchaToken: T || void 0
      }).unwrap();
      L.success && (u(
        Up({
          meetLink: L.data.booking.meetLink,
          startTime: L.data.booking.startTime,
          endTime: L.data.booking.endTime
        })
      ), u(Uf("success")));
    } catch (T) {
      z(T?.data?.error || "Ошибка при бронировании");
    }
  }, j = () => {
    u(Uf("calendar"));
  }, S = () => {
    if (!c) return "";
    const Q = new Date(c.start), T = Q.toLocaleDateString("ru-RU", { weekday: "long" }), L = Q.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    return `${T.charAt(0).toUpperCase() + T.slice(1)}, ${L}`;
  }, N = () => c ? new Date(c.start).toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit"
  }) : "";
  return /* @__PURE__ */ K.jsxs("div", { className: He.container, children: [
    /* @__PURE__ */ K.jsxs("div", { className: He.selectedSlot, children: [
      /* @__PURE__ */ K.jsx("img", { src: OS, alt: "Календарь", className: He.slotIcon }),
      /* @__PURE__ */ K.jsxs("div", { className: He.slotInfo, children: [
        /* @__PURE__ */ K.jsx("div", { className: He.slotDate, children: S() }),
        /* @__PURE__ */ K.jsx("div", { className: He.slotTime, children: N() })
      ] })
    ] }),
    p && /* @__PURE__ */ K.jsx("div", { className: He.error, children: p }),
    /* @__PURE__ */ K.jsxs("form", { onSubmit: m, className: He.form, children: [
      /* @__PURE__ */ K.jsxs("div", { className: He.formGroup, children: [
        /* @__PURE__ */ K.jsx("label", { htmlFor: "name", className: He.label, children: "Имя *" }),
        /* @__PURE__ */ K.jsx(
          "input",
          {
            type: "text",
            id: "name",
            name: "name",
            value: f.name,
            onChange: g,
            className: He.input,
            placeholder: "Иван Петров",
            required: !0
          }
        )
      ] }),
      /* @__PURE__ */ K.jsxs("div", { className: He.formGroup, children: [
        /* @__PURE__ */ K.jsx("label", { htmlFor: "email", className: He.label, children: "Email *" }),
        /* @__PURE__ */ K.jsx(
          "input",
          {
            type: "email",
            id: "email",
            name: "email",
            value: f.email,
            onChange: g,
            className: He.input,
            placeholder: "ivan@example.com",
            required: !0
          }
        )
      ] }),
      /* @__PURE__ */ K.jsxs("div", { className: He.formGroup, children: [
        /* @__PURE__ */ K.jsx("label", { htmlFor: "phone", className: He.label, children: "Телефон *" }),
        /* @__PURE__ */ K.jsx(
          "input",
          {
            type: "tel",
            id: "phone",
            name: "phone",
            value: f.phone,
            onChange: g,
            className: He.input,
            placeholder: "",
            required: !0
          }
        )
      ] }),
      /* @__PURE__ */ K.jsxs("div", { className: He.formGroup, children: [
        /* @__PURE__ */ K.jsx("label", { htmlFor: "description", className: He.label, children: "Комментарий (необязательно)" }),
        /* @__PURE__ */ K.jsx(
          "textarea",
          {
            id: "description",
            name: "description",
            value: f.description,
            onChange: g,
            className: He.textarea,
            placeholder: "Опишите кратко, что вы хотели бы обсудить",
            rows: 3
          }
        )
      ] }),
      /* @__PURE__ */ K.jsxs("div", { className: He.buttons, children: [
        /* @__PURE__ */ K.jsx(
          "button",
          {
            type: "button",
            onClick: j,
            className: He.backButton,
            disabled: h,
            children: "Назад"
          }
        ),
        /* @__PURE__ */ K.jsx(
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
}, ZS = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.72%208.79L10.43%2013.09L8.78%2011.44C8.69036%2011.3353%208.58004%2011.2503%208.45597%2011.1903C8.33191%2011.1303%208.19678%2011.0965%208.05906%2011.0912C7.92134%2011.0859%207.78401%2011.1091%207.65568%2011.1594C7.52736%2011.2096%207.41081%2011.2859%207.31335%2011.3833C7.2159%2011.4808%207.13964%2011.5974%207.08937%2011.7257C7.03909%2011.854%207.01589%2011.9913%207.02121%2012.1291C7.02653%2012.2668%207.06026%2012.4019%207.12028%2012.526C7.1803%2012.65%207.26532%2012.7604%207.37%2012.85L9.72%2015.21C9.81344%2015.3027%209.92426%2015.376%2010.0461%2015.4258C10.1679%2015.4755%2010.2984%2015.5008%2010.43%2015.5C10.6923%2015.4989%2010.9437%2015.3947%2011.13%2015.21L16.13%2010.21C16.2237%2010.117%2016.2981%2010.0064%2016.3489%209.88458C16.3997%209.76272%2016.4258%209.63201%2016.4258%209.5C16.4258%209.36799%2016.3997%209.23728%2016.3489%209.11542C16.2981%208.99356%2016.2237%208.88296%2016.13%208.79C15.9426%208.60375%2015.6892%208.49921%2015.425%208.49921C15.1608%208.49921%2014.9074%208.60375%2014.72%208.79ZM12%202C10.0222%202%208.08879%202.58649%206.4443%203.6853C4.79981%204.78412%203.51809%206.3459%202.76121%208.17317C2.00433%2010.0004%201.8063%2012.0111%202.19215%2013.9509C2.578%2015.8907%203.53041%2017.6725%204.92894%2019.0711C6.32746%2020.4696%208.10929%2021.422%2010.0491%2021.8079C11.9889%2022.1937%2013.9996%2021.9957%2015.8268%2021.2388C17.6541%2020.4819%2019.2159%2019.2002%2020.3147%2017.5557C21.4135%2015.9112%2022%2013.9778%2022%2012C22%2010.6868%2021.7413%209.38642%2021.2388%208.17317C20.7363%206.95991%2019.9997%205.85752%2019.0711%204.92893C18.1425%204.00035%2017.0401%203.26375%2015.8268%202.7612C14.6136%202.25866%2013.3132%202%2012%202ZM12%2020C10.4178%2020%208.87104%2019.5308%207.55544%2018.6518C6.23985%2017.7727%205.21447%2016.5233%204.60897%2015.0615C4.00347%2013.5997%203.84504%2011.9911%204.15372%2010.4393C4.4624%208.88743%205.22433%207.46197%206.34315%206.34315C7.46197%205.22433%208.88743%204.4624%2010.4393%204.15372C11.9911%203.84504%2013.5997%204.00346%2015.0615%204.60896C16.5233%205.21447%2017.7727%206.23984%2018.6518%207.55544C19.5308%208.87103%2020%2010.4177%2020%2012C20%2014.1217%2019.1572%2016.1566%2017.6569%2017.6569C16.1566%2019.1571%2014.1217%2020%2012%2020Z'%20fill='black'/%3e%3c/svg%3e", KS = "_container_e5ou6_1", JS = "_icon_e5ou6_10", kS = "_title_e5ou6_17", FS = "_subtitle_e5ou6_24", WS = "_details_e5ou6_30", $S = "_detailRow_e5ou6_38", IS = "_detailLabel_e5ou6_50", PS = "_detailValue_e5ou6_56", e3 = "_newBookingButton_e5ou6_81", Ve = {
  container: KS,
  icon: JS,
  title: kS,
  subtitle: FS,
  details: WS,
  detailRow: $S,
  detailLabel: IS,
  detailValue: PS,
  newBookingButton: e3
}, t3 = () => {
  const u = Gu(), { bookingResult: c, formData: f } = zl((z) => z.booking), s = () => {
    u(Rc()), u(Oc());
  }, d = (z) => {
    const g = new Date(z);
    return {
      date: g.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }),
      time: g.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit"
      })
    };
  };
  if (!c)
    return null;
  const { date: h, time: p } = d(c.startTime);
  return /* @__PURE__ */ K.jsxs("div", { className: Ve.container, children: [
    /* @__PURE__ */ K.jsx("img", { src: ZS, alt: "Успех", className: Ve.icon }),
    /* @__PURE__ */ K.jsx("h2", { className: Ve.title, children: "Встреча успешно забронирована!" }),
    /* @__PURE__ */ K.jsx("p", { className: Ve.subtitle, children: "На ваш email отправлена ссылка на встречу" }),
    /* @__PURE__ */ K.jsxs("div", { className: Ve.details, children: [
      /* @__PURE__ */ K.jsxs("div", { className: Ve.detailRow, children: [
        /* @__PURE__ */ K.jsx("span", { className: Ve.detailLabel, children: "Дата:" }),
        /* @__PURE__ */ K.jsx("span", { className: Ve.detailValue, children: h })
      ] }),
      /* @__PURE__ */ K.jsxs("div", { className: Ve.detailRow, children: [
        /* @__PURE__ */ K.jsx("span", { className: Ve.detailLabel, children: "Время:" }),
        /* @__PURE__ */ K.jsx("span", { className: Ve.detailValue, children: p })
      ] }),
      /* @__PURE__ */ K.jsxs("div", { className: Ve.detailRow, children: [
        /* @__PURE__ */ K.jsx("span", { className: Ve.detailLabel, children: "Имя:" }),
        /* @__PURE__ */ K.jsx("span", { className: Ve.detailValue, children: f.name })
      ] }),
      /* @__PURE__ */ K.jsxs("div", { className: Ve.detailRow, children: [
        /* @__PURE__ */ K.jsx("span", { className: Ve.detailLabel, children: "Email:" }),
        /* @__PURE__ */ K.jsx("span", { className: Ve.detailValue, children: f.email })
      ] }),
      /* @__PURE__ */ K.jsxs("div", { className: Ve.detailRow, children: [
        /* @__PURE__ */ K.jsx("span", { className: Ve.detailLabel, children: "Телефон:" }),
        /* @__PURE__ */ K.jsx("span", { className: Ve.detailValue, children: f.phone })
      ] })
    ] }),
    /* @__PURE__ */ K.jsx("button", { onClick: s, className: Ve.newBookingButton, children: "Забронировать еще" })
  ] });
}, n3 = "_overlay_q0uxt_1", l3 = "_content_q0uxt_24", a3 = "_closeButton_q0uxt_44", gf = {
  overlay: n3,
  content: l3,
  closeButton: a3
}, u3 = ({ isOpen: u, onClose: c }) => (ie.useEffect(() => {
  if (u) {
    const f = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden", document.body.style.paddingRight = `${f}px`;
  } else
    document.body.style.overflow = "", document.body.style.paddingRight = "";
  return () => {
    document.body.style.overflow = "", document.body.style.paddingRight = "";
  };
}, [u]), ie.useEffect(() => {
  const f = (s) => {
    s.key === "Escape" && u && c();
  };
  return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
}, [u, c]), u ? /* @__PURE__ */ K.jsx("div", { className: gf.overlay, onClick: c, children: /* @__PURE__ */ K.jsxs("div", { className: gf.content, onClick: (f) => f.stopPropagation(), children: [
  /* @__PURE__ */ K.jsx("button", { className: gf.closeButton, onClick: c, "aria-label": "Закрыть", children: "×" }),
  /* @__PURE__ */ K.jsx(zh, {})
] }) }) : null), i3 = "_overlay_e6h7c_1", c3 = "_content_e6h7c_24", r3 = "_closeButton_e6h7c_44", pf = {
  overlay: i3,
  content: c3,
  closeButton: r3
}, s3 = ({ isOpen: u, onClose: c }) => (ie.useEffect(() => {
  if (u) {
    const f = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden", document.body.style.paddingRight = `${f}px`;
  } else
    document.body.style.overflow = "", document.body.style.paddingRight = "";
  return () => {
    document.body.style.overflow = "", document.body.style.paddingRight = "";
  };
}, [u]), ie.useEffect(() => {
  const f = (s) => {
    s.key === "Escape" && u && c();
  };
  return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
}, [u, c]), u ? /* @__PURE__ */ K.jsx("div", { className: pf.overlay, onClick: c, children: /* @__PURE__ */ K.jsxs("div", { className: pf.content, onClick: (f) => f.stopPropagation(), children: [
  /* @__PURE__ */ K.jsx("button", { className: pf.closeButton, onClick: c, "aria-label": "Закрыть", children: "×" }),
  /* @__PURE__ */ K.jsx(Oh, {})
] }) }) : null), f3 = "_widget_ofhhd_1", o3 = "_content_ofhhd_15", d3 = "_leftColumn_ofhhd_22", h3 = "_centerColumn_ofhhd_30", m3 = "_rightColumn_ofhhd_35", y3 = "_formMainContent_ofhhd_44", v3 = "_successContent_ofhhd_53", g3 = "_loading_ofhhd_58", p3 = "_error_ofhhd_59", S3 = "_spinner_ofhhd_69", Xt = {
  widget: f3,
  content: o3,
  leftColumn: d3,
  centerColumn: h3,
  rightColumn: m3,
  formMainContent: y3,
  successContent: v3,
  loading: g3,
  error: p3,
  spinner: S3
}, Rh = ({ specialist: u, isInModal: c = !1 }) => {
  const f = Gu(), { currentStep: s } = zl((T) => T.booking), { selectedDate: d } = zl((T) => T.calendar), [h, p] = ie.useState(!1), [z, g] = ie.useState(!1), { data: m, isLoading: j, error: S } = Cp(void 0);
  ie.useEffect(() => {
    if (m?.data?.recaptcha?.enabled && m?.data?.recaptcha?.siteKey) {
      const T = document.createElement("script");
      return T.src = `https://www.google.com/recaptcha/api.js?render=${m.data.recaptcha.siteKey}`, T.async = !0, document.head.appendChild(T), f(xp(m.data.recaptcha.siteKey)), console.log("reCAPTCHA loaded with siteKey:", m.data.recaptcha.siteKey), () => {
        document.head.removeChild(T);
      };
    }
  }, [m, f]), ie.useEffect(() => {
    (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0);
  }, []), ie.useEffect(() => {
    !c && d && window.innerWidth <= 1024 && p(!0);
  }, [d, c]);
  const N = () => {
    p(!1), f(Rc()), f(Oc());
  }, Q = () => {
    g(!1), f(Rc()), f(Oc());
  };
  return ie.useEffect(() => {
    !c && s === "form" && window.innerWidth <= 1024 ? g(!0) : g(!1);
  }, [s, c]), /* @__PURE__ */ K.jsxs("div", { className: Xt.widget, children: [
    j && /* @__PURE__ */ K.jsxs("div", { className: Xt.loading, children: [
      /* @__PURE__ */ K.jsx("div", { className: Xt.spinner }),
      /* @__PURE__ */ K.jsx("p", { children: "Загрузка..." })
    ] }),
    S && /* @__PURE__ */ K.jsx("div", { className: Xt.error, children: /* @__PURE__ */ K.jsx("p", { children: "Ошибка загрузки конфигурации. Проверьте API токен." }) }),
    !j && !S && /* @__PURE__ */ K.jsxs(K.Fragment, { children: [
      s === "calendar" && /* @__PURE__ */ K.jsxs(K.Fragment, { children: [
        /* @__PURE__ */ K.jsxs("div", { className: Xt.content, children: [
          /* @__PURE__ */ K.jsx("div", { className: Xt.leftColumn, children: /* @__PURE__ */ K.jsx(w1, { specialist: u }) }),
          /* @__PURE__ */ K.jsx("div", { className: Xt.centerColumn, children: /* @__PURE__ */ K.jsx(Ip, {}) }),
          /* @__PURE__ */ K.jsx("div", { className: Xt.rightColumn, children: /* @__PURE__ */ K.jsx(zh, {}) })
        ] }),
        /* @__PURE__ */ K.jsx(
          u3,
          {
            isOpen: h,
            onClose: N
          }
        )
      ] }),
      s === "form" && /* @__PURE__ */ K.jsxs(K.Fragment, { children: [
        /* @__PURE__ */ K.jsxs("div", { className: Xt.content, children: [
          /* @__PURE__ */ K.jsx("div", { className: Xt.leftColumn, children: /* @__PURE__ */ K.jsx(w1, { specialist: u }) }),
          /* @__PURE__ */ K.jsx("div", { className: Xt.formMainContent, children: /* @__PURE__ */ K.jsx(Oh, {}) })
        ] }),
        /* @__PURE__ */ K.jsx(
          s3,
          {
            isOpen: z,
            onClose: Q
          }
        )
      ] }),
      s === "success" && /* @__PURE__ */ K.jsx("div", { className: Xt.successContent, children: /* @__PURE__ */ K.jsx(t3, {}) })
    ] })
  ] });
}, b3 = "_overlay_e4649_1", _3 = "_modal_e4649_25", E3 = "_closeButton_e4649_48", C3 = "_content_e4649_74", hc = {
  overlay: b3,
  modal: _3,
  closeButton: E3,
  content: C3
}, L1 = ({ isOpen: u, onClose: c, children: f }) => (ie.useEffect(() => (u ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
  document.body.style.overflow = "";
}), [u]), ie.useEffect(() => {
  const s = (d) => {
    d.key === "Escape" && u && c();
  };
  return document.addEventListener("keydown", s), () => document.removeEventListener("keydown", s);
}, [u, c]), u ? /* @__PURE__ */ K.jsx("div", { className: hc.overlay, onClick: c, children: /* @__PURE__ */ K.jsxs("div", { className: hc.modal, onClick: (s) => s.stopPropagation(), children: [
  /* @__PURE__ */ K.jsx(
    "button",
    {
      className: hc.closeButton,
      onClick: c,
      "aria-label": "Закрыть",
      children: "×"
    }
  ),
  /* @__PURE__ */ K.jsx("div", { className: hc.content, children: f })
] }) }) : null);
let pu = null, va = null;
function T3(u, c) {
  const f = document.getElementById(u);
  if (!f) {
    console.error(`Element with id "${u}" not found`);
    return;
  }
  Ah({
    apiUrl: c.apiUrl,
    apiToken: c.apiToken
  }), Nh(c), G1.createRoot(f).render(
    Ot.createElement(
      Ot.StrictMode,
      null,
      Ot.createElement(
        Sf,
        { store: Eu, children: Ot.createElement(Rh, { specialist: c.specialist }) }
      )
    )
  );
}
function A3(u) {
  return Ah({
    apiUrl: u.apiUrl,
    apiToken: u.apiToken
  }), Nh(u), () => M3(u);
}
function M3(u) {
  va || (va = document.createElement("div"), va.id = "google-meet-booking-modal", document.body.appendChild(va), pu = G1.createRoot(va));
  const c = () => {
    Eu.dispatch(Rc()), Eu.dispatch(Oc()), pu && va && pu.render(
      Ot.createElement(
        Ot.StrictMode,
        null,
        Ot.createElement(
          Sf,
          {
            store: Eu,
            children: Ot.createElement(L1, {
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
        Sf,
        {
          store: Eu,
          children: Ot.createElement(L1, {
            isOpen: !0,
            onClose: c,
            children: Ot.createElement(Rh, { specialist: u.specialist, isInModal: !0 })
          })
        }
      )
    )
  );
}
function Nh(u) {
  u.theme?.primaryColor && document.documentElement.style.setProperty(
    "--primary-color",
    u.theme.primaryColor
  ), u.theme?.secondaryColor && document.documentElement.style.setProperty(
    "--secondary-color",
    u.theme.secondaryColor
  );
}
typeof window < "u" && (window.GoogleMeetBooking = {
  init: T3,
  initModal: A3
});
export {
  A3 as initBookingModal,
  T3 as initBookingWidget
};
