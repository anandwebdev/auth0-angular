import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { environment as env } from '../../../environments/environment' 

interface Message {
  message: string;
}

@Component({
  selector: 'app-external-api',
  templateUrl: './external-api.component.html',
})
export class ExternalApiComponent implements OnInit {
  message: string = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getApi(): void {
    this.http.get(`${env.dev.apiUrl}/api/messages/public-message `)
    .subscribe((result: Message) => {
      this.message = result.message
    })
  }

  getSecureApi(): void {
    this.http.get(`${env.dev.apiUrl}/api/messages/protected-message `)
      .subscribe((result: Message) => {
        this.message = result.message
      })
  }
}
