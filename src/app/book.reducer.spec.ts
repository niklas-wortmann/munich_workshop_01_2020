import { bookStateReducer, initialState } from "./book.reducer";

describe("Book Reducer", () => {
  describe("an unknown action", () => {
    it("should return the previous state", () => {
      const action = {} as any;

      const result = bookStateReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
