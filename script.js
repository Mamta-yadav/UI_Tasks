// Get all boxes
const boxes = document.querySelectorAll('.box');
const template = document.querySelector('#option-template');

// Add option rows based on data-units
boxes.forEach((box) => {
  const units = box.dataset.units;
  const options = box.querySelector('.options');

  // Add the required number of option rows
  for (let i = 0; i < units; i++) {
    const clone = template.content.cloneNode(true);
    options.appendChild(clone);
  }
});

// Handle box selection
boxes.forEach((box) => {
  box.addEventListener('click', () => {
    boxes.forEach((b) => b.classList.remove('active'));
    box.classList.add('active');
    box.querySelector('input[type="radio"]').checked = true;
  });
});

// Set initial active state
document
  .querySelector('input[checked]')
  .closest('.box')
  .classList.add('active');
