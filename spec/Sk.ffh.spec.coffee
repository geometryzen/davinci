describe "Sk.ffh", ->

  beforeEach () ->
    Sk.currLineNo = 12345

  describe "add", ->
    it "(1, 1) should be 2", ->
      expect(Sk.ffi.remapToJs Sk.ffh.add Sk.ffi.numberToFloatPy(1), Sk.ffi.numberToFloatPy(1)).toBe 2

  describe "sub", ->
    it "(2, 1) should be 1", ->
      expect(Sk.ffi.remapToJs Sk.ffh.subtract Sk.ffi.numberToFloatPy(2), Sk.ffi.numberToFloatPy(1)).toBe 1

#  describe "equal", ->
#    it "(1, 1) should be true", ->
#      expect(Sk.ffi.remapToJs Sk.ffh.equal Sk.ffi.numberToFloatPy(1), Sk.ffi.numberToFloatPy(1)).toBe true
