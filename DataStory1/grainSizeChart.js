




function showLongGrain() {
    console.log("show LONG grain")
    document.getElementById("grainSize-long-detailed").style.zIndex = "2";
}

function showMediumGrain() {
    console.log("show MED grain")
    document.getElementById("grainSize-medium-detailed").style.zIndex = "2";
}

function showShortGrain() {
    console.log("show SHORT grain")
    document.getElementById("grainSize-short-detailed").style.zIndex = "2";
}

function goBack() {
    console.log("go back")
    document.getElementById("grainSize-long-detailed").style.zIndex = "-1";
    document.getElementById("grainSize-medium-detailed").style.zIndex = "-2";
    document.getElementById("grainSize-short-detailed").style.zIndex = "-3";
}



console.log('grainSizeChart.js loaded');