/* 
Aqui van todas las funciones o variables relacionadas
con la manipulación de los datos de la aplicacion
*/

const getData = async () => {
    // Obytener los datos del archivo 'stays.json'
    const data = fetch('./stays.json')
      .then(response => response.json())
      .then(json => json)
  
    return data;
  }

  const getLocations = (data) => {
    let locations = data.map( elem => elem.city);

    locations = new Set(locations);
    locations = [...locations];

    return locations
  }
  
  export default {
    getData,
    getLocations,
  }