import React, { useEffect, useState } from "react";
import Table from "./Table/Table";
import PresetTabs from "./PresetTabs/PresetTabs";
import PropTypes from "prop-types";
import ModalTabs from "./Modal/ModalTabs";
import Pagination from "./Pagination/Pagination";

NaluTable.propTypes = {
  tableData: PropTypes.array.isRequired,
  header: PropTypes.array.isRequired,
  plusButton: PropTypes.node,
  totalItems: PropTypes.number,
  itemsPerPage: PropTypes.number,
  addItemFunction: PropTypes.func,
  viewItemFunction: PropTypes.func,
  handlePageChange: PropTypes.func,
  modalTitle: PropTypes.string,
  handleTabChange: PropTypes.func,
  loading: PropTypes.bool,
  checkbox: PropTypes.bool,
  handleSelectionChange: PropTypes.func,
  size: PropTypes.string,
  removeItemFunction: PropTypes.func,
  editItemFunction: PropTypes.func,
  currentPageProp: PropTypes.number,
  handleSaveTabs: PropTypes.func,
  selectedTab: PropTypes.string,
  activeTab: PropTypes.string,
};

NaluTable.defaultProps = {
  plusButton: null,
  totalItems: 0,
  itemsPerPage: 10,
  loading: false,
  checkbox: false,
  size: "medium",
};

