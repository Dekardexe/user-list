import { useEffect, useRef, useState } from "react";
import { SelectOptionsKeys, User } from "../utils/types";
import { getUsers } from "../api/services/users";
import { USERS_FETCH_LIMIT } from "../utils/constants";
import { searchUser } from "../utils/helpers";
import { useDebounce } from "use-debounce";

export const useGetUsers = (
  searchText: string,
  selectedParam: SelectOptionsKeys
) => {
  const allUsersRef = useRef<User[] | null>(null);
  const [users, setUsers] = useState<User[] | null>(null);

  const [debouncedSearchValue] = useDebounce(searchText, 600);

  useEffect(() => {
    setUsers(
      searchUser(debouncedSearchValue, allUsersRef.current, selectedParam)
    );
  }, [debouncedSearchValue, selectedParam]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await getUsers(USERS_FETCH_LIMIT);
      setUsers(response);
      allUsersRef.current = response;
    }

    try {
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { users };
};
