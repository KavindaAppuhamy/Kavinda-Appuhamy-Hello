/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top > offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');                
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    //rest:true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin:
'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'UI/UX Developer', 'Video Creator'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});




/*==================== Send Email ====================*/
{/* <script>
            function validateForm(formData) {
                const name = formData.get('name');
                const email = formData.get('email');
                const phone = formData.get('phone');
                const subject = formData.get('subject');
                const message = formData.get('message');
    
                // Regular expressions for validation
                const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                const phonePattern = /^[0-9]{10}$/;
    
                if (name.trim() === "") {
                    throw new Error("Please enter your Full Name.");
                }
    
                if (!email.match(emailPattern)) {
                    throw new Error("Please enter a valid Email Address.");
                }
    
                if (!phone.match(phonePattern)) {
                    throw new Error("Please enter a valid 10-digit Mobile Number.");
                }
    
                if (subject.trim() === "") {
                    throw new Error("Please enter the Email Subject.");
                }
    
                if (message.trim() === "") {
                    throw new Error("Please enter your Message.");
                }
    
                return true;
            }
    
            async function handleSubmit(event) {
                event.preventDefault();
                const form = event.target;
                const statusMessage = document.getElementById('statusMessage');
                const submitButton = form.querySelector('input[type="submit"]');
    
                try {
                    // Get form data
                    const formData = new FormData(form);
    
                    // Validate form
                    validateForm(formData);
    
                    // Disable submit button
                    submitButton.disabled = true;
                    submitButton.value = 'Sending...';
                    statusMessage.textContent = 'Sending your message...';
                    statusMessage.style.color = '#666';
    
                    // Send form data to PHP handler
                    const response = await fetch('sendemail.php', {
                        method: 'POST',
                        body: formData
                    });
    
                    const result = await response.json();
    
                    if (result.success) {
                        statusMessage.textContent = result.message;
                        statusMessage.style.color = '#4CAF50';
                        form.reset();
                    } else {
                        throw new Error(result.message || 'Failed to send message. Please try again.');
                    }
                } catch (error) {
                    statusMessage.textContent = error.message;
                    statusMessage.style.color = '#f44336';
                } finally {
                    submitButton.disabled = false;
                    submitButton.value = 'Send Message';
                }
    
                return false;
            }
        </script> */}

/*==================== typed js ====================*/