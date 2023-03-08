import { IIngredient } from 'src/spoonacular/interfaces';

export interface IRecipeResult {
  id: number;
  image: string;
  title: string;
  missedIngredients: IIngredient[];
  unusedIngredients: IIngredient[];
  usedIngredients: IIngredient[];
}
