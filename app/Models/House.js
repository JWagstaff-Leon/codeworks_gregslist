import { ListingType } from "./ListingType.js";

export class House extends ListingType
{
    constructor( { id, year, bathrooms, bedrooms, levels, price, imgUrl, description })
    {
        super();

        this.id = id;
        this.year = year !== undefined ? year : 0;
        this.price = price !== undefined ? price : 0;
        this.bathrooms = bathrooms !== undefined ? bathrooms : 1;
        this.bedrooms = bedrooms !== undefined ? bedrooms : 1;
        this.levels = levels !== undefined ? levels : 1;
        this.imgUrl = imgUrl || "";
        this.description = description || "";
    }

    get ListingTemplate()
    {
        return `
        <div class="col-xl-3 col-lg-4 col-md-6 py-2 house-listing">
            <div class="card rounded-4 h-100">
                <img src="${this.imgUrl}" class="card-img-top house-image h-100">
                <div class="card-img-overlay text-light d-flex align-items-end">
                    <div class="house-text-box p-2">
                        <div class="d-flex justify-content-between">
                            <i class="mdi mdi-pencil selectable" onclick="app.listingsController.openEditor('${this.id}')"></i>
                            <i class="mdi mdi-delete selectable" onclick="app.listingsController.deleteListing('${this.id}')"></i>
                        </div>
                        <h4 class="card-title">${this.levels} ${this.levels == 1 ? "floor" : "floors"} house built in ${this.year}</h4>
                        <h5 class="card-subtitle">${this.bedrooms}bd ${+this.bathrooms}ba for $${Math.ceil(this.price / 1000)}k</h5>
                        <div class="card-text">${this.description}</div>
                    </div>
                </div>
            </div>
        </div>`;
    }
}