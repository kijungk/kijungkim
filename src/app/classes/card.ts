export class Card {
    header: Object = {
        imagePath: '',
        title: '',
        subtitle: ''
    };

    text: string = '';

    constructor(header: Object, text: string) {
        this.header['imagePath'] = header['imagePath'];
        this.header['title'] = header['title'];
        this.header['subtitle'] = header['subtitle'];

        this.text = text;
    }
}
