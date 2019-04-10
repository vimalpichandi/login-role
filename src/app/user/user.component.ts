import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

import { RouterModule, Routes } from '@angular/router'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: string;
  constructor(private router: Router,public authService: AuthService) { }

  ngOnInit() {
    this.id = localStorage.getItem('token');
  } 

}
