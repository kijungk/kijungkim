import { Component } from '@angular/core';
import { Header } from '../../classes/header';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  header: Header = null;

  constructor() {
    this.header = new Header('Projects', '"A brand is a voice and a product is a souvenir"', '-Lisa Gansky')
  }
}
