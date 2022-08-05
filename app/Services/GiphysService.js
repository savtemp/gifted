import { ProxyState } from "../AppState.js";
import { GifResult } from "../Models/GifResult.js";
import { giphyApi } from "./AxiosService.js"





class GiphysService {
  
    constructor() {
      
  }


  

  async getGiphs(term) {

    let params = {
      api_key: '9jSlyr78EZYaaD84oyJFjp8pGb84NgTi',
      rating: 'pg',
      q: term
    }
    const res = await giphyApi.get('', { params })
    console.log('[get Giphy giphs]', res.data);
    ProxyState.gifResults = res.data.map(g => new GifResult(g))

  }

  // first try
  // async getGiphs(term) {

  //   let params = {
  //     api_key: '9jSlyr78EZYaaD84oyJFjp8pGb84NgTi',
  //     rating: 'pg',
  //     q: term
  //   }
  //   const res = await giphyApi.get('', { params })
  //   console.log('[get Giphy giphs]', res.data);
  //   ProxyState.gifResults = res.data.map(g => new GifResult(g))

  // }
}


export const giphysService = new GiphysService()
