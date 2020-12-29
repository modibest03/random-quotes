import axios from "axios";

export const fetchQuote = async () => {
  const res = await axios.get(
    "https://quote-garden.herokuapp.com/api/v3/quotes/random"
  );

  return res;
};

export const fetchAuthorsQuote = async (authorName) => {
  const { data } = await axios.get(
    `https://quote-garden.herokuapp.com/api/v3/quotes?author=${authorName}`
  );
  return data;
};
