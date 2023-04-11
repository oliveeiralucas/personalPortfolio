
//Dark theme
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


//navbar sticky
window.onscroll = () => {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
};
