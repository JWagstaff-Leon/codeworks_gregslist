import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { getCarForm } from "./components/CarForm.js";
import { getHouseForm } from "./components/HouseForm.js";
import { getJobForm } from "./components/JobForm.js";
/* REVIEW determine if I need to keep these
import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"
import { Address } from "./Models/Address.js"
import { DaysWorked } from "./Models/DaysWorked.js"
*/

class AppState extends EventEmitter
{
    listingTypes =
    {
        /** @type {import('./Models/Car').Car[]} */
        cars: { listings: [], form: getCarForm },
        /*[new Car(
            {
                make: "Ford",
                model: "Escape",
                year: "2004",
                price: "5000",
                color: "White",
                miles: "204000",
                description: "This car runs like a dream Krappa",
                image: "https://thiscatdoesnotexist.com/"
        })],*/
        
        /** @type {import('./Models/House').House[]} */
        houses: { listings: [], form: getHouseForm},
        /*[new House(
            {
                address: new Address({number: "18601", street: "Sandpiper Lane", city: "Gaithersburg", state: "MD"}),
                squareFootage: 1400,
                fullBaths: 2,
                halfBaths: 1,
                bedrooms: 4,
                floors: 2,
                price: 300000,
                image: "https://thiscatdoesnotexist.com/"
        })],*/
        
        /** @type {import('./Models/Job').Job[]} */
        jobs: { listings: [], form: getJobForm }
        /*[new Job(
            {
                title: "Enginner 1",
                salary: "13",
                address: "13004 Fryelands Blvd",
                startHour: 12,
                endHour: 9,
                daysWorked: new DaysWorked({monday: false, tuesday: true, wednesday: true, thursday: true, friday: true, saturday: true, sunday: false}),
                description: "kys lmao",
                companyName: "YSC"
        })]*/
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
