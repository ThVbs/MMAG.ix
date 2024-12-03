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
        { time: 12, element: document.getElementById('line1') },
        { time: 16, element: document.getElementById('line2') },
        { time: 20, element: document.getElementById('line3') },
        { time: 25, element: document.getElementById('line4') },
        { time: 30, element: document.getElementById('line5') },
        { time: 32, element: document.getElementById('line6') },
        { time: 34, element: document.getElementById('line7') },
        { time: 37, element: document.getElementById('line8') },
        { time: 40, element: document.getElementById('line9') },
        { time: 45, element: document.getElementById('line10') },
        { time: 49, element: document.getElementById('line11') },
        { time: 53, element: document.getElementById('line12') },
        { time: 102, element: document.getElementById('line13') },
        { time: 107, element: document.getElementById('line14') },
        { time: 111, element: document.getElementById('line15') },
        
        
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

