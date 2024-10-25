import NaluTable from "./components/NaluTable";
import tableData from "./data/Data";
import "./App.css";
import { useState } from "react";

function App() {
  const [tabSelect, setTabSelect] = useState("Primeira");

  return (
    <div className="p-20 h-full">
      <NaluTable
        tableData={tableData}
        totalItems={80}
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
        removeItemFunction={() => console.log("remove")}
        editItemFunction={() => console.log("edit")}
        modalTitle="Modal"
        checkbox={false}
        handleSelectionChange={(selected) => console.log(selected)}
        handleSaveTabs={(tabs) => console.log(tabs)}
        variant="crimson"
        themeMode="light"
        size=""
      />
    </div>
  );
}

export default App;
