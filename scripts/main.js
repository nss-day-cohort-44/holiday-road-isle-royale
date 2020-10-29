
import { useParks, getParks } from "./parks/ParkProvider.js"
import { parkSelect } from "./parks/ParkSelect.js"
import "./parks/ParkList.js"
import "./eateries/EateryList.js"
import { getEateries } from "./eateries/EateryProvider.js";
import { eaterySelect } from "./eateries/EaterySelect.js"

console.log("main module test");
getParks();
parkSelect();
getEateries();
eaterySelect()