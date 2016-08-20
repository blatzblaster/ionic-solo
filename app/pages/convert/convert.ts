import { Component, OnInit } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { SoloClass } from '../../providers/classes/solo-class';
import { Classes } from '../../providers/classes/classes';
import { PaxCalculator } from '../../providers/pax-calculator/pax-calculator';

/*
  Generated class for the ConvertPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/convert/convert.html',
  providers: [Classes, PaxCalculator]
})
export class ConvertPage implements OnInit {
  fromClass: string;
  toClass: string;
  entryTime: number;
  soloClasses: SoloClass[];
  selectClassOptions: any;

  constructor(private alertController: AlertController,
              private paxCalculator: PaxCalculator,
              private classes: Classes) {
  }

  ngOnInit() {
    this.soloClasses = this.classes.allClasses;
    this.selectClassOptions = { title: 'Select Class:' };
  }

  convertFromPaxTime() {
    let toClass = this.classes.getByAbbreviation(this.toClass);
    let convertedTime = this.paxCalculator.convertPaxTime(this.entryTime, toClass);

    this._displayResults(convertedTime);
  }

  convertFromRawTime() {
    let fromClass = this.classes.getByAbbreviation(this.fromClass);
    let toClass = this.classes.getByAbbreviation(this.toClass);
    let convertedTime = this.paxCalculator.convertRawTime(this.entryTime, fromClass, toClass);

    this._displayResults(convertedTime);
  }

  getClasses() {
    return this.classes.allClasses;
  }

  private _displayResults(results: number) {
    let alert = this.alertController.create({
      title: "Time to beat",
      subTitle: `You must record a time faster than ${Number(results).toFixed(3)} seconds to beat the specified time.`,
      buttons: ["OK"]
    });

    alert.present();
  }
}
