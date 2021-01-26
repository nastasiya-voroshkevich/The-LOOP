//выпадающие окна

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

 let body=document.querySelector('body');
 //if(isMobile.any()){
	body.classList.add('touch');
	let arrow=document.querySelectorAll('.arrow');
for(i=0; i<arrow.length; i++){
		let thisLink=arrow[i].previousElementSibling;
		let subNav=arrow[i].nextElementSibling;
		let thisArrow=arrow[i];

		thisLink.classList.add('parent');
	arrow[i].addEventListener('click', function(){
		subNav.classList.toggle('open');
		thisArrow.classList.toggle('active');
	});
}
//}else{
//body.classList.add('mouse');
//}

//моб меню 
$(document).ready(function(){
	$('.header__burger').click(function(event) {
		$('.header__burger, .nav-bar, .overlay').toggleClass('active');
		$('body').toggleClass('lock');
	});


});

// эффект 
document.querySelectorAll('a').forEach((elem) => {

    elem.onmouseenter =
    elem.onmouseleave = (e) => {

        const tolerance = 5

        const left = 0
        const right = elem.clientWidth

        let x = e.pageX - elem.offsetLeft

        if (x - tolerance < left) x = left
        if (x + tolerance > right) x = right

        elem.style.setProperty('--x', `${ x }px`)

    }

})

