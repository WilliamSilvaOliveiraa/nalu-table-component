import { useState } from "react";
import colorThemes from "../../constants/colorThemes";

const getOptionText = (option) => {
  return option.label || option.name || option.title || "";
};

const LogoMarca = "https://placehold.co/600x400";

const getInitials = (text) => {
  const words = text.split(" ");
  return words
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
};

const formatLabel = (text) => {
  return text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const getImageSrc = (option) => {
  return (
    option.foto || option.image || option.imagem || option.picture || LogoMarca
  );
};

const SearchInput = ({
  inputValue,
  setInputValue,
  displayedOptions,
  showImage = true,
  onItemClick,
  loading,
  placeholder = "Pesquisar",
  variant = "default",
  variantTheme,
  themeMode,
}) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const {
    hoverSearchInput,
    primary,
    backgroundTop,
    backgroundTopLoadingInput,
    backgroundInput,
    backgroundLetterSearchInput,
    backgroundPerfilSearchInput,
    textItemSearchInput,
  } = colorThemes[variantTheme];

  const hasItemWithoutPhoto = displayedOptions?.some(
    (option) =>
      !option?.foto && !option?.image && !option?.imagem && !option?.picture
  );

  const filteredOptions = displayedOptions?.filter((option) =>
    getOptionText(option)?.toLowerCase().includes(inputValue?.toLowerCase())
  );

  const inputClassNames = `w-full border rounded-[8px] outline-none 

  ${variant === "small" ? "py-2 px-3 text-sm" : "p-4 text-base"} ${
    inputValue ? "listopen" : ""
  } ${loading ? " cursor-arrow" : ""}`;

  const optionClassNames = `px-4 py-4 cursor-pointer flex items-center gap-4 relative overflow-hidden ${
    variant === "small" ? "text-sm py-2" : "text-base"
  } ${
    loading ? "pointer-events-none" : ""
  } transition-all duration-500 ease-in-out`;

  const imageSizeClassNames = `${
    showImage
      ? variant === "small"
        ? "w-4 h-4"
        : "w-6 h-6"
      : variant === "small"
      ? "w-6 h-6"
      : "w-8 h-8"
  }`;

  const handleInputChange = (e) => {
    if (!loading) {
      setInputValue(e.target.value);
      setIsListOpen(true);
    }
  };

  const handleInputFocus = () => {
    if (!loading) {
      setIsListOpen(true);
    }
  };

  const handleInputBlur = () => {
    if (!loading) {
      setTimeout(() => setIsListOpen(false), 200);
    }
  };

  return (
    <div className={`relative z-40 ${loading ? "opacity-80" : ""}`}>
      <input
        id="input_busca"
        autoComplete="off"
        className={inputClassNames}
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        disabled={loading}
        readOnly={loading}
        style={{
          backgroundColor: loading
            ? backgroundTopLoadingInput[themeMode]
            : backgroundTop[themeMode],
          color: "#787776",
          borderColor: backgroundTop[themeMode],
        }}
      />
      {!loading && (
        <div
          className={`absolute z-10 mt-2 w-full rounded-lg overflow-hidden border  shadow-lg transition-all duration-500 ease-in-out 
     
 opacity-100`}
          style={{
            maxHeight: isListOpen ? "20rem " : "0",
            opacity: isListOpen ? 1 : 0,
            overflowY: isListOpen ? "auto" : "hidden",
            borderColor: backgroundTop[themeMode],
            backgroundColor: hasItemWithoutPhoto
              ? backgroundInput[themeMode]
              : "",
          }}
        >
          {filteredOptions?.length === 0 ? (
            <div className="px-4 py-4 text-gray-500">
              Nenhum resultado encontrado
            </div>
          ) : (
            filteredOptions?.map((option) => (
              <div
                key={option.value}
                className={optionClassNames}
                style={{
                  backgroundColor:
                    hoveredItem === option
                      ? hoverSearchInput[themeMode]
                      : backgroundInput[themeMode],
                }}
                onMouseEnter={() => setHoveredItem(option)}
                onMouseLeave={() => setHoveredItem(null)}
                onMouseDown={() => {
                  onItemClick(option);
                  setInputValue(formatLabel(getOptionText(option)));
                }}
              >
                <div
                  style={{
                    backgroundColor: primary[themeMode],
                  }}
                  className={`absolute left-0 top-0 h-full w-1 transition-opacity duration-500 ease-in-out ${
                    hoveredItem === option ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
                <div
                  style={{
                    backgroundColor:
                      getImageSrc(option) === "https://placehold.co/600x400"
                        ? backgroundPerfilSearchInput[themeMode]
                        : "#ffffff",
                  }}
                  className={`flex items-center justify-center p-1 ${imageSizeClassNames}
                   ${showImage ? "rounded-md" : "rounded-full"}`}
                >
                  {showImage ? (
                    <img
                      src={getImageSrc(option)}
                      className={`h-full w-full object-contain ${
                        variant === "small" ? "rounded-sm" : "rounded-md"
                      }`}
                      alt="Thumbnail"
                    />
                  ) : (
                    <div
                      style={{
                        color: backgroundLetterSearchInput[themeMode],
                      }}
                      className={`flex h-full w-full items-center justify-center  ${
                        variant === "small"
                          ? "text-[10px] font-bold"
                          : "text-xs"
                      }`}
                    >
                      {getInitials(getOptionText(option))}
                    </div>
                  )}
                </div>
                <p
                  style={{
                    color: textItemSearchInput[themeMode],
                  }}
                  className="font-medium opacity-95 "
                >
                  {formatLabel(getOptionText(option))}
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
