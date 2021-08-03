import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../models";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private url = "https://jsonplaceholder.typicode.com";

  constructor(private httpClient: HttpClient) {}

  // getAllComments(): Observable<IComment[]> {
  //   return this.httpClient.get<IComment[]>(this.url + '/comments');
  // }
  getCommentByPostId(id: number): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(this.url + "/posts/" + id + '/comments');
  }

  }





