import fs from "fs";

export const createTable = (
  baseNumber: number,
  tableLimit: number,
  show: boolean,
): void => {
  let outputMessage: string = "";
  const headerMessage: string = `
----------------------------
      Tabla del ${baseNumber}
----------------------------\n
`;

  for (let i: number = 1; i <= tableLimit; i++) {
    outputMessage += `${baseNumber} x ${i} = ${baseNumber * i}\n`;
  }

  outputMessage = headerMessage + outputMessage;
  if (show) {
    console.log(outputMessage);
  }

  writeFile("outputs", baseNumber, outputMessage);
};

const writeFile = (
  outputDirname: string,
  baseNumber: number,
  table: string,
): void => {
  fs.mkdirSync(outputDirname, { recursive: true });
  fs.writeFileSync(`${outputDirname}/tabla-${baseNumber}.txt`, table);
  console.log("File created successfully!");
};
