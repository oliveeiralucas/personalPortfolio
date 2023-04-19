
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

/*================ menu icon navbar ==============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.header nav');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
  navbar.style.transition = "all 0.5s ease";
}

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

  /*================ remove menu icon navbar ==============*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
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

/*================ EMAIL ================= */
function sendEmail(){
  Email.send({
    SecureToken : "a2f7ef7b-e234-4f75-9754-ca31ca10a6ff",
    To : document.getElementById("email").value,
    From : "lucas.oliveira@edu.unifil.br",
    Subject : document.getElementById("subject").value,
    Body : "Name: " +  document.getElementById("name").value 
           + "<br> Email: " + document.getElementById("email").value 
           + "<br> Phone no: " + document.getElementById("phone").value 
           + "<br> Message: " + document.getElementById("message").value
  }).then(
    message => alert(message)
);
}
