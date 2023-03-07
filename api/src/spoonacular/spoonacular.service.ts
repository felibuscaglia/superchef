import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class SpoonacularService {
    constructor(
        private readonly httpService: HttpService
    ) { }

    public searchRecipesByIngredients(ingredients: string) {

    }
}
