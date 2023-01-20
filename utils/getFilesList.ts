import { readdirSync } from "fs";
import { join } from "path";

export const getFilesList = (dir: string): string[] => {
  const projectDir = process.cwd();
  const targetDir = join(projectDir, dir);
  return readdirSync(targetDir, "utf-8");
};
