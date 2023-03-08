export interface ISearchRecipesByIngredientsDto {
  id: number;
  image: string;
  missedIngredientCount: number;
  missedIngredients: IIngredient[];
  unusedIngredientCount: number;
  unusedIngredients: IIngredient[];
  usedIngredientCount: number;
  usedIngredients: IIngredient[];
  title: string;
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
