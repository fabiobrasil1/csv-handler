import { ManipulaCsvModule } from './manipulaCsv/manipulacsv.module';
import { ManipulaCsvService } from './manipulaCsv/manipulacsv.service';
import { ManipulaCsvController } from './manipulaCsv/manipulacsv.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ManipulaCsvModule, 
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "arquivo_csv_db",
      entities: ["dist/**/*.entity.js"],
      synchronize: true,
    }),
  ],
  controllers: [
    ManipulaCsvController, AppController],
  providers: [
    AppService,],
})
export class AppModule { }
