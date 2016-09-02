import { Component, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController, NavParams } from 'ionic-angular';

import { ApiScheduleDataService, ScheduleAssignment, ScheduleEvent } from '../../providers/schedule/schedule-data.service';

@Component({
  templateUrl: 'build/pages/schedule/schedule-detail.html'
})
export class ScheduleDetailPage {
  @Input() eventItem: ScheduleEvent;

  private drivers: ScheduleAssignment[];
  private driversLoaded: boolean;
  constructor(private navCtrl: NavController,
    private _apiService: ApiScheduleDataService,
    private _navParams: NavParams) {
        this.eventItem = _navParams.get('eventItem');
  }

  ionViewLoaded() {
    this.loadDrivers();
  }

  driverLine1(driver: ScheduleAssignment) {
    return `${driver.firstName} ${driver.lastName}`;
  }

  driverLine2(driver: ScheduleAssignment) {
    return `${driver.class}`;
  }

  loadDrivers() {
    this._apiService.getEventAttendees(this.eventItem.id).subscribe((drivers) => {
      if (!drivers)
        return;

      this.drivers = drivers.sort((a, b) => {
          return a.class > b.class ? 1 : -1;
      });

      this.driversLoaded = true;
    });
  }

}
