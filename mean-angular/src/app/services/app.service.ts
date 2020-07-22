import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Post } from './post';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url = 'http://localhost:9000';
  constructor(private http: Http) { }
  
  fetchAll(): Observable<Post[]> {
    return this.http.get(`${this.url}/posts`).pipe(map(res => res.json()))
  }

  save(title: string, body: string): Observable<Post> {
    const data = JSON.stringify({ title, body })
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers });
    return this.http.post(`${this.url}/posts`, data, options).pipe(map(res => res.json()));
  }
}
