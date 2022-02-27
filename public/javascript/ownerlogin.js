async function ownerloginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#owner-email-login').value.trim();
    const password = document.querySelector('#owner-password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('owner/ownerlogin', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/booking/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  async function ownersignupFormHandler(event) {
    event.preventDefault();
    
    const name = document.querySelector('#owner-name').value.trim();
    const email = document.querySelector('#owner-email-signup').value.trim();
    const password = document.querySelector('#owner-password-signup').value.trim();
  
    if (email && password && name) {
      const response = await fetch('/api/owner', {
        method: 'post',
        body: JSON.stringify({
          name,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/booking/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.owner-login-form').addEventListener('submit', ownerloginFormHandler);
  
  document.querySelector('.owner-signup-form').addEventListener('submit', ownersignupFormHandler);