(function() {
Sk.builtin.defineEasel = function(mod, createjs, BLADE) {
Sk.ffi.checkFunctionArgs("defineEasel", arguments, 3, 3);
Sk.builtin.defineEuclidean2(mod, BLADE);
Sk.builtin.defineEvent(mod);
/**
 * @const
 * @type {string}
 */
var CONTAINER                     = "Container";
/**
 * @const
 * @type {string}
 */
var EASE                          = "Ease";
/**
 * @const
 * @type {string}
 */
var EUCLIDEAN_2                   = "Euclidean2";
/**
 * @const
 * @type {string}
 */
var EVENT                         = "Event";
/**
 * @const
 * @type {string}
 */
var GRAPHICS                      = "Graphics";
/**
 * @const
 * @type {string}
 */
var MOVIE_CLIP                    = "MovieClip";
/**
 * @const
 * @type {string}
 */
var NODE                          = "Node";
/**
 * @const
 * @type {string}
 */
var POINT                         = "Point";
/**
 * @const
 * @type {string}
 */
var SHAPE                         = "Shape";
/**
 * @const
 * @type {string}
 */
var STAGE                         = "Stage";
/**
 * @const
 * @type {string}
 */
var TEXT                          = "Text";
/**
 * @const
 * @type {string}
 */
var TICKER                        = "Ticker";
/**
 * @const
 * @type {string}
 */
var TWEEN                         = "Tween";
/**
 * @const
 * @type {string}
 */
var PROP_ALPHA                    = "alpha";
/**
 * @const
 * @type {string}
 */
var PROP_AUTO_CLEAR               = "autoClear";
/**
 * @const
 * @type {string}
 */
var PROP_BOUNCE_OUT               = "bounceOut";
/**
 * @const
 * @type {string}
 */
var PROP_CANVAS                   = "canvas";
/**
 * @const
 * @type {string}
 */
var PROP_GRAPHICS                 = "graphics";
/**
 * @const
 * @type {string}
 */
var PROP_HIT_AREA                 = "hitArea";
/**
 * @const
 * @type {string}
 */
var PROP_MOUSE_IN_BOUNDS          = "mouseInBounds";
/**
 * @const
 * @type {string}
 */
var PROP_MOUSE_MOVE_OUTSIDE       = "mouseMoveOutside";
/**
 * @const
 * @type {string}
 */
var PROP_MOUSE_X                  = "mouseX";
/**
 * @const
 * @type {string}
 */
var PROP_MOUSE_Y                  = "mouseY";
/**
 * @const
 * @type {string}
 */
var PROP_NAME                     = "name";
/**
 * @const
 * @type {string}
 */
var PROP_ROTATION                 = "rotation";
/**
 * @const
 * @type {string}
 */
var PROP_TEXT                     = "text";
/**
 * @const
 * @type {string}
 */
var PROP_TEXT_ALIGN               = "textAlign";
/**
 * @const
 * @type {string}
 */
var PROP_TIMELINE                 = "timeline";
/**
 * @const
 * @type {string}
 */
var PROP_W                        = "w";
/**
 * @const
 * @type {string}
 */
var PROP_X                        = "x";
/**
 * @const
 * @type {string}
 */
var PROP_Y                        = "y";
/**
 * @const
 * @type {string}
 */
var PROP_XY                       = "xy";
/**
 * @const
 * @type {string}
 */
var METHOD_ADD_CHILD              = "addChild";
/**
 * @const
 * @type {string}
 */
var METHOD_ADD_EVENT_LISTENER     = "addEventListener";
/**
 * @const
 * @type {string}
 */
var METHOD_ADD_TWEEN              = "addTween";
/**
 * @const
 * @type {string}
 */
var METHOD_BEGIN_FILL             = "beginFill";
/**
 * @const
 * @type {string}
 */
var METHOD_BEGIN_STROKE           = "beginStroke";
/**
 * @const
 * @type {string}
 */
var METHOD_CALL                   = "onComplete";
/**
 * @const
 * @type {string}
 */
var METHOD_CLONE                  = "clone";
/**
 * @const
 * @type {string}
 */
var METHOD_DRAW_CIRCLE            = "drawCircle";
/**
 * @const
 * @type {string}
 */
var METHOD_DRAW_RECT              = "drawRect";
/**
 * @const
 * @type {string}
 */
var METHOD_ENABLE_MOUSE_OVER      = "enableMouseOver";
/**
 * @const
 * @type {string}
 */
var METHOD_END_FILL               = "endFill";
/**
 * @const
 * @type {string}
 */
var METHOD_END_STROKE             = "endStroke";
/**
 * @const
 * @type {string}
 */
var METHOD_GET                    = "get";
/**
 * @const
 * @type {string}
 */
var METHOD_GET_CHILD_AT           = "getChildAt";
/**
 * @const
 * @type {string}
 */
var METHOD_GET_HSL                = "getHSL";
/**
 * @const
 * @type {string}
 */
var METHOD_GET_NUM_CHILDREN       = "getNumChildren";
/**
 * @const
 * @type {string}
 */
var METHOD_GET_MEASURED_HEIGHT    = "getMeasuredHeight";
/**
 * @const
 * @type {string}
 */
var METHOD_GET_MEASURED_WIDTH     = "getMeasuredWidth";
/**
 * @const
 * @type {string}
 */
var METHOD_GLOBAL_TO_LOCAL        = "globalToLocal";
/**
 * @const
 * @type {string}
 */
var METHOD_GOTO_AND_PLAY          = "gotoAndPlay";
/**
 * @const
 * @type {string}
 */
var METHOD_HIT_TEST               = "hitTest";
/**
 * @const
 * @type {string}
 */
var METHOD_LOCAL_TO_LOCAL         = "localToLocal";
/**
 * @const
 * @type {string}
 */
var METHOD_LINE_TO                = "lineTo";
/**
 * @const
 * @type {string}
 */
var METHOD_MOVE_TO                = "moveTo";
/**
 * @const
 * @type {string}
 */
var METHOD_REMOVE_EVENT_LISTENER  = "removeEventListener";
/**
 * @const
 * @type {string}
 */
var METHOD_SET_STROKE_STYLE       = "setStrokeStyle";
/**
 * @const
 * @type {string}
 */
var METHOD_TO                     = "to";
/**
 * @const
 * @type {string}
 */
var METHOD_UPDATE                 = "update";
/**
 * @const
 * @type {string}
 */
var METHOD_WAIT                   = "wait";
/**
 * Graphics
 */
mod[GRAPHICS] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, graphicsPy) {
    Sk.ffi.checkMethodArgs(GRAPHICS, arguments, 0, 1);
    if (Sk.ffi.isDefined(graphicsPy)) {
      Sk.ffi.referenceToPy(Sk.ffi.remapToJs(graphicsPy), GRAPHICS, undefined, selfPy);
    }
    else {
      Sk.ffi.referenceToPy(new createjs[GRAPHICS](), GRAPHICS, undefined, selfPy);
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(graphicsPy, name) {
    var graphics = Sk.ffi.remapToJs(graphicsPy);
    switch(name) {
      case METHOD_BEGIN_FILL: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
            Sk.ffi.referenceToPy(graphics[METHOD_BEGIN_FILL], METHOD_BEGIN_FILL, undefined, selfPy);
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, color) {
            color = Sk.ffi.remapToJs(color);
            graphics[METHOD_BEGIN_FILL](color);
            return graphicsPy;
          });
        }, METHOD_BEGIN_FILL, []));
      }
      case METHOD_BEGIN_STROKE: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
            Sk.ffi.referenceToPy(graphics[METHOD_BEGIN_STROKE], METHOD_BEGIN_STROKE, undefined, selfPy);
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, color) {
            color = Sk.ffi.remapToJs(color);
            graphics[METHOD_BEGIN_STROKE](color);
            return graphicsPy;
          });
        }, METHOD_BEGIN_STROKE, []));
      }
      case METHOD_DRAW_CIRCLE: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_DRAW_CIRCLE;
            self.v = graphics[METHOD_DRAW_CIRCLE];
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, x, y, radius) {
            x = Sk.ffi.remapToJs(x);
            y = Sk.ffi.remapToJs(y);
            radius = Sk.ffi.remapToJs(radius);
            graphics[METHOD_DRAW_CIRCLE](x, y, radius);
            return graphicsPy;
          });
        }, METHOD_DRAW_CIRCLE, []));
      }
      case METHOD_DRAW_RECT: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_DRAW_RECT;
            self.v = graphics[METHOD_DRAW_RECT];
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, x, y, w, h) {
            x = Sk.ffi.remapToJs(x);
            y = Sk.ffi.remapToJs(y);
            w = Sk.ffi.remapToJs(w);
            h = Sk.ffi.remapToJs(h);
            graphics[METHOD_DRAW_RECT](x, y, w, h);
            return graphicsPy;
          });
        }, METHOD_DRAW_RECT, []));
      }
      case METHOD_END_FILL: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_END_FILL;
            self.v = graphics[METHOD_END_FILL];
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self) {
            graphics[METHOD_END_FILL]();
            return graphicsPy;
          });
        }, METHOD_END_FILL, []));
      }
      case METHOD_END_STROKE: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_END_STROKE;
            self.v = graphics[METHOD_END_STROKE];
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self) {
            graphics[METHOD_END_STROKE]();
            return graphicsPy;
          });
        }, METHOD_END_STROKE, []));
      }
      case METHOD_LINE_TO: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_LINE_TO;
            self.v = graphics[METHOD_LINE_TO];
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, x, y) {
            x = Sk.ffi.remapToJs(x);
            y = Sk.ffi.remapToJs(y);
            graphics[METHOD_LINE_TO](x, y);
            return graphicsPy;
          });
        }, METHOD_LINE_TO, []));
      }
      case METHOD_MOVE_TO: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_MOVE_TO;
            self.v = graphics[METHOD_MOVE_TO];
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, x, y) {
            x = Sk.ffi.remapToJs(x);
            y = Sk.ffi.remapToJs(y);
            graphics[METHOD_MOVE_TO](x, y);
            return graphicsPy;
          });
        }, METHOD_MOVE_TO, []));
      }
      case METHOD_SET_STROKE_STYLE: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_SET_STROKE_STYLE;
            self.v = graphics[METHOD_SET_STROKE_STYLE];
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, thickness, caps, joints, miterLimit, ignoreScale) {
            thickness = Sk.ffi.remapToJs(thickness);
            caps = Sk.ffi.remapToJs(caps);
            joints = Sk.ffi.remapToJs(joints);
            miterLimit = Sk.ffi.remapToJs(miterLimit);
            ignoreScale = Sk.ffi.remapToJs(ignoreScale);
            graphics[METHOD_SET_STROKE_STYLE](thickness, caps, joints, miterLimit, ignoreScale);
            return graphicsPy;
          });
        }, METHOD_SET_STROKE_STYLE, []));
      }
    }
  });
}, GRAPHICS, []);
/**
 * MovieClip
 */
