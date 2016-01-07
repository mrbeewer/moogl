// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

function initMap() {
  console.log("initMap called");
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.934365, lng: -87.631506},
    zoom: 9
  });
  console.log(map);

  setMarkers(map);

}

  var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'sandstone rock formation in the southern part of the '+
    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
    'south west of the nearest large town, Alice Springs; 450&#160;km '+
    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
    'Aboriginal people of the area. It has many springs, waterholes, '+
    'rock caves and ancient paintings. Uluru is listed as a World '+
    'Heritage Site.</p>'+
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    '(last visited June 22, 2009).</p>'+
    '</div>'+
    '</div>';

  var beaches = [
    ['Bondi Beach', -33.890542, 151.274856, "I'm Bondi Beach"],
    ['Coogee Beach', -33.923036, 151.259052, "I'm Coogee Beach"],
    ['Cronulla Beach', -34.028249, 151.157507, "I'm Cronulla Beach"],
    ['Manly Beach', -33.80010128657071, 151.28747820854187, "I'm Manly Beach"],
    ['Maroubra Beach', -33.950198, 151.259302, "I'm Maroubra Beach"]
  ];

  var data = [ {
    "name": "Tom's Sandwiches",
    "address": "593 Bergen Avenue, Chicago, IL, 60661",
    "coords": [
      -87.631506,
      41.934365
    ],
    "phone": "+1 (840) 456-2353",
    "company": "www.bostonic.com",
    "price": 1,
    "foodtruck": false,
    "byob": false,
    "alcohol": true,
    "latenight": false,
    "outdoor": true,
    "image": "https://pixabay.com/static/uploads/photo/2015/07/30/18/23/burger-868145_150.jpg",
    "burgers": [
      {
        "name": "The Yummy Quadruple Burger",
        "description": "Qui consequat eiusmod magna eu officia ut duis eiusmod incididunt in veniam.",
        "rating": 4,
        "veggie": true,
        "image": "https://pixabay.com/static/uploads/photo/2015/07/01/07/06/burger-827309_150.jpg",
        "meat": {
          "grassfed": true,
          "kobe": true,
          "bison": true,
          "angus": true,
          "turkey": true,
          "lamb": false,
          "elk": false
        }
      }
    ],
    "sides": {
      "duckFries": true,
      "tots": false,
      "macAndCheese": true
    },
    "allergies": {
      "accommodates": true,
      "glutenFree": false
    },
    "challenges": {
      "exists": false,
      "name": "The Meaty Devour",
      "description": "Sunt ad elit ullamco velit anim do minim consequat ullamco nisi sint sint commodo anim."
    },
    "hours": {
      "days": "Monday - Sunday",
      "opening": "7:00AM",
      "closing": "10:00PM",
      "closed": false
    }
  },
  {
    "name": "Bob's Burgers",
    "address": "929 Seabring Street, Chicago, IL, 60612",
    "coords": [
      -87.714567,
      42.029209
    ],
    "phone": "+1 (928) 430-2881",
    "company": "www.envire.com",
    "price": 2,
    "foodtruck": false,
    "byob": false,
    "alcohol": true,
    "latenight": true,
    "outdoor": true,
    "image": "https://pixabay.com/static/uploads/photo/2015/09/22/15/42/burger-951896_150.jpg",
    "burgers": [
      {
        "name": "The Delectable Lubricated Sandwich",
        "description": "Quis pariatur et magna sint exercitation cillum proident ut cupidatat cillum esse aute.",
        "rating": 4,
        "veggie": true,
        "image": "https://pixabay.com/static/uploads/photo/2015/07/01/07/06/burger-827309_150.jpg",
        "meat": {
          "grassfed": false,
          "kobe": true,
          "bison": true,
          "angus": true,
          "turkey": true,
          "lamb": true,
          "elk": true
        }
      },
      {
        "name": "The Yummy Lubricated Sandwich",
        "description": "Mollit non laborum velit velit nisi pariatur in amet sunt.",
        "rating": 4,
        "veggie": true,
        "image": "https://pixabay.com/static/uploads/photo/2015/10/13/21/09/sandwich-986799_150.jpg",
        "meat": {
          "grassfed": true,
          "kobe": true,
          "bison": false,
          "angus": true,
          "turkey": false,
          "lamb": false,
          "elk": true
        }
      }
    ],
    "sides": {
      "duckFries": true,
      "tots": false,
      "macAndCheese": true
    },
    "allergies": {
      "accommodates": false,
      "glutenFree": true
    },
    "challenges": {
      "exists": false,
      "name": "The Delectable Eat",
      "description": "Minim eiusmod consectetur id sint consectetur Lorem est enim qui do eu."
    },
    "hours": {
      "days": "Monday - Sunday",
      "opening": "7:00AM",
      "closing": "10:00PM",
      "closed": false
    }
  }];

  console.log(data);

  var infoWindows = [];



