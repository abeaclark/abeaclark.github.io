
var row_counter = 1;

var ticker_array = [];


$(document).ready(function () {


  $('#add').click(function() {
    ticker = $("#ticker_input").val().toUpperCase();
    var html_to_append = '<tr class="row" id="' + ticker +  '_row"><td><button class="remove_button" id="' + ticker + '_remove">Remove</button></td><td class="ticker" id="' + ticker + '">' + ticker + '</td><td id="' + ticker + '_price">Current price</td><td>1-day</td></tr>';


    $("table").append(html_to_append);
    $("#" + ticker_array[-1] + "row").html(ticker);
    ticker_array.push(ticker);
    console.log(ticker_array);

  }); // end add-button.click



  $('table').on('click', '.remove_button', function(e){
    $(this).closest('tr').remove()


    ticker = $(this).parent().next().html();
    var index = ticker_array.indexOf(ticker);
    ticker_array.splice(index, 1)
    console.log(ticker_array)

  }); // end remove-button.click

}); // end ready

//change
