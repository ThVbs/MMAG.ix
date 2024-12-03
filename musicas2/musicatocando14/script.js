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
        { time: 1, element: document.getElementById('line1') },
        { time: 6, element: document.getElementById('line2') },
        { time: 9, element: document.getElementById('line3') },
        { time: 13, element: document.getElementById('line4') },
        { time: 16, element: document.getElementById('line5') },
        { time: 20, element: document.getElementById('line6') },
        { time: 24, element: document.getElementById('line7') },
        { time: 26, element: document.getElementById('line8') },
        { time: 28, element: document.getElementById('line9') },
        { time: 30, element: document.getElementById('line10') },
        { time: 36, element: document.getElementById('line11') },
        { time: 42, element: document.getElementById('line12') },
        { time: 46, element: document.getElementById('line13') },
       
    ];

    
    function updateLyrics(currentTime) {
        lyrics.forEach(({ time, element }) => {
            if (currentTime >= time && currentTime < time + 3) {
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

