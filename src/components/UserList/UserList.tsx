import { UserCard } from "../UserCard";
import { User } from "../../utils/types";

import styles from "./UserList.module.scss";

interface UserListProps {
  users?: User[];
}

export const UserList = ({ users }: UserListProps) => {
  return (
    <div className={styles.userList}>
      {users?.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
};
