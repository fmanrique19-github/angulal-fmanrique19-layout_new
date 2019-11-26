import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ExtractionService {
  constructor(private http: HttpClient) {}

  getExtractions(): any {
    return this.http.get<any>("http://jsonplaceholder.typicode.com/albums");
  }
}
