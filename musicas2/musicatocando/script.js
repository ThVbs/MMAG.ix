document.addEventListener("DOMContentLoaded", () => {
    const proximaBTN = document.querySelector(".depois");
    const aleatoriaBTN = document.querySelector(".aleatorio")
    const inicioBTN = document.querySelector(".inicio");
    const usuarioBTN = document.querySelector(".usuario");
    const AnteriorBTN = document.querySelector(".antes");
    

    
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
document.addEventListener("DOMContentLoaded", () => {
    const playBTN = document.querySelector(".play");
    const backgroundMusic = document.getElementById("backgroundMusic");

    playBTN.addEventListener("click", () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play(); 
            playBTN.textContent = "❚❚";
        } else {
            backgroundMusic.pause();
            playBTN.textContent = "►";
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audio-player');
    const lyricLines = document.querySelectorAll('.lyric-line');

   
    const lyrics = [
        { time: 24, element: document.getElementById('line1') },
        { time: 28, element: document.getElementById('line2') },
        { time: 32, element: document.getElementById('line3') },
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
