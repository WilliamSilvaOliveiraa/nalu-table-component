import NaluTable from "./components/NaluTable";
import tableData from "./data/Data";
import "./App.css";
import { useState } from "react";

function App() {
  const [tabSelect, setTabSelect] = useState("Primeira");

  return (
    <div className="p-28">
      <NaluTable
        tableData={tableData}
        totalItems={20}
        handlePageChange={(page) => console.log(page)}
        itemsPerPage={10}
        loading={false}
        currentPageProp={1}
        handleTabChange={(tab) => setTabSelect(tab)}
        selectedTab={tabSelect}
        activeTab={tabSelect}
        header={true}
        plusButton={true}
        addItemFunction={() => console.log("add")}
        viewItemFunction={() => console.log("view")}
        modalTitle="Modal"
        checkbox={true}
        handleSelectionChange={(selected) => console.log(selected)}
        handleSaveTabs={(tabs) => console.log(tabs)}
        variant="safira"
        themeMode="light"
      />
    </div>
  );
}

export default App;
