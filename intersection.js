function load(target, count) {
  for(let i = count - 10 + 1; i <= count; i++) {
    const el = document.createElement('div');
    el.className = 'el';
    el.innerText = `${i}`;
    el.dataset.ord = `${i}`;

    target.before(el);
  }
}

const last = document.querySelector('#last');
// const subLast = document.querySelector('#sub-last');

load(last, 10);
// load(subLast, 10);

const options = {
  root: null,
  // root: document.getElementById('sub'),
  rootMargin: '0px',
  threshold: 0.0
}

const observer = new IntersectionObserver((entries, observe) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const elements = document.querySelectorAll('.el');
      const lastEl = Array.from(elements).pop();
      const ord = parseInt(lastEl.dataset.ord, 10);

      load(entry.target,ord + 10);
    }
  })
}, options);

observer.observe(last);
// observer.observe(subLast);



