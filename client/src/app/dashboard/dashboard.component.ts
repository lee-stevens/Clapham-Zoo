import { Component, OnInit        } from '@angular/core';
import { HttpClient               } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    title = 'Dashboard';
    animals: any;

    constructor(private http: HttpClient) {}

    ngOnInit() {
      this.getAnimals();
    }

    getAnimals(){
      this.http.get("https://localhost:5001/api/animals")
      .subscribe({
        next: res => this.animals = res,
        error: err => console.log(err)
      });
    }
}
