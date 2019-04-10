import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


export class DataServiceService {
  constructor(private http: HttpClient) {
  }
}