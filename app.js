const d = document;

const panel = d.querySelectorAll('.panel')


panel.forEach(element => element.addEventListener('click', () => element.classList.toggle('open')))
panel.forEach(element => element.addEventListener('transitionend', (e) => e.propertyName.includes('flex') ? element.classList.toggle('open-active') : ''))
