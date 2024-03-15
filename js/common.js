// 상단 메뉴 이벤트 처리.
const searchElement = document.querySelector(".search");
const searchInputElement = searchElement.querySelector("input");

searchElement.addEventListener("click", () => {
  searchInputElement.focus();
});

searchInputElement.addEventListener("focus", () => {
  searchElement.classList.add("focused");
  searchInputElement.setAttribute("placeholder", "통합검색");
});

searchInputElement.addEventListener("blur", () => {
  searchElement.classList.remove("focused");
  searchInputElement.setAttribute("placeholder", "");
});


const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();