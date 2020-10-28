
import { useParks, getParks } from "./parks/ParkProvider.js"
import { parkSelect } from "./parks/ParkSelect.js"
import "./parks/ParkList.js"

console.log("main module test");
getParks();
parkSelect();
