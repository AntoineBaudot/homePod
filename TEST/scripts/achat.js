/*const sliderImages 		  = document.querySelectorAll(".sliderContainer img")
const sliderContainer = document.querySelector(".sliderContainer")
const previousButton  = document.querySelector(".previous")
const nextButton 	  = document.querySelector(".next")
const dots			  = document.querySelectorAll("ul.dots li")

let time = 3000,
	step = -220,
	currentPicture = 0,
	slide

function slideInterval(){
	slide = setInterval(() =>{
		currentPicture = (currentPicture + 1) % sliderImages.length
		display(currentPicture)
	}, time)
}

slideInterval()

sliderContainer.addEventListener("mouseover", () => {
	clearInterval(slide)
})
sliderContainer.addEventListener("mouseleave", () => {
	slideInterval()
})

previousButton.addEventListener("click", (e) => {
	e.preventDefault()
	currentPicture--
	if(currentPicture < 0){
		currentPicture = sliderImages.length - 1
	}
	display(currentPicture)
})

nextButton.addEventListener("click", (e) => {
	e.preventDefault()
	currentPicture++
	if(currentPicture >= sliderImages.length){
		currentPicture = 0
	}
	display(currentPicture)
})

function display (currentPos){
	sliderContainer.style.left = currentPos * step + "px"
  document.querySelector('a.current').classList.remove('current')
	dots[currentPos].querySelector('a').classList.add('current')
}
for(let i = 0; i < dots.length; i++){
	dots[i].querySelector("a").addEventListener("click", (e) => {
		e.preventDefault()
		this.setAttribute('data-test','test')
		currentPicture = i
		display(currentPicture)
	})

}*/
