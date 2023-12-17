
const tabItems = document.querySelectorAll('.tab');
const contentItems = document.querySelectorAll('.tab__content');

for(let i = 0; i < tabItems.length; i++) {
    tabItems[i].addEventListener("click", (event) => {
    let tabsCurrent = event.target.parentElement.children;
   for(let j = 0; j < tabsCurrent.length; j++) {
    tabsCurrent[j].classList.remove("tab_active");
   }
    event.target.classList.add('tab_active');  

    let contentsCurrent = event.target.parentElement.nextElementSibling.children;
    for(let c = 0; c < contentsCurrent.length; c++) {
        contentsCurrent[c].classList.remove("tab__content_active");
    }
    contentItems[i].classList.add('tab__content_active'); 
})}

