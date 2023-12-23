import {existsSync, writeFileSync} from "fs";
export const utils = {};
utils.formatPercent =(n)=>{
    return (n*100).toFixed(2) + "%";
}
utils.printingProgress = (count, max) =>{
process.stdout.clearLine();
process.stdout.cursorTo(0);
const percent = utils.formatPercent(count/max);
process.stdout.write(`${count} / ${max} ${percent}`);
}
  
utils.groupBy = (objArray, key)=>{
    const groups ={};
    for(let obj of objArray){
        const val =  obj[key];
        if (groups[val] == null){
            groups[val] =[];
        }
        groups[val].push(obj)
    }
    return groups;
}
utils.flaggedUsers =[163882102141, 1663900040545, 1664485938220];
utils.checkNonExistence=(path, writtenFile)=>{
    if(existsSync(path)){

    }else{
        writeFileSync(path, writtenFile);
    }
}