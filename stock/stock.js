// Date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
}

if(mm<10) {
    mm='0'+mm
}

today = yyyy.toString() + mm.toString() + dd.toString();
var year_ago = (yyyy - 1 ).toString() + mm.toString() + dd.toString();
console.log(today)
console.log(year_ago)



// Default button

$("#add").keyup(function(event){
    if(event.keyCode == 13){
        $("#add").click();
    }
});




// ADD SUB

var ticker_array = [];


$(document).ready(function () {


  $('#add').click(function() {
    ticker = $("#ticker_input").val().toUpperCase();
    var html_to_append = '<tr class="row" id="' + ticker +  '_row"><td><button class="remove_button" id="' + ticker + '_remove">Remove</button></td><td class="ticker" id="' + ticker + '">' + ticker + '</td><td id="' + ticker + '_price">Current price</td><td id="' + ticker + '_52wk">% 52wk high</td><td id="' + ticker + '_1yr">1-year</td><td id="' + ticker + '_6mo">6-month</td><td id="' + ticker + '_3mo">3-month</td><td id="' + ticker + '_1wk">1-week</td><td id="' + ticker + '_1day">1-day</td></tr>';


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




// API CALL



$(document).ready(function () {

  $('#refresh').click(function() {

    api_key = "af51aea897f9ebac308d71cc3802ef91"
    symbols = ticker_array.join(',')

    url_current =  "http://marketdata.websol.barchart.com/getQuote.jsonp?key=" + api_key + "&symbols=" + symbols + "&fields=fiftyTwoWkHigh";

    $.ajax ({   // Calls current data
      url: url_current,
      consentType: "application/json",
      dataType: 'jsonp',

      success: function(data) {
        console.log(data);


        $.each(ticker_array, function( index, value){

          var last_price = parseFloat(data.results[index].lastPrice).toFixed(2)

           $("#" + value).html(value);
           $("#" + value + "_price").html("$" + last_price);
           $("#" + value + "_1day").html(parseFloat(data.results[index].percentChange).toFixed(2) + "%");
           $("#" + value + "_52wk").html(((last_price / parseFloat(data.results[index].fiftyTwoWkHigh) - 1) * 100).toFixed(2) + "%");

        }); // end .each function

        }, //end success function

       // error: function(e) {
       //  console.log(e.message);
       //  } //end error function

    }); // end AJAX

    $.each(ticker_array, function( index, value){

    api_key = "af51aea897f9ebac308d71cc3802ef91"

    url_historical =  "http://marketdata.websol.barchart.com/getHistory.jsonp?key=" + api_key + "&symbol=" + value + "&type=weekly" + "&startDate=" + year_ago + "&endDate=" + today + "&maxRecords=100";

        $.ajax ({ // Calls historical data
          url: url_historical,
          consentType: "application/json",
          dataType: 'jsonp',

            success: function(data2) {
              console.log(data2);

              var current_price = parseFloat(data2.results[data2.results.length - 1].close);

              console.log(current_price);

             $("#" + value + "_1yr").html(((current_price / parseFloat(data2.results[0].close) - 1) * 100).toFixed(2) + "%");

             $("#" + value + "_6mo").html(((current_price / parseFloat(data2.results[25].close) - 1) * 100).toFixed(2) + "%");

             $("#" + value + "_3mo").html(((current_price / parseFloat(data2.results[38].close) - 1) * 100).toFixed(2) + "%");

             $("#" + value + "_1wk").html(((current_price / parseFloat(data2.results[data2.results.length - 2].close) - 1) * 100).toFixed(2) + "%");


            }, //end success function

          }); // end AJAX

      }); // end .each function





  }); // end button.click

}); // end ready