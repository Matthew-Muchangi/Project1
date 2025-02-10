import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  options = ['Incomplete', 'Complete', 'In Progress'];
  constructor() { }

  ngOnInit(): void {
  }

}
