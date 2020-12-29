import React from "react";
import { fetchQuote } from "../api/api";
import { useQuery } from "react-query";

function Navbar({ setState }) {
  const { refetch } = useQuery("quote", fetchQuote);
  return (
    <div>
      <header>
        <nav>
          <div onClick={() => setState(null)}>back</div>
          <div onClick={() => refetch()}>random</div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
