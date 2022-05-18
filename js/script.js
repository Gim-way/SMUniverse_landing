'use strict'


document.querySelector('.headerBars').addEventListener('click', hideNav)
document.querySelector('.headerMiniImage').addEventListener('click', hideNav)

function hideNav() {
    document.querySelector('.headerMini').classList.toggle('hide')
}


document.querySelector('.filterWrap').addEventListener('click', hideFilter)

function hideFilter() {
    document.querySelector('.itemFilterBody').classList.toggle('hide')
}

document.querySelector('.item__sort').addEventListener('click', () => {
    document.querySelector('.item__sortBody').classList.toggle('hide')
})


// slider activate
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;


function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}

function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}

function fillColor() {
    let percent1 = (sliderOne.value / sliderMaxValue) * 100;
    let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #07ECBE ${percent1}% , #07ECBE ${percent2}%, #dadae5 ${percent2}%)`;
}

slideOne();
slideTwo();


let repairNavs = document.querySelectorAll('.repairChooseItem')
let repairContainers = document.querySelectorAll('.repairContainer')

repairNavs.forEach((el) => {
    el.addEventListener('click', () => {
        if (!el.classList.contains('active')) {
            repairNavs.forEach(el => el.classList.toggle('active'))
            repairContainers.forEach(el => el.classList.toggle('hide'))
        }
    })
})
