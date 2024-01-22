let button = document.querySelectorAll('.shop__btn')



for(let i = 0; i<button.length; i++){
	button[i].addEventListener('click',change)
	



function change(){
	button[i].classList.toggle('activeBtn');
	if (button[i].classList.contains('activeBtn')) {
	// button[i].classList.add('activeBtn')
	button[i].innerHTML = 'В корзине'
	
} else {
	// button[i].classList.remove('activeBtn')
	button[i].innerHTML = '10.000 руб'
	
}


}
}







// function change(){
// 	if (flag==false) {
// 	button[i].style.background = 'black'
// 	button[i].style.color = 'white'
// 	button[i].innerHTML = 'В корзине'
// 	flag = true
// } else {
// 	button[i].style.background = 'red'
// 	button[i].style.color = 'white'
// 	button[i].innerHTML = '10.000 руб'
// 	flag = false
// }


// }
// }