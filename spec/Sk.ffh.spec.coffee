describe "Sk.ffh", ->

  beforeEach () ->
    Sk.currLineNo = 12345

  describe "add", ->
    it "1+1", ->
      expect(Sk.ffi.typeName Sk.ffh.add Sk.ffi.numberToIntPy(1), Sk.ffi.numberToIntPy(1)).toBe 'int'
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.ffh.add Sk.ffi.numberToIntPy(1), Sk.ffi.numberToIntPy(1)).toBe '2'
    it "1.0+1.0", ->
      expect(Sk.ffi.typeName Sk.ffh.add Sk.ffi.numberToPy(1), Sk.ffi.numberToPy(1)).toBe 'float'
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.ffh.add Sk.ffi.numberToPy(1), Sk.ffi.numberToPy(1)).toBe '2.0'
    it "1L+1L", ->
      expect(Sk.ffi.typeName Sk.ffh.add Sk.ffi.longFromString('1'), Sk.ffi.longFromString('1')).toBe 'long'
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.ffh.add Sk.ffi.longFromString('1'), Sk.ffi.longFromString('1')).toBe '2'
    it "12345678901234567890123456789L+12345678901234567890123456789L", ->
      expect(Sk.ffi.typeName Sk.ffh.add Sk.ffi.longFromString('12345678901234567890123456789'), Sk.ffi.longFromString('12345678901234567890123456789')).toBe 'long'
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.ffh.add Sk.ffi.longFromString('12345678901234567890123456789'), Sk.ffi.longFromString('12345678901234567890123456789')).toBe '24691357802469135780246913578'

  describe "subtract", ->
    it "1 - 1", ->
      expect(Sk.ffi.typeName Sk.ffh.subtract Sk.ffi.numberToIntPy(1), Sk.ffi.numberToIntPy(1)).toBe 'int'
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.ffh.subtract Sk.ffi.numberToIntPy(1), Sk.ffi.numberToIntPy(1)).toBe '0'
    it "1.0 - 1.0", ->
      expect(Sk.ffi.typeName Sk.ffh.subtract Sk.ffi.numberToPy(1), Sk.ffi.numberToPy(1)).toBe 'float'
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.ffh.subtract Sk.ffi.numberToPy(1), Sk.ffi.numberToPy(1)).toBe '0.0'
    it "1L - 1L", ->
      expect(Sk.ffi.typeName Sk.ffh.subtract Sk.ffi.longFromString('1'), Sk.ffi.longFromString('1')).toBe 'long'
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.ffh.subtract Sk.ffi.longFromString('1'), Sk.ffi.longFromString('1')).toBe '0'
    it "12345678901234567890123456789L - 12345678901234567890123456789L", ->
      expect(Sk.ffi.typeName Sk.ffh.subtract Sk.ffi.longFromString('12345678901234567890123456789'), Sk.ffi.longFromString('12345678901234567890123456789')).toBe 'long'
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.ffh.subtract Sk.ffi.longFromString('12345678901234567890123456789'), Sk.ffi.longFromString('12345678901234567890123456789')).toBe '0'
  
  describe "multiply", ->
    it "1 * 1", ->
      expect(Sk.ffi.typeName Sk.ffh.multiply Sk.ffi.numberToIntPy(1), Sk.ffi.numberToIntPy(1)).toBe 'int'
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.ffh.multiply Sk.ffi.numberToIntPy(1), Sk.ffi.numberToIntPy(1)).toBe '1'
    it "1.0 * 1.0", ->
      expect(Sk.ffi.typeName Sk.ffh.multiply Sk.ffi.numberToPy(1), Sk.ffi.numberToPy(1)).toBe 'float'
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.ffh.multiply Sk.ffi.numberToPy(1), Sk.ffi.numberToPy(1)).toBe '1.0'
    it "1L * 1L", ->
      expect(Sk.ffi.typeName Sk.ffh.multiply Sk.ffi.longFromString('1'), Sk.ffi.longFromString('1')).toBe 'long'
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.ffh.multiply Sk.ffi.longFromString('1'), Sk.ffi.longFromString('1')).toBe '1'
    it "12345678901234567890123456789L * 12345678901234567890123456789L", ->
      expect(Sk.ffi.typeName Sk.ffh.multiply Sk.ffi.longFromString('12345678901234567890123456789'), Sk.ffi.longFromString('12345678901234567890123456789')).toBe 'long'
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.ffh.multiply Sk.ffi.longFromString('12345678901234567890123456789'), Sk.ffi.longFromString('12345678901234567890123456789')).toBe '152415787532388367504953515625361987875019051998750190521'

  describe "divide", ->
    it "1 / 1", ->
      expect(Sk.ffi.typeName Sk.ffh.divide Sk.ffi.numberToIntPy(1), Sk.ffi.numberToIntPy(1)).toBe 'int'
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.ffh.divide Sk.ffi.numberToIntPy(1), Sk.ffi.numberToIntPy(1)).toBe '1'
    it "1.0 / 1.0", ->
      expect(Sk.ffi.typeName Sk.ffh.divide Sk.ffi.numberToPy(1), Sk.ffi.numberToPy(1)).toBe 'float'
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.ffh.divide Sk.ffi.numberToPy(1), Sk.ffi.numberToPy(1)).toBe '1.0'
    it "1L / 1L", ->
      expect(Sk.ffi.typeName Sk.ffh.divide Sk.ffi.longFromString('1'), Sk.ffi.longFromString('1')).toBe 'long'
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.ffh.divide Sk.ffi.longFromString('1'), Sk.ffi.longFromString('1')).toBe '1'
    it "12345678901234567890123456789L / 12345678901234567890123456789L", ->
      expect(Sk.ffi.typeName Sk.ffh.divide Sk.ffi.longFromString('12345678901234567890123456789'), Sk.ffi.longFromString('12345678901234567890123456789')).toBe 'long'
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.ffh.divide Sk.ffi.longFromString('12345678901234567890123456789'), Sk.ffi.longFromString('12345678901234567890123456789')).toBe '1'

  describe "pow", ->
    it "1 ** 1", ->
      expect(Sk.ffi.typeName Sk.ffh.pow Sk.ffi.numberToIntPy(1), Sk.ffi.numberToIntPy(1)).toBe 'int'
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.ffh.pow Sk.ffi.numberToIntPy(1), Sk.ffi.numberToIntPy(1)).toBe '1'
    it "1.0 ** 1.0", ->
      expect(Sk.ffi.typeName Sk.ffh.pow Sk.ffi.numberToPy(1), Sk.ffi.numberToPy(1)).toBe 'float'
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.ffh.pow Sk.ffi.numberToPy(1), Sk.ffi.numberToPy(1)).toBe '1.0'
    it "1L ** 1L", ->
      expect(Sk.ffi.typeName Sk.ffh.pow Sk.ffi.longFromString('1'), Sk.ffi.longFromString('1')).toBe 'long'
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.ffh.pow Sk.ffi.longFromString('1'), Sk.ffi.longFromString('1')).toBe '1'

  describe "mod", ->
    it "1 % 1", ->
      expect(Sk.ffi.typeName Sk.ffh.mod Sk.ffi.numberToIntPy(1), Sk.ffi.numberToIntPy(1)).toBe 'int'
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.ffh.mod Sk.ffi.numberToIntPy(1), Sk.ffi.numberToIntPy(1)).toBe '0'
    it "1.0 % 1.0", ->
      expect(Sk.ffi.typeName Sk.ffh.mod Sk.ffi.numberToPy(1), Sk.ffi.numberToPy(1)).toBe 'float'
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.ffh.mod Sk.ffi.numberToPy(1), Sk.ffi.numberToPy(1)).toBe '0.0'
    it "1L % 1L", ->
      expect(Sk.ffi.typeName Sk.ffh.mod Sk.ffi.longFromString('1'), Sk.ffi.longFromString('1')).toBe 'long'
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.ffh.mod Sk.ffi.longFromString('1'), Sk.ffi.longFromString('1')).toBe '0'
    it "12345678901234567890123456789L % 12345678901234567890123456789L", ->
      expect(Sk.ffi.typeName Sk.ffh.mod Sk.ffi.longFromString('12345678901234567890123456789'), Sk.ffi.longFromString('12345678901234567890123456789')).toBe 'long'
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.ffh.mod Sk.ffi.longFromString('12345678901234567890123456789'), Sk.ffi.longFromString('12345678901234567890123456789')).toBe '0'

  describe "eq", ->
    it "1 = 1", ->
      expect(Sk.ffi.typeName Sk.ffh.eq Sk.ffi.numberToIntPy(1), Sk.ffi.numberToIntPy(1)).toBe 'bool'
      expect(Sk.ffi.remapToJs Sk.ffh.eq Sk.ffi.numberToIntPy(1), Sk.ffi.numberToIntPy(1)).toBe true
    it "1.0 = 1.0", ->
       expect(Sk.ffi.typeName Sk.ffh.eq Sk.ffi.numberToPy(1), Sk.ffi.numberToPy(1)).toBe 'bool'
       expect(Sk.ffi.remapToJs Sk.ffh.eq Sk.ffi.numberToPy(1), Sk.ffi.numberToPy(1)).toBe true
    it "1L = 1L", ->
       expect(Sk.ffi.typeName Sk.ffh.eq Sk.ffi.longFromString('1'), Sk.ffi.longFromString('1')).toBe 'bool'
       expect(Sk.ffi.remapToJs Sk.ffh.eq Sk.ffi.longFromString('1'), Sk.ffi.longFromString('1')).toBe true
    it "12345678901234567890123456789L = 12345678901234567890123456789L", ->
       expect(Sk.ffi.typeName Sk.ffh.eq Sk.ffi.longFromString('12345678901234567890123456789'), Sk.ffi.longFromString('12345678901234567890123456789')).toBe 'bool'
       expect(Sk.ffi.remapToJs Sk.ffh.eq Sk.ffi.longFromString('12345678901234567890123456789'), Sk.ffi.longFromString('12345678901234567890123456789')).toBe true

  describe "ne", ->
    it "1 = 1", ->
      expect(Sk.ffi.typeName Sk.ffh.ne Sk.ffi.numberToIntPy(1), Sk.ffi.numberToIntPy(1)).toBe 'bool'
      expect(Sk.ffi.remapToJs Sk.ffh.ne Sk.ffi.numberToIntPy(1), Sk.ffi.numberToIntPy(1)).toBe false
    it "1.0 = 1.0", ->
       expect(Sk.ffi.typeName Sk.ffh.ne Sk.ffi.numberToPy(1), Sk.ffi.numberToPy(1)).toBe 'bool'
       expect(Sk.ffi.remapToJs Sk.ffh.ne Sk.ffi.numberToPy(1), Sk.ffi.numberToPy(1)).toBe false
    it "1L = 1L", ->
       expect(Sk.ffi.typeName Sk.ffh.ne Sk.ffi.longFromString('1'), Sk.ffi.longFromString('1')).toBe 'bool'
       expect(Sk.ffi.remapToJs Sk.ffh.ne Sk.ffi.longFromString('1'), Sk.ffi.longFromString('1')).toBe false
    it "12345678901234567890123456789L = 12345678901234567890123456789L", ->
       expect(Sk.ffi.typeName Sk.ffh.ne Sk.ffi.longFromString('12345678901234567890123456789'), Sk.ffi.longFromString('12345678901234567890123456789')).toBe 'bool'
       expect(Sk.ffi.remapToJs Sk.ffh.ne Sk.ffi.longFromString('12345678901234567890123456789'), Sk.ffi.longFromString('12345678901234567890123456789')).toBe false

  describe "lt", ->
    it "1 < 1", ->
      expect(Sk.ffi.typeName Sk.ffh.lt Sk.ffi.numberToIntPy(1), Sk.ffi.numberToIntPy(1)).toBe 'bool'
      expect(Sk.ffi.remapToJs Sk.ffh.lt Sk.ffi.numberToIntPy(1), Sk.ffi.numberToIntPy(1)).toBe false
    it "1.0 < 1.0", ->
       expect(Sk.ffi.typeName Sk.ffh.lt Sk.ffi.numberToPy(1), Sk.ffi.numberToPy(1)).toBe 'bool'
       expect(Sk.ffi.remapToJs Sk.ffh.lt Sk.ffi.numberToPy(1), Sk.ffi.numberToPy(1)).toBe false
    it "1L < 1L", ->
       expect(Sk.ffi.typeName Sk.ffh.lt Sk.ffi.longFromString('1'), Sk.ffi.longFromString('1')).toBe 'bool'
       expect(Sk.ffi.remapToJs Sk.ffh.lt Sk.ffi.longFromString('1'), Sk.ffi.longFromString('1')).toBe false
    it "12345678901234567890123456789L < 12345678901234567890123456789L", ->
       expect(Sk.ffi.typeName Sk.ffh.lt Sk.ffi.longFromString('12345678901234567890123456789'), Sk.ffi.longFromString('12345678901234567890123456789')).toBe 'bool'
       expect(Sk.ffi.remapToJs Sk.ffh.lt Sk.ffi.longFromString('12345678901234567890123456789'), Sk.ffi.longFromString('12345678901234567890123456789')).toBe false

  describe "le", ->
    it "1 = 1", ->
      expect(Sk.ffi.typeName Sk.ffh.le Sk.ffi.numberToIntPy(1), Sk.ffi.numberToIntPy(1)).toBe 'bool'
      expect(Sk.ffi.remapToJs Sk.ffh.le Sk.ffi.numberToIntPy(1), Sk.ffi.numberToIntPy(1)).toBe true
    it "1.0 = 1.0", ->
       expect(Sk.ffi.typeName Sk.ffh.le Sk.ffi.numberToPy(1), Sk.ffi.numberToPy(1)).toBe 'bool'
       expect(Sk.ffi.remapToJs Sk.ffh.le Sk.ffi.numberToPy(1), Sk.ffi.numberToPy(1)).toBe true
    it "1L = 1L", ->
       expect(Sk.ffi.typeName Sk.ffh.le Sk.ffi.longFromString('1'), Sk.ffi.longFromString('1')).toBe 'bool'
       expect(Sk.ffi.remapToJs Sk.ffh.le Sk.ffi.longFromString('1'), Sk.ffi.longFromString('1')).toBe true
    it "12345678901234567890123456789L = 12345678901234567890123456789L", ->
       expect(Sk.ffi.typeName Sk.ffh.le Sk.ffi.longFromString('12345678901234567890123456789'), Sk.ffi.longFromString('12345678901234567890123456789')).toBe 'bool'
       expect(Sk.ffi.remapToJs Sk.ffh.le Sk.ffi.longFromString('12345678901234567890123456789'), Sk.ffi.longFromString('12345678901234567890123456789')).toBe true

  describe "gt", ->
    it "1 < 1", ->
      expect(Sk.ffi.typeName Sk.ffh.gt Sk.ffi.numberToIntPy(1), Sk.ffi.numberToIntPy(1)).toBe 'bool'
      expect(Sk.ffi.remapToJs Sk.ffh.gt Sk.ffi.numberToIntPy(1), Sk.ffi.numberToIntPy(1)).toBe false
    it "1.0 < 1.0", ->
       expect(Sk.ffi.typeName Sk.ffh.gt Sk.ffi.numberToPy(1), Sk.ffi.numberToPy(1)).toBe 'bool'
       expect(Sk.ffi.remapToJs Sk.ffh.gt Sk.ffi.numberToPy(1), Sk.ffi.numberToPy(1)).toBe false
    it "1L < 1L", ->
       expect(Sk.ffi.typeName Sk.ffh.gt Sk.ffi.longFromString('1'), Sk.ffi.longFromString('1')).toBe 'bool'
       expect(Sk.ffi.remapToJs Sk.ffh.gt Sk.ffi.longFromString('1'), Sk.ffi.longFromString('1')).toBe false
    it "12345678901234567890123456789L < 12345678901234567890123456789L", ->
       expect(Sk.ffi.typeName Sk.ffh.gt Sk.ffi.longFromString('12345678901234567890123456789'), Sk.ffi.longFromString('12345678901234567890123456789')).toBe 'bool'
       expect(Sk.ffi.remapToJs Sk.ffh.gt Sk.ffi.longFromString('12345678901234567890123456789'), Sk.ffi.longFromString('12345678901234567890123456789')).toBe false

  describe "ge", ->
    it "1 = 1", ->
      expect(Sk.ffi.typeName Sk.ffh.ge Sk.ffi.numberToIntPy(1), Sk.ffi.numberToIntPy(1)).toBe 'bool'
      expect(Sk.ffi.remapToJs Sk.ffh.ge Sk.ffi.numberToIntPy(1), Sk.ffi.numberToIntPy(1)).toBe true
    it "1.0 = 1.0", ->
       expect(Sk.ffi.typeName Sk.ffh.ge Sk.ffi.numberToPy(1), Sk.ffi.numberToPy(1)).toBe 'bool'
       expect(Sk.ffi.remapToJs Sk.ffh.ge Sk.ffi.numberToPy(1), Sk.ffi.numberToPy(1)).toBe true
    it "1L = 1L", ->
       expect(Sk.ffi.typeName Sk.ffh.ge Sk.ffi.longFromString('1'), Sk.ffi.longFromString('1')).toBe 'bool'
       expect(Sk.ffi.remapToJs Sk.ffh.ge Sk.ffi.longFromString('1'), Sk.ffi.longFromString('1')).toBe true
    it "12345678901234567890123456789L = 12345678901234567890123456789L", ->
       expect(Sk.ffi.typeName Sk.ffh.ge Sk.ffi.longFromString('12345678901234567890123456789'), Sk.ffi.longFromString('12345678901234567890123456789')).toBe 'bool'
       expect(Sk.ffi.remapToJs Sk.ffh.ge Sk.ffi.longFromString('12345678901234567890123456789'), Sk.ffi.longFromString('12345678901234567890123456789')).toBe true

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
