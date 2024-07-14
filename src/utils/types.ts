export interface User {
  address: Address;
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  phone: string;
  __v: number;
}

export interface Address {
  geolocation: Coordinates;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

export interface Coordinates {
  lat: string;
  long: string;
}

export interface Name {
  firstname: string;
  lastname: string;
}

export type SelectOptionsKeys = Extract<
  keyof User,
  "email" | "username" | "phone"
>;

export type SelectOption = { value: SelectOptionsKeys; label: string };
