const flag = document.querySelector('.flag');
const modalContact = document.querySelector('.modal-contact');
// const contacty = document.querySelector('.contacty');
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

// contacty.addEventListener('click', closeHandler);
btnCloseModal.addEventListener('click', closeHandler);

