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
    this.header = new Header('Welcome', '"My life is an open book. You\'re welcome to speculate"', '-Karan Patel');
  }
}
