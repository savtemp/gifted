import { ProxyState } from "../AppState.js";
import { giftsService } from "../Services/GiftsService.js";
import { Pop } from "../Utils/Pop.js";


function _drawGifts(){
    let template = ''
    ProxyState.gifts.forEach(g => template += g.GiftTemplate)
    // @ts-ignore
    document.getElementById('gifts').innerHTML = template
}


export class GiftsController{
    constructor(){
        // console.log('gifts controller loaded');
        ProxyState.on('gifts', _drawGifts)
        this.getGifts()
    }

    async getGifts(){
        try {
            await giftsService.getGifts()
        } catch (error) {
            console.error('[Get Gifts]', error);
            Pop.error(error)
        }
    }
}


