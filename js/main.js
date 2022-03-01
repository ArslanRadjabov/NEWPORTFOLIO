let elOpenMenu = document.querySelector('.header__menu');
let elModal = document.getElementById('navbar');

elOpenMenu.addEventListener('click', function () {
    elModal.classList.toggle('show');
    elOpenMenu.classList.toggle('active');  

});

elColsemodal.addEventListener('click', function () {
    elModal.classList.remove('show');
  });

  
  
window.addEventListener('scroll', function(){
  let header = this.document.querySelector('header');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active',windowPosition);
})

