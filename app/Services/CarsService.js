import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";
import { apiService } from "./ApiService.js";

class CarsService
{
    async addCar(newCarData)
    {
        const res = await apiService.post('cars', newCarData);
        const newCar = new Car(res.data);
        ProxyState.listingTypes.cars.listings.unshift(newCar);
        ProxyState.listingTypes = ProxyState.listingTypes;
    }

    async getAllCars()
    {
        const res = await apiService.get("cars");
        const carsListings = res.data.map(v => new Car(v));

        ProxyState.listingTypes.cars.listings = carsListings;
        ProxyState.listingTypes = ProxyState.listingTypes;
    }
}

export const carsService = new CarsService();