mod[MOVIE_CLIP] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, modePy, startPositionPy, loopPy, labelsPy) {
    var mode = (modePy !== null) ? Sk.ffi.remapToJs(modePy) : null;
    var startPosition = Sk.ffi.remapToJs(startPositionPy);
    var loop = Sk.ffi.remapToJs(loopPy);
    var labels = Sk.ffi.remapToJs(labelsPy);
    Sk.ffi.referenceToPy(new createjs[MOVIE_CLIP](mode, startPosition, loop, labels), MOVIE_CLIP, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(movieClipPy, name) {
    var movieClip = Sk.ffi.remapToJs(movieClipPy);
    switch(name) {
      case PROP_TIMELINE: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = PROP_TIMELINE;
            self.v = movieClip[PROP_TIMELINE];
          });
          $loc.__getattr__ = Sk.ffi.functionPy(function(timelinePy, name) {
            var timeline = Sk.ffi.remapToJs(timelinePy);
            switch(name) {
              case METHOD_ADD_TWEEN: {
                return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                  $loc.__init__ = Sk.ffi.functionPy(function(self) {
                    self.tp$name = METHOD_ADD_TWEEN;
                    self.v = timeline[METHOD_ADD_TWEEN];
                  });
                  $loc.__call__ = Sk.ffi.functionPy(function(self, tweenPy) {
                    var tween = Sk.ffi.remapToJs(tweenPy);
                    timeline[METHOD_ADD_TWEEN](tween);
                  });
                }, METHOD_ADD_TWEEN, []));
              }
              break;
            }
          });
        }, PROP_TIMELINE, []));
      }
      break;
      case METHOD_GOTO_AND_PLAY: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_GOTO_AND_PLAY;
            self.v = movieClip[METHOD_GOTO_AND_PLAY];
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, labelPy) {
            var label = Sk.ffi.remapToJs(labelPy);
            movieClip[METHOD_GOTO_AND_PLAY](label);
          });
        }, METHOD_GOTO_AND_PLAY, []));
      }
      break;
     }
  });
}, MOVIE_CLIP, []);
/**
 * Shape
 */
