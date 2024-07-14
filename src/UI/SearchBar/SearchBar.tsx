import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { SelectFilter } from "../SelectFilter";
import { SelectOptionsKeys } from "../../utils/types";

import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  onSearchChange: (searchText: string) => void;
  onSelectChange: (value: SelectOptionsKeys) => void;
}

export const SearchBar = ({
  onSearchChange,
  onSelectChange,
}: SearchBarProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  const handleSelectChange = (value: SelectOptionsKeys) => {
    onSelectChange(value);
  };

  return (
    <div className={styles.searchBarContainer}>
      <SelectFilter onChange={handleSelectChange} />
      <Input onChange={handleInputChange} suffix={<SearchOutlined />} />
    </div>
  );
};
