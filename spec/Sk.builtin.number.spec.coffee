describe "Sk.builtin.number", ->

  beforeEach () ->
    Sk.currLineNo = 12345

  describe "constructed from Math.PI", -> 
    it "should return the original number", -> expect(Sk.ffi.remapToJs(Sk.builtin.numberPy(Math.PI))).toBe Math.PI
    it "should return the float type", -> expect(Sk.ffi.getType(Sk.builtin.numberPy(Math.PI))).toBe Sk.ffi.PyType.FLOAT

  describe "constructed from 1.0", -> 
    it "should return the original number", -> expect(Sk.ffi.remapToJs(Sk.builtin.numberPy(1.0))).toBe 1.0
    it "should return the int type", -> expect(Sk.ffi.getType(Sk.builtin.numberPy(1.0))).toBe Sk.ffi.PyType.INT

  describe "constructed from 1.0 and float", -> 
    it "should return the original number", -> expect(Sk.ffi.remapToJs(Sk.builtin.numberPy(1.0, Sk.builtin.NumberPy.float$))).toBe 1.0
    it "should return the int type", -> expect(Sk.ffi.getType(Sk.builtin.numberPy(1.0))).toBe Sk.ffi.PyType.INT

  describe "str", -> 
    it "should have no decimals for an integer", ->
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.builtin.numberPy 23).toBe "23"
    it "should have decimals for an float", ->
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.builtin.numberPy Math.PI).toBe "3.14159265359"

  describe "repr", -> 
    it "should have no decimals for an integer", ->
      expect(Sk.ffi.remapToJs Sk.ffh.repr Sk.builtin.numberPy 23).toBe "23"
    it "should have decimals for an float", ->
      expect(Sk.ffi.remapToJs Sk.ffh.repr Sk.builtin.numberPy Math.PI).toBe "3.14159265359"
