import { Component } from '@angular/core';
import { Header } from '../../classes/header';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  header: Header = null;

  constructor() {
    this.header = new Header('Contact Me', '"Words are, of course, the most powerful drug used by mankind"', '-Rudyard Kipling');
  }
}
