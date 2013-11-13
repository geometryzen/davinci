Sk.three = Sk.three || {};
/**
* @const
* @type {string}
*/
Sk.three.FACE_3                     = "Face3";
/**
 * @const
 * @type {string}
 */
Sk.three.MATERIAL                   = "Material";
/**
 * @const
 * @type {string}
 */
Sk.three.MATRIX_3                   = "Matrix3";
/**
 * @const
 * @type {string}
 */
Sk.three.MATRIX_4                   = "Matrix4";
/**
 * @const
 * @type {string}
 */
Sk.three.MESH                       = "Mesh";
/**
* @const
* @type {string}
*/
Sk.three.OBJECT_3D                  = "Object3D";
/**
 * @const
 * @type {string}
 */
Sk.three.PARTICLE_SYSTEM            = "ParticleSystem";
/**
 * @const
 * @type {string}
 */
Sk.three.PARTICLE_SYSTEM_MATERIAL   = "ParticleSystemMaterial";
/**
 * @const
 * @type {string}
 */
Sk.three.ARROW_GEOMETRY             = "ArrowGeometry";
/**
 * @const
 * @type {string}
 */
Sk.three.VORTEX_GEOMETRY            = "VortexGeometry";
/**
 * Returns the nearest cardinal vector to the direction specified by cartesian coordinates.
 *
 * The result is essentially a (+/-) a standard basis vector.
 *
 * @param {number} x
 * @param {number} y
 * @param {number} z
 */
Sk.three.cardinal = function(x, y, z) {
  function signum(x) {
    return typeof x === 'number' ? x ? x < 0 ? -1 : 1 : isNaN(x) ? NaN : 0 : NaN;
  }
  var ax = Math.abs(x);
  var ay = Math.abs(y);
  var az = Math.abs(z);
  if (ax >= ay) {
    if (ax >= az) {
      return new THREE.Vector3(signum(x), 0, 0);
    }
    else {
      return new THREE.Vector3(0, 0, signum(z));
    }
  }
  else {
    if (ay >= az) {
      return new THREE.Vector3(0, signum(y), 0);
    }
    else {
      return new THREE.Vector3(0, 0, signum(z));
    }
  }
};
goog.exportSymbol("Sk.three.cardinal", Sk.three.cardinal);
/**
 * Construct a vector with cyclic permutation of indices.
 *
 * When (cycle % 3) is zero, nothing changes.
 * When (cycle % 3) is 1, the x value goes into the y vector slot.
 *
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} cycle
 */
Sk.three.vector3Cycle = function(x, y, z, cycle) {
  switch(cycle % 3) {
    case 0: {
      return new THREE.Vector3(x, y, z);
    }
    case 1: {
      return new THREE.Vector3(z, x, y);
    }
    case 2: {
      return new THREE.Vector3(y, z, x);
    }
  }
};
goog.exportSymbol("Sk.three.vector3Cycle", Sk.three.vector3Cycle);

