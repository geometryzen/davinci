var $builtinmodule = function(name) {
  var mod = {};

  var EVENT                    = 'Event';
  var NODE                     = 'Node';
  var WINDOW                   = 'Window';
  var WINDOW_ANIMATION_RUNNER  = 'WindowAnimationRunner';
  var WORKBENCH                = 'Workbench';
  var METHOD_START             = 'start';

  Sk.builtin.defineEvent(mod);

  Sk.builtin.defineNode(mod);

  mod['window'] = Sk.ffi.callsim(Sk.builtin.buildWindowClass(mod));

  mod['document'] = Sk.ffi.callsim(Sk.builtin.buildDocumentClass(mod));

  mod[WINDOW_ANIMATION_RUNNER] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = Sk.ffi.functionPy(function(selfPy, tickPy, terminatePy, setUpPy, tearDownPy) {
      Sk.ffi.checkMethodArgs(WINDOW_ANIMATION_RUNNER, arguments, 4, 4);
      Sk.ffi.checkArgType("tick",      Sk.ffi.PyType.FUNCTION, Sk.ffi.isFunction(tickPy));
      Sk.ffi.checkArgType("terminate", Sk.ffi.PyType.FUNCTION, Sk.ffi.isFunction(terminatePy));
      Sk.ffi.checkArgType("setUp",     Sk.ffi.PyType.FUNCTION, Sk.ffi.isFunction(setUpPy));
      Sk.ffi.checkArgType("tearDown",  Sk.ffi.PyType.FUNCTION, Sk.ffi.isFunction(tearDownPy));
      var onDocumentKeyDown = function(event) {
        if (event.keyCode == 27) {
          var war = Sk.ffi.remapToJs(selfPy);
          war.escKeyPressed = true;
          event.preventDefault();
        }
      };
      var WindowAnimationRunner = function() {
        this.tick      = Sk.ffi.remapToJs(tickPy);
        this.terminate = Sk.ffi.remapToJs(terminatePy);
        this.setUp     = Sk.ffi.remapToJs(setUpPy);
        this.tearDown  = Sk.ffi.remapToJs(tearDownPy);
        this.startTime = null;
        this.elapsed   = null;
        this.requestID = null;
        this.escKeyPressed = false;
      };
      WindowAnimationRunner.prototype = {
        constructor: WindowAnimationRunner,
        start: function() {
          var war = this;
          war.setUp();
          document.addEventListener('keydown', onDocumentKeyDown, false);
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
            if (war.escKeyPressed || war.terminate(war.elapsed / 1000)) {
              window.cancelAnimationFrame(war.requestID);
              document.removeEventListener('keydown', onDocumentKeyDown, false);
              war.tearDown();
            }
            else {
              war.requestID = window.requestAnimationFrame(animate);
              war.tick(war.elapsed / 1000);
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
      return Sk.ffi.stringToPy(WINDOW_ANIMATION_RUNNER);
    });
    $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
      return Sk.ffi.stringToPy(WINDOW_ANIMATION_RUNNER + "(" + ")");
    });
  }, WINDOW_ANIMATION_RUNNER, []);

  return mod;
}
