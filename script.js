// hamburger menu js code 

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");

  hamburger.textContent =
    nav.classList.contains("active") ? "✖" : "☰";
});













// DIFFERENT ANIMATION FOR EACH SECTION

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document
  .querySelectorAll(".fade, .slide, .zoom, .rotate")
  .forEach(el => observer.observe(el));







// hero section js code 

// ===== RAIN EFFECT =====
  const rainContainer = document.querySelector('.rain');
  const dropsCount = 120;

  for (let i = 0; i < dropsCount; i++) {
    const drop = document.createElement('div');
    drop.className = 'drop';
    drop.style.left = Math.random() * 100 + 'vw';
    drop.style.animationDuration = 0.5 + Math.random() * 0.5 + 's';
    drop.style.animationDelay = Math.random() * 2 + 's';
    drop.style.height = 10 + Math.random() * 20 + 'px';
    rainContainer.appendChild(drop);
  }

  // ===== ALTERNATING HERO BLOCKS =====
  const block1 = document.getElementById('block1');
  const block2 = document.getElementById('block2');
  let activeIndex = 0;

  setInterval(() => {
    if (activeIndex === 0) {
      block1.classList.add('active');
      block2.classList.remove('active');
      activeIndex = 1;
    } else {
      block2.classList.add('active');
      block1.classList.remove('active');
      activeIndex = 0;
    }
  }, 2000); // change every 2 seconds











// Animate steps when they appear in viewport
const steps = document.querySelectorAll('.step');

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 100
  );
}

function animateSteps() {
  steps.forEach(step => {
    if (isInViewport(step)) {
      step.classList.add('active');
    }
  });
}

window.addEventListener('scroll', animateSteps);
window.addEventListener('load', animateSteps);











// Animate cards on scroll
const cards = document.querySelectorAll('.card');

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 100;
}

function animateCards() {
  cards.forEach(card => {
    if (isInViewport(card)) {
      card.classList.add('active');
    }
  });
}

window.addEventListener('scroll', animateCards);
window.addEventListener('load', animateCards);

// Counter animation
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 100; // speed

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});







// testimonial js code
const testimonials = [
  {
    text: "Their strategies helped us scale faster than expected.",
    name: "Ravi Kumar",
    role: "Founder, Growth Labs",
    img: "https://via.placeholder.com/60"
  },
  {
    text: "We saw a massive increase in leads within just 3 months.",
    name: "Anita Sharma",
    role: "Marketing Head, TechCorp",
    img: "https://via.placeholder.com/60"
  },
  {
    text: "Professional team with clear goals and real results.",
    name: "Vikram Patel",
    role: "CEO, Digital Spark",
    img: "https://via.placeholder.com/60"
  }
];

let index = 0;

const reviewText = document.getElementById("reviewText");
const authorName = document.getElementById("authorName");
const authorRole = document.getElementById("authorRole");
const authorImg = document.getElementById("authorImg");

function updateTestimonial() {
  reviewText.style.animation = "none";
  void reviewText.offsetWidth; // reset animation
  reviewText.style.animation = "fadeSlide 0.6s ease";

  reviewText.textContent = testimonials[index].text;
  authorName.textContent = testimonials[index].name;
  authorRole.textContent = testimonials[index].role;
  authorImg.src = testimonials[index].img;
}

document.getElementById("next").onclick = () => {
  index = (index + 1) % testimonials.length;
  updateTestimonial();
};

document.getElementById("prev").onclick = () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
};

// Auto slide every 5 seconds
setInterval(() => {
  index = (index + 1) % testimonials.length;
  updateTestimonial();
}, 5000);

