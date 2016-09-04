import { Injectable } from "@angular/core";

@Injectable()
export class DateService {
    constructor() {}

    toMonthAndDay(date: string) {
        return new Date(date).toLocaleDateString([], { month: "long", day: "numeric" });
    }
}