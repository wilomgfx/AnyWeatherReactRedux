import axios from 'axios';

export default class Api {
  constructor(){
    this.apiKey = config.apiKey;
    this.apiBaseUrl = 'https://api.darksky.net/forecast'
  }
  constructApiUrl(lat, long) {
    return `${this.apiBaseUrl}/${this.apiKey}/${lat},${long}?units=ca`;
  }

  getFromMyLocation() {
    return axios.get(this.constructApiUrl(45.561050,-73.474612));
  }

  getCurrentWeather({latitude, longitude}) {
    return axios.get(this.constructApiUrl(latitude,longitude));
  }

}
