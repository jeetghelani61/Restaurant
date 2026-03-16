// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle booking form submission
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (!name || !email || !phone || !date || !time || !guests) {
        alert('Please fill in all required fields.');
        return;
    }

    // Simulate form submission (in a real app, this would send data to server)
    alert(`Thank you, ${name}! Your table for ${guests} guest(s) on ${date} at ${time} has been requested. We'll contact you at ${email} or ${phone} to confirm your reservation.`);

    // Reset form
    this.reset();
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(220, 20, 60, 0.95)';
    } else {
        header.style.backgroundColor = '#DC143C';
    }
});

// Image slider functionality
const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const images = document.querySelectorAll('.slider-container img');

let currentIndex = 0;
const totalImages = images.length;
const imageWidth = 410; // 400px width + 10px margin

function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 3;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < totalImages - 3) ? currentIndex + 1 : 0;
    updateSlider();
});

// Auto slide
setInterval(() => {
    currentIndex = (currentIndex < totalImages - 3) ? currentIndex + 1 : 0;
    updateSlider();
}, 5000);

// Gallery image modal (simple lightbox effect)
const galleryImages = document.querySelectorAll('.slider-container img');
galleryImages.forEach(img => {
    img.addEventListener('click', function() {
        // Create modal
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '2000';
        modal.style.cursor = 'pointer';

        const modalImg = document.createElement('img');
        modalImg.src = this.src;
        modalImg.style.maxWidth = '90%';
        modalImg.style.maxHeight = '90%';
        modalImg.style.objectFit = 'contain';

        modal.appendChild(modalImg);
        document.body.appendChild(modal);

        // Close modal on click
        modal.addEventListener('click', function() {
            document.body.removeChild(modal);
        });
    });
});
