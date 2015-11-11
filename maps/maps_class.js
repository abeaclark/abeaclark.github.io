

function location (name, location_ID) {
  this.name = name;
  this.location_ID = location_ID;
  this.commentary = ""
  this.photos = []
  this.rating = ""
};

location.prototype = {
  constructor: location,

update_Commentary:function (commentary)  {
        this.commentary = commentary
    },

update_photos:function (photos)  {
        this.photos = photos
    },

update_rating:function (rating)  {
        this.rating = rating
    },

};

var newPlace = new location("Higher Grounds Coffee House", "Code");
newPlace.update_Commentary("This is a great spot");
return newPlace.commentary;
newPlace.update_photos([1, 1, 2]);
return newPlace.photos;
newPlace.update_rating("5");
return newPlace.rating;

