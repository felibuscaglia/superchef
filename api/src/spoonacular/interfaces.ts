export interface ISearchRecipesByIngredientsDto {
  id: number;
  image: string;
  missedIngredientCount: number;
  missedIngredients: IMissedIngredient[];
  title: string;
}

interface IMissedIngredient {
  amount: number;
  id: number;
  image: string;
  name: string;
  unit: string;
}