(function ( href ){
	var config = Reveal.getConfig();
	var regex = /\/twocolumn.js$/i;
	var plugin = config.dependencies.find( function( e ){
		return e.src.search( regex ) >= 0?e.src:false;
	});
	var path = plugin.src.replace( regex, '' );
	var link = document.createElement( 'link' );
	link.rel = 'stylesheet';
	link.href = path+'/'+href;
	document.querySelector( 'head' ).appendChild( link );
})("twocolumn.css");


marked.Renderer.prototype.blockquote = (quote) => {
	const wrap=["<div class='quotewrap'>","</div>"];
	const blockquote=["<blockquote>\n","\n</blockquote>\n"];
	let append="";
	quote=quote.replace(wrap[0],"");
	quote=quote.replace(wrap[1],"");
	if(quote.indexOf(blockquote[0])!==-1){
		let parts=quote.split(blockquote[0]);
		quote=parts.shift();
		append=blockquote[0]+parts.join(blockquote[0]);
	}
	console.log(wrap[0]+blockquote[0]+quote+blockquote[1]+append+wrap[1]);
	return wrap[0]+blockquote[0]+quote+blockquote[1]+append+wrap[1];
}
