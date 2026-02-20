
// Function to toggle between Login and Register forms
function toggleForm(formType) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (formType === 'login') {
      loginForm.classList.add('visible');
      loginForm.classList.remove('hidden');
      registerForm.classList.add('hidden');
      registerForm.classList.remove('visible');
    } else {
      registerForm.classList.add('visible');
      registerForm.classList.remove('hidden');
      loginForm.classList.add('hidden');
      loginForm.classList.remove('visible');
    }
  }
  