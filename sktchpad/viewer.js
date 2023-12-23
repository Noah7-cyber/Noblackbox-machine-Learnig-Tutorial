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