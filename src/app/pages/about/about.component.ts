import { Component } from '@angular/core';
import { Header } from '../../classes/header';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  header: Header = null;

  constructor() {
    this.header = new Header('About Me', 'The person behind the code...');
  }
}
