import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ISearchRecipesByIngredientsDto } from './interfaces';

@Injectable()
export class SpoonacularService {
    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService
    ) { }

    public async searchRecipesByIngredients(ingredients: string) {
        try {
            const { data } = await this.get<ISearchRecipesByIngredientsDto[]>('recipes/findByIngredients', {
                ingredients,
                number: 100,
                
            });
        } catch (err) {
            console.error(err);
        }
    }

    private get<T>(endpoint: string, params: { [key: string]: any }) {
        return this.httpService.axiosRef.get<T>(`${SPOONACULAR_API_URL}/${endpoint}`, {
            params,
            headers: {
                'x-api-key': this.configService.get('SPOONACULAR_API_KEY')
            }
        });
    }
}
