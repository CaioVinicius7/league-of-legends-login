import { FaExclamation, FaUserAlt } from "react-icons/fa";

import styles from "./Banner.module.css";

export function Banner() {
  return (
    <section>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerButtons}>
          <button>
            <span>
              <FaExclamation size={20} />
            </span>
          </button>
          <button>
            <FaUserAlt size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
