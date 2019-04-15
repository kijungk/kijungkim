import { Component } from '@angular/core';
import { Header } from '../../classes/header';
import skillsApi from '../../../api/skills-api';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  header: Header = null;

  skills: Array<Object> = [];

  constructor() {
    this.header = new Header('Skills', '"It is possible to fly without motors, but not without knowledge and skill"', '-Wilbur Wright');
    this.skills = this.getSkillsData();
  }

  getSkillsData() {
    return skillsApi.getSkillsData();
  }
}
