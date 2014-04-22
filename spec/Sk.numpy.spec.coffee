describe "numpy", ->

  beforeEach () ->
    Sk.currLineNo = 12345
    Sk.configure
      "output": (text) ->
        window.alert(text)
      "debugout": (arg) ->
        console.log "#{JSON.stringify(arg, null, 2)}"
      "read": (searchPath) ->
        if Sk.builtinFiles is undefined or Sk.builtinFiles["files"][searchPath] is undefined
          throw new Error("File not found: '#{searchPath}'")
        else
          return Sk.builtinFiles["files"][searchPath]

  describe "import", ->
    it "should be found", ->

      code = 
      "from numpy import *" + "\n" +
      "x = 23"
      module = Sk.importMainWithBody("<stdin>", false, code)

      x = Sk.ffi.gattr(module, 'x')

      expect(Sk.ffi.getType(x)).toBe Sk.ffi.PyType.INT
      expect(Sk.ffi.remapToJs(x)).toBe 23

  describe "array", ->
    it "ndim", ->

      code = 
      "import numpy as np" + "\n" +
      "x = np.array([[1,2],[3,4]])\n"

      module = Sk.importMainWithBody("<stdin>", false, code)

      x = Sk.ffi.gattr(module, 'x')
      ndim = Sk.ffi.gattr(x, 'ndim')

      expect(Sk.ffi.getType(ndim)).toBe Sk.ffi.PyType.INT
      expect(Sk.ffi.remapToJs(ndim)).toBe 2

  describe "array", ->
    it "shape", ->

      code = 
      "import numpy as np" + "\n" +
      "x = np.array([[1,2,3],[4,5,6]])\n"

      module = Sk.importMainWithBody("<stdin>", false, code)

      x = Sk.ffi.gattr(module, 'x')
      shapePy = Sk.ffi.gattr(x, 'shape')

      expect(Sk.ffi.getType(shapePy)).toBe Sk.ffi.PyType.TUPLE
      shapeJs = Sk.ffi.remapToJs(shapePy)
      expect(shapeJs.length).toBe 2
      expect(shapeJs[0]).toBe 2
      expect(shapeJs[1]).toBe 3

  describe "array", ->
    it "size", ->

      code = 
      "import numpy as np" + "\n" +
      "x = np.array([[1,2],[3,4]])\n"

      module = Sk.importMainWithBody("<stdin>", false, code)

      x = Sk.ffi.gattr(module, 'x')
      size = Sk.ffi.gattr(x, 'size')

      expect(Sk.ffi.getType(size)).toBe Sk.ffi.PyType.INT
      expect(Sk.ffi.remapToJs(size)).toBe 4

  describe "array", ->
    it "strides", ->

      code = 
      "import numpy as np" + "\n" +
      "x = np.array([[1,2,3],[4,5,6]])\n"

      module = Sk.importMainWithBody("<stdin>", false, code)

      x = Sk.ffi.gattr(module, 'x')
      stridesPy = Sk.ffi.gattr(x, 'strides')

      expect(Sk.ffi.getType(stridesPy)).toBe Sk.ffi.PyType.TUPLE
      stridesJs = Sk.ffi.remapToJs(stridesPy)
      expect(stridesJs.length).toBe 2
      expect(stridesJs[0]).toBe 3
      expect(stridesJs[1]).toBe 1

  describe "array", ->
    it "buffer", ->

      code = 
      "import numpy as np" + "\n" +
      "x = np.array([[1,2,3],[4,5,6]])\n"

      module = Sk.importMainWithBody("<stdin>", false, code)

      x = Sk.ffi.gattr(module, 'x')
      bufferPy = Sk.ffi.gattr(x, 'buffer')

      expect(Sk.ffi.getType(bufferPy)).toBe Sk.ffi.PyType.LIST
      bufferJs = Sk.ffi.remapToJs(bufferPy)
      expect(bufferJs.length).toBe 6
      expect(bufferJs[0]).toBe 1
      expect(bufferJs[1]).toBe 2
      expect(bufferJs[2]).toBe 3
      expect(bufferJs[3]).toBe 4
      expect(bufferJs[4]).toBe 5
      expect(bufferJs[5]).toBe 6

  describe "array", ->
    it "str for 1D", ->

      code = 
      "import numpy as np" + "\n" +
      "x = np.array([1,2,3])\n"

      module = Sk.importMainWithBody("<stdin>", false, code)

      x = Sk.ffi.gattr(module, 'x')

      expect(Sk.ffi.getType(x)).toBe Sk.ffi.PyType.INSTANCE
      expect(Sk.ffi.remapToJs(Sk.ffh.str(x))).toBe "[1, 2, 3]"

  describe "array", ->
    it "str for 2D", ->

      code = 
      "import numpy as np" + "\n" +
      "x = np.array([[1,2],[3,4]])\n"

      module = Sk.importMainWithBody("<stdin>", false, code)

      x = Sk.ffi.gattr(module, 'x')

      expect(Sk.ffi.getType(x)).toBe Sk.ffi.PyType.INSTANCE
      expect(Sk.ffi.remapToJs(Sk.ffh.str(x))).toBe "[[1, 2], [3, 4]]"

  describe "array", ->
    it "repr for 1D", ->

      code = 
      "import numpy as np" + "\n" +
      "x = np.array([1,2,3])\n"

      module = Sk.importMainWithBody("<stdin>", false, code)

      x = Sk.ffi.gattr(module, 'x')

      expect(Sk.ffi.getType(x)).toBe Sk.ffi.PyType.INSTANCE
      expect(Sk.ffi.remapToJs(Sk.ffh.repr(x))).toBe "array([1, 2, 3])"

  describe "array", ->
    it "repr for 2D", ->

      code = 
      "import numpy as np" + "\n" +
      "x = np.array([[1,2],[3,4]])\n"

      module = Sk.importMainWithBody("<stdin>", false, code)

      x = Sk.ffi.gattr(module, 'x')

      expect(Sk.ffi.getType(x)).toBe Sk.ffi.PyType.INSTANCE
      expect(Sk.ffi.remapToJs(Sk.ffh.repr(x))).toBe "array([[1, 2], [3, 4]])"