mod[SHAPE] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(shapePy, argPy) {
    shapePy.tp$name = SHAPE;
    if (typeof argPy === 'undefined') {
      shapePy.v = new createjs[SHAPE]();
    }
    else {
      var name = argPy.tp$name;
      if (typeof name === 'string') {
        switch(name) {
          case SHAPE: {
            shapePy.v = Sk.ffi.remapToJs(argPy);
          }
          break;
          case GRAPHICS: {
            shapePy.v = new createjs[SHAPE](Sk.ffi.remapToJs(argPy));
          }
          break;
          default: {
            throw new Error(name);
          }
        }
      }
      else {
        throw new Error(typeof name);
      }
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(shapePy, name) {
    var shape = Sk.ffi.remapToJs(shapePy);
    switch(name) {
      case PROP_ALPHA: {
        return Sk.builtin.assk$(shape[PROP_ALPHA], Sk.builtin.nmber.float$);
      }
      case PROP_GRAPHICS: {
        return Sk.ffi.callsim(mod[GRAPHICS], Sk.ffi.referenceToPy(shape[PROP_GRAPHICS], GRAPHICS));
      }
      case PROP_NAME: {
        return new Sk.builtin.str(shape[PROP_NAME]);
      }
      case PROP_X: {
        return Sk.builtin.assk$(shape[PROP_X], Sk.builtin.nmber.int$);
      }
      case PROP_Y: {
        return Sk.builtin.assk$(shape[PROP_Y], Sk.builtin.nmber.int$);
      }
      case PROP_ROTATION: {
        return Sk.builtin.assk$(shape[PROP_ROTATION], Sk.builtin.nmber.float$);
      }
      case METHOD_ADD_EVENT_LISTENER: {
        return Sk.builtin.addEventListener(mod, shape);
      }
      case METHOD_REMOVE_EVENT_LISTENER: {
        return Sk.builtin.removeEventListener(mod, shape);
      }
      case METHOD_GLOBAL_TO_LOCAL: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_GLOBAL_TO_LOCAL;
            self.v = shape[METHOD_GLOBAL_TO_LOCAL];
          });
          $loc.__call__ = Sk.ffi.functionPy(function(methodPy, x, y) {
            var point = shape[METHOD_GLOBAL_TO_LOCAL](Sk.ffi.remapToJs(x), Sk.ffi.remapToJs(y));
            return Sk.ffi.callsim(mod[POINT], Sk.ffi.referenceToPy(point, POINT));
          });
        }, METHOD_GLOBAL_TO_LOCAL, []));
      }
      case METHOD_HIT_TEST: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_HIT_TEST;
            self.v = shape[METHOD_HIT_TEST];
          });
          $loc.__call__ = Sk.ffi.functionPy(function(methodPy, x, y) {
            return Sk.ffi.remapToPy(shape[METHOD_HIT_TEST](Sk.ffi.remapToJs(x), Sk.ffi.remapToJs(y)));
          });
        }, METHOD_HIT_TEST, []));
      }
      case METHOD_LOCAL_TO_LOCAL: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_LOCAL_TO_LOCAL;
            self.v = shape[METHOD_LOCAL_TO_LOCAL];
          });
          $loc.__call__ = Sk.ffi.functionPy(function(methodPy, x, y, target) {
            var point = shape[METHOD_LOCAL_TO_LOCAL](Sk.ffi.remapToJs(x), Sk.ffi.remapToJs(y), Sk.ffi.remapToJs(target));
            return Sk.ffi.callsim(mod[POINT], Sk.ffi.referenceToPy(point, POINT));
          });
        }, METHOD_LOCAL_TO_LOCAL, []));
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(shapePy, name, valuePy) {
    var shape = Sk.ffi.remapToJs(shapePy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      case PROP_ALPHA: {
        shape[PROP_ALPHA] = value;
      }
      break;
      case PROP_NAME: {
        shape[PROP_NAME] = value;
      }
      break;
      case PROP_X: {
        shape[PROP_X] = value;
      }
      break;
      case PROP_Y: {
        shape[PROP_Y] = value;
      }
      break;
      case PROP_ROTATION: {
        shape[PROP_ROTATION] = value;
      }
      break;
      default: {
        throw new Sk.builtin.AttributeError(name + " is not a writeable attribute of " + SHAPE);
      }
    }
  });
}, SHAPE, []);
/**
 * Stage
 */
