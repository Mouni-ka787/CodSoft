// Sticky header with smooth effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if(window.scrollY > 50) {
        header.style.backgroundColor = '#111827';
    } else {
        header.style.backgroundColor = '#1f2937';
    }
});

// Smooth scroll for nav links
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Typewriter effect for hero section
const heroText = document.getElementById('hero-text');
const text = "Welcome to Our Professional Service";
let index = 0;

function typeWriter() {
    if(index < text.length){
        heroText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 80);
    }
}
typeWriter();
document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.getElementById("hero-text");
    const text = heroText.textContent;
    heroText.textContent = ""; // clear original text
  
    let i = 0;
    function typeEffect() {
      if (i < text.length) {
        const span = document.createElement("span");
        span.textContent = text[i];
        span.style.opacity = "0";
        heroText.appendChild(span);
  
        setTimeout(() => {
          span.style.transition = "opacity 0.3s ease";
          span.style.opacity = "1";
        }, 50);
  
        i++;
        setTimeout(typeEffect, 120); // typing speed
      }
    }
  
    typeEffect();
  });
  
// Form validation
document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!name || !email || !message){
        alert("Please fill all fields!");
        return;
    }
    alert(`Thank you for contacting us, ${name}!`);
    this.reset();
});

