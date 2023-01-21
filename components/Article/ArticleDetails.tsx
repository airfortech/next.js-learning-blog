import { ArticleTypes } from "@/types/ArticleTypes";
import ReactMarkdown from "react-markdown";

export const ArticleDetails = ({
  title,
  slug,
  tags,
  date,
  description,
  cover,
  content,
}: ArticleTypes) => {
  return (
    <ReactMarkdown className="prose dark:prose-invert">{content}</ReactMarkdown>
  );
};
