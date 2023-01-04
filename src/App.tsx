import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Table } from "@molecule/index";
import { Icon } from '@atom/intex';
// import { Button } from "antd";

import 'antd/dist/reset.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Icon type='cash' size={90} />
      {/* <Button>Chiwawa</Button> */}
      <Table text="M10" />
    </div>
  );
}

export default App;
