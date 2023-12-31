import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OpenOverlayService } from 'src/app/services/open-overlay.service';

export interface TimeOption {
  ms: number;
  id: string;
  selected: boolean;
  plusMS?: {
    ms: number;
  };
}

@Component({
  selector: 'app-settings-overlay',
  templateUrl: './settings-overlay.component.html',
  styleUrls: ['./settings-overlay.component.css'],
})
export class SettingsOverlayComponent implements OnInit {
  @Output() activeTimer: EventEmitter<TimeOption | undefined> =
    new EventEmitter<TimeOption | undefined>();

  newTimer = new FormGroup({
    newMinutes: new FormControl('00', [
      Validators.required,
      Validators.pattern(/^(0?[0-9]|[1-5][0-9])$/),
      Validators.min(0),
      Validators.max(59),
    ]),
    newSeconds: new FormControl('00', [
      Validators.required,
      Validators.pattern(/^(0?[0-9]|[1-5][0-9])$/),
      Validators.min(0),
      Validators.max(59),
    ]),
  });

  isOverlayOpen: boolean = false;
  timerArray: TimeOption[] = [];

  constructor(private openSettingsOverlay: OpenOverlayService) {
    this.openSettingsOverlay.$openOverlay.subscribe((obsValue) => {
      this.isOverlayOpen = obsValue;
    });
  }

  ngOnInit(): void {
    this.timerArray = [
      {
        ms: 60 * 3 * 1000,
        id: 'threeMinutes',
        selected: false,
      },
      {
        ms: 60 * 5 * 1000,
        id: 'fiveMinutes',
        selected: false,
      },
      {
        ms: 60 * 10 * 1000,
        id: 'tenMinutes',
        selected: false,
      },
      {
        ms: 60 * 30 * 1000,
        id: 'thirdyMinutes',
        selected: false,
      },
    ];
  }

  setActiveTimer() {
    const activeTimer: TimeOption | undefined = this.timerArray.find(
      (timer) => timer.selected
    );
    this.activeTimer.emit(activeTimer);
  }

  closeOverlay() {
    this.openSettingsOverlay.setOverlayValue(false);
  }

  handleTimerSelection(event: Event) {
    if (event.target instanceof HTMLElement) {
      const id = event.target.id;
      this.timerArray.forEach((timer) => {
        timer.id === id ? (timer.selected = true) : (timer.selected = false);
      });
      this.setActiveTimer();
    }
  }

  onSubmit() {
    if (!this.newTimer.valid) {
      console.log('im ersten validierer');
      return;
    }
    if (
      (this.newTimer.value.newMinutes === '00' &&
        this.newTimer.value.newSeconds === '00') ||
      (this.newTimer.value.newMinutes &&
        this.newTimer.value.newMinutes.length > 2) ||
      (this.newTimer.value.newSeconds &&
        this.newTimer.value.newSeconds.length > 2)
    ) {
      console.log('im anderen Validerer');
      return;
    }

    let ms = 0;
    if (this.newTimer.value.newMinutes) {
      console.log(parseInt(this.newTimer.value.newMinutes) * 60 * 1000);
      ms = parseInt(this.newTimer.value.newMinutes) * 60 * 1000;
    }
    if (this.newTimer.value.newSeconds)
      ms = parseInt(this.newTimer.value.newSeconds) * 1000 + ms;
    this.timerArray.push({
      ms: ms,
      id: 'customTimer' + this.timerArray.length,
      selected: false,
    });
  }
}
