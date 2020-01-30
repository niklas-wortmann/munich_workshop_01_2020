import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import { bookFeatureKey, BookState, bookReducer } from "../book.reducer";

export interface State {
  books: BookState;
}

export const reducers: ActionReducerMap<State> = {
  books: bookReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
