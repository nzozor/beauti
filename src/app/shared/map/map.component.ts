import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {
    const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    mapboxgl.accessToken = 'pk.eyJ1IjoiZWxzYWJlbiIsImEiOiJjanZ4b2ZndDQwNnB5M3pyejNrZWQwaGVwIn0.T8MZoM6PJVvNkME819rAkw';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/elsaben/ck2i23ijw1y2s1ds0oz687sqw',
      interactive: false
    });
  }
}
