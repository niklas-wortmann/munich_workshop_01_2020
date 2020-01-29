import { Component, OnInit, OnDestroy } from "@angular/core";
import { BooksService, Book } from "../books.service";
import {
  Observable,
  Subscription,
  Subject,
  combineLatest,
  BehaviorSubject,
  merge
} from "rxjs";
import { takeUntil, tap, switchMap, map, filter } from "rxjs/operators";

@Component({
  selector: "app-books-list",
  templateUrl: "./books-list.component.html",
  styleUrls: ["./books-list.component.scss"]
})
export class BooksListComponent implements OnInit {
  book$: Observable<Book[]>;
  keyStroke$ = new BehaviorSubject<string>(null);
  constructor(private bookService: BooksService) {}

  ngOnInit() {
    this.book$ = merge(
      this.bookService.fetchData(),
      this.keyStroke$.pipe(
        switchMap(keyStroke =>
          this.bookService.books$.pipe(
            filter(books => books != null),
            map(books => books.filter(book => book.title.includes(keyStroke)))
          )
        )
      )
    );
  }

  onValue(value: string): void {
    this.keyStroke$.next(value);
  }
}
