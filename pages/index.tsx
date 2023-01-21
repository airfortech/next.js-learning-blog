import { ArticleTypes } from "@/types/ArticleTypes";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { Article } from "@/components/Article/Article";
import { markdownParser } from "@/utils/markdownParser";

const ArticlesPage = ({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="">
      <Head>
        <title>Blog</title>
      </Head>
      <h1 className="text-center text-3xl mb-10">Blog</h1>
      <ul className="flex flex-row flex-wrap mx-auto">
        {articles.map(props => (
          <Article {...props} key={props.slug} />
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const articles = markdownParser("_articles") as ArticleTypes[];
  const sortedArticles = articles.sort((a, b) =>
    new Date(a.date) > new Date(b.date) ? 1 : -1
  );

  return {
    props: {
      articles: sortedArticles,
    },
  };
};

export default ArticlesPage;
