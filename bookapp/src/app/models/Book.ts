export class Book
{
    private id: number = -1;
    private author: string = "";
    private title: string = "";
    private genre: string = "";
    private cost: number = 0;
    private stock: number = 0;
    
    constructor(id:number, author:string, title:string, genre:string, cost:number, stock: number)
    {
        this.id = id;
        this.author = author;
        this.title = title;
        this.genre = genre;
        this.cost = cost;
        this.stock = stock;
    }

    get Id():number
    {
        return this.id;
    }
    set Id(id:number)
    {
        this.id = id;
    }

    get Title():string
    {
        return this.title;
    }
    set Title(title:string)
    {
        this.title = title;
    }

    get Author():string
    {
        return this.author;
    }
    set Author(author:string)
    {
        this.author = author;
    }

    get Genre():string
    {
        return this.genre;
    }
    set Genre(genre:string)
    {
        this.genre = genre;
    }
    
    get Cost():number
    {
        return this.cost;
    }
    set Cost(cost:number)
    {
        this.cost = cost;
    }

    public get Stock(): number
    {
        return this.stock;
    }
    public set Stock(value: number) 
    {
        this.stock = value;
    }

}