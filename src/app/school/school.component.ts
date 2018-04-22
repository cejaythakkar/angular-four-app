import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/data.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  public students : any[];
  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.dataService.getStudents().subscribe((response) => {
      this.students = response;
      console.log(this.students);
    });
  }

}
