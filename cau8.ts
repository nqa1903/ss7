class Books {
    title: string;
    author: string;
    price: number;
    constructor(title:string , author:string , price:number) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    printBooks():void{
        console.log(`title : ${this.title} , author : ${this.author} , price : ${this.price}`);
    }

    updateBooks(title:string , author:string , price:number):void{
        this.title = title;
        this.author = author;
        this.price = price;
    }
}

let book = new Books('IT' , 'anh' , 150);
book.printBooks();
book.updateBooks('CS' , 'quang' , 200);
book.printBooks();