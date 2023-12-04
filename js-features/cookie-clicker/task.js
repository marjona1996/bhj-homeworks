let counterElement  = document.getElementById("clicker__counter");
let counter = +counterElement.textContent;
let cookieElement  = document.getElementById("cookie");


cookieElement.addEventListener("click", function() {
    counter += 1;
    counterElement.textContent = counter;
    if(counter % 2 !== 0 )  {
        cookieElement.width = 300;
    } else {
        cookieElement.width = 200;
    }
 
})