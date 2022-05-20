function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    btnSelector.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText(){
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if(body.classList.contains(darkModeClass)){
        btnSelector.innerHTML = lightMode;
        h1.innerHTML =darkMode + " ON";
        return
    }

    btnSelector.innerHTML = darkMode;
    h1.innerHTML = lightMode + 'ON';

}

const darkModeClass = 'dark-mode';

const btnSelector = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];


btnSelector.addEventListener('click', changeMode);
