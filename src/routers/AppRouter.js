import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../components/Styled-components/theme";
import { GlobalStyles } from "../components/Styled-components/global";
import LoginPage from "../components/child-components/LoginPage";
import DashBoard from "../components/DashBoard";
import Team from "../components/Team";
import PageNotFound from "../components/child-components/PageNotFound";

const AppRouter = () => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyles />
    <div className="page-container">
      <BrowserRouter>
        <div className="page-container">
          <Switch>
            <Route path="/" exact={true} component={LoginPage} />
            <Route path="/dashboard" exact={true} component={DashBoard} />
            <Route path="/team" exact={true} component={Team} />

            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  </ThemeProvider>
);

export default AppRouter;
