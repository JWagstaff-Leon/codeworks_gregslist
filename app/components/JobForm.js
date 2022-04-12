import { Job } from "../Models/Job.js";

export function getJobForm(job = new Job({}))
{
    return `
    <form onsubmit="app.listingsController.submitForm('${job.id}')">
      <div class="mb-3 d-flex justify-content-between">
        <div>
          <label for="jobTitle" class="form-label">Job Title</label>
          <input type="text" class="form-control" name="jobTitle" id="jobTitle" aria-describedby="jobTitle"
            placeholder="Job Title..." required value="${job.jobTitle}">
        </div>
        <div>
          <label for="rate" class="form-label">Hourly Rate</label>
          <input type="number" class="form-control" name="rate" id="rate" aria-describedby="rate"
            placeholder="Hourly Rate..." min="0" required value="${job.rate}">
        </div>
      </div>
      <div class="mb-3 d-flex justify-content-between">
        <div class="mx-1">
          <label for="hours" class="form-label">Hours</label>
          <input type="number" class="form-control" name="hours" id="hours" aria-describedby="hours"
            placeholder="Hours..." required value="${job.hours}">
        </div>
        <div class="mx-1">
          <label for="company" class="form-label">Company Name</label>
          <input type="text" class="form-control" name="company" id="company" aria-describedby="company"
            placeholder="Company Name..." required value="${job.company}">
        </div>
      </div>
      <div class="mb-3">
        <div>
          <label for="description" class="form-label">Description</label>
          <textarea type="text" class="form-control" name="description" id="description"
            aria-describedby="description" placeholder="No description given." min="5" max="250" required></textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">${job.id ? "Edit" : "Create"}</button>
      </div>
    </form>`
  }