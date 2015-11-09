

// $(document).ready(function () {


  var map;
  function initMap() {
    // Create a map object and specify the DOM element for display.

    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.7588358, lng: -122.3639694},
      scrollwheel: false,
      zoom: 12
    }); // end new map function

    var center_marker = new google.maps.Marker({
    position: {lat: 37.7588358, lng: -122.3639694},
    map: map,
    title: 'Center',
    icon: '../imgs/volleyball.png'
    }); // end new marker function

  }; // end init map function

// }); //end ready function