import { ListingType } from "./ListingType.js";

export class Car extends ListingType
{
    constructor( { id, make, model, year, price, color, description, imgUrl } )
    {
        super();

        this.id = id
        this.make = make || "";
        this.model = model || "";
        this.price = price || "";
        this.year = year || 0;
        this.color = color || "#808080";
        this.description = description || "";
        this.imgUrl = imgUrl || "";
    }

    get ListingTemplate()
    {
        return `
        <div class="col-xl-3 col-lg-4 col-md-6 py-2 car-listing">
            <div class="card rounded-4 p-2">
                <img src="${this.imgUrl}" class="card-img-top mb-1">
                <div class="card-body" style="border: 3px solid ${this.color}">
                    <h4 class="card-title">${this.year} ${this.make} ${this.model}</h4>
                    <h5 class="card-subtitle">$${this.price}</h5>
                    <div class="card-text">${this.description}</div>
                    <div>
                        <i class="mdi mdi-pencil selectable" onclick="app.listingsController.openEditor('${this.id}')"></i>
                    </div>
                </div>
            </div>
        </div>`;
    }
}