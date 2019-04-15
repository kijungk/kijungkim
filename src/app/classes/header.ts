export class Header {
    title: string = '';
    quote: string = '';
    author: string = '';

    constructor(title: string, quote: string, author: string) {
        this.title = title;
        this.quote = quote;
        this.author = author;
    }
}
