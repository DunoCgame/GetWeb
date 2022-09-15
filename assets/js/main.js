
let Article_plan = document.querySelectorAll(".article-planes");

const ColorPlan=['rgba(212, 167, 0, 1)','rgba(213, 211, 207, 0.88)','rgba(232, 222, 35, 0.88)','rgba(43, 195, 255, 0.88)']

Article_plan.forEach( function(element, index) {
	// statements
	let artcle=document.getElementsByClassName('article-planes')[index].style.background = ColorPlan[index];
})

let date = new Date();
let year = date.getFullYear();

document.querySelector(".footer-text").innerHTML="Copyright"+" "+"GetWeb"+" "+"©"+" "+year+" "+". All right reserved";
