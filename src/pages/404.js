import React from "react";

import styles from "./404.module.scss";

const NotFound = (props) => {
  return (
    <div className={styles.main}>
      <div>404</div>
      <p>page not found</p>
    </div>
  );
};
export default NotFound;
