import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ExtractionService {
  constructor(private http: HttpClient) {}

  getExtractions(): any {
    return this.http
      .get("http://jsonplaceholder.typicode.com/albums")
      .pipe(data => {
        console.log("data", data);
        return data;
      });
  }
}
