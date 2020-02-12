// create slide down function

$("#dropdown-lists").click(function(){
    $("#dropdown").slideToggle(),
    $(this).toggleClass("active"),
  
    
      $("").on("click",function(){
        $("#dropdown").slideUp()
         $("#dropdown-lists").removeClass("active")
      });
});
