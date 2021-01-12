import React from "react";
import ConfigureStore from "./redux/store/ConfigureStore";
import { Provider } from "react-redux";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import "antd/dist/antd.css";

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;
