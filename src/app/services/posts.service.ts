import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = "https://jsonplaceholder.typicode.com";

  constructor(private httpClient: HttpClient) {}

  getAllPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.url + '/posts');
  }

  getPostsOneUser(id: number): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.url + '/users/' + id + '/posts');
  }

}
