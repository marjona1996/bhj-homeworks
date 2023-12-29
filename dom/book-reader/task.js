const fontSizeClasses = document.querySelectorAll(".font-size");
const bookClass = document.querySelector(".book");

for(let i = 0; i < fontSizeClasses.length; i++) {
    fontSizeClasses[i].addEventListener("click", (event) => {
     event.preventDefault();
let fontsCurent = event.target.parentElement.children;
for(let j = 0; j < fontsCurent.length; j++) {
    fontsCurent[j].classList.remove("font-size_active");
   }
    event.target.classList.add('font-size_active'); 
  let datas = event.target.dataset.size;
 let className = `font-size_${datas}`;
 bookClass.classList = ['book'];
 datas ? bookClass.classList.add(className) : '';
}) 

}

// classList.add(" book_fs-small book_fs-big")