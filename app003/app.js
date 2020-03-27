const sliderSlide = document.querySelector('.slider-slide');
const sliderImages = document.querySelectorAll('.slider-slide img');


//Button
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = sliderImages[0].clientWidth;

sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button listener
nextBtn.addEventListener('click', () => {
    if(counter >= sliderImages.length - 1) return;
    sliderSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    sliderSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


sliderSlide.addEventListener('transitionend', () => {
    if(sliderImages[counter].id === 'lastClone'){
        sliderSlide.style.transition = 'none';
        counter = sliderImages.length - 2;
        sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if(sliderImages[counter].id === 'firstClone'){
        sliderSlide.style.transition = 'none';
        counter = sliderImages.length - counter;
        sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});