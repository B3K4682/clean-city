import styles from "./Container.module.css";

interface IContainerProps {
  children: React.ReactNode;
  /**If there is another class (Class must be in Container.module.css) */
  classNames?: string;
}

const Container: React.FunctionComponent<IContainerProps> = ({
  children,
  classNames,
}) => {
  const classNamesArray = classNames?.split(" ");
  const classes = classNamesArray
    ?.map((className) => {
      return styles[className.replace(",", "")];
    })
    .join(" ");
  return (
    <div className={`${styles.container} ${classNames ? classes : null}`}>
      {children}
    </div>
  );
};

export default Container;
