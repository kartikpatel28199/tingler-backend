import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppConfigModule } from '../app-config/app-config.module';
import { AppConfigService } from '../app-config/app-config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule],
      useFactory: (
        appConfigService: AppConfigService,
      ): TypeOrmModuleOptions => ({
        type: 'mysql',
        host: appConfigService.dbHost,
        port: 3306,
        username: appConfigService.databaseUsername,
        password: appConfigService.databasePassword,
        database: appConfigService.databaseSchema,
        synchronize: false,
        multipleStatements: true,
        // https://orkhan.gitbook.io/typeorm/docs/logging
        logging: appConfigService.dbLogging ? 'all' : false,
        entities: ['dist/**/*.entity{.ts,.js}'],
      }),
      inject: [AppConfigService],
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseConfigModule {}
