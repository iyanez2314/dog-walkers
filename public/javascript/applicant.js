async function applicantFormHandler(event) {
    event.preventDefault();
    
    const name = document.querySelector('#apply-name').value.trim();
    const email = document.querySelector('#apply-email').value.trim();
    const phone = document.querySelector('#phone').value.trim();
  
    if (name) {
      const response = await fetch('/api/applicant', {
        method: 'post',
        body: JSON.stringify({
          name,
          email,
          phone
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/applicant');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  
document.querySelector('.applicant-form').addEventListener('submit', bookingFormHandler);