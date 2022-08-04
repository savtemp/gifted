


export class Gift{
    constructor(data){
        this.id = data.id 
        this.tag = data.tag
        this.url = data.url
        this.opened = true
    }



    get GiftTemplate(){
        return `
        <div class="col-4 hero-img" onclick="">
            <div class="${!this.opened ? 'disabled blackout' : ''}">
                <img class="img-fluid" src="${this.url}" alt="">
                <h5>${this.tag}</h5>
            </div>
        </div>
        `
    }
}

