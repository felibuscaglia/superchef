import { HttpModule, Module } from '@nestjs/common';
import { SpoonacularService } from './spoonacular.service';

@Module({
  providers: [SpoonacularService],
  imports: [HttpModule],
  exports: [SpoonacularService],
})
export class SpoonacularModule {}
