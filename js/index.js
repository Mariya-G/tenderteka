const blockFaq = document.querySelectorAll(".faq__item");
const inputSearchTender = document.querySelector(".main-search-tender__input");
const mainBlock = document.querySelectorAll(".main-fanction-service__item");
const answers = document.querySelectorAll(".main-answers__item");
const burgerBtn = document.querySelector(".header__burger");
const menuHeader = document.querySelector(".header__menu");
const btnBackSliderReview = document.querySelector(
  ".main-reviews__slider-button_left"
);
const btnNextSliderReview = document.querySelector(
  ".main-reviews__slider-button_right"
);
const containerSliderReview = document.querySelector(
  ".main-reviews__slider-container"
);
const slideReview = document.querySelectorAll(".main-reviews__item");
const defaultBlock = document.querySelector(
  ".main-fanction-service__column_default"
);

const imageContainer = document.querySelector(
  ".main-fanction-service__column-image-container"
);
const imageItem = document.getElementById("item-image");

const buttonsSearchTender = document.querySelectorAll(
  ".main-search-tender__button"
);
const buttonId = document.querySelector("#buttonSales");
const btnNoActive = document.querySelector("#okpd2");

//------Ответы на вопросы, страница FAQ------
blockFaq.forEach((item) => {
  item.addEventListener("click", () => {
    const buttonIcon = item.querySelector(".faq__item-icons");
    item.classList.toggle("show-faq");
    buttonIcon.classList.toggle("show-faq");
  });
});

//----Блок функции сервиса-----//
mainBlock.forEach((item) => {
  item.addEventListener("click", () => {
    const buttonIcon = item.querySelector(".main-fanction-service__item-icons");
    item.classList.toggle("open");
    buttonIcon.classList.toggle("open");

    const imagePath = item.getAttribute("data-image");

    defaultBlock.style.display = "none";
    imageContainer.style.display = "block";

    if (imagePath) {
      imageItem.src = imagePath;
    } else {
      defaultBlock.style.display = "flex";
      imageContainer.style.display = "none";
    }
  });
});

//-------Блок ответы на вопросы------//
answers.forEach((item) => {
  item.addEventListener("click", () => {
    const buttonIcon = item.querySelector(".main-answers__item-anons");
    item.classList.toggle("open");
    buttonIcon.classList.toggle("open");
  });
});

//------Меню бургер на моб. версии-----//
burgerBtn.addEventListener("click", () => {
  menuHeader.classList.toggle("header__menu_visible");
  burgerBtn.classList.toggle("close");
});

//-------Слайдер отзывы---------//
let count = 0;
let width;
function init() {
  width = document.querySelector(".main-reviews__slider").offsetWidth;
  containerSliderReview.style.width = width * slideReview.length + "px";

  slideReview.forEach((item) => {
    item.style.width = width + "px";
  });
  rollSlider();
}
window.addEventListener("resize", init);
init();

btnNextSliderReview.addEventListener("click", () => {
  count++;
  if (count >= slideReview.length) {
    count = 0;
  }
  rollSlider();
});

btnBackSliderReview.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = slideReview.length - 1;
  }
  rollSlider();
});

function rollSlider() {
  containerSliderReview.style.transform = "translate(-" + count * width + "px)";
}

//-----Первый слайдер на главной в банере-----//
const sliderBanerProcurement = document.querySelector(".main__banner-slider-procurement");
const sliderProcurement = document.querySelector(".main-procurement");
const indicator = sliderBanerProcurement.querySelector(".main__banner-indicators");
const slides = sliderProcurement.querySelectorAll(".main__banner-slider-wrap");
const sliderWidth = sliderBanerProcurement.clientWidth;
let currentSlideIndex = 0;
const paginationCircles = [];


function showSlide() {
  sliderProcurement.style.transform = `translateX(-${currentSlideIndex * sliderWidth}px)`
}

function changeSLide(slideIndex) {
  removeActiveClass();
  currentSlideIndex = slideIndex;
  addActiveClass();
  showSlide();
}

function createPaginationCircles() {
  const span = document.createElement("span");
  span.className = "main__banner-indicator";
  indicator.appendChild(span);
  paginationCircles.push(span);
}

function addActiveClass() {
  paginationCircles[currentSlideIndex].classList.add(
    "main__banner-indicator_active"
  );
}

function removeActiveClass() {
  paginationCircles[currentSlideIndex].classList.remove(
    "main__banner-indicator_active"
  );
}

function addPagination() {
  slides.forEach(createPaginationCircles);
  paginationCircles[0].classList.add("main__banner-indicator_active");
  paginationCircles.forEach((circle, index) => {
    circle.addEventListener("click", () => changeSLide(index));
  });
}
showSlide();
addPagination();

