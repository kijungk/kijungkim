import { Component } from '@angular/core';
import { Header } from '../../classes/header';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  header: Header = null;

  constructor() {
    this.header = new Header('Experiences', '"Let the beauty of what you love be what you do"', '-Jalāl ad-Dīn Muhammad Rūmī');
  }
}
