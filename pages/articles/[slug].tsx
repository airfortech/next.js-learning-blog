import { ArticleTypes } from "@/types/ArticleTypes";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { getFilesList } from "@/utils/getFilesList";
import { InferGetStaticPathsType } from "@/types/InferGetStaticPathsType";
import { singleFileMarkdownParser } from "@/utils/singleFileMarkdownParser";
import { ArticleDetails } from "@/components/Article/ArticleDetails";

const ArticlePage = ({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!article)
    return {
      notFound: true,
    };

  return (
    <div className="">
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.description} />
      </Head>
      <h1 className="text-center text-3xl mb-10">Blog</h1>
      <ul className="flex flex-row flex-wrap mx-auto">
        <ArticleDetails {...article} key={article.slug} />
      </ul>
    </div>
  );
};

export const getStaticPaths = async () => {
  const articles = getFilesList("_articles");

  return {
    paths: [
      ...articles.map(article => ({
        params: { slug: article.replace(".md", "") },
      })),
    ],
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
  if (!params?.slug) {
    return {
      props: {},
      notFound: true,
    };
  }

  const article = singleFileMarkdownParser(
    "_articles",
    params.slug
  ) as ArticleTypes;

  return {
    props: {
      article,
    },
  };
};

export default ArticlePage;
