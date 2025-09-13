document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thanks for reaching out, Jayasurya will get back to you soon!");
    this.reset(); // clear the form
});