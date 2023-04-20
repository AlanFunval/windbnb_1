/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/

const $ = (selector) => document.querySelector(selector);

const newElem = tag => document.createElement(tag);

const card = (obj) => {
    const div = newElem('div');
    div.className = 'cardcontainer';

    div.innerHTML = `
    <div class="cardcontainer col p-3 h-50 w-50">
          <div>
          <img class="img-fluid w-100 rounded-4" src="${obj.photo}" alt="${obj.title}">
          </div>
          <div class="info d-flex justify-content-between">
        <div class="d-flex flex-column">
          <span class="text-secondary">${obj.type}</span>
          <span class="fw-medium">${obj.title}</span>
        </div>
        <div>
          <span class="material-symbols-outlined text-danger">star</span>
            <span>${obj.rating}</span>
        </div>
          </div>
        </div>
    `
    return div
}

const addLocations = (locations) => {

  const list = $('#locations');

  locations.forEach(elem => {
    const li = newElem('li');
    li.className = 'p-3';

    li.innerHTML = elem;

    list.appendChild(li);
  })
}

export default {
    addLocations,
    card,
    $,
}