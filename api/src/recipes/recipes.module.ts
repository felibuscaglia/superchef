import { Module } from '@nestjs/common';
import { SpoonacularModule } from 'src/spoonacular/spoonacular.module';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';

@Module({
  controllers: [RecipesController],
  providers: [RecipesService],
  imports: [SpoonacularModule],
})
export class RecipesModule {}
