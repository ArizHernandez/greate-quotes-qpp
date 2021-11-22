import { quoteActions } from "./quote";

import Swal from "sweetalert2";

const url = "https://react-http-ar-default-rtdb.firebaseio.com/quotes.json";

export const sendQuotes = (quotes) => {
  return async (dispatch) => {
    const sendData = async () => {
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify({ items: quotes }),
      });

      if (!response.ok) {
        throw new Error("Error getting the data");
      }
    };

    dispatch(quoteActions.startLoadingQuotes());

    try {
      await sendData();
    } catch (error) {
      Swal.fire("Ups..", "Error: " + error.message, "error");
    }

    dispatch(quoteActions.endLoadingQuotes());
  };
};

export const getQuotes = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("We have error getting the data! :(");
      }

      const data = await response.json();

      return data;
    };

    dispatch(quoteActions.startLoadingQuotes());

    try {
      const quotesData = await fetchData();

      dispatch(quoteActions.replaceQuotes({ items: quotesData?.items || [] }));
    } catch (error) {
      Swal.fire("Error!", "Error: " + error.message, "error");
    }

    dispatch(quoteActions.endLoadingQuotes());
  };
};
