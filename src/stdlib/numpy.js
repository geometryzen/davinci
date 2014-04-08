(function() {
  Sk.builtin.defineNumPy = function(mod) {
    Sk.ffi.checkFunctionArgs("defineNumPy", arguments, 1, 1);

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

    mod['ndarray'] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
      $loc.__init__ = Sk.ffi.functionPy(function(selfPy, shapePy, dtypePy, bufferPy, offsetPy, stridesPy, orderPy) {
        var ndarrayJs = {};
        ndarrayJs.shape = Sk.ffi.remapToJs(shapePy);
        ndarrayJs.strides = computeStrides(ndarrayJs.shape);
        if (Sk.ffi.isDefined(bufferPy)) {
          Sk.ffi.checkArgType('buffer', [Sk.ffi.PyType.LIST], Sk.ffi.isList(bufferPy), bufferPy);
          ndarrayJs.buffer = Sk.ffi.remapToJs(bufferPy, true);
        }
        Sk.ffi.referenceToPy(ndarrayJs, 'ndarray', undefined, selfPy);
      });
      $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
        var ndarrayJs = Sk.ffi.remapToJs(selfPy);
        switch(name) {
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
          default: {
            throw Sk.ffi.err.attribute(name).isNotGetableOnType('ndarray');
          }
        }
      });
      $loc.__getitem__ = Sk.ffi.functionPy(function(selfPy, indexPy) {
        Sk.ffi.checkMethodArgs("[]", arguments, 1, 1);
        if (Sk.ffi.isInt(indexPy)) {
          var offset  = Sk.ffi.remapToJs(indexPy);
          var ndarrayJs = Sk.ffi.remapToJs(selfPy);
          if (offset >= 0 && offset < ndarrayJs.buffer.length) {
            return ndarrayJs.buffer[offset];
          }
          else {
            throw new Sk.builtin.IndexError("array index out of range");
          }
        }
        else if (Sk.ffi.isTuple(indexPy)) {
          var keyJs  = Sk.ffi.remapToJs(indexPy);
          var ndarrayJs = Sk.ffi.remapToJs(selfPy);
          return ndarrayJs.buffer[computeOffset(ndarrayJs.strides, keyJs)];
        }
        else {
          Sk.ffi.checkArgType('index', [Sk.ffi.PyType.INT, Sk.ffi.PyType.TUPLE], false, indexPy);
        }
      });
      $loc.__add__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
        var selfJs = Sk.ffi.remapToJs(selfPy);
        var lhs = selfJs.buffer;
        var rhs = Sk.ffi.remapToJs(otherPy).buffer;
        var buffer = [];
        for (var i = 0, len = lhs.length; i < len; i++) {
          buffer[i] = Sk.ffh.add(lhs[i], rhs[i]);
        }
        var shapePy = Sk.ffi.tuplePy(selfJs.shape.map(function(x) {return Sk.ffi.numberToIntPy(x);}));
        var bufferPy = Sk.ffi.listPy(buffer);
        return Sk.ffi.callsim(mod['ndarray'], shapePy, undefined, bufferPy);
      });
      $loc.__sub__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
        var selfJs = Sk.ffi.remapToJs(selfPy);
        var lhs = selfJs.buffer;
        var rhs = Sk.ffi.remapToJs(otherPy).buffer;
        var buffer = [];
        for (var i = 0, len = lhs.length; i < len; i++) {
          buffer[i] = Sk.ffh.subtract(lhs[i], rhs[i]);
        }
        var shapePy = Sk.ffi.tuplePy(selfJs.shape.map(function(x) {return Sk.ffi.numberToIntPy(x);}));
        var bufferPy = Sk.ffi.listPy(buffer);
        return Sk.ffi.callsim(mod['ndarray'], shapePy, undefined, bufferPy);
      });
      $loc.__mul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
        var selfJs = Sk.ffi.remapToJs(selfPy);
        var lhs = selfJs.buffer;
        var rhs = Sk.ffi.remapToJs(otherPy).buffer;
        var buffer = [];
        for (var i = 0, len = lhs.length; i < len; i++) {
          buffer[i] = Sk.ffh.multiply(lhs[i], rhs[i]);
        }
        var shapePy = Sk.ffi.tuplePy(selfJs.shape.map(function(x) {return Sk.ffi.numberToIntPy(x);}));
        var bufferPy = Sk.ffi.listPy(buffer);
        return Sk.ffi.callsim(mod['ndarray'], shapePy, undefined, bufferPy);
      });
      $loc.__div__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
        var selfJs = Sk.ffi.remapToJs(selfPy);
        var lhs = selfJs.buffer;
        var rhs = Sk.ffi.remapToJs(otherPy).buffer;
        var buffer = [];
        for (var i = 0, len = lhs.length; i < len; i++) {
          buffer[i] = Sk.ffh.divide(lhs[i], rhs[i]);
        }
        var shapePy = Sk.ffi.tuplePy(selfJs.shape.map(function(x) {return Sk.ffi.numberToIntPy(x);}));
        var bufferPy = Sk.ffi.listPy(buffer);
        return Sk.ffi.callsim(mod['ndarray'], shapePy, undefined, bufferPy);
      });
    }, 'ndarray', []);

    mod['array'] = Sk.ffi.functionPy(function(objectPy, dtypePy, copyPy, orderPy, subokPy, ndminPy) {
      Sk.ffi.checkFunctionArgs("array", arguments, 1, 6);
      Sk.ffi.checkArgType("object", [Sk.ffi.PyType.LIST], Sk.ffi.isList(objectPy), objectPy);
      if (Sk.ffi.isDefined(dtypePy)) {
        Sk.ffi.checkArgType("dtype",  [Sk.ffi.PyType.FUNCTION], Sk.ffi.isFunction(dtypePy), dtypePy);
      }
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

      var shapePy = Sk.ffi.tuplePy(state.shape.map(function(x) {return Sk.ffi.numberToFloatPy(x);}));
      var bufferPy = Sk.ffi.listPy(elementsPy);
      return Sk.ffi.callsim(mod['ndarray'], shapePy, dtypePy, bufferPy);
    });

    mod['empty'] = Sk.ffi.functionPy(function(shapePy, dtypePy, orderPy) {
      Sk.ffi.checkFunctionArgs("empty", arguments, 1, 3);
    });

    mod['sqrt'] = Sk.ffi.functionPy(function() {
      Sk.ffi.checkFunctionArgs("sqrt", arguments, 1, 1);
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
      return Sk.ffi.callsim(mod['ndarray'], shapePy, dtypePy, Sk.ffi.listPy(buffer));
    });
  };
}).call(this);