mod[STAGE] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, canvasPy) {
    Sk.ffi.checkMethodArgs(STAGE, arguments, 1, 1);
    Sk.ffi.checkArgType(PROP_CANVAS, NODE, Sk.ffi.isClass(canvasPy, NODE), canvasPy);
    var canvas = Sk.ffi.remapToJs(canvasPy);
    Sk.ffi.referenceToPy(new createjs[STAGE](canvas), STAGE, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(stagePy, name) {
    var stage = Sk.ffi.remapToJs(stagePy);
    switch(name) {
      case PROP_MOUSE_IN_BOUNDS: {
        return Sk.ffi.remapToPy(stage[PROP_MOUSE_IN_BOUNDS]);
      }
      case PROP_MOUSE_MOVE_OUTSIDE: {
        return Sk.ffi.remapToPy(stage[PROP_MOUSE_MOVE_OUTSIDE]);
      }
      case PROP_MOUSE_X: {
        return Sk.builtin.assk$(stage[PROP_MOUSE_X], Sk.builtin.nmber.int$);
      }
      case PROP_MOUSE_Y: {
        return Sk.builtin.assk$(stage[PROP_MOUSE_Y], Sk.builtin.nmber.int$);
      }
      case METHOD_ADD_CHILD: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_ADD_CHILD;
            self.v = stage[METHOD_ADD_CHILD];
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, childPy) {
            var child = stage[METHOD_ADD_CHILD](Sk.ffi.remapToJs(childPy));
            return Sk.ffi.callsim(mod[childPy.tp$name], Sk.ffi.referenceToPy(child, childPy.tp$name));
          });
        }, METHOD_ADD_CHILD, []));
      }
      case METHOD_ENABLE_MOUSE_OVER: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_ENABLE_MOUSE_OVER;
            self.v = stage[METHOD_ENABLE_MOUSE_OVER];
          });
          $loc.__call__ = Sk.ffi.functionPy(function(updatePy) {
            stage[METHOD_ENABLE_MOUSE_OVER]();
          });
        }, METHOD_ENABLE_MOUSE_OVER, []));
      }
      case METHOD_UPDATE: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_UPDATE;
            self.v = stage[METHOD_UPDATE];
          });
          $loc.__call__ = Sk.ffi.functionPy(function(updatePy) {
            stage[METHOD_UPDATE]();
          });
        }, METHOD_UPDATE, []));
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(stagePy, name, valuePy) {
    var stage = Sk.ffi.remapToJs(stagePy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      case PROP_AUTO_CLEAR: {
        stage[PROP_AUTO_CLEAR] = value;
      }
      break;
      case PROP_MOUSE_MOVE_OUTSIDE: {
        stage[PROP_MOUSE_MOVE_OUTSIDE] = value;
      }
      break;
      default: {
        throw new Sk.builtin.AttributeError(name + " is not a writeable attribute of " + STAGE);
      }
    }
  });
}, STAGE, []);
/**
 * Text
 */