//----Второй слайдер в банере----//
const sliderBanerSales = document.querySelector(".main__banner-slider-sales");
const sliderSales = document.querySelector(".main-sales");
const indicatorSales = sliderBanerSales.querySelector(".main__banner-indicators");
const slidesSales = sliderSales.querySelectorAll(".main__banner-slider-wrap");

let currentSlideIndexSales = 0;
const paginationCirclesSales = [];
const sliderWidthSales = sliderBanerSales.clientWidth;

function showSlideSales() {
  sliderSales.style.transform = `translateX(-${currentSlideIndexSales * sliderWidthSales}px)`
}


function changeSLideSales(slideIndex) {
  removeActiveClassSales();
  currentSlideIndexSales = slideIndex;
  addActiveClassSales();
  showSlideSales();
}

function createPaginationCirclesSales() {
  const span = document.createElement("span");
  span.className = "main__banner-indicator";
  indicatorSales.appendChild(span);
  paginationCirclesSales.push(span);
}

function addActiveClassSales() {
  paginationCirclesSales[currentSlideIndexSales].classList.add(
    "main__banner-indicator_active"
  );
}

function removeActiveClassSales() {
  paginationCirclesSales[currentSlideIndexSales].classList.remove(
    "main__banner-indicator_active"
  );
}

function addPaginationSales() {
  slidesSales.forEach(createPaginationCirclesSales);
  paginationCirclesSales[0].classList.add("main__banner-indicator_active");
  paginationCirclesSales.forEach((circle, index) => {
    circle.addEventListener("click", () => changeSLideSales(index));
  });
}
showSlideSales();
addPaginationSales();

//----------Изменения placeholder в input в зависимости от ширины экрана в блоке Поиск тендеров------------//

window.addEventListener("resize", () => {
  if (window.innerWidth < 700) {
    inputSearchTender.placeholder = "Перечисляйте";
  } else {
    inputSearchTender.placeholder =
      "Поиск по названию закупки, предмету, лоту. Например: снегоходы";
  }
});

//--------Переключение кнопок в блоке Поиск тендеров-------//

function unblockLink() {
  btnNoActive.style.cursor = "pointer";
  btnNoActive.setAttribute("aria-disabled", "false");
  btnNoActive.classList.remove("main-search-tender__link_no-active");
  btnNoActive.style.pointerEvents = "auto";
}

function blockLink() {
  btnNoActive.classList.add("main-search-tender__link_no-active");
  btnNoActive.style.cursor = "not-allowed";
  btnNoActive.style.pointerEvents = "none";
  btnNoActive.setAttribute("aria-disabled", "true");
}

buttonsSearchTender.forEach((button) => {
  button.addEventListener("click", () => {
    buttonsSearchTender.forEach((btn) =>
      btn.classList.remove("main-search-tender__button_active")
    );
    button.classList.add("main-search-tender__button_active");
    if (button.id === "buttonSales") {
      blockLink();
    } else {
      unblockLink();
    }
  });
});

//------Слайдер в функциях сервиса-----//
const sliderServise = document.querySelector('.main-fanction-service__slider')
const indicatorServise = document.querySelector(".main-fanction-service__circles");
const slidesServise = document.querySelectorAll(".main-fanction-service__block-slide");
let currentSlideIndexServise = 0;
const paginationCirclesServise = [];
const sliderWidthServise = sliderServise.clientWidth;

function showSlideServise() {
  sliderServise.style.transform = `translateX(-${currentSlideIndexServise * sliderWidthServise}px)`
}


function changeSlideServise(slideIndex) {
  removeActiveClassServise();
  currentSlideIndexServise = slideIndex;
  addActiveClassServise();
  showSlideServise();
}

function createPaginationCirclesServise() {
  const span = document.createElement("span");
  span.className = "main-fanction-service__circle";
  indicatorServise.appendChild(span);
  paginationCirclesServise.push(span);
}

function addActiveClassServise() {
  paginationCirclesServise[currentSlideIndexServise].classList.add(
    "main-fanction-service__circle_active"
  );
}

function removeActiveClassServise() {
  paginationCirclesServise[currentSlideIndexServise].classList.remove(
    "main-fanction-service__circle_active"
  );
}

function addPaginationServise() {
  slidesServise.forEach(createPaginationCirclesServise);
  paginationCirclesServise[0].classList.add(
    "main-fanction-service__circle_active"
  );
  paginationCirclesServise.forEach((circle, index) => {
    circle.addEventListener("click", () => changeSlideServise(index));
  });
}
showSlideServise();
addPaginationServise();
