document.addEventListener("DOMContentLoaded", () => {
    const AnteriorBTN = document.querySelector(".antes");
    const inicioBTN = document.querySelector(".inicio");
    const usuarioBTN = document.querySelector(".usuario")

    document.getElementById("txt").style.display = "none"; //oculta a barra
    
    
    inicioBTN.addEventListener("click", () => {
        window.location.href = "../telainicio/index.html";
    });

    usuarioBTN.addEventListener("click", () => {
        window.location.href = "../paginicial/inicio.html";
    });
    
    AnteriorBTN.addEventListener("click", () => {
        window.location.href = "../musicatocando/index.html";
    });

});

document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audio-player');
    const lyricLines = document.querySelectorAll('.lyric-line');

   
    const lyrics = [
        { time: 19, element: document.getElementById('line1') },
        { time: 23, element: document.getElementById('line2') },
        { time: 28, element: document.getElementById('line3') },
        { time: 34, element: document.getElementById('line4') },
        { time: 39, element: document.getElementById('line5') },
        { time: 42, element: document.getElementById('line6') },
        { time: 46, element: document.getElementById('line7') },
        { time: 52, element: document.getElementById('line8') },
        { time: 57, element: document.getElementById('line9') },
        { time: 61, element: document.getElementById('line10') },
        { time: 65, element: document.getElementById('line11') },
        // { time: 68, element: document.getElementById('line1') },
        { time: 36, element: document.getElementById('line4') },
        { time: 40, element: document.getElementById('line5') },
        { time: 44, element: document.getElementById('line6') },
        { time: 48, element: document.getElementById('line7') },
        { time: 52, element: document.getElementById('line8') },
        { time: 56, element: document.getElementById('line9') },
    ];

    
    function updateLyrics(currentTime) {
        lyrics.forEach(({ time, element }) => {
            if (currentTime >= time && currentTime < time + 5) {
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
