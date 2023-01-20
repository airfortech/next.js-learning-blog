import { ArticleTypes } from "@/types/ArticleTypes";
import Image from "next/legacy/image";
import Link from "next/link";

export const Article = ({
  title,
  slug,
  tags,
  date,
  description,
  cover,
}: ArticleTypes) => {
  return (
    <li
      key={slug}
      className="transition-all duration-150 flex w-full px-4 py-6 md:w-1/2 lg:w-1/3"
    >
      <Link href={`/articles/${slug}`}>
        <div className="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl">
          <div className="md:flex-shrink-0">
            <Image
              src={cover}
              width="490"
              height="225"
              alt="Blog Cover"
              className="object-fill w-full rounded-lg rounded-b-none md:h-56"
            />
          </div>
          <div className="flex items-center justify-between px-4 py-2 overflow-hidden">
            <span className="text-xs font-medium text-blue-600 uppercase">
              {tags[0]}
            </span>
            <div className="text-xs font-medium text-gray-500 flex flex-row items-center">
              {new Date(date).toLocaleDateString()}
            </div>
          </div>
          <hr className="border-gray-300" />
          <div className="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
            <h2 className="text-1xl font-bold tracking-normal text-gray-800 hover:underline">
              {title}
            </h2>
          </div>
          <hr className="border-gray-300" />
          <p className="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700">
            {description}
          </p>
        </div>
      </Link>
    </li>
  );
};
