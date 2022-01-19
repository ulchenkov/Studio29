import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipments:string[] = ["Habitat dome", "Drones", "Food containers", "Oxygen tanks"];
  editing:string = "";

  constructor() { }

  ngOnInit() {
  }

  addItem(newItem: string): void {
    if (newItem.trim() === "" || this.equipments.indexOf(newItem) >= 0) {
      return;
    }
    this.equipments.push(newItem);
  }

  editItem (oldName:string, newName: string): void {
    if (newName.trim() === "" || this.equipments.indexOf(oldName) < 0) {
      return;
    }
    this.equipments.splice(this.equipments.indexOf(oldName), 1, newName);
    this.editing = "";
  }

  removeItem(item: string) {
    this.equipments.splice(this.equipments.indexOf(item), 1);
  }

}
