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
  var PROP_TITLE                            = "title";
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
  var METHOD_WRITE                          = "write";
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
      return Sk.builtin.none.none$;
    }
  }

  // We must be able to track the JavaScript listener functions.
  // TODO: This should include both the type and the useCapture flag.
  var docListeners = {};

  mod[DOCUMENT_CLASS] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = Sk.ffi.functionPy(function(selfPy, documentPy) {
      Sk.ffi.checkMethodArgs(DOCUMENT_CLASS, arguments, 1, 1);
      Sk.ffi.referenceToPy(Sk.ffi.remapToJs(documentPy), DOCUMENT_CLASS, undefined, selfPy);
    });
    $loc.__getattr__ = Sk.ffi.functionPy(function(documentPy, name) {
      var documentJs = Sk.ffi.remapToJs(documentPy);
      switch(name) {
        case PROP_BODY: {
          return nodeToPy(documentJs.body);
        }
        case PROP_WEBKIT_HIDDEN: {
          return Sk.ffi.booleanToPy(documentJs[PROP_WEBKIT_HIDDEN]);
        }
        case METHOD_ADD_EVENT_LISTENER: {
          return Sk.ffi.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self, typePy, listenerPy, useCapture) {
              var type = Sk.ffi.remapToJs(typePy);
              var listener = function(event) {
                var eventPy = Sk.ffi.callsim(mod[EVENT], Sk.ffi.referenceToPy(event, EVENT));
                Sk.ffi.callsim(listenerPy, eventPy);
              };
              docListeners[type] = listener;
              documentJs[METHOD_ADD_EVENT_LISTENER](type, listener, useCapture);
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
              documentJs[METHOD_REMOVE_EVENT_LISTENER](type, listener, useCapture);
            });
          }, METHOD_REMOVE_EVENT_LISTENER, []));
        }
        case METHOD_CREATE_ELEMENT: {
          return Sk.ffi.callableToPy(mod, METHOD_CREATE_ELEMENT, function(methodPy, tagNamePy, attributesPy) {
            Sk.ffi.checkMethodArgs(METHOD_CREATE_ELEMENT, arguments, 1, 2);
            Sk.ffi.checkArgType(ARG_TAG_NAME, Sk.ffi.PyType.STR, Sk.builtin.isStringPy(tagNamePy), tagNamePy);
            var element = documentJs.createElement(Sk.builtin.stringToJs(tagNamePy));
            if (attributesPy instanceof Sk.builtin.dict) {
              for (var iter = attributesPy.tp$iter(), k = iter.tp$iternext(); k !== undefined; k = iter.tp$iternext()) {
                var v = attributesPy.mp$subscript(k);
                if (v === undefined)
                {
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
            Sk.ffi.checkArgType(ARG_ID, Sk.ffi.PyType.STR, Sk.builtin.isStringPy(idPy), idPy);
            return nodeToPy(documentJs.getElementById(Sk.ffi.remapToJs(idPy)));
          });
        }
        case METHOD_GET_ELEMENTS_BY_TAG_NAME: {
          return Sk.ffi.callableToPy(mod, METHOD_GET_ELEMENTS_BY_TAG_NAME, function(methodPy, tagNamePy) {
            Sk.ffi.checkMethodArgs(METHOD_GET_ELEMENTS_BY_TAG_NAME, arguments, 1, 1);
            Sk.ffi.checkArgType(ARG_TAG_NAME, Sk.ffi.PyType.STR, Sk.builtin.isStringPy(tagNamePy), tagNamePy);
            var elements = documentJs.getElementsByTagName(Sk.ffi.remapToJs(tagNamePy));
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
            Sk.ffi.checkArgType(ARG_TAG_NAME, Sk.ffi.PyType.STR, Sk.builtin.isStringPy(tagNamePy), tagNamePy);
            var elements = documentJs.getElementsByTagName(Sk.ffi.remapToJs(tagNamePy));
            var valuesPy = [];
            for (var i = elements.length - 1; i >= 0; i--) {
              var e = elements[i];
              e.parentNode.removeChild(e);
              valuesPy.push(nodeToPy(e));
            }
            return Sk.ffi.listPy(valuesPy);
          });
        }
        case METHOD_WRITE: {
          return Sk.ffi.callableToPy(mod, METHOD_WRITE, function(methodPy, expPy) {
            Sk.ffi.checkMethodArgs(METHOD_WRITE, arguments, 0, 1);
            Sk.ffi.checkArgType("exp1", Sk.ffi.PyType.STR, Sk.builtin.isStringPy(expPy), expPy);
            documentJs.write(Sk.ffi.remapToJs(expPy));
          });
        }
        default: {
          throw Sk.ffi.err.attribute(name).isNotGetableOnType(DOCUMENT_CLASS);
        }
      }
    });
    $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
      var documentJs = Sk.ffi.remapToJs(selfPy);
      switch(name) {
        case PROP_TITLE: {
          Sk.ffi.checkArgType(name, [Sk.ffi.PyType.STR], Sk.builtin.isStringPy(valuePy), valuePy);
          documentJs[name] = Sk.ffi.remapToJs(valuePy);
        }
        break;
        default: {
          throw Sk.ffi.err.attribute(name).isNotSetableOnType(DOCUMENT_CLASS);
        }
      }
    });
    $loc.__str__ = Sk.ffi.functionPy(function(self) {
      return Sk.builtin.stringToPy(DOCUMENT_CLASS)
    })
    $loc.__repr__ = Sk.ffi.functionPy(function(self) {
      return Sk.builtin.stringToPy(DOCUMENT_CLASS)
    })
  }, DOCUMENT_CLASS, []);

  return mod[DOCUMENT_CLASS];
};
