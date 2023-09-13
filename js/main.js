const page = document.querySelector('body');

page.addEventListener('click', (evt) => {
  const target = evt.target;
  const isButton = target.classList.contains('button');
  const isSvg = target.tagName === 'svg';
  const isPath = target.tagName === 'path';
  const isSpan = target.tagName === 'SPAN';

  if (
    (isButton || isSvg || isPath)
    && !target.classList.contains('button--open')
  ) {
    const closestButton = target.closest('.button');
    closestButton.classList.add('button--open');
  } else if (
    (target.classList.contains('svg-container-open') || isSpan)
    && target.closest('.button').classList.contains('button--open')
  ) {
    const closestButton = target.closest('.button');
    closestButton.classList.remove('button--open');
  } else if (target.classList.contains('button--open')) {
    target.classList.remove('button--open');
  } else if (target.tagName === 'BODY') {
    const openButtons = document.querySelectorAll('.button--open');
    openButtons.forEach((button) => {
      button.classList.remove('button--open');
    });
  }
});
