import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  changed: false,
  isLoading: false,
};

const quoteSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    startLoadingQuotes(state) {
      state.isLoading = true;
    },
    endLoadingQuotes(state) {
      state.isLoading = false;
    },
    replaceQuotes(state, action) {
      state.items = action.payload.items;
    },
    addQuote(state, action) {
      const newItem = action.payload;
      const itemId = newItem?.id;

      state.changed = true;

      if (!itemId) {
        state.items.push({
          id:
            state.items.length > 0
              ? state.items[state.items.length - 1].id + 1
              : 1,
          author: newItem.author,
          text: newItem.text,
          comments: [],
        });
      } else {
        const existingItem = state.items.find(
          (item) => String(item.id) === itemId
        );

        const newComment = {
          id: Math.round(Math.random() * 1000),
          text: newItem.comment,
        };

        if (existingItem?.comments) {
          existingItem.comments = [...existingItem.comments, newComment];
        } else {
          existingItem.comments = [newComment];
        }
      }
    },
    deleteQuote(state, action) {
      const newItems = state.items.filter(
        (item) => String(item.id) !== action.payload
      );

      state.changed = true;
      state.items = newItems;
    },
  },
});

export const quoteActions = quoteSlice.actions;

export default quoteSlice.reducer;
