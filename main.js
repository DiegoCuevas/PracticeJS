/* document.getElementById("jumpButton").addEventListener("click", jump) */
// document.getElementById("mario").addEventListener("mouseover", jump)
// document.getElementById("mario").addEventListener("mouseout", jump)
function jump(){
  let mario = document.getElementById('mario')
  let audio = document.getElementById('audio')
  mario.style.top = '200px'
  audio.play();
  const aea = () => { mario.style.top = ''}
  setTimeout(aea, 400)
}

document.addEventListener("keyup", function(event){
  if(event.keyCode == 32){
    jump()
  }
})


document.getElementById("search").addEventListener("input", function(event){
  console.log(event.target.value)
})