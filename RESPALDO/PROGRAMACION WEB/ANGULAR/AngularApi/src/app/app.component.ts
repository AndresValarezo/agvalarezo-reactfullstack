import { Component } from '@angular/core';
import { Person } from './class/person';
import { freeApiService } from './service/freeapi.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApi';
  constructor(private _freeApservice:freeApiService){}
  listPeople:Person[] | undefined;
  ngOnInit()
  {
    this._freeApservice.getComments().subscribe
    (data=>{this.listPeople=data});
  }
}
