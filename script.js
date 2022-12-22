const mainContainer = document.querySelector(".container")
const thankContainer = document.querySelector(".container-thank-you")
const btnSubmit = document.getElementById("btn-submit")
const rateAgain = document.getElementById("btn-rateAgain")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll("#btn")

btnSubmit.addEventListener("click", () => {
    thankContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

rateAgain.addEventListener("click", () =>{
    thankContainer.classList.add("hidden")
    mainContainer.style.display = "flex"
})


rates.forEach((rate) =>{
    rate.addEventListener("click",() => {
        
        rating.innerHTML = rate.innerHTML
    })
})