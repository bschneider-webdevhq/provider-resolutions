$(document).ready(()=> {

    console.log("ready");

    console.log($(this).attr("id"));

  $("#dropdownMenuMobile").on("pointerdown", function() {
    $("#hamburger-icon").toggleClass("bi bi-x");
  });




    // Note, arrow functions do not pick up "this" and will refer to the parent container if used. Used regular func() if "this" is used.
 
  

    // Will need a function that jumps to the next slide on a button press, triggering the below immediately without the coroutine
    $("#slideshow > div:gt(0)").hide();

    setInterval(function() { 
      $('#slideshow > div:first')
        .hide()
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    },  12000);
}) 
    
   // Need to select a parent element, could come in handy
   // $('ul li:has(ul.child)').addClass('has_child');
  


