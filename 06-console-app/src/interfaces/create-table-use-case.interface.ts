import { CreateTableOptions } from "./create-table-options.interface";

export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}
