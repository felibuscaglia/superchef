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

    for (const { id, title, image } of RECIPES_DTO) {
      RECIPES.push({
        id,
        title,
        image,
      });
    }

    return RECIPES;
  }
}
