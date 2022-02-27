// Import Classes
import { Test } from './classes/Test.js';
// Import Modules

document.addEventListener("DOMContentLoaded", function() {  //ES6 version of $(document).ready
  document.getElementById("nav-item-container").style.visibility = "visible";  //This is ES6 = No '#'
  document.querySelector(".site_p_tests").style.opacity = 0;
  document.querySelector(".site_p_quizzes").style.opacity = 0;
  document.querySelector(".site_p_drills").style.opacity = 0;


//TO ES6 NOTES ==> .toggleClass is now .classList.toggle // $ is now document.querySelector // Removed .stop(true) but did not replace it - do I need to?
//Just use <a href> or need an EventListener??

document.querySelector(".cta_quizzes").addEventListener("mouseover", function() {
  document.querySelector(".site_p_quizzes").classList.contains("fade-out") 
  ? document.querySelector(".site_p_quizzes").classList.replace("fade-out", "fade-in") 
  : document.querySelector(".site_p_quizzes").classList.add("fade-in");
  }, false); 

  document.querySelector(".cta_quizzes").addEventListener("mouseleave", function() {
    document.querySelector(".site_p_quizzes").classList.contains("fade-in") 
    ? document.querySelector(".site_p_quizzes").classList.replace("fade-in", "fade-out") 
    : document.querySelector(".site_p_quizzes").classList.add("fade-out");
    }, false);
  
  document.querySelector(".cta_quizzes").addEventListener("click", function() {
    window.open('./messaging.html', '_blank');
  });

  document.querySelector(".cta_tests").addEventListener("mouseover", function() {
    document.querySelector(".site_p_tests").classList.contains("fade-out") 
    ? document.querySelector(".site_p_tests").classList.replace("fade-out", "fade-in") 
    : document.querySelector(".site_p_tests").classList.add("fade-in");
    }, false); 

document.querySelector(".cta_tests").addEventListener("mouseleave", function() {
  document.querySelector(".site_p_tests").classList.contains("fade-in") 
  ? document.querySelector(".site_p_tests").classList.replace("fade-in", "fade-out") 
  : document.querySelector(".site_p_tests").classList.add("fade-out");
  }, false);

  document.querySelector(".cta_tests").addEventListener("click", function() {
    let test = new Test('test', 'Test', [{'number': '1', 'text': 'What is your name?'}, {'number': '2', 'text': 'What is your blouse?'}], 4, true);
    console.log(test.type);
    test.generateTest();
});

document.querySelector(".cta_drills").addEventListener("mouseover", function() {
  document.querySelector(".site_p_drills").classList.contains("fade-out") 
  ? document.querySelector(".site_p_drills").classList.replace("fade-out", "fade-in") 
  : document.querySelector(".site_p_drills").classList.add("fade-in");
  }, false); 

document.querySelector(".cta_drills").addEventListener("mouseleave", function() {
  document.querySelector(".site_p_drills").classList.contains("fade-in") 
  ? document.querySelector(".site_p_drills").classList.replace("fade-in", "fade-out") 
  : document.querySelector(".site_p_drills").classList.add("fade-out");
  }, false);

  document.querySelector(".cta_drills").addEventListener("click", function() {
    window.open('./reports.html', '_blank');
});

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