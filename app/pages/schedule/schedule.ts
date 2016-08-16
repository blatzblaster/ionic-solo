import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController } from 'ionic-angular';

import { ApiScheduleDataService, ScheduleEvents } from '../../providers/schedule/schedule-data.service';

/*
  Generated class for the SchedulePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/schedule/schedule.html'
})
export class SchedulePage {
  private eventsGrr: ScheduleEvents[];
  private eventsIowa: ScheduleEvents[];
  private eventsDmvr: ScheduleEvents[];
  constructor(private navCtrl: NavController, private _apiService: ApiScheduleDataService) { }

  ionViewLoaded() {
    this.loadSchedule();
  }

  loadSchedule() {
    let grr = this._apiService.getOrganizationSchedule('85F4C7CC-1D72-822B-79115982FA66F935');
    let iowa = this._apiService.getOrganizationSchedule('A183CF63-A4FA-43EF-FFA5531834256DB8');
    let dmvr = this._apiService.getOrganizationSchedule('241F05F5-F073-A014-D9ACF01391D132F9');

    Observable.forkJoin<[ScheduleEvents[], ScheduleEvents[], ScheduleEvents[]]>([grr, iowa, dmvr]).subscribe((events) => {
      this.eventsGrr = events[0];
      this.eventsIowa = events[1];
      this.eventsDmvr = events[2];
    });
  }

}
