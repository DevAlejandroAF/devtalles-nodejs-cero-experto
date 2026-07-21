import { CreateTableOptions } from "../../interfaces";
import { CreateTableUseCase } from "../../interfaces";

export class CreateTable implements CreateTableUseCase {
  constructor() {}

  execute({ base, limit = 10 }: CreateTableOptions): string {
    let output = "";

    for (let i = 1; i <= limit; i++) {
      output += `${base} x ${i} = ${base * i}\n`;
    }

    return output;
  }
}
