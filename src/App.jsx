import NaluTable from "./components/NaluTable";
import tableData from "./data/Data";
import "./App.css";
import { useState } from "react";

function App() {
  const [tabSelect, setTabSelect] = useState("Primeira");

  return (
    <div className="p-20 h-full">
      <NaluTable />
    </div>
  );
}

export default App;
