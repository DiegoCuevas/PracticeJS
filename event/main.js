document.getElementById("jumpButton").addEventListener("click", jump)
// document.getElementById("mario").addEventListener("mouseover", jump)
// document.getElementById("mario").addEventListener("mouseout", jump)
document.addEventListener("keyup", jump)
function jump(){
  let mario = document.getElementById('mario')
  mario.style.top = '300px'
  setTimeout(() => { mario.style.top = ''}, 500)
  console.log("jump")
}