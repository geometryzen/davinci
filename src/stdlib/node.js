(function() {
Sk.builtin.defineNode = function(mod) {
Sk.ffi.checkFunctionArgs("defineNode", arguments, 1, 1);
/**
 * @const
 * @type {string}
 */
var NODE                                  = "Node";
/**
 * @const
 * @type {string}
 */
var CANVAS_GRADIENT_CLASS                 = "CanvasGradient";
/**
 * @const
 * @type {string}
 */
var CANVAS_RENDERING_CONTEXT_2D           = "CanvasRenderingContext2D";
/**
 * @const
 * @type {string}
 */
var PROP_CLIENT_HEIGHT                    = "clientHeight";
/**
 * @const
 * @type {string}
 */
var PROP_CLIENT_WIDTH                     = "clientWidth";
/**
 * @const
 * @type {string}
 */
var PROP_DIR                              = "dir";
/**
 * @const
 * @type {string}
 */
var PROP_FILL_STYLE                       = "fillStyle";
/**
 * @const
 * @type {string}
 */
var PROP_FIRST_CHILD                      = "firstChild";
/**
 * @const
 * @type {string}
 */
var PROP_FONT                             = "font";
/**
 * @const
 * @type {string}
 */
var PROP_HEIGHT                           = "height";
/**
 * @const
 * @type {string}
 */
var PROP_INNER_HTML                       = "innerHTML";
/**
 * @const
 * @type {string}
 */
var PROP_LAST_CHILD                       = "lastChild";
/**
 * @const
 * @type {string}
 */
var PROP_LEFT                             = "left";
/**
 * @const
 * @type {string}
 */
var PROP_LINE_CAP                         = "lineCap";
/**
 * @const
 * @type {string}
 */
var PROP_LINE_JOIN                        = "lineJoin";
/**
 * @const
 * @type {string}
 */
var PROP_LINE_WIDTH                       = "lineWidth";
/**
 * @const
 * @type {string}
 */
var PROP_NEXT_SIBLING                     = "nextSibling";
/**
 * @const
 * @type {string}
 */
var PROP_OFFSET_HEIGHT                    = "offsetHeight";
/**
 * @const
 * @type {string}
 */
var PROP_OFFSET_WIDTH                     = "offsetWidth";
/**
 * @const
 * @type {string}
 */
var PROP_PARENT_NODE                      = "parentNode";
/**
 * @const
 * @type {string}
 */
var PROP_POSITION                         = "position";
/**
 * @const
 * @type {string}
 */
var PROP_PREVIOUS_SIBLING                 = "previousSibling";
/**
 * @const
 * @type {string}
 */
var PROP_SHADOW_BLUR                      = "shadowBlur";
/**
 * @const
 * @type {string}
 */
var PROP_SHADOW_COLOR                     = "shadowColor";
/**
 * @const
 * @type {string}
 */
var PROP_SHADOW_OFFSET_X                  = "shadowOffsetX";
/**
 * @const
 * @type {string}
 */
var PROP_SHADOW_OFFSET_Y                  = "shadowOffsetY";
/**
 * @const
 * @type {string}
 */
var PROP_STYLE                            = "style";
/**
 * @const
 * @type {string}
 */
var PROP_STROKE_STYLE                     = "strokeStyle";
/**
 * @const
 * @type {string}
 */
var PROP_TEXT_ALIGN                       = "textAlign";
/**
 * @const
 * @type {string}
 */
var PROP_TEXT_BASELINE                    = "textBaseline";
/**
 * @const
 * @type {string}
 */
var PROP_TOP                              = "top";
/**
 * @const
 * @type {string}
 */
var PROP_WEBKIT_BACKING_STORE_PIXEL_RATIO = "webkitBackingStorePixelRatio";
/**
 * @const
 * @type {string}
 */
var PROP_WIDTH                            = "width";
/**
 * @const
 * @type {string}
 */
var METHOD_ADD_COLOR_STOP                 = "addColorStop";
/**
 * @const
 * @type {string}
 */
var METHOD_APPEND_CHILD                   = "appendChild";
/**
 * @const
 * @type {string}
 */
var METHOD_ARC                            = "arc";
/**
 * @const
 * @type {string}
 */
var METHOD_ARC_TO                         = "arcTo";
/**
 * @const
 * @type {string}
 */
var METHOD_BEGIN_PATH                     = "beginPath";
/**
 * @const
 * @type {string}
 */
var METHOD_BEZIER_CURVE_TO                = "bezierCurveTo";
/**
 * @const
 * @type {string}
 */
var METHOD_CLEAR_RECT                     = "clearRect";
/**
 * @const
 * @type {string}
 */
var METHOD_CLIP                           = "clip";
/**
 * @const
 * @type {string}
 */
var METHOD_CLOSE_PATH                     = "closePath";
/**
 * @const
 * @type {string}
 */
var METHOD_CREATE_LINEAR_GRADIENT         = "createLinearGradient";
/**
 * @const
 * @type {string}
 */
var METHOD_FILL                           = "fill";
/**
 * @const
 * @type {string}
 */
var METHOD_FILL_RECT                      = "fillRect";
/**
 * @const
 * @type {string}
 */
var METHOD_FILL_TEXT                      = "fillText";
/**
 * @const
 * @type {string}
 */
var METHOD_GET_CONTEXT                    = "getContext";
/**
 * @const
 * @type {string}
 */
var METHOD_INSERT_BEFORE                  = "insertBefore";
/**
 * @const
 * @type {string}
 */
var METHOD_LINE_TO                        = "lineTo";
/**
 * @const
 * @type {string}
 */
var METHOD_MOVE_TO                        = "moveTo";
/**
 * @const
 * @type {string}
 */
var METHOD_QUADRATIC_CURVE_TO             = "quadraticCurveTo";
/**
 * @const
 * @type {string}
 */
var METHOD_RECT                           = "rect";
/**
 * @const
 * @type {string}
 */
var METHOD_REMOVE_CHILD                   = "removeChild";
/**
 * @const
 * @type {string}
 */
var METHOD_RESTORE                        = "restore";
/**
 * @const
 * @type {string}
 */
var METHOD_ROTATE                         = "rotate";
/**
 * @const
 * @type {string}
 */
var METHOD_SAVE                           = "save";
/**
 * @const
 * @type {string}
 */
var METHOD_SCALE                          = "scale";
/**
 * @const
 * @type {string}
 */
var METHOD_SET_ATTRIBUTE                  = "setAttribute";
/**
 * @const
 * @type {string}
 */
var METHOD_SET_TRANSFORM                  = "setTransform";
/**
 * @const
 * @type {string}
 */
var METHOD_STROKE                         = "stroke";
/**
 * @const
 * @type {string}
 */
var METHOD_STROKE_RECT                    = "strokeRect";
/**
 * @const
 * @type {string}
 */
var METHOD_STROKE_TEXT                    = "strokeText";
/**
 * @const
 * @type {string}
 */
var METHOD_TRANSFORM                      = "transform";
/**
 * @const
 * @type {string}
 */
var METHOD_TRANSLATE                      = "translate";
/**
 * @const
 * @type {string}
 */
var ARG_CHILD                             = "child";
/**
 * @const
 * @type {string}
 */
var ARG_NAME                              = "name";
/**
 * nodeToPy
 */
var nodeToPy = function(node) {
  if (node) {
    return Sk.ffi.callsim(mod[NODE], Sk.ffi.referenceToPy(node, NODE));
  }
  else {
    return Sk.ffi.remapToPy(null);
  }
}
/**
 * Node
 */
mod[NODE] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, nodePy) {
    Sk.ffi.checkMethodArgs(NODE, arguments, 1, 1);
    Sk.ffi.checkArgType("node", NODE, Sk.ffi.isInstance(nodePy, NODE), nodePy);
    Sk.ffi.referenceToPy(Sk.ffi.remapToJs(nodePy), NODE, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(nodePy, name) {
    var node = Sk.ffi.remapToJs(nodePy);
    switch(name) {
      case PROP_CLIENT_HEIGHT: {
        return Sk.ffi.numberToFloatPy(node[PROP_CLIENT_HEIGHT]);
      }
      case PROP_CLIENT_WIDTH: {
        return Sk.ffi.numberToFloatPy(node[PROP_CLIENT_WIDTH]);
      }
      case PROP_DIR: {
        return Sk.ffi.stringToPy(node[PROP_DIR]);
      }
      case PROP_FIRST_CHILD: {
        return nodeToPy(node[PROP_FIRST_CHILD]);
      }
      case PROP_LAST_CHILD: {
        return nodeToPy(node[PROP_LAST_CHILD]);
      }
      case PROP_NEXT_SIBLING: {
        return nodeToPy(node[PROP_NEXT_SIBLING]);
      }
      case PROP_OFFSET_HEIGHT: {
        return Sk.ffi.numberToIntPy(node[PROP_OFFSET_HEIGHT]);
      }
      case PROP_OFFSET_WIDTH: {
        return Sk.ffi.numberToIntPy(node[PROP_OFFSET_WIDTH]);
      }
      case PROP_PARENT_NODE: {
        return nodeToPy(node[PROP_PARENT_NODE]);
      }
      case PROP_PREVIOUS_SIBLING: {
        return nodeToPy(node[PROP_PREVIOUS_SIBLING]);
      }
      case PROP_HEIGHT: {
        return Sk.builtin.assk$(node[PROP_HEIGHT], Sk.builtin.nmber.int$);
      }
      case PROP_WIDTH: {
        return Sk.builtin.assk$(node[PROP_WIDTH], Sk.builtin.nmber.int$);
      }
      case PROP_STYLE: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = PROP_STYLE;
            self.v = node.style;
          });
          $loc.__getattr__ = Sk.ffi.functionPy(function(stylePy, name) {
            var style = Sk.ffi.remapToJs(stylePy);
            switch(name) {
              case PROP_HEIGHT: {
                return Sk.ffi.stringToPy(style[PROP_HEIGHT]);
              }
              case PROP_LEFT: {
                return Sk.ffi.stringToPy(style[PROP_LEFT]);
              }
              case PROP_POSITION: {
                return Sk.ffi.stringToPy(style[PROP_POSITION]);
              }
              case PROP_TOP: {
                return Sk.ffi.stringToPy(style[PROP_TOP]);
              }
              case PROP_WIDTH: {
                return Sk.ffi.stringToPy(style[PROP_WIDTH]);
              }
            }
          })
          $loc.__setattr__ = Sk.ffi.functionPy(function(stylePy, name, valuePy) {
            var style = Sk.ffi.remapToJs(stylePy);
            var value = Sk.ffi.remapToJs(valuePy);
            switch(name) {
              case PROP_HEIGHT: {
                style[PROP_HEIGHT] = value;
              }
              break;
              case PROP_LEFT: {
                style[PROP_LEFT] = value;
              }
              break;
              case PROP_POSITION: {
                style[PROP_POSITION] = value;
              }
              break;
              case PROP_TOP: {
                style[PROP_TOP] = value;
              }
              break;
              case PROP_WIDTH: {
                style[PROP_WIDTH] = value;
              }
              break;
              default: {
                throw new Sk.builtin.AssertionError(name + " is not a writeable attribute of " + PROP_STYLE);
              }
            }
          })
          $loc.__str__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(PROP_STYLE);
          });
          $loc.__repr__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(PROP_STYLE);
          });
        }, PROP_STYLE, []));
      }
      case METHOD_APPEND_CHILD: {
        return Sk.ffi.callableToPy(mod, METHOD_APPEND_CHILD, function(methodPy, childNodePy) {
          Sk.ffi.checkMethodArgs(METHOD_APPEND_CHILD, arguments, 1, 1);
          Sk.ffi.checkArgType(ARG_CHILD, NODE, Sk.ffi.isInstance(childNodePy, NODE), childNodePy);
          var childNode = Sk.ffi.remapToJs(childNodePy);
          return nodeToPy(node.appendChild(Sk.ffi.remapToJs(childNode)));
        });
      }
      case METHOD_GET_CONTEXT: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_GET_CONTEXT;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, contextIdPy, contextAttributePy) {
            var contextId = Sk.ffi.remapToJs(contextIdPy);
            var contextAttribute = Sk.ffi.remapToJs(contextAttributePy);
            var context = node.getContext(contextId, contextAttribute);
            return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
              $loc.__init__ = Sk.ffi.functionPy(function(self) {
                self.tp$name = CANVAS_RENDERING_CONTEXT_2D;
                self.v = context;
              });
              $loc.__getattr__ = Sk.ffi.functionPy(function(contextPy, name) {
                switch(name) {
                  case PROP_FILL_STYLE: {
                    return Sk.ffi.stringToPy(context[PROP_FILL_STYLE]);
                  }
                  case PROP_FONT: {
                    return Sk.ffi.stringToPy(context[PROP_FONT]);
                  }
                  case PROP_LINE_CAP: {
                    return Sk.ffi.stringToPy(context[PROP_LINE_CAP]);
                  }
                  case PROP_LINE_JOIN: {
                    return Sk.ffi.stringToPy(context[PROP_LINE_JOIN]);
                  }
                  case PROP_LINE_WIDTH: {
                    return Sk.builtin.assk$(context[PROP_LINE_WIDTH], Sk.builtin.nmber.int$);
                  }
                  case PROP_SHADOW_BLUR: {
                    return Sk.builtin.assk$(context[PROP_SHADOW_BLUR], Sk.builtin.nmber.int$);
                  }
                  case PROP_SHADOW_COLOR: {
                    return Sk.ffi.stringToPy(context[PROP_SHADOW_COLOR]);
                  }
                  case PROP_SHADOW_OFFSET_X: {
                    return Sk.builtin.assk$(context[PROP_SHADOW_OFFSET_X], Sk.builtin.nmber.int$);
                  }
                  case PROP_SHADOW_OFFSET_Y: {
                    return Sk.builtin.assk$(context[PROP_SHADOW_OFFSET_Y], Sk.builtin.nmber.int$);
                  }
                  case PROP_STROKE_STYLE: {
                    return Sk.ffi.stringToPy(context[PROP_STROKE_STYLE]);
                  }
                  case PROP_TEXT_ALIGN: {
                    return Sk.ffi.stringToPy(context[PROP_TEXT_ALIGN]);
                  }
                  case PROP_TEXT_BASELINE: {
                    return Sk.ffi.stringToPy(context[PROP_TEXT_BASELINE]);
                  }
                  case PROP_WEBKIT_BACKING_STORE_PIXEL_RATIO: {
                    return Sk.builtin.assk$(context[PROP_WEBKIT_BACKING_STORE_PIXEL_RATIO], Sk.builtin.nmber.int$);
                  }
                  case METHOD_ARC: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_ARC;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self, x, y, radius, startAngle, endAngle, anticlockwise) {
                        x = Sk.ffi.remapToJs(x);
                        y = Sk.ffi.remapToJs(y);
                        radius = Sk.ffi.remapToJs(radius);
                        startAngle = Sk.ffi.remapToJs(startAngle);
                        endAngle = Sk.ffi.remapToJs(endAngle);
                        anticlockwise = Sk.ffi.remapToJs(anticlockwise);
                        context[METHOD_ARC](x, y, radius, startAngle, endAngle, anticlockwise);
                      });
                      $loc.__str__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_ARC);
                      });
                      $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_ARC);
                      });
                    }, METHOD_ARC, []));
                  }
                  case METHOD_ARC_TO: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_ARC_TO;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self, x1, y1, x2, y2, radiusX, radiusY, rotation) {
                        x1 = Sk.ffi.remapToJs(x1);
                        y1 = Sk.ffi.remapToJs(y1);
                        x2 = Sk.ffi.remapToJs(x2);
                        y2 = Sk.ffi.remapToJs(y2);
                        radiusX = Sk.ffi.remapToJs(radiusX);
                        radiusY = Sk.ffi.remapToJs(radiusY);
                        rotation = Sk.ffi.remapToJs(rotation);
                        context[METHOD_ARC_TO](x1, y1, x2, y2, radiusX, radiusY, rotation);
                      });
                      $loc.__str__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_ARC_TO);
                      });
                      $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_ARC_TO);
                      });
                    }, METHOD_ARC_TO, []));
                  }
                  case METHOD_BEGIN_PATH: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_BEGIN_PATH;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self) {
                        context[METHOD_BEGIN_PATH]();
                      });
                      $loc.__str__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_BEGIN_PATH);
                      });
                      $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_BEGIN_PATH);
                      });
                    }, METHOD_BEGIN_PATH, []));
                  }
                  case METHOD_BEZIER_CURVE_TO: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_BEZIER_CURVE_TO;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self, cp1x, cp1y, cp2x, cp2y, x, y) {
                        cp1x = Sk.ffi.remapToJs(cp1x);
                        cp1y = Sk.ffi.remapToJs(cp1y);
                        cp2x = Sk.ffi.remapToJs(cp2x);
                        cp2y = Sk.ffi.remapToJs(cp2y);
                        x = Sk.ffi.remapToJs(x);
                        y = Sk.ffi.remapToJs(y);
                        context[METHOD_BEZIER_CURVE_TO](cp1x, cp1y, cp2x, cp2y, x, y);
                      });
                      $loc.__str__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_BEZIER_CURVE_TO);
                      });
                      $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_BEZIER_CURVE_TO);
                      });
                    }, METHOD_BEZIER_CURVE_TO, []));
                  }
                  case METHOD_CLEAR_RECT: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_CLEAR_RECT;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self, x, y, w, h) {
                        x = Sk.ffi.remapToJs(x);
                        y = Sk.ffi.remapToJs(y);
                        w = Sk.ffi.remapToJs(w);
                        h = Sk.ffi.remapToJs(h);
                        context[METHOD_CLEAR_RECT](x, y, w, h);
                      });
                      $loc.__str__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_CLEAR_RECT);
                      });
                      $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_CLEAR_RECT);
                      });
                    }, METHOD_CLEAR_RECT, []));
                  }
                  case METHOD_CLIP: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_CLIP;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self) {
                        context[METHOD_CLIP]();
                      });
                      $loc.__str__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_CLIP);
                      });
                      $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_CLIP);
                      });
                    }, METHOD_CLIP, []));
                  }
                  case METHOD_CLOSE_PATH: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_CLOSE_PATH;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self) {
                        context[METHOD_CLOSE_PATH]();
                      });
                      $loc.__str__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_CLOSE_PATH);
                      });
                      $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_CLOSE_PATH);
                      });
                    }, METHOD_CLOSE_PATH, []));
                  }
                  case METHOD_CREATE_LINEAR_GRADIENT: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_CREATE_LINEAR_GRADIENT;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self, x0, y0, x1, y1) {
                        x0 = Sk.ffi.remapToJs(x0);
                        y0 = Sk.ffi.remapToJs(y0);
                        x1 = Sk.ffi.remapToJs(x1);
                        y1 = Sk.ffi.remapToJs(y1);
                        var gradient = context[METHOD_CREATE_LINEAR_GRADIENT](x0, y0, x1, y1);
                        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                          $loc.__init__ = Sk.ffi.functionPy(function(self) {
                            self.tp$name = CANVAS_GRADIENT_CLASS;
                            self.v = gradient;
                          });
                          $loc.__getattr__ = Sk.ffi.functionPy(function(gradientPy, name) {
                            switch(name) {
                              case METHOD_ADD_COLOR_STOP: {
                                return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                                  $loc.__init__ = Sk.ffi.functionPy(function(self) {
                                    self.tp$name = METHOD_ADD_COLOR_STOP;
                                  });
                                  $loc.__call__ = Sk.ffi.functionPy(function(self, offset, color) {
                                    offset = Sk.ffi.remapToJs(offset);
                                    color = Sk.ffi.remapToJs(color);
                                    gradient[METHOD_ADD_COLOR_STOP](offset, color);
                                  });
                                  $loc.__str__ = Sk.ffi.functionPy(function(self) {
                                    return Sk.ffi.stringToPy(METHOD_ADD_COLOR_STOP);
                                  });
                                  $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                                    return Sk.ffi.stringToPy(METHOD_ADD_COLOR_STOP);
                                  });
                                }, METHOD_ADD_COLOR_STOP, []));
                              }
                            }
                          })
                          $loc.__setattr__ = Sk.ffi.functionPy(function(gradientPy, name, valuePy) {
                            var value = Sk.ffi.remapToJs(valuePy);
                            switch(name) {
                              default: {
                                throw new Sk.builtin.AssertionError(name + " is not a writeable attribute of " + CANVAS_GRADIENT_CLASS);
                              }
                            }
                          })
                          $loc.__str__ = Sk.ffi.functionPy(function(self) {
                            return Sk.ffi.stringToPy(CANVAS_GRADIENT_CLASS);
                          });
                          $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                            return Sk.ffi.stringToPy(CANVAS_GRADIENT_CLASS);
                          });
                        }, CANVAS_GRADIENT_CLASS, []));
                      });
                      $loc.__str__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_CREATE_LINEAR_GRADIENT);
                      });
                      $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_CREATE_LINEAR_GRADIENT);
                      });
                    }, METHOD_CREATE_LINEAR_GRADIENT, []));
                  }
                  case METHOD_FILL: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_FILL;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self) {
                        context[METHOD_FILL]();
                      });
                      $loc.__str__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_FILL);
                      });
                      $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_FILL);
                      });
                    }, METHOD_FILL, []));
                  }
                  case METHOD_FILL_RECT: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_FILL_RECT;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self, x, y, w, h) {
                        x = Sk.ffi.remapToJs(x);
                        y = Sk.ffi.remapToJs(y);
                        w = Sk.ffi.remapToJs(w);
                        h = Sk.ffi.remapToJs(h);
                        context[METHOD_FILL_RECT](x, y, w, h);
                      });
                      $loc.__str__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_FILL_RECT);
                      });
                      $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_FILL_RECT);
                      });
                    }, METHOD_FILL_RECT, []));
                  }
                  case METHOD_FILL_TEXT: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_FILL_TEXT;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self, text, x, y, maxWidthPy) {
                        text = Sk.ffi.remapToJs(text);
                        x = Sk.ffi.remapToJs(x);
                        y = Sk.ffi.remapToJs(y);
                        var maxWidth = Sk.ffi.remapToJs(maxWidthPy);
                        if (typeof maxWidth === 'undefined') {
                          context[METHOD_FILL_TEXT](text, x, y);
                        }
                        else if (typeof maxWidth === 'number') {
                          context[METHOD_FILL_TEXT](text, x, y, maxWidth);
                        }
                        else {
                          throw new Sk.builtin.TypeError("maxWidth");
                        }
                      });
                      $loc.__str__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_FILL_TEXT);
                      });
                      $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_FILL_TEXT);
                      });
                    }, METHOD_FILL_TEXT, []));
                  }
                  case METHOD_LINE_TO: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_LINE_TO;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self, x, y) {
                        x = Sk.ffi.remapToJs(x);
                        y = Sk.ffi.remapToJs(y);
                        context[METHOD_LINE_TO](x, y);
                      });
                      $loc.__str__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_LINE_TO);
                      });
                      $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_LINE_TO);
                      });
                    }, METHOD_LINE_TO, []));
                  }
                  case METHOD_MOVE_TO: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_MOVE_TO;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self, x, y) {
                        x = Sk.ffi.remapToJs(x);
                        y = Sk.ffi.remapToJs(y);
                        context[METHOD_MOVE_TO](x, y);
                      });
                      $loc.__str__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_MOVE_TO);
                      });
                      $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_MOVE_TO);
                      });
                    }, METHOD_MOVE_TO, []));
                  }
                  case METHOD_QUADRATIC_CURVE_TO: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_QUADRATIC_CURVE_TO;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self, cpx, cpy, x, y) {
                        cpx = Sk.ffi.remapToJs(cpx);
                        cpy = Sk.ffi.remapToJs(cpy);
                        x = Sk.ffi.remapToJs(x);
                        y = Sk.ffi.remapToJs(y);
                        context[METHOD_QUADRATIC_CURVE_TO](cpx, cpy, x, y);
                      });
                      $loc.__str__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_QUADRATIC_CURVE_TO);
                      });
                      $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_QUADRATIC_CURVE_TO);
                      });
                    }, METHOD_QUADRATIC_CURVE_TO, []));
                  }
                  case METHOD_RECT: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_RECT;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self, x, y, w, h) {
                        x = Sk.ffi.remapToJs(x);
                        y = Sk.ffi.remapToJs(y);
                        w = Sk.ffi.remapToJs(w);
                        h = Sk.ffi.remapToJs(h);
                        context[METHOD_RECT](x, y, w, h);
                      });
                      $loc.__str__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_RECT);
                      });
                      $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_RECT);
                      });
                    }, METHOD_RECT, []));
                  }
                  case METHOD_RESTORE: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_RESTORE;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self) {
                        context[METHOD_RESTORE]();
                      });
                      $loc.__str__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_RESTORE);
                      });
                      $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_RESTORE);
                      });
                    }, METHOD_RESTORE, []));
                  }
                  case METHOD_ROTATE: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_ROTATE;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self, angle) {
                        angle = Sk.ffi.remapToJs(angle);
                        context[METHOD_ROTATE](angle);
                      });
                      $loc.__str__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_ROTATE);
                      });
                      $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_ROTATE);
                      });
                    }, METHOD_ROTATE, []));
                  }
                  case METHOD_SAVE: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_SAVE;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self) {
                        context[METHOD_SAVE]();
                      });
                      $loc.__str__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_SAVE);
                      });
                      $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_SAVE);
                      });
                    }, METHOD_SAVE, []));
                  }
                  case METHOD_SCALE: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_SCALE;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self, x, y) {
                        x = Sk.ffi.remapToJs(x);
                        y = Sk.ffi.remapToJs(y);
                        context[METHOD_SCALE](x, y);
                      });
                      $loc.__str__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_SCALE);
                      });
                      $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_SCALE);
                      });
                    }, METHOD_SCALE, []));
                  }
                  case METHOD_SET_TRANSFORM: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_SET_TRANSFORM;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self, a, b, c, d, e, f) {
                        a = Sk.ffi.remapToJs(a);
                        b = Sk.ffi.remapToJs(b);
                        c = Sk.ffi.remapToJs(c);
                        d = Sk.ffi.remapToJs(d);
                        e = Sk.ffi.remapToJs(e);
                        f = Sk.ffi.remapToJs(f);
                        context[METHOD_SET_TRANSFORM](a, b, c, d, e, f);
                      });
                      $loc.__str__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_SET_TRANSFORM);
                      });
                      $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_SET_TRANSFORM);
                      });
                    }, METHOD_SET_TRANSFORM, []));
                  }
                  case METHOD_STROKE: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_STROKE;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self) {
                        context[METHOD_STROKE]();
                      });
                      $loc.__str__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_STROKE);
                      });
                      $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_STROKE);
                      });
                    }, METHOD_STROKE, []));
                  }
                  case METHOD_STROKE_RECT: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_STROKE_RECT;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self, x, y, w, h) {
                        x = Sk.ffi.remapToJs(x);
                        y = Sk.ffi.remapToJs(y);
                        w = Sk.ffi.remapToJs(w);
                        h = Sk.ffi.remapToJs(h);
                        context[METHOD_STROKE_RECT](x, y, w, h);
                      });
                      $loc.__str__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_STROKE_RECT);
                      });
                      $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_STROKE_RECT);
                      });
                    }, METHOD_STROKE_RECT, []));
                  }
                  case METHOD_STROKE_TEXT: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_STROKE_TEXT;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self, text, x, y, maxWidthPy) {
                        text = Sk.ffi.remapToJs(text);
                        x = Sk.ffi.remapToJs(x);
                        y = Sk.ffi.remapToJs(y);
                        var maxWidth = Sk.ffi.remapToJs(maxWidthPy);
                        if (typeof maxWidth === 'undefined') {
                          context[METHOD_STROKE_TEXT](text, x, y);
                        }
                        else if (typeof maxWidth === 'number') {
                          context[METHOD_STROKE_TEXT](text, x, y, maxWidth);
                        }
                        else {
                          throw new Sk.builtin.TypeError("maxWidth");
                        }
                      });
                      $loc.__str__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_STROKE_TEXT);
                      });
                      $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_STROKE_TEXT);
                      });
                    }, METHOD_STROKE_TEXT, []));
                  }
                  case METHOD_TRANSFORM: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_TRANSFORM;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self, a, b, c, d, e, f) {
                        a = Sk.ffi.remapToJs(a);
                        b = Sk.ffi.remapToJs(b);
                        c = Sk.ffi.remapToJs(c);
                        d = Sk.ffi.remapToJs(d);
                        e = Sk.ffi.remapToJs(e);
                        f = Sk.ffi.remapToJs(f);
                        context[METHOD_TRANSFORM](a, b, c, d, e, f);
                      });
                      $loc.__str__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_TRANSFORM);
                      });
                      $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_TRANSFORM);
                      });
                    }, METHOD_TRANSFORM, []));
                  }
                  case METHOD_TRANSLATE: {
                    return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
                      $loc.__init__ = Sk.ffi.functionPy(function(self) {
                        self.tp$name = METHOD_TRANSLATE;
                      });
                      $loc.__call__ = Sk.ffi.functionPy(function(self, x, y) {
                        x = Sk.ffi.remapToJs(x);
                        y = Sk.ffi.remapToJs(y);
                        context[METHOD_TRANSLATE](x, y);
                      });
                      $loc.__str__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_TRANSLATE);
                      });
                      $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                        return Sk.ffi.stringToPy(METHOD_TRANSLATE);
                      });
                    }, METHOD_TRANSLATE, []));
                  }
                }
              })
              $loc.__setattr__ = Sk.ffi.functionPy(function(contextPy, name, valuePy) {
                var context = Sk.ffi.remapToJs(contextPy);
                var value = Sk.ffi.remapToJs(valuePy);
                switch(name) {
                  case PROP_FILL_STYLE: {
                    context[PROP_FILL_STYLE] = value;
                  }
                  break;
                  case PROP_FONT: {
                    context[PROP_FONT] = value;
                  }
                  break;
                  case PROP_LINE_CAP: {
                    context[PROP_LINE_CAP] = value;
                  }
                  break;
                  case PROP_LINE_JOIN: {
                    context[PROP_LINE_JOIN] = value;
                  }
                  break;
                  case PROP_LINE_WIDTH: {
                    context[PROP_LINE_WIDTH] = value;
                  }
                  break;
                  case PROP_SHADOW_BLUR: {
                    context[PROP_SHADOW_BLUR] = value;
                  }
                  break;
                  case PROP_SHADOW_COLOR: {
                    context[PROP_SHADOW_COLOR] = value;
                  }
                  break;
                  case PROP_SHADOW_OFFSET_X: {
                    context[PROP_SHADOW_OFFSET_X] = value;
                  }
                  break;
                  case PROP_SHADOW_OFFSET_Y: {
                    context[PROP_SHADOW_OFFSET_Y] = value;
                  }
                  break;
                  case PROP_STROKE_STYLE: {
                    context[PROP_STROKE_STYLE] = value;
                  }
                  break;
                  case PROP_TEXT_ALIGN: {
                    context[PROP_TEXT_ALIGN] = value;
                  }
                  break;
                  case PROP_TEXT_BASELINE: {
                    context[PROP_TEXT_BASELINE] = value;
                  }
                  break;
                  default: {
                    throw new Sk.builtin.AssertionError(name + " is not a writeable attribute of " + CANVAS_RENDERING_CONTEXT_2D);
                  }
                }
              })
              $loc.__str__ = Sk.ffi.functionPy(function(self) {
                return Sk.ffi.stringToPy(CANVAS_RENDERING_CONTEXT_2D);
              });
              $loc.__repr__ = Sk.ffi.functionPy(function(self) {
                return Sk.ffi.stringToPy(CANVAS_RENDERING_CONTEXT_2D);
              });
            }, CANVAS_RENDERING_CONTEXT_2D, []));
          });
          $loc.__str__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_GET_CONTEXT);
          });
          $loc.__repr__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_GET_CONTEXT);
          });
        }, METHOD_GET_CONTEXT, []));
      }
      case METHOD_INSERT_BEFORE: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_INSERT_BEFORE;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, newNode, refNode) {
            return nodeToPy(node.insertBefore(Sk.ffi.remapToJs(newNode), Sk.ffi.remapToJs(refNode)));
          });
          $loc.__str__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_INSERT_BEFORE)
          })
          $loc.__repr__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_INSERT_BEFORE)
          })
        }, METHOD_INSERT_BEFORE, []));
      }
      case METHOD_REMOVE_CHILD: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_REMOVE_CHILD;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, childNode) {
            return nodeToPy(node.removeChild(Sk.ffi.remapToJs(childNode)));
          });
          $loc.__str__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_REMOVE_CHILD);
          });
          $loc.__repr__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_REMOVE_CHILD);
          });
        }, METHOD_REMOVE_CHILD, []));
      }
      case METHOD_SET_ATTRIBUTE: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_SET_ATTRIBUTE;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(methodPy, namePy, valuePy) {
            Sk.ffi.checkMethodArgs(METHOD_SET_ATTRIBUTE, arguments, 2, 2);
            Sk.ffi.checkArgType(ARG_NAME, Sk.ffi.PyType.STR, Sk.ffi.isStr(namePy), namePy);
            node.setAttribute(Sk.ffi.remapToJs(namePy), Sk.ffi.remapToJs(valuePy));
          });
          $loc.__str__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_SET_ATTRIBUTE)
          });
          $loc.__repr__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_SET_ATTRIBUTE);
          });
        }, METHOD_SET_ATTRIBUTE, []));
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(NODE);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(nodePy, name, valuePy) {
    var node = Sk.ffi.remapToJs(nodePy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      case PROP_DIR: {
        node[PROP_DIR] = value;
      }
      break;
      case 'id': {
        node.setAttribute(name, value);
      }
      break;
      case PROP_HEIGHT: {
        node[PROP_HEIGHT] = value;
      }
      break;
      case PROP_INNER_HTML: {
        Sk.ffi.checkArgType(PROP_INNER_HTML, Sk.ffi.PyType.STR, Sk.ffi.isStr(valuePy), valuePy);
        node[PROP_INNER_HTML] = Sk.ffi.remapToJs(valuePy);
      }
      break;
      case PROP_WIDTH: {
        node[PROP_WIDTH] = value;
      }
      break;
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(NODE);
      }
    }
  });
  $loc.getCSS = Sk.ffi.functionPy(function(self,key) {
    return Sk.ffi.stringToPy(self.v.style[key.v]);
  });
  $loc.setCSS = Sk.ffi.functionPy(function(self, attr, value) {
    self.v.style[attr.v] = value.v
  });
  $loc.getAttribute = Sk.ffi.functionPy(function(self, key) {
    var res = self.v.getAttribute(key.v)
    if (res) {
      return Sk.ffi.stringToPy(res)
    }
    else {
      return null;
    }
  });
  $loc.setAttribute = Sk.ffi.functionPy(function(self, attr, value) {
    self.v.setAttribute(attr.v,value.v)
  });
  $loc.__str__ = Sk.ffi.functionPy(function(self) {
    return Sk.ffi.stringToPy(self.v.tagName)
  })
  $loc.__repr__ = Sk.ffi.functionPy(function(self) {
    return Sk.ffi.stringToPy(NODE)
  })
}, NODE, []);

};
}).call(this);
