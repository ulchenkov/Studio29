import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: Equipment[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: Equipment[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;

   isNearMaxMass: boolean = false;

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addItem(equipment: Equipment): boolean {
     this.cargoHold.push(equipment);
     this.cargoMass += equipment.mass;
     this.isNearMaxMass = this.maximumAllowedMass - this.cargoMass <= 200;
     return this.isNearMaxMass;
   }
}

class Equipment {
  name: string;
  mass: number;
}
