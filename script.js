// ===== NAVBAR TOGGLE =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===== LIGHTBOX =====
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

document.querySelectorAll(".gallery-item").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = "none";
  }
});

// ===== SCROLL ANIMATION =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("fade-in");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll("section, .card, .step").forEach(el => {
  observer.observe(el);
});

// Add fade-in effect
const style = document.createElement("style");
style.textContent = `
.fade-in {
  opacity: 1 !important;
  transform: translateY(0) !important;
  transition: all 0.8s ease;
}
section, .card, .step {
  opacity: 0;
  transform: translateY(40px);
}
`;
document.head.appendChild(style);
