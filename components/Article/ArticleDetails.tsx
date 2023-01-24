import { ArticleTypes } from "@/types/ArticleTypes";
import ReactMarkdown from "react-markdown";
import rangeParser from "parse-numeric-range";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const ArticleDetails = ({ content }: ArticleTypes) => {
  const syntaxTheme = oneDark;

  const markdownComponents = {
    code: ({
      node,
      inline,
      className,
      children,
      ...props
    }: {
      [x: string]: any;
    }) => {
      const match = /language-(\w+)/.exec(className || "");
      const hasMeta = node?.data?.meta;

      const applyHighlights: object = (applyHighlights: number) => {
        if (hasMeta) {
          const RE = /{([\d,-]+)}/;
          const metadata = node.data.meta?.replace(/\s/g, "");
          const strlineNumbers = [...metadata.match(RE)][1];
          const highlightLines = rangeParser(strlineNumbers);
          const data: string | null = highlightLines.includes(applyHighlights)
            ? "highlight"
            : null;
          return { data };
        } else {
          return {};
        }
      };

      return match ? (
        <SyntaxHighlighter
          style={syntaxTheme}
          language={match[1]}
          PreTag="div"
          className="codeStyle"
          /* potrzebne by lineProps przekazywało numer linii */
          showLineNumbers={true}
          wrapLines={hasMeta ? true : false}
          useInlineStyles={true}
          lineProps={applyHighlights}
          /* ukrycie numerowania */
          lineNumberStyle={{ display: "none" }}
          {...props}
        >
          {children}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <ReactMarkdown
      className="prose dark:prose-invert"
      components={markdownComponents}
    >
      {content}
    </ReactMarkdown>
  );
};
