import styles from "./styles.module.css";

interface ILoaderProps {
  loadingText: string;
}

const Loader = ({ loadingText }: ILoaderProps) => {
  return (
    <div className="flex flex-col items-center">
      <div id={styles.cooking}>
        <div id={styles.area}>
          <div id={styles.sides}>
            <div id={styles.pan}></div>
            <div id={styles.handle}></div>
          </div>
          <div id={styles.pancake}>
            <div id={styles.pastry}></div>
          </div>
        </div>
      </div>
      <h2 className="font-title w-4/12 text-center ml-3 text-xl">{loadingText}</h2>
    </div>
  );
};

export default Loader;
