Sk.stdlib = Sk.stdlib || {};
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} z
 */
Sk.stdlib.direction = function(x, y, z) {
  if (x) {
    return 0;
  }
  else if (y) {
    return 1;
  }
  else {
    return 2;
  }
};
goog.exportSymbol("Sk.stdlib.direction", Sk.stdlib.direction);
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} z
 */
Sk.stdlib.orientation = function(x, y, z) {
  if (x > 0) {
    return +1;
  }
  else if (x < 0) {
    return -1;
  }
  else if (y > 0) {
    return +1;
  }
  else if (y < 0) {
    return -1;
  }
  else if (z > 0) {
    return +1;
  }
  else if (z < 0) {
    return -1;
  }
  else {
    return 2;
  }
};
goog.exportSymbol("Sk.stdlib.orientation", Sk.stdlib.orientation);
