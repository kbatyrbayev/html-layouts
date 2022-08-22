window.onload = function () {


  /* sticky logic start */

  window.onscroll = function () { setStickyMenu() };

  let navigationMenu = document.getElementById('navigation-menu');
  let sticky = navigationMenu.offsetTop;
  console.log(sticky, 'sticky');

  function setStickyMenu() {
    if (window.pageYOffset > sticky) {
      navigationMenu.classList.add("sticky");
    } else {
      navigationMenu.classList.remove("sticky");
    }
  }

  setStickyMenu();

  /* sticky logic end */




  /* scroll when select menu start*/
  let menu = document.querySelectorAll('.menu__link');

  for (let m of menu) {
    m.addEventListener('click', function (event) {
      event.preventDefault();
      let id = this.getAttribute('href').substr(1);
      let elem = document.getElementById(id).offsetTop;
      window.scrollTo({ top: elem-140, behavior: 'smooth'});
    });
  }
  /* scroll when select menu end*/


  
}
function beforeAfter() {  
  document.getElementById('myPics').style.width = document.getElementById('myRange').value + "%";
}
