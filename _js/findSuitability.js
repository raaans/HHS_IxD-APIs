//call check functions when submit button is clicked
$("#suitSubmit").click(function () {

    //function that checks if the location is on water via onwater.io
    $.fn.checkIfWater();
    //function that checks if the wind speed isn't too high via weatherstack
    $.fn.checkWind();

    //function that finds a sattelite image of the LZ via mapbox
    $.fn.checkTerrain();

    //clear input fields
    $("#lzLat").val('');
    $("#lzLon").val('');
});


$.fn.checkIfWater = function () {
    //create latitude/longitude variables from the values of the input fields
    var lzLat = $("#lzLat").val();
    var lzLon = $("#lzLon").val();

    //create the API Request URL with the values from the lat & long variables
    var onWaterRequest = 'https://api.onwater.io/api/v1/results/' + lzLat + ',' + lzLon + '?access_token=whz84VME51pQywVPCjBU';

    //find the location for the loading icon
    var loadingIcon = $("#water-loading");
    //find the location for the text
    var suitText = $("#water");

    //display loading icon when function starts
    loadingIcon.addClass("loading-icon");
    suitText.html("checking");

    //fetch data from the API
    fetch(onWaterRequest).then(function (response) {
        //find the 'water' part of the object and check if it's true
        if (response.water == true) {
            //remove the loading icon when check is done
            loadingIcon.removeClass("loading-icon");
            //and display some red text
            suitText.addClass("notSuitable");
            suitText.html("\u2A2F This location is on water");
        } else {
            loadingIcon.removeClass("loading-icon");
            loadingIcon.addClass("suitable");
            //and display some green text
            suitText.addClass("suitable");
            suitText.html("\u2713 This location is not on water");
        }
    })
};

$.fn.checkWind = function () {
    //create latitude/longitude variables from the values of the input fields
    var lzLat = $("#lzLat").val();
    var lzLon = $("#lzLon").val();

    //create the API Request URL with the values from the lat & long variables
    var wStackRequest = 'http://api.weatherstack.com/current?access_key=18f801e8fda64abe236ef016ddf9e0a9&query=' + lzLat + ',' + lzLon;

    //find the location for the loading icon
    var loadingIcon = $("#wind-loading");
    //find the location for the text
    var suitText = $("#wind");

    //display loading icon when function starts
    loadingIcon.addClass("loading-icon");
    suitText.html("checking");

    //fetch data from the API
    fetch(wStackRequest).then(function (response) {
        return response.json();
    }).then(function (response) {
        //find the 'water' part of the object and check if it's true
        if (response.wind_speed > 50) {
            //remove the loading icon when check is done
            loadingIcon.removeClass("loading-icon");
            //and display some red text
            suitText.addClass("notSuitable");
            suitText.html("\u2A2F Wind speed is too high for landing");
        } else {
            loadingIcon.removeClass("loading-icon");
            loadingIcon.addClass("suitable");
            //and display some green text
            suitText.addClass("suitable");
            suitText.html("\u2713 Wind speed okay");
        }
    })
};

$.fn.checkTerrain = function () {
    //create latitude/longitude variables from the values of the input fields
    var lzLat = $("#lzLat").val();
    var lzLon = $("#lzLon").val();

    //create the API Request URL with the values from the lat & long variables
    var mapBoxRequest = 'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/' + lzLat + ',' + lzLon + ',15,0/500x400?access_token=pk.eyJ1Ijoic3RhY2stc25lcnMiLCJhIjoiY2s4enk5emlhMDBpZjNpbnozbjhkYWUwbiJ9.e7lGfppTMSgOEHi4DRSIFg';

    //find the location for the loading icon
    var loadingIcon = $("#wind-loading");
    //find the location for the text
    var suitText = $("#wind");

    //display loading icon when function starts
    loadingIcon.addClass("loading-icon");
    suitText.html("Rendering Sattelite Image");

    //place sattelite image in #picture
    $('#picture').attr("src", mapBoxRequest);
    loadingIcon.removeClass("loading-icon");
};
