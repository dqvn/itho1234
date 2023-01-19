import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillWhiteA70033: "bg-white_A700_33",
  OutlineGray300: "bg-white_A700 border border-gray_300 border-solid",
  srcFillWhiteA700: "bg-white_A700",
};
const shapes = {
  CustomBorderTL10:
    "rounded-bl-[10px] rounded-br-[0] rounded-tl-[10px] rounded-tr-[0]",
  RoundedBorder10: "rounded-radius10",
  srcRoundedBorder10: "rounded-radius10",
};
const sizes = {
  sm: "pr-[16px] py-[16px]",
  md: "py-[16px]",
  lg: "pb-[20px] pt-[23px] px-[20px]",
  smSrc: "pl-[20px] py-[20px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "CustomBorderTL10",
    "RoundedBorder10",
    "srcRoundedBorder10",
  ]),
  variant: PropTypes.oneOf([
    "FillWhiteA70033",
    "OutlineGray300",
    "srcFillWhiteA700",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smSrc"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "CustomBorderTL10",
  variant: "FillWhiteA70033",
  size: "lg",
};

export { Input };
