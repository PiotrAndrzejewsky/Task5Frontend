import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let href = window.location.href;
    href = href.replace(environment.baseFrontendUrl, "");
    if (href == "") {
      window.location.href = environment.baseFrontendUrl + "login";
    }
  }

}
