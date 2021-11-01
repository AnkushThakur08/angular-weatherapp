import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  url = `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=7e84badf24cbc95f292cf5eb72c895a8&units=metric`;

  getWeather() {
    console.log('Ankush');
    console.log('Ankush');

    return this.http.get(this.url);
  }

  /*  getWeatherDetails(value: string) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=7e84badf24cbc95f292cf5eb72c895a8`
    );
  } */
}
