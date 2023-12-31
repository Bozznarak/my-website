import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OpenOverlayService {
  $openOverlay: Observable<boolean>;
  isOverlayOpen: BehaviorSubject<boolean>;

  constructor() {
    this.isOverlayOpen = new BehaviorSubject(false);
    this.$openOverlay = this.isOverlayOpen.asObservable();
  }

  setOverlayValue(newValue: boolean) {
    this.isOverlayOpen.next(newValue);
  }

  getOverlayValue() {
    return this.isOverlayOpen.value;
  }
}
