// Javascript Code
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".nav_link");

  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      // Remove active class from all links
      navLinks.forEach(link => {
        link.classList.remove("active");
      });

      // Add active class to the clicked link
      this.classList.add("active");
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".nav_link");
  const sections = document.querySelectorAll(".section");

  // Function to update active link
  function updateActiveLink() {
    let scrollPosition = window.scrollY;

    sections.forEach(section => {
      if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
        let sectionId = section.getAttribute("id");
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href").slice(1) === sectionId) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // Scroll event listener
  window.addEventListener("scroll", updateActiveLink);

  // Click event listener for smooth scrolling
  navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      let targetId = this.getAttribute("href");
      let targetPosition = document.querySelector(targetId).offsetTop;
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    });
  });

  // Initial call to update active link
  updateActiveLink();
});



// circle,rectangle move
// JavaScript code for moving animation of circles
// Selecting the circles
const circle1 = document.getElementById('circle1');
const recta1 = document.getElementById('recta1');
const circle3 = document.getElementById('circle3');
const recta2 = document.getElementById('recta2');

// Function to animate circles
function animateCircles() {
  // Define animation properties
  const animationProperties = {
    duration: 2000, // Animation duration in milliseconds
    iterations: Infinity, // Number of times to repeat the animation (infinite)
    direction: 'alternate', // Animation direction (alternates back and forth)
    easing: 'ease-in-out' // Animation easing function
  };

  // Animation keyframes for circle1
  const circle1Keyframes = [
    { transform: 'translateY(0)' }, // Initial position
    { transform: 'translateY(100px)' }, // Final position
  ];

  // Animation keyframes for recta1
  const recta1Keyframes = [
    { transform: 'translateX(0)' }, // Initial position
    { transform: 'translateY(-50px)' }, // Final position
  ];

  // Animation keyframes for circle3
  const circle3Keyframes = [
    { transform: 'translateY(0)' }, // Initial position
    { transform: 'translateY(-70px)' }, // Final position
  ];

  // Animation keyframes for recta2
  const recta2Keyframes = [
    { transform: 'translateY(0)' }, // Initial position
    { transform: 'translateX(-70px)' }, // Final position
  ];

  // Applying animation to each circle
  circle1.animate(circle1Keyframes, animationProperties);
  recta1.animate(recta1Keyframes, animationProperties);
  circle3.animate(circle3Keyframes, animationProperties);
  recta2.animate(recta2Keyframes, animationProperties);
}

// Call the function to start the animation
animateCircles();

// awesome toggler start
document.addEventListener("DOMContentLoaded", function() {
  const monthlyButton = document.querySelector(".monthly");
  const annualyButton = document.querySelector(".annualy");
  const monthlyItems = document.querySelectorAll(".monthly");
  const annualItems = document.querySelectorAll(".annualy");

  // Hide extra monthly items initially
  for (let i = 1; i < annualItems.length; i++) {
    annualItems[i].style.display = "none";
  }

  annualyButton.addEventListener("click", function() {
    // Show annual items
    monthlyItems.forEach(item => {
      item.style.display = "block";
    });
    // Hide extra monthly items
    for (let i = 2; i < monthlyItems.length; i++) {
      monthlyItems[i].style.display = "none";
    }

    annualyButton.classList.add("active");
    monthlyButton.classList.remove("active");
  });

  monthlyButton.addEventListener("click", function() {
    // Show two monthly items
    for (let i = 0; i < 2; i++) {
      monthlyItems[i].style.display = "block";
    }
    // Hide extra monthly items
    for (let i = 2; i < annualItems.length; i++) {
      annualItems[i].style.display = "none";
    }

    monthlyButton.classList.add("active");
    annualyButton.classList.remove("active");
  });
});


// awesome toggler end
// header sticky padding start
window.onscroll = function() {stickyHeader()};

  var header = document.getElementById("header");
  var sticky = header.offsetTop;

  function stickyHeader() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      header.style.padding = "15px 0"; // Change padding when header becomes sticky
    } else {
      header.classList.remove("sticky");
      header.style.padding = "35px 0"; // Reset padding when header is not sticky
    }
  }
// header sticky padding end
// Jquery Code
$(document).ready(function(){

// show more start
// items to show
var increment = 4;

var startFilter = 0;
var endFilter = increment;

// item selector
var $this = $('.items');

var elementLength = $this.find('div').length;
$('.listLength').text(elementLength);

// show/hide the Load More button
if (elementLength > 2) {
  $('.buttonToogle').show();
}

$('.items .item').slice(startFilter, endFilter).addClass('shown');
$('.shownLength').text(endFilter);
$('.items .item').not('.shown').hide();
$('.buttonToogle .showMore').on('click', function() {
  if (elementLength > endFilter) {
    startFilter += increment;
    endFilter += increment;
    $('.items .item').slice(startFilter, endFilter).not('.shown').addClass('shown').toggle(500);
    $('.shownLength').text((endFilter > elementLength) ? elementLength : endFilter);
    if (elementLength <= endFilter) {
        $(this).remove();
    }
  }
});
// show more end
// mix it up start
// mixitup
     var mixer = mixitup('#mixitup_booking', {
    animation: {
        duration: 300
    }
});
// mix it up end

     // scrool top start
     $("#scroll-to-top").illBeBack({
      // Styling options

        size     : 36

     });
     // scrool top end


});