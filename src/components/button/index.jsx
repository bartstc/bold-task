import "./index.css";

const Button = ({
  type,
  children,
  isLoading,
  disabled,
  variant = "solid",
  fontSize,
  background,
  color,
}) => {
  const solid = {
    fontSize: fontSize ?? "1.4rem",
    background: background ?? "#ed4c5c",
    color: color ?? "white",
  };

  const link = {
    fontSize: fontSize ?? "1.2rem",
    background: fontSize ?? "transparent",
    color: color ?? "#ed4c5c",
  };

  return (
    <button
      className={
        variant === "solid" ? "button button-solid" : "button button-link"
      }
      style={variant === "solid" ? solid : link}
      type={type}
      disabled={disabled}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
