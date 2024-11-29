window.addEventListener('load', function(){
    const ham = document.querySelector('.js-hamburger'); 
    const nav = document.querySelector('.js-nav'); 
      
          ham.addEventListener('click', function () {
            ham.classList.toggle('active'); 
            nav.classList.toggle('active'); 
        });
        
        document.addEventListener("DOMContentLoaded", function () {
          ham.addEventListener("click", function () {
              const body = document.body;
              const bodyStyle = window.getComputedStyle(body);
          
              if (bodyStyle.overflow === "hidden") {
                body.style.height = "";
                body.style.overflow = "";
              } else {
                body.style.height = "100%";
                body.style.overflow = "hidden";
              }
            });
          });
    
          window.addEventListener('resize', function() {
            const body = document.body;
            const bodyStyle = window.getComputedStyle(body);
            if (window.innerWidth > 992) {
                ham.classList.remove('active');
                nav.classList.remove('active');
                if (bodyStyle.overflow === "hidden") {
                  body.style.height = "";
                  body.style.overflow = "";
                }
            }
          });
    
      const navLinks = nav.querySelectorAll('a');
    
      navLinks.forEach(function (navLink) {
        navLink.addEventListener('click', function () {
          const body = document.body;
          const bodyStyle = window.getComputedStyle(body);
          ham.classList.remove('active');
          nav.classList.remove('active');
          if (bodyStyle.overflow === "hidden") {
            body.style.height = "";
            body.style.overflow = "";
          }
        });
      }); 
  });
    