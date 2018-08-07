import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './not-found.component.html',
})
export class PageNotFoundComponent implements OnInit {

  status_text = '';

  constructor() {}

  ngOnInit() {
    this.status_text = '404: Not found!';
  }
}
