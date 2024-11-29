document.addEventListener("DOMContentLoaded", () => {
  const musicaBtn = document.querySelector(".musica");
  const inicioBTN = document.querySelector(".inicio");
  const yw = document.querySelector(".yw");
  const di = document.querySelector(".di");
  const ds = document.querySelector(".ds");
  const workout = document.querySelector(".workout");

  document.getElementById("txt").style.display = "none"; //oculta a barra
  
  musicaBtn.addEventListener("click", () => {
      window.location.href = "../musicatocando/index.html";
  });

  inicioBTN.addEventListener("click", () => {
      window.location.href = "../telainicio/index.html";
  });
  
  yw.addEventListener("click", () => {
      window.location.href = "../musicatocando23/index.html";
  });

  di.addEventListener("click", () => {
      window.location.href = "../musicatocando24/index.html";
  });

  ds.addEventListener("click", () => {
      window.location.href = "../musicatocando25/index.html";
  });

  workout.addEventListener("click", () => {
      window.location.href = "../musicatocando26/index.html";
  });

});
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
  })
})

function menu(){
  document.getElementById("txt").style.display = "block"; //mostra a barra
  
}

