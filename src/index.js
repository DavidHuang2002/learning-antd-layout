import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import "./styles.less"
// import 'antd/dist/antd.css';
// import '@ant-design/pro-layout/dist/layout.css';
import App from "./components/ProLayoutApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
