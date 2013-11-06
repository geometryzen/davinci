describe "Sk.builtin", ->

  beforeEach () ->
    Sk.currLineNo = 12345

  describe "bool", -> 
    it "(true).v should be true", -> expect(Sk.builtin.bool(true).v).toBe true
    it "(false).v should be false", -> expect(Sk.builtin.bool(false).v).toBe false

  describe "tp$str", -> 
    it "Sk.ffi.remapToJs Sk.ffh.str Sk.builtin.bool true should be True", ->
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.builtin.bool true).toBe "True"
    it "Sk.ffi.remapToJs Sk.ffh.str Sk.builtin.bool false should be False", ->
      expect(Sk.ffi.remapToJs Sk.ffh.str Sk.builtin.bool false).toBe "False"

  describe "tp$repr", -> 
    it "Sk.ffi.remapToJs Sk.ffh.repr Sk.builtin.bool true should be True", ->
      expect(Sk.ffi.remapToJs Sk.ffh.repr Sk.builtin.bool true).toBe "True"
    it "Sk.ffi.remapToJs Sk.ffh.repr Sk.builtin.bool false should be False", ->
      expect(Sk.ffi.remapToJs Sk.ffh.repr Sk.builtin.bool false).toBe "False"
