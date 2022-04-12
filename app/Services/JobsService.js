import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";
import { apiService } from "./ApiService.js";

class JobsService
{
    async addJob(newJobData)
    {
        const res = await apiService.post('jobs', newJobData);
        const newJob = new Job(res.data);
        ProxyState.listingTypes.jobs.listings.unshift(newJob);
        ProxyState.listingTypes = ProxyState.listingTypes;
    }

    async getAllJobs()
    {
        const res = await apiService.get("jobs");
        const jobsListings = res.data.map(v => new Job(v));

        ProxyState.listingTypes.jobs.listings = jobsListings;
        ProxyState.listingTypes = ProxyState.listingTypes;
    }
}

export const jobsService = new JobsService();