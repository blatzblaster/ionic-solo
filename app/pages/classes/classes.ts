import { Component, OnInit } from '@angular/core';
import { SoloClass } from '../../providers/classes/solo-class';
import { Classes } from '../../providers/classes/classes';

/*
  Generated class for the ClassesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/classes/classes.html',
  providers: [Classes]
})
export class ClassesPage implements OnInit {
  allClasses: SoloClass[];

  constructor(private classes: Classes) {
  }

  ngOnInit() {
    this.allClasses = this.classes.allClasses;
  }

}
