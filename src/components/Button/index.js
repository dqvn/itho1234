import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder5: "rounded-radius5",
  RoundedBorder10: "rounded-radius10",
  CustomBorderLR10:
    "rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px]",
  icbRoundedBorder6: "rounded-radius6",
  icbCircleBorder30: "rounded-radius30",
  icbCircleBorder9: "rounded-radius9",
};
const variants = {
  OutlineRed300: "border border-red_300 border-solid text-red_300",
  OutlineGray300:
    "bg-white_A700 border border-gray_300 border-solid text-gray_700",
  FillRed300: "bg-red_300 text-white_A700",
  FillWhiteA700: "bg-white_A700",
  FillGray200: "bg-gray_200 text-gray_901",
  FillOrange200: "bg-orange_200",
  FillBlack900: "bg-black_900 text-white_A700",
  icbFillRed53: "bg-red_53",
  icbFillDeeporange400: "bg-deep_orange_400",
  icbFillRed300: "bg-red_300",
  icbFillWhiteA700: "bg-white_A700",
};
const sizes = {
  sm: "p-[12px]",
  md: "pr-[16px] py-[16px]",
  lg: "p-[17px]",
  xl: "p-[20px]",
  smIcn: "p-[4px]",
  mdIcn: "p-[10px]",
  lgIcn: "p-[13px]",
  xlIcn: "p-[18px]",
  "2xlIcn": "p-[22px] sm:px-[20px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder5",
    "RoundedBorder10",
    "CustomBorderLR10",
    "icbRoundedBorder6",
    "icbCircleBorder30",
    "icbCircleBorder9",
  ]),
  variant: PropTypes.oneOf([
    "OutlineRed300",
    "OutlineGray300",
    "FillRed300",
    "FillWhiteA700",
    "FillGray200",
    "FillOrange200",
    "FillBlack900",
    "icbFillRed53",
    "icbFillDeeporange400",
    "icbFillRed300",
    "icbFillWhiteA700",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "smIcn",
    "mdIcn",
    "lgIcn",
    "xlIcn",
    "2xlIcn",
  ]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder10",
  variant: "FillRed300",
  size: "",
};

export { Button };
