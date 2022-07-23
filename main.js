let sliderContainer = document.getElementById('sliderContainer');
let slider = document.getElementById('slider');
let cards = slider.getElementsByTagName('li');

let elementsToShow = 3;
if(document.body.clientWidth<1000){
    elementsToShow = 1;
}else if(document.body.clientWidth<1500){
    elementsToShow = 2;
}


let sliderContainerWidth = sliderContainer.clientWidth;

let cardWidth = sliderContainerWidth / elementsToShow;

slider.style.width = cards.length * cardWidth + 'px';
slider.style.transition='margin';
slider.style.transitionDuration='1s';

for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    element.style.width = cardWidth + 'px';
}

function prev() {
    if (+slider.style.marginLeft.slice(0, -2) != -cardWidth * (cards.length - elementsToShow))
        slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2)) - cardWidth) + 'px';
}

function next() {
    if (+slider.style.marginLeft.slice(0, -2) != 0)
        slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2)) + cardWidth) + 'px';
}

function autoPlay(){
    prev()
    
    if (+slider.style.marginLeft.slice(0, -2) === -cardWidth * (cards.length - elementsToShow)){
        slider.style.marginLeft = "0px";
    }   
    
    setTimeout(() => {
        autoPlay();
    }, 3000);
}

setTimeout(() => {
    autoPlay();
}, 3000);