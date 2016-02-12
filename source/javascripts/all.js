//= require vendor/jquery.min
//= require_tree .

if ('ontouchstart' in document.documentElement == false) { // is not a touch devise
	$(window).on("scroll", function() {
		var scroll = window.scrollY;
		var obj = $("#header img");

		obj.css("top", obj.data("original-top") + (scroll / 2));
	});
}

$("#cases .case, abbr").tooltip();
$("textarea").autogrow();


$('#modal_contact').on('show.bs.modal', function() {
  mixpanel.track('Open contact form');
});

$('#contact_form').on('submit', function(e) {
  e.preventDefault();
  var form = $(this);

  $('#modal_contact button.submit').button('loading');

  $.post(this.action, form.formParams(), function(result) {
    $('#modal_contact').modal('hide');
    $('#modal_thanks').modal('show');
  }, 'json');

  mixpanel.track('Send message');
});



/*! loadCSS: load a CSS file asynchronously. [c]2016 @scottjehl, Filament Group, Inc. Licensed MIT */
!function(e){"use strict";var t=function(t,n,i){var o,a=e.document,d=a.createElement("link"),r=i||"all";if(n)o=n;else{var l=(a.body||a.getElementsByTagName("head")[0]).childNodes;o=l[l.length-1]}var s=a.styleSheets;d.rel="stylesheet",d.href=t,d.media="only x",o.parentNode.insertBefore(d,n?o:o.nextSibling);var f=function(e){for(var t=d.href,n=s.length;n--;)if(s[n].href===t)return e();setTimeout(function(){f(e)})};return d.addEventListener&&d.addEventListener("load",function(){this.media=r}),d.onloadcssdefined=f,f(function(){d.media!==r&&(d.media=r)}),d};"undefined"!=typeof exports?exports.loadCSS=t:e.loadCSS=t}("undefined"!=typeof global?global:this);

/* CSS rel=preload polyfill (from src/cssrelpreload.js) */
(function( w ){
	// rel=preload support test
	function support(){
	  try {
			return w.document.createElement( "link" ).relList.supports( "preload" );
	  } catch (e) {}
	}
	// loop preload links and fetch using loadCSS
	function poly(){
		var links = w.document.getElementsByTagName( "link" );
		for( var i = 0; i < links.length; i++ ){
			var link = links[ i ];
			if( link.rel === "preload" && link.getAttribute( "as" ) === "style" ){
				w.loadCSS( link.href, link );
				link.rel = null;
			}
		}
	}
	// if link[rel=preload] is not supported, we must fetch the CSS manually using loadCSS
	if( !support() ){
		poly();
		var run = w.setInterval( poly, 300 );
		if( w.addEventListener ){
			w.addEventListener( "load", function(){
				w.clearInterval( run );
			} );
		}
	}
}( this ));
