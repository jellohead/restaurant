// menuPage module
const menuPage = () => {
    // if (btnClicked == 'Menu') {
    //     console.log('already menu, nothing to change')
    //     return;
    // }

    // let contentDiv = document.querySelector('#content');
    // while (contentDiv.hasChildNodes()) {
    //     contentDiv.removeChild(contentDiv.firstChild);
    // }

    const headerElement = document.createElement('h1');
    const textNode = document.createTextNode('Menu');
    headerElement.appendChild(textNode);
    const element = document.querySelector('#content');
    element.appendChild(headerElement);

    // const imgElement = document.createElement('img');
    // imgElement.src = '../src/dining.jpeg';
    // imgElement.width = '600';
    // element.appendChild(imgElement);

    const textDiv = document.createElement('div');
    const textDivNode = document.createTextNode('This is our menu.');
    textDiv.appendChild(textDivNode);
    element.appendChild(textDiv);
}

export default menuPage;