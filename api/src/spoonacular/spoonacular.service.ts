import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ISearchRecipesByIngredientsDto } from './interfaces';
import { SPOONACULAR_API_URL } from '../lib/constants';

@Injectable()
export class SpoonacularService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  public async searchRecipesByIngredients(
    ingredients: string = '',
    minimizeMissingIngredients: boolean = false,
    ignorePantry: boolean = true,
  ): Promise<ISearchRecipesByIngredientsDto[]> {
    try {
      const { data } = await this.get<ISearchRecipesByIngredientsDto[]>(
        'recipes/findByIngredients',
        {
          ingredients,
          number: 100,
          ranking: minimizeMissingIngredients ? 2 : 1,
          ignorePantry,
        },
      );

      return data;
    } catch (err) {
      console.error(err);
    }
  }

  private get<T>(endpoint: string, params: { [key: string]: any }) {
    return this.httpService.axiosRef.get<T>(
      `${SPOONACULAR_API_URL}/${endpoint}`,
      {
        params,
        headers: {
          'x-api-key': this.configService.get('SPOONACULAR_API_KEY'),
        },
      },
    );
  }
}
