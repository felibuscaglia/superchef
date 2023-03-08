import { IIngredient } from 'src/spoonacular/interfaces';

export interface IRecipeResult {
  id: number;
  image: string;
  title: string;
  totalIngredientsCount: number;
  usedIngredientsCount: number;
  missedIngredients: IIngredient[];
  usedIngredients: IIngredient[];
}
