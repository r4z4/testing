document.addEventListener("DOMContentLoaded", function() {  //ES6 version of $(document).ready
  document.getElementById("nav-item-container").style.visibility = "visible";  //This is ES6 = No '#'
  document.querySelector(".site_p_view").style.opacity = 0;
  document.querySelector(".site_p_comp").style.opacity = 0;
  //document.querySelector(".site_p_drill").style.opacity = 0;


//TO ES6 NOTES ==> .toggleClass is now .classList.toggle // $ is now document.querySelector // Removed .stop(true) but did not replace it - do I need to?
//Just use <a href> or need an EventListener??

document.querySelector(".cta_comp").addEventListener("mouseover", function() {
  document.querySelector(".site_p_comp").classList.contains("fade-out") 
  ? document.querySelector(".site_p_comp").classList.replace("fade-out", "fade-in") 
  : document.querySelector(".site_p_comp").classList.add("fade-in");
  }, false); 

  document.querySelector(".cta_comp").addEventListener("mouseleave", function() {
    document.querySelector(".site_p_comp").classList.contains("fade-in") 
    ? document.querySelector(".site_p_comp").classList.replace("fade-in", "fade-out") 
    : document.querySelector(".site_p_comp").classList.add("fade-out");
    }, false);
  
  document.querySelector(".cta_comp").addEventListener("click", function() {
    window.open('./messaging.html', '_blank');
  });

  document.querySelector(".cta_view").addEventListener("mouseover", function() {
    document.querySelector(".site_p_view").classList.contains("fade-out") 
    ? document.querySelector(".site_p_view").classList.replace("fade-out", "fade-in") 
    : document.querySelector(".site_p_view").classList.add("fade-in");
    }, false); 

document.querySelector(".cta_view").addEventListener("mouseleave", function() {
  document.querySelector(".site_p_view").classList.contains("fade-in") 
  ? document.querySelector(".site_p_view").classList.replace("fade-in", "fade-out") 
  : document.querySelector(".site_p_view").classList.add("fade-out");
  }, false);

  document.querySelector(".cta_view").addEventListener("click", function() {
    window.open('./assessments.html', '_blank');
});

/*******
document.querySelector(".cta_drill").addEventListener("mouseover", function() {
  document.querySelector(".site_p_drill").classList.contains("fade-out") 
  ? document.querySelector(".site_p_drill").classList.replace("fade-out", "fade-in") 
  : document.querySelector(".site_p_drill").classList.add("fade-in");
  }, false); 

document.querySelector(".cta_drill").addEventListener("mouseleave", function() {
  document.querySelector(".site_p_drill").classList.contains("fade-in") 
  ? document.querySelector(".site_p_drill").classList.replace("fade-in", "fade-out") 
  : document.querySelector(".site_p_drill").classList.add("fade-out");
  }, false);

  document.querySelector(".cta_drill").addEventListener("click", function() {
    window.open('./reports.html', '_blank');
});
********/

  document.querySelector(".cta_home").addEventListener("click", function() {
    window.open('./home.html', '_self');
  });

  document.querySelector(".cta_exit").addEventListener("click", function() {
    window.open('https://www.google.com/', '_blank');
  });

  document.querySelector( ".cta_logout" ).addEventListener("click", function(e) {
    e.preventDefault;
    window.open('https://www.google.com/', '_blank');
  });


}); // End Ready

var buttons = document.querySelectorAll(".toggle-button");
var modal = document.querySelector("#modal");

[].forEach.call(buttons, function (button) {
  button.addEventListener("click", function () {
    modal.classList.toggle("off");
  });
});
/*
$(".cta_previews").hover(function() {
	$(".cta_previews").stop(true).animate(
		{ opacity: ".2" }, 2000);
	}, function() {
	$(".cta_previews").stop(true).animate(
		{ opacity: "1" }, 2000);
	});


  The old way =>
  $(".cta_previews_fp").hover(function() {
  document.getElementById("sitePreviewFP").style.visibility = "visible";
  }, function() {
  document.getElementById("sitePreviewFP").style.visibility = "hidden";
  });

  */