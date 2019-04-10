import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  id: string;
  username: string;
  role: string;
  status: string;
  userList = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getJSON();
    this.id = localStorage.getItem('token');
  } 
  getJSON() {
    this.http.get('./assets/db.json').subscribe(
      data => {
        this.userList = data as any[];
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }


  onClick() {
    this.userList.push({ username: this.username, role: this.role, status:this.status });
    this.username = '';
    this.role = '';
    this.status = '';
    console.log(JSON.stringify(this.userList));
  }



  //Delete

  removeProduct(i) {
    this.userList.splice(i, 1);
    this.http.delete('./assets/db.json' + i).subscribe(
       data => {
         this.userList = data as any[];
       },
    (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
   
}
