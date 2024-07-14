import { Select } from "antd";
import { SelectOption, SelectOptionsKeys } from "../../utils/types";

import styles from "./SelectFilter.module.scss";

const selectOptions: SelectOption[] = [
  {
    value: "username",
    label: "Имя",
  },
  { value: "email", label: "Почта" },
  { value: "phone", label: "Телефон" },
];

interface SelectFilterProps {
  onChange: (value: SelectOptionsKeys) => void;
}

export const SelectFilter = ({ onChange }: SelectFilterProps) => {
  return (
    <Select
      options={selectOptions}
      className={styles.selectFilter}
      defaultActiveFirstOption
      defaultValue={selectOptions[0] as unknown as SelectOptionsKeys}
      onChange={onChange}
    />
  );
};
