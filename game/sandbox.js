
var api_request = $.get("http://api.giphy.com/v1/gifs/search?q=win&api_key=dc6zaTOxFJmzC&limit=5");

var win_img_ref = api_request.done(function(data) { data.data.fixed_height_downsampled_url});

console.log(win_img_ref);