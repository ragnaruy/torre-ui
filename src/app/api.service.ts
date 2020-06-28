import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }


  public searchDeveloper(name: string) {

    return this.httpClient.get("http://bio-consumer.herokuapp.com/users/search-developers?searchName=" + name);
  }
}
