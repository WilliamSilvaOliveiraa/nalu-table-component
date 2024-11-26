import NaluTable from "./components/NaluTable";
//Dados de exemplo
import tableData from "./Data";

function App() {
  return (
    <div className="p-20 h-screen w-full  ">
      <NaluTable />

      {/* <NaluTable
        itemsPerPage={5}
        totalItems={20}
        tableData={tableData}
        theme="dark"
        size="small"
        minWidth={2000}
        handlePageChange={(page) => console.log(page)}
      /> */}
    </div>
  );
}

export default App;

//Exemplo de uso do componente NaluTable
