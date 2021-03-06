// Opt. jQuery bling alias should $ conflict with other libraries.
// NOTE: Will require instances of $ to be replaced with below variable.
//let $blingOpt = jQuery.noConflict();

$(document).ready(() => {

  console.log("Ready");



  $("#dropdownMenuMobile").on("pointerdown", function () {
    if ($("#hamburger-icon").hasClass("bi-list")) {
      $("#hamburger-icon").toggleClass("bi-x");
    }
  });

  $(document).on("pointerdown", function () {
    if ($("#dropdownMenuMobile").hasClass("show") && $("#hamburger-icon").hasClass("bi-x")) {
      console.log("foo");
      $("#hamburger-icon").removeClass("bi-x");
    }
  });

  /*
  $(document).on("pointerdown", function() {
    if ($("#hamburger-icon").hasClass("bi-x")) {
      console.log("foo");
      $("#hamburger-icon").removeClass("bi-x");
    }
  });
*/

  // Note, arrow functions do not pick up "this" and will refer to the parent container if used. Used regular func() if "this" is used.



  // Will need a function that jumps to the next slide on a button press, triggering the below immediately without the coroutine
  $("#slideshow > div:gt(0)").hide();

  setInterval(function () {
    $('#slideshow > div:first')
      .hide()
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  }, 12000);
})

   // Need to select a parent element, could come in handy
   // $('ul li:has(ul.child)').addClass('has_child');