export default function NaluTable({
  tableData,
  header,
  plusButton,
  totalItems,
  itemsPerPage,
  addItemFunction,
  viewItemFunction,
  handlePageChange,
  modalTitle,
  handleTabChange,
  loading,
  checkbox,
  handleSelectionChange,
  size,
  removeItemFunction,
  editItemFunction,
  currentPageProp,
  handleSaveTabs,
  selectedTab,
  activeTab,
  variant = "carmesin",
  themeMode = "light",
}) {
  const [tab, setTab] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (tableData?.tabs && tableData?.tabs.length > 0) {
      setTab(true);
    } else {
      setTab(false);
    }
  }, [tableData?.tabs]);

  console.log("tableData", tableData);

  return (
    <>
      <div className="relative flex h-full w-full flex-col">
        {tableData?.tabs && tableData?.tabs?.length > 0 ? (
          <>
            <div
              className="flex w-full items-end justify-between
          "
            >
              <PresetTabs
                TabsInfo={tableData.tabs}
                plusButtonClick={handleOpen}
                onTabSelect={handleTabChange}
                loading={loading}
                activeTab={activeTab}
                variant={variant}
                themeMode={themeMode}
              />
              {handlePageChange && (
                <div
                  style={{ marginBottom: "10px" }}
                  className="hidden xl:block"
                >
                  <Pagination
                    itemsTotalCount={totalItems}
                    onPageChange={handlePageChange}
                    itemsPerPage={itemsPerPage}
                    loading={loading}
                    currentPageProp={currentPageProp}
                    variant={variant}
                    themeMode={themeMode}
                  />
                </div>
              )}
            </div>

            <Table
              data={tableData}
              hasTabs={tab}
              addItemFunction={addItemFunction}
              header={header}
              plusButton={plusButton}
              viewItemFunction={viewItemFunction}
              loading={loading}
              checkbox={checkbox}
              onSelectionChange={handleSelectionChange}
              size={size}
              removeItemFunction={removeItemFunction}
              editItemFunction={editItemFunction}
              handlePageChange={handlePageChange}
            />
            {handlePageChange && (
              <div style={{ marginTop: "24px" }}>
                {loading ? (
                  <Pagination
                    itemsTotalCount={totalItems}
                    onPageChange={handlePageChange}
                    itemsPerPage={itemsPerPage}
                    loading={loading}
                    currentPageProp={currentPageProp}
                    variant={variant}
                    themeMode={themeMode}
                  />
                ) : (
                  <Pagination
                    itemsTotalCount={totalItems}
                    onPageChange={handlePageChange}
                    itemsPerPage={itemsPerPage}
                    loading={loading}
                    currentPageProp={currentPageProp}
                    variant={variant}
                    themeMode={themeMode}
                  />
                )}
              </div>
            )}
          </>
        ) : (
          <>
            {header ? (
              <div className="relative flex h-auto flex-col">
                <div
                  style={{
                    position: "absolute",
                    bottom: "100%",
                    right: 0,
                    paddingBottom: "8px",
                  }}
                >
                  {handlePageChange && (
                    <>
                      {" "}
                      {loading ? (
                        <Pagination
                          itemsTotalCount={totalItems}
                          onPageChange={handlePageChange}
                          itemsPerPage={itemsPerPage}
                          loading={loading}
                          currentPageProp={currentPageProp}
                          variant={variant}
                          themeMode={themeMode}
                        />
                      ) : (
                        <Pagination
                          itemsTotalCount={totalItems}
                          onPageChange={handlePageChange}
                          itemsPerPage={itemsPerPage}
                          loading={loading}
                          currentPageProp={currentPageProp}
                          variant={variant}
                          themeMode={themeMode}
                        />
                      )}
                    </>
                  )}
                </div>
                <Table
                  data={tableData}
                  hasTabs={tab}
                  addItemFunction={addItemFunction}
                  header={header}
                  plusButton={plusButton}
                  viewItemFunction={viewItemFunction}
                  loading={loading}
                  checkbox={checkbox}
                  onSelectionChange={handleSelectionChange}
                  size={size}
                  removeItemFunction={removeItemFunction}
                  editItemFunction={editItemFunction}
                  handlePageChange={handlePageChange}
                />
                <div style={{ marginTop: "24px" }}>
                  {handlePageChange && (
                    <>
                      {" "}
                      {loading ? (
                        <Pagination
                          itemsTotalCount={totalItems}
                          onPageChange={handlePageChange}
                          itemsPerPage={itemsPerPage}
                          loading={loading}
                          currentPageProp={currentPageProp}
                          variant={variant}
                          themeMode={themeMode}
                        />
                      ) : (
                        <Pagination
                          itemsTotalCount={totalItems}
                          onPageChange={handlePageChange}
                          itemsPerPage={itemsPerPage}
                          loading={loading}
                          currentPageProp={currentPageProp}
                          variant={variant}
                          themeMode={themeMode}
                        />
                      )}
                    </>
                  )}
                </div>
              </div>
            ) : (
              <div className="relative flex h-auto flex-col">
                <Table
                  data={tableData}
                  hasTabs={tab}
                  addItemFunction={addItemFunction}
                  header={header}
                  plusButton={plusButton}
                  viewItemFunction={viewItemFunction}
                  loading={loading}
                  checkbox={checkbox}
                  onSelectionChange={handleSelectionChange}
                  size={size}
                  removeItemFunction={removeItemFunction}
                  editItemFunction={editItemFunction}
                  handlePageChange={handlePageChange}
                />
                <div style={{ marginTop: "24px", marginBottom: "8px" }}>
                  {handlePageChange && (
                    <>
                      {" "}
                      {loading ? (
                        <Pagination
                          itemsTotalCount={totalItems}
                          onPageChange={handlePageChange}
                          itemsPerPage={itemsPerPage}
                          loading={loading}
                          currentPageProp={currentPageProp}
                          variant={variant}
                          themeMode={themeMode}
                        />
                      ) : (
                        <Pagination
                          itemsTotalCount={totalItems}
                          onPageChange={handlePageChange}
                          itemsPerPage={itemsPerPage}
                          loading={loading}
                          currentPageProp={currentPageProp}
                          variant={variant}
                          themeMode={themeMode}
                        />
                      )}{" "}
                    </>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {tab && (
        <ModalTabs
          text={modalTitle}
          open={open}
          onClose={handleClose}
          items={tableData.tabs}
          onSave={handleSaveTabs}
        />
      )}
    </>
  );
}
