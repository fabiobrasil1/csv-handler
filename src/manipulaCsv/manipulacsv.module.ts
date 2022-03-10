
import { Module } from '@nestjs/common';
import { ManipulaCsvController } from './manipulacsv.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CsvParser } from 'nest-csv-parser'
import { ArquivoCsv } from 'src/entities/arquivoCsv.entity';
import { ManipulaCsvService } from './manipulacsv.service';

@Module({
    imports: [TypeOrmModule.forFeature([ArquivoCsv])],
    controllers: [ManipulaCsvController],
    providers: [ManipulaCsvService, CsvParser],
    exports: [ManipulaCsvService]
})
export class ManipulaCsvModule { }
