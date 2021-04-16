const horzLine = document.querySelector('.horzLine');
const vertLine = document.querySelector('.vertLine');
const target = document.querySelector('.target');
const coordinate = document.querySelector('.coordinate');

window.addEventListener('load', () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    console.log(targetHalfWidth);
    console.log(targetHalfHeight);
    horzLine.style.transform = `translateY(${y}px)`;
    vertLine.style.transform = `translateX(${x}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHeight
    }px)`;
    coordinate.innerHTML = `(${x}, ${y})`;
  });
});
