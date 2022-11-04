// homePage module
const homePage = () => {

    // let contentDiv = document.querySelector('#content');
    // while (contentDiv.hasChildNodes()) {
    //     contentDiv.removeChild(contentDiv.firstChild);
    // }

    const headerElement = document.createElement('h1');
    const textNode = document.createTextNode('Contact Us');
    headerElement.appendChild(textNode);
    const element = document.querySelector('#content');
    element.appendChild(headerElement);

    // const imgElement = document.createElement('img');
    // imgElement.src = '../src/dining.jpeg';
    // imgElement.width = '600';
    // element.appendChild(imgElement);

    const textDiv = document.createElement('div');
    const textDivNode = document.createTextNode('This is how to contact us.');
    textDiv.appendChild(textDivNode);
    element.appendChild(textDiv);
}

export default homePage;