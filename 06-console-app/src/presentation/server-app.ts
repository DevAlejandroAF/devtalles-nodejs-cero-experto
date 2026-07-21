import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";
import { RunOptions } from "../interfaces";

export class ServerApp {
  static run({
    base,
    limit,
    showTable,
    fileDestination,
    fileName,
  }: RunOptions) {
    console.log("Server running...");

    const table = new CreateTable().execute({ base, limit });
    if (showTable) console.log(table);
    const wasCreated = new SaveFile().execute({
      fileContent: table,
      fileDestination,
      fileName: `${fileName}-${base}`,
    });
    wasCreated
      ? console.log("[+] File created sucessfully!")
      : console.log("[!] Error: File not created");
  }
}
