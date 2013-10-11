describe "Sk.ffh", ->

  beforeEach () ->
    Sk.currLineNo = 12345

  describe "add", -> it "(3, 2) should be 5", -> expect(Sk.ffi.remapToJs Sk.ffh.add Sk.ffi.numberToFloatPy(3), Sk.ffi.numberToFloatPy(2)).toBe 5
  describe "subtract", -> it "(3, 2) should be 1", -> expect(Sk.ffi.remapToJs Sk.ffh.subtract Sk.ffi.numberToFloatPy(3), Sk.ffi.numberToFloatPy(2)).toBe 1
  describe "multiply", -> it "(3, 2) should be 6", -> expect(Sk.ffi.remapToJs Sk.ffh.multiply Sk.ffi.numberToFloatPy(3), Sk.ffi.numberToFloatPy(2)).toBe 6
  describe "divide", -> it "(6, 2) should be 3", -> expect(Sk.ffi.remapToJs Sk.ffh.divide Sk.ffi.numberToFloatPy(6), Sk.ffi.numberToFloatPy(2)).toBe 3
  
  describe "xor", -> 
    it "(0, 0) should be 0", -> expect(Sk.ffi.remapToJs Sk.ffh.xor Sk.ffi.numberToFloatPy(0), Sk.ffi.numberToFloatPy(0)).toBe 0
    it "(0, 1) should be 1", -> expect(Sk.ffi.remapToJs Sk.ffh.xor Sk.ffi.numberToFloatPy(0), Sk.ffi.numberToFloatPy(1)).toBe 1
    it "(1, 0) should be 1", -> expect(Sk.ffi.remapToJs Sk.ffh.xor Sk.ffi.numberToFloatPy(1), Sk.ffi.numberToFloatPy(0)).toBe 1
    it "(1, 1) should be 0", -> expect(Sk.ffi.remapToJs Sk.ffh.xor Sk.ffi.numberToFloatPy(1), Sk.ffi.numberToFloatPy(1)).toBe 0

  describe "lshift", -> 
    it "(2, 0) should be 2", -> expect(Sk.ffi.remapToJs Sk.ffh.lshift Sk.ffi.numberToFloatPy(2), Sk.ffi.numberToFloatPy(0)).toBe 2
    it "(2, 1) should be 4", -> expect(Sk.ffi.remapToJs Sk.ffh.lshift Sk.ffi.numberToFloatPy(2), Sk.ffi.numberToFloatPy(1)).toBe 4
    it "(1, 0) should be 1", -> expect(Sk.ffi.remapToJs Sk.ffh.lshift Sk.ffi.numberToFloatPy(1), Sk.ffi.numberToFloatPy(0)).toBe 1
    it "(1, 1) should be 2", -> expect(Sk.ffi.remapToJs Sk.ffh.lshift Sk.ffi.numberToFloatPy(1), Sk.ffi.numberToFloatPy(1)).toBe 2

  describe "rshift", -> 
    it "(2, 0) should be 2", -> expect(Sk.ffi.remapToJs Sk.ffh.rshift Sk.ffi.numberToFloatPy(2), Sk.ffi.numberToFloatPy(0)).toBe 2
    it "(2, 1) should be 1", -> expect(Sk.ffi.remapToJs Sk.ffh.rshift Sk.ffi.numberToFloatPy(2), Sk.ffi.numberToFloatPy(1)).toBe 1
    it "(1, 0) should be 1", -> expect(Sk.ffi.remapToJs Sk.ffh.rshift Sk.ffi.numberToFloatPy(1), Sk.ffi.numberToFloatPy(0)).toBe 1
    it "(1, 1) should be 0", -> expect(Sk.ffi.remapToJs Sk.ffh.rshift Sk.ffi.numberToFloatPy(1), Sk.ffi.numberToFloatPy(1)).toBe 0

  describe "positive", -> it "(2) should be +2", -> expect(Sk.ffi.remapToJs Sk.ffh.positive Sk.ffi.numberToFloatPy(2)).toBe +2
  describe "negative", -> it "(2) should be -2", -> expect(Sk.ffi.remapToJs Sk.ffh.negative Sk.ffi.numberToFloatPy(2)).toBe -2

  describe "nonzero", -> 
    it "(1) should be true", -> expect(Sk.ffi.remapToJs Sk.ffh.nonzero Sk.ffi.numberToFloatPy(1)).toBe true
    it "(0) should be false", -> expect(Sk.ffi.remapToJs Sk.ffh.nonzero Sk.ffi.numberToFloatPy(0)).toBe false

# describe "invert", -> it "(2) should be -2", -> expect(Sk.ffi.remapToJs Sk.ffh.invert Sk.ffi.numberToFloatPy(2)).toBe -2
  describe "repr", -> it "(2) should be '2.0'", -> expect(Sk.ffi.remapToJs Sk.ffh.repr Sk.ffi.numberToFloatPy(2)).toBe '2.0'
  describe "str", -> it "(2) should be '2.0'", -> expect(Sk.ffi.remapToJs Sk.ffh.str Sk.ffi.numberToFloatPy(2)).toBe '2.0'

#  describe "equal", ->
#    it "(1, 1) should be true", ->
#      expect(Sk.ffi.remapToJs Sk.ffh.equal Sk.ffi.numberToFloatPy(1), Sk.ffi.numberToFloatPy(1)).toBe true
