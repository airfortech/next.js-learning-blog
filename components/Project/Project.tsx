import { ProjectTypes } from "@/types/ProjectTypes";

export const Project = ({
  title,
  slug,
  tags,
  date,
  description,
}: ProjectTypes) => {
  return (
    <li className="relative mb-8 bg-slate-500 p-2">
      <h2 className="font-medium text-lg mr-2">{title}</h2>
      <ul>
        {tags.map(tag => (
          <li
            key={tag}
            className="mr-2 my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 text-sm"
          >
            <div className="absolute flex-shrink-0 flex items-center justify-center">
              <span
                className="h-1.5 w-1.5 rounded-full bg-green-500"
                aria-hidden="true"
              ></span>
            </div>
            <div className="ml-3.5 font-medium text-gray-900">{tag}</div>
          </li>
        ))}
      </ul>
      <p className="whitespace-nowrap text-sm">{date}</p>
      <p className="mt-2 text-gray-300">{description}</p>
    </li>
  );
};
