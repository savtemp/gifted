import { ProxyState } from "../AppState.js"
import { Gift } from "../Models/Gift.js"
import { sandboxApi } from "./AxiosService.js"



class GiftsService{
    async getGifts(){
        const res = await sandboxApi.get(`/gifts`)
        console.log('get sandbox stuff', res.data);
        ProxyState.gifts = res.data.map(g => new Gift(g))
    }
}

export const giftsService = new GiftsService()
