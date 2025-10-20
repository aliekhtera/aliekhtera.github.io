const modal = document.getElementById('modal');
const iframe = modal.querySelector('iframe');
const closeBtn = document.getElementById('close-btn');
const openButtons = document.querySelectorAll('.btn-live');

// Open modal and load correct page
openButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const url = btn.getAttribute('data-url');
    iframe.src = url;
    modal.classList.remove('hidden');
  });
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  iframe.src = ""; // clear iframe
});

// Close when clicking outside the box
modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.add('hidden');
    iframe.src = "";
  }
});
