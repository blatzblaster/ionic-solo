import { Component, Input, OnInit } from "@angular/core";
import { ViewController, NavParams } from "ionic-angular";

import { ScheduleEvent } from "../../providers/schedule/schedule-data.service";

export enum SortDirection {
    ASC,
    DESC
}

export interface SortOption {
    fieldName: string;
    displayName: string;
    direction: SortDirection;
}

@Component({
  template: `
    <ion-list>
      <ion-list-header>Sort By</ion-list-header>
      <div ion-item *ngFor="let option of options" (click)="select(option)">{{ option.displayName }}</div>
    </ion-list>
  `
})
export class ScheduleSortPopover implements OnInit {
    @Input() items: ScheduleEvent[];

    private options: SortOption[] = [
        { fieldName: "start", displayName: "Date Asc", direction: SortDirection.ASC },
        { fieldName: "start", displayName: "Date Desc", direction: SortDirection.DESC },
        { fieldName: "organization.name", displayName: "Region Asc", direction: SortDirection.ASC },
        { fieldName: "organization.name", displayName: "Region Desc", direction: SortDirection.DESC },
        { fieldName: "type", displayName: "Type Asc", direction: SortDirection.ASC },
        { fieldName: "type", displayName: "Type Desc", direction: SortDirection.DESC }
    ];

    constructor(private viewCtrl: ViewController, private navParams: NavParams) {}

    ngOnInit() {
        if (this.navParams.data) {
            this.items = this.navParams.data.items;
        }
    }

    select(option: SortOption) {
        this.items = this.sortScheduleBy(option);
        this.viewCtrl.dismiss();
    }

    sortScheduleBy(sort: SortOption) {
        let sortField = sort.fieldName.split(".");
        let sortedList = this.items.sort((a, b) => {
            if (sortField.length === 2)
                return a[sortField[0]][sortField[1]] >= b[sortField[0]][sortField[1]] ? 1 : -1;

            return a[sort.fieldName] >= b[sort.fieldName] ? 1 : -1;
        });

        if (sort.direction === SortDirection.DESC)
            sortedList = sortedList.reverse();

        return sortedList;
    }
}