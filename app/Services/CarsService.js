import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";

class CarsService
{
    addCar(newCarData)
    {
        const newCar = new Car(newCarData);
        ProxyState.listingTypes.cars.listings.push(newCar);
        ProxyState.listingTypes = ProxyState.listingTypes;
    }
}

export const carsService = new CarsService();