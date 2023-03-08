import { Icon } from "react-feather";
import styles from "./styles.module.css";

interface ITooltipProps {
  tooltipText: string;
  component: Icon;
  componentProps: { [key: string]: any };
}

const Tooltip = ({
  tooltipText,
  component: Component,
  componentProps,
}: ITooltipProps) => {
  return (
    <div className={styles.tooltip}>
      <Component {...componentProps} />
      <span className={styles.tooltiptext}>{tooltipText}</span>
    </div>
  );
};

export default Tooltip;
