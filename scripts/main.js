//DEFILEMENT
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






//SLIDER SON

const slider = document.querySelector('.sliderContainer')
const sliderImages = document.querySelectorAll('.sliderContainer img')
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const pagination = document.querySelector('.pagination')
let pos = 0 // définit la position en cours.
let action
let step = 960 // definit le décalage

playSlider()

slider.addEventListener('mouseover',stopSlider)
slider.addEventListener('mouseout',playSlider)

function setPosition(pos)
{
    document.querySelector('.current').classList.remove('current')
    slider.style.left = -pos*step+'px' // 960px
    let points= document.querySelectorAll('.pagination li')
    points[pos].classList.add('current')
}

function stopSlider()
{
    clearInterval(action)
}


function playSlider()
{
    action = setInterval(
        function()
        {
            pos = (pos+1)%sliderImages.length
            setPosition(pos)
        },
        3000 // toutes les 3 secondes
    )
}

leftArrow.addEventListener(
    'click',
    function (e) {
        e.preventDefault()
        pos--
      if(pos < 0){
        pos = sliderImages.length-1
      }
        setPosition(pos)
    },
)

rightArrow.addEventListener(
    'click',
    function (e) {
        e.preventDefault()
        pos++
        if(pos == sliderImages.length)
        {
            pos = 0
        }
        setPosition(pos)
    },
)


rightArrow.addEventListener(
    'mouseover',
    stopSlider,
)

rightArrow.addEventListener(
    'mouseout',
    playSlider,
)

leftArrow.addEventListener(
    'mouseover',
    stopSlider,
)

leftArrow.addEventListener(
    'mouseout',
    playSlider,
)



for(let i = 0 ; i < sliderImages.length;i++){
   let li  = document.createElement('li')
   if(i == 0){
     li.classList.add('current')
   }
    li.classList.add('point')
    pagination.appendChild(li)
}

let points = document.querySelectorAll('.point');

for(let i = 0; i< points.length; i++){
    points[i].addEventListener(
        'click',
        function () {
            pos = i;
            setPosition(pos)
        })
}

window.onresize = function(e){
  if(document.querySelector(".container").offsetWidth != 960){
    step = document.querySelector(".container").offsetWidth
    slider.style.left = -pos*step+'px'
  }
  // step = e.currentTarget.innerWidth - 20
}


// if(document.querySelector(".container").offsetWidth != 960){
//   step = document.querySelector(".container").offsetWidth - 20
// }
