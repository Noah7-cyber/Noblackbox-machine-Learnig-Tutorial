import { readFileSync, readdirSync, writeFileSync,stat, existsSync } from "fs";
import { draw } from "../../common/draw.js";
import { constants} from "../../common/constants.js";
import { createCanvas } from "canvas";
import { utils } from "../../common/utils.js";
import { checkNonExistence } from "../../common/checkexistingfile.js";

const canvas = createCanvas(400, 400);
const ctx=  canvas.getContext('2d');

const fileNames = readdirSync(constants.RAW_DIR);
const samples =[];

let id =1;
fileNames.forEach(fn =>{
    
    const content = readFileSync(constants.RAW_DIR+"/"+fn );
    const {session, student, drawings} = JSON.parse(content);
    for(let label in drawings){
        samples.push({
            id, 
            label,
            student_name : student,
            student_id : session
        });
        const paths = drawings[label];
        if(existsSync(constants.JSON_DIR + "/" + id + ".json")){
            
        }else{
            writeFileSync(constants.JSON_DIR + "/" + id + ".json", JSON.stringify(paths));        
             utils.printingProgress(id, fileNames.length*8);
             generateImageFile(constants.IMG_DIR+ "/"+id+ ".png", paths);
        }  
        id++; 
    }
});
checkNonExistence(constants.SAMPLES, JSON.stringify(samples)); 
checkNonExistence(constants.SAMPLES_JS, `const samples = ${JSON.stringify(samples)} ;`)

function generateImageFile(outFile, paths){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    draw.paths(ctx, paths);

    const buffer = canvas.toBuffer("image/png");
    writeFileSync(outFile, buffer);
}