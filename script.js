document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Configure WhatsApp link dynamically
  const whatsappNumber = "553588579827";
  const whatsappText = "Olá Sanderson, quero saber mais sobre a Atlântica Natural!";
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappText)}`;

  // Attach link to all elements with class 'whatsapp-link'
  const whatsappElements = document.querySelectorAll('.whatsapp-link');
  whatsappElements.forEach(el => {
    el.href = whatsappLink;
  });
});
