/**
 * e3ga is a foreign function interface over Three.js for the DaVinci Python to JavaScript cross-compiler.
 *
 * The e3ga module is in most respects API-compatible with the Three.js library except that THREE.Vector3 has
 * been extended in the ffi to Euclidean3.
 *
 * David Holmes (david.geo.holmes@gmail.com)
 */
var $builtinmodule = function(name) {
  
  var EUCLIDEAN_3           = "Euclidean3";
  var SCALAR_3              = "Scalar3";
  var VECTOR_3              = "Vector3";
  var BIVECTOR_3            = "Bivector3";
  var PSEUDOSCALAR_3        = "Pseudoscalar3";

  var QUATERNION            = "Quaternion";

  var SCENE                 = "Scene";
  var CANVAS_RENDERER       = "CanvasRenderer";
  var WEBGL_RENDERER        = "WebGLRenderer";
  var COLOR                 = "Color";
  var ORTHOGRAPHIC_CAMERA   = "OrthographicCamera";
  var PERSPECTIVE_CAMERA    = "PerspectiveCamera";

  var GEOMETRY              = "Geometry";
  var OBJECT_3D             = "Object3D";

  var AMBIENT_LIGHT         = "AmbientLight";
  var DIRECTIONAL_LIGHT     = "DirectionalLight";
  var POINT_LIGHT           = "PointLight";

  var LINE                  = "Line";
  var LINE_BASIC_MATERIAL   = "LineBasicMaterial";

  var MESH                  = "Mesh";
  var MESH_BASIC_MATERIAL   = "MeshBasicMaterial";
  var MESH_LAMBERT_MATERIAL = "MeshLambertMaterial";
  var MESH_NORMAL_MATERIAL  = "MeshNormalMaterial";
  var MESH_PHONG_MATERIAL   = "MeshPhongMaterial";

  var ARROW_GEOMETRY        = "ArrowGeometry";
  var CIRCLE_GEOMETRY       = "CircleGeometry";
  var CUBE_GEOMETRY         = "CubeGeometry";
  var CYLINDER_GEOMETRY     = "CylinderGeometry";
  var ICOSAHEDRON_GEOMETRY  = "IcosahedronGeometry";
  var LATHE_GEOMETRY        = "LatheGeometry";
  var OCTAHEDRON_GEOMETRY   = "OctahedronGeometry";
  var PLANE_GEOMETRY        = "PlaneGeometry";
  var SPHERE_GEOMETRY       = "SphereGeometry";
  var TEXT_GEOMETRY         = "TextGeometry";
  var TETRAHEDRON_GEOMETRY  = "TetrahedronGeometry";
  var TORUS_GEOMETRY        = "TorusGeometry";

  var PROP_BOTTOM              = "bottom";
  var PROP_COLOR               = "color";
  var PROP_DETAIL              = "detail";
  var PROP_EULER_ORDER         = "eulerOrder";
  var PROP_FAR                 = "far";
  var PROP_GEOMETRY            = "geometry";
  var PROP_ID                  = "id";
  var PROP_LEFT                = "left";
  var PROP_MASS                = "mass";
  var PROP_MATERIAL            = "material";
  var PROP_MATRIX_AUTO_UPDATE  = "matrixAutoUpdate";
  var PROP_NAME                = "name";
  var PROP_NEAR                = "near";
  var PROP_NEEDS_UPDATE        = "needsUpdate";
  var PROP_OPACITY             = "opacity";
  var PROP_OVERDRAW            = "overdraw";
  var PROP_POSITION            = "position";
  var PROP_QUATERNION          = "quaternion";
  var PROP_RADIUS              = "radius";
  var PROP_RIGHT               = "right";
  var PROP_ROTATION            = "rotation";
  var PROP_SCALE               = "scale";
  var PROP_SEGMENTS            = "segments";
  var PROP_THETA_START         = "thetaStart";
  var PROP_THETA_LENGTH        = "thetaLength";
  var PROP_TOP                 = "top";
  var PROP_TRANSPARENT         = "transparent";
  var PROP_TYPE                = "type";
  var PROP_UP                  = "up";
  var PROP_USE_QUATERNION      = "useQuaternion";
  var PROP_VELOCITY            = "velocity";
  var PROP_VERTICES            = "vertices";
  var PROP_VISIBLE             = "visible";
  var PROP_WIREFRAME           = "wireframe";
  var PROP_WIREFRAME_LINEWIDTH = "wireframeLinewidth";

  var PROP_W                     = "w";
  var PROP_X                     = "x";
  var PROP_Y                     = "y";
  var PROP_Z                     = "z";
  var PROP_XY                    = "xy";
  var PROP_YZ                    = "yz";
  var PROP_ZX                    = "zx";
  var PROP_XYZ                   = "xyz";
  var METHOD_SET_X               = "setX";
  var METHOD_SET_Y               = "setY";
  var METHOD_SET_Z               = "setZ";
  var METHOD_GET_COMPONENT       = "getComponent";
  var METHOD_SET_COMPONENT       = "setComponent";
  var METHOD_SET                 = "set";
  var METHOD_SET_FROM_AXIS_ANGLE = "setFromAxisAngle";
  var METHOD_SET_FROM_EULER      = "setFromEuler";
  var METHOD_SET_GEOMETRY        = "setGeometry";
  var METHOD_UPDATE_MATRIX       = "updateMatrix";

  var METHOD_ADD               = "add";
  var METHOD_CLONE             = "clone";
  var METHOD_CONJUGATE         = "conjugate";
  var METHOD_COPY              = "copy";
  var METHOD_CROSS             = "cross";
  var METHOD_DOT               = "dot";
  var METHOD_INVERSE           = "inverse";
  var METHOD_LENGTH            = "length";
  var METHOD_LENGTH_SQ         = "lengthSq";
  var METHOD_LOOK_AT           = "lookAt";
  var METHOD_NORMALIZE         = "normalize";
  var METHOD_REMOVE            = "remove";
  var METHOD_SET_RGB           = "setRGB";

  var mod = {};

  function isBoolean(x)   { return typeof x === 'boolean'; }
  function isFunction(x)  { return typeof x === 'function'; }
  function isNumber(x)    { return typeof x === 'number'; }
  function isObject(x)    { return typeof x === 'object'; }
  function isString(x)    { return typeof x === 'string'; }
  function isUndefined(x) { return typeof x === 'undefined'; }

  function isDefined(x)   { return typeof x !== 'undefined'; }
  function isNull(x)      { return typeof x === 'object' && x === null; }

  function methodAdd(target) {
    if (!isObject(target)) {
      throw new Sk.builtin.AssertionError("target must be an object.");
    }
    if (!isFunction(target[METHOD_ADD])) {
      throw new Sk.builtin.AssertionError("target must have an 'add' function.");
    }
    return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
      $loc.__init__ = new Sk.builtin.func(function(self) {
        self.tp$name = METHOD_ADD;
      });
      $loc.__call__ = new Sk.builtin.func(function(self, childPy) {
        var child = Sk.ffi.remapToJs(childPy);
        target[METHOD_ADD](child);
      });
      $loc.__str__ = new Sk.builtin.func(function(self) {
        return new Sk.builtin.str(METHOD_ADD)
      })
      $loc.__repr__ = new Sk.builtin.func(function(self) {
        return new Sk.builtin.str(METHOD_ADD)
      })
    }, METHOD_ADD, []));
  }

  function methodRemove(target) {
    if (!isObject(target)) {
      throw new Sk.builtin.AssertionError("target must be an object.");
    }
    if (!isFunction(target[METHOD_REMOVE])) {
      throw new Sk.builtin.AssertionError("target must have a 'remove' function.");
    }
    return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
      $loc.__init__ = new Sk.builtin.func(function(self) {
        self.tp$name = METHOD_REMOVE;
      });
      $loc.__call__ = new Sk.builtin.func(function(self, childPy) {
        var child = Sk.ffi.remapToJs(childPy);
        target[METHOD_REMOVE](child);
      });
      $loc.__str__ = new Sk.builtin.func(function(self) {
        return new Sk.builtin.str(METHOD_REMOVE)
      })
      $loc.__repr__ = new Sk.builtin.func(function(self) {
        return new Sk.builtin.str(METHOD_REMOVE)
      })
    }, METHOD_REMOVE, []));
  }

  function verticesPy(vertices) {
    return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
      $loc.__init__ = new Sk.builtin.func(function(self) {
        self.tp$name = PROP_VERTICES;
        self.v = vertices;
      });
      $loc.__getattr__ = new Sk.builtin.func(function(verticesPy, name) {
        var METHOD_APPEND = "append";
        switch(name) {
          case METHOD_APPEND: {
            return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
              $loc.__init__ = new Sk.builtin.func(function(self) {
                self.tp$name = METHOD_APPEND;
              });
              $loc.__call__ = new Sk.builtin.func(function(self, vectorPy) {
                vertices.push(Sk.ffi.remapToJs(vectorPy));
              });
              $loc.__str__ = new Sk.builtin.func(function(self) {
                return new Sk.builtin.str(METHOD_APPEND)
              });
              $loc.__repr__ = new Sk.builtin.func(function(self) {
                return new Sk.builtin.str(METHOD_APPEND)
              });
            }, METHOD_APPEND, []));
          }
        }
      });
      $loc.__getitem__ = new Sk.builtin.func(function(verticesPy, indexPy) {
        var index = Sk.ffi.remapToJs(indexPy);
        return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(vertices[index], EUCLIDEAN_3));
      });
      $loc.mp$length = function() {return vertices.length;};
      $loc.__str__ = new Sk.builtin.func(function(self) {
        return new Sk.builtin.str(PROP_VERTICES)
      });
      $loc.__repr__ = new Sk.builtin.func(function(self) {
        return new Sk.builtin.str(PROP_VERTICES)
      });
    }, PROP_VERTICES, []));
  }

  /*
   * Deterines whether the argument is a genuine Color reference.
   */
  function isColor(x) {
    if (isDefined(x)) {
      if (x.hasOwnProperty("r") && x.hasOwnProperty("g") && x.hasOwnProperty("b")) {
        return isNumber(x["r"]) && isNumber(x["g"]) && isNumber(x["b"]);
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }

  function webGLSupported() {
    try {
      if (window.WebGLRenderingContext) {
        if (document.createElement('canvas').getContext('experimental-webgl')) {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    }
    catch(e) {
      return false;
    }
  }

  function numberFromArg(arg, argName, functionName, lax) {
    if (isUndefined(argName)) {
      throw new Error("argName must be specified")
    }
    if (isUndefined(functionName)) {
      throw new Error("functionName must be specified")
    }
    lax = isUndefined(lax) ? true : (isBoolean(lax) ? lax : true);
    if (isUndefined(arg)) {
      if (lax) {
        return arg;
      }
      else {
        throw new Sk.builtin.TypeError(functionName + "." + argName + " must be convertible to a number, but was Missing.");
      }
    }
    else if (isNull(arg)) {
      if (lax) {
        return arg;
      }
      else {
        throw new Sk.builtin.TypeError(functionName + "." + argName + " must be convertible to a number, but was None.");
      }
    }
    if (isBoolean(arg)) {
      throw new Sk.builtin.TypeError(functionName + "." + argName + " must be convertible to a number, but was a Boolean.");
    }

    if (arg.skType) {
      switch(arg.skType) {
        case 'float': {
          return arg.v;
        }
        case 'int': {
          return arg.v;
        }
        default: {
          throw new Sk.builtin.TypeError(functionName + "(" + argName + ": " + arg.skType + ") must be convertible to a number.");
        }
      }
    }
    else if (arg.v) {
      if (isString(arg.v)) {
        throw new Sk.builtin.TypeError(functionName + "." + argName + " must be convertible to a number, but was a String.");
      }
      else {
        throw new Sk.builtin.AssertionError(functionName + "." + argName + " is unknown.");
      }
    }
    else {
      throw new Sk.builtin.AssertionError(functionName + "." + argName + " is unknown.");
    }
  }

  function numberFromIntegerArg(arg, argName, functionName) {
    // TODO: Maybe need an argument to say whether undefined is acceptable?
    // TODO: Likewise for whether null is acceptable.
    if (isUndefined(arg)) {
      return arg;
    }
    else if (isNull(arg)) {
      return null;
    }
    else {
      if (arg.skType) {
        switch(arg.skType) {
          case 'float': {
            // TODO: Handle coercion to nearest integer.
            return arg.v;
          }
          case 'int': {
            return arg.v;
          }
        }
      }
      throw new Sk.builtin.AssertionError(functionName + "." + argName + " must be an integer.");
    }
  }

  function remapE3ToPy(w, x, y, z, xy, yz, zx, xyz) {
    w = Sk.builtin.assk$(w, Sk.builtin.nmber.float$);
    x = Sk.builtin.assk$(x, Sk.builtin.nmber.float$);
    y = Sk.builtin.assk$(y, Sk.builtin.nmber.float$);
    z = Sk.builtin.assk$(z, Sk.builtin.nmber.float$);
    xy = Sk.builtin.assk$(xy, Sk.builtin.nmber.float$);
    yz = Sk.builtin.assk$(yz, Sk.builtin.nmber.float$);
    zx = Sk.builtin.assk$(zx, Sk.builtin.nmber.float$);
    xyz = Sk.builtin.assk$(xyz, Sk.builtin.nmber.float$);
    return Sk.misceval.callsim(mod[EUCLIDEAN_3], w, x, y, z, xy, yz, zx, xyz);
  }

  function wxyzToPy(w, x, y, z) {
    var wPy = Sk.builtin.assk$(w, Sk.builtin.nmber.float$);
    var xPy = Sk.builtin.assk$(x, Sk.builtin.nmber.float$);
    var yPy = Sk.builtin.assk$(y, Sk.builtin.nmber.float$);
    var zPy = Sk.builtin.assk$(z, Sk.builtin.nmber.float$);
    return Sk.misceval.callsim(mod[QUATERNION], xPy, yPy, zPy, wPy);
  }

  function divide(a000, a001, a010, a011, a100, a101, a110, a111, b000, b001, b010, b011, b100, b101, b110, b111, dst) {
    // WARNING! bladeASM.mulE2 uses w,x,y,z,xy,yz,zx,xyz representation. Notice the ordering and sign change.
    // TODO: Move everything to the more systematic bitmap representation.
    // r = ~b = reverse(b)
    var r000 = +b000; // w,   grade 0(+)
    var r001 = +b001; // x,   grade 1(+)
    var r010 = +b010; // y,   grade 1(+)
    var r011 = -b011; // xy,  grade 2(-)
    var r100 = +b100; // z,   grade 1(+)
    var r101 = -b101; // yz,  grade 2(-)
    var r110 = -b110; // yz,  grade 2(-)
    var r111 = -b111; // xyz, grade 3(-)
    // m = b * r = b * (~b)
    // The grade 2 and grade 3 components evaluate to zero.
    var m000 =  bladeASM.mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, r000, r001, r010, r100, r011, r110, -r101, r111, 0);
    var m001 =  bladeASM.mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, r000, r001, r010, r100, r011, r110, -r101, r111, 1);
    var m010 =  bladeASM.mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, r000, r001, r010, r100, r011, r110, -r101, r111, 2);
    var m011 =  0;//bladeASM.mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, r000, r001, r010, r100, r011, r110, -r101, r111, 4);
    var m100 =  bladeASM.mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, r000, r001, r010, r100, r011, r110, -r101, r111, 3);
    var m101 =  0;//-bladeASM.mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, r000, r001, r010, r100, r011, r110, -r101, r111, 6);
    var m110 =  0;//bladeASM.mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, r000, r001, r010, r100, r011, r110, -r101, r111, 5);
    var m111 =  0;//bladeASM.mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, r000, r001, r010, r100, r011, r110, -r101, r111, 7);
    // c = cliffordConjugate(m)
    var c000 = +m000; // w,   grade 0(+)
    var c001 = -m001; // x,   grade 1(-)
    var c010 = -m010; // y,   grade 1(-)
    var c011 = -m011; // xy,  grade 2(-)
    var c100 = -m100; // z,   grade 1(-)
    var c101 = -m101; // -zx, grade 2(-)
    var c110 = -m110; // yz,  grade 2(-)
    var c111 = +m111; // xyz, grade 3(+)
    // s = r * c
    // TODO: Presumably there is some simplified computation on account of the c's being sparse.
    var s000 =  bladeASM.mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 0);
    var s001 =  bladeASM.mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 1);
    var s010 =  bladeASM.mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 2);
    var s011 =  bladeASM.mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 4);
    var s100 =  bladeASM.mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 3);
    var s101 = -bladeASM.mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 6);
    var s110 =  bladeASM.mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 5);
    var s111 =  bladeASM.mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 7);
    // k = b * s
    var k000 =  bladeASM.mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, s000, s001, s010, s100, s011, s110, -s101, s111, 0);
    // i = inverse(b)
    var i000 = s000/k000;
    var i001 = s001/k000;
    var i010 = s010/k000;
    var i011 = s011/k000;
    var i100 = s100/k000;
    var i101 = s101/k000;
    var i110 = s110/k000;
    var i111 = s111/k000;
    // x = a * inverse(b)
    var x000 =  bladeASM.mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 0);
    var x001 =  bladeASM.mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 1);
    var x010 =  bladeASM.mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 2);
    var x011 =  bladeASM.mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 4);
    var x100 =  bladeASM.mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 3);
    var x101 = -bladeASM.mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 6);
    var x110 =  bladeASM.mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 5);
    var x111 =  bladeASM.mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 7);
    // translate bitmap representation to Cartesian.
    var w   =  x000;
    var x   =  x001;
    var y   =  x010;
    var z   =  x100;
    var xy  =  x011;
    var yz  =  x110;
    var zx  = -x101;
    var xyz =  x111;
    // return or populate the optional dst parameter.
    if (typeof dst !== 'undefined') {
      dst.w   = w;
      dst.x   = x;
      dst.y   = y;
      dst.z   = z;
      dst.xy  = xy;
      dst.yz  = yz;
      dst.zx  = zx;
      dst.xyz = xyz;
    }
    else {
      return remapE3ToPy(w, x, y, z, xy, yz, zx, xyz);
    }
  }

  function multiVector3(w, vector, xy, yz, zx, xyz) {
    vector.w = w;
    vector.xy = xy;
    vector.yz = yz;
    vector.zx = zx;
    vector.xyz = xyz;
    return vector;
  }

  function coord(mv, index) {
    switch(index) {
      case 0: {
        return mv.w;
      }
      case 1: {
        return mv.x;
      }
      case 2: {
        return mv.y;
      }
      case 3: {
        return mv.z;
      }
      case 4: {
        return mv.xy;
      }
      case 5: {
        return mv.yz;
      }
      case 6: {
        return mv.zx;
      }
      case 7: {
        return mv.xyz;
      }
      default: {
        throw new Sk.builtin.AssertionError("" + index + " is not a valid multivector coordinate index");
      }
    }
  }
  
  function compute(f, a, b, coord, pack) {
    var a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, x0, x1, x2, x3, x4, x5, x6, x7;
    a0 = a.w;
    a1 = a.x;
    a2 = a.y;
    a3 = a.z;
    a4 = a.xy;
    a5 = a.yz;
    a6 = a.zx;
    a7 = a.xyz;
    b0 = b.w;
    b1 = b.x;
    b2 = b.y;
    b3 = b.z;
    b4 = b.xy;
    b5 = b.yz;
    b6 = b.zx;
    b7 = b.xyz;
    x0 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 0);
    x1 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 1);
    x2 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 2);
    x3 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 3);
    x4 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 4);
    x5 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 5);
    x6 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 6);
    x7 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 7);
    return pack(x0, x1, x2, x3, x4, x5, x6, x7);
  }

  mod[EUCLIDEAN_3] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = new Sk.builtin.func(function(self, w, x, y, z, xy, yz, zx, xyz) {
      w = Sk.ffi.remapToJs(w);
      x = Sk.ffi.remapToJs(x);
      y = Sk.ffi.remapToJs(y);
      z = Sk.ffi.remapToJs(z);
      xy = Sk.ffi.remapToJs(xy);
      yz = Sk.ffi.remapToJs(yz);
      zx = Sk.ffi.remapToJs(zx);
      xyz = Sk.ffi.remapToJs(xyz);
      if (isNumber(w) && isNumber(x) && isNumber(y) && isNumber(z) && isNumber(xy) && isNumber(yz) && isNumber(zx) && isNumber(xyz)) {
        self.v = multiVector3(w, new THREE.Vector3(x, y, z), xy, yz, zx, xyz);
      }
      else if (isDefined(w) && isUndefined(x) && isUndefined(y) && isUndefined(z) && isUndefined(xy) && isUndefined(yz) && isUndefined(zx) && isUndefined(xyz)) {
        self.v = multiVector3(w.w || 0, w, w.xy || 0, w.yz || 0, w.zx|| 0, w.xyz || 0);
      }
      else if (isDefined(w) && isUndefined(x) && isUndefined(y) && isUndefined(z) && isDefined(xy) && isDefined(yz) && isDefined(zx) && isDefined(xyz)) {
        self.v = multiVector3(w, new THREE.Vector3(0, 0, 0), xy, yz, zx, xyz);
      }
      else if (isUndefined(w) && isUndefined(x) && isUndefined(y) && isUndefined(z) && isUndefined(xy) && isUndefined(yz) && isUndefined(zx) && isUndefined(xyz)) {
        self.v = multiVector3(0, new THREE.Vector3(0, 0, 0), 0, 0, 0, 0);
      }
      else {
        throw new Sk.builtin.AssertionError(EUCLIDEAN_3);
      }
      self.tp$name = EUCLIDEAN_3;
    });
    $loc.__add__ = new Sk.builtin.func(function(a, b) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(b)) {
        return remapE3ToPy(a.w + b, a.x, a.y, a.z, a.xy, a.yz, a.zx, a.xyz);
      }
      else {
        var w = a.w + b.w;
        var x = a.x + b.x;
        var y = a.y + b.y;
        var z = a.z + b.z;
        var xy = a.xy + b.xy;
        var yz = a.yz + b.yz;
        var zx = a.zx + b.zx;
        var xyz = a.xyz + b.xyz;
        return remapE3ToPy(w, x, y, z, xy, yz, zx, xyz);
      }
    });
    $loc.__radd__ = new Sk.builtin.func(function(b, a) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(a)) {
        return remapE3ToPy(a + b.w, b.x, b.y, b.z, b.xy, b.yz, b.zx, b.xyz);
      }
      else {
        throw new Sk.builtin.AssertionError();
      }
    });
    $loc.__iadd__ = new Sk.builtin.func(function(selfPy, otherPy) {
      var self = Sk.ffi.remapToJs(selfPy);
      var other = Sk.ffi.remapToJs(otherPy);
      if (isNumber(other)) {
        self.w += other;
      }
      else {
        self.w += other.w;
        self.x += other.x;
        self.y += other.y;
        self.z += other.z;
        self.xy += other.xy;
        self.yz += other.yz;
        self.zx += other.zx;
        self.xyz += other.xyz;
      }
      return selfPy;
    });
    $loc.__sub__ = new Sk.builtin.func(function(a, b) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(b)) {
        return remapE3ToPy(a.w - b, a.x, a.y, a.z, a.xy, a.yz, a.zx, a.xyz);
      }
      else {
        var w = a.w - b.w;
        var x = a.x - b.x;
        var y = a.y - b.y;
        var z = a.z - b.z;
        var xy = a.xy - b.xy;
        var yz = a.yz - b.yz;
        var zx = a.zx - b.zx;
        var xyz = a.xyz - b.xyz;
        return remapE3ToPy(w, x, y, z, xy, yz, zx, xyz);
      }
    });
    $loc.__rsub__ = new Sk.builtin.func(function(b, a) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(a)) {
        return remapE3ToPy(a - b.w, -b.x, -b.y, -b.z, -b.xy, -b.yz, -b.zx, -b.xyz);
      }
      else {
        throw new Sk.builtin.AssertionError();
      }
    });
    $loc.__isub__ = new Sk.builtin.func(function(selfPy, otherPy) {
      var self = Sk.ffi.remapToJs(selfPy);
      var other = Sk.ffi.remapToJs(otherPy);
      if (isNumber(other)) {
        self.w -= other;
      }
      else {
        self.w -= other.w;
        self.x -= other.x;
        self.y -= other.y;
        self.z -= other.z;
        self.xy -= other.xy;
        self.yz -= other.yz;
        self.zx -= other.zx;
        self.xyz -= other.xyz;
      }
      return selfPy;
    });
    $loc.__mul__ = new Sk.builtin.func(function(a, b) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(b)) {
        return remapE3ToPy(a.w * b, a.x * b, a.y * b, a.z * b, a.xy * b, a.yz * b, a.zx * b, a.xyz * b);
      }
      else {
        return compute(bladeASM.mulE3, a, b, coord, remapE3ToPy);
      }
    });
    $loc.__rmul__ = new Sk.builtin.func(function(b, a) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(a)) {
        return remapE3ToPy(a * b.w, a * b.x, a * b.y, a * b.z, a * b.xy, a * b.yz, a * b.zx, a * b.xyz);
      }
      else {
        throw new Sk.builtin.AssertionError();
      }
    });
    $loc.__imul__ = new Sk.builtin.func(function(selfPy, otherPy) {
      var a = Sk.ffi.remapToJs(selfPy);
      var b = Sk.ffi.remapToJs(otherPy);
      var a0 = a.w;
      var a1 = a.x;
      var a2 = a.y;
      var a3 = a.z;
      var a4 = a.xy;
      var a5 = a.yz;
      var a6 = a.zx;
      var a7 = a.xyz;
      var b0, b1, b2, b3, b4, b5, b6, b7;
      if (isNumber(b)) {
        b0 = b;
        b1 = 0;
        b2 = 0;
        b3 = 0;
        b4 = 0;
        b5 = 0;
        b6 = 0;
        b7 = 0;
      }
      else {
        b0 = b.w;
        b1 = b.x;
        b2 = b.y;
        b3 = b.z;
        b4 = b.xy;
        b5 = b.yz;
        b6 = b.zx;
        b7 = b.xyz;
      }
      a.w   = bladeASM.mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 0);
      a.x   = bladeASM.mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 1);
      a.y   = bladeASM.mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 2);
      a.z   = bladeASM.mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 3);
      a.xy  = bladeASM.mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 4);
      a.yz  = bladeASM.mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 5);
      a.zx  = bladeASM.mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 6);
      a.xyz = bladeASM.mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 7);
      return selfPy;
    });
    $loc.__div__ = new Sk.builtin.func(function(a, b) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(b)) {
        return divide(a.w, a.x, a.y, a.xy, a.z, -a.zx, a.yz, a.xyz, b, 0, 0, 0, 0, 0, 0, 0);
      }
      else {
        return divide(a.w, a.x, a.y, a.xy, a.z, -a.zx, a.yz, a.xyz, b.w, b.x, b.y, b.xy, b.z, -b.zx, b.yz, b.xyz);
      }
    });
    $loc.__rdiv__ = new Sk.builtin.func(function(rhs, lhs) {
      lhs = Sk.ffi.remapToJs(lhs);
      rhs = Sk.ffi.remapToJs(rhs);
      if (isNumber(lhs)) {
        return divide(lhs, 0, 0, 0, 0, 0, 0, 0, rhs.w, rhs.x, rhs.y, rhs.xy, rhs.z, -rhs.zx, rhs.yz, rhs.xyz);
      }
      else {
        throw new Sk.builtin.AssertionError("" + JSON.stringify(lhs, null, 2) + " / " + JSON.stringify(rhs, null, 2));
      }
    });
    $loc.__idiv__ = new Sk.builtin.func(function(selfPy, otherPy) {
      var a = Sk.ffi.remapToJs(selfPy);
      var b = Sk.ffi.remapToJs(otherPy);
      if (isNumber(b)) {
        divide(a.w, a.x, a.y, a.xy, a.z, -a.zx, a.yz, a.xyz, b, 0, 0, 0, 0, 0, 0, 0, a);
        return selfPy;
      }
      else {
        divide(a.w, a.x, a.y, a.xy, a.z, -a.zx, a.yz, a.xyz, b.w, b.x, b.y, b.xy, b.z, -b.zx, b.yz, b.xyz, a);
        return selfPy;
      }
    });
    $loc.__xor__ = new Sk.builtin.func(function(a, b) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(b)) {
        return remapE3ToPy(a.w * b, a.x * b, a.y * b, a.z * b, a.xy * b, a.yz * b, a.zx * b, a.xyz * b);
      }
      else {
        return compute(bladeASM.extE3, a, b, coord, remapE3ToPy);
      }
    });
    $loc.__rxor__ = new Sk.builtin.func(function(b, a) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(a)) {
        return remapE3ToPy(a * b.w, a * b.x, a * b.y, a * b.z, a * b.xy, a * b.yz, a * b.zx, a * b.xyz);
      }
      else {
        throw new Sk.builtin.AssertionError();
      }
    });
    $loc.__ixor__ = new Sk.builtin.func(function(selfPy, otherPy) {
      var a = Sk.ffi.remapToJs(selfPy);
      var b = Sk.ffi.remapToJs(otherPy);
      var a0 = a.w;
      var a1 = a.x;
      var a2 = a.y;
      var a3 = a.z;
      var a4 = a.xy;
      var a5 = a.yz;
      var a6 = a.zx;
      var a7 = a.xyz;
      var b0, b1, b2, b3, b4, b5, b6, b7;
      if (isNumber(b)) {
        b0 = b;
        b1 = 0;
        b2 = 0;
        b3 = 0;
        b4 = 0;
        b5 = 0;
        b6 = 0;
        b7 = 0;
      }
      else {
        b0 = b.w;
        b1 = b.x;
        b2 = b.y;
        b3 = b.z;
        b4 = b.xy;
        b5 = b.yz;
        b6 = b.zx;
        b7 = b.xyz;
      }
      a.w   = bladeASM.extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 0);
      a.x   = bladeASM.extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 1);
      a.y   = bladeASM.extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 2);
      a.z   = bladeASM.extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 3);
      a.xy  = bladeASM.extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 4);
      a.yz  = bladeASM.extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 5);
      a.zx  = bladeASM.extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 6);
      a.xyz = bladeASM.extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 7);
      return selfPy;
    });
    $loc.__lshift__ = new Sk.builtin.func(function(a, b) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(b)) {
        return remapE3ToPy(a.w * b, 0, 0, 0, 0, 0, 0, 0);
      }
      else {
        return compute(bladeASM.lcoE3, a, b, coord, remapE3ToPy);
      }
    });
    $loc.__rlshift__ = new Sk.builtin.func(function(b, a) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(a)) {
        return remapE3ToPy(a * b.w, a * b.x, a * b.y, a * b.z, a * b.xy, a * b.yz, a * b.zx, a * b.xyz);
      }
      else {
        throw new Sk.builtin.AssertionError();
      }
    });
    $loc.__ilshift__ = new Sk.builtin.func(function(selfPy, otherPy) {
      var a = Sk.ffi.remapToJs(selfPy);
      var b = Sk.ffi.remapToJs(otherPy);
      var a0 = a.w;
      var a1 = a.x;
      var a2 = a.y;
      var a3 = a.z;
      var a4 = a.xy;
      var a5 = a.yz;
      var a6 = a.zx;
      var a7 = a.xyz;
      var b0, b1, b2, b3, b4, b5, b6, b7;
      if (isNumber(b)) {
        b0 = b;
        b1 = 0;
        b2 = 0;
        b3 = 0;
        b4 = 0;
        b5 = 0;
        b6 = 0;
        b7 = 0;
      }
      else {
        b0 = b.w;
        b1 = b.x;
        b2 = b.y;
        b3 = b.z;
        b4 = b.xy;
        b5 = b.yz;
        b6 = b.zx;
        b7 = b.xyz;
      }
      a.w   = bladeASM.lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 0);
      a.x   = bladeASM.lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 1);
      a.y   = bladeASM.lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 2);
      a.z   = bladeASM.lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 3);
      a.xy  = bladeASM.lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 4);
      a.yz  = bladeASM.lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 5);
      a.zx  = bladeASM.lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 6);
      a.xyz = bladeASM.lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 7);
      return selfPy;
    });
    $loc.__rshift__ = new Sk.builtin.func(function(a, b) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(b)) {
        return remapE3ToPy(a.w * b, a.x * b, a.y * b, a.z * b, a.xy * b, a.yz * b, a.zx * b, a.xyz * b);
      }
      else {
        return compute(bladeASM.rcoE3, a, b, coord, remapE3ToPy);
      }
    });
    $loc.__rrshift__ = new Sk.builtin.func(function(b, a) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(a)) {
        return remapE3ToPy(a * b.w, 0, 0, 0, 0, 0, 0, 0);
      }
      else {
        throw new Sk.builtin.AssertionError();
      }
    });
    $loc.__irshift__ = new Sk.builtin.func(function(selfPy, otherPy) {
      var a = Sk.ffi.remapToJs(selfPy);
      var b = Sk.ffi.remapToJs(otherPy);
      var a0 = a.w;
      var a1 = a.x;
      var a2 = a.y;
      var a3 = a.z;
      var a4 = a.xy;
      var a5 = a.yz;
      var a6 = a.zx;
      var a7 = a.xyz;
      var b0, b1, b2, b3, b4, b5, b6, b7;
      if (isNumber(b)) {
        b0 = b;
        b1 = 0;
        b2 = 0;
        b3 = 0;
        b4 = 0;
        b5 = 0;
        b6 = 0;
        b7 = 0;
      }
      else {
        b0 = b.w;
        b1 = b.x;
        b2 = b.y;
        b3 = b.z;
        b4 = b.xy;
        b5 = b.yz;
        b6 = b.zx;
        b7 = b.xyz;
      }
      a.w   = bladeASM.rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 0);
      a.x   = bladeASM.rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 1);
      a.y   = bladeASM.rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 2);
      a.z   = bladeASM.rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 3);
      a.xy  = bladeASM.rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 4);
      a.yz  = bladeASM.rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 5);
      a.zx  = bladeASM.rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 6);
      a.xyz = bladeASM.rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 7);
      return selfPy;
    });
    $loc.nb$positive = function() {
      return this;
    };
    $loc.nb$negative = function() {
      var mv = Sk.ffi.remapToJs(this);
      return remapE3ToPy(-mv.w, -mv.x, -mv.y, -mv.z, -mv.xy, -mv.yz, -mv.zx, -mv.xyz);
    };
    $loc.nb$invert = function() {
      var mv = Sk.ffi.remapToJs(this);
      return remapE3ToPy(mv.w, mv.x, mv.y, mv.z, -mv.xy, -mv.yz, -mv.zx, -mv.xyz);
    };
    $loc.__eq__ = new Sk.builtin.func(function(a, b) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      return a.w === b.w && a.x === b.x && a.y === b.y && a.z === b.z && a.xy === b.xy && a.yz === b.yz && a.zx === b.zx && a.xyz === b.xyz;
    });
    $loc.__ne__ = new Sk.builtin.func(function(a, b) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      return a.w !== b.w || a.x !== b.x || a.y !== b.y || a.z !== b.z || a.xy !== b.xy || a.yz !== b.yz || a.zx !== b.zx || a.xyz !== b.xyz;
    });
    $loc.__getitem__ = new Sk.builtin.func(function(mv, index) {
      mv = Sk.ffi.remapToJs(mv);
      index = Sk.builtin.asnum$(index);
      switch(index) {
        case 0: {
          return remapE3ToPy(mv.w, 0, 0, 0, 0, 0, 0, 0);
        }
        case 1: {
          return remapE3ToPy(0, mv.x, mv.y, mv.z, 0, 0, 0, 0);
        }
        case 2: {
          return remapE3ToPy(0, 0, 0, 0, mv.xy, mv.yz, mv.zx, 0);
        }
        case 3: {
          return remapE3ToPy(0, 0, 0, 0, 0, 0, 0, mv.xyz);
        }
      }
    });
    $loc.__getattr__ = new Sk.builtin.func(function(mvPy, name) {
      var mv = Sk.ffi.remapToJs(mvPy);
      switch(name) {
        case PROP_W: {
          return Sk.builtin.assk$(mv.w, Sk.builtin.nmber.float$);
        }
        case PROP_X: {
          return Sk.builtin.assk$(mv.x, Sk.builtin.nmber.float$);
        }
        case PROP_Y: {
          return Sk.builtin.assk$(mv.y, Sk.builtin.nmber.float$);
        }
        case PROP_Z: {
          return Sk.builtin.assk$(mv.z, Sk.builtin.nmber.float$);
        }
        case PROP_XY: {
          return Sk.builtin.assk$(mv.xy, Sk.builtin.nmber.float$);
        }
        case PROP_YZ: {
          return Sk.builtin.assk$(mv.yz, Sk.builtin.nmber.float$);
        }
        case PROP_ZX: {
          return Sk.builtin.assk$(mv.zx, Sk.builtin.nmber.float$);
        }
        case PROP_XYZ: {
          return Sk.builtin.assk$(mv.xyz, Sk.builtin.nmber.float$);
        }
        case METHOD_ADD: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_ADD;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, arg) {
              arg  = Sk.ffi.remapToJs(arg);
              mv.w += arg.w;
              mv.x += arg.x;
              mv.y += arg.y;
              mv.z += arg.z;
              mv.xy += arg.xy;
              mv.yz += arg.yz;
              mv.zx += arg.zx;
              mv.xyz += arg.xyz;
              return mvPy;
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_ADD);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_ADD);
            });
          }, METHOD_ADD, []));
        }
        case METHOD_CROSS: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_CROSS;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, vPy) {
              var v  = Sk.ffi.remapToJs(vPy);
              mv.w = 0;
              mv[METHOD_CROSS](v);
//            mv.x  = bladeASM.extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 1);
//            mv.y  = bladeASM.extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 2);
//            mv.z  = bladeASM.extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 3);
              mv.xy = 0;
              mv.yz = 0;
              mv.zx = 0;
              mv.xyz = 0;
              return mvPy;
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_CROSS);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_CROSS);
            });
          }, METHOD_CROSS, []));
        }
        case METHOD_DOT: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_DOT;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, vPy) {
              var v  = Sk.ffi.remapToJs(vPy);
              return Sk.builtin.assk$(mv[METHOD_DOT](v), Sk.builtin.nmber.float$);
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_DOT);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_DOT);
            });
          }, METHOD_DOT, []));
        }
        case METHOD_SET_X: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_SET_X;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, x) {
              x  = Sk.ffi.remapToJs(x);
              mv[METHOD_SET_X](x);
              return mvPy;
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET_X);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET_X);
            });
          }, METHOD_SET_X, []));
        }
        case METHOD_SET_Y: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_SET_Y;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, y) {
              y  = Sk.ffi.remapToJs(y);
              mv[METHOD_SET_Y](y);
              return mvPy;
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET_Y);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET_Y);
            });
          }, METHOD_SET_Y, []));
        }
        case METHOD_SET_Z: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_SET_Z;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, z) {
              z  = Sk.ffi.remapToJs(z);
              mv[METHOD_SET_Z](z);
              return mvPy;
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET_Z);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET_Z);
            });
          }, METHOD_SET_Z, []));
        }
        case METHOD_GET_COMPONENT: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_GET_COMPONENT;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, index) {
              index  = Sk.ffi.remapToJs(index);
              return Sk.builtin.assk$(mv[METHOD_GET_COMPONENT](index), Sk.builtin.nmber.float$);
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_GET_COMPONENT);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_GET_COMPONENT);
            });
          }, METHOD_GET_COMPONENT, []));
        }
        case METHOD_SET_COMPONENT: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_SET_COMPONENT;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, index, value) {
              index  = Sk.ffi.remapToJs(index);
              value  = Sk.ffi.remapToJs(value);
              mv[METHOD_SET_COMPONENT](index, value);
              return mvPy;
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET_COMPONENT);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET_COMPONENT);
            });
          }, METHOD_SET_COMPONENT, []));
        }
        case METHOD_SET: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_SET;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, x, y, z) {
              x  = Sk.ffi.remapToJs(x);
              y  = Sk.ffi.remapToJs(y);
              z  = Sk.ffi.remapToJs(z);
              mv[METHOD_SET](x, y, z);
              return mvPy;
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET);
            });
          }, METHOD_SET, []));
        }
        case METHOD_CLONE: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_CLONE;
            });
            $loc.__call__ = new Sk.builtin.func(function(self) {
              return remapE3ToPy(mv.w, mv.x, mv.y, mv.z, mv.xy, mv.yz, mv.zx, mv.xyz);
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_CLONE);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_CLONE);
            });
          }, METHOD_CLONE, []));
        }
        case METHOD_LENGTH: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_LENGTH;
            });
            $loc.__call__ = new Sk.builtin.func(function(self) {
              return Sk.builtin.assk$(mv[METHOD_LENGTH](), Sk.builtin.nmber.float$);
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_LENGTH);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_LENGTH);
            });
          }, METHOD_LENGTH, []));
        }
        case METHOD_NORMALIZE: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_NORMALIZE;
            });
            $loc.__call__ = new Sk.builtin.func(function(self) {
              mv[METHOD_NORMALIZE]();
              return mvPy;
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_NORMALIZE);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_NORMALIZE);
            });
          }, METHOD_NORMALIZE, []));
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(mv, name, value) {
      mv = Sk.ffi.remapToJs(mv);
      value = Sk.ffi.remapToJs(value);
      switch(name) {
        case PROP_W: {
          mv.w = value;
        }
        break;
        case PROP_X: {
          mv.x = value;
        }
        break;
        case PROP_Y: {
          mv.y = value;
        }
        break;
        case PROP_Z: {
          mv.z = value;
        }
        break;
        case PROP_XY: {
          mv.xy = value;
        }
        break;
        case PROP_YZ: {
          mv.yz = value;
        }
        break;
        case PROP_ZX: {
          mv.zx = value;
        }
        break;
        case PROP_XYZ: {
          mv.xyz = value;
        }
        break;
        default: {
          throw new Sk.builtin.AttributeError(name + " is not an attribute of " + EUCLIDEAN_3);
        }
      }
    });
    $loc.__repr__ = new Sk.builtin.func(function(m) {
      m = Sk.ffi.remapToJs(m);
      var grade0 = m.w !== 0;
      var grade1 = m.x !== 0 || m.y != 0 || m.z !== 0;
      var grade2 = m.xy !== 0 || m.yz !== 0 || m.zx !== 0;
      var grade3 = m.xyz !== 0;
      if (grade0 && !grade1 && !grade2 && !grade3) {
        var args = [m.w];
        return new Sk.builtin.str(SCALAR_3 + "(" + args.join(", ") + ")");
      }
      else if (!grade0 && grade1 && !grade2 && !grade3) {
        var args = [m.x, m.y, m.z];
        return new Sk.builtin.str(VECTOR_3 + "(" + args.join(", ") + ")");
      }
      else if (!grade0 && !grade1 && grade2 && !grade3) {
        var args = [m.xy, m.yz, m.zx];
        return new Sk.builtin.str(BIVECTOR_3 + "(" + args.join(", ") + ")");
      }
      else if (!grade0 && !grade1 && !grade2 && grade3) {
        var args = [m.xyz];
        return new Sk.builtin.str(PSEUDOSCALAR_3 + "(" + args.join(", ") + ")");
      }
      else {
        var args = [m.w, m.x, m.y, m.z, m.xy, m.yz, m.zx, m.xyz];
        return new Sk.builtin.str(EUCLIDEAN_3 + "(" + args.join(", ") + ")");
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(mv) {
      mv = Sk.ffi.remapToJs(mv);
      if (isDefined(mv)) {
        return new Sk.builtin.str(bladeSTR.stringFromCoordinates([mv.w, mv.x, mv.y, mv.z, mv.xy, mv.yz, mv.zx, mv.xyz], ["1", "i", "j", "k", "ij", "jk", "ki", "I"]));
      }
      else {
        return new Sk.builtin.str("<type '" + EUCLIDEAN_3 + "'>");
      }
    });
  }, EUCLIDEAN_3, []);

  mod[QUATERNION] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = new Sk.builtin.func(function(self, x, y, z, w) {
      x = Sk.ffi.remapToJs(x);
      y = Sk.ffi.remapToJs(y);
      z = Sk.ffi.remapToJs(z);
      w = Sk.ffi.remapToJs(w);
      if (isObject(x) && isUndefined(y) && isUndefined(z) && isUndefined(w)) {
        self.v = x;
      }
      else {
        self.v = new THREE[QUATERNION](x, y, z, w);
      }
      self.tp$name = QUATERNION;
    });
    $loc.__add__ = new Sk.builtin.func(function(a, b) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(b)) {
        return wxyzToPy(a.w + b, a.x, a.y, a.z);
      }
      else {
        var w = a.w + b.w;
        var x = a.x + b.x;
        var y = a.y + b.y;
        var z = a.z + b.z;
        return wxyzToPy(w, x, y, z);
      }
    });
    $loc.__radd__ = new Sk.builtin.func(function(b, a) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(a)) {
        return wxyzToPy(a + b.w, b.x, b.y, b.z);
      }
      else {
        throw new Sk.builtin.AssertionError();
      }
    });
    $loc.__iadd__ = new Sk.builtin.func(function(selfPy, otherPy) {
      var self = Sk.ffi.remapToJs(selfPy);
      var other = Sk.ffi.remapToJs(otherPy);
      if (isNumber(other)) {
        self.w += other;
      }
      else {
        self.w += other.w;
        self.x += other.x;
        self.y += other.y;
        self.z += other.z;
      }
      return selfPy;
    });
    $loc.__sub__ = new Sk.builtin.func(function(a, b) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(b)) {
        return wxyzToPy(a.w - b, a.x, a.y, a.z);
      }
      else {
        var w = a.w - b.w;
        var x = a.x - b.x;
        var y = a.y - b.y;
        var z = a.z - b.z;
        return wxyzToPy(w, x, y, z);
      }
    });
    $loc.__rsub__ = new Sk.builtin.func(function(b, a) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(a)) {
        return wxyzToPy(a - b.w, -b.x, -b.y, -b.z);
      }
      else {
        throw new Sk.builtin.AssertionError();
      }
    });
    $loc.__isub__ = new Sk.builtin.func(function(selfPy, otherPy) {
      var self = Sk.ffi.remapToJs(selfPy);
      var other = Sk.ffi.remapToJs(otherPy);
      if (isNumber(other)) {
        self.w -= other;
      }
      else {
        self.w -= other.w;
        self.x -= other.x;
        self.y -= other.y;
        self.z -= other.z;
      }
      return selfPy;
    });
    $loc.__mul__ = new Sk.builtin.func(function(a, b) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(b)) {
        return wxyzToPy(a.w * b, a.x * b, a.y * b, a.z * b);
      }
      else {
        var ab = new THREE[QUATERNION]().multiplyQuaternions(a, b);
        return Sk.misceval.callsim(mod[QUATERNION], Sk.ffi.referenceToPy(ab, QUATERNION));
      }
    });
    $loc.__rmul__ = new Sk.builtin.func(function(b, a) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(a)) {
        return quaternionToPy(a * b.w, a * b.x, a * b.y, a * b.z);
      }
      else {
        throw new Sk.builtin.AssertionError();
      }
    });
    $loc.__imul__ = new Sk.builtin.func(function(selfPy, otherPy) {
      var a = Sk.ffi.remapToJs(selfPy);
      var b = Sk.ffi.remapToJs(otherPy);
      var a0 = a.w;
      var a1 = a.x;
      var a2 = a.y;
      var a3 = a.z;
      var b0, b1, b2, b3, b4, b5, b6, b7;
      if (isNumber(b)) {
        a.w *= b;
        a.x *= b;
        a.y *= b;
        a.z *= b;
      }
      else {
        a.multiply(b);
      }
      return selfPy;
    });
    $loc.nb$positive = function() {
      return this;
    };
    $loc.nb$negative = function() {
      var mv = Sk.ffi.remapToJs(this);
      return quaternionToPy(-mv.x, -mv.y, -mv.z, -mv.w);
    };
    $loc.nb$invert = function() {
      var mv = Sk.ffi.remapToJs(this);
      return remapE3ToPy(mv.w, mv.x, mv.y, mv.z, -mv.xy, -mv.yz, -mv.zx, -mv.xyz);
    };
    $loc.__eq__ = new Sk.builtin.func(function(a, b) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      return a.w === b.w && a.x === b.x && a.y === b.y && a.z === b.z;
    });
    $loc.__ne__ = new Sk.builtin.func(function(a, b) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      return a.w !== b.w || a.x !== b.x || a.y !== b.y || a.z !== b.z;
    });
    $loc.__getattr__ = new Sk.builtin.func(function(quaternionPy, name) {
      var quaternion = Sk.ffi.remapToJs(quaternionPy);
      switch(name) {
        case PROP_X: {
          return Sk.builtin.assk$(quaternion.x, Sk.builtin.nmber.float$);
        }
        case PROP_Y: {
          return Sk.builtin.assk$(quaternion.y, Sk.builtin.nmber.float$);
        }
        case PROP_Z: {
          return Sk.builtin.assk$(quaternion.z, Sk.builtin.nmber.float$);
        }
        case PROP_W: {
          return Sk.builtin.assk$(quaternion.w, Sk.builtin.nmber.float$);
        }
        case METHOD_COPY: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_COPY;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, qPy) {
              var q  = Sk.ffi.remapToJs(qPy);
              quaternion.x = q.x;
              quaternion.y = q.y;
              quaternion.z = q.z;
              quaternion.w = q.w;
              return quaternionPy;
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_COPY);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_COPY);
            });
          }, METHOD_COPY, []));
        }
        case METHOD_SET_FROM_AXIS_ANGLE: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_SET_FROM_AXIS_ANGLE;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, axisPy, anglePy) {
              var axis = Sk.ffi.remapToJs(axisPy);
              var angle = Sk.ffi.remapToJs(anglePy);
              quaternion[METHOD_SET_FROM_AXIS_ANGLE](axis, angle);
              return quaternionPy;
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET_FROM_AXIS_ANGLE);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET_FROM_AXIS_ANGLE);
            });
          }, METHOD_SET_FROM_AXIS_ANGLE, []));
        }
        case METHOD_SET_FROM_EULER: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_SET_FROM_EULER;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, vectorPy, orderPy) {
              var vector = Sk.ffi.remapToJs(vectorPy);
              var order = Sk.ffi.remapToJs(orderPy);
              quaternion[METHOD_SET_FROM_EULER](vector, order);
              return quaternionPy;
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET_FROM_EULER);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET_FROM_EULER);
            });
          }, METHOD_SET_FROM_EULER, []));
        }
        case METHOD_SET: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_SET;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, x, y, z, w) {
              quaternion.x = Sk.ffi.remapToJs(x);
              quaternion.y = Sk.ffi.remapToJs(y);
              quaternion.z = Sk.ffi.remapToJs(z);
              quaternion.w = Sk.ffi.remapToJs(w);
              return quaternionPy;
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET);
            });
          }, METHOD_SET, []));
        }
        case METHOD_CLONE: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_CLONE;
            });
            $loc.__call__ = new Sk.builtin.func(function(self) {
              return wxyzToPy(quaternion.w, quaternion.x, quaternion.y, quaternion.z);
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_CLONE);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_CLONE);
            });
          }, METHOD_CLONE, []));
        }
        case METHOD_CONJUGATE: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_CONJUGATE;
            });
            $loc.__call__ = new Sk.builtin.func(function(self) {
              quaternion[METHOD_CONJUGATE]();
              return quaternionPy;
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_CONJUGATE);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_CONJUGATE);
            });
          }, METHOD_CONJUGATE, []));
        }
        case METHOD_INVERSE: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_INVERSE;
            });
            $loc.__call__ = new Sk.builtin.func(function(self) {
              var k = 1.0 / quaternion.lengthSq();
              quaternion[METHOD_CONJUGATE]();
              quaternion.w *= k;
              quaternion.x *= k;
              quaternion.y *= k;
              quaternion.z *= k;
              return quaternionPy;
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_INVERSE);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_INVERSE);
            });
          }, METHOD_INVERSE, []));
        }
        case METHOD_LENGTH: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_LENGTH;
            });
            $loc.__call__ = new Sk.builtin.func(function(self) {
              return Sk.builtin.assk$(quaternion[METHOD_LENGTH](), Sk.builtin.nmber.float$);
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_LENGTH);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_LENGTH);
            });
          }, METHOD_LENGTH, []));
        }
        case METHOD_LENGTH_SQ: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_LENGTH_SQ;
            });
            $loc.__call__ = new Sk.builtin.func(function(self) {
              return Sk.builtin.assk$(quaternion[METHOD_LENGTH_SQ](), Sk.builtin.nmber.float$);
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_LENGTH_SQ);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_LENGTH_SQ);
            });
          }, METHOD_LENGTH_SQ, []));
        }
        case METHOD_NORMALIZE: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_NORMALIZE;
            });
            $loc.__call__ = new Sk.builtin.func(function(self) {
              quaternion[METHOD_NORMALIZE]();
              return quaternionPy;
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_NORMALIZE);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_NORMALIZE);
            });
          }, METHOD_NORMALIZE, []));
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(quaternionPy, name, valuePy) {
      var quaternion = Sk.ffi.remapToJs(quaternionPy);
      var value = Sk.ffi.remapToJs(valuePy);
      switch(name) {
        case PROP_X: {
          quaternion.x = value;
        }
        break;
        case PROP_Y: {
          quaternion.y = value;
        }
        break;
        case PROP_Z: {
          quaternion.z = value;
        }
        break;
        case PROP_W: {
          quaternion.w = value;
        }
        break;
        default: {
          throw new Sk.builtin.AttributeError(name + " is not an attribute of " + QUATERNION);
        }
      }
    });
    $loc.__repr__ = new Sk.builtin.func(function(quaternionPy) {
      var quaternion = Sk.ffi.remapToJs(quaternionPy);
      var args = [quaternion.x, quaternion.y, quaternion.z, quaternion.w];
      return new Sk.builtin.str(QUATERNION + "(" + args.join(", ") + ")");
    });
    $loc.__str__ = new Sk.builtin.func(function(quaternionPy) {
      var quaternion = Sk.ffi.remapToJs(quaternionPy);
      if (isDefined(quaternion)) {
        return new Sk.builtin.str(bladeSTR.stringFromCoordinates([quaternion.w, quaternion.x, quaternion.y, quaternion.z], ["1", "i", "j", "k"]));
      }
      else {
        return new Sk.builtin.str("<type '" + QUATERNION + "'>");
      }
    });
  }, QUATERNION, []);

  // Erik Moller's requestAnimationFrame for smart(er) animating
  // Minor formatting changes and use of braces for if conditions.
  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
  // The purpose of this enhanced shim is to 
  (function(scope) {
    if (isDefined(scope)) {
      var lastTime = 0;
      var vendors = ['ms', 'moz', 'webkit', 'o'];
      for(var x = 0; x < vendors.length && !scope.requestAnimationFrame; ++x) {
        scope.requestAnimationFrame = scope[vendors[x]+'RequestAnimationFrame'];
        scope.cancelRequestAnimationFrame = scope[vendors[x]+'CancelRequestAnimationFrame'];
      }

      if (!scope.requestAnimationFrame) {
        scope.requestAnimationFrame = function(callback, element) {
          var currTime = new Date().getTime();
          var timeToCall = Math.max(0, 16 - (currTime - lastTime));
          var id = scope.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
          lastTime = currTime + timeToCall;
          return id;
        };
      }

      if (!scope.cancelAnimationFrame) {
        scope.cancelAnimationFrame = function(id) {
          clearTimeout(id);
        };
      }
    }
  }((typeof window === 'object') ? window : void 0));

   mod[SCENE] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = new Sk.builtin.func(function(self) {
      self.v = new THREE[SCENE]();
      self.tp$name = SCENE;
    });
    $loc.__getattr__ = new Sk.builtin.func(function(scenePy, name) {
      var scene = Sk.ffi.remapToJs(scenePy);
      switch(name) {
        case PROP_POSITION: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(scene[PROP_POSITION], EUCLIDEAN_3));
        }
        case PROP_QUATERNION: {
          return Sk.misceval.callsim(mod[QUATERNION], Sk.ffi.referenceToPy(scene[PROP_QUATERNION], QUATERNION));
        }
        case PROP_ROTATION: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(scene[PROP_ROTATION], EUCLIDEAN_3));
        }
        case PROP_EULER_ORDER: {
          return new Sk.builtin.str(scene[PROP_EULER_ORDER]);
        }
        case PROP_SCALE: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(scene[PROP_SCALE], EUCLIDEAN_3));
        }
        case PROP_UP: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(scene[PROP_UP], EUCLIDEAN_3));
        }
        case PROP_USE_QUATERNION: {
          return scene[PROP_USE_QUATERNION];
        }
        case METHOD_LOOK_AT: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_LOOK_AT;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, vectorPy) {
              scene.lookAt(Sk.ffi.remapToJs(vectorPy));
              return scenePy;
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_LOOK_AT);
            })
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_LOOK_AT);
            })
          }, METHOD_LOOK_AT, []));
        }
        case METHOD_ADD: {
          return methodAdd(scene);
        }
        case METHOD_REMOVE: {
          return methodRemove(scene);
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(scenePy, name, valuePy) {
      var scene = Sk.ffi.remapToJs(scenePy);
      var value = Sk.ffi.remapToJs(valuePy);
      switch(name) {
        case PROP_POSITION: {
          scene[PROP_POSITION] = value;
        }
        break;
        case PROP_QUATERNION: {
          scene[PROP_QUATERNION] = value;
        }
        break;
        case PROP_ROTATION: {
          scene[PROP_ROTATION] = value;
        }
        break;
        case PROP_EULER_ORDER: {
          if (isString(value)) {
            scene[PROP_EULER_ORDER] = value;
          }
          else {
            throw new Error(name + " must be a string");
          }
        }
        break;
        case PROP_SCALE: {
          scene[PROP_SCALE] = value;
        }
        break;
        case PROP_UP: {
          scene[PROP_UP] = value;
        }
        break;
        case PROP_USE_QUATERNION: {
          scene[PROP_USE_QUATERNION] = value;
        }
        break;
        default: {
          throw new Error(name + " is not a write attribute of " + SCENE);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(self) {
      return new Sk.builtin.str(SCENE);
    });
  }, SCENE, []);

  mod[CANVAS_RENDERER] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    var PROP_AUTO_CLEAR   = "autoClear";
    var PROP_CLEAR_COLOR  = "clearColor";
    var PROP_DOM_ELEMENT  = "domElement";
    var PROP_GAMMA_INPUT  = "gammaInput";
    var PROP_GAMMA_OUTPUT = "gammaOutput";
    var PROP_SORT_OBJECTS = "sortObjects";
    $loc.__init__ = new Sk.builtin.func(function(self, parameters) {
      self.tp$name = CANVAS_RENDERER;
      parameters = Sk.ffi.remapToJs(parameters);
      self.v = new THREE[CANVAS_RENDERER](parameters);
    });
    $loc.setSize = new Sk.builtin.func(function(self, width, height) {
      self.v.setSize(Sk.builtin.asnum$(width), Sk.builtin.asnum$(height));
    });
    $loc.__getattr__ = new Sk.builtin.func(function(self, name) {
      var METHOD_RENDER = "render";
      var METHOD_GET_CLEAR_COLOR = "getClearColor";
      var METHOD_SET_CLEAR_COLOR = "setClearColor";
      var METHOD_SET_SIZE        = "setSize";
      var renderer  = Sk.ffi.remapToJs(self);
      switch(name) {
        case PROP_AUTO_CLEAR: {
          return renderer[PROP_AUTO_CLEAR];
        }
        case PROP_GAMMA_INPUT: {
          return renderer[PROP_GAMMA_INPUT];
        }
        case PROP_GAMMA_OUTPUT: {
          return renderer[PROP_GAMMA_OUTPUT];
        }
        case PROP_SORT_OBJECTS: {
          return renderer[PROP_SORT_OBJECTS];
        }
        case PROP_DOM_ELEMENT: {
          // TODO: I think duck-typing means that this will work as long as we don't
          // try to do anything more ambitious.
          return {v: renderer.domElement};
        }
        case METHOD_RENDER: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_RENDER;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, scene, camera) {
              scene  = Sk.ffi.remapToJs(scene);
              camera = Sk.ffi.remapToJs(camera);
              renderer.render(scene, camera);
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_RENDER);
            })
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_RENDER);
            })
          }, METHOD_RENDER, []));
        }
        case METHOD_GET_CLEAR_COLOR: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_GET_CLEAR_COLOR;
            });
            $loc.__call__ = new Sk.builtin.func(function(self) {
              return Sk.misceval.callsim(mod[COLOR], Sk.ffi.referenceToPy(renderer.getClearColor(), COLOR));
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_GET_CLEAR_COLOR);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_GET_CLEAR_COLOR);
            });
          }, METHOD_GET_CLEAR_COLOR, []));
        }
        case METHOD_SET_CLEAR_COLOR: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_SET_CLEAR_COLOR;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, color, alpha) {
              color  = Sk.ffi.remapToJs(color);
              alpha = Sk.ffi.remapToJs(alpha);
              renderer.setClearColor(color, alpha);
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET_CLEAR_COLOR);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET_CLEAR_COLOR);
            });
          }, METHOD_SET_CLEAR_COLOR, []));
        }
        case METHOD_SET_SIZE: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_SET_SIZE;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, width, height, updateStyle) {
              width  = Sk.ffi.remapToJs(width);
              height = Sk.ffi.remapToJs(height);
              updateStyle = Sk.ffi.remapToJs(updateStyle);
              renderer.setSize(width, height, updateStyle);
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET_SIZE);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET_SIZE);
            });
          }, METHOD_SET_SIZE, []));
        }
        default: {
          // The framework will raise an AttributeError exception.
          return /* undefined */;
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(self, name, value) {
      var renderer  = Sk.ffi.remapToJs(self);
      value = Sk.ffi.remapToJs(value);
      switch(name) {
        case PROP_AUTO_CLEAR: {
          if (isBoolean(value)) {
            renderer[PROP_AUTO_CLEAR] = value;
          }
          else {
            throw new Sk.builtin.TypeError("'" + PROP_AUTO_CLEAR + "' attribute must be a <type 'bool'>.");
          }
        }
        break;
        case PROP_GAMMA_INPUT: {
          if (isBoolean(value)) {
            renderer[PROP_GAMMA_INPUT] = value;
          }
          else {
            throw new Sk.builtin.TypeError("'" + PROP_GAMMA_INPUT + "' attribute must be a <type 'bool'>.");
          }
        }
        break;
        case PROP_GAMMA_OUTPUT: {
          if (isBoolean(value)) {
            renderer[PROP_GAMMA_OUTPUT] = value;
          }
          else {
            throw new Sk.builtin.TypeError("'" + PROP_GAMMA_OUTPUT + "' attribute must be a <type 'bool'>.");
          }
        }
        break;
        case PROP_SORT_OBJECTS: {
          if (isBoolean(value)) {
            renderer[PROP_SORT_OBJECTS] = value;
          }
          else {
            throw new Sk.builtin.TypeError("'" + PROP_SORT_OBJECTS + "' attribute must be a <type 'bool'>.");
          }
        }
        break;
        case "size": {
          var width  = Sk.builtin.asnum$(value[0]);
          var height = Sk.builtin.asnum$(value[1]);
          renderer.setSize(width, height);
        }
        break;
        default: {
          throw new Error(name + " is not an attribute of " + CANVAS_RENDERER);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(self) {
      var renderer = self.v;
      var args = {};
      args[PROP_AUTO_CLEAR] = renderer[PROP_AUTO_CLEAR];
      args[PROP_GAMMA_INPUT] = renderer[PROP_GAMMA_INPUT];
      args[PROP_GAMMA_OUTPUT] = renderer[PROP_GAMMA_OUTPUT];
      return new Sk.builtin.str(CANVAS_RENDERER + "(" + JSON.stringify(args) + ")");
    });
    $loc.__repr__ = new Sk.builtin.func(function(self) {
      var renderer = self.v;
      var autoClear = renderer[PROP_AUTO_CLEAR];
      // Note: The WebGLRenderer takes only one argument, but it is a dictionary.
      var args = [{"autoClear": autoClear}];
      return new Sk.builtin.str(CANVAS_RENDERER + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
  }, CANVAS_RENDERER, []);

  mod[WEBGL_RENDERER] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    var PROP_AUTO_CLEAR   = "autoClear";
    var PROP_CLEAR_COLOR  = "clearColor";
    var PROP_DOM_ELEMENT  = "domElement";
    var PROP_GAMMA_INPUT  = "gammaInput";
    var PROP_GAMMA_OUTPUT = "gammaOutput";
    var PROP_SORT_OBJECTS = "sortObjects";
    $loc.__init__ = new Sk.builtin.func(function(self, parameters) {
      self.tp$name = WEBGL_RENDERER;
      parameters = Sk.ffi.remapToJs(parameters);
      self.v = new THREE[WEBGL_RENDERER](parameters);
    });
    $loc.setSize = new Sk.builtin.func(function(self, width, height) {
      self.v.setSize(Sk.builtin.asnum$(width), Sk.builtin.asnum$(height));
    });
    $loc.__getattr__ = new Sk.builtin.func(function(self, name) {
      var METHOD_RENDER = "render";
      var METHOD_GET_CLEAR_COLOR = "getClearColor";
      var METHOD_SET_CLEAR_COLOR = "setClearColor";
      var METHOD_SET_SIZE        = "setSize";
      var renderer  = Sk.ffi.remapToJs(self);
      switch(name) {
        case PROP_AUTO_CLEAR: {
          return renderer[PROP_AUTO_CLEAR];
        }
        case PROP_GAMMA_INPUT: {
          return renderer[PROP_GAMMA_INPUT];
        }
        case PROP_GAMMA_OUTPUT: {
          return renderer[PROP_GAMMA_OUTPUT];
        }
        case PROP_SORT_OBJECTS: {
          return renderer[PROP_SORT_OBJECTS];
        }
        case PROP_DOM_ELEMENT: {
          // TODO: I think duck-typing means that this will work as long as we don't
          // try to do anything more ambitious.
          return {v: renderer.domElement};
        }
        case METHOD_RENDER: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_RENDER;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, scene, camera) {
              scene  = Sk.ffi.remapToJs(scene);
              camera = Sk.ffi.remapToJs(camera);
              renderer.render(scene, camera);
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_RENDER);
            })
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_RENDER);
            })
          }, METHOD_RENDER, []));
        }
        case METHOD_GET_CLEAR_COLOR: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_GET_CLEAR_COLOR;
            });
            $loc.__call__ = new Sk.builtin.func(function(self) {
              return Sk.misceval.callsim(mod[COLOR], Sk.ffi.referenceToPy(renderer.getClearColor()));
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_GET_CLEAR_COLOR);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_GET_CLEAR_COLOR);
            });
          }, METHOD_GET_CLEAR_COLOR, []));
        }
        case METHOD_SET_CLEAR_COLOR: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_SET_CLEAR_COLOR;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, color, alpha) {
              color  = Sk.ffi.remapToJs(color);
              alpha = Sk.ffi.remapToJs(alpha);
              renderer.setClearColor(color, alpha);
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET_CLEAR_COLOR);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET_CLEAR_COLOR);
            });
          }, METHOD_SET_CLEAR_COLOR, []));
        }
        case METHOD_SET_SIZE: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_SET_SIZE;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, width, height, updateStyle) {
              width  = Sk.ffi.remapToJs(width);
              height = Sk.ffi.remapToJs(height);
              updateStyle = Sk.ffi.remapToJs(updateStyle);
              renderer.setSize(width, height, updateStyle);
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET_SIZE);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET_SIZE);
            });
          }, METHOD_SET_SIZE, []));
        }
        default: {
          // The framework will raise an AttributeError exception.
          return /* undefined */;
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(self, name, value) {
      var renderer  = Sk.ffi.remapToJs(self);
      value = Sk.ffi.remapToJs(value);
      switch(name) {
        case PROP_AUTO_CLEAR: {
          if (isBoolean(value)) {
            renderer[PROP_AUTO_CLEAR] = value;
          }
          else {
            throw new Sk.builtin.TypeError("'" + PROP_AUTO_CLEAR + "' attribute must be a <type 'bool'>.");
          }
        }
        break;
        case PROP_GAMMA_INPUT: {
          if (isBoolean(value)) {
            renderer[PROP_GAMMA_INPUT] = value;
          }
          else {
            throw new Sk.builtin.TypeError("'" + PROP_GAMMA_INPUT + "' attribute must be a <type 'bool'>.");
          }
        }
        break;
        case PROP_GAMMA_OUTPUT: {
          if (isBoolean(value)) {
            renderer[PROP_GAMMA_OUTPUT] = value;
          }
          else {
            throw new Sk.builtin.TypeError("'" + PROP_GAMMA_OUTPUT + "' attribute must be a <type 'bool'>.");
          }
        }
        break;
        case PROP_SORT_OBJECTS: {
          if (isBoolean(value)) {
            renderer[PROP_SORT_OBJECTS] = value;
          }
          else {
            throw new Sk.builtin.TypeError("'" + PROP_SORT_OBJECTS + "' attribute must be a <type 'bool'>.");
          }
        }
        break;
        case "size": {
          var width  = Sk.builtin.asnum$(value[0]);
          var height = Sk.builtin.asnum$(value[1]);
          renderer.setSize(width, height);
        }
        break;
        default: {
          throw new Error(name + " is not an attribute of " + WEBGL_RENDERER);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(self) {
      var renderer = self.v;
      var args = {};
      args[PROP_AUTO_CLEAR] = renderer[PROP_AUTO_CLEAR];
      args[PROP_GAMMA_INPUT] = renderer[PROP_GAMMA_INPUT];
      args[PROP_GAMMA_OUTPUT] = renderer[PROP_GAMMA_OUTPUT];
      return new Sk.builtin.str(WEBGL_RENDERER + "(" + JSON.stringify(args) + ")");
    });
    $loc.__repr__ = new Sk.builtin.func(function(self) {
      var renderer = self.v;
      var autoClear = renderer[PROP_AUTO_CLEAR];
      // Note: The WebGLRenderer takes only one argument, but it is a dictionary.
      var args = [{"autoClear": autoClear}];
      return new Sk.builtin.str(WEBGL_RENDERER + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
  }, WEBGL_RENDERER, []);

  mod[COLOR] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    var PROP_R = "r";
    var PROP_G = "g";
    var PROP_B = "b";
    $loc.__init__ = new Sk.builtin.func(function(self, value) {
      value = Sk.ffi.remapToJs(value);
      self.tp$name = COLOR;
      if (isUndefined(value)) {
        self.v = new THREE.Color();
      }
      else {
        if (isNumber(value) || isString(value)) {
          self.v = new THREE.Color(value);
        }
        else if (isColor(value)) {
          self.v = new THREE.Color(value);
        }
        else {
          throw new Sk.builtin.AssertionError("value must be either a number, string or Color.");
        }
      }
    });
    $loc.__getattr__ = new Sk.builtin.func(function(colorPy, name) {
      var color = Sk.ffi.remapToJs(colorPy);
      switch(name) {
        case PROP_R: {
          return Sk.builtin.assk$(color[PROP_R], Sk.builtin.nmber.float$);
        }
        case PROP_G: {
          return Sk.builtin.assk$(color[PROP_G], Sk.builtin.nmber.float$);
        }
        case PROP_B: {
          return Sk.builtin.assk$(color[PROP_B], Sk.builtin.nmber.float$);
        }
        case METHOD_SET_RGB: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_SET_RGB;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, rPy, gPy, bPy) {
              var r  = Sk.ffi.remapToJs(rPy);
              var g  = Sk.ffi.remapToJs(gPy);
              var b  = Sk.ffi.remapToJs(bPy);
              color.setRGB(r, g, b);
              return colorPy;
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET_RGB);
            });
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET_RGB);
            });
          }, METHOD_SET_RGB, []));
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(colorPy, name, valuePy) {
      var color = Sk.ffi.remapToJs(colorPy);
      var value = Sk.ffi.remapToJs(valuePy);
      switch(name) {
        case PROP_R: {
          color[PROP_R] = value;
        }
        break;
        case PROP_G: {
          color[PROP_G] = value;
        }
        break;
        case PROP_B: {
          color[PROP_B] = value;
        }
        break;
        default: {
          throw new Sk.builtin.AttributeError(name + " is not an attribute of " + COLOR);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(self) {
      var color = self.v;
      var args = {};
      args[PROP_R] = color[PROP_R];
      args[PROP_G] = color[PROP_G];
      args[PROP_B] = color[PROP_B];
      return new Sk.builtin.str(COLOR + "(" + JSON.stringify(args) + ")");
    });
    $loc.__repr__ = new Sk.builtin.func(function(self) {
      var color = self.v;
      var r = color[PROP_R];
      var g = color[PROP_G];
      var b = color[PROP_B];
      var args = [r, g, b];
      return new Sk.builtin.str(COLOR + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
  }, COLOR, []);

  mod[PERSPECTIVE_CAMERA] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = new Sk.builtin.func(function(self, fov, aspect, near, far) {
      var fieldOfView = Sk.builtin.asnum$(fov)
      var aspectRatio = Sk.builtin.asnum$(aspect)
      var nearPlane = Sk.builtin.asnum$(near)
      var farPlane = Sk.builtin.asnum$(far)
      self.v = new THREE[PERSPECTIVE_CAMERA](fieldOfView, aspectRatio, nearPlane, farPlane);
      self.tp$name = PERSPECTIVE_CAMERA;
    });

    $loc.__getattr__ = new Sk.builtin.func(function(cameraPy, name) {
      camera = Sk.ffi.remapToJs(cameraPy);
      var UPDATE_PROJECTION_MATRIX = "updateProjectionMatrix"
      switch(name) {
        case "aspect": {
          return Sk.builtin.assk$(camera.aspect, Sk.builtin.nmber.float$);
        }
        case PROP_POSITION: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(camera[PROP_POSITION], EUCLIDEAN_3));
        }
        case PROP_QUATERNION: {
          return Sk.misceval.callsim(mod[QUATERNION], Sk.ffi.referenceToPy(camera[PROP_QUATERNION], QUATERNION));
        }
        case PROP_ROTATION: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(camera[PROP_ROTATION], EUCLIDEAN_3));
        }
        case PROP_EULER_ORDER: {
          return new Sk.builtin.str(camera[PROP_EULER_ORDER]);
        }
        case PROP_SCALE: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(camera[PROP_SCALE], EUCLIDEAN_3));
        }
        case PROP_UP: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(camera[PROP_UP], EUCLIDEAN_3));
        }
        case PROP_USE_QUATERNION: {
          return camera[PROP_USE_QUATERNION];
        }
        case METHOD_LOOK_AT: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_LOOK_AT;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, vectorPy) {
              camera.lookAt(Sk.ffi.remapToJs(vectorPy));
              return cameraPy;
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_LOOK_AT);
            })
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_LOOK_AT);
            })
          }, METHOD_LOOK_AT, []));
        }
        case UPDATE_PROJECTION_MATRIX: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {

            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = UPDATE_PROJECTION_MATRIX;
            });

            $loc.__call__ = new Sk.builtin.func(function(self) {
              camera[name]();
            });

            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(UPDATE_PROJECTION_MATRIX)
            })

            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(UPDATE_PROJECTION_MATRIX)
            })

          }, UPDATE_PROJECTION_MATRIX, []));
        }
        default: {
          return;
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(cameraPy, name, valuePy) {
      var camera = Sk.ffi.remapToJs(cameraPy);
      var value = Sk.ffi.remapToJs(valuePy);
      switch(name) {
        case "aspect": {
          camera.aspect = value;
        }
        break;
        case PROP_POSITION: {
          camera[PROP_POSITION] = value;
        }
        break;
        case PROP_QUATERNION: {
          camera[PROP_QUATERNION] = value;
        }
        break;
        case PROP_ROTATION: {
          camera[PROP_ROTATION] = value;
        }
        break;
        case PROP_EULER_ORDER: {
          if (isString(value)) {
            camera[PROP_EULER_ORDER] = value;
          }
          else {
            throw new Error(name + " must be a string");
          }
        }
        break;
        case PROP_SCALE: {
          camera[PROP_SCALE] = value;
        }
        break;
        case PROP_UP: {
          camera[PROP_UP] = value;
        }
        break;
        case PROP_USE_QUATERNION: {
          camera[PROP_USE_QUATERNION] = value;
        }
        break;
        default: {
          throw new Sk.builtin.AssertionError(name + " is not an attribute of " + PERSPECTIVE_CAMERA);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(self) {
      return new Sk.builtin.str(PERSPECTIVE_CAMERA);
    });
  }, PERSPECTIVE_CAMERA, []);

  mod[ORTHOGRAPHIC_CAMERA] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = new Sk.builtin.func(function(self, leftPy, rightPy, topPy, bottomPy, nearPy, farPy) {
      var left = Sk.builtin.asnum$(leftPy)
      var right = Sk.builtin.asnum$(rightPy)
      var top = Sk.builtin.asnum$(topPy)
      var bottom = Sk.builtin.asnum$(bottomPy)
      var near = Sk.builtin.asnum$(nearPy)
      var far = Sk.builtin.asnum$(farPy)
      self.v = new THREE[ORTHOGRAPHIC_CAMERA](left, right, top, bottom, near, far);
      self.tp$name = ORTHOGRAPHIC_CAMERA;
    });

    $loc.__getattr__ = new Sk.builtin.func(function(cameraPy, name) {
      camera = Sk.ffi.remapToJs(cameraPy);
      var UPDATE_PROJECTION_MATRIX = "updateProjectionMatrix"
      switch(name) {
        case "aspect": {
          return Sk.builtin.assk$(camera.aspect, Sk.builtin.nmber.float$);
        }
        case PROP_POSITION: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(camera[PROP_POSITION]));
        }
        case PROP_QUATERNION: {
          return Sk.misceval.callsim(mod[QUATERNION], Sk.ffi.referenceToPy(camera[PROP_QUATERNION]));
        }
        case PROP_ROTATION: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(camera[PROP_ROTATION]));
        }
        case PROP_EULER_ORDER: {
          return new Sk.builtin.str(camera[PROP_EULER_ORDER]);
        }
        case PROP_SCALE: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(camera[PROP_SCALE]));
        }
        case PROP_UP: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(camera[PROP_UP]));
        }
        case PROP_USE_QUATERNION: {
          return camera[PROP_USE_QUATERNION];
        }
        case METHOD_LOOK_AT: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_LOOK_AT;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, vectorPy) {
              camera.lookAt(Sk.ffi.remapToJs(vectorPy));
              return cameraPy;
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_LOOK_AT);
            })
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_LOOK_AT);
            })
          }, METHOD_LOOK_AT, []));
        }
        case UPDATE_PROJECTION_MATRIX: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {

            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = UPDATE_PROJECTION_MATRIX;
            });

            $loc.__call__ = new Sk.builtin.func(function(self) {
              camera[name]();
            });

            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(UPDATE_PROJECTION_MATRIX)
            })

            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(UPDATE_PROJECTION_MATRIX)
            })

          }, UPDATE_PROJECTION_MATRIX, []));
        }
        default: {
          return;
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(cameraPy, name, valuePy) {
      var camera = Sk.ffi.remapToJs(cameraPy);
      var value = Sk.ffi.remapToJs(valuePy);
      switch(name) {
        case PROP_LEFT: {
          camera[PROP_LEFT] = value;
        }
        break;
        case PROP_RIGHT: {
          camera[PROP_RIGHT] = value;
        }
        break;
        case PROP_TOP: {
          camera[PROP_TOP] = value;
        }
        break;
        case PROP_BOTTOM: {
          camera[PROP_BOTTOM] = value;
        }
        break;
        case PROP_POSITION: {
          camera[PROP_POSITION] = value;
        }
        break;
        case PROP_QUATERNION: {
          camera[PROP_QUATERNION] = value;
        }
        break;
        case PROP_ROTATION: {
          camera[PROP_ROTATION] = value;
        }
        break;
        case PROP_EULER_ORDER: {
          if (isString(value)) {
            camera[PROP_EULER_ORDER] = value;
          }
          else {
            throw new Error(name + " must be a string");
          }
        }
        break;
        case PROP_SCALE: {
          camera[PROP_SCALE] = value;
        }
        break;
        case PROP_UP: {
          camera[PROP_UP] = value;
        }
        break;
        case PROP_USE_QUATERNION: {
          camera[PROP_USE_QUATERNION] = value;
        }
        break;
        default: {
          throw new Sk.builtin.AssertionError(name + " is not an attribute of " + ORTHOGRAPHIC_CAMERA);
        }
      }
    });
    $loc.__repr__ = new Sk.builtin.func(function(cameraPy) {
      var camera = Sk.ffi.remapToJs(cameraPy);
      var args = [camera[PROP_LEFT], camera[PROP_RIGHT], camera[PROP_TOP], camera[PROP_BOTTOM], camera[PROP_NEAR], camera[PROP_FAR]];
      return new Sk.builtin.str(ORTHOGRAPHIC_CAMERA + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
    $loc.__str__ = new Sk.builtin.func(function(self) {
      return new Sk.builtin.str(ORTHOGRAPHIC_CAMERA);
    });
  }, ORTHOGRAPHIC_CAMERA, []);

  mod[ARROW_GEOMETRY] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = new Sk.builtin.func(function(self, length, segments, radiusShaft, radiusCone, lengthCone) {
      length = Sk.ffi.remapToJs(length) || 1;
      segments = Sk.ffi.remapToJs(segments);
      radiusShaft = Sk.ffi.remapToJs(radiusShaft) || 0.01;
      radiusCone = Sk.ffi.remapToJs(radiusCone) || 0.08;
      lengthCone = Sk.ffi.remapToJs(lengthCone) || 0.2;
      var lengthShaft = 1 - lengthCone;
      var a = new THREE.Vector3(0, 0, length);
      var b = new THREE.Vector3(radiusCone, 0, lengthShaft);
      var c = new THREE.Vector3(radiusShaft, 0, lengthShaft);
      var d = new THREE.Vector3(radiusShaft, 0, 0);
      var e = new THREE.Vector3(0, 0, 0);
      var points = [a, b, c, d, e];
      self.v = new THREE.LatheGeometry(points, segments);
      self.tp$name = ARROW_GEOMETRY;
    });
    $loc.__getattr__ = new Sk.builtin.func(function(geometryPy, name) {
      var geometry = Sk.ffi.remapToJs(geometryPy);
      switch(name) {
        case PROP_ID: {
          return Sk.builtin.nmber(geometry[PROP_ID], Sk.builtin.nmber.int$);
        }
        case PROP_NAME: {
          return new Sk.builtin.str(geometry[PROP_NAME]);
        }
        case PROP_VERTICES: {
          return verticesPy(geometry.vertices);
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(geometryPy, name, valuePy) {
      var geometry = Sk.ffi.remapToJs(geometryPy);
      var value = Sk.ffi.remapToJs(valuePy);
      switch(name) {
        case PROP_NAME: {
          if (isString(value)) {
            geometry[PROP_NAME] = value;
          }
          else {
            throw new Error(name + " must be a string");
          }
        }
        break;
        default: {
          throw new Error(name + " is not an attribute of " + ARROW_GEOMETRY);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(self) {
      var geometry = Sk.ffi.remapToJs(self);
      var args = {};
      return new Sk.builtin.str(ARROW_GEOMETRY + "(" + JSON.stringify(args) + ")");
    });
    $loc.__repr__ = new Sk.builtin.func(function(self) {
      var geometry = Sk.ffi.remapToJs(self);
      var args = [];
      return new Sk.builtin.str(ARROW_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
  }, ARROW_GEOMETRY, []);

   mod[CIRCLE_GEOMETRY] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = new Sk.builtin.func(function(self, radius, segments, thetaStart, thetaLength) {
      radius      = numberFromArg(radius,          PROP_RADIUS,       CIRCLE_GEOMETRY);
      segments    = numberFromIntegerArg(segments, PROP_SEGMENTS,     CIRCLE_GEOMETRY);
      thetaStart  = numberFromArg(thetaStart,      PROP_THETA_START,  CIRCLE_GEOMETRY);
      thetaLength = numberFromArg(thetaLength,     PROP_THETA_LENGTH, CIRCLE_GEOMETRY);
      self.v = new THREE[CIRCLE_GEOMETRY](radius, segments, thetaStart, thetaLength);
      self.tp$name = CIRCLE_GEOMETRY;
    });
    $loc.__getattr__ = new Sk.builtin.func(function(self, name) {
      switch(name) {
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(geometryPy, name, valuePy) {
      var geometry = Sk.ffi.remapToJs(geometryPy);
      var value = Sk.ffi.remapToJs(valuePy);
      switch(name) {
        default: {
          throw new Error(name + " is not an attribute of " + CIRCLE_GEOMETRY);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(self) {
      var sphere = self.v;
      var args = {};
      return new Sk.builtin.str(CIRCLE_GEOMETRY + "(" + JSON.stringify(args) + ")");
    });
    $loc.__repr__ = new Sk.builtin.func(function(self) {
      var sphere = self.v;
      var args = [];
      return new Sk.builtin.str(CIRCLE_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
  }, CIRCLE_GEOMETRY, []);

   mod[CUBE_GEOMETRY] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    var PROP_WIDTH           = "width";
    var PROP_HEIGHT          = "height";
    var PROP_DEPTH           = "depth";
    var PROP_WIDTH_SEGMENTS  = "widthSegments";
    var PROP_HEIGHT_SEGMENTS = "heightSegments";
    var PROP_DEPTH_SEGMENTS  = "depthSegments";
    $loc.__init__ = new Sk.builtin.func(function(self, width, height, depth, widthSegments, heightSegments, depthSegments) {
      width          = numberFromArg(width,                 PROP_WIDTH,           CUBE_GEOMETRY);
      height         = numberFromArg(height,                PROP_HEIGHT,          CUBE_GEOMETRY);
      depth          = numberFromArg(depth,                 PROP_DEPTH,           CUBE_GEOMETRY);
      widthSegments  = numberFromIntegerArg(widthSegments,  PROP_WIDTH_SEGMENTS,  CUBE_GEOMETRY);
      heightSegments = numberFromIntegerArg(heightSegments, PROP_HEIGHT_SEGMENTS, CUBE_GEOMETRY);
      depthSegments  = numberFromIntegerArg(depthSegments,  PROP_DEPTH_SEGMENTS,  CUBE_GEOMETRY);
      self.v = new THREE[CUBE_GEOMETRY](width, height, depth, widthSegments, heightSegments, depthSegments);
      self.tp$name = CUBE_GEOMETRY;
    });
    $loc.__getattr__ = new Sk.builtin.func(function(self, name) {
      switch(name) {
        case PROP_WIDTH: {
          return Sk.builtin.assk$(self.v[PROP_WIDTH], Sk.builtin.nmber.float$);
        }
        case PROP_HEIGHT: {
          return Sk.builtin.assk$(self.v[PROP_HEIGHT], Sk.builtin.nmber.float$);
        }
        case PROP_DEPTH: {
          return Sk.builtin.assk$(self.v[PROP_DEPTH], Sk.builtin.nmber.float$);
        }
        case PROP_WIDTH_SEGMENTS: {
          return Sk.builtin.assk$(self.v[PROP_WIDTH_SEGMENTS], Sk.builtin.nmber.int$);
        }
        case PROP_HEIGHT_SEGMENTS: {
          return Sk.builtin.assk$(self.v[PROP_HEIGHT_SEGMENTS], Sk.builtin.nmber.int$);
        }
        case PROP_DEPTH_SEGMENTS: {
          return Sk.builtin.assk$(self.v[PROP_DEPTH_SEGMENTS], Sk.builtin.nmber.int$);
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(geometryPy, name, valuePy) {
      var geometry = Sk.ffi.remapToJs(geometryPy);
      var value = Sk.ffi.remapToJs(valuePy);
      switch(name) {
        default: {
          throw new Error(name + " is not an attribute of " + CUBE_GEOMETRY);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(self) {
      var cube = self.v;
      var args = {};
      args[PROP_WIDTH]  = cube[PROP_WIDTH];
      args[PROP_HEIGHT] = cube[PROP_HEIGHT];
      args[PROP_DEPTH]  = cube[PROP_DEPTH];
      return new Sk.builtin.str(CUBE_GEOMETRY + "(" + JSON.stringify(args) + ")");
    });
    $loc.__repr__ = new Sk.builtin.func(function(self) {
      var cube = self.v;
      var width          = cube[PROP_WIDTH];
      var height         = cube[PROP_HEIGHT];
      var depth          = cube[PROP_DEPTH];
      var widthSegments  = cube[PROP_WIDTH_SEGMENTS];
      var heightSegments = cube[PROP_HEIGHT_SEGMENTS];
      var depthSegments  = cube[PROP_DEPTH_SEGMENTS];
      var args = [width, height, depth, widthSegments, heightSegments, depthSegments];
      return new Sk.builtin.str(CUBE_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
  }, CUBE_GEOMETRY, []);

  mod[CYLINDER_GEOMETRY] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    var PROP_RADIUS_TOP      = "radiusTop";
    var PROP_RADIUS_BOTTOM   = "radiusBottom";
    var PROP_HEIGHT          = "height";
    var PROP_RADIUS_SEGMENTS = "radiusSegments";
    var PROP_HEIGHT_SEGMENTS = "heightSegments";
    var PROP_OPEN_ENDED      = "openEnded";
    $loc.__init__ = new Sk.builtin.func(function(self, radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded) {
      radiusTop      = numberFromArg(radiusTop,             PROP_RADIUS_TOP,      CYLINDER_GEOMETRY);
      radiusBottom   = numberFromArg(radiusBottom,          PROP_RADIUS_BOTTOM,   CYLINDER_GEOMETRY);
      height         = numberFromArg(height,                PROP_HEIGHT,          CYLINDER_GEOMETRY);
      radiusSegments = numberFromIntegerArg(radiusSegments, PROP_RADIUS_SEGMENTS, CYLINDER_GEOMETRY);
      heightSegments = numberFromIntegerArg(heightSegments, PROP_HEIGHT_SEGMENTS, CYLINDER_GEOMETRY);
      openEnded      = Sk.ffi.remapToJs(openEnded);
      self.v = new THREE[CYLINDER_GEOMETRY](radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded);
      self.tp$name = CYLINDER_GEOMETRY;
    });
    $loc.__getattr__ = new Sk.builtin.func(function(self, name) {
      switch(name) {
        case PROP_RADIUS_TOP: {
          return Sk.builtin.assk$(self.v[PROP_RADIUS_TOP], Sk.builtin.nmber.float$);
        }
        case PROP_RADIUS_BOTTOM: {
          return Sk.builtin.assk$(self.v[PROP_RADIUS_BOTTOM], Sk.builtin.nmber.float$);
        }
        case PROP_HEIGHT: {
          return Sk.builtin.assk$(self.v[PROP_HEIGHT], Sk.builtin.nmber.float$);
        }
        case PROP_RADIUS_SEGMENTS: {
          return Sk.builtin.assk$(self.v[PROP_RADIUS_SEGMENTS], Sk.builtin.nmber.int$);
        }
        case PROP_HEIGHT_SEGMENTS: {
          return Sk.builtin.assk$(self.v[PROP_HEIGHT_SEGMENTS], Sk.builtin.nmber.int$);
        }
        case PROP_OPEN_ENDED: {
          return self.v[PROP_OPEN_ENDED];
        }
        default: {
          // Framework will take care of the error message.
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(geometryPy, name, valuePy) {
      var geometry = Sk.ffi.remapToJs(geometryPy);
      var value = Sk.ffi.remapToJs(valuePy);
      switch(name) {
        default: {
          throw new Error(name + " is not an attribute of " + CYLINDER_GEOMETRY);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(self) {
      var cylinder = self.v;
      var args = {};
      args[PROP_RADIUS_TOP] = cylinder[PROP_RADIUS_TOP];
      args[PROP_RADIUS_BOTTOM] = cylinder[PROP_RADIUS_BOTTOM];
      args[PROP_HEIGHT] = cylinder[PROP_HEIGHT];
      args[PROP_OPEN_ENDED] = cylinder[PROP_OPEN_ENDED];
      // TODO: Need a Python.stringify because Boolean is {True, False} etc.
      return new Sk.builtin.str(CYLINDER_GEOMETRY + "(" + JSON.stringify(args) + ")");
    });
    $loc.__repr__ = new Sk.builtin.func(function(self) {
      var cylinder = self.v;
      var radiusTop      = cylinder[PROP_RADIUS_TOP];
      var radiusBottom   = cylinder[PROP_RADIUS_BOTTOM];
      var height         = cylinder[PROP_HEIGHT];
      var radiusSegments = cylinder[PROP_RADIUS_SEGMENTS];
      var heightSegments = cylinder[PROP_HEIGHT_SEGMENTS];
      var openEnded      = cylinder[PROP_OPEN_ENDED];
      var args = [radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded];
      return new Sk.builtin.str(CYLINDER_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
  }, CYLINDER_GEOMETRY, []);

  mod[LATHE_GEOMETRY] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = new Sk.builtin.func(function(self, pointsPy, segmentsPy, phiStart, phiLength) {
      var points = Sk.ffi.remapToJs(pointsPy);
      var segments = Sk.ffi.remapToJs(segmentsPy);
      phiStart = Sk.ffi.remapToJs(phiStart);
      phiLength = Sk.ffi.remapToJs(phiLength);
      self.v = new THREE[LATHE_GEOMETRY](points, segments, phiStart, phiLength);
      self.tp$name = LATHE_GEOMETRY;
    });
    $loc.__getattr__ = new Sk.builtin.func(function(geometryPy, name) {
      var geometry = Sk.ffi.remapToJs(geometryPy);
      switch(name) {
        case PROP_ID: {
          return Sk.builtin.nmber(geometry[PROP_ID], Sk.builtin.nmber.int$);
        }
        case PROP_NAME: {
          return new Sk.builtin.str(geometry[PROP_NAME]);
        }
        case PROP_VERTICES: {
          return verticesPy(geometry.vertices);
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(geometryPy, name, valuePy) {
      var geometry = Sk.ffi.remapToJs(geometryPy);
      var value = Sk.ffi.remapToJs(valuePy);
      switch(name) {
        case PROP_NAME: {
          if (isString(value)) {
            geometry[PROP_NAME] = value;
          }
          else {
            throw new Error(name + " must be a string");
          }
        }
        break;
        default: {
          throw new Error(name + " is not an attribute of " + LATHE_GEOMETRY);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(self) {
      var latheGeometry = self.v;
      var args = {};
      return new Sk.builtin.str(LATHE_GEOMETRY + "(" + JSON.stringify(args) + ")");
    });
    $loc.__repr__ = new Sk.builtin.func(function(self) {
      var latheGeometry = self.v;
      var args = [];
      return new Sk.builtin.str(LATHE_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
  }, LATHE_GEOMETRY, []);

  mod[ICOSAHEDRON_GEOMETRY] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = new Sk.builtin.func(function(self, radius, detail) {
      radius = numberFromArg(radius,        PROP_RADIUS, ICOSAHEDRON_GEOMETRY);
      detail = numberFromIntegerArg(detail, PROP_DETAIL, ICOSAHEDRON_GEOMETRY);
      self.v = new THREE[ICOSAHEDRON_GEOMETRY](radius, detail);
      self.tp$name = ICOSAHEDRON_GEOMETRY;
    });
    $loc.__getattr__ = new Sk.builtin.func(function(self, name) {
      switch(name) {
        case PROP_RADIUS: {
          return Sk.builtin.assk$(self.v[PROP_RADIUS], Sk.builtin.nmber.float$);
        }
        case PROP_DETAIL: {
          return Sk.builtin.assk$(self.v[PROP_DETAIL], Sk.builtin.nmber.int$);
        }
        default: {
          // Framework will take care of the error message.
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(geometryPy, name, valuePy) {
      var geometry = Sk.ffi.remapToJs(geometryPy);
      var value = Sk.ffi.remapToJs(valuePy);
      switch(name) {
        default: {
          throw new Error(name + " is not an attribute of " + ICOSAHEDRON_GEOMETRY);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(self) {
      var icosahedron = self.v;
      var args = {};
      args[PROP_RADIUS] = icosahedron[PROP_RADIUS];
      args[PROP_DETAIL] = icosahedron[PROP_DETAIL];
      return new Sk.builtin.str(ICOSAHEDRON_GEOMETRY + "(" + JSON.stringify(args) + ")");
    });
    $loc.__repr__ = new Sk.builtin.func(function(self) {
      var icosahedron = self.v;
      var radius = icosahedron[PROP_RADIUS];
      var detail = icosahedron[PROP_DETAIL];
      var args = [radius, detail];
      return new Sk.builtin.str(ICOSAHEDRON_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
  }, ICOSAHEDRON_GEOMETRY, []);

  mod[OCTAHEDRON_GEOMETRY] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    var PROP_DETAIL = "detail";
    $loc.__init__ = new Sk.builtin.func(function(self, radius, detail) {
      radius = numberFromArg(radius,        PROP_RADIUS, OCTAHEDRON_GEOMETRY);
      detail = numberFromIntegerArg(detail, PROP_DETAIL, OCTAHEDRON_GEOMETRY);
      self.v = new THREE[OCTAHEDRON_GEOMETRY](radius, detail);
      self.v.radius = radius; // workaround for THREE not caching radius.
      self.v.detail = detail; // workaround for THREE not caching detail.
      self.tp$name = OCTAHEDRON_GEOMETRY;
    });
    $loc.__getattr__ = new Sk.builtin.func(function(self, name) {
      switch(name) {
        case PROP_RADIUS: {
          return Sk.builtin.assk$(self.v[PROP_RADIUS], Sk.builtin.nmber.float$);
        }
        case PROP_DETAIL: {
          return Sk.builtin.assk$(self.v[PROP_DETAIL], Sk.builtin.nmber.int$);
        }
        default: {
          // Framework will take care of the error message.
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(geometryPy, name, valuePy) {
      var geometry = Sk.ffi.remapToJs(geometryPy);
      var value = Sk.ffi.remapToJs(valuePy);
      switch(name) {
        default: {
          throw new Error(name + " is not an attribute of " + OCTAHEDRON_GEOMETRY);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(self) {
      var octahedron = self.v;
      var args = {};
      args[PROP_RADIUS] = octahedron[PROP_RADIUS];
      args[PROP_DETAIL] = octahedron[PROP_DETAIL];
      return new Sk.builtin.str(OCTAHEDRON_GEOMETRY + "(" + JSON.stringify(args) + ")");
    });
    $loc.__repr__ = new Sk.builtin.func(function(self) {
      var octahedron = self.v;
      var radius = octahedron[PROP_RADIUS];
      var detail = octahedron[PROP_DETAIL];
      var args = [radius, detail];
      return new Sk.builtin.str(OCTAHEDRON_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
  }, OCTAHEDRON_GEOMETRY, []);

   mod[PLANE_GEOMETRY] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    var PROP_WIDTH           = "width";
    var PROP_HEIGHT          = "height";
    var PROP_WIDTH_SEGMENTS  = "widthSegments";
    var PROP_HEIGHT_SEGMENTS = "heightSegments";
    $loc.__init__ = new Sk.builtin.func(function(self, width, height, widthSegments, heightSegments) {
      width          = numberFromArg(width,                 PROP_WIDTH,           PLANE_GEOMETRY);
      height         = numberFromArg(height,                PROP_HEIGHT,          PLANE_GEOMETRY);
      widthSegments  = numberFromIntegerArg(widthSegments,  PROP_WIDTH_SEGMENTS,  PLANE_GEOMETRY);
      heightSegments = numberFromIntegerArg(heightSegments, PROP_HEIGHT_SEGMENTS, PLANE_GEOMETRY);
      self.v = new THREE[PLANE_GEOMETRY](width, height, widthSegments, heightSegments);
      self.tp$name = PLANE_GEOMETRY;
    });
    $loc.__getattr__ = new Sk.builtin.func(function(self, name) {
      switch(name) {
        case PROP_WIDTH: {
          return Sk.builtin.assk$(self.v[PROP_WIDTH], Sk.builtin.nmber.float$);
        }
        case PROP_HEIGHT: {
          return Sk.builtin.assk$(self.v[PROP_HEIGHT], Sk.builtin.nmber.float$);
        }
        case PROP_WIDTH_SEGMENTS: {
          return Sk.builtin.assk$(self.v[PROP_WIDTH_SEGMENTS], Sk.builtin.nmber.int$);
        }
        case PROP_HEIGHT_SEGMENTS: {
          return Sk.builtin.assk$(self.v[PROP_HEIGHT_SEGMENTS], Sk.builtin.nmber.int$);
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(geometryPy, name, valuePy) {
      var geometry = Sk.ffi.remapToJs(geometryPy);
      var value = Sk.ffi.remapToJs(valuePy);
      switch(name) {
        default: {
          throw new Error(name + " is not an attribute of " + PLANE_GEOMETRY);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(self) {
      var plane = self.v;
      var args = {};
      args[PROP_WIDTH]  = plane[PROP_WIDTH];
      args[PROP_HEIGHT] = plane[PROP_HEIGHT];
      return new Sk.builtin.str(PLANE_GEOMETRY + "(" + JSON.stringify(args) + ")");
    });
    $loc.__repr__ = new Sk.builtin.func(function(self) {
      var plane = self.v;
      var width          = plane[PROP_WIDTH];
      var height         = plane[PROP_HEIGHT];
      var widthSegments  = plane[PROP_WIDTH_SEGMENTS];
      var heightSegments = plane[PROP_HEIGHT_SEGMENTS];
      var args = [width, height, widthSegments, heightSegments];
      return new Sk.builtin.str(PLANE_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
  }, PLANE_GEOMETRY, []);

   mod[SPHERE_GEOMETRY] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    var PROP_WIDTH_SEGMENTS  = "widthSegments";
    var PROP_HEIGHT_SEGMENTS = "heightSegments";
    var PROP_PHI_START       = "phiStart";
    var PROP_PHI_LENGTH      = "phiLength";
    $loc.__init__ = new Sk.builtin.func(function(self, radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {
      radius         = numberFromArg(radius,                PROP_RADIUS,          SPHERE_GEOMETRY);
      widthSegments  = numberFromIntegerArg(widthSegments,  PROP_WIDTH_SEGMENTS,  SPHERE_GEOMETRY);
      heightSegments = numberFromIntegerArg(heightSegments, PROP_HEIGHT_SEGMENTS, SPHERE_GEOMETRY);
      phiStart       = numberFromArg(phiStart,              PROP_PHI_START,       SPHERE_GEOMETRY);
      phiLength      = numberFromArg(phiLength,             PROP_PHI_LENGTH,      SPHERE_GEOMETRY);
      thetaStart     = numberFromArg(thetaStart,            PROP_THETA_START,     SPHERE_GEOMETRY);
      thetaLength    = numberFromArg(thetaLength,           PROP_THETA_LENGTH,    SPHERE_GEOMETRY);
      self.v = new THREE[SPHERE_GEOMETRY](radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
      self.tp$name = SPHERE_GEOMETRY;
    });
    $loc.__getattr__ = new Sk.builtin.func(function(self, name) {
      switch(name) {
        case PROP_RADIUS: {
          return Sk.builtin.assk$(self.v[PROP_RADIUS], Sk.builtin.nmber.float$);
        }
        case PROP_WIDTH_SEGMENTS: {
          return Sk.builtin.assk$(self.v[PROP_WIDTH_SEGMENTS], Sk.builtin.nmber.int$);
        }
        case PROP_HEIGHT_SEGMENTS: {
          return Sk.builtin.assk$(self.v[PROP_HEIGHT_SEGMENTS], Sk.builtin.nmber.int$);
        }
        case PROP_PHI_START: {
          return Sk.builtin.assk$(self.v[PROP_PHI_START], Sk.builtin.nmber.float$);
        }
        case PROP_PHI_LENGTH: {
          return Sk.builtin.assk$(self.v[PROP_PHI_LENGTH], Sk.builtin.nmber.float$);
        }
        case PROP_THETA_START: {
          return Sk.builtin.assk$(self.v[PROP_THETA_START], Sk.builtin.nmber.float$);
        }
        case PROP_THETA_LENGTH: {
          return Sk.builtin.assk$(self.v[PROP_THETA_LENGTH], Sk.builtin.nmber.float$);
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(geometryPy, name, valuePy) {
      var geometry = Sk.ffi.remapToJs(geometryPy);
      var value = Sk.ffi.remapToJs(valuePy);
      switch(name) {
        default: {
          throw new Error(name + " is not an attribute of " + SPHERE_GEOMETRY);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(self) {
      var sphere = self.v;
      var radius = sphere[PROP_RADIUS];
      var args = {};
      args[PROP_RADIUS] = radius;
      return new Sk.builtin.str(SPHERE_GEOMETRY + "(" + JSON.stringify(args) + ")");
    });
    $loc.__repr__ = new Sk.builtin.func(function(self) {
      var sphere = self.v;
      var radius         = sphere[PROP_RADIUS];
      var widthSegments  = sphere[PROP_WIDTH_SEGMENTS];
      var heightSegments = sphere[PROP_HEIGHT_SEGMENTS];
      var phiStart       = sphere[PROP_PHI_START];
      var phiLength      = sphere[PROP_PHI_LENGTH];
      var thetaStart     = sphere[PROP_THETA_START];
      var thetaLength    = sphere[PROP_THETA_LENGTH];
      var args = [radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength];
      return new Sk.builtin.str(SPHERE_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
  }, SPHERE_GEOMETRY, []);

  mod[TETRAHEDRON_GEOMETRY] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    var PROP_DETAIL = "detail";
    $loc.__init__ = new Sk.builtin.func(function(self, radius, detail) {
      radius = numberFromArg(radius,        PROP_RADIUS, TETRAHEDRON_GEOMETRY);
      detail = numberFromIntegerArg(detail, PROP_DETAIL, TETRAHEDRON_GEOMETRY);
      self.v = new THREE[TETRAHEDRON_GEOMETRY](radius, detail);
      self.v.radius = radius; // workaround for THREE not caching radius.
      self.v.detail = detail; // workaround for THREE not caching detail.
      self.tp$name = TETRAHEDRON_GEOMETRY;
    });
    $loc.__getattr__ = new Sk.builtin.func(function(self, name) {
      switch(name) {
        case PROP_RADIUS: {
          return Sk.builtin.assk$(self.v[PROP_RADIUS], Sk.builtin.nmber.float$);
        }
        case PROP_DETAIL: {
          return Sk.builtin.assk$(self.v[PROP_DETAIL], Sk.builtin.nmber.int$);
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(geometryPy, name, valuePy) {
      var geometry = Sk.ffi.remapToJs(geometryPy);
      var value = Sk.ffi.remapToJs(valuePy);
      switch(name) {
        default: {
          throw new Error(name + " is not an attribute of " + TETRAHEDRON_GEOMETRY);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(self) {
      var tetrahedron = self.v;
      var args = {};
      args[PROP_RADIUS] = tetrahedron[PROP_RADIUS];
      args[PROP_DETAIL] = tetrahedron[PROP_DETAIL];
      return new Sk.builtin.str(TETRAHEDRON_GEOMETRY + "(" + JSON.stringify(args) + ")");
    });
    $loc.__repr__ = new Sk.builtin.func(function(self) {
      var tetrahedron = self.v;
      var radius = tetrahedron[PROP_RADIUS];
      var detail = tetrahedron[PROP_DETAIL];
      var args = [radius, detail];
      return new Sk.builtin.str(TETRAHEDRON_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
  }, TETRAHEDRON_GEOMETRY, []);

   mod[TEXT_GEOMETRY] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = new Sk.builtin.func(function(self, text, parameters) {
      text = Sk.ffi.remapToJs(text);
      parameters = Sk.ffi.remapToJs(parameters);
      self.v = new THREE[TEXT_GEOMETRY](text, parameters);
    });
    $loc.__getattr__ = new Sk.builtin.func(function(self, name) {
      switch(name) {
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(geometryPy, name, valuePy) {
      var geometry = Sk.ffi.remapToJs(geometryPy);
      var value = Sk.ffi.remapToJs(valuePy);
      switch(name) {
        default: {
          throw new Error(name + " is not an attribute of " + TEXT_GEOMETRY);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(self) {
      var text = Sk.ffi.remapToJs(self);
      var args = {};
      return new Sk.builtin.str(TEXT_GEOMETRY + "(" + JSON.stringify(args) + ")");
    });
    $loc.__repr__ = new Sk.builtin.func(function(self) {
      var text = Sk.ffi.remapToJs(self);
      var args = [];
      return new Sk.builtin.str(TEXT_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
  }, TEXT_GEOMETRY, []);

   mod[TORUS_GEOMETRY] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    var PROP_TUBE             = "tube";
    var PROP_RADIAL_SEGMENTS  = "radialSegments";
    var PROP_TUBULAR_SEGMENTS = "tubularSegments";
    var PROP_ARC              = "arc";
    $loc.__init__ = new Sk.builtin.func(function(self, radius, tube, radialSegments, tubularSegments, arc) {
      radius = numberFromArg(radius,                          PROP_RADIUS,           TORUS_GEOMETRY);
      tube = numberFromArg(tube,                              PROP_TUBE,             TORUS_GEOMETRY);
      radialSegments = numberFromIntegerArg(radialSegments,   PROP_RADIAL_SEGMENTS,  TORUS_GEOMETRY);
      tubularSegments = numberFromIntegerArg(tubularSegments, PROP_TUBULAR_SEGMENTS, TORUS_GEOMETRY);
      arc = numberFromArg(arc,                                PROP_ARC,              TORUS_GEOMETRY);
      self.v = new THREE[TORUS_GEOMETRY](radius, tube, radialSegments, tubularSegments, arc);
    });
    $loc.__getattr__ = new Sk.builtin.func(function(self, name) {
      switch(name) {
        case PROP_RADIUS: {
          return Sk.builtin.assk$(self.v[PROP_RADIUS], Sk.builtin.nmber.float$);
        }
        case PROP_TUBE: {
          return Sk.builtin.assk$(self.v[PROP_TUBE], Sk.builtin.nmber.float$);
        }
        case PROP_RADIAL_SEGMENTS: {
          return Sk.builtin.assk$(self.v[PROP_RADIAL_SEGMENTS], Sk.builtin.nmber.int$);
        }
        case PROP_TUBULAR_SEGMENTS: {
          return Sk.builtin.assk$(self.v[PROP_TUBULAR_SEGMENTS], Sk.builtin.nmber.int$);
        }
        case PROP_ARC: {
          return Sk.builtin.assk$(self.v[PROP_ARC], Sk.builtin.nmber.float$);
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(geometryPy, name, valuePy) {
      var geometry = Sk.ffi.remapToJs(geometryPy);
      var value = Sk.ffi.remapToJs(valuePy);
      switch(name) {
        default: {
          throw new Error(name + " is not an attribute of " + TORUS_GEOMETRY);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(self) {
      var torus = self.v;
      var args = {};
      args[PROP_RADIUS] = torus[PROP_RADIUS];
      args[PROP_TUBE]   = torus[PROP_TUBE];
      args[PROP_ARC]    = torus[PROP_ARC];
      return new Sk.builtin.str(TORUS_GEOMETRY + "(" + JSON.stringify(args) + ")");
    });
    $loc.__repr__ = new Sk.builtin.func(function(self) {
      var torus = self.v;
      var radius          = torus[PROP_RADIUS];
      var tube            = torus[PROP_TUBE];
      var radialSegments  = torus[PROP_RADIAL_SEGMENTS];
      var tubularSegments = torus[PROP_TUBULAR_SEGMENTS];
      var arc             = torus[PROP_ARC];
      var args = [radius, tube, radialSegments, tubularSegments, arc];
      return new Sk.builtin.str(TORUS_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
  }, TORUS_GEOMETRY, []);

   mod[GEOMETRY] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = new Sk.builtin.func(function(self, geometryPy) {
      if (isDefined(geometryPy)) {
        self.v = Sk.ffi.remapToJs(geometryPy);
        self.tp$name = geometryPy.tp$name;
      }
      else {
        self.v = new THREE[GEOMETRY]();
        self.tp$name = GEOMETRY;
      }
    });
    $loc.__getattr__ = new Sk.builtin.func(function(geometryPy, name) {
      var geometry = Sk.ffi.remapToJs(geometryPy);
      switch(name) {
        case PROP_ID: {
          return Sk.builtin.nmber(geometry[PROP_ID], Sk.builtin.nmber.int$);
        }
        case PROP_NAME: {
          return new Sk.builtin.str(geometry[PROP_NAME]);
        }
        case PROP_VERTICES: {
          return verticesPy(geometry.vertices);
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(geometryPy, name, valuePy) {
      var geometry = Sk.ffi.remapToJs(geometryPy);
      var value = Sk.ffi.remapToJs(valuePy);
      switch(name) {
        default: {
          throw new Error(name + " is not an attribute of " + GEOMETRY);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(geometryPy) {
      var geometry = Sk.ffi.remapToJs(geometryPy);
      if (isDefined(geometry)) {
        var args = {};
        return new Sk.builtin.str(GEOMETRY + "(" + JSON.stringify(args) + ")");
      }
      else {
        return new Sk.builtin.str("<type '" + GEOMETRY + "'>");
      }
    });
    $loc.__repr__ = new Sk.builtin.func(function(geometry) {
      geometry = Sk.ffi.remapToJs(geometry);
      var args = [];
      return new Sk.builtin.str(GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
  }, GEOMETRY, []);

  mod[OBJECT_3D] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = new Sk.builtin.func(function(self) {
      self.tp$name = OBJECT_3D;
      self.v = new THREE[OBJECT_3D]();
    });
    $loc.__getattr__ = new Sk.builtin.func(function(objPy, name) {
      var obj = Sk.ffi.remapToJs(objPy);
      switch(name) {
        case PROP_POSITION: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(obj[PROP_POSITION]));
        }
        case PROP_QUATERNION: {
          return Sk.misceval.callsim(mod[QUATERNION], Sk.ffi.referenceToPy(obj[PROP_QUATERNION]));
        }
        case PROP_ROTATION: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(obj[PROP_ROTATION]));
        }
        case PROP_EULER_ORDER: {
          return new Sk.builtin.str(obj[PROP_EULER_ORDER]);
        }
        case PROP_SCALE: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(obj[PROP_SCALE]));
        }
        case PROP_UP: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(obj[PROP_UP]));
        }
        case PROP_USE_QUATERNION: {
          return obj[PROP_USE_QUATERNION];
        }
        case METHOD_ADD: {
          return methodAdd(obj);
        }
        case METHOD_REMOVE: {
          return methodRemove(obj);
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(obj, name, value) {
      obj = Sk.ffi.remapToJs(obj);
      value = Sk.ffi.remapToJs(value);
      switch(name) {
        case PROP_POSITION: {
          obj[PROP_POSITION] = value;
        }
        break;
        case PROP_QUATERNION: {
          obj[PROP_QUATERNION] = value;
        }
        break;
        case PROP_ROTATION: {
          obj[PROP_ROTATION] = value;
        }
        break;
        case PROP_EULER_ORDER: {
          if (isString(value)) {
            obj[PROP_EULER_ORDER] = value;
          }
          else {
            throw new Error(name + " must be a string");
          }
        }
        break;
        case PROP_SCALE: {
          obj[PROP_SCALE] = value;
        }
        break;
        case PROP_UP: {
          obj[PROP_UP] = value;
        }
        break;
        case PROP_USE_QUATERNION: {
          obj[PROP_USE_QUATERNION] = value;
        }
        break;
        default: {
          throw new Error(name + " is not an settable attribute of " + OBJECT_3D);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(obj) {
      obj = Sk.ffi.remapToJs(obj);
      if (isDefined(obj)) {
        var args = {};
        return new Sk.builtin.str(OBJECT_3D + "(" + JSON.stringify(args) + ")");
      }
      else {
        return new Sk.builtin.str("<type '" + OBJECT_3D + "'>");
      }
    });
    $loc.__repr__ = new Sk.builtin.func(function(obj) {
      obj = Sk.ffi.remapToJs(obj);
      var args = [];
      return new Sk.builtin.str(OBJECT_3D + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
  }, OBJECT_3D, []);

  mod[AMBIENT_LIGHT] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = new Sk.builtin.func(function(self, color) {
      self.tp$name = AMBIENT_LIGHT;
      color = Sk.ffi.remapToJs(color);
      self.v = new THREE[AMBIENT_LIGHT](color);
    });
    $loc.__getattr__ = new Sk.builtin.func(function(lightPy, name) {
      var light = Sk.ffi.remapToJs(lightPy);
      switch(name) {
        case PROP_COLOR: {
          return Sk.misceval.callsim(mod[COLOR], Sk.ffi.referenceToPy(light[PROP_COLOR]));
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(lightPy, name, valuePy) {
      var light = Sk.ffi.remapToJs(lightPy);
      var value = Sk.ffi.remapToJs(valuePy);
      switch(name) {
        case PROP_COLOR: {
          light[PROP_COLOR] = new THREE.Color(value);
        }
        break;
        default: {
          throw new Error(name + " is not an settable attribute of " + AMBIENT_LIGHT);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(light) {
      light = Sk.ffi.remapToJs(light);
      if (isDefined(light)) {
        var args = {};
        args[PROP_COLOR] = light[PROP_COLOR];
        return new Sk.builtin.str(AMBIENT_LIGHT + "(" + JSON.stringify(args) + ")");
      }
      else {
        return new Sk.builtin.str("<type '" + AMBIENT_LIGHT + "'>");
      }
    });
    $loc.__repr__ = new Sk.builtin.func(function(light) {
      light = Sk.ffi.remapToJs(light);
      var args = [light[PROP_COLOR]];
      return new Sk.builtin.str(AMBIENT_LIGHT + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
  }, AMBIENT_LIGHT, []);

  mod[DIRECTIONAL_LIGHT] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    var PROP_INTENSITY = "intensity";
    var PROP_DISTANCE = "distance";
    $loc.__init__ = new Sk.builtin.func(function(self, color, intensity, distance) {
      self.tp$name = DIRECTIONAL_LIGHT;
      color = Sk.ffi.remapToJs(color);
      intensity = Sk.ffi.remapToJs(intensity);
      distance = Sk.ffi.remapToJs(distance);
      self.v = new THREE[DIRECTIONAL_LIGHT](color, intensity, distance);
    });
    $loc.__getattr__ = new Sk.builtin.func(function(lightPy, name) {
      var light = Sk.ffi.remapToJs(lightPy);
      switch(name) {
        case PROP_COLOR: {
          return Sk.misceval.callsim(mod[COLOR], Sk.ffi.referenceToPy(light[PROP_COLOR]));
        }
        case PROP_DISTANCE: {
          return Sk.builtin.nmber(light[PROP_DISTANCE], Sk.builtin.nmber.float$);
        }
        case PROP_INTENSITY: {
          return Sk.builtin.nmber(light[PROP_INTENSITY], Sk.builtin.nmber.float$);
        }
        case PROP_POSITION: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(light[PROP_POSITION]));
        }
        case PROP_QUATERNION: {
          return Sk.misceval.callsim(mod[QUATERNION], Sk.ffi.referenceToPy(light[PROP_QUATERNION]));
        }
        case PROP_ROTATION: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(light[PROP_ROTATION]));
        }
        case PROP_EULER_ORDER: {
          return new Sk.builtin.str(light[PROP_EULER_ORDER]);
        }
        case PROP_SCALE: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(light[PROP_SCALE]));
        }
        case PROP_UP: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(light[PROP_UP]));
        }
        case PROP_USE_QUATERNION: {
          return light[PROP_USE_QUATERNION];
        }
        case METHOD_LOOK_AT: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_LOOK_AT;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, vectorPy) {
              light.lookAt(Sk.ffi.remapToJs(vectorPy));
              return lightPy;
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_LOOK_AT);
            })
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_LOOK_AT);
            })
          }, METHOD_LOOK_AT, []));
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(light, name, value) {
      light = Sk.ffi.remapToJs(light);
      value = Sk.ffi.remapToJs(value);
      switch(name) {
        case PROP_COLOR: {
          light[PROP_COLOR] = new THREE.Color(value);
        }
        break;
        case PROP_DISTANCE: {
          if (isNumber(value)) {
            light[PROP_DISTANCE] = value;
          }
          else {
            throw new Sk.builtin.TypeError("'" + PROP_DISTANCE + "' attribute must be a <type 'float'>.");
          }
        }
        break;
        case PROP_INTENSITY: {
          if (isNumber(value)) {
            light[PROP_INTENSITY] = value;
          }
          else {
            throw new Sk.builtin.TypeError("'" + PROP_INTENSITY + "' attribute must be a <type 'float'>.");
          }
        }
        break;
        case PROP_POSITION: {
          light[PROP_POSITION] = value;
        }
        break;
        case PROP_QUATERNION: {
          light[PROP_QUATERNION] = value;
        }
        break;
        case PROP_ROTATION: {
          light[PROP_ROTATION] = value;
        }
        break;
        case PROP_EULER_ORDER: {
          if (isString(value)) {
            light[PROP_EULER_ORDER] = value;
          }
          else {
            throw new Error(name + " must be a string");
          }
        }
        break;
        case PROP_SCALE: {
          light[PROP_SCALE] = value;
        }
        break;
        case PROP_UP: {
          light[PROP_UP] = value;
        }
        break;
        case PROP_USE_QUATERNION: {
          light[PROP_USE_QUATERNION] = value;
        }
        break;
        default: {
          throw new Error(name + " is not an settable attribute of " + DIRECTIONAL_LIGHT);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(light) {
      light = Sk.ffi.remapToJs(light);
      if (isDefined(light)) {
        var args = {};
        args[PROP_COLOR] = light[PROP_COLOR];
        args[PROP_INTENSITY] = light[PROP_INTENSITY];
        args[PROP_DISTANCE] = light[PROP_DISTANCE];
        return new Sk.builtin.str(DIRECTIONAL_LIGHT + "(" + JSON.stringify(args) + ")");
      }
      else {
        return new Sk.builtin.str("<type '" + DIRECTIONAL_LIGHT + "'>");
      }
    });
    $loc.__repr__ = new Sk.builtin.func(function(light) {
      light = Sk.ffi.remapToJs(light);
      var args = [light[PROP_COLOR], light[PROP_INTENSITY], light[PROP_DISTANCE]];
      return new Sk.builtin.str(DIRECTIONAL_LIGHT + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
  }, DIRECTIONAL_LIGHT, []);

  mod[POINT_LIGHT] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    var PROP_INTENSITY = "intensity";
    var PROP_DISTANCE = "distance";
    $loc.__init__ = new Sk.builtin.func(function(self, color, intensity, distance) {
      self.tp$name = POINT_LIGHT;
      color = Sk.ffi.remapToJs(color);
      intensity = Sk.ffi.remapToJs(intensity);
      distance = Sk.ffi.remapToJs(distance);
      self.v = new THREE[POINT_LIGHT](color, intensity, distance);
    });
    $loc.__getattr__ = new Sk.builtin.func(function(lightPy, name) {
      var light = Sk.ffi.remapToJs(lightPy);
      switch(name) {
        case PROP_COLOR: {
          return Sk.misceval.callsim(mod[COLOR], Sk.ffi.referenceToPy(light[PROP_COLOR]));
        }
        case PROP_DISTANCE: {
          return Sk.builtin.nmber(light[PROP_DISTANCE], Sk.builtin.nmber.float$);
        }
        case PROP_INTENSITY: {
          return Sk.builtin.nmber(light[PROP_INTENSITY], Sk.builtin.nmber.float$);
        }
        case PROP_POSITION: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(light[PROP_POSITION]));
        }
        case PROP_QUATERNION: {
          return Sk.misceval.callsim(mod[QUATERNION], Sk.ffi.referenceToPy(light[PROP_QUATERNION]));
        }
        case PROP_ROTATION: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(light[PROP_ROTATION]));
        }
        case PROP_EULER_ORDER: {
          return new Sk.builtin.str(light[PROP_EULER_ORDER]);
        }
        case PROP_SCALE: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(light[PROP_SCALE]));
        }
        case PROP_UP: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(light[PROP_UP]));
        }
        case PROP_USE_QUATERNION: {
          return light[PROP_USE_QUATERNION];
        }
        case METHOD_LOOK_AT: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_LOOK_AT;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, vectorPy) {
              light.lookAt(Sk.ffi.remapToJs(vectorPy));
              return lightPy;
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_LOOK_AT);
            })
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_LOOK_AT);
            })
          }, METHOD_LOOK_AT, []));
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(light, name, value) {
      light = Sk.ffi.remapToJs(light);
      value = Sk.ffi.remapToJs(value);
      switch(name) {
        case PROP_COLOR: {
          light[PROP_COLOR] = new THREE.Color(value);
        }
        break;
        case PROP_DISTANCE: {
          if (isNumber(value)) {
            light[PROP_DISTANCE] = value;
          }
          else {
            throw new Sk.builtin.TypeError("'" + PROP_DISTANCE + "' attribute must be a <type 'float'>.");
          }
        }
        break;
        case PROP_INTENSITY: {
          if (isNumber(value)) {
            light[PROP_INTENSITY] = value;
          }
          else {
            throw new Sk.builtin.TypeError("'" + PROP_INTENSITY + "' attribute must be a <type 'float'>.");
          }
        }
        break;
        case PROP_POSITION: {
          light[PROP_POSITION] = value;
        }
        break;
        case PROP_QUATERNION: {
          light[PROP_QUATERNION] = value;
        }
        break;
        case PROP_ROTATION: {
          light[PROP_ROTATION] = value;
        }
        break;
        case PROP_EULER_ORDER: {
          if (isString(value)) {
            light[PROP_EULER_ORDER] = value;
          }
          else {
            throw new Error(name + " must be a string");
          }
        }
        break;
        case PROP_SCALE: {
          light[PROP_SCALE] = value;
        }
        break;
        case PROP_UP: {
          light[PROP_UP] = value;
        }
        break;
        case PROP_USE_QUATERNION: {
          light[PROP_USE_QUATERNION] = value;
        }
        break;
        default: {
          throw new Error(name + " is not an settable attribute of " + POINT_LIGHT);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(light) {
      light = Sk.ffi.remapToJs(light);
      if (isDefined(light)) {
        var args = {};
        args[PROP_COLOR] = light[PROP_COLOR];
        args[PROP_INTENSITY] = light[PROP_INTENSITY];
        args[PROP_DISTANCE] = light[PROP_DISTANCE];
        return new Sk.builtin.str(POINT_LIGHT + "(" + JSON.stringify(args) + ")");
      }
      else {
        return new Sk.builtin.str("<type '" + POINT_LIGHT + "'>");
      }
    });
    $loc.__repr__ = new Sk.builtin.func(function(light) {
      light = Sk.ffi.remapToJs(light);
      var args = [light[PROP_COLOR], light[PROP_INTENSITY], light[PROP_DISTANCE]];
      return new Sk.builtin.str(POINT_LIGHT + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
  }, POINT_LIGHT, []);

  mod[LINE] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = new Sk.builtin.func(function(self, geometryPy, materialPy, typePy) {
      var geometry = Sk.ffi.remapToJs(geometryPy)
      var material = Sk.ffi.remapToJs(materialPy)
      var type = Sk.ffi.remapToJs(typePy)
      self.v = new THREE[LINE](geometry, material, type);
    });
    $loc.__getattr__ = new Sk.builtin.func(function(linePy, name) {
      var line = Sk.ffi.remapToJs(linePy);
      switch(name) {
        case PROP_POSITION: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(line[PROP_POSITION]));
        }
        case PROP_QUATERNION: {
          return Sk.misceval.callsim(mod[QUATERNION], Sk.ffi.referenceToPy(line[PROP_QUATERNION]));
        }
        case PROP_ROTATION: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(line[PROP_ROTATION]));
        }
        case PROP_EULER_ORDER: {
          return new Sk.builtin.str(line[PROP_EULER_ORDER]);
        }
        case PROP_SCALE: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(line[PROP_SCALE]));
        }
        case PROP_UP: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(line[PROP_UP]));
        }
        case PROP_USE_QUATERNION: {
          return line[PROP_USE_QUATERNION];
        }
        case METHOD_LOOK_AT: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_LOOK_AT;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, vectorPy) {
              line.lookAt(Sk.ffi.remapToJs(vectorPy));
              return linePy;
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_LOOK_AT);
            })
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_LOOK_AT);
            })
          }, METHOD_LOOK_AT, []));
        }
        case PROP_TYPE: {
          return Sk.builtin.nmber(line[PROP_TYPE], Sk.builtin.nmber.int$);
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(linePy, name, value) {
      var line = Sk.ffi.remapToJs(linePy);
      value = Sk.ffi.remapToJs(value);
      switch(name) {
        case PROP_TYPE: {
          if (isNumber(value)) {
            line[PROP_TYPE] = value;
          }
          else {
            throw new Error(PROP_TYPE + " must be either LineStrip or LinePieces");
          }
        }
        break;
        default: {
          throw new Error(name + " is not an attribute of " + LINE);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(self) {
      return new Sk.builtin.str(LINE);
    });
    $loc.__repr__ = new Sk.builtin.func(function(self) {
      return new Sk.builtin.str(LINE);
    });
  }, LINE, []);

  mod[LINE_BASIC_MATERIAL] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = new Sk.builtin.func(function(self, parameters) {
      self.tp$name = LINE_BASIC_MATERIAL;
      parameters = Sk.ffi.remapToJs(parameters);
      self.v = new THREE[LINE_BASIC_MATERIAL](parameters);
    });
    $loc.__getattr__ = new Sk.builtin.func(function(material, name) {
      material = Sk.ffi.remapToJs(material);
      switch(name) {
        case PROP_COLOR: {
          return Sk.misceval.callsim(mod[COLOR], Sk.ffi.referenceToPy(material[PROP_COLOR]));
        }
        case PROP_OPACITY: {
          return Sk.builtin.nmber(material[PROP_OPACITY], Sk.builtin.nmber.float$);
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(material, name, value) {
      material = Sk.ffi.remapToJs(material);
      value = Sk.ffi.remapToJs(value);
      switch(name) {
        case PROP_COLOR: {
          if (isColor(value)) {
            material.color = value;
          }
          else {
            throw new Sk.builtin.TypeError("'" + PROP_OPACITY + "' attribute must be a <type '" + COLOR + "'>.");
          }
        }
        break;
        case PROP_OPACITY: {
          if (isNumber(value)) {
            material.opacity = value;
          }
          else {
            throw new Sk.builtin.TypeError("'" + PROP_OPACITY + "' attribute must be a <type 'float'>.");
          }
        }
        break;
        default: {
          throw new Error(name + " is not an attribute of " + LINE_BASIC_MATERIAL);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(material) {
      material = Sk.ffi.remapToJs(material);
      var args = {};
      args[PROP_COLOR] = material[PROP_COLOR];
      args[PROP_OPACITY] = material[PROP_OPACITY];
      return new Sk.builtin.str(LINE_BASIC_MATERIAL + "(" + JSON.stringify(args) + ")");
    });
    $loc.__repr__ = new Sk.builtin.func(function(material) {
      material = Sk.ffi.remapToJs(material);
      var args = [{}];
      return new Sk.builtin.str(LINE_BASIC_MATERIAL + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
  }, LINE_BASIC_MATERIAL, []);

  mod[MESH] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = new Sk.builtin.func(function(self, geometryPy, materialPy) {
      self.tp$name = MESH;
      self.v = new THREE[MESH](Sk.ffi.remapToJs(geometryPy), Sk.ffi.remapToJs(materialPy));
      self.v[PROP_MASS] = multiVector3(0, new THREE.Vector3(0, 0, 0), 0, 0, 0, 0);
      self.v[PROP_VELOCITY] = multiVector3(0, new THREE.Vector3(0, 0, 0), 0, 0, 0, 0);
    });
    $loc.__getattr__ = new Sk.builtin.func(function(meshPy, name) {
      var mesh = Sk.ffi.remapToJs(meshPy);
      switch(name) {
        case PROP_ID: {
          return Sk.builtin.nmber(mesh[PROP_ID], Sk.builtin.nmber.int$);
        }
        case PROP_GEOMETRY: {
          var geometry = mesh[PROP_GEOMETRY];
          return Sk.misceval.callsim(mod[GEOMETRY], Sk.ffi.referenceToPy(mesh[PROP_GEOMETRY]));
        }
        case PROP_MASS: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(mesh[PROP_MASS]));
        }
        case PROP_MATRIX_AUTO_UPDATE: {
          return mesh[PROP_MATRIX_AUTO_UPDATE];
        }
        case PROP_NAME: {
          return new Sk.builtin.str(mesh[PROP_NAME]);
        }
        case PROP_OVERDRAW: {
          if (isBoolean(mesh[PROP_OVERDRAW])) {
            return mesh[PROP_OVERDRAW];
          }
          else {
            return null;
          }
        }
        case PROP_POSITION: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(mesh[PROP_POSITION]));
        }
        case PROP_QUATERNION: {
          return Sk.misceval.callsim(mod[QUATERNION], Sk.ffi.referenceToPy(mesh[PROP_QUATERNION]));
        }
        case PROP_ROTATION: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(mesh[PROP_ROTATION]));
        }
        case PROP_EULER_ORDER: {
          return new Sk.builtin.str(mesh[PROP_EULER_ORDER]);
        }
        case PROP_SCALE: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(mesh[PROP_SCALE]));
        }
        case PROP_UP: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(mesh[PROP_UP]));
        }
        case PROP_USE_QUATERNION: {
          return mesh[PROP_USE_QUATERNION];
        }
        case PROP_VELOCITY: {
          return Sk.misceval.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(mesh[PROP_VELOCITY]));
        }
        case PROP_VISIBLE: {
          return mesh[PROP_VISIBLE];
        }
        case METHOD_LOOK_AT: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_LOOK_AT;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, vectorPy) {
              mesh.lookAt(Sk.ffi.remapToJs(vectorPy));
              return meshPy;
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_LOOK_AT);
            })
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_LOOK_AT);
            })
          }, METHOD_LOOK_AT, []));
        }
        case METHOD_SET_GEOMETRY: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_SET_GEOMETRY;
            });
            $loc.__call__ = new Sk.builtin.func(function(self, geometryPy) {
              var geometry = Sk.ffi.remapToJs(geometryPy);
              mesh[METHOD_SET_GEOMETRY](geometry);
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET_GEOMETRY)
            })
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_SET_GEOMETRY)
            })
          }, METHOD_SET_GEOMETRY, []));
        }
        case METHOD_UPDATE_MATRIX: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = new Sk.builtin.func(function(self) {
              self.tp$name = METHOD_UPDATE_MATRIX;
            });
            $loc.__call__ = new Sk.builtin.func(function(self) {
              mesh[METHOD_UPDATE_MATRIX]();
            });
            $loc.__str__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_UPDATE_MATRIX)
            })
            $loc.__repr__ = new Sk.builtin.func(function(self) {
              return new Sk.builtin.str(METHOD_UPDATE_MATRIX)
            })
          }, METHOD_UPDATE_MATRIX, []));
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(mesh, name, value) {
      mesh = Sk.ffi.remapToJs(mesh);
      value = Sk.ffi.remapToJs(value);
      switch(name) {
        case PROP_MASS: {
          if (isNumber(value)) {
            mesh[PROP_MASS] = multiVector3(value, new THREE.Vector3(0, 0, 0), 0, 0, 0, 0);
          }
          else {
            mesh[PROP_MASS] = value;
          }
        }
        break;
        case PROP_MATRIX_AUTO_UPDATE: {
          if (isBoolean(value)) {
            mesh[PROP_MATRIX_AUTO_UPDATE] = value;
          }
          else {
            throw new Error(PROP_MATRIX_AUTO_UPDATE + " must be Boolean");
          }
        }
        break;
        case PROP_NAME: {
          if (isString(value)) {
            mesh[PROP_NAME] = value;
          }
          else {
            throw new Error(name + " must be a string");
          }
        }
        break;
        case PROP_OVERDRAW: {
          if (isBoolean(value)) {
            mesh[PROP_OVERDRAW] = value;
          }
          else if (isNull(value)) {
            mesh[PROP_OVERDRAW] = null;
          }
          else {
            throw new Error(name + " must be either Boolean or None");
          }
        }
        break;
        case PROP_POSITION: {
          mesh[PROP_POSITION] = value;
        }
        break;
        case PROP_QUATERNION: {
          mesh[PROP_QUATERNION] = value;
        }
        break;
        case PROP_ROTATION: {
          mesh[PROP_ROTATION] = value;
        }
        break;
        case PROP_EULER_ORDER: {
          if (isString(value)) {
            mesh[PROP_EULER_ORDER] = value;
          }
          else {
            throw new Error(name + " must be a string");
          }
        }
        break;
        case PROP_SCALE: {
          mesh[PROP_SCALE] = value;
        }
        break;
        case PROP_UP: {
          mesh[PROP_UP] = value;
        }
        break;
        case PROP_USE_QUATERNION: {
          mesh[PROP_USE_QUATERNION] = value;
        }
        break;
        case PROP_VELOCITY: {
          mesh[PROP_VELOCITY] = value;
        }
        break;
        case PROP_VISIBLE: {
          if (isBoolean(value)) {
            mesh[PROP_VISIBLE] = value;
          }
          else {
            throw new Error(PROP_VISIBLE + " must be Boolean");
          }
        }
        break;
        default: {
          throw new Error(name + " is not an attribute of " + MESH);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(mesh) {
      mesh = Sk.ffi.remapToJs(mesh);
      var args = {};
      args[PROP_ID] = mesh[PROP_ID];
      args[PROP_NAME] = mesh[PROP_NAME];
      return new Sk.builtin.str(MESH + "(" + JSON.stringify(args) + ")");
    });
    $loc.__repr__ = new Sk.builtin.func(function(mesh) {
      mesh = Sk.ffi.remapToJs(mesh);
      var args = [/*mesh[PROP_GEOMETRY], mesh[PROP_MATERIAL]*/];
      return new Sk.builtin.str(MESH + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
  }, MESH, []);

  mod[MESH_BASIC_MATERIAL] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = new Sk.builtin.func(function(self, parameters) {
      self.tp$name = MESH_BASIC_MATERIAL;
      parameters = Sk.ffi.remapToJs(parameters);
      self.v = new THREE[MESH_BASIC_MATERIAL](parameters);
    });
    $loc.__getattr__ = new Sk.builtin.func(function(materialPy, name) {
      var material = Sk.ffi.remapToJs(materialPy);
      switch(name) {
        case PROP_ID: {
          return Sk.builtin.nmber(material[PROP_ID], Sk.builtin.nmber.int$);
        }
        case PROP_NAME: {
          return new Sk.builtin.str(material[PROP_NAME]);
        }
        case PROP_COLOR: {
          return Sk.misceval.callsim(mod[COLOR], Sk.ffi.referenceToPy(material[PROP_COLOR]));
        }
        case PROP_NEEDS_UPDATE: {
          return material[PROP_NEEDS_UPDATE];
        }
        case PROP_OPACITY: {
          return Sk.builtin.nmber(material[PROP_OPACITY], Sk.builtin.nmber.float$);
        }
        case PROP_OVERDRAW: {
          return material[PROP_OVERDRAW];
        }
        case PROP_TRANSPARENT: {
          return material[PROP_TRANSPARENT];
        }
        case PROP_WIREFRAME: {
          return material[PROP_WIREFRAME];
        }
        case PROP_WIREFRAME_LINEWIDTH: {
          return Sk.builtin.nmber(material[PROP_WIREFRAME_LINEWIDTH], Sk.builtin.nmber.float$);
        }
        case PROP_VISIBLE: {
          return material[PROP_VISIBLE];
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(materialPy, name, valuePy) {
      var material = Sk.ffi.remapToJs(materialPy);
      var value = Sk.ffi.remapToJs(valuePy);
      switch(name) {
        case PROP_COLOR: {
          material[PROP_COLOR] = new THREE.Color(value);
        }
        break;
        case PROP_NAME: {
          if (isString(value)) {
            material[PROP_NAME] = value;
          }
          else {
            throw new Error(name + " must be a string");
          }
        }
        break;
        case PROP_NEEDS_UPDATE: {
          if (isBoolean(value)) {
            material[PROP_NEEDS_UPDATE] = value;
          }
          else {
            throw new Error(name + " must be Boolean");
          }
        }
        break;
        case PROP_OPACITY: {
          if (isNumber(value)) {
            material.opacity = value;
          }
          else {
            throw new Sk.builtin.TypeError("'" + PROP_OPACITY + "' attribute must be a <type 'float'>.");
          }
        }
        break;
        case PROP_OVERDRAW: {
          if (isBoolean(value)) {
            material[PROP_OVERDRAW] = value;
          }
          else {
            throw new Error(name + " must be Boolean");
          }
        }
        break;
        case PROP_TRANSPARENT: {
          if (isBoolean(value)) {
            material[PROP_TRANSPARENT] = value;
          }
          else {
            throw new Error(name + " must be Boolean");
          }
        }
        break;
        case PROP_WIREFRAME: {
          if (isBoolean(value)) {
            material[PROP_WIREFRAME] = value;
          }
          else {
            throw new Error(name + " must be Boolean");
          }
        }
        break;
        case PROP_WIREFRAME_LINEWIDTH: {
          if (isNumber(value)) {
            material[PROP_WIREFRAME_LINEWIDTH] = value;
          }
          else {
            throw new Error(name + " must be a number");
          }
        }
        break;
        case PROP_VISIBLE: {
          if (isBoolean(value)) {
            material[PROP_VISIBLE] = value;
          }
          else {
            throw new Error(name + " must be Boolean");
          }
        }
        break;
        default: {
          throw new Error(name + " is not an attribute of " + MESH_BASIC_MATERIAL);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(materialPy) {
      var material = Sk.ffi.remapToJs(materialPy);
      var args = {};
      args[PROP_COLOR] = material[PROP_COLOR];
      args[PROP_WIREFRAME] = material[PROP_WIREFRAME];
      args[PROP_WIREFRAME_LINEWIDTH] = material[PROP_WIREFRAME_LINEWIDTH];
      return new Sk.builtin.str(MESH_BASIC_MATERIAL + "(" + JSON.stringify(args) + ")");
    });
    $loc.__repr__ = new Sk.builtin.func(function(material) {
      material = Sk.ffi.remapToJs(material);
      var parameters = {};
      parameters[PROP_COLOR] = material[PROP_COLOR];
      parameters[PROP_WIREFRAME] = material[PROP_WIREFRAME];
      parameters[PROP_WIREFRAME_LINEWIDTH] = material[PROP_WIREFRAME_LINEWIDTH];
      var args = [parameters];
      return new Sk.builtin.str(MESH_BASIC_MATERIAL + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
  }, MESH_BASIC_MATERIAL, []);

  mod[MESH_LAMBERT_MATERIAL] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = new Sk.builtin.func(function(self, parameters) {
      self.tp$name = MESH_LAMBERT_MATERIAL;
      parameters = Sk.ffi.remapToJs(parameters);
      self.v = new THREE[MESH_LAMBERT_MATERIAL](parameters);
    });
    $loc.__getattr__ = new Sk.builtin.func(function(materialPy, name) {
      var material = Sk.ffi.remapToJs(materialPy);
      switch(name) {
        case PROP_ID: {
          return Sk.builtin.nmber(material[PROP_ID], Sk.builtin.nmber.int$);
        }
        case PROP_COLOR: {
          return Sk.misceval.callsim(mod[COLOR], Sk.ffi.referenceToPy(material[PROP_COLOR]));
        }
        case PROP_NAME: {
          return new Sk.builtin.str(material[PROP_NAME]);
        }
        case PROP_NEEDS_UPDATE: {
          return material[PROP_NEEDS_UPDATE];
        }
        case PROP_OPACITY: {
          return Sk.builtin.nmber(material[PROP_OPACITY], Sk.builtin.nmber.float$);
        }
        case PROP_OVERDRAW: {
          return material[PROP_OVERDRAW];
        }
        case PROP_TRANSPARENT: {
          return material[PROP_TRANSPARENT];
        }
        case PROP_VISIBLE: {
          return material[PROP_VISIBLE];
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(materialPy, name, valuePy) {
      var material = Sk.ffi.remapToJs(materialPy);
      var value = Sk.ffi.remapToJs(valuePy);
      switch(name) {
        case PROP_COLOR: {
          material[PROP_COLOR] = new THREE.Color(value);
        }
        break;
        case PROP_NAME: {
          if (isString(value)) {
            material[PROP_NAME] = value;
          }
          else {
            throw new Error(name + " must be a string");
          }
        }
        break;
        case PROP_NEEDS_UPDATE: {
          if (isBoolean(value)) {
            material[PROP_NEEDS_UPDATE] = value;
          }
          else {
            throw new Error(name + " must be Boolean");
          }
        }
        break;
        case PROP_OPACITY: {
          if (isNumber(value)) {
            material.opacity = value;
          }
          else {
            throw new Sk.builtin.TypeError("'" + PROP_OPACITY + "' attribute must be a <type 'float'>.");
          }
        }
        break;
        case PROP_OVERDRAW: {
          if (isBoolean(value)) {
            material[PROP_OVERDRAW] = value;
          }
          else {
            throw new Error(name + " must be Boolean");
          }
        }
        break;
        case PROP_TRANSPARENT: {
          if (isBoolean(value)) {
            material[PROP_TRANSPARENT] = value;
          }
          else {
            throw new Error(name + " must be Boolean");
          }
        }
        break;
        case PROP_WIREFRAME: {
          if (isBoolean(value)) {
            material[PROP_WIREFRAME] = value;
          }
          else {
            throw new Error(name + " must be Boolean");
          }
        }
        break;
        case PROP_WIREFRAME_LINEWIDTH: {
          if (isNumber(value)) {
            material[PROP_WIREFRAME_LINEWIDTH] = value;
          }
          else {
            throw new Error(name + " must be a number");
          }
        }
        break;
        case PROP_VISIBLE: {
          if (isBoolean(value)) {
            material[PROP_VISIBLE] = value;
          }
          else {
            throw new Error(name + " must be Boolean");
          }
        }
        break;
        default: {
          throw new Error(name + " is not an attribute of " + MESH_LAMBERT_MATERIAL);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(material) {
      material = Sk.ffi.remapToJs(material);
      var args = {};
      return new Sk.builtin.str(MESH_LAMBERT_MATERIAL + "(" + JSON.stringify(args) + ")");
    });
    $loc.__repr__ = new Sk.builtin.func(function(material) {
      material = Sk.ffi.remapToJs(material);
      var parameters = {};
      parameters[PROP_COLOR] = material[PROP_COLOR];
      var args = [parameters];
      return new Sk.builtin.str(MESH_LAMBERT_MATERIAL + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
  }, MESH_LAMBERT_MATERIAL, []);

  mod[MESH_NORMAL_MATERIAL] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = new Sk.builtin.func(function(self, parameters) {
      self.tp$name = MESH_NORMAL_MATERIAL;
      parameters = Sk.ffi.remapToJs(parameters);
      self.v = new THREE[MESH_NORMAL_MATERIAL](parameters);
    });
    $loc.__getattr__ = new Sk.builtin.func(function(self, name) {
      switch(name) {
        default: {
          throw new Error(name + " is not an attribute of " + MESH_NORMAL_MATERIAL);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(material) {
      material = Sk.ffi.remapToJs(material);
      var args = {};
      return new Sk.builtin.str(MESH_NORMAL_MATERIAL + "(" + JSON.stringify(args) + ")");
    });
    $loc.__repr__ = new Sk.builtin.func(function(material) {
      material = Sk.ffi.remapToJs(material);
      var args = [{}];
      return new Sk.builtin.str(MESH_NORMAL_MATERIAL + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
  }, MESH_NORMAL_MATERIAL, []);

  mod[MESH_PHONG_MATERIAL] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = new Sk.builtin.func(function(self, parameters) {
      self.tp$name = MESH_PHONG_MATERIAL;
      parameters = Sk.ffi.remapToJs(parameters);
      self.v = new THREE[MESH_PHONG_MATERIAL](parameters);
    });
    $loc.__getattr__ = new Sk.builtin.func(function(self, name) {
      switch(name) {
        default: {
          throw new Error(name + " is not an attribute of " + MESH_PHONG_MATERIAL);
        }
      }
    });
    $loc.__setattr__ = new Sk.builtin.func(function(materialPy, name, valuePy) {
      var material = Sk.ffi.remapToJs(materialPy);
      var value = Sk.ffi.remapToJs(valuePy);
      switch(name) {
        default: {
          throw new Error(name + " is not an attribute of " + MESH_PHONG_MATERIAL);
        }
      }
    });
    $loc.__str__ = new Sk.builtin.func(function(material) {
      material = Sk.ffi.remapToJs(material);
      var args = {};
      return new Sk.builtin.str(MESH_PHONG_MATERIAL + "(" + JSON.stringify(args) + ")");
    });
    $loc.__repr__ = new Sk.builtin.func(function(material) {
      material = Sk.ffi.remapToJs(material);
      var args = [{}];
      return new Sk.builtin.str(MESH_PHONG_MATERIAL + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
    });
  }, MESH_PHONG_MATERIAL, []);

  if (typeof THREE !== 'undefined') {
    mod.LineStrip  = Sk.builtin.assk$(THREE.LineStrip,  Sk.builtin.nmber.int$);
    mod.LinePieces = Sk.builtin.assk$(THREE.LinePieces, Sk.builtin.nmber.int$);

    mod.FlatShading   = Sk.builtin.assk$(THREE.FlatShading,   Sk.builtin.nmber.int$);
    mod.NoShading     = Sk.builtin.assk$(THREE.NoShading,     Sk.builtin.nmber.int$);
    mod.SmoothShading = Sk.builtin.assk$(THREE.SmoothShading, Sk.builtin.nmber.int$);
  }

  mod[SCALAR_3] = new Sk.builtin.func(function(w) {
    w = Sk.ffi.remapToJs(w);
    return remapE3ToPy(w, 0, 0, 0, 0, 0, 0, 0);
  });

  mod[VECTOR_3] = new Sk.builtin.func(function(x, y, z) {
    x = Sk.ffi.remapToJs(x);
    y = Sk.ffi.remapToJs(y);
    z = Sk.ffi.remapToJs(z);
    return remapE3ToPy(0, x, y, z, 0, 0, 0, 0);
  });

  mod[BIVECTOR_3] = new Sk.builtin.func(function(xy, yz, zx) {
    xy = Sk.ffi.remapToJs(xy);
    yz = Sk.ffi.remapToJs(yz);
    zx = Sk.ffi.remapToJs(zx);
    return remapE3ToPy(0, 0, 0, 0, xy, yz, zx, 0);
  });

  mod[PSEUDOSCALAR_3] = new Sk.builtin.func(function(xyz) {
    xyz = Sk.ffi.remapToJs(xyz);
    return remapE3ToPy(0, 0, 0, 0, 0, 0, 0, xyz);
  });

  return mod;
}
