import { Component, OnInit, Input } from '@angular/core';
import {
  faCloud,
  faWind,
  faUmbrella,
  faSnowflake,
  faCloudSun,
  faStopwatch,
  faArrowAltCircleUp,
  faRainbow,
  faWater,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-more-data',
  templateUrl: './more-data.component.html',
  styleUrls: ['./more-data.component.css'],
})
export class MoreDataComponent implements OnInit {
  @Input() weather: any = {};
  
  constructor() {}

  faCloud = faCloud;

  faWind = faWind;
  faUmbrella = faUmbrella;
  faWater = faWater;
  faSnowflake = faSnowflake;
  faStopwatch = faStopwatch;
  faCloudSun = faCloudSun;
  faArrowAltCircleUp = faArrowAltCircleUp;
  faRainbow = faRainbow;

  ngOnInit(): void {}
}
