// Year
document.getElementById('year').textContent = new Date().getFullYear();

const workCarousel = document.querySelector('.work-carousel');
if (workCarousel) {
  const track = workCarousel.querySelector('#work-cards');
  const cards = Array.from(track.querySelectorAll('.card--work'));
  const previous = workCarousel.querySelector('#work-prev');
  const next = workCarousel.querySelector('#work-next');
  const position = workCarousel.querySelector('#work-position');
  const mobile = window.matchMedia('(max-width: 700px)');
  let index = 0;

  function showWork(target, wrap = false) {
    const visible = mobile.matches ? 1 : 2;
    const lastStart = Math.max(0, cards.length - visible);
    index = wrap ? (target + lastStart + 1) % (lastStart + 1) : Math.min(target, lastStart);
    const first = index + 1;
    const last = Math.min(cards.length, index + visible);

    track.style.height = `${Math.max(...cards.slice(index, index + visible).map(card => card.offsetHeight))}px`;
    track.scrollLeft = cards[index].offsetLeft - cards[0].offsetLeft;
    position.textContent = first === last ? `${first} of ${cards.length}` : `${first}-${last} of ${cards.length}`;
  }

  previous.addEventListener('click', () => showWork(index - 1, true));
  next.addEventListener('click', () => showWork(index + 1, true));
  window.addEventListener('resize', () => showWork(index));
  workCarousel.classList.add('is-ready');
  showWork(0);
}
