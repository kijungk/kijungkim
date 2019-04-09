import { Component } from '@angular/core';
import { Header } from '../../classes/header';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  header: Header = null;

  constructor() {
    this.header = new Header('Skills', '"It is possible to fly without motors, but not without knowledge and skill"', '-Wilbur Wright');
  }
}
