window.onload = function () {

  /* sticky logic start */

  window.onscroll = function () { setStickyMenu() };

  let header = document.querySelector('.header');
  let sticky = header.offsetTop;

  function setStickyMenu() {
    if (window.pageYOffset > sticky) {
      header.classList.add("header__sticky");
    } else {
      header.classList.remove("header__sticky");
    }
  }

  setStickyMenu();

  /* sticky logic end */




  /* scroll when select menu start*/
  let menuList = document.querySelectorAll('.menu__link');

  for (let m of menuList) {
    m.addEventListener('click', function (event) {
      event.preventDefault();
      let id = this.getAttribute('href').substr(1);
      let elem = document.getElementById(id).offsetTop;
      window.scrollTo({ top: elem - 140, behavior: 'smooth' });
      if (menu.classList.contains('menu__mobile')) {
        menu.classList.remove('menu__mobile')
      }
    });
  }
  /* scroll when select menu end*/


  /* burger click start */
  const menu = document.querySelector('#menu');
  document.querySelector('.burger').addEventListener('click', function() {
    menu.classList.toggle('menu__mobile')
  })
  /* burger click end */

}


function beforeAfter() {
  document.getElementById('darkPicture').style.width = document.getElementById('myRange').value + "%";
}
