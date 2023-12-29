//https://www.gstatic.com/charts/loader.js

import { createRow } from "./js/display.js";
import { utils } from "../common/utils.js";
import { features } from "../common/js_objects/features.js";
const {samples, featureNames} = features
const container = document.getElementById("container")
const groups = utils.groupBy(samples, "student_id");
for(let student_id in groups){
    const samples = groups[student_id];
    const studentName = samples[0].student_name;
    createRow(container, studentName, samples);
}

const options = {
    width:400,
    height:400,
    hAxis:{title:featureNames[0]},
    vAxis:{title:featureNames[1]},
    legend:{position:'none'}
}
const chartContainer = document.getElementById('chartContainer')
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(()=>{
    const data = new google.visualization.DataTable();
    data.addColumn('number', featureNames[0]);
    data.addColumn('number', featureNames[1]);
    data.addRows(samples.map(s=>s.point));
    samples.map(s=> console.log(s.point));
    const chart = new google.visualization.ScatterChart(chartContainer);
    chart.draw(data, options);
})