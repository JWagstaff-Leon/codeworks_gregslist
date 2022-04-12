import { ListingType } from "./ListingType.js";

export class Job extends ListingType
{
    constructor({ jobTitle, rate, hours, description, company })
    {
        super();

        this.id
        this.jobTitle = jobTitle || "";
        this.rate = rate || 0;
        this.hours = hours || 0;
        this.description = description || "No job description given.";
        this.company = company || "";
    }

    get ListingTemplate()
    {
        return `
        <div class="col-xl-3 col-lg-4 col-md-6 py-2 job-listing">
            <div class="card rounded-4 bg-dark text-light">
                <div class="card-body">
                    <h4 class="card-title">${this.jobTitle} ${this.company ? " at " + this.company : ""}</h4>
                    <h5 class="card-subtitle">${this.hours} hours at $${this.rate}/hour</h5>
                    <div class="card-text">${this.description}</div>
                </div>
            </div>
        </div>`;
    }
}