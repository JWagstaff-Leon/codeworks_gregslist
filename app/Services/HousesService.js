import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";

class HousesService
{
    addHouse(newHouseData)
    {
        const newHouse = new House(newHouseData);
        ProxyState.listingTypes.houses.listings.push(newHouse);
        ProxyState.listingTypes = ProxyState.listingTypes;
    }
}

export const housesService = new HousesService();