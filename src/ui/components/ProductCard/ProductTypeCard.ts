export type ProductCardType = {
  id: number;
  description: string;
  price: number;
  category: string;
  isNew: boolean;
  deleteHandler: (id: number) => void;
};
