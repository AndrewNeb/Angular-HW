import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name:string = 'Andrew';
  surname:string = 'Nebyshynets';
  gender:string = 'Male';
  age:number = 32;
  title = 'hw2209';
}
