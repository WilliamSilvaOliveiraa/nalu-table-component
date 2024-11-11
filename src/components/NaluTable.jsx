import { useEffect, useState } from "react";
import Table from "./Table/Table";
import PresetTabs from "./PresetTabs/PresetTabs";
import PropTypes from "prop-types";
import ModalTabs from "./Modal/ModalTabs";
import Pagination from "./Pagination/Pagination";
import "./Dots/style.css";

NaluTable.propTypes = {
  tableData: PropTypes.array.isRequired,
  header: PropTypes.bool,
  plusButton: PropTypes.func,
  totalItems: PropTypes.number,
  itemsPerPage: PropTypes.number,
  addItemFunction: PropTypes.func,
  viewItemFunction: PropTypes.func,
  handlePageChange: PropTypes.func,
  modalTitle: PropTypes.string,
  handleTabChange: PropTypes.func,
  loading: PropTypes.bool,
  handleSelectionChange: PropTypes.func,
  size: PropTypes.string,
  removeItemFunction: PropTypes.func,
  editItemFunction: PropTypes.func,
  currentPageProp: PropTypes.number,
  handleSaveTabs: PropTypes.func,
  brandLogo: PropTypes.string,
  variant: PropTypes.string,
  theme: PropTypes.string,
  language: PropTypes.string,
  selectedTab: PropTypes.string,
  activeTab: PropTypes.string,
};

NaluTable.defaultProps = {
  tableData: [],
  header: true,
  plusButton: () => {
    console.log("Plus Button Click Event");
  },
  totalItems: 0,
  itemsPerPage: 10,
  addItemFunction: () => {},
  viewItemFunction: () => {},
  handlePageChange: () => {},
  modalTitle: "",
  handleTabChange: () => {},
  loading: false,
  handleSelectionChange: null,
  size: "default",
  removeItemFunction: () => {},
  editItemFunction: () => {},
  currentPageProp: 1,
  handleSaveTabs: () => {},
  variant: "sapphire",
  theme: "light",
  language: "en",
  selectedTab: "",
  activeTab: "",
  brandLogo: "https://placehold.co/400",
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
  handleSelectionChange,
  size,
  removeItemFunction,
  editItemFunction,
  currentPageProp,
  brandLogo,
  handleSaveTabs,
  selectedTab,
  activeTab,
  variant,
  language,
  theme,
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
                selectedTab={selectedTab}
                activeTab={activeTab}
                variant={variant}
                themeMode={theme}
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
                    themeMode={theme}
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
              onSelectionChange={handleSelectionChange}
              size={size}
              removeItemFunction={removeItemFunction}
              editItemFunction={editItemFunction}
              handlePageChange={handlePageChange}
              variant={variant}
              brandLogo={brandLogo}
              themeMode={theme}
              languageProp={language}
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
                    themeMode={theme}
                  />
                ) : (
                  <Pagination
                    itemsTotalCount={totalItems}
                    onPageChange={handlePageChange}
                    itemsPerPage={itemsPerPage}
                    loading={loading}
                    currentPageProp={currentPageProp}
                    variant={variant}
                    themeMode={theme}
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
                          themeMode={theme}
                        />
                      ) : (
                        <Pagination
                          itemsTotalCount={totalItems}
                          onPageChange={handlePageChange}
                          itemsPerPage={itemsPerPage}
                          loading={loading}
                          currentPageProp={currentPageProp}
                          variant={variant}
                          themeMode={theme}
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
                  onSelectionChange={handleSelectionChange}
                  size={size}
                  removeItemFunction={removeItemFunction}
                  editItemFunction={editItemFunction}
                  handlePageChange={handlePageChange}
                  brandLogo={brandLogo}
                  variant={variant}
                  themeMode={theme}
                  languageProp={language}
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
                          themeMode={theme}
                        />
                      ) : (
                        <Pagination
                          itemsTotalCount={totalItems}
                          onPageChange={handlePageChange}
                          itemsPerPage={itemsPerPage}
                          loading={loading}
                          currentPageProp={currentPageProp}
                          variant={variant}
                          themeMode={theme}
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
                  onSelectionChange={handleSelectionChange}
                  size={size}
                  removeItemFunction={removeItemFunction}
                  editItemFunction={editItemFunction}
                  brandLogo={brandLogo}
                  handlePageChange={handlePageChange}
                  variant={variant}
                  themeMode={theme}
                  languageProp={language}
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
                          themeMode={theme}
                        />
                      ) : (
                        <Pagination
                          itemsTotalCount={totalItems}
                          onPageChange={handlePageChange}
                          itemsPerPage={itemsPerPage}
                          loading={loading}
                          currentPageProp={currentPageProp}
                          variant={variant}
                          themeMode={theme}
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
          variant={variant}
          themeMode={theme}
          languageProp={language}
        />
      )}
    </>
  );
}
