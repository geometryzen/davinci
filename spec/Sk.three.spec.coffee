describe "Sk.three", ->

  beforeEach () ->
    Sk.currLineNo = 12345

  describe "cardinal", -> 
    it "(+1, +0, +0).x should be +1", -> expect(Sk.three.cardinal(+1, +0, +0).x).toBe +1
    it "(+1, +0, +0).y should be  0", -> expect(Sk.three.cardinal(+1, +0, +0).y).toBe  0
    it "(+1, +0, +0).z should be  0", -> expect(Sk.three.cardinal(+1, +0, +0).z).toBe  0

    it "(+0, +1, +0).x should be  0", -> expect(Sk.three.cardinal(+0, +1, +0).x).toBe  0
    it "(+0, +1, +0).y should be +1", -> expect(Sk.three.cardinal(+0, +1, +0).y).toBe +1
    it "(+0, +1, +0).z should be  0", -> expect(Sk.three.cardinal(+0, +1, +0).z).toBe  0

    it "(+0, +0, +1).x should be  0", -> expect(Sk.three.cardinal(+0, +0, +1).x).toBe  0
    it "(+0, +0, +1).y should be  0", -> expect(Sk.three.cardinal(+0, +0, +1).y).toBe  0
    it "(+0, +0, +1).z should be +1", -> expect(Sk.three.cardinal(+0, +0, +1).z).toBe +1

    it "(-1, +0, +0).x should be -1", -> expect(Sk.three.cardinal(-1, +0, +0).x).toBe -1
    it "(-1, +0, +0).y should be  0", -> expect(Sk.three.cardinal(-1, +0, +0).y).toBe  0
    it "(-1, +0, +0).z should be  0", -> expect(Sk.three.cardinal(-1, +0, +0).z).toBe  0

    it "(+0, -1, +0).x should be  0", -> expect(Sk.three.cardinal(+0, -1, +0).x).toBe  0
    it "(+0, -1, +0).y should be -1", -> expect(Sk.three.cardinal(+0, -1, +0).y).toBe -1
    it "(+0, -1, +0).z should be  0", -> expect(Sk.three.cardinal(+0, -1, +0).z).toBe  0

    it "(+0, +0, -1).x should be  0", -> expect(Sk.three.cardinal(+0, +0, -1).x).toBe  0
    it "(+0, +0, -1).y should be  0", -> expect(Sk.three.cardinal(+0, +0, -1).y).toBe  0
    it "(+0, +0, -1).z should be -1", -> expect(Sk.three.cardinal(+0, +0, -1).z).toBe -1

    it "(+1, +2, +3).x should be  0", -> expect(Sk.three.cardinal(+1, +2, +3).x).toBe  0
    it "(+1, +2, +3).y should be  0", -> expect(Sk.three.cardinal(+1, +2, +3).y).toBe  0
    it "(+1, +2, +3).z should be  1", -> expect(Sk.three.cardinal(+1, +2, +3).z).toBe  1

    it "(+1, +3, +2).x should be  0", -> expect(Sk.three.cardinal(+1, +3, +2).x).toBe  0
    it "(+1, +3, +2).y should be  1", -> expect(Sk.three.cardinal(+1, +3, +2).y).toBe  1
    it "(+1, +3, +2).z should be  0", -> expect(Sk.three.cardinal(+1, +3, +2).z).toBe  0

    it "(+3, +1, +2).x should be  1", -> expect(Sk.three.cardinal(+3, +1, +2).x).toBe  1
    it "(+3, +1, +2).y should be  0", -> expect(Sk.three.cardinal(+3, +1, +2).y).toBe  0
    it "(+3, +1, +2).z should be  0", -> expect(Sk.three.cardinal(+3, +1, +2).z).toBe  0

    it "(+3, +2, +1).x should be  1", -> expect(Sk.three.cardinal(+3, +2, +1).x).toBe  1
    it "(+3, +2, +1).y should be  0", -> expect(Sk.three.cardinal(+3, +2, +1).y).toBe  0
    it "(+3, +2, +1).z should be  0", -> expect(Sk.three.cardinal(+3, +2, +1).z).toBe  0

    it "(+2, +3, +1).x should be  0", -> expect(Sk.three.cardinal(+2, +3, +1).x).toBe  0
    it "(+2, +3, +1).y should be  1", -> expect(Sk.three.cardinal(+2, +3, +1).y).toBe  1
    it "(+2, +3, +1).z should be  0", -> expect(Sk.three.cardinal(+2, +3, +1).z).toBe  0

    it "(+2, +1, +3).x should be  0", -> expect(Sk.three.cardinal(+2, +1, +3).x).toBe  0
    it "(+2, +1, +3).y should be  0", -> expect(Sk.three.cardinal(+2, +1, +3).y).toBe  0
    it "(+2, +1, +3).z should be  1", -> expect(Sk.three.cardinal(+2, +1, +3).z).toBe  1
