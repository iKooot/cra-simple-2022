import React from "react";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./services/store";
import { queryClient } from "./services/queryClient";
import { QueryClientProvider } from "react-query";

export function AppWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
}
