import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import { useEffect } from "react";

export function Search() {
  const history = useHistory();
  const query = useQuery();
  const search = query.get("search");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          clasName={styles.searchInput}
          type="text"
          value={search}
          placeholder="Title"
          aria-label="Search Movies"
          onChange={(e) => {
            const value = e.target.value;
            history.push("/?search=" + value);
          }}
        />
        <FaSearch size={20} color="black" className={styles.searchButton} />
      </div>
    </form>
  );
}
