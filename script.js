// Theme Toggle Function
function toggleTheme() {
  const body = document.body;
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark'); // Save theme preference
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light'); // Save theme preference
  }
}

// Apply saved theme on page load
function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light'; // Default to light theme
  document.body.classList.add(savedTheme + '-theme');
}

// Apply saved theme when the page loads
applySavedTheme();

// Modal Interaction
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');
const enlargeModalBtn = document.getElementById('enlarge-modal');
const fullscreenModalBtn = document.getElementById('fullscreen-modal');

// Open Modal
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Close Modal
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  modalContent.classList.remove('enlarged', 'fullscreen'); // Reset modal size
});

// Enlarge Modal
enlargeModalBtn.addEventListener('click', () => {
  modalContent.classList.toggle('enlarged');
  if (modalContent.classList.contains('fullscreen')) {
    modalContent.classList.remove('fullscreen');
  }
});

// Fullscreen Modal
fullscreenModalBtn.addEventListener('click', () => {
  modalContent.classList.toggle('fullscreen');
  if (modalContent.classList.contains('enlarged')) {
    modalContent.classList.remove('enlarged');
  }
});

// Close Modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    modalContent.classList.remove('enlarged', 'fullscreen'); // Reset modal size
  }
});