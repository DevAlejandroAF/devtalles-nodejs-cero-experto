import { SaveFileOptions } from "./save-file-options.interface";

export interface SaveFileUseCase {
  execute: (options: SaveFileOptions) => boolean;
}
