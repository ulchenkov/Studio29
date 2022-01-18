import { Component, OnInit } from '@angular/core';
import { Astronaut } from './Astronaut';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: Astronaut[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  editingName = "";
 
  constructor() { }

  ngOnInit() {
  }

  addMember(name:string, firstMission: boolean): void {
    if (name.trim() !== "" && !this.isCrewMember(name)) {
      this.crew.push(new Astronaut(name, firstMission));
    }
  }

  removeMember(member: Astronaut): void {
    this.crew.splice(this.crew.indexOf(member),1);
  }

  changeName(member: Astronaut, newName: string): void {
    if (newName.trim() !== "" && (!this.isCrewMember(newName) || member.name === newName)) {
      member.name = newName;
      this.editingName = "";
    }
  }

  isCrewMember(name: string): boolean {
    let isMember = false;
    this.crew.forEach((member) => {
      if (member.name === name) {
        isMember = true;
        return;
      }
    })
    return isMember;
  }

}
