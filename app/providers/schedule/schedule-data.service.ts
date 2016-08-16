import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';

export abstract class ApiScheduleDataService {
    abstract getOrganizationSchedule(organizationId: string): Observable<ScheduleEvents[]>;
}

export interface ScheduleEvents {
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

export interface ScheduleResponseWrapper {
    response: {
        events: ScheduleEvents[];
    };
    recordset: {
        page: number;
        remaining: number;
        total: number;
    };
}


@Injectable()
export class ScheduleDataService implements ApiScheduleDataService {
    constructor(private http: Http) { }

    getOrganizationSchedule(organizationId: string): Observable<ScheduleEvents[]> {
        let url = `https://api.motorsportreg.com/rest/calendars/organization/${organizationId}.json`;
        return this.get<ScheduleResponseWrapper>(url).map(resp => resp.response.events);
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