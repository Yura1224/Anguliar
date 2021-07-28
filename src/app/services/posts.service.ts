import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models/IPost";


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = "https://jsonplaceholder.typicode.com/posts"
  constructor(private httpClient: HttpClient) {
    console.log("post ssdfsdf")
  }
  getAllPosts() :Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(this.url)
  }

  getUserById(id:number) :Observable<IPost>{
    return this.httpClient.get<IPost>(this.url + "/" + id)
  }
  getPostById(id:number) :Observable<IPost> {
    return this.httpClient.get<IPost>(this.url + "/" + id)
  }
}
