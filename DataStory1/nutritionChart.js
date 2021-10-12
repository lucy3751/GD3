
// BAR CHART USING CHART.JS - https://www.chartjs.org/docs/latest/

var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['White Rice', 'Brown Rice', 'Basmati Rice', 'Jasmine Rice', 'Wild Rice', 'Arborio Rice', 'Red rice', 'Sticky rice', 'Sushi rice'],
        datasets: [{
            label: '',
            data: [0.4, 1.3, 0.4, 0.4, 0.5, 0.3, 1.3, 1.8, 1.8],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'black'
            ],
            borderWidth: 1
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
        '0.4, 1.3, 0.4, 0.4, 0.5, 0.3, 1.3, 1.8, 1.8': 'Total Fat in Different Types of Rice (g)',
        '1.6, 1.6, 1.6, 1.6, 4.7, 0, 1.6, 263.3, 263.3': 'Sodium in Different Types of Rice (mg)',
        '55, 124.1, 55, 55, 159.9, 40.8, 124.1, 36.3, 36.3': 'Potassium in Different Types of Rice (mg)',
        '45, 37.1, 45, 45, 33.7, 45, 37.1, 45.4, 45.4': 'Carbohydrates in Different Types of Rice (g)',
        '0.6, 2.9, 0.6, 0.6, 2.9, no data, 2.9, 0, 0': 'Dietary Fiber in Different Types of Rice (g)',
        '0.1, no data, 0.1, 0.1, 1.2, no data, no data, 5.6, 5.6': 'Sugar in Different Types of Rice (g)',
        '4.3, 3.7, 4.3, 4.3, 6.3, 3.7, 3.7, 3.3, 3.3': 'Protein in Different Types of Rice (g)',
        '0, 0, 0, 0, 0.1, 0, 0, 0, 0': 'Vitamin A in Different Types of Rice (%)',
        '1.2, 1.2, 1.2, 1.2, 0.4, 0.1, 1.2, 0.2, 0.2': 'Calcium in Different Types of Rice (%)',
        '11, 4.7, 11, 11, 5.3, 12.7, 4.7, 1.6, 1.6': 'Iron in Different Types of Rice (%)'
    };


    let chartCaptionMap = {
        '0.4, 1.3, 0.4, 0.4, 0.5, 0.3, 1.3, 1.8, 1.8': '',
        '1.6, 1.6, 1.6, 1.6, 4.7, 0, 1.6, 263.3, 263.3': '',
        '55, 124.1, 55, 55, 159.9, 40.8, 124.1, 36.3, 36.3': '',
        '45, 37.1, 45, 45, 33.7, 45, 37.1, 45.4, 45.4': '',
        '0.6, 2.9, 0.6, 0.6, 2.9, no data, 2.9, 0, 0': 'No data avilable for: Arborio Rice',
        '0.1, no data, 0.1, 0.1, 1.2, no data, no data, 5.6, 5.6': 'No data avilable for: Brown rice, Arborio Rice, Red rice',
        '4.3, 3.7, 4.3, 4.3, 6.3, 3.7, 3.7, 3.3, 3.3': '',
        '0, 0, 0, 0, 0.1, 0, 0, 0, 0': '',
        '1.2, 1.2, 1.2, 1.2, 0.4, 0.1, 1.2, 0.2, 0.2': '',
        '11, 4.7, 11, 11, 5.3, 12.7, 4.7, 1.6, 1.6': ''
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