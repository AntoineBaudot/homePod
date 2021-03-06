
/*let button = document.querySelector(".button")

button.addEventListener(
    'click',
    function() {
      document.querySelector('div').classList.add('darkGray')
    },
    false
    );


button.addEventListener(
  "click",
   (e) => {
	e.preventDefault()
	if(currentPicture >= sliderImages.length){
		currentPicture = 0
	}
	display(currentPicture)
})

function display (currentPos){
	sliderContainer.style.left = currentPos * step + "px"
  document.querySelector('a.current').classList.remove('current')
	dots[currentPos].querySelector('a').classList.add('current')
}*/
/*for(let i = 0; i < dots.length; i++){
	dots[i].querySelector("a").addEventListener("click", (e) => {
		e.preventDefault()
		this.setAttribute('data-test','test')
		currentPicture = i
		display(currentPicture)
	})

}*/
const questions = document.querySelectorAll(".info")

for(let i = 0; i < questions.length; i++){
    let curr = questions[i].querySelector("p")

    curr.setAttribute("data-height", curr.offsetHeight)
    curr.style.height = 0

    questions[i].querySelector("h2").addEventListener("click", function() {
        if(document.querySelector("h2.is_open") !== null){
            let openned = document.querySelector("h2.is_open")
            openned.parentNode.querySelector("p").style.height = 0
            openned.classList.remove("is_open")

            if(openned == this) return
        }

        questions[i].querySelector("p").style.height = questions[i].querySelector("p").getAttribute("data-height") + "px"
        this.classList.add("is_open")
    })
}

const buyButton = document.querySelector("#buyButton")
buyButton.addEventListener("click", function(e){
  e.preventDefault()
  document.querySelector(".popup").classList.toggle("active")
})
document.querySelector("#closePopup").addEventListener("click", function(e){
  e.preventDefault()
  this.parentNode.classList.toggle("active")
})

const colorSelector = document.querySelectorAll(".color_selector div")
for(let i = 0; i < colorSelector.length; i++){
    colorSelector[i].addEventListener("click", function(e){
      if(document.querySelector(".color.active") !== null){
          let openned = document.querySelector(".color.active")
          openned.classList.remove("active")

          this.classList.add("active")
      }else {
          this.classList.add("active")
      }
    })
}
