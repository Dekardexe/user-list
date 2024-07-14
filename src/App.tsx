import { useState } from "react";
import { UserList } from "./components/UserList";
import { useGetUsers } from "./hooks/useGetUsers";
import { SearchBar } from "./UI/SearchBar";
import { SelectOptionsKeys } from "./utils/types";

import styles from "./styles/App.module.scss";

function App() {
  const [searchText, setSearchText] = useState("");
  const [selectedParam, setSelectedParam] =
    useState<SelectOptionsKeys>("username");
  const { users } = useGetUsers(searchText, selectedParam);

  const handleSearchChange = (searchText: string) => {
    setSearchText(searchText);
  };

  return (
    <div className={styles.app}>
      <SearchBar
        onSearchChange={handleSearchChange}
        onSelectChange={setSelectedParam}
      />
      <UserList users={users} />
    </div>
  );
}

export default App;
