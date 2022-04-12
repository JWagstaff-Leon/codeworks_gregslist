import { ListingType } from "./ListingType.js";

export class Job extends ListingType
{
    constructor({ id, jobTitle, rate, hours, description, company })
    {
        super();

        this.id = id;
        this.jobTitle = jobTitle || "";
        this.rate = rate || 0;
        this.hours = hours || 0;
        this.description = description || "";
        this.company = company || "";
    }

    get ListingTemplate()
    {
        return `
        <div class="col-xl-3 col-lg-4 col-md-6 py-2 job-listing">
            <div class="card rounded-4 bg-dark text-light h-100">
                <div class="card-body d-flex flex-column">
                    <h4 class="card-title">${this.jobTitle} ${this.company ? " at " + this.company : ""}</h4>
                    <h5 class="card-subtitle">${this.hours} hours at $${this.rate}/hour</h5>
                    <div class="card-text">${this.description}</div>
                    <div class="d-flex justify-content-between flex-grow-1 align-items-end mt-2">
                        <i class="text-light mdi mdi-pencil selectable" onclick="app.listingsController.openEditor('${this.id}')"></i>
                        <i class="mdi mdi-delete selectable" onclick="app.listingsController.deleteListing('${this.id}')"></i>
                    </div>
                </div>
            </div>
        </div>`;
    }
}