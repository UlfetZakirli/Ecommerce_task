export const endpoints = {
  products: (query: string = "") => `/products?q=${query}`,
  product: (id: number) => `/products/${id}`,
};
