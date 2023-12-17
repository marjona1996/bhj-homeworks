let dropdownValue = document.querySelector(".dropdown__value");
let dropdownList = document.querySelector(".dropdown__list");
let dropdownItem = document.querySelectorAll(".dropdown__item");

dropdownValue.addEventListener("click", function() {
dropdownList.classList.add("dropdown__list_active");
})

dropdownItem.forEach((el) => el.addEventListener("click", function(event) {
    event.preventDefault();
    dropdownList.classList.remove("dropdown__list_active");
    dropdownValue.textContent = el.textContent;
}))
