window.onload = function (){
	const playButton = document.querySelector ('.buttonPlay')
	const audio = document.querySelector ('audio')



	playButton.onclick = function(){
		if (audio.paused){
			audio.play()
		}else{
			audio.pause()
		}

	}
}