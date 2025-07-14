        import { Module } from '@nestjs/common';
        import { TypeOrmModule } from '@nestjs/typeorm';
        import { ConfigModule } from '@nestjs/config';
        import { UsersModule } from './users/users.module';
        import { UserSettingsModule } from './user-settings/user-settings.module';
        import { User } from './users/user.entity';
        import { UserSettings } from './user-settings/user-settings.entity';
        

        @Module({
          imports: [
            ConfigModule.forRoot({
              isGlobal: true,
            }),
            TypeOrmModule.forRoot({
              type: 'mysql',
              host: 'mysql',
              port: 3306, 
              username: 'root',
              password: 'root',
              database: 'store_db',
              entities: [User, UserSettings], 
              synchronize: true,
            }),
            UsersModule,
            UserSettingsModule,
          ],
        })
        export class AppModule {}
