window.addEventListener("DOMContentLoaded", () => {
 const mobileMenuBtn = document.querySelector("#burger-menu");
 const nav = document.querySelector(".nav_right");

 mobileMenuBtn.addEventListener("click", function ( ) {
    nav.classList.toggle("active_nav");
    if (nav.classList.contains("active_nav")) {
      this.classList.add("close");
    } else {
      this.removeAttribute("class");
    }    
 });
});