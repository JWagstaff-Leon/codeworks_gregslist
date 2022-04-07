export function getHouseForm() {
    return `
    <form onsubmit="app.listingsController.addListing()">
        <div class="mb-3">
        <label for="price" class="form-label">Price</label>
        <input type="number" class="form-control" name="price" id="price" aria-describedby="price"
          placeholder="Price..." min="1" required>
        </div>
      <div class="mb-3 d-flex justify-content-between">
        <div>
          <label for="number" class="form-label">Number</label>
          <input type="text" class="form-control" name="number" id="number" aria-describedby="number"
            placeholder="House Number..." required>
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
          <label for="bedrooms" class="form-label">Bedrooms</label>
          <input type="number" class="form-control" name="bedrooms" id="bedrooms" aria-describedby="bedrooms"
            placeholder="Bedrooms..." min="1" required>
        </div>
        <div class="mx-1">
          <label for="fullBaths" class="form-label">Full Bathrooms</label>
          <input type="number" class="form-control" name="fullBaths" id="fullBaths" aria-describedby="fullBaths" placeholder="Full Baths..." min="1" required>
        </div>
        <div class="mx-1">
          <label for="halfBaths" class="form-label">Half Baths</label>
          <input type="number" class="form-control" name="halfBaths" id="halfBaths" aria-describedby="halfBaths"
            placeholder="Half Baths..." required>
        </div>
        <div class="mx-1">
          <label for="floors" class="form-label">Floors</label>
          <input type="number" class="form-control" name="floors" id="floors" aria-describedby="floors"
            placeholder="Floors..." min="1" required>
        </div>
      </div>
      <div class="mb-3 d-flex justify-content-between">
        <div>
          <label for="image" class="form-label">Image Url</label>
          <input type="url" class="form-control" name="image" id="image" aria-describedby="image"
            placeholder="Image Url..." required>
        </div>
        <div>
            <label for="squareFootage" class="form-label">Square Footage</label>
            <input type="number" class="form-control" name="squareFootage" id="squareFootage" aria-describedby="squareFootage" placeholder="Square Footage..." min="1" required>
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