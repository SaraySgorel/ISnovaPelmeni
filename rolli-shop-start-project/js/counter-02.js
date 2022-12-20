//прослушка на всем окне
window.addEventListener("click", function (event) {
    // обьявлем переменнуб для счетчика в локальной области видимости
  let counter;

  //event.target получаем ээлемент на который кликнули
  // обращение к атрибуту Элемент.dataset

  //проверяем клик по кнопкам +  -
  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    // Метод closest найти ближ родителя соответ-й селектору по html доку
    //Находим обертку счечика
    const counterWrapper = event.target.closest(".counter-wrapper");
    //querySelector можешь использован не только к докумену, но и к любому элементу
    //находим див счетчика
    counter = counterWrapper.querySelector("[data-counter]");
  }

  //проверка элемента по клику плюс
  if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  }

  //Находим обертку счечика
  if (event.target.dataset.action === "minus") {
    if (event.target.dataset.action === "minus") {
      if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
      }
    }
  }
});
