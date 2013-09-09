describe("Sk", function() {
  xdescribe("mangleName", function() {
    it("x => x", function() {
      expect(Sk.mangleName("x")).toBe("x");
    });
    it("apply is mangled", function() {
      expect(Sk.mangleName("apply")).toBe("apply_$rn$");
    });
    it("call is mangled", function() {
      expect(Sk.mangleName("call")).toBe("call_$rn$");
    });
    it("eval is mangled", function() {
      expect(Sk.mangleName("eval")).toBe("eval_$rn$");
    });
    it("hasOwnProperty is mangled", function() {
      expect(Sk.mangleName("hasOwnProperty")).toBe("hasOwnProperty_$rn$");
    });
    it("length is mangled", function() {
      expect(Sk.mangleName("length")).toBe("length_$rn$");
    });
    it("toString is mangled", function() {
      expect(Sk.mangleName("toString")).toBe("toString_$rn$");
    });
    it("valueOf is mangled", function() {
      expect(Sk.mangleName("valueOf")).toBe("valueOf_$rn$");
    });
  });
});