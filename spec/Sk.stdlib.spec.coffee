describe "Sk.stdlib", ->

  beforeEach () ->
    Sk.currLineNo = 12345

  describe "direction", -> 
    it "(+1,  0,  0) should be 0", -> expect(Sk.stdlib.direction +1, +0, +0).toBe 0
    it "(-1,  0,  0) should be 0", -> expect(Sk.stdlib.direction -1, +0, +0).toBe 0
    it "( 0, +1,  0) should be 1", -> expect(Sk.stdlib.direction +0, +1, +0).toBe 1
    it "( 0, -1,  0) should be 1", -> expect(Sk.stdlib.direction +0, -1, +0).toBe 1
    it "( 0,  0, +1) should be 2", -> expect(Sk.stdlib.direction +0, +0, +1).toBe 2
    it "( 0,  0, -1) should be 2", -> expect(Sk.stdlib.direction +0, +0, -1).toBe 2

  describe "orientation", -> 
    it "(+1,  0,  0) should be +1", -> expect(Sk.stdlib.orientation +1, +0, +0).toBe +1
    it "(-1,  0,  0) should be -1", -> expect(Sk.stdlib.orientation -1, +0, +0).toBe -1
    it "( 0, +1,  0) should be +1", -> expect(Sk.stdlib.orientation  0, +1, +0).toBe +1
    it "( 0, -1,  0) should be -1", -> expect(Sk.stdlib.orientation  0, -1, +0).toBe -1
    it "( 0,  0, +1) should be +1", -> expect(Sk.stdlib.orientation  0, +0, +1).toBe +1
    it "( 0,  0, -1) should be -1", -> expect(Sk.stdlib.orientation  0, +0, -1).toBe -1
