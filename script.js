// Countdown timer
function updateCountdown() {
    const partyDate = new Date("June 9, 2025 14:00:00").getTime();
    const now = new Date().getTime();
    const distance = partyDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
    
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "<div class='text-2xl font-bold text-pink-700'>Праздник начался!</div>";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Confetti effect
function createConfetti() {
    const colors = ['#ff85a2', '#ff6b95', '#f7a8b8', '#f8c1d7', '#ffb3d1'];
    const container = document.getElementById('confetti-container');
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = -10 + 'px';
        confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
        confetti.style.opacity = '1';
        
        container.appendChild(confetti);
        
        const animationDuration = Math.random() * 3 + 2;
        
        confetti.animate([
            { top: '-10px', opacity: 1 },
            { top: '100vh', opacity: 0 }
        ], {
            duration: animationDuration * 1000,
            easing: 'cubic-bezier(0.1, 0.8, 0.9, 1)'
        });
        
        setTimeout(() => {
            confetti.remove();
        }, animationDuration * 1000);
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Create confetti when page loads for a festive effect
window.onload = function() {
    setTimeout(createConfetti, 1000);
}; 