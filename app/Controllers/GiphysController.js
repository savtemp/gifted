import { ProxyState } from "../AppState.js";
import { giphysService } from "../Services/GiphysService.js";
import { Pop } from "../Utils/Pop.js";






export class GiphysController {

  constructor() {
//  ProxyState.on('gifResults', _)
  }


  


  async getGiphs() {
    try {
      event?.preventDefault()
      // maybe look at gregslist and check form input for multiple inputs at a time
      const term = event.target.query.value
      console.log(term,'this is term');
      await giphysService.getGiphs(term)
      console.log('get giphs controller');
    } catch (error) {
      console.error('[get gifs controller giphy]', error);
      Pop.error(error)
    }
  }

  // first try
  // async getGiphs() {
  //   try {
  //     event?.preventDefault()
  //     const term = event.target.query.value
  //     console.log(term,'this is term');
  //     await giphysService.getGiphs(term)
  //     console.log('get giphs controller');
  //   } catch (error) {
  //     console.error('[get gifs controller giphy]', error);
  //     Pop.error(error)
  //   }
  // }
}
