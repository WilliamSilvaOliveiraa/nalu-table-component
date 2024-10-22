import React, { useEffect, useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import Dots from "../Dots/Dots";
import { Checkbox, Skeleton } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import styled from "styled-components";
import not_found from "../../assets/not_found.svg";
import colorThemes from "../../constants/colorThemes";

export default function Table({
  data,
  addItemFunction,
  viewItemFunction,
  hasTabs,
  header,
  plusButton,
  loading = true,
  onSelectionChange,
  size,
  removeItemFunction,
  editItemFunction,
  handlePageChange,
  variant,
  themeMode,
}) {
  const [inputValue, setInputValue] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState({});
  const [expandedItems, setExpandedItems] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);

  const {
    primary,
    primaryFocusStrong,
    primaryLoading,
    viewButton,
    borderChecked,
    borderUnchecked,
    viewButtonIcon,
    addButtonIcon,
    addButton,
  } = colorThemes[variant];

  const hasVariations = data?.tableInfo?.items?.some((item) => {
    return Array.isArray(item.variations) && item.variations.length > 0;
  });

  const [selectedCheckbox, setSelectedCheckbox] = useState(new Set());
  const [isAllSelected, setIsAllSelected] = useState(false);

  function handleHeaderClick(column) {
    if (column.ordering) {
      const newDirection =
        sortDirection[column.header] === "asc" ? "desc" : "asc";
      setSortColumn(column.header);
      setSortDirection({ [column.header]: newDirection });
      setExpandedItems({});
    }
  }

  function isDate(value) {
    return /^\d{2}\/\d{2}\/\d{4}$/.test(value);
  }

  function parseDate(value) {
    const [day, month, year] = value.split("/").map(Number);
    return new Date(year, month - 1, day);
  }

  function handleItemClick(item) {
    setSelectedItem(item);
    setInputValue("");
  }

  const sortedItems = [...(data?.tableInfo?.items ?? [])].sort((a, b) => {
    if (!sortColumn) return 0;

    const aValue =
      a[data?.tableInfo?.columns.find((col) => col.header === sortColumn).ref];
    const bValue =
      b[data?.tableInfo?.columns.find((col) => col.header === sortColumn).ref];

    if (isDate(aValue) && isDate(bValue)) {
      // Ordenação por datas
      const aDate = parseDate(aValue);
      const bDate = parseDate(bValue);
      return sortDirection[sortColumn] === "asc"
        ? aDate - bDate
        : bDate - aDate;
    } else {
      // Ordenação por texto
      if (aValue < bValue) return sortDirection[sortColumn] === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection[sortColumn] === "asc" ? 1 : -1;
      return 0;
    }
  });

  function toggleItemExpansion(index) {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  }

  function toggleItemExpansionUnique(itemId) {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  }

  useEffect(() => {
    if (inputValue === "") {
      setSelectedItem(null);
    }
  }, [inputValue]);

  const SmallCheckbox = styled(Checkbox)({
    "& .MuiSvgIcon-root": {
      fontSize: 20,
    },
    padding: 4,
  });

  useEffect(() => {
    if (onSelectionChange) {
      onSelectionChange(Array.from(selectedCheckbox));
    }
  }, [selectedCheckbox]);

  function handleParentCheckboxChange(event) {
    const isChecked = event.target.checked;
    setIsAllSelected(isChecked);

    if (isChecked) {
      const allItemIds = data?.tableInfo?.items.map((item) => item.id);
      setSelectedCheckbox(new Set(allItemIds));
    } else {
      setSelectedCheckbox(new Set());
    }
  }

  useEffect(() => {
    if (selectedItem !== null) {
      setSelectedItem(null);
      setInputValue("");
    }
  }, [handlePageChange]);

  function handleCheckboxChange(itemId) {
    setSelectedCheckbox((prevSelectedItems) => {
      const newSelectedItems = new Set(prevSelectedItems);
      if (newSelectedItems.has(itemId)) {
        newSelectedItems.delete(itemId);
      } else {
        newSelectedItems.add(itemId);
      }

      const allItemIds = new Set(
        data?.tableInfo?.items?.map((item) => item.id)
      );
      setIsAllSelected(newSelectedItems.size === allItemIds.size);

      return newSelectedItems;
    });
  }
  useEffect(() => {
    if (inputValue === "") {
      setSelectedItem(null);
    }
  }, [inputValue]);

  const TextWrapper = styled.div`
    position: relative;
    display: inline-block;
    cursor: auto;
  `;

  function truncateText(text, maxLength) {
    const isTruncated = text?.length > maxLength;
    const displayText = isTruncated ? text.slice(0, maxLength) + "..." : text;

    return (
      <TextWrapper>
        {displayText}
        {/* {isTruncated && <Tooltip>{text}</Tooltip>} */}
      </TextWrapper>
    );
  }

  const LogoMarca = "https://placehold.co/600x400";

  return (
    <div
      className={`relative flex flex-col border-neutral-200 bg-white  ${
        hasTabs
          ? loading
            ? "h-full rounded-e-2xl rounded-bl-2xl rounded-tl-none border-[1px] lg:rounded-e-2xl lg:rounded-bl-2xl lg:rounded-tl-none lg:border-b-[1px] lg:border-l-[1px] lg:border-r-[1px] lg:border-t-[0px]" // Caso hasTabs seja true e loading true
            : "mt-3 h-full rounded-2xl border-[1px] lg:mt-0 lg:rounded-e-2xl lg:rounded-bl-2xl lg:rounded-tl-none lg:border-b-[1px] lg:border-l-[1px] lg:border-r-[1px] lg:border-t-[0px]" // Caso hasTabs true e loading false
          : !header && !loading && size === "small" // Nova condição adicional
          ? "h-[400px] overflow-hidden rounded-xl border-[1px] border-neutral-200" // Condição visual para não ter header, não estar carregando e ser "small"
          : size === "small" && loading && !header && !hasTabs // Nova condição adicional para size small, loading true, e sem header e tabs
          ? "h-[400px] rounded-xl border-[px] border-neutral-200" // Condição visual para size small, loading true, sem header e sem tabs
          : "h-full overflow-hidden rounded-2xl border-[1px] border-neutral-200" // Caso hasTabs seja false
      }`}
    >
      {/* Header com o campo de busca e o botão de adicionar */}

      {header && (
        <div className="flex w-full justify-between px-6 py-5">
          <div className="relative w-full lg:w-1/2">
            {data && (
              <SearchInput
                displayedOptions={data?.tableInfo?.items}
                inputValue={inputValue}
                setInputValue={setInputValue}
                onItemClick={handleItemClick}
                showImage={true}
                variant="small"
                loading={loading}
              />
            )}
          </div>
          {plusButton && (
            <button
              onClick={(e) => {
                if (!loading && plusButton) {
                  plusButton(e);
                }
              }}
              className="scale-1 group relative hidden h-fit items-center justify-center gap-1 rounded-full px-4 py-2 text-white transition-all lg:flex"
              style={{
                backgroundColor: loading
                  ? primaryLoading[themeMode]
                  : primary[themeMode],
                cursor: loading ? "not-allowed" : "pointer",
              }}
              onMouseOver={(e) =>
                !loading &&
                (e.currentTarget.style.backgroundColor =
                  primaryFocusStrong[themeMode])
              }
              onMouseOut={(e) =>
                !loading &&
                (e.currentTarget.style.backgroundColor = primary[themeMode])
              }
              disabled={loading}
            >
              <span
                className={` ${
                  loading
                    ? "group-hover:opacity-1 group-hover:rotate-0"
                    : "group-hover:rotate-45 group-hover:opacity-0"
                } relative flex rotate-0 items-center justify-center opacity-100 transition-all duration-300`}
              >
                <AddRoundedIcon sx={{ fontSize: 16 }} />
              </span>
              <span
                className={` ${
                  loading
                    ? "group-hover:rotate-0 group-hover:opacity-0"
                    : "group-hover:rotate-90 group-hover:opacity-100"
                } absolute left-[23%] top-1/2 z-10 flex translate-x-[-50%] translate-y-[-50%] rotate-0 items-center justify-center opacity-0 transition-all duration-300`}
              >
                <AddCircleRoundedIcon sx={{ fontSize: 16 }} />
              </span>
              <p className="text-[12px] font-medium">Adicionar</p>
            </button>
          )}
        </div>
      )}

      {/* Cabeçalhos da tabela */}
      <div className="relative overflow-x-auto">
        <div
          className={size === "small" ? "relative" : "relative min-w-[1240px]"}
        >
          {!loading && (
            <div
              className={`lg-rounded-none sticky top-0 z-[4] flex h-auto w-full bg-[#F8F6F5] ${
                size === "small" ? "px-4 py-2" : "px-10 py-3"
              } ${loading ? "pointer-events-none opacity-0" : ""} `}
            >
              {data?.tableInfo?.items?.length > 0 ? (
                <>
                  {onSelectionChange && (
                    // CheckboxPai
                    <div className="mr-4 h-1/2">
                      <SmallCheckbox
                        checked={isAllSelected}
                        onChange={handleParentCheckboxChange}
                        sx={{
                          "&.Mui-checked": {
                            color: borderChecked[themeMode],
                          },
                          "&:not(.Mui-checked)": {
                            color: "#CCCCCC",
                          },
                        }}
                      />
                    </div>
                  )}
                </>
              ) : (
                <>
                  {onSelectionChange && (
                    // CheckboxPai
                    <div className="pointer-events-none mr-4 h-1/2 opacity-0">
                      <SmallCheckbox
                        checked={isAllSelected}
                        onChange={handleParentCheckboxChange}
                        sx={{
                          "&.Mui-checked": {
                            color: borderChecked[themeMode],
                          },
                          "&:not(.Mui-checked)": {
                            color: "#CCCCCC",
                          },
                        }}
                      />
                    </div>
                  )}
                </>
              )}

              {data?.tableInfo?.columns?.map((column, index) => (
                <div
                  key={index}
                  className={`group flex py-2 text-[12px] font-semibold text-[#929090] transition-all duration-300 ${
                    column.alignment === "left"
                      ? "justify-start"
                      : column.alignment === "center"
                      ? "justify-center"
                      : "justify-end"
                  } ${
                    column.header.toLowerCase() === "imagem"
                      ? "w-[100px]"
                      : "flex-1"
                  } ${
                    column.ordering ? "cursor-pointer hover:text-[#6f6c6f]" : ""
                  }`}
                  onClick={() => handleHeaderClick(column)}
                >
                  <p>{column.header}</p>
                  {column.ordering && (
                    <ArrowDropDownRoundedIcon
                      sx={{
                        fontSize: 18,
                        color: "#929090",
                        transition: "all 0.3s ease",
                      }}
                      className={`transform ${
                        sortDirection[column.header] === "asc"
                          ? ""
                          : "rotate-180"
                      } group-hover:text-[#6f6c6f]`}
                    />
                  )}
                </div>
              ))}
              {(viewItemFunction ||
                addItemFunction ||
                hasVariations ||
                editItemFunction ||
                removeItemFunction) && (
                <>
                  <p
                    className={` ${
                      loading ? `opacity-100` : `opacity-0`
                    } flex flex-1 items-center justify-center py-2 text-[12px] font-semibold text-[#929090]`}
                  >
                    Ação
                  </p>
                </>
              )}

              {/* {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
                <p className="text-lg font-semibold text-gray-500">
                  Carregando...
                </p>
              </div>
            )} */}
            </div>
          )}

          {/* Conteúdo da tabela */}
          {loading ? (
            <div className="flex h-full w-full flex-col gap-4 bg-white pb-5 pl-5 pr-5 pt-0 opacity-50 lg:rounded-b-2xl">
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton
                  key={index}
                  variant="rounded"
                  sx={{ borderRadius: "16px" }}
                  width="100%"
                  height="68px"
                />
              ))}
            </div>
          ) : (
            <>
              {data?.tableInfo?.items?.length > 0 ? (
                <>
                  {selectedItem ? (
                    <div className="flex flex-col">
                      {/* Renderiza apenas o item selecionado */}

                      <div className="flex border-b-[0px] border-[#E5E2E1] px-10 items-center">
                        {onSelectionChange && (
                          <div className="z-[2] mr-4 h-1/2">
                            <SmallCheckbox
                              onChange={() =>
                                handleCheckboxChange(selectedItem.id)
                              }
                              checked={selectedCheckbox.has(selectedItem.id)}
                              sx={{
                                "&.Mui-checked": {
                                  color: borderChecked[themeMode],
                                },
                                "&:not(.Mui-checked)": {
                                  color: "#CCCCCC",
                                },
                              }}
                            />
                          </div>
                        )}
                        {data.tableInfo.columns.map((column, idx) => (
                          <div
                            key={idx}
                            className={`${
                              column.header.toLowerCase() === "imagem"
                                ? "w-[100px]"
                                : "flex-1"
                            } flex items-center py-5 ${
                              column.alignment === "left"
                                ? "justify-start"
                                : column.alignment === "center"
                                ? "justify-center"
                                : "justify-end"
                            }`}
                          >
                            {column.ref === "image" ? (
                              <div className="flex h-auto w-full items-center justify-start">
                                <img
                                  className="h-2/6 w-2/6 object-contain"
                                  src={
                                    selectedItem[column.ref] ||
                                    "https://placehold.co/600x400"
                                  }
                                  alt=""
                                />
                              </div>
                            ) : (
                              <p className="z-[3] text-[12px] font-medium text-[#787776]">
                                {truncateText(selectedItem[column.ref], 18)}
                              </p>
                            )}
                          </div>
                        ))}
                        {(hasVariations ||
                          viewItemFunction ||
                          addItemFunction ||
                          removeItemFunction ||
                          editItemFunction) && (
                          <div className="flex flex-1 items-center justify-center gap-1 py-4">
                            {viewItemFunction && (
                              <div
                                key={selectedItem.id}
                                style={{
                                  backgroundColor: viewButton[themeMode],
                                }}
                                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg transition-all duration-300 ease-in-out "
                                onClick={() =>
                                  viewItemFunction(selectedItem.id)
                                }
                              >
                                <RemoveRedEyeIcon
                                  sx={{
                                    fontSize: 16,
                                    color: viewButtonIcon[themeMode],
                                  }}
                                />
                              </div>
                            )}
                            {addItemFunction && (
                              <div
                                key={selectedItem.id}
                                style={{
                                  backgroundColor: addButton[themeMode],
                                }}
                                className="group hidden h-7 w-7 cursor-pointer items-center justify-center rounded-lg  transition-all duration-300 ease-in-out lg:flex"
                                onClick={() => addItemFunction(selectedItem.id)}
                              >
                                <span className="flex  items-center justify-center transition-all duration-300 ease-in-out ">
                                  <AddRoundedIcon
                                    sx={{
                                      fontSize: 16,
                                      color: addButtonIcon[themeMode],
                                    }}
                                  />
                                </span>
                              </div>
                            )}

                            {editItemFunction && (
                              <div
                                className="group hidden h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-[#EBEBEB] transition-all duration-300 ease-in-out hover:bg-[#DDDCDC] lg:flex"
                                onClick={() =>
                                  editItemFunction(selectedItem.id)
                                }
                              >
                                <ModeEditOutlineOutlinedIcon
                                  sx={{ fontSize: 16, color: "#3E3E3E" }}
                                />
                              </div>
                            )}
                            {removeItemFunction && (
                              <div
                                className="group flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-[#FFCCCC] transition-all duration-300 ease-in-out hover:bg-[#EEB2B2]"
                                onClick={() =>
                                  removeItemFunction(selectedItem.id)
                                }
                              >
                                <span className="flex items-center justify-center transition-all duration-300 ease-in-out">
                                  <DeleteOutlineOutlinedIcon
                                    sx={{ fontSize: 16, color: "#AE4A4A" }}
                                  />
                                </span>
                              </div>
                            )}
                            {selectedItem.variations &&
                              selectedItem.variations.length > 0 && (
                                <div
                                  className="flex h-7 cursor-pointer items-center justify-between gap-2 rounded-lg bg-[#EBEBEB] px-3 transition-all duration-300 ease-in-out hover:bg-[#E5E2E1]"
                                  onClick={() =>
                                    toggleItemExpansionUnique(selectedItem.id)
                                  }
                                >
                                  <p className="text-[12px] font-semibold text-[#68646A]">
                                    {selectedItem.variations.length}
                                  </p>
                                  <KeyboardArrowDownRoundedIcon
                                    sx={{
                                      fontSize: 16,
                                      color: "#68646A",
                                      transform: expandedItems[selectedItem.id]
                                        ? "rotate(180deg)"
                                        : "rotate(0)",
                                      transition: "transform 0.3s ease",
                                    }}
                                  />
                                </div>
                              )}
                          </div>
                        )}
                      </div>
                      {/* Conteúdo expandido */}
                      {selectedItem.variations &&
                        selectedItem.variations.length > 0 && (
                          <>
                            {(() => {
                              const maxHeight =
                                selectedItem.variations.length * 70;

                              return (
                                <div
                                  className={`overflow-hidden rounded-b-xl transition-all duration-300 ease-in-out ${
                                    expandedItems[selectedItem.id]
                                      ? "opacity-100"
                                      : "opacity-0"
                                  }`}
                                  style={
                                    expandedItems[selectedItem.id]
                                      ? { maxHeight: `${maxHeight}px` }
                                      : { maxHeight: "0px" }
                                  }
                                >
                                  <div className="bg-[#FBFAF9]">
                                    {selectedItem.variations.map(
                                      (variation, vIndex) => (
                                        <div
                                          key={vIndex}
                                          className={`flex px-10 ${
                                            vIndex <
                                            selectedItem.variations.length - 1
                                              ? "border-b-[1px] border-[#E5E2E1] "
                                              : ""
                                          } ${
                                            vIndex === 0
                                              ? "border-t-[1px] border-[#E5E2E1]"
                                              : ""
                                          }`}
                                        >
                                          {onSelectionChange && (
                                            <div className="mr-4 select-none opacity-0">
                                              <SmallCheckbox
                                                sx={{ cursor: "default" }}
                                              ></SmallCheckbox>
                                            </div>
                                          )}

                                          {data.tableInfo.columns.map(
                                            (column, idx) => (
                                              <div
                                                key={idx}
                                                className={`${
                                                  column.header.toLowerCase() ===
                                                  "imagem"
                                                    ? "w-[100px]"
                                                    : "flex-1"
                                                } flex items-center ${
                                                  column.alignment === "left"
                                                    ? "justify-start"
                                                    : column.alignment ===
                                                      "center"
                                                    ? "justify-center"
                                                    : "justify-end"
                                                }`}
                                              >
                                                {column.ref === "image" ? (
                                                  <div className="flex h-auto w-full items-center justify-start">
                                                    <img
                                                      className="h-[25%] w-[25%] object-contain"
                                                      src={
                                                        variation[column.ref] ||
                                                        LogoMarca
                                                      }
                                                      alt=""
                                                    />
                                                  </div>
                                                ) : (
                                                  <p className="z-[3] text-[12px] font-medium text-[#787776]">
                                                    {truncateText(
                                                      variation[column.ref],
                                                      18
                                                    )}
                                                  </p>
                                                )}
                                              </div>
                                            )
                                          )}
                                          {(hasVariations ||
                                            viewItemFunction ||
                                            addItemFunction ||
                                            removeItemFunction ||
                                            editItemFunction) && (
                                            <div className="flex flex-1 items-center justify-center gap-1 py-5">
                                              {viewItemFunction && (
                                                <div
                                                  key={selectedItem.id}
                                                  style={{
                                                    backgroundColor:
                                                      viewButton[themeMode],
                                                  }}
                                                  className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg transition-all duration-300 ease-in-out "
                                                  onClick={() =>
                                                    viewItemFunction(
                                                      selectedItem.id
                                                    )
                                                  }
                                                >
                                                  <RemoveRedEyeIcon
                                                    sx={{
                                                      fontSize: 16,
                                                      color:
                                                        viewButtonIcon[
                                                          themeMode
                                                        ],
                                                    }}
                                                  />
                                                </div>
                                              )}
                                              {addItemFunction && (
                                                <div
                                                  key={variation.id}
                                                  style={{
                                                    backgroundColor:
                                                      addButton[themeMode],
                                                  }}
                                                  className="group hidden h-7 w-7 cursor-pointer items-center justify-center rounded-lg  transition-all duration-300 ease-in-out lg:flex"
                                                  onClick={() =>
                                                    addItemFunction(
                                                      variation.id
                                                    )
                                                  }
                                                >
                                                  <span className="flex  items-center justify-center transition-all duration-300 ease-in-out ">
                                                    <AddRoundedIcon
                                                      sx={{
                                                        fontSize: 16,
                                                        color:
                                                          addButtonIcon[
                                                            themeMode
                                                          ],
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                              )}

                                              {editItemFunction && (
                                                <div
                                                  className="group hidden h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-[#EBEBEB] transition-all duration-300 ease-in-out hover:bg-[#DDDCDC] lg:flex"
                                                  onClick={() =>
                                                    editItemFunction(
                                                      variation.id
                                                    )
                                                  }
                                                >
                                                  <ModeEditOutlineOutlinedIcon
                                                    sx={{
                                                      fontSize: 16,
                                                      color: "#3E3E3E",
                                                    }}
                                                  />
                                                </div>
                                              )}
                                              {removeItemFunction && (
                                                <div
                                                  className="group hidden h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-[#FFCCCC] transition-all duration-300 ease-in-out hover:bg-[#EEB2B2] lg:flex"
                                                  onClick={() =>
                                                    removeItemFunction(
                                                      variation.id
                                                    )
                                                  }
                                                >
                                                  <span className="flex items-center justify-center transition-all duration-300 ease-in-out">
                                                    <DeleteOutlineOutlinedIcon
                                                      sx={{
                                                        fontSize: 16,
                                                        color: "#AE4A4A",
                                                      }}
                                                    />
                                                  </span>
                                                </div>
                                              )}
                                            </div>
                                          )}
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                              );
                            })()}
                          </>
                        )}
                    </div>
                  ) : loading ? (
                    <div className="flex h-full w-full flex-col gap-4 bg-white pb-5 pl-5 pr-5 pt-0 opacity-50 lg:rounded-b-2xl">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Skeleton
                          key={index}
                          variant="rounded"
                          sx={{ borderRadius: "16px" }}
                          width="100%"
                          height="68px"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="z-[3] flex h-full flex-col overflow-auto">
                      {sortedItems.map((item, index) => (
                        <div key={index} className="z-[3] flex flex-col">
                          {size === "small" ? (
                            <div
                              className={`z-[3] flex items-center px-4 ${
                                index !== sortedItems.length - 1
                                  ? "border-b-[1px] border-[#E5E2E1]"
                                  : ""
                              }`}
                            >
                              {onSelectionChange && (
                                <div className="mr-4 h-1/2">
                                  <SmallCheckbox
                                    onChange={() =>
                                      handleCheckboxChange(item.id)
                                    }
                                    checked={selectedCheckbox.has(item.id)}
                                    sx={{
                                      "&.Mui-checked": {
                                        color: "#B571EB",
                                      },
                                      "&:not(.Mui-checked)": {
                                        color: "#CCCCCC",
                                      },
                                    }}
                                  />
                                </div>
                              )}
                              {data.tableInfo.columns.map((column, idx) => (
                                <div
                                  key={idx}
                                  className={`${
                                    column.header.toLowerCase() === "imagem"
                                      ? "w-[100px]"
                                      : "flex-1"
                                  } flex items-center py-4 ${
                                    column.alignment === "left"
                                      ? "justify-start"
                                      : column.alignment === "center"
                                      ? "justify-center"
                                      : "justify-end"
                                  }`}
                                >
                                  {column.ref === "image" ? (
                                    <div className="flex h-[24%] w-[24%] items-center justify-start">
                                      <img
                                        className="h-auto w-full object-contain"
                                        src={item[column.ref] || LogoMarca}
                                        alt=""
                                      />
                                    </div>
                                  ) : (
                                    <p className="z-[3] text-[12px] font-medium text-[#787776]">
                                      {truncateText(item[column.ref], 18)}
                                    </p>
                                  )}
                                </div>
                              ))}
                              {(hasVariations ||
                                viewItemFunction ||
                                addItemFunction ||
                                removeItemFunction ||
                                editItemFunction) && (
                                <div className="flex flex-1 items-center justify-center gap-1 py-4">
                                  {viewItemFunction && (
                                    <div
                                      key={item.id}
                                      style={{
                                        backgroundColor: viewButton[themeMode],
                                      }}
                                      className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg transition-all duration-300 ease-in-out "
                                      onClick={() => viewItemFunction(item.id)}
                                    >
                                      <RemoveRedEyeIcon
                                        sx={{
                                          fontSize: 16,
                                          color: viewButtonIcon[themeMode],
                                        }}
                                      />
                                    </div>
                                  )}
                                  {addItemFunction && (
                                    <div
                                      style={{
                                        backgroundColor: addButton[themeMode],
                                      }}
                                      className="group hidden h-7 w-7 cursor-pointer items-center justify-center rounded-lg  transition-all duration-300 ease-in-out lg:flex"
                                      onClick={() => addItemFunction(item.id)}
                                    >
                                      <span className="flex  items-center justify-center transition-all duration-300 ease-in-out ">
                                        <AddRoundedIcon
                                          sx={{
                                            fontSize: 16,
                                            color: addButtonIcon[themeMode],
                                          }}
                                        />
                                      </span>
                                    </div>
                                  )}

                                  {editItemFunction && (
                                    <div
                                      className="group hidden h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-[#EBEBEB] transition-all duration-300 ease-in-out hover:bg-[#DDDCDC] lg:flex"
                                      onClick={() => editItemFunction(item.id)}
                                    >
                                      <ModeEditOutlineOutlinedIcon
                                        sx={{ fontSize: 16, color: "#3E3E3E" }}
                                      />
                                    </div>
                                  )}
                                  {removeItemFunction && (
                                    <div
                                      className="group flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-[#FFCCCC] transition-all duration-300 ease-in-out hover:bg-[#EEB2B2]"
                                      onClick={() =>
                                        removeItemFunction(item.id)
                                      }
                                    >
                                      <span className="flex items-center justify-center transition-all duration-300 ease-in-out">
                                        <DeleteOutlineOutlinedIcon
                                          sx={{
                                            fontSize: 16,
                                            color: "#AE4A4A",
                                          }}
                                        />
                                      </span>
                                    </div>
                                  )}
                                  {item.variations &&
                                    item.variations.length > 0 && (
                                      <div
                                        className="flex h-7 cursor-pointer items-center justify-between gap-2 rounded-lg bg-[#EBEBEB] px-3 transition-all duration-300 ease-in-out hover:bg-[#E5E2E1]"
                                        onClick={() =>
                                          toggleItemExpansion(index)
                                        }
                                      >
                                        <p className="text-[12px] font-semibold text-[#68646A]">
                                          {item.variations.length}
                                        </p>
                                        <KeyboardArrowDownRoundedIcon
                                          sx={{
                                            fontSize: 16,
                                            color: "#68646A",
                                            transform: expandedItems[index]
                                              ? "rotate(180deg)"
                                              : "rotate(0)",
                                            transition: "transform 0.3s ease",
                                          }}
                                        />
                                      </div>
                                    )}
                                </div>
                              )}
                            </div>
                          ) : (
                            <div
                              className={`z-[3] flex items-center px-10 ${
                                index !== sortedItems.length - 1
                                  ? "border-b-[1px] border-[#E5E2E1]"
                                  : ""
                              }`}
                            >
                              {onSelectionChange && (
                                <div className="z-[2] mr-4 h-1/2">
                                  <SmallCheckbox
                                    onChange={() =>
                                      handleCheckboxChange(item.id)
                                    }
                                    checked={selectedCheckbox.has(item.id)}
                                    sx={{
                                      "&.Mui-checked": {
                                        color: borderChecked[themeMode],
                                      },
                                      "&:not(.Mui-checked)": {
                                        color: "#CCCCCC",
                                      },
                                    }}
                                  />
                                </div>
                              )}
                              {data.tableInfo.columns.map((column, idx) => (
                                <div
                                  key={idx}
                                  className={`${
                                    column.header.toLowerCase() === "imagem"
                                      ? "w-[100px]"
                                      : "flex-1"
                                  } flex h-full items-center py-5 ${
                                    column.alignment === "left"
                                      ? "justify-start"
                                      : column.alignment === "center"
                                      ? "justify-center"
                                      : "justify-end"
                                  }`}
                                >
                                  {column.ref === "image" ? (
                                    <div className="flex h-8 w-8 items-center justify-start">
                                      <img
                                        className="h-auto w-full object-contain"
                                        src={item[column.ref] || LogoMarca}
                                        alt=""
                                      />
                                    </div>
                                  ) : (
                                    <p className="z-[3] text-[12px] font-medium text-[#787776]">
                                      {truncateText(item[column.ref], 18)}
                                    </p>
                                  )}
                                </div>
                              ))}
                              {(hasVariations ||
                                viewItemFunction ||
                                addItemFunction ||
                                removeItemFunction ||
                                editItemFunction) && (
                                <div className="flex flex-1 items-center justify-center gap-1 py-5">
                                  {viewItemFunction && (
                                    <div
                                      style={{
                                        backgroundColor: viewButton[themeMode],
                                      }}
                                      className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg transition-all duration-300 ease-in-out "
                                      onClick={() => viewItemFunction(item.id)}
                                    >
                                      <RemoveRedEyeIcon
                                        sx={{
                                          fontSize: 16,
                                          color: viewButtonIcon[themeMode],
                                        }}
                                      />
                                    </div>
                                  )}
                                  {addItemFunction && (
                                    <div
                                      style={{
                                        backgroundColor: addButton[themeMode],
                                      }}
                                      className="group hidden h-7 w-7 cursor-pointer items-center justify-center rounded-lg  transition-all duration-300 ease-in-out lg:flex"
                                      onClick={() => addItemFunction(item.id)}
                                    >
                                      <span className="flex  items-center justify-center transition-all duration-300 ease-in-out ">
                                        <AddRoundedIcon
                                          sx={{
                                            fontSize: 16,
                                            color: addButtonIcon[themeMode],
                                          }}
                                        />
                                      </span>
                                    </div>
                                  )}

                                  {editItemFunction && (
                                    <div
                                      className="group hidden h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-[#EBEBEB] transition-all duration-300 ease-in-out hover:bg-[#DDDCDC] lg:flex"
                                      onClick={() => editItemFunction(item.id)}
                                    >
                                      <ModeEditOutlineOutlinedIcon
                                        sx={{ fontSize: 16, color: "#3E3E3E" }}
                                      />
                                    </div>
                                  )}
                                  {removeItemFunction && (
                                    <div
                                      className="group flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-[#FFCCCC] transition-all duration-300 ease-in-out hover:bg-[#EEB2B2]"
                                      onClick={() =>
                                        removeItemFunction(item.id)
                                      }
                                    >
                                      <span className="flex items-center justify-center transition-all duration-300 ease-in-out">
                                        <DeleteOutlineOutlinedIcon
                                          sx={{
                                            fontSize: 16,
                                            color: "#AE4A4A",
                                          }}
                                        />
                                      </span>
                                    </div>
                                  )}
                                  {item.variations &&
                                    item.variations.length > 0 && (
                                      <div
                                        className="flex h-7 cursor-pointer items-center justify-between gap-2 rounded-lg bg-[#EBEBEB] px-3 transition-all duration-300 ease-in-out hover:bg-[#E5E2E1]"
                                        onClick={() =>
                                          toggleItemExpansion(index)
                                        }
                                        title="Variações"
                                      >
                                        <p className="text-[12px] font-semibold text-[#68646A]">
                                          {item.variations.length}
                                        </p>
                                        <KeyboardArrowDownRoundedIcon
                                          sx={{
                                            fontSize: 16,
                                            color: "#68646A",
                                            transform: expandedItems[index]
                                              ? "rotate(180deg)"
                                              : "rotate(0)",
                                            transition: "transform 0.3s ease",
                                          }}
                                        />
                                      </div>
                                    )}
                                </div>
                              )}
                            </div>
                          )}

                          {/* Conteúdo expandido */}
                          {item?.variations && item.variations.length > 0 && (
                            <>
                              {(() => {
                                const maxHeight = item.variations.length * 70;

                                return (
                                  <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                      expandedItems[index]
                                        ? "opacity-100"
                                        : "max-h-0 opacity-0"
                                    }`}
                                    style={
                                      expandedItems[index]
                                        ? { maxHeight: `${maxHeight}px` }
                                        : {}
                                    }
                                  >
                                    <div className="bg-[#FBFAF9]">
                                      {item.variations.map(
                                        (variation, vIndex) => (
                                          <div
                                            key={vIndex}
                                            className={`flex px-10 ${
                                              !(
                                                index ===
                                                  sortedItems.length - 1 &&
                                                vIndex ===
                                                  item.variations.length - 1
                                              )
                                                ? "border-b-[1px] border-[#E5E2E1]"
                                                : ""
                                            } ${
                                              index ===
                                                sortedItems.length - 1 &&
                                              vIndex === 0
                                                ? "border-t-[1px] border-[#E5E2E1]"
                                                : ""
                                            }`}
                                          >
                                            {onSelectionChange && (
                                              <div className="mr-4 select-none opacity-0">
                                                <SmallCheckbox
                                                  sx={{ cursor: "default" }}
                                                />
                                              </div>
                                            )}

                                            {data.tableInfo.columns.map(
                                              (column, idx) => (
                                                <div
                                                  key={idx}
                                                  className={`${
                                                    column.header.toLowerCase() ===
                                                    "imagem"
                                                      ? "w-[100px]"
                                                      : "flex-1"
                                                  } flex items-center ${
                                                    column.alignment === "left"
                                                      ? "justify-start"
                                                      : column.alignment ===
                                                        "center"
                                                      ? "justify-center"
                                                      : "justify-end"
                                                  }`}
                                                >
                                                  {column.ref === "image" ? (
                                                    <div className="flex h-auto w-full items-center justify-start">
                                                      <img
                                                        className="h-6 w-6 object-contain"
                                                        src={
                                                          variation[
                                                            column.ref
                                                          ] || LogoMarca
                                                        }
                                                        alt=""
                                                      />
                                                    </div>
                                                  ) : (
                                                    <p className="z-[3] text-[12px] font-medium text-[#787776]">
                                                      {truncateText(
                                                        variation[column.ref],
                                                        18
                                                      )}
                                                    </p>
                                                  )}
                                                </div>
                                              )
                                            )}
                                            {(hasVariations ||
                                              viewItemFunction ||
                                              addItemFunction ||
                                              removeItemFunction ||
                                              editItemFunction) && (
                                              <div className="flex flex-1 items-center justify-center gap-1 py-5">
                                                {viewItemFunction && (
                                                  <div
                                                    key={variation.id}
                                                    style={{
                                                      backgroundColor:
                                                        viewButton[themeMode],
                                                    }}
                                                    className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg transition-all duration-300 ease-in-out "
                                                    onClick={() =>
                                                      viewItemFunction(
                                                        variation.id
                                                      )
                                                    }
                                                  >
                                                    <RemoveRedEyeIcon
                                                      sx={{
                                                        fontSize: 16,
                                                        color:
                                                          viewButtonIcon[
                                                            themeMode
                                                          ],
                                                      }}
                                                    />
                                                  </div>
                                                )}
                                                {addItemFunction && (
                                                  <div
                                                    style={{
                                                      backgroundColor:
                                                        addButton[themeMode],
                                                    }}
                                                    className="group hidden h-7 w-7 cursor-pointer items-center justify-center rounded-lg  transition-all duration-300 ease-in-out lg:flex"
                                                    onClick={() =>
                                                      addItemFunction(
                                                        variation.id
                                                      )
                                                    }
                                                  >
                                                    <span className="flex  items-center justify-center transition-all duration-300 ease-in-out ">
                                                      <AddRoundedIcon
                                                        sx={{
                                                          fontSize: 16,
                                                          color:
                                                            addButtonIcon[
                                                              themeMode
                                                            ],
                                                        }}
                                                      />
                                                    </span>
                                                  </div>
                                                )}
                                                {editItemFunction && (
                                                  <div
                                                    className="group hidden h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-[#EBEBEB] transition-all duration-300 ease-in-out hover:bg-[#DDDCDC] lg:flex"
                                                    onClick={() =>
                                                      editItemFunction(
                                                        variation.id
                                                      )
                                                    }
                                                  >
                                                    <ModeEditOutlineOutlinedIcon
                                                      sx={{
                                                        fontSize: 16,
                                                        color: "#3E3E3E",
                                                      }}
                                                    />
                                                  </div>
                                                )}
                                                {removeItemFunction && (
                                                  <div
                                                    className="group hidden h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-[#FFCCCC] transition-all duration-300 ease-in-out hover:bg-[#EEB2B2] lg:flex"
                                                    onClick={() =>
                                                      removeItemFunction(
                                                        variation.id
                                                      )
                                                    }
                                                  >
                                                    <span className="flex items-center justify-center transition-all duration-300 ease-in-out">
                                                      <DeleteOutlineOutlinedIcon
                                                        sx={{
                                                          fontSize: 16,
                                                          color: "#AE4A4A",
                                                        }}
                                                      />
                                                    </span>
                                                  </div>
                                                )}
                                              </div>
                                            )}
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                );
                              })()}
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  )}{" "}
                </>
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-5 pt-11">
                  <div className="w-[20%]">
                    <img
                      src={not_found}
                      //   src="https://placehold.co/400"
                      alt="Nenhum registro encontrado"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="mb-10 flex w-full items-center justify-center gap-4">
                    <h1 className="text-base font-medium text-gray-400">
                      Nenhum resultado encontrado
                    </h1>

                    <Dots animation="undulate" dotColor="bg-gray-400" />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
