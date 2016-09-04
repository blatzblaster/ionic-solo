import { Component } from "@angular/core";
import { ClassesPage } from "../classes/classes";
import { ConvertPage } from "../convert/convert";
import { SchedulePage } from "../schedule/schedule";

@Component({
  templateUrl: "build/pages/tabs/tabs.html"
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = SchedulePage;
    this.tab2Root = ClassesPage;
    this.tab3Root = ConvertPage;
  }
}
