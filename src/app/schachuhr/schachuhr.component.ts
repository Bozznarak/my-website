import { Component } from '@angular/core';
import { OpenOverlayService } from '../services/open-overlay.service';
import { TimeOption } from './settings-overlay/settings-overlay.component';

@Component({
  selector: 'app-schachuhr',
  templateUrl: './schachuhr.component.html',
  styleUrls: ['./schachuhr.component.css'],
})
export class SchachuhrComponent {
  timerBlack: number = 0;
  timerWhite: number = 0;
  intvervalWhite: any;
  intvervalBlack: any;
  whitesTurn: boolean = true;
  gameRunning: boolean = false;
  activeTimer: TimeOption | undefined;

  constructor(private overlayService: OpenOverlayService) {}

  public startPauseTimer(): void {
    if (
      (this.gameRunning && this.timerWhite) ||
      (this.gameRunning && this.timerBlack)
    ) {
      this.clearAllIntervals();
      this.gameRunning = false;
    } else {
      this.startInterval();
      this.gameRunning = true;
    }
  }

  private startInterval(): void {
    if (this.timerWhite === 0 || this.timerBlack === 0) {
      alert('Drück den Reset Button um ein neues Spiel zu starten.');
      return;
    }
    if (this.whitesTurn) {
      this.intvervalWhite = setInterval(() => {
        this.timerWhite = this.timerWhite - 1000;
        this.gameEnd(this.timerWhite);
      }, 1000);
    } else {
      this.intvervalBlack = setInterval(() => {
        this.timerBlack = this.timerBlack - 1000;
        this.gameEnd(this.timerBlack);
      }, 1000);
    }
  }

  private clearAllIntervals(): void {
    clearInterval(this.intvervalWhite);
    this.intvervalWhite = undefined;
    clearInterval(this.intvervalBlack);
    this.intvervalBlack = undefined;
  }

  public handleEvent(event: Event): void {
    if (!this.gameRunning || this.timerBlack === 0 || this.timerWhite === 0)
      return;
    if (this.whitesTurn && (event.target as HTMLElement).id === 'white') {
      this.whitesTurn = !this.whitesTurn;
      this.clearAllIntervals();
      this.intvervalBlack = setInterval(() => {
        this.timerBlack = this.timerBlack - 1000;
        this.gameEnd(this.timerBlack);
      }, 1000);
    }

    if (!this.whitesTurn && (event.target as HTMLElement).id === 'black') {
      this.whitesTurn = !this.whitesTurn;
      this.clearAllIntervals();
      this.intvervalWhite = setInterval(() => {
        this.timerWhite = this.timerWhite - 1000;
        this.gameEnd(this.timerWhite);
      }, 1000);
    }
  }

  private gameEnd(timer: number): void {
    if (timer === 0) {
      this.clearAllIntervals();
      this.gameRunning = false;
      this.whitesTurn = true;
    }
  }

  public resetGame(): void {
    this.clearAllIntervals();
    this.timerWhite = this.activeTimer?.ms || 0;
    this.timerBlack = this.activeTimer?.ms || 0;
    this.gameRunning = false;
    this.whitesTurn = true;
  }

  public openSettingsOverlay(): void {
    this.overlayService.setOverlayValue(true);
  }

  public reciveActiveTimer(activeTimerData: TimeOption | undefined) {
    this.timerBlack = activeTimerData?.ms || 0;
    this.timerWhite = activeTimerData?.ms || 0;
    this.activeTimer = activeTimerData;
  }
}
