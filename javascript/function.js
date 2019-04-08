function scrollHeader() {
  var offPosition = window.pageYOffset;
  document.getElementsByClassName('header')[0].setAttribute('style', 'background-position-y: -' + offPosition + 'px');
}

function miniMenu() {
  document.getElementsByClassName('menu')[0].style.display = 'none';
  document.getElementsByClassName('menu')[0].style.width = 0;
}

function maxMenu() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    document.getElementsByClassName('menu')[0].style.display = 'flex';
    document.getElementsByClassName('menu')[0].style.width = '50vw';
  } else {
    document.getElementsByClassName('menu')[0].style.display = 'flex';
    document.getElementsByClassName('menu')[0].style.width = '15vw';
  }
}