export type ProductContextType = {
  page: number | null;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export type ContextPropsType = {
  children: React.ReactNode;
};

export type SortedType = {
  sortBy: string;
  order: string;
};
