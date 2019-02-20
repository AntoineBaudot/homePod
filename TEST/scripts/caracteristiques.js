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
