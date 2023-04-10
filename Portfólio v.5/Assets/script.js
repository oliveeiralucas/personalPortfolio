
//Botão Dark Mode
const botaoDarkMode = document.querySelector('#darkMode-icon'); //define o botão do darkMode

function changeBackground() {
  const myBody = document.querySelector('body'); 
  const cssStyle = getComputedStyle(document.documentElement);
    myBody.style.backgroundColor = cssStyle.getPropertyValue('--bg-color-dark-mode'); //usa a propriedade getProperty Value para pegar o valor da var
  
  const darkModeIcon = document.querySelector('#darkMode-icon');

  if (darkModeIcon.classList.contains('bx-sun')) {
        darkModeIcon.classList.remove('bx-sun');
        darkModeIcon.classList.add('bx-moon');
        myBody.style.backgroundColor = cssStyle.getPropertyValue('--bg-color');
  } 
  
  else {
        darkModeIcon.classList.remove('bx-moon');
        darkModeIcon.classList.add('bx-sun');
  }
}

botaoDarkMode.addEventListener('click', changeBackground);