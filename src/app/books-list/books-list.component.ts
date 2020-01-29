import { Component, OnInit, OnDestroy } from "@angular/core";
import { BooksService, Book } from "../books.service";
import {
  Observable,
  Subscription,
  Subject,
  combineLatest,
  BehaviorSubject
} from "rxjs";
import { takeUntil, tap } from "rxjs/operators";

@Component({
  selector: "app-books-list",
  templateUrl: "./books-list.component.html",
  styleUrls: ["./books-list.component.scss"]
})
export class BooksListComponent implements OnInit, OnDestroy {
  books: Book[];
  destroy$ = new Subject<void>();
  keyStroke$ = new BehaviorSubject<string>(null);
  constructor(private bookService: BooksService) {}

  ngOnInit() {
    combineLatest([this.bookService.fetchData(), this.keyStroke$])
      .pipe(
        tap(([data, keys]) =>
          keys == null
            ? (this.books = data)
            : (this.books = data.filter(book => book.title.includes(keys)))
        ),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  onValue(value: string): void {
    this.keyStroke$.next(value);
  }
}
