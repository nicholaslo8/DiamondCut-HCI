let operationInfoContainer = document.querySelector(
  '.operation__items--infoContainer'
);
let operationInfo = document.querySelector('.operation__items--info');
let additional = 100;

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    additional = 250;
  } else {
    additional = 100;
  }
  operationInfoContainer.style.height = `${
    operationInfo.getBoundingClientRect().height + additional
  }px`;
});

if (window.innerWidth < 768) {
  additional = 250;
} else {
  additional = 100;
}

operationInfoContainer.style.height = `${
  operationInfo.getBoundingClientRect().height + additional
}px`;

//Operation Change Content
let tabContainer = document.querySelector('.operation__items--buttonContainer');
let tab = document.querySelectorAll('.operation__items--button');
let contentContainer = document.querySelector(
  '.operation__items--infoContainer'
);
let content = document.querySelectorAll('.operation__items--info');

tab.forEach(item =>
  item.addEventListener('click', e => {
    tab.forEach(items => items.classList.remove('btn-active'));
    e.target.classList.add('btn-active');

    content.forEach(items => items.classList.remove('info--active'));
    document
      .querySelector(`.info--${e.target.dataset.number}`)
      .classList.add('info--active');
  })
);
