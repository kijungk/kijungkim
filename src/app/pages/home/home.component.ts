import { Component } from '@angular/core';
import { Header } from '../../classes/header';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  header: Header = null;
  constructor() {
    this.header = new Header('Welcome.', 'To Ki Jung Kim\'s personal website!');
  }
}