(function() {
Sk.stdlib.defineThree = function(mod, BLADE) {
Sk.ffi.checkFunctionArgs("defineThree", arguments, 2, 2);
Sk.builtin.defineNode(mod);
/**
* @const
* @type {string}
*/
var NODE                       = "Node";
/**
* @const
* @type {Sk.ffi.PyType}
*/
var INT                        = Sk.ffi.PyType.INT;
/**
* @const
* @type {!Array.<Sk.ffi.PyType>}
*/
var NUM                        = [Sk.ffi.PyType.FLOAT, Sk.ffi.PyType.INT, Sk.ffi.PyType.LONG];
/**
* @const
* @type {string}
*/
var EUCLIDEAN_3                = "Euclidean3";
/**
* @const
* @type {string}
*/
var INTERSECTION               = "Intersection";
/**
* @const
* @type {string}
*/
var VECTOR_2                   = "Vector2";
/**
* @const
* @type {string}
*/
var VECTOR_3                   = "Vector3";
/**
 * @const
 * @type {string}
 */
var QUATERNION                 = "Quaternion";
/**
 * @const
 * @type {string}
 */
var SCENE                      = "Scene";
/**
* @const
* @type {string}
*/
var CANVAS_RENDERER            = "CanvasRenderer";
/**
* @const
* @type {string}
*/
var WEBGL_RENDERER             = "WebGLRenderer";
/**
* @const
* @type {string}
*/
var COLOR                      = "Color";
/**
* @const
* @type {string}
*/
var ORTHOGRAPHIC_CAMERA        = "OrthographicCamera";
/**
* @const
* @type {string}
*/
var PERSPECTIVE_CAMERA         = "PerspectiveCamera";
/**
* @const
* @type {string}
*/
var GEOMETRY                   = "Geometry";
/**
* @const
* @type {string}
*/
var AMBIENT_LIGHT              = "AmbientLight";
/**
* @const
* @type {string}
*/
var DIRECTIONAL_LIGHT          = "DirectionalLight";
/**
* @const
* @type {string}
*/
var POINT_LIGHT                = "PointLight";
/**
* @const
* @type {string}
*/
var LINE                       = "Line";
/**
* @const
* @type {string}
*/
var LINE_BASIC_MATERIAL        = "LineBasicMaterial";
/**
 * @const
 * @type {string}
 */
var MESH_BASIC_MATERIAL        = "MeshBasicMaterial";
/**
 * @const
 * @type {string}
 */
var MESH_LAMBERT_MATERIAL      = "MeshLambertMaterial";
/**
 * @const
 * @type {string}
 */
var MESH_NORMAL_MATERIAL       = "MeshNormalMaterial";
/**
 * @const
 * @type {string}
 */
var MESH_PHONG_MATERIAL        = "MeshPhongMaterial";
/**
 * @const
 * @type {string}
 */
var CIRCLE_GEOMETRY            = "CircleGeometry";
/**
 * @const
 * @type {string}
 */
var CUBE_GEOMETRY              = "CubeGeometry";
/**
 * @const
 * @type {string}
 */
var CYLINDER_GEOMETRY          = "CylinderGeometry";
/**
 * @const
 * @type {string}
 */
var ICOSAHEDRON_GEOMETRY       = "IcosahedronGeometry";
/**
 * @const
 * @type {string}
 */
var LATHE_GEOMETRY             = "LatheGeometry";
/**
 * @const
 * @type {string}
 */
var OCTAHEDRON_GEOMETRY        = "OctahedronGeometry";
/**
 * @const
 * @type {string}
 */
var PLANE                      = "Plane";
/**
 * @const
 * @type {string}
 */
var PLANE_GEOMETRY             = "PlaneGeometry";
/**
 * @const
 * @type {string}
 */
var PROJECTOR                  = "Projector";
/**
 * @const
 * @type {string}
 */
var RAY                        = "Ray";
/**
 * @const
 * @type {string}
 */
var RAYCASTER                  = "Raycaster";
/**
 * @const
 * @type {string}
 */
var REVOLUTION_GEOMETRY        = "RevolutionGeometry";
/**
 * @const
 * @type {string}
 */
var SPHERE                     = "Sphere";
/**
 * @const
 * @type {string}
 */
var SPHERE_GEOMETRY            = "SphereGeometry";
/**
 * @const
 * @type {string}
 */
var TEXT_GEOMETRY              = "TextGeometry";
/**
 * @const
 * @type {string}
 */
var TETRAHEDRON_GEOMETRY       = "TetrahedronGeometry";
/**
 * @const
 * @type {string}
 */
var TORUS_GEOMETRY             = "TorusGeometry";
/**
 * @const
 * @type {string}
 */
var PROP_A                     = "a";
/**
 * @const
 * @type {string}
 */
var PROP_ASPECT                = "aspect";
/**
 * @const
 * @type {string}
 */
var PROP_ATTITUDE              = "attitude";
/**
 * @const
 * @type {string}
 */
var PROP_AUTO_CLEAR_COLOR      = "autoClearColor";
/**
 * @const
 * @type {string}
 */
var PROP_AXIS                  = "axis";
/**
 * @const
 * @type {string}
 */
var PROP_B                     = "b";
/**
 * @const
 * @type {string}
 */
var PROP_BOTTOM                = "bottom";
/**
 * @const
 * @type {string}
 */
var PROP_C                     = "c";
/**
 * The 'canvas' property is an alias for the 'domElement' property.
 * @const
 * @type {string}
 */
var PROP_CANVAS                = "canvas";
/**
 * @const
 * @type {string}
 */
var PROP_CENTER                = "center";
/**
 * @const
 * @type {string}
 */
var PROP_CENTROID              = "centroid";
/**
 * @const
 * @type {string}
 */
var PROP_CHARGE                = "charge";
/**
 * @const
 * @type {string}
 */
var PROP_CHILDREN              = "children";
/**
 * @const
 * @type {string}
 */
var PROP_COLOR                 = "color";
/**
 * @const
 * @type {string}
 */
var PROP_COLORS                = "colors";
/**
 * @const
 * @type {string}
 */
var PROP_CONSTANT              = "constant";
/**
 * @const
 * @type {string}
 */
var PROP_DEPTH                 = "depth";
/**
* @const
* @type {string}
*/
var PROP_DEPTH_SEGMENTS        = "depthSegments";
/**
 * @const
 * @type {string}
 */
var PROP_DETAIL                = "detail";
/**
 * @const
 * @type {string}
 */
var PROP_DOM_ELEMENT           = "domElement";
/**
 * @const
 * @type {string}
 */
var PROP_DIRECTION             = "direction";
/**
 * @const
 * @type {string}
 */
var PROP_DISTANCE              = "distance";
/**
 * @const
 * @type {string}
 */
var PROP_EMISSIVE              = "emissive";
/**
 * @const
 * @type {string}
 */
var PROP_EULER_ORDER           = "eulerOrder";
/**
 * @const
 * @type {string}
 */
var PROP_FACE                  = "face";
/**
 * @const
 * @type {string}
 */
var PROP_FACES                 = "faces";
/**
 * @const
 * @type {string}
 */
var PROP_FAR                   = "far";
/**
 * @const
 * @type {string}
 */
var PROP_FOG                   = "fog";
/**
 * @const
 * @type {string}
 */
var PROP_FOV                   = "fov";
/**
 * @const
 * @type {string}
 */
var PROP_GENERATOR             = "generator";
/**
 * @const
 * @type {string}
 */
var PROP_GEOMETRY              = "geometry";
/**
 * @const
 * @type {string}
 */
var PROP_HEIGHT                = "height";
/**
 * @const
 * @type {string}
 */
var PROP_HEIGHT_SEGMENTS       = "heightSegments";
/**
 * @const
 * @type {string}
 */
var PROP_ID                    = "id";
/**
 * @const
 * @type {string}
 */
var PROP_LEFT                  = "left";
/**
 * @const
 * @type {string}
 */
var PROP_MASS                  = "mass";
/**
 * @const
 * @type {string}
 */
var PROP_MOMENTUM              = "momentum";
/**
 * @const
 * @type {string}
 */
var PROP_MATERIAL              = "material";
/**
 * @const
 * @type {string}
 */
var PROP_MATRIX_AUTO_UPDATE    = "matrixAutoUpdate";
/**
 * @const
 * @type {string}
 */
var PROP_MATRIX_WORLD          = "matrixWorld";
/**
 * @const
 * @type {string}
 */
var PROP_NAME                  = "name";
/**
 * @const
 * @type {string}
 */
var PROP_NEAR                  = "near";
/**
 * @const
 * @type {string}
 */
var PROP_NEEDS_UPDATE          = "needsUpdate";
/**
 * @const
 * @type {string}
 */
var PROP_NORMAL                = "normal";
/**
 * @const
 * @type {string}
 */
var PROP_OFFSET                = "offset";
/**
 * @const
 * @type {string}
 */
var PROP_OPACITY               = "opacity";
/**
 * @const
 * @type {string}
 */
var PROP_ORIGIN                = "origin";
/**
 * @const
 * @type {string}
 */
var PROP_OVERDRAW              = "overdraw";
/**
 * @const
 * @type {string}
 */
var PROP_PHI_START             = "phiStart";
/**
 * @const
 * @type {string}
 */
var PROP_PHI_LENGTH            = "phiLength";
/**
 * @const
 * @type {string}
 */
var PROP_PLANE                 = "plane";
/**
 * @const
 * @type {string}
 */
var PROP_POINT                 = "point";
/**
 * @const
 * @type {string}
 */
var PROP_POINTS                = "points";
/**
 * @const
 * @type {string}
 */
var PROP_POSITION              = "position";
/**
 * @const
 * @type {string}
 */
var PROP_QUATERNION            = "quaternion";
/**
 * @const
 * @type {string}
 */
var PROP_RADIUS                = "radius";
/**
 * @const
 * @type {string}
 */
var PROP_RADIUS_CONE           = "radiusCone";
/**
 * @const
 * @type {string}
 */
var PROP_RADIUS_SHAFT          = "radiusShaft";
/**
 * @const
 * @type {string}
 */
var PROP_RADIUS_TOP            = "radiusTop";
/**
 * @const
 * @type {string}
 */
var PROP_RADIUS_BOTTOM         = "radiusBottom";
/**
 * @const
 * @type {string}
 */
var PROP_RAY                   = "ray";
/**
 * @const
 * @type {string}
 */
var PROP_SIZE                  = "size";
/**
 * @const
 * @type {string}
 */
var PROP_SIZE_ATTENUATION      = "sizeAttenuation";
/**
 * @const
 * @type {string}
 */
var PROP_SPHERE                = "sphere";
/**
 * @const
 * @type {string}
 */
var PROP_INTENSITY             = "intensity";
/**
 * @const
 * @type {string}
 */
var PROP_OBJECT                = "object";
/**
 * @const
 * @type {string}
 */
var PROP_OBJECTS               = "objects";
/**
 * @const
 * @type {string}
 */
var PROP_OPEN_ENDED            = "openEnded";
/**
 * @const
 * @type {string}
 */
var PROP_RADIAL_SEGMENTS       = "radialSegments";
/**
 * @const
 * @type {string}
 */
var PROP_RIGHT                 = "right";
/**
 * @const
 * @type {string}
 */
var PROP_ROTATION              = "rotation";
/**
 * @const
 * @type {string}
 */
var PROP_SCALE                 = "scale";
/**
 * @const
 * @type {string}
 */
var PROP_SEGMENTS              = "segments";
/**
 * @const
 * @type {string}
 */
var PROP_SORT_OBJECTS          = "sortObjects";
/**
 * @const
 * @type {string}
 */
var PROP_THETA_START           = "thetaStart";
/**
 * @const
 * @type {string}
 */
var PROP_THETA_LENGTH          = "thetaLength";
/**
 * @const
 * @type {string}
 */
var PROP_TOP                   = "top";
/**
 * @const
 * @type {string}
 */
var PROP_TRANSPARENT           = "transparent";
/**
 * @const
 * @type {string}
 */
var PROP_TYPE                  = "type";
/**
 * @const
 * @type {string}
 */
var PROP_UP                    = "up";
/**
 * @const
 * @type {string}
 */
var PROP_UUID                  = "uuid";
/**
 * @const
 * @type {string}
 */
var PROP_USE_QUATERNION        = "useQuaternion";
/**
 * @const
 * @type {string}
 */
var PROP_VELOCITY              = "velocity";
/**
 * @const
 * @type {string}
 */
var PROP_VERTEX_COLORS         = "vertexColors";
/**
 * @const
 * @type {string}
 */
var PROP_VERTEX_NORMALS        = "vertexNormals";
/**
 * @const
 * @type {string}
 */
var PROP_VERTICES              = "vertices";
/**
 * @const
 * @type {string}
 */
var PROP_VISIBLE               = "visible";
/**
 * @const
 * @type {string}
 */
var PROP_WIDTH                 = "width";
/**
 * @const
 * @type {string}
 */
var PROP_WIDTH_SEGMENTS        = "widthSegments";
/**
 * @const
 * @type {string}
 */
var PROP_WIREFRAME             = "wireframe";
/**
 * @const
 * @type {string}
 */
var PROP_WIREFRAME_LINEWIDTH   = "wireframeLinewidth";
/**
 * @const
 * @type {string}
 */
var PROP_VECTOR                = "vector";
/**
 * @const
 * @type {string}
 */
var PROP_W                     = "w";
/**
 * @const
 * @type {string}
 */
var PROP_X                     = "x";
/**
 * @const
 * @type {string}
 */
var PROP_Y                     = "y";
/**
 * @const
 * @type {string}
 */
var PROP_Z                     = "z";
/**
 * @const
 * @type {string}
 */
var PROP_XY                    = "xy";
/**
 * @const
 * @type {string}
 */
var PROP_YZ                    = "yz";
/**
 * @const
 * @type {string}
 */
var PROP_ZX                    = "zx";
/**
 * @const
 * @type {string}
 */
var PROP_XYZ                   = "xyz";
/**
 * @const
 * @type {string}
 */
var METHOD_APPEND              = "append";
/**
 * @const
 * @type {string}
 */
var METHOD_APPLY_MATRIX        = "applyMatrix";
/**
 * @const
 * @type {string}
 */
var METHOD_CLONE               = "clone";
/**
 * @const
 * @type {string}
 */
var METHOD_CONTAINS_POINT      = "containsPoint";
/**
 * @const
 * @type {string}
 */
var METHOD_COPY                = "copy";
/**
 * @const
 * @type {string}
 */
var METHOD_DETERMINANT         = "determinant";
/**
 * @const
 * @type {string}
 */
var METHOD_DISTANCE_TO_POINT   = "distanceToPoint";
/**
 * @const
 * @type {string}
 */
var METHOD_DISTANCE_TO_SPHERE  = "distanceToSphere";
/**
 * @const
 * @type {string}
 */
var PROP_HEX                   = "hex";
/**
 * @const
 * @type {string}
 */
var METHOD_GET_HEX             = "getHex";
/**
 * @const
 * @type {string}
 */
var METHOD_SET_HEX             = "setHex";
/**
 * @const
 * @type {string}
 */
var METHOD_GET_HEX_STRING      = "getHexString";
/**
 * @const
 * @type {string}
 */
var METHOD_GET_NORMAL_MATRIX   = "getNormalMatrix";
/**
 * @const
 * @type {string}
 */
var METHOD_IDENTITY            = "identity";
/**
 * @const
 * @type {string}
 */
var METHOD_INTERSECTS_SPHERE   = "intersectsSphere";
/**
 * @const
 * @type {string}
 */
var METHOD_INTERSECT_OBJECTS   = "intersectObjects";
/**
 * @const
 * @type {string}
 */
var METHOD_MAKE_ROTATION_X     = "makeRotationX";
/**
 * @const
 * @type {string}
 */
var METHOD_MAKE_ROTATION_Y     = "makeRotationY";
/**
 * @const
 * @type {string}
 */
var METHOD_MAKE_ROTATION_Z     = "makeRotationZ";
/**
 * @const
 * @type {string}
 */
var METHOD_PICKING_RAY         = "pickingRay";
/**
 * @const
 * @type {string}
 */
var METHOD_PROJECT_VECTOR      = "projectVector";
/**
 * @const
 * @type {string}
 */
var METHOD_ROTATE_ON_AXIS      = "rotateOnAxis";
/**
 * @const
 * @type {string}
 */
var METHOD_ROTATE_X            = "rotateX";
/**
 * @const
 * @type {string}
 */
var METHOD_ROTATE_Y            = "rotateY";
/**
 * @const
 * @type {string}
 */
var METHOD_ROTATE_Z            = "rotateZ";
/**
 * @const
 * @type {string}
 */
var METHOD_SET                 = "set";
/**
 * @const
 * @type {string}
 */
var METHOD_SET_X               = "setX";
/**
 * @const
 * @type {string}
 */
var METHOD_SET_Y               = "setY";
/**
 * @const
 * @type {string}
 */
var METHOD_SET_Z               = "setZ";
/**
 * @const
 * @type {string}
 */
var METHOD_GET_COMPONENT       = "getComponent";
/**
 * @const
 * @type {string}
 */
var METHOD_SET_COMPONENT       = "setComponent";
/**
 * @const
 * @type {string}
 */
var METHOD_SET_GEOMETRY        = "setGeometry";
/**
 * @const
 * @type {string}
 */
var METHOD_TRANSPOSE           = "transpose";
/**
 * @const
 * @type {string}
 */
var METHOD_TRANSLATE_ON_AXIS   = "translateOnAxis";
/**
 * @const
 * @type {string}
 */
var METHOD_TRANSLATE_X         = "translateX";
/**
 * @const
 * @type {string}
 */
var METHOD_TRANSLATE_Y         = "translateY";
/**
 * @const
 * @type {string}
 */
var METHOD_TRANSLATE_Z         = "translateZ";
/**
 * @const
 * @type {string}
 */
var METHOD_TRAVERSE            = "traverse";
/**
 * @const
 * @type {string}
 */
var METHOD_UNPROJECT_VECTOR    = "unprojectVector";
/**
 * @const
 * @type {string}
 */
var UPDATE_PROJECTION_MATRIX   = "updateProjectionMatrix"
/**
 * @const
 * @type {string}
 */
var METHOD_UPDATE_MATRIX       = "updateMatrix";
/**
 * @const
 * @type {string}
 */
var METHOD_ADD                 = "add";
/**
 * @const
 * @type {string}
 */
var METHOD_CROSS               = "cross";
/**
 * @const
 * @type {string}
 */
var METHOD_COMPUTE_CENTROIDS   = "computeCentroids";
/**
 * @const
 * @type {string}
 */
var METHOD_COMPUTE_FACE_NORMALS = "computeFaceNormals";
/**
 * @const
 * @type {string}
 */
var METHOD_DOT                 = "dot";
/**
 * @const
 * @type {string}
 */
var METHOD_LOOK_AT             = "lookAt";
/**
* @const
* @type {string}
*/
var METHOD_REMOVE              = "remove";
/**
* @const
* @type {string}
*/
var METHOD_SET_RGB             = "setRGB";
/**
 * @const
 * @type {string}
 */
var ARG_ALPHA                  = "alpha";
/**
 * @const
 * @type {string}
 */
var ARG_ASPECT                 = PROP_ASPECT;
/**
 * @const
 * @type {string}
 */
var ARG_AXIS                   = "axis";
/**
 * @const
 * @type {string}
 */
var ARG_CALLBACK               = "callback";
/**
 * @const
 * @type {string}
 */
var ARG_COLOR                  = PROP_COLOR;
/**
 * @const
 * @type {string}
 */
var ARG_DEPTH                  = PROP_DEPTH;
/**
 * @const
 * @type {string}
 */
var ARG_DETAIL                 = PROP_DETAIL;
/**
 * @const
 * @type {string}
 */
var ARG_FAR                    = PROP_FAR;
/**
 * @const
 * @type {string}
 */
var ARG_FOV                    = PROP_FOV;
/**
 * @const
 * @type {string}
 */
var ARG_LENGTH                 = "length";
/**
 * @const
 * @type {string}
 */
var ARG_NEAR                   = PROP_NEAR;
/**
 * @const
 * @type {string}
 */
var ARG_RADIUS                 = PROP_RADIUS;
/**
 * @const
 * @type {string}
 */
var ARG_RADIUS_CONE            = PROP_RADIUS_CONE;
/**
 * @const
 * @type {string}
 */
var ARG_RADIUS_SHAFT           = PROP_RADIUS_SHAFT;
/**
 * @const
 * @type {string}
 */
var ARG_OTHER                  = "other";
/**
 * @const
 * @type {string}
 */
var ARG_THETA                  = "theta";
/**
 * @const
 * @type {string}
 */
var ARG_MATRIX                 = "matrix";
/**
 * @const
 * @type {string}
 */
var ARG_VECTOR                 = "vector";
/**
 * @const
 * @type {string}
 */
var ARG_WIDTH                  = PROP_WIDTH;
/**
 * @const
 * @type {string}
 */
var COMMA                      = ",";
/**
 * @const
 * @type {string}
 */
var SPACE                      = " ";
/**
 * @const
 * @type {string}
 */
var EQUAL                      = "=";
/**
 * @const
 * @type {string}
 */
var LPAREN                     = "(";
/**
 * @const
 * @type {string}
 */
var RPAREN                     = ")";
/**
 * @const
 * @type {string}
 */
var NEWLINE                    = "\n";
/**
 * @const
 * @type {string}
 */
var OP_MUL                     = "*";
/**
 * CylinderGeometry
 *
 * This is a customized version of THREE.CylinderGeometry.
 *
 * @constructor
 * @extends THREE.Geometry
 * @param {number} radiusTop
 * @param {number} radiusBottom
 * @param {number} height
 * @param {number} radialSegments
 * @param {number} heightSegments
 * @param {boolean} openEnded
 * @param {Object} axis
 */
Sk.stdlib.CylinderGeometry = function (radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, axis) {

  THREE[GEOMETRY].call(this);

  this.radiusTop = radiusTop = radiusTop !== undefined ? radiusTop : 20;
  this.radiusBottom = radiusBottom = radiusBottom !== undefined ? radiusBottom : 20;
  this.height = height = height !== undefined ? height : 100;

  this.radialSegments = radialSegments = radialSegments || 8;
  this.heightSegments = heightSegments = heightSegments || 1;

  this.openEnded = openEnded = openEnded !== undefined ? openEnded : false;

  var heightHalf = height / 2;

  var direction = Sk.stdlib.direction(axis.x, axis.y, axis.z);
  var orientation = Sk.stdlib.orientation(axis.x, axis.y, axis.z);

  var idxAngle;
  var idxSlice;
//var x, y;
  // Each entry corresponds to a horizontal slice through the cylinder and contains the vertex indices.
  var vertices = [];
  // Each entry corresponds to a horizontal slice through the cylinder and contains the texture coordinates.
  var uvs = [];

  // The height index must have an extra value.
  for (idxSlice = 0; idxSlice <= heightSegments; idxSlice++) {

    var verticesRow = [];
    var uvsRow = [];

    var v = idxSlice / heightSegments;
    // The cylinder is built from top to bottom.
    var z = - v * height + heightHalf;
    var radius = v * ( radiusBottom - radiusTop ) + radiusTop;

    // Notice how this loop computes the seam vetices twice.
    // That could be improved by using modulo arithmetic later.
    // I just changed the <= to <.
    for (idxAngle = 0; idxAngle < radialSegments; idxAngle++) {

      var u = idxAngle / radialSegments;

      var theta = u * Math.PI * 2;
      var vertex = Sk.three.vector3Cycle(z, radius * Math.cos(theta), radius * Math.sin(theta), direction);

      this.vertices.push( vertex );

      verticesRow.push(this.vertices.length - 1);
      // Flip the t texture coordinate (s,t) because the cylinder builds from the top.
      // The texture mapping is simply wrapping a label around a can - almost.
      // I expect sloping cans trapezoidal cans will need some adjustment.
      uvsRow.push(new THREE.Vector2(u, 1 - v));
    }
    vertices.push( verticesRow );
    uvs.push( uvsRow );
  }

  var tanTheta = (radiusBottom - radiusTop) / height;
  var na, nb;
  var c0, c1;

  // We now compute the faces and the normals for the sides of the cyclinder.
  // The range of idxTheta is now the radial segment index (zero-based).
  for (idxAngle = 0; idxAngle < radialSegments; idxAngle++) {
    var idxThetaLo = (idxAngle + 0) % radialSegments;
    var idxThetaHi = (idxAngle + 1) % radialSegments;
    // The vertices already have much of the information required for the normals.
    if (radiusTop !== 0) {
      na = this.vertices[vertices[0][idxThetaLo]].clone();
      nb = this.vertices[vertices[0][idxThetaHi]].clone();
    }
    else {
      na = this.vertices[vertices[1][idxThetaLo]].clone();
      nb = this.vertices[vertices[1][idxThetaHi]].clone();
    }

    c0 = na.getComponent((direction + 2) % 3);
    c1 = na.getComponent((direction + 1) % 3);
    na.setComponent((direction + 0) % 3, Math.sqrt(c0 * c0 + c1 * c1) * tanTheta);
    na.normalize();
    c0 = nb.getComponent((direction + 2) % 3);
    c1 = nb.getComponent((direction + 1) % 3);
    nb.setComponent((direction + 0) % 3, Math.sqrt(c0 * c0 + c1 * c1) * tanTheta);
    nb.normalize();

    // Not sure why the limits is one less in this case?
    for (idxSlice = 0; idxSlice < heightSegments; idxSlice++) {

      var v1 = vertices[idxSlice][idxThetaLo];
      var v2 = vertices[idxSlice + 1][idxThetaLo];
      var v3 = vertices[idxSlice + 1][idxThetaHi];
      var v4 = vertices[idxSlice][idxThetaHi];

      var n1 = na.clone();
      var n2 = na.clone();
      var n3 = nb.clone();
      var n4 = nb.clone();

      var uv1 = uvs[idxSlice][idxThetaLo].clone();
      var uv2 = uvs[idxSlice + 1][idxThetaLo].clone();
      var uv3 = uvs[idxSlice + 1][idxThetaHi].clone();
      var uv4 = uvs[idxSlice][idxThetaHi].clone();

      this.faces.push( new THREE.Face3( v1, v2, v4, [ n1, n2, n4 ] ) );
      this.faceVertexUvs[0].push([uv1, uv2, uv4]);

      this.faces.push( new THREE.Face3( v2, v3, v4, [ n2, n3, n4 ] ) );
      this.faceVertexUvs[ 0 ].push( [ uv2, uv3, uv4 ] );
    }
  }
  // top cap
  if (openEnded === false && radiusTop > 0) {

    this.vertices.push(Sk.three.vector3Cycle(+heightHalf, 0, 0, direction));

    for (idxAngle = 0; idxAngle < radialSegments; idxAngle++) {
      var idxThetaLo = (idxAngle + 0) % radialSegments;
      var idxThetaHi = (idxAngle + 1) % radialSegments;
      var v1 = vertices[0][idxThetaLo];
      var v2 = vertices[0][idxThetaHi];
      var v3 = this.vertices.length - 1;

      var n1 = Sk.three.vector3Cycle(+1, 0, 0, direction);
      var n2 = Sk.three.vector3Cycle(+1, 0, 0, direction);
      var n3 = Sk.three.vector3Cycle(+1, 0, 0, direction);

      var uv1 = uvs[0][idxThetaLo].clone();
      var uv2 = uvs[0][idxThetaHi].clone();
      var uv3 = new THREE.Vector2(uv2.u, 0);

      this.faces.push( new THREE.Face3(v1, v2, v3, [n1, n2, n3]));
      this.faceVertexUvs[0].push([uv1, uv2, uv3]);
    }
  }
  // bottom cap
  if (openEnded === false && radiusBottom > 0) {

    this.vertices.push(Sk.three.vector3Cycle(-heightHalf, 0, 0, direction));

    for (idxAngle = 0; idxAngle < radialSegments; idxAngle++) {
      var idxThetaLo = (idxAngle + 0) % radialSegments;
      var idxThetaHi = (idxAngle + 1) % radialSegments;
      var v1 = vertices[heightSegments][idxThetaHi];
      var v2 = vertices[heightSegments][idxThetaLo];
      var v3 = this.vertices.length - 1;

      var n1 = Sk.three.vector3Cycle(-1, 0, 0, direction);
      var n2 = Sk.three.vector3Cycle(-1, 0, 0, direction);
      var n3 = Sk.three.vector3Cycle(-1, 0, 0, direction);

      var uv1 = uvs[heightSegments][idxThetaHi].clone();
      var uv2 = uvs[heightSegments][idxThetaLo].clone();
      var uv3 = new THREE.Vector2(uv2.u, 1);

      this.faces.push( new THREE.Face3(v1, v2, v3, [n1, n2, n3]));
      this.faceVertexUvs[0].push([uv1, uv2, uv3]);
    }
  }
  this.computeCentroids();
  this.computeFaceNormals();
}
Sk.stdlib.CylinderGeometry.prototype = Object.create(THREE['Geometry'].prototype);
/**
 * PlaneGeometry
 *
 * This is a customized version of THREE.PlaneGeometry.
 *
 * @constructor
 * @param {number} width
 * @param {number} height
 * @param {number} widthSegments
 * @param {number} heightSegments
 */
Sk.stdlib.PlaneGeometry = function (width, height, widthSegments, heightSegments) {

  THREE[GEOMETRY].call( this );

  this.width = width;
  this.height = height;

  this.widthSegments = widthSegments || 1;
  this.heightSegments = heightSegments || 1;

  var ix, iz;
  var width_half = width / 2;
  var height_half = height / 2;

  var gridX = this.widthSegments;
  var gridZ = this.heightSegments;

  var gridX1 = gridX + 1;
  var gridZ1 = gridZ + 1;

  var segment_width = this.width / gridX;
  var segment_height = this.height / gridZ;

  var normal = new THREE.Vector3(0, 0, 1);

  for ( iz = 0; iz < gridZ1; iz ++ ) {
    for ( ix = 0; ix < gridX1; ix ++ ) {
      var x = ix * segment_width - width_half;
      var y = iz * segment_height - height_half;
      this['vertices'].push(new THREE.Vector3(x, - y, 0));
    }
  }

  for ( iz = 0; iz < gridZ; iz ++ ) {
    for ( ix = 0; ix < gridX; ix ++ ) {
      var a = ix + gridX1 * iz;
      var b = ix + gridX1 * ( iz + 1 );
      var c = ( ix + 1 ) + gridX1 * ( iz + 1 );
      var d = ( ix + 1 ) + gridX1 * iz;

      var uva = new THREE.Vector2( ix / gridX, 1 - iz / gridZ );
      var uvb = new THREE.Vector2( ix / gridX, 1 - ( iz + 1 ) / gridZ );
      var uvc = new THREE.Vector2( ( ix + 1 ) / gridX, 1 - ( iz + 1 ) / gridZ );
      var uvd = new THREE.Vector2( ( ix + 1 ) / gridX, 1 - iz / gridZ );

      var face = new THREE.Face3(a, b, d);
      face.normal.copy( normal );
      face.vertexNormals.push(normal.clone(), normal.clone(), normal.clone());

      this['faces'].push(face);
      this['faceVertexUvs'][0].push([uva, uvb, uvd]);

      face = new THREE.Face3(b, c, d);
      face.normal.copy(normal);
      face.vertexNormals.push(normal.clone(), normal.clone(), normal.clone());

      this['faces'].push(face);
      this['faceVertexUvs'][0].push([uvb.clone(), uvc, uvd.clone()]);
    }
  }
  this['computeCentroids']();
};
Sk.stdlib.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype);
/**
 * RevolutionGeometry
 *
 * This is a customized version of THREE.LatheGeometry.
 *
 * @constructor
 * @param {!Array.<number>} points
 * @param {!Object} generator
 * @param {number=} segments
 * @param {number=} phiStart
 * @param {number=} phiLength
 * @param {THREE.Quaternion=} attitude
 */
Sk.stdlib.RevolutionGeometry = function (points, generator, segments, phiStart, phiLength, attitude) {

  THREE[GEOMETRY].call( this );

  segments = segments || 12;
  phiStart = phiStart || 0;
  phiLength = phiLength || 2 * Math.PI;

  // Determine heuristically whether the user intended to make a complete revolution.
  var isClosed = Math.abs(2 * Math.PI - Math.abs(phiLength - phiStart)) < 0.0001;

  // The number of vertical half planes (phi constant).
  var halfPlanes = isClosed ? segments : segments + 1;
  var inverseSegments = 1.0 / segments;
  var phiStep = (phiLength - phiStart) * inverseSegments;

  for (var i = 0, il = halfPlanes; i < il; i++) {

    var phi = phiStart + i * phiStep;

    var halfAngle = phi / 2;

    var cosHA = Math.cos( halfAngle );
    var sinHA = Math.sin( halfAngle );
    var rotor = new THREE.Quaternion(generator.x * sinHA, generator.y * sinHA, generator.z * sinHA, cosHA);

    for (var j = 0, jl = points.length; j < jl; j++) {

      var pt = points[ j ];

      var vertex = new THREE.Vector3(pt.x, pt.y, pt.z);

      // The generator tells us how to rotate the points.
      vertex.applyQuaternion(rotor);

      // The attitude tells us where we want the symmetry axis to be.
      if (attitude) {
        vertex.applyQuaternion(attitude);
      }

      this['vertices'].push( vertex );
    }
  }

  var inversePointLength = 1.0 / ( points.length - 1 );
  var np = points.length;

  // The denominator for modulo index arithmetic.
  var wrap = np * halfPlanes;

  for ( var i = 0, il = segments; i < il; i ++ ) {

    for ( var j = 0, jl = points.length - 1; j < jl; j ++ ) {

      var base = j + np * i;
      var a = base % wrap;
      var b = (base + np) % wrap;
      var c = (base + 1 + np) % wrap;
      var d = (base + 1) % wrap;

      var u0 = i * inverseSegments;
      var v0 = j * inversePointLength;
      var u1 = u0 + inverseSegments;
      var v1 = v0 + inversePointLength;

      this['faces'].push(new THREE.Face3(d, b, a));
      this['faceVertexUvs'][ 0 ].push([
        new THREE.Vector2(u0, v0),
        new THREE.Vector2(u1, v0),
        new THREE.Vector2(u0, v1)
      ]);

      this['faces'].push(new THREE.Face3(d, c, b));
      this['faceVertexUvs'][ 0 ].push([
        new THREE.Vector2(u1, v0),
        new THREE.Vector2(u1, v1), 
        new THREE.Vector2(u0, v1)
      ]);
    }
  }

  this['computeCentroids']();
  this['computeFaceNormals']();
  this['computeVertexNormals']();
};
Sk.stdlib.RevolutionGeometry.prototype = Object.create(THREE.Geometry.prototype);
/**
 * TorusGeometry
 *
 * @constructor
 * @param {number=} radius
 * @param {number=} tube
 * @param {number=} radialSegments
 * @param {number=} tubularSegments
 * @param {number=} arc
 */
Sk.stdlib.TorusGeometry = function(radius, tube, radialSegments, tubularSegments, arc) {

  THREE[GEOMETRY].call(this);

  var scope = this;

  this.radius = radius || 100;
  this.tube = tube || 40;
  this.radialSegments = radialSegments || 8;
  this.tubularSegments = tubularSegments || 6;
  this.arc = arc || Math.PI * 2;

  var center = new THREE.Vector3(), uvs = [], normals = [];

  for ( var j = 0; j <= this.radialSegments; j ++ ) {

    for ( var i = 0; i <= this.tubularSegments; i ++ ) {

      var u = i / this.tubularSegments * this.arc;
      var v = j / this.radialSegments * Math.PI * 2;

      center.x = this.radius * Math.cos( u );
      center.y = this.radius * Math.sin( u );

      var vertex = new THREE.Vector3();
      vertex.x = ( this.radius + this.tube * Math.cos( v ) ) * Math.cos( u );
      vertex.y = ( this.radius + this.tube * Math.cos( v ) ) * Math.sin( u );
      vertex.z = this.tube * Math.sin( v );

      this['vertices'].push( vertex );

      uvs.push( new THREE.Vector2( i / this.tubularSegments, j / this.radialSegments ) );
      normals.push( vertex.clone().sub( center ).normalize() );
    }
  }

  for ( var j = 1; j <= this.radialSegments; j ++ ) {

    for ( var i = 1; i <= this.tubularSegments; i ++ ) {

      var a = ( this.tubularSegments + 1 ) * j + i - 1;
      var b = ( this.tubularSegments + 1 ) * ( j - 1 ) + i - 1;
      var c = ( this.tubularSegments + 1 ) * ( j - 1 ) + i;
      var d = ( this.tubularSegments + 1 ) * j + i;

      var face = new THREE.Face3(a, b, d, [normals[a], normals[b], normals[d]]);
      face.normal.add( normals[ a ] );
      face.normal.add( normals[ b ] );
      face.normal.add( normals[ d ] );
      face.normal.normalize();

      this['faces'].push(face);

      this['faceVertexUvs'][0].push([uvs[a].clone(), uvs[b].clone(), uvs[d].clone()]);

      face = new THREE.Face3(b, c, d, [normals[b], normals[c], normals[d]]);
      face.normal.add( normals[ b ] );
      face.normal.add( normals[ c ] );
      face.normal.add( normals[ d ] );
      face.normal.normalize();

      this['faces'].push(face);

      this['faceVertexUvs'][0].push([uvs[b].clone(), uvs[c].clone(), uvs[d].clone()]);
    }
  }
  this['computeCentroids']();
};
Sk.stdlib.TorusGeometry.prototype = Object.create(THREE.Geometry.prototype );
/**
 * VortexGeometry
 *
 * @constructor
 * @param {number=} radius
 * @param {number=} radiusCone
 * @param {number=} radiusShaft
 * @param {number=} lengthCone
 * @param {number=} lengthShaft
 * @param {number=} arrowSegments
 * @param {number=} radialSegments
 */
Sk.stdlib.VortexGeometry = function(radius, radiusCone, radiusShaft, lengthCone, lengthShaft, arrowSegments, radialSegments) {

  THREE[GEOMETRY].call(this);

  var scope = this;

  var n = 9;
  this.radius = radius || 1;
  this.radiusCone  = radiusCone || 0.08;
  this.radiusShaft = radiusShaft || 0.01;
  this.lengthCone  = lengthCone || 0.2;
  this.lengthShaft = lengthShaft || 0.8;
  arrowSegments = arrowSegments || 6;
  this.circleSegments = arrowSegments * n;
  this.radialSegments = radialSegments || 8;

  var twoPI = Math.PI * 2;
  var R = this.radius;
  var center = new THREE.Vector3();
  var uvs = [];
  var normals = [];

  var alpha = this.lengthShaft / (this.lengthCone + this.lengthShaft);
  var factor = twoPI / arrowSegments;
  var theta = alpha / (n - 2);
  function computeAngle(circleSegments, i) {
    var m = i % n;
    if (m === n - 1) {
      return computeAngle(circleSegments, i - 1);
    }
    else {
      var a = (i - m)/n;
      return factor * (a + m * theta);
    }
  }

  function computeRadius(i) {
    var m = i % n;
    if (m === n - 1) {
      return radiusCone;
    }
    else {
      return radiusShaft;
    }
  }

  for ( var j = 0; j <= this.radialSegments; j ++ ) {

    // v is the angle inside the vortex tube.
    var v = twoPI * j / this.radialSegments;
    var cosV = Math.cos(v);
    var sinV = Math.sin(v);

    for ( var i = 0; i <= this.circleSegments; i ++ ) {

      // u is the angle in the xy-plane measured from the x-axis clockwise about the z-axis.
      var u = computeAngle(this.circleSegments, i)
      var cosU = Math.cos(u);
      var sinU = Math.sin(u);

      center.x = R * cosU;
      center.y = R * sinU;

      var vertex = new THREE.Vector3();
      var r = computeRadius(i);
      vertex.x = (R + r * cosV ) * cosU;
      vertex.y = (R + r * cosV ) * sinU;
      vertex.z = r * sinV;

      this['vertices'].push( vertex );

      uvs.push( new THREE.Vector2( i / this.circleSegments, j / this.radialSegments ) );
      normals.push( vertex.clone().sub( center ).normalize() );
    }
  }

  for ( var j = 1; j <= this.radialSegments; j ++ ) {

    for ( var i = 1; i <= this.circleSegments; i ++ ) {

      var a = ( this.circleSegments + 1 ) * j + i - 1;
      var b = ( this.circleSegments + 1 ) * ( j - 1 ) + i - 1;
      var c = ( this.circleSegments + 1 ) * ( j - 1 ) + i;
      var d = ( this.circleSegments + 1 ) * j + i;

      var face = new THREE.Face3(a, b, d, [normals[a], normals[b], normals[d]]);
      face.normal.add( normals[ a ] );
      face.normal.add( normals[ b ] );
      face.normal.add( normals[ d ] );
      face.normal.normalize();

      this['faces'].push(face);

      this['faceVertexUvs'][0].push([uvs[a].clone(), uvs[b].clone(), uvs[d].clone()]);

      face = new THREE.Face3(b, c, d, [normals[b], normals[c], normals[d]]);
      face.normal.add( normals[ b ] );
      face.normal.add( normals[ c ] );
      face.normal.add( normals[ d ] );
      face.normal.normalize();

      this['faces'].push(face);

      this['faceVertexUvs'][0].push([uvs[b].clone(), uvs[c].clone(), uvs[d].clone()]);
    }
  }
  this['computeCentroids']();
};
Sk.stdlib.VortexGeometry.prototype = Object.create(THREE.Geometry.prototype );
/**
 * @param {string} name
 * @param {Object} valuePy
 * @return {boolean} The JavaScript value of the Python argument.
 */
function checkArgBool(name, valuePy) {
  Sk.ffi.checkArgType(name, Sk.ffi.PyType.BOOL, Sk.ffi.isBool(valuePy), valuePy);
  return Sk.ffi.remapToJs(valuePy);
}

function isBoolean(x)   { return typeof x === 'boolean'; }
function isFunction(x)  { return typeof x === 'function'; }
function isNumber(x)    { return typeof x === 'number'; }
function isObject(x)    { return typeof x === 'object'; }
function isString(x)    { return typeof x === 'string'; }
function isUndefined(x) { return typeof x === 'undefined'; }

function isDefined(x)   { return typeof x !== 'undefined'; }
function isNull(x)      { return typeof x === 'object' && x === null; }

function isEuclidean3Py(valuePy) {return Sk.ffi.isInstance(valuePy, EUCLIDEAN_3);}
function isQuaternionPy(valuePy) {return Sk.ffi.isInstance(valuePy, QUATERNION);}
function isVector3Py(valuePy) {return Sk.ffi.isInstance(valuePy, VECTOR_3);}
function isGeometryPy(valuePy) {
  return Sk.ffi.isInstance(valuePy) && Sk.ffi.typeName(valuePy) === GEOMETRY; // TODO: GEOMETRIES
}

function quaternionToEuclidean3Py(quaternion) {
  var euclidean = new THREE[EUCLIDEAN_3](new THREE.Vector3(0, 0, 0), quaternion, 0);
  return Sk.ffi.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(euclidean, EUCLIDEAN_3));
}
/**
 * @param {string} className
 * @param {Object} targetPy
 * @param {string} name
 * @param {Object} valuePy
 * @param {string=} aliasName
 */
function setQuaternionProperty(className, targetPy, name, valuePy, aliasName) {
  Sk.ffi.checkArgType("target", className, Sk.ffi.isInstance(targetPy, className), targetPy);
  aliasName = aliasName || name;
  Sk.ffi.checkArgType(aliasName, EUCLIDEAN_3, isEuclidean3Py(valuePy), valuePy);
  var quaternionPy = Sk.ffi.gattr(valuePy, PROP_QUATERNION);
  Sk.ffi.checkArgType(aliasName, QUATERNION, isQuaternionPy(quaternionPy), quaternionPy);
  Sk.ffi.remapToJs(targetPy)[name] = Sk.ffi.remapToJs(quaternionPy);
}
/**
 *
 */
function vectorToEuclidean3Py(vector) {
  var euclidean = new THREE[EUCLIDEAN_3](vector, new THREE.Quaternion(0,0,0,0), 0);
  return Sk.ffi.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(euclidean, EUCLIDEAN_3));
}
/**
 * Extracts the THREE.Vector3 JavaScript instance from a Python Euclidean3.
 *
 * @param {string} name
 * @param {Object} euclidean3Py
 */
function remapToVector3(name, euclidean3Py) {
  if (isDefined(euclidean3Py)) {
    Sk.ffi.checkArgType(name, EUCLIDEAN_3, isEuclidean3Py(euclidean3Py), euclidean3Py);
    var vectorPy = Sk.ffi.gattr(euclidean3Py, PROP_VECTOR);
    Sk.ffi.checkArgType(name, VECTOR_3, isVector3Py(vectorPy), vectorPy);
    return Sk.ffi.remapToJs(vectorPy);
  }
  else {
    return undefined;
  }
}
/**
 * @param {Object} obj
 * @param {string} name
 * @param {Object} valuePy
 * @param {string=} aliasName
 */
function setVectorProperty(obj, name, valuePy, aliasName) {
  aliasName = aliasName || name;
  obj[name] = remapToVector3(aliasName, valuePy);
}

function methodAdd(target) {
  if (!isObject(target)) {
    throw Sk.ffi.assertionError("target must be an object.");
  }
  if (!isFunction(target[METHOD_ADD])) {
    throw Sk.ffi.assertionError("target must have an 'add' function.");
  }
  return Sk.ffi.callableToPy(mod, METHOD_ADD, function(methodPy, childPy) {
    var child = Sk.ffi.remapToJs(childPy);
    target.add(child);
  });
}

function methodLookAt(targetPy) {
  return Sk.ffi.callableToPy(mod, METHOD_LOOK_AT, function(methodPy, euclideanPy) {
    Sk.ffi.checkMethodArgs(METHOD_LOOK_AT, arguments, 1, 1);
    Sk.ffi.checkArgType(ARG_VECTOR, EUCLIDEAN_3, isEuclidean3Py(euclideanPy), euclideanPy);
    var vectorPy = Sk.ffi.gattr(euclideanPy, PROP_VECTOR);
    Sk.ffi.checkArgType(ARG_VECTOR, VECTOR_3, isVector3Py(vectorPy), vectorPy);
    Sk.ffi.remapToJs(targetPy)[METHOD_LOOK_AT](Sk.ffi.remapToJs(vectorPy));
    return targetPy;
  });
}

