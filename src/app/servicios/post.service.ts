import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postListUrl = 'https://jsonplaceholder.typicode.com/posts';  

  private postDetailUrl = 'https://jsonplaceholder.typicode.com/posts/';
 
  private comentarioUrl = 'https://jsonplaceholder.typicode.com/comments?postId=';

constructor(private http: HttpClient,) { 

}


getListPost(): Observable<any>{
  return this.http.get(this.postListUrl);
}             



getDetail(i: number):Observable<any> {
  return this.http.get(this.postDetailUrl + i);
  
} 

getComentario(i:number):Observable<any> {
  return this.http.get(this.comentarioUrl + i);
  
}

}
