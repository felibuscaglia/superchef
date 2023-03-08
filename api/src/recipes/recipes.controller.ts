import { Controller, Get, ParseBoolPipe, Query } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  getRecipes(
    @Query('ingredients') ingredients: string,
    @Query('minimizeMissingIngredients', ParseBoolPipe)
    minimizeMissingIngredients: boolean,
    @Query('ignorePantry', ParseBoolPipe) ignorePantry: boolean,
  ) {
    return this.recipesService.searchRecipesByIngredients(
      ingredients,
      minimizeMissingIngredients,
      ignorePantry,
    );
  }
}
