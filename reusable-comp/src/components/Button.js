import className from "classnames";

const finalClassName = className("px-3", "py-1.5", "bg-blue-500");

console.log(finalClassName);

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  const classes = className("px-3 py-1.5 border", {
    "border-blue-500 bg-blue-500 text-white": primary,
  });
  return <button className={classes}>{children}</button>;
};

Button.propTypes = {
  checkVariationValue: ({
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
  }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger) +
      Number(!!outline) +
      Number(!!rounded);

    if (count > 1) {
      return new Error("Only one of primary, secondary, succss can be treu");
    }
  },
};

export default Button;
