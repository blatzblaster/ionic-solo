import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";

export abstract class ApiScheduleDataService {
    abstract getOrganizationSchedule(organizationId: string): Observable<ScheduleEvent[]>;
    abstract getEventAttendees(eventId: string): Observable<ScheduleAssignment[]>;
}

export interface ScheduleEvent {
    organization: {
        uri: string;
        name: string;
    };
    venue: {
        postalCode: number;
        geo: {
            type: string;
            coordinates: number[];
        },
        city: string;
        uri: string;
        name: string;
        region: string;
    };
    description: string;

    detailuri: string;
    start: Date;
    end: Date;
    id: string;
    registration: {
        start: Date;
        end: Date;
    };
    type: string;
    uri: string;
    name: string;
}

export interface ScheduleAssignment {
    vehicleNumber: number;
    classModifier: string;
    segment: string;
    year: number;
    lastName: string;
    color: string;
    firstName: string;
    class: string;
    model: string;
    sponsor: string;
    make: string;
}

export interface ApiResponseWrapper {
    recordset: {
        page: number;
        remaining: number;
        total: number;
    };
}

export interface EventsResponseWrapper extends ApiResponseWrapper {
    response: {
        events: ScheduleEvent[];
    };
}

export interface AssignmentsResponseWrapper extends ApiResponseWrapper {
    response: {
        assignments: ScheduleAssignment[];
    };
}


@Injectable()
export class ScheduleDataService implements ApiScheduleDataService {
    constructor(private http: Http) { }

    getOrganizationSchedule(organizationId: string): Observable<ScheduleEvent[]> {
        let url = `https://api.motorsportreg.com/rest/calendars/organization/${organizationId}.json`;
        return this.get<EventsResponseWrapper>(url).map(resp => resp.response.events);
    }

    getEventAttendees(eventId: string): Observable<ScheduleAssignment[]> {
         let url = `https://api.motorsportreg.com/rest/events/${eventId}/entrylist.json`;
        return this.get<AssignmentsResponseWrapper>(url).map(resp => resp.response.assignments);
    }

    get<T>(url: string): Observable<T> {
        return this.http.get(url)
        .map(resp => resp.json())
        .catch((err, caught) => {
            // This is where we catch errors.
            return Observable.throw(err);
        });
    }

}