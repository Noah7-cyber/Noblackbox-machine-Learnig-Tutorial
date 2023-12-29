import {existsSync, writeFileSync} from "fs";

export const checkNonExistence=(path, writtenFile)=>{
    if(existsSync(path)){

    }else{
        writeFileSync(path, writtenFile);
    }
}