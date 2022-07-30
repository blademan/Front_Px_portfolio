import styles from './preLoader.module.css';
import { useState, useEffect } from 'react';

let setTimeoutInstance;
export default function Preloader() {
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    setIsExpired(true);

    setTimeoutInstance = setTimeout(() => {
      setIsExpired(false);
    }, 1000);

    return () => clearTimeout(setTimeoutInstance);
  }, []);

  if (isExpired) {
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
}
