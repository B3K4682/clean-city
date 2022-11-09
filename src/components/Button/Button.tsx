import styles from "./Button.module.css";

interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  /**
   * Types:
   * - primary
   * - secondary
   * - blank
   */
  type?: "primary" | "secondary" | "blank";
  /**
   * Sizes:
   * - sm
   * - md
   * - full
   */
  size?: "sm" | "md" | "full";
  disabled?: boolean;
  classNames?: string;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  type,
  size,
  onClick,
  disabled,
  classNames,
}) => {
  const classNamesArray = classNames?.split(" ");
  const classes = classNamesArray
    ?.map((className) => {
      return styles[className.replace(",", "")];
    })
    .join(" ");
  return (
    <button
      className={`${styles.btn} ${
        type ? styles[`btn_${type}`] : styles[`btn_primary`]
      } ${size && styles[size]} ${classNames ? classes : null}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
