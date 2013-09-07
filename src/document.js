/**
 * Convenience function for incorporating a Window class into a module.
 *
 * Usage:
 *
 * 1) mod['document'] = Sk.ffi.callsim(Sk.builtin.buildDocumentClass(mod));
 * 2) mod['Document'] = Sk.builtin.buildDocumentClass(mod);
 *
 * Dependencies:
 *
 * mod['Event']
 * mod['Node']
 *
 */
Sk.builtin.buildDocumentClass = function(mod) {
  /**
   * @const
   * @type {string}
   */
  var DOCUMENT_CLASS                        = "Document";
  /**
   * @const
   * @type {string}
   */
  var EVENT                                 = "Event";
  /**
   * @const
   * @type {string}
   */
  var NODE                                  = "Node";
  /**
   * @const
   * @type {string}
   */
  var PROP_BODY                             = "body";
  /**
   * @const
   * @type {string}
   */
  var PROP_WEBKIT_HIDDEN                    = "webkitHidden";
  /**
   * @const
   * @type {string}
   */
  var METHOD_ADD_EVENT_LISTENER             = "addEventListener";
  /**
   * @const
   * @type {string}
   */
  var METHOD_CREATE_ELEMENT                 = "createElement";
  /**
   * @const
   * @type {string}
   */
  var METHOD_GET_ELEMENT_BY_ID              = "getElementById";
  /**
   * @const
   * @type {string}
   */
  var METHOD_GET_ELEMENTS_BY_TAG_NAME       = "getElementsByTagName";
  /**
   * @const
   * @type {string}
   */
  var METHOD_REMOVE_ELEMENTS_BY_TAG_NAME    = "removeElementsByTagName";
  /**
   * @const
   * @type {string}
   */
  var METHOD_REMOVE_EVENT_LISTENER          = "removeEventListener";
  /**
   * @const
   * @type {string}
   */
 var ARG_ID                                = "id";
  /**
   * @const
   * @type {string}
   */
 var ARG_TAG_NAME                          = "tagName";

  var nodeToPy = function(node) {
    if (node) {
      return Sk.ffi.callsim(mod[NODE], Sk.ffi.referenceToPy(node, NODE));
    }
    else {
      return Sk.ffi.remapToPy(null);
    }
  }

  // We must be able to track the JavaScript listener functions.
  // TODO: This should include both the type and the useCapture flag.
  var docListeners = {};

  return Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
      Sk.ffi.checkMethodArgs(NODE, arguments, 0, 0);
      Sk.ffi.referenceToPy(document, DOCUMENT_CLASS, undefined, selfPy);
    });
    $loc.__getattr__ = Sk.ffi.functionPy(function(self, name) {
      switch(name) {
        case PROP_BODY: {
          return nodeToPy(document.body);
        }
        case PROP_WEBKIT_HIDDEN: {
          return Sk.ffi.booleanToPy(document[PROP_WEBKIT_HIDDEN]);
        }
        case METHOD_ADD_EVENT_LISTENER: {
          return Sk.ffi.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self, typePy, listenerPy, useCapture) {
              var type = Sk.ffi.remapToJs(typePy);
              var listener = function(event) {
                var eventPy = Sk.ffi.callsim(mod[EVENT], Sk.ffi.remapToPy(event, EVENT));
                Sk.ffi.callsim(listenerPy, eventPy);
              };
              docListeners[type] = listener;
              document[METHOD_ADD_EVENT_LISTENER](type, listener, useCapture);
            });
          }, METHOD_ADD_EVENT_LISTENER, []));
        }
        case METHOD_REMOVE_EVENT_LISTENER: {
          return Sk.ffi.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self, typePy, listener, useCapture) {
              var type = Sk.ffi.remapToJs(typePy);
              var listener = docListeners[type];
              delete docListeners[type];
              document[METHOD_REMOVE_EVENT_LISTENER](type, listener, useCapture);
            });
          }, METHOD_REMOVE_EVENT_LISTENER, []));
        }
        case METHOD_CREATE_ELEMENT: {
          return Sk.ffi.callableToPy(mod, METHOD_CREATE_ELEMENT, function(methodPy, tagNamePy, attributesPy) {
            Sk.ffi.checkMethodArgs(METHOD_CREATE_ELEMENT, arguments, 1, 2);
            Sk.ffi.checkArgType(ARG_TAG_NAME, Sk.ffi.PyType.STR, Sk.ffi.isString(tagNamePy));
            var element = document.createElement(Sk.ffi.remapToJs(tagNamePy));
            if (attributesPy instanceof Sk.builtin.dict) {
              for (var iter = attributesPy.tp$iter(), k = iter.tp$iternext(); k !== undefined; k = iter.tp$iternext()) {
                var v = attributesPy.mp$subscript(k);
                if (v === undefined) {
                  v = null;
                }
                var kAsJs = Sk.ffi.remapToJs(k);
                var vAsJs = Sk.ffi.remapToJs(v);
                element.setAttribute(kAsJs, vAsJs);
              }
            }
            return nodeToPy(element);
          });
        }
        case METHOD_GET_ELEMENT_BY_ID: {
          return Sk.ffi.callableToPy(mod, METHOD_GET_ELEMENT_BY_ID, function(methodPy, idPy) {
            Sk.ffi.checkMethodArgs(METHOD_GET_ELEMENT_BY_ID, arguments, 1, 1);
            Sk.ffi.checkArgType(ARG_ID, Sk.ffi.PyType.STR, Sk.ffi.isString(idPy));
            return nodeToPy(document.getElementById(Sk.ffi.remapToJs(idPy)));
          });
        }
        case METHOD_GET_ELEMENTS_BY_TAG_NAME: {
          return Sk.ffi.callableToPy(mod, METHOD_GET_ELEMENTS_BY_TAG_NAME, function(methodPy, tagNamePy) {
            Sk.ffi.checkMethodArgs(METHOD_GET_ELEMENTS_BY_TAG_NAME, arguments, 1, 1);
            Sk.ffi.checkArgType(ARG_TAG_NAME, Sk.ffi.PyType.STR, Sk.ffi.isString(tagNamePy));
            var elements = document.getElementsByTagName(Sk.ffi.remapToJs(tagNamePy));
            var valuesPy = [];
            for (var i = elements.length - 1; i >= 0; i--) {
              valuesPy.push(nodeToPy(elements[i]));
            }
            return Sk.ffi.listPy(valuesPy);
          });
        }
        case METHOD_REMOVE_ELEMENTS_BY_TAG_NAME: {
          return Sk.ffi.callableToPy(mod, METHOD_REMOVE_ELEMENTS_BY_TAG_NAME, function(methodPy, tagNamePy) {
            Sk.ffi.checkMethodArgs(METHOD_REMOVE_ELEMENTS_BY_TAG_NAME, arguments, 1, 1);
            Sk.ffi.checkArgType(ARG_TAG_NAME, Sk.ffi.PyType.STR, Sk.ffi.isString(tagNamePy));
            var elements = document.getElementsByTagName(Sk.ffi.remapToJs(tagNamePy));
            var valuesPy = [];
            for (var i = elements.length - 1; i >= 0; i--) {
              var e = elements[i];
              e.parentNode.removeChild(e);
              valuesPy.push(nodeToPy(e));
            }
            return Sk.ffi.listPy(valuesPy);
          });
        }
        default: {
          throw Sk.ffi.err.attribute(name).isNotGetableOnType(DOCUMENT_CLASS);
        }
      }
    });
    $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
      switch(name) {
        default: {
          throw Sk.ffi.err.attribute(name).isNotSetableOnType(DOCUMENT_CLASS);
        }
      }
    });
    $loc.__str__ = Sk.ffi.functionPy(function(self) {
      return Sk.ffi.stringToPy(DOCUMENT_CLASS)
    })
    $loc.__repr__ = Sk.ffi.functionPy(function(self) {
      return Sk.ffi.stringToPy(DOCUMENT_CLASS)
    })
  }, DOCUMENT_CLASS, []);
};
