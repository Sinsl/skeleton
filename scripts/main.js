const flag = document.querySelector('.flag');
const modalContact = document.querySelector('.modal-contact');
const btnCloseModal = document.querySelector('.contact-close');

flag.addEventListener('click', () => {
  if(!modalContact.classList.contains('active')) {
    modalContact.classList.add('active');
  }
})

const closeHandler = () => {
  if(modalContact.classList.remove('active')) {
    modalContact.classList.add('active');
  }
}

btnCloseModal.addEventListener('click', closeHandler);


const btnBurger = document.querySelector('.burger');
const burgerUl = btnBurger.querySelector('ul');
const nav = document.querySelector('.menu-box').querySelector('nav');

btnBurger.addEventListener('click', () => {
  nav.classList.toggle('active-nav');
  burgerUl.classList.toggle('active');
})

let windowWidth = window.innerWidth;

if(window.innerWidth < 1031) {
  startSliders();
}

window.addEventListener('resize', () => windowWidth = window.innerWidth);

function startSliders() {
  const arrBathHouses = Array.from(document.querySelectorAll('.bathhouse'));
  const arrProjects = Array.from(document.querySelectorAll('.project'));
  

  arrBathHouses.forEach(item => {
    item.addEventListener('click', () => {
      if(windowWidth < 801) {
        getPosition(arrBathHouses, item);
      }      
    })
  })

  arrProjects.forEach(item => {
    item.addEventListener('click', () => {
      if (windowWidth < 1030){
        getPosition(arrProjects, item);
      }      
    });
  })
}

function getPosition(arr, item) {
  let position = '';
  if(item.classList.contains('center')) {
    return;
  }
  if(item.classList.contains('left')) {
    position = 'left';
  }
  if(item.classList.contains('right')) {
    position = 'right';
  }
  clickSlide(arr, position)
}

function clickSlide(arrSlide, position) {

  const bodyStyles = window.getComputedStyle(document.body);
  const timer = parseInt(bodyStyles.getPropertyValue('--duration'));

  let idxLeft = arrSlide.findIndex(item => item.classList.contains('left'));
  let idxCenter = arrSlide.findIndex(item => item.classList.contains('center'));
  let idxRight = arrSlide.findIndex(item => item.classList.contains('right'));

  if(position === 'right') {

    arrSlide[idxLeft].classList.add('end');
    const idxEnd = idxLeft;
    setTimeout(() => {
      arrSlide[idxEnd].classList.remove('active', 'left', 'end');
    }, timer);
    arrSlide[idxCenter].classList.remove('center');
    arrSlide[idxRight].classList.remove('right');

    idxLeft = idxLeft === arrSlide.length - 1 ? 0 : idxLeft + 1;
    idxCenter = idxCenter === arrSlide.length - 1 ? 0 : idxCenter + 1;
    idxRight = idxRight === arrSlide.length - 1 ? 0 : idxRight + 1;

    arrSlide[idxLeft].classList.add('left');
    arrSlide[idxCenter].classList.add('center');
    arrSlide[idxRight].classList.add('active', 'right', 'start');
    setTimeout(() => {
      arrSlide[idxRight].classList.remove('start');
    }, 30);
  }

  if(position === 'left') {

    arrSlide[idxRight].classList.add('end');
    const idxEnd = idxRight;
    setTimeout(() => {
      arrSlide[idxEnd].classList.remove('active', 'right', 'end');
    }, timer);
    arrSlide[idxCenter].classList.remove('center');
    arrSlide[idxLeft].classList.remove('left');

    idxLeft = idxLeft === 0 ? arrSlide.length - 1 : idxLeft - 1;
    idxCenter = idxCenter === 0 ? arrSlide.length - 1 : idxCenter - 1;
    idxRight = idxRight === 0 ? arrSlide.length - 1 : idxRight - 1;

    arrSlide[idxRight].classList.add('right');
    arrSlide[idxCenter].classList.add('center');
    arrSlide[idxLeft].classList.add('active', 'left', 'start');
    setTimeout(() => {
      arrSlide[idxLeft].classList.remove('start');
    }, 30);
  }
}