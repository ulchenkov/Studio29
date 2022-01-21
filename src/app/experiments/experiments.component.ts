import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
   experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];
   spaceExperiments: string[] = [];

   experimentMaxQuantity = 3;

   constructor() { }

   ngOnInit() { }

   addExperiment(experiment: string): void {
     if(!this.spaceExperiments.includes(experiment)) {
       if (this.spaceExperiments.length < this.experimentMaxQuantity) {
        this.spaceExperiments.push(experiment);
       }
     } else {
       this.spaceExperiments.splice(this.spaceExperiments.indexOf(experiment), 1);
     }
   }

}
