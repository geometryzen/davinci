describe "e3ga", ->

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

  describe "VectorE3", ->
    it "construction should initialize properties", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")

      ctor = Sk.ffi.gattr(module, 'VectorE3')

      e1 = Sk.ffi.callsim(ctor, Sk.builtin.numberToPy(1), Sk.builtin.numberToPy(0), Sk.builtin.numberToPy(0))
      expect(Sk.ffi.getType e1).toBe Sk.ffi.PyType.INSTANCE

      wPy = Sk.ffi.gattr e1, 'w'
      expect(Sk.ffi.getType wPy).toBe Sk.ffi.PyType.FLOAT
      expect(Sk.ffi.numberToJs wPy).toBe 0

      xPy = Sk.ffi.gattr e1, 'x'
      expect(Sk.ffi.getType xPy).toBe Sk.ffi.PyType.FLOAT
      expect(Sk.ffi.numberToJs xPy).toBe 1

      yPy = Sk.ffi.gattr e1, 'y'
      expect(Sk.ffi.getType yPy).toBe Sk.ffi.PyType.FLOAT
      expect(Sk.ffi.numberToJs yPy).toBe 0

      zPy = Sk.ffi.gattr e1, 'z'
      expect(Sk.ffi.getType zPy).toBe Sk.ffi.PyType.FLOAT
      expect(Sk.ffi.numberToJs zPy).toBe 0

      xyPy = Sk.ffi.gattr e1, 'xy'
      expect(Sk.ffi.getType xyPy).toBe Sk.ffi.PyType.FLOAT
      expect(Sk.ffi.numberToJs xyPy).toBe 0

      yzPy = Sk.ffi.gattr e1, 'yz'
      expect(Sk.ffi.getType yzPy).toBe Sk.ffi.PyType.FLOAT
      expect(Sk.ffi.numberToJs yzPy).toBe 0

      zxPy = Sk.ffi.gattr e1, 'zx'
      expect(Sk.ffi.getType zxPy).toBe Sk.ffi.PyType.FLOAT
      expect(Sk.ffi.numberToJs zxPy).toBe 0

      xyzPy = Sk.ffi.gattr e1, 'xyz'
      expect(Sk.ffi.getType xyzPy).toBe Sk.ffi.PyType.FLOAT
      expect(Sk.ffi.numberToJs xyzPy).toBe 0

      expect(Sk.builtin.stringToJs Sk.ffh.str e1).toBe 'e1'

  describe "Euclidean3", ->
    it "construction should initialize properties", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")

      ctor = Sk.ffi.gattr(module, 'Euclidean3')

      inner = Sk.ffi.callsim(ctor, 
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(2),
        Sk.builtin.numberToPy(3),
        Sk.builtin.numberToPy(4),
        Sk.builtin.numberToPy(5),
        Sk.builtin.numberToPy(6),
        Sk.builtin.numberToPy(7),
        Sk.builtin.numberToPy(8))

      mv = new Euclidean3(inner);
      expect(mv.w).toBe   1
      expect(mv.x).toBe   2
      expect(mv.y).toBe   3
      expect(mv.z).toBe   4
      expect(mv.xy).toBe  5
      expect(mv.yz).toBe  6
      expect(mv.zx).toBe  7
      expect(mv.xyz).toBe 8

    it "w assignment to a number", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")
      mv = new Euclidean3(module,0,0,0,0,0,0,0,0);
      mv.w = 1
      expect(mv.w).toBe   1

    it "x assignment to a number", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")
      mv = new Euclidean3(module,0,0,0,0,0,0,0,0);
      mv.x = 1
      expect(mv.x).toBe   1

    it "y assignment to a number", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")
      mv = new Euclidean3(module,0,0,0,0,0,0,0,0);
      mv.y = 1
      expect(mv.y).toBe   1

    it "z assignment to a number", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")
      mv = new Euclidean3(module,0,0,0,0,0,0,0,0);
      mv.z = 1
      expect(mv.z).toBe   1

    it "xy assignment to a number", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")
      mv = new Euclidean3(module,0,0,0,0,0,0,0,0);
      mv.xy = 1
      expect(mv.xy).toBe   1

    it "yz assignment to a number", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")
      mv = new Euclidean3(module,0,0,0,0,0,0,0,0);
      mv.yz = 1
      expect(mv.yz).toBe   1

    it "zx assignment to a number", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")
      mv = new Euclidean3(module,0,0,0,0,0,0,0,0);
      mv.zx = 1
      expect(mv.zx).toBe   1

    it "xyz assignment to a number", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")
      mv = new Euclidean3(module,0,0,0,0,0,0,0,0);
      mv.xyz = 1
      expect(mv.xyz).toBe   1

  describe "e1.cross(e2)", ->
    it "should be e3", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")

      ctor = Sk.ffi.gattr(module, 'Euclidean3')

      e1Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e2Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e3Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e1 = new Euclidean3(e1Py);
      e2 = new Euclidean3(e2Py);
      e3 = new Euclidean3(e3Py);

      actual = e1.cross(e2)

      expect(actual.w).toBe   e3.w
      expect(actual.x).toBe   e3.x
      expect(actual.y).toBe   e3.y
      expect(actual.z).toBe   e3.z
      expect(actual.xy).toBe  e3.xy
      expect(actual.yz).toBe  e3.yz
      expect(actual.zx).toBe  e3.zx
      expect(actual.xyz).toBe e3.xyz

  describe "e2.cross(e3)", ->
    it "should be e1", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")

      ctor = Sk.ffi.gattr(module, 'Euclidean3')

      e1Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e2Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e3Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e1 = new Euclidean3(e1Py);
      e2 = new Euclidean3(e2Py);
      e3 = new Euclidean3(e3Py);

      actual = e2.cross(e3)

      expect(actual.w).toBe   e1.w
      expect(actual.x).toBe   e1.x
      expect(actual.y).toBe   e1.y
      expect(actual.z).toBe   e1.z
      expect(actual.xy).toBe  e1.xy
      expect(actual.yz).toBe  e1.yz
      expect(actual.zx).toBe  e1.zx
      expect(actual.xyz).toBe e1.xyz

  describe "e3.cross(e1)", ->
    it "should be e2", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")

      ctor = Sk.ffi.gattr(module, 'Euclidean3')

      e1Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e2Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e3Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e1 = new Euclidean3(e1Py);
      e2 = new Euclidean3(e2Py);
      e3 = new Euclidean3(e3Py);

      actual = e3.cross(e1)

      expect(actual.w).toBe   e2.w
      expect(actual.x).toBe   e2.x
      expect(actual.y).toBe   e2.y
      expect(actual.z).toBe   e2.z
      expect(actual.xy).toBe  e2.xy
      expect(actual.yz).toBe  e2.yz
      expect(actual.zx).toBe  e2.zx
      expect(actual.xyz).toBe e2.xyz

  describe "e1.cross(e12)", ->
    it "should be zero", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")

      ctor = Sk.ffi.gattr(module, 'Euclidean3')

      e1Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e2Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e3Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e1 = new Euclidean3(e1Py);
      e2 = new Euclidean3(e2Py);
      e12 = new Euclidean3(Sk.ffh.bitXor(e1Py,e2Py));
      e3 = new Euclidean3(e3Py);

      actual = e1.cross(e12)

      expect(actual.w).toBe   0
      expect(actual.x).toBe   0
      expect(actual.y).toBe   0
      expect(actual.z).toBe   0
      expect(actual.xy).toBe  0
      expect(actual.yz).toBe  0
      expect(actual.zx).toBe  0
      expect(actual.xyz).toBe 0

  describe "e1.cross(e23)", ->
    it "should be 1", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")

      ctor = Sk.ffi.gattr(module, 'Euclidean3')

      e1Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e2Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e3Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e1 = new Euclidean3(e1Py);
      e2 = new Euclidean3(e2Py);
      e23 = new Euclidean3(Sk.ffh.bitXor(e2Py,e3Py));
      e3 = new Euclidean3(e3Py);

      actual = e1.cross(e23)

      expect(actual.w).toBe   1
      expect(actual.x).toBe   0
      expect(actual.y).toBe   0
      expect(actual.z).toBe   0
      expect(actual.xy).toBe  0
      expect(actual.yz).toBe  0
      expect(actual.zx).toBe  0
      expect(actual.xyz).toBe 0

  describe "e1.cross(e31)", ->
    it "should be 0", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")

      ctor = Sk.ffi.gattr(module, 'Euclidean3')

      e1Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e2Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e3Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e1 = new Euclidean3(e1Py);
      e2 = new Euclidean3(e2Py);
      e31 = new Euclidean3(Sk.ffh.bitXor(e3Py,e1Py));
      e3 = new Euclidean3(e3Py);

      actual = e1.cross(e31)

      expect(actual.w).toBe   0
      expect(actual.x).toBe   0
      expect(actual.y).toBe   0
      expect(actual.z).toBe   0
      expect(actual.xy).toBe  0
      expect(actual.yz).toBe  0
      expect(actual.zx).toBe  0
      expect(actual.xyz).toBe 0

  describe "e2.cross(e23)", ->
    it "should be 0", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")

      ctor = Sk.ffi.gattr(module, 'Euclidean3')

      e1Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e2Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e3Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e1 = new Euclidean3(e1Py);
      e2 = new Euclidean3(e2Py);
      e23 = new Euclidean3(Sk.ffh.bitXor(e2Py,e3Py));
      e3 = new Euclidean3(e3Py);

      actual = e2.cross(e23)

      expect(actual.w).toBe   0
      expect(actual.x).toBe   0
      expect(actual.y).toBe   0
      expect(actual.z).toBe   0
      expect(actual.xy).toBe  0
      expect(actual.yz).toBe  0
      expect(actual.zx).toBe  0
      expect(actual.xyz).toBe 0

  describe "e2.cross(e31)", ->
    it "should be 1", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")

      ctor = Sk.ffi.gattr(module, 'Euclidean3')

      e1Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e2Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e3Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e1 = new Euclidean3(e1Py);
      e2 = new Euclidean3(e2Py);
      e31 = new Euclidean3(Sk.ffh.bitXor(e3Py,e1Py));
      e3 = new Euclidean3(e3Py);

      actual = e2.cross(e31)

      expect(actual.w).toBe   1
      expect(actual.x).toBe   0
      expect(actual.y).toBe   0
      expect(actual.z).toBe   0
      expect(actual.xy).toBe  0
      expect(actual.yz).toBe  0
      expect(actual.zx).toBe  0
      expect(actual.xyz).toBe 0

  describe "e2.cross(e12)", ->
    it "should be 0", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")

      ctor = Sk.ffi.gattr(module, 'Euclidean3')

      e1Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e2Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e3Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e1 = new Euclidean3(e1Py);
      e2 = new Euclidean3(e2Py);
      e12 = new Euclidean3(Sk.ffh.bitXor(e1Py,e2Py));
      e3 = new Euclidean3(e3Py);

      actual = e2.cross(e12)

      expect(actual.w).toBe   0
      expect(actual.x).toBe   0
      expect(actual.y).toBe   0
      expect(actual.z).toBe   0
      expect(actual.xy).toBe  0
      expect(actual.yz).toBe  0
      expect(actual.zx).toBe  0
      expect(actual.xyz).toBe 0

  describe "e3.cross(e12)", ->
    it "should be 1", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")

      ctor = Sk.ffi.gattr(module, 'Euclidean3')

      e1Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e2Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e3Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e1 = new Euclidean3(e1Py);
      e2 = new Euclidean3(e2Py);
      e12 = new Euclidean3(Sk.ffh.bitXor(e1Py,e2Py));
      e3 = new Euclidean3(e3Py);

      actual = e3.cross(e12)

      expect(actual.w).toBe   1
      expect(actual.x).toBe   0
      expect(actual.y).toBe   0
      expect(actual.z).toBe   0
      expect(actual.xy).toBe  0
      expect(actual.yz).toBe  0
      expect(actual.zx).toBe  0
      expect(actual.xyz).toBe 0

  describe "e3.cross(e23)", ->
    it "should be 1", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")

      ctor = Sk.ffi.gattr(module, 'Euclidean3')

      e1Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e2Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e3Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e1 = new Euclidean3(e1Py);
      e2 = new Euclidean3(e2Py);
      e23 = new Euclidean3(Sk.ffh.bitXor(e2Py,e3Py));
      e3 = new Euclidean3(e3Py);

      actual = e3.cross(e23)

      expect(actual.w).toBe   0
      expect(actual.x).toBe   0
      expect(actual.y).toBe   0
      expect(actual.z).toBe   0
      expect(actual.xy).toBe  0
      expect(actual.yz).toBe  0
      expect(actual.zx).toBe  0
      expect(actual.xyz).toBe 0

  describe "e3.cross(e31)", ->
    it "should be 1", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")

      ctor = Sk.ffi.gattr(module, 'Euclidean3')

      e1Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e2Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e3Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e1 = new Euclidean3(e1Py);
      e2 = new Euclidean3(e2Py);
      e31 = new Euclidean3(Sk.ffh.bitXor(e3Py,e1Py));
      e3 = new Euclidean3(e3Py);

      actual = e3.cross(e31)

      expect(actual.w).toBe   0
      expect(actual.x).toBe   0
      expect(actual.y).toBe   0
      expect(actual.z).toBe   0
      expect(actual.xy).toBe  0
      expect(actual.yz).toBe  0
      expect(actual.zx).toBe  0
      expect(actual.xyz).toBe 0

  describe "e23.cross(e1)", ->
    it "should be 1", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")

      ctor = Sk.ffi.gattr(module, 'Euclidean3')

      e1Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e2Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e3Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e1 = new Euclidean3(e1Py);
      e2 = new Euclidean3(e2Py);
      e23 = new Euclidean3(Sk.ffh.bitXor(e2Py,e3Py));
      e3 = new Euclidean3(e3Py);

      actual = e23.cross(e1)

      expect(actual.w).toBe   1
      expect(actual.x).toBe   0
      expect(actual.y).toBe   0
      expect(actual.z).toBe   0
      expect(actual.xy).toBe  0
      expect(actual.yz).toBe  0
      expect(actual.zx).toBe  0
      expect(actual.xyz).toBe 0

  describe "e31.cross(e1)", ->
    it "should be 1", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")

      ctor = Sk.ffi.gattr(module, 'Euclidean3')

      e1Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e2Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e3Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e1 = new Euclidean3(e1Py);
      e2 = new Euclidean3(e2Py);
      e31 = new Euclidean3(Sk.ffh.bitXor(e3Py,e1Py));
      e3 = new Euclidean3(e3Py);

      actual = e31.cross(e1)

      expect(actual.w).toBe   0
      expect(actual.x).toBe   0
      expect(actual.y).toBe   0
      expect(actual.z).toBe   0
      expect(actual.xy).toBe  0
      expect(actual.yz).toBe  0
      expect(actual.zx).toBe  0
      expect(actual.xyz).toBe 0

  describe "e12.cross(e1)", ->
    it "should be 0", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")

      ctor = Sk.ffi.gattr(module, 'Euclidean3')

      e1Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e2Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e3Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e1 = new Euclidean3(e1Py);
      e2 = new Euclidean3(e2Py);
      e12 = new Euclidean3(Sk.ffh.bitXor(e1Py,e2Py));
      e3 = new Euclidean3(e3Py);

      actual = e12.cross(e1)

      expect(actual.w).toBe   0
      expect(actual.x).toBe   0
      expect(actual.y).toBe   0
      expect(actual.z).toBe   0
      expect(actual.xy).toBe  0
      expect(actual.yz).toBe  0
      expect(actual.zx).toBe  0
      expect(actual.xyz).toBe 0

  describe "e12.cross(e2)", ->
    it "should be 0", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")

      ctor = Sk.ffi.gattr(module, 'Euclidean3')

      e1Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e2Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e3Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e1 = new Euclidean3(e1Py);
      e2 = new Euclidean3(e2Py);
      e12 = new Euclidean3(Sk.ffh.bitXor(e1Py,e2Py));
      e3 = new Euclidean3(e3Py);

      actual = e12.cross(e2)

      expect(actual.w).toBe   0
      expect(actual.x).toBe   0
      expect(actual.y).toBe   0
      expect(actual.z).toBe   0
      expect(actual.xy).toBe  0
      expect(actual.yz).toBe  0
      expect(actual.zx).toBe  0
      expect(actual.xyz).toBe 0

  describe "e23.cross(e2)", ->
    it "should be 0", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")

      ctor = Sk.ffi.gattr(module, 'Euclidean3')

      e1Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e2Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e3Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e1 = new Euclidean3(e1Py);
      e2 = new Euclidean3(e2Py);
      e23 = new Euclidean3(Sk.ffh.bitXor(e2Py,e3Py));
      e3 = new Euclidean3(e3Py);

      actual = e23.cross(e2)

      expect(actual.w).toBe   0
      expect(actual.x).toBe   0
      expect(actual.y).toBe   0
      expect(actual.z).toBe   0
      expect(actual.xy).toBe  0
      expect(actual.yz).toBe  0
      expect(actual.zx).toBe  0
      expect(actual.xyz).toBe 0

  describe "e31.cross(e2)", ->
    it "should be 1", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")

      ctor = Sk.ffi.gattr(module, 'Euclidean3')

      e1Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e2Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e3Py = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      e1 = new Euclidean3(e1Py);
      e2 = new Euclidean3(e2Py);
      e31 = new Euclidean3(Sk.ffh.bitXor(e3Py,e1Py));
      e3 = new Euclidean3(e3Py);

      actual = e31.cross(e2)

      expect(actual.w).toBe   1
      expect(actual.x).toBe   0
      expect(actual.y).toBe   0
      expect(actual.z).toBe   0
      expect(actual.xy).toBe  0
      expect(actual.yz).toBe  0
      expect(actual.zx).toBe  0
      expect(actual.xyz).toBe 0

  describe "scalar.cross(m)", ->
    it "should be scalar * m", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")

      ctor = Sk.ffi.gattr(module, 'Euclidean3')

      scalarPy = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(Math.random()),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      mPy = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(2),
        Sk.builtin.numberToPy(3),
        Sk.builtin.numberToPy(4),
        Sk.builtin.numberToPy(5),
        Sk.builtin.numberToPy(6),
        Sk.builtin.numberToPy(7),
        Sk.builtin.numberToPy(8))

      scalar = new Euclidean3(scalarPy);
      m      = new Euclidean3(mPy);

      actual = scalar.cross(m)

      expect(actual.w).toBe   scalar.w * m.w
      expect(actual.x).toBe   scalar.w * m.x
      expect(actual.y).toBe   scalar.w * m.y
      expect(actual.z).toBe   scalar.w * m.z
      expect(actual.xy).toBe  scalar.w * m.xy
      expect(actual.yz).toBe  scalar.w * m.yz
      expect(actual.zx).toBe  scalar.w * m.zx
      expect(actual.xyz).toBe scalar.w * m.xyz

  describe "m.cross(scalar)", ->
    it "should be m * scalar", ->
      module = Sk.importMainWithBody("<stdin>", false, "from e3ga import *\n")

      ctor = Sk.ffi.gattr(module, 'Euclidean3')

      scalarPy = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(Math.random()),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0),
        Sk.builtin.numberToPy(0))

      mPy = Sk.ffi.callsim(ctor,
        Sk.builtin.numberToPy(1),
        Sk.builtin.numberToPy(2),
        Sk.builtin.numberToPy(3),
        Sk.builtin.numberToPy(4),
        Sk.builtin.numberToPy(5),
        Sk.builtin.numberToPy(6),
        Sk.builtin.numberToPy(7),
        Sk.builtin.numberToPy(8))

      scalar = new Euclidean3(scalarPy);
      m      = new Euclidean3(mPy);

      actual = m.cross(scalar)

      expect(actual.w).toBe   scalar.w * m.w
      expect(actual.x).toBe   scalar.w * m.x
      expect(actual.y).toBe   scalar.w * m.y
      expect(actual.z).toBe   scalar.w * m.z
      expect(actual.xy).toBe  scalar.w * m.xy
      expect(actual.yz).toBe  scalar.w * m.yz
      expect(actual.zx).toBe  scalar.w * m.zx
      expect(actual.xyz).toBe scalar.w * m.xyz
