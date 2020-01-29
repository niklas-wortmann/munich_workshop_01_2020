import { Component, OnInit, OnDestroy } from "@angular/core";
import { BooksService, Book } from "../books.service";
import { Observable, Subscription, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-books-list",
  templateUrl: "./books-list.component.html",
  styleUrls: ["./books-list.component.scss"]
})
export class BooksListComponent implements OnInit, OnDestroy {
  books: Book[];
  sub: Subscription;
  destroy$ = new Subject<void>();
  constructor(private bookService: BooksService) {}

  ngOnInit() {
    this.sub = this.bookService
      .fetchData()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => (this.books = data));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
