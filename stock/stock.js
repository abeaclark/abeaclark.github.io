



// API CALL

api_key = "af51aea897f9ebac308d71cc3802ef91"
symbols = "AAPL"

url =  "http://marketdata.websol.barchart.com/getQuote.jsonp?key=" + api_key + "&symbols=" + symbols

$(document).ready(function () {

  $('#refresh').click(function() {

    $.ajax ({
      url: url,
      consentType: "application/json",
      dataType: 'jsonp',

      success: function(data) {
        console.log(data);

            var tr = document.createElement("tr");
            tr.setAttribute("class", "row");
            tr.setAttribute("id", "row");
            document.getElementById("title_row").appendChild(tr);

            var td_price = document.createElement("td");
            td_price.innerHTML = data.results[0].lastPrice;
            td_price.setAttribute("class", "price");
            document.getElementById("title_row").appendChild(tr);

            var td_1_day_change = document.createElement("td");
            td_1_day_change.innerHTML = data.results[0].netChange;
            td_1_day_change.setAttribute("class", "change");
            document.getElementById("title_row").appendChild(tr);

        }, //end success function

       // error: function(e) {
       //  console.log(e.message);
       //  } //end error function

    }); // end AJAX

  }); // end button.click

}); // end ready