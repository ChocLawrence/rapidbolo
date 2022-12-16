import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {
  public apiUrl() {

    let url = location.href;
    let returnUrl = "";

    if (url.includes("localhost")) {
      returnUrl = "http://localhost:8000/api/";
    } else if (url.includes("rapidbolo.com")) {
      returnUrl = "https://api.rapidbolo.com/api/";
    } else {
      returnUrl = "http://localhost:8000/api/";
    }

    return returnUrl;
  }

  constructor() { }
}
