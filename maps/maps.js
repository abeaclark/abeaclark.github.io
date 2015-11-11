
function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.7588358, lng: -122.3639694},
      scrollwheel: false,
      zoom: 12
    }); // end new map function

    set_markers(map);

  } // end init map function


function set_markers(map) {
  var icon_size = new google.maps.Size(40, 40);
  var icon_origin = new google.maps.Point(0,0); // origin
  var icon_anchor = new google.maps.Point(0, 0); // anchor

  var ice_cream_cone_icon = {
    url: '../imgs/ice_cream_cone.svg',
    scaledSize: icon_size,
    origin: icon_origin,
    anchor: icon_anchor
  };

  var fried_egg_icon = {
    url: '../imgs/fried_egg.svg',
    scaledSize: icon_size,
    origin: icon_origin,
    anchor: icon_anchor
    };

  var hamburger_icon = {
    url: '../imgs/hamburger.svg',
    scaledSize: icon_size,
    origin: icon_origin,
    anchor: icon_anchor
    };

  var dinner_icon = {
    url: '../imgs/dinner.svg',
    scaledSize: icon_size,
    origin: icon_origin,
    anchor: icon_anchor
    };

  var sweets = [
    ['Mitchell\'s Ice Cream', 'ChIJQVAijUJ-j4ARfJZLVQMz1Dw', 'Always busy and parking is tough, but the Chocolate Chip Ice Cream is amazing!'],
    ['Smitten Ice Cream', 'ChIJ70taCKKAhYAR5IMmYwQT4Ts', 'Small portions, but the richness of Gelato'],
    ['Bi-Rite Creamery', 'ChIJh1wqPBh-j4ARliLVoyr5W_c', 'Best Peanut Brittle Ice Cream I have ever tasted. Across the street from Dolores Park, which has a great view of the city.'],
    ['Anthony\'s Cookies', 'ChIJtYlXHEF-j4ARcvUDxWd2c8Q', 'Good, fresh cookies at a reasonable price.'],
    ['Zanze\'s Cheesecake', 'ChIJVaXle7h9j4AROQGRgHfjDPU', 'San Francisco\'s best Cheesecake. Light and fluffy. Open only certain days of the week and sometimes sell out.']
  ,ice_cream_cone_icon]; //end sweets

  var breakfast = [
    ['Higher Grounds Coffee House', 'ChIJmb4VnmR-j4ARzver3HK6gKU', 'Great omletes and crepes for breakfast. Hardly any seating and cash only.'],
    ['Farm:Table', 'ChIJWyb_ipGAhYARbaiIO1cGIrw', 'Always busy and hardly any seating, but the fruit toast with Marscapone is great.']
  ,fried_egg_icon]; //end breakfast

  var lunch = [
    ['Garaje', 'ChIJ6Z5t1n6AhYARaY_WxdP44r0', 'Cash only, has a mexi-american feel with some San Fancisco flavor like crab cakes. Cool atmosphere.'],
    ['Ike\'s Place', 'ChIJGVMVbRx-j4ARMUOA74orYsI', 'Heralded as the best sandwich shop in the city.']
  ,hamburger_icon];

  var dinner = [
    ['Marnee Thai', 'ChIJRQiL_VyHhYARDJPvbliHh-o', 'The Pad Thai is unrivaled.'],
    ['Umami Burger', 'ChIJ5R8Cn9qAhYAR97rbI4enNm8', 'Yummy burgers with thin cut fries. A bit more expensive but worth it for a classing burger experience.']
  ,dinner_icon];

  var location_types = [
  sweets,
  breakfast,
  lunch,
  dinner]; //end location_types

  // var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);

// double iteration for loop. Looks through array of location types. Then iterates through each location inside the type, creating a marker for each.

  for (var index1 = 0; index1 < location_types.length; index1++) {
    var current_location_type = location_types[index1]

    for (var index2 = 0; index2 < current_location_type.length -1; index2++) {

      var current_location = current_location_type[index2];
      var location_ID = current_location[1];
      var current_icon = current_location_type[current_location_type.length - 1];

      service.getDetails({
        placeId: location_ID
        }, function(place, status) {

          if (status === google.maps.places.PlacesServiceStatus.OK) {

            var marker = new google.maps.Marker({
              position: place.geometry.location,
              map: map,
              icon: current_icon,
              title: location[0],
            }); // end new google marker

            var current_description = current_location[2];
              console.log(current_description);
            var marker_content = '<div style="font-weight: bold;">' + place.name + '</div> <br> <div style="font-weight: normal; width: 8em;">' + current_description + '</div>'

            var infowindow = new google.maps.InfoWindow();

            console.log(marker_content)

            google.maps.event.addListener(marker, 'click', function() {
              // return function() {
                infowindow.setOptions({
                  content: marker_content
                });
                infowindow.open(map, marker);
              });
                // infowindow.setContent(marker_content);
                // infowindow.open(map, marker);
              // }
              // })(marker, marker_content));

          }; // end if status
        }); //end service, get details


    }; // end for loop
  }; //end outer for loop


}; //end set_markers function



