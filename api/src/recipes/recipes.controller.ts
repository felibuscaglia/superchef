import { Controller, Get, Query } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
    constructor(
        private readonly recipesService: RecipesService
    ) { }

    @Get()
    getRecipes(@Query('ingredients') ingredients: string) {
        console.log({ ingredients });
        return 200;
    }
}
