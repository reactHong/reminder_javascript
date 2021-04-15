const horzLine = document.querySelector('.horzLine');
const vertLine = document.querySelector('.vertLine');
const target = document.querySelector('.target');
const coordinate = document.querySelector('.coordinate');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  horzLine.style.top = `${y}px`;
  vertLine.style.left = `${x}px`;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  coordinate.innerHTML = `(${x}, ${y})`;
});
