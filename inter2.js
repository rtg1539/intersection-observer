const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
}

const observer = new IntersectionObserver((entries, observe) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const ord = parseInt(target.dataset.ord, 10);
      const el = document.createElement('div');

      el.className = 'el';
      el.innerText = `${ord + 1}`;
      el.dataset.ord = `${ord + 1}`;

      entry.boundingClientRect
      target.after(el);

      observer.observe(el);
      observer.unobserve(target);
    }
  })
}, options);

const el = document.querySelector('.el');

observer.observe(el);



