// Scroll para arriva

 document.getElementById("button-up").addEventListener("click", scrollUp);

 function scrollUp(){

     var currentScroll = document.documentElement.scrollTop;

     if (currentScroll > 0){
         window.requestAnimationFrame(scrollUp);
         window.scrollTo (0, currentScroll - (currentScroll / 10));
     }
 }


buttonUp = document.getElementById("button-up");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }

}

// funcion menu hamburguesa
function miFuncion() {
    var mostrar = document.getElementById("menu");
    if (mostrar.style.display === "block") {
      mostrar.style.display = "none";
    } else {
      mostrar.style.display = "block";
    }
    
}











// barra de menu responsive
//  const nav_bars = document.querySelector(".bars");
//  const menu = document.querySelector(".menu");
//  nav_bars.addEventListener("click",  () => {
//    menu.classList.nav_bars(".bars");

//   if (navMenu.classList.contains(".menu")) {
//     bars.setAttribute("aria-label", "Cerrar menú");
//   } else {
//    bars.setAttribute("aria-label", "Abrir menú");
//   }

//  });


