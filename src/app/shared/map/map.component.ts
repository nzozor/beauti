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
      style: 'mapbox://styles/elsaben/cjz7dkzjk0txn1co6uw3ktw0m'
    });
  }
}
