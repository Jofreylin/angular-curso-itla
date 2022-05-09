import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-homework',
  templateUrl: './second-homework.component.html',
  styleUrls: ['./second-homework.component.css']
})
export class SecondHomeworkComponent implements OnInit {

  htmlCode = `
  <div class="card">
    <img *ngIf="gender == 'M'; else otherImage" class="card-img-top" src="assets/img/MaleUser.svg" alt="Card image cap">
    <ng-template #otherImage>
        <img  class="card-img-top" src="assets/img/FemaleUser.svg" alt="Card image cap">
    </ng-template>
    <div class="card-body">
        <div class="text-center">
            <h5>
                <strong>
                    {{firstName}} {{lastName}}
                </strong>
                
            </h5>
            <h6>{{jobTitle}}</h6>
            <br>
            <h6>
                <strong>Género: </strong>
                {{gender}}
            </h6>
            
        </div>
        <hr>
        <div class="text-center row justify-content-center align-items-center">
            <div class="col">
                <h6>
                    <strong>Código: </strong> 
                    {{id}}
                </h6>
            </div>
            <div class="col">
                <button class="btn btn-danger rounded-pill text-white" (click)="sendDelete(this.id)">
                    <i class="fa-solid fa-trash-can"></i>
                  
                </button>
            </div>
            
        </div>  
    </div>
  </div>
  `;

  tsCode = `
  @Input() id = '';
  @Input() firstName = '';
  @Input() lastName = '';
  @Input() jobTitle = '';
  @Input() gender = '';
  @Input() imageUrl = '';
  
  @Output() deleteEmitter = new EventEmitter<string>();

  sendDelete(i){
    this.deleteEmitter.emit(i);
  }
  `;

  fatherHtmlCode = `
  <div class="col-md-4 col-lg-3 py-3" *ngFor="let item of dataFiltered; let i = index">
    <app-second-homework-body [id]="item.id" [firstName]="item.first_name" [lastName]="item.last_name" [gender]="item.gender" 
      [jobTitle]="item.job_title" (deleteEmitter)="deleteItem($event)">
    </app-second-homework-body>
  </div>
  `;

  fatherTsCode = `

  data = [];

  searchKey: string;
  beforeSearchKey: string = '';
  
  dataFiltered = [];

  constructor() { }

  ngOnInit(): void {
    this.dataFiltered = [...this.data];
  }

  deleteItem(i){
    let index = this.data.findIndex(x=>x.id == i);
    this.data.splice(index,1);

    let indexFiltered = this.dataFiltered.findIndex(x=>x.id == i);
    this.dataFiltered.splice(indexFiltered,1);

  }

  updateList(){
    this.dataFiltered = this.data;
  }


  searchOn(){
    
    let val = this.searchKey ? this.searchKey.toLowerCase().trim() : '';
    
    this.updateList();

    if(!val){
      return;
    }

    this.dataFiltered = this.dataFiltered.filter(x=>{
      return x.id.toString().includes(val) || x.first_name.toLowerCase().includes(val) || x.last_name.toLowerCase().includes(val)|| 
    });

  
  }
  `;


  data = [{
    "id": 1,
    "first_name": "Inge",
    "last_name": "Matfin",
    "job_title": "Help Desk Operator",
    "gender": "F"
  }, {
    "id": 2,
    "first_name": "Ephrem",
    "last_name": "Dowyer",
    "job_title": "VP Product Management",
    "gender": "M"
  }, {
    "id": 3,
    "first_name": "Ajay",
    "last_name": "Pohl",
    "job_title": "Business Systems Development Analyst",
    "gender": "F"
  }, {
    "id": 4,
    "first_name": "Ema",
    "last_name": "Lintall",
    "job_title": "Senior Quality Engineer",
    "gender": "F"
  }, {
    "id": 5,
    "first_name": "Jordanna",
    "last_name": "Ferrers",
    "job_title": "Occupational Therapist",
    "gender": "F"
  }, {
    "id": 6,
    "first_name": "Lyda",
    "last_name": "Asche",
    "job_title": "Senior Quality Engineer",
    "gender": "F"
  }, {
    "id": 7,
    "first_name": "Loni",
    "last_name": "Ingham",
    "job_title": "Office Assistant I",
    "gender": "F"
  }, {
    "id": 8,
    "first_name": "Tracee",
    "last_name": "Cherm",
    "job_title": "Analog Circuit Design manager",
    "gender": "F"
  }, {
    "id": 9,
    "first_name": "Jacquenetta",
    "last_name": "Peaseman",
    "job_title": "Product Engineer",
    "gender": "F"
  }, {
    "id": 10,
    "first_name": "Darnall",
    "last_name": "Foyster",
    "job_title": "Electrical Engineer",
    "gender": "M"
  }];

  searchKey: string;
  beforeSearchKey: string = '';
  
  dataFiltered = [];

  constructor() { }

  ngOnInit(): void {
    this.dataFiltered = [...this.data];
  }

  deleteItem(i){
    let index = this.data.findIndex(x=>x.id == i);
    this.data.splice(index,1);

    let indexFiltered = this.dataFiltered.findIndex(x=>x.id == i);
    this.dataFiltered.splice(indexFiltered,1);

  }

  updateList(){
    this.dataFiltered = this.data;
  }


  searchOn(){
    
    let val = this.searchKey ? this.searchKey.toLowerCase().trim() : '';
    
    this.updateList();

    if(!val){
      return;
    }

    this.dataFiltered = this.dataFiltered.filter(x=>{
      return x.id.toString().includes(val) || x.first_name.toLowerCase().includes(val) || x.last_name.toLowerCase().includes(val)|| `${x.first_name} ${x.last_name}`.toLowerCase().includes(val)
    });

  
  }
}
