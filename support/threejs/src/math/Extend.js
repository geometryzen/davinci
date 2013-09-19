THREE.extend( THREE.Vector3.prototype, {

  applyEuler: function () {

    var quaternion = new THREE.Quaternion();

    return function ( euler ) {

      if ( euler instanceof THREE.Euler === false ) {

        throw new Error("Vector3.applyEuler() now expects a Euler rotation rather than a Vector3 and order. Please update your code.");

      }

      this.applyQuaternion( quaternion.setFromEuler( euler ) );

      return this;

    };

  }(),

  applyAxisAngle: function () {

    var quaternion = new THREE.Quaternion();

    return function ( axis, angle ) {

      this.applyQuaternion( quaternion.setFromAxisAngle( axis, angle ) );

      return this;

    };

  }(),

  projectOnVector: function () {

    var v1 = new THREE.Vector3();

    return function ( vector ) {

      v1.copy( vector ).normalize();
      var d = this.dot( v1 );
      return this.copy( v1 ).multiplyScalar( d );

    };

  }(),

  projectOnPlane: function () {

    var v1 = new THREE.Vector3();

    return function ( planeNormal ) {

      v1.copy( this ).projectOnVector( planeNormal );

      return this.sub( v1 );

    }

  }(),

  reflect: function () {

    var v1 = new THREE.Vector3();

    return function ( vector ) {

        v1.copy( this ).projectOnVector( vector ).multiplyScalar( 2 );

        return this.subVectors( v1, this );

    }

  }()

} );
