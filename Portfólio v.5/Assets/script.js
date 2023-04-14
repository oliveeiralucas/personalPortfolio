
/*================ dark mode ==============*/
const botaoDarkMode = document.querySelector('#darkMode-icon'); //define o botão do darkMode

function changeBackground() {
  document.documentElement.style.setProperty('--bg-color', '#0d051c');
  //usa a propriedade getProperty Value para pegar o valor da var
  const darkModeIcon = document.querySelector('#darkMode-icon');

  if (darkModeIcon.classList.contains('bx-sun')) {
        darkModeIcon.classList.remove('bx-sun');
        darkModeIcon.classList.add('bx-moon');
        document.documentElement.style.setProperty('--bg-color', '#fdfdfd');
        document.documentElement.style.setProperty('--text-color', '#333');
      } 
  
  else {
        darkModeIcon.classList.remove('bx-moon');
        darkModeIcon.classList.add('bx-sun');
        document.documentElement.style.setProperty('--bg-color', '#0d051c');
        document.documentElement.style.setProperty('--text-color', '#fdfdfd');
  }
}

botaoDarkMode.addEventListener('click', changeBackground);


/*================ scroll sections ==============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
  sections.forEach(sec => {
   let top = window.scrollY;
   let offset = sec.offsetTop - 150;
   let height = sec.offsetHeight;
   let id = sec.getAttribute('id');
   
   if (top >= offset && top < offset + height) {
    navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); 
    });
   }
   
  });
  
  /*================ sticky navbar ==============*/
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
};


/*================ swiper ==============*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});