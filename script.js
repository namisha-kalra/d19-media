
// SCROLL ANIMATION
const elements = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if(position < window.innerHeight - 100){
      el.classList.add('show');
    }
  });
});

// NAVBAR EFFECT
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// LOADER
window.onload = () => {
  const loader = document.getElementById("loader");
  if(loader){
    loader.style.display = "none";
  }
};