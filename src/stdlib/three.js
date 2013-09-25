(function() {
Sk.stdlib.defineThree = function(mod, THREE, BLADE) {
Sk.ffi.checkFunctionArgs("defineThree", arguments, 3, 3);
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
var FACE_3                     = "Face3";
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
var OBJECT_3D                  = "Object3D";
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
var MESH                       = "Mesh";
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
var ARROW_GEOMETRY             = "ArrowGeometry";
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
var PLANE_GEOMETRY             = "PlaneGeometry";
/**
 * @const
 * @type {string}
 */
var REVOLUTION_GEOMETRY        = "RevolutionGeometry";
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
var VORTEX_GEOMETRY            = "VortexGeometry";
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
var PROP_AXIS                  = "axis";
/**
 * @const
 * @type {string}
 */
var PROP_BOTTOM                = "bottom";
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
var PROP_COLOR                 = "color";
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
var PROP_DISTANCE              = "distance";
/**
* @const
* @type {string}
*/
var PROP_EULER_ORDER           = "eulerOrder";
/**
* @const
* @type {string}
*/
var PROP_FAR                   = "far";
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
var PROP_OPACITY               = "opacity";
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
var PROP_INTENSITY             = "intensity";
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
var ARG_VECTOR                 = "vector";
/**
 * @const
 * @type {string}
 */
var ARG_WIDTH                  = PROP_WIDTH;
/**
 * CylinderGeometry
 *
 * This is a customized version of THREE.CylinderGeometry.
 *
 * @constructor
 * @param {number} radiusTop
 * @param {number} radiusBottom
 * @param {number} height
 * @param {number} radialSegments
 * @param {number} heightSegments
 * @param {boolean} openEnded
 */
Sk.stdlib.CylinderGeometry = function (radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded) {

  THREE['Geometry'].call( this );

  this.radiusTop = radiusTop = radiusTop !== undefined ? radiusTop : 20;
  this.radiusBottom = radiusBottom = radiusBottom !== undefined ? radiusBottom : 20;
  this.height = height = height !== undefined ? height : 100;

  this.radialSegments = radialSegments = radialSegments || 8;
  this.heightSegments = heightSegments = heightSegments || 1;

  this.openEnded = openEnded = openEnded !== undefined ? openEnded : false;

  var heightHalf = height / 2;

  var x, y, vertices = [], uvs = [];

  for ( y = 0; y <= heightSegments; y ++ ) {

    var verticesRow = [];
    var uvsRow = [];

    var v = y / heightSegments;
    var radius = v * ( radiusBottom - radiusTop ) + radiusTop;

    for ( x = 0; x <= radialSegments; x ++ ) {

      var u = x / radialSegments;

      var vertex = new THREE['Vector3']();
      vertex.x = radius * Math.sin( u * Math.PI * 2 );
      vertex.y = - v * height + heightHalf;
      vertex.z = radius * Math.cos( u * Math.PI * 2 );

      this['vertices'].push( vertex );

      verticesRow.push( this['vertices'].length - 1 );
      uvsRow.push( new THREE['Vector2']( u, 1 - v ) );

    }

    vertices.push( verticesRow );
    uvs.push( uvsRow );

  }

  var tanTheta = ( radiusBottom - radiusTop ) / height;
  var na, nb;

  for ( x = 0; x < radialSegments; x ++ ) {

    if ( radiusTop !== 0 ) {

      na = this['vertices'][ vertices[ 0 ][ x ] ].clone();
      nb = this['vertices'][ vertices[ 0 ][ x + 1 ] ].clone();

    } else {

      na = this['vertices'][ vertices[ 1 ][ x ] ].clone();
      nb = this['vertices'][ vertices[ 1 ][ x + 1 ] ].clone();

    }

    na['setY']( Math.sqrt( na.x * na.x + na.z * na.z ) * tanTheta ).normalize();
    nb['setY']( Math.sqrt( nb.x * nb.x + nb.z * nb.z ) * tanTheta ).normalize();

    for ( y = 0; y < heightSegments; y ++ ) {

      var v1 = vertices[ y ][ x ];
      var v2 = vertices[ y + 1 ][ x ];
      var v3 = vertices[ y + 1 ][ x + 1 ];
      var v4 = vertices[ y ][ x + 1 ];

      var n1 = na.clone();
      var n2 = na.clone();
      var n3 = nb.clone();
      var n4 = nb.clone();

      var uv1 = uvs[ y ][ x ].clone();
      var uv2 = uvs[ y + 1 ][ x ].clone();
      var uv3 = uvs[ y + 1 ][ x + 1 ].clone();
      var uv4 = uvs[ y ][ x + 1 ].clone();

      this['faces'].push( new THREE['Face3']( v1, v2, v4, [ n1, n2, n4 ] ) );
      this['faceVertexUvs'][0].push([uv1, uv2, uv4]);

      this['faces'].push( new THREE['Face3']( v2, v3, v4, [ n2, n3, n4 ] ) );
      this['faceVertexUvs'][ 0 ].push( [ uv2, uv3, uv4 ] );

    }

  }

  // top cap

  if ( openEnded === false && radiusTop > 0 ) {

    this['vertices'].push( new THREE['Vector3']( 0, heightHalf, 0 ) );

    for ( x = 0; x < radialSegments; x ++ ) {

      var v1 = vertices[ 0 ][ x ];
      var v2 = vertices[ 0 ][ x + 1 ];
      var v3 = this['vertices'].length - 1;

      var n1 = new THREE['Vector3']( 0, 1, 0 );
      var n2 = new THREE['Vector3']( 0, 1, 0 );
      var n3 = new THREE['Vector3']( 0, 1, 0 );

      var uv1 = uvs[ 0 ][ x ].clone();
      var uv2 = uvs[ 0 ][ x + 1 ].clone();
      var uv3 = new THREE['Vector2']( uv2.u, 0 );

      this['faces'].push( new THREE['Face3']( v1, v2, v3, [ n1, n2, n3 ] ) );
      this['faceVertexUvs'][ 0 ].push( [ uv1, uv2, uv3 ] );

    }

  }

  // bottom cap

  if ( openEnded === false && radiusBottom > 0 ) {

    this['vertices'].push( new THREE['Vector3']( 0, - heightHalf, 0 ) );

    for ( x = 0; x < radialSegments; x ++ ) {

      var v1 = vertices[ y ][ x + 1 ];
      var v2 = vertices[ y ][ x ];
      var v3 = this['vertices'].length - 1;

      var n1 = new THREE['Vector3']( 0, - 1, 0 );
      var n2 = new THREE['Vector3']( 0, - 1, 0 );
      var n3 = new THREE['Vector3']( 0, - 1, 0 );

      var uv1 = uvs[ y ][ x + 1 ].clone();
      var uv2 = uvs[ y ][ x ].clone();
      var uv3 = new THREE['Vector2']( uv2.u, 1 );

      this['faces'].push( new THREE['Face3']( v1, v2, v3, [ n1, n2, n3 ] ) );
      this['faceVertexUvs'][0].push([uv1, uv2, uv3]);
    }
  }
  this['computeCentroids']();
  this['computeFaceNormals']();
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

  THREE['Geometry'].call( this );

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

  var normal = new THREE['Vector3'](0, 0, 1);

  for ( iz = 0; iz < gridZ1; iz ++ ) {
    for ( ix = 0; ix < gridX1; ix ++ ) {
      var x = ix * segment_width - width_half;
      var y = iz * segment_height - height_half;
      this['vertices'].push(new THREE['Vector3'](x, - y, 0));
    }
  }

  for ( iz = 0; iz < gridZ; iz ++ ) {
    for ( ix = 0; ix < gridX; ix ++ ) {
      var a = ix + gridX1 * iz;
      var b = ix + gridX1 * ( iz + 1 );
      var c = ( ix + 1 ) + gridX1 * ( iz + 1 );
      var d = ( ix + 1 ) + gridX1 * iz;

      var uva = new THREE['Vector2']( ix / gridX, 1 - iz / gridZ );
      var uvb = new THREE['Vector2']( ix / gridX, 1 - ( iz + 1 ) / gridZ );
      var uvc = new THREE['Vector2']( ( ix + 1 ) / gridX, 1 - ( iz + 1 ) / gridZ );
      var uvd = new THREE['Vector2']( ( ix + 1 ) / gridX, 1 - iz / gridZ );

      var face = new THREE['Face3'](a, b, d);
      face['normal'].copy( normal );
      face['vertexNormals'].push(normal.clone(), normal.clone(), normal.clone());

      this['faces'].push(face);
      this['faceVertexUvs'][0].push([uva, uvb, uvd]);

      face = new THREE['Face3'](b, c, d);
      face['normal'].copy(normal);
      face['vertexNormals'].push(normal.clone(), normal.clone(), normal.clone());

      this['faces'].push(face);
      this['faceVertexUvs'][0].push([uvb.clone(), uvc, uvd.clone()]);
    }
  }
  this['computeCentroids']();
};
Sk.stdlib.PlaneGeometry.prototype = Object.create(THREE['Geometry'].prototype);
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
 * @param {Object=} attitude
 */
Sk.stdlib.RevolutionGeometry = function (points, generator, segments, phiStart, phiLength, attitude) {

  THREE['Geometry'].call( this );

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
    var rotor = new THREE[QUATERNION](generator.x * sinHA, generator.y * sinHA, generator.z * sinHA, cosHA);

    for (var j = 0, jl = points.length; j < jl; j++) {

      var pt = points[ j ];

      var vertex = new THREE[VECTOR_3](pt.x, pt.y, pt.z);

      // The generator tells us how to rotate the points.
      vertex['applyQuaternion'](rotor);

      // The attitude tells us where we want the symmetry axis to be.
      if (attitude) {
        vertex['applyQuaternion'](attitude);
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

      this['faces'].push(new THREE[FACE_3](d, b, a));
      this['faceVertexUvs'][ 0 ].push([
        new THREE[VECTOR_2](u0, v0),
        new THREE[VECTOR_2](u1, v0),
        new THREE[VECTOR_2](u0, v1)
      ]);

      this['faces'].push(new THREE[FACE_3](d, c, b));
      this['faceVertexUvs'][ 0 ].push([
        new THREE[VECTOR_2](u1, v0),
        new THREE[VECTOR_2](u1, v1), 
        new THREE[VECTOR_2](u0, v1)
      ]);
    }
  }

  this['computeCentroids']();
  this['computeFaceNormals']();
  this['computeVertexNormals']();
};
Sk.stdlib.RevolutionGeometry.prototype = Object.create(THREE['Geometry'].prototype);

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

function isEuclidean3Py(valuePy) {return Sk.ffi.isClass(valuePy, EUCLIDEAN_3);}
function isQuaternionPy(valuePy) {return Sk.ffi.isClass(valuePy, QUATERNION);}
function isVector3Py(valuePy) {return Sk.ffi.isClass(valuePy, VECTOR_3);}
function isGeometryPy(valuePy) {
  return Sk.ffi.isClass(valuePy) && Sk.ffi.typeName(valuePy) === GEOMETRY; // TODO: GEOMETRIES
}

function quaternionToEuclidean3Py(quaternion) {
  var euclidean = new THREE[EUCLIDEAN_3](new THREE[VECTOR_3](0, 0, 0), quaternion, 0);
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
  Sk.ffi.checkArgType("target", className, Sk.ffi.isClass(targetPy, className), targetPy);
  aliasName = aliasName || name;
  Sk.ffi.checkArgType(aliasName, EUCLIDEAN_3, isEuclidean3Py(valuePy), valuePy);
  var quaternionPy = Sk.ffi.gattr(valuePy, PROP_QUATERNION);
  Sk.ffi.checkArgType(aliasName, QUATERNION, isQuaternionPy(quaternionPy), quaternionPy);
  Sk.ffi.remapToJs(targetPy)[name] = Sk.ffi.remapToJs(quaternionPy);
}

function vectorToEuclidean3Py(vector) {
  var euclidean = new THREE[EUCLIDEAN_3](vector, new THREE[QUATERNION](0,0,0,0), 0);
  return Sk.ffi.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(euclidean, EUCLIDEAN_3));
}
/**
 * @param {Object} obj
 * @param {string} name
 * @param {Object} valuePy
 * @param {string=} aliasName
 */
function setVectorProperty(obj, name, valuePy, aliasName) {
  aliasName = aliasName || name;
  Sk.ffi.checkArgType(aliasName, EUCLIDEAN_3, isEuclidean3Py(valuePy), valuePy);
  var vectorPy = Sk.ffi.gattr(valuePy, PROP_VECTOR);
  Sk.ffi.checkArgType(aliasName, VECTOR_3, isVector3Py(vectorPy), vectorPy);
  obj[name] = Sk.ffi.remapToJs(vectorPy);
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

function verticesPy(vertices) {
  return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
      Sk.ffi.referenceToPy(vertices, PROP_VERTICES, undefined, selfPy);
    });
    $loc.__getattr__ = Sk.ffi.functionPy(function(verticesPy, name) {
      var METHOD_APPEND = "append";
      switch(name) {
        case METHOD_APPEND: {
          return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
              self.tp$name = METHOD_APPEND;
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self, vectorPy) {
              vertices.push(Sk.ffi.remapToJs(vectorPy));
            });
            $loc.__str__ = Sk.ffi.functionPy(function(self) {
              return Sk.ffi.stringToPy(METHOD_APPEND)
            });
            $loc.__repr__ = Sk.ffi.functionPy(function(self) {
              return Sk.ffi.stringToPy(METHOD_APPEND)
            });
          }, METHOD_APPEND, []));
        }
      }
    });
    $loc.__getitem__ = Sk.ffi.functionPy(function(verticesPy, indexPy) {
      var index = Sk.ffi.remapToJs(indexPy);
      return vectorToEuclidean3Py(vertices[index]);
    });
    $loc.mp$length = function() {return vertices.length;};
    $loc.__str__ = Sk.ffi.functionPy(function(self) {
      return Sk.ffi.stringToPy(PROP_VERTICES)
    });
    $loc.__repr__ = Sk.ffi.functionPy(function(self) {
      return Sk.ffi.stringToPy(PROP_VERTICES)
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
  return Sk.ffi.isClass(valuePy, COLOR);
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

function stringFromCoordinates(coordinates, labels) {
  var append, i, sb, str, _i, _ref;
  sb = [];
  append = function(number, label) {
    var n;
    if (number !== 0) {
      if (number >= 0) {
        if (sb.length > 0) {
          sb.push("+");
        }
      } else {
        sb.push("-");
      }
      n = Math.abs(number);
      if (n === 1) {
        return sb.push(label);
      } else {
        sb.push(n.toString());
        if (label !== "1") {
          sb.push("*");
          return sb.push(label);
        }
      }
    }
  };
  for (i = _i = 0, _ref = coordinates.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
    append(coordinates[i], labels[i]);
  }
  if (sb.length > 0) {
    str = sb.join("");
  } else {
    str = "0";
  }
  return str;
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

/**
 * @param {number} w
 * @param {number} x
 * @param {number} y
 * @param {number} z
 */
function wxyzToPy(w, x, y, z) {
  var wPy = Sk.builtin.assk$(w, Sk.builtin.nmber.float$);
  var xPy = Sk.builtin.assk$(x, Sk.builtin.nmber.float$);
  var yPy = Sk.builtin.assk$(y, Sk.builtin.nmber.float$);
  var zPy = Sk.builtin.assk$(z, Sk.builtin.nmber.float$);
  return Sk.ffi.callsim(mod[QUATERNION], xPy, yPy, zPy, wPy);
}

Sk.builtin.defineEuclidean3(mod, THREE, BLADE);

mod[SCENE] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, sceneRefPy) {
    if (Sk.ffi.isUndefined(sceneRefPy)) {
      Sk.ffi.checkMethodArgs(SCENE, arguments, 0, 0);
      Sk.ffi.referenceToPy(new THREE[SCENE](), SCENE, undefined, selfPy);
    }
    else if (Sk.ffi.isClass(sceneRefPy, SCENE)) {
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
  $loc.__init__ = Sk.ffi.functionPy(function(self, value) {
    value = Sk.ffi.remapToJs(value);
    self.tp$name = COLOR;
    if (isUndefined(value)) {
      self.v = new THREE[COLOR]();
    }
    else {
      if (isNumber(value) || isString(value)) {
        self.v = new THREE[COLOR](value);
      }
      else if (isColor(value)) {
        self.v = new THREE[COLOR](value);
      }
      else {
        throw new Sk.builtin.AssertionError("value must be either a number, string or Color.");
      }
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(colorPy, name) {
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
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(colorPy, name, valuePy) {
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
  $loc.__str__ = Sk.ffi.functionPy(function(self) {
    var color = self.v;
    var args = {};
    args[PROP_R] = color[PROP_R];
    args[PROP_G] = color[PROP_G];
    args[PROP_B] = color[PROP_B];
    return Sk.ffi.stringToPy(COLOR + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(self) {
    var color = self.v;
    var r = color[PROP_R];
    var g = color[PROP_G];
    var b = color[PROP_B];
    var args = [r, g, b];
    return Sk.ffi.stringToPy(COLOR + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, COLOR, []);

function cameraGetAttr(cameraPy, name, className) {
  var camera = Sk.ffi.remapToJs(cameraPy);
  var UPDATE_PROJECTION_MATRIX = "updateProjectionMatrix"
  switch(name) {
    case "aspect": {
      return Sk.builtin.assk$(camera.aspect, Sk.builtin.nmber.float$);
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
      Sk.ffi.checkArgType(ARG_FOV, NUM, Sk.ffi.isNum(fovPy), fovPy);
    }
    if (Sk.ffi.isDefined(aspectPy)) {
      Sk.ffi.checkArgType(ARG_ASPECT, NUM, Sk.ffi.isNum(aspectPy), aspectPy);
    }
    if (Sk.ffi.isDefined(nearPy)) {
      Sk.ffi.checkArgType(ARG_NEAR, NUM, Sk.ffi.isNum(nearPy), nearPy);
    }
    if (Sk.ffi.isDefined(farPy)) {
      Sk.ffi.checkArgType(ARG_FAR, NUM, Sk.ffi.isNum(farPy), farPy);
    }
    var fieldOfView = Sk.ffi.remapToJs(fovPy);
    var aspectRatio = Sk.ffi.remapToJs(aspectPy);
    var nearPlane = Sk.ffi.remapToJs(nearPy);
    var farPlane = Sk.ffi.remapToJs(farPy);
    Sk.ffi.referenceToPy(new THREE[PERSPECTIVE_CAMERA](fieldOfView, aspectRatio, nearPlane, farPlane), PERSPECTIVE_CAMERA, undefined, selfPy);
  });

  $loc.__getattr__ = Sk.ffi.functionPy(function(cameraPy, name) {
    var camera = Sk.ffi.remapToJs(cameraPy);
    var UPDATE_PROJECTION_MATRIX = "updateProjectionMatrix"
    switch(name) {
      case "aspect": {
        return Sk.builtin.assk$(camera.aspect, Sk.builtin.nmber.float$);
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
  $loc.__init__ = Sk.ffi.functionPy(function(self, leftPy, rightPy, topPy, bottomPy, nearPy, farPy) {
    var left = Sk.builtin.asnum$(leftPy)
    var right = Sk.builtin.asnum$(rightPy)
    var top = Sk.builtin.asnum$(topPy)
    var bottom = Sk.builtin.asnum$(bottomPy)
    var near = Sk.builtin.asnum$(nearPy)
    var far = Sk.builtin.asnum$(farPy)
    self.v = new THREE[ORTHOGRAPHIC_CAMERA](left, right, top, bottom, near, far);
    self.tp$name = ORTHOGRAPHIC_CAMERA;
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
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(ORTHOGRAPHIC_CAMERA);
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
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(ORTHOGRAPHIC_CAMERA);
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

mod[ARROW_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, scalePy, attitudePy, segmentsPy, lengthPy, radiusShaft, radiusCone, lengthCone) {
    Sk.ffi.checkMethodArgs(ARROW_GEOMETRY, arguments, 0, 6);
    var scale;
    var attitude;
    var length;
    if (Sk.ffi.isDefined(scalePy)) {
      if (Sk.ffi.isClass(scalePy, ARROW_GEOMETRY)) {
        Sk.ffi.checkMethodArgs(ARROW_GEOMETRY, arguments, 1, 1);
        Sk.ffi.referenceToPy(Sk.ffi.remapToJs(scalePy), ARROW_GEOMETRY, undefined, selfPy);
        return;
      }
      else {
        Sk.ffi.checkArgType(PROP_SCALE, NUM, Sk.ffi.isNum(scalePy), scalePy);
        scale = Sk.ffi.remapToJs(scalePy);
      }
    }
    else {
      scale = 1;
    }
    if (Sk.ffi.isDefined(attitudePy)) {
      Sk.ffi.checkArgType(PROP_ATTITUDE, EUCLIDEAN_3, Sk.ffi.isClass(attitudePy, EUCLIDEAN_3), attitudePy);
      attitude = Sk.ffi.remapToJs(attitudePy).quaternion;
    }
    else {
      attitude = new THREE[QUATERNION](0, 0, 0, 1);
    }
    if (Sk.ffi.isDefined(segmentsPy)) {
      Sk.ffi.checkArgType(PROP_SEGMENTS, INT, Sk.ffi.isNum(segmentsPy), segmentsPy);
    }
    if (Sk.ffi.isDefined(lengthPy)) {
      Sk.ffi.checkArgType(PROP_SCALE, NUM, Sk.ffi.isNum(lengthPy), lengthPy);
      length = Sk.ffi.remapToJs(lengthPy) * scale;
    }
    else {
      length = scale;
    }
    var segments = Sk.ffi.remapToJs(segmentsPy);
    radiusShaft  = (Sk.ffi.remapToJs(radiusShaft) || 0.01) * scale;
    radiusCone   = (Sk.ffi.remapToJs(radiusCone) || 0.08) * scale;
    lengthCone   = (Sk.ffi.remapToJs(lengthCone) || 0.2) * scale;
    var lengthShaft = length - lengthCone;
    var halfLength = length / 2;
    var a = new THREE[VECTOR_3](0,           0, halfLength);
    var b = new THREE[VECTOR_3](radiusCone,  0, lengthShaft - halfLength);
    var c = new THREE[VECTOR_3](radiusShaft, 0, lengthShaft - halfLength);
    var d = new THREE[VECTOR_3](radiusShaft, 0, -halfLength);
    var e = new THREE[VECTOR_3](0,           0, -halfLength);
    var points = [a, b, c, d, e];
    var generator = new THREE[QUATERNION](0, 0, 1, 0);
    Sk.ffi.referenceToPy(new Sk.stdlib.RevolutionGeometry(points, generator, segments, 0, 2 * Math.PI, attitude), ARROW_GEOMETRY, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(geometryPy, name) {
    var geometry = Sk.ffi.remapToJs(geometryPy);
    switch(name) {
      case PROP_ID: {
        return Sk.ffi.numberToIntPy(geometry[PROP_ID]);
      }
      case PROP_UUID: {
        return Sk.ffi.stringToPy(geometry[PROP_UUID]);
      }
      case PROP_NAME: {
        return Sk.ffi.stringToPy(geometry[PROP_NAME]);
      }
      case PROP_VERTICES: {
        return verticesPy(geometry[PROP_VERTICES]);
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(ARROW_GEOMETRY);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(geometryPy, name, valuePy) {
    var geometry = Sk.ffi.remapToJs(geometryPy);
    switch(name) {
      case PROP_NAME:
      {
        Sk.ffi.checkArgType(PROP_NAME, Sk.ffi.PyType.STR, Sk.ffi.isStr(valuePy), valuePy);
        geometry[PROP_NAME] = Sk.ffi.remapToJs(valuePy);
      }
      break;
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(ARROW_GEOMETRY);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var args = {};
    return Sk.ffi.stringToPy(ARROW_GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var args = [];
    return Sk.ffi.stringToPy(ARROW_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, ARROW_GEOMETRY, []);

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
    var geometry = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_ID: {
        return Sk.ffi.numberToIntPy(geometry[PROP_ID]);
      }
      case PROP_UUID: {
        return Sk.ffi.stringToPy(geometry[PROP_UUID]);
      }
      case PROP_NAME: {
        return Sk.ffi.stringToPy(geometry[PROP_NAME]);
      }
      case PROP_VERTICES: {
        return verticesPy(geometry[PROP_VERTICES]);
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(CIRCLE_GEOMETRY);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    var geometry = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_NAME:
      {
        Sk.ffi.checkArgType(PROP_NAME, Sk.ffi.PyType.STR, Sk.ffi.isStr(valuePy), valuePy);
        geometry[PROP_NAME] = Sk.ffi.remapToJs(valuePy);
      }
      break;
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(CIRCLE_GEOMETRY);
      }
    }
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
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(CUBE_GEOMETRY);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    switch(name) {
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(CUBE_GEOMETRY);
      }
    }
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
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, radiusTopPy, radiusBottomPy, heightPy, radialSegmentsPy, heightSegmentsPy, openEndedPy) {
    if (Sk.ffi.isClass(radiusTopPy, CYLINDER_GEOMETRY)) {
      Sk.ffi.referenceToPy(Sk.ffi.remapToJs(radiusTopPy), CYLINDER_GEOMETRY, undefined, selfPy);
    }
    else {
      Sk.ffi.checkMethodArgs(CYLINDER_GEOMETRY, arguments, 0, 6);
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
      Sk.ffi.referenceToPy(new Sk.stdlib.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded), CYLINDER_GEOMETRY, undefined, selfPy);
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
    switch(name) {
      default: {
        return geometrySetAttr(CYLINDER_GEOMETRY, selfPy, name, valuePy);
      }
    }
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
      return new THREE[VECTOR_3](euclidean3.x, euclidean3.y, euclidean3.z);
    });
    // LatheGeometry assumes that the points are to be rotated about the z-axis.
    var generator = new THREE[QUATERNION](0, 0, 1, 0);
    Sk.ffi.referenceToPy(new Sk.stdlib.RevolutionGeometry(points, generator, Sk.ffi.remapToJs(segmentsPy), Sk.ffi.remapToJs(phiStartPy), Sk.ffi.remapToJs(phiLengthPy)), LATHE_GEOMETRY, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(geometryPy, name) {
    var geometry = Sk.ffi.remapToJs(geometryPy);
    switch(name) {
      case PROP_ID: {
        return Sk.ffi.numberToIntPy(geometry[PROP_ID]);
      }
      case PROP_NAME: {
        return Sk.ffi.stringToPy(geometry[PROP_NAME]);
      }
      case PROP_VERTICES: {
        return verticesPy(geometry[PROP_VERTICES]);
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(LATHE_GEOMETRY);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(geometryPy, name, valuePy) {
    var geometry = Sk.ffi.remapToJs(geometryPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      case PROP_NAME:
      {
        Sk.ffi.checkArgType(PROP_NAME, Sk.ffi.PyType.STR, Sk.ffi.isStr(valuePy), valuePy);
        geometry[PROP_NAME] = Sk.ffi.remapToJs(valuePy);
      }
      break;
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(LATHE_GEOMETRY);
      }
    }
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
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, widthPy, depthPy, widthSegments, heightSegments) {
    Sk.ffi.checkMethodArgs(PLANE_GEOMETRY, arguments, 2, 5);
    Sk.ffi.checkArgType(ARG_WIDTH, NUM, Sk.ffi.isNum(widthPy),  widthPy);
    Sk.ffi.checkArgType(ARG_DEPTH, NUM, Sk.ffi.isNum(depthPy), depthPy);
    var width = Sk.ffi.remapToJs(widthPy);
    var depth = Sk.ffi.remapToJs(depthPy);
    widthSegments  = numberFromIntegerArg(widthSegments,  PROP_WIDTH_SEGMENTS,  PLANE_GEOMETRY);
    heightSegments = numberFromIntegerArg(heightSegments, PROP_HEIGHT_SEGMENTS, PLANE_GEOMETRY);
    Sk.ffi.referenceToPy(new Sk.stdlib.PlaneGeometry(width, depth, widthSegments, heightSegments), PLANE_GEOMETRY, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(planePy, name) {
    var plane = Sk.ffi.remapToJs(planePy);
    switch(name) {
      case PROP_WIDTH: {
        return Sk.ffi.numberToFloatPy(plane[PROP_WIDTH]);
      }
      case PROP_DEPTH:
      case PROP_HEIGHT: {
        return Sk.ffi.numberToFloatPy(plane[PROP_HEIGHT]);
      }
      case PROP_WIDTH_SEGMENTS: {
        return Sk.ffi.numberToIntPy(plane[PROP_WIDTH_SEGMENTS]);
      }
      case PROP_DEPTH_SEGMENTS:
      case PROP_HEIGHT_SEGMENTS: {
        return Sk.ffi.numberToIntPy(plane[PROP_HEIGHT_SEGMENTS]);
      }
      default: {
        return geometryGetAttr(PLANE_GEOMETRY, planePy, name);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(planePy, name, valuePy) {
    switch(name) {
      default: {
        return geometryGetAttr(PLANE_GEOMETRY, planePy, name);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var plane = Sk.ffi.remapToJs(selfPy);
    var args = {};
    args[PROP_WIDTH] = plane[PROP_WIDTH];
    args[PROP_DEPTH] = plane[PROP_HEIGHT];
    return Sk.ffi.stringToPy(PLANE_GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var plane = Sk.ffi.remapToJs(selfPy);
    var width          = plane[PROP_WIDTH];
    var depth          = plane[PROP_HEIGHT];
    var widthSegments  = plane[PROP_WIDTH_SEGMENTS];
    var heightSegments = plane[PROP_HEIGHT_SEGMENTS];
    var args = [width, depth, widthSegments, heightSegments];
    return Sk.ffi.stringToPy(PLANE_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, PLANE_GEOMETRY, []);

mod[REVOLUTION_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, pointsPy, generatorPy, segmentsPy, phiStartPy, phiLengthPy, attitudePy) {
    Sk.ffi.checkMethodArgs(REVOLUTION_GEOMETRY, arguments, 2, 5);
    Sk.ffi.checkArgType(PROP_POINTS, Sk.ffi.PyType.LIST, Sk.ffi.isList(pointsPy), pointsPy);
    Sk.ffi.checkArgType(PROP_GENERATOR, EUCLIDEAN_3, Sk.ffi.isClass(generatorPy, EUCLIDEAN_3), generatorPy);
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
      Sk.ffi.checkArgType(PROP_ATTITUDE, EUCLIDEAN_3, Sk.ffi.isClass(attitudePy, EUCLIDEAN_3), attitudePy);
    }
    var points = Sk.ffi.remapToJs(pointsPy).map(function(euclidean3) {
      return new THREE[VECTOR_3](euclidean3.x, euclidean3.y, euclidean3.z);
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
      case PROP_VERTICES: {
        return verticesPy(geometry[PROP_VERTICES]);
      }
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
  var PROP_WIDTH_SEGMENTS  = "widthSegments";
  var PROP_HEIGHT_SEGMENTS = "heightSegments";
  var PROP_PHI_START       = "phiStart";
  var PROP_PHI_LENGTH      = "phiLength";
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, radiusPy, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {
    if (Sk.ffi.isDefined(radiusPy)) {
      if (Sk.ffi.isClass(radiusPy, SPHERE_GEOMETRY)) {
        Sk.ffi.checkMethodArgs(SPHERE_GEOMETRY, arguments, 1, 1);
        Sk.ffi.referenceToPy(Sk.ffi.remapToJs(radiusPy), SPHERE_GEOMETRY, undefined, selfPy);
        return;
      }
      else {
        Sk.ffi.checkArgType(PROP_RADIUS, NUM, Sk.ffi.isNum(radiusPy), radiusPy);
      }
    }
    var radius = Sk.ffi.remapToJs(radiusPy);
    widthSegments  = numberFromIntegerArg(widthSegments,  PROP_WIDTH_SEGMENTS,  SPHERE_GEOMETRY);
    heightSegments = numberFromIntegerArg(heightSegments, PROP_HEIGHT_SEGMENTS, SPHERE_GEOMETRY);
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
    var sphere = Sk.ffi.remapToJs(selfPy);
    var radius = sphere[PROP_RADIUS];
    var args = {};
    args[PROP_RADIUS] = radius;
    return Sk.ffi.stringToPy(SPHERE_GEOMETRY + "(" + JSON.stringify(args) + ")");
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
    Sk.ffi.checkArgType(ARG_DETAIL, INT,    Sk.ffi.isInt(detailPy), detailPy);
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
    switch(name) {
      default: {
        return geometrySetAttr(TETRAHEDRON_GEOMETRY, tetraPy, name, valuePy);
      }
    }
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
  $loc.__getattr__ = Sk.ffi.functionPy(function(self, name) {
    switch(name) {
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(TEXT_GEOMETRY);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(geometryPy, name, valuePy) {
    var geometry = Sk.ffi.remapToJs(geometryPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      default: {
        throw new Error(name + " is not an attribute of " + TEXT_GEOMETRY);
      }
    }
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
  $loc.__init__ = Sk.ffi.functionPy(function(self, radius, tube, radialSegments, tubularSegments, arc) {
    radius = numberFromArg(radius,                          PROP_RADIUS,           TORUS_GEOMETRY);
    tube = numberFromArg(tube,                              PROP_TUBE,             TORUS_GEOMETRY);
    radialSegments = numberFromIntegerArg(radialSegments,   PROP_RADIAL_SEGMENTS,  TORUS_GEOMETRY);
    tubularSegments = numberFromIntegerArg(tubularSegments, PROP_TUBULAR_SEGMENTS, TORUS_GEOMETRY);
    arc = numberFromArg(arc,                                PROP_ARC,              TORUS_GEOMETRY);
    self.v = new THREE[TORUS_GEOMETRY](radius, tube, radialSegments, tubularSegments, arc);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(self, name) {
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
  $loc.__setattr__ = Sk.ffi.functionPy(function(geometryPy, name, valuePy) {
    var geometry = Sk.ffi.remapToJs(geometryPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      default: {
        throw new Error(name + " is not an attribute of " + TORUS_GEOMETRY);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(self) {
    var torus = self.v;
    var args = {};
    args[PROP_RADIUS] = torus[PROP_RADIUS];
    args[PROP_TUBE]   = torus[PROP_TUBE];
    args[PROP_ARC]    = torus[PROP_ARC];
    return Sk.ffi.stringToPy(TORUS_GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(self) {
    var torus = self.v;
    var radius          = torus[PROP_RADIUS];
    var tube            = torus[PROP_TUBE];
    var radialSegments  = torus[PROP_RADIAL_SEGMENTS];
    var tubularSegments = torus[PROP_TUBULAR_SEGMENTS];
    var arc             = torus[PROP_ARC];
    var args = [radius, tube, radialSegments, tubularSegments, arc];
    return Sk.ffi.stringToPy(TORUS_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, TORUS_GEOMETRY, []);

mod[VORTEX_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, widthPy, depthPy, widthSegments, heightSegments) {
    Sk.ffi.checkMethodArgs(VORTEX_GEOMETRY, arguments, 2, 5);
    Sk.ffi.checkArgType(ARG_WIDTH, NUM, Sk.ffi.isNum(widthPy),  widthPy);
    Sk.ffi.checkArgType(ARG_DEPTH, NUM, Sk.ffi.isNum(depthPy), depthPy);
    var width = Sk.ffi.remapToJs(widthPy);
    var depth = Sk.ffi.remapToJs(depthPy);
    widthSegments  = numberFromIntegerArg(widthSegments,  PROP_WIDTH_SEGMENTS,  VORTEX_GEOMETRY);
    heightSegments = numberFromIntegerArg(heightSegments, PROP_HEIGHT_SEGMENTS, VORTEX_GEOMETRY);
    Sk.ffi.referenceToPy(new Sk.stdlib.PlaneGeometry(width, depth, widthSegments, heightSegments), VORTEX_GEOMETRY, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(planePy, name) {
    var plane = Sk.ffi.remapToJs(planePy);
    switch(name) {
      case PROP_WIDTH: {
        return Sk.ffi.numberToFloatPy(plane[PROP_WIDTH]);
      }
      case PROP_DEPTH:
      case PROP_HEIGHT: {
        return Sk.ffi.numberToFloatPy(plane[PROP_HEIGHT]);
      }
      case PROP_WIDTH_SEGMENTS: {
        return Sk.ffi.numberToIntPy(plane[PROP_WIDTH_SEGMENTS]);
      }
      case PROP_DEPTH_SEGMENTS:
      case PROP_HEIGHT_SEGMENTS: {
        return Sk.ffi.numberToIntPy(plane[PROP_HEIGHT_SEGMENTS]);
      }
      default: {
        return geometryGetAttr(VORTEX_GEOMETRY, planePy, name);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(planePy, name, valuePy) {
    switch(name) {
      default: {
        return geometryGetAttr(VORTEX_GEOMETRY, planePy, name);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var plane = Sk.ffi.remapToJs(selfPy);
    var args = {};
    args[PROP_WIDTH] = plane[PROP_WIDTH];
    args[PROP_DEPTH] = plane[PROP_HEIGHT];
    return Sk.ffi.stringToPy(VORTEX_GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var plane = Sk.ffi.remapToJs(selfPy);
    var width          = plane[PROP_WIDTH];
    var depth          = plane[PROP_HEIGHT];
    var widthSegments  = plane[PROP_WIDTH_SEGMENTS];
    var heightSegments = plane[PROP_HEIGHT_SEGMENTS];
    var args = [width, depth, widthSegments, heightSegments];
    return Sk.ffi.stringToPy(VORTEX_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, VORTEX_GEOMETRY, []);
/**
 * @param {string} className 
 * @param {!Object} geometryPy
 * @param {string} name
 */
function geometryGetAttr(className, geometryPy, name) {
  var geometry = Sk.ffi.remapToJs(geometryPy);
  switch(name) {
    case PROP_ID: {
      return Sk.ffi.numberToIntPy(geometry[PROP_ID]);
    }
    case PROP_NAME: {
      return Sk.ffi.stringToPy(geometry[PROP_NAME]);
    }
    case PROP_UUID: {
      return Sk.ffi.stringToPy(geometry[PROP_UUID]);
    }
    case PROP_VERTICES: {
      // TODO: This isn't really possible with the current implementation.
      return verticesPy(geometry[PROP_VERTICES]);
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
  var geometry = Sk.ffi.remapToJs(geometryPy);
  var value = Sk.ffi.remapToJs(valuePy);
  switch(name) {
    case PROP_NAME: {
      Sk.ffi.checkArgType(PROP_NAME, Sk.ffi.PyType.STR, Sk.ffi.isStr(valuePy), valuePy);
      geometry[PROP_NAME] = value;
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
      Sk.ffi.referenceToPy(new THREE['Geometry'](), GEOMETRY, undefined, selfPy);
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {return geometryGetAttr(GEOMETRY, selfPy, name);});
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {return geometrySetAttr(GEOMETRY, selfPy, name, valuePy);});
  $loc.__str__ = Sk.ffi.functionPy(function(geometryPy) {
    var geometry = Sk.ffi.remapToJs(geometryPy);
    var args = {};
    return Sk.ffi.stringToPy(GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(geometry) {
    geometry = Sk.ffi.remapToJs(geometry);
    var args = [];
    return Sk.ffi.stringToPy(GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, GEOMETRY, []);
/**
 * @param {string} className 
 * @param {!Object} selfPy
 * @param {string} name
 */
function object3DGetAttr(className, selfPy, name) {
  var self = Sk.ffi.remapToJs(selfPy);
  switch(name) {
    case PROP_ID: {
      return Sk.ffi.numberToIntPy(self[PROP_ID]);
    }
    case PROP_NAME: {
      return Sk.ffi.stringToPy(self[PROP_NAME]);
    }
    case PROP_UUID: {
      return Sk.ffi.stringToPy(self[PROP_UUID]);
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
    case PROP_QUATERNION: {
      return Sk.ffi.callsim(mod[QUATERNION], Sk.ffi.referenceToPy(self[PROP_QUATERNION], QUATERNION));
    }
    case PROP_EULER_ORDER: {
      return Sk.ffi.stringToPy(self[PROP_EULER_ORDER]);
    }
    case PROP_USE_QUATERNION: {
      return self[PROP_USE_QUATERNION];
    }
    case PROP_MASS:
    case PROP_MOMENTUM: {
      var valuePy = self[name];
      Sk.ffi.checkArgType("431935c5-b446-4add-adeb-45ba029551a2, name => " + name, EUCLIDEAN_3, isEuclidean3Py(valuePy), valuePy);
      return valuePy;
    }
    case METHOD_ADD: {
      return methodAdd(self);
    }
    case METHOD_REMOVE: {
      return methodRemove(self);
    }
    default: {
      throw Sk.ffi.err.attribute(name).isNotGetableOnType(className);
    }
  }
}
/**
 * @param {string} className 
 * @param {!Object} selfPy
 * @param {string} name
 * @param {!Object} valuePy
 */
function object3DSetAttr(className, selfPy, name, valuePy) {
  var self = Sk.ffi.remapToJs(selfPy);
  var value = Sk.ffi.remapToJs(valuePy);
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
      self[PROP_QUATERNION] = value;
    }
    break;
    case PROP_EULER_ORDER: {
      if (isString(value)) {
        self[PROP_EULER_ORDER] = value;
      }
      else {
        throw new Error(name + " must be a string");
      }
    }
    break;
    case PROP_USE_QUATERNION: {
      self[PROP_USE_QUATERNION] = value;
    }
    break;
    case PROP_MASS:
    case PROP_MOMENTUM: {
      Sk.ffi.checkArgType(name, EUCLIDEAN_3, isEuclidean3Py(valuePy), valuePy);
      self[name] = valuePy;
    }
    break;
    default: {
      throw Sk.ffi.err.attribute(name).isNotSetableOnType(className);
    }
  }
}
/**
 *
 */
mod[OBJECT_3D] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.referenceToPy(new THREE[OBJECT_3D](), OBJECT_3D, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    return object3DGetAttr(OBJECT_3D, selfPy, name);
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    return object3DSetAttr(OBJECT_3D, selfPy, name, valuePy);
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var args = {};
    return Sk.ffi.stringToPy(OBJECT_3D + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var args = [];
    return Sk.ffi.stringToPy(OBJECT_3D + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, OBJECT_3D, []);
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
      return object3DGetAttr(className, selfPy, name);
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
      light[PROP_COLOR] = new THREE[COLOR](value);
    }
    break;
    default: {
      return object3DSetAttr(className, selfPy, name, valuePy);
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

mod[MESH] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, geometryPy, materialPy) {
    Sk.ffi.checkMethodArgs(MESH, arguments, 1, 2);
    Sk.ffi.checkArgType(PROP_GEOMETRY, GEOMETRY, Sk.ffi.isClass(geometryPy), geometryPy); // TODO GEOMETRIES
    var custom = {};
    custom[PROP_GEOMETRY] = Sk.ffi.typeName(geometryPy);
    Sk.ffi.referenceToPy(new THREE[MESH](Sk.ffi.remapToJs(geometryPy), Sk.ffi.remapToJs(materialPy)), MESH, custom, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(meshPy, name) {
    var mesh = Sk.ffi.remapToJs(meshPy);
    switch(name) {
      case PROP_ATTITUDE: {
        return quaternionToEuclidean3Py(mesh[PROP_QUATERNION]);
      }
      case PROP_ID: {
        return Sk.ffi.numberToIntPy(mesh[PROP_ID]);
      }
      case PROP_GEOMETRY: {
        var geometry = mesh[PROP_GEOMETRY];
        var className = meshPy.custom[PROP_GEOMETRY];
        return Sk.ffi.callsim(mod[className], Sk.ffi.referenceToPy(geometry, className));
      }
      case PROP_MATERIAL: {
        var material = mesh[PROP_MATERIAL];
        var className = meshPy.custom[PROP_MATERIAL];
        return Sk.ffi.callsim(mod[className], Sk.ffi.referenceToPy(material, className));
      }
      case PROP_MATRIX_AUTO_UPDATE: {
        return mesh[PROP_MATRIX_AUTO_UPDATE];
      }
      case PROP_NAME: {
        return Sk.ffi.stringToPy(mesh[PROP_NAME]);
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
      case PROP_VISIBLE: {
        return mesh[PROP_VISIBLE];
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
        return object3DGetAttr(MESH, meshPy, name);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(meshPy, name, valuePy) {
    var mesh = Sk.ffi.remapToJs(meshPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      case PROP_ATTITUDE: {setQuaternionProperty(MESH, meshPy, PROP_QUATERNION, valuePy, name);} break;
      case PROP_MATRIX_AUTO_UPDATE: {
        mesh[PROP_MATRIX_AUTO_UPDATE] = checkArgBool(PROP_MATRIX_AUTO_UPDATE, valuePy);
      }
      break;
      case PROP_NAME: {
        Sk.ffi.checkArgType(PROP_NAME, Sk.ffi.PyType.STR, Sk.ffi.isStr(valuePy), valuePy);
        mesh[PROP_NAME] = value;
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
      case PROP_VISIBLE: {
        Sk.ffi.checkArgType(PROP_VISIBLE, Sk.ffi.PyType.BOOL, Sk.ffi.isBool(valuePy), valuePy);
        mesh[PROP_VISIBLE] = value;
      }
      break;
      default: {
        return object3DSetAttr(MESH, meshPy, name, valuePy);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(mesh) {
    mesh = Sk.ffi.remapToJs(mesh);
    var args = {};
    args[PROP_ID] = mesh[PROP_ID];
    args[PROP_NAME] = mesh[PROP_NAME];
    return Sk.ffi.stringToPy(MESH + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(mesh) {
    mesh = Sk.ffi.remapToJs(mesh);
    var args = [/*mesh[PROP_GEOMETRY], mesh[PROP_MATERIAL]*/];
    return Sk.ffi.stringToPy(MESH + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, MESH, []);
/**
 * @param {string} className 
 * @param {!Object} materialPy
 * @param {string} name
 */
function materialGetAttr(className, materialPy, name) {
  var material = Sk.ffi.remapToJs(materialPy);
  switch(name) {
    case PROP_ID: {
      return Sk.ffi.numberToIntPy(material[PROP_ID]);
    }
    case PROP_NAME: {
      return Sk.ffi.stringToPy(material[PROP_NAME]);
    }
    case PROP_NEEDS_UPDATE: {
      return Sk.ffi.booleanToPy(material[PROP_NEEDS_UPDATE]);
    }
    case PROP_OPACITY: {
      return Sk.ffi.numberToFloatPy(material[PROP_OPACITY]);
    }
    case PROP_OVERDRAW: {
      return Sk.ffi.numberToFloatPy(material[PROP_OVERDRAW]);
    }
    case PROP_TRANSPARENT: {
      return Sk.ffi.booleanToPy(material[PROP_TRANSPARENT]);
    }
    case PROP_UUID: {
      return Sk.ffi.stringToPy(material[PROP_UUID]);
    }
    case PROP_VISIBLE: {
      return Sk.ffi.booleanToPy(material[PROP_VISIBLE]);
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
  var value = Sk.ffi.remapToJs(valuePy);
  switch(name) {
    case PROP_NAME: {
      Sk.ffi.checkArgType(PROP_NAME, Sk.ffi.PyType.STR, Sk.ffi.isStr(valuePy), valuePy);
      material[PROP_NAME] = value;
    }
    break;
    default: {
      throw Sk.ffi.err.attribute(name).isNotSetableOnType(className);
    }
  }
}
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
        material[PROP_COLOR] = new THREE[COLOR](value);
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
  $loc.__init__ = Sk.ffi.functionPy(function(self, parametersPy) {
    Sk.ffi.checkMethodArgs(MESH_LAMBERT_MATERIAL, arguments, 0, 1);
    var parameters = Sk.ffi.remapToJs(parametersPy);
    Sk.ffi.referenceToPy(new THREE[MESH_LAMBERT_MATERIAL](parameters), MESH_LAMBERT_MATERIAL, undefined, self);
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
      case PROP_NEEDS_UPDATE: {
        return material[PROP_NEEDS_UPDATE];
      }
      case PROP_OPACITY: {
        return Sk.ffi.numberToFloatPy(material[PROP_OPACITY]);
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
  $loc.__setattr__ = Sk.ffi.functionPy(function(materialPy, name, valuePy) {
    var material = Sk.ffi.remapToJs(materialPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      case PROP_COLOR: {
        material[PROP_COLOR] = new THREE[COLOR](value);
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
  $loc.__init__ = Sk.ffi.functionPy(function(self, parameters) {
    self.tp$name = MESH_NORMAL_MATERIAL;
    parameters = Sk.ffi.remapToJs(parameters);
    self.v = new THREE[MESH_NORMAL_MATERIAL](parameters);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(self, name) {
    switch(name) {
      default: {
        throw new Error(name + " is not an attribute of " + MESH_NORMAL_MATERIAL);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(material) {
    material = Sk.ffi.remapToJs(material);
    var args = {};
    return Sk.ffi.stringToPy(MESH_NORMAL_MATERIAL + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(material) {
    material = Sk.ffi.remapToJs(material);
    var args = [{}];
    return Sk.ffi.stringToPy(MESH_NORMAL_MATERIAL + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, MESH_NORMAL_MATERIAL, []);

mod[MESH_PHONG_MATERIAL] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(self, parameters) {
    self.tp$name = MESH_PHONG_MATERIAL;
    parameters = Sk.ffi.remapToJs(parameters);
    self.v = new THREE[MESH_PHONG_MATERIAL](parameters);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(self, name) {
    switch(name) {
      default: {
        throw new Error(name + " is not an attribute of " + MESH_PHONG_MATERIAL);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(materialPy, name, valuePy) {
    var material = Sk.ffi.remapToJs(materialPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      default: {
        throw new Error(name + " is not an attribute of " + MESH_PHONG_MATERIAL);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(material) {
    material = Sk.ffi.remapToJs(material);
    var args = {};
    return Sk.ffi.stringToPy(MESH_PHONG_MATERIAL + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(material) {
    material = Sk.ffi.remapToJs(material);
    var args = [{}];
    return Sk.ffi.stringToPy(MESH_PHONG_MATERIAL + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, MESH_PHONG_MATERIAL, []);

if (typeof THREE !== 'undefined') {
  mod.LineStrip  = Sk.builtin.assk$(THREE.LineStrip,  Sk.builtin.nmber.int$);
  mod.LinePieces = Sk.builtin.assk$(THREE.LinePieces, Sk.builtin.nmber.int$);

  mod.FlatShading   = Sk.builtin.assk$(THREE.FlatShading,   Sk.builtin.nmber.int$);
  mod.NoShading     = Sk.builtin.assk$(THREE.NoShading,     Sk.builtin.nmber.int$);
  mod.SmoothShading = Sk.builtin.assk$(THREE.SmoothShading, Sk.builtin.nmber.int$);
}
};
}).call(this);
