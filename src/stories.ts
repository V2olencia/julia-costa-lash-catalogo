// Júlia Costa Lash Designer — Stories
// Entry point da página de stories

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll<HTMLElement>('.story-card');
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

  console.log('Júlia Costa Lash Designer — Stories carregado.');
});
