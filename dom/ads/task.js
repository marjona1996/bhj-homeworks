
const getAllRotationsClasses = document.querySelectorAll(".rotator__case");
let count = 1;

const rotator = function() {

  getAllRotationsClasses.forEach(function(item, index) {
    item.classList.toggle("rotator__case_active", count == index);
  });

  count++;
  if (count >= getAllRotationsClasses.length) {
    count = 0;
  }
}

setInterval(rotator, 1000);
