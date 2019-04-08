function scrollHeader() {
  var offPosition = window.pageYOffset;
  document.getElementsByClassName('header')[0].setAttribute('style', 'background-position-y: -' + offPosition + 'px');
}

function miniMenu() {
  document.getElementsByClassName('menu')[0].style.display = 'none';
  document.getElementsByClassName('menu')[0].style.width = 0;
}

function maxMenu() {
  document.getElementsByClassName('menu')[0].style.display = 'flex';
  document.getElementsByClassName('menu')[0].style.width = '15vw';
}