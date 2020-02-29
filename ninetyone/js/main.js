new WOW().init();

let sectors = document.querySelectorAll('.sector');
let tabs = document.querySelectorAll('.tab');
for (let sector of sectors) {
  sector.addEventListener('click', function (event) {

    // change tab active
    tabs[0].classList.remove('active');
    tabs[1].classList.add('active');

    // show places div
    document.getElementById('shema-box').style.display = 'none';
    document.getElementById('places').style.display = 'block';

    let loading = document.querySelector('.loading');
    loading.classList.add('active');

    setTimeout(() => {
      loading.classList.remove('active');
      let placesBoxes = document.getElementById('places-boxes');
      placesBoxes.innerHTML = '';
      let row = [7, 6, 5, 4, 3, 2, 1];
      let places = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
      row.forEach((r, rI) => {
        let rowDiv = document.createElement('div');
        rowDiv.className = 'place-row';
        rowDiv.style.display = 'flex';
        let rowTitle = document.createElement('div');
        rowTitle.innerHTML = r + ' ряд';
        rowDiv.appendChild(rowTitle);

        places.forEach((p, pI) => {
          let box = document.createElement('div');
          box.className = "box";
          box.innerHTML = p;
          rowDiv.appendChild(box);
          box.addEventListener('click', function () {
            console.log(this);
          });
        });

        placesBoxes.appendChild(rowDiv);
      })
    }, 3000);
  });
}

let tab1 = document.getElementById('tab-1');
tab1.addEventListener('click', function () {
  // change tab active
  tabs[0].classList.add('active');
  tabs[1].classList.remove('active');

  // show shema div
  document.getElementById('shema-box').style.display = 'block';
  document.getElementById('places').style.display = 'none';

});


var menu = document.querySelectorAll('a[href*="#"]');

for (let m of menu) {
  m.addEventListener('click', function (event) {
    event.preventDefault();
    let id = this.getAttribute('href').substr(1);
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

let navigationMenu = document.getElementById('navigation-menu');
let sticky = navigationMenu.offsetTop;

function setStickyMenu() {
  console.log('setStickyMenu');
  if (window.pageYOffset > sticky) {
    navigationMenu.classList.add("sticky");
  } else {
    navigationMenu.classList.remove("sticky");
  }
}

window.onscroll = function () { setStickyMenu(); };

/* window.addEventListener('resize', function() {
  var w = window.innerWidth;
  if (w <= 699) {
    console.log(w, 'iffffffffffff')
    return;
  } else if (w > 699) {
    console.log(w, 'else if')

  }
}); */



// hamberger logic

var hamburger = document.querySelector('.hamburger');
var navMenu = document.querySelector('.menu');
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('menu-active');
  hamburger.classList.toggle('hamburger-active');
});