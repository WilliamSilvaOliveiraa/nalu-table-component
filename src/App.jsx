import { useState } from "react";
import SimplifiedTableComponent from "./components/Teste";
import NaluTable from "./components/NatuTable";
import Pagination from "./components/Pagination/Pagination";
import tableData from "./data/Data";
import "./App.css";

function App() {
  return (
    <NaluTable
      tableData={tableData}
      totalItems={20}
      handlePageChange={(page) => console.log(page)}
      itemsPerPage={10}
      loading={false}
      currentPageProp={1}
      handleTabChange={(tab) => console.log(tab)}
      selectedTab="tab1"
      activeTab="tab1"
      header={true}
      plusButton={true}
      addItemFunction={() => console.log("add")}
      viewItemFunction={() => console.log("view")}
      modalTitle="Modal"
      checkbox={true}
      handleSelectionChange={(selected) => console.log(selected)}
    />
  );
}

export default App;
