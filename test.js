(function() {
	require( './index' );

	include( '/a/b/mod1' );

	var rebased = include.rebase( '/a' );
	rebased.all( '/' );
	rebased( '/c/mod1' );
	include( '/a/b/mod1' );
})();
