import NaluTable from "./components/NaluTable";
import "./App.css";
import tableData from "./Data";

function App() {
  return (
    <div className="p-20 h-full">
      <NaluTable tableData={tableData} />
    </div>
  );
}

export default App;
