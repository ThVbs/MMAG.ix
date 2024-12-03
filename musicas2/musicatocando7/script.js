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
        { time: 43, element: document.getElementById('line1') },
        { time: 47, element: document.getElementById('line2') },
        { time: 52, element: document.getElementById('line3') },
        { time: 55, element: document.getElementById('line4') },
        { time: 60, element: document.getElementById('line5') },
        { time: 64, element: document.getElementById('line6') },
        { time: 68, element: document.getElementById('line7') },
        { time: 73, element: document.getElementById('line8') },
        { time: 76, element: document.getElementById('line9') },
        { time: 80, element: document.getElementById('line10') },
        { time: 85, element: document.getElementById('line11') },
        { time: 90, element: document.getElementById('line12') },
        { time: 96, element: document.getElementById('line13') },
        { time: 100, element: document.getElementById('line14') },
        { time: 102, element: document.getElementById('line15') },
        { time: 105, element: document.getElementById('line16') },
        { time: 108, element: document.getElementById('line17') },
        { time: 113, element: document.getElementById('line18') },
        
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

