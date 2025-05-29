const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  }
});

// On page load, apply saved theme or default to dark mode
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.add('dark-mode'); // default dark
  }
});
