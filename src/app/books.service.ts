import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { Store, select } from "@ngrx/store";
import { State } from "./reducers";
import {
  loadInitBooks,
  loadInitBooksSuccess,
  loadInitBooksFailure
} from "./init-books.actions";
import { bookSelector } from "./book.selector";

export interface Book {
  title: string;
}

@Injectable({
  providedIn: "root"
})
export class BooksService {
  private store = this.ngrxStore.pipe(select(bookSelector), tap(console.log));

  get books$(): Observable<Book[]> {
    return this.store;
  }

  constructor(
    private httpClient: HttpClient,
    private ngrxStore: Store<State>
  ) {}

  fetchData(): Observable<Book[]> {
    this.ngrxStore.dispatch(loadInitBooks());
    return this.httpClient.get<Book[]>("http://localhost:4730/books").pipe(
      tap(data => {
        this.ngrxStore.dispatch(loadInitBooksSuccess({ books: data }));
      }),
      catchError(error => {
        this.ngrxStore.dispatch(loadInitBooksFailure({ error: error }));
        return of([]);
      })
    );
  }
}
