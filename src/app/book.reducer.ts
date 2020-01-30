import { Action, createReducer, on } from "@ngrx/store";
import {
  loadInitBooks,
  loadInitBooksSuccess,
  loadInitBooksFailure
} from "./init-books.actions";
import { Book } from "./books.service";
import { State } from "./reducers";

export const bookFeatureKey = "books";

export interface BookState {
  list: Book[];
}

export const initialState: BookState = {
  list: []
};

const handleBookSuccess = (state: BookState, { books }): BookState => ({
  ...state,
  list: [...books]
});

export const bookReducer = createReducer(
  initialState,
  on(loadInitBooks, state => ({ ...state, books: [] })),
  on(loadInitBooksSuccess, handleBookSuccess),
  on(loadInitBooksFailure, state => ({ ...state, books: [] }))
);
