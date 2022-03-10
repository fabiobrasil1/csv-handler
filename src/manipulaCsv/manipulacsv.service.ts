
import { Injectable } from '@nestjs/common';
import { CsvParser } from 'nest-csv-parser';
import { ArquivoCsv } from 'src/entities/arquivoCsv.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as fs from 'fs';

@Injectable()
export class ManipulaCsvService {
  constructor(@InjectRepository(ArquivoCsv)
    private arquivoCsvRepository: Repository<ArquivoCsv>,
    private readonly csvParser: CsvParser) {

  }

  async getCsv() {

    const stream = fs.createReadStream('C:\\Users\\fabio.fonseca\\Desktop\\projetos\\manipula-csv\\arquivo.exaple.csv')
    const arquivo = await this.csvParser.parse(stream, ArquivoCsv)


    for (let item of arquivo.list) {
      let arqivoCsv = Object.values(item)

      this.arquivoCsvRepository.findOne()


      let linhaArquivoCsv = new ArquivoCsv()


      linhaArquivoCsv.codigo = typeof arqivoCsv[1] === 'string'
        ? arqivoCsv[1]
        : undefined;

      linhaArquivoCsv.bairro = typeof arqivoCsv[2] === 'string'
        ? arqivoCsv[2]
        : undefined;

      linhaArquivoCsv.cidade = typeof arqivoCsv[3] === 'string'
        ? arqivoCsv[3]
        : undefined;

      linhaArquivoCsv.complemento = typeof arqivoCsv[4] === 'string'
        ? arqivoCsv[4]
        : undefined;

      linhaArquivoCsv.endereco = typeof arqivoCsv[5] === 'string'
        ? arqivoCsv[5]
        : undefined;

      linhaArquivoCsv.telefone = typeof arqivoCsv[6] === 'string'
        ? arqivoCsv[6]
        : undefined;

      linhaArquivoCsv.uf = typeof arqivoCsv[7] === 'string'
        ? arqivoCsv[7]
        : undefined;


      try {
        await this.arquivoCsvRepository.save(linhaArquivoCsv)
      } catch (err) {
        console.log(err);

      }
    }

    return arquivo
  }
}


