
//on scroll complete the function
$(document).on("scroll",function(){

//if scroll is larger than 100 remove class "larger" (properties defined in css) and add class "smaller" OR make the header shrink	
  if($(document).scrollTop()>100){ 	
    $("header").removeClass("larger").addClass("smaller");
  } 

//otherwise (if scroll is less than 100) remover class smaller and add class larger OR make the header grow  
  else {
    $("header").removeClass("smaller").addClass("larger");
	}
});