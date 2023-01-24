import { ProjectTypes } from "@/types/ProjectTypes";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { Project } from "@/components/Project/Project";
import { markdownParser } from "@/utils/markdownParser";

const ProjectsPage = ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="">
      <Head>
        <title>Projects</title>
      </Head>
      <h1 className="text-center text-3xl mb-10">Projects</h1>
      <ul className="mb-8">
        {projects.map(props => (
          <Project {...props} key={props.slug} />
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const projects = markdownParser("_projects") as ProjectTypes[];
  const sortedProjects = projects.sort((a, b) =>
    new Date(a.date) > new Date(b.date) ? 1 : -1
  );

  return {
    props: {
      projects: sortedProjects,
    },
  };
};

export default ProjectsPage;
