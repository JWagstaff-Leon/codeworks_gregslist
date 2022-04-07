import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";

class JobsService
{
    addJob(newJobData)
    {
        const newJob = new Job(newJobData);
        ProxyState.listingTypes.jobs.listings.push(newJob);
        ProxyState.listingTypes = ProxyState.listingTypes;
    }
}

export const jobsService = new JobsService();