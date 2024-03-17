import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, interval } from 'rxjs';

@Component({
  selector: 'app-herzuhr',
  templateUrl: './herzuhr.component.html',
  styleUrls: ['./herzuhr.component.css'],
})
export class HerzuhrComponent implements OnInit, OnDestroy {
  secoundsSince: number = 0;
  minutesSince: number = 0;
  hoursSince: number = 0;
  daysSince: number = 0;
  private timer: any;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.calculateDates();
    }, 1000);
  }

  calculateDates() {
    const firstMeet = new Date(2021, 6, 25, 15, 0, 0).getTime();
    const now = new Date().getTime();
    this.secoundsSince = Math.round(Math.abs(now - firstMeet) / 1000);
    this.minutesSince = Math.round(this.secoundsSince / 60);
    this.hoursSince = Math.round(this.minutesSince / 60);
    this.daysSince = Math.round(this.hoursSince / 24);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
