window.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.querySelector("#burger-menu");
  const nav = document.querySelector(".nav_right");
  const trigger = document.querySelectorAll(".lms_item_wrapper_trigger");
  const content = document.querySelectorAll(".lms_item_wrapper_content");

  mobileMenuBtn.addEventListener("click", function () {
    nav.classList.toggle("active_nav");
    if (nav.classList.contains("active_nav")) {
      this.classList.add("close");
    } else {
      this.removeAttribute("class");
    }
  });

  for (let i = 0; i < trigger.length; i ++) {
    trigger[i].addEventListener("click", () => {
      for (let x = 0; x < content.length; x++) {
        content[x].style.display = "none";
        trigger[x].querySelector("svg").style.cssText = `transform: rotate(0deg)`;        
      }

      trigger[i].querySelector("svg").style.cssText = `transform: rotate(45deg)`;
      content[i].style.display = "block";

      trigger[i].querySelector("svg").addEventListener("click", (e) => {
        e.stopPropagation();
        trigger[i].querySelector("svg").style.cssText = `transform: rotate(0deg)`; 
        content[i].style.display = "none";
      })
    })
    
  }
  
});
