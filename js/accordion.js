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





$(document).ready(function(){
    

    $("#btnLogOpen").click(function(){
    	$("#hdn2").slideUp("fast");
        $("#hdn").slideDown("slow");

    });

    $("#btnLogClose").click(function(){
        $("#hdn").slideUp("slow");
    });
});

$(document).ready(function(){
    
    $("#btnSignOpen").click(function(){
    	$("#hdn").slideUp("fast");
        $("#hdn2").slideDown("slow");
       
    });
    $("#btnSignClose").click(function(){
        $("#hdn2").slideUp("slow");
    });
});





/*


$("#btnLogOpen").on("click", function() {
	$parent_box = $(this).closest("#box");
	$parent_box.siblings().find("#hdn").slideUp();
	$parent_box.find("#hdn").slideToggle(1000, 'swing');
});




$(document).ready(function(){

	$('#btnLogOpen').on('click', function() {
		$parent_box = $(this).closest('#hdn');
		$("#hdn").slideDown("slow");
		$parent_box.siblings().find('#hdn').hide();
		$parent_box.find('#hdn').toggle();
	});


	$('#btnLogOpen').on('click', function() {
		$parent_box = $(this).closest('#hdn2');
		$("#hdn2").slideDown("slow");
		$parent_box.siblings().find('#hdn').hide();
		$parent_box.find('#hdn').toggle();
	});

});



*/