mod[TEXT] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, textPy, fontPy, colorPy) {
    selfPy.tp$name = TEXT;
    var text = Sk.ffi.remapToJs(textPy);
    var font = Sk.ffi.remapToJs(fontPy);
    var color = Sk.ffi.remapToJs(colorPy);
    selfPy.v = new createjs[TEXT](text, font, color);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(textPy, name) {
    var text = Sk.ffi.remapToJs(textPy);
    switch(name) {
      case PROP_ALPHA: {
        return Sk.builtin.assk$(text[PROP_ALPHA], Sk.builtin.nmber.float$);
      }
      case PROP_X: {
        return Sk.builtin.assk$(text[PROP_X], Sk.builtin.nmber.float$);
      }
      case PROP_Y: {
        return Sk.builtin.assk$(text[PROP_Y], Sk.builtin.nmber.float$);
      }
      case PROP_ROTATION: {
        return Sk.builtin.assk$(text[PROP_ROTATION], Sk.builtin.nmber.float$);
      }
      case PROP_TEXT: {
        return new Sk.builtin.str(text[PROP_TEXT]);
      }
      case PROP_TEXT_ALIGN: {
        return new Sk.builtin.str(text[PROP_TEXT_ALIGN]);
      }
      case METHOD_ADD_EVENT_LISTENER: {
        return Sk.builtin.addEventListener(mod, text);
      }
      case METHOD_REMOVE_EVENT_LISTENER: {
        return Sk.builtin.removeEventListener(mod, text);
      }
      case METHOD_GET_MEASURED_WIDTH: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(methodPy) {
            methodPy.tp$name = METHOD_GET_MEASURED_WIDTH;
            methodPy.v = text[METHOD_GET_MEASURED_WIDTH];
          });
          $loc.__call__ = Sk.ffi.functionPy(function(methodPy, childPy) {
            return Sk.builtin.assk$(text[METHOD_GET_MEASURED_WIDTH](), Sk.builtin.nmber.float$);
          });
        }, METHOD_GET_MEASURED_WIDTH, []));
      }
      case METHOD_GET_MEASURED_HEIGHT: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(methodPy) {
            methodPy.tp$name = METHOD_GET_MEASURED_HEIGHT;
            methodPy.v = text[METHOD_GET_MEASURED_HEIGHT];
          });
          $loc.__call__ = Sk.ffi.functionPy(function(methodPy, childPy) {
            return Sk.builtin.assk$(text[METHOD_GET_MEASURED_HEIGHT](), Sk.builtin.nmber.float$);
          });
        }, METHOD_GET_MEASURED_HEIGHT, []));
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(textPy, name, valuePy) {
    var text = Sk.ffi.remapToJs(textPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      case PROP_ALPHA: {
        Sk.builtin.pyCheckType(PROP_ALPHA, "Number", Sk.builtin.checkNumber(valuePy));
        text[PROP_ALPHA] = value;
      }
      break;
      case PROP_HIT_AREA: {
        text[PROP_HIT_AREA] = value;
      }
      break;
      case PROP_X: {
        text[PROP_X] = value;
      }
      break;
      case PROP_Y: {
        text[PROP_Y] = value;
      }
      break;
      case PROP_ROTATION: {
        text[PROP_ROTATION] = value;
      }
      break;
      case PROP_TEXT: {
        text[PROP_TEXT] = value;
      }
      break;
      case PROP_TEXT_ALIGN: {
        text[PROP_TEXT_ALIGN] = value;
      }
      break;
      default: {
        throw new Sk.builtin.AttributeError(name + " is not a writeable attribute of " + TEXT);
      }
    }
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    return new Sk.builtin.str(TEXT + "(" + self.x + ", " + self.y + ")");
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    return new Sk.builtin.str("[" + self.x + ", " + self.y + "]");
  });
}, TEXT, []);
/**
 * Ticker
 */
