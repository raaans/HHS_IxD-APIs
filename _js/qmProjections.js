//get canvas to project chart in
var ctx = document.getElementById('qmProjections').getContext('2d');

Chart.defaults.global.defaultFontColor = '#fff';
Chart.defaults.global.defaultFontFamily = 'Oxanium';

//create chart
var chart = new Chart(ctx, {

    //chart type
    type: 'line',

    //insert labels
    data: {
        labels: ['T+1m', 'T+2m', 'T+3m', 'T+4m', 'T+5m', 'T+6m', 'T+7m', 'T+8m', 'T+9m', 'T+10m', 'T+11m', 'T+12m'],
        datasets: [{
            label: 'Food',
            borderColor: '#ccac55',
            fill: false,
            data: [100, 94, 88, 84, 80, 75, 73]
        }, {
            label: 'Water',
            borderColor: '#5575cc',
            fill: false,
            data: [100, 94, 87, 82, 78, 74, 70]
        }, {
            label: 'Fuel',
            borderColor: '#cc7155',
            fill: false,
            data: [100, 80, 70, 65, 62, 60, 59]
        }, {
            label: 'Minimum Reserves',
            borderColor: '#c65d3c',
            fill: false,
            borderDash: [5, 5],
            pointRadius: 0,
            data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
        }]
    },

    // Configuration options go here
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },

        layout: {
            padding: {
                left: 16,
                right: 16,
                top: 16,
                bottom: 16,
            }
        }
    }
});


//function to update food values
$('#updateFood').click(function () {

    var logValue = parseFloat($('#newFoodLog').val());

    chart.data.datasets[0].data.push({
        y: logValue
    });
    chart.update();
});

//function to update water values
$('#updateWater').click(function () {

    var logValue = parseFloat($('#newWaterLog').val());

    chart.data.datasets[1].data.push({
        y: logValue
    });
    chart.update();
});

//function to update fuel values
$('#updateFuel').click(function () {

    var logValue = parseFloat($('#newFuelLog').val());

    chart.data.datasets[2].data.push({
        y: logValue
    });
    chart.update();
});
