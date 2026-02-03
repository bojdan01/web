
// Watch for the download link to appear
const element = document.getElementById('file');
const convertBtn = document.getElementById('convert');

let checkInterval = setInterval(() => {
    if (element && element.hasAttribute('href')) {
        // Show download button
        element.style.display = "inline-flex";
        
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
        d.innerHTML = `
            <div class="flex flex-col items-center gap-4 mt-8">
                <div class="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin"></div>
                <p class="text-xs font-bold text-white/40 uppercase tracking-widest">Generuji MP4 soubor...</p>
            </div>
        `;
        d.className = "tet";
        document.querySelector("main > div").appendChild(d);
        clearInterval(loaderInterval);
    }
}, 100);

document.addEventListener("visibilitychange", () => {
    document.title = document.visibilityState === "visible" ? "Bojdan.cz" : "Vrať se k nám! 💜";
});
