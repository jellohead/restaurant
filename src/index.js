// index.js
import homePage from "./homePage";
import menuPage from "./menuPage";
import contactPage from "./contactPage";

// button click handler
const handler = function (event) {
    console.log('in handler function');
    console.log(event);
    console.log(event.target.innerHTML);
    let contentDiv = document.querySelector('#content');
    while (contentDiv.hasChildNodes()) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
    const btnClicked = event.target.innerHTML;
    switch (btnClicked) {
        case 'Home':
            console.log('in switch Home clicked')
            homePage();
            break;
        case 'Menu':
            console.log('in switch Menu clicked')
            menuPage();
            break;
        default:
            contactPage();
    }
}

function setButtons() {
    console.log('inside setButtons')
    const btnRow = document.querySelectorAll('button');
    console.log(btnRow);
    const buttonArray = [...btnRow];
    console.log(buttonArray);
    buttonArray.forEach((item) => item.addEventListener('click', handler, true));
}


window.addEventListener('DOMContentLoaded', (e) => {
    // console.dir(e);
    console.log('Inside index.js');
    console.log('DOM fully loaded and parsed.');
    setButtons();
    homePage();
})
