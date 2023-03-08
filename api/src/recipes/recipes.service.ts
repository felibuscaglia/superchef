import { Injectable } from '@nestjs/common';
import { SpoonacularService } from 'src/spoonacular/spoonacular.service';
import { IRecipeResult } from './interfaces';

@Injectable()
export class RecipesService {
  constructor(private readonly spoonacularService: SpoonacularService) {}

  public async searchRecipesByIngredients(
    ingredients: string,
    minimizeMissingIngredients: boolean,
    ignorePantry: boolean,
  ) {
    const RECIPES_DTO =
      await this.spoonacularService.searchRecipesByIngredients(
        ingredients,
        minimizeMissingIngredients,
        ignorePantry,
      );
    const RECIPES: IRecipeResult[] = [];

    for (const RECIPE of RECIPES_DTO) {
      const {
        usedIngredientCount = 0,
        missedIngredientCount = 0,
        unusedIngredientCount = 0,
      } = RECIPE;
      const TOTAL_INGREDIENTS_COUNT =
        usedIngredientCount + missedIngredientCount - unusedIngredientCount;

      RECIPES.push({
        id: RECIPE.id,
        title: RECIPE.title,
        image: RECIPE.image,
        missedIngredients: RECIPE.missedIngredients,
        usedIngredients: RECIPE.usedIngredients,
        usedIngredientsCount: usedIngredientCount,
        totalIngredientsCount: TOTAL_INGREDIENTS_COUNT,
      });
    }

    return RECIPES;
  }
}
