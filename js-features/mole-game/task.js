let counterElement = document.getElementById("dead");
let counter = +counterElement.textContent;
let missesElement = document.getElementById("lost");
let misses = +missesElement.textContent;
let element = document.querySelectorAll(".hole");

element.forEach((item) => item.addEventListener("click", function() {
    if(item.classList.contains("hole_has-mole")) {
      counter++;
      counterElement.textContent = counter; 
      if(counter === 10) {
        alert("Победа");
        counter = 0;
        misses = 0;
        counterElement.textContent  = counter;
        missesElement.textContent = misses;
      }
     } else {
        misses++;
        missesElement.textContent = misses;
     if (misses === 5) {
        alert("Вы проиграли");
        misses = 0;
        counter = 0;
        counterElement.textContent  = counter;
        missesElement.textContent = misses;
     }
    }
}))
