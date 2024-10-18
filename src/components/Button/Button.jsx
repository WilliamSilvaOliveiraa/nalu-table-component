import React from "react";

const colorClasses = {
  primary: {
    fill: "tw-bg-primary text-white rounded-[74px]",
    ghost: "tw-ghost-bg-primary rounded-[4px] tw-text-primary",
    outlined:
      "tw-ghost-bg-primary tw-text-primary border border-[var(--primary-color)] rounded-[74px]",
  },
  danger: {
    fill: "tw-bg-danger text-white rounded-[74px]",
    ghost: "tw-ghost-bg-danger rounded-[4px] tw-text-danger",
    outlined:
      "tw-ghost-bg-danger tw-text-danger border border-[var(--danger-color)] rounded-[74px]",
  },
  warning: {
    fill: "tw-bg-warning text-white rounded-[74px]",
    ghost: "tw-ghost-bg-warning rounded-[4px] tw-text-warning",
    outlined:
      "tw-ghost-bg-warning tw-text-warning border border-[var(--warning-color)] rounded-[74px]",
  },
  success: {
    fill: "tw-bg-success text-white rounded-[74px]",
    ghost: "tw-ghost-bg-success rounded-[4px] tw-text-success",
    outlined:
      "tw-ghost-bg-success tw-text-success border border-[var(--success-color)] rounded-[74px]",
  },
  info: {
    fill: "tw-bg-info text-white rounded-[74px]",
    ghost: "tw-ghost-bg-info rounded-[4px] tw-text-info",
    outlined:
      "tw-ghost-bg-info tw-text-info border border-[var(--info-color)] rounded-[74px]",
  },
  neutral: {
    fill: "tw-bg-neutral text-white rounded-[74px]",
    ghost: "tw-ghost-bg-neutral rounded-[4px] tw-text-neutral",
    outlined:
      "tw-ghost-bg-neutral tw-text-neutral border border-[var(--neutral-color)] rounded-[74px]",
  },
  light: {
    fill: "tw-bg-light tw-text-light  rounded-[74px]",
    ghost: "tw-ghost-bg-light rounded-[4px] tw-text-light ",
    outlined:
      "tw-ghost-bg-light tw-text-light bg-white border border-[var(--text-neutral-90)] rounded-[74px]",
  },
};

const sizeOptions = {
  small: "py-[0.4rem] px-3 text-[0.875rem]",
  medium: "py-2 px-4 text-[1rem]",
  large: "py-4 px-6 text-[1rem]",
  default: "py-2 px-4 text-[1rem]",
};

const Button = ({
  color,
  disabled,
  variant,
  size = "default",
  text,
  icon,
  iconPosition,
  onClick,
  customStyle,
  type,
  onLoading,
  reference,
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
  const buttonClass = ` transition duration-300 ease-in-out 
  ${colorClass} 
  ${sizeClass} 
  ${countActiveFilter === 0 && "justify-center"}
  ${disabled ? "cursor-default opacity-50" : "cursor-pointer"}`;

  return (
    <button
      ref={reference || null}
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

export default Button;
