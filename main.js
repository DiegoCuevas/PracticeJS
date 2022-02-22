/* document.getElementById("jumpButton").addEventListener("click", jump) */
// document.getElementById("mario").addEventListener("mouseover", jump)
// document.getElementById("mario").addEventListener("mouseout", jump)
document.addEventListener("keyup", jump)
function jump(){
  let mario = document.getElementById('mario')
  let audio = document.getElementById('audio')
  mario.style.top = '300px'
  audio.play();
  setTimeout(() => { mario.style.top = ''}, 500)
}