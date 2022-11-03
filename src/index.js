// index.js
import populatePage from "./populatePage";


window.addEventListener('DOMContentLoaded', (e) => {
    console.dir(e);
    console.log('Inside index.js');
    console.log('DOM fully loaded and parsed.');
    populatePage();
})
