/*On load function*/
$(function(){

pricesIn();
smoothScroll();
slideLogin();
slideSignUp();

});
/*SignUp animations*/
function showPersonalPanel(){
		$('#pnlPersonalInfo').removeClass('hidden');
		$('#footer').removeClass('navbar-fixed-bottom');
		$("#pnlPersonalInfo").animateCss('slideInDown');
}
function showBillingPanel(){
	$('#pnlBillingInfo').removeClass('hidden');
	$("#pnlBillingInfo").animateCss('slideInDown');
}

/*Prices animations*/
function pricesIn(){
	$("#pnlPrices1").animateCss('fadeInRightBig');
	$("#pnlPrices2").animateCss('fadeInRightBig');
	$("#pnlPrices3").animateCss('fadeInRightBig');
	$("#pnlPrices4").animateCss('fadeInRightBig');
}
/*Main Page animations*/
function smoothScroll(){
  $(".smoothScroll").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  }

  //CSS animation function
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
/*FAQ animations*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}
/*LogIn/SignUp animations*/
function slideLogin(){
     var flag = true;
    $("#btnLogOpen").click(function(){
        if (flag) {
            $("#hdn2").slideUp("fast");
            $("#hdn").slideDown("slow");
            flag = false;
        }
        else{
             $("#hdn").slideUp("slow");
             flag = true;
        }
}); 
};
function slideSignUp(){
     var flag = true;

    $("#btnSignOpen").click(function(){

        if (flag) {
            $("#hdn").slideUp("fast");
            $("#hdn2").slideDown("slow");
            flag = false;
        }
        else{
             $("#hdn2").slideUp("slow");
             flag = true;
        }
	});
};


$(function(){

    $('#bdiv').click(function(e){

      if (e.target.id != 'hdn') {

          $("#hdn").slideUp("fast");
          $("#hdn2").slideUp("fast");
      }
    })
});


