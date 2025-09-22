const locations = {
      "north block":   {lat:11.19962559461935, lng: 75.85851324130111},
      "newblock":   {lat: 11.198303370231091 , lng: 75.85605303781296},
      "office":    {lat: 11.198492812734091, lng: 75.85736155829332},
      "auditorium":{lat:11.198298967264963,  lng: 75.85806244847335},
      "library":{lat :11.197902189405418,lng:75.85782161400702},
      "commerce block":{lat:11.198626632276449,lng: 75.85681701376011},
      "chemistry block":{lat:11.199153622924891,lng: 75.8567965483505},
      "indoor stadium":{lat:11.19955843381968,lng: 75.85715776704386},
      "parisons hall":{lat:11.198808199191674,lng: 75.85734234652195},
      "western block":{lat:11.19832676724093,lng: 75.8563223354339},
      "computer science":{lat:11.198474101258071,lng: 75.85544620606129},
      "physics block":{lat:11.197890719062606, lng:75.8555361486976},
      "zoology block":{lat:11.198283461321385,lng: 75.85687430402704}, 
      "basket ball court":{lat :11.197868531509867, lng:75.85715083716322},
      "pm institute of civil services examinations":{lat:11.197957714187858, lng:75.85687809674717},
      "azad hostel":{lat:11.1974011467516,lng: 75.85768402009562},
      "alm hostel":{lat:11.197712658884612,lng: 75.85613078188791},
      "cafeteria":{lat:11.197436775963556,lng: 75.8566990508627},
      "botany block":{lat:11.198693277609358,lng: 75.8581468638727},
      "play ground":{lat:11.199171978030941,lng: 75.85631021046355},
      "tennis court":{lat:11.199592512327811,lng: 75.85722947830297},
      "iqbal hostel":{lat:11.196977189962734, lng:75.8580058232479},
  };

  // Initialize map
  const map = L.map('map').setView([11.199638273705288, 75.85841571928577], 100);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Add all markers initially
  const markers = {};
  for(const place in locations){
    markers[place] = L.marker([locations[place].lat, locations[place].lng])
                      .addTo(map)
                      .bindPopup(`<b>${place.charAt(0).toUpperCase() + place.slice(1)}</b>`);
  }

  // Search function
  function gotoplace(para){
    let input = para.trim().toLowerCase().replace(/\s+/g,"");
    // let input = document.getElementById("placeInput").value.trim().toLowerCase().replace(/\s+/g,"");
    const found = Object.keys(locations).find(key => key.replace(/\s+/g,"").toLowerCase() === input);
    if(found){
      const {lat,lng} = locations[found];
      map.flyTo([lat,lng],18,{animate:true,duration:1.5});
      markers[found].openPopup();
    }else{
      alert("Place not found. Try typing exactly as in the list.");
    }
  }