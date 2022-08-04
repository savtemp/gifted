


export class Gift{
    constructor(data){
        this.id = data.id 
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened || false
    }



    get GiftTemplate(){
        return `
        <div class="col-4">
            <img class="img-fluid" src="${this.url}" alt="">
            <h5 onclick="">${this.tag}</h5>
        </div>
        `
    }
}