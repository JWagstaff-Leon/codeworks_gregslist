import { ProxyState } from "../AppState.js";
import { carsService } from "../Services/CarsService.js";
import { housesService } from "../Services/HousesService.js";
import { jobsService } from "../Services/JobsService.js";
import { listingsService } from "../Services/ListingsService.js";
import { Pop } from "../Utils/Pop.js";

function _drawListings()
{
    let listingsTemplate = "";
    ProxyState.listingTypes[ProxyState.currentListingType].listings.forEach(v => listingsTemplate += v.ListingTemplate);
    document.getElementById("listings").innerHTML = listingsTemplate;
}

function _drawListingsType()
{
    document.getElementById("new-listing-form").innerHTML = ProxyState.listingTypes[ProxyState.currentListingType].form();
    document.getElementById("new-listing-title").innerText = `New ${ProxyState.currentListingType} listing`;
    document.getElementById("title-suffix").innerText = ` - ${ProxyState.currentListingType}`;
}

function _getCarsFormDetails(form)
{
    try
    {
        const newCarData =
        {
            make: form.make.value,
            model: form.model.value,
            price: form.price.value,
            year: form.year.value,
            color: form.color.value,
            description: form.description.value,
            imgUrl: form.imgUrl.value
        };

        carsService.addCar(newCarData);
    }
    catch(error)
    {
        console.error(error.message);
    }
}

function _getHousesFormDetails(form)
{
    try
    {
        const newHouseData =
        {
            year: form.year.value,
            bathrooms: form.bathrooms.value,
            bedrooms: form.bedrooms.value,
            levels: form.levels.value,
            price: form.price.value,
            imgUrl: form.imgUrl.value,
            description: form.description.value
        };

        housesService.addHouse(newHouseData);
    }
    catch(error)
    {
        console.error(error.message);
    }
}

function  _getJobsFormDetails(form)
{
    try
    {
        const newJobData =
        {
            jobTitle: form.jobTitle.value,
            rate: form.rate.value,
            hours: form.hours.value,
            description: form.description.value,
            company: form.company.value
        };

        jobsService.addJob(newJobData);
    }
    catch(error)
    {
        console.error(error.message);
    }
}

function _getAllListings(listingType)
{
    try
    {
        switch(listingType)
        {
            case "cars":
                carsService.getAllCars();
                break;
            case "houses":
                housesService.getAllHouses();
                break;
            case "jobs":
                jobsService.getAllJobs();
                break;
        }
    }
    catch(error)
    {
        Pop.toast(error.message, "error");
        console.error(error.message);
    }
}

export class ListingsController
{
    constructor()
    {
        ProxyState.on("currentListingType", _drawListings);
        ProxyState.on("listingTypes", _drawListings);
        ProxyState.on("currentListingType", _drawListingsType);

        for(let key in ProxyState.listingTypes)
        {
            _getAllListings(key);
        }

        _drawListings();
        _drawListingsType();
    }

    swtichListingsTo(listing)
    {
        try
        {
            listingsService.switchListingsTo(listing);
            bootstrap.Offcanvas.getOrCreateInstance(document.getElementById("listings-menu")).hide();
        }
        catch(error)
        {
            console.error(error.message);
        }
    }

    submitForm()
    {
        try
        {
            window.event.preventDefault();
            const form = window.event.target;
        
            // REVIEW this is janky
            switch(ProxyState.currentListingType)
            {
                case 'cars':
                    _getCarsFormDetails(form);
                    break;

                case 'houses':
                    _getHousesFormDetails(form);
                    break;

                case 'jobs':
                    _getJobsFormDetails(form);
                    break;
            }

            bootstrap.Modal.getOrCreateInstance(document.getElementById("new-listing-modal")).hide();
            form.reset();
        }
        catch(error)
        {
            console.error(error.message);
        }
    }
}