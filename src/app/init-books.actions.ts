import { createAction, props } from "@ngrx/store";
import { Book } from "./books.service";

export const loadInitBooks = createAction("[InitBooks] Load InitBookss");

export const loadInitBooksSuccess = createAction(
  "[InitBooks] Load InitBookss Success",
  props<{ books: Book[] }>()
);

export const loadInitBooksFailure = createAction(
  "[InitBooks] Load InitBookss Failure",
  props<{ error: any }>()
);
