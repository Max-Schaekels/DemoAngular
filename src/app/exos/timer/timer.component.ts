import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConvertTimerPipe } from '../../core/pipes/convert-timer.pipe';

@Component({
  selector: 'app-timer',
  imports: [FormsModule, CommonModule, ConvertTimerPipe],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {
  nbSec : number = 0;
  intervalId : number | undefined;
  isRunning : boolean = false;
  pipeOption : string = '';


  demarrer() : void{

      this.intervalId = window.setInterval(()=> {this.nbSec++;},1000)
      this.isRunning = true;

  }


  pause() : void{
    clearInterval(this.intervalId);
    this.isRunning = false;

  }

  reset() : void{
    clearInterval(this.intervalId);
    this.nbSec = 0;
    this.isRunning = false;
    

  }
}
