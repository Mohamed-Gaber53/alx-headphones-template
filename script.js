
  document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(
      ".fade-in, .from-right, .from-left, .from-bottom"
    );
  
    const options = {
      threshold: 0.3
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 200); 
          
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    animatedElements.forEach(el => {
      observer.observe(el);
    });
  });


  
  let hamburger = document.getElementById("hamburger");
  let menu = document.getElementById("menu");

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); 
    menu.classList.toggle("hide");
  });
  
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("hide");
    });
  });
  
  document.addEventListener("click", (e) => {
    if (!menu.classList.contains("hide") && !menu.contains(e.target) && e.target !== hamburger) {
      menu.classList.add("hide");
    }
  });
  