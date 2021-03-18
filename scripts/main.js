const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const signUpBtn = document.getElementById('signUp');

let flag = true;

const toggleMenu = () => {
  if (flag) {
    menu.classList.add('menu--mobile');
    signUpBtn.classList.add('button--red');
    flag = false;
  } else {
    menu.classList.remove('menu--mobile');
    signUpBtn.classList.remove('button--red');
    flag = true;
  }
}

menuBtn.addEventListener("click", toggleMenu)