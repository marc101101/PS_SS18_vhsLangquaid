import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable()
export class ConfigService {

  private apiURLs = {
    bookingService: null,
    feedbackService: null,
    trackingService: null,
    deviceManagement: null,
    userManagement: null,
    damageReportService: null
  };


  constructor(private http: Http) {
  }

  /**
   * Loads config from asset dist folder
   * @param {string} url
   * @returns {Promise<any>}
   */
  load(url: string) {
    return new Promise((resolve) => {
      this.http.get(url).pipe(
        map((res: Response) => {
          return res.json();
        })
      ).subscribe((config) => {
        this.setConfig(config);
        resolve();
      })
    });
  }

  setConfig(config): void {
    this.apiURLs = config.apiURLs;
  }

  ApiURLs() {
    return this.apiURLs;
  }

}
