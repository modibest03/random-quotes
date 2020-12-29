import React from "react";
import { useQuery } from "react-query";
import { fetchQuote } from "../api/api";
import Loader from "./Loader";
import Quote from "./Quote";

function GenerateQuote({ setState }) {
  const { isLoading, error, data, refetch, isIdle, isFetching } = useQuery(
    "quote",
    fetchQuote
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
  return (
    <>{isFetching ? <Loader /> : <Quote setState={setState} data={data} />}</>
  );
}

export default GenerateQuote;
