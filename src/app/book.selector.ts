import { State } from "./reducers";
import { createSelector } from "@ngrx/store";
import { BookState } from "./book.reducer";

const bookFeatureSelector = (state: State) => state.books;

const bookListSelector = (state: BookState) => state.list;

export const bookSelector = createSelector(
  bookFeatureSelector,
  bookListSelector
);
