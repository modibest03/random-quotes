import React from "react";

function Quote({ data, setState }) {
  return (
    <div className="quote-container">
      <div className="quote">{data.data.data[0].quoteText}</div>
      <div
        onClick={() => setState(data.data.data[0].quoteAuthor)}
        className="container"
      >
        <div className="profession">
          <span className="name">{data.data.data[0].quoteAuthor}</span>
          <span className="title">{data.data.data[0].quoteGenre}</span>
        </div>
        <span className="arrow">&rarr;</span>
      </div>
    </div>
  );
}

export default Quote;
