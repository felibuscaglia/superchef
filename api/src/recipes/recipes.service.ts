import { Injectable } from '@nestjs/common';

@Injectable()
export class RecipesService {
  constructor() {}

  public searchRecipesByIngredients(ingredients: string) {}
}
