import { DaysWorked } from "./DaysWorked.js";
import { ListingType } from "./ListingType.js";

export class Job extends ListingType
{
    constructor({ title, salary, address, startHour, endHour, daysWorked, description, companyName })
    {
        super();

        if(!title || !salary || !address)
        {
            throw new Error("New jobs must have at least a: job title, salary, and address.");
        }
        
        this.title = title;
        this.salary = salary;
        this.address = address;
        this.startHour = startHour || 9;
        this.endHour = endHour || 17;
        this.daysWorked = daysWorked ? new DaysWorked(daysWorked) : new DaysWorked({monday: true, tuesday: true, wednesday: true, thursday: true, friday: true, saturday: false, sunday: false});
        this.description = description || "No job description given.";
        this.companyName = companyName || null;
    }

    get ListingTemplate()
    {
        return `
        <div class="col-xl-3 col-lg-4 col-md-6 py-2 job-listing">
            <div class="card rounded-4 bg-dark text-light">
                <div class="card-body">
                    <h4 class="card-title">${this.title} ${this.companyName ? " at " + this.companyName : ""} for $${this.salary}/hr</h4>
                    <h5 class="card-subtitle">${this.startHour == 12 || this.startHour == 24 ? "12" : this.startHour % 12}${this.startHour >= 12 ? "pm" : "am"}-${this.endHour % 12}${this.endHour >= 12 ? "pm" : "am"}</h5>
                    <h5 class="car-subtitle">${this.daysWorked.Template}</h5>
                    <div class="card-text">${this.description}</div>
                </div>
            </div>
        </div>`;
    }
}