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
