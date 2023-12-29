import { math } from "./math.js";
import { Chart } from "./graph.js";
const dataTable = document.getElementById('dataTable');
const chartContainer = document.getElementById('chartContainer');
const N =1000;
const samples =[];
for(let i=1; i<N; i++){
    const type = Math.random()<0.5 ? "basic":"sport";
    const km = math.lerp(3000, 300000, Math.random());
  
    const price = math.remap(3000, 300000, 9000,900,km)+math.lerp(-2000,2000,Math.random()) +(type== "basic"? 0:5000);
    samples.push({
        id:i,
        label:type,
        point:[km, price]
    });
}
const options = {
    size: 250,
    axesLabels:["Kilometers", "Price"],
    styles:{
        basic: 'gray',
        sport:'red'
    }
}
const chart= new Chart(
    chartContainer,
    samples,
    options
)

const header = dataTable.createTHead();
const tr = header.insertRow();
tr.insertCell().innerHTML ="Id";
tr.insertCell().innerHTML ="Type";
tr.insertCell().innerHTML ="Km";
tr.insertCell().innerHTML ="Price";
const body = dataTable.createTBody();
for(const sample of samples){
    const tr = body.insertRow();
    tr.insertCell().innerHTML = sample.id;
    tr.insertCell().innerHTML = sample.label;
    tr.insertCell().innerHTML = math.formatNumber(sample.point[0]);
    tr.insertCell().innerHTML = math.formatNumber(sample.point[1]);
}