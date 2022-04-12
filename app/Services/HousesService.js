import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";
import { apiService } from "./ApiService.js";

class HousesService
{
    async addHouse(newHouseData)
    {
        const res = await apiService.post('houses', newHouseData);
        const newHouse = new House(res.data);
        ProxyState.listingTypes.houses.listings.unshift(newHouse);
        ProxyState.listingTypes = ProxyState.listingTypes;
    }

    async getAllHouses()
    {
        const res = await apiService.get("houses");
        const housesListings = res.data.map(v => new House(v));

        ProxyState.listingTypes.houses.listings = housesListings;
        ProxyState.listingTypes = ProxyState.listingTypes;
    }
}

export const housesService = new HousesService();