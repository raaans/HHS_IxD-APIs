var lzLat = $("#lzLat").val();
var lzLon = $("#lzLon").val();

var onWaterRequest = 'https://api.onwater.io/api/v1/results/' + lzLat + ',' + lzLon + '?access_token=whz84VME51pQywVPCjBU';

$("#suitSubmit").click(function () {
    fetch(onWaterRequest).then(function (response) {
        return response.json();
    }).then(function (response) {
        if (response.water == true) {
            alert("Ain't no water here");
        } else {
            alert("Here be water");
        }
    })
});
