// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        // stagger siblings
        const siblings = e.target.parentElement.querySelectorAll(".reveal");
        siblings.forEach((s, i) => {
          s.style.transitionDelay = `${i * 0.1}s`;
        });
      }
    });
  },
  { threshold: 0.1 },
);
reveals.forEach((r) => observer.observe(r));

// Form submit mock
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = "¡Mensaje enviado! ✓";
  btn.style.background = "#4caf88";
  setTimeout(() => {
    btn.textContent = "Enviar mensaje";
    btn.style.background = "";
    e.target.reset();
  }, 3000);
}
