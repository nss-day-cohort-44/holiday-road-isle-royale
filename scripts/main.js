
import { getParks } from "./parks/ParkProvider.js"
import { getAttractions } from "./attractions/AttractionProvider.js"
import { parkSelect } from "./parks/ParkSelect.js"
import { attractionSelect } from "./attractions/AttractionSelect.js"
import "./parks/ParkList.js"
import "./attractions/AttractionList.js"
import "./eateries/EateryList.js"
import { getEateries } from "./eateries/EateryProvider.js";
import { eaterySelect } from "./eateries/EaterySelect.js"
import "./weather/WeatherList.js"

console.log("main module test");
getParks();
parkSelect();
getAttractions();
attractionSelect();

getEateries();
eaterySelect()
