import { join } from "path";
const { readFileSync } = require("fs");
import matter from "gray-matter";

export const singleFileMarkdownParser = (dir: string, file: string) => {
  const path = join(process.cwd(), dir, file + ".md");
  const fileData = readFileSync(path, "utf-8");
  const { data, content } = matter(fileData);

  return { ...data, content, slug: file.replace(".md", "") };
};
