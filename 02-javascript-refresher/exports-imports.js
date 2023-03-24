//File: person.js
//default export
const person={
    name:'Max'
}
export default person;

//File: utility.js
// named export
export const clean=()=>{};
export const baseData= 10;

//File App.js
// In this file we want to import things from person.js
// You can choose the name
import person from './person.js';
import prs from ',.person.js';

// In this file we want to import things from utility.js
//Imported name is defined by export
import {baseData} from './utility.js';
import {clean} from './utility.js';

// You can choose an alias
import {clean as Clean} from './utility.js';

//You can import all and assign a default objectName.
import * as bundled from './utility.js';
// You can access writing bundled.name_function