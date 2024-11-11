import { useState } from "react";
import PropTypes from "prop-types";
import colorThemes from "../../constants/colorThemes";

const getOptionText = (option) => {
  return option.label || option.name || option.title || "";
};

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
  return option.foto || option.image || option.imagem || option.picture || null;
};

const SearchInput = ({
  inputValue,
  setInputValue,
  displayedOptions,
  onItemClick,
  loading,
  placeholder = "Search",
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

  const imageSizeClassNames = variant === "small" ? "w-6 h-6" : "w-8 h-8";

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

  const getEmptyStateMessage = () => {
    if (!displayedOptions || displayedOptions.length === 0) {
      return "Nenhum item disponível";
    }
    if (filteredOptions?.length === 0) {
      return "Nenhum resultado encontrado";
    }
    return null;
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
          className={`absolute z-10 mt-2 w-full rounded-lg overflow-hidden border shadow-lg transition-all duration-500 ease-in-out opacity-100`}
          style={{
            maxHeight: isListOpen ? "20rem " : "0rem",
            opacity: isListOpen ? 1 : 0,
            overflowY: isListOpen ? "auto" : "hidden",
            borderColor: backgroundTop[themeMode],
            backgroundColor: backgroundInput[themeMode],
          }}
        >
          {getEmptyStateMessage() ? (
            <div className="px-4 py-4 text-gray-500 text-sm">
              {getEmptyStateMessage()}
            </div>
          ) : (
            filteredOptions?.map((option) => {
              const imageSrc = getImageSrc(option);
              return (
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
                      backgroundColor: imageSrc
                        ? "#ffffff"
                        : backgroundPerfilSearchInput[themeMode],
                    }}
                    className={`flex items-center justify-center p-1 ${imageSizeClassNames} ${
                      imageSrc ? "rounded-md" : "rounded-full"
                    }`}
                  >
                    {imageSrc ? (
                      <img
                        src={imageSrc}
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
                        className={`flex h-full w-full items-center justify-center ${
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
                    className="font-medium opacity-95"
                  >
                    {formatLabel(getOptionText(option))}
                  </p>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

// Define the shape of an option object
const OptionShape = PropTypes.shape({
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  foto: PropTypes.string,
  image: PropTypes.string,
  imagem: PropTypes.string,
  picture: PropTypes.string,
});

SearchInput.propTypes = {
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
  displayedOptions: PropTypes.arrayOf(OptionShape).isRequired,
  onItemClick: PropTypes.func.isRequired,
  variantTheme: PropTypes.string.isRequired,
  themeMode: PropTypes.string.isRequired,

  loading: PropTypes.bool,
  placeholder: PropTypes.string,
  variant: PropTypes.oneOf(["default", "small"]),
};

SearchInput.defaultProps = {
  loading: false,
  placeholder: "Search",
  variant: "default",
};

export default SearchInput;
