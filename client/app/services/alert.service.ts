import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/observable/of';
import { log } from 'util';

@Injectable()
export class AlertService {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;
  private status_message = '';

  constructor(private router: Router) {
    // clear alert message on route change
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterNavigationChange) {
          // only keep for a single location change
          this.keepAfterNavigationChange = false;
        } else {
          // clear alert
          this.status_message = '';
          this.subject.next();
        }
      }
    });
  }

  success(message: object, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'success', text: this.mapMessage(message) });
  }

  error(message: object, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'error', text: this.mapMessage(message) });
  }

  setErrorMessage(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'error', text: message });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  clearMessage() {
    this.subject.next();
  }

  getStatusText(): string {
    if (this.status_message) {
      return this.status_message;
    }
  }

  mapMessageLogin(response): string {
    if (response.status === 401 && response._body === '{"error":"invalid_client"}') {
      return 'Wrong username or password!';
    } else if (response.status === 403) {
      return 'User not allowed!';
    } else {
      return this.mapMessage(response);
    }
  }

  mapMessage(response): string {
    if (response.status === 400 && response.json().hasOwnProperty('message')) {
      const body = response.json();
      if (body.hasOwnProperty('error') && body.error === 'PATTERN') {
        return 'HTTP Status ' + response.status + '.';
      } else {
        return response.json().message;
      }
    } else if (response.status === 401) {
      return 'Email oder Password falsch.';
    } else if (response.status === 403) {
      return 'User not allowed!';
    } else if (response.status === 405) {
      return 'Method not allowed!';
    } else if (response.status === 409) {
      return 'Conflict: Client already exists!';
    } else if (response.status === 503) {
      this.keepAfterNavigationChange = true;
      this.status_message = response.status + '\n' + 'Service Unavailable.';
      this.router.navigate(['/error']);
      return;
    } else if (response.status === 500) {
      this.keepAfterNavigationChange = true;
      this.status_message = response.status + '\n' + 'Internal Server Error.';
      this.router.navigate(['/error']);
      return;
    } else {
      if (response === undefined || response === 0 || response.statusText === '') {
        return 'Connection Error!';
      }
      /*
       * This seems to be currently a bug in the angular library for http error response transition
       * that the statusText is not set properly. Therefore currently only status-code is printed back.
       */
      // return message.status + ': ' + message.statusText;
      return 'HTTP Status ' + response.status + '.';
    }
  }

  push(err, login_page = false) {
    if (err instanceof Error) {
      // display error message for dev
      if (err.message) {
        this.subject.next({ type: 'error', text: err.message });
      } else {
        this.subject.next({ type: 'error', text: 'Application error occurred!' });
      }
    } else {
      if (login_page) {
        this.subject.next({ type: 'error', text: this.mapMessageLogin(err) });
      } else {
        this.subject.next({ type: 'error', text: this.mapMessage(err) });
      }
    }
    return Observable.of(null);
  }
}
