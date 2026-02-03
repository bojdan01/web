
$(document).ready(function() {
    $(".btn").click(function () {
        const link = $(".link").val();
        if (!link) {
            alert("Prosím vlož odkaz na video.");
            return;
        }
        
        const format = $(".format").val();
        
        // Visual feedback
        const btn = $(this);
        const originalText = btn.text();
        btn.prop('disabled', true).text("Zpracovávám...");
        
        download(link, format);
        
        // Reset button after small delay
        setTimeout(() => {
            btn.prop('disabled', false).text(originalText);
        }, 3000);
    });

    function download(link, format) {
        $('.button-container').html(`
            <div class="flex flex-col items-center gap-4 animate-in fade-in duration-700">
                <iframe style="width: 100%; height: 60px; border: none; border-radius: 1rem; overflow: hidden; background: rgba(255,255,255,0.05);" 
                    src="https://loader.to/api/button/?url=${encodeURIComponent(link)}&f=${format}">
                </iframe>
                <button onclick="location.reload()" class="text-xs text-white/30 hover:text-white/60 transition-colors uppercase tracking-widest font-bold">
                    Zpět na zadání
                </button>
            </div>
        `);
    }
});
