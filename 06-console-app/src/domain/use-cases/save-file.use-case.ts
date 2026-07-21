import fs from "node:fs";
import { SaveFileOptions, SaveFileUseCase } from "../../interfaces";

export class SaveFile implements SaveFileUseCase {
  constructor /** repository: StorageRepository */() {}

  execute({
    fileContent,
    fileDestination = "outputs",
    fileName = "table",
  }: SaveFileOptions): boolean {
    try {
      fs.mkdirSync(fileDestination, { recursive: true });
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
}
