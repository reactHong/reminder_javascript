window.addEventListener('load', () => {
  console.log('load');

  const body = document.querySelector('body');
  const horzLine = document.querySelector('.horzLine');
  const vertLine = document.querySelector('.vertLine');
  const target = document.querySelector('.target');
  const coordinate = document.querySelector('.coordinate');

  const bodyRect = body.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();

  const targetLeft = bodyRect.width / 2 - targetRect.width / 2;
  const targetTop = bodyRect.height / 2 - targetRect.height / 2;
  target.style.left = targetLeft + 'px';
  target.style.top = targetTop + 'px';

  console.log(bodyRect);
  console.log(targetRect);
  console.log(target.style);

  body.addEventListener('mousemove', (e) => {
    // console.log(e.clientX, e.clientY);
    horzLine.style.top = e.clientY + 'px';
    vertLine.style.left = e.clientX + 'px';
    target.style.left = e.clientX - targetRect.width / 2 + 'px';
    target.style.top = e.clientY - targetRect.height / 2 + 'px';
    coordinate.innerHTML = `(${e.clientX}, ${e.clientY})`;
  });
});
