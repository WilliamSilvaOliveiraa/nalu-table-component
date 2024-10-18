import React, { useEffect, useState } from "react";
import tableData from "../data/Data";

export default function Teste() {
  return (
    <div className="relative flex h-40 w-40 flex-col">
      {tableData?.tabs && tableData?.tabs?.length > 0 ? <>oi</> : <> </>}
      <h1 className="text-3xl ">Tessadasdasdsate</h1>
    </div>
  );
}
