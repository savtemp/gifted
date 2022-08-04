import { ProxyState } from "../AppState.js";
import { giphysService } from "../Services/GiphysService.js";
import { Pop } from "../Utils/Pop.js";






export class GiphysController {

  constructor() {
 ProxyState.on('gifResults', _)
  }



  async getGiphs() {
    try {
      await giphysService.getGiphs()
      console.log('get giphs controller');
    } catch (error) {
      console.error('[get gifs giphy]', error);
      Pop.error(error)
    }
  }
}
