import styles from './preLoader.module.css';

export default function Preloader() {
  return (
    <>
      <div className={styles.container_loader_pre}>
        <div>
          <div className={styles.loader}>
            <div id={styles.loader}>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container_loader}></div>
    </>
  );
}
