let changeTheme = document.querySelector('.themes')
// let header = document.querySelector('.menu')
let shop = document.querySelector('.sho__title')
// let body = document.querySelector('.body')
let main_title = document.querySelector('.main_title')
let priceText = document.querySelectorAll('.shop__text')
let changeColorBtn = document.querySelector('.change_color')
let color = ''
let textColor = ''
const header = document.querySelector('.menu')
const footer = document.querySelector('.body')
const navLinks = document.querySelectorAll('.shop__text')
if (localStorage.getItem('bg-color')!==null){
	color=localStorage.getItem('bg-color')
	textColor=localStorage.getItem('text-color')
	header.style.background = color
	footer.style.background = color
	navLinks.forEach((el)=>{
		el.style.color = textColor
	}) 
}

function choiseWhite(){
	console.log('white');
header.style.background = 'red'
footer.style.background = 'black'
// shop.style.color = 'white'
main_title.style.color = 'white'
header.style.transition = "1s ease-out 0.5s"
footer.style.transition = "1s ease-out 0.5s"
localStorage.setItem('bg_color', 'white')
localStorage.setItem('text-color','black')
navLinks.forEach((el)=>{
	el.style.transition = '1s ease-out 0.5s'
	el.style.color = 'black' 
})
}
function choiseDark(){
	console.log('black');
	header.style.background = 'grey'
footer.style.background = 'white'
// shop.style.color = 'black'
main_title.style.color = 'black'
header.style.transition = "1s ease-out 0.5s"
footer.style.transition = "1s ease-out 0.5s"
localStorage.setItem('bg_color','black')
localStorage.setItem('text-color','white')
navLinks.forEach((el)=>{
	el.style.transition = '1s ease-out 0.5s'
	el.style.color = 'white' 
})
}






////for (let i =0; i < priceText.length; i++){
///priceText[i].style.color = 'black'/////