function methodRemove(target) {
  if (!isObject(target)) {
    throw Sk.ffi.assertionError("target must be an object.");
  }
  if (!isFunction(target[METHOD_REMOVE])) {
    throw Sk.ffi.assertionError("target must have a 'remove' function.");
  }
  return Sk.ffi.callableToPy(mod, METHOD_ADD, function(methodPy, childPy) {
    var child = Sk.ffi.remapToJs(childPy);
    target.remove(child);
  });
}
/**
 *
 */
function mutableVertexListPy(vertices) {
  return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
      Sk.ffi.referenceToPy(vertices, PROP_VERTICES, undefined, selfPy);
    });
    $loc.__getattr__ = Sk.ffi.functionPy(function(verticesPy, name) {
      switch(name) {
        case METHOD_APPEND: {
          return Sk.ffi.callableToPy(mod, METHOD_APPEND, function(methodPy, vectorPy) {
              vertices.push(remapToVector3(PROP_VECTOR, vectorPy));
          });
        }
      }
    });
    $loc.__getitem__ = Sk.ffi.functionPy(function(verticesPy, indexPy) {
      var index = Sk.ffi.remapToJs(indexPy);
      return vectorToEuclidean3Py(vertices[index]);
    });
    $loc.mp$length = function() {return vertices.length;};
    $loc.__str__ = Sk.ffi.functionPy(function(self) {
      return Sk.ffh.str(Sk.ffi.listPy(vertices.map(function(vertexJs) {return vectorToEuclidean3Py(vertexJs);})));
    });
    $loc.__repr__ = Sk.ffi.functionPy(function(self) {
      return Sk.ffi.stringToPy(PROP_VERTICES);
    });
  }, PROP_VERTICES, []));
}
/**
 *
 */
function mutableFaceListPy(elements) {
  return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
      Sk.ffi.referenceToPy(elements, PROP_FACES, undefined, selfPy);
    });
    $loc.__getattr__ = Sk.ffi.functionPy(function(verticesPy, name) {
      switch(name) {
        case METHOD_APPEND: {
          return Sk.ffi.callableToPy(mod, METHOD_APPEND, function(methodPy, elementPy) {
              elements.push(Sk.ffi.remapToJs(elementPy));
          });
        }
      }
    });
    $loc.__getitem__ = Sk.ffi.functionPy(function(verticesPy, indexPy) {
      var index = Sk.ffi.remapToJs(indexPy);
      return faceToFace3Py(elements[index]);
    });
    $loc.mp$length = function() {return elements.length;};
    $loc.__str__ = Sk.ffi.functionPy(function(self) {
      return Sk.ffh.str(Sk.ffi.listPy(elements.map(function(elementJs) {return faceToFace3Py(elementJs);})));
    });
    $loc.__repr__ = Sk.ffi.functionPy(function(self) {
      return Sk.ffi.stringToPy(PROP_FACES);
    });
  }, PROP_FACES, []));
}
/**
 *
 */
function faceToFace3Py(face) {
  return Sk.ffi.callsim(mod[Sk.three.FACE_3], Sk.ffi.referenceToPy(face, Sk.three.FACE_3));
}
/**
 *
 */
function colorToColorPy(color) {
  return Sk.ffi.callsim(mod[COLOR], Sk.ffi.referenceToPy(color, COLOR));
}
/**
 * Wrapper Python class for interacting with a JavaScript array.
 * @param {Array.<!THREE.Color>} colors
 */
function mutableColorListPy(colors) {
  return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
      Sk.ffi.referenceToPy(colors, PROP_COLORS, undefined, selfPy);
    });
    $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
      switch(name) {
        case METHOD_APPEND: {
          return Sk.ffi.callableToPy(mod, METHOD_APPEND, function(methodPy, colorPy) {
              colors.push(Sk.ffi.remapToJs(colorPy));
          });
        }
      }
    });
    $loc.__getitem__ = Sk.ffi.functionPy(function(selfPy, indexPy) {
      var index = Sk.ffi.remapToJs(indexPy);
      return colorToColorPy(colors[index]);
    });
    $loc.mp$length = function() {return colors.length;};
    $loc.__str__ = Sk.ffi.functionPy(function(self) {
      return Sk.ffh.str(Sk.ffi.listPy(colors.map(function(colorJs) {return colorToColorPy(colorJs);})));
    });
    $loc.__repr__ = Sk.ffi.functionPy(function(self) {
      return Sk.ffi.stringToPy(PROP_COLORS);
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

function isColorPy(valuePy) {
  return Sk.ffi.isInstance(valuePy, COLOR);
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
/**
 * @param {boolean=} lax
 */
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

Sk.builtin.defineEuclidean3(mod, THREE, BLADE);

mod[SCENE] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, sceneRefPy) {
    if (Sk.ffi.isUndefined(sceneRefPy)) {
      Sk.ffi.checkMethodArgs(SCENE, arguments, 0, 0);
      Sk.ffi.referenceToPy(new THREE[SCENE](), SCENE, undefined, selfPy);
    }
    else if (Sk.ffi.isInstance(sceneRefPy, SCENE)) {
      Sk.ffi.referenceToPy(Sk.ffi.remapToJs(sceneRefPy), SCENE, undefined, selfPy);
    }
    else
    {
      Sk.ffi.checkMethodArgs(SCENE, arguments, 0, 0);
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(scenePy, name) {
    var scene = Sk.ffi.remapToJs(scenePy);
    switch(name) {
      case PROP_CHILDREN: {
        return Sk.ffi.listPy(scene[PROP_CHILDREN].map(function(objectJs) {return Sk.ffi.callsim(mod[Sk.three.OBJECT_3D], Sk.ffi.referenceToPy(objectJs, Sk.three.OBJECT_3D));}));
      }
      case PROP_POSITION: {
        return vectorToEuclidean3Py(scene[PROP_POSITION]);
      }
      case PROP_QUATERNION: {
        return Sk.ffi.callsim(mod[QUATERNION], Sk.ffi.referenceToPy(scene[PROP_QUATERNION], QUATERNION));
      }
      case PROP_ROTATION: {
        return vectorToEuclidean3Py(scene[PROP_ROTATION]);
      }
      case PROP_EULER_ORDER: {
        return Sk.ffi.stringToPy(scene[PROP_EULER_ORDER]);
      }
      case PROP_SCALE: {
        return vectorToEuclidean3Py(scene[PROP_SCALE]);
      }
      case PROP_UP: {
        return vectorToEuclidean3Py(scene[PROP_UP]);
      }
      case PROP_USE_QUATERNION: {
        return scene[PROP_USE_QUATERNION];
      }
      case METHOD_LOOK_AT: {return methodLookAt(scenePy);}
      case METHOD_ADD:     {return methodAdd(scene);}
      case METHOD_REMOVE:  {return methodRemove(scene);}
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(scenePy, name, valuePy) {
    var scene = Sk.ffi.remapToJs(scenePy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      case PROP_POSITION:
      case PROP_ROTATION:
      case PROP_SCALE:
      case PROP_UP: {
        setVectorProperty(scene, name, valuePy);
      }
      break;
      case PROP_QUATERNION: {
        scene[PROP_QUATERNION] = value;
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
      case PROP_USE_QUATERNION: {
        scene[PROP_USE_QUATERNION] = value;
      }
      break;
      default: {
        throw new Error(name + " is not a write attribute of " + SCENE);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(self) {
    return Sk.ffi.stringToPy(SCENE);
  });
}, SCENE, []);

mod[CANVAS_RENDERER] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  var PROP_AUTO_CLEAR   = "autoClear";
  var PROP_CLEAR_COLOR  = "clearColor";
  var PROP_GAMMA_INPUT  = "gammaInput";
  var PROP_GAMMA_OUTPUT = "gammaOutput";
  var PROP_SORT_OBJECTS = "sortObjects";
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, parametersPy) {
    var parameters = Sk.ffi.remapToJs(parametersPy);
    Sk.ffi.referenceToPy(new THREE[CANVAS_RENDERER](parameters), CANVAS_RENDERER, undefined, selfPy);
  });
  $loc.setSize = Sk.ffi.functionPy(function(self, width, height) {
    self.v.setSize(Sk.builtin.asnum$(width), Sk.builtin.asnum$(height));
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(self, name) {
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
      case PROP_CANVAS:
      case PROP_DOM_ELEMENT: {
        return Sk.ffi.callsim(mod[NODE], Sk.ffi.referenceToPy(renderer[PROP_DOM_ELEMENT], NODE));
      }
      case METHOD_RENDER: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_RENDER;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, scene, camera) {
            scene  = Sk.ffi.remapToJs(scene);
            camera = Sk.ffi.remapToJs(camera);
            renderer[METHOD_RENDER](scene, camera);
          });
          $loc.__str__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_RENDER);
          })
          $loc.__repr__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_RENDER);
          })
        }, METHOD_RENDER, []));
      }
      case METHOD_GET_CLEAR_COLOR: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_GET_CLEAR_COLOR;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.callsim(mod[COLOR], Sk.ffi.referenceToPy(renderer[METHOD_GET_CLEAR_COLOR](), COLOR));
          });
          $loc.__str__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_GET_CLEAR_COLOR);
          });
          $loc.__repr__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_GET_CLEAR_COLOR);
          });
        }, METHOD_GET_CLEAR_COLOR, []));
      }
      case METHOD_SET_CLEAR_COLOR: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_SET_CLEAR_COLOR;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, color, alpha) {
            color  = Sk.ffi.remapToJs(color);
            alpha = Sk.ffi.remapToJs(alpha);
            renderer[METHOD_SET_CLEAR_COLOR](color, alpha);
          });
          $loc.__str__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_SET_CLEAR_COLOR);
          });
          $loc.__repr__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_SET_CLEAR_COLOR);
          });
        }, METHOD_SET_CLEAR_COLOR, []));
      }
      case METHOD_SET_SIZE: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_SET_SIZE;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, width, height, updateStyle) {
            width  = Sk.ffi.remapToJs(width);
            height = Sk.ffi.remapToJs(height);
            updateStyle = Sk.ffi.remapToJs(updateStyle);
            renderer.setSize(width, height, updateStyle);
          });
          $loc.__str__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_SET_SIZE);
          });
          $loc.__repr__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_SET_SIZE);
          });
        }, METHOD_SET_SIZE, []));
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(CANVAS_RENDERER);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(self, name, value) {
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
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(CANVAS_RENDERER);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(self) {
    var renderer = self.v;
    var args = {};
    args[PROP_AUTO_CLEAR] = renderer[PROP_AUTO_CLEAR];
    args[PROP_GAMMA_INPUT] = renderer[PROP_GAMMA_INPUT];
    args[PROP_GAMMA_OUTPUT] = renderer[PROP_GAMMA_OUTPUT];
    return Sk.ffi.stringToPy(CANVAS_RENDERER + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(self) {
    var renderer = self.v;
    var autoClear = renderer[PROP_AUTO_CLEAR];
    // Note: The WebGLRenderer takes only one argument, but it is a dictionary.
    var args = [{"autoClear": autoClear}];
    return Sk.ffi.stringToPy(CANVAS_RENDERER + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, CANVAS_RENDERER, []);

mod[WEBGL_RENDERER] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  var PROP_AUTO_CLEAR   = "autoClear";
  var PROP_CLEAR_COLOR  = "clearColor";
  var PROP_GAMMA_INPUT  = "gammaInput";
  var PROP_GAMMA_OUTPUT = "gammaOutput";
  var PROP_SORT_OBJECTS = "sortObjects";
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, parametersPy) {
    if (Sk.ffi.checkMethodArgs(WEBGL_RENDERER, arguments, 0, 1) > 0) {
      Sk.ffi.checkArgType("parameters", Sk.ffi.PyType.DICT, Sk.ffi.isDict(parametersPy), parametersPy);
    }
    var parameters = Sk.ffi.remapToJs(parametersPy);
    Sk.ffi.referenceToPy(new THREE[WEBGL_RENDERER](parameters), WEBGL_RENDERER, undefined, selfPy);
  });
  $loc.setSize = Sk.ffi.functionPy(function(self, width, height) {
    self.v.setSize(Sk.builtin.asnum$(width), Sk.builtin.asnum$(height));
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(self, name) {
    var METHOD_RENDER = "render";
    var METHOD_GET_CLEAR_COLOR = "getClearColor";
    var METHOD_SET_CLEAR_COLOR = "setClearColor";
    var METHOD_SET_SIZE        = "setSize";
    var renderer  = Sk.ffi.remapToJs(self);
    switch(name) {
      case PROP_AUTO_CLEAR: {
        return Sk.ffi.booleanToPy(renderer[PROP_AUTO_CLEAR]);
      }
      case PROP_AUTO_CLEAR_COLOR: {
        return Sk.ffi.booleanToPy(renderer[PROP_AUTO_CLEAR_COLOR]);
      }
      case PROP_GAMMA_INPUT: {
        return Sk.ffi.booleanToPy(renderer[PROP_GAMMA_INPUT]);
      }
      case PROP_GAMMA_OUTPUT: {
        return Sk.ffi.booleanToPy(renderer[PROP_GAMMA_OUTPUT]);
      }
      case PROP_SORT_OBJECTS: {
        return renderer[PROP_SORT_OBJECTS];
      }
      case PROP_CANVAS:
      case PROP_DOM_ELEMENT: {
        return Sk.ffi.callsim(mod[NODE], Sk.ffi.referenceToPy(renderer[PROP_DOM_ELEMENT], NODE));
      }
      case METHOD_RENDER: {
        return Sk.ffi.callableToPy(mod, METHOD_RENDER, function(methodPy, scenePy, cameraPy) {
          Sk.ffi.checkMethodArgs(METHOD_GET_CLEAR_COLOR, arguments, 2, 2);
          var scene  = Sk.ffi.remapToJs(scenePy);
          var camera = Sk.ffi.remapToJs(cameraPy);
          return Sk.ffi.remapToPy(renderer[METHOD_RENDER](scene, camera));
        });
      }
      case METHOD_GET_CLEAR_COLOR: {
        return Sk.ffi.callableToPy(mod, METHOD_GET_CLEAR_COLOR, function(methodPy) {
          Sk.ffi.checkMethodArgs(METHOD_GET_CLEAR_COLOR, arguments, 0, 0);
          return Sk.ffi.callsim(mod[COLOR], Sk.ffi.referenceToPy(renderer[METHOD_GET_CLEAR_COLOR](), COLOR));
        });
      }
      case METHOD_SET_CLEAR_COLOR: {
        return Sk.ffi.callableToPy(mod, METHOD_SET_CLEAR_COLOR, function(methodPy, colorPy, alphaPy) {
          Sk.ffi.checkMethodArgs(METHOD_SET_CLEAR_COLOR, arguments, 2, 2);
          Sk.ffi.checkArgType(ARG_COLOR, [COLOR, Sk.ffi.PyType.INT], isColorPy(colorPy)||Sk.ffi.isInt(colorPy), colorPy);
          Sk.ffi.checkArgType(ARG_ALPHA, NUM, Sk.ffi.isNum(alphaPy), alphaPy);
          var color  = Sk.ffi.remapToJs(colorPy);
          var alpha = Sk.ffi.remapToJs(alphaPy);
          return Sk.ffi.remapToPy(renderer[METHOD_SET_CLEAR_COLOR](color, alpha));
        });
      }
      case METHOD_SET_SIZE: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_SET_SIZE;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, width, height, updateStyle) {
            width  = Sk.ffi.remapToJs(width);
            height = Sk.ffi.remapToJs(height);
            updateStyle = Sk.ffi.remapToJs(updateStyle);
            renderer.setSize(width, height, updateStyle);
          });
          $loc.__str__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_SET_SIZE);
          });
          $loc.__repr__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_SET_SIZE);
          });
        }, METHOD_SET_SIZE, []));
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(WEBGL_RENDERER);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(self, name, valuePy) {
    var renderer  = Sk.ffi.remapToJs(self);
    var value = Sk.ffi.remapToJs(valuePy);
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
      case PROP_AUTO_CLEAR_COLOR: {
        Sk.ffi.checkArgType(PROP_AUTO_CLEAR_COLOR, Sk.ffi.PyType.BOOL, Sk.ffi.isBool(valuePy), valuePy);
        renderer[PROP_AUTO_CLEAR_COLOR] = Sk.ffi.remapToJs(valuePy);
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
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(WEBGL_RENDERER);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(self) {
    var renderer = self.v;
    var args = {};
    args[PROP_AUTO_CLEAR] = renderer[PROP_AUTO_CLEAR];
    args[PROP_GAMMA_INPUT] = renderer[PROP_GAMMA_INPUT];
    args[PROP_GAMMA_OUTPUT] = renderer[PROP_GAMMA_OUTPUT];
    return Sk.ffi.stringToPy(WEBGL_RENDERER + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(self) {
    var renderer = self.v;
    var autoClear = renderer[PROP_AUTO_CLEAR];
    // Note: The WebGLRenderer takes only one argument, but it is a dictionary.
    var args = [{"autoClear": autoClear}];
    return Sk.ffi.stringToPy(WEBGL_RENDERER + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, WEBGL_RENDERER, []);

mod[COLOR] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  var PROP_R = "r";
  var PROP_G = "g";
  var PROP_B = "b";
  var PROP_VALUE = "value";
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, valuePy) {
    var value = Sk.ffi.remapToJs(valuePy);
    if (Sk.ffi.isUndefined(valuePy)) {
      Sk.ffi.referenceToPy(new THREE.Color(), COLOR, undefined, selfPy);
    }
    else {
      if (Sk.ffi.isInt(valuePy) || Sk.ffi.isStr(valuePy)) {
        Sk.ffi.referenceToPy(new THREE.Color(value), COLOR, undefined, selfPy);
      }
      else if (Sk.ffi.isInstance(valuePy, COLOR)) {
        Sk.ffi.referenceToPy(value, COLOR, undefined, selfPy);
      }
      else {
        Sk.ffi.checkArgType(PROP_VALUE, [Sk.ffi.PyType.INT, Sk.ffi.PyType.STR, COLOR], false, value);
      }
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(colorPy, name) {
    var color = Sk.ffi.remapToJs(colorPy);
    switch(name) {
      case PROP_R: {
        return Sk.ffi.numberToIntPy(color[PROP_R]);
      }
      case PROP_G: {
        return Sk.ffi.numberToIntPy(color[PROP_G]);
      }
      case PROP_B: {
        return Sk.ffi.numberToIntPy(color[PROP_B]);
      }
      case METHOD_GET_HEX: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy) {
          return Sk.ffi.numberToIntPy(color[METHOD_GET_HEX]());
        });
      }
      case METHOD_GET_HEX_STRING: {
        return Sk.ffi.callableToPy(mod, METHOD_GET_HEX_STRING, function(methodPy) {
          return Sk.ffi.stringToPy(color[METHOD_GET_HEX_STRING]());
        });
      }
      case METHOD_SET_HEX: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, hexPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_HEX, Sk.ffi.PyType.INT, Sk.ffi.isInt(hexPy), hexPy);
          color[METHOD_SET_HEX](Sk.ffi.remapToJs(hexPy));
          return colorPy;
        });
      }
      case METHOD_SET_RGB: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_SET_RGB;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, rPy, gPy, bPy) {
            var r  = Sk.ffi.remapToJs(rPy);
            var g  = Sk.ffi.remapToJs(gPy);
            var b  = Sk.ffi.remapToJs(bPy);
            color[METHOD_SET_RGB](r, g, b);
            return colorPy;
          });
          $loc.__str__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_SET_RGB);
          });
          $loc.__repr__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_SET_RGB);
          });
        }, METHOD_SET_RGB, []));
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(COLOR);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(colorPy, name, valuePy) {
    var color = Sk.ffi.remapToJs(colorPy);
    switch(name) {
      case PROP_R:
      case PROP_G:
      case PROP_B: {
        Sk.ffi.checkArgType(name, [Sk.ffi.PyType.FLOAT, Sk.ffi.PyType.INT], Sk.ffi.isFloat(valuePy) || Sk.ffi.isInt(valuePy), valuePy);
        color[PROP_R] = Sk.ffi.remapToJs(valuePy);
      }
      break;
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(COLOR);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var color = Sk.ffi.remapToJs(selfPy);
    var args = {};
    args[PROP_R] = color[PROP_R];
    args[PROP_G] = color[PROP_G];
    args[PROP_B] = color[PROP_B];
    return Sk.ffi.stringToPy(COLOR + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var color = Sk.ffi.remapToJs(selfPy);
    var r = color[PROP_R];
    var g = color[PROP_G];
    var b = color[PROP_B];
    var args = [r, g, b];
    return Sk.ffi.stringToPy(COLOR + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, COLOR, []);

function cameraGetAttr(cameraPy, name, className) {
  var camera = Sk.ffi.remapToJs(cameraPy);
  switch(name) {
    case PROP_ASPECT: {
      return Sk.ffi.numberToFloatPy(camera.aspect);
    }
    case PROP_POSITION: {
      return vectorToEuclidean3Py(camera[PROP_POSITION]);
    }
    case PROP_QUATERNION: {
      return Sk.ffi.callsim(mod[QUATERNION], Sk.ffi.referenceToPy(camera[PROP_QUATERNION], QUATERNION));
    }
    case PROP_ROTATION: {
      return vectorToEuclidean3Py(camera[PROP_ROTATION]);
    }
    case PROP_EULER_ORDER: {
      return Sk.ffi.stringToPy(camera[PROP_EULER_ORDER]);
    }
    case PROP_SCALE: {
      return vectorToEuclidean3Py(camera[PROP_SCALE]);
    }
    case PROP_UP: {
      return vectorToEuclidean3Py(camera[PROP_UP]);
    }
    case PROP_USE_QUATERNION: {
      return camera[PROP_USE_QUATERNION];
    }
    case METHOD_LOOK_AT: {return methodLookAt(cameraPy);}
    case UPDATE_PROJECTION_MATRIX: {
      return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
        $loc.__init__ = Sk.ffi.functionPy(function(self) {
          self.tp$name = UPDATE_PROJECTION_MATRIX;
        });
        $loc.__call__ = Sk.ffi.functionPy(function(self) {
          camera[name]();
        });
        $loc.__str__ = Sk.ffi.functionPy(function(self) {
          return Sk.ffi.stringToPy(UPDATE_PROJECTION_MATRIX)
        })
        $loc.__repr__ = Sk.ffi.functionPy(function(self) {
          return Sk.ffi.stringToPy(UPDATE_PROJECTION_MATRIX)
        })
      }, UPDATE_PROJECTION_MATRIX, []));
    }
    default: {
      throw Sk.ffi.err.attribute(name).isNotSetableOnType(className);
    }
  }
}

