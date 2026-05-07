// Júlia Costa Lash Designer — Catálogo
// Entry point principal

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll para links internos
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href') as string);
      target?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Animação de entrada nos cards
  const cards = document.querySelectorAll<HTMLElement>('.card');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    observer.observe(card);
  });

  console.log('Júlia Costa Lash Designer — Catálogo carregado.');
});
