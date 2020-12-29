import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchAuthorsQuote } from "../api/api";
import Loader from "./Loader";

function AuthorsQuote({ state }) {
  const [authorName, setAuthorName] = useState(state);
  const { isLoading, error, data, refetch, isIdle } = useQuery(
    ["quotes", authorName],
    () => fetchAuthorsQuote(authorName)
  );
  if (isIdle)
    return (
      <div>
        <Loader />
        <button onClick={() => refetch()}>Fetch Quotes</button>
      </div>
    );

  if (isLoading) return <Loader />;

  if (error) return "An error has occurred: " + error.message;
  console.log(data);
  return (
    <div className="quotes">
      <div className="name bottom">{authorName}</div>
      {data?.data.map((quote) => (
        <div key={quote._id}>
          <div className="quote">{quote.quoteText}</div>
        </div>
      ))}
    </div>
  );
}

export default AuthorsQuote;
