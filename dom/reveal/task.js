const reveal = document.querySelectorAll(".reveal");


window.addEventListener('scroll', function() {
    reveal.forEach((el) => {
        const {top, bottom} = el.getBoundingClientRect() 
        if (top < window.innerHeight && bottom < window.innerHeight) {
        el.classList.add("reveal_active"); 
        }
    })
  });



 
