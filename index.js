(function() {
	var
	path = require( 'path' ),
	fs	 = require( 'fs' ),

	__mRequire = require,
	__basePath = path.resolve( global.root_path || path.dirname(process.argv[1]) ),

	__include  = module.exports = global.include = function( modulePath ){
		return __mRequire( ( modulePath.substr( 0, 1 ) == "/" ) ? `${__basePath}${modulePath}` : modulePath );
	};
	__include.all = function( packagePath ){
		var
		modules = [],
		basePkg = ( packagePath.substr( 0, 1 ) == "/" ) ? `${__basePath}${packagePath}` : packagePath;


		if ( !fs.statSync( basePkg ).isDirectory() )
			return modules;

		fs.readdirSync( basePkg ).forEach(function( name ){
			if ( !fs.statSync( `${basePkg}/${name}` ).isFile() ) return;

			modules.push( __mRequire( `${basePkg}/${name}` ) );
		});

		return modules;
	};
})();
