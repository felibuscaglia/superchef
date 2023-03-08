export interface IRecipeResult {
  id: number;
  image: string;
  title: string;
  totalIngredientsCount: number;
  usedIngredientsCount: number;
  missedIngredients: IIngredient[];
  usedIngredients: IIngredient[];
}

export interface IIngredient {
  aisle: string;
  amount: number;
  id: number;
  image: string;
  meta: any[];
  name: string;
  original: string;
  originalName: string;
  unit: string;
  unitLong: string;
  unitShort: string;
}
