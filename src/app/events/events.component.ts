import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  items: number[];

  constructor() {
    this.items = Array(30);
  }

  ngOnInit() {
  }

}
