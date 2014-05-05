var $builtinmodule = function(name) {
  var mod = {};

  var DOCUMENT_CLASS           = 'Document';
  var EVENT                    = 'Event';
  var NODE                     = 'Node';
  var WINDOW_CLASS             = 'Window';
  var WINDOW_ANIMATION_RUNNER  = 'WindowAnimationRunner';
  var WORKBENCH                = 'Workbench';
  var METHOD_START             = 'start';

  Sk.builtin.defineEvent(mod);

  Sk.builtin.defineNode(mod);

  mod['window']   = new Sk.ffi.ObjectPy(window);
  mod['document'] = new Sk.ffi.ObjectPy(window.document);
  // mod['window'] = Sk.ffi.callsim(Sk.builtin.buildWindowClass(mod), Sk.ffi.referenceToPy(window, WINDOW_CLASS));
  // mod['document'] = Sk.ffi.callsim(Sk.builtin.buildDocumentClass(mod), Sk.ffi.referenceToPy(window.document, DOCUMENT_CLASS));

  mod[WINDOW_ANIMATION_RUNNER] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = Sk.ffi.functionPy(function(selfPy, tickPy, terminatePy, setUpPy, tearDownPy, windowPy) {
      var prototype = WINDOW_ANIMATION_RUNNER + "(tick, terminate, setUp, tearDown[, window])";
      Sk.ffi.checkMethodArgs(prototype, arguments, 4, 5);
      Sk.ffi.checkArgType("tick",      Sk.ffi.PyType.FUNCTION, Sk.ffi.isFunction(tickPy));
      Sk.ffi.checkArgType("terminate", Sk.ffi.PyType.FUNCTION, Sk.ffi.isFunction(terminatePy));
      Sk.ffi.checkArgType("setUp",     Sk.ffi.PyType.FUNCTION, Sk.ffi.isFunction(setUpPy));
      Sk.ffi.checkArgType("tearDown",  Sk.ffi.PyType.FUNCTION, Sk.ffi.isFunction(tearDownPy));
      if (Sk.ffi.isDefined(windowPy)) {
        Sk.ffi.checkArgType("window", [Sk.ffi.PyType.OBJECT,Sk.ffi.PyType.INSTANCE], Sk.ffi.isObject(windowPy) || Sk.ffi.isInstance(windowPy, WINDOW_CLASS), windowPy);
      }
      var onDocumentKeyDown = function(event) {
        if (event.keyCode == 27) {
          var war = Sk.ffi.remapToJs(selfPy);
          war.escKeyPressed = true;
          event.preventDefault();
        }
      };
      var WindowAnimationRunner = function() {
        this.window    = Sk.ffi.isDefined(windowPy) ? Sk.ffi.remapToJs(windowPy) : window;
        this.startTime = null;
        this.elapsed   = null;
        this.requestID = null;
        this.escKeyPressed = false;
        this.exceptionPy = Sk.builtin.none.none$;
      };
      WindowAnimationRunner.prototype = {
        constructor: WindowAnimationRunner,
        start: function() {
          var war = this;
          Sk.misceval.apply(setUpPy, undefined, undefined, undefined, []);
          war.window.document.addEventListener('keydown', onDocumentKeyDown, false);
          var animate = function(timestamp) {
            if (war.startTime) {
              war.elapsed = timestamp - war.startTime;
            }
            else {
              if (timestamp) {
                war.startTime = timestamp;
              }
              else {
                war.elapsed = 0;
              }
            }
            function terminate() {
                var timePy = Sk.ffi.numberToFloatPy(war.elapsed / 1000);
                var responsePy = Sk.misceval.apply(terminatePy, undefined, undefined, undefined, [timePy]);
                return Sk.ffi.remapToJs(responsePy);
            }
            if (war.escKeyPressed || terminate()) {
              war.window.cancelAnimationFrame(war.requestID);
              war.window.document.removeEventListener('keydown', onDocumentKeyDown, false);
              try {
                Sk.misceval.apply(tearDownPy, undefined, undefined, undefined, [war.exceptionPy]);
              }
              catch(e) {
                // For backwards compatibility, try again with zero arguments.
                try {
                  Sk.misceval.apply(tearDownPy, undefined, undefined, undefined, []);
                }
                catch(e) {
                  // We're just going to have to eat this one or log it.
                }
              }
            }
            else {
              war.requestID = war.window.requestAnimationFrame(animate);
              try {
                var timePy = Sk.ffi.numberToFloatPy(war.elapsed / 1000);
                Sk.misceval.apply(tickPy, undefined, undefined, undefined, [timePy]);
              }
              catch(e) {
                war.exceptionPy = e;
                war.escKeyPressed = true;
              }
            }
          };
          animate(null);
        },
        toString: function() {
          return WINDOW_ANIMATION_RUNNER;
        }
      };
      Sk.ffi.referenceToPy(new WindowAnimationRunner(), WINDOW_ANIMATION_RUNNER, undefined, selfPy);
    });
    $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
      var war = Sk.ffi.remapToJs(selfPy);
      switch(name) {
        case METHOD_START: {
          return Sk.ffi.callableToPy(mod, METHOD_START, function(methodPy) {
            Sk.ffi.checkMethodArgs(METHOD_START, arguments, 0, 0);
            war.start();
          });
        }
      }
    });
    $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
      return Sk.builtin.stringToPy(WINDOW_ANIMATION_RUNNER);
    });
    $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
      return Sk.builtin.stringToPy(WINDOW_ANIMATION_RUNNER + "(" + ")");
    });
  }, WINDOW_ANIMATION_RUNNER, []);

  return mod;
}
