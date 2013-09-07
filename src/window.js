/**
 * Convenience function for incorporating a Window class into a module.
 *
 * Usage:
 *
 * 1) mod['window'] = Sk.misceval.callsim(Sk.builtin.buildWindowClass(mod));
 * 2) mod['Window'] = Sk.builtin.buildWindowClass(mod);
 *
 * Dependencies:
 *
 * mod['Event']
 */
Sk.builtin.buildWindowClass = function(mod) {
  /**
   * @const
   * @type {string}
   */
  var EVENT                                 = "Event";
  /**
   * @const
   * @type {string}
   */
  var WINDOW_CLASS                          = "Window";
  /**
   * @const
   * @type {string}
   */
  var PROP_ANIMATION_TIME                   = "animationTime";
  /**
   * @const
   * @type {string}
   */
  var PROP_DOCUMENT                         = "document";
  /**
   * @const
   * @type {string}
   */
  var PROP_DEVICE_PIXEL_RATIO               = "devicePixelRatio";
  /**
   * @const
   * @type {string}
   */
  var PROP_INNER_WIDTH                      = "innerWidth";
  /**
   * @const
   * @type {string}
   */
  var PROP_INNER_HEIGHT                     = "innerHeight";
  /**
   * @const
   * @type {string}
   */
  var METHOD_ADD_EVENT_LISTENER             = "addEventListener";
  /**
   * @const
   * @type {string}
   */
  var METHOD_CANCEL_ANIMATION_FRAME         = "cancelAnimationFrame";
  /**
   * @const
   * @type {string}
   */
  var METHOD_REMOVE_EVENT_LISTENER          = "removeEventListener";
  /**
   * @const
   * @type {string}
   */
  var METHOD_REQUEST_ANIMATION_FRAME        = "requestAnimationFrame";
  /**
   * @const
   * @type {string}
   */
  var METHOD_SET_TIMEOUT                    = "setTimeout";

  // We must be able to track the JavaScript listener functions.
  // TODO: This should include both the type and the useCapture flag.
  var winListeners = {};

  return Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
      Sk.ffi.referenceToPy(window, WINDOW_CLASS, undefined, selfPy);
    });
    $loc.__getattr__ = Sk.ffi.functionPy(function(self, name) {
      switch(name) {
        case PROP_ANIMATION_TIME: {
          return Sk.ffi.numberToPy(window[PROP_ANIMATION_TIME]);
        }
        case PROP_DOCUMENT: {
          return mod[PROP_DOCUMENT];
        }
        case PROP_INNER_HEIGHT: {
          return Sk.ffi.numberToIntPy(window[PROP_INNER_HEIGHT]);
        }
        case PROP_INNER_WIDTH: {
          return Sk.ffi.numberToIntPy(window[PROP_INNER_WIDTH]);
        }
        case PROP_DEVICE_PIXEL_RATIO: {
          return Sk.ffi.numberToIntPy(window[PROP_DEVICE_PIXEL_RATIO]);
        }
        case METHOD_ADD_EVENT_LISTENER: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
              self.tp$name = METHOD_ADD_EVENT_LISTENER;
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self, typePy, listenerPy, useCapture) {
              var type = Sk.ffi.remapToJs(typePy);
              var listener = function(event) {
                var eventPy = Sk.misceval.callsim(mod[EVENT], Sk.ffi.referenceToPy(event, EVENT));
                Sk.misceval.callsim(listenerPy, eventPy);
              };
              winListeners[type] = listener;
              window[METHOD_ADD_EVENT_LISTENER](type, listener, useCapture);
            });
          }, METHOD_ADD_EVENT_LISTENER, []));
        }
        case METHOD_REMOVE_EVENT_LISTENER: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
              self.tp$name = METHOD_REMOVE_EVENT_LISTENER;
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self, typePy, listener, useCapture) {
              var type = Sk.ffi.remapToJs(typePy);
              var listener = winListeners[type];
              delete winListeners[type];
              window[METHOD_REMOVE_EVENT_LISTENER](type, listener, useCapture);
            });
          }, METHOD_REMOVE_EVENT_LISTENER, []));
        }
        case METHOD_CANCEL_ANIMATION_FRAME: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
              self.tp$name = METHOD_CANCEL_ANIMATION_FRAME;
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self, requestID) {
              if (requestID) {
                window[METHOD_CANCEL_ANIMATION_FRAME](Sk.ffi.remapToJs(requestID));
              }
            });
          }, METHOD_CANCEL_ANIMATION_FRAME, []));
        }
        case METHOD_REQUEST_ANIMATION_FRAME: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
              self.tp$name = METHOD_REQUEST_ANIMATION_FRAME;
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self, callback) {
              var requestID = window[METHOD_REQUEST_ANIMATION_FRAME](function(timestamp) {
                Sk.misceval.callsim(callback, Sk.ffi.numberToPy(timestamp));
              });
              return Sk.ffi.numberToPy(requestID);
            });
          }, METHOD_REQUEST_ANIMATION_FRAME, []));
        }
        case METHOD_SET_TIMEOUT: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
              self.tp$name = METHOD_SET_TIMEOUT;
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self, funcPy, delayPy, paramsPy) {
              var delay = Sk.ffi.remapToJs(delayPy);
              var params = Sk.ffi.remapToJs(paramsPy);
              var timeoutID = window[METHOD_SET_TIMEOUT](function() {
                Sk.misceval.callsim(funcPy);
              }, delay, params);
              return Sk.ffi.numberToPy(timeoutID);
            });
          }, METHOD_SET_TIMEOUT, []));
        }
      }
    });
    $loc.__str__ = Sk.ffi.functionPy(function(self) {
      return Sk.ffi.stringToPy(WINDOW_CLASS)
    })
    $loc.__repr__ = Sk.ffi.functionPy(function(self, arg) {
      return Sk.ffi.stringToPy(WINDOW_CLASS)
    })
  }, WINDOW_CLASS, []);
};
