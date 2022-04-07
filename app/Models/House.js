import { ListingType } from "./ListingType.js";

export class House extends ListingType
{
    constructor( { address, squareFootage, fullBaths, halfBaths, bedrooms, floors, price, image, description })
    {
        super();
        if(!address || !squareFootage || !price)
        {
            throw new Error("New houses must have at least a: address, square footage, and price.");
        }

        this.address = address;
        this.price = price;
        this.squareFootage = squareFootage;
        this.fullBaths = fullBaths || 0;
        this.halfBaths = halfBaths || 0;
        this.bedrooms = bedrooms || 0;
        this.floors = floors || 1;
        this.image = image || "";
        this.description = description || "No description given.";
    }

    get ListingTemplate()
    {
        return `
        <div class="col-xl-3 col-lg-4 col-md-6 py-2 house-listing">
            <div class="card rounded-4">
                <img src="${this.image}" class="card-img-top house-image">
                <div class="card-img-overlay text-light d-flex align-items-end">
                    <div class="house-text-box p-2">
                    <h4 class="card-title">${this.squareFootage} sqFt @ ${this.address.number} ${this.address.street}</h4>
                    <h5 class="card-subtitle">${this.floors} ${this.floors == 1 ? "floor" : "floors"}, ${this.bedrooms}bd ${+this.fullBaths + +this.halfBaths / 2}ba for $${Math.ceil(this.price / 1000)}k</h5>
                    <div class="card-text">${this.description}</div>
                    </div>
                </div>
            </div>
        </div>`;
    }
}