import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  missionName: string = "LC Angular 3";
  rocketName: string = "ICAN";
  editingRocket: boolean = false;
  editingMission: boolean = false;

  // ******************************
  // **** pass value to parent ****
  // ******************************
  @Output() myVar = new EventEmitter<number>();
    
  constructor() { 
    
  }

  ngOnInit() {
    // ******************************
    // **** pass value to parent ****
    // ******************************
    this.myVar.emit(777);
  }

  updateMission(updatedName: string) {
    this.missionName = updatedName;
    this.editingMission = false;
  }

  updateRocket(updatedName: string) {
    this.rocketName = updatedName;
    this.editingRocket = false;

    // ******************************
    // **** pass value to parent ****
    // ******************************
    this.myVar.emit(666);
  }


}
