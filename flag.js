alert("HAPPY INDEPENDENCE DAY! 🇮🇳\n\nThis is a tribute to the freedom fighters of India. Click the flag to hoist it and play the national anthem.\n\nNote: The audio may not play automatically due to browser restrictions. Please interact with the page first.");
// Ask for user's name when the page loads
window.addEventListener('load', () => {
    let userName = prompt("Enter your name:");
    if (!userName) userName = "Patriot"; // fallback if user cancels
    // Update the h1 text
    document.querySelector('h1').textContent = `HAPPY INDEPENDENCE DAY, ${userName}!`;
    alert(`Welcome ${userName}! 🇮🇳\nClick the flag to hoist it and play the national anthem.`);
});

const quotes = [
    "Ask not what your country can do for you, ask what you can do for your country.",
    "A nation's culture resides in the hearts and in the soul of its people. — Mahatma Gandhi",
    "Swaraj is my birthright, and I shall have it. — Bal Gangadhar Tilak",
    "They may kill me, but they cannot kill my ideas. — Bhagat Singh",
    "Our flag does not fly because the wind moves it. It flies with the last breath of each soldier who died protecting it."
];
let quoteIndex = 0;
function changeQuote() {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    const quoteBox = document.getElementById('quotebox');
    quoteBox.textContent = quotes[quoteIndex];
}
setInterval(changeQuote, 10000);
function createParticles() {
      const colors = ['#FF9933', '#FFFFFF', '#138808', '#000080'];
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = Math.random() * 8 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = Math.random() * window.innerHeight + 'px';
        document.body.appendChild(particle);
        
        // Animate particles
        const duration = Math.random() * 3 + 2;
        particle.style.animation = `float ${duration}s linear infinite`;
        
        // Remove particles after animation
        setTimeout(() => {
          particle.remove();
        }, duration * 1000);
      }
    }
    
    // Add CSS for particle animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translateY(-100vh) rotate(360deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
function hoistflag() {
    let rope = document.getElementById('rope');
    let flag = document.getElementById('flag');
    let anthem = document.getElementById('anthem');
    const cheer = document.getElementById("cheer");
    document.getElementById('hoistButton').disabled = true;
    document.getElementById('hoistButton').textContent = "Flag Hoisting...";
    document.getElementById('hoistButton').style.backgroundColor = "#ff9933";
    createParticles();
      setInterval(createParticles, 1000);

    rope.style.animation = "ropeMove 0.3s infinite";
    document.getElementById('freedom-fighters').style.opacity = 1;

    anthem.play().then(() => {
        anthem.pause();
        anthem.currentTime = 0;
    }).catch(err => console.log("Anthem unlock blocked:", err));
    cheer.currentTime = 0;
    cheer.play().catch(err => console.log("Cheer blocked:", err));
    let pos = 600; // start position
    let interval = setInterval(() => {
        if (pos <= 131) {
            clearInterval(interval);
            rope.style.animation = "none";
            flag.style.animation = "wave 1s infinite";
            let angle = 0;
          function animateFlag() {
            angle += 0.02;
            const waveX = Math.sin(angle) * 5;
            const waveY = Math.cos(angle * 1.3) * 2;
            flag.style.transform = `rotateY(${waveX}deg) skewY(${waveY}deg)`;
            requestAnimationFrame(animateFlag);
          }
          animateFlag();

            setTimeout(() => {
                anthem.play().catch(err => console.log("Audio blocked:", err));
                document.getElementById('hoistButton').textContent = "Jai Hind!";
                document.getElementById('hoistButton').style.backgroundColor = "#138808";

                // Add celebration effects
                for (let i = 0; i < 200; i++) {
                    setTimeout(createFirework, i * 100);
                }
            }, 1000);
        } else {
            pos -= 2;
            flag.style.top = pos + "px";
        }
    }, 10);
}
setInterval(changeQuote, 8000);

function createFirework() {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = Math.random() * 100 + '%';
    firework.style.top = Math.random() * 30 + 5 + '%';
    firework.style.animationDuration = (Math.random() * 2 + 1) + 's';
    document.body.appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 2000);
}
setInterval(createFirework, 1000);
function createFloatingTriangle() {
    const colors = ['orange', 'white', 'green'];
    const triangle = document.createElement('div');
    triangle.className = `triangle ${colors[Math.floor(Math.random() * colors.length)]}`;
    triangle.style.left = Math.random() * 100 + '%';
    triangle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    triangle.style.animationDelay = Math.random() * 5 + 's';
    document.querySelector('.floating-triangles').appendChild(triangle);

    setTimeout(() => {
        triangle.remove();
    }, 15000);
}

for (let i = 0; i < 200; i++) {
    setTimeout(createFloatingTriangle, i * 300);
}