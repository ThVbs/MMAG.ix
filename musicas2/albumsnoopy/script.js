document.addEventListener("DOMContentLoaded", () => {
  const musicaBtn = document.querySelector(".musica");
  const inicioBTN = document.querySelector(".inicio");
  const yw = document.querySelector(".yw");
  const di = document.querySelector(".di");
  const ds = document.querySelector(".ds");
  const workout = document.querySelector(".workout");
  const usuarioBTN = document.querySelector(".user-button");
  const topBTN = document.querySelector(".top-hits");
  const confBTN = document.querySelector(".config-button");
    
    document.getElementById("txt").style.display = "none";
    
    usuarioBTN.addEventListener("click", () => {
        window.location.href = "../paginicial/inicio.html";
    });  
    confBTN.addEventListener("click", () => {
        window.location.href = "../configurações/index.html";
    });  
    topBTN.addEventListener("click", () => {
        window.location.href = "../telainicio/index.html";
    });    
  
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

