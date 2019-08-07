import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  registers;

  constructor(
    private httpClient: HttpClient
  ) {

  }

  ngOnInit() {
    this.registers = this.httpClient.get('https://jsonplaceholder.typicode.com/photos').subscribe( response => {
      console.log(response);
      this.registers = response;
    });
  }

  onImageLoad(event) {
    console.log(event);
  }

}
