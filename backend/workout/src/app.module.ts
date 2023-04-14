import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UserEntity } from './entities/user.entity';
import { ExerciseEntity } from './entities/exercise.entity';
import { UserExerciseEntity } from './entities/userExercise.entity';
import { ExerciseModule } from './exercise/exercise.module';

@Module({
  imports: [
    UserModule,
    ExerciseModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('database.host'),
        port: config.get('database.port'),
        username: config.get('database.username'),
        password: config.get('database.password'),
        database: config.get('database.databaseName'),
        entities: [UserEntity, ExerciseEntity, UserExerciseEntity],
        synchronize: true,
      }),
    }),
  ],
})
export class AppModule {}
