import { ProxyState } from "../AppState.js";

class ListingsService
{
    switchListingsTo(listing)
    {
        if(ProxyState.listingTypes.hasOwnProperty(listing))
        {
            ProxyState.currentListingType = listing;
        }
        else
        {
            throw new Error(`property ${listing} is invalid`);
        }
    }
}

export const listingsService = new ListingsService();