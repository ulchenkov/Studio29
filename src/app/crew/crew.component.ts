import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: Astronaut[] = [];

  candidates: Astronaut[] = [
    {name: "Sally Ride", age: 35, hoursInSpace: 50, massKg: 60, photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {name: "Mae Jemison", age: 27, hoursInSpace: 0, massKg: 54, photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {name: "Ellen Ochoa", age: 40, hoursInSpace: 163, massKg: 62, photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {name: "Frederick Gregory", age: 45, hoursInSpace: 280, massKg: 85, photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {name: "Guion Bluford", age: 43, hoursInSpace: 233, massKg: 76, photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {name: "Kjell Lindgren", age: 31, hoursInSpace: 0, massKg: 72, photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {name: "Jeanette Epps", age: 38, hoursInSpace: 115, massKg: 65, photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];

  selectedCrewMember:Astronaut = null;

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember(member:Astronaut) {
    let index = this.crew.indexOf(member);
    if (index >= 0) {
      this.crew.splice(index, 1);
    } else if (this.crew.length < 3) {
      this.crew.push(member);
    }
  }

  isInCrew(member: Astronaut):boolean {
    return this.crew.includes(member);
  }

}

class Astronaut {
  name: string;
  age: number;
  hoursInSpace: number;
  massKg: number;
  photo: string;
}
