document.addEventListener("DOMContentLoaded", function() {  //ES6 version of $(document).ready
  document.getElementById("nav-item-container").style.visibility = "visible";  //This is ES6 = No '#'
  document.querySelector(".site_p_ass").style.opacity = 0;
  document.querySelector(".site_p_mess").style.opacity = 0;
  document.querySelector(".site_p_rep").style.opacity = 0;


//TO ES6 NOTES ==> .toggleClass is now .classList.toggle // $ is now document.querySelector // Removed .stop(true) but did not replace it - do I need to?
//Just use <a href> or need an EventListener??

//Messages Button
document.querySelector(".cta_mess").addEventListener("mouseover", function() {
  document.querySelector(".site_p_mess").classList.contains("fade-out") 
  ? document.querySelector(".site_p_mess").classList.replace("fade-out", "fade-in") 
  : document.querySelector(".site_p_mess").classList.add("fade-in");
  }, false); 

  document.querySelector(".cta_mess").addEventListener("mouseleave", function() {
    document.querySelector(".site_p_mess").classList.contains("fade-in") 
    ? document.querySelector(".site_p_mess").classList.replace("fade-in", "fade-out") 
    : document.querySelector(".site_p_mess").classList.add("fade-out");
    }, false);
  
  document.querySelector(".cta_mess").addEventListener("click", function() {
    window.open('./messaging.html', '_blank');
  });

  //Assessments Button
  document.querySelector(".cta_ass").addEventListener("mouseover", function() {
    document.querySelector(".site_p_ass").classList.contains("fade-out") 
    ? document.querySelector(".site_p_ass").classList.replace("fade-out", "fade-in") 
    : document.querySelector(".site_p_ass").classList.add("fade-in");
    }, false); 

document.querySelector(".cta_ass").addEventListener("mouseleave", function() {
  document.querySelector(".site_p_ass").classList.contains("fade-in") 
  ? document.querySelector(".site_p_ass").classList.replace("fade-in", "fade-out") 
  : document.querySelector(".site_p_ass").classList.add("fade-out");
  }, false);

  document.querySelector(".cta_ass").addEventListener("click", function() {
    window.open('./assessments.html', '_blank');
});

//Reports Button
document.querySelector(".cta_rep").addEventListener("mouseover", function() {
  document.querySelector(".site_p_rep").classList.contains("fade-out") 
  ? document.querySelector(".site_p_rep").classList.replace("fade-out", "fade-in") 
  : document.querySelector(".site_p_rep").classList.add("fade-in");
  }, false); 

document.querySelector(".cta_rep").addEventListener("mouseleave", function() {
  document.querySelector(".site_p_rep").classList.contains("fade-in") 
  ? document.querySelector(".site_p_rep").classList.replace("fade-in", "fade-out") 
  : document.querySelector(".site_p_rep").classList.add("fade-out");
  }, false);

  document.querySelector(".cta_rep").addEventListener("click", function() {
    window.open('./reports.html', '_blank');
});

//Users Button
document.querySelector(".cta_users").addEventListener("mouseover", function() {
  document.querySelector(".site_p_users").classList.contains("fade-out") 
  ? document.querySelector(".site_p_users").classList.replace("fade-out", "fade-in") 
  : document.querySelector(".site_p_users").classList.add("fade-in");
  }, false); 

document.querySelector(".cta_users").addEventListener("mouseleave", function() {
  document.querySelector(".site_p_users").classList.contains("fade-in") 
  ? document.querySelector(".site_p_users").classList.replace("fade-in", "fade-out") 
  : document.querySelector(".site_p_users").classList.add("fade-out");
  }, false);

  document.querySelector(".cta_users").addEventListener("click", function() {
    window.open('./users.html', '_blank');
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