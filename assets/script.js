const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const dotsContainer = document.querySelector(".dots")
const taglineContainer=document.querySelector("#taglineContainer")
let arrow_left = document.querySelector("#arrow_left")
let arrow_right = document.querySelector("#arrow_right")
let image_container=document.querySelector("#bannerImg")
currentindex = 0
arrow_right.addEventListener("click", () => {
	if(currentindex >= slides.length-1){
		currentindex=-1
	}
	currentindex++
	updateSlide()
})
arrow_left.addEventListener("click", () => {
	if(currentindex <= 0){
		currentindex=slides.length
	}
	currentindex--
	updateSlide()
})
function createDot(){
	dotsContainer.innerHTML=""
	slides.forEach((slide,i) =>{
		const dot = document.createElement("span")
		dot.classList.add("dot")
		if(i===currentindex){
			dot.classList.add("dot_selected")
		}
		dotsContainer.appendChild(dot)
		dot.addEventListener("click",()=>{
			currentindex=i
			updateSlide()
		})
	})
}
function updateSlide(){
	let image_name = slides[currentindex].image
	image_container.src="./assets/images/slideshow/"+image_name
	taglineContainer.innerHTML=slides[currentindex].tagLine
	createDot()
}
createDot()