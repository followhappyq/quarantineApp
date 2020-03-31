const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;
const slides = slideRight.querySelectorAll("div");

let activeSlideIndex = 0;
let counter = 1;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

const sliderHeight = sliderContainer.clientHeight;
slideRight.style.transform = `translateY(-${counter * sliderHeight}px)`;
slideLeft.style.transform = `translateY(${counter * sliderHeight}px)`;

upButton.addEventListener("click", () => {
  if (counter >= slides.length - 1) return;
  slideRight.style.transition = "transform 0.4s ease-in-out";
  slideLeft.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slideRight.style.transform = `translateY(-${counter * sliderHeight}px)`;
  slideLeft.style.transform = `translateY(${counter * sliderHeight}px)`;
});

downButton.addEventListener("click", () => {
  if (counter <= 0) return;
  slideRight.style.transition = "transform 0.4s ease-in-out";
  slideLeft.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slideRight.style.transform = `translateY(-${counter * sliderHeight}px)`;
  slideLeft.style.transform = `translateY(${counter * sliderHeight}px)`;
});

sliderContainer.addEventListener("transitionend", () => {
  if (slides[counter].id === "lastClone") {
    slideRight.style.transition = "none";
    slideLeft.style.transition = "none";
    counter = slides.length - 2;
    slideRight.style.transform = `translateY(-${counter * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${counter * sliderHeight}px)`;
  }

  if (slides[counter].id === "firstClone") {
    slideRight.style.transition = "none";
    slideLeft.style.transition = "none";
    counter = slides.length - counter;
    slideRight.style.transform = `translateY(-${counter * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${counter * sliderHeight}px)`;
  }
});
