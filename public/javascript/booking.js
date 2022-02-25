  async function bookingFormHandler(event) {
    event.preventDefault();
    
    const name = document.querySelector('#dog-name').value.trim();
    const email = document.querySelector('#email-booking').value.trim();
    //const dogname = document.querySelector('#dog-name').value.trim();
  
    if (name) {
      const response = await fetch('/api/owner', {
        method: 'post',
        body: JSON.stringify({
          name,
          email
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/booking');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  
document.querySelector('.booking-form').addEventListener('submit', bookingFormHandler);