import { Component } from "@angular/core";
import { Platform, ionicBootstrap } from "ionic-angular";
import { StatusBar } from "ionic-native";
import { GOOGLE_MAPS_PROVIDERS } from "angular2-google-maps/core";

import { ApiScheduleDataService, ScheduleDataService } from "./providers/schedule/schedule-data.service";
import { TabsPage } from "./pages/tabs/tabs";


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [
  { provide: ApiScheduleDataService, useClass: ScheduleDataService },
  GOOGLE_MAPS_PROVIDERS
]);
