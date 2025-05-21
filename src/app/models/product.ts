// Pour les modèles, il y a 3 écoles 
// Celle que vous allez le plus rencontrer : interface

export interface Product{
    id : number;
    name : string;
    price : number;
    pricePromo : number;
    promo : boolean;
    image : string;
}

/*
//Celle pour laquelle se battent les dev actuellement 
export type Product = {
    id : number;
    name : string;
    price : number;
    pricePromo : number;
    promo : boolean;
    image : string;

}



// Celle que vous allez le moins rencontrer mais certains le font 

export class Product{
    id : number;
    name : string;
    price : number;
    pricePromo : number;
    promo : boolean;
    image : string;

    constructor(id : number, name : string, price : number, pricePromo : number, promo : boolean, image : string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.pricePromo = pricePromo;
        this.promo = promo;
        this.image = image;

    }
}
    */