import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController, NavParams } from 'ionic-angular';
import { GOOGLE_MAPS_DIRECTIVES, GOOGLE_MAPS_PROVIDERS } from 'angular2-google-maps/core';

import { ApiScheduleDataService, ScheduleAssignment, ScheduleEvent } from '../../providers/schedule/schedule-data.service';
import { ScheduleDetailPage } from './schedule-detail';
import { GoogleMapComponent, MapComponent } from '../../components/map.component';

@Component({
  templateUrl: 'build/pages/schedule/schedule.html',
  directives: [GOOGLE_MAPS_DIRECTIVES, GoogleMapComponent]
})
export class SchedulePage {
  @ViewChild(GoogleMapComponent) mapComponent: MapComponent;

  private eventsGrr: ScheduleEvent[];
  private eventsIowa: ScheduleEvent[];
  private eventsDmvr: ScheduleEvent[];
  private drivers: ScheduleAssignment[];
  constructor(private navCtrl: NavController,
    private _apiService: ApiScheduleDataService) {

   }

  ionViewLoaded() {
    this.loadSchedule();
  }

  loadSchedule() {
    let grr = this._apiService.getOrganizationSchedule('85F4C7CC-1D72-822B-79115982FA66F935');
    let iowa = this._apiService.getOrganizationSchedule('A183CF63-A4FA-43EF-FFA5531834256DB8');
    let dmvr = this._apiService.getOrganizationSchedule('241F05F5-F073-A014-D9ACF01391D132F9');

    Observable.forkJoin<[ScheduleEvent[], ScheduleEvent[], ScheduleEvent[]]>([grr, iowa, dmvr]).subscribe((events) => {
      this.eventsGrr = events[0];
      this.eventsIowa = events[1];
      this.eventsDmvr = events[2];
    });
  }

  onMapLoaded() {
    this.mapComponent.setCenter(42.47, -90.67);
    this.mapComponent.setZoom(6);
  }

  viewEvent(eventItem: ScheduleEvent) {
    this.navCtrl.push(ScheduleDetailPage, { eventItem: eventItem });
  }

}
