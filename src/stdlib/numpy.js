(function() {
  Sk.builtin.defineNumPy = function(mod) {
    Sk.ffi.checkFunctionArgs("defineNumPy", arguments, 1, 1);
    /**
     * @const
     * @type {string}
     */
    var CLASS_NDARRAY         = "ndarray";
    /**
     * @const
     * @type {string}
     */
    var METHOD_COPY           = "copy";
    var METHOD_FILL           = "fill";
    var METHOD_RESHAPE        = "reshape";
    var METHOD_TOLIST         = "tolist";

    function unpack(objectPy, buffer, state) {
      if (Sk.ffi.isList(objectPy)) {
        var elementsPy = Sk.ffi.remapToJs(objectPy, true);
        state.level += 1;
        if (state.level > state.shape.length) {
          state.shape.push(elementsPy.length);
        }
        else {
          // Check for equality.
        }
        for (var i = 0, len = elementsPy.length; i < len; i++) {
          unpack(elementsPy[i], buffer, state);
        }
        state.level -= 1;
      }
      else {
        buffer.push(objectPy);
      }
    }

    /**
     * @param {Array.<number>} array The array to reverse.
     */
    function reverse(array) {
      var first = null;
      var last = null;
      var tmp = null;
      var length = array.length;

      for (first = 0, last = length - 1; first < length / 2; first++, last--) {
        tmp = array[first];
        array[first] = array[last];
        array[last] = tmp;
      }
    }

    function computeStrides(shape) {
      var strides = shape.slice(0);
      reverse(strides);
      var prod = 1;
      var temp = 0;
      for (var i = 0, len = strides.length; i < len; i++) {
        var temp = strides[i];
        strides[i] = prod;
        prod *= temp;
      }
      reverse(strides);
      return strides;
    }

    function computeOffset(strides, index) {
      var offset = 0;
      for (var k = 0, len = strides.length; k < len; k++) {
        offset += strides[k] * index[k];
      }
      return offset;
    }

    function prod(numbers) {
      var size = 1;
      for (var i = 0, len = numbers.length; i < len; i++) {
        size *= numbers[i];
      }
      return size;
    }

    function makeNumericBinaryOpLhs(operationPy) {
      return function(selfPy, otherPy) {
        var selfJs = Sk.ffi.remapToJs(selfPy);
        if (Sk.ffi.isInstance(otherPy, CLASS_NDARRAY))
        {
          var lhs = selfJs.buffer;
          var rhs = Sk.ffi.remapToJs(otherPy).buffer;
          var buffer = [];
          for (var i = 0, len = lhs.length; i < len; i++) {
            buffer[i] = operationPy(lhs[i], rhs[i]);
          }
          var shapePy = Sk.ffi.tuplePy(selfJs.shape.map(function(x) {return Sk.ffi.numberToIntPy(x);}));
          var bufferPy = Sk.ffi.listPy(buffer);
          return Sk.ffi.callsim(mod[CLASS_NDARRAY], shapePy, undefined, bufferPy);
        }
        else
        {
          var lhs = selfJs.buffer;
          var buffer = [];
          for (var i = 0, len = lhs.length; i < len; i++) {
            buffer[i] = operationPy(lhs[i], otherPy);
          }
          var shapePy = Sk.ffi.tuplePy(selfJs.shape.map(function(x) {return Sk.ffi.numberToIntPy(x);}));
          var bufferPy = Sk.ffi.listPy(buffer);
          return Sk.ffi.callsim(mod[CLASS_NDARRAY], shapePy, undefined, bufferPy);
        }
      };
    }
    function makeNumericBinaryOpRhs(operationPy) {
      return function(selfPy, otherPy) {
        var selfJs = Sk.ffi.remapToJs(selfPy);
        var rhsBuffer = selfJs.buffer;
        var buffer = [];
        for (var i = 0, len = rhsBuffer.length; i < len; i++) {
          buffer[i] = operationPy(otherPy, rhsBuffer[i]);
        }
        var shapePy = Sk.ffi.tuplePy(selfJs.shape.map(function(x) {return Sk.ffi.numberToIntPy(x);}));
        var bufferPy = Sk.ffi.listPy(buffer);
        return Sk.ffi.callsim(mod[CLASS_NDARRAY], shapePy, undefined, bufferPy);
      };
    }
    function makeUnaryOp(operationPy) {
      return function(selfPy) {
        var selfJs = Sk.ffi.remapToJs(selfPy);
        var buffer = selfJs.buffer.map(function(valuePy) {return operationPy(valuePy);});
        var shapePy = Sk.ffi.tuplePy(selfJs.shape.map(function(x) {return Sk.ffi.numberToIntPy(x);}));
        var bufferPy = Sk.ffi.listPy(buffer);
        return Sk.ffi.callsim(mod[CLASS_NDARRAY], shapePy, undefined, bufferPy);
      };
    }
    /**
     * @param {Array.<number>} buffer
     * @param {Array.<number>} shape
     * @return {string}
     */
    function stringify(buffer, shape) {
      var emits = shape.map(function(x) {return 0;});
      var uBound = shape.length - 1;
      var idxLevel = 0;
      var str = "[";
      var i = 0;
      while(idxLevel !== -1) {
        if (emits[idxLevel] < shape[idxLevel]) {
          if (emits[idxLevel] !== 0) {
            str += ", ";
          }
          if (idxLevel < uBound) {
            str += "[";
            idxLevel += 1;
          }
          else {
            str += Sk.ffi.remapToJs(Sk.ffh.str(buffer[i++]));
            emits[idxLevel] += 1;
          }
        }
        else {
          emits[idxLevel] = 0;
          str += "]";
          idxLevel -= 1;
          if (idxLevel >= 0) {
            emits[idxLevel] += 1;
          }
        }
      }
      return str;
    }

    mod[CLASS_NDARRAY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
      $loc.__init__ = Sk.ffi.functionPy(function(selfPy, shapePy, dtypePy, bufferPy, offsetPy, stridesPy, orderPy) {
        var ndarrayJs = {};
        ndarrayJs.shape = Sk.ffi.remapToJs(shapePy);
        ndarrayJs.strides = computeStrides(ndarrayJs.shape);
        ndarrayJs.dtypePy = dtypePy;
        if (Sk.ffi.isDefined(bufferPy)) {
          Sk.ffi.checkArgType('buffer', [Sk.ffi.PyType.LIST], Sk.ffi.isList(bufferPy), bufferPy);
          ndarrayJs.buffer = Sk.ffi.remapToJs(bufferPy, true);
        }
        Sk.ffi.referenceToPy(ndarrayJs, CLASS_NDARRAY, undefined, selfPy);
      });
      $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
        var ndarrayJs = Sk.ffi.remapToJs(selfPy);
        switch(name) {
          case 'dtype': {
            return ndarrayJs.dtypePy;
          }
          case 'ndim': {
            return Sk.ffi.numberToIntPy(ndarrayJs.shape.length);
          }
          case 'shape': {
            return Sk.ffi.tuplePy(ndarrayJs.shape.map(function(x) {return Sk.ffi.numberToIntPy(x);}));
          }
          case 'size': {
            return Sk.ffi.numberToIntPy(prod(ndarrayJs.shape));
          }
          case 'strides': {
            return Sk.ffi.tuplePy(ndarrayJs.strides.map(function(x) {return Sk.ffi.numberToIntPy(x);}));
          }
          case 'buffer': {
            return Sk.ffi.listPy(ndarrayJs.buffer);
          }
          case METHOD_COPY: {
            return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
              $loc.__init__ = Sk.ffi.functionPy(function(methodPy) {
                Sk.ffi.referenceToPy(null, METHOD_COPY, null, methodPy);
              });
              $loc.__call__ = Sk.ffi.functionPy(function(methodPy) {
                Sk.ffi.checkMethodArgs(METHOD_COPY, arguments, 0, 0);
                var shapePy = Sk.ffi.tuplePy(ndarrayJs.shape.map(function(x) {return Sk.ffi.numberToIntPy(x);}));
                var buffer = ndarrayJs.buffer.map(function(x) {return x;});
                return Sk.ffi.callsim(mod[CLASS_NDARRAY], shapePy, ndarrayJs.dtypePy, Sk.ffi.listPy(buffer));
              });
            }, METHOD_COPY, []));
          }
          case METHOD_FILL: {
            return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
              $loc.__init__ = Sk.ffi.functionPy(function(methodPy) {
                Sk.ffi.referenceToPy(null, METHOD_FILL, null, methodPy);
              });
              $loc.__call__ = Sk.ffi.functionPy(function(methodPy, valuePy) {
                Sk.ffi.checkMethodArgs(METHOD_FILL, arguments, 1, 1);
                for (var i = 0, len = ndarrayJs.buffer.length; i < len; i++) {
                  if (ndarrayJs.dtypePy) {
                    ndarrayJs.buffer[i] = Sk.misceval.callsim(ndarrayJs.dtypePy, valuePy);
                  }
                }
              });
            }, METHOD_FILL, []));
          }
          case METHOD_RESHAPE: {
            return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
              $loc.__init__ = Sk.ffi.functionPy(function(methodPy) {
                Sk.ffi.referenceToPy(null, METHOD_RESHAPE, null, methodPy);
              });
              $loc.__call__ = Sk.ffi.functionPy(function(methodPy, shapePy) {
                Sk.ffi.checkMethodArgs(METHOD_RESHAPE, arguments, 0, 1);
                return Sk.ffi.callsim(mod[CLASS_NDARRAY], shapePy, ndarrayJs.dtypePy, Sk.ffi.listPy(ndarrayJs.buffer));
              });
            }, METHOD_RESHAPE, []));
          }
          case METHOD_TOLIST: {
            return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
              $loc.__init__ = Sk.ffi.functionPy(function(methodPy) {
                Sk.ffi.referenceToPy(null, METHOD_TOLIST, null, methodPy);
              });
              $loc.__call__ = Sk.ffi.functionPy(function(methodPy) {
                Sk.ffi.checkMethodArgs(METHOD_TOLIST, arguments, 0, 0);
                var buffer = ndarrayJs.buffer.map(function(x) {return x;});
                return Sk.ffi.listPy(buffer);
              });
            }, METHOD_TOLIST, []));
          }
          default: {
            throw Sk.ffi.err.attribute(name).isNotGetableOnType(CLASS_NDARRAY);
          }
        }
      });
      $loc.__getitem__ = Sk.ffi.functionPy(function(selfPy, indexPy) {
        var ndarrayJs = Sk.ffi.remapToJs(selfPy);
        Sk.ffi.checkMethodArgs("[]", arguments, 1, 1);
        if (Sk.ffi.isInt(indexPy)) {
          var offset  = Sk.ffi.remapToJs(indexPy);
          if (ndarrayJs.shape.length > 1) {
            var stride = ndarrayJs.strides[0];
            var buffer = [];
            var index = 0;
            for (var i = offset * stride, ubound = (offset + 1) * stride; i < ubound; i++) {
              buffer[index++] = ndarrayJs.buffer[i];
            }
            var bufferPy = Sk.ffi.listPy(buffer);
            var shapePy = Sk.ffi.tuplePy(Array.prototype.slice.call(ndarrayJs.shape,1).map(function(x) {return Sk.ffi.numberToIntPy(x);}));
            return Sk.ffi.callsim(mod[CLASS_NDARRAY], shapePy, undefined, bufferPy);
          }
          else {
            if (offset >= 0 && offset < ndarrayJs.buffer.length) {
              return ndarrayJs.buffer[offset];
            }
            else {
              throw new Sk.builtin.IndexError("array index out of range");
            }
          }
        }
        else if (Sk.ffi.isTuple(indexPy)) {
          var keyJs  = Sk.ffi.remapToJs(indexPy);
          return ndarrayJs.buffer[computeOffset(ndarrayJs.strides, keyJs)];
        }
        else if (Sk.ffi.isFunction(indexPy)) {
          var indices = indexPy.indices();
          var start = typeof indices[0] !== 'undefined' ? indices[0] : 0;
          var stop  = typeof indices[1] !== 'undefined' ? indices[1] : ndarrayJs.buffer.length;
          stop = stop > ndarrayJs.buffer.length ? ndarrayJs.buffer.length : stop;
          var step  = typeof indices[2] !== 'undefined' ? indices[2] : 1;
          var buffer = [];
          var index = 0;
          if (step > 0) {
            for (var i = start; i < stop; i += step) {
              buffer[index++] = ndarrayJs.buffer[i];
            }
          }
          var bufferPy = Sk.ffi.listPy(buffer);
          var shapePy = Sk.ffi.tuplePy([buffer.length].map(function(x) {return Sk.ffi.numberToIntPy(x);}));
          return Sk.ffi.callsim(mod[CLASS_NDARRAY], shapePy, undefined, bufferPy);
        }
        else {
          Sk.ffi.checkArgType('index', [Sk.ffi.PyType.INT, Sk.ffi.PyType.TUPLE, Sk.ffi.PyType.FUNCTION], false, indexPy);
        }
      });
      $loc.__setitem__ = Sk.ffi.functionPy(function(selfPy, indexPy, valuePy) {
        var ndarrayJs = Sk.ffi.remapToJs(selfPy);
        Sk.ffi.checkMethodArgs("[]", arguments, 2, 2);
        if (Sk.ffi.isInt(indexPy)) {
          var offset  = Sk.ffi.remapToJs(indexPy);
          if (ndarrayJs.shape.length > 1) {
            var valueJs = Sk.ffi.remapToJs(valuePy);
            var stride = ndarrayJs.strides[0];
            var index = 0;
            for (var i = offset * stride, ubound = (offset + 1) * stride; i < ubound; i++) {
              ndarrayJs.buffer[i] = valueJs.buffer[index++];
            }
          }
          else {
            if (offset >= 0 && offset < ndarrayJs.buffer.length) {
              ndarrayJs.buffer[offset] = valuePy;
            }
            else {
              throw new Sk.builtin.IndexError("array index out of range");
            }
          }
        }
        else if (Sk.ffi.isTuple(indexPy)) {
          var keyJs  = Sk.ffi.remapToJs(indexPy);
          var ndarrayJs = Sk.ffi.remapToJs(selfPy);
          ndarrayJs.buffer[computeOffset(ndarrayJs.strides, keyJs)] = valuePy;
        }
        else {
          Sk.ffi.checkArgType('index', [Sk.ffi.PyType.INT, Sk.ffi.PyType.TUPLE], false, indexPy);
        }
      });
      $loc.__len__ = Sk.ffi.functionPy(function(selfPy) {
        var selfJs = Sk.ffi.remapToJs(selfPy);
        return Sk.ffi.numberToIntPy(selfJs.shape[0]);
      });
      $loc.__iter__ = Sk.ffi.functionPy(function(selfPy) {
        var ndarrayJs = Sk.ffi.remapToJs(selfPy);
        var ret =
        {
            tp$iter: function() { return ret; },
            $obj: ndarrayJs,
            $index: 0,
            tp$iternext: function()
            {
                if (ret.$index >= ret.$obj.buffer.length) return undefined;
                return ret.$obj.buffer[ret.$index++];
            }
        };
        return ret;
      });

      $loc.__add__  = Sk.ffi.functionPy(makeNumericBinaryOpLhs(Sk.ffh.add));
      $loc.__radd__ = Sk.ffi.functionPy(makeNumericBinaryOpRhs(Sk.ffh.add));

      $loc.__sub__  = Sk.ffi.functionPy(makeNumericBinaryOpLhs(Sk.ffh.sub));
      $loc.__rsub__ = Sk.ffi.functionPy(makeNumericBinaryOpRhs(Sk.ffh.sub));

      $loc.__mul__  = Sk.ffi.functionPy(makeNumericBinaryOpLhs(Sk.ffh.mul));
      $loc.__rmul__ = Sk.ffi.functionPy(makeNumericBinaryOpRhs(Sk.ffh.mul));

      $loc.__div__  = Sk.ffi.functionPy(makeNumericBinaryOpLhs(Sk.ffh.div));
      $loc.__rdiv__ = Sk.ffi.functionPy(makeNumericBinaryOpRhs(Sk.ffh.div));

      $loc.__mod__  = Sk.ffi.functionPy(makeNumericBinaryOpLhs(Sk.ffh.mod));
      $loc.__rmod__ = Sk.ffi.functionPy(makeNumericBinaryOpRhs(Sk.ffh.mod));

      $loc.__xor__  = Sk.ffi.functionPy(makeNumericBinaryOpLhs(Sk.ffh.xor));
      $loc.__rxor__ = Sk.ffi.functionPy(makeNumericBinaryOpRhs(Sk.ffh.xor));

      $loc.__lshift__  = Sk.ffi.functionPy(makeNumericBinaryOpLhs(Sk.ffh.lshift));
      $loc.__rlshift__ = Sk.ffi.functionPy(makeNumericBinaryOpRhs(Sk.ffh.lshift));

      $loc.__rshift__  = Sk.ffi.functionPy(makeNumericBinaryOpLhs(Sk.ffh.rshift));
      $loc.__rrshift__ = Sk.ffi.functionPy(makeNumericBinaryOpRhs(Sk.ffh.rshift));

      $loc.__pos__ = Sk.ffi.functionPy(makeUnaryOp(Sk.ffh.positive));
      $loc.__neg__ = Sk.ffi.functionPy(makeUnaryOp(Sk.ffh.negative));

      $loc.__exp__ = Sk.ffi.functionPy(makeUnaryOp(Sk.ffh.exp));
      $loc.__sin__ = Sk.ffi.functionPy(makeUnaryOp(Sk.ffh.sin));

      $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
        var selfJs = Sk.ffi.remapToJs(selfPy);
        return Sk.builtin.stringToPy(stringify(selfJs.buffer, selfJs.shape));
      })
      $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
        var selfJs = Sk.ffi.remapToJs(selfPy);
        return Sk.builtin.stringToPy("array(" + stringify(selfJs.buffer, selfJs.shape) + ")");
      })
    }, CLASS_NDARRAY, []);

    mod['array'] = Sk.ffi.functionPy(function(objectPy, dtypePy, copyPy, orderPy, subokPy, ndminPy) {
      Sk.ffi.checkFunctionArgs("array", arguments, 1, 6);
      Sk.ffi.checkArgType("object", [Sk.ffi.PyType.LIST], Sk.ffi.isList(objectPy), objectPy);
      if (Sk.ffi.isDefined(copyPy)) {
        Sk.ffi.checkArgType("copy", [Sk.ffi.PyType.BOOL], Sk.ffi.isBool(copyPy), copyPy);
      }
      else {
//      Sk.debugout("copyPy: " + Sk.ffi.getType(copyPy));
      }
      var elementsPy = [];
      var state = {};
      state.level = 0;
      state.shape = [];
      unpack(objectPy, elementsPy, state);

      // Apply the dtype casting function, if it has been provided.
      if (Sk.ffi.isDefined(dtypePy)) {
        Sk.ffi.checkArgType("dtype",  [Sk.ffi.PyType.FUNCTION], Sk.ffi.isFunction(dtypePy), dtypePy);
        for (var i = 0, len = elementsPy.length; i < len; i++) {
          elementsPy[i] = Sk.misceval.callsim(dtypePy, elementsPy[i])
        }
      }

      var shapePy = Sk.ffi.tuplePy(state.shape.map(function(x) {return Sk.ffi.numberToFloatPy(x);}));
      var bufferPy = Sk.ffi.listPy(elementsPy);
      return Sk.ffi.callsim(mod[CLASS_NDARRAY], shapePy, dtypePy, bufferPy);
    });

    mod['empty'] = Sk.ffi.functionPy(function(shapePy, dtypePy, orderPy) {
      Sk.ffi.checkFunctionArgs("empty", arguments, 1, 3);
    });

    mod['linspace'] = Sk.ffi.functionPy(function(startPy, stopPy, numPy, endpointPy, retstepPy) {
      Sk.ffi.checkFunctionArgs("linspace(start, stop, num=50, endpoint=True, retstep=False)", arguments, 2, 5);
//    Sk.ffi.checkArgType("start", [Sk.ffi.PyType.FLOAT], Sk.ffi.isFloat(startPy), startPy);
//    var start = Sk.ffi.remapToJs(startPy);
//    Sk.ffi.checkArgType("stop",  [Sk.ffi.PyType.FLOAT], Sk.ffi.isFloat(stopPy),  stopPy);
//    var stop = Sk.ffi.remapToJs(stopPy);
      var num;
      if (Sk.ffi.isDefined(numPy)) {
        Sk.ffi.checkArgType("num", [Sk.ffi.PyType.INT], Sk.ffi.isInt(numPy), numPy);
        num = Sk.ffi.remapToJs(numPy);
      }
      else {
        num = 50;
        numPy = Sk.ffi.numberToIntPy(50);
      }
      var endpoint;
      if (Sk.ffi.isDefined(endpointPy)) {
        Sk.ffi.checkArgType("endpoint", [Sk.ffi.PyType.BOOL], Sk.ffi.isBool(endpointPy), endpointPy);
        endpoint = Sk.ffi.remapToJs(endpointPy);
      }
      else {
        endpoint = true;
      }
      var retstep;
      if (Sk.ffi.isDefined(retstepPy)) {
        Sk.ffi.checkArgType("retstep", [Sk.ffi.PyType.BOOL], Sk.ffi.isBool(retstepPy), retstepPy);
        retstep = Sk.ffi.remapToJs(retstepPy);
      }
      else {
        retstep = false;
      }
      var diffPy = Sk.ffh.sub(stopPy, startPy);
      var stepPy = endpoint ? Sk.ffh.div(diffPy, Sk.ffh.sub(numPy, Sk.ffi.numberToIntPy(1))) : Sk.ffh.div(diffPy, numPy);
      var buffer = [];
      for (var i = 0; i < num; i++) {
        buffer[i] = Sk.ffh.add(Sk.ffh.mul(Sk.ffi.numberToFloatPy(i), stepPy), startPy);
      }
      var shapeJs = [];
      shapeJs[0] = numPy;
      var shapePy = Sk.ffi.tuplePy(shapeJs);
      var arrayPy = Sk.ffi.callsim(mod[CLASS_NDARRAY], shapePy, undefined, Sk.ffi.listPy(buffer));
      return retstep ? Sk.ffi.tuplePy([arrayPy, stepPy]) : arrayPy;
    });

    mod['zeros'] = Sk.ffi.functionPy(function(shapePy, dtypePy, orderPy) {
      Sk.ffi.checkFunctionArgs("zeros", arguments, 1, 2);
      Sk.ffi.checkArgType("shape", [Sk.ffi.PyType.TUPLE], Sk.ffi.isTuple(shapePy), shapePy);
      var shapeJs = Sk.ffi.remapToJs(shapePy);
      var size = prod(shapeJs);
      var buffer = [];
      var zero = Sk.ffi.numberToFloatPy(0);
      for (var i = 0; i < size; i++) {
        buffer[i] = zero;
      }
      return Sk.ffi.callsim(mod[CLASS_NDARRAY], shapePy, dtypePy, Sk.ffi.listPy(buffer));
    });
  };
}).call(this);
