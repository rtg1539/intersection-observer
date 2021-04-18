const last = document.querySelector('#last');

function load(count) {
  for(let i = count - 10 + 1; i <= count; i++) {
    const el = document.createElement('div');
    el.style.cssText = 'height: 100px; border: solid 1px; margin: 10px';
    el.className = 'el';
    el.innerText = i;
    el.setAttribute('ord', i);

    last.before(el);
  }
}

load(10);

let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const lastChild = Array.from(document.querySelectorAll('.el')).pop();
    if (entry.intersectionRatio) {
      const ord = parseInt(lastChild.getAttribute('ord'), 10);
      load(ord + 10);
    }
  })
});

observer.observe(last);



