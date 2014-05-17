describe "units", ->

  expectCorrectUnitType = (name) ->
    code = 
    "from units import *" + "\n"
    module = Sk.importMainWithBody("<stdin>", false, code)

    unitPy = Sk.ffi.gattr(module, name)

    expect(Sk.ffi.getType(unitPy)).toBe Sk.ffi.PyType.INSTANCE
    expect(Sk.ffi.typeName unitPy).toBe Sk.ffi.typeName Sk.ffi.gattr(module, 'dimensionless')

  expectUnitString = (name, value) ->
    code = "from units import *"
    debugger;
    module = Sk.importMainWithBody("<stdin>", false, code)
    unitPy = Sk.ffi.gattr(module, name)
    expect(Sk.ffi.remapToJs Sk.ffh.str unitPy).toBe value

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

  describe "dimensionless", ->
    it "should have the correct type", -> expectCorrectUnitType('dimensionless')
    it "should have no symbol", -> expectUnitString('dimensionless','1.0')

  describe "kilogram", ->
    it "should have the correct type", -> expectCorrectUnitType('kilogram')
    it "should have the symbol kg", -> expectUnitString('kilogram','1.0 kg')

  describe "meter", ->
    it "should have the correct type", -> expectCorrectUnitType('meter')
    it "should have symbol m", -> expectUnitString('meter','1.0 m')

  describe "second", ->
    it "should have the correct type", -> expectCorrectUnitType('second')
    it "should have the symbol s", -> expectUnitString('second','1.0 s')

  describe "ampere", ->
    it "should have the correct type", -> expectCorrectUnitType('ampere')
    it "should have the symbol A", -> expectUnitString('ampere','1.0 A')

  describe "kelvin", ->
    it "should have the correct type", -> expectCorrectUnitType('kelvin')
    it "should have the symbol K", -> expectUnitString('kelvin','1.0 K')

  describe "mole", ->
    it "should have the correct type", -> expectCorrectUnitType('mole')
    it "should have symbol mol", -> expectUnitString('mole','1.0 mol')

  describe "candela", ->
    it "should have the correct type", -> expectCorrectUnitType('candela')
    it "should have the symbol cd", -> expectUnitString('candela','1.0 cd')

  describe "coulomb", ->
    it "should have the correct type", -> expectCorrectUnitType('coulomb')
    it "should have the symbol C", -> expectUnitString('coulomb','1.0 C')

  describe "gram", ->
    it "should have the correct type", -> expectCorrectUnitType('gram')
    it "should have the symbol 0.001 kg", -> expectUnitString('gram','0.001 kg')

  describe "cm", ->
    it "should have the correct type", -> expectCorrectUnitType('cm')
    it "should have the symbol 0.01 m", -> expectUnitString('cm','0.01 m')

  describe "newton", ->
    it "should have the correct type", -> expectCorrectUnitType('newton')
    it "should have the symbol N", -> expectUnitString('newton','1.0 N')

  describe "joule", ->
    it "should have the correct type", -> expectCorrectUnitType('joule')
    it "should have the symbol J", -> expectUnitString('joule','1.0 J')

  describe "watt", ->
    it "should have the correct type", -> expectCorrectUnitType('watt')
    it "should have the symbol W", -> expectUnitString('watt','1.0 W')

  describe "volt", ->
    it "should have the correct type", -> expectCorrectUnitType('volt')
    it "should have the symbol V", -> expectUnitString('volt','1.0 V')

  describe "tesla", ->
    it "should have the correct type", -> expectCorrectUnitType('tesla')
    it "should have the symbol T", -> expectUnitString('tesla','1.0 T')

  xdescribe "radian", ->
    it "should have the correct type", -> expectCorrectUnitType('radian')
    it "should have the symbol rad", -> expectUnitString('radian','1.0 rad')

  xdescribe "tau", ->
    it "should have the correct type", -> expectCorrectUnitType('tau')
    it "should have the symbol rad", -> expectUnitString('tau','6.28318530718 rad')

  xdescribe "degree", ->
    it "should have the correct type", -> expectCorrectUnitType('degree')
    it "should have the symbol rad", -> expectUnitString('degree','0.0174532925199 rad')

  describe "unit * unit", ->
    it "should be a unit", ->

      code = 
      "from units import *" + "\n"
      module = Sk.importMainWithBody("<stdin>", false, code)

      lhsPy  = Sk.ffi.gattr(module, 'kilogram')
      rhsPy  = Sk.ffi.gattr(module, 'meter')
      unitPy = Sk.ffh.mul(lhsPy, rhsPy)

      expect(Sk.ffi.typeName(unitPy)).toBe Sk.ffi.typeName lhsPy
      expect(Sk.ffi.remapToJs Sk.ffh.str unitPy).toBe '1.0 kg m'

  xdescribe "cos(tau)", ->
    it "should be 1.0", ->

      code = 
      "from units import *" + "\n" +
      "from math import *" + "\n" +
      "x = cos(tau)" + "\n"
      module = Sk.importMainWithBody("<stdin>", false, code)

      xPy  = Sk.ffi.gattr(module, 'x')

      expect(Sk.ffi.typeName(xPy)).toBe Sk.ffi.typeName xPy
      expect(Sk.ffi.remapToJs Sk.ffh.str xPy).toBe '1.0'

  xdescribe "sin(tau/4)", ->
    it "should be 1.0", ->

      code = 
      "from units import *" + "\n" +
      "from math import *" + "\n" +
      "x = sin(tau/4)" + "\n"
      module = Sk.importMainWithBody("<stdin>", false, code)

      xPy  = Sk.ffi.gattr(module, 'x')

      expect(Sk.ffi.typeName(xPy)).toBe Sk.ffi.typeName xPy
      expect(Sk.ffi.remapToJs Sk.ffh.str xPy).toBe '1.0'

  xdescribe "tan(tau/8)", ->
    it "should be 1.0", ->

      code = 
      "from units import *" + "\n" +
      "from math import *" + "\n" +
      "x = tan(tau/8)" + "\n"
      module = Sk.importMainWithBody("<stdin>", false, code)

      xPy  = Sk.ffi.gattr(module, 'x')

      expect(Sk.ffi.typeName(xPy)).toBe Sk.ffi.typeName xPy
      expect(Sk.ffi.remapToJs Sk.ffh.str xPy).toBe '1.0'
