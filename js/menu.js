let menu = document.querySelector('.menuBtn')
let spisok = document.querySelector('.menu__list')
let count = true
menu.addEventListener('click', menuClick)

function menuClick(){
	console.log('Клик')

	if( count == true ) {spisok.classList.add('menu_active')
	 count = false
}else {
	spisok.classList.remove('menu_active');
count = true
}

}