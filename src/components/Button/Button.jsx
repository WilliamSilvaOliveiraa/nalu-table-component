import PropTypes from "prop-types";

const colorClasses = {
  primary: {
    fill: "bg-primary text-white rounded-lg",
    ghost: "hover:bg-primary/10 rounded text-primary",
    outlined:
      "hover:bg-primary/10 text-primary border border-primary rounded-lg",
  },
  danger: {
    fill: "bg-red-500 text-white rounded-lg",
    ghost: "hover:bg-red-50 rounded text-red-500",
    outlined: "hover:bg-red-50 text-red-500 border border-red-500 rounded-lg",
  },
  warning: {
    fill: "bg-yellow-500 text-white rounded-lg",
    ghost: "hover:bg-yellow-50 rounded text-yellow-500",
    outlined:
      "hover:bg-yellow-50 text-yellow-500 border border-yellow-500 rounded-lg",
  },
  success: {
    fill: "bg-green-500 text-white rounded-lg",
    ghost: "hover:bg-green-50 rounded text-green-500",
    outlined:
      "hover:bg-green-50 text-green-500 border border-green-500 rounded-lg",
  },
  info: {
    fill: "bg-blue-500 text-white rounded-lg",
    ghost: "hover:bg-blue-50 rounded text-blue-500",
    outlined:
      "hover:bg-blue-50 text-blue-500 border border-blue-500 rounded-lg",
  },
  neutral: {
    fill: "bg-gray-500 text-white rounded-lg",
    ghost: "hover:bg-gray-50 rounded text-gray-500",
    outlined:
      "hover:bg-gray-50 text-gray-500 border border-gray-500 rounded-lg",
  },
  light: {
    fill: "bg-gray-100 text-gray-800 rounded-lg",
    ghost: "hover:bg-gray-50 rounded text-gray-800",
    outlined:
      "hover:bg-gray-50 text-gray-800 border border-gray-200 rounded-lg",
  },
};

const sizeOptions = {
  small: "py-1 px-3 text-sm",
  medium: "py-2 px-4 text-base",
  large: "py-4 px-6 text-base",
  default: "py-2 px-4 text-base",
};

const Button = ({
  color = "primary",
  disabled = false,
  variant = "fill",
  size = "default",
  text = "",
  icon = null,
  iconPosition = "right",
  onClick = () => {},
  customStyle = "",
  type = "button",
  onLoading = false,
  reference = null,
  countActiveFilter = 0,
}) => {
  const getColorClass = (color, variant) => {
    if (onLoading) return colorClasses.neutral.outlined;
    const colorVariantClass = colorClasses[color]?.[variant];
    if (colorVariantClass) return colorVariantClass;
    return "bg-gray-400 hover:bg-gray-600 text-gray-800";
  };

  const colorClass = customStyle || getColorClass(color, variant);
  let iconClass = iconPosition === "left" ? "mr-2" : "ml-2";
  iconClass = `${iconClass} ${countActiveFilter > 0 ? "ml-6" : ""}`;
  const sizeClass = sizeOptions[size];
  const buttonClass = `
    transition duration-300 ease-in-out
    ${colorClass}
    ${sizeClass}
    ${countActiveFilter === 0 && "justify-center"}
    ${disabled ? "cursor-default opacity-50" : "cursor-pointer"}
  `;

  return (
    <button
      ref={reference}
      className={`flex font-medium items-center w-full ${buttonClass}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {iconPosition === "left" && icon && (
        <span className={iconClass}>{icon}</span>
      )}
      {text}
      {iconPosition === "right" && icon && (
        <span className={iconClass}>{icon}</span>
      )}
      {iconPosition === "center" && icon && <span>{icon}</span>}
    </button>
  );
};

Button.propTypes = {
  // Color variants
  color: PropTypes.oneOf([
    "primary",
    "danger",
    "warning",
    "success",
    "info",
    "neutral",
    "light",
  ]),

  // Button states
  disabled: PropTypes.bool,
  onLoading: PropTypes.bool,

  // Visual variants
  variant: PropTypes.oneOf(["fill", "ghost", "outlined"]),
  size: PropTypes.oneOf(["small", "medium", "large", "default"]),

  // Content
  text: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(["left", "right", "center"]),

  // Styling
  customStyle: PropTypes.string,

  // Functionality
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),

  // Other
  countActiveFilter: PropTypes.number,
};

Button.defaultProps = {
  color: "primary",
  disabled: false,
  variant: "fill",
  size: "default",
  text: "",
  icon: null,
  iconPosition: "right",
  onClick: () => {},
  customStyle: "",
  type: "button",
  onLoading: false,
  reference: null,
  countActiveFilter: 0,
};

export default Button;
