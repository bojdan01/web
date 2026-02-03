
// Watch for the download link to appear
const element = document.getElementById('file');
const convertBtn = document.getElementById('convert');

let checkInterval = setInterval(() => {
    if (element && element.hasAttribute('href')) {
        // Show download button with new styles
        element.style.display = "inline-flex";
        
        // Hide loader if it exists
        const loader = document.querySelector(".tet");
        if (loader) loader.style.display = "none";
        
        clearInterval(checkInterval);
    }
}, 500);

// Loader injection logic
let loaderInterval = setInterval(() => {
    const form = document.querySelector("form");
    if (form && form.style.display === "none") {
        let d = document.createElement("div");
        // Modern Tailwind-like loader
        d.innerHTML = `
            <div class="flex flex-col items-center gap-4 mt-8">
                <div class="w-12 h-12 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"></div>
                <p class="text-xs font-bold text-white/40 uppercase tracking-widest">Zpracovávám video...</p>
            </div>
        `;
        d.className = "tet";
        document.querySelector("main > div").appendChild(d);
        clearInterval(loaderInterval);
    }
}, 100);

// Breadcrumb/Title visibility
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        document.title = "Bojdan.cz";
    } else {
        document.title = "Vrať se k nám! 💜";
    }
});
