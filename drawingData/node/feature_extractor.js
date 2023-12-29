import { constants } from "../../common/constants.js";
import { features } from "../../common/features.js";
import { utils } from "../../common/utils.js";
import {readFileSync} from "fs";
import { checkNonExistence } from "../../common/checkexistingfile.js";

const samples = JSON.parse(readFileSync(constants.SAMPLES));

for(const sample of samples){
    const paths = JSON.parse(readFileSync(constants.JSON_DIR+"/"+sample.id + ".json"));
    sample.point = [features.getPathCount(paths), features.getPointCount(paths)];
}
const featureNames =["Path Count", "PointCount"];
// writeFileSync(constants.FEATURES, JSON.stringify({featureNames, samples}));
checkNonExistence(constants.FEATURES, JSON.stringify({featureNames, samples}));
checkNonExistence(constants.FEATURES_JS, `const features= ${JSON.stringify({featureNames, samples})} ;`)
