'use strict';

//Navbar auto scroll
let navbar = document.querySelector('.navbar');
let navbarFeatures = document.querySelector('.navbar--features');
let navbarOperation = document.querySelector('.navbar--operation');
let navbarTestimoni = document.querySelector('.navbar--testimoni');

let feature = document.querySelector('.feature');
let operation = document.querySelector('.operation');
let testimoni = document.querySelector('.testimoni');

//Hero Page
let hero = document.querySelector('.hero');

hero.style.height = `calc(40vh - ${navbar.getBoundingClientRect().height}px)`;

//Navbar Opacity
navbar.addEventListener('mouseover', e => {
  document
    .querySelectorAll('.navbar--button')
    .forEach(item => (item.style.opacity = '.5'));
  document.querySelector('.navbar--image').style.opacity = '.5';
  if (
    e.target.classList.contains('navbar--button') ||
    e.target.classList.contains('navbar--image')
  ) {
    e.target.style.opacity = '1';
  }
});

navbar.addEventListener('mouseout', e => {
  document
    .querySelectorAll('.navbar--button')
    .forEach(item => (item.style.opacity = '1'));
  document.querySelector('.navbar--image').style.opacity = '1';
});

//Navbar Sticky
// let featureTop = feature.getBoundingClientRect().top;
// window.addEventListener("scroll", (e) => {
//     if(window.pageYOffset > featureTop){
//         navbar.style.position = "fixed";
//     }
//     else{
//         navbar.style.position = "static";
//     }
// })
let navSticky = entries => {
  let [entrie] = entries;
  console.log(entrie);
  if (!entrie.isIntersecting) {
    navbar.style.position = 'fixed';
  } else {
    navbar.style.position = 'static';
  }
};

let navbarHeight = navbar.getBoundingClientRect().height;
let heroObserver = new IntersectionObserver(navSticky, {
  root: null,
  threshold: 0,
  rootMargin: `-${navbarHeight}px`,
});
heroObserver.observe(hero);

//testimoni page
let testimoniItemsInfoContainer = document.querySelector(
  '.testimoni__items--infoContainer'
);
let testimoniItemsInfo = document.querySelector('.testimoni__items--info');

testimoniItemsInfoContainer.style.height = `${
  testimoniItemsInfo.getBoundingClientRect().height
}px`;

//section animation
let sectionAnimation = (entries, observer) => {
  let [entrie] = entries;

  if (entrie.isIntersecting === false) {
    return;
  }

  if (window.innerWidth > 900) entrie.target.classList.remove('sectionHidden');
  observer.unobserve(entrie.target);
};

let allSection = document.querySelectorAll('.section');
let sectionObserver = new IntersectionObserver(sectionAnimation, {
  root: null,
  threshold: 0.1,
});
allSection.forEach(section => {
  sectionObserver.observe(section);
  if (window.innerWidth > 900) section.classList.add('sectionHidden');
});

//Feature Image Load
let imageLoad = (entries, observe) => {
  let [entrie] = entries;

  if (!entrie.isIntersecting) return;

  entrie.target.src = entrie.target.dataset.src;
  entrie.target.addEventListener('load', e => {
    entrie.target.classList.remove('imageBlur');
  });
};

let allImageLoad = document.querySelectorAll('img[data-src]');
console.log(allImageLoad);
let imageObserver = new IntersectionObserver(imageLoad, {
  root: null,
  threshold: 0,
});
allImageLoad.forEach(img => imageObserver.observe(img));

//Testimoni Slider
let left = document.querySelector('.arrow-left');
let right = document.querySelector('.arrow-right');
let testimoni1 = document.querySelector('.testimoni--1');
let testimoni2 = document.querySelector('.testimoni--2');
let testimoni3 = document.querySelector('.testimoni--3');
let testimoniDot = document.querySelectorAll('.testimoni__dot');

let active = 1;
testimoni1.dataset.number--;
testimoni2.dataset.number--;
testimoni3.dataset.number--;

if (testimoni1.dataset.number == 0 || testimoni1.dataset.number == -1) {
  testimoni1.style.transition = '1s';
}
if (testimoni2.dataset.number == 0 || testimoni2.dataset.number == -1) {
  testimoni2.style.transition = '1s';
}
if (testimoni3.dataset.number == 0 || testimoni3.dataset.number == -1) {
  testimoni3.style.transition = '1s';
}

testimoni1.style.left = `${testimoni1.dataset.number * 100}%`;
testimoni2.style.left = `${testimoni2.dataset.number * 100}%`;
testimoni3.style.left = `${testimoni3.dataset.number * 100}%`;

console.log(left);
left.addEventListener('click', e => {
  console.log('kiri');
  if (testimoni1.dataset.number == -1) {
    testimoni1.dataset.number = 1;
  } else {
    testimoni1.dataset.number--;
  }
  if (testimoni2.dataset.number == -1) {
    testimoni2.dataset.number = 1;
  } else {
    testimoni2.dataset.number--;
  }
  if (testimoni3.dataset.number == -1) {
    testimoni3.dataset.number = 1;
  } else {
    testimoni3.dataset.number--;
  }

  if (testimoni1.dataset.number == 0 || testimoni1.dataset.number == -1) {
    testimoni1.style.transition = '1s';
  } else {
    testimoni1.style.transition = '0s';
  }
  if (testimoni2.dataset.number == 0 || testimoni2.dataset.number == -1) {
    testimoni2.style.transition = '1s';
  } else {
    testimoni2.style.transition = '0s';
  }
  if (testimoni3.dataset.number == 0 || testimoni3.dataset.number == -1) {
    testimoni3.style.transition = '1s';
  } else {
    testimoni3.style.transition = '0s';
  }
  testimoni1.style.left = `${testimoni1.dataset.number * 100}%`;
  testimoni2.style.left = `${testimoni2.dataset.number * 100}%`;
  testimoni3.style.left = `${testimoni3.dataset.number * 100}%`;

  active--;
  if (active <= 0) {
    active = 3;
  }
  testimoniDot.forEach(item => item.classList.remove('dot-active'));
  document.querySelector(`.dot--${active}`).classList.add('dot-active');
});

right.addEventListener('click', e => {
  if (testimoni1.dataset.number == 1) {
    testimoni1.dataset.number = -1;
  } else {
    testimoni1.dataset.number++;
  }
  if (testimoni2.dataset.number == 1) {
    testimoni2.dataset.number = -1;
  } else {
    testimoni2.dataset.number++;
  }
  if (testimoni3.dataset.number == 1) {
    testimoni3.dataset.number = -1;
  } else {
    testimoni3.dataset.number++;
  }

  if (testimoni1.dataset.number == 0 || testimoni1.dataset.number == 1) {
    testimoni1.style.transition = '1s';
  } else {
    testimoni1.style.transition = '0s';
  }
  if (testimoni2.dataset.number == 0 || testimoni2.dataset.number == 1) {
    testimoni2.style.transition = '1s';
  } else {
    testimoni2.style.transition = '0s';
  }
  if (testimoni3.dataset.number == 0 || testimoni3.dataset.number == 1) {
    testimoni3.style.transition = '1s';
  } else {
    testimoni3.style.transition = '0s';
  }
  testimoni1.style.left = `${testimoni1.dataset.number * 100}%`;
  testimoni2.style.left = `${testimoni2.dataset.number * 100}%`;
  testimoni3.style.left = `${testimoni3.dataset.number * 100}%`;

  active++;
  if (active == 4) {
    active = 1;
  }
  testimoniDot.forEach(item => item.classList.remove('dot-active'));
  document.querySelector(`.dot--${active}`).classList.add('dot-active');
});
