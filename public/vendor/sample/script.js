// const { document } = require("postcss");

DecoupledEditor
	.create( document.querySelector( '.editor' ), {
		// Editor configuration.
	} )
	.then( editor => {
		window.editor = editor;

		// Set a custom container for the toolbar.
		document.querySelector( '.document-editor__toolbar' ).appendChild( editor.ui.view.toolbar.element );
		document.querySelector( '.ck-toolbar' ).classList.add( 'ck-reset_all' );
	} )
	.catch( handleSampleError );
	document.querySelector( '#submit' ).addEventListener( 'click', () => {
		console.log('bisa');
		alert("bisaaaaaaaa")
		// console.log(editor)
		console.log(editor.getData());
		document.querySelector( '#hasil' ).innerHTML = editor.getData()
	} );
	// console.log(editor.getData())

function handleSampleError( error ) {
	const issueUrl = 'https://github.com/ckeditor/ckeditor5/issues';

	const message = [
		'Oops, something went wrong!',
		`Please, report the following error on ${ issueUrl } with the build id "launloy32t1l-8c4drteu6t2m" and the error stack trace:`
	].join( '\n' );

	console.error( message );
	console.error( error );
}
