import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get port(): number {
    return this.configService.get<number>('port');
  }

  get databaseUsername(): string {
    return this.configService.get<string>('database.username');
  }

  get databasePassword(): string {
    return this.configService.get<string>('database.password');
  }

  get databaseSchema(): string {
    return this.configService.get<string>('database.schema');
  }

  get dbHost(): string {
    return this.configService.get<string>('database.host');
  }

  get dbLogging(): number {
    return this.configService.get<number>('database.dbLogging');
  }
}
