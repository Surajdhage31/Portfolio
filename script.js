document.addEventListener('DOMContentLoaded', () => {
    
    // --- CONFIG: Typing Effect ---
    const textToType = "Persuing B.E Cybersecurity Student blending defensive SOC workflows with clean web experiences.";
    const typingElement = document.getElementById('typewriter');
    const typingSpeed = 35; // milliseconds per character
    
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < textToType.length) {
            typingElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    // Start typing after a brief delay
    setTimeout(typeWriter, 1000);

    // --- CONFIG: Form Handling ---
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate sending data
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = "[ ENCRYPTING... ]";
        btn.style.backgroundColor = "#ffbd2e"; // Yellow warning color
        btn.style.color = "#000";

        setTimeout(() => {
            btn.innerText = "[ TRANSMISSION COMPLETE ]";
            btn.style.backgroundColor = "#00ff41"; // Green success color
            alert("SECURE CONNECTION ESTABLISHED: Message received.");
            form.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = "transparent";
                btn.style.color = "#00ff41";
            }, 3000);
        }, 1500);
    });

    // --- CONFIG: Smooth Scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
