document.addEventListener("DOMContentLoaded", () => {
    const AnteriorBTN = document.querySelector(".antes");
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

});
document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audio-player');
    const lyricLines = document.querySelectorAll('.lyric-line');

   
    const lyrics = [
        { time: 15, element: document.getElementById('line1') },
        { time: 18, element: document.getElementById('line2') },
        { time: 22, element: document.getElementById('line3') },
        { time: 26, element: document.getElementById('line4') },
        { time: 29, element: document.getElementById('line5') },
        { time: 33, element: document.getElementById('line6') },
        { time: 37, element: document.getElementById('line7') },
        { time: 40, element: document.getElementById('line8') },
        { time: 43, element: document.getElementById('line9') },
        { time: 47, element: document.getElementById('line10') },
        { time: 51, element: document.getElementById('line11') },
        { time: 58, element: document.getElementById('line12') },
        { time: 62, element: document.getElementById('line13') },
        { time: 65, element: document.getElementById('line14') },
        { time: 73, element: document.getElementById('line15') },
        { time: 77, element: document.getElementById('line16') },
        { time: 81, element: document.getElementById('line17') },
        { time: 84, element: document.getElementById('line18') },
    ];

    
    function updateLyrics(currentTime) {
        lyrics.forEach(({ time, element }) => {
           if (time == 65 || time == 51){
            if (currentTime >= time && currentTime < time + 8) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
           }else{
            if (currentTime >= time && currentTime < time + 3) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
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
