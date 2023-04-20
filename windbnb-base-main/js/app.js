import data from './data.js';
import dom from './dom.js';

const categories = dom.$('#categories');
const datos = await data.getData('data.js')

const locations = data.getLocations(datos);

dom.addLocations(locations, '#locations');

const listlocation = [... dom.$('#locations').children];

listlocation.forEach(location => {
    location.addEventListener('click', () =>{
        console.log('test')
    })
})

datos.forEach(element => {
    const newcard = dom.card(element);
    categories.appendChild(newcard);
})