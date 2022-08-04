// import { ValuesController } from "./Controllers/ValuesController.js";
import { GiftsController } from "./Controllers/GiftsController.js";
import { GiphysController } from "./Controllers/GiphysController.js";

class App {
  // valuesController = new ValuesController();
  giftsController = new GiftsController()
  giphysController = new GiphysController()
}


window["app"] = new App();
