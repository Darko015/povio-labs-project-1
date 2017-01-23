var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.4980917, lng: -97.3054185},
    zoom: 4
  });

  var marker = new google.maps.Marker({
     position: new google.maps.LatLng(39.153187, -97.581488),
     map: map,
     icon: 'img/Adam1.png'
  });

  var marker = new google.maps.Marker({
     position: new google.maps.LatLng(45.491568, -122.837551),
     map: map,
     icon: 'img/Terry1.png'
  });

  var marker = new google.maps.Marker({
     position: new google.maps.LatLng(34.750590, -119.268268),
     map: map,
     icon: 'img/michael-location.png'
  });

  var marker = new google.maps.Marker({
     position: new google.maps.LatLng(39.882262, -78.035400),
     map: map,
     icon: 'img/Gloria1.png'
  });

  var marker = new google.maps.Marker({
     position: new google.maps.LatLng(30.903773, -86.972946),
     map: map,
     icon: 'img/Donna1.png'
  });

  var marker = new google.maps.Marker({
     position: new google.maps.LatLng(29.551482, -100.111613),
     map: map,
     icon: 'img/john-location.png'
  });



  var marker = new google.maps.Marker({
     position: new google.maps.LatLng(29.551482, -100.111613),
     map: map,
     icon: 'img/John.png'
  });

  var marker = new google.maps.Marker({
     position: new google.maps.LatLng(5.293855, -131.181025),
     map: map,
     icon: 'img/location.png'
  });

  var marker = new google.maps.Marker({
     position: new google.maps.LatLng(51.138767, -124.595176),
     map: map,
     icon: 'img/blue-spot.png'
  });

  var marker = new google.maps.Marker({
     position: new google.maps.LatLng(49.684559, -100.384178),
     map: map,
     icon: 'img/purple-spot.png'
  });

  var marker = new google.maps.Marker({
     position: new google.maps.LatLng(45.746458, -88.753848),
     map: map,
     icon: 'img/purple-spot.png'
  });

  var marker = new google.maps.Marker({
     position: new google.maps.LatLng(45.746458, -70.761867),
     map: map,
     icon: 'img/blue-spot.png'
  });

  var marker = new google.maps.Marker({
     position: new google.maps.LatLng(29.183940, -111.996080),
     map: map,
     icon: 'img/blue-spot.png'
  });

  var marker = new google.maps.Marker({
     position: new google.maps.LatLng(24.850684, -103.374728),
     map: map,
     icon: 'img/purple-spot.png'
  });

}
