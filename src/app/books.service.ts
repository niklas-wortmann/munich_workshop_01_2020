import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";

export interface Book {
  title: string;
}

@Injectable({
  providedIn: "root"
})
export class BooksService {
  private store = new BehaviorSubject<Book[]>(null);

  get books$(): Observable<Book[]> {
    return this.store.asObservable();
  }

  constructor(private httpClient: HttpClient) {}

  fetchData(): Observable<Book[]> {
    return this.httpClient.get<Book[]>("http://localhost:4730/books").pipe(
      tap(data => {
        this.store.next(data);
      })
    );
  }
}
