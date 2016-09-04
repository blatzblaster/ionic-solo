import { Component, Input, ViewChild } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

import { ApiScheduleDataService, ScheduleAssignment, ScheduleEvent } from "../../providers/schedule/schedule-data.service";
import { DateService } from "../../utilities/date-service";
import { GOOGLE_MAPS_DIRECTIVES } from "angular2-google-maps/core";
import { GoogleMapComponent, MapComponent } from "../../components/map.component";

@Component({
  templateUrl: "build/pages/schedule/schedule-detail.html",
  directives: [GOOGLE_MAPS_DIRECTIVES, GoogleMapComponent],
  providers: [DateService]
})
export class ScheduleDetailPage {
  @Input() eventItem: ScheduleEvent;
  @ViewChild(GoogleMapComponent) mapComponent: MapComponent;

  private drivers: ScheduleAssignment[];
  private driversLoaded: boolean;
  constructor(private navCtrl: NavController,
    private _apiService: ApiScheduleDataService,
    private _navParams: NavParams,
    private _dateSvc: DateService) {
        this.eventItem = _navParams.get("eventItem");
  }

  ionViewLoaded() {
    this.loadDrivers();
  }

  onMapLoaded() {
    this.mapComponent.setCenter(this.eventItem.venue.geo.coordinates[1], this.eventItem.venue.geo.coordinates[0]);
    this.mapComponent.setZoom(16);
    this.mapComponent.setSatelliteView();
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
