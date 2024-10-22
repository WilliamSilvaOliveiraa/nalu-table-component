import React, { useState, useEffect } from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { useMediaQuery } from "react-responsive";
import colorThemes from "../../constants/colorThemes";

const Pagination = ({
  itemsTotalCount = 0,
  onPageChange,
  itemsPerPage = 10,
  currentPageProp,
  loading,
  themeMode,
  variant,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(itemsTotalCount / itemsPerPage);
  const isSmallScreen = useMediaQuery({ maxWidth: 500 });
  const { primary, white, buttonShadow, hoverText } = colorThemes[variant];
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredNext, setIsHoveredNext] = useState(false);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage, itemsTotalCount]);

  useEffect(() => {
    setCurrentPage(currentPageProp);
  }, [currentPageProp]);

  const getPageNumbers = () => {
    const pageNumbers = [];
    const sidePages = 2;

    if (totalPages <= 7) {
      // Se o número total de páginas for menor ou igual a 7, mostra todas as páginas
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        // Se a página atual estiver entre 1 e 3, mostra as 4 primeiras páginas
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        // Se a página atual estiver nas últimas 4 páginas, mostra as últimas 4 páginas
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // Se a página atual estiver no meio, mostra 2 páginas antes e 2 depois
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (
          let i = currentPage - sidePages;
          i <= currentPage + sidePages;
          i++
        ) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };
  const getPageNumbersPhone = () => {
    const pageNumbers = [];
    const sidePages = 1;

    if (totalPages <= 5) {
      // Se o número total de páginas for menor ou igual a 5, mostra todas as páginas
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 2) {
        // Se a página atual for 1 ou 2, mostra as 3 primeiras páginas
        for (let i = 1; i <= 3; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 1) {
        // Se a página atual for uma das duas últimas, mostra as 3 últimas páginas
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // Para todas as outras páginas (incluindo a terceira), mostra o "miolo"
        pageNumbers.push(1);
        if (currentPage > 3) pageNumbers.push("...");
        for (
          let i = Math.max(2, currentPage - sidePages);
          i <= Math.min(totalPages - 1, currentPage + sidePages);
          i++
        ) {
          pageNumbers.push(i);
        }
        if (currentPage < totalPages - 2) pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  const handleClick = (pageNumber) => {
    if (pageNumber !== "..." && pageNumber !== currentPage) {
      setCurrentPage(pageNumber);
      onPageChange(pageNumber);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handleClick(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handleClick(currentPage + 1);
    }
  };
  console.log(itemsTotalCount);

  return (
    <>
      <div className="flex items-center justify-center gap-2">
        {itemsTotalCount > 0 && (
          <>
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1 || loading}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                backgroundColor:
                  currentPage === 1 || loading
                    ? "#f2f0f2"
                    : isHovered
                    ? primary[themeMode]
                    : white[themeMode],
                color:
                  currentPage === 1 || loading
                    ? "#c2c2c2"
                    : isHovered
                    ? "#FFFFFF"
                    : "#c2c2c2",
                cursor:
                  currentPage === 1 || loading ? "not-allowed" : "pointer",
              }}
              className="aspect-square h-[34px] rounded-full text-sm font-semibold transition-colors duration-300 ease-out"
            >
              <KeyboardArrowLeftRoundedIcon />
            </button>

            <div className="flex rounded-full bg-[#ffffff] px-2">
              {isSmallScreen
                ? getPageNumbersPhone().map((number, index) => (
                    <button
                      key={index}
                      onClick={() => handleClick(number)}
                      disabled={number === "..." || loading}
                      style={{
                        backgroundColor: "#ffffff",
                        color: number === currentPage ? "white" : "#b1aeb0",
                      }}
                      className={`relative h-[34px] w-[34px] rounded-xl text-sm font-semibold transition-colors duration-300 ease-out ${
                        number === "..." ? "cursor-default" : ""
                      }`}
                      onMouseOver={(e) =>
                        !(number === "..." || loading) &&
                        (e.currentTarget.style.color = "")
                      }
                      onMouseOut={(e) =>
                        !(number === "..." || loading) &&
                        (e.currentTarget.style.color =
                          number === currentPage ? "white" : "#b1aeb0")
                      }
                    >
                      <span
                        className={`absolute inset-0 rounded-xl  transition-all duration-300 ease-out ${
                          number === currentPage
                            ? "scale-100 opacity-100"
                            : "scale-0 opacity-0"
                        }`}
                        style={{
                          boxShadow:
                            number === currentPage
                              ? buttonShadow[themeMode]
                              : "0px 0px 0px 0px rgba(178, 77, 248,0)",

                          backgroundColor: primary[themeMode],
                        }}
                      />
                      <span className="relative z-10">
                        <p className="text-[14px]">{number}</p>
                      </span>
                    </button>
                  ))
                : getPageNumbers().map((number, index) => (
                    <button
                      key={index}
                      onClick={() => handleClick(number)}
                      disabled={number === "..." || loading}
                      style={{
                        position: "relative",
                        height: "34px",
                        width: "34px",
                        borderRadius: "0.75rem",
                        backgroundColor: "#ffffff",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        transition: "color 300ms ease-out",
                        zIndex: number === currentPage ? "20" : "auto",
                        color: number === currentPage ? "white" : "#b1aeb0",
                        cursor: number === "..." ? "default" : "pointer",
                      }}
                      onMouseOver={(e) =>
                        !(
                          number === "..." ||
                          loading ||
                          number === currentPage
                        ) &&
                        (e.currentTarget.style.color = hoverText[themeMode])
                      }
                      onMouseOut={(e) =>
                        !(number === "..." || loading) &&
                        (e.currentTarget.style.color =
                          number === currentPage ? "white" : "#b1aeb0")
                      }
                    >
                      <span
                        className={`absolute inset-0 rounded-xl transition-all duration-300 ease-out ${
                          number === currentPage
                            ? "scale-100 opacity-100"
                            : "scale-0 opacity-0"
                        }`}
                        style={{
                          boxShadow:
                            number === currentPage
                              ? buttonShadow[themeMode]
                              : "0px 0px 0px 0px rgba(178, 77, 248,0)",
                          backgroundColor: primary[themeMode],
                        }}
                      />
                      <span className="relative z-10">
                        <p className="text-[14px]">{number}</p>
                      </span>
                    </button>
                  ))}
            </div>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages || loading}
              onMouseEnter={() => setIsHoveredNext(true)}
              onMouseLeave={() => setIsHoveredNext(false)}
              style={{
                backgroundColor:
                  currentPage === totalPages || loading
                    ? "#f2f0f2"
                    : isHoveredNext
                    ? primary[themeMode]
                    : white[themeMode],
                color:
                  currentPage === totalPages || loading
                    ? "#c2c2c2"
                    : isHoveredNext
                    ? "#FFFFFF"
                    : "#c2c2c2",
                cursor:
                  currentPage === totalPages || loading
                    ? "not-allowed"
                    : "pointer",
              }}
              className="aspect-square h-[34px] rounded-full text-sm font-semibold transition-colors duration-300 ease-out"
            >
              <KeyboardArrowRightRoundedIcon />
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Pagination;
