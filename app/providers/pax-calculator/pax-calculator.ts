import { Injectable } from '@angular/core';
import { SoloClass } from '../classes/solo-class';

/*
  Generated class for the PaxCalculator provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PaxCalculator {

  constructor() {}

  calculatePaxTime(rawTime: number, soloClass: SoloClass) {
    return rawTime * soloClass.paxModifier;
  }

  convertRawTime(rawTime: number, fromClass: SoloClass, toClass: SoloClass) {
    return this.calculatePaxTime(rawTime, fromClass) / toClass.paxModifier;
  }

  convertPaxTime(paxTime: number, fromClass: SoloClass, toClass: SoloClass) {
    return this.calculatePaxTime(paxTime / fromClass.paxModifier, toClass);
  }
}
