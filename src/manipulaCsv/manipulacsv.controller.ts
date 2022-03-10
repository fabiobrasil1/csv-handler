
import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ArquivoCsv } from 'src/entities/arquivoCsv.entity';
import { ManipulaCsvService } from './manipulacsv.service';


@Controller()
export class ManipulaCsvController {
constructor(private manipulacsvService: ManipulaCsvService){

}
  @Post('manipula-csv')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.manipulacsvService.getCsv();
  }

}
