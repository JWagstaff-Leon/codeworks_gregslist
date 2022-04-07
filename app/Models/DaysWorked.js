export class DaysWorked
{
    constructor( { monday, tuesday, wednesday, thursday, friday, saturday, sunday } )
    {
        this.monday = monday;
        this.tuesday = tuesday;
        this.wednesday = wednesday;
        this.thursday = thursday;
        this.friday = friday;
        this.saturday = saturday;
        this.sunday = sunday;
    }

    get Template()
    {
        let template = "";

        for(let key in this)
        {
            template += `<span class="${this[key] ? "text-light" : "text-secondary"}">${key[0].toUpperCase()} </span>`
        }

        return template;
    }
}