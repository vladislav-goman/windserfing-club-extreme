const anchorlinks = document.querySelectorAll('a[href^="#"]');
for (let item of anchorlinks) {
  // relitere
  item.addEventListener('click', (e) => {
    const hashValue = item.getAttribute('href');
    const target = document.querySelector(hashValue);
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    history.pushState(null, null, hashValue);
    e.preventDefault();
  });
}
