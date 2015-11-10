
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
    ['Mitchell\'s Ice Cream', 37.7442733,-122.4930328],
    ['Smitten Ice Cream', 37.7764741,-122.4944163],
    ['Bi-Rite Creamery', 37.7617011,-122.4958824],
    ['Anthony\'s Cookies', 37.7503175,-122.4904443],
    ['Zanze\'s Cheesecake', 37.7299995, -122.5399102]
  ,ice_cream_cone_icon]; //end sweets

  var breakfast = [
    ['Higher Grounds Coffee House', 37.7344052,-122.4359002],
    ['Farm:Table', 37.7875321,-122.4162266]
  ,fried_egg_icon]; //end breakfast

  var lunch = [
    ['Garaje', 37.7817808,-122.3982832],
    ['Ike\'s Place', 37.7649672,-122.4327321]
  ,hamburger_icon];

  var dinner = [
    ['Marnee Thai', 37.765151,-122.4688046],
    ['Umami Burger', 37.7972857,-122.4373629]
  ,dinner_icon];

  var location_types = [
  sweets,
  breakfast,
  lunch,
  dinner]; //end location_types


// double iteration for loop. Looks through array of location types. Then iterates through each location inside the type, creating a marker for each.

  for (var index1 = 0; index1 < location_types.length; index1++) {
    var current_location_type = location_types[index1]

    for (var index2 = 0; index2 < current_location_type.length; index2++) {
        var current_location = current_location_type[index2];

        var current_icon = current_location_type[current_location_type.length - 1];
        console.log(current_icon);
        var marker = new google.maps.Marker({
          position: {lat: parseFloat(current_location[1]), lng: parseFloat(current_location[2])},
          map: map,
          icon: current_icon,
          title: location[0],
        }); // end new google marker

    }; // end for loop
  }; //end outer for loop

}; //end set_markers function

