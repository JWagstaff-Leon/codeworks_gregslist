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

    async editCar(carData, id)
    {
        const res = await apiService.put("cars/" + id, carData);
        const editedCar = new Car(res.data);
        const index = ProxyState.listingTypes.cars.listings.findIndex(car => car.id === editedCar.id);
        ProxyState.listingTypes.cars.listings.splice(index, 1, editedCar);
        ProxyState.listingTypes = ProxyState.listingTypes;
    }

    async deleteCar(id)
    {
        const res = await apiService.delete("cars/" + id);
        ProxyState.listingTypes.cars.listings = ProxyState.listingTypes.cars.listings.filter(car => car.id != id);
        ProxyState.listingTypes = ProxyState.listingTypes;
    }
}

export const carsService = new CarsService();