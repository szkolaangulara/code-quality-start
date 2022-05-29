import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input()
  valueA: any = '';
  @Output()
  public sendAction: EventEmitter<any> = new EventEmitter<any>();

  currentValue: any;

  action() {
    this.sendAction.emit(this.currentValue);
  }
}
