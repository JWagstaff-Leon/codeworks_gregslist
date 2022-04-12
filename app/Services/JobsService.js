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

    async editJob(jobData, id)
    {
        const res = await apiService.put("jobs/" + id, jobData);
        const editedJob = new Job(res.data);
        const index = ProxyState.listingTypes.jobs.listings.findIndex(job => job.id === editedJob.id);
        ProxyState.listingTypes.jobs.listings.splice(index, 1, editedJob);
        ProxyState.listingTypes = ProxyState.listingTypes;
    }

    async deleteJob(id)
    {
        const res = await apiService.delete("jobs/" + id);
        ProxyState.listingTypes.jobs.listings = ProxyState.listingTypes.jobs.listings.filter(job => job.id != id);
        ProxyState.listingTypes = ProxyState.listingTypes;
    }
}

export const jobsService = new JobsService();