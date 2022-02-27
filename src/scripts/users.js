// Import Classes
import { Student } from './classes/Student.js';
// Import Modules
import { get, add } from './db_methods.js';
import { display } from './util_methods.js';

// Abstract out "document.querySelector()" and "document.getElementById()"
// Not Sure this is preferred though.  
var $id = function( id ) { return document.getElementById( id ); };
var $sel= function( id ) { return document.querySelector( id ); };

/* OR can do
 function $( id ) { return document.getElementById( id ); };
 function $$( id ) { return document.querySelector( id ); };
*/

document.addEventListener("DOMContentLoaded", function() {  //ES6 version of $(document).ready

  $id("nav-item-container").style.visibility = "visible";  //This is ES6 = No '#'
  $sel(".site_p_students").style.opacity = 0;
  $sel(".site_p_teachers").style.opacity = 0;
  $sel(".site_p_parents").style.opacity = 0;
  $sel(".site_p_admin").style.opacity = 0;
  $sel(".data-display").style.opacity = 0;

//TO ES6 NOTES ==> .toggleClass is now .classList.toggle // $ is now document.querySelector // Removed .stop(true) but did not replace it - do I need to?
//Just use <a href> or need an EventListener??

document.querySelector(".cta_teachers").addEventListener("mouseover", function() {
  document.querySelector(".site_p_teachers").classList.contains("fade-out") 
  ? document.querySelector(".site_p_teachers").classList.replace("fade-out", "fade-in") 
  : document.querySelector(".site_p_teachers").classList.add("fade-in");
  }, false); 

  document.querySelector(".cta_teachers").addEventListener("mouseleave", function() {
    document.querySelector(".site_p_teachers").classList.contains("fade-in") 
    ? document.querySelector(".site_p_teachers").classList.replace("fade-in", "fade-out") 
    : document.querySelector(".site_p_teachers").classList.add("fade-out");
    }, false);
  
  document.querySelector(".cta_teachers").addEventListener("click", function() {
    console.log('clicked')
    let teas = get('/teachers').then(response => display(response, '.data-display'));
    console.log('teas =' + stus)
  });

  document.querySelector(".cta_parents").addEventListener("mouseover", function() {
    document.querySelector(".site_p_parents").classList.contains("fade-out") 
    ? document.querySelector(".site_p_parents").classList.replace("fade-out", "fade-in") 
    : document.querySelector(".site_p_parents").classList.add("fade-in");
    }, false); 

document.querySelector(".cta_parents").addEventListener("mouseleave", function() {
  document.querySelector(".site_p_parents").classList.contains("fade-in") 
  ? document.querySelector(".site_p_parents").classList.replace("fade-in", "fade-out") 
  : document.querySelector(".site_p_parents").classList.add("fade-out");
  }, false);

  document.querySelector(".cta_parents").addEventListener("click", function() {
    window.open('./assessments.html', '_blank');
});

document.querySelector(".cta_students").addEventListener("mouseover", function() {
  document.querySelector(".site_p_students").classList.contains("fade-out") 
  ? document.querySelector(".site_p_students").classList.replace("fade-out", "fade-in") 
  : document.querySelector(".site_p_students").classList.add("fade-in");
  }, false); 

document.querySelector(".cta_students").addEventListener("mouseleave", function() {
  document.querySelector(".site_p_students").classList.contains("fade-in") 
  ? document.querySelector(".site_p_students").classList.replace("fade-in", "fade-out") 
  : document.querySelector(".site_p_students").classList.add("fade-out");
  }, false);

  document.querySelector(".cta_students").addEventListener("click", function() {
    console.log('clicked')
    let stus = get('/students').then(response => display(response, '.data-display'));
    console.log('stus =' + stus)
    //Display the Students in a display pane
  });

  document.querySelector(".cta_add-stu").addEventListener("click", function() {
    let stuid = document.getElementById("txt-stuid").value;
    let fname = document.getElementById("txt-fname").value;
    let lname = document.getElementById("txt-lname").value;

    let addedStu = add([stuid, fname, lname], '/students')
    .then(response => alert('added = ' + addedStu + "response = " + response));
    console.log('addedStu-' + addedStu)
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

