const btnMinus = document.querySelector('[data-action="minus"]'); // выбор элемента html
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector("[data-counter]");

btnMinus.addEventListener("click", function () {
  console.log("Minus click");
  // проверяем чтобы счеткик был больше 1
  if (parseInt(counter.innerText) > 1) {
    counter.innerText = --counter.innerText;
  }
}); // отслеживаем действие на странице
// innerText замена символов(обращение к тексту), обьект node
//parseInt -целое чилос из текста

btnPlus.addEventListener("click", function () {
  console.log("Plus click");
  counter.innerText = ++counter.innerText;
}); // отслеживаем действие на странице
