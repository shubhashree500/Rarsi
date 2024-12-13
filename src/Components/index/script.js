// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
  // Get the 'dynamic-word' element and the scroller
  const dynamicWordElement = document.getElementById('dynamic-word');
  const scroller = document.getElementById("scroller");

  // Array of words to cycle through in the hero section
  const words = ["Presence", "Identity", "Strategy", "Brand", "Impact"];
  let currentIndex = 0;

  // Function to update the dynamic word
  function updateDynamicWord() {
    dynamicWordElement.textContent = words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length; // Cycle through the words
  }

  // Initially update the dynamic word and set interval for updates every 3 seconds
  updateDynamicWord();
  setInterval(updateDynamicWord, 3000);

  // Intersection Observer for drawing the line after scrolling to paragraph section
  const line = document.getElementById('draw-line');
  const paragraphText = document.getElementById('paragraph-text');

  // Create an intersection observer to detect when the paragraph element is in the viewport
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // If the paragraph is in view, add the active class to the line
        line.classList.add('active');
        observer.unobserve(entry.target); // Stop observing once the effect is applied
      }
    });
  }, {
    threshold: 0.5 // Trigger when 50% of the element is in view
  });

  // Start observing the paragraph element for the line drawing
  observer.observe(paragraphText);

});
document.querySelector('#contact h2').addEventListener('mouseenter', function() {
  this.classList.add('hovered');
});

document.querySelector('#contact h2').addEventListener('mouseleave', function() {
  this.classList.remove('hovered');
});

// JavaScript to toggle the navbar on mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// JavaScript for toggling navbar visibility
function toggleNavbar() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}