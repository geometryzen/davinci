/**
 * Convenience function for incorporating visual components into a module.
 *
 * Usage:
 *
 * Sk.builtin.defineVisual(mod);
 */
(function() {
  Sk.builtin.defineVisual = function(mod, THREE) {
    Sk.ffi.checkFunctionArgs("defineVisual", arguments, 2, 2);
  };
}).call(this);
