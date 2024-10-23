import NaluTable from "./components/NaluTable";
import tableData from "./data/Data";
import "./App.css";
import { useState } from "react";

function App() {
  const [tabSelect, setTabSelect] = useState("Primeira");
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="p-20 h-full">
      <button
        onClick={handleToggleTheme}
        style={{
          backgroundColor: "red",
        }}
      >
        Olá
      </button>
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
        checkbox={true}
        handleSelectionChange={(selected) => console.log(selected)}
        handleSaveTabs={(tabs) => console.log(tabs)}
        variant="safira"
        themeMode={theme}
      />
    </div>
  );
}

export default App;
