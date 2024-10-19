import NaluTable from "./components/NatuTable";
import tableData from "./data/Data";
import "./App.css";

function App() {
  return (
    <div className="p-28">
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
    </div>
  );
}

export default App;
