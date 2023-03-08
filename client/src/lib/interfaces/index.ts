export interface IRecipeResult {
  id: number;
  image: string;
  title: string;
  missedIngredients: IIngredient[];
  unusedIngredients: IIngredient[];
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
