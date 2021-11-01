import { Component, OnInit, Input } from '@angular/core';
import { faSearchLocation, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  /*  cityName!: string;
  city: any; */

  @Input() weather: any;

  today: number = Date.now();

  constructor() {
    setInterval(() => {
      this.today = Date.now();
    }, 1);
  }

  ngOnInit(): void {}

  faSearchLocation = faSearchLocation;
  faSearch = faSearch;

  /*  findCityWeather() {
    this.apiService.getWeatherDetails(this.cityName).subscribe((city) => {
      this.city = city;
    });
  } */
}
