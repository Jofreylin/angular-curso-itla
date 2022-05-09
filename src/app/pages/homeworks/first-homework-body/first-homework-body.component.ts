import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-homework-body',
  templateUrl: './first-homework-body.component.html',
  styleUrls: ['./first-homework-body.component.css']
})
export class FirstHomeworkBodyComponent implements OnInit {

  @Input() firstName: string = '';
  @Input() lastName: string = '';
  @Input() biography: string = '';


  htmlCode = `
    <div>
        <h5>
            <strong>Nombre</strong>
        </h5>
        <h6>{{firstName}} {{lastName}}</h6>

        <br>

        <h5>
            <strong>Biografia</strong>
        </h5>
        <p>{{biography}}</p>
    </div>
  `;

  tsCode = `
    @Input() firstName: string = '';
    @Input() lastName: string = '';
    @Input() biography: string = '';
  `;
  
  fatherHtmlCode=`
    <app-first-homework-body [firstName]="'Jofreylin'" [lastName]="'Perez Valdez'" [biography]="'...'" ></app-first-homework-body>
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
