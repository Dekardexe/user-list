import { SelectOptionsKeys, User } from "./types";

export const searchUser = (
  searchString: string,
  usersData: User[],
  selectedParam: SelectOptionsKeys
) => {
  if (!usersData) {
    return [];
  }
  const normalizedQuery = searchString.toLowerCase();

  const searchResult = usersData.filter((user) => {
    const normalizedParam = user[selectedParam].toLowerCase();

    // TODO удалить. Сначала реализовал функционал поиска сразу по 3м полям. Потом перечитал условие, добавил выбор параметра, по которому производить поиск

    // const normalizedUserData = {
    //   email: user.email?.toLowerCase(),
    //   name: user.username.toLowerCase(),
    //   phone: user.phone,
    // };
    // for (const x in normalizedUserData) {
    //   const hasIntersection =
    //     normalizedUserData[x].indexOf(normalizedQuery) >= 0;
    //   if (hasIntersection) {
    //     return true;
    //   }
    // }

    return normalizedParam.indexOf(normalizedQuery) >= 0;
  });

  return searchResult;
};
