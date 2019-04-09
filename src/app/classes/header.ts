export class Header {
    title: string = '';
    quote: string = '';
    author: string = '';

    constructor(title, quote, author) {
        this.title = title;
        this.quote = quote;
        this.author = author;
    }
}