function cameraSetAttr(cameraPy, name, valuePy, className) {
  var camera = Sk.ffi.remapToJs(cameraPy);
  var value = Sk.ffi.remapToJs(valuePy);
  switch(name) {
    case PROP_POSITION:
    case PROP_ROTATION:
    case PROP_SCALE:
    case PROP_UP: {
      setVectorProperty(camera, name, valuePy);
    }
    break;
    case PROP_QUATERNION: {
      camera[PROP_QUATERNION] = value;
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
    case PROP_USE_QUATERNION: {
      camera[PROP_USE_QUATERNION] = value;
    }
    break;
    default: {
      throw Sk.ffi.err.attribute(name).isNotSetableOnType(className);
    }
  }
}
/**
 * PerspectiveCamera
 */
mod[PERSPECTIVE_CAMERA] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, fovPy, aspectPy, nearPy, farPy) {
    Sk.ffi.checkMethodArgs(PERSPECTIVE_CAMERA, arguments, 0, 4);
    if (Sk.ffi.isDefined(fovPy)) {
      Sk.ffi.checkArgType(ARG_FOV, Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(fovPy), fovPy);
    }
    if (Sk.ffi.isDefined(aspectPy)) {
      Sk.ffi.checkArgType(ARG_ASPECT, Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(aspectPy), aspectPy);
    }
    if (Sk.ffi.isDefined(nearPy)) {
      Sk.ffi.checkArgType(ARG_NEAR, Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(nearPy), nearPy);
    }
    if (Sk.ffi.isDefined(farPy)) {
      Sk.ffi.checkArgType(ARG_FAR, Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(farPy), farPy);
    }
    var fieldOfView = Sk.ffi.remapToJs(fovPy);
    var aspectRatio = Sk.ffi.remapToJs(aspectPy);
    var nearPlane = Sk.ffi.remapToJs(nearPy);
    var farPlane = Sk.ffi.remapToJs(farPy);
    Sk.ffi.referenceToPy(new THREE[PERSPECTIVE_CAMERA](fieldOfView, aspectRatio, nearPlane, farPlane), PERSPECTIVE_CAMERA, undefined, selfPy);
  });

  $loc.__getattr__ = Sk.ffi.functionPy(function(cameraPy, name) {
    var camera = Sk.ffi.remapToJs(cameraPy);
    switch(name) {
      case PROP_ASPECT: {
        return Sk.ffi.numberToFloatPy(camera.aspect);
      }
      case PROP_POSITION: {
        return vectorToEuclidean3Py(camera.position);
      }
      case PROP_QUATERNION: {
        return Sk.ffi.callsim(mod[QUATERNION], Sk.ffi.referenceToPy(camera[PROP_QUATERNION], QUATERNION));
      }
      case PROP_ROTATION: {
        return vectorToEuclidean3Py(camera[PROP_ROTATION]);
      }
      case PROP_EULER_ORDER: {
        return Sk.ffi.stringToPy(camera[PROP_EULER_ORDER]);
      }
      case PROP_SCALE: {
        return vectorToEuclidean3Py(camera[PROP_SCALE]);
      }
      case PROP_UP: {
        return vectorToEuclidean3Py(camera[PROP_UP]);
      }
      case PROP_USE_QUATERNION: {
        return camera[PROP_USE_QUATERNION];
      }
      case METHOD_LOOK_AT: {return methodLookAt(cameraPy);}
      case UPDATE_PROJECTION_MATRIX: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = UPDATE_PROJECTION_MATRIX;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self) {
            camera[name]();
          });
          $loc.__str__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(UPDATE_PROJECTION_MATRIX)
          })
          $loc.__repr__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(UPDATE_PROJECTION_MATRIX)
          })
        }, UPDATE_PROJECTION_MATRIX, []));
      }
      default: {
        return cameraGetAttr(cameraPy, name, PERSPECTIVE_CAMERA);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(cameraPy, name, valuePy) {
    var camera = Sk.ffi.remapToJs(cameraPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      case "aspect": {
        camera.aspect = value;
      }
      break;
      case PROP_POSITION:
      case PROP_ROTATION:
      case PROP_SCALE:
      case PROP_UP: {
        setVectorProperty(camera, name, valuePy);
      }
      break;
      case PROP_QUATERNION: {
        camera[PROP_QUATERNION] = value;
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
      case PROP_USE_QUATERNION: {
        camera[PROP_USE_QUATERNION] = value;
      }
      break;
      default: {
        return cameraSetAttr(cameraPy, name, valuePy, PERSPECTIVE_CAMERA);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var camera = Sk.ffi.remapToJs(selfPy);
    var args = {};
    args[PROP_FOV]    = camera[PROP_FOV];
    args[PROP_ASPECT] = camera[PROP_ASPECT];
    args[PROP_NEAR]   = camera[PROP_NEAR];
    args[PROP_FAR]    = camera[PROP_FAR];
    return Sk.ffi.stringToPy(PERSPECTIVE_CAMERA + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var camera = Sk.ffi.remapToJs(selfPy);
    var args = [camera[PROP_FOV], camera[PROP_ASPECT], camera[PROP_NEAR], camera[PROP_FAR]];
    return Sk.ffi.stringToPy(PERSPECTIVE_CAMERA + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, PERSPECTIVE_CAMERA, []);

mod[ORTHOGRAPHIC_CAMERA] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, leftPy, rightPy, topPy, bottomPy, nearPy, farPy) {
    Sk.ffi.checkMethodArgs(ORTHOGRAPHIC_CAMERA, arguments, 0, 6);
    if (Sk.ffi.isDefined(leftPy)) {
      Sk.ffi.checkArgType("left", Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(leftPy), leftPy);
    }
    if (Sk.ffi.isDefined(rightPy)) {
      Sk.ffi.checkArgType("right", Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(rightPy), rightPy);
    }
    if (Sk.ffi.isDefined(topPy)) {
      Sk.ffi.checkArgType("top", Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(topPy), topPy);
    }
    if (Sk.ffi.isDefined(bottomPy)) {
      Sk.ffi.checkArgType("bottom", Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(bottomPy), bottomPy);
    }
    if (Sk.ffi.isDefined(nearPy)) {
      Sk.ffi.checkArgType(ARG_NEAR, Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(nearPy), nearPy);
    }
    if (Sk.ffi.isDefined(farPy)) {
      Sk.ffi.checkArgType(ARG_FAR, Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(farPy), farPy);
    }
    var left = Sk.ffi.remapToJs(leftPy)
    var right = Sk.ffi.remapToJs(rightPy)
    var top = Sk.ffi.remapToJs(topPy)
    var bottom = Sk.ffi.remapToJs(bottomPy)
    var near = Sk.ffi.remapToJs(nearPy)
    var far = Sk.ffi.remapToJs(farPy)
    Sk.ffi.referenceToPy(new THREE[ORTHOGRAPHIC_CAMERA](left, right, top, bottom, near, far), ORTHOGRAPHIC_CAMERA, undefined, selfPy);
  });

  $loc.__getattr__ = Sk.ffi.functionPy(function(cameraPy, name) {
    var camera = Sk.ffi.remapToJs(cameraPy);
    var UPDATE_PROJECTION_MATRIX = "updateProjectionMatrix"
    switch(name) {
      case "aspect": {
        return Sk.ffi.numberToFloatPy(camera.aspect);
      }
      case PROP_POSITION: {
        return vectorToEuclidean3Py(camera[PROP_POSITION]);
      }
      case PROP_QUATERNION: {
        return Sk.ffi.callsim(mod[QUATERNION], Sk.ffi.referenceToPy(camera[PROP_QUATERNION], QUATERNION));
      }
      case PROP_ROTATION: {
        return vectorToEuclidean3Py(camera[PROP_ROTATION]);
      }
      case PROP_EULER_ORDER: {
        return Sk.ffi.stringToPy(camera[PROP_EULER_ORDER]);
      }
      case PROP_SCALE: {
        return vectorToEuclidean3Py(camera[PROP_SCALE]);
      }
      case PROP_UP: {
        return vectorToEuclidean3Py(camera[PROP_UP]);
      }
      case PROP_USE_QUATERNION: {
        return camera[PROP_USE_QUATERNION];
      }
      case METHOD_LOOK_AT: {return methodLookAt(cameraPy);}
      case UPDATE_PROJECTION_MATRIX: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = UPDATE_PROJECTION_MATRIX;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self) {
            camera[name]();
          });
          $loc.__str__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(UPDATE_PROJECTION_MATRIX)
          })
          $loc.__repr__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(UPDATE_PROJECTION_MATRIX)
          })
        }, UPDATE_PROJECTION_MATRIX, []));
      }
      default: {
        return cameraGetAttr(cameraPy, name, ORTHOGRAPHIC_CAMERA);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(cameraPy, name, valuePy) {
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
      case PROP_POSITION:
      case PROP_ROTATION:
      case PROP_SCALE:
      case PROP_UP: {
        setVectorProperty(camera, name, valuePy);
      }
      break;
      case PROP_QUATERNION: {
        camera[PROP_QUATERNION] = value;
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
      case PROP_USE_QUATERNION: {
        camera[PROP_USE_QUATERNION] = value;
      }
      break;
      default: {
        return cameraSetAttr(cameraPy, name, valuePy, ORTHOGRAPHIC_CAMERA);
      }
    }
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(cameraPy) {
    var camera = Sk.ffi.remapToJs(cameraPy);
    var args = [camera[PROP_LEFT], camera[PROP_RIGHT], camera[PROP_TOP], camera[PROP_BOTTOM], camera[PROP_NEAR], camera[PROP_FAR]];
    return Sk.ffi.stringToPy(ORTHOGRAPHIC_CAMERA + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
  $loc.__str__ = Sk.ffi.functionPy(function(self) {
    return Sk.ffi.stringToPy(ORTHOGRAPHIC_CAMERA);
  });
}, ORTHOGRAPHIC_CAMERA, []);

mod[Sk.three.ARROW_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, scalePy, attitudePy, segmentsPy, lengthPy, radiusShaft, radiusCone, lengthCone, axisPy) {
    Sk.ffi.checkMethodArgs(Sk.three.ARROW_GEOMETRY, arguments, 0, 8);
    var scale;
    var attitude;
    var length;
    var axis;
    if (Sk.ffi.isDefined(scalePy)) {
      if (Sk.ffi.isInstance(scalePy, Sk.three.ARROW_GEOMETRY)) {
        Sk.ffi.checkMethodArgs(Sk.three.ARROW_GEOMETRY, arguments, 1, 1);
        Sk.ffi.referenceToPy(Sk.ffi.remapToJs(scalePy), Sk.three.ARROW_GEOMETRY, undefined, selfPy);
        return;
      }
      else {
        Sk.ffi.checkArgType(PROP_SCALE, Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(scalePy), scalePy);
        scale = Sk.ffi.remapToJs(scalePy);
      }
    }
    else {
      scale = 1;
    }
    if (Sk.ffi.isDefined(attitudePy)) {
      Sk.ffi.checkArgType(PROP_ATTITUDE, EUCLIDEAN_3, Sk.ffi.isInstance(attitudePy, EUCLIDEAN_3), attitudePy);
      attitude = Sk.ffi.remapToJs(attitudePy).quaternion;
    }
    else {
      attitude = new THREE.Quaternion(0, 0, 0, 1);
    }
    if (Sk.ffi.isDefined(segmentsPy)) {
      Sk.ffi.checkArgType(PROP_SEGMENTS, INT, Sk.ffi.isInt(segmentsPy), segmentsPy);
    }
    if (Sk.ffi.isDefined(lengthPy)) {
      Sk.ffi.checkArgType(ARG_LENGTH, Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(lengthPy), lengthPy);
      length = Sk.ffi.remapToJs(lengthPy) * scale;
    }
    else {
      length = scale;
    }
    if (Sk.ffi.isDefined(axisPy)) {
      Sk.ffi.checkArgType(PROP_AXIS, EUCLIDEAN_3, Sk.ffi.isInstance(axisPy, EUCLIDEAN_3), axisPy);
      axis = Sk.ffi.remapToJs(axisPy).vector;
    }
    else {
      axis = new THREE.Vector3(0, 0, 1);
    }
    var segments = Sk.ffi.remapToJs(segmentsPy);
    radiusShaft  = (Sk.ffi.remapToJs(radiusShaft) || 0.01) * scale;
    radiusCone   = (Sk.ffi.remapToJs(radiusCone)  || 0.08) * scale;
    lengthCone   = (Sk.ffi.remapToJs(lengthCone)  || 0.20) * scale;
    var lengthShaft = length - lengthCone;
    var halfLength = length / 2;
    var permutation = function(direction) {
      if (direction.x) {
        return 2;
      }
      else if (direction.y) {
        return 1;
      }
      else {
        return 0;
      }
    }
    var orientation = function(direction) {
      if (direction.x > 0) {
        return +1;
      }
      else if (direction.x < 0) {
        return -1;
      }
      else if (direction.y > 0) {
        return +1;
      }
      else if (direction.y < 0) {
        return -1;
      }
      else if (direction.z > 0) {
        return +1;
      }
      else if (direction.z < 0) {
        return -1;
      }
      else {
        return 0;
      }
    }
    var computeArrow = function (direction) {
      var cycle = permutation(direction);
      var sign  = orientation(direction);
      var i = (cycle + 0) % 3;
      var j = (cycle + 1) % 3;
      var k = (cycle + 2) % 3;
      var shL = halfLength * sign;
      var data = [
        [0,           0, halfLength * sign],
        [radiusCone,  0, (lengthShaft - halfLength) * sign],
        [radiusShaft, 0, (lengthShaft - halfLength) * sign],
        [radiusShaft, 0, (-halfLength) * sign],
        [0,           0, (-halfLength) * sign]
      ];
      var points = data.map(function(point) {return new THREE.Vector3(point[i], point[j], point[k])});
      var generator = new THREE.Quaternion(direction.x, direction.y, direction.z, 0);
      return {"points": points, "generator": generator};
    };
    var arrow = computeArrow(axis);
    Sk.ffi.referenceToPy(new Sk.stdlib.RevolutionGeometry(arrow.points, arrow.generator, segments, 0, 2 * Math.PI, attitude), Sk.three.ARROW_GEOMETRY, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    return geometryGetAttr(Sk.three.ARROW_GEOMETRY, selfPy, name);
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    return geometrySetAttr(Sk.three.ARROW_GEOMETRY, selfPy, name, valuePy);
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var names  = [];
    var args = names.map(function(name) {return [name, Sk.ffi.remapToJs(Sk.ffh.str(Sk.ffi.gattr(selfPy, name)))].join(EQUAL);});
    return Sk.ffi.stringToPy(Sk.three.ARROW_GEOMETRY + LPAREN + args.join(COMMA + SPACE) + RPAREN);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var args = [];
    return Sk.ffi.stringToPy(Sk.three.ARROW_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, Sk.three.ARROW_GEOMETRY, []);

 mod[CIRCLE_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, radiusPy, segmentsPy, thetaStartPy, thetaLengthPy) {
    Sk.ffi.checkMethodArgs(CIRCLE_GEOMETRY, arguments, 0, 4);
    if (Sk.ffi.isDefined(radiusPy)) {
      Sk.ffi.checkArgType(PROP_RADIUS, NUM, Sk.ffi.isNum(radiusPy), radiusPy);
    }
    if (Sk.ffi.isDefined(segmentsPy)) {
      Sk.ffi.checkArgType(PROP_SEGMENTS, INT, Sk.ffi.isInt(segmentsPy), segmentsPy);
    }
    if (Sk.ffi.isDefined(thetaStartPy)) {
      Sk.ffi.checkArgType(PROP_THETA_START, NUM, Sk.ffi.isNum(thetaStartPy), thetaStartPy);
    }
    if (Sk.ffi.isDefined(thetaLengthPy)) {
      Sk.ffi.checkArgType(PROP_THETA_LENGTH, NUM, Sk.ffi.isNum(thetaLengthPy), thetaLengthPy);
    }
    Sk.ffi.referenceToPy(new THREE[CIRCLE_GEOMETRY](Sk.ffi.remapToJs(radiusPy), Sk.ffi.remapToJs(segmentsPy), Sk.ffi.remapToJs(thetaStartPy), Sk.ffi.remapToJs(thetaLengthPy)), CIRCLE_GEOMETRY, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    return geometryGetAttr(CIRCLE_GEOMETRY, selfPy, name);
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    return geometrySetAttr(CIRCLE_GEOMETRY, selfPy, name, valuePy);
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var args = {};
    return Sk.ffi.stringToPy(CIRCLE_GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var args = [];
    return Sk.ffi.stringToPy(CIRCLE_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, CIRCLE_GEOMETRY, []);

 mod[CUBE_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, widthPy, heightPy, depthPy, widthSegmentsPy, heightSegmentsPy, depthSegmentsPy) {
    Sk.ffi.checkMethodArgs(CUBE_GEOMETRY, arguments, 3, 6);
    Sk.ffi.checkArgType(PROP_WIDTH,  NUM, Sk.ffi.isNum(widthPy),  widthPy);
    Sk.ffi.checkArgType(PROP_HEIGHT, NUM, Sk.ffi.isNum(heightPy), heightPy);
    Sk.ffi.checkArgType(PROP_DEPTH,  NUM, Sk.ffi.isNum(depthPy),  depthPy);
    if (Sk.ffi.isDefined(widthSegmentsPy)) {
      Sk.ffi.checkArgType(PROP_WIDTH_SEGMENTS, INT, Sk.ffi.isInt(widthSegmentsPy), widthSegmentsPy);
    }
    if (Sk.ffi.isDefined(heightSegmentsPy)) {
      Sk.ffi.checkArgType(PROP_HEIGHT_SEGMENTS, INT, Sk.ffi.isInt(heightSegmentsPy), heightSegmentsPy);
    }
    if (Sk.ffi.isDefined(depthSegmentsPy)) {
      Sk.ffi.checkArgType(PROP_DEPTH_SEGMENTS, INT, Sk.ffi.isInt(depthSegmentsPy), depthSegmentsPy);
    }
    var width  = Sk.ffi.remapToJs(widthPy);
    var height = Sk.ffi.remapToJs(heightPy);
    var depth  = Sk.ffi.remapToJs(depthPy);
    var widthSegments  = Sk.ffi.remapToJs(widthSegmentsPy);
    var heightSegments = Sk.ffi.remapToJs(heightSegmentsPy);
    var depthSegments  = Sk.ffi.remapToJs(depthSegmentsPy);
    Sk.ffi.referenceToPy(new THREE[CUBE_GEOMETRY](width, height, depth, widthSegments, heightSegments, depthSegments), CUBE_GEOMETRY, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var cube = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_WIDTH:
      case PROP_HEIGHT:
      case PROP_DEPTH: {
        return Sk.ffi.numberToFloatPy(cube[name]);
      }
      case PROP_WIDTH_SEGMENTS:
      case PROP_HEIGHT_SEGMENTS:
      case PROP_DEPTH_SEGMENTS: {
        return Sk.ffi.numberToIntPy(cube[name]);
      }
      default: {
        return geometryGetAttr(CUBE_GEOMETRY, selfPy, name);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    return geometrySetAttr(CUBE_GEOMETRY, selfPy, name, valuePy);
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var cube = Sk.ffi.remapToJs(selfPy);
    var args = {};
    args[PROP_WIDTH]  = cube[PROP_WIDTH];
    args[PROP_HEIGHT] = cube[PROP_HEIGHT];
    args[PROP_DEPTH]  = cube[PROP_DEPTH];
    return Sk.ffi.stringToPy(CUBE_GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var cube = Sk.ffi.remapToJs(selfPy);
    var width          = cube[PROP_WIDTH];
    var height         = cube[PROP_HEIGHT];
    var depth          = cube[PROP_DEPTH];
    var widthSegments  = cube[PROP_WIDTH_SEGMENTS];
    var heightSegments = cube[PROP_HEIGHT_SEGMENTS];
    var depthSegments  = cube[PROP_DEPTH_SEGMENTS];
    var args = [width, height, depth, widthSegments, heightSegments, depthSegments];
    return Sk.ffi.stringToPy(CUBE_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, CUBE_GEOMETRY, []);

mod[CYLINDER_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, radiusTopPy, radiusBottomPy, heightPy, radialSegmentsPy, heightSegmentsPy, openEndedPy, axisPy) {
    if (Sk.ffi.isInstance(radiusTopPy, CYLINDER_GEOMETRY)) {
      Sk.ffi.referenceToPy(Sk.ffi.remapToJs(radiusTopPy), CYLINDER_GEOMETRY, undefined, selfPy);
    }
    else {
      Sk.ffi.checkMethodArgs(CYLINDER_GEOMETRY, arguments, 0, 7);
      Sk.ffi.checkArgType(PROP_RADIUS_TOP, NUM, Sk.ffi.isNum(radiusTopPy)||Sk.ffi.isUndefined(radiusTopPy), radiusTopPy);
      Sk.ffi.checkArgType(PROP_RADIUS_BOTTOM, NUM, Sk.ffi.isNum(radiusBottomPy)||Sk.ffi.isUndefined(radiusBottomPy), radiusBottomPy);
      Sk.ffi.checkArgType(PROP_HEIGHT, NUM, Sk.ffi.isNum(heightPy)||Sk.ffi.isUndefined(heightPy), heightPy);
      Sk.ffi.checkArgType(PROP_RADIAL_SEGMENTS, Sk.ffi.PyType.INT, Sk.ffi.isInt(radialSegmentsPy)||Sk.ffi.isUndefined(radialSegmentsPy), radialSegmentsPy);
      Sk.ffi.checkArgType(PROP_HEIGHT_SEGMENTS, Sk.ffi.PyType.INT, Sk.ffi.isInt(heightSegmentsPy)||Sk.ffi.isUndefined(heightSegmentsPy), heightSegmentsPy);
      Sk.ffi.checkArgType(PROP_OPEN_ENDED, Sk.ffi.PyType.BOOL, Sk.ffi.isBool(openEndedPy)||Sk.ffi.isUndefined(openEndedPy), openEndedPy);
      var radiusTop = Sk.ffi.remapToJs(radiusTopPy);
      var radiusBottom = Sk.ffi.remapToJs(radiusBottomPy);
      var height = Sk.ffi.remapToJs(heightPy);
      var radialSegments = Sk.ffi.remapToJs(radialSegmentsPy);
      var heightSegments = Sk.ffi.remapToJs(heightSegmentsPy);
      var openEnded = Sk.ffi.remapToJs(openEndedPy);
      var axis;
      if (Sk.ffi.isDefined(axisPy)) {
        Sk.ffi.checkArgType(PROP_AXIS, EUCLIDEAN_3, Sk.ffi.isInstance(axisPy, EUCLIDEAN_3), axisPy);
        axis = Sk.ffi.remapToJs(axisPy).vector;
      }
      else {
        axis = new THREE.Vector3(0, 0, 1);
      }
      Sk.ffi.referenceToPy(new Sk.stdlib.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, axis), CYLINDER_GEOMETRY, undefined, selfPy);
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var cylinder = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_RADIUS_TOP: {
        return Sk.ffi.numberToFloatPy(cylinder[PROP_RADIUS_TOP]);
      }
      case PROP_RADIUS_BOTTOM: {
        return Sk.ffi.numberToFloatPy(cylinder[PROP_RADIUS_BOTTOM]);
      }
      case PROP_HEIGHT: {
        return Sk.ffi.numberToFloatPy(cylinder[PROP_HEIGHT]);
      }
      case PROP_RADIAL_SEGMENTS: {
        return Sk.ffi.numberToIntPy(cylinder[PROP_RADIAL_SEGMENTS]);
      }
      case PROP_HEIGHT_SEGMENTS: {
        return Sk.ffi.numberToIntPy(cylinder[PROP_HEIGHT_SEGMENTS]);
      }
      case PROP_OPEN_ENDED: {
        return Sk.ffi.booleanToPy(cylinder[PROP_OPEN_ENDED]);
      }
      default: {
        return geometryGetAttr(CYLINDER_GEOMETRY, selfPy, name);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    return geometrySetAttr(CYLINDER_GEOMETRY, selfPy, name, valuePy);
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var cylinder = Sk.ffi.remapToJs(selfPy);
    var args = {};
    args[PROP_RADIUS_TOP] = cylinder[PROP_RADIUS_TOP];
    args[PROP_RADIUS_BOTTOM] = cylinder[PROP_RADIUS_BOTTOM];
    args[PROP_HEIGHT] = cylinder[PROP_HEIGHT];
    args[PROP_OPEN_ENDED] = cylinder[PROP_OPEN_ENDED];
    return Sk.ffi.stringToPy(CYLINDER_GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var cylinder = Sk.ffi.remapToJs(selfPy);
    var radiusTop      = cylinder[PROP_RADIUS_TOP];
    var radiusBottom   = cylinder[PROP_RADIUS_BOTTOM];
    var height         = cylinder[PROP_HEIGHT];
    var radialSegments = cylinder[PROP_RADIAL_SEGMENTS];
    var heightSegments = cylinder[PROP_HEIGHT_SEGMENTS];
    var openEnded      = cylinder[PROP_OPEN_ENDED];
    var args = [radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded];
    return Sk.ffi.stringToPy(CYLINDER_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, CYLINDER_GEOMETRY, []);

mod[LATHE_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, pointsPy, segmentsPy, phiStartPy, phiLengthPy) {
    Sk.ffi.checkMethodArgs(LATHE_GEOMETRY, arguments, 1, 4);
    var points = Sk.ffi.remapToJs(pointsPy).map(function(euclidean3) {
      return new THREE.Vector3(euclidean3.x, euclidean3.y, euclidean3.z);
    });
    // LatheGeometry assumes that the points are to be rotated about the z-axis.
    var generator = new THREE.Quaternion(0, 0, 1, 0);
    Sk.ffi.referenceToPy(new Sk.stdlib.RevolutionGeometry(points, generator, Sk.ffi.remapToJs(segmentsPy), Sk.ffi.remapToJs(phiStartPy), Sk.ffi.remapToJs(phiLengthPy)), LATHE_GEOMETRY, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    return geometryGetAttr(LATHE_GEOMETRY, selfPy, name);
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    return geometrySetAttr(LATHE_GEOMETRY, selfPy, name, valuePy);
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var args = {};
    return Sk.ffi.stringToPy(LATHE_GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var args = [];
    return Sk.ffi.stringToPy(LATHE_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, LATHE_GEOMETRY, []);

mod[ICOSAHEDRON_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, radiusPy, detailPy) {
    Sk.ffi.checkMethodArgs(ICOSAHEDRON_GEOMETRY, arguments, 0, 2);
    if (Sk.ffi.isDefined(radiusPy)) {
      Sk.ffi.checkArgType(PROP_RADIUS, NUM, Sk.ffi.isNum(radiusPy), radiusPy);
    }
    if (Sk.ffi.isDefined(detailPy)) {
      Sk.ffi.checkArgType(PROP_DETAIL, INT, Sk.ffi.isInt(detailPy), detailPy);
    }
    var radius = Sk.ffi.remapToJs(radiusPy);
    var detail = Sk.ffi.remapToJs(detailPy);
    Sk.ffi.referenceToPy(new THREE[ICOSAHEDRON_GEOMETRY](radius, detail), ICOSAHEDRON_GEOMETRY, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var self = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_RADIUS: {
        return Sk.ffi.numberToFloatPy(self[PROP_RADIUS]);
      }
      case PROP_DETAIL: {
        return Sk.ffi.numberToIntPy(self[PROP_DETAIL]);
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(ICOSAHEDRON_GEOMETRY);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    switch(name) {
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(ICOSAHEDRON_GEOMETRY);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var icosahedron = Sk.ffi.remapToJs(selfPy);
    var args = {};
    args[PROP_RADIUS] = icosahedron[PROP_RADIUS];
    args[PROP_DETAIL] = icosahedron[PROP_DETAIL];
    return Sk.ffi.stringToPy(ICOSAHEDRON_GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var icosahedron = Sk.ffi.remapToJs(selfPy);
    var radius = icosahedron[PROP_RADIUS];
    var detail = icosahedron[PROP_DETAIL];
    var args = [radius, detail];
    return Sk.ffi.stringToPy(ICOSAHEDRON_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, ICOSAHEDRON_GEOMETRY, []);

mod[OCTAHEDRON_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  var PROP_DETAIL = "detail";
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, radiusPy, detailPy) {
    Sk.ffi.checkMethodArgs(OCTAHEDRON_GEOMETRY, arguments, 0, 2);
    if (Sk.ffi.isDefined(radiusPy)) {
      Sk.ffi.checkArgType(PROP_RADIUS, NUM, Sk.ffi.isNum(radiusPy), radiusPy);
    }
    if (Sk.ffi.isDefined(detailPy)) {
      Sk.ffi.checkArgType(PROP_DETAIL, INT, Sk.ffi.isInt(detailPy), detailPy);
    }
    var radius = Sk.ffi.remapToJs(radiusPy);
    var detail = Sk.ffi.remapToJs(detailPy);
    var octahedron = new THREE[OCTAHEDRON_GEOMETRY](radius, detail);
    octahedron.radius = radius; // workaround for THREE not caching radius.
    octahedron.detail = detail; // workaround for THREE not caching detail.
    Sk.ffi.referenceToPy(octahedron, OCTAHEDRON_GEOMETRY, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var self = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_RADIUS: {
        return Sk.ffi.numberToFloatPy(self[PROP_RADIUS]);
      }
      case PROP_DETAIL: {
        return Sk.ffi.numberToIntPy(self[PROP_DETAIL]);
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(OCTAHEDRON_GEOMETRY);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    switch(name) {
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(OCTAHEDRON_GEOMETRY);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var octahedron = Sk.ffi.remapToJs(selfPy);
    var args = {};
    args[PROP_RADIUS] = octahedron[PROP_RADIUS];
    args[PROP_DETAIL] = octahedron[PROP_DETAIL];
    return Sk.ffi.stringToPy(OCTAHEDRON_GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var octahedron = Sk.ffi.remapToJs(selfPy);
    var radius = octahedron[PROP_RADIUS];
    var detail = octahedron[PROP_DETAIL];
    var args = [radius, detail];
    return Sk.ffi.stringToPy(OCTAHEDRON_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, OCTAHEDRON_GEOMETRY, []);

mod[PLANE_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, widthPy, depthPy, widthSegmentsPy, heightSegmentsPy) {
    Sk.ffi.checkMethodArgs(PLANE_GEOMETRY, arguments, 2, 4);
    Sk.ffi.checkArgType(ARG_WIDTH, Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(widthPy), widthPy);
    Sk.ffi.checkArgType(ARG_DEPTH, Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(depthPy), depthPy);
    if (isDefined(widthSegmentsPy)) {
      Sk.ffi.checkArgType(PROP_WIDTH_SEGMENTS, Sk.ffi.PyType.INT, Sk.ffi.isInt(widthSegmentsPy), widthSegmentsPy);
    }
    if (isDefined(heightSegmentsPy)) {
      Sk.ffi.checkArgType(PROP_HEIGHT_SEGMENTS, Sk.ffi.PyType.INT, Sk.ffi.isInt(heightSegmentsPy), heightSegmentsPy);
    }
    var width = Sk.ffi.remapToJs(widthPy);
    var depth = Sk.ffi.remapToJs(depthPy);
    var widthSegments  = Sk.ffi.remapToJs(widthSegmentsPy);
    var heightSegments = Sk.ffi.remapToJs(heightSegmentsPy);
    Sk.ffi.referenceToPy(new Sk.stdlib.PlaneGeometry(width, depth, widthSegments, heightSegments), PLANE_GEOMETRY, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    return geometryGetAttr(PLANE_GEOMETRY, selfPy, name);
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    return geometrySetAttr(PLANE_GEOMETRY, selfPy, name, valuePy);
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var names  = [PROP_WIDTH, PROP_HEIGHT];
    var args = names.map(function(name) {return [name, Sk.ffi.remapToJs(Sk.ffh.str(Sk.ffi.gattr(selfPy, name)))].join(EQUAL);});
    return Sk.ffi.stringToPy(PLANE_GEOMETRY + LPAREN + args.join(COMMA + SPACE) + RPAREN);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var names  = [PROP_WIDTH, PROP_HEIGHT];
    var argsPy = names.map(function(name) {return Sk.ffi.gattr(selfPy, name);});
    var args = argsPy.map(function(valuePy) {return Sk.ffi.remapToJs(Sk.ffh.repr(valuePy));});
    return Sk.ffi.stringToPy(PLANE_GEOMETRY + LPAREN + args.join(COMMA + SPACE) + RPAREN);
  });
}, PLANE_GEOMETRY, []);

mod[REVOLUTION_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, pointsPy, generatorPy, segmentsPy, phiStartPy, phiLengthPy, attitudePy) {
    Sk.ffi.checkMethodArgs(REVOLUTION_GEOMETRY, arguments, 2, 5);
    Sk.ffi.checkArgType(PROP_POINTS, Sk.ffi.PyType.LIST, Sk.ffi.isList(pointsPy), pointsPy);
    Sk.ffi.checkArgType(PROP_GENERATOR, EUCLIDEAN_3, Sk.ffi.isInstance(generatorPy, EUCLIDEAN_3), generatorPy);
    if (Sk.ffi.isDefined(segmentsPy)) {
      Sk.ffi.checkArgType(PROP_SEGMENTS, Sk.ffi.PyType.INT, Sk.ffi.isInt(segmentsPy), segmentsPy);
    }
    if (Sk.ffi.isDefined(phiStartPy)) {
      Sk.ffi.checkArgType(PROP_PHI_START, NUM, Sk.ffi.isNum(phiStartPy), phiStartPy);
    }
    if (Sk.ffi.isDefined(phiLengthPy)) {
      Sk.ffi.checkArgType(PROP_PHI_LENGTH, NUM, Sk.ffi.isNum(phiLengthPy), phiLengthPy);
    }
    if (Sk.ffi.isDefined(attitudePy)) {
      Sk.ffi.checkArgType(PROP_ATTITUDE, EUCLIDEAN_3, Sk.ffi.isInstance(attitudePy, EUCLIDEAN_3), attitudePy);
    }
    var points = Sk.ffi.remapToJs(pointsPy).map(function(euclidean3) {
      return new THREE.Vector3(euclidean3.x, euclidean3.y, euclidean3.z);
    });
    var attitude   = Sk.ffi.remapToJs(attitudePy);
    var attitude = Sk.ffi.remapToJs(attitudePy) ? Sk.ffi.remapToJs(attitudePy).quaternion : undefined;
    Sk.ffi.referenceToPy(new Sk.stdlib.RevolutionGeometry(
      points,
      Sk.ffi.remapToJs(generatorPy).quaternion,
      Sk.ffi.remapToJs(segmentsPy),
      Sk.ffi.remapToJs(phiStartPy),
      Sk.ffi.remapToJs(phiLengthPy),
      attitude), REVOLUTION_GEOMETRY, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(geometryPy, name) {
    var geometry = Sk.ffi.remapToJs(geometryPy);
    switch(name) {
      default: {
        return geometryGetAttr(REVOLUTION_GEOMETRY, geometryPy, name);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(geometryPy, name, valuePy) {
    var geometry = Sk.ffi.remapToJs(geometryPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      default: {
        return geometrySetAttr(REVOLUTION_GEOMETRY, geometryPy, name, valuePy);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var args = {};
    return Sk.ffi.stringToPy(REVOLUTION_GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var args = [];
    return Sk.ffi.stringToPy(REVOLUTION_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, REVOLUTION_GEOMETRY, []);

 mod[SPHERE_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  var PROP_PHI_START       = "phiStart";
  var PROP_PHI_LENGTH      = "phiLength";
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, radiusPy, widthSegmentsPy, heightSegmentsPy, phiStart, phiLength, thetaStart, thetaLength) {
    if (Sk.ffi.isDefined(radiusPy)) {
      if (Sk.ffi.isInstance(radiusPy, SPHERE_GEOMETRY)) {
        Sk.ffi.checkMethodArgs(SPHERE_GEOMETRY, arguments, 1, 1);
        Sk.ffi.referenceToPy(Sk.ffi.remapToJs(radiusPy), SPHERE_GEOMETRY, undefined, selfPy);
        return;
      }
      else {
        Sk.ffi.checkArgType(PROP_RADIUS, NUM, Sk.ffi.isNum(radiusPy), radiusPy);
      }
    }
    if (isDefined(widthSegmentsPy)) {
      Sk.ffi.checkArgType(PROP_WIDTH_SEGMENTS, Sk.ffi.PyType.INT, Sk.ffi.isInt(widthSegmentsPy), widthSegmentsPy);
    }
    if (isDefined(heightSegmentsPy)) {
      Sk.ffi.checkArgType(PROP_HEIGHT_SEGMENTS, Sk.ffi.PyType.INT, Sk.ffi.isInt(heightSegmentsPy), heightSegmentsPy);
    }
    var radius = Sk.ffi.remapToJs(radiusPy);
    var widthSegments  = Sk.ffi.remapToJs(widthSegmentsPy);
    var heightSegments = Sk.ffi.remapToJs(heightSegmentsPy);
    phiStart       = numberFromArg(phiStart,              PROP_PHI_START,       SPHERE_GEOMETRY);
    phiLength      = numberFromArg(phiLength,             PROP_PHI_LENGTH,      SPHERE_GEOMETRY);
    thetaStart     = numberFromArg(thetaStart,            PROP_THETA_START,     SPHERE_GEOMETRY);
    thetaLength    = numberFromArg(thetaLength,           PROP_THETA_LENGTH,    SPHERE_GEOMETRY);
    Sk.ffi.referenceToPy(new THREE[SPHERE_GEOMETRY](radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength), SPHERE_GEOMETRY, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var geometry = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_RADIUS: {
        return Sk.ffi.numberToFloatPy(geometry[PROP_RADIUS]);
      }
      case PROP_WIDTH_SEGMENTS: {
        return Sk.ffi.numberToIntPy(geometry[PROP_WIDTH_SEGMENTS]);
      }
      case PROP_HEIGHT_SEGMENTS: {
        return Sk.ffi.numberToIntPy(geometry[PROP_HEIGHT_SEGMENTS]);
      }
      case PROP_PHI_START: {
        return Sk.ffi.numberToFloatPy(geometry[PROP_PHI_START]);
      }
      case PROP_PHI_LENGTH: {
        return Sk.ffi.numberToFloatPy(geometry[PROP_PHI_LENGTH]);
      }
      case PROP_THETA_START: {
        return Sk.ffi.numberToFloatPy(geometry[PROP_THETA_START]);
      }
      case PROP_THETA_LENGTH: {
        return Sk.ffi.numberToFloatPy(geometry[PROP_THETA_LENGTH]);
      }
      default: {
        return geometryGetAttr(SPHERE_GEOMETRY, selfPy, name);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    switch(name) {
      default: {
        return geometrySetAttr(SPHERE_GEOMETRY, selfPy, name, valuePy);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var names  = [PROP_RADIUS, PROP_WIDTH_SEGMENTS, PROP_HEIGHT_SEGMENTS, PROP_PHI_START, PROP_PHI_LENGTH, PROP_THETA_START, PROP_THETA_LENGTH];
    var args = names.map(function(name) {return [name, Sk.ffi.remapToJs(Sk.ffh.str(Sk.ffi.gattr(selfPy, name)))].join(EQUAL);});
    return Sk.ffi.stringToPy(SPHERE_GEOMETRY + LPAREN + args.join(COMMA + SPACE) + RPAREN);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var sphere         = Sk.ffi.remapToJs(selfPy);
    var radius         = sphere[PROP_RADIUS];
    var widthSegments  = sphere[PROP_WIDTH_SEGMENTS];
    var heightSegments = sphere[PROP_HEIGHT_SEGMENTS];
    var phiStart       = sphere[PROP_PHI_START];
    var phiLength      = sphere[PROP_PHI_LENGTH];
    var thetaStart     = sphere[PROP_THETA_START];
    var thetaLength    = sphere[PROP_THETA_LENGTH];
    var args = [radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength];
    return Sk.ffi.stringToPy(SPHERE_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, SPHERE_GEOMETRY, []);

mod[TETRAHEDRON_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, radiusPy, detailPy) {
    Sk.ffi.checkMethodArgs(TETRAHEDRON_GEOMETRY, arguments, 2, 2);
    Sk.ffi.checkArgType(ARG_RADIUS, NUM, Sk.ffi.isNum(radiusPy), radiusPy);
    Sk.ffi.checkArgType(ARG_DETAIL, INT, Sk.ffi.isInt(detailPy), detailPy);
    var radius = Sk.ffi.remapToJs(radiusPy);
    var detail = Sk.ffi.remapToJs(detailPy);
    var tetra = new THREE[TETRAHEDRON_GEOMETRY](radius, detail);
    tetra.radius = radius; // workaround for THREE not caching radius.
    tetra.detail = detail; // workaround for THREE not caching detail.
    Sk.ffi.referenceToPy(tetra, TETRAHEDRON_GEOMETRY, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(tetraPy, name) {
    var tetra = Sk.ffi.remapToJs(tetraPy);
    switch(name) {
      case PROP_RADIUS: {
        return Sk.ffi.numberToFloatPy(tetra[PROP_RADIUS]);
      }
      case PROP_DETAIL: {
        return Sk.ffi.numberToIntPy(tetra[PROP_DETAIL]);
      }
      default: {
        return geometryGetAttr(TETRAHEDRON_GEOMETRY, tetraPy, name);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(tetraPy, name, valuePy) {
    return geometrySetAttr(TETRAHEDRON_GEOMETRY, tetraPy, name, valuePy);
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var tetrahedron = Sk.ffi.remapToJs(selfPy);
    var args = {};
    args[PROP_RADIUS] = tetrahedron[PROP_RADIUS];
    args[PROP_DETAIL] = tetrahedron[PROP_DETAIL];
    return Sk.ffi.stringToPy(TETRAHEDRON_GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var tetrahedron = Sk.ffi.remapToJs(selfPy);
    var radius = tetrahedron[PROP_RADIUS];
    var detail = tetrahedron[PROP_DETAIL];
    var args = [radius, detail];
    return Sk.ffi.stringToPy(TETRAHEDRON_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, TETRAHEDRON_GEOMETRY, []);

 mod[TEXT_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(self, text, parameters) {
    text = Sk.ffi.remapToJs(text);
    parameters = Sk.ffi.remapToJs(parameters);
    self.v = new THREE[TEXT_GEOMETRY](text, parameters);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    return geometryGetAttr(TEXT_GEOMETRY, selfPy, name);
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    return geometrySetAttr(TEXT_GEOMETRY, selfPy, name, valuePy);
  });
  $loc.__str__ = Sk.ffi.functionPy(function(self) {
    var text = Sk.ffi.remapToJs(self);
    var args = {};
    return Sk.ffi.stringToPy(TEXT_GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(self) {
    var text = Sk.ffi.remapToJs(self);
    var args = [];
    return Sk.ffi.stringToPy(TEXT_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, TEXT_GEOMETRY, []);

 mod[TORUS_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  var PROP_TUBE             = "tube";
  var PROP_RADIAL_SEGMENTS  = "radialSegments";
  var PROP_TUBULAR_SEGMENTS = "tubularSegments";
  var PROP_ARC              = "arc";
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, radiusPy, tubePy, radialSegmentsPy, tubularSegmentsPy, arcPy) {
    Sk.ffi.checkMethodArgs(TORUS_GEOMETRY, arguments, 0, 5);
    if (Sk.ffi.isDefined(radiusPy)) {
      Sk.ffi.checkArgType(ARG_RADIUS, NUM, Sk.ffi.isNum(radiusPy), radiusPy);
    }
    if (Sk.ffi.isDefined(tubePy)) {
      Sk.ffi.checkArgType(PROP_TUBE, NUM, Sk.ffi.isNum(tubePy), tubePy);
    }
    if (Sk.ffi.isDefined(radialSegmentsPy)) {
      Sk.ffi.checkArgType(PROP_RADIAL_SEGMENTS, INT, Sk.ffi.isInt(radialSegmentsPy), radialSegmentsPy);
    }
    if (Sk.ffi.isDefined(tubularSegmentsPy)) {
      Sk.ffi.checkArgType(PROP_TUBULAR_SEGMENTS, INT, Sk.ffi.isInt(tubularSegmentsPy), tubularSegmentsPy);
    }
    if (Sk.ffi.isDefined(arcPy)) {
      Sk.ffi.checkArgType(PROP_ARC, NUM, Sk.ffi.isNum(arcPy), arcPy);
    }
    var radius = Sk.ffi.remapToJs(radiusPy);
    var tube = Sk.ffi.remapToJs(tubePy);
    var radialSegments = Sk.ffi.remapToJs(radialSegmentsPy);
    var tubularSegments = Sk.ffi.remapToJs(tubularSegmentsPy);
    var arc = Sk.ffi.remapToJs(arcPy);
    var torus = new Sk.stdlib.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc);
    Sk.ffi.referenceToPy(torus, TORUS_GEOMETRY, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(torusPy, name) {
    var torus = Sk.ffi.remapToJs(torusPy);
    switch(name) {
      case PROP_RADIUS: {
        return Sk.ffi.numberToFloatPy(torus[PROP_RADIUS]);
      }
      case PROP_TUBE: {
        return Sk.ffi.numberToFloatPy(torus[PROP_TUBE]);
      }
      case PROP_RADIAL_SEGMENTS: {
        return Sk.ffi.numberToIntPy(torus[PROP_RADIAL_SEGMENTS]);
      }
      case PROP_TUBULAR_SEGMENTS: {
        return Sk.ffi.numberToIntPy(torus[PROP_TUBULAR_SEGMENTS]);
      }
      case PROP_ARC: {
        return Sk.ffi.numberToFloatPy(torus[PROP_ARC]);
      }
      default: {
        return geometryGetAttr(TORUS_GEOMETRY, torusPy, name);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(torusPy, name, valuePy) {
    return geometrySetAttr(TORUS_GEOMETRY, torusPy, name, valuePy);
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var names  = [PROP_RADIUS, PROP_TUBE, PROP_RADIAL_SEGMENTS, PROP_TUBULAR_SEGMENTS, PROP_ARC];
    var args = names.map(function(name) {return [name, Sk.ffi.remapToJs(Sk.ffh.str(Sk.ffi.gattr(selfPy, name)))].join(EQUAL);});
    return Sk.ffi.stringToPy(TORUS_GEOMETRY + LPAREN + args.join(COMMA + SPACE) + RPAREN);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var names  = [PROP_RADIUS, PROP_TUBE, PROP_RADIAL_SEGMENTS, PROP_TUBULAR_SEGMENTS, PROP_ARC];
    var argsPy = names.map(function(name) {return Sk.ffi.gattr(selfPy, name);});
    var args = argsPy.map(function(valuePy) {return Sk.ffi.remapToJs(Sk.ffh.repr(valuePy));});
    return Sk.ffi.stringToPy(TORUS_GEOMETRY + LPAREN + args.join(COMMA + SPACE) + RPAREN);
  });
}, TORUS_GEOMETRY, []);

mod[Sk.three.VORTEX_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, radiusPy, radiusConePy, radiusShaftPy, lengthConePy, lengthShaftPy, arrowSegmentsPy, radialSegmentsPy) {
    Sk.ffi.checkMethodArgs(Sk.three.VORTEX_GEOMETRY, arguments, 7, 7);
    Sk.ffi.checkArgType(ARG_RADIUS, Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(radiusPy), radiusPy);
    Sk.ffi.checkArgType(ARG_RADIUS_CONE, NUM, Sk.ffi.isNum(radiusConePy), radiusConePy);
    Sk.ffi.checkArgType(ARG_RADIUS_SHAFT, NUM, Sk.ffi.isNum(radiusShaftPy), radiusShaftPy);
    var radius = Sk.ffi.remapToJs(radiusPy);
    var radiusCone = Sk.ffi.remapToJs(radiusConePy);
    var radiusShaft = Sk.ffi.remapToJs(radiusShaftPy);
    var lengthCone = Sk.ffi.remapToJs(lengthConePy);
    var lengthShaft = Sk.ffi.remapToJs(lengthShaftPy);
    if (isDefined(arrowSegmentsPy)) {
      Sk.ffi.checkArgType(PROP_WIDTH_SEGMENTS, Sk.ffi.PyType.INT, Sk.ffi.isInt(arrowSegmentsPy), arrowSegmentsPy);
    }
    if (isDefined(radialSegmentsPy)) {
      Sk.ffi.checkArgType(PROP_HEIGHT_SEGMENTS, Sk.ffi.PyType.INT, Sk.ffi.isInt(radialSegmentsPy), radialSegmentsPy);
    }
    var arrowSegments  = Sk.ffi.remapToJs(arrowSegmentsPy);
    var radialSegments = Sk.ffi.remapToJs(radialSegmentsPy);
    var vortex = new Sk.stdlib.VortexGeometry(radius, radiusCone, radiusShaft, lengthCone, lengthShaft, arrowSegments, radialSegments);
    Sk.ffi.referenceToPy(vortex, Sk.three.VORTEX_GEOMETRY, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(vortexPy, name) {
    var vortex = Sk.ffi.remapToJs(vortexPy);
    switch(name) {
      case PROP_RADIUS: {
        return Sk.ffi.numberToFloatPy(vortex[PROP_RADIUS]);
      }
      case PROP_RADIUS_CONE: {
        return Sk.ffi.numberToFloatPy(vortex[PROP_RADIUS_CONE]);
      }
      case PROP_RADIUS_SHAFT: {
        return Sk.ffi.numberToFloatPy(vortex[PROP_RADIUS_SHAFT]);
      }
      case PROP_WIDTH_SEGMENTS: {
        return Sk.ffi.numberToIntPy(vortex[PROP_WIDTH_SEGMENTS]);
      }
      case PROP_DEPTH_SEGMENTS:
      case PROP_HEIGHT_SEGMENTS: {
        return Sk.ffi.numberToIntPy(vortex[PROP_HEIGHT_SEGMENTS]);
      }
      default: {
        return geometryGetAttr(Sk.three.VORTEX_GEOMETRY, vortexPy, name);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(vortexPy, name, valuePy) {
    return geometrySetAttr(Sk.three.VORTEX_GEOMETRY, vortexPy, name, valuePy);
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var names  = [PROP_RADIUS, PROP_RADIUS_CONE, PROP_RADIUS_SHAFT];
    var args = names.map(function(name) {return [name, Sk.ffi.remapToJs(Sk.ffh.str(Sk.ffi.gattr(selfPy, name)))].join(EQUAL);});
    return Sk.ffi.stringToPy(Sk.three.VORTEX_GEOMETRY + LPAREN + args.join(COMMA + SPACE) + RPAREN);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var names  = [PROP_RADIUS, PROP_RADIUS_CONE, PROP_RADIUS_SHAFT];
    var argsPy = names.map(function(name) {return Sk.ffi.gattr(selfPy, name);});
    var args = argsPy.map(function(valuePy) {return Sk.ffi.remapToJs(Sk.ffh.repr(valuePy));});
    return Sk.ffi.stringToPy(Sk.three.VORTEX_GEOMETRY + LPAREN + args.join(COMMA + SPACE) + RPAREN);
  });
}, Sk.three.VORTEX_GEOMETRY, []);
/**
 * @param {string} className 
 * @param {!Object} geometryPy
 * @param {string} name
 */
function geometryGetAttr(className, geometryPy, name) {
  /**
   * @const
   * @type {THREE.Geometry}
   */
  var geometry = Sk.ffi.remapToJs(geometryPy);
  switch(name) {
    case PROP_ID: {
      return Sk.ffi.numberToIntPy(geometry.id);
    }
    case PROP_NAME: {
      return Sk.ffi.stringToPy(geometry.name);
    }
    case PROP_UUID: {
      return Sk.ffi.stringToPy(geometry.uuid);
    }
    case PROP_FACES: {
      return mutableFaceListPy(geometry.faces);
    }
    case PROP_COLORS: {
      return mutableColorListPy(geometry.colors);
    }
    case PROP_VERTICES: {
      return mutableVertexListPy(geometry.vertices);
    }
    case PROP_RADIUS: {
      return Sk.ffi.numberToFloatPy(geometry.radius);
    }
    case PROP_WIDTH: {
      return Sk.ffi.numberToFloatPy(geometry.width);
    }
    case PROP_DEPTH:
    case PROP_HEIGHT: {
      return Sk.ffi.numberToFloatPy(geometry.height);
    }
    case METHOD_APPLY_MATRIX: {
      return Sk.ffi.callableToPy(mod, name, function(methodPy, matrixPy) {
        Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
        Sk.ffi.checkArgType("matrix", Sk.three.MATRIX_4, Sk.ffi.isInstance(matrixPy, Sk.three.MATRIX_4), matrixPy);
        geometry.applyMatrix(Sk.ffi.remapToJs(matrixPy));
      });
    }
    case METHOD_COMPUTE_CENTROIDS: {
      return Sk.ffi.callableToPy(mod, name, function(methodPy) {
        Sk.ffi.checkMethodArgs(name, arguments, 0, 0);
        geometry.computeCentroids();
      });
    }
    case METHOD_COMPUTE_FACE_NORMALS: {
      return Sk.ffi.callableToPy(mod, name, function(methodPy) {
        Sk.ffi.checkMethodArgs(name, arguments, 0, 0);
        geometry.computeFaceNormals();
      });
    }
    default: {
      throw Sk.ffi.err.attribute(name).isNotGetableOnType(className);
    }
  }
}
/**
 * @param {string} className 
 * @param {!Object} geometryPy
 * @param {string} name
 * @param {!Object} valuePy
 */
function geometrySetAttr(className, geometryPy, name, valuePy) {
  var g = Sk.ffi.remapToJs(geometryPy);
  /**
   * @const
   * @type {THREE.Geometry}
   */
  var geometry = g;
  switch(name) {
    case PROP_NAME: {
      Sk.ffi.checkArgType(PROP_NAME, Sk.ffi.PyType.STR, Sk.ffi.isStr(valuePy), valuePy);
      geometry.name = Sk.ffi.remapToJs(valuePy);
    }
    break;
    default: {
      throw Sk.ffi.err.attribute(name).isNotSetableOnType(className);
    }
  }
}
/**
 * Geometry
 */
mod[GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, geometryPy) {
    if (isDefined(geometryPy)) {
      Sk.ffi.referenceToPy(Sk.ffi.remapToJs(geometryPy), GEOMETRY, undefined, selfPy);
    }
    else {
      Sk.ffi.referenceToPy(new THREE.Geometry(), GEOMETRY, undefined, selfPy);
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    return geometryGetAttr(GEOMETRY, selfPy, name);
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    return geometrySetAttr(GEOMETRY, selfPy, name, valuePy);
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var geometry = Sk.ffi.remapToJs(selfPy);
    var args = {};
    return Sk.ffi.stringToPy(GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var geometry = Sk.ffi.remapToJs(selfPy);
    var args = [];
    return Sk.ffi.stringToPy(GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, GEOMETRY, []);
/**
 * @param {string} className 
 * @param {!Object} selfPy
 * @param {string} name
 */
Sk.three.object3DGetAttr = function(className, selfPy, name) {
  var self = Sk.ffi.remapToJs(selfPy);
  switch(name) {
    case PROP_ID: {
      return Sk.ffi.numberToIntPy(self[name]);
    }
    case PROP_NAME:
    case PROP_UUID:
    case PROP_EULER_ORDER: {
      return Sk.ffi.stringToPy(self[name]);
    }
    case PROP_ATTITUDE: {
      return quaternionToEuclidean3Py(self[PROP_QUATERNION]);
    }
    case PROP_POSITION:
    case PROP_ROTATION:
    case PROP_SCALE:
    case PROP_UP: {
      return vectorToEuclidean3Py(self[name]);
    }
    case PROP_MATRIX_WORLD: {
      return Sk.ffi.callsim(mod[Sk.three.MATRIX_4], Sk.ffi.referenceToPy(self[name], Sk.three.MATRIX_4));
    }
    case PROP_QUATERNION: {
      return Sk.ffi.callsim(mod[QUATERNION], Sk.ffi.referenceToPy(self[PROP_QUATERNION], QUATERNION));
    }
    case PROP_USE_QUATERNION:
    case PROP_VISIBLE: {
      return Sk.ffi.booleanToPy(self[name]);
    }
    case PROP_CHARGE:
    case PROP_MASS:
    case PROP_MOMENTUM:
    case PROP_VELOCITY: {
      var valuePy = self[name];
      if (isEuclidean3Py(valuePy)) {
        return valuePy;
      }
      else {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(className);
      }
    }
    case PROP_GEOMETRY: {
      return Sk.ffi.callsim(mod[GEOMETRY], Sk.ffi.referenceToPy(self[PROP_GEOMETRY], GEOMETRY));
    }
    case PROP_MATERIAL: {
      return Sk.ffi.callsim(mod[Sk.three.MATERIAL], Sk.ffi.referenceToPy(self[PROP_MATERIAL], Sk.three.MATERIAL));
    }
    case METHOD_ADD: {
      return methodAdd(self);
    }
    case METHOD_REMOVE: {
      return methodRemove(self);
    }
    case METHOD_TRAVERSE: {
      return Sk.ffi.callableToPy(mod, name, function(methodPy, callbackPy) {
        Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
        Sk.ffi.checkArgType(ARG_CALLBACK, Sk.ffi.PyType.FUNCTION, Sk.ffi.isFunction(callbackPy), callbackPy);
        var callbackJs = function(objJs) {
          var objPy = Sk.ffi.callsim(mod[Sk.three.OBJECT_3D], Sk.ffi.referenceToPy(objJs, Sk.three.OBJECT_3D));
          return Sk.ffi.remapToJs(Sk.ffi.callsim(callbackPy, objPy));
        };
        self[name](callbackJs);
        return selfPy;
      });
    }
    default: {
      throw Sk.ffi.err.attribute(name).isNotGetableOnType(className);
    }
  }
};
/**
 * @param {string} className 
 * @param {!Object} selfPy
 * @param {string} name
 * @param {!Object} valuePy
 */
Sk.three.object3DSetAttr = function(className, selfPy, name, valuePy) {
  var self = Sk.ffi.remapToJs(selfPy);
  switch(name) {
    case PROP_ATTITUDE: {
      setQuaternionProperty(className, selfPy, PROP_QUATERNION, valuePy, name);
    }
    break;
    case PROP_POSITION:
    case PROP_ROTATION:
    case PROP_SCALE:
    case PROP_UP: {
      setVectorProperty(self, name, valuePy);
    }
    break;
    case PROP_QUATERNION: {
      Sk.ffi.checkArgType(name, QUATERNION, Sk.ffi.isInstance(valuePy, QUATERNION), valuePy);
      self[name] = Sk.ffi.remapToJs(valuePy);
    }
    break;
    case PROP_EULER_ORDER: {
      Sk.ffi.checkArgType(name, Sk.ffi.PyType.STR, Sk.ffi.isStr(valuePy), valuePy);
      self[name] = Sk.ffi.remapToJs(valuePy);
    }
    break;
    case PROP_USE_QUATERNION:
    case PROP_VISIBLE: {
      Sk.ffi.checkArgType(name, Sk.ffi.PyType.BOOL, Sk.ffi.isBool(valuePy), valuePy);
      self[name] = Sk.ffi.remapToJs(valuePy);
    }
    break;
    case PROP_CHARGE:
    case PROP_MASS:
    case PROP_MOMENTUM:
    case PROP_VELOCITY: {
      Sk.ffi.checkArgType(name, EUCLIDEAN_3, isEuclidean3Py(valuePy), valuePy);
      self[name] = valuePy;
    }
    break;
    default: {
      throw Sk.ffi.err.attribute(name).isNotSetableOnType(className);
    }
  }
};
/**
 * Object3D
 */
mod[Sk.three.OBJECT_3D] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, objectPy) {
    var objectJs = isDefined(objectPy) ? Sk.ffi.remapToJs(objectPy) : new THREE[Sk.three.OBJECT_3D]();
    Sk.ffi.referenceToPy(objectJs, Sk.three.OBJECT_3D, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    return Sk.three.object3DGetAttr(Sk.three.OBJECT_3D, selfPy, name);
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    return Sk.three.object3DSetAttr(Sk.three.OBJECT_3D, selfPy, name, valuePy);
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var args = {};
    return Sk.ffi.stringToPy(Sk.three.OBJECT_3D + LPAREN + JSON.stringify(args) + RPAREN);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var args = [];
    return Sk.ffi.stringToPy(Sk.three.OBJECT_3D + LPAREN + args.map(function(x) {return JSON.stringify(x);}).join(", ") + RPAREN);
  });
}, Sk.three.OBJECT_3D, []);
/**
 * @param {string} className 
 * @param {!Object} selfPy
 * @param {string} name
 */
function lightGetAttr(className, selfPy, name) {
  var light = Sk.ffi.remapToJs(selfPy);
  switch(name) {
    case PROP_COLOR: {
      return Sk.ffi.callsim(mod[COLOR], Sk.ffi.referenceToPy(light[PROP_COLOR], COLOR));
    }
    default: {
      return Sk.three.object3DGetAttr(className, selfPy, name);
    }
  }
}
/**
 * @param {string} className 
 * @param {!Object} selfPy
 * @param {string} name
 * @param {!Object} valuePy
 */
function lightSetAttr(className, selfPy, name, valuePy) {
  var light = Sk.ffi.remapToJs(selfPy);
  var value = Sk.ffi.remapToJs(valuePy);
  switch(name) {
    case PROP_COLOR: {
      light[PROP_COLOR] = new THREE.Color(value);
    }
    break;
    default: {
      return Sk.three.object3DSetAttr(className, selfPy, name, valuePy);
    }
  }
}
/**
 * AmbientLight
 */
mod[AMBIENT_LIGHT] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, colorPy) {
    var color = Sk.ffi.remapToJs(colorPy);
    Sk.ffi.referenceToPy(new THREE[AMBIENT_LIGHT](color), AMBIENT_LIGHT, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    return lightGetAttr(AMBIENT_LIGHT, selfPy, name);
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    return lightSetAttr(AMBIENT_LIGHT, selfPy, name, valuePy);
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var light = Sk.ffi.remapToJs(selfPy);
    var args = {};
    args[PROP_COLOR] = light[PROP_COLOR];
    return Sk.ffi.stringToPy(AMBIENT_LIGHT + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var light = Sk.ffi.remapToJs(selfPy);
    var args = [light[PROP_COLOR]];
    return Sk.ffi.stringToPy(AMBIENT_LIGHT + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, AMBIENT_LIGHT, []);
/**
 * DirectionalLight
 */
mod[DIRECTIONAL_LIGHT] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, colorPy, intensityPy) {
    Sk.ffi.checkMethodArgs(DIRECTIONAL_LIGHT, arguments, 1, 2);
    Sk.ffi.checkArgType(PROP_INTENSITY, NUM, Sk.ffi.isNum(intensityPy)||Sk.ffi.isUndefined(intensityPy), intensityPy);
    var color = Sk.ffi.remapToJs(colorPy);
    var intensity = Sk.ffi.remapToJs(intensityPy);
    Sk.ffi.referenceToPy(new THREE[DIRECTIONAL_LIGHT](color, intensity), DIRECTIONAL_LIGHT, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var light = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_INTENSITY: {
        return Sk.ffi.numberToFloatPy(light[PROP_INTENSITY]);
      }
      default: {
        return lightGetAttr(DIRECTIONAL_LIGHT, selfPy, name);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    var light = Sk.ffi.remapToJs(selfPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      case PROP_INTENSITY: {
        Sk.ffi.checkArgType(PROP_INTENSITY, NUM, Sk.ffi.isNum(valuePy), valuePy);
        light[PROP_INTENSITY] = value;
      }
      break;
      default: {
        return lightSetAttr(DIRECTIONAL_LIGHT, selfPy, name, valuePy);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var light = Sk.ffi.remapToJs(selfPy);
    var args = {};
    args[PROP_COLOR] = light[PROP_COLOR];
    args[PROP_INTENSITY] = light[PROP_INTENSITY];
    args[PROP_DISTANCE] = light[PROP_DISTANCE];
    return Sk.ffi.stringToPy(DIRECTIONAL_LIGHT + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var light = Sk.ffi.remapToJs(selfPy);
    var args = [light[PROP_COLOR], light[PROP_INTENSITY], light[PROP_DISTANCE]];
    return Sk.ffi.stringToPy(DIRECTIONAL_LIGHT + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, DIRECTIONAL_LIGHT, []);
/**
 * PointLight
 */
mod[POINT_LIGHT] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, colorPy, intensityPy, distancePy) {
    Sk.ffi.checkMethodArgs(POINT_LIGHT, arguments, 1, 3);
    Sk.ffi.checkArgType(ARG_COLOR, [COLOR, Sk.ffi.PyType.INT], isColorPy(colorPy)||Sk.ffi.isInt(colorPy), colorPy);
    Sk.ffi.checkArgType(PROP_INTENSITY, NUM, Sk.ffi.isNum(intensityPy)||Sk.ffi.isUndefined(intensityPy), intensityPy);
    Sk.ffi.checkArgType(PROP_DISTANCE,  NUM, Sk.ffi.isNum(distancePy) ||Sk.ffi.isUndefined(distancePy),  distancePy);
    var color = Sk.ffi.remapToJs(colorPy);
    var intensity = Sk.ffi.remapToJs(intensityPy);
    var distance = Sk.ffi.remapToJs(distancePy);
    Sk.ffi.referenceToPy(new THREE[POINT_LIGHT](color, intensity, distance), POINT_LIGHT, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    switch(name) {
      case PROP_DISTANCE: {
        return Sk.ffi.numberToFloatPy(Sk.ffi.remapToJs(selfPy)[PROP_DISTANCE]);
      }
      case PROP_INTENSITY: {
        return Sk.ffi.numberToFloatPy(Sk.ffi.remapToJs(selfPy)[PROP_INTENSITY]);
      }
      default: {
        return lightGetAttr(POINT_LIGHT, selfPy, name);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    switch(name) {
      case PROP_DISTANCE: {
        Sk.ffi.checkArgType(PROP_DISTANCE, NUM, Sk.ffi.isNum(valuePy), valuePy);
        Sk.ffi.remapToJs(selfPy)[PROP_DISTANCE] = Sk.ffi.remapToJs(valuePy);
      }
      break;
      case PROP_INTENSITY: {
        Sk.ffi.checkArgType(PROP_INTENSITY, NUM, Sk.ffi.isNum(valuePy), valuePy);
        Sk.ffi.remapToJs(selfPy)[PROP_INTENSITY] = Sk.ffi.remapToJs(valuePy);
      }
      break;
      default: {
        return lightSetAttr(POINT_LIGHT, selfPy, name, valuePy);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var light = Sk.ffi.remapToJs(selfPy);
    var args = {};
    args[PROP_COLOR] = light[PROP_COLOR];
    args[PROP_INTENSITY] = light[PROP_INTENSITY];
    args[PROP_DISTANCE] = light[PROP_DISTANCE];
    return Sk.ffi.stringToPy(POINT_LIGHT + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var light = Sk.ffi.remapToJs(selfPy);
    var args = [light[PROP_COLOR], light[PROP_INTENSITY], light[PROP_DISTANCE]];
    return Sk.ffi.stringToPy(POINT_LIGHT + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, POINT_LIGHT, []);

mod[LINE] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(self, geometryPy, materialPy, typePy) {
    var geometry = Sk.ffi.remapToJs(geometryPy)
    var material = Sk.ffi.remapToJs(materialPy)
    var type = Sk.ffi.remapToJs(typePy)
    self.v = new THREE[LINE](geometry, material, type);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(linePy, name) {
    var line = Sk.ffi.remapToJs(linePy);
    switch(name) {
      case PROP_POSITION: {
        return vectorToEuclidean3Py(line[PROP_POSITION]);
      }
      case PROP_QUATERNION: {
        return Sk.ffi.callsim(mod[QUATERNION], Sk.ffi.referenceToPy(line[PROP_QUATERNION], QUATERNION));
      }
      case PROP_ROTATION: {
        return vectorToEuclidean3Py(line[PROP_ROTATION]);
      }
      case PROP_EULER_ORDER: {
        return Sk.ffi.stringToPy(line[PROP_EULER_ORDER]);
      }
      case PROP_SCALE: {
        return vectorToEuclidean3Py(line[PROP_SCALE]);
      }
      case PROP_UP: {
        return vectorToEuclidean3Py(line[PROP_UP]);
      }
      case PROP_USE_QUATERNION: {
        return line[PROP_USE_QUATERNION];
      }
      case METHOD_LOOK_AT: {return methodLookAt(linePy);}
      case PROP_TYPE: {
        return Sk.ffi.numberToIntPy(line[PROP_TYPE]);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(linePy, name, value) {
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
  $loc.__str__ = Sk.ffi.functionPy(function(self) {
    return Sk.ffi.stringToPy(LINE);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(self) {
    return Sk.ffi.stringToPy(LINE);
  });
}, LINE, []);

mod[LINE_BASIC_MATERIAL] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(self, parameters) {
    self.tp$name = LINE_BASIC_MATERIAL;
    parameters = Sk.ffi.remapToJs(parameters);
    self.v = new THREE[LINE_BASIC_MATERIAL](parameters);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(material, name) {
    material = Sk.ffi.remapToJs(material);
    switch(name) {
      case PROP_COLOR: {
        return Sk.ffi.callsim(mod[COLOR], Sk.ffi.referenceToPy(material[PROP_COLOR], COLOR));
      }
      case PROP_OPACITY: {
        return Sk.ffi.numberToFloatPy(material[PROP_OPACITY]);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(material, name, value) {
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
  $loc.__str__ = Sk.ffi.functionPy(function(material) {
    material = Sk.ffi.remapToJs(material);
    var args = {};
    args[PROP_COLOR] = material[PROP_COLOR];
    args[PROP_OPACITY] = material[PROP_OPACITY];
    return Sk.ffi.stringToPy(LINE_BASIC_MATERIAL + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(material) {
    material = Sk.ffi.remapToJs(material);
    var args = [{}];
    return Sk.ffi.stringToPy(LINE_BASIC_MATERIAL + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, LINE_BASIC_MATERIAL, []);
/**
 * @param {string} className 
 * @param {!Object} meshPy
 * @param {string} name
 */
Sk.three.meshGetAttr = function(className, meshPy, name) {
  var mesh = Sk.ffi.remapToJs(meshPy);
  switch(name) {
    case PROP_ATTITUDE: {
      return quaternionToEuclidean3Py(mesh[PROP_QUATERNION]);
    }
    case PROP_ID: {
      return Sk.ffi.numberToIntPy(mesh[PROP_ID]);
    }
    case PROP_GEOMETRY: {
      return Sk.ffi.callsim(mod[GEOMETRY], Sk.ffi.referenceToPy(mesh[PROP_GEOMETRY], GEOMETRY));
    }
    case PROP_MATERIAL: {
      return Sk.ffi.callsim(mod[Sk.three.MATERIAL], Sk.ffi.referenceToPy(mesh[PROP_MATERIAL], Sk.three.MATERIAL));
    }
    case PROP_MATRIX_AUTO_UPDATE: {
      return mesh[PROP_MATRIX_AUTO_UPDATE];
    }
    case PROP_NAME: {
      return Sk.ffi.stringToPy(mesh[PROP_NAME]);
    }
    case PROP_POSITION: {
      return vectorToEuclidean3Py(mesh[PROP_POSITION]);
    }
    case PROP_ROTATION: {
      return vectorToEuclidean3Py(mesh[PROP_ROTATION]);
    }
    case PROP_EULER_ORDER: {
      return Sk.ffi.stringToPy(mesh[PROP_EULER_ORDER]);
    }
    case PROP_SCALE: {
      return vectorToEuclidean3Py(mesh[PROP_SCALE]);
    }
    case PROP_UP: {
      return vectorToEuclidean3Py(mesh[PROP_UP]);
    }
    case METHOD_LOOK_AT: {return methodLookAt(meshPy);}
    case METHOD_ROTATE_ON_AXIS: {
      return Sk.ffi.callableToPy(mod, METHOD_ROTATE_ON_AXIS, function(methodPy, axisPy, anglePy) {
        Sk.ffi.checkMethodArgs(METHOD_ROTATE_ON_AXIS, arguments, 2, 2);
        Sk.ffi.checkArgType(ARG_AXIS, VECTOR_3, isVector3Py(axisPy), axisPy);
        Sk.ffi.checkArgType("angle", NUM, Sk.ffi.isNum(anglePy), anglePy);
        mesh[METHOD_ROTATE_ON_AXIS](Sk.ffi.remapToJs(axisPy), Sk.ffi.remapToJs(anglePy));
        return meshPy;
      });
    }
    case METHOD_ROTATE_X:
    case METHOD_ROTATE_Y:
    case METHOD_ROTATE_Z: {
      return Sk.ffi.callableToPy(mod, name, function(methodPy, axisPy) {
        Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
        Sk.ffi.checkArgType(ARG_AXIS, NUM, Sk.ffi.isNum(axisPy), axisPy);
        mesh[name](Sk.ffi.remapToJs(axisPy));
        return meshPy;
      });
    }
    case METHOD_SET_GEOMETRY: {
      return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
        $loc.__init__ = Sk.ffi.functionPy(function(self) {
          self.tp$name = METHOD_SET_GEOMETRY;
        });
        $loc.__call__ = Sk.ffi.functionPy(function(self, geometryPy) {
          var geometry = Sk.ffi.remapToJs(geometryPy);
          mesh[METHOD_SET_GEOMETRY](geometry);
        });
        $loc.__str__ = Sk.ffi.functionPy(function(self) {
          return Sk.ffi.stringToPy(METHOD_SET_GEOMETRY)
        })
        $loc.__repr__ = Sk.ffi.functionPy(function(self) {
          return Sk.ffi.stringToPy(METHOD_SET_GEOMETRY)
        })
      }, METHOD_SET_GEOMETRY, []));
    }
    case METHOD_TRANSLATE_ON_AXIS: {
      return Sk.ffi.callableToPy(mod, METHOD_TRANSLATE_ON_AXIS, function(methodPy, axisPy, distancePy) {
        Sk.ffi.checkMethodArgs(METHOD_TRANSLATE_ON_AXIS, arguments, 2, 2);
        Sk.ffi.checkArgType(ARG_AXIS, VECTOR_3, isVector3Py(axisPy), axisPy);
        Sk.ffi.checkArgType(PROP_DISTANCE, NUM, Sk.ffi.isNum(distancePy), distancePy);
        mesh[METHOD_TRANSLATE_ON_AXIS](Sk.ffi.remapToJs(axisPy), Sk.ffi.remapToJs(distancePy));
        return meshPy;
      });
    }
    case METHOD_TRANSLATE_X:
    case METHOD_TRANSLATE_Y:
    case METHOD_TRANSLATE_Z: {
      return Sk.ffi.callableToPy(mod, name, function(methodPy, distancePy) {
        Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
        Sk.ffi.checkArgType(PROP_DISTANCE, NUM, Sk.ffi.isNum(distancePy), distancePy);
        mesh[name](Sk.ffi.remapToJs(distancePy));
        return meshPy;
      });
    }
    case METHOD_UPDATE_MATRIX: {
      return Sk.ffi.callableToPy(mod, METHOD_UPDATE_MATRIX, function(methodPy) {
        Sk.ffi.checkMethodArgs(METHOD_UPDATE_MATRIX, arguments, 0, 0);
        mesh[METHOD_UPDATE_MATRIX]();
      });
    }
    default: {
      return Sk.three.object3DGetAttr(className, meshPy, name);
    }
  }
}
/**
 * @param {string} className 
 * @param {!Object} meshPy
 * @param {string} name
 * @param {!Object} valuePy
 */
Sk.three.meshSetAttr = function(className, meshPy, name, valuePy) {
  var mesh = Sk.ffi.remapToJs(meshPy);
  var value = Sk.ffi.remapToJs(valuePy);
  switch(name) {
    case PROP_ATTITUDE: {setQuaternionProperty(Sk.three.MESH, meshPy, PROP_QUATERNION, valuePy, name);} break;
    case PROP_MATRIX_AUTO_UPDATE: {
      mesh[PROP_MATRIX_AUTO_UPDATE] = checkArgBool(PROP_MATRIX_AUTO_UPDATE, valuePy);
    }
    break;
    case PROP_NAME: {
      Sk.ffi.checkArgType(PROP_NAME, Sk.ffi.PyType.STR, Sk.ffi.isStr(valuePy), valuePy);
      mesh[PROP_NAME] = value;
    }
    break;
    case PROP_POSITION:
    case PROP_ROTATION:
    case PROP_SCALE:
    case PROP_UP: {
      setVectorProperty(mesh, name, valuePy);
    }
    break;
    case PROP_QUATERNION: {
      mesh[PROP_QUATERNION] = value;
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
    case PROP_USE_QUATERNION: {
      mesh[PROP_USE_QUATERNION] = value;
    }
    break;
    default: {
      return Sk.three.object3DSetAttr(className, meshPy, name, valuePy);
    }
  }
};
/**
 * Mesh
 */
mod[Sk.three.MESH] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, geometryPy, materialPy) {
    Sk.ffi.checkMethodArgs(Sk.three.MESH, arguments, 1, 2);
    Sk.ffi.checkArgType(PROP_GEOMETRY, GEOMETRY, Sk.ffi.isInstance(geometryPy), geometryPy); // TODO: GEOMETRIES
    Sk.ffi.checkArgType(PROP_MATERIAL, Sk.three.MATERIAL, Sk.ffi.isInstance(materialPy), materialPy); // TODO: MATERIALS
    Sk.ffi.referenceToPy(new THREE[Sk.three.MESH](Sk.ffi.remapToJs(geometryPy), Sk.ffi.remapToJs(materialPy)), Sk.three.MESH, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    return Sk.three.meshGetAttr(Sk.three.MESH, selfPy, name);
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    return Sk.three.meshSetAttr(Sk.three.MESH, selfPy, name, valuePy);
  });
  $loc.__str__ = Sk.ffi.functionPy(function(mesh) {
    mesh = Sk.ffi.remapToJs(mesh);
    var args = {};
    args[PROP_ID] = mesh[PROP_ID];
    args[PROP_NAME] = mesh[PROP_NAME];
    return Sk.ffi.stringToPy(Sk.three.MESH + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(mesh) {
    mesh = Sk.ffi.remapToJs(mesh);
    var args = [/*mesh[PROP_GEOMETRY], mesh[PROP_MATERIAL]*/];
    return Sk.ffi.stringToPy(Sk.three.MESH + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, Sk.three.MESH, []);
/**
 * @param {string} className 
 * @param {!Object} materialPy
 * @param {string} name
 */
function materialGetAttr(className, materialPy, name) {
  var material = Sk.ffi.remapToJs(materialPy);
  switch(name) {
    case PROP_EMISSIVE:
    case PROP_COLOR: {
      return Sk.ffi.callsim(mod[COLOR], Sk.ffi.referenceToPy(material[name], COLOR));
    }
    case PROP_ID: {
      return Sk.ffi.numberToIntPy(material[PROP_ID]);
    }
    case PROP_OPACITY:
    case PROP_OVERDRAW: {
      return Sk.ffi.numberToFloatPy(material[PROP_OPACITY]);
    }
    case PROP_NAME:
    case PROP_UUID: {
      return Sk.ffi.stringToPy(material[name]);
    }
    case PROP_NEEDS_UPDATE:
    case PROP_TRANSPARENT:
    case PROP_VISIBLE: {
      return Sk.ffi.booleanToPy(material[name]);
    }
    default: {
      throw Sk.ffi.err.attribute(name).isNotGetableOnType(className);
    }
  }
}
/**
 * @param {string} className 
 * @param {!Object} materialPy
 * @param {string} name
 * @param {!Object} valuePy
 */
function materialSetAttr(className, materialPy, name, valuePy) {
  var material = Sk.ffi.remapToJs(materialPy);
  switch(name) {
    case PROP_NAME: {
      Sk.ffi.checkArgType(name, Sk.ffi.PyType.STR, Sk.ffi.isStr(valuePy), valuePy);
      material[name] = Sk.ffi.remapToJs(valuePy);
    }
    break;
    case PROP_OVERDRAW: {
      Sk.ffi.checkArgType(name, Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(valuePy), valuePy);
      material[name] = Sk.ffi.remapToJs(valuePy);
    }
    break;
    case PROP_NEEDS_UPDATE:
    case PROP_TRANSPARENT:
    case PROP_VISIBLE: {
      Sk.ffi.checkArgType(name, Sk.ffi.PyType.BOOL, Sk.ffi.isBool(valuePy), valuePy);
      material[name] = Sk.ffi.remapToJs(valuePy);
    }
    break;
    default: {
      throw Sk.ffi.err.attribute(name).isNotSetableOnType(className);
    }
  }
}
/**
 * Material
 */
mod[Sk.three.MATERIAL] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, materialPy) {
    Sk.ffi.checkMethodArgs(Sk.three.MATERIAL, arguments, 0, 1);
    if (isDefined(materialPy)) {
      Sk.ffi.referenceToPy(Sk.ffi.remapToJs(materialPy), Sk.three.MATERIAL, undefined, selfPy);
    }
    else {
      Sk.ffi.referenceToPy(new THREE[Sk.three.MATERIAL](), Sk.three.MATERIAL, undefined, selfPy);
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    switch(name) {
      default: {
        return materialGetAttr(Sk.three.MATERIAL, selfPy, name);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    switch(name) {
      default: {
        return materialSetAttr(Sk.three.MATERIAL, selfPy, name, valuePy);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(Sk.three.MATERIAL + LPAREN + RPAREN);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(Sk.three.MATERIAL + LPAREN + RPAREN);
  });
}, Sk.three.MATERIAL, []);
/**
 * MeshBasicMaterial
 */
mod[MESH_BASIC_MATERIAL] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, parametersPy) {
    var parameters = Sk.ffi.remapToJs(parametersPy);
    Sk.ffi.referenceToPy(new THREE[MESH_BASIC_MATERIAL](parameters), MESH_BASIC_MATERIAL, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(materialPy, name) {
    var material = Sk.ffi.remapToJs(materialPy);
    switch(name) {
      case PROP_COLOR: {
        return Sk.ffi.callsim(mod[COLOR], Sk.ffi.referenceToPy(material[PROP_COLOR], COLOR));
      }
      case PROP_WIREFRAME: {
        return material[PROP_WIREFRAME];
      }
      case PROP_WIREFRAME_LINEWIDTH: {
        return Sk.ffi.numberToFloatPy(material[PROP_WIREFRAME_LINEWIDTH]);
      }
      default: {
        return materialGetAttr(MESH_BASIC_MATERIAL, materialPy, name);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(materialPy, name, valuePy) {
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
      case PROP_OPACITY: {
        if (isNumber(value)) {
          material.opacity = value;
        }
        else {
          throw new Sk.builtin.TypeError("'" + PROP_OPACITY + "' attribute must be a <type 'float'>.");
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
      default: {
        return materialSetAttr(MESH_BASIC_MATERIAL, materialPy, name, valuePy);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(materialPy) {
    var material = Sk.ffi.remapToJs(materialPy);
    var args = {};
    args[PROP_COLOR] = material[PROP_COLOR];
    args[PROP_WIREFRAME] = material[PROP_WIREFRAME];
    args[PROP_WIREFRAME_LINEWIDTH] = material[PROP_WIREFRAME_LINEWIDTH];
    return Sk.ffi.stringToPy(MESH_BASIC_MATERIAL + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(material) {
    material = Sk.ffi.remapToJs(material);
    var parameters = {};
    parameters[PROP_COLOR] = material[PROP_COLOR];
    parameters[PROP_WIREFRAME] = material[PROP_WIREFRAME];
    parameters[PROP_WIREFRAME_LINEWIDTH] = material[PROP_WIREFRAME_LINEWIDTH];
    var args = [parameters];
    return Sk.ffi.stringToPy(MESH_BASIC_MATERIAL + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, MESH_BASIC_MATERIAL, []);

mod[MESH_LAMBERT_MATERIAL] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, parametersPy) {
    Sk.ffi.checkMethodArgs(MESH_LAMBERT_MATERIAL, arguments, 0, 1);
    var parameters = Sk.ffi.remapToJs(parametersPy);
    Sk.ffi.referenceToPy(new THREE[MESH_LAMBERT_MATERIAL](parameters), MESH_LAMBERT_MATERIAL, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(materialPy, name) {
    var material = Sk.ffi.remapToJs(materialPy);
    switch(name) {
      case PROP_ID: {
        return Sk.ffi.numberToIntPy(material[PROP_ID]);
      }
      case PROP_COLOR: {
        return Sk.ffi.callsim(mod[COLOR], Sk.ffi.referenceToPy(material[PROP_COLOR], COLOR));
      }
      case PROP_NAME: {
        return Sk.ffi.stringToPy(material[PROP_NAME]);
      }
      case PROP_OPACITY: {
        return Sk.ffi.numberToFloatPy(material[PROP_OPACITY]);
      }
      default: {
        return materialGetAttr(MESH_LAMBERT_MATERIAL, materialPy, name);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(materialPy, name, valuePy) {
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
      case PROP_OPACITY: {
        if (isNumber(value)) {
          material.opacity = value;
        }
        else {
          throw new Sk.builtin.TypeError("'" + PROP_OPACITY + "' attribute must be a <type 'float'>.");
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
      default: {
        return materialSetAttr(MESH_LAMBERT_MATERIAL, materialPy, name, valuePy);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(material) {
    material = Sk.ffi.remapToJs(material);
    var args = {};
    return Sk.ffi.stringToPy(MESH_LAMBERT_MATERIAL + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(material) {
    material = Sk.ffi.remapToJs(material);
    var parameters = {};
    parameters[PROP_COLOR] = material[PROP_COLOR];
    var args = [parameters];
    return Sk.ffi.stringToPy(MESH_LAMBERT_MATERIAL + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, MESH_LAMBERT_MATERIAL, []);

mod[MESH_NORMAL_MATERIAL] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, parametersPy) {
    var parameters = Sk.ffi.remapToJs(parametersPy);
    Sk.ffi.referenceToPy(new THREE[MESH_NORMAL_MATERIAL](parameters), MESH_NORMAL_MATERIAL, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    return materialGetAttr(MESH_NORMAL_MATERIAL, selfPy, name);
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    return materialSetAttr(MESH_NORMAL_MATERIAL, selfPy, name, valuePy);
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var args = {};
    return Sk.ffi.stringToPy(MESH_NORMAL_MATERIAL + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var args = [{}];
    return Sk.ffi.stringToPy(MESH_NORMAL_MATERIAL + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, MESH_NORMAL_MATERIAL, []);

mod[MESH_PHONG_MATERIAL] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, parametersPy) {
    var parameters = Sk.ffi.remapToJs(parametersPy);
    Sk.ffi.referenceToPy(new THREE[MESH_PHONG_MATERIAL](parameters), MESH_PHONG_MATERIAL, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    return materialGetAttr(MESH_PHONG_MATERIAL, selfPy, name);
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    return materialSetAttr(MESH_PHONG_MATERIAL, selfPy, name, valuePy);
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var args = {};
    return Sk.ffi.stringToPy(MESH_PHONG_MATERIAL + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var args = [{}];
    return Sk.ffi.stringToPy(MESH_PHONG_MATERIAL + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, MESH_PHONG_MATERIAL, []);
/**
 * ParticleSystem
 */
mod[Sk.three.PARTICLE_SYSTEM] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, geometryPy, materialPy) {
    Sk.ffi.checkMethodArgs(Sk.three.PARTICLE_SYSTEM, arguments, 0, 2);
    Sk.ffi.checkArgType(PROP_GEOMETRY, GEOMETRY, Sk.ffi.isInstance(geometryPy), geometryPy); // TODO: GEOMETRIES
    Sk.ffi.checkArgType(PROP_MATERIAL, Sk.three.MATERIAL, Sk.ffi.isInstance(materialPy), materialPy); // TODO: MATERIALS
    Sk.ffi.referenceToPy(new THREE.ParticleSystem(Sk.ffi.remapToJs(geometryPy), Sk.ffi.remapToJs(materialPy)), Sk.three.PARTICLE_SYSTEM, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    switch(name) {
      default: {
        return Sk.three.object3DGetAttr(Sk.three.PARTICLE_SYSTEM, selfPy, name);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    switch(name) {
      default: {
        return Sk.three.object3DSetAttr(Sk.three.PARTICLE_SYSTEM, selfPy, name, valuePy);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var names  = [];
    var argsPy = names.map(function(name) {return Sk.ffi.gattr(selfPy, name);});
    var args = argsPy.map(function(valuePy) {return Sk.ffi.remapToJs(Sk.ffh.str(valuePy));});
    return Sk.ffi.stringToPy(Sk.three.PARTICLE_SYSTEM + LPAREN + args.join(COMMA + SPACE) + RPAREN);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var names  = [];
    var argsPy = names.map(function(name) {return Sk.ffi.gattr(selfPy, name);});
    var args = argsPy.map(function(valuePy) {return Sk.ffi.remapToJs(Sk.ffh.repr(valuePy));});
    return Sk.ffi.stringToPy(Sk.three.PARTICLE_SYSTEM + LPAREN + args.join(COMMA + SPACE) + RPAREN);
  });
}, Sk.three.PARTICLE_SYSTEM, []);
/**
 * ParticleSystemMaterial
 */
mod[Sk.three.PARTICLE_SYSTEM_MATERIAL] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, parametersPy) {
    Sk.ffi.checkMethodArgs(Sk.three.PARTICLE_SYSTEM_MATERIAL, arguments, 0, 1);
    if (isDefined(parametersPy) && !isNull(parametersPy) && Sk.ffi.isInstance(parametersPy, Sk.three.PARTICLE_SYSTEM_MATERIAL)) {
      Sk.ffi.referenceToPy(Sk.ffi.remapToJs(parametersPy), Sk.three.PARTICLE_SYSTEM_MATERIAL, undefined, selfPy);
    }
    else {
      var parameters = Sk.ffi.remapToJs(parametersPy);
      Sk.ffi.referenceToPy(new THREE[Sk.three.PARTICLE_SYSTEM_MATERIAL](parameters), Sk.three.PARTICLE_SYSTEM_MATERIAL, undefined, selfPy);
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    /**
     * @const
     * @type {THREE.ParticleSystemMaterial}
     */
    var material = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_COLOR: {
        return colorToColorPy(material.color);
      }
      case PROP_SIZE: {
        return Sk.ffi.numberToFloatPy(material.size);
      }
      case PROP_SIZE_ATTENUATION: {
        return Sk.ffi.booleanToPy(material.sizeAttenuation);
      }
      case PROP_VERTEX_COLORS: {
        return Sk.ffi.booleanToPy(material.vertexColors);
      }
      case PROP_FOG: {
        return Sk.ffi.booleanToPy(material.fog);
      }
      default: {
        return materialGetAttr(Sk.three.PARTICLE_SYSTEM_MATERIAL, selfPy, name);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    /**
     * @const
     * @type {THREE.ParticleSystemMaterial}
     */
    var material = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_COLOR: {
        Sk.ffi.checkArgType(name, COLOR, Sk.ffi.isInstance(valuePy, COLOR), valuePy);
        material.color = Sk.ffi.remapToJs(valuePy);
      }
      break;
      case PROP_SIZE: {
        Sk.ffi.checkArgType(name, Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(valuePy), valuePy);
        material.size = Sk.ffi.remapToJs(valuePy);
      }
      break;
      case PROP_SIZE_ATTENUATION: {
        Sk.ffi.checkArgType(name, Sk.ffi.PyType.BOOL, Sk.ffi.isBool(valuePy), valuePy);
        material.sizeAttenuation = Sk.ffi.remapToJs(valuePy);
      }
      break;
      case PROP_VERTEX_COLORS: {
        Sk.ffi.checkArgType(name, Sk.ffi.PyType.BOOL, Sk.ffi.isBool(valuePy), valuePy);
        material.vertexColors = Sk.ffi.remapToJs(valuePy);
      }
      break;
      case PROP_FOG: {
        Sk.ffi.checkArgType(name, Sk.ffi.PyType.BOOL, Sk.ffi.isBool(valuePy), valuePy);
        material.fog = Sk.ffi.remapToJs(valuePy);
      }
      break;
      default: {
        return materialSetAttr(Sk.three.PARTICLE_SYSTEM_MATERIAL, selfPy, name, valuePy);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var names = [PROP_COLOR, PROP_SIZE, PROP_SIZE_ATTENUATION, PROP_VERTEX_COLORS, PROP_FOG];
    var args = names.map(function(name) {return [name, Sk.ffi.remapToJs(Sk.ffh.str(Sk.ffi.gattr(selfPy, name)))].join(EQUAL);});
    return Sk.ffi.stringToPy(Sk.three.PARTICLE_SYSTEM_MATERIAL + LPAREN + args.join(COMMA + SPACE) + RPAREN);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var names = [PROP_COLOR, PROP_SIZE, PROP_SIZE_ATTENUATION, PROP_VERTEX_COLORS, PROP_FOG];
    var argsPy = names.map(function(name) {return Sk.ffi.gattr(selfPy, name);});
    var args = argsPy.map(function(valuePy) {return Sk.ffi.remapToJs(Sk.ffh.repr(valuePy));});
    return Sk.ffi.stringToPy(Sk.three.PARTICLE_SYSTEM_MATERIAL + LPAREN + args.join(COMMA + SPACE) + RPAREN);
  });
}, Sk.three.PARTICLE_SYSTEM_MATERIAL, []);
/**
 * Matrix3
 */
mod[Sk.three.MATRIX_3] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, n11Py, n12Py, n13Py, n21Py, n22Py, n23Py, n31Py, n32Py, n33Py) {
    Sk.ffi.checkMethodArgs(Sk.three.MATRIX_3, arguments, 0, 9);
    if (isDefined(n11Py)) {
      if (Sk.ffi.isInstance(n11Py, Sk.three.MATRIX_3)) {
        Sk.ffi.referenceToPy(Sk.ffi.remapToJs(n11Py), Sk.three.MATRIX_3, undefined, selfPy);
      }
      else {
        Sk.ffi.checkMethodArgs(Sk.three.MATRIX_3, arguments, 9, 9);
        Sk.ffi.checkArgType("n11", Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(n11Py), n11Py);
        Sk.ffi.checkArgType("n12", Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(n12Py), n12Py);
        Sk.ffi.checkArgType("n13", Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(n13Py), n13Py);
        Sk.ffi.checkArgType("n21", Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(n21Py), n21Py);
        Sk.ffi.checkArgType("n22", Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(n22Py), n22Py);
        Sk.ffi.checkArgType("n23", Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(n23Py), n23Py);
        Sk.ffi.checkArgType("n31", Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(n31Py), n31Py);
        Sk.ffi.checkArgType("n32", Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(n32Py), n32Py);
        Sk.ffi.checkArgType("n33", Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(n33Py), n33Py);
        var n11 = Sk.ffi.remapToJs(n11Py);
        var n12 = Sk.ffi.remapToJs(n12Py);
        var n13 = Sk.ffi.remapToJs(n13Py);
        var n21 = Sk.ffi.remapToJs(n21Py);
        var n22 = Sk.ffi.remapToJs(n22Py);
        var n23 = Sk.ffi.remapToJs(n23Py);
        var n31 = Sk.ffi.remapToJs(n31Py);
        var n32 = Sk.ffi.remapToJs(n32Py);
        var n33 = Sk.ffi.remapToJs(n33Py);
        Sk.ffi.referenceToPy(new THREE.Matrix3(n11, n12, n13, n21, n22, n23, n31, n32, n33), Sk.three.MATRIX_3, undefined, selfPy);
      }
    }
    else {
      Sk.ffi.referenceToPy(new THREE.Matrix3(), Sk.three.MATRIX_3, undefined, selfPy);
    }
  });
  $loc.__mul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    switch(Sk.ffi.getType(otherPy)) {
      case Sk.ffi.PyType.INSTANCE: {
        if (Sk.ffi.isInstance(otherPy, Sk.three.MATRIX_3)) {
          var lhs = Sk.ffi.remapToJs(selfPy).elements;
          var a11 = lhs[0];
          var a12 = lhs[3];
          var a13 = lhs[6];
          var a21 = lhs[1];
          var a22 = lhs[4];
          var a23 = lhs[7];
          var a31 = lhs[2];
          var a32 = lhs[5];
          var a33 = lhs[8];
          var rhs = Sk.ffi.remapToJs(otherPy).elements;
          var b11 = rhs[0];
          var b12 = rhs[3];
          var b13 = rhs[6];
          var b21 = rhs[1];
          var b22 = rhs[4];
          var b23 = rhs[7];
          var b31 = rhs[2];
          var b32 = rhs[5];
          var b33 = rhs[8];
          var c11 = a11 * b11 + a12 * b21 + a13 * b31;
          var c12 = a11 * b12 + a12 * b22 + a13 * b32;
          var c13 = a11 * b13 + a12 * b23 + a13 * b33;
          var c21 = a21 * b11 + a22 * b21 + a23 * b31;
          var c22 = a21 * b12 + a22 * b22 + a23 * b32;
          var c23 = a21 * b13 + a22 * b23 + a23 * b33;
          var c31 = a31 * b11 + a32 * b21 + a33 * b31;
          var c32 = a31 * b12 + a32 * b22 + a33 * b32;
          var c33 = a31 * b13 + a32 * b23 + a33 * b33;
          var matrix = new THREE.Matrix3(c11, c12, c13, c21, c22, c23, c31, c32, c33);
          return Sk.ffi.callsim(mod[Sk.three.MATRIX_3], Sk.ffi.referenceToPy(matrix, Sk.three.MATRIX_3));
        }
        else {
          throw Sk.ffi.err.operand(ARG_OTHER).toOperation(OP_MUL).mustHaveType([Sk.ffi.PyType.FLOAT, Sk.three.MATRIX_3]);
        }
      }
      case Sk.ffi.PyType.FLOAT: {
        var lhs = Sk.ffi.remapToJs(selfPy).elements;
        var n11 = lhs[0];
        var n12 = lhs[3];
        var n13 = lhs[6];
        var n21 = lhs[1];
        var n22 = lhs[4];
        var n23 = lhs[7];
        var n31 = lhs[2];
        var n32 = lhs[5];
        var n33 = lhs[8];
        var rhs = Sk.ffi.remapToJs(otherPy);
        var matrix = new THREE.Matrix3(n11 * rhs, n12 * rhs, n13 * rhs, n21 * rhs, n22 * rhs, n23 * rhs, n31 * rhs, n32 * rhs, n33 * rhs);
        return Sk.ffi.callsim(mod[Sk.three.MATRIX_3], Sk.ffi.referenceToPy(matrix, Sk.three.MATRIX_3));
      }
      default: {
        throw Sk.ffi.err.operand(ARG_OTHER).toOperation(OP_MUL).mustHaveType([Sk.ffi.PyType.FLOAT, Sk.three.MATRIX_3]);
      }
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    /**
     * @const
     * @type {THREE.Matrix3}
     */
    var matrix = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case METHOD_CLONE: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 0, 0);
          return Sk.ffi.callsim(mod[Sk.three.MATRIX_3], Sk.ffi.referenceToPy(matrix.clone(), Sk.three.MATRIX_3));
        });
      }
      case METHOD_COPY: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, mPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
          Sk.ffi.checkArgType(ARG_MATRIX, Sk.three.MATRIX_3, Sk.ffi.isInstance(mPy, Sk.three.MATRIX_3), mPy);
          matrix.copy(Sk.ffi.remapToJs(mPy));
          return selfPy;
        });
      }
      case METHOD_DETERMINANT: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 0, 0);
          return Sk.ffi.numberToFloatPy(matrix.determinant());
        });
      }
      case METHOD_GET_NORMAL_MATRIX: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, mPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
          Sk.ffi.checkArgType("m", Sk.three.MATRIX_4, Sk.ffi.isInstance(mPy, Sk.three.MATRIX_4), mPy);
          matrix.getNormalMatrix(Sk.ffi.remapToJs(mPy));
          return selfPy;
        });
      }
      case METHOD_IDENTITY: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 0, 0);
          matrix.identity();
          return selfPy;
        });
      }
      case METHOD_SET: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, n11Py, n12Py, n13Py, n21Py, n22Py, n23Py, n31Py, n32Py, n33Py) {
          Sk.ffi.checkMethodArgs(name, arguments, 9, 9);
          Sk.ffi.checkArgType("n11", Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(n11Py), n11Py);
          Sk.ffi.checkArgType("n12", Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(n12Py), n12Py);
          Sk.ffi.checkArgType("n13", Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(n13Py), n13Py);
          Sk.ffi.checkArgType("n21", Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(n21Py), n21Py);
          Sk.ffi.checkArgType("n22", Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(n22Py), n22Py);
          Sk.ffi.checkArgType("n23", Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(n23Py), n23Py);
          Sk.ffi.checkArgType("n31", Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(n31Py), n31Py);
          Sk.ffi.checkArgType("n32", Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(n32Py), n32Py);
          Sk.ffi.checkArgType("n33", Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(n33Py), n33Py);
          var n11 = Sk.ffi.remapToJs(n11Py);
          var n12 = Sk.ffi.remapToJs(n12Py);
          var n13 = Sk.ffi.remapToJs(n13Py);
          var n21 = Sk.ffi.remapToJs(n21Py);
          var n22 = Sk.ffi.remapToJs(n22Py);
          var n23 = Sk.ffi.remapToJs(n23Py);
          var n31 = Sk.ffi.remapToJs(n31Py);
          var n32 = Sk.ffi.remapToJs(n32Py);
          var n33 = Sk.ffi.remapToJs(n33Py);
          matrix.set(n11, n12, n13, n21, n22, n23, n31, n32, n33);
          return selfPy;
        });
      }
      case METHOD_TRANSPOSE: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 0, 0);
          matrix.transpose();
          return selfPy;
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(Sk.three.MATRIX_3);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    switch(name) {
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(Sk.three.MATRIX_3);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    /**
     * @const
     * @type {THREE.Matrix3}
     */
    var matrix = Sk.ffi.remapToJs(selfPy);
    var x = matrix.elements;
    var es = [[x[0], x[3], x[6]], [x[1], x[4], x[7]], [x[2], x[5], x[8]]].map(function(row) {
      return row.map(function(x) {
        return Sk.ffi.remapToJs(Sk.ffh.str(Sk.ffi.numberToFloatPy(x)));
      }).join(SPACE);
    }).join(NEWLINE);
    return Sk.ffi.stringToPy(es);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    /**
     * @const
     * @type {THREE.Matrix3}
     */
    var matrix = Sk.ffi.remapToJs(selfPy);
    var x = matrix.elements;
    var args = [x[0], x[3], x[6], x[1], x[4], x[7], x[2], x[5], x[8]].map(function(x) {
      return Sk.ffi.remapToJs(Sk.ffh.repr(Sk.ffi.numberToFloatPy(x)));
    }).join(", ");
    return Sk.ffi.stringToPy(Sk.three.MATRIX_3 + LPAREN + args + RPAREN);
  });
}, Sk.three.MATRIX_3, []);
/**
 * Matrix4
 */
mod[Sk.three.MATRIX_4] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, n11Py) {
    Sk.ffi.checkMethodArgs(Sk.three.MATRIX_4, arguments, 0, 1);
    if (isDefined(n11Py) && Sk.ffi.isInstance(n11Py, Sk.three.MATRIX_4)) {
      Sk.ffi.referenceToPy(Sk.ffi.remapToJs(n11Py), Sk.three.MATRIX_4, undefined, selfPy);
    }
    else {
      Sk.ffi.referenceToPy(new THREE.Matrix4(), Sk.three.MATRIX_4, undefined, selfPy);
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var matrix = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case METHOD_MAKE_ROTATION_X: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, thetaPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
          Sk.ffi.checkArgType(ARG_THETA, Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(thetaPy), thetaPy);
          var theta = Sk.ffi.remapToJs(thetaPy);
          return Sk.ffi.callsim(mod[Sk.three.MATRIX_4], Sk.ffi.referenceToPy(matrix.makeRotationX(theta), Sk.three.MATRIX_4));
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(Sk.three.MATRIX_4);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    switch(name) {
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(Sk.three.MATRIX_4);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(Sk.three.MATRIX_4 + LPAREN + RPAREN);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(Sk.three.MATRIX_4 + LPAREN + RPAREN);
  });
}, Sk.three.MATRIX_4, []);
/**
 * Face3
 */
mod[Sk.three.FACE_3] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, aPy, bPy, cPy, normalPy, colorPy, materialIndexPy) {
    if (isDefined(aPy) && Sk.ffi.isInstance(aPy, Sk.three.FACE_3)) {
      Sk.ffi.checkMethodArgs(Sk.three.FACE_3, arguments, 1, 1);
      var face = Sk.ffi.remapToJs(aPy);
      Sk.ffi.checkArgType(PROP_A, "!?", isDefined(face), aPy);
      Sk.ffi.checkArgType(PROP_A, "?!", face instanceof THREE.Face3, aPy);
      Sk.ffi.referenceToPy(face, Sk.three.FACE_3, undefined, selfPy);
    }
    else {
      Sk.ffi.checkMethodArgs(Sk.three.FACE_3, arguments, 3, 6);
      Sk.ffi.checkArgType(PROP_A, INT, Sk.ffi.isInt(aPy), aPy);
      Sk.ffi.checkArgType(PROP_B, INT, Sk.ffi.isInt(bPy), bPy);
      Sk.ffi.checkArgType(PROP_C, INT, Sk.ffi.isInt(cPy), cPy);
      if (isDefined(normalPy)) {
        Sk.ffi.checkArgType(PROP_NORMAL, EUCLIDEAN_3, Sk.ffi.isInstance(normalPy, EUCLIDEAN_3), normalPy);
      }
      var a = Sk.ffi.remapToJs(aPy);
      var b = Sk.ffi.remapToJs(bPy);
      var c = Sk.ffi.remapToJs(cPy);
      var normal = remapToVector3(PROP_NORMAL, normalPy);
      var color = Sk.ffi.remapToJs(colorPy);
      var materialIndex = Sk.ffi.remapToJs(materialIndexPy);
      var face = new THREE.Face3(a, b, c, normal, color, materialIndex);
      Sk.ffi.referenceToPy(face, Sk.three.FACE_3, undefined, selfPy);
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    /**
     * @const
     * @type {THREE.Face3}
     */
    var face = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_A: {
        return Sk.ffi.numberToIntPy(face.a);
      }
      case PROP_B: {
        return Sk.ffi.numberToIntPy(face.b);
      }
      case PROP_C: {
        return Sk.ffi.numberToIntPy(face.c);
      }
      case PROP_COLOR: {
        return Sk.ffi.callsim(mod[COLOR], Sk.ffi.referenceToPy(face.color, COLOR));
      }
      case PROP_CENTROID: {
        return vectorToEuclidean3Py(face.centroid);
      }
      case PROP_NORMAL: {
        return vectorToEuclidean3Py(face.normal);
      }
      case PROP_VERTEX_NORMALS: {
        return Sk.ffi.listPy(face.vertexNormals.map(function(vectorJs) {return vectorToEuclidean3Py(vectorJs);}));
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(Sk.three.FACE_3);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    /**
     * @const
     * @type {THREE.Face3}
     */
    var face = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(Sk.three.FACE_3);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var names  = [PROP_A, PROP_B, PROP_C, PROP_NORMAL];
    var argsPy = names.map(function(name) {return Sk.ffi.gattr(selfPy, name);});
    var args = argsPy.map(function(valuePy) {return Sk.ffi.remapToJs(Sk.ffh.str(valuePy));});
    return Sk.ffi.stringToPy(Sk.three.FACE_3 + LPAREN + args.join(COMMA + SPACE) + RPAREN);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var names  = [PROP_A, PROP_B, PROP_C, PROP_NORMAL];
    var argsPy = names.map(function(name) {return Sk.ffi.gattr(selfPy, name);});
    var args = argsPy.map(function(valuePy) {return Sk.ffi.remapToJs(Sk.ffh.repr(valuePy));});
    return Sk.ffi.stringToPy(Sk.three.FACE_3 + LPAREN + args.join(COMMA + SPACE) + RPAREN);
  });
}, Sk.three.FACE_3, []);
/**
 * Intersection
 */
mod[INTERSECTION] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, distancePy, pointPy, facePy) {
    switch(Sk.ffi.checkMethodArgs(INTERSECTION, arguments, 1, 3)) {
      case 1: {
        Sk.ffi.checkMethodArgs(INTERSECTION, arguments, 1, 1);
        Sk.ffi.referenceToPy(Sk.ffi.remapToJs(distancePy), INTERSECTION, undefined, selfPy);
      }
      break;
      default: {
        Sk.ffi.checkMethodArgs(INTERSECTION, arguments, 3, 3);
        Sk.ffi.checkArgType(PROP_DISTANCE, Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(distancePy), distancePy);
        Sk.ffi.checkArgType(PROP_POINT, EUCLIDEAN_3, Sk.ffi.isInstance(pointPy, EUCLIDEAN_3), pointPy);
        Sk.ffi.checkArgType(PROP_FACE, Sk.three.FACE_3, Sk.ffi.isInstance(facePy, Sk.three.FACE_3), facePy);
        var intersection = {};
        intersection[PROP_DISTANCE] = Sk.ffi.remapToJs(distancePy);
        intersection[PROP_POINT] = remapToVector3(PROP_POINT, pointPy);
        intersection[PROP_FACE] = Sk.ffi.remapToJs(facePy);
        Sk.ffi.referenceToPy(intersection, INTERSECTION, undefined, selfPy);
      }
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var intersection = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_DISTANCE: {
        return Sk.ffi.numberToFloatPy(intersection[PROP_DISTANCE]);
      }
      case PROP_POINT: {
        return vectorToEuclidean3Py(intersection[PROP_POINT]);
      }
      case PROP_FACE: {
        var face = intersection[PROP_FACE];
        if (isDefined(face) && !isNull(face)) {
          return Sk.ffi.callsim(mod[Sk.three.FACE_3], Sk.ffi.referenceToPy(intersection[PROP_FACE], Sk.three.FACE_3));
        }
        else {
          return Sk.ffi.none.None;
        }
      }
      case PROP_OBJECT: {
        return Sk.ffi.callsim(mod[Sk.three.OBJECT_3D], Sk.ffi.referenceToPy(intersection[PROP_OBJECT], Sk.three.OBJECT_3D));
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(INTERSECTION);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    var intersection = Sk.ffi.remapToJs(selfPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(INTERSECTION);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var names  = [PROP_DISTANCE, PROP_POINT, PROP_FACE];
    var argsPy = names.map(function(name) {return Sk.ffi.gattr(selfPy, name);});
    var args = argsPy.map(function(valuePy) {return Sk.ffi.remapToJs(Sk.ffh.str(valuePy));});
    return Sk.ffi.stringToPy(INTERSECTION + LPAREN + args.join(COMMA + SPACE) + RPAREN);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var names  = [PROP_DISTANCE, PROP_POINT, PROP_FACE];
    var argsPy = names.map(function(name) {return Sk.ffi.gattr(selfPy, name);});
    var args = argsPy.map(function(valuePy) {return Sk.ffi.remapToJs(Sk.ffh.repr(valuePy));});
    return Sk.ffi.stringToPy(INTERSECTION + LPAREN + args.join(COMMA + SPACE) + RPAREN);
  });
}, INTERSECTION, []);
/**
 * Plane
 */
mod[PLANE] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, normalPy, offsetPy) {
    Sk.ffi.checkMethodArgs(PLANE, arguments, 0, 2);
    var normal = remapToVector3(PROP_NORMAL, normalPy);
    if (isDefined(offsetPy)) {
      Sk.ffi.checkArgType(PROP_OFFSET, Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(offsetPy), offsetPy);
    }
    var offset = Sk.ffi.remapToJs(offsetPy);
    Sk.ffi.referenceToPy(new THREE[PLANE](normal, offset), PLANE, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var plane = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_NORMAL: {
        return vectorToEuclidean3Py(plane[PROP_NORMAL]);
      }
      case PROP_OFFSET:
      case PROP_CONSTANT: {
        return Sk.ffi.numberToFloatPy(plane[PROP_CONSTANT]);
      }
      case METHOD_COPY: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, planePy) {
          Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_PLANE, PLANE, Sk.ffi.isInstance(planePy, PLANE), planePy);
          plane[METHOD_COPY](Sk.ffi.remapToJs(planePy));
          return selfPy;
        });
      }
      case METHOD_DISTANCE_TO_POINT: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, pointPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
          return Sk.ffi.numberToFloatPy(plane[METHOD_DISTANCE_TO_POINT](remapToVector3(PROP_POINT, pointPy)));
        });
      }
      case METHOD_DISTANCE_TO_SPHERE: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, spherePy) {
          Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_SPHERE, SPHERE, Sk.ffi.isInstance(spherePy, SPHERE), spherePy);
          return Sk.ffi.numberToFloatPy(plane[METHOD_DISTANCE_TO_SPHERE](Sk.ffi.remapToJs(spherePy)));
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(PLANE);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    var plane = Sk.ffi.remapToJs(selfPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(PLANE);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var plane = Sk.ffi.remapToJs(selfPy);
    var names  = [PROP_NORMAL, PROP_OFFSET];
    var argsPy = [vectorToEuclidean3Py(plane[PROP_NORMAL]), Sk.ffi.numberToFloatPy(plane[PROP_CONSTANT])];
    var args = argsPy.map(function(valuePy) {return Sk.ffi.remapToJs(Sk.ffh.str(valuePy));});
    return Sk.ffi.stringToPy(PLANE + LPAREN + args.join(COMMA + SPACE) + RPAREN);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var plane = Sk.ffi.remapToJs(selfPy);
    var argsPy = [vectorToEuclidean3Py(plane[PROP_NORMAL]), Sk.ffi.numberToFloatPy(plane[PROP_CONSTANT])];
    var args = argsPy.map(function(valuePy) {return Sk.ffi.remapToJs(Sk.ffh.repr(valuePy));});
    return Sk.ffi.stringToPy(PLANE + LPAREN + args.join(COMMA + SPACE) + RPAREN);
  });
}, PLANE, []);
/**
 * Projector
 */
mod[PROJECTOR] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(PROJECTOR, arguments, 0, 0);
    Sk.ffi.referenceToPy(new THREE[PROJECTOR](), PROJECTOR, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var projector = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case METHOD_PICKING_RAY: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, vectorPy, cameraPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 2, 2);
          var raycaster = projector[METHOD_PICKING_RAY](remapToVector3(PROP_VECTOR, vectorPy), Sk.ffi.remapToJs(cameraPy));
          return Sk.ffi.callsim(mod[RAYCASTER], Sk.ffi.referenceToPy(raycaster, RAYCASTER));
        });
      }
      case METHOD_PROJECT_VECTOR: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, vectorPy, cameraPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 2, 2);
          return vectorToEuclidean3Py(projector[METHOD_PROJECT_VECTOR](remapToVector3(PROP_VECTOR, vectorPy), Sk.ffi.remapToJs(cameraPy)));
        });
      }
      case METHOD_UNPROJECT_VECTOR: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, vectorPy, cameraPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 2, 2);
          return vectorToEuclidean3Py(projector[METHOD_UNPROJECT_VECTOR](remapToVector3(PROP_VECTOR, vectorPy), Sk.ffi.remapToJs(cameraPy)));
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(PROJECTOR);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    var raycaster = Sk.ffi.remapToJs(selfPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(PROJECTOR);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(PROJECTOR);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(PROJECTOR + LPAREN + RPAREN);
  });
}, PROJECTOR, []);
/**
 * Ray
 */
mod[RAY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, originPy, directionPy) {
    Sk.ffi.checkMethodArgs(RAY, arguments, 1, 2);
    if (Sk.ffi.isInstance(originPy, RAY)) {
      Sk.ffi.referenceToPy(Sk.ffi.remapToJs(originPy), RAY, undefined, selfPy);
    }
    else {
      Sk.ffi.checkMethodArgs(RAY, arguments, 2, 2);
      var origin = remapToVector3(PROP_ORIGIN, originPy);
      var direction = remapToVector3(PROP_DIRECTION, directionPy);
      Sk.ffi.referenceToPy(new THREE[RAY](origin, direction), RAY, undefined, selfPy);
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var ray = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_ORIGIN:
      case PROP_DIRECTION: {
        return vectorToEuclidean3Py(ray[name]);
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(RAY);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    var ray = Sk.ffi.remapToJs(selfPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(RAY);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var names  = [PROP_ORIGIN, PROP_DIRECTION];
    var argsPy = names.map(function(name) {return Sk.ffi.gattr(selfPy, name);});
    var args = argsPy.map(function(valuePy) {return Sk.ffi.remapToJs(Sk.ffh.str(valuePy));});
    return Sk.ffi.stringToPy(RAY + LPAREN + args.join(COMMA + SPACE) + RPAREN);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var names  = [PROP_ORIGIN, PROP_DIRECTION];
    var argsPy = names.map(function(name) {return Sk.ffi.gattr(selfPy, name);});
    var args = argsPy.map(function(valuePy) {return Sk.ffi.remapToJs(Sk.ffh.repr(valuePy));});
    return Sk.ffi.stringToPy(RAY + LPAREN + args.join(COMMA + SPACE) + RPAREN);
  });
}, RAY, []);
/**
 * Raycaster
 */
mod[RAYCASTER] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, originPy, directionPy, nearPy, farPy) {
    Sk.ffi.checkMethodArgs(RAYCASTER, arguments, 0, 4);
    if (isDefined(originPy) && Sk.ffi.isInstance(originPy, RAYCASTER)) {
      Sk.ffi.referenceToPy(Sk.ffi.remapToJs(originPy), RAYCASTER, undefined, selfPy);
    }
    else {
      var origin = remapToVector3(PROP_ORIGIN, originPy);
      var direction = remapToVector3(PROP_DIRECTION, directionPy);
      if (isDefined(nearPy)) {
        Sk.ffi.checkArgType(PROP_NEAR, Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(nearPy), nearPy);
      }
      if (isDefined(farPy)) {
        Sk.ffi.checkArgType(PROP_FAR, Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(farPy), farPy);
      }
      var near = Sk.ffi.remapToJs(nearPy);
      var far = Sk.ffi.remapToJs(farPy);
      Sk.ffi.referenceToPy(new THREE[RAYCASTER](origin, direction, near), RAYCASTER, undefined, selfPy);
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var raycaster = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_RAY: {
        return Sk.ffi.callsim(mod[RAY], Sk.ffi.referenceToPy(raycaster[PROP_RAY], RAY));
      }
      case PROP_NEAR:
      case PROP_FAR: {
        return Sk.ffi.numberToFloatPy(raycaster[name]);
      }
      case METHOD_INTERSECT_OBJECTS: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, objectsPy, recursivePy) {
          Sk.ffi.checkMethodArgs(name, arguments, 1, 2);
          Sk.ffi.checkArgType(PROP_OBJECTS, Sk.ffi.PyType.LIST, Sk.ffi.isList(objectsPy), objectsPy);
          var intersects = raycaster[METHOD_INTERSECT_OBJECTS](Sk.ffi.remapToJs(objectsPy), Sk.ffi.remapToJs(recursivePy));
          return Sk.ffi.listPy(intersects.map(function(x) {return Sk.ffi.callsim(mod[INTERSECTION], Sk.ffi.referenceToPy(x, INTERSECTION));}));
        });
      }
      case METHOD_SET: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, originPy, directionPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 2, 2);
          raycaster[METHOD_SET](remapToVector3(PROP_ORIGIN, originPy), remapToVector3(PROP_DIRECTION, directionPy));
          return selfPy;
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(RAYCASTER);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    var raycaster = Sk.ffi.remapToJs(selfPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(RAYCASTER);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var names  = [PROP_RAY, PROP_NEAR, PROP_FAR];
    var argsPy = names.map(function(name) {return Sk.ffi.gattr(selfPy, name);});
    var args = argsPy.map(function(valuePy) {return Sk.ffi.remapToJs(Sk.ffh.str(valuePy));});
    return Sk.ffi.stringToPy(RAYCASTER + LPAREN + args.join(COMMA + SPACE) + RPAREN);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var names  = [PROP_RAY, PROP_NEAR, PROP_FAR];
    var argsPy = names.map(function(name) {return Sk.ffi.gattr(selfPy, name);});
    var args = argsPy.map(function(valuePy) {return Sk.ffi.remapToJs(Sk.ffh.repr(valuePy));});
    return Sk.ffi.stringToPy(RAYCASTER + LPAREN + args.join(COMMA + SPACE) + RPAREN);
  });
}, RAYCASTER, []);
/**
 * Sphere
 */
mod[SPHERE] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, centerPy, radiusPy) {
    Sk.ffi.checkMethodArgs(SPHERE, arguments, 0, 2);
    var center = remapToVector3(PROP_CENTER, centerPy);
    if (isDefined(radiusPy)) {
      Sk.ffi.checkArgType(PROP_RADIUS, Sk.ffi.PyType.FLOAT, Sk.ffi.isFloat(radiusPy), radiusPy);
    }
    var radius = Sk.ffi.remapToJs(radiusPy);
    Sk.ffi.referenceToPy(new THREE[SPHERE](center, radius), SPHERE, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var sphere = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_CENTER: {
        return vectorToEuclidean3Py(sphere[PROP_CENTER]);
      }
      case PROP_RADIUS: {
        return Sk.ffi.numberToFloatPy(sphere[PROP_RADIUS]);
      }
      case METHOD_COPY: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, spherePy) {
          Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_SPHERE, SPHERE, Sk.ffi.isInstance(spherePy, SPHERE), spherePy);
          sphere[METHOD_COPY](Sk.ffi.remapToJs(spherePy));
          return selfPy;
        });
      }
      case METHOD_CONTAINS_POINT: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, pointPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
          return Sk.ffi.booleanToPy(sphere[METHOD_CONTAINS_POINT](remapToVector3(PROP_POINT, pointPy)));
        });
      }
      case METHOD_DISTANCE_TO_POINT: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, pointPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
          return Sk.ffi.numberToFloatPy(sphere[METHOD_DISTANCE_TO_POINT](remapToVector3(PROP_POINT, pointPy)));
        });
      }
      case METHOD_INTERSECTS_SPHERE: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, spherePy) {
          Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_SPHERE, SPHERE, Sk.ffi.isInstance(spherePy, SPHERE), spherePy);
          return Sk.ffi.booleanToPy(sphere[METHOD_INTERSECTS_SPHERE](Sk.ffi.remapToJs(spherePy)));
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(SPHERE);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    var sphere = Sk.ffi.remapToJs(selfPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(SPHERE);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var sphere = Sk.ffi.remapToJs(selfPy);
    var names  = [PROP_CENTER, PROP_RADIUS];
    var argsPy = [vectorToEuclidean3Py(sphere[PROP_CENTER]), Sk.ffi.numberToFloatPy(sphere[PROP_RADIUS])];
    var args = argsPy.map(function(valuePy) {return Sk.ffi.remapToJs(Sk.ffh.str(valuePy));});
    return Sk.ffi.stringToPy(SPHERE + LPAREN + args.join(COMMA + SPACE) + RPAREN);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var sphere = Sk.ffi.remapToJs(selfPy);
    var argsPy = [vectorToEuclidean3Py(sphere[PROP_CENTER]), Sk.ffi.numberToFloatPy(sphere[PROP_RADIUS])];
    var args = argsPy.map(function(valuePy) {return Sk.ffi.remapToJs(Sk.ffh.repr(valuePy));});
    return Sk.ffi.stringToPy(SPHERE + LPAREN + args.join(COMMA + SPACE) + RPAREN);
  });
}, SPHERE, []);

if (isDefined(THREE)) {
  mod.LineStrip     = Sk.ffi.numberToIntPy(THREE.LineStrip);
  mod.LinePieces    = Sk.ffi.numberToIntPy(THREE.LinePieces);

  mod.FlatShading   = Sk.ffi.numberToIntPy(THREE.FlatShading);
  mod.NoShading     = Sk.ffi.numberToIntPy(THREE.NoShading);
  mod.SmoothShading = Sk.ffi.numberToIntPy(THREE.SmoothShading);

  mod.NoColors      = Sk.ffi.numberToIntPy(THREE.NoColors);
  mod.FaceColors    = Sk.ffi.numberToIntPy(THREE.FaceColors);
  mod.VertexColors  = Sk.ffi.numberToIntPy(THREE.VertexColors);

  mod.FrontSide     = Sk.ffi.numberToIntPy(THREE.FrontSide);
  mod.BackSide      = Sk.ffi.numberToIntPy(THREE.BackSide);
  mod.DoubleSide    = Sk.ffi.numberToIntPy(THREE.DoubleSide);}
};
}).call(this);
