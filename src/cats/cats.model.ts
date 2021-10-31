export type CatType = {
  id: string;
  name: string;
  age: number;
  species: string;
  isCute: boolean;
  friends: string[];
};

export const Cat: CatType[] = [
  {
    id: "aa",
    name: "bule",
    age: 5,
    species: "russian blue",
    isCute: true,
    friends: ["bb", "cc"],
  },
  {
    id: "bb",
    name: "red",
    age: 6,
    species: "russian red",
    isCute: true,
    friends: ["aa", "cc"],
  },
  {
    id: "cc",
    name: "black",
    age: 7,
    species: "russian black",
    isCute: true,
    friends: ["bb"],
  },
];
