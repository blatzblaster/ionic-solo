import { Injectable } from "@angular/core";

@Injectable()
export class DateService {
    constructor() {}

    toMonthAndDay(date: string) {
        let monthAndDay = new Date(date);
        return `${monthAndDay.toLocaleDateString([], { month: "long" })} ${monthAndDay.getUTCDate()}`;
    }

    toMonthDayTime(date: string) {
        let monthAndDay = new Date(date);
        return `${monthAndDay.toLocaleDateString([], { month: "long" })} ${monthAndDay.getUTCDate()} ${monthAndDay.toLocaleTimeString()}`;
    }
}