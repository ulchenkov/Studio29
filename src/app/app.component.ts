import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mission Planning Dashboard';
  editingRocket: boolean = false;
  editingMission: boolean = false;
}
