
// BAR CHART USING CHART.JS - https://www.chartjs.org/docs/latest/


var ctx = document.getElementById('myChart').getContext('2d'); //nutrition chart - different colors of rice grains
var ctx2 = document.getElementById('myChart2').getContext('2d');//top 5 country rice consumption chart (in the beginning)
var ctx3 = document.getElementById('myChart3').getContext('2d');//nutrition chart - japonica vs indica rice


//nutrition chart
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Black Rice', 'Red Rice', 'Brown Rice', 'White Rice'],
        datasets: [{
            label: '',
            data: [8.5, 7.0, 7.9, 6.8],
            backgroundColor: [   
                '#dd7a29'
            ],
            borderColor: [
                'black'
            ],
            borderWidth: 0
        }]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            legend: { display: false },
            tooltip: {
                displayColors: false
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        layout: {
            // padding: 30,
            padding: { right: 40, left: 20 }
        }

    }
});


//nutrition chart #2 - comparing japonica and indica rice
var myChart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Basmati', 'Jasmine', 'Arborio', 'Sticky', 'Calrose'],
        datasets: [{
            label: '',
            data: [1.00, 1.00, 0.00, 166.00, 0.00],
            backgroundColor: [   
                '#b3d240',
                '#b3d240',
                '#dd7a29',
                '#dd7a29',
                '#dd7a29'
            ],
            borderColor: [
                'black'
            ],
            borderWidth: 0
        }]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            legend: { display: false },
            tooltip: {
                displayColors: false
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        layout: {
            // padding: 30,
            padding: { right: 40, left: 20 }
        }

    }
});



//top 5 country rice consumption chart (in the beginning)
const riceTypes = ['Japonica', 'Japonica', 'Indica', 'Indica', 'Japonica and Indica'];
var myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Bangladesh', 'Laos', 'Cambodia', 'Vietnam', 'Indonesia'], //tooltip title
        datasets: [{
            label: '', //tooltip body label
            data: [268.49, 267.44, 238.03, 218.47, 207.68], // tooltip body data
            backgroundColor: [
                '#dd7a29'
            ],
            borderColor: [
                'black'
            ],
            borderWidth: 0
        }]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: { //overwrites what is currently on the tooltip
                    // label: function (context) {
                    //     return `${context.parsed.x}`
                    // },
                    //CUSTOMIZING TOOLTIPS - https://www.youtube.com/watch?v=UxJ5d-HGhJA
                    afterBody: function (context) { //the title
                        console.log(context);
                        return `${riceTypes[context[0].dataIndex]}`;
                    }
                },
                displayColors: false
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        layout: {
            padding: { right: 40, left: 20 }
        },
    }
});


// UPDATE CHART DATASET WITH DROP DOWN - https://www.youtube.com/watch?v=_wnaQ-oR9YE&ab_channel=ExcellenceinExcel
const differentCharts = document.getElementById('differentCharts');
const differentCharts2 = document.getElementById('differentCharts2');

// change title when event listener detects new selection from drop down
differentCharts.addEventListener('change', differentChartsDataTracker)
differentCharts2.addEventListener('change', differentChartsDataTracker2)




// CHANGE TITLE FOR CHART1 (DIFFERENT COLORS)
function differentChartsDataTracker(eventStuff) {

    // STORE CHART TITLE
    const nutritionChartTitle = 'in 100g of Different Grain Colours of Rice';

    // UPDATE TITLE AND CAPTION OF CHART //
    // 1) map the values with their respective chart title and caption
    //console.log(eventStuff.target.value); 


    // chart titles
    let chartTitleMap = {   
        '8.5, 7.0, 7.9, 6.8': `Protein ${nutritionChartTitle} (g)`,
        '3.5, 5.5, 2.2, 1.2': `Iron ${nutritionChartTitle} (mg)`,
        '4.9, 2.0, 2.8, 0.6': `Fiber ${nutritionChartTitle} (g)`,
        '0.3, 0.8, 0.8, 0.3': `Fat ${nutritionChartTitle} (g)`
    };

 
    // 2) store the title and caption of the selected option from the dropdown
    let newChartTitle = chartTitleMap[eventStuff.target.value]; // eventStuff.target.value gets the string of the value from the dropdown option
    
    // 3) update the title and caption text 
    const chartTitle = document.getElementById('chartTitle');
    chartTitle.textContent = newChartTitle;
    
    
    // UPDATE CHART // 
    // 1) update data under myChart
    myChart.data.datasets[0].data = differentCharts.value.split(','); // split converts from string to array

    // 2) update the chart
    myChart.update();
}

// CHANGE TITLE FOR CHART2 (JAPONICA VS INDICA CHART)
function differentChartsDataTracker2(eventStuff) {

    // STORE CHART TITLE
    const nutritionChart2Title = 'in 100g of Popular Indica and Japonica Rice';

    // UPDATE TITLE AND CAPTION OF CHART //
    // 1) map the values with their respective chart title and caption
    //console.log(eventStuff.target.value); 


    // chart titles
    let chartTitleMap2 = {
        '1.00, 1.00, 0.00, 166.00, 0.00': `Sodium ${nutritionChart2Title} (mg)`,
        '35.00, 35.00, 26.00, 23.00, 0.00': `Potassium ${nutritionChart2Title} (mg)`,
        '0.10, 0.10, no data, 3.50, 0.00': `Sugar ${nutritionChart2Title} (g)`,
        '2.70, 2.70, 2.40, 2.00, 6.70': `Protein ${nutritionChart2Title} (g)`,
        '28, 28, 29, 28, 80': `Carbohydrates ${nutritionChart2Title} (g)`
    }

    // chart captions
    let chartCaptionMap2 = {
        '1.00, 1.00, 0.00, 166.00, 0.00': '',
        '35.00, 35.00, 26.00, 23.00, 0.00': '',
        '0.10, 0.10, no data, 3.50, 0.00': 'No data for: Arborio',
        '2.70, 2.70, 2.40, 2.00, 6.70': '',
        '28, 28, 29, 28, 80': ''
    };



    // 2) store the title and caption of the selected option from the dropdown   
    let newChartTitle2 = chartTitleMap2[eventStuff.target.value];
    let newChartCaption2 = chartCaptionMap2[eventStuff.target.value];

    // 3) update the title and caption text 
    const chartTitle2 = document.getElementById('chartTitle2');
    chartTitle2.textContent = newChartTitle2;
    
    const chartCaption2 = document.getElementById('chartCaption2');
    chartCaption2.textContent = newChartCaption2;


    // UPDATE CHART // 
    // 1) update data under myChart
    myChart3.data.datasets[0].data = differentCharts2.value.split(','); // split converts from string to array

    // 2) update the chart
    myChart3.update();
}





console.log('barCharts.js loaded');