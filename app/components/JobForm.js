export function getJobForm() {
    return `
    <form onsubmit="app.listingsController.addListing()">
      <div class="mb-3 d-flex justify-content-between">
        <div>
          <label for="title" class="form-label">Job Title</label>
          <input type="text" class="form-control" name="title" id="title" aria-describedby="title"
            placeholder="Job Title..." required>
        </div>
        <div>
          <label for="salary" class="form-label">Salary</label>
          <input type="number" class="form-control" name="salary" id="salary" aria-describedby="salary"
            placeholder="Salary..." min="0" required>
        </div>
      </div>
      <div class="mb-3 d-flex justify-content-between">
        <div>
          <label for="number" class="form-label">Number</label>
          <input type="text" class="form-control" name="number" id="number" aria-describedby="number"
            placeholder="Street Number..." required>
        </div>
        <div>
          <label for="street" class="form-label">Street</label>
          <input type="text" class="form-control" name="street" id="street" aria-describedby="street"
            placeholder="Street Name..." required>
        </div>
      </div>
      <div class="mb-3 d-flex justify-content-between">
        <div>
          <label for="city" class="form-label">City</label>
          <input type="text" class="form-control" name="city" id="city" aria-describedby="city"
            placeholder="City..." required>
        </div>
        <div>
          <label for="state" class="form-label">State</label>
          <input type="text" class="form-control" name="state" id="state" aria-describedby="state"
            placeholder="State..." required>
        </div>
        </div>
      <div class="mb-3 d-flex justify-content-between">
        <div class="mx-1">
          <label for="startHour" class="form-label">Start Hour</label>
          <input type="number" class="form-control" name="startHour" id="startHour" aria-describedby="startHour"
            placeholder="Start Hour..." min="0" max="23" required>
        </div>
        <div class="mx-1">
          <label for="endHour" class="form-label">End Hour</label>
          <input type="number" class="form-control" name="endHour" id="endHour" aria-describedby="endHour" min="0" max="23" placeholder="End Hour..." required>
        </div>
        <div class="mx-1">
          <label for="companyName" class="form-label">Company Name</label>
          <input type="text" class="form-control" name="companyName" id="companyName" aria-describedby="companyName"
            placeholder="Company Name..." required>
        </div>
      </div>
        <div class="mb-3 d-flex justify-content-around">
            <div class="d-flex flex-column mx-1">
                <label for="monday" class="form-label">Monday</label>
                <input type="checkbox" name="monday" id="monday">
            </div>
            <div class="d-flex flex-column mx-1">
                <label for="tuesday" class="form-label">Tuesday</label>
                <input type="checkbox" name="tuesday" id="tuesday">
            </div>
            <div class="d-flex flex-column mx-1">
                <label for="wednesday" class="form-label">Wednesday</label>
                <input type="checkbox" name="wednesday" id="wednesday">
            </div>
            <div class="d-flex flex-column mx-1">
                <label for="thursday" class="form-label">Thursday</label>
                <input type="checkbox" name="thursday" id="thursday">
            </div>
            <div class="d-flex flex-column mx-1">
                <label for="friday" class="form-label">Friday</label>
                <input type="checkbox" name="friday" id="friday">
            </div>
            <div class="d-flex flex-column mx-1">
                <label for="saturday" class="form-label">Saturday</label>
                <input type="checkbox" name="saturday" id="saturday">
            </div>
            <div class="d-flex flex-column mx-1">
                <label for="sunday" class="form-label">Sunday</label>
                <input type="checkbox" name="sunday" id="sunday">
            </div>
        </div>
      <div class="mb-3">
        <div>
          <label for="description" class="form-label">Description</label>
          <textarea type="text" class="form-control" name="description" id="description"
            aria-describedby="description" placeholder="Description..." min="5" max="250" required> </textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Create</button>
      </div>
    </form>`
  }