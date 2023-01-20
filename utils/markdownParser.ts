import { join } from "path";
const { readFileSync } = require("fs");
import matter from "gray-matter";
import { getFilesList } from "./getFilesList";

export const markdownParser = (dir: string) => {
  const files = getFilesList(dir);

  return files.map(file => {
    const path = join(process.cwd(), dir, file);
    const fileData = readFileSync(path, "utf-8");
    const { data } = matter(fileData);

    return { ...data, slug: file.replace(".md", "") };
  });
};
