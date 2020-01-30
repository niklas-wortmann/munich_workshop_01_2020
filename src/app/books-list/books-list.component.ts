import { Component, OnInit, OnDestroy } from "@angular/core";
import { BooksService, Book } from "../books.service";
import {
  Observable,
  Subscription,
  Subject,
  combineLatest,
  BehaviorSubject,
  merge,
  EMPTY,
  of
} from "rxjs";
import {
  takeUntil,
  tap,
  switchMap,
  map,
  filter,
  finalize,
  catchError,
  exhaustMap
} from "rxjs/operators";

@Component({
  selector: "app-books-list",
  templateUrl: "./books-list.component.html",
  styleUrls: ["./books-list.component.scss"]
})
export class BooksListComponent implements OnInit {
  book$: Observable<Book[]>;
  keyStroke$ = new BehaviorSubject<string>(null);
  refresh = new BehaviorSubject<void>(null);

  constructor(private bookService: BooksService) {}

  ngOnInit() {
    this.refresh
      .pipe(
        exhaustMap(() => {
          return this.bookService.fetchData().pipe(
            catchError(_ => {
              console.error(`error ${_} happened`);
              return EMPTY;
            })
          );
        })
      )
      .subscribe();
    this.book$ = merge(
      this.keyStroke$.pipe(
        switchMap(keyStroke => {
          console.log("blasodja");
          return this.bookService.books$.pipe(
            filter(books => books != null),
            map(books =>
              keyStroke == null
                ? books
                : books.filter(book => book.title.includes(keyStroke))
            ),
            catchError(_ => of([]))
          );
        })
      )
    );
  }

  onValue(value: string): void {
    this.keyStroke$.next(value);
  }

  onRefresh(): void {
    this.refresh.next();
  }
}
