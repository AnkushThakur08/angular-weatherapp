import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faSearchLocation, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  @Input() weather: any = {};

  weatherform!: FormGroup;
  today: number = Date.now();

  city: any; /* Come from request */
  cityName: string = ''; /* cityname coming from FORM */

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    setInterval(() => {
      this.today = Date.now();
    }, 1);
  }

  ngOnInit() {
    this.weatherform = this.fb.group({
      search: this.fb.control(''),
    });
  }
  faSearchLocation = faSearchLocation;
  faSearch = faSearch;

  handleSearch() {
    console.log(this.weatherform.controls.search.value);
    this.apiService
      .getWeatherDetails(this.weatherform.controls.search.value)
      .subscribe((weather) => {
        this.weather = weather;
        console.log(weather);
      });
  }
}
