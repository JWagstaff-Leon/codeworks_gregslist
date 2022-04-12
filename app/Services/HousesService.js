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

    async editHouse(houseData, id)
    {
        const res = await apiService.put("houses/" + id, houseData);
        const editedHouse = new House(res.data);
        const index = ProxyState.listingTypes.houses.listings.findIndex(house => house.id === editedHouse.id);
        ProxyState.listingTypes.houses.listings.splice(index, 1, editedHouse);
        ProxyState.listingTypes = ProxyState.listingTypes;
    }

    async deleteHouse(id)
    {
        const res = await apiService.delete("houses/" + id);
        ProxyState.listingTypes.houses.listings = ProxyState.listingTypes.houses.listings.filter(house => house.id != id);
        ProxyState.listingTypes = ProxyState.listingTypes;
    }
}

export const housesService = new HousesService();