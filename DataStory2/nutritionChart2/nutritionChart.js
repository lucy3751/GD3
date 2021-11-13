
// BAR CHART USING CHART.JS - https://www.chartjs.org/docs/latest/

var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Basmati Rice', 'Jasmine Rice', 'Black Jasmine Rice', 'Arborio Rice', 'Bhutanese Red rice', 'Sticky rice', 'Sushi rice'],
        datasets: [{
            label: '',
            data: [0.4, 0.4, 0.5, 0.3, 1.3, 1.8, 1.8],
            backgroundColor: [
                '#E4DF4B',
                '#E4DF4B',
                '#336A41',
                '#E4DF4B',
                '#FEA63B',
                '#E4DF4B',
                '#E4DF4B'
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



// UPDATE CHART DATASET WITH DROP DOWN - https://www.youtube.com/watch?v=_wnaQ-oR9YE&ab_channel=ExcellenceinExcel
const differentCharts = document.getElementById('differentCharts');

differentCharts.addEventListener('change', differentChartsDataTracker)

function differentChartsDataTracker(eventStuff) {


    // UPDATE TITLE AND CAPTION OF CHART //
    // 1) map the values with their respective chart title and caption
    //console.log(eventStuff.target.value); 

    let chartTitleMap = {
        '0.4, 0.4, 0.5, 0.3, 1.3, 1.8, 1.8': 'Total Fat in Different Types of Rice (g)',
        '1.6, 1.6, 1.6, 0, 1.6, 263.3, 263.3': 'Sodium in Different Types of Rice (mg)',
        '55, 55, 55, 40.8, 124.1, 36.3, 36.3': 'Potassium in Different Types of Rice (mg)',
        '45, 45, 45, 45, 37.1, 45.4, 45.4': 'Carbohydrates in Different Types of Rice (g)',
        '0.6, 0.6, 0.6, no data, 2.9, 0, 0': 'Dietary Fiber in Different Types of Rice (g)',
        '0.1, 0.1, 0.1, no data, no data, 5.6, 5.6': 'Sugar in Different Types of Rice (g)',
        '4.3, 4.3, 4.3, 3.7, 3.7, 3.3, 3.3': 'Protein in Different Types of Rice (g)',
        '0, 0, 0, 0, 0, 0, 0': 'Vitamin A in Different Types of Rice (%)',
        '1.2, 1.2, 1.2, 0.1, 1.2, 0.2, 0.2': 'Calcium in Different Types of Rice (%)',
        '11, 11, 11, 12.7, 4.7, 1.6, 1.6': 'Iron in Different Types of Rice (%)'
    };


    let chartCaptionMap = {
        '0.4, 0.4, 0.5, 0.3, 1.3, 1.8, 1.8': '',
        '1.6, 1.6, 1.6, 0, 1.6, 263.3, 263.3': '',
        '55, 55, 55, 40.8, 124.1, 36.3, 36.3': '',
        '45, 45, 45, 45, 37.1, 45.4, 45.4': '',
        '0.6, 0.6, 0.6, no data, 2.9, 0, 0': 'No data avilable for: Arborio Rice',
        '0.1, 0.1, 0.1, no data, no data, 5.6, 5.6': 'No data avilable for: Brown rice, Arborio Rice, Red rice',
        '4.3, 4.3, 4.3, 3.7, 3.7, 3.3, 3.3': '',
        '0, 0, 0, 0, 0, 0, 0': '',
        '1.2, 1.2, 1.2, 0.1, 1.2, 0.2, 0.2': '',
        '11, 11, 11, 12.7, 4.7, 1.6, 1.6': ''
    };

    

    // 2) store the title and caption of the selected option from the dropdown
    let newChartTitle = chartTitleMap[eventStuff.target.value]; // eventStuff.target.value gets the string of the value from the dropdown option
    let newChartCaption = chartCaptionMap[eventStuff.target.value];


    // 3) update the title and caption text
    const chartTitle = document.getElementById('chartTitle');
    chartTitle.textContent = newChartTitle;

    const chartCaption = document.getElementById('chartCaption');
    chartCaption.textContent = newChartCaption;

    






    // UPDATE CHART // 
    // 1) update data under myChart
    myChart.data.datasets[0].data = differentCharts.value.split(','); // split converts from string to array

    // 2) update the chart
    myChart.update();

}





console.log('nutritionChart.js loaded');