mod[TICKER] = Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(self) {
    self.tp$name = TICKER;
    self.v = createjs[TICKER];
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(tickerPy, name) {
    var ticker = Sk.ffi.remapToJs(tickerPy);
    switch(name) {
      case METHOD_ADD_EVENT_LISTENER: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_ADD_EVENT_LISTENER;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, typePy, listenerPy, useCapture) {
            var type = Sk.ffi.remapToJs(typePy);
            var listener = Sk.ffi.remapToJs(listenerPy);
            if (typeof listener === 'object') {
              ticker[METHOD_ADD_EVENT_LISTENER](type, listener, useCapture);
            }
            else {
              var listener = function(event) {
                Sk.ffi.callsim(listenerPy);
              };
              ticker[METHOD_ADD_EVENT_LISTENER](type, listener, useCapture);
            }
          });
        }, METHOD_ADD_EVENT_LISTENER, []));
      }
      break;
    }
  });
}, TICKER, []));
/**
 * Tween
 */
mod[TWEEN] = Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(self) {
    self.tp$name = TWEEN;
    self.v = createjs[TWEEN];
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(entryPointPy, name) {
    var entryPoint = Sk.ffi.remapToJs(entryPointPy);
    switch(name) {
      case METHOD_GET: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_GET;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, target, props, pluginData, override) {
            target = Sk.ffi.remapToJs(target);
            props = Sk.ffi.remapToJs(props);
            pluginData = Sk.ffi.remapToJs(pluginData);
            override = Sk.ffi.remapToJs(override);
            var tween = entryPoint[METHOD_GET](target, props, pluginData, override);
            return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
              $loc.__init__ = Sk.ffi.functionPy(function(self) {
                self.tp$name = TWEEN;
                self.v = tween;
              });
              $loc.__getattr__ = Sk.ffi.functionPy(function(tweenPy, name) {
                var tween = Sk.ffi.remapToJs(tweenPy);
                switch(name) {
                  case METHOD_TO: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_TO;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self, props, duration, ease) {
                        props = Sk.ffi.remapToJs(props);
                        duration = Sk.ffi.remapToJs(duration);
                        ease = Sk.ffi.remapToJs(ease);
                        tween[METHOD_TO](props, duration, ease);
                        return tweenPy;
                      });
                    }, METHOD_TO, []));
                  }
                  break;
                  case METHOD_CALL: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_CALL;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self, callbackPy, argsPy) {
                        var callbackJS = function(argsJs) {
                          Sk.ffi.callsim(callbackPy, Sk.ffi.remapToPy(argsJs));
                        };
                        var argsJs = Sk.ffi.remapToJs(argsPy);
                        tween.call(callbackJS, argsJs);
                        return tweenPy;
                      });
                    }, METHOD_CALL, []));
                  }
                  break;
                  case METHOD_WAIT: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_WAIT;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self, duration) {
                        duration = Sk.ffi.remapToJs(duration);
                        tween[METHOD_WAIT](duration);
                        return tweenPy;
                      });
                    }, METHOD_WAIT, []));
                  }
                  break;
                }
              });
            }, TWEEN, []));
          });
        }, METHOD_GET, []));
      }
      break;
    }
  });
}, TWEEN, []));
/**
 * Container
 */
