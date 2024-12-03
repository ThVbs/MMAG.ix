document.addEventListener("DOMContentLoaded", () => {
    const inicioBTN = document.querySelector(".inicio");
    const usuarioBTN = document.querySelector(".usuario")
    
    document.getElementById("txt").style.display = "none";
    
    inicioBTN.addEventListener("click", () => {
        window.location.href = "../telainicio/index.html";
    });

    usuarioBTN.addEventListener("click", () => {
        window.location.href = "../paginicial/inicio.html";
    });
    

});
document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audio-player');
    const lyricLines = document.querySelectorAll('.lyric-line');

   
    const lyrics = [
        { time: 80, element: document.getElementById('line1') },
        { time: 86, element: document.getElementById('line2') },
        { time: 92, element: document.getElementById('line3') },
        { time: 98, element: document.getElementById('line4') },
        { time: 105, element: document.getElementById('line5') },
        { time: 110, element: document.getElementById('line6') },
        { time: 116, element: document.getElementById('line7') },
        { time: 122, element: document.getElementById('line8') },
        { time: 128, element: document.getElementById('line9') },
        { time: 134, element: document.getElementById('line10') },
        { time: 142, element: document.getElementById('line11') },
    ];

    
    function updateLyrics(currentTime) {
        lyrics.forEach(({ time, element }) => {
            if (currentTime >= time && currentTime < time + 4) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }


    audioPlayer.addEventListener('timeupdate', () => {
        updateLyrics(audioPlayer.currentTime);
    });
});
function letra(){
    document.getElementById("txt").style.display = "block"; //mostra a barra
    
}
function voltar(){
    document.getElementById("txt").style.display = "none";
    
}

