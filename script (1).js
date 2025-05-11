function scrollToContent() {
  document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.timeline-card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateX(0)';
    }, 200 * index);
  });
});