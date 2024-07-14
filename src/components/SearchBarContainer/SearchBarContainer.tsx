import React from "react";

import styles from "./SearchBarContainer.module.scss";
import { SearchBar } from "../../UI/SearchBar/SearchBar";

export const SearchBarContainer = () => {
  return (
    <div className={styles.searchBarContainer}>
      <SearchBar />
    </div>
  );
};
