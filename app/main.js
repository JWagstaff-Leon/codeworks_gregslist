import { ListingsController } from "./Controllers/ListingsController.js";

class App
{
    listingsController = new ListingsController();
}

window["app"] = new App();
