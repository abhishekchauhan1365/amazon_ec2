document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Custom Cursor Glow ---
    const cursorGlow = document.querySelector('.cursor-glow');
    
    window.addEventListener('mousemove', (e) => {
        if(cursorGlow) {
            cursorGlow.style.left = `${e.clientX}px`;
            cursorGlow.style.top = `${e.clientY}px`;
        }
    });

    // Expand glow on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if(cursorGlow) {
                cursorGlow.style.width = '600px';
                cursorGlow.style.height = '600px';
                cursorGlow.style.background = 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 60%)';
            }
        });
        el.addEventListener('mouseleave', () => {
            if(cursorGlow) {
                cursorGlow.style.width = '400px';
                cursorGlow.style.height = '400px';
                cursorGlow.style.background = 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)';
            }
        });
    });

    // --- 2. Navbar Scroll Effect & Active Links ---
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        // Blur Header
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active Link Highlighting
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });

    // --- 3. Mobile Hamburger Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // --- 4. Say Hello Button ---
    const helloBtn = document.getElementById('helloBtn');
    if (helloBtn) {
        helloBtn.addEventListener('click', () => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // --- 5. Premium Form Validation with Fake Loading ---
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.querySelector('.submit-btn');
    const successMsg = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');
            
            // Reset errors
            nameError.textContent = '';
            emailError.textContent = '';
            messageError.textContent = '';
            successMsg.style.display = 'none';

            // Validate fields
            if (name.value.trim() === '') {
                nameError.textContent = 'Name is required *';
                isValid = false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.value.trim() === '') {
                emailError.textContent = 'Email is required *';
                isValid = false;
            } else if (!emailPattern.test(email.value.trim())) {
                emailError.textContent = 'Invalid email format *';
                isValid = false;
            }

            if (message.value.trim() === '') {
                messageError.textContent = 'Message cannot be empty *';
                isValid = false;
            }

            // Success action
            if (isValid) {
                // Simulate network request
                submitBtn.classList.add('loading');
                
                setTimeout(() => {
                    submitBtn.classList.remove('loading');
                    successMsg.style.display = 'block';
                    contactForm.reset();
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        successMsg.style.display = 'none';
                    }, 5000);
                }, 1500);
            }
        });
    }
});
