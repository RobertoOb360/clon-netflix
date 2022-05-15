import { CgSpinner } from "react-icons/cg";
import styles from "./spinner.module.css";
export function Spinner() {
  return (
    <div className={styles.spinner}>
      <CgSpinner className={styles.spinning} size={70} />
    </div>
  );
}
