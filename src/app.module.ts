import { Module } from '@nestjs/common';
import { AppConfigModule } from './app-config/app-config.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseConfigModule } from './database-config/database-config.module';
import { UserModule } from './user/user.module';
import { SettingsModule } from './settings/settings.module';
import { FirebaseAuthStrategy } from './common/strategies/firebase.strategy';

@Module({
  imports: [
    AppConfigModule,
    DatabaseConfigModule,
    AuthModule,
    UserModule,
    SettingsModule,
  ],
  controllers: [AppController],
  providers: [AppService, FirebaseAuthStrategy],
})
export class AppModule {}
