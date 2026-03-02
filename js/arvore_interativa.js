document.addEventListener("DOMContentLoaded", function(){

  const toggles = document.querySelectorAll(".toggle");

  toggles.forEach(toggle => {

    toggle.addEventListener("click", function(){

      const parentLi = this.closest("li");
      const childUl = parentLi.querySelector(":scope > ul");

      if(!childUl) return;

      childUl.classList.toggle("open");

      this.textContent = childUl.classList.contains("open") ? "−" : "+";

    });

  });

});