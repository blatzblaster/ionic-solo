import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SoloClass } from './solo-class';
import 'rxjs/add/operator/map';

/*
  Generated class for the Classes provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Classes {
  allClasses: SoloClass[];

  constructor(private http: Http) {
    this._initializeClasses();
  }

  getByAbbreviation(abbreviation: string) {
    return this.allClasses.filter(value => value.abbreviation === abbreviation)[0];
  }

  private _initializeClasses() {
    this.allClasses = [
      { abbreviation: "SS", name: "Super Street", paxModifier: 0.835 },
      { abbreviation: "AS", name: "A Street", paxModifier: 0.833 },
      { abbreviation: "BS", name: "B Street", paxModifier: 0.826 },
      { abbreviation: "CS", name: "C Street", paxModifier: 0.819 },
      { abbreviation: "DS", name: "D Street", paxModifier: 0.811 },
      { abbreviation: "ES", name: "E Street", paxModifier: 0.807 },
      { abbreviation: "FS", name: "F Street", paxModifier: 0.814 },
      { abbreviation: "GS", name: "G Street", paxModifier: 0.806 },
      { abbreviation: "HS", name: "H Street", paxModifier: 0.798 },
      { abbreviation: "HCS", name: "Heritage Classic Street", paxModifier: 0.817 },
      { abbreviation: "STF", name: "Stret Touring FWD", paxModifier: 0.809 },
      { abbreviation: "STS", name: "Street Touring Sport", paxModifier: 0.832 },
      { abbreviation: "STX", name: "Street Touring Xtreme", paxModifier: 0.836 },
      { abbreviation: "STR", name: "Street Touring Roadster", paxModifier: 0.841 },
      { abbreviation: "STU", name: "Street Touring Ultra", paxModifier: 0.845 },
      { abbreviation: "STP", name: "Street Touring Pony", paxModifier: 0.837 },
      { abbreviation: "SSP", name: "Super Street Prepared", paxModifier: 0.872 },
      { abbreviation: "ASP", name: "A Street Prepared", paxModifier: 0.865 },
      { abbreviation: "BSP", name: "B Street Prepared", paxModifier: 0.863 },
      { abbreviation: "CSP", name: "C Street Prepared", paxModifier: 0.867 },
      { abbreviation: "DSP", name: "D Street Prepared", paxModifier: 0.855 },
      { abbreviation: "ESP", name: "E Street Prepared", paxModifier: 0.852 },
      { abbreviation: "FSP", name: "F Street Prepared", paxModifier: 0.840 },
      { abbreviation: "SSR", name: "Super Street R", paxModifier: 0.860 },
      { abbreviation: "CAM-C", name: "Classic American Muscle Contemporary", paxModifier: 0.839 },
      { abbreviation: "CAM-T", name: "Classic American Muscle Traditional", paxModifier: 0.834 },
      { abbreviation: "CAM-S", name: "Classic American Muscle Sports", paxModifier: 0.848 },
      { abbreviation: "XP", name: "X Prepared", paxModifier: 0.907 },
      { abbreviation: "BP", name: "B Prepared", paxModifier: 0.883 },
      { abbreviation: "CP", name: "C Prepared", paxModifier: 0.864 },
      { abbreviation: "DP", name: "D Prepared", paxModifier: 0.879 },
      { abbreviation: "EP", name: "E Prepared", paxModifier: 0.871 },
      { abbreviation: "FP", name: "F Prepared", paxModifier: 0.880 },
      { abbreviation: "HCR", name: "Heritage Classic Race", paxModifier: 0.838 },
      { abbreviation: "SMF", name: "Street Modified FWD", paxModifier: 0.861 },
      { abbreviation: "SM", name: "Street Modified", paxModifier: 0.870 },
      { abbreviation: "SSM", name: "Super Street Modified", paxModifier: 0.882 },
      { abbreviation: "AM", name: "A Modified", paxModifier: 1.000 },
      { abbreviation: "BM", name: "B Modified", paxModifier: 0.966 },
      { abbreviation: "CM", name: "C Modified", paxModifier: 0.916 },
      { abbreviation: "DM", name: "D Modified", paxModifier: 0.919 },
      { abbreviation: "EM", name: "E Modified", paxModifier: 0.920 },
      { abbreviation: "FM", name: "F Modified", paxModifier: 0.926 },
      { abbreviation: "FSAE", name: "Formula SAE", paxModifier: 0.982 },
      { abbreviation: "KM", name: "", paxModifier: 0.954 },
      { abbreviation: "JA", name: "Junior A", paxModifier: 0.878 },
      { abbreviation: "JB", name: "Junior B", paxModifier: 0.842 },
      { abbreviation: "JC", name: "Junior C", paxModifier: 0.734 }
    ];
  }
}

