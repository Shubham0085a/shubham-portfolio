import { FC } from "react";
import Image from "next/image";
import projectsData from "@/data/projects.json";
import Link from "next/link";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

const Projects: FC = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">Projects</h2>
        <div className="mt-10 md:mt-16">
          {projectsData.map(
            ({ name, image, github_link, technologies, points }) => (
              <Link
                href={github_link}
                key={name}
                target="_blank"
                rel="noopener noreferrer"
                className="border-t last:border-b border-stone-400 border-dotted py-6 md:py-8 lg:py-10 flex flex-col relative group/project"
              >
                <div className="absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full bg-stone-950 transition-all duration-700"></div>
                <div className="relative">
                  <div className="aspect-video md:hidden">
                    <Image
                      src={image}
                      alt={`${name} image`}
                      width={300}
                      height={300}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="mt-8 md:mt-0 flex justify-between items-center md:px-5 md:grid md:[grid-template-columns:1fr_300px_max-content] md:gap-8">
                    <div className="lg:group-hover/project:pl-8 transition-all duration-700">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl">
                        {name}
                      </h3>
                      <p className="text-sm text-gray-600 md:hidden">
                        <strong>Technologies:</strong> {technologies.join(", ")}
                      </p>
                      <ul className="text-sm text-gray-500 list-disc pl-5 mt-2 md:hidden">
                        {points.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                      <p
                        className="text-sm text-gray-600 opacity-0 max-h-0 overflow-hidden group-hover/project:opacity-100 
    group-hover/project:max-h-40 transition-all duration-700 mt-2"
                      >
                        <strong>Technologies:</strong> {technologies.join(", ")}
                      </p>
                      <ul
                        className="text-sm text-gray-500 list-disc pl-5 mt-2 opacity-0 max-h-0 overflow-hidden 
    group-hover/project:opacity-100 group-hover/project:max-h-80 transition-all duration-700"
                      >
                        {points.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="relative">
                      <div className="absolute aspect-video w-full top-1/2 -translate-y-1/2 opacity-0 scale-75 group-hover/project:opacity-100 group-hover/project:scale-100 transition-all duration-500 z-10 group-hover/project:shadow-xl rounded-b-xl">
                        <Image
                          src={image}
                          alt={`${name} image`}
                          width={300}
                          height={300}
                          className="size-full object-cover animate-bounce rounded-xl"
                        />
                      </div>
                    </div>
                    <div className="lg:group-hover/project:pr-8 transition-all duration-700">
                      <div className="size-6 overflow-hidden">
                        <div className="h-6 w-12 flex group-hover/project:-translate-x-1/2 transition-transform duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
