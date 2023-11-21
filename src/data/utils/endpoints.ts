export const endpoints = {
  products: (query: string = "") => `/products${query}`,
  product: (id: number) => `/products/${id}`,
};
