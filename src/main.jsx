import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeCustomization } from "./ui";
import { ScrollTop } from "./components";
import { AppRoutes } from "./routes/AppRoute";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store/storeApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeCustomization>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <ScrollTop>
            <AppRoutes />
          </ScrollTop>
        </BrowserRouter>
      </ReduxProvider>
    </ThemeCustomization>
  </React.StrictMode>
);
