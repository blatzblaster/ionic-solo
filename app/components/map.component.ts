import { Component, EventEmitter, Output } from '@angular/core';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { GoogleMap } from 'angular2-google-maps/core/services/google-maps-types';

export abstract class MapComponent {
    mapLoaded: EventEmitter<{}>;
    abstract setCenter(lat: number, lng: number): void;
    abstract setZoom(zoom: number): void;
    abstract setSatelliteView(): void;
}


@Component({
  selector: 'google-map-component',
  template: ''
})
export class GoogleMapComponent implements MapComponent {
    map: GoogleMap;
    @Output() mapLoaded = new EventEmitter<{}>();

    constructor(private _wrapper: GoogleMapsAPIWrapper) {
        this._wrapper.getNativeMap().then((m) => {
            // implement your own logic
            this.map = m;
            this.map.setOptions({zoomControl: false, streetViewControl: false});
            this.mapLoaded.emit({});
        });
    }

    setCenter(lat: number, lng: number) {
       this.map.setCenter({lat: lat, lng: lng});
    }

    setZoom(zoom: number) {
        this.map.setZoom(zoom);
    }

    setSatelliteView() {
        this.map.setOptions({mapTypeId: 'satellite'} as any);
    }
}

