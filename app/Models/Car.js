import { ListingType } from "./ListingType.js";

export class Car extends ListingType
{
    constructor( { make, model, year, price, color, miles, description, image } )
    {
        super();
        if(!make || !model || !price || !year)
        {
            throw new Error("New cars must have at least a: make, model, year, and price.");
        }

        this.make = make;
        this.model = model;
        this.price = price;
        this.year = year;
        this.color = color || "";
        this.miles = miles || "Unknown";
        this.description = description || "No description given.";
        this.image = image || "";
    }

    get ListingTemplate()
    {
        return `
        <div class="col-xl-3 col-lg-4 col-md-6 py-2 car-listing">
            <div class="card rounded-4">
                <img src="${this.image}" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">${this.color} ${this.year} ${this.make} ${this.model}</h4>
                    <h5 class="card-subtitle">${this.miles} miles for $${this.price}</h5>
                    <div class="card-text">${this.description}</div>
                </div>
            </div>
        </div>`;
    }
}