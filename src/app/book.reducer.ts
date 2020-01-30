import { Action, createReducer, on } from "@ngrx/store";
import { Book } from "./books.service";
import {
  loadInitBooks,
  loadInitBooksSuccess,
  loadInitBooksFailure
} from "./init-books.actions";

export const bookFeatureKey = "book";

export interface State {
  books: Book[];
}

export const initialState: State = {
  books: []
};

const handleBookSuccess = (state: State, obj: { books: Book[] }) => ({
  ...state,
  books: [...obj.books]
});

const bookReducer = createReducer(
  initialState,
  on(loadInitBooks, state => ({ ...state, books: [] })),
  on(loadInitBooksSuccess, handleBookSuccess),
  on(loadInitBooksFailure, state => ({ ...state, books: [] }))
);

export function reducer(state: State | undefined, action: Action) {
  return bookReducer;
}
