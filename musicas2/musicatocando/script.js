document.addEventListener("DOMContentLoaded", () => {
    const proximaBTN = document.querySelector(".depois");
    const aleatoriaBTN = document.querySelector(".aleatorio")
    const inicioBTN = document.querySelector(".inicio");
    const usuarioBTN = document.querySelector(".usuario");
    const AnteriorBTN = document.querySelector(".antes");
    
    document.getElementById("txt").style.display = "none"; //oculta a barra
    
    inicioBTN.addEventListener("click", () => {
        window.location.href = "../telainicio/index.html";
    });

    usuarioBTN.addEventListener("click", () => {
        window.location.href = "../paginicial/inicio.html";
    });
    

    proximaBTN.addEventListener("click", () => {
        window.location.href = "../musicatocando3/index.html";
    });

    aleatoriaBTN.addEventListener("click", () => {
        proximaBTN.addEventListener("click", () => {
            window.location.href = "../musicatocando2/index.html";
    });
    })

    AnteriorBTN.addEventListener("click", () => {
        window.location.href = "../musicatocando4/index.html";
    });
})
document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audio-player');
    const lyricLines = document.querySelectorAll('.lyric-line');

   
    const lyrics = [
        { time: 24, element: document.getElementById('line1') },
        { time: 26, element: document.getElementById('line2') },
        { time: 28, element: document.getElementById('line3') },
        { time: 32, element: document.getElementById('line4') },
        { time: 33, element: document.getElementById('line5') },
        { time: 36, element: document.getElementById('line6') },
        { time: 39, element: document.getElementById('line7') },
        { time: 43, element: document.getElementById('line8') },
        { time: 47, element: document.getElementById('line9') },
        { time: 50, element: document.getElementById('line10') },
        { time: 51, element: document.getElementById('line11') },
        { time: 54, element: document.getElementById('line12') },
        { time: 56, element: document.getElementById('line13') },
        { time: 59, element: document.getElementById('line14') },
        { time: 63, element: document.getElementById('line15') },
        { time: 65, element: document.getElementById('line16') },
        { time: 66, element: document.getElementById('line17') },
        { time: 69, element: document.getElementById('line18') },
        { time: 70, element: document.getElementById('line19') },
        { time: 74, element: document.getElementById('line20') },
        { time: 78, element: document.getElementById('line21') }
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
