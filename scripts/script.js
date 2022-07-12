function changeMode() {
    changeClasses();
    changeText();
}

const changeCardTextClasses = () => {
    for (let i = 0; i < cardText.length; i++){
        cardText[i].classList.toggle(darkModeClass);
    }
}

function changeClasses() {
    darkModeBtn.classList.toggle(darkModeClass);
    page.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    banner.classList.toggle(darkModeClass);
    menu.classList.toggle(darkModeClass);
    changeCardTextClasses();
    
}

function changeText() {
    const darkMode = 'Dark Mode: ';

    if(darkModeBtn.classList.contains(darkModeClass)) {
        darkModeBtn.innerHTML = darkMode + 'ON';
        return;
    }

    darkModeBtn.innerHTML = darkMode + 'OFF';
}

const darkModeClass = 'dark-mode';

const darkModeBtn = document.querySelector('.dark-mode-button');
const page = document.querySelector('body');
const footer = document.querySelector('footer');
const cardText = document.getElementsByClassName('card-text');
const banner = document.querySelector('.header-wrapper');
const menu = document.querySelector('.menu-items');

darkModeBtn.addEventListener('click', changeMode);