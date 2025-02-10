import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  // Declare a variable to store the retrieved data
  data: any[] = [];

  // Inject the DataService into the component
  constructor(private dataService: TaskService) { }

  ngOnInit(): void {
    // Call the method to fetch data when the component initializes
    this.dataService.getAllTask().subscribe(
      (response) => {
        console.log('Data received:', response);
        this.data = response;  // Store the response data in the `data` variable
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
