





////////// CHART.JS STUFF /////////////

//GETTING STARTED - https://www.chartjs.org/docs/latest/getting-started/

// SETUP
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];
const data = {
    labels: labels, //from above?
    datasets: [{
        axis: 'y',
        data: [5, 5, 5, 2, 20, 30],
        fill: false,


        label: 'My First dataset', //tooltip label
        backgroundColor: ['red','blue','green','yellow','purple','orange'], //change this to change the color of each bar
        borderColor: 'black', //change this to change the outline of each bar
        borderWidth: 1 //outline width
    }]
};
// END OF SETUP //


//CONFIG
const config = {
    type: 'bar', //type of chart
    data: data, //takes the data from "SETUP"
    options: {
        indexAxis: 'y',
        plugins: { legend: { display: false } }
    }
};
// END OF CONFIG //



// RENDERS THE CHART TO THE HTML CANVAS
var myChart = new Chart(
    document.getElementById('myChart'),
    config
);
// END OF RENDER //





// UPDATE CHART DATASET WITH DROP DOWN - https://www.youtube.com/watch?v=_wnaQ-oR9YE&ab_channel=ExcellenceinExcel
const differentCharts = document.getElementById('differentCharts');

differentCharts.addEventListener('change', differentChartsDataTracker)

function differentChartsDataTracker() {
    console.log(differentCharts.value.split(','));

    // converts from string to array
    differentCharts.value.split(',');

    data.datasets[0].data = differentCharts.value.split(',');
    myChart.update();

}




console.log("hello")