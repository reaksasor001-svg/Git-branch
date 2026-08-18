// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && message) {
                alert(`Thank you ${name}! We received your message and will get back to you soon at ${email}`);
                form.reset();
            } else {
                alert('Please fill in all fields');
            }
        });
    }
});

// Simple cart functionality
document.addEventListener('DOMContentLoaded', function() {
    const cartButtons = document.querySelectorAll('.btn-secondary');
    let cartCount = 0;
    
    cartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productName = this.closest('.product-card').querySelector('h3').textContent;
            cartCount++;
            alert(`"${productName}" added to cart! Total items: ${cartCount}`);
        });
    });
});
