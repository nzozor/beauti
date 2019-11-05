import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit{
  map: any;
  constructor() {
  
  }

  ngOnInit() {
    const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    mapboxgl.accessToken = 'pk.eyJ1IjoiZWxzYWJlbiIsImEiOiJjanZ4b2ZndDQwNnB5M3pyejNrZWQwaGVwIn0.T8MZoM6PJVvNkME819rAkw';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/elsaben/ck2mfzocf0e271co95fjg4wry',
      interactive: false
    });
  }

  ngAfterViewInit() {
    // const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    // mapboxgl.accessToken = 'pk.eyJ1IjoiZWxzYWJlbiIsImEiOiJjanZ4b2ZndDQwNnB5M3pyejNrZWQwaGVwIn0.T8MZoM6PJVvNkME819rAkw';
    // this.map = new mapboxgl.Map({
    //   style: 'mapbox://styles/elsaben/ck2i2adsm1y8t1ds0xwwbz7fe',
    //   interactive: false
    // });
  }
}
