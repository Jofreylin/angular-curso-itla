import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-second-homework-body',
  templateUrl: './second-homework-body.component.html',
  styleUrls: ['./second-homework-body.component.css']
})
export class SecondHomeworkBodyComponent implements OnInit {

  @Input() id = '';
  @Input() firstName = '';
  @Input() lastName = '';
  @Input() jobTitle = '';
  @Input() gender = '';
  @Input() imageUrl = '';
  
  @Output() deleteEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendDelete(i){
    this.deleteEmitter.emit(i);
  }

  
}
