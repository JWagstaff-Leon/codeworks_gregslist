import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { getCarForm } from "./components/CarForm.js";
import { getHouseForm } from "./components/HouseForm.js";
import { getJobForm } from "./components/JobForm.js";
*/

class AppState extends EventEmitter
{
    listingTypes =
    {
        cars: { listings: [], form: getCarForm },
        houses: { listings: [], form: getHouseForm},
        jobs: { listings: [], form: getJobForm }
    }

    currentListingType = "cars";
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
