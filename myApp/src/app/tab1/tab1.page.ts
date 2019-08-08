import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tab1Page implements OnInit {

  registers;
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  constructor(
    private httpClient: HttpClient
  ) {

  }

  ngOnInit() {
    this.registers = this.httpClient.get('https://jsonplaceholder.typicode.com/photos');

    /* this.httpClient.get('https://jsonplaceholder.typicode.com/photos').subscribe( response => {
      console.log(response);
      this.registers = response;
    }); */
  }

  onImageLoad(event) {
    console.log(event);
  }

  itemHeightFn(item: any, index: number) {
    return 545;
  }

}
