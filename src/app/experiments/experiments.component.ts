import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experements:string[] = ["Mars soil sample", "Plant growth in habitat", "Human bone density"];

  editing:string = "";

  constructor() { }

  ngOnInit() {
  }

  addItem(newItem: string): void {
    if (newItem.trim() === "" || this.experements.indexOf(newItem) >= 0) {
      return;
    }
    this.experements.push(newItem);
  }

  editItem (oldName:string, newName: string): void {

    if (newName.trim() === "" || this.experements.indexOf(oldName) < 0) {
      return;
    }
    this.experements.splice(this.experements.indexOf(oldName), 1, newName);
    this.editing = "";
  }

  removeItem(item: string) {
    this.experements.splice(this.experements.indexOf(item), 1);
  }

}
