    $(".btn").click(function (){
        var link =$(".link").val();
        var format =$(".format").children("option:selected").val();
        var src=""+link+"="+format+"";
        // children("option:selected")
        download(link,format);

    });

    function download(link,format){
        $('.button-container')
            .html('<iframe style="height: 50px; border: none; overflow: hidden;" src="https://loader.to/api/button/?url='+ link+ '&f='+ format + '"></iframe>');
    }

 document.addEventListener("visibilitychange", (event) => {
            if (document.visibilityState == "visible") {
            document.querySelector("title").innerHTML = "Bojdan.cz";
            document.querySelectorAll("link")[1].href = '/image/letter-b.ico'
            } else {
            document.querySelector("title").innerHTML = "Come back";
            document.querySelectorAll("link")[1].href = '/image/smile.png'
            }
        });
