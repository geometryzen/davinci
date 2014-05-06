/**
 * This proxy is provided to simplify testing.
 */
Euclidean3 = function(mvPy){
  this.mv = mvPy;
};
Euclidean3.prototype = {
  constructor: Euclidean3,
  get w () {return Sk.ffi.numberToJs(Sk.ffi.gattr(this.mv, 'w'))},
  set w (value) {return Sk.ffi.remapToJs(Sk.ffi.sattr(this.mv, 'w', Sk.builtin.numberToPy(value)));},
  get x () {return Sk.ffi.numberToJs(Sk.ffi.gattr(this.mv, 'x'))},
  set x (value) {return Sk.ffi.remapToJs(Sk.ffi.sattr(this.mv, 'x', Sk.builtin.numberToPy(value)));},
  get y () {return Sk.ffi.numberToJs(Sk.ffi.gattr(this.mv, 'y'))},
  set y (value) {return Sk.ffi.remapToJs(Sk.ffi.sattr(this.mv, 'y', Sk.builtin.numberToPy(value)));},
  get z () {return Sk.ffi.numberToJs(Sk.ffi.gattr(this.mv, 'z'))},
  set z (value) {return Sk.ffi.remapToJs(Sk.ffi.sattr(this.mv, 'z', Sk.builtin.numberToPy(value)));},
  get xy () {return Sk.ffi.numberToJs(Sk.ffi.gattr(this.mv, 'xy'))},
  set xy (value) {return Sk.ffi.remapToJs(Sk.ffi.sattr(this.mv, 'xy', Sk.builtin.numberToPy(value)));},
  get yz () {return Sk.ffi.numberToJs(Sk.ffi.gattr(this.mv, 'yz'))},
  set yz (value) {return Sk.ffi.remapToJs(Sk.ffi.sattr(this.mv, 'yz', Sk.builtin.numberToPy(value)));},
  get zx () {return Sk.ffi.numberToJs(Sk.ffi.gattr(this.mv, 'zx'))},
  set zx (value) {return Sk.ffi.remapToJs(Sk.ffi.sattr(this.mv, 'zx', Sk.builtin.numberToPy(value)));},
  get xyz () {return Sk.ffi.numberToJs(Sk.ffi.gattr(this.mv, 'xyz'))},
  set xyz (value) {return Sk.ffi.remapToJs(Sk.ffi.sattr(this.mv, 'xyz', Sk.builtin.numberToPy(value)));},
  cross: function(otherJs)
  {
    var crossMethodPy = Sk.ffi.gattr(this.mv, 'cross');
    return new Euclidean3(Sk.misceval.callsim(crossMethodPy, otherJs.mv));
  }
};