function setMarkers(map) {
  console.log("setMarkers called");
  var marker = [];
  for (var i = 0; i < data.length; i++) {
    var place = data[i];
    marker[i] = new markerItem(place, map);


    // var infoWindow = new google.maps.InfoWindow({
    //   content: beach[3],
    //   maxWidth: 200
    // });
    //
    // var image = {
    //   url: 'orange-pin.png',
    //   size: new google.maps.Size(30, 44)
    //   // origin: new google.maps.Point(0,0),
    //   // anchor: new google.maps.Point(0, 0)
    // };
    //
    // marker[i] = new google.maps.Marker({
    //   position: {lat: beach[1], lng: beach[2]},
    //   map: map,
    //   title: beach[0],
    //   icon: image
    // });
    // marker[i].addListener('click', function() {
    //   infoWindow.open(map, marker[i]);
    // });

  }
}

var markerItem = function(beach, map) {
  // this.infoWindow = new google.maps.InfoWindow({
  //   content: beach[3],
  //   maxWidth: 200
  // });
  this.image = {
    url: 'orange-pin.png',
    size: new google.maps.Size(30, 44)
    // origin: new google.maps.Point(0,0),
    // anchor: new google.maps.Point(0, 0)
  };

  this.marker = new google.maps.Marker({
    position: {lat: beach.coords[1], lng: beach.coords[0]},
    map: map,
    title: beach.name,
    icon: this.image
  });

  // var winda = this.infoWindow;
  var marka = this.marker;
  this.marker.addListener('click', function() {
    for (var i=0;i<infoWindows.length;i++) {
       infoWindows[i].close();
    }
    console.log(beach[0]);
    var infowindow = new google.maps.InfoWindow();
    var content = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">' + beach.name + '</h1>'+
      '<div id="address">'+
      '<p>' + beach.address + '</p>' +
      '<p>' + beach.burgers[0].name + '</p>' +
      '<p>Rating: ' + beach.burgers[0].rating + ' out of 4</p>' +
      '<p><img src="' + beach.burgers[0].image + '" alt="" /></p>' +
      '<input type="button" value="Button">';
    infowindow.setContent(content);
    infoWindows.push(infowindow);
    infowindow.open(map, marka);
    // winda.open(map, marka);
  });
}


  // Try HTML5 geolocation.
  // ...my browser blocks the geolocation for local files
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       var pos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };
//
//       infoWindow.setPosition(pos);
//       infoWindow.setContent('Location found.');
//       map.setCenter(pos);
//     }, function() {
//       handleLocationError(true, infoWindow, map.getCenter());
//     });
//   } else {
//     // Browser doesn't support Geolocation
//     handleLocationError(false, infoWindow, map.getCenter());
//   }
// }
//
// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(browserHasGeolocation ?
//                         'Error: The Geolocation service failed.' :
//                         'Error: Your browser doesn\'t support geolocation.');
// }
