import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import GenerateQuote from "./components/GenerateQuote";
import Navbar from "./components/Navbar";
import AuthorsQuote from "./components/AuthorsQuote";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const [state, setState] = useState(null);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Navbar setState={setState} />
        {state ? (
          <AuthorsQuote state={state} setState={setState} />
        ) : (
          <GenerateQuote setState={setState} />
        )}
        {/* <GenerateQuote /> */}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
