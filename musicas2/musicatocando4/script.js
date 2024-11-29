document.addEventListener("DOMContentLoaded", () => {
    const AnteriorBTN = document.querySelector(".antes");
    const proximaBTN = document.querySelector(".depois");
    const inicioBTN = document.querySelector(".inicio");
    const usuarioBTN = document.querySelector(".usuario")

    document.getElementById("txt").style.display = "none";
    
    inicioBTN.addEventListener("click", () => {
        window.location.href = "../telainicio/index.html";
    });

    usuarioBTN.addEventListener("click", () => {
        window.location.href = "../paginicial/inicio.html";
    });
    
    AnteriorBTN.addEventListener("click", () => {
        window.location.href = "../musicatocando/index.html";
    });

    proximaBTN.addEventListener("click", () => {
        window.location.href = "../musicatocando/index.html";
    });

});
document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audio-player');
    const lyricLines = document.querySelectorAll('.lyric-line');

   
    const lyrics = [
        { time: 32, element: document.getElementById('line1') },
        { time: 37, element: document.getElementById('line2') },
        { time: 44, element: document.getElementById('line3') },
        { time: 50, element: document.getElementById('line4') },
        { time: 58, element: document.getElementById('line5') },
        { time: 63, element: document.getElementById('line6') },
        { time: 69, element: document.getElementById('line7') },
        { time: 75, element: document.getElementById('line8') },
        { time: 82, element: document.getElementById('line9') },
        { time: 86, element: document.getElementById('line10') },
        { time: 89, element: document.getElementById('line11') },
        { time: 92, element: document.getElementById('line12') },
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
