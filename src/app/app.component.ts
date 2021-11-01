import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'weather-assignment';

  weather: any = {};

  constructor(private apiService: ApiService, private toastr: ToastrService) {}

  ngOnInit() {
    this.apiService.getWeather().subscribe(
      (weather: any) => {
        console.log(weather);
        this.weather = weather;
      },
      (err) => {
        this.toastr.error(err.status, 'Api Request Fails');
      }
    );
  }
}
