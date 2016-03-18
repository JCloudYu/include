(function() {
	var
	path = require( 'path' ),
	fs	 = require( 'fs' ),

	__mRequire = require,
	__rootPath = path.resolve( global.root_path || path.dirname(process.argv[1]) );

	module.exports = global.include = ___GEN_SCOPED_INCLUDE( __rootPath );


	function ___GEN_SCOPED_INCLUDE( basePath ) {

		var
		_include = function( modulePath ) {
			return __mRequire( ( modulePath.substr( 0, 1 ) == "/" ) ? basePath + modulePath: modulePath );
		};
		_include.all = function( packagePath ) {
			var
			modules = [],
			basePkg = ( packagePath.substr( 0, 1 ) == "/" ) ? basePath + packagePath : packagePath;


			if ( !fs.statSync( basePkg ).isDirectory() )
				return modules;

			fs.readdirSync( basePkg ).forEach(function( name ){
				var filePath = basePkg + "/" + name;
				if ( !fs.statSync( filePath ).isFile() ) return;

				modules.push( __mRequire( filePath ) );
			});

			return modules;
		};
		_include.rebase = function( packagePath ) {
			return ___GEN_SCOPED_INCLUDE( basePath + packagePath );
		};

		return _include;
	}
})();
