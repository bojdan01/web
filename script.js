
// Initialize Clock
function cas() {
    try {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            if (this.status === 200) {
                const data = JSON.parse(this.responseText);
                const time = data.datetime.slice(11, 19);
                document.querySelectorAll(".hodiny").forEach(el => {
                    el.innerHTML = time;
                });
            }
        }
        xhttp.open("GET", "https://worldtimeapi.org/api/timezone/Europe/Prague", true);
        xhttp.send();
    } catch (error) {
        console.error("Clock error:", error);
    }
}

cas();
setInterval(cas, 1000);

/**
 * Vertical Presentation Navigation
 * Moves the entire main container vertically for a slide-like experience.
 */
let currentSection = 0;
const totalSections = 4;
let isScrolling = false;

function gotoSection(index) {
    if (index < 0 || index >= totalSections) return;
    
    currentSection = index;
    const container = document.getElementById('main-container');
    
    // Smooth vertical transform
    container.style.transform = `translateY(-${index * 100}vh)`;

    // Update Navigation Dots
    const dots = document.querySelectorAll('.nav-dot');
    dots.forEach((dot, i) => {
        if (i === index) dot.classList.add('active');
        else dot.classList.remove('active');
    });

    // Update Desktop Nav Text
    const navTexts = document.querySelectorAll('.nav-text');
    navTexts.forEach((text, i) => {
        if (i === index) text.classList.add('text-white');
        else text.classList.remove('text-white');
    });
}

// Mouse Wheel Scroll Support
window.addEventListener('wheel', (e) => {
    if (isScrolling) return;
    
    isScrolling = true;
    if (e.deltaY > 0) {
        gotoSection(currentSection + 1);
    } else {
        gotoSection(currentSection - 1);
    }

    setTimeout(() => {
        isScrolling = false;
    }, 1200); // Wait for transition to finish
}, { passive: true });

// Keyboard Support
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') gotoSection(currentSection + 1);
    if (e.key === 'ArrowUp' || e.key === 'PageUp') gotoSection(currentSection - 1);
});

// Compatibility Shim for old pohyb/pohybMin calls
function pohyb(a, b, c, d) {
    if (a < 5) gotoSection(0);
    else if (a > 90 && a < 100) gotoSection(1);
    else if (a > 180 && a < 195) gotoSection(2);
    else if (a > 270) gotoSection(3);
}

function pohybMin(a, b, c, d) {
    pohyb(a, b, c, d);
}

// Ensure first section is active on load
window.onload = () => {
    gotoSection(0);
};