mod[CONTAINER] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(containerPy, argPy) {
    containerPy.tp$name = CONTAINER;
    if (typeof argPy === 'undefined') {
      containerPy.v = new createjs[CONTAINER]();
    }
    else {
      var name = argPy.tp$name;
      if (typeof name === 'string') {
        switch(name) {
          case CONTAINER: {
            containerPy.v = Sk.ffi.remapToJs(argPy);
          }
          break;
          default: {
            throw new Error(name);
          }
        }
      }
      else {
        throw new Error(typeof name);
      }
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(containerPy, name) {
    var container = Sk.ffi.remapToJs(containerPy);
    switch(name) {
      case PROP_NAME: {
        return new Sk.builtin.str(container[PROP_NAME]);
      }
      case PROP_X: {
        return Sk.builtin.assk$(container[PROP_X], Sk.builtin.nmber.float$);
      }
      case PROP_Y: {
        return Sk.builtin.assk$(container[PROP_Y], Sk.builtin.nmber.float$);
      }
      case PROP_ROTATION: {
        return Sk.builtin.assk$(container[PROP_ROTATION], Sk.builtin.nmber.float$);
      }
      case METHOD_ADD_CHILD: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(methodPy) {
            methodPy.tp$name = METHOD_ADD_CHILD;
            methodPy.v = container[METHOD_ADD_CHILD];
          });
          $loc.__call__ = Sk.ffi.functionPy(function(methodPy, childPy) {
            var child = container[METHOD_ADD_CHILD](Sk.ffi.remapToJs(childPy));
            return Sk.ffi.callsim(mod[childPy.tp$name], Sk.ffi.referenceToPy(child, childPy.tp$name));
          });
        }, METHOD_ADD_CHILD, []));
      }
      case METHOD_ADD_EVENT_LISTENER: {
        return Sk.builtin.addEventListener(mod, container);
      }
      case METHOD_GET_CHILD_AT: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(methodPy) {
            methodPy.tp$name = METHOD_GET_CHILD_AT;
            methodPy.v = container[METHOD_GET_CHILD_AT];
          });
          $loc.__call__ = Sk.ffi.functionPy(function(methodPy, indexPy) {
            var child = container[METHOD_GET_CHILD_AT](Sk.ffi.remapToJs(indexPy));
            return Sk.ffi.callsim(mod[SHAPE], Sk.ffi.referenceToPy(child, SHAPE));
          });
        }, METHOD_GET_CHILD_AT, []));
      }
      case METHOD_GET_NUM_CHILDREN: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(methodPy) {
            methodPy.tp$name = METHOD_GET_NUM_CHILDREN;
            methodPy.v = container[METHOD_GET_NUM_CHILDREN];
          });
          $loc.__call__ = Sk.ffi.functionPy(function(methodPy, childPy) {
            return Sk.builtin.assk$(container[METHOD_GET_NUM_CHILDREN](), Sk.builtin.nmber.int$);
          });
        }, METHOD_GET_NUM_CHILDREN, []));
      }
      case METHOD_REMOVE_EVENT_LISTENER: {
        return Sk.builtin.removeEventListener(mod, container);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(containerPy, name, valuePy) {
    var container = Sk.ffi.remapToJs(containerPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      case PROP_NAME: {
        container[PROP_NAME] = value;
      }
      break;
      case PROP_X: {
        container[PROP_X] = value;
      }
      break;
      case PROP_Y: {
        container[PROP_Y] = value;
      }
      break;
      case PROP_ROTATION: {
        container[PROP_ROTATION] = value;
      }
      break;
      default: {
        throw new Sk.builtin.AttributeError(name + " is not a writeable attribute of " + CONTAINER);
      }
    }
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    return new Sk.builtin.str(CONTAINER + "(" + self.x + ", " + self.y + ")");
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    return new Sk.builtin.str("[" + self.x + ", " + self.y + "]");
  });
}, CONTAINER, []);
/**
 * Ease
 */
