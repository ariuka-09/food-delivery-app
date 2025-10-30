export type FoodCategory = { _id: string; categoryName: string };
export type Food = {
  _id: string;
  foodName: string;
  ingredients: string;
  price: number;
  category: string;
};
