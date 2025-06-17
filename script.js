// script.js

// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Dark mode toggle button
const darkModeBtn = document.createElement('button');
darkModeBtn.textContent = '🌙 Toggle Dark Mode';
darkModeBtn.style.position = 'fixed';
darkModeBtn.style.top = '10px';
darkModeBtn.style.right = '10px';
darkModeBtn.style.zIndex = '1000';
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Add dark mode styles
const darkStyles = document.createElement('style');
darkStyles.textContent = `
  body.dark-mode {
    background-color: #121212;
    color: #f0f0f0;
  }

  body.dark-mode header,
  body.dark-mode nav,
  body.dark-mode footer {
    background-color: #1f1f1f;
  }

  body.dark-mode nav a {
    color: #ccc;
  }

  body.dark-mode nav a:hover {
    background: #333;
  }

  body.dark-mode input,
  body.dark-mode textarea {
    background-color: #222;
    color: #fff;
    border: 1px solid #444;
  }

  body.dark-mode button {
    background-color: #666;
  }
`;
document.head.appendChild(darkStyles);

// Live character count for textarea
const textarea = document.querySelector('textarea');
const charCounter = document.createElement('small');
charCounter.style.display = 'block';
charCounter.style.textAlign = 'right';
charCounter.style.marginTop = '-0.8rem';
charCounter.style.marginBottom = '1rem';
charCounter.textContent = '0 / 300';
textarea.parentNode.insertBefore(charCounter, textarea.nextSibling);

textarea.addEventListener('input', () => {
  const len = textarea.value.length;
  charCounter.textContent = `${len} / 300`;
  if (len > 300) {
    charCounter.style.color = 'red';
  } else {
    charCounter.style.color = 'inherit';
  }
});

// Form validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.querySelector('input[type="text"]');
  const email = form.querySelector('input[type="email"]');
  const message = form.querySelector('textarea');

  if (name.value.trim().length < 2) {
    alert('Name must be at least 2 characters.');
    return;
  }

  if (!email.value.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }

  if (message.value.length > 300) {
    alert('Message should be 300 characters or less.');
    return;
  }

  alert("Thanks for your message! I'll get back to you soon.");
  form.reset();
  charCounter.textContent = '0 / 300';
});