mod[EASE] = Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(self) {
    self.tp$name = EASE;
    self.v = createjs[EASE];
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(self, name) {
    switch(name) {
      case PROP_BOUNCE_OUT: {
        var fn = createjs[EASE][PROP_BOUNCE_OUT];
        return {"v": fn};
      }
    }
  });
}, EASE, []));
/**
 * Point
 */
mod[POINT] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(self, x, y) {
    Sk.builtin.pyCheckArgs(POINT, arguments, 1, 3);
    self.tp$name = POINT;
    switch(arguments.length) {
      case 1: {
        self.v = new createjs[POINT]();
      }
      break;
      case 2: {
        x = Sk.ffi.remapToJs(x);
        self.tp$name = POINT;
        self.v = x;
      }
      break;
      case 3: {
        Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
        Sk.builtin.pyCheckType("y", "number", Sk.builtin.checkNumber(y));
        x = Sk.ffi.remapToJs(x);
        y = Sk.ffi.remapToJs(y);
        self.tp$name = POINT;
        self.v = new createjs[POINT](x, y);
      }
      break;
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(pointPy, name) {
    var point = Sk.ffi.remapToJs(pointPy);
    switch(name) {
      case PROP_X: {
        return Sk.builtin.assk$(point.x, Sk.builtin.nmber.float$);
      }
      case PROP_Y: {
        return Sk.builtin.assk$(point.y, Sk.builtin.nmber.float$);
      }
      case METHOD_CLONE: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(methodPy) {
            methodPy.tp$name = METHOD_CLONE;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(methodPy) {
            return Sk.ffi.callsim(mod[POINT], Sk.ffi.remapToPy(point.x), Sk.ffi.remapToPy(point.y));
          });
        }, METHOD_CLONE, []));
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(pointPy, name, valuePy) {
    var point = Sk.ffi.remapToJs(pointPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      case PROP_X: {
        point.x = value;
      }
      break;
      case PROP_Y: {
        point.y = value;
      }
      break;
    }
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(pointPy) {
    var point = Sk.ffi.remapToJs(pointPy);
    return new Sk.builtin.str(POINT + "(" + point.x + ", " + point.y + ")");
  });
  $loc.__str__ = Sk.ffi.functionPy(function(pointPy) {
    var point = Sk.ffi.remapToJs(pointPy);
    return new Sk.builtin.str("[" + point.x + ", " + point.y + "]");
  });
}, POINT, []);
/**
 * getHSL
 */
mod[METHOD_GET_HSL] = Sk.ffi.functionPy(function(hue, saturation, lightness, alpha) {
  hue = Sk.ffi.remapToJs(hue);
  saturation = Sk.ffi.remapToJs(saturation);
  lightness = Sk.ffi.remapToJs(lightness);
  alpha = Sk.ffi.remapToJs(alpha);
  return new Sk.builtin.str(createjs[GRAPHICS][METHOD_GET_HSL](hue, saturation, lightness, alpha));
});
/**
 *
 */
};
}).call(this);
