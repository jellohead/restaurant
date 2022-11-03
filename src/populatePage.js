// populatePage module
const populatePage = () => {
    const headerElement = document.createElement('h1');
    const textNode = document.createTextNode('Restaurant Page');
    headerElement.appendChild(textNode);
    const element = document.querySelector('#content');
    element.appendChild(headerElement);

    const imgElement = document.createElement('img');
    imgElement.src = '../src/dining.jpeg';
    imgElement.width = '600';
    element.appendChild(imgElement);

    const textDiv = document.createElement('div');
    const textDivNode = document.createTextNode('This is a description of this very nice restaurant. It is a good place to eat. Not too expensive. Good parking.');
    textDiv.appendChild(textDivNode);
    element.appendChild(textDiv);



}

export default populatePage;


// <img src="../src/dining.jpeg" width="600">
// <div>This is a description of this very nice restaurant. It is a good place to eat. Not too expensive. Good
//     parking.
// </div>