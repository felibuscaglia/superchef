import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiKeyService {
  public isKeyValid(key: string) {
    return key === process.env.API_KEY;
  }
}
