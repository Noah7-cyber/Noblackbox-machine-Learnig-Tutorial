import { SketchPad } from "./js/sketchPad.js"
const sketchPadContainer = document.getElementById("sketchPadContainer");
let index =0;
const labels = ["car", "fish", "house", "tree", "bicycle", "guitar","pencil", "clock"];
const data ={
        student: null,
        session: new Date().getTime(),
        drawings:{}
};
const instructions = document.getElementById("instructions");
const sketchPad = new SketchPad(sketchPadContainer)
const student =document.getElementById("student");
const adBtn =document.getElementById("advanceBtn");
adBtn.onclick =() =>{
        if(student.value ==""){
                alert("Please type your name");
                return
        }
        data.student = student.value;
        student.style.display ="none";
        sketchPadContainer.style.visibility = "visible";
        const label = labels[index];
        instructions.innerHTML = `Please draw a ${label}`;
        adBtn.innerHTML = "NEXT";
        adBtn.onclick = next;
}
function next(){
        if (sketchPad.paths.length ==0) {
                alert("Yo draw something first");
                return;
        }
        const label = labels[index];
        data.drawings[label] = sketchPad.paths;
        sketchPad.reset();
        index++;
        if(index<labels.length){
        const nextLabel = labels[index];
        instructions.innerHTML = `Please draw a ${nextLabel}`;
        }else{
                sketchPadContainer.style.visibility ="hidden";
                instructions.innerHTML = "Thank You!";
                advanceBtn.innerHTML = "SAVE";
                advanceBtn.onclick = save;
        }
}
function save(){
        advanceBtn.style.display = 'none';
        instructions.innerHTML="Take your downloaded file and place it along side others in the dataset";
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain; charset = utf-8'+encodeURIComponent(JSON.stringify(data)));
        const fileName = data.session +".json";
        element.setAttribute('download', fileName);    
        document.body.append(element);
        element.style.display = "none";
        element.click();
        document.removeChild(element);
}