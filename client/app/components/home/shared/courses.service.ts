import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AlertService } from '../../../services/alert.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  private url: string = environment.apiUrl;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': localStorage.getItem('token')
    })
  };

  constructor(public http: HttpClient, public alertService: AlertService) { }
    
  getCoursesByCourseId(courseId: String): Observable<any>{
    return this.http.get(this.url + "/courses/" + courseId, this.httpOptions).pipe(
      map((res: Response) => {
        return res;
      }),
      catchError((err: HttpErrorResponse) => {
        this.alertService.push(err);
        return of(err);
      })
    );
  }

  getCoursesByHighlight(): Observable<any>{
    return this.http.get(this.url + "/courses/highlights", this.httpOptions).pipe(
      map((res: Response) => {
        return res;
      }),
      catchError((err: HttpErrorResponse) => {
        this.alertService.push(err);
        return of(err);
      })
    );
  }

  applyToCourse(courseId: String): Observable<any>{   
    return this.http.post(this.url + "/courses/" + courseId + "/apply", "" ,this.httpOptions).pipe(
      map((res: Response) => {
        return res;
      }),
      catchError((err: HttpErrorResponse) => {
        this.alertService.push(err);
        return of(err);
      })
    )
  }

  signOffToCourse(courseId: String): Observable<any>{
    return this.http.post(this.url + "/courses/" + courseId + "/signoff", "", this.httpOptions).pipe(
      map((res: Response) => {
        return res;
      }),
      catchError((err: HttpErrorResponse) => {
        this.alertService.push(err);
        return of(err);
      })
    )
  }

  postFeedbackByCourse(feedback: any, courseId:string): Observable<any>{   
    return this.http.post(this.url + "/courses/" + courseId + "/feedback" ,feedback, this.httpOptions).pipe(
      map((res: Response) => {
        return res;
      }),
      catchError((err: HttpErrorResponse) => {
        this.alertService.push(err);
        return of(err);
      })
    )
  }


  
}
