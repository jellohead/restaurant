// populatePage module
const populatePage = () => {

    const headerElement = document.createElement('h1');

    const textNode = document.createTextNode('Restaurant Page');
    headerElement.appendChild(textNode);

    const element = document.querySelector('body');
    element.appendChild(headerElement);
}

export default populatePage;