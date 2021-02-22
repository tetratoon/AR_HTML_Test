function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');

    mapLink.href = '';
    mapLink.textContent = '';

    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.textContent = '';
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }

    function error() {
        status.textContent = 'Unable to retrieve your location';
    }

    if(!navigator.geolocation) {
        status.textContent = 'Geolocation is not supported by your browser';
    } else {
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
    }

}
function geoShowDirection(){
    const status = document.querySelector('#status');
    if('geolocation' in navigator) {
        let heading = navigator.geolocation.heading;
        if (heading){
            status.textContent =`die Richtung =  ${heading}`;
        } else  status.textContent =`die Richtung kann nicht bestimmt werden`;
      } else {
        status.textContent = `geolocation IS NOT available `;
      }
    
}


// AMCCQDVH
// 62c5a320-0137-4e58-a28e-460e3f2e74c6

function getData_a(){ 
    const status = document.querySelector('#status');
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response.data);
            status.textContent = response.data;
        })
        .catch(error => console.error(error));
}


function getData(){ 
    const mongo = require('mongodb');
    const MongoClient = mongo.MongoClient;
    
    //'mongodb://localhost:27017';
    const url = 'mongodb://cluster0.3gk6d.mongodb.net/EAS2' 
    MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {

        if (err) throw err;

        console.log(client.topology.clientInfo);

        client.close();
    });
}
    
