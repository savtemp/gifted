import { giphyApi } from "./AxiosService.js"





class GiphysService {
  
    constructor() {
      
  }


  

  async getGiphs() {

    let params = {
      api_key: '9jSlyr78EZYaaD84oyJFjp8pGb84NgTi',
      rating: 'pg',
      q: ''
    }
    const res = await giphyApi.get(params)
    console.log('[get Giphy giphs]', res.data);

  }
}


export const giphysService = new GiphysService()
