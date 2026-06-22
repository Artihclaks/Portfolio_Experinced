// Small helpers: set year and handle contact form
document.getElementById('year').textContent = new Date().getFullYear();

function handleForm(e){
  e.preventDefault();
  // Basic client-side confirmation. Replace with real endpoint if desired.
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name || !email || !message){
    alert('Please fill all fields.');
    return;
  }
  // For now just show a confirmation
  alert('Thanks ' + name + '! Your message has been noted. I will get back to you at ' + email + '.');
  document.getElementById('contactForm').reset();
}
