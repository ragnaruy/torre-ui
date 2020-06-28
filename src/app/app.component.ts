import { Component } from '@angular/core';
import {ApiService} from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['name', 'username', 'jobTitle', 'pictureUrl', 'location'];

  dataSource = [];
  constructor(private apiService: ApiService) { }

  searchDevelopers(searchName: string) {
    if (searchName.length >= 3) {
      this.apiService.searchDeveloper(searchName).subscribe((data: any[])=>{
        this.dataSource = data;
      })
    }
  }
}
