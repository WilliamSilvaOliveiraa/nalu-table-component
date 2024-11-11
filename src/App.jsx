import NaluTable from "./components/NaluTable";
import "./App.css";
import tableData from "./Data";

function App() {
  return (
    <div className="p-20 h-full">
      <NaluTable itemsPerPage={5} totalItems={20} tableData={tableData} />
    </div>
  );
}

export default App;
