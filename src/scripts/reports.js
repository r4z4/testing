// Import Classes

// Import Modules

import db_calls from './db_calls.mjs';

document.addEventListener("DOMContentLoaded", function() {  //ES6 version of $(document).ready

  document.getElementById("nav-item-container").style.visibility = "visible";  //This is ES6 = No '#'
  document.querySelector(".site_p_ranks").style.opacity = 0;
  document.querySelector(".site_p_charts").style.opacity = 0;
  document.querySelector(".site_p_grades").style.opacity = 0;
  document.querySelector(".stu-display").style.opacity = 0;

//TO ES6 NOTES ==> .toggleClass is now .classList.toggle // $ is now document.querySelector // Removed .stop(true) but did not replace it - do I need to?
//Just use <a href> or need an EventListener??

document.querySelector(".cta_charts").addEventListener("mouseover", function() {
  document.querySelector(".site_p_charts").classList.contains("fade-out") 
  ? document.querySelector(".site_p_charts").classList.replace("fade-out", "fade-in") 
  : document.querySelector(".site_p_charts").classList.add("fade-in");
  }, false); 

  document.querySelector(".cta_charts").addEventListener("mouseleave", function() {
    document.querySelector(".site_p_charts").classList.contains("fade-in") 
    ? document.querySelector(".site_p_charts").classList.replace("fade-in", "fade-out") 
    : document.querySelector(".site_p_charts").classList.add("fade-out");
    }, false);
  
  document.querySelector(".cta_charts").addEventListener("click", function() {
    window.open('./messaging.html', '_blank');
  });

  document.querySelector(".cta_ranks").addEventListener("mouseover", function() {
    document.querySelector(".site_p_ranks").classList.contains("fade-out") 
    ? document.querySelector(".site_p_ranks").classList.replace("fade-out", "fade-in") 
    : document.querySelector(".site_p_ranks").classList.add("fade-in");
    }, false); 

document.querySelector(".cta_ranks").addEventListener("mouseleave", function() {
  document.querySelector(".site_p_ranks").classList.contains("fade-in") 
  ? document.querySelector(".site_p_ranks").classList.replace("fade-in", "fade-out") 
  : document.querySelector(".site_p_ranks").classList.add("fade-out");
  }, false);

  document.querySelector(".cta_ranks").addEventListener("click", function() {
    window.open('./assessments.html', '_blank');
});

document.querySelector(".cta_grades").addEventListener("mouseover", function() {
  document.querySelector(".site_p_grades").classList.contains("fade-out") 
  ? document.querySelector(".site_p_grades").classList.replace("fade-out", "fade-in") 
  : document.querySelector(".site_p_grades").classList.add("fade-in");
  }, false); 

document.querySelector(".cta_grades").addEventListener("mouseleave", function() {
  document.querySelector(".site_p_grades").classList.contains("fade-in") 
  ? document.querySelector(".site_p_grades").classList.replace("fade-in", "fade-out") 
  : document.querySelector(".site_p_grades").classList.add("fade-out");
  }, false);

  document.querySelector(".cta_grades").addEventListener("click", function() {
    console.log('clicked')
    let grades = getStudents().then(response => displayStudents(response));
    console.log('grades-' + grades)
    //Display the Students in a display pane
  });

  document.querySelector(".cta_add-stu").addEventListener("click", function() {
    let stuid = document.getElementById("txt-stuid").value;
    let fname = document.getElementById("txt-fname").value;
    let lname = document.getElementById("txt-lname").value;

    let addedStu = addStudent(stuid, fname, lname)
    .then(response => alert('added = ' + addedStu + "response = " + response));
    console.log('addedStu-' + addedStu)
    //Display the Students in a display pane
  });

  document.querySelector(".cta_exit").addEventListener("click", function() {
    window.open('./home.html', '_self');
  });

  document.querySelector(".cta_home").addEventListener("click", function() {
    window.open('./home.html', '_self');
  });

  document.querySelector( ".cta_logout" ).addEventListener("click", function(e) {
    e.preventDefault;
    window.open('https://www.google.com/', '_blank');
  });


}); // End Ready



    const getStudents = async() => {
      try{
        const response = await fetch("http://localhost:3001/students")
        const jsonData = await response.json()
        console.log('getCases' + jsonData); 
        return(jsonData);
      } catch (err) {
        console.error(err.message)
      }
    }
//failing to fetch
    const addStudent = async (stuid, fname, lname) => {
        try {
          const data = { stuid, fname, lname };
          const response = await fetch("http://localhost:3001/students", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
            mode: 'cors',
            body: JSON.stringify(data)
          })
          console.log('addStudent' + response);
          //alert('Sucessfully Added Student # ' + stuid);
          window.location.reload();
          //Window.location = "/"; //This will make it refresh and show changes - instead of console.log
        } catch (err) {
          console.error(err.message);
          //alert('Unable to Add Student # ' + stuid + '; Message = ' + err.message);
        }
      }

    function displayStudents(students) {
      document.querySelector(".stu-display").style.opacity = 1;
      console.log('dS = ' + students);
      document.querySelector(".stu-display").innerHTML = JSON.stringify(students);
    }

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